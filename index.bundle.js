"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["index"],{

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
___CSS_LOADER_EXPORT___.push([module.id, "html,\nbody {\n  margin: 0px;\n  padding: 0px;\n  font-family: 'Roboto', 'Calibri', 'Arial';\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background-color: rgb(34, 40, 49);\n  color: rgb(193, 224, 225);\n}\n\n.icons {\n  height: 20px;\n  width: auto;\n  filter: invert(100%) sepia(76%) saturate(556%) hue-rotate(153deg)\n    brightness(90%) contrast(93%);\n}\n\n.plus-icon {\n  transition: all 0.3s;\n}\n\n.plus-icon:hover {\n  cursor: pointer;\n  height: 23px;\n  width: auto;\n}\n\n.edit-tools > .icons:hover {\n  transform: scale(1.15);\n  transition: all 0.3s;\n  cursor: pointer;\n}\n\n.rotate {\n  transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  -webkit-transform: rotate(45deg);\n  -moz-transform: rotate(45deg);\n}\n\n.container {\n  padding: 0px clamp(1rem, 15%, 50vw);\n}\n\nh1 {\n  font-size: 4rem;\n  background: -webkit-linear-gradient(rgb(193, 224, 221), rgb(0, 173, 181));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\nh2 {\n  color: rgb(119, 197, 201);\n}\n\n.content {\n  display: flex;\n}\n\n.sidebar {\n  flex-basis: clamp(24ch, 15%, 50ch);\n  padding: 1rem 2rem;\n  background-color: rgb(57, 62, 70);\n  border-radius: 20px;\n  min-height: 60vh;\n}\n\n.filter,\n.project {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-wrap: nowrap;\n  padding: 0px 10px;\n  height: 2.3rem;\n}\n\n.filter:hover,\n.project:hover {\n  background-color: rgba(80, 85, 92, 0.5);\n  border-radius: 8px;\n  cursor: pointer;\n}\n\n.projects-header {\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 2rem;\n  padding-bottom: 10px;\n  height: 4ch;\n  gap: 1rem;\n}\n\n.projects input[type='text'] {\n  border-radius: 8px;\n  background-color: rgba(80, 85, 92, 0.5);\n  outline: none;\n  border: none;\n  padding: 8px;\n  color: rgb(235, 235, 235);\n  font-size: 1rem;\n  font-family: inherit;\n  margin: 10px 10px 10px 0px;\n  width: calc(100% - 15px);\n}\n\n.project {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.tasks-card {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex: 1 1 300px;\n  margin-left: 30px;\n  padding: 1rem 2rem;\n  background-color: rgb(57, 62, 70);\n  border-radius: 20px;\n}\n\n.task {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: rgba(80, 85, 92, 0.5);\n  padding: 10px;\n  margin-bottom: 1rem;\n  border-radius: 5px;\n  gap: 1rem;\n  border-radius: 8px;\n}\n\n.task-info {\n  display: flex;\n  align-items: center;\n  color: rgb(214, 241, 241);\n}\n\n.edit-tools {\n  display: flex;\n  gap: 1rem;\n}\n\n.checkbox {\n  display: flex;\n  gap: 2rem;\n}\n\ninput[type='checkbox'] {\n  -webkit-appearance: none;\n  appearance: none;\n  margin: 0;\n  font: inherit;\n  color: currentColor;\n  width: 1.15em;\n  height: 1.15em;\n  border: 0.12em solid currentColor;\n  border-radius: 0.15em;\n  transform: translateY(-0.075em);\n  display: grid;\n  place-content: center;\n  cursor: pointer;\n}\n\ninput[type='checkbox']::before {\n  content: '';\n  width: 0.65em;\n  height: 0.65em;\n  transform: scale(0);\n  transition: 120ms transform ease-in-out;\n  box-shadow: inset 1em 1em var(--form-control-color);\n  background-color: CanvasText;\n  transform-origin: bottom left;\n  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\n}\n\ninput[type='checkbox']:checked::before {\n  transform: scale(1);\n  background-color: rgb(193, 224, 225);\n}\n\ninput[type='checkbox']:checked + label {\n  text-decoration: line-through;\n  color: rgb(193, 224, 225);\n}\n\n.add-task-button {\n  width: 100px;\n  border: none;\n  background-image: linear-gradient(\n    to right,\n    rgb(0, 160, 169) 0%,\n    rgb(0, 140, 147) 51%,\n    rgb(83, 96, 96) 100%\n  );\n  margin: 10px;\n  padding: 10px 15px;\n  text-align: center;\n  text-transform: uppercase;\n  transition: 0.5s;\n  background-size: 200% auto;\n  color: rgb(226, 235, 235);\n  font-weight: bold;\n  border-radius: 20px;\n  display: block;\n  align-self: flex-end;\n}\n\n.add-task-button:hover {\n  transform: scale(1.1);\n  color: #fff;\n  text-decoration: none;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;EAEE,WAAW;EACX,YAAY;EACZ,yCAAyC;EACzC,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,iCAAiC;EACjC,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,WAAW;EACX;iCAC+B;AACjC;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,sBAAsB;EACtB,oBAAoB;EACpB,eAAe;AACjB;;AAEA;EACE,wBAAwB;EACxB,4BAA4B;EAC5B,gCAAgC;EAChC,6BAA6B;AAC/B;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,eAAe;EACf,yEAAyE;EACzE,6BAA6B;EAC7B,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kCAAkC;EAClC,kBAAkB;EAClB,iCAAiC;EACjC,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;;EAEE,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,iBAAiB;EACjB,iBAAiB;EACjB,cAAc;AAChB;;AAEA;;EAEE,uCAAuC;EACvC,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,mBAAmB;EACnB,8BAA8B;EAC9B,iBAAiB;EACjB,oBAAoB;EACpB,WAAW;EACX,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,uCAAuC;EACvC,aAAa;EACb,YAAY;EACZ,YAAY;EACZ,yBAAyB;EACzB,eAAe;EACf,oBAAoB;EACpB,0BAA0B;EAC1B,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,iCAAiC;EACjC,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,uCAAuC;EACvC,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,wBAAwB;EACxB,gBAAgB;EAChB,SAAS;EACT,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,cAAc;EACd,iCAAiC;EACjC,qBAAqB;EACrB,+BAA+B;EAC/B,aAAa;EACb,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,cAAc;EACd,mBAAmB;EACnB,uCAAuC;EACvC,mDAAmD;EACnD,4BAA4B;EAC5B,6BAA6B;EAC7B,uEAAuE;AACzE;;AAEA;EACE,mBAAmB;EACnB,oCAAoC;AACtC;;AAEA;EACE,6BAA6B;EAC7B,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ;;;;;GAKC;EACD,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,yBAAyB;EACzB,gBAAgB;EAChB,0BAA0B;EAC1B,yBAAyB;EACzB,iBAAiB;EACjB,mBAAmB;EACnB,cAAc;EACd,oBAAoB;AACtB;;AAEA;EACE,qBAAqB;EACrB,WAAW;EACX,qBAAqB;AACvB","sourcesContent":["html,\nbody {\n  margin: 0px;\n  padding: 0px;\n  font-family: 'Roboto', 'Calibri', 'Arial';\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background-color: rgb(34, 40, 49);\n  color: rgb(193, 224, 225);\n}\n\n.icons {\n  height: 20px;\n  width: auto;\n  filter: invert(100%) sepia(76%) saturate(556%) hue-rotate(153deg)\n    brightness(90%) contrast(93%);\n}\n\n.plus-icon {\n  transition: all 0.3s;\n}\n\n.plus-icon:hover {\n  cursor: pointer;\n  height: 23px;\n  width: auto;\n}\n\n.edit-tools > .icons:hover {\n  transform: scale(1.15);\n  transition: all 0.3s;\n  cursor: pointer;\n}\n\n.rotate {\n  transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  -webkit-transform: rotate(45deg);\n  -moz-transform: rotate(45deg);\n}\n\n.container {\n  padding: 0px clamp(1rem, 15%, 50vw);\n}\n\nh1 {\n  font-size: 4rem;\n  background: -webkit-linear-gradient(rgb(193, 224, 221), rgb(0, 173, 181));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\nh2 {\n  color: rgb(119, 197, 201);\n}\n\n.content {\n  display: flex;\n}\n\n.sidebar {\n  flex-basis: clamp(24ch, 15%, 50ch);\n  padding: 1rem 2rem;\n  background-color: rgb(57, 62, 70);\n  border-radius: 20px;\n  min-height: 60vh;\n}\n\n.filter,\n.project {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-wrap: nowrap;\n  padding: 0px 10px;\n  height: 2.3rem;\n}\n\n.filter:hover,\n.project:hover {\n  background-color: rgba(80, 85, 92, 0.5);\n  border-radius: 8px;\n  cursor: pointer;\n}\n\n.projects-header {\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 2rem;\n  padding-bottom: 10px;\n  height: 4ch;\n  gap: 1rem;\n}\n\n.projects input[type='text'] {\n  border-radius: 8px;\n  background-color: rgba(80, 85, 92, 0.5);\n  outline: none;\n  border: none;\n  padding: 8px;\n  color: rgb(235, 235, 235);\n  font-size: 1rem;\n  font-family: inherit;\n  margin: 10px 10px 10px 0px;\n  width: calc(100% - 15px);\n}\n\n.project {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.tasks-card {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex: 1 1 300px;\n  margin-left: 30px;\n  padding: 1rem 2rem;\n  background-color: rgb(57, 62, 70);\n  border-radius: 20px;\n}\n\n.task {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: rgba(80, 85, 92, 0.5);\n  padding: 10px;\n  margin-bottom: 1rem;\n  border-radius: 5px;\n  gap: 1rem;\n  border-radius: 8px;\n}\n\n.task-info {\n  display: flex;\n  align-items: center;\n  color: rgb(214, 241, 241);\n}\n\n.edit-tools {\n  display: flex;\n  gap: 1rem;\n}\n\n.checkbox {\n  display: flex;\n  gap: 2rem;\n}\n\ninput[type='checkbox'] {\n  -webkit-appearance: none;\n  appearance: none;\n  margin: 0;\n  font: inherit;\n  color: currentColor;\n  width: 1.15em;\n  height: 1.15em;\n  border: 0.12em solid currentColor;\n  border-radius: 0.15em;\n  transform: translateY(-0.075em);\n  display: grid;\n  place-content: center;\n  cursor: pointer;\n}\n\ninput[type='checkbox']::before {\n  content: '';\n  width: 0.65em;\n  height: 0.65em;\n  transform: scale(0);\n  transition: 120ms transform ease-in-out;\n  box-shadow: inset 1em 1em var(--form-control-color);\n  background-color: CanvasText;\n  transform-origin: bottom left;\n  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\n}\n\ninput[type='checkbox']:checked::before {\n  transform: scale(1);\n  background-color: rgb(193, 224, 225);\n}\n\ninput[type='checkbox']:checked + label {\n  text-decoration: line-through;\n  color: rgb(193, 224, 225);\n}\n\n.add-task-button {\n  width: 100px;\n  border: none;\n  background-image: linear-gradient(\n    to right,\n    rgb(0, 160, 169) 0%,\n    rgb(0, 140, 147) 51%,\n    rgb(83, 96, 96) 100%\n  );\n  margin: 10px;\n  padding: 10px 15px;\n  text-align: center;\n  text-transform: uppercase;\n  transition: 0.5s;\n  background-size: 200% auto;\n  color: rgb(226, 235, 235);\n  font-weight: bold;\n  border-radius: 20px;\n  display: block;\n  align-self: flex-end;\n}\n\n.add-task-button:hover {\n  transform: scale(1.1);\n  color: #fff;\n  text-decoration: none;\n}\n"],"sourceRoot":""}]);
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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/dom-manipulation.js":
/*!*********************************!*\
  !*** ./src/dom-manipulation.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProjectToDOM": () => (/* binding */ addProjectToDOM),
