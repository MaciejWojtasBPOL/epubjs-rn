import CookieManager from '@react-native-community/cookies';
import React from 'react';
import StaticServer from 'react-native-static-server';
import { unzip } from '@maciejwojtas/react-native-zip-archive';
import RNFetchBlob from 'rn-fetch-blob';


if (!global.Blob) {
  global.Blob = RNFetchBlob.polyfill.Blob;
}

const DIRS = RNFetchBlob.fs.dirs;

class StreamerService {
  constructor() {
    this._cookie = '';
    this._uploadProgress = undefined;
    this._progress = undefined;
    this._locals = [];
    this._paths = [];
    this._port = `${3000 + Math.round(Math.random() * 1000)}`;
    this._root = 'ebooks';
    this._started = false;
    this._server = React.createRef();
    this._serverOrigin = React.createRef();
    this._urls = [];

    this._serverOrigin.current = 'file://';

    this.add.bind(this);
    this.check.bind(this);
    this.clean.bind(this);
    this.get.bind(this);
    this.filename.bind(this);
    this.kill.bind(this);
    this.remove.bind(this);
    this.setOptions.bind(this);
    this.setup.bind(this);
    this.start.bind(this);
    this.stop.bind(this);
  }

  /**
   * @param {{
   *  cookie?: String,
   *  port?: String,
   *  progress?: (received: number, total: number) => void,
   *  rootFolder?: String,
   *  uploadProgress?: (written: number, total: number) => void,
   * }} options
   */
  setOptions(options) {
    if (options?.port) {
      this._port = options.port;
    }
    if (options?.rootFolder) {
      this._root = options.rootFolder;
    }
    if (options?.cookie) {
      this._cookie = options.cookie;
    }
    if (options?.progress) {
      this._progress = options.progress;
    }
    if (options?.uploadProgress) {
      this._uploadProgress = options.uploadProgress;
    }
  }

  async setup() {
    try {
      const folderExists = await RNFetchBlob.fs.exists(
        `${DIRS.DocumentDir}/${this._root}`,
      );
      if (!folderExists) {
        await RNFetchBlob.fs.mkdir(`${DIRS.DocumentDir}/${this._root}`);
      }
      const server = new StaticServer(this._port, this._root, {
        localOnly: true,
      });
      return server;
    } catch (err) {
      console.log('STREAMER.setup', err);
      return Promise.reject(err);
    }
  }

  async start() {
    this._started = true;
    try {
      const server = await this.setup();
      this._server.current = server;
      const serverOrigin = await this._server.current.start();
      this._serverOrigin.current = serverOrigin;
      return serverOrigin;
    } catch (err) {
      return Promise.reject(err);
    }
  }

  stop() {
    this._started = false;
    this._server.current?.stop();
  }

  kill() {
    this._started = false;
    this._server.current?.kill();
  }

  /**
   * @param {String} bookUrl
   * @param {String} filename
   */
  async add(bookUrl, filename, defaultHeaders) {
    try {
      const headers = this._cookie
        ? { ...defaultHeaders, cookie: this._cookie }
        : defaultHeaders;
      await CookieManager.clearAll();
      const filenameWithoutExt = this.filename(filename);
      const res = await RNFetchBlob.config({
        fileCache: true,
        path: DIRS.DocumentDir + '/' + filenameWithoutExt,
      })
        .fetch('GET', bookUrl, headers)
        .uploadProgress(this._uploadProgress)
        .progress(this._progress);
      const sourcePath = res.path();
      const targetPath = `${DIRS.DocumentDir}/${this._root}/${filenameWithoutExt}`;
      const url = `${this._serverOrigin.current}/${filenameWithoutExt}/`;
      const path = await unzip(sourcePath, targetPath);
      this._locals.push(url);
      this._paths.push(path);
      this._urls.push(bookUrl);
      return url;
    } catch (err) {
      console.log('STREAMER.add', err);
      return Promise.reject(err);
    }
  }

  /**
   * @param {String} bookUrl
   * @param {String} filename
   */
  check(bookUrl, filename) {
    const filenameWithoutExt = this.filename(filename);
    const targetPath = `${DIRS.DocumentDir}/${this._root}/${filenameWithoutExt}`;
    return RNFetchBlob.fs.exists(targetPath);
  }

  clean() {
    this._paths.forEach((path) => {
      this.remove(path);
    });
  }

  /**
   * @param {String} filename
   */
  filename(filename) {
    let finalFileName;
    if (filename.indexOf('?') > -1) {
      finalFileName = filename.split('?')[0].replace('.epub', '');
    } else {
      finalFileName = filename.replace('.epub', '');
    }
    return finalFileName;
  }

  /**
   * @param {String} bookUrl
   * @param {String} filename
   */
  async get(bookUrl, filename) {
    try {
      const exists = await this.check(bookUrl, filename);
      if (exists) {
        const filenameWithoutExt = this.filename(filename);
        const url = `${this._serverOrigin.current}/${filenameWithoutExt}/`;
        return url;
      }
      return this.add(bookUrl, filename);
    } catch (err) {
      console.log('STREAMER.get', err);
      return Promise.reject(err);
    }
  }

  /**
   * @param {String} path
   */
  async remove(path) {
    try {
      const stats = await RNFetchBlob.fs.lstat(path);
      if (!stats.length) {
        return;
      }
      const index = this._paths.indexOf(path);
      this._paths.splice(index, 1);
      this._urls.splice(index, 1);
      this._locals.splice(index, 1);
    } catch (err) {
      console.log('STREAMER.remove', err);
      return Promise.reject(err);
    }
  }
}

export default StreamerService;
