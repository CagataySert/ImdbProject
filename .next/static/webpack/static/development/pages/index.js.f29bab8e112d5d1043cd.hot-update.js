webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./serverApi_LocalStorage.js":
/*!***********************************!*\
  !*** ./serverApi_LocalStorage.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants_constants_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants/constants.js */ "./constants/constants.js");






var LocalStorageApi = function LocalStorageApi() {
  Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, LocalStorageApi);

  this.addFilmToFavorite = function (filmId) {
    return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (resolve, reject) {
      var response = localStorage.getItem(_constants_constants_js__WEBPACK_IMPORTED_MODULE_4__["KEY"]);

      if (!!response) {
        console.log('if response:', response);
        var filmArray = JSON.parse(response);
        filmArray.push(filmId);
        localStorage.setItem(_constants_constants_js__WEBPACK_IMPORTED_MODULE_4__["KEY"], _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(filmArray));
        console.log(filmArray);
        resolve();
      } else {
        localStorage.setItem(_constants_constants_js__WEBPACK_IMPORTED_MODULE_4__["KEY"], _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()([filmId]));
        console.log('else', response, filmId);
        resolve();
      }
    });
  };

  this.getFavorites = function () {
    return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (resolve, reject) {
      var response = localStorage.getItem(_constants_constants_js__WEBPACK_IMPORTED_MODULE_4__["KEY"]);
      var filmArray = JSON.parse(response);
      !!response === true ? resolve(filmArray) : resolve(null);
    });
  };
};

var local_api = new LocalStorageApi();
/* harmony default export */ __webpack_exports__["default"] = (local_api);

/***/ })

})
//# sourceMappingURL=index.js.f29bab8e112d5d1043cd.hot-update.js.map