/* harmony export */   "expandCreateProjectForm": () => (/* binding */ expandCreateProjectForm),
/* harmony export */   "getProjectForm": () => (/* binding */ getProjectForm),
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "projectFormExpanded": () => (/* binding */ projectFormExpanded),
/* harmony export */   "rotateAddProjectIcon": () => (/* binding */ rotateAddProjectIcon)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _images_inbox_solid_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/inbox-solid.svg */ "./src/images/inbox-solid.svg");
/* harmony import */ var _images_calendar_day_solid_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/calendar-day-solid.svg */ "./src/images/calendar-day-solid.svg");
/* harmony import */ var _images_calendar_week_solid_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/calendar-week-solid.svg */ "./src/images/calendar-week-solid.svg");
/* harmony import */ var _images_folder_solid_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/folder-solid.svg */ "./src/images/folder-solid.svg");
/* harmony import */ var _images_pen_to_square_solid_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/pen-to-square-solid.svg */ "./src/images/pen-to-square-solid.svg");
/* harmony import */ var _images_trash_solid_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/trash-solid.svg */ "./src/images/trash-solid.svg");
/* harmony import */ var _images_plus_solid_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/plus-solid.svg */ "./src/images/plus-solid.svg");









function componentContainer() {
  const container = document.createElement('div');
  container.classList.add('container');
  return container;
}

function componentHeader() {
  const header = document.createElement('header');
  header.classList.add('header');
  return header;
}

function componentTitle() {
  const title = document.createElement('h1');
  title.textContent = 'todo list';
  return title;
}

function componentContent() {
  const content = document.createElement('div');
  content.classList.add('content');
  return content;
}

function componentSidebar() {
  const sidebar = document.createElement('div');
  sidebar.classList.add('sidebar');
  return sidebar;
}

function componentFilters() {
  const filters = document.createElement('div');
  filters.classList.add('filters');
  return filters;
}

function componentFilter() {
  const filter = document.createElement('div');
  filter.classList.add('filter');
  return filter;
}

function componentInboxIcon() {
  const inboxIcon = new Image();
  inboxIcon.src = _images_inbox_solid_svg__WEBPACK_IMPORTED_MODULE_1__;
  inboxIcon.classList.add('icons');
  return inboxIcon;
}

function componentTodayIcon() {
  const todayIcon = new Image();
  todayIcon.src = _images_calendar_day_solid_svg__WEBPACK_IMPORTED_MODULE_2__;
  todayIcon.classList.add('icons');
  return todayIcon;
}

function componentWeekIcon() {
  const weekIcon = new Image();
  weekIcon.src = _images_calendar_week_solid_svg__WEBPACK_IMPORTED_MODULE_3__;
  weekIcon.classList.add('icons');
  return weekIcon;
}

function componentFilterName(name) {
  const filterName = document.createElement('p');
  filterName.textContent = name;
  return filterName;
}

function componentSectionHeader(heading) {
  const sectionHeader = document.createElement('h2');
  sectionHeader.textContent = heading;
  sectionHeader.classList.add('section-header');
  return sectionHeader;
}

function componentProjectsHeading() {
  const projectsHeading = document.createElement('h2');
  projectsHeading.classList.add('projects-heading-title');
  projectsHeading.textContent = 'Projects';
  return projectsHeading;
}

function componentProjects() {
  const projects = document.createElement('div');
  projects.classList.add('projects');
  return projects;
}

function componentProject() {
  const project = document.createElement('div');
  project.classList.add('project');
  return project;
}

function componentProjectIcon() {
  const projectIcon = new Image();
  projectIcon.src = _images_folder_solid_svg__WEBPACK_IMPORTED_MODULE_4__;
  projectIcon.classList.add('icons');
  return projectIcon;
}

