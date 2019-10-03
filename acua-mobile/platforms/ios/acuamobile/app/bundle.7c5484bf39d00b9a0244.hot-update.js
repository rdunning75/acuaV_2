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
    "https://acuateam.herokuapp.com/tickets/$ticketId");
  }

});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9UaWNrZXRTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbImh0dHBNb2R1bGUiLCJyZXF1aXJlIiwiYWRkVGlja2V0IiwidGlja2V0IiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsImhlYWRlcnMiLCJjb250ZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImNoZWNrVGlja2V0IiwidGlja2V0SWQiLCJnZXRKU09OIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBLElBQU1BLFVBQVUsR0FBR0MsbUJBQU8sQ0FBQywrQ0FBRCxDQUExQjs7QUFFZTtBQUNiQyxXQUFTLENBQUVDLE1BQUYsRUFBVTtBQUNqQixXQUFPSCxVQUFVLENBQUNJLE9BQVgsQ0FBbUI7QUFDeEI7QUFDQTtBQUNBQyxTQUFHLDBDQUhxQjtBQUl4QkMsWUFBTSxFQUFFLE1BSmdCO0FBS3hCQyxhQUFPLEVBQUU7QUFBRSx3QkFBZ0I7QUFBbEIsT0FMZTtBQU14QkMsYUFBTyxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVAsTUFBZjtBQU5lLEtBQW5CLENBQVA7QUFRRCxHQVZZOztBQVliUSxhQUFXLENBQUVDLFFBQUYsRUFBWTtBQUNyQixXQUFPWixVQUFVLENBQUNhLE9BQVgsRUFDSDtBQUNBO0FBRkcsdURBQVA7QUFLQTs7QUFsQlcsQ0FBZixFIiwiZmlsZSI6ImJ1bmRsZS43YzU0ODRiZjM5ZDAwYjlhMDI0NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaHR0cE1vZHVsZSA9IHJlcXVpcmUoJ3Rucy1jb3JlLW1vZHVsZXMvaHR0cCcpXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgYWRkVGlja2V0ICh0aWNrZXQpIHtcclxuICAgIHJldHVybiBodHRwTW9kdWxlLnJlcXVlc3Qoe1xyXG4gICAgICAvLyB1cmw6IGBodHRwczovL2FjdWEtc2VydmVyLmhlcm9rdWFwcC5jb20vdGlja2V0c2AsXHJcbiAgICAgIC8vIHVybDogYGh0dHA6Ly9bOjoxXTozMDAwL3RpY2tldHNgLFxyXG4gICAgICB1cmw6YGh0dHBzOi8vYWN1YXRlYW0uaGVyb2t1YXBwLmNvbS90aWNrZXRzYCxcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgY29udGVudDogSlNPTi5zdHJpbmdpZnkodGlja2V0KVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICBjaGVja1RpY2tldCAodGlja2V0SWQpIHtcclxuICAgIHJldHVybiBodHRwTW9kdWxlLmdldEpTT04oXHJcbiAgICAgICAgLy8gYGh0dHBzOi8vYWN1YS1zZXJ2ZXIuaGVyb2t1YXBwLmNvbS90aWNrZXRzLyR7dGlja2V0SWR9YFxyXG4gICAgICAgIC8vIGBodHRwOi8vWzo6MV06MzAwMC90aWNrZXRzLyR7dGlja2V0SWR9YFxyXG4gICAgICAgIGBodHRwczovL2FjdWF0ZWFtLmhlcm9rdWFwcC5jb20vdGlja2V0cy8kdGlja2V0SWRgLFxyXG5cclxuICApfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=