const epubjs = `(function webpackUniversalModuleDefinition(root, factory) {
\tif(typeof exports === 'object' && typeof module === 'object')
\t\tmodule.exports = factory(require("xmldom"), (function webpackLoadOptionalExternalModule() { try { return require("jszip"); } catch(e) {} }()));
\telse if(typeof define === 'function' && define.amd)
\t\tdefine(["xmldom", "jszip"], factory);
\telse if(typeof exports === 'object')
\t\texports["ePub"] = factory(require("xmldom"), (function webpackLoadOptionalExternalModule() { try { return require("jszip"); } catch(e) {} }()));
\telse
\t\troot["ePub"] = factory(root["xmldom"], root["jszip"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_16__, __WEBPACK_EXTERNAL_MODULE_68__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ \t// The module cache
/******/ \tvar installedModules = {};
/******/
/******/ \t// The require function
/******/ \tfunction __webpack_require__(moduleId) {
/******/
/******/ \t\t// Check if module is in cache
/******/ \t\tif(installedModules[moduleId]) {
/******/ \t\t\treturn installedModules[moduleId].exports;
/******/ \t\t}
/******/ \t\t// Create a new module (and put it into the cache)
/******/ \t\tvar module = installedModules[moduleId] = {
/******/ \t\t\ti: moduleId,
/******/ \t\t\tl: false,
/******/ \t\t\texports: {}
/******/ \t\t};
/******/
/******/ \t\t// Execute the module function
/******/ \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ \t\t// Flag the module as loaded
/******/ \t\tmodule.l = true;
/******/
/******/ \t\t// Return the exports of the module
/******/ \t\treturn module.exports;
/******/ \t}
/******/
/******/
/******/ \t// expose the modules object (__webpack_modules__)
/******/ \t__webpack_require__.m = modules;
/******/
/******/ \t// expose the module cache
/******/ \t__webpack_require__.c = installedModules;
/******/
/******/ \t// define getter function for harmony exports
/******/ \t__webpack_require__.d = function(exports, name, getter) {
/******/ \t\tif(!__webpack_require__.o(exports, name)) {
/******/ \t\t\tObject.defineProperty(exports, name, {
/******/ \t\t\t\tconfigurable: false,
/******/ \t\t\t\tenumerable: true,
/******/ \t\t\t\tget: getter
/******/ \t\t\t});
/******/ \t\t}
/******/ \t};
/******/
/******/ \t// getDefaultExport function for compatibility with non-harmony modules
/******/ \t__webpack_require__.n = function(module) {
/******/ \t\tvar getter = module && module.__esModule ?
/******/ \t\t\tfunction getDefault() { return module['default']; } :
/******/ \t\t\tfunction getModuleExports() { return module; };
/******/ \t\t__webpack_require__.d(getter, 'a', getter);
/******/ \t\treturn getter;
/******/ \t};
/******/
/******/ \t// Object.prototype.hasOwnProperty.call
/******/ \t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ \t// __webpack_public_path__
/******/ \t__webpack_require__.p = "/dist/";
/******/
/******/ \t// Load entry module and return exports
/******/ \treturn __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
\tvalue: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.uuid = uuid;
exports.documentHeight = documentHeight;
exports.isElement = isElement;
exports.isNumber = isNumber;
exports.isFloat = isFloat;
exports.prefixed = prefixed;
exports.defaults = defaults;
exports.extend = extend;
exports.insert = insert;
exports.locationOf = locationOf;
exports.indexOfSorted = indexOfSorted;
exports.bounds = bounds;
exports.borders = borders;
exports.windowBounds = windowBounds;
exports.indexOfNode = indexOfNode;
exports.indexOfTextNode = indexOfTextNode;
exports.indexOfElementNode = indexOfElementNode;
exports.isXml = isXml;
exports.createBlob = createBlob;
exports.createBlobUrl = createBlobUrl;
exports.revokeBlobUrl = revokeBlobUrl;
exports.createBase64Url = createBase64Url;
exports.type = type;
exports.parse = parse;
exports.qs = qs;
exports.qsa = qsa;
exports.qsp = qsp;
exports.sprint = sprint;
exports.treeWalker = treeWalker;
exports.walk = walk;
exports.blob2base64 = blob2base64;
exports.defer = defer;
exports.querySelectorByType = querySelectorByType;
exports.findChildren = findChildren;
exports.parents = parents;
exports.filterChildren = filterChildren;
exports.getParentByTagName = getParentByTagName;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Core Utilities and Helpers
 * @module Core
*/

/**
 * Vendor prefixed requestAnimationFrame
 * @returns {function} requestAnimationFrame
 * @memberof Core
 */
var requestAnimationFrame = exports.requestAnimationFrame = typeof window != "undefined" ? window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame : false;
var ELEMENT_NODE = 1;
var TEXT_NODE = 3;
var COMMENT_NODE = 8;
var DOCUMENT_NODE = 9;
var _URL = typeof URL != "undefined" ? URL : typeof window != "undefined" ? window.URL || window.webkitURL || window.mozURL : undefined;

/**
 * Generates a UUID
 * based on: http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
 * @returns {string} uuid
 * @memberof Core
 */
function uuid() {
\tvar d = new Date().getTime();
\tvar uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
\t\tvar r = (d + Math.random() * 16) % 16 | 0;
\t\td = Math.floor(d / 16);
\t\treturn (c == "x" ? r : r & 0x7 | 0x8).toString(16);
\t});
\treturn uuid;
}

/**
 * Gets the height of a document
 * @returns {number} height
 * @memberof Core
 */
function documentHeight() {
\treturn Math.max(document.documentElement.clientHeight, document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight);
}

/**
 * Checks if a node is an element
 * @returns {boolean}
 * @memberof Core
 */
function isElement(obj) {
\treturn !!(obj && obj.nodeType == 1);
}

/**
 * @returns {boolean}
 * @memberof Core
 */
function isNumber(n) {
\treturn !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * @returns {boolean}
 * @memberof Core
 */
function isFloat(n) {
\tvar f = parseFloat(n);
\treturn f === n && isNumber(n) && Math.floor(f) !== n;
}

/**
 * Get a prefixed css property
 * @returns {string}
 * @memberof Core
 */
function prefixed(unprefixed) {
\tvar vendors = ["Webkit", "webkit", "Moz", "O", "ms"];
\tvar prefixes = ["-webkit-", "-webkit-", "-moz-", "-o-", "-ms-"];
\tvar upper = unprefixed[0].toUpperCase() + unprefixed.slice(1);
\tvar length = vendors.length;

\tif (typeof document === "undefined" || typeof document.body.style[unprefixed] != "undefined") {
\t\treturn unprefixed;
\t}

\tfor (var i = 0; i < length; i++) {
\t\tif (typeof document.body.style[vendors[i] + upper] != "undefined") {
\t\t\treturn prefixes[i] + unprefixed;
\t\t}
\t}

\treturn unprefixed;
}

/**
 * Apply defaults to an object
 * @param {object} obj
 * @returns {object}
 * @memberof Core
 */
function defaults(obj) {
\tfor (var i = 1, length = arguments.length; i < length; i++) {
\t\tvar source = arguments[i];
\t\tfor (var prop in source) {
\t\t\tif (obj[prop] === void 0) obj[prop] = source[prop];
\t\t}
\t}
\treturn obj;
}

/**
 * Extend properties of an object
 * @param {object} target
 * @returns {object}
 * @memberof Core
 */
function extend(target) {
\tvar sources = [].slice.call(arguments, 1);
\tsources.forEach(function (source) {
\t\tif (!source) return;
\t\tObject.getOwnPropertyNames(source).forEach(function (propName) {
\t\t\tObject.defineProperty(target, propName, Object.getOwnPropertyDescriptor(source, propName));
\t\t});
\t});
\treturn target;
}

/**
 * Fast quicksort insert for sorted array -- based on:
 *  http://stackoverflow.com/questions/1344500/efficient-way-to-insert-a-number-into-a-sorted-array-of-numbers
 * @param {any} item
 * @param {array} array
 * @param {function} [compareFunction]
 * @returns {number} location (in array)
 * @memberof Core
 */
function insert(item, array, compareFunction) {
\tvar location = locationOf(item, array, compareFunction);
\tarray.splice(location, 0, item);

\treturn location;
}

/**
 * Finds where something would fit into a sorted array
 * @param {any} item
 * @param {array} array
 * @param {function} [compareFunction]
 * @param {function} [_start]
 * @param {function} [_end]
 * @returns {number} location (in array)
 * @memberof Core
 */
function locationOf(item, array, compareFunction, _start, _end) {
\tvar start = _start || 0;
\tvar end = _end || array.length;
\tvar pivot = parseInt(start + (end - start) / 2);
\tvar compared;
\tif (!compareFunction) {
\t\tcompareFunction = function compareFunction(a, b) {
\t\t\tif (a > b) return 1;
\t\t\tif (a < b) return -1;
\t\t\tif (a == b) return 0;
\t\t};
\t}
\tif (end - start <= 0) {
\t\treturn pivot;
\t}

\tcompared = compareFunction(array[pivot], item);
\tif (end - start === 1) {
\t\treturn compared >= 0 ? pivot : pivot + 1;
\t}
\tif (compared === 0) {
\t\treturn pivot;
\t}
\tif (compared === -1) {
\t\treturn locationOf(item, array, compareFunction, pivot, end);
\t} else {
\t\treturn locationOf(item, array, compareFunction, start, pivot);
\t}
}

/**
 * Finds index of something in a sorted array
 * Returns -1 if not found
 * @param {any} item
 * @param {array} array
 * @param {function} [compareFunction]
 * @param {function} [_start]
 * @param {function} [_end]
 * @returns {number} index (in array) or -1
 * @memberof Core
 */
function indexOfSorted(item, array, compareFunction, _start, _end) {
\tvar start = _start || 0;
\tvar end = _end || array.length;
\tvar pivot = parseInt(start + (end - start) / 2);
\tvar compared;
\tif (!compareFunction) {
\t\tcompareFunction = function compareFunction(a, b) {
\t\t\tif (a > b) return 1;
\t\t\tif (a < b) return -1;
\t\t\tif (a == b) return 0;
\t\t};
\t}
\tif (end - start <= 0) {
\t\treturn -1; // Not found
\t}

\tcompared = compareFunction(array[pivot], item);
\tif (end - start === 1) {
\t\treturn compared === 0 ? pivot : -1;
\t}
\tif (compared === 0) {
\t\treturn pivot; // Found
\t}
\tif (compared === -1) {
\t\treturn indexOfSorted(item, array, compareFunction, pivot, end);
\t} else {
\t\treturn indexOfSorted(item, array, compareFunction, start, pivot);
\t}
}
/**
 * Find the bounds of an element
 * taking padding and margin into account
 * @param {element} el
 * @returns {{ width: Number, height: Number}}
 * @memberof Core
 */
function bounds(el) {

\tvar style = window.getComputedStyle(el);
\tvar widthProps = ["width", "paddingRight", "paddingLeft", "marginRight", "marginLeft", "borderRightWidth", "borderLeftWidth"];
\tvar heightProps = ["height", "paddingTop", "paddingBottom", "marginTop", "marginBottom", "borderTopWidth", "borderBottomWidth"];

\tvar width = 0;
\tvar height = 0;

\twidthProps.forEach(function (prop) {
\t\twidth += parseFloat(style[prop]) || 0;
\t});

\theightProps.forEach(function (prop) {
\t\theight += parseFloat(style[prop]) || 0;
\t});

\treturn {
\t\theight: height,
\t\twidth: width
\t};
}

/**
 * Find the bounds of an element
 * taking padding, margin and borders into account
 * @param {element} el
 * @returns {{ width: Number, height: Number}}
 * @memberof Core
 */
function borders(el) {

\tvar style = window.getComputedStyle(el);
\tvar widthProps = ["paddingRight", "paddingLeft", "marginRight", "marginLeft", "borderRightWidth", "borderLeftWidth"];
\tvar heightProps = ["paddingTop", "paddingBottom", "marginTop", "marginBottom", "borderTopWidth", "borderBottomWidth"];

\tvar width = 0;
\tvar height = 0;

\twidthProps.forEach(function (prop) {
\t\twidth += parseFloat(style[prop]) || 0;
\t});

\theightProps.forEach(function (prop) {
\t\theight += parseFloat(style[prop]) || 0;
\t});

\treturn {
\t\theight: height,
\t\twidth: width
\t};
}

/**
 * Find the equivelent of getBoundingClientRect of a browser window
 * @returns {{ width: Number, height: Number, top: Number, left: Number, right: Number, bottom: Number }}
 * @memberof Core
 */
function windowBounds() {

\tvar width = window.innerWidth;
\tvar height = window.innerHeight;

\treturn {
\t\ttop: 0,
\t\tleft: 0,
\t\tright: width,
\t\tbottom: height,
\t\twidth: width,
\t\theight: height
\t};
}

/**
 * Gets the index of a node in its parent
 * @private
 * @memberof Core
 */
function indexOfNode(node, typeId) {
\tvar parent = node.parentNode;
\tvar children = parent.childNodes;
\tvar sib;
\tvar index = -1;
\tfor (var i = 0; i < children.length; i++) {
\t\tsib = children[i];
\t\tif (sib.nodeType === typeId) {
\t\t\tindex++;
\t\t}
\t\tif (sib == node) break;
\t}

\treturn index;
}

/**
 * Gets the index of a text node in its parent
 * @param {node} textNode
 * @returns {number} index
 * @memberof Core
 */
function indexOfTextNode(textNode) {
\treturn indexOfNode(textNode, TEXT_NODE);
}

/**
 * Gets the index of an element node in its parent
 * @param {element} elementNode
 * @returns {number} index
 * @memberof Core
 */
function indexOfElementNode(elementNode) {
\treturn indexOfNode(elementNode, ELEMENT_NODE);
}

/**
 * Check if extension is xml
 * @param {string} ext
 * @returns {boolean}
 * @memberof Core
 */
function isXml(ext) {
\treturn ["xml", "opf", "ncx"].indexOf(ext) > -1;
}

/**
 * Create a new blob
 * @param {any} content
 * @param {string} mime
 * @returns {Blob}
 * @memberof Core
 */
function createBlob(content, mime) {
\treturn new Blob([content], { type: mime });
}

/**
 * Create a new blob url
 * @param {any} content
 * @param {string} mime
 * @returns {string} url
 * @memberof Core
 */
function createBlobUrl(content, mime) {
\tvar tempUrl;
\tvar blob = createBlob(content, mime);

\ttempUrl = _URL.createObjectURL(blob);

\treturn tempUrl;
}

/**
 * Remove a blob url
 * @param {string} url
 * @memberof Core
 */
function revokeBlobUrl(url) {
\treturn _URL.revokeObjectURL(url);
}

/**
 * Create a new base64 encoded url
 * @param {any} content
 * @param {string} mime
 * @returns {string} url
 * @memberof Core
 */
function createBase64Url(content, mime) {
\tvar data;
\tvar datauri;

\tif (typeof content !== "string") {
\t\t// Only handles strings
\t\treturn;
\t}

\tdata = btoa(encodeURIComponent(content));

\tdatauri = "data:" + mime + ";base64," + data;

\treturn datauri;
}

/**
 * Get type of an object
 * @param {object} obj
 * @returns {string} type
 * @memberof Core
 */
function type(obj) {
\treturn Object.prototype.toString.call(obj).slice(8, -1);
}

/**
 * Parse xml (or html) markup
 * @param {string} markup
 * @param {string} mime
 * @param {boolean} forceXMLDom force using xmlDom to parse instead of native parser
 * @returns {document} document
 * @memberof Core
 */
function parse(markup, mime, forceXMLDom) {
\tvar doc;
\tvar Parser;

\tif (typeof DOMParser === "undefined" || forceXMLDom) {
\t\tParser = __webpack_require__(16).DOMParser;
\t} else {
\t\tParser = DOMParser;
\t}

\t// Remove byte order mark before parsing
\t// https://www.w3.org/International/questions/qa-byte-order-mark
\tif (markup.charCodeAt(0) === 0xFEFF) {
\t\tmarkup = markup.slice(1);
\t}

\tdoc = new Parser().parseFromString(markup, mime);

\treturn doc;
}

/**
 * querySelector polyfill
 * @param {element} el
 * @param {string} sel selector string
 * @returns {element} element
 * @memberof Core
 */
function qs(el, sel) {
\tvar elements;
\tif (!el) {
\t\tthrow new Error("No Element Provided");
\t}

\tif (typeof el.querySelector != "undefined") {
\t\treturn el.querySelector(sel);
\t} else {
\t\telements = el.getElementsByTagName(sel);
\t\tif (elements.length) {
\t\t\treturn elements[0];
\t\t}
\t}
}

/**
 * querySelectorAll polyfill
 * @param {element} el
 * @param {string} sel selector string
 * @returns {element[]} elements
 * @memberof Core
 */
function qsa(el, sel) {

\tif (typeof el.querySelector != "undefined") {
\t\treturn el.querySelectorAll(sel);
\t} else {
\t\treturn el.getElementsByTagName(sel);
\t}
}

/**
 * querySelector by property
 * @param {element} el
 * @param {string} sel selector string
 * @param {props[]} props
 * @returns {element[]} elements
 * @memberof Core
 */
function qsp(el, sel, props) {
\tvar q, filtered;
\tif (typeof el.querySelector != "undefined") {
\t\tsel += "[";
\t\tfor (var prop in props) {
\t\t\tsel += prop + "~='" + props[prop] + "'";
\t\t}
\t\tsel += "]";
\t\treturn el.querySelector(sel);
\t} else {
\t\tq = el.getElementsByTagName(sel);
\t\tfiltered = Array.prototype.slice.call(q, 0).filter(function (el) {
\t\t\tfor (var prop in props) {
\t\t\t\tif (el.getAttribute(prop) === props[prop]) {
\t\t\t\t\treturn true;
\t\t\t\t}
\t\t\t}
\t\t\treturn false;
\t\t});

\t\tif (filtered) {
\t\t\treturn filtered[0];
\t\t}
\t}
}

/**
 * Sprint through all text nodes in a document
 * @memberof Core
 * @param  {element} root element to start with
 * @param  {function} func function to run on each element
 */
function sprint(root, func) {
\tvar doc = root.ownerDocument || root;
\tif (typeof doc.createTreeWalker !== "undefined") {
\t\ttreeWalker(root, func, NodeFilter.SHOW_TEXT);
\t} else {
\t\twalk(root, function (node) {
\t\t\tif (node && node.nodeType === 3) {
\t\t\t\t// Node.TEXT_NODE
\t\t\t\tfunc(node);
\t\t\t}
\t\t}, true);
\t}
}

function treeWalker(root, func, filter) {
\tvar treeWalker = document.createTreeWalker(root, filter, null, false);
\tvar node = void 0;
\twhile (node = treeWalker.nextNode()) {
\t\tfunc(node);
\t}
}

/**
 * @memberof Core
 * @param {node} node
 * @param {callback} return false for continue,true for break inside callback
 */
function walk(node, callback) {
\tif (callback(node)) {
\t\treturn true;
\t}
\tnode = node.firstChild;
\tif (node) {
\t\tdo {
\t\t\tvar walked = walk(node, callback);
\t\t\tif (walked) {
\t\t\t\treturn true;
\t\t\t}
\t\t\tnode = node.nextSibling;
\t\t} while (node);
\t}
}

/**
 * Convert a blob to a base64 encoded string
 * @param {Blog} blob
 * @returns {string}
 * @memberof Core
 */
function blob2base64(blob) {
\treturn new Promise(function (resolve, reject) {
\t\tvar reader = new FileReader();
\t\treader.readAsDataURL(blob);
\t\treader.onloadend = function () {
\t\t\tresolve(reader.result);
\t\t};
\t});
}

/**
 * Creates a new pending promise and provides methods to resolve or reject it.
 * From: https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/Promise.jsm/Deferred#backwards_forwards_compatible
 * @memberof Core
 */
function defer() {
\tvar _this = this;

\t/* A method to resolve the associated Promise with the value passed.
  * If the promise is already settled it does nothing.
  *
  * @param {anything} value : This value is used to resolve the promise
  * If the value is a Promise then the associated promise assumes the state
  * of Promise passed as value.
  */
\tthis.resolve = null;

\t/* A method to reject the assocaited Promise with the value passed.
  * If the promise is already settled it does nothing.
  *
  * @param {anything} reason: The reason for the rejection of the Promise.
  * Generally its an Error object. If however a Promise is passed, then the Promise
  * itself will be the reason for rejection no matter the state of the Promise.
  */
\tthis.reject = null;

\tthis.id = uuid();

\t/* A newly created Pomise object.
  * Initially in pending state.
  */
\tthis.promise = new Promise(function (resolve, reject) {
\t\t_this.resolve = resolve;
\t\t_this.reject = reject;
\t});
\tObject.freeze(this);
}

/**
 * querySelector with filter by epub type
 * @param {element} html
 * @param {string} element element type to find
 * @param {string} type epub type to find
 * @returns {element[]} elements
 * @memberof Core
 */
function querySelectorByType(html, element, type) {
\tvar query;
\tif (typeof html.querySelector != "undefined") {
\t\tquery = html.querySelector(element + "[*|type=\\"" + type + "\\"]");
\t}
\t// Handle IE not supporting namespaced epub:type in querySelector
\tif (!query || query.length === 0) {
\t\tquery = qsa(html, element);
\t\tfor (var i = 0; i < query.length; i++) {
\t\t\tif (query[i].getAttributeNS("http://www.idpf.org/2007/ops", "type") === type || query[i].getAttribute("epub:type") === type) {
\t\t\t\treturn query[i];
\t\t\t}
\t\t}
\t} else {
\t\treturn query;
\t}
}

/**
 * Find direct decendents of an element
 * @param {element} el
 * @returns {element[]} children
 * @memberof Core
 */
function findChildren(el) {
\tvar result = [];
\tvar childNodes = el.childNodes;
\tfor (var i = 0; i < childNodes.length; i++) {
\t\tvar node = childNodes[i];
\t\tif (node.nodeType === 1) {
\t\t\tresult.push(node);
\t\t}
\t}
\treturn result;
}

/**
 * Find all parents (ancestors) of an element
 * @param {element} node
 * @returns {element[]} parents
 * @memberof Core
 */
function parents(node) {
\tvar nodes = [node];
\tfor (; node; node = node.parentNode) {
\t\tnodes.unshift(node);
\t}
\treturn nodes;
}

/**
 * Find all direct decendents of a specific type
 * @param {element} el
 * @param {string} nodeName
 * @param {boolean} [single]
 * @returns {element[]} children
 * @memberof Core
 */
function filterChildren(el, nodeName, single) {
\tvar result = [];
\tvar childNodes = el.childNodes;
\tfor (var i = 0; i < childNodes.length; i++) {
\t\tvar node = childNodes[i];
\t\tif (node.nodeType === 1 && node.nodeName.toLowerCase() === nodeName) {
\t\t\tif (single) {
\t\t\t\treturn node;
\t\t\t} else {
\t\t\t\tresult.push(node);
\t\t\t}
\t\t}
\t}
\tif (!single) {
\t\treturn result;
\t}
}

/**
 * Filter all parents (ancestors) with tag name
 * @param {element} node
 * @param {string} tagname
 * @returns {element[]} parents
 * @memberof Core
 */
function getParentByTagName(node, tagname) {
\tvar parent = void 0;
\tif (node === null || tagname === '') return;
\tparent = node.parentNode;
\twhile (parent.nodeType === 1) {
\t\tif (parent.tagName.toLowerCase() === tagname) {
\t\t\treturn parent;
\t\t}
\t\tparent = parent.parentNode;
\t}
}

/**
 * Lightweight Polyfill for DOM Range
 * @class
 * @memberof Core
 */

var RangeObject = exports.RangeObject = function () {
\tfunction RangeObject() {
\t\t_classCallCheck(this, RangeObject);

\t\tthis.collapsed = false;
\t\tthis.commonAncestorContainer = undefined;
\t\tthis.endContainer = undefined;
\t\tthis.endOffset = undefined;
\t\tthis.startContainer = undefined;
\t\tthis.startOffset = undefined;
\t}

\t_createClass(RangeObject, [{
\t\tkey: "setStart",
\t\tvalue: function setStart(startNode, startOffset) {
\t\t\tthis.startContainer = startNode;
\t\t\tthis.startOffset = startOffset;

\t\t\tif (!this.endContainer) {
\t\t\t\tthis.collapse(true);
\t\t\t} else {
\t\t\t\tthis.commonAncestorContainer = this._commonAncestorContainer();
\t\t\t}

\t\t\tthis._checkCollapsed();
\t\t}
\t}, {
\t\tkey: "setEnd",
\t\tvalue: function setEnd(endNode, endOffset) {
\t\t\tthis.endContainer = endNode;
\t\t\tthis.endOffset = endOffset;

\t\t\tif (!this.startContainer) {
\t\t\t\tthis.collapse(false);
\t\t\t} else {
\t\t\t\tthis.collapsed = false;
\t\t\t\tthis.commonAncestorContainer = this._commonAncestorContainer();
\t\t\t}

\t\t\tthis._checkCollapsed();
\t\t}
\t}, {
\t\tkey: "collapse",
\t\tvalue: function collapse(toStart) {
\t\t\tthis.collapsed = true;
\t\t\tif (toStart) {
\t\t\t\tthis.endContainer = this.startContainer;
\t\t\t\tthis.endOffset = this.startOffset;
\t\t\t\tthis.commonAncestorContainer = this.startContainer.parentNode;
\t\t\t} else {
\t\t\t\tthis.startContainer = this.endContainer;
\t\t\t\tthis.startOffset = this.endOffset;
\t\t\t\tthis.commonAncestorContainer = this.endOffset.parentNode;
\t\t\t}
\t\t}
\t}, {
\t\tkey: "selectNode",
\t\tvalue: function selectNode(referenceNode) {
\t\t\tvar parent = referenceNode.parentNode;
\t\t\tvar index = Array.prototype.indexOf.call(parent.childNodes, referenceNode);
\t\t\tthis.setStart(parent, index);
\t\t\tthis.setEnd(parent, index + 1);
\t\t}
\t}, {
\t\tkey: "selectNodeContents",
\t\tvalue: function selectNodeContents(referenceNode) {
\t\t\tvar end = referenceNode.childNodes[referenceNode.childNodes - 1];
\t\t\tvar endIndex = referenceNode.nodeType === 3 ? referenceNode.textContent.length : parent.childNodes.length;
\t\t\tthis.setStart(referenceNode, 0);
\t\t\tthis.setEnd(referenceNode, endIndex);
\t\t}
\t}, {
\t\tkey: "_commonAncestorContainer",
\t\tvalue: function _commonAncestorContainer(startContainer, endContainer) {
\t\t\tvar startParents = parents(startContainer || this.startContainer);
\t\t\tvar endParents = parents(endContainer || this.endContainer);

\t\t\tif (startParents[0] != endParents[0]) return undefined;

\t\t\tfor (var i = 0; i < startParents.length; i++) {
\t\t\t\tif (startParents[i] != endParents[i]) {
\t\t\t\t\treturn startParents[i - 1];
\t\t\t\t}
\t\t\t}
\t\t}
\t}, {
\t\tkey: "_checkCollapsed",
\t\tvalue: function _checkCollapsed() {
\t\t\tif (this.startContainer === this.endContainer && this.startOffset === this.endOffset) {
\t\t\t\tthis.collapsed = true;
\t\t\t} else {
\t\t\t\tthis.collapsed = false;
\t\t\t}
\t\t}
\t}, {
\t\tkey: "toString",
\t\tvalue: function toString() {
\t\t\t// TODO: implement walking between start and end to find text
\t\t}
\t}]);

\treturn RangeObject;
}();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
\tvalue: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _core = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ELEMENT_NODE = 1;
var TEXT_NODE = 3;
var COMMENT_NODE = 8;
var DOCUMENT_NODE = 9;

/**
\t* Parsing and creation of EpubCFIs: http://www.idpf.org/epub/linking/cfi/epub-cfi.html

\t* Implements:
\t* - Character Offset: epubcfi(/6/4[chap01ref]!/4[body01]/10[para05]/2/1:3)
\t* - Simple Ranges : epubcfi(/6/4[chap01ref]!/4[body01]/10[para05],/2/1:1,/3:4)

\t* Does Not Implement:
\t* - Temporal Offset (~)
\t* - Spatial Offset (@)
\t* - Temporal-Spatial Offset (~ + @)
\t* - Text Location Assertion ([)
\t* @class
\t@param {string | Range | Node } [cfiFrom]
\t@param {string | object} [base]
\t@param {string} [ignoreClass] class to ignore when parsing DOM
*/

var EpubCFI = function () {
\tfunction EpubCFI(cfiFrom, base, ignoreClass) {
\t\t_classCallCheck(this, EpubCFI);

\t\tvar type;

\t\tthis.str = "";

\t\tthis.base = {};
\t\tthis.spinePos = 0; // For compatibility

\t\tthis.range = false; // true || false;

\t\tthis.path = {};
\t\tthis.start = null;
\t\tthis.end = null;

\t\t// Allow instantiation without the "new" keyword
\t\tif (!(this instanceof EpubCFI)) {
\t\t\treturn new EpubCFI(cfiFrom, base, ignoreClass);
\t\t}

\t\tif (typeof base === "string") {
\t\t\tthis.base = this.parseComponent(base);
\t\t} else if ((typeof base === "undefined" ? "undefined" : _typeof(base)) === "object" && base.steps) {
\t\t\tthis.base = base;
\t\t}

\t\ttype = this.checkType(cfiFrom);

\t\tif (type === "string") {
\t\t\tthis.str = cfiFrom;
\t\t\treturn (0, _core.extend)(this, this.parse(cfiFrom));
\t\t} else if (type === "range") {
\t\t\treturn (0, _core.extend)(this, this.fromRange(cfiFrom, this.base, ignoreClass));
\t\t} else if (type === "node") {
\t\t\treturn (0, _core.extend)(this, this.fromNode(cfiFrom, this.base, ignoreClass));
\t\t} else if (type === "EpubCFI" && cfiFrom.path) {
\t\t\treturn cfiFrom;
\t\t} else if (!cfiFrom) {
\t\t\treturn this;
\t\t} else {
\t\t\tthrow new TypeError("not a valid argument for EpubCFI");
\t\t}
\t}

\t/**
  * Check the type of constructor input
  * @private
  */


\t_createClass(EpubCFI, [{
\t\tkey: "checkType",
\t\tvalue: function checkType(cfi) {

\t\t\tif (this.isCfiString(cfi)) {
\t\t\t\treturn "string";
\t\t\t\t// Is a range object
\t\t\t} else if ((typeof cfi === "undefined" ? "undefined" : _typeof(cfi)) === "object" && ((0, _core.type)(cfi) === "Range" || typeof cfi.startContainer != "undefined")) {
\t\t\t\treturn "range";
\t\t\t} else if ((typeof cfi === "undefined" ? "undefined" : _typeof(cfi)) === "object" && typeof cfi.nodeType != "undefined") {
\t\t\t\t// || typeof cfi === "function"
\t\t\t\treturn "node";
\t\t\t} else if ((typeof cfi === "undefined" ? "undefined" : _typeof(cfi)) === "object" && cfi instanceof EpubCFI) {
\t\t\t\treturn "EpubCFI";
\t\t\t} else {
\t\t\t\treturn false;
\t\t\t}
\t\t}

\t\t/**
   * Parse a cfi string to a CFI object representation
   * @param {string} cfiStr
   * @returns {object} cfi
   */

\t}, {
\t\tkey: "parse",
\t\tvalue: function parse(cfiStr) {
\t\t\tvar cfi = {
\t\t\t\tspinePos: -1,
\t\t\t\trange: false,
\t\t\t\tbase: {},
\t\t\t\tpath: {},
\t\t\t\tstart: null,
\t\t\t\tend: null
\t\t\t};
\t\t\tvar baseComponent, pathComponent, range;

\t\t\tif (typeof cfiStr !== "string") {
\t\t\t\treturn { spinePos: -1 };
\t\t\t}

\t\t\tif (cfiStr.indexOf("epubcfi(") === 0 && cfiStr[cfiStr.length - 1] === ")") {
\t\t\t\t// Remove intial epubcfi( and ending )
\t\t\t\tcfiStr = cfiStr.slice(8, cfiStr.length - 1);
\t\t\t}

\t\t\tbaseComponent = this.getChapterComponent(cfiStr);

\t\t\t// Make sure this is a valid cfi or return
\t\t\tif (!baseComponent) {
\t\t\t\treturn { spinePos: -1 };
\t\t\t}

\t\t\tcfi.base = this.parseComponent(baseComponent);

\t\t\tpathComponent = this.getPathComponent(cfiStr);
\t\t\tcfi.path = this.parseComponent(pathComponent);

\t\t\trange = this.getRange(cfiStr);

\t\t\tif (range) {
\t\t\t\tcfi.range = true;
\t\t\t\tcfi.start = this.parseComponent(range[0]);
\t\t\t\tcfi.end = this.parseComponent(range[1]);
\t\t\t}

\t\t\t// Get spine node position
\t\t\t// cfi.spineSegment = cfi.base.steps[1];

\t\t\t// Chapter segment is always the second step
\t\t\tcfi.spinePos = cfi.base.steps[1].index;

\t\t\treturn cfi;
\t\t}
\t}, {
\t\tkey: "parseComponent",
\t\tvalue: function parseComponent(componentStr) {
\t\t\tvar component = {
\t\t\t\tsteps: [],
\t\t\t\tterminal: {
\t\t\t\t\toffset: null,
\t\t\t\t\tassertion: null
\t\t\t\t}
\t\t\t};
\t\t\tvar parts = componentStr.split(":");
\t\t\tvar steps = parts[0].split("/");
\t\t\tvar terminal;

\t\t\tif (parts.length > 1) {
\t\t\t\tterminal = parts[1];
\t\t\t\tcomponent.terminal = this.parseTerminal(terminal);
\t\t\t}

\t\t\tif (steps[0] === "") {
\t\t\t\tsteps.shift(); // Ignore the first slash
\t\t\t}

\t\t\tcomponent.steps = steps.map(function (step) {
\t\t\t\treturn this.parseStep(step);
\t\t\t}.bind(this));

\t\t\treturn component;
\t\t}
\t}, {
\t\tkey: "parseStep",
\t\tvalue: function parseStep(stepStr) {
\t\t\tvar type, num, index, has_brackets, id;

\t\t\thas_brackets = stepStr.match(/\\[(.*)\\]/);
\t\t\tif (has_brackets && has_brackets[1]) {
\t\t\t\tid = has_brackets[1];
\t\t\t}

\t\t\t//-- Check if step is a text node or element
\t\t\tnum = parseInt(stepStr);

\t\t\tif (isNaN(num)) {
\t\t\t\treturn;
\t\t\t}

\t\t\tif (num % 2 === 0) {
\t\t\t\t// Even = is an element
\t\t\t\ttype = "element";
\t\t\t\tindex = num / 2 - 1;
\t\t\t} else {
\t\t\t\ttype = "text";
\t\t\t\tindex = (num - 1) / 2;
\t\t\t}

\t\t\treturn {
\t\t\t\t"type": type,
\t\t\t\t"index": index,
\t\t\t\t"id": id || null
\t\t\t};
\t\t}
\t}, {
\t\tkey: "parseTerminal",
\t\tvalue: function parseTerminal(termialStr) {
\t\t\tvar characterOffset, textLocationAssertion;
\t\t\tvar assertion = termialStr.match(/\\[(.*)\\]/);

\t\t\tif (assertion && assertion[1]) {
\t\t\t\tcharacterOffset = parseInt(termialStr.split("[")[0]);
\t\t\t\ttextLocationAssertion = assertion[1];
\t\t\t} else {
\t\t\t\tcharacterOffset = parseInt(termialStr);
\t\t\t}

\t\t\tif (!(0, _core.isNumber)(characterOffset)) {
\t\t\t\tcharacterOffset = null;
\t\t\t}

\t\t\treturn {
\t\t\t\t"offset": characterOffset,
\t\t\t\t"assertion": textLocationAssertion
\t\t\t};
\t\t}
\t}, {
\t\tkey: "getChapterComponent",
\t\tvalue: function getChapterComponent(cfiStr) {

\t\t\tvar indirection = cfiStr.split("!");

\t\t\treturn indirection[0];
\t\t}
\t}, {
\t\tkey: "getPathComponent",
\t\tvalue: function getPathComponent(cfiStr) {

\t\t\tvar indirection = cfiStr.split("!");

\t\t\tif (indirection[1]) {
\t\t\t\tvar ranges = indirection[1].split(",");
\t\t\t\treturn ranges[0];
\t\t\t}
\t\t}
\t}, {
\t\tkey: "getRange",
\t\tvalue: function getRange(cfiStr) {

\t\t\tvar ranges = cfiStr.split(",");

\t\t\tif (ranges.length === 3) {
\t\t\t\treturn [ranges[1], ranges[2]];
\t\t\t}

\t\t\treturn false;
\t\t}
\t}, {
\t\tkey: "getCharecterOffsetComponent",
\t\tvalue: function getCharecterOffsetComponent(cfiStr) {
\t\t\tvar splitStr = cfiStr.split(":");
\t\t\treturn splitStr[1] || "";
\t\t}
\t}, {
\t\tkey: "joinSteps",
\t\tvalue: function joinSteps(steps) {
\t\t\tif (!steps) {
\t\t\t\treturn "";
\t\t\t}

\t\t\treturn steps.map(function (part) {
\t\t\t\tvar segment = "";

\t\t\t\tif (part.type === "element") {
\t\t\t\t\tsegment += (part.index + 1) * 2;
\t\t\t\t}

\t\t\t\tif (part.type === "text") {
\t\t\t\t\tsegment += 1 + 2 * part.index; // TODO: double check that this is odd
\t\t\t\t}

\t\t\t\tif (part.id) {
\t\t\t\t\tsegment += "[" + part.id + "]";
\t\t\t\t}

\t\t\t\treturn segment;
\t\t\t}).join("/");
\t\t}
\t}, {
\t\tkey: "segmentString",
\t\tvalue: function segmentString(segment) {
\t\t\tvar segmentString = "/";

\t\t\tsegmentString += this.joinSteps(segment.steps);

\t\t\tif (segment.terminal && segment.terminal.offset != null) {
\t\t\t\tsegmentString += ":" + segment.terminal.offset;
\t\t\t}

\t\t\tif (segment.terminal && segment.terminal.assertion != null) {
\t\t\t\tsegmentString += "[" + segment.terminal.assertion + "]";
\t\t\t}

\t\t\treturn segmentString;
\t\t}

\t\t/**
   * Convert CFI to a epubcfi(...) string
   * @returns {string} epubcfi
   */

\t}, {
\t\tkey: "toString",
\t\tvalue: function toString() {
\t\t\tvar cfiString = "epubcfi(";

\t\t\tcfiString += this.segmentString(this.base);

\t\t\tcfiString += "!";
\t\t\tcfiString += this.segmentString(this.path);

\t\t\t// Add Range, if present
\t\t\tif (this.range && this.start) {
\t\t\t\tcfiString += ",";
\t\t\t\tcfiString += this.segmentString(this.start);
\t\t\t}

\t\t\tif (this.range && this.end) {
\t\t\t\tcfiString += ",";
\t\t\t\tcfiString += this.segmentString(this.end);
\t\t\t}

\t\t\tcfiString += ")";

\t\t\treturn cfiString;
\t\t}

\t\t/**
   * Compare which of two CFIs is earlier in the text
   * @returns {number} First is earlier = 1, Second is earlier = -1, They are equal = 0
   */

\t}, {
\t\tkey: "compare",
\t\tvalue: function compare(cfiOne, cfiTwo) {
\t\t\tvar stepsA, stepsB;
\t\t\tvar terminalA, terminalB;

\t\t\tvar rangeAStartSteps, rangeAEndSteps;
\t\t\tvar rangeBEndSteps, rangeBEndSteps;
\t\t\tvar rangeAStartTerminal, rangeAEndTerminal;
\t\t\tvar rangeBStartTerminal, rangeBEndTerminal;

\t\t\tif (typeof cfiOne === "string") {
\t\t\t\tcfiOne = new EpubCFI(cfiOne);
\t\t\t}
\t\t\tif (typeof cfiTwo === "string") {
\t\t\t\tcfiTwo = new EpubCFI(cfiTwo);
\t\t\t}
\t\t\t// Compare Spine Positions
\t\t\tif (cfiOne.spinePos > cfiTwo.spinePos) {
\t\t\t\treturn 1;
\t\t\t}
\t\t\tif (cfiOne.spinePos < cfiTwo.spinePos) {
\t\t\t\treturn -1;
\t\t\t}

\t\t\tif (cfiOne.range) {
\t\t\t\tstepsA = cfiOne.path.steps.concat(cfiOne.start.steps);
\t\t\t\tterminalA = cfiOne.start.terminal;
\t\t\t} else {
\t\t\t\tstepsA = cfiOne.path.steps;
\t\t\t\tterminalA = cfiOne.path.terminal;
\t\t\t}

\t\t\tif (cfiTwo.range) {
\t\t\t\tstepsB = cfiTwo.path.steps.concat(cfiTwo.start.steps);
\t\t\t\tterminalB = cfiTwo.start.terminal;
\t\t\t} else {
\t\t\t\tstepsB = cfiTwo.path.steps;
\t\t\t\tterminalB = cfiTwo.path.terminal;
\t\t\t}

\t\t\t// Compare Each Step in the First item
\t\t\tfor (var i = 0; i < stepsA.length; i++) {
\t\t\t\tif (!stepsA[i]) {
\t\t\t\t\treturn -1;
\t\t\t\t}
\t\t\t\tif (!stepsB[i]) {
\t\t\t\t\treturn 1;
\t\t\t\t}
\t\t\t\tif (stepsA[i].index > stepsB[i].index) {
\t\t\t\t\treturn 1;
\t\t\t\t}
\t\t\t\tif (stepsA[i].index < stepsB[i].index) {
\t\t\t\t\treturn -1;
\t\t\t\t}
\t\t\t\t// Otherwise continue checking
\t\t\t}

\t\t\t// All steps in First equal to Second and First is Less Specific
\t\t\tif (stepsA.length < stepsB.length) {
\t\t\t\treturn 1;
\t\t\t}

\t\t\t// Compare the charecter offset of the text node
\t\t\tif (terminalA.offset > terminalB.offset) {
\t\t\t\treturn 1;
\t\t\t}
\t\t\tif (terminalA.offset < terminalB.offset) {
\t\t\t\treturn -1;
\t\t\t}

\t\t\t// CFI's are equal
\t\t\treturn 0;
\t\t}
\t}, {
\t\tkey: "step",
\t\tvalue: function step(node) {
\t\t\tvar nodeType = node.nodeType === TEXT_NODE ? "text" : "element";

\t\t\treturn {
\t\t\t\t"id": node.id,
\t\t\t\t"tagName": node.tagName,
\t\t\t\t"type": nodeType,
\t\t\t\t"index": this.position(node)
\t\t\t};
\t\t}
\t}, {
\t\tkey: "filteredStep",
\t\tvalue: function filteredStep(node, ignoreClass) {
\t\t\tvar filteredNode = this.filter(node, ignoreClass);
\t\t\tvar nodeType;

\t\t\t// Node filtered, so ignore
\t\t\tif (!filteredNode) {
\t\t\t\treturn;
\t\t\t}

\t\t\t// Otherwise add the filter node in
\t\t\tnodeType = filteredNode.nodeType === TEXT_NODE ? "text" : "element";

\t\t\treturn {
\t\t\t\t"id": filteredNode.id,
\t\t\t\t"tagName": filteredNode.tagName,
\t\t\t\t"type": nodeType,
\t\t\t\t"index": this.filteredPosition(filteredNode, ignoreClass)
\t\t\t};
\t\t}
\t}, {
\t\tkey: "pathTo",
\t\tvalue: function pathTo(node, offset, ignoreClass) {
\t\t\tvar segment = {
\t\t\t\tsteps: [],
\t\t\t\tterminal: {
\t\t\t\t\toffset: null,
\t\t\t\t\tassertion: null
\t\t\t\t}
\t\t\t};
\t\t\tvar currentNode = node;
\t\t\tvar step;

\t\t\twhile (currentNode && currentNode.parentNode && currentNode.parentNode.nodeType != DOCUMENT_NODE) {

\t\t\t\tif (ignoreClass) {
\t\t\t\t\tstep = this.filteredStep(currentNode, ignoreClass);
\t\t\t\t} else {
\t\t\t\t\tstep = this.step(currentNode);
\t\t\t\t}

\t\t\t\tif (step) {
\t\t\t\t\tsegment.steps.unshift(step);
\t\t\t\t}

\t\t\t\tcurrentNode = currentNode.parentNode;
\t\t\t}

\t\t\tif (offset != null && offset >= 0) {

\t\t\t\tsegment.terminal.offset = offset;

\t\t\t\t// Make sure we are getting to a textNode if there is an offset
\t\t\t\tif (segment.steps[segment.steps.length - 1].type != "text") {
\t\t\t\t\tsegment.steps.push({
\t\t\t\t\t\t"type": "text",
\t\t\t\t\t\t"index": 0
\t\t\t\t\t});
\t\t\t\t}
\t\t\t}

\t\t\treturn segment;
\t\t}
\t}, {
\t\tkey: "equalStep",
\t\tvalue: function equalStep(stepA, stepB) {
\t\t\tif (!stepA || !stepB) {
\t\t\t\treturn false;
\t\t\t}

\t\t\tif (stepA.index === stepB.index && stepA.id === stepB.id && stepA.type === stepB.type) {
\t\t\t\treturn true;
\t\t\t}

\t\t\treturn false;
\t\t}

\t\t/**
   * Create a CFI object from a Range
   * @param {Range} range
   * @param {string | object} base
   * @param {string} [ignoreClass]
   * @returns {object} cfi
   */

\t}, {
\t\tkey: "fromRange",
\t\tvalue: function fromRange(range, base, ignoreClass) {
\t\t\tvar cfi = {
\t\t\t\trange: false,
\t\t\t\tbase: {},
\t\t\t\tpath: {},
\t\t\t\tstart: null,
\t\t\t\tend: null
\t\t\t};

\t\t\tvar start = range.startContainer;
\t\t\tvar end = range.endContainer;

\t\t\tvar startOffset = range.startOffset;
\t\t\tvar endOffset = range.endOffset;

\t\t\tvar needsIgnoring = false;

\t\t\tif (ignoreClass) {
\t\t\t\t// Tell pathTo if / what to ignore
\t\t\t\tneedsIgnoring = start.ownerDocument.querySelector("." + ignoreClass) != null;
\t\t\t}

\t\t\tif (typeof base === "string") {
\t\t\t\tcfi.base = this.parseComponent(base);
\t\t\t\tcfi.spinePos = cfi.base.steps[1].index;
\t\t\t} else if ((typeof base === "undefined" ? "undefined" : _typeof(base)) === "object") {
\t\t\t\tcfi.base = base;
\t\t\t}

\t\t\tif (range.collapsed) {
\t\t\t\tif (needsIgnoring) {
\t\t\t\t\tstartOffset = this.patchOffset(start, startOffset, ignoreClass);
\t\t\t\t}
\t\t\t\tcfi.path = this.pathTo(start, startOffset, ignoreClass);
\t\t\t} else {
\t\t\t\tcfi.range = true;

\t\t\t\tif (needsIgnoring) {
\t\t\t\t\tstartOffset = this.patchOffset(start, startOffset, ignoreClass);
\t\t\t\t}

\t\t\t\tcfi.start = this.pathTo(start, startOffset, ignoreClass);
\t\t\t\tif (needsIgnoring) {
\t\t\t\t\tendOffset = this.patchOffset(end, endOffset, ignoreClass);
\t\t\t\t}

\t\t\t\tcfi.end = this.pathTo(end, endOffset, ignoreClass);

\t\t\t\t// Create a new empty path
\t\t\t\tcfi.path = {
\t\t\t\t\tsteps: [],
\t\t\t\t\tterminal: null
\t\t\t\t};

\t\t\t\t// Push steps that are shared between start and end to the common path
\t\t\t\tvar len = cfi.start.steps.length;
\t\t\t\tvar i;

\t\t\t\tfor (i = 0; i < len; i++) {
\t\t\t\t\tif (this.equalStep(cfi.start.steps[i], cfi.end.steps[i])) {
\t\t\t\t\t\tif (i === len - 1) {
\t\t\t\t\t\t\t// Last step is equal, check terminals
\t\t\t\t\t\t\tif (cfi.start.terminal === cfi.end.terminal) {
\t\t\t\t\t\t\t\t// CFI's are equal
\t\t\t\t\t\t\t\tcfi.path.steps.push(cfi.start.steps[i]);
\t\t\t\t\t\t\t\t// Not a range
\t\t\t\t\t\t\t\tcfi.range = false;
\t\t\t\t\t\t\t}
\t\t\t\t\t\t} else {
\t\t\t\t\t\t\tcfi.path.steps.push(cfi.start.steps[i]);
\t\t\t\t\t\t}
\t\t\t\t\t} else {
\t\t\t\t\t\tbreak;
\t\t\t\t\t}
\t\t\t\t}

\t\t\t\tcfi.start.steps = cfi.start.steps.slice(cfi.path.steps.length);
\t\t\t\tcfi.end.steps = cfi.end.steps.slice(cfi.path.steps.length);

\t\t\t\t// TODO: Add Sanity check to make sure that the end if greater than the start
\t\t\t}

\t\t\treturn cfi;
\t\t}

\t\t/**
   * Create a CFI object from a Node
   * @param {Node} anchor
   * @param {string | object} base
   * @param {string} [ignoreClass]
   * @returns {object} cfi
   */

\t}, {
\t\tkey: "fromNode",
\t\tvalue: function fromNode(anchor, base, ignoreClass) {
\t\t\tvar cfi = {
\t\t\t\trange: false,
\t\t\t\tbase: {},
\t\t\t\tpath: {},
\t\t\t\tstart: null,
\t\t\t\tend: null
\t\t\t};

\t\t\tif (typeof base === "string") {
\t\t\t\tcfi.base = this.parseComponent(base);
\t\t\t\tcfi.spinePos = cfi.base.steps[1].index;
\t\t\t} else if ((typeof base === "undefined" ? "undefined" : _typeof(base)) === "object") {
\t\t\t\tcfi.base = base;
\t\t\t}

\t\t\tcfi.path = this.pathTo(anchor, null, ignoreClass);

\t\t\treturn cfi;
\t\t}
\t}, {
\t\tkey: "filter",
\t\tvalue: function filter(anchor, ignoreClass) {
\t\t\tvar needsIgnoring;
\t\t\tvar sibling; // to join with
\t\t\tvar parent, previousSibling, nextSibling;
\t\t\tvar isText = false;

\t\t\tif (anchor.nodeType === TEXT_NODE) {
\t\t\t\tisText = true;
\t\t\t\tparent = anchor.parentNode;
\t\t\t\tneedsIgnoring = anchor.parentNode.classList.contains(ignoreClass);
\t\t\t} else {
\t\t\t\tisText = false;
\t\t\t\tneedsIgnoring = anchor.classList.contains(ignoreClass);
\t\t\t}

\t\t\tif (needsIgnoring && isText) {
\t\t\t\tpreviousSibling = parent.previousSibling;
\t\t\t\tnextSibling = parent.nextSibling;

\t\t\t\t// If the sibling is a text node, join the nodes
\t\t\t\tif (previousSibling && previousSibling.nodeType === TEXT_NODE) {
\t\t\t\t\tsibling = previousSibling;
\t\t\t\t} else if (nextSibling && nextSibling.nodeType === TEXT_NODE) {
\t\t\t\t\tsibling = nextSibling;
\t\t\t\t}

\t\t\t\tif (sibling) {
\t\t\t\t\treturn sibling;
\t\t\t\t} else {
\t\t\t\t\t// Parent will be ignored on next step
\t\t\t\t\treturn anchor;
\t\t\t\t}
\t\t\t} else if (needsIgnoring && !isText) {
\t\t\t\t// Otherwise just skip the element node
\t\t\t\treturn false;
\t\t\t} else {
\t\t\t\t// No need to filter
\t\t\t\treturn anchor;
\t\t\t}
\t\t}
\t}, {
\t\tkey: "patchOffset",
\t\tvalue: function patchOffset(anchor, offset, ignoreClass) {
\t\t\tif (anchor.nodeType != TEXT_NODE) {
\t\t\t\tthrow new Error("Anchor must be a text node");
\t\t\t}

\t\t\tvar curr = anchor;
\t\t\tvar totalOffset = offset;

\t\t\t// If the parent is a ignored node, get offset from it's start
\t\t\tif (anchor.parentNode.classList.contains(ignoreClass)) {
\t\t\t\tcurr = anchor.parentNode;
\t\t\t}

\t\t\twhile (curr.previousSibling) {
\t\t\t\tif (curr.previousSibling.nodeType === ELEMENT_NODE) {
\t\t\t\t\t// Originally a text node, so join
\t\t\t\t\tif (curr.previousSibling.classList.contains(ignoreClass)) {
\t\t\t\t\t\ttotalOffset += curr.previousSibling.textContent.length;
\t\t\t\t\t} else {
\t\t\t\t\t\tbreak; // Normal node, dont join
\t\t\t\t\t}
\t\t\t\t} else {
\t\t\t\t\t// If the previous sibling is a text node, join the nodes
\t\t\t\t\ttotalOffset += curr.previousSibling.textContent.length;
\t\t\t\t}

\t\t\t\tcurr = curr.previousSibling;
\t\t\t}

\t\t\treturn totalOffset;
\t\t}
\t}, {
\t\tkey: "normalizedMap",
\t\tvalue: function normalizedMap(children, nodeType, ignoreClass) {
\t\t\tvar output = {};
\t\t\tvar prevIndex = -1;
\t\t\tvar i,
\t\t\t    len = children.length;
\t\t\tvar currNodeType;
\t\t\tvar prevNodeType;

\t\t\tfor (i = 0; i < len; i++) {

\t\t\t\tcurrNodeType = children[i].nodeType;

\t\t\t\t// Check if needs ignoring
\t\t\t\tif (currNodeType === ELEMENT_NODE && children[i].classList.contains(ignoreClass)) {
\t\t\t\t\tcurrNodeType = TEXT_NODE;
\t\t\t\t}

\t\t\t\tif (i > 0 && currNodeType === TEXT_NODE && prevNodeType === TEXT_NODE) {
\t\t\t\t\t// join text nodes
\t\t\t\t\toutput[i] = prevIndex;
\t\t\t\t} else if (nodeType === currNodeType) {
\t\t\t\t\tprevIndex = prevIndex + 1;
\t\t\t\t\toutput[i] = prevIndex;
\t\t\t\t}

\t\t\t\tprevNodeType = currNodeType;
\t\t\t}

\t\t\treturn output;
\t\t}
\t}, {
\t\tkey: "position",
\t\tvalue: function position(anchor) {
\t\t\tvar children, index;
\t\t\tif (anchor.nodeType === ELEMENT_NODE) {
\t\t\t\tchildren = anchor.parentNode.children;
\t\t\t\tif (!children) {
\t\t\t\t\tchildren = (0, _core.findChildren)(anchor.parentNode);
\t\t\t\t}
\t\t\t\tindex = Array.prototype.indexOf.call(children, anchor);
\t\t\t} else {
\t\t\t\tchildren = this.textNodes(anchor.parentNode);
\t\t\t\tindex = children.indexOf(anchor);
\t\t\t}

\t\t\treturn index;
\t\t}
\t}, {
\t\tkey: "filteredPosition",
\t\tvalue: function filteredPosition(anchor, ignoreClass) {
\t\t\tvar children, index, map;

\t\t\tif (anchor.nodeType === ELEMENT_NODE) {
\t\t\t\tchildren = anchor.parentNode.children;
\t\t\t\tmap = this.normalizedMap(children, ELEMENT_NODE, ignoreClass);
\t\t\t} else {
\t\t\t\tchildren = anchor.parentNode.childNodes;
\t\t\t\t// Inside an ignored node
\t\t\t\tif (anchor.parentNode.classList.contains(ignoreClass)) {
\t\t\t\t\tanchor = anchor.parentNode;
\t\t\t\t\tchildren = anchor.parentNode.childNodes;
\t\t\t\t}
\t\t\t\tmap = this.normalizedMap(children, TEXT_NODE, ignoreClass);
\t\t\t}

\t\t\tindex = Array.prototype.indexOf.call(children, anchor);

\t\t\treturn map[index];
\t\t}
\t}, {
\t\tkey: "stepsToXpath",
\t\tvalue: function stepsToXpath(steps) {
\t\t\tvar xpath = [".", "*"];

\t\t\tsteps.forEach(function (step) {
\t\t\t\tvar position = step.index + 1;

\t\t\t\tif (step.id) {
\t\t\t\t\txpath.push("*[position()=" + position + " and @id='" + step.id + "']");
\t\t\t\t} else if (step.type === "text") {
\t\t\t\t\txpath.push("text()[" + position + "]");
\t\t\t\t} else {
\t\t\t\t\txpath.push("*[" + position + "]");
\t\t\t\t}
\t\t\t});

\t\t\treturn xpath.join("/");
\t\t}

\t\t/*
  \tTo get the last step if needed:
  \t// Get the terminal step
  lastStep = steps[steps.length-1];
  // Get the query string
  query = this.stepsToQuery(steps);
  // Find the containing element
  startContainerParent = doc.querySelector(query);
  // Find the text node within that element
  if(startContainerParent && lastStep.type == "text") {
  \tcontainer = startContainerParent.childNodes[lastStep.index];
  }
  */

\t}, {
\t\tkey: "stepsToQuerySelector",
\t\tvalue: function stepsToQuerySelector(steps) {
\t\t\tvar query = ["html"];

\t\t\tsteps.forEach(function (step) {
\t\t\t\tvar position = step.index + 1;

\t\t\t\tif (step.id) {
\t\t\t\t\tquery.push("#" + step.id);
\t\t\t\t} else if (step.type === "text") {
\t\t\t\t\t// unsupported in querySelector
\t\t\t\t\t// query.push("text()[" + position + "]");
\t\t\t\t} else {
\t\t\t\t\tquery.push("*:nth-child(" + position + ")");
\t\t\t\t}
\t\t\t});

\t\t\treturn query.join(">");
\t\t}
\t}, {
\t\tkey: "textNodes",
\t\tvalue: function textNodes(container, ignoreClass) {
\t\t\treturn Array.prototype.slice.call(container.childNodes).filter(function (node) {
\t\t\t\tif (node.nodeType === TEXT_NODE) {
\t\t\t\t\treturn true;
\t\t\t\t} else if (ignoreClass && node.classList.contains(ignoreClass)) {
\t\t\t\t\treturn true;
\t\t\t\t}
\t\t\t\treturn false;
\t\t\t});
\t\t}
\t}, {
\t\tkey: "walkToNode",
\t\tvalue: function walkToNode(steps, _doc, ignoreClass) {
\t\t\tvar doc = _doc || document;
\t\t\tvar container = doc.documentElement;
\t\t\tvar children;
\t\t\tvar step;
\t\t\tvar len = steps.length;
\t\t\tvar i;

\t\t\tfor (i = 0; i < len; i++) {
\t\t\t\tstep = steps[i];

\t\t\t\tif (step.type === "element") {
\t\t\t\t\t//better to get a container using id as some times step.index may not be correct
\t\t\t\t\t//For ex.https://github.com/futurepress/epub.js/issues/561
\t\t\t\t\tif (step.id) {
\t\t\t\t\t\tcontainer = doc.getElementById(step.id);
\t\t\t\t\t} else {
\t\t\t\t\t\tchildren = container.children || (0, _core.findChildren)(container);
\t\t\t\t\t\tcontainer = children[step.index];
\t\t\t\t\t}
\t\t\t\t} else if (step.type === "text") {
\t\t\t\t\tcontainer = this.textNodes(container, ignoreClass)[step.index];
\t\t\t\t}
\t\t\t\tif (!container) {
\t\t\t\t\t//Break the for loop as due to incorrect index we can get error if
\t\t\t\t\t//container is undefined so that other functionailties works fine
\t\t\t\t\t//like navigation
\t\t\t\t\tbreak;
\t\t\t\t}
\t\t\t}

\t\t\treturn container;
\t\t}
\t}, {
\t\tkey: "findNode",
\t\tvalue: function findNode(steps, _doc, ignoreClass) {
\t\t\tvar doc = _doc || document;
\t\t\tvar container;
\t\t\tvar xpath;

\t\t\tif (!ignoreClass && typeof doc.evaluate != "undefined") {
\t\t\t\txpath = this.stepsToXpath(steps);
\t\t\t\tcontainer = doc.evaluate(xpath, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
\t\t\t} else if (ignoreClass) {
\t\t\t\tcontainer = this.walkToNode(steps, doc, ignoreClass);
\t\t\t} else {
\t\t\t\tcontainer = this.walkToNode(steps, doc);
\t\t\t}

\t\t\treturn container;
\t\t}
\t}, {
\t\tkey: "fixMiss",
\t\tvalue: function fixMiss(steps, offset, _doc, ignoreClass) {
\t\t\tvar container = this.findNode(steps.slice(0, -1), _doc, ignoreClass);
\t\t\tvar children = container.childNodes;
\t\t\tvar map = this.normalizedMap(children, TEXT_NODE, ignoreClass);
\t\t\tvar child;
\t\t\tvar len;
\t\t\tvar lastStepIndex = steps[steps.length - 1].index;

\t\t\tfor (var childIndex in map) {
\t\t\t\tif (!map.hasOwnProperty(childIndex)) return;

\t\t\t\tif (map[childIndex] === lastStepIndex) {
\t\t\t\t\tchild = children[childIndex];
\t\t\t\t\tlen = child.textContent.length;
\t\t\t\t\tif (offset > len) {
\t\t\t\t\t\toffset = offset - len;
\t\t\t\t\t} else {
\t\t\t\t\t\tif (child.nodeType === ELEMENT_NODE) {
\t\t\t\t\t\t\tcontainer = child.childNodes[0];
\t\t\t\t\t\t} else {
\t\t\t\t\t\t\tcontainer = child;
\t\t\t\t\t\t}
\t\t\t\t\t\tbreak;
\t\t\t\t\t}
\t\t\t\t}
\t\t\t}

\t\t\treturn {
\t\t\t\tcontainer: container,
\t\t\t\toffset: offset
\t\t\t};
\t\t}

\t\t/**
   * Creates a DOM range representing a CFI
   * @param {document} _doc document referenced in the base
   * @param {string} [ignoreClass]
   * @return {Range}
   */

\t}, {
\t\tkey: "toRange",
\t\tvalue: function toRange(_doc, ignoreClass) {
\t\t\tvar doc = _doc || document;
\t\t\tvar range;
\t\t\tvar start, end, startContainer, endContainer;
\t\t\tvar cfi = this;
\t\t\tvar startSteps, endSteps;
\t\t\tvar needsIgnoring = ignoreClass ? doc.querySelector("." + ignoreClass) != null : false;
\t\t\tvar missed;

\t\t\tif (typeof doc.createRange !== "undefined") {
\t\t\t\trange = doc.createRange();
\t\t\t} else {
\t\t\t\trange = new _core.RangeObject();
\t\t\t}

\t\t\tif (cfi.range) {
\t\t\t\tstart = cfi.start;
\t\t\t\tstartSteps = cfi.path.steps.concat(start.steps);
\t\t\t\tstartContainer = this.findNode(startSteps, doc, needsIgnoring ? ignoreClass : null);
\t\t\t\tend = cfi.end;
\t\t\t\tendSteps = cfi.path.steps.concat(end.steps);
\t\t\t\tendContainer = this.findNode(endSteps, doc, needsIgnoring ? ignoreClass : null);
\t\t\t} else {
\t\t\t\tstart = cfi.path;
\t\t\t\tstartSteps = cfi.path.steps;
\t\t\t\tstartContainer = this.findNode(cfi.path.steps, doc, needsIgnoring ? ignoreClass : null);
\t\t\t}

\t\t\tif (startContainer) {
\t\t\t\ttry {

\t\t\t\t\tif (start.terminal.offset != null) {
\t\t\t\t\t\trange.setStart(startContainer, start.terminal.offset);
\t\t\t\t\t} else {
\t\t\t\t\t\trange.setStart(startContainer, 0);
\t\t\t\t\t}
\t\t\t\t} catch (e) {
\t\t\t\t\tmissed = this.fixMiss(startSteps, start.terminal.offset, doc, needsIgnoring ? ignoreClass : null);
\t\t\t\t\trange.setStart(missed.container, missed.offset);
\t\t\t\t}
\t\t\t} else {
\t\t\t\tconsole.log("No startContainer found for", this.toString());
\t\t\t\t// No start found
\t\t\t\treturn null;
\t\t\t}

\t\t\tif (endContainer) {
\t\t\t\ttry {

\t\t\t\t\tif (end.terminal.offset != null) {
\t\t\t\t\t\trange.setEnd(endContainer, end.terminal.offset);
\t\t\t\t\t} else {
\t\t\t\t\t\trange.setEnd(endContainer, 0);
\t\t\t\t\t}
\t\t\t\t} catch (e) {
\t\t\t\t\tmissed = this.fixMiss(endSteps, cfi.end.terminal.offset, doc, needsIgnoring ? ignoreClass : null);
\t\t\t\t\trange.setEnd(missed.container, missed.offset);
\t\t\t\t}
\t\t\t}

\t\t\t// doc.defaultView.getSelection().addRange(range);
\t\t\treturn range;
\t\t}

\t\t/**
   * Check if a string is wrapped with "epubcfi()"
   * @param {string} str
   * @returns {boolean}
   */

\t}, {
\t\tkey: "isCfiString",
\t\tvalue: function isCfiString(str) {
\t\t\tif (typeof str === "string" && str.indexOf("epubcfi(") === 0 && str[str.length - 1] === ")") {
\t\t\t\treturn true;
\t\t\t}

\t\t\treturn false;
\t\t}
\t}, {
\t\tkey: "generateChapterComponent",
\t\tvalue: function generateChapterComponent(_spineNodeIndex, _pos, id) {
\t\t\tvar pos = parseInt(_pos),
\t\t\t    spineNodeIndex = (_spineNodeIndex + 1) * 2,
\t\t\t    cfi = "/" + spineNodeIndex + "/";

\t\t\tcfi += (pos + 1) * 2;

\t\t\tif (id) {
\t\t\t\tcfi += "[" + id + "]";
\t\t\t}

\t\t\treturn cfi;
\t\t}

\t\t/**
   * Collapse a CFI Range to a single CFI Position
   * @param {boolean} [toStart=false]
   */

\t}, {
\t\tkey: "collapse",
\t\tvalue: function collapse(toStart) {
\t\t\tif (!this.range) {
\t\t\t\treturn;
\t\t\t}

\t\t\tthis.range = false;

\t\t\tif (toStart) {
\t\t\t\tthis.path.steps = this.path.steps.concat(this.start.steps);
\t\t\t\tthis.path.terminal = this.start.terminal;
\t\t\t} else {
\t\t\t\tthis.path.steps = this.path.steps.concat(this.end.steps);
\t\t\t\tthis.path.terminal = this.end.terminal;
\t\t\t}
\t\t}
\t}]);

\treturn EpubCFI;
}();

exports.default = EpubCFI;
module.exports = exports["default"];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var d        = __webpack_require__(27)
  , callable = __webpack_require__(41)

  , apply = Function.prototype.apply, call = Function.prototype.call
  , create = Object.create, defineProperty = Object.defineProperty
  , defineProperties = Object.defineProperties
  , hasOwnProperty = Object.prototype.hasOwnProperty
  , descriptor = { configurable: true, enumerable: false, writable: true }

  , on, once, off, emit, methods, descriptors, base;

on = function (type, listener) {
\tvar data;

\tcallable(listener);

\tif (!hasOwnProperty.call(this, '__ee__')) {
\t\tdata = descriptor.value = create(null);
\t\tdefineProperty(this, '__ee__', descriptor);
\t\tdescriptor.value = null;
\t} else {
\t\tdata = this.__ee__;
\t}
\tif (!data[type]) data[type] = listener;
\telse if (typeof data[type] === 'object') data[type].push(listener);
\telse data[type] = [data[type], listener];

\treturn this;
};

once = function (type, listener) {
\tvar once, self;

\tcallable(listener);
\tself = this;
\ton.call(this, type, once = function () {
\t\toff.call(self, type, once);
\t\tapply.call(listener, this, arguments);
\t});

\tonce.__eeOnceListener__ = listener;
\treturn this;
};

off = function (type, listener) {
\tvar data, listeners, candidate, i;

\tcallable(listener);

\tif (!hasOwnProperty.call(this, '__ee__')) return this;
\tdata = this.__ee__;
\tif (!data[type]) return this;
\tlisteners = data[type];

\tif (typeof listeners === 'object') {
\t\tfor (i = 0; (candidate = listeners[i]); ++i) {
\t\t\tif ((candidate === listener) ||
\t\t\t\t\t(candidate.__eeOnceListener__ === listener)) {
\t\t\t\tif (listeners.length === 2) data[type] = listeners[i ? 0 : 1];
\t\t\t\telse listeners.splice(i, 1);
\t\t\t}
\t\t}
\t} else {
\t\tif ((listeners === listener) ||
\t\t\t\t(listeners.__eeOnceListener__ === listener)) {
\t\t\tdelete data[type];
\t\t}
\t}

\treturn this;
};

emit = function (type) {
\tvar i, l, listener, listeners, args;

\tif (!hasOwnProperty.call(this, '__ee__')) return;
\tlisteners = this.__ee__[type];
\tif (!listeners) return;

\tif (typeof listeners === 'object') {
\t\tl = arguments.length;
\t\targs = new Array(l - 1);
\t\tfor (i = 1; i < l; ++i) args[i - 1] = arguments[i];

\t\tlisteners = listeners.slice();
\t\tfor (i = 0; (listener = listeners[i]); ++i) {
\t\t\tapply.call(listener, this, args);
\t\t}
\t} else {
\t\tswitch (arguments.length) {
\t\tcase 1:
\t\t\tcall.call(listeners, this);
\t\t\tbreak;
\t\tcase 2:
\t\t\tcall.call(listeners, this, arguments[1]);
\t\t\tbreak;
\t\tcase 3:
\t\t\tcall.call(listeners, this, arguments[1], arguments[2]);
\t\t\tbreak;
\t\tdefault:
\t\t\tl = arguments.length;
\t\t\targs = new Array(l - 1);
\t\t\tfor (i = 1; i < l; ++i) {
\t\t\t\targs[i - 1] = arguments[i];
\t\t\t}
\t\t\tapply.call(listeners, this, args);
\t\t}
\t}
};

methods = {
\ton: on,
\tonce: once,
\toff: off,
\temit: emit
};

descriptors = {
\ton: d(on),
\tonce: d(once),
\toff: d(off),
\temit: d(emit)
};

base = defineProperties({}, descriptors);

module.exports = exports = function (o) {
\treturn (o == null) ? create(base) : defineProperties(Object(o), descriptors);
};
exports.methods = methods;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Dom events to listen for
var DOM_EVENTS = exports.DOM_EVENTS = ["keydown", "keyup", "keypressed", "mouseup", "mousedown", "click", "touchend", "touchstart"];

var EVENTS = exports.EVENTS = {
  BOOK: {
    OPEN_FAILED: "openFailed"
  },
  CONTENTS: {
    EXPAND: "expand",
    RESIZE: "resize",
    SELECTED: "selected",
    SELECTED_RANGE: "selectedRange",
    LINK_CLICKED: "linkClicked"
  },
  LOCATIONS: {
    CHANGED: "changed"
  },
  MANAGERS: {
    RESIZE: "resize",
    RESIZED: "resized",
    ORIENTATION_CHANGE: "orientationchange",
    ADDED: "added",
    SCROLL: "scroll",
    SCROLLED: "scrolled"
  },
  VIEWS: {
    AXIS: "axis",
    LOAD_ERROR: "loaderror",
    RENDERED: "rendered",
    RESIZED: "resized",
    DISPLAYED: "displayed",
    SHOWN: "shown",
    HIDDEN: "hidden",
    MARK_CLICKED: "markClicked"
  },
  RENDITION: {
    STARTED: "started",
    ATTACHED: "attached",
    DISPLAYED: "displayed",
    DISPLAY_ERROR: "displayerror",
    RENDERED: "rendered",
    REMOVED: "removed",
    RESIZED: "resized",
    ORIENTATION_CHANGE: "orientationchange",
    LOCATION_CHANGED: "locationChanged",
    RELOCATED: "relocated",
    MARK_CLICKED: "markClicked",
    SELECTED: "selected",
    LAYOUT: "layout"
  },
  LAYOUT: {
    UPDATED: "updated"
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
\tvalue: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pathWebpack = __webpack_require__(6);

var _pathWebpack2 = _interopRequireDefault(_pathWebpack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Creates a Path object for parsing and manipulation of a path strings
 *
 * Uses a polyfill for Nodejs path: https://nodejs.org/api/path.html
 * @param\t{string} pathString\ta url string (relative or absolute)
 * @class
 */
var Path = function () {
\tfunction Path(pathString) {
\t\t_classCallCheck(this, Path);

\t\tvar protocol;
\t\tvar parsed;

\t\tprotocol = pathString.indexOf("://");
\t\tif (protocol > -1) {
\t\t\tpathString = new URL(pathString).pathname;
\t\t}

\t\tparsed = this.parse(pathString);

\t\tthis.path = pathString;

\t\tif (this.isDirectory(pathString)) {
\t\t\tthis.directory = pathString;
\t\t} else {
\t\t\tthis.directory = parsed.dir + "/";
\t\t}

\t\tthis.filename = parsed.base;
\t\tthis.extension = parsed.ext.slice(1);
\t}

\t/**
  * Parse the path: https://nodejs.org/api/path.html#path_path_parse_path
  * @param\t{string} what
  * @returns {object}
  */


\t_createClass(Path, [{
\t\tkey: "parse",
\t\tvalue: function parse(what) {
\t\t\treturn _pathWebpack2.default.parse(what);
\t\t}

\t\t/**
   * @param\t{string} what
   * @returns {boolean}
   */

\t}, {
\t\tkey: "isAbsolute",
\t\tvalue: function isAbsolute(what) {
\t\t\treturn _pathWebpack2.default.isAbsolute(what || this.path);
\t\t}

\t\t/**
   * Check if path ends with a directory
   * @param\t{string} what
   * @returns {boolean}
   */

\t}, {
\t\tkey: "isDirectory",
\t\tvalue: function isDirectory(what) {
\t\t\treturn what.charAt(what.length - 1) === "/";
\t\t}

\t\t/**
   * Resolve a path against the directory of the Path
   *
   * https://nodejs.org/api/path.html#path_path_resolve_paths
   * @param\t{string} what
   * @returns {string} resolved
   */

\t}, {
\t\tkey: "resolve",
\t\tvalue: function resolve(what) {
\t\t\treturn _pathWebpack2.default.resolve(this.directory, what);
\t\t}

\t\t/**
   * Resolve a path relative to the directory of the Path
   *
   * https://nodejs.org/api/path.html#path_path_relative_from_to
   * @param\t{string} what
   * @returns {string} relative
   */

\t}, {
\t\tkey: "relative",
\t\tvalue: function relative(what) {
\t\t\treturn _pathWebpack2.default.relative(this.directory, what);
\t\t}
\t}, {
\t\tkey: "splitPath",
\t\tvalue: function splitPath(filename) {
\t\t\treturn this.splitPathRe.exec(filename).slice(1);
\t\t}

\t\t/**
   * Return the path string
   * @returns {string} path
   */

\t}, {
\t\tkey: "toString",
\t\tvalue: function toString() {
\t\t\treturn this.path;
\t\t}
\t}]);

\treturn Path;
}();

exports.default = Path;
module.exports = exports["default"];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
\tvalue: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _path = __webpack_require__(4);

var _path2 = _interopRequireDefault(_path);

var _pathWebpack = __webpack_require__(6);

var _pathWebpack2 = _interopRequireDefault(_pathWebpack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * creates a Url object for parsing and manipulation of a url string
 * @param\t{string} urlString\ta url string (relative or absolute)
 * @param\t{string} [baseString] optional base for the url,
 * default to window.location.href
 */
var Url = function () {
\tfunction Url(urlString, baseString) {
\t\t_classCallCheck(this, Url);

\t\tvar absolute = urlString.indexOf("://") > -1;
\t\tvar pathname = urlString;
\t\tvar basePath;

\t\tthis.Url = undefined;
\t\tthis.href = urlString;
\t\tthis.protocol = "";
\t\tthis.origin = "";
\t\tthis.hash = "";
\t\tthis.hash = "";
\t\tthis.search = "";
\t\tthis.base = baseString;

\t\tif (!absolute && baseString !== false && typeof baseString !== "string" && window && window.location) {
\t\t\tthis.base = window.location.href;
\t\t}

\t\t// URL Polyfill doesn't throw an error if base is empty
\t\tif (absolute || this.base) {
\t\t\ttry {
\t\t\t\tif (this.base) {
\t\t\t\t\t// Safari doesn't like an undefined base
\t\t\t\t\tthis.Url = new URL(urlString, this.base);
\t\t\t\t} else {
\t\t\t\t\tthis.Url = new URL(urlString);
\t\t\t\t}
\t\t\t\tthis.href = this.Url.href;

\t\t\t\tthis.protocol = this.Url.protocol;
\t\t\t\tthis.origin = this.Url.origin;
\t\t\t\tthis.hash = this.Url.hash;
\t\t\t\tthis.search = this.Url.search;

\t\t\t\tpathname = this.Url.pathname;
\t\t\t} catch (e) {
\t\t\t\t// Skip URL parsing
\t\t\t\tthis.Url = undefined;
\t\t\t\t// resolve the pathname from the base
\t\t\t\tif (this.base) {
\t\t\t\t\tbasePath = new _path2.default(this.base);
\t\t\t\t\tpathname = basePath.resolve(pathname);
\t\t\t\t}
\t\t\t}
\t\t}

\t\tthis.Path = new _path2.default(pathname);

\t\tthis.directory = this.Path.directory;
\t\tthis.filename = this.Path.filename;
\t\tthis.extension = this.Path.extension;
\t}

\t/**
  * @returns {Path}
  */


\t_createClass(Url, [{
\t\tkey: "path",
\t\tvalue: function path() {
\t\t\treturn this.Path;
\t\t}

\t\t/**
   * Resolves a relative path to a absolute url
   * @returns {string} url
   */

\t}, {
\t\tkey: "resolve",
\t\tvalue: function resolve(what) {
\t\t\tvar isAbsolute = what.indexOf("://") > -1;
\t\t\tvar fullpath;

\t\t\tif (isAbsolute) {
\t\t\t\treturn what;
\t\t\t}

\t\t\tfullpath = _pathWebpack2.default.resolve(this.directory, what);
\t\t\treturn this.origin + fullpath;
\t\t}

\t\t/**
   * Resolve a path relative to the url
   * @returns {string} path
   */

\t}, {
\t\tkey: "relative",
\t\tvalue: function relative(what) {
\t\t\treturn _pathWebpack2.default.relative(what, this.directory);
\t\t}

\t\t/**
   * @returns {string}
   */

\t}, {
\t\tkey: "toString",
\t\tvalue: function toString() {
\t\t\treturn this.href;
\t\t}
\t}]);

\treturn Url;
}();

exports.default = Url;
module.exports = exports["default"];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (!process) {
  var process = {
    "cwd" : function () { return '/' }
  };
}

function assertPath(path) {
  if (typeof path !== 'string') {
    throw new TypeError('Path must be a string. Received ' + path);
  }
}

// Resolves . and .. elements in a path with directory names
function normalizeStringPosix(path, allowAboveRoot) {
  var res = '';
  var lastSlash = -1;
  var dots = 0;
  var code;
  for (var i = 0; i <= path.length; ++i) {
    if (i < path.length)
      code = path.charCodeAt(i);
    else if (code === 47/*/*/)
      break;
    else
      code = 47/*/*/;
    if (code === 47/*/*/) {
      if (lastSlash === i - 1 || dots === 1) {
        // NOOP
      } else if (lastSlash !== i - 1 && dots === 2) {
        if (res.length < 2 ||
            res.charCodeAt(res.length - 1) !== 46/*.*/ ||
            res.charCodeAt(res.length - 2) !== 46/*.*/) {
          if (res.length > 2) {
            var start = res.length - 1;
            var j = start;
            for (; j >= 0; --j) {
              if (res.charCodeAt(j) === 47/*/*/)
                break;
            }
            if (j !== start) {
              if (j === -1)
                res = '';
              else
                res = res.slice(0, j);
              lastSlash = i;
              dots = 0;
              continue;
            }
          } else if (res.length === 2 || res.length === 1) {
            res = '';
            lastSlash = i;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          if (res.length > 0)
            res += '/..';
          else
            res = '..';
        }
      } else {
        if (res.length > 0)
          res += '/' + path.slice(lastSlash + 1, i);
        else
          res = path.slice(lastSlash + 1, i);
      }
      lastSlash = i;
      dots = 0;
    } else if (code === 46/*.*/ && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}

function _format(sep, pathObject) {
  var dir = pathObject.dir || pathObject.root;
  var base = pathObject.base ||
    ((pathObject.name || '') + (pathObject.ext || ''));
  if (!dir) {
    return base;
  }
  if (dir === pathObject.root) {
    return dir + base;
  }
  return dir + sep + base;
}

var posix = {
  // path.resolve([from ...], to)
  resolve: function resolve() {
    var resolvedPath = '';
    var resolvedAbsolute = false;
    var cwd;

    for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
      var path;
      if (i >= 0)
        path = arguments[i];
      else {
        if (cwd === undefined)
          cwd = process.cwd();
        path = cwd;
      }

      assertPath(path);

      // Skip empty entries
      if (path.length === 0) {
        continue;
      }

      resolvedPath = path + '/' + resolvedPath;
      resolvedAbsolute = path.charCodeAt(0) === 47/*/*/;
    }

    // At this point the path should be resolved to a full absolute path, but
    // handle relative paths to be safe (might happen when process.cwd() fails)

    // Normalize the path
    resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);

    if (resolvedAbsolute) {
      if (resolvedPath.length > 0)
        return '/' + resolvedPath;
      else
        return '/';
    } else if (resolvedPath.length > 0) {
      return resolvedPath;
    } else {
      return '.';
    }
  },


  normalize: function normalize(path) {
    assertPath(path);

    if (path.length === 0)
      return '.';

    var isAbsolute = path.charCodeAt(0) === 47/*/*/;
    var trailingSeparator = path.charCodeAt(path.length - 1) === 47/*/*/;

    // Normalize the path
    path = normalizeStringPosix(path, !isAbsolute);

    if (path.length === 0 && !isAbsolute)
      path = '.';
    if (path.length > 0 && trailingSeparator)
      path += '/';

    if (isAbsolute)
      return '/' + path;
    return path;
  },


  isAbsolute: function isAbsolute(path) {
    assertPath(path);
    return path.length > 0 && path.charCodeAt(0) === 47/*/*/;
  },


  join: function join() {
    if (arguments.length === 0)
      return '.';
    var joined;
    for (var i = 0; i < arguments.length; ++i) {
      var arg = arguments[i];
      assertPath(arg);
      if (arg.length > 0) {
        if (joined === undefined)
          joined = arg;
        else
          joined += '/' + arg;
      }
    }
    if (joined === undefined)
      return '.';
    return posix.normalize(joined);
  },


  relative: function relative(from, to) {
    assertPath(from);
    assertPath(to);

    if (from === to)
      return '';

    from = posix.resolve(from);
    to = posix.resolve(to);

    if (from === to)
      return '';

    // Trim any leading backslashes
    var fromStart = 1;
    for (; fromStart < from.length; ++fromStart) {
      if (from.charCodeAt(fromStart) !== 47/*/*/)
        break;
    }
    var fromEnd = from.length;
    var fromLen = (fromEnd - fromStart);

    // Trim any leading backslashes
    var toStart = 1;
    for (; toStart < to.length; ++toStart) {
      if (to.charCodeAt(toStart) !== 47/*/*/)
        break;
    }
    var toEnd = to.length;
    var toLen = (toEnd - toStart);

    // Compare paths to find the longest common path from root
    var length = (fromLen < toLen ? fromLen : toLen);
    var lastCommonSep = -1;
    var i = 0;
    for (; i <= length; ++i) {
      if (i === length) {
        if (toLen > length) {
          if (to.charCodeAt(toStart + i) === 47/*/*/) {
            // We get here if \`from\` is the exact base path for \`to\`.
            // For example: from='/foo/bar'; to='/foo/bar/baz'
            return to.slice(toStart + i + 1);
          } else if (i === 0) {
            // We get here if \`from\` is the root
            // For example: from='/'; to='/foo'
            return to.slice(toStart + i);
          }
        } else if (fromLen > length) {
          if (from.charCodeAt(fromStart + i) === 47/*/*/) {
            // We get here if \`to\` is the exact base path for \`from\`.
            // For example: from='/foo/bar/baz'; to='/foo/bar'
            lastCommonSep = i;
          } else if (i === 0) {
            // We get here if \`to\` is the root.
            // For example: from='/foo'; to='/'
            lastCommonSep = 0;
          }
        }
        break;
      }
      var fromCode = from.charCodeAt(fromStart + i);
      var toCode = to.charCodeAt(toStart + i);
      if (fromCode !== toCode)
        break;
      else if (fromCode === 47/*/*/)
        lastCommonSep = i;
    }

    var out = '';
    // Generate the relative path based on the path difference between \`to\`
    // and \`from\`
    for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
      if (i === fromEnd || from.charCodeAt(i) === 47/*/*/) {
        if (out.length === 0)
          out += '..';
        else
          out += '/..';
      }
    }

    // Lastly, append the rest of the destination (\`to\`) path that comes after
    // the common path parts
    if (out.length > 0)
      return out + to.slice(toStart + lastCommonSep);
    else {
      toStart += lastCommonSep;
      if (to.charCodeAt(toStart) === 47/*/*/)
        ++toStart;
      return to.slice(toStart);
    }
  },


  _makeLong: function _makeLong(path) {
    return path;
  },


  dirname: function dirname(path) {
    assertPath(path);
    if (path.length === 0)
      return '.';
    var code = path.charCodeAt(0);
    var hasRoot = (code === 47/*/*/);
    var end = -1;
    var matchedSlash = true;
    for (var i = path.length - 1; i >= 1; --i) {
      code = path.charCodeAt(i);
      if (code === 47/*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
        // We saw the first non-path separator
        matchedSlash = false;
      }
    }

    if (end === -1)
      return hasRoot ? '/' : '.';
    if (hasRoot && end === 1)
      return '//';
    return path.slice(0, end);
  },


  basename: function basename(path, ext) {
    if (ext !== undefined && typeof ext !== 'string')
      throw new TypeError('"ext" argument must be a string');
    assertPath(path);

    var start = 0;
    var end = -1;
    var matchedSlash = true;
    var i;

    if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
      if (ext.length === path.length && ext === path)
        return '';
      var extIdx = ext.length - 1;
      var firstNonSlashEnd = -1;
      for (i = path.length - 1; i >= 0; --i) {
        var code = path.charCodeAt(i);
        if (code === 47/*/*/) {
          // If we reached a path separator that was not part of a set of path
          // separators at the end of the string, stop now
          if (!matchedSlash) {
            start = i + 1;
            break;
          }
        } else {
          if (firstNonSlashEnd === -1) {
            // We saw the first non-path separator, remember this index in case
            // we need it if the extension ends up not matching
            matchedSlash = false;
            firstNonSlashEnd = i + 1;
          }
          if (extIdx >= 0) {
            // Try to match the explicit extension
            if (code === ext.charCodeAt(extIdx)) {
              if (--extIdx === -1) {
                // We matched the extension, so mark this as the end of our path
                // component
                end = i;
              }
            } else {
              // Extension does not match, so our result is the entire path
              // component
              extIdx = -1;
              end = firstNonSlashEnd;
            }
          }
        }
      }

      if (start === end)
        end = firstNonSlashEnd;
      else if (end === -1)
        end = path.length;
      return path.slice(start, end);
    } else {
      for (i = path.length - 1; i >= 0; --i) {
        if (path.charCodeAt(i) === 47/*/*/) {
          // If we reached a path separator that was not part of a set of path
          // separators at the end of the string, stop now
          if (!matchedSlash) {
            start = i + 1;
            break;
          }
        } else if (end === -1) {
          // We saw the first non-path separator, mark this as the end of our
          // path component
          matchedSlash = false;
          end = i + 1;
        }
      }

      if (end === -1)
        return '';
      return path.slice(start, end);
    }
  },


  extname: function extname(path) {
    assertPath(path);
    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true;
    // Track the state of characters (if any) we see before our first dot and
    // after any path separator we find
    var preDotState = 0;
    for (var i = path.length - 1; i >= 0; --i) {
      var code = path.charCodeAt(i);
      if (code === 47/*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
      if (end === -1) {
        // We saw the first non-path separator, mark this as the end of our
        // extension
        matchedSlash = false;
        end = i + 1;
      }
      if (code === 46/*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
      } else if (startDot !== -1) {
        // We saw a non-dot and non-path separator before our dot, so we should
        // have a good chance at having a non-empty extension
        preDotState = -1;
      }
    }

    if (startDot === -1 ||
        end === -1 ||
        // We saw a non-dot character immediately before the dot
        preDotState === 0 ||
        // The (right-most) trimmed path component is exactly '..'
        (preDotState === 1 &&
         startDot === end - 1 &&
         startDot === startPart + 1)) {
      return '';
    }
    return path.slice(startDot, end);
  },


  format: function format(pathObject) {
    if (pathObject === null || typeof pathObject !== 'object') {
      throw new TypeError(
        'Parameter "pathObject" must be an object, not ' + typeof(pathObject)
      );
    }
    return _format('/', pathObject);
  },


  parse: function parse(path) {
    assertPath(path);

    var ret = { root: '', dir: '', base: '', ext: '', name: '' };
    if (path.length === 0)
      return ret;
    var code = path.charCodeAt(0);
    var isAbsolute = (code === 47/*/*/);
    var start;
    if (isAbsolute) {
      ret.root = '/';
      start = 1;
    } else {
      start = 0;
    }
    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true;
    var i = path.length - 1;

    // Track the state of characters (if any) we see before our first dot and
    // after any path separator we find
    var preDotState = 0;

    // Get non-dir info
    for (; i >= start; --i) {
      code = path.charCodeAt(i);
      if (code === 47/*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
      if (end === -1) {
        // We saw the first non-path separator, mark this as the end of our
        // extension
        matchedSlash = false;
        end = i + 1;
      }
      if (code === 46/*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
      } else if (startDot !== -1) {
        // We saw a non-dot and non-path separator before our dot, so we should
        // have a good chance at having a non-empty extension
        preDotState = -1;
      }
    }

    if (startDot === -1 ||
        end === -1 ||
        // We saw a non-dot character immediately before the dot
        preDotState === 0 ||
        // The (right-most) trimmed path component is exactly '..'
        (preDotState === 1 &&
         startDot === end - 1 &&
         startDot === startPart + 1)) {
      if (end !== -1) {
        if (startPart === 0 && isAbsolute)
          ret.base = ret.name = path.slice(1, end);
        else
          ret.base = ret.name = path.slice(startPart, end);
      }
    } else {
      if (startPart === 0 && isAbsolute) {
        ret.name = path.slice(1, startDot);
        ret.base = path.slice(1, end);
      } else {
        ret.name = path.slice(startPart, startDot);
        ret.base = path.slice(startPart, end);
      }
      ret.ext = path.slice(startDot, end);
    }

    if (startPart > 0)
      ret.dir = path.slice(0, startPart - 1);
    else if (isAbsolute)
      ret.dir = '/';

    return ret;
  },


  sep: '/',
  delimiter: ':',
  posix: null
};


module.exports = posix;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
\tvalue: true
});
exports.replaceBase = replaceBase;
exports.replaceCanonical = replaceCanonical;
exports.replaceMeta = replaceMeta;
exports.replaceLinks = replaceLinks;
exports.substitute = substitute;

var _core = __webpack_require__(0);

var _url = __webpack_require__(5);

var _url2 = _interopRequireDefault(_url);

var _path = __webpack_require__(4);

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function replaceBase(doc, section) {
\tvar base;
\tvar head;
\tvar url = section.url;
\tvar absolute = url.indexOf("://") > -1;

\tif (!doc) {
\t\treturn;
\t}

\thead = (0, _core.qs)(doc, "head");
\tbase = (0, _core.qs)(head, "base");

\tif (!base) {
\t\tbase = doc.createElement("base");
\t\thead.insertBefore(base, head.firstChild);
\t}

\t// Fix for Safari crashing if the url doesn't have an origin
\tif (!absolute && window && window.location) {
\t\turl = window.location.origin + url;
\t}

\tbase.setAttribute("href", url);
}

function replaceCanonical(doc, section) {
\tvar head;
\tvar link;
\tvar url = section.canonical;

\tif (!doc) {
\t\treturn;
\t}

\thead = (0, _core.qs)(doc, "head");
\tlink = (0, _core.qs)(head, "link[rel='canonical']");

\tif (link) {
\t\tlink.setAttribute("href", url);
\t} else {
\t\tlink = doc.createElement("link");
\t\tlink.setAttribute("rel", "canonical");
\t\tlink.setAttribute("href", url);
\t\thead.appendChild(link);
\t}
}

function replaceMeta(doc, section) {
\tvar head;
\tvar meta;
\tvar id = section.idref;
\tif (!doc) {
\t\treturn;
\t}

\thead = (0, _core.qs)(doc, "head");
\tmeta = (0, _core.qs)(head, "link[property='dc.identifier']");

\tif (meta) {
\t\tmeta.setAttribute("content", id);
\t} else {
\t\tmeta = doc.createElement("meta");
\t\tmeta.setAttribute("name", "dc.identifier");
\t\tmeta.setAttribute("content", id);
\t\thead.appendChild(meta);
\t}
}

// TODO: move me to Contents
function replaceLinks(contents, fn) {

\tvar links = contents.querySelectorAll("a[href]");

\tif (!links.length) {
\t\treturn;
\t}

\tvar base = (0, _core.qs)(contents.ownerDocument, "base");
\tvar location = base ? base.getAttribute("href") : undefined;
\tvar replaceLink = function (link) {
\t\tvar href = link.getAttribute("href");

\t\tif (href.indexOf("mailto:") === 0) {
\t\t\treturn;
\t\t}

\t\tvar absolute = href.indexOf("://") > -1;
\t\tvar linkUrl = new _url2.default(href, location);

\t\tif (absolute) {

\t\t\tlink.setAttribute("target", "_blank");
\t\t} else {
\t\t\tlink.onclick = function () {

\t\t\t\tif (linkUrl && linkUrl.hash) {
\t\t\t\t\tfn(linkUrl.Path.path + linkUrl.hash);
\t\t\t\t} else if (linkUrl) {
\t\t\t\t\tfn(linkUrl.Path.path);
\t\t\t\t} else {
\t\t\t\t\tfn(href);
\t\t\t\t}

\t\t\t\treturn false;
\t\t\t};
\t\t}
\t}.bind(this);

\tfor (var i = 0; i < links.length; i++) {
\t\treplaceLink(links[i]);
\t}
}

function substitute(content, urls, replacements) {
\turls.forEach(function (url, i) {
\t\tif (url && replacements[i]) {
\t\t\tcontent = content.replace(new RegExp(url, "g"), replacements[i]);
\t\t}
\t});
\treturn content;
}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
\treturn this;
})();

try {
\t// This works if eval is allowed (see CSP)
\tg = g || Function("return this")() || (1,eval)("this");
} catch(e) {
\t// This works if the window reference is available
\tif(typeof window === "object")
\t\tg = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _undefined = __webpack_require__(34)(); // Support ES3 engines

module.exports = function (val) {
 return (val !== _undefined) && (val !== null);
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
\tvalue: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Hooks allow for injecting functions that must all complete in order before finishing
 * They will execute in parallel but all must finish before continuing
 * Functions may return a promise if they are asycn.
 * @param {any} context scope of this
 * @example this.content = new EPUBJS.Hook(this);
 */
var Hook = function () {
\tfunction Hook(context) {
\t\t_classCallCheck(this, Hook);

\t\tthis.context = context || this;
\t\tthis.hooks = [];
\t}

\t/**
  * Adds a function to be run before a hook completes
  * @example this.content.register(function(){...});
  */


\t_createClass(Hook, [{
\t\tkey: "register",
\t\tvalue: function register() {
\t\t\tfor (var i = 0; i < arguments.length; ++i) {
\t\t\t\tif (typeof arguments[i] === "function") {
\t\t\t\t\tthis.hooks.push(arguments[i]);
\t\t\t\t} else {
\t\t\t\t\t// unpack array
\t\t\t\t\tfor (var j = 0; j < arguments[i].length; ++j) {
\t\t\t\t\t\tthis.hooks.push(arguments[i][j]);
\t\t\t\t\t}
\t\t\t\t}
\t\t\t}
\t\t}

\t\t/**
   * Triggers a hook to run all functions
   * @example this.content.trigger(args).then(function(){...});
   */

\t}, {
\t\tkey: "trigger",
\t\tvalue: function trigger() {
\t\t\tvar args = arguments;
\t\t\tvar context = this.context;
\t\t\tvar promises = [];

\t\t\tthis.hooks.forEach(function (task) {
\t\t\t\tvar executing = task.apply(context, args);

\t\t\t\tif (executing && typeof executing["then"] === "function") {
\t\t\t\t\t// Task is a function that returns a promise
\t\t\t\t\tpromises.push(executing);
\t\t\t\t}
\t\t\t\t// Otherwise Task resolves immediately, continue
\t\t\t});

\t\t\treturn Promise.all(promises);
\t\t}

\t\t// Adds a function to be run before a hook completes

\t}, {
\t\tkey: "list",
\t\tvalue: function list() {
\t\t\treturn this.hooks;
\t\t}
\t}, {
\t\tkey: "clear",
\t\tvalue: function clear() {
\t\t\treturn this.hooks = [];
\t\t}
\t}]);

\treturn Hook;
}();

exports.default = Hook;
module.exports = exports["default"];

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
\tvalue: true
});

var _core = __webpack_require__(0);

var _path = __webpack_require__(4);

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function request(url, type, withCredentials, headers) {
\tvar supportsURL = typeof window != "undefined" ? window.URL : false; // TODO: fallback for url if window isn't defined
\tvar BLOB_RESPONSE = supportsURL ? "blob" : "arraybuffer";

\tvar deferred = new _core.defer();

\tvar xhr = new XMLHttpRequest();

\t//-- Check from PDF.js:
\t//   https://github.com/mozilla/pdf.js/blob/master/web/compatibility.js
\tvar xhrPrototype = XMLHttpRequest.prototype;

\tvar header;

\tif (!("overrideMimeType" in xhrPrototype)) {
\t\t// IE10 might have response, but not overrideMimeType
\t\tObject.defineProperty(xhrPrototype, "overrideMimeType", {
\t\t\tvalue: function xmlHttpRequestOverrideMimeType() {}
\t\t});
\t}

\tif (withCredentials) {
\t\txhr.withCredentials = true;
\t}

\txhr.onreadystatechange = handler;
\txhr.onerror = err;

\txhr.open("GET", url, true);

\tfor (header in headers) {
\t\txhr.setRequestHeader(header, headers[header]);
\t}

\tif (type == "json") {
\t\txhr.setRequestHeader("Accept", "application/json");
\t}

\t// If type isn"t set, determine it from the file extension
\tif (!type) {
\t\ttype = new _path2.default(url).extension;
\t}

\tif (type == "blob") {
\t\txhr.responseType = BLOB_RESPONSE;
\t}

\tif ((0, _core.isXml)(type)) {
\t\t// xhr.responseType = "document";
\t\txhr.overrideMimeType("text/xml"); // for OPF parsing
\t}

\tif (type == "xhtml") {
\t\t// xhr.responseType = "document";
\t}

\tif (type == "html" || type == "htm") {
\t\t// xhr.responseType = "document";
\t}

\tif (type == "binary") {
\t\txhr.responseType = "arraybuffer";
\t}

\txhr.send();

\tfunction err(e) {
\t\tdeferred.reject(e);
\t}

\tfunction handler() {
\t\tif (this.readyState === XMLHttpRequest.DONE) {
\t\t\tvar responseXML = false;

\t\t\tif (this.responseType === "" || this.responseType === "document") {
\t\t\t\tresponseXML = this.responseXML;
\t\t\t}

\t\t\tif (this.status === 200 || responseXML) {
\t\t\t\t//-- Firefox is reporting 0 for blob urls
\t\t\t\tvar r;

\t\t\t\tif (!this.response && !responseXML) {
\t\t\t\t\tdeferred.reject({
\t\t\t\t\t\tstatus: this.status,
\t\t\t\t\t\tmessage: "Empty Response",
\t\t\t\t\t\tstack: new Error().stack
\t\t\t\t\t});
\t\t\t\t\treturn deferred.promise;
\t\t\t\t}

\t\t\t\tif (this.status === 403) {
\t\t\t\t\tdeferred.reject({
\t\t\t\t\t\tstatus: this.status,
\t\t\t\t\t\tresponse: this.response,
\t\t\t\t\t\tmessage: "Forbidden",
\t\t\t\t\t\tstack: new Error().stack
\t\t\t\t\t});
\t\t\t\t\treturn deferred.promise;
\t\t\t\t}
\t\t\t\tif (responseXML) {
\t\t\t\t\tr = this.responseXML;
\t\t\t\t} else if ((0, _core.isXml)(type)) {
\t\t\t\t\t// xhr.overrideMimeType("text/xml"); // for OPF parsing
\t\t\t\t\t// If this.responseXML wasn't set, try to parse using a DOMParser from text
\t\t\t\t\tr = (0, _core.parse)(this.response, "text/xml");
\t\t\t\t} else if (type == "xhtml") {
\t\t\t\t\tr = (0, _core.parse)(this.response, "application/xhtml+xml");
\t\t\t\t} else if (type == "html" || type == "htm") {
\t\t\t\t\tr = (0, _core.parse)(this.response, "text/html");
\t\t\t\t} else if (type == "json") {
\t\t\t\t\tr = JSON.parse(this.response);
\t\t\t\t} else if (type == "blob") {

\t\t\t\t\tif (supportsURL) {
\t\t\t\t\t\tr = this.response;
\t\t\t\t\t} else {
\t\t\t\t\t\t//-- Safari doesn't support responseType blob, so create a blob from arraybuffer
\t\t\t\t\t\tr = new Blob([this.response]);
\t\t\t\t\t}
\t\t\t\t} else {
\t\t\t\t\tr = this.response;
\t\t\t\t}

\t\t\t\tdeferred.resolve(r);
\t\t\t} else {

\t\t\t\tdeferred.reject({
\t\t\t\t\tstatus: this.status,
\t\t\t\t\tmessage: this.response,
\t\t\t\t\tstack: new Error().stack
\t\t\t\t});
\t\t\t}
\t\t}
\t}

\treturn deferred.promise;
}

exports.default = request;
module.exports = exports["default"];

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
\tvalue: true
});
exports.Task = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _core = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Queue for handling tasks one at a time
 * @class
 * @param {scope} context what this will resolve to in the tasks
 */
var Queue = function () {
\tfunction Queue(context) {
\t\t_classCallCheck(this, Queue);

\t\tthis._q = [];
\t\tthis.context = context;
\t\tthis.tick = _core.requestAnimationFrame;
\t\tthis.running = false;
\t\tthis.paused = false;
\t}

\t/**
  * Add an item to the queue
  * @return {Promise}
  */


\t_createClass(Queue, [{
\t\tkey: "enqueue",
\t\tvalue: function enqueue() {
\t\t\tvar deferred, promise;
\t\t\tvar queued;
\t\t\tvar task = [].shift.call(arguments);
\t\t\tvar args = arguments;

\t\t\t// Handle single args without context
\t\t\t// if(args && !Array.isArray(args)) {
\t\t\t//   args = [args];
\t\t\t// }
\t\t\tif (!task) {
\t\t\t\tthrow new Error("No Task Provided");
\t\t\t}

\t\t\tif (typeof task === "function") {

\t\t\t\tdeferred = new _core.defer();
\t\t\t\tpromise = deferred.promise;

\t\t\t\tqueued = {
\t\t\t\t\t"task": task,
\t\t\t\t\t"args": args,
\t\t\t\t\t//"context"  : context,
\t\t\t\t\t"deferred": deferred,
\t\t\t\t\t"promise": promise
\t\t\t\t};
\t\t\t} else {
\t\t\t\t// Task is a promise
\t\t\t\tqueued = {
\t\t\t\t\t"promise": task
\t\t\t\t};
\t\t\t}

\t\t\tthis._q.push(queued);

\t\t\t// Wait to start queue flush
\t\t\tif (this.paused == false && !this.running) {
\t\t\t\t// setTimeout(this.flush.bind(this), 0);
\t\t\t\t// this.tick.call(window, this.run.bind(this));
\t\t\t\tthis.run();
\t\t\t}

\t\t\treturn queued.promise;
\t\t}

\t\t/**
   * Run one item
   * @return {Promise}
   */

\t}, {
\t\tkey: "dequeue",
\t\tvalue: function dequeue() {
\t\t\tvar inwait, task, result;

\t\t\tif (this._q.length && !this.paused) {
\t\t\t\tinwait = this._q.shift();
\t\t\t\ttask = inwait.task;
\t\t\t\tif (task) {
\t\t\t\t\t// console.log(task)

\t\t\t\t\tresult = task.apply(this.context, inwait.args);

\t\t\t\t\tif (result && typeof result["then"] === "function") {
\t\t\t\t\t\t// Task is a function that returns a promise
\t\t\t\t\t\treturn result.then(function () {
\t\t\t\t\t\t\tinwait.deferred.resolve.apply(this.context, arguments);
\t\t\t\t\t\t}.bind(this), function () {
\t\t\t\t\t\t\tinwait.deferred.reject.apply(this.context, arguments);
\t\t\t\t\t\t}.bind(this));
\t\t\t\t\t} else {
\t\t\t\t\t\t// Task resolves immediately
\t\t\t\t\t\tinwait.deferred.resolve.apply(this.context, result);
\t\t\t\t\t\treturn inwait.promise;
\t\t\t\t\t}
\t\t\t\t} else if (inwait.promise) {
\t\t\t\t\t// Task is a promise
\t\t\t\t\treturn inwait.promise;
\t\t\t\t}
\t\t\t} else {
\t\t\t\tinwait = new _core.defer();
\t\t\t\tinwait.deferred.resolve();
\t\t\t\treturn inwait.promise;
\t\t\t}
\t\t}

\t\t// Run All Immediately

\t}, {
\t\tkey: "dump",
\t\tvalue: function dump() {
\t\t\twhile (this._q.length) {
\t\t\t\tthis.dequeue();
\t\t\t}
\t\t}

\t\t/**
   * Run all tasks sequentially, at convince
   * @return {Promise}
   */

\t}, {
\t\tkey: "run",
\t\tvalue: function run() {
\t\t\tvar _this = this;

\t\t\tif (!this.running) {
\t\t\t\tthis.running = true;
\t\t\t\tthis.defered = new _core.defer();
\t\t\t}

\t\t\tthis.tick.call(window, function () {

\t\t\t\tif (_this._q.length) {

\t\t\t\t\t_this.dequeue().then(function () {
\t\t\t\t\t\tthis.run();
\t\t\t\t\t}.bind(_this));
\t\t\t\t} else {
\t\t\t\t\t_this.defered.resolve();
\t\t\t\t\t_this.running = undefined;
\t\t\t\t}
\t\t\t});

\t\t\t// Unpause
\t\t\tif (this.paused == true) {
\t\t\t\tthis.paused = false;
\t\t\t}

\t\t\treturn this.defered.promise;
\t\t}

\t\t/**
   * Flush all, as quickly as possible
   * @return {Promise}
   */

\t}, {
\t\tkey: "flush",
\t\tvalue: function flush() {

\t\t\tif (this.running) {
\t\t\t\treturn this.running;
\t\t\t}

\t\t\tif (this._q.length) {
\t\t\t\tthis.running = this.dequeue().then(function () {
\t\t\t\t\tthis.running = undefined;
\t\t\t\t\treturn this.flush();
\t\t\t\t}.bind(this));

\t\t\t\treturn this.running;
\t\t\t}
\t\t}

\t\t/**
   * Clear all items in wait
   */

\t}, {
\t\tkey: "clear",
\t\tvalue: function clear() {
\t\t\tthis._q = [];
\t\t}

\t\t/**
   * Get the number of tasks in the queue
   * @return {int} tasks
   */

\t}, {
\t\tkey: "length",
\t\tvalue: function length() {
\t\t\treturn this._q.length;
\t\t}

\t\t/**
   * Pause a running queue
   */

\t}, {
\t\tkey: "pause",
\t\tvalue: function pause() {
\t\t\tthis.paused = true;
\t\t}

\t\t/**
   * End the queue
   */

\t}, {
\t\tkey: "stop",
\t\tvalue: function stop() {
\t\t\tthis._q = [];
\t\t\tthis.running = false;
\t\t\tthis.paused = true;
\t\t}
\t}]);

\treturn Queue;
}();

/**
 * Create a new task from a callback
 * @class
 * @private
 * @param {function} task
 * @param {array} args
 * @param {scope} context
 * @return {function} task
 */


var Task = function Task(task, args, context) {
\t_classCallCheck(this, Task);

\treturn function () {
\t\tvar _this2 = this;

\t\tvar toApply = arguments || [];

\t\treturn new Promise(function (resolve, reject) {
\t\t\tvar callback = function callback(value, err) {
\t\t\t\tif (!value && err) {
\t\t\t\t\treject(err);
\t\t\t\t} else {
\t\t\t\t\tresolve(value);
\t\t\t\t}
\t\t\t};
\t\t\t// Add the callback to the arguments list
\t\t\ttoApply.push(callback);

\t\t\t// Apply all arguments to the functions
\t\t\ttask.apply(context || _this2, toApply);
\t\t});
\t};
};

exports.default = Queue;
exports.Task = Task;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
\tvalue: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _eventEmitter = __webpack_require__(2);

var _eventEmitter2 = _interopRequireDefault(_eventEmitter);

var _core = __webpack_require__(0);

var _epubcfi = __webpack_require__(1);

var _epubcfi2 = _interopRequireDefault(_epubcfi);

var _mapping = __webpack_require__(19);

var _mapping2 = _interopRequireDefault(_mapping);

var _replacements = __webpack_require__(7);

var _constants = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var isChrome = /Chrome/.test(navigator.userAgent);
var isWebkit = !isChrome && /AppleWebKit/.test(navigator.userAgent);

var ELEMENT_NODE = 1;
var TEXT_NODE = 3;

/**
\t* Handles DOM manipulation, queries and events for View contents
\t* @class
\t* @param {document} doc Document
\t* @param {element} content Parent Element (typically Body)
\t* @param {string} cfiBase Section component of CFIs
\t* @param {number} sectionIndex Index in Spine of Conntent's Section
\t*/

var Contents = function () {
\tfunction Contents(doc, content, cfiBase, sectionIndex) {
\t\t_classCallCheck(this, Contents);

\t\t// Blank Cfi for Parsing
\t\tthis.epubcfi = new _epubcfi2.default();

\t\tthis.document = doc;
\t\tthis.documentElement = this.document.documentElement;
\t\tthis.content = content || this.document.body;
\t\tthis.window = this.document.defaultView;

\t\tthis._size = {
\t\t\twidth: 0,
\t\t\theight: 0
\t\t};

\t\tthis.sectionIndex = sectionIndex || 0;
\t\tthis.cfiBase = cfiBase || "";

\t\tthis.epubReadingSystem("epub.js", ePub.VERSION);

\t\tthis.listeners();
\t}

\t/**
 \t* Get DOM events that are listened for and passed along
 \t*/


\t_createClass(Contents, [{
\t\tkey: "width",


\t\t/**
  \t* Get or Set width
  \t* @param {number} [w]
  \t* @returns {number} width
  \t*/
\t\tvalue: function width(w) {
\t\t\t// var frame = this.documentElement;
\t\t\tvar frame = this.content;

\t\t\tif (w && (0, _core.isNumber)(w)) {
\t\t\t\tw = w + "px";
\t\t\t}

\t\t\tif (w) {
\t\t\t\tframe.style.width = w;
\t\t\t\t// this.content.style.width = w;
\t\t\t}

\t\t\treturn this.window.getComputedStyle(frame)["width"];
\t\t}

\t\t/**
  \t* Get or Set height
  \t* @param {number} [h]
  \t* @returns {number} height
  \t*/

\t}, {
\t\tkey: "height",
\t\tvalue: function height(h) {
\t\t\t// var frame = this.documentElement;
\t\t\tvar frame = this.content;

\t\t\tif (h && (0, _core.isNumber)(h)) {
\t\t\t\th = h + "px";
\t\t\t}

\t\t\tif (h) {
\t\t\t\tframe.style.height = h;
\t\t\t\t// this.content.style.height = h;
\t\t\t}

\t\t\treturn this.window.getComputedStyle(frame)["height"];
\t\t}

\t\t/**
  \t* Get or Set width of the contents
  \t* @param {number} [w]
  \t* @returns {number} width
  \t*/

\t}, {
\t\tkey: "contentWidth",
\t\tvalue: function contentWidth(w) {

\t\t\tvar content = this.content || this.document.body;

\t\t\tif (w && (0, _core.isNumber)(w)) {
\t\t\t\tw = w + "px";
\t\t\t}

\t\t\tif (w) {
\t\t\t\tcontent.style.width = w;
\t\t\t}

\t\t\treturn this.window.getComputedStyle(content)["width"];
\t\t}

\t\t/**
  \t* Get or Set height of the contents
  \t* @param {number} [h]
  \t* @returns {number} height
  \t*/

\t}, {
\t\tkey: "contentHeight",
\t\tvalue: function contentHeight(h) {

\t\t\tvar content = this.content || this.document.body;

\t\t\tif (h && (0, _core.isNumber)(h)) {
\t\t\t\th = h + "px";
\t\t\t}

\t\t\tif (h) {
\t\t\t\tcontent.style.height = h;
\t\t\t}

\t\t\treturn this.window.getComputedStyle(content)["height"];
\t\t}

\t\t/**
  \t* Get the width of the text using Range
  \t* @returns {number} width
  \t*/

\t}, {
\t\tkey: "textWidth",
\t\tvalue: function textWidth() {
\t\t\tvar width = void 0;
\t\t\tvar range = this.document.createRange();
\t\t\tvar content = this.content || this.document.body;
\t\t\tvar border = (0, _core.borders)(content);

\t\t\t// Select the contents of frame
\t\t\trange.selectNodeContents(content);

\t\t\t// get the width of the text content
\t\t\twidth = range.getBoundingClientRect().width;

\t\t\tif (border && border.width) {
\t\t\t\twidth += border.width;
\t\t\t}

\t\t\treturn Math.round(width);
\t\t}

\t\t/**
  \t* Get the height of the text using Range
  \t* @returns {number} height
  \t*/

\t}, {
\t\tkey: "textHeight",
\t\tvalue: function textHeight() {
\t\t\tvar height = void 0;
\t\t\tvar range = this.document.createRange();
\t\t\tvar content = this.content || this.document.body;
\t\t\tvar border = (0, _core.borders)(content);

\t\t\trange.selectNodeContents(content);

\t\t\theight = range.getBoundingClientRect().height;

\t\t\tif (height && border.height) {
\t\t\t\theight += border.height;
\t\t\t}

\t\t\treturn Math.round(height);
\t\t}

\t\t/**
  \t* Get documentElement scrollWidth
  \t* @returns {number} width
  \t*/

\t}, {
\t\tkey: "scrollWidth",
\t\tvalue: function scrollWidth() {
\t\t\tvar width = this.documentElement.scrollWidth;

\t\t\treturn width;
\t\t}

\t\t/**
  \t* Get documentElement scrollHeight
  \t* @returns {number} height
  \t*/

\t}, {
\t\tkey: "scrollHeight",
\t\tvalue: function scrollHeight() {
\t\t\tvar height = this.documentElement.scrollHeight;

\t\t\treturn height;
\t\t}

\t\t/**
  \t* Set overflow css style of the contents
  \t* @param {string} [overflow]
  \t*/

\t}, {
\t\tkey: "overflow",
\t\tvalue: function overflow(_overflow) {

\t\t\tif (_overflow) {
\t\t\t\tthis.documentElement.style.overflow = _overflow;
\t\t\t}

\t\t\treturn this.window.getComputedStyle(this.documentElement)["overflow"];
\t\t}

\t\t/**
  \t* Set overflowX css style of the documentElement
  \t* @param {string} [overflow]
  \t*/

\t}, {
\t\tkey: "overflowX",
\t\tvalue: function overflowX(overflow) {

\t\t\tif (overflow) {
\t\t\t\tthis.documentElement.style.overflowX = overflow;
\t\t\t}

\t\t\treturn this.window.getComputedStyle(this.documentElement)["overflowX"];
\t\t}

\t\t/**
  \t* Set overflowY css style of the documentElement
  \t* @param {string} [overflow]
  \t*/

\t}, {
\t\tkey: "overflowY",
\t\tvalue: function overflowY(overflow) {

\t\t\tif (overflow) {
\t\t\t\tthis.documentElement.style.overflowY = overflow;
\t\t\t}

\t\t\treturn this.window.getComputedStyle(this.documentElement)["overflowY"];
\t\t}

\t\t/**
  \t* Set Css styles on the contents element (typically Body)
  \t* @param {string} property
  \t* @param {string} value
  \t* @param {boolean} [priority] set as "important"
  \t*/

\t}, {
\t\tkey: "css",
\t\tvalue: function css(property, value, priority) {
\t\t\tvar content = this.content || this.document.body;

\t\t\tif (value) {
\t\t\t\tcontent.style.setProperty(property, value, priority ? "important" : "");
\t\t\t}

\t\t\treturn this.window.getComputedStyle(content)[property];
\t\t}

\t\t/**
  \t* Get or Set the viewport element
  \t* @param {object} [options]
  \t* @param {string} [options.width]
  \t* @param {string} [options.height]
  \t* @param {string} [options.scale]
  \t* @param {string} [options.minimum]
  \t* @param {string} [options.maximum]
  \t* @param {string} [options.scalable]
  \t*/

\t}, {
\t\tkey: "viewport",
\t\tvalue: function viewport(options) {
\t\t\tvar _width, _height, _scale, _minimum, _maximum, _scalable;
\t\t\t// var width, height, scale, minimum, maximum, scalable;
\t\t\tvar $viewport = this.document.querySelector("meta[name='viewport']");
\t\t\tvar parsed = {
\t\t\t\t"width": undefined,
\t\t\t\t"height": undefined,
\t\t\t\t"scale": undefined,
\t\t\t\t"minimum": undefined,
\t\t\t\t"maximum": undefined,
\t\t\t\t"scalable": undefined
\t\t\t};
\t\t\tvar newContent = [];
\t\t\tvar settings = {};

\t\t\t/*
   * check for the viewport size
   * <meta name="viewport" content="width=1024,height=697" />
   */
\t\t\tif ($viewport && $viewport.hasAttribute("content")) {
\t\t\t\tvar content = $viewport.getAttribute("content");
\t\t\t\tvar _width2 = content.match(/width\\s*=\\s*([^,]*)/);
\t\t\t\tvar _height2 = content.match(/height\\s*=\\s*([^,]*)/);
\t\t\t\tvar _scale2 = content.match(/initial-scale\\s*=\\s*([^,]*)/);
\t\t\t\tvar _minimum2 = content.match(/minimum-scale\\s*=\\s*([^,]*)/);
\t\t\t\tvar _maximum2 = content.match(/maximum-scale\\s*=\\s*([^,]*)/);
\t\t\t\tvar _scalable2 = content.match(/user-scalable\\s*=\\s*([^,]*)/);

\t\t\t\tif (_width2 && _width2.length && typeof _width2[1] !== "undefined") {
\t\t\t\t\tparsed.width = _width2[1];
\t\t\t\t}
\t\t\t\tif (_height2 && _height2.length && typeof _height2[1] !== "undefined") {
\t\t\t\t\tparsed.height = _height2[1];
\t\t\t\t}
\t\t\t\tif (_scale2 && _scale2.length && typeof _scale2[1] !== "undefined") {
\t\t\t\t\tparsed.scale = _scale2[1];
\t\t\t\t}
\t\t\t\tif (_minimum2 && _minimum2.length && typeof _minimum2[1] !== "undefined") {
\t\t\t\t\tparsed.minimum = _minimum2[1];
\t\t\t\t}
\t\t\t\tif (_maximum2 && _maximum2.length && typeof _maximum2[1] !== "undefined") {
\t\t\t\t\tparsed.maximum = _maximum2[1];
\t\t\t\t}
\t\t\t\tif (_scalable2 && _scalable2.length && typeof _scalable2[1] !== "undefined") {
\t\t\t\t\tparsed.scalable = _scalable2[1];
\t\t\t\t}
\t\t\t}

\t\t\tsettings = (0, _core.defaults)(options || {}, parsed);

\t\t\tif (options) {
\t\t\t\tif (settings.width) {
\t\t\t\t\tnewContent.push("width=" + settings.width);
\t\t\t\t}

\t\t\t\tif (settings.height) {
\t\t\t\t\tnewContent.push("height=" + settings.height);
\t\t\t\t}

\t\t\t\tif (settings.scale) {
\t\t\t\t\tnewContent.push("initial-scale=" + settings.scale);
\t\t\t\t}

\t\t\t\tif (settings.scalable === "no") {
\t\t\t\t\tnewContent.push("minimum-scale=" + settings.scale);
\t\t\t\t\tnewContent.push("maximum-scale=" + settings.scale);
\t\t\t\t\tnewContent.push("user-scalable=" + settings.scalable);
\t\t\t\t} else {

\t\t\t\t\tif (settings.scalable) {
\t\t\t\t\t\tnewContent.push("user-scalable=" + settings.scalable);
\t\t\t\t\t}

\t\t\t\t\tif (settings.minimum) {
\t\t\t\t\t\tnewContent.push("minimum-scale=" + settings.minimum);
\t\t\t\t\t}

\t\t\t\t\tif (settings.maximum) {
\t\t\t\t\t\tnewContent.push("minimum-scale=" + settings.maximum);
\t\t\t\t\t}
\t\t\t\t}

\t\t\t\tif (!$viewport) {
\t\t\t\t\t$viewport = this.document.createElement("meta");
\t\t\t\t\t$viewport.setAttribute("name", "viewport");
\t\t\t\t\tthis.document.querySelector("head").appendChild($viewport);
\t\t\t\t}

\t\t\t\t$viewport.setAttribute("content", newContent.join(", "));

\t\t\t\tthis.window.scrollTo(0, 0);
\t\t\t}

\t\t\treturn settings;
\t\t}

\t\t/**
   * Event emitter for when the contents has expanded
   * @private
   */

\t}, {
\t\tkey: "expand",
\t\tvalue: function expand() {
\t\t\tthis.emit(_constants.EVENTS.CONTENTS.EXPAND);
\t\t}

\t\t/**
   * Add DOM listeners
   * @private
   */

\t}, {
\t\tkey: "listeners",
\t\tvalue: function listeners() {

\t\t\tthis.imageLoadListeners();

\t\t\tthis.mediaQueryListeners();

\t\t\t// this.fontLoadListeners();

\t\t\tthis.addEventListeners();

\t\t\tthis.addSelectionListeners();

\t\t\t// this.transitionListeners();

\t\t\tthis.resizeListeners();

\t\t\t// this.resizeObservers();

\t\t\tthis.linksHandler();
\t\t}

\t\t/**
   * Remove DOM listeners
   * @private
   */

\t}, {
\t\tkey: "removeListeners",
\t\tvalue: function removeListeners() {

\t\t\tthis.removeEventListeners();

\t\t\tthis.removeSelectionListeners();

\t\t\tclearTimeout(this.expanding);
\t\t}

\t\t/**
   * Check if size of contents has changed and
   * emit 'resize' event if it has.
   * @private
   */

\t}, {
\t\tkey: "resizeCheck",
\t\tvalue: function resizeCheck() {
\t\t\tvar width = this.textWidth();
\t\t\tvar height = this.textHeight();

\t\t\tif (width != this._size.width || height != this._size.height) {

\t\t\t\tthis._size = {
\t\t\t\t\twidth: width,
\t\t\t\t\theight: height
\t\t\t\t};

\t\t\t\tthis.onResize && this.onResize(this._size);
\t\t\t\tthis.emit(_constants.EVENTS.CONTENTS.RESIZE, this._size);
\t\t\t}
\t\t}

\t\t/**
   * Poll for resize detection
   * @private
   */

\t}, {
\t\tkey: "resizeListeners",
\t\tvalue: function resizeListeners() {
\t\t\tvar width, height;
\t\t\t// Test size again
\t\t\tclearTimeout(this.expanding);

\t\t\trequestAnimationFrame(this.resizeCheck.bind(this));

\t\t\tthis.expanding = setTimeout(this.resizeListeners.bind(this), 350);
\t\t}

\t\t/**
   * Use css transitions to detect resize
   * @private
   */

\t}, {
\t\tkey: "transitionListeners",
\t\tvalue: function transitionListeners() {
\t\t\tvar body = this.content;

\t\t\tbody.style['transitionProperty'] = "font, font-size, font-size-adjust, font-stretch, font-variation-settings, font-weight, width, height";
\t\t\tbody.style['transitionDuration'] = "0.001ms";
\t\t\tbody.style['transitionTimingFunction'] = "linear";
\t\t\tbody.style['transitionDelay'] = "0";

\t\t\tthis.document.addEventListener('transitionend', this.resizeCheck.bind(this));
\t\t}

\t\t/**
   * Listen for media query changes and emit 'expand' event
   * Adapted from: https://github.com/tylergaw/media-query-events/blob/master/js/mq-events.js
   * @private
   */

\t}, {
\t\tkey: "mediaQueryListeners",
\t\tvalue: function mediaQueryListeners() {
\t\t\tvar sheets = this.document.styleSheets;
\t\t\tvar mediaChangeHandler = function (m) {
\t\t\t\tif (m.matches && !this._expanding) {
\t\t\t\t\tsetTimeout(this.expand.bind(this), 1);
\t\t\t\t}
\t\t\t}.bind(this);

\t\t\tfor (var i = 0; i < sheets.length; i += 1) {
\t\t\t\tvar rules;
\t\t\t\t// Firefox errors if we access cssRules cross-domain
\t\t\t\ttry {
\t\t\t\t\trules = sheets[i].cssRules;
\t\t\t\t} catch (e) {
\t\t\t\t\treturn;
\t\t\t\t}
\t\t\t\tif (!rules) return; // Stylesheets changed
\t\t\t\tfor (var j = 0; j < rules.length; j += 1) {
\t\t\t\t\t//if (rules[j].constructor === CSSMediaRule) {
\t\t\t\t\tif (rules[j].media) {
\t\t\t\t\t\tvar mql = this.window.matchMedia(rules[j].media.mediaText);
\t\t\t\t\t\tmql.addListener(mediaChangeHandler);
\t\t\t\t\t\t//mql.onchange = mediaChangeHandler;
\t\t\t\t\t}
\t\t\t\t}
\t\t\t}
\t\t}

\t\t/**
   * Use MutationObserver to listen for changes in the DOM and check for resize
   * @private
   */

\t}, {
\t\tkey: "resizeObservers",
\t\tvalue: function resizeObservers() {
\t\t\tvar _this = this;

\t\t\t// create an observer instance
\t\t\tthis.observer = new MutationObserver(function (mutations) {
\t\t\t\t_this.resizeCheck();
\t\t\t});

\t\t\t// configuration of the observer:
\t\t\tvar config = { attributes: true, childList: true, characterData: true, subtree: true };

\t\t\t// pass in the target node, as well as the observer options
\t\t\tthis.observer.observe(this.document, config);
\t\t}
\t}, {
\t\tkey: "imageLoadListeners",
\t\tvalue: function imageLoadListeners(target) {
\t\t\tvar images = this.document.querySelectorAll("img");
\t\t\tvar img;
\t\t\tfor (var i = 0; i < images.length; i++) {
\t\t\t\timg = images[i];

\t\t\t\tif (typeof img.naturalWidth !== "undefined" && img.naturalWidth === 0) {
\t\t\t\t\timg.onload = this.expand.bind(this);
\t\t\t\t}
\t\t\t}
\t\t}

\t\t/**
   * Listen for font load and check for resize when loaded
   * @private
   */

\t}, {
\t\tkey: "fontLoadListeners",
\t\tvalue: function fontLoadListeners(target) {
\t\t\tif (!this.document || !this.document.fonts) {
\t\t\t\treturn;
\t\t\t}

\t\t\tthis.document.fonts.ready.then(function () {
\t\t\t\tthis.resizeCheck();
\t\t\t}.bind(this));
\t\t}

\t\t/**
   * Get the documentElement
   * @returns {element} documentElement
   */

\t}, {
\t\tkey: "root",
\t\tvalue: function root() {
\t\t\tif (!this.document) return null;
\t\t\treturn this.document.documentElement;
\t\t}

\t\t/**
   * Get the location offset of a EpubCFI or an #id
   * @param {string | EpubCFI} target
   * @param {string} [ignoreClass] for the cfi
   * @returns { {left: Number, top: Number }
   */

\t}, {
\t\tkey: "locationOf",
\t\tvalue: function locationOf(target, ignoreClass) {
\t\t\tvar position;
\t\t\tvar targetPos = { "left": 0, "top": 0 };

\t\t\tif (!this.document) return targetPos;

\t\t\tif (this.epubcfi.isCfiString(target)) {
\t\t\t\tvar range = new _epubcfi2.default(target).toRange(this.document, ignoreClass);

\t\t\t\tif (range) {
\t\t\t\t\tif (range.startContainer.nodeType === Node.ELEMENT_NODE) {
\t\t\t\t\t\tposition = range.startContainer.getBoundingClientRect();
\t\t\t\t\t\ttargetPos.left = position.left;
\t\t\t\t\t\ttargetPos.top = position.top;
\t\t\t\t\t} else {
\t\t\t\t\t\t// Webkit does not handle collapsed range bounds correctly
\t\t\t\t\t\t// https://bugs.webkit.org/show_bug.cgi?id=138949

\t\t\t\t\t\t// Construct a new non-collapsed range
\t\t\t\t\t\tif (isWebkit) {
\t\t\t\t\t\t\tvar container = range.startContainer;
\t\t\t\t\t\t\tvar newRange = new Range();
\t\t\t\t\t\t\ttry {
\t\t\t\t\t\t\t\tif (container.nodeType === ELEMENT_NODE) {
\t\t\t\t\t\t\t\t\tposition = container.getBoundingClientRect();
\t\t\t\t\t\t\t\t} else if (range.startOffset + 2 < container.length) {
\t\t\t\t\t\t\t\t\tnewRange.setStart(container, range.startOffset);
\t\t\t\t\t\t\t\t\tnewRange.setEnd(container, range.startOffset + 2);
\t\t\t\t\t\t\t\t\tposition = newRange.getBoundingClientRect();
\t\t\t\t\t\t\t\t} else if (range.startOffset - 2 > 0) {
\t\t\t\t\t\t\t\t\tnewRange.setStart(container, range.startOffset - 2);
\t\t\t\t\t\t\t\t\tnewRange.setEnd(container, range.startOffset);
\t\t\t\t\t\t\t\t\tposition = newRange.getBoundingClientRect();
\t\t\t\t\t\t\t\t} else {
\t\t\t\t\t\t\t\t\t// empty, return the parent element
\t\t\t\t\t\t\t\t\tposition = container.parentNode.getBoundingClientRect();
\t\t\t\t\t\t\t\t}
\t\t\t\t\t\t\t} catch (e) {
\t\t\t\t\t\t\t\tconsole.error(e, e.stack);
\t\t\t\t\t\t\t}
\t\t\t\t\t\t} else {
\t\t\t\t\t\t\tposition = range.getBoundingClientRect();
\t\t\t\t\t\t}
\t\t\t\t\t}
\t\t\t\t}
\t\t\t} else if (typeof target === "string" && target.indexOf("#") > -1) {

\t\t\t\tvar id = target.substring(target.indexOf("#") + 1);
\t\t\t\tvar el = this.document.getElementById(id);

\t\t\t\tif (el) {
\t\t\t\t\tposition = el.getBoundingClientRect();
\t\t\t\t}
\t\t\t}

\t\t\tif (position) {
\t\t\t\ttargetPos.left = position.left;
\t\t\t\ttargetPos.top = position.top;
\t\t\t}

\t\t\treturn targetPos;
\t\t}

\t\t/**
   * Append a stylesheet link to the document head
   * @param {string} src url
   */

\t}, {
\t\tkey: "addStylesheet",
\t\tvalue: function addStylesheet(src) {
\t\t\treturn new Promise(function (resolve, reject) {
\t\t\t\tvar $stylesheet;
\t\t\t\tvar ready = false;

\t\t\t\tif (!this.document) {
\t\t\t\t\tresolve(false);
\t\t\t\t\treturn;
\t\t\t\t}

\t\t\t\t// Check if link already exists
\t\t\t\t$stylesheet = this.document.querySelector("link[href='" + src + "']");
\t\t\t\tif ($stylesheet) {
\t\t\t\t\tresolve(true);
\t\t\t\t\treturn; // already present
\t\t\t\t}

\t\t\t\t$stylesheet = this.document.createElement("link");
\t\t\t\t$stylesheet.type = "text/css";
\t\t\t\t$stylesheet.rel = "stylesheet";
\t\t\t\t$stylesheet.href = src;
\t\t\t\t$stylesheet.onload = $stylesheet.onreadystatechange = function () {
\t\t\t\t\tif (!ready && (!this.readyState || this.readyState == "complete")) {
\t\t\t\t\t\tready = true;
\t\t\t\t\t\t// Let apply
\t\t\t\t\t\tsetTimeout(function () {
\t\t\t\t\t\t\tresolve(true);
\t\t\t\t\t\t}, 1);
\t\t\t\t\t}
\t\t\t\t};

\t\t\t\tthis.document.head.appendChild($stylesheet);
\t\t\t}.bind(this));
\t\t}

\t\t/**
   * Append stylesheet rules to a generate stylesheet
   * Array: https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/insertRule
   * Object: https://github.com/desirable-objects/json-to-css
   * @param {array | object} rules
   */

\t}, {
\t\tkey: "addStylesheetRules",
\t\tvalue: function addStylesheetRules(rules) {
\t\t\tvar styleEl;
\t\t\tvar styleSheet;
\t\t\tvar key = "epubjs-inserted-css";

\t\t\tif (!this.document || !rules || rules.length === 0) return;

\t\t\t// Check if link already exists
\t\t\tstyleEl = this.document.getElementById("#" + key);
\t\t\tif (!styleEl) {
\t\t\t\tstyleEl = this.document.createElement("style");
\t\t\t\tstyleEl.id = key;
\t\t\t}

\t\t\t// Append style element to head
\t\t\tthis.document.head.appendChild(styleEl);

\t\t\t// Grab style sheet
\t\t\tstyleSheet = styleEl.sheet;

\t\t\tif (Object.prototype.toString.call(rules) === "[object Array]") {
\t\t\t\tfor (var i = 0, rl = rules.length; i < rl; i++) {
\t\t\t\t\tvar j = 1,
\t\t\t\t\t    rule = rules[i],
\t\t\t\t\t    selector = rules[i][0],
\t\t\t\t\t    propStr = "";
\t\t\t\t\t// If the second argument of a rule is an array of arrays, correct our variables.
\t\t\t\t\tif (Object.prototype.toString.call(rule[1][0]) === "[object Array]") {
\t\t\t\t\t\trule = rule[1];
\t\t\t\t\t\tj = 0;
\t\t\t\t\t}

\t\t\t\t\tfor (var pl = rule.length; j < pl; j++) {
\t\t\t\t\t\tvar prop = rule[j];
\t\t\t\t\t\tpropStr += prop[0] + ":" + prop[1] + (prop[2] ? " !important" : "") + ";\\n";
\t\t\t\t\t}

\t\t\t\t\t// Insert CSS Rule
\t\t\t\t\tstyleSheet.insertRule(selector + "{" + propStr + "}", styleSheet.cssRules.length);
\t\t\t\t}
\t\t\t} else {
\t\t\t\tvar selectors = Object.keys(rules);
\t\t\t\tselectors.forEach(function (selector) {
\t\t\t\t\tvar definition = rules[selector];
\t\t\t\t\tif (Array.isArray(definition)) {
\t\t\t\t\t\tdefinition.forEach(function (item) {
\t\t\t\t\t\t\tvar _rules = Object.keys(item);
\t\t\t\t\t\t\tvar result = _rules.map(function (rule) {
\t\t\t\t\t\t\t\treturn rule + ":" + item[rule];
\t\t\t\t\t\t\t}).join(';');
\t\t\t\t\t\t\tstyleSheet.insertRule(selector + "{" + result + "}", styleSheet.cssRules.length);
\t\t\t\t\t\t});
\t\t\t\t\t} else {
\t\t\t\t\t\tvar _rules = Object.keys(definition);
\t\t\t\t\t\tvar result = _rules.map(function (rule) {
\t\t\t\t\t\t\treturn rule + ":" + definition[rule];
\t\t\t\t\t\t}).join(';');
\t\t\t\t\t\tstyleSheet.insertRule(selector + "{" + result + "}", styleSheet.cssRules.length);
\t\t\t\t\t}
\t\t\t\t});
\t\t\t}
\t\t}

\t\t/**
   * Append a script tag to the document head
   * @param {string} src url
   * @returns {Promise} loaded
   */

\t}, {
\t\tkey: "addScript",
\t\tvalue: function addScript(src) {

\t\t\treturn new Promise(function (resolve, reject) {
\t\t\t\tvar $script;
\t\t\t\tvar ready = false;

\t\t\t\tif (!this.document) {
\t\t\t\t\tresolve(false);
\t\t\t\t\treturn;
\t\t\t\t}

\t\t\t\t$script = this.document.createElement("script");
\t\t\t\t$script.type = "text/javascript";
\t\t\t\t$script.async = true;
\t\t\t\t$script.src = src;
\t\t\t\t$script.onload = $script.onreadystatechange = function () {
\t\t\t\t\tif (!ready && (!this.readyState || this.readyState == "complete")) {
\t\t\t\t\t\tready = true;
\t\t\t\t\t\tsetTimeout(function () {
\t\t\t\t\t\t\tresolve(true);
\t\t\t\t\t\t}, 1);
\t\t\t\t\t}
\t\t\t\t};

\t\t\t\tthis.document.head.appendChild($script);
\t\t\t}.bind(this));
\t\t}

\t\t/**
   * Add a class to the contents container
   * @param {string} className
   */

\t}, {
\t\tkey: "addClass",
\t\tvalue: function addClass(className) {
\t\t\tvar content;

\t\t\tif (!this.document) return;

\t\t\tcontent = this.content || this.document.body;

\t\t\tif (content) {
\t\t\t\tcontent.classList.add(className);
\t\t\t}
\t\t}

\t\t/**
   * Remove a class from the contents container
   * @param {string} removeClass
   */

\t}, {
\t\tkey: "removeClass",
\t\tvalue: function removeClass(className) {
\t\t\tvar content;

\t\t\tif (!this.document) return;

\t\t\tcontent = this.content || this.document.body;

\t\t\tif (content) {
\t\t\t\tcontent.classList.remove(className);
\t\t\t}
\t\t}

\t\t/**
   * Add DOM event listeners
   * @private
   */

\t}, {
\t\tkey: "addEventListeners",
\t\tvalue: function addEventListeners() {
\t\t\tif (!this.document) {
\t\t\t\treturn;
\t\t\t}

\t\t\t_constants.DOM_EVENTS.forEach(function (eventName) {
\t\t\t\tthis.document.addEventListener(eventName, this.triggerEvent.bind(this), false);
\t\t\t}, this);
\t\t}

\t\t/**
   * Remove DOM event listeners
   * @private
   */

\t}, {
\t\tkey: "removeEventListeners",
\t\tvalue: function removeEventListeners() {
\t\t\tif (!this.document) {
\t\t\t\treturn;
\t\t\t}
\t\t\t_constants.DOM_EVENTS.forEach(function (eventName) {
\t\t\t\tthis.document.removeEventListener(eventName, this.triggerEvent, false);
\t\t\t}, this);
\t\t}

\t\t/**
   * Emit passed browser events
   * @private
   */

\t}, {
\t\tkey: "triggerEvent",
\t\tvalue: function triggerEvent(e) {
\t\t\tthis.emit(e.type, e);
\t\t}

\t\t/**
   * Add listener for text selection
   * @private
   */

\t}, {
\t\tkey: "addSelectionListeners",
\t\tvalue: function addSelectionListeners() {
\t\t\tif (!this.document) {
\t\t\t\treturn;
\t\t\t}
\t\t\tthis.document.addEventListener("selectionchange", this.onSelectionChange.bind(this), false);
\t\t}

\t\t/**
   * Remove listener for text selection
   * @private
   */

\t}, {
\t\tkey: "removeSelectionListeners",
\t\tvalue: function removeSelectionListeners() {
\t\t\tif (!this.document) {
\t\t\t\treturn;
\t\t\t}
\t\t\tthis.document.removeEventListener("selectionchange", this.onSelectionChange, false);
\t\t}

\t\t/**
   * Handle getting text on selection
   * @private
   */

\t}, {
\t\tkey: "onSelectionChange",
\t\tvalue: function onSelectionChange(e) {
\t\t\tif (this.selectionEndTimeout) {
\t\t\t\tclearTimeout(this.selectionEndTimeout);
\t\t\t}
\t\t\tthis.selectionEndTimeout = setTimeout(function () {
\t\t\t\tvar selection = this.window.getSelection();
\t\t\t\tthis.triggerSelectedEvent(selection);
\t\t\t}.bind(this), 250);
\t\t}

\t\t/**
   * Emit event on text selection
   * @private
   */

\t}, {
\t\tkey: "triggerSelectedEvent",
\t\tvalue: function triggerSelectedEvent(selection) {
\t\t\tvar range, cfirange;

\t\t\tif (selection && selection.rangeCount > 0) {
\t\t\t\trange = selection.getRangeAt(0);
\t\t\t\tif (!range.collapsed) {
\t\t\t\t\t// cfirange = this.section.cfiFromRange(range);
\t\t\t\t\tcfirange = new _epubcfi2.default(range, this.cfiBase).toString();
\t\t\t\t\tthis.emit(_constants.EVENTS.CONTENTS.SELECTED, cfirange);
\t\t\t\t\tthis.emit(_constants.EVENTS.CONTENTS.SELECTED_RANGE, range);
\t\t\t\t}
\t\t\t}
\t\t}

\t\t/**
   * Get a Dom Range from EpubCFI
   * @param {EpubCFI} _cfi
   * @param {string} [ignoreClass]
   * @returns {Range} range
   */

\t}, {
\t\tkey: "range",
\t\tvalue: function range(_cfi, ignoreClass) {
\t\t\tvar cfi = new _epubcfi2.default(_cfi);
\t\t\treturn cfi.toRange(this.document, ignoreClass);
\t\t}

\t\t/**
   * Get an EpubCFI from a Dom Range
   * @param {Range} range
   * @param {string} [ignoreClass]
   * @returns {EpubCFI} cfi
   */

\t}, {
\t\tkey: "cfiFromRange",
\t\tvalue: function cfiFromRange(range, ignoreClass) {
\t\t\treturn new _epubcfi2.default(range, this.cfiBase, ignoreClass).toString();
\t\t}

\t\t/**
   * Get an EpubCFI from a Dom node
   * @param {node} node
   * @param {string} [ignoreClass]
   * @returns {EpubCFI} cfi
   */

\t}, {
\t\tkey: "cfiFromNode",
\t\tvalue: function cfiFromNode(node, ignoreClass) {
\t\t\treturn new _epubcfi2.default(node, this.cfiBase, ignoreClass).toString();
\t\t}

\t\t// TODO: find where this is used - remove?

\t}, {
\t\tkey: "map",
\t\tvalue: function map(layout) {
\t\t\tvar map = new _mapping2.default(layout);
\t\t\treturn map.section();
\t\t}

\t\t/**
   * Size the contents to a given width and height
   * @param {number} [width]
   * @param {number} [height]
   */

\t}, {
\t\tkey: "size",
\t\tvalue: function size(width, height) {
\t\t\tvar viewport = { scale: 1.0, scalable: "no" };

\t\t\tthis.layoutStyle("scrolling");

\t\t\tif (width >= 0) {
\t\t\t\tthis.width(width);
\t\t\t\tviewport.width = width;
\t\t\t\tthis.css("padding", "0 " + width / 12 + "px", true);
\t\t\t}

\t\t\tif (height >= 0) {
\t\t\t\tthis.height(height);
\t\t\t\tviewport.height = height;
\t\t\t}

\t\t\tthis.css("margin", "0");
\t\t\tthis.css("box-sizing", "border-box");

\t\t\tthis.viewport(viewport);
\t\t}

\t\t/**
   * Apply columns to the contents for pagination
   * @param {number} width
   * @param {number} height
   * @param {number} columnWidth
   * @param {number} gap
   */

\t}, {
\t\tkey: "columns",
\t\tvalue: function columns(width, height, columnWidth, gap) {
\t\t\tvar COLUMN_AXIS = (0, _core.prefixed)("column-axis");
\t\t\tvar COLUMN_GAP = (0, _core.prefixed)("column-gap");
\t\t\tvar COLUMN_WIDTH = (0, _core.prefixed)("column-width");
\t\t\tvar COLUMN_FILL = (0, _core.prefixed)("column-fill");

\t\t\tvar writingMode = this.writingMode();
\t\t\tvar axis = writingMode.indexOf("vertical") === 0 ? "vertical" : "horizontal";

\t\t\tthis.layoutStyle("paginated");

\t\t\t// Fix body width issues if rtl is only set on body element
\t\t\tif (this.content.dir === "rtl") {
\t\t\t\tthis.direction("rtl");
\t\t\t}

\t\t\tthis.width(width);
\t\t\tthis.height(height);

\t\t\t// Deal with Mobile trying to scale to viewport
\t\t\tthis.viewport({ width: width, height: height, scale: 1.0, scalable: "no" });

\t\t\t// TODO: inline-block needs more testing
\t\t\t// Fixes Safari column cut offs, but causes RTL issues
\t\t\t// this.css("display", "inline-block");

\t\t\tthis.css("overflow-y", "hidden");
\t\t\tthis.css("margin", "0", true);

\t\t\tif (axis === "vertical") {
\t\t\t\tthis.css("padding", gap / 2 + "px 20px", true);
\t\t\t} else {
\t\t\t\tthis.css("padding", "20px " + gap / 2 + "px", true);
\t\t\t}

\t\t\tthis.css("box-sizing", "border-box");
\t\t\tthis.css("max-width", "inherit");

\t\t\tthis.css(COLUMN_AXIS, "horizontal");
\t\t\tthis.css(COLUMN_FILL, "auto");

\t\t\tthis.css(COLUMN_GAP, gap + "px");
\t\t\tthis.css(COLUMN_WIDTH, columnWidth + "px");
\t\t}

\t\t/**
   * Scale contents from center
   * @param {number} scale
   * @param {number} offsetX
   * @param {number} offsetY
   */

\t}, {
\t\tkey: "scaler",
\t\tvalue: function scaler(scale, offsetX, offsetY) {
\t\t\tvar scaleStr = "scale(" + scale + ")";
\t\t\tvar translateStr = "";
\t\t\t// this.css("position", "absolute"));
\t\t\tthis.css("transform-origin", "top left");

\t\t\tif (offsetX >= 0 || offsetY >= 0) {
\t\t\t\ttranslateStr = " translate(" + (offsetX || 0) + "px, " + (offsetY || 0) + "px )";
\t\t\t}

\t\t\tthis.css("transform", scaleStr + translateStr);
\t\t}

\t\t/**
   * Fit contents into a fixed width and height
   * @param {number} width
   * @param {number} height
   */

\t}, {
\t\tkey: "fit",
\t\tvalue: function fit(width, height) {
\t\t\tvar viewport = this.viewport();
\t\t\tvar widthScale = width / parseInt(viewport.width);
\t\t\tvar heightScale = height / parseInt(viewport.height);
\t\t\tvar scale = widthScale < heightScale ? widthScale : heightScale;

\t\t\tvar offsetY = (height - viewport.height * scale) / 2;

\t\t\tthis.layoutStyle("paginated");

\t\t\tthis.width(width);
\t\t\tthis.height(height);
\t\t\tthis.overflow("hidden");

\t\t\t// Scale to the correct size
\t\t\tthis.scaler(scale, 0, offsetY);

\t\t\tthis.css("background-color", "transparent");
\t\t}

\t\t/**
   * Set the direction of the text
   * @param {string} [dir="ltr"] "rtl" | "ltr"
   */

\t}, {
\t\tkey: "direction",
\t\tvalue: function direction(dir) {
\t\t\tif (this.documentElement) {
\t\t\t\tthis.documentElement.style["direction"] = dir;
\t\t\t}
\t\t}
\t}, {
\t\tkey: "mapPage",
\t\tvalue: function mapPage(cfiBase, layout, start, end, dev) {
\t\t\tvar mapping = new _mapping2.default(layout, dev);

\t\t\treturn mapping.page(this, cfiBase, start, end);
\t\t}

\t\t/**
   * Emit event when link in content is clicked
   * @private
   */

\t}, {
\t\tkey: "linksHandler",
\t\tvalue: function linksHandler() {
\t\t\tvar _this2 = this;

\t\t\t(0, _replacements.replaceLinks)(this.content, function (href) {
\t\t\t\t_this2.emit(_constants.EVENTS.CONTENTS.LINK_CLICKED, href);
\t\t\t});
\t\t}

\t\t/**
   * Set the writingMode of the text
   * @param {string} [mode="horizontal-tb"] "horizontal-tb" | "vertical-rl" | "vertical-lr"
   */

\t}, {
\t\tkey: "writingMode",
\t\tvalue: function writingMode(mode) {
\t\t\tvar WRITING_MODE = (0, _core.prefixed)("writing-mode");

\t\t\tif (mode && this.documentElement) {
\t\t\t\tthis.documentElement.style[WRITING_MODE] = mode;
\t\t\t}

\t\t\treturn this.window.getComputedStyle(this.documentElement)[WRITING_MODE] || '';
\t\t}

\t\t/**
   * Set the layoutStyle of the content
   * @param {string} [style="paginated"] "scrolling" | "paginated"
   * @private
   */

\t}, {
\t\tkey: "layoutStyle",
\t\tvalue: function layoutStyle(style) {

\t\t\tif (style) {
\t\t\t\tthis._layoutStyle = style;
\t\t\t\tnavigator.epubReadingSystem.layoutStyle = this._layoutStyle;
\t\t\t}

\t\t\treturn this._layoutStyle || "paginated";
\t\t}

\t\t/**
   * Add the epubReadingSystem object to the navigator
   * @param {string} name
   * @param {string} version
   * @private
   */

\t}, {
\t\tkey: "epubReadingSystem",
\t\tvalue: function epubReadingSystem(name, version) {
\t\t\tnavigator.epubReadingSystem = {
\t\t\t\tname: name,
\t\t\t\tversion: version,
\t\t\t\tlayoutStyle: this.layoutStyle(),
\t\t\t\thasFeature: function hasFeature(feature) {
\t\t\t\t\tswitch (feature) {
\t\t\t\t\t\tcase "dom-manipulation":
\t\t\t\t\t\t\treturn true;
\t\t\t\t\t\tcase "layout-changes":
\t\t\t\t\t\t\treturn true;
\t\t\t\t\t\tcase "touch-events":
\t\t\t\t\t\t\treturn true;
\t\t\t\t\t\tcase "mouse-events":
\t\t\t\t\t\t\treturn true;
\t\t\t\t\t\tcase "keyboard-events":
\t\t\t\t\t\t\treturn true;
\t\t\t\t\t\tcase "spine-scripting":
\t\t\t\t\t\t\treturn false;
\t\t\t\t\t\tdefault:
\t\t\t\t\t\t\treturn false;
\t\t\t\t\t}
\t\t\t\t}
\t\t\t};
\t\t\treturn navigator.epubReadingSystem;
\t\t}
\t}, {
\t\tkey: "destroy",
\t\tvalue: function destroy() {
\t\t\t// Stop observing
\t\t\tif (this.observer) {
\t\t\t\tthis.observer.disconnect();
\t\t\t}

\t\t\tthis.document.removeEventListener('transitionend', this.resizeCheck);

\t\t\tthis.removeListeners();
\t\t}
\t}], [{
\t\tkey: "listenedEvents",
\t\tget: function get() {
\t\t\treturn _constants.DOM_EVENTS;
\t\t}
\t}]);

\treturn Contents;
}();

(0, _eventEmitter2.default)(Contents.prototype);

exports.default = Contents;
module.exports = exports["default"];

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
\tvalue: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _eventEmitter = __webpack_require__(2);

var _eventEmitter2 = _interopRequireDefault(_eventEmitter);

var _core = __webpack_require__(0);

var _mapping = __webpack_require__(19);

var _mapping2 = _interopRequireDefault(_mapping);

var _queue = __webpack_require__(12);

var _queue2 = _interopRequireDefault(_queue);

var _stage = __webpack_require__(56);

var _stage2 = _interopRequireDefault(_stage);

var _views = __webpack_require__(66);

var _views2 = _interopRequireDefault(_views);

var _constants = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DefaultViewManager = function () {
\tfunction DefaultViewManager(options) {
\t\t_classCallCheck(this, DefaultViewManager);

\t\tthis.name = "default";
\t\tthis.View = options.view;
\t\tthis.request = options.request;
\t\tthis.renditionQueue = options.queue;
\t\tthis.q = new _queue2.default(this);

\t\tthis.settings = (0, _core.extend)(this.settings || {}, {
\t\t\tinfinite: true,
\t\t\thidden: false,
\t\t\twidth: undefined,
\t\t\theight: undefined,
\t\t\taxis: undefined,
\t\t\tflow: "scrolled",
\t\t\tignoreClass: ""
\t\t});

\t\t(0, _core.extend)(this.settings, options.settings || {});

\t\tthis.viewSettings = {
\t\t\tignoreClass: this.settings.ignoreClass,
\t\t\taxis: this.settings.axis,
\t\t\tflow: this.settings.flow,
\t\t\tlayout: this.layout,
\t\t\tmethod: this.settings.method, // srcdoc, blobUrl, write
\t\t\twidth: 0,
\t\t\theight: 0,
\t\t\tforceEvenPages: true
\t\t};

\t\tthis.rendered = false;
\t}

\t_createClass(DefaultViewManager, [{
\t\tkey: "render",
\t\tvalue: function render(element, size) {
\t\t\tvar tag = element.tagName;

\t\t\tif (tag && (tag.toLowerCase() == "body" || tag.toLowerCase() == "html")) {
\t\t\t\tthis.fullsize = true;
\t\t\t}

\t\t\tif (this.fullsize) {
\t\t\t\tthis.settings.overflow = "visible";
\t\t\t\tthis.overflow = this.settings.overflow;
\t\t\t}

\t\t\tthis.settings.size = size;

\t\t\t// Save the stage
\t\t\tthis.stage = new _stage2.default({
\t\t\t\twidth: size.width,
\t\t\t\theight: size.height,
\t\t\t\toverflow: this.overflow,
\t\t\t\thidden: this.settings.hidden,
\t\t\t\taxis: this.settings.axis,
\t\t\t\tfullsize: this.fullsize,
\t\t\t\tdirection: this.settings.direction
\t\t\t});

\t\t\tthis.stage.attachTo(element);

\t\t\t// Get this stage container div
\t\t\tthis.container = this.stage.getContainer();

\t\t\t// Views array methods
\t\t\tthis.views = new _views2.default(this.container);

\t\t\t// Calculate Stage Size
\t\t\tthis._bounds = this.bounds();
\t\t\tthis._stageSize = this.stage.size();

\t\t\t// Set the dimensions for views
\t\t\tthis.viewSettings.width = this._stageSize.width;
\t\t\tthis.viewSettings.height = this._stageSize.height;

\t\t\t// Function to handle a resize event.
\t\t\t// Will only attach if width and height are both fixed.
\t\t\tthis.stage.onResize(this.onResized.bind(this));

\t\t\tthis.stage.onOrientationChange(this.onOrientationChange.bind(this));

\t\t\t// Add Event Listeners
\t\t\tthis.addEventListeners();

\t\t\t// Add Layout method
\t\t\t// this.applyLayoutMethod();
\t\t\tif (this.layout) {
\t\t\t\tthis.updateLayout();
\t\t\t}

\t\t\tthis.rendered = true;
\t\t}
\t}, {
\t\tkey: "addEventListeners",
\t\tvalue: function addEventListeners() {
\t\t\tvar scroller;

\t\t\twindow.addEventListener("unload", function (e) {
\t\t\t\tthis.destroy();
\t\t\t}.bind(this));

\t\t\tif (!this.fullsize) {
\t\t\t\tscroller = this.container;
\t\t\t} else {
\t\t\t\tscroller = window;
\t\t\t}

\t\t\tscroller.addEventListener("scroll", this.onScroll.bind(this));
\t\t}
\t}, {
\t\tkey: "removeEventListeners",
\t\tvalue: function removeEventListeners() {
\t\t\tvar scroller;

\t\t\tif (!this.fullsize) {
\t\t\t\tscroller = this.container;
\t\t\t} else {
\t\t\t\tscroller = window;
\t\t\t}

\t\t\tscroller.removeEventListener("scroll", this.onScroll.bind(this));
\t\t}
\t}, {
\t\tkey: "destroy",
\t\tvalue: function destroy() {
\t\t\tclearTimeout(this.orientationTimeout);
\t\t\tclearTimeout(this.resizeTimeout);
\t\t\tclearTimeout(this.afterScrolled);

\t\t\tthis.clear();

\t\t\tthis.removeEventListeners();

\t\t\tthis.stage.destroy();

\t\t\tthis.rendered = false;

\t\t\t/*
   \t\tclearTimeout(this.trimTimeout);
   \tif(this.settings.hidden) {
   \t\tthis.element.removeChild(this.wrapper);
   \t} else {
   \t\tthis.element.removeChild(this.container);
   \t}
   */
\t\t}
\t}, {
\t\tkey: "onOrientationChange",
\t\tvalue: function onOrientationChange(e) {
\t\t\tvar _window = window,
\t\t\t    orientation = _window.orientation;


\t\t\tthis.resize();

\t\t\t// Per ampproject:
\t\t\t// In IOS 10.3, the measured size of an element is incorrect if the
\t\t\t// element size depends on window size directly and the measurement
\t\t\t// happens in window.resize event. Adding a timeout for correct
\t\t\t// measurement. See https://github.com/ampproject/amphtml/issues/8479
\t\t\tclearTimeout(this.orientationTimeout);
\t\t\tthis.orientationTimeout = setTimeout(function () {
\t\t\t\tthis.orientationTimeout = undefined;
\t\t\t\tthis.resize();
\t\t\t\tthis.emit(_constants.EVENTS.MANAGERS.ORIENTATION_CHANGE, orientation);
\t\t\t}.bind(this), 500);
\t\t}
\t}, {
\t\tkey: "onResized",
\t\tvalue: function onResized(e) {
\t\t\tthis.resize();
\t\t}
\t}, {
\t\tkey: "resize",
\t\tvalue: function resize(width, height) {
\t\t\tvar stageSize = this.stage.size(width, height);

\t\t\t// For Safari, wait for orientation to catch up
\t\t\t// if the window is a square
\t\t\tthis.winBounds = (0, _core.windowBounds)();
\t\t\tif (this.orientationTimeout && this.winBounds.width === this.winBounds.height) {
\t\t\t\t// reset the stage size for next resize
\t\t\t\tthis._stageSize = undefined;
\t\t\t\treturn;
\t\t\t}

\t\t\tif (this._stageSize && this._stageSize.width === stageSize.width && this._stageSize.height === stageSize.height) {
\t\t\t\t// Size is the same, no need to resize
\t\t\t\treturn;
\t\t\t}

\t\t\tthis._stageSize = stageSize;

\t\t\tthis._bounds = this.bounds();

\t\t\t// Clear current views
\t\t\tthis.clear();

\t\t\t// Update for new views
\t\t\tthis.viewSettings.width = this._stageSize.width;
\t\t\tthis.viewSettings.height = this._stageSize.height;

\t\t\tthis.updateLayout();

\t\t\tthis.emit(_constants.EVENTS.MANAGERS.RESIZED, {
\t\t\t\twidth: this._stageSize.width,
\t\t\t\theight: this._stageSize.height
\t\t\t});
\t\t}
\t}, {
\t\tkey: "createView",
\t\tvalue: function createView(section) {
\t\t\treturn new this.View(section, this.viewSettings);
\t\t}
\t}, {
\t\tkey: "display",
\t\tvalue: function display(section, target) {

\t\t\tvar displaying = new _core.defer();
\t\t\tvar displayed = displaying.promise;

\t\t\t// Check if moving to target is needed
\t\t\tif (target === section.href || (0, _core.isNumber)(target)) {
\t\t\t\ttarget = undefined;
\t\t\t}

\t\t\t// Check to make sure the section we want isn't already shown
\t\t\tvar visible = this.views.find(section);

\t\t\t// View is already shown, just move to correct location in view
\t\t\tif (visible && section) {
\t\t\t\tvar offset = visible.offset();

\t\t\t\tif (this.settings.direction === "ltr") {
\t\t\t\t\tthis.scrollTo(offset.left, offset.top, true);
\t\t\t\t} else {
\t\t\t\t\tvar width = visible.width();
\t\t\t\t\tthis.scrollTo(offset.left + width, offset.top, true);
\t\t\t\t}

\t\t\t\tif (target) {
\t\t\t\t\tvar _offset = visible.locationOf(target);
\t\t\t\t\tthis.moveTo(_offset);
\t\t\t\t}

\t\t\t\tdisplaying.resolve();
\t\t\t\treturn displayed;
\t\t\t}

\t\t\t// Hide all current views
\t\t\tthis.clear();

\t\t\tthis.add(section).then(function (view) {

\t\t\t\t// Move to correct place within the section, if needed
\t\t\t\tif (target) {
\t\t\t\t\tvar _offset2 = view.locationOf(target);
\t\t\t\t\tthis.moveTo(_offset2);
\t\t\t\t}
\t\t\t}.bind(this), function (err) {
\t\t\t\tdisplaying.reject(err);
\t\t\t}).then(function () {
\t\t\t\tvar next;
\t\t\t\tif (this.layout.name === "pre-paginated" && this.layout.divisor > 1) {
\t\t\t\t\tnext = section.next();
\t\t\t\t\tif (next) {
\t\t\t\t\t\treturn this.add(next);
\t\t\t\t\t}
\t\t\t\t}
\t\t\t}.bind(this)).then(function () {

\t\t\t\tthis.views.show();

\t\t\t\tdisplaying.resolve();
\t\t\t}.bind(this));
\t\t\t// .then(function(){
\t\t\t// \treturn this.hooks.display.trigger(view);
\t\t\t// }.bind(this))
\t\t\t// .then(function(){
\t\t\t// \tthis.views.show();
\t\t\t// }.bind(this));
\t\t\treturn displayed;
\t\t}
\t}, {
\t\tkey: "afterDisplayed",
\t\tvalue: function afterDisplayed(view) {
\t\t\tthis.emit(_constants.EVENTS.MANAGERS.ADDED, view);
\t\t}
\t}, {
\t\tkey: "afterResized",
\t\tvalue: function afterResized(view) {
\t\t\tthis.emit(_constants.EVENTS.MANAGERS.RESIZE, view.section);
\t\t}
\t}, {
\t\tkey: "moveTo",
\t\tvalue: function moveTo(offset) {
\t\t\tvar distX = 0,
\t\t\t    distY = 0;

\t\t\tif (!this.isPaginated) {
\t\t\t\tdistY = offset.top;
\t\t\t} else {
\t\t\t\tdistX = Math.floor(offset.left / this.layout.delta) * this.layout.delta;

\t\t\t\tif (distX + this.layout.delta > this.container.scrollWidth) {
\t\t\t\t\tdistX = this.container.scrollWidth - this.layout.delta;
\t\t\t\t}
\t\t\t}
\t\t\tthis.scrollTo(distX, distY, true);
\t\t}
\t}, {
\t\tkey: "add",
\t\tvalue: function add(section) {
\t\t\tvar _this = this;

\t\t\tvar view = this.createView(section);

\t\t\tthis.views.append(view);

\t\t\t// view.on(EVENTS.VIEWS.SHOWN, this.afterDisplayed.bind(this));
\t\t\tview.onDisplayed = this.afterDisplayed.bind(this);
\t\t\tview.onResize = this.afterResized.bind(this);

\t\t\tview.on(_constants.EVENTS.VIEWS.AXIS, function (axis) {
\t\t\t\t_this.updateAxis(axis);
\t\t\t});

\t\t\treturn view.display(this.request);
\t\t}
\t}, {
\t\tkey: "append",
\t\tvalue: function append(section) {
\t\t\tvar _this2 = this;

\t\t\tvar view = this.createView(section);
\t\t\tthis.views.append(view);

\t\t\tview.onDisplayed = this.afterDisplayed.bind(this);
\t\t\tview.onResize = this.afterResized.bind(this);

\t\t\tview.on(_constants.EVENTS.VIEWS.AXIS, function (axis) {
\t\t\t\t_this2.updateAxis(axis);
\t\t\t});

\t\t\treturn view.display(this.request);
\t\t}
\t}, {
\t\tkey: "prepend",
\t\tvalue: function prepend(section) {
\t\t\tvar _this3 = this;

\t\t\tvar view = this.createView(section);

\t\t\tview.on(_constants.EVENTS.VIEWS.RESIZED, function (bounds) {
\t\t\t\t_this3.counter(bounds);
\t\t\t});

\t\t\tthis.views.prepend(view);

\t\t\tview.onDisplayed = this.afterDisplayed.bind(this);
\t\t\tview.onResize = this.afterResized.bind(this);

\t\t\tview.on(_constants.EVENTS.VIEWS.AXIS, function (axis) {
\t\t\t\t_this3.updateAxis(axis);
\t\t\t});

\t\t\treturn view.display(this.request);
\t\t}
\t}, {
\t\tkey: "counter",
\t\tvalue: function counter(bounds) {
\t\t\tif (this.settings.axis === "vertical") {
\t\t\t\tthis.scrollBy(0, bounds.heightDelta, true);
\t\t\t} else {
\t\t\t\tthis.scrollBy(bounds.widthDelta, 0, true);
\t\t\t}
\t\t}

\t\t// resizeView(view) {
\t\t//
\t\t// \tif(this.settings.globalLayoutProperties.layout === "pre-paginated") {
\t\t// \t\tview.lock("both", this.bounds.width, this.bounds.height);
\t\t// \t} else {
\t\t// \t\tview.lock("width", this.bounds.width, this.bounds.height);
\t\t// \t}
\t\t//
\t\t// };

\t}, {
\t\tkey: "next",
\t\tvalue: function next() {
\t\t\tvar next;
\t\t\tvar left;

\t\t\tvar dir = this.settings.direction;

\t\t\tif (!this.views.length) return;

\t\t\tif (this.isPaginated && this.settings.axis === "horizontal" && (!dir || dir === "ltr")) {

\t\t\t\tthis.scrollLeft = this.container.scrollLeft;

\t\t\t\tleft = this.container.scrollLeft + this.container.offsetWidth + this.layout.delta;

\t\t\t\tif (left <= this.container.scrollWidth) {
\t\t\t\t\tthis.scrollBy(this.layout.delta, 0, true);
\t\t\t\t} else {
\t\t\t\t\tnext = this.views.last().section.next();
\t\t\t\t}
\t\t\t} else if (this.isPaginated && this.settings.axis === "horizontal" && dir === "rtl") {

\t\t\t\tthis.scrollLeft = this.container.scrollLeft;

\t\t\t\tleft = this.container.scrollLeft;

\t\t\t\tif (left > 0) {
\t\t\t\t\tthis.scrollBy(this.layout.delta, 0, true);
\t\t\t\t} else {
\t\t\t\t\tnext = this.views.last().section.next();
\t\t\t\t}
\t\t\t} else if (this.isPaginated && this.settings.axis === "vertical") {

\t\t\t\tthis.scrollTop = this.container.scrollTop;

\t\t\t\tvar top = this.container.scrollTop + this.container.offsetHeight;

\t\t\t\tif (top < this.container.scrollHeight) {
\t\t\t\t\tthis.scrollBy(0, this.layout.height, true);
\t\t\t\t} else {
\t\t\t\t\tnext = this.views.last().section.next();
\t\t\t\t}
\t\t\t} else {
\t\t\t\tnext = this.views.last().section.next();
\t\t\t}

\t\t\tif (next) {
\t\t\t\tthis.clear();

\t\t\t\treturn this.append(next).then(function () {
\t\t\t\t\tvar right;
\t\t\t\t\tif (this.layout.name === "pre-paginated" && this.layout.divisor > 1) {
\t\t\t\t\t\tright = next.next();
\t\t\t\t\t\tif (right) {
\t\t\t\t\t\t\treturn this.append(right);
\t\t\t\t\t\t}
\t\t\t\t\t}
\t\t\t\t}.bind(this), function (err) {
\t\t\t\t\tdisplaying.reject(err);
\t\t\t\t}).then(function () {
\t\t\t\t\tthis.views.show();
\t\t\t\t}.bind(this));
\t\t\t}
\t\t}
\t}, {
\t\tkey: "prev",
\t\tvalue: function prev() {
\t\t\tvar prev;
\t\t\tvar left;
\t\t\tvar dir = this.settings.direction;

\t\t\tif (!this.views.length) return;

\t\t\tif (this.isPaginated && this.settings.axis === "horizontal" && (!dir || dir === "ltr")) {

\t\t\t\tthis.scrollLeft = this.container.scrollLeft;

\t\t\t\tleft = this.container.scrollLeft;

\t\t\t\tif (left > 0) {
\t\t\t\t\tthis.scrollBy(-this.layout.delta, 0, true);
\t\t\t\t} else {
\t\t\t\t\tprev = this.views.first().section.prev();
\t\t\t\t}
\t\t\t} else if (this.isPaginated && this.settings.axis === "horizontal" && dir === "rtl") {

\t\t\t\tthis.scrollLeft = this.container.scrollLeft;

\t\t\t\tleft = this.container.scrollLeft + this.container.offsetWidth + this.layout.delta;

\t\t\t\tif (left <= this.container.scrollWidth) {
\t\t\t\t\tthis.scrollBy(-this.layout.delta, 0, true);
\t\t\t\t} else {
\t\t\t\t\tprev = this.views.first().section.prev();
\t\t\t\t}
\t\t\t} else if (this.isPaginated && this.settings.axis === "vertical") {

\t\t\t\tthis.scrollTop = this.container.scrollTop;

\t\t\t\tvar top = this.container.scrollTop;

\t\t\t\tif (top > 0) {
\t\t\t\t\tthis.scrollBy(0, -this.layout.height, true);
\t\t\t\t} else {
\t\t\t\t\tprev = this.views.first().section.prev();
\t\t\t\t}
\t\t\t} else {

\t\t\t\tprev = this.views.first().section.prev();
\t\t\t}

\t\t\tif (prev) {
\t\t\t\tthis.clear();

\t\t\t\treturn this.prepend(prev).then(function () {
\t\t\t\t\tvar left;
\t\t\t\t\tif (this.layout.name === "pre-paginated" && this.layout.divisor > 1) {
\t\t\t\t\t\tleft = prev.prev();
\t\t\t\t\t\tif (left) {
\t\t\t\t\t\t\treturn this.prepend(left);
\t\t\t\t\t\t}
\t\t\t\t\t}
\t\t\t\t}.bind(this), function (err) {
\t\t\t\t\tdisplaying.reject(err);
\t\t\t\t}).then(function () {
\t\t\t\t\tif (this.isPaginated && this.settings.axis === "horizontal") {
\t\t\t\t\t\tif (this.settings.direction === "rtl") {
\t\t\t\t\t\t\tthis.scrollTo(0, 0, true);
\t\t\t\t\t\t} else {
\t\t\t\t\t\t\tthis.scrollTo(this.container.scrollWidth - this.layout.delta, 0, true);
\t\t\t\t\t\t}
\t\t\t\t\t}
\t\t\t\t\tthis.views.show();
\t\t\t\t}.bind(this));
\t\t\t}
\t\t}
\t}, {
\t\tkey: "current",
\t\tvalue: function current() {
\t\t\tvar visible = this.visible();
\t\t\tif (visible.length) {
\t\t\t\t// Current is the last visible view
\t\t\t\treturn visible[visible.length - 1];
\t\t\t}
\t\t\treturn null;
\t\t}
\t}, {
\t\tkey: "clear",
\t\tvalue: function clear() {

\t\t\t// this.q.clear();

\t\t\tif (this.views) {
\t\t\t\tthis.views.hide();
\t\t\t\tthis.scrollTo(0, 0, true);
\t\t\t\tthis.views.clear();
\t\t\t}
\t\t}
\t}, {
\t\tkey: "currentLocation",
\t\tvalue: function currentLocation() {

\t\t\tif (this.settings.axis === "vertical") {
\t\t\t\tthis.location = this.scrolledLocation();
\t\t\t} else {
\t\t\t\tthis.location = this.paginatedLocation();
\t\t\t}
\t\t\treturn this.location;
\t\t}
\t}, {
\t\tkey: "scrolledLocation",
\t\tvalue: function scrolledLocation() {
\t\t\tvar _this4 = this;

\t\t\tvar visible = this.visible();
\t\t\tvar container = this.container.getBoundingClientRect();
\t\t\tvar pageHeight = container.height < window.innerHeight ? container.height : window.innerHeight;

\t\t\tvar offset = 0;
\t\t\tvar used = 0;

\t\t\tif (this.fullsize) {
\t\t\t\toffset = window.scrollY;
\t\t\t}

\t\t\tvar sections = visible.map(function (view) {
\t\t\t\tvar _view$section = view.section,
\t\t\t\t    index = _view$section.index,
\t\t\t\t    href = _view$section.href;

\t\t\t\tvar position = view.position();
\t\t\t\tvar height = view.height();

\t\t\t\tvar startPos = offset + container.top - position.top + used;
\t\t\t\tvar endPos = startPos + pageHeight - used;
\t\t\t\tif (endPos > height) {
\t\t\t\t\tendPos = height;
\t\t\t\t\tused = endPos - startPos;
\t\t\t\t}

\t\t\t\tvar totalPages = _this4.layout.count(height, pageHeight).pages;

\t\t\t\tvar currPage = Math.ceil(startPos / pageHeight);
\t\t\t\tvar pages = [];
\t\t\t\tvar endPage = Math.ceil(endPos / pageHeight);

\t\t\t\tpages = [];
\t\t\t\tfor (var i = currPage; i <= endPage; i++) {
\t\t\t\t\tvar pg = i + 1;
\t\t\t\t\tpages.push(pg);
\t\t\t\t}

\t\t\t\tvar mapping = _this4.mapping.page(view.contents, view.section.cfiBase, startPos, endPos);

\t\t\t\treturn {
\t\t\t\t\tindex: index,
\t\t\t\t\thref: href,
\t\t\t\t\tpages: pages,
\t\t\t\t\ttotalPages: totalPages,
\t\t\t\t\tmapping: mapping
\t\t\t\t};
\t\t\t});

\t\t\treturn sections;
\t\t}
\t}, {
\t\tkey: "paginatedLocation",
\t\tvalue: function paginatedLocation() {
\t\t\tvar _this5 = this;

\t\t\tvar visible = this.visible();
\t\t\tvar container = this.container.getBoundingClientRect();

\t\t\tvar left = 0;
\t\t\tvar used = 0;

\t\t\tif (this.fullsize) {
\t\t\t\tleft = window.scrollX;
\t\t\t}

\t\t\tvar sections = visible.map(function (view) {
\t\t\t\tvar _view$section2 = view.section,
\t\t\t\t    index = _view$section2.index,
\t\t\t\t    href = _view$section2.href;

\t\t\t\tvar offset = view.offset().left;
\t\t\t\tvar position = view.position().left;
\t\t\t\tvar width = view.width();

\t\t\t\t// Find mapping
\t\t\t\tvar start = left + container.left - position + used;
\t\t\t\tvar end = start + _this5.layout.width - used;

\t\t\t\tvar mapping = _this5.mapping.page(view.contents, view.section.cfiBase, start, end);

\t\t\t\t// Find displayed pages
\t\t\t\t//console.log("pre", end, offset + width);
\t\t\t\t// if (end > offset + width) {
\t\t\t\t// \tend = offset + width;
\t\t\t\t// \tused = this.layout.pageWidth;
\t\t\t\t// }
\t\t\t\t// console.log("post", end);

\t\t\t\tvar totalPages = _this5.layout.count(width).pages;
\t\t\t\tvar startPage = Math.floor(start / _this5.layout.pageWidth);
\t\t\t\tvar pages = [];
\t\t\t\tvar endPage = Math.floor(end / _this5.layout.pageWidth);

\t\t\t\t// start page should not be negative
\t\t\t\tif (startPage < 0) {
\t\t\t\t\tstartPage = 0;
\t\t\t\t\tendPage = endPage + 1;
\t\t\t\t}

\t\t\t\t// Reverse page counts for rtl
\t\t\t\tif (_this5.settings.direction === "rtl") {
\t\t\t\t\tvar tempStartPage = startPage;
\t\t\t\t\tstartPage = totalPages - endPage;
\t\t\t\t\tendPage = totalPages - tempStartPage;
\t\t\t\t}

\t\t\t\tfor (var i = startPage + 1; i <= endPage; i++) {
\t\t\t\t\tvar pg = i;
\t\t\t\t\tpages.push(pg);
\t\t\t\t}

\t\t\t\treturn {
\t\t\t\t\tindex: index,
\t\t\t\t\thref: href,
\t\t\t\t\tpages: pages,
\t\t\t\t\ttotalPages: totalPages,
\t\t\t\t\tmapping: mapping
\t\t\t\t};
\t\t\t});

\t\t\treturn sections;
\t\t}
\t}, {
\t\tkey: "isVisible",
\t\tvalue: function isVisible(view, offsetPrev, offsetNext, _container) {
\t\t\tvar position = view.position();
\t\t\tvar container = _container || this.bounds();

\t\t\tif (this.settings.axis === "horizontal" && position.right > container.left - offsetPrev && position.left < container.right + offsetNext) {

\t\t\t\treturn true;
\t\t\t} else if (this.settings.axis === "vertical" && position.bottom > container.top - offsetPrev && position.top < container.bottom + offsetNext) {

\t\t\t\treturn true;
\t\t\t}

\t\t\treturn false;
\t\t}
\t}, {
\t\tkey: "visible",
\t\tvalue: function visible() {
\t\t\tvar container = this.bounds();
\t\t\tvar views = this.views.displayed();
\t\t\tvar viewsLength = views.length;
\t\t\tvar visible = [];
\t\t\tvar isVisible;
\t\t\tvar view;

\t\t\tfor (var i = 0; i < viewsLength; i++) {
\t\t\t\tview = views[i];
\t\t\t\tisVisible = this.isVisible(view, 0, 0, container);

\t\t\t\tif (isVisible === true) {
\t\t\t\t\tvisible.push(view);
\t\t\t\t}
\t\t\t}
\t\t\treturn visible;
\t\t}
\t}, {
\t\tkey: "scrollBy",
\t\tvalue: function scrollBy(x, y, silent) {
\t\t\tvar dir = this.settings.direction === "rtl" ? -1 : 1;

\t\t\tif (silent) {
\t\t\t\tthis.ignore = true;
\t\t\t}

\t\t\tif (!this.fullsize) {
\t\t\t\tif (x) this.container.scrollLeft += x * dir;
\t\t\t\tif (y) this.container.scrollTop += y;
\t\t\t} else {
\t\t\t\twindow.scrollBy(x * dir, y * dir);
\t\t\t}
\t\t\tthis.scrolled = true;
\t\t}
\t}, {
\t\tkey: "scrollTo",
\t\tvalue: function scrollTo(x, y, silent) {
\t\t\tif (silent) {
\t\t\t\tthis.ignore = true;
\t\t\t}

\t\t\tif (!this.fullsize) {
\t\t\t\tthis.container.scrollLeft = x;
\t\t\t\tthis.container.scrollTop = y;
\t\t\t} else {
\t\t\t\twindow.scrollTo(x, y);
\t\t\t}
\t\t\tthis.scrolled = true;
\t\t}
\t}, {
\t\tkey: "onScroll",
\t\tvalue: function onScroll() {
\t\t\tvar scrollTop = void 0;
\t\t\tvar scrollLeft = void 0;

\t\t\tif (!this.fullsize) {
\t\t\t\tscrollTop = this.container.scrollTop;
\t\t\t\tscrollLeft = this.container.scrollLeft;
\t\t\t} else {
\t\t\t\tscrollTop = window.scrollY;
\t\t\t\tscrollLeft = window.scrollX;
\t\t\t}

\t\t\tthis.scrollTop = scrollTop;
\t\t\tthis.scrollLeft = scrollLeft;

\t\t\tif (!this.ignore) {
\t\t\t\tthis.emit(_constants.EVENTS.MANAGERS.SCROLL, {
\t\t\t\t\ttop: scrollTop,
\t\t\t\t\tleft: scrollLeft
\t\t\t\t});

\t\t\t\tclearTimeout(this.afterScrolled);
\t\t\t\tthis.afterScrolled = setTimeout(function () {
\t\t\t\t\tthis.emit(_constants.EVENTS.MANAGERS.SCROLLED, {
\t\t\t\t\t\ttop: this.scrollTop,
\t\t\t\t\t\tleft: this.scrollLeft
\t\t\t\t\t});
\t\t\t\t}.bind(this), 20);
\t\t\t} else {
\t\t\t\tthis.ignore = false;
\t\t\t}
\t\t}
\t}, {
\t\tkey: "bounds",
\t\tvalue: function bounds() {
\t\t\tvar bounds;

\t\t\tbounds = this.stage.bounds();

\t\t\treturn bounds;
\t\t}
\t}, {
\t\tkey: "applyLayout",
\t\tvalue: function applyLayout(layout) {

\t\t\tthis.layout = layout;
\t\t\tthis.updateLayout();
\t\t\t// this.manager.layout(this.layout.format);
\t\t}
\t}, {
\t\tkey: "updateLayout",
\t\tvalue: function updateLayout() {

\t\t\tif (!this.stage) {
\t\t\t\treturn;
\t\t\t}

\t\t\tthis._stageSize = this.stage.size();

\t\t\tif (!this.isPaginated) {
\t\t\t\tthis.layout.calculate(this._stageSize.width, this._stageSize.height);
\t\t\t} else {
\t\t\t\tthis.layout.calculate(this._stageSize.width, this._stageSize.height, this.settings.gap);

\t\t\t\t// Set the look ahead offset for what is visible
\t\t\t\tthis.settings.offset = this.layout.delta;

\t\t\t\t// this.stage.addStyleRules("iframe", [{"margin-right" : this.layout.gap + "px"}]);
\t\t\t}

\t\t\t// Set the dimensions for views
\t\t\tthis.viewSettings.width = this.layout.width;
\t\t\tthis.viewSettings.height = this.layout.height;

\t\t\tthis.setLayout(this.layout);
\t\t}
\t}, {
\t\tkey: "setLayout",
\t\tvalue: function setLayout(layout) {

\t\t\tthis.viewSettings.layout = layout;

\t\t\tthis.mapping = new _mapping2.default(layout.props, this.settings.direction, this.settings.axis);

\t\t\tif (this.views) {

\t\t\t\tthis.views.forEach(function (view) {
\t\t\t\t\tif (view) {
\t\t\t\t\t\tview.setLayout(layout);
\t\t\t\t\t}
\t\t\t\t});
\t\t\t}
\t\t}
\t}, {
\t\tkey: "updateAxis",
\t\tvalue: function updateAxis(axis, forceUpdate) {

\t\t\tif (!this.isPaginated) {
\t\t\t\taxis = "vertical";
\t\t\t}

\t\t\tif (!forceUpdate && axis === this.settings.axis) {
\t\t\t\treturn;
\t\t\t}

\t\t\tthis.settings.axis = axis;

\t\t\tthis.stage && this.stage.axis(axis);

\t\t\tthis.viewSettings.axis = axis;

\t\t\tif (this.mapping) {
\t\t\t\tthis.mapping = new _mapping2.default(this.layout.props, this.settings.direction, this.settings.axis);
\t\t\t}

\t\t\tif (this.layout) {
\t\t\t\tif (axis === "vertical") {
\t\t\t\t\tthis.layout.spread("none");
\t\t\t\t} else {
\t\t\t\t\tthis.layout.spread(this.layout.settings.spread);
\t\t\t\t}
\t\t\t}
\t\t}
\t}, {
\t\tkey: "updateFlow",
\t\tvalue: function updateFlow(flow) {
\t\t\tvar isPaginated = flow === "paginated" || flow === "auto";

\t\t\tthis.isPaginated = isPaginated;

\t\t\tif (flow === "scrolled-doc" || flow === "scrolled-continuous" || flow === "scrolled") {
\t\t\t\tthis.updateAxis("vertical");
\t\t\t}

\t\t\tthis.viewSettings.flow = flow;

\t\t\tif (!this.settings.overflow) {
\t\t\t\tthis.overflow = isPaginated ? "hidden" : "auto";
\t\t\t} else {
\t\t\t\tthis.overflow = this.settings.overflow;
\t\t\t}
\t\t\t// this.views.forEach(function(view){
\t\t\t// \tview.setAxis(axis);
\t\t\t// });

\t\t\tthis.updateLayout();
\t\t}
\t}, {
\t\tkey: "getContents",
\t\tvalue: function getContents() {
\t\t\tvar contents = [];
\t\t\tif (!this.views) {
\t\t\t\treturn contents;
\t\t\t}
\t\t\tthis.views.forEach(function (view) {
\t\t\t\tvar viewContents = view && view.contents;
\t\t\t\tif (viewContents) {
\t\t\t\t\tcontents.push(viewContents);
\t\t\t\t}
\t\t\t});
\t\t\treturn contents;
\t\t}
\t}, {
\t\tkey: "direction",
\t\tvalue: function direction() {
\t\t\tvar dir = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "ltr";

\t\t\tthis.settings.direction = dir;

\t\t\tthis.stage && this.stage.direction(dir);

\t\t\tthis.viewSettings.direction = dir;

\t\t\tthis.updateLayout();
\t\t}
\t}, {
\t\tkey: "isRendered",
\t\tvalue: function isRendered() {
\t\t\treturn this.rendered;
\t\t}
\t}]);

\treturn DefaultViewManager;
}();

//-- Enable binding events to Manager


(0, _eventEmitter2.default)(DefaultViewManager.prototype);

exports.default = DefaultViewManager;
module.exports = exports["default"];

/***/ }),
/* 15 */
/***/ (function(module, exports) {

/**
 * Checks if \`value\` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of \`Object\`. (e.g. arrays, functions, objects, regexes, \`new Number(0)\`, and \`new String('')\`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns \`true\` if \`value\` is an object, else \`false\`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_16__;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 From Zip.js, by Gildas Lormeau
edited down
 */

var table = {
\t"application": {
\t\t"ecmascript": ["es", "ecma"],
\t\t"javascript": "js",
\t\t"ogg": "ogx",
\t\t"pdf": "pdf",
\t\t"postscript": ["ps", "ai", "eps", "epsi", "epsf", "eps2", "eps3"],
\t\t"rdf+xml": "rdf",
\t\t"smil": ["smi", "smil"],
\t\t"xhtml+xml": ["xhtml", "xht"],
\t\t"xml": ["xml", "xsl", "xsd", "opf", "ncx"],
\t\t"zip": "zip",
\t\t"x-httpd-eruby": "rhtml",
\t\t"x-latex": "latex",
\t\t"x-maker": ["frm", "maker", "frame", "fm", "fb", "book", "fbdoc"],
\t\t"x-object": "o",
\t\t"x-shockwave-flash": ["swf", "swfl"],
\t\t"x-silverlight": "scr",
\t\t"epub+zip": "epub",
\t\t"font-tdpfr": "pfr",
\t\t"inkml+xml": ["ink", "inkml"],
\t\t"json": "json",
\t\t"jsonml+json": "jsonml",
\t\t"mathml+xml": "mathml",
\t\t"metalink+xml": "metalink",
\t\t"mp4": "mp4s",
\t\t// "oebps-package+xml" : "opf",
\t\t"omdoc+xml": "omdoc",
\t\t"oxps": "oxps",
\t\t"vnd.amazon.ebook": "azw",
\t\t"widget": "wgt",
\t\t// "x-dtbncx+xml" : "ncx",
\t\t"x-dtbook+xml": "dtb",
\t\t"x-dtbresource+xml": "res",
\t\t"x-font-bdf": "bdf",
\t\t"x-font-ghostscript": "gsf",
\t\t"x-font-linux-psf": "psf",
\t\t"x-font-otf": "otf",
\t\t"x-font-pcf": "pcf",
\t\t"x-font-snf": "snf",
\t\t"x-font-ttf": ["ttf", "ttc"],
\t\t"x-font-type1": ["pfa", "pfb", "pfm", "afm"],
\t\t"x-font-woff": "woff",
\t\t"x-mobipocket-ebook": ["prc", "mobi"],
\t\t"x-mspublisher": "pub",
\t\t"x-nzb": "nzb",
\t\t"x-tgif": "obj",
\t\t"xaml+xml": "xaml",
\t\t"xml-dtd": "dtd",
\t\t"xproc+xml": "xpl",
\t\t"xslt+xml": "xslt",
\t\t"internet-property-stream": "acx",
\t\t"x-compress": "z",
\t\t"x-compressed": "tgz",
\t\t"x-gzip": "gz"
\t},
\t"audio": {
\t\t"flac": "flac",
\t\t"midi": ["mid", "midi", "kar", "rmi"],
\t\t"mpeg": ["mpga", "mpega", "mp2", "mp3", "m4a", "mp2a", "m2a", "m3a"],
\t\t"mpegurl": "m3u",
\t\t"ogg": ["oga", "ogg", "spx"],
\t\t"x-aiff": ["aif", "aiff", "aifc"],
\t\t"x-ms-wma": "wma",
\t\t"x-wav": "wav",
\t\t"adpcm": "adp",
\t\t"mp4": "mp4a",
\t\t"webm": "weba",
\t\t"x-aac": "aac",
\t\t"x-caf": "caf",
\t\t"x-matroska": "mka",
\t\t"x-pn-realaudio-plugin": "rmp",
\t\t"xm": "xm",
\t\t"mid": ["mid", "rmi"]
\t},
\t"image": {
\t\t"gif": "gif",
\t\t"ief": "ief",
\t\t"jpeg": ["jpeg", "jpg", "jpe"],
\t\t"pcx": "pcx",
\t\t"png": "png",
\t\t"svg+xml": ["svg", "svgz"],
\t\t"tiff": ["tiff", "tif"],
\t\t"x-icon": "ico",
\t\t"bmp": "bmp",
\t\t"webp": "webp",
\t\t"x-pict": ["pic", "pct"],
\t\t"x-tga": "tga",
\t\t"cis-cod": "cod"
\t},
\t"text": {
\t\t"cache-manifest": ["manifest", "appcache"],
\t\t"css": "css",
\t\t"csv": "csv",
\t\t"html": ["html", "htm", "shtml", "stm"],
\t\t"mathml": "mml",
\t\t"plain": ["txt", "text", "brf", "conf", "def", "list", "log", "in", "bas"],
\t\t"richtext": "rtx",
\t\t"tab-separated-values": "tsv",
\t\t"x-bibtex": "bib"
\t},
\t"video": {
\t\t"mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v", "mp2", "mpa", "mpv2"],
\t\t"mp4": ["mp4", "mp4v", "mpg4"],
\t\t"quicktime": ["qt", "mov"],
\t\t"ogg": "ogv",
\t\t"vnd.mpegurl": ["mxu", "m4u"],
\t\t"x-flv": "flv",
\t\t"x-la-asf": ["lsf", "lsx"],
\t\t"x-mng": "mng",
\t\t"x-ms-asf": ["asf", "asx", "asr"],
\t\t"x-ms-wm": "wm",
\t\t"x-ms-wmv": "wmv",
\t\t"x-ms-wmx": "wmx",
\t\t"x-ms-wvx": "wvx",
\t\t"x-msvideo": "avi",
\t\t"x-sgi-movie": "movie",
\t\t"x-matroska": ["mpv", "mkv", "mk3d", "mks"],
\t\t"3gpp2": "3g2",
\t\t"h261": "h261",
\t\t"h263": "h263",
\t\t"h264": "h264",
\t\t"jpeg": "jpgv",
\t\t"jpm": ["jpm", "jpgm"],
\t\t"mj2": ["mj2", "mjp2"],
\t\t"vnd.ms-playready.media.pyv": "pyv",
\t\t"vnd.uvvu.mp4": ["uvu", "uvvu"],
\t\t"vnd.vivo": "viv",
\t\t"webm": "webm",
\t\t"x-f4v": "f4v",
\t\t"x-m4v": "m4v",
\t\t"x-ms-vob": "vob",
\t\t"x-smv": "smv"
\t}
};

var mimeTypes = function () {
\tvar type,
\t    subtype,
\t    val,
\t    index,
\t    mimeTypes = {};
\tfor (type in table) {
\t\tif (table.hasOwnProperty(type)) {
\t\t\tfor (subtype in table[type]) {
\t\t\t\tif (table[type].hasOwnProperty(subtype)) {
\t\t\t\t\tval = table[type][subtype];
\t\t\t\t\tif (typeof val == "string") {
\t\t\t\t\t\tmimeTypes[val] = type + "/" + subtype;
\t\t\t\t\t} else {
\t\t\t\t\t\tfor (index = 0; index < val.length; index++) {
\t\t\t\t\t\t\tmimeTypes[val[index]] = type + "/" + subtype;
\t\t\t\t\t\t}
\t\t\t\t\t}
\t\t\t\t}
\t\t\t}
\t\t}
\t}
\treturn mimeTypes;
}();

var defaultValue = "text/plain"; //"application/octet-stream";

function lookup(filename) {
\treturn filename && mimeTypes[filename.split(".").pop().toLowerCase()] || defaultValue;
};

module.exports = {
\t'lookup': lookup
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
\tvalue: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
// import Mapping from "./mapping";


// Default Views


// Default View Managers


var _eventEmitter = __webpack_require__(2);

var _eventEmitter2 = _interopRequireDefault(_eventEmitter);

var _core = __webpack_require__(0);

var _hook = __webpack_require__(10);

var _hook2 = _interopRequireDefault(_hook);

var _epubcfi = __webpack_require__(1);

var _epubcfi2 = _interopRequireDefault(_epubcfi);

var _queue = __webpack_require__(12);

var _queue2 = _interopRequireDefault(_queue);

var _layout = __webpack_require__(50);

var _layout2 = _interopRequireDefault(_layout);

var _themes = __webpack_require__(51);

var _themes2 = _interopRequireDefault(_themes);

var _contents = __webpack_require__(13);

var _contents2 = _interopRequireDefault(_contents);

var _annotations = __webpack_require__(52);

var _annotations2 = _interopRequireDefault(_annotations);

var _constants = __webpack_require__(3);

var _iframe = __webpack_require__(20);

var _iframe2 = _interopRequireDefault(_iframe);

var _index = __webpack_require__(14);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(24);

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Displays an Epub as a series of Views for each Section.
 * Requires Manager and View class to handle specifics of rendering
 * the section contetn.
 * @class
 * @param {Book} book
 * @param {object} [options]
 * @param {number} [options.width]
 * @param {number} [options.height]
 * @param {string} [options.ignoreClass] class for the cfi parser to ignore
 * @param {string | function | object} [options.manager='default']
 * @param {string | function} [options.view='iframe']
 * @param {string} [options.layout] layout to force
 * @param {string} [options.spread] force spread value
 * @param {number} [options.minSpreadWidth] overridden by spread: none (never) / both (always)
 * @param {string} [options.stylesheet] url of stylesheet to be injected
 * @param {string} [options.script] url of script to be injected
 */
var Rendition = function () {
\tfunction Rendition(book, options) {
\t\t_classCallCheck(this, Rendition);

\t\tthis.settings = (0, _core.extend)(this.settings || {}, {
\t\t\twidth: null,
\t\t\theight: null,
\t\t\tignoreClass: "",
\t\t\tmanager: "default",
\t\t\tview: "iframe",
\t\t\tflow: null,
\t\t\tlayout: null,
\t\t\tspread: null,
\t\t\tminSpreadWidth: 800,
\t\t\tstylesheet: null,
\t\t\tscript: null
\t\t});

\t\t(0, _core.extend)(this.settings, options);

\t\tif (_typeof(this.settings.manager) === "object") {
\t\t\tthis.manager = this.settings.manager;
\t\t}

\t\tthis.book = book;

\t\t/**
   * Adds Hook methods to the Rendition prototype
   * @member {object} hooks
   * @property {Hook} hooks.content
   * @memberof Rendition
   */
\t\tthis.hooks = {};
\t\tthis.hooks.display = new _hook2.default(this);
\t\tthis.hooks.serialize = new _hook2.default(this);
\t\tthis.hooks.content = new _hook2.default(this);
\t\tthis.hooks.unloaded = new _hook2.default(this);
\t\tthis.hooks.layout = new _hook2.default(this);
\t\tthis.hooks.render = new _hook2.default(this);
\t\tthis.hooks.show = new _hook2.default(this);

\t\tthis.hooks.content.register(this.handleLinks.bind(this));
\t\tthis.hooks.content.register(this.passEvents.bind(this));
\t\tthis.hooks.content.register(this.adjustImages.bind(this));

\t\tthis.book.spine.hooks.content.register(this.injectIdentifier.bind(this));

\t\tif (this.settings.stylesheet) {
\t\t\tthis.book.spine.hooks.content.register(this.injectStylesheet.bind(this));
\t\t}

\t\tif (this.settings.script) {
\t\t\tthis.book.spine.hooks.content.register(this.injectScript.bind(this));
\t\t}

\t\t/**
   * @member {Themes} themes
   * @memberof Rendition
   */
\t\tthis.themes = new _themes2.default(this);

\t\t/**
   * @member {Annotations} annotations
   * @memberof Rendition
   */
\t\tthis.annotations = new _annotations2.default(this);

\t\tthis.epubcfi = new _epubcfi2.default();

\t\tthis.q = new _queue2.default(this);

\t\t/**
   * A Rendered Location Range
   * @typedef location
   * @type {Object}
   * @property {object} start
   * @property {string} start.index
   * @property {string} start.href
   * @property {object} start.displayed
   * @property {EpubCFI} start.cfi
   * @property {number} start.location
   * @property {number} start.percentage
   * @property {number} start.displayed.page
   * @property {number} start.displayed.total
   * @property {object} end
   * @property {string} end.index
   * @property {string} end.href
   * @property {object} end.displayed
   * @property {EpubCFI} end.cfi
   * @property {number} end.location
   * @property {number} end.percentage
   * @property {number} end.displayed.page
   * @property {number} end.displayed.total
   * @property {boolean} atStart
   * @property {boolean} atEnd
   * @memberof Rendition
   */
\t\tthis.location = undefined;

\t\t// Hold queue until book is opened
\t\tthis.q.enqueue(this.book.opened);

\t\tthis.starting = new _core.defer();
\t\t/**
   * @member {promise} started returns after the rendition has started
   * @memberof Rendition
   */
\t\tthis.started = this.starting.promise;
\t\t// Block the queue until rendering is started
\t\tthis.q.enqueue(this.start);
\t}

\t/**
  * Set the manager function
  * @param {function} manager
  */


\t_createClass(Rendition, [{
\t\tkey: "setManager",
\t\tvalue: function setManager(manager) {
\t\t\tthis.manager = manager;
\t\t}

\t\t/**
   * Require the manager from passed string, or as a class function
   * @param  {string|object} manager [description]
   * @return {method}
   */

\t}, {
\t\tkey: "requireManager",
\t\tvalue: function requireManager(manager) {
\t\t\tvar viewManager;

\t\t\t// If manager is a string, try to load from imported managers
\t\t\tif (typeof manager === "string" && manager === "default") {
\t\t\t\tviewManager = _index2.default;
\t\t\t} else if (typeof manager === "string" && manager === "continuous") {
\t\t\t\tviewManager = _index4.default;
\t\t\t} else {
\t\t\t\t// otherwise, assume we were passed a class function
\t\t\t\tviewManager = manager;
\t\t\t}

\t\t\treturn viewManager;
\t\t}

\t\t/**
   * Require the view from passed string, or as a class function
   * @param  {string|object} view
   * @return {view}
   */

\t}, {
\t\tkey: "requireView",
\t\tvalue: function requireView(view) {
\t\t\tvar View;

\t\t\t// If view is a string, try to load from imported views,
\t\t\tif (typeof view == "string" && view === "iframe") {
\t\t\t\tView = _iframe2.default;
\t\t\t} else {
\t\t\t\t// otherwise, assume we were passed a class function
\t\t\t\tView = view;
\t\t\t}

\t\t\treturn View;
\t\t}

\t\t/**
   * Start the rendering
   * @return {Promise} rendering has started
   */

\t}, {
\t\tkey: "start",
\t\tvalue: function start() {

\t\t\tif (!this.manager) {
\t\t\t\tthis.ViewManager = this.requireManager(this.settings.manager);
\t\t\t\tthis.View = this.requireView(this.settings.view);

\t\t\t\tthis.manager = new this.ViewManager({
\t\t\t\t\tview: this.View,
\t\t\t\t\tqueue: this.q,
\t\t\t\t\trequest: this.book.load.bind(this.book),
\t\t\t\t\tsettings: this.settings
\t\t\t\t});
\t\t\t}

\t\t\tthis.direction(this.book.package.metadata.direction);

\t\t\t// Parse metadata to get layout props
\t\t\tthis.settings.globalLayoutProperties = this.determineLayoutProperties(this.book.package.metadata);

\t\t\tthis.flow(this.settings.globalLayoutProperties.flow);

\t\t\tthis.layout(this.settings.globalLayoutProperties);

\t\t\t// Listen for displayed views
\t\t\tthis.manager.on(_constants.EVENTS.MANAGERS.ADDED, this.afterDisplayed.bind(this));
\t\t\tthis.manager.on(_constants.EVENTS.MANAGERS.REMOVED, this.afterRemoved.bind(this));

\t\t\t// Listen for resizing
\t\t\tthis.manager.on(_constants.EVENTS.MANAGERS.RESIZED, this.onResized.bind(this));

\t\t\t// Listen for rotation
\t\t\tthis.manager.on(_constants.EVENTS.MANAGERS.ORIENTATION_CHANGE, this.onOrientationChange.bind(this));

\t\t\t// Listen for scroll changes
\t\t\tthis.manager.on(_constants.EVENTS.MANAGERS.SCROLLED, this.reportLocation.bind(this));

\t\t\t/**
    * Emit that rendering has started
    * @event started
    * @memberof Rendition
    */
\t\t\tthis.emit(_constants.EVENTS.RENDITION.STARTED);

\t\t\t// Start processing queue
\t\t\tthis.starting.resolve();
\t\t}

\t\t/**
   * Call to attach the container to an element in the dom
   * Container must be attached before rendering can begin
   * @param  {element} element to attach to
   * @return {Promise}
   */

\t}, {
\t\tkey: "attachTo",
\t\tvalue: function attachTo(element) {

\t\t\treturn this.q.enqueue(function () {

\t\t\t\t// Start rendering
\t\t\t\tthis.manager.render(element, {
\t\t\t\t\t"width": this.settings.width,
\t\t\t\t\t"height": this.settings.height
\t\t\t\t});

\t\t\t\t/**
     * Emit that rendering has attached to an element
     * @event attached
     * @memberof Rendition
     */
\t\t\t\tthis.emit(_constants.EVENTS.RENDITION.ATTACHED);
\t\t\t}.bind(this));
\t\t}

\t\t/**
   * Display a point in the book
   * The request will be added to the rendering Queue,
   * so it will wait until book is opened, rendering started
   * and all other rendering tasks have finished to be called.
   * @param  {string} target Url or EpubCFI
   * @return {Promise}
   */

\t}, {
\t\tkey: "display",
\t\tvalue: function display(target) {
\t\t\tif (this.displaying) {
\t\t\t\tthis.displaying.resolve();
\t\t\t}
\t\t\treturn this.q.enqueue(this._display, target);
\t\t}

\t\t/**
   * Tells the manager what to display immediately
   * @private
   * @param  {string} target Url or EpubCFI
   * @return {Promise}
   */

\t}, {
\t\tkey: "_display",
\t\tvalue: function _display(target) {
\t\t\tvar _this = this;

\t\t\tif (!this.book) {
\t\t\t\treturn;
\t\t\t}
\t\t\tvar isCfiString = this.epubcfi.isCfiString(target);
\t\t\tvar displaying = new _core.defer();
\t\t\tvar displayed = displaying.promise;
\t\t\tvar section;
\t\t\tvar moveTo;

\t\t\tthis.displaying = displaying;

\t\t\t// Check if this is a book percentage
\t\t\tif (this.book.locations.length() && ((0, _core.isFloat)(target) || target === "1.0") // Handle 1.0
\t\t\t) {
\t\t\t\t\ttarget = this.book.locations.cfiFromPercentage(parseFloat(target));
\t\t\t\t}

\t\t\tsection = this.book.spine.get(target);

\t\t\tif (!section) {
\t\t\t\tdisplaying.reject(new Error("No Section Found"));
\t\t\t\treturn displayed;
\t\t\t}

\t\t\tthis.manager.display(section, target).then(function () {
\t\t\t\tdisplaying.resolve(section);
\t\t\t\t_this.displaying = undefined;

\t\t\t\t/**
     * Emit that a section has been displayed
     * @event displayed
     * @param {Section} section
     * @memberof Rendition
     */
\t\t\t\t_this.emit(_constants.EVENTS.RENDITION.DISPLAYED, section);
\t\t\t\t_this.reportLocation();
\t\t\t}, function (err) {
\t\t\t\t/**
     * Emit that has been an error displaying
     * @event displayError
     * @param {Section} section
     * @memberof Rendition
     */
\t\t\t\t_this.emit(_constants.EVENTS.RENDITION.DISPLAY_ERROR, err);
\t\t\t});

\t\t\treturn displayed;
\t\t}

\t\t/*
  render(view, show) {
  \t\t// view.onLayout = this.layout.format.bind(this.layout);
  \tview.create();
  \t\t// Fit to size of the container, apply padding
  \tthis.manager.resizeView(view);
  \t\t// Render Chain
  \treturn view.section.render(this.book.request)
  \t\t.then(function(contents){
  \t\t\treturn view.load(contents);
  \t\t}.bind(this))
  \t\t.then(function(doc){
  \t\t\treturn this.hooks.content.trigger(view, this);
  \t\t}.bind(this))
  \t\t.then(function(){
  \t\t\tthis.layout.format(view.contents);
  \t\t\treturn this.hooks.layout.trigger(view, this);
  \t\t}.bind(this))
  \t\t.then(function(){
  \t\t\treturn view.display();
  \t\t}.bind(this))
  \t\t.then(function(){
  \t\t\treturn this.hooks.render.trigger(view, this);
  \t\t}.bind(this))
  \t\t.then(function(){
  \t\t\tif(show !== false) {
  \t\t\t\tthis.q.enqueue(function(view){
  \t\t\t\t\tview.show();
  \t\t\t\t}, view);
  \t\t\t}
  \t\t\t// this.map = new Map(view, this.layout);
  \t\t\tthis.hooks.show.trigger(view, this);
  \t\t\tthis.trigger("rendered", view.section);
  \t\t\t}.bind(this))
  \t\t.catch(function(e){
  \t\t\tthis.trigger("loaderror", e);
  \t\t}.bind(this));
  \t}
  */

\t\t/**
   * Report what section has been displayed
   * @private
   * @param  {*} view
   */

\t}, {
\t\tkey: "afterDisplayed",
\t\tvalue: function afterDisplayed(view) {
\t\t\tvar _this2 = this;

\t\t\tview.on(_constants.EVENTS.VIEWS.MARK_CLICKED, function (cfiRange, data) {
\t\t\t\treturn _this2.triggerMarkEvent(cfiRange, data, view);
\t\t\t});

\t\t\tthis.hooks.render.trigger(view, this).then(function () {
\t\t\t\tif (view.contents) {
\t\t\t\t\t_this2.hooks.content.trigger(view.contents, _this2).then(function () {
\t\t\t\t\t\t/**
       * Emit that a section has been rendered
       * @event rendered
       * @param {Section} section
       * @param {View} view
       * @memberof Rendition
       */
\t\t\t\t\t\t_this2.emit(_constants.EVENTS.RENDITION.RENDERED, view.section, view);
\t\t\t\t\t});
\t\t\t\t} else {
\t\t\t\t\t_this2.emit(_constants.EVENTS.RENDITION.RENDERED, view.section, view);
\t\t\t\t}
\t\t\t});
\t\t}

\t\t/**
   * Report what has been removed
   * @private
   * @param  {*} view
   */

\t}, {
\t\tkey: "afterRemoved",
\t\tvalue: function afterRemoved(view) {
\t\t\tvar _this3 = this;

\t\t\tthis.hooks.unloaded.trigger(view, this).then(function () {
\t\t\t\t/**
     * Emit that a section has been removed
     * @event removed
     * @param {Section} section
     * @param {View} view
     * @memberof Rendition
     */
\t\t\t\t_this3.emit(_constants.EVENTS.RENDITION.REMOVED, view.section, view);
\t\t\t});
\t\t}

\t\t/**
   * Report resize events and display the last seen location
   * @private
   */

\t}, {
\t\tkey: "onResized",
\t\tvalue: function onResized(size) {

\t\t\t/**
    * Emit that the rendition has been resized
    * @event resized
    * @param {number} width
    * @param {height} height
    * @memberof Rendition
    */
\t\t\tthis.emit(_constants.EVENTS.RENDITION.RESIZED, {
\t\t\t\twidth: size.width,
\t\t\t\theight: size.height
\t\t\t});

\t\t\tif (this.location && this.location.start) {
\t\t\t\tthis.display(this.location.start.cfi);
\t\t\t}
\t\t}

\t\t/**
   * Report orientation events and display the last seen location
   * @private
   */

\t}, {
\t\tkey: "onOrientationChange",
\t\tvalue: function onOrientationChange(orientation) {
\t\t\t/**
    * Emit that the rendition has been rotated
    * @event orientationchange
    * @param {string} orientation
    * @memberof Rendition
    */
\t\t\tthis.emit(_constants.EVENTS.RENDITION.ORIENTATION_CHANGE, orientation);
\t\t}

\t\t/**
   * Move the Rendition to a specific offset
   * Usually you would be better off calling display()
   * @param {object} offset
   */

\t}, {
\t\tkey: "moveTo",
\t\tvalue: function moveTo(offset) {
\t\t\tthis.manager.moveTo(offset);
\t\t}

\t\t/**
   * Trigger a resize of the views
   * @param {number} [width]
   * @param {number} [height]
   */

\t}, {
\t\tkey: "resize",
\t\tvalue: function resize(width, height) {
\t\t\tif (width) {
\t\t\t\tthis.settings.width = width;
\t\t\t}
\t\t\tif (height) {
\t\t\t\tthis.settings.height = height;
\t\t\t}
\t\t\tthis.manager.resize(width, height);
\t\t}

\t\t/**
   * Clear all rendered views
   */

\t}, {
\t\tkey: "clear",
\t\tvalue: function clear() {
\t\t\tthis.manager.clear();
\t\t}

\t\t/**
   * Go to the next "page" in the rendition
   * @return {Promise}
   */

\t}, {
\t\tkey: "next",
\t\tvalue: function next() {
\t\t\treturn this.q.enqueue(this.manager.next.bind(this.manager)).then(this.reportLocation.bind(this));
\t\t}

\t\t/**
   * Go to the previous "page" in the rendition
   * @return {Promise}
   */

\t}, {
\t\tkey: "prev",
\t\tvalue: function prev() {
\t\t\treturn this.q.enqueue(this.manager.prev.bind(this.manager)).then(this.reportLocation.bind(this));
\t\t}

\t\t//-- http://www.idpf.org/epub/301/spec/epub-publications.html#meta-properties-rendering
\t\t/**
   * Determine the Layout properties from metadata and settings
   * @private
   * @param  {object} metadata
   * @return {object} properties
   */

\t}, {
\t\tkey: "determineLayoutProperties",
\t\tvalue: function determineLayoutProperties(metadata) {
\t\t\tvar properties;
\t\t\tvar layout = this.settings.layout || metadata.layout || "reflowable";
\t\t\tvar spread = this.settings.spread || metadata.spread || "auto";
\t\t\tvar orientation = this.settings.orientation || metadata.orientation || "auto";
\t\t\tvar flow = this.settings.flow || metadata.flow || "auto";
\t\t\tvar viewport = metadata.viewport || "";
\t\t\tvar minSpreadWidth = this.settings.minSpreadWidth || metadata.minSpreadWidth || 800;
\t\t\tvar direction = this.settings.direction || metadata.direction || "ltr";

\t\t\tif ((this.settings.width === 0 || this.settings.width > 0) && (this.settings.height === 0 || this.settings.height > 0)) {
\t\t\t\t// viewport = "width="+this.settings.width+", height="+this.settings.height+"";
\t\t\t}

\t\t\tproperties = {
\t\t\t\tlayout: layout,
\t\t\t\tspread: spread,
\t\t\t\torientation: orientation,
\t\t\t\tflow: flow,
\t\t\t\tviewport: viewport,
\t\t\t\tminSpreadWidth: minSpreadWidth,
\t\t\t\tdirection: direction
\t\t\t};

\t\t\treturn properties;
\t\t}

\t\t/**
   * Adjust the flow of the rendition to paginated or scrolled
   * (scrolled-continuous vs scrolled-doc are handled by different view managers)
   * @param  {string} flow
   */

\t}, {
\t\tkey: "flow",
\t\tvalue: function flow(_flow2) {
\t\t\tvar _flow = _flow2;
\t\t\tif (_flow2 === "scrolled" || _flow2 === "scrolled-doc" || _flow2 === "scrolled-continuous") {
\t\t\t\t_flow = "scrolled";
\t\t\t}

\t\t\tif (_flow2 === "auto" || _flow2 === "paginated") {
\t\t\t\t_flow = "paginated";
\t\t\t}

\t\t\tthis.settings.flow = _flow2;

\t\t\tif (this._layout) {
\t\t\t\tthis._layout.flow(_flow);
\t\t\t}

\t\t\tif (this.manager && this._layout) {
\t\t\t\tthis.manager.applyLayout(this._layout);
\t\t\t}

\t\t\tif (this.manager) {
\t\t\t\tthis.manager.updateFlow(_flow);
\t\t\t}

\t\t\tif (this.manager && this.manager.isRendered() && this.location) {
\t\t\t\tthis.manager.clear();
\t\t\t\tthis.display(this.location.start.cfi);
\t\t\t}
\t\t}

\t\t/**
   * Adjust the layout of the rendition to reflowable or pre-paginated
   * @param  {object} settings
   */

\t}, {
\t\tkey: "layout",
\t\tvalue: function layout(settings) {
\t\t\tvar _this4 = this;

\t\t\tif (settings) {
\t\t\t\tthis._layout = new _layout2.default(settings);
\t\t\t\tthis._layout.spread(settings.spread, this.settings.minSpreadWidth);

\t\t\t\t// this.mapping = new Mapping(this._layout.props);

\t\t\t\tthis._layout.on(_constants.EVENTS.LAYOUT.UPDATED, function (props, changed) {
\t\t\t\t\t_this4.emit(_constants.EVENTS.RENDITION.LAYOUT, props, changed);
\t\t\t\t});
\t\t\t}

\t\t\tif (this.manager && this._layout) {
\t\t\t\tthis.manager.applyLayout(this._layout);
\t\t\t}

\t\t\treturn this._layout;
\t\t}

\t\t/**
   * Adjust if the rendition uses spreads
   * @param  {string} spread none | auto (TODO: implement landscape, portrait, both)
   * @param  {int} min min width to use spreads at
   */

\t}, {
\t\tkey: "spread",
\t\tvalue: function spread(_spread, min) {

\t\t\tthis._layout.spread(_spread, min);

\t\t\tif (this.manager.isRendered()) {
\t\t\t\tthis.manager.updateLayout();
\t\t\t}
\t\t}

\t\t/**
   * Adjust the direction of the rendition
   * @param  {string} dir
   */

\t}, {
\t\tkey: "direction",
\t\tvalue: function direction(dir) {

\t\t\tthis.settings.direction = dir || "ltr";

\t\t\tif (this.manager) {
\t\t\t\tthis.manager.direction(this.settings.direction);
\t\t\t}

\t\t\tif (this.manager && this.manager.isRendered() && this.location) {
\t\t\t\tthis.manager.clear();
\t\t\t\tthis.display(this.location.start.cfi);
\t\t\t}
\t\t}

\t\t/**
   * Report the current location
   * @fires relocated
   * @fires locationChanged
   */

\t}, {
\t\tkey: "reportLocation",
\t\tvalue: function reportLocation() {
\t\t\treturn this.q.enqueue(function reportedLocation() {
\t\t\t\trequestAnimationFrame(function reportedLocationAfterRAF() {
\t\t\t\t\tvar location = this.manager.currentLocation();
\t\t\t\t\tif (location && location.then && typeof location.then === "function") {
\t\t\t\t\t\tlocation.then(function (result) {
\t\t\t\t\t\t\tvar located = this.located(result);

\t\t\t\t\t\t\tif (!located || !located.start || !located.end) {
\t\t\t\t\t\t\t\treturn;
\t\t\t\t\t\t\t}

\t\t\t\t\t\t\tthis.location = located;

\t\t\t\t\t\t\tthis.emit(_constants.EVENTS.RENDITION.LOCATION_CHANGED, {
\t\t\t\t\t\t\t\tindex: this.location.start.index,
\t\t\t\t\t\t\t\thref: this.location.start.href,
\t\t\t\t\t\t\t\tstart: this.location.start.cfi,
\t\t\t\t\t\t\t\tend: this.location.end.cfi,
\t\t\t\t\t\t\t\tpercentage: this.location.start.percentage
\t\t\t\t\t\t\t});

\t\t\t\t\t\t\tthis.emit(_constants.EVENTS.RENDITION.RELOCATED, this.location);
\t\t\t\t\t\t}.bind(this));
\t\t\t\t\t} else if (location) {
\t\t\t\t\t\tvar located = this.located(location);

\t\t\t\t\t\tif (!located || !located.start || !located.end) {
\t\t\t\t\t\t\treturn;
\t\t\t\t\t\t}

\t\t\t\t\t\tthis.location = located;

\t\t\t\t\t\t/**
       * @event locationChanged
       * @deprecated
       * @type {object}
       * @property {number} index
       * @property {string} href
       * @property {EpubCFI} start
       * @property {EpubCFI} end
       * @property {number} percentage
       * @memberof Rendition
       */
\t\t\t\t\t\tthis.emit(_constants.EVENTS.RENDITION.LOCATION_CHANGED, {
\t\t\t\t\t\t\tindex: this.location.start.index,
\t\t\t\t\t\t\thref: this.location.start.href,
\t\t\t\t\t\t\tstart: this.location.start.cfi,
\t\t\t\t\t\t\tend: this.location.end.cfi,
\t\t\t\t\t\t\tpercentage: this.location.start.percentage
\t\t\t\t\t\t});

\t\t\t\t\t\t/**
       * @event relocated
       * @type {displayedLocation}
       * @memberof Rendition
       */
\t\t\t\t\t\tthis.emit(_constants.EVENTS.RENDITION.RELOCATED, this.location);
\t\t\t\t\t}
\t\t\t\t}.bind(this));
\t\t\t}.bind(this));
\t\t}

\t\t/**
   * Get the Current Location object
   * @return {displayedLocation | promise} location (may be a promise)
   */

\t}, {
\t\tkey: "currentLocation",
\t\tvalue: function currentLocation() {
\t\t\tvar location = this.manager.currentLocation();
\t\t\tif (location && location.then && typeof location.then === "function") {
\t\t\t\tlocation.then(function (result) {
\t\t\t\t\tvar located = this.located(result);
\t\t\t\t\treturn located;
\t\t\t\t}.bind(this));
\t\t\t} else if (location) {
\t\t\t\tvar located = this.located(location);
\t\t\t\treturn located;
\t\t\t}
\t\t}

\t\t/**
   * Creates a Rendition#locationRange from location
   * passed by the Manager
   * @returns {displayedLocation}
   * @private
   */

\t}, {
\t\tkey: "located",
\t\tvalue: function located(location) {
\t\t\tif (!location.length) {
\t\t\t\treturn {};
\t\t\t}
\t\t\tvar start = location[0];
\t\t\tvar end = location[location.length - 1];

\t\t\tvar located = {
\t\t\t\tstart: {
\t\t\t\t\tindex: start.index,
\t\t\t\t\thref: start.href,
\t\t\t\t\tcfi: start.mapping.start,
\t\t\t\t\tdisplayed: {
\t\t\t\t\t\tpage: start.pages[0] || 1,
\t\t\t\t\t\ttotal: start.totalPages
\t\t\t\t\t}
\t\t\t\t},
\t\t\t\tend: {
\t\t\t\t\tindex: end.index,
\t\t\t\t\thref: end.href,
\t\t\t\t\tcfi: end.mapping.end,
\t\t\t\t\tdisplayed: {
\t\t\t\t\t\tpage: end.pages[end.pages.length - 1] || 1,
\t\t\t\t\t\ttotal: end.totalPages
\t\t\t\t\t}
\t\t\t\t}
\t\t\t};

\t\t\tvar locationStart = this.book.locations.locationFromCfi(start.mapping.start);
\t\t\tvar locationEnd = this.book.locations.locationFromCfi(end.mapping.end);

\t\t\tif (locationStart != null) {
\t\t\t\tlocated.start.location = locationStart;
\t\t\t\tlocated.start.percentage = this.book.locations.percentageFromLocation(locationStart);
\t\t\t}
\t\t\tif (locationEnd != null) {
\t\t\t\tlocated.end.location = locationEnd;
\t\t\t\tlocated.end.percentage = this.book.locations.percentageFromLocation(locationEnd);
\t\t\t}

\t\t\tvar pageStart = this.book.pageList.pageFromCfi(start.mapping.start);
\t\t\tvar pageEnd = this.book.pageList.pageFromCfi(end.mapping.end);

\t\t\tif (pageStart != -1) {
\t\t\t\tlocated.start.page = pageStart;
\t\t\t}
\t\t\tif (pageEnd != -1) {
\t\t\t\tlocated.end.page = pageEnd;
\t\t\t}

\t\t\tif (end.index === this.book.spine.last().index && located.end.displayed.page >= located.end.displayed.total) {
\t\t\t\tlocated.atEnd = true;
\t\t\t}

\t\t\tif (start.index === this.book.spine.first().index && located.start.displayed.page === 1) {
\t\t\t\tlocated.atStart = true;
\t\t\t}

\t\t\treturn located;
\t\t}

\t\t/**
   * Remove and Clean Up the Rendition
   */

\t}, {
\t\tkey: "destroy",
\t\tvalue: function destroy() {
\t\t\t// Clear the queue
\t\t\t// this.q.clear();
\t\t\t// this.q = undefined;

\t\t\tthis.manager && this.manager.destroy();

\t\t\tthis.book = undefined;

\t\t\t// this.views = null;

\t\t\t// this.hooks.display.clear();
\t\t\t// this.hooks.serialize.clear();
\t\t\t// this.hooks.content.clear();
\t\t\t// this.hooks.layout.clear();
\t\t\t// this.hooks.render.clear();
\t\t\t// this.hooks.show.clear();
\t\t\t// this.hooks = {};

\t\t\t// this.themes.destroy();
\t\t\t// this.themes = undefined;

\t\t\t// this.epubcfi = undefined;

\t\t\t// this.starting = undefined;
\t\t\t// this.started = undefined;

\t\t}

\t\t/**
   * Pass the events from a view's Contents
   * @private
   * @param  {View} view
   */

\t}, {
\t\tkey: "passEvents",
\t\tvalue: function passEvents(contents) {
\t\t\tvar _this5 = this;

\t\t\tvar listenedEvents = _contents2.default.listenedEvents;

\t\t\tlistenedEvents.forEach(function (e) {
\t\t\t\tcontents.on(e, function (ev) {
\t\t\t\t\treturn _this5.triggerViewEvent(ev, contents);
\t\t\t\t});
\t\t\t});

\t\t\tcontents.on(_constants.EVENTS.CONTENTS.SELECTED, function (e) {
\t\t\t\treturn _this5.triggerSelectedEvent(e, contents);
\t\t\t});
\t\t}

\t\t/**
   * Emit events passed by a view
   * @private
   * @param  {event} e
   */

\t}, {
\t\tkey: "triggerViewEvent",
\t\tvalue: function triggerViewEvent(e, contents) {
\t\t\tthis.emit(e.type, e, contents);
\t\t}

\t\t/**
   * Emit a selection event's CFI Range passed from a a view
   * @private
   * @param  {EpubCFI} cfirange
   */

\t}, {
\t\tkey: "triggerSelectedEvent",
\t\tvalue: function triggerSelectedEvent(cfirange, contents) {
\t\t\t/**
    * Emit that a text selection has occured
    * @event selected
    * @param {EpubCFI} cfirange
    * @param {Contents} contents
    * @memberof Rendition
    */
\t\t\tthis.emit(_constants.EVENTS.RENDITION.SELECTED, cfirange, contents);
\t\t}

\t\t/**
   * Emit a markClicked event with the cfiRange and data from a mark
   * @private
   * @param  {EpubCFI} cfirange
   */

\t}, {
\t\tkey: "triggerMarkEvent",
\t\tvalue: function triggerMarkEvent(cfiRange, data, contents) {
\t\t\t/**
    * Emit that a mark was clicked
    * @event markClicked
    * @param {EpubCFI} cfirange
    * @param {object} data
    * @param {Contents} contents
    * @memberof Rendition
    */
\t\t\tthis.emit(_constants.EVENTS.RENDITION.MARK_CLICKED, cfiRange, data, contents);
\t\t}

\t\t/**
   * Get a Range from a Visible CFI
   * @param  {string} cfi EpubCfi String
   * @param  {string} ignoreClass
   * @return {range}
   */

\t}, {
\t\tkey: "getRange",
\t\tvalue: function getRange(cfi, ignoreClass) {
\t\t\tvar _cfi = new _epubcfi2.default(cfi);
\t\t\tvar found = this.manager.visible().filter(function (view) {
\t\t\t\tif (_cfi.spinePos === view.index) return true;
\t\t\t});

\t\t\t// Should only every return 1 item
\t\t\tif (found.length) {
\t\t\t\treturn found[0].contents.range(_cfi, ignoreClass);
\t\t\t}
\t\t}

\t\t/**
   * Hook to adjust images to fit in columns
   * @param  {Contents} contents
   * @private
   */

\t}, {
\t\tkey: "adjustImages",
\t\tvalue: function adjustImages(contents) {

\t\t\tif (this._layout.name === "pre-paginated") {
\t\t\t\treturn new Promise(function (resolve) {
\t\t\t\t\tresolve();
\t\t\t\t});
\t\t\t}

\t\t\tcontents.addStylesheetRules({
\t\t\t\t"img": {
\t\t\t\t\t"max-width": (this._layout.columnWidth ? this._layout.columnWidth + "px" : "100%") + "!important",
\t\t\t\t\t"max-height": (this._layout.height ? this._layout.height * 0.6 + "px" : "60%") + "!important",
\t\t\t\t\t"object-fit": "contain",
\t\t\t\t\t"page-break-inside": "avoid"
\t\t\t\t},
\t\t\t\t"svg": {
\t\t\t\t\t"max-width": (this._layout.columnWidth ? this._layout.columnWidth + "px" : "100%") + "!important",
\t\t\t\t\t"max-height": (this._layout.height ? this._layout.height * 0.6 + "px" : "60%") + "!important",
\t\t\t\t\t"page-break-inside": "avoid"
\t\t\t\t}
\t\t\t});

\t\t\treturn new Promise(function (resolve, reject) {
\t\t\t\t// Wait to apply
\t\t\t\tsetTimeout(function () {
\t\t\t\t\tresolve();
\t\t\t\t}, 1);
\t\t\t});
\t\t}

\t\t/**
   * Get the Contents object of each rendered view
   * @returns {Contents[]}
   */

\t}, {
\t\tkey: "getContents",
\t\tvalue: function getContents() {
\t\t\treturn this.manager ? this.manager.getContents() : [];
\t\t}

\t\t/**
   * Get the views member from the manager
   * @returns {Views}
   */

\t}, {
\t\tkey: "views",
\t\tvalue: function views() {
\t\t\tvar views = this.manager ? this.manager.views : undefined;
\t\t\treturn views || [];
\t\t}

\t\t/**
   * Hook to handle link clicks in rendered content
   * @param  {Contents} contents
   * @private
   */

\t}, {
\t\tkey: "handleLinks",
\t\tvalue: function handleLinks(contents) {
\t\t\tvar _this6 = this;

\t\t\tif (contents) {
\t\t\t\tcontents.on(_constants.EVENTS.CONTENTS.LINK_CLICKED, function (href) {
\t\t\t\t\tvar relative = _this6.book.path.relative(href);
\t\t\t\t\t_this6.display(relative);
\t\t\t\t});
\t\t\t}
\t\t}

\t\t/**
   * Hook to handle injecting stylesheet before
   * a Section is serialized
   * @param  {document} doc
   * @param  {Section} section
   * @private
   */

\t}, {
\t\tkey: "injectStylesheet",
\t\tvalue: function injectStylesheet(doc, section) {
\t\t\tvar style = doc.createElement("link");
\t\t\tstyle.setAttribute("type", "text/css");
\t\t\tstyle.setAttribute("rel", "stylesheet");
\t\t\tstyle.setAttribute("href", this.settings.stylesheet);
\t\t\tdoc.getElementsByTagName("head")[0].appendChild(style);
\t\t}

\t\t/**
   * Hook to handle injecting scripts before
   * a Section is serialized
   * @param  {document} doc
   * @param  {Section} section
   * @private
   */

\t}, {
\t\tkey: "injectScript",
\t\tvalue: function injectScript(doc, section) {
\t\t\tvar script = doc.createElement("script");
\t\t\tscript.setAttribute("type", "text/javascript");
\t\t\tscript.setAttribute("src", this.settings.script);
\t\t\tscript.textContent = " "; // Needed to prevent self closing tag
\t\t\tdoc.getElementsByTagName("head")[0].appendChild(script);
\t\t}

\t\t/**
   * Hook to handle the document identifier before
   * a Section is serialized
   * @param  {document} doc
   * @param  {Section} section
   * @private
   */

\t}, {
\t\tkey: "injectIdentifier",
\t\tvalue: function injectIdentifier(doc, section) {
\t\t\tvar ident = this.book.package.metadata.identifier;
\t\t\tvar meta = doc.createElement("meta");
\t\t\tmeta.setAttribute("name", "dc.relation.ispartof");
\t\t\tif (ident) {
\t\t\t\tmeta.setAttribute("content", ident);
\t\t\t}
\t\t\tdoc.getElementsByTagName("head")[0].appendChild(meta);
\t\t}
\t}]);

\treturn Rendition;
}();

//-- Enable binding events to Renderer


(0, _eventEmitter2.default)(Rendition.prototype);

exports.default = Rendition;
module.exports = exports["default"];

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
\tvalue: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _epubcfi = __webpack_require__(1);

var _epubcfi2 = _interopRequireDefault(_epubcfi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Map text locations to CFI ranges
 * @class
 */
var Mapping = function () {
\tfunction Mapping(layout, direction, axis, dev) {
\t\t_classCallCheck(this, Mapping);

\t\tthis.layout = layout;
\t\tthis.horizontal = axis === "horizontal" ? true : false;
\t\tthis.direction = direction || "ltr";
\t\tthis._dev = dev;
\t}

\t/**
  * Find CFI pairs for entire section at once
  */


\t_createClass(Mapping, [{
\t\tkey: "section",
\t\tvalue: function section(view) {
\t\t\tvar ranges = this.findRanges(view);
\t\t\tvar map = this.rangeListToCfiList(view.section.cfiBase, ranges);

\t\t\treturn map;
\t\t}

\t\t/**
   * Find CFI pairs for a page
   */

\t}, {
\t\tkey: "page",
\t\tvalue: function page(contents, cfiBase, start, end) {
\t\t\tvar root = contents && contents.document ? contents.document.body : false;
\t\t\tvar result;

\t\t\tif (!root) {
\t\t\t\treturn;
\t\t\t}

\t\t\tresult = this.rangePairToCfiPair(cfiBase, {
\t\t\t\tstart: this.findStart(root, start, end),
\t\t\t\tend: this.findEnd(root, start, end)
\t\t\t});

\t\t\tif (this._dev === true) {
\t\t\t\tvar doc = contents.document;
\t\t\t\tvar startRange = new _epubcfi2.default(result.start).toRange(doc);
\t\t\t\tvar endRange = new _epubcfi2.default(result.end).toRange(doc);

\t\t\t\tvar selection = doc.defaultView.getSelection();
\t\t\t\tvar r = doc.createRange();
\t\t\t\tselection.removeAllRanges();
\t\t\t\tr.setStart(startRange.startContainer, startRange.startOffset);
\t\t\t\tr.setEnd(endRange.endContainer, endRange.endOffset);
\t\t\t\tselection.addRange(r);
\t\t\t}

\t\t\treturn result;
\t\t}
\t}, {
\t\tkey: "walk",
\t\tvalue: function walk(root, func) {
\t\t\t// IE11 has strange issue, if root is text node IE throws exception on
\t\t\t// calling treeWalker.nextNode(), saying
\t\t\t// Unexpected call to method or property access instead of returing null value
\t\t\tif (root && root.nodeType === Node.TEXT_NODE) {
\t\t\t\treturn;
\t\t\t}
\t\t\t// safeFilter is required so that it can work in IE as filter is a function for IE
\t\t\t// and for other browser filter is an object.
\t\t\tvar filter = {
\t\t\t\tacceptNode: function acceptNode(node) {
\t\t\t\t\tif (node.data.trim().length > 0) {
\t\t\t\t\t\treturn NodeFilter.FILTER_ACCEPT;
\t\t\t\t\t} else {
\t\t\t\t\t\treturn NodeFilter.FILTER_REJECT;
\t\t\t\t\t}
\t\t\t\t}
\t\t\t};
\t\t\tvar safeFilter = filter.acceptNode;
\t\t\tsafeFilter.acceptNode = filter.acceptNode;

\t\t\tvar treeWalker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, safeFilter, false);
\t\t\tvar node;
\t\t\tvar result;
\t\t\twhile (node = treeWalker.nextNode()) {
\t\t\t\tresult = func(node);
\t\t\t\tif (result) break;
\t\t\t}

\t\t\treturn result;
\t\t}
\t}, {
\t\tkey: "findRanges",
\t\tvalue: function findRanges(view) {
\t\t\tvar columns = [];
\t\t\tvar scrollWidth = view.contents.scrollWidth();
\t\t\tvar spreads = Math.ceil(scrollWidth / this.layout.spreadWidth);
\t\t\tvar count = spreads * this.layout.divisor;
\t\t\tvar columnWidth = this.layout.columnWidth;
\t\t\tvar gap = this.layout.gap;
\t\t\tvar start, end;

\t\t\tfor (var i = 0; i < count.pages; i++) {
\t\t\t\tstart = (columnWidth + gap) * i;
\t\t\t\tend = columnWidth * (i + 1) + gap * i;
\t\t\t\tcolumns.push({
\t\t\t\t\tstart: this.findStart(view.document.body, start, end),
\t\t\t\t\tend: this.findEnd(view.document.body, start, end)
\t\t\t\t});
\t\t\t}

\t\t\treturn columns;
\t\t}
\t}, {
\t\tkey: "findStart",
\t\tvalue: function findStart(root, start, end) {
\t\t\tvar _this = this;

\t\t\tvar stack = [root];
\t\t\tvar $el;
\t\t\tvar found;
\t\t\tvar $prev = root;

\t\t\twhile (stack.length) {

\t\t\t\t$el = stack.shift();

\t\t\t\tfound = this.walk($el, function (node) {
\t\t\t\t\tvar left, right, top, bottom;
\t\t\t\t\tvar elPos;
\t\t\t\t\tvar elRange;

\t\t\t\t\telPos = _this.getBounds(node);

\t\t\t\t\tif (_this.horizontal && _this.direction === "ltr") {

\t\t\t\t\t\tleft = _this.horizontal ? elPos.left : elPos.top;
\t\t\t\t\t\tright = _this.horizontal ? elPos.right : elPos.bottom;

\t\t\t\t\t\tif (left >= start && left <= end) {
\t\t\t\t\t\t\treturn node;
\t\t\t\t\t\t} else if (right > start) {
\t\t\t\t\t\t\treturn node;
\t\t\t\t\t\t} else {
\t\t\t\t\t\t\t$prev = node;
\t\t\t\t\t\t\tstack.push(node);
\t\t\t\t\t\t}
\t\t\t\t\t} else if (_this.horizontal && _this.direction === "rtl") {

\t\t\t\t\t\tleft = elPos.left;
\t\t\t\t\t\tright = elPos.right;

\t\t\t\t\t\tif (right <= end && right >= start) {
\t\t\t\t\t\t\treturn node;
\t\t\t\t\t\t} else if (left < end) {
\t\t\t\t\t\t\treturn node;
\t\t\t\t\t\t} else {
\t\t\t\t\t\t\t$prev = node;
\t\t\t\t\t\t\tstack.push(node);
\t\t\t\t\t\t}
\t\t\t\t\t} else {

\t\t\t\t\t\ttop = elPos.top;
\t\t\t\t\t\tbottom = elPos.bottom;

\t\t\t\t\t\tif (top >= start && top <= end) {
\t\t\t\t\t\t\treturn node;
\t\t\t\t\t\t} else if (bottom > start) {
\t\t\t\t\t\t\treturn node;
\t\t\t\t\t\t} else {
\t\t\t\t\t\t\t$prev = node;
\t\t\t\t\t\t\tstack.push(node);
\t\t\t\t\t\t}
\t\t\t\t\t}
\t\t\t\t});

\t\t\t\tif (found) {
\t\t\t\t\treturn this.findTextStartRange(found, start, end);
\t\t\t\t}
\t\t\t}

\t\t\t// Return last element
\t\t\treturn this.findTextStartRange($prev, start, end);
\t\t}
\t}, {
\t\tkey: "findEnd",
\t\tvalue: function findEnd(root, start, end) {
\t\t\tvar _this2 = this;

\t\t\tvar stack = [root];
\t\t\tvar $el;
\t\t\tvar $prev = root;
\t\t\tvar found;

\t\t\twhile (stack.length) {

\t\t\t\t$el = stack.shift();

\t\t\t\tfound = this.walk($el, function (node) {

\t\t\t\t\tvar left, right, top, bottom;
\t\t\t\t\tvar elPos;
\t\t\t\t\tvar elRange;

\t\t\t\t\telPos = _this2.getBounds(node);

\t\t\t\t\tif (_this2.horizontal && _this2.direction === "ltr") {

\t\t\t\t\t\tleft = Math.round(elPos.left);
\t\t\t\t\t\tright = Math.round(elPos.right);

\t\t\t\t\t\tif (left > end && $prev) {
\t\t\t\t\t\t\treturn $prev;
\t\t\t\t\t\t} else if (right > end) {
\t\t\t\t\t\t\treturn node;
\t\t\t\t\t\t} else {
\t\t\t\t\t\t\t$prev = node;
\t\t\t\t\t\t\tstack.push(node);
\t\t\t\t\t\t}
\t\t\t\t\t} else if (_this2.horizontal && _this2.direction === "rtl") {

\t\t\t\t\t\tleft = Math.round(_this2.horizontal ? elPos.left : elPos.top);
\t\t\t\t\t\tright = Math.round(_this2.horizontal ? elPos.right : elPos.bottom);

\t\t\t\t\t\tif (right < start && $prev) {
\t\t\t\t\t\t\treturn $prev;
\t\t\t\t\t\t} else if (left < start) {
\t\t\t\t\t\t\treturn node;
\t\t\t\t\t\t} else {
\t\t\t\t\t\t\t$prev = node;
\t\t\t\t\t\t\tstack.push(node);
\t\t\t\t\t\t}
\t\t\t\t\t} else {

\t\t\t\t\t\ttop = Math.round(elPos.top);
\t\t\t\t\t\tbottom = Math.round(elPos.bottom);

\t\t\t\t\t\tif (top > end && $prev) {
\t\t\t\t\t\t\treturn $prev;
\t\t\t\t\t\t} else if (bottom > end) {
\t\t\t\t\t\t\treturn node;
\t\t\t\t\t\t} else {
\t\t\t\t\t\t\t$prev = node;
\t\t\t\t\t\t\tstack.push(node);
\t\t\t\t\t\t}
\t\t\t\t\t}
\t\t\t\t});

\t\t\t\tif (found) {
\t\t\t\t\treturn this.findTextEndRange(found, start, end);
\t\t\t\t}
\t\t\t}

\t\t\t// end of chapter
\t\t\treturn this.findTextEndRange($prev, start, end);
\t\t}
\t}, {
\t\tkey: "findTextStartRange",
\t\tvalue: function findTextStartRange(node, start, end) {
\t\t\tvar ranges = this.splitTextNodeIntoRanges(node);
\t\t\tvar range;
\t\t\tvar pos;
\t\t\tvar left, top, right;

\t\t\tfor (var i = 0; i < ranges.length; i++) {
\t\t\t\trange = ranges[i];

\t\t\t\tpos = range.getBoundingClientRect();

\t\t\t\tif (this.horizontal && this.direction === "ltr") {

\t\t\t\t\tleft = pos.left;
\t\t\t\t\tif (left >= start) {
\t\t\t\t\t\treturn range;
\t\t\t\t\t}
\t\t\t\t} else if (this.horizontal && this.direction === "rtl") {

\t\t\t\t\tright = pos.right;
\t\t\t\t\tif (right <= end) {
\t\t\t\t\t\treturn range;
\t\t\t\t\t}
\t\t\t\t} else {

\t\t\t\t\ttop = pos.top;
\t\t\t\t\tif (top >= start) {
\t\t\t\t\t\treturn range;
\t\t\t\t\t}
\t\t\t\t}

\t\t\t\t// prev = range;
\t\t\t}

\t\t\treturn ranges[0];
\t\t}
\t}, {
\t\tkey: "findTextEndRange",
\t\tvalue: function findTextEndRange(node, start, end) {
\t\t\tvar ranges = this.splitTextNodeIntoRanges(node);
\t\t\tvar prev;
\t\t\tvar range;
\t\t\tvar pos;
\t\t\tvar left, right, top, bottom;

\t\t\tfor (var i = 0; i < ranges.length; i++) {
\t\t\t\trange = ranges[i];

\t\t\t\tpos = range.getBoundingClientRect();

\t\t\t\tif (this.horizontal && this.direction === "ltr") {

\t\t\t\t\tleft = pos.left;
\t\t\t\t\tright = pos.right;

\t\t\t\t\tif (left > end && prev) {
\t\t\t\t\t\treturn prev;
\t\t\t\t\t} else if (right > end) {
\t\t\t\t\t\treturn range;
\t\t\t\t\t}
\t\t\t\t} else if (this.horizontal && this.direction === "rtl") {

\t\t\t\t\tleft = pos.left;
\t\t\t\t\tright = pos.right;

\t\t\t\t\tif (right < start && prev) {
\t\t\t\t\t\treturn prev;
\t\t\t\t\t} else if (left < start) {
\t\t\t\t\t\treturn range;
\t\t\t\t\t}
\t\t\t\t} else {

\t\t\t\t\ttop = pos.top;
\t\t\t\t\tbottom = pos.bottom;

\t\t\t\t\tif (top > end && prev) {
\t\t\t\t\t\treturn prev;
\t\t\t\t\t} else if (bottom > end) {
\t\t\t\t\t\treturn range;
\t\t\t\t\t}
\t\t\t\t}

\t\t\t\tprev = range;
\t\t\t}

\t\t\t// Ends before limit
\t\t\treturn ranges[ranges.length - 1];
\t\t}
\t}, {
\t\tkey: "splitTextNodeIntoRanges",
\t\tvalue: function splitTextNodeIntoRanges(node, _splitter) {
\t\t\tvar ranges = [];
\t\t\tvar textContent = node.textContent || "";
\t\t\tvar text = textContent.trim();
\t\t\tvar range;
\t\t\tvar doc = node.ownerDocument;
\t\t\tvar splitter = _splitter || " ";

\t\t\tvar pos = text.indexOf(splitter);

\t\t\tif (pos === -1 || node.nodeType != Node.TEXT_NODE) {
\t\t\t\trange = doc.createRange();
\t\t\t\trange.selectNodeContents(node);
\t\t\t\treturn [range];
\t\t\t}

\t\t\trange = doc.createRange();
\t\t\trange.setStart(node, 0);
\t\t\trange.setEnd(node, pos);
\t\t\tranges.push(range);
\t\t\trange = false;

\t\t\twhile (pos != -1) {

\t\t\t\tpos = text.indexOf(splitter, pos + 1);
\t\t\t\tif (pos > 0) {

\t\t\t\t\tif (range) {
\t\t\t\t\t\trange.setEnd(node, pos);
\t\t\t\t\t\tranges.push(range);
\t\t\t\t\t}

\t\t\t\t\trange = doc.createRange();
\t\t\t\t\trange.setStart(node, pos + 1);
\t\t\t\t}
\t\t\t}

\t\t\tif (range) {
\t\t\t\trange.setEnd(node, text.length);
\t\t\t\tranges.push(range);
\t\t\t}

\t\t\treturn ranges;
\t\t}
\t}, {
\t\tkey: "rangePairToCfiPair",
\t\tvalue: function rangePairToCfiPair(cfiBase, rangePair) {

\t\t\tvar startRange = rangePair.start;
\t\t\tvar endRange = rangePair.end;

\t\t\tstartRange.collapse(true);
\t\t\tendRange.collapse(false);

\t\t\tvar startCfi = new _epubcfi2.default(startRange, cfiBase).toString();
\t\t\tvar endCfi = new _epubcfi2.default(endRange, cfiBase).toString();

\t\t\treturn {
\t\t\t\tstart: startCfi,
\t\t\t\tend: endCfi
\t\t\t};
\t\t}
\t}, {
\t\tkey: "rangeListToCfiList",
\t\tvalue: function rangeListToCfiList(cfiBase, columns) {
\t\t\tvar map = [];
\t\t\tvar cifPair;

\t\t\tfor (var i = 0; i < columns.length; i++) {
\t\t\t\tcifPair = this.rangePairToCfiPair(cfiBase, columns[i]);

\t\t\t\tmap.push(cifPair);
\t\t\t}

\t\t\treturn map;
\t\t}
\t}, {
\t\tkey: "getBounds",
\t\tvalue: function getBounds(node) {
\t\t\tvar elPos = void 0;
\t\t\tif (node.nodeType == Node.TEXT_NODE) {
\t\t\t\tvar elRange = document.createRange();
\t\t\t\telRange.selectNodeContents(node);
\t\t\t\telPos = elRange.getBoundingClientRect();
\t\t\t} else {
\t\t\t\telPos = node.getBoundingClientRect();
\t\t\t}
\t\t\treturn elPos;
\t\t}
\t}, {
\t\tkey: "axis",
\t\tvalue: function axis(_axis) {
\t\t\tif (_axis) {
\t\t\t\tthis.horizontal = _axis === "horizontal" ? true : false;
\t\t\t}
\t\t\treturn this.horizontal;
\t\t}
\t}]);

\treturn Mapping;
}();

exports.default = Mapping;
module.exports = exports["default"];

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
\tvalue: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _eventEmitter = __webpack_require__(2);

var _eventEmitter2 = _interopRequireDefault(_eventEmitter);

var _core = __webpack_require__(0);

var _epubcfi = __webpack_require__(1);

var _epubcfi2 = _interopRequireDefault(_epubcfi);

var _contents = __webpack_require__(13);

var _contents2 = _interopRequireDefault(_contents);

var _constants = __webpack_require__(3);

var _marksPane = __webpack_require__(53);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IframeView = function () {
\tfunction IframeView(section, options) {
\t\t_classCallCheck(this, IframeView);

\t\tthis.settings = (0, _core.extend)({
\t\t\tignoreClass: "",
\t\t\taxis: options.layout && options.layout.props.flow === "scrolled" ? "vertical" : "horizontal",
\t\t\tdirection: undefined,
\t\t\twidth: 0,
\t\t\theight: 0,
\t\t\tlayout: undefined,
\t\t\tglobalLayoutProperties: {},
\t\t\tmethod: undefined
\t\t}, options || {});

\t\tthis.id = "epubjs-view-" + (0, _core.uuid)();
\t\tthis.section = section;
\t\tthis.index = section.index;

\t\tthis.element = this.container(this.settings.axis);

\t\tthis.added = false;
\t\tthis.displayed = false;
\t\tthis.rendered = false;

\t\t// this.width  = this.settings.width;
\t\t// this.height = this.settings.height;

\t\tthis.fixedWidth = 0;
\t\tthis.fixedHeight = 0;

\t\t// Blank Cfi for Parsing
\t\tthis.epubcfi = new _epubcfi2.default();

\t\tthis.layout = this.settings.layout;
\t\t// Dom events to listen for
\t\t// this.listenedEvents = ["keydown", "keyup", "keypressed", "mouseup", "mousedown", "click", "touchend", "touchstart"];

\t\tthis.pane = undefined;
\t\tthis.highlights = {};
\t\tthis.underlines = {};
\t\tthis.marks = {};
\t}

\t_createClass(IframeView, [{
\t\tkey: "container",
\t\tvalue: function container(axis) {
\t\t\tvar element = document.createElement("div");

\t\t\telement.classList.add("epub-view");

\t\t\t// this.element.style.minHeight = "100px";
\t\t\telement.style.height = "0px";
\t\t\telement.style.width = "0px";
\t\t\telement.style.overflow = "hidden";
\t\t\telement.style.position = "relative";
\t\t\telement.style.display = "block";

\t\t\tif (axis && axis == "horizontal") {
\t\t\t\telement.style.flex = "none";
\t\t\t} else {
\t\t\t\telement.style.flex = "initial";
\t\t\t}

\t\t\treturn element;
\t\t}
\t}, {
\t\tkey: "create",
\t\tvalue: function create() {

\t\t\tif (this.iframe) {
\t\t\t\treturn this.iframe;
\t\t\t}

\t\t\tif (!this.element) {
\t\t\t\tthis.element = this.createContainer();
\t\t\t}

\t\t\tthis.iframe = document.createElement("iframe");
\t\t\tthis.iframe.id = this.id;
\t\t\tthis.iframe.scrolling = "no"; // Might need to be removed: breaks ios width calculations
\t\t\tthis.iframe.style.overflow = "hidden";
\t\t\tthis.iframe.seamless = "seamless";
\t\t\t// Back up if seamless isn't supported
\t\t\tthis.iframe.style.border = "none";

\t\t\tthis.iframe.setAttribute("enable-annotation", "true");

\t\t\tthis.resizing = true;

\t\t\t// this.iframe.style.display = "none";
\t\t\tthis.element.style.visibility = "hidden";
\t\t\tthis.iframe.style.visibility = "hidden";

\t\t\tthis.iframe.style.width = "0";
\t\t\tthis.iframe.style.height = "0";
\t\t\tthis._width = 0;
\t\t\tthis._height = 0;

\t\t\tthis.element.setAttribute("ref", this.index);

\t\t\tthis.element.appendChild(this.iframe);
\t\t\tthis.added = true;

\t\t\tthis.elementBounds = (0, _core.bounds)(this.element);

\t\t\t// if(width || height){
\t\t\t//   this.resize(width, height);
\t\t\t// } else if(this.width && this.height){
\t\t\t//   this.resize(this.width, this.height);
\t\t\t// } else {
\t\t\t//   this.iframeBounds = bounds(this.iframe);
\t\t\t// }


\t\t\tif ("srcdoc" in this.iframe) {
\t\t\t\tthis.supportsSrcdoc = true;
\t\t\t} else {
\t\t\t\tthis.supportsSrcdoc = false;
\t\t\t}

\t\t\tif (!this.settings.method) {
\t\t\t\tthis.settings.method = this.supportsSrcdoc ? "srcdoc" : "write";
\t\t\t}

\t\t\treturn this.iframe;
\t\t}
\t}, {
\t\tkey: "render",
\t\tvalue: function render(request, show) {

\t\t\t// view.onLayout = this.layout.format.bind(this.layout);
\t\t\tthis.create();

\t\t\t// Fit to size of the container, apply padding
\t\t\tthis.size();

\t\t\tif (!this.sectionRender) {
\t\t\t\tthis.sectionRender = this.section.render(request);
\t\t\t}

\t\t\t// Render Chain
\t\t\treturn this.sectionRender.then(function (contents) {
\t\t\t\treturn this.load(contents);
\t\t\t}.bind(this)).then(function () {
\t\t\t\tvar _this = this;

\t\t\t\t// apply the layout function to the contents
\t\t\t\tthis.layout.format(this.contents);

\t\t\t\t// find and report the writingMode axis
\t\t\t\tvar writingMode = this.contents.writingMode();
\t\t\t\tvar axis = writingMode.indexOf("vertical") === 0 ? "vertical" : "horizontal";

\t\t\t\tthis.setAxis(axis);
\t\t\t\tthis.emit(_constants.EVENTS.VIEWS.AXIS, axis);

\t\t\t\t// Listen for events that require an expansion of the iframe
\t\t\t\tthis.addListeners();

\t\t\t\treturn new Promise(function (resolve, reject) {
\t\t\t\t\t// Expand the iframe to the full size of the content
\t\t\t\t\t_this.expand();
\t\t\t\t\tresolve();
\t\t\t\t});
\t\t\t}.bind(this), function (e) {
\t\t\t\tthis.emit(_constants.EVENTS.VIEWS.LOAD_ERROR, e);
\t\t\t\treturn new Promise(function (resolve, reject) {
\t\t\t\t\treject(e);
\t\t\t\t});
\t\t\t}.bind(this)).then(function () {
\t\t\t\tthis.emit(_constants.EVENTS.VIEWS.RENDERED, this.section);
\t\t\t}.bind(this));
\t\t}
\t}, {
\t\tkey: "reset",
\t\tvalue: function reset() {
\t\t\tif (this.iframe) {
\t\t\t\tthis.iframe.style.width = "0";
\t\t\t\tthis.iframe.style.height = "0";
\t\t\t\tthis._width = 0;
\t\t\t\tthis._height = 0;
\t\t\t\tthis._textWidth = undefined;
\t\t\t\tthis._contentWidth = undefined;
\t\t\t\tthis._textHeight = undefined;
\t\t\t\tthis._contentHeight = undefined;
\t\t\t}
\t\t\tthis._needsReframe = true;
\t\t}

\t\t// Determine locks base on settings

\t}, {
\t\tkey: "size",
\t\tvalue: function size(_width, _height) {
\t\t\tvar width = _width || this.settings.width;
\t\t\tvar height = _height || this.settings.height;

\t\t\tif (this.layout.name === "pre-paginated") {
\t\t\t\tthis.lock("both", width, height);
\t\t\t} else if (this.settings.axis === "horizontal") {
\t\t\t\tthis.lock("height", width, height);
\t\t\t} else {
\t\t\t\tthis.lock("width", width, height);
\t\t\t}

\t\t\tthis.settings.width = width;
\t\t\tthis.settings.height = height;
\t\t}

\t\t// Lock an axis to element dimensions, taking borders into account

\t}, {
\t\tkey: "lock",
\t\tvalue: function lock(what, width, height) {
\t\t\tvar elBorders = (0, _core.borders)(this.element);
\t\t\tvar iframeBorders;

\t\t\tif (this.iframe) {
\t\t\t\tiframeBorders = (0, _core.borders)(this.iframe);
\t\t\t} else {
\t\t\t\tiframeBorders = { width: 0, height: 0 };
\t\t\t}

\t\t\tif (what == "width" && (0, _core.isNumber)(width)) {
\t\t\t\tthis.lockedWidth = width - elBorders.width - iframeBorders.width;
\t\t\t\t// this.resize(this.lockedWidth, width); //  width keeps ratio correct
\t\t\t}

\t\t\tif (what == "height" && (0, _core.isNumber)(height)) {
\t\t\t\tthis.lockedHeight = height - elBorders.height - iframeBorders.height;
\t\t\t\t// this.resize(width, this.lockedHeight);
\t\t\t}

\t\t\tif (what === "both" && (0, _core.isNumber)(width) && (0, _core.isNumber)(height)) {

\t\t\t\tthis.lockedWidth = width - elBorders.width - iframeBorders.width;
\t\t\t\tthis.lockedHeight = height - elBorders.height - iframeBorders.height;
\t\t\t\t// this.resize(this.lockedWidth, this.lockedHeight);
\t\t\t}

\t\t\tif (this.displayed && this.iframe) {

\t\t\t\t// this.contents.layout();
\t\t\t\tthis.expand();
\t\t\t}
\t\t}

\t\t// Resize a single axis based on content dimensions

\t}, {
\t\tkey: "expand",
\t\tvalue: function expand(force) {
\t\t\tvar width = this.lockedWidth;
\t\t\tvar height = this.lockedHeight;
\t\t\tvar columns;

\t\t\tvar textWidth, textHeight;

\t\t\tif (!this.iframe || this._expanding) return;

\t\t\tthis._expanding = true;

\t\t\tif (this.layout.name === "pre-paginated") {
\t\t\t\twidth = this.layout.columnWidth;
\t\t\t\theight = this.layout.height;
\t\t\t}
\t\t\t// Expand Horizontally
\t\t\telse if (this.settings.axis === "horizontal") {
\t\t\t\t\t// Get the width of the text
\t\t\t\t\twidth = this.contents.textWidth();

\t\t\t\t\tif (width % this.layout.pageWidth > 0) {
\t\t\t\t\t\twidth = Math.ceil(width / this.layout.pageWidth) * this.layout.pageWidth;
\t\t\t\t\t}

\t\t\t\t\tif (this.settings.forceEvenPages) {
\t\t\t\t\t\tcolumns = width / this.layout.delta;
\t\t\t\t\t\tif (this.layout.divisor > 1 && this.layout.name === "reflowable" && columns % 2 > 0) {
\t\t\t\t\t\t\t// add a blank page
\t\t\t\t\t\t\twidth += this.layout.gap + this.layout.columnWidth;
\t\t\t\t\t\t}
\t\t\t\t\t}
\t\t\t\t} // Expand Vertically
\t\t\t\telse if (this.settings.axis === "vertical") {
\t\t\t\t\t\theight = this.contents.textHeight();
\t\t\t\t\t}

\t\t\t// Only Resize if dimensions have changed or
\t\t\t// if Frame is still hidden, so needs reframing
\t\t\tif (this._needsReframe || width != this._width || height != this._height) {
\t\t\t\tthis.reframe(width, height);
\t\t\t}

\t\t\tthis._expanding = false;
\t\t}
\t}, {
\t\tkey: "reframe",
\t\tvalue: function reframe(width, height) {
\t\t\tvar size;

\t\t\tif ((0, _core.isNumber)(width)) {
\t\t\t\tthis.element.style.width = width + "px";
\t\t\t\tthis.iframe.style.width = width + "px";
\t\t\t\tthis._width = width;
\t\t\t}

\t\t\tif ((0, _core.isNumber)(height)) {
\t\t\t\tthis.element.style.height = height + "px";
\t\t\t\tthis.iframe.style.height = height + "px";
\t\t\t\tthis._height = height;
\t\t\t}

\t\t\tvar widthDelta = this.prevBounds ? width - this.prevBounds.width : width;
\t\t\tvar heightDelta = this.prevBounds ? height - this.prevBounds.height : height;

\t\t\tsize = {
\t\t\t\twidth: width,
\t\t\t\theight: height,
\t\t\t\twidthDelta: widthDelta,
\t\t\t\theightDelta: heightDelta
\t\t\t};

\t\t\tthis.pane && this.pane.render();

\t\t\tthis.onResize(this, size);

\t\t\tthis.emit(_constants.EVENTS.VIEWS.RESIZED, size);

\t\t\tthis.prevBounds = size;

\t\t\tthis.elementBounds = (0, _core.bounds)(this.element);
\t\t}
\t}, {
\t\tkey: "load",
\t\tvalue: function load(contents) {
\t\t\tvar loading = new _core.defer();
\t\t\tvar loaded = loading.promise;

\t\t\tif (!this.iframe) {
\t\t\t\tloading.reject(new Error("No Iframe Available"));
\t\t\t\treturn loaded;
\t\t\t}

\t\t\tthis.iframe.onload = function (event) {

\t\t\t\tthis.onLoad(event, loading);
\t\t\t}.bind(this);

\t\t\tif (this.settings.method === "blobUrl") {
\t\t\t\tthis.blobUrl = (0, _core.createBlobUrl)(contents, "application/xhtml+xml");
\t\t\t\tthis.iframe.src = this.blobUrl;
\t\t\t} else if (this.settings.method === "srcdoc") {
\t\t\t\tthis.iframe.srcdoc = contents;
\t\t\t} else {

\t\t\t\tthis.document = this.iframe.contentDocument;

\t\t\t\tif (!this.document) {
\t\t\t\t\tloading.reject(new Error("No Document Available"));
\t\t\t\t\treturn loaded;
\t\t\t\t}

\t\t\t\tthis.iframe.contentDocument.open();
\t\t\t\tthis.iframe.contentDocument.write(contents);
\t\t\t\tthis.iframe.contentDocument.close();
\t\t\t}

\t\t\treturn loaded;
\t\t}
\t}, {
\t\tkey: "onLoad",
\t\tvalue: function onLoad(event, promise) {
\t\t\tvar _this2 = this;

\t\t\tthis.window = this.iframe.contentWindow;
\t\t\tthis.document = this.iframe.contentDocument;

\t\t\tthis.contents = new _contents2.default(this.document, this.document.body, this.section.cfiBase, this.section.index);

\t\t\tthis.rendering = false;

\t\t\tvar link = this.document.querySelector("link[rel='canonical']");
\t\t\tif (link) {
\t\t\t\tlink.setAttribute("href", this.section.canonical);
\t\t\t} else {
\t\t\t\tlink = this.document.createElement("link");
\t\t\t\tlink.setAttribute("rel", "canonical");
\t\t\t\tlink.setAttribute("href", this.section.canonical);
\t\t\t\tthis.document.querySelector("head").appendChild(link);
\t\t\t}

\t\t\tthis.contents.on(_constants.EVENTS.CONTENTS.EXPAND, function () {
\t\t\t\tif (_this2.displayed && _this2.iframe) {
\t\t\t\t\t_this2.expand();
\t\t\t\t\tif (_this2.contents) {
\t\t\t\t\t\t_this2.layout.format(_this2.contents);
\t\t\t\t\t}
\t\t\t\t}
\t\t\t});

\t\t\tthis.contents.on(_constants.EVENTS.CONTENTS.RESIZE, function (e) {
\t\t\t\tif (_this2.displayed && _this2.iframe) {
\t\t\t\t\t_this2.expand();
\t\t\t\t\tif (_this2.contents) {
\t\t\t\t\t\t_this2.layout.format(_this2.contents);
\t\t\t\t\t}
\t\t\t\t}
\t\t\t});

\t\t\tpromise.resolve(this.contents);
\t\t}
\t}, {
\t\tkey: "setLayout",
\t\tvalue: function setLayout(layout) {
\t\t\tthis.layout = layout;

\t\t\tif (this.contents) {
\t\t\t\tthis.layout.format(this.contents);
\t\t\t\tthis.expand();
\t\t\t}
\t\t}
\t}, {
\t\tkey: "setAxis",
\t\tvalue: function setAxis(axis) {

\t\t\t// Force vertical for scrolled
\t\t\tif (this.layout.props.flow === "scrolled") {
\t\t\t\taxis = "vertical";
\t\t\t}

\t\t\tthis.settings.axis = axis;

\t\t\tif (axis == "horizontal") {
\t\t\t\tthis.element.style.flex = "none";
\t\t\t} else {
\t\t\t\tthis.element.style.flex = "initial";
\t\t\t}

\t\t\tthis.size();
\t\t}
\t}, {
\t\tkey: "addListeners",
\t\tvalue: function addListeners() {
\t\t\t//TODO: Add content listeners for expanding
\t\t}
\t}, {
\t\tkey: "removeListeners",
\t\tvalue: function removeListeners(layoutFunc) {
\t\t\t//TODO: remove content listeners for expanding
\t\t}
\t}, {
\t\tkey: "display",
\t\tvalue: function display(request) {
\t\t\tvar displayed = new _core.defer();

\t\t\tif (!this.displayed) {

\t\t\t\tthis.render(request).then(function () {

\t\t\t\t\tthis.emit(_constants.EVENTS.VIEWS.DISPLAYED, this);
\t\t\t\t\tthis.onDisplayed(this);

\t\t\t\t\tthis.displayed = true;
\t\t\t\t\tdisplayed.resolve(this);
\t\t\t\t}.bind(this), function (err) {
\t\t\t\t\tdisplayed.reject(err, this);
\t\t\t\t});
\t\t\t} else {
\t\t\t\tdisplayed.resolve(this);
\t\t\t}

\t\t\treturn displayed.promise;
\t\t}
\t}, {
\t\tkey: "show",
\t\tvalue: function show() {

\t\t\tthis.element.style.visibility = "visible";

\t\t\tif (this.iframe) {
\t\t\t\tthis.iframe.style.visibility = "visible";
\t\t\t}

\t\t\tthis.emit(_constants.EVENTS.VIEWS.SHOWN, this);
\t\t}
\t}, {
\t\tkey: "hide",
\t\tvalue: function hide() {
\t\t\t// this.iframe.style.display = "none";
\t\t\tthis.element.style.visibility = "hidden";
\t\t\tthis.iframe.style.visibility = "hidden";

\t\t\tthis.stopExpanding = true;
\t\t\tthis.emit(_constants.EVENTS.VIEWS.HIDDEN, this);
\t\t}
\t}, {
\t\tkey: "offset",
\t\tvalue: function offset() {
\t\t\treturn {
\t\t\t\ttop: this.element.offsetTop,
\t\t\t\tleft: this.element.offsetLeft
\t\t\t};
\t\t}
\t}, {
\t\tkey: "width",
\t\tvalue: function width() {
\t\t\treturn this._width;
\t\t}
\t}, {
\t\tkey: "height",
\t\tvalue: function height() {
\t\t\treturn this._height;
\t\t}
\t}, {
\t\tkey: "position",
\t\tvalue: function position() {
\t\t\treturn this.element.getBoundingClientRect();
\t\t}
\t}, {
\t\tkey: "locationOf",
\t\tvalue: function locationOf(target) {
\t\t\tvar parentPos = this.iframe.getBoundingClientRect();
\t\t\tvar targetPos = this.contents.locationOf(target, this.settings.ignoreClass);

\t\t\treturn {
\t\t\t\t"left": targetPos.left,
\t\t\t\t"top": targetPos.top
\t\t\t};
\t\t}
\t}, {
\t\tkey: "onDisplayed",
\t\tvalue: function onDisplayed(view) {
\t\t\t// Stub, override with a custom functions
\t\t}
\t}, {
\t\tkey: "onResize",
\t\tvalue: function onResize(view, e) {
\t\t\t// Stub, override with a custom functions
\t\t}
\t}, {
\t\tkey: "bounds",
\t\tvalue: function bounds(force) {
\t\t\tif (force || !this.elementBounds) {
\t\t\t\tthis.elementBounds = (0, _core.bounds)(this.element);
\t\t\t}

\t\t\treturn this.elementBounds;
\t\t}
\t}, {
\t\tkey: "highlight",
\t\tvalue: function highlight(cfiRange) {
\t\t\tvar _this3 = this;

\t\t\tvar data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
\t\t\tvar cb = arguments[2];

\t\t\tif (!this.contents) {
\t\t\t\treturn;
\t\t\t}
\t\t\tvar range = this.contents.range(cfiRange);

\t\t\tvar emitter = function emitter() {
\t\t\t\t_this3.emit(_constants.EVENTS.VIEWS.MARK_CLICKED, cfiRange, data);
\t\t\t};

\t\t\tdata["epubcfi"] = cfiRange;

\t\t\tif (!this.pane) {
\t\t\t\tthis.pane = new _marksPane.Pane(this.iframe, this.element);
\t\t\t}

\t\t\tvar m = new _marksPane.Highlight(range, "epubjs-hl", data, { 'fill': 'yellow', 'fill-opacity': '0.3', 'mix-blend-mode': 'multiply' });
\t\t\tvar h = this.pane.addMark(m);

\t\t\tthis.highlights[cfiRange] = { "mark": h, "element": h.element, "listeners": [emitter, cb] };

\t\t\th.element.setAttribute("ref", "epubjs-hl");
\t\t\th.element.addEventListener("click", emitter);
\t\t\th.element.addEventListener("touchstart", emitter);

\t\t\tif (cb) {
\t\t\t\th.element.addEventListener("click", cb);
\t\t\t\th.element.addEventListener("touchstart", cb);
\t\t\t}
\t\t\treturn h;
\t\t}
\t}, {
\t\tkey: "underline",
\t\tvalue: function underline(cfiRange) {
\t\t\tvar _this4 = this;

\t\t\tvar data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
\t\t\tvar cb = arguments[2];

\t\t\tif (!this.contents) {
\t\t\t\treturn;
\t\t\t}
\t\t\tvar range = this.contents.range(cfiRange);
\t\t\tvar emitter = function emitter() {
\t\t\t\t_this4.emit(_constants.EVENTS.VIEWS.MARK_CLICKED, cfiRange, data);
\t\t\t};

\t\t\tdata["epubcfi"] = cfiRange;

\t\t\tif (!this.pane) {
\t\t\t\tthis.pane = new _marksPane.Pane(this.iframe, this.element);
\t\t\t}

\t\t\tvar m = new _marksPane.Underline(range, "epubjs-ul", data, { 'stroke': 'black', 'stroke-opacity': '0.3', 'mix-blend-mode': 'multiply' });
\t\t\tvar h = this.pane.addMark(m);

\t\t\tthis.underlines[cfiRange] = { "mark": h, "element": h.element, "listeners": [emitter, cb] };

\t\t\th.element.setAttribute("ref", "epubjs-ul");
\t\t\th.element.addEventListener("click", emitter);
\t\t\th.element.addEventListener("touchstart", emitter);

\t\t\tif (cb) {
\t\t\t\th.element.addEventListener("click", cb);
\t\t\t\th.element.addEventListener("touchstart", cb);
\t\t\t}
\t\t\treturn h;
\t\t}
\t}, {
\t\tkey: "mark",
\t\tvalue: function mark(cfiRange) {
\t\t\tvar _this5 = this;

\t\t\tvar data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
\t\t\tvar cb = arguments[2];


\t\t\tif (!this.contents) {
\t\t\t\treturn;
\t\t\t}

\t\t\tif (cfiRange in this.marks) {
\t\t\t\tvar item = this.marks[cfiRange];
\t\t\t\treturn item;
\t\t\t}

\t\t\tvar range = this.contents.range(cfiRange);
\t\t\tif (!range) {
\t\t\t\treturn;
\t\t\t}
\t\t\tvar container = range.commonAncestorContainer;
\t\t\tvar parent = container.nodeType === 1 ? container : container.parentNode;

\t\t\tvar emitter = function emitter(e) {
\t\t\t\t_this5.emit(_constants.EVENTS.VIEWS.MARK_CLICKED, cfiRange, data);
\t\t\t};

\t\t\tif (range.collapsed && container.nodeType === 1) {
\t\t\t\trange = new Range();
\t\t\t\trange.selectNodeContents(container);
\t\t\t} else if (range.collapsed) {
\t\t\t\t// Webkit doesn't like collapsed ranges
\t\t\t\trange = new Range();
\t\t\t\trange.selectNodeContents(parent);
\t\t\t}

\t\t\tvar top = void 0,
\t\t\t    right = void 0,
\t\t\t    left = void 0;

\t\t\tif (this.layout.name === "pre-paginated" || this.settings.axis !== "horizontal") {
\t\t\t\tvar pos = range.getBoundingClientRect();
\t\t\t\ttop = pos.top;
\t\t\t\tright = pos.right;
\t\t\t} else {
\t\t\t\t// Element might break columns, so find the left most element
\t\t\t\tvar rects = range.getClientRects();
\t\t\t\tvar rect = void 0;
\t\t\t\tfor (var i = 0; i != rects.length; i++) {
\t\t\t\t\trect = rects[i];
\t\t\t\t\tif (!left || rect.left < left) {
\t\t\t\t\t\tleft = rect.left;
\t\t\t\t\t\tright = left + this.layout.columnWidth - this.layout.gap;
\t\t\t\t\t\ttop = rect.top;
\t\t\t\t\t}
\t\t\t\t}
\t\t\t}

\t\t\tvar mark = this.document.createElement('a');
\t\t\tmark.setAttribute("ref", "epubjs-mk");
\t\t\tmark.style.position = "absolute";
\t\t\tmark.style.top = top + "px";
\t\t\tmark.style.left = right + "px";

\t\t\tmark.dataset["epubcfi"] = cfiRange;

\t\t\tif (data) {
\t\t\t\tObject.keys(data).forEach(function (key) {
\t\t\t\t\tmark.dataset[key] = data[key];
\t\t\t\t});
\t\t\t}

\t\t\tif (cb) {
\t\t\t\tmark.addEventListener("click", cb);
\t\t\t\tmark.addEventListener("touchstart", cb);
\t\t\t}

\t\t\tmark.addEventListener("click", emitter);
\t\t\tmark.addEventListener("touchstart", emitter);

\t\t\tthis.element.appendChild(mark);

\t\t\tthis.marks[cfiRange] = { "element": mark, "listeners": [emitter, cb] };

\t\t\treturn parent;
\t\t}
\t}, {
\t\tkey: "unhighlight",
\t\tvalue: function unhighlight(cfiRange) {
\t\t\tvar item = void 0;
\t\t\tif (cfiRange in this.highlights) {
\t\t\t\titem = this.highlights[cfiRange];

\t\t\t\tthis.pane.removeMark(item.mark);
\t\t\t\titem.listeners.forEach(function (l) {
\t\t\t\t\tif (l) {
\t\t\t\t\t\titem.element.removeEventListener("click", l);
\t\t\t\t\t};
\t\t\t\t});
\t\t\t\tdelete this.highlights[cfiRange];
\t\t\t}
\t\t}
\t}, {
\t\tkey: "ununderline",
\t\tvalue: function ununderline(cfiRange) {
\t\t\tvar item = void 0;
\t\t\tif (cfiRange in this.underlines) {
\t\t\t\titem = this.underlines[cfiRange];
\t\t\t\tthis.pane.removeMark(item.mark);
\t\t\t\titem.listeners.forEach(function (l) {
\t\t\t\t\tif (l) {
\t\t\t\t\t\titem.element.removeEventListener("click", l);
\t\t\t\t\t};
\t\t\t\t});
\t\t\t\tdelete this.underlines[cfiRange];
\t\t\t}
\t\t}
\t}, {
\t\tkey: "unmark",
\t\tvalue: function unmark(cfiRange) {
\t\t\tvar item = void 0;
\t\t\tif (cfiRange in this.marks) {
\t\t\t\titem = this.marks[cfiRange];
\t\t\t\tthis.element.removeChild(item.element);
\t\t\t\titem.listeners.forEach(function (l) {
\t\t\t\t\tif (l) {
\t\t\t\t\t\titem.element.removeEventListener("click", l);
\t\t\t\t\t};
\t\t\t\t});
\t\t\t\tdelete this.marks[cfiRange];
\t\t\t}
\t\t}
\t}, {
\t\tkey: "destroy",
\t\tvalue: function destroy() {

\t\t\tfor (var cfiRange in this.highlights) {
\t\t\t\tthis.unhighlight(cfiRange);
\t\t\t}

\t\t\tfor (var _cfiRange in this.underlines) {
\t\t\t\tthis.ununderline(_cfiRange);
\t\t\t}

\t\t\tfor (var _cfiRange2 in this.marks) {
\t\t\t\tthis.unmark(_cfiRange2);
\t\t\t}

\t\t\tif (this.blobUrl) {
\t\t\t\t(0, _core.revokeBlobUrl)(this.blobUrl);
\t\t\t}

\t\t\tif (this.displayed) {
\t\t\t\tthis.displayed = false;

\t\t\t\tthis.removeListeners();

\t\t\t\tthis.stopExpanding = true;
\t\t\t\tthis.element.removeChild(this.iframe);

\t\t\t\tthis.iframe = null;

\t\t\t\tthis._textWidth = null;
\t\t\t\tthis._textHeight = null;
\t\t\t\tthis._width = null;
\t\t\t\tthis._height = null;
\t\t\t}
\t\t\t// this.element.style.height = "0px";
\t\t\t// this.element.style.width = "0px";
\t\t}
\t}]);

\treturn IframeView;
}();

(0, _eventEmitter2.default)(IframeView.prototype);

exports.default = IframeView;
module.exports = exports["default"];

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(15),
    now = __webpack_require__(58),
    toNumber = __webpack_require__(60);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other \`lodash\` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking \`func\` until after \`wait\`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a \`cancel\` method to cancel
 * delayed \`func\` invocations and a \`flush\` method to immediately invoke them.
 * Provide \`options\` to indicate whether \`func\` should be invoked on the
 * leading and/or trailing edge of the \`wait\` timeout. The \`func\` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last \`func\`
 * invocation.
 *
 * **Note:** If \`leading\` and \`trailing\` options are \`true\`, \`func\` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the \`wait\` timeout.
 *
 * If \`wait\` is \`0\` and \`leading\` is \`false\`, \`func\` invocation is deferred
 * until to the next tick, similar to \`setTimeout\` with a timeout of \`0\`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between \`_.debounce\` and \`_.throttle\`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time \`func\` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke \`sendMail\` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure \`batchLog\` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any \`maxWait\` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the \`maxWait\` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have \`lastArgs\` which means \`func\` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(59);

/** Detect free variable \`self\`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(22);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
\tvalue: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _core = __webpack_require__(0);

var _default = __webpack_require__(14);

var _default2 = _interopRequireDefault(_default);

var _constants = __webpack_require__(3);

var _debounce = __webpack_require__(21);

var _debounce2 = _interopRequireDefault(_debounce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContinuousViewManager = function (_DefaultViewManager) {
\t_inherits(ContinuousViewManager, _DefaultViewManager);

\tfunction ContinuousViewManager(options) {
\t\t_classCallCheck(this, ContinuousViewManager);

\t\tvar _this = _possibleConstructorReturn(this, (ContinuousViewManager.__proto__ || Object.getPrototypeOf(ContinuousViewManager)).call(this, options));

\t\t_this.name = "continuous";

\t\t_this.settings = (0, _core.extend)(_this.settings || {}, {
\t\t\tinfinite: true,
\t\t\toverflow: undefined,
\t\t\taxis: undefined,
\t\t\tflow: "scrolled",
\t\t\toffset: 500,
\t\t\toffsetDelta: 250,
\t\t\twidth: undefined,
\t\t\theight: undefined
\t\t});

\t\t(0, _core.extend)(_this.settings, options.settings || {});

\t\t// Gap can be 0, but defaults doesn't handle that
\t\tif (options.settings.gap != "undefined" && options.settings.gap === 0) {
\t\t\t_this.settings.gap = options.settings.gap;
\t\t}

\t\t_this.viewSettings = {
\t\t\tignoreClass: _this.settings.ignoreClass,
\t\t\taxis: _this.settings.axis,
\t\t\tflow: _this.settings.flow,
\t\t\tlayout: _this.layout,
\t\t\twidth: 0,
\t\t\theight: 0,
\t\t\tforceEvenPages: false
\t\t};

\t\t_this.scrollTop = 0;
\t\t_this.scrollLeft = 0;
\t\treturn _this;
\t}

\t_createClass(ContinuousViewManager, [{
\t\tkey: "display",
\t\tvalue: function display(section, target) {
\t\t\treturn _default2.default.prototype.display.call(this, section, target).then(function () {
\t\t\t\treturn this.fill();
\t\t\t}.bind(this));
\t\t}
\t}, {
\t\tkey: "fill",
\t\tvalue: function fill(_full) {
\t\t\tvar _this2 = this;

\t\t\tvar full = _full || new _core.defer();

\t\t\tthis.q.enqueue(function () {
\t\t\t\treturn _this2.check();
\t\t\t}).then(function (result) {
\t\t\t\tif (result) {
\t\t\t\t\t_this2.fill(full);
\t\t\t\t} else {
\t\t\t\t\tfull.resolve();
\t\t\t\t}
\t\t\t});

\t\t\treturn full.promise;
\t\t}
\t}, {
\t\tkey: "moveTo",
\t\tvalue: function moveTo(offset) {
\t\t\t// var bounds = this.stage.bounds();
\t\t\t// var dist = Math.floor(offset.top / bounds.height) * bounds.height;
\t\t\tvar distX = 0,
\t\t\t    distY = 0;

\t\t\tvar offsetX = 0,
\t\t\t    offsetY = 0;

\t\t\tif (!this.isPaginated) {
\t\t\t\tdistY = offset.top;
\t\t\t\toffsetY = offset.top + this.settings.offset;
\t\t\t} else {
\t\t\t\tdistX = Math.floor(offset.left / this.layout.delta) * this.layout.delta;
\t\t\t\toffsetX = distX + this.settings.offset;
\t\t\t}

\t\t\tif (distX > 0 || distY > 0) {
\t\t\t\tthis.scrollBy(distX, distY, true);
\t\t\t}
\t\t}
\t}, {
\t\tkey: "afterResized",
\t\tvalue: function afterResized(view) {
\t\t\tthis.emit(_constants.EVENTS.MANAGERS.RESIZE, view.section);
\t\t}

\t\t// Remove Previous Listeners if present

\t}, {
\t\tkey: "removeShownListeners",
\t\tvalue: function removeShownListeners(view) {

\t\t\t// view.off("shown", this.afterDisplayed);
\t\t\t// view.off("shown", this.afterDisplayedAbove);
\t\t\tview.onDisplayed = function () {};
\t\t}
\t}, {
\t\tkey: "add",
\t\tvalue: function add(section) {
\t\t\tvar _this3 = this;

\t\t\tvar view = this.createView(section);

\t\t\tthis.views.append(view);

\t\t\tview.on(_constants.EVENTS.VIEWS.RESIZED, function (bounds) {
\t\t\t\tview.expanded = true;
\t\t\t});

\t\t\tview.on(_constants.EVENTS.VIEWS.AXIS, function (axis) {
\t\t\t\t_this3.updateAxis(axis);
\t\t\t});

\t\t\t// view.on(EVENTS.VIEWS.SHOWN, this.afterDisplayed.bind(this));
\t\t\tview.onDisplayed = this.afterDisplayed.bind(this);
\t\t\tview.onResize = this.afterResized.bind(this);

\t\t\treturn view.display(this.request);
\t\t}
\t}, {
\t\tkey: "append",
\t\tvalue: function append(section) {
\t\t\tvar view = this.createView(section);

\t\t\tview.on(_constants.EVENTS.VIEWS.RESIZED, function (bounds) {
\t\t\t\tview.expanded = true;
\t\t\t});

\t\t\t/*
   view.on(EVENTS.VIEWS.AXIS, (axis) => {
   \tthis.updateAxis(axis);
   });
   */

\t\t\tthis.views.append(view);

\t\t\tview.onDisplayed = this.afterDisplayed.bind(this);

\t\t\treturn view;
\t\t}
\t}, {
\t\tkey: "prepend",
\t\tvalue: function prepend(section) {
\t\t\tvar _this4 = this;

\t\t\tvar view = this.createView(section);

\t\t\tview.on(_constants.EVENTS.VIEWS.RESIZED, function (bounds) {
\t\t\t\t_this4.counter(bounds);
\t\t\t\tview.expanded = true;
\t\t\t});

\t\t\t/*
   view.on(EVENTS.VIEWS.AXIS, (axis) => {
   \tthis.updateAxis(axis);
   });
   */

\t\t\tthis.views.prepend(view);

\t\t\tview.onDisplayed = this.afterDisplayed.bind(this);

\t\t\treturn view;
\t\t}
\t}, {
\t\tkey: "counter",
\t\tvalue: function counter(bounds) {
\t\t\tif (this.settings.axis === "vertical") {
\t\t\t\tthis.scrollBy(0, bounds.heightDelta, true);
\t\t\t} else {
\t\t\t\tthis.scrollBy(bounds.widthDelta, 0, true);
\t\t\t}
\t\t}
\t}, {
\t\tkey: "update",
\t\tvalue: function update(_offset) {
\t\t\tvar container = this.bounds();
\t\t\tvar views = this.views.all();
\t\t\tvar viewsLength = views.length;
\t\t\tvar visible = [];
\t\t\tvar offset = typeof _offset != "undefined" ? _offset : this.settings.offset || 0;
\t\t\tvar isVisible;
\t\t\tvar view;

\t\t\tvar updating = new _core.defer();
\t\t\tvar promises = [];
\t\t\tfor (var i = 0; i < viewsLength; i++) {
\t\t\t\tview = views[i];

\t\t\t\tisVisible = this.isVisible(view, offset, offset, container);

\t\t\t\tif (isVisible === true) {
\t\t\t\t\t// console.log("visible " + view.index);

\t\t\t\t\tif (!view.displayed) {
\t\t\t\t\t\tvar displayed = view.display(this.request).then(function (view) {
\t\t\t\t\t\t\tview.show();
\t\t\t\t\t\t}, function (err) {
\t\t\t\t\t\t\tview.hide();
\t\t\t\t\t\t});
\t\t\t\t\t\tpromises.push(displayed);
\t\t\t\t\t} else {
\t\t\t\t\t\tview.show();
\t\t\t\t\t}
\t\t\t\t\tvisible.push(view);
\t\t\t\t} else {
\t\t\t\t\tthis.q.enqueue(view.destroy.bind(view));
\t\t\t\t\t// console.log("hidden " + view.index);

\t\t\t\t\tclearTimeout(this.trimTimeout);
\t\t\t\t\tthis.trimTimeout = setTimeout(function () {
\t\t\t\t\t\tthis.q.enqueue(this.trim.bind(this));
\t\t\t\t\t}.bind(this), 250);
\t\t\t\t}
\t\t\t}

\t\t\tif (promises.length) {
\t\t\t\treturn Promise.all(promises).catch(function (err) {
\t\t\t\t\tupdating.reject(err);
\t\t\t\t});
\t\t\t} else {
\t\t\t\tupdating.resolve();
\t\t\t\treturn updating.promise;
\t\t\t}
\t\t}
\t}, {
\t\tkey: "check",
\t\tvalue: function check(_offsetLeft, _offsetTop) {
\t\t\tvar _this5 = this;

\t\t\tvar checking = new _core.defer();
\t\t\tvar newViews = [];

\t\t\tvar horizontal = this.settings.axis === "horizontal";
\t\t\tvar delta = this.settings.offset || 0;

\t\t\tif (_offsetLeft && horizontal) {
\t\t\t\tdelta = _offsetLeft;
\t\t\t}

\t\t\tif (_offsetTop && !horizontal) {
\t\t\t\tdelta = _offsetTop;
\t\t\t}

\t\t\tvar bounds = this._bounds; // bounds saved this until resize

\t\t\tvar rtl = this.settings.direction === "rtl";
\t\t\tvar dir = horizontal && rtl ? -1 : 1; //RTL reverses scrollTop

\t\t\tvar offset = horizontal ? this.scrollLeft : this.scrollTop * dir;
\t\t\tvar visibleLength = horizontal ? bounds.width : bounds.height;
\t\t\tvar contentLength = horizontal ? this.container.scrollWidth : this.container.scrollHeight;

\t\t\tvar prepend = function prepend() {
\t\t\t\tvar first = _this5.views.first();
\t\t\t\tvar prev = first && first.section.prev();

\t\t\t\tif (prev) {
\t\t\t\t\tnewViews.push(_this5.prepend(prev));
\t\t\t\t}
\t\t\t};

\t\t\tvar append = function append() {
\t\t\t\tvar last = _this5.views.last();
\t\t\t\tvar next = last && last.section.next();

\t\t\t\tif (next) {
\t\t\t\t\tnewViews.push(_this5.append(next));
\t\t\t\t}
\t\t\t};

\t\t\tif (offset + visibleLength + delta >= contentLength) {
\t\t\t\tif (horizontal && rtl) {
\t\t\t\t\tprepend();
\t\t\t\t} else {
\t\t\t\t\tappend();
\t\t\t\t}
\t\t\t}

\t\t\tif (offset - delta < 0) {
\t\t\t\tif (horizontal && rtl) {
\t\t\t\t\tappend();
\t\t\t\t} else {
\t\t\t\t\tprepend();
\t\t\t\t}
\t\t\t}

\t\t\tvar promises = newViews.map(function (view) {
\t\t\t\treturn view.displayed;
\t\t\t});

\t\t\tif (newViews.length) {
\t\t\t\treturn Promise.all(promises).then(function () {
\t\t\t\t\tif (_this5.layout.name === "pre-paginated" && _this5.layout.props.spread) {
\t\t\t\t\t\treturn _this5.check();
\t\t\t\t\t}
\t\t\t\t}).then(function () {
\t\t\t\t\t// Check to see if anything new is on screen after rendering
\t\t\t\t\treturn _this5.update(delta);
\t\t\t\t}, function (err) {
\t\t\t\t\treturn err;
\t\t\t\t});
\t\t\t} else {
\t\t\t\tthis.q.enqueue(function () {
\t\t\t\t\tthis.update();
\t\t\t\t}.bind(this));
\t\t\t\tchecking.resolve(false);
\t\t\t\treturn checking.promise;
\t\t\t}
\t\t}
\t}, {
\t\tkey: "trim",
\t\tvalue: function trim() {
\t\t\tvar task = new _core.defer();
\t\t\tvar displayed = this.views.displayed();
\t\t\tvar first = displayed[0];
\t\t\tvar last = displayed[displayed.length - 1];
\t\t\tvar firstIndex = this.views.indexOf(first);
\t\t\tvar lastIndex = this.views.indexOf(last);
\t\t\tvar above = this.views.slice(0, firstIndex);
\t\t\tvar below = this.views.slice(lastIndex + 1);

\t\t\t// Erase all but last above
\t\t\tfor (var i = 0; i < above.length - 1; i++) {
\t\t\t\tthis.erase(above[i], above);
\t\t\t}

\t\t\t// Erase all except first below
\t\t\tfor (var j = 1; j < below.length; j++) {
\t\t\t\tthis.erase(below[j]);
\t\t\t}

\t\t\ttask.resolve();
\t\t\treturn task.promise;
\t\t}
\t}, {
\t\tkey: "erase",
\t\tvalue: function erase(view, above) {
\t\t\t//Trim

\t\t\tvar prevTop;
\t\t\tvar prevLeft;

\t\t\tif (this.settings.height) {
\t\t\t\tprevTop = this.container.scrollTop;
\t\t\t\tprevLeft = this.container.scrollLeft;
\t\t\t} else {
\t\t\t\tprevTop = window.scrollY;
\t\t\t\tprevLeft = window.scrollX;
\t\t\t}

\t\t\tvar bounds = view.bounds();

\t\t\tthis.views.remove(view);

\t\t\tif (above) {
\t\t\t\tif (this.settings.axis === "vertical") {
\t\t\t\t\tthis.scrollTo(0, prevTop - bounds.height, true);
\t\t\t\t} else {
\t\t\t\t\tthis.scrollTo(prevLeft - bounds.width, 0, true);
\t\t\t\t}
\t\t\t}
\t\t}
\t}, {
\t\tkey: "addEventListeners",
\t\tvalue: function addEventListeners(stage) {

\t\t\twindow.addEventListener("unload", function (e) {
\t\t\t\tthis.ignore = true;
\t\t\t\t// this.scrollTo(0,0);
\t\t\t\tthis.destroy();
\t\t\t}.bind(this));

\t\t\tthis.addScrollListeners();
\t\t}
\t}, {
\t\tkey: "addScrollListeners",
\t\tvalue: function addScrollListeners() {
\t\t\tvar scroller;

\t\t\tthis.tick = _core.requestAnimationFrame;

\t\t\tif (this.settings.height) {
\t\t\t\tthis.prevScrollTop = this.container.scrollTop;
\t\t\t\tthis.prevScrollLeft = this.container.scrollLeft;
\t\t\t} else {
\t\t\t\tthis.prevScrollTop = window.scrollY;
\t\t\t\tthis.prevScrollLeft = window.scrollX;
\t\t\t}

\t\t\tthis.scrollDeltaVert = 0;
\t\t\tthis.scrollDeltaHorz = 0;

\t\t\tif (this.settings.height) {
\t\t\t\tscroller = this.container;
\t\t\t\tthis.scrollTop = this.container.scrollTop;
\t\t\t\tthis.scrollLeft = this.container.scrollLeft;
\t\t\t} else {
\t\t\t\tscroller = window;
\t\t\t\tthis.scrollTop = window.scrollY;
\t\t\t\tthis.scrollLeft = window.scrollX;
\t\t\t}

\t\t\tscroller.addEventListener("scroll", this.onScroll.bind(this));
\t\t\tthis._scrolled = (0, _debounce2.default)(this.scrolled.bind(this), 30);
\t\t\t// this.tick.call(window, this.onScroll.bind(this));

\t\t\tthis.didScroll = false;
\t\t}
\t}, {
\t\tkey: "removeEventListeners",
\t\tvalue: function removeEventListeners() {
\t\t\tvar scroller;

\t\t\tif (this.settings.height) {
\t\t\t\tscroller = this.container;
\t\t\t} else {
\t\t\t\tscroller = window;
\t\t\t}

\t\t\tscroller.removeEventListener("scroll", this.onScroll.bind(this));
\t\t}
\t}, {
\t\tkey: "onScroll",
\t\tvalue: function onScroll() {
\t\t\tvar scrollTop = void 0;
\t\t\tvar scrollLeft = void 0;
\t\t\tvar dir = this.settings.direction === "rtl" ? -1 : 1;

\t\t\tif (this.settings.height) {
\t\t\t\tscrollTop = this.container.scrollTop;
\t\t\t\tscrollLeft = this.container.scrollLeft;
\t\t\t} else {
\t\t\t\tscrollTop = window.scrollY * dir;
\t\t\t\tscrollLeft = window.scrollX * dir;
\t\t\t}

\t\t\tthis.scrollTop = scrollTop;
\t\t\tthis.scrollLeft = scrollLeft;

\t\t\tif (!this.ignore) {

\t\t\t\tthis._scrolled();
\t\t\t} else {
\t\t\t\tthis.ignore = false;
\t\t\t}

\t\t\tthis.scrollDeltaVert += Math.abs(scrollTop - this.prevScrollTop);
\t\t\tthis.scrollDeltaHorz += Math.abs(scrollLeft - this.prevScrollLeft);

\t\t\tthis.prevScrollTop = scrollTop;
\t\t\tthis.prevScrollLeft = scrollLeft;

\t\t\tclearTimeout(this.scrollTimeout);
\t\t\tthis.scrollTimeout = setTimeout(function () {
\t\t\t\tthis.scrollDeltaVert = 0;
\t\t\t\tthis.scrollDeltaHorz = 0;
\t\t\t}.bind(this), 150);

\t\t\tthis.didScroll = false;
\t\t}
\t}, {
\t\tkey: "scrolled",
\t\tvalue: function scrolled() {
\t\t\tthis.q.enqueue(function () {
\t\t\t\tthis.check();
\t\t\t}.bind(this));

\t\t\tthis.emit(_constants.EVENTS.MANAGERS.SCROLL, {
\t\t\t\ttop: this.scrollTop,
\t\t\t\tleft: this.scrollLeft
\t\t\t});

\t\t\tclearTimeout(this.afterScrolled);
\t\t\tthis.afterScrolled = setTimeout(function () {
\t\t\t\tthis.emit(_constants.EVENTS.MANAGERS.SCROLLED, {
\t\t\t\t\ttop: this.scrollTop,
\t\t\t\t\tleft: this.scrollLeft
\t\t\t\t});
\t\t\t}.bind(this));
\t\t}
\t}, {
\t\tkey: "next",
\t\tvalue: function next() {

\t\t\tvar dir = this.settings.direction;
\t\t\tvar delta = this.layout.props.name === "pre-paginated" && this.layout.props.spread ? this.layout.props.delta * 2 : this.layout.props.delta;

\t\t\tif (!this.views.length) return;

\t\t\tif (this.isPaginated && this.settings.axis === "horizontal") {

\t\t\t\tthis.scrollBy(delta, 0, true);
\t\t\t} else {

\t\t\t\tthis.scrollBy(0, this.layout.height, true);
\t\t\t}

\t\t\tthis.q.enqueue(function () {
\t\t\t\tthis.check();
\t\t\t}.bind(this));
\t\t}
\t}, {
\t\tkey: "prev",
\t\tvalue: function prev() {

\t\t\tvar dir = this.settings.direction;
\t\t\tvar delta = this.layout.props.name === "pre-paginated" && this.layout.props.spread ? this.layout.props.delta * 2 : this.layout.props.delta;

\t\t\tif (!this.views.length) return;

\t\t\tif (this.isPaginated && this.settings.axis === "horizontal") {

\t\t\t\tthis.scrollBy(-delta, 0, true);
\t\t\t} else {

\t\t\t\tthis.scrollBy(0, -this.layout.height, true);
\t\t\t}

\t\t\tthis.q.enqueue(function () {
\t\t\t\tthis.check();
\t\t\t}.bind(this));
\t\t}
\t}, {
\t\tkey: "updateAxis",
\t\tvalue: function updateAxis(axis, forceUpdate) {

\t\t\tif (!this.isPaginated) {
\t\t\t\taxis = "vertical";
\t\t\t}

\t\t\tif (!forceUpdate && axis === this.settings.axis) {
\t\t\t\treturn;
\t\t\t}

\t\t\tthis.settings.axis = axis;

\t\t\tthis.stage && this.stage.axis(axis);

\t\t\tthis.viewSettings.axis = axis;

\t\t\tif (this.mapping) {
\t\t\t\tthis.mapping.axis(axis);
\t\t\t}

\t\t\tif (this.layout) {
\t\t\t\tif (axis === "vertical") {
\t\t\t\t\tthis.layout.spread("none");
\t\t\t\t} else {
\t\t\t\t\tthis.layout.spread(this.layout.settings.spread);
\t\t\t\t}
\t\t\t}

\t\t\tif (axis === "vertical") {
\t\t\t\tthis.settings.infinite = true;
\t\t\t} else {
\t\t\t\tthis.settings.infinite = false;
\t\t\t}
\t\t}
\t}]);

\treturn ContinuousViewManager;
}(_default2.default);

exports.default = ContinuousViewManager;
module.exports = exports["default"];

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _book = __webpack_require__(26);

var _book2 = _interopRequireDefault(_book);

var _rendition = __webpack_require__(18);

var _rendition2 = _interopRequireDefault(_rendition);

var _epubcfi = __webpack_require__(1);

var _epubcfi2 = _interopRequireDefault(_epubcfi);

var _contents = __webpack_require__(13);

var _contents2 = _interopRequireDefault(_contents);

var _core = __webpack_require__(0);

var utils = _interopRequireWildcard(_core);

__webpack_require__(69);

var _iframe = __webpack_require__(20);

var _iframe2 = _interopRequireDefault(_iframe);

var _default = __webpack_require__(14);

var _default2 = _interopRequireDefault(_default);

var _continuous = __webpack_require__(24);

var _continuous2 = _interopRequireDefault(_continuous);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a new Book
 * @param {string|ArrayBuffer} url URL, Path or ArrayBuffer
 * @param {object} options to pass to the book
 * @returns {Book} a new Book object
 * @example ePub("/path/to/book.epub", {})
 */
function ePub(url, options) {
  return new _book2.default(url, options);
}

ePub.VERSION = "0.3";

if (typeof global !== "undefined") {
  global.EPUBJS_VERSION = ePub.VERSION;
}

ePub.Book = _book2.default;
ePub.Rendition = _rendition2.default;
ePub.Contents = _contents2.default;
ePub.CFI = _epubcfi2.default;
ePub.utils = utils;

exports.default = ePub;
module.exports = exports["default"];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
\tvalue: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _eventEmitter = __webpack_require__(2);

var _eventEmitter2 = _interopRequireDefault(_eventEmitter);

var _core = __webpack_require__(0);

var _url = __webpack_require__(5);

var _url2 = _interopRequireDefault(_url);

var _path = __webpack_require__(4);

var _path2 = _interopRequireDefault(_path);

var _spine = __webpack_require__(42);

var _spine2 = _interopRequireDefault(_spine);

var _locations = __webpack_require__(44);

var _locations2 = _interopRequireDefault(_locations);

var _container = __webpack_require__(45);

var _container2 = _interopRequireDefault(_container);

var _packaging = __webpack_require__(46);

var _packaging2 = _interopRequireDefault(_packaging);

var _navigation = __webpack_require__(47);

var _navigation2 = _interopRequireDefault(_navigation);

var _resources = __webpack_require__(48);

var _resources2 = _interopRequireDefault(_resources);

var _pagelist = __webpack_require__(49);

var _pagelist2 = _interopRequireDefault(_pagelist);

var _rendition = __webpack_require__(18);

var _rendition2 = _interopRequireDefault(_rendition);

var _archive = __webpack_require__(67);

var _archive2 = _interopRequireDefault(_archive);

var _request2 = __webpack_require__(11);

var _request3 = _interopRequireDefault(_request2);

var _epubcfi = __webpack_require__(1);

var _epubcfi2 = _interopRequireDefault(_epubcfi);

var _constants = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CONTAINER_PATH = "META-INF/container.xml";
var EPUBJS_VERSION = "0.3";

var INPUT_TYPE = {
\tBINARY: "binary",
\tBASE64: "base64",
\tEPUB: "epub",
\tOPF: "opf",
\tMANIFEST: "json",
\tDIRECTORY: "directory"
};

/**
 * An Epub representation with methods for the loading, parsing and manipulation
 * of its contents.
 * @class
 * @param {string} [url]
 * @param {object} [options]
 * @param {method} [options.requestMethod] a request function to use instead of the default
 * @param {boolean} [options.requestCredentials=undefined] send the xhr request withCredentials
 * @param {object} [options.requestHeaders=undefined] send the xhr request headers
 * @param {string} [options.encoding=binary] optional to pass 'binary' or base64' for archived Epubs
 * @param {string} [options.replacements=none] use base64, blobUrl, or none for replacing assets in archived Epubs
 * @param {method} [options.canonical] optional function to determine canonical urls for a path
 * @returns {Book}
 * @example new Book("/path/to/book.epub", {})
 * @example new Book({ replacements: "blobUrl" })
 */

var Book = function () {
\tfunction Book(url, options) {
\t\tvar _this = this;

\t\t_classCallCheck(this, Book);

\t\t// Allow passing just options to the Book
\t\tif (typeof options === "undefined" && (typeof url === "undefined" ? "undefined" : _typeof(url)) === "object") {
\t\t\toptions = url;
\t\t\turl = undefined;
\t\t}

\t\tthis.settings = (0, _core.extend)(this.settings || {}, {
\t\t\trequestMethod: undefined,
\t\t\trequestCredentials: undefined,
\t\t\trequestHeaders: undefined,
\t\t\tencoding: undefined,
\t\t\treplacements: undefined,
\t\t\tcanonical: undefined
\t\t});

\t\t(0, _core.extend)(this.settings, options);

\t\t// Promises
\t\tthis.opening = new _core.defer();
\t\t/**
   * @member {promise} opened returns after the book is loaded
   * @memberof Book
   */
\t\tthis.opened = this.opening.promise;
\t\tthis.isOpen = false;

\t\tthis.loading = {
\t\t\tmanifest: new _core.defer(),
\t\t\tspine: new _core.defer(),
\t\t\tmetadata: new _core.defer(),
\t\t\tcover: new _core.defer(),
\t\t\tnavigation: new _core.defer(),
\t\t\tpageList: new _core.defer(),
\t\t\tresources: new _core.defer()
\t\t};

\t\tthis.loaded = {
\t\t\tmanifest: this.loading.manifest.promise,
\t\t\tspine: this.loading.spine.promise,
\t\t\tmetadata: this.loading.metadata.promise,
\t\t\tcover: this.loading.cover.promise,
\t\t\tnavigation: this.loading.navigation.promise,
\t\t\tpageList: this.loading.pageList.promise,
\t\t\tresources: this.loading.resources.promise
\t\t};

\t\t/**
   * @member {promise} ready returns after the book is loaded and parsed
   * @memberof Book
   * @private
   */
\t\tthis.ready = Promise.all([this.loaded.manifest, this.loaded.spine, this.loaded.metadata, this.loaded.cover, this.loaded.navigation, this.loaded.resources]);

\t\t// Queue for methods used before opening
\t\tthis.isRendered = false;
\t\t// this._q = queue(this);

\t\t/**
   * @member {method} request
   * @memberof Book
   * @private
   */
\t\tthis.request = this.settings.requestMethod || _request3.default;

\t\t/**
   * @member {Spine} spine
   * @memberof Book
   */
\t\tthis.spine = new _spine2.default();

\t\t/**
   * @member {Locations} locations
   * @memberof Book
   */
\t\tthis.locations = new _locations2.default(this.spine, this.load.bind(this));

\t\t/**
   * @member {Navigation} navigation
   * @memberof Book
   */
\t\tthis.navigation = undefined;

\t\t/**
   * @member {PageList} pagelist
   * @memberof Book
   */
\t\tthis.pageList = undefined;

\t\t/**
   * @member {Url} url
   * @memberof Book
   * @private
   */
\t\tthis.url = undefined;

\t\t/**
   * @member {Path} path
   * @memberof Book
   * @private
   */
\t\tthis.path = undefined;

\t\t/**
   * @member {boolean} archived
   * @memberof Book
   * @private
   */
\t\tthis.archived = false;

\t\t/**
   * @member {Archive} archive
   * @memberof Book
   * @private
   */
\t\tthis.archive = undefined;

\t\t/**
   * @member {Resources} resources
   * @memberof Book
   * @private
   */
\t\tthis.resources = undefined;

\t\t/**
   * @member {Rendition} rendition
   * @memberof Book
   * @private
   */
\t\tthis.rendition = undefined;

\t\t/**
   * @member {Container} container
   * @memberof Book
   * @private
   */
\t\tthis.container = undefined;

\t\t/**
   * @member {Packaging} packaging
   * @memberof Book
   * @private
   */
\t\tthis.packaging = undefined;

\t\t// this.toc = undefined;

\t\tif (url) {
\t\t\tthis.open(url).catch(function (error) {
\t\t\t\tvar err = new Error("Cannot load book at " + url);
\t\t\t\t_this.emit(_constants.EVENTS.BOOK.OPEN_FAILED, err);
\t\t\t});
\t\t}
\t}

\t/**
  * Open a epub or url
  * @param {string | ArrayBuffer} input Url, Path or ArrayBuffer
  * @param {string} [what="binary", "base64", "epub", "opf", "json", "directory"] force opening as a certain type
  * @returns {Promise} of when the book has been loaded
  * @example book.open("/path/to/book.epub")
  */


\t_createClass(Book, [{
\t\tkey: "open",
\t\tvalue: function open(input, what) {
\t\t\tvar opening;
\t\t\tvar type = what || this.determineType(input);

\t\t\tif (type === INPUT_TYPE.BINARY) {
\t\t\t\tthis.archived = true;
\t\t\t\tthis.url = new _url2.default("/", "");
\t\t\t\topening = this.openEpub(input);
\t\t\t} else if (type === INPUT_TYPE.BASE64) {
\t\t\t\tthis.archived = true;
\t\t\t\tthis.url = new _url2.default("/", "");
\t\t\t\topening = this.openEpub(input, type);
\t\t\t} else if (type === INPUT_TYPE.EPUB) {
\t\t\t\tthis.archived = true;
\t\t\t\tthis.url = new _url2.default("/", "");
\t\t\t\topening = this.request(input, "binary").then(this.openEpub.bind(this));
\t\t\t} else if (type == INPUT_TYPE.OPF) {
\t\t\t\tthis.url = new _url2.default(input);
\t\t\t\topening = this.openPackaging(this.url.Path.toString());
\t\t\t} else if (type == INPUT_TYPE.MANIFEST) {
\t\t\t\tthis.url = new _url2.default(input);
\t\t\t\topening = this.openManifest(this.url.Path.toString());
\t\t\t} else {
\t\t\t\tthis.url = new _url2.default(input);
\t\t\t\topening = this.openContainer(CONTAINER_PATH).then(this.openPackaging.bind(this));
\t\t\t}

\t\t\treturn opening;
\t\t}

\t\t/**
   * Open an archived epub
   * @private
   * @param  {binary} data
   * @param  {string} [encoding]
   * @return {Promise}
   */

\t}, {
\t\tkey: "openEpub",
\t\tvalue: function openEpub(data, encoding) {
\t\t\tvar _this2 = this;

\t\t\treturn this.unarchive(data, encoding || this.settings.encoding).then(function () {
\t\t\t\treturn _this2.openContainer(CONTAINER_PATH);
\t\t\t}).then(function (packagePath) {
\t\t\t\treturn _this2.openPackaging(packagePath);
\t\t\t});
\t\t}

\t\t/**
   * Open the epub container
   * @private
   * @param  {string} url
   * @return {string} packagePath
   */

\t}, {
\t\tkey: "openContainer",
\t\tvalue: function openContainer(url) {
\t\t\tvar _this3 = this;

\t\t\treturn this.load(url).then(function (xml) {
\t\t\t\t_this3.container = new _container2.default(xml);
\t\t\t\treturn _this3.resolve(_this3.container.packagePath);
\t\t\t});
\t\t}

\t\t/**
   * Open the Open Packaging Format Xml
   * @private
   * @param  {string} url
   * @return {Promise}
   */

\t}, {
\t\tkey: "openPackaging",
\t\tvalue: function openPackaging(url) {
\t\t\tvar _this4 = this;

\t\t\tthis.path = new _path2.default(url);
\t\t\treturn this.load(url).then(function (xml) {
\t\t\t\t_this4.packaging = new _packaging2.default(xml);
\t\t\t\treturn _this4.unpack(_this4.packaging);
\t\t\t});
\t\t}

\t\t/**
   * Open the manifest JSON
   * @private
   * @param  {string} url
   * @return {Promise}
   */

\t}, {
\t\tkey: "openManifest",
\t\tvalue: function openManifest(url) {
\t\t\tvar _this5 = this;

\t\t\tthis.path = new _path2.default(url);
\t\t\treturn this.load(url).then(function (json) {
\t\t\t\t_this5.packaging = new _packaging2.default();
\t\t\t\t_this5.packaging.load(json);
\t\t\t\treturn _this5.unpack(_this5.packaging);
\t\t\t});
\t\t}

\t\t/**
   * Load a resource from the Book
   * @param  {string} path path to the resource to load
   * @return {Promise}     returns a promise with the requested resource
   */

\t}, {
\t\tkey: "load",
\t\tvalue: function load(path) {
\t\t\tvar resolved;

\t\t\tif (this.archived) {
\t\t\t\tresolved = this.resolve(path);
\t\t\t\treturn this.archive.request(resolved);
\t\t\t} else {
\t\t\t\tresolved = this.resolve(path);
\t\t\t\treturn this.request(resolved, null, this.settings.requestCredentials, this.settings.requestHeaders);
\t\t\t}
\t\t}

\t\t/**
   * Resolve a path to it's absolute position in the Book
   * @param  {string} path
   * @param  {boolean} [absolute] force resolving the full URL
   * @return {string}          the resolved path string
   */

\t}, {
\t\tkey: "resolve",
\t\tvalue: function resolve(path, absolute) {
\t\t\tif (!path) {
\t\t\t\treturn;
\t\t\t}
\t\t\tvar resolved = path;
\t\t\tvar isAbsolute = path.indexOf("://") > -1;

\t\t\tif (isAbsolute) {
\t\t\t\treturn path;
\t\t\t}

\t\t\tif (this.path) {
\t\t\t\tresolved = this.path.resolve(path);
\t\t\t}

\t\t\tif (absolute != false && this.url) {
\t\t\t\tresolved = this.url.resolve(resolved);
\t\t\t}

\t\t\treturn resolved;
\t\t}

\t\t/**
   * Get a canonical link to a path
   * @param  {string} path
   * @return {string} the canonical path string
   */

\t}, {
\t\tkey: "canonical",
\t\tvalue: function canonical(path) {
\t\t\tvar url = path;

\t\t\tif (!path) {
\t\t\t\treturn "";
\t\t\t}

\t\t\tif (this.settings.canonical) {
\t\t\t\turl = this.settings.canonical(path);
\t\t\t} else {
\t\t\t\turl = this.resolve(path, true);
\t\t\t}

\t\t\treturn url;
\t\t}

\t\t/**
   * Determine the type of they input passed to open
   * @private
   * @param  {string} input
   * @return {string}  binary | directory | epub | opf
   */

\t}, {
\t\tkey: "determineType",
\t\tvalue: function determineType(input) {
\t\t\tvar url;
\t\t\tvar path;
\t\t\tvar extension;

\t\t\tif (this.settings.encoding === "base64") {
\t\t\t\treturn INPUT_TYPE.BASE64;
\t\t\t}

\t\t\tif (typeof input != "string") {
\t\t\t\treturn INPUT_TYPE.BINARY;
\t\t\t}

\t\t\turl = new _url2.default(input);
\t\t\tpath = url.path();
\t\t\textension = path.extension;

\t\t\tif (!extension) {
\t\t\t\treturn INPUT_TYPE.DIRECTORY;
\t\t\t}

\t\t\tif (extension === "epub") {
\t\t\t\treturn INPUT_TYPE.EPUB;
\t\t\t}

\t\t\tif (extension === "opf") {
\t\t\t\treturn INPUT_TYPE.OPF;
\t\t\t}

\t\t\tif (extension === "json") {
\t\t\t\treturn INPUT_TYPE.MANIFEST;
\t\t\t}
\t\t}

\t\t/**
   * unpack the contents of the Books packageXml
   * @private
   * @param {document} packageXml XML Document
   */

\t}, {
\t\tkey: "unpack",
\t\tvalue: function unpack(opf) {
\t\t\tvar _this6 = this;

\t\t\tthis.package = opf;

\t\t\tthis.spine.unpack(this.package, this.resolve.bind(this), this.canonical.bind(this));

\t\t\tthis.resources = new _resources2.default(this.package.manifest, {
\t\t\t\tarchive: this.archive,
\t\t\t\tresolver: this.resolve.bind(this),
\t\t\t\trequest: this.request.bind(this),
\t\t\t\treplacements: this.settings.replacements || (this.archived ? "blobUrl" : "base64")
\t\t\t});

\t\t\tthis.loadNavigation(this.package).then(function () {
\t\t\t\t// this.toc = this.navigation.toc;
\t\t\t\t_this6.loading.navigation.resolve(_this6.navigation);
\t\t\t});

\t\t\tif (this.package.coverPath) {
\t\t\t\tthis.cover = this.resolve(this.package.coverPath);
\t\t\t}
\t\t\t// Resolve promises
\t\t\tthis.loading.manifest.resolve(this.package.manifest);
\t\t\tthis.loading.metadata.resolve(this.package.metadata);
\t\t\tthis.loading.spine.resolve(this.spine);
\t\t\tthis.loading.cover.resolve(this.cover);
\t\t\tthis.loading.resources.resolve(this.resources);
\t\t\tthis.loading.pageList.resolve(this.pageList);

\t\t\tthis.isOpen = true;

\t\t\tif (this.archived || this.settings.replacements && this.settings.replacements != "none") {
\t\t\t\tthis.replacements().then(function () {
\t\t\t\t\t_this6.opening.resolve(_this6);
\t\t\t\t}).catch(function (err) {
\t\t\t\t\tconsole.error(err);
\t\t\t\t});
\t\t\t} else {
\t\t\t\t// Resolve book opened promise
\t\t\t\tthis.opening.resolve(this);
\t\t\t}
\t\t}

\t\t/**
   * Load Navigation and PageList from package
   * @private
   * @param {document} opf XML Document
   */

\t}, {
\t\tkey: "loadNavigation",
\t\tvalue: function loadNavigation(opf) {
\t\t\tvar _this7 = this;

\t\t\tvar navPath = opf.navPath || opf.ncxPath;
\t\t\tvar toc = opf.toc;

\t\t\t// From json manifest
\t\t\tif (toc) {
\t\t\t\treturn new Promise(function (resolve, reject) {
\t\t\t\t\t_this7.navigation = new _navigation2.default(toc);

\t\t\t\t\tif (opf.pageList) {
\t\t\t\t\t\t_this7.pageList = new _pagelist2.default(opf.pageList); // TODO: handle page lists from Manifest
\t\t\t\t\t}

\t\t\t\t\tresolve(_this7.navigation);
\t\t\t\t});
\t\t\t}

\t\t\tif (!navPath) {
\t\t\t\treturn new Promise(function (resolve, reject) {
\t\t\t\t\t_this7.navigation = new _navigation2.default();
\t\t\t\t\t_this7.pageList = new _pagelist2.default();

\t\t\t\t\tresolve(_this7.navigation);
\t\t\t\t});
\t\t\t}

\t\t\treturn this.load(navPath, "xml").then(function (xml) {
\t\t\t\t_this7.navigation = new _navigation2.default(xml);
\t\t\t\t_this7.pageList = new _pagelist2.default(xml);
\t\t\t\treturn _this7.navigation;
\t\t\t});
\t\t}

\t\t/**
   * Gets a Section of the Book from the Spine
   * Alias for \`book.spine.get\`
   * @param {string} target
   * @return {Section}
   */

\t}, {
\t\tkey: "section",
\t\tvalue: function section(target) {
\t\t\treturn this.spine.get(target);
\t\t}

\t\t/**
   * Sugar to render a book to an element
   * @param  {element | string} element element or string to add a rendition to
   * @param  {object} [options]
   * @return {Rendition}
   */

\t}, {
\t\tkey: "renderTo",
\t\tvalue: function renderTo(element, options) {
\t\t\tthis.rendition = new _rendition2.default(this, options);
\t\t\tthis.rendition.attachTo(element);

\t\t\treturn this.rendition;
\t\t}

\t\t/**
   * Set if request should use withCredentials
   * @param {boolean} credentials
   */

\t}, {
\t\tkey: "setRequestCredentials",
\t\tvalue: function setRequestCredentials(credentials) {
\t\t\tthis.settings.requestCredentials = credentials;
\t\t}

\t\t/**
   * Set headers request should use
   * @param {object} headers
   */

\t}, {
\t\tkey: "setRequestHeaders",
\t\tvalue: function setRequestHeaders(headers) {
\t\t\tthis.settings.requestHeaders = headers;
\t\t}

\t\t/**
   * Unarchive a zipped epub
   * @private
   * @param  {binary} input epub data
   * @param  {string} [encoding]
   * @return {Archive}
   */

\t}, {
\t\tkey: "unarchive",
\t\tvalue: function unarchive(input, encoding) {
\t\t\tthis.archive = new _archive2.default();
\t\t\treturn this.archive.open(input, encoding);
\t\t}

\t\t/**
   * Get the cover url
   * @return {string} coverUrl
   */

\t}, {
\t\tkey: "coverUrl",
\t\tvalue: function coverUrl() {
\t\t\tvar _this8 = this;

\t\t\tvar retrieved = this.loaded.cover.then(function (url) {
\t\t\t\tif (_this8.archived) {
\t\t\t\t\t// return this.archive.createUrl(this.cover);
\t\t\t\t\treturn _this8.resources.get(_this8.cover);
\t\t\t\t} else {
\t\t\t\t\treturn _this8.cover;
\t\t\t\t}
\t\t\t});

\t\t\treturn retrieved;
\t\t}

\t\t/**
   * Load replacement urls
   * @private
   * @return {Promise} completed loading urls
   */

\t}, {
\t\tkey: "replacements",
\t\tvalue: function replacements() {
\t\t\tvar _this9 = this;

\t\t\tthis.spine.hooks.serialize.register(function (output, section) {
\t\t\t\tsection.output = _this9.resources.substitute(output, section.url);
\t\t\t});

\t\t\treturn this.resources.replacements().then(function () {
\t\t\t\treturn _this9.resources.replaceCss();
\t\t\t});
\t\t}

\t\t/**
   * Find a DOM Range for a given CFI Range
   * @param  {EpubCFI} cfiRange a epub cfi range
   * @return {Range}
   */

\t}, {
\t\tkey: "getRange",
\t\tvalue: function getRange(cfiRange) {
\t\t\tvar cfi = new _epubcfi2.default(cfiRange);
\t\t\tvar item = this.spine.get(cfi.spinePos);
\t\t\tvar _request = this.load.bind(this);
\t\t\tif (!item) {
\t\t\t\treturn new Promise(function (resolve, reject) {
\t\t\t\t\treject("CFI could not be found");
\t\t\t\t});
\t\t\t}
\t\t\treturn item.load(_request).then(function (contents) {
\t\t\t\tvar range = cfi.toRange(item.document);
\t\t\t\treturn range;
\t\t\t});
\t\t}

\t\t/**
   * Generates the Book Key using the identifer in the manifest or other string provided
   * @param  {string} [identifier] to use instead of metadata identifier
   * @return {string} key
   */

\t}, {
\t\tkey: "key",
\t\tvalue: function key(identifier) {
\t\t\tvar ident = identifier || this.package.metadata.identifier || this.url.filename;
\t\t\treturn "epubjs:" + EPUBJS_VERSION + ":" + ident;
\t\t}

\t\t/**
   * Destroy the Book and all associated objects
   */

\t}, {
\t\tkey: "destroy",
\t\tvalue: function destroy() {
\t\t\tthis.opened = undefined;
\t\t\tthis.loading = undefined;
\t\t\tthis.loaded = undefined;
\t\t\tthis.ready = undefined;

\t\t\tthis.isOpen = false;
\t\t\tthis.isRendered = false;

\t\t\tthis.spine && this.spine.destroy();
\t\t\tthis.locations && this.locations.destroy();
\t\t\tthis.pageList && this.pageList.destroy();
\t\t\tthis.archive && this.archive.destroy();
\t\t\tthis.resources && this.resources.destroy();
\t\t\tthis.container && this.container.destroy();
\t\t\tthis.packaging && this.packaging.destroy();
\t\t\tthis.rendition && this.rendition.destroy();

\t\t\tthis.spine = undefined;
\t\t\tthis.locations = undefined;
\t\t\tthis.pageList = undefined;
\t\t\tthis.archive = undefined;
\t\t\tthis.resources = undefined;
\t\t\tthis.container = undefined;
\t\t\tthis.packaging = undefined;
\t\t\tthis.rendition = undefined;

\t\t\tthis.navigation = undefined;
\t\t\tthis.url = undefined;
\t\t\tthis.path = undefined;
\t\t\tthis.archived = false;
\t\t}
\t}]);

\treturn Book;
}();

//-- Enable binding events to book


(0, _eventEmitter2.default)(Book.prototype);

exports.default = Book;
module.exports = exports["default"];

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assign        = __webpack_require__(28)
  , normalizeOpts = __webpack_require__(36)
  , isCallable    = __webpack_require__(37)
  , contains      = __webpack_require__(38)

  , d;

d = module.exports = function (dscr, value/*, options*/) {
\tvar c, e, w, options, desc;
\tif ((arguments.length < 2) || (typeof dscr !== 'string')) {
\t\toptions = value;
\t\tvalue = dscr;
\t\tdscr = null;
\t} else {
\t\toptions = arguments[2];
\t}
\tif (dscr == null) {
\t\tc = w = true;
\t\te = false;
\t} else {
\t\tc = contains.call(dscr, 'c');
\t\te = contains.call(dscr, 'e');
\t\tw = contains.call(dscr, 'w');
\t}

\tdesc = { value: value, configurable: c, enumerable: e, writable: w };
\treturn !options ? desc : assign(normalizeOpts(options), desc);
};

d.gs = function (dscr, get, set/*, options*/) {
\tvar c, e, options, desc;
\tif (typeof dscr !== 'string') {
\t\toptions = set;
\t\tset = get;
\t\tget = dscr;
\t\tdscr = null;
\t} else {
\t\toptions = arguments[3];
\t}
\tif (get == null) {
\t\tget = undefined;
\t} else if (!isCallable(get)) {
\t\toptions = get;
\t\tget = set = undefined;
\t} else if (set == null) {
\t\tset = undefined;
\t} else if (!isCallable(set)) {
\t\toptions = set;
\t\tset = undefined;
\t}
\tif (dscr == null) {
\t\tc = true;
\t\te = false;
\t} else {
\t\tc = contains.call(dscr, 'c');
\t\te = contains.call(dscr, 'e');
\t}

\tdesc = { get: get, set: set, configurable: c, enumerable: e };
\treturn !options ? desc : assign(normalizeOpts(options), desc);
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(29)()
\t? Object.assign
\t: __webpack_require__(30);


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
\tvar assign = Object.assign, obj;
\tif (typeof assign !== "function") return false;
\tobj = { foo: "raz" };
\tassign(obj, { bar: "dwa" }, { trzy: "trzy" });
\treturn (obj.foo + obj.bar + obj.trzy) === "razdwatrzy";
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys  = __webpack_require__(31)
  , value = __webpack_require__(35)
  , max   = Math.max;

module.exports = function (dest, src /*, …srcn*/) {
\tvar error, i, length = max(arguments.length, 2), assign;
\tdest = Object(value(dest));
\tassign = function (key) {
\t\ttry {
\t\t\tdest[key] = src[key];
\t\t} catch (e) {
\t\t\tif (!error) error = e;
\t\t}
\t};
\tfor (i = 1; i < length; ++i) {
\t\tsrc = arguments[i];
\t\tkeys(src).forEach(assign);
\t}
\tif (error !== undefined) throw error;
\treturn dest;
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(32)()
\t? Object.keys
\t: __webpack_require__(33);


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
\ttry {
\t\tObject.keys("primitive");
\t\treturn true;
\t} catch (e) {
 return false;
}
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue = __webpack_require__(9);

var keys = Object.keys;

module.exports = function (object) {
\treturn keys(isValue(object) ? Object(object) : object);
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// eslint-disable-next-line no-empty-function
module.exports = function () {};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue = __webpack_require__(9);

module.exports = function (value) {
\tif (!isValue(value)) throw new TypeError("Cannot use null or undefined");
\treturn value;
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue = __webpack_require__(9);

var forEach = Array.prototype.forEach, create = Object.create;

var process = function (src, obj) {
\tvar key;
\tfor (key in src) obj[key] = src[key];
};

// eslint-disable-next-line no-unused-vars
module.exports = function (opts1 /*, …options*/) {
\tvar result = create(null);
\tforEach.call(arguments, function (options) {
\t\tif (!isValue(options)) return;
\t\tprocess(Object(options), result);
\t});
\treturn result;
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Deprecated



module.exports = function (obj) {
 return typeof obj === "function";
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(39)()
\t? String.prototype.contains
\t: __webpack_require__(40);


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var str = "razdwatrzy";

module.exports = function () {
\tif (typeof str.contains !== "function") return false;
\treturn (str.contains("dwa") === true) && (str.contains("foo") === false);
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var indexOf = String.prototype.indexOf;

module.exports = function (searchString/*, position*/) {
\treturn indexOf.call(this, searchString, arguments[1]) > -1;
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (fn) {
\tif (typeof fn !== "function") throw new TypeError(fn + " is not a function");
\treturn fn;
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
\tvalue: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _epubcfi = __webpack_require__(1);

var _epubcfi2 = _interopRequireDefault(_epubcfi);

var _hook = __webpack_require__(10);

var _hook2 = _interopRequireDefault(_hook);

var _section = __webpack_require__(43);

var _section2 = _interopRequireDefault(_section);

var _replacements = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * A collection of Spine Items
 */
var Spine = function () {
\tfunction Spine() {
\t\t_classCallCheck(this, Spine);

\t\tthis.spineItems = [];
\t\tthis.spineByHref = {};
\t\tthis.spineById = {};

\t\tthis.hooks = {};
\t\tthis.hooks.serialize = new _hook2.default();
\t\tthis.hooks.content = new _hook2.default();

\t\t// Register replacements
\t\tthis.hooks.content.register(_replacements.replaceBase);
\t\tthis.hooks.content.register(_replacements.replaceCanonical);
\t\tthis.hooks.content.register(_replacements.replaceMeta);

\t\tthis.epubcfi = new _epubcfi2.default();

\t\tthis.loaded = false;

\t\tthis.items = undefined;
\t\tthis.manifest = undefined;
\t\tthis.spineNodeIndex = undefined;
\t\tthis.baseUrl = undefined;
\t\tthis.length = undefined;
\t}

\t/**
  * Unpack items from a opf into spine items
  * @param  {Package} _package
  * @param  {method} resolver URL resolver
  */


\t_createClass(Spine, [{
\t\tkey: "unpack",
\t\tvalue: function unpack(_package, resolver, canonical) {
\t\t\tvar _this = this;

\t\t\tthis.items = _package.spine;
\t\t\tthis.manifest = _package.manifest;
\t\t\tthis.spineNodeIndex = _package.spineNodeIndex;
\t\t\tthis.baseUrl = _package.baseUrl || _package.basePath || "";
\t\t\tthis.length = this.items.length;

\t\t\tthis.items.forEach(function (item, index) {
\t\t\t\tvar manifestItem = _this.manifest[item.idref];
\t\t\t\tvar spineItem;

\t\t\t\titem.index = index;
\t\t\t\titem.cfiBase = _this.epubcfi.generateChapterComponent(_this.spineNodeIndex, item.index, item.idref);

\t\t\t\tif (item.href) {
\t\t\t\t\titem.url = resolver(item.href, true);
\t\t\t\t\titem.canonical = canonical(item.href);
\t\t\t\t}

\t\t\t\tif (manifestItem) {
\t\t\t\t\titem.href = manifestItem.href;
\t\t\t\t\titem.url = resolver(item.href, true);
\t\t\t\t\titem.canonical = canonical(item.href);

\t\t\t\t\tif (manifestItem.properties.length) {
\t\t\t\t\t\titem.properties.push.apply(item.properties, manifestItem.properties);
\t\t\t\t\t}
\t\t\t\t}

\t\t\t\tif (item.linear === "yes") {
\t\t\t\t\titem.prev = function () {
\t\t\t\t\t\tvar prevIndex = item.index;
\t\t\t\t\t\twhile (prevIndex > 0) {
\t\t\t\t\t\t\tvar prev = this.get(prevIndex - 1);
\t\t\t\t\t\t\tif (prev && prev.linear) {
\t\t\t\t\t\t\t\treturn prev;
\t\t\t\t\t\t\t}
\t\t\t\t\t\t\tprevIndex -= 1;
\t\t\t\t\t\t}
\t\t\t\t\t\treturn;
\t\t\t\t\t}.bind(_this);
\t\t\t\t\titem.next = function () {
\t\t\t\t\t\tvar nextIndex = item.index;
\t\t\t\t\t\twhile (nextIndex < this.spineItems.length - 1) {
\t\t\t\t\t\t\tvar next = this.get(nextIndex + 1);
\t\t\t\t\t\t\tif (next && next.linear) {
\t\t\t\t\t\t\t\treturn next;
\t\t\t\t\t\t\t}
\t\t\t\t\t\t\tnextIndex += 1;
\t\t\t\t\t\t}
\t\t\t\t\t\treturn;
\t\t\t\t\t}.bind(_this);
\t\t\t\t} else {
\t\t\t\t\titem.prev = function () {
\t\t\t\t\t\treturn;
\t\t\t\t\t};
\t\t\t\t\titem.next = function () {
\t\t\t\t\t\treturn;
\t\t\t\t\t};
\t\t\t\t}

\t\t\t\tspineItem = new _section2.default(item, _this.hooks);

\t\t\t\t_this.append(spineItem);
\t\t\t});

\t\t\tthis.loaded = true;
\t\t}

\t\t/**
   * Get an item from the spine
   * @param  {string|int} [target]
   * @return {Section} section
   * @example spine.get();
   * @example spine.get(1);
   * @example spine.get("chap1.html");
   * @example spine.get("#id1234");
   */

\t}, {
\t\tkey: "get",
\t\tvalue: function get(target) {
\t\t\tvar index = 0;

\t\t\tif (typeof target === "undefined") {
\t\t\t\twhile (index < this.spineItems.length) {
\t\t\t\t\tvar next = this.spineItems[index];
\t\t\t\t\tif (next && next.linear) {
\t\t\t\t\t\tbreak;
\t\t\t\t\t}
\t\t\t\t\tindex += 1;
\t\t\t\t}
\t\t\t} else if (this.epubcfi.isCfiString(target)) {
\t\t\t\tvar cfi = new _epubcfi2.default(target);
\t\t\t\tindex = cfi.spinePos;
\t\t\t} else if (typeof target === "number" || isNaN(target) === false) {
\t\t\t\tindex = target;
\t\t\t} else if (typeof target === "string" && target.indexOf("#") === 0) {
\t\t\t\tindex = this.spineById[target.substring(1)];
\t\t\t} else if (typeof target === "string") {
\t\t\t\t// Remove fragments
\t\t\t\ttarget = target.split("#")[0];
\t\t\t\tindex = this.spineByHref[target] || this.spineByHref[encodeURI(target)];
\t\t\t}

\t\t\treturn this.spineItems[index] || null;
\t\t}

\t\t/**
   * Append a Section to the Spine
   * @private
   * @param  {Section} section
   */

\t}, {
\t\tkey: "append",
\t\tvalue: function append(section) {
\t\t\tvar index = this.spineItems.length;
\t\t\tsection.index = index;

\t\t\tthis.spineItems.push(section);

\t\t\t// Encode and Decode href lookups
\t\t\t// see pr for details: https://github.com/futurepress/epub.js/pull/358
\t\t\tthis.spineByHref[decodeURI(section.href)] = index;
\t\t\tthis.spineByHref[encodeURI(section.href)] = index;
\t\t\tthis.spineByHref[section.href] = index;

\t\t\tthis.spineById[section.idref] = index;

\t\t\treturn index;
\t\t}

\t\t/**
   * Prepend a Section to the Spine
   * @private
   * @param  {Section} section
   */

\t}, {
\t\tkey: "prepend",
\t\tvalue: function prepend(section) {
\t\t\t// var index = this.spineItems.unshift(section);
\t\t\tthis.spineByHref[section.href] = 0;
\t\t\tthis.spineById[section.idref] = 0;

\t\t\t// Re-index
\t\t\tthis.spineItems.forEach(function (item, index) {
\t\t\t\titem.index = index;
\t\t\t});

\t\t\treturn 0;
\t\t}

\t\t// insert(section, index) {
\t\t//
\t\t// };

\t\t/**
   * Remove a Section from the Spine
   * @private
   * @param  {Section} section
   */

\t}, {
\t\tkey: "remove",
\t\tvalue: function remove(section) {
\t\t\tvar index = this.spineItems.indexOf(section);

\t\t\tif (index > -1) {
\t\t\t\tdelete this.spineByHref[section.href];
\t\t\t\tdelete this.spineById[section.idref];

\t\t\t\treturn this.spineItems.splice(index, 1);
\t\t\t}
\t\t}

\t\t/**
   * Loop over the Sections in the Spine
   * @return {method} forEach
   */

\t}, {
\t\tkey: "each",
\t\tvalue: function each() {
\t\t\treturn this.spineItems.forEach.apply(this.spineItems, arguments);
\t\t}
\t}, {
\t\tkey: "first",
\t\tvalue: function first() {
\t\t\tvar index = 0;

\t\t\tdo {
\t\t\t\tvar next = this.get(index);

\t\t\t\tif (next && next.linear) {
\t\t\t\t\treturn next;
\t\t\t\t}
\t\t\t\tindex += 1;
\t\t\t} while (index < this.spineItems.length);
\t\t}
\t}, {
\t\tkey: "last",
\t\tvalue: function last() {
\t\t\tvar index = this.spineItems.length - 1;

\t\t\tdo {
\t\t\t\tvar prev = this.get(index);
\t\t\t\tif (prev && prev.linear) {
\t\t\t\t\treturn prev;
\t\t\t\t}
\t\t\t\tindex -= 1;
\t\t\t} while (index >= 0);
\t\t}
\t}, {
\t\tkey: "destroy",
\t\tvalue: function destroy() {
\t\t\tthis.each(function (section) {
\t\t\t\treturn section.destroy();
\t\t\t});

\t\t\tthis.spineItems = undefined;
\t\t\tthis.spineByHref = undefined;
\t\t\tthis.spineById = undefined;

\t\t\tthis.hooks.serialize.clear();
\t\t\tthis.hooks.content.clear();
\t\t\tthis.hooks = undefined;

\t\t\tthis.epubcfi = undefined;

\t\t\tthis.loaded = false;

\t\t\tthis.items = undefined;
\t\t\tthis.manifest = undefined;
\t\t\tthis.spineNodeIndex = undefined;
\t\t\tthis.baseUrl = undefined;
\t\t\tthis.length = undefined;
\t\t}
\t}]);

\treturn Spine;
}();

exports.default = Spine;
module.exports = exports["default"];

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
\tvalue: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _core = __webpack_require__(0);

var _epubcfi = __webpack_require__(1);

var _epubcfi2 = _interopRequireDefault(_epubcfi);

var _hook = __webpack_require__(10);

var _hook2 = _interopRequireDefault(_hook);

var _replacements = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Represents a Section of the Book
 *
 * In most books this is equivelent to a Chapter
 * @param {object} item  The spine item representing the section
 * @param {object} hooks hooks for serialize and content
 */
var Section = function () {
\tfunction Section(item, hooks) {
\t\t_classCallCheck(this, Section);

\t\tthis.idref = item.idref;
\t\tthis.linear = item.linear === "yes";
\t\tthis.properties = item.properties;
\t\tthis.index = item.index;
\t\tthis.href = item.href;
\t\tthis.url = item.url;
\t\tthis.canonical = item.canonical;
\t\tthis.next = item.next;
\t\tthis.prev = item.prev;

\t\tthis.cfiBase = item.cfiBase;

\t\tif (hooks) {
\t\t\tthis.hooks = hooks;
\t\t} else {
\t\t\tthis.hooks = {};
\t\t\tthis.hooks.serialize = new _hook2.default(this);
\t\t\tthis.hooks.content = new _hook2.default(this);
\t\t}

\t\tthis.document = undefined;
\t\tthis.contents = undefined;
\t\tthis.output = undefined;
\t}

\t/**
  * Load the section from its url
  * @param  {method} _request a request method to use for loading
  * @return {document} a promise with the xml document
  */


\t_createClass(Section, [{
\t\tkey: "load",
\t\tvalue: function load(_request) {
\t\t\tvar request = _request || this.request || __webpack_require__(11);
\t\t\tvar loading = new _core.defer();
\t\t\tvar loaded = loading.promise;

\t\t\tif (this.contents) {
\t\t\t\tloading.resolve(this.contents);
\t\t\t} else {
\t\t\t\trequest(this.url).then(function (xml) {
\t\t\t\t\t// var directory = new Url(this.url).directory;

\t\t\t\t\tthis.document = xml;
\t\t\t\t\tthis.contents = xml.documentElement;

\t\t\t\t\treturn this.hooks.content.trigger(this.document, this);
\t\t\t\t}.bind(this)).then(function () {
\t\t\t\t\tloading.resolve(this.contents);
\t\t\t\t}.bind(this)).catch(function (error) {
\t\t\t\t\tloading.reject(error);
\t\t\t\t});
\t\t\t}

\t\t\treturn loaded;
\t\t}

\t\t/**
   * Adds a base tag for resolving urls in the section
   * @private
   */

\t}, {
\t\tkey: "base",
\t\tvalue: function base() {
\t\t\treturn (0, _replacements.replaceBase)(this.document, this);
\t\t}

\t\t/**
   * Render the contents of a section
   * @param  {method} _request a request method to use for loading
   * @return {string} output a serialized XML Document
   */

\t}, {
\t\tkey: "render",
\t\tvalue: function render(_request) {
\t\t\tvar rendering = new _core.defer();
\t\t\tvar rendered = rendering.promise;
\t\t\tthis.output; // TODO: better way to return this from hooks?

\t\t\tthis.load(_request).then(function (contents) {
\t\t\t\tvar userAgent = typeof navigator !== 'undefined' && navigator.userAgent || '';
\t\t\t\tvar isIE = userAgent.indexOf('Trident') >= 0;
\t\t\t\tvar Serializer;
\t\t\t\tif (typeof XMLSerializer === "undefined" || isIE) {
\t\t\t\t\tSerializer = __webpack_require__(16).XMLSerializer;
\t\t\t\t} else {
\t\t\t\t\tSerializer = XMLSerializer;
\t\t\t\t}
\t\t\t\tvar serializer = new Serializer();
\t\t\t\tthis.output = serializer.serializeToString(contents);
\t\t\t\treturn this.output;
\t\t\t}.bind(this)).then(function () {
\t\t\t\treturn this.hooks.serialize.trigger(this.output, this);
\t\t\t}.bind(this)).then(function () {
\t\t\t\trendering.resolve(this.output);
\t\t\t}.bind(this)).catch(function (error) {
\t\t\t\trendering.reject(error);
\t\t\t});

\t\t\treturn rendered;
\t\t}

\t\t/**
   * Find a string in a section
   * @param  {string} _query The query string to find
   * @return {object[]} A list of matches, with form {cfi, excerpt}
   */

\t}, {
\t\tkey: "find",
\t\tvalue: function find(_query) {
\t\t\tvar section = this;
\t\t\tvar matches = [];
\t\t\tvar query = _query.toLowerCase();
\t\t\tvar find = function find(node) {
\t\t\t\tvar text = node.textContent.toLowerCase();
\t\t\t\tvar range = section.document.createRange();
\t\t\t\tvar cfi;
\t\t\t\tvar pos;
\t\t\t\tvar last = -1;
\t\t\t\tvar excerpt;
\t\t\t\tvar limit = 150;

\t\t\t\twhile (pos != -1) {
\t\t\t\t\t// Search for the query
\t\t\t\t\tpos = text.indexOf(query, last + 1);

\t\t\t\t\tif (pos != -1) {
\t\t\t\t\t\t// We found it! Generate a CFI
\t\t\t\t\t\trange = section.document.createRange();
\t\t\t\t\t\trange.setStart(node, pos);
\t\t\t\t\t\trange.setEnd(node, pos + query.length);

\t\t\t\t\t\tcfi = section.cfiFromRange(range);

\t\t\t\t\t\t// Generate the excerpt
\t\t\t\t\t\tif (node.textContent.length < limit) {
\t\t\t\t\t\t\texcerpt = node.textContent;
\t\t\t\t\t\t} else {
\t\t\t\t\t\t\texcerpt = node.textContent.substring(pos - limit / 2, pos + limit / 2);
\t\t\t\t\t\t\texcerpt = "..." + excerpt + "...";
\t\t\t\t\t\t}

\t\t\t\t\t\t// Add the CFI to the matches list
\t\t\t\t\t\tmatches.push({
\t\t\t\t\t\t\tcfi: cfi,
\t\t\t\t\t\t\texcerpt: excerpt
\t\t\t\t\t\t});
\t\t\t\t\t}

\t\t\t\t\tlast = pos;
\t\t\t\t}
\t\t\t};

\t\t\t(0, _core.sprint)(section.document, function (node) {
\t\t\t\tfind(node);
\t\t\t});

\t\t\treturn matches;
\t\t}
\t}, {
\t\tkey: "reconcileLayoutSettings",


\t\t/**
  * Reconciles the current chapters layout properies with
  * the global layout properities.
  * @param {object} global  The globa layout settings object, chapter properties string
  * @return {object} layoutProperties Object with layout properties
  */
\t\tvalue: function reconcileLayoutSettings(global) {
\t\t\t//-- Get the global defaults
\t\t\tvar settings = {
\t\t\t\tlayout: global.layout,
\t\t\t\tspread: global.spread,
\t\t\t\torientation: global.orientation
\t\t\t};

\t\t\t//-- Get the chapter's display type
\t\t\tthis.properties.forEach(function (prop) {
\t\t\t\tvar rendition = prop.replace("rendition:", "");
\t\t\t\tvar split = rendition.indexOf("-");
\t\t\t\tvar property, value;

\t\t\t\tif (split != -1) {
\t\t\t\t\tproperty = rendition.slice(0, split);
\t\t\t\t\tvalue = rendition.slice(split + 1);

\t\t\t\t\tsettings[property] = value;
\t\t\t\t}
\t\t\t});
\t\t\treturn settings;
\t\t}

\t\t/**
   * Get a CFI from a Range in the Section
   * @param  {range} _range
   * @return {string} cfi an EpubCFI string
   */

\t}, {
\t\tkey: "cfiFromRange",
\t\tvalue: function cfiFromRange(_range) {
\t\t\treturn new _epubcfi2.default(_range, this.cfiBase).toString();
\t\t}

\t\t/**
   * Get a CFI from an Element in the Section
   * @param  {element} el
   * @return {string} cfi an EpubCFI string
   */

\t}, {
\t\tkey: "cfiFromElement",
\t\tvalue: function cfiFromElement(el) {
\t\t\treturn new _epubcfi2.default(el, this.cfiBase).toString();
\t\t}

\t\t/**
   * Unload the section document
   */

\t}, {
\t\tkey: "unload",
\t\tvalue: function unload() {
\t\t\tthis.document = undefined;
\t\t\tthis.contents = undefined;
\t\t\tthis.output = undefined;
\t\t}
\t}, {
\t\tkey: "destroy",
\t\tvalue: function destroy() {
\t\t\tthis.unload();
\t\t\tthis.hooks.serialize.clear();
\t\t\tthis.hooks.content.clear();

\t\t\tthis.hooks = undefined;
\t\t\tthis.idref = undefined;
\t\t\tthis.linear = undefined;
\t\t\tthis.properties = undefined;
\t\t\tthis.index = undefined;
\t\t\tthis.href = undefined;
\t\t\tthis.url = undefined;
\t\t\tthis.next = undefined;
\t\t\tthis.prev = undefined;

\t\t\tthis.cfiBase = undefined;
\t\t}
\t}]);

\treturn Section;
}();

exports.default = Section;
module.exports = exports["default"];

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
\tvalue: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _core = __webpack_require__(0);

var _queue = __webpack_require__(12);

var _queue2 = _interopRequireDefault(_queue);

var _epubcfi = __webpack_require__(1);

var _epubcfi2 = _interopRequireDefault(_epubcfi);

var _constants = __webpack_require__(3);

var _eventEmitter = __webpack_require__(2);

var _eventEmitter2 = _interopRequireDefault(_eventEmitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Find Locations for a Book
 * @param {Spine} spine
 * @param {request} request
 */
var Locations = function () {
\tfunction Locations(spine, request, pause) {
\t\t_classCallCheck(this, Locations);

\t\tthis.spine = spine;
\t\tthis.request = request;
\t\tthis.pause = pause || 100;

\t\tthis.q = new _queue2.default(this);
\t\tthis.epubcfi = new _epubcfi2.default();

\t\tthis._locations = [];
\t\tthis.total = 0;

\t\tthis.break = 150;

\t\tthis._current = 0;

\t\tthis.currentLocation = '';
\t\tthis._currentCfi = '';
\t\tthis.processingTimeout = undefined;
\t}

\t/**
  * Load all of sections in the book to generate locations
  * @param  {int} chars how many chars to split on
  * @return {object} locations
  */


\t_createClass(Locations, [{
\t\tkey: "generate",
\t\tvalue: function generate(chars) {

\t\t\tif (chars) {
\t\t\t\tthis.break = chars;
\t\t\t}

\t\t\tthis.q.pause();

\t\t\tthis.spine.each(function (section) {
\t\t\t\tif (section.linear) {
\t\t\t\t\tthis.q.enqueue(this.process.bind(this), section);
\t\t\t\t}
\t\t\t}.bind(this));

\t\t\treturn this.q.run().then(function () {
\t\t\t\tthis.total = this._locations.length - 1;

\t\t\t\tif (this._currentCfi) {
\t\t\t\t\tthis.currentLocation = this._currentCfi;
\t\t\t\t}

\t\t\t\treturn this._locations;
\t\t\t\t// console.log(this.percentage(this.book.rendition.location.start), this.percentage(this.book.rendition.location.end));
\t\t\t}.bind(this));
\t\t}
\t}, {
\t\tkey: "createRange",
\t\tvalue: function createRange() {
\t\t\treturn {
\t\t\t\tstartContainer: undefined,
\t\t\t\tstartOffset: undefined,
\t\t\t\tendContainer: undefined,
\t\t\t\tendOffset: undefined
\t\t\t};
\t\t}
\t}, {
\t\tkey: "process",
\t\tvalue: function process(section) {

\t\t\treturn section.load(this.request).then(function (contents) {
\t\t\t\tvar completed = new _core.defer();
\t\t\t\tvar locations = this.parse(contents, section.cfiBase);
\t\t\t\tthis._locations = this._locations.concat(locations);

\t\t\t\tsection.unload();

\t\t\t\tthis.processingTimeout = setTimeout(function () {
\t\t\t\t\treturn completed.resolve(locations);
\t\t\t\t}, this.pause);
\t\t\t\treturn completed.promise;
\t\t\t}.bind(this));
\t\t}
\t}, {
\t\tkey: "parse",
\t\tvalue: function parse(contents, cfiBase, chars) {
\t\t\tvar locations = [];
\t\t\tvar range;
\t\t\tvar doc = contents.ownerDocument;
\t\t\tvar body = (0, _core.qs)(doc, "body");
\t\t\tvar counter = 0;
\t\t\tvar prev;
\t\t\tvar _break = chars || this.break;
\t\t\tvar parser = function parser(node) {
\t\t\t\tvar len = node.length;
\t\t\t\tvar dist;
\t\t\t\tvar pos = 0;

\t\t\t\tif (node.textContent.trim().length === 0) {
\t\t\t\t\treturn false; // continue
\t\t\t\t}

\t\t\t\t// Start range
\t\t\t\tif (counter == 0) {
\t\t\t\t\trange = this.createRange();
\t\t\t\t\trange.startContainer = node;
\t\t\t\t\trange.startOffset = 0;
\t\t\t\t}

\t\t\t\tdist = _break - counter;

\t\t\t\t// Node is smaller than a break,
\t\t\t\t// skip over it
\t\t\t\tif (dist > len) {
\t\t\t\t\tcounter += len;
\t\t\t\t\tpos = len;
\t\t\t\t}

\t\t\t\twhile (pos < len) {
\t\t\t\t\tdist = _break - counter;

\t\t\t\t\tif (counter === 0) {
\t\t\t\t\t\t// Start new range
\t\t\t\t\t\tpos += 1;
\t\t\t\t\t\trange = this.createRange();
\t\t\t\t\t\trange.startContainer = node;
\t\t\t\t\t\trange.startOffset = pos;
\t\t\t\t\t}

\t\t\t\t\t// pos += dist;

\t\t\t\t\t// Gone over
\t\t\t\t\tif (pos + dist >= len) {
\t\t\t\t\t\t// Continue counter for next node
\t\t\t\t\t\tcounter += len - pos;
\t\t\t\t\t\t// break
\t\t\t\t\t\tpos = len;
\t\t\t\t\t\t// At End
\t\t\t\t\t} else {
\t\t\t\t\t\t// Advance pos
\t\t\t\t\t\tpos += dist;

\t\t\t\t\t\t// End the previous range
\t\t\t\t\t\trange.endContainer = node;
\t\t\t\t\t\trange.endOffset = pos;
\t\t\t\t\t\t// cfi = section.cfiFromRange(range);
\t\t\t\t\t\tvar cfi = new _epubcfi2.default(range, cfiBase).toString();
\t\t\t\t\t\tlocations.push(cfi);
\t\t\t\t\t\tcounter = 0;
\t\t\t\t\t}
\t\t\t\t}
\t\t\t\tprev = node;
\t\t\t};

\t\t\t(0, _core.sprint)(body, parser.bind(this));

\t\t\t// Close remaining
\t\t\tif (range && range.startContainer && prev) {
\t\t\t\trange.endContainer = prev;
\t\t\t\trange.endOffset = prev.length;
\t\t\t\tvar cfi = new _epubcfi2.default(range, cfiBase).toString();
\t\t\t\tlocations.push(cfi);
\t\t\t\tcounter = 0;
\t\t\t}

\t\t\treturn locations;
\t\t}

\t\t/**
   * Get a location from an EpubCFI
   * @param {EpubCFI} cfi
   * @return {number}
   */

\t}, {
\t\tkey: "locationFromCfi",
\t\tvalue: function locationFromCfi(cfi) {
\t\t\tvar loc = void 0;
\t\t\tif (_epubcfi2.default.prototype.isCfiString(cfi)) {
\t\t\t\tcfi = new _epubcfi2.default(cfi);
\t\t\t}
\t\t\t// Check if the location has not been set yet
\t\t\tif (this._locations.length === 0) {
\t\t\t\treturn -1;
\t\t\t}

\t\t\tloc = (0, _core.locationOf)(cfi, this._locations, this.epubcfi.compare);

\t\t\tif (loc > this.total) {
\t\t\t\treturn this.total;
\t\t\t}

\t\t\treturn loc;
\t\t}

\t\t/**
   * Get a percentage position in locations from an EpubCFI
   * @param {EpubCFI} cfi
   * @return {number}
   */

\t}, {
\t\tkey: "percentageFromCfi",
\t\tvalue: function percentageFromCfi(cfi) {
\t\t\tif (this._locations.length === 0) {
\t\t\t\treturn null;
\t\t\t}
\t\t\t// Find closest cfi
\t\t\tvar loc = this.locationFromCfi(cfi);
\t\t\t// Get percentage in total
\t\t\treturn this.percentageFromLocation(loc);
\t\t}

\t\t/**
   * Get a percentage position from a location index
   * @param {number} location
   * @return {number}
   */

\t}, {
\t\tkey: "percentageFromLocation",
\t\tvalue: function percentageFromLocation(loc) {
\t\t\tif (!loc || !this.total) {
\t\t\t\treturn 0;
\t\t\t}

\t\t\treturn loc / this.total;
\t\t}

\t\t/**
   * Get an EpubCFI from location index
   * @param {number} loc
   * @return {EpubCFI} cfi
   */

\t}, {
\t\tkey: "cfiFromLocation",
\t\tvalue: function cfiFromLocation(loc) {
\t\t\tvar cfi = -1;
\t\t\t// check that pg is an int
\t\t\tif (typeof loc != "number") {
\t\t\t\tloc = parseInt(loc);
\t\t\t}

\t\t\tif (loc >= 0 && loc < this._locations.length) {
\t\t\t\tcfi = this._locations[loc];
\t\t\t}

\t\t\treturn cfi;
\t\t}

\t\t/**
   * Get an EpubCFI from location percentage
   * @param {number} percentage
   * @return {EpubCFI} cfi
   */

\t}, {
\t\tkey: "cfiFromPercentage",
\t\tvalue: function cfiFromPercentage(percentage) {
\t\t\tvar loc = void 0;
\t\t\tif (percentage > 1) {
\t\t\t\tconsole.warn("Normalize cfiFromPercentage value to between 0 - 1");
\t\t\t}

\t\t\t// Make sure 1 goes to very end
\t\t\tif (percentage >= 1) {
\t\t\t\tvar cfi = new _epubcfi2.default(this._locations[this.total]);
\t\t\t\tcfi.collapse();
\t\t\t\treturn cfi.toString();
\t\t\t}

\t\t\tloc = Math.ceil(this.total * percentage);
\t\t\treturn this.cfiFromLocation(loc);
\t\t}

\t\t/**
   * Load locations from JSON
   * @param {json} locations
   */

\t}, {
\t\tkey: "load",
\t\tvalue: function load(locations) {
\t\t\tif (typeof locations === "string") {
\t\t\t\tthis._locations = JSON.parse(locations);
\t\t\t} else {
\t\t\t\tthis._locations = locations;
\t\t\t}
\t\t\tthis.total = this._locations.length - 1;
\t\t\treturn this._locations;
\t\t}

\t\t/**
   * Save locations to JSON
   * @return {json}
   */

\t}, {
\t\tkey: "save",
\t\tvalue: function save() {
\t\t\treturn JSON.stringify(this._locations);
\t\t}
\t}, {
\t\tkey: "getCurrent",
\t\tvalue: function getCurrent() {
\t\t\treturn this._current;
\t\t}
\t}, {
\t\tkey: "setCurrent",
\t\tvalue: function setCurrent(curr) {
\t\t\tvar loc;

\t\t\tif (typeof curr == "string") {
\t\t\t\tthis._currentCfi = curr;
\t\t\t} else if (typeof curr == "number") {
\t\t\t\tthis._current = curr;
\t\t\t} else {
\t\t\t\treturn;
\t\t\t}

\t\t\tif (this._locations.length === 0) {
\t\t\t\treturn;
\t\t\t}

\t\t\tif (typeof curr == "string") {
\t\t\t\tloc = this.locationFromCfi(curr);
\t\t\t\tthis._current = loc;
\t\t\t} else {
\t\t\t\tloc = curr;
\t\t\t}

\t\t\tthis.emit(_constants.EVENTS.LOCATIONS.CHANGED, {
\t\t\t\tpercentage: this.percentageFromLocation(loc)
\t\t\t});
\t\t}

\t\t/**
   * Get the current location
   */

\t}, {
\t\tkey: "length",


\t\t/**
   * Locations length
   */
\t\tvalue: function length() {
\t\t\treturn this._locations.length;
\t\t}
\t}, {
\t\tkey: "destroy",
\t\tvalue: function destroy() {
\t\t\tthis.spine = undefined;
\t\t\tthis.request = undefined;
\t\t\tthis.pause = undefined;

\t\t\tthis.q.stop();
\t\t\tthis.q = undefined;
\t\t\tthis.epubcfi = undefined;

\t\t\tthis._locations = undefined;
\t\t\tthis.total = undefined;

\t\t\tthis.break = undefined;
\t\t\tthis._current = undefined;

\t\t\tthis.currentLocation = undefined;
\t\t\tthis._currentCfi = undefined;
\t\t\tclearTimeout(this.processingTimeout);
\t\t}
\t}, {
\t\tkey: "currentLocation",
\t\tget: function get() {
\t\t\treturn this._current;
\t\t}

\t\t/**
   * Set the current location
   */
\t\t,
\t\tset: function set(curr) {
\t\t\tthis.setCurrent(curr);
\t\t}
\t}]);

\treturn Locations;
}();

(0, _eventEmitter2.default)(Locations.prototype);

exports.default = Locations;
module.exports = exports["default"];

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
\tvalue: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pathWebpack = __webpack_require__(6);

var _pathWebpack2 = _interopRequireDefault(_pathWebpack);

var _core = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Handles Parsing and Accessing an Epub Container
 * @class
 * @param {document} [containerDocument] xml document
 */
var Container = function () {
\tfunction Container(containerDocument) {
\t\t_classCallCheck(this, Container);

\t\tthis.packagePath = '';
\t\tthis.directory = '';
\t\tthis.encoding = '';

\t\tif (containerDocument) {
\t\t\tthis.parse(containerDocument);
\t\t}
\t}

\t/**
  * Parse the Container XML
  * @param  {document} containerDocument
  */


\t_createClass(Container, [{
\t\tkey: "parse",
\t\tvalue: function parse(containerDocument) {
\t\t\t//-- <rootfile full-path="OPS/package.opf" media-type="application/oebps-package+xml"/>
\t\t\tvar rootfile;

\t\t\tif (!containerDocument) {
\t\t\t\tthrow new Error("Container File Not Found");
\t\t\t}

\t\t\trootfile = (0, _core.qs)(containerDocument, "rootfile");

\t\t\tif (!rootfile) {
\t\t\t\tthrow new Error("No RootFile Found");
\t\t\t}

\t\t\tthis.packagePath = rootfile.getAttribute("full-path");
\t\t\tthis.directory = _pathWebpack2.default.dirname(this.packagePath);
\t\t\tthis.encoding = containerDocument.xmlEncoding;
\t\t}
\t}, {
\t\tkey: "destroy",
\t\tvalue: function destroy() {
\t\t\tthis.packagePath = undefined;
\t\t\tthis.directory = undefined;
\t\t\tthis.encoding = undefined;
\t\t}
\t}]);

\treturn Container;
}();

exports.default = Container;
module.exports = exports["default"];

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
\tvalue: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _core = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Open Packaging Format Parser
 * @class
 * @param {document} packageDocument OPF XML
 */
var Packaging = function () {
\tfunction Packaging(packageDocument) {
\t\t_classCallCheck(this, Packaging);

\t\tthis.manifest = {};
\t\tthis.navPath = '';
\t\tthis.ncxPath = '';
\t\tthis.coverPath = '';
\t\tthis.spineNodeIndex = 0;
\t\tthis.spine = [];
\t\tthis.metadata = {};

\t\tif (packageDocument) {
\t\t\tthis.parse(packageDocument);
\t\t}
\t}

\t/**
  * Parse OPF XML
  * @param  {document} packageDocument OPF XML
  * @return {object} parsed package parts
  */


\t_createClass(Packaging, [{
\t\tkey: 'parse',
\t\tvalue: function parse(packageDocument) {
\t\t\tvar metadataNode, manifestNode, spineNode;

\t\t\tif (!packageDocument) {
\t\t\t\tthrow new Error("Package File Not Found");
\t\t\t}

\t\t\tmetadataNode = (0, _core.qs)(packageDocument, "metadata");
\t\t\tif (!metadataNode) {
\t\t\t\tthrow new Error("No Metadata Found");
\t\t\t}

\t\t\tmanifestNode = (0, _core.qs)(packageDocument, "manifest");
\t\t\tif (!manifestNode) {
\t\t\t\tthrow new Error("No Manifest Found");
\t\t\t}

\t\t\tspineNode = (0, _core.qs)(packageDocument, "spine");
\t\t\tif (!spineNode) {
\t\t\t\tthrow new Error("No Spine Found");
\t\t\t}

\t\t\tthis.manifest = this.parseManifest(manifestNode);
\t\t\tthis.navPath = this.findNavPath(manifestNode);
\t\t\tthis.ncxPath = this.findNcxPath(manifestNode, spineNode);
\t\t\tthis.coverPath = this.findCoverPath(packageDocument);

\t\t\tthis.spineNodeIndex = (0, _core.indexOfElementNode)(spineNode);

\t\t\tthis.spine = this.parseSpine(spineNode, this.manifest);

\t\t\tthis.metadata = this.parseMetadata(metadataNode);

\t\t\tthis.metadata.direction = spineNode.getAttribute("page-progression-direction");

\t\t\treturn {
\t\t\t\t"metadata": this.metadata,
\t\t\t\t"spine": this.spine,
\t\t\t\t"manifest": this.manifest,
\t\t\t\t"navPath": this.navPath,
\t\t\t\t"ncxPath": this.ncxPath,
\t\t\t\t"coverPath": this.coverPath,
\t\t\t\t"spineNodeIndex": this.spineNodeIndex
\t\t\t};
\t\t}

\t\t/**
   * Parse Metadata
   * @private
   * @param  {document} xml
   * @return {object} metadata
   */

\t}, {
\t\tkey: 'parseMetadata',
\t\tvalue: function parseMetadata(xml) {
\t\t\tvar metadata = {};

\t\t\tmetadata.title = this.getElementText(xml, "title");
\t\t\tmetadata.creator = this.getElementText(xml, "creator");
\t\t\tmetadata.description = this.getElementText(xml, "description");

\t\t\tmetadata.pubdate = this.getElementText(xml, "date");

\t\t\tmetadata.publisher = this.getElementText(xml, "publisher");

\t\t\tmetadata.identifier = this.getElementText(xml, "identifier");
\t\t\tmetadata.language = this.getElementText(xml, "language");
\t\t\tmetadata.rights = this.getElementText(xml, "rights");

\t\t\tmetadata.modified_date = this.getPropertyText(xml, "dcterms:modified");

\t\t\tmetadata.layout = this.getPropertyText(xml, "rendition:layout");
\t\t\tmetadata.orientation = this.getPropertyText(xml, "rendition:orientation");
\t\t\tmetadata.flow = this.getPropertyText(xml, "rendition:flow");
\t\t\tmetadata.viewport = this.getPropertyText(xml, "rendition:viewport");
\t\t\t// metadata.page_prog_dir = packageXml.querySelector("spine").getAttribute("page-progression-direction");

\t\t\treturn metadata;
\t\t}

\t\t/**
   * Parse Manifest
   * @private
   * @param  {document} manifestXml
   * @return {object} manifest
   */

\t}, {
\t\tkey: 'parseManifest',
\t\tvalue: function parseManifest(manifestXml) {
\t\t\tvar manifest = {};

\t\t\t//-- Turn items into an array
\t\t\t// var selected = manifestXml.querySelectorAll("item");
\t\t\tvar selected = (0, _core.qsa)(manifestXml, "item");
\t\t\tvar items = Array.prototype.slice.call(selected);

\t\t\t//-- Create an object with the id as key
\t\t\titems.forEach(function (item) {
\t\t\t\tvar id = item.getAttribute("id"),
\t\t\t\t    href = item.getAttribute("href") || "",
\t\t\t\t    type = item.getAttribute("media-type") || "",
\t\t\t\t    properties = item.getAttribute("properties") || "";

\t\t\t\tmanifest[id] = {
\t\t\t\t\t"href": href,
\t\t\t\t\t// "url" : href,
\t\t\t\t\t"type": type,
\t\t\t\t\t"properties": properties.length ? properties.split(" ") : []
\t\t\t\t};
\t\t\t});

\t\t\treturn manifest;
\t\t}

\t\t/**
   * Parse Spine
   * @param  {document} spineXml
   * @param  {Packaging.manifest} manifest
   * @return {object} spine
   */

\t}, {
\t\tkey: 'parseSpine',
\t\tvalue: function parseSpine(spineXml, manifest) {
\t\t\tvar spine = [];

\t\t\tvar selected = (0, _core.qsa)(spineXml, "itemref");
\t\t\tvar items = Array.prototype.slice.call(selected);

\t\t\t// var epubcfi = new EpubCFI();

\t\t\t//-- Add to array to mantain ordering and cross reference with manifest
\t\t\titems.forEach(function (item, index) {
\t\t\t\tvar idref = item.getAttribute("idref");
\t\t\t\t// var cfiBase = epubcfi.generateChapterComponent(spineNodeIndex, index, Id);
\t\t\t\tvar props = item.getAttribute("properties") || "";
\t\t\t\tvar propArray = props.length ? props.split(" ") : [];
\t\t\t\t// var manifestProps = manifest[Id].properties;
\t\t\t\t// var manifestPropArray = manifestProps.length ? manifestProps.split(" ") : [];

\t\t\t\tvar itemref = {
\t\t\t\t\t"idref": idref,
\t\t\t\t\t"linear": item.getAttribute("linear") || "yes",
\t\t\t\t\t"properties": propArray,
\t\t\t\t\t// "href" : manifest[Id].href,
\t\t\t\t\t// "url" :  manifest[Id].url,
\t\t\t\t\t"index": index
\t\t\t\t\t// "cfiBase" : cfiBase
\t\t\t\t};
\t\t\t\tspine.push(itemref);
\t\t\t});

\t\t\treturn spine;
\t\t}

\t\t/**
   * Find TOC NAV
   * @private
   */

\t}, {
\t\tkey: 'findNavPath',
\t\tvalue: function findNavPath(manifestNode) {
\t\t\t// Find item with property "nav"
\t\t\t// Should catch nav irregardless of order
\t\t\t// var node = manifestNode.querySelector("item[properties$='nav'], item[properties^='nav '], item[properties*=' nav ']");
\t\t\tvar node = (0, _core.qsp)(manifestNode, "item", { "properties": "nav" });
\t\t\treturn node ? node.getAttribute("href") : false;
\t\t}

\t\t/**
   * Find TOC NCX
   * media-type="application/x-dtbncx+xml" href="toc.ncx"
   * @private
   */

\t}, {
\t\tkey: 'findNcxPath',
\t\tvalue: function findNcxPath(manifestNode, spineNode) {
\t\t\t// var node = manifestNode.querySelector("item[media-type='application/x-dtbncx+xml']");
\t\t\tvar node = (0, _core.qsp)(manifestNode, "item", { "media-type": "application/x-dtbncx+xml" });
\t\t\tvar tocId;

\t\t\t// If we can't find the toc by media-type then try to look for id of the item in the spine attributes as
\t\t\t// according to http://www.idpf.org/epub/20/spec/OPF_2.0.1_draft.htm#Section2.4.1.2,
\t\t\t// "The item that describes the NCX must be referenced by the spine toc attribute."
\t\t\tif (!node) {
\t\t\t\ttocId = spineNode.getAttribute("toc");
\t\t\t\tif (tocId) {
\t\t\t\t\t// node = manifestNode.querySelector("item[id='" + tocId + "']");
\t\t\t\t\tnode = manifestNode.getElementById(tocId);
\t\t\t\t}
\t\t\t}

\t\t\treturn node ? node.getAttribute("href") : false;
\t\t}

\t\t/**
   * Find the Cover Path
   * <item properties="cover-image" id="ci" href="cover.svg" media-type="image/svg+xml" />
   * Fallback for Epub 2.0
   * @param  {document} packageXml
   * @return {string} href
   */

\t}, {
\t\tkey: 'findCoverPath',
\t\tvalue: function findCoverPath(packageXml) {
\t\t\tvar pkg = (0, _core.qs)(packageXml, "package");
\t\t\tvar epubVersion = pkg.getAttribute("version");

\t\t\tif (epubVersion === "2.0") {
\t\t\t\tvar metaCover = (0, _core.qsp)(packageXml, "meta", { "name": "cover" });
\t\t\t\tif (metaCover) {
\t\t\t\t\tvar coverId = metaCover.getAttribute("content");
\t\t\t\t\t// var cover = packageXml.querySelector("item[id='" + coverId + "']");
\t\t\t\t\tvar cover = packageXml.getElementById(coverId);
\t\t\t\t\treturn cover ? cover.getAttribute("href") : "";
\t\t\t\t} else {
\t\t\t\t\treturn false;
\t\t\t\t}
\t\t\t} else {
\t\t\t\t// var node = packageXml.querySelector("item[properties='cover-image']");
\t\t\t\tvar node = (0, _core.qsp)(packageXml, "item", { "properties": "cover-image" });
\t\t\t\treturn node ? node.getAttribute("href") : "";
\t\t\t}
\t\t}

\t\t/**
   * Get text of a namespaced element
   * @private
   * @param  {document} xml
   * @param  {string} tag
   * @return {string} text
   */

\t}, {
\t\tkey: 'getElementText',
\t\tvalue: function getElementText(xml, tag) {
\t\t\tvar found = xml.getElementsByTagNameNS("http://purl.org/dc/elements/1.1/", tag);
\t\t\tvar el;

\t\t\tif (!found || found.length === 0) return "";

\t\t\tel = found[0];

\t\t\tif (el.childNodes.length) {
\t\t\t\treturn el.childNodes[0].nodeValue;
\t\t\t}

\t\t\treturn "";
\t\t}

\t\t/**
   * Get text by property
   * @private
   * @param  {document} xml
   * @param  {string} property
   * @return {string} text
   */

\t}, {
\t\tkey: 'getPropertyText',
\t\tvalue: function getPropertyText(xml, property) {
\t\t\tvar el = (0, _core.qsp)(xml, "meta", { "property": property });

\t\t\tif (el && el.childNodes.length) {
\t\t\t\treturn el.childNodes[0].nodeValue;
\t\t\t}

\t\t\treturn "";
\t\t}

\t\t/**
   * Load JSON Manifest
   * @param  {document} packageDocument OPF XML
   * @return {object} parsed package parts
   */

\t}, {
\t\tkey: 'load',
\t\tvalue: function load(json) {
\t\t\tvar _this = this;

\t\t\tthis.metadata = json.metadata;

\t\t\tthis.spine = json.spine.map(function (item, index) {
\t\t\t\titem.index = index;
\t\t\t\treturn item;
\t\t\t});

\t\t\tjson.resources.forEach(function (item, index) {
\t\t\t\t_this.manifest[index] = item;

\t\t\t\tif (item.rel && item.rel[0] === "cover") {
\t\t\t\t\t_this.coverPath = item.href;
\t\t\t\t}
\t\t\t});

\t\t\tthis.spineNodeIndex = 0;

\t\t\tthis.toc = json.toc.map(function (item, index) {
\t\t\t\titem.label = item.title;
\t\t\t\treturn item;
\t\t\t});

\t\t\treturn {
\t\t\t\t"metadata": this.metadata,
\t\t\t\t"spine": this.spine,
\t\t\t\t"manifest": this.manifest,
\t\t\t\t"navPath": this.navPath,
\t\t\t\t"ncxPath": this.ncxPath,
\t\t\t\t"coverPath": this.coverPath,
\t\t\t\t"spineNodeIndex": this.spineNodeIndex,
\t\t\t\t"toc": this.toc
\t\t\t};
\t\t}
\t}, {
\t\tkey: 'destroy',
\t\tvalue: function destroy() {
\t\t\tthis.manifest = undefined;
\t\t\tthis.navPath = undefined;
\t\t\tthis.ncxPath = undefined;
\t\t\tthis.coverPath = undefined;
\t\t\tthis.spineNodeIndex = undefined;
\t\t\tthis.spine = undefined;
\t\t\tthis.metadata = undefined;
\t\t}
\t}]);

\treturn Packaging;
}();

exports.default = Packaging;
module.exports = exports['default'];

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
\tvalue: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _core = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Navigation Parser
 * @param {document} xml navigation html / xhtml / ncx
 */
var Navigation = function () {
\tfunction Navigation(xml) {
\t\t_classCallCheck(this, Navigation);

\t\tthis.toc = [];
\t\tthis.tocByHref = {};
\t\tthis.tocById = {};

\t\tthis.landmarks = [];
\t\tthis.landmarksByType = {};

\t\tthis.length = 0;
\t\tif (xml) {
\t\t\tthis.parse(xml);
\t\t}
\t}

\t/**
  * Parse out the navigation items
  * @param {document} xml navigation html / xhtml / ncx
  */


\t_createClass(Navigation, [{
\t\tkey: "parse",
\t\tvalue: function parse(xml) {
\t\t\tvar isXml = xml.nodeType;
\t\t\tvar html = void 0;
\t\t\tvar ncx = void 0;

\t\t\tif (isXml) {
\t\t\t\thtml = (0, _core.qs)(xml, "html");
\t\t\t\tncx = (0, _core.qs)(xml, "ncx");
\t\t\t}

\t\t\tif (!isXml) {
\t\t\t\tthis.toc = this.load(xml);
\t\t\t} else if (html) {
\t\t\t\tthis.toc = this.parseNav(xml);
\t\t\t\tthis.landmarks = this.parseLandmarks(xml);
\t\t\t} else if (ncx) {
\t\t\t\tthis.toc = this.parseNcx(xml);
\t\t\t}

\t\t\tthis.length = 0;

\t\t\tthis.unpack(this.toc);
\t\t}

\t\t/**
   * Unpack navigation items
   * @private
   * @param  {array} toc
   */

\t}, {
\t\tkey: "unpack",
\t\tvalue: function unpack(toc) {
\t\t\tvar item;

\t\t\tfor (var i = 0; i < toc.length; i++) {
\t\t\t\titem = toc[i];

\t\t\t\tif (item.href) {
\t\t\t\t\tthis.tocByHref[item.href] = i;
\t\t\t\t}

\t\t\t\tif (item.id) {
\t\t\t\t\tthis.tocById[item.id] = i;
\t\t\t\t}

\t\t\t\tthis.length++;

\t\t\t\tif (item.subitems.length) {
\t\t\t\t\tthis.unpack(item.subitems);
\t\t\t\t}
\t\t\t}
\t\t}

\t\t/**
   * Get an item from the navigation
   * @param  {string} target
   * @return {object} navItems
   */

\t}, {
\t\tkey: "get",
\t\tvalue: function get(target) {
\t\t\tvar index;

\t\t\tif (!target) {
\t\t\t\treturn this.toc;
\t\t\t}

\t\t\tif (target.indexOf("#") === 0) {
\t\t\t\tindex = this.tocById[target.substring(1)];
\t\t\t} else if (target in this.tocByHref) {
\t\t\t\tindex = this.tocByHref[target];
\t\t\t}

\t\t\treturn this.toc[index];
\t\t}

\t\t/**
   * Get a landmark by type
   * List of types: https://idpf.github.io/epub-vocabs/structure/
   * @param  {string} type
   * @return {object} landmarkItems
   */

\t}, {
\t\tkey: "landmark",
\t\tvalue: function landmark(type) {
\t\t\tvar index;

\t\t\tif (!type) {
\t\t\t\treturn this.landmarks;
\t\t\t}

\t\t\tindex = this.landmarksByType[type];

\t\t\treturn this.landmarks[index];
\t\t}

\t\t/**
   * Parse toc from a Epub > 3.0 Nav
   * @private
   * @param  {document} navHtml
   * @return {array} navigation list
   */

\t}, {
\t\tkey: "parseNav",
\t\tvalue: function parseNav(navHtml) {
\t\t\tvar navElement = (0, _core.querySelectorByType)(navHtml, "nav", "toc");
\t\t\tvar navItems = navElement ? (0, _core.qsa)(navElement, "li") : [];
\t\t\tvar length = navItems.length;
\t\t\tvar i;
\t\t\tvar toc = {};
\t\t\tvar list = [];
\t\t\tvar item, parent;

\t\t\tif (!navItems || length === 0) return list;

\t\t\tfor (i = 0; i < length; ++i) {
\t\t\t\titem = this.navItem(navItems[i]);
\t\t\t\tif (item) {
\t\t\t\t\ttoc[item.id] = item;
\t\t\t\t\tif (!item.parent) {
\t\t\t\t\t\tlist.push(item);
\t\t\t\t\t} else {
\t\t\t\t\t\tparent = toc[item.parent];
\t\t\t\t\t\tparent.subitems.push(item);
\t\t\t\t\t}
\t\t\t\t}
\t\t\t}

\t\t\treturn list;
\t\t}

\t\t/**
   * Create a navItem
   * @private
   * @param  {element} item
   * @return {object} navItem
   */

\t}, {
\t\tkey: "navItem",
\t\tvalue: function navItem(item) {
\t\t\tvar id = item.getAttribute("id") || undefined;
\t\t\tvar content = (0, _core.filterChildren)(item, "a", true);

\t\t\tif (!content) {
\t\t\t\treturn;
\t\t\t}

\t\t\tvar src = content.getAttribute("href") || "";
\t\t\tvar text = content.textContent || "";
\t\t\tvar subitems = [];
\t\t\tvar parentItem = (0, _core.getParentByTagName)(item, "li");
\t\t\tvar parent = void 0;

\t\t\tif (parentItem) {
\t\t\t\tparent = parentItem.getAttribute("id");
\t\t\t}

\t\t\twhile (!parent && parentItem) {
\t\t\t\tparentItem = (0, _core.getParentByTagName)(parentItem, "li");
\t\t\t\tif (parentItem) {
\t\t\t\t\tparent = parentItem.getAttribute("id");
\t\t\t\t}
\t\t\t}

\t\t\treturn {
\t\t\t\t"id": id,
\t\t\t\t"href": src,
\t\t\t\t"label": text,
\t\t\t\t"subitems": subitems,
\t\t\t\t"parent": parent
\t\t\t};
\t\t}

\t\t/**
   * Parse landmarks from a Epub > 3.0 Nav
   * @private
   * @param  {document} navHtml
   * @return {array} landmarks list
   */

\t}, {
\t\tkey: "parseLandmarks",
\t\tvalue: function parseLandmarks(navHtml) {
\t\t\tvar navElement = (0, _core.querySelectorByType)(navHtml, "nav", "landmarks");
\t\t\tvar navItems = navElement ? (0, _core.qsa)(navElement, "li") : [];
\t\t\tvar length = navItems.length;
\t\t\tvar i;
\t\t\tvar list = [];
\t\t\tvar item;

\t\t\tif (!navItems || length === 0) return list;

\t\t\tfor (i = 0; i < length; ++i) {
\t\t\t\titem = this.landmarkItem(navItems[i]);
\t\t\t\tif (item) {
\t\t\t\t\tlist.push(item);
\t\t\t\t\tthis.landmarksByType[item.type] = i;
\t\t\t\t}
\t\t\t}

\t\t\treturn list;
\t\t}

\t\t/**
   * Create a landmarkItem
   * @private
   * @param  {element} item
   * @return {object} landmarkItem
   */

\t}, {
\t\tkey: "landmarkItem",
\t\tvalue: function landmarkItem(item) {
\t\t\tvar content = (0, _core.filterChildren)(item, "a", true);

\t\t\tif (!content) {
\t\t\t\treturn;
\t\t\t}

\t\t\tvar type = content.getAttributeNS("http://www.idpf.org/2007/ops", "type") || undefined;
\t\t\tvar href = content.getAttribute("href") || "";
\t\t\tvar text = content.textContent || "";

\t\t\treturn {
\t\t\t\t"href": href,
\t\t\t\t"label": text,
\t\t\t\t"type": type
\t\t\t};
\t\t}

\t\t/**
   * Parse from a Epub > 3.0 NC
   * @private
   * @param  {document} navHtml
   * @return {array} navigation list
   */

\t}, {
\t\tkey: "parseNcx",
\t\tvalue: function parseNcx(tocXml) {
\t\t\tvar navPoints = (0, _core.qsa)(tocXml, "navPoint");
\t\t\tvar length = navPoints.length;
\t\t\tvar i;
\t\t\tvar toc = {};
\t\t\tvar list = [];
\t\t\tvar item, parent;

\t\t\tif (!navPoints || length === 0) return list;

\t\t\tfor (i = 0; i < length; ++i) {
\t\t\t\titem = this.ncxItem(navPoints[i]);
\t\t\t\ttoc[item.id] = item;
\t\t\t\tif (!item.parent) {
\t\t\t\t\tlist.push(item);
\t\t\t\t} else {
\t\t\t\t\tparent = toc[item.parent];
\t\t\t\t\tparent.subitems.push(item);
\t\t\t\t}
\t\t\t}

\t\t\treturn list;
\t\t}

\t\t/**
   * Create a ncxItem
   * @private
   * @param  {element} item
   * @return {object} ncxItem
   */

\t}, {
\t\tkey: "ncxItem",
\t\tvalue: function ncxItem(item) {
\t\t\tvar id = item.getAttribute("id") || false,
\t\t\t    content = (0, _core.qs)(item, "content"),
\t\t\t    src = content.getAttribute("src"),
\t\t\t    navLabel = (0, _core.qs)(item, "navLabel"),
\t\t\t    text = navLabel.textContent ? navLabel.textContent : "",
\t\t\t    subitems = [],
\t\t\t    parentNode = item.parentNode,
\t\t\t    parent;

\t\t\tif (parentNode && parentNode.nodeName === "navPoint") {
\t\t\t\tparent = parentNode.getAttribute("id");
\t\t\t}

\t\t\treturn {
\t\t\t\t"id": id,
\t\t\t\t"href": src,
\t\t\t\t"label": text,
\t\t\t\t"subitems": subitems,
\t\t\t\t"parent": parent
\t\t\t};
\t\t}

\t\t/**
   * Load Spine Items
   * @param  {object} json the items to be loaded
   */

\t}, {
\t\tkey: "load",
\t\tvalue: function load(json) {
\t\t\tvar _this = this;

\t\t\treturn json.map(function (item) {
\t\t\t\titem.label = item.title;
\t\t\t\tif (item.children) {
\t\t\t\t\titem.subitems = _this.load(item.children);
\t\t\t\t}
\t\t\t\treturn item;
\t\t\t});
\t\t}

\t\t/**
   * forEach pass through
   * @param  {Function} fn function to run on each item
   * @return {method} forEach loop
   */

\t}, {
\t\tkey: "forEach",
\t\tvalue: function forEach(fn) {
\t\t\treturn this.toc.forEach(fn);
\t\t}
\t}]);

\treturn Navigation;
}();

exports.default = Navigation;
module.exports = exports["default"];

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
\tvalue: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _replacements = __webpack_require__(7);

var _core = __webpack_require__(0);

var _url = __webpack_require__(5);

var _url2 = _interopRequireDefault(_url);

var _mime = __webpack_require__(17);

var _mime2 = _interopRequireDefault(_mime);

var _path = __webpack_require__(4);

var _path2 = _interopRequireDefault(_path);

var _pathWebpack = __webpack_require__(6);

var _pathWebpack2 = _interopRequireDefault(_pathWebpack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Handle Package Resources
 * @class
 * @param {Manifest} manifest
 * @param {[object]} options
 * @param {[string="base64"]} options.replacements
 * @param {[Archive]} options.archive
 * @param {[method]} options.resolver
 */
var Resources = function () {
\tfunction Resources(manifest, options) {
\t\t_classCallCheck(this, Resources);

\t\tthis.settings = {
\t\t\treplacements: options && options.replacements || "base64",
\t\t\tarchive: options && options.archive,
\t\t\tresolver: options && options.resolver,
\t\t\trequest: options && options.request
\t\t};
\t\tthis.manifest = manifest;
\t\tthis.resources = Object.keys(manifest).map(function (key) {
\t\t\treturn manifest[key];
\t\t});

\t\tthis.replacementUrls = [];

\t\tthis.html = [];
\t\tthis.assets = [];
\t\tthis.css = [];

\t\tthis.urls = [];
\t\tthis.cssUrls = [];

\t\tthis.split();
\t\tthis.splitUrls();
\t}

\t/**
  * Split resources by type
  * @private
  */


\t_createClass(Resources, [{
\t\tkey: "split",
\t\tvalue: function split() {

\t\t\t// HTML
\t\t\tthis.html = this.resources.filter(function (item) {
\t\t\t\tif (item.type === "application/xhtml+xml" || item.type === "text/html") {
\t\t\t\t\treturn true;
\t\t\t\t}
\t\t\t});

\t\t\t// Exclude HTML
\t\t\tthis.assets = this.resources.filter(function (item) {
\t\t\t\tif (item.type !== "application/xhtml+xml" && item.type !== "text/html") {
\t\t\t\t\treturn true;
\t\t\t\t}
\t\t\t});

\t\t\t// Only CSS
\t\t\tthis.css = this.resources.filter(function (item) {
\t\t\t\tif (item.type === "text/css") {
\t\t\t\t\treturn true;
\t\t\t\t}
\t\t\t});
\t\t}

\t\t/**
   * Convert split resources into Urls
   * @private
   */

\t}, {
\t\tkey: "splitUrls",
\t\tvalue: function splitUrls() {

\t\t\t// All Assets Urls
\t\t\tthis.urls = this.assets.map(function (item) {
\t\t\t\treturn item.href;
\t\t\t}.bind(this));

\t\t\t// Css Urls
\t\t\tthis.cssUrls = this.css.map(function (item) {
\t\t\t\treturn item.href;
\t\t\t});
\t\t}
\t}, {
\t\tkey: "createUrl",
\t\tvalue: function createUrl(url) {
\t\t\tvar parsedUrl = new _url2.default(url);
\t\t\tvar mimeType = _mime2.default.lookup(parsedUrl.filename);

\t\t\tif (this.settings.archive) {
\t\t\t\treturn this.settings.archive.createUrl(url, { "base64": this.settings.replacements === "base64" });
\t\t\t} else {
\t\t\t\tif (this.settings.replacements === "base64") {
\t\t\t\t\treturn this.settings.request(url, 'blob').then(function (blob) {
\t\t\t\t\t\treturn (0, _core.blob2base64)(blob);
\t\t\t\t\t}).then(function (blob) {
\t\t\t\t\t\treturn (0, _core.createBase64Url)(blob, mimeType);
\t\t\t\t\t});
\t\t\t\t} else {
\t\t\t\t\treturn this.settings.request(url, 'blob').then(function (blob) {
\t\t\t\t\t\treturn (0, _core.createBlobUrl)(blob, mimeType);
\t\t\t\t\t});
\t\t\t\t}
\t\t\t}
\t\t}

\t\t/**
   * Create blob urls for all the assets
   * @return {Promise}         returns replacement urls
   */

\t}, {
\t\tkey: "replacements",
\t\tvalue: function replacements() {
\t\t\tvar _this = this;

\t\t\tif (this.settings.replacements === "none") {
\t\t\t\treturn new Promise(function (resolve) {
\t\t\t\t\tresolve(this.urls);
\t\t\t\t}.bind(this));
\t\t\t}

\t\t\tvar replacements = this.urls.map(function (url) {
\t\t\t\tvar absolute = _this.settings.resolver(url);

\t\t\t\treturn _this.createUrl(absolute).catch(function (err) {
\t\t\t\t\tconsole.error(err);
\t\t\t\t\treturn null;
\t\t\t\t});
\t\t\t});

\t\t\treturn Promise.all(replacements).then(function (replacementUrls) {
\t\t\t\t_this.replacementUrls = replacementUrls.filter(function (url) {
\t\t\t\t\treturn typeof url === "string";
\t\t\t\t});
\t\t\t\treturn replacementUrls;
\t\t\t});
\t\t}

\t\t/**
   * Replace URLs in CSS resources
   * @private
   * @param  {Archive} [archive]
   * @param  {method} [resolver]
   * @return {Promise}
   */

\t}, {
\t\tkey: "replaceCss",
\t\tvalue: function replaceCss(archive, resolver) {
\t\t\tvar replaced = [];
\t\t\tarchive = archive || this.settings.archive;
\t\t\tresolver = resolver || this.settings.resolver;
\t\t\tthis.cssUrls.forEach(function (href) {
\t\t\t\tvar replacement = this.createCssFile(href, archive, resolver).then(function (replacementUrl) {
\t\t\t\t\t// switch the url in the replacementUrls
\t\t\t\t\tvar indexInUrls = this.urls.indexOf(href);
\t\t\t\t\tif (indexInUrls > -1) {
\t\t\t\t\t\tthis.replacementUrls[indexInUrls] = replacementUrl;
\t\t\t\t\t}
\t\t\t\t}.bind(this));

\t\t\t\treplaced.push(replacement);
\t\t\t}.bind(this));
\t\t\treturn Promise.all(replaced);
\t\t}

\t\t/**
   * Create a new CSS file with the replaced URLs
   * @private
   * @param  {string} href the original css file
   * @return {Promise}  returns a BlobUrl to the new CSS file or a data url
   */

\t}, {
\t\tkey: "createCssFile",
\t\tvalue: function createCssFile(href) {
\t\t\tvar _this2 = this;

\t\t\tvar newUrl;

\t\t\tif (_pathWebpack2.default.isAbsolute(href)) {
\t\t\t\treturn new Promise(function (resolve) {
\t\t\t\t\tresolve();
\t\t\t\t});
\t\t\t}

\t\t\tvar absolute = this.settings.resolver(href);

\t\t\t// Get the text of the css file from the archive
\t\t\tvar textResponse;

\t\t\tif (this.settings.archive) {
\t\t\t\ttextResponse = this.settings.archive.getText(absolute);
\t\t\t} else {
\t\t\t\ttextResponse = this.settings.request(absolute, "text");
\t\t\t}

\t\t\t// Get asset links relative to css file
\t\t\tvar relUrls = this.urls.map(function (assetHref) {
\t\t\t\tvar resolved = _this2.settings.resolver(assetHref);
\t\t\t\tvar relative = new _path2.default(absolute).relative(resolved);

\t\t\t\treturn relative;
\t\t\t});

\t\t\tif (!textResponse) {
\t\t\t\t// file not found, don't replace
\t\t\t\treturn new Promise(function (resolve) {
\t\t\t\t\tresolve();
\t\t\t\t});
\t\t\t}

\t\t\treturn textResponse.then(function (text) {
\t\t\t\t// Replacements in the css text
\t\t\t\ttext = (0, _replacements.substitute)(text, relUrls, _this2.replacementUrls);

\t\t\t\t// Get the new url
\t\t\t\tif (_this2.settings.replacements === "base64") {
\t\t\t\t\tnewUrl = (0, _core.createBase64Url)(text, "text/css");
\t\t\t\t} else {
\t\t\t\t\tnewUrl = (0, _core.createBlobUrl)(text, "text/css");
\t\t\t\t}

\t\t\t\treturn newUrl;
\t\t\t}, function (err) {
\t\t\t\t// handle response errors
\t\t\t\treturn new Promise(function (resolve) {
\t\t\t\t\tresolve();
\t\t\t\t});
\t\t\t});
\t\t}

\t\t/**
   * Resolve all resources URLs relative to an absolute URL
   * @param  {string} absolute to be resolved to
   * @param  {[resolver]} resolver
   * @return {string[]} array with relative Urls
   */

\t}, {
\t\tkey: "relativeTo",
\t\tvalue: function relativeTo(absolute, resolver) {
\t\t\tresolver = resolver || this.settings.resolver;

\t\t\t// Get Urls relative to current sections
\t\t\treturn this.urls.map(function (href) {
\t\t\t\tvar resolved = resolver(href);
\t\t\t\tvar relative = new _path2.default(absolute).relative(resolved);
\t\t\t\treturn relative;
\t\t\t}.bind(this));
\t\t}

\t\t/**
   * Get a URL for a resource
   * @param  {string} path
   * @return {string} url
   */

\t}, {
\t\tkey: "get",
\t\tvalue: function get(path) {
\t\t\tvar indexInUrls = this.urls.indexOf(path);
\t\t\tif (indexInUrls === -1) {
\t\t\t\treturn;
\t\t\t}
\t\t\tif (this.replacementUrls.length) {
\t\t\t\treturn new Promise(function (resolve, reject) {
\t\t\t\t\tresolve(this.replacementUrls[indexInUrls]);
\t\t\t\t}.bind(this));
\t\t\t} else {
\t\t\t\treturn this.createUrl(path);
\t\t\t}
\t\t}

\t\t/**
   * Substitute urls in content, with replacements,
   * relative to a url if provided
   * @param  {string} content
   * @param  {string} [url]   url to resolve to
   * @return {string}         content with urls substituted
   */

\t}, {
\t\tkey: "substitute",
\t\tvalue: function substitute(content, url) {
\t\t\tvar relUrls;
\t\t\tif (url) {
\t\t\t\trelUrls = this.relativeTo(url);
\t\t\t} else {
\t\t\t\trelUrls = this.urls;
\t\t\t}
\t\t\treturn (0, _replacements.substitute)(content, relUrls, this.replacementUrls);
\t\t}
\t}, {
\t\tkey: "destroy",
\t\tvalue: function destroy() {
\t\t\tthis.settings = undefined;
\t\t\tthis.manifest = undefined;
\t\t\tthis.resources = undefined;
\t\t\tthis.replacementUrls = undefined;
\t\t\tthis.html = undefined;
\t\t\tthis.assets = undefined;
\t\t\tthis.css = undefined;

\t\t\tthis.urls = undefined;
\t\t\tthis.cssUrls = undefined;
\t\t}
\t}]);

\treturn Resources;
}();

exports.default = Resources;
module.exports = exports["default"];

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
\tvalue: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _epubcfi = __webpack_require__(1);

var _epubcfi2 = _interopRequireDefault(_epubcfi);

var _core = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Page List Parser
 * @param {document} [xml]
 */
var PageList = function () {
\tfunction PageList(xml) {
\t\t_classCallCheck(this, PageList);

\t\tthis.pages = [];
\t\tthis.locations = [];
\t\tthis.epubcfi = new _epubcfi2.default();

\t\tthis.firstPage = 0;
\t\tthis.lastPage = 0;
\t\tthis.totalPages = 0;

\t\tthis.toc = undefined;
\t\tthis.ncx = undefined;

\t\tif (xml) {
\t\t\tthis.pageList = this.parse(xml);
\t\t}

\t\tif (this.pageList && this.pageList.length) {
\t\t\tthis.process(this.pageList);
\t\t}
\t}

\t/**
  * Parse PageList Xml
  * @param  {document} xml
  */


\t_createClass(PageList, [{
\t\tkey: "parse",
\t\tvalue: function parse(xml) {
\t\t\tvar html = (0, _core.qs)(xml, "html");
\t\t\tvar ncx = (0, _core.qs)(xml, "ncx");

\t\t\tif (html) {
\t\t\t\treturn this.parseNav(xml);
\t\t\t} else if (ncx) {
\t\t\t\t// Not supported
\t\t\t\t// return this.parseNcx(xml);
\t\t\t\treturn;
\t\t\t}
\t\t}

\t\t/**
   * Parse a Nav PageList
   * @private
   * @param  {document} navHtml
   * @return {PageList.item[]} list
   */

\t}, {
\t\tkey: "parseNav",
\t\tvalue: function parseNav(navHtml) {
\t\t\tvar navElement = (0, _core.querySelectorByType)(navHtml, "nav", "page-list");
\t\t\tvar navItems = navElement ? (0, _core.qsa)(navElement, "li") : [];
\t\t\tvar length = navItems.length;
\t\t\tvar i;
\t\t\tvar list = [];
\t\t\tvar item;

\t\t\tif (!navItems || length === 0) return list;

\t\t\tfor (i = 0; i < length; ++i) {
\t\t\t\titem = this.item(navItems[i]);
\t\t\t\tlist.push(item);
\t\t\t}

\t\t\treturn list;
\t\t}

\t\t/**
   * Page List Item
   * @private
   * @param  {object} item
   * @return {object} pageListItem
   */

\t}, {
\t\tkey: "item",
\t\tvalue: function item(_item) {
\t\t\tvar content = (0, _core.qs)(_item, "a"),
\t\t\t    href = content.getAttribute("href") || "",
\t\t\t    text = content.textContent || "",
\t\t\t    page = parseInt(text),
\t\t\t    isCfi = href.indexOf("epubcfi"),
\t\t\t    split,
\t\t\t    packageUrl,
\t\t\t    cfi;

\t\t\tif (isCfi != -1) {
\t\t\t\tsplit = href.split("#");
\t\t\t\tpackageUrl = split[0];
\t\t\t\tcfi = split.length > 1 ? split[1] : false;
\t\t\t\treturn {
\t\t\t\t\t"cfi": cfi,
\t\t\t\t\t"href": href,
\t\t\t\t\t"packageUrl": packageUrl,
\t\t\t\t\t"page": page
\t\t\t\t};
\t\t\t} else {
\t\t\t\treturn {
\t\t\t\t\t"href": href,
\t\t\t\t\t"page": page
\t\t\t\t};
\t\t\t}
\t\t}

\t\t/**
   * Process pageList items
   * @private
   * @param  {array} pageList
   */

\t}, {
\t\tkey: "process",
\t\tvalue: function process(pageList) {
\t\t\tpageList.forEach(function (item) {
\t\t\t\tthis.pages.push(item.page);
\t\t\t\tif (item.cfi) {
\t\t\t\t\tthis.locations.push(item.cfi);
\t\t\t\t}
\t\t\t}, this);
\t\t\tthis.firstPage = parseInt(this.pages[0]);
\t\t\tthis.lastPage = parseInt(this.pages[this.pages.length - 1]);
\t\t\tthis.totalPages = this.lastPage - this.firstPage;
\t\t}

\t\t/**
   * Get a PageList result from a EpubCFI
   * @param  {string} cfi EpubCFI String
   * @return {string} page
   */

\t}, {
\t\tkey: "pageFromCfi",
\t\tvalue: function pageFromCfi(cfi) {
\t\t\tvar pg = -1;

\t\t\t// Check if the pageList has not been set yet
\t\t\tif (this.locations.length === 0) {
\t\t\t\treturn -1;
\t\t\t}

\t\t\t// TODO: check if CFI is valid?

\t\t\t// check if the cfi is in the location list
\t\t\t// var index = this.locations.indexOf(cfi);
\t\t\tvar index = (0, _core.indexOfSorted)(cfi, this.locations, this.epubcfi.compare);
\t\t\tif (index != -1) {
\t\t\t\tpg = this.pages[index];
\t\t\t} else {
\t\t\t\t// Otherwise add it to the list of locations
\t\t\t\t// Insert it in the correct position in the locations page
\t\t\t\t//index = EPUBJS.core.insert(cfi, this.locations, this.epubcfi.compare);
\t\t\t\tindex = (0, _core.locationOf)(cfi, this.locations, this.epubcfi.compare);
\t\t\t\t// Get the page at the location just before the new one, or return the first
\t\t\t\tpg = index - 1 >= 0 ? this.pages[index - 1] : this.pages[0];
\t\t\t\tif (pg !== undefined) {
\t\t\t\t\t// Add the new page in so that the locations and page array match up
\t\t\t\t\t//this.pages.splice(index, 0, pg);
\t\t\t\t} else {
\t\t\t\t\tpg = -1;
\t\t\t\t}
\t\t\t}
\t\t\treturn pg;
\t\t}

\t\t/**
   * Get an EpubCFI from a Page List Item
   * @param  {string} pg
   * @return {string} cfi
   */

\t}, {
\t\tkey: "cfiFromPage",
\t\tvalue: function cfiFromPage(pg) {
\t\t\tvar cfi = -1;
\t\t\t// check that pg is an int
\t\t\tif (typeof pg != "number") {
\t\t\t\tpg = parseInt(pg);
\t\t\t}

\t\t\t// check if the cfi is in the page list
\t\t\t// Pages could be unsorted.
\t\t\tvar index = this.pages.indexOf(pg);
\t\t\tif (index != -1) {
\t\t\t\tcfi = this.locations[index];
\t\t\t}
\t\t\t// TODO: handle pages not in the list
\t\t\treturn cfi;
\t\t}

\t\t/**
   * Get a Page from Book percentage
   * @param  {number} percent
   * @return {string} page
   */

\t}, {
\t\tkey: "pageFromPercentage",
\t\tvalue: function pageFromPercentage(percent) {
\t\t\tvar pg = Math.round(this.totalPages * percent);
\t\t\treturn pg;
\t\t}

\t\t/**
   * Returns a value between 0 - 1 corresponding to the location of a page
   * @param  {int} pg the page
   * @return {number} percentage
   */

\t}, {
\t\tkey: "percentageFromPage",
\t\tvalue: function percentageFromPage(pg) {
\t\t\tvar percentage = (pg - this.firstPage) / this.totalPages;
\t\t\treturn Math.round(percentage * 1000) / 1000;
\t\t}

\t\t/**
   * Returns a value between 0 - 1 corresponding to the location of a cfi
   * @param  {string} cfi EpubCFI String
   * @return {number} percentage
   */

\t}, {
\t\tkey: "percentageFromCfi",
\t\tvalue: function percentageFromCfi(cfi) {
\t\t\tvar pg = this.pageFromCfi(cfi);
\t\t\tvar percentage = this.percentageFromPage(pg);
\t\t\treturn percentage;
\t\t}
\t}, {
\t\tkey: "destroy",
\t\tvalue: function destroy() {
\t\t\tthis.pages = undefined;
\t\t\tthis.locations = undefined;
\t\t\tthis.epubcfi = undefined;

\t\t\tthis.pageList = undefined;

\t\t\tthis.toc = undefined;
\t\t\tthis.ncx = undefined;
\t\t}
\t}]);

\treturn PageList;
}();

exports.default = PageList;
module.exports = exports["default"];

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
\tvalue: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _core = __webpack_require__(0);

var _constants = __webpack_require__(3);

var _eventEmitter = __webpack_require__(2);

var _eventEmitter2 = _interopRequireDefault(_eventEmitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Figures out the CSS values to apply for a layout
 * @class
 * @param {object} settings
 * @param {string} [settings.layout='reflowable']
 * @param {string} [settings.spread]
 * @param {int} [settings.minSpreadWidth=800]
 * @param {boolean} [settings.evenSpreads=false]
 */
var Layout = function () {
\tfunction Layout(settings) {
\t\t_classCallCheck(this, Layout);

\t\tthis.settings = settings;
\t\tthis.name = settings.layout || "reflowable";
\t\tthis._spread = settings.spread === "none" ? false : true;
\t\tthis._minSpreadWidth = settings.minSpreadWidth || 800;
\t\tthis._evenSpreads = settings.evenSpreads || false;

\t\tif (settings.flow === "scrolled" || settings.flow === "scrolled-continuous" || settings.flow === "scrolled-doc") {
\t\t\tthis._flow = "scrolled";
\t\t} else {
\t\t\tthis._flow = "paginated";
\t\t}

\t\tthis.width = 0;
\t\tthis.height = 0;
\t\tthis.spreadWidth = 0;
\t\tthis.delta = 0;

\t\tthis.columnWidth = 0;
\t\tthis.gap = 0;
\t\tthis.divisor = 1;

\t\tthis.props = {
\t\t\tname: this.name,
\t\t\tspread: this._spread,
\t\t\tflow: this._flow,
\t\t\twidth: 0,
\t\t\theight: 0,
\t\t\tspreadWidth: 0,
\t\t\tdelta: 0,
\t\t\tcolumnWidth: 0,
\t\t\tgap: 0,
\t\t\tdivisor: 1
\t\t};
\t}

\t/**
  * Switch the flow between paginated and scrolled
  * @param  {string} flow paginated | scrolled
  */


\t_createClass(Layout, [{
\t\tkey: "flow",
\t\tvalue: function flow(_flow) {
\t\t\tif (typeof _flow != "undefined") {
\t\t\t\tif (_flow === "scrolled" || _flow === "scrolled-continuous" || _flow === "scrolled-doc") {
\t\t\t\t\tthis._flow = "scrolled";
\t\t\t\t} else {
\t\t\t\t\tthis._flow = "paginated";
\t\t\t\t}
\t\t\t\t// this.props.flow = this._flow;
\t\t\t\tthis.update({ flow: this._flow });
\t\t\t}
\t\t\treturn this._flow;
\t\t}

\t\t/**
   * Switch between using spreads or not, and set the
   * width at which they switch to single.
   * @param  {string} spread true | false
   * @param  {boolean} min integer in pixels
   */

\t}, {
\t\tkey: "spread",
\t\tvalue: function spread(_spread, min) {

\t\t\tif (_spread) {
\t\t\t\tthis._spread = _spread === "none" ? false : true;
\t\t\t\t// this.props.spread = this._spread;
\t\t\t\tthis.update({ spread: this._spread });
\t\t\t}

\t\t\tif (min >= 0) {
\t\t\t\tthis._minSpreadWidth = min;
\t\t\t}

\t\t\treturn this._spread;
\t\t}

\t\t/**
   * Calculate the dimensions of the pagination
   * @param  {number} _width  [description]
   * @param  {number} _height [description]
   * @param  {number} _gap    [description]
   */

\t}, {
\t\tkey: "calculate",
\t\tvalue: function calculate(_width, _height, _gap) {

\t\t\tvar divisor = 1;
\t\t\tvar gap = _gap || 0;

\t\t\t//-- Check the width and create even width columns
\t\t\t// var fullWidth = Math.floor(_width);
\t\t\tvar width = _width;
\t\t\tvar height = _height;

\t\t\tvar section = Math.floor(width / 12);

\t\t\tvar columnWidth;
\t\t\tvar spreadWidth;
\t\t\tvar pageWidth;
\t\t\tvar delta;

\t\t\tif (this._spread && width >= this._minSpreadWidth) {
\t\t\t\tdivisor = 2;
\t\t\t} else {
\t\t\t\tdivisor = 1;
\t\t\t}

\t\t\tif (this.name === "reflowable" && this._flow === "paginated" && !(_gap >= 0)) {
\t\t\t\tgap = section % 2 === 0 ? section : section - 1;
\t\t\t}

\t\t\tif (this.name === "pre-paginated") {
\t\t\t\tgap = 0;
\t\t\t}

\t\t\t//-- Double Page
\t\t\tif (divisor > 1) {
\t\t\t\t// width = width - gap;
\t\t\t\t// columnWidth = (width - gap) / divisor;
\t\t\t\t// gap = gap / divisor;
\t\t\t\tcolumnWidth = width / divisor - gap;
\t\t\t\tpageWidth = columnWidth + gap;
\t\t\t} else {
\t\t\t\tcolumnWidth = width;
\t\t\t\tpageWidth = width;
\t\t\t}

\t\t\tif (this.name === "pre-paginated" && divisor > 1) {
\t\t\t\twidth = columnWidth;
\t\t\t}

\t\t\tspreadWidth = columnWidth * divisor + gap;

\t\t\tdelta = width;

\t\t\tthis.width = width;
\t\t\tthis.height = height;
\t\t\tthis.spreadWidth = spreadWidth;
\t\t\tthis.pageWidth = pageWidth;
\t\t\tthis.delta = delta;

\t\t\tthis.columnWidth = columnWidth;
\t\t\tthis.gap = gap;
\t\t\tthis.divisor = divisor;

\t\t\t// this.props.width = width;
\t\t\t// this.props.height = _height;
\t\t\t// this.props.spreadWidth = spreadWidth;
\t\t\t// this.props.pageWidth = pageWidth;
\t\t\t// this.props.delta = delta;
\t\t\t//
\t\t\t// this.props.columnWidth = colWidth;
\t\t\t// this.props.gap = gap;
\t\t\t// this.props.divisor = divisor;

\t\t\tthis.update({
\t\t\t\twidth: width,
\t\t\t\theight: height,
\t\t\t\tspreadWidth: spreadWidth,
\t\t\t\tpageWidth: pageWidth,
\t\t\t\tdelta: delta,
\t\t\t\tcolumnWidth: columnWidth,
\t\t\t\tgap: gap,
\t\t\t\tdivisor: divisor
\t\t\t});
\t\t}

\t\t/**
   * Apply Css to a Document
   * @param  {Contents} contents
   * @return {Promise}
   */

\t}, {
\t\tkey: "format",
\t\tvalue: function format(contents) {
\t\t\tvar formating;

\t\t\tif (this.name === "pre-paginated") {
\t\t\t\tformating = contents.fit(this.columnWidth, this.height);
\t\t\t} else if (this._flow === "paginated") {
\t\t\t\tformating = contents.columns(this.width, this.height, this.columnWidth, this.gap);
\t\t\t} else {
\t\t\t\t// scrolled
\t\t\t\tformating = contents.size(this.width, null);
\t\t\t}

\t\t\treturn formating; // might be a promise in some View Managers
\t\t}

\t\t/**
   * Count number of pages
   * @param  {number} totalLength
   * @param  {number} pageLength
   * @return {{spreads: Number, pages: Number}}
   */

\t}, {
\t\tkey: "count",
\t\tvalue: function count(totalLength, pageLength) {

\t\t\tvar spreads = void 0,
\t\t\t    pages = void 0;

\t\t\tif (this.name === "pre-paginated") {
\t\t\t\tspreads = 1;
\t\t\t\tpages = 1;
\t\t\t} else if (this._flow === "paginated") {
\t\t\t\tpageLength = pageLength || this.delta;
\t\t\t\tspreads = Math.ceil(totalLength / pageLength);
\t\t\t\tpages = spreads * this.divisor;
\t\t\t} else {
\t\t\t\t// scrolled
\t\t\t\tpageLength = pageLength || this.height;
\t\t\t\tspreads = Math.ceil(totalLength / pageLength);
\t\t\t\tpages = spreads;
\t\t\t}

\t\t\treturn {
\t\t\t\tspreads: spreads,
\t\t\t\tpages: pages
\t\t\t};
\t\t}
\t}, {
\t\tkey: "update",
\t\tvalue: function update(props) {
\t\t\tvar _this = this;

\t\t\t// Remove props that haven't changed
\t\t\tObject.keys(props).forEach(function (propName) {
\t\t\t\tif (_this.props[propName] === props[propName]) {
\t\t\t\t\tdelete props[propName];
\t\t\t\t}
\t\t\t});

\t\t\tif (Object.keys(props).length > 0) {
\t\t\t\tvar newProps = (0, _core.extend)(this.props, props);
\t\t\t\tthis.emit(_constants.EVENTS.LAYOUT.UPDATED, newProps, props);
\t\t\t}
\t\t}
\t}]);

\treturn Layout;
}();

(0, _eventEmitter2.default)(Layout.prototype);

exports.default = Layout;
module.exports = exports["default"];

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
\tvalue: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _url = __webpack_require__(5);

var _url2 = _interopRequireDefault(_url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Themes to apply to displayed content
 * @class
 * @param {Rendition} rendition
 */
var Themes = function () {
\tfunction Themes(rendition) {
\t\t_classCallCheck(this, Themes);

\t\tthis.rendition = rendition;
\t\tthis._themes = {
\t\t\t"default": {
\t\t\t\t"rules": {},
\t\t\t\t"url": "",
\t\t\t\t"serialized": ""
\t\t\t}
\t\t};
\t\tthis._overrides = {};
\t\tthis._current = "default";
\t\tthis._injected = [];
\t\tthis.rendition.hooks.content.register(this.inject.bind(this));
\t\tthis.rendition.hooks.content.register(this.overrides.bind(this));
\t}

\t/**
  * Add themes to be used by a rendition
  * @param {object | string}
  * @example themes.register("light", "http://example.com/light.css")
  * @example themes.register("light", { "body": { "color": "purple"}})
  * @example themes.register({ "light" : {...}, "dark" : {...}})
  */


\t_createClass(Themes, [{
\t\tkey: "register",
\t\tvalue: function register() {
\t\t\tif (arguments.length === 0) {
\t\t\t\treturn;
\t\t\t}
\t\t\tif (arguments.length === 1 && _typeof(arguments[0]) === "object") {
\t\t\t\treturn this.registerThemes(arguments[0]);
\t\t\t}
\t\t\tif (arguments.length === 1 && typeof arguments[0] === "string") {
\t\t\t\treturn this.default(arguments[0]);
\t\t\t}
\t\t\tif (arguments.length === 2 && typeof arguments[1] === "string") {
\t\t\t\treturn this.registerUrl(arguments[0], arguments[1]);
\t\t\t}
\t\t\tif (arguments.length === 2 && _typeof(arguments[1]) === "object") {
\t\t\t\treturn this.registerRules(arguments[0], arguments[1]);
\t\t\t}
\t\t}

\t\t/**
   * Add a default theme to be used by a rendition
   * @param {object | string} theme
   * @example themes.register("http://example.com/default.css")
   * @example themes.register({ "body": { "color": "purple"}})
   */

\t}, {
\t\tkey: "default",
\t\tvalue: function _default(theme) {
\t\t\tif (!theme) {
\t\t\t\treturn;
\t\t\t}
\t\t\tif (typeof theme === "string") {
\t\t\t\treturn this.registerUrl("default", theme);
\t\t\t}
\t\t\tif ((typeof theme === "undefined" ? "undefined" : _typeof(theme)) === "object") {
\t\t\t\treturn this.registerRules("default", theme);
\t\t\t}
\t\t}
\t}, {
\t\tkey: "registerThemes",
\t\tvalue: function registerThemes(themes) {
\t\t\tfor (var theme in themes) {
\t\t\t\tif (themes.hasOwnProperty(theme)) {
\t\t\t\t\tif (typeof themes[theme] === "string") {
\t\t\t\t\t\tthis.registerUrl(theme, themes[theme]);
\t\t\t\t\t} else {
\t\t\t\t\t\tthis.registerRules(theme, themes[theme]);
\t\t\t\t\t}
\t\t\t\t}
\t\t\t}
\t\t}
\t}, {
\t\tkey: "registerUrl",
\t\tvalue: function registerUrl(name, input) {
\t\t\tvar url = new _url2.default(input);
\t\t\tthis._themes[name] = { "url": url.toString() };
\t\t\tif (this._injected[name]) {
\t\t\t\tthis.update(name);
\t\t\t}
\t\t}
\t}, {
\t\tkey: "registerRules",
\t\tvalue: function registerRules(name, rules) {
\t\t\tthis._themes[name] = { "rules": rules };
\t\t\t// TODO: serialize css rules
\t\t\tif (this._injected[name]) {
\t\t\t\tthis.update(name);
\t\t\t}
\t\t}
\t}, {
\t\tkey: "select",
\t\tvalue: function select(name) {
\t\t\tvar prev = this._current;
\t\t\tvar contents;

\t\t\tthis._current = name;
\t\t\tthis.update(name);

\t\t\tcontents = this.rendition.getContents();
\t\t\tcontents.forEach(function (content) {
\t\t\t\tcontent.removeClass(prev);
\t\t\t\tcontent.addClass(name);
\t\t\t});
\t\t}
\t}, {
\t\tkey: "update",
\t\tvalue: function update(name) {
\t\t\tvar _this = this;

\t\t\tvar contents = this.rendition.getContents();
\t\t\tcontents.forEach(function (content) {
\t\t\t\t_this.add(name, content);
\t\t\t});
\t\t}
\t}, {
\t\tkey: "inject",
\t\tvalue: function inject(contents) {
\t\t\tvar links = [];
\t\t\tvar themes = this._themes;
\t\t\tvar theme;

\t\t\tfor (var name in themes) {
\t\t\t\tif (themes.hasOwnProperty(name) && (name === this._current || name === "default")) {
\t\t\t\t\ttheme = themes[name];
\t\t\t\t\tif (theme.rules && Object.keys(theme.rules).length > 0 || theme.url && links.indexOf(theme.url) === -1) {
\t\t\t\t\t\tthis.add(name, contents);
\t\t\t\t\t}
\t\t\t\t\tthis._injected.push(name);
\t\t\t\t}
\t\t\t}

\t\t\tif (this._current != "default") {
\t\t\t\tcontents.addClass(this._current);
\t\t\t}
\t\t}
\t}, {
\t\tkey: "add",
\t\tvalue: function add(name, contents) {
\t\t\tvar theme = this._themes[name];

\t\t\tif (!theme || !contents) {
\t\t\t\treturn;
\t\t\t}

\t\t\tif (theme.url) {
\t\t\t\tcontents.addStylesheet(theme.url);
\t\t\t} else if (theme.serialized) {
\t\t\t\t// TODO: handle serialized
\t\t\t} else if (theme.rules) {
\t\t\t\tcontents.addStylesheetRules(theme.rules);
\t\t\t\ttheme.injected = true;
\t\t\t}
\t\t}
\t}, {
\t\tkey: "override",
\t\tvalue: function override(name, value) {
\t\t\tvar _this2 = this;

\t\t\tvar contents = this.rendition.getContents();

\t\t\tthis._overrides[name] = value;

\t\t\tcontents.forEach(function (content) {
\t\t\t\tcontent.css(name, _this2._overrides[name]);
\t\t\t});
\t\t}
\t}, {
\t\tkey: "overrides",
\t\tvalue: function overrides(contents) {
\t\t\tvar overrides = this._overrides;

\t\t\tfor (var rule in overrides) {
\t\t\t\tif (overrides.hasOwnProperty(rule)) {
\t\t\t\t\tcontents.css(rule, overrides[rule]);
\t\t\t\t}
\t\t\t}
\t\t}

\t\t/**
   * Adjust the font size of a rendition
   * @param {number} size
   */

\t}, {
\t\tkey: "fontSize",
\t\tvalue: function fontSize(size) {
\t\t\tthis.override("font-size", size);
\t\t}

\t\t/**
   * Adjust the font-family of a rendition
   * @param {string} f
   */

\t}, {
\t\tkey: "font",
\t\tvalue: function font(f) {
\t\t\tthis.override("font-family", f);
\t\t}
\t}, {
\t\tkey: "destroy",
\t\tvalue: function destroy() {
\t\t\tthis.rendition = undefined;
\t\t\tthis._themes = undefined;
\t\t\tthis._overrides = undefined;
\t\t\tthis._current = undefined;
\t\t\tthis._injected = undefined;
\t\t}
\t}]);

\treturn Themes;
}();

exports.default = Themes;
module.exports = exports["default"];

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
\tvalue: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _eventEmitter = __webpack_require__(2);

var _eventEmitter2 = _interopRequireDefault(_eventEmitter);

var _epubcfi = __webpack_require__(1);

var _epubcfi2 = _interopRequireDefault(_epubcfi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
\t* Handles managing adding & removing Annotations
\t* @param {Rendition} rendition
\t* @class
\t*/
var Annotations = function () {
\tfunction Annotations(rendition) {
\t\t_classCallCheck(this, Annotations);

\t\tthis.rendition = rendition;
\t\tthis.highlights = [];
\t\tthis.underlines = [];
\t\tthis.marks = [];
\t\tthis._annotations = {};
\t\tthis._annotationsBySectionIndex = {};

\t\tthis.rendition.hooks.render.register(this.inject.bind(this));
\t\tthis.rendition.hooks.unloaded.register(this.clear.bind(this));
\t}

\t/**
  * Add an annotation to store
  * @param {string} type Type of annotation to add: "highlight", "underline", "mark"
  * @param {EpubCFI} cfiRange EpubCFI range to attach annotation to
  * @param {object} data Data to assign to annotation
  * @param {function} [cb] Callback after annotation is added
  * @returns {Annotation} annotation
  */


\t_createClass(Annotations, [{
\t\tkey: "add",
\t\tvalue: function add(type, cfiRange, data, cb) {
\t\t\tvar hash = encodeURI(cfiRange);
\t\t\tvar cfi = new _epubcfi2.default(cfiRange);
\t\t\tvar sectionIndex = cfi.spinePos;
\t\t\tvar annotation = new Annotation({
\t\t\t\ttype: type,
\t\t\t\tcfiRange: cfiRange,
\t\t\t\tdata: data,
\t\t\t\tsectionIndex: sectionIndex,
\t\t\t\tcb: cb
\t\t\t});

\t\t\tthis._annotations[hash] = annotation;

\t\t\tif (sectionIndex in this._annotationsBySectionIndex) {
\t\t\t\tthis._annotationsBySectionIndex[sectionIndex].push(hash);
\t\t\t} else {
\t\t\t\tthis._annotationsBySectionIndex[sectionIndex] = [hash];
\t\t\t}

\t\t\tvar views = this.rendition.views();

\t\t\tviews.forEach(function (view) {
\t\t\t\tif (annotation.sectionIndex === view.index) {
\t\t\t\t\tannotation.attach(view);
\t\t\t\t}
\t\t\t});

\t\t\treturn annotation;
\t\t}

\t\t/**
   * Remove an annotation from store
   * @param {EpubCFI} cfiRange EpubCFI range the annotation is attached to
   * @param {string} type Type of annotation to add: "highlight", "underline", "mark"
   */

\t}, {
\t\tkey: "remove",
\t\tvalue: function remove(cfiRange, type) {
\t\t\tvar _this = this;

\t\t\tvar hash = encodeURI(cfiRange);

\t\t\tif (hash in this._annotations) {
\t\t\t\tvar annotation = this._annotations[hash];

\t\t\t\tif (type && annotation.type !== type) {
\t\t\t\t\treturn;
\t\t\t\t}

\t\t\t\tvar views = this.rendition.views();
\t\t\t\tviews.forEach(function (view) {
\t\t\t\t\t_this._removeFromAnnotationBySectionIndex(annotation.sectionIndex, hash);
\t\t\t\t\tif (annotation.sectionIndex === view.index) {
\t\t\t\t\t\tannotation.detach(view);
\t\t\t\t\t}
\t\t\t\t});

\t\t\t\tdelete this._annotations[hash];
\t\t\t}
\t\t}

\t\t/**
   * Remove an annotations by Section Index
   * @private
   */

\t}, {
\t\tkey: "_removeFromAnnotationBySectionIndex",
\t\tvalue: function _removeFromAnnotationBySectionIndex(sectionIndex, hash) {
\t\t\tthis._annotationsBySectionIndex[sectionIndex] = this._annotationsAt(sectionIndex).filter(function (h) {
\t\t\t\treturn h !== hash;
\t\t\t});
\t\t}

\t\t/**
   * Get annotations by Section Index
   * @private
   */

\t}, {
\t\tkey: "_annotationsAt",
\t\tvalue: function _annotationsAt(index) {
\t\t\treturn this._annotationsBySectionIndex[index];
\t\t}

\t\t/**
   * Add a highlight to the store
   * @param {EpubCFI} cfiRange EpubCFI range to attach annotation to
   * @param {object} data Data to assign to annotation
   * @param {function} cb Callback after annotation is added
   */

\t}, {
\t\tkey: "highlight",
\t\tvalue: function highlight(cfiRange, data, cb) {
\t\t\tthis.add("highlight", cfiRange, data, cb);
\t\t}

\t\t/**
   * Add a underline to the store
   * @param {EpubCFI} cfiRange EpubCFI range to attach annotation to
   * @param {object} data Data to assign to annotation
   * @param {function} cb Callback after annotation is added
   */

\t}, {
\t\tkey: "underline",
\t\tvalue: function underline(cfiRange, data, cb) {
\t\t\tthis.add("underline", cfiRange, data, cb);
\t\t}

\t\t/**
   * Add a mark to the store
   * @param {EpubCFI} cfiRange EpubCFI range to attach annotation to
   * @param {object} data Data to assign to annotation
   * @param {function} cb Callback after annotation is added
   */

\t}, {
\t\tkey: "mark",
\t\tvalue: function mark(cfiRange, data, cb) {
\t\t\tthis.add("mark", cfiRange, data, cb);
\t\t}

\t\t/**
   * iterate over annotations in the store
   */

\t}, {
\t\tkey: "each",
\t\tvalue: function each() {
\t\t\treturn this._annotations.forEach.apply(this._annotations, arguments);
\t\t}

\t\t/**
   * Hook for injecting annotation into a view
   * @param {View} view
   * @private
   */

\t}, {
\t\tkey: "inject",
\t\tvalue: function inject(view) {
\t\t\tvar _this2 = this;

\t\t\tvar sectionIndex = view.index;
\t\t\tif (sectionIndex in this._annotationsBySectionIndex) {
\t\t\t\tvar annotations = this._annotationsBySectionIndex[sectionIndex];
\t\t\t\tannotations.forEach(function (hash) {
\t\t\t\t\tvar annotation = _this2._annotations[hash];
\t\t\t\t\tannotation.attach(view);
\t\t\t\t});
\t\t\t}
\t\t}

\t\t/**
   * Hook for removing annotation from a view
   * @param {View} view
   * @private
   */

\t}, {
\t\tkey: "clear",
\t\tvalue: function clear(view) {
\t\t\tvar _this3 = this;

\t\t\tvar sectionIndex = view.index;
\t\t\tif (sectionIndex in this._annotationsBySectionIndex) {
\t\t\t\tvar annotations = this._annotationsBySectionIndex[sectionIndex];
\t\t\t\tannotations.forEach(function (hash) {
\t\t\t\t\tvar annotation = _this3._annotations[hash];
\t\t\t\t\tannotation.detach(view);
\t\t\t\t});
\t\t\t}
\t\t}

\t\t/**
   * [Not Implemented] Show annotations
   * @TODO: needs implementation in View
   */

\t}, {
\t\tkey: "show",
\t\tvalue: function show() {}

\t\t/**
   * [Not Implemented] Hide annotations
   * @TODO: needs implementation in View
   */

\t}, {
\t\tkey: "hide",
\t\tvalue: function hide() {}
\t}]);

\treturn Annotations;
}();

/**
 * Annotation object
 * @class
 * @param {object} options
 * @param {string} options.type Type of annotation to add: "highlight", "underline", "mark"
 * @param {EpubCFI} options.cfiRange EpubCFI range to attach annotation to
 * @param {object} options.data Data to assign to annotation
 * @param {int} options.sectionIndex Index in the Spine of the Section annotation belongs to
 * @param {function} [options.cb] Callback after annotation is added
 * @returns {Annotation} annotation
 */


var Annotation = function () {
\tfunction Annotation(_ref) {
\t\tvar type = _ref.type,
\t\t    cfiRange = _ref.cfiRange,
\t\t    data = _ref.data,
\t\t    sectionIndex = _ref.sectionIndex,
\t\t    cb = _ref.cb;

\t\t_classCallCheck(this, Annotation);

\t\tthis.type = type;
\t\tthis.cfiRange = cfiRange;
\t\tthis.data = data;
\t\tthis.sectionIndex = sectionIndex;
\t\tthis.mark = undefined;
\t\tthis.cb = cb;
\t}

\t/**
  * Update stored data
  * @param {object} data
  */


\t_createClass(Annotation, [{
\t\tkey: "update",
\t\tvalue: function update(data) {
\t\t\tthis.data = data;
\t\t}

\t\t/**
   * Add to a view
   * @param {View} view
   */

\t}, {
\t\tkey: "attach",
\t\tvalue: function attach(view) {
\t\t\tvar cfiRange = this.cfiRange,
\t\t\t    data = this.data,
\t\t\t    type = this.type,
\t\t\t    mark = this.mark,
\t\t\t    cb = this.cb;

\t\t\tvar result = void 0;

\t\t\tif (type === "highlight") {
\t\t\t\tresult = view.highlight(cfiRange, data, cb);
\t\t\t} else if (type === "underline") {
\t\t\t\tresult = view.underline(cfiRange, data, cb);
\t\t\t} else if (type === "mark") {
\t\t\t\tresult = view.mark(cfiRange, data, cb);
\t\t\t}

\t\t\tthis.mark = result;

\t\t\treturn result;
\t\t}

\t\t/**
   * Remove from a view
   * @param {View} view
   */

\t}, {
\t\tkey: "detach",
\t\tvalue: function detach(view) {
\t\t\tvar cfiRange = this.cfiRange,
\t\t\t    type = this.type;

\t\t\tvar result = void 0;

\t\t\tif (view) {
\t\t\t\tif (type === "highlight") {
\t\t\t\t\tresult = view.unhighlight(cfiRange);
\t\t\t\t} else if (type === "underline") {
\t\t\t\t\tresult = view.ununderline(cfiRange);
\t\t\t\t} else if (type === "mark") {
\t\t\t\t\tresult = view.unmark(cfiRange);
\t\t\t\t}
\t\t\t}

\t\t\tthis.mark = undefined;

\t\t\treturn result;
\t\t}

\t\t/**
   * [Not Implemented] Get text of an annotation
   * @TODO: needs implementation in contents
   */

\t}, {
\t\tkey: "text",
\t\tvalue: function text() {}
\t}]);

\treturn Annotation;
}();

(0, _eventEmitter2.default)(Annotation.prototype);

exports.default = Annotations;
module.exports = exports["default"];

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Underline = exports.Highlight = exports.Mark = exports.Pane = undefined;

var _get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
        var parent = Object.getPrototypeOf(object);if (parent === null) {
            return undefined;
        } else {
            return get(parent, property, receiver);
        }
    } else if ("value" in desc) {
        return desc.value;
    } else {
        var getter = desc.get;if (getter === undefined) {
            return undefined;
        }return getter.call(receiver);
    }
};

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _svg = __webpack_require__(54);

var _svg2 = _interopRequireDefault(_svg);

var _events = __webpack_require__(55);

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var Pane = exports.Pane = function () {
    function Pane(target) {
        var container = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.body;

        _classCallCheck(this, Pane);

        this.target = target;
        this.element = _svg2.default.createElement('svg');
        this.marks = [];

        // Match the coordinates of the target element
        this.element.style.position = 'absolute';
        // Disable pointer events
        this.element.setAttribute('pointer-events', 'none');

        // Set up mouse event proxying between the target element and the marks
        _events2.default.proxyMouse(this.target, this.marks);

        this.container = container;
        this.container.appendChild(this.element);

        this.render();
    }

    _createClass(Pane, [{
        key: 'addMark',
        value: function addMark(mark) {
            var g = _svg2.default.createElement('g');
            this.element.appendChild(g);
            mark.bind(g, this.container);

            this.marks.push(mark);

            mark.render();
            return mark;
        }
    }, {
        key: 'removeMark',
        value: function removeMark(mark) {
            var idx = this.marks.indexOf(mark);
            if (idx === -1) {
                return;
            }
            var el = mark.unbind();
            this.element.removeChild(el);
            this.marks.splice(idx, 1);
        }
    }, {
        key: 'render',
        value: function render() {
            setCoords(this.element, coords(this.target, this.container));
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.marks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var m = _step.value;

                    m.render();
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }]);

    return Pane;
}();

var Mark = exports.Mark = function () {
    function Mark() {
        _classCallCheck(this, Mark);

        this.element = null;
    }

    _createClass(Mark, [{
        key: 'bind',
        value: function bind(element, container) {
            this.element = element;
            this.container = container;
        }
    }, {
        key: 'unbind',
        value: function unbind() {
            var el = this.element;
            this.element = null;
            return el;
        }
    }, {
        key: 'render',
        value: function render() {}
    }, {
        key: 'dispatchEvent',
        value: function dispatchEvent(e) {
            if (!this.element) return;
            this.element.dispatchEvent(e);
        }
    }, {
        key: 'getBoundingClientRect',
        value: function getBoundingClientRect() {
            return this.element.getBoundingClientRect();
        }
    }, {
        key: 'getClientRects',
        value: function getClientRects() {
            var rects = [];
            var el = this.element.firstChild;
            while (el) {
                rects.push(el.getBoundingClientRect());
                el = el.nextSibling;
            }
            return rects;
        }
    }, {
        key: 'filteredRanges',
        value: function filteredRanges() {
            var rects = Array.from(this.range.getClientRects());

            // De-duplicate the boxes
            return rects.filter(function (box) {
                for (var i = 0; i < rects.length; i++) {
                    if (rects[i] === box) {
                        return true;
                    }
                    var contained = contains(rects[i], box);
                    if (contained) {
                        return false;
                    }
                }
                return true;
            });
        }
    }]);

    return Mark;
}();

var Highlight = exports.Highlight = function (_Mark) {
    _inherits(Highlight, _Mark);

    function Highlight(range, className, data, attributes) {
        _classCallCheck(this, Highlight);

        var _this = _possibleConstructorReturn(this, (Highlight.__proto__ || Object.getPrototypeOf(Highlight)).call(this));

        _this.range = range;
        _this.className = className;
        _this.data = data || {};
        _this.attributes = attributes || {};
        return _this;
    }

    _createClass(Highlight, [{
        key: 'bind',
        value: function bind(element, container) {
            _get(Highlight.prototype.__proto__ || Object.getPrototypeOf(Highlight.prototype), 'bind', this).call(this, element, container);

            for (var attr in this.data) {
                if (this.data.hasOwnProperty(attr)) {
                    this.element.dataset[attr] = this.data[attr];
                }
            }

            for (var attr in this.attributes) {
                if (this.attributes.hasOwnProperty(attr)) {
                    this.element.setAttribute(attr, this.attributes[attr]);
                }
            }

            if (this.className) {
                this.element.classList.add(this.className);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            // Empty element
            while (this.element.firstChild) {
                this.element.removeChild(this.element.firstChild);
            }

            var docFrag = this.element.ownerDocument.createDocumentFragment();
            var filtered = this.filteredRanges();
            var offset = this.element.getBoundingClientRect();
            var container = this.container.getBoundingClientRect();

            for (var i = 0, len = filtered.length; i < len; i++) {
                var r = filtered[i];
                var el = _svg2.default.createElement('rect');
                el.setAttribute('x', r.left - offset.left + container.left);
                el.setAttribute('y', r.top - offset.top + container.top);
                el.setAttribute('height', r.height);
                el.setAttribute('width', r.width);
                docFrag.appendChild(el);
            }

            this.element.appendChild(docFrag);
        }
    }]);

    return Highlight;
}(Mark);

var Underline = exports.Underline = function (_Highlight) {
    _inherits(Underline, _Highlight);

    function Underline(range, className, data, attributes) {
        _classCallCheck(this, Underline);

        return _possibleConstructorReturn(this, (Underline.__proto__ || Object.getPrototypeOf(Underline)).call(this, range, className, data, attributes));
    }

    _createClass(Underline, [{
        key: 'render',
        value: function render() {
            // Empty element
            while (this.element.firstChild) {
                this.element.removeChild(this.element.firstChild);
            }

            var docFrag = this.element.ownerDocument.createDocumentFragment();
            var filtered = this.filteredRanges();
            var offset = this.element.getBoundingClientRect();
            var container = this.container.getBoundingClientRect();

            for (var i = 0, len = filtered.length; i < len; i++) {
                var r = filtered[i];

                var rect = _svg2.default.createElement('rect');
                rect.setAttribute('x', r.left - offset.left + container.left);
                rect.setAttribute('y', r.top - offset.top + container.top);
                rect.setAttribute('height', r.height);
                rect.setAttribute('width', r.width);
                rect.setAttribute('fill', 'none');

                var line = _svg2.default.createElement('line');
                line.setAttribute('x1', r.left - offset.left + container.left);
                line.setAttribute('x2', r.left - offset.left + container.left + r.width);
                line.setAttribute('y1', r.top - offset.top + container.top + r.height - 1);
                line.setAttribute('y2', r.top - offset.top + container.top + r.height - 1);

                line.setAttribute('stroke-width', 1);
                line.setAttribute('stroke', 'black'); //TODO: match text color?
                line.setAttribute('stroke-linecap', 'square');

                docFrag.appendChild(rect);

                docFrag.appendChild(line);
            }

            this.element.appendChild(docFrag);
        }
    }]);

    return Underline;
}(Highlight);

function coords(el, container) {
    var offset = container.getBoundingClientRect();
    var rect = el.getBoundingClientRect();

    return {
        top: rect.top - offset.top,
        left: rect.left - offset.left,
        height: el.scrollHeight,
        width: el.scrollWidth
    };
}

function setCoords(el, coords) {
    el.style.top = coords.top + 'px';
    el.style.left = coords.left + 'px';
    el.style.height = coords.height + 'px';
    el.style.width = coords.width + 'px';
}

function contains(rect1, rect2) {
    return rect2.right <= rect1.right && rect2.left >= rect1.left && rect2.top >= rect1.top && rect2.bottom <= rect1.bottom;
}

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createElement = createElement;
function createElement(name) {
    return document.createElementNS('http://www.w3.org/2000/svg', name);
}

exports.default = {
    createElement: createElement
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.proxyMouse = proxyMouse;
exports.clone = clone;
// import 'babelify/polyfill'; // needed for Object.assign

exports.default = {
    proxyMouse: proxyMouse
};

/**
 * Start proxying all mouse events that occur on the target node to each node in
 * a set of tracked nodes.
 *
 * The items in tracked do not strictly have to be DOM Nodes, but they do have
 * to have dispatchEvent, getBoundingClientRect, and getClientRects methods.
 *
 * @param target {Node} The node on which to listen for mouse events.
 * @param tracked {Node[]} A (possibly mutable) array of nodes to which to proxy
 *                         events.
 */

function proxyMouse(target, tracked) {
    function dispatch(e) {
        // We walk through the set of tracked elements in reverse order so that
        // events are sent to those most recently added first.
        //
        // This is the least surprising behaviour as it simulates the way the
        // browser would work if items added later were drawn "on top of"
        // earlier ones.
        for (var i = tracked.length - 1; i >= 0; i--) {
            var t = tracked[i];
            var x = e.clientX;
            var y = e.clientY;

            if (e.touches && e.touches.length) {
                x = e.touches[0].clientX;
                y = e.touches[0].clientY;
            }

            if (!contains(t, target, x, y)) {
                continue;
            }

            // The event targets this mark, so dispatch a cloned event:
            t.dispatchEvent(clone(e));
            // We only dispatch the cloned event to the first matching mark.
            break;
        }
    }

    if (target.nodeName === "iframe" || target.nodeName === "IFRAME") {

        try {
            // Try to get the contents if same domain
            this.target = target.contentDocument;
        } catch (err) {
            this.target = target;
        }
    } else {
        this.target = target;
    }

    var _arr = ['mouseup', 'mousedown', 'click', 'touchstart'];
    for (var _i = 0; _i < _arr.length; _i++) {
        var ev = _arr[_i];
        this.target.addEventListener(ev, function (e) {
            return dispatch(e);
        }, false);
    }
}

/**
 * Clone a mouse event object.
 *
 * @param e {MouseEvent} A mouse event object to clone.
 * @returns {MouseEvent}
 */
function clone(e) {
    var opts = Object.assign({}, e, { bubbles: false });
    try {
        return new MouseEvent(e.type, opts);
    } catch (err) {
        // compat: webkit
        var copy = document.createEvent('MouseEvents');
        copy.initMouseEvent(e.type, false, opts.cancelable, opts.view, opts.detail, opts.screenX, opts.screenY, opts.clientX, opts.clientY, opts.ctrlKey, opts.altKey, opts.shiftKey, opts.metaKey, opts.button, opts.relatedTarget);
        return copy;
    }
}

/**
 * Check if the item contains the point denoted by the passed coordinates
 * @param item {Object} An object with getBoundingClientRect and getClientRects
 *                      methods.
 * @param x {Number}
 * @param y {Number}
 * @returns {Boolean}
 */
function contains(item, target, x, y) {
    // offset
    var offset = target.getBoundingClientRect();

    function rectContains(r, x, y) {
        var top = r.top - offset.top;
        var left = r.left - offset.left;
        var bottom = top + r.height;
        var right = left + r.width;
        return top <= y && left <= x && bottom > y && right > x;
    }

    // Check overall bounding box first
    var rect = item.getBoundingClientRect();
    if (!rectContains(rect, x, y)) {
        return false;
    }

    // Then continue to check each child rect
    var rects = item.getClientRects();
    for (var i = 0, len = rects.length; i < len; i++) {
        if (rectContains(rects[i], x, y)) {
            return true;
        }
    }
    return false;
}

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
\tvalue: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _core = __webpack_require__(0);

var _throttle = __webpack_require__(57);

var _throttle2 = _interopRequireDefault(_throttle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stage = function () {
\tfunction Stage(_options) {
\t\t_classCallCheck(this, Stage);

\t\tthis.settings = _options || {};
\t\tthis.id = "epubjs-container-" + (0, _core.uuid)();

\t\tthis.container = this.create(this.settings);

\t\tif (this.settings.hidden) {
\t\t\tthis.wrapper = this.wrap(this.container);
\t\t}
\t}

\t/*
 * Creates an element to render to.
 * Resizes to passed width and height or to the elements size
 */


\t_createClass(Stage, [{
\t\tkey: "create",
\t\tvalue: function create(options) {
\t\t\tvar height = options.height; // !== false ? options.height : "100%";
\t\t\tvar width = options.width; // !== false ? options.width : "100%";
\t\t\tvar overflow = options.overflow || false;
\t\t\tvar axis = options.axis || "vertical";
\t\t\tvar direction = options.direction;

\t\t\tif (options.height && (0, _core.isNumber)(options.height)) {
\t\t\t\theight = options.height + "px";
\t\t\t}

\t\t\tif (options.width && (0, _core.isNumber)(options.width)) {
\t\t\t\twidth = options.width + "px";
\t\t\t}

\t\t\t// Create new container element
\t\t\tvar container = document.createElement("div");

\t\t\tcontainer.id = this.id;
\t\t\tcontainer.classList.add("epub-container");

\t\t\t// Style Element
\t\t\t// container.style.fontSize = "0";
\t\t\tcontainer.style.wordSpacing = "0";
\t\t\tcontainer.style.lineHeight = "0";
\t\t\tcontainer.style.verticalAlign = "top";
\t\t\tcontainer.style.position = "relative";

\t\t\tif (axis === "horizontal") {
\t\t\t\t// container.style.whiteSpace = "nowrap";
\t\t\t\tcontainer.style.display = "flex";
\t\t\t\tcontainer.style.flexDirection = "row";
\t\t\t\tcontainer.style.flexWrap = "nowrap";
\t\t\t}

\t\t\tif (width) {
\t\t\t\tcontainer.style.width = width;
\t\t\t}

\t\t\tif (height) {
\t\t\t\tcontainer.style.height = height;
\t\t\t}

\t\t\tif (overflow) {
\t\t\t\tcontainer.style.overflow = overflow;
\t\t\t}

\t\t\tif (direction) {
\t\t\t\tcontainer.dir = direction;
\t\t\t\tcontainer.style["direction"] = direction;
\t\t\t}

\t\t\tif (direction && this.settings.fullsize) {
\t\t\t\tdocument.body.style["direction"] = direction;
\t\t\t}

\t\t\treturn container;
\t\t}
\t}, {
\t\tkey: "wrap",
\t\tvalue: function wrap(container) {
\t\t\tvar wrapper = document.createElement("div");

\t\t\twrapper.style.visibility = "hidden";
\t\t\twrapper.style.overflow = "hidden";
\t\t\twrapper.style.width = "0";
\t\t\twrapper.style.height = "0";

\t\t\twrapper.appendChild(container);
\t\t\treturn wrapper;
\t\t}
\t}, {
\t\tkey: "getElement",
\t\tvalue: function getElement(_element) {
\t\t\tvar element;

\t\t\tif ((0, _core.isElement)(_element)) {
\t\t\t\telement = _element;
\t\t\t} else if (typeof _element === "string") {
\t\t\t\telement = document.getElementById(_element);
\t\t\t}

\t\t\tif (!element) {
\t\t\t\tthrow new Error("Not an Element");
\t\t\t}

\t\t\treturn element;
\t\t}
\t}, {
\t\tkey: "attachTo",
\t\tvalue: function attachTo(what) {

\t\t\tvar element = this.getElement(what);
\t\t\tvar base;

\t\t\tif (!element) {
\t\t\t\treturn;
\t\t\t}

\t\t\tif (this.settings.hidden) {
\t\t\t\tbase = this.wrapper;
\t\t\t} else {
\t\t\t\tbase = this.container;
\t\t\t}

\t\t\telement.appendChild(base);

\t\t\tthis.element = element;

\t\t\treturn element;
\t\t}
\t}, {
\t\tkey: "getContainer",
\t\tvalue: function getContainer() {
\t\t\treturn this.container;
\t\t}
\t}, {
\t\tkey: "onResize",
\t\tvalue: function onResize(func) {
\t\t\t// Only listen to window for resize event if width and height are not fixed.
\t\t\t// This applies if it is set to a percent or auto.
\t\t\tif (!(0, _core.isNumber)(this.settings.width) || !(0, _core.isNumber)(this.settings.height)) {
\t\t\t\tthis.resizeFunc = (0, _throttle2.default)(func, 50);
\t\t\t\twindow.addEventListener("resize", this.resizeFunc, false);
\t\t\t}
\t\t}
\t}, {
\t\tkey: "onOrientationChange",
\t\tvalue: function onOrientationChange(func) {
\t\t\tthis.orientationChangeFunc = func;
\t\t\twindow.addEventListener("orientationchange", this.orientationChangeFunc, false);
\t\t}
\t}, {
\t\tkey: "size",
\t\tvalue: function size(width, height) {
\t\t\tvar bounds;
\t\t\t// var width = _width || this.settings.width;
\t\t\t// var height = _height || this.settings.height;

\t\t\t// If width or height are set to false, inherit them from containing element
\t\t\tif (width === null) {
\t\t\t\tbounds = this.element.getBoundingClientRect();

\t\t\t\tif (bounds.width) {
\t\t\t\t\twidth = bounds.width;
\t\t\t\t\tthis.container.style.width = bounds.width + "px";
\t\t\t\t}
\t\t\t}

\t\t\tif (height === null) {
\t\t\t\tbounds = bounds || this.element.getBoundingClientRect();

\t\t\t\tif (bounds.height) {
\t\t\t\t\theight = bounds.height;
\t\t\t\t\tthis.container.style.height = bounds.height + "px";
\t\t\t\t}
\t\t\t}

\t\t\tif (!(0, _core.isNumber)(width)) {
\t\t\t\tbounds = this.container.getBoundingClientRect();
\t\t\t\twidth = bounds.width;
\t\t\t\t//height = bounds.height;
\t\t\t}

\t\t\tif (!(0, _core.isNumber)(height)) {
\t\t\t\tbounds = bounds || this.container.getBoundingClientRect();
\t\t\t\t//width = bounds.width;
\t\t\t\theight = bounds.height;
\t\t\t}

\t\t\tthis.containerStyles = window.getComputedStyle(this.container);

\t\t\tthis.containerPadding = {
\t\t\t\tleft: parseFloat(this.containerStyles["padding-left"]) || 0,
\t\t\t\tright: parseFloat(this.containerStyles["padding-right"]) || 0,
\t\t\t\ttop: parseFloat(this.containerStyles["padding-top"]) || 0,
\t\t\t\tbottom: parseFloat(this.containerStyles["padding-bottom"]) || 0
\t\t\t};

\t\t\t// Bounds not set, get them from window
\t\t\tvar _windowBounds = (0, _core.windowBounds)();
\t\t\tif (!width) {
\t\t\t\twidth = _windowBounds.width;
\t\t\t}
\t\t\tif (this.settings.fullsize || !height) {
\t\t\t\theight = _windowBounds.height;
\t\t\t}

\t\t\treturn {
\t\t\t\twidth: width - this.containerPadding.left - this.containerPadding.right,
\t\t\t\theight: height - this.containerPadding.top - this.containerPadding.bottom
\t\t\t};
\t\t}
\t}, {
\t\tkey: "bounds",
\t\tvalue: function bounds() {
\t\t\tvar box = void 0;
\t\t\tif (this.container.style.overflow !== "visible") {
\t\t\t\tbox = this.container && this.container.getBoundingClientRect();
\t\t\t}

\t\t\tif (!box || !box.width || !box.height) {
\t\t\t\treturn (0, _core.windowBounds)();
\t\t\t} else {
\t\t\t\treturn box;
\t\t\t}
\t\t}
\t}, {
\t\tkey: "getSheet",
\t\tvalue: function getSheet() {
\t\t\tvar style = document.createElement("style");

\t\t\t// WebKit hack --> https://davidwalsh.name/add-rules-stylesheets
\t\t\tstyle.appendChild(document.createTextNode(""));

\t\t\tdocument.head.appendChild(style);

\t\t\treturn style.sheet;
\t\t}
\t}, {
\t\tkey: "addStyleRules",
\t\tvalue: function addStyleRules(selector, rulesArray) {
\t\t\tvar scope = "#" + this.id + " ";
\t\t\tvar rules = "";

\t\t\tif (!this.sheet) {
\t\t\t\tthis.sheet = this.getSheet();
\t\t\t}

\t\t\trulesArray.forEach(function (set) {
\t\t\t\tfor (var prop in set) {
\t\t\t\t\tif (set.hasOwnProperty(prop)) {
\t\t\t\t\t\trules += prop + ":" + set[prop] + ";";
\t\t\t\t\t}
\t\t\t\t}
\t\t\t});

\t\t\tthis.sheet.insertRule(scope + selector + " {" + rules + "}", 0);
\t\t}
\t}, {
\t\tkey: "axis",
\t\tvalue: function axis(_axis) {
\t\t\tif (_axis === "horizontal") {
\t\t\t\tthis.container.style.display = "flex";
\t\t\t\tthis.container.style.flexDirection = "row";
\t\t\t\tthis.container.style.flexWrap = "nowrap";
\t\t\t} else {
\t\t\t\tthis.container.style.display = "block";
\t\t\t}
\t\t}

\t\t// orientation(orientation) {
\t\t// \tif (orientation === "landscape") {
\t\t//
\t\t// \t} else {
\t\t//
\t\t// \t}
\t\t//
\t\t// \tthis.orientation = orientation;
\t\t// }

\t}, {
\t\tkey: "direction",
\t\tvalue: function direction(dir) {
\t\t\tif (this.container) {
\t\t\t\tthis.container.dir = dir;
\t\t\t\tthis.container.style["direction"] = dir;
\t\t\t}

\t\t\tif (this.settings.fullsize) {
\t\t\t\tdocument.body.style["direction"] = dir;
\t\t\t}
\t\t}
\t}, {
\t\tkey: "destroy",
\t\tvalue: function destroy() {
\t\t\tvar base;

\t\t\tif (this.element) {

\t\t\t\tif (this.settings.hidden) {
\t\t\t\t\tbase = this.wrapper;
\t\t\t\t} else {
\t\t\t\t\tbase = this.container;
\t\t\t\t}

\t\t\t\tif (this.element.contains(this.container)) {
\t\t\t\t\tthis.element.removeChild(this.container);
\t\t\t\t}

\t\t\t\twindow.removeEventListener("resize", this.resizeFunc);
\t\t\t\twindow.removeEventListener("orientationChange", this.orientationChangeFunc);
\t\t\t}
\t\t}
\t}]);

\treturn Stage;
}();

exports.default = Stage;
module.exports = exports["default"];

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var debounce = __webpack_require__(21),
    isObject = __webpack_require__(15);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes \`func\` at most once per
 * every \`wait\` milliseconds. The throttled function comes with a \`cancel\`
 * method to cancel delayed \`func\` invocations and a \`flush\` method to
 * immediately invoke them. Provide \`options\` to indicate whether \`func\`
 * should be invoked on the leading and/or trailing edge of the \`wait\`
 * timeout. The \`func\` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last \`func\` invocation.
 *
 * **Note:** If \`leading\` and \`trailing\` options are \`true\`, \`func\` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the \`wait\` timeout.
 *
 * If \`wait\` is \`0\` and \`leading\` is \`false\`, \`func\` invocation is deferred
 * until to the next tick, similar to \`setTimeout\` with a timeout of \`0\`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between \`_.throttle\` and \`_.debounce\`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke \`renewToken\` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

module.exports = throttle;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(22);

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable \`global\` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(15),
    isSymbol = __webpack_require__(61);

/** Used as references for various \`Number\` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\\s+|\\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on \`root\`. */
var freeParseInt = parseInt;

/**
 * Converts \`value\` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(62),
    isObjectLike = __webpack_require__(65);

/** \`Object#toString\` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if \`value\` is classified as a \`Symbol\` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns \`true\` if \`value\` is a symbol, else \`false\`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(23),
    getRawTag = __webpack_require__(63),
    objectToString = __webpack_require__(64);

/** \`Object#toString\` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of \`getTag\` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the \`toStringTag\`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(23);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [\`toStringTag\`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of \`baseGetTag\` which ignores \`Symbol.toStringTag\` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw \`toStringTag\`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 64 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [\`toStringTag\`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts \`value\` to a string using \`Object.prototype.toString\`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 65 */
/***/ (function(module, exports) {

/**
 * Checks if \`value\` is object-like. A value is object-like if it's not \`null\`
 * and has a \`typeof\` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns \`true\` if \`value\` is object-like, else \`false\`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
\tvalue: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Views = function () {
\tfunction Views(container) {
\t\t_classCallCheck(this, Views);

\t\tthis.container = container;
\t\tthis._views = [];
\t\tthis.length = 0;
\t\tthis.hidden = false;
\t}

\t_createClass(Views, [{
\t\tkey: "all",
\t\tvalue: function all() {
\t\t\treturn this._views;
\t\t}
\t}, {
\t\tkey: "first",
\t\tvalue: function first() {
\t\t\treturn this._views[0];
\t\t}
\t}, {
\t\tkey: "last",
\t\tvalue: function last() {
\t\t\treturn this._views[this._views.length - 1];
\t\t}
\t}, {
\t\tkey: "indexOf",
\t\tvalue: function indexOf(view) {
\t\t\treturn this._views.indexOf(view);
\t\t}
\t}, {
\t\tkey: "slice",
\t\tvalue: function slice() {
\t\t\treturn this._views.slice.apply(this._views, arguments);
\t\t}
\t}, {
\t\tkey: "get",
\t\tvalue: function get(i) {
\t\t\treturn this._views[i];
\t\t}
\t}, {
\t\tkey: "append",
\t\tvalue: function append(view) {
\t\t\tthis._views.push(view);
\t\t\tif (this.container) {
\t\t\t\tthis.container.appendChild(view.element);
\t\t\t}
\t\t\tthis.length++;
\t\t\treturn view;
\t\t}
\t}, {
\t\tkey: "prepend",
\t\tvalue: function prepend(view) {
\t\t\tthis._views.unshift(view);
\t\t\tif (this.container) {
\t\t\t\tthis.container.insertBefore(view.element, this.container.firstChild);
\t\t\t}
\t\t\tthis.length++;
\t\t\treturn view;
\t\t}
\t}, {
\t\tkey: "insert",
\t\tvalue: function insert(view, index) {
\t\t\tthis._views.splice(index, 0, view);

\t\t\tif (this.container) {
\t\t\t\tif (index < this.container.children.length) {
\t\t\t\t\tthis.container.insertBefore(view.element, this.container.children[index]);
\t\t\t\t} else {
\t\t\t\t\tthis.container.appendChild(view.element);
\t\t\t\t}
\t\t\t}

\t\t\tthis.length++;
\t\t\treturn view;
\t\t}
\t}, {
\t\tkey: "remove",
\t\tvalue: function remove(view) {
\t\t\tvar index = this._views.indexOf(view);

\t\t\tif (index > -1) {
\t\t\t\tthis._views.splice(index, 1);
\t\t\t}

\t\t\tthis.destroy(view);

\t\t\tthis.length--;
\t\t}
\t}, {
\t\tkey: "destroy",
\t\tvalue: function destroy(view) {
\t\t\tif (view.displayed) {
\t\t\t\tview.destroy();
\t\t\t}

\t\t\tif (this.container) {
\t\t\t\tthis.container.removeChild(view.element);
\t\t\t}
\t\t\tview = null;
\t\t}

\t\t// Iterators

\t}, {
\t\tkey: "forEach",
\t\tvalue: function forEach() {
\t\t\treturn this._views.forEach.apply(this._views, arguments);
\t\t}
\t}, {
\t\tkey: "clear",
\t\tvalue: function clear() {
\t\t\t// Remove all views
\t\t\tvar view;
\t\t\tvar len = this.length;

\t\t\tif (!this.length) return;

\t\t\tfor (var i = 0; i < len; i++) {
\t\t\t\tview = this._views[i];
\t\t\t\tthis.destroy(view);
\t\t\t}

\t\t\tthis._views = [];
\t\t\tthis.length = 0;
\t\t}
\t}, {
\t\tkey: "find",
\t\tvalue: function find(section) {

\t\t\tvar view;
\t\t\tvar len = this.length;

\t\t\tfor (var i = 0; i < len; i++) {
\t\t\t\tview = this._views[i];
\t\t\t\tif (view.displayed && view.section.index == section.index) {
\t\t\t\t\treturn view;
\t\t\t\t}
\t\t\t}
\t\t}
\t}, {
\t\tkey: "displayed",
\t\tvalue: function displayed() {
\t\t\tvar displayed = [];
\t\t\tvar view;
\t\t\tvar len = this.length;

\t\t\tfor (var i = 0; i < len; i++) {
\t\t\t\tview = this._views[i];
\t\t\t\tif (view.displayed) {
\t\t\t\t\tdisplayed.push(view);
\t\t\t\t}
\t\t\t}
\t\t\treturn displayed;
\t\t}
\t}, {
\t\tkey: "show",
\t\tvalue: function show() {
\t\t\tvar view;
\t\t\tvar len = this.length;

\t\t\tfor (var i = 0; i < len; i++) {
\t\t\t\tview = this._views[i];
\t\t\t\tif (view.displayed) {
\t\t\t\t\tview.show();
\t\t\t\t}
\t\t\t}
\t\t\tthis.hidden = false;
\t\t}
\t}, {
\t\tkey: "hide",
\t\tvalue: function hide() {
\t\t\tvar view;
\t\t\tvar len = this.length;

\t\t\tfor (var i = 0; i < len; i++) {
\t\t\t\tview = this._views[i];
\t\t\t\tif (view.displayed) {
\t\t\t\t\tview.hide();
\t\t\t\t}
\t\t\t}
\t\t\tthis.hidden = true;
\t\t}
\t}]);

\treturn Views;
}();

exports.default = Views;
module.exports = exports["default"];

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
\tvalue: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _core = __webpack_require__(0);

var _request = __webpack_require__(11);

var _request2 = _interopRequireDefault(_request);

var _mime = __webpack_require__(17);

var _mime2 = _interopRequireDefault(_mime);

var _path = __webpack_require__(4);

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Handles Unzipping a requesting files from an Epub Archive
 * @class
 */
var Archive = function () {
\tfunction Archive() {
\t\t_classCallCheck(this, Archive);

\t\tthis.zip = undefined;
\t\tthis.urlCache = {};

\t\tthis.checkRequirements();
\t}

\t/**
  * Checks to see if JSZip exists in global namspace,
  * Requires JSZip if it isn't there
  * @private
  */


\t_createClass(Archive, [{
\t\tkey: "checkRequirements",
\t\tvalue: function checkRequirements() {
\t\t\ttry {
\t\t\t\tif (typeof JSZip === "undefined") {
\t\t\t\t\tvar _JSZip = __webpack_require__(68);
\t\t\t\t\tthis.zip = new _JSZip();
\t\t\t\t} else {
\t\t\t\t\tthis.zip = new JSZip();
\t\t\t\t}
\t\t\t} catch (e) {
\t\t\t\tthrow new Error("JSZip lib not loaded");
\t\t\t}
\t\t}

\t\t/**
   * Open an archive
   * @param  {binary} input
   * @param  {boolean} isBase64 tells JSZip if the input data is base64 encoded
   * @return {Promise} zipfile
   */

\t}, {
\t\tkey: "open",
\t\tvalue: function open(input, isBase64) {
\t\t\treturn this.zip.loadAsync(input, { "base64": isBase64 });
\t\t}

\t\t/**
   * Load and Open an archive
   * @param  {string} zipUrl
   * @param  {boolean} isBase64 tells JSZip if the input data is base64 encoded
   * @return {Promise} zipfile
   */

\t}, {
\t\tkey: "openUrl",
\t\tvalue: function openUrl(zipUrl, isBase64) {
\t\t\treturn (0, _request2.default)(zipUrl, "binary").then(function (data) {
\t\t\t\treturn this.zip.loadAsync(data, { "base64": isBase64 });
\t\t\t}.bind(this));
\t\t}

\t\t/**
   * Request a url from the archive
   * @param  {string} url  a url to request from the archive
   * @param  {string} [type] specify the type of the returned result
   * @return {Promise}
   */

\t}, {
\t\tkey: "request",
\t\tvalue: function request(url, type) {
\t\t\tvar deferred = new _core.defer();
\t\t\tvar response;
\t\t\tvar path = new _path2.default(url);

\t\t\t// If type isn't set, determine it from the file extension
\t\t\tif (!type) {
\t\t\t\ttype = path.extension;
\t\t\t}

\t\t\tif (type == "blob") {
\t\t\t\tresponse = this.getBlob(url);
\t\t\t} else {
\t\t\t\tresponse = this.getText(url);
\t\t\t}

\t\t\tif (response) {
\t\t\t\tresponse.then(function (r) {
\t\t\t\t\tvar result = this.handleResponse(r, type);
\t\t\t\t\tdeferred.resolve(result);
\t\t\t\t}.bind(this));
\t\t\t} else {
\t\t\t\tdeferred.reject({
\t\t\t\t\tmessage: "File not found in the epub: " + url,
\t\t\t\t\tstack: new Error().stack
\t\t\t\t});
\t\t\t}
\t\t\treturn deferred.promise;
\t\t}

\t\t/**
   * Handle the response from request
   * @private
   * @param  {any} response
   * @param  {string} [type]
   * @return {any} the parsed result
   */

\t}, {
\t\tkey: "handleResponse",
\t\tvalue: function handleResponse(response, type) {
\t\t\tvar r;

\t\t\tif (type == "json") {
\t\t\t\tr = JSON.parse(response);
\t\t\t} else if ((0, _core.isXml)(type)) {
\t\t\t\tr = (0, _core.parse)(response, "text/xml");
\t\t\t} else if (type == "xhtml") {
\t\t\t\tr = (0, _core.parse)(response, "application/xhtml+xml");
\t\t\t} else if (type == "html" || type == "htm") {
\t\t\t\tr = (0, _core.parse)(response, "text/html");
\t\t\t} else {
\t\t\t\tr = response;
\t\t\t}

\t\t\treturn r;
\t\t}

\t\t/**
   * Get a Blob from Archive by Url
   * @param  {string} url
   * @param  {string} [mimeType]
   * @return {Blob}
   */

\t}, {
\t\tkey: "getBlob",
\t\tvalue: function getBlob(url, mimeType) {
\t\t\tvar decodededUrl = window.decodeURIComponent(url.substr(1)); // Remove first slash
\t\t\tvar entry = this.zip.file(decodededUrl);

\t\t\tif (entry) {
\t\t\t\tmimeType = mimeType || _mime2.default.lookup(entry.name);
\t\t\t\treturn entry.async("uint8array").then(function (uint8array) {
\t\t\t\t\treturn new Blob([uint8array], { type: mimeType });
\t\t\t\t});
\t\t\t}
\t\t}

\t\t/**
   * Get Text from Archive by Url
   * @param  {string} url
   * @param  {string} [encoding]
   * @return {string}
   */

\t}, {
\t\tkey: "getText",
\t\tvalue: function getText(url, encoding) {
\t\t\tvar decodededUrl = window.decodeURIComponent(url.substr(1)); // Remove first slash
\t\t\tvar entry = this.zip.file(decodededUrl);

\t\t\tif (entry) {
\t\t\t\treturn entry.async("string").then(function (text) {
\t\t\t\t\treturn text;
\t\t\t\t});
\t\t\t}
\t\t}

\t\t/**
   * Get a base64 encoded result from Archive by Url
   * @param  {string} url
   * @param  {string} [mimeType]
   * @return {string} base64 encoded
   */

\t}, {
\t\tkey: "getBase64",
\t\tvalue: function getBase64(url, mimeType) {
\t\t\tvar decodededUrl = window.decodeURIComponent(url.substr(1)); // Remove first slash
\t\t\tvar entry = this.zip.file(decodededUrl);

\t\t\tif (entry) {
\t\t\t\tmimeType = mimeType || _mime2.default.lookup(entry.name);
\t\t\t\treturn entry.async("base64").then(function (data) {
\t\t\t\t\treturn "data:" + mimeType + ";base64," + data;
\t\t\t\t});
\t\t\t}
\t\t}

\t\t/**
   * Create a Url from an unarchived item
   * @param  {string} url
   * @param  {object} [options.base64] use base64 encoding or blob url
   * @return {Promise} url promise with Url string
   */

\t}, {
\t\tkey: "createUrl",
\t\tvalue: function createUrl(url, options) {
\t\t\tvar deferred = new _core.defer();
\t\t\tvar _URL = window.URL || window.webkitURL || window.mozURL;
\t\t\tvar tempUrl;
\t\t\tvar response;
\t\t\tvar useBase64 = options && options.base64;

\t\t\tif (url in this.urlCache) {
\t\t\t\tdeferred.resolve(this.urlCache[url]);
\t\t\t\treturn deferred.promise;
\t\t\t}

\t\t\tif (useBase64) {
\t\t\t\tresponse = this.getBase64(url);

\t\t\t\tif (response) {
\t\t\t\t\tresponse.then(function (tempUrl) {

\t\t\t\t\t\tthis.urlCache[url] = tempUrl;
\t\t\t\t\t\tdeferred.resolve(tempUrl);
\t\t\t\t\t}.bind(this));
\t\t\t\t}
\t\t\t} else {

\t\t\t\tresponse = this.getBlob(url);

\t\t\t\tif (response) {
\t\t\t\t\tresponse.then(function (blob) {

\t\t\t\t\t\ttempUrl = _URL.createObjectURL(blob);
\t\t\t\t\t\tthis.urlCache[url] = tempUrl;
\t\t\t\t\t\tdeferred.resolve(tempUrl);
\t\t\t\t\t}.bind(this));
\t\t\t\t}
\t\t\t}

\t\t\tif (!response) {
\t\t\t\tdeferred.reject({
\t\t\t\t\tmessage: "File not found in the epub: " + url,
\t\t\t\t\tstack: new Error().stack
\t\t\t\t});
\t\t\t}

\t\t\treturn deferred.promise;
\t\t}

\t\t/**
   * Revoke Temp Url for a achive item
   * @param  {string} url url of the item in the archive
   */

\t}, {
\t\tkey: "revokeUrl",
\t\tvalue: function revokeUrl(url) {
\t\t\tvar _URL = window.URL || window.webkitURL || window.mozURL;
\t\t\tvar fromCache = this.urlCache[url];
\t\t\tif (fromCache) _URL.revokeObjectURL(fromCache);
\t\t}
\t}, {
\t\tkey: "destroy",
\t\tvalue: function destroy() {
\t\t\tvar _URL = window.URL || window.webkitURL || window.mozURL;
\t\t\tfor (var fromCache in this.urlCache) {
\t\t\t\t_URL.revokeObjectURL(fromCache);
\t\t\t}
\t\t\tthis.zip = undefined;
\t\t\tthis.urlCache = {};
\t\t}
\t}]);

\treturn Archive;
}();

exports.default = Archive;
module.exports = exports["default"];

/***/ }),
/* 68 */
/***/ (function(module, exports) {

if(typeof __WEBPACK_EXTERNAL_MODULE_68__ === 'undefined') {var e = new Error("Cannot find module \\"jszip\\""); e.code = 'MODULE_NOT_FOUND'; throw e;}
module.exports = __WEBPACK_EXTERNAL_MODULE_68__;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* From https://github.com/webcomponents/URL/blob/master/url.js
 * Added UMD, file link handling */

/* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/publicdomain/zero/1.0/ */


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (root, factory) {
  // Fix for this being undefined in modules
  if (!root) {
    root = window || global;
  }
  if (( false ? 'undefined' : _typeof(module)) === 'object' && module.exports) {
    // Node
    module.exports = factory(root);
  } else if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    // Browser globals (root is window)
    root.URL = factory(root);
  }
})(undefined, function (scope) {
  // feature detect for URL constructor
  var hasWorkingUrl = false;
  if (!scope.forceJURL) {
    try {
      var u = new URL('b', 'http://a');
      u.pathname = 'c%20d';
      hasWorkingUrl = u.href === 'http://a/c%20d';
    } catch (e) {}
  }

  if (hasWorkingUrl) return scope.URL;

  var relative = Object.create(null);
  relative['ftp'] = 21;
  relative['file'] = 0;
  relative['gopher'] = 70;
  relative['http'] = 80;
  relative['https'] = 443;
  relative['ws'] = 80;
  relative['wss'] = 443;

  var relativePathDotMapping = Object.create(null);
  relativePathDotMapping['%2e'] = '.';
  relativePathDotMapping['.%2e'] = '..';
  relativePathDotMapping['%2e.'] = '..';
  relativePathDotMapping['%2e%2e'] = '..';

  function isRelativeScheme(scheme) {
    return relative[scheme] !== undefined;
  }

  function invalid() {
    clear.call(this);
    this._isInvalid = true;
  }

  function IDNAToASCII(h) {
    if ('' == h) {
      invalid.call(this);
    }
    // XXX
    return h.toLowerCase();
  }

  function percentEscape(c) {
    var unicode = c.charCodeAt(0);
    if (unicode > 0x20 && unicode < 0x7F &&
    // " # < > ? \`
    [0x22, 0x23, 0x3C, 0x3E, 0x3F, 0x60].indexOf(unicode) == -1) {
      return c;
    }
    return encodeURIComponent(c);
  }

  function percentEscapeQuery(c) {
    // XXX This actually needs to encode c using encoding and then
    // convert the bytes one-by-one.

    var unicode = c.charCodeAt(0);
    if (unicode > 0x20 && unicode < 0x7F &&
    // " # < > \` (do not escape '?')
    [0x22, 0x23, 0x3C, 0x3E, 0x60].indexOf(unicode) == -1) {
      return c;
    }
    return encodeURIComponent(c);
  }

  var EOF = undefined,
      ALPHA = /[a-zA-Z]/,
      ALPHANUMERIC = /[a-zA-Z0-9\\+\\-\\.]/;

  function parse(input, stateOverride, base) {
    function err(message) {
      errors.push(message);
    }

    var state = stateOverride || 'scheme start',
        cursor = 0,
        buffer = '',
        seenAt = false,
        seenBracket = false,
        errors = [];

    loop: while ((input[cursor - 1] != EOF || cursor == 0) && !this._isInvalid) {
      var c = input[cursor];
      switch (state) {
        case 'scheme start':
          if (c && ALPHA.test(c)) {
            buffer += c.toLowerCase(); // ASCII-safe
            state = 'scheme';
          } else if (!stateOverride) {
            buffer = '';
            state = 'no scheme';
            continue;
          } else {
            err('Invalid scheme.');
            break loop;
          }
          break;

        case 'scheme':
          if (c && ALPHANUMERIC.test(c)) {
            buffer += c.toLowerCase(); // ASCII-safe
          } else if (':' == c) {
            this._scheme = buffer;
            buffer = '';
            if (stateOverride) {
              break loop;
            }
            if (isRelativeScheme(this._scheme)) {
              this._isRelative = true;
            }
            if ('file' == this._scheme) {
              state = 'relative';
            } else if (this._isRelative && base && base._scheme == this._scheme) {
              state = 'relative or authority';
            } else if (this._isRelative) {
              state = 'authority first slash';
            } else {
              state = 'scheme data';
            }
          } else if (!stateOverride) {
            buffer = '';
            cursor = 0;
            state = 'no scheme';
            continue;
          } else if (EOF == c) {
            break loop;
          } else {
            err('Code point not allowed in scheme: ' + c);
            break loop;
          }
          break;

        case 'scheme data':
          if ('?' == c) {
            this._query = '?';
            state = 'query';
          } else if ('#' == c) {
            this._fragment = '#';
            state = 'fragment';
          } else {
            // XXX error handling
            if (EOF != c && '\\t' != c && '\\n' != c && '\\r' != c) {
              this._schemeData += percentEscape(c);
            }
          }
          break;

        case 'no scheme':
          if (!base || !isRelativeScheme(base._scheme)) {
            err('Missing scheme.');
            invalid.call(this);
          } else {
            state = 'relative';
            continue;
          }
          break;

        case 'relative or authority':
          if ('/' == c && '/' == input[cursor + 1]) {
            state = 'authority ignore slashes';
          } else {
            err('Expected /, got: ' + c);
            state = 'relative';
            continue;
          }
          break;

        case 'relative':
          this._isRelative = true;
          if ('file' != this._scheme) this._scheme = base._scheme;
          if (EOF == c) {
            this._host = base._host;
            this._port = base._port;
            this._path = base._path.slice();
            this._query = base._query;
            this._username = base._username;
            this._password = base._password;
            break loop;
          } else if ('/' == c || '\\\\' == c) {
            if ('\\\\' == c) err('\\\\ is an invalid code point.');
            state = 'relative slash';
          } else if ('?' == c) {
            this._host = base._host;
            this._port = base._port;
            this._path = base._path.slice();
            this._query = '?';
            this._username = base._username;
            this._password = base._password;
            state = 'query';
          } else if ('#' == c) {
            this._host = base._host;
            this._port = base._port;
            this._path = base._path.slice();
            this._query = base._query;
            this._fragment = '#';
            this._username = base._username;
            this._password = base._password;
            state = 'fragment';
          } else {
            var nextC = input[cursor + 1];
            var nextNextC = input[cursor + 2];
            if ('file' != this._scheme || !ALPHA.test(c) || nextC != ':' && nextC != '|' || EOF != nextNextC && '/' != nextNextC && '\\\\' != nextNextC && '?' != nextNextC && '#' != nextNextC) {
              this._host = base._host;
              this._port = base._port;
              this._username = base._username;
              this._password = base._password;
              this._path = base._path.slice();
              this._path.pop();
            }
            state = 'relative path';
            continue;
          }
          break;

        case 'relative slash':
          if ('/' == c || '\\\\' == c) {
            if ('\\\\' == c) {
              err('\\\\ is an invalid code point.');
            }
            if ('file' == this._scheme) {
              state = 'file host';
            } else {
              state = 'authority ignore slashes';
            }
          } else {
            if ('file' != this._scheme) {
              this._host = base._host;
              this._port = base._port;
              this._username = base._username;
              this._password = base._password;
            }
            state = 'relative path';
            continue;
          }
          break;

        case 'authority first slash':
          if ('/' == c) {
            state = 'authority second slash';
          } else {
            err("Expected '/', got: " + c);
            state = 'authority ignore slashes';
            continue;
          }
          break;

        case 'authority second slash':
          state = 'authority ignore slashes';
          if ('/' != c) {
            err("Expected '/', got: " + c);
            continue;
          }
          break;

        case 'authority ignore slashes':
          if ('/' != c && '\\\\' != c) {
            state = 'authority';
            continue;
          } else {
            err('Expected authority, got: ' + c);
          }
          break;

        case 'authority':
          if ('@' == c) {
            if (seenAt) {
              err('@ already seen.');
              buffer += '%40';
            }
            seenAt = true;
            for (var i = 0; i < buffer.length; i++) {
              var cp = buffer[i];
              if ('\\t' == cp || '\\n' == cp || '\\r' == cp) {
                err('Invalid whitespace in authority.');
                continue;
              }
              // XXX check URL code points
              if (':' == cp && null === this._password) {
                this._password = '';
                continue;
              }
              var tempC = percentEscape(cp);
              null !== this._password ? this._password += tempC : this._username += tempC;
            }
            buffer = '';
          } else if (EOF == c || '/' == c || '\\\\' == c || '?' == c || '#' == c) {
            cursor -= buffer.length;
            buffer = '';
            state = 'host';
            continue;
          } else {
            buffer += c;
          }
          break;

        case 'file host':
          if (EOF == c || '/' == c || '\\\\' == c || '?' == c || '#' == c) {
            if (buffer.length == 2 && ALPHA.test(buffer[0]) && (buffer[1] == ':' || buffer[1] == '|')) {
              state = 'relative path';
            } else if (buffer.length == 0) {
              state = 'relative path start';
            } else {
              this._host = IDNAToASCII.call(this, buffer);
              buffer = '';
              state = 'relative path start';
            }
            continue;
          } else if ('\\t' == c || '\\n' == c || '\\r' == c) {
            err('Invalid whitespace in file host.');
          } else {
            buffer += c;
          }
          break;

        case 'host':
        case 'hostname':
          if (':' == c && !seenBracket) {
            // XXX host parsing
            this._host = IDNAToASCII.call(this, buffer);
            buffer = '';
            state = 'port';
            if ('hostname' == stateOverride) {
              break loop;
            }
          } else if (EOF == c || '/' == c || '\\\\' == c || '?' == c || '#' == c) {
            this._host = IDNAToASCII.call(this, buffer);
            buffer = '';
            state = 'relative path start';
            if (stateOverride) {
              break loop;
            }
            continue;
          } else if ('\\t' != c && '\\n' != c && '\\r' != c) {
            if ('[' == c) {
              seenBracket = true;
            } else if (']' == c) {
              seenBracket = false;
            }
            buffer += c;
          } else {
            err('Invalid code point in host/hostname: ' + c);
          }
          break;

        case 'port':
          if (/[0-9]/.test(c)) {
            buffer += c;
          } else if (EOF == c || '/' == c || '\\\\' == c || '?' == c || '#' == c || stateOverride) {
            if ('' != buffer) {
              var temp = parseInt(buffer, 10);
              if (temp != relative[this._scheme]) {
                this._port = temp + '';
              }
              buffer = '';
            }
            if (stateOverride) {
              break loop;
            }
            state = 'relative path start';
            continue;
          } else if ('\\t' == c || '\\n' == c || '\\r' == c) {
            err('Invalid code point in port: ' + c);
          } else {
            invalid.call(this);
          }
          break;

        case 'relative path start':
          if ('\\\\' == c) err("'\\\\' not allowed in path.");
          state = 'relative path';
          if ('/' != c && '\\\\' != c) {
            continue;
          }
          break;

        case 'relative path':
          if (EOF == c || '/' == c || '\\\\' == c || !stateOverride && ('?' == c || '#' == c)) {
            if ('\\\\' == c) {
              err('\\\\ not allowed in relative path.');
            }
            var tmp;
            if (tmp = relativePathDotMapping[buffer.toLowerCase()]) {
              buffer = tmp;
            }
            if ('..' == buffer) {
              this._path.pop();
              if ('/' != c && '\\\\' != c) {
                this._path.push('');
              }
            } else if ('.' == buffer && '/' != c && '\\\\' != c) {
              this._path.push('');
            } else if ('.' != buffer) {
              if ('file' == this._scheme && this._path.length == 0 && buffer.length == 2 && ALPHA.test(buffer[0]) && buffer[1] == '|') {
                buffer = buffer[0] + ':';
              }
              this._path.push(buffer);
            }
            buffer = '';
            if ('?' == c) {
              this._query = '?';
              state = 'query';
            } else if ('#' == c) {
              this._fragment = '#';
              state = 'fragment';
            }
          } else if ('\\t' != c && '\\n' != c && '\\r' != c) {
            buffer += percentEscape(c);
          }
          break;

        case 'query':
          if (!stateOverride && '#' == c) {
            this._fragment = '#';
            state = 'fragment';
          } else if (EOF != c && '\\t' != c && '\\n' != c && '\\r' != c) {
            this._query += percentEscapeQuery(c);
          }
          break;

        case 'fragment':
          if (EOF != c && '\\t' != c && '\\n' != c && '\\r' != c) {
            this._fragment += c;
          }
          break;
      }

      cursor++;
    }
  }

  function clear() {
    this._scheme = '';
    this._schemeData = '';
    this._username = '';
    this._password = null;
    this._host = '';
    this._port = '';
    this._path = [];
    this._query = '';
    this._fragment = '';
    this._isInvalid = false;
    this._isRelative = false;
  }

  // Does not process domain names or IP addresses.
  // Does not handle encoding for the query parameter.
  function jURL(url, base /* , encoding */) {
    if (base !== undefined && !(base instanceof jURL)) base = new jURL(String(base));

    this._url = url;
    clear.call(this);

    var input = url.replace(/^[ \\t\\r\\n\\f]+|[ \\t\\r\\n\\f]+$/g, '');
    // encoding = encoding || 'utf-8'

    parse.call(this, input, null, base);
  }

  jURL.prototype = {
    toString: function toString() {
      return this.href;
    },
    get href() {
      if (this._isInvalid) return this._url;

      var authority = '';
      if ('' != this._username || null != this._password) {
        authority = this._username + (null != this._password ? ':' + this._password : '') + '@';
      }

      return this.protocol + (this._isRelative ? '//' + authority + this.host : '') + this.pathname + this._query + this._fragment;
    },
    set href(href) {
      clear.call(this);
      parse.call(this, href);
    },

    get protocol() {
      return this._scheme + ':';
    },
    set protocol(protocol) {
      if (this._isInvalid) return;
      parse.call(this, protocol + ':', 'scheme start');
    },

    get host() {
      return this._isInvalid ? '' : this._port ? this._host + ':' + this._port : this._host;
    },
    set host(host) {
      if (this._isInvalid || !this._isRelative) return;
      parse.call(this, host, 'host');
    },

    get hostname() {
      return this._host;
    },
    set hostname(hostname) {
      if (this._isInvalid || !this._isRelative) return;
      parse.call(this, hostname, 'hostname');
    },

    get port() {
      return this._port;
    },
    set port(port) {
      if (this._isInvalid || !this._isRelative) return;
      parse.call(this, port, 'port');
    },

    get pathname() {
      return this._isInvalid ? '' : this._isRelative ? '/' + this._path.join('/') : this._schemeData;
    },
    set pathname(pathname) {
      if (this._isInvalid || !this._isRelative) return;
      this._path = [];
      parse.call(this, pathname, 'relative path start');
    },

    get search() {
      return this._isInvalid || !this._query || '?' == this._query ? '' : this._query;
    },
    set search(search) {
      if (this._isInvalid || !this._isRelative) return;
      this._query = '?';
      if ('?' == search[0]) search = search.slice(1);
      parse.call(this, search, 'query');
    },

    get hash() {
      return this._isInvalid || !this._fragment || '#' == this._fragment ? '' : this._fragment;
    },
    set hash(hash) {
      if (this._isInvalid) return;
      this._fragment = '#';
      if ('#' == hash[0]) hash = hash.slice(1);
      parse.call(this, hash, 'fragment');
    },

    get origin() {
      var host;
      if (this._isInvalid || !this._scheme) {
        return '';
      }
      // javascript: Gecko returns String(""), WebKit/Blink String("null")
      // Gecko throws error for "data://"
      // data: Gecko returns "", Blink returns "data://", WebKit returns "null"
      // Gecko returns String("") for file: mailto:
      // WebKit/Blink returns String("SCHEME://") for file: mailto:
      switch (this._scheme) {
        case 'file':
          return 'file://'; // EPUBJS Added
        case 'data':
        case 'javascript':
        case 'mailto':
          return 'null';
      }
      host = this.host;
      if (!host) {
        return '';
      }
      return this._scheme + '://' + host;
    }
  };

  // Copy over the static methods
  var OriginalURL = scope.URL;
  if (OriginalURL) {
    jURL.createObjectURL = function (blob) {
      // IE extension allows a second optional options argument.
      // http://msdn.microsoft.com/en-us/library/ie/hh772302(v=vs.85).aspx
      return OriginalURL.createObjectURL.apply(OriginalURL, arguments);
    };
    jURL.revokeObjectURL = function (url) {
      OriginalURL.revokeObjectURL(url);
    };
  }

  return jURL;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8), __webpack_require__(70)(module)))

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = function(module) {
\tif(!module.webpackPolyfill) {
\t\tmodule.deprecate = function() {};
\t\tmodule.paths = [];
\t\t// module.parent = undefined by default
\t\tif(!module.children) module.children = [];
\t\tObject.defineProperty(module, "loaded", {
\t\t\tenumerable: true,
\t\t\tget: function() {
\t\t\t\treturn module.l;
\t\t\t}
\t\t});
\t\tObject.defineProperty(module, "id", {
\t\t\tenumerable: true,
\t\t\tget: function() {
\t\t\t\treturn module.i;
\t\t\t}
\t\t});
\t\tmodule.webpackPolyfill = 1;
\t}
\treturn module;
};


/***/ })
/******/ ]);
});
//# sourceMappingURL=epub.js.map`

export default epubjs;