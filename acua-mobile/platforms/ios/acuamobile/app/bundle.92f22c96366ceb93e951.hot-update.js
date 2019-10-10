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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vdmlld3MvVGlja2V0Rm9ybS52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQURBO0FBRUEsY0FGQTtBQUdBLDZEQUhBO0FBSUE7QUFKQTtBQU1BLEdBUkE7O0FBU0EsNkJBQ0Esc0VBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQURBO0FBRUEseUJBRkE7QUFHQSx5QkFIQTtBQUlBO0FBSkE7QUFNQTs7QUFYQSxJQVRBO0FBc0JBLDhCQUNBLG1HQURBLENBdEJBO0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FEQTtBQUVBLHdGQUNBLGlDQURBLElBQ0EsaUJBREEsSUFDQSxHQUhBO0FBSUE7QUFKQTtBQU1BLFNBUEEsTUFPQTtBQUNBO0FBQ0EsK0JBREE7QUFFQSx1RUFGQTtBQUdBO0FBSEE7QUFLQTtBQUNBOztBQUNBO0FBQ0E7O0FBbkJBLEdBekJBO0FBOENBO0FBQ0E7QUFEQTtBQTlDQSxHIiwiZmlsZSI6ImJ1bmRsZS45MmYyMmM5NjM2NmNlYjkzZTk1MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxQYWdlPlxyXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cIlRpY2tldCBQcm9jZXNzaW5nXCIgLz5cclxuICAgIDxTdGFja0xheW91dD5cclxuICAgICAgPExhYmVsIHRleHQ9XCJQaG9uZSBudW1iZXI6XCIgLz5cclxuICAgICAgPFRleHRWaWV3IHYtbW9kZWw9XCJwaG9uZVwiIC8+XHJcblxyXG4gICAgICA8TGFiZWwgdGV4dD1cIkZpcnN0IGFuZCBsYXN0IG5hbWU6XCIgLz5cclxuICAgICAgPFRleHRWaWV3IHYtbW9kZWw9XCJuYW1lXCIgLz5cclxuXHJcbiAgICAgIDxMYWJlbCB0ZXh0PVwiV2hhdCBhcmUgeW91IGhlcmUgZm9yP1wiLz5cclxuICAgICAgPFRleHRWaWV3IHYtbW9kZWw9XCJxdWVyeVwiLz5cclxuXHJcbiAgICAgIDxCdXR0b24gQHRhcD1cInN1Ym1pdFRpY2tldFwiIHRleHQ9XCJTdWJtaXQgVGlja2V0XCIvPlxyXG4gICAgPC9TdGFja0xheW91dD5cclxuICA8L1BhZ2U+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgIHsgbWFwU3RhdGUsIG1hcEFjdGlvbnMsIG1hcE11dGF0aW9ucyB9IGZyb20gJ3Z1ZXgnXHJcbmltcG9ydCBIb21lIGZyb20gJy4vSG9tZS52dWUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgZGF0YSAoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwaG9uZTogJycsXHJcbiAgICAgIG5hbWU6ICcnLFxyXG4gICAgICBob21lOiBIb21lLFxyXG4gICAgICBsaW1pdDogMFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgLi4ubWFwQWN0aW9ucyhbJ2FkZFRpY2tldCddKSxcclxuICAgIC8vIHRoaXMuc2V0VGlja2V0SW5mbyhvYmplY3QpLCB3aGVyZSBvYmplY3QgY29udGFpbnMgcGhvbmUsIG5hbWUsIHF1ZXJ5LCBjb21tZW50IHByb3BlcnRpZXMsXHJcbiAgICBzdWJtaXRUaWNrZXQgKCkge1xyXG4gICAgICB0aGlzLiRuYXZpZ2F0ZVRvKHRoaXMuaG9tZSlcclxuICAgICAgdGhpcy5hZGRUaWNrZXQoe1xyXG4gICAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgICBwaG9uZTogdGhpcy5waG9uZSxcclxuICAgICAgICBxdWVyeTogdGhpcy5xdWVyeSxcclxuICAgICAgICBsb2NhdGlvbjogdGhpcy5sb2NhdGlvblxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIC4uLm1hcFN0YXRlKFsndXNlclRpY2tldCcsICdhcHByb3ZlZFRpY2tldCcsICdsb2NhdGlvbiddKVxyXG4gIH0sXHJcbiAgd2F0Y2g6IHtcclxuICAgIGFwcHJvdmVkVGlja2V0KG5ld1ZhbCwgb2xkVmFsKSB7XHJcbiAgICAgIGlmICh0aGlzLmxpbWl0IDwgMSkge1xyXG4gICAgICAgIGlmIChuZXdWYWwgIT0gbnVsbCkge1xyXG4gICAgICAgICAgYWxlcnQoe1xyXG4gICAgICAgICAgICB0aXRsZTogXCJUaWNrZXQgU3VibWl0dGVkXCIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiSGVsbG8gXCIgKyBuZXdWYWwubmFtZSArIFwiLCB5b3UncmUgdGlja2V0ICMgaXMgXCIgKyBuZXdWYWwubnVtYmVyXHJcbiAgICAgICAgICAgICsgXCIuIFlvdSB3aWxsIGJlIHNlcnZlZCBhdCB3aW5kb3cgXCIgKyAobmV3VmFsLndpbmRvdyArIDEpICsgXCIuXCIsXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBhbGVydCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIk5vIHNlcnZpY2VcIixcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJUaGVyZSBhcmUgY3VycmVudGx5IG5vIGVtcGxveWVlcyBzZXJ2aW5nIHRpY2tldHNcIixcclxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubGltaXQrK1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcHJvcHM6IHtcclxuICAgIHF1ZXJ5OiBTdHJpbmdcclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cclxuPC9zdHlsZT5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==