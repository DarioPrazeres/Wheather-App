/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./icon/gps.png */ "./src/icon/gps.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./icon/close.png */ "./src/icon/close.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body{\n    margin: 0;\n    padding: 0;\n    font-family: Arial, Helvetica, sans-serif; \n    color: white;  \n    font-weight: 100;\n}\n*{\n    margin: 0;\n    letter-spacing: 0px;\n}\nbody, html{    \n    margin: 0;\n    letter-spacing: 0px;\n}\nbody{\n    height: 100%;\n}\n/*General Settings*/\np{\n    font-size: 16px;\n}\nh1{\n    font-size: 60px;\n    font-weight: 100;\n}\nh2{\n    font-size: 50px;\n    font-weight: 100;\n}\nh3{\n    font-size: 40px;\n    font-weight: 100;\n}\nh4{\n    font-size: 30px;\n    font-weight: 100;\n}\nh5{\n    font-size: 20px;\n    font-weight: 100;\n}\nh6{\n    font-size: 15px;\n    font-weight: 400;\n}\n.btn{\n    padding: 10px;\n    background: rgb(74, 73, 73);\n    color: white;\n    border: none;\n    font-size: 16px;\n}\n.btn-search{\n    width: 150px;\n    height: 50px;\n}\n.btn-gps{\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: contain;\n    background-repeat: no-repeat;\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n}\n.group-button{\n    padding: 0px 20px 0px 20px;\n    display: flex;\n    justify-content: center;\n    justify-content: space-between;\n}\n.main{\n    height: 100vh;\n    width: 100vw;    \n    margin: 0px;  \n    padding: 0px; \n    /*New way to Show the informactions*/\n    display: flex;\n    background-color: #100E1D;\n}\n/* CSS about Side bar*/\n.sideBar{\n    padding: 15px;\n    width: 27%;\n    background-color: #1E213A;\n    position: relative;  \n}\n.search{   \n    height: 30px;\n    border: none;\n    background: none;\n    color: white;\n    font-size: 15px;\n}\n.search:hover{\n    font-size: 17px;\n}\n.btn-close{\n    width: 50px;\n    height: 50px;\n    border: none;\n    position: absolute;\n    right: 0px;\n    top: 0px;\n    background-color: rgba(0, 0, 0, 0);\n    background-size: contain;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n/*Form about Search*/\n.form{\n    margin: 80px 0px 40px 0px;\n    padding: 5px;\n    display: flex;\n    justify-content: space-evenly;\n    justify-content: center;\n    align-items: center;\n}\n.cityName{\n    width: 250px;\n    height: 35px;\n    border: solid white 1px;\n    padding: 2px;\n    font-size: 16px;\n    color: white;\n    background: none;\n    margin-right: 5px;\n}\n.buttonSearch{\n    padding: 10px;\n    background-color: rgb(25, 0, 123);\n    border: none;\n    width: 100px;\n    height: 45px;\n    font-size: 16px;\n}\n\n/*List of Cities\n.list-Search{\n    padding: 5px;\n}\n.list-button{\n    width: 100%;\n    height: 50px;\n    padding: 5px;\n    margin: 20px 0px 20px 0px;\n    color: white;\n    text-align: left;\n    font-size: 18px;\n    outline: none;\n    border: none;\n    border-radius: 5px;\n    background-color: #05050500;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n.seta{\n    width: 20px;\n    height: 20px;\n    background-image: url(./icon/seta.png);\n    background-size: contain;\n}\n.list-button:hover{\n    outline: 1px white solid;\n}\n*/\n.statusCity{\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap-reverse;\n    justify-content: baseline;\n    align-items: center;\n    justify-content: center;\n}\n.status{\n    padding-top: 50px;\n    text-align: center;\n}\n.tempCity{\n    padding: 10px;\n    font-size: 70px;\n    margin: 63px 0px 63px 0px;\n}\n\n/*\n.rain, .huminity, .temp, .wind{\n    padding: 5px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap-reverse;\n}*/\n.last{\n    border-right: none;\n}\n.containerSky{\n    display: flex;\n}\n.containerInfo{\n    display: flex;\n}\n.weekly{\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(7, 14%);\n}\n.week{\n    text-align: center;\n}\n\n.image{\n    padding: 3px;\n    width: 40px;\n    height: 40px;\n}\n.image_10{\n    width: 300px;\n    height: 300px;\n    margin: 0px 0px 10px 0px;\n}\n.rainPercent{\n    margin-left: 5px;\n}\n.btn-info{\n    margin-top: 3px;\n    width: 100px;\n    height: 40px;\n    border: none;\n\n}\n.btn-less{\n    margin: 5px;\n    width: 100px;\n    height: 30px;\n    display: none;\n}\n.location{\n    margin-top: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 7px;\n}\n.location img{\n    height: 30px;\n}\n.date, .sky{\n    margin: 50px 0px 60px 0px;\n}\n.visible{\n    display: block;\n}\n.invisible{\n    display: none;\n}\n/*----------Body Css----------*/\n.body-project{\n    width: 70%;\n    background-color: #100E1D;\n    position: relative;\n}\n.btn-group-wheater{\n    position: absolute;\n    right: 20px;\n    margin: 50px;\n}\n.btn-unity{\n    border-radius: 50%;\n    margin: 4px;\n    height: 50px;\n    width: 50px;\n    font-size: 18px;\n}\n.btn-unity:hover{\n    background-color: rgb(12, 12, 12);\n    border: 1px solid wheat;\n    color: white;\n}\n.btn-active{\n    background-color: white;\n    border: 1px solid wheat;\n    color: #252525;\n}\n/*----------Week Weather---------*/\n.temp-day{\n    display: flex;\n    margin: 150px 0px 40px 0px;\n    justify-content: space-around;\n}\n.day{\n    width: 175px;\n    height: 230px;\n    margin: 5px;\n    padding: 15px;\n    border-radius: 3px;\n    flex-direction: column;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: #1E213A;\n}\n.temps{\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    padding: 7px;\n}\n.day h4{\n    font-size: 22px;\n}\n.tempStatus{\n    width: 125px;\n    height: 125px;\n    padding: 20px 0px 15px 0px;\n}\n/*----------------hight-lights CSS--------*/\n.hight-lights{\n    width: 100%;\n    display: flex;\n    text-align: left;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n.high{\n    margin-left: 250px;\n}\n.more-info{\n    display: grid;\n    padding: 8px;\n    row-gap: 25px;\n    column-gap: 25px;\n    grid-template-columns: repeat(2, 400px);\n    grid-template-rows: 220px 125px;\n}\n.more-info h5{\n    font-size: 24px;\n}\n.wind, .humidity, .visibility, .air{\n    padding: 10px;\n    background-color: #1E213A;\n    text-align: center;\n}\n.visibility, .air{\n    text-align: center;\n}\n.humidity{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.humidity h5, .humidity h2{\n    margin: 15px;\n}\n.progressive{\n    margin: 10px;\n    width: 250px;\n    height: 10px;\n    border-radius: 5px;\n    background-color: rgb(224, 219, 219);\n    position: relative;\n}\n.progress{\n    border-radius: 5px;\n    width: 85%;\n    height: 10px;\n    position: absolute;\n    left: 0px;\n    background-color: #fea400;\n}\n.prog{\n    display: flex;\n    flex-direction: column;\n    position: relative;\n}\n.percDisc{\n    display: flex;\n    justify-content: space-between;\n} \n.hundred{\n    position: absolute;\n    right: 0px;\n    bottom: -10px;\n}\n.navegation{\n    border-radius: 50%;\n    background-color: rgb(93, 90, 90);\n    height: 45px;\n    width: 45px;\n}\n.nav{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.nav h5{\n    margin: 7px;\n}\nfooter{\n    margin-top: 15px;\n    text-align: center;\n}\nfooter a{\n    color: white;\n    font-weight: 400;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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AC7B;AACA;IACI,WAAW;IACX,aAAa;IACb,6BAA6B;IAC7B,YAAY;AAChB;AACA;IACI,eAAe;AACnB;AACA;IACI,YAAY;IACZ,aAAa;IACb,0BAA0B;AAC9B;AACA,2CAA2C;AAC3C;IACI,WAAW;IACX,aAAa;IACb,gBAAgB;IAChB,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;AAC3B;AACA;IACI,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,uCAAuC;IACvC,+BAA+B;AACnC;AACA;IACI,eAAe;AACnB;AACA;IACI,aAAa;IACb,yBAAyB;IACzB,kBAAkB;AACtB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,oCAAoC;IACpC,kBAAkB;AACtB;AACA;IACI,kBAAkB;IAClB,UAAU;IACV,YAAY;IACZ,kBAAkB;IAClB,SAAS;IACT,yBAAyB;AAC7B;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,8BAA8B;AAClC;AACA;IACI,kBAAkB;IAClB,UAAU;IACV,aAAa;AACjB;AACA;IACI,kBAAkB;IAClB,iCAAiC;IACjC,YAAY;IACZ,WAAW;AACf;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,WAAW;AACf;AACA;IACI,gBAAgB;IAChB,kBAAkB;AACtB;AACA;IACI,YAAY;IACZ,gBAAgB;AACpB","sourcesContent":["body{\n    margin: 0;\n    padding: 0;\n    font-family: Arial, Helvetica, sans-serif; \n    color: white;  \n    font-weight: 100;\n}\n*{\n    margin: 0;\n    letter-spacing: 0px;\n}\nbody, html{    \n    margin: 0;\n    letter-spacing: 0px;\n}\nbody{\n    height: 100%;\n}\n/*General Settings*/\np{\n    font-size: 16px;\n}\nh1{\n    font-size: 60px;\n    font-weight: 100;\n}\nh2{\n    font-size: 50px;\n    font-weight: 100;\n}\nh3{\n    font-size: 40px;\n    font-weight: 100;\n}\nh4{\n    font-size: 30px;\n    font-weight: 100;\n}\nh5{\n    font-size: 20px;\n    font-weight: 100;\n}\nh6{\n    font-size: 15px;\n    font-weight: 400;\n}\n.btn{\n    padding: 10px;\n    background: rgb(74, 73, 73);\n    color: white;\n    border: none;\n    font-size: 16px;\n}\n.btn-search{\n    width: 150px;\n    height: 50px;\n}\n.btn-gps{\n    background-image: url(./icon/gps.png);\n    background-size: contain;\n    background-repeat: no-repeat;\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n}\n.group-button{\n    padding: 0px 20px 0px 20px;\n    display: flex;\n    justify-content: center;\n    justify-content: space-between;\n}\n.main{\n    height: 100vh;\n    width: 100vw;    \n    margin: 0px;  \n    padding: 0px; \n    /*New way to Show the informactions*/\n    display: flex;\n    background-color: #100E1D;\n}\n/* CSS about Side bar*/\n.sideBar{\n    padding: 15px;\n    width: 27%;\n    background-color: #1E213A;\n    position: relative;  \n}\n.search{   \n    height: 30px;\n    border: none;\n    background: none;\n    color: white;\n    font-size: 15px;\n}\n.search:hover{\n    font-size: 17px;\n}\n.btn-close{\n    width: 50px;\n    height: 50px;\n    border: none;\n    position: absolute;\n    right: 0px;\n    top: 0px;\n    background-color: rgba(0, 0, 0, 0);\n    background-size: contain;\n    background-image: url(./icon/close.png);\n}\n/*Form about Search*/\n.form{\n    margin: 80px 0px 40px 0px;\n    padding: 5px;\n    display: flex;\n    justify-content: space-evenly;\n    justify-content: center;\n    align-items: center;\n}\n.cityName{\n    width: 250px;\n    height: 35px;\n    border: solid white 1px;\n    padding: 2px;\n    font-size: 16px;\n    color: white;\n    background: none;\n    margin-right: 5px;\n}\n.buttonSearch{\n    padding: 10px;\n    background-color: rgb(25, 0, 123);\n    border: none;\n    width: 100px;\n    height: 45px;\n    font-size: 16px;\n}\n\n/*List of Cities\n.list-Search{\n    padding: 5px;\n}\n.list-button{\n    width: 100%;\n    height: 50px;\n    padding: 5px;\n    margin: 20px 0px 20px 0px;\n    color: white;\n    text-align: left;\n    font-size: 18px;\n    outline: none;\n    border: none;\n    border-radius: 5px;\n    background-color: #05050500;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n.seta{\n    width: 20px;\n    height: 20px;\n    background-image: url(./icon/seta.png);\n    background-size: contain;\n}\n.list-button:hover{\n    outline: 1px white solid;\n}\n*/\n.statusCity{\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap-reverse;\n    justify-content: baseline;\n    align-items: center;\n    justify-content: center;\n}\n.status{\n    padding-top: 50px;\n    text-align: center;\n}\n.tempCity{\n    padding: 10px;\n    font-size: 70px;\n    margin: 63px 0px 63px 0px;\n}\n\n/*\n.rain, .huminity, .temp, .wind{\n    padding: 5px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap-reverse;\n}*/\n.last{\n    border-right: none;\n}\n.containerSky{\n    display: flex;\n}\n.containerInfo{\n    display: flex;\n}\n.weekly{\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(7, 14%);\n}\n.week{\n    text-align: center;\n}\n\n.image{\n    padding: 3px;\n    width: 40px;\n    height: 40px;\n}\n.image_10{\n    width: 300px;\n    height: 300px;\n    margin: 0px 0px 10px 0px;\n}\n.rainPercent{\n    margin-left: 5px;\n}\n.btn-info{\n    margin-top: 3px;\n    width: 100px;\n    height: 40px;\n    border: none;\n\n}\n.btn-less{\n    margin: 5px;\n    width: 100px;\n    height: 30px;\n    display: none;\n}\n.location{\n    margin-top: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 7px;\n}\n.location img{\n    height: 30px;\n}\n.date, .sky{\n    margin: 50px 0px 60px 0px;\n}\n.visible{\n    display: block;\n}\n.invisible{\n    display: none;\n}\n/*----------Body Css----------*/\n.body-project{\n    width: 70%;\n    background-color: #100E1D;\n    position: relative;\n}\n.btn-group-wheater{\n    position: absolute;\n    right: 20px;\n    margin: 50px;\n}\n.btn-unity{\n    border-radius: 50%;\n    margin: 4px;\n    height: 50px;\n    width: 50px;\n    font-size: 18px;\n}\n.btn-unity:hover{\n    background-color: rgb(12, 12, 12);\n    border: 1px solid wheat;\n    color: white;\n}\n.btn-active{\n    background-color: white;\n    border: 1px solid wheat;\n    color: #252525;\n}\n/*----------Week Weather---------*/\n.temp-day{\n    display: flex;\n    margin: 150px 0px 40px 0px;\n    justify-content: space-around;\n}\n.day{\n    width: 175px;\n    height: 230px;\n    margin: 5px;\n    padding: 15px;\n    border-radius: 3px;\n    flex-direction: column;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: #1E213A;\n}\n.temps{\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    padding: 7px;\n}\n.day h4{\n    font-size: 22px;\n}\n.tempStatus{\n    width: 125px;\n    height: 125px;\n    padding: 20px 0px 15px 0px;\n}\n/*----------------hight-lights CSS--------*/\n.hight-lights{\n    width: 100%;\n    display: flex;\n    text-align: left;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n.high{\n    margin-left: 250px;\n}\n.more-info{\n    display: grid;\n    padding: 8px;\n    row-gap: 25px;\n    column-gap: 25px;\n    grid-template-columns: repeat(2, 400px);\n    grid-template-rows: 220px 125px;\n}\n.more-info h5{\n    font-size: 24px;\n}\n.wind, .humidity, .visibility, .air{\n    padding: 10px;\n    background-color: #1E213A;\n    text-align: center;\n}\n.visibility, .air{\n    text-align: center;\n}\n.humidity{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.humidity h5, .humidity h2{\n    margin: 15px;\n}\n.progressive{\n    margin: 10px;\n    width: 250px;\n    height: 10px;\n    border-radius: 5px;\n    background-color: rgb(224, 219, 219);\n    position: relative;\n}\n.progress{\n    border-radius: 5px;\n    width: 85%;\n    height: 10px;\n    position: absolute;\n    left: 0px;\n    background-color: #fea400;\n}\n.prog{\n    display: flex;\n    flex-direction: column;\n    position: relative;\n}\n.percDisc{\n    display: flex;\n    justify-content: space-between;\n} \n.hundred{\n    position: absolute;\n    right: 0px;\n    bottom: -10px;\n}\n.navegation{\n    border-radius: 50%;\n    background-color: rgb(93, 90, 90);\n    height: 45px;\n    width: 45px;\n}\n.nav{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.nav h5{\n    margin: 7px;\n}\nfooter{\n    margin-top: 15px;\n    text-align: center;\n}\nfooter a{\n    color: white;\n    font-weight: 400;\n}\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
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

/***/ "./src/head.js":
/*!*********************!*\
  !*** ./src/head.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./print */ "./src/print.js");
