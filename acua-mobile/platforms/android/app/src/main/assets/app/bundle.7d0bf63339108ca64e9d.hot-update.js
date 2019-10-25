webpackHotUpdate("bundle",{

/***/ "./services/FaqService.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var httpModule = __webpack_require__("../node_modules/tns-core-modules/http/http.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  getFaqs() {
    return httpModule.getJSON('http://10.0.2.2:3000/faqs');
  },

  addFaq(faq) {
    return httpModule.request({
      // url: `https://acua-server.herokuapp.com/faqs`,
      url: 'http://localhost:3000',
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      content: JSON.stringify(faq)
    });
  }

});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9GYXFTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbImh0dHBNb2R1bGUiLCJyZXF1aXJlIiwiZ2V0RmFxcyIsImdldEpTT04iLCJhZGRGYXEiLCJmYXEiLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwiaGVhZGVycyIsImNvbnRlbnQiLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBLElBQU1BLFVBQVUsR0FBR0MsbUJBQU8sQ0FBQywrQ0FBRCxDQUExQjs7QUFFZTtBQUNiQyxTQUFPLEdBQUk7QUFDVCxXQUFPRixVQUFVLENBQUNHLE9BQVgsQ0FBbUIsMkJBQW5CLENBQVA7QUFDRCxHQUhZOztBQUliQyxRQUFNLENBQUVDLEdBQUYsRUFBTztBQUNYLFdBQU9MLFVBQVUsQ0FBQ00sT0FBWCxDQUFtQjtBQUN4QjtBQUNBQyxTQUFHLEVBQUUsdUJBRm1CO0FBR3hCQyxZQUFNLEVBQUUsTUFIZ0I7QUFJeEJDLGFBQU8sRUFBRTtBQUFFLHdCQUFnQjtBQUFsQixPQUplO0FBS3hCQyxhQUFPLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlUCxHQUFmO0FBTGUsS0FBbkIsQ0FBUDtBQU9EOztBQVpZLENBQWYsRSIsImZpbGUiOiJidW5kbGUuN2QwYmY2MzMzOTEwOGNhNjRlOWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGh0dHBNb2R1bGUgPSByZXF1aXJlKCd0bnMtY29yZS1tb2R1bGVzL2h0dHAnKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGdldEZhcXMgKCkge1xyXG4gICAgcmV0dXJuIGh0dHBNb2R1bGUuZ2V0SlNPTignaHR0cDovLzEwLjAuMi4yOjMwMDAvZmFxcycpXHJcbiAgfSxcclxuICBhZGRGYXEgKGZhcSkge1xyXG4gICAgcmV0dXJuIGh0dHBNb2R1bGUucmVxdWVzdCh7XHJcbiAgICAgIC8vIHVybDogYGh0dHBzOi8vYWN1YS1zZXJ2ZXIuaGVyb2t1YXBwLmNvbS9mYXFzYCxcclxuICAgICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwJyxcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgY29udGVudDogSlNPTi5zdHJpbmdpZnkoZmFxKVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==