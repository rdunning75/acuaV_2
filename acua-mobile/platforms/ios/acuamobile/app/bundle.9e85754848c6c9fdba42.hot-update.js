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
      query: '',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vdmlld3MvVGlja2V0Rm9ybS52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQURBO0FBRUEsY0FGQTtBQUdBLGVBSEE7QUFJQSw2REFKQTtBQUtBO0FBTEE7QUFPQSxHQVRBOztBQVVBLDZCQUNBLHNFQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFEQTtBQUVBLHlCQUZBO0FBR0EseUJBSEE7QUFJQTtBQUpBO0FBTUE7O0FBWEEsSUFWQTtBQXVCQSw4QkFDQSxtR0FEQSxDQXZCQTtBQTBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBREE7QUFFQSx3RkFDQSxpQ0FEQSxJQUNBLGlCQURBLElBQ0EsR0FIQTtBQUlBO0FBSkE7QUFNQSxTQVBBLE1BT0E7QUFDQTtBQUNBLCtCQURBO0FBRUEsdUVBRkE7QUFHQTtBQUhBO0FBS0E7QUFDQTs7QUFDQTtBQUNBOztBQW5CQSxHQTFCQTtBQStDQTtBQUNBO0FBREE7QUEvQ0EsRyIsImZpbGUiOiJidW5kbGUuOWU4NTc1NDg0OGM2YzlmZGJhNDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8UGFnZT5cclxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XCJUaWNrZXQgUHJvY2Vzc2luZ1wiIC8+XHJcbiAgICA8U3RhY2tMYXlvdXQ+XHJcbiAgICAgIDxMYWJlbCB0ZXh0PVwiUGhvbmUgbnVtYmVyOlwiIC8+XHJcbiAgICAgIDxUZXh0VmlldyB2LW1vZGVsPVwicGhvbmVcIiAvPlxyXG5cclxuICAgICAgPExhYmVsIHRleHQ9XCJGaXJzdCBhbmQgbGFzdCBuYW1lOlwiIC8+XHJcbiAgICAgIDxUZXh0VmlldyB2LW1vZGVsPVwibmFtZVwiIC8+XHJcblxyXG4gICAgICA8TGFiZWwgdGV4dD1cIldoYXQgYXJlIHlvdSBoZXJlIGZvcj9cIi8+XHJcbiAgICAgIDxUZXh0VmlldyB2LW1vZGVsPVwicXVlcnlcIi8+XHJcblxyXG4gICAgICA8QnV0dG9uIEB0YXA9XCJzdWJtaXRUaWNrZXRcIiB0ZXh0PVwiU3VibWl0IFRpY2tldFwiLz5cclxuICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0ICB7IG1hcFN0YXRlLCBtYXBBY3Rpb25zLCBtYXBNdXRhdGlvbnMgfSBmcm9tICd2dWV4J1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuL0hvbWUudnVlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGRhdGEgKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcGhvbmU6ICcnLFxyXG4gICAgICBuYW1lOiAnJyxcclxuICAgICAgcXVlcnk6JycsXHJcbiAgICAgIGhvbWU6IEhvbWUsXHJcbiAgICAgIGxpbWl0OiAwXHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICAuLi5tYXBBY3Rpb25zKFsnYWRkVGlja2V0J10pLFxyXG4gICAgLy8gdGhpcy5zZXRUaWNrZXRJbmZvKG9iamVjdCksIHdoZXJlIG9iamVjdCBjb250YWlucyBwaG9uZSwgbmFtZSwgcXVlcnksIGNvbW1lbnQgcHJvcGVydGllcyxcclxuICAgIHN1Ym1pdFRpY2tldCAoKSB7XHJcbiAgICAgIHRoaXMuJG5hdmlnYXRlVG8odGhpcy5ob21lKVxyXG4gICAgICB0aGlzLmFkZFRpY2tldCh7XHJcbiAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgIHBob25lOiB0aGlzLnBob25lLFxyXG4gICAgICAgIHF1ZXJ5OiB0aGlzLnF1ZXJ5LFxyXG4gICAgICAgIGxvY2F0aW9uOiB0aGlzLmxvY2F0aW9uXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgLi4ubWFwU3RhdGUoWyd1c2VyVGlja2V0JywgJ2FwcHJvdmVkVGlja2V0JywgJ2xvY2F0aW9uJ10pXHJcbiAgfSxcclxuICB3YXRjaDoge1xyXG4gICAgYXBwcm92ZWRUaWNrZXQobmV3VmFsLCBvbGRWYWwpIHtcclxuICAgICAgaWYgKHRoaXMubGltaXQgPCAxKSB7XHJcbiAgICAgICAgaWYgKG5ld1ZhbCAhPSBudWxsKSB7XHJcbiAgICAgICAgICBhbGVydCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIlRpY2tldCBTdWJtaXR0ZWRcIixcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJIZWxsbyBcIiArIG5ld1ZhbC5uYW1lICsgXCIsIHlvdSdyZSB0aWNrZXQgIyBpcyBcIiArIG5ld1ZhbC5udW1iZXJcclxuICAgICAgICAgICAgKyBcIi4gWW91IHdpbGwgYmUgc2VydmVkIGF0IHdpbmRvdyBcIiArIChuZXdWYWwud2luZG93ICsgMSkgKyBcIi5cIixcclxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGFsZXJ0KHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiTm8gc2VydmljZVwiLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIlRoZXJlIGFyZSBjdXJyZW50bHkgbm8gZW1wbG95ZWVzIHNlcnZpbmcgdGlja2V0c1wiLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5saW1pdCsrXHJcbiAgICB9XHJcbiAgfSxcclxuICBwcm9wczoge1xyXG4gICAgcXVlcnk6IFN0cmluZ1xyXG4gIH1cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblxyXG48L3N0eWxlPlxyXG4iXSwic291cmNlUm9vdCI6IiJ9