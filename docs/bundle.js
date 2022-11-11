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
___CSS_LOADER_EXPORT___.push([module.id, "body{\n    margin: 0;\n    padding: 0;\n    font-family: Arial, Helvetica, sans-serif; \n    color: white;  \n    font-weight: 100;\n}\n*{\n    margin: 0;\n    letter-spacing: 0px;\n}\nbody, html{    \n    margin: 0;\n    letter-spacing: 0px;\n}\nbody{\n    height: 100%;\n}\n/*General Settings*/\np{\n    font-size: 16px;\n}\nh1{\n    font-size: 60px;\n    font-weight: 100;\n}\nh2{\n    font-size: 50px;\n    font-weight: 100;\n}\nh3{\n    font-size: 40px;\n    font-weight: 100;\n}\nh4{\n    font-size: 30px;\n    font-weight: 100;\n}\nh5{\n    font-size: 20px;\n    font-weight: 100;\n}\nh6{\n    font-size: 15px;\n    font-weight: 400;\n}\n.btn{\n    padding: 10px;\n    background: rgb(74, 73, 73);\n    color: white;\n    border: none;\n    font-size: 16px;\n}\n.btn-search{\n    width: 150px;\n    height: 50px;\n}\n.btn-gps{\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: contain;\n    background-repeat: no-repeat;\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n}\n.group-button{\n    padding: 0px 20px 0px 20px;\n    display: flex;\n    justify-content: center;\n    justify-content: space-between;\n}\n.main{\n    height: 100vh;\n    width: 100vw;    \n    margin: 0px;  \n    padding: 0px; \n    /*New way to Show the informactions*/\n    display: flex;\n    background-color: #100E1D;\n}\n/* CSS about Side bar*/\n.sideBar{\n    padding: 15px;\n    width: 27%;\n    background-color: #1E213A;\n    position: relative;  \n}\n.search{   \n    height: 30px;\n    border: none;\n    background: none;\n    color: white;\n    font-size: 15px;\n}\n.search:hover{\n    font-size: 17px;\n}\n.btn-close{\n    width: 50px;\n    height: 50px;\n    border: none;\n    position: absolute;\n    right: 0px;\n    top: 0px;\n    background-color: rgba(0, 0, 0, 0);\n    background-size: contain;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n/*Form about Search*/\n.form{\n    margin: 80px 0px 40px 0px;\n    padding: 5px;\n    display: flex;\n    justify-content: space-evenly;\n    justify-content: center;\n    align-items: center;\n}\n.cityName{\n    width: 250px;\n    height: 35px;\n    border: solid white 1px;\n    padding: 2px;\n    font-size: 16px;\n    color: white;\n    background: none;\n    margin-right: 5px;\n}\n.buttonSearch{\n    padding: 10px;\n    background-color: rgb(25, 0, 123);\n    border: none;\n    width: 100px;\n    height: 45px;\n    font-size: 16px;\n}\n.statusCity{\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap-reverse;\n    justify-content: baseline;\n    align-items: center;\n    justify-content: center;\n}\n.status{\n    padding-top: 50px;\n    text-align: center;\n}\n.tempCity{\n    padding: 10px;\n    font-size: 70px;\n    margin: 63px 0px 63px 0px;\n}\n.last{\n    border-right: none;\n}\n.containerSky{\n    display: flex;\n}\n.containerInfo{\n    display: flex;\n}\n.weekly{\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(7, 14%);\n}\n.week{\n    text-align: center;\n}\n\n.image{\n    padding: 3px;\n    width: 40px;\n    height: 40px;\n}\n.image_10{\n    width: 250px;\n    height: 250px;\n    margin: 0px 0px 10px 0px;\n}\n.rainPercent{\n    margin-left: 5px;\n}\n.btn-info{\n    margin-top: 3px;\n    width: 100px;\n    height: 40px;\n    border: none;\n\n}\n.btn-less{\n    margin: 5px;\n    width: 100px;\n    height: 30px;\n    display: none;\n}\n.location{\n    margin-top: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 7px;\n}\n.location img{\n    height: 30px;\n}\n.date, .sky{\n    margin: 50px 0px 60px 0px;\n}\n.visible{\n    display: block;\n}\n.invisible{\n    display: none;\n}\n/*----------Body Css----------*/\n.body-project{\n    width: 70%;\n    background-color: #100E1D;\n    position: relative;\n}\n.btn-group-wheater{\n    position: absolute;\n    right: 20px;\n    margin: 50px;\n}\n.btn-unity{\n    border-radius: 50%;\n    margin: 4px;\n    height: 50px;\n    width: 50px;\n    font-size: 18px;\n}\n.btn-unity:hover{\n    background-color: rgb(12, 12, 12);\n    border: 1px solid wheat;\n    color: white;\n}\n.btn-active{\n    background-color: white;\n    border: 1px solid wheat;\n    color: #252525;\n}\n/*----------Week Weather---------*/\n.temp-day{\n    display: flex;\n    flex-wrap: wrap;\n    margin: 150px 0px 40px 0px;\n    justify-content: space-around;\n}\n.day{\n    width: 175px;\n    height: 230px;\n    margin: 5px;\n    padding: 15px;\n    border-radius: 3px;\n    flex-direction: column;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: #1E213A;\n}\n.temps{\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    padding: 7px;\n}\n.day h4{\n    font-size: 22px;\n}\n.tempStatus{\n    width: 125px;\n    height: 125px;\n    padding: 20px 0px 15px 0px;\n}\n/*----------------hight-lights CSS--------*/\n.hight-lights{\n    width: 100%;\n    display: flex;\n    text-align: left;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n.high{\n    margin-left: 250px;\n}\n.more-info{\n    display: grid;\n    padding: 8px;\n    row-gap: 25px;\n    column-gap: 25px;\n    grid-template-columns: repeat(2, 400px);\n    grid-template-rows: 220px 125px;\n}\n.more-info h5{\n    font-size: 24px;\n}\n.wind, .humidity, .visibility, .air{\n    padding: 10px;\n    background-color: #1E213A;\n    text-align: center;\n}\n.visibility, .air{\n    text-align: center;\n}\n.humidity{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.humidity h5, .humidity h2{\n    margin: 15px;\n}\n.progressive{\n    margin: 10px;\n    width: 250px;\n    height: 10px;\n    border-radius: 5px;\n    background-color: rgb(224, 219, 219);\n    position: relative;\n}\n.progress{\n    border-radius: 5px;\n    width: 85%;\n    height: 10px;\n    position: absolute;\n    left: 0px;\n    background-color: #fea400;\n}\n.prog{\n    display: flex;\n    flex-direction: column;\n    position: relative;\n}\n.percDisc{\n    display: flex;\n    justify-content: space-between;\n} \n.hundred{\n    position: absolute;\n    right: 0px;\n    bottom: -10px;\n}\n.navegation{\n    border-radius: 50%;\n    background-color: rgb(93, 90, 90);\n    height: 45px;\n    width: 45px;\n}\n.nav{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.nav h5{\n    margin: 7px;\n}\nfooter{\n    margin-top: 15px;\n    text-align: center;\n}\nfooter a{\n    color: white;\n    font-weight: 400;\n}\n@media only screen and (max-width: 800px){\n    .more-info{ \n        grid-template-columns: 300px;\n        grid-template-rows: 220px 220px 125px 125px;\n    }\n}\n@media only screen and (max-width: 1400px){\n    h4{\n        font-size: 16px;\n    }\n    .main{\n        flex-direction: column;\n    }\n    .sideBar{\n        width: 100%;\n        height: 600px;\n    }\n    .body-project{\n        width: 100%;\n        margin: 0;\n        padding: 15px;\n    }\n    .more-info{ \n        grid-template-columns: 320px;\n        grid-template-rows: 220px 220px 125px 125px;\n    }\n    .high{\n        margin-left: 0px;\n        text-align: center;\n    }\n    .tempStatus{\n        width: 100px;\n        height: 100px;\n    }\n    .day{\n        width: 125px;\n    }\n    .image_10{\n        width: 150px;\n        height: 150px;\n        margin: 0px 0px 5px 0px;\n    }\n    .date, .sky{\n        margin: 10px 0px 10px 0px;\n    }\n    .tempCity{\n        padding: 2px;\n        font-size: 70px;\n        margin: 10px 0px 0px 0px;\n    }\n    .status{\n        padding-top: 5px;\n    }\n}\n@media only screen and (max-width: 2000px){\n    h4{\n        font-size: 16px;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,yCAAyC;IACzC,YAAY;IACZ,gBAAgB;AACpB;AACA;IACI,SAAS;IACT,mBAAmB;AACvB;AACA;IACI,SAAS;IACT,mBAAmB;AACvB;AACA;IACI,YAAY;AAChB;AACA,mBAAmB;AACnB;IACI,eAAe;AACnB;AACA;IACI,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,2BAA2B;IAC3B,YAAY;IACZ,YAAY;IACZ,eAAe;AACnB;AACA;IACI,YAAY;IACZ,YAAY;AAChB;AACA;IACI,yDAAqC;IACrC,wBAAwB;IACxB,4BAA4B;IAC5B,WAAW;IACX,YAAY;IACZ,kBAAkB;AACtB;AACA;IACI,0BAA0B;IAC1B,aAAa;IACb,uBAAuB;IACvB,8BAA8B;AAClC;AACA;IACI,aAAa;IACb,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,oCAAoC;IACpC,aAAa;IACb,yBAAyB;AAC7B;AACA,sBAAsB;AACtB;IACI,aAAa;IACb,UAAU;IACV,yBAAyB;IACzB,kBAAkB;AACtB;AACA;IACI,YAAY;IACZ,YAAY;IACZ,gBAAgB;IAChB,YAAY;IACZ,eAAe;AACnB;AACA;IACI,eAAe;AACnB;AACA;IACI,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,UAAU;IACV,QAAQ;IACR,kCAAkC;IAClC,wBAAwB;IACxB,yDAAuC;AAC3C;AACA,oBAAoB;AACpB;IACI,yBAAyB;IACzB,YAAY;IACZ,aAAa;IACb,6BAA6B;IAC7B,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,YAAY;IACZ,uBAAuB;IACvB,YAAY;IACZ,eAAe;IACf,YAAY;IACZ,gBAAgB;IAChB,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,iCAAiC;IACjC,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,eAAe;AACnB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,yBAAyB;IACzB,mBAAmB;IACnB,uBAAuB;AAC3B;AACA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,eAAe;IACf,yBAAyB;AAC7B;AACA;IACI,kBAAkB;AACtB;AACA;IACI,aAAa;AACjB;AACA;IACI,aAAa;AACjB;AACA;IACI,WAAW;IACX,aAAa;IACb,qCAAqC;AACzC;AACA;IACI,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,YAAY;AAChB;AACA;IACI,YAAY;IACZ,aAAa;IACb,wBAAwB;AAC5B;AACA;IACI,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,YAAY;IACZ,YAAY;IACZ,YAAY;;AAEhB;AACA;IACI,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,aAAa;AACjB;AACA;IACI,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,cAAc;AAClB;AACA;IACI,aAAa;AACjB;AACA,+BAA+B;AAC/B;IACI,UAAU;IACV,yBAAyB;IACzB,kBAAkB;AACtB;AACA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;AAChB;AACA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,WAAW;IACX,eAAe;AACnB;AACA;IACI,iCAAiC;IACjC,uBAAuB;IACvB,YAAY;AAChB;AACA;IACI,uBAAuB;IACvB,uBAAuB;IACvB,cAAc;AAClB;AACA,kCAAkC;AAClC;IACI,aAAa;IACb,eAAe;IACf,0BAA0B;IAC1B,6BAA6B;AACjC;AACA;IACI,YAAY;IACZ,aAAa;IACb,WAAW;IACX,aAAa;IACb,kBAAkB;IAClB,sBAAsB;IACtB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,yBAAyB;AAC7B;AACA;IACI,WAAW;IACX,aAAa;IACb,6BAA6B;IAC7B,YAAY;AAChB;AACA;IACI,eAAe;AACnB;AACA;IACI,YAAY;IACZ,aAAa;IACb,0BAA0B;AAC9B;AACA,2CAA2C;AAC3C;IACI,WAAW;IACX,aAAa;IACb,gBAAgB;IAChB,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;AAC3B;AACA;IACI,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,uCAAuC;IACvC,+BAA+B;AACnC;AACA;IACI,eAAe;AACnB;AACA;IACI,aAAa;IACb,yBAAyB;IACzB,kBAAkB;AACtB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,oCAAoC;IACpC,kBAAkB;AACtB;AACA;IACI,kBAAkB;IAClB,UAAU;IACV,YAAY;IACZ,kBAAkB;IAClB,SAAS;IACT,yBAAyB;AAC7B;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,8BAA8B;AAClC;AACA;IACI,kBAAkB;IAClB,UAAU;IACV,aAAa;AACjB;AACA;IACI,kBAAkB;IAClB,iCAAiC;IACjC,YAAY;IACZ,WAAW;AACf;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,WAAW;AACf;AACA;IACI,gBAAgB;IAChB,kBAAkB;AACtB;AACA;IACI,YAAY;IACZ,gBAAgB;AACpB;AACA;IACI;QACI,4BAA4B;QAC5B,2CAA2C;IAC/C;AACJ;AACA;IACI;QACI,eAAe;IACnB;IACA;QACI,sBAAsB;IAC1B;IACA;QACI,WAAW;QACX,aAAa;IACjB;IACA;QACI,WAAW;QACX,SAAS;QACT,aAAa;IACjB;IACA;QACI,4BAA4B;QAC5B,2CAA2C;IAC/C;IACA;QACI,gBAAgB;QAChB,kBAAkB;IACtB;IACA;QACI,YAAY;QACZ,aAAa;IACjB;IACA;QACI,YAAY;IAChB;IACA;QACI,YAAY;QACZ,aAAa;QACb,uBAAuB;IAC3B;IACA;QACI,yBAAyB;IAC7B;IACA;QACI,YAAY;QACZ,eAAe;QACf,wBAAwB;IAC5B;IACA;QACI,gBAAgB;IACpB;AACJ;AACA;IACI;QACI,eAAe;IACnB;AACJ","sourcesContent":["body{\n    margin: 0;\n    padding: 0;\n    font-family: Arial, Helvetica, sans-serif; \n    color: white;  \n    font-weight: 100;\n}\n*{\n    margin: 0;\n    letter-spacing: 0px;\n}\nbody, html{    \n    margin: 0;\n    letter-spacing: 0px;\n}\nbody{\n    height: 100%;\n}\n/*General Settings*/\np{\n    font-size: 16px;\n}\nh1{\n    font-size: 60px;\n    font-weight: 100;\n}\nh2{\n    font-size: 50px;\n    font-weight: 100;\n}\nh3{\n    font-size: 40px;\n    font-weight: 100;\n}\nh4{\n    font-size: 30px;\n    font-weight: 100;\n}\nh5{\n    font-size: 20px;\n    font-weight: 100;\n}\nh6{\n    font-size: 15px;\n    font-weight: 400;\n}\n.btn{\n    padding: 10px;\n    background: rgb(74, 73, 73);\n    color: white;\n    border: none;\n    font-size: 16px;\n}\n.btn-search{\n    width: 150px;\n    height: 50px;\n}\n.btn-gps{\n    background-image: url(./icon/gps.png);\n    background-size: contain;\n    background-repeat: no-repeat;\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n}\n.group-button{\n    padding: 0px 20px 0px 20px;\n    display: flex;\n    justify-content: center;\n    justify-content: space-between;\n}\n.main{\n    height: 100vh;\n    width: 100vw;    \n    margin: 0px;  \n    padding: 0px; \n    /*New way to Show the informactions*/\n    display: flex;\n    background-color: #100E1D;\n}\n/* CSS about Side bar*/\n.sideBar{\n    padding: 15px;\n    width: 27%;\n    background-color: #1E213A;\n    position: relative;  \n}\n.search{   \n    height: 30px;\n    border: none;\n    background: none;\n    color: white;\n    font-size: 15px;\n}\n.search:hover{\n    font-size: 17px;\n}\n.btn-close{\n    width: 50px;\n    height: 50px;\n    border: none;\n    position: absolute;\n    right: 0px;\n    top: 0px;\n    background-color: rgba(0, 0, 0, 0);\n    background-size: contain;\n    background-image: url(./icon/close.png);\n}\n/*Form about Search*/\n.form{\n    margin: 80px 0px 40px 0px;\n    padding: 5px;\n    display: flex;\n    justify-content: space-evenly;\n    justify-content: center;\n    align-items: center;\n}\n.cityName{\n    width: 250px;\n    height: 35px;\n    border: solid white 1px;\n    padding: 2px;\n    font-size: 16px;\n    color: white;\n    background: none;\n    margin-right: 5px;\n}\n.buttonSearch{\n    padding: 10px;\n    background-color: rgb(25, 0, 123);\n    border: none;\n    width: 100px;\n    height: 45px;\n    font-size: 16px;\n}\n.statusCity{\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap-reverse;\n    justify-content: baseline;\n    align-items: center;\n    justify-content: center;\n}\n.status{\n    padding-top: 50px;\n    text-align: center;\n}\n.tempCity{\n    padding: 10px;\n    font-size: 70px;\n    margin: 63px 0px 63px 0px;\n}\n.last{\n    border-right: none;\n}\n.containerSky{\n    display: flex;\n}\n.containerInfo{\n    display: flex;\n}\n.weekly{\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(7, 14%);\n}\n.week{\n    text-align: center;\n}\n\n.image{\n    padding: 3px;\n    width: 40px;\n    height: 40px;\n}\n.image_10{\n    width: 250px;\n    height: 250px;\n    margin: 0px 0px 10px 0px;\n}\n.rainPercent{\n    margin-left: 5px;\n}\n.btn-info{\n    margin-top: 3px;\n    width: 100px;\n    height: 40px;\n    border: none;\n\n}\n.btn-less{\n    margin: 5px;\n    width: 100px;\n    height: 30px;\n    display: none;\n}\n.location{\n    margin-top: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 7px;\n}\n.location img{\n    height: 30px;\n}\n.date, .sky{\n    margin: 50px 0px 60px 0px;\n}\n.visible{\n    display: block;\n}\n.invisible{\n    display: none;\n}\n/*----------Body Css----------*/\n.body-project{\n    width: 70%;\n    background-color: #100E1D;\n    position: relative;\n}\n.btn-group-wheater{\n    position: absolute;\n    right: 20px;\n    margin: 50px;\n}\n.btn-unity{\n    border-radius: 50%;\n    margin: 4px;\n    height: 50px;\n    width: 50px;\n    font-size: 18px;\n}\n.btn-unity:hover{\n    background-color: rgb(12, 12, 12);\n    border: 1px solid wheat;\n    color: white;\n}\n.btn-active{\n    background-color: white;\n    border: 1px solid wheat;\n    color: #252525;\n}\n/*----------Week Weather---------*/\n.temp-day{\n    display: flex;\n    flex-wrap: wrap;\n    margin: 150px 0px 40px 0px;\n    justify-content: space-around;\n}\n.day{\n    width: 175px;\n    height: 230px;\n    margin: 5px;\n    padding: 15px;\n    border-radius: 3px;\n    flex-direction: column;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: #1E213A;\n}\n.temps{\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    padding: 7px;\n}\n.day h4{\n    font-size: 22px;\n}\n.tempStatus{\n    width: 125px;\n    height: 125px;\n    padding: 20px 0px 15px 0px;\n}\n/*----------------hight-lights CSS--------*/\n.hight-lights{\n    width: 100%;\n    display: flex;\n    text-align: left;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n.high{\n    margin-left: 250px;\n}\n.more-info{\n    display: grid;\n    padding: 8px;\n    row-gap: 25px;\n    column-gap: 25px;\n    grid-template-columns: repeat(2, 400px);\n    grid-template-rows: 220px 125px;\n}\n.more-info h5{\n    font-size: 24px;\n}\n.wind, .humidity, .visibility, .air{\n    padding: 10px;\n    background-color: #1E213A;\n    text-align: center;\n}\n.visibility, .air{\n    text-align: center;\n}\n.humidity{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.humidity h5, .humidity h2{\n    margin: 15px;\n}\n.progressive{\n    margin: 10px;\n    width: 250px;\n    height: 10px;\n    border-radius: 5px;\n    background-color: rgb(224, 219, 219);\n    position: relative;\n}\n.progress{\n    border-radius: 5px;\n    width: 85%;\n    height: 10px;\n    position: absolute;\n    left: 0px;\n    background-color: #fea400;\n}\n.prog{\n    display: flex;\n    flex-direction: column;\n    position: relative;\n}\n.percDisc{\n    display: flex;\n    justify-content: space-between;\n} \n.hundred{\n    position: absolute;\n    right: 0px;\n    bottom: -10px;\n}\n.navegation{\n    border-radius: 50%;\n    background-color: rgb(93, 90, 90);\n    height: 45px;\n    width: 45px;\n}\n.nav{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.nav h5{\n    margin: 7px;\n}\nfooter{\n    margin-top: 15px;\n    text-align: center;\n}\nfooter a{\n    color: white;\n    font-weight: 400;\n}\n@media only screen and (max-width: 800px){\n    .more-info{ \n        grid-template-columns: 300px;\n        grid-template-rows: 220px 220px 125px 125px;\n    }\n}\n@media only screen and (max-width: 1400px){\n    h4{\n        font-size: 16px;\n    }\n    .main{\n        flex-direction: column;\n    }\n    .sideBar{\n        width: 100%;\n        height: 600px;\n    }\n    .body-project{\n        width: 100%;\n        margin: 0;\n        padding: 15px;\n    }\n    .more-info{ \n        grid-template-columns: 320px;\n        grid-template-rows: 220px 220px 125px 125px;\n    }\n    .high{\n        margin-left: 0px;\n        text-align: center;\n    }\n    .tempStatus{\n        width: 100px;\n        height: 100px;\n    }\n    .day{\n        width: 125px;\n    }\n    .image_10{\n        width: 150px;\n        height: 150px;\n        margin: 0px 0px 5px 0px;\n    }\n    .date, .sky{\n        margin: 10px 0px 10px 0px;\n    }\n    .tempCity{\n        padding: 2px;\n        font-size: 70px;\n        margin: 10px 0px 0px 0px;\n    }\n    .status{\n        padding-top: 5px;\n    }\n}\n@media only screen and (max-width: 2000px){\n    h4{\n        font-size: 16px;\n    }\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxV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QUFDQSxJQUFJLGtFQUFZO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3doZWF0aGVyLUFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2hlYXRoZXItQXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2hlYXRoZXItQXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3doZWF0aGVyLUFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2hlYXRoZXItQXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3doZWF0aGVyLUFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvLi9zcmMvaGVhZC5qcyIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvLi9zcmMvbW9kdWxlcy9haXIuanMiLCJ3ZWJwYWNrOi8vd2hlYXRoZXItQXBwLy4vc3JjL21vZHVsZXMvY2xvdWRTdGF0dXMuanMiLCJ3ZWJwYWNrOi8vd2hlYXRoZXItQXBwLy4vc3JjL21vZHVsZXMvY29udmVydGVyV2VhdGhlci5qcyIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvLi9zcmMvbW9kdWxlcy9kYXlPZldlZWsuanMiLCJ3ZWJwYWNrOi8vd2hlYXRoZXItQXBwLy4vc3JjL21vZHVsZXMvaGlkZGVuRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvLi9zcmMvbW9kdWxlcy9odW1pZGl0eS5qcyIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvLi9zcmMvbW9kdWxlcy9tb3V0aE9mWWVhci5qcyIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvLi9zcmMvbW9kdWxlcy9zZWFyY2guanMiLCJ3ZWJwYWNrOi8vd2hlYXRoZXItQXBwLy4vc3JjL21vZHVsZXMvdmlzaWJpbGl0eS5qcyIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvLi9zcmMvbW9kdWxlcy93ZWF0aGVySW5pdC5qcyIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvLi9zcmMvbW9kdWxlcy93aW5kLmpzIiwid2VicGFjazovL3doZWF0aGVyLUFwcC8uL3NyYy9wcmludC5qcyIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvLi9zcmMvd2Vla2x5LmpzIiwid2VicGFjazovL3doZWF0aGVyLUFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2hlYXRoZXItQXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2hlYXRoZXItQXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3doZWF0aGVyLUFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pY29uL2dwcy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ljb24vY2xvc2UucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHl7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7IFxcbiAgICBjb2xvcjogd2hpdGU7ICBcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG59XFxuKntcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xcbn1cXG5ib2R5LCBodG1seyAgICBcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xcbn1cXG5ib2R5e1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbi8qR2VuZXJhbCBTZXR0aW5ncyovXFxucHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5oMXtcXG4gICAgZm9udC1zaXplOiA2MHB4O1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbn1cXG5oMntcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbn1cXG5oM3tcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbn1cXG5oNHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbn1cXG5oNXtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbn1cXG5oNntcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG4uYnRue1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNzQsIDczLCA3Myk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5idG4tc2VhcmNoe1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG59XFxuLmJ0bi1ncHN7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG4uZ3JvdXAtYnV0dG9ue1xcbiAgICBwYWRkaW5nOiAwcHggMjBweCAwcHggMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLm1haW57XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dzsgICAgXFxuICAgIG1hcmdpbjogMHB4OyAgXFxuICAgIHBhZGRpbmc6IDBweDsgXFxuICAgIC8qTmV3IHdheSB0byBTaG93IHRoZSBpbmZvcm1hY3Rpb25zKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEwMEUxRDtcXG59XFxuLyogQ1NTIGFib3V0IFNpZGUgYmFyKi9cXG4uc2lkZUJhcntcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgd2lkdGg6IDI3JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFFMjEzQTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyAgXFxufVxcbi5zZWFyY2h7ICAgXFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuLnNlYXJjaDpob3ZlcntcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcbn1cXG4uYnRuLWNsb3Nle1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDBweDtcXG4gICAgdG9wOiAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuLypGb3JtIGFib3V0IFNlYXJjaCovXFxuLmZvcm17XFxuICAgIG1hcmdpbjogODBweCAwcHggNDBweCAwcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uY2l0eU5hbWV7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICBib3JkZXI6IHNvbGlkIHdoaXRlIDFweDtcXG4gICAgcGFkZGluZzogMnB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcbi5idXR0b25TZWFyY2h7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNSwgMCwgMTIzKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogNDVweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4uc3RhdHVzQ2l0eXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC13cmFwOiB3cmFwLXJldmVyc2U7XFxuICAgIGp1c3RpZnktY29udGVudDogYmFzZWxpbmU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uc3RhdHVze1xcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4udGVtcENpdHl7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogNzBweDtcXG4gICAgbWFyZ2luOiA2M3B4IDBweCA2M3B4IDBweDtcXG59XFxuLmxhc3R7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG59XFxuLmNvbnRhaW5lclNreXtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuLmNvbnRhaW5lckluZm97XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbi53ZWVrbHl7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxNCUpO1xcbn1cXG4ud2Vla3tcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaW1hZ2V7XFxuICAgIHBhZGRpbmc6IDNweDtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG59XFxuLmltYWdlXzEwe1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICAgIG1hcmdpbjogMHB4IDBweCAxMHB4IDBweDtcXG59XFxuLnJhaW5QZXJjZW50e1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbn1cXG4uYnRuLWluZm97XFxuICAgIG1hcmdpbi10b3A6IDNweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG5cXG59XFxuLmJ0bi1sZXNze1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5sb2NhdGlvbntcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDdweDtcXG59XFxuLmxvY2F0aW9uIGltZ3tcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbn1cXG4uZGF0ZSwgLnNreXtcXG4gICAgbWFyZ2luOiA1MHB4IDBweCA2MHB4IDBweDtcXG59XFxuLnZpc2libGV7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uaW52aXNpYmxle1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4vKi0tLS0tLS0tLS1Cb2R5IENzcy0tLS0tLS0tLS0qL1xcbi5ib2R5LXByb2plY3R7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMDBFMUQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmJ0bi1ncm91cC13aGVhdGVye1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAyMHB4O1xcbiAgICBtYXJnaW46IDUwcHg7XFxufVxcbi5idG4tdW5pdHl7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgbWFyZ2luOiA0cHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuLmJ0bi11bml0eTpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyLCAxMiwgMTIpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGVhdDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4uYnRuLWFjdGl2ZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoZWF0O1xcbiAgICBjb2xvcjogIzI1MjUyNTtcXG59XFxuLyotLS0tLS0tLS0tV2VlayBXZWF0aGVyLS0tLS0tLS0tKi9cXG4udGVtcC1kYXl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgbWFyZ2luOiAxNTBweCAwcHggNDBweCAwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4uZGF5e1xcbiAgICB3aWR0aDogMTc1cHg7XFxuICAgIGhlaWdodDogMjMwcHg7XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUUyMTNBO1xcbn1cXG4udGVtcHN7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgcGFkZGluZzogN3B4O1xcbn1cXG4uZGF5IGg0e1xcbiAgICBmb250LXNpemU6IDIycHg7XFxufVxcbi50ZW1wU3RhdHVze1xcbiAgICB3aWR0aDogMTI1cHg7XFxuICAgIGhlaWdodDogMTI1cHg7XFxuICAgIHBhZGRpbmc6IDIwcHggMHB4IDE1cHggMHB4O1xcbn1cXG4vKi0tLS0tLS0tLS0tLS0tLS1oaWdodC1saWdodHMgQ1NTLS0tLS0tLS0qL1xcbi5oaWdodC1saWdodHN7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmhpZ2h7XFxuICAgIG1hcmdpbi1sZWZ0OiAyNTBweDtcXG59XFxuLm1vcmUtaW5mb3tcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICByb3ctZ2FwOiAyNXB4O1xcbiAgICBjb2x1bW4tZ2FwOiAyNXB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCA0MDBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjIwcHggMTI1cHg7XFxufVxcbi5tb3JlLWluZm8gaDV7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuLndpbmQsIC5odW1pZGl0eSwgLnZpc2liaWxpdHksIC5haXJ7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxRTIxM0E7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnZpc2liaWxpdHksIC5haXJ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmh1bWlkaXR5e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uaHVtaWRpdHkgaDUsIC5odW1pZGl0eSBoMntcXG4gICAgbWFyZ2luOiAxNXB4O1xcbn1cXG4ucHJvZ3Jlc3NpdmV7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNCwgMjE5LCAyMTkpO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5wcm9ncmVzc3tcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB3aWR0aDogODUlO1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVhNDAwO1xcbn1cXG4ucHJvZ3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ucGVyY0Rpc2N7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59IFxcbi5odW5kcmVke1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwcHg7XFxuICAgIGJvdHRvbTogLTEwcHg7XFxufVxcbi5uYXZlZ2F0aW9ue1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MywgOTAsIDkwKTtcXG4gICAgaGVpZ2h0OiA0NXB4O1xcbiAgICB3aWR0aDogNDVweDtcXG59XFxuLm5hdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5uYXYgaDV7XFxuICAgIG1hcmdpbjogN3B4O1xcbn1cXG5mb290ZXJ7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuZm9vdGVyIGF7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCl7XFxuICAgIC5tb3JlLWluZm97IFxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjIwcHggMjIwcHggMTI1cHggMTI1cHg7XFxuICAgIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpe1xcbiAgICBoNHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgfVxcbiAgICAubWFpbntcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG4gICAgLnNpZGVCYXJ7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogNjAwcHg7XFxuICAgIH1cXG4gICAgLmJvZHktcHJvamVjdHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgcGFkZGluZzogMTVweDtcXG4gICAgfVxcbiAgICAubW9yZS1pbmZveyBcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzIwcHg7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIyMHB4IDIyMHB4IDEyNXB4IDEyNXB4O1xcbiAgICB9XFxuICAgIC5oaWdoe1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcbiAgICAudGVtcFN0YXR1c3tcXG4gICAgICAgIHdpZHRoOiAxMDBweDtcXG4gICAgICAgIGhlaWdodDogMTAwcHg7XFxuICAgIH1cXG4gICAgLmRheXtcXG4gICAgICAgIHdpZHRoOiAxMjVweDtcXG4gICAgfVxcbiAgICAuaW1hZ2VfMTB7XFxuICAgICAgICB3aWR0aDogMTUwcHg7XFxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICAgICAgbWFyZ2luOiAwcHggMHB4IDVweCAwcHg7XFxuICAgIH1cXG4gICAgLmRhdGUsIC5za3l7XFxuICAgICAgICBtYXJnaW46IDEwcHggMHB4IDEwcHggMHB4O1xcbiAgICB9XFxuICAgIC50ZW1wQ2l0eXtcXG4gICAgICAgIHBhZGRpbmc6IDJweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogNzBweDtcXG4gICAgICAgIG1hcmdpbjogMTBweCAwcHggMHB4IDBweDtcXG4gICAgfVxcbiAgICAuc3RhdHVze1xcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcXG4gICAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDIwMDBweCl7XFxuICAgIGg0e1xcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHlDQUF5QztJQUN6QyxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0EsbUJBQW1CO0FBQ25CO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osWUFBWTtJ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aUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJO1FBQ0ksNEJBQTRCO1FBQzVCLDJDQUEyQztJQUMvQztBQUNKO0FBQ0E7SUFDSTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksV0FBVztRQUNYLGFBQWE7SUFDakI7SUFDQTtRQUNJLFdBQVc7UUFDWCxTQUFTO1FBQ1QsYUFBYTtJQUNqQjtJQUNBO1FBQ0ksNEJBQTRCO1FBQzVCLDJDQUEyQztJQUMvQztJQUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksWUFBWTtRQUNaLGFBQWE7SUFDakI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2IsdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSx5QkFBeUI7SUFDN0I7SUFDQTtRQUNJLFlBQVk7UUFDWixlQUFlO1FBQ2Ysd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSjtBQUNBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keXtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjsgXFxuICAgIGNvbG9yOiB3aGl0ZTsgIFxcbiAgICBmb250LXdlaWdodDogMTAwO1xcbn1cXG4qe1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XFxufVxcbmJvZHksIGh0bWx7ICAgIFxcbiAgICBtYXJnaW46IDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XFxufVxcbmJvZHl7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuLypHZW5lcmFsIFNldHRpbmdzKi9cXG5we1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcbmgxe1xcbiAgICBmb250LXNpemU6IDYwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcbmgye1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcbmgze1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcbmg0e1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcbmg1e1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcbmg2e1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbi5idG57XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYig3NCwgNzMsIDczKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLmJ0bi1zZWFyY2h7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbn1cXG4uYnRuLWdwc3tcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaWNvbi9ncHMucG5nKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi5ncm91cC1idXR0b257XFxuICAgIHBhZGRpbmc6IDBweCAyMHB4IDBweCAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4ubWFpbntcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3OyAgICBcXG4gICAgbWFyZ2luOiAwcHg7ICBcXG4gICAgcGFkZGluZzogMHB4OyBcXG4gICAgLypOZXcgd2F5IHRvIFNob3cgdGhlIGluZm9ybWFjdGlvbnMqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAwRTFEO1xcbn1cXG4vKiBDU1MgYWJvdXQgU2lkZSBiYXIqL1xcbi5zaWRlQmFye1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICB3aWR0aDogMjclO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUUyMTNBO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7ICBcXG59XFxuLnNlYXJjaHsgICBcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG4uc2VhcmNoOmhvdmVye1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxufVxcbi5idG4tY2xvc2V7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMHB4O1xcbiAgICB0b3A6IDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pY29uL2Nsb3NlLnBuZyk7XFxufVxcbi8qRm9ybSBhYm91dCBTZWFyY2gqL1xcbi5mb3Jte1xcbiAgICBtYXJnaW46IDgwcHggMHB4IDQwcHggMHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmNpdHlOYW1le1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAxcHg7XFxuICAgIHBhZGRpbmc6IDJweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG4uYnV0dG9uU2VhcmNoe1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUsIDAsIDEyMyk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDQ1cHg7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLnN0YXR1c0NpdHl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGJhc2VsaW5lO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnN0YXR1c3tcXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnRlbXBDaXR5e1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDcwcHg7XFxuICAgIG1hcmdpbjogNjNweCAwcHggNjNweCAwcHg7XFxufVxcbi5sYXN0e1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxufVxcbi5jb250YWluZXJTa3l7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5jb250YWluZXJJbmZve1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4ud2Vla2x5e1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMTQlKTtcXG59XFxuLndlZWt7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmltYWdle1xcbiAgICBwYWRkaW5nOiAzcHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxufVxcbi5pbWFnZV8xMHtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICBtYXJnaW46IDBweCAwcHggMTBweCAwcHg7XFxufVxcbi5yYWluUGVyY2VudHtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG59XFxuLmJ0bi1pbmZve1xcbiAgICBtYXJnaW4tdG9wOiAzcHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuXFxufVxcbi5idG4tbGVzc3tcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4ubG9jYXRpb257XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA3cHg7XFxufVxcbi5sb2NhdGlvbiBpbWd7XFxuICAgIGhlaWdodDogMzBweDtcXG59XFxuLmRhdGUsIC5za3l7XFxuICAgIG1hcmdpbjogNTBweCAwcHggNjBweCAwcHg7XFxufVxcbi52aXNpYmxle1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuLmludmlzaWJsZXtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuLyotLS0tLS0tLS0tQm9keSBDc3MtLS0tLS0tLS0tKi9cXG4uYm9keS1wcm9qZWN0e1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAwRTFEO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5idG4tZ3JvdXAtd2hlYXRlcntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMjBweDtcXG4gICAgbWFyZ2luOiA1MHB4O1xcbn1cXG4uYnRuLXVuaXR5e1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIG1hcmdpbjogNHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcbi5idG4tdW5pdHk6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMiwgMTIsIDEyKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hlYXQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmJ0bi1hY3RpdmV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGVhdDtcXG4gICAgY29sb3I6ICMyNTI1MjU7XFxufVxcbi8qLS0tLS0tLS0tLVdlZWsgV2VhdGhlci0tLS0tLS0tLSovXFxuLnRlbXAtZGF5e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIG1hcmdpbjogMTUwcHggMHB4IDQwcHggMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuLmRheXtcXG4gICAgd2lkdGg6IDE3NXB4O1xcbiAgICBoZWlnaHQ6IDIzMHB4O1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFFMjEzQTtcXG59XFxuLnRlbXBze1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIHBhZGRpbmc6IDdweDtcXG59XFxuLmRheSBoNHtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbn1cXG4udGVtcFN0YXR1c3tcXG4gICAgd2lkdGg6IDEyNXB4O1xcbiAgICBoZWlnaHQ6IDEyNXB4O1xcbiAgICBwYWRkaW5nOiAyMHB4IDBweCAxNXB4IDBweDtcXG59XFxuLyotLS0tLS0tLS0tLS0tLS0taGlnaHQtbGlnaHRzIENTUy0tLS0tLS0tKi9cXG4uaGlnaHQtbGlnaHRze1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5oaWdoe1xcbiAgICBtYXJnaW4tbGVmdDogMjUwcHg7XFxufVxcbi5tb3JlLWluZm97XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgcm93LWdhcDogMjVweDtcXG4gICAgY29sdW1uLWdhcDogMjVweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgNDAwcHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIyMHB4IDEyNXB4O1xcbn1cXG4ubW9yZS1pbmZvIGg1e1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVxcbi53aW5kLCAuaHVtaWRpdHksIC52aXNpYmlsaXR5LCAuYWlye1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUUyMTNBO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi52aXNpYmlsaXR5LCAuYWlye1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5odW1pZGl0eXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmh1bWlkaXR5IGg1LCAuaHVtaWRpdHkgaDJ7XFxuICAgIG1hcmdpbjogMTVweDtcXG59XFxuLnByb2dyZXNzaXZle1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjQsIDIxOSwgMjE5KTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ucHJvZ3Jlc3N7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgd2lkdGg6IDg1JTtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlYTQwMDtcXG59XFxuLnByb2d7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnBlcmNEaXNje1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufSBcXG4uaHVuZHJlZHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMHB4O1xcbiAgICBib3R0b206IC0xMHB4O1xcbn1cXG4ubmF2ZWdhdGlvbntcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTMsIDkwLCA5MCk7XFxuICAgIGhlaWdodDogNDVweDtcXG4gICAgd2lkdGg6IDQ1cHg7XFxufVxcbi5uYXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubmF2IGg1e1xcbiAgICBtYXJnaW46IDdweDtcXG59XFxuZm9vdGVye1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbmZvb3RlciBhe1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpe1xcbiAgICAubW9yZS1pbmZveyBcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHg7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIyMHB4IDIyMHB4IDEyNXB4IDEyNXB4O1xcbiAgICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQwMHB4KXtcXG4gICAgaDR7XFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIH1cXG4gICAgLm1haW57XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuICAgIC5zaWRlQmFye1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDYwMHB4O1xcbiAgICB9XFxuICAgIC5ib2R5LXByb2plY3R7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIH1cXG4gICAgLm1vcmUtaW5mb3sgXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMyMHB4O1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMjBweCAyMjBweCAxMjVweCAxMjVweDtcXG4gICAgfVxcbiAgICAuaGlnaHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgLnRlbXBTdGF0dXN7XFxuICAgICAgICB3aWR0aDogMTAwcHg7XFxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICB9XFxuICAgIC5kYXl7XFxuICAgICAgICB3aWR0aDogMTI1cHg7XFxuICAgIH1cXG4gICAgLmltYWdlXzEwe1xcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgICAgIG1hcmdpbjogMHB4IDBweCA1cHggMHB4O1xcbiAgICB9XFxuICAgIC5kYXRlLCAuc2t5e1xcbiAgICAgICAgbWFyZ2luOiAxMHB4IDBweCAxMHB4IDBweDtcXG4gICAgfVxcbiAgICAudGVtcENpdHl7XFxuICAgICAgICBwYWRkaW5nOiAycHg7XFxuICAgICAgICBmb250LXNpemU6IDcwcHg7XFxuICAgICAgICBtYXJnaW46IDEwcHggMHB4IDBweCAwcHg7XFxuICAgIH1cXG4gICAgLnN0YXR1c3tcXG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XFxuICAgIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyMDAwcHgpe1xcbiAgICBoNHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICBjbG91ZFN0YXR1cyAgZnJvbSAnLi9wcmludCc7XG5pbXBvcnQgZGF5T2ZXZWVrIGZyb20gJy4vbW9kdWxlcy9kYXlPZldlZWsnO1xuaW1wb3J0IG1vdXRoT2ZZZWFyIGZyb20gJy4vbW9kdWxlcy9tb3V0aE9mWWVhcic7XG5pbXBvcnQgc291cmNlTG9jYXRpb24gZnJvbSAnLi9pY29uL2xvY2F0aW9uLnBuZyc7XG5cbmNvbnN0IHN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5zdGF0dXMnKTtcbmNvbnN0IGNpdHlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG5jb25zdCBkYXRlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xuY29uc3Qgc3RhdHVzQ2l0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgdGVtcENpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuY29uc3Qgc2t5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbmNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBpY29uTG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuaWNvbkxvY2F0aW9uLnNyYyA9IHNvdXJjZUxvY2F0aW9uO1xuLy92YXIgc3RhdHVzID0gJ2ZldyBjbG91ZHMnO1xuZnVuY3Rpb24gaGVhZENpdHkoY2l0eSwgc3RhdHVzLCB0ZW1wKSB7ICAgIFxuICAgIGNyZWF0ZUVsZW0oKTtcbiAgICBzdGF0dXNDaXR5LmFwcGVuZENoaWxkKGNsb3VkU3RhdHVzKHN0YXR1cywgJ2ltYWdlXzEwJykpO1xuICAgIHN0YXR1c0NpdHkuYXBwZW5kQ2hpbGQodGVtcENpdHkpOyBcbiAgICBjaXR5VGl0bGUuaW5uZXJIVE1MID0gY2l0eTtcbiAgICB0ZW1wQ2l0eS5pbm5lckhUTUwgPSBgJHt0ZW1wfWA7ICAgIFxuICAgIHNreS5pbm5lckhUTUwgPSBgJHtzdGF0dXN9YFxufVxuZnVuY3Rpb24gY3JlYXRlRWxlbSgpIHtcbiAgICBzdGF0dXNDaXR5LmlubmVySFRNTCA9ICcnO1xuXG4gICAgY2l0eVRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NpdHknKTtcbiAgICBkYXRlVGl0bGUuY2xhc3NMaXN0LmFkZCgnZGF0ZScpO1xuICAgIHN0YXR1c0NpdHkuY2xhc3NMaXN0LmFkZCgnc3RhdHVzQ2l0eScpO1xuICAgIHRlbXBDaXR5LmNsYXNzTGlzdC5hZGQoJ3RlbXBDaXR5Jyk7XG4gICAgc2t5LmNsYXNzTGlzdC5hZGQoJ3NreScpOyAgICBcbiAgICBsb2NhdGlvbi5jbGFzc0xpc3QuYWRkKCdsb2NhdGlvbicpO1xuICAgICAgICAgICBcbiAgICBzdGF0dXMuYXBwZW5kQ2hpbGQoc3RhdHVzQ2l0eSk7XG4gICAgc3RhdHVzLmFwcGVuZENoaWxkKHNreSk7XG4gICAgc3RhdHVzLmFwcGVuZENoaWxkKGRhdGVUaXRsZSk7XG4gICAgc3RhdHVzLmFwcGVuZENoaWxkKGxvY2F0aW9uKTtcblxuICAgIGxvY2F0aW9uLmFwcGVuZENoaWxkKGljb25Mb2NhdGlvbik7XG4gICAgbG9jYXRpb24uYXBwZW5kQ2hpbGQoY2l0eVRpdGxlKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tUaW1lKGkpIHtcbiAgICBpZiAoaSA8IDEwKSB7XG4gICAgICAgIGkgPSBcIjBcIiArIGk7XG4gICAgfVxuICAgIHJldHVybiBpO1xufVxuXG5mdW5jdGlvbiBzdGFydFRpbWUoKSB7XG4gICAgdmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICB2YXIgaCA9IHRvZGF5LmdldEhvdXJzKCk7XG4gICAgdmFyIG0gPSB0b2RheS5nZXRNaW51dGVzKCk7XG4gICAgLy8gYWRkIGEgemVybyBpbiBmcm9udCBvZiBudW1iZXJzPDEwXG4gICAgbSA9IGNoZWNrVGltZShtKTtcbiAgICBkYXRlVGl0bGUuaW5uZXJIVE1MID0gZGF5T2ZXZWVrKHRvZGF5LmdldERheSgpKSArICcsICcgKyB0b2RheS5nZXRVVENEYXRlKCkgKyAnICcrIG1vdXRoT2ZZZWFyKHRvZGF5LmdldE1vbnRoKCkpICsgJyAnICsgaCArIFwiOlwiICsgbTtcbiAgICB2YXIgdCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBzdGFydFRpbWUoKVxuICAgIH0sIDUwMCk7XG59XG5zdGFydFRpbWUoKTtcblxuZXhwb3J0IGRlZmF1bHQgaGVhZENpdHk7IiwiY29uc3QgYWlyVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMi5haXInKTtcblxuZnVuY3Rpb24gc2hvd0Fpcih2YWx1ZSl7XG4gICAgYWlyVmFsdWUuaW5uZXJIVE1MID0gYCR7dmFsdWV9IG1iYFxufVxuZXhwb3J0IGRlZmF1bHQgc2hvd0FpcjsiLCJpbXBvcnQgY2xvdWREYXkgZnJvbSAgXCIuLi9pY29uL2Nsb3VkeS1kYXkuc3ZnXCI7XG5pbXBvcnQgc3VuIGZyb20gIFwiLi4vaWNvbi9zdW4uc3ZnXCI7XG5pbXBvcnQgcmFpbnkgZnJvbSAgXCIuLi9pY29uL3JhaW55LnN2Z1wiO1xuaW1wb3J0IHNub3cgZnJvbSAgXCIuLi9pY29uL3Nub3cuc3ZnXCI7XG5pbXBvcnQgbW9vbiBmcm9tICBcIi4uL2ljb24vbW9vbi5zdmdcIjtcbmltcG9ydCBjbG91ZE5pZ2h0IGZyb20gICBcIi4uL2ljb24vY2xvdWR5LW5pZ2h0LnN2Z1wiO1xuaW1wb3J0IHVtYnJlbGxhSWNvbiBmcm9tIFwiLi4vaWNvbi91bWJyZWxsYS5wbmdcIjtcbmltcG9ydCB3aW5kSWNvbiBmcm9tIFwiLi4vaWNvbi93aW5kLnN2Z1wiO1xuaW1wb3J0IGh1bWlkaXR5aWNvbiBmcm9tIFwiLi4vaWNvbi9odW1pZGl0eS5zdmdcIjtcbmltcG9ydCBtaXN0IGZyb20gXCIuLi9pY29uL21pc3Quc3ZnXCI7XG5cbmZ1bmN0aW9uIGNsb3VkU3RhdHVzKHN0YXR1c1RlbXAsIGNsYXNzbGkpe1xuICAgIHZhciBob3VyID0gbmV3IERhdGUoKS5nZXRIb3VycygpO1xuICAgIGNvbnN0IGNsb3VkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY2xvdWQuY2xhc3NMaXN0LmFkZChjbGFzc2xpKTtcbiAgICBpZihob3VyID49IDUgJiYgaG91ciA8IDE4KXtcbiAgICAgICAgc3dpdGNoKHN0YXR1c1RlbXApe1xuICAgICAgICAgICAgY2FzZSAnQ2xlYXInOiBjbG91ZC5zcmMgPSBzdW47IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQ2xvdWRzJzogY2xvdWQuc3JjID0gY2xvdWREYXk7IGJyZWFrOyAgXG4gICAgICAgICAgICBjYXNlICdSYWluJzogY2xvdWQuc3JjID0gcmFpbnk7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnU25vdyc6IGNsb3VkLnNyYyA9IHNub3c7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnTWlzdCc6IGNsb3VkLnNyYyA9IG1pc3Q7IGJyZWFrO1xuICAgICAgICB9XG4gICAgfWVsc2V7XG4gICAgICAgIHN3aXRjaChzdGF0dXNUZW1wKXtcbiAgICAgICAgICAgIGNhc2UgJ0NsZWFyJzogY2xvdWQuc3JjID0gbW9vbjsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdDbG91ZHMnOiBjbG91ZC5zcmMgPSBjbG91ZE5pZ2h0OyBicmVhazsgXG4gICAgICAgICAgICBjYXNlICdSYWluJzogY2xvdWQuc3JjID0gcmFpbnkgOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1Nub3cnOiBjbG91ZC5zcmMgPSBzbm93OyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ01pc3QnOiBjbG91ZC5zcmMgPSBtaXN0OyBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY2xvdWQ7XG59XG5leHBvcnQgZGVmYXVsdCBjbG91ZFN0YXR1czsiLCJmdW5jdGlvbiBjb252ZXJ0ZXJXZWF0aGVyKHRlbXBlcmF0dXJlLCB1bml0eSl7XG4gICAgc3dpdGNoKHVuaXR5KXtcbiAgICAgICAgY2FzZSAnQ2Vsc2l1cycgOiByZXR1cm4gdGVtcGVyYXR1cmUtMjczICsgJyDCsEMnOyBicmVhaztcbiAgICAgICAgY2FzZSAnS2VsdmluJyA6IHJldHVybiB0ZW1wZXJhdHVyZSArICcgwrBLJzsgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0ZhaHJlbmhlaXQnIDogcmV0dXJuICgoKHRlbXBlcmF0dXJlLTI3MykqMS44KSArMzIpLnRvRml4ZWQoKSArICcgwrBGJzsgYnJlYWs7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY29udmVydGVyV2VhdGhlcjsiLCJmdW5jdGlvbiBkYXlPZldlZWsobnVtYmVyKXtcbiAgICB2YXIgbmFtZU9mRGF5ID0gJyc7XG4gICAgc3dpdGNoKG51bWJlcil7XG4gICAgICAgIGNhc2UgMDogbmFtZU9mRGF5ID0gJ1N1bic7IGJyZWFrO1xuICAgICAgICBjYXNlIDE6IG5hbWVPZkRheSA9ICdNb24nOyBicmVhaztcbiAgICAgICAgY2FzZSAyOiBuYW1lT2ZEYXkgPSAnVHVlcyc7IGJyZWFrO1xuICAgICAgICBjYXNlIDM6IG5hbWVPZkRheSA9ICdXZWQnOyBicmVhaztcbiAgICAgICAgY2FzZSA0OiBuYW1lT2ZEYXkgPSAnVGh1JzsgYnJlYWs7XG4gICAgICAgIGNhc2UgNTogbmFtZU9mRGF5ID0gJ0ZyaSc7IGJyZWFrO1xuICAgICAgICBjYXNlIDY6IG5hbWVPZkRheSA9ICdTYXQnOyBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIG5hbWVPZkRheTtcbn1cbmV4cG9ydCBkZWZhdWx0IGRheU9mV2VlazsiLCJjb25zdCBlbGVtZW50Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5mb3JtLWdyb3VwJyk7XG5jb25zdCBidXR0b25TZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24uYnRuLXNlYXJjaCcpO1xuY29uc3QgYnV0dG9uQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24uYnRuLWNsb3NlJyk7XG5jb25zdCBlbGVtZW50SW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5pbmZvJyk7XG5jb25zdCBlbGVtZW50U2V0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Rpdi5zZXQnKTtcbmNvbnN0IGVsZW1lbnRMaXN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2Lmxpc3QtYnV0dG9uJyk7XG5cbmZ1bmN0aW9uIGRpc3BsYXlGb3JtKCl7XG4gICAvKiBcbiAgIFNob3cgdGhlIEVsZW1lbnRcbiAgICAqL1xuICAgYnV0dG9uU2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICBlbGVtZW50Rm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKTtcbiAgICBlbGVtZW50SW5mby5jbGFzc0xpc3QuYWRkKCdpbnZpc2libGUnKTtcbiAgICBlbGVtZW50Rm9ybS5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICB9KTtcbiAgIC8qVGFraW5nIEFsbCBlbGVtZW50IHdpdGggdGhpcyBDbGFzcyBhbmQgc2V0IHRoZW0gZm9yIHJlY2lldmUgJ2ludmlzaWJsZScgYW5kICdzZXRhJyBjbGFzc2VzKi9cbiAgIGZvcihsZXQgaT0wOyBpPGVsZW1lbnRTZXRhLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgZWxlbWVudExpc3RCdXR0b25baV0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKCk9PntcbiAgICAgICAgZWxlbWVudFNldGFbaV0uY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJyk7XG4gICAgICAgIGVsZW1lbnRTZXRhW2ldLmNsYXNzTGlzdC5hZGQoJ3NldGEnKTtcbiAgICAgICB9KVxuICAgICAgIGVsZW1lbnRMaXN0QnV0dG9uW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCk9PntcbiAgICAgICAgZWxlbWVudFNldGFbaV0uY2xhc3NMaXN0LmFkZCgnaW52aXNpYmxlJyk7XG4gICAgICAgIGVsZW1lbnRTZXRhW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3NldGEnKTtcbiAgICAgICB9KVxuICAgfVxuICAgLyoqXG4gICAgKiBIaWRkZW4gdGhlIEVsZW1lbnRcbiAgICAqL1xuICAgYnV0dG9uQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgIGVsZW1lbnRGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICBlbGVtZW50Rm9ybS5jbGFzc0xpc3QuYWRkKCdpbnZpc2libGUnKTtcbiAgICBlbGVtZW50SW5mby5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKTtcbiAgICBlbGVtZW50SW5mby5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICB9KVxuXG59XG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5Rm9ybTsiLCJjb25zdCBwcm9ncmVzc0h1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LnByb2dyZXNzJyk7XG5jb25zdCB2YWxvckh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDIuaHVtaWRpdHlQJyk7XG5cbmZ1bmN0aW9uIGh1bWlkaXR5U2hvdyh2YWxvcil7XG4gICAgcHJvZ3Jlc3NIdW1pZGl0eS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYHdpZHRoOiAke3ZhbG9yfSVgKTtcbiAgICB2YWxvckh1bWlkaXR5LmlubmVySFRNTCA9IGAke3ZhbG9yfSVgO1xufVxuZXhwb3J0IGRlZmF1bHQgaHVtaWRpdHlTaG93OyIsImZ1bmN0aW9uIG1vdXRoT2ZZZWFyKG51bWJlcikge1xuICAgIHZhciBuYW1lT2ZNb3V0aCA9ICcgSmFuJztcbiAgICBzd2l0Y2gobnVtYmVyKXtcbiAgICAgICAgY2FzZSAwOiBuYW1lT2ZNb3V0aCA9ICdKYW4nOyBicmVhaztcbiAgICAgICAgY2FzZSAxOiBuYW1lT2ZNb3V0aCA9ICdGZWInOyBicmVhaztcbiAgICAgICAgY2FzZSAyOiBuYW1lT2ZNb3V0aCA9ICdNYXJjaCc7IGJyZWFrO1xuICAgICAgICBjYXNlIDM6IG5hbWVPZk1vdXRoID0gJ0FwcmlsJzsgYnJlYWs7XG4gICAgICAgIGNhc2UgNDogbmFtZU9mTW91dGggPSAnTWF5JzsgYnJlYWs7XG4gICAgICAgIGNhc2UgNTogbmFtZU9mTW91dGggPSAnSnVuZSc7IGJyZWFrO1xuICAgICAgICBjYXNlIDY6IG5hbWVPZk1vdXRoID0gJ0p1bHknOyBicmVhaztcbiAgICAgICAgY2FzZSA3OiBuYW1lT2ZNb3V0aCA9ICdBdWcnOyBicmVhaztcbiAgICAgICAgY2FzZSA4OiBuYW1lT2ZNb3V0aCA9ICdTZXB0JzsgYnJlYWs7XG4gICAgICAgIGNhc2UgOTogbmFtZU9mTW91dGggPSAnT2N0JzsgYnJlYWs7XG4gICAgICAgIGNhc2UgMTA6IG5hbWVPZk1vdXRoID0gJ05vdic7IGJyZWFrO1xuICAgICAgICBjYXNlIDExOiBuYW1lT2ZNb3V0aCA9ICdEZWMnOyBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIG5hbWVPZk1vdXRoO1xufVxuZXhwb3J0IGRlZmF1bHQgbW91dGhPZlllYXI7IiwiaW1wb3J0IHsgd2VhdGhlclVuaXR5IH0gZnJvbSBcIi4vd2VhdGhlckluaXRcIjtcblxuY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dC5jaXR5TmFtZScpO1xuY29uc3QgYnRuU2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uLmJ1dHRvblNlYXJjaCcpO1xuY29uc3QgZWxlbWVudEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuZm9ybS1ncm91cCcpO1xuY29uc3QgZWxlbWVudEluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuaW5mbycpO1xuXG5mdW5jdGlvbiBzZWFyY2goKSB7XG4gICAgYnRuU2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgaWYoY2l0eU5hbWUudmFsdWUubGVuZ3RoID09PSAwKXtcbiAgICAgICAgICAgIGFsZXJ0KCdXcml0ZSBUaGUgbmFtZSBvZiBjaXR5JylcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB2YXIgY2l0eSA9IGNpdHlOYW1lLnZhbHVlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgY2l0eU5hbWUudmFsdWUuc2xpY2UoMSk7XG4gICAgICAgICAgICBlbGVtZW50Rm9ybS5jbGFzc0xpc3QuYWRkKCdpbnZpc2libGUnKTtcbiAgICAgICAgICAgIGVsZW1lbnRJbmZvLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmlzaWJsZScpO1xuICAgICAgICAgICAgd2VhdGhlclVuaXR5KGNpdHkpO1xuICAgICAgICAgICAgY2l0eU5hbWUudmFsdWU9Jyc7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfSlcbn1cbmV4cG9ydCBkZWZhdWx0IHNlYXJjaDsiLCJjb25zdCB2aXNpYmlsaXR5VmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMi52aXNpYmlsaXR5Jyk7XG5cbmZ1bmN0aW9uIHNob3dWaXNpYmlsaXR5KHZhbHVlKXtcbiAgICB2aXNpYmlsaXR5VmFsdWUuaW5uZXJIVE1MID0gYCR7dmFsdWV9IG1pbGVzYFxufVxuZXhwb3J0IGRlZmF1bHQgc2hvd1Zpc2liaWxpdHk7IiwiaW1wb3J0IGNvbnZlcnRlcldlYXRoZXIgZnJvbSBcIi4vY29udmVydGVyV2VhdGhlclwiO1xuaW1wb3J0IGhlYWRDaXR5IGZyb20gXCIuLi9oZWFkXCI7XG5pbXBvcnQgaHVtaWRpdHlTaG93IGZyb20gXCIuL2h1bWlkaXR5XCI7XG5pbXBvcnQgc2hvd0FpciBmcm9tIFwiLi9haXJcIjtcbmltcG9ydCBzaG93VmlzaWJpbGl0eSBmcm9tIFwiLi92aXNpYmlsaXR5XCI7XG5pbXBvcnQgeyB3ZWF0aGVyRGFpbHksIHdlZWtUaW1lbGluZSwgc2hvd1RlbXBNYXhNaW4gfSBmcm9tIFwiLi4vd2Vla2x5XCI7XG5pbXBvcnQgd2luZFNob3cgZnJvbSBcIi4vd2luZFwiO1xuXG5jb25zdCBidXR0b25DZWxzaXVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VuaXR5LTEnKTtcbmNvbnN0IGJ1dHRvbkZhaHJlbmhlaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW5pdHktMicpO1xuY29uc3QgYnV0dG9uS2VsdmluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VuaXR5LTMnKTtcblxuLy9LZXkgT2YgQVBJXG52YXIga2V5ID0gJ2E0YWQ2NDQxMDU5NWEyMDM2ZDAxMzMzOTE0MmQ0Njg0JztcbnZhciBjaXR5RGF0YSA9IDA7XG52YXIgZGFpbHlEYXRhID0gMDtcbnZhciB1bml0eSA9ICdDZWxzaXVzJztcblxuYXN5bmMgZnVuY3Rpb24gd2VhdGhlclVuaXR5KGNpdHkpIHtcbiAgICAvKiotLS0tLS0tLS0tLUFwaSBJbml0LS0tLS0tLS0tLS0tLSAqL1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZhcHBpZD0ke2tleX1gLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgICAgICAgY2l0eURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnN0IGRhaWx5ID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xhdD0ke2NpdHlEYXRhLmNvb3JkLmxhdH0mbG9uPSR7Y2l0eURhdGEuY29vcmQubG9uLnRvRml4ZWQoKX0mZXhjbHVkZT13ZWVrbHkmYXBwaWQ9JHtrZXl9YCwgeyBtb2RlOiAnY29ycycgfSk7XG4gICAgICBcbiAgICAgICAgZGFpbHlEYXRhID0gYXdhaXQgZGFpbHkuanNvbigpO1xuICAgICAgICB2YXIgcmVhbFRlbXBlcmF0dXJlID0gcGFyc2VJbnQoY2l0eURhdGEubWFpbi5mZWVsc19saWtlLCAxMCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgYWxlcnQoJ0Vycm9yISBWZXJpZnkgeW91ciBDb25uZWN0aW9uIG9yIENpdHkgTm90IEZvdW5kIScpXG4gICAgfVxuXG4gICAgLyoqLS0tLS0tLUluaXRpYWxpemF0aW9uIG9mIEZ1bmN0aW9ucy0tLS0tLS0tLS0tICovXG4gICAgdmFyIGh1bWlkaXR5VmFsdWUgPSBjaXR5RGF0YS5tYWluLmh1bWlkaXR5O1xuICAgIHdlZWtUaW1lbGluZSgpO1xuICAgIGhlYWRDaXR5KGNpdHlEYXRhLm5hbWUsIGNpdHlEYXRhLndlYXRoZXJbMF0ubWFpbiwgY29udmVydGVyV2VhdGhlcihyZWFsVGVtcGVyYXR1cmUsIHVuaXR5KSk7XG4gICAgaHVtaWRpdHlTaG93KGh1bWlkaXR5VmFsdWUpO1xuICAgIHNob3dBaXIoY2l0eURhdGEubWFpbi5wcmVzc3VyZSk7XG4gICAgc2hvd1Zpc2liaWxpdHkoY2l0eURhdGEudmlzaWJpbGl0eSAvIDEwMDApO1xuICAgIG1heE1pblNob3coKTtcbiAgICBzaG93U3RhdHVzKCk7XG4gICAgd2luZFNob3coY2l0eURhdGEud2luZC5zcGVlZCAsY2l0eURhdGEud2luZC5kZWcpXG5cbiAgICBidXR0b25DZWxzaXVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBidXR0b25GYWhyZW5oZWl0LmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi1hY3RpdmUnKTtcbiAgICAgICAgYnV0dG9uS2VsdmluLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi1hY3RpdmUnKTtcbiAgICAgICAgYnV0dG9uQ2Vsc2l1cy5jbGFzc0xpc3QuYWRkKCdidG4tYWN0aXZlJyk7XG4gICAgICAgIHVuaXR5ID0gJ0NlbHNpdXMnO1xuICAgICAgICBoZWFkQ2l0eShjaXR5RGF0YS5uYW1lLCBjaXR5RGF0YS53ZWF0aGVyWzBdLm1haW4sIGNvbnZlcnRlcldlYXRoZXIocmVhbFRlbXBlcmF0dXJlLCB1bml0eSkpO1xuICAgICAgICBtYXhNaW5TaG93KCk7XG4gICAgfSk7XG4gICAgYnV0dG9uRmFocmVuaGVpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgYnV0dG9uQ2Vsc2l1cy5jbGFzc0xpc3QucmVtb3ZlKCdidG4tYWN0aXZlJyk7XG4gICAgICAgIGJ1dHRvbktlbHZpbi5jbGFzc0xpc3QucmVtb3ZlKCdidG4tYWN0aXZlJyk7XG4gICAgICAgIGJ1dHRvbkZhaHJlbmhlaXQuY2xhc3NMaXN0LmFkZCgnYnRuLWFjdGl2ZScpO1xuICAgICAgICB1bml0eSA9ICdGYWhyZW5oZWl0JztcbiAgICAgICAgaGVhZENpdHkoY2l0eURhdGEubmFtZSwgY2l0eURhdGEud2VhdGhlclswXS5tYWluLCBjb252ZXJ0ZXJXZWF0aGVyKHJlYWxUZW1wZXJhdHVyZSwgdW5pdHkpKTtcbiAgICAgICAgbWF4TWluU2hvdygpO1xuICAgIH0pO1xuICAgIGJ1dHRvbktlbHZpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgYnV0dG9uRmFocmVuaGVpdC5jbGFzc0xpc3QucmVtb3ZlKCdidG4tYWN0aXZlJyk7XG4gICAgICAgIGJ1dHRvbkNlbHNpdXMuY2xhc3NMaXN0LnJlbW92ZSgnYnRuLWFjdGl2ZScpO1xuICAgICAgICBidXR0b25LZWx2aW4uY2xhc3NMaXN0LmFkZCgnYnRuLWFjdGl2ZScpO1xuICAgICAgICB1bml0eSA9ICdLZWx2aW4nO1xuICAgICAgICBoZWFkQ2l0eShjaXR5RGF0YS5uYW1lLCBjaXR5RGF0YS53ZWF0aGVyWzBdLm1haW4sIGNvbnZlcnRlcldlYXRoZXIocmVhbFRlbXBlcmF0dXJlLCB1bml0eSkpO1xuICAgICAgICBtYXhNaW5TaG93KCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIG1heE1pblNob3coKXtcbiAgICB2YXIgY291bnQgPSAxO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgNTsgaisrKSB7IFxuICAgICAgICBzaG93VGVtcE1heE1pbih1bml0eSwgZGFpbHlEYXRhLmRhaWx5W2NvdW50XS50ZW1wLm1heCwgZGFpbHlEYXRhLmRhaWx5W2NvdW50XS50ZW1wLm1pbiwgaik7XG4gICAgICAgIGNvdW50Kys7XG4gICAgfVxufVxuZnVuY3Rpb24gc2hvd1N0YXR1cygpe1xuICAgIHZhciBjb3VudCA9IDE7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCA1OyBqKyspIHsgXG4gICAgICAgIHdlYXRoZXJEYWlseShkYWlseURhdGEuZGFpbHlbY291bnRdLndlYXRoZXJbMF0ubWFpbiwgaik7XG4gICAgICAgIGNvdW50Kys7XG4gICAgfVxufVxuZXhwb3J0IHsgd2VhdGhlclVuaXR5IH07IiwiaW1wb3J0IHNvdXJjZU5hdiBmcm9tICcuLi9pY29uL25hdmVnYWNhby5wbmcnO1xuXG5jb25zdCBpbWdOYXZlZ2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW1nLm5hdmVnYXRpb24nKTtcbmNvbnN0IHdpbmRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDIud2luZCcpO1xuaW1nTmF2ZWdhdGlvbi5zcmMgPSBzb3VyY2VOYXY7XG5cbmZ1bmN0aW9uIHdpbmRTaG93KHNwZWVkLCBkZWdyYXUpe1xuICAgIGltZ05hdmVnYXRpb24uc2V0QXR0cmlidXRlKCdzdHlsZScsIGB0cmFuc2Zvcm06IHJvdGF0ZSgke2RlZ3JhdX1kZWcpYCk7XG4gICAgd2luZEVsZW1lbnQuaW5uZXJIVE1MID0gYCR7c3BlZWR9IG1waGA7XG59XG5leHBvcnQgZGVmYXVsdCB3aW5kU2hvdzsiLCJpbXBvcnQgY2xvdWREYXkgZnJvbSAgXCIuL2ljb24vY2xvdWR5LWRheS5zdmdcIjtcbmltcG9ydCBzdW4gZnJvbSAgXCIuL2ljb24vc3VuLnN2Z1wiO1xuaW1wb3J0IHJhaW55IGZyb20gIFwiLi9pY29uL3JhaW55LnN2Z1wiO1xuaW1wb3J0IHNub3cgZnJvbSAgXCIuL2ljb24vc25vdy5zdmdcIjtcbmltcG9ydCBtb29uIGZyb20gIFwiLi9pY29uL21vb24uc3ZnXCI7XG5pbXBvcnQgY2xvdWROaWdodCBmcm9tICAgXCIuL2ljb24vY2xvdWR5LW5pZ2h0LnN2Z1wiO1xuaW1wb3J0IHVtYnJlbGxhSWNvbiBmcm9tIFwiLi9pY29uL3VtYnJlbGxhLnBuZ1wiO1xuaW1wb3J0IHdpbmRJY29uIGZyb20gXCIuL2ljb24vd2luZC5zdmdcIjtcbmltcG9ydCBodW1pZGl0eWljb24gZnJvbSBcIi4vaWNvbi9odW1pZGl0eS5zdmdcIjtcbmltcG9ydCBtaXN0IGZyb20gXCIuL2ljb24vbWlzdC5zdmdcIjtcbmV4cG9ydCBkZWZhdWx0IGNsb3VkU3RhdHVzO1xuXG5jb25zdCBkYXRhID0gbmV3IERhdGUoKTtcbmNvbnN0IGhvdXIgPSBkYXRhLmdldEhvdXJzKClcblxuZnVuY3Rpb24gY2xvdWRTdGF0dXMoc3RhdHVzVGVtcCwgY2xhc3NsaSl7XG4gICAgY29uc3QgY2xvdWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjbG91ZC5jbGFzc0xpc3QuYWRkKGNsYXNzbGkpO1xuICAgIGlmKGhvdXIgPj0gNSAmJiBob3VyIDwgMTgpe1xuICAgICAgICBzd2l0Y2goc3RhdHVzVGVtcCl7XG4gICAgICAgICAgICBjYXNlICdDbGVhcic6IGNsb3VkLnNyYyA9IHN1bjsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdDbG91ZHMnOiBjbG91ZC5zcmMgPSBjbG91ZERheTsgYnJlYWs7ICBcbiAgICAgICAgICAgIGNhc2UgJ1JhaW4nOiBjbG91ZC5zcmMgPSByYWlueTsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdTbm93JzogY2xvdWQuc3JjID0gc25vdzsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdNaXN0JzogY2xvdWQuc3JjID0gbWlzdDsgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9ZWxzZXtcbiAgICAgICAgc3dpdGNoKHN0YXR1c1RlbXApe1xuICAgICAgICAgICAgY2FzZSAnQ2xlYXInOiBjbG91ZC5zcmMgPSBtb29uOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0Nsb3Vkcyc6IGNsb3VkLnNyYyA9IGNsb3VkTmlnaHQ7IGJyZWFrOyBcbiAgICAgICAgICAgIGNhc2UgJ1JhaW4nOiBjbG91ZC5zcmMgPSByYWlueSA7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnU25vdyc6IGNsb3VkLnNyYyA9IHNub3c7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnTWlzdCc6IGNsb3VkLnNyYyA9IG1pc3Q7IGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjbG91ZDtcbn1cblxuXG5cblxuIiwiaW1wb3J0IGRheU9mV2VlayBmcm9tIFwiLi9tb2R1bGVzL2RheU9mV2Vla1wiO1xuaW1wb3J0IG1vdXRoT2ZZZWFyIGZyb20gXCIuL21vZHVsZXMvbW91dGhPZlllYXJcIjtcbmltcG9ydCBjbG91ZFN0YXR1cyBmcm9tIFwiLi9tb2R1bGVzL2Nsb3VkU3RhdHVzXCI7XG5pbXBvcnQgY29udmVydGVyV2VhdGhlciBmcm9tIFwiLi9tb2R1bGVzL2NvbnZlcnRlcldlYXRoZXJcIjtcblxuY29uc3QgZGF0ZVRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdoNC5kYXRlVGVtcCcpO1xuY29uc3QgdGVtcFN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Rpdi50ZW1wU3RhdHVzLTEnKTtcbmNvbnN0IHRlbXBNYXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdoNC50ZW1wTWF4Jyk7XG5jb25zdCB0ZW1wTWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaDQudGVtcE1pbicpO1xuXG5mdW5jdGlvbiB3ZWVrVGltZWxpbmUoKSB7XG5cbiAgICB2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIHZhciBrID0gMTtcbiAgICB2YXIgaW5jcmVtZXREYXkgPSAxO1xuICAgIHZhciBkYXlPZk1vdXRoID0gdG9kYXkuZ2V0VVRDRGF0ZSgpICsgaW5jcmVtZXREYXk7XG4gICAgdmFyIGRheSA9IHRvZGF5LmdldERheSgpO1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCA1OyBqKyspIHtcbiAgICAgICAgZGF5T2ZNb3V0aCA9IHRvZGF5LmdldFVUQ0RhdGUoKSArIGluY3JlbWV0RGF5O1xuICAgICAgICBpZiAoZGF5ICsgayA8PSA2KSB7XG4gICAgICAgICAgICBkYXRlVGVtcFtqXS5pbm5lclRleHQgPSBkYXlPZldlZWsoZGF5ICsgaykgKyAnLCAnICsgZGF5T2ZNb3V0aCArICcgJyArIG1vdXRoT2ZZZWFyKHRvZGF5LmdldE1vbnRoKCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgayA9IDBcbiAgICAgICAgICAgIGRhdGVUZW1wW2pdLmlubmVyVGV4dCA9IGRheU9mV2VlayhrKSArICcsICcgKyBkYXlPZk1vdXRoICsgJyAnICsgbW91dGhPZlllYXIodG9kYXkuZ2V0TW9udGgoKSk7XG4gICAgICAgICAgICBkYXkgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGluY3JlbWV0RGF5KytcbiAgICAgICAgaysrO1xuICAgIH1cblxuXG59XG5mdW5jdGlvbiB3ZWF0aGVyRGFpbHkoc3RhdHVzLCBjb3VudCkge1xuICAgIHRlbXBTdGF0dXNbY291bnRdLmlubmVySFRNTCA9ICcgJztcbiAgICB0ZW1wU3RhdHVzW2NvdW50XS5hcHBlbmRDaGlsZChjbG91ZFN0YXR1cyhzdGF0dXMsICd0ZW1wU3RhdHVzJykpO1xufVxuZnVuY3Rpb24gc2hvd1RlbXBNYXhNaW4odW5pdHksIHRNYXgsIHRNaW4sIGNvdW50KSB7XG4gICAgdGVtcE1heFtjb3VudF0uaW5uZXJIVE1MID0gY29udmVydGVyV2VhdGhlcih0TWF4LnRvRml4ZWQoKSwgdW5pdHkpO1xuICAgIHRlbXBNaW5bY291bnRdLmlubmVySFRNTCA9IGNvbnZlcnRlcldlYXRoZXIodE1pbi50b0ZpeGVkKCkgLSAxLCB1bml0eSk7XG59XG5leHBvcnQgeyB3ZWVrVGltZWxpbmUsIHdlYXRoZXJEYWlseSwgc2hvd1RlbXBNYXhNaW4gfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCBzZWFyY2ggZnJvbSAnLi9tb2R1bGVzL3NlYXJjaCc7XG5pbXBvcnQgZGlzcGxheUZvcm0gZnJvbSAnLi9tb2R1bGVzL2hpZGRlbkVsZW1lbnQnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQge3dlYXRoZXJVbml0eX0gZnJvbSAnLi9tb2R1bGVzL3dlYXRoZXJJbml0JztcblxuY29uc3QgZ3BzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uLmJ0bi1ncHMnKTtcbnZhciBrZXkgPSAnYTRhZDY0NDEwNTk1YTIwMzZkMDEzMzM5MTQyZDQ2ODQnO1xudmFyIGNpdHkgPSAnTHVhbmRhJztcblxud2VhdGhlclVuaXR5KGNpdHkpO1xuZGlzcGxheUZvcm0oKTtcbnNlYXJjaCgpO1xuLyoqLS0tLS0tLS0tLS0tLS1HUFMgRnVuY3Rpb24tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuZ3BzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKHN1Y2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcbn0pXG4gY29uc3QgIHN1Y2Vzc0NhbGxiYWNrID0gYXN5bmMgKHBvc2l0aW9uKSA9PntcbiAgICBjb25zdCBkYWlseSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbD9sYXQ9JHtwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGUudG9GaXhlZCg0KX0mbG9uPSR7cG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZS50b0ZpeGVkKDMpfSZleGNsdWRlPXdlZWtseSZhcHBpZD0ke2tleX1gLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgICBjb25zdCBkYXRhRGF5ID0gYXdhaXQgZGFpbHkuanNvbigpO1xuICAgIGNvbnN0IHRpbWVab25lID0gKGRhdGFEYXkudGltZXpvbmUpLnNwbGl0KCcvJyk7XG4gICAgd2VhdGhlclVuaXR5KHRpbWVab25lWzFdKTtcbn1cbmNvbnN0IGVycm9yQ2FsbGJhY2sgPSAoZXJyb3IpPT57XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==