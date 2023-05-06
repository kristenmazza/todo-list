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
___CSS_LOADER_EXPORT___.push([module.id, "html,\nbody {\n  margin: 0px;\n  padding: 0px;\n  font-family: 'Roboto', 'Calibri', 'Arial';\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background-color: rgb(34, 40, 49);\n  color: rgb(193, 224, 225);\n}\n\n.icons {\n  height: 20px;\n  width: auto;\n  filter: invert(100%) sepia(76%) saturate(556%) hue-rotate(153deg)\n    brightness(90%) contrast(93%);\n}\n\n.plus-icon {\n  transition: all 0.3s;\n}\n\n.plus-icon:hover {\n  cursor: pointer;\n  height: 23px;\n  width: auto;\n}\n\n.edit-tools > .icons:hover,\n.nav-group > .icons:hover,\n.input-group > .icons:hover {\n  transform: scale(1.15);\n  transition: all 0.3s;\n  cursor: pointer;\n}\n\n.rotate {\n  transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  -webkit-transform: rotate(45deg);\n  -moz-transform: rotate(45deg);\n}\n\n.container {\n  padding: 0px clamp(1rem, 20%, 50vw);\n}\n\nh1 {\n  font-size: 4rem;\n  background: -webkit-linear-gradient(rgb(193, 224, 221), rgb(0, 173, 181));\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.section-header,\n.form-label {\n  color: rgb(119, 197, 201);\n  font-size: 1.5rem;\n  margin-top: 0.83em;\n  margin-bottom: 0.5em;\n  font-weight: bold;\n  color: rgb(119, 197, 201);\n}\n\n.content {\n  display: flex;\n  min-height: 60vh;\n}\n\n.sidebar {\n  flex-basis: clamp(24ch, 15%, 50ch);\n  padding: 1rem 2rem;\n  background-color: rgb(57, 62, 70);\n  border-radius: 20px;\n  min-height: 60vh;\n}\n\n.filter,\n.project {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-wrap: nowrap;\n  padding: 0px 10px;\n  margin: 5px 0px;\n  height: 2.3rem;\n}\n\n.filter:hover,\n.project:hover {\n  cursor: pointer;\n}\n\n.active {\n  background-color: rgba(80, 85, 92, 0.5);\n  border-radius: 8px;\n}\n\n.projects-header {\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 2rem;\n  padding-bottom: 10px;\n  height: 4ch;\n  gap: 1rem;\n}\n\n.projects input[type='text'] {\n  border-radius: 8px;\n  background-color: rgba(80, 85, 92, 0.5);\n  outline: none;\n  border: none;\n  padding: 8px;\n  color: rgb(235, 235, 235);\n  font-size: 1rem;\n  font-family: inherit;\n  margin: 10px 10px 10px 0px;\n  width: calc(100% - 15px);\n}\n\n.project {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.tasks-card {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex: 1 1 300px;\n  margin-left: 30px;\n  padding: 1rem 2rem;\n  background-color: rgb(57, 62, 70);\n  border-radius: 20px;\n  min-height: 100%;\n}\n\n.task {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: rgba(80, 85, 92, 0.5);\n  padding: 10px;\n  margin-bottom: 1rem;\n  border-radius: 5px;\n  gap: 1rem;\n  border-radius: 8px;\n}\n\n.task-info {\n  display: flex;\n  align-items: center;\n  color: rgb(214, 241, 241);\n}\n\n.edit-tools {\n  display: flex;\n  gap: 1rem;\n}\n\n.checkbox {\n  display: flex;\n  gap: 2rem;\n}\n\ninput[type='checkbox'] {\n  -webkit-appearance: none;\n  appearance: none;\n  margin: 0;\n  font: inherit;\n  color: currentColor;\n  width: 1.15em;\n  height: 1.15em;\n  border: 0.12em solid currentColor;\n  border-radius: 0.15em;\n  transform: translateY(-0.075em);\n  display: grid;\n  place-content: center;\n  cursor: pointer;\n}\n\ninput[type='checkbox']::before {\n  content: '';\n  width: 0.65em;\n  height: 0.65em;\n  transform: scale(0);\n  transition: 120ms transform ease-in-out;\n  box-shadow: inset 1em 1em var(--form-control-color);\n  background-color: CanvasText;\n  transform-origin: bottom left;\n  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\n}\n\ninput[type='checkbox']:checked::before {\n  transform: scale(1);\n  background-color: rgb(193, 224, 225);\n}\n\ninput[type='checkbox']:checked + label {\n  text-decoration: line-through;\n  color: rgb(193, 224, 225);\n}\n\n.add-task-button,\n#task-submit {\n  width: 130px;\n  border: none;\n  background-image: linear-gradient(\n    to right,\n    rgb(0, 160, 169) 0%,\n    rgb(0, 140, 147) 51%,\n    rgb(83, 96, 96) 100%\n  );\n  margin: 10px;\n  padding: 10px 15px;\n  font-size: 1.1rem;\n  letter-spacing: 1px;\n  text-align: center;\n  text-transform: uppercase;\n  transition: 0.5s;\n  background-size: 200% auto;\n  color: rgb(226, 235, 235);\n  font-weight: bold;\n  border-radius: 20px;\n  display: block;\n  align-self: flex-end;\n}\n\n.add-task-button:hover,\n#task-submit:hover {\n  transform: scale(1.05);\n  text-decoration: none;\n}\n\n.task-form {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  min-height: 100%;\n}\n\n.task-form-group {\n  display: flex;\n  flex-direction: column;\n}\n\n.task-item-group {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n\n.input-group,\n.nav-group {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.task-item-group input[type='text'],\ninput[type='date'],\nselect,\ntextarea {\n  border-radius: 8px;\n  background-color: rgba(80, 85, 92, 0.5);\n  outline: none;\n  border: none;\n  padding: 8px;\n  color: rgb(235, 235, 235);\n  font-size: 1rem;\n  font-family: inherit;\n  margin: 10px 10px 10px 0px;\n}\n\n#task-description {\n  height: 50px;\n}\n\n::-webkit-calendar-picker-indicator {\n  filter: invert(1);\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["html,\nbody {\n  margin: 0px;\n  padding: 0px;\n  font-family: 'Roboto', 'Calibri', 'Arial';\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background-color: rgb(34, 40, 49);\n  color: rgb(193, 224, 225);\n}\n\n.icons {\n  height: 20px;\n  width: auto;\n  filter: invert(100%) sepia(76%) saturate(556%) hue-rotate(153deg)\n    brightness(90%) contrast(93%);\n}\n\n.plus-icon {\n  transition: all 0.3s;\n}\n\n.plus-icon:hover {\n  cursor: pointer;\n  height: 23px;\n  width: auto;\n}\n\n.edit-tools > .icons:hover,\n.nav-group > .icons:hover,\n.input-group > .icons:hover {\n  transform: scale(1.15);\n  transition: all 0.3s;\n  cursor: pointer;\n}\n\n.rotate {\n  transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  -webkit-transform: rotate(45deg);\n  -moz-transform: rotate(45deg);\n}\n\n.container {\n  padding: 0px clamp(1rem, 20%, 50vw);\n}\n\nh1 {\n  font-size: 4rem;\n  background: -webkit-linear-gradient(rgb(193, 224, 221), rgb(0, 173, 181));\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.section-header,\n.form-label {\n  color: rgb(119, 197, 201);\n  font-size: 1.5rem;\n  margin-top: 0.83em;\n  margin-bottom: 0.5em;\n  font-weight: bold;\n  color: rgb(119, 197, 201);\n}\n\n.content {\n  display: flex;\n  min-height: 60vh;\n}\n\n.sidebar {\n  flex-basis: clamp(24ch, 15%, 50ch);\n  padding: 1rem 2rem;\n  background-color: rgb(57, 62, 70);\n  border-radius: 20px;\n  min-height: 60vh;\n}\n\n.filter,\n.project {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-wrap: nowrap;\n  padding: 0px 10px;\n  margin: 5px 0px;\n  height: 2.3rem;\n}\n\n.filter:hover,\n.project:hover {\n  cursor: pointer;\n}\n\n.active {\n  background-color: rgba(80, 85, 92, 0.5);\n  border-radius: 8px;\n}\n\n.projects-header {\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 2rem;\n  padding-bottom: 10px;\n  height: 4ch;\n  gap: 1rem;\n}\n\n.projects input[type='text'] {\n  border-radius: 8px;\n  background-color: rgba(80, 85, 92, 0.5);\n  outline: none;\n  border: none;\n  padding: 8px;\n  color: rgb(235, 235, 235);\n  font-size: 1rem;\n  font-family: inherit;\n  margin: 10px 10px 10px 0px;\n  width: calc(100% - 15px);\n}\n\n.project {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.tasks-card {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex: 1 1 300px;\n  margin-left: 30px;\n  padding: 1rem 2rem;\n  background-color: rgb(57, 62, 70);\n  border-radius: 20px;\n  min-height: 100%;\n}\n\n.task {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: rgba(80, 85, 92, 0.5);\n  padding: 10px;\n  margin-bottom: 1rem;\n  border-radius: 5px;\n  gap: 1rem;\n  border-radius: 8px;\n}\n\n.task-info {\n  display: flex;\n  align-items: center;\n  color: rgb(214, 241, 241);\n}\n\n.edit-tools {\n  display: flex;\n  gap: 1rem;\n}\n\n.checkbox {\n  display: flex;\n  gap: 2rem;\n}\n\ninput[type='checkbox'] {\n  -webkit-appearance: none;\n  appearance: none;\n  margin: 0;\n  font: inherit;\n  color: currentColor;\n  width: 1.15em;\n  height: 1.15em;\n  border: 0.12em solid currentColor;\n  border-radius: 0.15em;\n  transform: translateY(-0.075em);\n  display: grid;\n  place-content: center;\n  cursor: pointer;\n}\n\ninput[type='checkbox']::before {\n  content: '';\n  width: 0.65em;\n  height: 0.65em;\n  transform: scale(0);\n  transition: 120ms transform ease-in-out;\n  box-shadow: inset 1em 1em var(--form-control-color);\n  background-color: CanvasText;\n  transform-origin: bottom left;\n  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\n}\n\ninput[type='checkbox']:checked::before {\n  transform: scale(1);\n  background-color: rgb(193, 224, 225);\n}\n\ninput[type='checkbox']:checked + label {\n  text-decoration: line-through;\n  color: rgb(193, 224, 225);\n}\n\n.add-task-button,\n#task-submit {\n  width: 130px;\n  border: none;\n  background-image: linear-gradient(\n    to right,\n    rgb(0, 160, 169) 0%,\n    rgb(0, 140, 147) 51%,\n    rgb(83, 96, 96) 100%\n  );\n  margin: 10px;\n  padding: 10px 15px;\n  font-size: 1.1rem;\n  letter-spacing: 1px;\n  text-align: center;\n  text-transform: uppercase;\n  transition: 0.5s;\n  background-size: 200% auto;\n  color: rgb(226, 235, 235);\n  font-weight: bold;\n  border-radius: 20px;\n  display: block;\n  align-self: flex-end;\n}\n\n.add-task-button:hover,\n#task-submit:hover {\n  transform: scale(1.05);\n  text-decoration: none;\n}\n\n.task-form {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  min-height: 100%;\n}\n\n.task-form-group {\n  display: flex;\n  flex-direction: column;\n}\n\n.task-item-group {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n\n.input-group,\n.nav-group {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.task-item-group input[type='text'],\ninput[type='date'],\nselect,\ntextarea {\n  border-radius: 8px;\n  background-color: rgba(80, 85, 92, 0.5);\n  outline: none;\n  border: none;\n  padding: 8px;\n  color: rgb(235, 235, 235);\n  font-size: 1rem;\n  font-family: inherit;\n  margin: 10px 10px 10px 0px;\n}\n\n#task-description {\n  height: 50px;\n}\n\n::-webkit-calendar-picker-indicator {\n  filter: invert(1);\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _images_chevron_left_solid_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/chevron-left-solid.svg */ "./src/images/chevron-left-solid.svg");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./task */ "./src/task.js");











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

// Sidebar
function componentSidebar() {
  const sidebar = document.createElement('div');
  sidebar.classList.add('sidebar');
  sidebar.setAttribute('id', 'sidebar');
  return sidebar;
}

// Sidebar filters section
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

// Sidebar projects section
function componentProjectsHeading() {
  const projectsHeading = document.createElement('h2');
  projectsHeading.classList.add('section-header');
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

// Sidebar project creation form
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

// Sidebar project title
function componentProjectTitle(title) {
  const projectTitle = document.createElement('p');
  projectTitle.textContent = title;
  projectTitle.classList.add('project-elements');
  return projectTitle;
}

// Sidebar add project icon
function componentAddProjectIcon() {
  const addProjectIcon = new Image();
  addProjectIcon.src = _images_plus_solid_svg__WEBPACK_IMPORTED_MODULE_7__;
  addProjectIcon.classList.add('icons', 'plus-icon');
  return addProjectIcon;
}

// Tasks section
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

// Add Task form
function componentTaskFormGroup() {
  const formGroup = document.createElement('div');
  formGroup.classList.add('task-form-group');
  return formGroup;
}

// Add Task form component for each input item (task, description, date, priority)
function componentTaskItemGroup() {
  const itemGroup = document.createElement('div');
  itemGroup.classList.add('task-item-group');
  return itemGroup;
}

// Add Task form component for multiple input items row (date, priority)
function componentInputGroup() {
  const inputGroup = document.createElement('div');
  inputGroup.classList.add('input-group');
  return inputGroup;
}

// Add Task form component for navigation (back & submit buttons)
function componentNavigationGroup() {
  const navGroup = document.createElement('div');
  navGroup.classList.add('nav-group');
  return navGroup;
}

// Add Task form priority selection
function componentTaskPriority() {
  const priority = document.createElement('select');
  priority.setAttribute('id', 'priority');
  priority.setAttribute('name', 'priority');
  const OptionOne = document.createElement('option');
  const OptionTwo = document.createElement('option');
  OptionOne.value = 'low';
  OptionOne.textContent = 'Low';
  OptionTwo.value = 'high';
  OptionTwo.textContent = 'High';
  priority.appendChild(OptionOne);
  priority.appendChild(OptionTwo);
  return priority;
}

// Add Task form priority label
function componentTaskPriorityLabel() {
  const priorityLabel = document.createElement('label');
  priorityLabel.setAttribute('for', 'priority');
  priorityLabel.textContent = 'Priority';
  priorityLabel.classList.add('form-label');
  return priorityLabel;
}

// Add Task form task name header and input
function componentFormTaskName() {
  const taskNameGroup = componentTaskItemGroup();
  const taskNameField = document.createElement('input');
  taskNameGroup.appendChild(componentSectionHeader('Add Task'));
  taskNameGroup.appendChild(taskNameField);
  taskNameField.setAttribute('name', 'task-name');
  taskNameField.setAttribute('id', 'task-name');
  taskNameField.setAttribute('type', 'text');
  taskNameField.classList.add('task-name-field');
  return taskNameGroup;
}

// Add Task form description input field
function componentFormTaskDescription() {
  const taskDescriptionField = document.createElement('textarea');
  taskDescriptionField.setAttribute('name', 'task-description');
  taskDescriptionField.setAttribute('id', 'task-description');
  taskDescriptionField.classList.add('task-description-field');
  return taskDescriptionField;
}

// Add Task form description label
function componentFormTaskDescriptionLabel() {
  const taskDescriptionLabel = document.createElement('label');
  taskDescriptionLabel.classList.add('form-label');
  taskDescriptionLabel.setAttribute('for', 'task-description');
  taskDescriptionLabel.textContent = 'Description';
  return taskDescriptionLabel;
}

// Add Task form due date input
function componentFormTaskDueDate() {
  const taskDueDateField = document.createElement('input');
  taskDueDateField.setAttribute('name', 'due-date');
  taskDueDateField.setAttribute('id', 'due-date');
  taskDueDateField.setAttribute('type', 'date');
  taskDueDateField.classList.add('due-date-field');
  return taskDueDateField;
}

// Add Task form due date label
function componentFormTaskDueDateLabel() {
  const taskDueDateLabel = document.createElement('label');
  taskDueDateLabel.classList.add('form-label');
  taskDueDateLabel.setAttribute('for', 'due-date');
  taskDueDateLabel.textContent = 'Due Date';
  return taskDueDateLabel;
}

// Add Task form submit button
function componentFormTaskSubmit() {
  const taskSubmit = document.createElement('input');
  taskSubmit.setAttribute('type', 'submit');
  taskSubmit.setAttribute('id', 'task-submit');
  taskSubmit.setAttribute('value', 'ADD');
  return taskSubmit;
}

// Add Task form back button
function componentFormTaskBackButton() {
  const backIcon = new Image();
  backIcon.src = _images_chevron_left_solid_svg__WEBPACK_IMPORTED_MODULE_8__;
  backIcon.classList.add('icons', 'back-icon');
  return backIcon;
}

// Display task
function displayTask(taskName) {
  const tasks = document.querySelector('tasks');
  const task = componentTask();
  const taskInfo = componentTaskInfo();
  const checkbox = componentCheckbox();
  const editTools = componentEditTools();

  tasks.appendChild(task);
  task.appendChild(taskInfo);
  taskInfo.appendChild(checkbox);
  checkbox.appendChild(componentCheckboxField());
  checkbox.appendChild(componentCheckboxLabel(taskName));
  task.appendChild(editTools);
  editTools.appendChild(componentEditIcon());
  editTools.appendChild(componentTrashIcon());
}

// Get task information from Add Task form
function getTaskInformation() {
  const taskTitle = document.getElementById('task-name').value;
  const taskDescription = document.getElementById('task-description').value;
  const taskDate = document.getElementById('due-date').value;
  const taskPriority = document.getElementById('priority').value;

  const task = new _task__WEBPACK_IMPORTED_MODULE_9__["default"](taskTitle, taskDescription, taskDate, taskPriority);
  displayTask(task.title);
  console.log(task);
}

// Full Add Task input form
function componentTaskInputForm() {
  const taskForm = document.createElement('form');
  const taskFormGroup = componentTaskFormGroup();
  const taskNameGroup = componentTaskItemGroup();
  const descriptionGroup = componentTaskItemGroup();
  const inputGroup = componentInputGroup();
  const taskDueDateGroup = componentTaskItemGroup();
  const taskPriorityGroup = componentTaskItemGroup();
  const navigationGroup = componentNavigationGroup();

  taskForm.classList.add('task-form');
  taskForm.setAttribute('id', 'task-form');
  taskForm.appendChild(taskFormGroup);

  // Append task name input and header
  taskFormGroup.appendChild(taskNameGroup);
  taskNameGroup.appendChild(componentFormTaskName());

  // Append task description input and label
  taskFormGroup.appendChild(descriptionGroup);
  descriptionGroup.appendChild(componentFormTaskDescriptionLabel());
  descriptionGroup.appendChild(componentFormTaskDescription());

  // Add task due date input and label
  taskFormGroup.appendChild(inputGroup);
  inputGroup.appendChild(taskDueDateGroup);
  taskDueDateGroup.appendChild(componentFormTaskDueDateLabel());
  taskDueDateGroup.appendChild(componentFormTaskDueDate());

  // Add task priority selection and label
  inputGroup.appendChild(taskPriorityGroup);
  taskPriorityGroup.appendChild(componentTaskPriorityLabel());
  taskPriorityGroup.appendChild(componentTaskPriority());

  // Add navigation (back button and submit form button)
  taskForm.appendChild(navigationGroup);
  navigationGroup.appendChild(componentFormTaskBackButton());
  navigationGroup.appendChild(componentFormTaskSubmit());

  // Event listener for task form
  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    getTaskInformation();
  });

  return taskForm;
}

// Initialize page
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

// Get project form
function getProjectForm() {
  return document.querySelector('.project-form');
}

// Add project to page
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
    1
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
  2
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

// Show task input form when 'Add Task' button is clicked
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

/***/ "./src/images/chevron-left-solid.svg":
/*!*******************************************!*\
  !*** ./src/images/chevron-left-solid.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7aa1b88a3ffe04954d48.svg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxTQUFTLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FB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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IscURBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG1EQUFRO0FBQy9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLDREQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLG9EQUFTO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsMkRBQVM7QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDZDQUFJO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDcGlCNEI7QUFDRjtBQUNNO0FBQ3lCOztBQUV6RCx1REFBSTs7QUFFSjtBQUNBLE1BQU0sNkNBQUk7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCLGdEQUFPO0FBQ2xDLDZCQUE2QixnREFBTzs7QUFFcEMseURBQVU7QUFDVix5REFBVTs7QUFFVixvQkFBb0IsNkNBQUk7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVksMERBQVc7O0FBRXZCO0FBQ0Esb0JBQW9CLGlFQUFjO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksMEVBQXVCOztBQUUzQjtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLGdEQUFPOztBQUVsQztBQUNBLElBQUkseURBQVU7O0FBRWQ7QUFDQSxJQUFJLGtFQUFlOztBQUVuQjtBQUNBLElBQUksb0VBQWlCOztBQUVyQjtBQUNBOztBQUVBO0FBQ0EsSUFBSSx1RUFBb0I7QUFDeEI7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMEVBQXVCLEVBQUUsc0VBQW1COztBQUU5QztBQUNBLEVBQUUsdUVBQW9CO0FBQ3RCLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsRUFBRSx5RUFBc0I7QUFDeEIsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyx5RUFBc0I7QUFDdkQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDOUZjO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTs7QUFFQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNYZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20tbWFuaXB1bGF0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2l0ZS1zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCxcXG5ib2R5IHtcXG4gIG1hcmdpbjogMHB4O1xcbiAgcGFkZGluZzogMHB4O1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCAnQ2FsaWJyaScsICdBcmlhbCc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM0LCA0MCwgNDkpO1xcbiAgY29sb3I6IHJnYigxOTMsIDIyNCwgMjI1KTtcXG59XFxuXFxuLmljb25zIHtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoNzYlKSBzYXR1cmF0ZSg1NTYlKSBodWUtcm90YXRlKDE1M2RlZylcXG4gICAgYnJpZ2h0bmVzcyg5MCUpIGNvbnRyYXN0KDkzJSk7XFxufVxcblxcbi5wbHVzLWljb24ge1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcblxcbi5wbHVzLWljb246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAyM3B4O1xcbiAgd2lkdGg6IGF1dG87XFxufVxcblxcbi5lZGl0LXRvb2xzID4gLmljb25zOmhvdmVyLFxcbi5uYXYtZ3JvdXAgPiAuaWNvbnM6aG92ZXIsXFxuLmlucHV0LWdyb3VwID4gLmljb25zOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnJvdGF0ZSB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAwcHggY2xhbXAoMXJlbSwgMjAlLCA1MHZ3KTtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQocmdiKDE5MywgMjI0LCAyMjEpLCByZ2IoMCwgMTczLCAxODEpKTtcXG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uc2VjdGlvbi1oZWFkZXIsXFxuLmZvcm0tbGFiZWwge1xcbiAgY29sb3I6IHJnYigxMTksIDE5NywgMjAxKTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbWFyZ2luLXRvcDogMC44M2VtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiByZ2IoMTE5LCAxOTcsIDIwMSk7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtaW4taGVpZ2h0OiA2MHZoO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBmbGV4LWJhc2lzOiBjbGFtcCgyNGNoLCAxNSUsIDUwY2gpO1xcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU3LCA2MiwgNzApO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIG1pbi1oZWlnaHQ6IDYwdmg7XFxufVxcblxcbi5maWx0ZXIsXFxuLnByb2plY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgcGFkZGluZzogMHB4IDEwcHg7XFxuICBtYXJnaW46IDVweCAwcHg7XFxuICBoZWlnaHQ6IDIuM3JlbTtcXG59XFxuXFxuLmZpbHRlcjpob3ZlcixcXG4ucHJvamVjdDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4MCwgODUsIDkyLCAwLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4ucHJvamVjdHMtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nLXRvcDogMnJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgaGVpZ2h0OiA0Y2g7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5wcm9qZWN0cyBpbnB1dFt0eXBlPSd0ZXh0J10ge1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4MCwgODUsIDkyLCAwLjUpO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGNvbG9yOiByZ2IoMjM1LCAyMzUsIDIzNSk7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMHB4O1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDE1cHgpO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4udGFza3MtY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZsZXg6IDEgMSAzMDBweDtcXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU3LCA2MiwgNzApO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbi50YXNrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4MCwgODUsIDkyLCAwLjUpO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBnYXA6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi50YXNrLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogcmdiKDIxNCwgMjQxLCAyNDEpO1xcbn1cXG5cXG4uZWRpdC10b29scyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uY2hlY2tib3gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMnJlbTtcXG59XFxuXFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIGNvbG9yOiBjdXJyZW50Q29sb3I7XFxuICB3aWR0aDogMS4xNWVtO1xcbiAgaGVpZ2h0OiAxLjE1ZW07XFxuICBib3JkZXI6IDAuMTJlbSBzb2xpZCBjdXJyZW50Q29sb3I7XFxuICBib3JkZXItcmFkaXVzOiAwLjE1ZW07XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMDc1ZW0pO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgd2lkdGg6IDAuNjVlbTtcXG4gIGhlaWdodDogMC42NWVtO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIHRyYW5zaXRpb246IDEyMG1zIHRyYW5zZm9ybSBlYXNlLWluLW91dDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDFlbSAxZW0gdmFyKC0tZm9ybS1jb250cm9sLWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IENhbnZhc1RleHQ7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcXG4gIGNsaXAtcGF0aDogcG9seWdvbigxNCUgNDQlLCAwIDY1JSwgNTAlIDEwMCUsIDEwMCUgMTYlLCA4MCUgMCUsIDQzJSA2MiUpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQ6OmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MywgMjI0LCAyMjUpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQgKyBsYWJlbCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gIGNvbG9yOiByZ2IoMTkzLCAyMjQsIDIyNSk7XFxufVxcblxcbi5hZGQtdGFzay1idXR0b24sXFxuI3Rhc2stc3VibWl0IHtcXG4gIHdpZHRoOiAxMzBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXG4gICAgdG8gcmlnaHQsXFxuICAgIHJnYigwLCAxNjAsIDE2OSkgMCUsXFxuICAgIHJnYigwLCAxNDAsIDE0NykgNTElLFxcbiAgICByZ2IoODMsIDk2LCA5NikgMTAwJVxcbiAgKTtcXG4gIG1hcmdpbjogMTBweDtcXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgYmFja2dyb3VuZC1zaXplOiAyMDAlIGF1dG87XFxuICBjb2xvcjogcmdiKDIyNiwgMjM1LCAyMzUpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuLmFkZC10YXNrLWJ1dHRvbjpob3ZlcixcXG4jdGFzay1zdWJtaXQ6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLnRhc2stZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbi50YXNrLWZvcm0tZ3JvdXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50YXNrLWl0ZW0tZ3JvdXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uaW5wdXQtZ3JvdXAsXFxuLm5hdi1ncm91cCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2staXRlbS1ncm91cCBpbnB1dFt0eXBlPSd0ZXh0J10sXFxuaW5wdXRbdHlwZT0nZGF0ZSddLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgwLCA4NSwgOTIsIDAuNSk7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgY29sb3I6IHJnYigyMzUsIDIzNSwgMjM1KTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCAwcHg7XFxufVxcblxcbiN0YXNrLWRlc2NyaXB0aW9uIHtcXG4gIGhlaWdodDogNTBweDtcXG59XFxuXFxuOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xcbiAgZmlsdGVyOiBpbnZlcnQoMSk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0VBRUUsV0FBVztFQUNYLFlBQVk7RUFDWix5Q0FBeUM7RUFDekMsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsaUNBQWlDO0VBQ2pDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1g7aUNBQytCO0FBQ2pDOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7OztFQUdFLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4Qiw0QkFBNEI7RUFDNUIsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGVBQWU7RUFDZix5RUFBeUU7RUFDekUscUJBQXFCO0VBQ3JCLDZCQUE2QjtFQUM3QixvQ0FBb0M7QUFDdEM7O0FBRUE7O0VBRUUseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGtCQUFrQjtFQUNsQixpQ0FBaUM7RUFDakMsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBOztFQUVFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix1Q0FBdUM7RUFDdkMsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsMEJBQTBCO0VBQzFCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUNBQWlDO0VBQ2pDLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQix1Q0FBdUM7RUFDdkMsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixjQUFjO0VBQ2QsaUNBQWlDO0VBQ2pDLHFCQUFxQjtFQUNyQiwrQkFBK0I7RUFDL0IsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLHVDQUF1QztFQUN2QyxtREFBbUQ7RUFDbkQsNEJBQTRCO0VBQzVCLDZCQUE2QjtFQUM3Qix1RUFBdUU7QUFDekU7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osWUFBWTtFQUNaOzs7OztHQUtDO0VBQ0QsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtFQUMxQix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2Qsb0JBQW9CO0FBQ3RCOztBQUVBOztFQUVFLHNCQUFzQjtFQUN0QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixPQUFPO0FBQ1Q7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7Ozs7RUFJRSxrQkFBa0I7RUFDbEIsdUNBQXVDO0VBQ3ZDLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLFxcbmJvZHkge1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsICdDYWxpYnJpJywgJ0FyaWFsJztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzQsIDQwLCA0OSk7XFxuICBjb2xvcjogcmdiKDE5MywgMjI0LCAyMjUpO1xcbn1cXG5cXG4uaWNvbnMge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IGF1dG87XFxuICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSg3NiUpIHNhdHVyYXRlKDU1NiUpIGh1ZS1yb3RhdGUoMTUzZGVnKVxcbiAgICBicmlnaHRuZXNzKDkwJSkgY29udHJhc3QoOTMlKTtcXG59XFxuXFxuLnBsdXMtaWNvbiB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuXFxuLnBsdXMtaWNvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDIzcHg7XFxuICB3aWR0aDogYXV0bztcXG59XFxuXFxuLmVkaXQtdG9vbHMgPiAuaWNvbnM6aG92ZXIsXFxuLm5hdi1ncm91cCA+IC5pY29uczpob3ZlcixcXG4uaW5wdXQtZ3JvdXAgPiAuaWNvbnM6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucm90YXRlIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDBweCBjbGFtcCgxcmVtLCAyMCUsIDUwdncpO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChyZ2IoMTkzLCAyMjQsIDIyMSksIHJnYigwLCAxNzMsIDE4MSkpO1xcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5zZWN0aW9uLWhlYWRlcixcXG4uZm9ybS1sYWJlbCB7XFxuICBjb2xvcjogcmdiKDExOSwgMTk3LCAyMDEpO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBtYXJnaW4tdG9wOiAwLjgzZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IHJnYigxMTksIDE5NywgMjAxKTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1pbi1oZWlnaHQ6IDYwdmg7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIGZsZXgtYmFzaXM6IGNsYW1wKDI0Y2gsIDE1JSwgNTBjaCk7XFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTcsIDYyLCA3MCk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgbWluLWhlaWdodDogNjB2aDtcXG59XFxuXFxuLmZpbHRlcixcXG4ucHJvamVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICBwYWRkaW5nOiAwcHggMTBweDtcXG4gIG1hcmdpbjogNXB4IDBweDtcXG4gIGhlaWdodDogMi4zcmVtO1xcbn1cXG5cXG4uZmlsdGVyOmhvdmVyLFxcbi5wcm9qZWN0OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgwLCA4NSwgOTIsIDAuNSk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi5wcm9qZWN0cy1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmctdG9wOiAycmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICBoZWlnaHQ6IDRjaDtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLnByb2plY3RzIGlucHV0W3R5cGU9J3RleHQnXSB7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgwLCA4NSwgOTIsIDAuNSk7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgY29sb3I6IHJnYigyMzUsIDIzNSwgMjM1KTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCAwcHg7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gMTVweCk7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi50YXNrcy1jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZmxleDogMSAxIDMwMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTcsIDYyLCA3MCk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuXFxuLnRhc2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgwLCA4NSwgOTIsIDAuNSk7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGdhcDogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLnRhc2staW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiByZ2IoMjE0LCAyNDEsIDI0MSk7XFxufVxcblxcbi5lZGl0LXRvb2xzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5jaGVja2JveCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG5pbnB1dFt0eXBlPSdjaGVja2JveCddIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBmb250OiBpbmhlcml0O1xcbiAgY29sb3I6IGN1cnJlbnRDb2xvcjtcXG4gIHdpZHRoOiAxLjE1ZW07XFxuICBoZWlnaHQ6IDEuMTVlbTtcXG4gIGJvcmRlcjogMC4xMmVtIHNvbGlkIGN1cnJlbnRDb2xvcjtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMTVlbTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4wNzVlbSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5pbnB1dFt0eXBlPSdjaGVja2JveCddOjpiZWZvcmUge1xcbiAgY29udGVudDogJyc7XFxuICB3aWR0aDogMC42NWVtO1xcbiAgaGVpZ2h0OiAwLjY1ZW07XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgdHJhbnNpdGlvbjogMTIwbXMgdHJhbnNmb3JtIGVhc2UtaW4tb3V0O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMWVtIDFlbSB2YXIoLS1mb3JtLWNvbnRyb2wtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogQ2FudmFzVGV4dDtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDE0JSA0NCUsIDAgNjUlLCA1MCUgMTAwJSwgMTAwJSAxNiUsIDgwJSAwJSwgNDMlIDYyJSk7XFxufVxcblxcbmlucHV0W3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZDo6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkzLCAyMjQsIDIyNSk7XFxufVxcblxcbmlucHV0W3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZCArIGxhYmVsIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgY29sb3I6IHJnYigxOTMsIDIyNCwgMjI1KTtcXG59XFxuXFxuLmFkZC10YXNrLWJ1dHRvbixcXG4jdGFzay1zdWJtaXQge1xcbiAgd2lkdGg6IDEzMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcbiAgICB0byByaWdodCxcXG4gICAgcmdiKDAsIDE2MCwgMTY5KSAwJSxcXG4gICAgcmdiKDAsIDE0MCwgMTQ3KSA1MSUsXFxuICAgIHJnYig4MywgOTYsIDk2KSAxMDAlXFxuICApO1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgYXV0bztcXG4gIGNvbG9yOiByZ2IoMjI2LCAyMzUsIDIzNSk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4uYWRkLXRhc2stYnV0dG9uOmhvdmVyLFxcbiN0YXNrLXN1Ym1pdDpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4udGFzay1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuXFxuLnRhc2stZm9ybS1ncm91cCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRhc2staXRlbS1ncm91cCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi5pbnB1dC1ncm91cCxcXG4ubmF2LWdyb3VwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFzay1pdGVtLWdyb3VwIGlucHV0W3R5cGU9J3RleHQnXSxcXG5pbnB1dFt0eXBlPSdkYXRlJ10sXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODAsIDg1LCA5MiwgMC41KTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBjb2xvcjogcmdiKDIzNSwgMjM1LCAyMzUpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDBweDtcXG59XFxuXFxuI3Rhc2stZGVzY3JpcHRpb24ge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG46Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XFxuICBmaWx0ZXI6IGludmVydCgxKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IEluYm94SWNvbiBmcm9tICcuL2ltYWdlcy9pbmJveC1zb2xpZC5zdmcnO1xuaW1wb3J0IENhbGVuZGFyRGF5SWNvbiBmcm9tICcuL2ltYWdlcy9jYWxlbmRhci1kYXktc29saWQuc3ZnJztcbmltcG9ydCBDYWxlbmRhcldlZWtJY29uIGZyb20gJy4vaW1hZ2VzL2NhbGVuZGFyLXdlZWstc29saWQuc3ZnJztcbmltcG9ydCBGb2xkZXJJY29uIGZyb20gJy4vaW1hZ2VzL2ZvbGRlci1zb2xpZC5zdmcnO1xuaW1wb3J0IEVkaXRJY29uIGZyb20gJy4vaW1hZ2VzL3Blbi10by1zcXVhcmUtc29saWQuc3ZnJztcbmltcG9ydCBUcmFzaEljb24gZnJvbSAnLi9pbWFnZXMvdHJhc2gtc29saWQuc3ZnJztcbmltcG9ydCBQbHVzSWNvbiBmcm9tICcuL2ltYWdlcy9wbHVzLXNvbGlkLnN2Zyc7XG5pbXBvcnQgTGVmdFNvbGlkIGZyb20gJy4vaW1hZ2VzL2NoZXZyb24tbGVmdC1zb2xpZC5zdmcnO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrJztcblxuZnVuY3Rpb24gY29tcG9uZW50Q29udGFpbmVyKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRIZWFkZXIoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFRpdGxlKCkge1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gJ3RvZG8gbGlzdCc7XG4gIHJldHVybiB0aXRsZTtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50Q29udGVudCgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKTtcbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbi8vIFNpZGViYXJcbmZ1bmN0aW9uIGNvbXBvbmVudFNpZGViYXIoKSB7XG4gIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJyk7XG4gIHNpZGViYXIuc2V0QXR0cmlidXRlKCdpZCcsICdzaWRlYmFyJyk7XG4gIHJldHVybiBzaWRlYmFyO1xufVxuXG4vLyBTaWRlYmFyIGZpbHRlcnMgc2VjdGlvblxuZnVuY3Rpb24gY29tcG9uZW50RmlsdGVycygpIHtcbiAgY29uc3QgZmlsdGVycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmaWx0ZXJzLmNsYXNzTGlzdC5hZGQoJ2ZpbHRlcnMnKTtcbiAgcmV0dXJuIGZpbHRlcnM7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudEZpbHRlcigpIHtcbiAgY29uc3QgZmlsdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZpbHRlci5jbGFzc0xpc3QuYWRkKCdmaWx0ZXInKTtcbiAgZmlsdGVyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItbGlua3MnKTtcbiAgcmV0dXJuIGZpbHRlcjtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50SW5ib3hJY29uKCkge1xuICBjb25zdCBpbmJveEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgaW5ib3hJY29uLnNyYyA9IEluYm94SWNvbjtcbiAgaW5ib3hJY29uLmNsYXNzTGlzdC5hZGQoJ2ljb25zJyk7XG4gIGluYm94SWNvbi5jbGFzc0xpc3QuYWRkKCdmaWx0ZXItZWxlbWVudHMnKTtcbiAgcmV0dXJuIGluYm94SWNvbjtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50VG9kYXlJY29uKCkge1xuICBjb25zdCB0b2RheUljb24gPSBuZXcgSW1hZ2UoKTtcbiAgdG9kYXlJY29uLnNyYyA9IENhbGVuZGFyRGF5SWNvbjtcbiAgdG9kYXlJY29uLmNsYXNzTGlzdC5hZGQoJ2ljb25zJyk7XG4gIHRvZGF5SWNvbi5jbGFzc0xpc3QuYWRkKCdmaWx0ZXItZWxlbWVudHMnKTtcbiAgcmV0dXJuIHRvZGF5SWNvbjtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50V2Vla0ljb24oKSB7XG4gIGNvbnN0IHdlZWtJY29uID0gbmV3IEltYWdlKCk7XG4gIHdlZWtJY29uLnNyYyA9IENhbGVuZGFyV2Vla0ljb247XG4gIHdlZWtJY29uLmNsYXNzTGlzdC5hZGQoJ2ljb25zJyk7XG4gIHdlZWtJY29uLmNsYXNzTGlzdC5hZGQoJ2ZpbHRlci1lbGVtZW50cycpO1xuICByZXR1cm4gd2Vla0ljb247XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudEZpbHRlck5hbWUobmFtZSkge1xuICBjb25zdCBmaWx0ZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBmaWx0ZXJOYW1lLnRleHRDb250ZW50ID0gbmFtZTtcbiAgZmlsdGVyTmFtZS5jbGFzc0xpc3QuYWRkKCdmaWx0ZXItZWxlbWVudHMnKTtcbiAgcmV0dXJuIGZpbHRlck5hbWU7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFNlY3Rpb25IZWFkZXIoaGVhZGluZykge1xuICBjb25zdCBzZWN0aW9uSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgc2VjdGlvbkhlYWRlci50ZXh0Q29udGVudCA9IGhlYWRpbmc7XG4gIHNlY3Rpb25IZWFkZXIuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbi1oZWFkZXInKTtcbiAgcmV0dXJuIHNlY3Rpb25IZWFkZXI7XG59XG5cbi8vIFNpZGViYXIgcHJvamVjdHMgc2VjdGlvblxuZnVuY3Rpb24gY29tcG9uZW50UHJvamVjdHNIZWFkaW5nKCkge1xuICBjb25zdCBwcm9qZWN0c0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBwcm9qZWN0c0hlYWRpbmcuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbi1oZWFkZXInKTtcbiAgcHJvamVjdHNIZWFkaW5nLnRleHRDb250ZW50ID0gJ1Byb2plY3RzJztcbiAgcmV0dXJuIHByb2plY3RzSGVhZGluZztcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50UHJvamVjdHMoKSB7XG4gIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByb2plY3RzLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzJyk7XG4gIHJldHVybiBwcm9qZWN0cztcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50UHJvamVjdCgpIHtcbiAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLWxpbmtzJyk7XG4gIHJldHVybiBwcm9qZWN0O1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRQcm9qZWN0SWNvbigpIHtcbiAgY29uc3QgcHJvamVjdEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgcHJvamVjdEljb24uc3JjID0gRm9sZGVySWNvbjtcbiAgcHJvamVjdEljb24uY2xhc3NMaXN0LmFkZCgnaWNvbnMnKTtcbiAgcHJvamVjdEljb24uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1lbGVtZW50cycpO1xuICByZXR1cm4gcHJvamVjdEljb247XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFByb2plY3RzSGVhZGVyKCkge1xuICBjb25zdCBwcm9qZWN0c0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgcHJvamVjdHNIZWFkZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMtaGVhZGVyJyk7XG4gIHJldHVybiBwcm9qZWN0c0hlYWRlcjtcbn1cblxuLy8gU2lkZWJhciBwcm9qZWN0IGNyZWF0aW9uIGZvcm1cbmZ1bmN0aW9uIGNvbXBvbmVudFByb2plY3RJbnB1dEZvcm0oKSB7XG4gIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBjb25zdCBwcm9qZWN0SW5wdXRGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGNvbnN0IHByb2plY3RTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBwcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWZvcm0nKTtcbiAgcHJvamVjdEZvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0LWZvcm0nKTtcbiAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdElucHV0RmllbGQpO1xuICBwcm9qZWN0SW5wdXRGaWVsZC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJvamVjdC1uYW1lJyk7XG4gIHByb2plY3RJbnB1dEZpZWxkLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdC1uYW1lJyk7XG4gIHByb2plY3RJbnB1dEZpZWxkLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIHByb2plY3RJbnB1dEZpZWxkLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZm9ybS1maWVsZCcpO1xuICBwcm9qZWN0SW5wdXRGaWVsZC5zZXRBdHRyaWJ1dGUoJ2F1dG9mb2N1cycsICdhdXRvZm9jdXMnKTtcbiAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdFN1Ym1pdCk7XG4gIHByb2plY3RTdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICBwcm9qZWN0U3VibWl0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdC1zdWJtaXQnKTtcbiAgcmV0dXJuIHByb2plY3RGb3JtO1xufVxuXG4vLyBTaWRlYmFyIHByb2plY3QgdGl0bGVcbmZ1bmN0aW9uIGNvbXBvbmVudFByb2plY3RUaXRsZSh0aXRsZSkge1xuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1lbGVtZW50cycpO1xuICByZXR1cm4gcHJvamVjdFRpdGxlO1xufVxuXG4vLyBTaWRlYmFyIGFkZCBwcm9qZWN0IGljb25cbmZ1bmN0aW9uIGNvbXBvbmVudEFkZFByb2plY3RJY29uKCkge1xuICBjb25zdCBhZGRQcm9qZWN0SWNvbiA9IG5ldyBJbWFnZSgpO1xuICBhZGRQcm9qZWN0SWNvbi5zcmMgPSBQbHVzSWNvbjtcbiAgYWRkUHJvamVjdEljb24uY2xhc3NMaXN0LmFkZCgnaWNvbnMnLCAncGx1cy1pY29uJyk7XG4gIHJldHVybiBhZGRQcm9qZWN0SWNvbjtcbn1cblxuLy8gVGFza3Mgc2VjdGlvblxuZnVuY3Rpb24gY29tcG9uZW50VGFza3NDYXJkKCkge1xuICBjb25zdCB0YXNrc0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGFza3NDYXJkLmNsYXNzTGlzdC5hZGQoJ3Rhc2tzLWNhcmQnKTtcbiAgcmV0dXJuIHRhc2tzQ2FyZDtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50VGFza3MoKSB7XG4gIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRhc2tzLmNsYXNzTGlzdC5hZGQoJ3Rhc2tzJyk7XG4gIHJldHVybiB0YXNrcztcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50VGFzaygpIHtcbiAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0YXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcbiAgcmV0dXJuIHRhc2s7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudENoZWNrYm94KCkge1xuICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpO1xuICByZXR1cm4gY2hlY2tib3g7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudENoZWNrYm94RmllbGQoKSB7XG4gIGNvbnN0IGNoZWNrYm94RmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjaGVja2JveEZpZWxkLnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICBjaGVja2JveEZpZWxkLmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94LWZpZWxkJyk7XG4gIHJldHVybiBjaGVja2JveEZpZWxkO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRDaGVja2JveExhYmVsKHByb2plY3RUaXRsZSkge1xuICBjb25zdCBjaGVja2JveExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgY2hlY2tib3hMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdjaGVja2JveCcpO1xuICBjaGVja2JveExhYmVsLmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94LWxhYmVsJyk7XG4gIGNoZWNrYm94TGFiZWwudGV4dENvbnRlbnQgPSBwcm9qZWN0VGl0bGU7XG4gIHJldHVybiBjaGVja2JveExhYmVsO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRUYXNrSW5mbygpIHtcbiAgY29uc3QgdGFza0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGFza0luZm8uY2xhc3NMaXN0LmFkZCgndGFzay1pbmZvJyk7XG4gIHJldHVybiB0YXNrSW5mbztcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50RWRpdFRvb2xzKCkge1xuICBjb25zdCBlZGl0VG9vbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZWRpdFRvb2xzLmNsYXNzTGlzdC5hZGQoJ2VkaXQtdG9vbHMnKTtcbiAgcmV0dXJuIGVkaXRUb29scztcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50RWRpdEljb24oKSB7XG4gIGNvbnN0IGVkaXRJY29uID0gbmV3IEltYWdlKCk7XG4gIGVkaXRJY29uLnNyYyA9IEVkaXRJY29uO1xuICBlZGl0SWNvbi5jbGFzc0xpc3QuYWRkKCdpY29ucycpO1xuICByZXR1cm4gZWRpdEljb247XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFRyYXNoSWNvbigpIHtcbiAgY29uc3QgdHJhc2hJY29uID0gbmV3IEltYWdlKCk7XG4gIHRyYXNoSWNvbi5zcmMgPSBUcmFzaEljb247XG4gIHRyYXNoSWNvbi5jbGFzc0xpc3QuYWRkKCdpY29ucycpO1xuICByZXR1cm4gdHJhc2hJY29uO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRBZGRUYXNrQnV0dG9uKCkge1xuICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGFkZFRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2stYnV0dG9uJyk7XG4gIGFkZFRhc2tCdXR0b24udGV4dENvbnRlbnQgPSAnQWRkIFRhc2snO1xuICByZXR1cm4gYWRkVGFza0J1dHRvbjtcbn1cblxuLy8gQWRkIFRhc2sgZm9ybVxuZnVuY3Rpb24gY29tcG9uZW50VGFza0Zvcm1Hcm91cCgpIHtcbiAgY29uc3QgZm9ybUdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvcm1Hcm91cC5jbGFzc0xpc3QuYWRkKCd0YXNrLWZvcm0tZ3JvdXAnKTtcbiAgcmV0dXJuIGZvcm1Hcm91cDtcbn1cblxuLy8gQWRkIFRhc2sgZm9ybSBjb21wb25lbnQgZm9yIGVhY2ggaW5wdXQgaXRlbSAodGFzaywgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5KVxuZnVuY3Rpb24gY29tcG9uZW50VGFza0l0ZW1Hcm91cCgpIHtcbiAgY29uc3QgaXRlbUdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGl0ZW1Hcm91cC5jbGFzc0xpc3QuYWRkKCd0YXNrLWl0ZW0tZ3JvdXAnKTtcbiAgcmV0dXJuIGl0ZW1Hcm91cDtcbn1cblxuLy8gQWRkIFRhc2sgZm9ybSBjb21wb25lbnQgZm9yIG11bHRpcGxlIGlucHV0IGl0ZW1zIHJvdyAoZGF0ZSwgcHJpb3JpdHkpXG5mdW5jdGlvbiBjb21wb25lbnRJbnB1dEdyb3VwKCkge1xuICBjb25zdCBpbnB1dEdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGlucHV0R3JvdXAuY2xhc3NMaXN0LmFkZCgnaW5wdXQtZ3JvdXAnKTtcbiAgcmV0dXJuIGlucHV0R3JvdXA7XG59XG5cbi8vIEFkZCBUYXNrIGZvcm0gY29tcG9uZW50IGZvciBuYXZpZ2F0aW9uIChiYWNrICYgc3VibWl0IGJ1dHRvbnMpXG5mdW5jdGlvbiBjb21wb25lbnROYXZpZ2F0aW9uR3JvdXAoKSB7XG4gIGNvbnN0IG5hdkdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5hdkdyb3VwLmNsYXNzTGlzdC5hZGQoJ25hdi1ncm91cCcpO1xuICByZXR1cm4gbmF2R3JvdXA7XG59XG5cbi8vIEFkZCBUYXNrIGZvcm0gcHJpb3JpdHkgc2VsZWN0aW9uXG5mdW5jdGlvbiBjb21wb25lbnRUYXNrUHJpb3JpdHkoKSB7XG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIHByaW9yaXR5LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3JpdHknKTtcbiAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKCduYW1lJywgJ3ByaW9yaXR5Jyk7XG4gIGNvbnN0IE9wdGlvbk9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBjb25zdCBPcHRpb25Ud28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgT3B0aW9uT25lLnZhbHVlID0gJ2xvdyc7XG4gIE9wdGlvbk9uZS50ZXh0Q29udGVudCA9ICdMb3cnO1xuICBPcHRpb25Ud28udmFsdWUgPSAnaGlnaCc7XG4gIE9wdGlvblR3by50ZXh0Q29udGVudCA9ICdIaWdoJztcbiAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQoT3B0aW9uT25lKTtcbiAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQoT3B0aW9uVHdvKTtcbiAgcmV0dXJuIHByaW9yaXR5O1xufVxuXG4vLyBBZGQgVGFzayBmb3JtIHByaW9yaXR5IGxhYmVsXG5mdW5jdGlvbiBjb21wb25lbnRUYXNrUHJpb3JpdHlMYWJlbCgpIHtcbiAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIHByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncHJpb3JpdHknKTtcbiAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eSc7XG4gIHByaW9yaXR5TGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1sYWJlbCcpO1xuICByZXR1cm4gcHJpb3JpdHlMYWJlbDtcbn1cblxuLy8gQWRkIFRhc2sgZm9ybSB0YXNrIG5hbWUgaGVhZGVyIGFuZCBpbnB1dFxuZnVuY3Rpb24gY29tcG9uZW50Rm9ybVRhc2tOYW1lKCkge1xuICBjb25zdCB0YXNrTmFtZUdyb3VwID0gY29tcG9uZW50VGFza0l0ZW1Hcm91cCgpO1xuICBjb25zdCB0YXNrTmFtZUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgdGFza05hbWVHcm91cC5hcHBlbmRDaGlsZChjb21wb25lbnRTZWN0aW9uSGVhZGVyKCdBZGQgVGFzaycpKTtcbiAgdGFza05hbWVHcm91cC5hcHBlbmRDaGlsZCh0YXNrTmFtZUZpZWxkKTtcbiAgdGFza05hbWVGaWVsZC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGFzay1uYW1lJyk7XG4gIHRhc2tOYW1lRmllbGQuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrLW5hbWUnKTtcbiAgdGFza05hbWVGaWVsZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICB0YXNrTmFtZUZpZWxkLmNsYXNzTGlzdC5hZGQoJ3Rhc2stbmFtZS1maWVsZCcpO1xuICByZXR1cm4gdGFza05hbWVHcm91cDtcbn1cblxuLy8gQWRkIFRhc2sgZm9ybSBkZXNjcmlwdGlvbiBpbnB1dCBmaWVsZFxuZnVuY3Rpb24gY29tcG9uZW50Rm9ybVRhc2tEZXNjcmlwdGlvbigpIHtcbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICB0YXNrRGVzY3JpcHRpb25GaWVsZC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGFzay1kZXNjcmlwdGlvbicpO1xuICB0YXNrRGVzY3JpcHRpb25GaWVsZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2stZGVzY3JpcHRpb24nKTtcbiAgdGFza0Rlc2NyaXB0aW9uRmllbGQuY2xhc3NMaXN0LmFkZCgndGFzay1kZXNjcmlwdGlvbi1maWVsZCcpO1xuICByZXR1cm4gdGFza0Rlc2NyaXB0aW9uRmllbGQ7XG59XG5cbi8vIEFkZCBUYXNrIGZvcm0gZGVzY3JpcHRpb24gbGFiZWxcbmZ1bmN0aW9uIGNvbXBvbmVudEZvcm1UYXNrRGVzY3JpcHRpb25MYWJlbCgpIHtcbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICB0YXNrRGVzY3JpcHRpb25MYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWxhYmVsJyk7XG4gIHRhc2tEZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Rhc2stZGVzY3JpcHRpb24nKTtcbiAgdGFza0Rlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb24nO1xuICByZXR1cm4gdGFza0Rlc2NyaXB0aW9uTGFiZWw7XG59XG5cbi8vIEFkZCBUYXNrIGZvcm0gZHVlIGRhdGUgaW5wdXRcbmZ1bmN0aW9uIGNvbXBvbmVudEZvcm1UYXNrRHVlRGF0ZSgpIHtcbiAgY29uc3QgdGFza0R1ZURhdGVGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHRhc2tEdWVEYXRlRmllbGQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2R1ZS1kYXRlJyk7XG4gIHRhc2tEdWVEYXRlRmllbGQuc2V0QXR0cmlidXRlKCdpZCcsICdkdWUtZGF0ZScpO1xuICB0YXNrRHVlRGF0ZUZpZWxkLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gIHRhc2tEdWVEYXRlRmllbGQuY2xhc3NMaXN0LmFkZCgnZHVlLWRhdGUtZmllbGQnKTtcbiAgcmV0dXJuIHRhc2tEdWVEYXRlRmllbGQ7XG59XG5cbi8vIEFkZCBUYXNrIGZvcm0gZHVlIGRhdGUgbGFiZWxcbmZ1bmN0aW9uIGNvbXBvbmVudEZvcm1UYXNrRHVlRGF0ZUxhYmVsKCkge1xuICBjb25zdCB0YXNrRHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgdGFza0R1ZURhdGVMYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWxhYmVsJyk7XG4gIHRhc2tEdWVEYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZHVlLWRhdGUnKTtcbiAgdGFza0R1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEdWUgRGF0ZSc7XG4gIHJldHVybiB0YXNrRHVlRGF0ZUxhYmVsO1xufVxuXG4vLyBBZGQgVGFzayBmb3JtIHN1Ym1pdCBidXR0b25cbmZ1bmN0aW9uIGNvbXBvbmVudEZvcm1UYXNrU3VibWl0KCkge1xuICBjb25zdCB0YXNrU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgdGFza1N1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gIHRhc2tTdWJtaXQuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrLXN1Ym1pdCcpO1xuICB0YXNrU3VibWl0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnQUREJyk7XG4gIHJldHVybiB0YXNrU3VibWl0O1xufVxuXG4vLyBBZGQgVGFzayBmb3JtIGJhY2sgYnV0dG9uXG5mdW5jdGlvbiBjb21wb25lbnRGb3JtVGFza0JhY2tCdXR0b24oKSB7XG4gIGNvbnN0IGJhY2tJY29uID0gbmV3IEltYWdlKCk7XG4gIGJhY2tJY29uLnNyYyA9IExlZnRTb2xpZDtcbiAgYmFja0ljb24uY2xhc3NMaXN0LmFkZCgnaWNvbnMnLCAnYmFjay1pY29uJyk7XG4gIHJldHVybiBiYWNrSWNvbjtcbn1cblxuLy8gRGlzcGxheSB0YXNrXG5mdW5jdGlvbiBkaXNwbGF5VGFzayh0YXNrTmFtZSkge1xuICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3Rhc2tzJyk7XG4gIGNvbnN0IHRhc2sgPSBjb21wb25lbnRUYXNrKCk7XG4gIGNvbnN0IHRhc2tJbmZvID0gY29tcG9uZW50VGFza0luZm8oKTtcbiAgY29uc3QgY2hlY2tib3ggPSBjb21wb25lbnRDaGVja2JveCgpO1xuICBjb25zdCBlZGl0VG9vbHMgPSBjb21wb25lbnRFZGl0VG9vbHMoKTtcblxuICB0YXNrcy5hcHBlbmRDaGlsZCh0YXNrKTtcbiAgdGFzay5hcHBlbmRDaGlsZCh0YXNrSW5mbyk7XG4gIHRhc2tJbmZvLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgY2hlY2tib3guYXBwZW5kQ2hpbGQoY29tcG9uZW50Q2hlY2tib3hGaWVsZCgpKTtcbiAgY2hlY2tib3guYXBwZW5kQ2hpbGQoY29tcG9uZW50Q2hlY2tib3hMYWJlbCh0YXNrTmFtZSkpO1xuICB0YXNrLmFwcGVuZENoaWxkKGVkaXRUb29scyk7XG4gIGVkaXRUb29scy5hcHBlbmRDaGlsZChjb21wb25lbnRFZGl0SWNvbigpKTtcbiAgZWRpdFRvb2xzLmFwcGVuZENoaWxkKGNvbXBvbmVudFRyYXNoSWNvbigpKTtcbn1cblxuLy8gR2V0IHRhc2sgaW5mb3JtYXRpb24gZnJvbSBBZGQgVGFzayBmb3JtXG5mdW5jdGlvbiBnZXRUYXNrSW5mb3JtYXRpb24oKSB7XG4gIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLW5hbWUnKS52YWx1ZTtcbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlLWRhdGUnKS52YWx1ZTtcbiAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JykudmFsdWU7XG5cbiAgY29uc3QgdGFzayA9IG5ldyBUYXNrKHRhc2tUaXRsZSwgdGFza0Rlc2NyaXB0aW9uLCB0YXNrRGF0ZSwgdGFza1ByaW9yaXR5KTtcbiAgZGlzcGxheVRhc2sodGFzay50aXRsZSk7XG4gIGNvbnNvbGUubG9nKHRhc2spO1xufVxuXG4vLyBGdWxsIEFkZCBUYXNrIGlucHV0IGZvcm1cbmV4cG9ydCBmdW5jdGlvbiBjb21wb25lbnRUYXNrSW5wdXRGb3JtKCkge1xuICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgY29uc3QgdGFza0Zvcm1Hcm91cCA9IGNvbXBvbmVudFRhc2tGb3JtR3JvdXAoKTtcbiAgY29uc3QgdGFza05hbWVHcm91cCA9IGNvbXBvbmVudFRhc2tJdGVtR3JvdXAoKTtcbiAgY29uc3QgZGVzY3JpcHRpb25Hcm91cCA9IGNvbXBvbmVudFRhc2tJdGVtR3JvdXAoKTtcbiAgY29uc3QgaW5wdXRHcm91cCA9IGNvbXBvbmVudElucHV0R3JvdXAoKTtcbiAgY29uc3QgdGFza0R1ZURhdGVHcm91cCA9IGNvbXBvbmVudFRhc2tJdGVtR3JvdXAoKTtcbiAgY29uc3QgdGFza1ByaW9yaXR5R3JvdXAgPSBjb21wb25lbnRUYXNrSXRlbUdyb3VwKCk7XG4gIGNvbnN0IG5hdmlnYXRpb25Hcm91cCA9IGNvbXBvbmVudE5hdmlnYXRpb25Hcm91cCgpO1xuXG4gIHRhc2tGb3JtLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZm9ybScpO1xuICB0YXNrRm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2stZm9ybScpO1xuICB0YXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrRm9ybUdyb3VwKTtcblxuICAvLyBBcHBlbmQgdGFzayBuYW1lIGlucHV0IGFuZCBoZWFkZXJcbiAgdGFza0Zvcm1Hcm91cC5hcHBlbmRDaGlsZCh0YXNrTmFtZUdyb3VwKTtcbiAgdGFza05hbWVHcm91cC5hcHBlbmRDaGlsZChjb21wb25lbnRGb3JtVGFza05hbWUoKSk7XG5cbiAgLy8gQXBwZW5kIHRhc2sgZGVzY3JpcHRpb24gaW5wdXQgYW5kIGxhYmVsXG4gIHRhc2tGb3JtR3JvdXAuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25Hcm91cCk7XG4gIGRlc2NyaXB0aW9uR3JvdXAuYXBwZW5kQ2hpbGQoY29tcG9uZW50Rm9ybVRhc2tEZXNjcmlwdGlvbkxhYmVsKCkpO1xuICBkZXNjcmlwdGlvbkdyb3VwLmFwcGVuZENoaWxkKGNvbXBvbmVudEZvcm1UYXNrRGVzY3JpcHRpb24oKSk7XG5cbiAgLy8gQWRkIHRhc2sgZHVlIGRhdGUgaW5wdXQgYW5kIGxhYmVsXG4gIHRhc2tGb3JtR3JvdXAuYXBwZW5kQ2hpbGQoaW5wdXRHcm91cCk7XG4gIGlucHV0R3JvdXAuYXBwZW5kQ2hpbGQodGFza0R1ZURhdGVHcm91cCk7XG4gIHRhc2tEdWVEYXRlR3JvdXAuYXBwZW5kQ2hpbGQoY29tcG9uZW50Rm9ybVRhc2tEdWVEYXRlTGFiZWwoKSk7XG4gIHRhc2tEdWVEYXRlR3JvdXAuYXBwZW5kQ2hpbGQoY29tcG9uZW50Rm9ybVRhc2tEdWVEYXRlKCkpO1xuXG4gIC8vIEFkZCB0YXNrIHByaW9yaXR5IHNlbGVjdGlvbiBhbmQgbGFiZWxcbiAgaW5wdXRHcm91cC5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHlHcm91cCk7XG4gIHRhc2tQcmlvcml0eUdyb3VwLmFwcGVuZENoaWxkKGNvbXBvbmVudFRhc2tQcmlvcml0eUxhYmVsKCkpO1xuICB0YXNrUHJpb3JpdHlHcm91cC5hcHBlbmRDaGlsZChjb21wb25lbnRUYXNrUHJpb3JpdHkoKSk7XG5cbiAgLy8gQWRkIG5hdmlnYXRpb24gKGJhY2sgYnV0dG9uIGFuZCBzdWJtaXQgZm9ybSBidXR0b24pXG4gIHRhc2tGb3JtLmFwcGVuZENoaWxkKG5hdmlnYXRpb25Hcm91cCk7XG4gIG5hdmlnYXRpb25Hcm91cC5hcHBlbmRDaGlsZChjb21wb25lbnRGb3JtVGFza0JhY2tCdXR0b24oKSk7XG4gIG5hdmlnYXRpb25Hcm91cC5hcHBlbmRDaGlsZChjb21wb25lbnRGb3JtVGFza1N1Ym1pdCgpKTtcblxuICAvLyBFdmVudCBsaXN0ZW5lciBmb3IgdGFzayBmb3JtXG4gIHRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGdldFRhc2tJbmZvcm1hdGlvbigpO1xuICB9KTtcblxuICByZXR1cm4gdGFza0Zvcm07XG59XG5cbi8vIEluaXRpYWxpemUgcGFnZVxuZXhwb3J0IGZ1bmN0aW9uIGluaXQoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGNvbXBvbmVudENvbnRhaW5lcigpO1xuICBjb25zdCBoZWFkZXIgPSBjb21wb25lbnRIZWFkZXIoKTtcbiAgY29uc3QgY29udGVudCA9IGNvbXBvbmVudENvbnRlbnQoKTtcbiAgY29uc3Qgc2lkZWJhciA9IGNvbXBvbmVudFNpZGViYXIoKTtcbiAgY29uc3QgZmlsdGVycyA9IGNvbXBvbmVudEZpbHRlcnMoKTtcbiAgY29uc3QgZmlsdGVyQWxsID0gY29tcG9uZW50RmlsdGVyKCk7XG4gIGNvbnN0IGZpbHRlclRvZGF5ID0gY29tcG9uZW50RmlsdGVyKCk7XG4gIGNvbnN0IGZpbHRlcldlZWsgPSBjb21wb25lbnRGaWx0ZXIoKTtcbiAgY29uc3QgcHJvamVjdHNIZWFkZXIgPSBjb21wb25lbnRQcm9qZWN0c0hlYWRlcigpO1xuICBjb25zdCBwcm9qZWN0cyA9IGNvbXBvbmVudFByb2plY3RzKCk7XG4gIGNvbnN0IHByb2plY3QgPSBjb21wb25lbnRQcm9qZWN0KCk7XG4gIGNvbnN0IHRhc2tzQ2FyZCA9IGNvbXBvbmVudFRhc2tzQ2FyZCgpO1xuICBjb25zdCB0YXNrcyA9IGNvbXBvbmVudFRhc2tzKCk7XG4gIGNvbnN0IHRhc2sgPSBjb21wb25lbnRUYXNrKCk7XG4gIGNvbnN0IHRhc2tJbmZvID0gY29tcG9uZW50VGFza0luZm8oKTtcbiAgY29uc3QgZWRpdFRvb2xzID0gY29tcG9uZW50RWRpdFRvb2xzKCk7XG4gIGNvbnN0IGNoZWNrYm94ID0gY29tcG9uZW50Q2hlY2tib3goKTtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoY29tcG9uZW50VGl0bGUoKSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChzaWRlYmFyKTtcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChmaWx0ZXJzKTtcbiAgZmlsdGVycy5hcHBlbmRDaGlsZChjb21wb25lbnRTZWN0aW9uSGVhZGVyKCdGaWx0ZXJzJykpO1xuICBmaWx0ZXJzLmFwcGVuZENoaWxkKGZpbHRlckFsbCk7XG4gIGZpbHRlckFsbC5hcHBlbmRDaGlsZChjb21wb25lbnRJbmJveEljb24oKSk7XG4gIGZpbHRlckFsbC5hcHBlbmRDaGlsZChjb21wb25lbnRGaWx0ZXJOYW1lKCdBbGwnKSk7XG4gIGZpbHRlcnMuYXBwZW5kQ2hpbGQoZmlsdGVyVG9kYXkpO1xuICBmaWx0ZXJUb2RheS5hcHBlbmRDaGlsZChjb21wb25lbnRUb2RheUljb24oKSk7XG4gIGZpbHRlclRvZGF5LmFwcGVuZENoaWxkKGNvbXBvbmVudEZpbHRlck5hbWUoJ1RvZGF5JykpO1xuICBmaWx0ZXJzLmFwcGVuZENoaWxkKGZpbHRlcldlZWspO1xuICBmaWx0ZXJXZWVrLmFwcGVuZENoaWxkKGNvbXBvbmVudFdlZWtJY29uKCkpO1xuICBmaWx0ZXJXZWVrLmFwcGVuZENoaWxkKGNvbXBvbmVudEZpbHRlck5hbWUoJ1dlZWsnKSk7XG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdHMpO1xuICBwcm9qZWN0cy5hcHBlbmRDaGlsZChwcm9qZWN0c0hlYWRlcik7XG4gIHByb2plY3RzSGVhZGVyLmFwcGVuZENoaWxkKGNvbXBvbmVudFByb2plY3RzSGVhZGluZygpKTtcbiAgcHJvamVjdHNIZWFkZXIuYXBwZW5kQ2hpbGQoY29tcG9uZW50QWRkUHJvamVjdEljb24oKSk7XG4gIHByb2plY3RzLmFwcGVuZENoaWxkKGNvbXBvbmVudFByb2plY3RJbnB1dEZvcm0oKSk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXN1Ym1pdCcpLmhpZGRlbiA9IHRydWU7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWZvcm0nKS5oaWRkZW4gPSB0cnVlO1xuICBwcm9qZWN0cy5hcHBlbmRDaGlsZChwcm9qZWN0KTtcbiAgcHJvamVjdC5hcHBlbmRDaGlsZChjb21wb25lbnRQcm9qZWN0SWNvbigpKTtcbiAgcHJvamVjdC5hcHBlbmRDaGlsZChjb21wb25lbnRQcm9qZWN0VGl0bGUoJ1ByaW1hcnknKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza3NDYXJkKTtcbiAgdGFza3NDYXJkLmFwcGVuZENoaWxkKHRhc2tzKTtcbiAgdGFza3MuYXBwZW5kQ2hpbGQoY29tcG9uZW50U2VjdGlvbkhlYWRlcignVGFza3MnKSk7XG4gIHRhc2tzLmFwcGVuZENoaWxkKHRhc2spO1xuICB0YXNrLmFwcGVuZENoaWxkKHRhc2tJbmZvKTtcbiAgdGFza0luZm8uYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICBjaGVja2JveC5hcHBlbmRDaGlsZChjb21wb25lbnRDaGVja2JveEZpZWxkKCkpO1xuICBjaGVja2JveC5hcHBlbmRDaGlsZChjb21wb25lbnRDaGVja2JveExhYmVsKCdGaW5pc2ggcHJvamVjdCcpKTtcbiAgdGFzay5hcHBlbmRDaGlsZChlZGl0VG9vbHMpO1xuICBlZGl0VG9vbHMuYXBwZW5kQ2hpbGQoY29tcG9uZW50RWRpdEljb24oKSk7XG4gIGVkaXRUb29scy5hcHBlbmRDaGlsZChjb21wb25lbnRUcmFzaEljb24oKSk7XG4gIHRhc2tzQ2FyZC5hcHBlbmRDaGlsZChjb21wb25lbnRBZGRUYXNrQnV0dG9uKCkpO1xufVxuXG4vLyBHZXQgcHJvamVjdCBmb3JtXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvamVjdEZvcm0oKSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtJyk7XG59XG5cbi8vIEFkZCBwcm9qZWN0IHRvIHBhZ2VcbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qZWN0VG9ET00obmV3UHJvamVjdCkge1xuICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xuICBjb25zdCBwcm9qZWN0ID0gY29tcG9uZW50UHJvamVjdCgpO1xuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBjb21wb25lbnRQcm9qZWN0VGl0bGUobmV3UHJvamVjdCk7XG4gIHByb2plY3RzLmluc2VydEJlZm9yZShwcm9qZWN0LCBwcm9qZWN0cy5jaGlsZHJlblsyXSk7XG4gIHByb2plY3QuYXBwZW5kQ2hpbGQoY29tcG9uZW50UHJvamVjdEljb24oKSk7XG4gIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcblxuICBnZXRQcm9qZWN0Rm9ybSgpLnJlc2V0KCk7XG5cbiAgcmV0dXJuIHByb2plY3RzO1xufVxuXG4vLyBJZiBwcm9qZWN0IGZvcm0gaXMgaGlkZGVuIGlzIHRydWUsIHRoZW4gdGhhdCBtZWFucyBwcm9qZWN0IGZvcm1cbi8vIGlzIGNvbGxhcHNlZC4gVGhpcyBmdW5jdGlvbiB3b3VsZCB0aGVuIHJldHVybiBmYWxzZSxcbi8vIGJlY2F1c2UgaXQgaXMgZmFsc2UgdGhhdCB0aGUgcHJvamVjdCBmb3JtIGlzIGV4cGFuZGVkLlxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RGb3JtRXhwYW5kZWQoKSB7XG4gIHJldHVybiAhZ2V0UHJvamVjdEZvcm0oKS5oaWRkZW47XG59XG5cbi8vIEV4cGFuZCBvciBjb2xsYXBzZSB0aGUgcHJvamVjdCBmb3JtIGJhc2VkIG9uIHBhc3NlZCBpbiB0cnVlL2ZhbHNlIHZhbHVlXG5leHBvcnQgZnVuY3Rpb24gZXhwYW5kQ3JlYXRlUHJvamVjdEZvcm0oZXhwYW5kKSB7XG4gIGdldFByb2plY3RGb3JtKCkuaGlkZGVuID0gIWV4cGFuZDtcbn1cblxuLy8gUm90YXRlIGFkZCBwcm9qZWN0IGljb24gd2hlbiBjYWxsZWRcbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVBZGRQcm9qZWN0SWNvbigpIHtcbiAgY29uc3QgYWRkUHJvamVjdEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGx1cy1pY29uJyk7XG4gIGlmICghYWRkUHJvamVjdEljb24uY2xhc3NMaXN0LmNvbnRhaW5zKCdyb3RhdGUnKSkge1xuICAgIGFkZFByb2plY3RJY29uLmNsYXNzTGlzdC5hZGQoJ3JvdGF0ZScpO1xuICB9IGVsc2UgaWYgKGFkZFByb2plY3RJY29uLmNsYXNzTGlzdC5jb250YWlucygncm90YXRlJykpIHtcbiAgICBhZGRQcm9qZWN0SWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdyb3RhdGUnKTtcbiAgfVxufVxuXG4vLyBSZW1vdmUgYWN0aXZlIGNsYXNzIGZyb20gYW55IHByZXZpb3VzbHkgYWN0aXZlIGVsZW1lbnQgaW4gc2lkZWJhclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUFjdGl2ZUNsYXNzKCkge1xuICBjb25zdCBzaWRlYmFyTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2lkZWJhci1saW5rcycpO1xuICBzaWRlYmFyTGlua3MuZm9yRWFjaCgoc2lkZWJhckxpbmspID0+IHtcbiAgICBzaWRlYmFyTGluay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgfSk7XG59XG5cbi8vIEhpZ2hsaWdodCBjdXJyZW50bHkgc2VsZWN0ZWQgc2lkZWJhciBvcHRpb24gYW5kIHJlbW92ZSBhbnkgaW5hY3RpdmUgaGlnaGxpZ2h0ZWQgb3B0aW9uc1xuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVNpZGViYXJIaWdobGlnaHQoZWxlbWVudCkge1xuICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3NpZGViYXItbGlua3MnKSkge1xuICAgIHJlbW92ZUFjdGl2ZUNsYXNzKCk7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgfSBlbHNlIGlmIChcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZmlsdGVyLWVsZW1lbnRzJykgfHxcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdC1lbGVtZW50cycpXG4gICkge1xuICAgIHJlbW92ZUFjdGl2ZUNsYXNzKCk7XG4gICAgZWxlbWVudC5wYXJlbnROb2RlLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBpbml0LFxuICBhZGRQcm9qZWN0VG9ET00sXG4gIGdldFByb2plY3RGb3JtLFxuICBwcm9qZWN0Rm9ybUV4cGFuZGVkLFxuICBleHBhbmRDcmVhdGVQcm9qZWN0Rm9ybSxcbiAgcm90YXRlQWRkUHJvamVjdEljb24sXG4gIHJlbW92ZUFjdGl2ZUNsYXNzLFxuICBjb21wb25lbnRUYXNrSW5wdXRGb3JtLFxuICB0b2dnbGVTaWRlYmFySGlnaGxpZ2h0LFxufSBmcm9tICcuL2RvbS1tYW5pcHVsYXRpb24nO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgeyBnZXRQcm9qZWN0cywgYWRkUHJvamVjdCB9IGZyb20gJy4vc2l0ZS1zdG9yYWdlJztcblxuaW5pdCgpO1xuXG5jb25zdCBwcmltYXJ5VGFza3MgPSBbXG4gIG5ldyBUYXNrKFxuICAgICdSZXNwb25kIHRvIGVtYWlscycsXG4gICAgJ0NhdGNoIHVwIG9uIHBlcnNvbmFsIGFuZCB3b3JrIGVtYWlscycsXG4gICAgJzMvNC8yMDIzJyxcbiAgICAxXG4gICksXG5dO1xuXG5jb25zdCBwcmltYXJ5UHJvamVjdCA9IG5ldyBQcm9qZWN0KCdQcmltYXJ5IFByb2plY3QnLCBwcmltYXJ5VGFza3MpO1xuY29uc3Qgc2Vjb25kYXJ5UHJvamVjdCA9IG5ldyBQcm9qZWN0KCdTZWNvbmRhcnkgUHJvamVjdCcpO1xuXG5hZGRQcm9qZWN0KHByaW1hcnlQcm9qZWN0KTtcbmFkZFByb2plY3Qoc2Vjb25kYXJ5UHJvamVjdCk7XG5cbmNvbnN0IHRhc2tUd28gPSBuZXcgVGFzayhcbiAgJ01lYWwgcGxhbm5pbmcnLFxuICAnUGxhbiBtZWFscyBmb3IgbmV4dCB3ZWVrJyxcbiAgJzMvNC8yMDIzJyxcbiAgMlxuKTtcblxucHJpbWFyeVByb2plY3QuYWRkVGFzayh0YXNrVHdvKTtcbmNvbnNvbGUubG9nKGdldFByb2plY3RzKCkpO1xuXG4vLyBMaXN0ZW4gdG8ga2V5cHJlc3Mgb24gdGhlIHByb2plY3QgZm9ybVxuY29uc3QgcHJvamVjdEZvcm0gPSBnZXRQcm9qZWN0Rm9ybSgpO1xucHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZSkgPT4ge1xuICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAvLyBDb2xsYXBzZSBwcm9qZWN0IGlucHV0IGZvcm1cbiAgICBleHBhbmRDcmVhdGVQcm9qZWN0Rm9ybShmYWxzZSk7XG5cbiAgICAvLyBHZXQgcHJvamVjdCBuYW1lIGZyb20gZm9ybSB2YWx1ZVxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtbmFtZScpLnZhbHVlO1xuXG4gICAgLy8gQ3JlYXRlIG5ldyBwcm9qZWN0IHdpdGggcHJvamVjdCBuYW1lXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3ROYW1lKTtcblxuICAgIC8vIEFkZCBwcm9qZWN0IHRvIHNpdGUgc3RvcmFnZVxuICAgIGFkZFByb2plY3QobmV3UHJvamVjdCk7XG5cbiAgICAvLyBBZGQgcHJvamVjdCBuYW1lIHRvIHNpZGViYXJcbiAgICBhZGRQcm9qZWN0VG9ET00obmV3UHJvamVjdC5nZXRUaXRsZSgpKTtcblxuICAgIC8vIFJlbW92ZSBhY3RpdmUgY2xhc3MgKGJhY2tncm91bmQgY29sb3IpIGZyb20gYW55IGFjdGl2ZSBlbGVtZW50XG4gICAgcmVtb3ZlQWN0aXZlQ2xhc3MoKTtcblxuICAgIC8vIE1ha2UgY3VycmVudCBwcm9qZWN0IGFjdGl2ZVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0JykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgICAvLyBDaGFuZ2UgeCB0byArIGZvciBhZGQtcHJvamVjdCBpY29uXG4gICAgcm90YXRlQWRkUHJvamVjdEljb24oKTtcbiAgfVxufSk7XG5cbmNvbnN0IHNob3dQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbHVzLWljb24nKTtcbnNob3dQcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgLy8gRXhwYW5kIG9yIGNvbGxhcHNlIHByb2plY3QgZm9ybSBiYXNlZCBvbiBjdXJyZW50IHN0YXRlIHdoZW4gcHJlc3NpbmcgdGhlIHBsdXMgaWNvbiBpbWFnZVxuICBleHBhbmRDcmVhdGVQcm9qZWN0Rm9ybSghcHJvamVjdEZvcm1FeHBhbmRlZCgpKTtcblxuICAvLyBSb3RhdGUgYmV0d2VlbiArIGFuZCB4IGZvciBhZGQtcHJvamVjdCBpY29uIHdoZW4gY2xpY2tlZFxuICByb3RhdGVBZGRQcm9qZWN0SWNvbigpO1xufSk7XG5cbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2lkZWJhcicpO1xuc2lkZWJhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIC8vIEhpZ2hsaWdodCBjdXJyZW50bHkgc2VsZWN0ZWQgc2lkZWJhciBvcHRpb24gYW5kIHJlbW92ZSBhbnkgaW5hY3RpdmUgaGlnaGxpZ2h0ZWQgb3B0aW9uc1xuICB0b2dnbGVTaWRlYmFySGlnaGxpZ2h0KGUudGFyZ2V0KTtcbn0pO1xuXG4vLyBTaG93IHRhc2sgaW5wdXQgZm9ybSB3aGVuICdBZGQgVGFzaycgYnV0dG9uIGlzIGNsaWNrZWRcbmNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stYnV0dG9uJyk7XG5jb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcy1jYXJkJyk7XG5hZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICB0YXNrc0NvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oY29tcG9uZW50VGFza0lucHV0Rm9ybSgpKTtcbn0pO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCB0YXNrcyA9IFtdKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMudGFza3MgPSB0YXNrcztcbiAgfVxuXG4gIGFkZFRhc2sodGFzaykge1xuICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTtcbiAgfVxuXG4gIGdldFRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICB9XG59XG4iLCIvLyBjcmVhdGUgbGlzdCBvZiBwcm9qZWN0c1xuLy8gbWV0aG9kcyB0byBhZGQgcHJvamVjdHMgYW5kIGdldCBwcm9qZWN0c1xuXG5jb25zdCBwcm9qZWN0cyA9IFtdO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvamVjdHMoKSB7XG4gIHJldHVybiBwcm9qZWN0cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3QocHJvamVjdCkge1xuICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=