(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-1b0d6b36.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/chunk-1b0d6b36.js ***!
  \***********************************************************************/
/*! exports provided: startTapClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startTapClick", function() { return startTapClick; });
/* harmony import */ var _chunk_6d7d2f8c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunk-6d7d2f8c.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-6d7d2f8c.js");
function startTapClick(t,e){var n,i,o,a=10*-MOUSE_WAIT,r=0,c=!1,s=!1,d=e.getBoolean("animated",!0)&&e.getBoolean("rippleEffect",!0),f=new WeakMap;function l(t){a=Object(_chunk_6d7d2f8c_js__WEBPACK_IMPORTED_MODULE_0__["b"])(t),v(t)}function u(){clearTimeout(o),o=void 0,n&&(p(!1),n=void 0),c=!0}function E(t){n||s||(c=!1,T(getActivatableTarget(t),t))}function v(t){s||(T(void 0,t),c&&t.cancelable&&t.preventDefault())}function T(t,e){if(!t||t!==n){clearTimeout(o),o=void 0;var i=Object(_chunk_6d7d2f8c_js__WEBPACK_IMPORTED_MODULE_0__["k"])(e),a=i.x,r=i.y;if(n){if(f.has(n))throw new Error("internal error");n.classList.contains(ACTIVATED)||A(n,a,r),p(!0)}if(t){var c=f.get(t);c&&(clearTimeout(c),f.delete(t));var s=isInstant(t)?0:ADD_ACTIVATED_DEFERS;t.classList.remove(ACTIVATED),o=setTimeout(function(){A(t,a,r),o=void 0},s)}n=t}}function A(t,e,n){r=Date.now(),t.classList.add(ACTIVATED);var o=d&&getRippleEffect(t);o&&o.addRipple&&(i=o.addRipple(e,n))}function p(t){void 0!==i&&i.then(function(t){return t()});var e=n;if(e){var o=CLEAR_STATE_DEFERS-Date.now()+r;if(t&&o>0&&!isInstant(e)){var a=setTimeout(function(){e.classList.remove(ACTIVATED),f.delete(e)},CLEAR_STATE_DEFERS);f.set(e,a)}else e.classList.remove(ACTIVATED)}}t.addEventListener("click",function(t){(c||s)&&(t.preventDefault(),t.stopPropagation(),c=!1)},!0),t.addEventListener("ionScrollStart",function(){s=!0,u()}),t.addEventListener("ionScrollEnd",function(){s=!1}),t.addEventListener("ionGestureCaptured",u),t.addEventListener("touchstart",function(t){a=Object(_chunk_6d7d2f8c_js__WEBPACK_IMPORTED_MODULE_0__["b"])(t),E(t)},!0),t.addEventListener("touchcancel",l,!0),t.addEventListener("touchend",l,!0),t.addEventListener("mousedown",function(t){var e=Object(_chunk_6d7d2f8c_js__WEBPACK_IMPORTED_MODULE_0__["b"])(t)-MOUSE_WAIT;a<e&&E(t)},!0),t.addEventListener("mouseup",function(t){var e=Object(_chunk_6d7d2f8c_js__WEBPACK_IMPORTED_MODULE_0__["b"])(t)-MOUSE_WAIT;a<e&&v(t)},!0)}function getActivatableTarget(t){if(!t.composedPath)return t.target.closest(".ion-activatable");for(var e=t.composedPath(),n=0;n<e.length-2;n++){var i=e[n];if(i.classList&&i.classList.contains("ion-activatable"))return i}}function isInstant(t){return t.classList.contains("ion-activatable-instant")}function getRippleEffect(t){if(t.shadowRoot){var e=t.shadowRoot.querySelector("ion-ripple-effect");if(e)return e}return t.querySelector("ion-ripple-effect")}var ACTIVATED="activated",ADD_ACTIVATED_DEFERS=200,CLEAR_STATE_DEFERS=200,MOUSE_WAIT=2500;

/***/ })

}]);
//# sourceMappingURL=3.js.map