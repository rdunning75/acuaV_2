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
    return httpModule.getJSON( // `https://acua-server.herokuapp.com/tickets/${ticketId}`
    // `http://[::1]:3000/tickets/${ticketId}`
    "https://acuateam.herokuapp.com/tickets/".concat(ticketId));
  }

});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9UaWNrZXRTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbImh0dHBNb2R1bGUiLCJyZXF1aXJlIiwiYWRkVGlja2V0IiwidGlja2V0IiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsImhlYWRlcnMiLCJjb250ZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImNoZWNrVGlja2V0IiwidGlja2V0SWQiLCJnZXRKU09OIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBLElBQU1BLFVBQVUsR0FBR0MsbUJBQU8sQ0FBQywrQ0FBRCxDQUExQjs7QUFFZTtBQUNiQyxXQUFTLENBQUVDLE1BQUYsRUFBVTtBQUNqQixXQUFPSCxVQUFVLENBQUNJLE9BQVgsQ0FBbUI7QUFDeEI7QUFDQTtBQUNBQyxTQUFHLDBDQUhxQjtBQUl4QkMsWUFBTSxFQUFFLE1BSmdCO0FBS3hCQyxhQUFPLEVBQUU7QUFBRSx3QkFBZ0I7QUFBbEIsT0FMZTtBQU14QkMsYUFBTyxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVAsTUFBZjtBQU5lLEtBQW5CLENBQVA7QUFRRCxHQVZZOztBQVliUSxhQUFXLENBQUVDLFFBQUYsRUFBWTtBQUNyQixXQUFPWixVQUFVLENBQUNhLE9BQVgsRUFDSDtBQUNBO0FBRkcscURBR3VDRCxRQUh2QyxFQUFQO0FBS0E7O0FBbEJXLENBQWYsRSIsImZpbGUiOiJidW5kbGUuOWU1NWI3YjYyYmFiOGIxYjU5NzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGh0dHBNb2R1bGUgPSByZXF1aXJlKCd0bnMtY29yZS1tb2R1bGVzL2h0dHAnKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGFkZFRpY2tldCAodGlja2V0KSB7XHJcbiAgICByZXR1cm4gaHR0cE1vZHVsZS5yZXF1ZXN0KHtcclxuICAgICAgLy8gdXJsOiBgaHR0cHM6Ly9hY3VhLXNlcnZlci5oZXJva3VhcHAuY29tL3RpY2tldHNgLFxyXG4gICAgICAvLyB1cmw6IGBodHRwOi8vWzo6MV06MzAwMC90aWNrZXRzYCxcclxuICAgICAgdXJsOmBodHRwczovL2FjdWF0ZWFtLmhlcm9rdWFwcC5jb20vdGlja2V0c2AsXHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgIGNvbnRlbnQ6IEpTT04uc3RyaW5naWZ5KHRpY2tldClcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgY2hlY2tUaWNrZXQgKHRpY2tldElkKSB7XHJcbiAgICByZXR1cm4gaHR0cE1vZHVsZS5nZXRKU09OKFxyXG4gICAgICAgIC8vIGBodHRwczovL2FjdWEtc2VydmVyLmhlcm9rdWFwcC5jb20vdGlja2V0cy8ke3RpY2tldElkfWBcclxuICAgICAgICAvLyBgaHR0cDovL1s6OjFdOjMwMDAvdGlja2V0cy8ke3RpY2tldElkfWBcclxuICAgICAgICBgaHR0cHM6Ly9hY3VhdGVhbS5oZXJva3VhcHAuY29tL3RpY2tldHMvJHt0aWNrZXRJZH1gXHJcblxyXG4gICl9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==