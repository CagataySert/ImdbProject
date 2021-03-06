webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./stores/store.js":
/*!*************************!*\
  !*** ./stores/store.js ***!
  \*************************/
/*! exports provided: initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/initializerDefineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/initializerDefineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/applyDecoratedDescriptor */ "./node_modules/@babel/runtime-corejs2/helpers/esm/applyDecoratedDescriptor.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/initializerWarningHelper */ "./node_modules/@babel/runtime-corejs2/helpers/esm/initializerWarningHelper.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobx-react.module.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _constants_constants_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constants/constants.js */ "./constants/constants.js");







var _class, _descriptor, _descriptor2, _temp;






var isServer = typeof window === 'undefined';
Object(mobx_react__WEBPACK_IMPORTED_MODULE_7__["useStaticRendering"])(isServer);
var Store = (_class = (_temp = function Store() {
  var initialData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Store);

  Object(_babel_runtime_corejs2_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "films", _descriptor, this);

  Object(_babel_runtime_corejs2_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "searchFilm", _descriptor2, this);

  this.films = initialData;
}, _temp), (_descriptor = Object(_babel_runtime_corejs2_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_4__["default"])(_class.prototype, "films", [mobx__WEBPACK_IMPORTED_MODULE_6__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return {};
  }
}), _descriptor2 = Object(_babel_runtime_corejs2_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_4__["default"])(_class.prototype, "searchFilm", [mobx__WEBPACK_IMPORTED_MODULE_6__["action"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this = this;

    return (
      /*#__PURE__*/
      function () {
        var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
        /*#__PURE__*/
        _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(title, year, type) {
          var response, _ref2, Search, _loop, i;

          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default()("".concat(_constants_constants_js__WEBPACK_IMPORTED_MODULE_9__["API_BASE"], "&s=").concat(title, "&y=").concat(year, "&type=").concat(type));

                case 2:
                  response = _context2.sent;
                  _context2.next = 5;
                  return response.json();

                case 5:
                  _ref2 = _context2.sent;
                  Search = _ref2.Search;
                  _loop =
                  /*#__PURE__*/
                  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _loop(i) {
                    var response, filmDetail, filteredFilm;
                    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _loop$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default()("".concat(_constants_constants_js__WEBPACK_IMPORTED_MODULE_9__["API_BASE"], "&i=").concat(Search[i].imdbID));

                          case 2:
                            response = _context.sent;
                            _context.next = 5;
                            return response.json();

                          case 5:
                            filmDetail = _context.sent;
                            filteredFilm = Search.filter(function (film) {
                              return film.imdbID === Search[i].imdbID;
                            });
                            filteredFilm[0].imdbRating = filmDetail.imdbRating;
                            console.log(filteredFilm);

                          case 9:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _loop);
                  });
                  i = 0;

                case 9:
                  if (!(i < Search.length)) {
                    _context2.next = 14;
                    break;
                  }

                  return _context2.delegateYield(_loop(i), "t0", 11);

                case 11:
                  i++;
                  _context2.next = 9;
                  break;

                case 14:
                  _this.films = Search;

                case 15:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee);
        }));

        return function (_x, _x2, _x3) {
          return _ref.apply(this, arguments);
        };
      }()
    );
  }
})), _class);
var store = null;
function initializeStore(initialData) {
  if (isServer) {
    return new Store(initialData);
  } else {
    if (store === null) {
      store = new Store(initialData);
    }

    return store;
  }
}

/***/ })

})
//# sourceMappingURL=_app.js.d5f5b38b1d5c14b97bac.hot-update.js.map