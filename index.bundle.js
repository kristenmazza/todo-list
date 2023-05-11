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
___CSS_LOADER_EXPORT___.push([module.id, "html,\nbody {\n  margin: 0px;\n  padding: 0px;\n  font-family: 'Roboto', 'Calibri', 'Arial';\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background-color: rgb(34, 40, 49);\n  color: rgb(193, 224, 225);\n}\n\n.icons {\n  height: 20px;\n  width: auto;\n  filter: invert(100%) sepia(76%) saturate(556%) hue-rotate(153deg)\n    brightness(90%) contrast(93%);\n}\n\n.plus-icon {\n  transition: all 0.3s;\n}\n\n.plus-icon:hover {\n  cursor: pointer;\n  height: 23px;\n  width: auto;\n}\n\n.edit-tools > .icons:hover,\n.nav-group > .icons:hover,\n.input-group > .icons:hover {\n  transform: scale(1.15);\n  transition: all 0.3s;\n  cursor: pointer;\n}\n\n.rotate {\n  transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  -webkit-transform: rotate(45deg);\n  -moz-transform: rotate(45deg);\n}\n\n.container {\n  padding: 0px clamp(1rem, 20%, 50vw);\n}\n\nh1 {\n  font-size: 4rem;\n  background: -webkit-linear-gradient(rgb(193, 224, 221), rgb(0, 173, 181));\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.section-header,\n.form-label {\n  color: rgb(119, 197, 201);\n  font-size: 1.5rem;\n  margin-top: 0.83em;\n  margin-bottom: 0.5em;\n  font-weight: bold;\n  color: rgb(119, 197, 201);\n}\n\n.content {\n  display: flex;\n  min-height: 60vh;\n}\n\n.sidebar {\n  flex-basis: clamp(24ch, 15%, 50ch);\n  padding: 1rem 2rem;\n  background-color: rgb(57, 62, 70);\n  border-radius: 20px;\n  min-height: 60vh;\n}\n\n.filter,\n.project {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-wrap: nowrap;\n  padding: 0px 10px;\n  margin: 5px 0px;\n  height: 2.3rem;\n}\n\n.filter:hover,\n.project:hover {\n  cursor: pointer;\n}\n\n.active {\n  background-color: rgba(80, 85, 92, 0.5);\n  border-radius: 8px;\n}\n\n.projects-header {\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 2rem;\n  padding-bottom: 10px;\n  height: 4ch;\n  gap: 1rem;\n}\n\n.projects input[type='text'] {\n  border-radius: 8px;\n  background-color: rgba(80, 85, 92, 0.5);\n  outline: none;\n  border: none;\n  padding: 8px;\n  color: rgb(235, 235, 235);\n  font-size: 1rem;\n  font-family: inherit;\n  margin: 10px 10px 10px 0px;\n  width: calc(100% - 15px);\n}\n\n.project {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.tasks-card {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex: 1 1 300px;\n  margin-left: 30px;\n  padding: 1rem 2rem;\n  background-color: rgb(57, 62, 70);\n  border-radius: 20px;\n  min-height: 100%;\n}\n\n.task {\n  background-color: rgba(80, 85, 92, 0.5);\n  padding: 10px;\n  margin-bottom: 1rem;\n  border-radius: 5px;\n  border-radius: 8px;\n}\n\n.permanent-task-display {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 8px;\n}\n\n.optional-task-display {\n  display: none;\n  gap: 8px;\n  justify-content: space-between;\n  border-top: 0.5px solid rgb(176, 183, 183);\n  padding-top: 1rem;\n  margin-top: 1rem;\n}\n\n.task-info-column {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  gap: 5px;\n}\n\n.task-info {\n  display: flex;\n  align-items: center;\n  color: rgb(214, 241, 241);\n}\n\n.edit-tools {\n  display: flex;\n  gap: 1rem;\n}\n\n.checkbox {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n}\n\ninput[type='checkbox'] {\n  -webkit-appearance: none;\n  appearance: none;\n  margin: 0;\n  font: inherit;\n  color: currentColor;\n  width: 1.15em;\n  height: 1.15em;\n  border: 0.12em solid currentColor;\n  border-radius: 0.15em;\n  transform: translateY(-0.075em);\n  display: grid;\n  place-content: center;\n  cursor: pointer;\n}\n\n.checkbox-label {\n  flex: 1;\n}\n\n.checkbox-label:hover {\n  cursor: pointer;\n}\n\ninput[type='checkbox']::before {\n  content: '';\n  width: 0.65em;\n  height: 0.65em;\n  transform: scale(0);\n  transition: 120ms transform ease-in-out;\n  box-shadow: inset 1em 1em var(--form-control-color);\n  background-color: CanvasText;\n  transform-origin: bottom left;\n  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\n}\n\ninput[type='checkbox']:checked::before {\n  transform: scale(1);\n  background-color: rgb(193, 224, 225);\n}\n\ninput[type='checkbox']:checked + label {\n  text-decoration: line-through;\n  color: rgb(193, 224, 225);\n}\n\n.expanded-task-span-bold {\n  font-weight: 800;\n  font-size: 0.9rem;\n}\n\n.expanded-task-span {\n  font-weight: 400;\n  font-size: 0.9rem;\n}\n\n.add-task-button,\n#task-submit {\n  width: 130px;\n  border: none;\n  background-image: linear-gradient(\n    to right,\n    rgb(0, 160, 169) 0%,\n    rgb(0, 140, 147) 51%,\n    rgb(83, 96, 96) 100%\n  );\n  margin: 10px;\n  padding: 10px 15px;\n  font-size: 1.1rem;\n  letter-spacing: 1px;\n  text-align: center;\n  text-transform: uppercase;\n  transition: 0.5s;\n  background-size: 200% auto;\n  color: rgb(226, 235, 235);\n  font-weight: bold;\n  border-radius: 20px;\n  display: block;\n  align-self: flex-end;\n}\n\n.add-task-button:hover,\n#task-submit:hover {\n  transform: scale(1.05);\n  text-decoration: none;\n}\n\n.task-form {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  min-height: 100%;\n}\n\n.task-form-group {\n  display: flex;\n  flex-direction: column;\n}\n\n.task-item-group {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n\n.input-group,\n.nav-group {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.task-item-group input[type='text'],\ninput[type='date'],\nselect,\ntextarea {\n  border-radius: 8px;\n  background-color: rgba(80, 85, 92, 0.5);\n  outline: none;\n  border: none;\n  padding: 8px;\n  color: rgb(235, 235, 235);\n  font-size: 1rem;\n  font-family: inherit;\n  margin: 10px 10px 10px 0px;\n}\n\n#task-description {\n  height: 50px;\n}\n\n::-webkit-calendar-picker-indicator {\n  filter: invert(1);\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;EAEE,WAAW;EACX,YAAY;EACZ,yCAAyC;EACzC,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,iCAAiC;EACjC,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,WAAW;EACX;iCAC+B;AACjC;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,WAAW;AACb;;AAEA;;;EAGE,sBAAsB;EACtB,oBAAoB;EACpB,eAAe;AACjB;;AAEA;EACE,wBAAwB;EACxB,4BAA4B;EAC5B,gCAAgC;EAChC,6BAA6B;AAC/B;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,eAAe;EACf,yEAAyE;EACzE,qBAAqB;EACrB,6BAA6B;EAC7B,oCAAoC;AACtC;;AAEA;;EAEE,yBAAyB;EACzB,iBAAiB;EACjB,kBAAkB;EAClB,oBAAoB;EACpB,iBAAiB;EACjB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,kCAAkC;EAClC,kBAAkB;EAClB,iCAAiC;EACjC,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;;EAEE,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,iBAAiB;EACjB,iBAAiB;EACjB,eAAe;EACf,cAAc;AAChB;;AAEA;;EAEE,eAAe;AACjB;;AAEA;EACE,uCAAuC;EACvC,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,mBAAmB;EACnB,8BAA8B;EAC9B,iBAAiB;EACjB,oBAAoB;EACpB,WAAW;EACX,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,uCAAuC;EACvC,aAAa;EACb,YAAY;EACZ,YAAY;EACZ,yBAAyB;EACzB,eAAe;EACf,oBAAoB;EACpB,0BAA0B;EAC1B,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,iCAAiC;EACjC,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,uCAAuC;EACvC,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,QAAQ;EACR,8BAA8B;EAC9B,0CAA0C;EAC1C,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,OAAO;EACP,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,wBAAwB;EACxB,gBAAgB;EAChB,SAAS;EACT,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,cAAc;EACd,iCAAiC;EACjC,qBAAqB;EACrB,+BAA+B;EAC/B,aAAa;EACb,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,cAAc;EACd,mBAAmB;EACnB,uCAAuC;EACvC,mDAAmD;EACnD,4BAA4B;EAC5B,6BAA6B;EAC7B,uEAAuE;AACzE;;AAEA;EACE,mBAAmB;EACnB,oCAAoC;AACtC;;AAEA;EACE,6BAA6B;EAC7B,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;;EAEE,YAAY;EACZ,YAAY;EACZ;;;;;GAKC;EACD,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;EACnB,kBAAkB;EAClB,yBAAyB;EACzB,gBAAgB;EAChB,0BAA0B;EAC1B,yBAAyB;EACzB,iBAAiB;EACjB,mBAAmB;EACnB,cAAc;EACd,oBAAoB;AACtB;;AAEA;;EAEE,sBAAsB;EACtB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,OAAO;AACT;;AAEA;;EAEE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;;;;EAIE,kBAAkB;EAClB,uCAAuC;EACvC,aAAa;EACb,YAAY;EACZ,YAAY;EACZ,yBAAyB;EACzB,eAAe;EACf,oBAAoB;EACpB,0BAA0B;AAC5B;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,iBAAiB;AACnB","sourcesContent":["html,\nbody {\n  margin: 0px;\n  padding: 0px;\n  font-family: 'Roboto', 'Calibri', 'Arial';\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background-color: rgb(34, 40, 49);\n  color: rgb(193, 224, 225);\n}\n\n.icons {\n  height: 20px;\n  width: auto;\n  filter: invert(100%) sepia(76%) saturate(556%) hue-rotate(153deg)\n    brightness(90%) contrast(93%);\n}\n\n.plus-icon {\n  transition: all 0.3s;\n}\n\n.plus-icon:hover {\n  cursor: pointer;\n  height: 23px;\n  width: auto;\n}\n\n.edit-tools > .icons:hover,\n.nav-group > .icons:hover,\n.input-group > .icons:hover {\n  transform: scale(1.15);\n  transition: all 0.3s;\n  cursor: pointer;\n}\n\n.rotate {\n  transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  -webkit-transform: rotate(45deg);\n  -moz-transform: rotate(45deg);\n}\n\n.container {\n  padding: 0px clamp(1rem, 20%, 50vw);\n}\n\nh1 {\n  font-size: 4rem;\n  background: -webkit-linear-gradient(rgb(193, 224, 221), rgb(0, 173, 181));\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.section-header,\n.form-label {\n  color: rgb(119, 197, 201);\n  font-size: 1.5rem;\n  margin-top: 0.83em;\n  margin-bottom: 0.5em;\n  font-weight: bold;\n  color: rgb(119, 197, 201);\n}\n\n.content {\n  display: flex;\n  min-height: 60vh;\n}\n\n.sidebar {\n  flex-basis: clamp(24ch, 15%, 50ch);\n  padding: 1rem 2rem;\n  background-color: rgb(57, 62, 70);\n  border-radius: 20px;\n  min-height: 60vh;\n}\n\n.filter,\n.project {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-wrap: nowrap;\n  padding: 0px 10px;\n  margin: 5px 0px;\n  height: 2.3rem;\n}\n\n.filter:hover,\n.project:hover {\n  cursor: pointer;\n}\n\n.active {\n  background-color: rgba(80, 85, 92, 0.5);\n  border-radius: 8px;\n}\n\n.projects-header {\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 2rem;\n  padding-bottom: 10px;\n  height: 4ch;\n  gap: 1rem;\n}\n\n.projects input[type='text'] {\n  border-radius: 8px;\n  background-color: rgba(80, 85, 92, 0.5);\n  outline: none;\n  border: none;\n  padding: 8px;\n  color: rgb(235, 235, 235);\n  font-size: 1rem;\n  font-family: inherit;\n  margin: 10px 10px 10px 0px;\n  width: calc(100% - 15px);\n}\n\n.project {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.tasks-card {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex: 1 1 300px;\n  margin-left: 30px;\n  padding: 1rem 2rem;\n  background-color: rgb(57, 62, 70);\n  border-radius: 20px;\n  min-height: 100%;\n}\n\n.task {\n  background-color: rgba(80, 85, 92, 0.5);\n  padding: 10px;\n  margin-bottom: 1rem;\n  border-radius: 5px;\n  border-radius: 8px;\n}\n\n.permanent-task-display {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 8px;\n}\n\n.optional-task-display {\n  display: none;\n  gap: 8px;\n  justify-content: space-between;\n  border-top: 0.5px solid rgb(176, 183, 183);\n  padding-top: 1rem;\n  margin-top: 1rem;\n}\n\n.task-info-column {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  gap: 5px;\n}\n\n.task-info {\n  display: flex;\n  align-items: center;\n  color: rgb(214, 241, 241);\n}\n\n.edit-tools {\n  display: flex;\n  gap: 1rem;\n}\n\n.checkbox {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n}\n\ninput[type='checkbox'] {\n  -webkit-appearance: none;\n  appearance: none;\n  margin: 0;\n  font: inherit;\n  color: currentColor;\n  width: 1.15em;\n  height: 1.15em;\n  border: 0.12em solid currentColor;\n  border-radius: 0.15em;\n  transform: translateY(-0.075em);\n  display: grid;\n  place-content: center;\n  cursor: pointer;\n}\n\n.checkbox-label {\n  flex: 1;\n}\n\n.checkbox-label:hover {\n  cursor: pointer;\n}\n\ninput[type='checkbox']::before {\n  content: '';\n  width: 0.65em;\n  height: 0.65em;\n  transform: scale(0);\n  transition: 120ms transform ease-in-out;\n  box-shadow: inset 1em 1em var(--form-control-color);\n  background-color: CanvasText;\n  transform-origin: bottom left;\n  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\n}\n\ninput[type='checkbox']:checked::before {\n  transform: scale(1);\n  background-color: rgb(193, 224, 225);\n}\n\ninput[type='checkbox']:checked + label {\n  text-decoration: line-through;\n  color: rgb(193, 224, 225);\n}\n\n.expanded-task-span-bold {\n  font-weight: 800;\n  font-size: 0.9rem;\n}\n\n.expanded-task-span {\n  font-weight: 400;\n  font-size: 0.9rem;\n}\n\n.add-task-button,\n#task-submit {\n  width: 130px;\n  border: none;\n  background-image: linear-gradient(\n    to right,\n    rgb(0, 160, 169) 0%,\n    rgb(0, 140, 147) 51%,\n    rgb(83, 96, 96) 100%\n  );\n  margin: 10px;\n  padding: 10px 15px;\n  font-size: 1.1rem;\n  letter-spacing: 1px;\n  text-align: center;\n  text-transform: uppercase;\n  transition: 0.5s;\n  background-size: 200% auto;\n  color: rgb(226, 235, 235);\n  font-weight: bold;\n  border-radius: 20px;\n  display: block;\n  align-self: flex-end;\n}\n\n.add-task-button:hover,\n#task-submit:hover {\n  transform: scale(1.05);\n  text-decoration: none;\n}\n\n.task-form {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  min-height: 100%;\n}\n\n.task-form-group {\n  display: flex;\n  flex-direction: column;\n}\n\n.task-item-group {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n\n.input-group,\n.nav-group {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.task-item-group input[type='text'],\ninput[type='date'],\nselect,\ntextarea {\n  border-radius: 8px;\n  background-color: rgba(80, 85, 92, 0.5);\n  outline: none;\n  border: none;\n  padding: 8px;\n  color: rgb(235, 235, 235);\n  font-size: 1rem;\n  font-family: inherit;\n  margin: 10px 10px 10px 0px;\n}\n\n#task-description {\n  height: 50px;\n}\n\n::-webkit-calendar-picker-indicator {\n  filter: invert(1);\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   "addTaskToDom": () => (/* binding */ addTaskToDom),
/* harmony export */   "clearTasks": () => (/* binding */ clearTasks),
/* harmony export */   "closeAddTaskForm": () => (/* binding */ closeAddTaskForm),
/* harmony export */   "componentTaskInputForm": () => (/* binding */ componentTaskInputForm),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "expandCreateProjectForm": () => (/* binding */ expandCreateProjectForm),
/* harmony export */   "getProjectForm": () => (/* binding */ getProjectForm),
/* harmony export */   "getTaskInformation": () => (/* binding */ getTaskInformation),
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "projectFormExpanded": () => (/* binding */ projectFormExpanded),
/* harmony export */   "removeActiveClass": () => (/* binding */ removeActiveClass),
/* harmony export */   "rotateAddProjectIcon": () => (/* binding */ rotateAddProjectIcon),
/* harmony export */   "showAddTaskForm": () => (/* binding */ showAddTaskForm),
/* harmony export */   "showDefaultProject": () => (/* binding */ showDefaultProject),
/* harmony export */   "showTasksInProject": () => (/* binding */ showTasksInProject),
/* harmony export */   "showTasksSection": () => (/* binding */ showTasksSection),
/* harmony export */   "toggleOptionalTaskDisplay": () => (/* binding */ toggleOptionalTaskDisplay),
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

function componentPermanentTaskDisplay() {
  const permanentTaskDisplay = document.createElement('div');
  permanentTaskDisplay.classList.add('permanent-task-display');
  return permanentTaskDisplay;
}

function componentOptionalTaskDisplay() {
  const optionalTaskDisplay = document.createElement('div');
  optionalTaskDisplay.classList.add('optional-task-display');
  return optionalTaskDisplay;
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
  trashIcon.classList.add('trash-icon');
  return trashIcon;
}

function componentExpandedTaskInfoColumn() {
  const expandedTaskInfoColumn = document.createElement('div');
  expandedTaskInfoColumn.classList.add('task-info-column');
  return expandedTaskInfoColumn;
}

function componentExpandedTaskInfoCell() {
  const expandedTaskInfoCell = document.createElement('div');
  expandedTaskInfoCell.classList.add('expanded-task-info-cell');
  return expandedTaskInfoCell;
}

function componentExpandedTaskSpanBold(title) {
  const expandedTaskSpanBold = document.createElement('span');
  expandedTaskSpanBold.classList.add('expanded-task-span-bold');
  expandedTaskSpanBold.textContent = title;
  return expandedTaskSpanBold;
}

function componentExpandedTaskSpan(text) {
  const expandedTaskSpan = document.createElement('span');
  expandedTaskSpan.classList.add('expanded-task-span');
  expandedTaskSpan.textContent = text;
  return expandedTaskSpan;
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
  const taskSubmit = document.createElement('button');
  taskSubmit.setAttribute('type', 'submit');
  taskSubmit.setAttribute('id', 'task-submit');
  taskSubmit.textContent = 'ADD';
  return taskSubmit;
}

// Add Task form back button
function componentFormTaskBackButton(onCancel) {
  const backIcon = new Image();
  backIcon.src = _images_chevron_left_solid_svg__WEBPACK_IMPORTED_MODULE_8__;
  backIcon.classList.add('icons', 'back-icon');
  backIcon.onclick = onCancel;
  return backIcon;
}

// Get task information from Add Task form
function getTaskInformation() {
  const taskTitle = document.getElementById('task-name').value;
  const taskDescription = document.getElementById('task-description').value;
  const taskDate = document.getElementById('due-date').value;
  const taskPriority = document.getElementById('priority').value;

  const task = new _task__WEBPACK_IMPORTED_MODULE_9__["default"](taskTitle, taskDescription, taskDate, taskPriority);

  return task;
}

// Full Add Task input form
function componentTaskInputForm(onsubmit, onCancel) {
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

  taskForm.onsubmit = onsubmit;

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
  navigationGroup.appendChild(componentFormTaskBackButton(onCancel));
  navigationGroup.appendChild(componentFormTaskSubmit());

  return taskForm;
}

// Individual task displayed in task list
function displayTask(
  taskName,
  taskDescription,
  taskDueDate,
  taskPriority,
  taskId
) {
  const task = componentTask();
  const taskInfo = componentTaskInfo();
  const permanentTaskDisplay = componentPermanentTaskDisplay();
  const optionalTaskDisplay = componentOptionalTaskDisplay();
  const checkbox = componentCheckbox();
  const editTools = componentEditTools();
  const expandedTaskInfoColumn = componentExpandedTaskInfoColumn();
  const expandedTaskInfoColumn2 = componentExpandedTaskInfoColumn();
  const expandedTaskInfoCellTitle = componentExpandedTaskInfoCell();
  const expandedTaskInfoCellDescription = componentExpandedTaskInfoCell();
  const expandedTaskInfoCellDueDate = componentExpandedTaskInfoCell();
  const expandedTaskInfoCellPriority = componentExpandedTaskInfoCell();
  const checkboxLabel = componentCheckboxLabel(taskName);
  const editIcon = componentEditIcon();
  const trashIcon = componentTrashIcon();

  task.appendChild(permanentTaskDisplay);
  permanentTaskDisplay.appendChild(taskInfo);
  taskInfo.appendChild(checkbox);
  checkbox.appendChild(componentCheckboxField());
  checkbox.appendChild(checkboxLabel);
  permanentTaskDisplay.appendChild(editTools);
  editTools.appendChild(editIcon);
  editTools.appendChild(trashIcon);
  task.appendChild(optionalTaskDisplay);

  checkboxLabel.setAttribute('data-id', taskId);
  editIcon.setAttribute('edit-id', taskId);
  trashIcon.setAttribute('del-id', taskId);

  // Optional task display (expandable)
  optionalTaskDisplay.appendChild(expandedTaskInfoColumn);
  expandedTaskInfoColumn.appendChild(expandedTaskInfoCellTitle);

  expandedTaskInfoCellTitle.appendChild(
    componentExpandedTaskSpanBold('Title: ')
  );
  expandedTaskInfoCellTitle.appendChild(componentExpandedTaskSpan(taskName));

  expandedTaskInfoColumn.appendChild(expandedTaskInfoCellDueDate);
  expandedTaskInfoCellDueDate.appendChild(
    componentExpandedTaskSpanBold('Due Date: ')
  );
  expandedTaskInfoCellDueDate.appendChild(
    componentExpandedTaskSpan(taskDueDate)
  );

  optionalTaskDisplay.appendChild(expandedTaskInfoColumn2);
  expandedTaskInfoColumn2.appendChild(expandedTaskInfoCellDescription);
  expandedTaskInfoCellDescription.appendChild(
    componentExpandedTaskSpanBold('Description: ')
  );
  expandedTaskInfoCellDescription.appendChild(
    componentExpandedTaskSpan(taskDescription)
  );

  expandedTaskInfoColumn2.appendChild(expandedTaskInfoCellPriority);
  expandedTaskInfoCellPriority.appendChild(
    componentExpandedTaskSpanBold('Priority: ')
  );
  expandedTaskInfoCellPriority.appendChild(
    componentExpandedTaskSpan(taskPriority)
  );

  return task;
}

// Show the Add Task form
function showAddTaskForm(onsubmit, onCancel) {
  const tasksContainer = document.querySelector('.tasks-card');
  tasksContainer.replaceChildren(componentTaskInputForm(onsubmit, onCancel));
}

function componentAddTaskButton(onClickOfAddTaskButton) {
  const addTaskButton = document.createElement('button');
  addTaskButton.classList.add('add-task-button');
  addTaskButton.textContent = 'Add Task';
  addTaskButton.onclick = onClickOfAddTaskButton;
  return addTaskButton;
}

// Add 'tasks' class section
function showTasksSection(onClickOfAddTaskButton) {
  const tasksCard = document.querySelector('.tasks-card');
  const tasks = componentTasks();
  tasksCard.appendChild(tasks);
  tasksCard.appendChild(componentAddTaskButton(onClickOfAddTaskButton));
  tasks.appendChild(componentSectionHeader('Tasks'));
  return tasksCard;
}

// Initialize page
function init(onClickOfAddTaskButton) {
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
  const tasksCard = componentTasksCard();

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
  content.appendChild(tasksCard);
  showTasksSection(onClickOfAddTaskButton);
}

// Add task to page
function addTaskToDom(task) {
  const tasks = document.querySelector('.tasks');
  tasks.appendChild(
    displayTask(
      task.title,
      task.description,
      task.dueDate,
      task.priority,
      task.id
    )
  );
}

// Get project form
function getProjectForm() {
  return document.querySelector('.project-form');
}

// Add project to page
function addProjectToDOM(newProject) {
  const { id, title } = newProject;
  const projects = document.querySelector('.projects');
  const project = componentProject();
  const projectTitle = componentProjectTitle(title);
  project.setAttribute('data-id', id);
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

// Show default project when page is loaded
function showDefaultProject(selectedProject) {
  selectedProject.tasks.forEach((task) => {
    addTaskToDom(task);
  });

  document.querySelector('[data-id="1"]').classList.add('active');
}

// Clear tasks from the DOM
function clearTasks() {
  const tasks = document.querySelector('.tasks');
  while (tasks.children.length > 1) {
    tasks.removeChild(tasks.lastChild);
  }
}

// Remove Add Task form
function closeAddTaskForm() {
  const tasksCard = document.querySelector('.tasks-card');
  while (tasksCard.children.length > 0) {
    tasksCard.removeChild(tasksCard.lastChild);
  }
}

// Show all tasks in a selected project
function showTasksInProject(selection) {
  selection.tasks.forEach((task) => {
    addTaskToDom(task);
  });
}

// Toggle optional task information display when clicking the checkbox label
function toggleOptionalTaskDisplay(e) {
  const optionalDisplay = e.target.closest('.task').children[1];

  if (optionalDisplay.style.display === 'flex') {
    optionalDisplay.style.display = 'none';
  } else {
    optionalDisplay.style.display = 'flex';
  }
}

function deleteTask(e, selectedProject) {
  e.target.parentElement.parentElement.parentElement.remove();

  const taskToDelete = selectedProject.tasks.findIndex(
    (task) => task.id.toString() === e.target.getAttribute('del-id')
  );
  selectedProject.tasks.splice(taskToDelete, 1);
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





const primaryTasks = [
  new _task__WEBPACK_IMPORTED_MODULE_1__["default"]('Respond to emails', 'Catch up on personal emails', '3/4/2023', 1),
];

const primaryProject = new _project__WEBPACK_IMPORTED_MODULE_2__["default"]('Home', primaryTasks);
const secondaryProject = new _project__WEBPACK_IMPORTED_MODULE_2__["default"]('Work');

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

let selectedProject = (0,_site_storage__WEBPACK_IMPORTED_MODULE_3__.getProjects)()[0];

function createTask() {
  const task = (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.getTaskInformation)();

  // Add task to the selected project's array of tasks
  selectedProject.addTask(task);
}

// This is a conditional that determines if you're looking at the task list or the task form.
// If you're in the task list on click, then show the task form.
// If you're in the task form on submit, then show the task list.
function controllDisplay(comingFrom) {
  if (comingFrom === 'task list') {
    (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.showAddTaskForm)(
      (e) => {
        e.preventDefault();
        createTask();
        controllDisplay('task form');
      },
      (e) => {
        e.preventDefault();
        controllDisplay('task form');
      }
    );
  } else if (comingFrom === 'task form') {
    (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.closeAddTaskForm)();
    (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.showTasksSection)((e) => {
      e.preventDefault();
      controllDisplay('task list');
    });
    (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.showTasksInProject)(selectedProject);
  }
}

function onClickOfAddTaskButton(e) {
  e.preventDefault();
  controllDisplay('task list');
}

(0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.init)(onClickOfAddTaskButton);

(0,_site_storage__WEBPACK_IMPORTED_MODULE_3__.getProjects)().forEach((project) => {
  (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.addProjectToDOM)(project);
});

(0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.showDefaultProject)(selectedProject);

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
    (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.addProjectToDOM)(newProject);

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
  // Assign the element with the closest attribute of 'data-id' as the project button
  const projectButton = e.target.closest('[data-id]');

  // If the project button does not have a data-id, return to prevent errors
  if (!projectButton) {
    return;
  }

  // Highlight currently selected sidebar option and remove any inactive highlighted options
  (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.toggleSidebarHighlight)(e.target);

  // Save the data-id of the project button as the project id
  const projectId = parseInt(projectButton.getAttribute('data-id'), 10);

  // Save the getProjects() array into projects
  const projects = (0,_site_storage__WEBPACK_IMPORTED_MODULE_3__.getProjects)();

  // Find the project with id that matches the selected project id
  const project = projects.find((proj) => proj.id === projectId);

  // If the project is already the selected project, return early to prevent adding the tasks
  // multiple times
  if (project === selectedProject) {
    return;
  }

  // Make the found project the selected project
  selectedProject = project;

  // Clear tasks from the DOM
  (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.clearTasks)();

  // Add each task from the selected project to the DOM
  (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.showTasksInProject)(selectedProject);
});

// Click handler to show/hide optional task display
const taskList = document.querySelector('.tasks-card');
taskList.addEventListener('click', (e) => {
  if (e.target.classList.contains('checkbox-label')) {
    (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.toggleOptionalTaskDisplay)(e);
  } else if (e.target.classList.contains('trash-icon')) {
    (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.deleteTask)(e, selectedProject);
  }
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
let projectId = 1;

class Project {
  constructor(title, tasks = []) {
    this.title = title;
    this.tasks = tasks;
    this.id = projectId;
    projectId += 1;
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
let taskId = 0;

class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.id = taskId;
    taskId += 1;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQiw0REFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixvREFBUztBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwyREFBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDZDQUFJOztBQUV2QjtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FB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QTtBQUNBLElBQUksNEVBQXlCO0FBQzdCLElBQUk7QUFDSixJQUFJLDZEQUFVO0FBQ2Q7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNsTEQ7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7O0FBRUE7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS1tYW5pcHVsYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zaXRlLXN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2suanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLFxcbmJvZHkge1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsICdDYWxpYnJpJywgJ0FyaWFsJztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzQsIDQwLCA0OSk7XFxuICBjb2xvcjogcmdiKDE5MywgMjI0LCAyMjUpO1xcbn1cXG5cXG4uaWNvbnMge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IGF1dG87XFxuICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSg3NiUpIHNhdHVyYXRlKDU1NiUpIGh1ZS1yb3RhdGUoMTUzZGVnKVxcbiAgICBicmlnaHRuZXNzKDkwJSkgY29udHJhc3QoOTMlKTtcXG59XFxuXFxuLnBsdXMtaWNvbiB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuXFxuLnBsdXMtaWNvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDIzcHg7XFxuICB3aWR0aDogYXV0bztcXG59XFxuXFxuLmVkaXQtdG9vbHMgPiAuaWNvbnM6aG92ZXIsXFxuLm5hdi1ncm91cCA+IC5pY29uczpob3ZlcixcXG4uaW5wdXQtZ3JvdXAgPiAuaWNvbnM6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucm90YXRlIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDBweCBjbGFtcCgxcmVtLCAyMCUsIDUwdncpO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChyZ2IoMTkzLCAyMjQsIDIyMSksIHJnYigwLCAxNzMsIDE4MSkpO1xcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5zZWN0aW9uLWhlYWRlcixcXG4uZm9ybS1sYWJlbCB7XFxuICBjb2xvcjogcmdiKDExOSwgMTk3LCAyMDEpO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBtYXJnaW4tdG9wOiAwLjgzZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IHJnYigxMTksIDE5NywgMjAxKTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1pbi1oZWlnaHQ6IDYwdmg7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIGZsZXgtYmFzaXM6IGNsYW1wKDI0Y2gsIDE1JSwgNTBjaCk7XFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTcsIDYyLCA3MCk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgbWluLWhlaWdodDogNjB2aDtcXG59XFxuXFxuLmZpbHRlcixcXG4ucHJvamVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICBwYWRkaW5nOiAwcHggMTBweDtcXG4gIG1hcmdpbjogNXB4IDBweDtcXG4gIGhlaWdodDogMi4zcmVtO1xcbn1cXG5cXG4uZmlsdGVyOmhvdmVyLFxcbi5wcm9qZWN0OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgwLCA4NSwgOTIsIDAuNSk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi5wcm9qZWN0cy1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmctdG9wOiAycmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICBoZWlnaHQ6IDRjaDtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLnByb2plY3RzIGlucHV0W3R5cGU9J3RleHQnXSB7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgwLCA4NSwgOTIsIDAuNSk7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgY29sb3I6IHJnYigyMzUsIDIzNSwgMjM1KTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCAwcHg7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gMTVweCk7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi50YXNrcy1jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZmxleDogMSAxIDMwMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTcsIDYyLCA3MCk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuXFxuLnRhc2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4MCwgODUsIDkyLCAwLjUpO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi5wZXJtYW5lbnQtdGFzay1kaXNwbGF5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbi5vcHRpb25hbC10YXNrLWRpc3BsYXkge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGdhcDogOHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYm9yZGVyLXRvcDogMC41cHggc29saWQgcmdiKDE3NiwgMTgzLCAxODMpO1xcbiAgcGFkZGluZy10b3A6IDFyZW07XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4udGFzay1pbmZvLWNvbHVtbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLnRhc2staW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiByZ2IoMjE0LCAyNDEsIDI0MSk7XFxufVxcblxcbi5lZGl0LXRvb2xzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5jaGVja2JveCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIGNvbG9yOiBjdXJyZW50Q29sb3I7XFxuICB3aWR0aDogMS4xNWVtO1xcbiAgaGVpZ2h0OiAxLjE1ZW07XFxuICBib3JkZXI6IDAuMTJlbSBzb2xpZCBjdXJyZW50Q29sb3I7XFxuICBib3JkZXItcmFkaXVzOiAwLjE1ZW07XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMDc1ZW0pO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNoZWNrYm94LWxhYmVsIHtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi5jaGVja2JveC1sYWJlbDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmlucHV0W3R5cGU9J2NoZWNrYm94J106OmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG4gIHdpZHRoOiAwLjY1ZW07XFxuICBoZWlnaHQ6IDAuNjVlbTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICB0cmFuc2l0aW9uOiAxMjBtcyB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQ7XFxuICBib3gtc2hhZG93OiBpbnNldCAxZW0gMWVtIHZhcigtLWZvcm0tY29udHJvbC1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBDYW52YXNUZXh0O1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XFxuICBjbGlwLXBhdGg6IHBvbHlnb24oMTQlIDQ0JSwgMCA2NSUsIDUwJSAxMDAlLCAxMDAlIDE2JSwgODAlIDAlLCA0MyUgNjIlKTtcXG59XFxuXFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpjaGVja2VkOjpiZWZvcmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTMsIDIyNCwgMjI1KTtcXG59XFxuXFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpjaGVja2VkICsgbGFiZWwge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBjb2xvcjogcmdiKDE5MywgMjI0LCAyMjUpO1xcbn1cXG5cXG4uZXhwYW5kZWQtdGFzay1zcGFuLWJvbGQge1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4uZXhwYW5kZWQtdGFzay1zcGFuIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuLmFkZC10YXNrLWJ1dHRvbixcXG4jdGFzay1zdWJtaXQge1xcbiAgd2lkdGg6IDEzMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcbiAgICB0byByaWdodCxcXG4gICAgcmdiKDAsIDE2MCwgMTY5KSAwJSxcXG4gICAgcmdiKDAsIDE0MCwgMTQ3KSA1MSUsXFxuICAgIHJnYig4MywgOTYsIDk2KSAxMDAlXFxuICApO1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgYXV0bztcXG4gIGNvbG9yOiByZ2IoMjI2LCAyMzUsIDIzNSk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4uYWRkLXRhc2stYnV0dG9uOmhvdmVyLFxcbiN0YXNrLXN1Ym1pdDpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4udGFzay1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuXFxuLnRhc2stZm9ybS1ncm91cCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRhc2staXRlbS1ncm91cCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi5pbnB1dC1ncm91cCxcXG4ubmF2LWdyb3VwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFzay1pdGVtLWdyb3VwIGlucHV0W3R5cGU9J3RleHQnXSxcXG5pbnB1dFt0eXBlPSdkYXRlJ10sXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODAsIDg1LCA5MiwgMC41KTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBjb2xvcjogcmdiKDIzNSwgMjM1LCAyMzUpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDBweDtcXG59XFxuXFxuI3Rhc2stZGVzY3JpcHRpb24ge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG46Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XFxuICBmaWx0ZXI6IGludmVydCgxKTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7RUFFRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlDQUF5QztFQUN6QyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixpQ0FBaUM7RUFDakMseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWDtpQ0FDK0I7QUFDakM7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTs7O0VBR0Usc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1QixnQ0FBZ0M7RUFDaEMsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHlFQUF5RTtFQUN6RSxxQkFBcUI7RUFDckIsNkJBQTZCO0VBQzdCLG9DQUFvQztBQUN0Qzs7QUFFQTs7RUFFRSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLGlDQUFpQztFQUNqQyxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHVDQUF1QztFQUN2QyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVDQUF1QztFQUN2QyxhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQiwwQkFBMEI7RUFDMUIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQ0FBaUM7RUFDakMsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHVDQUF1QztFQUN2QyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsUUFBUTtFQUNSLDhCQUE4QjtFQUM5QiwwQ0FBMEM7RUFDMUMsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixPQUFPO0VBQ1Asc0JBQXNCO0VBQ3RCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsY0FBYztFQUNkLGlDQUFpQztFQUNqQyxxQkFBcUI7RUFDckIsK0JBQStCO0VBQy9CLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLE9BQU87QUFDVDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsdUNBQXVDO0VBQ3ZDLG1EQUFtRDtFQUNuRCw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLHVFQUF1RTtBQUN6RTs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLFlBQVk7RUFDWjs7Ozs7R0FLQztFQUNELFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQiwwQkFBMEI7RUFDMUIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLG9CQUFvQjtBQUN0Qjs7QUFFQTs7RUFFRSxzQkFBc0I7RUFDdEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsT0FBTztBQUNUOztBQUVBOztFQUVFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBOzs7O0VBSUUsa0JBQWtCO0VBQ2xCLHVDQUF1QztFQUN2QyxhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCxcXG5ib2R5IHtcXG4gIG1hcmdpbjogMHB4O1xcbiAgcGFkZGluZzogMHB4O1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCAnQ2FsaWJyaScsICdBcmlhbCc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM0LCA0MCwgNDkpO1xcbiAgY29sb3I6IHJnYigxOTMsIDIyNCwgMjI1KTtcXG59XFxuXFxuLmljb25zIHtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoNzYlKSBzYXR1cmF0ZSg1NTYlKSBodWUtcm90YXRlKDE1M2RlZylcXG4gICAgYnJpZ2h0bmVzcyg5MCUpIGNvbnRyYXN0KDkzJSk7XFxufVxcblxcbi5wbHVzLWljb24ge1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcblxcbi5wbHVzLWljb246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAyM3B4O1xcbiAgd2lkdGg6IGF1dG87XFxufVxcblxcbi5lZGl0LXRvb2xzID4gLmljb25zOmhvdmVyLFxcbi5uYXYtZ3JvdXAgPiAuaWNvbnM6aG92ZXIsXFxuLmlucHV0LWdyb3VwID4gLmljb25zOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnJvdGF0ZSB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAwcHggY2xhbXAoMXJlbSwgMjAlLCA1MHZ3KTtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQocmdiKDE5MywgMjI0LCAyMjEpLCByZ2IoMCwgMTczLCAxODEpKTtcXG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uc2VjdGlvbi1oZWFkZXIsXFxuLmZvcm0tbGFiZWwge1xcbiAgY29sb3I6IHJnYigxMTksIDE5NywgMjAxKTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbWFyZ2luLXRvcDogMC44M2VtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiByZ2IoMTE5LCAxOTcsIDIwMSk7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtaW4taGVpZ2h0OiA2MHZoO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBmbGV4LWJhc2lzOiBjbGFtcCgyNGNoLCAxNSUsIDUwY2gpO1xcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU3LCA2MiwgNzApO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIG1pbi1oZWlnaHQ6IDYwdmg7XFxufVxcblxcbi5maWx0ZXIsXFxuLnByb2plY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgcGFkZGluZzogMHB4IDEwcHg7XFxuICBtYXJnaW46IDVweCAwcHg7XFxuICBoZWlnaHQ6IDIuM3JlbTtcXG59XFxuXFxuLmZpbHRlcjpob3ZlcixcXG4ucHJvamVjdDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4MCwgODUsIDkyLCAwLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4ucHJvamVjdHMtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nLXRvcDogMnJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgaGVpZ2h0OiA0Y2g7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5wcm9qZWN0cyBpbnB1dFt0eXBlPSd0ZXh0J10ge1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4MCwgODUsIDkyLCAwLjUpO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGNvbG9yOiByZ2IoMjM1LCAyMzUsIDIzNSk7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMHB4O1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDE1cHgpO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4udGFza3MtY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZsZXg6IDEgMSAzMDBweDtcXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU3LCA2MiwgNzApO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbi50YXNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODAsIDg1LCA5MiwgMC41KTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4ucGVybWFuZW50LXRhc2stZGlzcGxheSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogOHB4O1xcbn1cXG5cXG4ub3B0aW9uYWwtdGFzay1kaXNwbGF5IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBnYXA6IDhweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJvcmRlci10b3A6IDAuNXB4IHNvbGlkIHJnYigxNzYsIDE4MywgMTgzKTtcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuLnRhc2staW5mby1jb2x1bW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi50YXNrLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogcmdiKDIxNCwgMjQxLCAyNDEpO1xcbn1cXG5cXG4uZWRpdC10b29scyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uY2hlY2tib3gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICBjb2xvcjogY3VycmVudENvbG9yO1xcbiAgd2lkdGg6IDEuMTVlbTtcXG4gIGhlaWdodDogMS4xNWVtO1xcbiAgYm9yZGVyOiAwLjEyZW0gc29saWQgY3VycmVudENvbG9yO1xcbiAgYm9yZGVyLXJhZGl1czogMC4xNWVtO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjA3NWVtKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jaGVja2JveC1sYWJlbCB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uY2hlY2tib3gtbGFiZWw6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5pbnB1dFt0eXBlPSdjaGVja2JveCddOjpiZWZvcmUge1xcbiAgY29udGVudDogJyc7XFxuICB3aWR0aDogMC42NWVtO1xcbiAgaGVpZ2h0OiAwLjY1ZW07XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgdHJhbnNpdGlvbjogMTIwbXMgdHJhbnNmb3JtIGVhc2UtaW4tb3V0O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMWVtIDFlbSB2YXIoLS1mb3JtLWNvbnRyb2wtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogQ2FudmFzVGV4dDtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDE0JSA0NCUsIDAgNjUlLCA1MCUgMTAwJSwgMTAwJSAxNiUsIDgwJSAwJSwgNDMlIDYyJSk7XFxufVxcblxcbmlucHV0W3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZDo6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkzLCAyMjQsIDIyNSk7XFxufVxcblxcbmlucHV0W3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZCArIGxhYmVsIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgY29sb3I6IHJnYigxOTMsIDIyNCwgMjI1KTtcXG59XFxuXFxuLmV4cGFuZGVkLXRhc2stc3Bhbi1ib2xkIHtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuLmV4cGFuZGVkLXRhc2stc3BhbiB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbi5hZGQtdGFzay1idXR0b24sXFxuI3Rhc2stc3VibWl0IHtcXG4gIHdpZHRoOiAxMzBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXG4gICAgdG8gcmlnaHQsXFxuICAgIHJnYigwLCAxNjAsIDE2OSkgMCUsXFxuICAgIHJnYigwLCAxNDAsIDE0NykgNTElLFxcbiAgICByZ2IoODMsIDk2LCA5NikgMTAwJVxcbiAgKTtcXG4gIG1hcmdpbjogMTBweDtcXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgYmFja2dyb3VuZC1zaXplOiAyMDAlIGF1dG87XFxuICBjb2xvcjogcmdiKDIyNiwgMjM1LCAyMzUpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuLmFkZC10YXNrLWJ1dHRvbjpob3ZlcixcXG4jdGFzay1zdWJtaXQ6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLnRhc2stZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbi50YXNrLWZvcm0tZ3JvdXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50YXNrLWl0ZW0tZ3JvdXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uaW5wdXQtZ3JvdXAsXFxuLm5hdi1ncm91cCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2staXRlbS1ncm91cCBpbnB1dFt0eXBlPSd0ZXh0J10sXFxuaW5wdXRbdHlwZT0nZGF0ZSddLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgwLCA4NSwgOTIsIDAuNSk7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgY29sb3I6IHJnYigyMzUsIDIzNSwgMjM1KTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCAwcHg7XFxufVxcblxcbiN0YXNrLWRlc2NyaXB0aW9uIHtcXG4gIGhlaWdodDogNTBweDtcXG59XFxuXFxuOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xcbiAgZmlsdGVyOiBpbnZlcnQoMSk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBJbmJveEljb24gZnJvbSAnLi9pbWFnZXMvaW5ib3gtc29saWQuc3ZnJztcbmltcG9ydCBDYWxlbmRhckRheUljb24gZnJvbSAnLi9pbWFnZXMvY2FsZW5kYXItZGF5LXNvbGlkLnN2Zyc7XG5pbXBvcnQgQ2FsZW5kYXJXZWVrSWNvbiBmcm9tICcuL2ltYWdlcy9jYWxlbmRhci13ZWVrLXNvbGlkLnN2Zyc7XG5pbXBvcnQgRm9sZGVySWNvbiBmcm9tICcuL2ltYWdlcy9mb2xkZXItc29saWQuc3ZnJztcbmltcG9ydCBFZGl0SWNvbiBmcm9tICcuL2ltYWdlcy9wZW4tdG8tc3F1YXJlLXNvbGlkLnN2Zyc7XG5pbXBvcnQgVHJhc2hJY29uIGZyb20gJy4vaW1hZ2VzL3RyYXNoLXNvbGlkLnN2Zyc7XG5pbXBvcnQgUGx1c0ljb24gZnJvbSAnLi9pbWFnZXMvcGx1cy1zb2xpZC5zdmcnO1xuaW1wb3J0IExlZnRTb2xpZCBmcm9tICcuL2ltYWdlcy9jaGV2cm9uLWxlZnQtc29saWQuc3ZnJztcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzayc7XG5cbmZ1bmN0aW9uIGNvbXBvbmVudENvbnRhaW5lcigpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50SGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRUaXRsZSgpIHtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9ICd0b2RvIGxpc3QnO1xuICByZXR1cm4gdGl0bGU7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudENvbnRlbnQoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250ZW50Jyk7XG4gIHJldHVybiBjb250ZW50O1xufVxuXG4vLyBTaWRlYmFyXG5mdW5jdGlvbiBjb21wb25lbnRTaWRlYmFyKCkge1xuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicpO1xuICBzaWRlYmFyLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2lkZWJhcicpO1xuICByZXR1cm4gc2lkZWJhcjtcbn1cblxuLy8gU2lkZWJhciBmaWx0ZXJzIHNlY3Rpb25cbmZ1bmN0aW9uIGNvbXBvbmVudEZpbHRlcnMoKSB7XG4gIGNvbnN0IGZpbHRlcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZmlsdGVycy5jbGFzc0xpc3QuYWRkKCdmaWx0ZXJzJyk7XG4gIHJldHVybiBmaWx0ZXJzO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRGaWx0ZXIoKSB7XG4gIGNvbnN0IGZpbHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmaWx0ZXIuY2xhc3NMaXN0LmFkZCgnZmlsdGVyJyk7XG4gIGZpbHRlci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLWxpbmtzJyk7XG4gIHJldHVybiBmaWx0ZXI7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudEluYm94SWNvbigpIHtcbiAgY29uc3QgaW5ib3hJY29uID0gbmV3IEltYWdlKCk7XG4gIGluYm94SWNvbi5zcmMgPSBJbmJveEljb247XG4gIGluYm94SWNvbi5jbGFzc0xpc3QuYWRkKCdpY29ucycpO1xuICBpbmJveEljb24uY2xhc3NMaXN0LmFkZCgnZmlsdGVyLWVsZW1lbnRzJyk7XG4gIHJldHVybiBpbmJveEljb247XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFRvZGF5SWNvbigpIHtcbiAgY29uc3QgdG9kYXlJY29uID0gbmV3IEltYWdlKCk7XG4gIHRvZGF5SWNvbi5zcmMgPSBDYWxlbmRhckRheUljb247XG4gIHRvZGF5SWNvbi5jbGFzc0xpc3QuYWRkKCdpY29ucycpO1xuICB0b2RheUljb24uY2xhc3NMaXN0LmFkZCgnZmlsdGVyLWVsZW1lbnRzJyk7XG4gIHJldHVybiB0b2RheUljb247XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFdlZWtJY29uKCkge1xuICBjb25zdCB3ZWVrSWNvbiA9IG5ldyBJbWFnZSgpO1xuICB3ZWVrSWNvbi5zcmMgPSBDYWxlbmRhcldlZWtJY29uO1xuICB3ZWVrSWNvbi5jbGFzc0xpc3QuYWRkKCdpY29ucycpO1xuICB3ZWVrSWNvbi5jbGFzc0xpc3QuYWRkKCdmaWx0ZXItZWxlbWVudHMnKTtcbiAgcmV0dXJuIHdlZWtJY29uO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRGaWx0ZXJOYW1lKG5hbWUpIHtcbiAgY29uc3QgZmlsdGVyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZmlsdGVyTmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gIGZpbHRlck5hbWUuY2xhc3NMaXN0LmFkZCgnZmlsdGVyLWVsZW1lbnRzJyk7XG4gIHJldHVybiBmaWx0ZXJOYW1lO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRTZWN0aW9uSGVhZGVyKGhlYWRpbmcpIHtcbiAgY29uc3Qgc2VjdGlvbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIHNlY3Rpb25IZWFkZXIudGV4dENvbnRlbnQgPSBoZWFkaW5nO1xuICBzZWN0aW9uSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24taGVhZGVyJyk7XG4gIHJldHVybiBzZWN0aW9uSGVhZGVyO1xufVxuXG4vLyBTaWRlYmFyIHByb2plY3RzIHNlY3Rpb25cbmZ1bmN0aW9uIGNvbXBvbmVudFByb2plY3RzSGVhZGluZygpIHtcbiAgY29uc3QgcHJvamVjdHNIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgcHJvamVjdHNIZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24taGVhZGVyJyk7XG4gIHByb2plY3RzSGVhZGluZy50ZXh0Q29udGVudCA9ICdQcm9qZWN0cyc7XG4gIHJldHVybiBwcm9qZWN0c0hlYWRpbmc7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFByb2plY3RzKCkge1xuICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwcm9qZWN0cy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cycpO1xuICByZXR1cm4gcHJvamVjdHM7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFByb2plY3QoKSB7XG4gIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG4gIHByb2plY3QuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1saW5rcycpO1xuICByZXR1cm4gcHJvamVjdDtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50UHJvamVjdEljb24oKSB7XG4gIGNvbnN0IHByb2plY3RJY29uID0gbmV3IEltYWdlKCk7XG4gIHByb2plY3RJY29uLnNyYyA9IEZvbGRlckljb247XG4gIHByb2plY3RJY29uLmNsYXNzTGlzdC5hZGQoJ2ljb25zJyk7XG4gIHByb2plY3RJY29uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZWxlbWVudHMnKTtcbiAgcmV0dXJuIHByb2plY3RJY29uO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRQcm9qZWN0c0hlYWRlcigpIHtcbiAgY29uc3QgcHJvamVjdHNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHByb2plY3RzSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzLWhlYWRlcicpO1xuICByZXR1cm4gcHJvamVjdHNIZWFkZXI7XG59XG5cbi8vIFNpZGViYXIgcHJvamVjdCBjcmVhdGlvbiBmb3JtXG5mdW5jdGlvbiBjb21wb25lbnRQcm9qZWN0SW5wdXRGb3JtKCkge1xuICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgY29uc3QgcHJvamVjdElucHV0RmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb25zdCBwcm9qZWN0U3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgcHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1mb3JtJyk7XG4gIHByb2plY3RGb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdC1mb3JtJyk7XG4gIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKHByb2plY3RJbnB1dEZpZWxkKTtcbiAgcHJvamVjdElucHV0RmllbGQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3Byb2plY3QtbmFtZScpO1xuICBwcm9qZWN0SW5wdXRGaWVsZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3QtbmFtZScpO1xuICBwcm9qZWN0SW5wdXRGaWVsZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICBwcm9qZWN0SW5wdXRGaWVsZC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWZvcm0tZmllbGQnKTtcbiAgcHJvamVjdElucHV0RmllbGQuc2V0QXR0cmlidXRlKCdhdXRvZm9jdXMnLCAnYXV0b2ZvY3VzJyk7XG4gIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKHByb2plY3RTdWJtaXQpO1xuICBwcm9qZWN0U3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgcHJvamVjdFN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3Qtc3VibWl0Jyk7XG4gIHJldHVybiBwcm9qZWN0Rm9ybTtcbn1cblxuLy8gU2lkZWJhciBwcm9qZWN0IHRpdGxlXG5mdW5jdGlvbiBjb21wb25lbnRQcm9qZWN0VGl0bGUodGl0bGUpIHtcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZWxlbWVudHMnKTtcbiAgcmV0dXJuIHByb2plY3RUaXRsZTtcbn1cblxuLy8gU2lkZWJhciBhZGQgcHJvamVjdCBpY29uXG5mdW5jdGlvbiBjb21wb25lbnRBZGRQcm9qZWN0SWNvbigpIHtcbiAgY29uc3QgYWRkUHJvamVjdEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgYWRkUHJvamVjdEljb24uc3JjID0gUGx1c0ljb247XG4gIGFkZFByb2plY3RJY29uLmNsYXNzTGlzdC5hZGQoJ2ljb25zJywgJ3BsdXMtaWNvbicpO1xuICByZXR1cm4gYWRkUHJvamVjdEljb247XG59XG5cbi8vIFRhc2tzIHNlY3Rpb25cbmZ1bmN0aW9uIGNvbXBvbmVudFRhc2tzQ2FyZCgpIHtcbiAgY29uc3QgdGFza3NDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRhc2tzQ2FyZC5jbGFzc0xpc3QuYWRkKCd0YXNrcy1jYXJkJyk7XG4gIHJldHVybiB0YXNrc0NhcmQ7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFRhc2tzKCkge1xuICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0YXNrcy5jbGFzc0xpc3QuYWRkKCd0YXNrcycpO1xuICByZXR1cm4gdGFza3M7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFRhc2soKSB7XG4gIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGFzay5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG4gIHJldHVybiB0YXNrO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRDaGVja2JveCgpIHtcbiAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gnKTtcbiAgcmV0dXJuIGNoZWNrYm94O1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRDaGVja2JveEZpZWxkKCkge1xuICBjb25zdCBjaGVja2JveEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY2hlY2tib3hGaWVsZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgY2hlY2tib3hGaWVsZC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveC1maWVsZCcpO1xuICByZXR1cm4gY2hlY2tib3hGaWVsZDtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50Q2hlY2tib3hMYWJlbChwcm9qZWN0VGl0bGUpIHtcbiAgY29uc3QgY2hlY2tib3hMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGNoZWNrYm94TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnY2hlY2tib3gnKTtcbiAgY2hlY2tib3hMYWJlbC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveC1sYWJlbCcpO1xuICBjaGVja2JveExhYmVsLnRleHRDb250ZW50ID0gcHJvamVjdFRpdGxlO1xuICByZXR1cm4gY2hlY2tib3hMYWJlbDtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50UGVybWFuZW50VGFza0Rpc3BsYXkoKSB7XG4gIGNvbnN0IHBlcm1hbmVudFRhc2tEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHBlcm1hbmVudFRhc2tEaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ3Blcm1hbmVudC10YXNrLWRpc3BsYXknKTtcbiAgcmV0dXJuIHBlcm1hbmVudFRhc2tEaXNwbGF5O1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRPcHRpb25hbFRhc2tEaXNwbGF5KCkge1xuICBjb25zdCBvcHRpb25hbFRhc2tEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG9wdGlvbmFsVGFza0Rpc3BsYXkuY2xhc3NMaXN0LmFkZCgnb3B0aW9uYWwtdGFzay1kaXNwbGF5Jyk7XG4gIHJldHVybiBvcHRpb25hbFRhc2tEaXNwbGF5O1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRUYXNrSW5mbygpIHtcbiAgY29uc3QgdGFza0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGFza0luZm8uY2xhc3NMaXN0LmFkZCgndGFzay1pbmZvJyk7XG4gIHJldHVybiB0YXNrSW5mbztcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50RWRpdFRvb2xzKCkge1xuICBjb25zdCBlZGl0VG9vbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZWRpdFRvb2xzLmNsYXNzTGlzdC5hZGQoJ2VkaXQtdG9vbHMnKTtcbiAgcmV0dXJuIGVkaXRUb29scztcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50RWRpdEljb24oKSB7XG4gIGNvbnN0IGVkaXRJY29uID0gbmV3IEltYWdlKCk7XG4gIGVkaXRJY29uLnNyYyA9IEVkaXRJY29uO1xuICBlZGl0SWNvbi5jbGFzc0xpc3QuYWRkKCdpY29ucycpO1xuICByZXR1cm4gZWRpdEljb247XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFRyYXNoSWNvbigpIHtcbiAgY29uc3QgdHJhc2hJY29uID0gbmV3IEltYWdlKCk7XG4gIHRyYXNoSWNvbi5zcmMgPSBUcmFzaEljb247XG4gIHRyYXNoSWNvbi5jbGFzc0xpc3QuYWRkKCdpY29ucycpO1xuICB0cmFzaEljb24uY2xhc3NMaXN0LmFkZCgndHJhc2gtaWNvbicpO1xuICByZXR1cm4gdHJhc2hJY29uO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRFeHBhbmRlZFRhc2tJbmZvQ29sdW1uKCkge1xuICBjb25zdCBleHBhbmRlZFRhc2tJbmZvQ29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGV4cGFuZGVkVGFza0luZm9Db2x1bW4uY2xhc3NMaXN0LmFkZCgndGFzay1pbmZvLWNvbHVtbicpO1xuICByZXR1cm4gZXhwYW5kZWRUYXNrSW5mb0NvbHVtbjtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50RXhwYW5kZWRUYXNrSW5mb0NlbGwoKSB7XG4gIGNvbnN0IGV4cGFuZGVkVGFza0luZm9DZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGV4cGFuZGVkVGFza0luZm9DZWxsLmNsYXNzTGlzdC5hZGQoJ2V4cGFuZGVkLXRhc2staW5mby1jZWxsJyk7XG4gIHJldHVybiBleHBhbmRlZFRhc2tJbmZvQ2VsbDtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50RXhwYW5kZWRUYXNrU3BhbkJvbGQodGl0bGUpIHtcbiAgY29uc3QgZXhwYW5kZWRUYXNrU3BhbkJvbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGV4cGFuZGVkVGFza1NwYW5Cb2xkLmNsYXNzTGlzdC5hZGQoJ2V4cGFuZGVkLXRhc2stc3Bhbi1ib2xkJyk7XG4gIGV4cGFuZGVkVGFza1NwYW5Cb2xkLnRleHRDb250ZW50ID0gdGl0bGU7XG4gIHJldHVybiBleHBhbmRlZFRhc2tTcGFuQm9sZDtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50RXhwYW5kZWRUYXNrU3Bhbih0ZXh0KSB7XG4gIGNvbnN0IGV4cGFuZGVkVGFza1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGV4cGFuZGVkVGFza1NwYW4uY2xhc3NMaXN0LmFkZCgnZXhwYW5kZWQtdGFzay1zcGFuJyk7XG4gIGV4cGFuZGVkVGFza1NwYW4udGV4dENvbnRlbnQgPSB0ZXh0O1xuICByZXR1cm4gZXhwYW5kZWRUYXNrU3Bhbjtcbn1cblxuLy8gQWRkIFRhc2sgZm9ybVxuZnVuY3Rpb24gY29tcG9uZW50VGFza0Zvcm1Hcm91cCgpIHtcbiAgY29uc3QgZm9ybUdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvcm1Hcm91cC5jbGFzc0xpc3QuYWRkKCd0YXNrLWZvcm0tZ3JvdXAnKTtcbiAgcmV0dXJuIGZvcm1Hcm91cDtcbn1cblxuLy8gQWRkIFRhc2sgZm9ybSBjb21wb25lbnQgZm9yIGVhY2ggaW5wdXQgaXRlbSAodGFzaywgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5KVxuZnVuY3Rpb24gY29tcG9uZW50VGFza0l0ZW1Hcm91cCgpIHtcbiAgY29uc3QgaXRlbUdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGl0ZW1Hcm91cC5jbGFzc0xpc3QuYWRkKCd0YXNrLWl0ZW0tZ3JvdXAnKTtcbiAgcmV0dXJuIGl0ZW1Hcm91cDtcbn1cblxuLy8gQWRkIFRhc2sgZm9ybSBjb21wb25lbnQgZm9yIG11bHRpcGxlIGlucHV0IGl0ZW1zIHJvdyAoZGF0ZSwgcHJpb3JpdHkpXG5mdW5jdGlvbiBjb21wb25lbnRJbnB1dEdyb3VwKCkge1xuICBjb25zdCBpbnB1dEdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGlucHV0R3JvdXAuY2xhc3NMaXN0LmFkZCgnaW5wdXQtZ3JvdXAnKTtcbiAgcmV0dXJuIGlucHV0R3JvdXA7XG59XG5cbi8vIEFkZCBUYXNrIGZvcm0gY29tcG9uZW50IGZvciBuYXZpZ2F0aW9uIChiYWNrICYgc3VibWl0IGJ1dHRvbnMpXG5mdW5jdGlvbiBjb21wb25lbnROYXZpZ2F0aW9uR3JvdXAoKSB7XG4gIGNvbnN0IG5hdkdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5hdkdyb3VwLmNsYXNzTGlzdC5hZGQoJ25hdi1ncm91cCcpO1xuICByZXR1cm4gbmF2R3JvdXA7XG59XG5cbi8vIEFkZCBUYXNrIGZvcm0gcHJpb3JpdHkgc2VsZWN0aW9uXG5mdW5jdGlvbiBjb21wb25lbnRUYXNrUHJpb3JpdHkoKSB7XG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIHByaW9yaXR5LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3JpdHknKTtcbiAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKCduYW1lJywgJ3ByaW9yaXR5Jyk7XG4gIGNvbnN0IE9wdGlvbk9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBjb25zdCBPcHRpb25Ud28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgT3B0aW9uT25lLnZhbHVlID0gJ2xvdyc7XG4gIE9wdGlvbk9uZS50ZXh0Q29udGVudCA9ICdMb3cnO1xuICBPcHRpb25Ud28udmFsdWUgPSAnaGlnaCc7XG4gIE9wdGlvblR3by50ZXh0Q29udGVudCA9ICdIaWdoJztcbiAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQoT3B0aW9uT25lKTtcbiAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQoT3B0aW9uVHdvKTtcbiAgcmV0dXJuIHByaW9yaXR5O1xufVxuXG4vLyBBZGQgVGFzayBmb3JtIHByaW9yaXR5IGxhYmVsXG5mdW5jdGlvbiBjb21wb25lbnRUYXNrUHJpb3JpdHlMYWJlbCgpIHtcbiAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIHByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncHJpb3JpdHknKTtcbiAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eSc7XG4gIHByaW9yaXR5TGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1sYWJlbCcpO1xuICByZXR1cm4gcHJpb3JpdHlMYWJlbDtcbn1cblxuLy8gQWRkIFRhc2sgZm9ybSB0YXNrIG5hbWUgaGVhZGVyIGFuZCBpbnB1dFxuZnVuY3Rpb24gY29tcG9uZW50Rm9ybVRhc2tOYW1lKCkge1xuICBjb25zdCB0YXNrTmFtZUdyb3VwID0gY29tcG9uZW50VGFza0l0ZW1Hcm91cCgpO1xuICBjb25zdCB0YXNrTmFtZUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgdGFza05hbWVHcm91cC5hcHBlbmRDaGlsZChjb21wb25lbnRTZWN0aW9uSGVhZGVyKCdBZGQgVGFzaycpKTtcbiAgdGFza05hbWVHcm91cC5hcHBlbmRDaGlsZCh0YXNrTmFtZUZpZWxkKTtcbiAgdGFza05hbWVGaWVsZC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGFzay1uYW1lJyk7XG4gIHRhc2tOYW1lRmllbGQuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrLW5hbWUnKTtcbiAgdGFza05hbWVGaWVsZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICB0YXNrTmFtZUZpZWxkLmNsYXNzTGlzdC5hZGQoJ3Rhc2stbmFtZS1maWVsZCcpO1xuICByZXR1cm4gdGFza05hbWVHcm91cDtcbn1cblxuLy8gQWRkIFRhc2sgZm9ybSBkZXNjcmlwdGlvbiBpbnB1dCBmaWVsZFxuZnVuY3Rpb24gY29tcG9uZW50Rm9ybVRhc2tEZXNjcmlwdGlvbigpIHtcbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICB0YXNrRGVzY3JpcHRpb25GaWVsZC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGFzay1kZXNjcmlwdGlvbicpO1xuICB0YXNrRGVzY3JpcHRpb25GaWVsZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2stZGVzY3JpcHRpb24nKTtcbiAgdGFza0Rlc2NyaXB0aW9uRmllbGQuY2xhc3NMaXN0LmFkZCgndGFzay1kZXNjcmlwdGlvbi1maWVsZCcpO1xuICByZXR1cm4gdGFza0Rlc2NyaXB0aW9uRmllbGQ7XG59XG5cbi8vIEFkZCBUYXNrIGZvcm0gZGVzY3JpcHRpb24gbGFiZWxcbmZ1bmN0aW9uIGNvbXBvbmVudEZvcm1UYXNrRGVzY3JpcHRpb25MYWJlbCgpIHtcbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICB0YXNrRGVzY3JpcHRpb25MYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWxhYmVsJyk7XG4gIHRhc2tEZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Rhc2stZGVzY3JpcHRpb24nKTtcbiAgdGFza0Rlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb24nO1xuICByZXR1cm4gdGFza0Rlc2NyaXB0aW9uTGFiZWw7XG59XG5cbi8vIEFkZCBUYXNrIGZvcm0gZHVlIGRhdGUgaW5wdXRcbmZ1bmN0aW9uIGNvbXBvbmVudEZvcm1UYXNrRHVlRGF0ZSgpIHtcbiAgY29uc3QgdGFza0R1ZURhdGVGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHRhc2tEdWVEYXRlRmllbGQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2R1ZS1kYXRlJyk7XG4gIHRhc2tEdWVEYXRlRmllbGQuc2V0QXR0cmlidXRlKCdpZCcsICdkdWUtZGF0ZScpO1xuICB0YXNrRHVlRGF0ZUZpZWxkLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gIHRhc2tEdWVEYXRlRmllbGQuY2xhc3NMaXN0LmFkZCgnZHVlLWRhdGUtZmllbGQnKTtcbiAgcmV0dXJuIHRhc2tEdWVEYXRlRmllbGQ7XG59XG5cbi8vIEFkZCBUYXNrIGZvcm0gZHVlIGRhdGUgbGFiZWxcbmZ1bmN0aW9uIGNvbXBvbmVudEZvcm1UYXNrRHVlRGF0ZUxhYmVsKCkge1xuICBjb25zdCB0YXNrRHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgdGFza0R1ZURhdGVMYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWxhYmVsJyk7XG4gIHRhc2tEdWVEYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZHVlLWRhdGUnKTtcbiAgdGFza0R1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEdWUgRGF0ZSc7XG4gIHJldHVybiB0YXNrRHVlRGF0ZUxhYmVsO1xufVxuXG4vLyBBZGQgVGFzayBmb3JtIHN1Ym1pdCBidXR0b25cbmZ1bmN0aW9uIGNvbXBvbmVudEZvcm1UYXNrU3VibWl0KCkge1xuICBjb25zdCB0YXNrU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHRhc2tTdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICB0YXNrU3VibWl0LnNldEF0dHJpYnV0ZSgnaWQnLCAndGFzay1zdWJtaXQnKTtcbiAgdGFza1N1Ym1pdC50ZXh0Q29udGVudCA9ICdBREQnO1xuICByZXR1cm4gdGFza1N1Ym1pdDtcbn1cblxuLy8gQWRkIFRhc2sgZm9ybSBiYWNrIGJ1dHRvblxuZnVuY3Rpb24gY29tcG9uZW50Rm9ybVRhc2tCYWNrQnV0dG9uKG9uQ2FuY2VsKSB7XG4gIGNvbnN0IGJhY2tJY29uID0gbmV3IEltYWdlKCk7XG4gIGJhY2tJY29uLnNyYyA9IExlZnRTb2xpZDtcbiAgYmFja0ljb24uY2xhc3NMaXN0LmFkZCgnaWNvbnMnLCAnYmFjay1pY29uJyk7XG4gIGJhY2tJY29uLm9uY2xpY2sgPSBvbkNhbmNlbDtcbiAgcmV0dXJuIGJhY2tJY29uO1xufVxuXG4vLyBHZXQgdGFzayBpbmZvcm1hdGlvbiBmcm9tIEFkZCBUYXNrIGZvcm1cbmV4cG9ydCBmdW5jdGlvbiBnZXRUYXNrSW5mb3JtYXRpb24oKSB7XG4gIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLW5hbWUnKS52YWx1ZTtcbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlLWRhdGUnKS52YWx1ZTtcbiAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JykudmFsdWU7XG5cbiAgY29uc3QgdGFzayA9IG5ldyBUYXNrKHRhc2tUaXRsZSwgdGFza0Rlc2NyaXB0aW9uLCB0YXNrRGF0ZSwgdGFza1ByaW9yaXR5KTtcblxuICByZXR1cm4gdGFzaztcbn1cblxuLy8gRnVsbCBBZGQgVGFzayBpbnB1dCBmb3JtXG5leHBvcnQgZnVuY3Rpb24gY29tcG9uZW50VGFza0lucHV0Rm9ybShvbnN1Ym1pdCwgb25DYW5jZWwpIHtcbiAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGNvbnN0IHRhc2tGb3JtR3JvdXAgPSBjb21wb25lbnRUYXNrRm9ybUdyb3VwKCk7XG4gIGNvbnN0IHRhc2tOYW1lR3JvdXAgPSBjb21wb25lbnRUYXNrSXRlbUdyb3VwKCk7XG4gIGNvbnN0IGRlc2NyaXB0aW9uR3JvdXAgPSBjb21wb25lbnRUYXNrSXRlbUdyb3VwKCk7XG4gIGNvbnN0IGlucHV0R3JvdXAgPSBjb21wb25lbnRJbnB1dEdyb3VwKCk7XG4gIGNvbnN0IHRhc2tEdWVEYXRlR3JvdXAgPSBjb21wb25lbnRUYXNrSXRlbUdyb3VwKCk7XG4gIGNvbnN0IHRhc2tQcmlvcml0eUdyb3VwID0gY29tcG9uZW50VGFza0l0ZW1Hcm91cCgpO1xuICBjb25zdCBuYXZpZ2F0aW9uR3JvdXAgPSBjb21wb25lbnROYXZpZ2F0aW9uR3JvdXAoKTtcblxuICB0YXNrRm9ybS5jbGFzc0xpc3QuYWRkKCd0YXNrLWZvcm0nKTtcbiAgdGFza0Zvcm0uc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrLWZvcm0nKTtcbiAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza0Zvcm1Hcm91cCk7XG5cbiAgdGFza0Zvcm0ub25zdWJtaXQgPSBvbnN1Ym1pdDtcblxuICAvLyBBcHBlbmQgdGFzayBuYW1lIGlucHV0IGFuZCBoZWFkZXJcbiAgdGFza0Zvcm1Hcm91cC5hcHBlbmRDaGlsZCh0YXNrTmFtZUdyb3VwKTtcbiAgdGFza05hbWVHcm91cC5hcHBlbmRDaGlsZChjb21wb25lbnRGb3JtVGFza05hbWUoKSk7XG5cbiAgLy8gQXBwZW5kIHRhc2sgZGVzY3JpcHRpb24gaW5wdXQgYW5kIGxhYmVsXG4gIHRhc2tGb3JtR3JvdXAuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25Hcm91cCk7XG4gIGRlc2NyaXB0aW9uR3JvdXAuYXBwZW5kQ2hpbGQoY29tcG9uZW50Rm9ybVRhc2tEZXNjcmlwdGlvbkxhYmVsKCkpO1xuICBkZXNjcmlwdGlvbkdyb3VwLmFwcGVuZENoaWxkKGNvbXBvbmVudEZvcm1UYXNrRGVzY3JpcHRpb24oKSk7XG5cbiAgLy8gQWRkIHRhc2sgZHVlIGRhdGUgaW5wdXQgYW5kIGxhYmVsXG4gIHRhc2tGb3JtR3JvdXAuYXBwZW5kQ2hpbGQoaW5wdXRHcm91cCk7XG4gIGlucHV0R3JvdXAuYXBwZW5kQ2hpbGQodGFza0R1ZURhdGVHcm91cCk7XG4gIHRhc2tEdWVEYXRlR3JvdXAuYXBwZW5kQ2hpbGQoY29tcG9uZW50Rm9ybVRhc2tEdWVEYXRlTGFiZWwoKSk7XG4gIHRhc2tEdWVEYXRlR3JvdXAuYXBwZW5kQ2hpbGQoY29tcG9uZW50Rm9ybVRhc2tEdWVEYXRlKCkpO1xuXG4gIC8vIEFkZCB0YXNrIHByaW9yaXR5IHNlbGVjdGlvbiBhbmQgbGFiZWxcbiAgaW5wdXRHcm91cC5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHlHcm91cCk7XG4gIHRhc2tQcmlvcml0eUdyb3VwLmFwcGVuZENoaWxkKGNvbXBvbmVudFRhc2tQcmlvcml0eUxhYmVsKCkpO1xuICB0YXNrUHJpb3JpdHlHcm91cC5hcHBlbmRDaGlsZChjb21wb25lbnRUYXNrUHJpb3JpdHkoKSk7XG5cbiAgLy8gQWRkIG5hdmlnYXRpb24gKGJhY2sgYnV0dG9uIGFuZCBzdWJtaXQgZm9ybSBidXR0b24pXG4gIHRhc2tGb3JtLmFwcGVuZENoaWxkKG5hdmlnYXRpb25Hcm91cCk7XG4gIG5hdmlnYXRpb25Hcm91cC5hcHBlbmRDaGlsZChjb21wb25lbnRGb3JtVGFza0JhY2tCdXR0b24ob25DYW5jZWwpKTtcbiAgbmF2aWdhdGlvbkdyb3VwLmFwcGVuZENoaWxkKGNvbXBvbmVudEZvcm1UYXNrU3VibWl0KCkpO1xuXG4gIHJldHVybiB0YXNrRm9ybTtcbn1cblxuLy8gSW5kaXZpZHVhbCB0YXNrIGRpc3BsYXllZCBpbiB0YXNrIGxpc3RcbmZ1bmN0aW9uIGRpc3BsYXlUYXNrKFxuICB0YXNrTmFtZSxcbiAgdGFza0Rlc2NyaXB0aW9uLFxuICB0YXNrRHVlRGF0ZSxcbiAgdGFza1ByaW9yaXR5LFxuICB0YXNrSWRcbikge1xuICBjb25zdCB0YXNrID0gY29tcG9uZW50VGFzaygpO1xuICBjb25zdCB0YXNrSW5mbyA9IGNvbXBvbmVudFRhc2tJbmZvKCk7XG4gIGNvbnN0IHBlcm1hbmVudFRhc2tEaXNwbGF5ID0gY29tcG9uZW50UGVybWFuZW50VGFza0Rpc3BsYXkoKTtcbiAgY29uc3Qgb3B0aW9uYWxUYXNrRGlzcGxheSA9IGNvbXBvbmVudE9wdGlvbmFsVGFza0Rpc3BsYXkoKTtcbiAgY29uc3QgY2hlY2tib3ggPSBjb21wb25lbnRDaGVja2JveCgpO1xuICBjb25zdCBlZGl0VG9vbHMgPSBjb21wb25lbnRFZGl0VG9vbHMoKTtcbiAgY29uc3QgZXhwYW5kZWRUYXNrSW5mb0NvbHVtbiA9IGNvbXBvbmVudEV4cGFuZGVkVGFza0luZm9Db2x1bW4oKTtcbiAgY29uc3QgZXhwYW5kZWRUYXNrSW5mb0NvbHVtbjIgPSBjb21wb25lbnRFeHBhbmRlZFRhc2tJbmZvQ29sdW1uKCk7XG4gIGNvbnN0IGV4cGFuZGVkVGFza0luZm9DZWxsVGl0bGUgPSBjb21wb25lbnRFeHBhbmRlZFRhc2tJbmZvQ2VsbCgpO1xuICBjb25zdCBleHBhbmRlZFRhc2tJbmZvQ2VsbERlc2NyaXB0aW9uID0gY29tcG9uZW50RXhwYW5kZWRUYXNrSW5mb0NlbGwoKTtcbiAgY29uc3QgZXhwYW5kZWRUYXNrSW5mb0NlbGxEdWVEYXRlID0gY29tcG9uZW50RXhwYW5kZWRUYXNrSW5mb0NlbGwoKTtcbiAgY29uc3QgZXhwYW5kZWRUYXNrSW5mb0NlbGxQcmlvcml0eSA9IGNvbXBvbmVudEV4cGFuZGVkVGFza0luZm9DZWxsKCk7XG4gIGNvbnN0IGNoZWNrYm94TGFiZWwgPSBjb21wb25lbnRDaGVja2JveExhYmVsKHRhc2tOYW1lKTtcbiAgY29uc3QgZWRpdEljb24gPSBjb21wb25lbnRFZGl0SWNvbigpO1xuICBjb25zdCB0cmFzaEljb24gPSBjb21wb25lbnRUcmFzaEljb24oKTtcblxuICB0YXNrLmFwcGVuZENoaWxkKHBlcm1hbmVudFRhc2tEaXNwbGF5KTtcbiAgcGVybWFuZW50VGFza0Rpc3BsYXkuYXBwZW5kQ2hpbGQodGFza0luZm8pO1xuICB0YXNrSW5mby5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gIGNoZWNrYm94LmFwcGVuZENoaWxkKGNvbXBvbmVudENoZWNrYm94RmllbGQoKSk7XG4gIGNoZWNrYm94LmFwcGVuZENoaWxkKGNoZWNrYm94TGFiZWwpO1xuICBwZXJtYW5lbnRUYXNrRGlzcGxheS5hcHBlbmRDaGlsZChlZGl0VG9vbHMpO1xuICBlZGl0VG9vbHMuYXBwZW5kQ2hpbGQoZWRpdEljb24pO1xuICBlZGl0VG9vbHMuYXBwZW5kQ2hpbGQodHJhc2hJY29uKTtcbiAgdGFzay5hcHBlbmRDaGlsZChvcHRpb25hbFRhc2tEaXNwbGF5KTtcblxuICBjaGVja2JveExhYmVsLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIHRhc2tJZCk7XG4gIGVkaXRJY29uLnNldEF0dHJpYnV0ZSgnZWRpdC1pZCcsIHRhc2tJZCk7XG4gIHRyYXNoSWNvbi5zZXRBdHRyaWJ1dGUoJ2RlbC1pZCcsIHRhc2tJZCk7XG5cbiAgLy8gT3B0aW9uYWwgdGFzayBkaXNwbGF5IChleHBhbmRhYmxlKVxuICBvcHRpb25hbFRhc2tEaXNwbGF5LmFwcGVuZENoaWxkKGV4cGFuZGVkVGFza0luZm9Db2x1bW4pO1xuICBleHBhbmRlZFRhc2tJbmZvQ29sdW1uLmFwcGVuZENoaWxkKGV4cGFuZGVkVGFza0luZm9DZWxsVGl0bGUpO1xuXG4gIGV4cGFuZGVkVGFza0luZm9DZWxsVGl0bGUuYXBwZW5kQ2hpbGQoXG4gICAgY29tcG9uZW50RXhwYW5kZWRUYXNrU3BhbkJvbGQoJ1RpdGxlOiAnKVxuICApO1xuICBleHBhbmRlZFRhc2tJbmZvQ2VsbFRpdGxlLmFwcGVuZENoaWxkKGNvbXBvbmVudEV4cGFuZGVkVGFza1NwYW4odGFza05hbWUpKTtcblxuICBleHBhbmRlZFRhc2tJbmZvQ29sdW1uLmFwcGVuZENoaWxkKGV4cGFuZGVkVGFza0luZm9DZWxsRHVlRGF0ZSk7XG4gIGV4cGFuZGVkVGFza0luZm9DZWxsRHVlRGF0ZS5hcHBlbmRDaGlsZChcbiAgICBjb21wb25lbnRFeHBhbmRlZFRhc2tTcGFuQm9sZCgnRHVlIERhdGU6ICcpXG4gICk7XG4gIGV4cGFuZGVkVGFza0luZm9DZWxsRHVlRGF0ZS5hcHBlbmRDaGlsZChcbiAgICBjb21wb25lbnRFeHBhbmRlZFRhc2tTcGFuKHRhc2tEdWVEYXRlKVxuICApO1xuXG4gIG9wdGlvbmFsVGFza0Rpc3BsYXkuYXBwZW5kQ2hpbGQoZXhwYW5kZWRUYXNrSW5mb0NvbHVtbjIpO1xuICBleHBhbmRlZFRhc2tJbmZvQ29sdW1uMi5hcHBlbmRDaGlsZChleHBhbmRlZFRhc2tJbmZvQ2VsbERlc2NyaXB0aW9uKTtcbiAgZXhwYW5kZWRUYXNrSW5mb0NlbGxEZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChcbiAgICBjb21wb25lbnRFeHBhbmRlZFRhc2tTcGFuQm9sZCgnRGVzY3JpcHRpb246ICcpXG4gICk7XG4gIGV4cGFuZGVkVGFza0luZm9DZWxsRGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoXG4gICAgY29tcG9uZW50RXhwYW5kZWRUYXNrU3Bhbih0YXNrRGVzY3JpcHRpb24pXG4gICk7XG5cbiAgZXhwYW5kZWRUYXNrSW5mb0NvbHVtbjIuYXBwZW5kQ2hpbGQoZXhwYW5kZWRUYXNrSW5mb0NlbGxQcmlvcml0eSk7XG4gIGV4cGFuZGVkVGFza0luZm9DZWxsUHJpb3JpdHkuYXBwZW5kQ2hpbGQoXG4gICAgY29tcG9uZW50RXhwYW5kZWRUYXNrU3BhbkJvbGQoJ1ByaW9yaXR5OiAnKVxuICApO1xuICBleHBhbmRlZFRhc2tJbmZvQ2VsbFByaW9yaXR5LmFwcGVuZENoaWxkKFxuICAgIGNvbXBvbmVudEV4cGFuZGVkVGFza1NwYW4odGFza1ByaW9yaXR5KVxuICApO1xuXG4gIHJldHVybiB0YXNrO1xufVxuXG4vLyBTaG93IHRoZSBBZGQgVGFzayBmb3JtXG5leHBvcnQgZnVuY3Rpb24gc2hvd0FkZFRhc2tGb3JtKG9uc3VibWl0LCBvbkNhbmNlbCkge1xuICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcy1jYXJkJyk7XG4gIHRhc2tzQ29udGFpbmVyLnJlcGxhY2VDaGlsZHJlbihjb21wb25lbnRUYXNrSW5wdXRGb3JtKG9uc3VibWl0LCBvbkNhbmNlbCkpO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRBZGRUYXNrQnV0dG9uKG9uQ2xpY2tPZkFkZFRhc2tCdXR0b24pIHtcbiAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBhZGRUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZC10YXNrLWJ1dHRvbicpO1xuICBhZGRUYXNrQnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJztcbiAgYWRkVGFza0J1dHRvbi5vbmNsaWNrID0gb25DbGlja09mQWRkVGFza0J1dHRvbjtcbiAgcmV0dXJuIGFkZFRhc2tCdXR0b247XG59XG5cbi8vIEFkZCAndGFza3MnIGNsYXNzIHNlY3Rpb25cbmV4cG9ydCBmdW5jdGlvbiBzaG93VGFza3NTZWN0aW9uKG9uQ2xpY2tPZkFkZFRhc2tCdXR0b24pIHtcbiAgY29uc3QgdGFza3NDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzLWNhcmQnKTtcbiAgY29uc3QgdGFza3MgPSBjb21wb25lbnRUYXNrcygpO1xuICB0YXNrc0NhcmQuYXBwZW5kQ2hpbGQodGFza3MpO1xuICB0YXNrc0NhcmQuYXBwZW5kQ2hpbGQoY29tcG9uZW50QWRkVGFza0J1dHRvbihvbkNsaWNrT2ZBZGRUYXNrQnV0dG9uKSk7XG4gIHRhc2tzLmFwcGVuZENoaWxkKGNvbXBvbmVudFNlY3Rpb25IZWFkZXIoJ1Rhc2tzJykpO1xuICByZXR1cm4gdGFza3NDYXJkO1xufVxuXG4vLyBJbml0aWFsaXplIHBhZ2VcbmV4cG9ydCBmdW5jdGlvbiBpbml0KG9uQ2xpY2tPZkFkZFRhc2tCdXR0b24pIHtcbiAgY29uc3QgY29udGFpbmVyID0gY29tcG9uZW50Q29udGFpbmVyKCk7XG4gIGNvbnN0IGhlYWRlciA9IGNvbXBvbmVudEhlYWRlcigpO1xuICBjb25zdCBjb250ZW50ID0gY29tcG9uZW50Q29udGVudCgpO1xuICBjb25zdCBzaWRlYmFyID0gY29tcG9uZW50U2lkZWJhcigpO1xuICBjb25zdCBmaWx0ZXJzID0gY29tcG9uZW50RmlsdGVycygpO1xuICBjb25zdCBmaWx0ZXJBbGwgPSBjb21wb25lbnRGaWx0ZXIoKTtcbiAgY29uc3QgZmlsdGVyVG9kYXkgPSBjb21wb25lbnRGaWx0ZXIoKTtcbiAgY29uc3QgZmlsdGVyV2VlayA9IGNvbXBvbmVudEZpbHRlcigpO1xuICBjb25zdCBwcm9qZWN0c0hlYWRlciA9IGNvbXBvbmVudFByb2plY3RzSGVhZGVyKCk7XG4gIGNvbnN0IHByb2plY3RzID0gY29tcG9uZW50UHJvamVjdHMoKTtcbiAgY29uc3QgdGFza3NDYXJkID0gY29tcG9uZW50VGFza3NDYXJkKCk7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGNvbXBvbmVudFRpdGxlKCkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc2lkZWJhcik7XG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQoZmlsdGVycyk7XG4gIGZpbHRlcnMuYXBwZW5kQ2hpbGQoY29tcG9uZW50U2VjdGlvbkhlYWRlcignRmlsdGVycycpKTtcbiAgZmlsdGVycy5hcHBlbmRDaGlsZChmaWx0ZXJBbGwpO1xuICBmaWx0ZXJBbGwuYXBwZW5kQ2hpbGQoY29tcG9uZW50SW5ib3hJY29uKCkpO1xuICBmaWx0ZXJBbGwuYXBwZW5kQ2hpbGQoY29tcG9uZW50RmlsdGVyTmFtZSgnQWxsJykpO1xuICBmaWx0ZXJzLmFwcGVuZENoaWxkKGZpbHRlclRvZGF5KTtcbiAgZmlsdGVyVG9kYXkuYXBwZW5kQ2hpbGQoY29tcG9uZW50VG9kYXlJY29uKCkpO1xuICBmaWx0ZXJUb2RheS5hcHBlbmRDaGlsZChjb21wb25lbnRGaWx0ZXJOYW1lKCdUb2RheScpKTtcbiAgZmlsdGVycy5hcHBlbmRDaGlsZChmaWx0ZXJXZWVrKTtcbiAgZmlsdGVyV2Vlay5hcHBlbmRDaGlsZChjb21wb25lbnRXZWVrSWNvbigpKTtcbiAgZmlsdGVyV2Vlay5hcHBlbmRDaGlsZChjb21wb25lbnRGaWx0ZXJOYW1lKCdXZWVrJykpO1xuICBzaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3RzKTtcbiAgcHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdHNIZWFkZXIpO1xuICBwcm9qZWN0c0hlYWRlci5hcHBlbmRDaGlsZChjb21wb25lbnRQcm9qZWN0c0hlYWRpbmcoKSk7XG4gIHByb2plY3RzSGVhZGVyLmFwcGVuZENoaWxkKGNvbXBvbmVudEFkZFByb2plY3RJY29uKCkpO1xuICBwcm9qZWN0cy5hcHBlbmRDaGlsZChjb21wb25lbnRQcm9qZWN0SW5wdXRGb3JtKCkpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1zdWJtaXQnKS5oaWRkZW4gPSB0cnVlO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1mb3JtJykuaGlkZGVuID0gdHJ1ZTtcbiAgY29udGVudC5hcHBlbmRDaGlsZCh0YXNrc0NhcmQpO1xuICBzaG93VGFza3NTZWN0aW9uKG9uQ2xpY2tPZkFkZFRhc2tCdXR0b24pO1xufVxuXG4vLyBBZGQgdGFzayB0byBwYWdlXG5leHBvcnQgZnVuY3Rpb24gYWRkVGFza1RvRG9tKHRhc2spIHtcbiAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKTtcbiAgdGFza3MuYXBwZW5kQ2hpbGQoXG4gICAgZGlzcGxheVRhc2soXG4gICAgICB0YXNrLnRpdGxlLFxuICAgICAgdGFzay5kZXNjcmlwdGlvbixcbiAgICAgIHRhc2suZHVlRGF0ZSxcbiAgICAgIHRhc2sucHJpb3JpdHksXG4gICAgICB0YXNrLmlkXG4gICAgKVxuICApO1xufVxuXG4vLyBHZXQgcHJvamVjdCBmb3JtXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvamVjdEZvcm0oKSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtJyk7XG59XG5cbi8vIEFkZCBwcm9qZWN0IHRvIHBhZ2VcbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qZWN0VG9ET00obmV3UHJvamVjdCkge1xuICBjb25zdCB7IGlkLCB0aXRsZSB9ID0gbmV3UHJvamVjdDtcbiAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcbiAgY29uc3QgcHJvamVjdCA9IGNvbXBvbmVudFByb2plY3QoKTtcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gY29tcG9uZW50UHJvamVjdFRpdGxlKHRpdGxlKTtcbiAgcHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpZCk7XG4gIHByb2plY3RzLmluc2VydEJlZm9yZShwcm9qZWN0LCBwcm9qZWN0cy5jaGlsZHJlblsyXSk7XG4gIHByb2plY3QuYXBwZW5kQ2hpbGQoY29tcG9uZW50UHJvamVjdEljb24oKSk7XG4gIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbiAgZ2V0UHJvamVjdEZvcm0oKS5yZXNldCgpO1xuICByZXR1cm4gcHJvamVjdHM7XG59XG5cbi8vIElmIHByb2plY3QgZm9ybSBpcyBoaWRkZW4gaXMgdHJ1ZSwgdGhlbiB0aGF0IG1lYW5zIHByb2plY3QgZm9ybVxuLy8gaXMgY29sbGFwc2VkLiBUaGlzIGZ1bmN0aW9uIHdvdWxkIHRoZW4gcmV0dXJuIGZhbHNlLFxuLy8gYmVjYXVzZSBpdCBpcyBmYWxzZSB0aGF0IHRoZSBwcm9qZWN0IGZvcm0gaXMgZXhwYW5kZWQuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdEZvcm1FeHBhbmRlZCgpIHtcbiAgcmV0dXJuICFnZXRQcm9qZWN0Rm9ybSgpLmhpZGRlbjtcbn1cblxuLy8gRXhwYW5kIG9yIGNvbGxhcHNlIHRoZSBwcm9qZWN0IGZvcm0gYmFzZWQgb24gcGFzc2VkIGluIHRydWUvZmFsc2UgdmFsdWVcbmV4cG9ydCBmdW5jdGlvbiBleHBhbmRDcmVhdGVQcm9qZWN0Rm9ybShleHBhbmQpIHtcbiAgZ2V0UHJvamVjdEZvcm0oKS5oaWRkZW4gPSAhZXhwYW5kO1xufVxuXG4vLyBSb3RhdGUgYWRkIHByb2plY3QgaWNvbiB3aGVuIGNhbGxlZFxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZUFkZFByb2plY3RJY29uKCkge1xuICBjb25zdCBhZGRQcm9qZWN0SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbHVzLWljb24nKTtcbiAgaWYgKCFhZGRQcm9qZWN0SWNvbi5jbGFzc0xpc3QuY29udGFpbnMoJ3JvdGF0ZScpKSB7XG4gICAgYWRkUHJvamVjdEljb24uY2xhc3NMaXN0LmFkZCgncm90YXRlJyk7XG4gIH0gZWxzZSBpZiAoYWRkUHJvamVjdEljb24uY2xhc3NMaXN0LmNvbnRhaW5zKCdyb3RhdGUnKSkge1xuICAgIGFkZFByb2plY3RJY29uLmNsYXNzTGlzdC5yZW1vdmUoJ3JvdGF0ZScpO1xuICB9XG59XG5cbi8vIFJlbW92ZSBhY3RpdmUgY2xhc3MgZnJvbSBhbnkgcHJldmlvdXNseSBhY3RpdmUgZWxlbWVudCBpbiBzaWRlYmFyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQWN0aXZlQ2xhc3MoKSB7XG4gIGNvbnN0IHNpZGViYXJMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaWRlYmFyLWxpbmtzJyk7XG4gIHNpZGViYXJMaW5rcy5mb3JFYWNoKChzaWRlYmFyTGluaykgPT4ge1xuICAgIHNpZGViYXJMaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICB9KTtcbn1cblxuLy8gSGlnaGxpZ2h0IGN1cnJlbnRseSBzZWxlY3RlZCBzaWRlYmFyIG9wdGlvbiBhbmQgcmVtb3ZlIGFueSBpbmFjdGl2ZSBoaWdobGlnaHRlZCBvcHRpb25zXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlU2lkZWJhckhpZ2hsaWdodChlbGVtZW50KSB7XG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnc2lkZWJhci1saW5rcycpKSB7XG4gICAgcmVtb3ZlQWN0aXZlQ2xhc3MoKTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICB9IGVsc2UgaWYgKFxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmaWx0ZXItZWxlbWVudHMnKSB8fFxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9qZWN0LWVsZW1lbnRzJylcbiAgKSB7XG4gICAgcmVtb3ZlQWN0aXZlQ2xhc3MoKTtcbiAgICBlbGVtZW50LnBhcmVudE5vZGUuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gIH1cbn1cblxuLy8gU2hvdyBkZWZhdWx0IHByb2plY3Qgd2hlbiBwYWdlIGlzIGxvYWRlZFxuZXhwb3J0IGZ1bmN0aW9uIHNob3dEZWZhdWx0UHJvamVjdChzZWxlY3RlZFByb2plY3QpIHtcbiAgc2VsZWN0ZWRQcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBhZGRUYXNrVG9Eb20odGFzayk7XG4gIH0pO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWlkPVwiMVwiXScpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xufVxuXG4vLyBDbGVhciB0YXNrcyBmcm9tIHRoZSBET01cbmV4cG9ydCBmdW5jdGlvbiBjbGVhclRhc2tzKCkge1xuICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpO1xuICB3aGlsZSAodGFza3MuY2hpbGRyZW4ubGVuZ3RoID4gMSkge1xuICAgIHRhc2tzLnJlbW92ZUNoaWxkKHRhc2tzLmxhc3RDaGlsZCk7XG4gIH1cbn1cblxuLy8gUmVtb3ZlIEFkZCBUYXNrIGZvcm1cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZUFkZFRhc2tGb3JtKCkge1xuICBjb25zdCB0YXNrc0NhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MtY2FyZCcpO1xuICB3aGlsZSAodGFza3NDYXJkLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICB0YXNrc0NhcmQucmVtb3ZlQ2hpbGQodGFza3NDYXJkLmxhc3RDaGlsZCk7XG4gIH1cbn1cblxuLy8gU2hvdyBhbGwgdGFza3MgaW4gYSBzZWxlY3RlZCBwcm9qZWN0XG5leHBvcnQgZnVuY3Rpb24gc2hvd1Rhc2tzSW5Qcm9qZWN0KHNlbGVjdGlvbikge1xuICBzZWxlY3Rpb24udGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGFkZFRhc2tUb0RvbSh0YXNrKTtcbiAgfSk7XG59XG5cbi8vIFRvZ2dsZSBvcHRpb25hbCB0YXNrIGluZm9ybWF0aW9uIGRpc3BsYXkgd2hlbiBjbGlja2luZyB0aGUgY2hlY2tib3ggbGFiZWxcbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVPcHRpb25hbFRhc2tEaXNwbGF5KGUpIHtcbiAgY29uc3Qgb3B0aW9uYWxEaXNwbGF5ID0gZS50YXJnZXQuY2xvc2VzdCgnLnRhc2snKS5jaGlsZHJlblsxXTtcblxuICBpZiAob3B0aW9uYWxEaXNwbGF5LnN0eWxlLmRpc3BsYXkgPT09ICdmbGV4Jykge1xuICAgIG9wdGlvbmFsRGlzcGxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9IGVsc2Uge1xuICAgIG9wdGlvbmFsRGlzcGxheS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVUYXNrKGUsIHNlbGVjdGVkUHJvamVjdCkge1xuICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcblxuICBjb25zdCB0YXNrVG9EZWxldGUgPSBzZWxlY3RlZFByb2plY3QudGFza3MuZmluZEluZGV4KFxuICAgICh0YXNrKSA9PiB0YXNrLmlkLnRvU3RyaW5nKCkgPT09IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGVsLWlkJylcbiAgKTtcbiAgc2VsZWN0ZWRQcm9qZWN0LnRhc2tzLnNwbGljZSh0YXNrVG9EZWxldGUsIDEpO1xufVxuIiwiaW1wb3J0IHtcbiAgaW5pdCxcbiAgYWRkUHJvamVjdFRvRE9NLFxuICBnZXRQcm9qZWN0Rm9ybSxcbiAgcHJvamVjdEZvcm1FeHBhbmRlZCxcbiAgZXhwYW5kQ3JlYXRlUHJvamVjdEZvcm0sXG4gIHJvdGF0ZUFkZFByb2plY3RJY29uLFxuICByZW1vdmVBY3RpdmVDbGFzcyxcbiAgdG9nZ2xlU2lkZWJhckhpZ2hsaWdodCxcbiAgY2xlYXJUYXNrcyxcbiAgc2hvd0RlZmF1bHRQcm9qZWN0LFxuICBzaG93VGFza3NJblByb2plY3QsXG4gIGdldFRhc2tJbmZvcm1hdGlvbixcbiAgY2xvc2VBZGRUYXNrRm9ybSxcbiAgc2hvd1Rhc2tzU2VjdGlvbixcbiAgc2hvd0FkZFRhc2tGb3JtLFxuICB0b2dnbGVPcHRpb25hbFRhc2tEaXNwbGF5LFxuICBkZWxldGVUYXNrLFxufSBmcm9tICcuL2RvbS1tYW5pcHVsYXRpb24nO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgeyBnZXRQcm9qZWN0cywgYWRkUHJvamVjdCB9IGZyb20gJy4vc2l0ZS1zdG9yYWdlJztcblxuY29uc3QgcHJpbWFyeVRhc2tzID0gW1xuICBuZXcgVGFzaygnUmVzcG9uZCB0byBlbWFpbHMnLCAnQ2F0Y2ggdXAgb24gcGVyc29uYWwgZW1haWxzJywgJzMvNC8yMDIzJywgMSksXG5dO1xuXG5jb25zdCBwcmltYXJ5UHJvamVjdCA9IG5ldyBQcm9qZWN0KCdIb21lJywgcHJpbWFyeVRhc2tzKTtcbmNvbnN0IHNlY29uZGFyeVByb2plY3QgPSBuZXcgUHJvamVjdCgnV29yaycpO1xuXG5hZGRQcm9qZWN0KHByaW1hcnlQcm9qZWN0KTtcbmFkZFByb2plY3Qoc2Vjb25kYXJ5UHJvamVjdCk7XG5cbmNvbnN0IHRhc2tUd28gPSBuZXcgVGFzayhcbiAgJ01lYWwgcGxhbm5pbmcnLFxuICAnUGxhbiBtZWFscyBmb3IgbmV4dCB3ZWVrJyxcbiAgJzMvNC8yMDIzJyxcbiAgMlxuKTtcblxucHJpbWFyeVByb2plY3QuYWRkVGFzayh0YXNrVHdvKTtcbmNvbnNvbGUubG9nKGdldFByb2plY3RzKCkpO1xuXG5sZXQgc2VsZWN0ZWRQcm9qZWN0ID0gZ2V0UHJvamVjdHMoKVswXTtcblxuZnVuY3Rpb24gY3JlYXRlVGFzaygpIHtcbiAgY29uc3QgdGFzayA9IGdldFRhc2tJbmZvcm1hdGlvbigpO1xuXG4gIC8vIEFkZCB0YXNrIHRvIHRoZSBzZWxlY3RlZCBwcm9qZWN0J3MgYXJyYXkgb2YgdGFza3NcbiAgc2VsZWN0ZWRQcm9qZWN0LmFkZFRhc2sodGFzayk7XG59XG5cbi8vIFRoaXMgaXMgYSBjb25kaXRpb25hbCB0aGF0IGRldGVybWluZXMgaWYgeW91J3JlIGxvb2tpbmcgYXQgdGhlIHRhc2sgbGlzdCBvciB0aGUgdGFzayBmb3JtLlxuLy8gSWYgeW91J3JlIGluIHRoZSB0YXNrIGxpc3Qgb24gY2xpY2ssIHRoZW4gc2hvdyB0aGUgdGFzayBmb3JtLlxuLy8gSWYgeW91J3JlIGluIHRoZSB0YXNrIGZvcm0gb24gc3VibWl0LCB0aGVuIHNob3cgdGhlIHRhc2sgbGlzdC5cbmZ1bmN0aW9uIGNvbnRyb2xsRGlzcGxheShjb21pbmdGcm9tKSB7XG4gIGlmIChjb21pbmdGcm9tID09PSAndGFzayBsaXN0Jykge1xuICAgIHNob3dBZGRUYXNrRm9ybShcbiAgICAgIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY3JlYXRlVGFzaygpO1xuICAgICAgICBjb250cm9sbERpc3BsYXkoJ3Rhc2sgZm9ybScpO1xuICAgICAgfSxcbiAgICAgIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29udHJvbGxEaXNwbGF5KCd0YXNrIGZvcm0nKTtcbiAgICAgIH1cbiAgICApO1xuICB9IGVsc2UgaWYgKGNvbWluZ0Zyb20gPT09ICd0YXNrIGZvcm0nKSB7XG4gICAgY2xvc2VBZGRUYXNrRm9ybSgpO1xuICAgIHNob3dUYXNrc1NlY3Rpb24oKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnRyb2xsRGlzcGxheSgndGFzayBsaXN0Jyk7XG4gICAgfSk7XG4gICAgc2hvd1Rhc2tzSW5Qcm9qZWN0KHNlbGVjdGVkUHJvamVjdCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gb25DbGlja09mQWRkVGFza0J1dHRvbihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29udHJvbGxEaXNwbGF5KCd0YXNrIGxpc3QnKTtcbn1cblxuaW5pdChvbkNsaWNrT2ZBZGRUYXNrQnV0dG9uKTtcblxuZ2V0UHJvamVjdHMoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gIGFkZFByb2plY3RUb0RPTShwcm9qZWN0KTtcbn0pO1xuXG5zaG93RGVmYXVsdFByb2plY3Qoc2VsZWN0ZWRQcm9qZWN0KTtcblxuLy8gTGlzdGVuIHRvIGtleXByZXNzIG9uIHRoZSBwcm9qZWN0IGZvcm1cbmNvbnN0IHByb2plY3RGb3JtID0gZ2V0UHJvamVjdEZvcm0oKTtcbnByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpID0+IHtcbiAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgLy8gQ29sbGFwc2UgcHJvamVjdCBpbnB1dCBmb3JtXG4gICAgZXhwYW5kQ3JlYXRlUHJvamVjdEZvcm0oZmFsc2UpO1xuXG4gICAgLy8gR2V0IHByb2plY3QgbmFtZSBmcm9tIGZvcm0gdmFsdWVcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LW5hbWUnKS52YWx1ZTtcblxuICAgIC8vIENyZWF0ZSBuZXcgcHJvamVjdCB3aXRoIHByb2plY3QgbmFtZVxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0TmFtZSk7XG5cbiAgICAvLyBBZGQgcHJvamVjdCB0byBzaXRlIHN0b3JhZ2VcbiAgICBhZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xuXG4gICAgLy8gQWRkIHByb2plY3QgbmFtZSB0byBzaWRlYmFyXG4gICAgYWRkUHJvamVjdFRvRE9NKG5ld1Byb2plY3QpO1xuXG4gICAgLy8gUmVtb3ZlIGFjdGl2ZSBjbGFzcyAoYmFja2dyb3VuZCBjb2xvcikgZnJvbSBhbnkgYWN0aXZlIGVsZW1lbnRcbiAgICByZW1vdmVBY3RpdmVDbGFzcygpO1xuXG4gICAgLy8gTWFrZSBjdXJyZW50IHByb2plY3QgYWN0aXZlXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QnKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuICAgIC8vIENoYW5nZSB4IHRvICsgZm9yIGFkZC1wcm9qZWN0IGljb25cbiAgICByb3RhdGVBZGRQcm9qZWN0SWNvbigpO1xuICB9XG59KTtcblxuY29uc3Qgc2hvd1Byb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsdXMtaWNvbicpO1xuc2hvd1Byb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAvLyBFeHBhbmQgb3IgY29sbGFwc2UgcHJvamVjdCBmb3JtIGJhc2VkIG9uIGN1cnJlbnQgc3RhdGUgd2hlbiBwcmVzc2luZyB0aGUgcGx1cyBpY29uIGltYWdlXG4gIGV4cGFuZENyZWF0ZVByb2plY3RGb3JtKCFwcm9qZWN0Rm9ybUV4cGFuZGVkKCkpO1xuXG4gIC8vIFJvdGF0ZSBiZXR3ZWVuICsgYW5kIHggZm9yIGFkZC1wcm9qZWN0IGljb24gd2hlbiBjbGlja2VkXG4gIHJvdGF0ZUFkZFByb2plY3RJY29uKCk7XG59KTtcblxuY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWRlYmFyJyk7XG5zaWRlYmFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgLy8gQXNzaWduIHRoZSBlbGVtZW50IHdpdGggdGhlIGNsb3Nlc3QgYXR0cmlidXRlIG9mICdkYXRhLWlkJyBhcyB0aGUgcHJvamVjdCBidXR0b25cbiAgY29uc3QgcHJvamVjdEJ1dHRvbiA9IGUudGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLWlkXScpO1xuXG4gIC8vIElmIHRoZSBwcm9qZWN0IGJ1dHRvbiBkb2VzIG5vdCBoYXZlIGEgZGF0YS1pZCwgcmV0dXJuIHRvIHByZXZlbnQgZXJyb3JzXG4gIGlmICghcHJvamVjdEJ1dHRvbikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIEhpZ2hsaWdodCBjdXJyZW50bHkgc2VsZWN0ZWQgc2lkZWJhciBvcHRpb24gYW5kIHJlbW92ZSBhbnkgaW5hY3RpdmUgaGlnaGxpZ2h0ZWQgb3B0aW9uc1xuICB0b2dnbGVTaWRlYmFySGlnaGxpZ2h0KGUudGFyZ2V0KTtcblxuICAvLyBTYXZlIHRoZSBkYXRhLWlkIG9mIHRoZSBwcm9qZWN0IGJ1dHRvbiBhcyB0aGUgcHJvamVjdCBpZFxuICBjb25zdCBwcm9qZWN0SWQgPSBwYXJzZUludChwcm9qZWN0QnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpLCAxMCk7XG5cbiAgLy8gU2F2ZSB0aGUgZ2V0UHJvamVjdHMoKSBhcnJheSBpbnRvIHByb2plY3RzXG4gIGNvbnN0IHByb2plY3RzID0gZ2V0UHJvamVjdHMoKTtcblxuICAvLyBGaW5kIHRoZSBwcm9qZWN0IHdpdGggaWQgdGhhdCBtYXRjaGVzIHRoZSBzZWxlY3RlZCBwcm9qZWN0IGlkXG4gIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0cy5maW5kKChwcm9qKSA9PiBwcm9qLmlkID09PSBwcm9qZWN0SWQpO1xuXG4gIC8vIElmIHRoZSBwcm9qZWN0IGlzIGFscmVhZHkgdGhlIHNlbGVjdGVkIHByb2plY3QsIHJldHVybiBlYXJseSB0byBwcmV2ZW50IGFkZGluZyB0aGUgdGFza3NcbiAgLy8gbXVsdGlwbGUgdGltZXNcbiAgaWYgKHByb2plY3QgPT09IHNlbGVjdGVkUHJvamVjdCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIE1ha2UgdGhlIGZvdW5kIHByb2plY3QgdGhlIHNlbGVjdGVkIHByb2plY3RcbiAgc2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdDtcblxuICAvLyBDbGVhciB0YXNrcyBmcm9tIHRoZSBET01cbiAgY2xlYXJUYXNrcygpO1xuXG4gIC8vIEFkZCBlYWNoIHRhc2sgZnJvbSB0aGUgc2VsZWN0ZWQgcHJvamVjdCB0byB0aGUgRE9NXG4gIHNob3dUYXNrc0luUHJvamVjdChzZWxlY3RlZFByb2plY3QpO1xufSk7XG5cbi8vIENsaWNrIGhhbmRsZXIgdG8gc2hvdy9oaWRlIG9wdGlvbmFsIHRhc2sgZGlzcGxheVxuY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MtY2FyZCcpO1xudGFza0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVja2JveC1sYWJlbCcpKSB7XG4gICAgdG9nZ2xlT3B0aW9uYWxUYXNrRGlzcGxheShlKTtcbiAgfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3RyYXNoLWljb24nKSkge1xuICAgIGRlbGV0ZVRhc2soZSwgc2VsZWN0ZWRQcm9qZWN0KTtcbiAgfVxufSk7XG4iLCJsZXQgcHJvamVjdElkID0gMTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCB0YXNrcyA9IFtdKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMudGFza3MgPSB0YXNrcztcbiAgICB0aGlzLmlkID0gcHJvamVjdElkO1xuICAgIHByb2plY3RJZCArPSAxO1xuICB9XG5cbiAgYWRkVGFzayh0YXNrKSB7XG4gICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xuICB9XG5cbiAgZ2V0VGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gIH1cbn1cbiIsIi8vIGNyZWF0ZSBsaXN0IG9mIHByb2plY3RzXG4vLyBtZXRob2RzIHRvIGFkZCBwcm9qZWN0cyBhbmQgZ2V0IHByb2plY3RzXG5cbmNvbnN0IHByb2plY3RzID0gW107XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9qZWN0cygpIHtcbiAgcmV0dXJuIHByb2plY3RzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJvamVjdChwcm9qZWN0KSB7XG4gIHByb2plY3RzLnB1c2gocHJvamVjdCk7XG59XG4iLCJsZXQgdGFza0lkID0gMDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuaWQgPSB0YXNrSWQ7XG4gICAgdGFza0lkICs9IDE7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==