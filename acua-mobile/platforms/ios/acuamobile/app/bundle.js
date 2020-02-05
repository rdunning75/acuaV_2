require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/adoption/AdoptionAnimalDetails.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["item"],
  components: {},
  computed: {
    genderIcon() {
      switch (this.item.gender) {
        case "M":
          this.item.categoryTag = "#0099ff";
          return "fa-mars";
          break;

        case "F":
          this.item.categoryTag = "#ffccff";
          return "fa-venus";
          break;

        default:
          return "fa-fire";
          break;
      }
    }

  },

  created() {
    this.images = [{
      src: "~/assets/images/food/pancake640.jpg"
    }, {
      src: "~/assets/images/food/pancake640.jpg"
    }, {
      src: "~/assets/images/food/pancake640.jpg"
    }, {
      src: "~/assets/images/food/pancake640.jpg"
    }]; // this.isLike = this.item.isLike;
    // this.isHeart = this.item.isFavorite;
  },

  mounted() {},

  methods: {
    // navigateBack
    close() {
      this.$navigateBack();
    },

    // Animate 'Favorite' icon
    animateFavorite() {
      var imgLogo = this.$refs.favorite.nativeView;
      imgLogo.animate({
        scale: {
          x: 0.6,
          y: 0.6
        },
        duration: 50,
        delay: 0
      }).then(function () {
        return imgLogo.animate({
          scale: {
            x: 1.2,
            y: 1.2,
            duration: 50
          }
        });
      }).then(function () {
        return imgLogo.animate({
          scale: {
            x: 1,
            y: 1,
            duration: 100
          }
        });
      }).then(function () {});
    },

    toggleHeart() {
      // toggle isFavorite
      this.animateFavorite();
      this.item.isFavorite = !this.item.isFavorite;
    }

  },

  data() {
    return {
      images: null,
      isHeart: false
    };
  }

});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/adoption/AnimalCard.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tns-core-modules/platform/platform.js");
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_0__);
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
//
//
// import ItemLike from "./itemLike";

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["item"],
  components: {// ItemLike
  },
  computed: {
    categoryIcon() {
      switch (this.item.gender) {
        case "M":
          this.item.categoryTag = "#0099ff";
          return "fa-mars";
          break;

        case "F":
          this.item.categoryTag = "#ffccff";
          return "fa-venus";
          break;

        default:
          return "fa-fire";
          break;
      }
    }

  },

  created() {// this.isLike =  this.item.isLike
    // this.isHeart =  this.item.isFavorite
  },

  mounted() {},

  methods: {
    animateFavorite() {
      if (tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_0__["isIOS"]) {
        return;
      }

      var imgLogo = this.$refs.favorite.nativeView;
      imgLogo.animate({
        scale: {
          x: 0.6,
          y: 0.6
        },
        duration: 50,
        delay: 0
      }).then(function () {
        return imgLogo.animate({
          scale: {
            x: 1.2,
            y: 1.2,
            duration: 50
          }
        });
      }).then(function () {
        return imgLogo.animate({
          scale: {
            x: 1,
            y: 1,
            duration: 100
          }
        });
      }).then(function () {});
    },

    toggleHeart() {
      this.animateFavorite();
      this.item.isFavorite = !this.item.isFavorite;
    },

    onClickButton() {
      this.$emit("clicked", this.item);
    }

  },

  data() {
    return {
      isLike: false,
      isHeart: false
    };
  }

});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/adoption/category.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  props: ["item"],
  methods: {
    onClickButton(data) {
      this.$emit("clicked", data.id);
    }

  },

  data() {
    return {};
  }

});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/buttons/CategoryButton.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    icon: String,
    title: String,
    action: Function,
    src: String
  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/buttons/IconButton.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    icon: String,
    title: String,
    action: Function
  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/location/AnimalCenterDetails.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
// ---plugins---
// phone
var phone = __webpack_require__("../node_modules/nativescript-phone/index.js"); // directions


var Directions = __webpack_require__("../node_modules/nativescript-directions/directions.js").Directions;

var directions = new Directions(); //-------

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["AnimalCenter"],
  computed: {
    animalCenterData() {
      console.log("animalCenterData(), returning data: " + this.AnimalCenter);
      return this.AnimalCenter || {};
    }

  },
  methods: {
    onAddressTap() {
      console.log("onAddressTap(), get directions to " + this.AnimalCenter.address); // must pass in string as variable otherwise it directions.navigate() won't work

      var address = this.AnimalCenter.address;
      directions.available().then(function (avail) {
        //console.log(avail ? "Yes" : "No");
        if (avail) {
          directions.navigate({
            to: {
              // either pass in a single object or an Array
              address: address
            }
          }).then(function () {
            console.log("Maps app launched.");
          }, function (error) {
            console.log(error);
          });
        }
      });
    },

    onPhoneTap() {
      console.log("onPhoneTap(), call " + this.AnimalCenter.phone);
      phone.dial(this.AnimalCenter.phone, true);
    }

  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/sublists/FaqInfo.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  props: {
    item: Object
  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./views/Adoption.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tns-core-modules/platform/platform.js");
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_adoption_AnimalCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/adoption/AnimalCard.vue");
/* harmony import */ var _components_adoption_category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/adoption/category.vue");
/* harmony import */ var _components_adoption_AdoptionAnimalDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./components/adoption/AdoptionAnimalDetails.vue");
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
// import { SwissArmyKnife } from "nativescript-swiss-army-knife";
 // import navBottom from "./custom/navBottom";





var gestures = __webpack_require__("../node_modules/tns-core-modules/ui/gestures/gestures.js");

var app = __webpack_require__("../node_modules/tns-core-modules/application/application.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    // navBottom,
    Item: _components_adoption_AnimalCard__WEBPACK_IMPORTED_MODULE_1__["default"],
    Category: _components_adoption_category__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  computed: {
    itemsCategory() {
      return this.category.slice().reverse();
    }

  },

  mounted() {// SwissArmyKnife.setAndroidStatusBarColor("#b51213");
  },

  data() {
    return {
      lastDelY: 0,
      headerCollapsed: false,
      selectedTab: 0,
      selectedTabview: 0,
      items: [{
        name: "Twinkie",
        cover: "~/assets/images/dog-button.jpg",
        images: [{
          src: "~/assets/images/bee.png"
        }, {
          src: "~/assets/images/peacock.png"
        }, {
          src: "~/assets/images/rattlesnake.png"
        }, {
          src: "~/assets/images/coyote.png"
        }, {
          src: "~/assets/images/mountainlion.png"
        }, {
          src: "~/assets/images/opossum.png"
        }],
        category: "Dog",
        categoryTag: "#2D9CDB",
        breed_group: "Toy",
        primary_breed: "Chihuahua",
        age: "4 months",
        gender: "F",
        animal_size: "Small",
        primary_color: "Tan",
        location: "Downey",
        isAvailable: true,
        isFavorite: false
      }, {
        name: "Boogie",
        cover: "~/assets/images/cat-roaming-icon.png",
        images: [{
          src: "~/assets/images/bee.png"
        }, {
          src: "~/assets/images/peacock.png"
        }, {
          src: "~/assets/images/rattlesnake.png"
        }, {
          src: "~/assets/images/coyote.png"
        }, {
          src: "~/assets/images/mountainlion.png"
        }, {
          src: "~/assets/images/opossum.png"
        }],
        category: "Cat",
        categoryTag: "#6127ae",
        breed_group: "Shorthair",
        primary_breed: "Tabby",
        age: "6",
        gender: "M",
        animal_size: "Small",
        primary_color: "Tan",
        location: "Downey",
        isAvailable: true,
        isFavorite: true
      }, {
        name: "Snoopy",
        cover: "~/assets/images/snoopy.jpg",
        images: [{
          src: "~/assets/images/bee.png"
        }, {
          src: "~/assets/images/peacock.png"
        }, {
          src: "~/assets/images/rattlesnake.png"
        }, {
          src: "~/assets/images/coyote.png"
        }, {
          src: "~/assets/images/mountainlion.png"
        }, {
          src: "~/assets/images/opossum.png"
        }],
        category: "Dog",
        categoryTag: "#27AE60",
        breed_group: "Hound",
        primary_breed: "Beagle",
        age: "10",
        gender: "M",
        animal_size: "Small",
        primary_color: "Tan",
        location: "Downey",
        isAvailable: false,
        isFavorite: true
      }, {
        name: "Ariana",
        cover: "~/assets/images/cat-button.jpg",
        images: [{
          src: "~/assets/images/bee.png"
        }, {
          src: "~/assets/images/peacock.png"
        }, {
          src: "~/assets/images/rattlesnake.png"
        }, {
          src: "~/assets/images/coyote.png"
        }, {
          src: "~/assets/images/mountainlion.png"
        }, {
          src: "~/assets/images/opossum.png"
        }],
        category: "Cat",
        categoryTag: "#e4ce0d",
        breed_group: "Longhair",
        primary_breed: "Domestic",
        gender: "F",
        animal_size: "Small",
        primary_color: "Gray",
        location: "Downey",
        isAvailable: true,
        isFavorite: true,
        age: "10 months",
        isFavorite: false
      } // {
      //   name: "Muffin",
      //   cover: "~/assets/images/doggo.png",
      //   images: [
      //     { src: "~/assets/images/bee.png" },
      //     { src: "~/assets/images/peacock.png" },
      //     { src: "~/assets/images/rattlesnake.png" },
      //     { src: "~/assets/images/coyote.png" },
      //     { src: "~/assets/images/mountainlion.png" },
      //     { src: "~/assets/images/opossum.png" }
      //   ],
      //   category: "Dog",
      //   categoryTag: "#27AE60",
      //   breed: "300.00",
      //   likes: 730,
      //   isLike: true,
      //   isFavorite: true,
      //   comments: 11,
      //   rating: "4.0",
      //   description: "a"
      // }
      ],
      category: [{
        cover: "~/assets/images/food/burger640.jpg",
        category: "Cat",
        count: "13"
      }, {
        cover: "~/assets/images/food/pancake640.jpg",
        category: "Dog",
        count: "5"
      }, {
        cover: "~/assets/images/food/cake640.jpg",
        category: "Livestock",
        count: "9"
      }, {
        cover: "~/assets/images/food/beer640.jpg",
        category: "Other",
        count: "7"
      }]
    };
  },

  methods: {
    search() {
      console.log("search");
    },

    bell() {
      console.log("bell");
    },

    showItem(payload) {
      this.$navigateTo(_components_adoption_AdoptionAnimalDetails__WEBPACK_IMPORTED_MODULE_3__["default"], {
        props: {
          item: payload
        },
        animated: true,
        transition: {
          name: "slideTop",
          duration: 380,
          curve: "easeIn"
        }
      });
    },

    adoptionList() {
      this.selectedTabview = 0;
    },

    // TODO: show filter
    showCategory() {
      this.selectedTabview = 1;
    },

    toggleHeart() {
      if (tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_0__["isIOS"]) {
        return;
      }

      this.animateFavorite();
      this.item.isFavorite = !this.item.isFavorite;
    }

  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./views/Faq.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_sublists_FaqInfo_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/sublists/FaqInfo.vue");
/* harmony import */ var _Ticket_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./views/Ticket.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _models_Faq__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./models/Faq.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
      search: "",
      ticket: _Ticket_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
      tempFaqs: []
    };
  },

  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])(["loadFaqs"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapMutations"])(["storeFaq"]), {
    checkFaq() {// in the future this is where to check if a user is on site, otherwise no ticket option
      // if (this.faqs.filter(faq => faq.question === this.search).length === 0) {
      //   this.storeFaq(new Faq(this.search))
      //   this.$navigateTo(this.ticket)
      // }
    },

    onItemTap() {// TODO
    },

    onPullToRefreshInitiated(_ref) {
      var {
        object
      } = _ref;
      console.log("Pulling...");
      setTimeout(() => {
        object.notifyPullToRefreshFinished();
      });
    }

  }),
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapState"])(["faqs"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])(["getSearchResults"])),

  mounted() {
    this.loadFaqs();
  },

  components: {
    Ticket: _Ticket_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    FaqInfo: _components_sublists_FaqInfo_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./views/Home.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_buttons_CategoryButton_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/buttons/CategoryButton.vue");
/* harmony import */ var _Faq_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./views/Faq.vue");
/* harmony import */ var _Location_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./views/Location.vue");
/* harmony import */ var _TicketOptions_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./views/TicketOptions.vue");
/* harmony import */ var _Adoption_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./views/Adoption.vue");
/* harmony import */ var _ServiceRequest_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./views/ServiceRequest.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
      actionBar: "Welcome",
      msg: "Hello World!",
      titles: ["Adopt an Animal!", "Services & Fees", "Service Request", "FAQ", "Grab a Ticket!", "Find Our Location"],
      textWrap: false,
      //search: "this will change as you type",
      results: [],
      polling: undefined,
      faq: _Faq_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
      location: _Location_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
      qrScanner: _TicketOptions_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
      adoption: _Adoption_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
      serviceRequest: _ServiceRequest_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
    };
  },

  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_6__["mapState"])(['approvedTicket']),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_6__["mapActions"])(['checkTicket']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_6__["mapMutations"])(['SET_TICKET']), {
    toLocationList() {
      this.$navigateTo(this.location, {
        animated: true,
        transition: {
          name: "slide",
          duration: 380,
          curve: "easeIn"
        }
      });
    },

    toFaq() {
      this.$navigateTo(this.faq, {
        animated: true,
        transition: {
          name: "slide",
          duration: 380,
          curve: "easeIn"
        }
      });
    },

    toQRScanner() {
      if (typeof this.approvedTicket === 'object') {
        if (this.approvedTicket.hasOwnProperty('window')) {
          alert({
            title: "Access Denied",
            message: "You cannot submit another ticket.",
            okButtonText: "OK"
          });
        }
      } else {
        this.$navigateTo(this.qrScanner, {
          animated: true,
          transition: {
            name: "slide",
            duration: 380,
            curve: "easeIn"
          }
        });
      }
    },

    toAdoption() {
      this.$navigateTo(this.adoption, {
        animated: true,
        transition: {
          name: "slide",
          duration: 380,
          curve: "easeIn"
        }
      });
    },

    toServiceRequest() {
      this.$navigateTo(this.serviceRequest, {
        animated: true,
        transition: {
          name: "slide",
          duration: 380,
          curve: "easeIn"
        }
      });
    },

    pollData() {
      this.polling = setInterval(() => {
        // Check if ticket is complete every X seconds
        if (typeof this.approvedTicket === 'object') {
          if (this.approvedTicket.hasOwnProperty('number')) {
            // console.log(this.approvedTicket.number, this.approvedTicket.isComplete)
            if (this.approvedTicket.isComplete) {
              this.SET_TICKET(undefined);
              alert({
                title: "Thank You",
                message: "Your ticket has been served. Have a nice day!",
                okButtonText: "OK"
              });
            } else {
              this.checkTicket(this.approvedTicket.id);
            }
          }
        }
      }, 5000);
    }

  }),

  mounted() {
    this.pollData();
  },

  beforeDestroy() {
    clearInterval(this.polling);
  },

  components: {
    CategoryButton: _components_buttons_CategoryButton_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Faq: _Faq_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./views/Location.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nativescript_geolocation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-geolocation/geolocation.js");
/* harmony import */ var nativescript_geolocation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_geolocation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tns_core_modules_ui_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/tns-core-modules/ui/enums/enums.js");
/* harmony import */ var tns_core_modules_ui_enums__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_enums__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_buttons_IconButton_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/buttons/IconButton.vue");
/* harmony import */ var _components_location_AnimalCenterDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./components/location/AnimalCenterDetails.vue");
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
//
//
//
//
//
//
// ---plugins---
// geolocation

 // toast

var Toast = __webpack_require__("../node_modules/nativescript-toasts/index.js"); //-------
// components




/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      //TODO: Store hardcoded centerlocations
      centerLocations: [{
        name: "Agoura",
        address: "29525 Agoura Road, Agoura, CA 91301",
        phone: "(818) 991-0071",
        availability: {
          weekday: "Monday-Thursday",
          weekend: "Friday-Sunday",
          weekdayhours: "12:00 p.m. - 7:00 p.m",
          weekendhours: "10:00 a.m. - 5:00 p.m"
        },
        latitude: 34.146015,
        longitude: -118.769421,
        distance: "",
        imageURL: "~/assets/images/achouse.png"
      }, {
        name: "Baldwin Park",
        address: "4275 North Elton Street, Baldwin Park, CA 91706",
        phone: "(626) 962-3577",
        availability: {
          weekday: "Monday-Thursday",
          weekend: "Friday-Sunday",
          weekdayhours: "12:00 p.m. - 7:00 p.m",
          weekendhours: "10:00 a.m. - 5:00 p.m"
        },
        latitude: 34.091362,
        longitude: -117.951105,
        distance: "",
        imageURL: "~/assets/images/achouse.png"
      }, {
        name: "Carson/Gardena",
        address: "216 W. Victoria Street, Gardena CA 90248",
        phone: "(310) 523-9566",
        availability: {
          weekday: "Monday-Thursday",
          weekend: "Friday-Sunday",
          weekdayhours: "12:00 p.m. - 7:00 p.m",
          weekendhours: "10:00 a.m. - 5:00 p.m"
        },
        latitude: 33.864355,
        longitude: -118.277414,
        distance: "",
        imageURL: "~/assets/images/achouse.png"
      }, {
        name: "Castaic",
        address: "31044 North Charlie Canyon Road, Castaic, CA 91384",
        phone: "(661) 257-3191",
        availability: {
          weekday: "Monday-Thursday",
          weekend: "Friday-Sunday",
          weekdayhours: "12:00 p.m. - 7:00 p.m",
          weekendhours: "10:00 a.m. - 5:00 p.m"
        },
        latitude: 34.482899,
        longitude: -118.608386,
        distance: "",
        imageURL: "~/assets/images/achouse.png"
      }, {
        name: "Downey",
        address: "11258 South Garfield Avenue, Downey, CA 90242",
        phone: "(562) 940-6898",
        availability: {
          weekday: "Monday-Thursday",
          weekend: "Friday-Sunday",
          weekdayhours: "12:00 p.m. - 7:00 p.m",
          weekendhours: "10:00 a.m. - 5:00 p.m"
        },
        latitude: 33.93656,
        longitude: -118.13387,
        distance: "",
        imageURL: "~/assets/images/achouse.png"
      }, {
        name: "Lancaster",
        address: "5210 West Avenue I, Lancaster, CA 93536",
        phone: "(661) 940-4191",
        availability: {
          weekday: "Monday-Thursday",
          weekend: "Friday-Sunday",
          weekdayhours: "12:00 p.m. - 7:00 p.m",
          weekendhours: "10:00 a.m. - 5:00 p.m"
        },
        latitude: 34.703239,
        longitude: -118.22265,
        distance: "",
        imageURL: "~/assets/images/achouse.png"
      }, {
        name: "Palmdale",
        address: "38550 Sierra Highway, Palmdale, CA 93550",
        phone: "(661) 575-2888",
        availability: {
          weekday: "Monday-Thursday",
          weekend: "Friday-Sunday",
          weekdayhours: "12:00 p.m. - 7:00 p.m",
          weekendhours: "10:00 a.m. - 5:00 p.m"
        },
        latitude: 34.5826,
        longitude: -118.1171,
        distance: "",
        imageURL: "~/assets/images/achouse.png"
      }],
      currentLoc: {} // current location obj

    };
  },

  components: {
    IconButton: _components_buttons_IconButton_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  computed: {
    centerList() {
      return this.buttonGetLocationTap;
    }

  },
  methods: {
    enableLocationTap: function enableLocationTap() {
      nativescript_geolocation__WEBPACK_IMPORTED_MODULE_0__["isEnabled"]().then(function (isEnabled) {
        if (!isEnabled) {
          nativescript_geolocation__WEBPACK_IMPORTED_MODULE_0__["enableLocationRequest"]().then(function () {}, function (e) {
            console.log("Error: " + (e.message || e));
          });
        }
      }, function (e) {
        console.log("Error: " + (e.message || e));
      });
    },
    // TODO: optimize; this should be already computed before clicking button
    buttonGetDistanceToCareCentersTap: function buttonGetDistanceToCareCentersTap() {
      console.log("buttonGetDistanceToCareCentersTap(), getting list of animal care centers; sorted by distance");
      var that = this;
      var metersToMilesConversionRate = 1609.344;
      nativescript_geolocation__WEBPACK_IMPORTED_MODULE_0__["getCurrentLocation"]({
        desiredAccuracy: tns_core_modules_ui_enums__WEBPACK_IMPORTED_MODULE_1__["Accuracy"].any,
        maximumAge: 5000,
        timeout: 10000
      }).then(function (loc) {
        if (loc) {
          //get current location
          that.currentLoc.latitude = parseFloat(loc.latitude);
          that.currentLoc.longitude = parseFloat(loc.longitude);

          for (var i = 0; i < that.centerLocations.length; i++) {
            var centerLoc = that.centerLocations[i]; // calc distance foreach animal shelter

            centerLoc.distance = nativescript_geolocation__WEBPACK_IMPORTED_MODULE_0__["distance"]({
              latitude: that.currentLoc.latitude,
              longitude: that.currentLoc.longitude
            }, {
              latitude: centerLoc.latitude,
              longitude: centerLoc.longitude
            }) / metersToMilesConversionRate; // divide by conversion rate
            // round distance

            centerLoc.distance = Number(Math.round(centerLoc.distance + "e2") + "e-2");
          } // sort list by distance


          that.centerLocations.sort((loc1, loc2) => loc1.distance > loc2.distance ? 1 : loc2.distance > loc1.distance ? -1 : 0); // toast to notify list was sorted by distance
          // TODO: bugfix when spamming button there can be a finite amount of Toasts that constantly appear

          var options = {
            text: "Sorted by Distance",
            duration: Toast.DURATION.SHORT,
            position: Toast.POSITION.CENTER //optional

          };
          Toast.show(options);
        }
      }, function (e) {
        console.log("Error: " + (e.message || e));
      });
    },

    onItemTap(e) {
      // Navigate to AnimalCenterDetails
      console.log("onItemTap(e), navigateTo " + JSON.stringify(e.item));
      this.$emit("select", e.item); // you NEED to use e.item (e.location is undefined)

      this.$navigateTo(_components_location_AnimalCenterDetails__WEBPACK_IMPORTED_MODULE_3__["default"], {
        props: {
          AnimalCenter: e.item
        },
        animated: true,
        transition: {
          name: "slide",
          duration: 380,
          curve: "easeIn"
        }
      });
    }

  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./views/ServiceRequest.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
    return {};
  }

});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./views/Ticket.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_buttons_CategoryButton_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/buttons/CategoryButton.vue");
/* harmony import */ var _models_Ticket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./models/Ticket.js");
/* harmony import */ var _Faq_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./views/Faq.vue");
/* harmony import */ var _Home_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./views/Home.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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





/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      actionBar: 'Ticket',
      titles: ['No', 'Yes'],
      faq: _Faq_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
      home: _Home_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
    };
  },

  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['addFaq', 'addTicket']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])(['storeTicket']), {
    submitTicket() {
      this.addFaq(this.userFaq);
      var ticket = new _models_Ticket__WEBPACK_IMPORTED_MODULE_2__["default"](this.userFaq.question);
      this.storeTicket(ticket);
      this.addTicket(ticket);
      this.$navigateTo(this.home);
      alert({
        title: 'Alert',
        message: 'You have successfully submitted a ticket!',
        okButtonText: 'OK'
      }).then(() => {
        console.log('id:', this.userTicket.id);
        console.log('time inserted:', this.userTicket.timeIn);
        console.log('question:', this.userTicket.question);
      });
    },

    toFaq() {
      this.$navigateTo(this.faq);
    }

  }),
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(['userFaq', 'tickets', 'userTicket'])),
  components: {
    CategoryButton: _components_buttons_CategoryButton_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Faq: _Faq_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Home: _Home_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./views/TicketForm.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Home_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./views/Home.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./views/TicketOptions.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./views/Home.vue");
/* harmony import */ var _TicketForm_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./views/TicketForm.vue");
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
      choices: ['Drop Off', 'Adoption ', 'other'],
      otherText: '',
      selectedIndex: 0,
      isTicket: true,
      home: _Home_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
      ticketForm: _TicketForm_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
    };
  },

  methods: {
    toHome() {
      this.$navigateTo(this.home);
    },

    createTicket() {
      this.$navigateTo(this.ticketForm, {
        props: {
          query: this.otherText
        }
      });
    },

    selectedIndexChanged() {
      if (this.selectedIndex >= 1) this.isTicket = true;else this.isTicket = false;
    }

  },
  props: {
    site: String
  }
});

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js?!./components/location/AnimalCenterDetails.vue?vue&type=style&index=0&id=5ff7d15c&scoped=true&lang=scss&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\r\n * Convenient single import for light variables\r\n * Includes base variables with light overrides\r\n **/\n/**\r\n * Light variable overrides\r\n **/\n/**\n * Theme variables overrides\n**/\n.anim-cover[data-v-5ff7d15c] {\n  opacity: 0;\n  animation-name: key-cover-data-v-5ff7d15c;\n  animation-duration: 1;\n  animation-delay: 0.5;\n  animation-fill-mode: forwards;\n  animation-iteration-count: 1;\n  animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n@keyframes key-cover-data-v-5ff7d15c {\n0% {\n    opacity: 0;\n    transform: translate(0, 100) scale(0, 0);\n    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n30% {\n    opacity: 0.5;\n    transform: scale(0.6, 0.6);\n    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n100% {\n    opacity: 1;\n    transform: translate(0, 0) scale(1, 1);\n    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n}\n.anim-content1[data-v-5ff7d15c] {\n  opacity: 0;\n  animation-name: key-content-data-v-5ff7d15c;\n  animation-duration: 1;\n  animation-delay: 0.75;\n  animation-fill-mode: forwards;\n  animation-iteration-count: 1;\n  animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n.anim-content2[data-v-5ff7d15c] {\n  opacity: 0;\n  animation-name: key-content-data-v-5ff7d15c;\n  animation-duration: 1;\n  animation-delay: 1.0;\n  animation-fill-mode: forwards;\n  animation-iteration-count: 1;\n  animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n.anim-content3[data-v-5ff7d15c] {\n  opacity: 0;\n  animation-name: key-content-data-v-5ff7d15c;\n  animation-duration: 1;\n  animation-delay: 1.25;\n  animation-fill-mode: forwards;\n  animation-iteration-count: 1;\n  animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n.anim-content4[data-v-5ff7d15c] {\n  opacity: 0;\n  animation-name: key-content-data-v-5ff7d15c;\n  animation-duration: 1;\n  animation-delay: 1.5;\n  animation-fill-mode: forwards;\n  animation-iteration-count: 1;\n  animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n@keyframes key-content-data-v-5ff7d15c {\n0% {\n    opacity: 0;\n    transform: translate(50, 50);\n    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n100% {\n    opacity: 1;\n    transform: translate(0, 0);\n    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n}\n.title[data-v-5ff7d15c] {\n  font-size: 18em;\n  color: #0F336D;\n}\n.stack[data-v-5ff7d15c] {\n  padding-top: 14;\n  border-bottom-width: 1;\n  border-bottom-color: #d4d4d4;\n}\n.stack-hours[data-v-5ff7d15c] {\n  padding-top: 6;\n}\n.hours[data-v-5ff7d15c] {\n  color: #022734;\n}\nActionBar[data-v-5ff7d15c] {\n  background-color: #009fca;\n  color: #ffffff;\n}\n", ""]);

// exports

    const application = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
    __webpack_require__("../node_modules/tns-core-modules/ui/styling/style-scope.js");

    exports.forEach(cssExport => {
        if (cssExport.length > 1 && cssExport[1]) {
            // applying the second item of the export as it contains the css contents
            application.addCss(cssExport[1]);
        }
    });
    ;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/location/AnimalCenterDetails.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js?!./components/sublists/FaqInfo.vue?vue&type=style&index=0&id=0a4bb245&scoped=true&lang=scss&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\r\n * Convenient single import for light variables\r\n * Includes base variables with light overrides\r\n **/\n/**\r\n * Light variable overrides\r\n **/\n/**\n * Theme variables overrides\n**/\n.faq_question[data-v-0a4bb245] {\n  font-weight: bold;\n  font-size: 20;\n  color: black;\n}\n.faq_answer[data-v-0a4bb245] {\n  color: #454545;\n}\n.list-group-item-text[data-v-0a4bb245] {\n  margin: 2 3;\n}\n.list-group-item-content[data-v-0a4bb245] {\n  padding: 8 15 4 15;\n  background-color: #FFFFFF;\n}\n.homepage-blue[data-v-0a4bb245] {\n  color: #0783f8;\n}\n", ""]);

// exports

    const application = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
    __webpack_require__("../node_modules/tns-core-modules/ui/styling/style-scope.js");

    exports.forEach(cssExport => {
        if (cssExport.length > 1 && cssExport[1]) {
            // applying the second item of the export as it contains the css contents
            application.addCss(cssExport[1]);
        }
    });
    ;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/sublists/FaqInfo.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js?!./views/Faq.vue?vue&type=style&index=0&id=e39d1092&scoped=true&lang=scss&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\r\n * Convenient single import for light variables\r\n * Includes base variables with light overrides\r\n **/\n/**\r\n * Light variable overrides\r\n **/\n/**\n * Theme variables overrides\n**/\nActionBar[data-v-e39d1092] {\n  background-color: #009fca;\n  color: #ffffff;\n}\n.message[data-v-e39d1092] {\n  vertical-align: center;\n  text-align: center;\n  font-size: 20;\n  color: #000000;\n}\n.faq_question[data-v-e39d1092] {\n  font-weight: bold;\n  font-size: 20;\n  color: black;\n}\n.faq_answer[data-v-e39d1092] {\n  color: #454545;\n}\n.list-group-item-text[data-v-e39d1092] {\n  margin: 7 8;\n}\n", ""]);

// exports

    const application = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
    __webpack_require__("../node_modules/tns-core-modules/ui/styling/style-scope.js");

    exports.forEach(cssExport => {
        if (cssExport.length > 1 && cssExport[1]) {
            // applying the second item of the export as it contains the css contents
            application.addCss(cssExport[1]);
        }
    });
    ;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './views/Faq.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js?!./views/Home.vue?vue&type=style&index=0&id=2f2be7e4&scoped=true&lang=scss&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\r\n * Convenient single import for light variables\r\n * Includes base variables with light overrides\r\n **/\n/**\r\n * Light variable overrides\r\n **/\n/**\n * Theme variables overrides\n**/\n.Action_Bar[data-v-2f2be7e4] {\n  background-color: #009fca;\n  color: #ffffff;\n}\n.S_Bar[data-v-2f2be7e4] {\n  color: #050505;\n}\n.S_Button[data-v-2f2be7e4] {\n  /* text=\"right\";\n          horizontalAlignment=\"right\";\n          width=\"33%\"\n          height=\"70\"\n          /*backgroundColor=\"#1c6b48\"/>*/\n  background-image: url(\"../assets/images/NativeScript-Vue.png\");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.cover[data-v-2f2be7e4] {\n  background: linear-gradient(45deg, plum, #009fca);\n}\n.homepage-blue[data-v-2f2be7e4] {\n  color: #0783f8;\n}\n.Action_Text[data-v-2f2be7e4] {\n  margin-right: 0;\n}\n.HomeButton[data-v-2f2be7e4] {\n  background-color: white;\n  border-radius: 25px;\n  font-size: 14%;\n  font-weight: bold;\n  padding-top: 7em;\n  letter-spacing: 0;\n}\n.layout[data-v-2f2be7e4] {\n  background-color: #eeeeee;\n}\n.message[data-v-2f2be7e4] {\n  vertical-align: center;\n  text-align: center;\n  font-size: 20px;\n  color: #252525;\n}\n", ""]);

// exports

    const application = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
    __webpack_require__("../node_modules/tns-core-modules/ui/styling/style-scope.js");

    exports.forEach(cssExport => {
        if (cssExport.length > 1 && cssExport[1]) {
            // applying the second item of the export as it contains the css contents
            application.addCss(cssExport[1]);
        }
    });
    ;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './views/Home.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js?!./views/Location.vue?vue&type=style&index=0&id=3e597864&scoped=true&lang=scss&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\r\n * Convenient single import for light variables\r\n * Includes base variables with light overrides\r\n **/\n/**\r\n * Light variable overrides\r\n **/\n/**\n * Theme variables overrides\n**/\nActionBar[data-v-3e597864] {\n  background-color: #009fca;\n  color: #ffffff;\n}\n.icon[data-v-3e597864] {\n  margin-right: 5;\n}\n.gps-button[data-v-3e597864] {\n  background: linear-gradient(0deg, lightgray, white);\n  color: #0783f8;\n  border-width: 1;\n  border-color: gray;\n  border-radius: 25%;\n  margin: 10;\n}\n.list-group .list-group-item-content[data-v-3e597864] {\n  padding: 8 15 4 15;\n  background-color: #FFFFFF;\n}\n.list-group .list-group-item-text[data-v-3e597864] {\n  margin: 2 3;\n}\n.list-group .homepage-blue[data-v-3e597864] {\n  color: #0783f8;\n}\n", ""]);

// exports

    const application = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
    __webpack_require__("../node_modules/tns-core-modules/ui/styling/style-scope.js");

    exports.forEach(cssExport => {
        if (cssExport.length > 1 && cssExport[1]) {
            // applying the second item of the export as it contains the css contents
            application.addCss(cssExport[1]);
        }
    });
    ;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './views/Location.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/adoption/AdoptionAnimalDetails.vue?vue&type=style&index=0&id=4eba2d12&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* CSS */\n.close[data-v-4eba2d12] {\n  font-size: 20;\n  color: rgb(226, 229, 229);\n  margin: 15 0 0 15;\n}\nTextView[data-v-4eba2d12] {\n  border-width: 1;\n  border-color: #ffffff;\n}\n.description-text[data-v-4eba2d12] {\n  font-size: 14;\n  font-weight: bold;\n  color: black;\n}\n.description-icon[data-v-4eba2d12] {\n  font-size: 16;\n  font-weight: bold;\n  color: #3e9edb;\n  margin-right: 8;\n  vertical-align: center;\n}\n.description-value[data-v-4eba2d12] {\n  font-size: 14;\n  color: black;\n  margin: 8;\n}\n.description-value.isAvailable[data-v-4eba2d12] {\n  color: green;\n  font-weight: bold\n}\n.description-value.isNotAvailable[data-v-4eba2d12] {\n  color: red;\n  font-weight: bold\n}\n.rate[data-v-4eba2d12] {\n  padding-top: 3;\n  margin: 0;\n  color: #ffe900;\n  font-size: 18;\n}\n.rating-value[data-v-4eba2d12] {\n  margin-left: 5;\n}\n.liked-active[data-v-4eba2d12] {\n  color: #4080ff;\n}\n.heart-active[data-v-4eba2d12] {\n  color: #b51213;\n}\n.default[data-v-4eba2d12] {\n  color: #828282;\n}\n.layout[data-v-4eba2d12] {\n  vertical-align: bottom;\n  color: #828282;\n  font-size: 14;\n  height: 30;\n  padding: 5 0 5 0;\n}\n.like-icon[data-v-4eba2d12] {\n  vertical-align: bottom;\n  height: 30;\n  font-size: 16;\n  margin-right: 2;\n  padding: 5 5 5 5;\n}\n.item-name[data-v-4eba2d12] {\n  font-size: 14;\n  font-weight: bold;\n}\n.item-category[data-v-4eba2d12] {\n  font-size: 14;\n  color: #828282;\n}\n.category-icon[data-v-4eba2d12] {\n  text-align: center;\n  padding-top: 5;\n  color: white;\n  vertical-align: center;\n  font-size: 25;\n  border-width: 1;\n  border-color: #ffffff;\n  border-radius: 50%;\n  margin-top: 4;\n  margin-right: 15;\n  width: 40;\n  height: 40;\n}\n.content[data-v-4eba2d12] {\n  margin-left: 16;\n  margin-right: 16;\n  margin-bottom: 3;\n  /* margin-top: 16; */\n}\n.card-img[data-v-4eba2d12] {\n  width: 100%;\n  height: 250;\n  margin-bottom: 5;\n}\n.card-img-thumb[data-v-4eba2d12] {\n  background-color: rgb(230, 230, 230);\n  vertical-align: center;\n  border-radius: 5;\n  width: 130;\n  height: 70;\n  margin-left: 5;\n}\n.line[data-v-4eba2d12] {\n  height: 0.5;\n  border: none;\n  color: #e0e0e0;\n  background-color: #e0e0e0;\n}\n.lineBreak[data-v-4eba2d12] {\n  height: 0.5;\n  border: none;\n  color: #e0e0e0;\n  background-color: #e0e0e0;\n}\n\n\n/* Animations */\n.anim-page[data-v-4eba2d12] {\n  background-color: #d4d6d8;\n  animation-name: key-page-data-v-4eba2d12;\n  animation-duration: 2;\n  animation-fill-mode: forwards;\n  animation-iteration-count: 1;\n  animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n@keyframes key-page-data-v-4eba2d12 {\n0% {\n    background-color: #dadada;\n}\n20% {\n    background-color: #dbd2d5;\n}\n100% {\n    background-color: white;\n}\n}\n.anim-cover[data-v-4eba2d12] {\n  opacity: 0;\n  animation-name: key-cover-data-v-4eba2d12;\n  animation-duration: 1;\n  animation-delay: 0.5;\n  animation-fill-mode: forwards;\n  animation-iteration-count: 1;\n  animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n@keyframes key-cover-data-v-4eba2d12 {\n0% {\n    opacity: 0;\n    transform: translate(0, 550) scale(0, 0);\n    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n30% {\n    opacity: 0.5;\n    transform: scale(0.6, 0.6);\n    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n100% {\n    opacity: 1;\n    transform: translate(0, 0) scale(1, 1);\n    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n}\n.anim-images[data-v-4eba2d12] {\n  opacity: 0;\n  animation-name: key-images-data-v-4eba2d12;\n  animation-duration: 1;\n  animation-delay: 0.7;\n  animation-fill-mode: forwards;\n  animation-iteration-count: 1;\n  animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n@keyframes key-images-data-v-4eba2d12 {\n0% {\n    opacity: 0;\n    transform: translate(0, 550) scale(0, 0);\n    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n30% {\n    opacity: 0.5;\n    transform: scale(0.6, 0.6);\n    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n100% {\n    opacity: 1;\n    transform: translate(0, 0) scale(1, 1);\n    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n}\n.anim-itemInfo[data-v-4eba2d12] {\n  opacity: 0;\n  animation-name: key-itemInfo-data-v-4eba2d12;\n  animation-duration: 1;\n  animation-delay: 1.2;\n  animation-fill-mode: forwards;\n  animation-iteration-count: 1;\n  animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n@keyframes key-itemInfo-data-v-4eba2d12 {\n0% {\n    opacity: 0;\n    transform: translate(50, 50);\n    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n100% {\n    opacity: 1;\n    transform: translate(0, 0);\n    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n}\n.anim-likes[data-v-4eba2d12] {\n  opacity: 0;\n  animation-name: key-likes-data-v-4eba2d12;\n  animation-duration: 1;\n  animation-delay: 1.5;\n  animation-fill-mode: forwards;\n  animation-iteration-count: 1;\n  animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n@keyframes key-likes-data-v-4eba2d12 {\n0% {\n    opacity: 0;\n    transform: translate(50, 50);\n    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n100% {\n    opacity: 1;\n    transform: translate(0, 0);\n    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n}\n.anim-content[data-v-4eba2d12] {\n  opacity: 0;\n  animation-name: key-content-data-v-4eba2d12;\n  animation-duration: 1;\n  animation-delay: 1.8;\n  animation-fill-mode: forwards;\n  animation-iteration-count: 1;\n  animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n@keyframes key-content-data-v-4eba2d12 {\n0% {\n    opacity: 0;\n    transform: translate(50, 50);\n    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n100% {\n    opacity: 1;\n    transform: translate(0, 0);\n    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n}\n", ""]);

// exports

    const application = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
    __webpack_require__("../node_modules/tns-core-modules/ui/styling/style-scope.js");

    exports.forEach(cssExport => {
        if (cssExport.length > 1 && cssExport[1]) {
            // applying the second item of the export as it contains the css contents
            application.addCss(cssExport[1]);
        }
    });
    ;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/adoption/AdoptionAnimalDetails.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/adoption/AnimalCard.vue?vue&type=style&index=0&id=f1422a10&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.item-category[data-v-f1422a10] {\n  font-size: 14;\n  color: #828282;\n}\n.gender-icon[data-v-f1422a10] {\n  padding-top: 3;\n  padding-right: 3;\n  font-size: 16;\n  margin-right: 10;\n}\n.info-icon[data-v-f1422a10] {\n  padding-top: 3;\n  padding-left: 3;\n  color: gray;\n  font-size: 14;\n  margin-left: 10;\n}\n.rating-value[data-v-f1422a10] {\n  margin-left: 5;\n}\n.liked-active[data-v-f1422a10] {\n  color: #4080ff;\n}\n.heart-active[data-v-f1422a10] {\n  color: #b51213;\n}\n.default[data-v-f1422a10] {\n  color: #828282;\n}\n.layout[data-v-f1422a10] {\n  vertical-align: bottom;\n  color: #828282;\n  font-size: 14;\n  height: 30;\n  padding: 5 0 5 0;\n}\n.like-icon[data-v-f1422a10] {\n  vertical-align: bottom;\n  height: 30;\n  font-size: 16;\n  margin-right: 2;\n  padding: 5 5 5 5;\n}\n.item-name[data-v-f1422a10] {\n  font-size: 14;\n  font-weight: bold;\n  padding-bottom: 2;\n}\n.item-category[data-v-f1422a10] {\n  font-size: 14;\n  color: #828282;\n}\n.category-icon[data-v-f1422a10] {\n  text-align: center;\n  padding-top: 5;\n  border-color: white;\n  vertical-align: center;\n  font-size: 25;\n  border-width: 1;\n  border-radius: 50%;\n  margin-top: 4;\n  margin-right: 15;\n  width: 40;\n  height: 40;\n}\n.content[data-v-f1422a10] {\n  margin-left: 16;\n  margin-right: 16;\n  margin-bottom: 3;\n  margin-top: 16;\n}\n.card-img[data-v-f1422a10] {\n  width: 100%;\n  height: 150;\n  margin-bottom: 5;\n}\n.line[data-v-f1422a10] {\n  height: 0.5;\n  border: none;\n  color: #e0e0e0;\n  background-color: #e0e0e0;\n}\n.lineBreak[data-v-f1422a10] {\n  height: 7;\n  border: none;\n  color: #e0e0e0;\n  background-color: #e0e0e0;\n}\n", ""]);

// exports

    const application = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
    __webpack_require__("../node_modules/tns-core-modules/ui/styling/style-scope.js");

    exports.forEach(cssExport => {
        if (cssExport.length > 1 && cssExport[1]) {
            // applying the second item of the export as it contains the css contents
            application.addCss(cssExport[1]);
        }
    });
    ;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/adoption/AnimalCard.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/adoption/category.vue?vue&type=style&index=0&id=05c98eac&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.default-img[data-v-05c98eac] {\n    color: #d1cece5b;\n}\n.category-name[data-v-05c98eac] {\n    color: #f7f7f7;\n    font-size: 14;\n    font-weight: bold;\n    horizontal-align: center;\n    vertical-align: center;\n    margin: 5 0 15 0\n}\n.banner[data-v-05c98eac] {\n    color: #bdbdbd;\n    opacity: .3;\n}\n", ""]);

// exports

    const application = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
    __webpack_require__("../node_modules/tns-core-modules/ui/styling/style-scope.js");

    exports.forEach(cssExport => {
        if (cssExport.length > 1 && cssExport[1]) {
            // applying the second item of the export as it contains the css contents
            application.addCss(cssExport[1]);
        }
    });
    ;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/adoption/category.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/buttons/CategoryButton.vue?vue&type=style&index=0&id=7609a239&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* button on android is styled with default setting when border radius is omitted*/\n.button[data-v-7609a239]{\n  border-radius: 0;\n}\n", ""]);

// exports

    const application = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
    __webpack_require__("../node_modules/tns-core-modules/ui/styling/style-scope.js");

    exports.forEach(cssExport => {
        if (cssExport.length > 1 && cssExport[1]) {
            // applying the second item of the export as it contains the css contents
            application.addCss(cssExport[1]);
        }
    });
    ;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/buttons/CategoryButton.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/buttons/IconButton.vue?vue&type=style&index=0&id=44ae5718&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* button on android is styled with default setting when border radius is omitted*/\n.button[data-v-44ae5718]{\n  border-radius: 25%;\n  text-transform: capitalize;\n}\n\n", ""]);

// exports

    const application = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
    __webpack_require__("../node_modules/tns-core-modules/ui/styling/style-scope.js");

    exports.forEach(cssExport => {
        if (cssExport.length > 1 && cssExport[1]) {
            // applying the second item of the export as it contains the css contents
            application.addCss(cssExport[1]);
        }
    });
    ;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/buttons/IconButton.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./views/Adoption.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.tabview.active {\n  border-bottom-color: white;\n  border-bottom-width: 3;\n  margin: 0;\n  height: 50;\n}\n.tabviewText {\n  margin-top: 15;\n  margin-bottom: 5;\n  font-size: 13;\n  color: #d8d2d2;\n}\n.tabviewText.active {\n  margin-top: 0;\n  margin-bottom: 5;\n  font-weight: bold;\n  color: white;\n  vertical-align: center;\n}\n.navIcon {\n  text-align: center;\n  margin-top: 3;\n}\n.navTab {\n  background-color: #009fca;\n  color: #ffffff;\n}\n.navTabview {\n  background-color: blue;\n}\n\n", ""]);

// exports

    const application = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
    __webpack_require__("../node_modules/tns-core-modules/ui/styling/style-scope.js");

    exports.forEach(cssExport => {
        if (cssExport.length > 1 && cssExport[1]) {
            // applying the second item of the export as it contains the css contents
            application.addCss(cssExport[1]);
        }
    });
    ;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './views/Adoption.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./views/ServiceRequest.vue?vue&type=style&index=0&id=3ccecf09&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.home-panel[data-v-3ccecf09] {\n  vertical-align: center;\n  font-size: 20;\n}\nActionBar[data-v-3ccecf09] {\n  background-color: #009fca;\n  color: #ffffff;\n}\n", ""]);

// exports

    const application = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
    __webpack_require__("../node_modules/tns-core-modules/ui/styling/style-scope.js");

    exports.forEach(cssExport => {
        if (cssExport.length > 1 && cssExport[1]) {
            // applying the second item of the export as it contains the css contents
            application.addCss(cssExport[1]);
        }
    });
    ;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './views/ServiceRequest.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./views/Ticket.vue?vue&type=style&index=0&id=07b40c0a&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.msg[data-v-07b40c0a] {\n  text-align: center;\n  font-size: 20;\n}\n", ""]);

// exports

    const application = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
    __webpack_require__("../node_modules/tns-core-modules/ui/styling/style-scope.js");

    exports.forEach(cssExport => {
        if (cssExport.length > 1 && cssExport[1]) {
            // applying the second item of the export as it contains the css contents
            application.addCss(cssExport[1]);
        }
    });
    ;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './views/Ticket.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./views/TicketOptions.vue?vue&type=style&index=0&id=139d9553&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.msg[data-v-139d9553] {\n    font-size: 18;\n    color: black;\n}\n", ""]);

// exports

    const application = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
    __webpack_require__("../node_modules/tns-core-modules/ui/styling/style-scope.js");

    exports.forEach(cssExport => {
        if (cssExport.length > 1 && cssExport[1]) {
            // applying the second item of the export as it contains the css contents
            application.addCss(cssExport[1]);
        }
    });
    ;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './views/TicketOptions.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/adoption/AdoptionAnimalDetails.vue?vue&type=template&id=4eba2d12&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    {
      staticClass: "anim-page",
      attrs: { actionBarHidden: "true", backgroundSpanUnderStatusBar: "true" }
    },
    [
      _c(
        "StackLayout",
        { staticClass: "main", attrs: { verticalAlignment: "top" } },
        [
          _c(
            "GridLayout",
            {
              staticClass: "anim-cover",
              attrs: { rows: "auto", columns: "*" }
            },
            [
              _c("Image", {
                staticClass: "card-img",
                attrs: {
                  row: "0",
                  col: "0",
                  marginTop: "-40",
                  height: "180",
                  stretch: "aspectFill",
                  src: _vm.item.cover
                }
              }),
              _c("Label", {
                staticClass: "fa close",
                attrs: {
                  row: "0",
                  col: "0",
                  verticalAlignment: "top",
                  horizontalAlignment: "left",
                  text: _vm._f("fonticon")("fa-arrow-left"),
                  fontSize: "24"
                },
                on: { tap: _vm.close }
              })
            ],
            1
          ),
          _c(
            "ScrollView",
            {
              staticClass: "anim-images",
              attrs: { orientation: "horizontal" }
            },
            [
              _c(
                "StackLayout",
                { attrs: { orientation: "horizontal" } },
                _vm._l(_vm.item.images, function(image) {
                  return _c(
                    "GridLayout",
                    { key: image, attrs: { rows: "auto", columns: "*" } },
                    [
                      _c("Image", {
                        staticClass: "card-img-thumb",
                        attrs: {
                          row: "0",
                          col: "0",
                          src: image.src,
                          stretch: "aspectFit"
                        }
                      })
                    ],
                    1
                  )
                }),
                1
              )
            ],
            1
          ),
          _c(
            "GridLayout",
            {
              staticClass: "content",
              attrs: { rows: "auto,auto,auto,auto", columns: "auto" }
            },
            [
              _c(
                "GridLayout",
                {
                  staticClass: "anim-itemInfo",
                  attrs: {
                    marginTop: "15",
                    row: "1",
                    width: "100%",
                    columns: "auto,*",
                    rows: "auto,auto,auto,auto",
                    verticalAlignment: "center"
                  }
                },
                [
                  _c("Label", {
                    staticClass: "fa category-icon",
                    attrs: {
                      text: _vm._f("fonticon")(_vm.genderIcon),
                      row: "0",
                      col: "0",
                      rowSpan: "2",
                      backgroundColor: _vm.item.categoryTag
                    }
                  }),
                  _c("Label", {
                    staticClass: "item-name",
                    attrs: {
                      row: "0",
                      col: "1",
                      textwrap: "true",
                      verticalAlignment: "bottom",
                      horizontalAlignment: "left",
                      text: _vm.item.name
                    }
                  }),
                  _c("Label", {
                    staticClass: "item-category",
                    attrs: {
                      row: "1",
                      col: "1",
                      textwrap: "true",
                      verticalAlignment: "top",
                      horizontalAlignment: "left",
                      text: _vm.item.category
                    }
                  })
                ],
                1
              ),
              _c("StackLayout", {
                staticClass: "line anim-likes",
                attrs: { row: "2", width: "100%", marginTop: "10" }
              }),
              _c(
                "GridLayout",
                {
                  staticClass: "anim-likes",
                  attrs: {
                    marginTop: "5",
                    width: "100%",
                    row: "3",
                    columns: "*,auto,auto",
                    rows: "auto"
                  }
                },
                [
                  _c(
                    "GridLayout",
                    { attrs: { col: "0", rows: "auto", columns: "auto,auto" } },
                    [
                      _c("Label", {
                        ref: "info",
                        staticClass: "like-icon fa",
                        attrs: {
                          col: "0",
                          row: "0",
                          text: _vm._f("fonticon")("fa-info-circle")
                        }
                      }),
                      _c("Label", {
                        staticClass: "layout",
                        attrs: {
                          col: "1",
                          row: "0",
                          text:
                            _vm.item.breed_group +
                            " - " +
                            _vm.item.primary_breed
                        }
                      })
                    ],
                    1
                  ),
                  _c(
                    "GridLayout",
                    {
                      attrs: {
                        col: "1",
                        rows: "auto",
                        columns: "auto,auto",
                        marginRight: "15"
                      },
                      on: { tap: _vm.toggleHeart }
                    },
                    [
                      _c("Label", {
                        ref: "favorite",
                        staticClass: "like-icon  fa",
                        class: [
                          _vm.item.isFavorite ? "heart-active" : "default"
                        ],
                        attrs: {
                          col: "0",
                          row: "0",
                          text: _vm._f("fonticon")(
                            _vm.item.isFavorite ? "fa-heart" : "fa-heart-o"
                          )
                        }
                      }),
                      _c("Label", {
                        staticClass: "layout",
                        attrs: { col: "1", row: "0", text: "Favorite" }
                      })
                    ],
                    1
                  ),
                  _c(
                    "StackLayout",
                    { attrs: { col: "2", orientation: "horizontal" } },
                    [
                      _c("Label", {
                        ref: "",
                        staticClass: "like-icon layout fa",
                        attrs: { text: _vm._f("fonticon")("fa-share-square-o") }
                      }),
                      _c("Label", {
                        staticClass: "layout",
                        attrs: { text: "Share" }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _c("StackLayout", {
            staticClass: "lineBreak anim-likes",
            attrs: { width: "100%" }
          }),
          _c(
            "Gridlayout",
            {
              staticClass: "content anim-content",
              attrs: { rows: "auto,*", marginTop: "15" }
            },
            [
              _c(
                "GridLayout",
                {
                  attrs: {
                    row: "0",
                    rows: "auto",
                    marginBottom: "5",
                    columns: "auto, auto"
                  }
                },
                [
                  _c("Label", {
                    staticClass: "fa description-icon",
                    attrs: {
                      col: "0",
                      text: _vm._f("fonticon")("fa-tags"),
                      textWrap: "true"
                    }
                  }),
                  _c("Label", {
                    staticClass: "description-text",
                    attrs: { col: "1", text: "Description", textWrap: "true" }
                  })
                ],
                1
              ),
              _c(
                "StackLayout",
                { attrs: { row: "1" } },
                [
                  _c(
                    "ScrollView",
                    [
                      _c(
                        "GridLayout",
                        {
                          attrs: {
                            rows: "*, *, *, *, *, *, *, *",
                            columns: "auto, *",
                            verticalAlignment: "top",
                            horizontalAlignment: "center"
                          }
                        },
                        [
                          _c("Label", {
                            staticClass: "description-value",
                            attrs: { row: "0", col: "0", text: "Availability:" }
                          }),
                          _c(
                            "Label",
                            {
                              staticClass: "fa description-value",
                              class:
                                _vm.item.isAvailable == true
                                  ? "isAvailable"
                                  : "isNotAvailable",
                              attrs: { row: "0", col: "1" }
                            },
                            [
                              _c(
                                "FormattedString",
                                [
                                  _c("Span", {
                                    attrs: {
                                      text:
                                        _vm.item.isAvailable == true
                                          ? "Available"
                                          : "Not Available"
                                    }
                                  }),
                                  _c("Span", {
                                    attrs: {
                                      text: _vm._f("fonticon")(
                                        _vm.item.isAvailable == true
                                          ? "fa-check"
                                          : "fa-times"
                                      )
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c("Label", {
                            staticClass: "description-value",
                            attrs: { row: "1", col: "0", text: "Location:" }
                          }),
                          _c("Label", {
                            staticClass: "description-value",
                            attrs: {
                              row: "1",
                              col: "1",
                              text: _vm.item.location
                            }
                          }),
                          _c("Label", {
                            staticClass: "description-value",
                            attrs: { row: "2", col: "0", text: "Age:" }
                          }),
                          _c("Label", {
                            staticClass: "description-value",
                            attrs: { row: "2", col: "1", text: _vm.item.age }
                          }),
                          _c("Label", {
                            staticClass: "description-value",
                            attrs: { row: "3", col: "0", text: "Gender: " }
                          }),
                          _c("Label", {
                            staticClass: "description-value",
                            attrs: { row: "3", col: "1", text: _vm.item.gender }
                          }),
                          _c("Label", {
                            staticClass: "description-value",
                            attrs: { row: "4", col: "0", text: "Breed Group:" }
                          }),
                          _c("Label", {
                            staticClass: "description-value",
                            attrs: {
                              row: "4",
                              col: "1",
                              text: _vm.item.breed_group
                            }
                          }),
                          _c("Label", {
                            staticClass: "description-value",
                            attrs: {
                              row: "5",
                              col: "0",
                              text: "Primary Breed:"
                            }
                          }),
                          _c("Label", {
                            staticClass: "description-value",
                            attrs: {
                              row: "5",
                              col: "1",
                              text: _vm.item.primary_breed
                            }
                          }),
                          _c("Label", {
                            staticClass: "description-value",
                            attrs: { row: "6", col: "0", text: "Animal Size:" }
                          }),
                          _c("Label", {
                            staticClass: "description-value",
                            attrs: {
                              row: "6",
                              col: "1",
                              text: _vm.item.animal_size
                            }
                          }),
                          _c("Label", {
                            staticClass: "description-value",
                            attrs: {
                              row: "7",
                              col: "0",
                              text: "Primary Color:"
                            }
                          }),
                          _c("Label", {
                            staticClass: "description-value",
                            attrs: {
                              row: "7",
                              col: "1",
                              text: _vm.item.primary_color
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/adoption/AnimalCard.vue?vue&type=template&id=f1422a10&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "StackLayout",
    { staticClass: "main" },
    [
      _c(
        "StackLayout",
        { staticClass: "content" },
        [
          _c("Image", {
            staticClass: "card-img",
            attrs: { stretch: "aspectFit", src: _vm.item.cover },
            on: {
              tap: function($event) {
                return _vm.onClickButton()
              }
            }
          }),
          _c(
            "GridLayout",
            {
              attrs: {
                width: "100%",
                columns: "auto,*",
                rows: "auto,auto",
                verticalAlignment: "center"
              },
              on: {
                tap: function($event) {
                  return _vm.onClickButton()
                }
              }
            },
            [
              _c("Label", {
                staticClass: "fa category-icon",
                attrs: {
                  text: _vm._f("fonticon")(_vm.categoryIcon),
                  row: "0",
                  col: "0",
                  rowSpan: "2",
                  backgroundColor: _vm.item.categoryTag
                }
              }),
              _c("Label", {
                staticClass: "fa item-name",
                attrs: {
                  row: "0",
                  col: "1",
                  textwrap: "true",
                  verticalAlignment: "center",
                  horizontalAlignment: "left",
                  text: _vm.item.name + ", " + _vm.item.age
                }
              }),
              _c(
                "GridLayout",
                {
                  attrs: {
                    row: "1",
                    col: "1",
                    rows: "auto",
                    columns: "auto,auto,auto"
                  }
                },
                [
                  _c("Label", {
                    staticClass: "item-category",
                    attrs: {
                      row: "0",
                      col: "0",
                      textwrap: "true",
                      verticalAlignment: "bottom",
                      horizontalAlignment: "left",
                      text: _vm.item.category
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _c("StackLayout", {
            staticClass: "line",
            attrs: { width: "100%", marginTop: "5" }
          }),
          _c(
            "GridLayout",
            {
              attrs: {
                marginTop: "5",
                width: "100%",
                row: "3",
                columns: "*, auto, auto",
                rows: "auto"
              }
            },
            [
              _c(
                "GridLayout",
                {
                  attrs: { col: "0", rows: "auto", columns: "auto,auto" },
                  on: {
                    tap: function($event) {
                      return _vm.onClickButton()
                    }
                  }
                },
                [
                  _c("Label", {
                    ref: "info",
                    staticClass: "like-icon fa",
                    attrs: {
                      col: "0",
                      row: "0",
                      text: _vm._f("fonticon")("fa-info-circle")
                    }
                  }),
                  _c("Label", {
                    staticClass: "layout",
                    attrs: {
                      col: "1",
                      row: "0",
                      text:
                        _vm.item.breed_group + " - " + _vm.item.primary_breed
                    }
                  })
                ],
                1
              ),
              _c(
                "GridLayout",
                {
                  attrs: {
                    col: "1",
                    rows: "auto",
                    columns: "auto,auto",
                    marginRight: "15"
                  },
                  on: { tap: _vm.toggleHeart }
                },
                [
                  _c("Label", {
                    ref: "favorite",
                    staticClass: "like-icon  fa",
                    class: [_vm.item.isFavorite ? "heart-active" : "default"],
                    attrs: {
                      col: "0",
                      row: "0",
                      text: _vm._f("fonticon")(
                        _vm.item.isFavorite ? "fa-heart" : "fa-heart-o"
                      )
                    }
                  }),
                  _c("Label", {
                    staticClass: "layout",
                    attrs: { col: "1", row: "0", text: "Favorite" }
                  })
                ],
                1
              ),
              _c(
                "StackLayout",
                { attrs: { col: "2", orientation: "horizontal" } },
                [
                  _c("Label", {
                    ref: "",
                    staticClass: "like-icon layout fa",
                    attrs: { text: _vm._f("fonticon")("fa-share-square-o") }
                  }),
                  _c("Label", {
                    staticClass: "layout",
                    attrs: { text: "Share" }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _c("StackLayout", { staticClass: "lineBreak", attrs: { width: "100%" } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/adoption/category.vue?vue&type=template&id=05c98eac&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "GridLayout",
    { attrs: { rows: "*", columns: "*" } },
    [
      _c("Image", {
        attrs: {
          height: "150",
          width: "100%",
          marginBottom: "10",
          stretch: "aspectFill",
          src: _vm.item.cover
        }
      }),
      _vm._v(" />\n    "),
      _c(
        "GridLayout",
        { attrs: { verticalAlignment: "bottom" } },
        [
          _c(
            "StackLayout",
            { staticClass: "banner2", attrs: { backgroundColor: "#489e9e9e" } },
            [
              _c("Label", {
                staticClass: "category-name  m-b-10 m-t-10",
                attrs: {
                  text: _vm.item.category + " (" + _vm.item.count + ")",
                  textwrap: "true"
                }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/buttons/CategoryButton.vue?vue&type=template&id=7609a239&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "StackLayout",
    [
      _c("Image", {
        staticClass: "image",
        attrs: {
          verticalAlignment: "center",
          src: _vm.src,
          stretch: "aspectFit",
          height: "110",
          "ios:height": "120"
        },
        on: { tap: _vm.action }
      }),
      _c("Button", {
        staticClass: "button",
        attrs: {
          verticalAlignment: "bottom",
          text: _vm.icon + " " + _vm.title
        },
        on: { tap: _vm.action }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/buttons/IconButton.vue?vue&type=template&id=44ae5718&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "StackLayout",
    [
      _c("Button", {
        staticClass: "button",
        attrs: {
          verticalAlignment: "center",
          text: _vm.title + " " + _vm.icon + " "
        },
        on: { tap: _vm.action }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/location/AnimalCenterDetails.vue?vue&type=template&id=5ff7d15c&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    { staticClass: "page" },
    [
      _c(
        "ActionBar",
        { staticClass: "action-bar" },
        [
          _c("NavigationButton", {
            attrs: { "android.systemIcon": "ic_menu_back" },
            on: {
              tap: function($event) {
                return _vm.$navigateBack()
              }
            }
          }),
          _c("Label", {
            staticClass: "action-bar-title",
            attrs: {
              text: _vm.AnimalCenter.name,
              horizontalAlignment: "center"
            }
          }),
          _vm._v(">\n    ")
        ],
        1
      ),
      _c(
        "ScrollView",
        [
          _c(
            "StackLayout",
            [
              _c("Image", {
                staticClass: "anim-cover m-b-15",
                attrs: {
                  src: _vm.AnimalCenter.imageURL,
                  stretch: "aspectFit",
                  height: "200"
                }
              }),
              _c("Label", {
                staticClass: "hr-light m-t-15 m-b-15",
                attrs: { row: "1" }
              }),
              _c(
                "GridLayout",
                { attrs: { rows: "*, *, *, auto", columns: "auto,*" } },
                [
                  _c("Image", {
                    staticClass: "anim-content1 p-l-15 p-b-10 m-r-20",
                    attrs: {
                      row: "0",
                      col: "0",
                      src: "~/assets/images/achouse.png",
                      stretch: "aspectFit",
                      height: "40",
                      width: "40",
                      loadMode: "async",
                      margin: "3"
                    }
                  }),
                  _c(
                    "Label",
                    {
                      staticClass:
                        "anim-content1 text p-b-10 font-weight-bold title stack",
                      attrs: {
                        row: "0",
                        col: "1",
                        margin: "5",
                        textWrap: "true"
                      }
                    },
                    [
                      _c(
                        "FormattedString",
                        [
                          _c("Span", {
                            attrs: {
                              text:
                                _vm.AnimalCenter.name + " Animal Care Center"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c("Image", {
                    staticClass: "anim-content2 p-l-15 p-b-10 m-r-20",
                    attrs: {
                      row: "1",
                      col: "0",
                      src: "~/assets/images/locationicon.png",
                      stretch: "aspectFit",
                      height: "40",
                      width: "40",
                      loadMode: "async",
                      margin: "3"
                    }
                  }),
                  _c(
                    "Label",
                    {
                      staticClass: "anim-content2 p-b-10 stack",
                      attrs: {
                        row: "1",
                        col: "1",
                        margin: "5",
                        textWrap: "true"
                      },
                      on: { tap: _vm.onAddressTap }
                    },
                    [
                      _c(
                        "FormattedString",
                        [
                          _c("Span", {
                            staticClass: "fa text-primary",
                            attrs: { text: _vm.AnimalCenter.address }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c("Image", {
                    staticClass: "anim-content3 p-l-15 p-b-10 m-r-20",
                    attrs: {
                      row: "2",
                      col: "0",
                      src: "~/assets/images/phoneicon.png",
                      stretch: "aspectFit",
                      height: "40",
                      width: "40",
                      loadMode: "async",
                      margin: "3"
                    }
                  }),
                  _c("Label", {
                    staticClass: "anim-content3 fa text-primary p-b-10 stack",
                    attrs: {
                      row: "2",
                      col: "1",
                      text: _vm.AnimalCenter.phone,
                      margin: "5"
                    },
                    on: { tap: _vm.onPhoneTap }
                  }),
                  _c("Image", {
                    staticClass: "anim-content4 p-l-15 p-b-10 m-r-20",
                    attrs: {
                      row: "3",
                      col: "0",
                      src: "~/assets/images/hoursicon.png",
                      stretch: "aspectFit",
                      height: "40",
                      width: "40",
                      loadMode: "async",
                      margin: "3"
                    }
                  }),
                  _c(
                    "GridLayout",
                    {
                      staticClass: "anim-content4 stack-hours",
                      attrs: {
                        row: "3",
                        col: "1",
                        columns: "*, *",
                        rows: "auto, auto",
                        margin: "5"
                      }
                    },
                    [
                      _c("Label", {
                        staticClass: "hours",
                        attrs: {
                          row: "0",
                          col: "0",
                          text: _vm.AnimalCenter.availability.weekday
                        }
                      }),
                      _c("Label", {
                        staticClass: "hours",
                        attrs: {
                          row: "0",
                          col: "1",
                          text: _vm.AnimalCenter.availability.weekdayhours,
                          textWrap: "true"
                        }
                      }),
                      _c("Label", {
                        staticClass: "hours",
                        attrs: {
                          row: "1",
                          col: "0",
                          text: _vm.AnimalCenter.availability.weekend
                        }
                      }),
                      _c("Label", {
                        staticClass: "hours",
                        attrs: {
                          row: "1",
                          col: "1",
                          text: _vm.AnimalCenter.availability.weekendhours,
                          textWrap: "true"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/sublists/FaqInfo.vue?vue&type=template&id=0a4bb245&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "StackLayout",
    { attrs: { orientation: "vertical" } },
    [
      _c(
        "Label",
        {
          staticClass:
            "homepage-blue text-primary list-group-item-text font-weight-bold",
          attrs: { textWrap: "true" }
        },
        [
          _c(
            "FormattedString",
            [_c("Span", { attrs: { text: _vm.item.query } })],
            1
          )
        ],
        1
      ),
      _c(
        "Label",
        {
          staticClass: ".faq_answer .list-group-item-content",
          attrs: { textWrap: "true" }
        },
        [
          _c(
            "FormattedString",
            [
              _c("Span", { attrs: { "text.decode": "&#9;" } }),
              _c("Span", { attrs: { text: _vm.item.answer } })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./views/Adoption.vue?vue&type=template&id=b15104f2&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "page",
    {
      attrs: { actionBarHidden: "false", backgroundSpanUnderStatusBar: "true" }
    },
    [
      _c(
        "ActionBar",
        { staticClass: "actionbar navTab" },
        [
          _c("NavigationButton", {
            attrs: { "android.systemIcon": "ic_menu_back" },
            on: {
              tap: function($event) {
                return _vm.$navigateBack()
              }
            }
          }),
          _c("Label", {
            attrs: { fontSize: "18", text: "Animals for Adoption" }
          })
        ],
        1
      ),
      _c(
        "GridLayout",
        { attrs: { rows: "auto,auto,*", columns: "auto" } },
        [
          _c(
            "GridLayout",
            {
              ref: "navTab",
              staticClass: "navTab",
              attrs: {
                row: "1",
                verticalAlignment: "top",
                height: "50",
                width: "100%",
                rows: "auto",
                columns: "auto,auto"
              }
            },
            [
              _c(
                "GridLayout",
                {
                  staticClass: "tabview",
                  class: _vm.selectedTabview == 0 ? "active" : "",
                  attrs: {
                    rows: "*,auto",
                    cols: "auto",
                    col: "0",
                    row: "0",
                    width: "50%"
                  },
                  on: { tap: _vm.adoptionList }
                },
                [
                  _c("Label", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.selectedTabview == 0,
                        expression: "selectedTabview==0"
                      }
                    ],
                    staticClass: "fa navIcon",
                    attrs: {
                      row: "0",
                      text: _vm._f("fonticon")(
                        _vm.selectedTabview == 0 ? "fa-paw" : ""
                      )
                    }
                  }),
                  _c("Label", {
                    staticClass: "tabviewText",
                    class: _vm.selectedTabview == 0 ? "active" : "",
                    attrs: {
                      horizontalAlignment: "center",
                      row: "1",
                      text: "Animals"
                    }
                  })
                ],
                1
              ),
              _c(
                "GridLayout",
                {
                  staticClass: "tabview",
                  class: _vm.selectedTabview == 1 ? "active" : "",
                  attrs: {
                    rows: "*,auto",
                    cols: "auto",
                    col: "1",
                    row: "0",
                    width: "50%"
                  },
                  on: { tap: _vm.showCategory }
                },
                [
                  _c("Label", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.selectedTabview == 1,
                        expression: "selectedTabview==1"
                      }
                    ],
                    staticClass: "fa navIcon",
                    attrs: {
                      row: "0",
                      text: _vm._f("fonticon")(
                        _vm.selectedTabview == 1 ? "fa-filter" : ""
                      )
                    }
                  }),
                  _c("Label", {
                    staticClass: "tabviewText",
                    class: _vm.selectedTabview == 1 ? "active" : "",
                    attrs: {
                      row: "1",
                      text: "Filter",
                      horizontalAlignment: "center"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _c(
            "GridLayout",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.selectedTabview == 0,
                  expression: "selectedTabview == 0"
                }
              ],
              attrs: { row: "2", width: "100%", backgroundColor: "white" }
            },
            [
              _c(
                "ListView",
                {
                  key: _vm.index,
                  ref: "listview",
                  attrs: {
                    separatorColor: "transparent",
                    items: _vm.items,
                    "+alias": "item"
                  }
                },
                [
                  _c("v-template", {
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(ref) {
                          var item = ref.item
                          var $index = ref.$index
                          var $even = ref.$even
                          var $odd = ref.$odd
                          return _c("item", {
                            attrs: { item: item },
                            on: {
                              clicked: function($event) {
                                return _vm.showItem(item)
                              }
                            }
                          })
                        }
                      }
                    ])
                  })
                ],
                1
              )
            ],
            1
          ),
          _c(
            "GridLayout",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.selectedTabview == 1,
                  expression: "selectedTabview == 1"
                }
              ],
              attrs: { row: "2", width: "100%", backgroundColor: "white" }
            },
            [
              _c(
                "RadListView",
                {
                  key: _vm.index,
                  ref: "listview",
                  attrs: {
                    separatorColor: "transparent",
                    items: _vm.itemsCategory,
                    "+alias": "item"
                  }
                },
                [
                  _c("v-template", {
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(ref) {
                          var item = ref.item
                          var $index = ref.$index
                          var $even = ref.$even
                          var $odd = ref.$odd
                          return _c("Category", { attrs: { item: item } })
                        }
                      }
                    ])
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./views/Faq.vue?vue&type=template&id=e39d1092&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    { staticClass: "page" },
    [
      _c(
        "ActionBar",
        [
          _c("NavigationButton", {
            attrs: { "android.systemIcon": "ic_menu_back" },
            on: {
              tap: function($event) {
                return _vm.$navigateBack()
              }
            }
          }),
          _c("Label", {
            attrs: { text: "FAQ", fontSize: "20", verticalAlignment: "center" }
          })
        ],
        1
      ),
      _c(
        "StackLayout",
        [
          _c("SearchBar", {
            attrs: { hint: "Enter text...", text: _vm.search },
            on: {
              submit: _vm.checkFaq,
              textChange: function($event) {
                _vm.search = $event.value
              }
            }
          }),
          _c(
            "RadListView",
            {
              ref: "listView",
              staticClass: "list-group",
              attrs: {
                pullToRefresh: "true",
                items: _vm.getSearchResults(_vm.search),
                "+alias": "faq"
              },
              on: {
                pullToRefreshInitiated: _vm.onPullToRefreshInitiated,
                itemTap: _vm.onItemTap
              }
            },
            [
              _c("v-template", {
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var faq = ref.faq
                      var $index = ref.$index
                      var $even = ref.$even
                      var $odd = ref.$odd
                      return _c("FaqInfo", {
                        staticClass: "list-group-item-text",
                        attrs: { item: faq }
                      })
                    }
                  }
                ])
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./views/Home.vue?vue&type=template&id=2f2be7e4&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c(
        "ActionBar",
        { staticClass: "Action_Bar", attrs: { "ios.position": "left" } },
        [
          _c("Label", {
            attrs: {
              text: "Welcome to",
              fontSize: "20",
              verticalAlignment: "center"
            }
          }),
          _c("ActionItem", {
            attrs: {
              "ios.systemIcon": "12",
              "ios.position": "right",
              "android.systemIcon": "ic_menu_search",
              "android.position": "actionBar"
            },
            on: { tap: _vm.toFaq }
          })
        ],
        1
      ),
      _c(
        "StackLayout",
        { attrs: { backgroundColor: "#b21a82" } },
        [
          _c(
            "GridLayout",
            { staticClass: "layout cover", attrs: { columns: "*,*,*" } },
            [
              _c(
                "ScrollView",
                { attrs: { row: "0", col: "0", backgroundColor: "#D3D3D3" } },
                [
                  _c(
                    "StackLayout",
                    [
                      _c("CategoryButton", {
                        staticClass: "homepage-blue HomeButton",
                        attrs: {
                          src: "~/assets/images/animals.icon.png",
                          icon: "",
                          title: _vm.titles[0],
                          action: _vm.toAdoption,
                          textWrap: "true"
                        }
                      }),
                      _c("CategoryButton", {
                        staticClass: "homepage-blue HomeButton",
                        attrs: {
                          src: "~/assets/images/services.icon.png",
                          icon: "",
                          title: _vm.titles[2],
                          action: _vm.toServiceRequest,
                          textWrap: "true"
                        }
                      }),
                      _c("CategoryButton", {
                        staticClass: "homepage-blue HomeButton",
                        attrs: {
                          src: "~/assets/images/noise.icon.png",
                          icon: "",
                          title: _vm.titles[3],
                          action: _vm.toFaq,
                          textWrap: "true"
                        }
                      }),
                      _c("CategoryButton", {
                        staticClass: "fa homepage-blue HomeButton",
                        attrs: {
                          src: "~/assets/images/hoursicon.png",
                          icon: _vm._f("fonticon")("fa-map-marker"),
                          title: _vm.titles[4],
                          action: _vm.toQRScanner,
                          textWrap: "true"
                        }
                      }),
                      _c("CategoryButton", {
                        staticClass: "homepage-blue HomeButton",
                        attrs: {
                          src: "~/assets/images/locationicon.png",
                          icon: "",
                          title: _vm.titles[5],
                          action: _vm.toLocationList,
                          textWrap: "true"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _c("GridLayout", {
                staticClass: "layout cover",
                attrs: {
                  row: "0",
                  col: "1",
                  columns: "*,*",
                  rows: "*,*,*",
                  colSpan: "2"
                }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./views/Location.vue?vue&type=template&id=3e597864&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    { staticClass: "page" },
    [
      _c(
        "ActionBar",
        { staticClass: "action-bar" },
        [
          _c("NavigationButton", {
            attrs: { "android.systemIcon": "ic_menu_back" },
            on: {
              tap: function($event) {
                return _vm.$navigateBack()
              }
            }
          }),
          _c("Label", {
            attrs: {
              text: "Animal Care Centers",
              fontSize: "20",
              verticalAlignment: "center"
            }
          })
        ],
        1
      ),
      _c(
        "StackLayout",
        [
          _c("IconButton", {
            staticClass: "fa gps-button",
            attrs: {
              icon: _vm._f("fonticon")("fa-sort-amount-asc"),
              title: "Get Closest Animal Center",
              action: _vm.buttonGetDistanceToCareCentersTap
            }
          }),
          _c(
            "RadListView",
            {
              staticClass: "list-group",
              attrs: {
                row: "2",
                items: _vm.centerLocations,
                "+alias": "location"
              },
              on: { itemTap: _vm.onItemTap }
            },
            [
              _c("v-template", {
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var location = ref.location
                      var $index = ref.$index
                      var $even = ref.$even
                      var $odd = ref.$odd
                      return _c(
                        "GridLayout",
                        {
                          staticClass: "list-group-item-content",
                          attrs: { rows: "*, *, *, *", columns: "*, *" }
                        },
                        [
                          _c("Label", {
                            staticClass:
                              "homepage-blue text-primary list-group-item-text font-weight-bold",
                            attrs: { text: location.name }
                          }),
                          _c(
                            "Label",
                            {
                              staticClass:
                                "list-group-item-text m-r-5 text-secondary",
                              attrs: { col: "1", horizontalAlignment: "right" }
                            },
                            [
                              _c(
                                "FormattedString",
                                [
                                  _c("Span", {
                                    attrs: {
                                      text: "~" + location.distance + "mi"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c("Label", {
                            staticClass: "hr-light m-t-5 m-b-5",
                            attrs: { row: "1", colSpan: "2" }
                          }),
                          _c("Image", {
                            staticClass: "m-r-20",
                            attrs: {
                              row: "2",
                              src: location.imageURL,
                              stretch: "aspectFit",
                              height: "120",
                              loadMode: "async"
                            }
                          }),
                          _c(
                            "StackLayout",
                            {
                              staticClass: "list-group-item-text",
                              attrs: {
                                row: "2",
                                col: "1",
                                verticalAlignment: "center"
                              }
                            },
                            [
                              _c(
                                "GridLayout",
                                { attrs: { rows: "*, *", columns: "*, 4*" } },
                                [
                                  _c(
                                    "Label",
                                    {
                                      staticClass: "p-b-10",
                                      attrs: {
                                        row: "0",
                                        col: "0",
                                        textWrap: "true"
                                      }
                                    },
                                    [
                                      _c(
                                        "FormattedString",
                                        {
                                          attrs: { "ios.fontFamily": "system" }
                                        },
                                        [
                                          _c("Span", {
                                            staticClass: "fa",
                                            attrs: {
                                              text: _vm._f("fonticon")(
                                                "fa-map-marker"
                                              )
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _c(
                                    "Label",
                                    {
                                      staticClass: "p-b-10",
                                      attrs: {
                                        row: "0",
                                        col: "1",
                                        textWrap: "true"
                                      }
                                    },
                                    [
                                      _c(
                                        "FormattedString",
                                        {
                                          attrs: { "ios.fontFamily": "system" }
                                        },
                                        [
                                          _c("Span", {
                                            staticClass: "text-primary",
                                            attrs: { text: location.address }
                                          })
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _c(
                                    "Label",
                                    {
                                      staticClass: "p-b-10",
                                      attrs: {
                                        row: "1",
                                        col: "0",
                                        textWrap: "true"
                                      }
                                    },
                                    [
                                      _c(
                                        "FormattedString",
                                        {
                                          attrs: { "ios.fontFamily": "system" }
                                        },
                                        [
                                          _c("Span", {
                                            staticClass: "fa icon",
                                            attrs: {
                                              text: _vm._f("fonticon")(
                                                "fa-phone"
                                              )
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _c(
                                    "Label",
                                    {
                                      staticClass: "p-b-10",
                                      attrs: {
                                        row: "1",
                                        col: "1",
                                        textWrap: "true"
                                      }
                                    },
                                    [
                                      _c(
                                        "FormattedString",
                                        {
                                          attrs: { "ios.fontFamily": "system" }
                                        },
                                        [
                                          _c("Span", {
                                            attrs: { text: location.phone }
                                          })
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _c(
                                    "Label",
                                    { staticClass: "p-b-10" },
                                    [
                                      _c(
                                        "FormattedString",
                                        {
                                          attrs: { "ios.fontFamily": "system" }
                                        },
                                        [_c("Span", { attrs: { text: "" } })],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    }
                  }
                ])
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./views/ServiceRequest.vue?vue&type=template&id=3ccecf09&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    { staticClass: "page" },
    [
      _c(
        "ActionBar",
        [
          _c("NavigationButton", {
            attrs: { "android.systemIcon": "ic_menu_back" },
            on: {
              tap: function($event) {
                return _vm.$navigateBack()
              }
            }
          }),
          _c("Label", {
            attrs: {
              text: "Service Request",
              fontSize: "20",
              verticalAlignment: "center"
            }
          })
        ],
        1
      ),
      _c(
        "StackLayout",
        { staticClass: "home-panel" },
        [
          _c("WebView", {
            attrs: {
              height: "8192px",
              src: "http://animalcare.lacounty.gov/service-request/"
            }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./views/Ticket.vue?vue&type=template&id=07b40c0a&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c("ActionBar", { attrs: { title: _vm.actionBar } }),
      _c(
        "StackLayout",
        [
          _c("Label", { staticClass: "msg" }, [
            _vm._v(
              "We apologize. The question you are searching for has not been answered yet. Take this ticket if you want to submit this question and get an answer from the front desk."
            )
          ]),
          _c(
            "GridLayout",
            { attrs: { columns: "*,*", rows: "*,*,*" } },
            [
              _c("CategoryButton", {
                attrs: {
                  row: "0",
                  col: "0",
                  title: _vm.titles[0],
                  action: _vm.toFaq,
                  backgroundColor: "#ff0000"
                }
              }),
              _c("CategoryButton", {
                attrs: {
                  row: "0",
                  col: "1",
                  title: _vm.titles[1],
                  action: _vm.submitTicket,
                  backgroundColor: "#6AFF5A"
                }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./views/TicketForm.vue?vue&type=template&id=6a8bff5f&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c("ActionBar", { attrs: { title: "Ticket Processing" } }),
      _c(
        "StackLayout",
        [
          _c("Label", { attrs: { text: "Phone number:" } }),
          _c("TextView", {
            attrs: { text: _vm.phone },
            on: {
              textChange: function($event) {
                _vm.phone = $event.value
              }
            }
          }),
          _c("Label", { attrs: { text: "First and last name:" } }),
          _c("TextView", {
            attrs: { text: _vm.name },
            on: {
              textChange: function($event) {
                _vm.name = $event.value
              }
            }
          }),
          _c("Label", { attrs: { text: "What are you here for?" } }),
          _c("TextView", {
            attrs: { text: _vm.query },
            on: {
              textChange: function($event) {
                _vm.query = $event.value
              }
            }
          }),
          _c("Button", {
            attrs: { text: "Submit Ticket" },
            on: { tap: _vm.submitTicket }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./views/TicketOptions.vue?vue&type=template&id=139d9553&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c("ActionBar", { attrs: { title: "Ticket Reason" } }),
      _c(
        "GridLayout",
        { attrs: { columns: "*", rows: "auto, auto, auto, auto" } },
        [
          _c(
            "Label",
            { staticClass: "msg", attrs: { textWrap: "true", row: "0" } },
            [
              _vm._v(
                "You are at the " +
                  _vm._s(_vm.site) +
                  " Animal Care and Control Center."
              )
            ]
          ),
          _c("ListPicker", {
            attrs: {
              row: "1",
              items: _vm.choices,
              selectedIndex: "0",
              selectedIndex: _vm.selectedIndex
            },
            on: {
              selectedIndexChange: [
                function($event) {
                  _vm.selectedIndex = $event.value
                },
                _vm.selectedIndexChanged
              ]
            }
          }),
          _vm.isTicket
            ? _c(
                "StackLayout",
                { attrs: { row: "3" } },
                [
                  _c("Label", {
                    staticClass: "msg",
                    attrs: {
                      text: "   Tell us about what you would like to know",
                      textWrap: "true"
                    }
                  }),
                  _c("TextView", {
                    attrs: { text: _vm.otherText },
                    on: {
                      textChange: function($event) {
                        _vm.otherText = $event.value
                      }
                    }
                  }),
                  _c("Button", {
                    attrs: { text: "Home" },
                    on: { tap: _vm.toHome }
                  }),
                  _c("Button", {
                    attrs: { text: "Create Ticket" },
                    on: { tap: _vm.createTicket }
                  })
                ],
                1
              )
            : _vm._e()
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./ sync ^\\.\\/app\\.(css|scss|less|sass)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.scss": "./app.scss"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync ^\\.\\/app\\.(css|scss|less|sass)$";

/***/ }),

/***/ "./ sync recursive (?<!\\bApp_Resources\\b.*)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./AnimalCenter.scss": "./AnimalCenter.scss",
	"./app.scss": "./app.scss",
	"./fonts/font-awesome.css": "./fonts/font-awesome.css",
	"./fonts/ionicons.css": "./fonts/ionicons.css",
	"./main.js": "./main.js",
	"./models/Animal.js": "./models/Animal.js",
	"./models/Faq.js": "./models/Faq.js",
	"./models/Ticket.js": "./models/Ticket.js",
	"./services/AdoptionService.js": "./services/AdoptionService.js",
	"./services/FakeAdoptionService.js": "./services/FakeAdoptionService.js",
	"./services/FakeFaqService.js": "./services/FakeFaqService.js",
	"./services/FakeTicketService.js": "./services/FakeTicketService.js",
	"./services/FaqService.js": "./services/FaqService.js",
	"./services/TicketService.js": "./services/TicketService.js",
	"./store.js": "./store.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive (?<!\\bApp_Resources\\b.*)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$";

/***/ }),

/***/ "./AnimalCenter.scss":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\r\n * Convenient single import for light variables\r\n * Includes base variables with light overrides\r\n **/\n/**\r\n * Light variable overrides\r\n **/\n/**\n * Theme variables overrides\n**/\n", ""]);

// exports

    const application = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
    __webpack_require__("../node_modules/tns-core-modules/ui/styling/style-scope.js");

    exports.forEach(cssExport => {
        if (cssExport.length > 1 && cssExport[1]) {
            // applying the second item of the export as it contains the css contents
            application.addCss(cssExport[1]);
        }
    });
    ;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './AnimalCenter.scss' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.scss":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\r\n * Convenient single import for light variables\r\n * Includes base variables with light overrides\r\n **/\n/**\r\n * Light variable overrides\r\n **/\n/**\n * Theme variables overrides\n**/\n/**\r\n * Color classes\r\n * The following creates this pattern:\r\n * .c-grey{color:#e0e0e0}.c-bg-grey{background-color:#e0e0e0}\r\n**/\n.c-white {\n  color: #fff; }\n\n.c-bg-white {\n  background-color: #fff; }\n\n.c-black {\n  color: #000; }\n\n.c-bg-black {\n  background-color: #000; }\n\n.c-aqua {\n  color: #00caab; }\n\n.c-bg-aqua {\n  background-color: #00caab; }\n\n.c-blue {\n  color: #3d5afe; }\n\n.c-bg-blue {\n  background-color: #3d5afe; }\n\n.c-charcoal {\n  color: #303030; }\n\n.c-bg-charcoal {\n  background-color: #303030; }\n\n.c-brown {\n  color: #795548; }\n\n.c-bg-brown {\n  background-color: #795548; }\n\n.c-forest {\n  color: #006968; }\n\n.c-bg-forest {\n  background-color: #006968; }\n\n.c-grey {\n  color: #e0e0e0; }\n\n.c-bg-grey {\n  background-color: #e0e0e0; }\n\n.c-grey-light {\n  color: #bababa; }\n\n.c-bg-grey-light {\n  background-color: #bababa; }\n\n.c-grey-dark {\n  color: #5c687c; }\n\n.c-bg-grey-dark {\n  background-color: #5c687c; }\n\n.c-purple {\n  color: #8130ff; }\n\n.c-bg-purple {\n  background-color: #8130ff; }\n\n.c-lemon {\n  color: #ffea00; }\n\n.c-bg-lemon {\n  background-color: #ffea00; }\n\n.c-lime {\n  color: #aee406; }\n\n.c-bg-lime {\n  background-color: #aee406; }\n\n.c-orange {\n  color: #f57c00; }\n\n.c-bg-orange {\n  background-color: #f57c00; }\n\n.c-ruby {\n  color: #ff1744; }\n\n.c-bg-ruby {\n  background-color: #ff1744; }\n\n.c-sky {\n  color: #30bcff; }\n\n.c-bg-sky {\n  background-color: #30bcff; }\n\n/* Width/Height */\n.w-full {\n  width: 100%; }\n\n.w-100 {\n  width: 100; }\n\n.h-full {\n  height: 100%; }\n\n.h-100 {\n  height: 100; }\n\n/**\r\n * Margin and Padding\r\n * The following creates this pattern:\r\n * .m-0{margin:0}.m-t-0{margin-top:0}.m-r-0{margin-right:0}.m-b-0{margin-bottom:0}.m-l-0{margin-left:0}.m-x-0{margin-right:0;margin-left:0}.m-y-0{margin-top:0;margin-bottom:0}\r\n * Same for Padding (using the 'p' abbreviation)\r\n * From 0, 2, 5, 10, 15, 20, 25, 30\r\n**/\n.m-0 {\n  margin: 0; }\n\n.m-t-0 {\n  margin-top: 0; }\n\n.m-r-0 {\n  margin-right: 0; }\n\n.m-b-0 {\n  margin-bottom: 0; }\n\n.m-l-0 {\n  margin-left: 0; }\n\n.m-x-0 {\n  margin-right: 0;\n  margin-left: 0; }\n\n.m-y-0 {\n  margin-top: 0;\n  margin-bottom: 0; }\n\n.m-2 {\n  margin: 2; }\n\n.m-t-2 {\n  margin-top: 2; }\n\n.m-r-2 {\n  margin-right: 2; }\n\n.m-b-2 {\n  margin-bottom: 2; }\n\n.m-l-2 {\n  margin-left: 2; }\n\n.m-x-2 {\n  margin-right: 2;\n  margin-left: 2; }\n\n.m-y-2 {\n  margin-top: 2;\n  margin-bottom: 2; }\n\n.m-4 {\n  margin: 4; }\n\n.m-t-4 {\n  margin-top: 4; }\n\n.m-r-4 {\n  margin-right: 4; }\n\n.m-b-4 {\n  margin-bottom: 4; }\n\n.m-l-4 {\n  margin-left: 4; }\n\n.m-x-4 {\n  margin-right: 4;\n  margin-left: 4; }\n\n.m-y-4 {\n  margin-top: 4;\n  margin-bottom: 4; }\n\n.m-5 {\n  margin: 5; }\n\n.m-t-5 {\n  margin-top: 5; }\n\n.m-r-5 {\n  margin-right: 5; }\n\n.m-b-5 {\n  margin-bottom: 5; }\n\n.m-l-5 {\n  margin-left: 5; }\n\n.m-x-5 {\n  margin-right: 5;\n  margin-left: 5; }\n\n.m-y-5 {\n  margin-top: 5;\n  margin-bottom: 5; }\n\n.m-8 {\n  margin: 8; }\n\n.m-t-8 {\n  margin-top: 8; }\n\n.m-r-8 {\n  margin-right: 8; }\n\n.m-b-8 {\n  margin-bottom: 8; }\n\n.m-l-8 {\n  margin-left: 8; }\n\n.m-x-8 {\n  margin-right: 8;\n  margin-left: 8; }\n\n.m-y-8 {\n  margin-top: 8;\n  margin-bottom: 8; }\n\n.m-10 {\n  margin: 10; }\n\n.m-t-10 {\n  margin-top: 10; }\n\n.m-r-10 {\n  margin-right: 10; }\n\n.m-b-10 {\n  margin-bottom: 10; }\n\n.m-l-10 {\n  margin-left: 10; }\n\n.m-x-10 {\n  margin-right: 10;\n  margin-left: 10; }\n\n.m-y-10 {\n  margin-top: 10;\n  margin-bottom: 10; }\n\n.m-12 {\n  margin: 12; }\n\n.m-t-12 {\n  margin-top: 12; }\n\n.m-r-12 {\n  margin-right: 12; }\n\n.m-b-12 {\n  margin-bottom: 12; }\n\n.m-l-12 {\n  margin-left: 12; }\n\n.m-x-12 {\n  margin-right: 12;\n  margin-left: 12; }\n\n.m-y-12 {\n  margin-top: 12;\n  margin-bottom: 12; }\n\n.m-15 {\n  margin: 15; }\n\n.m-t-15 {\n  margin-top: 15; }\n\n.m-r-15 {\n  margin-right: 15; }\n\n.m-b-15 {\n  margin-bottom: 15; }\n\n.m-l-15 {\n  margin-left: 15; }\n\n.m-x-15 {\n  margin-right: 15;\n  margin-left: 15; }\n\n.m-y-15 {\n  margin-top: 15;\n  margin-bottom: 15; }\n\n.m-16 {\n  margin: 16; }\n\n.m-t-16 {\n  margin-top: 16; }\n\n.m-r-16 {\n  margin-right: 16; }\n\n.m-b-16 {\n  margin-bottom: 16; }\n\n.m-l-16 {\n  margin-left: 16; }\n\n.m-x-16 {\n  margin-right: 16;\n  margin-left: 16; }\n\n.m-y-16 {\n  margin-top: 16;\n  margin-bottom: 16; }\n\n.m-20 {\n  margin: 20; }\n\n.m-t-20 {\n  margin-top: 20; }\n\n.m-r-20 {\n  margin-right: 20; }\n\n.m-b-20 {\n  margin-bottom: 20; }\n\n.m-l-20 {\n  margin-left: 20; }\n\n.m-x-20 {\n  margin-right: 20;\n  margin-left: 20; }\n\n.m-y-20 {\n  margin-top: 20;\n  margin-bottom: 20; }\n\n.m-24 {\n  margin: 24; }\n\n.m-t-24 {\n  margin-top: 24; }\n\n.m-r-24 {\n  margin-right: 24; }\n\n.m-b-24 {\n  margin-bottom: 24; }\n\n.m-l-24 {\n  margin-left: 24; }\n\n.m-x-24 {\n  margin-right: 24;\n  margin-left: 24; }\n\n.m-y-24 {\n  margin-top: 24;\n  margin-bottom: 24; }\n\n.m-25 {\n  margin: 25; }\n\n.m-t-25 {\n  margin-top: 25; }\n\n.m-r-25 {\n  margin-right: 25; }\n\n.m-b-25 {\n  margin-bottom: 25; }\n\n.m-l-25 {\n  margin-left: 25; }\n\n.m-x-25 {\n  margin-right: 25;\n  margin-left: 25; }\n\n.m-y-25 {\n  margin-top: 25;\n  margin-bottom: 25; }\n\n.m-28 {\n  margin: 28; }\n\n.m-t-28 {\n  margin-top: 28; }\n\n.m-r-28 {\n  margin-right: 28; }\n\n.m-b-28 {\n  margin-bottom: 28; }\n\n.m-l-28 {\n  margin-left: 28; }\n\n.m-x-28 {\n  margin-right: 28;\n  margin-left: 28; }\n\n.m-y-28 {\n  margin-top: 28;\n  margin-bottom: 28; }\n\n.m-30 {\n  margin: 30; }\n\n.m-t-30 {\n  margin-top: 30; }\n\n.m-r-30 {\n  margin-right: 30; }\n\n.m-b-30 {\n  margin-bottom: 30; }\n\n.m-l-30 {\n  margin-left: 30; }\n\n.m-x-30 {\n  margin-right: 30;\n  margin-left: 30; }\n\n.m-y-30 {\n  margin-top: 30;\n  margin-bottom: 30; }\n\n.p-0 {\n  padding: 0; }\n\n.p-t-0 {\n  padding-top: 0; }\n\n.p-r-0 {\n  padding-right: 0; }\n\n.p-b-0 {\n  padding-bottom: 0; }\n\n.p-l-0 {\n  padding-left: 0; }\n\n.p-x-0 {\n  padding-right: 0;\n  padding-left: 0; }\n\n.p-y-0 {\n  padding-top: 0;\n  padding-bottom: 0; }\n\n.p-2 {\n  padding: 2; }\n\n.p-t-2 {\n  padding-top: 2; }\n\n.p-r-2 {\n  padding-right: 2; }\n\n.p-b-2 {\n  padding-bottom: 2; }\n\n.p-l-2 {\n  padding-left: 2; }\n\n.p-x-2 {\n  padding-right: 2;\n  padding-left: 2; }\n\n.p-y-2 {\n  padding-top: 2;\n  padding-bottom: 2; }\n\n.p-4 {\n  padding: 4; }\n\n.p-t-4 {\n  padding-top: 4; }\n\n.p-r-4 {\n  padding-right: 4; }\n\n.p-b-4 {\n  padding-bottom: 4; }\n\n.p-l-4 {\n  padding-left: 4; }\n\n.p-x-4 {\n  padding-right: 4;\n  padding-left: 4; }\n\n.p-y-4 {\n  padding-top: 4;\n  padding-bottom: 4; }\n\n.p-5 {\n  padding: 5; }\n\n.p-t-5 {\n  padding-top: 5; }\n\n.p-r-5 {\n  padding-right: 5; }\n\n.p-b-5 {\n  padding-bottom: 5; }\n\n.p-l-5 {\n  padding-left: 5; }\n\n.p-x-5 {\n  padding-right: 5;\n  padding-left: 5; }\n\n.p-y-5 {\n  padding-top: 5;\n  padding-bottom: 5; }\n\n.p-8 {\n  padding: 8; }\n\n.p-t-8 {\n  padding-top: 8; }\n\n.p-r-8 {\n  padding-right: 8; }\n\n.p-b-8 {\n  padding-bottom: 8; }\n\n.p-l-8 {\n  padding-left: 8; }\n\n.p-x-8 {\n  padding-right: 8;\n  padding-left: 8; }\n\n.p-y-8 {\n  padding-top: 8;\n  padding-bottom: 8; }\n\n.p-10 {\n  padding: 10; }\n\n.p-t-10 {\n  padding-top: 10; }\n\n.p-r-10 {\n  padding-right: 10; }\n\n.p-b-10 {\n  padding-bottom: 10; }\n\n.p-l-10 {\n  padding-left: 10; }\n\n.p-x-10 {\n  padding-right: 10;\n  padding-left: 10; }\n\n.p-y-10 {\n  padding-top: 10;\n  padding-bottom: 10; }\n\n.p-12 {\n  padding: 12; }\n\n.p-t-12 {\n  padding-top: 12; }\n\n.p-r-12 {\n  padding-right: 12; }\n\n.p-b-12 {\n  padding-bottom: 12; }\n\n.p-l-12 {\n  padding-left: 12; }\n\n.p-x-12 {\n  padding-right: 12;\n  padding-left: 12; }\n\n.p-y-12 {\n  padding-top: 12;\n  padding-bottom: 12; }\n\n.p-15 {\n  padding: 15; }\n\n.p-t-15 {\n  padding-top: 15; }\n\n.p-r-15 {\n  padding-right: 15; }\n\n.p-b-15 {\n  padding-bottom: 15; }\n\n.p-l-15 {\n  padding-left: 15; }\n\n.p-x-15 {\n  padding-right: 15;\n  padding-left: 15; }\n\n.p-y-15 {\n  padding-top: 15;\n  padding-bottom: 15; }\n\n.p-16 {\n  padding: 16; }\n\n.p-t-16 {\n  padding-top: 16; }\n\n.p-r-16 {\n  padding-right: 16; }\n\n.p-b-16 {\n  padding-bottom: 16; }\n\n.p-l-16 {\n  padding-left: 16; }\n\n.p-x-16 {\n  padding-right: 16;\n  padding-left: 16; }\n\n.p-y-16 {\n  padding-top: 16;\n  padding-bottom: 16; }\n\n.p-20 {\n  padding: 20; }\n\n.p-t-20 {\n  padding-top: 20; }\n\n.p-r-20 {\n  padding-right: 20; }\n\n.p-b-20 {\n  padding-bottom: 20; }\n\n.p-l-20 {\n  padding-left: 20; }\n\n.p-x-20 {\n  padding-right: 20;\n  padding-left: 20; }\n\n.p-y-20 {\n  padding-top: 20;\n  padding-bottom: 20; }\n\n.p-24 {\n  padding: 24; }\n\n.p-t-24 {\n  padding-top: 24; }\n\n.p-r-24 {\n  padding-right: 24; }\n\n.p-b-24 {\n  padding-bottom: 24; }\n\n.p-l-24 {\n  padding-left: 24; }\n\n.p-x-24 {\n  padding-right: 24;\n  padding-left: 24; }\n\n.p-y-24 {\n  padding-top: 24;\n  padding-bottom: 24; }\n\n.p-25 {\n  padding: 25; }\n\n.p-t-25 {\n  padding-top: 25; }\n\n.p-r-25 {\n  padding-right: 25; }\n\n.p-b-25 {\n  padding-bottom: 25; }\n\n.p-l-25 {\n  padding-left: 25; }\n\n.p-x-25 {\n  padding-right: 25;\n  padding-left: 25; }\n\n.p-y-25 {\n  padding-top: 25;\n  padding-bottom: 25; }\n\n.p-28 {\n  padding: 28; }\n\n.p-t-28 {\n  padding-top: 28; }\n\n.p-r-28 {\n  padding-right: 28; }\n\n.p-b-28 {\n  padding-bottom: 28; }\n\n.p-l-28 {\n  padding-left: 28; }\n\n.p-x-28 {\n  padding-right: 28;\n  padding-left: 28; }\n\n.p-y-28 {\n  padding-top: 28;\n  padding-bottom: 28; }\n\n.p-30 {\n  padding: 30; }\n\n.p-t-30 {\n  padding-top: 30; }\n\n.p-r-30 {\n  padding-right: 30; }\n\n.p-b-30 {\n  padding-bottom: 30; }\n\n.p-l-30 {\n  padding-left: 30; }\n\n.p-x-30 {\n  padding-right: 30;\n  padding-left: 30; }\n\n.p-y-30 {\n  padding-top: 30;\n  padding-bottom: 30; }\n\n/* Dividers */\n.hr-light {\n  height: 1;\n  background-color: #e0e0e0;\n  width: 100%; }\n\n.hr-dark {\n  height: 1;\n  background-color: #303030;\n  width: 100%; }\n\n/* Alignment */\n.text-left {\n  text-align: left; }\n\n.text-right {\n  text-align: right; }\n\n.text-center {\n  text-align: center; }\n\n.text-lowercase {\n  text-transform: lowercase; }\n\n.text-uppercase {\n  text-transform: uppercase; }\n\n.text-capitalize {\n  text-transform: capitalize; }\n\n.font-weight-normal {\n  font-weight: normal; }\n\n.font-weight-bold {\n  font-weight: bold; }\n\n.font-italic {\n  font-style: italic; }\n\n/**\r\n * Font size\r\n * The following creates this pattern:\r\n * .t-10{font-size:10}\r\n * From 10, 12, 14, 15, 16, 17, 18, 19, 20\r\n**/\n.t-10 {\n  font-size: 10; }\n\n.t-12 {\n  font-size: 12; }\n\n.t-14 {\n  font-size: 14; }\n\n.t-15 {\n  font-size: 15; }\n\n.t-16 {\n  font-size: 16; }\n\n.t-17 {\n  font-size: 17; }\n\n.t-18 {\n  font-size: 18; }\n\n.t-19 {\n  font-size: 19; }\n\n.t-20 {\n  font-size: 20; }\n\n.t-25 {\n  font-size: 25; }\n\n.t-30 {\n  font-size: 30; }\n\n.img-rounded {\n  border-radius: 5; }\n\n.img-circle {\n  border-radius: 20; }\n\n.img-thumbnail {\n  border-radius: 0; }\n\n.invisible {\n  visibility: collapse; }\n\n.pull-left {\n  horizontal-align: left; }\n\n.pull-right {\n  horizontal-align: right; }\n\n.m-x-auto {\n  horizontal-align: center; }\n\n.m-y-auto {\n  vertical-align: center; }\n\n.text-primary {\n  color: #3A53FF; }\n\n.text-danger {\n  color: #ED473F; }\n\n.text-muted {\n  color: #9e9e9e; }\n\n.bg-primary {\n  background-color: #3A53FF;\n  color: #fff; }\n\n.bg-danger {\n  background-color: #ED473F;\n  color: #fff; }\n\n.action-bar {\n  background-color: #3A53FF;\n  color: #fff; }\n  .action-bar .action-bar-title {\n    font-weight: bold;\n    font-size: 17;\n    vertical-align: center; }\n  .action-bar .action-item {\n    font-weight: normal; }\n\n.activity-indicator {\n  color: #3A53FF;\n  width: 30;\n  height: 30; }\n\n.btn {\n  color: #02556e;\n  background-color: transparent;\n  min-height: 36;\n  min-width: 64;\n  padding: 10 10 10 10;\n  font-size: 18;\n  margin: 8 16 8 16; }\n  .btn.btn-active:highlighted {\n    color: #fff;\n    background-color: #037ca0; }\n\n.btn-primary {\n  background-color: #02556e;\n  border-color: #02556e;\n  color: #fff; }\n  .btn-primary.btn-active:highlighted {\n    background-color: #012e3c;\n    border-color: #012e3c; }\n  .btn-primary.btn-aqua {\n    background-color: #00caab; }\n  .btn-primary.btn-blue {\n    background-color: #3d5afe; }\n  .btn-primary.btn-brown {\n    background-color: #795548; }\n  .btn-primary.btn-forest {\n    background-color: #006968; }\n  .btn-primary.btn-grey {\n    background-color: #5c687c; }\n  .btn-primary.btn-lemon {\n    background-color: #ffea00;\n    color: #000; }\n  .btn-primary.btn-lime {\n    background-color: #aee406;\n    color: #000; }\n  .btn-primary.btn-orange {\n    background-color: #f57c00; }\n  .btn-primary.btn-purple {\n    background-color: #8130ff; }\n  .btn-primary.btn-ruby {\n    background-color: #ff1744; }\n  .btn-primary.btn-sky {\n    background-color: #30bcff; }\n\n.btn-outline {\n  background-color: transparent;\n  border-color: #02556e;\n  color: #02556e; }\n  .btn-outline.btn-active:highlighted {\n    background-color: #037ca0; }\n\n.btn[isEnabled=false] {\n  color: #a4a4a4;\n  background-color: #e0e0e0;\n  border-color: #e0e0e0; }\n\n.fa {\n  font-family: FontAwesome, fontawesome-webfont; }\n\n.form .input {\n  padding: 16 8 16 8;\n  background-color: transparent; }\n  .form .input.input-border {\n    border-width: 1;\n    border-color: #e0e0e0;\n    border-radius: 2;\n    padding: 16; }\n  .form .input.input-rounded {\n    border-width: 1;\n    border-color: #e0e0e0;\n    border-radius: 28;\n    padding: 16; }\n  .form .input[isEnabled='false'] {\n    background-color: #fafafa; }\n\n.form .input-field {\n  margin: 8; }\n  .form .input-field .label {\n    font-size: 12;\n    color: #bababa; }\n  .form .input-field .input {\n    padding: 0;\n    margin: 0 0 8 0; }\n  .form .input-field .hr-light.active,\n  .form .input-field .hr-dark.active {\n    background-color: #3A53FF; }\n  .form .input-field.input-sides .label {\n    font-size: 18;\n    margin: 0 0 8 0; }\n\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  margin-bottom: 4;\n  font-weight: normal;\n  color: #022734; }\n\n.body,\n.body2,\n.footnote {\n  font-weight: normal;\n  color: #022734; }\n\n.h1 {\n  font-size: 32; }\n\n.h2 {\n  font-size: 22; }\n\n.h3 {\n  font-size: 15; }\n\n.h4 {\n  font-size: 12; }\n\n.h5 {\n  font-size: 11; }\n\n.h6 {\n  font-size: 10; }\n\n.body {\n  font-size: 14; }\n\n.body2 {\n  font-size: 17; }\n\n.footnote {\n  font-size: 13; }\n\n.list-group .list-group-item {\n  color: #212121;\n  font-size: 16;\n  margin: 0;\n  padding: 16; }\n  .list-group .list-group-item Label {\n    vertical-align: center; }\n  .list-group .list-group-item .thumb {\n    stretch: fill;\n    width: 40;\n    height: 40;\n    margin-right: 16; }\n  .list-group .list-group-item.active {\n    background-color: #e0e0e0; }\n  .list-group .list-group-item .list-group-item-text {\n    color: #022734;\n    font-size: 14; }\n\n.page {\n  background-color: #fff; }\n\n.progress {\n  color: #3A53FF;\n  background-color: #bababa; }\n\n.segmented-bar {\n  font-size: 13;\n  background-color: #fff;\n  color: #212121;\n  selected-background-color: #3A53FF; }\n\n.sidedrawer-left, .sidedrawer-center {\n  background-color: #FFFFFF; }\n\n.sidedrawer-header {\n  background-color: #fafafa;\n  height: 148;\n  width: 100%; }\n\n.sidedrawer-left .sidedrawer-header {\n  padding: 16 16 0 16; }\n\n.sidedrawer-center .sidedrawer-header {\n  padding: 20 15 0 15; }\n\n.sidedrawer-header-image {\n  background-color: #e0e0e0; }\n\n.sidedrawer-left .sidedrawer-header-image {\n  height: 64;\n  width: 64;\n  border-radius: 32;\n  horizontal-align: left;\n  margin-bottom: 36; }\n\n.sidedrawer-center .sidedrawer-header-image {\n  height: 74;\n  width: 74;\n  border-radius: 37;\n  horizontal-align: center;\n  margin-bottom: 24; }\n\n.sidedrawer-header-brand {\n  color: #737373; }\n\n.sidedrawer-left .sidedrawer-header-brand {\n  horizontal-align: left;\n  font-size: 14; }\n\n.sidedrawer-center .sidedrawer-header-brand {\n  horizontal-align: center;\n  font-size: 15; }\n\n.sidedrawer-list-item {\n  height: 48;\n  horizontal-align: left;\n  width: 100%;\n  orientation: horizontal; }\n  .sidedrawer-list-item .sidedrawer-list-item-icon {\n    width: 24;\n    text-align: center;\n    font-size: 20;\n    height: 48;\n    vertical-align: center; }\n  .sidedrawer-list-item.active {\n    color: #3A53FF;\n    background-color: #F8F8F8; }\n    .sidedrawer-list-item.active .sidedrawer-list-item-icon {\n      color: #3A53FF; }\n\n.sidedrawer-left .sidedrawer-list-item-icon {\n  margin: 0 16 0 16; }\n\n.sidedrawer-center .sidedrawer-list-item-icon {\n  margin: 0 0 0 15; }\n\n.sidedrawer-list-item-text {\n  horizontal-align: left;\n  text-align: left;\n  font-size: 15;\n  background-color: transparent;\n  border-width: 0.1;\n  width: 80%;\n  vertical-align: center; }\n\n.sidedrawer-left .sidedrawer-list-item-text {\n  padding-left: 16; }\n\n.sidedrawer-center .sidedrawer-list-item-text {\n  padding-left: 15; }\n\n.slider {\n  background-color: #3A53FF; }\n  .slider[isEnabled=false] {\n    background-color: #e0e0e0;\n    color: #e0e0e0; }\n\n.switch[checked=true] {\n  background-color: #3A53FF;\n  color: #3A53FF; }\n\n.switch[checked=true][isEnabled=false] {\n  background-color: #e0e0e0;\n  color: #fff; }\n\n.switch[isEnabled=false] {\n  background-color: #e0e0e0;\n  color: #e0e0e0; }\n\n.tab-view {\n  /*color: $secondary;*/\n  selected-color: #30bcff;\n  tabs-background-color: #fff; }\n  .tab-view .tab-view-item {\n    background-color: #fff;\n    tabs-background-color: #fff; }\n\n#login-background {\n  margin-top: -20;\n  background-size: cover;\n  background-position: center; }\n\n.login-wrap {\n  padding: 0 40; }\n\n.logo-wrap {\n  margin: 60 0 10 0;\n  padding: 20 0; }\n  .logo-wrap .login-logo {\n    text-align: center;\n    font-size: 30;\n    font-weight: bold;\n    margin-bottom: 10;\n    opacity: 1;\n    color: #212121;\n    opacity: .9; }\n  .logo-wrap .login-logo-sub {\n    color: #212121;\n    opacity: .8;\n    text-align: center; }\n\n.login-wrapper {\n  padding: 20;\n  background-color: #fff;\n  border-radius: 3; }\n  .login-wrapper TextField {\n    padding: 10 10;\n    margin: 10 0 0 0; }\n\n.go-back {\n  font-size: 14;\n  text-align: center;\n  color: #212121;\n  margin-top: 10; }\n\n/**\r\n * Import all platform specific files here\r\n */\n.action-bar .action-bar-title {\n  font-weight: 500;\n  font-size: 20; }\n\n.action-bar .action-item {\n  android-elevation: 0;\n  background-color: rgba(255, 0, 0, 0);\n  border-color: rgba(255, 0, 0, 0);\n  border-width: 1; }\n\n.btn {\n  font-family: 'Roboto Medium';\n  font-size: 14; }\n\n.btn-primary {\n  border-color: rgba(255, 0, 0, 0); }\n\n.btn-outline {\n  android-elevation: 0;\n  background-color: rgba(255, 0, 0, 0);\n  border-width: 1;\n  border-color: #02556e;\n  height: 36;\n  padding: 0; }\n\n.btn-rounded-sm {\n  border-radius: 2;\n  height: 36;\n  padding: 0; }\n\n.btn-rounded-lg {\n  border-radius: 40;\n  height: 36;\n  padding: 0; }\n\n.form {\n  font-family: 'Roboto Regular'; }\n  .form .input {\n    font-size: 16; }\n\n.h1 {\n  font-size: 34; }\n\n.h2 {\n  font-size: 24; }\n\n.h3 {\n  font-size: 16; }\n\n.h5 {\n  font-size: 11;\n  font-weight: bold; }\n\n.body2 {\n  font-size: 14;\n  font-weight: 500; }\n\n.sidedrawer-list-item-icon {\n  margin: 0 16 0 16;\n  padding-top: 14; }\n\n.sidedrawer-list-item-icon, .sidedrawer-list-item {\n  color: #022734; }\n\n.sidedrawer-list-item {\n  font-family: 'Roboto Medium';\n  font-size: 14; }\n\n.slider {\n  color: #3A53FF;\n  margin: 20 16; }\n\n.switch {\n  margin: 14 16;\n  color: #e0e0e0;\n  background-color: #e0e0e0; }\n  .switch[checked=true] {\n    color: #3A53FF; }\n\n.fa {\n  font-family: \"FontAwesome\"; }\n\n.action-item,\nNavigationButton {\n  color: #fff; }\n\n.action-item:disabled {\n  color: rgba(255, 255, 255, 0.5); }\n\nSlider {\n  background-color: #3A53FF;\n  color: #3A53FF; }\n\n.text {\n  color: #022734; }\n\n.text-primary {\n  color: #3A53FF; }\n\n.text-secondary {\n  color: rgba(2, 39, 52, 0.5); }\n\n.action-item {\n  padding: 0 10;\n  height: 100%; }\n\n.fa {\n  font-family: \"FontAwesome\", \"fontawesome-webfont\"; }\n\n.ion {\n  font-family: \"ionicons\"; }\n", ""]);

// exports
;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.scss' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./components/adoption/AdoptionAnimalDetails.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdoptionAnimalDetails_vue_vue_type_template_id_4eba2d12_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/adoption/AdoptionAnimalDetails.vue?vue&type=template&id=4eba2d12&scoped=true&");
/* harmony import */ var _AdoptionAnimalDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/adoption/AdoptionAnimalDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AdoptionAnimalDetails_vue_vue_type_style_index_0_id_4eba2d12_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/adoption/AdoptionAnimalDetails.vue?vue&type=style&index=0&id=4eba2d12&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AdoptionAnimalDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdoptionAnimalDetails_vue_vue_type_template_id_4eba2d12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdoptionAnimalDetails_vue_vue_type_template_id_4eba2d12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4eba2d12",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('4eba2d12')) {
      api.createRecord('4eba2d12', component.options)
    } else {
      api.reload('4eba2d12', component.options)
    }
    module.hot.accept("./components/adoption/AdoptionAnimalDetails.vue?vue&type=template&id=4eba2d12&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _AdoptionAnimalDetails_vue_vue_type_template_id_4eba2d12_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/adoption/AdoptionAnimalDetails.vue?vue&type=template&id=4eba2d12&scoped=true&");
(function () {
      api.rerender('4eba2d12', {
        render: _AdoptionAnimalDetails_vue_vue_type_template_id_4eba2d12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _AdoptionAnimalDetails_vue_vue_type_template_id_4eba2d12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/adoption/AdoptionAnimalDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/adoption/AdoptionAnimalDetails.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AdoptionAnimalDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/adoption/AdoptionAnimalDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AdoptionAnimalDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/adoption/AdoptionAnimalDetails.vue?vue&type=style&index=0&id=4eba2d12&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AdoptionAnimalDetails_vue_vue_type_style_index_0_id_4eba2d12_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/adoption/AdoptionAnimalDetails.vue?vue&type=style&index=0&id=4eba2d12&scoped=true&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AdoptionAnimalDetails_vue_vue_type_style_index_0_id_4eba2d12_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AdoptionAnimalDetails_vue_vue_type_style_index_0_id_4eba2d12_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AdoptionAnimalDetails_vue_vue_type_style_index_0_id_4eba2d12_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AdoptionAnimalDetails_vue_vue_type_style_index_0_id_4eba2d12_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AdoptionAnimalDetails_vue_vue_type_style_index_0_id_4eba2d12_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/adoption/AdoptionAnimalDetails.vue?vue&type=template&id=4eba2d12&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdoptionAnimalDetails_vue_vue_type_template_id_4eba2d12_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/adoption/AdoptionAnimalDetails.vue?vue&type=template&id=4eba2d12&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdoptionAnimalDetails_vue_vue_type_template_id_4eba2d12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdoptionAnimalDetails_vue_vue_type_template_id_4eba2d12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/adoption/AnimalCard.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AnimalCard_vue_vue_type_template_id_f1422a10_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/adoption/AnimalCard.vue?vue&type=template&id=f1422a10&scoped=true&");
/* harmony import */ var _AnimalCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/adoption/AnimalCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AnimalCard_vue_vue_type_style_index_0_id_f1422a10_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/adoption/AnimalCard.vue?vue&type=style&index=0&id=f1422a10&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AnimalCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AnimalCard_vue_vue_type_template_id_f1422a10_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AnimalCard_vue_vue_type_template_id_f1422a10_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f1422a10",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('f1422a10')) {
      api.createRecord('f1422a10', component.options)
    } else {
      api.reload('f1422a10', component.options)
    }
    module.hot.accept("./components/adoption/AnimalCard.vue?vue&type=template&id=f1422a10&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _AnimalCard_vue_vue_type_template_id_f1422a10_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/adoption/AnimalCard.vue?vue&type=template&id=f1422a10&scoped=true&");
(function () {
      api.rerender('f1422a10', {
        render: _AnimalCard_vue_vue_type_template_id_f1422a10_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _AnimalCard_vue_vue_type_template_id_f1422a10_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/adoption/AnimalCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/adoption/AnimalCard.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AnimalCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/adoption/AnimalCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AnimalCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/adoption/AnimalCard.vue?vue&type=style&index=0&id=f1422a10&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AnimalCard_vue_vue_type_style_index_0_id_f1422a10_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/adoption/AnimalCard.vue?vue&type=style&index=0&id=f1422a10&scoped=true&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AnimalCard_vue_vue_type_style_index_0_id_f1422a10_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AnimalCard_vue_vue_type_style_index_0_id_f1422a10_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AnimalCard_vue_vue_type_style_index_0_id_f1422a10_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AnimalCard_vue_vue_type_style_index_0_id_f1422a10_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AnimalCard_vue_vue_type_style_index_0_id_f1422a10_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/adoption/AnimalCard.vue?vue&type=template&id=f1422a10&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AnimalCard_vue_vue_type_template_id_f1422a10_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/adoption/AnimalCard.vue?vue&type=template&id=f1422a10&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AnimalCard_vue_vue_type_template_id_f1422a10_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AnimalCard_vue_vue_type_template_id_f1422a10_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/adoption/category.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _category_vue_vue_type_template_id_05c98eac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/adoption/category.vue?vue&type=template&id=05c98eac&scoped=true&");
/* harmony import */ var _category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/adoption/category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _category_vue_vue_type_style_index_0_id_05c98eac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/adoption/category.vue?vue&type=style&index=0&id=05c98eac&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _category_vue_vue_type_template_id_05c98eac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _category_vue_vue_type_template_id_05c98eac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "05c98eac",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('05c98eac')) {
      api.createRecord('05c98eac', component.options)
    } else {
      api.reload('05c98eac', component.options)
    }
    module.hot.accept("./components/adoption/category.vue?vue&type=template&id=05c98eac&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _category_vue_vue_type_template_id_05c98eac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/adoption/category.vue?vue&type=template&id=05c98eac&scoped=true&");
(function () {
      api.rerender('05c98eac', {
        render: _category_vue_vue_type_template_id_05c98eac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _category_vue_vue_type_template_id_05c98eac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/adoption/category.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/adoption/category.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/adoption/category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/adoption/category.vue?vue&type=style&index=0&id=05c98eac&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_style_index_0_id_05c98eac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/adoption/category.vue?vue&type=style&index=0&id=05c98eac&scoped=true&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_style_index_0_id_05c98eac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_style_index_0_id_05c98eac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_style_index_0_id_05c98eac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_style_index_0_id_05c98eac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_style_index_0_id_05c98eac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/adoption/category.vue?vue&type=template&id=05c98eac&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_template_id_05c98eac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/adoption/category.vue?vue&type=template&id=05c98eac&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_template_id_05c98eac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_template_id_05c98eac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/buttons/CategoryButton.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CategoryButton_vue_vue_type_template_id_7609a239_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/buttons/CategoryButton.vue?vue&type=template&id=7609a239&scoped=true&");
/* harmony import */ var _CategoryButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/buttons/CategoryButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CategoryButton_vue_vue_type_style_index_0_id_7609a239_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/buttons/CategoryButton.vue?vue&type=style&index=0&id=7609a239&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CategoryButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CategoryButton_vue_vue_type_template_id_7609a239_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CategoryButton_vue_vue_type_template_id_7609a239_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7609a239",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('7609a239')) {
      api.createRecord('7609a239', component.options)
    } else {
      api.reload('7609a239', component.options)
    }
    module.hot.accept("./components/buttons/CategoryButton.vue?vue&type=template&id=7609a239&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _CategoryButton_vue_vue_type_template_id_7609a239_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/buttons/CategoryButton.vue?vue&type=template&id=7609a239&scoped=true&");
(function () {
      api.rerender('7609a239', {
        render: _CategoryButton_vue_vue_type_template_id_7609a239_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _CategoryButton_vue_vue_type_template_id_7609a239_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/buttons/CategoryButton.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/buttons/CategoryButton.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/buttons/CategoryButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/buttons/CategoryButton.vue?vue&type=style&index=0&id=7609a239&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryButton_vue_vue_type_style_index_0_id_7609a239_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/buttons/CategoryButton.vue?vue&type=style&index=0&id=7609a239&scoped=true&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryButton_vue_vue_type_style_index_0_id_7609a239_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryButton_vue_vue_type_style_index_0_id_7609a239_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryButton_vue_vue_type_style_index_0_id_7609a239_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryButton_vue_vue_type_style_index_0_id_7609a239_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryButton_vue_vue_type_style_index_0_id_7609a239_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/buttons/CategoryButton.vue?vue&type=template&id=7609a239&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryButton_vue_vue_type_template_id_7609a239_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/buttons/CategoryButton.vue?vue&type=template&id=7609a239&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryButton_vue_vue_type_template_id_7609a239_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryButton_vue_vue_type_template_id_7609a239_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/buttons/IconButton.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IconButton_vue_vue_type_template_id_44ae5718_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/buttons/IconButton.vue?vue&type=template&id=44ae5718&scoped=true&");
/* harmony import */ var _IconButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/buttons/IconButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _IconButton_vue_vue_type_style_index_0_id_44ae5718_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/buttons/IconButton.vue?vue&type=style&index=0&id=44ae5718&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _IconButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _IconButton_vue_vue_type_template_id_44ae5718_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _IconButton_vue_vue_type_template_id_44ae5718_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "44ae5718",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('44ae5718')) {
      api.createRecord('44ae5718', component.options)
    } else {
      api.reload('44ae5718', component.options)
    }
    module.hot.accept("./components/buttons/IconButton.vue?vue&type=template&id=44ae5718&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _IconButton_vue_vue_type_template_id_44ae5718_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/buttons/IconButton.vue?vue&type=template&id=44ae5718&scoped=true&");
(function () {
      api.rerender('44ae5718', {
        render: _IconButton_vue_vue_type_template_id_44ae5718_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _IconButton_vue_vue_type_template_id_44ae5718_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/buttons/IconButton.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/buttons/IconButton.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_IconButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/buttons/IconButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_IconButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/buttons/IconButton.vue?vue&type=style&index=0&id=44ae5718&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_IconButton_vue_vue_type_style_index_0_id_44ae5718_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/buttons/IconButton.vue?vue&type=style&index=0&id=44ae5718&scoped=true&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_IconButton_vue_vue_type_style_index_0_id_44ae5718_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_IconButton_vue_vue_type_style_index_0_id_44ae5718_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_IconButton_vue_vue_type_style_index_0_id_44ae5718_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_IconButton_vue_vue_type_style_index_0_id_44ae5718_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_IconButton_vue_vue_type_style_index_0_id_44ae5718_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/buttons/IconButton.vue?vue&type=template&id=44ae5718&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IconButton_vue_vue_type_template_id_44ae5718_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/buttons/IconButton.vue?vue&type=template&id=44ae5718&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IconButton_vue_vue_type_template_id_44ae5718_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IconButton_vue_vue_type_template_id_44ae5718_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/location/AnimalCenterDetails.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AnimalCenterDetails_vue_vue_type_template_id_5ff7d15c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/location/AnimalCenterDetails.vue?vue&type=template&id=5ff7d15c&scoped=true&");
/* harmony import */ var _AnimalCenterDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/location/AnimalCenterDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AnimalCenterDetails_vue_vue_type_style_index_0_id_5ff7d15c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/location/AnimalCenterDetails.vue?vue&type=style&index=0&id=5ff7d15c&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AnimalCenterDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AnimalCenterDetails_vue_vue_type_template_id_5ff7d15c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AnimalCenterDetails_vue_vue_type_template_id_5ff7d15c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5ff7d15c",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('5ff7d15c')) {
      api.createRecord('5ff7d15c', component.options)
    } else {
      api.reload('5ff7d15c', component.options)
    }
    module.hot.accept("./components/location/AnimalCenterDetails.vue?vue&type=template&id=5ff7d15c&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _AnimalCenterDetails_vue_vue_type_template_id_5ff7d15c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/location/AnimalCenterDetails.vue?vue&type=template&id=5ff7d15c&scoped=true&");
(function () {
      api.rerender('5ff7d15c', {
        render: _AnimalCenterDetails_vue_vue_type_template_id_5ff7d15c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _AnimalCenterDetails_vue_vue_type_template_id_5ff7d15c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/location/AnimalCenterDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/location/AnimalCenterDetails.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AnimalCenterDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/location/AnimalCenterDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AnimalCenterDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/location/AnimalCenterDetails.vue?vue&type=style&index=0&id=5ff7d15c&scoped=true&lang=scss&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AnimalCenterDetails_vue_vue_type_style_index_0_id_5ff7d15c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js?!./components/location/AnimalCenterDetails.vue?vue&type=style&index=0&id=5ff7d15c&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AnimalCenterDetails_vue_vue_type_style_index_0_id_5ff7d15c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AnimalCenterDetails_vue_vue_type_style_index_0_id_5ff7d15c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AnimalCenterDetails_vue_vue_type_style_index_0_id_5ff7d15c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AnimalCenterDetails_vue_vue_type_style_index_0_id_5ff7d15c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AnimalCenterDetails_vue_vue_type_style_index_0_id_5ff7d15c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/location/AnimalCenterDetails.vue?vue&type=template&id=5ff7d15c&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AnimalCenterDetails_vue_vue_type_template_id_5ff7d15c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/location/AnimalCenterDetails.vue?vue&type=template&id=5ff7d15c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AnimalCenterDetails_vue_vue_type_template_id_5ff7d15c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AnimalCenterDetails_vue_vue_type_template_id_5ff7d15c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/sublists/FaqInfo.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FaqInfo_vue_vue_type_template_id_0a4bb245_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/sublists/FaqInfo.vue?vue&type=template&id=0a4bb245&scoped=true&");
/* harmony import */ var _FaqInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/sublists/FaqInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _FaqInfo_vue_vue_type_style_index_0_id_0a4bb245_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/sublists/FaqInfo.vue?vue&type=style&index=0&id=0a4bb245&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FaqInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FaqInfo_vue_vue_type_template_id_0a4bb245_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FaqInfo_vue_vue_type_template_id_0a4bb245_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0a4bb245",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('0a4bb245')) {
      api.createRecord('0a4bb245', component.options)
    } else {
      api.reload('0a4bb245', component.options)
    }
    module.hot.accept("./components/sublists/FaqInfo.vue?vue&type=template&id=0a4bb245&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _FaqInfo_vue_vue_type_template_id_0a4bb245_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/sublists/FaqInfo.vue?vue&type=template&id=0a4bb245&scoped=true&");
(function () {
      api.rerender('0a4bb245', {
        render: _FaqInfo_vue_vue_type_template_id_0a4bb245_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _FaqInfo_vue_vue_type_template_id_0a4bb245_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/sublists/FaqInfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/sublists/FaqInfo.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FaqInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/sublists/FaqInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FaqInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/sublists/FaqInfo.vue?vue&type=style&index=0&id=0a4bb245&scoped=true&lang=scss&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FaqInfo_vue_vue_type_style_index_0_id_0a4bb245_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js?!./components/sublists/FaqInfo.vue?vue&type=style&index=0&id=0a4bb245&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FaqInfo_vue_vue_type_style_index_0_id_0a4bb245_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FaqInfo_vue_vue_type_style_index_0_id_0a4bb245_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FaqInfo_vue_vue_type_style_index_0_id_0a4bb245_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FaqInfo_vue_vue_type_style_index_0_id_0a4bb245_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FaqInfo_vue_vue_type_style_index_0_id_0a4bb245_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/sublists/FaqInfo.vue?vue&type=template&id=0a4bb245&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FaqInfo_vue_vue_type_template_id_0a4bb245_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/sublists/FaqInfo.vue?vue&type=template&id=0a4bb245&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FaqInfo_vue_vue_type_template_id_0a4bb245_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FaqInfo_vue_vue_type_template_id_0a4bb245_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./db/faqs.json":
/***/ (function(module) {

module.exports = JSON.parse("{\"faqs\":[{\"question\":\"What are the adoption fees?\",\"answer\":\"The adoption fee for a dog or puppy is about $125 and for a cat or kitten about $115. That fee will be reduced by $50 for dogs and $40 for cats if the dog or cat was already sterilized before arriving at our animal care center. We do offer discounted adoption rates for animals that have been in our care for more than 10 days. The adoption fee includes initial vaccines, a microchip including national registration, spaying and neutering fees, and a complementary veterinary medical exam at participating veterinary offices. The Department also provides post-operative pain medication for animals that have been spayed or neutered. The cost for the pain medication is $10 and is included in the cost above. The adoption fee does not include the dog or cat license fee, which must be paid, but varies depending on the City or area you live (already on our website)\"},{\"question\":\"What is the protocol if the adoption does not work out at our house…can we return the dog?\",\"answer\":\"If an adoption does not work out and you decide to return the animal you may receive credit for a future adoption.\"},{\"question\":\"Does the animal come with vaccinations?\",\"answer\":\"Yes, all animals get a complete set of vaccinations prior to being adopted.\"},{\"question\":\"Do you have a list of dogs that you are going to “kill” soon?\",\"answer\":\"No, all animals on our website have an availability date and review date, however animals in our care maybe considered for humane euthanasia only if necessary.\"},{\"question\":\"How often do you get animals in?\",\"answer\":\"Our Care Centers receive animals regularly, we operate 24 hours a day, 7 days a week.\"},{\"question\":\"What cities do you service?\",\"answer\":\"Our seven animal care centers serve unincorporated Los Angeles County and 47 contract cities with a combined total population of over 3 million residents. We cover more than 3,400 square miles of cities, deserts, beaches, and mountains; from the Antelope Valley in the north to the Palos Verdes Peninsula in the south, as far east as the border of San Bernardino County, and west to Thousand Oaks. We provide animal control and rescue services in our service areas 24 hours a day, seven days a week. If you need future details on the exact cities contacts we serve, please contact our Communication Center at 562-940-6898.\"},{\"question\":\"How long does it take to adopt an animal?\",\"answer\":\"This a front office question, but if I had to guess the adoption process may take between 20 – 40 minutes.\"},{\"question\":\"Why don’t “you guys” write ADOPTED on the kennel cards?\",\"answer\":\"Unfortunately, an animal’s status may change, so we encourage our constituents to check the most current status/information with our front office staff or the Communication Center.\"},{\"question\":\"Do you have a list of other local shelters?\",\"answer\":\"A list of local shelters is available in the lobby\"},{\"question\":\"How many animals can I adopt at once?\",\"answer\":\"LA County residents are allowed to own up to 4 dogs. Contract cities limits are usually between 2-3 dogs per house hold, please contact your City Hall for further details.\"},{\"question\":\"Do you sell any supplies for the dog/cat?\",\"answer\":\"We do not sell any animal supplies at any of our Care Centers, please refer to your local Pet supply store in your area.\"},{\"question\":\"Do you have a list of other local shelters?\",\"answer\":\"A list of local shelters is available in the lobby\"},{\"question\":\"How many animals can I adopt at once?\",\"answer\":\"LA County residents are allowed to own up to 4 dogs. Contract cities limits are usually between 2-3 dogs per house hold, please contact your City Hall for further details.\"},{\"question\":\"Do you sell any supplies for the dog/cat?\",\"answer\":\"We do not sell any animal supplies at any of our Care Centers, please refer to your local Pet supply store in your area.\"},{\"question\":\"Do you have a list of other local shelters?\",\"answer\":\"A list of local shelters is available in the lobby\"},{\"question\":\"How many animals can I adopt at once?\",\"answer\":\"LA County residents are allowed to own up to 4 dogs. Contract cities limits are usually between 2-3 dogs per house hold, please contact your City Hall for further details.\"},{\"question\":\"Do you sell any supplies for the dog/cat?\",\"answer\":\"We do not sell any animal supplies at any of our Care Centers, please refer to your local Pet supply store in your area.\"}]}");

/***/ }),

/***/ "./fonts/font-awesome.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */\n/* FONT PATH\n * -------------------------- */\n@font-face {\n  font-family: 'FontAwesome';\n  src: url('../fonts/fontawesome-webfont.eot?v=4.7.0');\n  src: url('../fonts/fontawesome-webfont.eot?#iefix&v=4.7.0') format('embedded-opentype'), url('../fonts/fontawesome-webfont.woff2?v=4.7.0') format('woff2'), url('../fonts/fontawesome-webfont.woff?v=4.7.0') format('woff'), url('../fonts/fontawesome-webfont.ttf?v=4.7.0') format('truetype'), url('../fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n.fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n/* makes the font 33% larger relative to the icon container */\n.fa-lg {\n  font-size: 1.33333333em;\n  line-height: 0.75em;\n  vertical-align: -15%;\n}\n.fa-2x {\n  font-size: 2em;\n}\n.fa-3x {\n  font-size: 3em;\n}\n.fa-4x {\n  font-size: 4em;\n}\n.fa-5x {\n  font-size: 5em;\n}\n.fa-fw {\n  width: 1.28571429em;\n  text-align: center;\n}\n.fa-ul {\n  padding-left: 0;\n  margin-left: 2.14285714em;\n  list-style-type: none;\n}\n.fa-ul > li {\n  position: relative;\n}\n.fa-li {\n  position: absolute;\n  left: -2.14285714em;\n  width: 2.14285714em;\n  top: 0.14285714em;\n  text-align: center;\n}\n.fa-li.fa-lg {\n  left: -1.85714286em;\n}\n.fa-border {\n  padding: .2em .25em .15em;\n  border: solid 0.08em #eeeeee;\n  border-radius: .1em;\n}\n.fa-pull-left {\n  float: left;\n}\n.fa-pull-right {\n  float: right;\n}\n.fa.fa-pull-left {\n  margin-right: .3em;\n}\n.fa.fa-pull-right {\n  margin-left: .3em;\n}\n/* Deprecated as of 4.4.0 */\n.pull-right {\n  float: right;\n}\n.pull-left {\n  float: left;\n}\n.fa.pull-left {\n  margin-right: .3em;\n}\n.fa.pull-right {\n  margin-left: .3em;\n}\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n  animation: fa-spin 2s infinite linear;\n}\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n  animation: fa-spin 1s infinite steps(8);\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n  -ms-transform: rotate(270deg);\n  transform: rotate(270deg);\n}\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n  -ms-transform: scale(-1, 1);\n  transform: scale(-1, 1);\n}\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n  -ms-transform: scale(1, -1);\n  transform: scale(1, -1);\n}\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical {\n  filter: none;\n}\n.fa-stack {\n  position: relative;\n  display: inline-block;\n  width: 2em;\n  height: 2em;\n  line-height: 2em;\n  vertical-align: middle;\n}\n.fa-stack-1x,\n.fa-stack-2x {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n.fa-stack-1x {\n  line-height: inherit;\n}\n.fa-stack-2x {\n  font-size: 2em;\n}\n.fa-inverse {\n  color: #ffffff;\n}\n/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen\n   readers do not read off random characters that represent icons */\n.fa-glass:before {\n  content: \"\\F000\";\n}\n.fa-music:before {\n  content: \"\\F001\";\n}\n.fa-search:before {\n  content: \"\\F002\";\n}\n.fa-envelope-o:before {\n  content: \"\\F003\";\n}\n.fa-heart:before {\n  content: \"\\F004\";\n}\n.fa-star:before {\n  content: \"\\F005\";\n}\n.fa-star-o:before {\n  content: \"\\F006\";\n}\n.fa-user:before {\n  content: \"\\F007\";\n}\n.fa-film:before {\n  content: \"\\F008\";\n}\n.fa-th-large:before {\n  content: \"\\F009\";\n}\n.fa-th:before {\n  content: \"\\F00A\";\n}\n.fa-th-list:before {\n  content: \"\\F00B\";\n}\n.fa-check:before {\n  content: \"\\F00C\";\n}\n.fa-remove:before,\n.fa-close:before,\n.fa-times:before {\n  content: \"\\F00D\";\n}\n.fa-search-plus:before {\n  content: \"\\F00E\";\n}\n.fa-search-minus:before {\n  content: \"\\F010\";\n}\n.fa-power-off:before {\n  content: \"\\F011\";\n}\n.fa-signal:before {\n  content: \"\\F012\";\n}\n.fa-gear:before,\n.fa-cog:before {\n  content: \"\\F013\";\n}\n.fa-trash-o:before {\n  content: \"\\F014\";\n}\n.fa-home:before {\n  content: \"\\F015\";\n}\n.fa-file-o:before {\n  content: \"\\F016\";\n}\n.fa-clock-o:before {\n  content: \"\\F017\";\n}\n.fa-road:before {\n  content: \"\\F018\";\n}\n.fa-download:before {\n  content: \"\\F019\";\n}\n.fa-arrow-circle-o-down:before {\n  content: \"\\F01A\";\n}\n.fa-arrow-circle-o-up:before {\n  content: \"\\F01B\";\n}\n.fa-inbox:before {\n  content: \"\\F01C\";\n}\n.fa-play-circle-o:before {\n  content: \"\\F01D\";\n}\n.fa-rotate-right:before,\n.fa-repeat:before {\n  content: \"\\F01E\";\n}\n.fa-refresh:before {\n  content: \"\\F021\";\n}\n.fa-list-alt:before {\n  content: \"\\F022\";\n}\n.fa-lock:before {\n  content: \"\\F023\";\n}\n.fa-flag:before {\n  content: \"\\F024\";\n}\n.fa-headphones:before {\n  content: \"\\F025\";\n}\n.fa-volume-off:before {\n  content: \"\\F026\";\n}\n.fa-volume-down:before {\n  content: \"\\F027\";\n}\n.fa-volume-up:before {\n  content: \"\\F028\";\n}\n.fa-qrcode:before {\n  content: \"\\F029\";\n}\n.fa-barcode:before {\n  content: \"\\F02A\";\n}\n.fa-tag:before {\n  content: \"\\F02B\";\n}\n.fa-tags:before {\n  content: \"\\F02C\";\n}\n.fa-book:before {\n  content: \"\\F02D\";\n}\n.fa-bookmark:before {\n  content: \"\\F02E\";\n}\n.fa-print:before {\n  content: \"\\F02F\";\n}\n.fa-camera:before {\n  content: \"\\F030\";\n}\n.fa-font:before {\n  content: \"\\F031\";\n}\n.fa-bold:before {\n  content: \"\\F032\";\n}\n.fa-italic:before {\n  content: \"\\F033\";\n}\n.fa-text-height:before {\n  content: \"\\F034\";\n}\n.fa-text-width:before {\n  content: \"\\F035\";\n}\n.fa-align-left:before {\n  content: \"\\F036\";\n}\n.fa-align-center:before {\n  content: \"\\F037\";\n}\n.fa-align-right:before {\n  content: \"\\F038\";\n}\n.fa-align-justify:before {\n  content: \"\\F039\";\n}\n.fa-list:before {\n  content: \"\\F03A\";\n}\n.fa-dedent:before,\n.fa-outdent:before {\n  content: \"\\F03B\";\n}\n.fa-indent:before {\n  content: \"\\F03C\";\n}\n.fa-video-camera:before {\n  content: \"\\F03D\";\n}\n.fa-photo:before,\n.fa-image:before,\n.fa-picture-o:before {\n  content: \"\\F03E\";\n}\n.fa-pencil:before {\n  content: \"\\F040\";\n}\n.fa-map-marker:before {\n  content: \"\\F041\";\n}\n.fa-adjust:before {\n  content: \"\\F042\";\n}\n.fa-tint:before {\n  content: \"\\F043\";\n}\n.fa-edit:before,\n.fa-pencil-square-o:before {\n  content: \"\\F044\";\n}\n.fa-share-square-o:before {\n  content: \"\\F045\";\n}\n.fa-check-square-o:before {\n  content: \"\\F046\";\n}\n.fa-arrows:before {\n  content: \"\\F047\";\n}\n.fa-step-backward:before {\n  content: \"\\F048\";\n}\n.fa-fast-backward:before {\n  content: \"\\F049\";\n}\n.fa-backward:before {\n  content: \"\\F04A\";\n}\n.fa-play:before {\n  content: \"\\F04B\";\n}\n.fa-pause:before {\n  content: \"\\F04C\";\n}\n.fa-stop:before {\n  content: \"\\F04D\";\n}\n.fa-forward:before {\n  content: \"\\F04E\";\n}\n.fa-fast-forward:before {\n  content: \"\\F050\";\n}\n.fa-step-forward:before {\n  content: \"\\F051\";\n}\n.fa-eject:before {\n  content: \"\\F052\";\n}\n.fa-chevron-left:before {\n  content: \"\\F053\";\n}\n.fa-chevron-right:before {\n  content: \"\\F054\";\n}\n.fa-plus-circle:before {\n  content: \"\\F055\";\n}\n.fa-minus-circle:before {\n  content: \"\\F056\";\n}\n.fa-times-circle:before {\n  content: \"\\F057\";\n}\n.fa-check-circle:before {\n  content: \"\\F058\";\n}\n.fa-question-circle:before {\n  content: \"\\F059\";\n}\n.fa-info-circle:before {\n  content: \"\\F05A\";\n}\n.fa-crosshairs:before {\n  content: \"\\F05B\";\n}\n.fa-times-circle-o:before {\n  content: \"\\F05C\";\n}\n.fa-check-circle-o:before {\n  content: \"\\F05D\";\n}\n.fa-ban:before {\n  content: \"\\F05E\";\n}\n.fa-arrow-left:before {\n  content: \"\\F060\";\n}\n.fa-arrow-right:before {\n  content: \"\\F061\";\n}\n.fa-arrow-up:before {\n  content: \"\\F062\";\n}\n.fa-arrow-down:before {\n  content: \"\\F063\";\n}\n.fa-mail-forward:before,\n.fa-share:before {\n  content: \"\\F064\";\n}\n.fa-expand:before {\n  content: \"\\F065\";\n}\n.fa-compress:before {\n  content: \"\\F066\";\n}\n.fa-plus:before {\n  content: \"\\F067\";\n}\n.fa-minus:before {\n  content: \"\\F068\";\n}\n.fa-asterisk:before {\n  content: \"\\F069\";\n}\n.fa-exclamation-circle:before {\n  content: \"\\F06A\";\n}\n.fa-gift:before {\n  content: \"\\F06B\";\n}\n.fa-leaf:before {\n  content: \"\\F06C\";\n}\n.fa-fire:before {\n  content: \"\\F06D\";\n}\n.fa-eye:before {\n  content: \"\\F06E\";\n}\n.fa-eye-slash:before {\n  content: \"\\F070\";\n}\n.fa-warning:before,\n.fa-exclamation-triangle:before {\n  content: \"\\F071\";\n}\n.fa-plane:before {\n  content: \"\\F072\";\n}\n.fa-calendar:before {\n  content: \"\\F073\";\n}\n.fa-random:before {\n  content: \"\\F074\";\n}\n.fa-comment:before {\n  content: \"\\F075\";\n}\n.fa-magnet:before {\n  content: \"\\F076\";\n}\n.fa-chevron-up:before {\n  content: \"\\F077\";\n}\n.fa-chevron-down:before {\n  content: \"\\F078\";\n}\n.fa-retweet:before {\n  content: \"\\F079\";\n}\n.fa-shopping-cart:before {\n  content: \"\\F07A\";\n}\n.fa-folder:before {\n  content: \"\\F07B\";\n}\n.fa-folder-open:before {\n  content: \"\\F07C\";\n}\n.fa-arrows-v:before {\n  content: \"\\F07D\";\n}\n.fa-arrows-h:before {\n  content: \"\\F07E\";\n}\n.fa-bar-chart-o:before,\n.fa-bar-chart:before {\n  content: \"\\F080\";\n}\n.fa-twitter-square:before {\n  content: \"\\F081\";\n}\n.fa-facebook-square:before {\n  content: \"\\F082\";\n}\n.fa-camera-retro:before {\n  content: \"\\F083\";\n}\n.fa-key:before {\n  content: \"\\F084\";\n}\n.fa-gears:before,\n.fa-cogs:before {\n  content: \"\\F085\";\n}\n.fa-comments:before {\n  content: \"\\F086\";\n}\n.fa-thumbs-o-up:before {\n  content: \"\\F087\";\n}\n.fa-thumbs-o-down:before {\n  content: \"\\F088\";\n}\n.fa-star-half:before {\n  content: \"\\F089\";\n}\n.fa-heart-o:before {\n  content: \"\\F08A\";\n}\n.fa-sign-out:before {\n  content: \"\\F08B\";\n}\n.fa-linkedin-square:before {\n  content: \"\\F08C\";\n}\n.fa-thumb-tack:before {\n  content: \"\\F08D\";\n}\n.fa-external-link:before {\n  content: \"\\F08E\";\n}\n.fa-sign-in:before {\n  content: \"\\F090\";\n}\n.fa-trophy:before {\n  content: \"\\F091\";\n}\n.fa-github-square:before {\n  content: \"\\F092\";\n}\n.fa-upload:before {\n  content: \"\\F093\";\n}\n.fa-lemon-o:before {\n  content: \"\\F094\";\n}\n.fa-phone:before {\n  content: \"\\F095\";\n}\n.fa-square-o:before {\n  content: \"\\F096\";\n}\n.fa-bookmark-o:before {\n  content: \"\\F097\";\n}\n.fa-phone-square:before {\n  content: \"\\F098\";\n}\n.fa-twitter:before {\n  content: \"\\F099\";\n}\n.fa-facebook-f:before,\n.fa-facebook:before {\n  content: \"\\F09A\";\n}\n.fa-github:before {\n  content: \"\\F09B\";\n}\n.fa-unlock:before {\n  content: \"\\F09C\";\n}\n.fa-credit-card:before {\n  content: \"\\F09D\";\n}\n.fa-feed:before,\n.fa-rss:before {\n  content: \"\\F09E\";\n}\n.fa-hdd-o:before {\n  content: \"\\F0A0\";\n}\n.fa-bullhorn:before {\n  content: \"\\F0A1\";\n}\n.fa-bell:before {\n  content: \"\\F0F3\";\n}\n.fa-certificate:before {\n  content: \"\\F0A3\";\n}\n.fa-hand-o-right:before {\n  content: \"\\F0A4\";\n}\n.fa-hand-o-left:before {\n  content: \"\\F0A5\";\n}\n.fa-hand-o-up:before {\n  content: \"\\F0A6\";\n}\n.fa-hand-o-down:before {\n  content: \"\\F0A7\";\n}\n.fa-arrow-circle-left:before {\n  content: \"\\F0A8\";\n}\n.fa-arrow-circle-right:before {\n  content: \"\\F0A9\";\n}\n.fa-arrow-circle-up:before {\n  content: \"\\F0AA\";\n}\n.fa-arrow-circle-down:before {\n  content: \"\\F0AB\";\n}\n.fa-globe:before {\n  content: \"\\F0AC\";\n}\n.fa-wrench:before {\n  content: \"\\F0AD\";\n}\n.fa-tasks:before {\n  content: \"\\F0AE\";\n}\n.fa-filter:before {\n  content: \"\\F0B0\";\n}\n.fa-briefcase:before {\n  content: \"\\F0B1\";\n}\n.fa-arrows-alt:before {\n  content: \"\\F0B2\";\n}\n.fa-group:before,\n.fa-users:before {\n  content: \"\\F0C0\";\n}\n.fa-chain:before,\n.fa-link:before {\n  content: \"\\F0C1\";\n}\n.fa-cloud:before {\n  content: \"\\F0C2\";\n}\n.fa-flask:before {\n  content: \"\\F0C3\";\n}\n.fa-cut:before,\n.fa-scissors:before {\n  content: \"\\F0C4\";\n}\n.fa-copy:before,\n.fa-files-o:before {\n  content: \"\\F0C5\";\n}\n.fa-paperclip:before {\n  content: \"\\F0C6\";\n}\n.fa-save:before,\n.fa-floppy-o:before {\n  content: \"\\F0C7\";\n}\n.fa-square:before {\n  content: \"\\F0C8\";\n}\n.fa-navicon:before,\n.fa-reorder:before,\n.fa-bars:before {\n  content: \"\\F0C9\";\n}\n.fa-list-ul:before {\n  content: \"\\F0CA\";\n}\n.fa-list-ol:before {\n  content: \"\\F0CB\";\n}\n.fa-strikethrough:before {\n  content: \"\\F0CC\";\n}\n.fa-underline:before {\n  content: \"\\F0CD\";\n}\n.fa-table:before {\n  content: \"\\F0CE\";\n}\n.fa-magic:before {\n  content: \"\\F0D0\";\n}\n.fa-truck:before {\n  content: \"\\F0D1\";\n}\n.fa-pinterest:before {\n  content: \"\\F0D2\";\n}\n.fa-pinterest-square:before {\n  content: \"\\F0D3\";\n}\n.fa-google-plus-square:before {\n  content: \"\\F0D4\";\n}\n.fa-google-plus:before {\n  content: \"\\F0D5\";\n}\n.fa-money:before {\n  content: \"\\F0D6\";\n}\n.fa-caret-down:before {\n  content: \"\\F0D7\";\n}\n.fa-caret-up:before {\n  content: \"\\F0D8\";\n}\n.fa-caret-left:before {\n  content: \"\\F0D9\";\n}\n.fa-caret-right:before {\n  content: \"\\F0DA\";\n}\n.fa-columns:before {\n  content: \"\\F0DB\";\n}\n.fa-unsorted:before,\n.fa-sort:before {\n  content: \"\\F0DC\";\n}\n.fa-sort-down:before,\n.fa-sort-desc:before {\n  content: \"\\F0DD\";\n}\n.fa-sort-up:before,\n.fa-sort-asc:before {\n  content: \"\\F0DE\";\n}\n.fa-envelope:before {\n  content: \"\\F0E0\";\n}\n.fa-linkedin:before {\n  content: \"\\F0E1\";\n}\n.fa-rotate-left:before,\n.fa-undo:before {\n  content: \"\\F0E2\";\n}\n.fa-legal:before,\n.fa-gavel:before {\n  content: \"\\F0E3\";\n}\n.fa-dashboard:before,\n.fa-tachometer:before {\n  content: \"\\F0E4\";\n}\n.fa-comment-o:before {\n  content: \"\\F0E5\";\n}\n.fa-comments-o:before {\n  content: \"\\F0E6\";\n}\n.fa-flash:before,\n.fa-bolt:before {\n  content: \"\\F0E7\";\n}\n.fa-sitemap:before {\n  content: \"\\F0E8\";\n}\n.fa-umbrella:before {\n  content: \"\\F0E9\";\n}\n.fa-paste:before,\n.fa-clipboard:before {\n  content: \"\\F0EA\";\n}\n.fa-lightbulb-o:before {\n  content: \"\\F0EB\";\n}\n.fa-exchange:before {\n  content: \"\\F0EC\";\n}\n.fa-cloud-download:before {\n  content: \"\\F0ED\";\n}\n.fa-cloud-upload:before {\n  content: \"\\F0EE\";\n}\n.fa-user-md:before {\n  content: \"\\F0F0\";\n}\n.fa-stethoscope:before {\n  content: \"\\F0F1\";\n}\n.fa-suitcase:before {\n  content: \"\\F0F2\";\n}\n.fa-bell-o:before {\n  content: \"\\F0A2\";\n}\n.fa-coffee:before {\n  content: \"\\F0F4\";\n}\n.fa-cutlery:before {\n  content: \"\\F0F5\";\n}\n.fa-file-text-o:before {\n  content: \"\\F0F6\";\n}\n.fa-building-o:before {\n  content: \"\\F0F7\";\n}\n.fa-hospital-o:before {\n  content: \"\\F0F8\";\n}\n.fa-ambulance:before {\n  content: \"\\F0F9\";\n}\n.fa-medkit:before {\n  content: \"\\F0FA\";\n}\n.fa-fighter-jet:before {\n  content: \"\\F0FB\";\n}\n.fa-beer:before {\n  content: \"\\F0FC\";\n}\n.fa-h-square:before {\n  content: \"\\F0FD\";\n}\n.fa-plus-square:before {\n  content: \"\\F0FE\";\n}\n.fa-angle-double-left:before {\n  content: \"\\F100\";\n}\n.fa-angle-double-right:before {\n  content: \"\\F101\";\n}\n.fa-angle-double-up:before {\n  content: \"\\F102\";\n}\n.fa-angle-double-down:before {\n  content: \"\\F103\";\n}\n.fa-angle-left:before {\n  content: \"\\F104\";\n}\n.fa-angle-right:before {\n  content: \"\\F105\";\n}\n.fa-angle-up:before {\n  content: \"\\F106\";\n}\n.fa-angle-down:before {\n  content: \"\\F107\";\n}\n.fa-desktop:before {\n  content: \"\\F108\";\n}\n.fa-laptop:before {\n  content: \"\\F109\";\n}\n.fa-tablet:before {\n  content: \"\\F10A\";\n}\n.fa-mobile-phone:before,\n.fa-mobile:before {\n  content: \"\\F10B\";\n}\n.fa-circle-o:before {\n  content: \"\\F10C\";\n}\n.fa-quote-left:before {\n  content: \"\\F10D\";\n}\n.fa-quote-right:before {\n  content: \"\\F10E\";\n}\n.fa-spinner:before {\n  content: \"\\F110\";\n}\n.fa-circle:before {\n  content: \"\\F111\";\n}\n.fa-mail-reply:before,\n.fa-reply:before {\n  content: \"\\F112\";\n}\n.fa-github-alt:before {\n  content: \"\\F113\";\n}\n.fa-folder-o:before {\n  content: \"\\F114\";\n}\n.fa-folder-open-o:before {\n  content: \"\\F115\";\n}\n.fa-smile-o:before {\n  content: \"\\F118\";\n}\n.fa-frown-o:before {\n  content: \"\\F119\";\n}\n.fa-meh-o:before {\n  content: \"\\F11A\";\n}\n.fa-gamepad:before {\n  content: \"\\F11B\";\n}\n.fa-keyboard-o:before {\n  content: \"\\F11C\";\n}\n.fa-flag-o:before {\n  content: \"\\F11D\";\n}\n.fa-flag-checkered:before {\n  content: \"\\F11E\";\n}\n.fa-terminal:before {\n  content: \"\\F120\";\n}\n.fa-code:before {\n  content: \"\\F121\";\n}\n.fa-mail-reply-all:before,\n.fa-reply-all:before {\n  content: \"\\F122\";\n}\n.fa-star-half-empty:before,\n.fa-star-half-full:before,\n.fa-star-half-o:before {\n  content: \"\\F123\";\n}\n.fa-location-arrow:before {\n  content: \"\\F124\";\n}\n.fa-crop:before {\n  content: \"\\F125\";\n}\n.fa-code-fork:before {\n  content: \"\\F126\";\n}\n.fa-unlink:before,\n.fa-chain-broken:before {\n  content: \"\\F127\";\n}\n.fa-question:before {\n  content: \"\\F128\";\n}\n.fa-info:before {\n  content: \"\\F129\";\n}\n.fa-exclamation:before {\n  content: \"\\F12A\";\n}\n.fa-superscript:before {\n  content: \"\\F12B\";\n}\n.fa-subscript:before {\n  content: \"\\F12C\";\n}\n.fa-eraser:before {\n  content: \"\\F12D\";\n}\n.fa-puzzle-piece:before {\n  content: \"\\F12E\";\n}\n.fa-microphone:before {\n  content: \"\\F130\";\n}\n.fa-microphone-slash:before {\n  content: \"\\F131\";\n}\n.fa-shield:before {\n  content: \"\\F132\";\n}\n.fa-calendar-o:before {\n  content: \"\\F133\";\n}\n.fa-fire-extinguisher:before {\n  content: \"\\F134\";\n}\n.fa-rocket:before {\n  content: \"\\F135\";\n}\n.fa-maxcdn:before {\n  content: \"\\F136\";\n}\n.fa-chevron-circle-left:before {\n  content: \"\\F137\";\n}\n.fa-chevron-circle-right:before {\n  content: \"\\F138\";\n}\n.fa-chevron-circle-up:before {\n  content: \"\\F139\";\n}\n.fa-chevron-circle-down:before {\n  content: \"\\F13A\";\n}\n.fa-html5:before {\n  content: \"\\F13B\";\n}\n.fa-css3:before {\n  content: \"\\F13C\";\n}\n.fa-anchor:before {\n  content: \"\\F13D\";\n}\n.fa-unlock-alt:before {\n  content: \"\\F13E\";\n}\n.fa-bullseye:before {\n  content: \"\\F140\";\n}\n.fa-ellipsis-h:before {\n  content: \"\\F141\";\n}\n.fa-ellipsis-v:before {\n  content: \"\\F142\";\n}\n.fa-rss-square:before {\n  content: \"\\F143\";\n}\n.fa-play-circle:before {\n  content: \"\\F144\";\n}\n.fa-ticket:before {\n  content: \"\\F145\";\n}\n.fa-minus-square:before {\n  content: \"\\F146\";\n}\n.fa-minus-square-o:before {\n  content: \"\\F147\";\n}\n.fa-level-up:before {\n  content: \"\\F148\";\n}\n.fa-level-down:before {\n  content: \"\\F149\";\n}\n.fa-check-square:before {\n  content: \"\\F14A\";\n}\n.fa-pencil-square:before {\n  content: \"\\F14B\";\n}\n.fa-external-link-square:before {\n  content: \"\\F14C\";\n}\n.fa-share-square:before {\n  content: \"\\F14D\";\n}\n.fa-compass:before {\n  content: \"\\F14E\";\n}\n.fa-toggle-down:before,\n.fa-caret-square-o-down:before {\n  content: \"\\F150\";\n}\n.fa-toggle-up:before,\n.fa-caret-square-o-up:before {\n  content: \"\\F151\";\n}\n.fa-toggle-right:before,\n.fa-caret-square-o-right:before {\n  content: \"\\F152\";\n}\n.fa-euro:before,\n.fa-eur:before {\n  content: \"\\F153\";\n}\n.fa-gbp:before {\n  content: \"\\F154\";\n}\n.fa-dollar:before,\n.fa-usd:before {\n  content: \"\\F155\";\n}\n.fa-rupee:before,\n.fa-inr:before {\n  content: \"\\F156\";\n}\n.fa-cny:before,\n.fa-rmb:before,\n.fa-yen:before,\n.fa-jpy:before {\n  content: \"\\F157\";\n}\n.fa-ruble:before,\n.fa-rouble:before,\n.fa-rub:before {\n  content: \"\\F158\";\n}\n.fa-won:before,\n.fa-krw:before {\n  content: \"\\F159\";\n}\n.fa-bitcoin:before,\n.fa-btc:before {\n  content: \"\\F15A\";\n}\n.fa-file:before {\n  content: \"\\F15B\";\n}\n.fa-file-text:before {\n  content: \"\\F15C\";\n}\n.fa-sort-alpha-asc:before {\n  content: \"\\F15D\";\n}\n.fa-sort-alpha-desc:before {\n  content: \"\\F15E\";\n}\n.fa-sort-amount-asc:before {\n  content: \"\\F160\";\n}\n.fa-sort-amount-desc:before {\n  content: \"\\F161\";\n}\n.fa-sort-numeric-asc:before {\n  content: \"\\F162\";\n}\n.fa-sort-numeric-desc:before {\n  content: \"\\F163\";\n}\n.fa-thumbs-up:before {\n  content: \"\\F164\";\n}\n.fa-thumbs-down:before {\n  content: \"\\F165\";\n}\n.fa-youtube-square:before {\n  content: \"\\F166\";\n}\n.fa-youtube:before {\n  content: \"\\F167\";\n}\n.fa-xing:before {\n  content: \"\\F168\";\n}\n.fa-xing-square:before {\n  content: \"\\F169\";\n}\n.fa-youtube-play:before {\n  content: \"\\F16A\";\n}\n.fa-dropbox:before {\n  content: \"\\F16B\";\n}\n.fa-stack-overflow:before {\n  content: \"\\F16C\";\n}\n.fa-instagram:before {\n  content: \"\\F16D\";\n}\n.fa-flickr:before {\n  content: \"\\F16E\";\n}\n.fa-adn:before {\n  content: \"\\F170\";\n}\n.fa-bitbucket:before {\n  content: \"\\F171\";\n}\n.fa-bitbucket-square:before {\n  content: \"\\F172\";\n}\n.fa-tumblr:before {\n  content: \"\\F173\";\n}\n.fa-tumblr-square:before {\n  content: \"\\F174\";\n}\n.fa-long-arrow-down:before {\n  content: \"\\F175\";\n}\n.fa-long-arrow-up:before {\n  content: \"\\F176\";\n}\n.fa-long-arrow-left:before {\n  content: \"\\F177\";\n}\n.fa-long-arrow-right:before {\n  content: \"\\F178\";\n}\n.fa-apple:before {\n  content: \"\\F179\";\n}\n.fa-windows:before {\n  content: \"\\F17A\";\n}\n.fa-android:before {\n  content: \"\\F17B\";\n}\n.fa-linux:before {\n  content: \"\\F17C\";\n}\n.fa-dribbble:before {\n  content: \"\\F17D\";\n}\n.fa-skype:before {\n  content: \"\\F17E\";\n}\n.fa-foursquare:before {\n  content: \"\\F180\";\n}\n.fa-trello:before {\n  content: \"\\F181\";\n}\n.fa-female:before {\n  content: \"\\F182\";\n}\n.fa-male:before {\n  content: \"\\F183\";\n}\n.fa-gittip:before,\n.fa-gratipay:before {\n  content: \"\\F184\";\n}\n.fa-sun-o:before {\n  content: \"\\F185\";\n}\n.fa-moon-o:before {\n  content: \"\\F186\";\n}\n.fa-archive:before {\n  content: \"\\F187\";\n}\n.fa-bug:before {\n  content: \"\\F188\";\n}\n.fa-vk:before {\n  content: \"\\F189\";\n}\n.fa-weibo:before {\n  content: \"\\F18A\";\n}\n.fa-renren:before {\n  content: \"\\F18B\";\n}\n.fa-pagelines:before {\n  content: \"\\F18C\";\n}\n.fa-stack-exchange:before {\n  content: \"\\F18D\";\n}\n.fa-arrow-circle-o-right:before {\n  content: \"\\F18E\";\n}\n.fa-arrow-circle-o-left:before {\n  content: \"\\F190\";\n}\n.fa-toggle-left:before,\n.fa-caret-square-o-left:before {\n  content: \"\\F191\";\n}\n.fa-dot-circle-o:before {\n  content: \"\\F192\";\n}\n.fa-wheelchair:before {\n  content: \"\\F193\";\n}\n.fa-vimeo-square:before {\n  content: \"\\F194\";\n}\n.fa-turkish-lira:before,\n.fa-try:before {\n  content: \"\\F195\";\n}\n.fa-plus-square-o:before {\n  content: \"\\F196\";\n}\n.fa-space-shuttle:before {\n  content: \"\\F197\";\n}\n.fa-slack:before {\n  content: \"\\F198\";\n}\n.fa-envelope-square:before {\n  content: \"\\F199\";\n}\n.fa-wordpress:before {\n  content: \"\\F19A\";\n}\n.fa-openid:before {\n  content: \"\\F19B\";\n}\n.fa-institution:before,\n.fa-bank:before,\n.fa-university:before {\n  content: \"\\F19C\";\n}\n.fa-mortar-board:before,\n.fa-graduation-cap:before {\n  content: \"\\F19D\";\n}\n.fa-yahoo:before {\n  content: \"\\F19E\";\n}\n.fa-google:before {\n  content: \"\\F1A0\";\n}\n.fa-reddit:before {\n  content: \"\\F1A1\";\n}\n.fa-reddit-square:before {\n  content: \"\\F1A2\";\n}\n.fa-stumbleupon-circle:before {\n  content: \"\\F1A3\";\n}\n.fa-stumbleupon:before {\n  content: \"\\F1A4\";\n}\n.fa-delicious:before {\n  content: \"\\F1A5\";\n}\n.fa-digg:before {\n  content: \"\\F1A6\";\n}\n.fa-pied-piper-pp:before {\n  content: \"\\F1A7\";\n}\n.fa-pied-piper-alt:before {\n  content: \"\\F1A8\";\n}\n.fa-drupal:before {\n  content: \"\\F1A9\";\n}\n.fa-joomla:before {\n  content: \"\\F1AA\";\n}\n.fa-language:before {\n  content: \"\\F1AB\";\n}\n.fa-fax:before {\n  content: \"\\F1AC\";\n}\n.fa-building:before {\n  content: \"\\F1AD\";\n}\n.fa-child:before {\n  content: \"\\F1AE\";\n}\n.fa-paw:before {\n  content: \"\\F1B0\";\n}\n.fa-spoon:before {\n  content: \"\\F1B1\";\n}\n.fa-cube:before {\n  content: \"\\F1B2\";\n}\n.fa-cubes:before {\n  content: \"\\F1B3\";\n}\n.fa-behance:before {\n  content: \"\\F1B4\";\n}\n.fa-behance-square:before {\n  content: \"\\F1B5\";\n}\n.fa-steam:before {\n  content: \"\\F1B6\";\n}\n.fa-steam-square:before {\n  content: \"\\F1B7\";\n}\n.fa-recycle:before {\n  content: \"\\F1B8\";\n}\n.fa-automobile:before,\n.fa-car:before {\n  content: \"\\F1B9\";\n}\n.fa-cab:before,\n.fa-taxi:before {\n  content: \"\\F1BA\";\n}\n.fa-tree:before {\n  content: \"\\F1BB\";\n}\n.fa-spotify:before {\n  content: \"\\F1BC\";\n}\n.fa-deviantart:before {\n  content: \"\\F1BD\";\n}\n.fa-soundcloud:before {\n  content: \"\\F1BE\";\n}\n.fa-database:before {\n  content: \"\\F1C0\";\n}\n.fa-file-pdf-o:before {\n  content: \"\\F1C1\";\n}\n.fa-file-word-o:before {\n  content: \"\\F1C2\";\n}\n.fa-file-excel-o:before {\n  content: \"\\F1C3\";\n}\n.fa-file-powerpoint-o:before {\n  content: \"\\F1C4\";\n}\n.fa-file-photo-o:before,\n.fa-file-picture-o:before,\n.fa-file-image-o:before {\n  content: \"\\F1C5\";\n}\n.fa-file-zip-o:before,\n.fa-file-archive-o:before {\n  content: \"\\F1C6\";\n}\n.fa-file-sound-o:before,\n.fa-file-audio-o:before {\n  content: \"\\F1C7\";\n}\n.fa-file-movie-o:before,\n.fa-file-video-o:before {\n  content: \"\\F1C8\";\n}\n.fa-file-code-o:before {\n  content: \"\\F1C9\";\n}\n.fa-vine:before {\n  content: \"\\F1CA\";\n}\n.fa-codepen:before {\n  content: \"\\F1CB\";\n}\n.fa-jsfiddle:before {\n  content: \"\\F1CC\";\n}\n.fa-life-bouy:before,\n.fa-life-buoy:before,\n.fa-life-saver:before,\n.fa-support:before,\n.fa-life-ring:before {\n  content: \"\\F1CD\";\n}\n.fa-circle-o-notch:before {\n  content: \"\\F1CE\";\n}\n.fa-ra:before,\n.fa-resistance:before,\n.fa-rebel:before {\n  content: \"\\F1D0\";\n}\n.fa-ge:before,\n.fa-empire:before {\n  content: \"\\F1D1\";\n}\n.fa-git-square:before {\n  content: \"\\F1D2\";\n}\n.fa-git:before {\n  content: \"\\F1D3\";\n}\n.fa-y-combinator-square:before,\n.fa-yc-square:before,\n.fa-hacker-news:before {\n  content: \"\\F1D4\";\n}\n.fa-tencent-weibo:before {\n  content: \"\\F1D5\";\n}\n.fa-qq:before {\n  content: \"\\F1D6\";\n}\n.fa-wechat:before,\n.fa-weixin:before {\n  content: \"\\F1D7\";\n}\n.fa-send:before,\n.fa-paper-plane:before {\n  content: \"\\F1D8\";\n}\n.fa-send-o:before,\n.fa-paper-plane-o:before {\n  content: \"\\F1D9\";\n}\n.fa-history:before {\n  content: \"\\F1DA\";\n}\n.fa-circle-thin:before {\n  content: \"\\F1DB\";\n}\n.fa-header:before {\n  content: \"\\F1DC\";\n}\n.fa-paragraph:before {\n  content: \"\\F1DD\";\n}\n.fa-sliders:before {\n  content: \"\\F1DE\";\n}\n.fa-share-alt:before {\n  content: \"\\F1E0\";\n}\n.fa-share-alt-square:before {\n  content: \"\\F1E1\";\n}\n.fa-bomb:before {\n  content: \"\\F1E2\";\n}\n.fa-soccer-ball-o:before,\n.fa-futbol-o:before {\n  content: \"\\F1E3\";\n}\n.fa-tty:before {\n  content: \"\\F1E4\";\n}\n.fa-binoculars:before {\n  content: \"\\F1E5\";\n}\n.fa-plug:before {\n  content: \"\\F1E6\";\n}\n.fa-slideshare:before {\n  content: \"\\F1E7\";\n}\n.fa-twitch:before {\n  content: \"\\F1E8\";\n}\n.fa-yelp:before {\n  content: \"\\F1E9\";\n}\n.fa-newspaper-o:before {\n  content: \"\\F1EA\";\n}\n.fa-wifi:before {\n  content: \"\\F1EB\";\n}\n.fa-calculator:before {\n  content: \"\\F1EC\";\n}\n.fa-paypal:before {\n  content: \"\\F1ED\";\n}\n.fa-google-wallet:before {\n  content: \"\\F1EE\";\n}\n.fa-cc-visa:before {\n  content: \"\\F1F0\";\n}\n.fa-cc-mastercard:before {\n  content: \"\\F1F1\";\n}\n.fa-cc-discover:before {\n  content: \"\\F1F2\";\n}\n.fa-cc-amex:before {\n  content: \"\\F1F3\";\n}\n.fa-cc-paypal:before {\n  content: \"\\F1F4\";\n}\n.fa-cc-stripe:before {\n  content: \"\\F1F5\";\n}\n.fa-bell-slash:before {\n  content: \"\\F1F6\";\n}\n.fa-bell-slash-o:before {\n  content: \"\\F1F7\";\n}\n.fa-trash:before {\n  content: \"\\F1F8\";\n}\n.fa-copyright:before {\n  content: \"\\F1F9\";\n}\n.fa-at:before {\n  content: \"\\F1FA\";\n}\n.fa-eyedropper:before {\n  content: \"\\F1FB\";\n}\n.fa-paint-brush:before {\n  content: \"\\F1FC\";\n}\n.fa-birthday-cake:before {\n  content: \"\\F1FD\";\n}\n.fa-area-chart:before {\n  content: \"\\F1FE\";\n}\n.fa-pie-chart:before {\n  content: \"\\F200\";\n}\n.fa-line-chart:before {\n  content: \"\\F201\";\n}\n.fa-lastfm:before {\n  content: \"\\F202\";\n}\n.fa-lastfm-square:before {\n  content: \"\\F203\";\n}\n.fa-toggle-off:before {\n  content: \"\\F204\";\n}\n.fa-toggle-on:before {\n  content: \"\\F205\";\n}\n.fa-bicycle:before {\n  content: \"\\F206\";\n}\n.fa-bus:before {\n  content: \"\\F207\";\n}\n.fa-ioxhost:before {\n  content: \"\\F208\";\n}\n.fa-angellist:before {\n  content: \"\\F209\";\n}\n.fa-cc:before {\n  content: \"\\F20A\";\n}\n.fa-shekel:before,\n.fa-sheqel:before,\n.fa-ils:before {\n  content: \"\\F20B\";\n}\n.fa-meanpath:before {\n  content: \"\\F20C\";\n}\n.fa-buysellads:before {\n  content: \"\\F20D\";\n}\n.fa-connectdevelop:before {\n  content: \"\\F20E\";\n}\n.fa-dashcube:before {\n  content: \"\\F210\";\n}\n.fa-forumbee:before {\n  content: \"\\F211\";\n}\n.fa-leanpub:before {\n  content: \"\\F212\";\n}\n.fa-sellsy:before {\n  content: \"\\F213\";\n}\n.fa-shirtsinbulk:before {\n  content: \"\\F214\";\n}\n.fa-simplybuilt:before {\n  content: \"\\F215\";\n}\n.fa-skyatlas:before {\n  content: \"\\F216\";\n}\n.fa-cart-plus:before {\n  content: \"\\F217\";\n}\n.fa-cart-arrow-down:before {\n  content: \"\\F218\";\n}\n.fa-diamond:before {\n  content: \"\\F219\";\n}\n.fa-ship:before {\n  content: \"\\F21A\";\n}\n.fa-user-secret:before {\n  content: \"\\F21B\";\n}\n.fa-motorcycle:before {\n  content: \"\\F21C\";\n}\n.fa-street-view:before {\n  content: \"\\F21D\";\n}\n.fa-heartbeat:before {\n  content: \"\\F21E\";\n}\n.fa-venus:before {\n  content: \"\\F221\";\n}\n.fa-mars:before {\n  content: \"\\F222\";\n}\n.fa-mercury:before {\n  content: \"\\F223\";\n}\n.fa-intersex:before,\n.fa-transgender:before {\n  content: \"\\F224\";\n}\n.fa-transgender-alt:before {\n  content: \"\\F225\";\n}\n.fa-venus-double:before {\n  content: \"\\F226\";\n}\n.fa-mars-double:before {\n  content: \"\\F227\";\n}\n.fa-venus-mars:before {\n  content: \"\\F228\";\n}\n.fa-mars-stroke:before {\n  content: \"\\F229\";\n}\n.fa-mars-stroke-v:before {\n  content: \"\\F22A\";\n}\n.fa-mars-stroke-h:before {\n  content: \"\\F22B\";\n}\n.fa-neuter:before {\n  content: \"\\F22C\";\n}\n.fa-genderless:before {\n  content: \"\\F22D\";\n}\n.fa-facebook-official:before {\n  content: \"\\F230\";\n}\n.fa-pinterest-p:before {\n  content: \"\\F231\";\n}\n.fa-whatsapp:before {\n  content: \"\\F232\";\n}\n.fa-server:before {\n  content: \"\\F233\";\n}\n.fa-user-plus:before {\n  content: \"\\F234\";\n}\n.fa-user-times:before {\n  content: \"\\F235\";\n}\n.fa-hotel:before,\n.fa-bed:before {\n  content: \"\\F236\";\n}\n.fa-viacoin:before {\n  content: \"\\F237\";\n}\n.fa-train:before {\n  content: \"\\F238\";\n}\n.fa-subway:before {\n  content: \"\\F239\";\n}\n.fa-medium:before {\n  content: \"\\F23A\";\n}\n.fa-yc:before,\n.fa-y-combinator:before {\n  content: \"\\F23B\";\n}\n.fa-optin-monster:before {\n  content: \"\\F23C\";\n}\n.fa-opencart:before {\n  content: \"\\F23D\";\n}\n.fa-expeditedssl:before {\n  content: \"\\F23E\";\n}\n.fa-battery-4:before,\n.fa-battery:before,\n.fa-battery-full:before {\n  content: \"\\F240\";\n}\n.fa-battery-3:before,\n.fa-battery-three-quarters:before {\n  content: \"\\F241\";\n}\n.fa-battery-2:before,\n.fa-battery-half:before {\n  content: \"\\F242\";\n}\n.fa-battery-1:before,\n.fa-battery-quarter:before {\n  content: \"\\F243\";\n}\n.fa-battery-0:before,\n.fa-battery-empty:before {\n  content: \"\\F244\";\n}\n.fa-mouse-pointer:before {\n  content: \"\\F245\";\n}\n.fa-i-cursor:before {\n  content: \"\\F246\";\n}\n.fa-object-group:before {\n  content: \"\\F247\";\n}\n.fa-object-ungroup:before {\n  content: \"\\F248\";\n}\n.fa-sticky-note:before {\n  content: \"\\F249\";\n}\n.fa-sticky-note-o:before {\n  content: \"\\F24A\";\n}\n.fa-cc-jcb:before {\n  content: \"\\F24B\";\n}\n.fa-cc-diners-club:before {\n  content: \"\\F24C\";\n}\n.fa-clone:before {\n  content: \"\\F24D\";\n}\n.fa-balance-scale:before {\n  content: \"\\F24E\";\n}\n.fa-hourglass-o:before {\n  content: \"\\F250\";\n}\n.fa-hourglass-1:before,\n.fa-hourglass-start:before {\n  content: \"\\F251\";\n}\n.fa-hourglass-2:before,\n.fa-hourglass-half:before {\n  content: \"\\F252\";\n}\n.fa-hourglass-3:before,\n.fa-hourglass-end:before {\n  content: \"\\F253\";\n}\n.fa-hourglass:before {\n  content: \"\\F254\";\n}\n.fa-hand-grab-o:before,\n.fa-hand-rock-o:before {\n  content: \"\\F255\";\n}\n.fa-hand-stop-o:before,\n.fa-hand-paper-o:before {\n  content: \"\\F256\";\n}\n.fa-hand-scissors-o:before {\n  content: \"\\F257\";\n}\n.fa-hand-lizard-o:before {\n  content: \"\\F258\";\n}\n.fa-hand-spock-o:before {\n  content: \"\\F259\";\n}\n.fa-hand-pointer-o:before {\n  content: \"\\F25A\";\n}\n.fa-hand-peace-o:before {\n  content: \"\\F25B\";\n}\n.fa-trademark:before {\n  content: \"\\F25C\";\n}\n.fa-registered:before {\n  content: \"\\F25D\";\n}\n.fa-creative-commons:before {\n  content: \"\\F25E\";\n}\n.fa-gg:before {\n  content: \"\\F260\";\n}\n.fa-gg-circle:before {\n  content: \"\\F261\";\n}\n.fa-tripadvisor:before {\n  content: \"\\F262\";\n}\n.fa-odnoklassniki:before {\n  content: \"\\F263\";\n}\n.fa-odnoklassniki-square:before {\n  content: \"\\F264\";\n}\n.fa-get-pocket:before {\n  content: \"\\F265\";\n}\n.fa-wikipedia-w:before {\n  content: \"\\F266\";\n}\n.fa-safari:before {\n  content: \"\\F267\";\n}\n.fa-chrome:before {\n  content: \"\\F268\";\n}\n.fa-firefox:before {\n  content: \"\\F269\";\n}\n.fa-opera:before {\n  content: \"\\F26A\";\n}\n.fa-internet-explorer:before {\n  content: \"\\F26B\";\n}\n.fa-tv:before,\n.fa-television:before {\n  content: \"\\F26C\";\n}\n.fa-contao:before {\n  content: \"\\F26D\";\n}\n.fa-500px:before {\n  content: \"\\F26E\";\n}\n.fa-amazon:before {\n  content: \"\\F270\";\n}\n.fa-calendar-plus-o:before {\n  content: \"\\F271\";\n}\n.fa-calendar-minus-o:before {\n  content: \"\\F272\";\n}\n.fa-calendar-times-o:before {\n  content: \"\\F273\";\n}\n.fa-calendar-check-o:before {\n  content: \"\\F274\";\n}\n.fa-industry:before {\n  content: \"\\F275\";\n}\n.fa-map-pin:before {\n  content: \"\\F276\";\n}\n.fa-map-signs:before {\n  content: \"\\F277\";\n}\n.fa-map-o:before {\n  content: \"\\F278\";\n}\n.fa-map:before {\n  content: \"\\F279\";\n}\n.fa-commenting:before {\n  content: \"\\F27A\";\n}\n.fa-commenting-o:before {\n  content: \"\\F27B\";\n}\n.fa-houzz:before {\n  content: \"\\F27C\";\n}\n.fa-vimeo:before {\n  content: \"\\F27D\";\n}\n.fa-black-tie:before {\n  content: \"\\F27E\";\n}\n.fa-fonticons:before {\n  content: \"\\F280\";\n}\n.fa-reddit-alien:before {\n  content: \"\\F281\";\n}\n.fa-edge:before {\n  content: \"\\F282\";\n}\n.fa-credit-card-alt:before {\n  content: \"\\F283\";\n}\n.fa-codiepie:before {\n  content: \"\\F284\";\n}\n.fa-modx:before {\n  content: \"\\F285\";\n}\n.fa-fort-awesome:before {\n  content: \"\\F286\";\n}\n.fa-usb:before {\n  content: \"\\F287\";\n}\n.fa-product-hunt:before {\n  content: \"\\F288\";\n}\n.fa-mixcloud:before {\n  content: \"\\F289\";\n}\n.fa-scribd:before {\n  content: \"\\F28A\";\n}\n.fa-pause-circle:before {\n  content: \"\\F28B\";\n}\n.fa-pause-circle-o:before {\n  content: \"\\F28C\";\n}\n.fa-stop-circle:before {\n  content: \"\\F28D\";\n}\n.fa-stop-circle-o:before {\n  content: \"\\F28E\";\n}\n.fa-shopping-bag:before {\n  content: \"\\F290\";\n}\n.fa-shopping-basket:before {\n  content: \"\\F291\";\n}\n.fa-hashtag:before {\n  content: \"\\F292\";\n}\n.fa-bluetooth:before {\n  content: \"\\F293\";\n}\n.fa-bluetooth-b:before {\n  content: \"\\F294\";\n}\n.fa-percent:before {\n  content: \"\\F295\";\n}\n.fa-gitlab:before {\n  content: \"\\F296\";\n}\n.fa-wpbeginner:before {\n  content: \"\\F297\";\n}\n.fa-wpforms:before {\n  content: \"\\F298\";\n}\n.fa-envira:before {\n  content: \"\\F299\";\n}\n.fa-universal-access:before {\n  content: \"\\F29A\";\n}\n.fa-wheelchair-alt:before {\n  content: \"\\F29B\";\n}\n.fa-question-circle-o:before {\n  content: \"\\F29C\";\n}\n.fa-blind:before {\n  content: \"\\F29D\";\n}\n.fa-audio-description:before {\n  content: \"\\F29E\";\n}\n.fa-volume-control-phone:before {\n  content: \"\\F2A0\";\n}\n.fa-braille:before {\n  content: \"\\F2A1\";\n}\n.fa-assistive-listening-systems:before {\n  content: \"\\F2A2\";\n}\n.fa-asl-interpreting:before,\n.fa-american-sign-language-interpreting:before {\n  content: \"\\F2A3\";\n}\n.fa-deafness:before,\n.fa-hard-of-hearing:before,\n.fa-deaf:before {\n  content: \"\\F2A4\";\n}\n.fa-glide:before {\n  content: \"\\F2A5\";\n}\n.fa-glide-g:before {\n  content: \"\\F2A6\";\n}\n.fa-signing:before,\n.fa-sign-language:before {\n  content: \"\\F2A7\";\n}\n.fa-low-vision:before {\n  content: \"\\F2A8\";\n}\n.fa-viadeo:before {\n  content: \"\\F2A9\";\n}\n.fa-viadeo-square:before {\n  content: \"\\F2AA\";\n}\n.fa-snapchat:before {\n  content: \"\\F2AB\";\n}\n.fa-snapchat-ghost:before {\n  content: \"\\F2AC\";\n}\n.fa-snapchat-square:before {\n  content: \"\\F2AD\";\n}\n.fa-pied-piper:before {\n  content: \"\\F2AE\";\n}\n.fa-first-order:before {\n  content: \"\\F2B0\";\n}\n.fa-yoast:before {\n  content: \"\\F2B1\";\n}\n.fa-themeisle:before {\n  content: \"\\F2B2\";\n}\n.fa-google-plus-circle:before,\n.fa-google-plus-official:before {\n  content: \"\\F2B3\";\n}\n.fa-fa:before,\n.fa-font-awesome:before {\n  content: \"\\F2B4\";\n}\n.fa-handshake-o:before {\n  content: \"\\F2B5\";\n}\n.fa-envelope-open:before {\n  content: \"\\F2B6\";\n}\n.fa-envelope-open-o:before {\n  content: \"\\F2B7\";\n}\n.fa-linode:before {\n  content: \"\\F2B8\";\n}\n.fa-address-book:before {\n  content: \"\\F2B9\";\n}\n.fa-address-book-o:before {\n  content: \"\\F2BA\";\n}\n.fa-vcard:before,\n.fa-address-card:before {\n  content: \"\\F2BB\";\n}\n.fa-vcard-o:before,\n.fa-address-card-o:before {\n  content: \"\\F2BC\";\n}\n.fa-user-circle:before {\n  content: \"\\F2BD\";\n}\n.fa-user-circle-o:before {\n  content: \"\\F2BE\";\n}\n.fa-user-o:before {\n  content: \"\\F2C0\";\n}\n.fa-id-badge:before {\n  content: \"\\F2C1\";\n}\n.fa-drivers-license:before,\n.fa-id-card:before {\n  content: \"\\F2C2\";\n}\n.fa-drivers-license-o:before,\n.fa-id-card-o:before {\n  content: \"\\F2C3\";\n}\n.fa-quora:before {\n  content: \"\\F2C4\";\n}\n.fa-free-code-camp:before {\n  content: \"\\F2C5\";\n}\n.fa-telegram:before {\n  content: \"\\F2C6\";\n}\n.fa-thermometer-4:before,\n.fa-thermometer:before,\n.fa-thermometer-full:before {\n  content: \"\\F2C7\";\n}\n.fa-thermometer-3:before,\n.fa-thermometer-three-quarters:before {\n  content: \"\\F2C8\";\n}\n.fa-thermometer-2:before,\n.fa-thermometer-half:before {\n  content: \"\\F2C9\";\n}\n.fa-thermometer-1:before,\n.fa-thermometer-quarter:before {\n  content: \"\\F2CA\";\n}\n.fa-thermometer-0:before,\n.fa-thermometer-empty:before {\n  content: \"\\F2CB\";\n}\n.fa-shower:before {\n  content: \"\\F2CC\";\n}\n.fa-bathtub:before,\n.fa-s15:before,\n.fa-bath:before {\n  content: \"\\F2CD\";\n}\n.fa-podcast:before {\n  content: \"\\F2CE\";\n}\n.fa-window-maximize:before {\n  content: \"\\F2D0\";\n}\n.fa-window-minimize:before {\n  content: \"\\F2D1\";\n}\n.fa-window-restore:before {\n  content: \"\\F2D2\";\n}\n.fa-times-rectangle:before,\n.fa-window-close:before {\n  content: \"\\F2D3\";\n}\n.fa-times-rectangle-o:before,\n.fa-window-close-o:before {\n  content: \"\\F2D4\";\n}\n.fa-bandcamp:before {\n  content: \"\\F2D5\";\n}\n.fa-grav:before {\n  content: \"\\F2D6\";\n}\n.fa-etsy:before {\n  content: \"\\F2D7\";\n}\n.fa-imdb:before {\n  content: \"\\F2D8\";\n}\n.fa-ravelry:before {\n  content: \"\\F2D9\";\n}\n.fa-eercast:before {\n  content: \"\\F2DA\";\n}\n.fa-microchip:before {\n  content: \"\\F2DB\";\n}\n.fa-snowflake-o:before {\n  content: \"\\F2DC\";\n}\n.fa-superpowers:before {\n  content: \"\\F2DD\";\n}\n.fa-wpexplorer:before {\n  content: \"\\F2DE\";\n}\n.fa-meetup:before {\n  content: \"\\F2E0\";\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n.sr-only-focusable:active,\n.sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n}\n", ""]);

// exports

    const application = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
    __webpack_require__("../node_modules/tns-core-modules/ui/styling/style-scope.js");

    exports.forEach(cssExport => {
        if (cssExport.length > 1 && cssExport[1]) {
            // applying the second item of the export as it contains the css contents
            application.addCss(cssExport[1]);
        }
    });
    ;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './fonts/font-awesome.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./fonts/ionicons.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.ion-alert:before { content: \"\\F101\"; }\n\n.ion-alert-circled:before { content: \"\\F100\"; }\n\n.ion-android-add:before { content: \"\\F2C7\"; }\n\n.ion-android-add-circle:before { content: \"\\F359\"; }\n\n.ion-android-alarm-clock:before { content: \"\\F35A\"; }\n\n.ion-android-alert:before { content: \"\\F35B\"; }\n\n.ion-android-apps:before { content: \"\\F35C\"; }\n\n.ion-android-archive:before { content: \"\\F2C9\"; }\n\n.ion-android-arrow-back:before { content: \"\\F2CA\"; }\n\n.ion-android-arrow-down:before { content: \"\\F35D\"; }\n\n.ion-android-arrow-dropdown:before { content: \"\\F35F\"; }\n\n.ion-android-arrow-dropdown-circle:before { content: \"\\F35E\"; }\n\n.ion-android-arrow-dropleft:before { content: \"\\F361\"; }\n\n.ion-android-arrow-dropleft-circle:before { content: \"\\F360\"; }\n\n.ion-android-arrow-dropright:before { content: \"\\F363\"; }\n\n.ion-android-arrow-dropright-circle:before { content: \"\\F362\"; }\n\n.ion-android-arrow-dropup:before { content: \"\\F365\"; }\n\n.ion-android-arrow-dropup-circle:before { content: \"\\F364\"; }\n\n.ion-android-arrow-forward:before { content: \"\\F30F\"; }\n\n.ion-android-arrow-up:before { content: \"\\F366\"; }\n\n.ion-android-attach:before { content: \"\\F367\"; }\n\n.ion-android-bar:before { content: \"\\F368\"; }\n\n.ion-android-bicycle:before { content: \"\\F369\"; }\n\n.ion-android-boat:before { content: \"\\F36A\"; }\n\n.ion-android-bookmark:before { content: \"\\F36B\"; }\n\n.ion-android-bulb:before { content: \"\\F36C\"; }\n\n.ion-android-bus:before { content: \"\\F36D\"; }\n\n.ion-android-calendar:before { content: \"\\F2D1\"; }\n\n.ion-android-call:before { content: \"\\F2D2\"; }\n\n.ion-android-camera:before { content: \"\\F2D3\"; }\n\n.ion-android-cancel:before { content: \"\\F36E\"; }\n\n.ion-android-car:before { content: \"\\F36F\"; }\n\n.ion-android-cart:before { content: \"\\F370\"; }\n\n.ion-android-chat:before { content: \"\\F2D4\"; }\n\n.ion-android-checkbox:before { content: \"\\F374\"; }\n\n.ion-android-checkbox-blank:before { content: \"\\F371\"; }\n\n.ion-android-checkbox-outline:before { content: \"\\F373\"; }\n\n.ion-android-checkbox-outline-blank:before { content: \"\\F372\"; }\n\n.ion-android-checkmark-circle:before { content: \"\\F375\"; }\n\n.ion-android-clipboard:before { content: \"\\F376\"; }\n\n.ion-android-close:before { content: \"\\F2D7\"; }\n\n.ion-android-cloud:before { content: \"\\F37A\"; }\n\n.ion-android-cloud-circle:before { content: \"\\F377\"; }\n\n.ion-android-cloud-done:before { content: \"\\F378\"; }\n\n.ion-android-cloud-outline:before { content: \"\\F379\"; }\n\n.ion-android-color-palette:before { content: \"\\F37B\"; }\n\n.ion-android-compass:before { content: \"\\F37C\"; }\n\n.ion-android-contact:before { content: \"\\F2D8\"; }\n\n.ion-android-contacts:before { content: \"\\F2D9\"; }\n\n.ion-android-contract:before { content: \"\\F37D\"; }\n\n.ion-android-create:before { content: \"\\F37E\"; }\n\n.ion-android-delete:before { content: \"\\F37F\"; }\n\n.ion-android-desktop:before { content: \"\\F380\"; }\n\n.ion-android-document:before { content: \"\\F381\"; }\n\n.ion-android-done:before { content: \"\\F383\"; }\n\n.ion-android-done-all:before { content: \"\\F382\"; }\n\n.ion-android-download:before { content: \"\\F2DD\"; }\n\n.ion-android-drafts:before { content: \"\\F384\"; }\n\n.ion-android-exit:before { content: \"\\F385\"; }\n\n.ion-android-expand:before { content: \"\\F386\"; }\n\n.ion-android-favorite:before { content: \"\\F388\"; }\n\n.ion-android-favorite-outline:before { content: \"\\F387\"; }\n\n.ion-android-film:before { content: \"\\F389\"; }\n\n.ion-android-folder:before { content: \"\\F2E0\"; }\n\n.ion-android-folder-open:before { content: \"\\F38A\"; }\n\n.ion-android-funnel:before { content: \"\\F38B\"; }\n\n.ion-android-globe:before { content: \"\\F38C\"; }\n\n.ion-android-hand:before { content: \"\\F2E3\"; }\n\n.ion-android-hangout:before { content: \"\\F38D\"; }\n\n.ion-android-happy:before { content: \"\\F38E\"; }\n\n.ion-android-home:before { content: \"\\F38F\"; }\n\n.ion-android-image:before { content: \"\\F2E4\"; }\n\n.ion-android-laptop:before { content: \"\\F390\"; }\n\n.ion-android-list:before { content: \"\\F391\"; }\n\n.ion-android-locate:before { content: \"\\F2E9\"; }\n\n.ion-android-lock:before { content: \"\\F392\"; }\n\n.ion-android-mail:before { content: \"\\F2EB\"; }\n\n.ion-android-map:before { content: \"\\F393\"; }\n\n.ion-android-menu:before { content: \"\\F394\"; }\n\n.ion-android-microphone:before { content: \"\\F2EC\"; }\n\n.ion-android-microphone-off:before { content: \"\\F395\"; }\n\n.ion-android-more-horizontal:before { content: \"\\F396\"; }\n\n.ion-android-more-vertical:before { content: \"\\F397\"; }\n\n.ion-android-navigate:before { content: \"\\F398\"; }\n\n.ion-android-notifications:before { content: \"\\F39B\"; }\n\n.ion-android-notifications-none:before { content: \"\\F399\"; }\n\n.ion-android-notifications-off:before { content: \"\\F39A\"; }\n\n.ion-android-open:before { content: \"\\F39C\"; }\n\n.ion-android-options:before { content: \"\\F39D\"; }\n\n.ion-android-people:before { content: \"\\F39E\"; }\n\n.ion-android-person:before { content: \"\\F3A0\"; }\n\n.ion-android-person-add:before { content: \"\\F39F\"; }\n\n.ion-android-phone-landscape:before { content: \"\\F3A1\"; }\n\n.ion-android-phone-portrait:before { content: \"\\F3A2\"; }\n\n.ion-android-pin:before { content: \"\\F3A3\"; }\n\n.ion-android-plane:before { content: \"\\F3A4\"; }\n\n.ion-android-playstore:before { content: \"\\F2F0\"; }\n\n.ion-android-print:before { content: \"\\F3A5\"; }\n\n.ion-android-radio-button-off:before { content: \"\\F3A6\"; }\n\n.ion-android-radio-button-on:before { content: \"\\F3A7\"; }\n\n.ion-android-refresh:before { content: \"\\F3A8\"; }\n\n.ion-android-remove:before { content: \"\\F2F4\"; }\n\n.ion-android-remove-circle:before { content: \"\\F3A9\"; }\n\n.ion-android-restaurant:before { content: \"\\F3AA\"; }\n\n.ion-android-sad:before { content: \"\\F3AB\"; }\n\n.ion-android-search:before { content: \"\\F2F5\"; }\n\n.ion-android-send:before { content: \"\\F2F6\"; }\n\n.ion-android-settings:before { content: \"\\F2F7\"; }\n\n.ion-android-share:before { content: \"\\F2F8\"; }\n\n.ion-android-share-alt:before { content: \"\\F3AC\"; }\n\n.ion-android-star:before { content: \"\\F2FC\"; }\n\n.ion-android-star-half:before { content: \"\\F3AD\"; }\n\n.ion-android-star-outline:before { content: \"\\F3AE\"; }\n\n.ion-android-stopwatch:before { content: \"\\F2FD\"; }\n\n.ion-android-subway:before { content: \"\\F3AF\"; }\n\n.ion-android-sunny:before { content: \"\\F3B0\"; }\n\n.ion-android-sync:before { content: \"\\F3B1\"; }\n\n.ion-android-textsms:before { content: \"\\F3B2\"; }\n\n.ion-android-time:before { content: \"\\F3B3\"; }\n\n.ion-android-train:before { content: \"\\F3B4\"; }\n\n.ion-android-unlock:before { content: \"\\F3B5\"; }\n\n.ion-android-upload:before { content: \"\\F3B6\"; }\n\n.ion-android-volume-down:before { content: \"\\F3B7\"; }\n\n.ion-android-volume-mute:before { content: \"\\F3B8\"; }\n\n.ion-android-volume-off:before { content: \"\\F3B9\"; }\n\n.ion-android-volume-up:before { content: \"\\F3BA\"; }\n\n.ion-android-walk:before { content: \"\\F3BB\"; }\n\n.ion-android-warning:before { content: \"\\F3BC\"; }\n\n.ion-android-watch:before { content: \"\\F3BD\"; }\n\n.ion-android-wifi:before { content: \"\\F305\"; }\n\n.ion-aperture:before { content: \"\\F313\"; }\n\n.ion-archive:before { content: \"\\F102\"; }\n\n.ion-arrow-down-a:before { content: \"\\F103\"; }\n\n.ion-arrow-down-b:before { content: \"\\F104\"; }\n\n.ion-arrow-down-c:before { content: \"\\F105\"; }\n\n.ion-arrow-expand:before { content: \"\\F25E\"; }\n\n.ion-arrow-graph-down-left:before { content: \"\\F25F\"; }\n\n.ion-arrow-graph-down-right:before { content: \"\\F260\"; }\n\n.ion-arrow-graph-up-left:before { content: \"\\F261\"; }\n\n.ion-arrow-graph-up-right:before { content: \"\\F262\"; }\n\n.ion-arrow-left-a:before { content: \"\\F106\"; }\n\n.ion-arrow-left-b:before { content: \"\\F107\"; }\n\n.ion-arrow-left-c:before { content: \"\\F108\"; }\n\n.ion-arrow-move:before { content: \"\\F263\"; }\n\n.ion-arrow-resize:before { content: \"\\F264\"; }\n\n.ion-arrow-return-left:before { content: \"\\F265\"; }\n\n.ion-arrow-return-right:before { content: \"\\F266\"; }\n\n.ion-arrow-right-a:before { content: \"\\F109\"; }\n\n.ion-arrow-right-b:before { content: \"\\F10A\"; }\n\n.ion-arrow-right-c:before { content: \"\\F10B\"; }\n\n.ion-arrow-shrink:before { content: \"\\F267\"; }\n\n.ion-arrow-swap:before { content: \"\\F268\"; }\n\n.ion-arrow-up-a:before { content: \"\\F10C\"; }\n\n.ion-arrow-up-b:before { content: \"\\F10D\"; }\n\n.ion-arrow-up-c:before { content: \"\\F10E\"; }\n\n.ion-asterisk:before { content: \"\\F314\"; }\n\n.ion-at:before { content: \"\\F10F\"; }\n\n.ion-backspace:before { content: \"\\F3BF\"; }\n\n.ion-backspace-outline:before { content: \"\\F3BE\"; }\n\n.ion-bag:before { content: \"\\F110\"; }\n\n.ion-battery-charging:before { content: \"\\F111\"; }\n\n.ion-battery-empty:before { content: \"\\F112\"; }\n\n.ion-battery-full:before { content: \"\\F113\"; }\n\n.ion-battery-half:before { content: \"\\F114\"; }\n\n.ion-battery-low:before { content: \"\\F115\"; }\n\n.ion-beaker:before { content: \"\\F269\"; }\n\n.ion-beer:before { content: \"\\F26A\"; }\n\n.ion-bluetooth:before { content: \"\\F116\"; }\n\n.ion-bonfire:before { content: \"\\F315\"; }\n\n.ion-bookmark:before { content: \"\\F26B\"; }\n\n.ion-bowtie:before { content: \"\\F3C0\"; }\n\n.ion-briefcase:before { content: \"\\F26C\"; }\n\n.ion-bug:before { content: \"\\F2BE\"; }\n\n.ion-calculator:before { content: \"\\F26D\"; }\n\n.ion-calendar:before { content: \"\\F117\"; }\n\n.ion-camera:before { content: \"\\F118\"; }\n\n.ion-card:before { content: \"\\F119\"; }\n\n.ion-cash:before { content: \"\\F316\"; }\n\n.ion-chatbox:before { content: \"\\F11B\"; }\n\n.ion-chatbox-working:before { content: \"\\F11A\"; }\n\n.ion-chatboxes:before { content: \"\\F11C\"; }\n\n.ion-chatbubble:before { content: \"\\F11E\"; }\n\n.ion-chatbubble-working:before { content: \"\\F11D\"; }\n\n.ion-chatbubbles:before { content: \"\\F11F\"; }\n\n.ion-checkmark:before { content: \"\\F122\"; }\n\n.ion-checkmark-circled:before { content: \"\\F120\"; }\n\n.ion-checkmark-round:before { content: \"\\F121\"; }\n\n.ion-chevron-down:before { content: \"\\F123\"; }\n\n.ion-chevron-left:before { content: \"\\F124\"; }\n\n.ion-chevron-right:before { content: \"\\F125\"; }\n\n.ion-chevron-up:before { content: \"\\F126\"; }\n\n.ion-clipboard:before { content: \"\\F127\"; }\n\n.ion-clock:before { content: \"\\F26E\"; }\n\n.ion-close:before { content: \"\\F12A\"; }\n\n.ion-close-circled:before { content: \"\\F128\"; }\n\n.ion-close-round:before { content: \"\\F129\"; }\n\n.ion-closed-captioning:before { content: \"\\F317\"; }\n\n.ion-cloud:before { content: \"\\F12B\"; }\n\n.ion-code:before { content: \"\\F271\"; }\n\n.ion-code-download:before { content: \"\\F26F\"; }\n\n.ion-code-working:before { content: \"\\F270\"; }\n\n.ion-coffee:before { content: \"\\F272\"; }\n\n.ion-compass:before { content: \"\\F273\"; }\n\n.ion-compose:before { content: \"\\F12C\"; }\n\n.ion-connection-bars:before { content: \"\\F274\"; }\n\n.ion-contrast:before { content: \"\\F275\"; }\n\n.ion-crop:before { content: \"\\F3C1\"; }\n\n.ion-cube:before { content: \"\\F318\"; }\n\n.ion-disc:before { content: \"\\F12D\"; }\n\n.ion-document:before { content: \"\\F12F\"; }\n\n.ion-document-text:before { content: \"\\F12E\"; }\n\n.ion-drag:before { content: \"\\F130\"; }\n\n.ion-earth:before { content: \"\\F276\"; }\n\n.ion-easel:before { content: \"\\F3C2\"; }\n\n.ion-edit:before { content: \"\\F2BF\"; }\n\n.ion-egg:before { content: \"\\F277\"; }\n\n.ion-eject:before { content: \"\\F131\"; }\n\n.ion-email:before { content: \"\\F132\"; }\n\n.ion-email-unread:before { content: \"\\F3C3\"; }\n\n.ion-erlenmeyer-flask:before { content: \"\\F3C5\"; }\n\n.ion-erlenmeyer-flask-bubbles:before { content: \"\\F3C4\"; }\n\n.ion-eye:before { content: \"\\F133\"; }\n\n.ion-eye-disabled:before { content: \"\\F306\"; }\n\n.ion-female:before { content: \"\\F278\"; }\n\n.ion-filing:before { content: \"\\F134\"; }\n\n.ion-film-marker:before { content: \"\\F135\"; }\n\n.ion-fireball:before { content: \"\\F319\"; }\n\n.ion-flag:before { content: \"\\F279\"; }\n\n.ion-flame:before { content: \"\\F31A\"; }\n\n.ion-flash:before { content: \"\\F137\"; }\n\n.ion-flash-off:before { content: \"\\F136\"; }\n\n.ion-folder:before { content: \"\\F139\"; }\n\n.ion-fork:before { content: \"\\F27A\"; }\n\n.ion-fork-repo:before { content: \"\\F2C0\"; }\n\n.ion-forward:before { content: \"\\F13A\"; }\n\n.ion-funnel:before { content: \"\\F31B\"; }\n\n.ion-gear-a:before { content: \"\\F13D\"; }\n\n.ion-gear-b:before { content: \"\\F13E\"; }\n\n.ion-grid:before { content: \"\\F13F\"; }\n\n.ion-hammer:before { content: \"\\F27B\"; }\n\n.ion-happy:before { content: \"\\F31C\"; }\n\n.ion-happy-outline:before { content: \"\\F3C6\"; }\n\n.ion-headphone:before { content: \"\\F140\"; }\n\n.ion-heart:before { content: \"\\F141\"; }\n\n.ion-heart-broken:before { content: \"\\F31D\"; }\n\n.ion-help:before { content: \"\\F143\"; }\n\n.ion-help-buoy:before { content: \"\\F27C\"; }\n\n.ion-help-circled:before { content: \"\\F142\"; }\n\n.ion-home:before { content: \"\\F144\"; }\n\n.ion-icecream:before { content: \"\\F27D\"; }\n\n.ion-image:before { content: \"\\F147\"; }\n\n.ion-images:before { content: \"\\F148\"; }\n\n.ion-information:before { content: \"\\F14A\"; }\n\n.ion-information-circled:before { content: \"\\F149\"; }\n\n.ion-ionic:before { content: \"\\F14B\"; }\n\n.ion-ios-alarm:before { content: \"\\F3C8\"; }\n\n.ion-ios-alarm-outline:before { content: \"\\F3C7\"; }\n\n.ion-ios-albums:before { content: \"\\F3CA\"; }\n\n.ion-ios-albums-outline:before { content: \"\\F3C9\"; }\n\n.ion-ios-americanfootball:before { content: \"\\F3CC\"; }\n\n.ion-ios-americanfootball-outline:before { content: \"\\F3CB\"; }\n\n.ion-ios-analytics:before { content: \"\\F3CE\"; }\n\n.ion-ios-analytics-outline:before { content: \"\\F3CD\"; }\n\n.ion-ios-arrow-back:before { content: \"\\F3CF\"; }\n\n.ion-ios-arrow-down:before { content: \"\\F3D0\"; }\n\n.ion-ios-arrow-forward:before { content: \"\\F3D1\"; }\n\n.ion-ios-arrow-left:before { content: \"\\F3D2\"; }\n\n.ion-ios-arrow-right:before { content: \"\\F3D3\"; }\n\n.ion-ios-arrow-thin-down:before { content: \"\\F3D4\"; }\n\n.ion-ios-arrow-thin-left:before { content: \"\\F3D5\"; }\n\n.ion-ios-arrow-thin-right:before { content: \"\\F3D6\"; }\n\n.ion-ios-arrow-thin-up:before { content: \"\\F3D7\"; }\n\n.ion-ios-arrow-up:before { content: \"\\F3D8\"; }\n\n.ion-ios-at:before { content: \"\\F3DA\"; }\n\n.ion-ios-at-outline:before { content: \"\\F3D9\"; }\n\n.ion-ios-barcode:before { content: \"\\F3DC\"; }\n\n.ion-ios-barcode-outline:before { content: \"\\F3DB\"; }\n\n.ion-ios-baseball:before { content: \"\\F3DE\"; }\n\n.ion-ios-baseball-outline:before { content: \"\\F3DD\"; }\n\n.ion-ios-basketball:before { content: \"\\F3E0\"; }\n\n.ion-ios-basketball-outline:before { content: \"\\F3DF\"; }\n\n.ion-ios-bell:before { content: \"\\F3E2\"; }\n\n.ion-ios-bell-outline:before { content: \"\\F3E1\"; }\n\n.ion-ios-body:before { content: \"\\F3E4\"; }\n\n.ion-ios-body-outline:before { content: \"\\F3E3\"; }\n\n.ion-ios-bolt:before { content: \"\\F3E6\"; }\n\n.ion-ios-bolt-outline:before { content: \"\\F3E5\"; }\n\n.ion-ios-book:before { content: \"\\F3E8\"; }\n\n.ion-ios-book-outline:before { content: \"\\F3E7\"; }\n\n.ion-ios-bookmarks:before { content: \"\\F3EA\"; }\n\n.ion-ios-bookmarks-outline:before { content: \"\\F3E9\"; }\n\n.ion-ios-box:before { content: \"\\F3EC\"; }\n\n.ion-ios-box-outline:before { content: \"\\F3EB\"; }\n\n.ion-ios-briefcase:before { content: \"\\F3EE\"; }\n\n.ion-ios-briefcase-outline:before { content: \"\\F3ED\"; }\n\n.ion-ios-browsers:before { content: \"\\F3F0\"; }\n\n.ion-ios-browsers-outline:before { content: \"\\F3EF\"; }\n\n.ion-ios-calculator:before { content: \"\\F3F2\"; }\n\n.ion-ios-calculator-outline:before { content: \"\\F3F1\"; }\n\n.ion-ios-calendar:before { content: \"\\F3F4\"; }\n\n.ion-ios-calendar-outline:before { content: \"\\F3F3\"; }\n\n.ion-ios-camera:before { content: \"\\F3F6\"; }\n\n.ion-ios-camera-outline:before { content: \"\\F3F5\"; }\n\n.ion-ios-cart:before { content: \"\\F3F8\"; }\n\n.ion-ios-cart-outline:before { content: \"\\F3F7\"; }\n\n.ion-ios-chatboxes:before { content: \"\\F3FA\"; }\n\n.ion-ios-chatboxes-outline:before { content: \"\\F3F9\"; }\n\n.ion-ios-chatbubble:before { content: \"\\F3FC\"; }\n\n.ion-ios-chatbubble-outline:before { content: \"\\F3FB\"; }\n\n.ion-ios-checkmark:before { content: \"\\F3FF\"; }\n\n.ion-ios-checkmark-empty:before { content: \"\\F3FD\"; }\n\n.ion-ios-checkmark-outline:before { content: \"\\F3FE\"; }\n\n.ion-ios-circle-filled:before { content: \"\\F400\"; }\n\n.ion-ios-circle-outline:before { content: \"\\F401\"; }\n\n.ion-ios-clock:before { content: \"\\F403\"; }\n\n.ion-ios-clock-outline:before { content: \"\\F402\"; }\n\n.ion-ios-close:before { content: \"\\F406\"; }\n\n.ion-ios-close-empty:before { content: \"\\F404\"; }\n\n.ion-ios-close-outline:before { content: \"\\F405\"; }\n\n.ion-ios-cloud:before { content: \"\\F40C\"; }\n\n.ion-ios-cloud-download:before { content: \"\\F408\"; }\n\n.ion-ios-cloud-download-outline:before { content: \"\\F407\"; }\n\n.ion-ios-cloud-outline:before { content: \"\\F409\"; }\n\n.ion-ios-cloud-upload:before { content: \"\\F40B\"; }\n\n.ion-ios-cloud-upload-outline:before { content: \"\\F40A\"; }\n\n.ion-ios-cloudy:before { content: \"\\F410\"; }\n\n.ion-ios-cloudy-night:before { content: \"\\F40E\"; }\n\n.ion-ios-cloudy-night-outline:before { content: \"\\F40D\"; }\n\n.ion-ios-cloudy-outline:before { content: \"\\F40F\"; }\n\n.ion-ios-cog:before { content: \"\\F412\"; }\n\n.ion-ios-cog-outline:before { content: \"\\F411\"; }\n\n.ion-ios-color-filter:before { content: \"\\F414\"; }\n\n.ion-ios-color-filter-outline:before { content: \"\\F413\"; }\n\n.ion-ios-color-wand:before { content: \"\\F416\"; }\n\n.ion-ios-color-wand-outline:before { content: \"\\F415\"; }\n\n.ion-ios-compose:before { content: \"\\F418\"; }\n\n.ion-ios-compose-outline:before { content: \"\\F417\"; }\n\n.ion-ios-contact:before { content: \"\\F41A\"; }\n\n.ion-ios-contact-outline:before { content: \"\\F419\"; }\n\n.ion-ios-copy:before { content: \"\\F41C\"; }\n\n.ion-ios-copy-outline:before { content: \"\\F41B\"; }\n\n.ion-ios-crop:before { content: \"\\F41E\"; }\n\n.ion-ios-crop-strong:before { content: \"\\F41D\"; }\n\n.ion-ios-download:before { content: \"\\F420\"; }\n\n.ion-ios-download-outline:before { content: \"\\F41F\"; }\n\n.ion-ios-drag:before { content: \"\\F421\"; }\n\n.ion-ios-email:before { content: \"\\F423\"; }\n\n.ion-ios-email-outline:before { content: \"\\F422\"; }\n\n.ion-ios-eye:before { content: \"\\F425\"; }\n\n.ion-ios-eye-outline:before { content: \"\\F424\"; }\n\n.ion-ios-fastforward:before { content: \"\\F427\"; }\n\n.ion-ios-fastforward-outline:before { content: \"\\F426\"; }\n\n.ion-ios-filing:before { content: \"\\F429\"; }\n\n.ion-ios-filing-outline:before { content: \"\\F428\"; }\n\n.ion-ios-film:before { content: \"\\F42B\"; }\n\n.ion-ios-film-outline:before { content: \"\\F42A\"; }\n\n.ion-ios-flag:before { content: \"\\F42D\"; }\n\n.ion-ios-flag-outline:before { content: \"\\F42C\"; }\n\n.ion-ios-flame:before { content: \"\\F42F\"; }\n\n.ion-ios-flame-outline:before { content: \"\\F42E\"; }\n\n.ion-ios-flask:before { content: \"\\F431\"; }\n\n.ion-ios-flask-outline:before { content: \"\\F430\"; }\n\n.ion-ios-flower:before { content: \"\\F433\"; }\n\n.ion-ios-flower-outline:before { content: \"\\F432\"; }\n\n.ion-ios-folder:before { content: \"\\F435\"; }\n\n.ion-ios-folder-outline:before { content: \"\\F434\"; }\n\n.ion-ios-football:before { content: \"\\F437\"; }\n\n.ion-ios-football-outline:before { content: \"\\F436\"; }\n\n.ion-ios-game-controller-a:before { content: \"\\F439\"; }\n\n.ion-ios-game-controller-a-outline:before { content: \"\\F438\"; }\n\n.ion-ios-game-controller-b:before { content: \"\\F43B\"; }\n\n.ion-ios-game-controller-b-outline:before { content: \"\\F43A\"; }\n\n.ion-ios-gear:before { content: \"\\F43D\"; }\n\n.ion-ios-gear-outline:before { content: \"\\F43C\"; }\n\n.ion-ios-glasses:before { content: \"\\F43F\"; }\n\n.ion-ios-glasses-outline:before { content: \"\\F43E\"; }\n\n.ion-ios-grid-view:before { content: \"\\F441\"; }\n\n.ion-ios-grid-view-outline:before { content: \"\\F440\"; }\n\n.ion-ios-heart:before { content: \"\\F443\"; }\n\n.ion-ios-heart-outline:before { content: \"\\F442\"; }\n\n.ion-ios-help:before { content: \"\\F446\"; }\n\n.ion-ios-help-empty:before { content: \"\\F444\"; }\n\n.ion-ios-help-outline:before { content: \"\\F445\"; }\n\n.ion-ios-home:before { content: \"\\F448\"; }\n\n.ion-ios-home-outline:before { content: \"\\F447\"; }\n\n.ion-ios-infinite:before { content: \"\\F44A\"; }\n\n.ion-ios-infinite-outline:before { content: \"\\F449\"; }\n\n.ion-ios-information:before { content: \"\\F44D\"; }\n\n.ion-ios-information-empty:before { content: \"\\F44B\"; }\n\n.ion-ios-information-outline:before { content: \"\\F44C\"; }\n\n.ion-ios-ionic-outline:before { content: \"\\F44E\"; }\n\n.ion-ios-keypad:before { content: \"\\F450\"; }\n\n.ion-ios-keypad-outline:before { content: \"\\F44F\"; }\n\n.ion-ios-lightbulb:before { content: \"\\F452\"; }\n\n.ion-ios-lightbulb-outline:before { content: \"\\F451\"; }\n\n.ion-ios-list:before { content: \"\\F454\"; }\n\n.ion-ios-list-outline:before { content: \"\\F453\"; }\n\n.ion-ios-location:before { content: \"\\F456\"; }\n\n.ion-ios-location-outline:before { content: \"\\F455\"; }\n\n.ion-ios-locked:before { content: \"\\F458\"; }\n\n.ion-ios-locked-outline:before { content: \"\\F457\"; }\n\n.ion-ios-loop:before { content: \"\\F45A\"; }\n\n.ion-ios-loop-strong:before { content: \"\\F459\"; }\n\n.ion-ios-medical:before { content: \"\\F45C\"; }\n\n.ion-ios-medical-outline:before { content: \"\\F45B\"; }\n\n.ion-ios-medkit:before { content: \"\\F45E\"; }\n\n.ion-ios-medkit-outline:before { content: \"\\F45D\"; }\n\n.ion-ios-mic:before { content: \"\\F461\"; }\n\n.ion-ios-mic-off:before { content: \"\\F45F\"; }\n\n.ion-ios-mic-outline:before { content: \"\\F460\"; }\n\n.ion-ios-minus:before { content: \"\\F464\"; }\n\n.ion-ios-minus-empty:before { content: \"\\F462\"; }\n\n.ion-ios-minus-outline:before { content: \"\\F463\"; }\n\n.ion-ios-monitor:before { content: \"\\F466\"; }\n\n.ion-ios-monitor-outline:before { content: \"\\F465\"; }\n\n.ion-ios-moon:before { content: \"\\F468\"; }\n\n.ion-ios-moon-outline:before { content: \"\\F467\"; }\n\n.ion-ios-more:before { content: \"\\F46A\"; }\n\n.ion-ios-more-outline:before { content: \"\\F469\"; }\n\n.ion-ios-musical-note:before { content: \"\\F46B\"; }\n\n.ion-ios-musical-notes:before { content: \"\\F46C\"; }\n\n.ion-ios-navigate:before { content: \"\\F46E\"; }\n\n.ion-ios-navigate-outline:before { content: \"\\F46D\"; }\n\n.ion-ios-nutrition:before { content: \"\\F470\"; }\n\n.ion-ios-nutrition-outline:before { content: \"\\F46F\"; }\n\n.ion-ios-paper:before { content: \"\\F472\"; }\n\n.ion-ios-paper-outline:before { content: \"\\F471\"; }\n\n.ion-ios-paperplane:before { content: \"\\F474\"; }\n\n.ion-ios-paperplane-outline:before { content: \"\\F473\"; }\n\n.ion-ios-partlysunny:before { content: \"\\F476\"; }\n\n.ion-ios-partlysunny-outline:before { content: \"\\F475\"; }\n\n.ion-ios-pause:before { content: \"\\F478\"; }\n\n.ion-ios-pause-outline:before { content: \"\\F477\"; }\n\n.ion-ios-paw:before { content: \"\\F47A\"; }\n\n.ion-ios-paw-outline:before { content: \"\\F479\"; }\n\n.ion-ios-people:before { content: \"\\F47C\"; }\n\n.ion-ios-people-outline:before { content: \"\\F47B\"; }\n\n.ion-ios-person:before { content: \"\\F47E\"; }\n\n.ion-ios-person-outline:before { content: \"\\F47D\"; }\n\n.ion-ios-personadd:before { content: \"\\F480\"; }\n\n.ion-ios-personadd-outline:before { content: \"\\F47F\"; }\n\n.ion-ios-photos:before { content: \"\\F482\"; }\n\n.ion-ios-photos-outline:before { content: \"\\F481\"; }\n\n.ion-ios-pie:before { content: \"\\F484\"; }\n\n.ion-ios-pie-outline:before { content: \"\\F483\"; }\n\n.ion-ios-pint:before { content: \"\\F486\"; }\n\n.ion-ios-pint-outline:before { content: \"\\F485\"; }\n\n.ion-ios-play:before { content: \"\\F488\"; }\n\n.ion-ios-play-outline:before { content: \"\\F487\"; }\n\n.ion-ios-plus:before { content: \"\\F48B\"; }\n\n.ion-ios-plus-empty:before { content: \"\\F489\"; }\n\n.ion-ios-plus-outline:before { content: \"\\F48A\"; }\n\n.ion-ios-pricetag:before { content: \"\\F48D\"; }\n\n.ion-ios-pricetag-outline:before { content: \"\\F48C\"; }\n\n.ion-ios-pricetags:before { content: \"\\F48F\"; }\n\n.ion-ios-pricetags-outline:before { content: \"\\F48E\"; }\n\n.ion-ios-printer:before { content: \"\\F491\"; }\n\n.ion-ios-printer-outline:before { content: \"\\F490\"; }\n\n.ion-ios-pulse:before { content: \"\\F493\"; }\n\n.ion-ios-pulse-strong:before { content: \"\\F492\"; }\n\n.ion-ios-rainy:before { content: \"\\F495\"; }\n\n.ion-ios-rainy-outline:before { content: \"\\F494\"; }\n\n.ion-ios-recording:before { content: \"\\F497\"; }\n\n.ion-ios-recording-outline:before { content: \"\\F496\"; }\n\n.ion-ios-redo:before { content: \"\\F499\"; }\n\n.ion-ios-redo-outline:before { content: \"\\F498\"; }\n\n.ion-ios-refresh:before { content: \"\\F49C\"; }\n\n.ion-ios-refresh-empty:before { content: \"\\F49A\"; }\n\n.ion-ios-refresh-outline:before { content: \"\\F49B\"; }\n\n.ion-ios-reload:before { content: \"\\F49D\"; }\n\n.ion-ios-reverse-camera:before { content: \"\\F49F\"; }\n\n.ion-ios-reverse-camera-outline:before { content: \"\\F49E\"; }\n\n.ion-ios-rewind:before { content: \"\\F4A1\"; }\n\n.ion-ios-rewind-outline:before { content: \"\\F4A0\"; }\n\n.ion-ios-rose:before { content: \"\\F4A3\"; }\n\n.ion-ios-rose-outline:before { content: \"\\F4A2\"; }\n\n.ion-ios-search:before { content: \"\\F4A5\"; }\n\n.ion-ios-search-strong:before { content: \"\\F4A4\"; }\n\n.ion-ios-settings:before { content: \"\\F4A7\"; }\n\n.ion-ios-settings-strong:before { content: \"\\F4A6\"; }\n\n.ion-ios-shuffle:before { content: \"\\F4A9\"; }\n\n.ion-ios-shuffle-strong:before { content: \"\\F4A8\"; }\n\n.ion-ios-skipbackward:before { content: \"\\F4AB\"; }\n\n.ion-ios-skipbackward-outline:before { content: \"\\F4AA\"; }\n\n.ion-ios-skipforward:before { content: \"\\F4AD\"; }\n\n.ion-ios-skipforward-outline:before { content: \"\\F4AC\"; }\n\n.ion-ios-snowy:before { content: \"\\F4AE\"; }\n\n.ion-ios-speedometer:before { content: \"\\F4B0\"; }\n\n.ion-ios-speedometer-outline:before { content: \"\\F4AF\"; }\n\n.ion-ios-star:before { content: \"\\F4B3\"; }\n\n.ion-ios-star-half:before { content: \"\\F4B1\"; }\n\n.ion-ios-star-outline:before { content: \"\\F4B2\"; }\n\n.ion-ios-stopwatch:before { content: \"\\F4B5\"; }\n\n.ion-ios-stopwatch-outline:before { content: \"\\F4B4\"; }\n\n.ion-ios-sunny:before { content: \"\\F4B7\"; }\n\n.ion-ios-sunny-outline:before { content: \"\\F4B6\"; }\n\n.ion-ios-telephone:before { content: \"\\F4B9\"; }\n\n.ion-ios-telephone-outline:before { content: \"\\F4B8\"; }\n\n.ion-ios-tennisball:before { content: \"\\F4BB\"; }\n\n.ion-ios-tennisball-outline:before { content: \"\\F4BA\"; }\n\n.ion-ios-thunderstorm:before { content: \"\\F4BD\"; }\n\n.ion-ios-thunderstorm-outline:before { content: \"\\F4BC\"; }\n\n.ion-ios-time:before { content: \"\\F4BF\"; }\n\n.ion-ios-time-outline:before { content: \"\\F4BE\"; }\n\n.ion-ios-timer:before { content: \"\\F4C1\"; }\n\n.ion-ios-timer-outline:before { content: \"\\F4C0\"; }\n\n.ion-ios-toggle:before { content: \"\\F4C3\"; }\n\n.ion-ios-toggle-outline:before { content: \"\\F4C2\"; }\n\n.ion-ios-trash:before { content: \"\\F4C5\"; }\n\n.ion-ios-trash-outline:before { content: \"\\F4C4\"; }\n\n.ion-ios-undo:before { content: \"\\F4C7\"; }\n\n.ion-ios-undo-outline:before { content: \"\\F4C6\"; }\n\n.ion-ios-unlocked:before { content: \"\\F4C9\"; }\n\n.ion-ios-unlocked-outline:before { content: \"\\F4C8\"; }\n\n.ion-ios-upload:before { content: \"\\F4CB\"; }\n\n.ion-ios-upload-outline:before { content: \"\\F4CA\"; }\n\n.ion-ios-videocam:before { content: \"\\F4CD\"; }\n\n.ion-ios-videocam-outline:before { content: \"\\F4CC\"; }\n\n.ion-ios-volume-high:before { content: \"\\F4CE\"; }\n\n.ion-ios-volume-low:before { content: \"\\F4CF\"; }\n\n.ion-ios-wineglass:before { content: \"\\F4D1\"; }\n\n.ion-ios-wineglass-outline:before { content: \"\\F4D0\"; }\n\n.ion-ios-world:before { content: \"\\F4D3\"; }\n\n.ion-ios-world-outline:before { content: \"\\F4D2\"; }\n\n.ion-ipad:before { content: \"\\F1F9\"; }\n\n.ion-iphone:before { content: \"\\F1FA\"; }\n\n.ion-ipod:before { content: \"\\F1FB\"; }\n\n.ion-jet:before { content: \"\\F295\"; }\n\n.ion-key:before { content: \"\\F296\"; }\n\n.ion-knife:before { content: \"\\F297\"; }\n\n.ion-laptop:before { content: \"\\F1FC\"; }\n\n.ion-leaf:before { content: \"\\F1FD\"; }\n\n.ion-levels:before { content: \"\\F298\"; }\n\n.ion-lightbulb:before { content: \"\\F299\"; }\n\n.ion-link:before { content: \"\\F1FE\"; }\n\n.ion-load-a:before { content: \"\\F29A\"; }\n\n.ion-load-b:before { content: \"\\F29B\"; }\n\n.ion-load-c:before { content: \"\\F29C\"; }\n\n.ion-load-d:before { content: \"\\F29D\"; }\n\n.ion-location:before { content: \"\\F1FF\"; }\n\n.ion-lock-combination:before { content: \"\\F4D4\"; }\n\n.ion-locked:before { content: \"\\F200\"; }\n\n.ion-log-in:before { content: \"\\F29E\"; }\n\n.ion-log-out:before { content: \"\\F29F\"; }\n\n.ion-loop:before { content: \"\\F201\"; }\n\n.ion-magnet:before { content: \"\\F2A0\"; }\n\n.ion-male:before { content: \"\\F2A1\"; }\n\n.ion-man:before { content: \"\\F202\"; }\n\n.ion-map:before { content: \"\\F203\"; }\n\n.ion-medkit:before { content: \"\\F2A2\"; }\n\n.ion-merge:before { content: \"\\F33F\"; }\n\n.ion-mic-a:before { content: \"\\F204\"; }\n\n.ion-mic-b:before { content: \"\\F205\"; }\n\n.ion-mic-c:before { content: \"\\F206\"; }\n\n.ion-minus:before { content: \"\\F209\"; }\n\n.ion-minus-circled:before { content: \"\\F207\"; }\n\n.ion-minus-round:before { content: \"\\F208\"; }\n\n.ion-model-s:before { content: \"\\F2C1\"; }\n\n.ion-monitor:before { content: \"\\F20A\"; }\n\n.ion-more:before { content: \"\\F20B\"; }\n\n.ion-mouse:before { content: \"\\F340\"; }\n\n.ion-music-note:before { content: \"\\F20C\"; }\n\n.ion-navicon:before { content: \"\\F20E\"; }\n\n.ion-navicon-round:before { content: \"\\F20D\"; }\n\n.ion-navigate:before { content: \"\\F2A3\"; }\n\n.ion-network:before { content: \"\\F341\"; }\n\n.ion-no-smoking:before { content: \"\\F2C2\"; }\n\n.ion-nuclear:before { content: \"\\F2A4\"; }\n\n.ion-outlet:before { content: \"\\F342\"; }\n\n.ion-paintbrush:before { content: \"\\F4D5\"; }\n\n.ion-paintbucket:before { content: \"\\F4D6\"; }\n\n.ion-paper-airplane:before { content: \"\\F2C3\"; }\n\n.ion-paperclip:before { content: \"\\F20F\"; }\n\n.ion-pause:before { content: \"\\F210\"; }\n\n.ion-person:before { content: \"\\F213\"; }\n\n.ion-person-add:before { content: \"\\F211\"; }\n\n.ion-person-stalker:before { content: \"\\F212\"; }\n\n.ion-pie-graph:before { content: \"\\F2A5\"; }\n\n.ion-pin:before { content: \"\\F2A6\"; }\n\n.ion-pinpoint:before { content: \"\\F2A7\"; }\n\n.ion-pizza:before { content: \"\\F2A8\"; }\n\n.ion-plane:before { content: \"\\F214\"; }\n\n.ion-planet:before { content: \"\\F343\"; }\n\n.ion-play:before { content: \"\\F215\"; }\n\n.ion-playstation:before { content: \"\\F30A\"; }\n\n.ion-plus:before { content: \"\\F218\"; }\n\n.ion-plus-circled:before { content: \"\\F216\"; }\n\n.ion-plus-round:before { content: \"\\F217\"; }\n\n.ion-podium:before { content: \"\\F344\"; }\n\n.ion-pound:before { content: \"\\F219\"; }\n\n.ion-power:before { content: \"\\F2A9\"; }\n\n.ion-pricetag:before { content: \"\\F2AA\"; }\n\n.ion-pricetags:before { content: \"\\F2AB\"; }\n\n.ion-printer:before { content: \"\\F21A\"; }\n\n.ion-pull-request:before { content: \"\\F345\"; }\n\n.ion-qr-scanner:before { content: \"\\F346\"; }\n\n.ion-quote:before { content: \"\\F347\"; }\n\n.ion-radio-waves:before { content: \"\\F2AC\"; }\n\n.ion-record:before { content: \"\\F21B\"; }\n\n.ion-refresh:before { content: \"\\F21C\"; }\n\n.ion-reply:before { content: \"\\F21E\"; }\n\n.ion-reply-all:before { content: \"\\F21D\"; }\n\n.ion-ribbon-a:before { content: \"\\F348\"; }\n\n.ion-ribbon-b:before { content: \"\\F349\"; }\n\n.ion-sad:before { content: \"\\F34A\"; }\n\n.ion-sad-outline:before { content: \"\\F4D7\"; }\n\n.ion-scissors:before { content: \"\\F34B\"; }\n\n.ion-search:before { content: \"\\F21F\"; }\n\n.ion-settings:before { content: \"\\F2AD\"; }\n\n.ion-share:before { content: \"\\F220\"; }\n\n.ion-shuffle:before { content: \"\\F221\"; }\n\n.ion-skip-backward:before { content: \"\\F222\"; }\n\n.ion-skip-forward:before { content: \"\\F223\"; }\n\n.ion-social-android:before { content: \"\\F225\"; }\n\n.ion-social-android-outline:before { content: \"\\F224\"; }\n\n.ion-social-angular:before { content: \"\\F4D9\"; }\n\n.ion-social-angular-outline:before { content: \"\\F4D8\"; }\n\n.ion-social-apple:before { content: \"\\F227\"; }\n\n.ion-social-apple-outline:before { content: \"\\F226\"; }\n\n.ion-social-bitcoin:before { content: \"\\F2AF\"; }\n\n.ion-social-bitcoin-outline:before { content: \"\\F2AE\"; }\n\n.ion-social-buffer:before { content: \"\\F229\"; }\n\n.ion-social-buffer-outline:before { content: \"\\F228\"; }\n\n.ion-social-chrome:before { content: \"\\F4DB\"; }\n\n.ion-social-chrome-outline:before { content: \"\\F4DA\"; }\n\n.ion-social-codepen:before { content: \"\\F4DD\"; }\n\n.ion-social-codepen-outline:before { content: \"\\F4DC\"; }\n\n.ion-social-css3:before { content: \"\\F4DF\"; }\n\n.ion-social-css3-outline:before { content: \"\\F4DE\"; }\n\n.ion-social-designernews:before { content: \"\\F22B\"; }\n\n.ion-social-designernews-outline:before { content: \"\\F22A\"; }\n\n.ion-social-dribbble:before { content: \"\\F22D\"; }\n\n.ion-social-dribbble-outline:before { content: \"\\F22C\"; }\n\n.ion-social-dropbox:before { content: \"\\F22F\"; }\n\n.ion-social-dropbox-outline:before { content: \"\\F22E\"; }\n\n.ion-social-euro:before { content: \"\\F4E1\"; }\n\n.ion-social-euro-outline:before { content: \"\\F4E0\"; }\n\n.ion-social-facebook:before { content: \"\\F231\"; }\n\n.ion-social-facebook-outline:before { content: \"\\F230\"; }\n\n.ion-social-foursquare:before { content: \"\\F34D\"; }\n\n.ion-social-foursquare-outline:before { content: \"\\F34C\"; }\n\n.ion-social-freebsd-devil:before { content: \"\\F2C4\"; }\n\n.ion-social-github:before { content: \"\\F233\"; }\n\n.ion-social-github-outline:before { content: \"\\F232\"; }\n\n.ion-social-google:before { content: \"\\F34F\"; }\n\n.ion-social-google-outline:before { content: \"\\F34E\"; }\n\n.ion-social-googleplus:before { content: \"\\F235\"; }\n\n.ion-social-googleplus-outline:before { content: \"\\F234\"; }\n\n.ion-social-hackernews:before { content: \"\\F237\"; }\n\n.ion-social-hackernews-outline:before { content: \"\\F236\"; }\n\n.ion-social-html5:before { content: \"\\F4E3\"; }\n\n.ion-social-html5-outline:before { content: \"\\F4E2\"; }\n\n.ion-social-instagram:before { content: \"\\F351\"; }\n\n.ion-social-instagram-outline:before { content: \"\\F350\"; }\n\n.ion-social-javascript:before { content: \"\\F4E5\"; }\n\n.ion-social-javascript-outline:before { content: \"\\F4E4\"; }\n\n.ion-social-linkedin:before { content: \"\\F239\"; }\n\n.ion-social-linkedin-outline:before { content: \"\\F238\"; }\n\n.ion-social-markdown:before { content: \"\\F4E6\"; }\n\n.ion-social-nodejs:before { content: \"\\F4E7\"; }\n\n.ion-social-octocat:before { content: \"\\F4E8\"; }\n\n.ion-social-pinterest:before { content: \"\\F2B1\"; }\n\n.ion-social-pinterest-outline:before { content: \"\\F2B0\"; }\n\n.ion-social-python:before { content: \"\\F4E9\"; }\n\n.ion-social-reddit:before { content: \"\\F23B\"; }\n\n.ion-social-reddit-outline:before { content: \"\\F23A\"; }\n\n.ion-social-rss:before { content: \"\\F23D\"; }\n\n.ion-social-rss-outline:before { content: \"\\F23C\"; }\n\n.ion-social-sass:before { content: \"\\F4EA\"; }\n\n.ion-social-skype:before { content: \"\\F23F\"; }\n\n.ion-social-skype-outline:before { content: \"\\F23E\"; }\n\n.ion-social-snapchat:before { content: \"\\F4EC\"; }\n\n.ion-social-snapchat-outline:before { content: \"\\F4EB\"; }\n\n.ion-social-tumblr:before { content: \"\\F241\"; }\n\n.ion-social-tumblr-outline:before { content: \"\\F240\"; }\n\n.ion-social-tux:before { content: \"\\F2C5\"; }\n\n.ion-social-twitch:before { content: \"\\F4EE\"; }\n\n.ion-social-twitch-outline:before { content: \"\\F4ED\"; }\n\n.ion-social-twitter:before { content: \"\\F243\"; }\n\n.ion-social-twitter-outline:before { content: \"\\F242\"; }\n\n.ion-social-usd:before { content: \"\\F353\"; }\n\n.ion-social-usd-outline:before { content: \"\\F352\"; }\n\n.ion-social-vimeo:before { content: \"\\F245\"; }\n\n.ion-social-vimeo-outline:before { content: \"\\F244\"; }\n\n.ion-social-whatsapp:before { content: \"\\F4F0\"; }\n\n.ion-social-whatsapp-outline:before { content: \"\\F4EF\"; }\n\n.ion-social-windows:before { content: \"\\F247\"; }\n\n.ion-social-windows-outline:before { content: \"\\F246\"; }\n\n.ion-social-wordpress:before { content: \"\\F249\"; }\n\n.ion-social-wordpress-outline:before { content: \"\\F248\"; }\n\n.ion-social-yahoo:before { content: \"\\F24B\"; }\n\n.ion-social-yahoo-outline:before { content: \"\\F24A\"; }\n\n.ion-social-yen:before { content: \"\\F4F2\"; }\n\n.ion-social-yen-outline:before { content: \"\\F4F1\"; }\n\n.ion-social-youtube:before { content: \"\\F24D\"; }\n\n.ion-social-youtube-outline:before { content: \"\\F24C\"; }\n\n.ion-soup-can:before { content: \"\\F4F4\"; }\n\n.ion-soup-can-outline:before { content: \"\\F4F3\"; }\n\n.ion-speakerphone:before { content: \"\\F2B2\"; }\n\n.ion-speedometer:before { content: \"\\F2B3\"; }\n\n.ion-spoon:before { content: \"\\F2B4\"; }\n\n.ion-star:before { content: \"\\F24E\"; }\n\n.ion-stats-bars:before { content: \"\\F2B5\"; }\n\n.ion-steam:before { content: \"\\F30B\"; }\n\n.ion-stop:before { content: \"\\F24F\"; }\n\n.ion-thermometer:before { content: \"\\F2B6\"; }\n\n.ion-thumbsdown:before { content: \"\\F250\"; }\n\n.ion-thumbsup:before { content: \"\\F251\"; }\n\n.ion-toggle:before { content: \"\\F355\"; }\n\n.ion-toggle-filled:before { content: \"\\F354\"; }\n\n.ion-transgender:before { content: \"\\F4F5\"; }\n\n.ion-trash-a:before { content: \"\\F252\"; }\n\n.ion-trash-b:before { content: \"\\F253\"; }\n\n.ion-trophy:before { content: \"\\F356\"; }\n\n.ion-tshirt:before { content: \"\\F4F7\"; }\n\n.ion-tshirt-outline:before { content: \"\\F4F6\"; }\n\n.ion-umbrella:before { content: \"\\F2B7\"; }\n\n.ion-university:before { content: \"\\F357\"; }\n\n.ion-unlocked:before { content: \"\\F254\"; }\n\n.ion-upload:before { content: \"\\F255\"; }\n\n.ion-usb:before { content: \"\\F2B8\"; }\n\n.ion-videocamera:before { content: \"\\F256\"; }\n\n.ion-volume-high:before { content: \"\\F257\"; }\n\n.ion-volume-low:before { content: \"\\F258\"; }\n\n.ion-volume-medium:before { content: \"\\F259\"; }\n\n.ion-volume-mute:before { content: \"\\F25A\"; }\n\n.ion-wand:before { content: \"\\F358\"; }\n\n.ion-waterdrop:before { content: \"\\F25B\"; }\n\n.ion-wifi:before { content: \"\\F25C\"; }\n\n.ion-wineglass:before { content: \"\\F2B9\"; }\n\n.ion-woman:before { content: \"\\F25D\"; }\n\n.ion-wrench:before { content: \"\\F2BA\"; }\n\n.ion-xbox:before { content: \"\\F30C\"; }\n", ""]);

// exports

    const application = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
    __webpack_require__("../node_modules/tns-core-modules/ui/styling/style-scope.js");

    exports.forEach(cssExport => {
        if (cssExport.length > 1 && cssExport[1]) {
            // applying the second item of the export as it contains the css contents
            application.addCss(cssExport[1]);
        }
    });
    ;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './fonts/ionicons.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./main.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-vue/dist/index.js");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./store.js");
/* harmony import */ var _views_Home_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./views/Home.vue");
/* harmony import */ var nativescript_vue_devtools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-vue-devtools/index.js");
/* harmony import */ var nativescript_vue_devtools__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue_devtools__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nativescript_ui_listview_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/nativescript-ui-listview/vue/index.js");
/* harmony import */ var nativescript_ui_listview_vue__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview_vue__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nativescript_fonticon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/nativescript-fonticon/nativescript-fonticon.js");
/* harmony import */ var nativescript_fonticon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nativescript_fonticon__WEBPACK_IMPORTED_MODULE_5__);

            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-regular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__initialHmrUpdate = true;
            global.__hmrSyncBackup = global.__onLiveSync;

            global.__onLiveSync = function () {
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                if (global.__initialHmrUpdate) {
                    return;
                }

                setTimeout(() => {
                    global.__hmrSyncBackup({ type, path });
                });
            };

            hmrUpdate().then(() => {
                global.__initialHmrUpdate = false;
            })
        }
        
            const context = __webpack_require__("./ sync recursive (?<!\\bApp_Resources\\b.*)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$");
            global.registerWebpackModules(context);
            if (true) {
                module.hot.accept(context.id, () => { 
                    console.log("HMR: Accept module '" + context.id + "' from '" + module.i + "'"); 
                });
            }
            
        __webpack_require__("../node_modules/tns-core-modules/bundle-entry-points.js");
        




nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(nativescript_ui_listview_vue__WEBPACK_IMPORTED_MODULE_4___default.a);
nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.registerElement('BarcodeScanner', () => __webpack_require__("../node_modules/nativescript-barcodescanner/barcodescanner.js").BarcodeScannerView); //fonticon plugin


nativescript_fonticon__WEBPACK_IMPORTED_MODULE_5__["TNSFontIcon"].debug = false;
nativescript_fonticon__WEBPACK_IMPORTED_MODULE_5__["TNSFontIcon"].paths = {
  'fa': './fonts/font-awesome.css',
  'ion': './fonts/ionicons.css'
};
nativescript_fonticon__WEBPACK_IMPORTED_MODULE_5__["TNSFontIcon"].loadCss();
nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.filter('fonticon', nativescript_fonticon__WEBPACK_IMPORTED_MODULE_5__["fonticon"]);

if (true) {
  nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(nativescript_vue_devtools__WEBPACK_IMPORTED_MODULE_3___default.a);
} // Prints Vue logs when --env.production is *NOT* set while building


nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.config.silent = "development" === 'production';
new nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  store: _store__WEBPACK_IMPORTED_MODULE_1__["default"],
  render: h => h('frame', [h(_views_Home_vue__WEBPACK_IMPORTED_MODULE_2__["default"])])
}).$start();
    
        
        
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./models/Animal.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (class {// constructor({animal_id, animal_name, animal_type, sex, age, DOB, primary_color, secondary_color, breed_group, primary_breed, secondary_breed, animal_stat, stamp  }) {
  //     this.animal_id = animal_id
  //     this.animal_name = animal_name
  //     this.animal_type = animal_type
  //     this.sex = sex
  //     this.age = age
  //     this.DOB = nuDOBll
  //     this.primary_color = primary_color
  //     this.secondary_color = secondary_color
  //     this.breed_group = breed_group
  //     this.primary_breed = primary_breed
  //     this.secondary_breed = secondary_breed
  //     this.animal_stat = animal_stat
  //     this.stamp = stamp
  // }
  // category: "Dog",
  // categoryTag: "#27AE60",
  // breed_group: "Hound",
  // primary_breed: "Beagle",
  // age: "10",
  // gender: "M",
  // animal_size: "Small",
  // primary_color: "Tan",
  // location: "Downey",
  // isAvailable: false,
  // isFavorite: true,
  // comments: 11,
  // rating: "4.0",
  // description: "a"
});

/***/ }),

/***/ "./models/Faq.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (class {
  constructor(question) {
    this.id = Math.floor(Math.random() * 100);
    this.question = question;
    this.answer = null;
    this.count = 0;
  }

});

/***/ }),

/***/ "./models/Ticket.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (class {
  constructor() {
    this.location = 'temp';
  }

  setLocation(qrCode) {
    this.location = qrCode;
  }

  setTicketInfo(_ref) {
    var {
      phone,
      name,
      query
    } = _ref;
    this.phone = phone;
    this.name = name;
    this.query = query;
    this.timeIn = new Date();
  }

});

/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = JSON.parse("{\"android\":{\"v8Flags\":\"--expose_gc\",\"markingMode\":\"none\"},\"main\":\"main\",\"name\":\"acua\",\"version\":\"1.0.0\"}");

/***/ }),

/***/ "./services/AdoptionService.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var httpModule = __webpack_require__("../node_modules/tns-core-modules/http/http.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  getAnimals() {
    return httpModule.getJSON("https://acuaserver.herokuapp.com/animals");
  }

});

/***/ }),

/***/ "./services/FakeAdoptionService.js":
/***/ (function(module, exports) {



/***/ }),

/***/ "./services/FakeFaqService.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _db_faqs_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./db/faqs.json");
var _db_faqs_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t("./db/faqs.json", 1);

/* harmony default export */ __webpack_exports__["default"] = ({
  getFaqs() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(_db_faqs_json__WEBPACK_IMPORTED_MODULE_0__["faqs"]);
      }, 10);
    });
  },

  addFaq(entry) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(entry);
      }, 10);
    });
  }

});

/***/ }),

/***/ "./services/FakeTicketService.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// import { tickets } from '@/db/faqs.json'
/* harmony default export */ __webpack_exports__["default"] = ({
  // getTickets () {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve({ data: tickets })
  //     }, 10)
  //   })
  // },
  addTicket(entry) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(entry);
      }, 10);
    });
  }

});

/***/ }),

/***/ "./services/FaqService.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var httpModule = __webpack_require__("../node_modules/tns-core-modules/http/http.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  getFaqs() {
    return httpModule.getJSON('http://localhost:3000/faqs');
  },

  addFaq(faq) {
    return httpModule.request({
      // url: `https://acua-server.herokuapp.com/faqs`,
      // url: 'http://localhost:3000',
      url: 'https://acuaserver.herokuapp.com/tickets',
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      content: JSON.stringify(faq)
    });
  }

});

/***/ }),

/***/ "./services/TicketService.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var httpModule = __webpack_require__("../node_modules/tns-core-modules/http/http.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  addTicket(ticket) {
    return httpModule.request({
      // url: `http://[::1]:3000/tickets`,
      // url:`https://acuateam.herokuapp.com/tickets`,
      url: 'https://acuaserver.herokuapp.com/tickets',
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      content: JSON.stringify(ticket)
    });
  },

  checkTicket(ticketId) {
    return httpModule.getJSON("http://[::1]:3000/tickets/".concat(ticketId) // `https://acuateam.herokuapp.com/tickets/${ticketId}`
    );
  }

});

/***/ }),

/***/ "./store.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-vue/dist/index.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _models_Animal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./models/Animal.js");
/* harmony import */ var _models_Ticket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./models/Ticket.js");
/* harmony import */ var _services_TicketService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./services/TicketService.js");
/* harmony import */ var _services_FaqService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./services/FaqService.js");





 // import TicketService from '@/services/FakeTicketService'
// import FaqService from '@/services/FakeFaqService'

vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vuex__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (new vuex__WEBPACK_IMPORTED_MODULE_1__["default"].Store({
  state: {
    animals: [],
    tickets: [],
    faqs: [],
    userAnimal: new _models_Animal__WEBPACK_IMPORTED_MODULE_2__["default"](),
    userFaq: {},
    location: 'Downey',
    userTicket: new _models_Ticket__WEBPACK_IMPORTED_MODULE_3__["default"](),
    approvedTicket: undefined
  },
  // change the state of the app (must be synchronous)
  mutations: {
    // adoption
    storeAnimal(state, animal) {
      state.userFaq = animal;
    },

    ADD_ANIMAL(state, animal) {
      state.animals.push(animal);
    },

    storeFaq(state, faq) {
      state.userFaq = faq;
    },

    setTicketLocation(state, location) {
      state.location = location;
    },

    setTicketInfo(state, userInput) {
      state.userTicket.setTicketInfo(userInput);
    },

    storeTicket(state, ticket) {
      state.userTicket = ticket;
    },

    SET_TICKET(state, ticket) {
      state.approvedTicket = ticket;
    },

    ADD_TICKET(state, ticket) {
      state.approvedTicket = ticket;
    },

    SET_FAQS(state, faqs) {
      state.faqs = faqs;
    },

    ADD_FAQ(state, faq) {
      state.faqs.push(faq);
    }

  },
  // asynchronous operations (Such as API calls)
  actions: {
    checkTicket(_ref, ticketId) {
      var {
        commit
      } = _ref;
      _services_TicketService__WEBPACK_IMPORTED_MODULE_4__["default"].checkTicket(ticketId).then(res => {
        commit('SET_TICKET', res);
      });
    },

    addTicket(_ref2, ticket) {
      var {
        commit
      } = _ref2;
      _services_TicketService__WEBPACK_IMPORTED_MODULE_4__["default"].addTicket(ticket).then(res => {
        commit('ADD_TICKET', res.content.toJSON());
      });
    },

    loadFaqs(_ref3) {
      var {
        commit
      } = _ref3;
      _services_FaqService__WEBPACK_IMPORTED_MODULE_5__["default"].getFaqs().then(res => {
        commit('SET_FAQS', res);
      });
    },

    addFaq(_ref4, faq) {
      var {
        commit
      } = _ref4;
      _services_FaqService__WEBPACK_IMPORTED_MODULE_5__["default"].addFaq(faq).then(res => {
        commit('ADD_FAQ', res.content.toJSON());
      });
    }

  },
  getters: {
    getSearchResults: state => search => {
      if (search === '') return state.faqs;
      var words = search.split(' ');
      return state.faqs.filter(faq => words.some(word => faq.query.toLowerCase().includes(word.toLowerCase()) || faq.answer.toLowerCase().includes(word.toLowerCase())));
    }
  }
}));

/***/ }),

/***/ "./views/Adoption.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Adoption_vue_vue_type_template_id_b15104f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./views/Adoption.vue?vue&type=template&id=b15104f2&");
/* harmony import */ var _Adoption_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./views/Adoption.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Adoption_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./views/Adoption.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Adoption_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Adoption_vue_vue_type_template_id_b15104f2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Adoption_vue_vue_type_template_id_b15104f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('b15104f2')) {
      api.createRecord('b15104f2', component.options)
    } else {
      api.reload('b15104f2', component.options)
    }
    module.hot.accept("./views/Adoption.vue?vue&type=template&id=b15104f2&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Adoption_vue_vue_type_template_id_b15104f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./views/Adoption.vue?vue&type=template&id=b15104f2&");
(function () {
      api.rerender('b15104f2', {
        render: _Adoption_vue_vue_type_template_id_b15104f2___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Adoption_vue_vue_type_template_id_b15104f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "views/Adoption.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./views/Adoption.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Adoption_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./views/Adoption.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Adoption_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./views/Adoption.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Adoption_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./views/Adoption.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Adoption_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Adoption_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Adoption_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Adoption_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Adoption_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./views/Adoption.vue?vue&type=template&id=b15104f2&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Adoption_vue_vue_type_template_id_b15104f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./views/Adoption.vue?vue&type=template&id=b15104f2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Adoption_vue_vue_type_template_id_b15104f2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Adoption_vue_vue_type_template_id_b15104f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./views/Faq.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Faq_vue_vue_type_template_id_e39d1092_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./views/Faq.vue?vue&type=template&id=e39d1092&scoped=true&");
/* harmony import */ var _Faq_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./views/Faq.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Faq_vue_vue_type_style_index_0_id_e39d1092_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./views/Faq.vue?vue&type=style&index=0&id=e39d1092&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Faq_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Faq_vue_vue_type_template_id_e39d1092_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Faq_vue_vue_type_template_id_e39d1092_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e39d1092",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('e39d1092')) {
      api.createRecord('e39d1092', component.options)
    } else {
      api.reload('e39d1092', component.options)
    }
    module.hot.accept("./views/Faq.vue?vue&type=template&id=e39d1092&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Faq_vue_vue_type_template_id_e39d1092_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./views/Faq.vue?vue&type=template&id=e39d1092&scoped=true&");
(function () {
      api.rerender('e39d1092', {
        render: _Faq_vue_vue_type_template_id_e39d1092_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Faq_vue_vue_type_template_id_e39d1092_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "views/Faq.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./views/Faq.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./views/Faq.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./views/Faq.vue?vue&type=style&index=0&id=e39d1092&scoped=true&lang=scss&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_style_index_0_id_e39d1092_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js?!./views/Faq.vue?vue&type=style&index=0&id=e39d1092&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_style_index_0_id_e39d1092_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_style_index_0_id_e39d1092_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_style_index_0_id_e39d1092_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_style_index_0_id_e39d1092_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_style_index_0_id_e39d1092_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./views/Faq.vue?vue&type=template&id=e39d1092&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_template_id_e39d1092_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./views/Faq.vue?vue&type=template&id=e39d1092&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_template_id_e39d1092_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_template_id_e39d1092_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./views/Home.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_2f2be7e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./views/Home.vue?vue&type=template&id=2f2be7e4&scoped=true&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Home_vue_vue_type_style_index_0_id_2f2be7e4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./views/Home.vue?vue&type=style&index=0&id=2f2be7e4&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_2f2be7e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_2f2be7e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2f2be7e4",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('2f2be7e4')) {
      api.createRecord('2f2be7e4', component.options)
    } else {
      api.reload('2f2be7e4', component.options)
    }
    module.hot.accept("./views/Home.vue?vue&type=template&id=2f2be7e4&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Home_vue_vue_type_template_id_2f2be7e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./views/Home.vue?vue&type=template&id=2f2be7e4&scoped=true&");
(function () {
      api.rerender('2f2be7e4', {
        render: _Home_vue_vue_type_template_id_2f2be7e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Home_vue_vue_type_template_id_2f2be7e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "views/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./views/Home.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./views/Home.vue?vue&type=style&index=0&id=2f2be7e4&scoped=true&lang=scss&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_2f2be7e4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js?!./views/Home.vue?vue&type=style&index=0&id=2f2be7e4&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_2f2be7e4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_2f2be7e4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_2f2be7e4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_2f2be7e4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_2f2be7e4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./views/Home.vue?vue&type=template&id=2f2be7e4&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_2f2be7e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./views/Home.vue?vue&type=template&id=2f2be7e4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_2f2be7e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_2f2be7e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./views/Location.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Location_vue_vue_type_template_id_3e597864_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./views/Location.vue?vue&type=template&id=3e597864&scoped=true&");
/* harmony import */ var _Location_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./views/Location.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Location_vue_vue_type_style_index_0_id_3e597864_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./views/Location.vue?vue&type=style&index=0&id=3e597864&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Location_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Location_vue_vue_type_template_id_3e597864_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Location_vue_vue_type_template_id_3e597864_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3e597864",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('3e597864')) {
      api.createRecord('3e597864', component.options)
    } else {
      api.reload('3e597864', component.options)
    }
    module.hot.accept("./views/Location.vue?vue&type=template&id=3e597864&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Location_vue_vue_type_template_id_3e597864_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./views/Location.vue?vue&type=template&id=3e597864&scoped=true&");
(function () {
      api.rerender('3e597864', {
        render: _Location_vue_vue_type_template_id_3e597864_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Location_vue_vue_type_template_id_3e597864_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "views/Location.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./views/Location.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Location_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./views/Location.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Location_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./views/Location.vue?vue&type=style&index=0&id=3e597864&scoped=true&lang=scss&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Location_vue_vue_type_style_index_0_id_3e597864_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js?!./views/Location.vue?vue&type=style&index=0&id=3e597864&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Location_vue_vue_type_style_index_0_id_3e597864_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Location_vue_vue_type_style_index_0_id_3e597864_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Location_vue_vue_type_style_index_0_id_3e597864_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Location_vue_vue_type_style_index_0_id_3e597864_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Location_vue_vue_type_style_index_0_id_3e597864_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./views/Location.vue?vue&type=template&id=3e597864&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Location_vue_vue_type_template_id_3e597864_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./views/Location.vue?vue&type=template&id=3e597864&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Location_vue_vue_type_template_id_3e597864_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Location_vue_vue_type_template_id_3e597864_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./views/ServiceRequest.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ServiceRequest_vue_vue_type_template_id_3ccecf09_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./views/ServiceRequest.vue?vue&type=template&id=3ccecf09&scoped=true&");
/* harmony import */ var _ServiceRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./views/ServiceRequest.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ServiceRequest_vue_vue_type_style_index_0_id_3ccecf09_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./views/ServiceRequest.vue?vue&type=style&index=0&id=3ccecf09&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ServiceRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ServiceRequest_vue_vue_type_template_id_3ccecf09_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ServiceRequest_vue_vue_type_template_id_3ccecf09_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3ccecf09",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('3ccecf09')) {
      api.createRecord('3ccecf09', component.options)
    } else {
      api.reload('3ccecf09', component.options)
    }
    module.hot.accept("./views/ServiceRequest.vue?vue&type=template&id=3ccecf09&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _ServiceRequest_vue_vue_type_template_id_3ccecf09_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./views/ServiceRequest.vue?vue&type=template&id=3ccecf09&scoped=true&");
(function () {
      api.rerender('3ccecf09', {
        render: _ServiceRequest_vue_vue_type_template_id_3ccecf09_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _ServiceRequest_vue_vue_type_template_id_3ccecf09_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "views/ServiceRequest.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./views/ServiceRequest.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./views/ServiceRequest.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./views/ServiceRequest.vue?vue&type=style&index=0&id=3ccecf09&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceRequest_vue_vue_type_style_index_0_id_3ccecf09_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./views/ServiceRequest.vue?vue&type=style&index=0&id=3ccecf09&scoped=true&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceRequest_vue_vue_type_style_index_0_id_3ccecf09_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceRequest_vue_vue_type_style_index_0_id_3ccecf09_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceRequest_vue_vue_type_style_index_0_id_3ccecf09_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceRequest_vue_vue_type_style_index_0_id_3ccecf09_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceRequest_vue_vue_type_style_index_0_id_3ccecf09_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./views/ServiceRequest.vue?vue&type=template&id=3ccecf09&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceRequest_vue_vue_type_template_id_3ccecf09_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./views/ServiceRequest.vue?vue&type=template&id=3ccecf09&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceRequest_vue_vue_type_template_id_3ccecf09_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceRequest_vue_vue_type_template_id_3ccecf09_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./views/Ticket.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Ticket_vue_vue_type_template_id_07b40c0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./views/Ticket.vue?vue&type=template&id=07b40c0a&scoped=true&");
/* harmony import */ var _Ticket_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./views/Ticket.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Ticket_vue_vue_type_style_index_0_id_07b40c0a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./views/Ticket.vue?vue&type=style&index=0&id=07b40c0a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Ticket_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Ticket_vue_vue_type_template_id_07b40c0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Ticket_vue_vue_type_template_id_07b40c0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "07b40c0a",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('07b40c0a')) {
      api.createRecord('07b40c0a', component.options)
    } else {
      api.reload('07b40c0a', component.options)
    }
    module.hot.accept("./views/Ticket.vue?vue&type=template&id=07b40c0a&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Ticket_vue_vue_type_template_id_07b40c0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./views/Ticket.vue?vue&type=template&id=07b40c0a&scoped=true&");
(function () {
      api.rerender('07b40c0a', {
        render: _Ticket_vue_vue_type_template_id_07b40c0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Ticket_vue_vue_type_template_id_07b40c0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "views/Ticket.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./views/Ticket.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Ticket_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./views/Ticket.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Ticket_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./views/Ticket.vue?vue&type=style&index=0&id=07b40c0a&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Ticket_vue_vue_type_style_index_0_id_07b40c0a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./views/Ticket.vue?vue&type=style&index=0&id=07b40c0a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Ticket_vue_vue_type_style_index_0_id_07b40c0a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Ticket_vue_vue_type_style_index_0_id_07b40c0a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Ticket_vue_vue_type_style_index_0_id_07b40c0a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Ticket_vue_vue_type_style_index_0_id_07b40c0a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Ticket_vue_vue_type_style_index_0_id_07b40c0a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./views/Ticket.vue?vue&type=template&id=07b40c0a&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Ticket_vue_vue_type_template_id_07b40c0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./views/Ticket.vue?vue&type=template&id=07b40c0a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Ticket_vue_vue_type_template_id_07b40c0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Ticket_vue_vue_type_template_id_07b40c0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./views/TicketForm.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TicketForm_vue_vue_type_template_id_6a8bff5f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./views/TicketForm.vue?vue&type=template&id=6a8bff5f&scoped=true&");
/* harmony import */ var _TicketForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./views/TicketForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TicketForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TicketForm_vue_vue_type_template_id_6a8bff5f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TicketForm_vue_vue_type_template_id_6a8bff5f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6a8bff5f",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('6a8bff5f')) {
      api.createRecord('6a8bff5f', component.options)
    } else {
      api.reload('6a8bff5f', component.options)
    }
    module.hot.accept("./views/TicketForm.vue?vue&type=template&id=6a8bff5f&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _TicketForm_vue_vue_type_template_id_6a8bff5f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./views/TicketForm.vue?vue&type=template&id=6a8bff5f&scoped=true&");
(function () {
      api.rerender('6a8bff5f', {
        render: _TicketForm_vue_vue_type_template_id_6a8bff5f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _TicketForm_vue_vue_type_template_id_6a8bff5f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "views/TicketForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./views/TicketForm.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./views/TicketForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./views/TicketForm.vue?vue&type=template&id=6a8bff5f&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketForm_vue_vue_type_template_id_6a8bff5f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./views/TicketForm.vue?vue&type=template&id=6a8bff5f&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketForm_vue_vue_type_template_id_6a8bff5f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketForm_vue_vue_type_template_id_6a8bff5f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./views/TicketOptions.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TicketOptions_vue_vue_type_template_id_139d9553_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./views/TicketOptions.vue?vue&type=template&id=139d9553&scoped=true&");
/* harmony import */ var _TicketOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./views/TicketOptions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TicketOptions_vue_vue_type_style_index_0_id_139d9553_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./views/TicketOptions.vue?vue&type=style&index=0&id=139d9553&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TicketOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TicketOptions_vue_vue_type_template_id_139d9553_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TicketOptions_vue_vue_type_template_id_139d9553_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "139d9553",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('139d9553')) {
      api.createRecord('139d9553', component.options)
    } else {
      api.reload('139d9553', component.options)
    }
    module.hot.accept("./views/TicketOptions.vue?vue&type=template&id=139d9553&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _TicketOptions_vue_vue_type_template_id_139d9553_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./views/TicketOptions.vue?vue&type=template&id=139d9553&scoped=true&");
(function () {
      api.rerender('139d9553', {
        render: _TicketOptions_vue_vue_type_template_id_139d9553_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _TicketOptions_vue_vue_type_template_id_139d9553_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "views/TicketOptions.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./views/TicketOptions.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./views/TicketOptions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./views/TicketOptions.vue?vue&type=style&index=0&id=139d9553&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketOptions_vue_vue_type_style_index_0_id_139d9553_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./views/TicketOptions.vue?vue&type=style&index=0&id=139d9553&scoped=true&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketOptions_vue_vue_type_style_index_0_id_139d9553_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketOptions_vue_vue_type_style_index_0_id_139d9553_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketOptions_vue_vue_type_style_index_0_id_139d9553_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketOptions_vue_vue_type_style_index_0_id_139d9553_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketOptions_vue_vue_type_style_index_0_id_139d9553_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./views/TicketOptions.vue?vue&type=template&id=139d9553&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketOptions_vue_vue_type_template_id_139d9553_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./views/TicketOptions.vue?vue&type=template&id=139d9553&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketOptions_vue_vue_type_template_id_139d9553_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TicketOptions_vue_vue_type_template_id_139d9553_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

},[["./main.js","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9hZG9wdGlvbi9BZG9wdGlvbkFuaW1hbERldGFpbHMudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL2Fkb3B0aW9uL0FuaW1hbENhcmQudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL2Fkb3B0aW9uL2NhdGVnb3J5LnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9idXR0b25zL0NhdGVnb3J5QnV0dG9uLnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9idXR0b25zL0ljb25CdXR0b24udnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL2xvY2F0aW9uL0FuaW1hbENlbnRlckRldGFpbHMudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL3N1Ymxpc3RzL0ZhcUluZm8udnVlIiwid2VicGFjazovLy92aWV3cy9BZG9wdGlvbi52dWUiLCJ3ZWJwYWNrOi8vL3ZpZXdzL0ZhcS52dWUiLCJ3ZWJwYWNrOi8vL3ZpZXdzL0hvbWUudnVlIiwid2VicGFjazovLy92aWV3cy9Mb2NhdGlvbi52dWUiLCJ3ZWJwYWNrOi8vL3ZpZXdzL1NlcnZpY2VSZXF1ZXN0LnZ1ZSIsIndlYnBhY2s6Ly8vdmlld3MvVGlja2V0LnZ1ZSIsIndlYnBhY2s6Ly8vdmlld3MvVGlja2V0Rm9ybS52dWUiLCJ3ZWJwYWNrOi8vL3ZpZXdzL1RpY2tldE9wdGlvbnMudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbG9jYXRpb24vQW5pbWFsQ2VudGVyRGV0YWlscy52dWU/YWQ0YyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N1Ymxpc3RzL0ZhcUluZm8udnVlPzQyNTMiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvRmFxLnZ1ZT9lMDg1Iiwid2VicGFjazovLy8uL3ZpZXdzL0hvbWUudnVlP2ZjYTciLCJ3ZWJwYWNrOi8vLy4vdmlld3MvTG9jYXRpb24udnVlP2U4YWIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hZG9wdGlvbi9BZG9wdGlvbkFuaW1hbERldGFpbHMudnVlPzg5YzUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hZG9wdGlvbi9BbmltYWxDYXJkLnZ1ZT81ZGU4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRvcHRpb24vY2F0ZWdvcnkudnVlPzMzODAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9idXR0b25zL0NhdGVnb3J5QnV0dG9uLnZ1ZT9hYTU0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9ucy9JY29uQnV0dG9uLnZ1ZT9lMDJkIiwid2VicGFjazovLy8uL3ZpZXdzL0Fkb3B0aW9uLnZ1ZT82ODExIiwid2VicGFjazovLy8uL3ZpZXdzL1NlcnZpY2VSZXF1ZXN0LnZ1ZT84Mzk0Iiwid2VicGFjazovLy8uL3ZpZXdzL1RpY2tldC52dWU/MWNiMSIsIndlYnBhY2s6Ly8vLi92aWV3cy9UaWNrZXRPcHRpb25zLnZ1ZT84MzAyIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRvcHRpb24vQWRvcHRpb25BbmltYWxEZXRhaWxzLnZ1ZT8xMzJmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRvcHRpb24vQW5pbWFsQ2FyZC52dWU/NjQ4OCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Fkb3B0aW9uL2NhdGVnb3J5LnZ1ZT9mNDRlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9ucy9DYXRlZ29yeUJ1dHRvbi52dWU/YjVhNCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbnMvSWNvbkJ1dHRvbi52dWU/NDYyNiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xvY2F0aW9uL0FuaW1hbENlbnRlckRldGFpbHMudnVlPzU3ZjAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zdWJsaXN0cy9GYXFJbmZvLnZ1ZT9lNTFjIiwid2VicGFjazovLy8uL3ZpZXdzL0Fkb3B0aW9uLnZ1ZT85YTFlIiwid2VicGFjazovLy8uL3ZpZXdzL0ZhcS52dWU/ZDA4NiIsIndlYnBhY2s6Ly8vLi92aWV3cy9Ib21lLnZ1ZT9lMWZiIiwid2VicGFjazovLy8uL3ZpZXdzL0xvY2F0aW9uLnZ1ZT8xZmFlIiwid2VicGFjazovLy8uL3ZpZXdzL1NlcnZpY2VSZXF1ZXN0LnZ1ZT9mYTNmIiwid2VicGFjazovLy8uL3ZpZXdzL1RpY2tldC52dWU/MTc2MCIsIndlYnBhY2s6Ly8vLi92aWV3cy9UaWNrZXRGb3JtLnZ1ZT9jYTk4Iiwid2VicGFjazovLy8uL3ZpZXdzL1RpY2tldE9wdGlvbnMudnVlPzk0NzQiLCJ3ZWJwYWNrOi8vLy4gc3luYyBub25yZWN1cnNpdmUgXlxcLlxcL2FwcFxcLihjc3N8c2Nzc3xsZXNzfHNhc3MpJCIsIndlYnBhY2s6Ly8vXFxiX1tcXHctXSpcXC4pc2NzcykkIiwid2VicGFjazovLy8uL0FuaW1hbENlbnRlci5zY3NzIiwid2VicGFjazovLy8uL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRvcHRpb24vQWRvcHRpb25BbmltYWxEZXRhaWxzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Fkb3B0aW9uL0Fkb3B0aW9uQW5pbWFsRGV0YWlscy52dWU/M2JkNCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Fkb3B0aW9uL0Fkb3B0aW9uQW5pbWFsRGV0YWlscy52dWU/ZTM4OCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Fkb3B0aW9uL0Fkb3B0aW9uQW5pbWFsRGV0YWlscy52dWU/N2U3YiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Fkb3B0aW9uL0FuaW1hbENhcmQudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRvcHRpb24vQW5pbWFsQ2FyZC52dWU/ZTAyOCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Fkb3B0aW9uL0FuaW1hbENhcmQudnVlPzgzYWMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hZG9wdGlvbi9BbmltYWxDYXJkLnZ1ZT9hMzc4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRvcHRpb24vY2F0ZWdvcnkudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRvcHRpb24vY2F0ZWdvcnkudnVlPzU5MzQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hZG9wdGlvbi9jYXRlZ29yeS52dWU/NjEwZiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Fkb3B0aW9uL2NhdGVnb3J5LnZ1ZT82N2VhIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9ucy9DYXRlZ29yeUJ1dHRvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9idXR0b25zL0NhdGVnb3J5QnV0dG9uLnZ1ZT9iMGE3Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9ucy9DYXRlZ29yeUJ1dHRvbi52dWU/Y2NlMyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbnMvQ2F0ZWdvcnlCdXR0b24udnVlPzk5YzIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9idXR0b25zL0ljb25CdXR0b24udnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9ucy9JY29uQnV0dG9uLnZ1ZT8wMzE0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9ucy9JY29uQnV0dG9uLnZ1ZT8zY2M2Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9ucy9JY29uQnV0dG9uLnZ1ZT8wYTVmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbG9jYXRpb24vQW5pbWFsQ2VudGVyRGV0YWlscy52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sb2NhdGlvbi9BbmltYWxDZW50ZXJEZXRhaWxzLnZ1ZT8zMWQxIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbG9jYXRpb24vQW5pbWFsQ2VudGVyRGV0YWlscy52dWU/ODg1NiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xvY2F0aW9uL0FuaW1hbENlbnRlckRldGFpbHMudnVlPzhmNTUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zdWJsaXN0cy9GYXFJbmZvLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N1Ymxpc3RzL0ZhcUluZm8udnVlPzIwNWYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zdWJsaXN0cy9GYXFJbmZvLnZ1ZT85MzMyIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3VibGlzdHMvRmFxSW5mby52dWU/YTJkYSIsIndlYnBhY2s6Ly8vLi9mb250cy9mb250LWF3ZXNvbWUuY3NzIiwid2VicGFjazovLy8uL2ZvbnRzL2lvbmljb25zLmNzcyIsIndlYnBhY2s6Ly8vLi9tYWluLmpzIiwid2VicGFjazovLy8uL21vZGVscy9BbmltYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL0ZhcS5qcyIsIndlYnBhY2s6Ly8vLi9tb2RlbHMvVGlja2V0LmpzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL0Fkb3B0aW9uU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9GYWtlRmFxU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9GYWtlVGlja2V0U2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9GYXFTZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL1RpY2tldFNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvQWRvcHRpb24udnVlIiwid2VicGFjazovLy8uL3ZpZXdzL0Fkb3B0aW9uLnZ1ZT8zZjdkIiwid2VicGFjazovLy8uL3ZpZXdzL0Fkb3B0aW9uLnZ1ZT8yYWRmIiwid2VicGFjazovLy8uL3ZpZXdzL0Fkb3B0aW9uLnZ1ZT9jNTNlIiwid2VicGFjazovLy8uL3ZpZXdzL0ZhcS52dWUiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvRmFxLnZ1ZT8wZGMwIiwid2VicGFjazovLy8uL3ZpZXdzL0ZhcS52dWU/MGM1OCIsIndlYnBhY2s6Ly8vLi92aWV3cy9GYXEudnVlPzJiNGMiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvSG9tZS52dWUiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvSG9tZS52dWU/ODg1NiIsIndlYnBhY2s6Ly8vLi92aWV3cy9Ib21lLnZ1ZT9hMGZmIiwid2VicGFjazovLy8uL3ZpZXdzL0hvbWUudnVlPzhlY2QiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvTG9jYXRpb24udnVlIiwid2VicGFjazovLy8uL3ZpZXdzL0xvY2F0aW9uLnZ1ZT9lMDAwIiwid2VicGFjazovLy8uL3ZpZXdzL0xvY2F0aW9uLnZ1ZT9kNmUxIiwid2VicGFjazovLy8uL3ZpZXdzL0xvY2F0aW9uLnZ1ZT8yNGM4Iiwid2VicGFjazovLy8uL3ZpZXdzL1NlcnZpY2VSZXF1ZXN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi92aWV3cy9TZXJ2aWNlUmVxdWVzdC52dWU/ZDJiZSIsIndlYnBhY2s6Ly8vLi92aWV3cy9TZXJ2aWNlUmVxdWVzdC52dWU/ZWVmNCIsIndlYnBhY2s6Ly8vLi92aWV3cy9TZXJ2aWNlUmVxdWVzdC52dWU/ZWE3NiIsIndlYnBhY2s6Ly8vLi92aWV3cy9UaWNrZXQudnVlIiwid2VicGFjazovLy8uL3ZpZXdzL1RpY2tldC52dWU/ZTgwNyIsIndlYnBhY2s6Ly8vLi92aWV3cy9UaWNrZXQudnVlPzI3YjUiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvVGlja2V0LnZ1ZT80ODRjIiwid2VicGFjazovLy8uL3ZpZXdzL1RpY2tldEZvcm0udnVlIiwid2VicGFjazovLy8uL3ZpZXdzL1RpY2tldEZvcm0udnVlPzBiZjUiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvVGlja2V0Rm9ybS52dWU/MTQ1MyIsIndlYnBhY2s6Ly8vLi92aWV3cy9UaWNrZXRPcHRpb25zLnZ1ZSIsIndlYnBhY2s6Ly8vLi92aWV3cy9UaWNrZXRPcHRpb25zLnZ1ZT83MzE5Iiwid2VicGFjazovLy8uL3ZpZXdzL1RpY2tldE9wdGlvbnMudnVlP2Q3YTIiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvVGlja2V0T3B0aW9ucy52dWU/MzkxZiJdLCJuYW1lcyI6WyJzdG9yZSIsIkhvbWUiLCJWdWVEZXZ0b29scyIsIlJhZExpc3RWaWV3IiwiVnVlIiwidXNlIiwicmVnaXN0ZXJFbGVtZW50IiwicmVxdWlyZSIsIlROU0ZvbnRJY29uIiwiZGVidWciLCJwYXRocyIsImxvYWRDc3MiLCJmaWx0ZXIiLCJmb250aWNvbiIsInJlbmRlciIsImgiLCIkc3RhcnQiLCJjb25zdHJ1Y3RvciIsInF1ZXN0aW9uIiwiaWQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJhbnN3ZXIiLCJjb3VudCIsImxvY2F0aW9uIiwic2V0TG9jYXRpb24iLCJxckNvZGUiLCJzZXRUaWNrZXRJbmZvIiwicGhvbmUiLCJuYW1lIiwicXVlcnkiLCJ0aW1lSW4iLCJEYXRlIiwiaHR0cE1vZHVsZSIsImdldEFuaW1hbHMiLCJnZXRKU09OIiwiZ2V0RmFxcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsImZhcXMiLCJhZGRGYXEiLCJlbnRyeSIsImFkZFRpY2tldCIsImZhcSIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJoZWFkZXJzIiwiY29udGVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aWNrZXQiLCJjaGVja1RpY2tldCIsInRpY2tldElkIiwiVnVleCIsIlN0b3JlIiwic3RhdGUiLCJhbmltYWxzIiwidGlja2V0cyIsInVzZXJBbmltYWwiLCJBbmltYWwiLCJ1c2VyRmFxIiwidXNlclRpY2tldCIsIlRpY2tldCIsImFwcHJvdmVkVGlja2V0IiwidW5kZWZpbmVkIiwibXV0YXRpb25zIiwic3RvcmVBbmltYWwiLCJhbmltYWwiLCJBRERfQU5JTUFMIiwicHVzaCIsInN0b3JlRmFxIiwic2V0VGlja2V0TG9jYXRpb24iLCJ1c2VySW5wdXQiLCJzdG9yZVRpY2tldCIsIlNFVF9USUNLRVQiLCJBRERfVElDS0VUIiwiU0VUX0ZBUVMiLCJBRERfRkFRIiwiYWN0aW9ucyIsImNvbW1pdCIsIlRpY2tldFNlcnZpY2UiLCJ0aGVuIiwicmVzIiwidG9KU09OIiwibG9hZEZhcXMiLCJGYXFTZXJ2aWNlIiwiZ2V0dGVycyIsImdldFNlYXJjaFJlc3VsdHMiLCJzZWFyY2giLCJ3b3JkcyIsInNwbGl0Iiwic29tZSIsIndvcmQiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtSUE7QUFDQSxpQkFEQTtBQUVBLGdCQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFhQTs7QUFmQSxHQUhBOztBQW9CQTtBQUNBLG1CQUNBO0FBQ0E7QUFEQSxLQURBLEVBSUE7QUFDQTtBQURBLEtBSkEsRUFPQTtBQUNBO0FBREEsS0FQQSxFQVVBO0FBQ0E7QUFEQSxLQVZBLEVBREEsQ0FlQTtBQUNBO0FBQ0EsR0FyQ0E7O0FBc0NBLGNBdENBOztBQXVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBSkE7O0FBS0E7QUFDQTtBQUNBO0FBQ0EsY0FDQSxPQURBLENBQ0E7QUFDQTtBQUNBLGdCQURBO0FBRUE7QUFGQSxTQURBO0FBS0Esb0JBTEE7QUFNQTtBQU5BLE9BREEsRUFTQSxJQVRBLENBU0E7QUFDQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxrQkFGQTtBQUdBO0FBSEE7QUFEQTtBQU9BLE9BakJBLEVBa0JBLElBbEJBLENBa0JBO0FBQ0E7QUFDQTtBQUNBLGdCQURBO0FBRUEsZ0JBRkE7QUFHQTtBQUhBO0FBREE7QUFPQSxPQTFCQSxFQTJCQSxJQTNCQSxDQTJCQSxjQTNCQTtBQTRCQSxLQXBDQTs7QUFxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUF6Q0EsR0F2Q0E7O0FBa0ZBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBO0FBRkE7QUFJQTs7QUF2RkEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwYkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxzQkFBc0I7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsU0FBUyx5QkFBeUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRDQUE0QztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwrQ0FBK0M7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CLHVCQUF1QjtBQUN2QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUyxzQ0FBc0MsRUFBRTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG1DQUFtQyxnQkFBZ0IsRUFBRTtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqTUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxTQUFTLDBCQUEwQixFQUFFO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsOEJBQThCLEVBQUU7QUFDbEQ7QUFDQTtBQUNBO0FBQ0EsYUFBYSxpQ0FBaUMsK0JBQStCLEVBQUU7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxhQUFhO0FBQ2IsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsYUFBYTtBQUNiLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUMvQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULGFBQWE7QUFDYixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssc0JBQXNCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLFNBQVMsNEJBQTRCO0FBQ3JDO0FBQ0E7QUFDQSxvQkFBb0IsdUNBQXVDO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QixlQUFlO0FBQ2Y7QUFDQTtBQUNBLGlCQUFpQixTQUFTLDJDQUEyQyxFQUFFO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIsMkJBQTJCO0FBQzNCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEMsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQix5QkFBeUI7QUFDekIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pPQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLFNBQVMsMEJBQTBCLEVBQUU7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsU0FBUyx1QkFBdUIsRUFBRTtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLFNBQVMscUJBQXFCLEdBQUcsRUFBRTtBQUM3RCwwQkFBMEIsU0FBUyx3QkFBd0IsRUFBRTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUMvQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVMsa0NBQWtDO0FBQzNDO0FBQ0E7QUFDQSxvQkFBb0IsdUNBQXVDO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxvQkFBb0I7QUFDcEIsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsdUNBQXVDLEVBQUU7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkIsdUJBQXVCO0FBQ3ZCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQix1QkFBdUI7QUFDdkIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsYUFBYTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELFNBQVMsYUFBYSxFQUFFO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNyUEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxzQkFBc0I7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1Q0FBdUM7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLG9CQUFvQjtBQUNwQixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMENBQTBDO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsb0NBQW9DLHlCQUF5QixFQUFFO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixpQkFBaUI7QUFDakIsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsNkJBQTZCLEVBQUU7QUFDakQ7QUFDQTtBQUNBO0FBQ0EsYUFBYSxzQ0FBc0MsbUJBQW1CLEVBQUU7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVMsaURBQWlELEVBQUU7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUMxSEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxzQkFBc0I7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsU0FBUyw0QkFBNEI7QUFDckM7QUFDQTtBQUNBLG9CQUFvQix1Q0FBdUM7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixtQkFBbUI7QUFDbkIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEMseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEMsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFNBQVMsaUNBQWlDLEVBQUU7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xELHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRCx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsd0JBQXdCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xELHlDQUF5QztBQUN6QyxxREFBcUQsU0FBUyxXQUFXLEVBQUU7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2UkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxzQkFBc0I7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1Q0FBdUM7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsNEJBQTRCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUMvQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsU0FBUyx1QkFBdUIsRUFBRTtBQUN6RDtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIscUJBQXFCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsU0FBUyxnQ0FBZ0MsRUFBRTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsU0FBUyw2QkFBNkIsRUFBRTtBQUMvRDtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsU0FBUyx3QkFBd0IsRUFBRTtBQUMxRDtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCx1QkFBdUIsU0FBUywrQkFBK0IsRUFBRTtBQUNqRTtBQUNBLG9CQUFvQixpQkFBaUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCx1QkFBdUIsU0FBUyxpQ0FBaUMsRUFBRTtBQUNuRTtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLG9CQUFvQix3QkFBd0I7QUFDNUMsaUJBQWlCO0FBQ2pCLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNsREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsU0FBUyx5QkFBeUIsRUFBRTtBQUMzRDtBQUNBO0FBQ0EsU0FBUyxTQUFTLCtDQUErQyxFQUFFO0FBQ25FO0FBQ0E7QUFDQTtBQUNBLGFBQWEsNkJBQTZCLDZCQUE2QixFQUFFO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTLFdBQVcsRUFBRTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBLDRCQUE0QixzQkFBc0I7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBLDRCQUE0QixlQUFlO0FBQzNDLHlCQUF5QjtBQUN6QixtQkFBbUI7QUFDbkI7QUFDQSw0QkFBNEIsd0JBQXdCO0FBQ3BELHlCQUF5QjtBQUN6QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQy9FQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRTs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEg7Ozs7Ozs7QUNwQ0EseUVBQTJCLG1CQUFPLENBQUMsNENBQTRDO0FBQy9FOzs7QUFHQTtBQUNBLGNBQWMsUUFBUzs7QUFFdkI7O0FBRUEsd0JBQXdCLG1CQUFPLENBQUMsNkRBQThCO0FBQzlELElBQUksbUJBQU8sQ0FBQyw0REFBeUM7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxRQUFRLElBQVU7QUFDbEI7QUFDQTtBQUNBLCtCQUErQiw2Q0FBNkM7QUFDNUUsU0FBUztBQUNUOzs7Ozs7Ozs7QUN4QkEseUVBQTJCLG1CQUFPLENBQUMsNENBQTRDO0FBQy9FOzs7QUFHQTtBQUNBLGNBQWMsUUFBUywwUkFBMFIsY0FBYyxXQUFXLHlCQUF5QixtQkFBbUIsZ0JBQWdCLEVBQUUsaUJBQWlCLDJCQUEyQixFQUFFLGNBQWMsZ0JBQWdCLEVBQUUsaUJBQWlCLDJCQUEyQixFQUFFLGFBQWEsbUJBQW1CLEVBQUUsZ0JBQWdCLDhCQUE4QixFQUFFLGFBQWEsbUJBQW1CLEVBQUUsZ0JBQWdCLDhCQUE4QixFQUFFLGlCQUFpQixtQkFBbUIsRUFBRSxvQkFBb0IsOEJBQThCLEVBQUUsY0FBYyxtQkFBbUIsRUFBRSxpQkFBaUIsOEJBQThCLEVBQUUsZUFBZSxtQkFBbUIsRUFBRSxrQkFBa0IsOEJBQThCLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxnQkFBZ0IsOEJBQThCLEVBQUUsbUJBQW1CLG1CQUFtQixFQUFFLHNCQUFzQiw4QkFBOEIsRUFBRSxrQkFBa0IsbUJBQW1CLEVBQUUscUJBQXFCLDhCQUE4QixFQUFFLGVBQWUsbUJBQW1CLEVBQUUsa0JBQWtCLDhCQUE4QixFQUFFLGNBQWMsbUJBQW1CLEVBQUUsaUJBQWlCLDhCQUE4QixFQUFFLGFBQWEsbUJBQW1CLEVBQUUsZ0JBQWdCLDhCQUE4QixFQUFFLGVBQWUsbUJBQW1CLEVBQUUsa0JBQWtCLDhCQUE4QixFQUFFLGFBQWEsbUJBQW1CLEVBQUUsZ0JBQWdCLDhCQUE4QixFQUFFLFlBQVksbUJBQW1CLEVBQUUsZUFBZSw4QkFBOEIsRUFBRSxpQ0FBaUMsZ0JBQWdCLEVBQUUsWUFBWSxlQUFlLEVBQUUsYUFBYSxpQkFBaUIsRUFBRSxZQUFZLGdCQUFnQixFQUFFLHNGQUFzRixTQUFTLE9BQU8sYUFBYSxPQUFPLGVBQWUsT0FBTyxnQkFBZ0IsT0FBTyxjQUFjLE9BQU8sZUFBZSxjQUFjLE9BQU8sYUFBYSxnQkFBZ0IsMEdBQTBHLGNBQWMsRUFBRSxZQUFZLGtCQUFrQixFQUFFLFlBQVksb0JBQW9CLEVBQUUsWUFBWSxxQkFBcUIsRUFBRSxZQUFZLG1CQUFtQixFQUFFLFlBQVksb0JBQW9CLG1CQUFtQixFQUFFLFlBQVksa0JBQWtCLHFCQUFxQixFQUFFLFVBQVUsY0FBYyxFQUFFLFlBQVksa0JBQWtCLEVBQUUsWUFBWSxvQkFBb0IsRUFBRSxZQUFZLHFCQUFxQixFQUFFLFlBQVksbUJBQW1CLEVBQUUsWUFBWSxvQkFBb0IsbUJBQW1CLEVBQUUsWUFBWSxrQkFBa0IscUJBQXFCLEVBQUUsVUFBVSxjQUFjLEVBQUUsWUFBWSxrQkFBa0IsRUFBRSxZQUFZLG9CQUFvQixFQUFFLFlBQVkscUJBQXFCLEVBQUUsWUFBWSxtQkFBbUIsRUFBRSxZQUFZLG9CQUFvQixtQkFBbUIsRUFBRSxZQUFZLGtCQUFrQixxQkFBcUIsRUFBRSxVQUFVLGNBQWMsRUFBRSxZQUFZLGtCQUFrQixFQUFFLFlBQVksb0JBQW9CLEVBQUUsWUFBWSxxQkFBcUIsRUFBRSxZQUFZLG1CQUFtQixFQUFFLFlBQVksb0JBQW9CLG1CQUFtQixFQUFFLFlBQVksa0JBQWtCLHFCQUFxQixFQUFFLFVBQVUsY0FBYyxFQUFFLFlBQVksa0JBQWtCLEVBQUUsWUFBWSxvQkFBb0IsRUFBRSxZQUFZLHFCQUFxQixFQUFFLFlBQVksbUJBQW1CLEVBQUUsWUFBWSxvQkFBb0IsbUJBQW1CLEVBQUUsWUFBWSxrQkFBa0IscUJBQXFCLEVBQUUsV0FBVyxlQUFlLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHFCQUFxQixvQkFBb0IsRUFBRSxhQUFhLG1CQUFtQixzQkFBc0IsRUFBRSxXQUFXLGVBQWUsRUFBRSxhQUFhLG1CQUFtQixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEscUJBQXFCLG9CQUFvQixFQUFFLGFBQWEsbUJBQW1CLHNCQUFzQixFQUFFLFdBQVcsZUFBZSxFQUFFLGFBQWEsbUJBQW1CLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxxQkFBcUIsb0JBQW9CLEVBQUUsYUFBYSxtQkFBbUIsc0JBQXNCLEVBQUUsV0FBVyxlQUFlLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHFCQUFxQixvQkFBb0IsRUFBRSxhQUFhLG1CQUFtQixzQkFBc0IsRUFBRSxXQUFXLGVBQWUsRUFBRSxhQUFhLG1CQUFtQixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEscUJBQXFCLG9CQUFvQixFQUFFLGFBQWEsbUJBQW1CLHNCQUFzQixFQUFFLFdBQVcsZUFBZSxFQUFFLGFBQWEsbUJBQW1CLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxxQkFBcUIsb0JBQW9CLEVBQUUsYUFBYSxtQkFBbUIsc0JBQXNCLEVBQUUsV0FBVyxlQUFlLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHFCQUFxQixvQkFBb0IsRUFBRSxhQUFhLG1CQUFtQixzQkFBc0IsRUFBRSxXQUFXLGVBQWUsRUFBRSxhQUFhLG1CQUFtQixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEscUJBQXFCLG9CQUFvQixFQUFFLGFBQWEsbUJBQW1CLHNCQUFzQixFQUFFLFdBQVcsZUFBZSxFQUFFLGFBQWEsbUJBQW1CLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxxQkFBcUIsb0JBQW9CLEVBQUUsYUFBYSxtQkFBbUIsc0JBQXNCLEVBQUUsVUFBVSxlQUFlLEVBQUUsWUFBWSxtQkFBbUIsRUFBRSxZQUFZLHFCQUFxQixFQUFFLFlBQVksc0JBQXNCLEVBQUUsWUFBWSxvQkFBb0IsRUFBRSxZQUFZLHFCQUFxQixvQkFBb0IsRUFBRSxZQUFZLG1CQUFtQixzQkFBc0IsRUFBRSxVQUFVLGVBQWUsRUFBRSxZQUFZLG1CQUFtQixFQUFFLFlBQVkscUJBQXFCLEVBQUUsWUFBWSxzQkFBc0IsRUFBRSxZQUFZLG9CQUFvQixFQUFFLFlBQVkscUJBQXFCLG9CQUFvQixFQUFFLFlBQVksbUJBQW1CLHNCQUFzQixFQUFFLFVBQVUsZUFBZSxFQUFFLFlBQVksbUJBQW1CLEVBQUUsWUFBWSxxQkFBcUIsRUFBRSxZQUFZLHNCQUFzQixFQUFFLFlBQVksb0JBQW9CLEVBQUUsWUFBWSxxQkFBcUIsb0JBQW9CLEVBQUUsWUFBWSxtQkFBbUIsc0JBQXNCLEVBQUUsVUFBVSxlQUFlLEVBQUUsWUFBWSxtQkFBbUIsRUFBRSxZQUFZLHFCQUFxQixFQUFFLFlBQVksc0JBQXNCLEVBQUUsWUFBWSxvQkFBb0IsRUFBRSxZQUFZLHFCQUFxQixvQkFBb0IsRUFBRSxZQUFZLG1CQUFtQixzQkFBc0IsRUFBRSxVQUFVLGVBQWUsRUFBRSxZQUFZLG1CQUFtQixFQUFFLFlBQVkscUJBQXFCLEVBQUUsWUFBWSxzQkFBc0IsRUFBRSxZQUFZLG9CQUFvQixFQUFFLFlBQVkscUJBQXFCLG9CQUFvQixFQUFFLFlBQVksbUJBQW1CLHNCQUFzQixFQUFFLFdBQVcsZ0JBQWdCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsdUJBQXVCLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixxQkFBcUIsRUFBRSxhQUFhLG9CQUFvQix1QkFBdUIsRUFBRSxXQUFXLGdCQUFnQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLHVCQUF1QixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IscUJBQXFCLEVBQUUsYUFBYSxvQkFBb0IsdUJBQXVCLEVBQUUsV0FBVyxnQkFBZ0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSx1QkFBdUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLHFCQUFxQixFQUFFLGFBQWEsb0JBQW9CLHVCQUF1QixFQUFFLFdBQVcsZ0JBQWdCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsdUJBQXVCLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixxQkFBcUIsRUFBRSxhQUFhLG9CQUFvQix1QkFBdUIsRUFBRSxXQUFXLGdCQUFnQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLHVCQUF1QixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IscUJBQXFCLEVBQUUsYUFBYSxvQkFBb0IsdUJBQXVCLEVBQUUsV0FBVyxnQkFBZ0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSx1QkFBdUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLHFCQUFxQixFQUFFLGFBQWEsb0JBQW9CLHVCQUF1QixFQUFFLFdBQVcsZ0JBQWdCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsdUJBQXVCLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixxQkFBcUIsRUFBRSxhQUFhLG9CQUFvQix1QkFBdUIsRUFBRSxXQUFXLGdCQUFnQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLHVCQUF1QixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IscUJBQXFCLEVBQUUsYUFBYSxvQkFBb0IsdUJBQXVCLEVBQUUsV0FBVyxnQkFBZ0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSx1QkFBdUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLHFCQUFxQixFQUFFLGFBQWEsb0JBQW9CLHVCQUF1QixFQUFFLCtCQUErQixjQUFjLDhCQUE4QixnQkFBZ0IsRUFBRSxjQUFjLGNBQWMsOEJBQThCLGdCQUFnQixFQUFFLGlDQUFpQyxxQkFBcUIsRUFBRSxpQkFBaUIsc0JBQXNCLEVBQUUsa0JBQWtCLHVCQUF1QixFQUFFLHFCQUFxQiw4QkFBOEIsRUFBRSxxQkFBcUIsOEJBQThCLEVBQUUsc0JBQXNCLCtCQUErQixFQUFFLHlCQUF5Qix3QkFBd0IsRUFBRSx1QkFBdUIsc0JBQXNCLEVBQUUsa0JBQWtCLHVCQUF1QixFQUFFLDhFQUE4RSxhQUFhLDhEQUE4RCxrQkFBa0IsRUFBRSxXQUFXLGtCQUFrQixFQUFFLFdBQVcsa0JBQWtCLEVBQUUsV0FBVyxrQkFBa0IsRUFBRSxXQUFXLGtCQUFrQixFQUFFLFdBQVcsa0JBQWtCLEVBQUUsV0FBVyxrQkFBa0IsRUFBRSxXQUFXLGtCQUFrQixFQUFFLFdBQVcsa0JBQWtCLEVBQUUsV0FBVyxrQkFBa0IsRUFBRSxXQUFXLGtCQUFrQixFQUFFLGtCQUFrQixxQkFBcUIsRUFBRSxpQkFBaUIsc0JBQXNCLEVBQUUsb0JBQW9CLHFCQUFxQixFQUFFLGdCQUFnQix5QkFBeUIsRUFBRSxnQkFBZ0IsMkJBQTJCLEVBQUUsaUJBQWlCLDRCQUE0QixFQUFFLGVBQWUsNkJBQTZCLEVBQUUsZUFBZSwyQkFBMkIsRUFBRSxtQkFBbUIsbUJBQW1CLEVBQUUsa0JBQWtCLG1CQUFtQixFQUFFLGlCQUFpQixtQkFBbUIsRUFBRSxpQkFBaUIsOEJBQThCLGdCQUFnQixFQUFFLGdCQUFnQiw4QkFBOEIsZ0JBQWdCLEVBQUUsaUJBQWlCLDhCQUE4QixnQkFBZ0IsRUFBRSxtQ0FBbUMsd0JBQXdCLG9CQUFvQiw2QkFBNkIsRUFBRSw4QkFBOEIsMEJBQTBCLEVBQUUseUJBQXlCLG1CQUFtQixjQUFjLGVBQWUsRUFBRSxVQUFVLG1CQUFtQixrQ0FBa0MsbUJBQW1CLGtCQUFrQix5QkFBeUIsa0JBQWtCLHNCQUFzQixFQUFFLGlDQUFpQyxrQkFBa0IsZ0NBQWdDLEVBQUUsa0JBQWtCLDhCQUE4QiwwQkFBMEIsZ0JBQWdCLEVBQUUseUNBQXlDLGdDQUFnQyw0QkFBNEIsRUFBRSwyQkFBMkIsZ0NBQWdDLEVBQUUsMkJBQTJCLGdDQUFnQyxFQUFFLDRCQUE0QixnQ0FBZ0MsRUFBRSw2QkFBNkIsZ0NBQWdDLEVBQUUsMkJBQTJCLGdDQUFnQyxFQUFFLDRCQUE0QixnQ0FBZ0Msa0JBQWtCLEVBQUUsMkJBQTJCLGdDQUFnQyxrQkFBa0IsRUFBRSw2QkFBNkIsZ0NBQWdDLEVBQUUsNkJBQTZCLGdDQUFnQyxFQUFFLDJCQUEyQixnQ0FBZ0MsRUFBRSwwQkFBMEIsZ0NBQWdDLEVBQUUsa0JBQWtCLGtDQUFrQywwQkFBMEIsbUJBQW1CLEVBQUUseUNBQXlDLGdDQUFnQyxFQUFFLDJCQUEyQixtQkFBbUIsOEJBQThCLDBCQUEwQixFQUFFLFNBQVMsa0RBQWtELEVBQUUsa0JBQWtCLHVCQUF1QixrQ0FBa0MsRUFBRSwrQkFBK0Isc0JBQXNCLDRCQUE0Qix1QkFBdUIsa0JBQWtCLEVBQUUsZ0NBQWdDLHNCQUFzQiw0QkFBNEIsd0JBQXdCLGtCQUFrQixFQUFFLHFDQUFxQyxnQ0FBZ0MsRUFBRSx3QkFBd0IsY0FBYyxFQUFFLCtCQUErQixvQkFBb0IscUJBQXFCLEVBQUUsK0JBQStCLGlCQUFpQixzQkFBc0IsRUFBRSxnRkFBZ0YsZ0NBQWdDLEVBQUUsMkNBQTJDLG9CQUFvQixzQkFBc0IsRUFBRSxrQ0FBa0MscUJBQXFCLHdCQUF3QixtQkFBbUIsRUFBRSxnQ0FBZ0Msd0JBQXdCLG1CQUFtQixFQUFFLFNBQVMsa0JBQWtCLEVBQUUsU0FBUyxrQkFBa0IsRUFBRSxTQUFTLGtCQUFrQixFQUFFLFNBQVMsa0JBQWtCLEVBQUUsU0FBUyxrQkFBa0IsRUFBRSxTQUFTLGtCQUFrQixFQUFFLFdBQVcsa0JBQWtCLEVBQUUsWUFBWSxrQkFBa0IsRUFBRSxlQUFlLGtCQUFrQixFQUFFLGtDQUFrQyxtQkFBbUIsa0JBQWtCLGNBQWMsZ0JBQWdCLEVBQUUsd0NBQXdDLDZCQUE2QixFQUFFLHlDQUF5QyxvQkFBb0IsZ0JBQWdCLGlCQUFpQix1QkFBdUIsRUFBRSx5Q0FBeUMsZ0NBQWdDLEVBQUUsd0RBQXdELHFCQUFxQixvQkFBb0IsRUFBRSxXQUFXLDJCQUEyQixFQUFFLGVBQWUsbUJBQW1CLDhCQUE4QixFQUFFLG9CQUFvQixrQkFBa0IsMkJBQTJCLG1CQUFtQix1Q0FBdUMsRUFBRSwwQ0FBMEMsOEJBQThCLEVBQUUsd0JBQXdCLDhCQUE4QixnQkFBZ0IsZ0JBQWdCLEVBQUUseUNBQXlDLHdCQUF3QixFQUFFLDJDQUEyQyx3QkFBd0IsRUFBRSw4QkFBOEIsOEJBQThCLEVBQUUsK0NBQStDLGVBQWUsY0FBYyxzQkFBc0IsMkJBQTJCLHNCQUFzQixFQUFFLGlEQUFpRCxlQUFlLGNBQWMsc0JBQXNCLDZCQUE2QixzQkFBc0IsRUFBRSw4QkFBOEIsbUJBQW1CLEVBQUUsK0NBQStDLDJCQUEyQixrQkFBa0IsRUFBRSxpREFBaUQsNkJBQTZCLGtCQUFrQixFQUFFLDJCQUEyQixlQUFlLDJCQUEyQixnQkFBZ0IsNEJBQTRCLEVBQUUsc0RBQXNELGdCQUFnQix5QkFBeUIsb0JBQW9CLGlCQUFpQiw2QkFBNkIsRUFBRSxrQ0FBa0MscUJBQXFCLGdDQUFnQyxFQUFFLCtEQUErRCx1QkFBdUIsRUFBRSxpREFBaUQsc0JBQXNCLEVBQUUsbURBQW1ELHFCQUFxQixFQUFFLGdDQUFnQywyQkFBMkIscUJBQXFCLGtCQUFrQixrQ0FBa0Msc0JBQXNCLGVBQWUsMkJBQTJCLEVBQUUsaURBQWlELHFCQUFxQixFQUFFLG1EQUFtRCxxQkFBcUIsRUFBRSxhQUFhLDhCQUE4QixFQUFFLDhCQUE4QixnQ0FBZ0MscUJBQXFCLEVBQUUsMkJBQTJCLDhCQUE4QixtQkFBbUIsRUFBRSw0Q0FBNEMsOEJBQThCLGdCQUFnQixFQUFFLDhCQUE4Qiw4QkFBOEIsbUJBQW1CLEVBQUUsZUFBZSx3QkFBd0IsOEJBQThCLGdDQUFnQyxFQUFFLDhCQUE4Qiw2QkFBNkIsa0NBQWtDLEVBQUUsdUJBQXVCLG9CQUFvQiwyQkFBMkIsZ0NBQWdDLEVBQUUsaUJBQWlCLGtCQUFrQixFQUFFLGdCQUFnQixzQkFBc0Isa0JBQWtCLEVBQUUsNEJBQTRCLHlCQUF5QixvQkFBb0Isd0JBQXdCLHdCQUF3QixpQkFBaUIscUJBQXFCLGtCQUFrQixFQUFFLGdDQUFnQyxxQkFBcUIsa0JBQWtCLHlCQUF5QixFQUFFLG9CQUFvQixnQkFBZ0IsMkJBQTJCLHFCQUFxQixFQUFFLDhCQUE4QixxQkFBcUIsdUJBQXVCLEVBQUUsY0FBYyxrQkFBa0IsdUJBQXVCLG1CQUFtQixtQkFBbUIsRUFBRSw2RkFBNkYscUJBQXFCLGtCQUFrQixFQUFFLDhCQUE4Qix5QkFBeUIseUNBQXlDLHFDQUFxQyxvQkFBb0IsRUFBRSxVQUFVLGlDQUFpQyxrQkFBa0IsRUFBRSxrQkFBa0IscUNBQXFDLEVBQUUsa0JBQWtCLHlCQUF5Qix5Q0FBeUMsb0JBQW9CLDBCQUEwQixlQUFlLGVBQWUsRUFBRSxxQkFBcUIscUJBQXFCLGVBQWUsZUFBZSxFQUFFLHFCQUFxQixzQkFBc0IsZUFBZSxlQUFlLEVBQUUsV0FBVyxrQ0FBa0MsRUFBRSxrQkFBa0Isb0JBQW9CLEVBQUUsU0FBUyxrQkFBa0IsRUFBRSxTQUFTLGtCQUFrQixFQUFFLFNBQVMsa0JBQWtCLEVBQUUsU0FBUyxrQkFBa0Isc0JBQXNCLEVBQUUsWUFBWSxrQkFBa0IscUJBQXFCLEVBQUUsZ0NBQWdDLHNCQUFzQixvQkFBb0IsRUFBRSx1REFBdUQsbUJBQW1CLEVBQUUsMkJBQTJCLGlDQUFpQyxrQkFBa0IsRUFBRSxhQUFhLG1CQUFtQixrQkFBa0IsRUFBRSxhQUFhLGtCQUFrQixtQkFBbUIsOEJBQThCLEVBQUUsMkJBQTJCLHFCQUFxQixFQUFFLFNBQVMsaUNBQWlDLEVBQUUscUNBQXFDLGdCQUFnQixFQUFFLDJCQUEyQixvQ0FBb0MsRUFBRSxZQUFZLDhCQUE4QixtQkFBbUIsRUFBRSxXQUFXLG1CQUFtQixFQUFFLG1CQUFtQixtQkFBbUIsRUFBRSxxQkFBcUIsZ0NBQWdDLEVBQUUsa0JBQWtCLGtCQUFrQixpQkFBaUIsRUFBRSxTQUFTLDBEQUEwRCxFQUFFLFVBQVUsOEJBQThCLEVBQUU7O0FBRTVtb0I7QUFDQTtBQUNBLFFBQVEsSUFBVTtBQUNsQjtBQUNBO0FBQ0EsK0JBQStCLG9DQUFvQztBQUNuRSxTQUFTO0FBQ1Q7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdIO0FBQ3ZDO0FBQ0w7QUFDcUM7OztBQUd6RztBQUM2RjtBQUM3RixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwyRkFBTTtBQUNSLEVBQUUsNEdBQU07QUFDUixFQUFFLHFIQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxJQUFVO0FBQ2QsWUFBWSxtQkFBTyxDQUFDLGtEQUFrSjtBQUN0SyxjQUFjLG1CQUFPLENBQUMsZ0RBQUs7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNCQUFzQiw0RkFBd0UsRUFBRTtBQUFBO0FBQ2hHO0FBQ0EsZ0JBQWdCLDRHQUFNO0FBQ3RCLHlCQUF5QixxSEFBZTtBQUN4QyxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNlLGdGOzs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQTJMLENBQWdCLHlQQUFHLEVBQUMsQzs7Ozs7Ozs7QUNBL007QUFBQTtBQUFBO0FBQUE7QUFBcWEsQ0FBZ0IscWNBQUcsRUFBQyxDOzs7Ozs7OztBQ0F6YjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUc7QUFDdkM7QUFDTDtBQUNxQzs7O0FBRzlGO0FBQzZGO0FBQzdGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLGdGQUFNO0FBQ1IsRUFBRSxpR0FBTTtBQUNSLEVBQUUsMEdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLElBQVU7QUFDZCxZQUFZLG1CQUFPLENBQUMsa0RBQWtKO0FBQ3RLLGNBQWMsbUJBQU8sQ0FBQyxnREFBSztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0JBQXNCLGlGQUE2RCxFQUFFO0FBQUE7QUFDckY7QUFDQSxnQkFBZ0IsaUdBQU07QUFDdEIseUJBQXlCLDBHQUFlO0FBQ3hDLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ2UsZ0Y7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBZ0wsQ0FBZ0IsOE9BQUcsRUFBQyxDOzs7Ozs7OztBQ0FwTTtBQUFBO0FBQUE7QUFBQTtBQUEwWixDQUFnQiwwYkFBRyxFQUFDLEM7Ozs7Ozs7O0FDQTlhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFtRztBQUN2QztBQUNMO0FBQ3FDOzs7QUFHNUY7QUFDNkY7QUFDN0YsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsOEVBQU07QUFDUixFQUFFLCtGQUFNO0FBQ1IsRUFBRSx3R0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksSUFBVTtBQUNkLFlBQVksbUJBQU8sQ0FBQyxrREFBa0o7QUFDdEssY0FBYyxtQkFBTyxDQUFDLGdEQUFLO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQkFBc0IsK0VBQTJELEVBQUU7QUFBQTtBQUNuRjtBQUNBLGdCQUFnQiwrRkFBTTtBQUN0Qix5QkFBeUIsd0dBQWU7QUFDeEMsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDZSxnRjs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUE4SyxDQUFnQiw0T0FBRyxFQUFDLEM7Ozs7Ozs7O0FDQWxNO0FBQUE7QUFBQTtBQUFBO0FBQXdaLENBQWdCLHdiQUFHLEVBQUMsQzs7Ozs7Ozs7QUNBNWE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlHO0FBQ3ZDO0FBQ0w7QUFDcUM7OztBQUdsRztBQUM2RjtBQUM3RixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSxvRkFBTTtBQUNSLEVBQUUscUdBQU07QUFDUixFQUFFLDhHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxJQUFVO0FBQ2QsWUFBWSxtQkFBTyxDQUFDLGtEQUFrSjtBQUN0SyxjQUFjLG1CQUFPLENBQUMsZ0RBQUs7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNCQUFzQixvRkFBaUUsRUFBRTtBQUFBO0FBQ3pGO0FBQ0EsZ0JBQWdCLHFHQUFNO0FBQ3RCLHlCQUF5Qiw4R0FBZTtBQUN4QyxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNlLGdGOzs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQW9MLENBQWdCLGtQQUFHLEVBQUMsQzs7Ozs7Ozs7QUNBeE07QUFBQTtBQUFBO0FBQUE7QUFBOFosQ0FBZ0IsOGJBQUcsRUFBQyxDOzs7Ozs7OztBQ0FsYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUc7QUFDdkM7QUFDTDtBQUNxQzs7O0FBRzlGO0FBQzZGO0FBQzdGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLGdGQUFNO0FBQ1IsRUFBRSxpR0FBTTtBQUNSLEVBQUUsMEdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLElBQVU7QUFDZCxZQUFZLG1CQUFPLENBQUMsa0RBQWtKO0FBQ3RLLGNBQWMsbUJBQU8sQ0FBQyxnREFBSztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0JBQXNCLGdGQUE2RCxFQUFFO0FBQUE7QUFDckY7QUFDQSxnQkFBZ0IsaUdBQU07QUFDdEIseUJBQXlCLDBHQUFlO0FBQ3hDLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ2UsZ0Y7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBZ0wsQ0FBZ0IsOE9BQUcsRUFBQyxDOzs7Ozs7OztBQ0FwTTtBQUFBO0FBQUE7QUFBQTtBQUEwWixDQUFnQiwwYkFBRyxFQUFDLEM7Ozs7Ozs7O0FDQTlhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE4RztBQUN2QztBQUNMO0FBQ3NDOzs7QUFHeEc7QUFDNkY7QUFDN0YsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUseUZBQU07QUFDUixFQUFFLDBHQUFNO0FBQ1IsRUFBRSxtSEFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksSUFBVTtBQUNkLFlBQVksbUJBQU8sQ0FBQyxrREFBa0o7QUFDdEssY0FBYyxtQkFBTyxDQUFDLGdEQUFLO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQkFBc0IsMEZBQXNFLEVBQUU7QUFBQTtBQUM5RjtBQUNBLGdCQUFnQiwwR0FBTTtBQUN0Qix5QkFBeUIsbUhBQWU7QUFDeEMsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDZSxnRjs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUF5TCxDQUFnQix1UEFBRyxFQUFDLEM7Ozs7Ozs7O0FDQTdNO0FBQUE7QUFBQTtBQUFBO0FBQWtkLENBQWdCLHllQUFHLEVBQUMsQzs7Ozs7Ozs7QUNBdGU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtHO0FBQ3ZDO0FBQ0w7QUFDc0M7OztBQUc1RjtBQUM2RjtBQUM3RixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSw2RUFBTTtBQUNSLEVBQUUsOEZBQU07QUFDUixFQUFFLHVHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxJQUFVO0FBQ2QsWUFBWSxtQkFBTyxDQUFDLGtEQUFrSjtBQUN0SyxjQUFjLG1CQUFPLENBQUMsZ0RBQUs7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNCQUFzQiw4RUFBMEQsRUFBRTtBQUFBO0FBQ2xGO0FBQ0EsZ0JBQWdCLDhGQUFNO0FBQ3RCLHlCQUF5Qix1R0FBZTtBQUN4QyxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNlLGdGOzs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQTZLLENBQWdCLDJPQUFHLEVBQUMsQzs7Ozs7Ozs7QUNBak07QUFBQTtBQUFBO0FBQUE7QUFBc2MsQ0FBZ0IsNmRBQUcsRUFBQyxDOzs7Ozs7OztBQ0ExZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLHlFQUEyQixtQkFBTyxDQUFDLDRDQUErQztBQUNsRjs7O0FBR0E7QUFDQSxjQUFjLFFBQVMseU9BQXlPLCtCQUErQix5REFBeUQsc1hBQXNYLHdCQUF3Qix1QkFBdUIsR0FBRyxPQUFPLDBCQUEwQixrREFBa0QsdUJBQXVCLHlCQUF5Qix3Q0FBd0MsdUNBQXVDLEdBQUcsMEVBQTBFLDRCQUE0Qix3QkFBd0IseUJBQXlCLEdBQUcsVUFBVSxtQkFBbUIsR0FBRyxVQUFVLG1CQUFtQixHQUFHLFVBQVUsbUJBQW1CLEdBQUcsVUFBVSxtQkFBbUIsR0FBRyxVQUFVLHdCQUF3Qix1QkFBdUIsR0FBRyxVQUFVLG9CQUFvQiw4QkFBOEIsMEJBQTBCLEdBQUcsZUFBZSx1QkFBdUIsR0FBRyxVQUFVLHVCQUF1Qix3QkFBd0Isd0JBQXdCLHNCQUFzQix1QkFBdUIsR0FBRyxnQkFBZ0Isd0JBQXdCLEdBQUcsY0FBYyw4QkFBOEIsaUNBQWlDLHdCQUF3QixHQUFHLGlCQUFpQixnQkFBZ0IsR0FBRyxrQkFBa0IsaUJBQWlCLEdBQUcsb0JBQW9CLHVCQUF1QixHQUFHLHFCQUFxQixzQkFBc0IsR0FBRyw2Q0FBNkMsaUJBQWlCLEdBQUcsY0FBYyxnQkFBZ0IsR0FBRyxpQkFBaUIsdUJBQXVCLEdBQUcsa0JBQWtCLHNCQUFzQixHQUFHLFlBQVksa0RBQWtELDBDQUEwQyxHQUFHLGFBQWEsb0RBQW9ELDRDQUE0QyxHQUFHLDhCQUE4QixRQUFRLHNDQUFzQyw4QkFBOEIsS0FBSyxVQUFVLHdDQUF3QyxnQ0FBZ0MsS0FBSyxHQUFHLHNCQUFzQixRQUFRLHNDQUFzQyw4QkFBOEIsS0FBSyxVQUFVLHdDQUF3QyxnQ0FBZ0MsS0FBSyxHQUFHLGlCQUFpQiw2RUFBNkUscUNBQXFDLGlDQUFpQyw2QkFBNkIsR0FBRyxrQkFBa0IsNkVBQTZFLHNDQUFzQyxrQ0FBa0MsOEJBQThCLEdBQUcsa0JBQWtCLDZFQUE2RSxzQ0FBc0Msa0NBQWtDLDhCQUE4QixHQUFHLHVCQUF1Qix1RkFBdUYsb0NBQW9DLGdDQUFnQyw0QkFBNEIsR0FBRyxxQkFBcUIsdUZBQXVGLG9DQUFvQyxnQ0FBZ0MsNEJBQTRCLEdBQUcsMkhBQTJILGlCQUFpQixHQUFHLGFBQWEsdUJBQXVCLDBCQUEwQixlQUFlLGdCQUFnQixxQkFBcUIsMkJBQTJCLEdBQUcsK0JBQStCLHVCQUF1QixZQUFZLGdCQUFnQix1QkFBdUIsR0FBRyxnQkFBZ0IseUJBQXlCLEdBQUcsZ0JBQWdCLG1CQUFtQixHQUFHLGVBQWUsbUJBQW1CLEdBQUcsb0tBQW9LLHdCQUF3QixHQUFHLG9CQUFvQix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLG9CQUFvQix3QkFBd0IsR0FBRyxtQkFBbUIsd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLG1CQUFtQix3QkFBd0IsR0FBRyxtQkFBbUIsd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLGlCQUFpQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsb0JBQW9CLHdCQUF3QixHQUFHLDJEQUEyRCx3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMkJBQTJCLHdCQUF3QixHQUFHLHdCQUF3Qix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcsb0NBQW9DLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxtQkFBbUIsd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxtQkFBbUIsd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLGtDQUFrQyx3QkFBd0IsR0FBRyxnQ0FBZ0Msd0JBQXdCLEdBQUcsb0JBQW9CLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRywrQ0FBK0Msd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyxtQkFBbUIsd0JBQXdCLEdBQUcsbUJBQW1CLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLHdCQUF3Qix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLGtCQUFrQix3QkFBd0IsR0FBRyxtQkFBbUIsd0JBQXdCLEdBQUcsbUJBQW1CLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyxvQkFBb0Isd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLG1CQUFtQix3QkFBd0IsR0FBRyxtQkFBbUIsd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLDJCQUEyQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLG1CQUFtQix3QkFBd0IsR0FBRywwQ0FBMEMsd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLDJCQUEyQix3QkFBd0IsR0FBRyw4REFBOEQsd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcsbUJBQW1CLHdCQUF3QixHQUFHLGdEQUFnRCx3QkFBd0IsR0FBRyw2QkFBNkIsd0JBQXdCLEdBQUcsNkJBQTZCLHdCQUF3QixHQUFHLHFCQUFxQix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyxtQkFBbUIsd0JBQXdCLEdBQUcsb0JBQW9CLHdCQUF3QixHQUFHLG1CQUFtQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsMkJBQTJCLHdCQUF3QixHQUFHLDJCQUEyQix3QkFBd0IsR0FBRyxvQkFBb0Isd0JBQXdCLEdBQUcsMkJBQTJCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMkJBQTJCLHdCQUF3QixHQUFHLDJCQUEyQix3QkFBd0IsR0FBRywyQkFBMkIsd0JBQXdCLEdBQUcsOEJBQThCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcsNkJBQTZCLHdCQUF3QixHQUFHLDZCQUE2Qix3QkFBd0IsR0FBRyxrQkFBa0Isd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLDhDQUE4Qyx3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLG1CQUFtQix3QkFBd0IsR0FBRyxvQkFBb0Isd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLGlDQUFpQyx3QkFBd0IsR0FBRyxtQkFBbUIsd0JBQXdCLEdBQUcsbUJBQW1CLHdCQUF3QixHQUFHLG1CQUFtQix3QkFBd0IsR0FBRyxrQkFBa0Isd0JBQXdCLEdBQUcsd0JBQXdCLHdCQUF3QixHQUFHLHdEQUF3RCx3QkFBd0IsR0FBRyxvQkFBb0Isd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLHFCQUFxQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRywyQkFBMkIsd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcsaURBQWlELHdCQUF3QixHQUFHLDZCQUE2Qix3QkFBd0IsR0FBRyw4QkFBOEIsd0JBQXdCLEdBQUcsMkJBQTJCLHdCQUF3QixHQUFHLGtCQUFrQix3QkFBd0IsR0FBRyxzQ0FBc0Msd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsd0JBQXdCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcsOEJBQThCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHFCQUFxQix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxvQkFBb0Isd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRywyQkFBMkIsd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLCtDQUErQyx3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRyxvQ0FBb0Msd0JBQXdCLEdBQUcsb0JBQW9CLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyxtQkFBbUIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDJCQUEyQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsd0JBQXdCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRyxnQ0FBZ0Msd0JBQXdCLEdBQUcsaUNBQWlDLHdCQUF3QixHQUFHLDhCQUE4Qix3QkFBd0IsR0FBRyxnQ0FBZ0Msd0JBQXdCLEdBQUcsb0JBQW9CLHdCQUF3QixHQUFHLHFCQUFxQix3QkFBd0IsR0FBRyxvQkFBb0Isd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLHdCQUF3Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcsdUNBQXVDLHdCQUF3QixHQUFHLHNDQUFzQyx3QkFBd0IsR0FBRyxvQkFBb0Isd0JBQXdCLEdBQUcsb0JBQW9CLHdCQUF3QixHQUFHLHdDQUF3Qyx3QkFBd0IsR0FBRyx3Q0FBd0Msd0JBQXdCLEdBQUcsd0JBQXdCLHdCQUF3QixHQUFHLHlDQUF5Qyx3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcsNkRBQTZELHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLHdCQUF3Qix3QkFBd0IsR0FBRyxvQkFBb0Isd0JBQXdCLEdBQUcsb0JBQW9CLHdCQUF3QixHQUFHLG9CQUFvQix3QkFBd0IsR0FBRyx3QkFBd0Isd0JBQXdCLEdBQUcsK0JBQStCLHdCQUF3QixHQUFHLGlDQUFpQyx3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsb0JBQW9CLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcseUNBQXlDLHdCQUF3QixHQUFHLCtDQUErQyx3QkFBd0IsR0FBRyw0Q0FBNEMsd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyw0Q0FBNEMsd0JBQXdCLEdBQUcsdUNBQXVDLHdCQUF3QixHQUFHLGdEQUFnRCx3QkFBd0IsR0FBRyx3QkFBd0Isd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHNDQUFzQyx3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLDJDQUEyQyx3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLDZCQUE2Qix3QkFBd0IsR0FBRywyQkFBMkIsd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLHFCQUFxQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcsd0JBQXdCLHdCQUF3QixHQUFHLHFCQUFxQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsbUJBQW1CLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsZ0NBQWdDLHdCQUF3QixHQUFHLGlDQUFpQyx3QkFBd0IsR0FBRyw4QkFBOEIsd0JBQXdCLEdBQUcsZ0NBQWdDLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLHFCQUFxQix3QkFBd0IsR0FBRywrQ0FBK0Msd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHFCQUFxQix3QkFBd0IsR0FBRyw0Q0FBNEMsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxvQkFBb0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcsNkJBQTZCLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyxtQkFBbUIsd0JBQXdCLEdBQUcsb0RBQW9ELHdCQUF3QixHQUFHLG1GQUFtRix3QkFBd0IsR0FBRyw2QkFBNkIsd0JBQXdCLEdBQUcsbUJBQW1CLHdCQUF3QixHQUFHLHdCQUF3Qix3QkFBd0IsR0FBRywrQ0FBK0Msd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLG1CQUFtQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLHdCQUF3Qix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcsMkJBQTJCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRywrQkFBK0Isd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyxnQ0FBZ0Msd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLHFCQUFxQix3QkFBd0IsR0FBRyxrQ0FBa0Msd0JBQXdCLEdBQUcsbUNBQW1DLHdCQUF3QixHQUFHLGdDQUFnQyx3QkFBd0IsR0FBRyxrQ0FBa0Msd0JBQXdCLEdBQUcsb0JBQW9CLHdCQUF3QixHQUFHLG1CQUFtQix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLDJCQUEyQix3QkFBd0IsR0FBRyw2QkFBNkIsd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRywyQkFBMkIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLG1DQUFtQyx3QkFBd0IsR0FBRywyQkFBMkIsd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLDJEQUEyRCx3QkFBd0IsR0FBRyx1REFBdUQsd0JBQXdCLEdBQUcsNkRBQTZELHdCQUF3QixHQUFHLG9DQUFvQyx3QkFBd0IsR0FBRyxrQkFBa0Isd0JBQXdCLEdBQUcsc0NBQXNDLHdCQUF3QixHQUFHLHFDQUFxQyx3QkFBd0IsR0FBRyxxRUFBcUUsd0JBQXdCLEdBQUcseURBQXlELHdCQUF3QixHQUFHLG1DQUFtQyx3QkFBd0IsR0FBRyx1Q0FBdUMsd0JBQXdCLEdBQUcsbUJBQW1CLHdCQUF3QixHQUFHLHdCQUF3Qix3QkFBd0IsR0FBRyw2QkFBNkIsd0JBQXdCLEdBQUcsOEJBQThCLHdCQUF3QixHQUFHLDhCQUE4Qix3QkFBd0IsR0FBRywrQkFBK0Isd0JBQXdCLEdBQUcsK0JBQStCLHdCQUF3QixHQUFHLGdDQUFnQyx3QkFBd0IsR0FBRyx3QkFBd0Isd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDZCQUE2Qix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsbUJBQW1CLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywyQkFBMkIsd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLDZCQUE2Qix3QkFBd0IsR0FBRyx3QkFBd0Isd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLGtCQUFrQix3QkFBd0IsR0FBRyx3QkFBd0Isd0JBQXdCLEdBQUcsK0JBQStCLHdCQUF3QixHQUFHLHFCQUFxQix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsOEJBQThCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw4QkFBOEIsd0JBQXdCLEdBQUcsK0JBQStCLHdCQUF3QixHQUFHLG9CQUFvQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLG9CQUFvQix3QkFBd0IsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcsb0JBQW9CLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLG1CQUFtQix3QkFBd0IsR0FBRywyQ0FBMkMsd0JBQXdCLEdBQUcsb0JBQW9CLHdCQUF3QixHQUFHLHFCQUFxQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsa0JBQWtCLHdCQUF3QixHQUFHLGlCQUFpQix3QkFBd0IsR0FBRyxvQkFBb0Isd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLHdCQUF3Qix3QkFBd0IsR0FBRyw2QkFBNkIsd0JBQXdCLEdBQUcsbUNBQW1DLHdCQUF3QixHQUFHLGtDQUFrQyx3QkFBd0IsR0FBRywyREFBMkQsd0JBQXdCLEdBQUcsMkJBQTJCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRywyQkFBMkIsd0JBQXdCLEdBQUcsNENBQTRDLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsb0JBQW9CLHdCQUF3QixHQUFHLDhCQUE4Qix3QkFBd0IsR0FBRyx3QkFBd0Isd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLG9FQUFvRSx3QkFBd0IsR0FBRyx1REFBdUQsd0JBQXdCLEdBQUcsb0JBQW9CLHdCQUF3QixHQUFHLHFCQUFxQix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLGlDQUFpQyx3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsd0JBQXdCLHdCQUF3QixHQUFHLG1CQUFtQix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNkJBQTZCLHdCQUF3QixHQUFHLHFCQUFxQix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLGtCQUFrQix3QkFBd0IsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcsb0JBQW9CLHdCQUF3QixHQUFHLGtCQUFrQix3QkFBd0IsR0FBRyxvQkFBb0Isd0JBQXdCLEdBQUcsbUJBQW1CLHdCQUF3QixHQUFHLG9CQUFvQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsNkJBQTZCLHdCQUF3QixHQUFHLG9CQUFvQix3QkFBd0IsR0FBRywyQkFBMkIsd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLDBDQUEwQyx3QkFBd0IsR0FBRyxvQ0FBb0Msd0JBQXdCLEdBQUcsbUJBQW1CLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDJCQUEyQix3QkFBd0IsR0FBRyxnQ0FBZ0Msd0JBQXdCLEdBQUcsaUZBQWlGLHdCQUF3QixHQUFHLHFEQUFxRCx3QkFBd0IsR0FBRyxxREFBcUQsd0JBQXdCLEdBQUcscURBQXFELHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRyxtQkFBbUIsd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyxtSEFBbUgsd0JBQXdCLEdBQUcsNkJBQTZCLHdCQUF3QixHQUFHLDREQUE0RCx3QkFBd0IsR0FBRyxxQ0FBcUMsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLGtCQUFrQix3QkFBd0IsR0FBRyxrRkFBa0Ysd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLGlCQUFpQix3QkFBd0IsR0FBRyx5Q0FBeUMsd0JBQXdCLEdBQUcsNENBQTRDLHdCQUF3QixHQUFHLGdEQUFnRCx3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLHFCQUFxQix3QkFBd0IsR0FBRyx3QkFBd0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHdCQUF3Qix3QkFBd0IsR0FBRywrQkFBK0Isd0JBQXdCLEdBQUcsbUJBQW1CLHdCQUF3QixHQUFHLGtEQUFrRCx3QkFBd0IsR0FBRyxrQkFBa0Isd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLG1CQUFtQix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLG1CQUFtQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsbUJBQW1CLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyx3QkFBd0Isd0JBQXdCLEdBQUcsd0JBQXdCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRywyQkFBMkIsd0JBQXdCLEdBQUcsb0JBQW9CLHdCQUF3QixHQUFHLHdCQUF3Qix3QkFBd0IsR0FBRyxpQkFBaUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHdCQUF3Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcsd0JBQXdCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxrQkFBa0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHdCQUF3Qix3QkFBd0IsR0FBRyxpQkFBaUIsd0JBQXdCLEdBQUcsMERBQTBELHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcsNkJBQTZCLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHFCQUFxQix3QkFBd0IsR0FBRywyQkFBMkIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyx3QkFBd0Isd0JBQXdCLEdBQUcsOEJBQThCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxtQkFBbUIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsd0JBQXdCLHdCQUF3QixHQUFHLG9CQUFvQix3QkFBd0IsR0FBRyxtQkFBbUIsd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLGdEQUFnRCx3QkFBd0IsR0FBRyw4QkFBOEIsd0JBQXdCLEdBQUcsMkJBQTJCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyxnQ0FBZ0Msd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcsd0JBQXdCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyxxQ0FBcUMsd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLG9CQUFvQix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLDJDQUEyQyx3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLDJCQUEyQix3QkFBd0IsR0FBRyx1RUFBdUUsd0JBQXdCLEdBQUcsNERBQTRELHdCQUF3QixHQUFHLGtEQUFrRCx3QkFBd0IsR0FBRyxxREFBcUQsd0JBQXdCLEdBQUcsbURBQW1ELHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcsMkJBQTJCLHdCQUF3QixHQUFHLDZCQUE2Qix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLHFCQUFxQix3QkFBd0IsR0FBRyw2QkFBNkIsd0JBQXdCLEdBQUcsb0JBQW9CLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsdURBQXVELHdCQUF3QixHQUFHLHNEQUFzRCx3QkFBd0IsR0FBRyxxREFBcUQsd0JBQXdCLEdBQUcsd0JBQXdCLHdCQUF3QixHQUFHLG1EQUFtRCx3QkFBd0IsR0FBRyxvREFBb0Qsd0JBQXdCLEdBQUcsOEJBQThCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRywyQkFBMkIsd0JBQXdCLEdBQUcsNkJBQTZCLHdCQUF3QixHQUFHLDJCQUEyQix3QkFBd0IsR0FBRyx3QkFBd0Isd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLCtCQUErQix3QkFBd0IsR0FBRyxpQkFBaUIsd0JBQXdCLEdBQUcsd0JBQXdCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsbUNBQW1DLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLHFCQUFxQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsb0JBQW9CLHdCQUF3QixHQUFHLGdDQUFnQyx3QkFBd0IsR0FBRyx5Q0FBeUMsd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLG9CQUFvQix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcsOEJBQThCLHdCQUF3QixHQUFHLCtCQUErQix3QkFBd0IsR0FBRywrQkFBK0Isd0JBQXdCLEdBQUcsK0JBQStCLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsd0JBQXdCLHdCQUF3QixHQUFHLG9CQUFvQix3QkFBd0IsR0FBRyxrQkFBa0Isd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLDJCQUEyQix3QkFBd0IsR0FBRyxvQkFBb0Isd0JBQXdCLEdBQUcsb0JBQW9CLHdCQUF3QixHQUFHLHdCQUF3Qix3QkFBd0IsR0FBRyx3QkFBd0Isd0JBQXdCLEdBQUcsMkJBQTJCLHdCQUF3QixHQUFHLG1CQUFtQix3QkFBd0IsR0FBRyw4QkFBOEIsd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLG1CQUFtQix3QkFBd0IsR0FBRywyQkFBMkIsd0JBQXdCLEdBQUcsa0JBQWtCLHdCQUF3QixHQUFHLDJCQUEyQix3QkFBd0IsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLDJCQUEyQix3QkFBd0IsR0FBRyw2QkFBNkIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRywyQkFBMkIsd0JBQXdCLEdBQUcsOEJBQThCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyx3QkFBd0Isd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcsK0JBQStCLHdCQUF3QixHQUFHLDZCQUE2Qix3QkFBd0IsR0FBRyxnQ0FBZ0Msd0JBQXdCLEdBQUcsb0JBQW9CLHdCQUF3QixHQUFHLGdDQUFnQyx3QkFBd0IsR0FBRyxtQ0FBbUMsd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLDBDQUEwQyx3QkFBd0IsR0FBRyxnRkFBZ0Ysd0JBQXdCLEdBQUcsc0VBQXNFLHdCQUF3QixHQUFHLG9CQUFvQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsaURBQWlELHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyw2QkFBNkIsd0JBQXdCLEdBQUcsOEJBQThCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsb0JBQW9CLHdCQUF3QixHQUFHLHdCQUF3Qix3QkFBd0IsR0FBRyxtRUFBbUUsd0JBQXdCLEdBQUcsMkNBQTJDLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsOEJBQThCLHdCQUF3QixHQUFHLHFCQUFxQix3QkFBd0IsR0FBRywyQkFBMkIsd0JBQXdCLEdBQUcsNkJBQTZCLHdCQUF3QixHQUFHLDhDQUE4Qyx3QkFBd0IsR0FBRyxrREFBa0Qsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLG1EQUFtRCx3QkFBd0IsR0FBRyx1REFBdUQsd0JBQXdCLEdBQUcsb0JBQW9CLHdCQUF3QixHQUFHLDZCQUE2Qix3QkFBd0IsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcsbUZBQW1GLHdCQUF3QixHQUFHLG9FQUFvRSx3QkFBd0IsR0FBRywwREFBMEQsd0JBQXdCLEdBQUcsNkRBQTZELHdCQUF3QixHQUFHLDJEQUEyRCx3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcseURBQXlELHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyw4QkFBOEIsd0JBQXdCLEdBQUcsOEJBQThCLHdCQUF3QixHQUFHLDZCQUE2Qix3QkFBd0IsR0FBRyx3REFBd0Qsd0JBQXdCLEdBQUcsNERBQTRELHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyxtQkFBbUIsd0JBQXdCLEdBQUcsbUJBQW1CLHdCQUF3QixHQUFHLG1CQUFtQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHdCQUF3Qix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcsWUFBWSx1QkFBdUIsZUFBZSxnQkFBZ0IsZUFBZSxpQkFBaUIscUJBQXFCLDJCQUEyQixjQUFjLEdBQUcsd0RBQXdELHFCQUFxQixnQkFBZ0IsaUJBQWlCLGNBQWMsc0JBQXNCLGVBQWUsR0FBRzs7QUFFbDF4Qzs7QUFFQSx3QkFBd0IsbUJBQU8sQ0FBQyw2REFBOEI7QUFDOUQsSUFBSSxtQkFBTyxDQUFDLDREQUF5Qzs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFFBQVEsSUFBVTtBQUNsQjtBQUNBO0FBQ0EsK0JBQStCLGtEQUFrRDtBQUNqRixTQUFTO0FBQ1Q7Ozs7Ozs7OztBQ3hCQSx5RUFBMkIsbUJBQU8sQ0FBQyw0Q0FBK0M7QUFDbEY7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLHdCQUF3QixxQkFBcUIsRUFBRSwrQkFBK0IscUJBQXFCLEVBQUUsNkJBQTZCLHFCQUFxQixFQUFFLG9DQUFvQyxxQkFBcUIsRUFBRSxxQ0FBcUMscUJBQXFCLEVBQUUsK0JBQStCLHFCQUFxQixFQUFFLDhCQUE4QixxQkFBcUIsRUFBRSxpQ0FBaUMscUJBQXFCLEVBQUUsb0NBQW9DLHFCQUFxQixFQUFFLG9DQUFvQyxxQkFBcUIsRUFBRSx3Q0FBd0MscUJBQXFCLEVBQUUsK0NBQStDLHFCQUFxQixFQUFFLHdDQUF3QyxxQkFBcUIsRUFBRSwrQ0FBK0MscUJBQXFCLEVBQUUseUNBQXlDLHFCQUFxQixFQUFFLGdEQUFnRCxxQkFBcUIsRUFBRSxzQ0FBc0MscUJBQXFCLEVBQUUsNkNBQTZDLHFCQUFxQixFQUFFLHVDQUF1QyxxQkFBcUIsRUFBRSxrQ0FBa0MscUJBQXFCLEVBQUUsZ0NBQWdDLHFCQUFxQixFQUFFLDZCQUE2QixxQkFBcUIsRUFBRSxpQ0FBaUMscUJBQXFCLEVBQUUsOEJBQThCLHFCQUFxQixFQUFFLGtDQUFrQyxxQkFBcUIsRUFBRSw4QkFBOEIscUJBQXFCLEVBQUUsNkJBQTZCLHFCQUFxQixFQUFFLGtDQUFrQyxxQkFBcUIsRUFBRSw4QkFBOEIscUJBQXFCLEVBQUUsZ0NBQWdDLHFCQUFxQixFQUFFLGdDQUFnQyxxQkFBcUIsRUFBRSw2QkFBNkIscUJBQXFCLEVBQUUsOEJBQThCLHFCQUFxQixFQUFFLDhCQUE4QixxQkFBcUIsRUFBRSxrQ0FBa0MscUJBQXFCLEVBQUUsd0NBQXdDLHFCQUFxQixFQUFFLDBDQUEwQyxxQkFBcUIsRUFBRSxnREFBZ0QscUJBQXFCLEVBQUUsMENBQTBDLHFCQUFxQixFQUFFLG1DQUFtQyxxQkFBcUIsRUFBRSwrQkFBK0IscUJBQXFCLEVBQUUsK0JBQStCLHFCQUFxQixFQUFFLHNDQUFzQyxxQkFBcUIsRUFBRSxvQ0FBb0MscUJBQXFCLEVBQUUsdUNBQXVDLHFCQUFxQixFQUFFLHVDQUF1QyxxQkFBcUIsRUFBRSxpQ0FBaUMscUJBQXFCLEVBQUUsaUNBQWlDLHFCQUFxQixFQUFFLGtDQUFrQyxxQkFBcUIsRUFBRSxrQ0FBa0MscUJBQXFCLEVBQUUsZ0NBQWdDLHFCQUFxQixFQUFFLGdDQUFnQyxxQkFBcUIsRUFBRSxpQ0FBaUMscUJBQXFCLEVBQUUsa0NBQWtDLHFCQUFxQixFQUFFLDhCQUE4QixxQkFBcUIsRUFBRSxrQ0FBa0MscUJBQXFCLEVBQUUsa0NBQWtDLHFCQUFxQixFQUFFLGdDQUFnQyxxQkFBcUIsRUFBRSw4QkFBOEIscUJBQXFCLEVBQUUsZ0NBQWdDLHFCQUFxQixFQUFFLGtDQUFrQyxxQkFBcUIsRUFBRSwwQ0FBMEMscUJBQXFCLEVBQUUsOEJBQThCLHFCQUFxQixFQUFFLGdDQUFnQyxxQkFBcUIsRUFBRSxxQ0FBcUMscUJBQXFCLEVBQUUsZ0NBQWdDLHFCQUFxQixFQUFFLCtCQUErQixxQkFBcUIsRUFBRSw4QkFBOEIscUJBQXFCLEVBQUUsaUNBQWlDLHFCQUFxQixFQUFFLCtCQUErQixxQkFBcUIsRUFBRSw4QkFBOEIscUJBQXFCLEVBQUUsK0JBQStCLHFCQUFxQixFQUFFLGdDQUFnQyxxQkFBcUIsRUFBRSw4QkFBOEIscUJBQXFCLEVBQUUsZ0NBQWdDLHFCQUFxQixFQUFFLDhCQUE4QixxQkFBcUIsRUFBRSw4QkFBOEIscUJBQXFCLEVBQUUsNkJBQTZCLHFCQUFxQixFQUFFLDhCQUE4QixxQkFBcUIsRUFBRSxvQ0FBb0MscUJBQXFCLEVBQUUsd0NBQXdDLHFCQUFxQixFQUFFLHlDQUF5QyxxQkFBcUIsRUFBRSx1Q0FBdUMscUJBQXFCLEVBQUUsa0NBQWtDLHFCQUFxQixFQUFFLHVDQUF1QyxxQkFBcUIsRUFBRSw0Q0FBNEMscUJBQXFCLEVBQUUsMkNBQTJDLHFCQUFxQixFQUFFLDhCQUE4QixxQkFBcUIsRUFBRSxpQ0FBaUMscUJBQXFCLEVBQUUsZ0NBQWdDLHFCQUFxQixFQUFFLGdDQUFnQyxxQkFBcUIsRUFBRSxvQ0FBb0MscUJBQXFCLEVBQUUseUNBQXlDLHFCQUFxQixFQUFFLHdDQUF3QyxxQkFBcUIsRUFBRSw2QkFBNkIscUJBQXFCLEVBQUUsK0JBQStCLHFCQUFxQixFQUFFLG1DQUFtQyxxQkFBcUIsRUFBRSwrQkFBK0IscUJBQXFCLEVBQUUsMENBQTBDLHFCQUFxQixFQUFFLHlDQUF5QyxxQkFBcUIsRUFBRSxpQ0FBaUMscUJBQXFCLEVBQUUsZ0NBQWdDLHFCQUFxQixFQUFFLHVDQUF1QyxxQkFBcUIsRUFBRSxvQ0FBb0MscUJBQXFCLEVBQUUsNkJBQTZCLHFCQUFxQixFQUFFLGdDQUFnQyxxQkFBcUIsRUFBRSw4QkFBOEIscUJBQXFCLEVBQUUsa0NBQWtDLHFCQUFxQixFQUFFLCtCQUErQixxQkFBcUIsRUFBRSxtQ0FBbUMscUJBQXFCLEVBQUUsOEJBQThCLHFCQUFxQixFQUFFLG1DQUFtQyxxQkFBcUIsRUFBRSxzQ0FBc0MscUJBQXFCLEVBQUUsbUNBQW1DLHFCQUFxQixFQUFFLGdDQUFnQyxxQkFBcUIsRUFBRSwrQkFBK0IscUJBQXFCLEVBQUUsOEJBQThCLHFCQUFxQixFQUFFLGlDQUFpQyxxQkFBcUIsRUFBRSw4QkFBOEIscUJBQXFCLEVBQUUsK0JBQStCLHFCQUFxQixFQUFFLGdDQUFnQyxxQkFBcUIsRUFBRSxnQ0FBZ0MscUJBQXFCLEVBQUUscUNBQXFDLHFCQUFxQixFQUFFLHFDQUFxQyxxQkFBcUIsRUFBRSxvQ0FBb0MscUJBQXFCLEVBQUUsbUNBQW1DLHFCQUFxQixFQUFFLDhCQUE4QixxQkFBcUIsRUFBRSxpQ0FBaUMscUJBQXFCLEVBQUUsK0JBQStCLHFCQUFxQixFQUFFLDhCQUE4QixxQkFBcUIsRUFBRSwwQkFBMEIscUJBQXFCLEVBQUUseUJBQXlCLHFCQUFxQixFQUFFLDhCQUE4QixxQkFBcUIsRUFBRSw4QkFBOEIscUJBQXFCLEVBQUUsOEJBQThCLHFCQUFxQixFQUFFLDhCQUE4QixxQkFBcUIsRUFBRSx1Q0FBdUMscUJBQXFCLEVBQUUsd0NBQXdDLHFCQUFxQixFQUFFLHFDQUFxQyxxQkFBcUIsRUFBRSxzQ0FBc0MscUJBQXFCLEVBQUUsOEJBQThCLHFCQUFxQixFQUFFLDhCQUE4QixxQkFBcUIsRUFBRSw4QkFBOEIscUJBQXFCLEVBQUUsNEJBQTRCLHFCQUFxQixFQUFFLDhCQUE4QixxQkFBcUIsRUFBRSxtQ0FBbUMscUJBQXFCLEVBQUUsb0NBQW9DLHFCQUFxQixFQUFFLCtCQUErQixxQkFBcUIsRUFBRSwrQkFBK0IscUJBQXFCLEVBQUUsK0JBQStCLHFCQUFxQixFQUFFLDhCQUE4QixxQkFBcUIsRUFBRSw0QkFBNEIscUJBQXFCLEVBQUUsNEJBQTRCLHFCQUFxQixFQUFFLDRCQUE0QixxQkFBcUIsRUFBRSw0QkFBNEIscUJBQXFCLEVBQUUsMEJBQTBCLHFCQUFxQixFQUFFLG9CQUFvQixxQkFBcUIsRUFBRSwyQkFBMkIscUJBQXFCLEVBQUUsbUNBQW1DLHFCQUFxQixFQUFFLHFCQUFxQixxQkFBcUIsRUFBRSxrQ0FBa0MscUJBQXFCLEVBQUUsK0JBQStCLHFCQUFxQixFQUFFLDhCQUE4QixxQkFBcUIsRUFBRSw4QkFBOEIscUJBQXFCLEVBQUUsNkJBQTZCLHFCQUFxQixFQUFFLHdCQUF3QixxQkFBcUIsRUFBRSxzQkFBc0IscUJBQXFCLEVBQUUsMkJBQTJCLHFCQUFxQixFQUFFLHlCQUF5QixxQkFBcUIsRUFBRSwwQkFBMEIscUJBQXFCLEVBQUUsd0JBQXdCLHFCQUFxQixFQUFFLDJCQUEyQixxQkFBcUIsRUFBRSxxQkFBcUIscUJBQXFCLEVBQUUsNEJBQTRCLHFCQUFxQixFQUFFLDBCQUEwQixxQkFBcUIsRUFBRSx3QkFBd0IscUJBQXFCLEVBQUUsc0JBQXNCLHFCQUFxQixFQUFFLHNCQUFzQixxQkFBcUIsRUFBRSx5QkFBeUIscUJBQXFCLEVBQUUsaUNBQWlDLHFCQUFxQixFQUFFLDJCQUEyQixxQkFBcUIsRUFBRSw0QkFBNEIscUJBQXFCLEVBQUUsb0NBQW9DLHFCQUFxQixFQUFFLDZCQUE2QixxQkFBcUIsRUFBRSwyQkFBMkIscUJBQXFCLEVBQUUsbUNBQW1DLHFCQUFxQixFQUFFLGlDQUFpQyxxQkFBcUIsRUFBRSw4QkFBOEIscUJBQXFCLEVBQUUsOEJBQThCLHFCQUFxQixFQUFFLCtCQUErQixxQkFBcUIsRUFBRSw0QkFBNEIscUJBQXFCLEVBQUUsMkJBQTJCLHFCQUFxQixFQUFFLHVCQUF1QixxQkFBcUIsRUFBRSx1QkFBdUIscUJBQXFCLEVBQUUsK0JBQStCLHFCQUFxQixFQUFFLDZCQUE2QixxQkFBcUIsRUFBRSxtQ0FBbUMscUJBQXFCLEVBQUUsdUJBQXVCLHFCQUFxQixFQUFFLHNCQUFzQixxQkFBcUIsRUFBRSwrQkFBK0IscUJBQXFCLEVBQUUsOEJBQThCLHFCQUFxQixFQUFFLHdCQUF3QixxQkFBcUIsRUFBRSx5QkFBeUIscUJBQXFCLEVBQUUseUJBQXlCLHFCQUFxQixFQUFFLGlDQUFpQyxxQkFBcUIsRUFBRSwwQkFBMEIscUJBQXFCLEVBQUUsc0JBQXNCLHFCQUFxQixFQUFFLHNCQUFzQixxQkFBcUIsRUFBRSxzQkFBc0IscUJBQXFCLEVBQUUsMEJBQTBCLHFCQUFxQixFQUFFLCtCQUErQixxQkFBcUIsRUFBRSxzQkFBc0IscUJBQXFCLEVBQUUsdUJBQXVCLHFCQUFxQixFQUFFLHVCQUF1QixxQkFBcUIsRUFBRSxzQkFBc0IscUJBQXFCLEVBQUUscUJBQXFCLHFCQUFxQixFQUFFLHVCQUF1QixxQkFBcUIsRUFBRSx1QkFBdUIscUJBQXFCLEVBQUUsOEJBQThCLHFCQUFxQixFQUFFLGtDQUFrQyxxQkFBcUIsRUFBRSwwQ0FBMEMscUJBQXFCLEVBQUUscUJBQXFCLHFCQUFxQixFQUFFLDhCQUE4QixxQkFBcUIsRUFBRSx3QkFBd0IscUJBQXFCLEVBQUUsd0JBQXdCLHFCQUFxQixFQUFFLDZCQUE2QixxQkFBcUIsRUFBRSwwQkFBMEIscUJBQXFCLEVBQUUsc0JBQXNCLHFCQUFxQixFQUFFLHVCQUF1QixxQkFBcUIsRUFBRSx1QkFBdUIscUJBQXFCLEVBQUUsMkJBQTJCLHFCQUFxQixFQUFFLHdCQUF3QixxQkFBcUIsRUFBRSxzQkFBc0IscUJBQXFCLEVBQUUsMkJBQTJCLHFCQUFxQixFQUFFLHlCQUF5QixxQkFBcUIsRUFBRSx3QkFBd0IscUJBQXFCLEVBQUUsd0JBQXdCLHFCQUFxQixFQUFFLHdCQUF3QixxQkFBcUIsRUFBRSxzQkFBc0IscUJBQXFCLEVBQUUsd0JBQXdCLHFCQUFxQixFQUFFLHVCQUF1QixxQkFBcUIsRUFBRSwrQkFBK0IscUJBQXFCLEVBQUUsMkJBQTJCLHFCQUFxQixFQUFFLHVCQUF1QixxQkFBcUIsRUFBRSw4QkFBOEIscUJBQXFCLEVBQUUsc0JBQXNCLHFCQUFxQixFQUFFLDJCQUEyQixxQkFBcUIsRUFBRSw4QkFBOEIscUJBQXFCLEVBQUUsc0JBQXNCLHFCQUFxQixFQUFFLDBCQUEwQixxQkFBcUIsRUFBRSx1QkFBdUIscUJBQXFCLEVBQUUsd0JBQXdCLHFCQUFxQixFQUFFLDZCQUE2QixxQkFBcUIsRUFBRSxxQ0FBcUMscUJBQXFCLEVBQUUsdUJBQXVCLHFCQUFxQixFQUFFLDJCQUEyQixxQkFBcUIsRUFBRSxtQ0FBbUMscUJBQXFCLEVBQUUsNEJBQTRCLHFCQUFxQixFQUFFLG9DQUFvQyxxQkFBcUIsRUFBRSxzQ0FBc0MscUJBQXFCLEVBQUUsOENBQThDLHFCQUFxQixFQUFFLCtCQUErQixxQkFBcUIsRUFBRSx1Q0FBdUMscUJBQXFCLEVBQUUsZ0NBQWdDLHFCQUFxQixFQUFFLGdDQUFnQyxxQkFBcUIsRUFBRSxtQ0FBbUMscUJBQXFCLEVBQUUsZ0NBQWdDLHFCQUFxQixFQUFFLGlDQUFpQyxxQkFBcUIsRUFBRSxxQ0FBcUMscUJBQXFCLEVBQUUscUNBQXFDLHFCQUFxQixFQUFFLHNDQUFzQyxxQkFBcUIsRUFBRSxtQ0FBbUMscUJBQXFCLEVBQUUsOEJBQThCLHFCQUFxQixFQUFFLHdCQUF3QixxQkFBcUIsRUFBRSxnQ0FBZ0MscUJBQXFCLEVBQUUsNkJBQTZCLHFCQUFxQixFQUFFLHFDQUFxQyxxQkFBcUIsRUFBRSw4QkFBOEIscUJBQXFCLEVBQUUsc0NBQXNDLHFCQUFxQixFQUFFLGdDQUFnQyxxQkFBcUIsRUFBRSx3Q0FBd0MscUJBQXFCLEVBQUUsMEJBQTBCLHFCQUFxQixFQUFFLGtDQUFrQyxxQkFBcUIsRUFBRSwwQkFBMEIscUJBQXFCLEVBQUUsa0NBQWtDLHFCQUFxQixFQUFFLDBCQUEwQixxQkFBcUIsRUFBRSxrQ0FBa0MscUJBQXFCLEVBQUUsMEJBQTBCLHFCQUFxQixFQUFFLGtDQUFrQyxxQkFBcUIsRUFBRSwrQkFBK0IscUJBQXFCLEVBQUUsdUNBQXVDLHFCQUFxQixFQUFFLHlCQUF5QixxQkFBcUIsRUFBRSxpQ0FBaUMscUJBQXFCLEVBQUUsK0JBQStCLHFCQUFxQixFQUFFLHVDQUF1QyxxQkFBcUIsRUFBRSw4QkFBOEIscUJBQXFCLEVBQUUsc0NBQXNDLHFCQUFxQixFQUFFLGdDQUFnQyxxQkFBcUIsRUFBRSx3Q0FBd0MscUJBQXFCLEVBQUUsOEJBQThCLHFCQUFxQixFQUFFLHNDQUFzQyxxQkFBcUIsRUFBRSw0QkFBNEIscUJBQXFCLEVBQUUsb0NBQW9DLHFCQUFxQixFQUFFLDBCQUEwQixxQkFBcUIsRUFBRSxrQ0FBa0MscUJBQXFCLEVBQUUsK0JBQStCLHFCQUFxQixFQUFFLHVDQUF1QyxxQkFBcUIsRUFBRSxnQ0FBZ0MscUJBQXFCLEVBQUUsd0NBQXdDLHFCQUFxQixFQUFFLCtCQUErQixxQkFBcUIsRUFBRSxxQ0FBcUMscUJBQXFCLEVBQUUsdUNBQXVDLHFCQUFxQixFQUFFLG1DQUFtQyxxQkFBcUIsRUFBRSxvQ0FBb0MscUJBQXFCLEVBQUUsMkJBQTJCLHFCQUFxQixFQUFFLG1DQUFtQyxxQkFBcUIsRUFBRSwyQkFBMkIscUJBQXFCLEVBQUUsaUNBQWlDLHFCQUFxQixFQUFFLG1DQUFtQyxxQkFBcUIsRUFBRSwyQkFBMkIscUJBQXFCLEVBQUUsb0NBQW9DLHFCQUFxQixFQUFFLDRDQUE0QyxxQkFBcUIsRUFBRSxtQ0FBbUMscUJBQXFCLEVBQUUsa0NBQWtDLHFCQUFxQixFQUFFLDBDQUEwQyxxQkFBcUIsRUFBRSw0QkFBNEIscUJBQXFCLEVBQUUsa0NBQWtDLHFCQUFxQixFQUFFLDBDQUEwQyxxQkFBcUIsRUFBRSxvQ0FBb0MscUJBQXFCLEVBQUUseUJBQXlCLHFCQUFxQixFQUFFLGlDQUFpQyxxQkFBcUIsRUFBRSxrQ0FBa0MscUJBQXFCLEVBQUUsMENBQTBDLHFCQUFxQixFQUFFLGdDQUFnQyxxQkFBcUIsRUFBRSx3Q0FBd0MscUJBQXFCLEVBQUUsNkJBQTZCLHFCQUFxQixFQUFFLHFDQUFxQyxxQkFBcUIsRUFBRSw2QkFBNkIscUJBQXFCLEVBQUUscUNBQXFDLHFCQUFxQixFQUFFLDBCQUEwQixxQkFBcUIsRUFBRSxrQ0FBa0MscUJBQXFCLEVBQUUsMEJBQTBCLHFCQUFxQixFQUFFLGlDQUFpQyxxQkFBcUIsRUFBRSw4QkFBOEIscUJBQXFCLEVBQUUsc0NBQXNDLHFCQUFxQixFQUFFLDBCQUEwQixxQkFBcUIsRUFBRSwyQkFBMkIscUJBQXFCLEVBQUUsbUNBQW1DLHFCQUFxQixFQUFFLHlCQUF5QixxQkFBcUIsRUFBRSxpQ0FBaUMscUJBQXFCLEVBQUUsaUNBQWlDLHFCQUFxQixFQUFFLHlDQUF5QyxxQkFBcUIsRUFBRSw0QkFBNEIscUJBQXFCLEVBQUUsb0NBQW9DLHFCQUFxQixFQUFFLDBCQUEwQixxQkFBcUIsRUFBRSxrQ0FBa0MscUJBQXFCLEVBQUUsMEJBQTBCLHFCQUFxQixFQUFFLGtDQUFrQyxxQkFBcUIsRUFBRSwyQkFBMkIscUJBQXFCLEVBQUUsbUNBQW1DLHFCQUFxQixFQUFFLDJCQUEyQixxQkFBcUIsRUFBRSxtQ0FBbUMscUJBQXFCLEVBQUUsNEJBQTRCLHFCQUFxQixFQUFFLG9DQUFvQyxxQkFBcUIsRUFBRSw0QkFBNEIscUJBQXFCLEVBQUUsb0NBQW9DLHFCQUFxQixFQUFFLDhCQUE4QixxQkFBcUIsRUFBRSxzQ0FBc0MscUJBQXFCLEVBQUUsdUNBQXVDLHFCQUFxQixFQUFFLCtDQUErQyxxQkFBcUIsRUFBRSx1Q0FBdUMscUJBQXFCLEVBQUUsK0NBQStDLHFCQUFxQixFQUFFLDBCQUEwQixxQkFBcUIsRUFBRSxrQ0FBa0MscUJBQXFCLEVBQUUsNkJBQTZCLHFCQUFxQixFQUFFLHFDQUFxQyxxQkFBcUIsRUFBRSwrQkFBK0IscUJBQXFCLEVBQUUsdUNBQXVDLHFCQUFxQixFQUFFLDJCQUEyQixxQkFBcUIsRUFBRSxtQ0FBbUMscUJBQXFCLEVBQUUsMEJBQTBCLHFCQUFxQixFQUFFLGdDQUFnQyxxQkFBcUIsRUFBRSxrQ0FBa0MscUJBQXFCLEVBQUUsMEJBQTBCLHFCQUFxQixFQUFFLGtDQUFrQyxxQkFBcUIsRUFBRSw4QkFBOEIscUJBQXFCLEVBQUUsc0NBQXNDLHFCQUFxQixFQUFFLGlDQUFpQyxxQkFBcUIsRUFBRSx1Q0FBdUMscUJBQXFCLEVBQUUseUNBQXlDLHFCQUFxQixFQUFFLG1DQUFtQyxxQkFBcUIsRUFBRSw0QkFBNEIscUJBQXFCLEVBQUUsb0NBQW9DLHFCQUFxQixFQUFFLCtCQUErQixxQkFBcUIsRUFBRSx1Q0FBdUMscUJBQXFCLEVBQUUsMEJBQTBCLHFCQUFxQixFQUFFLGtDQUFrQyxxQkFBcUIsRUFBRSw4QkFBOEIscUJBQXFCLEVBQUUsc0NBQXNDLHFCQUFxQixFQUFFLDRCQUE0QixxQkFBcUIsRUFBRSxvQ0FBb0MscUJBQXFCLEVBQUUsMEJBQTBCLHFCQUFxQixFQUFFLGlDQUFpQyxxQkFBcUIsRUFBRSw2QkFBNkIscUJBQXFCLEVBQUUscUNBQXFDLHFCQUFxQixFQUFFLDRCQUE0QixxQkFBcUIsRUFBRSxvQ0FBb0MscUJBQXFCLEVBQUUseUJBQXlCLHFCQUFxQixFQUFFLDZCQUE2QixxQkFBcUIsRUFBRSxpQ0FBaUMscUJBQXFCLEVBQUUsMkJBQTJCLHFCQUFxQixFQUFFLGlDQUFpQyxxQkFBcUIsRUFBRSxtQ0FBbUMscUJBQXFCLEVBQUUsNkJBQTZCLHFCQUFxQixFQUFFLHFDQUFxQyxxQkFBcUIsRUFBRSwwQkFBMEIscUJBQXFCLEVBQUUsa0NBQWtDLHFCQUFxQixFQUFFLDBCQUEwQixxQkFBcUIsRUFBRSxrQ0FBa0MscUJBQXFCLEVBQUUsa0NBQWtDLHFCQUFxQixFQUFFLG1DQUFtQyxxQkFBcUIsRUFBRSw4QkFBOEIscUJBQXFCLEVBQUUsc0NBQXNDLHFCQUFxQixFQUFFLCtCQUErQixxQkFBcUIsRUFBRSx1Q0FBdUMscUJBQXFCLEVBQUUsMkJBQTJCLHFCQUFxQixFQUFFLG1DQUFtQyxxQkFBcUIsRUFBRSxnQ0FBZ0MscUJBQXFCLEVBQUUsd0NBQXdDLHFCQUFxQixFQUFFLGlDQUFpQyxxQkFBcUIsRUFBRSx5Q0FBeUMscUJBQXFCLEVBQUUsMkJBQTJCLHFCQUFxQixFQUFFLG1DQUFtQyxxQkFBcUIsRUFBRSx5QkFBeUIscUJBQXFCLEVBQUUsaUNBQWlDLHFCQUFxQixFQUFFLDRCQUE0QixxQkFBcUIsRUFBRSxvQ0FBb0MscUJBQXFCLEVBQUUsNEJBQTRCLHFCQUFxQixFQUFFLG9DQUFvQyxxQkFBcUIsRUFBRSwrQkFBK0IscUJBQXFCLEVBQUUsdUNBQXVDLHFCQUFxQixFQUFFLDRCQUE0QixxQkFBcUIsRUFBRSxvQ0FBb0MscUJBQXFCLEVBQUUseUJBQXlCLHFCQUFxQixFQUFFLGlDQUFpQyxxQkFBcUIsRUFBRSwwQkFBMEIscUJBQXFCLEVBQUUsa0NBQWtDLHFCQUFxQixFQUFFLDBCQUEwQixxQkFBcUIsRUFBRSxrQ0FBa0MscUJBQXFCLEVBQUUsMEJBQTBCLHFCQUFxQixFQUFFLGdDQUFnQyxxQkFBcUIsRUFBRSxrQ0FBa0MscUJBQXFCLEVBQUUsOEJBQThCLHFCQUFxQixFQUFFLHNDQUFzQyxxQkFBcUIsRUFBRSwrQkFBK0IscUJBQXFCLEVBQUUsdUNBQXVDLHFCQUFxQixFQUFFLDZCQUE2QixxQkFBcUIsRUFBRSxxQ0FBcUMscUJBQXFCLEVBQUUsMkJBQTJCLHFCQUFxQixFQUFFLGtDQUFrQyxxQkFBcUIsRUFBRSwyQkFBMkIscUJBQXFCLEVBQUUsbUNBQW1DLHFCQUFxQixFQUFFLCtCQUErQixxQkFBcUIsRUFBRSx1Q0FBdUMscUJBQXFCLEVBQUUsMEJBQTBCLHFCQUFxQixFQUFFLGtDQUFrQyxxQkFBcUIsRUFBRSw2QkFBNkIscUJBQXFCLEVBQUUsbUNBQW1DLHFCQUFxQixFQUFFLHFDQUFxQyxxQkFBcUIsRUFBRSw0QkFBNEIscUJBQXFCLEVBQUUsb0NBQW9DLHFCQUFxQixFQUFFLDRDQUE0QyxxQkFBcUIsRUFBRSw0QkFBNEIscUJBQXFCLEVBQUUsb0NBQW9DLHFCQUFxQixFQUFFLDBCQUEwQixxQkFBcUIsRUFBRSxrQ0FBa0MscUJBQXFCLEVBQUUsNEJBQTRCLHFCQUFxQixFQUFFLG1DQUFtQyxxQkFBcUIsRUFBRSw4QkFBOEIscUJBQXFCLEVBQUUscUNBQXFDLHFCQUFxQixFQUFFLDZCQUE2QixxQkFBcUIsRUFBRSxvQ0FBb0MscUJBQXFCLEVBQUUsa0NBQWtDLHFCQUFxQixFQUFFLDBDQUEwQyxxQkFBcUIsRUFBRSxpQ0FBaUMscUJBQXFCLEVBQUUseUNBQXlDLHFCQUFxQixFQUFFLDJCQUEyQixxQkFBcUIsRUFBRSxpQ0FBaUMscUJBQXFCLEVBQUUseUNBQXlDLHFCQUFxQixFQUFFLDBCQUEwQixxQkFBcUIsRUFBRSwrQkFBK0IscUJBQXFCLEVBQUUsa0NBQWtDLHFCQUFxQixFQUFFLCtCQUErQixxQkFBcUIsRUFBRSx1Q0FBdUMscUJBQXFCLEVBQUUsMkJBQTJCLHFCQUFxQixFQUFFLG1DQUFtQyxxQkFBcUIsRUFBRSwrQkFBK0IscUJBQXFCLEVBQUUsdUNBQXVDLHFCQUFxQixFQUFFLGdDQUFnQyxxQkFBcUIsRUFBRSx3Q0FBd0MscUJBQXFCLEVBQUUsa0NBQWtDLHFCQUFxQixFQUFFLDBDQUEwQyxxQkFBcUIsRUFBRSwwQkFBMEIscUJBQXFCLEVBQUUsa0NBQWtDLHFCQUFxQixFQUFFLDJCQUEyQixxQkFBcUIsRUFBRSxtQ0FBbUMscUJBQXFCLEVBQUUsNEJBQTRCLHFCQUFxQixFQUFFLG9DQUFvQyxxQkFBcUIsRUFBRSwyQkFBMkIscUJBQXFCLEVBQUUsbUNBQW1DLHFCQUFxQixFQUFFLDBCQUEwQixxQkFBcUIsRUFBRSxrQ0FBa0MscUJBQXFCLEVBQUUsOEJBQThCLHFCQUFxQixFQUFFLHNDQUFzQyxxQkFBcUIsRUFBRSw0QkFBNEIscUJBQXFCLEVBQUUsb0NBQW9DLHFCQUFxQixFQUFFLDhCQUE4QixxQkFBcUIsRUFBRSxzQ0FBc0MscUJBQXFCLEVBQUUsaUNBQWlDLHFCQUFxQixFQUFFLGdDQUFnQyxxQkFBcUIsRUFBRSwrQkFBK0IscUJBQXFCLEVBQUUsdUNBQXVDLHFCQUFxQixFQUFFLDJCQUEyQixxQkFBcUIsRUFBRSxtQ0FBbUMscUJBQXFCLEVBQUUsc0JBQXNCLHFCQUFxQixFQUFFLHdCQUF3QixxQkFBcUIsRUFBRSxzQkFBc0IscUJBQXFCLEVBQUUscUJBQXFCLHFCQUFxQixFQUFFLHFCQUFxQixxQkFBcUIsRUFBRSx1QkFBdUIscUJBQXFCLEVBQUUsd0JBQXdCLHFCQUFxQixFQUFFLHNCQUFzQixxQkFBcUIsRUFBRSx3QkFBd0IscUJBQXFCLEVBQUUsMkJBQTJCLHFCQUFxQixFQUFFLHNCQUFzQixxQkFBcUIsRUFBRSx3QkFBd0IscUJBQXFCLEVBQUUsd0JBQXdCLHFCQUFxQixFQUFFLHdCQUF3QixxQkFBcUIsRUFBRSx3QkFBd0IscUJBQXFCLEVBQUUsMEJBQTBCLHFCQUFxQixFQUFFLGtDQUFrQyxxQkFBcUIsRUFBRSx3QkFBd0IscUJBQXFCLEVBQUUsd0JBQXdCLHFCQUFxQixFQUFFLHlCQUF5QixxQkFBcUIsRUFBRSxzQkFBc0IscUJBQXFCLEVBQUUsd0JBQXdCLHFCQUFxQixFQUFFLHNCQUFzQixxQkFBcUIsRUFBRSxxQkFBcUIscUJBQXFCLEVBQUUscUJBQXFCLHFCQUFxQixFQUFFLHdCQUF3QixxQkFBcUIsRUFBRSx1QkFBdUIscUJBQXFCLEVBQUUsdUJBQXVCLHFCQUFxQixFQUFFLHVCQUF1QixxQkFBcUIsRUFBRSx1QkFBdUIscUJBQXFCLEVBQUUsdUJBQXVCLHFCQUFxQixFQUFFLCtCQUErQixxQkFBcUIsRUFBRSw2QkFBNkIscUJBQXFCLEVBQUUseUJBQXlCLHFCQUFxQixFQUFFLHlCQUF5QixxQkFBcUIsRUFBRSxzQkFBc0IscUJBQXFCLEVBQUUsdUJBQXVCLHFCQUFxQixFQUFFLDRCQUE0QixxQkFBcUIsRUFBRSx5QkFBeUIscUJBQXFCLEVBQUUsK0JBQStCLHFCQUFxQixFQUFFLDBCQUEwQixxQkFBcUIsRUFBRSx5QkFBeUIscUJBQXFCLEVBQUUsNEJBQTRCLHFCQUFxQixFQUFFLHlCQUF5QixxQkFBcUIsRUFBRSx3QkFBd0IscUJBQXFCLEVBQUUsNEJBQTRCLHFCQUFxQixFQUFFLDZCQUE2QixxQkFBcUIsRUFBRSxnQ0FBZ0MscUJBQXFCLEVBQUUsMkJBQTJCLHFCQUFxQixFQUFFLHVCQUF1QixxQkFBcUIsRUFBRSx3QkFBd0IscUJBQXFCLEVBQUUsNEJBQTRCLHFCQUFxQixFQUFFLGdDQUFnQyxxQkFBcUIsRUFBRSwyQkFBMkIscUJBQXFCLEVBQUUscUJBQXFCLHFCQUFxQixFQUFFLDBCQUEwQixxQkFBcUIsRUFBRSx1QkFBdUIscUJBQXFCLEVBQUUsdUJBQXVCLHFCQUFxQixFQUFFLHdCQUF3QixxQkFBcUIsRUFBRSxzQkFBc0IscUJBQXFCLEVBQUUsNkJBQTZCLHFCQUFxQixFQUFFLHNCQUFzQixxQkFBcUIsRUFBRSw4QkFBOEIscUJBQXFCLEVBQUUsNEJBQTRCLHFCQUFxQixFQUFFLHdCQUF3QixxQkFBcUIsRUFBRSx1QkFBdUIscUJBQXFCLEVBQUUsdUJBQXVCLHFCQUFxQixFQUFFLDBCQUEwQixxQkFBcUIsRUFBRSwyQkFBMkIscUJBQXFCLEVBQUUseUJBQXlCLHFCQUFxQixFQUFFLDhCQUE4QixxQkFBcUIsRUFBRSw0QkFBNEIscUJBQXFCLEVBQUUsdUJBQXVCLHFCQUFxQixFQUFFLDZCQUE2QixxQkFBcUIsRUFBRSx3QkFBd0IscUJBQXFCLEVBQUUseUJBQXlCLHFCQUFxQixFQUFFLHVCQUF1QixxQkFBcUIsRUFBRSwyQkFBMkIscUJBQXFCLEVBQUUsMEJBQTBCLHFCQUFxQixFQUFFLDBCQUEwQixxQkFBcUIsRUFBRSxxQkFBcUIscUJBQXFCLEVBQUUsNkJBQTZCLHFCQUFxQixFQUFFLDBCQUEwQixxQkFBcUIsRUFBRSx3QkFBd0IscUJBQXFCLEVBQUUsMEJBQTBCLHFCQUFxQixFQUFFLHVCQUF1QixxQkFBcUIsRUFBRSx5QkFBeUIscUJBQXFCLEVBQUUsK0JBQStCLHFCQUFxQixFQUFFLDhCQUE4QixxQkFBcUIsRUFBRSxnQ0FBZ0MscUJBQXFCLEVBQUUsd0NBQXdDLHFCQUFxQixFQUFFLGdDQUFnQyxxQkFBcUIsRUFBRSx3Q0FBd0MscUJBQXFCLEVBQUUsOEJBQThCLHFCQUFxQixFQUFFLHNDQUFzQyxxQkFBcUIsRUFBRSxnQ0FBZ0MscUJBQXFCLEVBQUUsd0NBQXdDLHFCQUFxQixFQUFFLCtCQUErQixxQkFBcUIsRUFBRSx1Q0FBdUMscUJBQXFCLEVBQUUsK0JBQStCLHFCQUFxQixFQUFFLHVDQUF1QyxxQkFBcUIsRUFBRSxnQ0FBZ0MscUJBQXFCLEVBQUUsd0NBQXdDLHFCQUFxQixFQUFFLDZCQUE2QixxQkFBcUIsRUFBRSxxQ0FBcUMscUJBQXFCLEVBQUUscUNBQXFDLHFCQUFxQixFQUFFLDZDQUE2QyxxQkFBcUIsRUFBRSxpQ0FBaUMscUJBQXFCLEVBQUUseUNBQXlDLHFCQUFxQixFQUFFLGdDQUFnQyxxQkFBcUIsRUFBRSx3Q0FBd0MscUJBQXFCLEVBQUUsNkJBQTZCLHFCQUFxQixFQUFFLHFDQUFxQyxxQkFBcUIsRUFBRSxpQ0FBaUMscUJBQXFCLEVBQUUseUNBQXlDLHFCQUFxQixFQUFFLG1DQUFtQyxxQkFBcUIsRUFBRSwyQ0FBMkMscUJBQXFCLEVBQUUsc0NBQXNDLHFCQUFxQixFQUFFLCtCQUErQixxQkFBcUIsRUFBRSx1Q0FBdUMscUJBQXFCLEVBQUUsK0JBQStCLHFCQUFxQixFQUFFLHVDQUF1QyxxQkFBcUIsRUFBRSxtQ0FBbUMscUJBQXFCLEVBQUUsMkNBQTJDLHFCQUFxQixFQUFFLG1DQUFtQyxxQkFBcUIsRUFBRSwyQ0FBMkMscUJBQXFCLEVBQUUsOEJBQThCLHFCQUFxQixFQUFFLHNDQUFzQyxxQkFBcUIsRUFBRSxrQ0FBa0MscUJBQXFCLEVBQUUsMENBQTBDLHFCQUFxQixFQUFFLG1DQUFtQyxxQkFBcUIsRUFBRSwyQ0FBMkMscUJBQXFCLEVBQUUsaUNBQWlDLHFCQUFxQixFQUFFLHlDQUF5QyxxQkFBcUIsRUFBRSxpQ0FBaUMscUJBQXFCLEVBQUUsK0JBQStCLHFCQUFxQixFQUFFLGdDQUFnQyxxQkFBcUIsRUFBRSxrQ0FBa0MscUJBQXFCLEVBQUUsMENBQTBDLHFCQUFxQixFQUFFLCtCQUErQixxQkFBcUIsRUFBRSwrQkFBK0IscUJBQXFCLEVBQUUsdUNBQXVDLHFCQUFxQixFQUFFLDRCQUE0QixxQkFBcUIsRUFBRSxvQ0FBb0MscUJBQXFCLEVBQUUsNkJBQTZCLHFCQUFxQixFQUFFLDhCQUE4QixxQkFBcUIsRUFBRSxzQ0FBc0MscUJBQXFCLEVBQUUsaUNBQWlDLHFCQUFxQixFQUFFLHlDQUF5QyxxQkFBcUIsRUFBRSwrQkFBK0IscUJBQXFCLEVBQUUsdUNBQXVDLHFCQUFxQixFQUFFLDRCQUE0QixxQkFBcUIsRUFBRSwrQkFBK0IscUJBQXFCLEVBQUUsdUNBQXVDLHFCQUFxQixFQUFFLGdDQUFnQyxxQkFBcUIsRUFBRSx3Q0FBd0MscUJBQXFCLEVBQUUsNEJBQTRCLHFCQUFxQixFQUFFLG9DQUFvQyxxQkFBcUIsRUFBRSw4QkFBOEIscUJBQXFCLEVBQUUsc0NBQXNDLHFCQUFxQixFQUFFLGlDQUFpQyxxQkFBcUIsRUFBRSx5Q0FBeUMscUJBQXFCLEVBQUUsZ0NBQWdDLHFCQUFxQixFQUFFLHdDQUF3QyxxQkFBcUIsRUFBRSxrQ0FBa0MscUJBQXFCLEVBQUUsMENBQTBDLHFCQUFxQixFQUFFLDhCQUE4QixxQkFBcUIsRUFBRSxzQ0FBc0MscUJBQXFCLEVBQUUsNEJBQTRCLHFCQUFxQixFQUFFLG9DQUFvQyxxQkFBcUIsRUFBRSxnQ0FBZ0MscUJBQXFCLEVBQUUsd0NBQXdDLHFCQUFxQixFQUFFLDBCQUEwQixxQkFBcUIsRUFBRSxrQ0FBa0MscUJBQXFCLEVBQUUsOEJBQThCLHFCQUFxQixFQUFFLDZCQUE2QixxQkFBcUIsRUFBRSx1QkFBdUIscUJBQXFCLEVBQUUsc0JBQXNCLHFCQUFxQixFQUFFLDRCQUE0QixxQkFBcUIsRUFBRSx1QkFBdUIscUJBQXFCLEVBQUUsc0JBQXNCLHFCQUFxQixFQUFFLDZCQUE2QixxQkFBcUIsRUFBRSw0QkFBNEIscUJBQXFCLEVBQUUsMEJBQTBCLHFCQUFxQixFQUFFLHdCQUF3QixxQkFBcUIsRUFBRSwrQkFBK0IscUJBQXFCLEVBQUUsNkJBQTZCLHFCQUFxQixFQUFFLHlCQUF5QixxQkFBcUIsRUFBRSx5QkFBeUIscUJBQXFCLEVBQUUsd0JBQXdCLHFCQUFxQixFQUFFLHdCQUF3QixxQkFBcUIsRUFBRSxnQ0FBZ0MscUJBQXFCLEVBQUUsMEJBQTBCLHFCQUFxQixFQUFFLDRCQUE0QixxQkFBcUIsRUFBRSwwQkFBMEIscUJBQXFCLEVBQUUsd0JBQXdCLHFCQUFxQixFQUFFLHFCQUFxQixxQkFBcUIsRUFBRSw2QkFBNkIscUJBQXFCLEVBQUUsNkJBQTZCLHFCQUFxQixFQUFFLDRCQUE0QixxQkFBcUIsRUFBRSwrQkFBK0IscUJBQXFCLEVBQUUsNkJBQTZCLHFCQUFxQixFQUFFLHNCQUFzQixxQkFBcUIsRUFBRSwyQkFBMkIscUJBQXFCLEVBQUUsc0JBQXNCLHFCQUFxQixFQUFFLDJCQUEyQixxQkFBcUIsRUFBRSx1QkFBdUIscUJBQXFCLEVBQUUsd0JBQXdCLHFCQUFxQixFQUFFLHNCQUFzQixxQkFBcUIsRUFBRTs7QUFFdjJ0Qzs7QUFFQSx3QkFBd0IsbUJBQU8sQ0FBQyw2REFBOEI7QUFDOUQsSUFBSSxtQkFBTyxDQUFDLDREQUF5Qzs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFFBQVEsSUFBVTtBQUNsQjtBQUNBO0FBQ0EsK0JBQStCLDhDQUE4QztBQUM3RSxTQUFTO0FBQ1Q7Ozs7Ozs7Ozs7QUN4QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsT0FBT0EsS0FBUCxtQkFBa0IsMkVBQWxCO0FBQ0EsT0FBT0MsSUFBUDtBQUNBLE9BQU9DLEtBQVA7QUFDQSxPQUFPQyxTQUFQLEVBQXdCLENBQXhCO0FBRUFDLEdBQUcsQ0FBQ0MsR0FBSixDQUFRRixXQUFSO0FBQ0FDLEdBQUcsQ0FBQ0UsZUFBSixDQUFvQixnQkFBcEIsRUFBc0MsTUFBTUMsQ0FFNUM7O0FBQ0E7QUFDQUMsV0FBVyxDQUFDQyxLQUFaLEdBQW9CLEtBQXBCO0FBQ0FELFdBQVcsQ0FBQ0UsS0FBWixHQUFvQjtBQUNsQixRQUFNLE1BRFk7QUFFWDtBQUZXLENBQXBCO0FBSUFGLFdBQVcsQ0FBQ0csT0FBWjtBQUNBUCxHQUFHLENBQUNRLE1BQUosQ0FBVyxVQUFYLEVBQXVCQyxJQUF2Qjs7QUFHOEI7QUFDNUJULEtBQUcsQ0FBQ0MsR0FBSixDQUFRSCxXQUFSO0FBQ0QsQyxDQUNEOzs7QUFDQTtBQUdBLElBQUlFLEdBQUosQ0FBUTtBQUNOSixPQURNO0FBRU5jLFFBQU0sRUFBRUMsQ0FBQyxHQUFLO0FBRlIsQ0FBUixFQUdHQyxNQUhIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQWUscUVBQU0sQ0FFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhDaUIsQzs7Ozs7Ozs7QUNBckI7QUFBZSxxRUFBTTtBQUNuQkMsYUFBVyxDQUFFQyxRQUFGLEVBQVk7QUFDckIsU0FBS0MsRUFBTCxHQUFVQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWMsR0FBekIsQ0FBVjtBQUNBLFNBQUtKLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS0ssTUFBTCxHQUFjLElBQWQ7QUFDQSxTQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNEOztBQU5rQixDOzs7Ozs7OztBQ0FuQjtBQUFlLHFFQUFNO0FBRXJCUCxhQUFXLEdBQUk7QUFDYixTQUFLUSxRQUFMLEdBQWdCLE1BQWhCO0FBQ0Q7O0FBRURDLGFBQVcsQ0FBRUMsTUFBRixFQUFVO0FBQ25CLFNBQUtGLFFBQUwsR0FBZ0JFLE1BQWhCO0FBQ0Q7O0FBRURDLGVBQWEsT0FBMEI7QUFBQSxRQUF4QjtBQUFFQyxXQUFGO0FBQVNDLFVBQVQ7QUFBZUM7QUFBZixLQUF3QjtBQUNyQyxTQUFLRixLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxNQUFMLEdBQWMsSUFBSUMsSUFBSixFQUFkO0FBQ0Q7O0FBZm9CLEM7Ozs7Ozs7Ozs7Ozs7OztBQ0F2QjtBQUFBLElBQU1DLFVBQVUsR0FBRzNCLG1CQUFPLENBQUMsK0NBQUQsQ0FBMUI7O0FBRWU7QUFDWDRCLFlBQVUsR0FBRztBQUNULFdBQU9ELFVBQVUsQ0FBQ0UsT0FBWCw0Q0FBUDtBQUNIOztBQUhVLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQUE7QUFFZTtBQUNiQyxTQUFPLEdBQUk7QUFDVCxXQUFPLElBQUlDLE9BQUosQ0FBWSxDQUFDQyxPQUFELEVBQVVDLE1BQVYsS0FBcUI7QUFDdENDLGdCQUFVLENBQUMsTUFBTTtBQUNmRixlQUFPLENBQUNHLGtEQUFELENBQVA7QUFDRCxPQUZTLEVBRVAsRUFGTyxDQUFWO0FBR0QsS0FKTSxDQUFQO0FBS0QsR0FQWTs7QUFRYkMsUUFBTSxDQUFFQyxLQUFGLEVBQVM7QUFDYixXQUFPLElBQUlOLE9BQUosQ0FBWSxDQUFDQyxPQUFELEVBQVVDLE1BQVYsS0FBcUI7QUFDdENDLGdCQUFVLENBQUMsTUFBTTtBQUNmRixlQUFPLENBQUNLLEtBQUQsQ0FBUDtBQUNELE9BRlMsRUFFUCxFQUZPLENBQVY7QUFHRCxLQUpNLENBQVA7QUFLRDs7QUFkWSxDQUFmLEU7Ozs7Ozs7O0FDRkE7QUFBQTtBQUVlO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUMsV0FBUyxDQUFFRCxLQUFGLEVBQVM7QUFDaEIsV0FBTyxJQUFJTixPQUFKLENBQVksQ0FBQ0MsT0FBRCxFQUFVQyxNQUFWLEtBQXFCO0FBQ3RDQyxnQkFBVSxDQUFDLE1BQU07QUFDZkYsZUFBTyxDQUFDSyxLQUFELENBQVA7QUFDRCxPQUZTLEVBRVAsRUFGTyxDQUFWO0FBR0QsS0FKTSxDQUFQO0FBS0Q7O0FBZFksQ0FBZixFOzs7Ozs7OztBQ0ZBO0FBQUEsSUFBTVYsVUFBVSxHQUFHM0IsbUJBQU8sQ0FBQywrQ0FBRCxDQUExQjs7QUFFZTtBQUNiOEIsU0FBTyxHQUFJO0FBQ1QsV0FBT0gsVUFBVSxDQUFDRSxPQUFYLENBQW1CLDRCQUFuQixDQUFQO0FBQ0QsR0FIWTs7QUFJYk8sUUFBTSxDQUFFRyxHQUFGLEVBQU87QUFDWCxXQUFPWixVQUFVLENBQUNhLE9BQVgsQ0FBbUI7QUFDeEI7QUFDQTtBQUNBQyxTQUFHLEVBQUUsMENBSG1CO0FBSXhCQyxZQUFNLEVBQUUsTUFKZ0I7QUFLeEJDLGFBQU8sRUFBRTtBQUFFLHdCQUFnQjtBQUFsQixPQUxlO0FBTXhCQyxhQUFPLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlUCxHQUFmO0FBTmUsS0FBbkIsQ0FBUDtBQVFEOztBQWJZLENBQWYsRTs7Ozs7Ozs7QUNGQTtBQUFBLElBQU1aLFVBQVUsR0FBRzNCLG1CQUFPLENBQUMsK0NBQUQsQ0FBMUI7O0FBRWU7QUFDYnNDLFdBQVMsQ0FBRVMsTUFBRixFQUFVO0FBQ2pCLFdBQU9wQixVQUFVLENBQUNhLE9BQVgsQ0FBbUI7QUFDeEI7QUFDQTtBQUNBQyxTQUFHLEVBQUUsMENBSG1CO0FBSXhCQyxZQUFNLEVBQUUsTUFKZ0I7QUFLeEJDLGFBQU8sRUFBRTtBQUFFLHdCQUFnQjtBQUFsQixPQUxlO0FBTXhCQyxhQUFPLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlQyxNQUFmO0FBTmUsS0FBbkIsQ0FBUDtBQVFELEdBVlk7O0FBWWJDLGFBQVcsQ0FBRUMsUUFBRixFQUFZO0FBQ3JCLFdBQU90QixVQUFVLENBQUNFLE9BQVgscUNBQzBCb0IsUUFEMUIsRUFFSDtBQUZHLEtBQVA7QUFJQTs7QUFqQlcsQ0FBZixFOzs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7QUFDQTs7QUFFQXBELDBDQUFHLENBQUNDLEdBQUosQ0FBUW9ELDRDQUFSO0FBRWUsbUVBQUlBLDRDQUFJLENBQUNDLEtBQVQsQ0FBZTtBQUM1QkMsT0FBSyxFQUFFO0FBQ0xDLFdBQU8sRUFBRSxFQURKO0FBRUxDLFdBQU8sRUFBRSxFQUZKO0FBR0xuQixRQUFJLEVBQUUsRUFIRDtBQUlMb0IsY0FBVSxFQUFFLElBQUlDLHNEQUFKLEVBSlA7QUFLTEMsV0FBTyxFQUFFLEVBTEo7QUFNTHZDLFlBQVEsRUFBRSxRQU5MO0FBT0x3QyxjQUFVLEVBQUUsSUFBSUMsc0RBQUosRUFQUDtBQVFMQyxrQkFBYyxFQUFFQztBQVJYLEdBRHFCO0FBVzVCO0FBQ0FDLFdBQVMsRUFBRTtBQUNUO0FBQ0FDLGVBQVcsQ0FBQ1gsS0FBRCxFQUFRWSxNQUFSLEVBQWdCO0FBQ3pCWixXQUFLLENBQUNLLE9BQU4sR0FBZ0JPLE1BQWhCO0FBQ0QsS0FKUTs7QUFLVEMsY0FBVSxDQUFDYixLQUFELEVBQVFZLE1BQVIsRUFBZ0I7QUFDeEJaLFdBQUssQ0FBQ0MsT0FBTixDQUFjYSxJQUFkLENBQW1CRixNQUFuQjtBQUNELEtBUFE7O0FBUVRHLFlBQVEsQ0FBQ2YsS0FBRCxFQUFRYixHQUFSLEVBQWE7QUFDbkJhLFdBQUssQ0FBQ0ssT0FBTixHQUFnQmxCLEdBQWhCO0FBQ0QsS0FWUTs7QUFXVDZCLHFCQUFpQixDQUFFaEIsS0FBRixFQUFTbEMsUUFBVCxFQUFtQjtBQUNsQ2tDLFdBQUssQ0FBQ2xDLFFBQU4sR0FBaUJBLFFBQWpCO0FBQ0QsS0FiUTs7QUFjVEcsaUJBQWEsQ0FBRStCLEtBQUYsRUFBU2lCLFNBQVQsRUFBb0I7QUFDL0JqQixXQUFLLENBQUNNLFVBQU4sQ0FBaUJyQyxhQUFqQixDQUErQmdELFNBQS9CO0FBQ0QsS0FoQlE7O0FBaUJUQyxlQUFXLENBQUVsQixLQUFGLEVBQVNMLE1BQVQsRUFBaUI7QUFDMUJLLFdBQUssQ0FBQ00sVUFBTixHQUFtQlgsTUFBbkI7QUFDRCxLQW5CUTs7QUFvQlR3QixjQUFVLENBQUVuQixLQUFGLEVBQVNMLE1BQVQsRUFBaUI7QUFDekJLLFdBQUssQ0FBQ1EsY0FBTixHQUF1QmIsTUFBdkI7QUFDRCxLQXRCUTs7QUF1QlR5QixjQUFVLENBQUVwQixLQUFGLEVBQVNMLE1BQVQsRUFBaUI7QUFDekJLLFdBQUssQ0FBQ1EsY0FBTixHQUF1QmIsTUFBdkI7QUFDRCxLQXpCUTs7QUEwQlQwQixZQUFRLENBQUVyQixLQUFGLEVBQVNqQixJQUFULEVBQWU7QUFDckJpQixXQUFLLENBQUNqQixJQUFOLEdBQWFBLElBQWI7QUFDRCxLQTVCUTs7QUE2QlR1QyxXQUFPLENBQUV0QixLQUFGLEVBQVNiLEdBQVQsRUFBYztBQUNuQmEsV0FBSyxDQUFDakIsSUFBTixDQUFXK0IsSUFBWCxDQUFnQjNCLEdBQWhCO0FBQ0Q7O0FBL0JRLEdBWmlCO0FBK0M1QjtBQUNBb0MsU0FBTyxFQUFFO0FBQ1AzQixlQUFXLE9BQWNDLFFBQWQsRUFBd0I7QUFBQSxVQUF0QjtBQUFFMkI7QUFBRixPQUFzQjtBQUNqQ0MscUVBQWEsQ0FBQzdCLFdBQWQsQ0FBMEJDLFFBQTFCLEVBQ0c2QixJQURILENBQ1FDLEdBQUcsSUFBSTtBQUNYSCxjQUFNLENBQUMsWUFBRCxFQUFlRyxHQUFmLENBQU47QUFDRCxPQUhIO0FBSUQsS0FOTTs7QUFPUHpDLGFBQVMsUUFBY1MsTUFBZCxFQUFzQjtBQUFBLFVBQXBCO0FBQUU2QjtBQUFGLE9BQW9CO0FBQzdCQyxxRUFBYSxDQUFDdkMsU0FBZCxDQUF3QlMsTUFBeEIsRUFDRytCLElBREgsQ0FDUUMsR0FBRyxJQUFJO0FBQ1hILGNBQU0sQ0FBQyxZQUFELEVBQWVHLEdBQUcsQ0FBQ25DLE9BQUosQ0FBWW9DLE1BQVosRUFBZixDQUFOO0FBQ0QsT0FISDtBQUlELEtBWk07O0FBYVBDLFlBQVEsUUFBYztBQUFBLFVBQVo7QUFBRUw7QUFBRixPQUFZO0FBQ3BCTSxrRUFBVSxDQUFDcEQsT0FBWCxHQUNHZ0QsSUFESCxDQUNRQyxHQUFHLElBQUk7QUFDWEgsY0FBTSxDQUFDLFVBQUQsRUFBYUcsR0FBYixDQUFOO0FBQ0QsT0FISDtBQUlELEtBbEJNOztBQW1CUDNDLFVBQU0sUUFBY0csR0FBZCxFQUFtQjtBQUFBLFVBQWpCO0FBQUVxQztBQUFGLE9BQWlCO0FBQ3ZCTSxrRUFBVSxDQUFDOUMsTUFBWCxDQUFrQkcsR0FBbEIsRUFDR3VDLElBREgsQ0FDUUMsR0FBRyxJQUFJO0FBQ1hILGNBQU0sQ0FBQyxTQUFELEVBQVlHLEdBQUcsQ0FBQ25DLE9BQUosQ0FBWW9DLE1BQVosRUFBWixDQUFOO0FBQ0QsT0FISDtBQUlEOztBQXhCTSxHQWhEbUI7QUEwRTVCRyxTQUFPLEVBQUU7QUFDUEMsb0JBQWdCLEVBQUVoQyxLQUFLLElBQUlpQyxNQUFNLElBQUk7QUFDbkMsVUFBSUEsTUFBTSxLQUFLLEVBQWYsRUFDRSxPQUFPakMsS0FBSyxDQUFDakIsSUFBYjtBQUVGLFVBQU1tRCxLQUFLLEdBQUdELE1BQU0sQ0FBQ0UsS0FBUCxDQUFhLEdBQWIsQ0FBZDtBQUVBLGFBQU9uQyxLQUFLLENBQUNqQixJQUFOLENBQVc5QixNQUFYLENBQWtCa0MsR0FBRyxJQUFJK0MsS0FBSyxDQUFDRSxJQUFOLENBQzlCQyxJQUFJLElBQUlsRCxHQUFHLENBQUNmLEtBQUosQ0FBVWtFLFdBQVYsR0FBd0JDLFFBQXhCLENBQWlDRixJQUFJLENBQUNDLFdBQUwsRUFBakMsS0FDTG5ELEdBQUcsQ0FBQ3ZCLE1BQUosQ0FBVzBFLFdBQVgsR0FBeUJDLFFBQXpCLENBQWtDRixJQUFJLENBQUNDLFdBQUwsRUFBbEMsQ0FGMkIsQ0FBekIsQ0FBUDtBQUdEO0FBVk07QUExRW1CLENBQWYsQ0FBZixFOzs7Ozs7OztBQ1hBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUY7QUFDM0I7QUFDTDtBQUNhOzs7QUFHcEU7QUFDMEY7QUFDMUYsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsOEVBQU07QUFDUixFQUFFLG1GQUFNO0FBQ1IsRUFBRSw0RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksSUFBVTtBQUNkLFlBQVksbUJBQU8sQ0FBQyxrREFBa0o7QUFDdEssY0FBYyxtQkFBTyxDQUFDLGdEQUFLO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQkFBc0IscURBQStDLEVBQUU7QUFBQTtBQUN2RTtBQUNBLGdCQUFnQixtRkFBTTtBQUN0Qix5QkFBeUIsNEZBQWU7QUFDeEMsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDZSxnRjs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUF3SyxDQUFnQiw0T0FBRyxFQUFDLEM7Ozs7Ozs7O0FDQTVMO0FBQUE7QUFBQTtBQUFBO0FBQWlYLENBQWdCLGdhQUFHLEVBQUMsQzs7Ozs7Ozs7QUNBclk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThGO0FBQ3ZDO0FBQ0w7QUFDc0M7OztBQUd4RjtBQUMwRjtBQUMxRixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSx5RUFBTTtBQUNSLEVBQUUsMEZBQU07QUFDUixFQUFFLG1HQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxJQUFVO0FBQ2QsWUFBWSxtQkFBTyxDQUFDLGtEQUFrSjtBQUN0SyxjQUFjLG1CQUFPLENBQUMsZ0RBQUs7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNCQUFzQiw0REFBc0QsRUFBRTtBQUFBO0FBQzlFO0FBQ0EsZ0JBQWdCLDBGQUFNO0FBQ3RCLHlCQUF5QixtR0FBZTtBQUN4QyxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNlLGdGOzs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQW1LLENBQWdCLHVPQUFHLEVBQUMsQzs7Ozs7Ozs7QUNBdkw7QUFBQTtBQUFBO0FBQUE7QUFBZ2IsQ0FBZ0IseWRBQUcsRUFBQyxDOzs7Ozs7OztBQ0FwYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0Y7QUFDdkM7QUFDTDtBQUNzQzs7O0FBR3pGO0FBQzBGO0FBQzFGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDBFQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLElBQVU7QUFDZCxZQUFZLG1CQUFPLENBQUMsa0RBQWtKO0FBQ3RLLGNBQWMsbUJBQU8sQ0FBQyxnREFBSztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0JBQXNCLDZEQUF1RCxFQUFFO0FBQUE7QUFDL0U7QUFDQSxnQkFBZ0IsMkZBQU07QUFDdEIseUJBQXlCLG9HQUFlO0FBQ3hDLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ2UsZ0Y7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBb0ssQ0FBZ0Isd09BQUcsRUFBQyxDOzs7Ozs7OztBQ0F4TDtBQUFBO0FBQUE7QUFBQTtBQUFpYixDQUFnQiwwZEFBRyxFQUFDLEM7Ozs7Ozs7O0FDQXJjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFtRztBQUN2QztBQUNMO0FBQ3NDOzs7QUFHN0Y7QUFDMEY7QUFDMUYsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsOEVBQU07QUFDUixFQUFFLCtGQUFNO0FBQ1IsRUFBRSx3R0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksSUFBVTtBQUNkLFlBQVksbUJBQU8sQ0FBQyxrREFBa0o7QUFDdEssY0FBYyxtQkFBTyxDQUFDLGdEQUFLO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQkFBc0IsaUVBQTJELEVBQUU7QUFBQTtBQUNuRjtBQUNBLGdCQUFnQiwrRkFBTTtBQUN0Qix5QkFBeUIsd0dBQWU7QUFDeEMsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDZSxnRjs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUF3SyxDQUFnQiw0T0FBRyxFQUFDLEM7Ozs7Ozs7O0FDQTVMO0FBQUE7QUFBQTtBQUFBO0FBQXFiLENBQWdCLDhkQUFHLEVBQUMsQzs7Ozs7Ozs7QUNBemM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlHO0FBQ3ZDO0FBQ0w7QUFDcUM7OztBQUdsRztBQUMwRjtBQUMxRixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSxvRkFBTTtBQUNSLEVBQUUscUdBQU07QUFDUixFQUFFLDhHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxJQUFVO0FBQ2QsWUFBWSxtQkFBTyxDQUFDLGtEQUFrSjtBQUN0SyxjQUFjLG1CQUFPLENBQUMsZ0RBQUs7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNCQUFzQix1RUFBaUUsRUFBRTtBQUFBO0FBQ3pGO0FBQ0EsZ0JBQWdCLHFHQUFNO0FBQ3RCLHlCQUF5Qiw4R0FBZTtBQUN4QyxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNlLGdGOzs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQThLLENBQWdCLGtQQUFHLEVBQUMsQzs7Ozs7Ozs7QUNBbE07QUFBQTtBQUFBO0FBQUE7QUFBK1ksQ0FBZ0IsOGJBQUcsRUFBQyxDOzs7Ozs7OztBQ0FuYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUc7QUFDdkM7QUFDTDtBQUNxQzs7O0FBRzFGO0FBQzBGO0FBQzFGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDRFQUFNO0FBQ1IsRUFBRSw2RkFBTTtBQUNSLEVBQUUsc0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLElBQVU7QUFDZCxZQUFZLG1CQUFPLENBQUMsa0RBQWtKO0FBQ3RLLGNBQWMsbUJBQU8sQ0FBQyxnREFBSztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0JBQXNCLCtEQUF5RCxFQUFFO0FBQUE7QUFDakY7QUFDQSxnQkFBZ0IsNkZBQU07QUFDdEIseUJBQXlCLHNHQUFlO0FBQ3hDLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ2UsZ0Y7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBc0ssQ0FBZ0IsME9BQUcsRUFBQyxDOzs7Ozs7OztBQ0ExTDtBQUFBO0FBQUE7QUFBQTtBQUF1WSxDQUFnQixzYkFBRyxFQUFDLEM7Ozs7Ozs7O0FDQTNaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUc7QUFDdkM7QUFDTDs7O0FBR3pEO0FBQzBGO0FBQzFGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLGdGQUFNO0FBQ1IsRUFBRSxpR0FBTTtBQUNSLEVBQUUsMEdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLElBQVU7QUFDZCxZQUFZLG1CQUFPLENBQUMsa0RBQWtKO0FBQ3RLLGNBQWMsbUJBQU8sQ0FBQyxnREFBSztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0JBQXNCLG1FQUE2RCxFQUFFO0FBQUE7QUFDckY7QUFDQSxnQkFBZ0IsaUdBQU07QUFDdEIseUJBQXlCLDBHQUFlO0FBQ3hDLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ2UsZ0Y7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBMEssQ0FBZ0IsOE9BQUcsRUFBQyxDOzs7Ozs7OztBQ0E5TDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0c7QUFDdkM7QUFDTDtBQUNxQzs7O0FBR2pHO0FBQzBGO0FBQzFGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLG1GQUFNO0FBQ1IsRUFBRSxvR0FBTTtBQUNSLEVBQUUsNkdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLElBQVU7QUFDZCxZQUFZLG1CQUFPLENBQUMsa0RBQWtKO0FBQ3RLLGNBQWMsbUJBQU8sQ0FBQyxnREFBSztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0JBQXNCLHNFQUFnRSxFQUFFO0FBQUE7QUFDeEY7QUFDQSxnQkFBZ0Isb0dBQU07QUFDdEIseUJBQXlCLDZHQUFlO0FBQ3hDLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ2UsZ0Y7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBNkssQ0FBZ0IsaVBBQUcsRUFBQyxDOzs7Ozs7OztBQ0FqTTtBQUFBO0FBQUE7QUFBQTtBQUE4WSxDQUFnQiw2YkFBRyxFQUFDLEM7Ozs7Ozs7O0FDQWxhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPFBhZ2UgYWN0aW9uQmFySGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwiYW5pbS1wYWdlXCJcbiAgICAgICAgYmFja2dyb3VuZFNwYW5VbmRlclN0YXR1c0Jhcj1cInRydWVcIj5cbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwibWFpblwiIHZlcnRpY2FsQWxpZ25tZW50PVwidG9wXCI+XG5cbiAgICAgICAgICAgICAgICA8IS0tIEFuaW1hbCBDb3ZlciBpbWFnZSAtLT5cbiAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNsYXNzPVwiYW5pbS1jb3ZlclwiIHJvd3M9XCJhdXRvXCIgY29sdW1ucz1cIipcIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugcm93PVwiMFwiIGNvbD1cIjBcIiBtYXJnaW5Ub3A9XCItNDBcIiBoZWlnaHQ9XCIxODBcIiBzdHJldGNoPVwiYXNwZWN0RmlsbFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2FyZC1pbWdcIiA6c3JjPVwiaXRlbS5jb3ZlclwiIC8+XG4gICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjBcIiBjb2w9XCIwXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJ0b3BcIlxuICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50PVwibGVmdFwiIEB0YXA9XCJjbG9zZVwiIDp0ZXh0PVwiJ2ZhLWFycm93LWxlZnQnIHwgZm9udGljb25cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZhIGNsb3NlXCIgZm9udFNpemU9XCIyNFwiIC8+XG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XG5cbiAgICAgICAgICAgICAgICA8IS0tIEFuaW1hbCBnYWxsZXJ5IGltYWdlcyAtLT5cbiAgICAgICAgICAgIDxTY3JvbGxWaWV3IGNsYXNzPVwiYW5pbS1pbWFnZXNcIiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIj5cbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgdi1iaW5kOmtleT1cImltYWdlXCIgdi1mb3I9XCJpbWFnZSBpbiBpdGVtLmltYWdlc1wiIHJvd3M9XCJhdXRvXCIgY29sdW1ucz1cIipcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzcz1cImNhcmQtaW1nLXRodW1iXCIgcm93PVwiMFwiIGNvbD1cIjBcIiA6c3JjPVwiaW1hZ2Uuc3JjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJldGNoPVwiYXNwZWN0Rml0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICA8L1Njcm9sbFZpZXc+XG5cbiAgICAgICAgICAgIDwhLS0gQW5pbWFsIGRldGFpbHMgLS0+XG4gICAgICAgICAgICA8R3JpZExheW91dCByb3dzPVwiYXV0byxhdXRvLGF1dG8sYXV0b1wiIGNvbHVtbnM9XCJhdXRvXCIgY2xhc3M9XCJjb250ZW50XCI+XG5cbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjbGFzcz1cImFuaW0taXRlbUluZm9cIiBtYXJnaW5Ub3A9XCIxNVwiIHJvdz1cIjFcIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIiBjb2x1bW5zPVwiYXV0bywqXCIgcm93cz1cImF1dG8sYXV0byxhdXRvLGF1dG9cIlxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJnZW5kZXJJY29uIHwgZm9udGljb25cIiByb3c9XCIwXCIgY29sPVwiMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dTcGFuPVwiMlwiIDpiYWNrZ3JvdW5kQ29sb3I9XCJpdGVtLmNhdGVnb3J5VGFnXCIgY2xhc3M9XCJmYSBjYXRlZ29yeS1pY29uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjBcIiBjb2w9XCIxXCIgY2xhc3M9XCJpdGVtLW5hbWVcIiB0ZXh0d3JhcD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ9XCJib3R0b21cIiBob3Jpem9udGFsQWxpZ25tZW50PVwibGVmdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6dGV4dD1cIml0ZW0ubmFtZVwiIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjFcIiBjb2w9XCIxXCIgY2xhc3M9XCJpdGVtLWNhdGVnb3J5XCIgdGV4dHdyYXA9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50PVwidG9wXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cImxlZnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnRleHQ9XCJpdGVtLmNhdGVnb3J5XCIgLz5cblxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cblxuICAgICAgICAgICAgICA8IS0tIHNvY2lhbCBiYXIgLS0+XG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwibGluZSBhbmltLWxpa2VzXCIgcm93PVwiMlwiIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcD1cIjEwXCIgLz5cblxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNsYXNzPVwiYW5pbS1saWtlc1wiIG1hcmdpblRvcD1cIjVcIiB3aWR0aD1cIjEwMCVcIiByb3c9XCIzXCJcbiAgICAgICAgICAgICAgICAgICAgY29sdW1ucz1cIiosYXV0byxhdXRvXCIgcm93cz1cImF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sPVwiMFwiIHJvd3M9XCJhdXRvXCIgY29sdW1ucz1cImF1dG8sYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cIjBcIiByb3c9XCIwXCIgcmVmPVwiaW5mb1wiIGNsYXNzPVwibGlrZS1pY29uIGZhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dGV4dD1cIidmYS1pbmZvLWNpcmNsZScgfCBmb250aWNvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVwiMVwiIHJvdz1cIjBcIiBjbGFzcz1cImxheW91dFwiIDp0ZXh0PVwiaXRlbS5icmVlZF9ncm91cCArICcgLSAnICsgaXRlbS5wcmltYXJ5X2JyZWVkXCI+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbD1cIjFcIiByb3dzPVwiYXV0b1wiIGNvbHVtbnM9XCJhdXRvLGF1dG9cIiBAdGFwPVwidG9nZ2xlSGVhcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ9XCIxNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cIjBcIiByb3c9XCIwXCIgcmVmPVwiZmF2b3JpdGVcIiBjbGFzcz1cImxpa2UtaWNvbiAgZmFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIltpdGVtLmlzRmF2b3JpdGUgPyAnaGVhcnQtYWN0aXZlJyA6ICdkZWZhdWx0J11cIiA6dGV4dD1cIml0ZW0uaXNGYXZvcml0ZSA/ICdmYS1oZWFydCc6J2ZhLWhlYXJ0LW8nIHwgZm9udGljb25cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cIjFcIiByb3c9XCIwXCIgY2xhc3M9XCJsYXlvdXRcIiB0ZXh0PVwiRmF2b3JpdGVcIj48L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNvbD1cIjJcIiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCByZWY9XCJcIiBjbGFzcz1cImxpa2UtaWNvbiBsYXlvdXQgZmFcIiA6dGV4dD1cIidmYS1zaGFyZS1zcXVhcmUtbycgfCBmb250aWNvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJsYXlvdXRcIiB0ZXh0PVwiU2hhcmVcIj48L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cblxuXG4gICAgICAgICAgICA8IS0tIEFuaW1hbCBEZXNjcmlwdGlvbiBMYWJlbCAody8gaWNvbikgLS0+XG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgd2lkdGg9XCIxMDAlXCIgY2xhc3M9XCJsaW5lQnJlYWsgYW5pbS1saWtlc1wiIC8+XG5cbiAgICAgICAgICAgIDxHcmlkbGF5b3V0IHJvd3M9XCJhdXRvLCpcIiBjbGFzcz1cImNvbnRlbnQgYW5pbS1jb250ZW50XCIgbWFyZ2luVG9wPVwiMTVcIj5cblxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IHJvdz1cIjBcIiByb3dzPVwiYXV0b1wiIG1hcmdpbkJvdHRvbT1cIjVcIiBjb2x1bW5zPVwiYXV0bywgYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVwiMFwiIDp0ZXh0PVwiJ2ZhLXRhZ3MnIHwgZm9udGljb25cIiBjbGFzcz1cImZhIGRlc2NyaXB0aW9uLWljb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA9XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cIjFcIiBjbGFzcz1cImRlc2NyaXB0aW9uLXRleHRcIiB0ZXh0PVwiRGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA9XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XG5cblxuICAgICAgICAgICAgICAgIDwhLS0gQW5pbWFsIERlc2NyaXB0aW9uIC0tPlxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCByb3c9XCIxXCI+XG4gICAgICAgICAgICAgICAgICAgIDxTY3JvbGxWaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cIiosICosICosICosICosICosICosICpcIiBjb2x1bW5zPVwiYXV0bywgKlwiIHZlcnRpY2FsQWxpZ25tZW50PVwidG9wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50PVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjBcIiBjb2w9XCIwXCIgY2xhc3M9XCJkZXNjcmlwdGlvbi12YWx1ZVwiIHRleHQ9XCJBdmFpbGFiaWxpdHk6XCIgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjBcIiBjb2w9XCIxXCIgIGNsYXNzPVwiZmEgZGVzY3JpcHRpb24tdmFsdWVcIiA6Y2xhc3M9XCJpdGVtLmlzQXZhaWxhYmxlPT10cnVlPyAnaXNBdmFpbGFibGUnOidpc05vdEF2YWlsYWJsZSdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gOnRleHQ9XCJpdGVtLmlzQXZhaWxhYmxlPT10cnVlPyAnQXZhaWxhYmxlJzonTm90IEF2YWlsYWJsZSdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIDp0ZXh0PVwiaXRlbS5pc0F2YWlsYWJsZT09dHJ1ZT8gJ2ZhLWNoZWNrJzonZmEtdGltZXMnIHwgZm9udGljb25cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIxXCIgY29sPVwiMFwiIGNsYXNzPVwiZGVzY3JpcHRpb24tdmFsdWVcIiB0ZXh0PVwiTG9jYXRpb246XCIgLz4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiMVwiIGNvbD1cIjFcIiBjbGFzcz1cImRlc2NyaXB0aW9uLXZhbHVlXCIgOnRleHQ9XCJpdGVtLmxvY2F0aW9uXCIgLz4gXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIyXCIgY29sPVwiMFwiIGNsYXNzPVwiZGVzY3JpcHRpb24tdmFsdWVcIiB0ZXh0PVwiQWdlOlwiIC8+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjJcIiBjb2w9XCIxXCIgY2xhc3M9XCJkZXNjcmlwdGlvbi12YWx1ZVwiIDp0ZXh0PVwiaXRlbS5hZ2VcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiM1wiIGNvbD1cIjBcIiBjbGFzcz1cImRlc2NyaXB0aW9uLXZhbHVlXCIgdGV4dD1cIkdlbmRlcjogXCIgLz4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiM1wiIGNvbD1cIjFcIiBjbGFzcz1cImRlc2NyaXB0aW9uLXZhbHVlXCIgOnRleHQ9XCJpdGVtLmdlbmRlclwiIC8+ICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjRcIiBjb2w9XCIwXCIgY2xhc3M9XCJkZXNjcmlwdGlvbi12YWx1ZVwiIHRleHQ9XCJCcmVlZCBHcm91cDpcIiAvPiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCI0XCIgY29sPVwiMVwiIGNsYXNzPVwiZGVzY3JpcHRpb24tdmFsdWVcIiA6dGV4dD1cIml0ZW0uYnJlZWRfZ3JvdXBcIiAvPiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjVcIiBjb2w9XCIwXCIgY2xhc3M9XCJkZXNjcmlwdGlvbi12YWx1ZVwiIHRleHQ9XCJQcmltYXJ5IEJyZWVkOlwiIC8+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjVcIiBjb2w9XCIxXCIgY2xhc3M9XCJkZXNjcmlwdGlvbi12YWx1ZVwiIDp0ZXh0PVwiaXRlbS5wcmltYXJ5X2JyZWVkXCIgLz4gICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCI2XCIgY29sPVwiMFwiIGNsYXNzPVwiZGVzY3JpcHRpb24tdmFsdWVcIiB0ZXh0PVwiQW5pbWFsIFNpemU6XCIgLz4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjZcIiBjb2w9XCIxXCIgY2xhc3M9XCJkZXNjcmlwdGlvbi12YWx1ZVwiIDp0ZXh0PVwiaXRlbS5hbmltYWxfc2l6ZVwiIC8+ICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCI3XCIgY29sPVwiMFwiIGNsYXNzPVwiZGVzY3JpcHRpb24tdmFsdWVcIiB0ZXh0PVwiUHJpbWFyeSBDb2xvcjpcIiAvPiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCI3XCIgY29sPVwiMVwiIGNsYXNzPVwiZGVzY3JpcHRpb24tdmFsdWVcIiA6dGV4dD1cIml0ZW0ucHJpbWFyeV9jb2xvclwiIC8+ICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgIDwvU2Nyb2xsVmlldz5cbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuXG5cbiAgICAgICAgICAgIDwvR3JpZGxheW91dD5cblxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgIDwvUGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiBbXCJpdGVtXCJdLFxuICBjb21wb25lbnRzOiB7fSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBnZW5kZXJJY29uKCkge1xuICAgICAgc3dpdGNoICh0aGlzLml0ZW0uZ2VuZGVyKSB7XG4gICAgICAgIGNhc2UgXCJNXCI6XG4gICAgICAgICAgdGhpcy5pdGVtLmNhdGVnb3J5VGFnID0gXCIjMDA5OWZmXCI7XG4gICAgICAgICAgcmV0dXJuIFwiZmEtbWFyc1wiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiRlwiOlxuICAgICAgICAgIHRoaXMuaXRlbS5jYXRlZ29yeVRhZyA9IFwiI2ZmY2NmZlwiO1xuICAgICAgICAgIHJldHVybiBcImZhLXZlbnVzXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIFwiZmEtZmlyZVwiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLmltYWdlcyA9IFtcbiAgICAgIHtcbiAgICAgICAgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL3BhbmNha2U2NDAuanBnXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9wYW5jYWtlNjQwLmpwZ1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvcGFuY2FrZTY0MC5qcGdcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL3BhbmNha2U2NDAuanBnXCJcbiAgICAgIH1cbiAgICBdO1xuICAgIC8vIHRoaXMuaXNMaWtlID0gdGhpcy5pdGVtLmlzTGlrZTtcbiAgICAvLyB0aGlzLmlzSGVhcnQgPSB0aGlzLml0ZW0uaXNGYXZvcml0ZTtcbiAgfSxcbiAgbW91bnRlZCgpIHt9LFxuICBtZXRob2RzOiB7XG4gICAgLy8gbmF2aWdhdGVCYWNrXG4gICAgY2xvc2UoKSB7XG4gICAgICB0aGlzLiRuYXZpZ2F0ZUJhY2soKTtcbiAgICB9LFxuICAgIC8vIEFuaW1hdGUgJ0Zhdm9yaXRlJyBpY29uXG4gICAgYW5pbWF0ZUZhdm9yaXRlKCkge1xuICAgICAgbGV0IGltZ0xvZ28gPSB0aGlzLiRyZWZzLmZhdm9yaXRlLm5hdGl2ZVZpZXc7XG4gICAgICBpbWdMb2dvXG4gICAgICAgIC5hbmltYXRlKHtcbiAgICAgICAgICBzY2FsZToge1xuICAgICAgICAgICAgeDogMC42LFxuICAgICAgICAgICAgeTogMC42XG4gICAgICAgICAgfSxcbiAgICAgICAgICBkdXJhdGlvbjogNTAsXG4gICAgICAgICAgZGVsYXk6IDBcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGltZ0xvZ28uYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY2FsZToge1xuICAgICAgICAgICAgICB4OiAxLjIsXG4gICAgICAgICAgICAgIHk6IDEuMixcbiAgICAgICAgICAgICAgZHVyYXRpb246IDUwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBpbWdMb2dvLmFuaW1hdGUoe1xuICAgICAgICAgICAgc2NhbGU6IHtcbiAgICAgICAgICAgICAgeDogMSxcbiAgICAgICAgICAgICAgeTogMSxcbiAgICAgICAgICAgICAgZHVyYXRpb246IDEwMFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbigpIHt9KTtcbiAgICB9LFxuICAgIHRvZ2dsZUhlYXJ0KCkge1xuICAgICAgLy8gdG9nZ2xlIGlzRmF2b3JpdGVcbiAgICAgIHRoaXMuYW5pbWF0ZUZhdm9yaXRlKCk7XG4gICAgICB0aGlzLml0ZW0uaXNGYXZvcml0ZSA9ICF0aGlzLml0ZW0uaXNGYXZvcml0ZTtcbiAgICB9XG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGltYWdlczogbnVsbCxcbiAgICAgIGlzSGVhcnQ6IGZhbHNlXG4gICAgfTtcbiAgfVxufTtcbjwvc2NyaXB0PlxuPHN0eWxlIHNjb3BlZD5cbi8qIENTUyAqL1xuLmNsb3NlIHtcbiAgZm9udC1zaXplOiAyMDtcbiAgY29sb3I6IHJnYigyMjYsIDIyOSwgMjI5KTtcbiAgbWFyZ2luOiAxNSAwIDAgMTU7XG59XG5cblRleHRWaWV3IHtcbiAgYm9yZGVyLXdpZHRoOiAxO1xuICBib3JkZXItY29sb3I6ICNmZmZmZmY7XG59XG5cbi5kZXNjcmlwdGlvbi10ZXh0IHtcbiAgZm9udC1zaXplOiAxNDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmRlc2NyaXB0aW9uLWljb24ge1xuICBmb250LXNpemU6IDE2O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMzZTllZGI7XG4gIG1hcmdpbi1yaWdodDogODtcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRlc2NyaXB0aW9uLXZhbHVlIHtcbiAgZm9udC1zaXplOiAxNDtcbiAgY29sb3I6IGJsYWNrO1xuICBtYXJnaW46IDg7XG59XG5cbi5kZXNjcmlwdGlvbi12YWx1ZS5pc0F2YWlsYWJsZSB7XG4gIGNvbG9yOiBncmVlbjtcbiAgZm9udC13ZWlnaHQ6IGJvbGRcbn1cblxuLmRlc2NyaXB0aW9uLXZhbHVlLmlzTm90QXZhaWxhYmxlIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRcbn1cblxuLnJhdGUge1xuICBwYWRkaW5nLXRvcDogMztcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogI2ZmZTkwMDtcbiAgZm9udC1zaXplOiAxODtcbn1cblxuLnJhdGluZy12YWx1ZSB7XG4gIG1hcmdpbi1sZWZ0OiA1O1xufVxuXG4ubGlrZWQtYWN0aXZlIHtcbiAgY29sb3I6ICM0MDgwZmY7XG59XG5cbi5oZWFydC1hY3RpdmUge1xuICBjb2xvcjogI2I1MTIxMztcbn1cblxuLmRlZmF1bHQge1xuICBjb2xvcjogIzgyODI4Mjtcbn1cblxuLmxheW91dCB7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gIGNvbG9yOiAjODI4MjgyO1xuICBmb250LXNpemU6IDE0O1xuICBoZWlnaHQ6IDMwO1xuICBwYWRkaW5nOiA1IDAgNSAwO1xufVxuXG4ubGlrZS1pY29uIHtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgaGVpZ2h0OiAzMDtcbiAgZm9udC1zaXplOiAxNjtcbiAgbWFyZ2luLXJpZ2h0OiAyO1xuICBwYWRkaW5nOiA1IDUgNSA1O1xufVxuXG4uaXRlbS1uYW1lIHtcbiAgZm9udC1zaXplOiAxNDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5pdGVtLWNhdGVnb3J5IHtcbiAgZm9udC1zaXplOiAxNDtcbiAgY29sb3I6ICM4MjgyODI7XG59XG5cbi5jYXRlZ29yeS1pY29uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNTtcbiAgY29sb3I6IHdoaXRlO1xuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI1O1xuICBib3JkZXItd2lkdGg6IDE7XG4gIGJvcmRlci1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tdG9wOiA0O1xuICBtYXJnaW4tcmlnaHQ6IDE1O1xuICB3aWR0aDogNDA7XG4gIGhlaWdodDogNDA7XG59XG5cbi5jb250ZW50IHtcbiAgbWFyZ2luLWxlZnQ6IDE2O1xuICBtYXJnaW4tcmlnaHQ6IDE2O1xuICBtYXJnaW4tYm90dG9tOiAzO1xuICAvKiBtYXJnaW4tdG9wOiAxNjsgKi9cbn1cblxuLmNhcmQtaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjUwO1xuICBtYXJnaW4tYm90dG9tOiA1O1xufVxuXG4uY2FyZC1pbWctdGh1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMwLCAyMzAsIDIzMCk7XG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDU7XG4gIHdpZHRoOiAxMzA7XG4gIGhlaWdodDogNzA7XG4gIG1hcmdpbi1sZWZ0OiA1O1xufVxuXG4ubGluZSB7XG4gIGhlaWdodDogMC41O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjZTBlMGUwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xufVxuXG4ubGluZUJyZWFrIHtcbiAgaGVpZ2h0OiAwLjU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICNlMGUwZTA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG59XG5cblxuLyogQW5pbWF0aW9ucyAqL1xuLmFuaW0tcGFnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGQ2ZDg7XG4gIGFuaW1hdGlvbi1uYW1lOiBrZXktcGFnZTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XG59XG5cbkBrZXlmcmFtZXMga2V5LXBhZ2Uge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RhZGFkYTtcbiAgfVxuXG4gIDIwJSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RiZDJkNTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB9XG59XG5cbi5hbmltLWNvdmVyIHtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uLW5hbWU6IGtleS1jb3ZlcjtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxO1xuICBhbmltYXRpb24tZGVsYXk6IDAuNTtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xufVxuXG5Aa2V5ZnJhbWVzIGtleS1jb3ZlciB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDU1MCkgc2NhbGUoMCwgMCk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XG4gIH1cblxuICAzMCUge1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSwgMSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XG4gIH1cbn1cblxuLmFuaW0taW1hZ2VzIHtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uLW5hbWU6IGtleS1pbWFnZXM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjc7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcbn1cblxuQGtleWZyYW1lcyBrZXktaW1hZ2VzIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNTUwKSBzY2FsZSgwLCAwKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcbiAgfVxuXG4gIDMwJSB7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxLCAxKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcbiAgfVxufVxuXG4uYW5pbS1pdGVtSW5mbyB7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbi1uYW1lOiBrZXktaXRlbUluZm87XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjI7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcbn1cblxuQGtleWZyYW1lcyBrZXktaXRlbUluZm8ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCwgNTApO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcbiAgfVxufVxuXG4uYW5pbS1saWtlcyB7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbi1uYW1lOiBrZXktbGlrZXM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjU7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcbn1cblxuQGtleWZyYW1lcyBrZXktbGlrZXMge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCwgNTApO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcbiAgfVxufVxuXG4uYW5pbS1jb250ZW50IHtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uLW5hbWU6IGtleS1jb250ZW50O1xuICBhbmltYXRpb24tZHVyYXRpb246IDE7XG4gIGFuaW1hdGlvbi1kZWxheTogMS44O1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XG59XG5cbkBrZXlmcmFtZXMga2V5LWNvbnRlbnQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCwgNTApO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcbiAgfVxufVxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XG4gICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwibWFpblwiPlxuXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImNvbnRlbnRcIj5cblxuICAgICAgICAgICAgPEltYWdlIHN0cmV0Y2g9XCJhc3BlY3RGaXRcIiBjbGFzcz1cImNhcmQtaW1nXCIgQHRhcD1cIm9uQ2xpY2tCdXR0b24oKVwiXG4gICAgICAgICAgICAgICAgOnNyYz1cIml0ZW0uY292ZXJcIiAvPlxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgd2lkdGg9XCIxMDAlXCIgY29sdW1ucz1cImF1dG8sKlwiIHJvd3M9XCJhdXRvLGF1dG9cIiBjbGFzcz1cIlwiXG4gICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiBAdGFwPVwib25DbGlja0J1dHRvbigpXCI+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPCEtLSBHZW5kZXIgLS0+XG4gICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiY2F0ZWdvcnlJY29uIHwgZm9udGljb25cIiByb3c9XCIwXCIgY29sPVwiMFwiXG4gICAgICAgICAgICAgICAgICAgIHJvd1NwYW49XCIyXCIgOmJhY2tncm91bmRDb2xvcj1cIml0ZW0uY2F0ZWdvcnlUYWdcIiBjbGFzcz1cImZhIGNhdGVnb3J5LWljb25cIiAvPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPCEtLU5hbWUsIGFnZSAtLT4gICAgICBcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjBcIiBjb2w9XCIxXCIgY2xhc3M9XCJmYSBpdGVtLW5hbWVcIiB0ZXh0d3JhcD1cInRydWVcIiB2ZXJ0aWNhbEFsaWdubWVudD0gXCJjZW50ZXJcIiBob3Jpem9udGFsQWxpZ25tZW50PVwibGVmdFwiIDp0ZXh0PVwiaXRlbS5uYW1lICsgJywgJyArIGl0ZW0uYWdlXCIgIC8+XG5cblxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IHJvdz1cIjFcIiBjb2w9XCIxXCIgcm93cz1cImF1dG9cIiBjb2x1bW5zPVwiYXV0byxhdXRvLGF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjBcIiBjb2w9XCIwXCIgY2xhc3M9XCJpdGVtLWNhdGVnb3J5XCIgdGV4dHdyYXA9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50PVwiYm90dG9tXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cImxlZnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnRleHQ9XCJpdGVtLmNhdGVnb3J5XCIgLz5cblxuXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHdpZHRoPVwiMTAwJVwiIG1hcmdpblRvcD1cIjVcIiBjbGFzcz1cImxpbmVcIiAvPlxuXG4gICAgICAgICAgICA8IS0tIEJVRzogcHJvYmxlbSB3aXRoIHNjcm9sbCB0cmFuc2lzdGlvbiBvbiBpb3MgZW11bGF0b3IgLS0+XG4gICAgICAgICAgICA8IS0tIDxJdGVtTGlrZSA6aXRlbT1cIml0ZW1cIj48L0l0ZW1MaWtlPiAtLT5cblxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgY2xhc3M9XCJcIiBtYXJnaW5Ub3A9XCI1XCIgd2lkdGg9XCIxMDAlXCIgcm93PVwiM1wiXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9XCIqLCBhdXRvLCBhdXRvXCIgcm93cz1cImF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sPVwiMFwiIHJvd3M9XCJhdXRvXCIgY29sdW1ucz1cImF1dG8sYXV0b1wiIEB0YXA9XCJvbkNsaWNrQnV0dG9uKClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XCIwXCIgcm93PVwiMFwiIHJlZj1cImluZm9cIiBjbGFzcz1cImxpa2UtaWNvbiBmYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOnRleHQ9XCInZmEtaW5mby1jaXJjbGUnIHwgZm9udGljb25cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cIjFcIiByb3c9XCIwXCIgY2xhc3M9XCJsYXlvdXRcIiA6dGV4dD1cIml0ZW0uYnJlZWRfZ3JvdXAgKyAnIC0gJyArIGl0ZW0ucHJpbWFyeV9icmVlZFwiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sPVwiMVwiIHJvd3M9XCJhdXRvXCIgY29sdW1ucz1cImF1dG8sYXV0b1wiIEB0YXA9XCJ0b2dnbGVIZWFydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodD1cIjE1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVwiMFwiIHJvdz1cIjBcIiByZWY9XCJmYXZvcml0ZVwiIGNsYXNzPVwibGlrZS1pY29uICBmYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwiW2l0ZW0uaXNGYXZvcml0ZSA/ICdoZWFydC1hY3RpdmUnIDogJ2RlZmF1bHQnXVwiIDp0ZXh0PVwiaXRlbS5pc0Zhdm9yaXRlID8gJ2ZhLWhlYXJ0JzonZmEtaGVhcnQtbycgfCBmb250aWNvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVwiMVwiIHJvdz1cIjBcIiBjbGFzcz1cImxheW91dFwiIHRleHQ9XCJGYXZvcml0ZVwiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNvbD1cIjJcIiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCByZWY9XCJcIiBjbGFzcz1cImxpa2UtaWNvbiBsYXlvdXQgZmFcIiA6dGV4dD1cIidmYS1zaGFyZS1zcXVhcmUtbycgfCBmb250aWNvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJsYXlvdXRcIiB0ZXh0PVwiU2hhcmVcIj48L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cbiAgICAgICAgPC9TdGFja0xheW91dD5cblxuICAgICAgICA8U3RhY2tMYXlvdXQgd2lkdGg9XCIxMDAlXCIgY2xhc3M9XCJsaW5lQnJlYWtcIiAvPlxuXG4gICAgPC9TdGFja0xheW91dD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4vLyBpbXBvcnQgSXRlbUxpa2UgZnJvbSBcIi4vaXRlbUxpa2VcIjtcbmltcG9ydCB7IGlzSU9TLCBpc0FuZHJvaWQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczogW1wiaXRlbVwiXSxcbiAgY29tcG9uZW50czoge1xuICAgIC8vIEl0ZW1MaWtlXG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgY2F0ZWdvcnlJY29uKCkge1xuICAgICAgc3dpdGNoICh0aGlzLml0ZW0uZ2VuZGVyKSB7XG4gICAgICAgIGNhc2UgXCJNXCI6XG4gICAgICAgICAgdGhpcy5pdGVtLmNhdGVnb3J5VGFnID0gXCIjMDA5OWZmXCJcbiAgICAgICAgICByZXR1cm4gXCJmYS1tYXJzXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJGXCI6XG4gICAgICAgICAgdGhpcy5pdGVtLmNhdGVnb3J5VGFnID0gXCIjZmZjY2ZmXCJcbiAgICAgICAgICByZXR1cm4gXCJmYS12ZW51c1wiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBcImZhLWZpcmVcIjtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGNyZWF0ZWQoKSB7XG4gICAgLy8gdGhpcy5pc0xpa2UgPSAgdGhpcy5pdGVtLmlzTGlrZVxuICAgIC8vIHRoaXMuaXNIZWFydCA9ICB0aGlzLml0ZW0uaXNGYXZvcml0ZVxuICB9LFxuICBtb3VudGVkKCkge30sXG4gIG1ldGhvZHM6IHtcbiAgICBhbmltYXRlRmF2b3JpdGUoKSB7XG4gICAgICBpZiAoaXNJT1MpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGV0IGltZ0xvZ28gPSB0aGlzLiRyZWZzLmZhdm9yaXRlLm5hdGl2ZVZpZXc7XG4gICAgICBpbWdMb2dvXG4gICAgICAgIC5hbmltYXRlKHtcbiAgICAgICAgICBzY2FsZToge1xuICAgICAgICAgICAgeDogMC42LFxuICAgICAgICAgICAgeTogMC42XG4gICAgICAgICAgfSxcbiAgICAgICAgICBkdXJhdGlvbjogNTAsXG4gICAgICAgICAgZGVsYXk6IDBcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGltZ0xvZ28uYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY2FsZToge1xuICAgICAgICAgICAgICB4OiAxLjIsXG4gICAgICAgICAgICAgIHk6IDEuMixcbiAgICAgICAgICAgICAgZHVyYXRpb246IDUwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBpbWdMb2dvLmFuaW1hdGUoe1xuICAgICAgICAgICAgc2NhbGU6IHtcbiAgICAgICAgICAgICAgeDogMSxcbiAgICAgICAgICAgICAgeTogMSxcbiAgICAgICAgICAgICAgZHVyYXRpb246IDEwMFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbigpIHt9KTtcbiAgICB9LFxuICAgIHRvZ2dsZUhlYXJ0KCkge1xuICAgICAgdGhpcy5hbmltYXRlRmF2b3JpdGUoKTtcbiAgICAgIHRoaXMuaXRlbS5pc0Zhdm9yaXRlID0gIXRoaXMuaXRlbS5pc0Zhdm9yaXRlO1xuICAgIH0sXG4gICAgb25DbGlja0J1dHRvbigpIHtcbiAgICAgIHRoaXMuJGVtaXQoXCJjbGlja2VkXCIsIHRoaXMuaXRlbSk7XG4gICAgfVxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpc0xpa2U6IGZhbHNlLFxuICAgICAgaXNIZWFydDogZmFsc2VcbiAgICB9O1xuICB9XG59O1xuPC9zY3JpcHQ+XG48c3R5bGUgc2NvcGVkPlxuLml0ZW0tY2F0ZWdvcnkge1xuICBmb250LXNpemU6IDE0O1xuICBjb2xvcjogIzgyODI4Mjtcbn1cblxuLmdlbmRlci1pY29uIHtcbiAgcGFkZGluZy10b3A6IDM7XG4gIHBhZGRpbmctcmlnaHQ6IDM7XG4gIGZvbnQtc2l6ZTogMTY7XG4gIG1hcmdpbi1yaWdodDogMTA7XG59XG5cbi5pbmZvLWljb24ge1xuICBwYWRkaW5nLXRvcDogMztcbiAgcGFkZGluZy1sZWZ0OiAzO1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxNDtcbiAgbWFyZ2luLWxlZnQ6IDEwO1xufVxuXG4ucmF0aW5nLXZhbHVlIHtcbiAgbWFyZ2luLWxlZnQ6IDU7XG59XG5cbi5saWtlZC1hY3RpdmUge1xuICBjb2xvcjogIzQwODBmZjtcbn1cblxuLmhlYXJ0LWFjdGl2ZSB7XG4gIGNvbG9yOiAjYjUxMjEzO1xufVxuXG4uZGVmYXVsdCB7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuXG5cbi5sYXlvdXQge1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICBjb2xvcjogIzgyODI4MjtcbiAgZm9udC1zaXplOiAxNDtcbiAgaGVpZ2h0OiAzMDtcbiAgcGFkZGluZzogNSAwIDUgMDtcbn1cblxuLmxpa2UtaWNvbiB7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gIGhlaWdodDogMzA7XG4gIGZvbnQtc2l6ZTogMTY7XG4gIG1hcmdpbi1yaWdodDogMjtcbiAgcGFkZGluZzogNSA1IDUgNTtcbn1cblxuLml0ZW0tbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLWJvdHRvbTogMjtcbn1cblxuLml0ZW0tY2F0ZWdvcnkge1xuICBmb250LXNpemU6IDE0O1xuICBjb2xvcjogIzgyODI4Mjtcbn1cblxuLmNhdGVnb3J5LWljb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA1O1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI1O1xuICBib3JkZXItd2lkdGg6IDE7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLXRvcDogNDtcbiAgbWFyZ2luLXJpZ2h0OiAxNTtcbiAgd2lkdGg6IDQwO1xuICBoZWlnaHQ6IDQwO1xufVxuXG4uY29udGVudCB7XG4gIG1hcmdpbi1sZWZ0OiAxNjtcbiAgbWFyZ2luLXJpZ2h0OiAxNjtcbiAgbWFyZ2luLWJvdHRvbTogMztcbiAgbWFyZ2luLXRvcDogMTY7XG59XG5cbi5jYXJkLWltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1MDtcbiAgbWFyZ2luLWJvdHRvbTogNTtcbn1cblxuLmxpbmUge1xuICBoZWlnaHQ6IDAuNTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI2UwZTBlMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcbn1cblxuLmxpbmVCcmVhayB7XG4gIGhlaWdodDogNztcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI2UwZTBlMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcbn1cbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxuXG4gICAgPEdyaWRMYXlvdXQgcm93cz1cIipcIiBjb2x1bW5zPVwiKlwiPlxuICAgICAgICA8SW1hZ2UgaGVpZ2h0PVwiMTUwXCIgd2lkdGg9XCIxMDAlXCIgbWFyZ2luQm90dG9tPVwiMTBcIiBzdHJldGNoPVwiYXNwZWN0RmlsbFwiXG4gICAgICAgICAgICA6c3JjPVwiaXRlbS5jb3ZlclwiIC8+IC8+XG4gICAgICAgIDxHcmlkTGF5b3V0IHZlcnRpY2FsQWxpZ25tZW50PVwiYm90dG9tXCI+XG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJiYW5uZXIyXCIgYmFja2dyb3VuZENvbG9yPVwiIzQ4OWU5ZTllXCI+XG4gICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiaXRlbS5jYXRlZ29yeSArICcgKCcgKyAgaXRlbS5jb3VudCAgKyAgJyknXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjYXRlZ29yeS1uYW1lICBtLWItMTAgbS10LTEwXCIgdGV4dHdyYXA9XCJ0cnVlXCI+PC9MYWJlbD5cbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgIDwvR3JpZExheW91dD5cbiAgICA8L0dyaWRMYXlvdXQ+XG5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgcHJvcHM6IFtcIml0ZW1cIl0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIG9uQ2xpY2tCdXR0b24oZGF0YSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoXCJjbGlja2VkXCIsIGRhdGEuaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9XG4gICAgfTtcbjwvc2NyaXB0PlxuPHN0eWxlIHNjb3BlZD5cbiAgICAuZGVmYXVsdC1pbWcge1xuICAgICAgICBjb2xvcjogI2QxY2VjZTViO1xuICAgIH1cblxuICAgIC5jYXRlZ29yeS1uYW1lIHtcbiAgICAgICAgY29sb3I6ICNmN2Y3Zjc7XG4gICAgICAgIGZvbnQtc2l6ZTogMTQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogNSAwIDE1IDBcbiAgICB9XG5cbiAgICAuYmFubmVyIHtcbiAgICAgICAgY29sb3I6ICNiZGJkYmQ7XG4gICAgICAgIG9wYWNpdHk6IC4zO1xuICAgIH1cbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxuPFN0YWNrTGF5b3V0PlxuICA8SW1hZ2UgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiA6c3JjPVwic3JjXCIgc3RyZXRjaD1cImFzcGVjdEZpdFwiIGhlaWdodD1cIjExMFwiIGlvczpoZWlnaHQ9XCIxMjBcIiBjbGFzcz1cImltYWdlXCIgQHRhcD1cImFjdGlvblwiIC8+XG4gIDxCdXR0b24gdmVydGljYWxBbGlnbm1lbnQ9XCJib3R0b21cIiBjbGFzcz1cImJ1dHRvblwiIDp0ZXh0PVwiYCR7aWNvbn0gJHt0aXRsZX1gXCIgQHRhcD1cImFjdGlvblwiIC8+XG48L1N0YWNrTGF5b3V0PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIHByb3BzOiB7XG4gICAgICBpY29uOiBTdHJpbmcsXG4gICAgICB0aXRsZTogU3RyaW5nLFxuICAgICAgYWN0aW9uOiBGdW5jdGlvbixcbiAgICAgIHNyYzogU3RyaW5nXG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuLyogYnV0dG9uIG9uIGFuZHJvaWQgaXMgc3R5bGVkIHdpdGggZGVmYXVsdCBzZXR0aW5nIHdoZW4gYm9yZGVyIHJhZGl1cyBpcyBvbWl0dGVkKi9cbi5idXR0b257XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuPFN0YWNrTGF5b3V0PlxuICA8QnV0dG9uIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgY2xhc3M9XCJidXR0b25cIiA6dGV4dD1cImAke3RpdGxlfSAke2ljb259IGBcIiBAdGFwPVwiYWN0aW9uXCIgLz5cbjwvU3RhY2tMYXlvdXQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGljb246IFN0cmluZyxcbiAgICAgIHRpdGxlOiBTdHJpbmcsXG4gICAgICBhY3Rpb246IEZ1bmN0aW9uLFxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cbi8qIGJ1dHRvbiBvbiBhbmRyb2lkIGlzIHN0eWxlZCB3aXRoIGRlZmF1bHQgc2V0dGluZyB3aGVuIGJvcmRlciByYWRpdXMgaXMgb21pdHRlZCovXG4uYnV0dG9ue1xuICBib3JkZXItcmFkaXVzOiAyNSU7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICAgIDxQYWdlIGNsYXNzPVwicGFnZVwiPlxuICAgICAgICA8QWN0aW9uQmFyIGNsYXNzPVwiYWN0aW9uLWJhclwiPlxuICAgICAgICAgICAgPE5hdmlnYXRpb25CdXR0b24gQHRhcD1cIiRuYXZpZ2F0ZUJhY2soKVwiIGFuZHJvaWQuc3lzdGVtSWNvbj1cImljX21lbnVfYmFja1wiIC8+XG4gICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJhY3Rpb24tYmFyLXRpdGxlXCIgOnRleHQ9XCJBbmltYWxDZW50ZXIubmFtZVwiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiAvPj5cbiAgICAgICAgPC9BY3Rpb25CYXI+XG5cbiAgICAgICAgPFNjcm9sbFZpZXc+XG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPCEtLSBBbmltYWwgQ2VudGVyIGNvdmVyIHBpYyAtLT5cbiAgICAgICAgICAgICAgICA8SW1hZ2UgOnNyYz1cIkFuaW1hbENlbnRlci5pbWFnZVVSTFwiIHN0cmV0Y2g9XCJhc3BlY3RGaXRcIiBoZWlnaHQ9XCIyMDBcIiBjbGFzcz1cImFuaW0tY292ZXIgbS1iLTE1XCIgLz5cblxuICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIxXCIgY2xhc3M9XCJoci1saWdodCBtLXQtMTUgbS1iLTE1XCIvPlxuXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cIiosICosICosIGF1dG9cIiBjb2x1bW5zPVwiYXV0bywqXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBuYW1lIC0tPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugcm93PVwiMFwiIGNvbD1cIjBcIiBjbGFzcz1cImFuaW0tY29udGVudDEgcC1sLTE1IHAtYi0xMCBtLXItMjBcIiBzcmM9XCJ+L2Fzc2V0cy9pbWFnZXMvYWNob3VzZS5wbmdcIiBzdHJldGNoPVwiYXNwZWN0Rml0XCIgaGVpZ2h0PVwiNDBcIiB3aWR0aD1cIjQwXCIgbG9hZE1vZGU9XCJhc3luY1wiIG1hcmdpbj1cIjNcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIwXCIgY29sPVwiMVwiICBjbGFzcz1cImFuaW0tY29udGVudDEgdGV4dCBwLWItMTAgZm9udC13ZWlnaHQtYm9sZCB0aXRsZSBzdGFja1wiIG1hcmdpbj1cIjVcIiB0ZXh0V3JhcD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gOnRleHQ9XCJBbmltYWxDZW50ZXIubmFtZSArICcgQW5pbWFsIENhcmUgQ2VudGVyJ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cbiAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cblxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gYWRkcmVzcyAtLT5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHJvdz1cIjFcIiBjb2w9XCIwXCIgY2xhc3M9XCJhbmltLWNvbnRlbnQyIHAtbC0xNSBwLWItMTAgbS1yLTIwXCIgIHNyYz1cIn4vYXNzZXRzL2ltYWdlcy9sb2NhdGlvbmljb24ucG5nXCIgc3RyZXRjaD1cImFzcGVjdEZpdFwiIGhlaWdodD1cIjQwXCIgd2lkdGg9XCI0MFwiIGxvYWRNb2RlPVwiYXN5bmNcIiBtYXJnaW49XCIzXCIvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIxXCIgY29sPVwiMVwiIGNsYXNzPVwiYW5pbS1jb250ZW50MiBwLWItMTAgc3RhY2tcIiBtYXJnaW49XCI1XCIgQHRhcD1cIm9uQWRkcmVzc1RhcFwiIHRleHRXcmFwPVwidHJ1ZVwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gIGNsYXNzPVwiZmEgdGV4dC1wcmltYXJ5XCIgOnRleHQ9XCJBbmltYWxDZW50ZXIuYWRkcmVzc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cbiAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gcGhvbmUgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSByb3c9XCIyXCIgY29sPVwiMFwiIGNsYXNzPVwiYW5pbS1jb250ZW50MyBwLWwtMTUgcC1iLTEwIG0tci0yMFwiICBzcmM9XCJ+L2Fzc2V0cy9pbWFnZXMvcGhvbmVpY29uLnBuZ1wiIHN0cmV0Y2g9XCJhc3BlY3RGaXRcIiBoZWlnaHQ9XCI0MFwiIHdpZHRoPVwiNDBcIiBsb2FkTW9kZT1cImFzeW5jXCIgbWFyZ2luPVwiM1wiLz5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjJcIiBjb2w9XCIxXCIgY2xhc3M9XCJhbmltLWNvbnRlbnQzIGZhIHRleHQtcHJpbWFyeSBwLWItMTAgc3RhY2tcIiA6dGV4dD1cIkFuaW1hbENlbnRlci5waG9uZVwiIEB0YXA9XCJvblBob25lVGFwXCIgbWFyZ2luPVwiNVwiICAvPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBob3VycyAtLT5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHJvdz1cIjNcIiBjb2w9XCIwXCIgY2xhc3M9XCJhbmltLWNvbnRlbnQ0IHAtbC0xNSBwLWItMTAgbS1yLTIwXCIgc3JjPVwifi9hc3NldHMvaW1hZ2VzL2hvdXJzaWNvbi5wbmdcIiBzdHJldGNoPVwiYXNwZWN0Rml0XCIgaGVpZ2h0PVwiNDBcIiB3aWR0aD1cIjQwXCIgbG9hZE1vZGU9XCJhc3luY1wiIG1hcmdpbj1cIjNcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IHJvdz1cIjNcIiBjb2w9XCIxXCIgY29sdW1ucz1cIiosICpcIiByb3dzPVwiYXV0bywgYXV0b1wiIGNsYXNzPVwiYW5pbS1jb250ZW50NCBzdGFjay1ob3Vyc1wiICBtYXJnaW49XCI1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiMFwiIGNvbD1cIjBcIiBjbGFzcz1cImhvdXJzXCIgOnRleHQ9XCJBbmltYWxDZW50ZXIuYXZhaWxhYmlsaXR5LndlZWtkYXlcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjBcIiBjb2w9XCIxXCIgY2xhc3M9XCJob3Vyc1wiIDp0ZXh0PVwiQW5pbWFsQ2VudGVyLmF2YWlsYWJpbGl0eS53ZWVrZGF5aG91cnNcIiAgdGV4dFdyYXA9XCJ0cnVlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjFcIiBjb2w9XCIwXCIgY2xhc3M9XCJob3Vyc1wiIDp0ZXh0PVwiQW5pbWFsQ2VudGVyLmF2YWlsYWJpbGl0eS53ZWVrZW5kXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIxXCIgY29sPVwiMVwiIGNsYXNzPVwiaG91cnNcIiA6dGV4dD1cIkFuaW1hbENlbnRlci5hdmFpbGFiaWxpdHkud2Vla2VuZGhvdXJzXCIgIHRleHRXcmFwPVwidHJ1ZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgPC9TY3JvbGxWaWV3PlxuICAgIDwvUGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4vLyAtLS1wbHVnaW5zLS0tXG4vLyBwaG9uZVxudmFyIHBob25lID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1waG9uZVwiKTtcblxuLy8gZGlyZWN0aW9uc1xudmFyIERpcmVjdGlvbnMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWRpcmVjdGlvbnNcIikuRGlyZWN0aW9ucztcbmxldCBkaXJlY3Rpb25zID0gbmV3IERpcmVjdGlvbnMoKTtcbi8vLS0tLS0tLVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiBbXCJBbmltYWxDZW50ZXJcIl0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBhbmltYWxDZW50ZXJEYXRhKCkge1xuICAgICAgY29uc29sZS5sb2coXCJhbmltYWxDZW50ZXJEYXRhKCksIHJldHVybmluZyBkYXRhOiBcIiArIHRoaXMuQW5pbWFsQ2VudGVyKTtcbiAgICAgIHJldHVybiB0aGlzLkFuaW1hbENlbnRlciB8fCB7fTtcbiAgICB9XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIG9uQWRkcmVzc1RhcCgpIHtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBcIm9uQWRkcmVzc1RhcCgpLCBnZXQgZGlyZWN0aW9ucyB0byBcIiArIHRoaXMuQW5pbWFsQ2VudGVyLmFkZHJlc3NcbiAgICAgICk7XG5cbiAgICAgIC8vIG11c3QgcGFzcyBpbiBzdHJpbmcgYXMgdmFyaWFibGUgb3RoZXJ3aXNlIGl0IGRpcmVjdGlvbnMubmF2aWdhdGUoKSB3b24ndCB3b3JrXG4gICAgICBjb25zdCBhZGRyZXNzID0gdGhpcy5BbmltYWxDZW50ZXIuYWRkcmVzcztcblxuICAgICAgZGlyZWN0aW9ucy5hdmFpbGFibGUoKS50aGVuKGZ1bmN0aW9uKGF2YWlsKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coYXZhaWwgPyBcIlllc1wiIDogXCJOb1wiKTtcbiAgICAgICAgaWYgKGF2YWlsKSB7XG4gICAgICAgICAgZGlyZWN0aW9uc1xuICAgICAgICAgICAgLm5hdmlnYXRlKHtcbiAgICAgICAgICAgICAgdG86IHtcbiAgICAgICAgICAgICAgICAvLyBlaXRoZXIgcGFzcyBpbiBhIHNpbmdsZSBvYmplY3Qgb3IgYW4gQXJyYXlcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiBhZGRyZXNzXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihcbiAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJNYXBzIGFwcCBsYXVuY2hlZC5cIik7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIG9uUGhvbmVUYXAoKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIm9uUGhvbmVUYXAoKSwgY2FsbCBcIiArIHRoaXMuQW5pbWFsQ2VudGVyLnBob25lKTtcbiAgICAgIHBob25lLmRpYWwodGhpcy5BbmltYWxDZW50ZXIucGhvbmUsIHRydWUpO1xuICAgIH0sXG4gICAgXG4gIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxuQGltcG9ydCBcIkAvQW5pbWFsQ2VudGVyXCI7XG5cbi8vLS0tIDxhbmltYXRpb24+IC0tLVxuXG4vLyBjb3ZlciBpbWFnZVxuLmFuaW0tY292ZXIge1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb24tbmFtZToga2V5LWNvdmVyO1xuICBhbmltYXRpb24tZHVyYXRpb246IDE7XG4gIGFuaW1hdGlvbi1kZWxheTogMC41O1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XG59XG5cbkBrZXlmcmFtZXMga2V5LWNvdmVyIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTAwKSBzY2FsZSgwLCAwKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcbiAgfVxuXG4gIDMwJSB7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxLCAxKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcbiAgfVxufVxuXG4vLyBpY29ucyAmIGNvbnRlbnRcbi5hbmltLWNvbnRlbnQxIHtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uLW5hbWU6IGtleS1jb250ZW50O1xuICBhbmltYXRpb24tZHVyYXRpb246IDE7XG4gIGFuaW1hdGlvbi1kZWxheTogMC43NTtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xufVxuXG4uYW5pbS1jb250ZW50MiB7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbi1uYW1lOiBrZXktY29udGVudDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxO1xuICBhbmltYXRpb24tZGVsYXk6IDEuMDtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xufVxuXG4uYW5pbS1jb250ZW50MyB7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbi1uYW1lOiBrZXktY29udGVudDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxO1xuICBhbmltYXRpb24tZGVsYXk6IDEuMjU7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcbn1cblxuLmFuaW0tY29udGVudDQge1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb24tbmFtZToga2V5LWNvbnRlbnQ7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjU7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcbn1cblxuXG5Aa2V5ZnJhbWVzIGtleS1jb250ZW50IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAsIDUwKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XG4gIH1cbn1cbi8vLS0tIDwvYW5pbWF0aW9uPiAtLS1cblxuXG4vLy0tLSBjc3MgLS0tXG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThlbTtcbiAgY29sb3I6ICRtaWRuaWdodC1kYXJrO1xuXG59XG5cbi5zdGFjayB7XG4gIHBhZGRpbmctdG9wOiAxNDtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMTtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiKDIxMiwgMjEyLCAyMTIpO1xufVxuXG4uc3RhY2staG91cnMge1xuICBwYWRkaW5nLXRvcDogNjtcbn1cblxuLmhvdXJzIHtcbiAgY29sb3I6ICRibHVlLWRhcms7XG5cbn1cblxuQWN0aW9uQmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOWZjYTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiPlxuICAgIDxMYWJlbCBjbGFzcz1cImhvbWVwYWdlLWJsdWUgdGV4dC1wcmltYXJ5IGxpc3QtZ3JvdXAtaXRlbS10ZXh0IGZvbnQtd2VpZ2h0LWJvbGRcIiB0ZXh0V3JhcD1cInRydWVcIj5cbiAgICA8Rm9ybWF0dGVkU3RyaW5nPlxuICAgICAgICA8U3BhbiA6dGV4dD1cIml0ZW0ucXVlcnlcIi8+XG4gICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cbiAgICA8L0xhYmVsPlxuICAgIFxuICAgIDxMYWJlbCBjbGFzcz1cIi5mYXFfYW5zd2VyIC5saXN0LWdyb3VwLWl0ZW0tY29udGVudFwiIHRleHRXcmFwPVwidHJ1ZVwiPlxuICAgICAgPEZvcm1hdHRlZFN0cmluZz5cbiAgICAgICAgPFNwYW4gdGV4dC5kZWNvZGU9XCImIzk7XCIvPlxuICAgICAgICA8U3BhbiA6dGV4dD1cIml0ZW0uYW5zd2VyXCIvPlxuICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XG4gICAgPC9MYWJlbD5cbiBcbiAgPC9TdGFja0xheW91dD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgaXRlbTogT2JqZWN0XG4gIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxuQGltcG9ydCBcIkAvQW5pbWFsQ2VudGVyXCI7XG5cbi5mYXFfcXVlc3Rpb24ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMDtcbiAgY29sb3I6IGJsYWNrO1xufVxuLmZhcV9hbnN3ZXIge1xuICBjb2xvcjogIzQ1NDU0NTtcbn1cblxuLmxpc3QtZ3JvdXAtaXRlbS10ZXh0IHtcbiAgbWFyZ2luOiAyIDM7XG59XG4ubGlzdC1ncm91cC1pdGVtLWNvbnRlbnQge1xuICBwYWRkaW5nOiA4IDE1IDQgMTU7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWxpZ2h0O1xufVxuXG4uaG9tZXBhZ2UtYmx1ZSB7XG4gIGNvbG9yOiAkaG9tZXBhZ2UtYmx1ZTtcbn1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG5cdDxwYWdlIGFjdGlvbkJhckhpZGRlbj1cImZhbHNlXCIgYmFja2dyb3VuZFNwYW5VbmRlclN0YXR1c0Jhcj1cInRydWVcIj5cblx0XHQ8IS0tIEBsb2FkZWQ9XCJvbkxvYWRlZFwiIC0tPlxuICAgICAgICA8QWN0aW9uQmFyIGNsYXNzPVwiYWN0aW9uYmFyIG5hdlRhYlwiPlxuICAgICAgICAgICA8TmF2aWdhdGlvbkJ1dHRvbiBAdGFwPVwiJG5hdmlnYXRlQmFjaygpXCIgYW5kcm9pZC5zeXN0ZW1JY29uPVwiaWNfbWVudV9iYWNrXCIgLz5cbiAgICAgICAgICAgIDxMYWJlbCBmb250U2l6ZT1cIjE4XCIgdGV4dD1cIkFuaW1hbHMgZm9yIEFkb3B0aW9uXCI+PC9MYWJlbD5cbiAgICAgICAgPC9BY3Rpb25CYXI+XG5cblx0XHQ8R3JpZExheW91dCByb3dzPVwiYXV0byxhdXRvLCpcIiBjb2x1bW5zPVwiYXV0b1wiPlxuXG48IS0tbmF2IHRhYi0tPlxuXG5cdFx0XHQ8R3JpZExheW91dCAgcm93PVwiMVwiIHJlZj1cIm5hdlRhYlwiIGNsYXNzPVwibmF2VGFiXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJ0b3BcIiBoZWlnaHQ9XCI1MFwiXG5cdFx0XHRcdFx0d2lkdGg9XCIxMDAlXCIgIHJvd3M9XCJhdXRvXCIgY29sdW1ucz1cImF1dG8sYXV0b1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwhLS1hY3RpdmUgY2xhc3MgdGFiIG5hdmlnYXRpb24qKioqLS0+XG5cdFx0XHRcdFx0PEdyaWRMYXlvdXQgY2xhc3M9XCJ0YWJ2aWV3XCIgOmNsYXNzPVwic2VsZWN0ZWRUYWJ2aWV3PT0wPydhY3RpdmUnOicnXCJcblx0XHRcdFx0XHRcdFx0QHRhcD1cImFkb3B0aW9uTGlzdFwiIHJvd3M9XCIqLGF1dG9cIiBjb2xzPVwiYXV0b1wiIGNvbD1cIjBcIiByb3c9XCIwXCJcblx0XHRcdFx0XHRcdFx0d2lkdGg9XCI1MCVcIj5cblxuXHRcdFx0XHRcdFx0XHQ8TGFiZWwgdi1zaG93PVwic2VsZWN0ZWRUYWJ2aWV3PT0wXCIgcm93PVwiMFwiIGNsYXNzPVwiZmEgbmF2SWNvblwiXG5cdFx0XHRcdFx0XHRcdFx0XHQ6dGV4dD1cInNlbGVjdGVkVGFidmlldz09MD8nZmEtcGF3JzonJyB8IGZvbnRpY29uXCIvPlxuXG5cdFx0XHRcdFx0XHRcdDxMYWJlbCBob3Jpem9udGFsQWxpZ25tZW50PVwiY2VudGVyXCIgOmNsYXNzPVwic2VsZWN0ZWRUYWJ2aWV3PT0wPydhY3RpdmUnOicnXCIgcm93PVwiMVwiXG5cdFx0XHRcdFx0XHRcdFx0XHR0ZXh0PVwiQW5pbWFsc1wiIGNsYXNzPVwidGFidmlld1RleHRcIj48L0xhYmVsPlxuXG5cdFx0XHRcdFx0PC9HcmlkTGF5b3V0PlxuXG5cdFx0XHRcdFx0PEdyaWRMYXlvdXQgY2xhc3M9XCJ0YWJ2aWV3XCIgOmNsYXNzPVwic2VsZWN0ZWRUYWJ2aWV3PT0xPydhY3RpdmUnOicnXCJcblx0XHRcdFx0XHRcdFx0QHRhcD1cInNob3dDYXRlZ29yeVwiIHJvd3M9XCIqLGF1dG9cIiBjb2xzPVwiYXV0b1wiIGNvbD1cIjFcIiByb3c9XCIwXCJcblx0XHRcdFx0XHRcdFx0d2lkdGg9XCI1MCVcIj5cblxuXHRcdFx0XHRcdFx0XHQ8TGFiZWwgdi1zaG93PVwic2VsZWN0ZWRUYWJ2aWV3PT0xXCIgcm93PVwiMFwiIGNsYXNzPVwiZmEgbmF2SWNvblwiXG5cdFx0XHRcdFx0XHRcdFx0XHQ6dGV4dD1cInNlbGVjdGVkVGFidmlldz09MT8nZmEtZmlsdGVyJzonJyB8IGZvbnRpY29uXCIvPlxuXG5cdFx0XHRcdFx0XHRcdDxMYWJlbCA6Y2xhc3M9XCJzZWxlY3RlZFRhYnZpZXc9PTE/J2FjdGl2ZSc6JydcIiByb3c9XCIxXCJcblx0XHRcdFx0XHRcdFx0XHRcdHRleHQ9XCJGaWx0ZXJcIiBob3Jpem9udGFsQWxpZ25tZW50PVwiY2VudGVyXCIgY2xhc3M9XCJ0YWJ2aWV3VGV4dFwiPjwvTGFiZWw+XHRcdFx0XHRcdFx0XG5cblx0XHRcdFx0XHQ8L0dyaWRMYXlvdXQ+XG5cdFx0XHRcdFx0PCEtLSBlbmQgbmF2LS0+XG5cdFx0XHQ8L0dyaWRMYXlvdXQ+XG5cbjwhLS1zZWxlY3RlZCB0YWIgc2V0IHRvIHZpZXcgYW5pbWFsIC0tPlxuPCEtLWl0ZW0gLS0+XG5cdFx0XHQ8R3JpZExheW91dCB2LXNob3c9XCJzZWxlY3RlZFRhYnZpZXcgPT0gMFwiIHJvdz1cIjJcIiB3aWR0aD1cIjEwMCVcIiBiYWNrZ3JvdW5kQ29sb3I9XCJ3aGl0ZVwiPlxuPCEtLVRPRE86IENIQU5HRSA6S0VZIFRPIERJRkZFUkVOVCBWQUxVRSAtLT5cbjwhLS0gVlVFIFdBUk5JTkc6IER1cGxpY2F0ZSBrZXlzIGRldGVjdGVkOiAnW29iamVjdCBPYmplY3RdJy4gVGhpcyBtYXkgY2F1c2UgYW4gdXBkYXRlIGVycm9yLiBmb3VuZCBpbiA8QWRvcHRpb25BbmltYWxEZXRhaWxzPiAtLT5cblx0XHRcdFx0PExpc3RWaWV3IHJlZj1cImxpc3R2aWV3XCIgc2VwYXJhdG9yQ29sb3I9XCJ0cmFuc3BhcmVudFwiIGZvcj1cIml0ZW0gaW4gaXRlbXNcIiA6a2V5PVwiaW5kZXhcIj5cblxuXHRcdFx0XHRcdDx2LXRlbXBsYXRlPlxuXHRcdFx0XHRcdFx0PGl0ZW0gOml0ZW09XCJpdGVtXCIgQGNsaWNrZWQ9XCJzaG93SXRlbShpdGVtKVwiIC8+XG5cdFx0XHRcdFx0PC92LXRlbXBsYXRlPlxuXG5cdFx0XHRcdDwvTGlzdFZpZXc+XG5cdFx0XHQ8L0dyaWRMYXlvdXQ+XG5cbjwhLS1zZWxlY3RlZCB0YWIgdmlldyBmaWx0ZXIgLS0+XG5cdFx0XHQ8R3JpZExheW91dCB2LXNob3c9XCJzZWxlY3RlZFRhYnZpZXcgPT0gMVwiIHJvdz1cIjJcIiB3aWR0aD1cIjEwMCVcIiBiYWNrZ3JvdW5kQ29sb3I9XCJ3aGl0ZVwiPlx0XHRcblxuXHRcdFx0XHQ8UmFkTGlzdFZpZXcgcmVmPVwibGlzdHZpZXdcIiBzZXBhcmF0b3JDb2xvcj1cInRyYW5zcGFyZW50XCIgZm9yPVwiaXRlbSBpbiBpdGVtc0NhdGVnb3J5XCIgOmtleT1cImluZGV4XCI+XG5cblx0XHRcdFx0XHQ8di10ZW1wbGF0ZT5cblx0XHRcdFx0XHRcdDxDYXRlZ29yeSA6aXRlbT1cIml0ZW1cIj4gPC9DYXRlZ29yeT5cblx0XHRcdFx0XHQ8L3YtdGVtcGxhdGU+XG4gICAgICAgICAgXG5cdFx0XHRcdDwvUmFkTGlzdFZpZXc+XG5cdFx0XHQ8L0dyaWRMYXlvdXQ+XG5cblx0XHQ8L0dyaWRMYXlvdXQ+XG48L3BhZ2U+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbi8vIGltcG9ydCB7IFN3aXNzQXJteUtuaWZlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1zd2lzcy1hcm15LWtuaWZlXCI7XG5pbXBvcnQgeyBpc0lPUywgaXNBbmRyb2lkIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcbi8vIGltcG9ydCBuYXZCb3R0b20gZnJvbSBcIi4vY3VzdG9tL25hdkJvdHRvbVwiO1xuaW1wb3J0IEl0ZW0gZnJvbSBcIkAvY29tcG9uZW50cy9hZG9wdGlvbi9BbmltYWxDYXJkXCI7XG5pbXBvcnQgQ2F0ZWdvcnkgZnJvbSBcIkAvY29tcG9uZW50cy9hZG9wdGlvbi9jYXRlZ29yeVwiO1xuaW1wb3J0IEl0ZW1EZXRhaWxzIGZyb20gXCJAL2NvbXBvbmVudHMvYWRvcHRpb24vQWRvcHRpb25BbmltYWxEZXRhaWxzXCI7XG5cbmNvbnN0IGdlc3R1cmVzID0gcmVxdWlyZShcInVpL2dlc3R1cmVzXCIpO1xuY29uc3QgYXBwID0gcmVxdWlyZShcImFwcGxpY2F0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICAvLyBuYXZCb3R0b20sXG4gICAgSXRlbSxcbiAgICBDYXRlZ29yeVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGl0ZW1zQ2F0ZWdvcnkoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jYXRlZ29yeS5zbGljZSgpLnJldmVyc2UoKTtcbiAgICB9XG4gIH0sXG5cbiAgbW91bnRlZCgpIHtcbiAgICAvLyBTd2lzc0FybXlLbmlmZS5zZXRBbmRyb2lkU3RhdHVzQmFyQ29sb3IoXCIjYjUxMjEzXCIpO1xuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsYXN0RGVsWTogMCxcbiAgICAgIGhlYWRlckNvbGxhcHNlZDogZmFsc2UsXG4gICAgICBzZWxlY3RlZFRhYjogMCxcbiAgICAgIHNlbGVjdGVkVGFidmlldzogMCxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcIlR3aW5raWVcIixcbiAgICAgICAgICBjb3ZlcjogXCJ+L2Fzc2V0cy9pbWFnZXMvZG9nLWJ1dHRvbi5qcGdcIixcbiAgICAgICAgICBpbWFnZXM6IFtcbiAgICAgICAgICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9iZWUucG5nXCIgfSxcbiAgICAgICAgICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9wZWFjb2NrLnBuZ1wiIH0sXG4gICAgICAgICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvcmF0dGxlc25ha2UucG5nXCIgfSxcbiAgICAgICAgICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9jb3lvdGUucG5nXCIgfSxcbiAgICAgICAgICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9tb3VudGFpbmxpb24ucG5nXCIgfSxcbiAgICAgICAgICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9vcG9zc3VtLnBuZ1wiIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIGNhdGVnb3J5OiBcIkRvZ1wiLFxuICAgICAgICAgIGNhdGVnb3J5VGFnOiBcIiMyRDlDREJcIixcbiAgICAgICAgICBicmVlZF9ncm91cDogXCJUb3lcIixcbiAgICAgICAgICBwcmltYXJ5X2JyZWVkOiBcIkNoaWh1YWh1YVwiLFxuICAgICAgICAgIGFnZTogXCI0IG1vbnRoc1wiLFxuICAgICAgICAgIGdlbmRlcjogXCJGXCIsXG4gICAgICAgICAgYW5pbWFsX3NpemU6IFwiU21hbGxcIixcbiAgICAgICAgICBwcmltYXJ5X2NvbG9yOiBcIlRhblwiLFxuICAgICAgICAgIGxvY2F0aW9uOiBcIkRvd25leVwiLFxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICAgIGlzRmF2b3JpdGU6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJCb29naWVcIixcbiAgICAgICAgICBjb3ZlcjogXCJ+L2Fzc2V0cy9pbWFnZXMvY2F0LXJvYW1pbmctaWNvbi5wbmdcIixcbiAgICAgICAgICBpbWFnZXM6IFtcbiAgICAgICAgICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9iZWUucG5nXCIgfSxcbiAgICAgICAgICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9wZWFjb2NrLnBuZ1wiIH0sXG4gICAgICAgICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvcmF0dGxlc25ha2UucG5nXCIgfSxcbiAgICAgICAgICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9jb3lvdGUucG5nXCIgfSxcbiAgICAgICAgICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9tb3VudGFpbmxpb24ucG5nXCIgfSxcbiAgICAgICAgICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9vcG9zc3VtLnBuZ1wiIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIGNhdGVnb3J5OiBcIkNhdFwiLFxuICAgICAgICAgIGNhdGVnb3J5VGFnOiBcIiM2MTI3YWVcIixcbiAgICAgICAgICBicmVlZF9ncm91cDogXCJTaG9ydGhhaXJcIixcbiAgICAgICAgICBwcmltYXJ5X2JyZWVkOiBcIlRhYmJ5XCIsXG4gICAgICAgICAgYWdlOiBcIjZcIixcbiAgICAgICAgICBnZW5kZXI6IFwiTVwiLFxuICAgICAgICAgIGFuaW1hbF9zaXplOiBcIlNtYWxsXCIsXG4gICAgICAgICAgcHJpbWFyeV9jb2xvcjogXCJUYW5cIixcbiAgICAgICAgICBsb2NhdGlvbjogXCJEb3duZXlcIixcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgICBpc0Zhdm9yaXRlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJTbm9vcHlcIixcbiAgICAgICAgICBjb3ZlcjogXCJ+L2Fzc2V0cy9pbWFnZXMvc25vb3B5LmpwZ1wiLFxuICAgICAgICAgIGltYWdlczogW1xuICAgICAgICAgICAgeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2JlZS5wbmdcIiB9LFxuICAgICAgICAgICAgeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL3BlYWNvY2sucG5nXCIgfSxcbiAgICAgICAgICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9yYXR0bGVzbmFrZS5wbmdcIiB9LFxuICAgICAgICAgICAgeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2NveW90ZS5wbmdcIiB9LFxuICAgICAgICAgICAgeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL21vdW50YWlubGlvbi5wbmdcIiB9LFxuICAgICAgICAgICAgeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL29wb3NzdW0ucG5nXCIgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgY2F0ZWdvcnk6IFwiRG9nXCIsXG4gICAgICAgICAgY2F0ZWdvcnlUYWc6IFwiIzI3QUU2MFwiLFxuICAgICAgICAgIGJyZWVkX2dyb3VwOiBcIkhvdW5kXCIsXG4gICAgICAgICAgcHJpbWFyeV9icmVlZDogXCJCZWFnbGVcIixcbiAgICAgICAgICBhZ2U6IFwiMTBcIixcbiAgICAgICAgICBnZW5kZXI6IFwiTVwiLFxuICAgICAgICAgIGFuaW1hbF9zaXplOiBcIlNtYWxsXCIsXG4gICAgICAgICAgcHJpbWFyeV9jb2xvcjogXCJUYW5cIixcbiAgICAgICAgICBsb2NhdGlvbjogXCJEb3duZXlcIixcbiAgICAgICAgICBpc0F2YWlsYWJsZTogZmFsc2UsXG4gICAgICAgICAgaXNGYXZvcml0ZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwiQXJpYW5hXCIsXG4gICAgICAgICAgY292ZXI6IFwifi9hc3NldHMvaW1hZ2VzL2NhdC1idXR0b24uanBnXCIsXG4gICAgICAgICAgaW1hZ2VzOiBbXG4gICAgICAgICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvYmVlLnBuZ1wiIH0sXG4gICAgICAgICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvcGVhY29jay5wbmdcIiB9LFxuICAgICAgICAgICAgeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL3JhdHRsZXNuYWtlLnBuZ1wiIH0sXG4gICAgICAgICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvY295b3RlLnBuZ1wiIH0sXG4gICAgICAgICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvbW91bnRhaW5saW9uLnBuZ1wiIH0sXG4gICAgICAgICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvb3Bvc3N1bS5wbmdcIiB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBjYXRlZ29yeTogXCJDYXRcIixcbiAgICAgICAgICBjYXRlZ29yeVRhZzogXCIjZTRjZTBkXCIsXG4gICAgICAgICAgYnJlZWRfZ3JvdXA6IFwiTG9uZ2hhaXJcIixcbiAgICAgICAgICBwcmltYXJ5X2JyZWVkOiBcIkRvbWVzdGljXCIsXG4gICAgICAgICAgZ2VuZGVyOiBcIkZcIixcbiAgICAgICAgICBhbmltYWxfc2l6ZTogXCJTbWFsbFwiLFxuICAgICAgICAgIHByaW1hcnlfY29sb3I6IFwiR3JheVwiLFxuICAgICAgICAgIGxvY2F0aW9uOiBcIkRvd25leVwiLFxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICAgIGlzRmF2b3JpdGU6IHRydWUsXG4gICAgICAgICAgYWdlOiBcIjEwIG1vbnRoc1wiLFxuICAgICAgICAgIGlzRmF2b3JpdGU6IGZhbHNlLFxuICAgICAgICB9XG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gICBuYW1lOiBcIk11ZmZpblwiLFxuICAgICAgICAvLyAgIGNvdmVyOiBcIn4vYXNzZXRzL2ltYWdlcy9kb2dnby5wbmdcIixcbiAgICAgICAgLy8gICBpbWFnZXM6IFtcbiAgICAgICAgLy8gICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9iZWUucG5nXCIgfSxcbiAgICAgICAgLy8gICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9wZWFjb2NrLnBuZ1wiIH0sXG4gICAgICAgIC8vICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvcmF0dGxlc25ha2UucG5nXCIgfSxcbiAgICAgICAgLy8gICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9jb3lvdGUucG5nXCIgfSxcbiAgICAgICAgLy8gICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9tb3VudGFpbmxpb24ucG5nXCIgfSxcbiAgICAgICAgLy8gICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9vcG9zc3VtLnBuZ1wiIH1cbiAgICAgICAgLy8gICBdLFxuICAgICAgICAvLyAgIGNhdGVnb3J5OiBcIkRvZ1wiLFxuICAgICAgICAvLyAgIGNhdGVnb3J5VGFnOiBcIiMyN0FFNjBcIixcbiAgICAgICAgLy8gICBicmVlZDogXCIzMDAuMDBcIixcbiAgICAgICAgLy8gICBsaWtlczogNzMwLFxuICAgICAgICAvLyAgIGlzTGlrZTogdHJ1ZSxcbiAgICAgICAgLy8gICBpc0Zhdm9yaXRlOiB0cnVlLFxuICAgICAgICAvLyAgIGNvbW1lbnRzOiAxMSxcbiAgICAgICAgLy8gICByYXRpbmc6IFwiNC4wXCIsXG4gICAgICAgIC8vICAgZGVzY3JpcHRpb246IFwiYVwiXG4gICAgICAgIC8vIH1cbiAgICAgIF0sXG4gICAgICBjYXRlZ29yeTogW1xuICAgICAgICB7XG4gICAgICAgICAgY292ZXI6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvYnVyZ2VyNjQwLmpwZ1wiLFxuICAgICAgICAgIGNhdGVnb3J5OiBcIkNhdFwiLFxuICAgICAgICAgIGNvdW50OiBcIjEzXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGNvdmVyOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL3BhbmNha2U2NDAuanBnXCIsXG4gICAgICAgICAgY2F0ZWdvcnk6IFwiRG9nXCIsXG4gICAgICAgICAgY291bnQ6IFwiNVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBjb3ZlcjogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9jYWtlNjQwLmpwZ1wiLFxuICAgICAgICAgIGNhdGVnb3J5OiBcIkxpdmVzdG9ja1wiLFxuICAgICAgICAgIGNvdW50OiBcIjlcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgY292ZXI6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvYmVlcjY0MC5qcGdcIixcbiAgICAgICAgICBjYXRlZ29yeTogXCJPdGhlclwiLFxuICAgICAgICAgIGNvdW50OiBcIjdcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHNlYXJjaCgpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwic2VhcmNoXCIpO1xuICAgIH0sXG4gICAgYmVsbCgpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiYmVsbFwiKTtcbiAgICB9LFxuICAgIHNob3dJdGVtKHBheWxvYWQpIHtcbiAgICAgIHRoaXMuJG5hdmlnYXRlVG8oSXRlbURldGFpbHMsIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBpdGVtOiBwYXlsb2FkXG4gICAgICAgIH0sXG4gICAgICAgIGFuaW1hdGVkOiB0cnVlLFxuICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgbmFtZTogXCJzbGlkZVRvcFwiLFxuICAgICAgICAgIGR1cmF0aW9uOiAzODAsXG4gICAgICAgICAgY3VydmU6IFwiZWFzZUluXCJcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIGFkb3B0aW9uTGlzdCgpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRUYWJ2aWV3ID0gMDtcbiAgICB9LFxuXG4gICAgLy8gVE9ETzogc2hvdyBmaWx0ZXJcbiAgICBzaG93Q2F0ZWdvcnkoKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkVGFidmlldyA9IDE7XG4gICAgfSxcbiAgICB0b2dnbGVIZWFydCgpIHtcbiAgICBpZiAoaXNJT1MpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5hbmltYXRlRmF2b3JpdGUoKTtcbiAgICAgIHRoaXMuaXRlbS5pc0Zhdm9yaXRlID0gIXRoaXMuaXRlbS5pc0Zhdm9yaXRlO1xuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4udGFidmlldy5hY3RpdmUge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMztcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IDUwO1xufVxuLnRhYnZpZXdUZXh0IHtcbiAgbWFyZ2luLXRvcDogMTU7XG4gIG1hcmdpbi1ib3R0b206IDU7XG4gIGZvbnQtc2l6ZTogMTM7XG4gIGNvbG9yOiAjZDhkMmQyO1xufVxuLnRhYnZpZXdUZXh0LmFjdGl2ZSB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG59XG5cbi5uYXZJY29uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAzO1xufVxuXG4ubmF2VGFiIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOWZjYTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4ubmF2VGFidmlldyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG5cbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxuICA8UGFnZSBjbGFzcz1cInBhZ2VcIj5cbiAgICA8QWN0aW9uQmFyPlxuICAgICAgPE5hdmlnYXRpb25CdXR0b24gQHRhcD1cIiRuYXZpZ2F0ZUJhY2soKVwiIGFuZHJvaWQuc3lzdGVtSWNvbj1cImljX21lbnVfYmFja1wiIC8+XG4gICAgICA8TGFiZWwgdGV4dD1cIkZBUVwiIGZvbnRTaXplPVwiMjBcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiIC8+XG4gICAgPC9BY3Rpb25CYXI+XG5cbiAgICA8U3RhY2tMYXlvdXQ+XG4gICAgICA8U2VhcmNoQmFyIHYtbW9kZWw9XCJzZWFyY2hcIiBoaW50PVwiRW50ZXIgdGV4dC4uLlwiIEBzdWJtaXQ9XCJjaGVja0ZhcVwiIC8+XG5cbiAgICAgIDxSYWRMaXN0VmlldyByZWY9XCJsaXN0Vmlld1wiXG4gICAgICAgICAgICAgICAgICAgZm9yPVwiZmFxIGluIGdldFNlYXJjaFJlc3VsdHMoc2VhcmNoKVwiXG4gICAgICAgICAgICAgICAgICAgcHVsbFRvUmVmcmVzaD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgIEBwdWxsVG9SZWZyZXNoSW5pdGlhdGVkPVwib25QdWxsVG9SZWZyZXNoSW5pdGlhdGVkXCJcbiAgICAgICAgICAgICAgICAgICBAaXRlbVRhcD1cIm9uSXRlbVRhcFwiXG4gICAgICAgICAgICAgICAgICAgY2xhc3M9XCJsaXN0LWdyb3VwXCI+XG5cbiAgICAgICAgPHYtdGVtcGxhdGU+XG4gICAgICAgICAgPEZhcUluZm8gOml0ZW09XCJmYXFcIiBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbS10ZXh0XCIvPlxuICAgICAgICA8L3YtdGVtcGxhdGU+XG4gICAgICA8L1JhZExpc3RWaWV3PlxuICAgIDwvU3RhY2tMYXlvdXQ+XG4gIDwvUGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgRmFxSW5mbyBmcm9tIFwiQC9jb21wb25lbnRzL3N1Ymxpc3RzL0ZhcUluZm8udnVlXCI7XG5pbXBvcnQgVGlja2V0IGZyb20gXCIuL1RpY2tldC52dWVcIjtcbmltcG9ydCB7IG1hcFN0YXRlLCBtYXBBY3Rpb25zLCBtYXBNdXRhdGlvbnMsIG1hcEdldHRlcnMgfSBmcm9tIFwidnVleFwiO1xuaW1wb3J0IEZhcSBmcm9tIFwiQC9tb2RlbHMvRmFxXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2VhcmNoOiBcIlwiLFxuICAgICAgdGlja2V0OiBUaWNrZXQsXG4gICAgICB0ZW1wRmFxczogW11cbiAgICB9O1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgLi4ubWFwQWN0aW9ucyhbXCJsb2FkRmFxc1wiXSksXG4gICAgLi4ubWFwTXV0YXRpb25zKFtcInN0b3JlRmFxXCJdKSxcbiAgICBjaGVja0ZhcSgpIHtcbiAgICAgIC8vIGluIHRoZSBmdXR1cmUgdGhpcyBpcyB3aGVyZSB0byBjaGVjayBpZiBhIHVzZXIgaXMgb24gc2l0ZSwgb3RoZXJ3aXNlIG5vIHRpY2tldCBvcHRpb25cbiAgICAgIC8vIGlmICh0aGlzLmZhcXMuZmlsdGVyKGZhcSA9PiBmYXEucXVlc3Rpb24gPT09IHRoaXMuc2VhcmNoKS5sZW5ndGggPT09IDApIHtcbiAgICAgIC8vICAgdGhpcy5zdG9yZUZhcShuZXcgRmFxKHRoaXMuc2VhcmNoKSlcbiAgICAgIC8vICAgdGhpcy4kbmF2aWdhdGVUbyh0aGlzLnRpY2tldClcbiAgICAgIC8vIH1cbiAgICB9LFxuICAgIG9uSXRlbVRhcCgpIHtcbiAgICAgIC8vIFRPRE9cbiAgICB9LFxuICAgIG9uUHVsbFRvUmVmcmVzaEluaXRpYXRlZCh7IG9iamVjdCB9KSB7XG4gICAgICBjb25zb2xlLmxvZyhcIlB1bGxpbmcuLi5cIik7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgb2JqZWN0Lm5vdGlmeVB1bGxUb1JlZnJlc2hGaW5pc2hlZCgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIC4uLm1hcFN0YXRlKFtcImZhcXNcIl0pLFxuICAgIC4uLm1hcEdldHRlcnMoW1wiZ2V0U2VhcmNoUmVzdWx0c1wiXSlcbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLmxvYWRGYXFzKCk7XG4gIH0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBUaWNrZXQsXG4gICAgRmFxSW5mb1xuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cbiAgQGltcG9ydCAnLi4vQW5pbWFsQ2VudGVyJztcblxuQWN0aW9uQmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOWZjYTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5tZXNzYWdlIHtcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIwO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmZhcV9xdWVzdGlvbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIwO1xuICBjb2xvcjogYmxhY2s7XG59XG4uZmFxX2Fuc3dlciB7XG4gIGNvbG9yOiAjNDU0NTQ1O1xufVxuXG4ubGlzdC1ncm91cC1pdGVtLXRleHQge1xuICBtYXJnaW46IDcgODtcbn1cbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxuICAgIDxQYWdlPlxuICAgICAgICA8QWN0aW9uQmFyIGlvcy5wb3NpdGlvbj1cImxlZnRcIiBjbGFzcz1cIkFjdGlvbl9CYXJcIj5cbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiV2VsY29tZSB0b1wiIGZvbnRTaXplPVwiMjBcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiLz5cbiAgICAgICAgICAgIDxBY3Rpb25JdGVtIEB0YXA9XCJ0b0ZhcVwiIGlvcy5zeXN0ZW1JY29uPVwiMTJcIiBpb3MucG9zaXRpb249XCJyaWdodFwiIGFuZHJvaWQuc3lzdGVtSWNvbj1cImljX21lbnVfc2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuZHJvaWQucG9zaXRpb249XCJhY3Rpb25CYXJcIi8+XG4gICAgICAgIDwvQWN0aW9uQmFyPlxuICAgICAgICA8U3RhY2tMYXlvdXQgYmFja2dyb3VuZENvbG9yPVwiI2IyMWE4MlwiPlxuXG4gICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVwiKiwqLCpcIiBjbGFzcz1cImxheW91dCBjb3ZlclwiPlxuICAgICAgICAgICAgICAgIDxTY3JvbGxWaWV3IHJvdz1cIjBcIiBjb2w9XCIwXCIgYmFja2dyb3VuZENvbG9yPVwiI0QzRDNEM1wiPlxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2F0ZWdvcnlCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwifi9hc3NldHMvaW1hZ2VzL2FuaW1hbHMuaWNvbi5wbmdcIiA6aWNvbj1cIicnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnRpdGxlPVwidGl0bGVzWzBdXCIgOmFjdGlvbj1cInRvQWRvcHRpb25cIiBjbGFzcz1cImhvbWVwYWdlLWJsdWUgSG9tZUJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwPVwidHJ1ZVwiLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAgICAgICAgICAgIFNlcnZpY2UgUmVxdWVzdCAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXRlZ29yeUJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJ+L2Fzc2V0cy9pbWFnZXMvc2VydmljZXMuaWNvbi5wbmdcIiA6aWNvbj1cIicnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnRpdGxlPVwidGl0bGVzWzJdXCIgOmFjdGlvbj1cInRvU2VydmljZVJlcXVlc3RcIiBjbGFzcz1cImhvbWVwYWdlLWJsdWUgSG9tZUJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwPVwidHJ1ZVwiLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAgICAgICAgICAgIEZBUSAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXRlZ29yeUJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJ+L2Fzc2V0cy9pbWFnZXMvbm9pc2UuaWNvbi5wbmdcIiA6aWNvbj1cIicnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnRpdGxlPVwidGl0bGVzWzNdXCIgOmFjdGlvbj1cInRvRmFxXCIgY2xhc3M9XCJob21lcGFnZS1ibHVlIEhvbWVCdXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcD1cInRydWVcIi8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gICAgICAgICAgICBUaWNrZXQgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2F0ZWdvcnlCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwifi9hc3NldHMvaW1hZ2VzL2hvdXJzaWNvbi5wbmdcIiA6aWNvbj1cIidmYS1tYXAtbWFya2VyJyB8IGZvbnRpY29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnRpdGxlPVwidGl0bGVzWzRdXCIgOmFjdGlvbj1cInRvUVJTY2FubmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmYSBob21lcGFnZS1ibHVlIEhvbWVCdXR0b25cIiB0ZXh0V3JhcD1cInRydWVcIi8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gICAgICAgICAgICBGaW5kIGEgTG9jYXRpb24gLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2F0ZWdvcnlCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwifi9hc3NldHMvaW1hZ2VzL2xvY2F0aW9uaWNvbi5wbmdcIiA6aWNvbj1cIicnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnRpdGxlPVwidGl0bGVzWzVdXCIgOmFjdGlvbj1cInRvTG9jYXRpb25MaXN0XCIgY2xhc3M9XCJob21lcGFnZS1ibHVlIEhvbWVCdXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcD1cInRydWVcIi8+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICA8L1Njcm9sbFZpZXc+XG5cblxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IHJvdz1cIjBcIiBjb2w9XCIxXCIgY2xhc3M9XCJsYXlvdXQgY292ZXJcIiBjb2x1bW5zPVwiKiwqXCIgcm93cz1cIiosKiwqXCIgY29sU3Bhbj1cIjJcIj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSAgICAgICAgICAgIEFkb3B0aW9uIC0tPlxuXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuXG5cbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cblxuICAgICAgICAgICAgPCEtLSAgICAgICAgPFN0YWNrTGF5b3V0IGJhY2tncm91bmRDb2xvcj1cIiNiMjFhODJcIj4tLT5cblxuXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiAgICA8L1BhZ2U+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IENhdGVnb3J5QnV0dG9uIGZyb20gXCJAL2NvbXBvbmVudHMvYnV0dG9ucy9DYXRlZ29yeUJ1dHRvbi52dWVcIlxuICAgIGltcG9ydCBGYXEgZnJvbSBcIi4vRmFxLnZ1ZVwiXG4gICAgaW1wb3J0IExvY2F0aW9uIGZyb20gXCIuL0xvY2F0aW9uLnZ1ZVwiXG4gICAgaW1wb3J0IFFSU2Nhbm5lciBmcm9tIFwiLi9UaWNrZXRPcHRpb25zLnZ1ZVwiXG4gICAgaW1wb3J0IEFkb3B0aW9uIGZyb20gXCIuL0Fkb3B0aW9uLnZ1ZVwiXG4gICAgaW1wb3J0IFNlcnZpY2VSZXF1ZXN0IGZyb20gXCIuL1NlcnZpY2VSZXF1ZXN0LnZ1ZVwiXG4gICAgaW1wb3J0IHttYXBTdGF0ZSwgbWFwQWN0aW9ucywgbWFwTXV0YXRpb25zfSBmcm9tIFwidnVleFwiXG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFjdGlvbkJhcjogXCJXZWxjb21lXCIsXG4gICAgICAgICAgICAgICAgbXNnOiBcIkhlbGxvIFdvcmxkIVwiLFxuICAgICAgICAgICAgICAgIHRpdGxlczogW1xuICAgICAgICAgICAgICAgICAgICBcIkFkb3B0IGFuIEFuaW1hbCFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJTZXJ2aWNlcyAmIEZlZXNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJTZXJ2aWNlIFJlcXVlc3RcIixcbiAgICAgICAgICAgICAgICAgICAgXCJGQVFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJHcmFiIGEgVGlja2V0IVwiLFxuICAgICAgICAgICAgICAgICAgICBcIkZpbmQgT3VyIExvY2F0aW9uXCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHRleHRXcmFwOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAvL3NlYXJjaDogXCJ0aGlzIHdpbGwgY2hhbmdlIGFzIHlvdSB0eXBlXCIsXG4gICAgICAgICAgICAgICAgcmVzdWx0czogW10sXG4gICAgICAgICAgICAgICAgcG9sbGluZzogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIGZhcTogRmFxLFxuICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBMb2NhdGlvbixcbiAgICAgICAgICAgICAgICBxclNjYW5uZXI6IFFSU2Nhbm5lcixcbiAgICAgICAgICAgICAgICBhZG9wdGlvbjogQWRvcHRpb24sXG4gICAgICAgICAgICAgICAgc2VydmljZVJlcXVlc3Q6IFNlcnZpY2VSZXF1ZXN0LFxuXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuXG4gICAgICAgIGNvbXB1dGVkOiBtYXBTdGF0ZShbJ2FwcHJvdmVkVGlja2V0J10pLFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIC4uLm1hcEFjdGlvbnMoWydjaGVja1RpY2tldCddKSxcbiAgICAgICAgICAgIC4uLm1hcE11dGF0aW9ucyhbJ1NFVF9USUNLRVQnXSksXG4gICAgICAgICAgICB0b0xvY2F0aW9uTGlzdCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKHRoaXMubG9jYXRpb24sIHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2xpZGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzODAsXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJ2ZTogXCJlYXNlSW5cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9GYXEoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyh0aGlzLmZhcSwge1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzbGlkZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDM4MCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnZlOiBcImVhc2VJblwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b1FSU2Nhbm5lcigpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuYXBwcm92ZWRUaWNrZXQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFwcHJvdmVkVGlja2V0Lmhhc093blByb3BlcnR5KCd3aW5kb3cnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkFjY2VzcyBEZW5pZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIllvdSBjYW5ub3Qgc3VibWl0IGFub3RoZXIgdGlja2V0LlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyh0aGlzLnFyU2Nhbm5lciwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzbGlkZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzODAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VydmU6IFwiZWFzZUluXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvQWRvcHRpb24oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyh0aGlzLmFkb3B0aW9uLCB7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNsaWRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMzgwLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3VydmU6IFwiZWFzZUluXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvU2VydmljZVJlcXVlc3QoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyh0aGlzLnNlcnZpY2VSZXF1ZXN0LCB7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNsaWRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMzgwLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3VydmU6IFwiZWFzZUluXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBvbGxEYXRhKCkge1xuICAgICAgICAgICAgICAgIHRoaXMucG9sbGluZyA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGlja2V0IGlzIGNvbXBsZXRlIGV2ZXJ5IFggc2Vjb25kc1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuYXBwcm92ZWRUaWNrZXQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hcHByb3ZlZFRpY2tldC5oYXNPd25Qcm9wZXJ0eSgnbnVtYmVyJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmFwcHJvdmVkVGlja2V0Lm51bWJlciwgdGhpcy5hcHByb3ZlZFRpY2tldC5pc0NvbXBsZXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFwcHJvdmVkVGlja2V0LmlzQ29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5TRVRfVElDS0VUKHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiVGhhbmsgWW91XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIllvdXIgdGlja2V0IGhhcyBiZWVuIHNlcnZlZC4gSGF2ZSBhIG5pY2UgZGF5IVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrVGlja2V0KHRoaXMuYXBwcm92ZWRUaWNrZXQuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgNTAwMClcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9LFxuXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLnBvbGxEYXRhKClcbiAgICAgICAgfSxcblxuICAgICAgICBiZWZvcmVEZXN0cm95KCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnBvbGxpbmcpXG4gICAgICAgIH0sXG5cbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgQ2F0ZWdvcnlCdXR0b24sXG4gICAgICAgICAgICBGYXFcbiAgICAgICAgfVxuICAgIH07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxuICAgIEBpbXBvcnQgXCIuLi9BbmltYWxDZW50ZXJcIjtcblxuICAgIC5BY3Rpb25fQmFyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOWZjYTtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgfVxuXG4gICAgLlNfQmFyIHtcbiAgICAgICAgY29sb3I6ICMwNTA1MDU7XG4gICAgfVxuXG4gICAgLlNfQnV0dG9uIHtcbiAgICAgICAgLyogdGV4dD1cInJpZ2h0XCI7XG4gICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ9XCJyaWdodFwiO1xuICAgICAgICAgICAgICB3aWR0aD1cIjMzJVwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjcwXCJcbiAgICAgICAgICAgICAgLypiYWNrZ3JvdW5kQ29sb3I9XCIjMWM2YjQ4XCIvPiovXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2Fzc2V0cy9pbWFnZXMvTmF0aXZlU2NyaXB0LVZ1ZS5wbmdcIik7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgfVxuXG4gICAgLmNvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCBwbHVtLCAjMDA5ZmNhKVxuICAgIH1cblxuICAgIC5ob21lcGFnZS1ibHVlIHtcbiAgICAgICAgY29sb3I6ICRob21lcGFnZS1ibHVlO1xuICAgIH1cblxuICAgIC5BY3Rpb25fVGV4dCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG5cbiAgICAuSG9tZUJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTQlO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgcGFkZGluZy10b3A6IDdlbTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgfVxuXG4gICAgLmxheW91dCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XG4gICAgfVxuXG4gICAgLm1lc3NhZ2Uge1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgY29sb3I6ICMyNTI1MjU7XG4gICAgfVxuPC9zdHlsZT5cblxuIiwiPHRlbXBsYXRlPlxuICAgIDxQYWdlIGNsYXNzPVwicGFnZVwiPlxuICAgICAgICA8QWN0aW9uQmFyIGNsYXNzPVwiYWN0aW9uLWJhclwiPlxuICAgICAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uIEB0YXA9XCIkbmF2aWdhdGVCYWNrKClcIiBhbmRyb2lkLnN5c3RlbUljb249XCJpY19tZW51X2JhY2tcIiAvPlxuICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiQW5pbWFsIENhcmUgQ2VudGVyc1wiIGZvbnRTaXplPVwiMjBcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiPjwvTGFiZWw+XG4gICAgICAgIDwvQWN0aW9uQmFyPlxuXG5cbiAgICAgICAgPFN0YWNrTGF5b3V0PlxuICAgICAgICAgICAgPCEtLWdldCBkaXN0YW5jZSBidG4gLS0+XG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBjbGFzcz1cImZhIGdwcy1idXR0b25cIiA6aWNvbj1cIidmYS1zb3J0LWFtb3VudC1hc2MnIHwgZm9udGljb25cIiB0aXRsZT1cIkdldCBDbG9zZXN0IEFuaW1hbCBDZW50ZXJcIiA6YWN0aW9uPVwiYnV0dG9uR2V0RGlzdGFuY2VUb0NhcmVDZW50ZXJzVGFwXCIvPlxuXG4gICAgICAgICAgICA8UmFkTGlzdFZpZXcgcm93PVwiMlwiIGZvcj1cImxvY2F0aW9uIGluIGNlbnRlckxvY2F0aW9uc1wiIEBpdGVtVGFwPVwib25JdGVtVGFwXCIgY2xhc3M9XCJsaXN0LWdyb3VwXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPHYtdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gY2FyZCBjb250YWludGVyIC0tPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCByb3dzPVwiKiwgKiwgKiwgKlwiIGNvbHVtbnM9XCIqLCAqXCIgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0tY29udGVudFwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gbmFtZSAtLT5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwibG9jYXRpb24ubmFtZVwiIGNsYXNzPVwiaG9tZXBhZ2UtYmx1ZSB0ZXh0LXByaW1hcnkgbGlzdC1ncm91cC1pdGVtLXRleHQgZm9udC13ZWlnaHQtYm9sZFwiLz5cblxuICAgICAgICAgICAgICAgICAgICA8IS0tIGRpc3RhbmNlIC0tPlxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVwiMVwiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJyaWdodFwiIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtLXRleHQgbS1yLTUgdGV4dC1zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gOnRleHQ9XCInficrIGxvY2F0aW9uLmRpc3RhbmNlICsgJ21pJ1wiLz4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cbiAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cblxuXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIxXCIgY2xhc3M9XCJoci1saWdodCBtLXQtNSBtLWItNVwiIGNvbFNwYW49XCIyXCIvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSByb3c9XCIyXCIgOnNyYz1cImxvY2F0aW9uLmltYWdlVVJMXCIgc3RyZXRjaD1cImFzcGVjdEZpdFwiIGhlaWdodD1cIjEyMFwiIGNsYXNzPVwibS1yLTIwXCIgbG9hZE1vZGU9XCJhc3luY1wiLz5cblxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVwiMlwiIGNvbD1cIjFcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCByb3dzPVwiKiwgKlwiIGNvbHVtbnM9XCIqLCA0KlwiPiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1hZGRyZXNzIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjBcIiBjb2w9XCIwXCIgdGV4dFdyYXA9XCJ0cnVlXCIgY2xhc3M9XCJwLWItMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nIGlvcy5mb250RmFtaWx5PVwic3lzdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiA6dGV4dD1cIidmYS1tYXAtbWFya2VyJyB8IGZvbnRpY29uXCIgY2xhc3M9XCJmYVwiPjwvU3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiMFwiIGNvbD1cIjFcIiB0ZXh0V3JhcD1cInRydWVcIiBjbGFzcz1cInAtYi0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmcgaW9zLmZvbnRGYW1pbHk9XCJzeXN0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIDp0ZXh0PVwibG9jYXRpb24uYWRkcmVzc1wiICBjbGFzcz1cInRleHQtcHJpbWFyeVwiPjwvU3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC0tPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIHBob25lIG51bWJlci0tPiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIxXCIgY29sPVwiMFwiIHRleHRXcmFwPVwidHJ1ZVwiIGNsYXNzPVwicC1iLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZyBpb3MuZm9udEZhbWlseT1cInN5c3RlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiA6dGV4dD1cIidmYS1waG9uZScgfCBmb250aWNvblwiIGNsYXNzPVwiZmEgaWNvblwiPjwvU3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiMVwiIGNvbD1cIjFcIiB0ZXh0V3JhcD1cInRydWVcIiBjbGFzcz1cInAtYi0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmcgaW9zLmZvbnRGYW1pbHk9XCJzeXN0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gOnRleHQ9XCJsb2NhdGlvbi5waG9uZVwiIGNsYXNzPVwiXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cInAtYi0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmcgaW9zLmZvbnRGYW1pbHk9XCJzeXN0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cIlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC0tPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cbiAgICAgICAgICAgICAgICA8L3YtdGVtcGxhdGU+XG5cbiAgICAgICAgICAgIDwvUmFkTGlzdFZpZXc+XG48L1N0YWNrTGF5b3V0PlxuICAgIDwvUGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4vLyAtLS1wbHVnaW5zLS0tXG4vLyBnZW9sb2NhdGlvblxuaW1wb3J0ICogYXMgZ2VvbG9jYXRpb24gZnJvbSBcIm5hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvblwiO1xuaW1wb3J0IHsgQWNjdXJhY3kgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9lbnVtc1wiO1xuXG4vLyB0b2FzdFxuY29uc3QgVG9hc3QgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXRvYXN0c1wiKTtcbi8vLS0tLS0tLVxuXG4vLyBjb21wb25lbnRzXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQC9jb21wb25lbnRzL2J1dHRvbnMvSWNvbkJ1dHRvbi52dWVcIlxuXG5pbXBvcnQgQW5pbWFsQ2VudGVyRGV0YWlscyBmcm9tIFwiQC9jb21wb25lbnRzL2xvY2F0aW9uL0FuaW1hbENlbnRlckRldGFpbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvL1RPRE86IFN0b3JlIGhhcmRjb2RlZCBjZW50ZXJsb2NhdGlvbnNcbiAgICAgIGNlbnRlckxvY2F0aW9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJBZ291cmFcIixcbiAgICAgICAgICBhZGRyZXNzOiBcIjI5NTI1IEFnb3VyYSBSb2FkLCBBZ291cmEsIENBIDkxMzAxXCIsXG4gICAgICAgICAgcGhvbmU6IFwiKDgxOCkgOTkxLTAwNzFcIixcbiAgICAgICAgICBhdmFpbGFiaWxpdHk6IHtcbiAgICAgICAgICAgIHdlZWtkYXk6IFwiTW9uZGF5LVRodXJzZGF5XCIsXG4gICAgICAgICAgICB3ZWVrZW5kOiBcIkZyaWRheS1TdW5kYXlcIixcbiAgICAgICAgICAgIHdlZWtkYXlob3VyczogXCIxMjowMCBwLm0uIC0gNzowMCBwLm1cIixcbiAgICAgICAgICAgIHdlZWtlbmRob3VyczogXCIxMDowMCBhLm0uIC0gNTowMCBwLm1cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgbGF0aXR1ZGU6IDM0LjE0NjAxNSxcbiAgICAgICAgICBsb25naXR1ZGU6IC0xMTguNzY5NDIxLFxuICAgICAgICAgIGRpc3RhbmNlOiBcIlwiLFxuICAgICAgICAgIGltYWdlVVJMOiBcIn4vYXNzZXRzL2ltYWdlcy9hY2hvdXNlLnBuZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcIkJhbGR3aW4gUGFya1wiLFxuICAgICAgICAgIGFkZHJlc3M6IFwiNDI3NSBOb3J0aCBFbHRvbiBTdHJlZXQsIEJhbGR3aW4gUGFyaywgQ0EgOTE3MDZcIixcbiAgICAgICAgICBwaG9uZTogXCIoNjI2KSA5NjItMzU3N1wiLFxuICAgICAgICAgIGF2YWlsYWJpbGl0eToge1xuICAgICAgICAgICAgd2Vla2RheTogXCJNb25kYXktVGh1cnNkYXlcIixcbiAgICAgICAgICAgIHdlZWtlbmQ6IFwiRnJpZGF5LVN1bmRheVwiLFxuICAgICAgICAgICAgd2Vla2RheWhvdXJzOiBcIjEyOjAwIHAubS4gLSA3OjAwIHAubVwiLFxuICAgICAgICAgICAgd2Vla2VuZGhvdXJzOiBcIjEwOjAwIGEubS4gLSA1OjAwIHAubVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBsYXRpdHVkZTogMzQuMDkxMzYyLFxuICAgICAgICAgIGxvbmdpdHVkZTogLTExNy45NTExMDUsXG4gICAgICAgICAgZGlzdGFuY2U6IFwiXCIsXG4gICAgICAgICAgaW1hZ2VVUkw6IFwifi9hc3NldHMvaW1hZ2VzL2FjaG91c2UucG5nXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwiQ2Fyc29uL0dhcmRlbmFcIixcbiAgICAgICAgICBhZGRyZXNzOiBcIjIxNiBXLiBWaWN0b3JpYSBTdHJlZXQsIEdhcmRlbmEgQ0EgOTAyNDhcIixcbiAgICAgICAgICBwaG9uZTogXCIoMzEwKSA1MjMtOTU2NlwiLFxuICAgICAgICAgIGF2YWlsYWJpbGl0eToge1xuICAgICAgICAgICAgd2Vla2RheTogXCJNb25kYXktVGh1cnNkYXlcIixcbiAgICAgICAgICAgIHdlZWtlbmQ6IFwiRnJpZGF5LVN1bmRheVwiLFxuICAgICAgICAgICAgd2Vla2RheWhvdXJzOiBcIjEyOjAwIHAubS4gLSA3OjAwIHAubVwiLFxuICAgICAgICAgICAgd2Vla2VuZGhvdXJzOiBcIjEwOjAwIGEubS4gLSA1OjAwIHAubVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBsYXRpdHVkZTogMzMuODY0MzU1LFxuICAgICAgICAgIGxvbmdpdHVkZTogLTExOC4yNzc0MTQsXG4gICAgICAgICAgZGlzdGFuY2U6IFwiXCIsXG4gICAgICAgICAgaW1hZ2VVUkw6IFwifi9hc3NldHMvaW1hZ2VzL2FjaG91c2UucG5nXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwiQ2FzdGFpY1wiLFxuICAgICAgICAgIGFkZHJlc3M6IFwiMzEwNDQgTm9ydGggQ2hhcmxpZSBDYW55b24gUm9hZCwgQ2FzdGFpYywgQ0EgOTEzODRcIixcbiAgICAgICAgICBwaG9uZTogXCIoNjYxKSAyNTctMzE5MVwiLFxuICAgICAgICAgIGF2YWlsYWJpbGl0eToge1xuICAgICAgICAgICAgd2Vla2RheTogXCJNb25kYXktVGh1cnNkYXlcIixcbiAgICAgICAgICAgIHdlZWtlbmQ6IFwiRnJpZGF5LVN1bmRheVwiLFxuICAgICAgICAgICAgd2Vla2RheWhvdXJzOiBcIjEyOjAwIHAubS4gLSA3OjAwIHAubVwiLFxuICAgICAgICAgICAgd2Vla2VuZGhvdXJzOiBcIjEwOjAwIGEubS4gLSA1OjAwIHAubVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBsYXRpdHVkZTogMzQuNDgyODk5LFxuICAgICAgICAgIGxvbmdpdHVkZTogLTExOC42MDgzODYsXG4gICAgICAgICAgZGlzdGFuY2U6IFwiXCIsXG4gICAgICAgICAgaW1hZ2VVUkw6IFwifi9hc3NldHMvaW1hZ2VzL2FjaG91c2UucG5nXCJcbiAgICAgICAgfSxcblxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJEb3duZXlcIixcbiAgICAgICAgICBhZGRyZXNzOiBcIjExMjU4IFNvdXRoIEdhcmZpZWxkIEF2ZW51ZSwgRG93bmV5LCBDQSA5MDI0MlwiLFxuICAgICAgICAgIHBob25lOiBcIig1NjIpIDk0MC02ODk4XCIsXG4gICAgICAgICAgYXZhaWxhYmlsaXR5OiB7XG4gICAgICAgICAgICB3ZWVrZGF5OiBcIk1vbmRheS1UaHVyc2RheVwiLFxuICAgICAgICAgICAgd2Vla2VuZDogXCJGcmlkYXktU3VuZGF5XCIsXG4gICAgICAgICAgICB3ZWVrZGF5aG91cnM6IFwiMTI6MDAgcC5tLiAtIDc6MDAgcC5tXCIsXG4gICAgICAgICAgICB3ZWVrZW5kaG91cnM6IFwiMTA6MDAgYS5tLiAtIDU6MDAgcC5tXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIGxhdGl0dWRlOiAzMy45MzY1NixcbiAgICAgICAgICBsb25naXR1ZGU6IC0xMTguMTMzODcsXG4gICAgICAgICAgZGlzdGFuY2U6IFwiXCIsXG4gICAgICAgICAgaW1hZ2VVUkw6IFwifi9hc3NldHMvaW1hZ2VzL2FjaG91c2UucG5nXCJcbiAgICAgICAgfSxcblxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJMYW5jYXN0ZXJcIixcbiAgICAgICAgICBhZGRyZXNzOiBcIjUyMTAgV2VzdCBBdmVudWUgSSwgTGFuY2FzdGVyLCBDQSA5MzUzNlwiLFxuICAgICAgICAgIHBob25lOiBcIig2NjEpIDk0MC00MTkxXCIsXG4gICAgICAgICAgYXZhaWxhYmlsaXR5OiB7XG4gICAgICAgICAgICB3ZWVrZGF5OiBcIk1vbmRheS1UaHVyc2RheVwiLFxuICAgICAgICAgICAgd2Vla2VuZDogXCJGcmlkYXktU3VuZGF5XCIsXG4gICAgICAgICAgICB3ZWVrZGF5aG91cnM6IFwiMTI6MDAgcC5tLiAtIDc6MDAgcC5tXCIsXG4gICAgICAgICAgICB3ZWVrZW5kaG91cnM6IFwiMTA6MDAgYS5tLiAtIDU6MDAgcC5tXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIGxhdGl0dWRlOiAzNC43MDMyMzksXG4gICAgICAgICAgbG9uZ2l0dWRlOiAtMTE4LjIyMjY1LFxuICAgICAgICAgIGRpc3RhbmNlOiBcIlwiLFxuICAgICAgICAgIGltYWdlVVJMOiBcIn4vYXNzZXRzL2ltYWdlcy9hY2hvdXNlLnBuZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcIlBhbG1kYWxlXCIsXG4gICAgICAgICAgYWRkcmVzczogXCIzODU1MCBTaWVycmEgSGlnaHdheSwgUGFsbWRhbGUsIENBIDkzNTUwXCIsXG4gICAgICAgICAgcGhvbmU6IFwiKDY2MSkgNTc1LTI4ODhcIixcbiAgICAgICAgICBhdmFpbGFiaWxpdHk6IHtcbiAgICAgICAgICAgIHdlZWtkYXk6IFwiTW9uZGF5LVRodXJzZGF5XCIsXG4gICAgICAgICAgICB3ZWVrZW5kOiBcIkZyaWRheS1TdW5kYXlcIixcbiAgICAgICAgICAgIHdlZWtkYXlob3VyczogXCIxMjowMCBwLm0uIC0gNzowMCBwLm1cIixcbiAgICAgICAgICAgIHdlZWtlbmRob3VyczogXCIxMDowMCBhLm0uIC0gNTowMCBwLm1cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgbGF0aXR1ZGU6IDM0LjU4MjYsXG4gICAgICAgICAgbG9uZ2l0dWRlOiAtMTE4LjExNzEsXG4gICAgICAgICAgZGlzdGFuY2U6IFwiXCIsXG4gICAgICAgICAgaW1hZ2VVUkw6IFwifi9hc3NldHMvaW1hZ2VzL2FjaG91c2UucG5nXCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIGN1cnJlbnRMb2M6IHt9IC8vIGN1cnJlbnQgbG9jYXRpb24gb2JqXG4gICAgfTtcbiAgfSxcbiAgY29tcG9uZW50czoge1xuICAgIEljb25CdXR0b25cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBjZW50ZXJMaXN0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuYnV0dG9uR2V0TG9jYXRpb25UYXA7XG4gICAgfVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBlbmFibGVMb2NhdGlvblRhcDogZnVuY3Rpb24oKSB7XG4gICAgICBnZW9sb2NhdGlvbi5pc0VuYWJsZWQoKS50aGVuKFxuICAgICAgICBmdW5jdGlvbihpc0VuYWJsZWQpIHtcbiAgICAgICAgICBpZiAoIWlzRW5hYmxlZCkge1xuICAgICAgICAgICAgZ2VvbG9jYXRpb24uZW5hYmxlTG9jYXRpb25SZXF1ZXN0KCkudGhlbihcbiAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7fSxcbiAgICAgICAgICAgICAgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiICsgKGUubWVzc2FnZSB8fCBlKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIgKyAoZS5tZXNzYWdlIHx8IGUpKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9LFxuICAgIC8vIFRPRE86IG9wdGltaXplOyB0aGlzIHNob3VsZCBiZSBhbHJlYWR5IGNvbXB1dGVkIGJlZm9yZSBjbGlja2luZyBidXR0b25cbiAgICBidXR0b25HZXREaXN0YW5jZVRvQ2FyZUNlbnRlcnNUYXA6IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgIFwiYnV0dG9uR2V0RGlzdGFuY2VUb0NhcmVDZW50ZXJzVGFwKCksIGdldHRpbmcgbGlzdCBvZiBhbmltYWwgY2FyZSBjZW50ZXJzOyBzb3J0ZWQgYnkgZGlzdGFuY2VcIlxuICAgICAgKTtcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcblxuICAgICAgY29uc3QgbWV0ZXJzVG9NaWxlc0NvbnZlcnNpb25SYXRlID0gMTYwOS4zNDQ7XG5cbiAgICAgIGdlb2xvY2F0aW9uXG4gICAgICAgIC5nZXRDdXJyZW50TG9jYXRpb24oe1xuICAgICAgICAgIGRlc2lyZWRBY2N1cmFjeTogQWNjdXJhY3kuYW55LFxuICAgICAgICAgIG1heGltdW1BZ2U6IDUwMDAsXG4gICAgICAgICAgdGltZW91dDogMTAwMDBcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgZnVuY3Rpb24obG9jKSB7XG4gICAgICAgICAgICBpZiAobG9jKSB7XG4gICAgICAgICAgICAgIC8vZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgICAgICAgICAgICAgdGhhdC5jdXJyZW50TG9jLmxhdGl0dWRlID0gcGFyc2VGbG9hdChsb2MubGF0aXR1ZGUpO1xuICAgICAgICAgICAgICB0aGF0LmN1cnJlbnRMb2MubG9uZ2l0dWRlID0gcGFyc2VGbG9hdChsb2MubG9uZ2l0dWRlKTtcblxuICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoYXQuY2VudGVyTG9jYXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2VudGVyTG9jID0gdGhhdC5jZW50ZXJMb2NhdGlvbnNbaV07XG5cbiAgICAgICAgICAgICAgICAvLyBjYWxjIGRpc3RhbmNlIGZvcmVhY2ggYW5pbWFsIHNoZWx0ZXJcbiAgICAgICAgICAgICAgICBjZW50ZXJMb2MuZGlzdGFuY2UgPVxuICAgICAgICAgICAgICAgICAgZ2VvbG9jYXRpb24uZGlzdGFuY2UoXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBsYXRpdHVkZTogdGhhdC5jdXJyZW50TG9jLmxhdGl0dWRlLFxuICAgICAgICAgICAgICAgICAgICAgIGxvbmdpdHVkZTogdGhhdC5jdXJyZW50TG9jLmxvbmdpdHVkZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgbGF0aXR1ZGU6IGNlbnRlckxvYy5sYXRpdHVkZSxcbiAgICAgICAgICAgICAgICAgICAgICBsb25naXR1ZGU6IGNlbnRlckxvYy5sb25naXR1ZGVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgKSAvIG1ldGVyc1RvTWlsZXNDb252ZXJzaW9uUmF0ZTsgLy8gZGl2aWRlIGJ5IGNvbnZlcnNpb24gcmF0ZVxuXG4gICAgICAgICAgICAgICAgLy8gcm91bmQgZGlzdGFuY2VcbiAgICAgICAgICAgICAgICBjZW50ZXJMb2MuZGlzdGFuY2UgPSBOdW1iZXIoXG4gICAgICAgICAgICAgICAgICBNYXRoLnJvdW5kKGNlbnRlckxvYy5kaXN0YW5jZSArIFwiZTJcIikgKyBcImUtMlwiXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvLyBzb3J0IGxpc3QgYnkgZGlzdGFuY2VcbiAgICAgICAgICAgICAgdGhhdC5jZW50ZXJMb2NhdGlvbnMuc29ydChcbiAgICAgICAgICAgICAgICAobG9jMSwgbG9jMikgPT5cbiAgICAgICAgICAgICAgICAgIGxvYzEuZGlzdGFuY2UgPiBsb2MyLmRpc3RhbmNlXG4gICAgICAgICAgICAgICAgICAgID8gMVxuICAgICAgICAgICAgICAgICAgICA6IGxvYzIuZGlzdGFuY2UgPiBsb2MxLmRpc3RhbmNlID8gLTEgOiAwXG4gICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgLy8gdG9hc3QgdG8gbm90aWZ5IGxpc3Qgd2FzIHNvcnRlZCBieSBkaXN0YW5jZVxuICAgICAgICAgICAgICAvLyBUT0RPOiBidWdmaXggd2hlbiBzcGFtbWluZyBidXR0b24gdGhlcmUgY2FuIGJlIGEgZmluaXRlIGFtb3VudCBvZiBUb2FzdHMgdGhhdCBjb25zdGFudGx5IGFwcGVhclxuICAgICAgICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlNvcnRlZCBieSBEaXN0YW5jZVwiLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBUb2FzdC5EVVJBVElPTi5TSE9SVCxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogVG9hc3QuUE9TSVRJT04uQ0VOVEVSIC8vb3B0aW9uYWxcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgVG9hc3Quc2hvdyhvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiICsgKGUubWVzc2FnZSB8fCBlKSk7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH0sXG5cbiAgICBvbkl0ZW1UYXAoZSkge1xuICAgICAgLy8gTmF2aWdhdGUgdG8gQW5pbWFsQ2VudGVyRGV0YWlsc1xuICAgICAgY29uc29sZS5sb2coXCJvbkl0ZW1UYXAoZSksIG5hdmlnYXRlVG8gXCIgKyBKU09OLnN0cmluZ2lmeShlLml0ZW0pKTtcbiAgICAgIHRoaXMuJGVtaXQoXCJzZWxlY3RcIiwgZS5pdGVtKTsgLy8geW91IE5FRUQgdG8gdXNlIGUuaXRlbSAoZS5sb2NhdGlvbiBpcyB1bmRlZmluZWQpXG4gICAgICB0aGlzLiRuYXZpZ2F0ZVRvKEFuaW1hbENlbnRlckRldGFpbHMsIHtcbiAgICAgICAgcHJvcHM6IHsgQW5pbWFsQ2VudGVyOiBlLml0ZW0gfSxcbiAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXG4gICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICBuYW1lOiBcInNsaWRlXCIsXG4gICAgICAgICAgZHVyYXRpb246IDM4MCxcbiAgICAgICAgICBjdXJ2ZTogXCJlYXNlSW5cIlxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxuQGltcG9ydCBcIi4uL0FuaW1hbENlbnRlclwiO1xuXG5BY3Rpb25CYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5ZmNhO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmljb257XG4gIG1hcmdpbi1yaWdodDogNVxufVxuXG4uZ3BzLWJ1dHRvbntcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIGxpZ2h0Z3JheSwgd2hpdGUpO1xuICBjb2xvcjogJGhvbWVwYWdlLWJsdWU7XG4gIGJvcmRlci13aWR0aDogMTtcbiAgYm9yZGVyLWNvbG9yOiBncmF5O1xuICBib3JkZXItcmFkaXVzOiAyNSU7XG4gIG1hcmdpbjogMTA7XG59XG5cbi5saXN0LWdyb3VwIHtcbiAgLmxpc3QtZ3JvdXAtaXRlbS1jb250ZW50IHtcbiAgICBwYWRkaW5nOiA4IDE1IDQgMTU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtbGlnaHQ7XG4gIH1cblxuICAubGlzdC1ncm91cC1pdGVtLXRleHQge1xuICAgIG1hcmdpbjogMiAzO1xuICB9XG5cbiAgLmhvbWVwYWdlLWJsdWUge1xuICAgIGNvbG9yOiAkaG9tZXBhZ2UtYmx1ZTtcbiAgfVxufVxuXG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICAgIDxQYWdlIGNsYXNzPVwicGFnZVwiPlxuICAgICAgICA8QWN0aW9uQmFyPlxuICAgICAgICAgICA8TmF2aWdhdGlvbkJ1dHRvbiBAdGFwPVwiJG5hdmlnYXRlQmFjaygpXCIgYW5kcm9pZC5zeXN0ZW1JY29uPVwiaWNfbWVudV9iYWNrXCIgLz5cbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiU2VydmljZSBSZXF1ZXN0XCIgZm9udFNpemU9XCIyMFwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIvPlxuICAgICAgICA8L0FjdGlvbkJhcj5cblxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJob21lLXBhbmVsXCI+XG4gICAgICAgICAgICA8V2ViVmlldyBoZWlnaHQ9XCI4MTkycHhcIiBzcmM9XCJodHRwOi8vYW5pbWFsY2FyZS5sYWNvdW50eS5nb3Yvc2VydmljZS1yZXF1ZXN0L1wiIC8+XG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgPC9QYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge307XG4gIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi5ob21lLXBhbmVsIHtcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMDtcbn1cblxuQWN0aW9uQmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOWZjYTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cbiAgPFBhZ2U+XG4gICAgPEFjdGlvbkJhciA6dGl0bGU9XCJhY3Rpb25CYXJcIi8+XG4gICAgICA8U3RhY2tMYXlvdXQ+XG4gICAgICAgIDxMYWJlbCBjbGFzcz1cIm1zZ1wiPldlIGFwb2xvZ2l6ZS4gVGhlIHF1ZXN0aW9uIHlvdSBhcmUgc2VhcmNoaW5nIGZvciBoYXMgbm90IGJlZW4gYW5zd2VyZWQgeWV0LiBUYWtlIHRoaXMgdGlja2V0IGlmIHlvdSB3YW50IHRvIHN1Ym1pdCB0aGlzIHF1ZXN0aW9uIGFuZCBnZXQgYW4gYW5zd2VyIGZyb20gdGhlIGZyb250IGRlc2suPC9MYWJlbD5cbiAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cIiosKlwiIHJvd3M9XCIqLCosKlwiPlxuICAgICAgICAgIDxDYXRlZ29yeUJ1dHRvbiByb3c9XCIwXCIgY29sPVwiMFwiIDp0aXRsZT1cInRpdGxlc1swXVwiIDphY3Rpb249XCJ0b0ZhcVwiIGJhY2tncm91bmRDb2xvcj1cIiNmZjAwMDBcIiAvPlxuICAgICAgICAgIDxDYXRlZ29yeUJ1dHRvbiByb3c9XCIwXCIgY29sPVwiMVwiIDp0aXRsZT1cInRpdGxlc1sxXVwiIDphY3Rpb249XCJzdWJtaXRUaWNrZXRcIiBiYWNrZ3JvdW5kQ29sb3I9XCIjNkFGRjVBXCIgLz5cbiAgICAgICAgPC9HcmlkTGF5b3V0PlxuICAgICAgPC9TdGFja0xheW91dD5cbiAgPC9QYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IG1hcFN0YXRlLCBtYXBBY3Rpb25zLCBtYXBNdXRhdGlvbnMgfSBmcm9tICd2dWV4J1xuaW1wb3J0IENhdGVnb3J5QnV0dG9uIGZyb20gJ0AvY29tcG9uZW50cy9idXR0b25zL0NhdGVnb3J5QnV0dG9uLnZ1ZSdcbmltcG9ydCBUaWNrZXQgZnJvbSAnQC9tb2RlbHMvVGlja2V0J1xuaW1wb3J0IEZhcSBmcm9tICcuL0ZhcS52dWUnXG5pbXBvcnQgSG9tZSBmcm9tICcuL0hvbWUudnVlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhY3Rpb25CYXI6ICdUaWNrZXQnLFxuICAgICAgdGl0bGVzOiBbJ05vJywgJ1llcyddLFxuICAgICAgZmFxOiBGYXEsXG4gICAgICBob21lOiBIb21lXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgLi4ubWFwQWN0aW9ucyhbJ2FkZEZhcScsICdhZGRUaWNrZXQnXSksXG4gICAgLi4ubWFwTXV0YXRpb25zKFsnc3RvcmVUaWNrZXQnXSksXG4gICAgc3VibWl0VGlja2V0ICgpIHtcbiAgICAgIHRoaXMuYWRkRmFxKHRoaXMudXNlckZhcSlcbiAgICAgIGNvbnN0IHRpY2tldCA9IG5ldyBUaWNrZXQodGhpcy51c2VyRmFxLnF1ZXN0aW9uKVxuICAgICAgdGhpcy5zdG9yZVRpY2tldCh0aWNrZXQpXG4gICAgICB0aGlzLmFkZFRpY2tldCh0aWNrZXQpXG4gICAgICB0aGlzLiRuYXZpZ2F0ZVRvKHRoaXMuaG9tZSlcbiAgICAgIGFsZXJ0KHtcbiAgICAgICAgdGl0bGU6ICdBbGVydCcsXG4gICAgICAgIG1lc3NhZ2U6ICdZb3UgaGF2ZSBzdWNjZXNzZnVsbHkgc3VibWl0dGVkIGEgdGlja2V0IScsXG4gICAgICAgIG9rQnV0dG9uVGV4dDogJ09LJ1xuICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdpZDonLCB0aGlzLnVzZXJUaWNrZXQuaWQpXG4gICAgICAgIGNvbnNvbGUubG9nKCd0aW1lIGluc2VydGVkOicsIHRoaXMudXNlclRpY2tldC50aW1lSW4pXG4gICAgICAgIGNvbnNvbGUubG9nKCdxdWVzdGlvbjonLCB0aGlzLnVzZXJUaWNrZXQucXVlc3Rpb24pXG4gICAgICB9KVxuICAgIH0sXG4gICAgdG9GYXEgKCkge1xuICAgICAgdGhpcy4kbmF2aWdhdGVUbyh0aGlzLmZhcSlcbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgLi4ubWFwU3RhdGUoWyd1c2VyRmFxJywgJ3RpY2tldHMnLCAndXNlclRpY2tldCddKVxuICB9LFxuICBjb21wb25lbnRzOiB7XG4gICAgQ2F0ZWdvcnlCdXR0b24sXG4gICAgRmFxLFxuICAgIEhvbWVcbiAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4gIC5tc2cge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIwO1xuICB9XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8UGFnZT5cbiAgICA8QWN0aW9uQmFyIHRpdGxlPVwiVGlja2V0IFByb2Nlc3NpbmdcIiAvPlxuICAgIDxTdGFja0xheW91dD5cbiAgICAgIDxMYWJlbCB0ZXh0PVwiUGhvbmUgbnVtYmVyOlwiIC8+XG4gICAgICA8VGV4dFZpZXcgdi1tb2RlbD1cInBob25lXCIgLz5cblxuICAgICAgPExhYmVsIHRleHQ9XCJGaXJzdCBhbmQgbGFzdCBuYW1lOlwiIC8+XG4gICAgICA8VGV4dFZpZXcgdi1tb2RlbD1cIm5hbWVcIiAvPlxuXG4gICAgICA8TGFiZWwgdGV4dD1cIldoYXQgYXJlIHlvdSBoZXJlIGZvcj9cIi8+XG4gICAgICA8VGV4dFZpZXcgdi1tb2RlbD1cInF1ZXJ5XCIvPlxuXG4gICAgICA8QnV0dG9uIEB0YXA9XCJzdWJtaXRUaWNrZXRcIiB0ZXh0PVwiU3VibWl0IFRpY2tldFwiLz5cbiAgICA8L1N0YWNrTGF5b3V0PlxuICA8L1BhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0ICB7IG1hcFN0YXRlLCBtYXBBY3Rpb25zLCBtYXBNdXRhdGlvbnMgfSBmcm9tICd2dWV4J1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9Ib21lLnZ1ZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGhvbmU6ICcnLFxuICAgICAgbmFtZTogJycsXG4gICAgICBxdWVyeTonJyxcbiAgICAgIGhvbWU6IEhvbWUsXG4gICAgICBsaW1pdDogMFxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIC4uLm1hcEFjdGlvbnMoWydhZGRUaWNrZXQnXSksXG4gICAgLy8gdGhpcy5zZXRUaWNrZXRJbmZvKG9iamVjdCksIHdoZXJlIG9iamVjdCBjb250YWlucyBwaG9uZSwgbmFtZSwgcXVlcnksIGNvbW1lbnQgcHJvcGVydGllcyxcbiAgICBzdWJtaXRUaWNrZXQgKCkge1xuICAgICAgdGhpcy4kbmF2aWdhdGVUbyh0aGlzLmhvbWUpXG4gICAgICB0aGlzLmFkZFRpY2tldCh7XG4gICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgcGhvbmU6IHRoaXMucGhvbmUsXG4gICAgICAgIHF1ZXJ5OiB0aGlzLnF1ZXJ5LFxuICAgICAgICBsb2NhdGlvbjogdGhpcy5sb2NhdGlvblxuICAgICAgfSlcbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgLi4ubWFwU3RhdGUoWyd1c2VyVGlja2V0JywgJ2FwcHJvdmVkVGlja2V0JywgJ2xvY2F0aW9uJ10pXG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgYXBwcm92ZWRUaWNrZXQobmV3VmFsLCBvbGRWYWwpIHtcbiAgICAgIGlmICh0aGlzLmxpbWl0IDwgMSkge1xuICAgICAgICBpZiAobmV3VmFsICE9IG51bGwpIHtcbiAgICAgICAgICBhbGVydCh7XG4gICAgICAgICAgICB0aXRsZTogXCJUaWNrZXQgU3VibWl0dGVkXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkhlbGxvIFwiICsgbmV3VmFsLm5hbWUgKyBcIiwgeW91J3JlIHRpY2tldCAjIGlzIFwiICsgbmV3VmFsLm51bWJlclxuICAgICAgICAgICAgKyBcIi4gWW91IHdpbGwgYmUgc2VydmVkIGF0IHdpbmRvdyBcIiArIChuZXdWYWwud2luZG93ICsgMSkgKyBcIi5cIixcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhbGVydCh7XG4gICAgICAgICAgICB0aXRsZTogXCJObyBzZXJ2aWNlXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBcIlRoZXJlIGFyZSBjdXJyZW50bHkgbm8gZW1wbG95ZWVzIHNlcnZpbmcgdGlja2V0c1wiLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmxpbWl0KytcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXG48L3N0eWxlPlxuIiwiXG48IS0tIFBhZ2UgQ29udHJvbGxzIHRoZSBNYWluIHZpZXcgb2YgdGlja2V0IHNlbGN0aW9uLiBDaGFuZ2VpbmcgdGVtcGxldCB3aWxsIGNoYW5nZSB0aGUgdGV4dCB1bmRlciB0aGUgb3B0aW9ucyBpbiB0aGVcbiAgICAgIHNjcm9sbCBiYXIuXG4gICAgICAgICAgICBMaXN0IFBpY2tlcjpcbiAgICAgICAgICAgICAgICBjcmVhdGVzIHRoZSB0ZXh0IHdoZWVsLCB3aGljaCBpcyBwb3B1bGF0ZWQgYnkgdGhlIG9iamVjdCByZXR1cm5lZCBieSB0aGUgc2NyaXB0XG4gICAgICAgICAgICBMYWJlbDpcbiAgICAgICAgICAgICAgICBqdXN0IGEgd2F5IHRvIG1ha2UgcGxhaW4gdGV4dCBvbiBhcHAuXG4gICAgICAgICAgICBTdGFja0xheW91dDpcbiAgICAgICAgICAgICAgICBhbGxvd3MgeW91IG8gcG9wdWxhdGUgdGhlIGJvdHRvbSBwb3J0aW9uIG9mIC0tPlxuXG5cblxuPHRlbXBsYXRlPlxuICAgIDxQYWdlPlxuICAgICAgICA8QWN0aW9uQmFyIHRpdGxlPVwiVGlja2V0IFJlYXNvblwiLz5cbiAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cIipcIiByb3dzPVwiYXV0bywgYXV0bywgYXV0bywgYXV0b1wiPlxuICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwibXNnXCIgdGV4dFdyYXA9XCJ0cnVlXCIgcm93PVwiMFwiPllvdSBhcmUgYXQgdGhlIHt7c2l0ZX19IEFuaW1hbCBDYXJlIGFuZCBDb250cm9sIENlbnRlci48L0xhYmVsPlxuXG4gICAgICAgICAgICA8TGlzdFBpY2tlciByb3c9XCIxXCIgOml0ZW1zPVwiY2hvaWNlc1wiIHNlbGVjdGVkSW5kZXg9XCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBzZWxlY3RlZEluZGV4Q2hhbmdlPVwic2VsZWN0ZWRJbmRleENoYW5nZWRcIiB2LW1vZGVsPVwic2VsZWN0ZWRJbmRleFwiLz5cblxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cIjNcIiB2LWlmPVwiaXNUaWNrZXRcIj5cbiAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJtc2dcIiB0ZXh0PVwiICAgVGVsbCB1cyBhYm91dCB3aGF0IHlvdSB3b3VsZCBsaWtlIHRvIGtub3dcIiB0ZXh0V3JhcD1cInRydWVcIi8+XG5cbiAgICAgICAgICAgICAgICA8VGV4dFZpZXcgdi1tb2RlbD1cIm90aGVyVGV4dFwiLz5cblxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkhvbWVcIiBAdGFwPVwidG9Ib21lXCIvPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkNyZWF0ZSBUaWNrZXRcIiBAdGFwPVwiY3JlYXRlVGlja2V0XCIvPlxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgPC9HcmlkTGF5b3V0PlxuICAgIDwvUGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IEhvbWUgZnJvbSAnLi9Ib21lLnZ1ZSdcbiAgICBpbXBvcnQgVGlja2V0Rm9ybSBmcm9tICcuL1RpY2tldEZvcm0udnVlJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjaG9pY2VzOiBbXG4gICAgICAgICAgICAgICAgICAgICdEcm9wIE9mZicsXG4gICAgICAgICAgICAgICAgICAgICdBZG9wdGlvbiAnLFxuICAgICAgICAgICAgICAgICAgICAnb3RoZXInXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBvdGhlclRleHQ6ICcnLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXg6IDAsXG4gICAgICAgICAgICAgICAgaXNUaWNrZXQ6IHRydWUsXG4gICAgICAgICAgICAgICAgaG9tZTogSG9tZSxcbiAgICAgICAgICAgICAgICB0aWNrZXRGb3JtOiBUaWNrZXRGb3JtLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICB0b0hvbWUoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyh0aGlzLmhvbWUpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3JlYXRlVGlja2V0KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8odGhpcy50aWNrZXRGb3JtLCB7cHJvcHM6IHtxdWVyeTogdGhpcy5vdGhlclRleHR9fSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZWxlY3RlZEluZGV4Q2hhbmdlZCgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4ID49IDEpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNUaWNrZXQgPSB0cnVlXG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzVGlja2V0ID0gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHNpdGU6IFN0cmluZ1xuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4gICAgLm1zZyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTg7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICB9XG48L3N0eWxlPlxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKipcXHJcXG4gKiBDb252ZW5pZW50IHNpbmdsZSBpbXBvcnQgZm9yIGxpZ2h0IHZhcmlhYmxlc1xcclxcbiAqIEluY2x1ZGVzIGJhc2UgdmFyaWFibGVzIHdpdGggbGlnaHQgb3ZlcnJpZGVzXFxyXFxuICoqL1xcbi8qKlxcclxcbiAqIExpZ2h0IHZhcmlhYmxlIG92ZXJyaWRlc1xcclxcbiAqKi9cXG4vKipcXG4gKiBUaGVtZSB2YXJpYWJsZXMgb3ZlcnJpZGVzXFxuKiovXFxuLmFuaW0tY292ZXJbZGF0YS12LTVmZjdkMTVjXSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGtleS1jb3Zlci1kYXRhLXYtNWZmN2QxNWM7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDE7XFxuICBhbmltYXRpb24tZGVsYXk6IDAuNTtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG5Aa2V5ZnJhbWVzIGtleS1jb3Zlci1kYXRhLXYtNWZmN2QxNWMge1xcbjAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTAwKSBzY2FsZSgwLCAwKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbjMwJSB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG4xMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSwgMSk7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG59XFxuLmFuaW0tY29udGVudDFbZGF0YS12LTVmZjdkMTVjXSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGtleS1jb250ZW50LWRhdGEtdi01ZmY3ZDE1YztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTtcXG4gIGFuaW1hdGlvbi1kZWxheTogMC43NTtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG4uYW5pbS1jb250ZW50MltkYXRhLXYtNWZmN2QxNWNdIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBhbmltYXRpb24tbmFtZToga2V5LWNvbnRlbnQtZGF0YS12LTVmZjdkMTVjO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjA7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxuLmFuaW0tY29udGVudDNbZGF0YS12LTVmZjdkMTVjXSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGtleS1jb250ZW50LWRhdGEtdi01ZmY3ZDE1YztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTtcXG4gIGFuaW1hdGlvbi1kZWxheTogMS4yNTtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG4uYW5pbS1jb250ZW50NFtkYXRhLXYtNWZmN2QxNWNdIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBhbmltYXRpb24tbmFtZToga2V5LWNvbnRlbnQtZGF0YS12LTVmZjdkMTVjO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjU7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxuQGtleWZyYW1lcyBrZXktY29udGVudC1kYXRhLXYtNWZmN2QxNWMge1xcbjAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAsIDUwKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbjEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbn1cXG4udGl0bGVbZGF0YS12LTVmZjdkMTVjXSB7XFxuICBmb250LXNpemU6IDE4ZW07XFxuICBjb2xvcjogIzBGMzM2RDtcXG59XFxuLnN0YWNrW2RhdGEtdi01ZmY3ZDE1Y10ge1xcbiAgcGFkZGluZy10b3A6IDE0O1xcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMTtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNkNGQ0ZDQ7XFxufVxcbi5zdGFjay1ob3Vyc1tkYXRhLXYtNWZmN2QxNWNdIHtcXG4gIHBhZGRpbmctdG9wOiA2O1xcbn1cXG4uaG91cnNbZGF0YS12LTVmZjdkMTVjXSB7XFxuICBjb2xvcjogIzAyMjczNDtcXG59XFxuQWN0aW9uQmFyW2RhdGEtdi01ZmY3ZDE1Y10ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOWZjYTtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICA7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9sb2NhdGlvbi9BbmltYWxDZW50ZXJEZXRhaWxzLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKipcXHJcXG4gKiBDb252ZW5pZW50IHNpbmdsZSBpbXBvcnQgZm9yIGxpZ2h0IHZhcmlhYmxlc1xcclxcbiAqIEluY2x1ZGVzIGJhc2UgdmFyaWFibGVzIHdpdGggbGlnaHQgb3ZlcnJpZGVzXFxyXFxuICoqL1xcbi8qKlxcclxcbiAqIExpZ2h0IHZhcmlhYmxlIG92ZXJyaWRlc1xcclxcbiAqKi9cXG4vKipcXG4gKiBUaGVtZSB2YXJpYWJsZXMgb3ZlcnJpZGVzXFxuKiovXFxuLmZhcV9xdWVzdGlvbltkYXRhLXYtMGE0YmIyNDVdIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAyMDtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuLmZhcV9hbnN3ZXJbZGF0YS12LTBhNGJiMjQ1XSB7XFxuICBjb2xvcjogIzQ1NDU0NTtcXG59XFxuLmxpc3QtZ3JvdXAtaXRlbS10ZXh0W2RhdGEtdi0wYTRiYjI0NV0ge1xcbiAgbWFyZ2luOiAyIDM7XFxufVxcbi5saXN0LWdyb3VwLWl0ZW0tY29udGVudFtkYXRhLXYtMGE0YmIyNDVdIHtcXG4gIHBhZGRpbmc6IDggMTUgNCAxNTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxufVxcbi5ob21lcGFnZS1ibHVlW2RhdGEtdi0wYTRiYjI0NV0ge1xcbiAgY29sb3I6ICMwNzgzZjg7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIDtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL3N1Ymxpc3RzL0ZhcUluZm8udnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcclxcbiAqIENvbnZlbmllbnQgc2luZ2xlIGltcG9ydCBmb3IgbGlnaHQgdmFyaWFibGVzXFxyXFxuICogSW5jbHVkZXMgYmFzZSB2YXJpYWJsZXMgd2l0aCBsaWdodCBvdmVycmlkZXNcXHJcXG4gKiovXFxuLyoqXFxyXFxuICogTGlnaHQgdmFyaWFibGUgb3ZlcnJpZGVzXFxyXFxuICoqL1xcbi8qKlxcbiAqIFRoZW1lIHZhcmlhYmxlcyBvdmVycmlkZXNcXG4qKi9cXG5BY3Rpb25CYXJbZGF0YS12LWUzOWQxMDkyXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5ZmNhO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcbi5tZXNzYWdlW2RhdGEtdi1lMzlkMTA5Ml0ge1xcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjA7XFxuICBjb2xvcjogIzAwMDAwMDtcXG59XFxuLmZhcV9xdWVzdGlvbltkYXRhLXYtZTM5ZDEwOTJdIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAyMDtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuLmZhcV9hbnN3ZXJbZGF0YS12LWUzOWQxMDkyXSB7XFxuICBjb2xvcjogIzQ1NDU0NTtcXG59XFxuLmxpc3QtZ3JvdXAtaXRlbS10ZXh0W2RhdGEtdi1lMzlkMTA5Ml0ge1xcbiAgbWFyZ2luOiA3IDg7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIDtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi92aWV3cy9GYXEudnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcclxcbiAqIENvbnZlbmllbnQgc2luZ2xlIGltcG9ydCBmb3IgbGlnaHQgdmFyaWFibGVzXFxyXFxuICogSW5jbHVkZXMgYmFzZSB2YXJpYWJsZXMgd2l0aCBsaWdodCBvdmVycmlkZXNcXHJcXG4gKiovXFxuLyoqXFxyXFxuICogTGlnaHQgdmFyaWFibGUgb3ZlcnJpZGVzXFxyXFxuICoqL1xcbi8qKlxcbiAqIFRoZW1lIHZhcmlhYmxlcyBvdmVycmlkZXNcXG4qKi9cXG4uQWN0aW9uX0JhcltkYXRhLXYtMmYyYmU3ZTRdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDlmY2E7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuLlNfQmFyW2RhdGEtdi0yZjJiZTdlNF0ge1xcbiAgY29sb3I6ICMwNTA1MDU7XFxufVxcbi5TX0J1dHRvbltkYXRhLXYtMmYyYmU3ZTRdIHtcXG4gIC8qIHRleHQ9XFxcInJpZ2h0XFxcIjtcXG4gICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwicmlnaHRcXFwiO1xcbiAgICAgICAgICB3aWR0aD1cXFwiMzMlXFxcIlxcbiAgICAgICAgICBoZWlnaHQ9XFxcIjcwXFxcIlxcbiAgICAgICAgICAvKmJhY2tncm91bmRDb2xvcj1cXFwiIzFjNmI0OFxcXCIvPiovXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9pbWFnZXMvTmF0aXZlU2NyaXB0LVZ1ZS5wbmdcXFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG4uY292ZXJbZGF0YS12LTJmMmJlN2U0XSB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHBsdW0sICMwMDlmY2EpO1xcbn1cXG4uaG9tZXBhZ2UtYmx1ZVtkYXRhLXYtMmYyYmU3ZTRdIHtcXG4gIGNvbG9yOiAjMDc4M2Y4O1xcbn1cXG4uQWN0aW9uX1RleHRbZGF0YS12LTJmMmJlN2U0XSB7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxufVxcbi5Ib21lQnV0dG9uW2RhdGEtdi0yZjJiZTdlNF0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgZm9udC1zaXplOiAxNCU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmctdG9wOiA3ZW07XFxuICBsZXR0ZXItc3BhY2luZzogMDtcXG59XFxuLmxheW91dFtkYXRhLXYtMmYyYmU3ZTRdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XFxufVxcbi5tZXNzYWdlW2RhdGEtdi0yZjJiZTdlNF0ge1xcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbG9yOiAjMjUyNTI1O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICA7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vdmlld3MvSG9tZS52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyoqXFxyXFxuICogQ29udmVuaWVudCBzaW5nbGUgaW1wb3J0IGZvciBsaWdodCB2YXJpYWJsZXNcXHJcXG4gKiBJbmNsdWRlcyBiYXNlIHZhcmlhYmxlcyB3aXRoIGxpZ2h0IG92ZXJyaWRlc1xcclxcbiAqKi9cXG4vKipcXHJcXG4gKiBMaWdodCB2YXJpYWJsZSBvdmVycmlkZXNcXHJcXG4gKiovXFxuLyoqXFxuICogVGhlbWUgdmFyaWFibGVzIG92ZXJyaWRlc1xcbioqL1xcbkFjdGlvbkJhcltkYXRhLXYtM2U1OTc4NjRdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDlmY2E7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuLmljb25bZGF0YS12LTNlNTk3ODY0XSB7XFxuICBtYXJnaW4tcmlnaHQ6IDU7XFxufVxcbi5ncHMtYnV0dG9uW2RhdGEtdi0zZTU5Nzg2NF0ge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIGxpZ2h0Z3JheSwgd2hpdGUpO1xcbiAgY29sb3I6ICMwNzgzZjg7XFxuICBib3JkZXItd2lkdGg6IDE7XFxuICBib3JkZXItY29sb3I6IGdyYXk7XFxuICBib3JkZXItcmFkaXVzOiAyNSU7XFxuICBtYXJnaW46IDEwO1xcbn1cXG4ubGlzdC1ncm91cCAubGlzdC1ncm91cC1pdGVtLWNvbnRlbnRbZGF0YS12LTNlNTk3ODY0XSB7XFxuICBwYWRkaW5nOiA4IDE1IDQgMTU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcbn1cXG4ubGlzdC1ncm91cCAubGlzdC1ncm91cC1pdGVtLXRleHRbZGF0YS12LTNlNTk3ODY0XSB7XFxuICBtYXJnaW46IDIgMztcXG59XFxuLmxpc3QtZ3JvdXAgLmhvbWVwYWdlLWJsdWVbZGF0YS12LTNlNTk3ODY0XSB7XFxuICBjb2xvcjogIzA3ODNmODtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL3ZpZXdzL0xvY2F0aW9uLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4vKiBDU1MgKi9cXG4uY2xvc2VbZGF0YS12LTRlYmEyZDEyXSB7XFxuICBmb250LXNpemU6IDIwO1xcbiAgY29sb3I6IHJnYigyMjYsIDIyOSwgMjI5KTtcXG4gIG1hcmdpbjogMTUgMCAwIDE1O1xcbn1cXG5UZXh0Vmlld1tkYXRhLXYtNGViYTJkMTJdIHtcXG4gIGJvcmRlci13aWR0aDogMTtcXG4gIGJvcmRlci1jb2xvcjogI2ZmZmZmZjtcXG59XFxuLmRlc2NyaXB0aW9uLXRleHRbZGF0YS12LTRlYmEyZDEyXSB7XFxuICBmb250LXNpemU6IDE0O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbi5kZXNjcmlwdGlvbi1pY29uW2RhdGEtdi00ZWJhMmQxMl0ge1xcbiAgZm9udC1zaXplOiAxNjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICMzZTllZGI7XFxuICBtYXJnaW4tcmlnaHQ6IDg7XFxuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbn1cXG4uZGVzY3JpcHRpb24tdmFsdWVbZGF0YS12LTRlYmEyZDEyXSB7XFxuICBmb250LXNpemU6IDE0O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgbWFyZ2luOiA4O1xcbn1cXG4uZGVzY3JpcHRpb24tdmFsdWUuaXNBdmFpbGFibGVbZGF0YS12LTRlYmEyZDEyXSB7XFxuICBjb2xvcjogZ3JlZW47XFxuICBmb250LXdlaWdodDogYm9sZFxcbn1cXG4uZGVzY3JpcHRpb24tdmFsdWUuaXNOb3RBdmFpbGFibGVbZGF0YS12LTRlYmEyZDEyXSB7XFxuICBjb2xvcjogcmVkO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRcXG59XFxuLnJhdGVbZGF0YS12LTRlYmEyZDEyXSB7XFxuICBwYWRkaW5nLXRvcDogMztcXG4gIG1hcmdpbjogMDtcXG4gIGNvbG9yOiAjZmZlOTAwO1xcbiAgZm9udC1zaXplOiAxODtcXG59XFxuLnJhdGluZy12YWx1ZVtkYXRhLXYtNGViYTJkMTJdIHtcXG4gIG1hcmdpbi1sZWZ0OiA1O1xcbn1cXG4ubGlrZWQtYWN0aXZlW2RhdGEtdi00ZWJhMmQxMl0ge1xcbiAgY29sb3I6ICM0MDgwZmY7XFxufVxcbi5oZWFydC1hY3RpdmVbZGF0YS12LTRlYmEyZDEyXSB7XFxuICBjb2xvcjogI2I1MTIxMztcXG59XFxuLmRlZmF1bHRbZGF0YS12LTRlYmEyZDEyXSB7XFxuICBjb2xvcjogIzgyODI4MjtcXG59XFxuLmxheW91dFtkYXRhLXYtNGViYTJkMTJdIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuICBjb2xvcjogIzgyODI4MjtcXG4gIGZvbnQtc2l6ZTogMTQ7XFxuICBoZWlnaHQ6IDMwO1xcbiAgcGFkZGluZzogNSAwIDUgMDtcXG59XFxuLmxpa2UtaWNvbltkYXRhLXYtNGViYTJkMTJdIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuICBoZWlnaHQ6IDMwO1xcbiAgZm9udC1zaXplOiAxNjtcXG4gIG1hcmdpbi1yaWdodDogMjtcXG4gIHBhZGRpbmc6IDUgNSA1IDU7XFxufVxcbi5pdGVtLW5hbWVbZGF0YS12LTRlYmEyZDEyXSB7XFxuICBmb250LXNpemU6IDE0O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5pdGVtLWNhdGVnb3J5W2RhdGEtdi00ZWJhMmQxMl0ge1xcbiAgZm9udC1zaXplOiAxNDtcXG4gIGNvbG9yOiAjODI4MjgyO1xcbn1cXG4uY2F0ZWdvcnktaWNvbltkYXRhLXYtNGViYTJkMTJdIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiA1O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjU7XFxuICBib3JkZXItd2lkdGg6IDE7XFxuICBib3JkZXItY29sb3I6ICNmZmZmZmY7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBtYXJnaW4tdG9wOiA0O1xcbiAgbWFyZ2luLXJpZ2h0OiAxNTtcXG4gIHdpZHRoOiA0MDtcXG4gIGhlaWdodDogNDA7XFxufVxcbi5jb250ZW50W2RhdGEtdi00ZWJhMmQxMl0ge1xcbiAgbWFyZ2luLWxlZnQ6IDE2O1xcbiAgbWFyZ2luLXJpZ2h0OiAxNjtcXG4gIG1hcmdpbi1ib3R0b206IDM7XFxuICAvKiBtYXJnaW4tdG9wOiAxNjsgKi9cXG59XFxuLmNhcmQtaW1nW2RhdGEtdi00ZWJhMmQxMl0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDI1MDtcXG4gIG1hcmdpbi1ib3R0b206IDU7XFxufVxcbi5jYXJkLWltZy10aHVtYltkYXRhLXYtNGViYTJkMTJdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDIzMCwgMjMwKTtcXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1O1xcbiAgd2lkdGg6IDEzMDtcXG4gIGhlaWdodDogNzA7XFxuICBtYXJnaW4tbGVmdDogNTtcXG59XFxuLmxpbmVbZGF0YS12LTRlYmEyZDEyXSB7XFxuICBoZWlnaHQ6IDAuNTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiAjZTBlMGUwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG59XFxuLmxpbmVCcmVha1tkYXRhLXYtNGViYTJkMTJdIHtcXG4gIGhlaWdodDogMC41O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6ICNlMGUwZTA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbn1cXG5cXG5cXG4vKiBBbmltYXRpb25zICovXFxuLmFuaW0tcGFnZVtkYXRhLXYtNGViYTJkMTJdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGQ2ZDg7XFxuICBhbmltYXRpb24tbmFtZToga2V5LXBhZ2UtZGF0YS12LTRlYmEyZDEyO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbkBrZXlmcmFtZXMga2V5LXBhZ2UtZGF0YS12LTRlYmEyZDEyIHtcXG4wJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYWRhZGE7XFxufVxcbjIwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYmQyZDU7XFxufVxcbjEwMCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxufVxcbi5hbmltLWNvdmVyW2RhdGEtdi00ZWJhMmQxMl0ge1xcbiAgb3BhY2l0eTogMDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBrZXktY292ZXItZGF0YS12LTRlYmEyZDEyO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjU7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxuQGtleWZyYW1lcyBrZXktY292ZXItZGF0YS12LTRlYmEyZDEyIHtcXG4wJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDU1MCkgc2NhbGUoMCwgMCk7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG4zMCUge1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxuMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDEsIDEpO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxufVxcbi5hbmltLWltYWdlc1tkYXRhLXYtNGViYTJkMTJdIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBhbmltYXRpb24tbmFtZToga2V5LWltYWdlcy1kYXRhLXYtNGViYTJkMTI7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDE7XFxuICBhbmltYXRpb24tZGVsYXk6IDAuNztcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG5Aa2V5ZnJhbWVzIGtleS1pbWFnZXMtZGF0YS12LTRlYmEyZDEyIHtcXG4wJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDU1MCkgc2NhbGUoMCwgMCk7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG4zMCUge1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxuMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDEsIDEpO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxufVxcbi5hbmltLWl0ZW1JbmZvW2RhdGEtdi00ZWJhMmQxMl0ge1xcbiAgb3BhY2l0eTogMDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBrZXktaXRlbUluZm8tZGF0YS12LTRlYmEyZDEyO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjI7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxuQGtleWZyYW1lcyBrZXktaXRlbUluZm8tZGF0YS12LTRlYmEyZDEyIHtcXG4wJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwLCA1MCk7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG4xMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG59XFxuLmFuaW0tbGlrZXNbZGF0YS12LTRlYmEyZDEyXSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGtleS1saWtlcy1kYXRhLXYtNGViYTJkMTI7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDE7XFxuICBhbmltYXRpb24tZGVsYXk6IDEuNTtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG5Aa2V5ZnJhbWVzIGtleS1saWtlcy1kYXRhLXYtNGViYTJkMTIge1xcbjAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAsIDUwKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbjEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbn1cXG4uYW5pbS1jb250ZW50W2RhdGEtdi00ZWJhMmQxMl0ge1xcbiAgb3BhY2l0eTogMDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBrZXktY29udGVudC1kYXRhLXYtNGViYTJkMTI7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDE7XFxuICBhbmltYXRpb24tZGVsYXk6IDEuODtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG5Aa2V5ZnJhbWVzIGtleS1jb250ZW50LWRhdGEtdi00ZWJhMmQxMiB7XFxuMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCwgNTApO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxuMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIDtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL2Fkb3B0aW9uL0Fkb3B0aW9uQW5pbWFsRGV0YWlscy52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLml0ZW0tY2F0ZWdvcnlbZGF0YS12LWYxNDIyYTEwXSB7XFxuICBmb250LXNpemU6IDE0O1xcbiAgY29sb3I6ICM4MjgyODI7XFxufVxcbi5nZW5kZXItaWNvbltkYXRhLXYtZjE0MjJhMTBdIHtcXG4gIHBhZGRpbmctdG9wOiAzO1xcbiAgcGFkZGluZy1yaWdodDogMztcXG4gIGZvbnQtc2l6ZTogMTY7XFxuICBtYXJnaW4tcmlnaHQ6IDEwO1xcbn1cXG4uaW5mby1pY29uW2RhdGEtdi1mMTQyMmExMF0ge1xcbiAgcGFkZGluZy10b3A6IDM7XFxuICBwYWRkaW5nLWxlZnQ6IDM7XFxuICBjb2xvcjogZ3JheTtcXG4gIGZvbnQtc2l6ZTogMTQ7XFxuICBtYXJnaW4tbGVmdDogMTA7XFxufVxcbi5yYXRpbmctdmFsdWVbZGF0YS12LWYxNDIyYTEwXSB7XFxuICBtYXJnaW4tbGVmdDogNTtcXG59XFxuLmxpa2VkLWFjdGl2ZVtkYXRhLXYtZjE0MjJhMTBdIHtcXG4gIGNvbG9yOiAjNDA4MGZmO1xcbn1cXG4uaGVhcnQtYWN0aXZlW2RhdGEtdi1mMTQyMmExMF0ge1xcbiAgY29sb3I6ICNiNTEyMTM7XFxufVxcbi5kZWZhdWx0W2RhdGEtdi1mMTQyMmExMF0ge1xcbiAgY29sb3I6ICM4MjgyODI7XFxufVxcbi5sYXlvdXRbZGF0YS12LWYxNDIyYTEwXSB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcbiAgY29sb3I6ICM4MjgyODI7XFxuICBmb250LXNpemU6IDE0O1xcbiAgaGVpZ2h0OiAzMDtcXG4gIHBhZGRpbmc6IDUgMCA1IDA7XFxufVxcbi5saWtlLWljb25bZGF0YS12LWYxNDIyYTEwXSB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcbiAgaGVpZ2h0OiAzMDtcXG4gIGZvbnQtc2l6ZTogMTY7XFxuICBtYXJnaW4tcmlnaHQ6IDI7XFxuICBwYWRkaW5nOiA1IDUgNSA1O1xcbn1cXG4uaXRlbS1uYW1lW2RhdGEtdi1mMTQyMmExMF0ge1xcbiAgZm9udC1zaXplOiAxNDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZy1ib3R0b206IDI7XFxufVxcbi5pdGVtLWNhdGVnb3J5W2RhdGEtdi1mMTQyMmExMF0ge1xcbiAgZm9udC1zaXplOiAxNDtcXG4gIGNvbG9yOiAjODI4MjgyO1xcbn1cXG4uY2F0ZWdvcnktaWNvbltkYXRhLXYtZjE0MjJhMTBdIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiA1O1xcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDI1O1xcbiAgYm9yZGVyLXdpZHRoOiAxO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgbWFyZ2luLXRvcDogNDtcXG4gIG1hcmdpbi1yaWdodDogMTU7XFxuICB3aWR0aDogNDA7XFxuICBoZWlnaHQ6IDQwO1xcbn1cXG4uY29udGVudFtkYXRhLXYtZjE0MjJhMTBdIHtcXG4gIG1hcmdpbi1sZWZ0OiAxNjtcXG4gIG1hcmdpbi1yaWdodDogMTY7XFxuICBtYXJnaW4tYm90dG9tOiAzO1xcbiAgbWFyZ2luLXRvcDogMTY7XFxufVxcbi5jYXJkLWltZ1tkYXRhLXYtZjE0MjJhMTBdIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxNTA7XFxuICBtYXJnaW4tYm90dG9tOiA1O1xcbn1cXG4ubGluZVtkYXRhLXYtZjE0MjJhMTBdIHtcXG4gIGhlaWdodDogMC41O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6ICNlMGUwZTA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbn1cXG4ubGluZUJyZWFrW2RhdGEtdi1mMTQyMmExMF0ge1xcbiAgaGVpZ2h0OiA3O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6ICNlMGUwZTA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICA7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9hZG9wdGlvbi9BbmltYWxDYXJkLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uZGVmYXVsdC1pbWdbZGF0YS12LTA1Yzk4ZWFjXSB7XFxuICAgIGNvbG9yOiAjZDFjZWNlNWI7XFxufVxcbi5jYXRlZ29yeS1uYW1lW2RhdGEtdi0wNWM5OGVhY10ge1xcbiAgICBjb2xvcjogI2Y3ZjdmNztcXG4gICAgZm9udC1zaXplOiAxNDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luOiA1IDAgMTUgMFxcbn1cXG4uYmFubmVyW2RhdGEtdi0wNWM5OGVhY10ge1xcbiAgICBjb2xvcjogI2JkYmRiZDtcXG4gICAgb3BhY2l0eTogLjM7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIDtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL2Fkb3B0aW9uL2NhdGVnb3J5LnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4vKiBidXR0b24gb24gYW5kcm9pZCBpcyBzdHlsZWQgd2l0aCBkZWZhdWx0IHNldHRpbmcgd2hlbiBib3JkZXIgcmFkaXVzIGlzIG9taXR0ZWQqL1xcbi5idXR0b25bZGF0YS12LTc2MDlhMjM5XXtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIDtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL2J1dHRvbnMvQ2F0ZWdvcnlCdXR0b24udnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcbi8qIGJ1dHRvbiBvbiBhbmRyb2lkIGlzIHN0eWxlZCB3aXRoIGRlZmF1bHQgc2V0dGluZyB3aGVuIGJvcmRlciByYWRpdXMgaXMgb21pdHRlZCovXFxuLmJ1dHRvbltkYXRhLXYtNDRhZTU3MThde1xcbiAgYm9yZGVyLXJhZGl1czogMjUlO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxufVxcblxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIDtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL2J1dHRvbnMvSWNvbkJ1dHRvbi52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnRhYnZpZXcuYWN0aXZlIHtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMztcXG4gIG1hcmdpbjogMDtcXG4gIGhlaWdodDogNTA7XFxufVxcbi50YWJ2aWV3VGV4dCB7XFxuICBtYXJnaW4tdG9wOiAxNTtcXG4gIG1hcmdpbi1ib3R0b206IDU7XFxuICBmb250LXNpemU6IDEzO1xcbiAgY29sb3I6ICNkOGQyZDI7XFxufVxcbi50YWJ2aWV3VGV4dC5hY3RpdmUge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxufVxcbi5uYXZJY29uIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDM7XFxufVxcbi5uYXZUYWIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOWZjYTtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG4ubmF2VGFidmlldyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICA7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vdmlld3MvQWRvcHRpb24udnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5ob21lLXBhbmVsW2RhdGEtdi0zY2NlY2YwOV0ge1xcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjA7XFxufVxcbkFjdGlvbkJhcltkYXRhLXYtM2NjZWNmMDldIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDlmY2E7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL3ZpZXdzL1NlcnZpY2VSZXF1ZXN0LnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4ubXNnW2RhdGEtdi0wN2I0MGMwYV0ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyMDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL3ZpZXdzL1RpY2tldC52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLm1zZ1tkYXRhLXYtMTM5ZDk1NTNdIHtcXG4gICAgZm9udC1zaXplOiAxODtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICA7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vdmlld3MvVGlja2V0T3B0aW9ucy52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiYW5pbS1wYWdlXCIsXG4gICAgICBhdHRyczogeyBhY3Rpb25CYXJIaWRkZW46IFwidHJ1ZVwiLCBiYWNrZ3JvdW5kU3BhblVuZGVyU3RhdHVzQmFyOiBcInRydWVcIiB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1haW5cIiwgYXR0cnM6IHsgdmVydGljYWxBbGlnbm1lbnQ6IFwidG9wXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYW5pbS1jb3ZlclwiLFxuICAgICAgICAgICAgICBhdHRyczogeyByb3dzOiBcImF1dG9cIiwgY29sdW1uczogXCIqXCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2FyZC1pbWdcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiLTQwXCIsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTgwXCIsXG4gICAgICAgICAgICAgICAgICBzdHJldGNoOiBcImFzcGVjdEZpbGxcIixcbiAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLml0ZW0uY292ZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBjbG9zZVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcInRvcFwiLFxuICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uX2YoXCJmb250aWNvblwiKShcImZhLWFycm93LWxlZnRcIiksXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIyNFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5jbG9zZSB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlNjcm9sbFZpZXdcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYW5pbS1pbWFnZXNcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgb3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIiB9IH0sXG4gICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5pdGVtLmltYWdlcywgZnVuY3Rpb24oaW1hZ2UpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHsga2V5OiBpbWFnZSwgYXR0cnM6IHsgcm93czogXCJhdXRvXCIsIGNvbHVtbnM6IFwiKlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2FyZC1pbWctdGh1bWJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogaW1hZ2Uuc3JjLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJldGNoOiBcImFzcGVjdEZpdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgcm93czogXCJhdXRvLGF1dG8sYXV0byxhdXRvXCIsIGNvbHVtbnM6IFwiYXV0b1wiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFuaW0taXRlbUluZm9cIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCIxNVwiLFxuICAgICAgICAgICAgICAgICAgICByb3c6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnM6IFwiYXV0bywqXCIsXG4gICAgICAgICAgICAgICAgICAgIHJvd3M6IFwiYXV0byxhdXRvLGF1dG8sYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGNhdGVnb3J5LWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uX2YoXCJmb250aWNvblwiKShfdm0uZ2VuZGVySWNvbiksXG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJvd1NwYW46IFwiMlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogX3ZtLml0ZW0uY2F0ZWdvcnlUYWdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaXRlbS1uYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHR3cmFwOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJib3R0b21cIixcbiAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uaXRlbS5uYW1lXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIml0ZW0tY2F0ZWdvcnlcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dHdyYXA6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcInRvcFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5pdGVtLmNhdGVnb3J5XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFwiU3RhY2tMYXlvdXRcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpbmUgYW5pbS1saWtlc1wiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIyXCIsIHdpZHRoOiBcIjEwMCVcIiwgbWFyZ2luVG9wOiBcIjEwXCIgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYW5pbS1saWtlc1wiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjVcIixcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICByb3c6IFwiM1wiLFxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5zOiBcIiosYXV0byxhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgIHJvd3M6IFwiYXV0b1wiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgY29sOiBcIjBcIiwgcm93czogXCJhdXRvXCIsIGNvbHVtbnM6IFwiYXV0byxhdXRvXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWY6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlrZS1pY29uIGZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uX2YoXCJmb250aWNvblwiKShcImZhLWluZm8tY2lyY2xlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLml0ZW0uYnJlZWRfZ3JvdXAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIC0gXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5pdGVtLnByaW1hcnlfYnJlZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dzOiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM6IFwiYXV0byxhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCIxNVwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS50b2dnbGVIZWFydCB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJmYXZvcml0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlrZS1pY29uICBmYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLml0ZW0uaXNGYXZvcml0ZSA/IFwiaGVhcnQtYWN0aXZlXCIgOiBcImRlZmF1bHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5fZihcImZvbnRpY29uXCIpKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5pdGVtLmlzRmF2b3JpdGUgPyBcImZhLWhlYXJ0XCIgOiBcImZhLWhlYXJ0LW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbDogXCIxXCIsIHJvdzogXCIwXCIsIHRleHQ6IFwiRmF2b3JpdGVcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgY29sOiBcIjJcIiwgb3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlrZS1pY29uIGxheW91dCBmYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLl9mKFwiZm9udGljb25cIikoXCJmYS1zaGFyZS1zcXVhcmUtb1wiKSB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiU2hhcmVcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXCJTdGFja0xheW91dFwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaW5lQnJlYWsgYW5pbS1saWtlc1wiLFxuICAgICAgICAgICAgYXR0cnM6IHsgd2lkdGg6IFwiMTAwJVwiIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiR3JpZGxheW91dFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb250ZW50IGFuaW0tY29udGVudFwiLFxuICAgICAgICAgICAgICBhdHRyczogeyByb3dzOiBcImF1dG8sKlwiLCBtYXJnaW5Ub3A6IFwiMTVcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICByb3dzOiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjVcIixcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uczogXCJhdXRvLCBhdXRvXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBkZXNjcmlwdGlvbi1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uX2YoXCJmb250aWNvblwiKShcImZhLXRhZ3NcIiksXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sOiBcIjFcIiwgdGV4dDogXCJEZXNjcmlwdGlvblwiLCB0ZXh0V3JhcDogXCJ0cnVlXCIgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgcm93OiBcIjFcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiU2Nyb2xsVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzOiBcIiosICosICosICosICosICosICosICpcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zOiBcImF1dG8sICpcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJ0b3BcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLXZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjBcIiwgY29sOiBcIjBcIiwgdGV4dDogXCJBdmFpbGFiaWxpdHk6XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGRlc2NyaXB0aW9uLXZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLml0ZW0uaXNBdmFpbGFibGUgPT0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJpc0F2YWlsYWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImlzTm90QXZhaWxhYmxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb3c6IFwiMFwiLCBjb2w6IFwiMVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLml0ZW0uaXNBdmFpbGFibGUgPT0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIkF2YWlsYWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiTm90IEF2YWlsYWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5fZihcImZvbnRpY29uXCIpKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5pdGVtLmlzQXZhaWxhYmxlID09IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJmYS1jaGVja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiZmEtdGltZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi12YWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIxXCIsIGNvbDogXCIwXCIsIHRleHQ6IFwiTG9jYXRpb246XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tdmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uaXRlbS5sb2NhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLXZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjJcIiwgY29sOiBcIjBcIiwgdGV4dDogXCJBZ2U6XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tdmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb3c6IFwiMlwiLCBjb2w6IFwiMVwiLCB0ZXh0OiBfdm0uaXRlbS5hZ2UgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tdmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb3c6IFwiM1wiLCBjb2w6IFwiMFwiLCB0ZXh0OiBcIkdlbmRlcjogXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tdmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb3c6IFwiM1wiLCBjb2w6IFwiMVwiLCB0ZXh0OiBfdm0uaXRlbS5nZW5kZXIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tdmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb3c6IFwiNFwiLCBjb2w6IFwiMFwiLCB0ZXh0OiBcIkJyZWVkIEdyb3VwOlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLXZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCI0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLml0ZW0uYnJlZWRfZ3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi12YWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiUHJpbWFyeSBCcmVlZDpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLXZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCI1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLml0ZW0ucHJpbWFyeV9icmVlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLXZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjZcIiwgY29sOiBcIjBcIiwgdGV4dDogXCJBbmltYWwgU2l6ZTpcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi12YWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiNlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5pdGVtLmFuaW1hbF9zaXplXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tdmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlByaW1hcnkgQ29sb3I6XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi12YWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiN1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5pdGVtLnByaW1hcnlfY29sb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJtYWluXCIgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjYXJkLWltZ1wiLFxuICAgICAgICAgICAgYXR0cnM6IHsgc3RyZXRjaDogXCJhc3BlY3RGaXRcIiwgc3JjOiBfdm0uaXRlbS5jb3ZlciB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uQ2xpY2tCdXR0b24oKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgY29sdW1uczogXCJhdXRvLCpcIixcbiAgICAgICAgICAgICAgICByb3dzOiBcImF1dG8sYXV0b1wiLFxuICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImNlbnRlclwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25DbGlja0J1dHRvbigpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBjYXRlZ29yeS1pY29uXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5fZihcImZvbnRpY29uXCIpKF92bS5jYXRlZ29yeUljb24pLFxuICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICByb3dTcGFuOiBcIjJcIixcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogX3ZtLml0ZW0uY2F0ZWdvcnlUYWdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBpdGVtLW5hbWVcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0d3JhcDogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLml0ZW0ubmFtZSArIFwiLCBcIiArIF92bS5pdGVtLmFnZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHJvdzogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgIHJvd3M6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5zOiBcImF1dG8sYXV0byxhdXRvXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpdGVtLWNhdGVnb3J5XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHR3cmFwOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJib3R0b21cIixcbiAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uaXRlbS5jYXRlZ29yeVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXCJTdGFja0xheW91dFwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaW5lXCIsXG4gICAgICAgICAgICBhdHRyczogeyB3aWR0aDogXCIxMDAlXCIsIG1hcmdpblRvcDogXCI1XCIgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjVcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgcm93OiBcIjNcIixcbiAgICAgICAgICAgICAgICBjb2x1bW5zOiBcIiosIGF1dG8sIGF1dG9cIixcbiAgICAgICAgICAgICAgICByb3dzOiBcImF1dG9cIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2w6IFwiMFwiLCByb3dzOiBcImF1dG9cIiwgY29sdW1uczogXCJhdXRvLGF1dG9cIiB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uQ2xpY2tCdXR0b24oKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgcmVmOiBcImluZm9cIixcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlrZS1pY29uIGZhXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5fZihcImZvbnRpY29uXCIpKFwiZmEtaW5mby1jaXJjbGVcIilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uaXRlbS5icmVlZF9ncm91cCArIFwiIC0gXCIgKyBfdm0uaXRlbS5wcmltYXJ5X2JyZWVkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgIHJvd3M6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5zOiBcImF1dG8sYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCIxNVwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0udG9nZ2xlSGVhcnQgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHJlZjogXCJmYXZvcml0ZVwiLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaWtlLWljb24gIGZhXCIsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiBbX3ZtLml0ZW0uaXNGYXZvcml0ZSA/IFwiaGVhcnQtYWN0aXZlXCIgOiBcImRlZmF1bHRcIl0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5fZihcImZvbnRpY29uXCIpKFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLml0ZW0uaXNGYXZvcml0ZSA/IFwiZmEtaGVhcnRcIiA6IFwiZmEtaGVhcnQtb1wiXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sOiBcIjFcIiwgcm93OiBcIjBcIiwgdGV4dDogXCJGYXZvcml0ZVwiIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGNvbDogXCIyXCIsIG9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHJlZjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlrZS1pY29uIGxheW91dCBmYVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0uX2YoXCJmb250aWNvblwiKShcImZhLXNoYXJlLXNxdWFyZS1vXCIpIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIlNoYXJlXCIgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHsgc3RhdGljQ2xhc3M6IFwibGluZUJyZWFrXCIsIGF0dHJzOiB7IHdpZHRoOiBcIjEwMCVcIiB9IH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiR3JpZExheW91dFwiLFxuICAgIHsgYXR0cnM6IHsgcm93czogXCIqXCIsIGNvbHVtbnM6IFwiKlwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBoZWlnaHQ6IFwiMTUwXCIsXG4gICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxMFwiLFxuICAgICAgICAgIHN0cmV0Y2g6IFwiYXNwZWN0RmlsbFwiLFxuICAgICAgICAgIHNyYzogX3ZtLml0ZW0uY292ZXJcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgLz5cXG4gICAgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHZlcnRpY2FsQWxpZ25tZW50OiBcImJvdHRvbVwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJiYW5uZXIyXCIsIGF0dHJzOiB7IGJhY2tncm91bmRDb2xvcjogXCIjNDg5ZTllOWVcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNhdGVnb3J5LW5hbWUgIG0tYi0xMCBtLXQtMTBcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLml0ZW0uY2F0ZWdvcnkgKyBcIiAoXCIgKyBfdm0uaXRlbS5jb3VudCArIFwiKVwiLFxuICAgICAgICAgICAgICAgICAgdGV4dHdyYXA6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJTdGFja0xheW91dFwiLFxuICAgIFtcbiAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJpbWFnZVwiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgIHNyYzogX3ZtLnNyYyxcbiAgICAgICAgICBzdHJldGNoOiBcImFzcGVjdEZpdFwiLFxuICAgICAgICAgIGhlaWdodDogXCIxMTBcIixcbiAgICAgICAgICBcImlvczpoZWlnaHRcIjogXCIxMjBcIlxuICAgICAgICB9LFxuICAgICAgICBvbjogeyB0YXA6IF92bS5hY3Rpb24gfVxuICAgICAgfSksXG4gICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvblwiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImJvdHRvbVwiLFxuICAgICAgICAgIHRleHQ6IF92bS5pY29uICsgXCIgXCIgKyBfdm0udGl0bGVcbiAgICAgICAgfSxcbiAgICAgICAgb246IHsgdGFwOiBfdm0uYWN0aW9uIH1cbiAgICAgIH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICBbXG4gICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvblwiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgIHRleHQ6IF92bS50aXRsZSArIFwiIFwiICsgX3ZtLmljb24gKyBcIiBcIlxuICAgICAgICB9LFxuICAgICAgICBvbjogeyB0YXA6IF92bS5hY3Rpb24gfVxuICAgICAgfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJwYWdlXCIgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJBY3Rpb25CYXJcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJhY3Rpb24tYmFyXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiTmF2aWdhdGlvbkJ1dHRvblwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBcImFuZHJvaWQuc3lzdGVtSWNvblwiOiBcImljX21lbnVfYmFja1wiIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICB0YXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJG5hdmlnYXRlQmFjaygpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFjdGlvbi1iYXItdGl0bGVcIixcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHRleHQ6IF92bS5BbmltYWxDZW50ZXIubmFtZSxcbiAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIj5cXG4gICAgXCIpXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJTY3JvbGxWaWV3XCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYW5pbS1jb3ZlciBtLWItMTVcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgc3JjOiBfdm0uQW5pbWFsQ2VudGVyLmltYWdlVVJMLFxuICAgICAgICAgICAgICAgICAgc3RyZXRjaDogXCJhc3BlY3RGaXRcIixcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIyMDBcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhyLWxpZ2h0IG0tdC0xNSBtLWItMTVcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyByb3c6IFwiMVwiIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgcm93czogXCIqLCAqLCAqLCBhdXRvXCIsIGNvbHVtbnM6IFwiYXV0bywqXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhbmltLWNvbnRlbnQxIHAtbC0xNSBwLWItMTAgbS1yLTIwXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvYWNob3VzZS5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICBzdHJldGNoOiBcImFzcGVjdEZpdFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI0MFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjQwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbG9hZE1vZGU6IFwiYXN5bmNcIixcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiM1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiTGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhbmltLWNvbnRlbnQxIHRleHQgcC1iLTEwIGZvbnQtd2VpZ2h0LWJvbGQgdGl0bGUgc3RhY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uQW5pbWFsQ2VudGVyLm5hbWUgKyBcIiBBbmltYWwgQ2FyZSBDZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFuaW0tY29udGVudDIgcC1sLTE1IHAtYi0xMCBtLXItMjBcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9sb2NhdGlvbmljb24ucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3RyZXRjaDogXCJhc3BlY3RGaXRcIixcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNDBcIixcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI0MFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxvYWRNb2RlOiBcImFzeW5jXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjNcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhbmltLWNvbnRlbnQyIHAtYi0xMCBzdGFja1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCI1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLm9uQWRkcmVzc1RhcCB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiRm9ybWF0dGVkU3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgdGV4dC1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLkFuaW1hbENlbnRlci5hZGRyZXNzIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFuaW0tY29udGVudDMgcC1sLTE1IHAtYi0xMCBtLXItMjBcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9waG9uZWljb24ucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3RyZXRjaDogXCJhc3BlY3RGaXRcIixcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNDBcIixcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI0MFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxvYWRNb2RlOiBcImFzeW5jXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjNcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhbmltLWNvbnRlbnQzIGZhIHRleHQtcHJpbWFyeSBwLWItMTAgc3RhY2tcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLkFuaW1hbENlbnRlci5waG9uZSxcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiNVwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLm9uUGhvbmVUYXAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYW5pbS1jb250ZW50NCBwLWwtMTUgcC1iLTEwIG0tci0yMFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2hvdXJzaWNvbi5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICBzdHJldGNoOiBcImFzcGVjdEZpdFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI0MFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjQwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbG9hZE1vZGU6IFwiYXN5bmNcIixcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiM1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYW5pbS1jb250ZW50NCBzdGFjay1ob3Vyc1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM6IFwiKiwgKlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcm93czogXCJhdXRvLCBhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiNVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJob3Vyc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLkFuaW1hbENlbnRlci5hdmFpbGFiaWxpdHkud2Vla2RheVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaG91cnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5BbmltYWxDZW50ZXIuYXZhaWxhYmlsaXR5LndlZWtkYXlob3VycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJob3Vyc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLkFuaW1hbENlbnRlci5hdmFpbGFiaWxpdHkud2Vla2VuZFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaG91cnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5BbmltYWxDZW50ZXIuYXZhaWxhYmlsaXR5LndlZWtlbmRob3VycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgeyBhdHRyczogeyBvcmllbnRhdGlvbjogXCJ2ZXJ0aWNhbFwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICBcImhvbWVwYWdlLWJsdWUgdGV4dC1wcmltYXJ5IGxpc3QtZ3JvdXAtaXRlbS10ZXh0IGZvbnQtd2VpZ2h0LWJvbGRcIixcbiAgICAgICAgICBhdHRyczogeyB0ZXh0V3JhcDogXCJ0cnVlXCIgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgW19jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IF92bS5pdGVtLnF1ZXJ5IH0gfSldLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCIuZmFxX2Fuc3dlciAubGlzdC1ncm91cC1pdGVtLWNvbnRlbnRcIixcbiAgICAgICAgICBhdHRyczogeyB0ZXh0V3JhcDogXCJ0cnVlXCIgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwgeyBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiM5O1wiIH0gfSksXG4gICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IF92bS5pdGVtLmFuc3dlciB9IH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInBhZ2VcIixcbiAgICB7XG4gICAgICBhdHRyczogeyBhY3Rpb25CYXJIaWRkZW46IFwiZmFsc2VcIiwgYmFja2dyb3VuZFNwYW5VbmRlclN0YXR1c0JhcjogXCJ0cnVlXCIgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiQWN0aW9uQmFyXCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYWN0aW9uYmFyIG5hdlRhYlwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIk5hdmlnYXRpb25CdXR0b25cIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgXCJhbmRyb2lkLnN5c3RlbUljb25cIjogXCJpY19tZW51X2JhY2tcIiB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRuYXZpZ2F0ZUJhY2soKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBmb250U2l6ZTogXCIxOFwiLCB0ZXh0OiBcIkFuaW1hbHMgZm9yIEFkb3B0aW9uXCIgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgIHsgYXR0cnM6IHsgcm93czogXCJhdXRvLGF1dG8sKlwiLCBjb2x1bW5zOiBcImF1dG9cIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZWY6IFwibmF2VGFiXCIsXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdlRhYlwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHJvdzogXCIxXCIsXG4gICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwidG9wXCIsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjUwXCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgIHJvd3M6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgIGNvbHVtbnM6IFwiYXV0byxhdXRvXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGFidmlld1wiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5zZWxlY3RlZFRhYnZpZXcgPT0gMCA/IFwiYWN0aXZlXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgcm93czogXCIqLGF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgY29sczogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjUwJVwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uYWRvcHRpb25MaXN0IH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZFRhYnZpZXcgPT0gMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWRUYWJ2aWV3PT0wXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIG5hdkljb25cIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5fZihcImZvbnRpY29uXCIpKFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkVGFidmlldyA9PSAwID8gXCJmYS1wYXdcIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhYnZpZXdUZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uc2VsZWN0ZWRUYWJ2aWV3ID09IDAgPyBcImFjdGl2ZVwiIDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJBbmltYWxzXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGFidmlld1wiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5zZWxlY3RlZFRhYnZpZXcgPT0gMSA/IFwiYWN0aXZlXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgcm93czogXCIqLGF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgY29sczogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjUwJVwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uc2hvd0NhdGVnb3J5IH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZFRhYnZpZXcgPT0gMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWRUYWJ2aWV3PT0xXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIG5hdkljb25cIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5fZihcImZvbnRpY29uXCIpKFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkVGFidmlldyA9PSAxID8gXCJmYS1maWx0ZXJcIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhYnZpZXdUZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uc2VsZWN0ZWRUYWJ2aWV3ID09IDEgPyBcImFjdGl2ZVwiIDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiRmlsdGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWRUYWJ2aWV3ID09IDAsXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkVGFidmlldyA9PSAwXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIyXCIsIHdpZHRoOiBcIjEwMCVcIiwgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJMaXN0Vmlld1wiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogX3ZtLmluZGV4LFxuICAgICAgICAgICAgICAgICAgcmVmOiBcImxpc3R2aWV3XCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBzZXBhcmF0b3JDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICAgICAgICAgICAgICBpdGVtczogX3ZtLml0ZW1zLFxuICAgICAgICAgICAgICAgICAgICBcIithbGlhc1wiOiBcIml0ZW1cIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRlbXBsYXRlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSByZWYuaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGluZGV4ID0gcmVmLiRpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGV2ZW4gPSByZWYuJGV2ZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRvZGQgPSByZWYuJG9kZFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJpdGVtXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpdGVtOiBpdGVtIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrZWQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNob3dJdGVtKGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZFRhYnZpZXcgPT0gMSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWRUYWJ2aWV3ID09IDFcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjJcIiwgd2lkdGg6IFwiMTAwJVwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlJhZExpc3RWaWV3XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiBfdm0uaW5kZXgsXG4gICAgICAgICAgICAgICAgICByZWY6IFwibGlzdHZpZXdcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNlcGFyYXRvckNvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0uaXRlbXNDYXRlZ29yeSxcbiAgICAgICAgICAgICAgICAgICAgXCIrYWxpYXNcIjogXCJpdGVtXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi10ZW1wbGF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gcmVmLml0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkb2RkID0gcmVmLiRvZGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwiQ2F0ZWdvcnlcIiwgeyBhdHRyczogeyBpdGVtOiBpdGVtIH0gfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInBhZ2VcIiB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIkFjdGlvbkJhclwiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJOYXZpZ2F0aW9uQnV0dG9uXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IFwiYW5kcm9pZC5zeXN0ZW1JY29uXCI6IFwiaWNfbWVudV9iYWNrXCIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIHRhcDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kbmF2aWdhdGVCYWNrKClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJGQVFcIiwgZm9udFNpemU6IFwiMjBcIiwgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCIgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJTZWFyY2hCYXJcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgaGludDogXCJFbnRlciB0ZXh0Li4uXCIsIHRleHQ6IF92bS5zZWFyY2ggfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIHN1Ym1pdDogX3ZtLmNoZWNrRmFxLFxuICAgICAgICAgICAgICB0ZXh0Q2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uc2VhcmNoID0gJGV2ZW50LnZhbHVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiUmFkTGlzdFZpZXdcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmVmOiBcImxpc3RWaWV3XCIsXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpc3QtZ3JvdXBcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBwdWxsVG9SZWZyZXNoOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICBpdGVtczogX3ZtLmdldFNlYXJjaFJlc3VsdHMoX3ZtLnNlYXJjaCksXG4gICAgICAgICAgICAgICAgXCIrYWxpYXNcIjogXCJmYXFcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIHB1bGxUb1JlZnJlc2hJbml0aWF0ZWQ6IF92bS5vblB1bGxUb1JlZnJlc2hJbml0aWF0ZWQsXG4gICAgICAgICAgICAgICAgaXRlbVRhcDogX3ZtLm9uSXRlbVRhcFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInYtdGVtcGxhdGVcIiwge1xuICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIGZhcSA9IHJlZi5mYXFcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJGluZGV4ID0gcmVmLiRpbmRleFxuICAgICAgICAgICAgICAgICAgICAgIHZhciAkZXZlbiA9IHJlZi4kZXZlblxuICAgICAgICAgICAgICAgICAgICAgIHZhciAkb2RkID0gcmVmLiRvZGRcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJGYXFJbmZvXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpc3QtZ3JvdXAtaXRlbS10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpdGVtOiBmYXEgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiQWN0aW9uQmFyXCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiQWN0aW9uX0JhclwiLCBhdHRyczogeyBcImlvcy5wb3NpdGlvblwiOiBcImxlZnRcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHRleHQ6IFwiV2VsY29tZSB0b1wiLFxuICAgICAgICAgICAgICBmb250U2l6ZTogXCIyMFwiLFxuICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiQWN0aW9uSXRlbVwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBcImlvcy5zeXN0ZW1JY29uXCI6IFwiMTJcIixcbiAgICAgICAgICAgICAgXCJpb3MucG9zaXRpb25cIjogXCJyaWdodFwiLFxuICAgICAgICAgICAgICBcImFuZHJvaWQuc3lzdGVtSWNvblwiOiBcImljX21lbnVfc2VhcmNoXCIsXG4gICAgICAgICAgICAgIFwiYW5kcm9pZC5wb3NpdGlvblwiOiBcImFjdGlvbkJhclwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHsgdGFwOiBfdm0udG9GYXEgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICB7IGF0dHJzOiB7IGJhY2tncm91bmRDb2xvcjogXCIjYjIxYTgyXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibGF5b3V0IGNvdmVyXCIsIGF0dHJzOiB7IGNvbHVtbnM6IFwiKiwqLCpcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiU2Nyb2xsVmlld1wiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgcm93OiBcIjBcIiwgY29sOiBcIjBcIiwgYmFja2dyb3VuZENvbG9yOiBcIiNEM0QzRDNcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQ2F0ZWdvcnlCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaG9tZXBhZ2UtYmx1ZSBIb21lQnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2FuaW1hbHMuaWNvbi5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IF92bS50aXRsZXNbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogX3ZtLnRvQWRvcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwOiBcInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQ2F0ZWdvcnlCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaG9tZXBhZ2UtYmx1ZSBIb21lQnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL3NlcnZpY2VzLmljb24ucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBfdm0udGl0bGVzWzJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246IF92bS50b1NlcnZpY2VSZXF1ZXN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkNhdGVnb3J5QnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhvbWVwYWdlLWJsdWUgSG9tZUJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9ub2lzZS5pY29uLnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogX3ZtLnRpdGxlc1szXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBfdm0udG9GYXEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwOiBcInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQ2F0ZWdvcnlCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgaG9tZXBhZ2UtYmx1ZSBIb21lQnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2hvdXJzaWNvbi5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogX3ZtLl9mKFwiZm9udGljb25cIikoXCJmYS1tYXAtbWFya2VyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogX3ZtLnRpdGxlc1s0XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBfdm0udG9RUlNjYW5uZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwOiBcInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQ2F0ZWdvcnlCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaG9tZXBhZ2UtYmx1ZSBIb21lQnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2xvY2F0aW9uaWNvbi5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IF92bS50aXRsZXNbNV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogX3ZtLnRvTG9jYXRpb25MaXN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFwiR3JpZExheW91dFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGF5b3V0IGNvdmVyXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgY29sdW1uczogXCIqLCpcIixcbiAgICAgICAgICAgICAgICAgIHJvd3M6IFwiKiwqLCpcIixcbiAgICAgICAgICAgICAgICAgIGNvbFNwYW46IFwiMlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJwYWdlXCIgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJBY3Rpb25CYXJcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJhY3Rpb24tYmFyXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiTmF2aWdhdGlvbkJ1dHRvblwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBcImFuZHJvaWQuc3lzdGVtSWNvblwiOiBcImljX21lbnVfYmFja1wiIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICB0YXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJG5hdmlnYXRlQmFjaygpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHRleHQ6IFwiQW5pbWFsIENhcmUgQ2VudGVyc1wiLFxuICAgICAgICAgICAgICBmb250U2l6ZTogXCIyMFwiLFxuICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJJY29uQnV0dG9uXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGdwcy1idXR0b25cIixcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGljb246IF92bS5fZihcImZvbnRpY29uXCIpKFwiZmEtc29ydC1hbW91bnQtYXNjXCIpLFxuICAgICAgICAgICAgICB0aXRsZTogXCJHZXQgQ2xvc2VzdCBBbmltYWwgQ2VudGVyXCIsXG4gICAgICAgICAgICAgIGFjdGlvbjogX3ZtLmJ1dHRvbkdldERpc3RhbmNlVG9DYXJlQ2VudGVyc1RhcFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJSYWRMaXN0Vmlld1wiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaXN0LWdyb3VwXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgcm93OiBcIjJcIixcbiAgICAgICAgICAgICAgICBpdGVtczogX3ZtLmNlbnRlckxvY2F0aW9ucyxcbiAgICAgICAgICAgICAgICBcIithbGlhc1wiOiBcImxvY2F0aW9uXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb246IHsgaXRlbVRhcDogX3ZtLm9uSXRlbVRhcCB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInYtdGVtcGxhdGVcIiwge1xuICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIGxvY2F0aW9uID0gcmVmLmxvY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJGV2ZW4gPSByZWYuJGV2ZW5cbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpc3QtZ3JvdXAtaXRlbS1jb250ZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvd3M6IFwiKiwgKiwgKiwgKlwiLCBjb2x1bW5zOiBcIiosICpcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaG9tZXBhZ2UtYmx1ZSB0ZXh0LXByaW1hcnkgbGlzdC1ncm91cC1pdGVtLXRleHQgZm9udC13ZWlnaHQtYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IGxvY2F0aW9uLm5hbWUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpc3QtZ3JvdXAtaXRlbS10ZXh0IG0tci01IHRleHQtc2Vjb25kYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2w6IFwiMVwiLCBob3Jpem9udGFsQWxpZ25tZW50OiBcInJpZ2h0XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRm9ybWF0dGVkU3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJ+XCIgKyBsb2NhdGlvbi5kaXN0YW5jZSArIFwibWlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaHItbGlnaHQgbS10LTUgbS1iLTVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb3c6IFwiMVwiLCBjb2xTcGFuOiBcIjJcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtLXItMjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogbG9jYXRpb24uaW1hZ2VVUkwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJldGNoOiBcImFzcGVjdEZpdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEyMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZE1vZGU6IFwiYXN5bmNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaXN0LWdyb3VwLWl0ZW0tdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyByb3dzOiBcIiosICpcIiwgY29sdW1uczogXCIqLCA0KlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwLWItMTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRm9ybWF0dGVkU3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJpb3MuZm9udEZhbWlseVwiOiBcInN5c3RlbVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLl9mKFwiZm9udGljb25cIikoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhLW1hcC1tYXJrZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwLWItMTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRm9ybWF0dGVkU3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJpb3MuZm9udEZhbWlseVwiOiBcInN5c3RlbVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBsb2NhdGlvbi5hZGRyZXNzIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicC1iLTEwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwOiBcInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiaW9zLmZvbnRGYW1pbHlcIjogXCJzeXN0ZW1cIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBpY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLl9mKFwiZm9udGljb25cIikoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhLXBob25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicC1iLTEwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwOiBcInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiaW9zLmZvbnRGYW1pbHlcIjogXCJzeXN0ZW1cIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBsb2NhdGlvbi5waG9uZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInAtYi0xMFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRm9ybWF0dGVkU3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJpb3MuZm9udEZhbWlseVwiOiBcInN5c3RlbVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcIlNwYW5cIiwgeyBhdHRyczogeyB0ZXh0OiBcIlwiIH0gfSldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJwYWdlXCIgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJBY3Rpb25CYXJcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiTmF2aWdhdGlvbkJ1dHRvblwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBcImFuZHJvaWQuc3lzdGVtSWNvblwiOiBcImljX21lbnVfYmFja1wiIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICB0YXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJG5hdmlnYXRlQmFjaygpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHRleHQ6IFwiU2VydmljZSBSZXF1ZXN0XCIsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiBcIjIwXCIsXG4gICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImNlbnRlclwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaG9tZS1wYW5lbFwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIldlYlZpZXdcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiBcIjgxOTJweFwiLFxuICAgICAgICAgICAgICBzcmM6IFwiaHR0cDovL2FuaW1hbGNhcmUubGFjb3VudHkuZ292L3NlcnZpY2UtcmVxdWVzdC9cIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgW1xuICAgICAgX2MoXCJBY3Rpb25CYXJcIiwgeyBhdHRyczogeyB0aXRsZTogX3ZtLmFjdGlvbkJhciB9IH0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiTGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJtc2dcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgIFwiV2UgYXBvbG9naXplLiBUaGUgcXVlc3Rpb24geW91IGFyZSBzZWFyY2hpbmcgZm9yIGhhcyBub3QgYmVlbiBhbnN3ZXJlZCB5ZXQuIFRha2UgdGhpcyB0aWNrZXQgaWYgeW91IHdhbnQgdG8gc3VibWl0IHRoaXMgcXVlc3Rpb24gYW5kIGdldCBhbiBhbnN3ZXIgZnJvbSB0aGUgZnJvbnQgZGVzay5cIlxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IGNvbHVtbnM6IFwiKiwqXCIsIHJvd3M6IFwiKiwqLCpcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiQ2F0ZWdvcnlCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBfdm0udGl0bGVzWzBdLFxuICAgICAgICAgICAgICAgICAgYWN0aW9uOiBfdm0udG9GYXEsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmMDAwMFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJDYXRlZ29yeUJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgdGl0bGU6IF92bS50aXRsZXNbMV0sXG4gICAgICAgICAgICAgICAgICBhY3Rpb246IF92bS5zdWJtaXRUaWNrZXQsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzZBRkY1QVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgW1xuICAgICAgX2MoXCJBY3Rpb25CYXJcIiwgeyBhdHRyczogeyB0aXRsZTogXCJUaWNrZXQgUHJvY2Vzc2luZ1wiIH0gfSksXG4gICAgICBfYyhcbiAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJMYWJlbFwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiUGhvbmUgbnVtYmVyOlwiIH0gfSksXG4gICAgICAgICAgX2MoXCJUZXh0Vmlld1wiLCB7XG4gICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0ucGhvbmUgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIHRleHRDaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5waG9uZSA9ICRldmVudC52YWx1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJMYWJlbFwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiRmlyc3QgYW5kIGxhc3QgbmFtZTpcIiB9IH0pLFxuICAgICAgICAgIF9jKFwiVGV4dFZpZXdcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLm5hbWUgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIHRleHRDaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5uYW1lID0gJGV2ZW50LnZhbHVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkxhYmVsXCIsIHsgYXR0cnM6IHsgdGV4dDogXCJXaGF0IGFyZSB5b3UgaGVyZSBmb3I/XCIgfSB9KSxcbiAgICAgICAgICBfYyhcIlRleHRWaWV3XCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5xdWVyeSB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgdGV4dENoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLnF1ZXJ5ID0gJGV2ZW50LnZhbHVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIlN1Ym1pdCBUaWNrZXRcIiB9LFxuICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uc3VibWl0VGlja2V0IH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIFtcbiAgICAgIF9jKFwiQWN0aW9uQmFyXCIsIHsgYXR0cnM6IHsgdGl0bGU6IFwiVGlja2V0IFJlYXNvblwiIH0gfSksXG4gICAgICBfYyhcbiAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgIHsgYXR0cnM6IHsgY29sdW1uczogXCIqXCIsIHJvd3M6IFwiYXV0bywgYXV0bywgYXV0bywgYXV0b1wiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtc2dcIiwgYXR0cnM6IHsgdGV4dFdyYXA6IFwidHJ1ZVwiLCByb3c6IFwiMFwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiWW91IGFyZSBhdCB0aGUgXCIgK1xuICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5zaXRlKSArXG4gICAgICAgICAgICAgICAgICBcIiBBbmltYWwgQ2FyZSBhbmQgQ29udHJvbCBDZW50ZXIuXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXCJMaXN0UGlja2VyXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHJvdzogXCIxXCIsXG4gICAgICAgICAgICAgIGl0ZW1zOiBfdm0uY2hvaWNlcyxcbiAgICAgICAgICAgICAgc2VsZWN0ZWRJbmRleDogXCIwXCIsXG4gICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXg6IF92bS5zZWxlY3RlZEluZGV4XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgc2VsZWN0ZWRJbmRleENoYW5nZTogW1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkSW5kZXggPSAkZXZlbnQudmFsdWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZEluZGV4Q2hhbmdlZFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLmlzVGlja2V0XG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHJvdzogXCIzXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtc2dcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIiAgIFRlbGwgdXMgYWJvdXQgd2hhdCB5b3Ugd291bGQgbGlrZSB0byBrbm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJUZXh0Vmlld1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5vdGhlclRleHQgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vdGhlclRleHQgPSAkZXZlbnQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkhvbWVcIiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS50b0hvbWUgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiQ3JlYXRlIFRpY2tldFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLmNyZWF0ZVRpY2tldCB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciBtYXAgPSB7XG5cdFwiLi9hcHAuc2Nzc1wiOiBcIi4vYXBwLnNjc3NcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyBeXFxcXC5cXFxcL2FwcFxcXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL0FuaW1hbENlbnRlci5zY3NzXCI6IFwiLi9BbmltYWxDZW50ZXIuc2Nzc1wiLFxuXHRcIi4vYXBwLnNjc3NcIjogXCIuL2FwcC5zY3NzXCIsXG5cdFwiLi9mb250cy9mb250LWF3ZXNvbWUuY3NzXCI6IFwiLi9mb250cy9mb250LWF3ZXNvbWUuY3NzXCIsXG5cdFwiLi9mb250cy9pb25pY29ucy5jc3NcIjogXCIuL2ZvbnRzL2lvbmljb25zLmNzc1wiLFxuXHRcIi4vbWFpbi5qc1wiOiBcIi4vbWFpbi5qc1wiLFxuXHRcIi4vbW9kZWxzL0FuaW1hbC5qc1wiOiBcIi4vbW9kZWxzL0FuaW1hbC5qc1wiLFxuXHRcIi4vbW9kZWxzL0ZhcS5qc1wiOiBcIi4vbW9kZWxzL0ZhcS5qc1wiLFxuXHRcIi4vbW9kZWxzL1RpY2tldC5qc1wiOiBcIi4vbW9kZWxzL1RpY2tldC5qc1wiLFxuXHRcIi4vc2VydmljZXMvQWRvcHRpb25TZXJ2aWNlLmpzXCI6IFwiLi9zZXJ2aWNlcy9BZG9wdGlvblNlcnZpY2UuanNcIixcblx0XCIuL3NlcnZpY2VzL0Zha2VBZG9wdGlvblNlcnZpY2UuanNcIjogXCIuL3NlcnZpY2VzL0Zha2VBZG9wdGlvblNlcnZpY2UuanNcIixcblx0XCIuL3NlcnZpY2VzL0Zha2VGYXFTZXJ2aWNlLmpzXCI6IFwiLi9zZXJ2aWNlcy9GYWtlRmFxU2VydmljZS5qc1wiLFxuXHRcIi4vc2VydmljZXMvRmFrZVRpY2tldFNlcnZpY2UuanNcIjogXCIuL3NlcnZpY2VzL0Zha2VUaWNrZXRTZXJ2aWNlLmpzXCIsXG5cdFwiLi9zZXJ2aWNlcy9GYXFTZXJ2aWNlLmpzXCI6IFwiLi9zZXJ2aWNlcy9GYXFTZXJ2aWNlLmpzXCIsXG5cdFwiLi9zZXJ2aWNlcy9UaWNrZXRTZXJ2aWNlLmpzXCI6IFwiLi9zZXJ2aWNlcy9UaWNrZXRTZXJ2aWNlLmpzXCIsXG5cdFwiLi9zdG9yZS5qc1wiOiBcIi4vc3RvcmUuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyByZWN1cnNpdmUgKD88IVxcXFxiQXBwX1Jlc291cmNlc1xcXFxiLiopXFxcXC4oeG1sfGNzc3xqc3woPzwhXFxcXC5kXFxcXC4pdHN8KD88IVxcXFxiX1tcXFxcdy1dKlxcXFwuKXNjc3MpJFwiOyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyoqXFxyXFxuICogQ29udmVuaWVudCBzaW5nbGUgaW1wb3J0IGZvciBsaWdodCB2YXJpYWJsZXNcXHJcXG4gKiBJbmNsdWRlcyBiYXNlIHZhcmlhYmxlcyB3aXRoIGxpZ2h0IG92ZXJyaWRlc1xcclxcbiAqKi9cXG4vKipcXHJcXG4gKiBMaWdodCB2YXJpYWJsZSBvdmVycmlkZXNcXHJcXG4gKiovXFxuLyoqXFxuICogVGhlbWUgdmFyaWFibGVzIG92ZXJyaWRlc1xcbioqL1xcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIDtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9BbmltYWxDZW50ZXIuc2NzcycgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKipcXHJcXG4gKiBDb252ZW5pZW50IHNpbmdsZSBpbXBvcnQgZm9yIGxpZ2h0IHZhcmlhYmxlc1xcclxcbiAqIEluY2x1ZGVzIGJhc2UgdmFyaWFibGVzIHdpdGggbGlnaHQgb3ZlcnJpZGVzXFxyXFxuICoqL1xcbi8qKlxcclxcbiAqIExpZ2h0IHZhcmlhYmxlIG92ZXJyaWRlc1xcclxcbiAqKi9cXG4vKipcXG4gKiBUaGVtZSB2YXJpYWJsZXMgb3ZlcnJpZGVzXFxuKiovXFxuLyoqXFxyXFxuICogQ29sb3IgY2xhc3Nlc1xcclxcbiAqIFRoZSBmb2xsb3dpbmcgY3JlYXRlcyB0aGlzIHBhdHRlcm46XFxyXFxuICogLmMtZ3JleXtjb2xvcjojZTBlMGUwfS5jLWJnLWdyZXl7YmFja2dyb3VuZC1jb2xvcjojZTBlMGUwfVxcclxcbioqL1xcbi5jLXdoaXRlIHtcXG4gIGNvbG9yOiAjZmZmOyB9XFxuXFxuLmMtYmctd2hpdGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxcblxcbi5jLWJsYWNrIHtcXG4gIGNvbG9yOiAjMDAwOyB9XFxuXFxuLmMtYmctYmxhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDsgfVxcblxcbi5jLWFxdWEge1xcbiAgY29sb3I6ICMwMGNhYWI7IH1cXG5cXG4uYy1iZy1hcXVhIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGNhYWI7IH1cXG5cXG4uYy1ibHVlIHtcXG4gIGNvbG9yOiAjM2Q1YWZlOyB9XFxuXFxuLmMtYmctYmx1ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Q1YWZlOyB9XFxuXFxuLmMtY2hhcmNvYWwge1xcbiAgY29sb3I6ICMzMDMwMzA7IH1cXG5cXG4uYy1iZy1jaGFyY29hbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwOyB9XFxuXFxuLmMtYnJvd24ge1xcbiAgY29sb3I6ICM3OTU1NDg7IH1cXG5cXG4uYy1iZy1icm93biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk1NTQ4OyB9XFxuXFxuLmMtZm9yZXN0IHtcXG4gIGNvbG9yOiAjMDA2OTY4OyB9XFxuXFxuLmMtYmctZm9yZXN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDY5Njg7IH1cXG5cXG4uYy1ncmV5IHtcXG4gIGNvbG9yOiAjZTBlMGUwOyB9XFxuXFxuLmMtYmctZ3JleSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwOyB9XFxuXFxuLmMtZ3JleS1saWdodCB7XFxuICBjb2xvcjogI2JhYmFiYTsgfVxcblxcbi5jLWJnLWdyZXktbGlnaHQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JhYmFiYTsgfVxcblxcbi5jLWdyZXktZGFyayB7XFxuICBjb2xvcjogIzVjNjg3YzsgfVxcblxcbi5jLWJnLWdyZXktZGFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWM2ODdjOyB9XFxuXFxuLmMtcHVycGxlIHtcXG4gIGNvbG9yOiAjODEzMGZmOyB9XFxuXFxuLmMtYmctcHVycGxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4MTMwZmY7IH1cXG5cXG4uYy1sZW1vbiB7XFxuICBjb2xvcjogI2ZmZWEwMDsgfVxcblxcbi5jLWJnLWxlbW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmVhMDA7IH1cXG5cXG4uYy1saW1lIHtcXG4gIGNvbG9yOiAjYWVlNDA2OyB9XFxuXFxuLmMtYmctbGltZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWVlNDA2OyB9XFxuXFxuLmMtb3JhbmdlIHtcXG4gIGNvbG9yOiAjZjU3YzAwOyB9XFxuXFxuLmMtYmctb3JhbmdlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNTdjMDA7IH1cXG5cXG4uYy1ydWJ5IHtcXG4gIGNvbG9yOiAjZmYxNzQ0OyB9XFxuXFxuLmMtYmctcnVieSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYxNzQ0OyB9XFxuXFxuLmMtc2t5IHtcXG4gIGNvbG9yOiAjMzBiY2ZmOyB9XFxuXFxuLmMtYmctc2t5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMGJjZmY7IH1cXG5cXG4vKiBXaWR0aC9IZWlnaHQgKi9cXG4udy1mdWxsIHtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLnctMTAwIHtcXG4gIHdpZHRoOiAxMDA7IH1cXG5cXG4uaC1mdWxsIHtcXG4gIGhlaWdodDogMTAwJTsgfVxcblxcbi5oLTEwMCB7XFxuICBoZWlnaHQ6IDEwMDsgfVxcblxcbi8qKlxcclxcbiAqIE1hcmdpbiBhbmQgUGFkZGluZ1xcclxcbiAqIFRoZSBmb2xsb3dpbmcgY3JlYXRlcyB0aGlzIHBhdHRlcm46XFxyXFxuICogLm0tMHttYXJnaW46MH0ubS10LTB7bWFyZ2luLXRvcDowfS5tLXItMHttYXJnaW4tcmlnaHQ6MH0ubS1iLTB7bWFyZ2luLWJvdHRvbTowfS5tLWwtMHttYXJnaW4tbGVmdDowfS5tLXgtMHttYXJnaW4tcmlnaHQ6MDttYXJnaW4tbGVmdDowfS5tLXktMHttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowfVxcclxcbiAqIFNhbWUgZm9yIFBhZGRpbmcgKHVzaW5nIHRoZSAncCcgYWJicmV2aWF0aW9uKVxcclxcbiAqIEZyb20gMCwgMiwgNSwgMTAsIDE1LCAyMCwgMjUsIDMwXFxyXFxuKiovXFxuLm0tMCB7XFxuICBtYXJnaW46IDA7IH1cXG5cXG4ubS10LTAge1xcbiAgbWFyZ2luLXRvcDogMDsgfVxcblxcbi5tLXItMCB7XFxuICBtYXJnaW4tcmlnaHQ6IDA7IH1cXG5cXG4ubS1iLTAge1xcbiAgbWFyZ2luLWJvdHRvbTogMDsgfVxcblxcbi5tLWwtMCB7XFxuICBtYXJnaW4tbGVmdDogMDsgfVxcblxcbi5tLXgtMCB7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxuICBtYXJnaW4tbGVmdDogMDsgfVxcblxcbi5tLXktMCB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMDsgfVxcblxcbi5tLTIge1xcbiAgbWFyZ2luOiAyOyB9XFxuXFxuLm0tdC0yIHtcXG4gIG1hcmdpbi10b3A6IDI7IH1cXG5cXG4ubS1yLTIge1xcbiAgbWFyZ2luLXJpZ2h0OiAyOyB9XFxuXFxuLm0tYi0yIHtcXG4gIG1hcmdpbi1ib3R0b206IDI7IH1cXG5cXG4ubS1sLTIge1xcbiAgbWFyZ2luLWxlZnQ6IDI7IH1cXG5cXG4ubS14LTIge1xcbiAgbWFyZ2luLXJpZ2h0OiAyO1xcbiAgbWFyZ2luLWxlZnQ6IDI7IH1cXG5cXG4ubS15LTIge1xcbiAgbWFyZ2luLXRvcDogMjtcXG4gIG1hcmdpbi1ib3R0b206IDI7IH1cXG5cXG4ubS00IHtcXG4gIG1hcmdpbjogNDsgfVxcblxcbi5tLXQtNCB7XFxuICBtYXJnaW4tdG9wOiA0OyB9XFxuXFxuLm0tci00IHtcXG4gIG1hcmdpbi1yaWdodDogNDsgfVxcblxcbi5tLWItNCB7XFxuICBtYXJnaW4tYm90dG9tOiA0OyB9XFxuXFxuLm0tbC00IHtcXG4gIG1hcmdpbi1sZWZ0OiA0OyB9XFxuXFxuLm0teC00IHtcXG4gIG1hcmdpbi1yaWdodDogNDtcXG4gIG1hcmdpbi1sZWZ0OiA0OyB9XFxuXFxuLm0teS00IHtcXG4gIG1hcmdpbi10b3A6IDQ7XFxuICBtYXJnaW4tYm90dG9tOiA0OyB9XFxuXFxuLm0tNSB7XFxuICBtYXJnaW46IDU7IH1cXG5cXG4ubS10LTUge1xcbiAgbWFyZ2luLXRvcDogNTsgfVxcblxcbi5tLXItNSB7XFxuICBtYXJnaW4tcmlnaHQ6IDU7IH1cXG5cXG4ubS1iLTUge1xcbiAgbWFyZ2luLWJvdHRvbTogNTsgfVxcblxcbi5tLWwtNSB7XFxuICBtYXJnaW4tbGVmdDogNTsgfVxcblxcbi5tLXgtNSB7XFxuICBtYXJnaW4tcmlnaHQ6IDU7XFxuICBtYXJnaW4tbGVmdDogNTsgfVxcblxcbi5tLXktNSB7XFxuICBtYXJnaW4tdG9wOiA1O1xcbiAgbWFyZ2luLWJvdHRvbTogNTsgfVxcblxcbi5tLTgge1xcbiAgbWFyZ2luOiA4OyB9XFxuXFxuLm0tdC04IHtcXG4gIG1hcmdpbi10b3A6IDg7IH1cXG5cXG4ubS1yLTgge1xcbiAgbWFyZ2luLXJpZ2h0OiA4OyB9XFxuXFxuLm0tYi04IHtcXG4gIG1hcmdpbi1ib3R0b206IDg7IH1cXG5cXG4ubS1sLTgge1xcbiAgbWFyZ2luLWxlZnQ6IDg7IH1cXG5cXG4ubS14LTgge1xcbiAgbWFyZ2luLXJpZ2h0OiA4O1xcbiAgbWFyZ2luLWxlZnQ6IDg7IH1cXG5cXG4ubS15LTgge1xcbiAgbWFyZ2luLXRvcDogODtcXG4gIG1hcmdpbi1ib3R0b206IDg7IH1cXG5cXG4ubS0xMCB7XFxuICBtYXJnaW46IDEwOyB9XFxuXFxuLm0tdC0xMCB7XFxuICBtYXJnaW4tdG9wOiAxMDsgfVxcblxcbi5tLXItMTAge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMDsgfVxcblxcbi5tLWItMTAge1xcbiAgbWFyZ2luLWJvdHRvbTogMTA7IH1cXG5cXG4ubS1sLTEwIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMDsgfVxcblxcbi5tLXgtMTAge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMDtcXG4gIG1hcmdpbi1sZWZ0OiAxMDsgfVxcblxcbi5tLXktMTAge1xcbiAgbWFyZ2luLXRvcDogMTA7XFxuICBtYXJnaW4tYm90dG9tOiAxMDsgfVxcblxcbi5tLTEyIHtcXG4gIG1hcmdpbjogMTI7IH1cXG5cXG4ubS10LTEyIHtcXG4gIG1hcmdpbi10b3A6IDEyOyB9XFxuXFxuLm0tci0xMiB7XFxuICBtYXJnaW4tcmlnaHQ6IDEyOyB9XFxuXFxuLm0tYi0xMiB7XFxuICBtYXJnaW4tYm90dG9tOiAxMjsgfVxcblxcbi5tLWwtMTIge1xcbiAgbWFyZ2luLWxlZnQ6IDEyOyB9XFxuXFxuLm0teC0xMiB7XFxuICBtYXJnaW4tcmlnaHQ6IDEyO1xcbiAgbWFyZ2luLWxlZnQ6IDEyOyB9XFxuXFxuLm0teS0xMiB7XFxuICBtYXJnaW4tdG9wOiAxMjtcXG4gIG1hcmdpbi1ib3R0b206IDEyOyB9XFxuXFxuLm0tMTUge1xcbiAgbWFyZ2luOiAxNTsgfVxcblxcbi5tLXQtMTUge1xcbiAgbWFyZ2luLXRvcDogMTU7IH1cXG5cXG4ubS1yLTE1IHtcXG4gIG1hcmdpbi1yaWdodDogMTU7IH1cXG5cXG4ubS1iLTE1IHtcXG4gIG1hcmdpbi1ib3R0b206IDE1OyB9XFxuXFxuLm0tbC0xNSB7XFxuICBtYXJnaW4tbGVmdDogMTU7IH1cXG5cXG4ubS14LTE1IHtcXG4gIG1hcmdpbi1yaWdodDogMTU7XFxuICBtYXJnaW4tbGVmdDogMTU7IH1cXG5cXG4ubS15LTE1IHtcXG4gIG1hcmdpbi10b3A6IDE1O1xcbiAgbWFyZ2luLWJvdHRvbTogMTU7IH1cXG5cXG4ubS0xNiB7XFxuICBtYXJnaW46IDE2OyB9XFxuXFxuLm0tdC0xNiB7XFxuICBtYXJnaW4tdG9wOiAxNjsgfVxcblxcbi5tLXItMTYge1xcbiAgbWFyZ2luLXJpZ2h0OiAxNjsgfVxcblxcbi5tLWItMTYge1xcbiAgbWFyZ2luLWJvdHRvbTogMTY7IH1cXG5cXG4ubS1sLTE2IHtcXG4gIG1hcmdpbi1sZWZ0OiAxNjsgfVxcblxcbi5tLXgtMTYge1xcbiAgbWFyZ2luLXJpZ2h0OiAxNjtcXG4gIG1hcmdpbi1sZWZ0OiAxNjsgfVxcblxcbi5tLXktMTYge1xcbiAgbWFyZ2luLXRvcDogMTY7XFxuICBtYXJnaW4tYm90dG9tOiAxNjsgfVxcblxcbi5tLTIwIHtcXG4gIG1hcmdpbjogMjA7IH1cXG5cXG4ubS10LTIwIHtcXG4gIG1hcmdpbi10b3A6IDIwOyB9XFxuXFxuLm0tci0yMCB7XFxuICBtYXJnaW4tcmlnaHQ6IDIwOyB9XFxuXFxuLm0tYi0yMCB7XFxuICBtYXJnaW4tYm90dG9tOiAyMDsgfVxcblxcbi5tLWwtMjAge1xcbiAgbWFyZ2luLWxlZnQ6IDIwOyB9XFxuXFxuLm0teC0yMCB7XFxuICBtYXJnaW4tcmlnaHQ6IDIwO1xcbiAgbWFyZ2luLWxlZnQ6IDIwOyB9XFxuXFxuLm0teS0yMCB7XFxuICBtYXJnaW4tdG9wOiAyMDtcXG4gIG1hcmdpbi1ib3R0b206IDIwOyB9XFxuXFxuLm0tMjQge1xcbiAgbWFyZ2luOiAyNDsgfVxcblxcbi5tLXQtMjQge1xcbiAgbWFyZ2luLXRvcDogMjQ7IH1cXG5cXG4ubS1yLTI0IHtcXG4gIG1hcmdpbi1yaWdodDogMjQ7IH1cXG5cXG4ubS1iLTI0IHtcXG4gIG1hcmdpbi1ib3R0b206IDI0OyB9XFxuXFxuLm0tbC0yNCB7XFxuICBtYXJnaW4tbGVmdDogMjQ7IH1cXG5cXG4ubS14LTI0IHtcXG4gIG1hcmdpbi1yaWdodDogMjQ7XFxuICBtYXJnaW4tbGVmdDogMjQ7IH1cXG5cXG4ubS15LTI0IHtcXG4gIG1hcmdpbi10b3A6IDI0O1xcbiAgbWFyZ2luLWJvdHRvbTogMjQ7IH1cXG5cXG4ubS0yNSB7XFxuICBtYXJnaW46IDI1OyB9XFxuXFxuLm0tdC0yNSB7XFxuICBtYXJnaW4tdG9wOiAyNTsgfVxcblxcbi5tLXItMjUge1xcbiAgbWFyZ2luLXJpZ2h0OiAyNTsgfVxcblxcbi5tLWItMjUge1xcbiAgbWFyZ2luLWJvdHRvbTogMjU7IH1cXG5cXG4ubS1sLTI1IHtcXG4gIG1hcmdpbi1sZWZ0OiAyNTsgfVxcblxcbi5tLXgtMjUge1xcbiAgbWFyZ2luLXJpZ2h0OiAyNTtcXG4gIG1hcmdpbi1sZWZ0OiAyNTsgfVxcblxcbi5tLXktMjUge1xcbiAgbWFyZ2luLXRvcDogMjU7XFxuICBtYXJnaW4tYm90dG9tOiAyNTsgfVxcblxcbi5tLTI4IHtcXG4gIG1hcmdpbjogMjg7IH1cXG5cXG4ubS10LTI4IHtcXG4gIG1hcmdpbi10b3A6IDI4OyB9XFxuXFxuLm0tci0yOCB7XFxuICBtYXJnaW4tcmlnaHQ6IDI4OyB9XFxuXFxuLm0tYi0yOCB7XFxuICBtYXJnaW4tYm90dG9tOiAyODsgfVxcblxcbi5tLWwtMjgge1xcbiAgbWFyZ2luLWxlZnQ6IDI4OyB9XFxuXFxuLm0teC0yOCB7XFxuICBtYXJnaW4tcmlnaHQ6IDI4O1xcbiAgbWFyZ2luLWxlZnQ6IDI4OyB9XFxuXFxuLm0teS0yOCB7XFxuICBtYXJnaW4tdG9wOiAyODtcXG4gIG1hcmdpbi1ib3R0b206IDI4OyB9XFxuXFxuLm0tMzAge1xcbiAgbWFyZ2luOiAzMDsgfVxcblxcbi5tLXQtMzAge1xcbiAgbWFyZ2luLXRvcDogMzA7IH1cXG5cXG4ubS1yLTMwIHtcXG4gIG1hcmdpbi1yaWdodDogMzA7IH1cXG5cXG4ubS1iLTMwIHtcXG4gIG1hcmdpbi1ib3R0b206IDMwOyB9XFxuXFxuLm0tbC0zMCB7XFxuICBtYXJnaW4tbGVmdDogMzA7IH1cXG5cXG4ubS14LTMwIHtcXG4gIG1hcmdpbi1yaWdodDogMzA7XFxuICBtYXJnaW4tbGVmdDogMzA7IH1cXG5cXG4ubS15LTMwIHtcXG4gIG1hcmdpbi10b3A6IDMwO1xcbiAgbWFyZ2luLWJvdHRvbTogMzA7IH1cXG5cXG4ucC0wIHtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG4ucC10LTAge1xcbiAgcGFkZGluZy10b3A6IDA7IH1cXG5cXG4ucC1yLTAge1xcbiAgcGFkZGluZy1yaWdodDogMDsgfVxcblxcbi5wLWItMCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMDsgfVxcblxcbi5wLWwtMCB7XFxuICBwYWRkaW5nLWxlZnQ6IDA7IH1cXG5cXG4ucC14LTAge1xcbiAgcGFkZGluZy1yaWdodDogMDtcXG4gIHBhZGRpbmctbGVmdDogMDsgfVxcblxcbi5wLXktMCB7XFxuICBwYWRkaW5nLXRvcDogMDtcXG4gIHBhZGRpbmctYm90dG9tOiAwOyB9XFxuXFxuLnAtMiB7XFxuICBwYWRkaW5nOiAyOyB9XFxuXFxuLnAtdC0yIHtcXG4gIHBhZGRpbmctdG9wOiAyOyB9XFxuXFxuLnAtci0yIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDI7IH1cXG5cXG4ucC1iLTIge1xcbiAgcGFkZGluZy1ib3R0b206IDI7IH1cXG5cXG4ucC1sLTIge1xcbiAgcGFkZGluZy1sZWZ0OiAyOyB9XFxuXFxuLnAteC0yIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDI7XFxuICBwYWRkaW5nLWxlZnQ6IDI7IH1cXG5cXG4ucC15LTIge1xcbiAgcGFkZGluZy10b3A6IDI7XFxuICBwYWRkaW5nLWJvdHRvbTogMjsgfVxcblxcbi5wLTQge1xcbiAgcGFkZGluZzogNDsgfVxcblxcbi5wLXQtNCB7XFxuICBwYWRkaW5nLXRvcDogNDsgfVxcblxcbi5wLXItNCB7XFxuICBwYWRkaW5nLXJpZ2h0OiA0OyB9XFxuXFxuLnAtYi00IHtcXG4gIHBhZGRpbmctYm90dG9tOiA0OyB9XFxuXFxuLnAtbC00IHtcXG4gIHBhZGRpbmctbGVmdDogNDsgfVxcblxcbi5wLXgtNCB7XFxuICBwYWRkaW5nLXJpZ2h0OiA0O1xcbiAgcGFkZGluZy1sZWZ0OiA0OyB9XFxuXFxuLnAteS00IHtcXG4gIHBhZGRpbmctdG9wOiA0O1xcbiAgcGFkZGluZy1ib3R0b206IDQ7IH1cXG5cXG4ucC01IHtcXG4gIHBhZGRpbmc6IDU7IH1cXG5cXG4ucC10LTUge1xcbiAgcGFkZGluZy10b3A6IDU7IH1cXG5cXG4ucC1yLTUge1xcbiAgcGFkZGluZy1yaWdodDogNTsgfVxcblxcbi5wLWItNSB7XFxuICBwYWRkaW5nLWJvdHRvbTogNTsgfVxcblxcbi5wLWwtNSB7XFxuICBwYWRkaW5nLWxlZnQ6IDU7IH1cXG5cXG4ucC14LTUge1xcbiAgcGFkZGluZy1yaWdodDogNTtcXG4gIHBhZGRpbmctbGVmdDogNTsgfVxcblxcbi5wLXktNSB7XFxuICBwYWRkaW5nLXRvcDogNTtcXG4gIHBhZGRpbmctYm90dG9tOiA1OyB9XFxuXFxuLnAtOCB7XFxuICBwYWRkaW5nOiA4OyB9XFxuXFxuLnAtdC04IHtcXG4gIHBhZGRpbmctdG9wOiA4OyB9XFxuXFxuLnAtci04IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDg7IH1cXG5cXG4ucC1iLTgge1xcbiAgcGFkZGluZy1ib3R0b206IDg7IH1cXG5cXG4ucC1sLTgge1xcbiAgcGFkZGluZy1sZWZ0OiA4OyB9XFxuXFxuLnAteC04IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDg7XFxuICBwYWRkaW5nLWxlZnQ6IDg7IH1cXG5cXG4ucC15LTgge1xcbiAgcGFkZGluZy10b3A6IDg7XFxuICBwYWRkaW5nLWJvdHRvbTogODsgfVxcblxcbi5wLTEwIHtcXG4gIHBhZGRpbmc6IDEwOyB9XFxuXFxuLnAtdC0xMCB7XFxuICBwYWRkaW5nLXRvcDogMTA7IH1cXG5cXG4ucC1yLTEwIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwOyB9XFxuXFxuLnAtYi0xMCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMTA7IH1cXG5cXG4ucC1sLTEwIHtcXG4gIHBhZGRpbmctbGVmdDogMTA7IH1cXG5cXG4ucC14LTEwIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwO1xcbiAgcGFkZGluZy1sZWZ0OiAxMDsgfVxcblxcbi5wLXktMTAge1xcbiAgcGFkZGluZy10b3A6IDEwO1xcbiAgcGFkZGluZy1ib3R0b206IDEwOyB9XFxuXFxuLnAtMTIge1xcbiAgcGFkZGluZzogMTI7IH1cXG5cXG4ucC10LTEyIHtcXG4gIHBhZGRpbmctdG9wOiAxMjsgfVxcblxcbi5wLXItMTIge1xcbiAgcGFkZGluZy1yaWdodDogMTI7IH1cXG5cXG4ucC1iLTEyIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxMjsgfVxcblxcbi5wLWwtMTIge1xcbiAgcGFkZGluZy1sZWZ0OiAxMjsgfVxcblxcbi5wLXgtMTIge1xcbiAgcGFkZGluZy1yaWdodDogMTI7XFxuICBwYWRkaW5nLWxlZnQ6IDEyOyB9XFxuXFxuLnAteS0xMiB7XFxuICBwYWRkaW5nLXRvcDogMTI7XFxuICBwYWRkaW5nLWJvdHRvbTogMTI7IH1cXG5cXG4ucC0xNSB7XFxuICBwYWRkaW5nOiAxNTsgfVxcblxcbi5wLXQtMTUge1xcbiAgcGFkZGluZy10b3A6IDE1OyB9XFxuXFxuLnAtci0xNSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNTsgfVxcblxcbi5wLWItMTUge1xcbiAgcGFkZGluZy1ib3R0b206IDE1OyB9XFxuXFxuLnAtbC0xNSB7XFxuICBwYWRkaW5nLWxlZnQ6IDE1OyB9XFxuXFxuLnAteC0xNSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNTtcXG4gIHBhZGRpbmctbGVmdDogMTU7IH1cXG5cXG4ucC15LTE1IHtcXG4gIHBhZGRpbmctdG9wOiAxNTtcXG4gIHBhZGRpbmctYm90dG9tOiAxNTsgfVxcblxcbi5wLTE2IHtcXG4gIHBhZGRpbmc6IDE2OyB9XFxuXFxuLnAtdC0xNiB7XFxuICBwYWRkaW5nLXRvcDogMTY7IH1cXG5cXG4ucC1yLTE2IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDE2OyB9XFxuXFxuLnAtYi0xNiB7XFxuICBwYWRkaW5nLWJvdHRvbTogMTY7IH1cXG5cXG4ucC1sLTE2IHtcXG4gIHBhZGRpbmctbGVmdDogMTY7IH1cXG5cXG4ucC14LTE2IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDE2O1xcbiAgcGFkZGluZy1sZWZ0OiAxNjsgfVxcblxcbi5wLXktMTYge1xcbiAgcGFkZGluZy10b3A6IDE2O1xcbiAgcGFkZGluZy1ib3R0b206IDE2OyB9XFxuXFxuLnAtMjAge1xcbiAgcGFkZGluZzogMjA7IH1cXG5cXG4ucC10LTIwIHtcXG4gIHBhZGRpbmctdG9wOiAyMDsgfVxcblxcbi5wLXItMjAge1xcbiAgcGFkZGluZy1yaWdodDogMjA7IH1cXG5cXG4ucC1iLTIwIHtcXG4gIHBhZGRpbmctYm90dG9tOiAyMDsgfVxcblxcbi5wLWwtMjAge1xcbiAgcGFkZGluZy1sZWZ0OiAyMDsgfVxcblxcbi5wLXgtMjAge1xcbiAgcGFkZGluZy1yaWdodDogMjA7XFxuICBwYWRkaW5nLWxlZnQ6IDIwOyB9XFxuXFxuLnAteS0yMCB7XFxuICBwYWRkaW5nLXRvcDogMjA7XFxuICBwYWRkaW5nLWJvdHRvbTogMjA7IH1cXG5cXG4ucC0yNCB7XFxuICBwYWRkaW5nOiAyNDsgfVxcblxcbi5wLXQtMjQge1xcbiAgcGFkZGluZy10b3A6IDI0OyB9XFxuXFxuLnAtci0yNCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyNDsgfVxcblxcbi5wLWItMjQge1xcbiAgcGFkZGluZy1ib3R0b206IDI0OyB9XFxuXFxuLnAtbC0yNCB7XFxuICBwYWRkaW5nLWxlZnQ6IDI0OyB9XFxuXFxuLnAteC0yNCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyNDtcXG4gIHBhZGRpbmctbGVmdDogMjQ7IH1cXG5cXG4ucC15LTI0IHtcXG4gIHBhZGRpbmctdG9wOiAyNDtcXG4gIHBhZGRpbmctYm90dG9tOiAyNDsgfVxcblxcbi5wLTI1IHtcXG4gIHBhZGRpbmc6IDI1OyB9XFxuXFxuLnAtdC0yNSB7XFxuICBwYWRkaW5nLXRvcDogMjU7IH1cXG5cXG4ucC1yLTI1IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDI1OyB9XFxuXFxuLnAtYi0yNSB7XFxuICBwYWRkaW5nLWJvdHRvbTogMjU7IH1cXG5cXG4ucC1sLTI1IHtcXG4gIHBhZGRpbmctbGVmdDogMjU7IH1cXG5cXG4ucC14LTI1IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDI1O1xcbiAgcGFkZGluZy1sZWZ0OiAyNTsgfVxcblxcbi5wLXktMjUge1xcbiAgcGFkZGluZy10b3A6IDI1O1xcbiAgcGFkZGluZy1ib3R0b206IDI1OyB9XFxuXFxuLnAtMjgge1xcbiAgcGFkZGluZzogMjg7IH1cXG5cXG4ucC10LTI4IHtcXG4gIHBhZGRpbmctdG9wOiAyODsgfVxcblxcbi5wLXItMjgge1xcbiAgcGFkZGluZy1yaWdodDogMjg7IH1cXG5cXG4ucC1iLTI4IHtcXG4gIHBhZGRpbmctYm90dG9tOiAyODsgfVxcblxcbi5wLWwtMjgge1xcbiAgcGFkZGluZy1sZWZ0OiAyODsgfVxcblxcbi5wLXgtMjgge1xcbiAgcGFkZGluZy1yaWdodDogMjg7XFxuICBwYWRkaW5nLWxlZnQ6IDI4OyB9XFxuXFxuLnAteS0yOCB7XFxuICBwYWRkaW5nLXRvcDogMjg7XFxuICBwYWRkaW5nLWJvdHRvbTogMjg7IH1cXG5cXG4ucC0zMCB7XFxuICBwYWRkaW5nOiAzMDsgfVxcblxcbi5wLXQtMzAge1xcbiAgcGFkZGluZy10b3A6IDMwOyB9XFxuXFxuLnAtci0zMCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAzMDsgfVxcblxcbi5wLWItMzAge1xcbiAgcGFkZGluZy1ib3R0b206IDMwOyB9XFxuXFxuLnAtbC0zMCB7XFxuICBwYWRkaW5nLWxlZnQ6IDMwOyB9XFxuXFxuLnAteC0zMCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAzMDtcXG4gIHBhZGRpbmctbGVmdDogMzA7IH1cXG5cXG4ucC15LTMwIHtcXG4gIHBhZGRpbmctdG9wOiAzMDtcXG4gIHBhZGRpbmctYm90dG9tOiAzMDsgfVxcblxcbi8qIERpdmlkZXJzICovXFxuLmhyLWxpZ2h0IHtcXG4gIGhlaWdodDogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi5oci1kYXJrIHtcXG4gIGhlaWdodDogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi8qIEFsaWdubWVudCAqL1xcbi50ZXh0LWxlZnQge1xcbiAgdGV4dC1hbGlnbjogbGVmdDsgfVxcblxcbi50ZXh0LXJpZ2h0IHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0OyB9XFxuXFxuLnRleHQtY2VudGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi50ZXh0LWxvd2VyY2FzZSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlOyB9XFxuXFxuLnRleHQtdXBwZXJjYXNlIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cXG5cXG4udGV4dC1jYXBpdGFsaXplIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplOyB9XFxuXFxuLmZvbnQtd2VpZ2h0LW5vcm1hbCB7XFxuICBmb250LXdlaWdodDogbm9ybWFsOyB9XFxuXFxuLmZvbnQtd2VpZ2h0LWJvbGQge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG5cXG4uZm9udC1pdGFsaWMge1xcbiAgZm9udC1zdHlsZTogaXRhbGljOyB9XFxuXFxuLyoqXFxyXFxuICogRm9udCBzaXplXFxyXFxuICogVGhlIGZvbGxvd2luZyBjcmVhdGVzIHRoaXMgcGF0dGVybjpcXHJcXG4gKiAudC0xMHtmb250LXNpemU6MTB9XFxyXFxuICogRnJvbSAxMCwgMTIsIDE0LCAxNSwgMTYsIDE3LCAxOCwgMTksIDIwXFxyXFxuKiovXFxuLnQtMTAge1xcbiAgZm9udC1zaXplOiAxMDsgfVxcblxcbi50LTEyIHtcXG4gIGZvbnQtc2l6ZTogMTI7IH1cXG5cXG4udC0xNCB7XFxuICBmb250LXNpemU6IDE0OyB9XFxuXFxuLnQtMTUge1xcbiAgZm9udC1zaXplOiAxNTsgfVxcblxcbi50LTE2IHtcXG4gIGZvbnQtc2l6ZTogMTY7IH1cXG5cXG4udC0xNyB7XFxuICBmb250LXNpemU6IDE3OyB9XFxuXFxuLnQtMTgge1xcbiAgZm9udC1zaXplOiAxODsgfVxcblxcbi50LTE5IHtcXG4gIGZvbnQtc2l6ZTogMTk7IH1cXG5cXG4udC0yMCB7XFxuICBmb250LXNpemU6IDIwOyB9XFxuXFxuLnQtMjUge1xcbiAgZm9udC1zaXplOiAyNTsgfVxcblxcbi50LTMwIHtcXG4gIGZvbnQtc2l6ZTogMzA7IH1cXG5cXG4uaW1nLXJvdW5kZWQge1xcbiAgYm9yZGVyLXJhZGl1czogNTsgfVxcblxcbi5pbWctY2lyY2xlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDIwOyB9XFxuXFxuLmltZy10aHVtYm5haWwge1xcbiAgYm9yZGVyLXJhZGl1czogMDsgfVxcblxcbi5pbnZpc2libGUge1xcbiAgdmlzaWJpbGl0eTogY29sbGFwc2U7IH1cXG5cXG4ucHVsbC1sZWZ0IHtcXG4gIGhvcml6b250YWwtYWxpZ246IGxlZnQ7IH1cXG5cXG4ucHVsbC1yaWdodCB7XFxuICBob3Jpem9udGFsLWFsaWduOiByaWdodDsgfVxcblxcbi5tLXgtYXV0byB7XFxuICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7IH1cXG5cXG4ubS15LWF1dG8ge1xcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjsgfVxcblxcbi50ZXh0LXByaW1hcnkge1xcbiAgY29sb3I6ICMzQTUzRkY7IH1cXG5cXG4udGV4dC1kYW5nZXIge1xcbiAgY29sb3I6ICNFRDQ3M0Y7IH1cXG5cXG4udGV4dC1tdXRlZCB7XFxuICBjb2xvcjogIzllOWU5ZTsgfVxcblxcbi5iZy1wcmltYXJ5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzQTUzRkY7XFxuICBjb2xvcjogI2ZmZjsgfVxcblxcbi5iZy1kYW5nZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VENDczRjtcXG4gIGNvbG9yOiAjZmZmOyB9XFxuXFxuLmFjdGlvbi1iYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNBNTNGRjtcXG4gIGNvbG9yOiAjZmZmOyB9XFxuICAuYWN0aW9uLWJhciAuYWN0aW9uLWJhci10aXRsZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDE3O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyOyB9XFxuICAuYWN0aW9uLWJhciAuYWN0aW9uLWl0ZW0ge1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsOyB9XFxuXFxuLmFjdGl2aXR5LWluZGljYXRvciB7XFxuICBjb2xvcjogIzNBNTNGRjtcXG4gIHdpZHRoOiAzMDtcXG4gIGhlaWdodDogMzA7IH1cXG5cXG4uYnRuIHtcXG4gIGNvbG9yOiAjMDI1NTZlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBtaW4taGVpZ2h0OiAzNjtcXG4gIG1pbi13aWR0aDogNjQ7XFxuICBwYWRkaW5nOiAxMCAxMCAxMCAxMDtcXG4gIGZvbnQtc2l6ZTogMTg7XFxuICBtYXJnaW46IDggMTYgOCAxNjsgfVxcbiAgLmJ0bi5idG4tYWN0aXZlOmhpZ2hsaWdodGVkIHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMzdjYTA7IH1cXG5cXG4uYnRuLXByaW1hcnkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyNTU2ZTtcXG4gIGJvcmRlci1jb2xvcjogIzAyNTU2ZTtcXG4gIGNvbG9yOiAjZmZmOyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLWFjdGl2ZTpoaWdobGlnaHRlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTJlM2M7XFxuICAgIGJvcmRlci1jb2xvcjogIzAxMmUzYzsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1hcXVhIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwY2FhYjsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1ibHVlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNkNWFmZTsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1icm93biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3OTU1NDg7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tZm9yZXN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjk2ODsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1ncmV5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVjNjg3YzsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1sZW1vbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmVhMDA7XFxuICAgIGNvbG9yOiAjMDAwOyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLWxpbWUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWVlNDA2O1xcbiAgICBjb2xvcjogIzAwMDsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1vcmFuZ2Uge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjU3YzAwOyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLXB1cnBsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MTMwZmY7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tcnVieSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjE3NDQ7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tc2t5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMwYmNmZjsgfVxcblxcbi5idG4tb3V0bGluZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1jb2xvcjogIzAyNTU2ZTtcXG4gIGNvbG9yOiAjMDI1NTZlOyB9XFxuICAuYnRuLW91dGxpbmUuYnRuLWFjdGl2ZTpoaWdobGlnaHRlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMzdjYTA7IH1cXG5cXG4uYnRuW2lzRW5hYmxlZD1mYWxzZV0ge1xcbiAgY29sb3I6ICNhNGE0YTQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbiAgYm9yZGVyLWNvbG9yOiAjZTBlMGUwOyB9XFxuXFxuLmZhIHtcXG4gIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZSwgZm9udGF3ZXNvbWUtd2ViZm9udDsgfVxcblxcbi5mb3JtIC5pbnB1dCB7XFxuICBwYWRkaW5nOiAxNiA4IDE2IDg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcbiAgLmZvcm0gLmlucHV0LmlucHV0LWJvcmRlciB7XFxuICAgIGJvcmRlci13aWR0aDogMTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZTBlMGUwO1xcbiAgICBib3JkZXItcmFkaXVzOiAyO1xcbiAgICBwYWRkaW5nOiAxNjsgfVxcbiAgLmZvcm0gLmlucHV0LmlucHV0LXJvdW5kZWQge1xcbiAgICBib3JkZXItd2lkdGg6IDE7XFxuICAgIGJvcmRlci1jb2xvcjogI2UwZTBlMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjg7XFxuICAgIHBhZGRpbmc6IDE2OyB9XFxuICAuZm9ybSAuaW5wdXRbaXNFbmFibGVkPSdmYWxzZSddIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTsgfVxcblxcbi5mb3JtIC5pbnB1dC1maWVsZCB7XFxuICBtYXJnaW46IDg7IH1cXG4gIC5mb3JtIC5pbnB1dC1maWVsZCAubGFiZWwge1xcbiAgICBmb250LXNpemU6IDEyO1xcbiAgICBjb2xvcjogI2JhYmFiYTsgfVxcbiAgLmZvcm0gLmlucHV0LWZpZWxkIC5pbnB1dCB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMCAwIDggMDsgfVxcbiAgLmZvcm0gLmlucHV0LWZpZWxkIC5oci1saWdodC5hY3RpdmUsXFxuICAuZm9ybSAuaW5wdXQtZmllbGQgLmhyLWRhcmsuYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNBNTNGRjsgfVxcbiAgLmZvcm0gLmlucHV0LWZpZWxkLmlucHV0LXNpZGVzIC5sYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMTg7XFxuICAgIG1hcmdpbjogMCAwIDggMDsgfVxcblxcbi5oMSwgLmgyLCAuaDMsIC5oNCwgLmg1LCAuaDYge1xcbiAgbWFyZ2luLWJvdHRvbTogNDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBjb2xvcjogIzAyMjczNDsgfVxcblxcbi5ib2R5LFxcbi5ib2R5MixcXG4uZm9vdG5vdGUge1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGNvbG9yOiAjMDIyNzM0OyB9XFxuXFxuLmgxIHtcXG4gIGZvbnQtc2l6ZTogMzI7IH1cXG5cXG4uaDIge1xcbiAgZm9udC1zaXplOiAyMjsgfVxcblxcbi5oMyB7XFxuICBmb250LXNpemU6IDE1OyB9XFxuXFxuLmg0IHtcXG4gIGZvbnQtc2l6ZTogMTI7IH1cXG5cXG4uaDUge1xcbiAgZm9udC1zaXplOiAxMTsgfVxcblxcbi5oNiB7XFxuICBmb250LXNpemU6IDEwOyB9XFxuXFxuLmJvZHkge1xcbiAgZm9udC1zaXplOiAxNDsgfVxcblxcbi5ib2R5MiB7XFxuICBmb250LXNpemU6IDE3OyB9XFxuXFxuLmZvb3Rub3RlIHtcXG4gIGZvbnQtc2l6ZTogMTM7IH1cXG5cXG4ubGlzdC1ncm91cCAubGlzdC1ncm91cC1pdGVtIHtcXG4gIGNvbG9yOiAjMjEyMTIxO1xcbiAgZm9udC1zaXplOiAxNjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDE2OyB9XFxuICAubGlzdC1ncm91cCAubGlzdC1ncm91cC1pdGVtIExhYmVsIHtcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjsgfVxcbiAgLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbSAudGh1bWIge1xcbiAgICBzdHJldGNoOiBmaWxsO1xcbiAgICB3aWR0aDogNDA7XFxuICAgIGhlaWdodDogNDA7XFxuICAgIG1hcmdpbi1yaWdodDogMTY7IH1cXG4gIC5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW0uYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDsgfVxcbiAgLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbSAubGlzdC1ncm91cC1pdGVtLXRleHQge1xcbiAgICBjb2xvcjogIzAyMjczNDtcXG4gICAgZm9udC1zaXplOiAxNDsgfVxcblxcbi5wYWdlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cXG5cXG4ucHJvZ3Jlc3Mge1xcbiAgY29sb3I6ICMzQTUzRkY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmFiYWJhOyB9XFxuXFxuLnNlZ21lbnRlZC1iYXIge1xcbiAgZm9udC1zaXplOiAxMztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBjb2xvcjogIzIxMjEyMTtcXG4gIHNlbGVjdGVkLWJhY2tncm91bmQtY29sb3I6ICMzQTUzRkY7IH1cXG5cXG4uc2lkZWRyYXdlci1sZWZ0LCAuc2lkZWRyYXdlci1jZW50ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjsgfVxcblxcbi5zaWRlZHJhd2VyLWhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xcbiAgaGVpZ2h0OiAxNDg7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi5zaWRlZHJhd2VyLWxlZnQgLnNpZGVkcmF3ZXItaGVhZGVyIHtcXG4gIHBhZGRpbmc6IDE2IDE2IDAgMTY7IH1cXG5cXG4uc2lkZWRyYXdlci1jZW50ZXIgLnNpZGVkcmF3ZXItaGVhZGVyIHtcXG4gIHBhZGRpbmc6IDIwIDE1IDAgMTU7IH1cXG5cXG4uc2lkZWRyYXdlci1oZWFkZXItaW1hZ2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDsgfVxcblxcbi5zaWRlZHJhd2VyLWxlZnQgLnNpZGVkcmF3ZXItaGVhZGVyLWltYWdlIHtcXG4gIGhlaWdodDogNjQ7XFxuICB3aWR0aDogNjQ7XFxuICBib3JkZXItcmFkaXVzOiAzMjtcXG4gIGhvcml6b250YWwtYWxpZ246IGxlZnQ7XFxuICBtYXJnaW4tYm90dG9tOiAzNjsgfVxcblxcbi5zaWRlZHJhd2VyLWNlbnRlciAuc2lkZWRyYXdlci1oZWFkZXItaW1hZ2Uge1xcbiAgaGVpZ2h0OiA3NDtcXG4gIHdpZHRoOiA3NDtcXG4gIGJvcmRlci1yYWRpdXM6IDM3O1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMjQ7IH1cXG5cXG4uc2lkZWRyYXdlci1oZWFkZXItYnJhbmQge1xcbiAgY29sb3I6ICM3MzczNzM7IH1cXG5cXG4uc2lkZWRyYXdlci1sZWZ0IC5zaWRlZHJhd2VyLWhlYWRlci1icmFuZCB7XFxuICBob3Jpem9udGFsLWFsaWduOiBsZWZ0O1xcbiAgZm9udC1zaXplOiAxNDsgfVxcblxcbi5zaWRlZHJhd2VyLWNlbnRlciAuc2lkZWRyYXdlci1oZWFkZXItYnJhbmQge1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxNTsgfVxcblxcbi5zaWRlZHJhd2VyLWxpc3QtaXRlbSB7XFxuICBoZWlnaHQ6IDQ4O1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogbGVmdDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3JpZW50YXRpb246IGhvcml6b250YWw7IH1cXG4gIC5zaWRlZHJhd2VyLWxpc3QtaXRlbSAuc2lkZWRyYXdlci1saXN0LWl0ZW0taWNvbiB7XFxuICAgIHdpZHRoOiAyNDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDIwO1xcbiAgICBoZWlnaHQ6IDQ4O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyOyB9XFxuICAuc2lkZWRyYXdlci1saXN0LWl0ZW0uYWN0aXZlIHtcXG4gICAgY29sb3I6ICMzQTUzRkY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOEY4Rjg7IH1cXG4gICAgLnNpZGVkcmF3ZXItbGlzdC1pdGVtLmFjdGl2ZSAuc2lkZWRyYXdlci1saXN0LWl0ZW0taWNvbiB7XFxuICAgICAgY29sb3I6ICMzQTUzRkY7IH1cXG5cXG4uc2lkZWRyYXdlci1sZWZ0IC5zaWRlZHJhd2VyLWxpc3QtaXRlbS1pY29uIHtcXG4gIG1hcmdpbjogMCAxNiAwIDE2OyB9XFxuXFxuLnNpZGVkcmF3ZXItY2VudGVyIC5zaWRlZHJhd2VyLWxpc3QtaXRlbS1pY29uIHtcXG4gIG1hcmdpbjogMCAwIDAgMTU7IH1cXG5cXG4uc2lkZWRyYXdlci1saXN0LWl0ZW0tdGV4dCB7XFxuICBob3Jpem9udGFsLWFsaWduOiBsZWZ0O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGZvbnQtc2l6ZTogMTU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci13aWR0aDogMC4xO1xcbiAgd2lkdGg6IDgwJTtcXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7IH1cXG5cXG4uc2lkZWRyYXdlci1sZWZ0IC5zaWRlZHJhd2VyLWxpc3QtaXRlbS10ZXh0IHtcXG4gIHBhZGRpbmctbGVmdDogMTY7IH1cXG5cXG4uc2lkZWRyYXdlci1jZW50ZXIgLnNpZGVkcmF3ZXItbGlzdC1pdGVtLXRleHQge1xcbiAgcGFkZGluZy1sZWZ0OiAxNTsgfVxcblxcbi5zbGlkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNBNTNGRjsgfVxcbiAgLnNsaWRlcltpc0VuYWJsZWQ9ZmFsc2VdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG4gICAgY29sb3I6ICNlMGUwZTA7IH1cXG5cXG4uc3dpdGNoW2NoZWNrZWQ9dHJ1ZV0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNBNTNGRjtcXG4gIGNvbG9yOiAjM0E1M0ZGOyB9XFxuXFxuLnN3aXRjaFtjaGVja2VkPXRydWVdW2lzRW5hYmxlZD1mYWxzZV0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG4gIGNvbG9yOiAjZmZmOyB9XFxuXFxuLnN3aXRjaFtpc0VuYWJsZWQ9ZmFsc2VdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxuICBjb2xvcjogI2UwZTBlMDsgfVxcblxcbi50YWItdmlldyB7XFxuICAvKmNvbG9yOiAkc2Vjb25kYXJ5OyovXFxuICBzZWxlY3RlZC1jb2xvcjogIzMwYmNmZjtcXG4gIHRhYnMtYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxcbiAgLnRhYi12aWV3IC50YWItdmlldy1pdGVtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgdGFicy1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XFxuXFxuI2xvZ2luLWJhY2tncm91bmQge1xcbiAgbWFyZ2luLXRvcDogLTIwO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgfVxcblxcbi5sb2dpbi13cmFwIHtcXG4gIHBhZGRpbmc6IDAgNDA7IH1cXG5cXG4ubG9nby13cmFwIHtcXG4gIG1hcmdpbjogNjAgMCAxMCAwO1xcbiAgcGFkZGluZzogMjAgMDsgfVxcbiAgLmxvZ28td3JhcCAubG9naW4tbG9nbyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAzMDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBjb2xvcjogIzIxMjEyMTtcXG4gICAgb3BhY2l0eTogLjk7IH1cXG4gIC5sb2dvLXdyYXAgLmxvZ2luLWxvZ28tc3ViIHtcXG4gICAgY29sb3I6ICMyMTIxMjE7XFxuICAgIG9wYWNpdHk6IC44O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4ubG9naW4td3JhcHBlciB7XFxuICBwYWRkaW5nOiAyMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiAzOyB9XFxuICAubG9naW4td3JhcHBlciBUZXh0RmllbGQge1xcbiAgICBwYWRkaW5nOiAxMCAxMDtcXG4gICAgbWFyZ2luOiAxMCAwIDAgMDsgfVxcblxcbi5nby1iYWNrIHtcXG4gIGZvbnQtc2l6ZTogMTQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogIzIxMjEyMTtcXG4gIG1hcmdpbi10b3A6IDEwOyB9XFxuXFxuLyoqXFxyXFxuICogSW1wb3J0IGFsbCBwbGF0Zm9ybSBzcGVjaWZpYyBmaWxlcyBoZXJlXFxyXFxuICovXFxuLmFjdGlvbi1iYXIgLmFjdGlvbi1iYXItdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMjA7IH1cXG5cXG4uYWN0aW9uLWJhciAuYWN0aW9uLWl0ZW0ge1xcbiAgYW5kcm9pZC1lbGV2YXRpb246IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMCk7XFxuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwKTtcXG4gIGJvcmRlci13aWR0aDogMTsgfVxcblxcbi5idG4ge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcXG4gIGZvbnQtc2l6ZTogMTQ7IH1cXG5cXG4uYnRuLXByaW1hcnkge1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMCk7IH1cXG5cXG4uYnRuLW91dGxpbmUge1xcbiAgYW5kcm9pZC1lbGV2YXRpb246IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMCk7XFxuICBib3JkZXItd2lkdGg6IDE7XFxuICBib3JkZXItY29sb3I6ICMwMjU1NmU7XFxuICBoZWlnaHQ6IDM2O1xcbiAgcGFkZGluZzogMDsgfVxcblxcbi5idG4tcm91bmRlZC1zbSB7XFxuICBib3JkZXItcmFkaXVzOiAyO1xcbiAgaGVpZ2h0OiAzNjtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG4uYnRuLXJvdW5kZWQtbGcge1xcbiAgYm9yZGVyLXJhZGl1czogNDA7XFxuICBoZWlnaHQ6IDM2O1xcbiAgcGFkZGluZzogMDsgfVxcblxcbi5mb3JtIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFJlZ3VsYXInOyB9XFxuICAuZm9ybSAuaW5wdXQge1xcbiAgICBmb250LXNpemU6IDE2OyB9XFxuXFxuLmgxIHtcXG4gIGZvbnQtc2l6ZTogMzQ7IH1cXG5cXG4uaDIge1xcbiAgZm9udC1zaXplOiAyNDsgfVxcblxcbi5oMyB7XFxuICBmb250LXNpemU6IDE2OyB9XFxuXFxuLmg1IHtcXG4gIGZvbnQtc2l6ZTogMTE7XFxuICBmb250LXdlaWdodDogYm9sZDsgfVxcblxcbi5ib2R5MiB7XFxuICBmb250LXNpemU6IDE0O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDsgfVxcblxcbi5zaWRlZHJhd2VyLWxpc3QtaXRlbS1pY29uIHtcXG4gIG1hcmdpbjogMCAxNiAwIDE2O1xcbiAgcGFkZGluZy10b3A6IDE0OyB9XFxuXFxuLnNpZGVkcmF3ZXItbGlzdC1pdGVtLWljb24sIC5zaWRlZHJhd2VyLWxpc3QtaXRlbSB7XFxuICBjb2xvcjogIzAyMjczNDsgfVxcblxcbi5zaWRlZHJhd2VyLWxpc3QtaXRlbSB7XFxuICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xcbiAgZm9udC1zaXplOiAxNDsgfVxcblxcbi5zbGlkZXIge1xcbiAgY29sb3I6ICMzQTUzRkY7XFxuICBtYXJnaW46IDIwIDE2OyB9XFxuXFxuLnN3aXRjaCB7XFxuICBtYXJnaW46IDE0IDE2O1xcbiAgY29sb3I6ICNlMGUwZTA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwOyB9XFxuICAuc3dpdGNoW2NoZWNrZWQ9dHJ1ZV0ge1xcbiAgICBjb2xvcjogIzNBNTNGRjsgfVxcblxcbi5mYSB7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnRBd2Vzb21lXFxcIjsgfVxcblxcbi5hY3Rpb24taXRlbSxcXG5OYXZpZ2F0aW9uQnV0dG9uIHtcXG4gIGNvbG9yOiAjZmZmOyB9XFxuXFxuLmFjdGlvbi1pdGVtOmRpc2FibGVkIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7IH1cXG5cXG5TbGlkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNBNTNGRjtcXG4gIGNvbG9yOiAjM0E1M0ZGOyB9XFxuXFxuLnRleHQge1xcbiAgY29sb3I6ICMwMjI3MzQ7IH1cXG5cXG4udGV4dC1wcmltYXJ5IHtcXG4gIGNvbG9yOiAjM0E1M0ZGOyB9XFxuXFxuLnRleHQtc2Vjb25kYXJ5IHtcXG4gIGNvbG9yOiByZ2JhKDIsIDM5LCA1MiwgMC41KTsgfVxcblxcbi5hY3Rpb24taXRlbSB7XFxuICBwYWRkaW5nOiAwIDEwO1xcbiAgaGVpZ2h0OiAxMDAlOyB9XFxuXFxuLmZhIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udEF3ZXNvbWVcXFwiLCBcXFwiZm9udGF3ZXNvbWUtd2ViZm9udFxcXCI7IH1cXG5cXG4uaW9uIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiaW9uaWNvbnNcXFwiOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2FwcC5zY3NzJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0Fkb3B0aW9uQW5pbWFsRGV0YWlscy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGViYTJkMTImc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQWRvcHRpb25BbmltYWxEZXRhaWxzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQWRvcHRpb25BbmltYWxEZXRhaWxzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9BZG9wdGlvbkFuaW1hbERldGFpbHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NGViYTJkMTImc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjRlYmEyZDEyXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL0RyU2Ftc29ubml0ZS9EZXNrdG9wL0NTIENvdXJzZSBtYXRlcmlhbHMvU2VuaW9yIERFc2lnbi9hY3VhX3ZlcnNpb2lucy9hY3VhVl8yLjEvYWN1YS1tb2JpbGUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNGViYTJkMTInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNGViYTJkMTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNGViYTJkMTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0Fkb3B0aW9uQW5pbWFsRGV0YWlscy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGViYTJkMTImc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNGViYTJkMTInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvYWRvcHRpb24vQWRvcHRpb25BbmltYWxEZXRhaWxzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BZG9wdGlvbkFuaW1hbERldGFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRvcHRpb25BbmltYWxEZXRhaWxzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRvcHRpb25BbmltYWxEZXRhaWxzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTRlYmEyZDEyJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Fkb3B0aW9uQW5pbWFsRGV0YWlscy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00ZWJhMmQxMiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BZG9wdGlvbkFuaW1hbERldGFpbHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRlYmEyZDEyJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9BbmltYWxDYXJkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mMTQyMmExMCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BbmltYWxDYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQW5pbWFsQ2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vQW5pbWFsQ2FyZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1mMTQyMmExMCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiZjE0MjJhMTBcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvRHJTYW1zb25uaXRlL0Rlc2t0b3AvQ1MgQ291cnNlIG1hdGVyaWFscy9TZW5pb3IgREVzaWduL2FjdWFfdmVyc2lvaW5zL2FjdWFWXzIuMS9hY3VhLW1vYmlsZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdmMTQyMmExMCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdmMTQyMmExMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdmMTQyMmExMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQW5pbWFsQ2FyZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZjE0MjJhMTAmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZjE0MjJhMTAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvYWRvcHRpb24vQW5pbWFsQ2FyZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQW5pbWFsQ2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BbmltYWxDYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQW5pbWFsQ2FyZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1mMTQyMmExMCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BbmltYWxDYXJkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWYxNDIyYTEwJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FuaW1hbENhcmQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWYxNDIyYTEwJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDVjOThlYWMmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDVjOThlYWMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjA1Yzk4ZWFjXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL0RyU2Ftc29ubml0ZS9EZXNrdG9wL0NTIENvdXJzZSBtYXRlcmlhbHMvU2VuaW9yIERFc2lnbi9hY3VhX3ZlcnNpb2lucy9hY3VhVl8yLjEvYWN1YS1tb2JpbGUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMDVjOThlYWMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMDVjOThlYWMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMDVjOThlYWMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNWM5OGVhYyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwNWM5OGVhYycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9hZG9wdGlvbi9jYXRlZ29yeS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wNWM5OGVhYyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wNWM5OGVhYyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDVjOThlYWMmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0NhdGVnb3J5QnV0dG9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03NjA5YTIzOSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9DYXRlZ29yeUJ1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0NhdGVnb3J5QnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9DYXRlZ29yeUJ1dHRvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03NjA5YTIzOSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNzYwOWEyMzlcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvRHJTYW1zb25uaXRlL0Rlc2t0b3AvQ1MgQ291cnNlIG1hdGVyaWFscy9TZW5pb3IgREVzaWduL2FjdWFfdmVyc2lvaW5zL2FjdWFWXzIuMS9hY3VhLW1vYmlsZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc3NjA5YTIzOScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3NjA5YTIzOScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3NjA5YTIzOScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQ2F0ZWdvcnlCdXR0b24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc2MDlhMjM5JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzc2MDlhMjM5Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL2J1dHRvbnMvQ2F0ZWdvcnlCdXR0b24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NhdGVnb3J5QnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NhdGVnb3J5QnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2F0ZWdvcnlCdXR0b24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzYwOWEyMzkmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2F0ZWdvcnlCdXR0b24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzYwOWEyMzkmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2F0ZWdvcnlCdXR0b24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc2MDlhMjM5JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9JY29uQnV0dG9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NGFlNTcxOCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9JY29uQnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vSWNvbkJ1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vSWNvbkJ1dHRvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00NGFlNTcxOCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNDRhZTU3MThcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvRHJTYW1zb25uaXRlL0Rlc2t0b3AvQ1MgQ291cnNlIG1hdGVyaWFscy9TZW5pb3IgREVzaWduL2FjdWFfdmVyc2lvaW5zL2FjdWFWXzIuMS9hY3VhLW1vYmlsZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0NGFlNTcxOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0NGFlNTcxOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0NGFlNTcxOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSWNvbkJ1dHRvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDRhZTU3MTgmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNDRhZTU3MTgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvYnV0dG9ucy9JY29uQnV0dG9uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JY29uQnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ljb25CdXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JY29uQnV0dG9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ0YWU1NzE4JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ljb25CdXR0b24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDRhZTU3MTgmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSWNvbkJ1dHRvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDRhZTU3MTgmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0FuaW1hbENlbnRlckRldGFpbHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVmZjdkMTVjJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0FuaW1hbENlbnRlckRldGFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BbmltYWxDZW50ZXJEZXRhaWxzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9BbmltYWxDZW50ZXJEZXRhaWxzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVmZjdkMTVjJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNWZmN2QxNWNcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvRHJTYW1zb25uaXRlL0Rlc2t0b3AvQ1MgQ291cnNlIG1hdGVyaWFscy9TZW5pb3IgREVzaWduL2FjdWFfdmVyc2lvaW5zL2FjdWFWXzIuMS9hY3VhLW1vYmlsZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1ZmY3ZDE1YycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1ZmY3ZDE1YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1ZmY3ZDE1YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQW5pbWFsQ2VudGVyRGV0YWlscy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWZmN2QxNWMmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNWZmN2QxNWMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvbG9jYXRpb24vQW5pbWFsQ2VudGVyRGV0YWlscy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQW5pbWFsQ2VudGVyRGV0YWlscy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BbmltYWxDZW50ZXJEZXRhaWxzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FuaW1hbENlbnRlckRldGFpbHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWZmN2QxNWMmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BbmltYWxDZW50ZXJEZXRhaWxzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVmZjdkMTVjJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BbmltYWxDZW50ZXJEZXRhaWxzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ZmY3ZDE1YyZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRmFxSW5mby52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGE0YmIyNDUmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRmFxSW5mby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0ZhcUluZm8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0ZhcUluZm8udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MGE0YmIyNDUmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIwYTRiYjI0NVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9EclNhbXNvbm5pdGUvRGVza3RvcC9DUyBDb3Vyc2UgbWF0ZXJpYWxzL1NlbmlvciBERXNpZ24vYWN1YV92ZXJzaW9pbnMvYWN1YVZfMi4xL2FjdWEtbW9iaWxlL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzBhNGJiMjQ1JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzBhNGJiMjQ1JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzBhNGJiMjQ1JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9GYXFJbmZvLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wYTRiYjI0NSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwYTRiYjI0NScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9zdWJsaXN0cy9GYXFJbmZvLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GYXFJbmZvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZhcUluZm8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmFxSW5mby52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wYTRiYjI0NSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZhcUluZm8udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MGE0YmIyNDUmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZhcUluZm8udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBhNGJiMjQ1JnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiFcXG4gKiAgRm9udCBBd2Vzb21lIDQuNy4wIGJ5IEBkYXZlZ2FuZHkgLSBodHRwOi8vZm9udGF3ZXNvbWUuaW8gLSBAZm9udGF3ZXNvbWVcXG4gKiAgTGljZW5zZSAtIGh0dHA6Ly9mb250YXdlc29tZS5pby9saWNlbnNlIChGb250OiBTSUwgT0ZMIDEuMSwgQ1NTOiBNSVQgTGljZW5zZSlcXG4gKi9cXG4vKiBGT05UIFBBVEhcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdGb250QXdlc29tZSc7XFxuICBzcmM6IHVybCgnLi4vZm9udHMvZm9udGF3ZXNvbWUtd2ViZm9udC5lb3Q/dj00LjcuMCcpO1xcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL2ZvbnRhd2Vzb21lLXdlYmZvbnQuZW90PyNpZWZpeCZ2PTQuNy4wJykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLCB1cmwoJy4uL2ZvbnRzL2ZvbnRhd2Vzb21lLXdlYmZvbnQud29mZjI/dj00LjcuMCcpIGZvcm1hdCgnd29mZjInKSwgdXJsKCcuLi9mb250cy9mb250YXdlc29tZS13ZWJmb250LndvZmY/dj00LjcuMCcpIGZvcm1hdCgnd29mZicpLCB1cmwoJy4uL2ZvbnRzL2ZvbnRhd2Vzb21lLXdlYmZvbnQudHRmP3Y9NC43LjAnKSBmb3JtYXQoJ3RydWV0eXBlJyksIHVybCgnLi4vZm9udHMvZm9udGF3ZXNvbWUtd2ViZm9udC5zdmc/dj00LjcuMCNmb250YXdlc29tZXJlZ3VsYXInKSBmb3JtYXQoJ3N2ZycpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuLmZhIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDE0cHgvMSBGb250QXdlc29tZTtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbn1cXG4vKiBtYWtlcyB0aGUgZm9udCAzMyUgbGFyZ2VyIHJlbGF0aXZlIHRvIHRoZSBpY29uIGNvbnRhaW5lciAqL1xcbi5mYS1sZyB7XFxuICBmb250LXNpemU6IDEuMzMzMzMzMzNlbTtcXG4gIGxpbmUtaGVpZ2h0OiAwLjc1ZW07XFxuICB2ZXJ0aWNhbC1hbGlnbjogLTE1JTtcXG59XFxuLmZhLTJ4IHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbn1cXG4uZmEtM3gge1xcbiAgZm9udC1zaXplOiAzZW07XFxufVxcbi5mYS00eCB7XFxuICBmb250LXNpemU6IDRlbTtcXG59XFxuLmZhLTV4IHtcXG4gIGZvbnQtc2l6ZTogNWVtO1xcbn1cXG4uZmEtZncge1xcbiAgd2lkdGg6IDEuMjg1NzE0MjllbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmZhLXVsIHtcXG4gIHBhZGRpbmctbGVmdDogMDtcXG4gIG1hcmdpbi1sZWZ0OiAyLjE0Mjg1NzE0ZW07XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcbi5mYS11bCA+IGxpIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmZhLWxpIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IC0yLjE0Mjg1NzE0ZW07XFxuICB3aWR0aDogMi4xNDI4NTcxNGVtO1xcbiAgdG9wOiAwLjE0Mjg1NzE0ZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5mYS1saS5mYS1sZyB7XFxuICBsZWZ0OiAtMS44NTcxNDI4NmVtO1xcbn1cXG4uZmEtYm9yZGVyIHtcXG4gIHBhZGRpbmc6IC4yZW0gLjI1ZW0gLjE1ZW07XFxuICBib3JkZXI6IHNvbGlkIDAuMDhlbSAjZWVlZWVlO1xcbiAgYm9yZGVyLXJhZGl1czogLjFlbTtcXG59XFxuLmZhLXB1bGwtbGVmdCB7XFxuICBmbG9hdDogbGVmdDtcXG59XFxuLmZhLXB1bGwtcmlnaHQge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbn1cXG4uZmEuZmEtcHVsbC1sZWZ0IHtcXG4gIG1hcmdpbi1yaWdodDogLjNlbTtcXG59XFxuLmZhLmZhLXB1bGwtcmlnaHQge1xcbiAgbWFyZ2luLWxlZnQ6IC4zZW07XFxufVxcbi8qIERlcHJlY2F0ZWQgYXMgb2YgNC40LjAgKi9cXG4ucHVsbC1yaWdodCB7XFxuICBmbG9hdDogcmlnaHQ7XFxufVxcbi5wdWxsLWxlZnQge1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcbi5mYS5wdWxsLWxlZnQge1xcbiAgbWFyZ2luLXJpZ2h0OiAuM2VtO1xcbn1cXG4uZmEucHVsbC1yaWdodCB7XFxuICBtYXJnaW4tbGVmdDogLjNlbTtcXG59XFxuLmZhLXNwaW4ge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhLXNwaW4gMnMgaW5maW5pdGUgbGluZWFyO1xcbiAgYW5pbWF0aW9uOiBmYS1zcGluIDJzIGluZmluaXRlIGxpbmVhcjtcXG59XFxuLmZhLXB1bHNlIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYS1zcGluIDFzIGluZmluaXRlIHN0ZXBzKDgpO1xcbiAgYW5pbWF0aW9uOiBmYS1zcGluIDFzIGluZmluaXRlIHN0ZXBzKDgpO1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmEtc3BpbiB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBmYS1zcGluIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xcbiAgfVxcbn1cXG4uZmEtcm90YXRlLTkwIHtcXG4gIC1tcy1maWx0ZXI6IFxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0xKVxcXCI7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcbi5mYS1yb3RhdGUtMTgwIHtcXG4gIC1tcy1maWx0ZXI6IFxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0yKVxcXCI7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxufVxcbi5mYS1yb3RhdGUtMjcwIHtcXG4gIC1tcy1maWx0ZXI6IFxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0zKVxcXCI7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XFxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XFxufVxcbi5mYS1mbGlwLWhvcml6b250YWwge1xcbiAgLW1zLWZpbHRlcjogXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTAsIG1pcnJvcj0xKVxcXCI7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XFxufVxcbi5mYS1mbGlwLXZlcnRpY2FsIHtcXG4gIC1tcy1maWx0ZXI6IFxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0yLCBtaXJyb3I9MSlcXFwiO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsIC0xKTtcXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEsIC0xKTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSwgLTEpO1xcbn1cXG46cm9vdCAuZmEtcm90YXRlLTkwLFxcbjpyb290IC5mYS1yb3RhdGUtMTgwLFxcbjpyb290IC5mYS1yb3RhdGUtMjcwLFxcbjpyb290IC5mYS1mbGlwLWhvcml6b250YWwsXFxuOnJvb3QgLmZhLWZsaXAtdmVydGljYWwge1xcbiAgZmlsdGVyOiBub25lO1xcbn1cXG4uZmEtc3RhY2sge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDJlbTtcXG4gIGhlaWdodDogMmVtO1xcbiAgbGluZS1oZWlnaHQ6IDJlbTtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5mYS1zdGFjay0xeCxcXG4uZmEtc3RhY2stMngge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uZmEtc3RhY2stMXgge1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxufVxcbi5mYS1zdGFjay0yeCB7XFxuICBmb250LXNpemU6IDJlbTtcXG59XFxuLmZhLWludmVyc2Uge1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcbi8qIEZvbnQgQXdlc29tZSB1c2VzIHRoZSBVbmljb2RlIFByaXZhdGUgVXNlIEFyZWEgKFBVQSkgdG8gZW5zdXJlIHNjcmVlblxcbiAgIHJlYWRlcnMgZG8gbm90IHJlYWQgb2ZmIHJhbmRvbSBjaGFyYWN0ZXJzIHRoYXQgcmVwcmVzZW50IGljb25zICovXFxuLmZhLWdsYXNzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMDBcXFwiO1xcbn1cXG4uZmEtbXVzaWM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwMVxcXCI7XFxufVxcbi5mYS1zZWFyY2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwMlxcXCI7XFxufVxcbi5mYS1lbnZlbG9wZS1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMDNcXFwiO1xcbn1cXG4uZmEtaGVhcnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwNFxcXCI7XFxufVxcbi5mYS1zdGFyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMDVcXFwiO1xcbn1cXG4uZmEtc3Rhci1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMDZcXFwiO1xcbn1cXG4uZmEtdXNlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDA3XFxcIjtcXG59XFxuLmZhLWZpbG06YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwOFxcXCI7XFxufVxcbi5mYS10aC1sYXJnZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDA5XFxcIjtcXG59XFxuLmZhLXRoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMEFcXFwiO1xcbn1cXG4uZmEtdGgtbGlzdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDBCXFxcIjtcXG59XFxuLmZhLWNoZWNrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMENcXFwiO1xcbn1cXG4uZmEtcmVtb3ZlOmJlZm9yZSxcXG4uZmEtY2xvc2U6YmVmb3JlLFxcbi5mYS10aW1lczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDBEXFxcIjtcXG59XFxuLmZhLXNlYXJjaC1wbHVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMEVcXFwiO1xcbn1cXG4uZmEtc2VhcmNoLW1pbnVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMTBcXFwiO1xcbn1cXG4uZmEtcG93ZXItb2ZmOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMTFcXFwiO1xcbn1cXG4uZmEtc2lnbmFsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMTJcXFwiO1xcbn1cXG4uZmEtZ2VhcjpiZWZvcmUsXFxuLmZhLWNvZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDEzXFxcIjtcXG59XFxuLmZhLXRyYXNoLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxNFxcXCI7XFxufVxcbi5mYS1ob21lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMTVcXFwiO1xcbn1cXG4uZmEtZmlsZS1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMTZcXFwiO1xcbn1cXG4uZmEtY2xvY2stbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDE3XFxcIjtcXG59XFxuLmZhLXJvYWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxOFxcXCI7XFxufVxcbi5mYS1kb3dubG9hZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDE5XFxcIjtcXG59XFxuLmZhLWFycm93LWNpcmNsZS1vLWRvd246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxQVxcXCI7XFxufVxcbi5mYS1hcnJvdy1jaXJjbGUtby11cDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDFCXFxcIjtcXG59XFxuLmZhLWluYm94OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMUNcXFwiO1xcbn1cXG4uZmEtcGxheS1jaXJjbGUtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDFEXFxcIjtcXG59XFxuLmZhLXJvdGF0ZS1yaWdodDpiZWZvcmUsXFxuLmZhLXJlcGVhdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDFFXFxcIjtcXG59XFxuLmZhLXJlZnJlc2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAyMVxcXCI7XFxufVxcbi5mYS1saXN0LWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDIyXFxcIjtcXG59XFxuLmZhLWxvY2s6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAyM1xcXCI7XFxufVxcbi5mYS1mbGFnOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMjRcXFwiO1xcbn1cXG4uZmEtaGVhZHBob25lczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDI1XFxcIjtcXG59XFxuLmZhLXZvbHVtZS1vZmY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAyNlxcXCI7XFxufVxcbi5mYS12b2x1bWUtZG93bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDI3XFxcIjtcXG59XFxuLmZhLXZvbHVtZS11cDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDI4XFxcIjtcXG59XFxuLmZhLXFyY29kZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDI5XFxcIjtcXG59XFxuLmZhLWJhcmNvZGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAyQVxcXCI7XFxufVxcbi5mYS10YWc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAyQlxcXCI7XFxufVxcbi5mYS10YWdzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMkNcXFwiO1xcbn1cXG4uZmEtYm9vazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDJEXFxcIjtcXG59XFxuLmZhLWJvb2ttYXJrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMkVcXFwiO1xcbn1cXG4uZmEtcHJpbnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAyRlxcXCI7XFxufVxcbi5mYS1jYW1lcmE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzMFxcXCI7XFxufVxcbi5mYS1mb250OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMzFcXFwiO1xcbn1cXG4uZmEtYm9sZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDMyXFxcIjtcXG59XFxuLmZhLWl0YWxpYzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDMzXFxcIjtcXG59XFxuLmZhLXRleHQtaGVpZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMzRcXFwiO1xcbn1cXG4uZmEtdGV4dC13aWR0aDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDM1XFxcIjtcXG59XFxuLmZhLWFsaWduLWxlZnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzNlxcXCI7XFxufVxcbi5mYS1hbGlnbi1jZW50ZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzN1xcXCI7XFxufVxcbi5mYS1hbGlnbi1yaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDM4XFxcIjtcXG59XFxuLmZhLWFsaWduLWp1c3RpZnk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzOVxcXCI7XFxufVxcbi5mYS1saXN0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwM0FcXFwiO1xcbn1cXG4uZmEtZGVkZW50OmJlZm9yZSxcXG4uZmEtb3V0ZGVudDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDNCXFxcIjtcXG59XFxuLmZhLWluZGVudDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDNDXFxcIjtcXG59XFxuLmZhLXZpZGVvLWNhbWVyYTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDNEXFxcIjtcXG59XFxuLmZhLXBob3RvOmJlZm9yZSxcXG4uZmEtaW1hZ2U6YmVmb3JlLFxcbi5mYS1waWN0dXJlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzRVxcXCI7XFxufVxcbi5mYS1wZW5jaWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0MFxcXCI7XFxufVxcbi5mYS1tYXAtbWFya2VyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNDFcXFwiO1xcbn1cXG4uZmEtYWRqdXN0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNDJcXFwiO1xcbn1cXG4uZmEtdGludDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDQzXFxcIjtcXG59XFxuLmZhLWVkaXQ6YmVmb3JlLFxcbi5mYS1wZW5jaWwtc3F1YXJlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0NFxcXCI7XFxufVxcbi5mYS1zaGFyZS1zcXVhcmUtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDQ1XFxcIjtcXG59XFxuLmZhLWNoZWNrLXNxdWFyZS1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNDZcXFwiO1xcbn1cXG4uZmEtYXJyb3dzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNDdcXFwiO1xcbn1cXG4uZmEtc3RlcC1iYWNrd2FyZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDQ4XFxcIjtcXG59XFxuLmZhLWZhc3QtYmFja3dhcmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0OVxcXCI7XFxufVxcbi5mYS1iYWNrd2FyZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDRBXFxcIjtcXG59XFxuLmZhLXBsYXk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0QlxcXCI7XFxufVxcbi5mYS1wYXVzZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDRDXFxcIjtcXG59XFxuLmZhLXN0b3A6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0RFxcXCI7XFxufVxcbi5mYS1mb3J3YXJkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNEVcXFwiO1xcbn1cXG4uZmEtZmFzdC1mb3J3YXJkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNTBcXFwiO1xcbn1cXG4uZmEtc3RlcC1mb3J3YXJkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNTFcXFwiO1xcbn1cXG4uZmEtZWplY3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA1MlxcXCI7XFxufVxcbi5mYS1jaGV2cm9uLWxlZnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA1M1xcXCI7XFxufVxcbi5mYS1jaGV2cm9uLXJpZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNTRcXFwiO1xcbn1cXG4uZmEtcGx1cy1jaXJjbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA1NVxcXCI7XFxufVxcbi5mYS1taW51cy1jaXJjbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA1NlxcXCI7XFxufVxcbi5mYS10aW1lcy1jaXJjbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA1N1xcXCI7XFxufVxcbi5mYS1jaGVjay1jaXJjbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA1OFxcXCI7XFxufVxcbi5mYS1xdWVzdGlvbi1jaXJjbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA1OVxcXCI7XFxufVxcbi5mYS1pbmZvLWNpcmNsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDVBXFxcIjtcXG59XFxuLmZhLWNyb3NzaGFpcnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA1QlxcXCI7XFxufVxcbi5mYS10aW1lcy1jaXJjbGUtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDVDXFxcIjtcXG59XFxuLmZhLWNoZWNrLWNpcmNsZS1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNURcXFwiO1xcbn1cXG4uZmEtYmFuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNUVcXFwiO1xcbn1cXG4uZmEtYXJyb3ctbGVmdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDYwXFxcIjtcXG59XFxuLmZhLWFycm93LXJpZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNjFcXFwiO1xcbn1cXG4uZmEtYXJyb3ctdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2MlxcXCI7XFxufVxcbi5mYS1hcnJvdy1kb3duOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNjNcXFwiO1xcbn1cXG4uZmEtbWFpbC1mb3J3YXJkOmJlZm9yZSxcXG4uZmEtc2hhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2NFxcXCI7XFxufVxcbi5mYS1leHBhbmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2NVxcXCI7XFxufVxcbi5mYS1jb21wcmVzczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDY2XFxcIjtcXG59XFxuLmZhLXBsdXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2N1xcXCI7XFxufVxcbi5mYS1taW51czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDY4XFxcIjtcXG59XFxuLmZhLWFzdGVyaXNrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNjlcXFwiO1xcbn1cXG4uZmEtZXhjbGFtYXRpb24tY2lyY2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNkFcXFwiO1xcbn1cXG4uZmEtZ2lmdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDZCXFxcIjtcXG59XFxuLmZhLWxlYWY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2Q1xcXCI7XFxufVxcbi5mYS1maXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNkRcXFwiO1xcbn1cXG4uZmEtZXllOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNkVcXFwiO1xcbn1cXG4uZmEtZXllLXNsYXNoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNzBcXFwiO1xcbn1cXG4uZmEtd2FybmluZzpiZWZvcmUsXFxuLmZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNzFcXFwiO1xcbn1cXG4uZmEtcGxhbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3MlxcXCI7XFxufVxcbi5mYS1jYWxlbmRhcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDczXFxcIjtcXG59XFxuLmZhLXJhbmRvbTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDc0XFxcIjtcXG59XFxuLmZhLWNvbW1lbnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3NVxcXCI7XFxufVxcbi5mYS1tYWduZXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3NlxcXCI7XFxufVxcbi5mYS1jaGV2cm9uLXVwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNzdcXFwiO1xcbn1cXG4uZmEtY2hldnJvbi1kb3duOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNzhcXFwiO1xcbn1cXG4uZmEtcmV0d2VldDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDc5XFxcIjtcXG59XFxuLmZhLXNob3BwaW5nLWNhcnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3QVxcXCI7XFxufVxcbi5mYS1mb2xkZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3QlxcXCI7XFxufVxcbi5mYS1mb2xkZXItb3BlbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDdDXFxcIjtcXG59XFxuLmZhLWFycm93cy12OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwN0RcXFwiO1xcbn1cXG4uZmEtYXJyb3dzLWg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3RVxcXCI7XFxufVxcbi5mYS1iYXItY2hhcnQtbzpiZWZvcmUsXFxuLmZhLWJhci1jaGFydDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDgwXFxcIjtcXG59XFxuLmZhLXR3aXR0ZXItc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwODFcXFwiO1xcbn1cXG4uZmEtZmFjZWJvb2stc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwODJcXFwiO1xcbn1cXG4uZmEtY2FtZXJhLXJldHJvOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwODNcXFwiO1xcbn1cXG4uZmEta2V5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwODRcXFwiO1xcbn1cXG4uZmEtZ2VhcnM6YmVmb3JlLFxcbi5mYS1jb2dzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwODVcXFwiO1xcbn1cXG4uZmEtY29tbWVudHM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA4NlxcXCI7XFxufVxcbi5mYS10aHVtYnMtby11cDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDg3XFxcIjtcXG59XFxuLmZhLXRodW1icy1vLWRvd246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA4OFxcXCI7XFxufVxcbi5mYS1zdGFyLWhhbGY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA4OVxcXCI7XFxufVxcbi5mYS1oZWFydC1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwOEFcXFwiO1xcbn1cXG4uZmEtc2lnbi1vdXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA4QlxcXCI7XFxufVxcbi5mYS1saW5rZWRpbi1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA4Q1xcXCI7XFxufVxcbi5mYS10aHVtYi10YWNrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwOERcXFwiO1xcbn1cXG4uZmEtZXh0ZXJuYWwtbGluazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDhFXFxcIjtcXG59XFxuLmZhLXNpZ24taW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA5MFxcXCI7XFxufVxcbi5mYS10cm9waHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA5MVxcXCI7XFxufVxcbi5mYS1naXRodWItc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwOTJcXFwiO1xcbn1cXG4uZmEtdXBsb2FkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwOTNcXFwiO1xcbn1cXG4uZmEtbGVtb24tbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDk0XFxcIjtcXG59XFxuLmZhLXBob25lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwOTVcXFwiO1xcbn1cXG4uZmEtc3F1YXJlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA5NlxcXCI7XFxufVxcbi5mYS1ib29rbWFyay1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwOTdcXFwiO1xcbn1cXG4uZmEtcGhvbmUtc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwOThcXFwiO1xcbn1cXG4uZmEtdHdpdHRlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDk5XFxcIjtcXG59XFxuLmZhLWZhY2Vib29rLWY6YmVmb3JlLFxcbi5mYS1mYWNlYm9vazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDlBXFxcIjtcXG59XFxuLmZhLWdpdGh1YjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDlCXFxcIjtcXG59XFxuLmZhLXVubG9jazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDlDXFxcIjtcXG59XFxuLmZhLWNyZWRpdC1jYXJkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwOURcXFwiO1xcbn1cXG4uZmEtZmVlZDpiZWZvcmUsXFxuLmZhLXJzczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDlFXFxcIjtcXG59XFxuLmZhLWhkZC1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQTBcXFwiO1xcbn1cXG4uZmEtYnVsbGhvcm46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBMVxcXCI7XFxufVxcbi5mYS1iZWxsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRjNcXFwiO1xcbn1cXG4uZmEtY2VydGlmaWNhdGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBM1xcXCI7XFxufVxcbi5mYS1oYW5kLW8tcmlnaHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBNFxcXCI7XFxufVxcbi5mYS1oYW5kLW8tbGVmdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEE1XFxcIjtcXG59XFxuLmZhLWhhbmQtby11cDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEE2XFxcIjtcXG59XFxuLmZhLWhhbmQtby1kb3duOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQTdcXFwiO1xcbn1cXG4uZmEtYXJyb3ctY2lyY2xlLWxlZnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBOFxcXCI7XFxufVxcbi5mYS1hcnJvdy1jaXJjbGUtcmlnaHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBOVxcXCI7XFxufVxcbi5mYS1hcnJvdy1jaXJjbGUtdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBQVxcXCI7XFxufVxcbi5mYS1hcnJvdy1jaXJjbGUtZG93bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEFCXFxcIjtcXG59XFxuLmZhLWdsb2JlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQUNcXFwiO1xcbn1cXG4uZmEtd3JlbmNoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQURcXFwiO1xcbn1cXG4uZmEtdGFza3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBRVxcXCI7XFxufVxcbi5mYS1maWx0ZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBCMFxcXCI7XFxufVxcbi5mYS1icmllZmNhc2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBCMVxcXCI7XFxufVxcbi5mYS1hcnJvd3MtYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQjJcXFwiO1xcbn1cXG4uZmEtZ3JvdXA6YmVmb3JlLFxcbi5mYS11c2VyczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEMwXFxcIjtcXG59XFxuLmZhLWNoYWluOmJlZm9yZSxcXG4uZmEtbGluazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEMxXFxcIjtcXG59XFxuLmZhLWNsb3VkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzJcXFwiO1xcbn1cXG4uZmEtZmxhc2s6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDM1xcXCI7XFxufVxcbi5mYS1jdXQ6YmVmb3JlLFxcbi5mYS1zY2lzc29yczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEM0XFxcIjtcXG59XFxuLmZhLWNvcHk6YmVmb3JlLFxcbi5mYS1maWxlcy1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzVcXFwiO1xcbn1cXG4uZmEtcGFwZXJjbGlwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzZcXFwiO1xcbn1cXG4uZmEtc2F2ZTpiZWZvcmUsXFxuLmZhLWZsb3BweS1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzdcXFwiO1xcbn1cXG4uZmEtc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzhcXFwiO1xcbn1cXG4uZmEtbmF2aWNvbjpiZWZvcmUsXFxuLmZhLXJlb3JkZXI6YmVmb3JlLFxcbi5mYS1iYXJzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzlcXFwiO1xcbn1cXG4uZmEtbGlzdC11bDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMENBXFxcIjtcXG59XFxuLmZhLWxpc3Qtb2w6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDQlxcXCI7XFxufVxcbi5mYS1zdHJpa2V0aHJvdWdoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQ0NcXFwiO1xcbn1cXG4uZmEtdW5kZXJsaW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQ0RcXFwiO1xcbn1cXG4uZmEtdGFibGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDRVxcXCI7XFxufVxcbi5mYS1tYWdpYzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEQwXFxcIjtcXG59XFxuLmZhLXRydWNrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRDFcXFwiO1xcbn1cXG4uZmEtcGludGVyZXN0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRDJcXFwiO1xcbn1cXG4uZmEtcGludGVyZXN0LXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEQzXFxcIjtcXG59XFxuLmZhLWdvb2dsZS1wbHVzLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEQ0XFxcIjtcXG59XFxuLmZhLWdvb2dsZS1wbHVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRDVcXFwiO1xcbn1cXG4uZmEtbW9uZXk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBENlxcXCI7XFxufVxcbi5mYS1jYXJldC1kb3duOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRDdcXFwiO1xcbn1cXG4uZmEtY2FyZXQtdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBEOFxcXCI7XFxufVxcbi5mYS1jYXJldC1sZWZ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRDlcXFwiO1xcbn1cXG4uZmEtY2FyZXQtcmlnaHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBEQVxcXCI7XFxufVxcbi5mYS1jb2x1bW5zOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwREJcXFwiO1xcbn1cXG4uZmEtdW5zb3J0ZWQ6YmVmb3JlLFxcbi5mYS1zb3J0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRENcXFwiO1xcbn1cXG4uZmEtc29ydC1kb3duOmJlZm9yZSxcXG4uZmEtc29ydC1kZXNjOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRERcXFwiO1xcbn1cXG4uZmEtc29ydC11cDpiZWZvcmUsXFxuLmZhLXNvcnQtYXNjOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwREVcXFwiO1xcbn1cXG4uZmEtZW52ZWxvcGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFMFxcXCI7XFxufVxcbi5mYS1saW5rZWRpbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEUxXFxcIjtcXG59XFxuLmZhLXJvdGF0ZS1sZWZ0OmJlZm9yZSxcXG4uZmEtdW5kbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEUyXFxcIjtcXG59XFxuLmZhLWxlZ2FsOmJlZm9yZSxcXG4uZmEtZ2F2ZWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFM1xcXCI7XFxufVxcbi5mYS1kYXNoYm9hcmQ6YmVmb3JlLFxcbi5mYS10YWNob21ldGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRTRcXFwiO1xcbn1cXG4uZmEtY29tbWVudC1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRTVcXFwiO1xcbn1cXG4uZmEtY29tbWVudHMtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEU2XFxcIjtcXG59XFxuLmZhLWZsYXNoOmJlZm9yZSxcXG4uZmEtYm9sdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEU3XFxcIjtcXG59XFxuLmZhLXNpdGVtYXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFOFxcXCI7XFxufVxcbi5mYS11bWJyZWxsYTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEU5XFxcIjtcXG59XFxuLmZhLXBhc3RlOmJlZm9yZSxcXG4uZmEtY2xpcGJvYXJkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRUFcXFwiO1xcbn1cXG4uZmEtbGlnaHRidWxiLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFQlxcXCI7XFxufVxcbi5mYS1leGNoYW5nZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEVDXFxcIjtcXG59XFxuLmZhLWNsb3VkLWRvd25sb2FkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRURcXFwiO1xcbn1cXG4uZmEtY2xvdWQtdXBsb2FkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRUVcXFwiO1xcbn1cXG4uZmEtdXNlci1tZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEYwXFxcIjtcXG59XFxuLmZhLXN0ZXRob3Njb3BlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRjFcXFwiO1xcbn1cXG4uZmEtc3VpdGNhc2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGMlxcXCI7XFxufVxcbi5mYS1iZWxsLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBMlxcXCI7XFxufVxcbi5mYS1jb2ZmZWU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGNFxcXCI7XFxufVxcbi5mYS1jdXRsZXJ5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRjVcXFwiO1xcbn1cXG4uZmEtZmlsZS10ZXh0LW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGNlxcXCI7XFxufVxcbi5mYS1idWlsZGluZy1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRjdcXFwiO1xcbn1cXG4uZmEtaG9zcGl0YWwtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEY4XFxcIjtcXG59XFxuLmZhLWFtYnVsYW5jZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEY5XFxcIjtcXG59XFxuLmZhLW1lZGtpdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEZBXFxcIjtcXG59XFxuLmZhLWZpZ2h0ZXItamV0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRkJcXFwiO1xcbn1cXG4uZmEtYmVlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEZDXFxcIjtcXG59XFxuLmZhLWgtc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRkRcXFwiO1xcbn1cXG4uZmEtcGx1cy1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGRVxcXCI7XFxufVxcbi5mYS1hbmdsZS1kb3VibGUtbGVmdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTAwXFxcIjtcXG59XFxuLmZhLWFuZ2xlLWRvdWJsZS1yaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTAxXFxcIjtcXG59XFxuLmZhLWFuZ2xlLWRvdWJsZS11cDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTAyXFxcIjtcXG59XFxuLmZhLWFuZ2xlLWRvdWJsZS1kb3duOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMDNcXFwiO1xcbn1cXG4uZmEtYW5nbGUtbGVmdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTA0XFxcIjtcXG59XFxuLmZhLWFuZ2xlLXJpZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMDVcXFwiO1xcbn1cXG4uZmEtYW5nbGUtdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwNlxcXCI7XFxufVxcbi5mYS1hbmdsZS1kb3duOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMDdcXFwiO1xcbn1cXG4uZmEtZGVza3RvcDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTA4XFxcIjtcXG59XFxuLmZhLWxhcHRvcDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTA5XFxcIjtcXG59XFxuLmZhLXRhYmxldDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTBBXFxcIjtcXG59XFxuLmZhLW1vYmlsZS1waG9uZTpiZWZvcmUsXFxuLmZhLW1vYmlsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTBCXFxcIjtcXG59XFxuLmZhLWNpcmNsZS1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMENcXFwiO1xcbn1cXG4uZmEtcXVvdGUtbGVmdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTBEXFxcIjtcXG59XFxuLmZhLXF1b3RlLXJpZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMEVcXFwiO1xcbn1cXG4uZmEtc3Bpbm5lcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTEwXFxcIjtcXG59XFxuLmZhLWNpcmNsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTExXFxcIjtcXG59XFxuLmZhLW1haWwtcmVwbHk6YmVmb3JlLFxcbi5mYS1yZXBseTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTEyXFxcIjtcXG59XFxuLmZhLWdpdGh1Yi1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExM1xcXCI7XFxufVxcbi5mYS1mb2xkZXItbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTE0XFxcIjtcXG59XFxuLmZhLWZvbGRlci1vcGVuLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExNVxcXCI7XFxufVxcbi5mYS1zbWlsZS1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMThcXFwiO1xcbn1cXG4uZmEtZnJvd24tbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTE5XFxcIjtcXG59XFxuLmZhLW1laC1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMUFcXFwiO1xcbn1cXG4uZmEtZ2FtZXBhZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTFCXFxcIjtcXG59XFxuLmZhLWtleWJvYXJkLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExQ1xcXCI7XFxufVxcbi5mYS1mbGFnLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExRFxcXCI7XFxufVxcbi5mYS1mbGFnLWNoZWNrZXJlZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTFFXFxcIjtcXG59XFxuLmZhLXRlcm1pbmFsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjBcXFwiO1xcbn1cXG4uZmEtY29kZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTIxXFxcIjtcXG59XFxuLmZhLW1haWwtcmVwbHktYWxsOmJlZm9yZSxcXG4uZmEtcmVwbHktYWxsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjJcXFwiO1xcbn1cXG4uZmEtc3Rhci1oYWxmLWVtcHR5OmJlZm9yZSxcXG4uZmEtc3Rhci1oYWxmLWZ1bGw6YmVmb3JlLFxcbi5mYS1zdGFyLWhhbGYtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTIzXFxcIjtcXG59XFxuLmZhLWxvY2F0aW9uLWFycm93OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjRcXFwiO1xcbn1cXG4uZmEtY3JvcDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTI1XFxcIjtcXG59XFxuLmZhLWNvZGUtZm9yazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTI2XFxcIjtcXG59XFxuLmZhLXVubGluazpiZWZvcmUsXFxuLmZhLWNoYWluLWJyb2tlbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTI3XFxcIjtcXG59XFxuLmZhLXF1ZXN0aW9uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjhcXFwiO1xcbn1cXG4uZmEtaW5mbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTI5XFxcIjtcXG59XFxuLmZhLWV4Y2xhbWF0aW9uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMkFcXFwiO1xcbn1cXG4uZmEtc3VwZXJzY3JpcHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyQlxcXCI7XFxufVxcbi5mYS1zdWJzY3JpcHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyQ1xcXCI7XFxufVxcbi5mYS1lcmFzZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyRFxcXCI7XFxufVxcbi5mYS1wdXp6bGUtcGllY2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyRVxcXCI7XFxufVxcbi5mYS1taWNyb3Bob25lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMzBcXFwiO1xcbn1cXG4uZmEtbWljcm9waG9uZS1zbGFzaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTMxXFxcIjtcXG59XFxuLmZhLXNoaWVsZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTMyXFxcIjtcXG59XFxuLmZhLWNhbGVuZGFyLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEzM1xcXCI7XFxufVxcbi5mYS1maXJlLWV4dGluZ3Vpc2hlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTM0XFxcIjtcXG59XFxuLmZhLXJvY2tldDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTM1XFxcIjtcXG59XFxuLmZhLW1heGNkbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTM2XFxcIjtcXG59XFxuLmZhLWNoZXZyb24tY2lyY2xlLWxlZnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEzN1xcXCI7XFxufVxcbi5mYS1jaGV2cm9uLWNpcmNsZS1yaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTM4XFxcIjtcXG59XFxuLmZhLWNoZXZyb24tY2lyY2xlLXVwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMzlcXFwiO1xcbn1cXG4uZmEtY2hldnJvbi1jaXJjbGUtZG93bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTNBXFxcIjtcXG59XFxuLmZhLWh0bWw1OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxM0JcXFwiO1xcbn1cXG4uZmEtY3NzMzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTNDXFxcIjtcXG59XFxuLmZhLWFuY2hvcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTNEXFxcIjtcXG59XFxuLmZhLXVubG9jay1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEzRVxcXCI7XFxufVxcbi5mYS1idWxsc2V5ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTQwXFxcIjtcXG59XFxuLmZhLWVsbGlwc2lzLWg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE0MVxcXCI7XFxufVxcbi5mYS1lbGxpcHNpcy12OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNDJcXFwiO1xcbn1cXG4uZmEtcnNzLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTQzXFxcIjtcXG59XFxuLmZhLXBsYXktY2lyY2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNDRcXFwiO1xcbn1cXG4uZmEtdGlja2V0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNDVcXFwiO1xcbn1cXG4uZmEtbWludXMtc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNDZcXFwiO1xcbn1cXG4uZmEtbWludXMtc3F1YXJlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE0N1xcXCI7XFxufVxcbi5mYS1sZXZlbC11cDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTQ4XFxcIjtcXG59XFxuLmZhLWxldmVsLWRvd246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE0OVxcXCI7XFxufVxcbi5mYS1jaGVjay1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE0QVxcXCI7XFxufVxcbi5mYS1wZW5jaWwtc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNEJcXFwiO1xcbn1cXG4uZmEtZXh0ZXJuYWwtbGluay1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE0Q1xcXCI7XFxufVxcbi5mYS1zaGFyZS1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE0RFxcXCI7XFxufVxcbi5mYS1jb21wYXNzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNEVcXFwiO1xcbn1cXG4uZmEtdG9nZ2xlLWRvd246YmVmb3JlLFxcbi5mYS1jYXJldC1zcXVhcmUtby1kb3duOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNTBcXFwiO1xcbn1cXG4uZmEtdG9nZ2xlLXVwOmJlZm9yZSxcXG4uZmEtY2FyZXQtc3F1YXJlLW8tdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE1MVxcXCI7XFxufVxcbi5mYS10b2dnbGUtcmlnaHQ6YmVmb3JlLFxcbi5mYS1jYXJldC1zcXVhcmUtby1yaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTUyXFxcIjtcXG59XFxuLmZhLWV1cm86YmVmb3JlLFxcbi5mYS1ldXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE1M1xcXCI7XFxufVxcbi5mYS1nYnA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE1NFxcXCI7XFxufVxcbi5mYS1kb2xsYXI6YmVmb3JlLFxcbi5mYS11c2Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE1NVxcXCI7XFxufVxcbi5mYS1ydXBlZTpiZWZvcmUsXFxuLmZhLWlucjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTU2XFxcIjtcXG59XFxuLmZhLWNueTpiZWZvcmUsXFxuLmZhLXJtYjpiZWZvcmUsXFxuLmZhLXllbjpiZWZvcmUsXFxuLmZhLWpweTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTU3XFxcIjtcXG59XFxuLmZhLXJ1YmxlOmJlZm9yZSxcXG4uZmEtcm91YmxlOmJlZm9yZSxcXG4uZmEtcnViOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNThcXFwiO1xcbn1cXG4uZmEtd29uOmJlZm9yZSxcXG4uZmEta3J3OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNTlcXFwiO1xcbn1cXG4uZmEtYml0Y29pbjpiZWZvcmUsXFxuLmZhLWJ0YzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTVBXFxcIjtcXG59XFxuLmZhLWZpbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE1QlxcXCI7XFxufVxcbi5mYS1maWxlLXRleHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE1Q1xcXCI7XFxufVxcbi5mYS1zb3J0LWFscGhhLWFzYzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTVEXFxcIjtcXG59XFxuLmZhLXNvcnQtYWxwaGEtZGVzYzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTVFXFxcIjtcXG59XFxuLmZhLXNvcnQtYW1vdW50LWFzYzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTYwXFxcIjtcXG59XFxuLmZhLXNvcnQtYW1vdW50LWRlc2M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE2MVxcXCI7XFxufVxcbi5mYS1zb3J0LW51bWVyaWMtYXNjOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNjJcXFwiO1xcbn1cXG4uZmEtc29ydC1udW1lcmljLWRlc2M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE2M1xcXCI7XFxufVxcbi5mYS10aHVtYnMtdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE2NFxcXCI7XFxufVxcbi5mYS10aHVtYnMtZG93bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTY1XFxcIjtcXG59XFxuLmZhLXlvdXR1YmUtc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNjZcXFwiO1xcbn1cXG4uZmEteW91dHViZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTY3XFxcIjtcXG59XFxuLmZhLXhpbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE2OFxcXCI7XFxufVxcbi5mYS14aW5nLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTY5XFxcIjtcXG59XFxuLmZhLXlvdXR1YmUtcGxheTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTZBXFxcIjtcXG59XFxuLmZhLWRyb3Bib3g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE2QlxcXCI7XFxufVxcbi5mYS1zdGFjay1vdmVyZmxvdzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTZDXFxcIjtcXG59XFxuLmZhLWluc3RhZ3JhbTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTZEXFxcIjtcXG59XFxuLmZhLWZsaWNrcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTZFXFxcIjtcXG59XFxuLmZhLWFkbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTcwXFxcIjtcXG59XFxuLmZhLWJpdGJ1Y2tldDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTcxXFxcIjtcXG59XFxuLmZhLWJpdGJ1Y2tldC1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE3MlxcXCI7XFxufVxcbi5mYS10dW1ibHI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE3M1xcXCI7XFxufVxcbi5mYS10dW1ibHItc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNzRcXFwiO1xcbn1cXG4uZmEtbG9uZy1hcnJvdy1kb3duOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNzVcXFwiO1xcbn1cXG4uZmEtbG9uZy1hcnJvdy11cDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTc2XFxcIjtcXG59XFxuLmZhLWxvbmctYXJyb3ctbGVmdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTc3XFxcIjtcXG59XFxuLmZhLWxvbmctYXJyb3ctcmlnaHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE3OFxcXCI7XFxufVxcbi5mYS1hcHBsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTc5XFxcIjtcXG59XFxuLmZhLXdpbmRvd3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE3QVxcXCI7XFxufVxcbi5mYS1hbmRyb2lkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxN0JcXFwiO1xcbn1cXG4uZmEtbGludXg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE3Q1xcXCI7XFxufVxcbi5mYS1kcmliYmJsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTdEXFxcIjtcXG59XFxuLmZhLXNreXBlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxN0VcXFwiO1xcbn1cXG4uZmEtZm91cnNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTgwXFxcIjtcXG59XFxuLmZhLXRyZWxsbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTgxXFxcIjtcXG59XFxuLmZhLWZlbWFsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTgyXFxcIjtcXG59XFxuLmZhLW1hbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE4M1xcXCI7XFxufVxcbi5mYS1naXR0aXA6YmVmb3JlLFxcbi5mYS1ncmF0aXBheTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTg0XFxcIjtcXG59XFxuLmZhLXN1bi1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxODVcXFwiO1xcbn1cXG4uZmEtbW9vbi1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxODZcXFwiO1xcbn1cXG4uZmEtYXJjaGl2ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTg3XFxcIjtcXG59XFxuLmZhLWJ1ZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTg4XFxcIjtcXG59XFxuLmZhLXZrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxODlcXFwiO1xcbn1cXG4uZmEtd2VpYm86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE4QVxcXCI7XFxufVxcbi5mYS1yZW5yZW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE4QlxcXCI7XFxufVxcbi5mYS1wYWdlbGluZXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE4Q1xcXCI7XFxufVxcbi5mYS1zdGFjay1leGNoYW5nZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMThEXFxcIjtcXG59XFxuLmZhLWFycm93LWNpcmNsZS1vLXJpZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxOEVcXFwiO1xcbn1cXG4uZmEtYXJyb3ctY2lyY2xlLW8tbGVmdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTkwXFxcIjtcXG59XFxuLmZhLXRvZ2dsZS1sZWZ0OmJlZm9yZSxcXG4uZmEtY2FyZXQtc3F1YXJlLW8tbGVmdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTkxXFxcIjtcXG59XFxuLmZhLWRvdC1jaXJjbGUtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTkyXFxcIjtcXG59XFxuLmZhLXdoZWVsY2hhaXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE5M1xcXCI7XFxufVxcbi5mYS12aW1lby1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE5NFxcXCI7XFxufVxcbi5mYS10dXJraXNoLWxpcmE6YmVmb3JlLFxcbi5mYS10cnk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE5NVxcXCI7XFxufVxcbi5mYS1wbHVzLXNxdWFyZS1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxOTZcXFwiO1xcbn1cXG4uZmEtc3BhY2Utc2h1dHRsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTk3XFxcIjtcXG59XFxuLmZhLXNsYWNrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxOThcXFwiO1xcbn1cXG4uZmEtZW52ZWxvcGUtc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxOTlcXFwiO1xcbn1cXG4uZmEtd29yZHByZXNzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxOUFcXFwiO1xcbn1cXG4uZmEtb3BlbmlkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxOUJcXFwiO1xcbn1cXG4uZmEtaW5zdGl0dXRpb246YmVmb3JlLFxcbi5mYS1iYW5rOmJlZm9yZSxcXG4uZmEtdW5pdmVyc2l0eTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTlDXFxcIjtcXG59XFxuLmZhLW1vcnRhci1ib2FyZDpiZWZvcmUsXFxuLmZhLWdyYWR1YXRpb24tY2FwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxOURcXFwiO1xcbn1cXG4uZmEteWFob286YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE5RVxcXCI7XFxufVxcbi5mYS1nb29nbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFBMFxcXCI7XFxufVxcbi5mYS1yZWRkaXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFBMVxcXCI7XFxufVxcbi5mYS1yZWRkaXQtc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxQTJcXFwiO1xcbn1cXG4uZmEtc3R1bWJsZXVwb24tY2lyY2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxQTNcXFwiO1xcbn1cXG4uZmEtc3R1bWJsZXVwb246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFBNFxcXCI7XFxufVxcbi5mYS1kZWxpY2lvdXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFBNVxcXCI7XFxufVxcbi5mYS1kaWdnOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxQTZcXFwiO1xcbn1cXG4uZmEtcGllZC1waXBlci1wcDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUE3XFxcIjtcXG59XFxuLmZhLXBpZWQtcGlwZXItYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxQThcXFwiO1xcbn1cXG4uZmEtZHJ1cGFsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxQTlcXFwiO1xcbn1cXG4uZmEtam9vbWxhOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxQUFcXFwiO1xcbn1cXG4uZmEtbGFuZ3VhZ2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFBQlxcXCI7XFxufVxcbi5mYS1mYXg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFBQ1xcXCI7XFxufVxcbi5mYS1idWlsZGluZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUFEXFxcIjtcXG59XFxuLmZhLWNoaWxkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxQUVcXFwiO1xcbn1cXG4uZmEtcGF3OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxQjBcXFwiO1xcbn1cXG4uZmEtc3Bvb246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFCMVxcXCI7XFxufVxcbi5mYS1jdWJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxQjJcXFwiO1xcbn1cXG4uZmEtY3ViZXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFCM1xcXCI7XFxufVxcbi5mYS1iZWhhbmNlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxQjRcXFwiO1xcbn1cXG4uZmEtYmVoYW5jZS1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFCNVxcXCI7XFxufVxcbi5mYS1zdGVhbTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUI2XFxcIjtcXG59XFxuLmZhLXN0ZWFtLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUI3XFxcIjtcXG59XFxuLmZhLXJlY3ljbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFCOFxcXCI7XFxufVxcbi5mYS1hdXRvbW9iaWxlOmJlZm9yZSxcXG4uZmEtY2FyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxQjlcXFwiO1xcbn1cXG4uZmEtY2FiOmJlZm9yZSxcXG4uZmEtdGF4aTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUJBXFxcIjtcXG59XFxuLmZhLXRyZWU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFCQlxcXCI7XFxufVxcbi5mYS1zcG90aWZ5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxQkNcXFwiO1xcbn1cXG4uZmEtZGV2aWFudGFydDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUJEXFxcIjtcXG59XFxuLmZhLXNvdW5kY2xvdWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFCRVxcXCI7XFxufVxcbi5mYS1kYXRhYmFzZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUMwXFxcIjtcXG59XFxuLmZhLWZpbGUtcGRmLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFDMVxcXCI7XFxufVxcbi5mYS1maWxlLXdvcmQtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUMyXFxcIjtcXG59XFxuLmZhLWZpbGUtZXhjZWwtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUMzXFxcIjtcXG59XFxuLmZhLWZpbGUtcG93ZXJwb2ludC1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxQzRcXFwiO1xcbn1cXG4uZmEtZmlsZS1waG90by1vOmJlZm9yZSxcXG4uZmEtZmlsZS1waWN0dXJlLW86YmVmb3JlLFxcbi5mYS1maWxlLWltYWdlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFDNVxcXCI7XFxufVxcbi5mYS1maWxlLXppcC1vOmJlZm9yZSxcXG4uZmEtZmlsZS1hcmNoaXZlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFDNlxcXCI7XFxufVxcbi5mYS1maWxlLXNvdW5kLW86YmVmb3JlLFxcbi5mYS1maWxlLWF1ZGlvLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFDN1xcXCI7XFxufVxcbi5mYS1maWxlLW1vdmllLW86YmVmb3JlLFxcbi5mYS1maWxlLXZpZGVvLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFDOFxcXCI7XFxufVxcbi5mYS1maWxlLWNvZGUtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUM5XFxcIjtcXG59XFxuLmZhLXZpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFDQVxcXCI7XFxufVxcbi5mYS1jb2RlcGVuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxQ0JcXFwiO1xcbn1cXG4uZmEtanNmaWRkbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFDQ1xcXCI7XFxufVxcbi5mYS1saWZlLWJvdXk6YmVmb3JlLFxcbi5mYS1saWZlLWJ1b3k6YmVmb3JlLFxcbi5mYS1saWZlLXNhdmVyOmJlZm9yZSxcXG4uZmEtc3VwcG9ydDpiZWZvcmUsXFxuLmZhLWxpZmUtcmluZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUNEXFxcIjtcXG59XFxuLmZhLWNpcmNsZS1vLW5vdGNoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxQ0VcXFwiO1xcbn1cXG4uZmEtcmE6YmVmb3JlLFxcbi5mYS1yZXNpc3RhbmNlOmJlZm9yZSxcXG4uZmEtcmViZWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFEMFxcXCI7XFxufVxcbi5mYS1nZTpiZWZvcmUsXFxuLmZhLWVtcGlyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUQxXFxcIjtcXG59XFxuLmZhLWdpdC1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFEMlxcXCI7XFxufVxcbi5mYS1naXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFEM1xcXCI7XFxufVxcbi5mYS15LWNvbWJpbmF0b3Itc3F1YXJlOmJlZm9yZSxcXG4uZmEteWMtc3F1YXJlOmJlZm9yZSxcXG4uZmEtaGFja2VyLW5ld3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFENFxcXCI7XFxufVxcbi5mYS10ZW5jZW50LXdlaWJvOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRDVcXFwiO1xcbn1cXG4uZmEtcXE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFENlxcXCI7XFxufVxcbi5mYS13ZWNoYXQ6YmVmb3JlLFxcbi5mYS13ZWl4aW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFEN1xcXCI7XFxufVxcbi5mYS1zZW5kOmJlZm9yZSxcXG4uZmEtcGFwZXItcGxhbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFEOFxcXCI7XFxufVxcbi5mYS1zZW5kLW86YmVmb3JlLFxcbi5mYS1wYXBlci1wbGFuZS1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRDlcXFwiO1xcbn1cXG4uZmEtaGlzdG9yeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMURBXFxcIjtcXG59XFxuLmZhLWNpcmNsZS10aGluOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxREJcXFwiO1xcbn1cXG4uZmEtaGVhZGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRENcXFwiO1xcbn1cXG4uZmEtcGFyYWdyYXBoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRERcXFwiO1xcbn1cXG4uZmEtc2xpZGVyczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMURFXFxcIjtcXG59XFxuLmZhLXNoYXJlLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUUwXFxcIjtcXG59XFxuLmZhLXNoYXJlLWFsdC1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFFMVxcXCI7XFxufVxcbi5mYS1ib21iOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRTJcXFwiO1xcbn1cXG4uZmEtc29jY2VyLWJhbGwtbzpiZWZvcmUsXFxuLmZhLWZ1dGJvbC1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRTNcXFwiO1xcbn1cXG4uZmEtdHR5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRTRcXFwiO1xcbn1cXG4uZmEtYmlub2N1bGFyczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUU1XFxcIjtcXG59XFxuLmZhLXBsdWc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFFNlxcXCI7XFxufVxcbi5mYS1zbGlkZXNoYXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRTdcXFwiO1xcbn1cXG4uZmEtdHdpdGNoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRThcXFwiO1xcbn1cXG4uZmEteWVscDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUU5XFxcIjtcXG59XFxuLmZhLW5ld3NwYXBlci1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRUFcXFwiO1xcbn1cXG4uZmEtd2lmaTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUVCXFxcIjtcXG59XFxuLmZhLWNhbGN1bGF0b3I6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFFQ1xcXCI7XFxufVxcbi5mYS1wYXlwYWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFFRFxcXCI7XFxufVxcbi5mYS1nb29nbGUtd2FsbGV0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRUVcXFwiO1xcbn1cXG4uZmEtY2MtdmlzYTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUYwXFxcIjtcXG59XFxuLmZhLWNjLW1hc3RlcmNhcmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFGMVxcXCI7XFxufVxcbi5mYS1jYy1kaXNjb3ZlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUYyXFxcIjtcXG59XFxuLmZhLWNjLWFtZXg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFGM1xcXCI7XFxufVxcbi5mYS1jYy1wYXlwYWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFGNFxcXCI7XFxufVxcbi5mYS1jYy1zdHJpcGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFGNVxcXCI7XFxufVxcbi5mYS1iZWxsLXNsYXNoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRjZcXFwiO1xcbn1cXG4uZmEtYmVsbC1zbGFzaC1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRjdcXFwiO1xcbn1cXG4uZmEtdHJhc2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFGOFxcXCI7XFxufVxcbi5mYS1jb3B5cmlnaHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFGOVxcXCI7XFxufVxcbi5mYS1hdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUZBXFxcIjtcXG59XFxuLmZhLWV5ZWRyb3BwZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFGQlxcXCI7XFxufVxcbi5mYS1wYWludC1icnVzaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUZDXFxcIjtcXG59XFxuLmZhLWJpcnRoZGF5LWNha2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFGRFxcXCI7XFxufVxcbi5mYS1hcmVhLWNoYXJ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRkVcXFwiO1xcbn1cXG4uZmEtcGllLWNoYXJ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMDBcXFwiO1xcbn1cXG4uZmEtbGluZS1jaGFydDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjAxXFxcIjtcXG59XFxuLmZhLWxhc3RmbTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjAyXFxcIjtcXG59XFxuLmZhLWxhc3RmbS1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIwM1xcXCI7XFxufVxcbi5mYS10b2dnbGUtb2ZmOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMDRcXFwiO1xcbn1cXG4uZmEtdG9nZ2xlLW9uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMDVcXFwiO1xcbn1cXG4uZmEtYmljeWNsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjA2XFxcIjtcXG59XFxuLmZhLWJ1czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjA3XFxcIjtcXG59XFxuLmZhLWlveGhvc3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIwOFxcXCI7XFxufVxcbi5mYS1hbmdlbGxpc3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIwOVxcXCI7XFxufVxcbi5mYS1jYzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjBBXFxcIjtcXG59XFxuLmZhLXNoZWtlbDpiZWZvcmUsXFxuLmZhLXNoZXFlbDpiZWZvcmUsXFxuLmZhLWlsczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjBCXFxcIjtcXG59XFxuLmZhLW1lYW5wYXRoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMENcXFwiO1xcbn1cXG4uZmEtYnV5c2VsbGFkczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjBEXFxcIjtcXG59XFxuLmZhLWNvbm5lY3RkZXZlbG9wOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMEVcXFwiO1xcbn1cXG4uZmEtZGFzaGN1YmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIxMFxcXCI7XFxufVxcbi5mYS1mb3J1bWJlZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjExXFxcIjtcXG59XFxuLmZhLWxlYW5wdWI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIxMlxcXCI7XFxufVxcbi5mYS1zZWxsc3k6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIxM1xcXCI7XFxufVxcbi5mYS1zaGlydHNpbmJ1bGs6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIxNFxcXCI7XFxufVxcbi5mYS1zaW1wbHlidWlsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjE1XFxcIjtcXG59XFxuLmZhLXNreWF0bGFzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMTZcXFwiO1xcbn1cXG4uZmEtY2FydC1wbHVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMTdcXFwiO1xcbn1cXG4uZmEtY2FydC1hcnJvdy1kb3duOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMThcXFwiO1xcbn1cXG4uZmEtZGlhbW9uZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjE5XFxcIjtcXG59XFxuLmZhLXNoaXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIxQVxcXCI7XFxufVxcbi5mYS11c2VyLXNlY3JldDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjFCXFxcIjtcXG59XFxuLmZhLW1vdG9yY3ljbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIxQ1xcXCI7XFxufVxcbi5mYS1zdHJlZXQtdmlldzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjFEXFxcIjtcXG59XFxuLmZhLWhlYXJ0YmVhdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjFFXFxcIjtcXG59XFxuLmZhLXZlbnVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMjFcXFwiO1xcbn1cXG4uZmEtbWFyczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjIyXFxcIjtcXG59XFxuLmZhLW1lcmN1cnk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIyM1xcXCI7XFxufVxcbi5mYS1pbnRlcnNleDpiZWZvcmUsXFxuLmZhLXRyYW5zZ2VuZGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMjRcXFwiO1xcbn1cXG4uZmEtdHJhbnNnZW5kZXItYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMjVcXFwiO1xcbn1cXG4uZmEtdmVudXMtZG91YmxlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMjZcXFwiO1xcbn1cXG4uZmEtbWFycy1kb3VibGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIyN1xcXCI7XFxufVxcbi5mYS12ZW51cy1tYXJzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMjhcXFwiO1xcbn1cXG4uZmEtbWFycy1zdHJva2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIyOVxcXCI7XFxufVxcbi5mYS1tYXJzLXN0cm9rZS12OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMkFcXFwiO1xcbn1cXG4uZmEtbWFycy1zdHJva2UtaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjJCXFxcIjtcXG59XFxuLmZhLW5ldXRlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjJDXFxcIjtcXG59XFxuLmZhLWdlbmRlcmxlc3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIyRFxcXCI7XFxufVxcbi5mYS1mYWNlYm9vay1vZmZpY2lhbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjMwXFxcIjtcXG59XFxuLmZhLXBpbnRlcmVzdC1wOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMzFcXFwiO1xcbn1cXG4uZmEtd2hhdHNhcHA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIzMlxcXCI7XFxufVxcbi5mYS1zZXJ2ZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIzM1xcXCI7XFxufVxcbi5mYS11c2VyLXBsdXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIzNFxcXCI7XFxufVxcbi5mYS11c2VyLXRpbWVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMzVcXFwiO1xcbn1cXG4uZmEtaG90ZWw6YmVmb3JlLFxcbi5mYS1iZWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIzNlxcXCI7XFxufVxcbi5mYS12aWFjb2luOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMzdcXFwiO1xcbn1cXG4uZmEtdHJhaW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIzOFxcXCI7XFxufVxcbi5mYS1zdWJ3YXk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIzOVxcXCI7XFxufVxcbi5mYS1tZWRpdW06YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIzQVxcXCI7XFxufVxcbi5mYS15YzpiZWZvcmUsXFxuLmZhLXktY29tYmluYXRvcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjNCXFxcIjtcXG59XFxuLmZhLW9wdGluLW1vbnN0ZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIzQ1xcXCI7XFxufVxcbi5mYS1vcGVuY2FydDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjNEXFxcIjtcXG59XFxuLmZhLWV4cGVkaXRlZHNzbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjNFXFxcIjtcXG59XFxuLmZhLWJhdHRlcnktNDpiZWZvcmUsXFxuLmZhLWJhdHRlcnk6YmVmb3JlLFxcbi5mYS1iYXR0ZXJ5LWZ1bGw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI0MFxcXCI7XFxufVxcbi5mYS1iYXR0ZXJ5LTM6YmVmb3JlLFxcbi5mYS1iYXR0ZXJ5LXRocmVlLXF1YXJ0ZXJzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNDFcXFwiO1xcbn1cXG4uZmEtYmF0dGVyeS0yOmJlZm9yZSxcXG4uZmEtYmF0dGVyeS1oYWxmOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNDJcXFwiO1xcbn1cXG4uZmEtYmF0dGVyeS0xOmJlZm9yZSxcXG4uZmEtYmF0dGVyeS1xdWFydGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNDNcXFwiO1xcbn1cXG4uZmEtYmF0dGVyeS0wOmJlZm9yZSxcXG4uZmEtYmF0dGVyeS1lbXB0eTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjQ0XFxcIjtcXG59XFxuLmZhLW1vdXNlLXBvaW50ZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI0NVxcXCI7XFxufVxcbi5mYS1pLWN1cnNvcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjQ2XFxcIjtcXG59XFxuLmZhLW9iamVjdC1ncm91cDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjQ3XFxcIjtcXG59XFxuLmZhLW9iamVjdC11bmdyb3VwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNDhcXFwiO1xcbn1cXG4uZmEtc3RpY2t5LW5vdGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI0OVxcXCI7XFxufVxcbi5mYS1zdGlja3ktbm90ZS1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNEFcXFwiO1xcbn1cXG4uZmEtY2MtamNiOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNEJcXFwiO1xcbn1cXG4uZmEtY2MtZGluZXJzLWNsdWI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI0Q1xcXCI7XFxufVxcbi5mYS1jbG9uZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjREXFxcIjtcXG59XFxuLmZhLWJhbGFuY2Utc2NhbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI0RVxcXCI7XFxufVxcbi5mYS1ob3VyZ2xhc3MtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjUwXFxcIjtcXG59XFxuLmZhLWhvdXJnbGFzcy0xOmJlZm9yZSxcXG4uZmEtaG91cmdsYXNzLXN0YXJ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNTFcXFwiO1xcbn1cXG4uZmEtaG91cmdsYXNzLTI6YmVmb3JlLFxcbi5mYS1ob3VyZ2xhc3MtaGFsZjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjUyXFxcIjtcXG59XFxuLmZhLWhvdXJnbGFzcy0zOmJlZm9yZSxcXG4uZmEtaG91cmdsYXNzLWVuZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjUzXFxcIjtcXG59XFxuLmZhLWhvdXJnbGFzczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjU0XFxcIjtcXG59XFxuLmZhLWhhbmQtZ3JhYi1vOmJlZm9yZSxcXG4uZmEtaGFuZC1yb2NrLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI1NVxcXCI7XFxufVxcbi5mYS1oYW5kLXN0b3AtbzpiZWZvcmUsXFxuLmZhLWhhbmQtcGFwZXItbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjU2XFxcIjtcXG59XFxuLmZhLWhhbmQtc2Npc3NvcnMtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjU3XFxcIjtcXG59XFxuLmZhLWhhbmQtbGl6YXJkLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI1OFxcXCI7XFxufVxcbi5mYS1oYW5kLXNwb2NrLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI1OVxcXCI7XFxufVxcbi5mYS1oYW5kLXBvaW50ZXItbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjVBXFxcIjtcXG59XFxuLmZhLWhhbmQtcGVhY2UtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjVCXFxcIjtcXG59XFxuLmZhLXRyYWRlbWFyazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjVDXFxcIjtcXG59XFxuLmZhLXJlZ2lzdGVyZWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI1RFxcXCI7XFxufVxcbi5mYS1jcmVhdGl2ZS1jb21tb25zOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNUVcXFwiO1xcbn1cXG4uZmEtZ2c6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI2MFxcXCI7XFxufVxcbi5mYS1nZy1jaXJjbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI2MVxcXCI7XFxufVxcbi5mYS10cmlwYWR2aXNvcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjYyXFxcIjtcXG59XFxuLmZhLW9kbm9rbGFzc25pa2k6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI2M1xcXCI7XFxufVxcbi5mYS1vZG5va2xhc3NuaWtpLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjY0XFxcIjtcXG59XFxuLmZhLWdldC1wb2NrZXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI2NVxcXCI7XFxufVxcbi5mYS13aWtpcGVkaWEtdzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjY2XFxcIjtcXG59XFxuLmZhLXNhZmFyaTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjY3XFxcIjtcXG59XFxuLmZhLWNocm9tZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjY4XFxcIjtcXG59XFxuLmZhLWZpcmVmb3g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI2OVxcXCI7XFxufVxcbi5mYS1vcGVyYTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjZBXFxcIjtcXG59XFxuLmZhLWludGVybmV0LWV4cGxvcmVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNkJcXFwiO1xcbn1cXG4uZmEtdHY6YmVmb3JlLFxcbi5mYS10ZWxldmlzaW9uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNkNcXFwiO1xcbn1cXG4uZmEtY29udGFvOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNkRcXFwiO1xcbn1cXG4uZmEtNTAwcHg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI2RVxcXCI7XFxufVxcbi5mYS1hbWF6b246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI3MFxcXCI7XFxufVxcbi5mYS1jYWxlbmRhci1wbHVzLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI3MVxcXCI7XFxufVxcbi5mYS1jYWxlbmRhci1taW51cy1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNzJcXFwiO1xcbn1cXG4uZmEtY2FsZW5kYXItdGltZXMtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjczXFxcIjtcXG59XFxuLmZhLWNhbGVuZGFyLWNoZWNrLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI3NFxcXCI7XFxufVxcbi5mYS1pbmR1c3RyeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjc1XFxcIjtcXG59XFxuLmZhLW1hcC1waW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI3NlxcXCI7XFxufVxcbi5mYS1tYXAtc2lnbnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI3N1xcXCI7XFxufVxcbi5mYS1tYXAtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjc4XFxcIjtcXG59XFxuLmZhLW1hcDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjc5XFxcIjtcXG59XFxuLmZhLWNvbW1lbnRpbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI3QVxcXCI7XFxufVxcbi5mYS1jb21tZW50aW5nLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI3QlxcXCI7XFxufVxcbi5mYS1ob3V6ejpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjdDXFxcIjtcXG59XFxuLmZhLXZpbWVvOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyN0RcXFwiO1xcbn1cXG4uZmEtYmxhY2stdGllOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyN0VcXFwiO1xcbn1cXG4uZmEtZm9udGljb25zOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyODBcXFwiO1xcbn1cXG4uZmEtcmVkZGl0LWFsaWVuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyODFcXFwiO1xcbn1cXG4uZmEtZWRnZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjgyXFxcIjtcXG59XFxuLmZhLWNyZWRpdC1jYXJkLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjgzXFxcIjtcXG59XFxuLmZhLWNvZGllcGllOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyODRcXFwiO1xcbn1cXG4uZmEtbW9keDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjg1XFxcIjtcXG59XFxuLmZhLWZvcnQtYXdlc29tZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjg2XFxcIjtcXG59XFxuLmZhLXVzYjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjg3XFxcIjtcXG59XFxuLmZhLXByb2R1Y3QtaHVudDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjg4XFxcIjtcXG59XFxuLmZhLW1peGNsb3VkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyODlcXFwiO1xcbn1cXG4uZmEtc2NyaWJkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyOEFcXFwiO1xcbn1cXG4uZmEtcGF1c2UtY2lyY2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyOEJcXFwiO1xcbn1cXG4uZmEtcGF1c2UtY2lyY2xlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI4Q1xcXCI7XFxufVxcbi5mYS1zdG9wLWNpcmNsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjhEXFxcIjtcXG59XFxuLmZhLXN0b3AtY2lyY2xlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI4RVxcXCI7XFxufVxcbi5mYS1zaG9wcGluZy1iYWc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI5MFxcXCI7XFxufVxcbi5mYS1zaG9wcGluZy1iYXNrZXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI5MVxcXCI7XFxufVxcbi5mYS1oYXNodGFnOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyOTJcXFwiO1xcbn1cXG4uZmEtYmx1ZXRvb3RoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyOTNcXFwiO1xcbn1cXG4uZmEtYmx1ZXRvb3RoLWI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI5NFxcXCI7XFxufVxcbi5mYS1wZXJjZW50OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyOTVcXFwiO1xcbn1cXG4uZmEtZ2l0bGFiOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyOTZcXFwiO1xcbn1cXG4uZmEtd3BiZWdpbm5lcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjk3XFxcIjtcXG59XFxuLmZhLXdwZm9ybXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI5OFxcXCI7XFxufVxcbi5mYS1lbnZpcmE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI5OVxcXCI7XFxufVxcbi5mYS11bml2ZXJzYWwtYWNjZXNzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyOUFcXFwiO1xcbn1cXG4uZmEtd2hlZWxjaGFpci1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI5QlxcXCI7XFxufVxcbi5mYS1xdWVzdGlvbi1jaXJjbGUtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjlDXFxcIjtcXG59XFxuLmZhLWJsaW5kOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyOURcXFwiO1xcbn1cXG4uZmEtYXVkaW8tZGVzY3JpcHRpb246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI5RVxcXCI7XFxufVxcbi5mYS12b2x1bWUtY29udHJvbC1waG9uZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkEwXFxcIjtcXG59XFxuLmZhLWJyYWlsbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJBMVxcXCI7XFxufVxcbi5mYS1hc3Npc3RpdmUtbGlzdGVuaW5nLXN5c3RlbXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJBMlxcXCI7XFxufVxcbi5mYS1hc2wtaW50ZXJwcmV0aW5nOmJlZm9yZSxcXG4uZmEtYW1lcmljYW4tc2lnbi1sYW5ndWFnZS1pbnRlcnByZXRpbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJBM1xcXCI7XFxufVxcbi5mYS1kZWFmbmVzczpiZWZvcmUsXFxuLmZhLWhhcmQtb2YtaGVhcmluZzpiZWZvcmUsXFxuLmZhLWRlYWY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJBNFxcXCI7XFxufVxcbi5mYS1nbGlkZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkE1XFxcIjtcXG59XFxuLmZhLWdsaWRlLWc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJBNlxcXCI7XFxufVxcbi5mYS1zaWduaW5nOmJlZm9yZSxcXG4uZmEtc2lnbi1sYW5ndWFnZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkE3XFxcIjtcXG59XFxuLmZhLWxvdy12aXNpb246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJBOFxcXCI7XFxufVxcbi5mYS12aWFkZW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJBOVxcXCI7XFxufVxcbi5mYS12aWFkZW8tc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyQUFcXFwiO1xcbn1cXG4uZmEtc25hcGNoYXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJBQlxcXCI7XFxufVxcbi5mYS1zbmFwY2hhdC1naG9zdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkFDXFxcIjtcXG59XFxuLmZhLXNuYXBjaGF0LXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkFEXFxcIjtcXG59XFxuLmZhLXBpZWQtcGlwZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJBRVxcXCI7XFxufVxcbi5mYS1maXJzdC1vcmRlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkIwXFxcIjtcXG59XFxuLmZhLXlvYXN0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyQjFcXFwiO1xcbn1cXG4uZmEtdGhlbWVpc2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyQjJcXFwiO1xcbn1cXG4uZmEtZ29vZ2xlLXBsdXMtY2lyY2xlOmJlZm9yZSxcXG4uZmEtZ29vZ2xlLXBsdXMtb2ZmaWNpYWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJCM1xcXCI7XFxufVxcbi5mYS1mYTpiZWZvcmUsXFxuLmZhLWZvbnQtYXdlc29tZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkI0XFxcIjtcXG59XFxuLmZhLWhhbmRzaGFrZS1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyQjVcXFwiO1xcbn1cXG4uZmEtZW52ZWxvcGUtb3BlbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkI2XFxcIjtcXG59XFxuLmZhLWVudmVsb3BlLW9wZW4tbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkI3XFxcIjtcXG59XFxuLmZhLWxpbm9kZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkI4XFxcIjtcXG59XFxuLmZhLWFkZHJlc3MtYm9vazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkI5XFxcIjtcXG59XFxuLmZhLWFkZHJlc3MtYm9vay1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyQkFcXFwiO1xcbn1cXG4uZmEtdmNhcmQ6YmVmb3JlLFxcbi5mYS1hZGRyZXNzLWNhcmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJCQlxcXCI7XFxufVxcbi5mYS12Y2FyZC1vOmJlZm9yZSxcXG4uZmEtYWRkcmVzcy1jYXJkLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJCQ1xcXCI7XFxufVxcbi5mYS11c2VyLWNpcmNsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkJEXFxcIjtcXG59XFxuLmZhLXVzZXItY2lyY2xlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJCRVxcXCI7XFxufVxcbi5mYS11c2VyLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJDMFxcXCI7XFxufVxcbi5mYS1pZC1iYWRnZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkMxXFxcIjtcXG59XFxuLmZhLWRyaXZlcnMtbGljZW5zZTpiZWZvcmUsXFxuLmZhLWlkLWNhcmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJDMlxcXCI7XFxufVxcbi5mYS1kcml2ZXJzLWxpY2Vuc2UtbzpiZWZvcmUsXFxuLmZhLWlkLWNhcmQtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkMzXFxcIjtcXG59XFxuLmZhLXF1b3JhOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyQzRcXFwiO1xcbn1cXG4uZmEtZnJlZS1jb2RlLWNhbXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJDNVxcXCI7XFxufVxcbi5mYS10ZWxlZ3JhbTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkM2XFxcIjtcXG59XFxuLmZhLXRoZXJtb21ldGVyLTQ6YmVmb3JlLFxcbi5mYS10aGVybW9tZXRlcjpiZWZvcmUsXFxuLmZhLXRoZXJtb21ldGVyLWZ1bGw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJDN1xcXCI7XFxufVxcbi5mYS10aGVybW9tZXRlci0zOmJlZm9yZSxcXG4uZmEtdGhlcm1vbWV0ZXItdGhyZWUtcXVhcnRlcnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJDOFxcXCI7XFxufVxcbi5mYS10aGVybW9tZXRlci0yOmJlZm9yZSxcXG4uZmEtdGhlcm1vbWV0ZXItaGFsZjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkM5XFxcIjtcXG59XFxuLmZhLXRoZXJtb21ldGVyLTE6YmVmb3JlLFxcbi5mYS10aGVybW9tZXRlci1xdWFydGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyQ0FcXFwiO1xcbn1cXG4uZmEtdGhlcm1vbWV0ZXItMDpiZWZvcmUsXFxuLmZhLXRoZXJtb21ldGVyLWVtcHR5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyQ0JcXFwiO1xcbn1cXG4uZmEtc2hvd2VyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyQ0NcXFwiO1xcbn1cXG4uZmEtYmF0aHR1YjpiZWZvcmUsXFxuLmZhLXMxNTpiZWZvcmUsXFxuLmZhLWJhdGg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJDRFxcXCI7XFxufVxcbi5mYS1wb2RjYXN0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyQ0VcXFwiO1xcbn1cXG4uZmEtd2luZG93LW1heGltaXplOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyRDBcXFwiO1xcbn1cXG4uZmEtd2luZG93LW1pbmltaXplOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyRDFcXFwiO1xcbn1cXG4uZmEtd2luZG93LXJlc3RvcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJEMlxcXCI7XFxufVxcbi5mYS10aW1lcy1yZWN0YW5nbGU6YmVmb3JlLFxcbi5mYS13aW5kb3ctY2xvc2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJEM1xcXCI7XFxufVxcbi5mYS10aW1lcy1yZWN0YW5nbGUtbzpiZWZvcmUsXFxuLmZhLXdpbmRvdy1jbG9zZS1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyRDRcXFwiO1xcbn1cXG4uZmEtYmFuZGNhbXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJENVxcXCI7XFxufVxcbi5mYS1ncmF2OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyRDZcXFwiO1xcbn1cXG4uZmEtZXRzeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkQ3XFxcIjtcXG59XFxuLmZhLWltZGI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJEOFxcXCI7XFxufVxcbi5mYS1yYXZlbHJ5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyRDlcXFwiO1xcbn1cXG4uZmEtZWVyY2FzdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkRBXFxcIjtcXG59XFxuLmZhLW1pY3JvY2hpcDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkRCXFxcIjtcXG59XFxuLmZhLXNub3dmbGFrZS1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyRENcXFwiO1xcbn1cXG4uZmEtc3VwZXJwb3dlcnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJERFxcXCI7XFxufVxcbi5mYS13cGV4cGxvcmVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyREVcXFwiO1xcbn1cXG4uZmEtbWVldHVwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyRTBcXFwiO1xcbn1cXG4uc3Itb25seSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMXB4O1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAtMXB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XFxuICBib3JkZXI6IDA7XFxufVxcbi5zci1vbmx5LWZvY3VzYWJsZTphY3RpdmUsXFxuLnNyLW9ubHktZm9jdXNhYmxlOmZvY3VzIHtcXG4gIHBvc2l0aW9uOiBzdGF0aWM7XFxuICB3aWR0aDogYXV0bztcXG4gIGhlaWdodDogYXV0bztcXG4gIG1hcmdpbjogMDtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgY2xpcDogYXV0bztcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2ZvbnRzL2ZvbnQtYXdlc29tZS5jc3MnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmlvbi1hbGVydDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMDFcXFwiOyB9XFxuXFxuLmlvbi1hbGVydC1jaXJjbGVkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEwMFxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtYWRkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJDN1xcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtYWRkLWNpcmNsZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNTlcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLWFsYXJtLWNsb2NrOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM1QVxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtYWxlcnQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzVCXFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1hcHBzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM1Q1xcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtYXJjaGl2ZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQzlcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLWFycm93LWJhY2s6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkNBXFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1hcnJvdy1kb3duOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM1RFxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtYXJyb3ctZHJvcGRvd246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzVGXFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1hcnJvdy1kcm9wZG93bi1jaXJjbGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzVFXFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1hcnJvdy1kcm9wbGVmdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNjFcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLWFycm93LWRyb3BsZWZ0LWNpcmNsZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNjBcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLWFycm93LWRyb3ByaWdodDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNjNcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLWFycm93LWRyb3ByaWdodC1jaXJjbGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzYyXFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1hcnJvdy1kcm9wdXA6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzY1XFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1hcnJvdy1kcm9wdXAtY2lyY2xlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM2NFxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtYXJyb3ctZm9yd2FyZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzMEZcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLWFycm93LXVwOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM2NlxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtYXR0YWNoOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM2N1xcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtYmFyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM2OFxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtYmljeWNsZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNjlcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLWJvYXQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzZBXFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1ib29rbWFyazpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNkJcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLWJ1bGI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzZDXFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1idXM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzZEXFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1jYWxlbmRhcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyRDFcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLWNhbGw6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkQyXFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1jYW1lcmE6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkQzXFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1jYW5jZWw6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzZFXFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1jYXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzZGXFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1jYXJ0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM3MFxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtY2hhdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyRDRcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLWNoZWNrYm94OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM3NFxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtY2hlY2tib3gtYmxhbms6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzcxXFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1jaGVja2JveC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM3M1xcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtY2hlY2tib3gtb3V0bGluZS1ibGFuazpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNzJcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLWNoZWNrbWFyay1jaXJjbGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzc1XFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1jbGlwYm9hcmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzc2XFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1jbG9zZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyRDdcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLWNsb3VkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM3QVxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtY2xvdWQtY2lyY2xlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM3N1xcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtY2xvdWQtZG9uZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNzhcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLWNsb3VkLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzc5XFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1jb2xvci1wYWxldHRlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM3QlxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtY29tcGFzczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzN0NcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLWNvbnRhY3Q6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkQ4XFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1jb250YWN0czpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyRDlcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLWNvbnRyYWN0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM3RFxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtY3JlYXRlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM3RVxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtZGVsZXRlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM3RlxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtZGVza3RvcDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzODBcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLWRvY3VtZW50OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM4MVxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtZG9uZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzODNcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLWRvbmUtYWxsOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM4MlxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtZG93bmxvYWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkREXFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1kcmFmdHM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzg0XFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1leGl0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM4NVxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtZXhwYW5kOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM4NlxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtZmF2b3JpdGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzg4XFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1mYXZvcml0ZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM4N1xcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtZmlsbTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzODlcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLWZvbGRlcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyRTBcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLWZvbGRlci1vcGVuOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM4QVxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtZnVubmVsOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM4QlxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtZ2xvYmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzhDXFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1oYW5kOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJFM1xcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtaGFuZ291dDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzOERcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLWhhcHB5OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM4RVxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtaG9tZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzOEZcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLWltYWdlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJFNFxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtbGFwdG9wOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM5MFxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtbGlzdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzOTFcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLWxvY2F0ZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyRTlcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLWxvY2s6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzkyXFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1tYWlsOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJFQlxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtbWFwOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM5M1xcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtbWVudTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzOTRcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLW1pY3JvcGhvbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkVDXFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1taWNyb3Bob25lLW9mZjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzOTVcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLW1vcmUtaG9yaXpvbnRhbDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzOTZcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLW1vcmUtdmVydGljYWw6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzk3XFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1uYXZpZ2F0ZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzOThcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLW5vdGlmaWNhdGlvbnM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzlCXFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1ub3RpZmljYXRpb25zLW5vbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzk5XFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1ub3RpZmljYXRpb25zLW9mZjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzOUFcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLW9wZW46YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzlDXFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1vcHRpb25zOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM5RFxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtcGVvcGxlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM5RVxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtcGVyc29uOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNBMFxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtcGVyc29uLWFkZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzOUZcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLXBob25lLWxhbmRzY2FwZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQTFcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLXBob25lLXBvcnRyYWl0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNBMlxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtcGluOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNBM1xcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtcGxhbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0E0XFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1wbGF5c3RvcmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkYwXFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1wcmludDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQTVcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLXJhZGlvLWJ1dHRvbi1vZmY6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0E2XFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1yYWRpby1idXR0b24tb246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0E3XFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1yZWZyZXNoOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNBOFxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtcmVtb3ZlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJGNFxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtcmVtb3ZlLWNpcmNsZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQTlcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLXJlc3RhdXJhbnQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0FBXFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1zYWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0FCXFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1zZWFyY2g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkY1XFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1zZW5kOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJGNlxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtc2V0dGluZ3M6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkY3XFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1zaGFyZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyRjhcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLXNoYXJlLWFsdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQUNcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLXN0YXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkZDXFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1zdGFyLWhhbGY6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0FEXFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1zdGFyLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0FFXFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1zdG9wd2F0Y2g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkZEXFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1zdWJ3YXk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0FGXFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1zdW5ueTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQjBcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLXN5bmM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0IxXFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC10ZXh0c21zOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNCMlxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtdGltZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQjNcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLXRyYWluOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNCNFxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtdW5sb2NrOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNCNVxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtdXBsb2FkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNCNlxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtdm9sdW1lLWRvd246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0I3XFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC12b2x1bWUtbXV0ZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQjhcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLXZvbHVtZS1vZmY6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0I5XFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC12b2x1bWUtdXA6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0JBXFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC13YWxrOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNCQlxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtd2FybmluZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQkNcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLXdhdGNoOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNCRFxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtd2lmaTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzMDVcXFwiOyB9XFxuXFxuLmlvbi1hcGVydHVyZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzMTNcXFwiOyB9XFxuXFxuLmlvbi1hcmNoaXZlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEwMlxcXCI7IH1cXG5cXG4uaW9uLWFycm93LWRvd24tYTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMDNcXFwiOyB9XFxuXFxuLmlvbi1hcnJvdy1kb3duLWI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTA0XFxcIjsgfVxcblxcbi5pb24tYXJyb3ctZG93bi1jOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEwNVxcXCI7IH1cXG5cXG4uaW9uLWFycm93LWV4cGFuZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNUVcXFwiOyB9XFxuXFxuLmlvbi1hcnJvdy1ncmFwaC1kb3duLWxlZnQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjVGXFxcIjsgfVxcblxcbi5pb24tYXJyb3ctZ3JhcGgtZG93bi1yaWdodDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNjBcXFwiOyB9XFxuXFxuLmlvbi1hcnJvdy1ncmFwaC11cC1sZWZ0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI2MVxcXCI7IH1cXG5cXG4uaW9uLWFycm93LWdyYXBoLXVwLXJpZ2h0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI2MlxcXCI7IH1cXG5cXG4uaW9uLWFycm93LWxlZnQtYTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMDZcXFwiOyB9XFxuXFxuLmlvbi1hcnJvdy1sZWZ0LWI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTA3XFxcIjsgfVxcblxcbi5pb24tYXJyb3ctbGVmdC1jOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEwOFxcXCI7IH1cXG5cXG4uaW9uLWFycm93LW1vdmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjYzXFxcIjsgfVxcblxcbi5pb24tYXJyb3ctcmVzaXplOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI2NFxcXCI7IH1cXG5cXG4uaW9uLWFycm93LXJldHVybi1sZWZ0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI2NVxcXCI7IH1cXG5cXG4uaW9uLWFycm93LXJldHVybi1yaWdodDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNjZcXFwiOyB9XFxuXFxuLmlvbi1hcnJvdy1yaWdodC1hOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEwOVxcXCI7IH1cXG5cXG4uaW9uLWFycm93LXJpZ2h0LWI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTBBXFxcIjsgfVxcblxcbi5pb24tYXJyb3ctcmlnaHQtYzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMEJcXFwiOyB9XFxuXFxuLmlvbi1hcnJvdy1zaHJpbms6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjY3XFxcIjsgfVxcblxcbi5pb24tYXJyb3ctc3dhcDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNjhcXFwiOyB9XFxuXFxuLmlvbi1hcnJvdy11cC1hOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEwQ1xcXCI7IH1cXG5cXG4uaW9uLWFycm93LXVwLWI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTBEXFxcIjsgfVxcblxcbi5pb24tYXJyb3ctdXAtYzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMEVcXFwiOyB9XFxuXFxuLmlvbi1hc3RlcmlzazpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzMTRcXFwiOyB9XFxuXFxuLmlvbi1hdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMEZcXFwiOyB9XFxuXFxuLmlvbi1iYWNrc3BhY2U6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0JGXFxcIjsgfVxcblxcbi5pb24tYmFja3NwYWNlLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0JFXFxcIjsgfVxcblxcbi5pb24tYmFnOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjExMFxcXCI7IH1cXG5cXG4uaW9uLWJhdHRlcnktY2hhcmdpbmc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTExXFxcIjsgfVxcblxcbi5pb24tYmF0dGVyeS1lbXB0eTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMTJcXFwiOyB9XFxuXFxuLmlvbi1iYXR0ZXJ5LWZ1bGw6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTEzXFxcIjsgfVxcblxcbi5pb24tYmF0dGVyeS1oYWxmOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjExNFxcXCI7IH1cXG5cXG4uaW9uLWJhdHRlcnktbG93OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjExNVxcXCI7IH1cXG5cXG4uaW9uLWJlYWtlcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNjlcXFwiOyB9XFxuXFxuLmlvbi1iZWVyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI2QVxcXCI7IH1cXG5cXG4uaW9uLWJsdWV0b290aDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMTZcXFwiOyB9XFxuXFxuLmlvbi1ib25maXJlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjMxNVxcXCI7IH1cXG5cXG4uaW9uLWJvb2ttYXJrOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI2QlxcXCI7IH1cXG5cXG4uaW9uLWJvd3RpZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQzBcXFwiOyB9XFxuXFxuLmlvbi1icmllZmNhc2U6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjZDXFxcIjsgfVxcblxcbi5pb24tYnVnOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJCRVxcXCI7IH1cXG5cXG4uaW9uLWNhbGN1bGF0b3I6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjZEXFxcIjsgfVxcblxcbi5pb24tY2FsZW5kYXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTE3XFxcIjsgfVxcblxcbi5pb24tY2FtZXJhOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjExOFxcXCI7IH1cXG5cXG4uaW9uLWNhcmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTE5XFxcIjsgfVxcblxcbi5pb24tY2FzaDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzMTZcXFwiOyB9XFxuXFxuLmlvbi1jaGF0Ym94OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjExQlxcXCI7IH1cXG5cXG4uaW9uLWNoYXRib3gtd29ya2luZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMUFcXFwiOyB9XFxuXFxuLmlvbi1jaGF0Ym94ZXM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTFDXFxcIjsgfVxcblxcbi5pb24tY2hhdGJ1YmJsZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMUVcXFwiOyB9XFxuXFxuLmlvbi1jaGF0YnViYmxlLXdvcmtpbmc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTFEXFxcIjsgfVxcblxcbi5pb24tY2hhdGJ1YmJsZXM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTFGXFxcIjsgfVxcblxcbi5pb24tY2hlY2ttYXJrOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEyMlxcXCI7IH1cXG5cXG4uaW9uLWNoZWNrbWFyay1jaXJjbGVkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEyMFxcXCI7IH1cXG5cXG4uaW9uLWNoZWNrbWFyay1yb3VuZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMjFcXFwiOyB9XFxuXFxuLmlvbi1jaGV2cm9uLWRvd246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTIzXFxcIjsgfVxcblxcbi5pb24tY2hldnJvbi1sZWZ0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEyNFxcXCI7IH1cXG5cXG4uaW9uLWNoZXZyb24tcmlnaHQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTI1XFxcIjsgfVxcblxcbi5pb24tY2hldnJvbi11cDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMjZcXFwiOyB9XFxuXFxuLmlvbi1jbGlwYm9hcmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTI3XFxcIjsgfVxcblxcbi5pb24tY2xvY2s6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjZFXFxcIjsgfVxcblxcbi5pb24tY2xvc2U6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTJBXFxcIjsgfVxcblxcbi5pb24tY2xvc2UtY2lyY2xlZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMjhcXFwiOyB9XFxuXFxuLmlvbi1jbG9zZS1yb3VuZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMjlcXFwiOyB9XFxuXFxuLmlvbi1jbG9zZWQtY2FwdGlvbmluZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzMTdcXFwiOyB9XFxuXFxuLmlvbi1jbG91ZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMkJcXFwiOyB9XFxuXFxuLmlvbi1jb2RlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI3MVxcXCI7IH1cXG5cXG4uaW9uLWNvZGUtZG93bmxvYWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjZGXFxcIjsgfVxcblxcbi5pb24tY29kZS13b3JraW5nOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI3MFxcXCI7IH1cXG5cXG4uaW9uLWNvZmZlZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNzJcXFwiOyB9XFxuXFxuLmlvbi1jb21wYXNzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI3M1xcXCI7IH1cXG5cXG4uaW9uLWNvbXBvc2U6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTJDXFxcIjsgfVxcblxcbi5pb24tY29ubmVjdGlvbi1iYXJzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI3NFxcXCI7IH1cXG5cXG4uaW9uLWNvbnRyYXN0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI3NVxcXCI7IH1cXG5cXG4uaW9uLWNyb3A6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0MxXFxcIjsgfVxcblxcbi5pb24tY3ViZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzMThcXFwiOyB9XFxuXFxuLmlvbi1kaXNjOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEyRFxcXCI7IH1cXG5cXG4uaW9uLWRvY3VtZW50OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEyRlxcXCI7IH1cXG5cXG4uaW9uLWRvY3VtZW50LXRleHQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTJFXFxcIjsgfVxcblxcbi5pb24tZHJhZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMzBcXFwiOyB9XFxuXFxuLmlvbi1lYXJ0aDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNzZcXFwiOyB9XFxuXFxuLmlvbi1lYXNlbDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQzJcXFwiOyB9XFxuXFxuLmlvbi1lZGl0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJCRlxcXCI7IH1cXG5cXG4uaW9uLWVnZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNzdcXFwiOyB9XFxuXFxuLmlvbi1lamVjdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMzFcXFwiOyB9XFxuXFxuLmlvbi1lbWFpbDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMzJcXFwiOyB9XFxuXFxuLmlvbi1lbWFpbC11bnJlYWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0MzXFxcIjsgfVxcblxcbi5pb24tZXJsZW5tZXllci1mbGFzazpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQzVcXFwiOyB9XFxuXFxuLmlvbi1lcmxlbm1leWVyLWZsYXNrLWJ1YmJsZXM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0M0XFxcIjsgfVxcblxcbi5pb24tZXllOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEzM1xcXCI7IH1cXG5cXG4uaW9uLWV5ZS1kaXNhYmxlZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzMDZcXFwiOyB9XFxuXFxuLmlvbi1mZW1hbGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjc4XFxcIjsgfVxcblxcbi5pb24tZmlsaW5nOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEzNFxcXCI7IH1cXG5cXG4uaW9uLWZpbG0tbWFya2VyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEzNVxcXCI7IH1cXG5cXG4uaW9uLWZpcmViYWxsOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjMxOVxcXCI7IH1cXG5cXG4uaW9uLWZsYWc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjc5XFxcIjsgfVxcblxcbi5pb24tZmxhbWU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzFBXFxcIjsgfVxcblxcbi5pb24tZmxhc2g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTM3XFxcIjsgfVxcblxcbi5pb24tZmxhc2gtb2ZmOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEzNlxcXCI7IH1cXG5cXG4uaW9uLWZvbGRlcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMzlcXFwiOyB9XFxuXFxuLmlvbi1mb3JrOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI3QVxcXCI7IH1cXG5cXG4uaW9uLWZvcmstcmVwbzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQzBcXFwiOyB9XFxuXFxuLmlvbi1mb3J3YXJkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEzQVxcXCI7IH1cXG5cXG4uaW9uLWZ1bm5lbDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzMUJcXFwiOyB9XFxuXFxuLmlvbi1nZWFyLWE6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTNEXFxcIjsgfVxcblxcbi5pb24tZ2Vhci1iOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEzRVxcXCI7IH1cXG5cXG4uaW9uLWdyaWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTNGXFxcIjsgfVxcblxcbi5pb24taGFtbWVyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI3QlxcXCI7IH1cXG5cXG4uaW9uLWhhcHB5OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjMxQ1xcXCI7IH1cXG5cXG4uaW9uLWhhcHB5LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0M2XFxcIjsgfVxcblxcbi5pb24taGVhZHBob25lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjE0MFxcXCI7IH1cXG5cXG4uaW9uLWhlYXJ0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjE0MVxcXCI7IH1cXG5cXG4uaW9uLWhlYXJ0LWJyb2tlbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzMURcXFwiOyB9XFxuXFxuLmlvbi1oZWxwOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjE0M1xcXCI7IH1cXG5cXG4uaW9uLWhlbHAtYnVveTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyN0NcXFwiOyB9XFxuXFxuLmlvbi1oZWxwLWNpcmNsZWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTQyXFxcIjsgfVxcblxcbi5pb24taG9tZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxNDRcXFwiOyB9XFxuXFxuLmlvbi1pY2VjcmVhbTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyN0RcXFwiOyB9XFxuXFxuLmlvbi1pbWFnZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxNDdcXFwiOyB9XFxuXFxuLmlvbi1pbWFnZXM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTQ4XFxcIjsgfVxcblxcbi5pb24taW5mb3JtYXRpb246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTRBXFxcIjsgfVxcblxcbi5pb24taW5mb3JtYXRpb24tY2lyY2xlZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxNDlcXFwiOyB9XFxuXFxuLmlvbi1pb25pYzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxNEJcXFwiOyB9XFxuXFxuLmlvbi1pb3MtYWxhcm06YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0M4XFxcIjsgfVxcblxcbi5pb24taW9zLWFsYXJtLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0M3XFxcIjsgfVxcblxcbi5pb24taW9zLWFsYnVtczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQ0FcXFwiOyB9XFxuXFxuLmlvbi1pb3MtYWxidW1zLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0M5XFxcIjsgfVxcblxcbi5pb24taW9zLWFtZXJpY2FuZm9vdGJhbGw6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0NDXFxcIjsgfVxcblxcbi5pb24taW9zLWFtZXJpY2FuZm9vdGJhbGwtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQ0JcXFwiOyB9XFxuXFxuLmlvbi1pb3MtYW5hbHl0aWNzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNDRVxcXCI7IH1cXG5cXG4uaW9uLWlvcy1hbmFseXRpY3Mtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQ0RcXFwiOyB9XFxuXFxuLmlvbi1pb3MtYXJyb3ctYmFjazpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQ0ZcXFwiOyB9XFxuXFxuLmlvbi1pb3MtYXJyb3ctZG93bjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRDBcXFwiOyB9XFxuXFxuLmlvbi1pb3MtYXJyb3ctZm9yd2FyZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRDFcXFwiOyB9XFxuXFxuLmlvbi1pb3MtYXJyb3ctbGVmdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRDJcXFwiOyB9XFxuXFxuLmlvbi1pb3MtYXJyb3ctcmlnaHQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0QzXFxcIjsgfVxcblxcbi5pb24taW9zLWFycm93LXRoaW4tZG93bjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRDRcXFwiOyB9XFxuXFxuLmlvbi1pb3MtYXJyb3ctdGhpbi1sZWZ0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNENVxcXCI7IH1cXG5cXG4uaW9uLWlvcy1hcnJvdy10aGluLXJpZ2h0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNENlxcXCI7IH1cXG5cXG4uaW9uLWlvcy1hcnJvdy10aGluLXVwOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNEN1xcXCI7IH1cXG5cXG4uaW9uLWlvcy1hcnJvdy11cDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRDhcXFwiOyB9XFxuXFxuLmlvbi1pb3MtYXQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0RBXFxcIjsgfVxcblxcbi5pb24taW9zLWF0LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0Q5XFxcIjsgfVxcblxcbi5pb24taW9zLWJhcmNvZGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0RDXFxcIjsgfVxcblxcbi5pb24taW9zLWJhcmNvZGUtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzREJcXFwiOyB9XFxuXFxuLmlvbi1pb3MtYmFzZWJhbGw6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0RFXFxcIjsgfVxcblxcbi5pb24taW9zLWJhc2ViYWxsLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0REXFxcIjsgfVxcblxcbi5pb24taW9zLWJhc2tldGJhbGw6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0UwXFxcIjsgfVxcblxcbi5pb24taW9zLWJhc2tldGJhbGwtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzREZcXFwiOyB9XFxuXFxuLmlvbi1pb3MtYmVsbDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRTJcXFwiOyB9XFxuXFxuLmlvbi1pb3MtYmVsbC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNFMVxcXCI7IH1cXG5cXG4uaW9uLWlvcy1ib2R5OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNFNFxcXCI7IH1cXG5cXG4uaW9uLWlvcy1ib2R5LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0UzXFxcIjsgfVxcblxcbi5pb24taW9zLWJvbHQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0U2XFxcIjsgfVxcblxcbi5pb24taW9zLWJvbHQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRTVcXFwiOyB9XFxuXFxuLmlvbi1pb3MtYm9vazpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRThcXFwiOyB9XFxuXFxuLmlvbi1pb3MtYm9vay1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNFN1xcXCI7IH1cXG5cXG4uaW9uLWlvcy1ib29rbWFya3M6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0VBXFxcIjsgfVxcblxcbi5pb24taW9zLWJvb2ttYXJrcy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNFOVxcXCI7IH1cXG5cXG4uaW9uLWlvcy1ib3g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0VDXFxcIjsgfVxcblxcbi5pb24taW9zLWJveC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNFQlxcXCI7IH1cXG5cXG4uaW9uLWlvcy1icmllZmNhc2U6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0VFXFxcIjsgfVxcblxcbi5pb24taW9zLWJyaWVmY2FzZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNFRFxcXCI7IH1cXG5cXG4uaW9uLWlvcy1icm93c2VyczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRjBcXFwiOyB9XFxuXFxuLmlvbi1pb3MtYnJvd3NlcnMtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRUZcXFwiOyB9XFxuXFxuLmlvbi1pb3MtY2FsY3VsYXRvcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRjJcXFwiOyB9XFxuXFxuLmlvbi1pb3MtY2FsY3VsYXRvci1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNGMVxcXCI7IH1cXG5cXG4uaW9uLWlvcy1jYWxlbmRhcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRjRcXFwiOyB9XFxuXFxuLmlvbi1pb3MtY2FsZW5kYXItb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRjNcXFwiOyB9XFxuXFxuLmlvbi1pb3MtY2FtZXJhOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNGNlxcXCI7IH1cXG5cXG4uaW9uLWlvcy1jYW1lcmEtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRjVcXFwiOyB9XFxuXFxuLmlvbi1pb3MtY2FydDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRjhcXFwiOyB9XFxuXFxuLmlvbi1pb3MtY2FydC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNGN1xcXCI7IH1cXG5cXG4uaW9uLWlvcy1jaGF0Ym94ZXM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0ZBXFxcIjsgfVxcblxcbi5pb24taW9zLWNoYXRib3hlcy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNGOVxcXCI7IH1cXG5cXG4uaW9uLWlvcy1jaGF0YnViYmxlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNGQ1xcXCI7IH1cXG5cXG4uaW9uLWlvcy1jaGF0YnViYmxlLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0ZCXFxcIjsgfVxcblxcbi5pb24taW9zLWNoZWNrbWFyazpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRkZcXFwiOyB9XFxuXFxuLmlvbi1pb3MtY2hlY2ttYXJrLWVtcHR5OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNGRFxcXCI7IH1cXG5cXG4uaW9uLWlvcy1jaGVja21hcmstb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRkVcXFwiOyB9XFxuXFxuLmlvbi1pb3MtY2lyY2xlLWZpbGxlZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MDBcXFwiOyB9XFxuXFxuLmlvbi1pb3MtY2lyY2xlLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDAxXFxcIjsgfVxcblxcbi5pb24taW9zLWNsb2NrOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQwM1xcXCI7IH1cXG5cXG4uaW9uLWlvcy1jbG9jay1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQwMlxcXCI7IH1cXG5cXG4uaW9uLWlvcy1jbG9zZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MDZcXFwiOyB9XFxuXFxuLmlvbi1pb3MtY2xvc2UtZW1wdHk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDA0XFxcIjsgfVxcblxcbi5pb24taW9zLWNsb3NlLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDA1XFxcIjsgfVxcblxcbi5pb24taW9zLWNsb3VkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQwQ1xcXCI7IH1cXG5cXG4uaW9uLWlvcy1jbG91ZC1kb3dubG9hZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MDhcXFwiOyB9XFxuXFxuLmlvbi1pb3MtY2xvdWQtZG93bmxvYWQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MDdcXFwiOyB9XFxuXFxuLmlvbi1pb3MtY2xvdWQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MDlcXFwiOyB9XFxuXFxuLmlvbi1pb3MtY2xvdWQtdXBsb2FkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQwQlxcXCI7IH1cXG5cXG4uaW9uLWlvcy1jbG91ZC11cGxvYWQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MEFcXFwiOyB9XFxuXFxuLmlvbi1pb3MtY2xvdWR5OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQxMFxcXCI7IH1cXG5cXG4uaW9uLWlvcy1jbG91ZHktbmlnaHQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDBFXFxcIjsgfVxcblxcbi5pb24taW9zLWNsb3VkeS1uaWdodC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQwRFxcXCI7IH1cXG5cXG4uaW9uLWlvcy1jbG91ZHktb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MEZcXFwiOyB9XFxuXFxuLmlvbi1pb3MtY29nOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQxMlxcXCI7IH1cXG5cXG4uaW9uLWlvcy1jb2ctb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MTFcXFwiOyB9XFxuXFxuLmlvbi1pb3MtY29sb3ItZmlsdGVyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQxNFxcXCI7IH1cXG5cXG4uaW9uLWlvcy1jb2xvci1maWx0ZXItb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MTNcXFwiOyB9XFxuXFxuLmlvbi1pb3MtY29sb3Itd2FuZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MTZcXFwiOyB9XFxuXFxuLmlvbi1pb3MtY29sb3Itd2FuZC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQxNVxcXCI7IH1cXG5cXG4uaW9uLWlvcy1jb21wb3NlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQxOFxcXCI7IH1cXG5cXG4uaW9uLWlvcy1jb21wb3NlLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDE3XFxcIjsgfVxcblxcbi5pb24taW9zLWNvbnRhY3Q6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDFBXFxcIjsgfVxcblxcbi5pb24taW9zLWNvbnRhY3Qtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MTlcXFwiOyB9XFxuXFxuLmlvbi1pb3MtY29weTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MUNcXFwiOyB9XFxuXFxuLmlvbi1pb3MtY29weS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQxQlxcXCI7IH1cXG5cXG4uaW9uLWlvcy1jcm9wOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQxRVxcXCI7IH1cXG5cXG4uaW9uLWlvcy1jcm9wLXN0cm9uZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MURcXFwiOyB9XFxuXFxuLmlvbi1pb3MtZG93bmxvYWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDIwXFxcIjsgfVxcblxcbi5pb24taW9zLWRvd25sb2FkLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDFGXFxcIjsgfVxcblxcbi5pb24taW9zLWRyYWc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDIxXFxcIjsgfVxcblxcbi5pb24taW9zLWVtYWlsOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQyM1xcXCI7IH1cXG5cXG4uaW9uLWlvcy1lbWFpbC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQyMlxcXCI7IH1cXG5cXG4uaW9uLWlvcy1leWU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDI1XFxcIjsgfVxcblxcbi5pb24taW9zLWV5ZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQyNFxcXCI7IH1cXG5cXG4uaW9uLWlvcy1mYXN0Zm9yd2FyZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MjdcXFwiOyB9XFxuXFxuLmlvbi1pb3MtZmFzdGZvcndhcmQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MjZcXFwiOyB9XFxuXFxuLmlvbi1pb3MtZmlsaW5nOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQyOVxcXCI7IH1cXG5cXG4uaW9uLWlvcy1maWxpbmctb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MjhcXFwiOyB9XFxuXFxuLmlvbi1pb3MtZmlsbTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MkJcXFwiOyB9XFxuXFxuLmlvbi1pb3MtZmlsbS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQyQVxcXCI7IH1cXG5cXG4uaW9uLWlvcy1mbGFnOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQyRFxcXCI7IH1cXG5cXG4uaW9uLWlvcy1mbGFnLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDJDXFxcIjsgfVxcblxcbi5pb24taW9zLWZsYW1lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQyRlxcXCI7IH1cXG5cXG4uaW9uLWlvcy1mbGFtZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQyRVxcXCI7IH1cXG5cXG4uaW9uLWlvcy1mbGFzazpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MzFcXFwiOyB9XFxuXFxuLmlvbi1pb3MtZmxhc2stb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MzBcXFwiOyB9XFxuXFxuLmlvbi1pb3MtZmxvd2VyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQzM1xcXCI7IH1cXG5cXG4uaW9uLWlvcy1mbG93ZXItb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MzJcXFwiOyB9XFxuXFxuLmlvbi1pb3MtZm9sZGVyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQzNVxcXCI7IH1cXG5cXG4uaW9uLWlvcy1mb2xkZXItb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MzRcXFwiOyB9XFxuXFxuLmlvbi1pb3MtZm9vdGJhbGw6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDM3XFxcIjsgfVxcblxcbi5pb24taW9zLWZvb3RiYWxsLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDM2XFxcIjsgfVxcblxcbi5pb24taW9zLWdhbWUtY29udHJvbGxlci1hOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQzOVxcXCI7IH1cXG5cXG4uaW9uLWlvcy1nYW1lLWNvbnRyb2xsZXItYS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQzOFxcXCI7IH1cXG5cXG4uaW9uLWlvcy1nYW1lLWNvbnRyb2xsZXItYjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0M0JcXFwiOyB9XFxuXFxuLmlvbi1pb3MtZ2FtZS1jb250cm9sbGVyLWItb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0M0FcXFwiOyB9XFxuXFxuLmlvbi1pb3MtZ2VhcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0M0RcXFwiOyB9XFxuXFxuLmlvbi1pb3MtZ2Vhci1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQzQ1xcXCI7IH1cXG5cXG4uaW9uLWlvcy1nbGFzc2VzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQzRlxcXCI7IH1cXG5cXG4uaW9uLWlvcy1nbGFzc2VzLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDNFXFxcIjsgfVxcblxcbi5pb24taW9zLWdyaWQtdmlldzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NDFcXFwiOyB9XFxuXFxuLmlvbi1pb3MtZ3JpZC12aWV3LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDQwXFxcIjsgfVxcblxcbi5pb24taW9zLWhlYXJ0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ0M1xcXCI7IH1cXG5cXG4uaW9uLWlvcy1oZWFydC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ0MlxcXCI7IH1cXG5cXG4uaW9uLWlvcy1oZWxwOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ0NlxcXCI7IH1cXG5cXG4uaW9uLWlvcy1oZWxwLWVtcHR5OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ0NFxcXCI7IH1cXG5cXG4uaW9uLWlvcy1oZWxwLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDQ1XFxcIjsgfVxcblxcbi5pb24taW9zLWhvbWU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDQ4XFxcIjsgfVxcblxcbi5pb24taW9zLWhvbWUtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NDdcXFwiOyB9XFxuXFxuLmlvbi1pb3MtaW5maW5pdGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDRBXFxcIjsgfVxcblxcbi5pb24taW9zLWluZmluaXRlLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDQ5XFxcIjsgfVxcblxcbi5pb24taW9zLWluZm9ybWF0aW9uOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ0RFxcXCI7IH1cXG5cXG4uaW9uLWlvcy1pbmZvcm1hdGlvbi1lbXB0eTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NEJcXFwiOyB9XFxuXFxuLmlvbi1pb3MtaW5mb3JtYXRpb24tb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NENcXFwiOyB9XFxuXFxuLmlvbi1pb3MtaW9uaWMtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NEVcXFwiOyB9XFxuXFxuLmlvbi1pb3Mta2V5cGFkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ1MFxcXCI7IH1cXG5cXG4uaW9uLWlvcy1rZXlwYWQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NEZcXFwiOyB9XFxuXFxuLmlvbi1pb3MtbGlnaHRidWxiOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ1MlxcXCI7IH1cXG5cXG4uaW9uLWlvcy1saWdodGJ1bGItb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NTFcXFwiOyB9XFxuXFxuLmlvbi1pb3MtbGlzdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NTRcXFwiOyB9XFxuXFxuLmlvbi1pb3MtbGlzdC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ1M1xcXCI7IH1cXG5cXG4uaW9uLWlvcy1sb2NhdGlvbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NTZcXFwiOyB9XFxuXFxuLmlvbi1pb3MtbG9jYXRpb24tb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NTVcXFwiOyB9XFxuXFxuLmlvbi1pb3MtbG9ja2VkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ1OFxcXCI7IH1cXG5cXG4uaW9uLWlvcy1sb2NrZWQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NTdcXFwiOyB9XFxuXFxuLmlvbi1pb3MtbG9vcDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NUFcXFwiOyB9XFxuXFxuLmlvbi1pb3MtbG9vcC1zdHJvbmc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDU5XFxcIjsgfVxcblxcbi5pb24taW9zLW1lZGljYWw6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDVDXFxcIjsgfVxcblxcbi5pb24taW9zLW1lZGljYWwtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NUJcXFwiOyB9XFxuXFxuLmlvbi1pb3MtbWVka2l0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ1RVxcXCI7IH1cXG5cXG4uaW9uLWlvcy1tZWRraXQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NURcXFwiOyB9XFxuXFxuLmlvbi1pb3MtbWljOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ2MVxcXCI7IH1cXG5cXG4uaW9uLWlvcy1taWMtb2ZmOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ1RlxcXCI7IH1cXG5cXG4uaW9uLWlvcy1taWMtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NjBcXFwiOyB9XFxuXFxuLmlvbi1pb3MtbWludXM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDY0XFxcIjsgfVxcblxcbi5pb24taW9zLW1pbnVzLWVtcHR5OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ2MlxcXCI7IH1cXG5cXG4uaW9uLWlvcy1taW51cy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ2M1xcXCI7IH1cXG5cXG4uaW9uLWlvcy1tb25pdG9yOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ2NlxcXCI7IH1cXG5cXG4uaW9uLWlvcy1tb25pdG9yLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDY1XFxcIjsgfVxcblxcbi5pb24taW9zLW1vb246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDY4XFxcIjsgfVxcblxcbi5pb24taW9zLW1vb24tb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NjdcXFwiOyB9XFxuXFxuLmlvbi1pb3MtbW9yZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NkFcXFwiOyB9XFxuXFxuLmlvbi1pb3MtbW9yZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ2OVxcXCI7IH1cXG5cXG4uaW9uLWlvcy1tdXNpY2FsLW5vdGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDZCXFxcIjsgfVxcblxcbi5pb24taW9zLW11c2ljYWwtbm90ZXM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDZDXFxcIjsgfVxcblxcbi5pb24taW9zLW5hdmlnYXRlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ2RVxcXCI7IH1cXG5cXG4uaW9uLWlvcy1uYXZpZ2F0ZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ2RFxcXCI7IH1cXG5cXG4uaW9uLWlvcy1udXRyaXRpb246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDcwXFxcIjsgfVxcblxcbi5pb24taW9zLW51dHJpdGlvbi1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ2RlxcXCI7IH1cXG5cXG4uaW9uLWlvcy1wYXBlcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NzJcXFwiOyB9XFxuXFxuLmlvbi1pb3MtcGFwZXItb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NzFcXFwiOyB9XFxuXFxuLmlvbi1pb3MtcGFwZXJwbGFuZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NzRcXFwiOyB9XFxuXFxuLmlvbi1pb3MtcGFwZXJwbGFuZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ3M1xcXCI7IH1cXG5cXG4uaW9uLWlvcy1wYXJ0bHlzdW5ueTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NzZcXFwiOyB9XFxuXFxuLmlvbi1pb3MtcGFydGx5c3Vubnktb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NzVcXFwiOyB9XFxuXFxuLmlvbi1pb3MtcGF1c2U6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDc4XFxcIjsgfVxcblxcbi5pb24taW9zLXBhdXNlLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDc3XFxcIjsgfVxcblxcbi5pb24taW9zLXBhdzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0N0FcXFwiOyB9XFxuXFxuLmlvbi1pb3MtcGF3LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDc5XFxcIjsgfVxcblxcbi5pb24taW9zLXBlb3BsZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0N0NcXFwiOyB9XFxuXFxuLmlvbi1pb3MtcGVvcGxlLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDdCXFxcIjsgfVxcblxcbi5pb24taW9zLXBlcnNvbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0N0VcXFwiOyB9XFxuXFxuLmlvbi1pb3MtcGVyc29uLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDdEXFxcIjsgfVxcblxcbi5pb24taW9zLXBlcnNvbmFkZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0ODBcXFwiOyB9XFxuXFxuLmlvbi1pb3MtcGVyc29uYWRkLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDdGXFxcIjsgfVxcblxcbi5pb24taW9zLXBob3RvczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0ODJcXFwiOyB9XFxuXFxuLmlvbi1pb3MtcGhvdG9zLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDgxXFxcIjsgfVxcblxcbi5pb24taW9zLXBpZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0ODRcXFwiOyB9XFxuXFxuLmlvbi1pb3MtcGllLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDgzXFxcIjsgfVxcblxcbi5pb24taW9zLXBpbnQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDg2XFxcIjsgfVxcblxcbi5pb24taW9zLXBpbnQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0ODVcXFwiOyB9XFxuXFxuLmlvbi1pb3MtcGxheTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0ODhcXFwiOyB9XFxuXFxuLmlvbi1pb3MtcGxheS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ4N1xcXCI7IH1cXG5cXG4uaW9uLWlvcy1wbHVzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ4QlxcXCI7IH1cXG5cXG4uaW9uLWlvcy1wbHVzLWVtcHR5OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ4OVxcXCI7IH1cXG5cXG4uaW9uLWlvcy1wbHVzLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDhBXFxcIjsgfVxcblxcbi5pb24taW9zLXByaWNldGFnOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ4RFxcXCI7IH1cXG5cXG4uaW9uLWlvcy1wcmljZXRhZy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ4Q1xcXCI7IH1cXG5cXG4uaW9uLWlvcy1wcmljZXRhZ3M6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDhGXFxcIjsgfVxcblxcbi5pb24taW9zLXByaWNldGFncy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ4RVxcXCI7IH1cXG5cXG4uaW9uLWlvcy1wcmludGVyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ5MVxcXCI7IH1cXG5cXG4uaW9uLWlvcy1wcmludGVyLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDkwXFxcIjsgfVxcblxcbi5pb24taW9zLXB1bHNlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ5M1xcXCI7IH1cXG5cXG4uaW9uLWlvcy1wdWxzZS1zdHJvbmc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDkyXFxcIjsgfVxcblxcbi5pb24taW9zLXJhaW55OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ5NVxcXCI7IH1cXG5cXG4uaW9uLWlvcy1yYWlueS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ5NFxcXCI7IH1cXG5cXG4uaW9uLWlvcy1yZWNvcmRpbmc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDk3XFxcIjsgfVxcblxcbi5pb24taW9zLXJlY29yZGluZy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ5NlxcXCI7IH1cXG5cXG4uaW9uLWlvcy1yZWRvOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ5OVxcXCI7IH1cXG5cXG4uaW9uLWlvcy1yZWRvLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDk4XFxcIjsgfVxcblxcbi5pb24taW9zLXJlZnJlc2g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDlDXFxcIjsgfVxcblxcbi5pb24taW9zLXJlZnJlc2gtZW1wdHk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDlBXFxcIjsgfVxcblxcbi5pb24taW9zLXJlZnJlc2gtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0OUJcXFwiOyB9XFxuXFxuLmlvbi1pb3MtcmVsb2FkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ5RFxcXCI7IH1cXG5cXG4uaW9uLWlvcy1yZXZlcnNlLWNhbWVyYTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0OUZcXFwiOyB9XFxuXFxuLmlvbi1pb3MtcmV2ZXJzZS1jYW1lcmEtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0OUVcXFwiOyB9XFxuXFxuLmlvbi1pb3MtcmV3aW5kOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRBMVxcXCI7IH1cXG5cXG4uaW9uLWlvcy1yZXdpbmQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QTBcXFwiOyB9XFxuXFxuLmlvbi1pb3Mtcm9zZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QTNcXFwiOyB9XFxuXFxuLmlvbi1pb3Mtcm9zZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRBMlxcXCI7IH1cXG5cXG4uaW9uLWlvcy1zZWFyY2g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEE1XFxcIjsgfVxcblxcbi5pb24taW9zLXNlYXJjaC1zdHJvbmc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEE0XFxcIjsgfVxcblxcbi5pb24taW9zLXNldHRpbmdzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRBN1xcXCI7IH1cXG5cXG4uaW9uLWlvcy1zZXR0aW5ncy1zdHJvbmc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEE2XFxcIjsgfVxcblxcbi5pb24taW9zLXNodWZmbGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEE5XFxcIjsgfVxcblxcbi5pb24taW9zLXNodWZmbGUtc3Ryb25nOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRBOFxcXCI7IH1cXG5cXG4uaW9uLWlvcy1za2lwYmFja3dhcmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEFCXFxcIjsgfVxcblxcbi5pb24taW9zLXNraXBiYWNrd2FyZC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRBQVxcXCI7IH1cXG5cXG4uaW9uLWlvcy1za2lwZm9yd2FyZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QURcXFwiOyB9XFxuXFxuLmlvbi1pb3Mtc2tpcGZvcndhcmQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QUNcXFwiOyB9XFxuXFxuLmlvbi1pb3Mtc25vd3k6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEFFXFxcIjsgfVxcblxcbi5pb24taW9zLXNwZWVkb21ldGVyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRCMFxcXCI7IH1cXG5cXG4uaW9uLWlvcy1zcGVlZG9tZXRlci1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRBRlxcXCI7IH1cXG5cXG4uaW9uLWlvcy1zdGFyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRCM1xcXCI7IH1cXG5cXG4uaW9uLWlvcy1zdGFyLWhhbGY6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEIxXFxcIjsgfVxcblxcbi5pb24taW9zLXN0YXItb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QjJcXFwiOyB9XFxuXFxuLmlvbi1pb3Mtc3RvcHdhdGNoOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRCNVxcXCI7IH1cXG5cXG4uaW9uLWlvcy1zdG9wd2F0Y2gtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QjRcXFwiOyB9XFxuXFxuLmlvbi1pb3Mtc3Vubnk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEI3XFxcIjsgfVxcblxcbi5pb24taW9zLXN1bm55LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEI2XFxcIjsgfVxcblxcbi5pb24taW9zLXRlbGVwaG9uZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QjlcXFwiOyB9XFxuXFxuLmlvbi1pb3MtdGVsZXBob25lLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEI4XFxcIjsgfVxcblxcbi5pb24taW9zLXRlbm5pc2JhbGw6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEJCXFxcIjsgfVxcblxcbi5pb24taW9zLXRlbm5pc2JhbGwtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QkFcXFwiOyB9XFxuXFxuLmlvbi1pb3MtdGh1bmRlcnN0b3JtOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRCRFxcXCI7IH1cXG5cXG4uaW9uLWlvcy10aHVuZGVyc3Rvcm0tb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QkNcXFwiOyB9XFxuXFxuLmlvbi1pb3MtdGltZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QkZcXFwiOyB9XFxuXFxuLmlvbi1pb3MtdGltZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRCRVxcXCI7IH1cXG5cXG4uaW9uLWlvcy10aW1lcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QzFcXFwiOyB9XFxuXFxuLmlvbi1pb3MtdGltZXItb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QzBcXFwiOyB9XFxuXFxuLmlvbi1pb3MtdG9nZ2xlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRDM1xcXCI7IH1cXG5cXG4uaW9uLWlvcy10b2dnbGUtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QzJcXFwiOyB9XFxuXFxuLmlvbi1pb3MtdHJhc2g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEM1XFxcIjsgfVxcblxcbi5pb24taW9zLXRyYXNoLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEM0XFxcIjsgfVxcblxcbi5pb24taW9zLXVuZG86YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEM3XFxcIjsgfVxcblxcbi5pb24taW9zLXVuZG8tb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QzZcXFwiOyB9XFxuXFxuLmlvbi1pb3MtdW5sb2NrZWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEM5XFxcIjsgfVxcblxcbi5pb24taW9zLXVubG9ja2VkLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEM4XFxcIjsgfVxcblxcbi5pb24taW9zLXVwbG9hZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0Q0JcXFwiOyB9XFxuXFxuLmlvbi1pb3MtdXBsb2FkLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNENBXFxcIjsgfVxcblxcbi5pb24taW9zLXZpZGVvY2FtOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRDRFxcXCI7IH1cXG5cXG4uaW9uLWlvcy12aWRlb2NhbS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRDQ1xcXCI7IH1cXG5cXG4uaW9uLWlvcy12b2x1bWUtaGlnaDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0Q0VcXFwiOyB9XFxuXFxuLmlvbi1pb3Mtdm9sdW1lLWxvdzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0Q0ZcXFwiOyB9XFxuXFxuLmlvbi1pb3Mtd2luZWdsYXNzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjREMVxcXCI7IH1cXG5cXG4uaW9uLWlvcy13aW5lZ2xhc3Mtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RDBcXFwiOyB9XFxuXFxuLmlvbi1pb3Mtd29ybGQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEQzXFxcIjsgfVxcblxcbi5pb24taW9zLXdvcmxkLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEQyXFxcIjsgfVxcblxcbi5pb24taXBhZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxRjlcXFwiOyB9XFxuXFxuLmlvbi1pcGhvbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMUZBXFxcIjsgfVxcblxcbi5pb24taXBvZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxRkJcXFwiOyB9XFxuXFxuLmlvbi1qZXQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjk1XFxcIjsgfVxcblxcbi5pb24ta2V5OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI5NlxcXCI7IH1cXG5cXG4uaW9uLWtuaWZlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI5N1xcXCI7IH1cXG5cXG4uaW9uLWxhcHRvcDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxRkNcXFwiOyB9XFxuXFxuLmlvbi1sZWFmOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjFGRFxcXCI7IH1cXG5cXG4uaW9uLWxldmVsczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyOThcXFwiOyB9XFxuXFxuLmlvbi1saWdodGJ1bGI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjk5XFxcIjsgfVxcblxcbi5pb24tbGluazpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxRkVcXFwiOyB9XFxuXFxuLmlvbi1sb2FkLWE6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjlBXFxcIjsgfVxcblxcbi5pb24tbG9hZC1iOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI5QlxcXCI7IH1cXG5cXG4uaW9uLWxvYWQtYzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyOUNcXFwiOyB9XFxuXFxuLmlvbi1sb2FkLWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjlEXFxcIjsgfVxcblxcbi5pb24tbG9jYXRpb246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMUZGXFxcIjsgfVxcblxcbi5pb24tbG9jay1jb21iaW5hdGlvbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RDRcXFwiOyB9XFxuXFxuLmlvbi1sb2NrZWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjAwXFxcIjsgfVxcblxcbi5pb24tbG9nLWluOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI5RVxcXCI7IH1cXG5cXG4uaW9uLWxvZy1vdXQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjlGXFxcIjsgfVxcblxcbi5pb24tbG9vcDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMDFcXFwiOyB9XFxuXFxuLmlvbi1tYWduZXQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkEwXFxcIjsgfVxcblxcbi5pb24tbWFsZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQTFcXFwiOyB9XFxuXFxuLmlvbi1tYW46YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjAyXFxcIjsgfVxcblxcbi5pb24tbWFwOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIwM1xcXCI7IH1cXG5cXG4uaW9uLW1lZGtpdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQTJcXFwiOyB9XFxuXFxuLmlvbi1tZXJnZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzM0ZcXFwiOyB9XFxuXFxuLmlvbi1taWMtYTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMDRcXFwiOyB9XFxuXFxuLmlvbi1taWMtYjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMDVcXFwiOyB9XFxuXFxuLmlvbi1taWMtYzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMDZcXFwiOyB9XFxuXFxuLmlvbi1taW51czpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMDlcXFwiOyB9XFxuXFxuLmlvbi1taW51cy1jaXJjbGVkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIwN1xcXCI7IH1cXG5cXG4uaW9uLW1pbnVzLXJvdW5kOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIwOFxcXCI7IH1cXG5cXG4uaW9uLW1vZGVsLXM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkMxXFxcIjsgfVxcblxcbi5pb24tbW9uaXRvcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMEFcXFwiOyB9XFxuXFxuLmlvbi1tb3JlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIwQlxcXCI7IH1cXG5cXG4uaW9uLW1vdXNlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM0MFxcXCI7IH1cXG5cXG4uaW9uLW11c2ljLW5vdGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjBDXFxcIjsgfVxcblxcbi5pb24tbmF2aWNvbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMEVcXFwiOyB9XFxuXFxuLmlvbi1uYXZpY29uLXJvdW5kOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIwRFxcXCI7IH1cXG5cXG4uaW9uLW5hdmlnYXRlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJBM1xcXCI7IH1cXG5cXG4uaW9uLW5ldHdvcms6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzQxXFxcIjsgfVxcblxcbi5pb24tbm8tc21va2luZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQzJcXFwiOyB9XFxuXFxuLmlvbi1udWNsZWFyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJBNFxcXCI7IH1cXG5cXG4uaW9uLW91dGxldDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNDJcXFwiOyB9XFxuXFxuLmlvbi1wYWludGJydXNoOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRENVxcXCI7IH1cXG5cXG4uaW9uLXBhaW50YnVja2V0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRENlxcXCI7IH1cXG5cXG4uaW9uLXBhcGVyLWFpcnBsYW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJDM1xcXCI7IH1cXG5cXG4uaW9uLXBhcGVyY2xpcDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMEZcXFwiOyB9XFxuXFxuLmlvbi1wYXVzZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMTBcXFwiOyB9XFxuXFxuLmlvbi1wZXJzb246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjEzXFxcIjsgfVxcblxcbi5pb24tcGVyc29uLWFkZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMTFcXFwiOyB9XFxuXFxuLmlvbi1wZXJzb24tc3RhbGtlcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMTJcXFwiOyB9XFxuXFxuLmlvbi1waWUtZ3JhcGg6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkE1XFxcIjsgfVxcblxcbi5pb24tcGluOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJBNlxcXCI7IH1cXG5cXG4uaW9uLXBpbnBvaW50OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJBN1xcXCI7IH1cXG5cXG4uaW9uLXBpenphOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJBOFxcXCI7IH1cXG5cXG4uaW9uLXBsYW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIxNFxcXCI7IH1cXG5cXG4uaW9uLXBsYW5ldDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNDNcXFwiOyB9XFxuXFxuLmlvbi1wbGF5OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIxNVxcXCI7IH1cXG5cXG4uaW9uLXBsYXlzdGF0aW9uOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjMwQVxcXCI7IH1cXG5cXG4uaW9uLXBsdXM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjE4XFxcIjsgfVxcblxcbi5pb24tcGx1cy1jaXJjbGVkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIxNlxcXCI7IH1cXG5cXG4uaW9uLXBsdXMtcm91bmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjE3XFxcIjsgfVxcblxcbi5pb24tcG9kaXVtOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM0NFxcXCI7IH1cXG5cXG4uaW9uLXBvdW5kOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIxOVxcXCI7IH1cXG5cXG4uaW9uLXBvd2VyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJBOVxcXCI7IH1cXG5cXG4uaW9uLXByaWNldGFnOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJBQVxcXCI7IH1cXG5cXG4uaW9uLXByaWNldGFnczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQUJcXFwiOyB9XFxuXFxuLmlvbi1wcmludGVyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIxQVxcXCI7IH1cXG5cXG4uaW9uLXB1bGwtcmVxdWVzdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNDVcXFwiOyB9XFxuXFxuLmlvbi1xci1zY2FubmVyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM0NlxcXCI7IH1cXG5cXG4uaW9uLXF1b3RlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM0N1xcXCI7IH1cXG5cXG4uaW9uLXJhZGlvLXdhdmVzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJBQ1xcXCI7IH1cXG5cXG4uaW9uLXJlY29yZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMUJcXFwiOyB9XFxuXFxuLmlvbi1yZWZyZXNoOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIxQ1xcXCI7IH1cXG5cXG4uaW9uLXJlcGx5OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIxRVxcXCI7IH1cXG5cXG4uaW9uLXJlcGx5LWFsbDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMURcXFwiOyB9XFxuXFxuLmlvbi1yaWJib24tYTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNDhcXFwiOyB9XFxuXFxuLmlvbi1yaWJib24tYjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNDlcXFwiOyB9XFxuXFxuLmlvbi1zYWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzRBXFxcIjsgfVxcblxcbi5pb24tc2FkLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEQ3XFxcIjsgfVxcblxcbi5pb24tc2Npc3NvcnM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzRCXFxcIjsgfVxcblxcbi5pb24tc2VhcmNoOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIxRlxcXCI7IH1cXG5cXG4uaW9uLXNldHRpbmdzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJBRFxcXCI7IH1cXG5cXG4uaW9uLXNoYXJlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIyMFxcXCI7IH1cXG5cXG4uaW9uLXNodWZmbGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjIxXFxcIjsgfVxcblxcbi5pb24tc2tpcC1iYWNrd2FyZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMjJcXFwiOyB9XFxuXFxuLmlvbi1za2lwLWZvcndhcmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjIzXFxcIjsgfVxcblxcbi5pb24tc29jaWFsLWFuZHJvaWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjI1XFxcIjsgfVxcblxcbi5pb24tc29jaWFsLWFuZHJvaWQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMjRcXFwiOyB9XFxuXFxuLmlvbi1zb2NpYWwtYW5ndWxhcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RDlcXFwiOyB9XFxuXFxuLmlvbi1zb2NpYWwtYW5ndWxhci1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjREOFxcXCI7IH1cXG5cXG4uaW9uLXNvY2lhbC1hcHBsZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMjdcXFwiOyB9XFxuXFxuLmlvbi1zb2NpYWwtYXBwbGUtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMjZcXFwiOyB9XFxuXFxuLmlvbi1zb2NpYWwtYml0Y29pbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQUZcXFwiOyB9XFxuXFxuLmlvbi1zb2NpYWwtYml0Y29pbi1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJBRVxcXCI7IH1cXG5cXG4uaW9uLXNvY2lhbC1idWZmZXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjI5XFxcIjsgfVxcblxcbi5pb24tc29jaWFsLWJ1ZmZlci1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIyOFxcXCI7IH1cXG5cXG4uaW9uLXNvY2lhbC1jaHJvbWU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNERCXFxcIjsgfVxcblxcbi5pb24tc29jaWFsLWNocm9tZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjREQVxcXCI7IH1cXG5cXG4uaW9uLXNvY2lhbC1jb2RlcGVuOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRERFxcXCI7IH1cXG5cXG4uaW9uLXNvY2lhbC1jb2RlcGVuLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNERDXFxcIjsgfVxcblxcbi5pb24tc29jaWFsLWNzczM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNERGXFxcIjsgfVxcblxcbi5pb24tc29jaWFsLWNzczMtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0REVcXFwiOyB9XFxuXFxuLmlvbi1zb2NpYWwtZGVzaWduZXJuZXdzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIyQlxcXCI7IH1cXG5cXG4uaW9uLXNvY2lhbC1kZXNpZ25lcm5ld3Mtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMkFcXFwiOyB9XFxuXFxuLmlvbi1zb2NpYWwtZHJpYmJibGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjJEXFxcIjsgfVxcblxcbi5pb24tc29jaWFsLWRyaWJiYmxlLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjJDXFxcIjsgfVxcblxcbi5pb24tc29jaWFsLWRyb3Bib3g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjJGXFxcIjsgfVxcblxcbi5pb24tc29jaWFsLWRyb3Bib3gtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMkVcXFwiOyB9XFxuXFxuLmlvbi1zb2NpYWwtZXVybzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RTFcXFwiOyB9XFxuXFxuLmlvbi1zb2NpYWwtZXVyby1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRFMFxcXCI7IH1cXG5cXG4uaW9uLXNvY2lhbC1mYWNlYm9vazpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMzFcXFwiOyB9XFxuXFxuLmlvbi1zb2NpYWwtZmFjZWJvb2stb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMzBcXFwiOyB9XFxuXFxuLmlvbi1zb2NpYWwtZm91cnNxdWFyZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNERcXFwiOyB9XFxuXFxuLmlvbi1zb2NpYWwtZm91cnNxdWFyZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM0Q1xcXCI7IH1cXG5cXG4uaW9uLXNvY2lhbC1mcmVlYnNkLWRldmlsOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJDNFxcXCI7IH1cXG5cXG4uaW9uLXNvY2lhbC1naXRodWI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjMzXFxcIjsgfVxcblxcbi5pb24tc29jaWFsLWdpdGh1Yi1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIzMlxcXCI7IH1cXG5cXG4uaW9uLXNvY2lhbC1nb29nbGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzRGXFxcIjsgfVxcblxcbi5pb24tc29jaWFsLWdvb2dsZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM0RVxcXCI7IH1cXG5cXG4uaW9uLXNvY2lhbC1nb29nbGVwbHVzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIzNVxcXCI7IH1cXG5cXG4uaW9uLXNvY2lhbC1nb29nbGVwbHVzLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjM0XFxcIjsgfVxcblxcbi5pb24tc29jaWFsLWhhY2tlcm5ld3M6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjM3XFxcIjsgfVxcblxcbi5pb24tc29jaWFsLWhhY2tlcm5ld3Mtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMzZcXFwiOyB9XFxuXFxuLmlvbi1zb2NpYWwtaHRtbDU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEUzXFxcIjsgfVxcblxcbi5pb24tc29jaWFsLWh0bWw1LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEUyXFxcIjsgfVxcblxcbi5pb24tc29jaWFsLWluc3RhZ3JhbTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNTFcXFwiOyB9XFxuXFxuLmlvbi1zb2NpYWwtaW5zdGFncmFtLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzUwXFxcIjsgfVxcblxcbi5pb24tc29jaWFsLWphdmFzY3JpcHQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEU1XFxcIjsgfVxcblxcbi5pb24tc29jaWFsLWphdmFzY3JpcHQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RTRcXFwiOyB9XFxuXFxuLmlvbi1zb2NpYWwtbGlua2VkaW46YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjM5XFxcIjsgfVxcblxcbi5pb24tc29jaWFsLWxpbmtlZGluLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjM4XFxcIjsgfVxcblxcbi5pb24tc29jaWFsLW1hcmtkb3duOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRFNlxcXCI7IH1cXG5cXG4uaW9uLXNvY2lhbC1ub2RlanM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEU3XFxcIjsgfVxcblxcbi5pb24tc29jaWFsLW9jdG9jYXQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEU4XFxcIjsgfVxcblxcbi5pb24tc29jaWFsLXBpbnRlcmVzdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQjFcXFwiOyB9XFxuXFxuLmlvbi1zb2NpYWwtcGludGVyZXN0LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkIwXFxcIjsgfVxcblxcbi5pb24tc29jaWFsLXB5dGhvbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RTlcXFwiOyB9XFxuXFxuLmlvbi1zb2NpYWwtcmVkZGl0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIzQlxcXCI7IH1cXG5cXG4uaW9uLXNvY2lhbC1yZWRkaXQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyM0FcXFwiOyB9XFxuXFxuLmlvbi1zb2NpYWwtcnNzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIzRFxcXCI7IH1cXG5cXG4uaW9uLXNvY2lhbC1yc3Mtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyM0NcXFwiOyB9XFxuXFxuLmlvbi1zb2NpYWwtc2FzczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RUFcXFwiOyB9XFxuXFxuLmlvbi1zb2NpYWwtc2t5cGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjNGXFxcIjsgfVxcblxcbi5pb24tc29jaWFsLXNreXBlLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjNFXFxcIjsgfVxcblxcbi5pb24tc29jaWFsLXNuYXBjaGF0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRFQ1xcXCI7IH1cXG5cXG4uaW9uLXNvY2lhbC1zbmFwY2hhdC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRFQlxcXCI7IH1cXG5cXG4uaW9uLXNvY2lhbC10dW1ibHI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjQxXFxcIjsgfVxcblxcbi5pb24tc29jaWFsLXR1bWJsci1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI0MFxcXCI7IH1cXG5cXG4uaW9uLXNvY2lhbC10dXg6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkM1XFxcIjsgfVxcblxcbi5pb24tc29jaWFsLXR3aXRjaDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RUVcXFwiOyB9XFxuXFxuLmlvbi1zb2NpYWwtdHdpdGNoLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEVEXFxcIjsgfVxcblxcbi5pb24tc29jaWFsLXR3aXR0ZXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjQzXFxcIjsgfVxcblxcbi5pb24tc29jaWFsLXR3aXR0ZXItb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNDJcXFwiOyB9XFxuXFxuLmlvbi1zb2NpYWwtdXNkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM1M1xcXCI7IH1cXG5cXG4uaW9uLXNvY2lhbC11c2Qtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNTJcXFwiOyB9XFxuXFxuLmlvbi1zb2NpYWwtdmltZW86YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjQ1XFxcIjsgfVxcblxcbi5pb24tc29jaWFsLXZpbWVvLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjQ0XFxcIjsgfVxcblxcbi5pb24tc29jaWFsLXdoYXRzYXBwOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRGMFxcXCI7IH1cXG5cXG4uaW9uLXNvY2lhbC13aGF0c2FwcC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRFRlxcXCI7IH1cXG5cXG4uaW9uLXNvY2lhbC13aW5kb3dzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI0N1xcXCI7IH1cXG5cXG4uaW9uLXNvY2lhbC13aW5kb3dzLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjQ2XFxcIjsgfVxcblxcbi5pb24tc29jaWFsLXdvcmRwcmVzczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNDlcXFwiOyB9XFxuXFxuLmlvbi1zb2NpYWwtd29yZHByZXNzLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjQ4XFxcIjsgfVxcblxcbi5pb24tc29jaWFsLXlhaG9vOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI0QlxcXCI7IH1cXG5cXG4uaW9uLXNvY2lhbC15YWhvby1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI0QVxcXCI7IH1cXG5cXG4uaW9uLXNvY2lhbC15ZW46YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEYyXFxcIjsgfVxcblxcbi5pb24tc29jaWFsLXllbi1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRGMVxcXCI7IH1cXG5cXG4uaW9uLXNvY2lhbC15b3V0dWJlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI0RFxcXCI7IH1cXG5cXG4uaW9uLXNvY2lhbC15b3V0dWJlLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjRDXFxcIjsgfVxcblxcbi5pb24tc291cC1jYW46YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEY0XFxcIjsgfVxcblxcbi5pb24tc291cC1jYW4tb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RjNcXFwiOyB9XFxuXFxuLmlvbi1zcGVha2VycGhvbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkIyXFxcIjsgfVxcblxcbi5pb24tc3BlZWRvbWV0ZXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkIzXFxcIjsgfVxcblxcbi5pb24tc3Bvb246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkI0XFxcIjsgfVxcblxcbi5pb24tc3RhcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNEVcXFwiOyB9XFxuXFxuLmlvbi1zdGF0cy1iYXJzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJCNVxcXCI7IH1cXG5cXG4uaW9uLXN0ZWFtOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjMwQlxcXCI7IH1cXG5cXG4uaW9uLXN0b3A6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjRGXFxcIjsgfVxcblxcbi5pb24tdGhlcm1vbWV0ZXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkI2XFxcIjsgfVxcblxcbi5pb24tdGh1bWJzZG93bjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNTBcXFwiOyB9XFxuXFxuLmlvbi10aHVtYnN1cDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNTFcXFwiOyB9XFxuXFxuLmlvbi10b2dnbGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzU1XFxcIjsgfVxcblxcbi5pb24tdG9nZ2xlLWZpbGxlZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNTRcXFwiOyB9XFxuXFxuLmlvbi10cmFuc2dlbmRlcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RjVcXFwiOyB9XFxuXFxuLmlvbi10cmFzaC1hOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI1MlxcXCI7IH1cXG5cXG4uaW9uLXRyYXNoLWI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjUzXFxcIjsgfVxcblxcbi5pb24tdHJvcGh5OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM1NlxcXCI7IH1cXG5cXG4uaW9uLXRzaGlydDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RjdcXFwiOyB9XFxuXFxuLmlvbi10c2hpcnQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RjZcXFwiOyB9XFxuXFxuLmlvbi11bWJyZWxsYTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQjdcXFwiOyB9XFxuXFxuLmlvbi11bml2ZXJzaXR5OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM1N1xcXCI7IH1cXG5cXG4uaW9uLXVubG9ja2VkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI1NFxcXCI7IH1cXG5cXG4uaW9uLXVwbG9hZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNTVcXFwiOyB9XFxuXFxuLmlvbi11c2I6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkI4XFxcIjsgfVxcblxcbi5pb24tdmlkZW9jYW1lcmE6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjU2XFxcIjsgfVxcblxcbi5pb24tdm9sdW1lLWhpZ2g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjU3XFxcIjsgfVxcblxcbi5pb24tdm9sdW1lLWxvdzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNThcXFwiOyB9XFxuXFxuLmlvbi12b2x1bWUtbWVkaXVtOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI1OVxcXCI7IH1cXG5cXG4uaW9uLXZvbHVtZS1tdXRlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI1QVxcXCI7IH1cXG5cXG4uaW9uLXdhbmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzU4XFxcIjsgfVxcblxcbi5pb24td2F0ZXJkcm9wOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI1QlxcXCI7IH1cXG5cXG4uaW9uLXdpZmk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjVDXFxcIjsgfVxcblxcbi5pb24td2luZWdsYXNzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJCOVxcXCI7IH1cXG5cXG4uaW9uLXdvbWFuOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI1RFxcXCI7IH1cXG5cXG4uaW9uLXdyZW5jaDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQkFcXFwiOyB9XFxuXFxuLmlvbi14Ym94OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjMwQ1xcXCI7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICA7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vZm9udHMvaW9uaWNvbnMuY3NzJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJpbXBvcnQgVnVlIGZyb20gJ25hdGl2ZXNjcmlwdC12dWUnXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSdcbmltcG9ydCBIb21lIGZyb20gJy4vdmlld3MvSG9tZS52dWUnXG5pbXBvcnQgVnVlRGV2dG9vbHMgZnJvbSAnbmF0aXZlc2NyaXB0LXZ1ZS1kZXZ0b29scydcbmltcG9ydCBSYWRMaXN0VmlldyBmcm9tICduYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvdnVlJ1xuXG5WdWUudXNlKFJhZExpc3RWaWV3KVxuVnVlLnJlZ2lzdGVyRWxlbWVudCgnQmFyY29kZVNjYW5uZXInLCAoKSA9PiByZXF1aXJlKCduYXRpdmVzY3JpcHQtYmFyY29kZXNjYW5uZXInKS5CYXJjb2RlU2Nhbm5lclZpZXcpXG5cbi8vZm9udGljb24gcGx1Z2luXG5pbXBvcnQgeyBUTlNGb250SWNvbiwgZm9udGljb24gfSBmcm9tICduYXRpdmVzY3JpcHQtZm9udGljb24nO1xuVE5TRm9udEljb24uZGVidWcgPSBmYWxzZTtcblROU0ZvbnRJY29uLnBhdGhzID0ge1xuICAnZmEnOiAnLi9mb250cy9mb250LWF3ZXNvbWUuY3NzJyxcbiAgJ2lvbic6ICcuL2ZvbnRzL2lvbmljb25zLmNzcycsXG59O1xuVE5TRm9udEljb24ubG9hZENzcygpO1xuVnVlLmZpbHRlcignZm9udGljb24nLCBmb250aWNvbik7XG5cblxuaWYgKFROU19FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBWdWUudXNlKFZ1ZURldnRvb2xzKVxufVxuLy8gUHJpbnRzIFZ1ZSBsb2dzIHdoZW4gLS1lbnYucHJvZHVjdGlvbiBpcyAqTk9UKiBzZXQgd2hpbGUgYnVpbGRpbmdcblZ1ZS5jb25maWcuc2lsZW50ID0gKFROU19FTlYgPT09ICdwcm9kdWN0aW9uJylcblxuXG5uZXcgVnVlKHtcbiAgc3RvcmUsXG4gIHJlbmRlcjogaCA9PiBoKCdmcmFtZScsIFtoKEhvbWUpXSlcbn0pLiRzdGFydCgpXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cbiAgICAvLyBjb25zdHJ1Y3Rvcih7YW5pbWFsX2lkLCBhbmltYWxfbmFtZSwgYW5pbWFsX3R5cGUsIHNleCwgYWdlLCBET0IsIHByaW1hcnlfY29sb3IsIHNlY29uZGFyeV9jb2xvciwgYnJlZWRfZ3JvdXAsIHByaW1hcnlfYnJlZWQsIHNlY29uZGFyeV9icmVlZCwgYW5pbWFsX3N0YXQsIHN0YW1wICB9KSB7XG4gICAgLy8gICAgIHRoaXMuYW5pbWFsX2lkID0gYW5pbWFsX2lkXG4gICAgLy8gICAgIHRoaXMuYW5pbWFsX25hbWUgPSBhbmltYWxfbmFtZVxuICAgIC8vICAgICB0aGlzLmFuaW1hbF90eXBlID0gYW5pbWFsX3R5cGVcbiAgICAvLyAgICAgdGhpcy5zZXggPSBzZXhcbiAgICAvLyAgICAgdGhpcy5hZ2UgPSBhZ2VcbiAgICAvLyAgICAgdGhpcy5ET0IgPSBudURPQmxsXG4gICAgLy8gICAgIHRoaXMucHJpbWFyeV9jb2xvciA9IHByaW1hcnlfY29sb3JcbiAgICAvLyAgICAgdGhpcy5zZWNvbmRhcnlfY29sb3IgPSBzZWNvbmRhcnlfY29sb3JcbiAgICAvLyAgICAgdGhpcy5icmVlZF9ncm91cCA9IGJyZWVkX2dyb3VwXG4gICAgLy8gICAgIHRoaXMucHJpbWFyeV9icmVlZCA9IHByaW1hcnlfYnJlZWRcbiAgICAvLyAgICAgdGhpcy5zZWNvbmRhcnlfYnJlZWQgPSBzZWNvbmRhcnlfYnJlZWRcbiAgICAvLyAgICAgdGhpcy5hbmltYWxfc3RhdCA9IGFuaW1hbF9zdGF0XG4gICAgLy8gICAgIHRoaXMuc3RhbXAgPSBzdGFtcFxuICAgIC8vIH1cblxuXG4gICAgLy8gY2F0ZWdvcnk6IFwiRG9nXCIsXG4gICAgLy8gY2F0ZWdvcnlUYWc6IFwiIzI3QUU2MFwiLFxuICAgIC8vIGJyZWVkX2dyb3VwOiBcIkhvdW5kXCIsXG4gICAgLy8gcHJpbWFyeV9icmVlZDogXCJCZWFnbGVcIixcbiAgICAvLyBhZ2U6IFwiMTBcIixcbiAgICAvLyBnZW5kZXI6IFwiTVwiLFxuICAgIC8vIGFuaW1hbF9zaXplOiBcIlNtYWxsXCIsXG4gICAgLy8gcHJpbWFyeV9jb2xvcjogXCJUYW5cIixcbiAgICAvLyBsb2NhdGlvbjogXCJEb3duZXlcIixcbiAgICAvLyBpc0F2YWlsYWJsZTogZmFsc2UsXG4gICAgLy8gaXNGYXZvcml0ZTogdHJ1ZSxcbiAgICAvLyBjb21tZW50czogMTEsXG4gICAgLy8gcmF0aW5nOiBcIjQuMFwiLFxuICAgIC8vIGRlc2NyaXB0aW9uOiBcImFcIlxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3IgKHF1ZXN0aW9uKSB7XG4gICAgdGhpcy5pZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMDApXG4gICAgdGhpcy5xdWVzdGlvbiA9IHF1ZXN0aW9uXG4gICAgdGhpcy5hbnN3ZXIgPSBudWxsXG4gICAgdGhpcy5jb3VudCA9IDBcbiAgfVxufSIsIiAgZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmxvY2F0aW9uID0gJ3RlbXAnXG4gIH1cblxuICBzZXRMb2NhdGlvbiAocXJDb2RlKSB7XG4gICAgdGhpcy5sb2NhdGlvbiA9IHFyQ29kZVxuICB9XG5cbiAgc2V0VGlja2V0SW5mbyAoeyBwaG9uZSwgbmFtZSwgcXVlcnkgfSkge1xuICAgIHRoaXMucGhvbmUgPSBwaG9uZVxuICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLnRpbWVJbiA9IG5ldyBEYXRlKClcbiAgfVxuXG59XG4iLCJjb25zdCBodHRwTW9kdWxlID0gcmVxdWlyZSgndG5zLWNvcmUtbW9kdWxlcy9odHRwJylcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGdldEFuaW1hbHMoKSB7XG4gICAgICAgIHJldHVybiBodHRwTW9kdWxlLmdldEpTT04oYGh0dHBzOi8vYWN1YXNlcnZlci5oZXJva3VhcHAuY29tL2FuaW1hbHNgKVxuICAgIH1cbn1cblxuXG4iLCJpbXBvcnQgeyBmYXFzIH0gZnJvbSAnQC9kYi9mYXFzLmpzb24nXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0RmFxcyAoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByZXNvbHZlKGZhcXMpXG4gICAgICB9LCAxMClcbiAgICB9KVxuICB9LFxuICBhZGRGYXEgKGVudHJ5KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByZXNvbHZlKGVudHJ5KVxuICAgICAgfSwgMTApXG4gICAgfSlcbiAgfVxufVxuIiwiLy8gaW1wb3J0IHsgdGlja2V0cyB9IGZyb20gJ0AvZGIvZmFxcy5qc29uJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIC8vIGdldFRpY2tldHMgKCkge1xuICAvLyAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIC8vICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgLy8gICAgICAgcmVzb2x2ZSh7IGRhdGE6IHRpY2tldHMgfSlcbiAgLy8gICAgIH0sIDEwKVxuICAvLyAgIH0pXG4gIC8vIH0sXG4gIGFkZFRpY2tldCAoZW50cnkpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJlc29sdmUoZW50cnkpXG4gICAgICB9LCAxMClcbiAgICB9KVxuICB9XG59XG4iLCJjb25zdCBodHRwTW9kdWxlID0gcmVxdWlyZSgndG5zLWNvcmUtbW9kdWxlcy9odHRwJylcblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXRGYXFzICgpIHtcbiAgICByZXR1cm4gaHR0cE1vZHVsZS5nZXRKU09OKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvZmFxcycpXG4gIH0sXG4gIGFkZEZhcSAoZmFxKSB7XG4gICAgcmV0dXJuIGh0dHBNb2R1bGUucmVxdWVzdCh7XG4gICAgICAvLyB1cmw6IGBodHRwczovL2FjdWEtc2VydmVyLmhlcm9rdWFwcC5jb20vZmFxc2AsXG4gICAgICAvLyB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnLFxuICAgICAgdXJsOiAnaHR0cHM6Ly9hY3Vhc2VydmVyLmhlcm9rdWFwcC5jb20vdGlja2V0cycsXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICAgIGNvbnRlbnQ6IEpTT04uc3RyaW5naWZ5KGZhcSlcbiAgICB9KVxuICB9XG59XG4iLCJjb25zdCBodHRwTW9kdWxlID0gcmVxdWlyZSgndG5zLWNvcmUtbW9kdWxlcy9odHRwJylcblxuZXhwb3J0IGRlZmF1bHQge1xuICBhZGRUaWNrZXQgKHRpY2tldCkge1xuICAgIHJldHVybiBodHRwTW9kdWxlLnJlcXVlc3Qoe1xuICAgICAgLy8gdXJsOiBgaHR0cDovL1s6OjFdOjMwMDAvdGlja2V0c2AsXG4gICAgICAvLyB1cmw6YGh0dHBzOi8vYWN1YXRlYW0uaGVyb2t1YXBwLmNvbS90aWNrZXRzYCxcbiAgICAgIHVybDogJ2h0dHBzOi8vYWN1YXNlcnZlci5oZXJva3VhcHAuY29tL3RpY2tldHMnLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgICBjb250ZW50OiBKU09OLnN0cmluZ2lmeSh0aWNrZXQpXG4gICAgfSlcbiAgfSxcblxuICBjaGVja1RpY2tldCAodGlja2V0SWQpIHtcbiAgICByZXR1cm4gaHR0cE1vZHVsZS5nZXRKU09OKFxuICAgICAgICBgaHR0cDovL1s6OjFdOjMwMDAvdGlja2V0cy8ke3RpY2tldElkfWBcbiAgICAgICAgLy8gYGh0dHBzOi8vYWN1YXRlYW0uaGVyb2t1YXBwLmNvbS90aWNrZXRzLyR7dGlja2V0SWR9YFxuXG4gICl9XG59XG4iLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBWdWV4IGZyb20gJ3Z1ZXgnXG5pbXBvcnQgQW5pbWFsIGZyb20gJ0AvbW9kZWxzL0FuaW1hbCdcbmltcG9ydCBUaWNrZXQgZnJvbSAnQC9tb2RlbHMvVGlja2V0J1xuaW1wb3J0IFRpY2tldFNlcnZpY2UgZnJvbSAnQC9zZXJ2aWNlcy9UaWNrZXRTZXJ2aWNlJ1xuaW1wb3J0IEZhcVNlcnZpY2UgZnJvbSAnQC9zZXJ2aWNlcy9GYXFTZXJ2aWNlJ1xuLy8gaW1wb3J0IFRpY2tldFNlcnZpY2UgZnJvbSAnQC9zZXJ2aWNlcy9GYWtlVGlja2V0U2VydmljZSdcbi8vIGltcG9ydCBGYXFTZXJ2aWNlIGZyb20gJ0Avc2VydmljZXMvRmFrZUZhcVNlcnZpY2UnXG5cblZ1ZS51c2UoVnVleClcblxuZXhwb3J0IGRlZmF1bHQgbmV3IFZ1ZXguU3RvcmUoe1xuICBzdGF0ZToge1xuICAgIGFuaW1hbHM6IFtdLFxuICAgIHRpY2tldHM6IFtdLFxuICAgIGZhcXM6IFtdLFxuICAgIHVzZXJBbmltYWw6IG5ldyBBbmltYWwoKSxcbiAgICB1c2VyRmFxOiB7fSxcbiAgICBsb2NhdGlvbjogJ0Rvd25leScsXG4gICAgdXNlclRpY2tldDogbmV3IFRpY2tldCgpLFxuICAgIGFwcHJvdmVkVGlja2V0OiB1bmRlZmluZWRcbiAgfSxcbiAgLy8gY2hhbmdlIHRoZSBzdGF0ZSBvZiB0aGUgYXBwIChtdXN0IGJlIHN5bmNocm9ub3VzKVxuICBtdXRhdGlvbnM6IHtcbiAgICAvLyBhZG9wdGlvblxuICAgIHN0b3JlQW5pbWFsKHN0YXRlLCBhbmltYWwpIHtcbiAgICAgIHN0YXRlLnVzZXJGYXEgPSBhbmltYWxcbiAgICB9LFxuICAgIEFERF9BTklNQUwoc3RhdGUsIGFuaW1hbCkge1xuICAgICAgc3RhdGUuYW5pbWFscy5wdXNoKGFuaW1hbClcbiAgICB9LFxuICAgIHN0b3JlRmFxKHN0YXRlLCBmYXEpIHtcbiAgICAgIHN0YXRlLnVzZXJGYXEgPSBmYXFcbiAgICB9LFxuICAgIHNldFRpY2tldExvY2F0aW9uIChzdGF0ZSwgbG9jYXRpb24pIHtcbiAgICAgIHN0YXRlLmxvY2F0aW9uID0gbG9jYXRpb25cbiAgICB9LFxuICAgIHNldFRpY2tldEluZm8gKHN0YXRlLCB1c2VySW5wdXQpIHtcbiAgICAgIHN0YXRlLnVzZXJUaWNrZXQuc2V0VGlja2V0SW5mbyh1c2VySW5wdXQpXG4gICAgfSxcbiAgICBzdG9yZVRpY2tldCAoc3RhdGUsIHRpY2tldCkge1xuICAgICAgc3RhdGUudXNlclRpY2tldCA9IHRpY2tldFxuICAgIH0sXG4gICAgU0VUX1RJQ0tFVCAoc3RhdGUsIHRpY2tldCkge1xuICAgICAgc3RhdGUuYXBwcm92ZWRUaWNrZXQgPSB0aWNrZXRcbiAgICB9LFxuICAgIEFERF9USUNLRVQgKHN0YXRlLCB0aWNrZXQpIHtcbiAgICAgIHN0YXRlLmFwcHJvdmVkVGlja2V0ID0gdGlja2V0XG4gICAgfSxcbiAgICBTRVRfRkFRUyAoc3RhdGUsIGZhcXMpIHtcbiAgICAgIHN0YXRlLmZhcXMgPSBmYXFzXG4gICAgfSxcbiAgICBBRERfRkFRIChzdGF0ZSwgZmFxKSB7XG4gICAgICBzdGF0ZS5mYXFzLnB1c2goZmFxKVxuICAgIH1cbiAgICBcblxuICB9LFxuICAvLyBhc3luY2hyb25vdXMgb3BlcmF0aW9ucyAoU3VjaCBhcyBBUEkgY2FsbHMpXG4gIGFjdGlvbnM6IHtcbiAgICBjaGVja1RpY2tldCAoeyBjb21taXQgfSwgdGlja2V0SWQpIHtcbiAgICAgIFRpY2tldFNlcnZpY2UuY2hlY2tUaWNrZXQodGlja2V0SWQpXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgY29tbWl0KCdTRVRfVElDS0VUJywgcmVzKVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgYWRkVGlja2V0ICh7IGNvbW1pdCB9LCB0aWNrZXQpIHtcbiAgICAgIFRpY2tldFNlcnZpY2UuYWRkVGlja2V0KHRpY2tldClcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICBjb21taXQoJ0FERF9USUNLRVQnLCByZXMuY29udGVudC50b0pTT04oKSlcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIGxvYWRGYXFzICh7IGNvbW1pdCB9KSB7XG4gICAgICBGYXFTZXJ2aWNlLmdldEZhcXMoKVxuICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgIGNvbW1pdCgnU0VUX0ZBUVMnLCByZXMpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBhZGRGYXEgKHsgY29tbWl0IH0sIGZhcSkge1xuICAgICAgRmFxU2VydmljZS5hZGRGYXEoZmFxKVxuICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgIGNvbW1pdCgnQUREX0ZBUScsIHJlcy5jb250ZW50LnRvSlNPTigpKVxuICAgICAgICB9KVxuICAgIH1cbiAgfSxcbiAgZ2V0dGVyczoge1xuICAgIGdldFNlYXJjaFJlc3VsdHM6IHN0YXRlID0+IHNlYXJjaCA9PiB7XG4gICAgICBpZiAoc2VhcmNoID09PSAnJylcbiAgICAgICAgcmV0dXJuIHN0YXRlLmZhcXNcbiAgICAgIFxuICAgICAgY29uc3Qgd29yZHMgPSBzZWFyY2guc3BsaXQoJyAnKVxuICAgICAgXG4gICAgICByZXR1cm4gc3RhdGUuZmFxcy5maWx0ZXIoZmFxID0+IHdvcmRzLnNvbWUoXG4gICAgICAgIHdvcmQgPT4gZmFxLnF1ZXJ5LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMod29yZC50b0xvd2VyQ2FzZSgpKVxuICAgICAgICB8fCBmYXEuYW5zd2VyLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMod29yZC50b0xvd2VyQ2FzZSgpKSkpXG4gICAgfVxuICB9XG59KVxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9BZG9wdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YjE1MTA0ZjImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQWRvcHRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BZG9wdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vQWRvcHRpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9EclNhbXNvbm5pdGUvRGVza3RvcC9DUyBDb3Vyc2UgbWF0ZXJpYWxzL1NlbmlvciBERXNpZ24vYWN1YV92ZXJzaW9pbnMvYWN1YVZfMi4xL2FjdWEtbW9iaWxlL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2IxNTEwNGYyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2IxNTEwNGYyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2IxNTEwNGYyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BZG9wdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YjE1MTA0ZjImXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYjE1MTA0ZjInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZpZXdzL0Fkb3B0aW9uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BZG9wdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BZG9wdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Fkb3B0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Fkb3B0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Fkb3B0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iMTUxMDRmMiZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRmFxLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lMzlkMTA5MiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9GYXEudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9GYXEudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0ZhcS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1lMzlkMTA5MiZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImUzOWQxMDkyXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL0RyU2Ftc29ubml0ZS9EZXNrdG9wL0NTIENvdXJzZSBtYXRlcmlhbHMvU2VuaW9yIERFc2lnbi9hY3VhX3ZlcnNpb2lucy9hY3VhVl8yLjEvYWN1YS1tb2JpbGUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnZTM5ZDEwOTInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZTM5ZDEwOTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZTM5ZDEwOTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0ZhcS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZTM5ZDEwOTImc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZTM5ZDEwOTInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZpZXdzL0ZhcS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmFxLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZhcS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GYXEudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZTM5ZDEwOTImc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GYXEudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZTM5ZDEwOTImc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZhcS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZTM5ZDEwOTImc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJmMmJlN2U0JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJmMmJlN2U0JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMmYyYmU3ZTRcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvRHJTYW1zb25uaXRlL0Rlc2t0b3AvQ1MgQ291cnNlIG1hdGVyaWFscy9TZW5pb3IgREVzaWduL2FjdWFfdmVyc2lvaW5zL2FjdWFWXzIuMS9hY3VhLW1vYmlsZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyZjJiZTdlNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyZjJiZTdlNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyZjJiZTdlNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSG9tZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmYyYmU3ZTQmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMmYyYmU3ZTQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZpZXdzL0hvbWUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJmMmJlN2U0JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yZjJiZTdlNCZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmYyYmU3ZTQmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0xvY2F0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zZTU5Nzg2NCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Mb2NhdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0xvY2F0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9Mb2NhdGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zZTU5Nzg2NCZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjNlNTk3ODY0XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL0RyU2Ftc29ubml0ZS9EZXNrdG9wL0NTIENvdXJzZSBtYXRlcmlhbHMvU2VuaW9yIERFc2lnbi9hY3VhX3ZlcnNpb2lucy9hY3VhVl8yLjEvYWN1YS1tb2JpbGUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnM2U1OTc4NjQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnM2U1OTc4NjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnM2U1OTc4NjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0xvY2F0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zZTU5Nzg2NCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczZTU5Nzg2NCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmlld3MvTG9jYXRpb24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvY2F0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvY2F0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvY2F0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNlNTk3ODY0JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9jYXRpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2U1OTc4NjQmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvY2F0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zZTU5Nzg2NCZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU2VydmljZVJlcXVlc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNjY2VjZjA5JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1NlcnZpY2VSZXF1ZXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU2VydmljZVJlcXVlc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1NlcnZpY2VSZXF1ZXN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNjY2VjZjA5JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIzY2NlY2YwOVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9EclNhbXNvbm5pdGUvRGVza3RvcC9DUyBDb3Vyc2UgbWF0ZXJpYWxzL1NlbmlvciBERXNpZ24vYWN1YV92ZXJzaW9pbnMvYWN1YVZfMi4xL2FjdWEtbW9iaWxlL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzNjY2VjZjA5JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzNjY2VjZjA5JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzNjY2VjZjA5JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TZXJ2aWNlUmVxdWVzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2NjZWNmMDkmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignM2NjZWNmMDknLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZpZXdzL1NlcnZpY2VSZXF1ZXN0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZXJ2aWNlUmVxdWVzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZXJ2aWNlUmVxdWVzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NlcnZpY2VSZXF1ZXN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNjY2VjZjA5JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NlcnZpY2VSZXF1ZXN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNjY2VjZjA5JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NlcnZpY2VSZXF1ZXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zY2NlY2YwOSZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVGlja2V0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wN2I0MGMwYSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9UaWNrZXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9UaWNrZXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1RpY2tldC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wN2I0MGMwYSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMDdiNDBjMGFcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvRHJTYW1zb25uaXRlL0Rlc2t0b3AvQ1MgQ291cnNlIG1hdGVyaWFscy9TZW5pb3IgREVzaWduL2FjdWFfdmVyc2lvaW5zL2FjdWFWXzIuMS9hY3VhLW1vYmlsZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwN2I0MGMwYScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwN2I0MGMwYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwN2I0MGMwYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVGlja2V0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wN2I0MGMwYSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwN2I0MGMwYScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmlld3MvVGlja2V0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UaWNrZXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGlja2V0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGlja2V0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTA3YjQwYzBhJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RpY2tldC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wN2I0MGMwYSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UaWNrZXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA3YjQwYzBhJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9UaWNrZXRGb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02YThiZmY1ZiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9UaWNrZXRGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVGlja2V0Rm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjZhOGJmZjVmXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL0RyU2Ftc29ubml0ZS9EZXNrdG9wL0NTIENvdXJzZSBtYXRlcmlhbHMvU2VuaW9yIERFc2lnbi9hY3VhX3ZlcnNpb2lucy9hY3VhVl8yLjEvYWN1YS1tb2JpbGUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNmE4YmZmNWYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNmE4YmZmNWYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNmE4YmZmNWYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1RpY2tldEZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZhOGJmZjVmJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzZhOGJmZjVmJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2aWV3cy9UaWNrZXRGb3JtLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UaWNrZXRGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RpY2tldEZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RpY2tldEZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZhOGJmZjVmJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9UaWNrZXRPcHRpb25zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xMzlkOTU1MyZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9UaWNrZXRPcHRpb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVGlja2V0T3B0aW9ucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vVGlja2V0T3B0aW9ucy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xMzlkOTU1MyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMTM5ZDk1NTNcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvRHJTYW1zb25uaXRlL0Rlc2t0b3AvQ1MgQ291cnNlIG1hdGVyaWFscy9TZW5pb3IgREVzaWduL2FjdWFfdmVyc2lvaW5zL2FjdWFWXzIuMS9hY3VhLW1vYmlsZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxMzlkOTU1MycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxMzlkOTU1MycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxMzlkOTU1MycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVGlja2V0T3B0aW9ucy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTM5ZDk1NTMmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMTM5ZDk1NTMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZpZXdzL1RpY2tldE9wdGlvbnMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RpY2tldE9wdGlvbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGlja2V0T3B0aW9ucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RpY2tldE9wdGlvbnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTM5ZDk1NTMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGlja2V0T3B0aW9ucy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xMzlkOTU1MyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UaWNrZXRPcHRpb25zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xMzlkOTU1MyZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=