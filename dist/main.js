/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/view.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"*{\\n    box-sizing: border-box;\\n    padding: 0;\\n    margin: 0;\\n}\\n\\nbody{\\n    background-color: aqua;\\n}\\n\\n.ships{\\n    background-color: red;\\n    position: absolute;\\n    border: 1px solid gray;\\n}\\n\\n#boards{\\n    padding-left: 25%;\\n}\\n\\n#playerBoard{\\n    position: relative;\\n    width : 300px;\\n    display: inline-block;\\n}\\n\\n#computerBoard{\\n    width : 300px;\\n    display: inline-block;\\n    margin-left: 50px;\\n}\\n\\n.board-cell{\\n    display: inline-block;\\n    width : 30px;\\n    height : 30px;\\n    border: 1px solid gray;\\n    text-align: center;\\n    background-color: white;\\n}\\n\\n.disableddiv {\\n    pointer-events: none;\\n    opacity: 0.4;\\n}\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/computer.js":
/*!*************************!*\
  !*** ./src/computer.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\n\nconst Computer = () => {\n  const computer = Object(_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('computer');\n  const generateAIMove = (board) => {\n    let x = 0;\n    let y = 0;\n    const theBoard = board.getBoard();\n    while (theBoard[x][y] !== '*') {\n      x = Math.floor(Math.random() * 10);\n      y = Math.floor(Math.random() * 10);\n    }\n    return Number(`${x}${y}`);\n  };\n\n  const makeAIMove = (board) => {\n    const move = generateAIMove(board);\n    return board.receiveAttack(move);\n  };\n  return Object.assign(computer, { makeAIMove });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Computer);\n\n\n//# sourceURL=webpack:///./src/computer.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\n\nconst GameBoard = () => {\n  let ships = [];\n  const board = [['* ', '* ', '*', '*', '*', '*', '*', '*', '*', '*'],\n    ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],\n    ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],\n    ['*', '*', '*', '*', ' *', '*', '*', '*', '*', '*'],\n    ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],\n    ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],\n    ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],\n    ['*', '*', '*', '*', '*', '*', '* ', '*', '*', '*'],\n    ['*', '*', ' *', '*', '*', '*', '*', '*', '*', '*'],\n    ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],\n  ];\n\n  const getShips = () => ships;\n  const createShips = () => {\n    ships.push(Object(_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1));\n    ships[ships.length - 1].setCoordinate([14]);\n    ships.push(Object(_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1));\n    ships[ships.length - 1].setCoordinate([88]);\n    ships.push(Object(_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1));\n    ships[ships.length - 1].setCoordinate([20]);\n    ships.push(Object(_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1));\n    ships[ships.length - 1].setCoordinate([99]);\n    ships.push(Object(_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2));\n    ships[ships.length - 1].setCoordinate([0, 10]);\n    ships.push(Object(_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2));\n    ships[ships.length - 1].setCoordinate([66, 67]);\n    ships.push(Object(_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2));\n    ships[ships.length - 1].setCoordinate([51, 61]);\n    ships.push(Object(_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(3));\n    ships[ships.length - 1].setCoordinate([20, 21, 22]);\n    ships.push(Object(_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(3));\n    ships[ships.length - 1].setCoordinate([91, 92, 93]);\n    ships.push(Object(_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(4));\n    ships[ships.length - 1].setCoordinate([80, 81, 82, 83]);\n  };\n  const markOnBoard = (coordinate, option) => {\n    board[Math.floor(coordinate / 10)][Math.floor(coordinate % 10)] = option ? 'X' : '.';\n    return option;\n  };\n\n  const checkIfHit = (coord) => {\n    for (let i = 0; i < ships.length; i += 1) {\n      if (ships[i].hit(coord)) return true;\n    }\n    return false;\n  };\n  const SetShipsToBoard = (shipsArray) => {\n    ships = shipsArray;\n  };\n  const getBoard = () => board;\n\n  const receiveAttack = (coord) => markOnBoard(coord, checkIfHit(coord));\n\n  const IsAllShipsSunk = () => {\n    for (let i = 0; i < ships.length; i += 1) {\n      if (!ships[i].isSunk()) {\n        return false;\n      }\n    }\n    return true;\n  };\n  return {\n    getBoard, receiveAttack, SetShipsToBoard, createShips, IsAllShipsSunk, getShips,\n  };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameBoard);\n\n\n//# sourceURL=webpack:///./src/gameboard.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: startGame, getBoardOne, getBoardTwo, getPlayerOne, AIMove, makeMove, getPlayerTwo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startGame\", function() { return startGame; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getBoardOne\", function() { return getBoardOne; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getBoardTwo\", function() { return getBoardTwo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPlayerOne\", function() { return getPlayerOne; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AIMove\", function() { return AIMove; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeMove\", function() { return makeMove; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPlayerTwo\", function() { return getPlayerTwo; });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _computer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./computer */ \"./src/computer.js\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\n\n\n\nlet playerOne = {};\nlet playerTwo = {};\nlet gameBoardOne = {};\nlet gameBoardTwo = {};\n\nconst startGame = (name) => {\n  playerOne = Object(_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(name);\n  playerTwo = Object(_computer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  gameBoardOne = Object(_gameboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  gameBoardOne.createShips();\n  gameBoardTwo = Object(_gameboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  gameBoardTwo.createShips();\n};\n\n\nconst makeMove = (move) => playerOne.makeMove(move, gameBoardTwo);\n\nconst getBoardOne = () => gameBoardOne;\n\nconst getBoardTwo = () => gameBoardTwo;\n\nconst getPlayerOne = () => playerOne;\n\nconst getPlayerTwo = () => playerTwo;\n\nconst AIMove = () => playerTwo.makeAIMove(gameBoardOne);\n\n\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Player = (name) => {\n  const getName = () => name;\n  const makeMove = (move, board) => board.receiveAttack(move);\n  return { makeMove, getName };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Ship = (length) => {\n    let shipHits = 0;\n    const getShipHits = () => shipHits;\n    let coordinates = [];\n    const getCoordinates = () => coordinates;\n    const setCoordinate = (coord) => {\n        if(coord.length === length){\n            coordinates = coord;\n        }        \n    };\n    const hit = (coord) => {\n        if(coordinates.includes(coord)){\n            shipHits += 1;\n            return true;\n        }\n        return false;\n    }\n    const isSunk = () => shipHits === length\n    return {\n        getShipHits, setCoordinate, hit, isSunk, getCoordinates,\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ship);\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ \"./src/main.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst allowDrop = (ev) => {\n  ev.preventDefault();\n};\n\nconst drag = (ev) => {\n  ev.dataTransfer.setData('text', ev.target.id);\n};\n\nconst drop = (ev) => {\n  ev.preventDefault();\n  const data = ev.dataTransfer.getData('text');\n  ev.target.appendChild(document.getElementById(data));\n};\n\nconst endGame = (player) => {\n  const board = document.getElementById('boards');\n  board.innerHTML = `${player.getName()} has won !!!`;\n};\n\nconst renderEmptyBoard = () => {\n  const pBoard = document.getElementById('playerBoard');\n  pBoard.innerHTML = '';\n  for (let i = 0; i < 10; i += 1) {\n    const divElement = document.createElement('div');\n    divElement.style.height = '30px';\n    for (let j = 0; j < 10; j += 1) {\n      const spanElement = document.createElement('span');\n      spanElement.id = `cellE-${i}${j}`;\n      spanElement.classList.add('board-cell');\n      divElement.appendChild(spanElement);\n    }\n    pBoard.appendChild(divElement);\n  }\n};\nconst renderPlayerBoard = (board) => {\n  const pBoard = document.getElementById('playerBoard');\n  pBoard.innerHTML = '';\n  for (let i = 0; i < 10; i += 1) {\n    const divElement = document.createElement('div');\n    for (let j = 0; j < 10; j += 1) {\n      const spanElement = document.createElement('span');\n      spanElement.innerHTML = board[i][j];\n      spanElement.id = `cellP-${i}${j}`;\n      spanElement.classList.add('board-cell');\n      divElement.appendChild(spanElement);\n    }\n    pBoard.appendChild(divElement);\n  }\n};\n\nconst getShips = () => {\n  const ships = _main__WEBPACK_IMPORTED_MODULE_0__[\"getBoardOne\"]().getShips();\n  const playerBoard = document.getElementById('playerBoard');\n  ships.forEach((ship) => {\n    const divElement = document.createElement('div');\n    divElement.setAttribute('draggable', 'true');\n    playerBoard.setAttribute('ondrop', 'drop(event)');\n    playerBoard.setAttribute('ondragover', 'allowDrop(event)');\n    divElement.classList.add('ships');\n    for (let i = 0; i < ship.getCoordinates().length; i += 1) {\n      const temp = Math.floor(ship.getCoordinates()[i] / 10);\n      const tempTwo = Math.floor(ship.getCoordinates()[i] % 10);\n      const curr = Math.floor(ship.getCoordinates()[i + 1] / 10);\n      const currTwo = Math.floor(ship.getCoordinates()[i + 1] % 10);\n      if (tempTwo === currTwo) {\n        divElement.style.height = `${30 * ship.getCoordinates().length}px`;\n        divElement.style.width = '30px';\n        divElement.style.left = `${30 * tempTwo}px`;\n        divElement.style.top = `${30 * temp}px`;\n      } else if (temp === curr) {\n        divElement.style.width = `${30 * ship.getCoordinates().length}px`;\n        divElement.style.height = '30px';\n        divElement.style.left = `${30 * tempTwo}px`;\n        divElement.style.top = `${30 * temp}px`;\n        if (ship.getCoordinates()[i] === 45) {\n          console.log(`${30 * tempTwo}px`);\n          console.log(`${30 * temp}px`);\n          console.log(tempTwo);\n        }\n      }\n    } if (ship.getCoordinates().length === 1) {\n      divElement.style.height = '30px';\n      divElement.style.width = '30px';\n      divElement.style.left = `${30 * Math.floor(ship.getCoordinates()[0] % 10)}px`;\n      divElement.style.top = `${30 * Math.floor(ship.getCoordinates()[0] / 10)}px`;\n    }\n    playerBoard.appendChild(divElement);\n  });\n};\nconst renderCompBoard = (board) => {\n  const boards = document.getElementById('boards');\n  const cBoard = document.createElement('div');\n  cBoard.id = 'computerBoard';\n  for (let i = 0; i < 10; i += 1) {\n    const divElement = document.createElement('div');\n    for (let j = 0; j < 10; j += 1) {\n      const spanElement = document.createElement('span');\n      spanElement.id = `cell-${i}${j}`;\n      spanElement.innerHTML = board[i][j];\n      spanElement.classList.add('board-cell');\n      divElement.appendChild(spanElement);\n    }\n    cBoard.appendChild(divElement);\n  }\n  cBoard.addEventListener('click', (event) => {\n    const spanId = event.target.id;\n    const move = Number(spanId.slice(5));\n    const hit = _main__WEBPACK_IMPORTED_MODULE_0__[\"makeMove\"](move);\n    document.getElementById(spanId).innerHTML = hit ? 'X' : '.';\n    if (!hit) {\n      cBoard.classList.add('disableddiv');\n      setTimeout(() => {\n        let check = true;\n        const i = setInterval(() => {\n          check = _main__WEBPACK_IMPORTED_MODULE_0__[\"AIMove\"](_main__WEBPACK_IMPORTED_MODULE_0__[\"getBoardOne\"]().getBoard());\n          renderPlayerBoard(_main__WEBPACK_IMPORTED_MODULE_0__[\"getBoardOne\"]().getBoard());\n          if (!check) {\n            clearInterval(i);\n            cBoard.classList.remove('disableddiv');\n          }\n        }, 2000);\n        renderPlayerBoard(_main__WEBPACK_IMPORTED_MODULE_0__[\"getBoardOne\"]().getBoard());\n        if (_main__WEBPACK_IMPORTED_MODULE_0__[\"getBoardOne\"]().IsAllShipsSunk()) {\n          endGame(_main__WEBPACK_IMPORTED_MODULE_0__[\"getPlayerTwo\"]());\n        }\n      }, 2000);\n    }\n  });\n  boards.appendChild(cBoard);\n};\n\nconst displayPlayersInfo = () => {\n  const playerInfo = document.getElementById('playerInfo');\n  const textInput = document.createElement('input');\n  const submitBtn = document.createElement('button');\n  submitBtn.innerHTML = 'Set Board';\n  textInput.setAttribute('placeholder', 'Enter your name');\n  playerInfo.appendChild(textInput);\n  playerInfo.appendChild(submitBtn);\n  submitBtn.addEventListener('click', () => {\n    _main__WEBPACK_IMPORTED_MODULE_0__[\"startGame\"](textInput.value);\n    renderEmptyBoard();\n    getShips();\n    const startGameBtn = document.createElement('button');\n    startGameBtn.innerHTML = 'Start Game';\n    playerInfo.appendChild(startGameBtn);\n    startGameBtn.addEventListener('click', () => {\n      document.getElementById('playerBoard').innerHTML = '';\n      renderPlayerBoard(_main__WEBPACK_IMPORTED_MODULE_0__[\"getBoardOne\"]().getBoard());\n      renderCompBoard(_main__WEBPACK_IMPORTED_MODULE_0__[\"getBoardTwo\"]().getBoard());\n      playerInfo.removeChild(startGameBtn);\n    });\n  });\n};\n\ndocument.onload(displayPlayersInfo());\n\n\n//# sourceURL=webpack:///./src/view.js?");

/***/ })

/******/ });