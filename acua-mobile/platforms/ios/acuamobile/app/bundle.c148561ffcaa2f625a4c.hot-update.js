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

  } // props: {
  //   query: String
  // }

});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vdmlld3MvVGlja2V0Rm9ybS52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQURBO0FBRUEsY0FGQTtBQUdBLDZEQUhBO0FBSUE7QUFKQTtBQU1BLEdBUkE7O0FBU0EsNkJBQ0Esc0VBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQURBO0FBRUEseUJBRkE7QUFHQSx5QkFIQTtBQUlBO0FBSkE7QUFNQTs7QUFYQSxJQVRBO0FBc0JBLDhCQUNBLG1HQURBLENBdEJBO0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FEQTtBQUVBLHdGQUNBLGlDQURBLElBQ0EsaUJBREEsSUFDQSxHQUhBO0FBSUE7QUFKQTtBQU1BLFNBUEEsTUFPQTtBQUNBO0FBQ0EsK0JBREE7QUFFQSx1RUFGQTtBQUdBO0FBSEE7QUFLQTtBQUNBOztBQUNBO0FBQ0E7O0FBbkJBLEdBekJBLENBOENBO0FBQ0E7QUFDQTs7QUFoREEsRyIsImZpbGUiOiJidW5kbGUuYzE0ODU2MWZmY2FhMmY2MjVhNGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8UGFnZT5cclxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XCJUaWNrZXQgUHJvY2Vzc2luZ1wiIC8+XHJcbiAgICA8U3RhY2tMYXlvdXQ+XHJcbiAgICAgIDxMYWJlbCB0ZXh0PVwiUGhvbmUgbnVtYmVyOlwiIC8+XHJcbiAgICAgIDxUZXh0VmlldyB2LW1vZGVsPVwicGhvbmVcIiAvPlxyXG5cclxuICAgICAgPExhYmVsIHRleHQ9XCJGaXJzdCBhbmQgbGFzdCBuYW1lOlwiIC8+XHJcbiAgICAgIDxUZXh0VmlldyB2LW1vZGVsPVwibmFtZVwiIC8+XHJcblxyXG4gICAgICA8TGFiZWwgdGV4dD1cIldoYXQgYXJlIHlvdSBoZXJlIGZvcj9cIi8+XHJcbiAgICAgIDxUZXh0VmlldyB2LW1vZGVsPVwicXVlcnlcIi8+XHJcblxyXG4gICAgICA8QnV0dG9uIEB0YXA9XCJzdWJtaXRUaWNrZXRcIiB0ZXh0PVwiU3VibWl0IFRpY2tldFwiLz5cclxuICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0ICB7IG1hcFN0YXRlLCBtYXBBY3Rpb25zLCBtYXBNdXRhdGlvbnMgfSBmcm9tICd2dWV4J1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuL0hvbWUudnVlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGRhdGEgKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcGhvbmU6ICcnLFxyXG4gICAgICBuYW1lOiAnJyxcclxuICAgICAgaG9tZTogSG9tZSxcclxuICAgICAgbGltaXQ6IDBcclxuICAgIH1cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIC4uLm1hcEFjdGlvbnMoWydhZGRUaWNrZXQnXSksXHJcbiAgICAvLyB0aGlzLnNldFRpY2tldEluZm8ob2JqZWN0KSwgd2hlcmUgb2JqZWN0IGNvbnRhaW5zIHBob25lLCBuYW1lLCBxdWVyeSwgY29tbWVudCBwcm9wZXJ0aWVzLFxyXG4gICAgc3VibWl0VGlja2V0ICgpIHtcclxuICAgICAgdGhpcy4kbmF2aWdhdGVUbyh0aGlzLmhvbWUpXHJcbiAgICAgIHRoaXMuYWRkVGlja2V0KHtcclxuICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgcGhvbmU6IHRoaXMucGhvbmUsXHJcbiAgICAgICAgcXVlcnk6IHRoaXMucXVlcnksXHJcbiAgICAgICAgbG9jYXRpb246IHRoaXMubG9jYXRpb25cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICAuLi5tYXBTdGF0ZShbJ3VzZXJUaWNrZXQnLCAnYXBwcm92ZWRUaWNrZXQnLCAnbG9jYXRpb24nXSlcclxuICB9LFxyXG4gIHdhdGNoOiB7XHJcbiAgICBhcHByb3ZlZFRpY2tldChuZXdWYWwsIG9sZFZhbCkge1xyXG4gICAgICBpZiAodGhpcy5saW1pdCA8IDEpIHtcclxuICAgICAgICBpZiAobmV3VmFsICE9IG51bGwpIHtcclxuICAgICAgICAgIGFsZXJ0KHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiVGlja2V0IFN1Ym1pdHRlZFwiLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkhlbGxvIFwiICsgbmV3VmFsLm5hbWUgKyBcIiwgeW91J3JlIHRpY2tldCAjIGlzIFwiICsgbmV3VmFsLm51bWJlclxyXG4gICAgICAgICAgICArIFwiLiBZb3Ugd2lsbCBiZSBzZXJ2ZWQgYXQgd2luZG93IFwiICsgKG5ld1ZhbC53aW5kb3cgKyAxKSArIFwiLlwiLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYWxlcnQoe1xyXG4gICAgICAgICAgICB0aXRsZTogXCJObyBzZXJ2aWNlXCIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiVGhlcmUgYXJlIGN1cnJlbnRseSBubyBlbXBsb3llZXMgc2VydmluZyB0aWNrZXRzXCIsXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLmxpbWl0KytcclxuICAgIH1cclxuICB9XHJcbiAgLy8gcHJvcHM6IHtcclxuICAvLyAgIHF1ZXJ5OiBTdHJpbmdcclxuICAvLyB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cclxuPC9zdHlsZT5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==