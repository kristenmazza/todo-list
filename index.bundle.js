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
___CSS_LOADER_EXPORT___.push([module.id, "html,\nbody {\n  margin: 0px;\n  padding: 0px;\n  font-family: 'Roboto', 'Calibri', 'Arial';\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background-color: rgb(34, 40, 49);\n  color: rgb(193, 224, 225);\n}\n\n.icons {\n  height: 20px;\n  width: auto;\n  filter: invert(100%) sepia(76%) saturate(556%) hue-rotate(153deg)\n    brightness(90%) contrast(93%);\n}\n\n.plus-icon {\n  transition: all 0.3s;\n}\n\n.plus-icon:hover {\n  cursor: pointer;\n  height: 23px;\n  width: auto;\n}\n\n.edit-tools > .icons:hover {\n  transform: scale(1.15);\n  transition: all 0.3s;\n  cursor: pointer;\n}\n\n.rotate {\n  transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  -webkit-transform: rotate(45deg);\n  -moz-transform: rotate(45deg);\n}\n\n.container {\n  padding: 0px clamp(1rem, 15%, 50vw);\n}\n\nh1 {\n  font-size: 4rem;\n  background: -webkit-linear-gradient(rgb(193, 224, 221), rgb(0, 173, 181));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\nh2 {\n  color: rgb(119, 197, 201);\n}\n\n.content {\n  display: flex;\n}\n\n.sidebar {\n  flex-basis: clamp(24ch, 15%, 50ch);\n  padding: 1rem 2rem;\n  background-color: rgb(57, 62, 70);\n  border-radius: 20px;\n  min-height: 60vh;\n}\n\n.filter,\n.project {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-wrap: nowrap;\n  padding: 0px 10px;\n  margin: 5px 0px;\n  height: 2.3rem;\n}\n\n.filter:hover,\n.project:hover {\n  cursor: pointer;\n}\n\n.active {\n  background-color: rgba(80, 85, 92, 0.5);\n  border-radius: 8px;\n}\n\n.projects-header {\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 2rem;\n  padding-bottom: 10px;\n  height: 4ch;\n  gap: 1rem;\n}\n\n.projects input[type='text'] {\n  border-radius: 8px;\n  background-color: rgba(80, 85, 92, 0.5);\n  outline: none;\n  border: none;\n  padding: 8px;\n  color: rgb(235, 235, 235);\n  font-size: 1rem;\n  font-family: inherit;\n  margin: 10px 10px 10px 0px;\n  width: calc(100% - 15px);\n}\n\n.project {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.tasks-card {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex: 1 1 300px;\n  margin-left: 30px;\n  padding: 1rem 2rem;\n  background-color: rgb(57, 62, 70);\n  border-radius: 20px;\n}\n\n.task {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: rgba(80, 85, 92, 0.5);\n  padding: 10px;\n  margin-bottom: 1rem;\n  border-radius: 5px;\n  gap: 1rem;\n  border-radius: 8px;\n}\n\n.task-info {\n  display: flex;\n  align-items: center;\n  color: rgb(214, 241, 241);\n}\n\n.edit-tools {\n  display: flex;\n  gap: 1rem;\n}\n\n.checkbox {\n  display: flex;\n  gap: 2rem;\n}\n\ninput[type='checkbox'] {\n  -webkit-appearance: none;\n  appearance: none;\n  margin: 0;\n  font: inherit;\n  color: currentColor;\n  width: 1.15em;\n  height: 1.15em;\n  border: 0.12em solid currentColor;\n  border-radius: 0.15em;\n  transform: translateY(-0.075em);\n  display: grid;\n  place-content: center;\n  cursor: pointer;\n}\n\ninput[type='checkbox']::before {\n  content: '';\n  width: 0.65em;\n  height: 0.65em;\n  transform: scale(0);\n  transition: 120ms transform ease-in-out;\n  box-shadow: inset 1em 1em var(--form-control-color);\n  background-color: CanvasText;\n  transform-origin: bottom left;\n  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\n}\n\ninput[type='checkbox']:checked::before {\n  transform: scale(1);\n  background-color: rgb(193, 224, 225);\n}\n\ninput[type='checkbox']:checked + label {\n  text-decoration: line-through;\n  color: rgb(193, 224, 225);\n}\n\n.add-task-button {\n  width: 100px;\n  border: none;\n  background-image: linear-gradient(\n    to right,\n    rgb(0, 160, 169) 0%,\n    rgb(0, 140, 147) 51%,\n    rgb(83, 96, 96) 100%\n  );\n  margin: 10px;\n  padding: 10px 15px;\n  text-align: center;\n  text-transform: uppercase;\n  transition: 0.5s;\n  background-size: 200% auto;\n  color: rgb(226, 235, 235);\n  font-weight: bold;\n  border-radius: 20px;\n  display: block;\n  align-self: flex-end;\n}\n\n.add-task-button:hover {\n  transform: scale(1.1);\n  color: #fff;\n  text-decoration: none;\n}\n\n.task-form {\n  display: flex;\n  flex-direction: column;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;EAEE,WAAW;EACX,YAAY;EACZ,yCAAyC;EACzC,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,iCAAiC;EACjC,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,WAAW;EACX;iCAC+B;AACjC;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,sBAAsB;EACtB,oBAAoB;EACpB,eAAe;AACjB;;AAEA;EACE,wBAAwB;EACxB,4BAA4B;EAC5B,gCAAgC;EAChC,6BAA6B;AAC/B;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,eAAe;EACf,yEAAyE;EACzE,6BAA6B;EAC7B,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kCAAkC;EAClC,kBAAkB;EAClB,iCAAiC;EACjC,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;;EAEE,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,iBAAiB;EACjB,iBAAiB;EACjB,eAAe;EACf,cAAc;AAChB;;AAEA;;EAEE,eAAe;AACjB;;AAEA;EACE,uCAAuC;EACvC,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,mBAAmB;EACnB,8BAA8B;EAC9B,iBAAiB;EACjB,oBAAoB;EACpB,WAAW;EACX,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,uCAAuC;EACvC,aAAa;EACb,YAAY;EACZ,YAAY;EACZ,yBAAyB;EACzB,eAAe;EACf,oBAAoB;EACpB,0BAA0B;EAC1B,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,iCAAiC;EACjC,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,uCAAuC;EACvC,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,wBAAwB;EACxB,gBAAgB;EAChB,SAAS;EACT,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,cAAc;EACd,iCAAiC;EACjC,qBAAqB;EACrB,+BAA+B;EAC/B,aAAa;EACb,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,cAAc;EACd,mBAAmB;EACnB,uCAAuC;EACvC,mDAAmD;EACnD,4BAA4B;EAC5B,6BAA6B;EAC7B,uEAAuE;AACzE;;AAEA;EACE,mBAAmB;EACnB,oCAAoC;AACtC;;AAEA;EACE,6BAA6B;EAC7B,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ;;;;;GAKC;EACD,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,yBAAyB;EACzB,gBAAgB;EAChB,0BAA0B;EAC1B,yBAAyB;EACzB,iBAAiB;EACjB,mBAAmB;EACnB,cAAc;EACd,oBAAoB;AACtB;;AAEA;EACE,qBAAqB;EACrB,WAAW;EACX,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB","sourcesContent":["html,\nbody {\n  margin: 0px;\n  padding: 0px;\n  font-family: 'Roboto', 'Calibri', 'Arial';\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background-color: rgb(34, 40, 49);\n  color: rgb(193, 224, 225);\n}\n\n.icons {\n  height: 20px;\n  width: auto;\n  filter: invert(100%) sepia(76%) saturate(556%) hue-rotate(153deg)\n    brightness(90%) contrast(93%);\n}\n\n.plus-icon {\n  transition: all 0.3s;\n}\n\n.plus-icon:hover {\n  cursor: pointer;\n  height: 23px;\n  width: auto;\n}\n\n.edit-tools > .icons:hover {\n  transform: scale(1.15);\n  transition: all 0.3s;\n  cursor: pointer;\n}\n\n.rotate {\n  transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  -webkit-transform: rotate(45deg);\n  -moz-transform: rotate(45deg);\n}\n\n.container {\n  padding: 0px clamp(1rem, 15%, 50vw);\n}\n\nh1 {\n  font-size: 4rem;\n  background: -webkit-linear-gradient(rgb(193, 224, 221), rgb(0, 173, 181));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\nh2 {\n  color: rgb(119, 197, 201);\n}\n\n.content {\n  display: flex;\n}\n\n.sidebar {\n  flex-basis: clamp(24ch, 15%, 50ch);\n  padding: 1rem 2rem;\n  background-color: rgb(57, 62, 70);\n  border-radius: 20px;\n  min-height: 60vh;\n}\n\n.filter,\n.project {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-wrap: nowrap;\n  padding: 0px 10px;\n  margin: 5px 0px;\n  height: 2.3rem;\n}\n\n.filter:hover,\n.project:hover {\n  cursor: pointer;\n}\n\n.active {\n  background-color: rgba(80, 85, 92, 0.5);\n  border-radius: 8px;\n}\n\n.projects-header {\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 2rem;\n  padding-bottom: 10px;\n  height: 4ch;\n  gap: 1rem;\n}\n\n.projects input[type='text'] {\n  border-radius: 8px;\n  background-color: rgba(80, 85, 92, 0.5);\n  outline: none;\n  border: none;\n  padding: 8px;\n  color: rgb(235, 235, 235);\n  font-size: 1rem;\n  font-family: inherit;\n  margin: 10px 10px 10px 0px;\n  width: calc(100% - 15px);\n}\n\n.project {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.tasks-card {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex: 1 1 300px;\n  margin-left: 30px;\n  padding: 1rem 2rem;\n  background-color: rgb(57, 62, 70);\n  border-radius: 20px;\n}\n\n.task {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: rgba(80, 85, 92, 0.5);\n  padding: 10px;\n  margin-bottom: 1rem;\n  border-radius: 5px;\n  gap: 1rem;\n  border-radius: 8px;\n}\n\n.task-info {\n  display: flex;\n  align-items: center;\n  color: rgb(214, 241, 241);\n}\n\n.edit-tools {\n  display: flex;\n  gap: 1rem;\n}\n\n.checkbox {\n  display: flex;\n  gap: 2rem;\n}\n\ninput[type='checkbox'] {\n  -webkit-appearance: none;\n  appearance: none;\n  margin: 0;\n  font: inherit;\n  color: currentColor;\n  width: 1.15em;\n  height: 1.15em;\n  border: 0.12em solid currentColor;\n  border-radius: 0.15em;\n  transform: translateY(-0.075em);\n  display: grid;\n  place-content: center;\n  cursor: pointer;\n}\n\ninput[type='checkbox']::before {\n  content: '';\n  width: 0.65em;\n  height: 0.65em;\n  transform: scale(0);\n  transition: 120ms transform ease-in-out;\n  box-shadow: inset 1em 1em var(--form-control-color);\n  background-color: CanvasText;\n  transform-origin: bottom left;\n  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\n}\n\ninput[type='checkbox']:checked::before {\n  transform: scale(1);\n  background-color: rgb(193, 224, 225);\n}\n\ninput[type='checkbox']:checked + label {\n  text-decoration: line-through;\n  color: rgb(193, 224, 225);\n}\n\n.add-task-button {\n  width: 100px;\n  border: none;\n  background-image: linear-gradient(\n    to right,\n    rgb(0, 160, 169) 0%,\n    rgb(0, 140, 147) 51%,\n    rgb(83, 96, 96) 100%\n  );\n  margin: 10px;\n  padding: 10px 15px;\n  text-align: center;\n  text-transform: uppercase;\n  transition: 0.5s;\n  background-size: 200% auto;\n  color: rgb(226, 235, 235);\n  font-weight: bold;\n  border-radius: 20px;\n  display: block;\n  align-self: flex-end;\n}\n\n.add-task-button:hover {\n  transform: scale(1.1);\n  color: #fff;\n  text-decoration: none;\n}\n\n.task-form {\n  display: flex;\n  flex-direction: column;\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   "componentTaskInputForm": () => (/* binding */ componentTaskInputForm),
/* harmony export */   "expandCreateProjectForm": () => (/* binding */ expandCreateProjectForm),
/* harmony export */   "getProjectForm": () => (/* binding */ getProjectForm),
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "projectFormExpanded": () => (/* binding */ projectFormExpanded),
/* harmony export */   "removeActiveClass": () => (/* binding */ removeActiveClass),
/* harmony export */   "rotateAddProjectIcon": () => (/* binding */ rotateAddProjectIcon),
/* harmony export */   "toggleSidebarHighlight": () => (/* binding */ toggleSidebarHighlight)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _images_inbox_solid_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/inbox-solid.svg */ "./src/images/inbox-solid.svg");
/* harmony import */ var _images_calendar_day_solid_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/calendar-day-solid.svg */ "./src/images/calendar-day-solid.svg");
/* harmony import */ var _images_calendar_week_solid_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/calendar-week-solid.svg */ "./src/images/calendar-week-solid.svg");
/* harmony import */ var _images_folder_solid_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/folder-solid.svg */ "./src/images/folder-solid.svg");
/* harmony import */ var _images_pen_to_square_solid_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/pen-to-square-solid.svg */ "./src/images/pen-to-square-solid.svg");
/* harmony import */ var _images_trash_solid_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/trash-solid.svg */ "./src/images/trash-solid.svg");
/* harmony import */ var _images_plus_solid_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/plus-solid.svg */ "./src/images/plus-solid.svg");
/* harmony import */ var _images_star_regular_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/star-regular.svg */ "./src/images/star-regular.svg");










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
  sidebar.setAttribute('id', 'sidebar');
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
  filter.classList.add('sidebar-links');
  return filter;
}

