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

  } // props: {
  //   query: String
  // }

});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vdmlld3MvVGlja2V0Rm9ybS52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQURBO0FBRUEsY0FGQTtBQUdBLGVBSEE7QUFJQSw2REFKQTtBQUtBO0FBTEE7QUFPQSxHQVRBOztBQVVBLDZCQUNBLHNFQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFEQTtBQUVBLHlCQUZBO0FBR0EseUJBSEE7QUFJQTtBQUpBO0FBTUE7O0FBWEEsSUFWQTtBQXVCQSw4QkFDQSxtR0FEQSxDQXZCQTtBQTBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBREE7QUFFQSx3RkFDQSxpQ0FEQSxJQUNBLGlCQURBLElBQ0EsR0FIQTtBQUlBO0FBSkE7QUFNQSxTQVBBLE1BT0E7QUFDQTtBQUNBLCtCQURBO0FBRUEsdUVBRkE7QUFHQTtBQUhBO0FBS0E7QUFDQTs7QUFDQTtBQUNBOztBQW5CQSxHQTFCQSxDQStDQTtBQUNBO0FBQ0E7O0FBakRBLEciLCJmaWxlIjoiYnVuZGxlLjBkZWYwNjc5MTUxNjRhODdhMTFiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPFBhZ2U+XHJcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVwiVGlja2V0IFByb2Nlc3NpbmdcIiAvPlxyXG4gICAgPFN0YWNrTGF5b3V0PlxyXG4gICAgICA8TGFiZWwgdGV4dD1cIlBob25lIG51bWJlcjpcIiAvPlxyXG4gICAgICA8VGV4dFZpZXcgdi1tb2RlbD1cInBob25lXCIgLz5cclxuXHJcbiAgICAgIDxMYWJlbCB0ZXh0PVwiRmlyc3QgYW5kIGxhc3QgbmFtZTpcIiAvPlxyXG4gICAgICA8VGV4dFZpZXcgdi1tb2RlbD1cIm5hbWVcIiAvPlxyXG5cclxuICAgICAgPExhYmVsIHRleHQ9XCJXaGF0IGFyZSB5b3UgaGVyZSBmb3I/XCIvPlxyXG4gICAgICA8VGV4dFZpZXcgdi1tb2RlbD1cInF1ZXJ5XCIvPlxyXG5cclxuICAgICAgPEJ1dHRvbiBAdGFwPVwic3VibWl0VGlja2V0XCIgdGV4dD1cIlN1Ym1pdCBUaWNrZXRcIi8+XHJcbiAgICA8L1N0YWNrTGF5b3V0PlxyXG4gIDwvUGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCAgeyBtYXBTdGF0ZSwgbWFwQWN0aW9ucywgbWFwTXV0YXRpb25zIH0gZnJvbSAndnVleCdcclxuaW1wb3J0IEhvbWUgZnJvbSAnLi9Ib21lLnZ1ZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBkYXRhICgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHBob25lOiAnJyxcclxuICAgICAgbmFtZTogJycsXHJcbiAgICAgIHF1ZXJ5OicnLFxyXG4gICAgICBob21lOiBIb21lLFxyXG4gICAgICBsaW1pdDogMFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgLi4ubWFwQWN0aW9ucyhbJ2FkZFRpY2tldCddKSxcclxuICAgIC8vIHRoaXMuc2V0VGlja2V0SW5mbyhvYmplY3QpLCB3aGVyZSBvYmplY3QgY29udGFpbnMgcGhvbmUsIG5hbWUsIHF1ZXJ5LCBjb21tZW50IHByb3BlcnRpZXMsXHJcbiAgICBzdWJtaXRUaWNrZXQgKCkge1xyXG4gICAgICB0aGlzLiRuYXZpZ2F0ZVRvKHRoaXMuaG9tZSlcclxuICAgICAgdGhpcy5hZGRUaWNrZXQoe1xyXG4gICAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgICBwaG9uZTogdGhpcy5waG9uZSxcclxuICAgICAgICBxdWVyeTogdGhpcy5xdWVyeSxcclxuICAgICAgICBsb2NhdGlvbjogdGhpcy5sb2NhdGlvblxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIC4uLm1hcFN0YXRlKFsndXNlclRpY2tldCcsICdhcHByb3ZlZFRpY2tldCcsICdsb2NhdGlvbiddKVxyXG4gIH0sXHJcbiAgd2F0Y2g6IHtcclxuICAgIGFwcHJvdmVkVGlja2V0KG5ld1ZhbCwgb2xkVmFsKSB7XHJcbiAgICAgIGlmICh0aGlzLmxpbWl0IDwgMSkge1xyXG4gICAgICAgIGlmIChuZXdWYWwgIT0gbnVsbCkge1xyXG4gICAgICAgICAgYWxlcnQoe1xyXG4gICAgICAgICAgICB0aXRsZTogXCJUaWNrZXQgU3VibWl0dGVkXCIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiSGVsbG8gXCIgKyBuZXdWYWwubmFtZSArIFwiLCB5b3UncmUgdGlja2V0ICMgaXMgXCIgKyBuZXdWYWwubnVtYmVyXHJcbiAgICAgICAgICAgICsgXCIuIFlvdSB3aWxsIGJlIHNlcnZlZCBhdCB3aW5kb3cgXCIgKyAobmV3VmFsLndpbmRvdyArIDEpICsgXCIuXCIsXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBhbGVydCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIk5vIHNlcnZpY2VcIixcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJUaGVyZSBhcmUgY3VycmVudGx5IG5vIGVtcGxveWVlcyBzZXJ2aW5nIHRpY2tldHNcIixcclxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubGltaXQrK1xyXG4gICAgfVxyXG4gIH1cclxuICAvLyBwcm9wczoge1xyXG4gIC8vICAgcXVlcnk6IFN0cmluZ1xyXG4gIC8vIH1cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblxyXG48L3N0eWxlPlxyXG4iXSwic291cmNlUm9vdCI6IiJ9