function componentProjectsHeader() {
  const projectsHeader = document.createElement('span');
  projectsHeader.classList.add('projects-header');
  return projectsHeader;
}

function componentProjectInputForm() {
  const projectForm = document.createElement('form');
  const projectInputField = document.createElement('input');
  const projectSubmit = document.createElement('input');
  projectForm.classList.add('project-form');
  projectForm.setAttribute('id', 'project-form');
  projectForm.appendChild(projectInputField);
  projectInputField.setAttribute('name', 'project-name');
  projectInputField.setAttribute('id', 'project-name');
  projectInputField.setAttribute('type', 'text');
  projectInputField.classList.add('project-form-field');
  projectInputField.setAttribute('autofocus', 'autofocus');
  projectForm.appendChild(projectSubmit);
  projectSubmit.setAttribute('type', 'submit');
  projectSubmit.setAttribute('id', 'project-submit');
  return projectForm;
}

function componentProjectTitle(title) {
  const projectTitle = document.createElement('p');
  projectTitle.textContent = title;
  return projectTitle;
}

function componentAddProjectIcon() {
  const addProjectIcon = new Image();
  addProjectIcon.src = _images_plus_solid_svg__WEBPACK_IMPORTED_MODULE_7__;
  addProjectIcon.classList.add('icons', 'plus-icon');
  return addProjectIcon;
}

function componentTasksCard() {
  const tasksCard = document.createElement('div');
  tasksCard.classList.add('tasks-card');
  return tasksCard;
}

function componentTasks() {
  const tasks = document.createElement('div');
  tasks.classList.add('tasks');
  return tasks;
}

function componentTask() {
  const task = document.createElement('div');
  task.classList.add('task');
  return task;
}

function componentCheckbox() {
  const checkbox = document.createElement('div');
  checkbox.classList.add('checkbox');
  return checkbox;
}

function componentCheckboxField() {
  const checkboxField = document.createElement('input');
  checkboxField.setAttribute('type', 'checkbox');
  checkboxField.classList.add('checkbox-field');
  return checkboxField;
}

function componentCheckboxLabel(projectTitle) {
  const checkboxLabel = document.createElement('label');
  checkboxLabel.setAttribute('for', 'checkbox');
  checkboxLabel.classList.add('checkbox-label');
  checkboxLabel.textContent = projectTitle;
  return checkboxLabel;
}

function componentTaskInfo() {
  const taskInfo = document.createElement('div');
  taskInfo.classList.add('task-info');
  return taskInfo;
}

function componentEditTools() {
  const editTools = document.createElement('div');
  editTools.classList.add('edit-tools');
  return editTools;
}

function componentEditIcon() {
  const editIcon = new Image();
  editIcon.src = _images_pen_to_square_solid_svg__WEBPACK_IMPORTED_MODULE_5__;
  editIcon.classList.add('icons');
  return editIcon;
}

function componentTrashIcon() {
  const trashIcon = new Image();
  trashIcon.src = _images_trash_solid_svg__WEBPACK_IMPORTED_MODULE_6__;
  trashIcon.classList.add('icons');
  return trashIcon;
}

function componentAddTaskButton() {
  const addTaskButton = document.createElement('button');
  addTaskButton.classList.add('add-task-button');
  addTaskButton.textContent = 'Add Task';
  return addTaskButton;
}

function init() {
  const container = componentContainer();
  const header = componentHeader();
  const content = componentContent();
  const sidebar = componentSidebar();
  const filters = componentFilters();
  const filterAll = componentFilter();
  const filterToday = componentFilter();
  const filterWeek = componentFilter();
  const projectsHeader = componentProjectsHeader();
  const projects = componentProjects();
  const project = componentProject();
  const tasksCard = componentTasksCard();
  const tasks = componentTasks();
  const task = componentTask();
  const taskInfo = componentTaskInfo();
  const editTools = componentEditTools();
  const checkbox = componentCheckbox();

  document.body.appendChild(container);
  container.appendChild(header);
  header.appendChild(componentTitle());
  container.appendChild(content);
  content.appendChild(sidebar);
  sidebar.appendChild(filters);
  filters.appendChild(componentSectionHeader('Filters'));
  filters.appendChild(filterAll);
  filterAll.appendChild(componentInboxIcon());
  filterAll.appendChild(componentFilterName('All'));
  filters.appendChild(filterToday);
  filterToday.appendChild(componentTodayIcon());
  filterToday.appendChild(componentFilterName('Today'));
  filters.appendChild(filterWeek);
  filterWeek.appendChild(componentWeekIcon());
  filterWeek.appendChild(componentFilterName('Week'));
  sidebar.appendChild(projects);
  projects.appendChild(projectsHeader);
  projectsHeader.appendChild(componentProjectsHeading());
  projectsHeader.appendChild(componentAddProjectIcon());
  projects.appendChild(componentProjectInputForm());
  document.getElementById('project-submit').hidden = true;
  document.getElementById('project-form').hidden = true;
  projects.appendChild(project);
  project.appendChild(componentProjectIcon());
  project.appendChild(componentProjectTitle('Primary'));
  content.appendChild(tasksCard);
  tasksCard.appendChild(tasks);
  tasks.appendChild(componentSectionHeader('Tasks'));
  tasks.appendChild(task);
  task.appendChild(taskInfo);
  taskInfo.appendChild(checkbox);
  checkbox.appendChild(componentCheckboxField());
  checkbox.appendChild(componentCheckboxLabel('Finish project'));
  task.appendChild(editTools);
  editTools.appendChild(componentEditIcon());
  editTools.appendChild(componentTrashIcon());
  tasksCard.appendChild(componentAddTaskButton());
}

function getProjectForm() {
  return document.querySelector('.project-form');
}

function addProjectToDOM(newProject) {
  const projects = document.querySelector('.projects');
  const project = componentProject();
  const projectTitle = componentProjectTitle(newProject);
  projects.insertBefore(project, projects.children[2]);
  project.appendChild(componentProjectIcon());
  project.appendChild(projectTitle);

  getProjectForm().reset();

  return projects;
}

// If project form is hidden is true, then that means project form
// is collapsed. This function would then return false,
// because it is false that the project form is expanded.
function projectFormExpanded() {
  return !getProjectForm().hidden;
}

// Expand or collapse the project form based on passed in true/false value
function expandCreateProjectForm(expand) {
  getProjectForm().hidden = !expand;
}

// Rotate add project icon when called
function rotateAddProjectIcon() {
  const addProjectIcon = document.querySelector('.plus-icon');
  if (!addProjectIcon.classList.contains('rotate')) {
    addProjectIcon.classList.add('rotate');
  } else if (addProjectIcon.classList.contains('rotate')) {
    addProjectIcon.classList.remove('rotate');
  }
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_manipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-manipulation */ "./src/dom-manipulation.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _site_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./site-storage */ "./src/site-storage.js");





(0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.init)();

const primaryTasks = [
  new _task__WEBPACK_IMPORTED_MODULE_1__["default"](
    'Respond to emails',
    'Catch up on personal and work emails',
    '3/4/2023',
    'low'
  ),
];

const primaryProject = new _project__WEBPACK_IMPORTED_MODULE_2__["default"]('Primary Project', primaryTasks);
const secondaryProject = new _project__WEBPACK_IMPORTED_MODULE_2__["default"]('Secondary Project');

(0,_site_storage__WEBPACK_IMPORTED_MODULE_3__.addProject)(primaryProject);
(0,_site_storage__WEBPACK_IMPORTED_MODULE_3__.addProject)(secondaryProject);

const taskTwo = new _task__WEBPACK_IMPORTED_MODULE_1__["default"](
  'Meal planning',
  'Plan meals for next week',
  '3/4/2023',
  3
);

primaryProject.addTask(taskTwo);
console.log((0,_site_storage__WEBPACK_IMPORTED_MODULE_3__.getProjects)());

// Listen to keypress on the project form
const projectForm = (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.getProjectForm)();
projectForm.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();

    // Collapse project input form
    (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.expandCreateProjectForm)(false);

    // Get project name from form value
    const projectName = document.getElementById('project-name').value;

    // Create new project with project name
    const newProject = new _project__WEBPACK_IMPORTED_MODULE_2__["default"](projectName);

    // Add project to site storage
    (0,_site_storage__WEBPACK_IMPORTED_MODULE_3__.addProject)(newProject);

    // Add project name to sidebar
    (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.addProjectToDOM)(newProject.getTitle());
  }
});