/* harmony import */ var _modules_dayOfWeek__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dayOfWeek */ "./src/modules/dayOfWeek.js");
/* harmony import */ var _modules_mouthOfYear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/mouthOfYear */ "./src/modules/mouthOfYear.js");
/* harmony import */ var _icon_location_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon/location.png */ "./src/icon/location.png");





const status = document.querySelector('div.status');
const cityTitle = document.createElement('h5');
const dateTitle = document.createElement('h5');
const statusCity = document.createElement('div');
const tempCity = document.createElement('h1');
const sky = document.createElement('h3');
const location = document.createElement('div');
const iconLocation = document.createElement('img');

iconLocation.src = _icon_location_png__WEBPACK_IMPORTED_MODULE_3__;
//var status = 'few clouds';
function headCity(city, status, temp) {    
    createElem();
    statusCity.appendChild((0,_print__WEBPACK_IMPORTED_MODULE_0__["default"])(status, 'image_10'));
    statusCity.appendChild(tempCity); 
    cityTitle.innerHTML = city;
    tempCity.innerHTML = `${temp}`;    
    sky.innerHTML = `${status}`
}
function createElem() {
    statusCity.innerHTML = '';

    cityTitle.classList.add('city');
    dateTitle.classList.add('date');
    statusCity.classList.add('statusCity');
    tempCity.classList.add('tempCity');
    sky.classList.add('sky');    
    location.classList.add('location');
           
    status.appendChild(statusCity);
    status.appendChild(sky);
    status.appendChild(dateTitle);
    status.appendChild(location);

    location.appendChild(iconLocation);
    location.appendChild(cityTitle);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    // add a zero in front of numbers<10
    m = checkTime(m);
    dateTitle.innerHTML = (0,_modules_dayOfWeek__WEBPACK_IMPORTED_MODULE_1__["default"])(today.getDay()) + ', ' + today.getUTCDate() + ' '+ (0,_modules_mouthOfYear__WEBPACK_IMPORTED_MODULE_2__["default"])(today.getMonth()) + ' ' + h + ":" + m;
    var t = setTimeout(function () {
        startTime()
    }, 500);
}
startTime();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headCity);

/***/ }),

/***/ "./src/modules/air.js":
/*!****************************!*\
  !*** ./src/modules/air.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const airValue = document.querySelector('h2.air');

function showAir(value){
    airValue.innerHTML = `${value} mb`
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showAir);

/***/ }),

/***/ "./src/modules/cloudStatus.js":
/*!************************************!*\
  !*** ./src/modules/cloudStatus.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _icon_cloudy_day_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../icon/cloudy-day.svg */ "./src/icon/cloudy-day.svg");
/* harmony import */ var _icon_sun_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icon/sun.svg */ "./src/icon/sun.svg");
/* harmony import */ var _icon_rainy_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icon/rainy.svg */ "./src/icon/rainy.svg");
/* harmony import */ var _icon_snow_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icon/snow.svg */ "./src/icon/snow.svg");
/* harmony import */ var _icon_moon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icon/moon.svg */ "./src/icon/moon.svg");
/* harmony import */ var _icon_cloudy_night_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icon/cloudy-night.svg */ "./src/icon/cloudy-night.svg");
/* harmony import */ var _icon_umbrella_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icon/umbrella.png */ "./src/icon/umbrella.png");
/* harmony import */ var _icon_wind_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../icon/wind.svg */ "./src/icon/wind.svg");
/* harmony import */ var _icon_humidity_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../icon/humidity.svg */ "./src/icon/humidity.svg");
/* harmony import */ var _icon_mist_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../icon/mist.svg */ "./src/icon/mist.svg");











function cloudStatus(statusTemp, classli){
    var hour = new Date().getHours();
    const cloud = document.createElement('img');
    cloud.classList.add(classli);
    if(hour >= 5 && hour < 18){
        switch(statusTemp){
            case 'Clear': cloud.src = _icon_sun_svg__WEBPACK_IMPORTED_MODULE_1__; break;
            case 'Clouds': cloud.src = _icon_cloudy_day_svg__WEBPACK_IMPORTED_MODULE_0__; break;  
            case 'Rain': cloud.src = _icon_rainy_svg__WEBPACK_IMPORTED_MODULE_2__; break;
            case 'Snow': cloud.src = _icon_snow_svg__WEBPACK_IMPORTED_MODULE_3__; break;
            case 'Mist': cloud.src = _icon_mist_svg__WEBPACK_IMPORTED_MODULE_9__; break;
        }
    }else{
        switch(statusTemp){
            case 'Clear': cloud.src = _icon_moon_svg__WEBPACK_IMPORTED_MODULE_4__; break;
            case 'Clouds': cloud.src = _icon_cloudy_night_svg__WEBPACK_IMPORTED_MODULE_5__; break; 
            case 'Rain': cloud.src = _icon_rainy_svg__WEBPACK_IMPORTED_MODULE_2__ ; break;
            case 'Snow': cloud.src = _icon_snow_svg__WEBPACK_IMPORTED_MODULE_3__; break;
            case 'Mist': cloud.src = _icon_mist_svg__WEBPACK_IMPORTED_MODULE_9__; break;
        }
    }
    return cloud;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloudStatus);

/***/ }),

/***/ "./src/modules/converterWeather.js":
/*!*****************************************!*\
  !*** ./src/modules/converterWeather.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function converterWeather(temperature, unity){
    switch(unity){
        case 'Celsius' : return temperature-273 + ' °C'; break;
        case 'Kelvin' : return temperature + ' °K'; break;
        case 'Fahrenheit' : return (((temperature-273)*1.8) +32).toFixed() + ' °F'; break;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (converterWeather);

/***/ }),

/***/ "./src/modules/dayOfWeek.js":
/*!**********************************!*\
  !*** ./src/modules/dayOfWeek.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function dayOfWeek(number){
    var nameOfDay = '';
    switch(number){
        case 0: nameOfDay = 'Sun'; break;
        case 1: nameOfDay = 'Mon'; break;
        case 2: nameOfDay = 'Tues'; break;
        case 3: nameOfDay = 'Wed'; break;
        case 4: nameOfDay = 'Thu'; break;
        case 5: nameOfDay = 'Fri'; break;
        case 6: nameOfDay = 'Sat'; break;
    }
    return nameOfDay;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dayOfWeek);

/***/ }),

/***/ "./src/modules/hiddenElement.js":
/*!**************************************!*\
  !*** ./src/modules/hiddenElement.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const elementForm = document.querySelector('div.form-group');
const buttonSearch = document.querySelector('button.btn-search');
const buttonClose = document.querySelector('button.btn-close');
const elementInfo = document.querySelector('div.info');
const elementSeta = document.querySelectorAll('div.set');
const elementListButton = document.querySelectorAll('div.list-button');

function displayForm(){
   /* 
   Show the Element
    */
   buttonSearch.addEventListener('click', ()=>{
    elementForm.classList.remove('invisible');
    elementInfo.classList.add('invisible');
    elementForm.classList.add('visible');
   });
   /*Taking All element with this Class and set them for recieve 'invisible' and 'seta' classes*/
   for(let i=0; i<elementSeta.length; i++){
        elementListButton[i].addEventListener('mousemove', ()=>{
        elementSeta[i].classList.remove('invisible');
        elementSeta[i].classList.add('seta');
       })
       elementListButton[i].addEventListener('mouseout', ()=>{
        elementSeta[i].classList.add('invisible');
        elementSeta[i].classList.remove('seta');
       })
   }
   /**
    * Hidden the Element
    */
   buttonClose.addEventListener('click', ()=>{
    elementForm.classList.remove('visible');
    elementForm.classList.add('invisible');
    elementInfo.classList.remove('invisible');
    elementInfo.classList.add('visible');
   })

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayForm);

