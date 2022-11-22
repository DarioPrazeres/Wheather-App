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
___CSS_LOADER_EXPORT___.push([module.id, "body{\n    margin: 0;\n    padding: 0;\n    font-family: Raleway, sans-serif; \n    font-style: normal;\n    color: white;  \n    font-weight: 100;\n}\n*{\n    margin: 0;\n    letter-spacing: 0px;\n}\nbody, html{    \n    margin: 0;\n    letter-spacing: 0px;\n}\nbody{\n    height: 100%;\n}\n/*General Settings*/\np{\n    font-size: 16px;\n}\nh1{\n    font-size: 60px;\n    font-weight: 100;\n}\nh2{\n    font-size: 50px;\n    font-weight: 100;\n}\nh3{\n    font-size: 40px;\n    font-weight: 100;\n}\nh4{\n    font-size: 30px;\n    font-weight: 100;\n}\nh5{\n    font-size: 20px;\n    font-weight: 100;\n}\nh6{\n    font-size: 15px;\n    font-weight: 400;\n}\n.btn{\n    padding: 10px;\n    background: rgb(74, 73, 73);\n    color: white;\n    border: none;\n    font-size: 16px;\n}\n.btn-search{\n    width: 150px;\n    height: 50px;\n}\n.btn-gps{\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: contain;\n    background-repeat: no-repeat;\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n}\n.group-button{\n    padding: 0px 20px 0px 20px;\n    display: flex;\n    justify-content: center;\n    justify-content: space-between;\n}\n.main{\n    height: 100vh;\n    width: 100vw;    \n    margin: 0px;  \n    padding: 0px; \n    /*New way to Show the informactions*/\n    display: flex;\n    background-color: #100E1D;\n}\n/* CSS about Side bar*/\n.sideBar{\n    padding: 15px;\n    width: 27%;\n    background-color: #1E213A;\n    position: relative;  \n}\n.search{   \n    height: 30px;\n    border: none;\n    background: none;\n    color: white;\n    font-size: 15px;\n}\n.search:hover{\n    font-size: 17px;\n}\n.btn-close{\n    width: 50px;\n    height: 50px;\n    border: none;\n    position: absolute;\n    right: 0px;\n    top: 0px;\n    background-color: rgba(0, 0, 0, 0);\n    background-size: contain;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n/*Form about Search*/\n.form{\n    margin: 80px 0px 40px 0px;\n    padding: 5px;\n    display: flex;\n    justify-content: space-evenly;\n    justify-content: center;\n    align-items: center;\n}\n.cityName{\n    width: 250px;\n    height: 35px;\n    border: solid white 1px;\n    padding: 2px;\n    font-size: 16px;\n    color: white;\n    background: none;\n    margin-right: 5px;\n}\n.buttonSearch{\n    padding: 10px;\n    background-color: rgb(25, 0, 123);\n    border: none;\n    width: 100px;\n    height: 45px;\n    font-size: 16px;\n}\n.statusCity{\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap-reverse;\n    justify-content: baseline;\n    align-items: center;\n    justify-content: center;\n}\n.status{\n    opacity: 0.8;\n    padding-top: 50px;\n    text-align: center;\n}\n.tempCity{\n    padding: 10px;\n    font-size: 70px;\n    margin: 63px 0px 63px 0px;\n}\n.last{\n    border-right: none;\n}\n.containerSky{\n    display: flex;\n}\n.containerInfo{\n    display: flex;\n}\n.weekly{\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(7, 14%);\n}\n.week{\n    text-align: center;\n}\n\n.image{\n    padding: 3px;\n    width: 40px;\n    height: 40px;\n}\n.image_10{\n    width: 250px;\n    height: 250px;\n    margin: 0px 0px 10px 0px;\n}\n.rainPercent{\n    margin-left: 5px;\n}\n.btn-info{\n    margin-top: 3px;\n    width: 100px;\n    height: 40px;\n    border: none;\n\n}\n.btn-less{\n    margin: 5px;\n    width: 100px;\n    height: 30px;\n    display: none;\n}\n.location{\n    margin-top: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 7px;\n}\n.location img{\n    height: 30px;\n}\n.date, .sky{\n    margin: 50px 0px 60px 0px;\n}\n.visible{\n    display: block;\n}\n.invisible{\n    display: none;\n}\n/*----------Body Css----------*/\n.body-project{\n    width: 70%;\n    background-color: #100E1D;\n    position: relative;\n}\n.btn-group-wheater{\n    position: absolute;\n    right: 20px;\n    margin: 50px;\n}\n.btn-unity{\n    border-radius: 50%;\n    margin: 4px;\n    height: 50px;\n    width: 50px;\n    font-size: 18px;\n}\n.btn-unity:hover{\n    background-color: rgb(12, 12, 12);\n    border: 1px solid wheat;\n    color: white;\n}\n.btn-active{\n    background-color: white;\n    border: 1px solid wheat;\n    color: #252525;\n}\n/*----------Week Weather---------*/\n.temp-day{\n    display: flex;\n    flex-wrap: wrap;\n    margin: 150px 0px 40px 0px;\n    justify-content: space-around;\n}\n.day{\n    width: 180px;\n    height: 230px;\n    margin: 5px;\n    padding: 15px;\n    border-radius: 3px;\n    flex-direction: column;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: #1E213A;\n}\n.temps{\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    padding: 7px;\n}\n.day h4{\n    font-size: 22px;\n}\n.tempStatus{\n    width: 125px;\n    height: 125px;\n    padding: 20px 0px 15px 0px;\n}\n/*----------------hight-lights CSS--------*/\n.hight-lights{\n    width: 100%;\n    display: flex;\n    text-align: left;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n.high{\n    margin-left: 250px;\n}\n.more-info{\n    display: grid;\n    padding: 8px;\n    row-gap: 25px;\n    column-gap: 25px;\n    grid-template-columns: repeat(2, 400px);\n    grid-template-rows: 220px 125px;\n}\n.more-info h5{\n    font-size: 24px;\n}\n.wind, .humidity, .visibility, .air{\n    padding: 5px;\n    background-color: #1E213A;\n    text-align: center;\n}\n.visibility, .air{\n    text-align: center;\n}\n.humidity{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.humidity h5, .humidity h2{\n    margin: 7px;\n}\n.progressive{\n    margin: 10px;\n    width: 250px;\n    height: 10px;\n    border-radius: 5px;\n    background-color: rgb(224, 219, 219);\n    position: relative;\n}\n.progress{\n    border-radius: 5px;\n    width: 85%;\n    height: 10px;\n    position: absolute;\n    left: 0px;\n    background-color: #fea400;\n}\n.prog{\n    display: flex;\n    flex-direction: column;\n    position: relative;\n}\n.percDisc{\n    display: flex;\n    justify-content: space-between;\n} \n.hundred{\n    position: absolute;\n    right: 0px;\n    bottom: -10px;\n}\n.navegation{\n    border-radius: 50%;\n    background-color: rgb(93, 90, 90);\n    height: 45px;\n    width: 45px;\n}\n.nav{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.nav h5{\n    margin: 7px;\n}\nfooter{\n    margin-top: 15px;\n    text-align: center;\n}\nfooter a{\n    color: white;\n    font-weight: 400;\n}\n\n@media only screen and (max-width: 1600px){\n    h4{\n        font-size: 16px;\n    }\n    .main{\n        width: 100%;\n        flex-direction: column;\n    }\n    .sideBar{\n        width: 100%;\n        height: 800px;\n    }\n    .body-project{\n        width: 100%;\n        margin: 0;\n        padding: 15px;\n    }\n    .high{\n        margin-left: 0px;\n        text-align: center;\n    }\n    .tempStatus{\n        width: 100px;\n        height: 100px;\n    }\n    .image_10{\n        width: 150px;\n        height: 150px;\n        margin: 0px 0px 5px 0px;\n    }\n    .date, .sky{\n        margin: 10px 0px 10px 0px;\n    }\n    .tempCity{\n        padding: 2px;\n        font-size: 70px;\n        margin: 10px 0px 0px 0px;\n    }\n    .status{\n        padding-top: 5px;\n    }\n}\n@media only screen and (max-width: 2000px){\n    h4{\n        font-size: 16px;\n    }\n}\n@media only screen and (max-width: 800px){\n    .more-info{ \n        grid-template-columns: 300px;\n        grid-template-rows: 220px 220px 125px 125px;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,gCAAgC;IAChC,kBAAkB;IAClB,YAAY;IACZ,gBAAgB;AACpB;AACA;IACI,SAAS;IACT,mBAAmB;AACvB;AACA;IACI,SAAS;IACT,mBAAmB;AACvB;AACA;IACI,YAAY;AAChB;AACA,mBAAmB;AACnB;IACI,eAAe;AACnB;AACA;IACI,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,2BAA2B;IAC3B,YAAY;IACZ,YAAY;IACZ,eAAe;AACnB;AACA;IACI,YAAY;IACZ,YAAY;AAChB;AACA;IACI,yDAAqC;IACrC,wBAAwB;IACxB,4BAA4B;IAC5B,WAAW;IACX,YAAY;IACZ,kBAAkB;AACtB;AACA;IACI,0BAA0B;IAC1B,aAAa;IACb,uBAAuB;IACvB,8BAA8B;AAClC;AACA;IACI,aAAa;IACb,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,oCAAoC;IACpC,aAAa;IACb,yBAAyB;AAC7B;AACA,sBAAsB;AACtB;IACI,aAAa;IACb,UAAU;IACV,yBAAyB;IACzB,kBAAkB;AACtB;AACA;IACI,YAAY;IACZ,YAAY;IACZ,gBAAgB;IAChB,YAAY;IACZ,eAAe;AACnB;AACA;IACI,eAAe;AACnB;AACA;IACI,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,UAAU;IACV,QAAQ;IACR,kCAAkC;IAClC,wBAAwB;IACxB,yDAAuC;AAC3C;AACA,oBAAoB;AACpB;IACI,yBAAyB;IACzB,YAAY;IACZ,aAAa;IACb,6BAA6B;IAC7B,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,YAAY;IACZ,uBAAuB;IACvB,YAAY;IACZ,eAAe;IACf,YAAY;IACZ,gBAAgB;IAChB,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,iCAAiC;IACjC,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,eAAe;AACnB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,yBAAyB;IACzB,mBAAmB;IACnB,uBAAuB;AAC3B;AACA;IACI,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,eAAe;IACf,yBAAyB;AAC7B;AACA;IACI,kBAAkB;AACtB;AACA;IACI,aAAa;AACjB;AACA;IACI,aAAa;AACjB;AACA;IACI,WAAW;IACX,aAAa;IACb,qCAAqC;AACzC;AACA;IACI,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,YAAY;AAChB;AACA;IACI,YAAY;IACZ,aAAa;IACb,wBAAwB;AAC5B;AACA;IACI,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,YAAY;IACZ,YAAY;IACZ,YAAY;;AAEhB;AACA;IACI,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,aAAa;AACjB;AACA;IACI,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,cAAc;AAClB;AACA;IACI,aAAa;AACjB;AACA,+BAA+B;AAC/B;IACI,UAAU;IACV,yBAAyB;IACzB,kBAAkB;AACtB;AACA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;AAChB;AACA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,WAAW;IACX,eAAe;AACnB;AACA;IACI,iCAAiC;IACjC,uBAAuB;IACvB,YAAY;AAChB;AACA;IACI,uBAAuB;IACvB,uBAAuB;IACvB,cAAc;AAClB;AACA,kCAAkC;AAClC;IACI,aAAa;IACb,eAAe;IACf,0BAA0B;IAC1B,6BAA6B;AACjC;AACA;IACI,YAAY;IACZ,aAAa;IACb,WAAW;IACX,aAAa;IACb,kBAAkB;IAClB,sBAAsB;IACtB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,yBAAyB;AAC7B;AACA;IACI,WAAW;IACX,aAAa;IACb,6BAA6B;IAC7B,YAAY;AAChB;AACA;IACI,eAAe;AACnB;AACA;IACI,YAAY;IACZ,aAAa;IACb,0BAA0B;AAC9B;AACA,2CAA2C;AAC3C;IACI,WAAW;IACX,aAAa;IACb,gBAAgB;IAChB,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;AAC3B;AACA;IACI,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,uCAAuC;IACvC,+BAA+B;AACnC;AACA;IACI,eAAe;AACnB;AACA;IACI,YAAY;IACZ,yBAAyB;IACzB,kBAAkB;AACtB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;AACA;IACI,WAAW;AACf;AACA;IACI,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,oCAAoC;IACpC,kBAAkB;AACtB;AACA;IACI,kBAAkB;IAClB,UAAU;IACV,YAAY;IACZ,kBAAkB;IAClB,SAAS;IACT,yBAAyB;AAC7B;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,8BAA8B;AAClC;AACA;IACI,kBAAkB;IAClB,UAAU;IACV,aAAa;AACjB;AACA;IACI,kBAAkB;IAClB,iCAAiC;IACjC,YAAY;IACZ,WAAW;AACf;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,WAAW;AACf;AACA;IACI,gBAAgB;IAChB,kBAAkB;AACtB;AACA;IACI,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI;QACI,eAAe;IACnB;IACA;QACI,WAAW;QACX,sBAAsB;IAC1B;IACA;QACI,WAAW;QACX,aAAa;IACjB;IACA;QACI,WAAW;QACX,SAAS;QACT,aAAa;IACjB;IACA;QACI,gBAAgB;QAChB,kBAAkB;IACtB;IACA;QACI,YAAY;QACZ,aAAa;IACjB;IACA;QACI,YAAY;QACZ,aAAa;QACb,uBAAuB;IAC3B;IACA;QACI,yBAAyB;IAC7B;IACA;QACI,YAAY;QACZ,eAAe;QACf,wBAAwB;IAC5B;IACA;QACI,gBAAgB;IACpB;AACJ;AACA;IACI;QACI,eAAe;IACnB;AACJ;AACA;IACI;QACI,4BAA4B;QAC5B,2CAA2C;IAC/C;AACJ","sourcesContent":["body{\n    margin: 0;\n    padding: 0;\n    font-family: Raleway, sans-serif; \n    font-style: normal;\n    color: white;  \n    font-weight: 100;\n}\n*{\n    margin: 0;\n    letter-spacing: 0px;\n}\nbody, html{    \n    margin: 0;\n    letter-spacing: 0px;\n}\nbody{\n    height: 100%;\n}\n/*General Settings*/\np{\n    font-size: 16px;\n}\nh1{\n    font-size: 60px;\n    font-weight: 100;\n}\nh2{\n    font-size: 50px;\n    font-weight: 100;\n}\nh3{\n    font-size: 40px;\n    font-weight: 100;\n}\nh4{\n    font-size: 30px;\n    font-weight: 100;\n}\nh5{\n    font-size: 20px;\n    font-weight: 100;\n}\nh6{\n    font-size: 15px;\n    font-weight: 400;\n}\n.btn{\n    padding: 10px;\n    background: rgb(74, 73, 73);\n    color: white;\n    border: none;\n    font-size: 16px;\n}\n.btn-search{\n    width: 150px;\n    height: 50px;\n}\n.btn-gps{\n    background-image: url(./icon/gps.png);\n    background-size: contain;\n    background-repeat: no-repeat;\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n}\n.group-button{\n    padding: 0px 20px 0px 20px;\n    display: flex;\n    justify-content: center;\n    justify-content: space-between;\n}\n.main{\n    height: 100vh;\n    width: 100vw;    \n    margin: 0px;  \n    padding: 0px; \n    /*New way to Show the informactions*/\n    display: flex;\n    background-color: #100E1D;\n}\n/* CSS about Side bar*/\n.sideBar{\n    padding: 15px;\n    width: 27%;\n    background-color: #1E213A;\n    position: relative;  \n}\n.search{   \n    height: 30px;\n    border: none;\n    background: none;\n    color: white;\n    font-size: 15px;\n}\n.search:hover{\n    font-size: 17px;\n}\n.btn-close{\n    width: 50px;\n    height: 50px;\n    border: none;\n    position: absolute;\n    right: 0px;\n    top: 0px;\n    background-color: rgba(0, 0, 0, 0);\n    background-size: contain;\n    background-image: url(./icon/close.png);\n}\n/*Form about Search*/\n.form{\n    margin: 80px 0px 40px 0px;\n    padding: 5px;\n    display: flex;\n    justify-content: space-evenly;\n    justify-content: center;\n    align-items: center;\n}\n.cityName{\n    width: 250px;\n    height: 35px;\n    border: solid white 1px;\n    padding: 2px;\n    font-size: 16px;\n    color: white;\n    background: none;\n    margin-right: 5px;\n}\n.buttonSearch{\n    padding: 10px;\n    background-color: rgb(25, 0, 123);\n    border: none;\n    width: 100px;\n    height: 45px;\n    font-size: 16px;\n}\n.statusCity{\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap-reverse;\n    justify-content: baseline;\n    align-items: center;\n    justify-content: center;\n}\n.status{\n    opacity: 0.8;\n    padding-top: 50px;\n    text-align: center;\n}\n.tempCity{\n    padding: 10px;\n    font-size: 70px;\n    margin: 63px 0px 63px 0px;\n}\n.last{\n    border-right: none;\n}\n.containerSky{\n    display: flex;\n}\n.containerInfo{\n    display: flex;\n}\n.weekly{\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(7, 14%);\n}\n.week{\n    text-align: center;\n}\n\n.image{\n    padding: 3px;\n    width: 40px;\n    height: 40px;\n}\n.image_10{\n    width: 250px;\n    height: 250px;\n    margin: 0px 0px 10px 0px;\n}\n.rainPercent{\n    margin-left: 5px;\n}\n.btn-info{\n    margin-top: 3px;\n    width: 100px;\n    height: 40px;\n    border: none;\n\n}\n.btn-less{\n    margin: 5px;\n    width: 100px;\n    height: 30px;\n    display: none;\n}\n.location{\n    margin-top: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 7px;\n}\n.location img{\n    height: 30px;\n}\n.date, .sky{\n    margin: 50px 0px 60px 0px;\n}\n.visible{\n    display: block;\n}\n.invisible{\n    display: none;\n}\n/*----------Body Css----------*/\n.body-project{\n    width: 70%;\n    background-color: #100E1D;\n    position: relative;\n}\n.btn-group-wheater{\n    position: absolute;\n    right: 20px;\n    margin: 50px;\n}\n.btn-unity{\n    border-radius: 50%;\n    margin: 4px;\n    height: 50px;\n    width: 50px;\n    font-size: 18px;\n}\n.btn-unity:hover{\n    background-color: rgb(12, 12, 12);\n    border: 1px solid wheat;\n    color: white;\n}\n.btn-active{\n    background-color: white;\n    border: 1px solid wheat;\n    color: #252525;\n}\n/*----------Week Weather---------*/\n.temp-day{\n    display: flex;\n    flex-wrap: wrap;\n    margin: 150px 0px 40px 0px;\n    justify-content: space-around;\n}\n.day{\n    width: 180px;\n    height: 230px;\n    margin: 5px;\n    padding: 15px;\n    border-radius: 3px;\n    flex-direction: column;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: #1E213A;\n}\n.temps{\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    padding: 7px;\n}\n.day h4{\n    font-size: 22px;\n}\n.tempStatus{\n    width: 125px;\n    height: 125px;\n    padding: 20px 0px 15px 0px;\n}\n/*----------------hight-lights CSS--------*/\n.hight-lights{\n    width: 100%;\n    display: flex;\n    text-align: left;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n.high{\n    margin-left: 250px;\n}\n.more-info{\n    display: grid;\n    padding: 8px;\n    row-gap: 25px;\n    column-gap: 25px;\n    grid-template-columns: repeat(2, 400px);\n    grid-template-rows: 220px 125px;\n}\n.more-info h5{\n    font-size: 24px;\n}\n.wind, .humidity, .visibility, .air{\n    padding: 5px;\n    background-color: #1E213A;\n    text-align: center;\n}\n.visibility, .air{\n    text-align: center;\n}\n.humidity{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.humidity h5, .humidity h2{\n    margin: 7px;\n}\n.progressive{\n    margin: 10px;\n    width: 250px;\n    height: 10px;\n    border-radius: 5px;\n    background-color: rgb(224, 219, 219);\n    position: relative;\n}\n.progress{\n    border-radius: 5px;\n    width: 85%;\n    height: 10px;\n    position: absolute;\n    left: 0px;\n    background-color: #fea400;\n}\n.prog{\n    display: flex;\n    flex-direction: column;\n    position: relative;\n}\n.percDisc{\n    display: flex;\n    justify-content: space-between;\n} \n.hundred{\n    position: absolute;\n    right: 0px;\n    bottom: -10px;\n}\n.navegation{\n    border-radius: 50%;\n    background-color: rgb(93, 90, 90);\n    height: 45px;\n    width: 45px;\n}\n.nav{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.nav h5{\n    margin: 7px;\n}\nfooter{\n    margin-top: 15px;\n    text-align: center;\n}\nfooter a{\n    color: white;\n    font-weight: 400;\n}\n\n@media only screen and (max-width: 1600px){\n    h4{\n        font-size: 16px;\n    }\n    .main{\n        width: 100%;\n        flex-direction: column;\n    }\n    .sideBar{\n        width: 100%;\n        height: 800px;\n    }\n    .body-project{\n        width: 100%;\n        margin: 0;\n        padding: 15px;\n    }\n    .high{\n        margin-left: 0px;\n        text-align: center;\n    }\n    .tempStatus{\n        width: 100px;\n        height: 100px;\n    }\n    .image_10{\n        width: 150px;\n        height: 150px;\n        margin: 0px 0px 5px 0px;\n    }\n    .date, .sky{\n        margin: 10px 0px 10px 0px;\n    }\n    .tempCity{\n        padding: 2px;\n        font-size: 70px;\n        margin: 10px 0px 0px 0px;\n    }\n    .status{\n        padding-top: 5px;\n    }\n}\n@media only screen and (max-width: 2000px){\n    h4{\n        font-size: 16px;\n    }\n}\n@media only screen and (max-width: 800px){\n    .more-info{ \n        grid-template-columns: 300px;\n        grid-template-rows: 220px 220px 125px 125px;\n    }\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _modules_cloudStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cloudStatus */ "./src/modules/cloudStatus.js");
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
function headCity(city, status, statusWeather, temp) {    
    createElem();
    statusCity.appendChild((0,_modules_cloudStatus__WEBPACK_IMPORTED_MODULE_0__["default"])(status, 'image_10'));
    statusCity.appendChild(tempCity); 
    cityTitle.innerHTML = city;
    tempCity.innerHTML = `${temp}`;    
    sky.innerHTML = `${statusWeather}`
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
function cloudStatus(statusTemp, classli){
    var hour = new Date().getHours();
    const cloud = document.createElement('img');
    cloud.classList.add(classli);
    cloud.src = `http://openweathermap.org/img/wn/${statusTemp}@4x.png`;
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
    (0,_head__WEBPACK_IMPORTED_MODULE_1__["default"])(cityData.name, cityData.weather[0].icon,cityData.weather[0].main, (0,_converterWeather__WEBPACK_IMPORTED_MODULE_0__["default"])(realTemperature, unity));
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
        (0,_head__WEBPACK_IMPORTED_MODULE_1__["default"])(cityData.name, cityData.weather[0].icon,cityData.weather[0].main, (0,_converterWeather__WEBPACK_IMPORTED_MODULE_0__["default"])(realTemperature, unity));
        maxMinShow();
    });
    buttonFahrenheit.addEventListener('click', () => {
        buttonCelsius.classList.remove('btn-active');
        buttonKelvin.classList.remove('btn-active');
        buttonFahrenheit.classList.add('btn-active');
        unity = 'Fahrenheit';
        (0,_head__WEBPACK_IMPORTED_MODULE_1__["default"])(cityData.name, cityData.weather[0].icon,cityData.weather[0].main, (0,_converterWeather__WEBPACK_IMPORTED_MODULE_0__["default"])(realTemperature, unity));
        maxMinShow();
    });
    buttonKelvin.addEventListener('click', () => {
        buttonFahrenheit.classList.remove('btn-active');
        buttonCelsius.classList.remove('btn-active');
        buttonKelvin.classList.add('btn-active');
        unity = 'Kelvin';
        (0,_head__WEBPACK_IMPORTED_MODULE_1__["default"])(cityData.name, cityData.weather[0].icon,cityData.weather[0].main, (0,_converterWeather__WEBPACK_IMPORTED_MODULE_0__["default"])(realTemperature, unity));
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
        (0,_weekly__WEBPACK_IMPORTED_MODULE_5__.weatherDaily)(dailyData.daily[count].weather[0].icon, j);
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

/***/ "./src/icon/navegacao.png":
/*!********************************!*\
  !*** ./src/icon/navegacao.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4d7281697a97ff5d642a.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFB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LGtFQUFZO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3doZWF0aGVyLUFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2hlYXRoZXItQXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2hlYXRoZXItQXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3doZWF0aGVyLUFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2hlYXRoZXItQXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3doZWF0aGVyLUFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvLi9zcmMvaGVhZC5qcyIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvLi9zcmMvbW9kdWxlcy9haXIuanMiLCJ3ZWJwYWNrOi8vd2hlYXRoZXItQXBwLy4vc3JjL21vZHVsZXMvY2xvdWRTdGF0dXMuanMiLCJ3ZWJwYWNrOi8vd2hlYXRoZXItQXBwLy4vc3JjL21vZHVsZXMvY29udmVydGVyV2VhdGhlci5qcyIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvLi9zcmMvbW9kdWxlcy9kYXlPZldlZWsuanMiLCJ3ZWJwYWNrOi8vd2hlYXRoZXItQXBwLy4vc3JjL21vZHVsZXMvaGlkZGVuRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvLi9zcmMvbW9kdWxlcy9odW1pZGl0eS5qcyIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvLi9zcmMvbW9kdWxlcy9tb3V0aE9mWWVhci5qcyIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvLi9zcmMvbW9kdWxlcy9zZWFyY2guanMiLCJ3ZWJwYWNrOi8vd2hlYXRoZXItQXBwLy4vc3JjL21vZHVsZXMvdmlzaWJpbGl0eS5qcyIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvLi9zcmMvbW9kdWxlcy93ZWF0aGVySW5pdC5qcyIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvLi9zcmMvbW9kdWxlcy93aW5kLmpzIiwid2VicGFjazovL3doZWF0aGVyLUFwcC8uL3NyYy93ZWVrbHkuanMiLCJ3ZWJwYWNrOi8vd2hlYXRoZXItQXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3doZWF0aGVyLUFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3doZWF0aGVyLUFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3doZWF0aGVyLUFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3doZWF0aGVyLUFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3doZWF0aGVyLUFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93aGVhdGhlci1BcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2hlYXRoZXItQXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ljb24vZ3BzLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaWNvbi9jbG9zZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keXtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogUmFsZXdheSwgc2Fucy1zZXJpZjsgXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgY29sb3I6IHdoaXRlOyAgXFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcbip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcXG59XFxuYm9keSwgaHRtbHsgICAgXFxuICAgIG1hcmdpbjogMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcXG59XFxuYm9keXtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4vKkdlbmVyYWwgU2V0dGluZ3MqL1xcbnB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuaDF7XFxuICAgIGZvbnQtc2l6ZTogNjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG59XFxuaDJ7XFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG59XFxuaDN7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG59XFxuaDR7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG59XFxuaDV7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG59XFxuaDZ7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuLmJ0bntcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDc0LCA3MywgNzMpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4uYnRuLXNlYXJjaHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxufVxcbi5idG4tZ3Bze1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuLmdyb3VwLWJ1dHRvbntcXG4gICAgcGFkZGluZzogMHB4IDIwcHggMHB4IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5tYWlue1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7ICAgIFxcbiAgICBtYXJnaW46IDBweDsgIFxcbiAgICBwYWRkaW5nOiAwcHg7IFxcbiAgICAvKk5ldyB3YXkgdG8gU2hvdyB0aGUgaW5mb3JtYWN0aW9ucyovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMDBFMUQ7XFxufVxcbi8qIENTUyBhYm91dCBTaWRlIGJhciovXFxuLnNpZGVCYXJ7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIHdpZHRoOiAyNyU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxRTIxM0E7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgIFxcbn1cXG4uc2VhcmNoeyAgIFxcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxufVxcbi5zZWFyY2g6aG92ZXJ7XFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXG59XFxuLmJ0bi1jbG9zZXtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwcHg7XFxuICAgIHRvcDogMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcbi8qRm9ybSBhYm91dCBTZWFyY2gqL1xcbi5mb3Jte1xcbiAgICBtYXJnaW46IDgwcHggMHB4IDQwcHggMHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmNpdHlOYW1le1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAxcHg7XFxuICAgIHBhZGRpbmc6IDJweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG4uYnV0dG9uU2VhcmNoe1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUsIDAsIDEyMyk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDQ1cHg7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLnN0YXR1c0NpdHl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGJhc2VsaW5lO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnN0YXR1c3tcXG4gICAgb3BhY2l0eTogMC44O1xcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4udGVtcENpdHl7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogNzBweDtcXG4gICAgbWFyZ2luOiA2M3B4IDBweCA2M3B4IDBweDtcXG59XFxuLmxhc3R7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG59XFxuLmNvbnRhaW5lclNreXtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuLmNvbnRhaW5lckluZm97XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbi53ZWVrbHl7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxNCUpO1xcbn1cXG4ud2Vla3tcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaW1hZ2V7XFxuICAgIHBhZGRpbmc6IDNweDtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG59XFxuLmltYWdlXzEwe1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICAgIG1hcmdpbjogMHB4IDBweCAxMHB4IDBweDtcXG59XFxuLnJhaW5QZXJjZW50e1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbn1cXG4uYnRuLWluZm97XFxuICAgIG1hcmdpbi10b3A6IDNweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG5cXG59XFxuLmJ0bi1sZXNze1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5sb2NhdGlvbntcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDdweDtcXG59XFxuLmxvY2F0aW9uIGltZ3tcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbn1cXG4uZGF0ZSwgLnNreXtcXG4gICAgbWFyZ2luOiA1MHB4IDBweCA2MHB4IDBweDtcXG59XFxuLnZpc2libGV7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uaW52aXNpYmxle1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4vKi0tLS0tLS0tLS1Cb2R5IENzcy0tLS0tLS0tLS0qL1xcbi5ib2R5LXByb2plY3R7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMDBFMUQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmJ0bi1ncm91cC13aGVhdGVye1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAyMHB4O1xcbiAgICBtYXJnaW46IDUwcHg7XFxufVxcbi5idG4tdW5pdHl7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgbWFyZ2luOiA0cHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuLmJ0bi11bml0eTpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyLCAxMiwgMTIpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGVhdDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4uYnRuLWFjdGl2ZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoZWF0O1xcbiAgICBjb2xvcjogIzI1MjUyNTtcXG59XFxuLyotLS0tLS0tLS0tV2VlayBXZWF0aGVyLS0tLS0tLS0tKi9cXG4udGVtcC1kYXl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgbWFyZ2luOiAxNTBweCAwcHggNDBweCAwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4uZGF5e1xcbiAgICB3aWR0aDogMTgwcHg7XFxuICAgIGhlaWdodDogMjMwcHg7XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUUyMTNBO1xcbn1cXG4udGVtcHN7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgcGFkZGluZzogN3B4O1xcbn1cXG4uZGF5IGg0e1xcbiAgICBmb250LXNpemU6IDIycHg7XFxufVxcbi50ZW1wU3RhdHVze1xcbiAgICB3aWR0aDogMTI1cHg7XFxuICAgIGhlaWdodDogMTI1cHg7XFxuICAgIHBhZGRpbmc6IDIwcHggMHB4IDE1cHggMHB4O1xcbn1cXG4vKi0tLS0tLS0tLS0tLS0tLS1oaWdodC1saWdodHMgQ1NTLS0tLS0tLS0qL1xcbi5oaWdodC1saWdodHN7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmhpZ2h7XFxuICAgIG1hcmdpbi1sZWZ0OiAyNTBweDtcXG59XFxuLm1vcmUtaW5mb3tcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICByb3ctZ2FwOiAyNXB4O1xcbiAgICBjb2x1bW4tZ2FwOiAyNXB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCA0MDBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjIwcHggMTI1cHg7XFxufVxcbi5tb3JlLWluZm8gaDV7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuLndpbmQsIC5odW1pZGl0eSwgLnZpc2liaWxpdHksIC5haXJ7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFFMjEzQTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4udmlzaWJpbGl0eSwgLmFpcntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uaHVtaWRpdHl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5odW1pZGl0eSBoNSwgLmh1bWlkaXR5IGgye1xcbiAgICBtYXJnaW46IDdweDtcXG59XFxuLnByb2dyZXNzaXZle1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjQsIDIxOSwgMjE5KTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ucHJvZ3Jlc3N7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgd2lkdGg6IDg1JTtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlYTQwMDtcXG59XFxuLnByb2d7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnBlcmNEaXNje1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufSBcXG4uaHVuZHJlZHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMHB4O1xcbiAgICBib3R0b206IC0xMHB4O1xcbn1cXG4ubmF2ZWdhdGlvbntcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTMsIDkwLCA5MCk7XFxuICAgIGhlaWdodDogNDVweDtcXG4gICAgd2lkdGg6IDQ1cHg7XFxufVxcbi5uYXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubmF2IGg1e1xcbiAgICBtYXJnaW46IDdweDtcXG59XFxuZm9vdGVye1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbmZvb3RlciBhe1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYwMHB4KXtcXG4gICAgaDR7XFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIH1cXG4gICAgLm1haW57XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG4gICAgLnNpZGVCYXJ7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogODAwcHg7XFxuICAgIH1cXG4gICAgLmJvZHktcHJvamVjdHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgcGFkZGluZzogMTVweDtcXG4gICAgfVxcbiAgICAuaGlnaHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgLnRlbXBTdGF0dXN7XFxuICAgICAgICB3aWR0aDogMTAwcHg7XFxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICB9XFxuICAgIC5pbWFnZV8xMHtcXG4gICAgICAgIHdpZHRoOiAxNTBweDtcXG4gICAgICAgIGhlaWdodDogMTUwcHg7XFxuICAgICAgICBtYXJnaW46IDBweCAwcHggNXB4IDBweDtcXG4gICAgfVxcbiAgICAuZGF0ZSwgLnNreXtcXG4gICAgICAgIG1hcmdpbjogMTBweCAwcHggMTBweCAwcHg7XFxuICAgIH1cXG4gICAgLnRlbXBDaXR5e1xcbiAgICAgICAgcGFkZGluZzogMnB4O1xcbiAgICAgICAgZm9udC1zaXplOiA3MHB4O1xcbiAgICAgICAgbWFyZ2luOiAxMHB4IDBweCAwcHggMHB4O1xcbiAgICB9XFxuICAgIC5zdGF0dXN7XFxuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjAwMHB4KXtcXG4gICAgaDR7XFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCl7XFxuICAgIC5tb3JlLWluZm97IFxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjIwcHggMjIwcHggMTI1cHggMTI1cHg7XFxuICAgIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsZ0NBQWdDO0lBQ2hDLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0EsbUJBQW1CO0FBQ25CO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSx5REFBcUM7SUFDckMsd0JBQXdCO0lBQ3hCLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksMEJB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dEI7QUFDQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLFdBQVc7UUFDWCxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLFdBQVc7UUFDWCxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsU0FBUztRQUNULGFBQWE7SUFDakI7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLFlBQVk7UUFDWixhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxZQUFZO1FBQ1osYUFBYTtRQUNiLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0kseUJBQXlCO0lBQzdCO0lBQ0E7UUFDSSxZQUFZO1FBQ1osZUFBZTtRQUNmLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtBQUNKO0FBQ0E7SUFDSTtRQUNJLDRCQUE0QjtRQUM1QiwyQ0FBMkM7SUFDL0M7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5e1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBSYWxld2F5LCBzYW5zLXNlcmlmOyBcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBjb2xvcjogd2hpdGU7ICBcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG59XFxuKntcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xcbn1cXG5ib2R5LCBodG1seyAgICBcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xcbn1cXG5ib2R5e1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbi8qR2VuZXJhbCBTZXR0aW5ncyovXFxucHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5oMXtcXG4gICAgZm9udC1zaXplOiA2MHB4O1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbn1cXG5oMntcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbn1cXG5oM3tcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbn1cXG5oNHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbn1cXG5oNXtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbn1cXG5oNntcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG4uYnRue1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNzQsIDczLCA3Myk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5idG4tc2VhcmNoe1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG59XFxuLmJ0bi1ncHN7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ljb24vZ3BzLnBuZyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG4uZ3JvdXAtYnV0dG9ue1xcbiAgICBwYWRkaW5nOiAwcHggMjBweCAwcHggMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLm1haW57XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dzsgICAgXFxuICAgIG1hcmdpbjogMHB4OyAgXFxuICAgIHBhZGRpbmc6IDBweDsgXFxuICAgIC8qTmV3IHdheSB0byBTaG93IHRoZSBpbmZvcm1hY3Rpb25zKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEwMEUxRDtcXG59XFxuLyogQ1NTIGFib3V0IFNpZGUgYmFyKi9cXG4uc2lkZUJhcntcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgd2lkdGg6IDI3JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFFMjEzQTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyAgXFxufVxcbi5zZWFyY2h7ICAgXFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuLnNlYXJjaDpob3ZlcntcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcbn1cXG4uYnRuLWNsb3Nle1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDBweDtcXG4gICAgdG9wOiAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaWNvbi9jbG9zZS5wbmcpO1xcbn1cXG4vKkZvcm0gYWJvdXQgU2VhcmNoKi9cXG4uZm9ybXtcXG4gICAgbWFyZ2luOiA4MHB4IDBweCA0MHB4IDBweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5jaXR5TmFtZXtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIGJvcmRlcjogc29saWQgd2hpdGUgMXB4O1xcbiAgICBwYWRkaW5nOiAycHg7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuLmJ1dHRvblNlYXJjaHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1LCAwLCAxMjMpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiA0NXB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5zdGF0dXNDaXR5e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBiYXNlbGluZTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5zdGF0dXN7XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnRlbXBDaXR5e1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDcwcHg7XFxuICAgIG1hcmdpbjogNjNweCAwcHggNjNweCAwcHg7XFxufVxcbi5sYXN0e1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxufVxcbi5jb250YWluZXJTa3l7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5jb250YWluZXJJbmZve1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4ud2Vla2x5e1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMTQlKTtcXG59XFxuLndlZWt7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmltYWdle1xcbiAgICBwYWRkaW5nOiAzcHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxufVxcbi5pbWFnZV8xMHtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICBtYXJnaW46IDBweCAwcHggMTBweCAwcHg7XFxufVxcbi5yYWluUGVyY2VudHtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG59XFxuLmJ0bi1pbmZve1xcbiAgICBtYXJnaW4tdG9wOiAzcHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuXFxufVxcbi5idG4tbGVzc3tcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4ubG9jYXRpb257XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA3cHg7XFxufVxcbi5sb2NhdGlvbiBpbWd7XFxuICAgIGhlaWdodDogMzBweDtcXG59XFxuLmRhdGUsIC5za3l7XFxuICAgIG1hcmdpbjogNTBweCAwcHggNjBweCAwcHg7XFxufVxcbi52aXNpYmxle1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuLmludmlzaWJsZXtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuLyotLS0tLS0tLS0tQm9keSBDc3MtLS0tLS0tLS0tKi9cXG4uYm9keS1wcm9qZWN0e1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAwRTFEO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5idG4tZ3JvdXAtd2hlYXRlcntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMjBweDtcXG4gICAgbWFyZ2luOiA1MHB4O1xcbn1cXG4uYnRuLXVuaXR5e1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIG1hcmdpbjogNHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcbi5idG4tdW5pdHk6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMiwgMTIsIDEyKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hlYXQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmJ0bi1hY3RpdmV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGVhdDtcXG4gICAgY29sb3I6ICMyNTI1MjU7XFxufVxcbi8qLS0tLS0tLS0tLVdlZWsgV2VhdGhlci0tLS0tLS0tLSovXFxuLnRlbXAtZGF5e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIG1hcmdpbjogMTUwcHggMHB4IDQwcHggMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuLmRheXtcXG4gICAgd2lkdGg6IDE4MHB4O1xcbiAgICBoZWlnaHQ6IDIzMHB4O1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFFMjEzQTtcXG59XFxuLnRlbXBze1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIHBhZGRpbmc6IDdweDtcXG59XFxuLmRheSBoNHtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbn1cXG4udGVtcFN0YXR1c3tcXG4gICAgd2lkdGg6IDEyNXB4O1xcbiAgICBoZWlnaHQ6IDEyNXB4O1xcbiAgICBwYWRkaW5nOiAyMHB4IDBweCAxNXB4IDBweDtcXG59XFxuLyotLS0tLS0tLS0tLS0tLS0taGlnaHQtbGlnaHRzIENTUy0tLS0tLS0tKi9cXG4uaGlnaHQtbGlnaHRze1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5oaWdoe1xcbiAgICBtYXJnaW4tbGVmdDogMjUwcHg7XFxufVxcbi5tb3JlLWluZm97XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgcm93LWdhcDogMjVweDtcXG4gICAgY29sdW1uLWdhcDogMjVweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgNDAwcHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIyMHB4IDEyNXB4O1xcbn1cXG4ubW9yZS1pbmZvIGg1e1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVxcbi53aW5kLCAuaHVtaWRpdHksIC52aXNpYmlsaXR5LCAuYWlye1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxRTIxM0E7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnZpc2liaWxpdHksIC5haXJ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmh1bWlkaXR5e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uaHVtaWRpdHkgaDUsIC5odW1pZGl0eSBoMntcXG4gICAgbWFyZ2luOiA3cHg7XFxufVxcbi5wcm9ncmVzc2l2ZXtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI0LCAyMTksIDIxOSk7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnByb2dyZXNze1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHdpZHRoOiA4NSU7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWE0MDA7XFxufVxcbi5wcm9ne1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5wZXJjRGlzY3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn0gXFxuLmh1bmRyZWR7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDBweDtcXG4gICAgYm90dG9tOiAtMTBweDtcXG59XFxuLm5hdmVnYXRpb257XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkzLCA5MCwgOTApO1xcbiAgICBoZWlnaHQ6IDQ1cHg7XFxuICAgIHdpZHRoOiA0NXB4O1xcbn1cXG4ubmF2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm5hdiBoNXtcXG4gICAgbWFyZ2luOiA3cHg7XFxufVxcbmZvb3RlcntcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5mb290ZXIgYXtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MDBweCl7XFxuICAgIGg0e1xcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB9XFxuICAgIC5tYWlue1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuICAgIC5zaWRlQmFye1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDgwMHB4O1xcbiAgICB9XFxuICAgIC5ib2R5LXByb2plY3R7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIH1cXG4gICAgLmhpZ2h7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuICAgIC50ZW1wU3RhdHVze1xcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgfVxcbiAgICAuaW1hZ2VfMTB7XFxuICAgICAgICB3aWR0aDogMTUwcHg7XFxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICAgICAgbWFyZ2luOiAwcHggMHB4IDVweCAwcHg7XFxuICAgIH1cXG4gICAgLmRhdGUsIC5za3l7XFxuICAgICAgICBtYXJnaW46IDEwcHggMHB4IDEwcHggMHB4O1xcbiAgICB9XFxuICAgIC50ZW1wQ2l0eXtcXG4gICAgICAgIHBhZGRpbmc6IDJweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogNzBweDtcXG4gICAgICAgIG1hcmdpbjogMTBweCAwcHggMHB4IDBweDtcXG4gICAgfVxcbiAgICAuc3RhdHVze1xcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcXG4gICAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDIwMDBweCl7XFxuICAgIGg0e1xcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpe1xcbiAgICAubW9yZS1pbmZveyBcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHg7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIyMHB4IDIyMHB4IDEyNXB4IDEyNXB4O1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgY2xvdWRTdGF0dXMgZnJvbSAnLi9tb2R1bGVzL2Nsb3VkU3RhdHVzJztcbmltcG9ydCBkYXlPZldlZWsgZnJvbSAnLi9tb2R1bGVzL2RheU9mV2Vlayc7XG5pbXBvcnQgbW91dGhPZlllYXIgZnJvbSAnLi9tb2R1bGVzL21vdXRoT2ZZZWFyJztcbmltcG9ydCBzb3VyY2VMb2NhdGlvbiBmcm9tICcuL2ljb24vbG9jYXRpb24ucG5nJztcblxuY29uc3Qgc3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LnN0YXR1cycpO1xuY29uc3QgY2l0eVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbmNvbnN0IGRhdGVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG5jb25zdCBzdGF0dXNDaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCB0ZW1wQ2l0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5jb25zdCBza3kgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGljb25Mb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG5pY29uTG9jYXRpb24uc3JjID0gc291cmNlTG9jYXRpb247XG4vL3ZhciBzdGF0dXMgPSAnZmV3IGNsb3Vkcyc7XG5mdW5jdGlvbiBoZWFkQ2l0eShjaXR5LCBzdGF0dXMsIHN0YXR1c1dlYXRoZXIsIHRlbXApIHsgICAgXG4gICAgY3JlYXRlRWxlbSgpO1xuICAgIHN0YXR1c0NpdHkuYXBwZW5kQ2hpbGQoY2xvdWRTdGF0dXMoc3RhdHVzLCAnaW1hZ2VfMTAnKSk7XG4gICAgc3RhdHVzQ2l0eS5hcHBlbmRDaGlsZCh0ZW1wQ2l0eSk7IFxuICAgIGNpdHlUaXRsZS5pbm5lckhUTUwgPSBjaXR5O1xuICAgIHRlbXBDaXR5LmlubmVySFRNTCA9IGAke3RlbXB9YDsgICAgXG4gICAgc2t5LmlubmVySFRNTCA9IGAke3N0YXR1c1dlYXRoZXJ9YFxufVxuZnVuY3Rpb24gY3JlYXRlRWxlbSgpIHtcbiAgICBzdGF0dXNDaXR5LmlubmVySFRNTCA9ICcnO1xuXG4gICAgY2l0eVRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NpdHknKTtcbiAgICBkYXRlVGl0bGUuY2xhc3NMaXN0LmFkZCgnZGF0ZScpO1xuICAgIHN0YXR1c0NpdHkuY2xhc3NMaXN0LmFkZCgnc3RhdHVzQ2l0eScpO1xuICAgIHRlbXBDaXR5LmNsYXNzTGlzdC5hZGQoJ3RlbXBDaXR5Jyk7XG4gICAgc2t5LmNsYXNzTGlzdC5hZGQoJ3NreScpOyAgICBcbiAgICBsb2NhdGlvbi5jbGFzc0xpc3QuYWRkKCdsb2NhdGlvbicpO1xuICAgICAgICAgICBcbiAgICBzdGF0dXMuYXBwZW5kQ2hpbGQoc3RhdHVzQ2l0eSk7XG4gICAgc3RhdHVzLmFwcGVuZENoaWxkKHNreSk7XG4gICAgc3RhdHVzLmFwcGVuZENoaWxkKGRhdGVUaXRsZSk7XG4gICAgc3RhdHVzLmFwcGVuZENoaWxkKGxvY2F0aW9uKTtcblxuICAgIGxvY2F0aW9uLmFwcGVuZENoaWxkKGljb25Mb2NhdGlvbik7XG4gICAgbG9jYXRpb24uYXBwZW5kQ2hpbGQoY2l0eVRpdGxlKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tUaW1lKGkpIHtcbiAgICBpZiAoaSA8IDEwKSB7XG4gICAgICAgIGkgPSBcIjBcIiArIGk7XG4gICAgfVxuICAgIHJldHVybiBpO1xufVxuXG5mdW5jdGlvbiBzdGFydFRpbWUoKSB7XG4gICAgdmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICB2YXIgaCA9IHRvZGF5LmdldEhvdXJzKCk7XG4gICAgdmFyIG0gPSB0b2RheS5nZXRNaW51dGVzKCk7XG4gICAgLy8gYWRkIGEgemVybyBpbiBmcm9udCBvZiBudW1iZXJzPDEwXG4gICAgbSA9IGNoZWNrVGltZShtKTtcbiAgICBkYXRlVGl0bGUuaW5uZXJIVE1MID0gZGF5T2ZXZWVrKHRvZGF5LmdldERheSgpKSArICcsICcgKyB0b2RheS5nZXRVVENEYXRlKCkgKyAnICcrIG1vdXRoT2ZZZWFyKHRvZGF5LmdldE1vbnRoKCkpICsgJyAnICsgaCArIFwiOlwiICsgbTtcbiAgICB2YXIgdCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBzdGFydFRpbWUoKVxuICAgIH0sIDUwMCk7XG59XG5zdGFydFRpbWUoKTtcblxuZXhwb3J0IGRlZmF1bHQgaGVhZENpdHk7IiwiY29uc3QgYWlyVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMi5haXInKTtcblxuZnVuY3Rpb24gc2hvd0Fpcih2YWx1ZSl7XG4gICAgYWlyVmFsdWUuaW5uZXJIVE1MID0gYCR7dmFsdWV9IG1iYFxufVxuZXhwb3J0IGRlZmF1bHQgc2hvd0FpcjsiLCJmdW5jdGlvbiBjbG91ZFN0YXR1cyhzdGF0dXNUZW1wLCBjbGFzc2xpKXtcbiAgICB2YXIgaG91ciA9IG5ldyBEYXRlKCkuZ2V0SG91cnMoKTtcbiAgICBjb25zdCBjbG91ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNsb3VkLmNsYXNzTGlzdC5hZGQoY2xhc3NsaSk7XG4gICAgY2xvdWQuc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7c3RhdHVzVGVtcH1ANHgucG5nYDtcbiAgICByZXR1cm4gY2xvdWQ7XG59XG5leHBvcnQgZGVmYXVsdCBjbG91ZFN0YXR1czsiLCJmdW5jdGlvbiBjb252ZXJ0ZXJXZWF0aGVyKHRlbXBlcmF0dXJlLCB1bml0eSl7XG4gICAgc3dpdGNoKHVuaXR5KXtcbiAgICAgICAgY2FzZSAnQ2Vsc2l1cycgOiByZXR1cm4gdGVtcGVyYXR1cmUtMjczICsgJyDCsEMnOyBicmVhaztcbiAgICAgICAgY2FzZSAnS2VsdmluJyA6IHJldHVybiB0ZW1wZXJhdHVyZSArICcgwrBLJzsgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0ZhaHJlbmhlaXQnIDogcmV0dXJuICgoKHRlbXBlcmF0dXJlLTI3MykqMS44KSArMzIpLnRvRml4ZWQoKSArICcgwrBGJzsgYnJlYWs7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY29udmVydGVyV2VhdGhlcjsiLCJmdW5jdGlvbiBkYXlPZldlZWsobnVtYmVyKXtcbiAgICB2YXIgbmFtZU9mRGF5ID0gJyc7XG4gICAgc3dpdGNoKG51bWJlcil7XG4gICAgICAgIGNhc2UgMDogbmFtZU9mRGF5ID0gJ1N1bic7IGJyZWFrO1xuICAgICAgICBjYXNlIDE6IG5hbWVPZkRheSA9ICdNb24nOyBicmVhaztcbiAgICAgICAgY2FzZSAyOiBuYW1lT2ZEYXkgPSAnVHVlcyc7IGJyZWFrO1xuICAgICAgICBjYXNlIDM6IG5hbWVPZkRheSA9ICdXZWQnOyBicmVhaztcbiAgICAgICAgY2FzZSA0OiBuYW1lT2ZEYXkgPSAnVGh1JzsgYnJlYWs7XG4gICAgICAgIGNhc2UgNTogbmFtZU9mRGF5ID0gJ0ZyaSc7IGJyZWFrO1xuICAgICAgICBjYXNlIDY6IG5hbWVPZkRheSA9ICdTYXQnOyBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIG5hbWVPZkRheTtcbn1cbmV4cG9ydCBkZWZhdWx0IGRheU9mV2VlazsiLCJjb25zdCBlbGVtZW50Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5mb3JtLWdyb3VwJyk7XG5jb25zdCBidXR0b25TZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24uYnRuLXNlYXJjaCcpO1xuY29uc3QgYnV0dG9uQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24uYnRuLWNsb3NlJyk7XG5jb25zdCBlbGVtZW50SW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5pbmZvJyk7XG5jb25zdCBlbGVtZW50U2V0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Rpdi5zZXQnKTtcbmNvbnN0IGVsZW1lbnRMaXN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2Lmxpc3QtYnV0dG9uJyk7XG5cbmZ1bmN0aW9uIGRpc3BsYXlGb3JtKCl7XG4gICAvKiBcbiAgIFNob3cgdGhlIEVsZW1lbnRcbiAgICAqL1xuICAgYnV0dG9uU2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICBlbGVtZW50Rm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKTtcbiAgICBlbGVtZW50SW5mby5jbGFzc0xpc3QuYWRkKCdpbnZpc2libGUnKTtcbiAgICBlbGVtZW50Rm9ybS5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICB9KTtcbiAgIC8qVGFraW5nIEFsbCBlbGVtZW50IHdpdGggdGhpcyBDbGFzcyBhbmQgc2V0IHRoZW0gZm9yIHJlY2lldmUgJ2ludmlzaWJsZScgYW5kICdzZXRhJyBjbGFzc2VzKi9cbiAgIGZvcihsZXQgaT0wOyBpPGVsZW1lbnRTZXRhLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgZWxlbWVudExpc3RCdXR0b25baV0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKCk9PntcbiAgICAgICAgZWxlbWVudFNldGFbaV0uY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJyk7XG4gICAgICAgIGVsZW1lbnRTZXRhW2ldLmNsYXNzTGlzdC5hZGQoJ3NldGEnKTtcbiAgICAgICB9KVxuICAgICAgIGVsZW1lbnRMaXN0QnV0dG9uW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCk9PntcbiAgICAgICAgZWxlbWVudFNldGFbaV0uY2xhc3NMaXN0LmFkZCgnaW52aXNpYmxlJyk7XG4gICAgICAgIGVsZW1lbnRTZXRhW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3NldGEnKTtcbiAgICAgICB9KVxuICAgfVxuICAgLyoqXG4gICAgKiBIaWRkZW4gdGhlIEVsZW1lbnRcbiAgICAqL1xuICAgYnV0dG9uQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgIGVsZW1lbnRGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICBlbGVtZW50Rm9ybS5jbGFzc0xpc3QuYWRkKCdpbnZpc2libGUnKTtcbiAgICBlbGVtZW50SW5mby5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKTtcbiAgICBlbGVtZW50SW5mby5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICB9KVxuXG59XG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5Rm9ybTsiLCJjb25zdCBwcm9ncmVzc0h1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LnByb2dyZXNzJyk7XG5jb25zdCB2YWxvckh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDIuaHVtaWRpdHlQJyk7XG5cbmZ1bmN0aW9uIGh1bWlkaXR5U2hvdyh2YWxvcil7XG4gICAgcHJvZ3Jlc3NIdW1pZGl0eS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYHdpZHRoOiAke3ZhbG9yfSVgKTtcbiAgICB2YWxvckh1bWlkaXR5LmlubmVySFRNTCA9IGAke3ZhbG9yfSVgO1xufVxuZXhwb3J0IGRlZmF1bHQgaHVtaWRpdHlTaG93OyIsImZ1bmN0aW9uIG1vdXRoT2ZZZWFyKG51bWJlcikge1xuICAgIHZhciBuYW1lT2ZNb3V0aCA9ICcgSmFuJztcbiAgICBzd2l0Y2gobnVtYmVyKXtcbiAgICAgICAgY2FzZSAwOiBuYW1lT2ZNb3V0aCA9ICdKYW4nOyBicmVhaztcbiAgICAgICAgY2FzZSAxOiBuYW1lT2ZNb3V0aCA9ICdGZWInOyBicmVhaztcbiAgICAgICAgY2FzZSAyOiBuYW1lT2ZNb3V0aCA9ICdNYXJjaCc7IGJyZWFrO1xuICAgICAgICBjYXNlIDM6IG5hbWVPZk1vdXRoID0gJ0FwcmlsJzsgYnJlYWs7XG4gICAgICAgIGNhc2UgNDogbmFtZU9mTW91dGggPSAnTWF5JzsgYnJlYWs7XG4gICAgICAgIGNhc2UgNTogbmFtZU9mTW91dGggPSAnSnVuZSc7IGJyZWFrO1xuICAgICAgICBjYXNlIDY6IG5hbWVPZk1vdXRoID0gJ0p1bHknOyBicmVhaztcbiAgICAgICAgY2FzZSA3OiBuYW1lT2ZNb3V0aCA9ICdBdWcnOyBicmVhaztcbiAgICAgICAgY2FzZSA4OiBuYW1lT2ZNb3V0aCA9ICdTZXB0JzsgYnJlYWs7XG4gICAgICAgIGNhc2UgOTogbmFtZU9mTW91dGggPSAnT2N0JzsgYnJlYWs7XG4gICAgICAgIGNhc2UgMTA6IG5hbWVPZk1vdXRoID0gJ05vdic7IGJyZWFrO1xuICAgICAgICBjYXNlIDExOiBuYW1lT2ZNb3V0aCA9ICdEZWMnOyBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIG5hbWVPZk1vdXRoO1xufVxuZXhwb3J0IGRlZmF1bHQgbW91dGhPZlllYXI7IiwiaW1wb3J0IHsgd2VhdGhlclVuaXR5IH0gZnJvbSBcIi4vd2VhdGhlckluaXRcIjtcblxuY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dC5jaXR5TmFtZScpO1xuY29uc3QgYnRuU2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uLmJ1dHRvblNlYXJjaCcpO1xuY29uc3QgZWxlbWVudEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuZm9ybS1ncm91cCcpO1xuY29uc3QgZWxlbWVudEluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuaW5mbycpO1xuXG5mdW5jdGlvbiBzZWFyY2goKSB7XG4gICAgYnRuU2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgaWYoY2l0eU5hbWUudmFsdWUubGVuZ3RoID09PSAwKXtcbiAgICAgICAgICAgIGFsZXJ0KCdXcml0ZSBUaGUgbmFtZSBvZiBjaXR5JylcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB2YXIgY2l0eSA9IGNpdHlOYW1lLnZhbHVlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgY2l0eU5hbWUudmFsdWUuc2xpY2UoMSk7XG4gICAgICAgICAgICBlbGVtZW50Rm9ybS5jbGFzc0xpc3QuYWRkKCdpbnZpc2libGUnKTtcbiAgICAgICAgICAgIGVsZW1lbnRJbmZvLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmlzaWJsZScpO1xuICAgICAgICAgICAgd2VhdGhlclVuaXR5KGNpdHkpO1xuICAgICAgICAgICAgY2l0eU5hbWUudmFsdWU9Jyc7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfSlcbn1cbmV4cG9ydCBkZWZhdWx0IHNlYXJjaDsiLCJjb25zdCB2aXNpYmlsaXR5VmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMi52aXNpYmlsaXR5Jyk7XG5cbmZ1bmN0aW9uIHNob3dWaXNpYmlsaXR5KHZhbHVlKXtcbiAgICB2aXNpYmlsaXR5VmFsdWUuaW5uZXJIVE1MID0gYCR7dmFsdWV9IG1pbGVzYFxufVxuZXhwb3J0IGRlZmF1bHQgc2hvd1Zpc2liaWxpdHk7IiwiaW1wb3J0IGNvbnZlcnRlcldlYXRoZXIgZnJvbSBcIi4vY29udmVydGVyV2VhdGhlclwiO1xuaW1wb3J0IGhlYWRDaXR5IGZyb20gXCIuLi9oZWFkXCI7XG5pbXBvcnQgaHVtaWRpdHlTaG93IGZyb20gXCIuL2h1bWlkaXR5XCI7XG5pbXBvcnQgc2hvd0FpciBmcm9tIFwiLi9haXJcIjtcbmltcG9ydCBzaG93VmlzaWJpbGl0eSBmcm9tIFwiLi92aXNpYmlsaXR5XCI7XG5pbXBvcnQgeyB3ZWF0aGVyRGFpbHksIHdlZWtUaW1lbGluZSwgc2hvd1RlbXBNYXhNaW4gfSBmcm9tIFwiLi4vd2Vla2x5XCI7XG5pbXBvcnQgd2luZFNob3cgZnJvbSBcIi4vd2luZFwiO1xuXG5jb25zdCBidXR0b25DZWxzaXVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VuaXR5LTEnKTtcbmNvbnN0IGJ1dHRvbkZhaHJlbmhlaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW5pdHktMicpO1xuY29uc3QgYnV0dG9uS2VsdmluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VuaXR5LTMnKTtcblxuLy9LZXkgT2YgQVBJXG52YXIga2V5ID0gJ2E0YWQ2NDQxMDU5NWEyMDM2ZDAxMzMzOTE0MmQ0Njg0JztcbnZhciBjaXR5RGF0YSA9IDA7XG52YXIgZGFpbHlEYXRhID0gMDtcbnZhciB1bml0eSA9ICdDZWxzaXVzJztcblxuYXN5bmMgZnVuY3Rpb24gd2VhdGhlclVuaXR5KGNpdHkpIHtcbiAgICAvKiotLS0tLS0tLS0tLUFwaSBJbml0LS0tLS0tLS0tLS0tLSAqL1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZhcHBpZD0ke2tleX1gLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgICAgICAgY2l0eURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnN0IGRhaWx5ID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xhdD0ke2NpdHlEYXRhLmNvb3JkLmxhdH0mbG9uPSR7Y2l0eURhdGEuY29vcmQubG9uLnRvRml4ZWQoKX0mZXhjbHVkZT13ZWVrbHkmYXBwaWQ9JHtrZXl9YCwgeyBtb2RlOiAnY29ycycgfSk7XG4gICAgICBcbiAgICAgICAgZGFpbHlEYXRhID0gYXdhaXQgZGFpbHkuanNvbigpO1xuICAgICAgICB2YXIgcmVhbFRlbXBlcmF0dXJlID0gcGFyc2VJbnQoY2l0eURhdGEubWFpbi5mZWVsc19saWtlLCAxMCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgYWxlcnQoJ0Vycm9yISBWZXJpZnkgeW91ciBDb25uZWN0aW9uIG9yIENpdHkgTm90IEZvdW5kIScpXG4gICAgfVxuXG4gICAgLyoqLS0tLS0tLUluaXRpYWxpemF0aW9uIG9mIEZ1bmN0aW9ucy0tLS0tLS0tLS0tICovXG4gICAgdmFyIGh1bWlkaXR5VmFsdWUgPSBjaXR5RGF0YS5tYWluLmh1bWlkaXR5O1xuICAgIHdlZWtUaW1lbGluZSgpO1xuICAgIGhlYWRDaXR5KGNpdHlEYXRhLm5hbWUsIGNpdHlEYXRhLndlYXRoZXJbMF0uaWNvbixjaXR5RGF0YS53ZWF0aGVyWzBdLm1haW4sIGNvbnZlcnRlcldlYXRoZXIocmVhbFRlbXBlcmF0dXJlLCB1bml0eSkpO1xuICAgIGh1bWlkaXR5U2hvdyhodW1pZGl0eVZhbHVlKTtcbiAgICBzaG93QWlyKGNpdHlEYXRhLm1haW4ucHJlc3N1cmUpO1xuICAgIHNob3dWaXNpYmlsaXR5KGNpdHlEYXRhLnZpc2liaWxpdHkgLyAxMDAwKTtcbiAgICBtYXhNaW5TaG93KCk7XG4gICAgc2hvd1N0YXR1cygpO1xuICAgIHdpbmRTaG93KGNpdHlEYXRhLndpbmQuc3BlZWQgLGNpdHlEYXRhLndpbmQuZGVnKVxuXG4gICAgYnV0dG9uQ2Vsc2l1cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgYnV0dG9uRmFocmVuaGVpdC5jbGFzc0xpc3QucmVtb3ZlKCdidG4tYWN0aXZlJyk7XG4gICAgICAgIGJ1dHRvbktlbHZpbi5jbGFzc0xpc3QucmVtb3ZlKCdidG4tYWN0aXZlJyk7XG4gICAgICAgIGJ1dHRvbkNlbHNpdXMuY2xhc3NMaXN0LmFkZCgnYnRuLWFjdGl2ZScpO1xuICAgICAgICB1bml0eSA9ICdDZWxzaXVzJztcbiAgICAgICAgaGVhZENpdHkoY2l0eURhdGEubmFtZSwgY2l0eURhdGEud2VhdGhlclswXS5pY29uLGNpdHlEYXRhLndlYXRoZXJbMF0ubWFpbiwgY29udmVydGVyV2VhdGhlcihyZWFsVGVtcGVyYXR1cmUsIHVuaXR5KSk7XG4gICAgICAgIG1heE1pblNob3coKTtcbiAgICB9KTtcbiAgICBidXR0b25GYWhyZW5oZWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBidXR0b25DZWxzaXVzLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi1hY3RpdmUnKTtcbiAgICAgICAgYnV0dG9uS2VsdmluLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi1hY3RpdmUnKTtcbiAgICAgICAgYnV0dG9uRmFocmVuaGVpdC5jbGFzc0xpc3QuYWRkKCdidG4tYWN0aXZlJyk7XG4gICAgICAgIHVuaXR5ID0gJ0ZhaHJlbmhlaXQnO1xuICAgICAgICBoZWFkQ2l0eShjaXR5RGF0YS5uYW1lLCBjaXR5RGF0YS53ZWF0aGVyWzBdLmljb24sY2l0eURhdGEud2VhdGhlclswXS5tYWluLCBjb252ZXJ0ZXJXZWF0aGVyKHJlYWxUZW1wZXJhdHVyZSwgdW5pdHkpKTtcbiAgICAgICAgbWF4TWluU2hvdygpO1xuICAgIH0pO1xuICAgIGJ1dHRvbktlbHZpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgYnV0dG9uRmFocmVuaGVpdC5jbGFzc0xpc3QucmVtb3ZlKCdidG4tYWN0aXZlJyk7XG4gICAgICAgIGJ1dHRvbkNlbHNpdXMuY2xhc3NMaXN0LnJlbW92ZSgnYnRuLWFjdGl2ZScpO1xuICAgICAgICBidXR0b25LZWx2aW4uY2xhc3NMaXN0LmFkZCgnYnRuLWFjdGl2ZScpO1xuICAgICAgICB1bml0eSA9ICdLZWx2aW4nO1xuICAgICAgICBoZWFkQ2l0eShjaXR5RGF0YS5uYW1lLCBjaXR5RGF0YS53ZWF0aGVyWzBdLmljb24sY2l0eURhdGEud2VhdGhlclswXS5tYWluLCBjb252ZXJ0ZXJXZWF0aGVyKHJlYWxUZW1wZXJhdHVyZSwgdW5pdHkpKTtcbiAgICAgICAgbWF4TWluU2hvdygpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBtYXhNaW5TaG93KCl7XG4gICAgdmFyIGNvdW50ID0gMTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDU7IGorKykgeyBcbiAgICAgICAgc2hvd1RlbXBNYXhNaW4odW5pdHksIGRhaWx5RGF0YS5kYWlseVtjb3VudF0udGVtcC5tYXgsIGRhaWx5RGF0YS5kYWlseVtjb3VudF0udGVtcC5taW4sIGopO1xuICAgICAgICBjb3VudCsrO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHNob3dTdGF0dXMoKXtcbiAgICB2YXIgY291bnQgPSAxO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgNTsgaisrKSB7IFxuICAgICAgICB3ZWF0aGVyRGFpbHkoZGFpbHlEYXRhLmRhaWx5W2NvdW50XS53ZWF0aGVyWzBdLmljb24sIGopO1xuICAgICAgICBjb3VudCsrO1xuICAgIH1cbn1cbmV4cG9ydCB7IHdlYXRoZXJVbml0eSB9OyIsImltcG9ydCBzb3VyY2VOYXYgZnJvbSAnLi4vaWNvbi9uYXZlZ2FjYW8ucG5nJztcblxuY29uc3QgaW1nTmF2ZWdhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZy5uYXZlZ2F0aW9uJyk7XG5jb25zdCB3aW5kRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gyLndpbmQnKTtcbmltZ05hdmVnYXRpb24uc3JjID0gc291cmNlTmF2O1xuXG5mdW5jdGlvbiB3aW5kU2hvdyhzcGVlZCwgZGVncmF1KXtcbiAgICBpbWdOYXZlZ2F0aW9uLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgdHJhbnNmb3JtOiByb3RhdGUoJHtkZWdyYXV9ZGVnKWApO1xuICAgIHdpbmRFbGVtZW50LmlubmVySFRNTCA9IGAke3NwZWVkfSBtcGhgO1xufVxuZXhwb3J0IGRlZmF1bHQgd2luZFNob3c7IiwiaW1wb3J0IGRheU9mV2VlayBmcm9tIFwiLi9tb2R1bGVzL2RheU9mV2Vla1wiO1xuaW1wb3J0IG1vdXRoT2ZZZWFyIGZyb20gXCIuL21vZHVsZXMvbW91dGhPZlllYXJcIjtcbmltcG9ydCBjbG91ZFN0YXR1cyBmcm9tIFwiLi9tb2R1bGVzL2Nsb3VkU3RhdHVzXCI7XG5pbXBvcnQgY29udmVydGVyV2VhdGhlciBmcm9tIFwiLi9tb2R1bGVzL2NvbnZlcnRlcldlYXRoZXJcIjtcblxuY29uc3QgZGF0ZVRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdoNC5kYXRlVGVtcCcpO1xuY29uc3QgdGVtcFN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Rpdi50ZW1wU3RhdHVzLTEnKTtcbmNvbnN0IHRlbXBNYXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdoNC50ZW1wTWF4Jyk7XG5jb25zdCB0ZW1wTWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaDQudGVtcE1pbicpO1xuXG5mdW5jdGlvbiB3ZWVrVGltZWxpbmUoKSB7XG5cbiAgICB2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIHZhciBrID0gMTtcbiAgICB2YXIgaW5jcmVtZXREYXkgPSAxO1xuICAgIHZhciBkYXlPZk1vdXRoID0gdG9kYXkuZ2V0VVRDRGF0ZSgpICsgaW5jcmVtZXREYXk7XG4gICAgdmFyIGRheSA9IHRvZGF5LmdldERheSgpO1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCA1OyBqKyspIHtcbiAgICAgICAgZGF5T2ZNb3V0aCA9IHRvZGF5LmdldFVUQ0RhdGUoKSArIGluY3JlbWV0RGF5O1xuICAgICAgICBpZiAoZGF5ICsgayA8PSA2KSB7XG4gICAgICAgICAgICBkYXRlVGVtcFtqXS5pbm5lclRleHQgPSBkYXlPZldlZWsoZGF5ICsgaykgKyAnLCAnICsgZGF5T2ZNb3V0aCArICcgJyArIG1vdXRoT2ZZZWFyKHRvZGF5LmdldE1vbnRoKCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgayA9IDBcbiAgICAgICAgICAgIGRhdGVUZW1wW2pdLmlubmVyVGV4dCA9IGRheU9mV2VlayhrKSArICcsICcgKyBkYXlPZk1vdXRoICsgJyAnICsgbW91dGhPZlllYXIodG9kYXkuZ2V0TW9udGgoKSk7XG4gICAgICAgICAgICBkYXkgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGluY3JlbWV0RGF5KytcbiAgICAgICAgaysrO1xuICAgIH1cblxuXG59XG5mdW5jdGlvbiB3ZWF0aGVyRGFpbHkoc3RhdHVzLCBjb3VudCkge1xuICAgIHRlbXBTdGF0dXNbY291bnRdLmlubmVySFRNTCA9ICcgJztcbiAgICB0ZW1wU3RhdHVzW2NvdW50XS5hcHBlbmRDaGlsZChjbG91ZFN0YXR1cyhzdGF0dXMsICd0ZW1wU3RhdHVzJykpO1xufVxuZnVuY3Rpb24gc2hvd1RlbXBNYXhNaW4odW5pdHksIHRNYXgsIHRNaW4sIGNvdW50KSB7XG4gICAgdGVtcE1heFtjb3VudF0uaW5uZXJIVE1MID0gY29udmVydGVyV2VhdGhlcih0TWF4LnRvRml4ZWQoKSwgdW5pdHkpO1xuICAgIHRlbXBNaW5bY291bnRdLmlubmVySFRNTCA9IGNvbnZlcnRlcldlYXRoZXIodE1pbi50b0ZpeGVkKCkgLSAxLCB1bml0eSk7XG59XG5leHBvcnQgeyB3ZWVrVGltZWxpbmUsIHdlYXRoZXJEYWlseSwgc2hvd1RlbXBNYXhNaW4gfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCBzZWFyY2ggZnJvbSAnLi9tb2R1bGVzL3NlYXJjaCc7XG5pbXBvcnQgZGlzcGxheUZvcm0gZnJvbSAnLi9tb2R1bGVzL2hpZGRlbkVsZW1lbnQnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQge3dlYXRoZXJVbml0eX0gZnJvbSAnLi9tb2R1bGVzL3dlYXRoZXJJbml0JztcblxuY29uc3QgZ3BzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uLmJ0bi1ncHMnKTtcbnZhciBrZXkgPSAnYTRhZDY0NDEwNTk1YTIwMzZkMDEzMzM5MTQyZDQ2ODQnO1xudmFyIGNpdHkgPSAnTHVhbmRhJztcblxud2VhdGhlclVuaXR5KGNpdHkpO1xuZGlzcGxheUZvcm0oKTtcbnNlYXJjaCgpO1xuLyoqLS0tLS0tLS0tLS0tLS1HUFMgRnVuY3Rpb24tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuZ3BzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKHN1Y2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcbn0pXG4gY29uc3QgIHN1Y2Vzc0NhbGxiYWNrID0gYXN5bmMgKHBvc2l0aW9uKSA9PntcbiAgICBjb25zdCBkYWlseSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbD9sYXQ9JHtwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGUudG9GaXhlZCg0KX0mbG9uPSR7cG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZS50b0ZpeGVkKDMpfSZleGNsdWRlPXdlZWtseSZhcHBpZD0ke2tleX1gLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgICBjb25zdCBkYXRhRGF5ID0gYXdhaXQgZGFpbHkuanNvbigpO1xuICAgIGNvbnN0IHRpbWVab25lID0gKGRhdGFEYXkudGltZXpvbmUpLnNwbGl0KCcvJyk7XG4gICAgd2VhdGhlclVuaXR5KHRpbWVab25lWzFdKTtcbn1cbmNvbnN0IGVycm9yQ2FsbGJhY2sgPSAoZXJyb3IpPT57XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==