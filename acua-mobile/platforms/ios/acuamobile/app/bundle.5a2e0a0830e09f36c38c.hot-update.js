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

  }
});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vdmlld3MvVGlja2V0Rm9ybS52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQURBO0FBRUEsY0FGQTtBQUdBLGVBSEE7QUFJQSw2REFKQTtBQUtBO0FBTEE7QUFPQSxHQVRBOztBQVVBLDZCQUNBLHNFQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFEQTtBQUVBLHlCQUZBO0FBR0EseUJBSEE7QUFJQTtBQUpBO0FBTUE7O0FBWEEsSUFWQTtBQXVCQSw4QkFDQSxtR0FEQSxDQXZCQTtBQTBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBREE7QUFFQSx3RkFDQSxpQ0FEQSxJQUNBLGlCQURBLElBQ0EsR0FIQTtBQUlBO0FBSkE7QUFNQSxTQVBBLE1BT0E7QUFDQTtBQUNBLCtCQURBO0FBRUEsdUVBRkE7QUFHQTtBQUhBO0FBS0E7QUFDQTs7QUFDQTtBQUNBOztBQW5CQTtBQTFCQSxHIiwiZmlsZSI6ImJ1bmRsZS41YTJlMGEwODMwZTA5ZjM2YzM4Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxQYWdlPlxyXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cIlRpY2tldCBQcm9jZXNzaW5nXCIgLz5cclxuICAgIDxTdGFja0xheW91dD5cclxuICAgICAgPExhYmVsIHRleHQ9XCJQaG9uZSBudW1iZXI6XCIgLz5cclxuICAgICAgPFRleHRWaWV3IHYtbW9kZWw9XCJwaG9uZVwiIC8+XHJcblxyXG4gICAgICA8TGFiZWwgdGV4dD1cIkZpcnN0IGFuZCBsYXN0IG5hbWU6XCIgLz5cclxuICAgICAgPFRleHRWaWV3IHYtbW9kZWw9XCJuYW1lXCIgLz5cclxuXHJcbiAgICAgIDxMYWJlbCB0ZXh0PVwiV2hhdCBhcmUgeW91IGhlcmUgZm9yP1wiLz5cclxuICAgICAgPFRleHRWaWV3IHYtbW9kZWw9XCJxdWVyeVwiLz5cclxuXHJcbiAgICAgIDxCdXR0b24gQHRhcD1cInN1Ym1pdFRpY2tldFwiIHRleHQ9XCJTdWJtaXQgVGlja2V0XCIvPlxyXG4gICAgPC9TdGFja0xheW91dD5cclxuICA8L1BhZ2U+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgIHsgbWFwU3RhdGUsIG1hcEFjdGlvbnMsIG1hcE11dGF0aW9ucyB9IGZyb20gJ3Z1ZXgnXHJcbmltcG9ydCBIb21lIGZyb20gJy4vSG9tZS52dWUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgZGF0YSAoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwaG9uZTogJycsXHJcbiAgICAgIG5hbWU6ICcnLFxyXG4gICAgICBxdWVyeTonJyxcclxuICAgICAgaG9tZTogSG9tZSxcclxuICAgICAgbGltaXQ6IDBcclxuICAgIH1cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIC4uLm1hcEFjdGlvbnMoWydhZGRUaWNrZXQnXSksXHJcbiAgICAvLyB0aGlzLnNldFRpY2tldEluZm8ob2JqZWN0KSwgd2hlcmUgb2JqZWN0IGNvbnRhaW5zIHBob25lLCBuYW1lLCBxdWVyeSwgY29tbWVudCBwcm9wZXJ0aWVzLFxyXG4gICAgc3VibWl0VGlja2V0ICgpIHtcclxuICAgICAgdGhpcy4kbmF2aWdhdGVUbyh0aGlzLmhvbWUpXHJcbiAgICAgIHRoaXMuYWRkVGlja2V0KHtcclxuICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgcGhvbmU6IHRoaXMucGhvbmUsXHJcbiAgICAgICAgcXVlcnk6IHRoaXMucXVlcnksXHJcbiAgICAgICAgbG9jYXRpb246IHRoaXMubG9jYXRpb25cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICAuLi5tYXBTdGF0ZShbJ3VzZXJUaWNrZXQnLCAnYXBwcm92ZWRUaWNrZXQnLCAnbG9jYXRpb24nXSlcclxuICB9LFxyXG4gIHdhdGNoOiB7XHJcbiAgICBhcHByb3ZlZFRpY2tldChuZXdWYWwsIG9sZFZhbCkge1xyXG4gICAgICBpZiAodGhpcy5saW1pdCA8IDEpIHtcclxuICAgICAgICBpZiAobmV3VmFsICE9IG51bGwpIHtcclxuICAgICAgICAgIGFsZXJ0KHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiVGlja2V0IFN1Ym1pdHRlZFwiLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkhlbGxvIFwiICsgbmV3VmFsLm5hbWUgKyBcIiwgeW91J3JlIHRpY2tldCAjIGlzIFwiICsgbmV3VmFsLm51bWJlclxyXG4gICAgICAgICAgICArIFwiLiBZb3Ugd2lsbCBiZSBzZXJ2ZWQgYXQgd2luZG93IFwiICsgKG5ld1ZhbC53aW5kb3cgKyAxKSArIFwiLlwiLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYWxlcnQoe1xyXG4gICAgICAgICAgICB0aXRsZTogXCJObyBzZXJ2aWNlXCIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiVGhlcmUgYXJlIGN1cnJlbnRseSBubyBlbXBsb3llZXMgc2VydmluZyB0aWNrZXRzXCIsXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLmxpbWl0KytcclxuICAgIH1cclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cclxuPC9zdHlsZT5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==