/***/ }),

/***/ "./src/modules/humidity.js":
/*!*********************************!*\
  !*** ./src/modules/humidity.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const progressHumidity = document.querySelector('div.progress');
const valorHumidity = document.querySelector('h2.humidityP');

function humidityShow(valor){
    progressHumidity.setAttribute('style', `width: ${valor}%`);
    valorHumidity.innerHTML = `${valor}%`;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (humidityShow);

/***/ }),

/***/ "./src/modules/mouthOfYear.js":
/*!************************************!*\
  !*** ./src/modules/mouthOfYear.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function mouthOfYear(number) {
    var nameOfMouth = ' Jan';
    switch(number){
        case 0: nameOfMouth = 'Jan'; break;
        case 1: nameOfMouth = 'Feb'; break;
        case 2: nameOfMouth = 'March'; break;
        case 3: nameOfMouth = 'April'; break;
        case 4: nameOfMouth = 'May'; break;
        case 5: nameOfMouth = 'June'; break;
        case 6: nameOfMouth = 'July'; break;
        case 7: nameOfMouth = 'Aug'; break;
        case 8: nameOfMouth = 'Sept'; break;
        case 9: nameOfMouth = 'Oct'; break;
        case 10: nameOfMouth = 'Nov'; break;
        case 11: nameOfMouth = 'Dec'; break;
    }
    return nameOfMouth;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mouthOfYear);

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _weatherInit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherInit */ "./src/modules/weatherInit.js");


const cityName = document.querySelector('input.cityName');
const btnSearch = document.querySelector('button.buttonSearch');
const elementForm = document.querySelector('div.form-group');
const elementInfo = document.querySelector('div.info');

function search() {
    btnSearch.addEventListener('click', ()=>{
        if(cityName.value.length === 0){
            alert('Write The name of city')
        }else{
            var city = cityName.value.charAt(0).toUpperCase() + cityName.value.slice(1);
            elementForm.classList.add('invisible');
            elementInfo.classList.remove('invisible');
            (0,_weatherInit__WEBPACK_IMPORTED_MODULE_0__.weatherUnity)(city);
            cityName.value='';
        }
        
    })
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);

/***/ }),

/***/ "./src/modules/visibility.js":
/*!***********************************!*\
  !*** ./src/modules/visibility.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const visibilityValue = document.querySelector('h2.visibility');

function showVisibility(value){
    visibilityValue.innerHTML = `${value} miles`
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showVisibility);

/***/ }),

/***/ "./src/modules/weatherInit.js":
/*!************************************!*\
  !*** ./src/modules/weatherInit.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "weatherUnity": () => (/* binding */ weatherUnity)
/* harmony export */ });
/* harmony import */ var _converterWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./converterWeather */ "./src/modules/converterWeather.js");
/* harmony import */ var _head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../head */ "./src/head.js");
/* harmony import */ var _humidity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./humidity */ "./src/modules/humidity.js");
/* harmony import */ var _air__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./air */ "./src/modules/air.js");
/* harmony import */ var _visibility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./visibility */ "./src/modules/visibility.js");
/* harmony import */ var _weekly__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../weekly */ "./src/weekly.js");
/* harmony import */ var _wind__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wind */ "./src/modules/wind.js");








const buttonCelsius = document.getElementById('unity-1');
const buttonFahrenheit = document.getElementById('unity-2');
const buttonKelvin = document.getElementById('unity-3');

//Key Of API
var key = 'a4ad64410595a2036d013339142d4684';
var cityData = 0;
var dailyData = 0;
var unity = 'Celsius';

async function weatherUnity(city) {
    /**-----------Api Init------------- */
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`, { mode: 'cors' });
        cityData = await response.json();
        const daily = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${cityData.coord.lat}&lon=${cityData.coord.lon.toFixed()}&exclude=weekly&appid=${key}`, { mode: 'cors' });
      
        dailyData = await daily.json();
        var realTemperature = parseInt(cityData.main.feels_like, 10);
    } catch (error) {
        alert('Error! Verify your Connection or City Not Found!')
    }

    /**-------Initialization of Functions----------- */
    var humidityValue = cityData.main.humidity;
    (0,_weekly__WEBPACK_IMPORTED_MODULE_5__.weekTimeline)();
    (0,_head__WEBPACK_IMPORTED_MODULE_1__["default"])(cityData.name, cityData.weather[0].main, (0,_converterWeather__WEBPACK_IMPORTED_MODULE_0__["default"])(realTemperature, unity));
    (0,_humidity__WEBPACK_IMPORTED_MODULE_2__["default"])(humidityValue);
    (0,_air__WEBPACK_IMPORTED_MODULE_3__["default"])(cityData.main.pressure);
    (0,_visibility__WEBPACK_IMPORTED_MODULE_4__["default"])(cityData.visibility / 1000);
    maxMinShow();
    showStatus();
    (0,_wind__WEBPACK_IMPORTED_MODULE_6__["default"])(cityData.wind.speed ,cityData.wind.deg)

    buttonCelsius.addEventListener('click', () => {
        buttonFahrenheit.classList.remove('btn-active');
        buttonKelvin.classList.remove('btn-active');
        buttonCelsius.classList.add('btn-active');
        unity = 'Celsius';
        (0,_head__WEBPACK_IMPORTED_MODULE_1__["default"])(cityData.name, cityData.weather[0].main, (0,_converterWeather__WEBPACK_IMPORTED_MODULE_0__["default"])(realTemperature, unity));
        maxMinShow();
    });
    buttonFahrenheit.addEventListener('click', () => {
        buttonCelsius.classList.remove('btn-active');
        buttonKelvin.classList.remove('btn-active');
        buttonFahrenheit.classList.add('btn-active');
        unity = 'Fahrenheit';
        (0,_head__WEBPACK_IMPORTED_MODULE_1__["default"])(cityData.name, cityData.weather[0].main, (0,_converterWeather__WEBPACK_IMPORTED_MODULE_0__["default"])(realTemperature, unity));
        maxMinShow();
    });
    buttonKelvin.addEventListener('click', () => {
        buttonFahrenheit.classList.remove('btn-active');
        buttonCelsius.classList.remove('btn-active');
        buttonKelvin.classList.add('btn-active');
        unity = 'Kelvin';
        (0,_head__WEBPACK_IMPORTED_MODULE_1__["default"])(cityData.name, cityData.weather[0].main, (0,_converterWeather__WEBPACK_IMPORTED_MODULE_0__["default"])(realTemperature, unity));
        maxMinShow();
    });
}

function maxMinShow(){
    var count = 1;
    for (let j = 0; j < 5; j++) { 
        (0,_weekly__WEBPACK_IMPORTED_MODULE_5__.showTempMaxMin)(unity, dailyData.daily[count].temp.max, dailyData.daily[count].temp.min, j);
        count++;
    }
}
function showStatus(){
    var count = 1;
    for (let j = 0; j < 5; j++) { 
        (0,_weekly__WEBPACK_IMPORTED_MODULE_5__.weatherDaily)(dailyData.daily[count].weather[0].main, j);
        count++;
    }
}


/***/ }),

/***/ "./src/modules/wind.js":
/*!*****************************!*\
  !*** ./src/modules/wind.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _icon_navegacao_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../icon/navegacao.png */ "./src/icon/navegacao.png");


const imgNavegation = document.querySelector('img.navegation');
const windElement = document.querySelector('h2.wind');
imgNavegation.src = _icon_navegacao_png__WEBPACK_IMPORTED_MODULE_0__;

function windShow(speed, degrau){
    imgNavegation.setAttribute('style', `transform: rotate(${degrau}deg)`);
    windElement.innerHTML = `${speed} mph`;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (windShow);

/***/ }),

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _icon_cloudy_day_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon/cloudy-day.svg */ "./src/icon/cloudy-day.svg");
/* harmony import */ var _icon_sun_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon/sun.svg */ "./src/icon/sun.svg");
/* harmony import */ var _icon_rainy_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon/rainy.svg */ "./src/icon/rainy.svg");
/* harmony import */ var _icon_snow_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon/snow.svg */ "./src/icon/snow.svg");
/* harmony import */ var _icon_moon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon/moon.svg */ "./src/icon/moon.svg");
/* harmony import */ var _icon_cloudy_night_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icon/cloudy-night.svg */ "./src/icon/cloudy-night.svg");
/* harmony import */ var _icon_umbrella_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icon/umbrella.png */ "./src/icon/umbrella.png");
/* harmony import */ var _icon_wind_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icon/wind.svg */ "./src/icon/wind.svg");
/* harmony import */ var _icon_humidity_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./icon/humidity.svg */ "./src/icon/humidity.svg");
/* harmony import */ var _icon_mist_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./icon/mist.svg */ "./src/icon/mist.svg");










/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloudStatus);

const data = new Date();
const hour = data.getHours()

function cloudStatus(statusTemp, classli){
    const cloud = document.createElement('img');
    cloud.classList.add(classli);
    if(hour >= 5 && hour < 18){
        switch(statusTemp){
            case 'Clear': cloud.src = _icon_sun_svg__WEBPACK_IMPORTED_MODULE_1__; break;
            case 'Clouds': cloud.src = _icon_cloudy_day_svg__WEBPACK_IMPORTED_MODULE_0__; break;  
            case 'Rain': cloud.src = _icon_rainy_svg__WEBPACK_IMPORTED_MODULE_2__; break;
            case 'Snow': cloud.src = _icon_snow_svg__WEBPACK_IMPORTED_MODULE_3__; break;
            case 'Mist': cloud.src = _icon_mist_svg__WEBPACK_IMPORTED_MODULE_9__; break;
        }
    }else{
        switch(statusTemp){
            case 'Clear': cloud.src = _icon_moon_svg__WEBPACK_IMPORTED_MODULE_4__; break;
            case 'Clouds': cloud.src = _icon_cloudy_night_svg__WEBPACK_IMPORTED_MODULE_5__; break; 
            case 'Rain': cloud.src = _icon_rainy_svg__WEBPACK_IMPORTED_MODULE_2__ ; break;
            case 'Snow': cloud.src = _icon_snow_svg__WEBPACK_IMPORTED_MODULE_3__; break;
            case 'Mist': cloud.src = _icon_mist_svg__WEBPACK_IMPORTED_MODULE_9__; break;
        }
    }
    return cloud;
}






/***/ }),

/***/ "./src/weekly.js":
/*!***********************!*\
  !*** ./src/weekly.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "weekTimeline": () => (/* binding */ weekTimeline),
/* harmony export */   "weatherDaily": () => (/* binding */ weatherDaily),
/* harmony export */   "showTempMaxMin": () => (/* binding */ showTempMaxMin)
/* harmony export */ });
/* harmony import */ var _modules_dayOfWeek__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dayOfWeek */ "./src/modules/dayOfWeek.js");
/* harmony import */ var _modules_mouthOfYear__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/mouthOfYear */ "./src/modules/mouthOfYear.js");
/* harmony import */ var _modules_cloudStatus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/cloudStatus */ "./src/modules/cloudStatus.js");
/* harmony import */ var _modules_converterWeather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/converterWeather */ "./src/modules/converterWeather.js");





const dateTemp = document.querySelectorAll('h4.dateTemp');
const tempStatus = document.querySelectorAll('div.tempStatus-1');
const tempMax = document.querySelectorAll('h4.tempMax');
const tempMin = document.querySelectorAll('h4.tempMin');

