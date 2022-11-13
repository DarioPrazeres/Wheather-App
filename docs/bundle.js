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
___CSS_LOADER_EXPORT___.push([module.id, "body{\n    margin: 0;\n    padding: 0;\n    font-family: Arial, Helvetica, sans-serif; \n    color: white;  \n    font-weight: 100;\n}\n*{\n    margin: 0;\n    letter-spacing: 0px;\n}\nbody, html{    \n    margin: 0;\n    letter-spacing: 0px;\n}\nbody{\n    height: 100%;\n}\n/*General Settings*/\np{\n    font-size: 16px;\n}\nh1{\n    font-size: 60px;\n    font-weight: 100;\n}\nh2{\n    font-size: 50px;\n    font-weight: 100;\n}\nh3{\n    font-size: 40px;\n    font-weight: 100;\n}\nh4{\n    font-size: 30px;\n    font-weight: 100;\n}\nh5{\n    font-size: 20px;\n    font-weight: 100;\n}\nh6{\n    font-size: 15px;\n    font-weight: 400;\n}\n.btn{\n    padding: 10px;\n    background: rgb(74, 73, 73);\n    color: white;\n    border: none;\n    font-size: 16px;\n}\n.btn-search{\n    width: 150px;\n    height: 50px;\n}\n.btn-gps{\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: contain;\n    background-repeat: no-repeat;\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n}\n.group-button{\n    padding: 0px 20px 0px 20px;\n    display: flex;\n    justify-content: center;\n    justify-content: space-between;\n}\n.main{\n    height: 100vh;\n    width: 100vw;    \n    margin: 0px;  \n    padding: 0px; \n    /*New way to Show the informactions*/\n    display: flex;\n    background-color: #100E1D;\n}\n/* CSS about Side bar*/\n.sideBar{\n    padding: 15px;\n    width: 27%;\n    background-color: #1E213A;\n    position: relative;  \n}\n.search{   \n    height: 30px;\n    border: none;\n    background: none;\n    color: white;\n    font-size: 15px;\n}\n.search:hover{\n    font-size: 17px;\n}\n.btn-close{\n    width: 50px;\n    height: 50px;\n    border: none;\n    position: absolute;\n    right: 0px;\n    top: 0px;\n    background-color: rgba(0, 0, 0, 0);\n    background-size: contain;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n/*Form about Search*/\n.form{\n    margin: 80px 0px 40px 0px;\n    padding: 5px;\n    display: flex;\n    justify-content: space-evenly;\n    justify-content: center;\n    align-items: center;\n}\n.cityName{\n    width: 250px;\n    height: 35px;\n    border: solid white 1px;\n    padding: 2px;\n    font-size: 16px;\n    color: white;\n    background: none;\n    margin-right: 5px;\n}\n.buttonSearch{\n    padding: 10px;\n    background-color: rgb(25, 0, 123);\n    border: none;\n    width: 100px;\n    height: 45px;\n    font-size: 16px;\n}\n.statusCity{\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap-reverse;\n    justify-content: baseline;\n    align-items: center;\n    justify-content: center;\n}\n.status{\n    padding-top: 50px;\n    text-align: center;\n}\n.tempCity{\n    padding: 10px;\n    font-size: 70px;\n    margin: 63px 0px 63px 0px;\n}\n.last{\n    border-right: none;\n}\n.containerSky{\n    display: flex;\n}\n.containerInfo{\n    display: flex;\n}\n.weekly{\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(7, 14%);\n}\n.week{\n    text-align: center;\n}\n\n.image{\n    padding: 3px;\n    width: 40px;\n    height: 40px;\n}\n.image_10{\n    width: 250px;\n    height: 250px;\n    margin: 0px 0px 10px 0px;\n}\n.rainPercent{\n    margin-left: 5px;\n}\n.btn-info{\n    margin-top: 3px;\n    width: 100px;\n    height: 40px;\n    border: none;\n\n}\n.btn-less{\n    margin: 5px;\n    width: 100px;\n    height: 30px;\n    display: none;\n}\n.location{\n    margin-top: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 7px;\n}\n.location img{\n    height: 30px;\n}\n.date, .sky{\n    margin: 50px 0px 60px 0px;\n}\n.visible{\n    display: block;\n}\n.invisible{\n    display: none;\n}\n/*----------Body Css----------*/\n.body-project{\n    width: 70%;\n    background-color: #100E1D;\n    position: relative;\n}\n.btn-group-wheater{\n    position: absolute;\n    right: 20px;\n    margin: 50px;\n}\n.btn-unity{\n    border-radius: 50%;\n    margin: 4px;\n    height: 50px;\n    width: 50px;\n    font-size: 18px;\n}\n.btn-unity:hover{\n    background-color: rgb(12, 12, 12);\n    border: 1px solid wheat;\n    color: white;\n}\n.btn-active{\n    background-color: white;\n    border: 1px solid wheat;\n    color: #252525;\n}\n/*----------Week Weather---------*/\n.temp-day{\n    display: flex;\n    flex-wrap: wrap;\n    margin: 150px 0px 40px 0px;\n    justify-content: space-around;\n}\n.day{\n    width: 175px;\n    height: 230px;\n    margin: 5px;\n    padding: 15px;\n    border-radius: 3px;\n    flex-direction: column;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: #1E213A;\n}\n.temps{\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    padding: 7px;\n}\n.day h4{\n    font-size: 22px;\n}\n.tempStatus{\n    width: 125px;\n    height: 125px;\n    padding: 20px 0px 15px 0px;\n}\n/*----------------hight-lights CSS--------*/\n.hight-lights{\n    width: 100%;\n    display: flex;\n    text-align: left;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n.high{\n    margin-left: 250px;\n}\n.more-info{\n    display: grid;\n    padding: 8px;\n    row-gap: 25px;\n    column-gap: 25px;\n    grid-template-columns: repeat(2, 400px);\n    grid-template-rows: 220px 125px;\n}\n.more-info h5{\n    font-size: 24px;\n}\n.wind, .humidity, .visibility, .air{\n    padding: 5px;\n    background-color: #1E213A;\n    text-align: center;\n}\n.visibility, .air{\n    text-align: center;\n}\n.humidity{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.humidity h5, .humidity h2{\n    margin: 7px;\n}\n.progressive{\n    margin: 10px;\n    width: 250px;\n    height: 10px;\n    border-radius: 5px;\n    background-color: rgb(224, 219, 219);\n    position: relative;\n}\n.progress{\n    border-radius: 5px;\n    width: 85%;\n    height: 10px;\n    position: absolute;\n    left: 0px;\n    background-color: #fea400;\n}\n.prog{\n    display: flex;\n    flex-direction: column;\n    position: relative;\n}\n.percDisc{\n    display: flex;\n    justify-content: space-between;\n} \n.hundred{\n    position: absolute;\n    right: 0px;\n    bottom: -10px;\n}\n.navegation{\n    border-radius: 50%;\n    background-color: rgb(93, 90, 90);\n    height: 45px;\n    width: 45px;\n}\n.nav{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.nav h5{\n    margin: 7px;\n}\nfooter{\n    margin-top: 15px;\n    text-align: center;\n}\nfooter a{\n    color: white;\n    font-weight: 400;\n}\n\n@media only screen and (max-width: 1600px){\n    h4{\n        font-size: 16px;\n    }\n    .main{\n        width: 100%;\n        flex-direction: column;\n    }\n    .sideBar{\n        width: 100%;\n        height: 800px;\n    }\n    .body-project{\n        width: 100%;\n        margin: 0;\n        padding: 15px;\n    }\n    .high{\n        margin-left: 0px;\n        text-align: center;\n    }\n    .tempStatus{\n        width: 100px;\n        height: 100px;\n    }\n    .day{\n        width: 125px;\n    }\n    .image_10{\n        width: 150px;\n        height: 150px;\n        margin: 0px 0px 5px 0px;\n    }\n    .date, .sky{\n        margin: 10px 0px 10px 0px;\n    }\n    .tempCity{\n        padding: 2px;\n        font-size: 70px;\n        margin: 10px 0px 0px 0px;\n    }\n    .status{\n        padding-top: 5px;\n    }\n}\n@media only screen and (max-width: 2000px){\n    h4{\n        font-size: 16px;\n    }\n    .day{\n        width: 125px;\n    }\n    .main{\n        height: 900px;\n    }\n    .more-info{ \n        grid-template-columns: 320px 320px;\n        grid-template-rows: 210px 100px;\n    }\n}\n@media only screen and (max-width: 800px){\n    .more-info{ \n        grid-template-columns: 300px;\n        grid-template-rows: 220px 220px 125px 125px;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,yCAAyC;IACzC,YAAY;IACZ,gBAAgB;AACpB;AACA;IACI,SAAS;IACT,mBAAmB;AACvB;AACA;IACI,SAAS;IACT,mBAAmB;AACvB;AACA;IACI,YAAY;AAChB;AACA,mBAAmB;AACnB;IACI,eAAe;AACnB;AACA;IACI,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,2BAA2B;IAC3B,YAAY;IACZ,YAAY;IACZ,eAAe;AACnB;AACA;IACI,YAAY;IACZ,YAAY;AAChB;AACA;IACI,yDAAqC;IACrC,wBAAwB;IACxB,4BAA4B;IAC5B,WAAW;IACX,YAAY;IACZ,kBAAkB;AACtB;AACA;IACI,0BAA0B;IAC1B,aAAa;IACb,uBAAuB;IACvB,8BAA8B;AAClC;AACA;IACI,aAAa;IACb,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,oCAAoC;IACpC,aAAa;IACb,yBAAyB;AAC7B;AACA,sBAAsB;AACtB;IACI,aAAa;IACb,UAAU;IACV,yBAAyB;IACzB,kBAAkB;AACtB;AACA;IACI,YAAY;IACZ,YAAY;IACZ,gBAAgB;IAChB,YAAY;IACZ,eAAe;AACnB;AACA;IACI,eAAe;AACnB;AACA;IACI,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,UAAU;IACV,QAAQ;IACR,kCAAkC;IAClC,wBAAwB;IACxB,yDAAuC;AAC3C;AACA,oBAAoB;AACpB;IACI,yBAAyB;IACzB,YAAY;IACZ,aAAa;IACb,6BAA6B;IAC7B,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,YAAY;IACZ,uBAAuB;IACvB,YAAY;IACZ,eAAe;IACf,YAAY;IACZ,gBAAgB;IAChB,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,iCAAiC;IACjC,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,eAAe;AACnB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,yBAAyB;IACzB,mBAAmB;IACnB,uBAAuB;AAC3B;AACA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,eAAe;IACf,yBAAyB;AAC7B;AACA;IACI,kBAAkB;AACtB;AACA;IACI,aAAa;AACjB;AACA;IACI,aAAa;AACjB;AACA;IACI,WAAW;IACX,aAAa;IACb,qCAAqC;AACzC;AACA;IACI,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,YAAY;AAChB;AACA;IACI,YAAY;IACZ,aAAa;IACb,wBAAwB;AAC5B;AACA;IACI,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,YAAY;IACZ,YAAY;IACZ,YAAY;;AAEhB;AACA;IACI,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,aAAa;AACjB;AACA;IACI,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,cAAc;AAClB;AACA;IACI,aAAa;AACjB;AACA,+BAA+B;AAC/B;IACI,UAAU;IACV,yBAAyB;IACzB,kBAAkB;AACtB;AACA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;AAChB;AACA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,WAAW;IACX,eAAe;AACnB;AACA;IACI,iCAAiC;IACjC,uBAAuB;IACvB,YAAY;AAChB;AACA;IACI,uBAAuB;IACvB,uBAAuB;IACvB,cAAc;AAClB;AACA,kCAAkC;AAClC;IACI,aAAa;IACb,eAAe;IACf,0BAA0B;IAC1B,6BAA6B;AACjC;AACA;IACI,YAAY;IACZ,aAAa;IACb,WAAW;IACX,aAAa;IACb,kBAAkB;IAClB,sBAAsB;IACtB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,yBAAyB;AAC7B;AACA;IACI,WAAW;IACX,aAAa;IACb,6BAA6B;IAC7B,YAAY;AAChB;AACA;IACI,eAAe;AACnB;AACA;IACI,YAAY;IACZ,aAAa;IACb,0BAA0B;AAC9B;AACA,2CAA2C;AAC3C;IACI,WAAW;IACX,aAAa;IACb,gBAAgB;IAChB,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;AAC3B;AACA;IACI,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,uCAAuC;IACvC,+BAA+B;AACnC;AACA;IACI,eAAe;AACnB;AACA;IACI,YAAY;IACZ,yBAAyB;IACzB,kBAAkB;AACtB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;AACA;IACI,WAAW;AACf;AACA;IACI,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,oCAAoC;IACpC,kBAAkB;AACtB;AACA;IACI,kBAAkB;IAClB,UAAU;IACV,YAAY;IACZ,kBAAkB;IAClB,SAAS;IACT,yBAAyB;AAC7B;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,8BAA8B;AAClC;AACA;IACI,kBAAkB;IAClB,UAAU;IACV,aAAa;AACjB;AACA;IACI,kBAAkB;IAClB,iCAAiC;IACjC,YAAY;IACZ,WAAW;AACf;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,WAAW;AACf;AACA;IACI,gBAAgB;IAChB,kBAAkB;AACtB;AACA;IACI,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI;QACI,eAAe;IACnB;IACA;QACI,WAAW;QACX,sBAAsB;IAC1B;IACA;QACI,WAAW;QACX,aAAa;IACjB;IACA;QACI,WAAW;QACX,SAAS;QACT,aAAa;IACjB;IACA;QACI,gBAAgB;QAChB,kBAAkB;IACtB;IACA;QACI,YAAY;QACZ,aAAa;IACjB;IACA;QACI,YAAY;IAChB;IACA;QACI,YAAY;QACZ,aAAa;QACb,uBAAuB;IAC3B;IACA;QACI,yBAAyB;IAC7B;IACA;QACI,YAAY;QACZ,eAAe;QACf,wBAAwB;IAC5B;IACA;QACI,gBAAgB;IACpB;AACJ;AACA;IACI;QACI,eAAe;IACnB;IACA;QACI,YAAY;IAChB;IACA;QACI,aAAa;IACjB;IACA;QACI,kCAAkC;QAClC,+BAA+B;IACnC;AACJ;AACA;IACI;QACI,4BAA4B;QAC5B,2CAA2C;IAC/C;AACJ","sourcesContent":["body{\n    margin: 0;\n    padding: 0;\n    font-family: Arial, Helvetica, sans-serif; \n    color: white;  \n    font-weight: 100;\n}\n*{\n    margin: 0;\n    letter-spacing: 0px;\n}\nbody, html{    \n    margin: 0;\n    letter-spacing: 0px;\n}\nbody{\n    height: 100%;\n}\n/*General Settings*/\np{\n    font-size: 16px;\n}\nh1{\n    font-size: 60px;\n    font-weight: 100;\n}\nh2{\n    font-size: 50px;\n    font-weight: 100;\n}\nh3{\n    font-size: 40px;\n    font-weight: 100;\n}\nh4{\n    font-size: 30px;\n    font-weight: 100;\n}\nh5{\n    font-size: 20px;\n    font-weight: 100;\n}\nh6{\n    font-size: 15px;\n    font-weight: 400;\n}\n.btn{\n    padding: 10px;\n    background: rgb(74, 73, 73);\n    color: white;\n    border: none;\n    font-size: 16px;\n}\n.btn-search{\n    width: 150px;\n    height: 50px;\n}\n.btn-gps{\n    background-image: url(./icon/gps.png);\n    background-size: contain;\n    background-repeat: no-repeat;\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n}\n.group-button{\n    padding: 0px 20px 0px 20px;\n    display: flex;\n    justify-content: center;\n    justify-content: space-between;\n}\n.main{\n    height: 100vh;\n    width: 100vw;    \n    margin: 0px;  \n    padding: 0px; \n    /*New way to Show the informactions*/\n    display: flex;\n    background-color: #100E1D;\n}\n/* CSS about Side bar*/\n.sideBar{\n    padding: 15px;\n    width: 27%;\n    background-color: #1E213A;\n    position: relative;  \n}\n.search{   \n    height: 30px;\n    border: none;\n    background: none;\n    color: white;\n    font-size: 15px;\n}\n.search:hover{\n    font-size: 17px;\n}\n.btn-close{\n    width: 50px;\n    height: 50px;\n    border: none;\n    position: absolute;\n    right: 0px;\n    top: 0px;\n    background-color: rgba(0, 0, 0, 0);\n    background-size: contain;\n    background-image: url(./icon/close.png);\n}\n/*Form about Search*/\n.form{\n    margin: 80px 0px 40px 0px;\n    padding: 5px;\n    display: flex;\n    justify-content: space-evenly;\n    justify-content: center;\n    align-items: center;\n}\n.cityName{\n    width: 250px;\n    height: 35px;\n    border: solid white 1px;\n    padding: 2px;\n    font-size: 16px;\n    color: white;\n    background: none;\n    margin-right: 5px;\n}\n.buttonSearch{\n    padding: 10px;\n    background-color: rgb(25, 0, 123);\n    border: none;\n    width: 100px;\n    height: 45px;\n    font-size: 16px;\n}\n.statusCity{\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap-reverse;\n    justify-content: baseline;\n    align-items: center;\n    justify-content: center;\n}\n.status{\n    padding-top: 50px;\n    text-align: center;\n}\n.tempCity{\n    padding: 10px;\n    font-size: 70px;\n    margin: 63px 0px 63px 0px;\n}\n.last{\n    border-right: none;\n}\n.containerSky{\n    display: flex;\n}\n.containerInfo{\n    display: flex;\n}\n.weekly{\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(7, 14%);\n}\n.week{\n    text-align: center;\n}\n\n.image{\n    padding: 3px;\n    width: 40px;\n    height: 40px;\n}\n.image_10{\n    width: 250px;\n    height: 250px;\n    margin: 0px 0px 10px 0px;\n}\n.rainPercent{\n    margin-left: 5px;\n}\n.btn-info{\n    margin-top: 3px;\n    width: 100px;\n    height: 40px;\n    border: none;\n\n}\n.btn-less{\n    margin: 5px;\n    width: 100px;\n    height: 30px;\n    display: none;\n}\n.location{\n    margin-top: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 7px;\n}\n.location img{\n    height: 30px;\n}\n.date, .sky{\n    margin: 50px 0px 60px 0px;\n}\n.visible{\n    display: block;\n}\n.invisible{\n    display: none;\n}\n/*----------Body Css----------*/\n.body-project{\n    width: 70%;\n    background-color: #100E1D;\n    position: relative;\n}\n.btn-group-wheater{\n    position: absolute;\n    right: 20px;\n    margin: 50px;\n}\n.btn-unity{\n    border-radius: 50%;\n    margin: 4px;\n    height: 50px;\n    width: 50px;\n    font-size: 18px;\n}\n.btn-unity:hover{\n    background-color: rgb(12, 12, 12);\n    border: 1px solid wheat;\n    color: white;\n}\n.btn-active{\n    background-color: white;\n    border: 1px solid wheat;\n    color: #252525;\n}\n/*----------Week Weather---------*/\n.temp-day{\n    display: flex;\n    flex-wrap: wrap;\n    margin: 150px 0px 40px 0px;\n    justify-content: space-around;\n}\n.day{\n    width: 175px;\n    height: 230px;\n    margin: 5px;\n    padding: 15px;\n    border-radius: 3px;\n    flex-direction: column;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: #1E213A;\n}\n.temps{\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    padding: 7px;\n}\n.day h4{\n    font-size: 22px;\n}\n.tempStatus{\n    width: 125px;\n    height: 125px;\n    padding: 20px 0px 15px 0px;\n}\n/*----------------hight-lights CSS--------*/\n.hight-lights{\n    width: 100%;\n    display: flex;\n    text-align: left;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n.high{\n    margin-left: 250px;\n}\n.more-info{\n    display: grid;\n    padding: 8px;\n    row-gap: 25px;\n    column-gap: 25px;\n    grid-template-columns: repeat(2, 400px);\n    grid-template-rows: 220px 125px;\n}\n.more-info h5{\n    font-size: 24px;\n}\n.wind, .humidity, .visibility, .air{\n    padding: 5px;\n    background-color: #1E213A;\n    text-align: center;\n}\n.visibility, .air{\n    text-align: center;\n}\n.humidity{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.humidity h5, .humidity h2{\n    margin: 7px;\n}\n.progressive{\n    margin: 10px;\n    width: 250px;\n    height: 10px;\n    border-radius: 5px;\n    background-color: rgb(224, 219, 219);\n    position: relative;\n}\n.progress{\n    border-radius: 5px;\n    width: 85%;\n    height: 10px;\n    position: absolute;\n    left: 0px;\n    background-color: #fea400;\n}\n.prog{\n    display: flex;\n    flex-direction: column;\n    position: relative;\n}\n.percDisc{\n    display: flex;\n    justify-content: space-between;\n} \n.hundred{\n    position: absolute;\n    right: 0px;\n    bottom: -10px;\n}\n.navegation{\n    border-radius: 50%;\n    background-color: rgb(93, 90, 90);\n    height: 45px;\n    width: 45px;\n}\n.nav{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.nav h5{\n    margin: 7px;\n}\nfooter{\n    margin-top: 15px;\n    text-align: center;\n}\nfooter a{\n    color: white;\n    font-weight: 400;\n}\n\n@media only screen and (max-width: 1600px){\n    h4{\n        font-size: 16px;\n    }\n    .main{\n        width: 100%;\n        flex-direction: column;\n    }\n    .sideBar{\n        width: 100%;\n        height: 800px;\n    }\n    .body-project{\n        width: 100%;\n        margin: 0;\n        padding: 15px;\n    }\n    .high{\n        margin-left: 0px;\n        text-align: center;\n    }\n    .tempStatus{\n        width: 100px;\n        height: 100px;\n    }\n    .day{\n        width: 125px;\n    }\n    .image_10{\n        width: 150px;\n        height: 150px;\n        margin: 0px 0px 5px 0px;\n    }\n    .date, .sky{\n        margin: 10px 0px 10px 0px;\n    }\n    .tempCity{\n        padding: 2px;\n        font-size: 70px;\n        margin: 10px 0px 0px 0px;\n    }\n    .status{\n        padding-top: 5px;\n    }\n}\n@media only screen and (max-width: 2000px){\n    h4{\n        font-size: 16px;\n    }\n    .day{\n        width: 125px;\n    }\n    .main{\n        height: 900px;\n    }\n    .more-info{ \n        grid-template-columns: 320px 320px;\n        grid-template-rows: 210px 100px;\n    }\n}\n@media only screen and (max-width: 800px){\n    .more-info{ \n        grid-template-columns: 300px;\n        grid-template-rows: 220px 220px 125px 125px;\n    }\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _icon_mist_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icon/mist.svg */ "./src/icon/mist.svg");








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
            case 'Mist': cloud.src = _icon_mist_svg__WEBPACK_IMPORTED_MODULE_6__; break;
        }
    }else{
        switch(statusTemp){
            case 'Clear': cloud.src = _icon_moon_svg__WEBPACK_IMPORTED_MODULE_4__; break;
            case 'Clouds': cloud.src = _icon_cloudy_night_svg__WEBPACK_IMPORTED_MODULE_5__; break; 
            case 'Rain': cloud.src = _icon_rainy_svg__WEBPACK_IMPORTED_MODULE_2__ ; break;
            case 'Snow': cloud.src = _icon_snow_svg__WEBPACK_IMPORTED_MODULE_3__; break;
            case 'Mist': cloud.src = _icon_mist_svg__WEBPACK_IMPORTED_MODULE_6__; break;
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
/* harmony import */ var _icon_mist_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icon/mist.svg */ "./src/icon/mist.svg");







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
            case 'Mist': cloud.src = _icon_mist_svg__WEBPACK_IMPORTED_MODULE_6__; break;
        }
    }else{
        switch(statusTemp){
            case 'Clear': cloud.src = _icon_moon_svg__WEBPACK_IMPORTED_MODULE_4__; break;
            case 'Clouds': cloud.src = _icon_cloudy_night_svg__WEBPACK_IMPORTED_MODULE_5__; break; 
            case 'Rain': cloud.src = _icon_rainy_svg__WEBPACK_IMPORTED_MODULE_2__ ; break;
            case 'Snow': cloud.src = _icon_snow_svg__WEBPACK_IMPORTED_MODULE_3__; break;
            case 'Mist': cloud.src = _icon_mist_svg__WEBPACK_IMPORTED_MODULE_6__; break;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUss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LG9DQUFvQyxPQUFPLHFDQUFxQyx3QkFBd0IsSUFBSSxLQUFLLGNBQWM7QUFDcE47QUFDQTtBQUNBLElBQUksa0VBQVk7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3doZWF0aGVyLUFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2hlYXRoZXItQXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3doZWF0aGVyLUFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3doZWF0aGVyLUFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2hlYXRoZXItQXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2hlYXRoZXItQXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3doZWF0aGVyLUFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3doZWF0aGVyLUFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3doZWF0aGVyLUFwcC8uL3NyYy9oZWFkLmpzIiwid2VicGFjazovL3doZWF0aGVyLUFwcC8uL3NyYy9tb2R1bGVzL2Fpci5qcyIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvLi9zcmMvbW9kdWxlcy9jbG91ZFN0YXR1cy5qcyIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvLi9zcmMvbW9kdWxlcy9jb252ZXJ0ZXJXZWF0aGVyLmpzIiwid2VicGFjazovL3doZWF0aGVyLUFwcC8uL3NyYy9tb2R1bGVzL2RheU9mV2Vlay5qcyIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvLi9zcmMvbW9kdWxlcy9oaWRkZW5FbGVtZW50LmpzIiwid2VicGFjazovL3doZWF0aGVyLUFwcC8uL3NyYy9tb2R1bGVzL2h1bWlkaXR5LmpzIiwid2VicGFjazovL3doZWF0aGVyLUFwcC8uL3NyYy9tb2R1bGVzL21vdXRoT2ZZZWFyLmpzIiwid2VicGFjazovL3doZWF0aGVyLUFwcC8uL3NyYy9tb2R1bGVzL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvLi9zcmMvbW9kdWxlcy92aXNpYmlsaXR5LmpzIiwid2VicGFjazovL3doZWF0aGVyLUFwcC8uL3NyYy9tb2R1bGVzL3dlYXRoZXJJbml0LmpzIiwid2VicGFjazovL3doZWF0aGVyLUFwcC8uL3NyYy9tb2R1bGVzL3dpbmQuanMiLCJ3ZWJwYWNrOi8vd2hlYXRoZXItQXBwLy4vc3JjL3ByaW50LmpzIiwid2VicGFjazovL3doZWF0aGVyLUFwcC8uL3NyYy93ZWVrbHkuanMiLCJ3ZWJwYWNrOi8vd2hlYXRoZXItQXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3doZWF0aGVyLUFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3doZWF0aGVyLUFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3doZWF0aGVyLUFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3doZWF0aGVyLUFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3doZWF0aGVyLUFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2hlYXRoZXItQXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ljb24vZ3BzLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaWNvbi9jbG9zZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keXtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjsgXFxuICAgIGNvbG9yOiB3aGl0ZTsgIFxcbiAgICBmb250LXdlaWdodDogMTAwO1xcbn1cXG4qe1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XFxufVxcbmJvZHksIGh0bWx7ICAgIFxcbiAgICBtYXJnaW46IDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XFxufVxcbmJvZHl7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuLypHZW5lcmFsIFNldHRpbmdzKi9cXG5we1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcbmgxe1xcbiAgICBmb250LXNpemU6IDYwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcbmgye1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcbmgze1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcbmg0e1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcbmg1e1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcbmg2e1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbi5idG57XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYig3NCwgNzMsIDczKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLmJ0bi1zZWFyY2h7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbn1cXG4uYnRuLWdwc3tcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi5ncm91cC1idXR0b257XFxuICAgIHBhZGRpbmc6IDBweCAyMHB4IDBweCAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4ubWFpbntcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3OyAgICBcXG4gICAgbWFyZ2luOiAwcHg7ICBcXG4gICAgcGFkZGluZzogMHB4OyBcXG4gICAgLypOZXcgd2F5IHRvIFNob3cgdGhlIGluZm9ybWFjdGlvbnMqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAwRTFEO1xcbn1cXG4vKiBDU1MgYWJvdXQgU2lkZSBiYXIqL1xcbi5zaWRlQmFye1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICB3aWR0aDogMjclO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUUyMTNBO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7ICBcXG59XFxuLnNlYXJjaHsgICBcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG4uc2VhcmNoOmhvdmVye1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxufVxcbi5idG4tY2xvc2V7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMHB4O1xcbiAgICB0b3A6IDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG4vKkZvcm0gYWJvdXQgU2VhcmNoKi9cXG4uZm9ybXtcXG4gICAgbWFyZ2luOiA4MHB4IDBweCA0MHB4IDBweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5jaXR5TmFtZXtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIGJvcmRlcjogc29saWQgd2hpdGUgMXB4O1xcbiAgICBwYWRkaW5nOiAycHg7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuLmJ1dHRvblNlYXJjaHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1LCAwLCAxMjMpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiA0NXB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5zdGF0dXNDaXR5e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBiYXNlbGluZTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5zdGF0dXN7XFxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi50ZW1wQ2l0eXtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC1zaXplOiA3MHB4O1xcbiAgICBtYXJnaW46IDYzcHggMHB4IDYzcHggMHB4O1xcbn1cXG4ubGFzdHtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbn1cXG4uY29udGFpbmVyU2t5e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uY29udGFpbmVySW5mb3tcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuLndlZWtseXtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDE0JSk7XFxufVxcbi53ZWVre1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5pbWFnZXtcXG4gICAgcGFkZGluZzogM3B4O1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbn1cXG4uaW1hZ2VfMTB7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gICAgbWFyZ2luOiAwcHggMHB4IDEwcHggMHB4O1xcbn1cXG4ucmFpblBlcmNlbnR7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVxcbi5idG4taW5mb3tcXG4gICAgbWFyZ2luLXRvcDogM3B4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcblxcbn1cXG4uYnRuLWxlc3N7XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuLmxvY2F0aW9ue1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogN3B4O1xcbn1cXG4ubG9jYXRpb24gaW1ne1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxufVxcbi5kYXRlLCAuc2t5e1xcbiAgICBtYXJnaW46IDUwcHggMHB4IDYwcHggMHB4O1xcbn1cXG4udmlzaWJsZXtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5pbnZpc2libGV7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi8qLS0tLS0tLS0tLUJvZHkgQ3NzLS0tLS0tLS0tLSovXFxuLmJvZHktcHJvamVjdHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEwMEUxRDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uYnRuLWdyb3VwLXdoZWF0ZXJ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDIwcHg7XFxuICAgIG1hcmdpbjogNTBweDtcXG59XFxuLmJ0bi11bml0eXtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBtYXJnaW46IDRweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG4uYnRuLXVuaXR5OmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIsIDEyLCAxMik7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoZWF0O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi5idG4tYWN0aXZle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hlYXQ7XFxuICAgIGNvbG9yOiAjMjUyNTI1O1xcbn1cXG4vKi0tLS0tLS0tLS1XZWVrIFdlYXRoZXItLS0tLS0tLS0qL1xcbi50ZW1wLWRheXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBtYXJnaW46IDE1MHB4IDBweCA0MHB4IDBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcbi5kYXl7XFxuICAgIHdpZHRoOiAxNzVweDtcXG4gICAgaGVpZ2h0OiAyMzBweDtcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxRTIxM0E7XFxufVxcbi50ZW1wc3tcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBwYWRkaW5nOiA3cHg7XFxufVxcbi5kYXkgaDR7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuLnRlbXBTdGF0dXN7XFxuICAgIHdpZHRoOiAxMjVweDtcXG4gICAgaGVpZ2h0OiAxMjVweDtcXG4gICAgcGFkZGluZzogMjBweCAwcHggMTVweCAwcHg7XFxufVxcbi8qLS0tLS0tLS0tLS0tLS0tLWhpZ2h0LWxpZ2h0cyBDU1MtLS0tLS0tLSovXFxuLmhpZ2h0LWxpZ2h0c3tcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uaGlnaHtcXG4gICAgbWFyZ2luLWxlZnQ6IDI1MHB4O1xcbn1cXG4ubW9yZS1pbmZve1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIHJvdy1nYXA6IDI1cHg7XFxuICAgIGNvbHVtbi1nYXA6IDI1cHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDQwMHB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMjBweCAxMjVweDtcXG59XFxuLm1vcmUtaW5mbyBoNXtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG4ud2luZCwgLmh1bWlkaXR5LCAudmlzaWJpbGl0eSwgLmFpcntcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUUyMTNBO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi52aXNpYmlsaXR5LCAuYWlye1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5odW1pZGl0eXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmh1bWlkaXR5IGg1LCAuaHVtaWRpdHkgaDJ7XFxuICAgIG1hcmdpbjogN3B4O1xcbn1cXG4ucHJvZ3Jlc3NpdmV7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNCwgMjE5LCAyMTkpO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5wcm9ncmVzc3tcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB3aWR0aDogODUlO1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVhNDAwO1xcbn1cXG4ucHJvZ3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ucGVyY0Rpc2N7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59IFxcbi5odW5kcmVke1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwcHg7XFxuICAgIGJvdHRvbTogLTEwcHg7XFxufVxcbi5uYXZlZ2F0aW9ue1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MywgOTAsIDkwKTtcXG4gICAgaGVpZ2h0OiA0NXB4O1xcbiAgICB3aWR0aDogNDVweDtcXG59XFxuLm5hdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5uYXYgaDV7XFxuICAgIG1hcmdpbjogN3B4O1xcbn1cXG5mb290ZXJ7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuZm9vdGVyIGF7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpe1xcbiAgICBoNHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgfVxcbiAgICAubWFpbntcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcbiAgICAuc2lkZUJhcntcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiA4MDBweDtcXG4gICAgfVxcbiAgICAuYm9keS1wcm9qZWN0e1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICB9XFxuICAgIC5oaWdoe1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcbiAgICAudGVtcFN0YXR1c3tcXG4gICAgICAgIHdpZHRoOiAxMDBweDtcXG4gICAgICAgIGhlaWdodDogMTAwcHg7XFxuICAgIH1cXG4gICAgLmRheXtcXG4gICAgICAgIHdpZHRoOiAxMjVweDtcXG4gICAgfVxcbiAgICAuaW1hZ2VfMTB7XFxuICAgICAgICB3aWR0aDogMTUwcHg7XFxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICAgICAgbWFyZ2luOiAwcHggMHB4IDVweCAwcHg7XFxuICAgIH1cXG4gICAgLmRhdGUsIC5za3l7XFxuICAgICAgICBtYXJnaW46IDEwcHggMHB4IDEwcHggMHB4O1xcbiAgICB9XFxuICAgIC50ZW1wQ2l0eXtcXG4gICAgICAgIHBhZGRpbmc6IDJweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogNzBweDtcXG4gICAgICAgIG1hcmdpbjogMTBweCAwcHggMHB4IDBweDtcXG4gICAgfVxcbiAgICAuc3RhdHVze1xcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcXG4gICAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDIwMDBweCl7XFxuICAgIGg0e1xcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB9XFxuICAgIC5kYXl7XFxuICAgICAgICB3aWR0aDogMTI1cHg7XFxuICAgIH1cXG4gICAgLm1haW57XFxuICAgICAgICBoZWlnaHQ6IDkwMHB4O1xcbiAgICB9XFxuICAgIC5tb3JlLWluZm97IFxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMjBweCAzMjBweDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjEwcHggMTAwcHg7XFxuICAgIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCl7XFxuICAgIC5tb3JlLWluZm97IFxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjIwcHggMjIwcHggMTI1cHggMTI1cHg7XFxuICAgIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YseUNBQXlDO0lBQ3pDLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFNBQVM7SUFDVCxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFNBQVM7SUFDVCxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQSxtQkFBbUI7QUFDbkI7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ys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OiAwO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjsgXFxuICAgIGNvbG9yOiB3aGl0ZTsgIFxcbiAgICBmb250LXdlaWdodDogMTAwO1xcbn1cXG4qe1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XFxufVxcbmJvZHksIGh0bWx7ICAgIFxcbiAgICBtYXJnaW46IDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XFxufVxcbmJvZHl7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuLypHZW5lcmFsIFNldHRpbmdzKi9cXG5we1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcbmgxe1xcbiAgICBmb250LXNpemU6IDYwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcbmgye1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcbmgze1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcbmg0e1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcbmg1e1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcbmg2e1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbi5idG57XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYig3NCwgNzMsIDczKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLmJ0bi1zZWFyY2h7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbn1cXG4uYnRuLWdwc3tcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaWNvbi9ncHMucG5nKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi5ncm91cC1idXR0b257XFxuICAgIHBhZGRpbmc6IDBweCAyMHB4IDBweCAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4ubWFpbntcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3OyAgICBcXG4gICAgbWFyZ2luOiAwcHg7ICBcXG4gICAgcGFkZGluZzogMHB4OyBcXG4gICAgLypOZXcgd2F5IHRvIFNob3cgdGhlIGluZm9ybWFjdGlvbnMqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAwRTFEO1xcbn1cXG4vKiBDU1MgYWJvdXQgU2lkZSBiYXIqL1xcbi5zaWRlQmFye1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICB3aWR0aDogMjclO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUUyMTNBO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7ICBcXG59XFxuLnNlYXJjaHsgICBcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG4uc2VhcmNoOmhvdmVye1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxufVxcbi5idG4tY2xvc2V7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMHB4O1xcbiAgICB0b3A6IDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pY29uL2Nsb3NlLnBuZyk7XFxufVxcbi8qRm9ybSBhYm91dCBTZWFyY2gqL1xcbi5mb3Jte1xcbiAgICBtYXJnaW46IDgwcHggMHB4IDQwcHggMHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmNpdHlOYW1le1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAxcHg7XFxuICAgIHBhZGRpbmc6IDJweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG4uYnV0dG9uU2VhcmNoe1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUsIDAsIDEyMyk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDQ1cHg7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLnN0YXR1c0NpdHl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGJhc2VsaW5lO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnN0YXR1c3tcXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnRlbXBDaXR5e1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDcwcHg7XFxuICAgIG1hcmdpbjogNjNweCAwcHggNjNweCAwcHg7XFxufVxcbi5sYXN0e1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxufVxcbi5jb250YWluZXJTa3l7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5jb250YWluZXJJbmZve1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4ud2Vla2x5e1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMTQlKTtcXG59XFxuLndlZWt7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmltYWdle1xcbiAgICBwYWRkaW5nOiAzcHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxufVxcbi5pbWFnZV8xMHtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICBtYXJnaW46IDBweCAwcHggMTBweCAwcHg7XFxufVxcbi5yYWluUGVyY2VudHtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG59XFxuLmJ0bi1pbmZve1xcbiAgICBtYXJnaW4tdG9wOiAzcHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuXFxufVxcbi5idG4tbGVzc3tcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4ubG9jYXRpb257XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA3cHg7XFxufVxcbi5sb2NhdGlvbiBpbWd7XFxuICAgIGhlaWdodDogMzBweDtcXG59XFxuLmRhdGUsIC5za3l7XFxuICAgIG1hcmdpbjogNTBweCAwcHggNjBweCAwcHg7XFxufVxcbi52aXNpYmxle1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuLmludmlzaWJsZXtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuLyotLS0tLS0tLS0tQm9keSBDc3MtLS0tLS0tLS0tKi9cXG4uYm9keS1wcm9qZWN0e1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAwRTFEO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5idG4tZ3JvdXAtd2hlYXRlcntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMjBweDtcXG4gICAgbWFyZ2luOiA1MHB4O1xcbn1cXG4uYnRuLXVuaXR5e1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIG1hcmdpbjogNHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcbi5idG4tdW5pdHk6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMiwgMTIsIDEyKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hlYXQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmJ0bi1hY3RpdmV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGVhdDtcXG4gICAgY29sb3I6ICMyNTI1MjU7XFxufVxcbi8qLS0tLS0tLS0tLVdlZWsgV2VhdGhlci0tLS0tLS0tLSovXFxuLnRlbXAtZGF5e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIG1hcmdpbjogMTUwcHggMHB4IDQwcHggMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuLmRheXtcXG4gICAgd2lkdGg6IDE3NXB4O1xcbiAgICBoZWlnaHQ6IDIzMHB4O1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFFMjEzQTtcXG59XFxuLnRlbXBze1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIHBhZGRpbmc6IDdweDtcXG59XFxuLmRheSBoNHtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbn1cXG4udGVtcFN0YXR1c3tcXG4gICAgd2lkdGg6IDEyNXB4O1xcbiAgICBoZWlnaHQ6IDEyNXB4O1xcbiAgICBwYWRkaW5nOiAyMHB4IDBweCAxNXB4IDBweDtcXG59XFxuLyotLS0tLS0tLS0tLS0tLS0taGlnaHQtbGlnaHRzIENTUy0tLS0tLS0tKi9cXG4uaGlnaHQtbGlnaHRze1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5oaWdoe1xcbiAgICBtYXJnaW4tbGVmdDogMjUwcHg7XFxufVxcbi5tb3JlLWluZm97XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgcm93LWdhcDogMjVweDtcXG4gICAgY29sdW1uLWdhcDogMjVweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgNDAwcHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIyMHB4IDEyNXB4O1xcbn1cXG4ubW9yZS1pbmZvIGg1e1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVxcbi53aW5kLCAuaHVtaWRpdHksIC52aXNpYmlsaXR5LCAuYWlye1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxRTIxM0E7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnZpc2liaWxpdHksIC5haXJ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmh1bWlkaXR5e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uaHVtaWRpdHkgaDUsIC5odW1pZGl0eSBoMntcXG4gICAgbWFyZ2luOiA3cHg7XFxufVxcbi5wcm9ncmVzc2l2ZXtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI0LCAyMTksIDIxOSk7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnByb2dyZXNze1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHdpZHRoOiA4NSU7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWE0MDA7XFxufVxcbi5wcm9ne1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5wZXJjRGlzY3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn0gXFxuLmh1bmRyZWR7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDBweDtcXG4gICAgYm90dG9tOiAtMTBweDtcXG59XFxuLm5hdmVnYXRpb257XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkzLCA5MCwgOTApO1xcbiAgICBoZWlnaHQ6IDQ1cHg7XFxuICAgIHdpZHRoOiA0NXB4O1xcbn1cXG4ubmF2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm5hdiBoNXtcXG4gICAgbWFyZ2luOiA3cHg7XFxufVxcbmZvb3RlcntcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5mb290ZXIgYXtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MDBweCl7XFxuICAgIGg0e1xcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB9XFxuICAgIC5tYWlue1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuICAgIC5zaWRlQmFye1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDgwMHB4O1xcbiAgICB9XFxuICAgIC5ib2R5LXByb2plY3R7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIH1cXG4gICAgLmhpZ2h7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuICAgIC50ZW1wU3RhdHVze1xcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgfVxcbiAgICAuZGF5e1xcbiAgICAgICAgd2lkdGg6IDEyNXB4O1xcbiAgICB9XFxuICAgIC5pbWFnZV8xMHtcXG4gICAgICAgIHdpZHRoOiAxNTBweDtcXG4gICAgICAgIGhlaWdodDogMTUwcHg7XFxuICAgICAgICBtYXJnaW46IDBweCAwcHggNXB4IDBweDtcXG4gICAgfVxcbiAgICAuZGF0ZSwgLnNreXtcXG4gICAgICAgIG1hcmdpbjogMTBweCAwcHggMTBweCAwcHg7XFxuICAgIH1cXG4gICAgLnRlbXBDaXR5e1xcbiAgICAgICAgcGFkZGluZzogMnB4O1xcbiAgICAgICAgZm9udC1zaXplOiA3MHB4O1xcbiAgICAgICAgbWFyZ2luOiAxMHB4IDBweCAwcHggMHB4O1xcbiAgICB9XFxuICAgIC5zdGF0dXN7XFxuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjAwMHB4KXtcXG4gICAgaDR7XFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIH1cXG4gICAgLmRheXtcXG4gICAgICAgIHdpZHRoOiAxMjVweDtcXG4gICAgfVxcbiAgICAubWFpbntcXG4gICAgICAgIGhlaWdodDogOTAwcHg7XFxuICAgIH1cXG4gICAgLm1vcmUtaW5mb3sgXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMyMHB4IDMyMHB4O1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMTBweCAxMDBweDtcXG4gICAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KXtcXG4gICAgLm1vcmUtaW5mb3sgXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4O1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMjBweCAyMjBweCAxMjVweCAxMjVweDtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICBjbG91ZFN0YXR1cyAgZnJvbSAnLi9wcmludCc7XG5pbXBvcnQgZGF5T2ZXZWVrIGZyb20gJy4vbW9kdWxlcy9kYXlPZldlZWsnO1xuaW1wb3J0IG1vdXRoT2ZZZWFyIGZyb20gJy4vbW9kdWxlcy9tb3V0aE9mWWVhcic7XG5pbXBvcnQgc291cmNlTG9jYXRpb24gZnJvbSAnLi9pY29uL2xvY2F0aW9uLnBuZyc7XG5cbmNvbnN0IHN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5zdGF0dXMnKTtcbmNvbnN0IGNpdHlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG5jb25zdCBkYXRlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xuY29uc3Qgc3RhdHVzQ2l0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgdGVtcENpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuY29uc3Qgc2t5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbmNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBpY29uTG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuaWNvbkxvY2F0aW9uLnNyYyA9IHNvdXJjZUxvY2F0aW9uO1xuLy92YXIgc3RhdHVzID0gJ2ZldyBjbG91ZHMnO1xuZnVuY3Rpb24gaGVhZENpdHkoY2l0eSwgc3RhdHVzLCB0ZW1wKSB7ICAgIFxuICAgIGNyZWF0ZUVsZW0oKTtcbiAgICBzdGF0dXNDaXR5LmFwcGVuZENoaWxkKGNsb3VkU3RhdHVzKHN0YXR1cywgJ2ltYWdlXzEwJykpO1xuICAgIHN0YXR1c0NpdHkuYXBwZW5kQ2hpbGQodGVtcENpdHkpOyBcbiAgICBjaXR5VGl0bGUuaW5uZXJIVE1MID0gY2l0eTtcbiAgICB0ZW1wQ2l0eS5pbm5lckhUTUwgPSBgJHt0ZW1wfWA7ICAgIFxuICAgIHNreS5pbm5lckhUTUwgPSBgJHtzdGF0dXN9YFxufVxuZnVuY3Rpb24gY3JlYXRlRWxlbSgpIHtcbiAgICBzdGF0dXNDaXR5LmlubmVySFRNTCA9ICcnO1xuXG4gICAgY2l0eVRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NpdHknKTtcbiAgICBkYXRlVGl0bGUuY2xhc3NMaXN0LmFkZCgnZGF0ZScpO1xuICAgIHN0YXR1c0NpdHkuY2xhc3NMaXN0LmFkZCgnc3RhdHVzQ2l0eScpO1xuICAgIHRlbXBDaXR5LmNsYXNzTGlzdC5hZGQoJ3RlbXBDaXR5Jyk7XG4gICAgc2t5LmNsYXNzTGlzdC5hZGQoJ3NreScpOyAgICBcbiAgICBsb2NhdGlvbi5jbGFzc0xpc3QuYWRkKCdsb2NhdGlvbicpO1xuICAgICAgICAgICBcbiAgICBzdGF0dXMuYXBwZW5kQ2hpbGQoc3RhdHVzQ2l0eSk7XG4gICAgc3RhdHVzLmFwcGVuZENoaWxkKHNreSk7XG4gICAgc3RhdHVzLmFwcGVuZENoaWxkKGRhdGVUaXRsZSk7XG4gICAgc3RhdHVzLmFwcGVuZENoaWxkKGxvY2F0aW9uKTtcblxuICAgIGxvY2F0aW9uLmFwcGVuZENoaWxkKGljb25Mb2NhdGlvbik7XG4gICAgbG9jYXRpb24uYXBwZW5kQ2hpbGQoY2l0eVRpdGxlKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tUaW1lKGkpIHtcbiAgICBpZiAoaSA8IDEwKSB7XG4gICAgICAgIGkgPSBcIjBcIiArIGk7XG4gICAgfVxuICAgIHJldHVybiBpO1xufVxuXG5mdW5jdGlvbiBzdGFydFRpbWUoKSB7XG4gICAgdmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICB2YXIgaCA9IHRvZGF5LmdldEhvdXJzKCk7XG4gICAgdmFyIG0gPSB0b2RheS5nZXRNaW51dGVzKCk7XG4gICAgLy8gYWRkIGEgemVybyBpbiBmcm9udCBvZiBudW1iZXJzPDEwXG4gICAgbSA9IGNoZWNrVGltZShtKTtcbiAgICBkYXRlVGl0bGUuaW5uZXJIVE1MID0gZGF5T2ZXZWVrKHRvZGF5LmdldERheSgpKSArICcsICcgKyB0b2RheS5nZXRVVENEYXRlKCkgKyAnICcrIG1vdXRoT2ZZZWFyKHRvZGF5LmdldE1vbnRoKCkpICsgJyAnICsgaCArIFwiOlwiICsgbTtcbiAgICB2YXIgdCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBzdGFydFRpbWUoKVxuICAgIH0sIDUwMCk7XG59XG5zdGFydFRpbWUoKTtcblxuZXhwb3J0IGRlZmF1bHQgaGVhZENpdHk7IiwiY29uc3QgYWlyVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMi5haXInKTtcblxuZnVuY3Rpb24gc2hvd0Fpcih2YWx1ZSl7XG4gICAgYWlyVmFsdWUuaW5uZXJIVE1MID0gYCR7dmFsdWV9IG1iYFxufVxuZXhwb3J0IGRlZmF1bHQgc2hvd0FpcjsiLCJpbXBvcnQgY2xvdWREYXkgZnJvbSAgXCIuLi9pY29uL2Nsb3VkeS1kYXkuc3ZnXCI7XG5pbXBvcnQgc3VuIGZyb20gIFwiLi4vaWNvbi9zdW4uc3ZnXCI7XG5pbXBvcnQgcmFpbnkgZnJvbSAgXCIuLi9pY29uL3JhaW55LnN2Z1wiO1xuaW1wb3J0IHNub3cgZnJvbSAgXCIuLi9pY29uL3Nub3cuc3ZnXCI7XG5pbXBvcnQgbW9vbiBmcm9tICBcIi4uL2ljb24vbW9vbi5zdmdcIjtcbmltcG9ydCBjbG91ZE5pZ2h0IGZyb20gICBcIi4uL2ljb24vY2xvdWR5LW5pZ2h0LnN2Z1wiO1xuaW1wb3J0IG1pc3QgZnJvbSBcIi4uL2ljb24vbWlzdC5zdmdcIjtcblxuZnVuY3Rpb24gY2xvdWRTdGF0dXMoc3RhdHVzVGVtcCwgY2xhc3NsaSl7XG4gICAgdmFyIGhvdXIgPSBuZXcgRGF0ZSgpLmdldEhvdXJzKCk7XG4gICAgY29uc3QgY2xvdWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjbG91ZC5jbGFzc0xpc3QuYWRkKGNsYXNzbGkpO1xuICAgIGlmKGhvdXIgPj0gNSAmJiBob3VyIDwgMTgpe1xuICAgICAgICBzd2l0Y2goc3RhdHVzVGVtcCl7XG4gICAgICAgICAgICBjYXNlICdDbGVhcic6IGNsb3VkLnNyYyA9IHN1bjsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdDbG91ZHMnOiBjbG91ZC5zcmMgPSBjbG91ZERheTsgYnJlYWs7ICBcbiAgICAgICAgICAgIGNhc2UgJ1JhaW4nOiBjbG91ZC5zcmMgPSByYWlueTsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdTbm93JzogY2xvdWQuc3JjID0gc25vdzsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdNaXN0JzogY2xvdWQuc3JjID0gbWlzdDsgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9ZWxzZXtcbiAgICAgICAgc3dpdGNoKHN0YXR1c1RlbXApe1xuICAgICAgICAgICAgY2FzZSAnQ2xlYXInOiBjbG91ZC5zcmMgPSBtb29uOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0Nsb3Vkcyc6IGNsb3VkLnNyYyA9IGNsb3VkTmlnaHQ7IGJyZWFrOyBcbiAgICAgICAgICAgIGNhc2UgJ1JhaW4nOiBjbG91ZC5zcmMgPSByYWlueSA7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnU25vdyc6IGNsb3VkLnNyYyA9IHNub3c7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnTWlzdCc6IGNsb3VkLnNyYyA9IG1pc3Q7IGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjbG91ZDtcbn1cbmV4cG9ydCBkZWZhdWx0IGNsb3VkU3RhdHVzOyIsImZ1bmN0aW9uIGNvbnZlcnRlcldlYXRoZXIodGVtcGVyYXR1cmUsIHVuaXR5KXtcbiAgICBzd2l0Y2godW5pdHkpe1xuICAgICAgICBjYXNlICdDZWxzaXVzJyA6IHJldHVybiB0ZW1wZXJhdHVyZS0yNzMgKyAnIMKwQyc7IGJyZWFrO1xuICAgICAgICBjYXNlICdLZWx2aW4nIDogcmV0dXJuIHRlbXBlcmF0dXJlICsgJyDCsEsnOyBicmVhaztcbiAgICAgICAgY2FzZSAnRmFocmVuaGVpdCcgOiByZXR1cm4gKCgodGVtcGVyYXR1cmUtMjczKSoxLjgpICszMikudG9GaXhlZCgpICsgJyDCsEYnOyBicmVhaztcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBjb252ZXJ0ZXJXZWF0aGVyOyIsImZ1bmN0aW9uIGRheU9mV2VlayhudW1iZXIpe1xuICAgIHZhciBuYW1lT2ZEYXkgPSAnJztcbiAgICBzd2l0Y2gobnVtYmVyKXtcbiAgICAgICAgY2FzZSAwOiBuYW1lT2ZEYXkgPSAnU3VuJzsgYnJlYWs7XG4gICAgICAgIGNhc2UgMTogbmFtZU9mRGF5ID0gJ01vbic7IGJyZWFrO1xuICAgICAgICBjYXNlIDI6IG5hbWVPZkRheSA9ICdUdWVzJzsgYnJlYWs7XG4gICAgICAgIGNhc2UgMzogbmFtZU9mRGF5ID0gJ1dlZCc7IGJyZWFrO1xuICAgICAgICBjYXNlIDQ6IG5hbWVPZkRheSA9ICdUaHUnOyBicmVhaztcbiAgICAgICAgY2FzZSA1OiBuYW1lT2ZEYXkgPSAnRnJpJzsgYnJlYWs7XG4gICAgICAgIGNhc2UgNjogbmFtZU9mRGF5ID0gJ1NhdCc7IGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gbmFtZU9mRGF5O1xufVxuZXhwb3J0IGRlZmF1bHQgZGF5T2ZXZWVrOyIsImNvbnN0IGVsZW1lbnRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LmZvcm0tZ3JvdXAnKTtcbmNvbnN0IGJ1dHRvblNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5idG4tc2VhcmNoJyk7XG5jb25zdCBidXR0b25DbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5idG4tY2xvc2UnKTtcbmNvbnN0IGVsZW1lbnRJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LmluZm8nKTtcbmNvbnN0IGVsZW1lbnRTZXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2LnNldCcpO1xuY29uc3QgZWxlbWVudExpc3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYubGlzdC1idXR0b24nKTtcblxuZnVuY3Rpb24gZGlzcGxheUZvcm0oKXtcbiAgIC8qIFxuICAgU2hvdyB0aGUgRWxlbWVudFxuICAgICovXG4gICBidXR0b25TZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgIGVsZW1lbnRGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmlzaWJsZScpO1xuICAgIGVsZW1lbnRJbmZvLmNsYXNzTGlzdC5hZGQoJ2ludmlzaWJsZScpO1xuICAgIGVsZW1lbnRGb3JtLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgIH0pO1xuICAgLypUYWtpbmcgQWxsIGVsZW1lbnQgd2l0aCB0aGlzIENsYXNzIGFuZCBzZXQgdGhlbSBmb3IgcmVjaWV2ZSAnaW52aXNpYmxlJyBhbmQgJ3NldGEnIGNsYXNzZXMqL1xuICAgZm9yKGxldCBpPTA7IGk8ZWxlbWVudFNldGEubGVuZ3RoOyBpKyspe1xuICAgICAgICBlbGVtZW50TGlzdEJ1dHRvbltpXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoKT0+e1xuICAgICAgICBlbGVtZW50U2V0YVtpXS5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKTtcbiAgICAgICAgZWxlbWVudFNldGFbaV0uY2xhc3NMaXN0LmFkZCgnc2V0YScpO1xuICAgICAgIH0pXG4gICAgICAgZWxlbWVudExpc3RCdXR0b25baV0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKT0+e1xuICAgICAgICBlbGVtZW50U2V0YVtpXS5jbGFzc0xpc3QuYWRkKCdpbnZpc2libGUnKTtcbiAgICAgICAgZWxlbWVudFNldGFbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2V0YScpO1xuICAgICAgIH0pXG4gICB9XG4gICAvKipcbiAgICAqIEhpZGRlbiB0aGUgRWxlbWVudFxuICAgICovXG4gICBidXR0b25DbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgZWxlbWVudEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgIGVsZW1lbnRGb3JtLmNsYXNzTGlzdC5hZGQoJ2ludmlzaWJsZScpO1xuICAgIGVsZW1lbnRJbmZvLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmlzaWJsZScpO1xuICAgIGVsZW1lbnRJbmZvLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgIH0pXG5cbn1cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlGb3JtOyIsImNvbnN0IHByb2dyZXNzSHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYucHJvZ3Jlc3MnKTtcbmNvbnN0IHZhbG9ySHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMi5odW1pZGl0eVAnKTtcblxuZnVuY3Rpb24gaHVtaWRpdHlTaG93KHZhbG9yKXtcbiAgICBwcm9ncmVzc0h1bWlkaXR5LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgd2lkdGg6ICR7dmFsb3J9JWApO1xuICAgIHZhbG9ySHVtaWRpdHkuaW5uZXJIVE1MID0gYCR7dmFsb3J9JWA7XG59XG5leHBvcnQgZGVmYXVsdCBodW1pZGl0eVNob3c7IiwiZnVuY3Rpb24gbW91dGhPZlllYXIobnVtYmVyKSB7XG4gICAgdmFyIG5hbWVPZk1vdXRoID0gJyBKYW4nO1xuICAgIHN3aXRjaChudW1iZXIpe1xuICAgICAgICBjYXNlIDA6IG5hbWVPZk1vdXRoID0gJ0phbic7IGJyZWFrO1xuICAgICAgICBjYXNlIDE6IG5hbWVPZk1vdXRoID0gJ0ZlYic7IGJyZWFrO1xuICAgICAgICBjYXNlIDI6IG5hbWVPZk1vdXRoID0gJ01hcmNoJzsgYnJlYWs7XG4gICAgICAgIGNhc2UgMzogbmFtZU9mTW91dGggPSAnQXByaWwnOyBicmVhaztcbiAgICAgICAgY2FzZSA0OiBuYW1lT2ZNb3V0aCA9ICdNYXknOyBicmVhaztcbiAgICAgICAgY2FzZSA1OiBuYW1lT2ZNb3V0aCA9ICdKdW5lJzsgYnJlYWs7XG4gICAgICAgIGNhc2UgNjogbmFtZU9mTW91dGggPSAnSnVseSc7IGJyZWFrO1xuICAgICAgICBjYXNlIDc6IG5hbWVPZk1vdXRoID0gJ0F1Zyc7IGJyZWFrO1xuICAgICAgICBjYXNlIDg6IG5hbWVPZk1vdXRoID0gJ1NlcHQnOyBicmVhaztcbiAgICAgICAgY2FzZSA5OiBuYW1lT2ZNb3V0aCA9ICdPY3QnOyBicmVhaztcbiAgICAgICAgY2FzZSAxMDogbmFtZU9mTW91dGggPSAnTm92JzsgYnJlYWs7XG4gICAgICAgIGNhc2UgMTE6IG5hbWVPZk1vdXRoID0gJ0RlYyc7IGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gbmFtZU9mTW91dGg7XG59XG5leHBvcnQgZGVmYXVsdCBtb3V0aE9mWWVhcjsiLCJpbXBvcnQgeyB3ZWF0aGVyVW5pdHkgfSBmcm9tIFwiLi93ZWF0aGVySW5pdFwiO1xuXG5jb25zdCBjaXR5TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0LmNpdHlOYW1lJyk7XG5jb25zdCBidG5TZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24uYnV0dG9uU2VhcmNoJyk7XG5jb25zdCBlbGVtZW50Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5mb3JtLWdyb3VwJyk7XG5jb25zdCBlbGVtZW50SW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5pbmZvJyk7XG5cbmZ1bmN0aW9uIHNlYXJjaCgpIHtcbiAgICBidG5TZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgICAgICBpZihjaXR5TmFtZS52YWx1ZS5sZW5ndGggPT09IDApe1xuICAgICAgICAgICAgYWxlcnQoJ1dyaXRlIFRoZSBuYW1lIG9mIGNpdHknKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHZhciBjaXR5ID0gY2l0eU5hbWUudmFsdWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBjaXR5TmFtZS52YWx1ZS5zbGljZSgxKTtcbiAgICAgICAgICAgIGVsZW1lbnRGb3JtLmNsYXNzTGlzdC5hZGQoJ2ludmlzaWJsZScpO1xuICAgICAgICAgICAgZWxlbWVudEluZm8uY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJyk7XG4gICAgICAgICAgICB3ZWF0aGVyVW5pdHkoY2l0eSk7XG4gICAgICAgICAgICBjaXR5TmFtZS52YWx1ZT0nJztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9KVxufVxuZXhwb3J0IGRlZmF1bHQgc2VhcmNoOyIsImNvbnN0IHZpc2liaWxpdHlWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gyLnZpc2liaWxpdHknKTtcblxuZnVuY3Rpb24gc2hvd1Zpc2liaWxpdHkodmFsdWUpe1xuICAgIHZpc2liaWxpdHlWYWx1ZS5pbm5lckhUTUwgPSBgJHt2YWx1ZX0gbWlsZXNgXG59XG5leHBvcnQgZGVmYXVsdCBzaG93VmlzaWJpbGl0eTsiLCJpbXBvcnQgY29udmVydGVyV2VhdGhlciBmcm9tIFwiLi9jb252ZXJ0ZXJXZWF0aGVyXCI7XG5pbXBvcnQgaGVhZENpdHkgZnJvbSBcIi4uL2hlYWRcIjtcbmltcG9ydCBodW1pZGl0eVNob3cgZnJvbSBcIi4vaHVtaWRpdHlcIjtcbmltcG9ydCBzaG93QWlyIGZyb20gXCIuL2FpclwiO1xuaW1wb3J0IHNob3dWaXNpYmlsaXR5IGZyb20gXCIuL3Zpc2liaWxpdHlcIjtcbmltcG9ydCB7IHdlYXRoZXJEYWlseSwgd2Vla1RpbWVsaW5lLCBzaG93VGVtcE1heE1pbiB9IGZyb20gXCIuLi93ZWVrbHlcIjtcbmltcG9ydCB3aW5kU2hvdyBmcm9tIFwiLi93aW5kXCI7XG5cbmNvbnN0IGJ1dHRvbkNlbHNpdXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW5pdHktMScpO1xuY29uc3QgYnV0dG9uRmFocmVuaGVpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1bml0eS0yJyk7XG5jb25zdCBidXR0b25LZWx2aW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW5pdHktMycpO1xuXG4vL0tleSBPZiBBUElcbnZhciBrZXkgPSAnYTRhZDY0NDEwNTk1YTIwMzZkMDEzMzM5MTQyZDQ2ODQnO1xudmFyIGNpdHlEYXRhID0gMDtcbnZhciBkYWlseURhdGEgPSAwO1xudmFyIHVuaXR5ID0gJ0NlbHNpdXMnO1xuXG5hc3luYyBmdW5jdGlvbiB3ZWF0aGVyVW5pdHkoY2l0eSkge1xuICAgIC8qKi0tLS0tLS0tLS0tQXBpIEluaXQtLS0tLS0tLS0tLS0tICovXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JmFwcGlkPSR7a2V5fWAsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgICAgICBjaXR5RGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc3QgZGFpbHkgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7Y2l0eURhdGEuY29vcmQubGF0fSZsb249JHtjaXR5RGF0YS5jb29yZC5sb24udG9GaXhlZCgpfSZleGNsdWRlPXdlZWtseSZhcHBpZD0ke2tleX1gLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgICAgIFxuICAgICAgICBkYWlseURhdGEgPSBhd2FpdCBkYWlseS5qc29uKCk7XG4gICAgICAgIHZhciByZWFsVGVtcGVyYXR1cmUgPSBwYXJzZUludChjaXR5RGF0YS5tYWluLmZlZWxzX2xpa2UsIDEwKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBhbGVydCgnRXJyb3IhIFZlcmlmeSB5b3VyIENvbm5lY3Rpb24gb3IgQ2l0eSBOb3QgRm91bmQhJylcbiAgICB9XG5cbiAgICAvKiotLS0tLS0tSW5pdGlhbGl6YXRpb24gb2YgRnVuY3Rpb25zLS0tLS0tLS0tLS0gKi9cbiAgICB2YXIgaHVtaWRpdHlWYWx1ZSA9IGNpdHlEYXRhLm1haW4uaHVtaWRpdHk7XG4gICAgd2Vla1RpbWVsaW5lKCk7XG4gICAgaGVhZENpdHkoY2l0eURhdGEubmFtZSwgY2l0eURhdGEud2VhdGhlclswXS5tYWluLCBjb252ZXJ0ZXJXZWF0aGVyKHJlYWxUZW1wZXJhdHVyZSwgdW5pdHkpKTtcbiAgICBodW1pZGl0eVNob3coaHVtaWRpdHlWYWx1ZSk7XG4gICAgc2hvd0FpcihjaXR5RGF0YS5tYWluLnByZXNzdXJlKTtcbiAgICBzaG93VmlzaWJpbGl0eShjaXR5RGF0YS52aXNpYmlsaXR5IC8gMTAwMCk7XG4gICAgbWF4TWluU2hvdygpO1xuICAgIHNob3dTdGF0dXMoKTtcbiAgICB3aW5kU2hvdyhjaXR5RGF0YS53aW5kLnNwZWVkICxjaXR5RGF0YS53aW5kLmRlZylcblxuICAgIGJ1dHRvbkNlbHNpdXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGJ1dHRvbkZhaHJlbmhlaXQuY2xhc3NMaXN0LnJlbW92ZSgnYnRuLWFjdGl2ZScpO1xuICAgICAgICBidXR0b25LZWx2aW4uY2xhc3NMaXN0LnJlbW92ZSgnYnRuLWFjdGl2ZScpO1xuICAgICAgICBidXR0b25DZWxzaXVzLmNsYXNzTGlzdC5hZGQoJ2J0bi1hY3RpdmUnKTtcbiAgICAgICAgdW5pdHkgPSAnQ2Vsc2l1cyc7XG4gICAgICAgIGhlYWRDaXR5KGNpdHlEYXRhLm5hbWUsIGNpdHlEYXRhLndlYXRoZXJbMF0ubWFpbiwgY29udmVydGVyV2VhdGhlcihyZWFsVGVtcGVyYXR1cmUsIHVuaXR5KSk7XG4gICAgICAgIG1heE1pblNob3coKTtcbiAgICB9KTtcbiAgICBidXR0b25GYWhyZW5oZWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBidXR0b25DZWxzaXVzLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi1hY3RpdmUnKTtcbiAgICAgICAgYnV0dG9uS2VsdmluLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi1hY3RpdmUnKTtcbiAgICAgICAgYnV0dG9uRmFocmVuaGVpdC5jbGFzc0xpc3QuYWRkKCdidG4tYWN0aXZlJyk7XG4gICAgICAgIHVuaXR5ID0gJ0ZhaHJlbmhlaXQnO1xuICAgICAgICBoZWFkQ2l0eShjaXR5RGF0YS5uYW1lLCBjaXR5RGF0YS53ZWF0aGVyWzBdLm1haW4sIGNvbnZlcnRlcldlYXRoZXIocmVhbFRlbXBlcmF0dXJlLCB1bml0eSkpO1xuICAgICAgICBtYXhNaW5TaG93KCk7XG4gICAgfSk7XG4gICAgYnV0dG9uS2VsdmluLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBidXR0b25GYWhyZW5oZWl0LmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi1hY3RpdmUnKTtcbiAgICAgICAgYnV0dG9uQ2Vsc2l1cy5jbGFzc0xpc3QucmVtb3ZlKCdidG4tYWN0aXZlJyk7XG4gICAgICAgIGJ1dHRvbktlbHZpbi5jbGFzc0xpc3QuYWRkKCdidG4tYWN0aXZlJyk7XG4gICAgICAgIHVuaXR5ID0gJ0tlbHZpbic7XG4gICAgICAgIGhlYWRDaXR5KGNpdHlEYXRhLm5hbWUsIGNpdHlEYXRhLndlYXRoZXJbMF0ubWFpbiwgY29udmVydGVyV2VhdGhlcihyZWFsVGVtcGVyYXR1cmUsIHVuaXR5KSk7XG4gICAgICAgIG1heE1pblNob3coKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gbWF4TWluU2hvdygpe1xuICAgIHZhciBjb3VudCA9IDE7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCA1OyBqKyspIHsgXG4gICAgICAgIHNob3dUZW1wTWF4TWluKHVuaXR5LCBkYWlseURhdGEuZGFpbHlbY291bnRdLnRlbXAubWF4LCBkYWlseURhdGEuZGFpbHlbY291bnRdLnRlbXAubWluLCBqKTtcbiAgICAgICAgY291bnQrKztcbiAgICB9XG59XG5mdW5jdGlvbiBzaG93U3RhdHVzKCl7XG4gICAgdmFyIGNvdW50ID0gMTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDU7IGorKykgeyBcbiAgICAgICAgd2VhdGhlckRhaWx5KGRhaWx5RGF0YS5kYWlseVtjb3VudF0ud2VhdGhlclswXS5tYWluLCBqKTtcbiAgICAgICAgY291bnQrKztcbiAgICB9XG59XG5leHBvcnQgeyB3ZWF0aGVyVW5pdHkgfTsiLCJpbXBvcnQgc291cmNlTmF2IGZyb20gJy4uL2ljb24vbmF2ZWdhY2FvLnBuZyc7XG5cbmNvbnN0IGltZ05hdmVnYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbWcubmF2ZWdhdGlvbicpO1xuY29uc3Qgd2luZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMi53aW5kJyk7XG5pbWdOYXZlZ2F0aW9uLnNyYyA9IHNvdXJjZU5hdjtcblxuZnVuY3Rpb24gd2luZFNob3coc3BlZWQsIGRlZ3JhdSl7XG4gICAgaW1nTmF2ZWdhdGlvbi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYHRyYW5zZm9ybTogcm90YXRlKCR7ZGVncmF1fWRlZylgKTtcbiAgICB3aW5kRWxlbWVudC5pbm5lckhUTUwgPSBgJHtzcGVlZH0gbXBoYDtcbn1cbmV4cG9ydCBkZWZhdWx0IHdpbmRTaG93OyIsImltcG9ydCBjbG91ZERheSBmcm9tICBcIi4vaWNvbi9jbG91ZHktZGF5LnN2Z1wiO1xuaW1wb3J0IHN1biBmcm9tICBcIi4vaWNvbi9zdW4uc3ZnXCI7XG5pbXBvcnQgcmFpbnkgZnJvbSAgXCIuL2ljb24vcmFpbnkuc3ZnXCI7XG5pbXBvcnQgc25vdyBmcm9tICBcIi4vaWNvbi9zbm93LnN2Z1wiO1xuaW1wb3J0IG1vb24gZnJvbSAgXCIuL2ljb24vbW9vbi5zdmdcIjtcbmltcG9ydCBjbG91ZE5pZ2h0IGZyb20gICBcIi4vaWNvbi9jbG91ZHktbmlnaHQuc3ZnXCI7XG5pbXBvcnQgbWlzdCBmcm9tIFwiLi9pY29uL21pc3Quc3ZnXCI7XG5leHBvcnQgZGVmYXVsdCBjbG91ZFN0YXR1cztcblxuY29uc3QgZGF0YSA9IG5ldyBEYXRlKCk7XG5jb25zdCBob3VyID0gZGF0YS5nZXRIb3VycygpXG5cbmZ1bmN0aW9uIGNsb3VkU3RhdHVzKHN0YXR1c1RlbXAsIGNsYXNzbGkpe1xuICAgIGNvbnN0IGNsb3VkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY2xvdWQuY2xhc3NMaXN0LmFkZChjbGFzc2xpKTtcbiAgICBpZihob3VyID49IDUgJiYgaG91ciA8IDE4KXtcbiAgICAgICAgc3dpdGNoKHN0YXR1c1RlbXApe1xuICAgICAgICAgICAgY2FzZSAnQ2xlYXInOiBjbG91ZC5zcmMgPSBzdW47IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQ2xvdWRzJzogY2xvdWQuc3JjID0gY2xvdWREYXk7IGJyZWFrOyAgXG4gICAgICAgICAgICBjYXNlICdSYWluJzogY2xvdWQuc3JjID0gcmFpbnk7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnU25vdyc6IGNsb3VkLnNyYyA9IHNub3c7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnTWlzdCc6IGNsb3VkLnNyYyA9IG1pc3Q7IGJyZWFrO1xuICAgICAgICB9XG4gICAgfWVsc2V7XG4gICAgICAgIHN3aXRjaChzdGF0dXNUZW1wKXtcbiAgICAgICAgICAgIGNhc2UgJ0NsZWFyJzogY2xvdWQuc3JjID0gbW9vbjsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdDbG91ZHMnOiBjbG91ZC5zcmMgPSBjbG91ZE5pZ2h0OyBicmVhazsgXG4gICAgICAgICAgICBjYXNlICdSYWluJzogY2xvdWQuc3JjID0gcmFpbnkgOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1Nub3cnOiBjbG91ZC5zcmMgPSBzbm93OyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ01pc3QnOiBjbG91ZC5zcmMgPSBtaXN0OyBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY2xvdWQ7XG59XG5cblxuXG5cbiIsImltcG9ydCBkYXlPZldlZWsgZnJvbSBcIi4vbW9kdWxlcy9kYXlPZldlZWtcIjtcbmltcG9ydCBtb3V0aE9mWWVhciBmcm9tIFwiLi9tb2R1bGVzL21vdXRoT2ZZZWFyXCI7XG5pbXBvcnQgY2xvdWRTdGF0dXMgZnJvbSBcIi4vbW9kdWxlcy9jbG91ZFN0YXR1c1wiO1xuaW1wb3J0IGNvbnZlcnRlcldlYXRoZXIgZnJvbSBcIi4vbW9kdWxlcy9jb252ZXJ0ZXJXZWF0aGVyXCI7XG5cbmNvbnN0IGRhdGVUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaDQuZGF0ZVRlbXAnKTtcbmNvbnN0IHRlbXBTdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYudGVtcFN0YXR1cy0xJyk7XG5jb25zdCB0ZW1wTWF4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaDQudGVtcE1heCcpO1xuY29uc3QgdGVtcE1pbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2g0LnRlbXBNaW4nKTtcblxuZnVuY3Rpb24gd2Vla1RpbWVsaW5lKCkge1xuXG4gICAgdmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICB2YXIgayA9IDE7XG4gICAgdmFyIGluY3JlbWV0RGF5ID0gMTtcbiAgICB2YXIgZGF5T2ZNb3V0aCA9IHRvZGF5LmdldFVUQ0RhdGUoKSArIGluY3JlbWV0RGF5O1xuICAgIHZhciBkYXkgPSB0b2RheS5nZXREYXkoKTtcblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgNTsgaisrKSB7XG4gICAgICAgIGRheU9mTW91dGggPSB0b2RheS5nZXRVVENEYXRlKCkgKyBpbmNyZW1ldERheTtcbiAgICAgICAgaWYgKGRheSArIGsgPD0gNikge1xuICAgICAgICAgICAgZGF0ZVRlbXBbal0uaW5uZXJUZXh0ID0gZGF5T2ZXZWVrKGRheSArIGspICsgJywgJyArIGRheU9mTW91dGggKyAnICcgKyBtb3V0aE9mWWVhcih0b2RheS5nZXRNb250aCgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGsgPSAwXG4gICAgICAgICAgICBkYXRlVGVtcFtqXS5pbm5lclRleHQgPSBkYXlPZldlZWsoaykgKyAnLCAnICsgZGF5T2ZNb3V0aCArICcgJyArIG1vdXRoT2ZZZWFyKHRvZGF5LmdldE1vbnRoKCkpO1xuICAgICAgICAgICAgZGF5ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpbmNyZW1ldERheSsrXG4gICAgICAgIGsrKztcbiAgICB9XG5cblxufVxuZnVuY3Rpb24gd2VhdGhlckRhaWx5KHN0YXR1cywgY291bnQpIHtcbiAgICB0ZW1wU3RhdHVzW2NvdW50XS5pbm5lckhUTUwgPSAnICc7XG4gICAgdGVtcFN0YXR1c1tjb3VudF0uYXBwZW5kQ2hpbGQoY2xvdWRTdGF0dXMoc3RhdHVzLCAndGVtcFN0YXR1cycpKTtcbn1cbmZ1bmN0aW9uIHNob3dUZW1wTWF4TWluKHVuaXR5LCB0TWF4LCB0TWluLCBjb3VudCkge1xuICAgIHRlbXBNYXhbY291bnRdLmlubmVySFRNTCA9IGNvbnZlcnRlcldlYXRoZXIodE1heC50b0ZpeGVkKCksIHVuaXR5KTtcbiAgICB0ZW1wTWluW2NvdW50XS5pbm5lckhUTUwgPSBjb252ZXJ0ZXJXZWF0aGVyKHRNaW4udG9GaXhlZCgpIC0gMSwgdW5pdHkpO1xufVxuZXhwb3J0IHsgd2Vla1RpbWVsaW5lLCB3ZWF0aGVyRGFpbHksIHNob3dUZW1wTWF4TWluIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgc2VhcmNoIGZyb20gJy4vbW9kdWxlcy9zZWFyY2gnO1xuaW1wb3J0IGRpc3BsYXlGb3JtIGZyb20gJy4vbW9kdWxlcy9oaWRkZW5FbGVtZW50JztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHt3ZWF0aGVyVW5pdHl9IGZyb20gJy4vbW9kdWxlcy93ZWF0aGVySW5pdCc7XG5cbmNvbnN0IGdwc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5idG4tZ3BzJyk7XG52YXIga2V5ID0gJ2E0YWQ2NDQxMDU5NWEyMDM2ZDAxMzMzOTE0MmQ0Njg0JztcbnZhciBjaXR5ID0gJ0x1YW5kYSc7XG5cbndlYXRoZXJVbml0eShjaXR5KTtcbmRpc3BsYXlGb3JtKCk7XG5zZWFyY2goKTtcbi8qKi0tLS0tLS0tLS0tLS0tR1BTIEZ1bmN0aW9uLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbmdwc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihzdWNlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XG59KVxuIGNvbnN0ICBzdWNlc3NDYWxsYmFjayA9IGFzeW5jIChwb3NpdGlvbikgPT57XG4gICAgY29uc3QgZGFpbHkgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7cG9zaXRpb24uY29vcmRzLmxhdGl0dWRlLnRvRml4ZWQoNCl9Jmxvbj0ke3Bvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGUudG9GaXhlZCgzKX0mZXhjbHVkZT13ZWVrbHkmYXBwaWQ9JHtrZXl9YCwgeyBtb2RlOiAnY29ycycgfSk7XG4gICAgY29uc3QgZGF0YURheSA9IGF3YWl0IGRhaWx5Lmpzb24oKTtcbiAgICBjb25zdCB0aW1lWm9uZSA9IChkYXRhRGF5LnRpbWV6b25lKS5zcGxpdCgnLycpO1xuICAgIHdlYXRoZXJVbml0eSh0aW1lWm9uZVsxXSk7XG59XG5jb25zdCBlcnJvckNhbGxiYWNrID0gKGVycm9yKT0+e1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=