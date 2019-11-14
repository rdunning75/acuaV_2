webpackHotUpdate("bundle",{

/***/ "./services/FaqService.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var httpModule = __webpack_require__("../node_modules/tns-core-modules/http/http.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  getFaqs() {
    return httpModule.getJSON('http://localhost:3000/faqs');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9GYXFTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbImh0dHBNb2R1bGUiLCJyZXF1aXJlIiwiZ2V0RmFxcyIsImdldEpTT04iLCJhZGRGYXEiLCJmYXEiLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwiaGVhZGVycyIsImNvbnRlbnQiLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBLElBQU1BLFVBQVUsR0FBR0MsbUJBQU8sQ0FBQywrQ0FBRCxDQUExQjs7QUFFZTtBQUNiQyxTQUFPLEdBQUk7QUFDVCxXQUFPRixVQUFVLENBQUNHLE9BQVgsQ0FBbUIsNEJBQW5CLENBQVA7QUFDRCxHQUhZOztBQUliQyxRQUFNLENBQUVDLEdBQUYsRUFBTztBQUNYLFdBQU9MLFVBQVUsQ0FBQ00sT0FBWCxDQUFtQjtBQUN4QjtBQUNBQyxTQUFHLEVBQUUsdUJBRm1CO0FBR3hCQyxZQUFNLEVBQUUsTUFIZ0I7QUFJeEJDLGFBQU8sRUFBRTtBQUFFLHdCQUFnQjtBQUFsQixPQUplO0FBS3hCQyxhQUFPLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlUCxHQUFmO0FBTGUsS0FBbkIsQ0FBUDtBQU9EOztBQVpZLENBQWYsRSIsImZpbGUiOiJidW5kbGUuMjM1YzU0MDMyYjM4ZjI5MzBiODcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGh0dHBNb2R1bGUgPSByZXF1aXJlKCd0bnMtY29yZS1tb2R1bGVzL2h0dHAnKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGdldEZhcXMgKCkge1xyXG4gICAgcmV0dXJuIGh0dHBNb2R1bGUuZ2V0SlNPTignaHR0cDovL2xvY2FsaG9zdDozMDAwL2ZhcXMnKVxyXG4gIH0sXHJcbiAgYWRkRmFxIChmYXEpIHtcclxuICAgIHJldHVybiBodHRwTW9kdWxlLnJlcXVlc3Qoe1xyXG4gICAgICAvLyB1cmw6IGBodHRwczovL2FjdWEtc2VydmVyLmhlcm9rdWFwcC5jb20vZmFxc2AsXHJcbiAgICAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCcsXHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgIGNvbnRlbnQ6IEpTT04uc3RyaW5naWZ5KGZhcSlcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=