function componentInboxIcon() {
  const inboxIcon = new Image();
  inboxIcon.src = _images_inbox_solid_svg__WEBPACK_IMPORTED_MODULE_1__;
  inboxIcon.classList.add('icons');
  inboxIcon.classList.add('filter-elements');
  return inboxIcon;
}

function componentTodayIcon() {
  const todayIcon = new Image();
  todayIcon.src = _images_calendar_day_solid_svg__WEBPACK_IMPORTED_MODULE_2__;
  todayIcon.classList.add('icons');
  todayIcon.classList.add('filter-elements');
  return todayIcon;
}

function componentWeekIcon() {
  const weekIcon = new Image();
  weekIcon.src = _images_calendar_week_solid_svg__WEBPACK_IMPORTED_MODULE_3__;
  weekIcon.classList.add('icons');
  weekIcon.classList.add('filter-elements');
  return weekIcon;
}

function componentFilterName(name) {
  const filterName = document.createElement('p');
  filterName.textContent = name;
  filterName.classList.add('filter-elements');
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
  project.classList.add('sidebar-links');
  return project;
}

function componentProjectIcon() {
  const projectIcon = new Image();
  projectIcon.src = _images_folder_solid_svg__WEBPACK_IMPORTED_MODULE_4__;
  projectIcon.classList.add('icons');
  projectIcon.classList.add('project-elements');
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
  projectTitle.classList.add('project-elements');
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

function componentTaskInputForm() {
  const taskForm = document.createElement('form');
  const taskNameField = document.createElement('input');
  const taskNameLabel = document.createElement('label');
  const taskDescriptionField = document.createElement('input');
  const taskDescriptionLabel = document.createElement('label');
  const taskSubmit = document.createElement('input');
  const inputGroup = document.createElement('div');
  const taskDueDateField = document.createElement('input');
  const taskDueDateLabel = document.createElement('label');

  taskForm.classList.add('task-form');
  taskForm.setAttribute('id', 'task-form');

  taskForm.appendChild(taskNameLabel);
  taskForm.appendChild(taskNameField);
  taskNameLabel.setAttribute('for', 'task-name');
  taskNameLabel.textContent = 'Add Task';
  taskNameField.setAttribute('name', 'task-name');
  taskNameField.setAttribute('id', 'task-name');
  taskNameField.setAttribute('type', 'text');
  taskNameField.classList.add('task-name-field');

  taskForm.appendChild(taskDescriptionLabel);
  taskForm.appendChild(taskDescriptionField);
  taskDescriptionLabel.setAttribute('for', 'task-description');
  taskDescriptionLabel.textContent = 'Description';
  taskDescriptionField.setAttribute('name', 'task-description');
  taskDescriptionField.setAttribute('id', 'task-description');
  taskDescriptionField.setAttribute('type', 'text');
  taskDescriptionField.classList.add('task-description-field');

  taskForm.appendChild(inputGroup);
  inputGroup.appendChild(taskDueDateLabel);
  inputGroup.appendChild(taskDueDateField);
  taskDueDateLabel.setAttribute('for', 'due-date');
  taskDueDateLabel.textContent = 'Due Date';
  taskDueDateField.setAttribute('name', 'due-date');
  taskDueDateField.setAttribute('id', 'due-date');
  taskDueDateField.setAttribute('type', 'date');
  taskDueDateField.classList.add('due-date-field');

  const starOutline = new Image();
  starOutline.src = _images_star_regular_svg__WEBPACK_IMPORTED_MODULE_8__;
  starOutline.classList.add('icons', 'star-outline');
  inputGroup.appendChild(starOutline);

  taskForm.appendChild(taskSubmit);
  taskSubmit.setAttribute('type', 'submit');
  taskSubmit.setAttribute('id', 'task-submit');
  taskSubmit.setAttribute('value', 'ADD');
  return taskForm;
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

// Remove active class from any previously active element in sidebar
function removeActiveClass() {
  const sidebarLinks = document.querySelectorAll('.sidebar-links');
  sidebarLinks.forEach((sidebarLink) => {
    sidebarLink.classList.remove('active');
  });
}

// Highlight currently selected sidebar option and remove any inactive highlighted options
function toggleSidebarHighlight(element) {
  if (element.classList.contains('sidebar-links')) {
    removeActiveClass();
    element.classList.toggle('active');
  } else if (
    element.classList.contains('filter-elements') ||
    element.classList.contains('project-elements')
  ) {
    removeActiveClass();
    element.parentNode.classList.toggle('active');
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

    // Remove active class (background color) from any active element
    (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.removeActiveClass)();

    // Make current project active
    document.querySelector('.project').classList.add('active');

    // Change x to + for add-project icon
    (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.rotateAddProjectIcon)();
  }
});

const showProjectForm = document.querySelector('.plus-icon');
showProjectForm.addEventListener('click', () => {
  // Expand or collapse project form based on current state when pressing the plus icon image
  (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.expandCreateProjectForm)(!(0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.projectFormExpanded)());

  // Rotate between + and x for add-project icon when clicked
  (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.rotateAddProjectIcon)();
});

const sidebar = document.querySelector('#sidebar');
sidebar.addEventListener('click', (e) => {
  // Highlight currently selected sidebar option and remove any inactive highlighted options
  (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.toggleSidebarHighlight)(e.target);
});

const addTaskButton = document.querySelector('.add-task-button');
const tasksContainer = document.querySelector('.tasks-card');
addTaskButton.addEventListener('click', () => {
  tasksContainer.replaceChildren((0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.componentTaskInputForm)());
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

/***/ "./src/images/star-regular.svg":
/*!*************************************!*\
  !*** ./src/images/star-regular.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f32b8a2d00bb5c09c0c5.svg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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akM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixxREFBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIsbURBQVE7QUFDL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLDREQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLG9EQUFTO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLHFEQUFXO0FBQy9CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hZNEI7QUFDRjtBQUNNO0FBQ3lCOztBQUV6RCx1REFBSTs7QUFFSjtBQUNBLE1BQU0sNkNBQUk7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCLGdEQUFPO0FBQ2xDLDZCQUE2QixnREFBTzs7QUFFcEMseURBQVU7QUFDVix5REFBVTs7QUFFVixvQkFBb0IsNkNBQUk7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVksMERBQVc7O0FBRXZCO0FBQ0Esb0JBQW9CLGlFQUFjO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksMEVBQXVCOztBQUUzQjtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLGdEQUFPOztBQUVsQztBQUNBLElBQUkseURBQVU7O0FBRWQ7QUFDQSxJQUFJLGtFQUFlOztBQUVuQjtBQUNBLElBQUksb0VBQWlCOztBQUVyQjtBQUNBOztBQUVBO0FBQ0EsSUFBSSx1RUFBb0I7QUFDeEI7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMEVBQXVCLEVBQUUsc0VBQW1COztBQUU5QztBQUNBLEVBQUUsdUVBQW9CO0FBQ3RCLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsRUFBRSx5RUFBc0I7QUFDeEIsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMseUVBQXNCO0FBQ3ZELENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzdGYztBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7O0FBRUE7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDWGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLW1hbmlwdWxhdGlvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NpdGUtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsXFxuYm9keSB7XFxuICBtYXJnaW46IDBweDtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgJ0NhbGlicmknLCAnQXJpYWwnO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzNCwgNDAsIDQ5KTtcXG4gIGNvbG9yOiByZ2IoMTkzLCAyMjQsIDIyNSk7XFxufVxcblxcbi5pY29ucyB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogYXV0bztcXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDc2JSkgc2F0dXJhdGUoNTU2JSkgaHVlLXJvdGF0ZSgxNTNkZWcpXFxuICAgIGJyaWdodG5lc3MoOTAlKSBjb250cmFzdCg5MyUpO1xcbn1cXG5cXG4ucGx1cy1pY29uIHtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbn1cXG5cXG4ucGx1cy1pY29uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMjNweDtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4uZWRpdC10b29scyA+IC5pY29uczpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5yb3RhdGUge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgcGFkZGluZzogMHB4IGNsYW1wKDFyZW0sIDE1JSwgNTB2dyk7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHJnYigxOTMsIDIyNCwgMjIxKSwgcmdiKDAsIDE3MywgMTgxKSk7XFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuaDIge1xcbiAgY29sb3I6IHJnYigxMTksIDE5NywgMjAxKTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgZmxleC1iYXNpczogY2xhbXAoMjRjaCwgMTUlLCA1MGNoKTtcXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1NywgNjIsIDcwKTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBtaW4taGVpZ2h0OiA2MHZoO1xcbn1cXG5cXG4uZmlsdGVyLFxcbi5wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gIHBhZGRpbmc6IDBweCAxMHB4O1xcbiAgbWFyZ2luOiA1cHggMHB4O1xcbiAgaGVpZ2h0OiAyLjNyZW07XFxufVxcblxcbi5maWx0ZXI6aG92ZXIsXFxuLnByb2plY3Q6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODAsIDg1LCA5MiwgMC41KTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLnByb2plY3RzLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZy10b3A6IDJyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gIGhlaWdodDogNGNoO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ucHJvamVjdHMgaW5wdXRbdHlwZT0ndGV4dCddIHtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODAsIDg1LCA5MiwgMC41KTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBjb2xvcjogcmdiKDIzNSwgMjM1LCAyMzUpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDBweDtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxNXB4KTtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLnRhc2tzLWNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmbGV4OiAxIDEgMzAwcHg7XFxuICBtYXJnaW4tbGVmdDogMzBweDtcXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1NywgNjIsIDcwKTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbi50YXNrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4MCwgODUsIDkyLCAwLjUpO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBnYXA6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi50YXNrLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogcmdiKDIxNCwgMjQxLCAyNDEpO1xcbn1cXG5cXG4uZWRpdC10b29scyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uY2hlY2tib3gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMnJlbTtcXG59XFxuXFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIGNvbG9yOiBjdXJyZW50Q29sb3I7XFxuICB3aWR0aDogMS4xNWVtO1xcbiAgaGVpZ2h0OiAxLjE1ZW07XFxuICBib3JkZXI6IDAuMTJlbSBzb2xpZCBjdXJyZW50Q29sb3I7XFxuICBib3JkZXItcmFkaXVzOiAwLjE1ZW07XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMDc1ZW0pO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgd2lkdGg6IDAuNjVlbTtcXG4gIGhlaWdodDogMC42NWVtO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIHRyYW5zaXRpb246IDEyMG1zIHRyYW5zZm9ybSBlYXNlLWluLW91dDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDFlbSAxZW0gdmFyKC0tZm9ybS1jb250cm9sLWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IENhbnZhc1RleHQ7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcXG4gIGNsaXAtcGF0aDogcG9seWdvbigxNCUgNDQlLCAwIDY1JSwgNTAlIDEwMCUsIDEwMCUgMTYlLCA4MCUgMCUsIDQzJSA2MiUpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQ6OmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MywgMjI0LCAyMjUpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQgKyBsYWJlbCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gIGNvbG9yOiByZ2IoMTkzLCAyMjQsIDIyNSk7XFxufVxcblxcbi5hZGQtdGFzay1idXR0b24ge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcbiAgICB0byByaWdodCxcXG4gICAgcmdiKDAsIDE2MCwgMTY5KSAwJSxcXG4gICAgcmdiKDAsIDE0MCwgMTQ3KSA1MSUsXFxuICAgIHJnYig4MywgOTYsIDk2KSAxMDAlXFxuICApO1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgYXV0bztcXG4gIGNvbG9yOiByZ2IoMjI2LCAyMzUsIDIzNSk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4uYWRkLXRhc2stYnV0dG9uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4udGFzay1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztFQUVFLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUNBQXlDO0VBQ3pDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGlDQUFpQztFQUNqQyx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYO2lDQUMrQjtBQUNqQzs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1QixnQ0FBZ0M7RUFDaEMsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHlFQUF5RTtFQUN6RSw2QkFBNkI7RUFDN0Isb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGtCQUFrQjtFQUNsQixpQ0FBaUM7RUFDakMsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBOztFQUVFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix1Q0FBdUM7RUFDdkMsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsMEJBQTBCO0VBQzFCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUNBQWlDO0VBQ2pDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLHVDQUF1QztFQUN2QyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGNBQWM7RUFDZCxpQ0FBaUM7RUFDakMscUJBQXFCO0VBQ3JCLCtCQUErQjtFQUMvQixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsdUNBQXVDO0VBQ3ZDLG1EQUFtRDtFQUNuRCw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLHVFQUF1RTtBQUN6RTs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWjs7Ozs7R0FLQztFQUNELFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsMEJBQTBCO0VBQzFCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCxcXG5ib2R5IHtcXG4gIG1hcmdpbjogMHB4O1xcbiAgcGFkZGluZzogMHB4O1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCAnQ2FsaWJyaScsICdBcmlhbCc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM0LCA0MCwgNDkpO1xcbiAgY29sb3I6IHJnYigxOTMsIDIyNCwgMjI1KTtcXG59XFxuXFxuLmljb25zIHtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoNzYlKSBzYXR1cmF0ZSg1NTYlKSBodWUtcm90YXRlKDE1M2RlZylcXG4gICAgYnJpZ2h0bmVzcyg5MCUpIGNvbnRyYXN0KDkzJSk7XFxufVxcblxcbi5wbHVzLWljb24ge1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcblxcbi5wbHVzLWljb246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAyM3B4O1xcbiAgd2lkdGg6IGF1dG87XFxufVxcblxcbi5lZGl0LXRvb2xzID4gLmljb25zOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnJvdGF0ZSB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAwcHggY2xhbXAoMXJlbSwgMTUlLCA1MHZ3KTtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQocmdiKDE5MywgMjI0LCAyMjEpLCByZ2IoMCwgMTczLCAxODEpKTtcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG5oMiB7XFxuICBjb2xvcjogcmdiKDExOSwgMTk3LCAyMDEpO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBmbGV4LWJhc2lzOiBjbGFtcCgyNGNoLCAxNSUsIDUwY2gpO1xcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU3LCA2MiwgNzApO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIG1pbi1oZWlnaHQ6IDYwdmg7XFxufVxcblxcbi5maWx0ZXIsXFxuLnByb2plY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgcGFkZGluZzogMHB4IDEwcHg7XFxuICBtYXJnaW46IDVweCAwcHg7XFxuICBoZWlnaHQ6IDIuM3JlbTtcXG59XFxuXFxuLmZpbHRlcjpob3ZlcixcXG4ucHJvamVjdDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4MCwgODUsIDkyLCAwLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4ucHJvamVjdHMtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nLXRvcDogMnJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgaGVpZ2h0OiA0Y2g7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5wcm9qZWN0cyBpbnB1dFt0eXBlPSd0ZXh0J10ge1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4MCwgODUsIDkyLCAwLjUpO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGNvbG9yOiByZ2IoMjM1LCAyMzUsIDIzNSk7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMHB4O1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDE1cHgpO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4udGFza3MtY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZsZXg6IDEgMSAzMDBweDtcXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU3LCA2MiwgNzApO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuLnRhc2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgwLCA4NSwgOTIsIDAuNSk7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGdhcDogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLnRhc2staW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiByZ2IoMjE0LCAyNDEsIDI0MSk7XFxufVxcblxcbi5lZGl0LXRvb2xzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5jaGVja2JveCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG5pbnB1dFt0eXBlPSdjaGVja2JveCddIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBmb250OiBpbmhlcml0O1xcbiAgY29sb3I6IGN1cnJlbnRDb2xvcjtcXG4gIHdpZHRoOiAxLjE1ZW07XFxuICBoZWlnaHQ6IDEuMTVlbTtcXG4gIGJvcmRlcjogMC4xMmVtIHNvbGlkIGN1cnJlbnRDb2xvcjtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMTVlbTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4wNzVlbSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5pbnB1dFt0eXBlPSdjaGVja2JveCddOjpiZWZvcmUge1xcbiAgY29udGVudDogJyc7XFxuICB3aWR0aDogMC42NWVtO1xcbiAgaGVpZ2h0OiAwLjY1ZW07XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgdHJhbnNpdGlvbjogMTIwbXMgdHJhbnNmb3JtIGVhc2UtaW4tb3V0O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMWVtIDFlbSB2YXIoLS1mb3JtLWNvbnRyb2wtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogQ2FudmFzVGV4dDtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDE0JSA0NCUsIDAgNjUlLCA1MCUgMTAwJSwgMTAwJSAxNiUsIDgwJSAwJSwgNDMlIDYyJSk7XFxufVxcblxcbmlucHV0W3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZDo6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkzLCAyMjQsIDIyNSk7XFxufVxcblxcbmlucHV0W3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZCArIGxhYmVsIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgY29sb3I6IHJnYigxOTMsIDIyNCwgMjI1KTtcXG59XFxuXFxuLmFkZC10YXNrLWJ1dHRvbiB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIHRvIHJpZ2h0LFxcbiAgICByZ2IoMCwgMTYwLCAxNjkpIDAlLFxcbiAgICByZ2IoMCwgMTQwLCAxNDcpIDUxJSxcXG4gICAgcmdiKDgzLCA5NiwgOTYpIDEwMCVcXG4gICk7XFxuICBtYXJnaW46IDEwcHg7XFxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJSBhdXRvO1xcbiAgY29sb3I6IHJnYigyMjYsIDIzNSwgMjM1KTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbi5hZGQtdGFzay1idXR0b246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi50YXNrLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBJbmJveEljb24gZnJvbSAnLi9pbWFnZXMvaW5ib3gtc29saWQuc3ZnJztcbmltcG9ydCBDYWxlbmRhckRheUljb24gZnJvbSAnLi9pbWFnZXMvY2FsZW5kYXItZGF5LXNvbGlkLnN2Zyc7XG5pbXBvcnQgQ2FsZW5kYXJXZWVrSWNvbiBmcm9tICcuL2ltYWdlcy9jYWxlbmRhci13ZWVrLXNvbGlkLnN2Zyc7XG5pbXBvcnQgRm9sZGVySWNvbiBmcm9tICcuL2ltYWdlcy9mb2xkZXItc29saWQuc3ZnJztcbmltcG9ydCBFZGl0SWNvbiBmcm9tICcuL2ltYWdlcy9wZW4tdG8tc3F1YXJlLXNvbGlkLnN2Zyc7XG5pbXBvcnQgVHJhc2hJY29uIGZyb20gJy4vaW1hZ2VzL3RyYXNoLXNvbGlkLnN2Zyc7XG5pbXBvcnQgUGx1c0ljb24gZnJvbSAnLi9pbWFnZXMvcGx1cy1zb2xpZC5zdmcnO1xuaW1wb3J0IFN0YXJSZWd1bGFyIGZyb20gJy4vaW1hZ2VzL3N0YXItcmVndWxhci5zdmcnO1xuXG5mdW5jdGlvbiBjb21wb25lbnRDb250YWluZXIoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudEhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50VGl0bGUoKSB7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSAndG9kbyBsaXN0JztcbiAgcmV0dXJuIHRpdGxlO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRDb250ZW50KCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpO1xuICByZXR1cm4gY29udGVudDtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50U2lkZWJhcigpIHtcbiAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXInKTtcbiAgc2lkZWJhci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NpZGViYXInKTtcbiAgcmV0dXJuIHNpZGViYXI7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudEZpbHRlcnMoKSB7XG4gIGNvbnN0IGZpbHRlcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZmlsdGVycy5jbGFzc0xpc3QuYWRkKCdmaWx0ZXJzJyk7XG4gIHJldHVybiBmaWx0ZXJzO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRGaWx0ZXIoKSB7XG4gIGNvbnN0IGZpbHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmaWx0ZXIuY2xhc3NMaXN0LmFkZCgnZmlsdGVyJyk7XG4gIGZpbHRlci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLWxpbmtzJyk7XG4gIHJldHVybiBmaWx0ZXI7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudEluYm94SWNvbigpIHtcbiAgY29uc3QgaW5ib3hJY29uID0gbmV3IEltYWdlKCk7XG4gIGluYm94SWNvbi5zcmMgPSBJbmJveEljb247XG4gIGluYm94SWNvbi5jbGFzc0xpc3QuYWRkKCdpY29ucycpO1xuICBpbmJveEljb24uY2xhc3NMaXN0LmFkZCgnZmlsdGVyLWVsZW1lbnRzJyk7XG4gIHJldHVybiBpbmJveEljb247XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFRvZGF5SWNvbigpIHtcbiAgY29uc3QgdG9kYXlJY29uID0gbmV3IEltYWdlKCk7XG4gIHRvZGF5SWNvbi5zcmMgPSBDYWxlbmRhckRheUljb247XG4gIHRvZGF5SWNvbi5jbGFzc0xpc3QuYWRkKCdpY29ucycpO1xuICB0b2RheUljb24uY2xhc3NMaXN0LmFkZCgnZmlsdGVyLWVsZW1lbnRzJyk7XG4gIHJldHVybiB0b2RheUljb247XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFdlZWtJY29uKCkge1xuICBjb25zdCB3ZWVrSWNvbiA9IG5ldyBJbWFnZSgpO1xuICB3ZWVrSWNvbi5zcmMgPSBDYWxlbmRhcldlZWtJY29uO1xuICB3ZWVrSWNvbi5jbGFzc0xpc3QuYWRkKCdpY29ucycpO1xuICB3ZWVrSWNvbi5jbGFzc0xpc3QuYWRkKCdmaWx0ZXItZWxlbWVudHMnKTtcbiAgcmV0dXJuIHdlZWtJY29uO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRGaWx0ZXJOYW1lKG5hbWUpIHtcbiAgY29uc3QgZmlsdGVyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZmlsdGVyTmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gIGZpbHRlck5hbWUuY2xhc3NMaXN0LmFkZCgnZmlsdGVyLWVsZW1lbnRzJyk7XG4gIHJldHVybiBmaWx0ZXJOYW1lO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRTZWN0aW9uSGVhZGVyKGhlYWRpbmcpIHtcbiAgY29uc3Qgc2VjdGlvbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIHNlY3Rpb25IZWFkZXIudGV4dENvbnRlbnQgPSBoZWFkaW5nO1xuICBzZWN0aW9uSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24taGVhZGVyJyk7XG4gIHJldHVybiBzZWN0aW9uSGVhZGVyO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRQcm9qZWN0c0hlYWRpbmcoKSB7XG4gIGNvbnN0IHByb2plY3RzSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIHByb2plY3RzSGVhZGluZy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cy1oZWFkaW5nLXRpdGxlJyk7XG4gIHByb2plY3RzSGVhZGluZy50ZXh0Q29udGVudCA9ICdQcm9qZWN0cyc7XG4gIHJldHVybiBwcm9qZWN0c0hlYWRpbmc7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFByb2plY3RzKCkge1xuICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwcm9qZWN0cy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cycpO1xuICByZXR1cm4gcHJvamVjdHM7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFByb2plY3QoKSB7XG4gIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG4gIHByb2plY3QuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1saW5rcycpO1xuICByZXR1cm4gcHJvamVjdDtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50UHJvamVjdEljb24oKSB7XG4gIGNvbnN0IHByb2plY3RJY29uID0gbmV3IEltYWdlKCk7XG4gIHByb2plY3RJY29uLnNyYyA9IEZvbGRlckljb247XG4gIHByb2plY3RJY29uLmNsYXNzTGlzdC5hZGQoJ2ljb25zJyk7XG4gIHByb2plY3RJY29uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZWxlbWVudHMnKTtcbiAgcmV0dXJuIHByb2plY3RJY29uO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRQcm9qZWN0c0hlYWRlcigpIHtcbiAgY29uc3QgcHJvamVjdHNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHByb2plY3RzSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzLWhlYWRlcicpO1xuICByZXR1cm4gcHJvamVjdHNIZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFByb2plY3RJbnB1dEZvcm0oKSB7XG4gIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBjb25zdCBwcm9qZWN0SW5wdXRGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGNvbnN0IHByb2plY3RTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBwcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWZvcm0nKTtcbiAgcHJvamVjdEZvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0LWZvcm0nKTtcbiAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdElucHV0RmllbGQpO1xuICBwcm9qZWN0SW5wdXRGaWVsZC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJvamVjdC1uYW1lJyk7XG4gIHByb2plY3RJbnB1dEZpZWxkLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdC1uYW1lJyk7XG4gIHByb2plY3RJbnB1dEZpZWxkLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIHByb2plY3RJbnB1dEZpZWxkLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZm9ybS1maWVsZCcpO1xuICBwcm9qZWN0SW5wdXRGaWVsZC5zZXRBdHRyaWJ1dGUoJ2F1dG9mb2N1cycsICdhdXRvZm9jdXMnKTtcbiAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdFN1Ym1pdCk7XG4gIHByb2plY3RTdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICBwcm9qZWN0U3VibWl0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdC1zdWJtaXQnKTtcbiAgcmV0dXJuIHByb2plY3RGb3JtO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRQcm9qZWN0VGl0bGUodGl0bGUpIHtcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZWxlbWVudHMnKTtcbiAgcmV0dXJuIHByb2plY3RUaXRsZTtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50QWRkUHJvamVjdEljb24oKSB7XG4gIGNvbnN0IGFkZFByb2plY3RJY29uID0gbmV3IEltYWdlKCk7XG4gIGFkZFByb2plY3RJY29uLnNyYyA9IFBsdXNJY29uO1xuICBhZGRQcm9qZWN0SWNvbi5jbGFzc0xpc3QuYWRkKCdpY29ucycsICdwbHVzLWljb24nKTtcbiAgcmV0dXJuIGFkZFByb2plY3RJY29uO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRUYXNrc0NhcmQoKSB7XG4gIGNvbnN0IHRhc2tzQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0YXNrc0NhcmQuY2xhc3NMaXN0LmFkZCgndGFza3MtY2FyZCcpO1xuICByZXR1cm4gdGFza3NDYXJkO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRUYXNrcygpIHtcbiAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGFza3MuY2xhc3NMaXN0LmFkZCgndGFza3MnKTtcbiAgcmV0dXJuIHRhc2tzO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRUYXNrKCkge1xuICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRhc2suY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICByZXR1cm4gdGFzaztcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50Q2hlY2tib3goKSB7XG4gIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94Jyk7XG4gIHJldHVybiBjaGVja2JveDtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50Q2hlY2tib3hGaWVsZCgpIHtcbiAgY29uc3QgY2hlY2tib3hGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGNoZWNrYm94RmllbGQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gIGNoZWNrYm94RmllbGQuY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gtZmllbGQnKTtcbiAgcmV0dXJuIGNoZWNrYm94RmllbGQ7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudENoZWNrYm94TGFiZWwocHJvamVjdFRpdGxlKSB7XG4gIGNvbnN0IGNoZWNrYm94TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBjaGVja2JveExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2NoZWNrYm94Jyk7XG4gIGNoZWNrYm94TGFiZWwuY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gtbGFiZWwnKTtcbiAgY2hlY2tib3hMYWJlbC50ZXh0Q29udGVudCA9IHByb2plY3RUaXRsZTtcbiAgcmV0dXJuIGNoZWNrYm94TGFiZWw7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFRhc2tJbmZvKCkge1xuICBjb25zdCB0YXNrSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0YXNrSW5mby5jbGFzc0xpc3QuYWRkKCd0YXNrLWluZm8nKTtcbiAgcmV0dXJuIHRhc2tJbmZvO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRFZGl0VG9vbHMoKSB7XG4gIGNvbnN0IGVkaXRUb29scyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBlZGl0VG9vbHMuY2xhc3NMaXN0LmFkZCgnZWRpdC10b29scycpO1xuICByZXR1cm4gZWRpdFRvb2xzO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRFZGl0SWNvbigpIHtcbiAgY29uc3QgZWRpdEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgZWRpdEljb24uc3JjID0gRWRpdEljb247XG4gIGVkaXRJY29uLmNsYXNzTGlzdC5hZGQoJ2ljb25zJyk7XG4gIHJldHVybiBlZGl0SWNvbjtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50VHJhc2hJY29uKCkge1xuICBjb25zdCB0cmFzaEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgdHJhc2hJY29uLnNyYyA9IFRyYXNoSWNvbjtcbiAgdHJhc2hJY29uLmNsYXNzTGlzdC5hZGQoJ2ljb25zJyk7XG4gIHJldHVybiB0cmFzaEljb247XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudEFkZFRhc2tCdXR0b24oKSB7XG4gIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYWRkVGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQtdGFzay1idXR0b24nKTtcbiAgYWRkVGFza0J1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQgVGFzayc7XG4gIHJldHVybiBhZGRUYXNrQnV0dG9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcG9uZW50VGFza0lucHV0Rm9ybSgpIHtcbiAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGNvbnN0IHRhc2tOYW1lRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb25zdCB0YXNrTmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb25zdCB0YXNrRGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGNvbnN0IHRhc2tTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb25zdCBpbnB1dEdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHRhc2tEdWVEYXRlRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb25zdCB0YXNrRHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblxuICB0YXNrRm9ybS5jbGFzc0xpc3QuYWRkKCd0YXNrLWZvcm0nKTtcbiAgdGFza0Zvcm0uc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrLWZvcm0nKTtcblxuICB0YXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrTmFtZUxhYmVsKTtcbiAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza05hbWVGaWVsZCk7XG4gIHRhc2tOYW1lTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndGFzay1uYW1lJyk7XG4gIHRhc2tOYW1lTGFiZWwudGV4dENvbnRlbnQgPSAnQWRkIFRhc2snO1xuICB0YXNrTmFtZUZpZWxkLnNldEF0dHJpYnV0ZSgnbmFtZScsICd0YXNrLW5hbWUnKTtcbiAgdGFza05hbWVGaWVsZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2stbmFtZScpO1xuICB0YXNrTmFtZUZpZWxkLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIHRhc2tOYW1lRmllbGQuY2xhc3NMaXN0LmFkZCgndGFzay1uYW1lLWZpZWxkJyk7XG5cbiAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uTGFiZWwpO1xuICB0YXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb25GaWVsZCk7XG4gIHRhc2tEZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Rhc2stZGVzY3JpcHRpb24nKTtcbiAgdGFza0Rlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb24nO1xuICB0YXNrRGVzY3JpcHRpb25GaWVsZC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGFzay1kZXNjcmlwdGlvbicpO1xuICB0YXNrRGVzY3JpcHRpb25GaWVsZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2stZGVzY3JpcHRpb24nKTtcbiAgdGFza0Rlc2NyaXB0aW9uRmllbGQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgdGFza0Rlc2NyaXB0aW9uRmllbGQuY2xhc3NMaXN0LmFkZCgndGFzay1kZXNjcmlwdGlvbi1maWVsZCcpO1xuXG4gIHRhc2tGb3JtLmFwcGVuZENoaWxkKGlucHV0R3JvdXApO1xuICBpbnB1dEdyb3VwLmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlTGFiZWwpO1xuICBpbnB1dEdyb3VwLmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlRmllbGQpO1xuICB0YXNrRHVlRGF0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2R1ZS1kYXRlJyk7XG4gIHRhc2tEdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRHVlIERhdGUnO1xuICB0YXNrRHVlRGF0ZUZpZWxkLnNldEF0dHJpYnV0ZSgnbmFtZScsICdkdWUtZGF0ZScpO1xuICB0YXNrRHVlRGF0ZUZpZWxkLnNldEF0dHJpYnV0ZSgnaWQnLCAnZHVlLWRhdGUnKTtcbiAgdGFza0R1ZURhdGVGaWVsZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICB0YXNrRHVlRGF0ZUZpZWxkLmNsYXNzTGlzdC5hZGQoJ2R1ZS1kYXRlLWZpZWxkJyk7XG5cbiAgY29uc3Qgc3Rhck91dGxpbmUgPSBuZXcgSW1hZ2UoKTtcbiAgc3Rhck91dGxpbmUuc3JjID0gU3RhclJlZ3VsYXI7XG4gIHN0YXJPdXRsaW5lLmNsYXNzTGlzdC5hZGQoJ2ljb25zJywgJ3N0YXItb3V0bGluZScpO1xuICBpbnB1dEdyb3VwLmFwcGVuZENoaWxkKHN0YXJPdXRsaW5lKTtcblxuICB0YXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrU3VibWl0KTtcbiAgdGFza1N1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gIHRhc2tTdWJtaXQuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrLXN1Ym1pdCcpO1xuICB0YXNrU3VibWl0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnQUREJyk7XG4gIHJldHVybiB0YXNrRm9ybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXQoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGNvbXBvbmVudENvbnRhaW5lcigpO1xuICBjb25zdCBoZWFkZXIgPSBjb21wb25lbnRIZWFkZXIoKTtcbiAgY29uc3QgY29udGVudCA9IGNvbXBvbmVudENvbnRlbnQoKTtcbiAgY29uc3Qgc2lkZWJhciA9IGNvbXBvbmVudFNpZGViYXIoKTtcbiAgY29uc3QgZmlsdGVycyA9IGNvbXBvbmVudEZpbHRlcnMoKTtcbiAgY29uc3QgZmlsdGVyQWxsID0gY29tcG9uZW50RmlsdGVyKCk7XG4gIGNvbnN0IGZpbHRlclRvZGF5ID0gY29tcG9uZW50RmlsdGVyKCk7XG4gIGNvbnN0IGZpbHRlcldlZWsgPSBjb21wb25lbnRGaWx0ZXIoKTtcbiAgY29uc3QgcHJvamVjdHNIZWFkZXIgPSBjb21wb25lbnRQcm9qZWN0c0hlYWRlcigpO1xuICBjb25zdCBwcm9qZWN0cyA9IGNvbXBvbmVudFByb2plY3RzKCk7XG4gIGNvbnN0IHByb2plY3QgPSBjb21wb25lbnRQcm9qZWN0KCk7XG4gIGNvbnN0IHRhc2tzQ2FyZCA9IGNvbXBvbmVudFRhc2tzQ2FyZCgpO1xuICBjb25zdCB0YXNrcyA9IGNvbXBvbmVudFRhc2tzKCk7XG4gIGNvbnN0IHRhc2sgPSBjb21wb25lbnRUYXNrKCk7XG4gIGNvbnN0IHRhc2tJbmZvID0gY29tcG9uZW50VGFza0luZm8oKTtcbiAgY29uc3QgZWRpdFRvb2xzID0gY29tcG9uZW50RWRpdFRvb2xzKCk7XG4gIGNvbnN0IGNoZWNrYm94ID0gY29tcG9uZW50Q2hlY2tib3goKTtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoY29tcG9uZW50VGl0bGUoKSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChzaWRlYmFyKTtcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChmaWx0ZXJzKTtcbiAgZmlsdGVycy5hcHBlbmRDaGlsZChjb21wb25lbnRTZWN0aW9uSGVhZGVyKCdGaWx0ZXJzJykpO1xuICBmaWx0ZXJzLmFwcGVuZENoaWxkKGZpbHRlckFsbCk7XG4gIGZpbHRlckFsbC5hcHBlbmRDaGlsZChjb21wb25lbnRJbmJveEljb24oKSk7XG4gIGZpbHRlckFsbC5hcHBlbmRDaGlsZChjb21wb25lbnRGaWx0ZXJOYW1lKCdBbGwnKSk7XG4gIGZpbHRlcnMuYXBwZW5kQ2hpbGQoZmlsdGVyVG9kYXkpO1xuICBmaWx0ZXJUb2RheS5hcHBlbmRDaGlsZChjb21wb25lbnRUb2RheUljb24oKSk7XG4gIGZpbHRlclRvZGF5LmFwcGVuZENoaWxkKGNvbXBvbmVudEZpbHRlck5hbWUoJ1RvZGF5JykpO1xuICBmaWx0ZXJzLmFwcGVuZENoaWxkKGZpbHRlcldlZWspO1xuICBmaWx0ZXJXZWVrLmFwcGVuZENoaWxkKGNvbXBvbmVudFdlZWtJY29uKCkpO1xuICBmaWx0ZXJXZWVrLmFwcGVuZENoaWxkKGNvbXBvbmVudEZpbHRlck5hbWUoJ1dlZWsnKSk7XG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdHMpO1xuICBwcm9qZWN0cy5hcHBlbmRDaGlsZChwcm9qZWN0c0hlYWRlcik7XG4gIHByb2plY3RzSGVhZGVyLmFwcGVuZENoaWxkKGNvbXBvbmVudFByb2plY3RzSGVhZGluZygpKTtcbiAgcHJvamVjdHNIZWFkZXIuYXBwZW5kQ2hpbGQoY29tcG9uZW50QWRkUHJvamVjdEljb24oKSk7XG4gIHByb2plY3RzLmFwcGVuZENoaWxkKGNvbXBvbmVudFByb2plY3RJbnB1dEZvcm0oKSk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXN1Ym1pdCcpLmhpZGRlbiA9IHRydWU7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWZvcm0nKS5oaWRkZW4gPSB0cnVlO1xuICBwcm9qZWN0cy5hcHBlbmRDaGlsZChwcm9qZWN0KTtcbiAgcHJvamVjdC5hcHBlbmRDaGlsZChjb21wb25lbnRQcm9qZWN0SWNvbigpKTtcbiAgcHJvamVjdC5hcHBlbmRDaGlsZChjb21wb25lbnRQcm9qZWN0VGl0bGUoJ1ByaW1hcnknKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza3NDYXJkKTtcbiAgdGFza3NDYXJkLmFwcGVuZENoaWxkKHRhc2tzKTtcbiAgdGFza3MuYXBwZW5kQ2hpbGQoY29tcG9uZW50U2VjdGlvbkhlYWRlcignVGFza3MnKSk7XG4gIHRhc2tzLmFwcGVuZENoaWxkKHRhc2spO1xuICB0YXNrLmFwcGVuZENoaWxkKHRhc2tJbmZvKTtcbiAgdGFza0luZm8uYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICBjaGVja2JveC5hcHBlbmRDaGlsZChjb21wb25lbnRDaGVja2JveEZpZWxkKCkpO1xuICBjaGVja2JveC5hcHBlbmRDaGlsZChjb21wb25lbnRDaGVja2JveExhYmVsKCdGaW5pc2ggcHJvamVjdCcpKTtcbiAgdGFzay5hcHBlbmRDaGlsZChlZGl0VG9vbHMpO1xuICBlZGl0VG9vbHMuYXBwZW5kQ2hpbGQoY29tcG9uZW50RWRpdEljb24oKSk7XG4gIGVkaXRUb29scy5hcHBlbmRDaGlsZChjb21wb25lbnRUcmFzaEljb24oKSk7XG4gIHRhc2tzQ2FyZC5hcHBlbmRDaGlsZChjb21wb25lbnRBZGRUYXNrQnV0dG9uKCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvamVjdEZvcm0oKSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qZWN0VG9ET00obmV3UHJvamVjdCkge1xuICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xuICBjb25zdCBwcm9qZWN0ID0gY29tcG9uZW50UHJvamVjdCgpO1xuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBjb21wb25lbnRQcm9qZWN0VGl0bGUobmV3UHJvamVjdCk7XG4gIHByb2plY3RzLmluc2VydEJlZm9yZShwcm9qZWN0LCBwcm9qZWN0cy5jaGlsZHJlblsyXSk7XG4gIHByb2plY3QuYXBwZW5kQ2hpbGQoY29tcG9uZW50UHJvamVjdEljb24oKSk7XG4gIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcblxuICBnZXRQcm9qZWN0Rm9ybSgpLnJlc2V0KCk7XG5cbiAgcmV0dXJuIHByb2plY3RzO1xufVxuXG4vLyBJZiBwcm9qZWN0IGZvcm0gaXMgaGlkZGVuIGlzIHRydWUsIHRoZW4gdGhhdCBtZWFucyBwcm9qZWN0IGZvcm1cbi8vIGlzIGNvbGxhcHNlZC4gVGhpcyBmdW5jdGlvbiB3b3VsZCB0aGVuIHJldHVybiBmYWxzZSxcbi8vIGJlY2F1c2UgaXQgaXMgZmFsc2UgdGhhdCB0aGUgcHJvamVjdCBmb3JtIGlzIGV4cGFuZGVkLlxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RGb3JtRXhwYW5kZWQoKSB7XG4gIHJldHVybiAhZ2V0UHJvamVjdEZvcm0oKS5oaWRkZW47XG59XG5cbi8vIEV4cGFuZCBvciBjb2xsYXBzZSB0aGUgcHJvamVjdCBmb3JtIGJhc2VkIG9uIHBhc3NlZCBpbiB0cnVlL2ZhbHNlIHZhbHVlXG5leHBvcnQgZnVuY3Rpb24gZXhwYW5kQ3JlYXRlUHJvamVjdEZvcm0oZXhwYW5kKSB7XG4gIGdldFByb2plY3RGb3JtKCkuaGlkZGVuID0gIWV4cGFuZDtcbn1cblxuLy8gUm90YXRlIGFkZCBwcm9qZWN0IGljb24gd2hlbiBjYWxsZWRcbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVBZGRQcm9qZWN0SWNvbigpIHtcbiAgY29uc3QgYWRkUHJvamVjdEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGx1cy1pY29uJyk7XG4gIGlmICghYWRkUHJvamVjdEljb24uY2xhc3NMaXN0LmNvbnRhaW5zKCdyb3RhdGUnKSkge1xuICAgIGFkZFByb2plY3RJY29uLmNsYXNzTGlzdC5hZGQoJ3JvdGF0ZScpO1xuICB9IGVsc2UgaWYgKGFkZFByb2plY3RJY29uLmNsYXNzTGlzdC5jb250YWlucygncm90YXRlJykpIHtcbiAgICBhZGRQcm9qZWN0SWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdyb3RhdGUnKTtcbiAgfVxufVxuXG4vLyBSZW1vdmUgYWN0aXZlIGNsYXNzIGZyb20gYW55IHByZXZpb3VzbHkgYWN0aXZlIGVsZW1lbnQgaW4gc2lkZWJhclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUFjdGl2ZUNsYXNzKCkge1xuICBjb25zdCBzaWRlYmFyTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2lkZWJhci1saW5rcycpO1xuICBzaWRlYmFyTGlua3MuZm9yRWFjaCgoc2lkZWJhckxpbmspID0+IHtcbiAgICBzaWRlYmFyTGluay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgfSk7XG59XG5cbi8vIEhpZ2hsaWdodCBjdXJyZW50bHkgc2VsZWN0ZWQgc2lkZWJhciBvcHRpb24gYW5kIHJlbW92ZSBhbnkgaW5hY3RpdmUgaGlnaGxpZ2h0ZWQgb3B0aW9uc1xuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVNpZGViYXJIaWdobGlnaHQoZWxlbWVudCkge1xuICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3NpZGViYXItbGlua3MnKSkge1xuICAgIHJlbW92ZUFjdGl2ZUNsYXNzKCk7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgfSBlbHNlIGlmIChcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZmlsdGVyLWVsZW1lbnRzJykgfHxcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdC1lbGVtZW50cycpXG4gICkge1xuICAgIHJlbW92ZUFjdGl2ZUNsYXNzKCk7XG4gICAgZWxlbWVudC5wYXJlbnROb2RlLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBpbml0LFxuICBhZGRQcm9qZWN0VG9ET00sXG4gIGdldFByb2plY3RGb3JtLFxuICBwcm9qZWN0Rm9ybUV4cGFuZGVkLFxuICBleHBhbmRDcmVhdGVQcm9qZWN0Rm9ybSxcbiAgcm90YXRlQWRkUHJvamVjdEljb24sXG4gIHJlbW92ZUFjdGl2ZUNsYXNzLFxuICBjb21wb25lbnRUYXNrSW5wdXRGb3JtLFxuICB0b2dnbGVTaWRlYmFySGlnaGxpZ2h0LFxufSBmcm9tICcuL2RvbS1tYW5pcHVsYXRpb24nO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgeyBnZXRQcm9qZWN0cywgYWRkUHJvamVjdCB9IGZyb20gJy4vc2l0ZS1zdG9yYWdlJztcblxuaW5pdCgpO1xuXG5jb25zdCBwcmltYXJ5VGFza3MgPSBbXG4gIG5ldyBUYXNrKFxuICAgICdSZXNwb25kIHRvIGVtYWlscycsXG4gICAgJ0NhdGNoIHVwIG9uIHBlcnNvbmFsIGFuZCB3b3JrIGVtYWlscycsXG4gICAgJzMvNC8yMDIzJyxcbiAgICAnbG93J1xuICApLFxuXTtcblxuY29uc3QgcHJpbWFyeVByb2plY3QgPSBuZXcgUHJvamVjdCgnUHJpbWFyeSBQcm9qZWN0JywgcHJpbWFyeVRhc2tzKTtcbmNvbnN0IHNlY29uZGFyeVByb2plY3QgPSBuZXcgUHJvamVjdCgnU2Vjb25kYXJ5IFByb2plY3QnKTtcblxuYWRkUHJvamVjdChwcmltYXJ5UHJvamVjdCk7XG5hZGRQcm9qZWN0KHNlY29uZGFyeVByb2plY3QpO1xuXG5jb25zdCB0YXNrVHdvID0gbmV3IFRhc2soXG4gICdNZWFsIHBsYW5uaW5nJyxcbiAgJ1BsYW4gbWVhbHMgZm9yIG5leHQgd2VlaycsXG4gICczLzQvMjAyMycsXG4gIDNcbik7XG5cbnByaW1hcnlQcm9qZWN0LmFkZFRhc2sodGFza1R3byk7XG5jb25zb2xlLmxvZyhnZXRQcm9qZWN0cygpKTtcblxuLy8gTGlzdGVuIHRvIGtleXByZXNzIG9uIHRoZSBwcm9qZWN0IGZvcm1cbmNvbnN0IHByb2plY3RGb3JtID0gZ2V0UHJvamVjdEZvcm0oKTtcbnByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpID0+IHtcbiAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgLy8gQ29sbGFwc2UgcHJvamVjdCBpbnB1dCBmb3JtXG4gICAgZXhwYW5kQ3JlYXRlUHJvamVjdEZvcm0oZmFsc2UpO1xuXG4gICAgLy8gR2V0IHByb2plY3QgbmFtZSBmcm9tIGZvcm0gdmFsdWVcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LW5hbWUnKS52YWx1ZTtcblxuICAgIC8vIENyZWF0ZSBuZXcgcHJvamVjdCB3aXRoIHByb2plY3QgbmFtZVxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0TmFtZSk7XG5cbiAgICAvLyBBZGQgcHJvamVjdCB0byBzaXRlIHN0b3JhZ2VcbiAgICBhZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xuXG4gICAgLy8gQWRkIHByb2plY3QgbmFtZSB0byBzaWRlYmFyXG4gICAgYWRkUHJvamVjdFRvRE9NKG5ld1Byb2plY3QuZ2V0VGl0bGUoKSk7XG5cbiAgICAvLyBSZW1vdmUgYWN0aXZlIGNsYXNzIChiYWNrZ3JvdW5kIGNvbG9yKSBmcm9tIGFueSBhY3RpdmUgZWxlbWVudFxuICAgIHJlbW92ZUFjdGl2ZUNsYXNzKCk7XG5cbiAgICAvLyBNYWtlIGN1cnJlbnQgcHJvamVjdCBhY3RpdmVcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdCcpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXG4gICAgLy8gQ2hhbmdlIHggdG8gKyBmb3IgYWRkLXByb2plY3QgaWNvblxuICAgIHJvdGF0ZUFkZFByb2plY3RJY29uKCk7XG4gIH1cbn0pO1xuXG5jb25zdCBzaG93UHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGx1cy1pY29uJyk7XG5zaG93UHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIC8vIEV4cGFuZCBvciBjb2xsYXBzZSBwcm9qZWN0IGZvcm0gYmFzZWQgb24gY3VycmVudCBzdGF0ZSB3aGVuIHByZXNzaW5nIHRoZSBwbHVzIGljb24gaW1hZ2VcbiAgZXhwYW5kQ3JlYXRlUHJvamVjdEZvcm0oIXByb2plY3RGb3JtRXhwYW5kZWQoKSk7XG5cbiAgLy8gUm90YXRlIGJldHdlZW4gKyBhbmQgeCBmb3IgYWRkLXByb2plY3QgaWNvbiB3aGVuIGNsaWNrZWRcbiAgcm90YXRlQWRkUHJvamVjdEljb24oKTtcbn0pO1xuXG5jb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpZGViYXInKTtcbnNpZGViYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAvLyBIaWdobGlnaHQgY3VycmVudGx5IHNlbGVjdGVkIHNpZGViYXIgb3B0aW9uIGFuZCByZW1vdmUgYW55IGluYWN0aXZlIGhpZ2hsaWdodGVkIG9wdGlvbnNcbiAgdG9nZ2xlU2lkZWJhckhpZ2hsaWdodChlLnRhcmdldCk7XG59KTtcblxuY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1idXR0b24nKTtcbmNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzLWNhcmQnKTtcbmFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHRhc2tzQ29udGFpbmVyLnJlcGxhY2VDaGlsZHJlbihjb21wb25lbnRUYXNrSW5wdXRGb3JtKCkpO1xufSk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IodGl0bGUsIHRhc2tzID0gW10pIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy50YXNrcyA9IHRhc2tzO1xuICB9XG5cbiAgYWRkVGFzayh0YXNrKSB7XG4gICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xuICB9XG5cbiAgZ2V0VGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gIH1cbn1cbiIsIi8vIGNyZWF0ZSBsaXN0IG9mIHByb2plY3RzXG4vLyBtZXRob2RzIHRvIGFkZCBwcm9qZWN0cyBhbmQgZ2V0IHByb2plY3RzXG5cbmNvbnN0IHByb2plY3RzID0gW107XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9qZWN0cygpIHtcbiAgcmV0dXJuIHByb2plY3RzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJvamVjdChwcm9qZWN0KSB7XG4gIHByb2plY3RzLnB1c2gocHJvamVjdCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==