function weekTimeline() {

    var today = new Date();
    var k = 1;
    var incremetDay = 1;
    var dayOfMouth = today.getUTCDate() + incremetDay;
    var day = today.getDay();

    for (let j = 0; j < 5; j++) {
        dayOfMouth = today.getUTCDate() + incremetDay;
        if (day + k <= 6) {
            dateTemp[j].innerText = (0,_modules_dayOfWeek__WEBPACK_IMPORTED_MODULE_0__["default"])(day + k) + ', ' + dayOfMouth + ' ' + (0,_modules_mouthOfYear__WEBPACK_IMPORTED_MODULE_1__["default"])(today.getMonth());
        } else {
            k = 0
            dateTemp[j].innerText = (0,_modules_dayOfWeek__WEBPACK_IMPORTED_MODULE_0__["default"])(k) + ', ' + dayOfMouth + ' ' + (0,_modules_mouthOfYear__WEBPACK_IMPORTED_MODULE_1__["default"])(today.getMonth());
            day = 0;
        }
        incremetDay++
        k++;
    }


}
function weatherDaily(status, count) {
    tempStatus[count].innerHTML = ' ';
    tempStatus[count].appendChild((0,_modules_cloudStatus__WEBPACK_IMPORTED_MODULE_2__["default"])(status, 'tempStatus'));
}
function showTempMaxMin(unity, tMax, tMin, count) {
    tempMax[count].innerHTML = (0,_modules_converterWeather__WEBPACK_IMPORTED_MODULE_3__["default"])(tMax.toFixed(), unity);
    tempMin[count].innerHTML = (0,_modules_converterWeather__WEBPACK_IMPORTED_MODULE_3__["default"])(tMin.toFixed() - 1, unity);
}


/***/ }),

/***/ "./src/icon/close.png":
/*!****************************!*\
  !*** ./src/icon/close.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "41cd0279f72dff755375.png";

/***/ }),

/***/ "./src/icon/cloudy-day.svg":
/*!*********************************!*\
  !*** ./src/icon/cloudy-day.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "37af82f557e9e902e9e2.svg";

/***/ }),

/***/ "./src/icon/cloudy-night.svg":
/*!***********************************!*\
  !*** ./src/icon/cloudy-night.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0a54d0c291ce6115e510.svg";

/***/ }),

/***/ "./src/icon/gps.png":
/*!**************************!*\
  !*** ./src/icon/gps.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "42e9738c237f742d6f3c.png";

/***/ }),

/***/ "./src/icon/humidity.svg":
/*!*******************************!*\
  !*** ./src/icon/humidity.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f1d6a408086ccf1129b6.svg";

/***/ }),

/***/ "./src/icon/location.png":
/*!*******************************!*\
  !*** ./src/icon/location.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dcbde033ee5960e2980e.png";

/***/ }),

/***/ "./src/icon/mist.svg":
/*!***************************!*\
  !*** ./src/icon/mist.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0039a884cb81127c76a0.svg";

/***/ }),

/***/ "./src/icon/moon.svg":
/*!***************************!*\
  !*** ./src/icon/moon.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1f006604f31313e2b544.svg";

/***/ }),

/***/ "./src/icon/navegacao.png":
/*!********************************!*\
  !*** ./src/icon/navegacao.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4d7281697a97ff5d642a.png";

/***/ }),

/***/ "./src/icon/rainy.svg":
/*!****************************!*\
  !*** ./src/icon/rainy.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cbc8b172ed49247db355.svg";

/***/ }),

/***/ "./src/icon/snow.svg":
/*!***************************!*\
  !*** ./src/icon/snow.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "feace2d35ab8ffe46e30.svg";

/***/ }),

/***/ "./src/icon/sun.svg":
/*!**************************!*\
  !*** ./src/icon/sun.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d36b6cdde73516127067.svg";

/***/ }),

/***/ "./src/icon/umbrella.png":
/*!*******************************!*\
  !*** ./src/icon/umbrella.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5ee7fe7b9acde84519bf.png";

/***/ }),

/***/ "./src/icon/wind.svg":
/*!***************************!*\
  !*** ./src/icon/wind.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "27b084f7dd0eb29b2c27.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/search */ "./src/modules/search.js");
/* harmony import */ var _modules_hiddenElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/hiddenElement */ "./src/modules/hiddenElement.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_weatherInit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/weatherInit */ "./src/modules/weatherInit.js");





const gpsButton = document.querySelector('button.btn-gps');
var key = 'a4ad64410595a2036d013339142d4684';
var city = 'Luanda';

