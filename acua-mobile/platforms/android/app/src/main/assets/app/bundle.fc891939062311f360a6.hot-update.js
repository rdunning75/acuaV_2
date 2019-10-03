webpackHotUpdate("bundle",{

/***/ "./services/TicketService.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var httpModule = __webpack_require__("../node_modules/tns-core-modules/http/http.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  addTicket(ticket) {
    return httpModule.request({
      // url: `https://acua-server.herokuapp.com/tickets`,
      url: "http://[::1]:3000/tickets",
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      content: JSON.stringify(ticket)
    });
  },

  checkTicket(ticketId) {
    return httpModule.getJSON( // `https://acua-server.herokuapp.com/tickets/${ticketId}`
    "http://10.0.2.2:3000/tickets/".concat(ticketId));
  }

});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9UaWNrZXRTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbImh0dHBNb2R1bGUiLCJyZXF1aXJlIiwiYWRkVGlja2V0IiwidGlja2V0IiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsImhlYWRlcnMiLCJjb250ZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImNoZWNrVGlja2V0IiwidGlja2V0SWQiLCJnZXRKU09OIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBLElBQU1BLFVBQVUsR0FBR0MsbUJBQU8sQ0FBQywrQ0FBRCxDQUExQjs7QUFFZTtBQUNiQyxXQUFTLENBQUVDLE1BQUYsRUFBVTtBQUNqQixXQUFPSCxVQUFVLENBQUNJLE9BQVgsQ0FBbUI7QUFDeEI7QUFDQUMsU0FBRyw2QkFGcUI7QUFHeEJDLFlBQU0sRUFBRSxNQUhnQjtBQUl4QkMsYUFBTyxFQUFFO0FBQUUsd0JBQWdCO0FBQWxCLE9BSmU7QUFLeEJDLGFBQU8sRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVQLE1BQWY7QUFMZSxLQUFuQixDQUFQO0FBT0QsR0FUWTs7QUFXYlEsYUFBVyxDQUFFQyxRQUFGLEVBQVk7QUFDckIsV0FBT1osVUFBVSxDQUFDYSxPQUFYLEVBQ0g7QUFERywyQ0FFNkJELFFBRjdCLEVBQVA7QUFHRTs7QUFmUyxDQUFmLEUiLCJmaWxlIjoiYnVuZGxlLmZjODkxOTM5MDYyMzExZjM2MGE2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBodHRwTW9kdWxlID0gcmVxdWlyZSgndG5zLWNvcmUtbW9kdWxlcy9odHRwJylcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBhZGRUaWNrZXQgKHRpY2tldCkge1xyXG4gICAgcmV0dXJuIGh0dHBNb2R1bGUucmVxdWVzdCh7XHJcbiAgICAgIC8vIHVybDogYGh0dHBzOi8vYWN1YS1zZXJ2ZXIuaGVyb2t1YXBwLmNvbS90aWNrZXRzYCxcclxuICAgICAgdXJsOiBgaHR0cDovL1s6OjFdOjMwMDAvdGlja2V0c2AsXHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgIGNvbnRlbnQ6IEpTT04uc3RyaW5naWZ5KHRpY2tldClcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgY2hlY2tUaWNrZXQgKHRpY2tldElkKSB7XHJcbiAgICByZXR1cm4gaHR0cE1vZHVsZS5nZXRKU09OKFxyXG4gICAgICAgIC8vIGBodHRwczovL2FjdWEtc2VydmVyLmhlcm9rdWFwcC5jb20vdGlja2V0cy8ke3RpY2tldElkfWBcclxuICAgICAgICBgaHR0cDovLzEwLjAuMi4yOjMwMDAvdGlja2V0cy8ke3RpY2tldElkfWBcclxuICAgICl9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==