const showProjectForm = document.querySelector('.plus-icon');
showProjectForm.addEventListener('click', () => {
  // Expand or collapse project form based on current state when pressing the plus icon image
  (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.expandCreateProjectForm)(!(0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.projectFormExpanded)());

  // Rotate between + and X add project icon when clicked
  (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.rotateAddProjectIcon)();
});


/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
class Project {
  constructor(title, tasks = []) {
    this.title = title;
    this.tasks = tasks;
  }

  addTask(task) {
    this.tasks.push(task);
  }

  getTitle() {
    return this.title;
  }
}


/***/ }),

/***/ "./src/site-storage.js":
/*!*****************************!*\
  !*** ./src/site-storage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "getProjects": () => (/* binding */ getProjects)
/* harmony export */ });
// create list of projects
// methods to add projects and get projects

const projects = [];

function getProjects() {
  return projects;
}

function addProject(project) {
  projects.push(project);
}


/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}


/***/ }),

/***/ "./src/images/calendar-day-solid.svg":
/*!*******************************************!*\
  !*** ./src/images/calendar-day-solid.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "049aa45aa1ab7e02c80f.svg";

/***/ }),

/***/ "./src/images/calendar-week-solid.svg":
/*!********************************************!*\
  !*** ./src/images/calendar-week-solid.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f360217cf3b8e3daa85c.svg";

/***/ }),

/***/ "./src/images/folder-solid.svg":
/*!*************************************!*\
  !*** ./src/images/folder-solid.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6d8acae438692d0f5573.svg";

/***/ }),

/***/ "./src/images/inbox-solid.svg":
/*!************************************!*\
  !*** ./src/images/inbox-solid.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d03a6199fa502c73c7c9.svg";

/***/ }),

/***/ "./src/images/pen-to-square-solid.svg":
/*!********************************************!*\
  !*** ./src/images/pen-to-square-solid.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eba13f47dfe29b03b3ee.svg";

/***/ }),

/***/ "./src/images/plus-solid.svg":
/*!***********************************!*\
  !*** ./src/images/plus-solid.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c4ad914c4a4c568589ae.svg";

/***/ }),

