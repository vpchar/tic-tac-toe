"use strict";
(self["webpackChunktic_tac_toe"] = self["webpackChunktic_tac_toe"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n  1. Use a more-intuitive box-sizing model.\n*/\n\n*, *::before, *::after {\n    box-sizing: border-box;\n  }\n  /*\n    2. Remove default margin\n  */\n  * {\n    margin: 0;\n  }\n  /*\n    3. Allow percentage-based heights in the application\n  */\n  html, body {\n    height: 100%;\n    font-family: Arial, Helvetica, sans-serif;\n  }\n  /*\n    Typographic tweaks!\n    4. Add accessible line-height\n    5. Improve text rendering\n  */\n  body {\n    line-height: 1.5;\n    -webkit-font-smoothing: antialiased;\n  }\n  /*\n    6. Improve media defaults\n  */\n  img, picture, video, canvas, svg {\n    display: block;\n    max-width: 100%;\n  }\n  /*\n    7. Remove built-in form typography styles\n  */\n  input, button, textarea, select {\n    font: inherit;\n  }\n  /*\n    8. Avoid text overflows\n  */\n  p, h1, h2, h3, h4, h5, h6 {\n    overflow-wrap: break-word;\n  }\n  /*\n    9. Create a root stacking context\n  */\n  #root, #__next {\n    isolation: isolate;\n  }\n/* Add some style to the game */\n\n.game {\n  display: grid;\n  grid-template-columns: repeat(3,min(25vh,25vw));\n  border:1px solid rgb(63, 63, 63);\n}\n.square { \n  width: min(25vh,25vw);\n  height: min(25vh,25vw);\n  min-width: 100px;\n  min-height: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: min(20vh, 20vw);\n  font-family: Arial, Helvetica, sans-serif;\n  color:rgb(44, 44, 44);\n  font-weight: regular;\n  cursor: pointer;\n  border:1px solid rgb(63, 63, 63);\n  font-family: Arial, Helvetica, sans-serif;\n}\n#resetButton{\n    width: min(75vh,75vw);\n    height: min(10vh,10vw);\n    margin-top: 15px;\n    margin-bottom: 15px;\n    /* background-color: rgb(208, 203, 203); */\n    border: 0 none;\n    border-radius: 12px;\n    /* color: rgb(48, 27, 0); */\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: min(4vh,4vw);\n}\n#resetButton:hover{\n    background-color: rgb(202, 202, 202);\n}\nbody{\n    width: min(75vh,75vw);\n    height: 100vh;\n    margin: 30px auto;\n    /* background-color: rgb(226, 215, 15); */\n    color: black;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;CAEC;;AAED;IACI,sBAAsB;EACxB;EACA;;GAEC;EACD;IACE,SAAS;EACX;EACA;;GAEC;EACD;IACE,YAAY;IACZ,yCAAyC;EAC3C;EACA;;;;GAIC;EACD;IACE,gBAAgB;IAChB,mCAAmC;EACrC;EACA;;GAEC;EACD;IACE,cAAc;IACd,eAAe;EACjB;EACA;;GAEC;EACD;IACE,aAAa;EACf;EACA;;GAEC;EACD;IACE,yBAAyB;EAC3B;EACA;;GAEC;EACD;IACE,kBAAkB;EACpB;AACF,+BAA+B;;AAE/B;EACE,aAAa;EACb,+CAA+C;EAC/C,gCAAgC;AAClC;AACA;EACE,qBAAqB;EACrB,sBAAsB;EACtB,gBAAgB;EAChB,iBAAiB;EACjB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,0BAA0B;EAC1B,yCAAyC;EACzC,qBAAqB;EACrB,oBAAoB;EACpB,eAAe;EACf,gCAAgC;EAChC,yCAAyC;AAC3C;AACA;IACI,qBAAqB;IACrB,sBAAsB;IACtB,gBAAgB;IAChB,mBAAmB;IACnB,0CAA0C;IAC1C,cAAc;IACd,mBAAmB;IACnB,2BAA2B;IAC3B,yCAAyC;IACzC,uBAAuB;AAC3B;AACA;IACI,oCAAoC;AACxC;AACA;IACI,qBAAqB;IACrB,aAAa;IACb,iBAAiB;IACjB,yCAAyC;IACzC,YAAY;AAChB","sourcesContent":["/*\n  1. Use a more-intuitive box-sizing model.\n*/\n\n*, *::before, *::after {\n    box-sizing: border-box;\n  }\n  /*\n    2. Remove default margin\n  */\n  * {\n    margin: 0;\n  }\n  /*\n    3. Allow percentage-based heights in the application\n  */\n  html, body {\n    height: 100%;\n    font-family: Arial, Helvetica, sans-serif;\n  }\n  /*\n    Typographic tweaks!\n    4. Add accessible line-height\n    5. Improve text rendering\n  */\n  body {\n    line-height: 1.5;\n    -webkit-font-smoothing: antialiased;\n  }\n  /*\n    6. Improve media defaults\n  */\n  img, picture, video, canvas, svg {\n    display: block;\n    max-width: 100%;\n  }\n  /*\n    7. Remove built-in form typography styles\n  */\n  input, button, textarea, select {\n    font: inherit;\n  }\n  /*\n    8. Avoid text overflows\n  */\n  p, h1, h2, h3, h4, h5, h6 {\n    overflow-wrap: break-word;\n  }\n  /*\n    9. Create a root stacking context\n  */\n  #root, #__next {\n    isolation: isolate;\n  }\n/* Add some style to the game */\n\n.game {\n  display: grid;\n  grid-template-columns: repeat(3,min(25vh,25vw));\n  border:1px solid rgb(63, 63, 63);\n}\n.square { \n  width: min(25vh,25vw);\n  height: min(25vh,25vw);\n  min-width: 100px;\n  min-height: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: min(20vh, 20vw);\n  font-family: Arial, Helvetica, sans-serif;\n  color:rgb(44, 44, 44);\n  font-weight: regular;\n  cursor: pointer;\n  border:1px solid rgb(63, 63, 63);\n  font-family: Arial, Helvetica, sans-serif;\n}\n#resetButton{\n    width: min(75vh,75vw);\n    height: min(10vh,10vw);\n    margin-top: 15px;\n    margin-bottom: 15px;\n    /* background-color: rgb(208, 203, 203); */\n    border: 0 none;\n    border-radius: 12px;\n    /* color: rgb(48, 27, 0); */\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: min(4vh,4vw);\n}\n#resetButton:hover{\n    background-color: rgb(202, 202, 202);\n}\nbody{\n    width: min(75vh,75vw);\n    height: 100vh;\n    margin: 30px auto;\n    /* background-color: rgb(226, 215, 15); */\n    color: black;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");

    
    // Keep track of the game state
    const squares = document.querySelectorAll(".square");
    const resetBtn = document.querySelector("#resetButton");
    let currentPlayer = "X";
    let gameOver = false;
    let gameState = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    //added by the human ;-)   
    resetBtn.addEventListener("click",()=>{
       handleReset();
    })
    const handleReset = () => {
      currentPlayer = "X";
       gameOver = false;
       gameState = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ];  
      squares.forEach((square) => {
        square.textContent="";
      });
      resetBtn.textContent="Reset"
    }
    // Add an event listener to each square to handle clicks
    squares.forEach((square) => {
      square.addEventListener("click", handleClick);
    });

    function handleClick(event) {
      // Ignore clicks if the game is over or if the square is already filled
      if (gameOver || event.target.textContent !== "") {
        return;
      }

      // Place the current player's symbol in the square
      event.target.textContent = currentPlayer;

      // Update the game state
      const row = Math.floor(event.target.id / 3);
      const col = event.target.id % 3;
      gameState[row][col] = currentPlayer;

      // Check for a win or a draw
      const result = checkResult(gameState, currentPlayer);
      if (result === "X" || result === "O") {
        // Game over - show a message and disable clicks on the squares
        gameOver = true;
        resetBtn.textContent=(`Player ${result} wins!`);
         squares.forEach((square) => {
           square.textContent="";
         });
        
      } else if (result === "draw") {
        // Game over - show a message and disable clicks on the squares
        gameOver = true;
        resetBtn.textContent=(`It's a draw!`);
        // squares.forEach((square) => {
        //   square.removeEventListener("click", handleClick);
        // });
      } else {
        // Switch players
        currentPlayer = currentPlayer === "X" ? "O" : "X";

        // If it's the computer's turn, let the computer make a move
        if (currentPlayer === "O") {
          makeComputerMove();
        }
      }
    }

    function checkResult(gameState, player) {
      // Check for a win by checking all rows, columns, and diagonals
      if (
        (gameState[0][0] === player &&
          gameState[0][1] === player &&
          gameState[0][2] === player) ||
        (gameState[1][0] === player &&
          gameState[1][1] === player &&
          gameState[1][2] === player) ||
        (gameState[2][0] === player &&
          gameState[2][1] === player &&
          gameState[2][2] === player) ||
        (gameState[0][0] === player &&
          gameState[1][0] === player &&
          gameState[2][0] === player) ||
        (gameState[0][1] === player &&
          gameState[1][1] === player &&
          gameState[2][1] === player) ||
        (gameState[0][2] === player &&
          gameState[1][2] === player &&
          gameState[2][2] === player) ||
        (gameState[0][0] === player &&
          gameState[1][1] === player &&
          gameState[2][2] === player) ||
        (gameState[0][2] === player &&
          gameState[1][1] === player &&
          gameState[2][0] === player)
      ) {
        return player;
      }

      // Check for a draw by checking if all squares are filled
      for (let i = 0; i < gameState.length; i++) {
        for (let j = 0; j < gameState[i].length; j++) {
          if (gameState[i][j] === "") {
            return "";
          }
        }
      }

      return "draw";
    }

    function makeComputerMove() {
      // Use the minimax algorithm to find the best move for the computer
      let bestScore = -Infinity;
      let bestRow = null;
      let bestCol = null;
      for (let row = 0; row < gameState.length; row++) {
        for (let col = 0; col < gameState[row].length; col++) {
          if (gameState[row][col] === "") {
            gameState[row][col] = "O";
            const score = minimax(gameState, 0, false);
            gameState[row][col] = "";
            if (score > bestScore) {
              bestScore = score;
              bestRow = row;
              bestCol = col;
            }
          }
        }
      }

      // Make the best move
      gameState[bestRow][bestCol] = "O";
      squares[bestRow * 3 + bestCol].textContent = "O";
      currentPlayer = "X";

      // Check for a win or a draw
      const result = checkResult(gameState, "O");
      if (result === "O") {
        // Game over - show a message and disable clicks on the squares
        gameOver = true;
        resetBtn.textContent=(`Player O wins!`);
        // squares.forEach((square) => {
        //   square.removeEventListener("click", handleClick);
        // });
      } else if (result === "draw") {
        // Game over - show a message and disable clicks on the squares
        gameOver = true;
        resetBtn.textContent=(`It's a draw!`);
        // squares.forEach((square) => {
        //   square.removeEventListener("click", handleClick);
        // });
      }
    }

    function minimax(gameState, depth, isMaximizing) {
      const result = checkResult(gameState, isMaximizing ? "O" : "X");
      if (result === "O") {
        return 10 - depth;
      } else if (result === "X") {
        return depth - 10;
      } else if (result === "draw") {
        return 0;
      }

      if (isMaximizing) {
        let bestScore = -Infinity;
        for (let row = 0; row < gameState.length; row++) {
          for (let col = 0; col < gameState[row].length; col++) {
            if (gameState[row][col] === "") {
              gameState[row][col] = "O";
              const score = minimax(gameState, depth + 1, false);
              gameState[row][col] = "";
              bestScore = Math.max(bestScore, score);
            }
          }
        }
        return bestScore;
      } else {
        let bestScore = Infinity;
        for (let row = 0; row < gameState.length; row++) {
          for (let col = 0; col < gameState[row].length; col++) {
            if (gameState[row][col] === "") {
              gameState[row][col] = "X";
              const score = minimax(gameState, depth + 1, true);
              gameState[row][col] = "";
              bestScore = Math.min(bestScore, score);
            }
          }
        }
        return bestScore;
      }
    }

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCLHdCQUF3QjtBQUNsRCw0QkFBNEIsNkJBQTZCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLDBCQUEwQix3QkFBd0I7QUFDbEQsNEJBQTRCLDZCQUE2QjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcbiAgMS4gVXNlIGEgbW9yZS1pbnR1aXRpdmUgYm94LXNpemluZyBtb2RlbC5cXG4qL1xcblxcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgfVxcbiAgLypcXG4gICAgMi4gUmVtb3ZlIGRlZmF1bHQgbWFyZ2luXFxuICAqL1xcbiAgKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG4gIC8qXFxuICAgIDMuIEFsbG93IHBlcmNlbnRhZ2UtYmFzZWQgaGVpZ2h0cyBpbiB0aGUgYXBwbGljYXRpb25cXG4gICovXFxuICBodG1sLCBib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIH1cXG4gIC8qXFxuICAgIFR5cG9ncmFwaGljIHR3ZWFrcyFcXG4gICAgNC4gQWRkIGFjY2Vzc2libGUgbGluZS1oZWlnaHRcXG4gICAgNS4gSW1wcm92ZSB0ZXh0IHJlbmRlcmluZ1xcbiAgKi9cXG4gIGJvZHkge1xcbiAgICBsaW5lLWhlaWdodDogMS41O1xcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIH1cXG4gIC8qXFxuICAgIDYuIEltcHJvdmUgbWVkaWEgZGVmYXVsdHNcXG4gICovXFxuICBpbWcsIHBpY3R1cmUsIHZpZGVvLCBjYW52YXMsIHN2ZyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICB9XFxuICAvKlxcbiAgICA3LiBSZW1vdmUgYnVpbHQtaW4gZm9ybSB0eXBvZ3JhcGh5IHN0eWxlc1xcbiAgKi9cXG4gIGlucHV0LCBidXR0b24sIHRleHRhcmVhLCBzZWxlY3Qge1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgfVxcbiAgLypcXG4gICAgOC4gQXZvaWQgdGV4dCBvdmVyZmxvd3NcXG4gICovXFxuICBwLCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG4gIH1cXG4gIC8qXFxuICAgIDkuIENyZWF0ZSBhIHJvb3Qgc3RhY2tpbmcgY29udGV4dFxcbiAgKi9cXG4gICNyb290LCAjX19uZXh0IHtcXG4gICAgaXNvbGF0aW9uOiBpc29sYXRlO1xcbiAgfVxcbi8qIEFkZCBzb21lIHN0eWxlIHRvIHRoZSBnYW1lICovXFxuXFxuLmdhbWUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsbWluKDI1dmgsMjV2dykpO1xcbiAgYm9yZGVyOjFweCBzb2xpZCByZ2IoNjMsIDYzLCA2Myk7XFxufVxcbi5zcXVhcmUgeyBcXG4gIHdpZHRoOiBtaW4oMjV2aCwyNXZ3KTtcXG4gIGhlaWdodDogbWluKDI1dmgsMjV2dyk7XFxuICBtaW4td2lkdGg6IDEwMHB4O1xcbiAgbWluLWhlaWdodDogMTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiBtaW4oMjB2aCwgMjB2dyk7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOnJnYig0NCwgNDQsIDQ0KTtcXG4gIGZvbnQtd2VpZ2h0OiByZWd1bGFyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOjFweCBzb2xpZCByZ2IoNjMsIDYzLCA2Myk7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuI3Jlc2V0QnV0dG9ue1xcbiAgICB3aWR0aDogbWluKDc1dmgsNzV2dyk7XFxuICAgIGhlaWdodDogbWluKDEwdmgsMTB2dyk7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDgsIDIwMywgMjAzKTsgKi9cXG4gICAgYm9yZGVyOiAwIG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIC8qIGNvbG9yOiByZ2IoNDgsIDI3LCAwKTsgKi9cXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogbWluKDR2aCw0dncpO1xcbn1cXG4jcmVzZXRCdXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDIsIDIwMiwgMjAyKTtcXG59XFxuYm9keXtcXG4gICAgd2lkdGg6IG1pbig3NXZoLDc1dncpO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDMwcHggYXV0bztcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNiwgMjE1LCAxNSk7ICovXFxuICAgIGNvbG9yOiBibGFjaztcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Q0FFQzs7QUFFRDtJQUNJLHNCQUFzQjtFQUN4QjtFQUNBOztHQUVDO0VBQ0Q7SUFDRSxTQUFTO0VBQ1g7RUFDQTs7R0FFQztFQUNEO0lBQ0UsWUFBWTtJQUNaLHlDQUF5QztFQUMzQztFQUNBOzs7O0dBSUM7RUFDRDtJQUNFLGdCQUFnQjtJQUNoQixtQ0FBbUM7RUFDckM7RUFDQTs7R0FFQztFQUNEO0lBQ0UsY0FBYztJQUNkLGVBQWU7RUFDakI7RUFDQTs7R0FFQztFQUNEO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7O0dBRUM7RUFDRDtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBOztHQUVDO0VBQ0Q7SUFDRSxrQkFBa0I7RUFDcEI7QUFDRiwrQkFBK0I7O0FBRS9CO0VBQ0UsYUFBYTtFQUNiLCtDQUErQztFQUMvQyxnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIseUNBQXlDO0VBQ3pDLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGdDQUFnQztFQUNoQyx5Q0FBeUM7QUFDM0M7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQiwwQ0FBMEM7SUFDMUMsY0FBYztJQUNkLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IseUNBQXlDO0lBQ3pDLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQix5Q0FBeUM7SUFDekMsWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKlxcbiAgMS4gVXNlIGEgbW9yZS1pbnR1aXRpdmUgYm94LXNpemluZyBtb2RlbC5cXG4qL1xcblxcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgfVxcbiAgLypcXG4gICAgMi4gUmVtb3ZlIGRlZmF1bHQgbWFyZ2luXFxuICAqL1xcbiAgKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG4gIC8qXFxuICAgIDMuIEFsbG93IHBlcmNlbnRhZ2UtYmFzZWQgaGVpZ2h0cyBpbiB0aGUgYXBwbGljYXRpb25cXG4gICovXFxuICBodG1sLCBib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIH1cXG4gIC8qXFxuICAgIFR5cG9ncmFwaGljIHR3ZWFrcyFcXG4gICAgNC4gQWRkIGFjY2Vzc2libGUgbGluZS1oZWlnaHRcXG4gICAgNS4gSW1wcm92ZSB0ZXh0IHJlbmRlcmluZ1xcbiAgKi9cXG4gIGJvZHkge1xcbiAgICBsaW5lLWhlaWdodDogMS41O1xcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIH1cXG4gIC8qXFxuICAgIDYuIEltcHJvdmUgbWVkaWEgZGVmYXVsdHNcXG4gICovXFxuICBpbWcsIHBpY3R1cmUsIHZpZGVvLCBjYW52YXMsIHN2ZyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICB9XFxuICAvKlxcbiAgICA3LiBSZW1vdmUgYnVpbHQtaW4gZm9ybSB0eXBvZ3JhcGh5IHN0eWxlc1xcbiAgKi9cXG4gIGlucHV0LCBidXR0b24sIHRleHRhcmVhLCBzZWxlY3Qge1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgfVxcbiAgLypcXG4gICAgOC4gQXZvaWQgdGV4dCBvdmVyZmxvd3NcXG4gICovXFxuICBwLCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG4gIH1cXG4gIC8qXFxuICAgIDkuIENyZWF0ZSBhIHJvb3Qgc3RhY2tpbmcgY29udGV4dFxcbiAgKi9cXG4gICNyb290LCAjX19uZXh0IHtcXG4gICAgaXNvbGF0aW9uOiBpc29sYXRlO1xcbiAgfVxcbi8qIEFkZCBzb21lIHN0eWxlIHRvIHRoZSBnYW1lICovXFxuXFxuLmdhbWUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsbWluKDI1dmgsMjV2dykpO1xcbiAgYm9yZGVyOjFweCBzb2xpZCByZ2IoNjMsIDYzLCA2Myk7XFxufVxcbi5zcXVhcmUgeyBcXG4gIHdpZHRoOiBtaW4oMjV2aCwyNXZ3KTtcXG4gIGhlaWdodDogbWluKDI1dmgsMjV2dyk7XFxuICBtaW4td2lkdGg6IDEwMHB4O1xcbiAgbWluLWhlaWdodDogMTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiBtaW4oMjB2aCwgMjB2dyk7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOnJnYig0NCwgNDQsIDQ0KTtcXG4gIGZvbnQtd2VpZ2h0OiByZWd1bGFyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOjFweCBzb2xpZCByZ2IoNjMsIDYzLCA2Myk7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuI3Jlc2V0QnV0dG9ue1xcbiAgICB3aWR0aDogbWluKDc1dmgsNzV2dyk7XFxuICAgIGhlaWdodDogbWluKDEwdmgsMTB2dyk7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDgsIDIwMywgMjAzKTsgKi9cXG4gICAgYm9yZGVyOiAwIG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIC8qIGNvbG9yOiByZ2IoNDgsIDI3LCAwKTsgKi9cXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogbWluKDR2aCw0dncpO1xcbn1cXG4jcmVzZXRCdXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDIsIDIwMiwgMjAyKTtcXG59XFxuYm9keXtcXG4gICAgd2lkdGg6IG1pbig3NXZoLDc1dncpO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDMwcHggYXV0bztcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNiwgMjE1LCAxNSk7ICovXFxuICAgIGNvbG9yOiBibGFjaztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXG4gICAgaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG4gICAgLy8gS2VlcCB0cmFjayBvZiB0aGUgZ2FtZSBzdGF0ZVxuICAgIGNvbnN0IHNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNxdWFyZVwiKTtcbiAgICBjb25zdCByZXNldEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVzZXRCdXR0b25cIik7XG4gICAgbGV0IGN1cnJlbnRQbGF5ZXIgPSBcIlhcIjtcbiAgICBsZXQgZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICBsZXQgZ2FtZVN0YXRlID0gW1xuICAgICAgW1wiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgW1wiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgW1wiXCIsIFwiXCIsIFwiXCJdLFxuICAgIF07XG4gICAgLy9hZGRlZCBieSB0aGUgaHVtYW4gOy0pICAgXG4gICAgcmVzZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcbiAgICAgICBoYW5kbGVSZXNldCgpO1xuICAgIH0pXG4gICAgY29uc3QgaGFuZGxlUmVzZXQgPSAoKSA9PiB7XG4gICAgICBjdXJyZW50UGxheWVyID0gXCJYXCI7XG4gICAgICAgZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICAgICBnYW1lU3RhdGUgPSBbXG4gICAgICAgIFtcIlwiLCBcIlwiLCBcIlwiXSxcbiAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICBbXCJcIiwgXCJcIiwgXCJcIl0sXG4gICAgICBdOyAgXG4gICAgICBzcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgICAgICBzcXVhcmUudGV4dENvbnRlbnQ9XCJcIjtcbiAgICAgIH0pO1xuICAgICAgcmVzZXRCdG4udGV4dENvbnRlbnQ9XCJSZXNldFwiXG4gICAgfVxuICAgIC8vIEFkZCBhbiBldmVudCBsaXN0ZW5lciB0byBlYWNoIHNxdWFyZSB0byBoYW5kbGUgY2xpY2tzXG4gICAgc3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2xpY2spO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soZXZlbnQpIHtcbiAgICAgIC8vIElnbm9yZSBjbGlja3MgaWYgdGhlIGdhbWUgaXMgb3ZlciBvciBpZiB0aGUgc3F1YXJlIGlzIGFscmVhZHkgZmlsbGVkXG4gICAgICBpZiAoZ2FtZU92ZXIgfHwgZXZlbnQudGFyZ2V0LnRleHRDb250ZW50ICE9PSBcIlwiKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gUGxhY2UgdGhlIGN1cnJlbnQgcGxheWVyJ3Mgc3ltYm9sIGluIHRoZSBzcXVhcmVcbiAgICAgIGV2ZW50LnRhcmdldC50ZXh0Q29udGVudCA9IGN1cnJlbnRQbGF5ZXI7XG5cbiAgICAgIC8vIFVwZGF0ZSB0aGUgZ2FtZSBzdGF0ZVxuICAgICAgY29uc3Qgcm93ID0gTWF0aC5mbG9vcihldmVudC50YXJnZXQuaWQgLyAzKTtcbiAgICAgIGNvbnN0IGNvbCA9IGV2ZW50LnRhcmdldC5pZCAlIDM7XG4gICAgICBnYW1lU3RhdGVbcm93XVtjb2xdID0gY3VycmVudFBsYXllcjtcblxuICAgICAgLy8gQ2hlY2sgZm9yIGEgd2luIG9yIGEgZHJhd1xuICAgICAgY29uc3QgcmVzdWx0ID0gY2hlY2tSZXN1bHQoZ2FtZVN0YXRlLCBjdXJyZW50UGxheWVyKTtcbiAgICAgIGlmIChyZXN1bHQgPT09IFwiWFwiIHx8IHJlc3VsdCA9PT0gXCJPXCIpIHtcbiAgICAgICAgLy8gR2FtZSBvdmVyIC0gc2hvdyBhIG1lc3NhZ2UgYW5kIGRpc2FibGUgY2xpY2tzIG9uIHRoZSBzcXVhcmVzXG4gICAgICAgIGdhbWVPdmVyID0gdHJ1ZTtcbiAgICAgICAgcmVzZXRCdG4udGV4dENvbnRlbnQ9KGBQbGF5ZXIgJHtyZXN1bHR9IHdpbnMhYCk7XG4gICAgICAgICBzcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgICAgICAgICBzcXVhcmUudGV4dENvbnRlbnQ9XCJcIjtcbiAgICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgIH0gZWxzZSBpZiAocmVzdWx0ID09PSBcImRyYXdcIikge1xuICAgICAgICAvLyBHYW1lIG92ZXIgLSBzaG93IGEgbWVzc2FnZSBhbmQgZGlzYWJsZSBjbGlja3Mgb24gdGhlIHNxdWFyZXNcbiAgICAgICAgZ2FtZU92ZXIgPSB0cnVlO1xuICAgICAgICByZXNldEJ0bi50ZXh0Q29udGVudD0oYEl0J3MgYSBkcmF3IWApO1xuICAgICAgICAvLyBzcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgICAgICAvLyAgIHNxdWFyZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2xpY2spO1xuICAgICAgICAvLyB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFN3aXRjaCBwbGF5ZXJzXG4gICAgICAgIGN1cnJlbnRQbGF5ZXIgPSBjdXJyZW50UGxheWVyID09PSBcIlhcIiA/IFwiT1wiIDogXCJYXCI7XG5cbiAgICAgICAgLy8gSWYgaXQncyB0aGUgY29tcHV0ZXIncyB0dXJuLCBsZXQgdGhlIGNvbXB1dGVyIG1ha2UgYSBtb3ZlXG4gICAgICAgIGlmIChjdXJyZW50UGxheWVyID09PSBcIk9cIikge1xuICAgICAgICAgIG1ha2VDb21wdXRlck1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrUmVzdWx0KGdhbWVTdGF0ZSwgcGxheWVyKSB7XG4gICAgICAvLyBDaGVjayBmb3IgYSB3aW4gYnkgY2hlY2tpbmcgYWxsIHJvd3MsIGNvbHVtbnMsIGFuZCBkaWFnb25hbHNcbiAgICAgIGlmIChcbiAgICAgICAgKGdhbWVTdGF0ZVswXVswXSA9PT0gcGxheWVyICYmXG4gICAgICAgICAgZ2FtZVN0YXRlWzBdWzFdID09PSBwbGF5ZXIgJiZcbiAgICAgICAgICBnYW1lU3RhdGVbMF1bMl0gPT09IHBsYXllcikgfHxcbiAgICAgICAgKGdhbWVTdGF0ZVsxXVswXSA9PT0gcGxheWVyICYmXG4gICAgICAgICAgZ2FtZVN0YXRlWzFdWzFdID09PSBwbGF5ZXIgJiZcbiAgICAgICAgICBnYW1lU3RhdGVbMV1bMl0gPT09IHBsYXllcikgfHxcbiAgICAgICAgKGdhbWVTdGF0ZVsyXVswXSA9PT0gcGxheWVyICYmXG4gICAgICAgICAgZ2FtZVN0YXRlWzJdWzFdID09PSBwbGF5ZXIgJiZcbiAgICAgICAgICBnYW1lU3RhdGVbMl1bMl0gPT09IHBsYXllcikgfHxcbiAgICAgICAgKGdhbWVTdGF0ZVswXVswXSA9PT0gcGxheWVyICYmXG4gICAgICAgICAgZ2FtZVN0YXRlWzFdWzBdID09PSBwbGF5ZXIgJiZcbiAgICAgICAgICBnYW1lU3RhdGVbMl1bMF0gPT09IHBsYXllcikgfHxcbiAgICAgICAgKGdhbWVTdGF0ZVswXVsxXSA9PT0gcGxheWVyICYmXG4gICAgICAgICAgZ2FtZVN0YXRlWzFdWzFdID09PSBwbGF5ZXIgJiZcbiAgICAgICAgICBnYW1lU3RhdGVbMl1bMV0gPT09IHBsYXllcikgfHxcbiAgICAgICAgKGdhbWVTdGF0ZVswXVsyXSA9PT0gcGxheWVyICYmXG4gICAgICAgICAgZ2FtZVN0YXRlWzFdWzJdID09PSBwbGF5ZXIgJiZcbiAgICAgICAgICBnYW1lU3RhdGVbMl1bMl0gPT09IHBsYXllcikgfHxcbiAgICAgICAgKGdhbWVTdGF0ZVswXVswXSA9PT0gcGxheWVyICYmXG4gICAgICAgICAgZ2FtZVN0YXRlWzFdWzFdID09PSBwbGF5ZXIgJiZcbiAgICAgICAgICBnYW1lU3RhdGVbMl1bMl0gPT09IHBsYXllcikgfHxcbiAgICAgICAgKGdhbWVTdGF0ZVswXVsyXSA9PT0gcGxheWVyICYmXG4gICAgICAgICAgZ2FtZVN0YXRlWzFdWzFdID09PSBwbGF5ZXIgJiZcbiAgICAgICAgICBnYW1lU3RhdGVbMl1bMF0gPT09IHBsYXllcilcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gcGxheWVyO1xuICAgICAgfVxuXG4gICAgICAvLyBDaGVjayBmb3IgYSBkcmF3IGJ5IGNoZWNraW5nIGlmIGFsbCBzcXVhcmVzIGFyZSBmaWxsZWRcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZVN0YXRlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZ2FtZVN0YXRlW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgaWYgKGdhbWVTdGF0ZVtpXVtqXSA9PT0gXCJcIikge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBcImRyYXdcIjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlQ29tcHV0ZXJNb3ZlKCkge1xuICAgICAgLy8gVXNlIHRoZSBtaW5pbWF4IGFsZ29yaXRobSB0byBmaW5kIHRoZSBiZXN0IG1vdmUgZm9yIHRoZSBjb21wdXRlclxuICAgICAgbGV0IGJlc3RTY29yZSA9IC1JbmZpbml0eTtcbiAgICAgIGxldCBiZXN0Um93ID0gbnVsbDtcbiAgICAgIGxldCBiZXN0Q29sID0gbnVsbDtcbiAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IGdhbWVTdGF0ZS5sZW5ndGg7IHJvdysrKSB7XG4gICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IGdhbWVTdGF0ZVtyb3ddLmxlbmd0aDsgY29sKyspIHtcbiAgICAgICAgICBpZiAoZ2FtZVN0YXRlW3Jvd11bY29sXSA9PT0gXCJcIikge1xuICAgICAgICAgICAgZ2FtZVN0YXRlW3Jvd11bY29sXSA9IFwiT1wiO1xuICAgICAgICAgICAgY29uc3Qgc2NvcmUgPSBtaW5pbWF4KGdhbWVTdGF0ZSwgMCwgZmFsc2UpO1xuICAgICAgICAgICAgZ2FtZVN0YXRlW3Jvd11bY29sXSA9IFwiXCI7XG4gICAgICAgICAgICBpZiAoc2NvcmUgPiBiZXN0U2NvcmUpIHtcbiAgICAgICAgICAgICAgYmVzdFNjb3JlID0gc2NvcmU7XG4gICAgICAgICAgICAgIGJlc3RSb3cgPSByb3c7XG4gICAgICAgICAgICAgIGJlc3RDb2wgPSBjb2w7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIE1ha2UgdGhlIGJlc3QgbW92ZVxuICAgICAgZ2FtZVN0YXRlW2Jlc3RSb3ddW2Jlc3RDb2xdID0gXCJPXCI7XG4gICAgICBzcXVhcmVzW2Jlc3RSb3cgKiAzICsgYmVzdENvbF0udGV4dENvbnRlbnQgPSBcIk9cIjtcbiAgICAgIGN1cnJlbnRQbGF5ZXIgPSBcIlhcIjtcblxuICAgICAgLy8gQ2hlY2sgZm9yIGEgd2luIG9yIGEgZHJhd1xuICAgICAgY29uc3QgcmVzdWx0ID0gY2hlY2tSZXN1bHQoZ2FtZVN0YXRlLCBcIk9cIik7XG4gICAgICBpZiAocmVzdWx0ID09PSBcIk9cIikge1xuICAgICAgICAvLyBHYW1lIG92ZXIgLSBzaG93IGEgbWVzc2FnZSBhbmQgZGlzYWJsZSBjbGlja3Mgb24gdGhlIHNxdWFyZXNcbiAgICAgICAgZ2FtZU92ZXIgPSB0cnVlO1xuICAgICAgICByZXNldEJ0bi50ZXh0Q29udGVudD0oYFBsYXllciBPIHdpbnMhYCk7XG4gICAgICAgIC8vIHNxdWFyZXMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgICAgIC8vICAgc3F1YXJlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDbGljayk7XG4gICAgICAgIC8vIH0pO1xuICAgICAgfSBlbHNlIGlmIChyZXN1bHQgPT09IFwiZHJhd1wiKSB7XG4gICAgICAgIC8vIEdhbWUgb3ZlciAtIHNob3cgYSBtZXNzYWdlIGFuZCBkaXNhYmxlIGNsaWNrcyBvbiB0aGUgc3F1YXJlc1xuICAgICAgICBnYW1lT3ZlciA9IHRydWU7XG4gICAgICAgIHJlc2V0QnRuLnRleHRDb250ZW50PShgSXQncyBhIGRyYXchYCk7XG4gICAgICAgIC8vIHNxdWFyZXMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgICAgIC8vICAgc3F1YXJlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDbGljayk7XG4gICAgICAgIC8vIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1pbmltYXgoZ2FtZVN0YXRlLCBkZXB0aCwgaXNNYXhpbWl6aW5nKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBjaGVja1Jlc3VsdChnYW1lU3RhdGUsIGlzTWF4aW1pemluZyA/IFwiT1wiIDogXCJYXCIpO1xuICAgICAgaWYgKHJlc3VsdCA9PT0gXCJPXCIpIHtcbiAgICAgICAgcmV0dXJuIDEwIC0gZGVwdGg7XG4gICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gXCJYXCIpIHtcbiAgICAgICAgcmV0dXJuIGRlcHRoIC0gMTA7XG4gICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gXCJkcmF3XCIpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc01heGltaXppbmcpIHtcbiAgICAgICAgbGV0IGJlc3RTY29yZSA9IC1JbmZpbml0eTtcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgZ2FtZVN0YXRlLmxlbmd0aDsgcm93KyspIHtcbiAgICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBnYW1lU3RhdGVbcm93XS5sZW5ndGg7IGNvbCsrKSB7XG4gICAgICAgICAgICBpZiAoZ2FtZVN0YXRlW3Jvd11bY29sXSA9PT0gXCJcIikge1xuICAgICAgICAgICAgICBnYW1lU3RhdGVbcm93XVtjb2xdID0gXCJPXCI7XG4gICAgICAgICAgICAgIGNvbnN0IHNjb3JlID0gbWluaW1heChnYW1lU3RhdGUsIGRlcHRoICsgMSwgZmFsc2UpO1xuICAgICAgICAgICAgICBnYW1lU3RhdGVbcm93XVtjb2xdID0gXCJcIjtcbiAgICAgICAgICAgICAgYmVzdFNjb3JlID0gTWF0aC5tYXgoYmVzdFNjb3JlLCBzY29yZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBiZXN0U2NvcmU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgYmVzdFNjb3JlID0gSW5maW5pdHk7XG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IGdhbWVTdGF0ZS5sZW5ndGg7IHJvdysrKSB7XG4gICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgZ2FtZVN0YXRlW3Jvd10ubGVuZ3RoOyBjb2wrKykge1xuICAgICAgICAgICAgaWYgKGdhbWVTdGF0ZVtyb3ddW2NvbF0gPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgZ2FtZVN0YXRlW3Jvd11bY29sXSA9IFwiWFwiO1xuICAgICAgICAgICAgICBjb25zdCBzY29yZSA9IG1pbmltYXgoZ2FtZVN0YXRlLCBkZXB0aCArIDEsIHRydWUpO1xuICAgICAgICAgICAgICBnYW1lU3RhdGVbcm93XVtjb2xdID0gXCJcIjtcbiAgICAgICAgICAgICAgYmVzdFNjb3JlID0gTWF0aC5taW4oYmVzdFNjb3JlLCBzY29yZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBiZXN0U2NvcmU7XG4gICAgICB9XG4gICAgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==