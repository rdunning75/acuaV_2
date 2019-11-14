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
      url: "http://:3000/tickets",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9UaWNrZXRTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbImh0dHBNb2R1bGUiLCJyZXF1aXJlIiwiYWRkVGlja2V0IiwidGlja2V0IiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsImhlYWRlcnMiLCJjb250ZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImNoZWNrVGlja2V0IiwidGlja2V0SWQiLCJnZXRKU09OIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBLElBQU1BLFVBQVUsR0FBR0MsbUJBQU8sQ0FBQywrQ0FBRCxDQUExQjs7QUFFZTtBQUNiQyxXQUFTLENBQUVDLE1BQUYsRUFBVTtBQUNqQixXQUFPSCxVQUFVLENBQUNJLE9BQVgsQ0FBbUI7QUFDeEI7QUFDQUMsU0FBRyx3QkFGcUI7QUFHeEJDLFlBQU0sRUFBRSxNQUhnQjtBQUl4QkMsYUFBTyxFQUFFO0FBQUUsd0JBQWdCO0FBQWxCLE9BSmU7QUFLeEJDLGFBQU8sRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVQLE1BQWY7QUFMZSxLQUFuQixDQUFQO0FBT0QsR0FUWTs7QUFXYlEsYUFBVyxDQUFFQyxRQUFGLEVBQVk7QUFDckIsV0FBT1osVUFBVSxDQUFDYSxPQUFYLEVBQ0g7QUFERywyQ0FFNkJELFFBRjdCLEVBQVA7QUFHRTs7QUFmUyxDQUFmLEUiLCJmaWxlIjoiYnVuZGxlLjA2NTgxODQ4NWJjZGZhMWM5NTRkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBodHRwTW9kdWxlID0gcmVxdWlyZSgndG5zLWNvcmUtbW9kdWxlcy9odHRwJylcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBhZGRUaWNrZXQgKHRpY2tldCkge1xyXG4gICAgcmV0dXJuIGh0dHBNb2R1bGUucmVxdWVzdCh7XHJcbiAgICAgIC8vIHVybDogYGh0dHBzOi8vYWN1YS1zZXJ2ZXIuaGVyb2t1YXBwLmNvbS90aWNrZXRzYCxcclxuICAgICAgdXJsOiBgaHR0cDovLzozMDAwL3RpY2tldHNgLFxyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICBjb250ZW50OiBKU09OLnN0cmluZ2lmeSh0aWNrZXQpXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIGNoZWNrVGlja2V0ICh0aWNrZXRJZCkge1xyXG4gICAgcmV0dXJuIGh0dHBNb2R1bGUuZ2V0SlNPTihcclxuICAgICAgICAvLyBgaHR0cHM6Ly9hY3VhLXNlcnZlci5oZXJva3VhcHAuY29tL3RpY2tldHMvJHt0aWNrZXRJZH1gXHJcbiAgICAgICAgYGh0dHA6Ly8xMC4wLjIuMjozMDAwL3RpY2tldHMvJHt0aWNrZXRJZH1gXHJcbiAgICApfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=