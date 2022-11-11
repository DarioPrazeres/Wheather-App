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
___CSS_LOADER_EXPORT___.push([module.id, "body{\n    margin: 0;\n    padding: 0;\n    font-family: Arial, Helvetica, sans-serif; \n    color: white;  \n    font-weight: 100;\n}\n*{\n    margin: 0;\n    letter-spacing: 0px;\n}\nbody, html{    \n    margin: 0;\n    letter-spacing: 0px;\n}\nbody{\n    height: 100%;\n}\n/*General Settings*/\np{\n    font-size: 16px;\n}\nh1{\n    font-size: 60px;\n    font-weight: 100;\n}\nh2{\n    font-size: 50px;\n    font-weight: 100;\n}\nh3{\n    font-size: 40px;\n    font-weight: 100;\n}\nh4{\n    font-size: 30px;\n    font-weight: 100;\n}\nh5{\n    font-size: 20px;\n    font-weight: 100;\n}\nh6{\n    font-size: 15px;\n    font-weight: 400;\n}\n.btn{\n    padding: 10px;\n    background: rgb(74, 73, 73);\n    color: white;\n    border: none;\n    font-size: 16px;\n}\n.btn-search{\n    width: 150px;\n    height: 50px;\n}\n.btn-gps{\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: contain;\n    background-repeat: no-repeat;\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n}\n.group-button{\n    padding: 0px 20px 0px 20px;\n    display: flex;\n    justify-content: center;\n    justify-content: space-between;\n}\n.main{\n    height: 100vh;\n    width: 100vw;    \n    margin: 0px;  \n    padding: 0px; \n    /*New way to Show the informactions*/\n    display: flex;\n    background-color: #100E1D;\n}\n/* CSS about Side bar*/\n.sideBar{\n    padding: 15px;\n    width: 27%;\n    background-color: #1E213A;\n    position: relative;  \n}\n.search{   \n    height: 30px;\n    border: none;\n    background: none;\n    color: white;\n    font-size: 15px;\n}\n.search:hover{\n    font-size: 17px;\n}\n.btn-close{\n    width: 50px;\n    height: 50px;\n    border: none;\n    position: absolute;\n    right: 0px;\n    top: 0px;\n    background-color: rgba(0, 0, 0, 0);\n    background-size: contain;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n/*Form about Search*/\n.form{\n    margin: 80px 0px 40px 0px;\n    padding: 5px;\n    display: flex;\n    justify-content: space-evenly;\n    justify-content: center;\n    align-items: center;\n}\n.cityName{\n    width: 250px;\n    height: 35px;\n    border: solid white 1px;\n    padding: 2px;\n    font-size: 16px;\n    color: white;\n    background: none;\n    margin-right: 5px;\n}\n.buttonSearch{\n    padding: 10px;\n    background-color: rgb(25, 0, 123);\n    border: none;\n    width: 100px;\n    height: 45px;\n    font-size: 16px;\n}\n.statusCity{\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap-reverse;\n    justify-content: baseline;\n    align-items: center;\n    justify-content: center;\n}\n.status{\n    padding-top: 50px;\n    text-align: center;\n}\n.tempCity{\n    padding: 10px;\n    font-size: 70px;\n    margin: 63px 0px 63px 0px;\n}\n.last{\n    border-right: none;\n}\n.containerSky{\n    display: flex;\n}\n.containerInfo{\n    display: flex;\n}\n.weekly{\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(7, 14%);\n}\n.week{\n    text-align: center;\n}\n\n.image{\n    padding: 3px;\n    width: 40px;\n    height: 40px;\n}\n.image_10{\n    width: 250px;\n    height: 250px;\n    margin: 0px 0px 10px 0px;\n}\n.rainPercent{\n    margin-left: 5px;\n}\n.btn-info{\n    margin-top: 3px;\n    width: 100px;\n    height: 40px;\n    border: none;\n\n}\n.btn-less{\n    margin: 5px;\n    width: 100px;\n    height: 30px;\n    display: none;\n}\n.location{\n    margin-top: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 7px;\n}\n.location img{\n    height: 30px;\n}\n.date, .sky{\n    margin: 50px 0px 60px 0px;\n}\n.visible{\n    display: block;\n}\n.invisible{\n    display: none;\n}\n/*----------Body Css----------*/\n.body-project{\n    width: 70%;\n    background-color: #100E1D;\n    position: relative;\n}\n.btn-group-wheater{\n    position: absolute;\n    right: 20px;\n    margin: 50px;\n}\n.btn-unity{\n    border-radius: 50%;\n    margin: 4px;\n    height: 50px;\n    width: 50px;\n    font-size: 18px;\n}\n.btn-unity:hover{\n    background-color: rgb(12, 12, 12);\n    border: 1px solid wheat;\n    color: white;\n}\n.btn-active{\n    background-color: white;\n    border: 1px solid wheat;\n    color: #252525;\n}\n/*----------Week Weather---------*/\n.temp-day{\n    display: flex;\n    flex-wrap: wrap;\n    margin: 150px 0px 40px 0px;\n    justify-content: space-around;\n}\n.day{\n    width: 175px;\n    height: 230px;\n    margin: 5px;\n    padding: 15px;\n    border-radius: 3px;\n    flex-direction: column;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: #1E213A;\n}\n.temps{\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    padding: 7px;\n}\n.day h4{\n    font-size: 22px;\n}\n.tempStatus{\n    width: 125px;\n    height: 125px;\n    padding: 20px 0px 15px 0px;\n}\n/*----------------hight-lights CSS--------*/\n.hight-lights{\n    width: 100%;\n    display: flex;\n    text-align: left;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n.high{\n    margin-left: 250px;\n}\n.more-info{\n    display: grid;\n    padding: 8px;\n    row-gap: 25px;\n    column-gap: 25px;\n    grid-template-columns: repeat(2, 400px);\n    grid-template-rows: 220px 125px;\n}\n.more-info h5{\n    font-size: 24px;\n}\n.wind, .humidity, .visibility, .air{\n    padding: 10px;\n    background-color: #1E213A;\n    text-align: center;\n}\n.visibility, .air{\n    text-align: center;\n}\n.humidity{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.humidity h5, .humidity h2{\n    margin: 15px;\n}\n.progressive{\n    margin: 10px;\n    width: 250px;\n    height: 10px;\n    border-radius: 5px;\n    background-color: rgb(224, 219, 219);\n    position: relative;\n}\n.progress{\n    border-radius: 5px;\n    width: 85%;\n    height: 10px;\n    position: absolute;\n    left: 0px;\n    background-color: #fea400;\n}\n.prog{\n    display: flex;\n    flex-direction: column;\n    position: relative;\n}\n.percDisc{\n    display: flex;\n    justify-content: space-between;\n} \n.hundred{\n    position: absolute;\n    right: 0px;\n    bottom: -10px;\n}\n.navegation{\n    border-radius: 50%;\n    background-color: rgb(93, 90, 90);\n    height: 45px;\n    width: 45px;\n}\n.nav{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.nav h5{\n    margin: 7px;\n}\nfooter{\n    margin-top: 15px;\n    text-align: center;\n}\nfooter a{\n    color: white;\n    font-weight: 400;\n}\n@media only screen and (max-width: 800px){\n    .more-info{ \n        grid-template-columns: 300px;\n        grid-template-rows: 220px 220px 125px 125px;\n    }\n}\n@media only screen and (max-width: 1400px){\n    h4{\n        font-size: 16px;\n    }\n    .main{\n        flex-direction: column;\n    }\n    .sideBar{\n        width: 100vmin;\n        height: 600px;\n    }\n    .body-project{\n        margin: 0;\n        padding: 15px;\n        width: 100vmin;\n    }\n    .more-info{ \n        grid-template-columns: 400px;\n        grid-template-rows: 220px 220px 125px 125px;\n    }\n    .high{\n        margin-left: 0px;\n        text-align: center;\n    }\n    .tempStatus{\n        width: 100px;\n        height: 100px;\n    }\n    .day{\n        width: 125px;\n    }\n    .image_10{\n        width: 170px;\n        height: 170px;\n        margin: 0px 0px 5px 0px;\n    }\n    .date, .sky{\n        margin: 20px 0px 20px 0px;\n    }\n    .tempCity{\n        padding: 5px;\n        font-size: 70px;\n        margin: 10px 0px 10px 0px;\n    }\n    .status{\n        padding-top: 10px;\n    }\n}\n@media only screen and (max-width: 2000px){\n    h4{\n        font-size: 16px;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,yCAAyC;IACzC,YAAY;IACZ,gBAAgB;AACpB;AACA;IACI,SAAS;IACT,mBAAmB;AACvB;AACA;IACI,SAAS;IACT,mBAAmB;AACvB;AACA;IACI,YAAY;AAChB;AACA,mBAAmB;AACnB;IACI,eAAe;AACnB;AACA;IACI,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,2BAA2B;IAC3B,YAAY;IACZ,YAAY;IACZ,eAAe;AACnB;AACA;IACI,YAAY;IACZ,YAAY;AAChB;AACA;IACI,yDAAqC;IACrC,wBAAwB;IACxB,4BAA4B;IAC5B,WAAW;IACX,YAAY;IACZ,kBAAkB;AACtB;AACA;IACI,0BAA0B;IAC1B,aAAa;IACb,uBAAuB;IACvB,8BAA8B;AAClC;AACA;IACI,aAAa;IACb,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,oCAAoC;IACpC,aAAa;IACb,yBAAyB;AAC7B;AACA,sBAAsB;AACtB;IACI,aAAa;IACb,UAAU;IACV,yBAAyB;IACzB,kBAAkB;AACtB;AACA;IACI,YAAY;IACZ,YAAY;IACZ,gBAAgB;IAChB,YAAY;IACZ,eAAe;AACnB;AACA;IACI,eAAe;AACnB;AACA;IACI,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,UAAU;IACV,QAAQ;IACR,kCAAkC;IAClC,wBAAwB;IACxB,yDAAuC;AAC3C;AACA,oBAAoB;AACpB;IACI,yBAAyB;IACzB,YAAY;IACZ,aAAa;IACb,6BAA6B;IAC7B,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,YAAY;IACZ,uBAAuB;IACvB,YAAY;IACZ,eAAe;IACf,YAAY;IACZ,gBAAgB;IAChB,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,iCAAiC;IACjC,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,eAAe;AACnB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,yBAAyB;IACzB,mBAAmB;IACnB,uBAAuB;AAC3B;AACA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,eAAe;IACf,yBAAyB;AAC7B;AACA;IACI,kBAAkB;AACtB;AACA;IACI,aAAa;AACjB;AACA;IACI,aAAa;AACjB;AACA;IACI,WAAW;IACX,aAAa;IACb,qCAAqC;AACzC;AACA;IACI,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,YAAY;AAChB;AACA;IACI,YAAY;IACZ,aAAa;IACb,wBAAwB;AAC5B;AACA;IACI,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,YAAY;IACZ,YAAY;IACZ,YAAY;;AAEhB;AACA;IACI,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,aAAa;AACjB;AACA;IACI,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,cAAc;AAClB;AACA;IACI,aAAa;AACjB;AACA,+BAA+B;AAC/B;IACI,UAAU;IACV,yBAAyB;IACzB,kBAAkB;AACtB;AACA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;AAChB;AACA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,WAAW;IACX,eAAe;AACnB;AACA;IACI,iCAAiC;IACjC,uBAAuB;IACvB,YAAY;AAChB;AACA;IACI,uBAAuB;IACvB,uBAAuB;IACvB,cAAc;AAClB;AACA,kCAAkC;AAClC;IACI,aAAa;IACb,eAAe;IACf,0BAA0B;IAC1B,6BAA6B;AACjC;AACA;IACI,YAAY;IACZ,aAAa;IACb,WAAW;IACX,aAAa;IACb,kBAAkB;IAClB,sBAAsB;IACtB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,yBAAyB;AAC7B;AACA;IACI,WAAW;IACX,aAAa;IACb,6BAA6B;IAC7B,YAAY;AAChB;AACA;IACI,eAAe;AACnB;AACA;IACI,YAAY;IACZ,aAAa;IACb,0BAA0B;AAC9B;AACA,2CAA2C;AAC3C;IACI,WAAW;IACX,aAAa;IACb,gBAAgB;IAChB,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;AAC3B;AACA;IACI,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,uCAAuC;IACvC,+BAA+B;AACnC;AACA;IACI,eAAe;AACnB;AACA;IACI,aAAa;IACb,yBAAyB;IACzB,kBAAkB;AACtB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,oCAAoC;IACpC,kBAAkB;AACtB;AACA;IACI,kBAAkB;IAClB,UAAU;IACV,YAAY;IACZ,kBAAkB;IAClB,SAAS;IACT,yBAAyB;AAC7B;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,8BAA8B;AAClC;AACA;IACI,kBAAkB;IAClB,UAAU;IACV,aAAa;AACjB;AACA;IACI,kBAAkB;IAClB,iCAAiC;IACjC,YAAY;IACZ,WAAW;AACf;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,WAAW;AACf;AACA;IACI,gBAAgB;IAChB,kBAAkB;AACtB;AACA;IACI,YAAY;IACZ,gBAAgB;AACpB;AACA;IACI;QACI,4BAA4B;QAC5B,2CAA2C;IAC/C;AACJ;AACA;IACI;QACI,eAAe;IACnB;IACA;QACI,sBAAsB;IAC1B;IACA;QACI,cAAc;QACd,aAAa;IACjB;IACA;QACI,SAAS;QACT,aAAa;QACb,cAAc;IAClB;IACA;QACI,4BAA4B;QAC5B,2CAA2C;IAC/C;IACA;QACI,gBAAgB;QAChB,kBAAkB;IACtB;IACA;QACI,YAAY;QACZ,aAAa;IACjB;IACA;QACI,YAAY;IAChB;IACA;QACI,YAAY;QACZ,aAAa;QACb,uBAAuB;IAC3B;IACA;QACI,yBAAyB;IAC7B;IACA;QACI,YAAY;QACZ,eAAe;QACf,yBAAyB;IAC7B;IACA;QACI,iBAAiB;IACrB;AACJ;AACA;IACI;QACI,eAAe;IACnB;AACJ","sourcesContent":["body{\n    margin: 0;\n    padding: 0;\n    font-family: Arial, Helvetica, sans-serif; \n    color: white;  \n    font-weight: 100;\n}\n*{\n    margin: 0;\n    letter-spacing: 0px;\n}\nbody, html{    \n    margin: 0;\n    letter-spacing: 0px;\n}\nbody{\n    height: 100%;\n}\n/*General Settings*/\np{\n    font-size: 16px;\n}\nh1{\n    font-size: 60px;\n    font-weight: 100;\n}\nh2{\n    font-size: 50px;\n    font-weight: 100;\n}\nh3{\n    font-size: 40px;\n    font-weight: 100;\n}\nh4{\n    font-size: 30px;\n    font-weight: 100;\n}\nh5{\n    font-size: 20px;\n    font-weight: 100;\n}\nh6{\n    font-size: 15px;\n    font-weight: 400;\n}\n.btn{\n    padding: 10px;\n    background: rgb(74, 73, 73);\n    color: white;\n    border: none;\n    font-size: 16px;\n}\n.btn-search{\n    width: 150px;\n    height: 50px;\n}\n.btn-gps{\n    background-image: url(./icon/gps.png);\n    background-size: contain;\n    background-repeat: no-repeat;\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n}\n.group-button{\n    padding: 0px 20px 0px 20px;\n    display: flex;\n    justify-content: center;\n    justify-content: space-between;\n}\n.main{\n    height: 100vh;\n    width: 100vw;    \n    margin: 0px;  \n    padding: 0px; \n    /*New way to Show the informactions*/\n    display: flex;\n    background-color: #100E1D;\n}\n/* CSS about Side bar*/\n.sideBar{\n    padding: 15px;\n    width: 27%;\n    background-color: #1E213A;\n    position: relative;  \n}\n.search{   \n    height: 30px;\n    border: none;\n    background: none;\n    color: white;\n    font-size: 15px;\n}\n.search:hover{\n    font-size: 17px;\n}\n.btn-close{\n    width: 50px;\n    height: 50px;\n    border: none;\n    position: absolute;\n    right: 0px;\n    top: 0px;\n    background-color: rgba(0, 0, 0, 0);\n    background-size: contain;\n    background-image: url(./icon/close.png);\n}\n/*Form about Search*/\n.form{\n    margin: 80px 0px 40px 0px;\n    padding: 5px;\n    display: flex;\n    justify-content: space-evenly;\n    justify-content: center;\n    align-items: center;\n}\n.cityName{\n    width: 250px;\n    height: 35px;\n    border: solid white 1px;\n    padding: 2px;\n    font-size: 16px;\n    color: white;\n    background: none;\n    margin-right: 5px;\n}\n.buttonSearch{\n    padding: 10px;\n    background-color: rgb(25, 0, 123);\n    border: none;\n    width: 100px;\n    height: 45px;\n    font-size: 16px;\n}\n.statusCity{\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap-reverse;\n    justify-content: baseline;\n    align-items: center;\n    justify-content: center;\n}\n.status{\n    padding-top: 50px;\n    text-align: center;\n}\n.tempCity{\n    padding: 10px;\n    font-size: 70px;\n    margin: 63px 0px 63px 0px;\n}\n.last{\n    border-right: none;\n}\n.containerSky{\n    display: flex;\n}\n.containerInfo{\n    display: flex;\n}\n.weekly{\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(7, 14%);\n}\n.week{\n    text-align: center;\n}\n\n.image{\n    padding: 3px;\n    width: 40px;\n    height: 40px;\n}\n.image_10{\n    width: 250px;\n    height: 250px;\n    margin: 0px 0px 10px 0px;\n}\n.rainPercent{\n    margin-left: 5px;\n}\n.btn-info{\n    margin-top: 3px;\n    width: 100px;\n    height: 40px;\n    border: none;\n\n}\n.btn-less{\n    margin: 5px;\n    width: 100px;\n    height: 30px;\n    display: none;\n}\n.location{\n    margin-top: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 7px;\n}\n.location img{\n    height: 30px;\n}\n.date, .sky{\n    margin: 50px 0px 60px 0px;\n}\n.visible{\n    display: block;\n}\n.invisible{\n    display: none;\n}\n/*----------Body Css----------*/\n.body-project{\n    width: 70%;\n    background-color: #100E1D;\n    position: relative;\n}\n.btn-group-wheater{\n    position: absolute;\n    right: 20px;\n    margin: 50px;\n}\n.btn-unity{\n    border-radius: 50%;\n    margin: 4px;\n    height: 50px;\n    width: 50px;\n    font-size: 18px;\n}\n.btn-unity:hover{\n    background-color: rgb(12, 12, 12);\n    border: 1px solid wheat;\n    color: white;\n}\n.btn-active{\n    background-color: white;\n    border: 1px solid wheat;\n    color: #252525;\n}\n/*----------Week Weather---------*/\n.temp-day{\n    display: flex;\n    flex-wrap: wrap;\n    margin: 150px 0px 40px 0px;\n    justify-content: space-around;\n}\n.day{\n    width: 175px;\n    height: 230px;\n    margin: 5px;\n    padding: 15px;\n    border-radius: 3px;\n    flex-direction: column;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: #1E213A;\n}\n.temps{\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    padding: 7px;\n}\n.day h4{\n    font-size: 22px;\n}\n.tempStatus{\n    width: 125px;\n    height: 125px;\n    padding: 20px 0px 15px 0px;\n}\n/*----------------hight-lights CSS--------*/\n.hight-lights{\n    width: 100%;\n    display: flex;\n    text-align: left;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n.high{\n    margin-left: 250px;\n}\n.more-info{\n    display: grid;\n    padding: 8px;\n    row-gap: 25px;\n    column-gap: 25px;\n    grid-template-columns: repeat(2, 400px);\n    grid-template-rows: 220px 125px;\n}\n.more-info h5{\n    font-size: 24px;\n}\n.wind, .humidity, .visibility, .air{\n    padding: 10px;\n    background-color: #1E213A;\n    text-align: center;\n}\n.visibility, .air{\n    text-align: center;\n}\n.humidity{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.humidity h5, .humidity h2{\n    margin: 15px;\n}\n.progressive{\n    margin: 10px;\n    width: 250px;\n    height: 10px;\n    border-radius: 5px;\n    background-color: rgb(224, 219, 219);\n    position: relative;\n}\n.progress{\n    border-radius: 5px;\n    width: 85%;\n    height: 10px;\n    position: absolute;\n    left: 0px;\n    background-color: #fea400;\n}\n.prog{\n    display: flex;\n    flex-direction: column;\n    position: relative;\n}\n.percDisc{\n    display: flex;\n    justify-content: space-between;\n} \n.hundred{\n    position: absolute;\n    right: 0px;\n    bottom: -10px;\n}\n.navegation{\n    border-radius: 50%;\n    background-color: rgb(93, 90, 90);\n    height: 45px;\n    width: 45px;\n}\n.nav{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.nav h5{\n    margin: 7px;\n}\nfooter{\n    margin-top: 15px;\n    text-align: center;\n}\nfooter a{\n    color: white;\n    font-weight: 400;\n}\n@media only screen and (max-width: 800px){\n    .more-info{ \n        grid-template-columns: 300px;\n        grid-template-rows: 220px 220px 125px 125px;\n    }\n}\n@media only screen and (max-width: 1400px){\n    h4{\n        font-size: 16px;\n    }\n    .main{\n        flex-direction: column;\n    }\n    .sideBar{\n        width: 100vmin;\n        height: 600px;\n    }\n    .body-project{\n        margin: 0;\n        padding: 15px;\n        width: 100vmin;\n    }\n    .more-info{ \n        grid-template-columns: 400px;\n        grid-template-rows: 220px 220px 125px 125px;\n    }\n    .high{\n        margin-left: 0px;\n        text-align: center;\n    }\n    .tempStatus{\n        width: 100px;\n        height: 100px;\n    }\n    .day{\n        width: 125px;\n    }\n    .image_10{\n        width: 170px;\n        height: 170px;\n        margin: 0px 0px 5px 0px;\n    }\n    .date, .sky{\n        margin: 20px 0px 20px 0px;\n    }\n    .tempCity{\n        padding: 5px;\n        font-size: 70px;\n        margin: 10px 0px 10px 0px;\n    }\n    .status{\n        padding-top: 10px;\n    }\n}\n@media only screen and (max-width: 2000px){\n    h4{\n        font-size: 16px;\n    }\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxV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QUFDQSxJQUFJLGtFQUFZO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3doZWF0aGVyLUFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2hlYXRoZXItQXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2hlYXRoZXItQXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3doZWF0aGVyLUFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2hlYXRoZXItQXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3doZWF0aGVyLUFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvLi9zcmMvaGVhZC5qcyIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvLi9zcmMvbW9kdWxlcy9haXIuanMiLCJ3ZWJwYWNrOi8vd2hlYXRoZXItQXBwLy4vc3JjL21vZHVsZXMvY2xvdWRTdGF0dXMuanMiLCJ3ZWJwYWNrOi8vd2hlYXRoZXItQXBwLy4vc3JjL21vZHVsZXMvY29udmVydGVyV2VhdGhlci5qcyIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvLi9zcmMvbW9kdWxlcy9kYXlPZldlZWsuanMiLCJ3ZWJwYWNrOi8vd2hlYXRoZXItQXBwLy4vc3JjL21vZHVsZXMvaGlkZGVuRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvLi9zcmMvbW9kdWxlcy9odW1pZGl0eS5qcyIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvLi9zcmMvbW9kdWxlcy9tb3V0aE9mWWVhci5qcyIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvLi9zcmMvbW9kdWxlcy9zZWFyY2guanMiLCJ3ZWJwYWNrOi8vd2hlYXRoZXItQXBwLy4vc3JjL21vZHVsZXMvdmlzaWJpbGl0eS5qcyIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvLi9zcmMvbW9kdWxlcy93ZWF0aGVySW5pdC5qcyIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvLi9zcmMvbW9kdWxlcy93aW5kLmpzIiwid2VicGFjazovL3doZWF0aGVyLUFwcC8uL3NyYy9wcmludC5qcyIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvLi9zcmMvd2Vla2x5LmpzIiwid2VicGFjazovL3doZWF0aGVyLUFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2hlYXRoZXItQXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2hlYXRoZXItQXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3doZWF0aGVyLUFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pY29uL2dwcy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ljb24vY2xvc2UucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHl7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7IFxcbiAgICBjb2xvcjogd2hpdGU7ICBcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG59XFxuKntcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xcbn1cXG5ib2R5LCBodG1seyAgICBcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xcbn1cXG5ib2R5e1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbi8qR2VuZXJhbCBTZXR0aW5ncyovXFxucHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5oMXtcXG4gICAgZm9udC1zaXplOiA2MHB4O1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbn1cXG5oMntcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbn1cXG5oM3tcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbn1cXG5oNHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbn1cXG5oNXtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbn1cXG5oNntcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG4uYnRue1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNzQsIDczLCA3Myk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5idG4tc2VhcmNoe1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG59XFxuLmJ0bi1ncHN7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG4uZ3JvdXAtYnV0dG9ue1xcbiAgICBwYWRkaW5nOiAwcHggMjBweCAwcHggMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLm1haW57XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dzsgICAgXFxuICAgIG1hcmdpbjogMHB4OyAgXFxuICAgIHBhZGRpbmc6IDBweDsgXFxuICAgIC8qTmV3IHdheSB0byBTaG93IHRoZSBpbmZvcm1hY3Rpb25zKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEwMEUxRDtcXG59XFxuLyogQ1NTIGFib3V0IFNpZGUgYmFyKi9cXG4uc2lkZUJhcntcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgd2lkdGg6IDI3JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFFMjEzQTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyAgXFxufVxcbi5zZWFyY2h7ICAgXFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuLnNlYXJjaDpob3ZlcntcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcbn1cXG4uYnRuLWNsb3Nle1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDBweDtcXG4gICAgdG9wOiAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuLypGb3JtIGFib3V0IFNlYXJjaCovXFxuLmZvcm17XFxuICAgIG1hcmdpbjogODBweCAwcHggNDBweCAwcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uY2l0eU5hbWV7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICBib3JkZXI6IHNvbGlkIHdoaXRlIDFweDtcXG4gICAgcGFkZGluZzogMnB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcbi5idXR0b25TZWFyY2h7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNSwgMCwgMTIzKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogNDVweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4uc3RhdHVzQ2l0eXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC13cmFwOiB3cmFwLXJldmVyc2U7XFxuICAgIGp1c3RpZnktY29udGVudDogYmFzZWxpbmU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uc3RhdHVze1xcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4udGVtcENpdHl7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogNzBweDtcXG4gICAgbWFyZ2luOiA2M3B4IDBweCA2M3B4IDBweDtcXG59XFxuLmxhc3R7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG59XFxuLmNvbnRhaW5lclNreXtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuLmNvbnRhaW5lckluZm97XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbi53ZWVrbHl7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxNCUpO1xcbn1cXG4ud2Vla3tcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaW1hZ2V7XFxuICAgIHBhZGRpbmc6IDNweDtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG59XFxuLmltYWdlXzEwe1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICAgIG1hcmdpbjogMHB4IDBweCAxMHB4IDBweDtcXG59XFxuLnJhaW5QZXJjZW50e1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbn1cXG4uYnRuLWluZm97XFxuICAgIG1hcmdpbi10b3A6IDNweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG5cXG59XFxuLmJ0bi1sZXNze1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5sb2NhdGlvbntcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDdweDtcXG59XFxuLmxvY2F0aW9uIGltZ3tcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbn1cXG4uZGF0ZSwgLnNreXtcXG4gICAgbWFyZ2luOiA1MHB4IDBweCA2MHB4IDBweDtcXG59XFxuLnZpc2libGV7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uaW52aXNpYmxle1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4vKi0tLS0tLS0tLS1Cb2R5IENzcy0tLS0tLS0tLS0qL1xcbi5ib2R5LXByb2plY3R7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMDBFMUQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmJ0bi1ncm91cC13aGVhdGVye1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAyMHB4O1xcbiAgICBtYXJnaW46IDUwcHg7XFxufVxcbi5idG4tdW5pdHl7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgbWFyZ2luOiA0cHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuLmJ0bi11bml0eTpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyLCAxMiwgMTIpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGVhdDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4uYnRuLWFjdGl2ZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoZWF0O1xcbiAgICBjb2xvcjogIzI1MjUyNTtcXG59XFxuLyotLS0tLS0tLS0tV2VlayBXZWF0aGVyLS0tLS0tLS0tKi9cXG4udGVtcC1kYXl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgbWFyZ2luOiAxNTBweCAwcHggNDBweCAwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4uZGF5e1xcbiAgICB3aWR0aDogMTc1cHg7XFxuICAgIGhlaWdodDogMjMwcHg7XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUUyMTNBO1xcbn1cXG4udGVtcHN7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgcGFkZGluZzogN3B4O1xcbn1cXG4uZGF5IGg0e1xcbiAgICBmb250LXNpemU6IDIycHg7XFxufVxcbi50ZW1wU3RhdHVze1xcbiAgICB3aWR0aDogMTI1cHg7XFxuICAgIGhlaWdodDogMTI1cHg7XFxuICAgIHBhZGRpbmc6IDIwcHggMHB4IDE1cHggMHB4O1xcbn1cXG4vKi0tLS0tLS0tLS0tLS0tLS1oaWdodC1saWdodHMgQ1NTLS0tLS0tLS0qL1xcbi5oaWdodC1saWdodHN7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmhpZ2h7XFxuICAgIG1hcmdpbi1sZWZ0OiAyNTBweDtcXG59XFxuLm1vcmUtaW5mb3tcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICByb3ctZ2FwOiAyNXB4O1xcbiAgICBjb2x1bW4tZ2FwOiAyNXB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCA0MDBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjIwcHggMTI1cHg7XFxufVxcbi5tb3JlLWluZm8gaDV7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuLndpbmQsIC5odW1pZGl0eSwgLnZpc2liaWxpdHksIC5haXJ7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxRTIxM0E7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnZpc2liaWxpdHksIC5haXJ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmh1bWlkaXR5e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uaHVtaWRpdHkgaDUsIC5odW1pZGl0eSBoMntcXG4gICAgbWFyZ2luOiAxNXB4O1xcbn1cXG4ucHJvZ3Jlc3NpdmV7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNCwgMjE5LCAyMTkpO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5wcm9ncmVzc3tcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB3aWR0aDogODUlO1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVhNDAwO1xcbn1cXG4ucHJvZ3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ucGVyY0Rpc2N7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59IFxcbi5odW5kcmVke1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwcHg7XFxuICAgIGJvdHRvbTogLTEwcHg7XFxufVxcbi5uYXZlZ2F0aW9ue1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MywgOTAsIDkwKTtcXG4gICAgaGVpZ2h0OiA0NXB4O1xcbiAgICB3aWR0aDogNDVweDtcXG59XFxuLm5hdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5uYXYgaDV7XFxuICAgIG1hcmdpbjogN3B4O1xcbn1cXG5mb290ZXJ7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuZm9vdGVyIGF7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCl7XFxuICAgIC5tb3JlLWluZm97IFxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjIwcHggMjIwcHggMTI1cHggMTI1cHg7XFxuICAgIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpe1xcbiAgICBoNHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgfVxcbiAgICAubWFpbntcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG4gICAgLnNpZGVCYXJ7XFxuICAgICAgICB3aWR0aDogMTAwdm1pbjtcXG4gICAgICAgIGhlaWdodDogNjAwcHg7XFxuICAgIH1cXG4gICAgLmJvZHktcHJvamVjdHtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgICAgICB3aWR0aDogMTAwdm1pbjtcXG4gICAgfVxcbiAgICAubW9yZS1pbmZveyBcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDAwcHg7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIyMHB4IDIyMHB4IDEyNXB4IDEyNXB4O1xcbiAgICB9XFxuICAgIC5oaWdoe1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcbiAgICAudGVtcFN0YXR1c3tcXG4gICAgICAgIHdpZHRoOiAxMDBweDtcXG4gICAgICAgIGhlaWdodDogMTAwcHg7XFxuICAgIH1cXG4gICAgLmRheXtcXG4gICAgICAgIHdpZHRoOiAxMjVweDtcXG4gICAgfVxcbiAgICAuaW1hZ2VfMTB7XFxuICAgICAgICB3aWR0aDogMTcwcHg7XFxuICAgICAgICBoZWlnaHQ6IDE3MHB4O1xcbiAgICAgICAgbWFyZ2luOiAwcHggMHB4IDVweCAwcHg7XFxuICAgIH1cXG4gICAgLmRhdGUsIC5za3l7XFxuICAgICAgICBtYXJnaW46IDIwcHggMHB4IDIwcHggMHB4O1xcbiAgICB9XFxuICAgIC50ZW1wQ2l0eXtcXG4gICAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogNzBweDtcXG4gICAgICAgIG1hcmdpbjogMTBweCAwcHggMTBweCAwcHg7XFxuICAgIH1cXG4gICAgLnN0YXR1c3tcXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjAwMHB4KXtcXG4gICAgaDR7XFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YseUNBQXlDO0lBQ3pDLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFNBQVM7SUFDVCxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFNBQVM7SUFDVCxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQSxtQkFBbUI7QUFDbkI7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLFlBQVk7SUFD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QjtJQUNsQixpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0k7UUFDSSw0QkFBNEI7UUFDNUIsMkNBQTJDO0lBQy9DO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSxjQUFjO1FBQ2QsYUFBYTtJQUNqQjtJQUNBO1FBQ0ksU0FBUztRQUNULGFBQWE7UUFDYixjQUFjO0lBQ2xCO0lBQ0E7UUFDSSw0QkFBNEI7UUFDNUIsMkNBQTJDO0lBQy9DO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxZQUFZO1FBQ1osYUFBYTtJQUNqQjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksWUFBWTtRQUNaLGFBQWE7UUFDYix1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLHlCQUF5QjtJQUM3QjtJQUNBO1FBQ0ksWUFBWTtRQUNaLGVBQWU7UUFDZix5QkFBeUI7SUFDN0I7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKO0FBQ0E7SUFDSTtRQUNJLGVBQWU7SUFDbkI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5e1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmOyBcXG4gICAgY29sb3I6IHdoaXRlOyAgXFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcbip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcXG59XFxuYm9keSwgaHRtbHsgICAgXFxuICAgIG1hcmdpbjogMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcXG59XFxuYm9keXtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4vKkdlbmVyYWwgU2V0dGluZ3MqL1xcbnB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuaDF7XFxuICAgIGZvbnQtc2l6ZTogNjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG59XFxuaDJ7XFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG59XFxuaDN7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG59XFxuaDR7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG59XFxuaDV7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG59XFxuaDZ7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuLmJ0bntcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDc0LCA3MywgNzMpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4uYnRuLXNlYXJjaHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxufVxcbi5idG4tZ3Bze1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pY29uL2dwcy5wbmcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuLmdyb3VwLWJ1dHRvbntcXG4gICAgcGFkZGluZzogMHB4IDIwcHggMHB4IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5tYWlue1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7ICAgIFxcbiAgICBtYXJnaW46IDBweDsgIFxcbiAgICBwYWRkaW5nOiAwcHg7IFxcbiAgICAvKk5ldyB3YXkgdG8gU2hvdyB0aGUgaW5mb3JtYWN0aW9ucyovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMDBFMUQ7XFxufVxcbi8qIENTUyBhYm91dCBTaWRlIGJhciovXFxuLnNpZGVCYXJ7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIHdpZHRoOiAyNyU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxRTIxM0E7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgIFxcbn1cXG4uc2VhcmNoeyAgIFxcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxufVxcbi5zZWFyY2g6aG92ZXJ7XFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXG59XFxuLmJ0bi1jbG9zZXtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwcHg7XFxuICAgIHRvcDogMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ljb24vY2xvc2UucG5nKTtcXG59XFxuLypGb3JtIGFib3V0IFNlYXJjaCovXFxuLmZvcm17XFxuICAgIG1hcmdpbjogODBweCAwcHggNDBweCAwcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uY2l0eU5hbWV7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICBib3JkZXI6IHNvbGlkIHdoaXRlIDFweDtcXG4gICAgcGFkZGluZzogMnB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcbi5idXR0b25TZWFyY2h7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNSwgMCwgMTIzKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogNDVweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4uc3RhdHVzQ2l0eXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC13cmFwOiB3cmFwLXJldmVyc2U7XFxuICAgIGp1c3RpZnktY29udGVudDogYmFzZWxpbmU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uc3RhdHVze1xcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4udGVtcENpdHl7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogNzBweDtcXG4gICAgbWFyZ2luOiA2M3B4IDBweCA2M3B4IDBweDtcXG59XFxuLmxhc3R7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG59XFxuLmNvbnRhaW5lclNreXtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuLmNvbnRhaW5lckluZm97XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbi53ZWVrbHl7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxNCUpO1xcbn1cXG4ud2Vla3tcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaW1hZ2V7XFxuICAgIHBhZGRpbmc6IDNweDtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG59XFxuLmltYWdlXzEwe1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICAgIG1hcmdpbjogMHB4IDBweCAxMHB4IDBweDtcXG59XFxuLnJhaW5QZXJjZW50e1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbn1cXG4uYnRuLWluZm97XFxuICAgIG1hcmdpbi10b3A6IDNweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG5cXG59XFxuLmJ0bi1sZXNze1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5sb2NhdGlvbntcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDdweDtcXG59XFxuLmxvY2F0aW9uIGltZ3tcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbn1cXG4uZGF0ZSwgLnNreXtcXG4gICAgbWFyZ2luOiA1MHB4IDBweCA2MHB4IDBweDtcXG59XFxuLnZpc2libGV7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uaW52aXNpYmxle1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4vKi0tLS0tLS0tLS1Cb2R5IENzcy0tLS0tLS0tLS0qL1xcbi5ib2R5LXByb2plY3R7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMDBFMUQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmJ0bi1ncm91cC13aGVhdGVye1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAyMHB4O1xcbiAgICBtYXJnaW46IDUwcHg7XFxufVxcbi5idG4tdW5pdHl7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgbWFyZ2luOiA0cHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuLmJ0bi11bml0eTpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyLCAxMiwgMTIpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGVhdDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4uYnRuLWFjdGl2ZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoZWF0O1xcbiAgICBjb2xvcjogIzI1MjUyNTtcXG59XFxuLyotLS0tLS0tLS0tV2VlayBXZWF0aGVyLS0tLS0tLS0tKi9cXG4udGVtcC1kYXl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgbWFyZ2luOiAxNTBweCAwcHggNDBweCAwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4uZGF5e1xcbiAgICB3aWR0aDogMTc1cHg7XFxuICAgIGhlaWdodDogMjMwcHg7XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUUyMTNBO1xcbn1cXG4udGVtcHN7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgcGFkZGluZzogN3B4O1xcbn1cXG4uZGF5IGg0e1xcbiAgICBmb250LXNpemU6IDIycHg7XFxufVxcbi50ZW1wU3RhdHVze1xcbiAgICB3aWR0aDogMTI1cHg7XFxuICAgIGhlaWdodDogMTI1cHg7XFxuICAgIHBhZGRpbmc6IDIwcHggMHB4IDE1cHggMHB4O1xcbn1cXG4vKi0tLS0tLS0tLS0tLS0tLS1oaWdodC1saWdodHMgQ1NTLS0tLS0tLS0qL1xcbi5oaWdodC1saWdodHN7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmhpZ2h7XFxuICAgIG1hcmdpbi1sZWZ0OiAyNTBweDtcXG59XFxuLm1vcmUtaW5mb3tcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICByb3ctZ2FwOiAyNXB4O1xcbiAgICBjb2x1bW4tZ2FwOiAyNXB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCA0MDBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjIwcHggMTI1cHg7XFxufVxcbi5tb3JlLWluZm8gaDV7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuLndpbmQsIC5odW1pZGl0eSwgLnZpc2liaWxpdHksIC5haXJ7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxRTIxM0E7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnZpc2liaWxpdHksIC5haXJ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmh1bWlkaXR5e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uaHVtaWRpdHkgaDUsIC5odW1pZGl0eSBoMntcXG4gICAgbWFyZ2luOiAxNXB4O1xcbn1cXG4ucHJvZ3Jlc3NpdmV7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNCwgMjE5LCAyMTkpO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5wcm9ncmVzc3tcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB3aWR0aDogODUlO1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVhNDAwO1xcbn1cXG4ucHJvZ3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ucGVyY0Rpc2N7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59IFxcbi5odW5kcmVke1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwcHg7XFxuICAgIGJvdHRvbTogLTEwcHg7XFxufVxcbi5uYXZlZ2F0aW9ue1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MywgOTAsIDkwKTtcXG4gICAgaGVpZ2h0OiA0NXB4O1xcbiAgICB3aWR0aDogNDVweDtcXG59XFxuLm5hdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5uYXYgaDV7XFxuICAgIG1hcmdpbjogN3B4O1xcbn1cXG5mb290ZXJ7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuZm9vdGVyIGF7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCl7XFxuICAgIC5tb3JlLWluZm97IFxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjIwcHggMjIwcHggMTI1cHggMTI1cHg7XFxuICAgIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpe1xcbiAgICBoNHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgfVxcbiAgICAubWFpbntcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG4gICAgLnNpZGVCYXJ7XFxuICAgICAgICB3aWR0aDogMTAwdm1pbjtcXG4gICAgICAgIGhlaWdodDogNjAwcHg7XFxuICAgIH1cXG4gICAgLmJvZHktcHJvamVjdHtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgICAgICB3aWR0aDogMTAwdm1pbjtcXG4gICAgfVxcbiAgICAubW9yZS1pbmZveyBcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDAwcHg7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIyMHB4IDIyMHB4IDEyNXB4IDEyNXB4O1xcbiAgICB9XFxuICAgIC5oaWdoe1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcbiAgICAudGVtcFN0YXR1c3tcXG4gICAgICAgIHdpZHRoOiAxMDBweDtcXG4gICAgICAgIGhlaWdodDogMTAwcHg7XFxuICAgIH1cXG4gICAgLmRheXtcXG4gICAgICAgIHdpZHRoOiAxMjVweDtcXG4gICAgfVxcbiAgICAuaW1hZ2VfMTB7XFxuICAgICAgICB3aWR0aDogMTcwcHg7XFxuICAgICAgICBoZWlnaHQ6IDE3MHB4O1xcbiAgICAgICAgbWFyZ2luOiAwcHggMHB4IDVweCAwcHg7XFxuICAgIH1cXG4gICAgLmRhdGUsIC5za3l7XFxuICAgICAgICBtYXJnaW46IDIwcHggMHB4IDIwcHggMHB4O1xcbiAgICB9XFxuICAgIC50ZW1wQ2l0eXtcXG4gICAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogNzBweDtcXG4gICAgICAgIG1hcmdpbjogMTBweCAwcHggMTBweCAwcHg7XFxuICAgIH1cXG4gICAgLnN0YXR1c3tcXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjAwMHB4KXtcXG4gICAgaDR7XFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAgY2xvdWRTdGF0dXMgIGZyb20gJy4vcHJpbnQnO1xuaW1wb3J0IGRheU9mV2VlayBmcm9tICcuL21vZHVsZXMvZGF5T2ZXZWVrJztcbmltcG9ydCBtb3V0aE9mWWVhciBmcm9tICcuL21vZHVsZXMvbW91dGhPZlllYXInO1xuaW1wb3J0IHNvdXJjZUxvY2F0aW9uIGZyb20gJy4vaWNvbi9sb2NhdGlvbi5wbmcnO1xuXG5jb25zdCBzdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuc3RhdHVzJyk7XG5jb25zdCBjaXR5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xuY29uc3QgZGF0ZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbmNvbnN0IHN0YXR1c0NpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IHRlbXBDaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbmNvbnN0IHNreSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG5jb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgaWNvbkxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbmljb25Mb2NhdGlvbi5zcmMgPSBzb3VyY2VMb2NhdGlvbjtcbi8vdmFyIHN0YXR1cyA9ICdmZXcgY2xvdWRzJztcbmZ1bmN0aW9uIGhlYWRDaXR5KGNpdHksIHN0YXR1cywgdGVtcCkgeyAgICBcbiAgICBjcmVhdGVFbGVtKCk7XG4gICAgc3RhdHVzQ2l0eS5hcHBlbmRDaGlsZChjbG91ZFN0YXR1cyhzdGF0dXMsICdpbWFnZV8xMCcpKTtcbiAgICBzdGF0dXNDaXR5LmFwcGVuZENoaWxkKHRlbXBDaXR5KTsgXG4gICAgY2l0eVRpdGxlLmlubmVySFRNTCA9IGNpdHk7XG4gICAgdGVtcENpdHkuaW5uZXJIVE1MID0gYCR7dGVtcH1gOyAgICBcbiAgICBza3kuaW5uZXJIVE1MID0gYCR7c3RhdHVzfWBcbn1cbmZ1bmN0aW9uIGNyZWF0ZUVsZW0oKSB7XG4gICAgc3RhdHVzQ2l0eS5pbm5lckhUTUwgPSAnJztcblxuICAgIGNpdHlUaXRsZS5jbGFzc0xpc3QuYWRkKCdjaXR5Jyk7XG4gICAgZGF0ZVRpdGxlLmNsYXNzTGlzdC5hZGQoJ2RhdGUnKTtcbiAgICBzdGF0dXNDaXR5LmNsYXNzTGlzdC5hZGQoJ3N0YXR1c0NpdHknKTtcbiAgICB0ZW1wQ2l0eS5jbGFzc0xpc3QuYWRkKCd0ZW1wQ2l0eScpO1xuICAgIHNreS5jbGFzc0xpc3QuYWRkKCdza3knKTsgICAgXG4gICAgbG9jYXRpb24uY2xhc3NMaXN0LmFkZCgnbG9jYXRpb24nKTtcbiAgICAgICAgICAgXG4gICAgc3RhdHVzLmFwcGVuZENoaWxkKHN0YXR1c0NpdHkpO1xuICAgIHN0YXR1cy5hcHBlbmRDaGlsZChza3kpO1xuICAgIHN0YXR1cy5hcHBlbmRDaGlsZChkYXRlVGl0bGUpO1xuICAgIHN0YXR1cy5hcHBlbmRDaGlsZChsb2NhdGlvbik7XG5cbiAgICBsb2NhdGlvbi5hcHBlbmRDaGlsZChpY29uTG9jYXRpb24pO1xuICAgIGxvY2F0aW9uLmFwcGVuZENoaWxkKGNpdHlUaXRsZSk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrVGltZShpKSB7XG4gICAgaWYgKGkgPCAxMCkge1xuICAgICAgICBpID0gXCIwXCIgKyBpO1xuICAgIH1cbiAgICByZXR1cm4gaTtcbn1cblxuZnVuY3Rpb24gc3RhcnRUaW1lKCkge1xuICAgIHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgdmFyIGggPSB0b2RheS5nZXRIb3VycygpO1xuICAgIHZhciBtID0gdG9kYXkuZ2V0TWludXRlcygpO1xuICAgIC8vIGFkZCBhIHplcm8gaW4gZnJvbnQgb2YgbnVtYmVyczwxMFxuICAgIG0gPSBjaGVja1RpbWUobSk7XG4gICAgZGF0ZVRpdGxlLmlubmVySFRNTCA9IGRheU9mV2Vlayh0b2RheS5nZXREYXkoKSkgKyAnLCAnICsgdG9kYXkuZ2V0VVRDRGF0ZSgpICsgJyAnKyBtb3V0aE9mWWVhcih0b2RheS5nZXRNb250aCgpKSArICcgJyArIGggKyBcIjpcIiArIG07XG4gICAgdmFyIHQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3RhcnRUaW1lKClcbiAgICB9LCA1MDApO1xufVxuc3RhcnRUaW1lKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGhlYWRDaXR5OyIsImNvbnN0IGFpclZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDIuYWlyJyk7XG5cbmZ1bmN0aW9uIHNob3dBaXIodmFsdWUpe1xuICAgIGFpclZhbHVlLmlubmVySFRNTCA9IGAke3ZhbHVlfSBtYmBcbn1cbmV4cG9ydCBkZWZhdWx0IHNob3dBaXI7IiwiaW1wb3J0IGNsb3VkRGF5IGZyb20gIFwiLi4vaWNvbi9jbG91ZHktZGF5LnN2Z1wiO1xuaW1wb3J0IHN1biBmcm9tICBcIi4uL2ljb24vc3VuLnN2Z1wiO1xuaW1wb3J0IHJhaW55IGZyb20gIFwiLi4vaWNvbi9yYWlueS5zdmdcIjtcbmltcG9ydCBzbm93IGZyb20gIFwiLi4vaWNvbi9zbm93LnN2Z1wiO1xuaW1wb3J0IG1vb24gZnJvbSAgXCIuLi9pY29uL21vb24uc3ZnXCI7XG5pbXBvcnQgY2xvdWROaWdodCBmcm9tICAgXCIuLi9pY29uL2Nsb3VkeS1uaWdodC5zdmdcIjtcbmltcG9ydCB1bWJyZWxsYUljb24gZnJvbSBcIi4uL2ljb24vdW1icmVsbGEucG5nXCI7XG5pbXBvcnQgd2luZEljb24gZnJvbSBcIi4uL2ljb24vd2luZC5zdmdcIjtcbmltcG9ydCBodW1pZGl0eWljb24gZnJvbSBcIi4uL2ljb24vaHVtaWRpdHkuc3ZnXCI7XG5pbXBvcnQgbWlzdCBmcm9tIFwiLi4vaWNvbi9taXN0LnN2Z1wiO1xuXG5mdW5jdGlvbiBjbG91ZFN0YXR1cyhzdGF0dXNUZW1wLCBjbGFzc2xpKXtcbiAgICB2YXIgaG91ciA9IG5ldyBEYXRlKCkuZ2V0SG91cnMoKTtcbiAgICBjb25zdCBjbG91ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNsb3VkLmNsYXNzTGlzdC5hZGQoY2xhc3NsaSk7XG4gICAgaWYoaG91ciA+PSA1ICYmIGhvdXIgPCAxOCl7XG4gICAgICAgIHN3aXRjaChzdGF0dXNUZW1wKXtcbiAgICAgICAgICAgIGNhc2UgJ0NsZWFyJzogY2xvdWQuc3JjID0gc3VuOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0Nsb3Vkcyc6IGNsb3VkLnNyYyA9IGNsb3VkRGF5OyBicmVhazsgIFxuICAgICAgICAgICAgY2FzZSAnUmFpbic6IGNsb3VkLnNyYyA9IHJhaW55OyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1Nub3cnOiBjbG91ZC5zcmMgPSBzbm93OyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ01pc3QnOiBjbG91ZC5zcmMgPSBtaXN0OyBicmVhaztcbiAgICAgICAgfVxuICAgIH1lbHNle1xuICAgICAgICBzd2l0Y2goc3RhdHVzVGVtcCl7XG4gICAgICAgICAgICBjYXNlICdDbGVhcic6IGNsb3VkLnNyYyA9IG1vb247IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQ2xvdWRzJzogY2xvdWQuc3JjID0gY2xvdWROaWdodDsgYnJlYWs7IFxuICAgICAgICAgICAgY2FzZSAnUmFpbic6IGNsb3VkLnNyYyA9IHJhaW55IDsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdTbm93JzogY2xvdWQuc3JjID0gc25vdzsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdNaXN0JzogY2xvdWQuc3JjID0gbWlzdDsgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNsb3VkO1xufVxuZXhwb3J0IGRlZmF1bHQgY2xvdWRTdGF0dXM7IiwiZnVuY3Rpb24gY29udmVydGVyV2VhdGhlcih0ZW1wZXJhdHVyZSwgdW5pdHkpe1xuICAgIHN3aXRjaCh1bml0eSl7XG4gICAgICAgIGNhc2UgJ0NlbHNpdXMnIDogcmV0dXJuIHRlbXBlcmF0dXJlLTI3MyArICcgwrBDJzsgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0tlbHZpbicgOiByZXR1cm4gdGVtcGVyYXR1cmUgKyAnIMKwSyc7IGJyZWFrO1xuICAgICAgICBjYXNlICdGYWhyZW5oZWl0JyA6IHJldHVybiAoKCh0ZW1wZXJhdHVyZS0yNzMpKjEuOCkgKzMyKS50b0ZpeGVkKCkgKyAnIMKwRic7IGJyZWFrO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNvbnZlcnRlcldlYXRoZXI7IiwiZnVuY3Rpb24gZGF5T2ZXZWVrKG51bWJlcil7XG4gICAgdmFyIG5hbWVPZkRheSA9ICcnO1xuICAgIHN3aXRjaChudW1iZXIpe1xuICAgICAgICBjYXNlIDA6IG5hbWVPZkRheSA9ICdTdW4nOyBicmVhaztcbiAgICAgICAgY2FzZSAxOiBuYW1lT2ZEYXkgPSAnTW9uJzsgYnJlYWs7XG4gICAgICAgIGNhc2UgMjogbmFtZU9mRGF5ID0gJ1R1ZXMnOyBicmVhaztcbiAgICAgICAgY2FzZSAzOiBuYW1lT2ZEYXkgPSAnV2VkJzsgYnJlYWs7XG4gICAgICAgIGNhc2UgNDogbmFtZU9mRGF5ID0gJ1RodSc7IGJyZWFrO1xuICAgICAgICBjYXNlIDU6IG5hbWVPZkRheSA9ICdGcmknOyBicmVhaztcbiAgICAgICAgY2FzZSA2OiBuYW1lT2ZEYXkgPSAnU2F0JzsgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBuYW1lT2ZEYXk7XG59XG5leHBvcnQgZGVmYXVsdCBkYXlPZldlZWs7IiwiY29uc3QgZWxlbWVudEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuZm9ybS1ncm91cCcpO1xuY29uc3QgYnV0dG9uU2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uLmJ0bi1zZWFyY2gnKTtcbmNvbnN0IGJ1dHRvbkNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uLmJ0bi1jbG9zZScpO1xuY29uc3QgZWxlbWVudEluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuaW5mbycpO1xuY29uc3QgZWxlbWVudFNldGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYuc2V0Jyk7XG5jb25zdCBlbGVtZW50TGlzdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Rpdi5saXN0LWJ1dHRvbicpO1xuXG5mdW5jdGlvbiBkaXNwbGF5Rm9ybSgpe1xuICAgLyogXG4gICBTaG93IHRoZSBFbGVtZW50XG4gICAgKi9cbiAgIGJ1dHRvblNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgZWxlbWVudEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJyk7XG4gICAgZWxlbWVudEluZm8uY2xhc3NMaXN0LmFkZCgnaW52aXNpYmxlJyk7XG4gICAgZWxlbWVudEZvcm0uY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgfSk7XG4gICAvKlRha2luZyBBbGwgZWxlbWVudCB3aXRoIHRoaXMgQ2xhc3MgYW5kIHNldCB0aGVtIGZvciByZWNpZXZlICdpbnZpc2libGUnIGFuZCAnc2V0YScgY2xhc3NlcyovXG4gICBmb3IobGV0IGk9MDsgaTxlbGVtZW50U2V0YS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGVsZW1lbnRMaXN0QnV0dG9uW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsICgpPT57XG4gICAgICAgIGVsZW1lbnRTZXRhW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmlzaWJsZScpO1xuICAgICAgICBlbGVtZW50U2V0YVtpXS5jbGFzc0xpc3QuYWRkKCdzZXRhJyk7XG4gICAgICAgfSlcbiAgICAgICBlbGVtZW50TGlzdEJ1dHRvbltpXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpPT57XG4gICAgICAgIGVsZW1lbnRTZXRhW2ldLmNsYXNzTGlzdC5hZGQoJ2ludmlzaWJsZScpO1xuICAgICAgICBlbGVtZW50U2V0YVtpXS5jbGFzc0xpc3QucmVtb3ZlKCdzZXRhJyk7XG4gICAgICAgfSlcbiAgIH1cbiAgIC8qKlxuICAgICogSGlkZGVuIHRoZSBFbGVtZW50XG4gICAgKi9cbiAgIGJ1dHRvbkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICBlbGVtZW50Rm9ybS5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgZWxlbWVudEZvcm0uY2xhc3NMaXN0LmFkZCgnaW52aXNpYmxlJyk7XG4gICAgZWxlbWVudEluZm8uY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJyk7XG4gICAgZWxlbWVudEluZm8uY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgfSlcblxufVxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheUZvcm07IiwiY29uc3QgcHJvZ3Jlc3NIdW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5wcm9ncmVzcycpO1xuY29uc3QgdmFsb3JIdW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gyLmh1bWlkaXR5UCcpO1xuXG5mdW5jdGlvbiBodW1pZGl0eVNob3codmFsb3Ipe1xuICAgIHByb2dyZXNzSHVtaWRpdHkuc2V0QXR0cmlidXRlKCdzdHlsZScsIGB3aWR0aDogJHt2YWxvcn0lYCk7XG4gICAgdmFsb3JIdW1pZGl0eS5pbm5lckhUTUwgPSBgJHt2YWxvcn0lYDtcbn1cbmV4cG9ydCBkZWZhdWx0IGh1bWlkaXR5U2hvdzsiLCJmdW5jdGlvbiBtb3V0aE9mWWVhcihudW1iZXIpIHtcbiAgICB2YXIgbmFtZU9mTW91dGggPSAnIEphbic7XG4gICAgc3dpdGNoKG51bWJlcil7XG4gICAgICAgIGNhc2UgMDogbmFtZU9mTW91dGggPSAnSmFuJzsgYnJlYWs7XG4gICAgICAgIGNhc2UgMTogbmFtZU9mTW91dGggPSAnRmViJzsgYnJlYWs7XG4gICAgICAgIGNhc2UgMjogbmFtZU9mTW91dGggPSAnTWFyY2gnOyBicmVhaztcbiAgICAgICAgY2FzZSAzOiBuYW1lT2ZNb3V0aCA9ICdBcHJpbCc7IGJyZWFrO1xuICAgICAgICBjYXNlIDQ6IG5hbWVPZk1vdXRoID0gJ01heSc7IGJyZWFrO1xuICAgICAgICBjYXNlIDU6IG5hbWVPZk1vdXRoID0gJ0p1bmUnOyBicmVhaztcbiAgICAgICAgY2FzZSA2OiBuYW1lT2ZNb3V0aCA9ICdKdWx5JzsgYnJlYWs7XG4gICAgICAgIGNhc2UgNzogbmFtZU9mTW91dGggPSAnQXVnJzsgYnJlYWs7XG4gICAgICAgIGNhc2UgODogbmFtZU9mTW91dGggPSAnU2VwdCc7IGJyZWFrO1xuICAgICAgICBjYXNlIDk6IG5hbWVPZk1vdXRoID0gJ09jdCc7IGJyZWFrO1xuICAgICAgICBjYXNlIDEwOiBuYW1lT2ZNb3V0aCA9ICdOb3YnOyBicmVhaztcbiAgICAgICAgY2FzZSAxMTogbmFtZU9mTW91dGggPSAnRGVjJzsgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBuYW1lT2ZNb3V0aDtcbn1cbmV4cG9ydCBkZWZhdWx0IG1vdXRoT2ZZZWFyOyIsImltcG9ydCB7IHdlYXRoZXJVbml0eSB9IGZyb20gXCIuL3dlYXRoZXJJbml0XCI7XG5cbmNvbnN0IGNpdHlOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQuY2l0eU5hbWUnKTtcbmNvbnN0IGJ0blNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5idXR0b25TZWFyY2gnKTtcbmNvbnN0IGVsZW1lbnRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LmZvcm0tZ3JvdXAnKTtcbmNvbnN0IGVsZW1lbnRJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LmluZm8nKTtcblxuZnVuY3Rpb24gc2VhcmNoKCkge1xuICAgIGJ0blNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgIGlmKGNpdHlOYW1lLnZhbHVlLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgICAgICBhbGVydCgnV3JpdGUgVGhlIG5hbWUgb2YgY2l0eScpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdmFyIGNpdHkgPSBjaXR5TmFtZS52YWx1ZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGNpdHlOYW1lLnZhbHVlLnNsaWNlKDEpO1xuICAgICAgICAgICAgZWxlbWVudEZvcm0uY2xhc3NMaXN0LmFkZCgnaW52aXNpYmxlJyk7XG4gICAgICAgICAgICBlbGVtZW50SW5mby5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKTtcbiAgICAgICAgICAgIHdlYXRoZXJVbml0eShjaXR5KTtcbiAgICAgICAgICAgIGNpdHlOYW1lLnZhbHVlPScnO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH0pXG59XG5leHBvcnQgZGVmYXVsdCBzZWFyY2g7IiwiY29uc3QgdmlzaWJpbGl0eVZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDIudmlzaWJpbGl0eScpO1xuXG5mdW5jdGlvbiBzaG93VmlzaWJpbGl0eSh2YWx1ZSl7XG4gICAgdmlzaWJpbGl0eVZhbHVlLmlubmVySFRNTCA9IGAke3ZhbHVlfSBtaWxlc2Bcbn1cbmV4cG9ydCBkZWZhdWx0IHNob3dWaXNpYmlsaXR5OyIsImltcG9ydCBjb252ZXJ0ZXJXZWF0aGVyIGZyb20gXCIuL2NvbnZlcnRlcldlYXRoZXJcIjtcbmltcG9ydCBoZWFkQ2l0eSBmcm9tIFwiLi4vaGVhZFwiO1xuaW1wb3J0IGh1bWlkaXR5U2hvdyBmcm9tIFwiLi9odW1pZGl0eVwiO1xuaW1wb3J0IHNob3dBaXIgZnJvbSBcIi4vYWlyXCI7XG5pbXBvcnQgc2hvd1Zpc2liaWxpdHkgZnJvbSBcIi4vdmlzaWJpbGl0eVwiO1xuaW1wb3J0IHsgd2VhdGhlckRhaWx5LCB3ZWVrVGltZWxpbmUsIHNob3dUZW1wTWF4TWluIH0gZnJvbSBcIi4uL3dlZWtseVwiO1xuaW1wb3J0IHdpbmRTaG93IGZyb20gXCIuL3dpbmRcIjtcblxuY29uc3QgYnV0dG9uQ2Vsc2l1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1bml0eS0xJyk7XG5jb25zdCBidXR0b25GYWhyZW5oZWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VuaXR5LTInKTtcbmNvbnN0IGJ1dHRvbktlbHZpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1bml0eS0zJyk7XG5cbi8vS2V5IE9mIEFQSVxudmFyIGtleSA9ICdhNGFkNjQ0MTA1OTVhMjAzNmQwMTMzMzkxNDJkNDY4NCc7XG52YXIgY2l0eURhdGEgPSAwO1xudmFyIGRhaWx5RGF0YSA9IDA7XG52YXIgdW5pdHkgPSAnQ2Vsc2l1cyc7XG5cbmFzeW5jIGZ1bmN0aW9uIHdlYXRoZXJVbml0eShjaXR5KSB7XG4gICAgLyoqLS0tLS0tLS0tLS1BcGkgSW5pdC0tLS0tLS0tLS0tLS0gKi9cbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9JHtrZXl9YCwgeyBtb2RlOiAnY29ycycgfSk7XG4gICAgICAgIGNpdHlEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zdCBkYWlseSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbD9sYXQ9JHtjaXR5RGF0YS5jb29yZC5sYXR9Jmxvbj0ke2NpdHlEYXRhLmNvb3JkLmxvbi50b0ZpeGVkKCl9JmV4Y2x1ZGU9d2Vla2x5JmFwcGlkPSR7a2V5fWAsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgICAgXG4gICAgICAgIGRhaWx5RGF0YSA9IGF3YWl0IGRhaWx5Lmpzb24oKTtcbiAgICAgICAgdmFyIHJlYWxUZW1wZXJhdHVyZSA9IHBhcnNlSW50KGNpdHlEYXRhLm1haW4uZmVlbHNfbGlrZSwgMTApO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGFsZXJ0KCdFcnJvciEgVmVyaWZ5IHlvdXIgQ29ubmVjdGlvbiBvciBDaXR5IE5vdCBGb3VuZCEnKVxuICAgIH1cblxuICAgIC8qKi0tLS0tLS1Jbml0aWFsaXphdGlvbiBvZiBGdW5jdGlvbnMtLS0tLS0tLS0tLSAqL1xuICAgIHZhciBodW1pZGl0eVZhbHVlID0gY2l0eURhdGEubWFpbi5odW1pZGl0eTtcbiAgICB3ZWVrVGltZWxpbmUoKTtcbiAgICBoZWFkQ2l0eShjaXR5RGF0YS5uYW1lLCBjaXR5RGF0YS53ZWF0aGVyWzBdLm1haW4sIGNvbnZlcnRlcldlYXRoZXIocmVhbFRlbXBlcmF0dXJlLCB1bml0eSkpO1xuICAgIGh1bWlkaXR5U2hvdyhodW1pZGl0eVZhbHVlKTtcbiAgICBzaG93QWlyKGNpdHlEYXRhLm1haW4ucHJlc3N1cmUpO1xuICAgIHNob3dWaXNpYmlsaXR5KGNpdHlEYXRhLnZpc2liaWxpdHkgLyAxMDAwKTtcbiAgICBtYXhNaW5TaG93KCk7XG4gICAgc2hvd1N0YXR1cygpO1xuICAgIHdpbmRTaG93KGNpdHlEYXRhLndpbmQuc3BlZWQgLGNpdHlEYXRhLndpbmQuZGVnKVxuXG4gICAgYnV0dG9uQ2Vsc2l1cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgYnV0dG9uRmFocmVuaGVpdC5jbGFzc0xpc3QucmVtb3ZlKCdidG4tYWN0aXZlJyk7XG4gICAgICAgIGJ1dHRvbktlbHZpbi5jbGFzc0xpc3QucmVtb3ZlKCdidG4tYWN0aXZlJyk7XG4gICAgICAgIGJ1dHRvbkNlbHNpdXMuY2xhc3NMaXN0LmFkZCgnYnRuLWFjdGl2ZScpO1xuICAgICAgICB1bml0eSA9ICdDZWxzaXVzJztcbiAgICAgICAgaGVhZENpdHkoY2l0eURhdGEubmFtZSwgY2l0eURhdGEud2VhdGhlclswXS5tYWluLCBjb252ZXJ0ZXJXZWF0aGVyKHJlYWxUZW1wZXJhdHVyZSwgdW5pdHkpKTtcbiAgICAgICAgbWF4TWluU2hvdygpO1xuICAgIH0pO1xuICAgIGJ1dHRvbkZhaHJlbmhlaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGJ1dHRvbkNlbHNpdXMuY2xhc3NMaXN0LnJlbW92ZSgnYnRuLWFjdGl2ZScpO1xuICAgICAgICBidXR0b25LZWx2aW4uY2xhc3NMaXN0LnJlbW92ZSgnYnRuLWFjdGl2ZScpO1xuICAgICAgICBidXR0b25GYWhyZW5oZWl0LmNsYXNzTGlzdC5hZGQoJ2J0bi1hY3RpdmUnKTtcbiAgICAgICAgdW5pdHkgPSAnRmFocmVuaGVpdCc7XG4gICAgICAgIGhlYWRDaXR5KGNpdHlEYXRhLm5hbWUsIGNpdHlEYXRhLndlYXRoZXJbMF0ubWFpbiwgY29udmVydGVyV2VhdGhlcihyZWFsVGVtcGVyYXR1cmUsIHVuaXR5KSk7XG4gICAgICAgIG1heE1pblNob3coKTtcbiAgICB9KTtcbiAgICBidXR0b25LZWx2aW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGJ1dHRvbkZhaHJlbmhlaXQuY2xhc3NMaXN0LnJlbW92ZSgnYnRuLWFjdGl2ZScpO1xuICAgICAgICBidXR0b25DZWxzaXVzLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi1hY3RpdmUnKTtcbiAgICAgICAgYnV0dG9uS2VsdmluLmNsYXNzTGlzdC5hZGQoJ2J0bi1hY3RpdmUnKTtcbiAgICAgICAgdW5pdHkgPSAnS2VsdmluJztcbiAgICAgICAgaGVhZENpdHkoY2l0eURhdGEubmFtZSwgY2l0eURhdGEud2VhdGhlclswXS5tYWluLCBjb252ZXJ0ZXJXZWF0aGVyKHJlYWxUZW1wZXJhdHVyZSwgdW5pdHkpKTtcbiAgICAgICAgbWF4TWluU2hvdygpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBtYXhNaW5TaG93KCl7XG4gICAgdmFyIGNvdW50ID0gMTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDU7IGorKykgeyBcbiAgICAgICAgc2hvd1RlbXBNYXhNaW4odW5pdHksIGRhaWx5RGF0YS5kYWlseVtjb3VudF0udGVtcC5tYXgsIGRhaWx5RGF0YS5kYWlseVtjb3VudF0udGVtcC5taW4sIGopO1xuICAgICAgICBjb3VudCsrO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHNob3dTdGF0dXMoKXtcbiAgICB2YXIgY291bnQgPSAxO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgNTsgaisrKSB7IFxuICAgICAgICB3ZWF0aGVyRGFpbHkoZGFpbHlEYXRhLmRhaWx5W2NvdW50XS53ZWF0aGVyWzBdLm1haW4sIGopO1xuICAgICAgICBjb3VudCsrO1xuICAgIH1cbn1cbmV4cG9ydCB7IHdlYXRoZXJVbml0eSB9OyIsImltcG9ydCBzb3VyY2VOYXYgZnJvbSAnLi4vaWNvbi9uYXZlZ2FjYW8ucG5nJztcblxuY29uc3QgaW1nTmF2ZWdhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZy5uYXZlZ2F0aW9uJyk7XG5jb25zdCB3aW5kRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gyLndpbmQnKTtcbmltZ05hdmVnYXRpb24uc3JjID0gc291cmNlTmF2O1xuXG5mdW5jdGlvbiB3aW5kU2hvdyhzcGVlZCwgZGVncmF1KXtcbiAgICBpbWdOYXZlZ2F0aW9uLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgdHJhbnNmb3JtOiByb3RhdGUoJHtkZWdyYXV9ZGVnKWApO1xuICAgIHdpbmRFbGVtZW50LmlubmVySFRNTCA9IGAke3NwZWVkfSBtcGhgO1xufVxuZXhwb3J0IGRlZmF1bHQgd2luZFNob3c7IiwiaW1wb3J0IGNsb3VkRGF5IGZyb20gIFwiLi9pY29uL2Nsb3VkeS1kYXkuc3ZnXCI7XG5pbXBvcnQgc3VuIGZyb20gIFwiLi9pY29uL3N1bi5zdmdcIjtcbmltcG9ydCByYWlueSBmcm9tICBcIi4vaWNvbi9yYWlueS5zdmdcIjtcbmltcG9ydCBzbm93IGZyb20gIFwiLi9pY29uL3Nub3cuc3ZnXCI7XG5pbXBvcnQgbW9vbiBmcm9tICBcIi4vaWNvbi9tb29uLnN2Z1wiO1xuaW1wb3J0IGNsb3VkTmlnaHQgZnJvbSAgIFwiLi9pY29uL2Nsb3VkeS1uaWdodC5zdmdcIjtcbmltcG9ydCB1bWJyZWxsYUljb24gZnJvbSBcIi4vaWNvbi91bWJyZWxsYS5wbmdcIjtcbmltcG9ydCB3aW5kSWNvbiBmcm9tIFwiLi9pY29uL3dpbmQuc3ZnXCI7XG5pbXBvcnQgaHVtaWRpdHlpY29uIGZyb20gXCIuL2ljb24vaHVtaWRpdHkuc3ZnXCI7XG5pbXBvcnQgbWlzdCBmcm9tIFwiLi9pY29uL21pc3Quc3ZnXCI7XG5leHBvcnQgZGVmYXVsdCBjbG91ZFN0YXR1cztcblxuY29uc3QgZGF0YSA9IG5ldyBEYXRlKCk7XG5jb25zdCBob3VyID0gZGF0YS5nZXRIb3VycygpXG5cbmZ1bmN0aW9uIGNsb3VkU3RhdHVzKHN0YXR1c1RlbXAsIGNsYXNzbGkpe1xuICAgIGNvbnN0IGNsb3VkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY2xvdWQuY2xhc3NMaXN0LmFkZChjbGFzc2xpKTtcbiAgICBpZihob3VyID49IDUgJiYgaG91ciA8IDE4KXtcbiAgICAgICAgc3dpdGNoKHN0YXR1c1RlbXApe1xuICAgICAgICAgICAgY2FzZSAnQ2xlYXInOiBjbG91ZC5zcmMgPSBzdW47IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQ2xvdWRzJzogY2xvdWQuc3JjID0gY2xvdWREYXk7IGJyZWFrOyAgXG4gICAgICAgICAgICBjYXNlICdSYWluJzogY2xvdWQuc3JjID0gcmFpbnk7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnU25vdyc6IGNsb3VkLnNyYyA9IHNub3c7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnTWlzdCc6IGNsb3VkLnNyYyA9IG1pc3Q7IGJyZWFrO1xuICAgICAgICB9XG4gICAgfWVsc2V7XG4gICAgICAgIHN3aXRjaChzdGF0dXNUZW1wKXtcbiAgICAgICAgICAgIGNhc2UgJ0NsZWFyJzogY2xvdWQuc3JjID0gbW9vbjsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdDbG91ZHMnOiBjbG91ZC5zcmMgPSBjbG91ZE5pZ2h0OyBicmVhazsgXG4gICAgICAgICAgICBjYXNlICdSYWluJzogY2xvdWQuc3JjID0gcmFpbnkgOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1Nub3cnOiBjbG91ZC5zcmMgPSBzbm93OyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ01pc3QnOiBjbG91ZC5zcmMgPSBtaXN0OyBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY2xvdWQ7XG59XG5cblxuXG5cbiIsImltcG9ydCBkYXlPZldlZWsgZnJvbSBcIi4vbW9kdWxlcy9kYXlPZldlZWtcIjtcbmltcG9ydCBtb3V0aE9mWWVhciBmcm9tIFwiLi9tb2R1bGVzL21vdXRoT2ZZZWFyXCI7XG5pbXBvcnQgY2xvdWRTdGF0dXMgZnJvbSBcIi4vbW9kdWxlcy9jbG91ZFN0YXR1c1wiO1xuaW1wb3J0IGNvbnZlcnRlcldlYXRoZXIgZnJvbSBcIi4vbW9kdWxlcy9jb252ZXJ0ZXJXZWF0aGVyXCI7XG5cbmNvbnN0IGRhdGVUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaDQuZGF0ZVRlbXAnKTtcbmNvbnN0IHRlbXBTdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYudGVtcFN0YXR1cy0xJyk7XG5jb25zdCB0ZW1wTWF4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaDQudGVtcE1heCcpO1xuY29uc3QgdGVtcE1pbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2g0LnRlbXBNaW4nKTtcblxuZnVuY3Rpb24gd2Vla1RpbWVsaW5lKCkge1xuXG4gICAgdmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICB2YXIgayA9IDE7XG4gICAgdmFyIGluY3JlbWV0RGF5ID0gMTtcbiAgICB2YXIgZGF5T2ZNb3V0aCA9IHRvZGF5LmdldFVUQ0RhdGUoKSArIGluY3JlbWV0RGF5O1xuICAgIHZhciBkYXkgPSB0b2RheS5nZXREYXkoKTtcblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgNTsgaisrKSB7XG4gICAgICAgIGRheU9mTW91dGggPSB0b2RheS5nZXRVVENEYXRlKCkgKyBpbmNyZW1ldERheTtcbiAgICAgICAgaWYgKGRheSArIGsgPD0gNikge1xuICAgICAgICAgICAgZGF0ZVRlbXBbal0uaW5uZXJUZXh0ID0gZGF5T2ZXZWVrKGRheSArIGspICsgJywgJyArIGRheU9mTW91dGggKyAnICcgKyBtb3V0aE9mWWVhcih0b2RheS5nZXRNb250aCgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGsgPSAwXG4gICAgICAgICAgICBkYXRlVGVtcFtqXS5pbm5lclRleHQgPSBkYXlPZldlZWsoaykgKyAnLCAnICsgZGF5T2ZNb3V0aCArICcgJyArIG1vdXRoT2ZZZWFyKHRvZGF5LmdldE1vbnRoKCkpO1xuICAgICAgICAgICAgZGF5ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpbmNyZW1ldERheSsrXG4gICAgICAgIGsrKztcbiAgICB9XG5cblxufVxuZnVuY3Rpb24gd2VhdGhlckRhaWx5KHN0YXR1cywgY291bnQpIHtcbiAgICB0ZW1wU3RhdHVzW2NvdW50XS5pbm5lckhUTUwgPSAnICc7XG4gICAgdGVtcFN0YXR1c1tjb3VudF0uYXBwZW5kQ2hpbGQoY2xvdWRTdGF0dXMoc3RhdHVzLCAndGVtcFN0YXR1cycpKTtcbn1cbmZ1bmN0aW9uIHNob3dUZW1wTWF4TWluKHVuaXR5LCB0TWF4LCB0TWluLCBjb3VudCkge1xuICAgIHRlbXBNYXhbY291bnRdLmlubmVySFRNTCA9IGNvbnZlcnRlcldlYXRoZXIodE1heC50b0ZpeGVkKCksIHVuaXR5KTtcbiAgICB0ZW1wTWluW2NvdW50XS5pbm5lckhUTUwgPSBjb252ZXJ0ZXJXZWF0aGVyKHRNaW4udG9GaXhlZCgpIC0gMSwgdW5pdHkpO1xufVxuZXhwb3J0IHsgd2Vla1RpbWVsaW5lLCB3ZWF0aGVyRGFpbHksIHNob3dUZW1wTWF4TWluIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgc2VhcmNoIGZyb20gJy4vbW9kdWxlcy9zZWFyY2gnO1xuaW1wb3J0IGRpc3BsYXlGb3JtIGZyb20gJy4vbW9kdWxlcy9oaWRkZW5FbGVtZW50JztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHt3ZWF0aGVyVW5pdHl9IGZyb20gJy4vbW9kdWxlcy93ZWF0aGVySW5pdCc7XG5cbmNvbnN0IGdwc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5idG4tZ3BzJyk7XG52YXIga2V5ID0gJ2E0YWQ2NDQxMDU5NWEyMDM2ZDAxMzMzOTE0MmQ0Njg0JztcbnZhciBjaXR5ID0gJ0x1YW5kYSc7XG5cbndlYXRoZXJVbml0eShjaXR5KTtcbmRpc3BsYXlGb3JtKCk7XG5zZWFyY2goKTtcbi8qKi0tLS0tLS0tLS0tLS0tR1BTIEZ1bmN0aW9uLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbmdwc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihzdWNlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XG59KVxuIGNvbnN0ICBzdWNlc3NDYWxsYmFjayA9IGFzeW5jIChwb3NpdGlvbikgPT57XG4gICAgY29uc3QgZGFpbHkgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7cG9zaXRpb24uY29vcmRzLmxhdGl0dWRlLnRvRml4ZWQoNCl9Jmxvbj0ke3Bvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGUudG9GaXhlZCgzKX0mZXhjbHVkZT13ZWVrbHkmYXBwaWQ9JHtrZXl9YCwgeyBtb2RlOiAnY29ycycgfSk7XG4gICAgY29uc3QgZGF0YURheSA9IGF3YWl0IGRhaWx5Lmpzb24oKTtcbiAgICBjb25zdCB0aW1lWm9uZSA9IChkYXRhRGF5LnRpbWV6b25lKS5zcGxpdCgnLycpO1xuICAgIHdlYXRoZXJVbml0eSh0aW1lWm9uZVsxXSk7XG59XG5jb25zdCBlcnJvckNhbGxiYWNrID0gKGVycm9yKT0+e1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=