/***/ "./src/images/trash-solid.svg":
/*!************************************!*\
  !*** ./src/images/trash-solid.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b365bd196f686736fd70.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixxREFBVTtBQUM5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QixtREFBUTtBQUMvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsNERBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0Isb0RBQVM7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JUNEI7QUFDRjtBQUNNO0FBQ3lCOztBQUV6RCx1REFBSTs7QUFFSjtBQUNBLE1BQU0sNkNBQUk7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCLGdEQUFPO0FBQ2xDLDZCQUE2QixnREFBTzs7QUFFcEMseURBQVU7QUFDVix5REFBVTs7QUFFVixvQkFBb0IsNkNBQUk7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVksMERBQVc7O0FBRXZCO0FBQ0Esb0JBQW9CLGlFQUFjO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksMEVBQXVCOztBQUUzQjtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLGdEQUFPOztBQUVsQztBQUNBLElBQUkseURBQVU7O0FBRWQ7QUFDQSxJQUFJLGtFQUFlO0FBQ25CO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxFQUFFLDBFQUF1QixFQUFFLHNFQUFtQjs7QUFFOUM7QUFDQSxFQUFFLHVFQUFvQjtBQUN0QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNyRWM7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBOztBQUVBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1hlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS1tYW5pcHVsYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zaXRlLXN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2suanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLFxcbmJvZHkge1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsICdDYWxpYnJpJywgJ0FyaWFsJztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzQsIDQwLCA0OSk7XFxuICBjb2xvcjogcmdiKDE5MywgMjI0LCAyMjUpO1xcbn1cXG5cXG4uaWNvbnMge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IGF1dG87XFxuICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSg3NiUpIHNhdHVyYXRlKDU1NiUpIGh1ZS1yb3RhdGUoMTUzZGVnKVxcbiAgICBicmlnaHRuZXNzKDkwJSkgY29udHJhc3QoOTMlKTtcXG59XFxuXFxuLnBsdXMtaWNvbiB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuXFxuLnBsdXMtaWNvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDIzcHg7XFxuICB3aWR0aDogYXV0bztcXG59XFxuXFxuLmVkaXQtdG9vbHMgPiAuaWNvbnM6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucm90YXRlIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDBweCBjbGFtcCgxcmVtLCAxNSUsIDUwdncpO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChyZ2IoMTkzLCAyMjQsIDIyMSksIHJnYigwLCAxNzMsIDE4MSkpO1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbmgyIHtcXG4gIGNvbG9yOiByZ2IoMTE5LCAxOTcsIDIwMSk7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIGZsZXgtYmFzaXM6IGNsYW1wKDI0Y2gsIDE1JSwgNTBjaCk7XFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTcsIDYyLCA3MCk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgbWluLWhlaWdodDogNjB2aDtcXG59XFxuXFxuLmZpbHRlcixcXG4ucHJvamVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICBwYWRkaW5nOiAwcHggMTBweDtcXG4gIGhlaWdodDogMi4zcmVtO1xcbn1cXG5cXG4uZmlsdGVyOmhvdmVyLFxcbi5wcm9qZWN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODAsIDg1LCA5MiwgMC41KTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3RzLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZy10b3A6IDJyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gIGhlaWdodDogNGNoO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ucHJvamVjdHMgaW5wdXRbdHlwZT0ndGV4dCddIHtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODAsIDg1LCA5MiwgMC41KTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBjb2xvcjogcmdiKDIzNSwgMjM1LCAyMzUpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDBweDtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxNXB4KTtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLnRhc2tzLWNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmbGV4OiAxIDEgMzAwcHg7XFxuICBtYXJnaW4tbGVmdDogMzBweDtcXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1NywgNjIsIDcwKTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbi50YXNrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4MCwgODUsIDkyLCAwLjUpO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBnYXA6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi50YXNrLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogcmdiKDIxNCwgMjQxLCAyNDEpO1xcbn1cXG5cXG4uZWRpdC10b29scyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uY2hlY2tib3gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMnJlbTtcXG59XFxuXFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIGNvbG9yOiBjdXJyZW50Q29sb3I7XFxuICB3aWR0aDogMS4xNWVtO1xcbiAgaGVpZ2h0OiAxLjE1ZW07XFxuICBib3JkZXI6IDAuMTJlbSBzb2xpZCBjdXJyZW50Q29sb3I7XFxuICBib3JkZXItcmFkaXVzOiAwLjE1ZW07XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMDc1ZW0pO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgd2lkdGg6IDAuNjVlbTtcXG4gIGhlaWdodDogMC42NWVtO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIHRyYW5zaXRpb246IDEyMG1zIHRyYW5zZm9ybSBlYXNlLWluLW91dDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDFlbSAxZW0gdmFyKC0tZm9ybS1jb250cm9sLWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IENhbnZhc1RleHQ7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcXG4gIGNsaXAtcGF0aDogcG9seWdvbigxNCUgNDQlLCAwIDY1JSwgNTAlIDEwMCUsIDEwMCUgMTYlLCA4MCUgMCUsIDQzJSA2MiUpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQ6OmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MywgMjI0LCAyMjUpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQgKyBsYWJlbCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gIGNvbG9yOiByZ2IoMTkzLCAyMjQsIDIyNSk7XFxufVxcblxcbi5hZGQtdGFzay1idXR0b24ge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcbiAgICB0byByaWdodCxcXG4gICAgcmdiKDAsIDE2MCwgMTY5KSAwJSxcXG4gICAgcmdiKDAsIDE0MCwgMTQ3KSA1MSUsXFxuICAgIHJnYig4MywgOTYsIDk2KSAxMDAlXFxuICApO1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgYXV0bztcXG4gIGNvbG9yOiByZ2IoMjI2LCAyMzUsIDIzNSk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4uYWRkLXRhc2stYnV0dG9uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztFQUVFLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUNBQXlDO0VBQ3pDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGlDQUFpQztFQUNqQyx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYO2lDQUMrQjtBQUNqQzs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1QixnQ0FBZ0M7RUFDaEMsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHlFQUF5RTtFQUN6RSw2QkFBNkI7RUFDN0Isb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGtCQUFrQjtFQUNsQixpQ0FBaUM7RUFDakMsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsdUNBQXVDO0VBQ3ZDLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix1Q0FBdUM7RUFDdkMsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsMEJBQTBCO0VBQzFCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUNBQWlDO0VBQ2pDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLHVDQUF1QztFQUN2QyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGNBQWM7RUFDZCxpQ0FBaUM7RUFDakMscUJBQXFCO0VBQ3JCLCtCQUErQjtFQUMvQixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsdUNBQXVDO0VBQ3ZDLG1EQUFtRDtFQUNuRCw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLHVFQUF1RTtBQUN6RTs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWjs7Ozs7R0FLQztFQUNELFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsMEJBQTBCO0VBQzFCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLHFCQUFxQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLFxcbmJvZHkge1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsICdDYWxpYnJpJywgJ0FyaWFsJztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzQsIDQwLCA0OSk7XFxuICBjb2xvcjogcmdiKDE5MywgMjI0LCAyMjUpO1xcbn1cXG5cXG4uaWNvbnMge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IGF1dG87XFxuICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSg3NiUpIHNhdHVyYXRlKDU1NiUpIGh1ZS1yb3RhdGUoMTUzZGVnKVxcbiAgICBicmlnaHRuZXNzKDkwJSkgY29udHJhc3QoOTMlKTtcXG59XFxuXFxuLnBsdXMtaWNvbiB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuXFxuLnBsdXMtaWNvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDIzcHg7XFxuICB3aWR0aDogYXV0bztcXG59XFxuXFxuLmVkaXQtdG9vbHMgPiAuaWNvbnM6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucm90YXRlIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDBweCBjbGFtcCgxcmVtLCAxNSUsIDUwdncpO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChyZ2IoMTkzLCAyMjQsIDIyMSksIHJnYigwLCAxNzMsIDE4MSkpO1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbmgyIHtcXG4gIGNvbG9yOiByZ2IoMTE5LCAxOTcsIDIwMSk7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIGZsZXgtYmFzaXM6IGNsYW1wKDI0Y2gsIDE1JSwgNTBjaCk7XFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTcsIDYyLCA3MCk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgbWluLWhlaWdodDogNjB2aDtcXG59XFxuXFxuLmZpbHRlcixcXG4ucHJvamVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICBwYWRkaW5nOiAwcHggMTBweDtcXG4gIGhlaWdodDogMi4zcmVtO1xcbn1cXG5cXG4uZmlsdGVyOmhvdmVyLFxcbi5wcm9qZWN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODAsIDg1LCA5MiwgMC41KTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3RzLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZy10b3A6IDJyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gIGhlaWdodDogNGNoO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ucHJvamVjdHMgaW5wdXRbdHlwZT0ndGV4dCddIHtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODAsIDg1LCA5MiwgMC41KTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBjb2xvcjogcmdiKDIzNSwgMjM1LCAyMzUpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDBweDtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxNXB4KTtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLnRhc2tzLWNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmbGV4OiAxIDEgMzAwcHg7XFxuICBtYXJnaW4tbGVmdDogMzBweDtcXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1NywgNjIsIDcwKTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbi50YXNrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4MCwgODUsIDkyLCAwLjUpO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBnYXA6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi50YXNrLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogcmdiKDIxNCwgMjQxLCAyNDEpO1xcbn1cXG5cXG4uZWRpdC10b29scyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uY2hlY2tib3gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMnJlbTtcXG59XFxuXFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIGNvbG9yOiBjdXJyZW50Q29sb3I7XFxuICB3aWR0aDogMS4xNWVtO1xcbiAgaGVpZ2h0OiAxLjE1ZW07XFxuICBib3JkZXI6IDAuMTJlbSBzb2xpZCBjdXJyZW50Q29sb3I7XFxuICBib3JkZXItcmFkaXVzOiAwLjE1ZW07XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMDc1ZW0pO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgd2lkdGg6IDAuNjVlbTtcXG4gIGhlaWdodDogMC42NWVtO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIHRyYW5zaXRpb246IDEyMG1zIHRyYW5zZm9ybSBlYXNlLWluLW91dDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDFlbSAxZW0gdmFyKC0tZm9ybS1jb250cm9sLWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IENhbnZhc1RleHQ7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcXG4gIGNsaXAtcGF0aDogcG9seWdvbigxNCUgNDQlLCAwIDY1JSwgNTAlIDEwMCUsIDEwMCUgMTYlLCA4MCUgMCUsIDQzJSA2MiUpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQ6OmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MywgMjI0LCAyMjUpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQgKyBsYWJlbCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gIGNvbG9yOiByZ2IoMTkzLCAyMjQsIDIyNSk7XFxufVxcblxcbi5hZGQtdGFzay1idXR0b24ge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcbiAgICB0byByaWdodCxcXG4gICAgcmdiKDAsIDE2MCwgMTY5KSAwJSxcXG4gICAgcmdiKDAsIDE0MCwgMTQ3KSA1MSUsXFxuICAgIHJnYig4MywgOTYsIDk2KSAxMDAlXFxuICApO1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgYXV0bztcXG4gIGNvbG9yOiByZ2IoMjI2LCAyMzUsIDIzNSk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4uYWRkLXRhc2stYnV0dG9uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgSW5ib3hJY29uIGZyb20gJy4vaW1hZ2VzL2luYm94LXNvbGlkLnN2Zyc7XG5pbXBvcnQgQ2FsZW5kYXJEYXlJY29uIGZyb20gJy4vaW1hZ2VzL2NhbGVuZGFyLWRheS1zb2xpZC5zdmcnO1xuaW1wb3J0IENhbGVuZGFyV2Vla0ljb24gZnJvbSAnLi9pbWFnZXMvY2FsZW5kYXItd2Vlay1zb2xpZC5zdmcnO1xuaW1wb3J0IEZvbGRlckljb24gZnJvbSAnLi9pbWFnZXMvZm9sZGVyLXNvbGlkLnN2Zyc7XG5pbXBvcnQgRWRpdEljb24gZnJvbSAnLi9pbWFnZXMvcGVuLXRvLXNxdWFyZS1zb2xpZC5zdmcnO1xuaW1wb3J0IFRyYXNoSWNvbiBmcm9tICcuL2ltYWdlcy90cmFzaC1zb2xpZC5zdmcnO1xuaW1wb3J0IFBsdXNJY29uIGZyb20gJy4vaW1hZ2VzL3BsdXMtc29saWQuc3ZnJztcblxuZnVuY3Rpb24gY29tcG9uZW50Q29udGFpbmVyKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRIZWFkZXIoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFRpdGxlKCkge1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gJ3RvZG8gbGlzdCc7XG4gIHJldHVybiB0aXRsZTtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50Q29udGVudCgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKTtcbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFNpZGViYXIoKSB7XG4gIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJyk7XG4gIHJldHVybiBzaWRlYmFyO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRGaWx0ZXJzKCkge1xuICBjb25zdCBmaWx0ZXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZpbHRlcnMuY2xhc3NMaXN0LmFkZCgnZmlsdGVycycpO1xuICByZXR1cm4gZmlsdGVycztcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50RmlsdGVyKCkge1xuICBjb25zdCBmaWx0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZmlsdGVyLmNsYXNzTGlzdC5hZGQoJ2ZpbHRlcicpO1xuICByZXR1cm4gZmlsdGVyO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRJbmJveEljb24oKSB7XG4gIGNvbnN0IGluYm94SWNvbiA9IG5ldyBJbWFnZSgpO1xuICBpbmJveEljb24uc3JjID0gSW5ib3hJY29uO1xuICBpbmJveEljb24uY2xhc3NMaXN0LmFkZCgnaWNvbnMnKTtcbiAgcmV0dXJuIGluYm94SWNvbjtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50VG9kYXlJY29uKCkge1xuICBjb25zdCB0b2RheUljb24gPSBuZXcgSW1hZ2UoKTtcbiAgdG9kYXlJY29uLnNyYyA9IENhbGVuZGFyRGF5SWNvbjtcbiAgdG9kYXlJY29uLmNsYXNzTGlzdC5hZGQoJ2ljb25zJyk7XG4gIHJldHVybiB0b2RheUljb247XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFdlZWtJY29uKCkge1xuICBjb25zdCB3ZWVrSWNvbiA9IG5ldyBJbWFnZSgpO1xuICB3ZWVrSWNvbi5zcmMgPSBDYWxlbmRhcldlZWtJY29uO1xuICB3ZWVrSWNvbi5jbGFzc0xpc3QuYWRkKCdpY29ucycpO1xuICByZXR1cm4gd2Vla0ljb247XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudEZpbHRlck5hbWUobmFtZSkge1xuICBjb25zdCBmaWx0ZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBmaWx0ZXJOYW1lLnRleHRDb250ZW50ID0gbmFtZTtcbiAgcmV0dXJuIGZpbHRlck5hbWU7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFNlY3Rpb25IZWFkZXIoaGVhZGluZykge1xuICBjb25zdCBzZWN0aW9uSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgc2VjdGlvbkhlYWRlci50ZXh0Q29udGVudCA9IGhlYWRpbmc7XG4gIHNlY3Rpb25IZWFkZXIuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbi1oZWFkZXInKTtcbiAgcmV0dXJuIHNlY3Rpb25IZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFByb2plY3RzSGVhZGluZygpIHtcbiAgY29uc3QgcHJvamVjdHNIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgcHJvamVjdHNIZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzLWhlYWRpbmctdGl0bGUnKTtcbiAgcHJvamVjdHNIZWFkaW5nLnRleHRDb250ZW50ID0gJ1Byb2plY3RzJztcbiAgcmV0dXJuIHByb2plY3RzSGVhZGluZztcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50UHJvamVjdHMoKSB7XG4gIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByb2plY3RzLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzJyk7XG4gIHJldHVybiBwcm9qZWN0cztcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50UHJvamVjdCgpIHtcbiAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgcmV0dXJuIHByb2plY3Q7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFByb2plY3RJY29uKCkge1xuICBjb25zdCBwcm9qZWN0SWNvbiA9IG5ldyBJbWFnZSgpO1xuICBwcm9qZWN0SWNvbi5zcmMgPSBGb2xkZXJJY29uO1xuICBwcm9qZWN0SWNvbi5jbGFzc0xpc3QuYWRkKCdpY29ucycpO1xuICByZXR1cm4gcHJvamVjdEljb247XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFByb2plY3RzSGVhZGVyKCkge1xuICBjb25zdCBwcm9qZWN0c0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgcHJvamVjdHNIZWFkZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMtaGVhZGVyJyk7XG4gIHJldHVybiBwcm9qZWN0c0hlYWRlcjtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50UHJvamVjdElucHV0Rm9ybSgpIHtcbiAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGNvbnN0IHByb2plY3RJbnB1dEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY29uc3QgcHJvamVjdFN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHByb2plY3RGb3JtLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZm9ybScpO1xuICBwcm9qZWN0Rm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3QtZm9ybScpO1xuICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0SW5wdXRGaWVsZCk7XG4gIHByb2plY3RJbnB1dEZpZWxkLnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcm9qZWN0LW5hbWUnKTtcbiAgcHJvamVjdElucHV0RmllbGQuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0LW5hbWUnKTtcbiAgcHJvamVjdElucHV0RmllbGQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgcHJvamVjdElucHV0RmllbGQuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1mb3JtLWZpZWxkJyk7XG4gIHByb2plY3RJbnB1dEZpZWxkLnNldEF0dHJpYnV0ZSgnYXV0b2ZvY3VzJywgJ2F1dG9mb2N1cycpO1xuICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0U3VibWl0KTtcbiAgcHJvamVjdFN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gIHByb2plY3RTdWJtaXQuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0LXN1Ym1pdCcpO1xuICByZXR1cm4gcHJvamVjdEZvcm07XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFByb2plY3RUaXRsZSh0aXRsZSkge1xuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICByZXR1cm4gcHJvamVjdFRpdGxlO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRBZGRQcm9qZWN0SWNvbigpIHtcbiAgY29uc3QgYWRkUHJvamVjdEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgYWRkUHJvamVjdEljb24uc3JjID0gUGx1c0ljb247XG4gIGFkZFByb2plY3RJY29uLmNsYXNzTGlzdC5hZGQoJ2ljb25zJywgJ3BsdXMtaWNvbicpO1xuICByZXR1cm4gYWRkUHJvamVjdEljb247XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFRhc2tzQ2FyZCgpIHtcbiAgY29uc3QgdGFza3NDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRhc2tzQ2FyZC5jbGFzc0xpc3QuYWRkKCd0YXNrcy1jYXJkJyk7XG4gIHJldHVybiB0YXNrc0NhcmQ7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFRhc2tzKCkge1xuICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0YXNrcy5jbGFzc0xpc3QuYWRkKCd0YXNrcycpO1xuICByZXR1cm4gdGFza3M7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFRhc2soKSB7XG4gIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGFzay5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG4gIHJldHVybiB0YXNrO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRDaGVja2JveCgpIHtcbiAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gnKTtcbiAgcmV0dXJuIGNoZWNrYm94O1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRDaGVja2JveEZpZWxkKCkge1xuICBjb25zdCBjaGVja2JveEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY2hlY2tib3hGaWVsZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgY2hlY2tib3hGaWVsZC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveC1maWVsZCcpO1xuICByZXR1cm4gY2hlY2tib3hGaWVsZDtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50Q2hlY2tib3hMYWJlbChwcm9qZWN0VGl0bGUpIHtcbiAgY29uc3QgY2hlY2tib3hMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGNoZWNrYm94TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnY2hlY2tib3gnKTtcbiAgY2hlY2tib3hMYWJlbC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveC1sYWJlbCcpO1xuICBjaGVja2JveExhYmVsLnRleHRDb250ZW50ID0gcHJvamVjdFRpdGxlO1xuICByZXR1cm4gY2hlY2tib3hMYWJlbDtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50VGFza0luZm8oKSB7XG4gIGNvbnN0IHRhc2tJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRhc2tJbmZvLmNsYXNzTGlzdC5hZGQoJ3Rhc2staW5mbycpO1xuICByZXR1cm4gdGFza0luZm87XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudEVkaXRUb29scygpIHtcbiAgY29uc3QgZWRpdFRvb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGVkaXRUb29scy5jbGFzc0xpc3QuYWRkKCdlZGl0LXRvb2xzJyk7XG4gIHJldHVybiBlZGl0VG9vbHM7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudEVkaXRJY29uKCkge1xuICBjb25zdCBlZGl0SWNvbiA9IG5ldyBJbWFnZSgpO1xuICBlZGl0SWNvbi5zcmMgPSBFZGl0SWNvbjtcbiAgZWRpdEljb24uY2xhc3NMaXN0LmFkZCgnaWNvbnMnKTtcbiAgcmV0dXJuIGVkaXRJY29uO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRUcmFzaEljb24oKSB7XG4gIGNvbnN0IHRyYXNoSWNvbiA9IG5ldyBJbWFnZSgpO1xuICB0cmFzaEljb24uc3JjID0gVHJhc2hJY29uO1xuICB0cmFzaEljb24uY2xhc3NMaXN0LmFkZCgnaWNvbnMnKTtcbiAgcmV0dXJuIHRyYXNoSWNvbjtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50QWRkVGFza0J1dHRvbigpIHtcbiAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBhZGRUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZC10YXNrLWJ1dHRvbicpO1xuICBhZGRUYXNrQnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJztcbiAgcmV0dXJuIGFkZFRhc2tCdXR0b247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0KCkge1xuICBjb25zdCBjb250YWluZXIgPSBjb21wb25lbnRDb250YWluZXIoKTtcbiAgY29uc3QgaGVhZGVyID0gY29tcG9uZW50SGVhZGVyKCk7XG4gIGNvbnN0IGNvbnRlbnQgPSBjb21wb25lbnRDb250ZW50KCk7XG4gIGNvbnN0IHNpZGViYXIgPSBjb21wb25lbnRTaWRlYmFyKCk7XG4gIGNvbnN0IGZpbHRlcnMgPSBjb21wb25lbnRGaWx0ZXJzKCk7XG4gIGNvbnN0IGZpbHRlckFsbCA9IGNvbXBvbmVudEZpbHRlcigpO1xuICBjb25zdCBmaWx0ZXJUb2RheSA9IGNvbXBvbmVudEZpbHRlcigpO1xuICBjb25zdCBmaWx0ZXJXZWVrID0gY29tcG9uZW50RmlsdGVyKCk7XG4gIGNvbnN0IHByb2plY3RzSGVhZGVyID0gY29tcG9uZW50UHJvamVjdHNIZWFkZXIoKTtcbiAgY29uc3QgcHJvamVjdHMgPSBjb21wb25lbnRQcm9qZWN0cygpO1xuICBjb25zdCBwcm9qZWN0ID0gY29tcG9uZW50UHJvamVjdCgpO1xuICBjb25zdCB0YXNrc0NhcmQgPSBjb21wb25lbnRUYXNrc0NhcmQoKTtcbiAgY29uc3QgdGFza3MgPSBjb21wb25lbnRUYXNrcygpO1xuICBjb25zdCB0YXNrID0gY29tcG9uZW50VGFzaygpO1xuICBjb25zdCB0YXNrSW5mbyA9IGNvbXBvbmVudFRhc2tJbmZvKCk7XG4gIGNvbnN0IGVkaXRUb29scyA9IGNvbXBvbmVudEVkaXRUb29scygpO1xuICBjb25zdCBjaGVja2JveCA9IGNvbXBvbmVudENoZWNrYm94KCk7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGNvbXBvbmVudFRpdGxlKCkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc2lkZWJhcik7XG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQoZmlsdGVycyk7XG4gIGZpbHRlcnMuYXBwZW5kQ2hpbGQoY29tcG9uZW50U2VjdGlvbkhlYWRlcignRmlsdGVycycpKTtcbiAgZmlsdGVycy5hcHBlbmRDaGlsZChmaWx0ZXJBbGwpO1xuICBmaWx0ZXJBbGwuYXBwZW5kQ2hpbGQoY29tcG9uZW50SW5ib3hJY29uKCkpO1xuICBmaWx0ZXJBbGwuYXBwZW5kQ2hpbGQoY29tcG9uZW50RmlsdGVyTmFtZSgnQWxsJykpO1xuICBmaWx0ZXJzLmFwcGVuZENoaWxkKGZpbHRlclRvZGF5KTtcbiAgZmlsdGVyVG9kYXkuYXBwZW5kQ2hpbGQoY29tcG9uZW50VG9kYXlJY29uKCkpO1xuICBmaWx0ZXJUb2RheS5hcHBlbmRDaGlsZChjb21wb25lbnRGaWx0ZXJOYW1lKCdUb2RheScpKTtcbiAgZmlsdGVycy5hcHBlbmRDaGlsZChmaWx0ZXJXZWVrKTtcbiAgZmlsdGVyV2Vlay5hcHBlbmRDaGlsZChjb21wb25lbnRXZWVrSWNvbigpKTtcbiAgZmlsdGVyV2Vlay5hcHBlbmRDaGlsZChjb21wb25lbnRGaWx0ZXJOYW1lKCdXZWVrJykpO1xuICBzaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3RzKTtcbiAgcHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdHNIZWFkZXIpO1xuICBwcm9qZWN0c0hlYWRlci5hcHBlbmRDaGlsZChjb21wb25lbnRQcm9qZWN0c0hlYWRpbmcoKSk7XG4gIHByb2plY3RzSGVhZGVyLmFwcGVuZENoaWxkKGNvbXBvbmVudEFkZFByb2plY3RJY29uKCkpO1xuICBwcm9qZWN0cy5hcHBlbmRDaGlsZChjb21wb25lbnRQcm9qZWN0SW5wdXRGb3JtKCkpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1zdWJtaXQnKS5oaWRkZW4gPSB0cnVlO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1mb3JtJykuaGlkZGVuID0gdHJ1ZTtcbiAgcHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG4gIHByb2plY3QuYXBwZW5kQ2hpbGQoY29tcG9uZW50UHJvamVjdEljb24oKSk7XG4gIHByb2plY3QuYXBwZW5kQ2hpbGQoY29tcG9uZW50UHJvamVjdFRpdGxlKCdQcmltYXJ5JykpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHRhc2tzQ2FyZCk7XG4gIHRhc2tzQ2FyZC5hcHBlbmRDaGlsZCh0YXNrcyk7XG4gIHRhc2tzLmFwcGVuZENoaWxkKGNvbXBvbmVudFNlY3Rpb25IZWFkZXIoJ1Rhc2tzJykpO1xuICB0YXNrcy5hcHBlbmRDaGlsZCh0YXNrKTtcbiAgdGFzay5hcHBlbmRDaGlsZCh0YXNrSW5mbyk7XG4gIHRhc2tJbmZvLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgY2hlY2tib3guYXBwZW5kQ2hpbGQoY29tcG9uZW50Q2hlY2tib3hGaWVsZCgpKTtcbiAgY2hlY2tib3guYXBwZW5kQ2hpbGQoY29tcG9uZW50Q2hlY2tib3hMYWJlbCgnRmluaXNoIHByb2plY3QnKSk7XG4gIHRhc2suYXBwZW5kQ2hpbGQoZWRpdFRvb2xzKTtcbiAgZWRpdFRvb2xzLmFwcGVuZENoaWxkKGNvbXBvbmVudEVkaXRJY29uKCkpO1xuICBlZGl0VG9vbHMuYXBwZW5kQ2hpbGQoY29tcG9uZW50VHJhc2hJY29uKCkpO1xuICB0YXNrc0NhcmQuYXBwZW5kQ2hpbGQoY29tcG9uZW50QWRkVGFza0J1dHRvbigpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2plY3RGb3JtKCkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZm9ybScpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJvamVjdFRvRE9NKG5ld1Byb2plY3QpIHtcbiAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcbiAgY29uc3QgcHJvamVjdCA9IGNvbXBvbmVudFByb2plY3QoKTtcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gY29tcG9uZW50UHJvamVjdFRpdGxlKG5ld1Byb2plY3QpO1xuICBwcm9qZWN0cy5pbnNlcnRCZWZvcmUocHJvamVjdCwgcHJvamVjdHMuY2hpbGRyZW5bMl0pO1xuICBwcm9qZWN0LmFwcGVuZENoaWxkKGNvbXBvbmVudFByb2plY3RJY29uKCkpO1xuICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG5cbiAgZ2V0UHJvamVjdEZvcm0oKS5yZXNldCgpO1xuXG4gIHJldHVybiBwcm9qZWN0cztcbn1cblxuLy8gSWYgcHJvamVjdCBmb3JtIGlzIGhpZGRlbiBpcyB0cnVlLCB0aGVuIHRoYXQgbWVhbnMgcHJvamVjdCBmb3JtXG4vLyBpcyBjb2xsYXBzZWQuIFRoaXMgZnVuY3Rpb24gd291bGQgdGhlbiByZXR1cm4gZmFsc2UsXG4vLyBiZWNhdXNlIGl0IGlzIGZhbHNlIHRoYXQgdGhlIHByb2plY3QgZm9ybSBpcyBleHBhbmRlZC5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0Rm9ybUV4cGFuZGVkKCkge1xuICByZXR1cm4gIWdldFByb2plY3RGb3JtKCkuaGlkZGVuO1xufVxuXG4vLyBFeHBhbmQgb3IgY29sbGFwc2UgdGhlIHByb2plY3QgZm9ybSBiYXNlZCBvbiBwYXNzZWQgaW4gdHJ1ZS9mYWxzZSB2YWx1ZVxuZXhwb3J0IGZ1bmN0aW9uIGV4cGFuZENyZWF0ZVByb2plY3RGb3JtKGV4cGFuZCkge1xuICBnZXRQcm9qZWN0Rm9ybSgpLmhpZGRlbiA9ICFleHBhbmQ7XG59XG5cbi8vIFJvdGF0ZSBhZGQgcHJvamVjdCBpY29uIHdoZW4gY2FsbGVkXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlQWRkUHJvamVjdEljb24oKSB7XG4gIGNvbnN0IGFkZFByb2plY3RJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsdXMtaWNvbicpO1xuICBpZiAoIWFkZFByb2plY3RJY29uLmNsYXNzTGlzdC5jb250YWlucygncm90YXRlJykpIHtcbiAgICBhZGRQcm9qZWN0SWNvbi5jbGFzc0xpc3QuYWRkKCdyb3RhdGUnKTtcbiAgfSBlbHNlIGlmIChhZGRQcm9qZWN0SWNvbi5jbGFzc0xpc3QuY29udGFpbnMoJ3JvdGF0ZScpKSB7XG4gICAgYWRkUHJvamVjdEljb24uY2xhc3NMaXN0LnJlbW92ZSgncm90YXRlJyk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIGluaXQsXG4gIGFkZFByb2plY3RUb0RPTSxcbiAgZ2V0UHJvamVjdEZvcm0sXG4gIHByb2plY3RGb3JtRXhwYW5kZWQsXG4gIGV4cGFuZENyZWF0ZVByb2plY3RGb3JtLFxuICByb3RhdGVBZGRQcm9qZWN0SWNvbixcbn0gZnJvbSAnLi9kb20tbWFuaXB1bGF0aW9uJztcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzayc7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0IHsgZ2V0UHJvamVjdHMsIGFkZFByb2plY3QgfSBmcm9tICcuL3NpdGUtc3RvcmFnZSc7XG5cbmluaXQoKTtcblxuY29uc3QgcHJpbWFyeVRhc2tzID0gW1xuICBuZXcgVGFzayhcbiAgICAnUmVzcG9uZCB0byBlbWFpbHMnLFxuICAgICdDYXRjaCB1cCBvbiBwZXJzb25hbCBhbmQgd29yayBlbWFpbHMnLFxuICAgICczLzQvMjAyMycsXG4gICAgJ2xvdydcbiAgKSxcbl07XG5cbmNvbnN0IHByaW1hcnlQcm9qZWN0ID0gbmV3IFByb2plY3QoJ1ByaW1hcnkgUHJvamVjdCcsIHByaW1hcnlUYXNrcyk7XG5jb25zdCBzZWNvbmRhcnlQcm9qZWN0ID0gbmV3IFByb2plY3QoJ1NlY29uZGFyeSBQcm9qZWN0Jyk7XG5cbmFkZFByb2plY3QocHJpbWFyeVByb2plY3QpO1xuYWRkUHJvamVjdChzZWNvbmRhcnlQcm9qZWN0KTtcblxuY29uc3QgdGFza1R3byA9IG5ldyBUYXNrKFxuICAnTWVhbCBwbGFubmluZycsXG4gICdQbGFuIG1lYWxzIGZvciBuZXh0IHdlZWsnLFxuICAnMy80LzIwMjMnLFxuICAzXG4pO1xuXG5wcmltYXJ5UHJvamVjdC5hZGRUYXNrKHRhc2tUd28pO1xuY29uc29sZS5sb2coZ2V0UHJvamVjdHMoKSk7XG5cbi8vIExpc3RlbiB0byBrZXlwcmVzcyBvbiB0aGUgcHJvamVjdCBmb3JtXG5jb25zdCBwcm9qZWN0Rm9ybSA9IGdldFByb2plY3RGb3JtKCk7XG5wcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKSA9PiB7XG4gIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8vIENvbGxhcHNlIHByb2plY3QgaW5wdXQgZm9ybVxuICAgIGV4cGFuZENyZWF0ZVByb2plY3RGb3JtKGZhbHNlKTtcblxuICAgIC8vIEdldCBwcm9qZWN0IG5hbWUgZnJvbSBmb3JtIHZhbHVlXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1uYW1lJykudmFsdWU7XG5cbiAgICAvLyBDcmVhdGUgbmV3IHByb2plY3Qgd2l0aCBwcm9qZWN0IG5hbWVcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdE5hbWUpO1xuXG4gICAgLy8gQWRkIHByb2plY3QgdG8gc2l0ZSBzdG9yYWdlXG4gICAgYWRkUHJvamVjdChuZXdQcm9qZWN0KTtcblxuICAgIC8vIEFkZCBwcm9qZWN0IG5hbWUgdG8gc2lkZWJhclxuICAgIGFkZFByb2plY3RUb0RPTShuZXdQcm9qZWN0LmdldFRpdGxlKCkpO1xuICB9XG59KTtcblxuY29uc3Qgc2hvd1Byb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsdXMtaWNvbicpO1xuc2hvd1Byb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAvLyBFeHBhbmQgb3IgY29sbGFwc2UgcHJvamVjdCBmb3JtIGJhc2VkIG9uIGN1cnJlbnQgc3RhdGUgd2hlbiBwcmVzc2luZyB0aGUgcGx1cyBpY29uIGltYWdlXG4gIGV4cGFuZENyZWF0ZVByb2plY3RGb3JtKCFwcm9qZWN0Rm9ybUV4cGFuZGVkKCkpO1xuXG4gIC8vIFJvdGF0ZSBiZXR3ZWVuICsgYW5kIFggYWRkIHByb2plY3QgaWNvbiB3aGVuIGNsaWNrZWRcbiAgcm90YXRlQWRkUHJvamVjdEljb24oKTtcbn0pO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCB0YXNrcyA9IFtdKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMudGFza3MgPSB0YXNrcztcbiAgfVxuXG4gIGFkZFRhc2sodGFzaykge1xuICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTtcbiAgfVxuXG4gIGdldFRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICB9XG59XG4iLCIvLyBjcmVhdGUgbGlzdCBvZiBwcm9qZWN0c1xuLy8gbWV0aG9kcyB0byBhZGQgcHJvamVjdHMgYW5kIGdldCBwcm9qZWN0c1xuXG5jb25zdCBwcm9qZWN0cyA9IFtdO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvamVjdHMoKSB7XG4gIHJldHVybiBwcm9qZWN0cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3QocHJvamVjdCkge1xuICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=