webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./views/TicketForm.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Home_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./views/Home.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      phone: '',
      name: '',
      home: _Home_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
      limit: 0
    };
  },

  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['addTicket']), {
    // this.setTicketInfo(object), where object contains phone, name, query, comment properties,
    submitTicket() {
      this.$navigateTo(this.home);
      this.addTicket({
        name: this.name,
        phone: this.phone,
        query: this.query,
        location: this.location
      });
    }

  }),
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(['userTicket', 'approvedTicket', 'location'])),
  watch: {
    approvedTicket(newVal, oldVal) {
      if (this.limit < 1) {
        if (newVal != null) {
          alert({
            title: "Ticket Submitted",
            message: "Hello " + newVal.name + ", you're ticket # is " + newVal.number + ". You will be served at window " + (newVal.window + 1) + ".",
            okButtonText: "OK"
          });
        } else {
          alert({
            title: "No service",
            message: "There are currently no employees serving tickets",
            okButtonText: "OK"
          });
        }
      }

      this.limit++;
    }

  },
  props: {
    query: String
  }
});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vdmlld3MvVGlja2V0Rm9ybS52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQURBO0FBRUEsY0FGQTtBQUdBLDZEQUhBO0FBSUE7QUFKQTtBQU1BLEdBUkE7O0FBU0EsNkJBQ0Esc0VBREE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBLHVCQURBO0FBRUEseUJBRkE7QUFHQSx5QkFIQTtBQUlBO0FBSkE7QUFNQTs7QUFiQSxJQVRBO0FBd0JBLDhCQUNBLG1HQURBLENBeEJBO0FBMkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FEQTtBQUVBLHdGQUNBLGlDQURBLElBQ0EsaUJBREEsSUFDQSxHQUhBO0FBSUE7QUFKQTtBQU1BLFNBUEEsTUFPQTtBQUNBO0FBQ0EsK0JBREE7QUFFQSx1RUFGQTtBQUdBO0FBSEE7QUFLQTtBQUNBOztBQUNBO0FBQ0E7O0FBbkJBLEdBM0JBO0FBZ0RBO0FBQ0E7QUFEQTtBQWhEQSxHIiwiZmlsZSI6ImJ1bmRsZS4wNDNhODhhMjBlMDZmYzIwOWM4Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxQYWdlPlxyXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cIlRpY2tldCBQcm9jZXNzaW5nXCIgLz5cclxuICAgIDxTdGFja0xheW91dD5cclxuICAgICAgPExhYmVsIHRleHQ9XCJQaG9uZSBudW1iZXI6XCIgLz5cclxuICAgICAgPFRleHRWaWV3IHYtbW9kZWw9XCJwaG9uZVwiIC8+XHJcblxyXG4gICAgICA8TGFiZWwgdGV4dD1cIkZpcnN0IGFuZCBsYXN0IG5hbWU6XCIgLz5cclxuICAgICAgPFRleHRWaWV3IHYtbW9kZWw9XCJuYW1lXCIgLz5cclxuXHJcbiAgICAgIDxMYWJlbCB0ZXh0PVwiV2hhdCBhcmUgeW91IGhlcmUgZm9yP1wiLz5cclxuICAgICAgPFRleHRWaWV3IHYtbW9kZWw9XCJxdWVyeVwiLz5cclxuXHJcbiAgICAgIDxCdXR0b24gQHRhcD1cInN1Ym1pdFRpY2tldFwiIHRleHQ9XCJTdWJtaXQgVGlja2V0XCIvPlxyXG4gICAgPC9TdGFja0xheW91dD5cclxuICA8L1BhZ2U+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgIHsgbWFwU3RhdGUsIG1hcEFjdGlvbnMsIG1hcE11dGF0aW9ucyB9IGZyb20gJ3Z1ZXgnXHJcbmltcG9ydCBIb21lIGZyb20gJy4vSG9tZS52dWUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgZGF0YSAoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwaG9uZTogJycsXHJcbiAgICAgIG5hbWU6ICcnLFxyXG4gICAgICBob21lOiBIb21lLFxyXG4gICAgICBsaW1pdDogMFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgLi4ubWFwQWN0aW9ucyhbJ2FkZFRpY2tldCddKSxcclxuICAgIC8vIHRoaXMuc2V0VGlja2V0SW5mbyhvYmplY3QpLCB3aGVyZSBvYmplY3QgY29udGFpbnMgcGhvbmUsIG5hbWUsIHF1ZXJ5LCBjb21tZW50IHByb3BlcnRpZXMsXHJcbiAgICBzdWJtaXRUaWNrZXQgKCkge1xyXG5cclxuICAgICAgdGhpcy4kbmF2aWdhdGVUbyh0aGlzLmhvbWUpXHJcblxyXG4gICAgICB0aGlzLmFkZFRpY2tldCh7XHJcbiAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgIHBob25lOiB0aGlzLnBob25lLFxyXG4gICAgICAgIHF1ZXJ5OiB0aGlzLnF1ZXJ5LFxyXG4gICAgICAgIGxvY2F0aW9uOiB0aGlzLmxvY2F0aW9uXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgLi4ubWFwU3RhdGUoWyd1c2VyVGlja2V0JywgJ2FwcHJvdmVkVGlja2V0JywgJ2xvY2F0aW9uJ10pXHJcbiAgfSxcclxuICB3YXRjaDoge1xyXG4gICAgYXBwcm92ZWRUaWNrZXQobmV3VmFsLCBvbGRWYWwpIHtcclxuICAgICAgaWYgKHRoaXMubGltaXQgPCAxKSB7XHJcbiAgICAgICAgaWYgKG5ld1ZhbCAhPSBudWxsKSB7XHJcbiAgICAgICAgICBhbGVydCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIlRpY2tldCBTdWJtaXR0ZWRcIixcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJIZWxsbyBcIiArIG5ld1ZhbC5uYW1lICsgXCIsIHlvdSdyZSB0aWNrZXQgIyBpcyBcIiArIG5ld1ZhbC5udW1iZXJcclxuICAgICAgICAgICAgKyBcIi4gWW91IHdpbGwgYmUgc2VydmVkIGF0IHdpbmRvdyBcIiArIChuZXdWYWwud2luZG93ICsgMSkgKyBcIi5cIixcclxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGFsZXJ0KHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiTm8gc2VydmljZVwiLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIlRoZXJlIGFyZSBjdXJyZW50bHkgbm8gZW1wbG95ZWVzIHNlcnZpbmcgdGlja2V0c1wiLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5saW1pdCsrXHJcbiAgICB9XHJcbiAgfSxcclxuICBwcm9wczoge1xyXG4gICAgcXVlcnk6IFN0cmluZ1xyXG4gIH1cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblxyXG48L3N0eWxlPlxyXG4iXSwic291cmNlUm9vdCI6IiJ9