(0,_modules_weatherInit__WEBPACK_IMPORTED_MODULE_3__.weatherUnity)(city);
(0,_modules_hiddenElement__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_modules_search__WEBPACK_IMPORTED_MODULE_0__["default"])();
/**--------------GPS Function-------------------- */
gpsButton.addEventListener('click', ()=>{
    navigator.geolocation.getCurrentPosition(sucessCallback, errorCallback);
})
 const  sucessCallback = async (position) =>{
    const daily = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude.toFixed(4)}&lon=${position.coords.longitude.toFixed(3)}&exclude=weekly&appid=${key}`, { mode: 'cors' });
    const dataDay = await daily.json();
    const timeZone = (dataDay.timezone).split('/');
    (0,_modules_weatherInit__WEBPACK_IMPORTED_MODULE_3__.weatherUnity)(timeZone[1]);
}
const errorCallback = (error)=>{
    console.log(error);
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcsU0FBUyxnRkFBZ0YsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLGlDQUFpQyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FB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Q05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7Ozs7O0FDckJzQztBQUNZO0FBQzdCO0FBQzhCOztBQUVuRDtBQUNBO0FBQ0E7O0FBRUEsa0VBQVk7QUFDWixrRUFBVztBQUNYLDJEQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EscUZBQXFGLG9DQUFvQyxPQUFPLHFDQUFxQyx3QkFBd0IsSUFBSSxLQUFLLGNBQWM7QUFDcE47QUFDQTtBQUNBLElBQUksa0VBQVk7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3doZWF0aGVyLUFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2hlYXRoZXItQXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3doZWF0aGVyLUFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3doZWF0aGVyLUFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2hlYXRoZXItQXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2hlYXRoZXItQXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3doZWF0aGVyLUFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3doZWF0aGVyLUFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3doZWF0aGVyLUFwcC8uL3NyYy9oZWFkLmpzIiwid2VicGFjazovL3doZWF0aGVyLUFwcC8uL3NyYy9tb2R1bGVzL2Fpci5qcyIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvLi9zcmMvbW9kdWxlcy9jbG91ZFN0YXR1cy5qcyIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvLi9zcmMvbW9kdWxlcy9jb252ZXJ0ZXJXZWF0aGVyLmpzIiwid2VicGFjazovL3doZWF0aGVyLUFwcC8uL3NyYy9tb2R1bGVzL2RheU9mV2Vlay5qcyIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvLi9zcmMvbW9kdWxlcy9oaWRkZW5FbGVtZW50LmpzIiwid2VicGFjazovL3doZWF0aGVyLUFwcC8uL3NyYy9tb2R1bGVzL2h1bWlkaXR5LmpzIiwid2VicGFjazovL3doZWF0aGVyLUFwcC8uL3NyYy9tb2R1bGVzL21vdXRoT2ZZZWFyLmpzIiwid2VicGFjazovL3doZWF0aGVyLUFwcC8uL3NyYy9tb2R1bGVzL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvLi9zcmMvbW9kdWxlcy92aXNpYmlsaXR5LmpzIiwid2VicGFjazovL3doZWF0aGVyLUFwcC8uL3NyYy9tb2R1bGVzL3dlYXRoZXJJbml0LmpzIiwid2VicGFjazovL3doZWF0aGVyLUFwcC8uL3NyYy9tb2R1bGVzL3dpbmQuanMiLCJ3ZWJwYWNrOi8vd2hlYXRoZXItQXBwLy4vc3JjL3ByaW50LmpzIiwid2VicGFjazovL3doZWF0aGVyLUFwcC8uL3NyYy93ZWVrbHkuanMiLCJ3ZWJwYWNrOi8vd2hlYXRoZXItQXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3doZWF0aGVyLUFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3doZWF0aGVyLUFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3doZWF0aGVyLUFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3doZWF0aGVyLUFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3doZWF0aGVyLUFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2hlYXRoZXItQXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ljb24vZ3BzLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaWNvbi9jbG9zZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keXtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjsgXFxuICAgIGNvbG9yOiB3aGl0ZTsgIFxcbiAgICBmb250LXdlaWdodDogMTAwO1xcbn1cXG4qe1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XFxufVxcbmJvZHksIGh0bWx7ICAgIFxcbiAgICBtYXJnaW46IDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XFxufVxcbmJvZHl7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuLypHZW5lcmFsIFNldHRpbmdzKi9cXG5we1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcbmgxe1xcbiAgICBmb250LXNpemU6IDYwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcbmgye1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcbmgze1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcbmg0e1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcbmg1e1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcbmg2e1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbi5idG57XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYig3NCwgNzMsIDczKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLmJ0bi1zZWFyY2h7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbn1cXG4uYnRuLWdwc3tcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi5ncm91cC1idXR0b257XFxuICAgIHBhZGRpbmc6IDBweCAyMHB4IDBweCAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4ubWFpbntcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3OyAgICBcXG4gICAgbWFyZ2luOiAwcHg7ICBcXG4gICAgcGFkZGluZzogMHB4OyBcXG4gICAgLypOZXcgd2F5IHRvIFNob3cgdGhlIGluZm9ybWFjdGlvbnMqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAwRTFEO1xcbn1cXG4vKiBDU1MgYWJvdXQgU2lkZSBiYXIqL1xcbi5zaWRlQmFye1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICB3aWR0aDogMjclO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUUyMTNBO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7ICBcXG59XFxuLnNlYXJjaHsgICBcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG4uc2VhcmNoOmhvdmVye1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxufVxcbi5idG4tY2xvc2V7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMHB4O1xcbiAgICB0b3A6IDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG4vKkZvcm0gYWJvdXQgU2VhcmNoKi9cXG4uZm9ybXtcXG4gICAgbWFyZ2luOiA4MHB4IDBweCA0MHB4IDBweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5jaXR5TmFtZXtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIGJvcmRlcjogc29saWQgd2hpdGUgMXB4O1xcbiAgICBwYWRkaW5nOiAycHg7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuLmJ1dHRvblNlYXJjaHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1LCAwLCAxMjMpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiA0NXB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi8qTGlzdCBvZiBDaXRpZXNcXG4ubGlzdC1TZWFyY2h7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuLmxpc3QtYnV0dG9ue1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIG1hcmdpbjogMjBweCAwcHggMjBweCAwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA1MDUwNTAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5zZXRhe1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pY29uL3NldGEucG5nKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbn1cXG4ubGlzdC1idXR0b246aG92ZXJ7XFxuICAgIG91dGxpbmU6IDFweCB3aGl0ZSBzb2xpZDtcXG59XFxuKi9cXG4uc3RhdHVzQ2l0eXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC13cmFwOiB3cmFwLXJldmVyc2U7XFxuICAgIGp1c3RpZnktY29udGVudDogYmFzZWxpbmU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uc3RhdHVze1xcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4udGVtcENpdHl7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogNzBweDtcXG4gICAgbWFyZ2luOiA2M3B4IDBweCA2M3B4IDBweDtcXG59XFxuXFxuLypcXG4ucmFpbiwgLmh1bWluaXR5LCAudGVtcCwgLndpbmR7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlO1xcbn0qL1xcbi5sYXN0e1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxufVxcbi5jb250YWluZXJTa3l7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5jb250YWluZXJJbmZve1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4ud2Vla2x5e1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMTQlKTtcXG59XFxuLndlZWt7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmltYWdle1xcbiAgICBwYWRkaW5nOiAzcHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxufVxcbi5pbWFnZV8xMHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICBtYXJnaW46IDBweCAwcHggMTBweCAwcHg7XFxufVxcbi5yYWluUGVyY2VudHtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG59XFxuLmJ0bi1pbmZve1xcbiAgICBtYXJnaW4tdG9wOiAzcHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuXFxufVxcbi5idG4tbGVzc3tcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4ubG9jYXRpb257XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA3cHg7XFxufVxcbi5sb2NhdGlvbiBpbWd7XFxuICAgIGhlaWdodDogMzBweDtcXG59XFxuLmRhdGUsIC5za3l7XFxuICAgIG1hcmdpbjogNTBweCAwcHggNjBweCAwcHg7XFxufVxcbi52aXNpYmxle1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuLmludmlzaWJsZXtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuLyotLS0tLS0tLS0tQm9keSBDc3MtLS0tLS0tLS0tKi9cXG4uYm9keS1wcm9qZWN0e1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAwRTFEO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5idG4tZ3JvdXAtd2hlYXRlcntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMjBweDtcXG4gICAgbWFyZ2luOiA1MHB4O1xcbn1cXG4uYnRuLXVuaXR5e1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIG1hcmdpbjogNHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcbi5idG4tdW5pdHk6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMiwgMTIsIDEyKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hlYXQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmJ0bi1hY3RpdmV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGVhdDtcXG4gICAgY29sb3I6ICMyNTI1MjU7XFxufVxcbi8qLS0tLS0tLS0tLVdlZWsgV2VhdGhlci0tLS0tLS0tLSovXFxuLnRlbXAtZGF5e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW46IDE1MHB4IDBweCA0MHB4IDBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcbi5kYXl7XFxuICAgIHdpZHRoOiAxNzVweDtcXG4gICAgaGVpZ2h0OiAyMzBweDtcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxRTIxM0E7XFxufVxcbi50ZW1wc3tcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBwYWRkaW5nOiA3cHg7XFxufVxcbi5kYXkgaDR7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuLnRlbXBTdGF0dXN7XFxuICAgIHdpZHRoOiAxMjVweDtcXG4gICAgaGVpZ2h0OiAxMjVweDtcXG4gICAgcGFkZGluZzogMjBweCAwcHggMTVweCAwcHg7XFxufVxcbi8qLS0tLS0tLS0tLS0tLS0tLWhpZ2h0LWxpZ2h0cyBDU1MtLS0tLS0tLSovXFxuLmhpZ2h0LWxpZ2h0c3tcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uaGlnaHtcXG4gICAgbWFyZ2luLWxlZnQ6IDI1MHB4O1xcbn1cXG4ubW9yZS1pbmZve1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIHJvdy1nYXA6IDI1cHg7XFxuICAgIGNvbHVtbi1nYXA6IDI1cHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDQwMHB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMjBweCAxMjVweDtcXG59XFxuLm1vcmUtaW5mbyBoNXtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG4ud2luZCwgLmh1bWlkaXR5LCAudmlzaWJpbGl0eSwgLmFpcntcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFFMjEzQTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4udmlzaWJpbGl0eSwgLmFpcntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uaHVtaWRpdHl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5odW1pZGl0eSBoNSwgLmh1bWlkaXR5IGgye1xcbiAgICBtYXJnaW46IDE1cHg7XFxufVxcbi5wcm9ncmVzc2l2ZXtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI0LCAyMTksIDIxOSk7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnByb2dyZXNze1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHdpZHRoOiA4NSU7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWE0MDA7XFxufVxcbi5wcm9ne1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5wZXJjRGlzY3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn0gXFxuLmh1bmRyZWR7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDBweDtcXG4gICAgYm90dG9tOiAtMTBweDtcXG59XFxuLm5hdmVnYXRpb257XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkzLCA5MCwgOTApO1xcbiAgICBoZWlnaHQ6IDQ1cHg7XFxuICAgIHdpZHRoOiA0NXB4O1xcbn1cXG4ubmF2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm5hdiBoNXtcXG4gICAgbWFyZ2luOiA3cHg7XFxufVxcbmZvb3RlcntcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5mb290ZXIgYXtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVix5Q0FBeUM7SUFDekMsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksU0FBUztJQUNULG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksU0FBUztJQUNULG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBLG1CQUFtQjtBQUNuQjtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUNBO0lBQ0kseURBQXFDO0lBQ3JDLHdCQUF3QjtJQUN4Qiw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFB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O0FBQ3ZCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keXtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjsgXFxuICAgIGNvbG9yOiB3aGl0ZTsgIFxcbiAgICBmb250LXdlaWdodDogMTAwO1xcbn1cXG4qe1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XFxufVxcbmJvZHksIGh0bWx7ICAgIFxcbiAgICBtYXJnaW46IDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XFxufVxcbmJvZHl7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuLypHZW5lcmFsIFNldHRpbmdzKi9cXG5we1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcbmgxe1xcbiAgICBmb250LXNpemU6IDYwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcbmgye1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcbmgze1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcbmg0e1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcbmg1e1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcbmg2e1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbi5idG57XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYig3NCwgNzMsIDczKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLmJ0bi1zZWFyY2h7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbn1cXG4uYnRuLWdwc3tcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaWNvbi9ncHMucG5nKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi5ncm91cC1idXR0b257XFxuICAgIHBhZGRpbmc6IDBweCAyMHB4IDBweCAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4ubWFpbntcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3OyAgICBcXG4gICAgbWFyZ2luOiAwcHg7ICBcXG4gICAgcGFkZGluZzogMHB4OyBcXG4gICAgLypOZXcgd2F5IHRvIFNob3cgdGhlIGluZm9ybWFjdGlvbnMqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAwRTFEO1xcbn1cXG4vKiBDU1MgYWJvdXQgU2lkZSBiYXIqL1xcbi5zaWRlQmFye1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICB3aWR0aDogMjclO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUUyMTNBO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7ICBcXG59XFxuLnNlYXJjaHsgICBcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG4uc2VhcmNoOmhvdmVye1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxufVxcbi5idG4tY2xvc2V7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMHB4O1xcbiAgICB0b3A6IDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pY29uL2Nsb3NlLnBuZyk7XFxufVxcbi8qRm9ybSBhYm91dCBTZWFyY2gqL1xcbi5mb3Jte1xcbiAgICBtYXJnaW46IDgwcHggMHB4IDQwcHggMHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmNpdHlOYW1le1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAxcHg7XFxuICAgIHBhZGRpbmc6IDJweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG4uYnV0dG9uU2VhcmNoe1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUsIDAsIDEyMyk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDQ1cHg7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLypMaXN0IG9mIENpdGllc1xcbi5saXN0LVNlYXJjaHtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG4ubGlzdC1idXR0b257XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgbWFyZ2luOiAyMHB4IDBweCAyMHB4IDBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUwNTA1MDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLnNldGF7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ljb24vc2V0YS5wbmcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxufVxcbi5saXN0LWJ1dHRvbjpob3ZlcntcXG4gICAgb3V0bGluZTogMXB4IHdoaXRlIHNvbGlkO1xcbn1cXG4qL1xcbi5zdGF0dXNDaXR5e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBiYXNlbGluZTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5zdGF0dXN7XFxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi50ZW1wQ2l0eXtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC1zaXplOiA3MHB4O1xcbiAgICBtYXJnaW46IDYzcHggMHB4IDYzcHggMHB4O1xcbn1cXG5cXG4vKlxcbi5yYWluLCAuaHVtaW5pdHksIC50ZW1wLCAud2luZHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC13cmFwOiB3cmFwLXJldmVyc2U7XFxufSovXFxuLmxhc3R7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG59XFxuLmNvbnRhaW5lclNreXtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuLmNvbnRhaW5lckluZm97XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbi53ZWVrbHl7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxNCUpO1xcbn1cXG4ud2Vla3tcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaW1hZ2V7XFxuICAgIHBhZGRpbmc6IDNweDtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG59XFxuLmltYWdlXzEwe1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIG1hcmdpbjogMHB4IDBweCAxMHB4IDBweDtcXG59XFxuLnJhaW5QZXJjZW50e1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbn1cXG4uYnRuLWluZm97XFxuICAgIG1hcmdpbi10b3A6IDNweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG5cXG59XFxuLmJ0bi1sZXNze1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5sb2NhdGlvbntcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDdweDtcXG59XFxuLmxvY2F0aW9uIGltZ3tcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbn1cXG4uZGF0ZSwgLnNreXtcXG4gICAgbWFyZ2luOiA1MHB4IDBweCA2MHB4IDBweDtcXG59XFxuLnZpc2libGV7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uaW52aXNpYmxle1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4vKi0tLS0tLS0tLS1Cb2R5IENzcy0tLS0tLS0tLS0qL1xcbi5ib2R5LXByb2plY3R7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMDBFMUQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmJ0bi1ncm91cC13aGVhdGVye1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAyMHB4O1xcbiAgICBtYXJnaW46IDUwcHg7XFxufVxcbi5idG4tdW5pdHl7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgbWFyZ2luOiA0cHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuLmJ0bi11bml0eTpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyLCAxMiwgMTIpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGVhdDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4uYnRuLWFjdGl2ZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoZWF0O1xcbiAgICBjb2xvcjogIzI1MjUyNTtcXG59XFxuLyotLS0tLS0tLS0tV2VlayBXZWF0aGVyLS0tLS0tLS0tKi9cXG4udGVtcC1kYXl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbjogMTUwcHggMHB4IDQwcHggMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuLmRheXtcXG4gICAgd2lkdGg6IDE3NXB4O1xcbiAgICBoZWlnaHQ6IDIzMHB4O1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFFMjEzQTtcXG59XFxuLnRlbXBze1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIHBhZGRpbmc6IDdweDtcXG59XFxuLmRheSBoNHtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbn1cXG4udGVtcFN0YXR1c3tcXG4gICAgd2lkdGg6IDEyNXB4O1xcbiAgICBoZWlnaHQ6IDEyNXB4O1xcbiAgICBwYWRkaW5nOiAyMHB4IDBweCAxNXB4IDBweDtcXG59XFxuLyotLS0tLS0tLS0tLS0tLS0taGlnaHQtbGlnaHRzIENTUy0tLS0tLS0tKi9cXG4uaGlnaHQtbGlnaHRze1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5oaWdoe1xcbiAgICBtYXJnaW4tbGVmdDogMjUwcHg7XFxufVxcbi5tb3JlLWluZm97XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgcm93LWdhcDogMjVweDtcXG4gICAgY29sdW1uLWdhcDogMjVweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgNDAwcHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIyMHB4IDEyNXB4O1xcbn1cXG4ubW9yZS1pbmZvIGg1e1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVxcbi53aW5kLCAuaHVtaWRpdHksIC52aXNpYmlsaXR5LCAuYWlye1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUUyMTNBO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi52aXNpYmlsaXR5LCAuYWlye1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5odW1pZGl0eXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmh1bWlkaXR5IGg1LCAuaHVtaWRpdHkgaDJ7XFxuICAgIG1hcmdpbjogMTVweDtcXG59XFxuLnByb2dyZXNzaXZle1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjQsIDIxOSwgMjE5KTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ucHJvZ3Jlc3N7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgd2lkdGg6IDg1JTtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlYTQwMDtcXG59XFxuLnByb2d7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnBlcmNEaXNje1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufSBcXG4uaHVuZHJlZHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMHB4O1xcbiAgICBib3R0b206IC0xMHB4O1xcbn1cXG4ubmF2ZWdhdGlvbntcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTMsIDkwLCA5MCk7XFxuICAgIGhlaWdodDogNDVweDtcXG4gICAgd2lkdGg6IDQ1cHg7XFxufVxcbi5uYXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubmF2IGg1e1xcbiAgICBtYXJnaW46IDdweDtcXG59XFxuZm9vdGVye1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbmZvb3RlciBhe1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgIGNsb3VkU3RhdHVzICBmcm9tICcuL3ByaW50JztcbmltcG9ydCBkYXlPZldlZWsgZnJvbSAnLi9tb2R1bGVzL2RheU9mV2Vlayc7XG5pbXBvcnQgbW91dGhPZlllYXIgZnJvbSAnLi9tb2R1bGVzL21vdXRoT2ZZZWFyJztcbmltcG9ydCBzb3VyY2VMb2NhdGlvbiBmcm9tICcuL2ljb24vbG9jYXRpb24ucG5nJztcblxuY29uc3Qgc3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LnN0YXR1cycpO1xuY29uc3QgY2l0eVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbmNvbnN0IGRhdGVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG5jb25zdCBzdGF0dXNDaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCB0ZW1wQ2l0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5jb25zdCBza3kgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGljb25Mb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG5pY29uTG9jYXRpb24uc3JjID0gc291cmNlTG9jYXRpb247XG4vL3ZhciBzdGF0dXMgPSAnZmV3IGNsb3Vkcyc7XG5mdW5jdGlvbiBoZWFkQ2l0eShjaXR5LCBzdGF0dXMsIHRlbXApIHsgICAgXG4gICAgY3JlYXRlRWxlbSgpO1xuICAgIHN0YXR1c0NpdHkuYXBwZW5kQ2hpbGQoY2xvdWRTdGF0dXMoc3RhdHVzLCAnaW1hZ2VfMTAnKSk7XG4gICAgc3RhdHVzQ2l0eS5hcHBlbmRDaGlsZCh0ZW1wQ2l0eSk7IFxuICAgIGNpdHlUaXRsZS5pbm5lckhUTUwgPSBjaXR5O1xuICAgIHRlbXBDaXR5LmlubmVySFRNTCA9IGAke3RlbXB9YDsgICAgXG4gICAgc2t5LmlubmVySFRNTCA9IGAke3N0YXR1c31gXG59XG5mdW5jdGlvbiBjcmVhdGVFbGVtKCkge1xuICAgIHN0YXR1c0NpdHkuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjaXR5VGl0bGUuY2xhc3NMaXN0LmFkZCgnY2l0eScpO1xuICAgIGRhdGVUaXRsZS5jbGFzc0xpc3QuYWRkKCdkYXRlJyk7XG4gICAgc3RhdHVzQ2l0eS5jbGFzc0xpc3QuYWRkKCdzdGF0dXNDaXR5Jyk7XG4gICAgdGVtcENpdHkuY2xhc3NMaXN0LmFkZCgndGVtcENpdHknKTtcbiAgICBza3kuY2xhc3NMaXN0LmFkZCgnc2t5Jyk7ICAgIFxuICAgIGxvY2F0aW9uLmNsYXNzTGlzdC5hZGQoJ2xvY2F0aW9uJyk7XG4gICAgICAgICAgIFxuICAgIHN0YXR1cy5hcHBlbmRDaGlsZChzdGF0dXNDaXR5KTtcbiAgICBzdGF0dXMuYXBwZW5kQ2hpbGQoc2t5KTtcbiAgICBzdGF0dXMuYXBwZW5kQ2hpbGQoZGF0ZVRpdGxlKTtcbiAgICBzdGF0dXMuYXBwZW5kQ2hpbGQobG9jYXRpb24pO1xuXG4gICAgbG9jYXRpb24uYXBwZW5kQ2hpbGQoaWNvbkxvY2F0aW9uKTtcbiAgICBsb2NhdGlvbi5hcHBlbmRDaGlsZChjaXR5VGl0bGUpO1xufVxuXG5mdW5jdGlvbiBjaGVja1RpbWUoaSkge1xuICAgIGlmIChpIDwgMTApIHtcbiAgICAgICAgaSA9IFwiMFwiICsgaTtcbiAgICB9XG4gICAgcmV0dXJuIGk7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0VGltZSgpIHtcbiAgICB2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIHZhciBoID0gdG9kYXkuZ2V0SG91cnMoKTtcbiAgICB2YXIgbSA9IHRvZGF5LmdldE1pbnV0ZXMoKTtcbiAgICAvLyBhZGQgYSB6ZXJvIGluIGZyb250IG9mIG51bWJlcnM8MTBcbiAgICBtID0gY2hlY2tUaW1lKG0pO1xuICAgIGRhdGVUaXRsZS5pbm5lckhUTUwgPSBkYXlPZldlZWsodG9kYXkuZ2V0RGF5KCkpICsgJywgJyArIHRvZGF5LmdldFVUQ0RhdGUoKSArICcgJysgbW91dGhPZlllYXIodG9kYXkuZ2V0TW9udGgoKSkgKyAnICcgKyBoICsgXCI6XCIgKyBtO1xuICAgIHZhciB0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN0YXJ0VGltZSgpXG4gICAgfSwgNTAwKTtcbn1cbnN0YXJ0VGltZSgpO1xuXG5leHBvcnQgZGVmYXVsdCBoZWFkQ2l0eTsiLCJjb25zdCBhaXJWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gyLmFpcicpO1xuXG5mdW5jdGlvbiBzaG93QWlyKHZhbHVlKXtcbiAgICBhaXJWYWx1ZS5pbm5lckhUTUwgPSBgJHt2YWx1ZX0gbWJgXG59XG5leHBvcnQgZGVmYXVsdCBzaG93QWlyOyIsImltcG9ydCBjbG91ZERheSBmcm9tICBcIi4uL2ljb24vY2xvdWR5LWRheS5zdmdcIjtcbmltcG9ydCBzdW4gZnJvbSAgXCIuLi9pY29uL3N1bi5zdmdcIjtcbmltcG9ydCByYWlueSBmcm9tICBcIi4uL2ljb24vcmFpbnkuc3ZnXCI7XG5pbXBvcnQgc25vdyBmcm9tICBcIi4uL2ljb24vc25vdy5zdmdcIjtcbmltcG9ydCBtb29uIGZyb20gIFwiLi4vaWNvbi9tb29uLnN2Z1wiO1xuaW1wb3J0IGNsb3VkTmlnaHQgZnJvbSAgIFwiLi4vaWNvbi9jbG91ZHktbmlnaHQuc3ZnXCI7XG5pbXBvcnQgdW1icmVsbGFJY29uIGZyb20gXCIuLi9pY29uL3VtYnJlbGxhLnBuZ1wiO1xuaW1wb3J0IHdpbmRJY29uIGZyb20gXCIuLi9pY29uL3dpbmQuc3ZnXCI7XG5pbXBvcnQgaHVtaWRpdHlpY29uIGZyb20gXCIuLi9pY29uL2h1bWlkaXR5LnN2Z1wiO1xuaW1wb3J0IG1pc3QgZnJvbSBcIi4uL2ljb24vbWlzdC5zdmdcIjtcblxuZnVuY3Rpb24gY2xvdWRTdGF0dXMoc3RhdHVzVGVtcCwgY2xhc3NsaSl7XG4gICAgdmFyIGhvdXIgPSBuZXcgRGF0ZSgpLmdldEhvdXJzKCk7XG4gICAgY29uc3QgY2xvdWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjbG91ZC5jbGFzc0xpc3QuYWRkKGNsYXNzbGkpO1xuICAgIGlmKGhvdXIgPj0gNSAmJiBob3VyIDwgMTgpe1xuICAgICAgICBzd2l0Y2goc3RhdHVzVGVtcCl7XG4gICAgICAgICAgICBjYXNlICdDbGVhcic6IGNsb3VkLnNyYyA9IHN1bjsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdDbG91ZHMnOiBjbG91ZC5zcmMgPSBjbG91ZERheTsgYnJlYWs7ICBcbiAgICAgICAgICAgIGNhc2UgJ1JhaW4nOiBjbG91ZC5zcmMgPSByYWlueTsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdTbm93JzogY2xvdWQuc3JjID0gc25vdzsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdNaXN0JzogY2xvdWQuc3JjID0gbWlzdDsgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9ZWxzZXtcbiAgICAgICAgc3dpdGNoKHN0YXR1c1RlbXApe1xuICAgICAgICAgICAgY2FzZSAnQ2xlYXInOiBjbG91ZC5zcmMgPSBtb29uOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0Nsb3Vkcyc6IGNsb3VkLnNyYyA9IGNsb3VkTmlnaHQ7IGJyZWFrOyBcbiAgICAgICAgICAgIGNhc2UgJ1JhaW4nOiBjbG91ZC5zcmMgPSByYWlueSA7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnU25vdyc6IGNsb3VkLnNyYyA9IHNub3c7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnTWlzdCc6IGNsb3VkLnNyYyA9IG1pc3Q7IGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjbG91ZDtcbn1cbmV4cG9ydCBkZWZhdWx0IGNsb3VkU3RhdHVzOyIsImZ1bmN0aW9uIGNvbnZlcnRlcldlYXRoZXIodGVtcGVyYXR1cmUsIHVuaXR5KXtcbiAgICBzd2l0Y2godW5pdHkpe1xuICAgICAgICBjYXNlICdDZWxzaXVzJyA6IHJldHVybiB0ZW1wZXJhdHVyZS0yNzMgKyAnIMKwQyc7IGJyZWFrO1xuICAgICAgICBjYXNlICdLZWx2aW4nIDogcmV0dXJuIHRlbXBlcmF0dXJlICsgJyDCsEsnOyBicmVhaztcbiAgICAgICAgY2FzZSAnRmFocmVuaGVpdCcgOiByZXR1cm4gKCgodGVtcGVyYXR1cmUtMjczKSoxLjgpICszMikudG9GaXhlZCgpICsgJyDCsEYnOyBicmVhaztcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBjb252ZXJ0ZXJXZWF0aGVyOyIsImZ1bmN0aW9uIGRheU9mV2VlayhudW1iZXIpe1xuICAgIHZhciBuYW1lT2ZEYXkgPSAnJztcbiAgICBzd2l0Y2gobnVtYmVyKXtcbiAgICAgICAgY2FzZSAwOiBuYW1lT2ZEYXkgPSAnU3VuJzsgYnJlYWs7XG4gICAgICAgIGNhc2UgMTogbmFtZU9mRGF5ID0gJ01vbic7IGJyZWFrO1xuICAgICAgICBjYXNlIDI6IG5hbWVPZkRheSA9ICdUdWVzJzsgYnJlYWs7XG4gICAgICAgIGNhc2UgMzogbmFtZU9mRGF5ID0gJ1dlZCc7IGJyZWFrO1xuICAgICAgICBjYXNlIDQ6IG5hbWVPZkRheSA9ICdUaHUnOyBicmVhaztcbiAgICAgICAgY2FzZSA1OiBuYW1lT2ZEYXkgPSAnRnJpJzsgYnJlYWs7XG4gICAgICAgIGNhc2UgNjogbmFtZU9mRGF5ID0gJ1NhdCc7IGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gbmFtZU9mRGF5O1xufVxuZXhwb3J0IGRlZmF1bHQgZGF5T2ZXZWVrOyIsImNvbnN0IGVsZW1lbnRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LmZvcm0tZ3JvdXAnKTtcbmNvbnN0IGJ1dHRvblNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5idG4tc2VhcmNoJyk7XG5jb25zdCBidXR0b25DbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5idG4tY2xvc2UnKTtcbmNvbnN0IGVsZW1lbnRJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LmluZm8nKTtcbmNvbnN0IGVsZW1lbnRTZXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2LnNldCcpO1xuY29uc3QgZWxlbWVudExpc3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYubGlzdC1idXR0b24nKTtcblxuZnVuY3Rpb24gZGlzcGxheUZvcm0oKXtcbiAgIC8qIFxuICAgU2hvdyB0aGUgRWxlbWVudFxuICAgICovXG4gICBidXR0b25TZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgIGVsZW1lbnRGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmlzaWJsZScpO1xuICAgIGVsZW1lbnRJbmZvLmNsYXNzTGlzdC5hZGQoJ2ludmlzaWJsZScpO1xuICAgIGVsZW1lbnRGb3JtLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgIH0pO1xuICAgLypUYWtpbmcgQWxsIGVsZW1lbnQgd2l0aCB0aGlzIENsYXNzIGFuZCBzZXQgdGhlbSBmb3IgcmVjaWV2ZSAnaW52aXNpYmxlJyBhbmQgJ3NldGEnIGNsYXNzZXMqL1xuICAgZm9yKGxldCBpPTA7IGk8ZWxlbWVudFNldGEubGVuZ3RoOyBpKyspe1xuICAgICAgICBlbGVtZW50TGlzdEJ1dHRvbltpXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoKT0+e1xuICAgICAgICBlbGVtZW50U2V0YVtpXS5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKTtcbiAgICAgICAgZWxlbWVudFNldGFbaV0uY2xhc3NMaXN0LmFkZCgnc2V0YScpO1xuICAgICAgIH0pXG4gICAgICAgZWxlbWVudExpc3RCdXR0b25baV0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKT0+e1xuICAgICAgICBlbGVtZW50U2V0YVtpXS5jbGFzc0xpc3QuYWRkKCdpbnZpc2libGUnKTtcbiAgICAgICAgZWxlbWVudFNldGFbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2V0YScpO1xuICAgICAgIH0pXG4gICB9XG4gICAvKipcbiAgICAqIEhpZGRlbiB0aGUgRWxlbWVudFxuICAgICovXG4gICBidXR0b25DbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgZWxlbWVudEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgIGVsZW1lbnRGb3JtLmNsYXNzTGlzdC5hZGQoJ2ludmlzaWJsZScpO1xuICAgIGVsZW1lbnRJbmZvLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmlzaWJsZScpO1xuICAgIGVsZW1lbnRJbmZvLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgIH0pXG5cbn1cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlGb3JtOyIsImNvbnN0IHByb2dyZXNzSHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYucHJvZ3Jlc3MnKTtcbmNvbnN0IHZhbG9ySHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMi5odW1pZGl0eVAnKTtcblxuZnVuY3Rpb24gaHVtaWRpdHlTaG93KHZhbG9yKXtcbiAgICBwcm9ncmVzc0h1bWlkaXR5LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgd2lkdGg6ICR7dmFsb3J9JWApO1xuICAgIHZhbG9ySHVtaWRpdHkuaW5uZXJIVE1MID0gYCR7dmFsb3J9JWA7XG59XG5leHBvcnQgZGVmYXVsdCBodW1pZGl0eVNob3c7IiwiZnVuY3Rpb24gbW91dGhPZlllYXIobnVtYmVyKSB7XG4gICAgdmFyIG5hbWVPZk1vdXRoID0gJyBKYW4nO1xuICAgIHN3aXRjaChudW1iZXIpe1xuICAgICAgICBjYXNlIDA6IG5hbWVPZk1vdXRoID0gJ0phbic7IGJyZWFrO1xuICAgICAgICBjYXNlIDE6IG5hbWVPZk1vdXRoID0gJ0ZlYic7IGJyZWFrO1xuICAgICAgICBjYXNlIDI6IG5hbWVPZk1vdXRoID0gJ01hcmNoJzsgYnJlYWs7XG4gICAgICAgIGNhc2UgMzogbmFtZU9mTW91dGggPSAnQXByaWwnOyBicmVhaztcbiAgICAgICAgY2FzZSA0OiBuYW1lT2ZNb3V0aCA9ICdNYXknOyBicmVhaztcbiAgICAgICAgY2FzZSA1OiBuYW1lT2ZNb3V0aCA9ICdKdW5lJzsgYnJlYWs7XG4gICAgICAgIGNhc2UgNjogbmFtZU9mTW91dGggPSAnSnVseSc7IGJyZWFrO1xuICAgICAgICBjYXNlIDc6IG5hbWVPZk1vdXRoID0gJ0F1Zyc7IGJyZWFrO1xuICAgICAgICBjYXNlIDg6IG5hbWVPZk1vdXRoID0gJ1NlcHQnOyBicmVhaztcbiAgICAgICAgY2FzZSA5OiBuYW1lT2ZNb3V0aCA9ICdPY3QnOyBicmVhaztcbiAgICAgICAgY2FzZSAxMDogbmFtZU9mTW91dGggPSAnTm92JzsgYnJlYWs7XG4gICAgICAgIGNhc2UgMTE6IG5hbWVPZk1vdXRoID0gJ0RlYyc7IGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gbmFtZU9mTW91dGg7XG59XG5leHBvcnQgZGVmYXVsdCBtb3V0aE9mWWVhcjsiLCJpbXBvcnQgeyB3ZWF0aGVyVW5pdHkgfSBmcm9tIFwiLi93ZWF0aGVySW5pdFwiO1xuXG5jb25zdCBjaXR5TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0LmNpdHlOYW1lJyk7XG5jb25zdCBidG5TZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24uYnV0dG9uU2VhcmNoJyk7XG5jb25zdCBlbGVtZW50Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5mb3JtLWdyb3VwJyk7XG5jb25zdCBlbGVtZW50SW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5pbmZvJyk7XG5cbmZ1bmN0aW9uIHNlYXJjaCgpIHtcbiAgICBidG5TZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgICAgICBpZihjaXR5TmFtZS52YWx1ZS5sZW5ndGggPT09IDApe1xuICAgICAgICAgICAgYWxlcnQoJ1dyaXRlIFRoZSBuYW1lIG9mIGNpdHknKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHZhciBjaXR5ID0gY2l0eU5hbWUudmFsdWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBjaXR5TmFtZS52YWx1ZS5zbGljZSgxKTtcbiAgICAgICAgICAgIGVsZW1lbnRGb3JtLmNsYXNzTGlzdC5hZGQoJ2ludmlzaWJsZScpO1xuICAgICAgICAgICAgZWxlbWVudEluZm8uY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJyk7XG4gICAgICAgICAgICB3ZWF0aGVyVW5pdHkoY2l0eSk7XG4gICAgICAgICAgICBjaXR5TmFtZS52YWx1ZT0nJztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9KVxufVxuZXhwb3J0IGRlZmF1bHQgc2VhcmNoOyIsImNvbnN0IHZpc2liaWxpdHlWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gyLnZpc2liaWxpdHknKTtcblxuZnVuY3Rpb24gc2hvd1Zpc2liaWxpdHkodmFsdWUpe1xuICAgIHZpc2liaWxpdHlWYWx1ZS5pbm5lckhUTUwgPSBgJHt2YWx1ZX0gbWlsZXNgXG59XG5leHBvcnQgZGVmYXVsdCBzaG93VmlzaWJpbGl0eTsiLCJpbXBvcnQgY29udmVydGVyV2VhdGhlciBmcm9tIFwiLi9jb252ZXJ0ZXJXZWF0aGVyXCI7XG5pbXBvcnQgaGVhZENpdHkgZnJvbSBcIi4uL2hlYWRcIjtcbmltcG9ydCBodW1pZGl0eVNob3cgZnJvbSBcIi4vaHVtaWRpdHlcIjtcbmltcG9ydCBzaG93QWlyIGZyb20gXCIuL2FpclwiO1xuaW1wb3J0IHNob3dWaXNpYmlsaXR5IGZyb20gXCIuL3Zpc2liaWxpdHlcIjtcbmltcG9ydCB7IHdlYXRoZXJEYWlseSwgd2Vla1RpbWVsaW5lLCBzaG93VGVtcE1heE1pbiB9IGZyb20gXCIuLi93ZWVrbHlcIjtcbmltcG9ydCB3aW5kU2hvdyBmcm9tIFwiLi93aW5kXCI7XG5cbmNvbnN0IGJ1dHRvbkNlbHNpdXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW5pdHktMScpO1xuY29uc3QgYnV0dG9uRmFocmVuaGVpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1bml0eS0yJyk7XG5jb25zdCBidXR0b25LZWx2aW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW5pdHktMycpO1xuXG4vL0tleSBPZiBBUElcbnZhciBrZXkgPSAnYTRhZDY0NDEwNTk1YTIwMzZkMDEzMzM5MTQyZDQ2ODQnO1xudmFyIGNpdHlEYXRhID0gMDtcbnZhciBkYWlseURhdGEgPSAwO1xudmFyIHVuaXR5ID0gJ0NlbHNpdXMnO1xuXG5hc3luYyBmdW5jdGlvbiB3ZWF0aGVyVW5pdHkoY2l0eSkge1xuICAgIC8qKi0tLS0tLS0tLS0tQXBpIEluaXQtLS0tLS0tLS0tLS0tICovXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JmFwcGlkPSR7a2V5fWAsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgICAgICBjaXR5RGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc3QgZGFpbHkgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7Y2l0eURhdGEuY29vcmQubGF0fSZsb249JHtjaXR5RGF0YS5jb29yZC5sb24udG9GaXhlZCgpfSZleGNsdWRlPXdlZWtseSZhcHBpZD0ke2tleX1gLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgICAgIFxuICAgICAgICBkYWlseURhdGEgPSBhd2FpdCBkYWlseS5qc29uKCk7XG4gICAgICAgIHZhciByZWFsVGVtcGVyYXR1cmUgPSBwYXJzZUludChjaXR5RGF0YS5tYWluLmZlZWxzX2xpa2UsIDEwKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBhbGVydCgnRXJyb3IhIFZlcmlmeSB5b3VyIENvbm5lY3Rpb24gb3IgQ2l0eSBOb3QgRm91bmQhJylcbiAgICB9XG5cbiAgICAvKiotLS0tLS0tSW5pdGlhbGl6YXRpb24gb2YgRnVuY3Rpb25zLS0tLS0tLS0tLS0gKi9cbiAgICB2YXIgaHVtaWRpdHlWYWx1ZSA9IGNpdHlEYXRhLm1haW4uaHVtaWRpdHk7XG4gICAgd2Vla1RpbWVsaW5lKCk7XG4gICAgaGVhZENpdHkoY2l0eURhdGEubmFtZSwgY2l0eURhdGEud2VhdGhlclswXS5tYWluLCBjb252ZXJ0ZXJXZWF0aGVyKHJlYWxUZW1wZXJhdHVyZSwgdW5pdHkpKTtcbiAgICBodW1pZGl0eVNob3coaHVtaWRpdHlWYWx1ZSk7XG4gICAgc2hvd0FpcihjaXR5RGF0YS5tYWluLnByZXNzdXJlKTtcbiAgICBzaG93VmlzaWJpbGl0eShjaXR5RGF0YS52aXNpYmlsaXR5IC8gMTAwMCk7XG4gICAgbWF4TWluU2hvdygpO1xuICAgIHNob3dTdGF0dXMoKTtcbiAgICB3aW5kU2hvdyhjaXR5RGF0YS53aW5kLnNwZWVkICxjaXR5RGF0YS53aW5kLmRlZylcblxuICAgIGJ1dHRvbkNlbHNpdXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGJ1dHRvbkZhaHJlbmhlaXQuY2xhc3NMaXN0LnJlbW92ZSgnYnRuLWFjdGl2ZScpO1xuICAgICAgICBidXR0b25LZWx2aW4uY2xhc3NMaXN0LnJlbW92ZSgnYnRuLWFjdGl2ZScpO1xuICAgICAgICBidXR0b25DZWxzaXVzLmNsYXNzTGlzdC5hZGQoJ2J0bi1hY3RpdmUnKTtcbiAgICAgICAgdW5pdHkgPSAnQ2Vsc2l1cyc7XG4gICAgICAgIGhlYWRDaXR5KGNpdHlEYXRhLm5hbWUsIGNpdHlEYXRhLndlYXRoZXJbMF0ubWFpbiwgY29udmVydGVyV2VhdGhlcihyZWFsVGVtcGVyYXR1cmUsIHVuaXR5KSk7XG4gICAgICAgIG1heE1pblNob3coKTtcbiAgICB9KTtcbiAgICBidXR0b25GYWhyZW5oZWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBidXR0b25DZWxzaXVzLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi1hY3RpdmUnKTtcbiAgICAgICAgYnV0dG9uS2VsdmluLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi1hY3RpdmUnKTtcbiAgICAgICAgYnV0dG9uRmFocmVuaGVpdC5jbGFzc0xpc3QuYWRkKCdidG4tYWN0aXZlJyk7XG4gICAgICAgIHVuaXR5ID0gJ0ZhaHJlbmhlaXQnO1xuICAgICAgICBoZWFkQ2l0eShjaXR5RGF0YS5uYW1lLCBjaXR5RGF0YS53ZWF0aGVyWzBdLm1haW4sIGNvbnZlcnRlcldlYXRoZXIocmVhbFRlbXBlcmF0dXJlLCB1bml0eSkpO1xuICAgICAgICBtYXhNaW5TaG93KCk7XG4gICAgfSk7XG4gICAgYnV0dG9uS2VsdmluLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBidXR0b25GYWhyZW5oZWl0LmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi1hY3RpdmUnKTtcbiAgICAgICAgYnV0dG9uQ2Vsc2l1cy5jbGFzc0xpc3QucmVtb3ZlKCdidG4tYWN0aXZlJyk7XG4gICAgICAgIGJ1dHRvbktlbHZpbi5jbGFzc0xpc3QuYWRkKCdidG4tYWN0aXZlJyk7XG4gICAgICAgIHVuaXR5ID0gJ0tlbHZpbic7XG4gICAgICAgIGhlYWRDaXR5KGNpdHlEYXRhLm5hbWUsIGNpdHlEYXRhLndlYXRoZXJbMF0ubWFpbiwgY29udmVydGVyV2VhdGhlcihyZWFsVGVtcGVyYXR1cmUsIHVuaXR5KSk7XG4gICAgICAgIG1heE1pblNob3coKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gbWF4TWluU2hvdygpe1xuICAgIHZhciBjb3VudCA9IDE7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCA1OyBqKyspIHsgXG4gICAgICAgIHNob3dUZW1wTWF4TWluKHVuaXR5LCBkYWlseURhdGEuZGFpbHlbY291bnRdLnRlbXAubWF4LCBkYWlseURhdGEuZGFpbHlbY291bnRdLnRlbXAubWluLCBqKTtcbiAgICAgICAgY291bnQrKztcbiAgICB9XG59XG5mdW5jdGlvbiBzaG93U3RhdHVzKCl7XG4gICAgdmFyIGNvdW50ID0gMTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDU7IGorKykgeyBcbiAgICAgICAgd2VhdGhlckRhaWx5KGRhaWx5RGF0YS5kYWlseVtjb3VudF0ud2VhdGhlclswXS5tYWluLCBqKTtcbiAgICAgICAgY291bnQrKztcbiAgICB9XG59XG5leHBvcnQgeyB3ZWF0aGVyVW5pdHkgfTsiLCJpbXBvcnQgc291cmNlTmF2IGZyb20gJy4uL2ljb24vbmF2ZWdhY2FvLnBuZyc7XG5cbmNvbnN0IGltZ05hdmVnYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbWcubmF2ZWdhdGlvbicpO1xuY29uc3Qgd2luZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMi53aW5kJyk7XG5pbWdOYXZlZ2F0aW9uLnNyYyA9IHNvdXJjZU5hdjtcblxuZnVuY3Rpb24gd2luZFNob3coc3BlZWQsIGRlZ3JhdSl7XG4gICAgaW1nTmF2ZWdhdGlvbi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYHRyYW5zZm9ybTogcm90YXRlKCR7ZGVncmF1fWRlZylgKTtcbiAgICB3aW5kRWxlbWVudC5pbm5lckhUTUwgPSBgJHtzcGVlZH0gbXBoYDtcbn1cbmV4cG9ydCBkZWZhdWx0IHdpbmRTaG93OyIsImltcG9ydCBjbG91ZERheSBmcm9tICBcIi4vaWNvbi9jbG91ZHktZGF5LnN2Z1wiO1xuaW1wb3J0IHN1biBmcm9tICBcIi4vaWNvbi9zdW4uc3ZnXCI7XG5pbXBvcnQgcmFpbnkgZnJvbSAgXCIuL2ljb24vcmFpbnkuc3ZnXCI7XG5pbXBvcnQgc25vdyBmcm9tICBcIi4vaWNvbi9zbm93LnN2Z1wiO1xuaW1wb3J0IG1vb24gZnJvbSAgXCIuL2ljb24vbW9vbi5zdmdcIjtcbmltcG9ydCBjbG91ZE5pZ2h0IGZyb20gICBcIi4vaWNvbi9jbG91ZHktbmlnaHQuc3ZnXCI7XG5pbXBvcnQgdW1icmVsbGFJY29uIGZyb20gXCIuL2ljb24vdW1icmVsbGEucG5nXCI7XG5pbXBvcnQgd2luZEljb24gZnJvbSBcIi4vaWNvbi93aW5kLnN2Z1wiO1xuaW1wb3J0IGh1bWlkaXR5aWNvbiBmcm9tIFwiLi9pY29uL2h1bWlkaXR5LnN2Z1wiO1xuaW1wb3J0IG1pc3QgZnJvbSBcIi4vaWNvbi9taXN0LnN2Z1wiO1xuZXhwb3J0IGRlZmF1bHQgY2xvdWRTdGF0dXM7XG5cbmNvbnN0IGRhdGEgPSBuZXcgRGF0ZSgpO1xuY29uc3QgaG91ciA9IGRhdGEuZ2V0SG91cnMoKVxuXG5mdW5jdGlvbiBjbG91ZFN0YXR1cyhzdGF0dXNUZW1wLCBjbGFzc2xpKXtcbiAgICBjb25zdCBjbG91ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNsb3VkLmNsYXNzTGlzdC5hZGQoY2xhc3NsaSk7XG4gICAgaWYoaG91ciA+PSA1ICYmIGhvdXIgPCAxOCl7XG4gICAgICAgIHN3aXRjaChzdGF0dXNUZW1wKXtcbiAgICAgICAgICAgIGNhc2UgJ0NsZWFyJzogY2xvdWQuc3JjID0gc3VuOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0Nsb3Vkcyc6IGNsb3VkLnNyYyA9IGNsb3VkRGF5OyBicmVhazsgIFxuICAgICAgICAgICAgY2FzZSAnUmFpbic6IGNsb3VkLnNyYyA9IHJhaW55OyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1Nub3cnOiBjbG91ZC5zcmMgPSBzbm93OyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ01pc3QnOiBjbG91ZC5zcmMgPSBtaXN0OyBicmVhaztcbiAgICAgICAgfVxuICAgIH1lbHNle1xuICAgICAgICBzd2l0Y2goc3RhdHVzVGVtcCl7XG4gICAgICAgICAgICBjYXNlICdDbGVhcic6IGNsb3VkLnNyYyA9IG1vb247IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQ2xvdWRzJzogY2xvdWQuc3JjID0gY2xvdWROaWdodDsgYnJlYWs7IFxuICAgICAgICAgICAgY2FzZSAnUmFpbic6IGNsb3VkLnNyYyA9IHJhaW55IDsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdTbm93JzogY2xvdWQuc3JjID0gc25vdzsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdNaXN0JzogY2xvdWQuc3JjID0gbWlzdDsgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNsb3VkO1xufVxuXG5cblxuXG4iLCJpbXBvcnQgZGF5T2ZXZWVrIGZyb20gXCIuL21vZHVsZXMvZGF5T2ZXZWVrXCI7XG5pbXBvcnQgbW91dGhPZlllYXIgZnJvbSBcIi4vbW9kdWxlcy9tb3V0aE9mWWVhclwiO1xuaW1wb3J0IGNsb3VkU3RhdHVzIGZyb20gXCIuL21vZHVsZXMvY2xvdWRTdGF0dXNcIjtcbmltcG9ydCBjb252ZXJ0ZXJXZWF0aGVyIGZyb20gXCIuL21vZHVsZXMvY29udmVydGVyV2VhdGhlclwiO1xuXG5jb25zdCBkYXRlVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2g0LmRhdGVUZW1wJyk7XG5jb25zdCB0ZW1wU3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2LnRlbXBTdGF0dXMtMScpO1xuY29uc3QgdGVtcE1heCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2g0LnRlbXBNYXgnKTtcbmNvbnN0IHRlbXBNaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdoNC50ZW1wTWluJyk7XG5cbmZ1bmN0aW9uIHdlZWtUaW1lbGluZSgpIHtcblxuICAgIHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgdmFyIGsgPSAxO1xuICAgIHZhciBpbmNyZW1ldERheSA9IDE7XG4gICAgdmFyIGRheU9mTW91dGggPSB0b2RheS5nZXRVVENEYXRlKCkgKyBpbmNyZW1ldERheTtcbiAgICB2YXIgZGF5ID0gdG9kYXkuZ2V0RGF5KCk7XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDU7IGorKykge1xuICAgICAgICBkYXlPZk1vdXRoID0gdG9kYXkuZ2V0VVRDRGF0ZSgpICsgaW5jcmVtZXREYXk7XG4gICAgICAgIGlmIChkYXkgKyBrIDw9IDYpIHtcbiAgICAgICAgICAgIGRhdGVUZW1wW2pdLmlubmVyVGV4dCA9IGRheU9mV2VlayhkYXkgKyBrKSArICcsICcgKyBkYXlPZk1vdXRoICsgJyAnICsgbW91dGhPZlllYXIodG9kYXkuZ2V0TW9udGgoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBrID0gMFxuICAgICAgICAgICAgZGF0ZVRlbXBbal0uaW5uZXJUZXh0ID0gZGF5T2ZXZWVrKGspICsgJywgJyArIGRheU9mTW91dGggKyAnICcgKyBtb3V0aE9mWWVhcih0b2RheS5nZXRNb250aCgpKTtcbiAgICAgICAgICAgIGRheSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaW5jcmVtZXREYXkrK1xuICAgICAgICBrKys7XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHdlYXRoZXJEYWlseShzdGF0dXMsIGNvdW50KSB7XG4gICAgdGVtcFN0YXR1c1tjb3VudF0uaW5uZXJIVE1MID0gJyAnO1xuICAgIHRlbXBTdGF0dXNbY291bnRdLmFwcGVuZENoaWxkKGNsb3VkU3RhdHVzKHN0YXR1cywgJ3RlbXBTdGF0dXMnKSk7XG59XG5mdW5jdGlvbiBzaG93VGVtcE1heE1pbih1bml0eSwgdE1heCwgdE1pbiwgY291bnQpIHtcbiAgICB0ZW1wTWF4W2NvdW50XS5pbm5lckhUTUwgPSBjb252ZXJ0ZXJXZWF0aGVyKHRNYXgudG9GaXhlZCgpLCB1bml0eSk7XG4gICAgdGVtcE1pbltjb3VudF0uaW5uZXJIVE1MID0gY29udmVydGVyV2VhdGhlcih0TWluLnRvRml4ZWQoKSAtIDEsIHVuaXR5KTtcbn1cbmV4cG9ydCB7IHdlZWtUaW1lbGluZSwgd2VhdGhlckRhaWx5LCBzaG93VGVtcE1heE1pbiB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0IHNlYXJjaCBmcm9tICcuL21vZHVsZXMvc2VhcmNoJztcbmltcG9ydCBkaXNwbGF5Rm9ybSBmcm9tICcuL21vZHVsZXMvaGlkZGVuRWxlbWVudCc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7d2VhdGhlclVuaXR5fSBmcm9tICcuL21vZHVsZXMvd2VhdGhlckluaXQnO1xuXG5jb25zdCBncHNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24uYnRuLWdwcycpO1xudmFyIGtleSA9ICdhNGFkNjQ0MTA1OTVhMjAzNmQwMTMzMzkxNDJkNDY4NCc7XG52YXIgY2l0eSA9ICdMdWFuZGEnO1xuXG53ZWF0aGVyVW5pdHkoY2l0eSk7XG5kaXNwbGF5Rm9ybSgpO1xuc2VhcmNoKCk7XG4vKiotLS0tLS0tLS0tLS0tLUdQUyBGdW5jdGlvbi0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5ncHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oc3VjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xufSlcbiBjb25zdCAgc3VjZXNzQ2FsbGJhY2sgPSBhc3luYyAocG9zaXRpb24pID0+e1xuICAgIGNvbnN0IGRhaWx5ID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xhdD0ke3Bvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZS50b0ZpeGVkKDQpfSZsb249JHtwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlLnRvRml4ZWQoMyl9JmV4Y2x1ZGU9d2Vla2x5JmFwcGlkPSR7a2V5fWAsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgIGNvbnN0IGRhdGFEYXkgPSBhd2FpdCBkYWlseS5qc29uKCk7XG4gICAgY29uc3QgdGltZVpvbmUgPSAoZGF0YURheS50aW1lem9uZSkuc3BsaXQoJy8nKTtcbiAgICB3ZWF0aGVyVW5pdHkodGltZVpvbmVbMV0pO1xufVxuY29uc3QgZXJyb3JDYWxsYmFjayA9IChlcnJvcik9PntcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9