webpackHotUpdate("bundle",{

/***/ "./services/TicketService.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var httpModule = __webpack_require__("../node_modules/tns-core-modules/http/http.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  addTicket(ticket) {
    return httpModule.request({
      // url: `http://[::1]:3000/tickets`,
      url: "https://acuateam.herokuapp.com/tickets",
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      content: JSON.stringify(ticket)
    });
  },

  checkTicket(ticketId) {
    return httpModule.getJSON( // `http://[::1]:3000/tickets/${ticketId}`
    "https://acuateam.herokuapp.com/tickets/".concat(ticketId));
  }

});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9UaWNrZXRTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbImh0dHBNb2R1bGUiLCJyZXF1aXJlIiwiYWRkVGlja2V0IiwidGlja2V0IiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsImhlYWRlcnMiLCJjb250ZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImNoZWNrVGlja2V0IiwidGlja2V0SWQiLCJnZXRKU09OIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBLElBQU1BLFVBQVUsR0FBR0MsbUJBQU8sQ0FBQywrQ0FBRCxDQUExQjs7QUFFZTtBQUNiQyxXQUFTLENBQUVDLE1BQUYsRUFBVTtBQUNqQixXQUFPSCxVQUFVLENBQUNJLE9BQVgsQ0FBbUI7QUFDeEI7QUFDQUMsU0FBRywwQ0FGcUI7QUFHeEJDLFlBQU0sRUFBRSxNQUhnQjtBQUl4QkMsYUFBTyxFQUFFO0FBQUUsd0JBQWdCO0FBQWxCLE9BSmU7QUFLeEJDLGFBQU8sRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVQLE1BQWY7QUFMZSxLQUFuQixDQUFQO0FBT0QsR0FUWTs7QUFXYlEsYUFBVyxDQUFFQyxRQUFGLEVBQVk7QUFDckIsV0FBT1osVUFBVSxDQUFDYSxPQUFYLEVBQ0g7QUFERyxxREFFdUNELFFBRnZDLEVBQVA7QUFJQTs7QUFoQlcsQ0FBZixFIiwiZmlsZSI6ImJ1bmRsZS5mOThjNDI4M2I1N2IxZmJkYTNiNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaHR0cE1vZHVsZSA9IHJlcXVpcmUoJ3Rucy1jb3JlLW1vZHVsZXMvaHR0cCcpXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgYWRkVGlja2V0ICh0aWNrZXQpIHtcclxuICAgIHJldHVybiBodHRwTW9kdWxlLnJlcXVlc3Qoe1xyXG4gICAgICAvLyB1cmw6IGBodHRwOi8vWzo6MV06MzAwMC90aWNrZXRzYCxcclxuICAgICAgdXJsOmBodHRwczovL2FjdWF0ZWFtLmhlcm9rdWFwcC5jb20vdGlja2V0c2AsXHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgIGNvbnRlbnQ6IEpTT04uc3RyaW5naWZ5KHRpY2tldClcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgY2hlY2tUaWNrZXQgKHRpY2tldElkKSB7XHJcbiAgICByZXR1cm4gaHR0cE1vZHVsZS5nZXRKU09OKFxyXG4gICAgICAgIC8vIGBodHRwOi8vWzo6MV06MzAwMC90aWNrZXRzLyR7dGlja2V0SWR9YFxyXG4gICAgICAgIGBodHRwczovL2FjdWF0ZWFtLmhlcm9rdWFwcC5jb20vdGlja2V0cy8ke3RpY2tldElkfWBcclxuXHJcbiAgKX1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9