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
//
//
//
//
//
//
//
//
//
//
//
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
        if (newVal !== null) {
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      choices: ['Can I go to the kennel?', 'other'],
      otherText: '',
      selectedIndex: 0,
      isTicket: false,
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
      if (this.selectedIndex === 1) this.isTicket = true;else this.isTicket = false;
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
exports.push([module.i, "/**\r\n * Convenient single import for light variables\r\n * Includes base variables with light overrides\r\n **/\n/**\r\n * Light variable overrides\r\n **/\n/**\r\n * Theme variables overrides\r\n**/\n.anim-cover[data-v-5ff7d15c] {\n  opacity: 0;\n  animation-name: key-cover-data-v-5ff7d15c;\n  animation-duration: 1;\n  animation-delay: 0.5;\n  animation-fill-mode: forwards;\n  animation-iteration-count: 1;\n  animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n@keyframes key-cover-data-v-5ff7d15c {\n0% {\n    opacity: 0;\n    transform: translate(0, 100) scale(0, 0);\n    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n30% {\n    opacity: 0.5;\n    transform: scale(0.6, 0.6);\n    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n100% {\n    opacity: 1;\n    transform: translate(0, 0) scale(1, 1);\n    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n}\n.anim-content1[data-v-5ff7d15c] {\n  opacity: 0;\n  animation-name: key-content-data-v-5ff7d15c;\n  animation-duration: 1;\n  animation-delay: 0.75;\n  animation-fill-mode: forwards;\n  animation-iteration-count: 1;\n  animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n.anim-content2[data-v-5ff7d15c] {\n  opacity: 0;\n  animation-name: key-content-data-v-5ff7d15c;\n  animation-duration: 1;\n  animation-delay: 1.0;\n  animation-fill-mode: forwards;\n  animation-iteration-count: 1;\n  animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n.anim-content3[data-v-5ff7d15c] {\n  opacity: 0;\n  animation-name: key-content-data-v-5ff7d15c;\n  animation-duration: 1;\n  animation-delay: 1.25;\n  animation-fill-mode: forwards;\n  animation-iteration-count: 1;\n  animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n.anim-content4[data-v-5ff7d15c] {\n  opacity: 0;\n  animation-name: key-content-data-v-5ff7d15c;\n  animation-duration: 1;\n  animation-delay: 1.5;\n  animation-fill-mode: forwards;\n  animation-iteration-count: 1;\n  animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n@keyframes key-content-data-v-5ff7d15c {\n0% {\n    opacity: 0;\n    transform: translate(50, 50);\n    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n100% {\n    opacity: 1;\n    transform: translate(0, 0);\n    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n}\n.title[data-v-5ff7d15c] {\n  font-size: 18em;\n  color: #0F336D;\n}\n.stack[data-v-5ff7d15c] {\n  padding-top: 14;\n  border-bottom-width: 1;\n  border-bottom-color: #d4d4d4;\n}\n.stack-hours[data-v-5ff7d15c] {\n  padding-top: 6;\n}\n.hours[data-v-5ff7d15c] {\n  color: #022734;\n}\nActionBar[data-v-5ff7d15c] {\n  background-color: #009fca;\n  color: #ffffff;\n}\n", ""]);

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
exports.push([module.i, "/**\r\n * Convenient single import for light variables\r\n * Includes base variables with light overrides\r\n **/\n/**\r\n * Light variable overrides\r\n **/\n/**\r\n * Theme variables overrides\r\n**/\n.faq_question[data-v-0a4bb245] {\n  font-weight: bold;\n  font-size: 20;\n  color: black;\n}\n.faq_answer[data-v-0a4bb245] {\n  color: #454545;\n}\n.list-group-item-text[data-v-0a4bb245] {\n  margin: 2 3;\n}\n.list-group-item-content[data-v-0a4bb245] {\n  padding: 8 15 4 15;\n  background-color: #FFFFFF;\n}\n.homepage-blue[data-v-0a4bb245] {\n  color: #0783f8;\n}\n", ""]);

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
exports.push([module.i, "/**\r\n * Convenient single import for light variables\r\n * Includes base variables with light overrides\r\n **/\n/**\r\n * Light variable overrides\r\n **/\n/**\r\n * Theme variables overrides\r\n**/\nActionBar[data-v-e39d1092] {\n  background-color: #009fca;\n  color: #ffffff;\n}\n.message[data-v-e39d1092] {\n  vertical-align: center;\n  text-align: center;\n  font-size: 20;\n  color: #000000;\n}\n.faq_question[data-v-e39d1092] {\n  font-weight: bold;\n  font-size: 20;\n  color: black;\n}\n.faq_answer[data-v-e39d1092] {\n  color: #454545;\n}\n.list-group-item-text[data-v-e39d1092] {\n  margin: 7 8;\n}\n", ""]);

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
exports.push([module.i, "/**\r\n * Convenient single import for light variables\r\n * Includes base variables with light overrides\r\n **/\n/**\r\n * Light variable overrides\r\n **/\n/**\r\n * Theme variables overrides\r\n**/\n.Action_Bar[data-v-2f2be7e4] {\n  background-color: #009fca;\n  color: #ffffff;\n}\n.S_Bar[data-v-2f2be7e4] {\n  color: #050505;\n}\n.S_Button[data-v-2f2be7e4] {\n  /* text=\"right\"; \r\n        horizontalAlignment=\"right\";\r\n        width=\"33%\" \r\n        height=\"70\" \r\n        /*backgroundColor=\"#1c6b48\"/>*/\n  background-image: url(\"~/assets/images/NativeScript-Vue.png\");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.cover[data-v-2f2be7e4] {\n  background: linear-gradient(45deg, plum, #009fca);\n}\n.homepage-blue[data-v-2f2be7e4] {\n  color: #0783f8;\n}\n.Action_Text[data-v-2f2be7e4] {\n  margin-right: 0;\n}\n.HomeButton[data-v-2f2be7e4] {\n  background-color: white;\n  border-radius: 25;\n  font-size: 14%;\n  font-weight: bold;\n  padding-top: 7em;\n  letter-spacing: 0;\n}\n.layout[data-v-2f2be7e4] {\n  background-color: #eeeeee;\n}\n.message[data-v-2f2be7e4] {\n  vertical-align: center;\n  text-align: center;\n  font-size: 20;\n  color: #252525;\n}\n", ""]);

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
exports.push([module.i, "/**\r\n * Convenient single import for light variables\r\n * Includes base variables with light overrides\r\n **/\n/**\r\n * Light variable overrides\r\n **/\n/**\r\n * Theme variables overrides\r\n**/\nActionBar[data-v-3e597864] {\n  background-color: #009fca;\n  color: #ffffff;\n}\n.icon[data-v-3e597864] {\n  margin-right: 5;\n}\n.gps-button[data-v-3e597864] {\n  background: linear-gradient(0deg, lightgray, white);\n  color: #0783f8;\n  border-width: 1;\n  border-color: gray;\n  border-radius: 25%;\n  margin: 10;\n}\n.list-group .list-group-item-content[data-v-3e597864] {\n  padding: 8 15 4 15;\n  background-color: #FFFFFF;\n}\n.list-group .list-group-item-text[data-v-3e597864] {\n  margin: 2 3;\n}\n.list-group .homepage-blue[data-v-3e597864] {\n  color: #0783f8;\n}\n", ""]);

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
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n/* CSS */\n.close[data-v-4eba2d12] {\r\n  font-size: 20;\r\n  color: rgb(226, 229, 229);\r\n  margin: 15 0 0 15;\n}\nTextView[data-v-4eba2d12] {\r\n  border-width: 1;\r\n  border-color: #ffffff;\n}\n.description-text[data-v-4eba2d12] {\r\n  font-size: 14;\r\n  font-weight: bold;\r\n  color: black;\n}\n.description-icon[data-v-4eba2d12] {\r\n  font-size: 16;\r\n  font-weight: bold;\r\n  color: #3e9edb;\r\n  margin-right: 8;\r\n  vertical-align: center;\n}\n.description-value[data-v-4eba2d12] {\r\n  font-size: 14;\r\n  color: black;\r\n  margin: 8;\n}\n.description-value.isAvailable[data-v-4eba2d12] {\r\n  color: green;\r\n  font-weight: bold\n}\n.description-value.isNotAvailable[data-v-4eba2d12] {\r\n  color: red;\r\n  font-weight: bold\n}\n.rate[data-v-4eba2d12] {\r\n  padding-top: 3;\r\n  margin: 0;\r\n  color: #ffe900;\r\n  font-size: 18;\n}\n.rating-value[data-v-4eba2d12] {\r\n  margin-left: 5;\n}\n.liked-active[data-v-4eba2d12] {\r\n  color: #4080ff;\n}\n.heart-active[data-v-4eba2d12] {\r\n  color: #b51213;\n}\n.default[data-v-4eba2d12] {\r\n  color: #828282;\n}\n.layout[data-v-4eba2d12] {\r\n  vertical-align: bottom;\r\n  color: #828282;\r\n  font-size: 14;\r\n  height: 30;\r\n  padding: 5 0 5 0;\n}\n.like-icon[data-v-4eba2d12] {\r\n  vertical-align: bottom;\r\n  height: 30;\r\n  font-size: 16;\r\n  margin-right: 2;\r\n  padding: 5 5 5 5;\n}\n.item-name[data-v-4eba2d12] {\r\n  font-size: 14;\r\n  font-weight: bold;\n}\n.item-category[data-v-4eba2d12] {\r\n  font-size: 14;\r\n  color: #828282;\n}\n.category-icon[data-v-4eba2d12] {\r\n  text-align: center;\r\n  padding-top: 5;\r\n  color: white;\r\n  vertical-align: center;\r\n  font-size: 25;\r\n  border-width: 1;\r\n  border-color: #ffffff;\r\n  border-radius: 50%;\r\n  margin-top: 4;\r\n  margin-right: 15;\r\n  width: 40;\r\n  height: 40;\n}\n.content[data-v-4eba2d12] {\r\n  margin-left: 16;\r\n  margin-right: 16;\r\n  margin-bottom: 3;\r\n  /* margin-top: 16; */\n}\n.card-img[data-v-4eba2d12] {\r\n  width: 100%;\r\n  height: 250;\r\n  margin-bottom: 5;\n}\n.card-img-thumb[data-v-4eba2d12] {\r\n  background-color: rgb(230, 230, 230);\r\n  vertical-align: center;\r\n  border-radius: 5;\r\n  width: 130;\r\n  height: 70;\r\n  margin-left: 5;\n}\n.line[data-v-4eba2d12] {\r\n  height: 0.5;\r\n  border: none;\r\n  color: #e0e0e0;\r\n  background-color: #e0e0e0;\n}\n.lineBreak[data-v-4eba2d12] {\r\n  height: 0.5;\r\n  border: none;\r\n  color: #e0e0e0;\r\n  background-color: #e0e0e0;\n}\r\n\r\n\r\n/* Animations */\n.anim-page[data-v-4eba2d12] {\r\n  background-color: #d4d6d8;\r\n  animation-name: key-page-data-v-4eba2d12;\r\n  animation-duration: 2;\r\n  animation-fill-mode: forwards;\r\n  animation-iteration-count: 1;\r\n  animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n@keyframes key-page-data-v-4eba2d12 {\n0% {\r\n    background-color: #dadada;\n}\n20% {\r\n    background-color: #dbd2d5;\n}\n100% {\r\n    background-color: white;\n}\n}\n.anim-cover[data-v-4eba2d12] {\r\n  opacity: 0;\r\n  animation-name: key-cover-data-v-4eba2d12;\r\n  animation-duration: 1;\r\n  animation-delay: 0.5;\r\n  animation-fill-mode: forwards;\r\n  animation-iteration-count: 1;\r\n  animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n@keyframes key-cover-data-v-4eba2d12 {\n0% {\r\n    opacity: 0;\r\n    transform: translate(0, 550) scale(0, 0);\r\n    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n30% {\r\n    opacity: 0.5;\r\n    transform: scale(0.6, 0.6);\r\n    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n100% {\r\n    opacity: 1;\r\n    transform: translate(0, 0) scale(1, 1);\r\n    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n}\n.anim-images[data-v-4eba2d12] {\r\n  opacity: 0;\r\n  animation-name: key-images-data-v-4eba2d12;\r\n  animation-duration: 1;\r\n  animation-delay: 0.7;\r\n  animation-fill-mode: forwards;\r\n  animation-iteration-count: 1;\r\n  animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n@keyframes key-images-data-v-4eba2d12 {\n0% {\r\n    opacity: 0;\r\n    transform: translate(0, 550) scale(0, 0);\r\n    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n30% {\r\n    opacity: 0.5;\r\n    transform: scale(0.6, 0.6);\r\n    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n100% {\r\n    opacity: 1;\r\n    transform: translate(0, 0) scale(1, 1);\r\n    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n}\n.anim-itemInfo[data-v-4eba2d12] {\r\n  opacity: 0;\r\n  animation-name: key-itemInfo-data-v-4eba2d12;\r\n  animation-duration: 1;\r\n  animation-delay: 1.2;\r\n  animation-fill-mode: forwards;\r\n  animation-iteration-count: 1;\r\n  animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n@keyframes key-itemInfo-data-v-4eba2d12 {\n0% {\r\n    opacity: 0;\r\n    transform: translate(50, 50);\r\n    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n100% {\r\n    opacity: 1;\r\n    transform: translate(0, 0);\r\n    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n}\n.anim-likes[data-v-4eba2d12] {\r\n  opacity: 0;\r\n  animation-name: key-likes-data-v-4eba2d12;\r\n  animation-duration: 1;\r\n  animation-delay: 1.5;\r\n  animation-fill-mode: forwards;\r\n  animation-iteration-count: 1;\r\n  animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n@keyframes key-likes-data-v-4eba2d12 {\n0% {\r\n    opacity: 0;\r\n    transform: translate(50, 50);\r\n    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n100% {\r\n    opacity: 1;\r\n    transform: translate(0, 0);\r\n    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n}\n.anim-content[data-v-4eba2d12] {\r\n  opacity: 0;\r\n  animation-name: key-content-data-v-4eba2d12;\r\n  animation-duration: 1;\r\n  animation-delay: 1.8;\r\n  animation-fill-mode: forwards;\r\n  animation-iteration-count: 1;\r\n  animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n@keyframes key-content-data-v-4eba2d12 {\n0% {\r\n    opacity: 0;\r\n    transform: translate(50, 50);\r\n    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n100% {\r\n    opacity: 1;\r\n    transform: translate(0, 0);\r\n    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);\n}\n}\r\n", ""]);

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
exports.push([module.i, "\n.item-category[data-v-f1422a10] {\r\n  font-size: 14;\r\n  color: #828282;\n}\n.gender-icon[data-v-f1422a10] {\r\n  padding-top: 3;\r\n  padding-right: 3;\r\n  font-size: 16;\r\n  margin-right: 10;\n}\n.info-icon[data-v-f1422a10] {\r\n  padding-top: 3;\r\n  padding-left: 3;\r\n  color: gray;\r\n  font-size: 14;\r\n  margin-left: 10;\n}\n.rating-value[data-v-f1422a10] {\r\n  margin-left: 5;\n}\n.liked-active[data-v-f1422a10] {\r\n  color: #4080ff;\n}\n.heart-active[data-v-f1422a10] {\r\n  color: #b51213;\n}\n.default[data-v-f1422a10] {\r\n  color: #828282;\n}\n.layout[data-v-f1422a10] {\r\n  vertical-align: bottom;\r\n  color: #828282;\r\n  font-size: 14;\r\n  height: 30;\r\n  padding: 5 0 5 0;\n}\n.like-icon[data-v-f1422a10] {\r\n  vertical-align: bottom;\r\n  height: 30;\r\n  font-size: 16;\r\n  margin-right: 2;\r\n  padding: 5 5 5 5;\n}\n.item-name[data-v-f1422a10] {\r\n  font-size: 14;\r\n  font-weight: bold;\r\n  padding-bottom: 2;\n}\n.item-category[data-v-f1422a10] {\r\n  font-size: 14;\r\n  color: #828282;\n}\n.category-icon[data-v-f1422a10] {\r\n  text-align: center;\r\n  padding-top: 5;\r\n  border-color: white;\r\n  vertical-align: center;\r\n  font-size: 25;\r\n  border-width: 1;\r\n  border-radius: 50%;\r\n  margin-top: 4;\r\n  margin-right: 15;\r\n  width: 40;\r\n  height: 40;\n}\n.content[data-v-f1422a10] {\r\n  margin-left: 16;\r\n  margin-right: 16;\r\n  margin-bottom: 3;\r\n  margin-top: 16;\n}\n.card-img[data-v-f1422a10] {\r\n  width: 100%;\r\n  height: 150;\r\n  margin-bottom: 5;\n}\n.line[data-v-f1422a10] {\r\n  height: 0.5;\r\n  border: none;\r\n  color: #e0e0e0;\r\n  background-color: #e0e0e0;\n}\n.lineBreak[data-v-f1422a10] {\r\n  height: 7;\r\n  border: none;\r\n  color: #e0e0e0;\r\n  background-color: #e0e0e0;\n}\r\n", ""]);

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
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n\r\n/* button on android is styled with default setting when border radius is omitted*/\n.button[data-v-7609a239]{\r\n  border-radius: 25%;\n}\r\n", ""]);

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
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n\r\n/* button on android is styled with default setting when border radius is omitted*/\n.button[data-v-44ae5718]{\r\n  border-radius: 25%;\r\n  text-transform: capitalize;\n}\r\n\r\n", ""]);

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
exports.push([module.i, "\n.tabview.active {\r\n  border-bottom-color: white;\r\n  border-bottom-width: 3;\r\n  margin: 0;\r\n  height: 50;\n}\n.tabviewText {\r\n  margin-top: 15;\r\n  margin-bottom: 5;\r\n  font-size: 13;\r\n  color: #d8d2d2;\n}\n.tabviewText.active {\r\n  margin-top: 0;\r\n  margin-bottom: 5;\r\n  font-weight: bold;\r\n  color: white;\r\n  vertical-align: center;\n}\n.navIcon {\r\n  text-align: center;\r\n  margin-top: 3;\n}\n.navTab {\r\n  background-color: #009fca;\r\n  color: #ffffff;\n}\n.navTabview {\r\n  background-color: blue;\n}\r\n\r\n", ""]);

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
exports.push([module.i, "\n.home-panel[data-v-3ccecf09] {\r\n  vertical-align: center;\r\n  font-size: 20;\n}\nActionBar[data-v-3ccecf09] {\r\n  background-color: #009fca;\r\n  color: #ffffff;\n}\r\n", ""]);

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
exports.push([module.i, "\n.msg[data-v-139d9553] {\n  font-size: 18;\n  color: black;\n}\n", ""]);

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
              text: "Welcome",
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
            {
              staticClass: "layout cover",
              attrs: { columns: "*,*", rows: "*,*,*" }
            },
            [
              _c("CategoryButton", {
                staticClass: "homepage-blue HomeButton",
                attrs: {
                  verticalAlignment: "center",
                  margin: "5",
                  row: "0",
                  col: "0",
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
                  verticalAlignment: "center",
                  margin: "5",
                  row: "1",
                  col: "0",
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
                  verticalAlignment: "center",
                  margin: "5",
                  row: "0",
                  col: "1",
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
                  verticalAlignment: "center",
                  margin: "5",
                  row: "2",
                  col: "0",
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
                  verticalAlignment: "center",
                  margin: "5",
                  row: "1",
                  col: "1",
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
          _vm.query ? _c("Label", { attrs: { text: "query:" } }) : _vm._e(),
          _c("Label", { attrs: { textWrap: "true" } }, [
            _vm._v(_vm._s(_vm.query))
          ]),
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
          !_vm.isTicket
            ? _c("Label", {
                staticClass: "msg",
                attrs: {
                  row: "2",
                  text:
                    "You are always allowed to go to the kennels without asking",
                  textWrap: "true"
                }
              })
            : _vm._e(),
          _vm.isTicket
            ? _c(
                "StackLayout",
                { attrs: { row: "3" } },
                [
                  _c("Label", {
                    staticClass: "msg",
                    attrs: {
                      text: "Tell us about what you would like to know",
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
exports.push([module.i, "/**\r\n * Convenient single import for light variables\r\n * Includes base variables with light overrides\r\n **/\n/**\r\n * Light variable overrides\r\n **/\n/**\r\n * Theme variables overrides\r\n**/\n", ""]);

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
exports.push([module.i, "/**\r\n * Convenient single import for light variables\r\n * Includes base variables with light overrides\r\n **/\n/**\r\n * Light variable overrides\r\n **/\n/**\r\n * Theme variables overrides\r\n**/\n/**\r\n * Color classes\r\n * The following creates this pattern:\r\n * .c-grey{color:#e0e0e0}.c-bg-grey{background-color:#e0e0e0}\r\n**/\n.c-white {\n  color: #fff; }\n\n.c-bg-white {\n  background-color: #fff; }\n\n.c-black {\n  color: #000; }\n\n.c-bg-black {\n  background-color: #000; }\n\n.c-aqua {\n  color: #00caab; }\n\n.c-bg-aqua {\n  background-color: #00caab; }\n\n.c-blue {\n  color: #3d5afe; }\n\n.c-bg-blue {\n  background-color: #3d5afe; }\n\n.c-charcoal {\n  color: #303030; }\n\n.c-bg-charcoal {\n  background-color: #303030; }\n\n.c-brown {\n  color: #795548; }\n\n.c-bg-brown {\n  background-color: #795548; }\n\n.c-forest {\n  color: #006968; }\n\n.c-bg-forest {\n  background-color: #006968; }\n\n.c-grey {\n  color: #e0e0e0; }\n\n.c-bg-grey {\n  background-color: #e0e0e0; }\n\n.c-grey-light {\n  color: #bababa; }\n\n.c-bg-grey-light {\n  background-color: #bababa; }\n\n.c-grey-dark {\n  color: #5c687c; }\n\n.c-bg-grey-dark {\n  background-color: #5c687c; }\n\n.c-purple {\n  color: #8130ff; }\n\n.c-bg-purple {\n  background-color: #8130ff; }\n\n.c-lemon {\n  color: #ffea00; }\n\n.c-bg-lemon {\n  background-color: #ffea00; }\n\n.c-lime {\n  color: #aee406; }\n\n.c-bg-lime {\n  background-color: #aee406; }\n\n.c-orange {\n  color: #f57c00; }\n\n.c-bg-orange {\n  background-color: #f57c00; }\n\n.c-ruby {\n  color: #ff1744; }\n\n.c-bg-ruby {\n  background-color: #ff1744; }\n\n.c-sky {\n  color: #30bcff; }\n\n.c-bg-sky {\n  background-color: #30bcff; }\n\n/* Width/Height */\n.w-full {\n  width: 100%; }\n\n.w-100 {\n  width: 100; }\n\n.h-full {\n  height: 100%; }\n\n.h-100 {\n  height: 100; }\n\n/**\r\n * Margin and Padding\r\n * The following creates this pattern:\r\n * .m-0{margin:0}.m-t-0{margin-top:0}.m-r-0{margin-right:0}.m-b-0{margin-bottom:0}.m-l-0{margin-left:0}.m-x-0{margin-right:0;margin-left:0}.m-y-0{margin-top:0;margin-bottom:0}\r\n * Same for Padding (using the 'p' abbreviation)\r\n * From 0, 2, 5, 10, 15, 20, 25, 30\r\n**/\n.m-0 {\n  margin: 0; }\n\n.m-t-0 {\n  margin-top: 0; }\n\n.m-r-0 {\n  margin-right: 0; }\n\n.m-b-0 {\n  margin-bottom: 0; }\n\n.m-l-0 {\n  margin-left: 0; }\n\n.m-x-0 {\n  margin-right: 0;\n  margin-left: 0; }\n\n.m-y-0 {\n  margin-top: 0;\n  margin-bottom: 0; }\n\n.m-2 {\n  margin: 2; }\n\n.m-t-2 {\n  margin-top: 2; }\n\n.m-r-2 {\n  margin-right: 2; }\n\n.m-b-2 {\n  margin-bottom: 2; }\n\n.m-l-2 {\n  margin-left: 2; }\n\n.m-x-2 {\n  margin-right: 2;\n  margin-left: 2; }\n\n.m-y-2 {\n  margin-top: 2;\n  margin-bottom: 2; }\n\n.m-4 {\n  margin: 4; }\n\n.m-t-4 {\n  margin-top: 4; }\n\n.m-r-4 {\n  margin-right: 4; }\n\n.m-b-4 {\n  margin-bottom: 4; }\n\n.m-l-4 {\n  margin-left: 4; }\n\n.m-x-4 {\n  margin-right: 4;\n  margin-left: 4; }\n\n.m-y-4 {\n  margin-top: 4;\n  margin-bottom: 4; }\n\n.m-5 {\n  margin: 5; }\n\n.m-t-5 {\n  margin-top: 5; }\n\n.m-r-5 {\n  margin-right: 5; }\n\n.m-b-5 {\n  margin-bottom: 5; }\n\n.m-l-5 {\n  margin-left: 5; }\n\n.m-x-5 {\n  margin-right: 5;\n  margin-left: 5; }\n\n.m-y-5 {\n  margin-top: 5;\n  margin-bottom: 5; }\n\n.m-8 {\n  margin: 8; }\n\n.m-t-8 {\n  margin-top: 8; }\n\n.m-r-8 {\n  margin-right: 8; }\n\n.m-b-8 {\n  margin-bottom: 8; }\n\n.m-l-8 {\n  margin-left: 8; }\n\n.m-x-8 {\n  margin-right: 8;\n  margin-left: 8; }\n\n.m-y-8 {\n  margin-top: 8;\n  margin-bottom: 8; }\n\n.m-10 {\n  margin: 10; }\n\n.m-t-10 {\n  margin-top: 10; }\n\n.m-r-10 {\n  margin-right: 10; }\n\n.m-b-10 {\n  margin-bottom: 10; }\n\n.m-l-10 {\n  margin-left: 10; }\n\n.m-x-10 {\n  margin-right: 10;\n  margin-left: 10; }\n\n.m-y-10 {\n  margin-top: 10;\n  margin-bottom: 10; }\n\n.m-12 {\n  margin: 12; }\n\n.m-t-12 {\n  margin-top: 12; }\n\n.m-r-12 {\n  margin-right: 12; }\n\n.m-b-12 {\n  margin-bottom: 12; }\n\n.m-l-12 {\n  margin-left: 12; }\n\n.m-x-12 {\n  margin-right: 12;\n  margin-left: 12; }\n\n.m-y-12 {\n  margin-top: 12;\n  margin-bottom: 12; }\n\n.m-15 {\n  margin: 15; }\n\n.m-t-15 {\n  margin-top: 15; }\n\n.m-r-15 {\n  margin-right: 15; }\n\n.m-b-15 {\n  margin-bottom: 15; }\n\n.m-l-15 {\n  margin-left: 15; }\n\n.m-x-15 {\n  margin-right: 15;\n  margin-left: 15; }\n\n.m-y-15 {\n  margin-top: 15;\n  margin-bottom: 15; }\n\n.m-16 {\n  margin: 16; }\n\n.m-t-16 {\n  margin-top: 16; }\n\n.m-r-16 {\n  margin-right: 16; }\n\n.m-b-16 {\n  margin-bottom: 16; }\n\n.m-l-16 {\n  margin-left: 16; }\n\n.m-x-16 {\n  margin-right: 16;\n  margin-left: 16; }\n\n.m-y-16 {\n  margin-top: 16;\n  margin-bottom: 16; }\n\n.m-20 {\n  margin: 20; }\n\n.m-t-20 {\n  margin-top: 20; }\n\n.m-r-20 {\n  margin-right: 20; }\n\n.m-b-20 {\n  margin-bottom: 20; }\n\n.m-l-20 {\n  margin-left: 20; }\n\n.m-x-20 {\n  margin-right: 20;\n  margin-left: 20; }\n\n.m-y-20 {\n  margin-top: 20;\n  margin-bottom: 20; }\n\n.m-24 {\n  margin: 24; }\n\n.m-t-24 {\n  margin-top: 24; }\n\n.m-r-24 {\n  margin-right: 24; }\n\n.m-b-24 {\n  margin-bottom: 24; }\n\n.m-l-24 {\n  margin-left: 24; }\n\n.m-x-24 {\n  margin-right: 24;\n  margin-left: 24; }\n\n.m-y-24 {\n  margin-top: 24;\n  margin-bottom: 24; }\n\n.m-25 {\n  margin: 25; }\n\n.m-t-25 {\n  margin-top: 25; }\n\n.m-r-25 {\n  margin-right: 25; }\n\n.m-b-25 {\n  margin-bottom: 25; }\n\n.m-l-25 {\n  margin-left: 25; }\n\n.m-x-25 {\n  margin-right: 25;\n  margin-left: 25; }\n\n.m-y-25 {\n  margin-top: 25;\n  margin-bottom: 25; }\n\n.m-28 {\n  margin: 28; }\n\n.m-t-28 {\n  margin-top: 28; }\n\n.m-r-28 {\n  margin-right: 28; }\n\n.m-b-28 {\n  margin-bottom: 28; }\n\n.m-l-28 {\n  margin-left: 28; }\n\n.m-x-28 {\n  margin-right: 28;\n  margin-left: 28; }\n\n.m-y-28 {\n  margin-top: 28;\n  margin-bottom: 28; }\n\n.m-30 {\n  margin: 30; }\n\n.m-t-30 {\n  margin-top: 30; }\n\n.m-r-30 {\n  margin-right: 30; }\n\n.m-b-30 {\n  margin-bottom: 30; }\n\n.m-l-30 {\n  margin-left: 30; }\n\n.m-x-30 {\n  margin-right: 30;\n  margin-left: 30; }\n\n.m-y-30 {\n  margin-top: 30;\n  margin-bottom: 30; }\n\n.p-0 {\n  padding: 0; }\n\n.p-t-0 {\n  padding-top: 0; }\n\n.p-r-0 {\n  padding-right: 0; }\n\n.p-b-0 {\n  padding-bottom: 0; }\n\n.p-l-0 {\n  padding-left: 0; }\n\n.p-x-0 {\n  padding-right: 0;\n  padding-left: 0; }\n\n.p-y-0 {\n  padding-top: 0;\n  padding-bottom: 0; }\n\n.p-2 {\n  padding: 2; }\n\n.p-t-2 {\n  padding-top: 2; }\n\n.p-r-2 {\n  padding-right: 2; }\n\n.p-b-2 {\n  padding-bottom: 2; }\n\n.p-l-2 {\n  padding-left: 2; }\n\n.p-x-2 {\n  padding-right: 2;\n  padding-left: 2; }\n\n.p-y-2 {\n  padding-top: 2;\n  padding-bottom: 2; }\n\n.p-4 {\n  padding: 4; }\n\n.p-t-4 {\n  padding-top: 4; }\n\n.p-r-4 {\n  padding-right: 4; }\n\n.p-b-4 {\n  padding-bottom: 4; }\n\n.p-l-4 {\n  padding-left: 4; }\n\n.p-x-4 {\n  padding-right: 4;\n  padding-left: 4; }\n\n.p-y-4 {\n  padding-top: 4;\n  padding-bottom: 4; }\n\n.p-5 {\n  padding: 5; }\n\n.p-t-5 {\n  padding-top: 5; }\n\n.p-r-5 {\n  padding-right: 5; }\n\n.p-b-5 {\n  padding-bottom: 5; }\n\n.p-l-5 {\n  padding-left: 5; }\n\n.p-x-5 {\n  padding-right: 5;\n  padding-left: 5; }\n\n.p-y-5 {\n  padding-top: 5;\n  padding-bottom: 5; }\n\n.p-8 {\n  padding: 8; }\n\n.p-t-8 {\n  padding-top: 8; }\n\n.p-r-8 {\n  padding-right: 8; }\n\n.p-b-8 {\n  padding-bottom: 8; }\n\n.p-l-8 {\n  padding-left: 8; }\n\n.p-x-8 {\n  padding-right: 8;\n  padding-left: 8; }\n\n.p-y-8 {\n  padding-top: 8;\n  padding-bottom: 8; }\n\n.p-10 {\n  padding: 10; }\n\n.p-t-10 {\n  padding-top: 10; }\n\n.p-r-10 {\n  padding-right: 10; }\n\n.p-b-10 {\n  padding-bottom: 10; }\n\n.p-l-10 {\n  padding-left: 10; }\n\n.p-x-10 {\n  padding-right: 10;\n  padding-left: 10; }\n\n.p-y-10 {\n  padding-top: 10;\n  padding-bottom: 10; }\n\n.p-12 {\n  padding: 12; }\n\n.p-t-12 {\n  padding-top: 12; }\n\n.p-r-12 {\n  padding-right: 12; }\n\n.p-b-12 {\n  padding-bottom: 12; }\n\n.p-l-12 {\n  padding-left: 12; }\n\n.p-x-12 {\n  padding-right: 12;\n  padding-left: 12; }\n\n.p-y-12 {\n  padding-top: 12;\n  padding-bottom: 12; }\n\n.p-15 {\n  padding: 15; }\n\n.p-t-15 {\n  padding-top: 15; }\n\n.p-r-15 {\n  padding-right: 15; }\n\n.p-b-15 {\n  padding-bottom: 15; }\n\n.p-l-15 {\n  padding-left: 15; }\n\n.p-x-15 {\n  padding-right: 15;\n  padding-left: 15; }\n\n.p-y-15 {\n  padding-top: 15;\n  padding-bottom: 15; }\n\n.p-16 {\n  padding: 16; }\n\n.p-t-16 {\n  padding-top: 16; }\n\n.p-r-16 {\n  padding-right: 16; }\n\n.p-b-16 {\n  padding-bottom: 16; }\n\n.p-l-16 {\n  padding-left: 16; }\n\n.p-x-16 {\n  padding-right: 16;\n  padding-left: 16; }\n\n.p-y-16 {\n  padding-top: 16;\n  padding-bottom: 16; }\n\n.p-20 {\n  padding: 20; }\n\n.p-t-20 {\n  padding-top: 20; }\n\n.p-r-20 {\n  padding-right: 20; }\n\n.p-b-20 {\n  padding-bottom: 20; }\n\n.p-l-20 {\n  padding-left: 20; }\n\n.p-x-20 {\n  padding-right: 20;\n  padding-left: 20; }\n\n.p-y-20 {\n  padding-top: 20;\n  padding-bottom: 20; }\n\n.p-24 {\n  padding: 24; }\n\n.p-t-24 {\n  padding-top: 24; }\n\n.p-r-24 {\n  padding-right: 24; }\n\n.p-b-24 {\n  padding-bottom: 24; }\n\n.p-l-24 {\n  padding-left: 24; }\n\n.p-x-24 {\n  padding-right: 24;\n  padding-left: 24; }\n\n.p-y-24 {\n  padding-top: 24;\n  padding-bottom: 24; }\n\n.p-25 {\n  padding: 25; }\n\n.p-t-25 {\n  padding-top: 25; }\n\n.p-r-25 {\n  padding-right: 25; }\n\n.p-b-25 {\n  padding-bottom: 25; }\n\n.p-l-25 {\n  padding-left: 25; }\n\n.p-x-25 {\n  padding-right: 25;\n  padding-left: 25; }\n\n.p-y-25 {\n  padding-top: 25;\n  padding-bottom: 25; }\n\n.p-28 {\n  padding: 28; }\n\n.p-t-28 {\n  padding-top: 28; }\n\n.p-r-28 {\n  padding-right: 28; }\n\n.p-b-28 {\n  padding-bottom: 28; }\n\n.p-l-28 {\n  padding-left: 28; }\n\n.p-x-28 {\n  padding-right: 28;\n  padding-left: 28; }\n\n.p-y-28 {\n  padding-top: 28;\n  padding-bottom: 28; }\n\n.p-30 {\n  padding: 30; }\n\n.p-t-30 {\n  padding-top: 30; }\n\n.p-r-30 {\n  padding-right: 30; }\n\n.p-b-30 {\n  padding-bottom: 30; }\n\n.p-l-30 {\n  padding-left: 30; }\n\n.p-x-30 {\n  padding-right: 30;\n  padding-left: 30; }\n\n.p-y-30 {\n  padding-top: 30;\n  padding-bottom: 30; }\n\n/* Dividers */\n.hr-light {\n  height: 1;\n  background-color: #e0e0e0;\n  width: 100%; }\n\n.hr-dark {\n  height: 1;\n  background-color: #303030;\n  width: 100%; }\n\n/* Alignment */\n.text-left {\n  text-align: left; }\n\n.text-right {\n  text-align: right; }\n\n.text-center {\n  text-align: center; }\n\n.text-lowercase {\n  text-transform: lowercase; }\n\n.text-uppercase {\n  text-transform: uppercase; }\n\n.text-capitalize {\n  text-transform: capitalize; }\n\n.font-weight-normal {\n  font-weight: normal; }\n\n.font-weight-bold {\n  font-weight: bold; }\n\n.font-italic {\n  font-style: italic; }\n\n/**\r\n * Font size\r\n * The following creates this pattern:\r\n * .t-10{font-size:10}\r\n * From 10, 12, 14, 15, 16, 17, 18, 19, 20\r\n**/\n.t-10 {\n  font-size: 10; }\n\n.t-12 {\n  font-size: 12; }\n\n.t-14 {\n  font-size: 14; }\n\n.t-15 {\n  font-size: 15; }\n\n.t-16 {\n  font-size: 16; }\n\n.t-17 {\n  font-size: 17; }\n\n.t-18 {\n  font-size: 18; }\n\n.t-19 {\n  font-size: 19; }\n\n.t-20 {\n  font-size: 20; }\n\n.t-25 {\n  font-size: 25; }\n\n.t-30 {\n  font-size: 30; }\n\n.img-rounded {\n  border-radius: 5; }\n\n.img-circle {\n  border-radius: 20; }\n\n.img-thumbnail {\n  border-radius: 0; }\n\n.invisible {\n  visibility: collapse; }\n\n.pull-left {\n  horizontal-align: left; }\n\n.pull-right {\n  horizontal-align: right; }\n\n.m-x-auto {\n  horizontal-align: center; }\n\n.m-y-auto {\n  vertical-align: center; }\n\n.text-primary {\n  color: #3A53FF; }\n\n.text-danger {\n  color: #ED473F; }\n\n.text-muted {\n  color: #9e9e9e; }\n\n.bg-primary {\n  background-color: #3A53FF;\n  color: #fff; }\n\n.bg-danger {\n  background-color: #ED473F;\n  color: #fff; }\n\n.action-bar {\n  background-color: #3A53FF;\n  color: #fff; }\n  .action-bar .action-bar-title {\n    font-weight: bold;\n    font-size: 17;\n    vertical-align: center; }\n  .action-bar .action-item {\n    font-weight: normal; }\n\n.activity-indicator {\n  color: #3A53FF;\n  width: 30;\n  height: 30; }\n\n.btn {\n  color: #02556e;\n  background-color: transparent;\n  min-height: 36;\n  min-width: 64;\n  padding: 10 10 10 10;\n  font-size: 18;\n  margin: 8 16 8 16; }\n  .btn.btn-active:highlighted {\n    color: #fff;\n    background-color: #037ca0; }\n\n.btn-primary {\n  background-color: #02556e;\n  border-color: #02556e;\n  color: #fff; }\n  .btn-primary.btn-active:highlighted {\n    background-color: #012e3c;\n    border-color: #012e3c; }\n  .btn-primary.btn-aqua {\n    background-color: #00caab; }\n  .btn-primary.btn-blue {\n    background-color: #3d5afe; }\n  .btn-primary.btn-brown {\n    background-color: #795548; }\n  .btn-primary.btn-forest {\n    background-color: #006968; }\n  .btn-primary.btn-grey {\n    background-color: #5c687c; }\n  .btn-primary.btn-lemon {\n    background-color: #ffea00;\n    color: #000; }\n  .btn-primary.btn-lime {\n    background-color: #aee406;\n    color: #000; }\n  .btn-primary.btn-orange {\n    background-color: #f57c00; }\n  .btn-primary.btn-purple {\n    background-color: #8130ff; }\n  .btn-primary.btn-ruby {\n    background-color: #ff1744; }\n  .btn-primary.btn-sky {\n    background-color: #30bcff; }\n\n.btn-outline {\n  background-color: transparent;\n  border-color: #02556e;\n  color: #02556e; }\n  .btn-outline.btn-active:highlighted {\n    background-color: #037ca0; }\n\n.btn[isEnabled=false] {\n  color: #a4a4a4;\n  background-color: #e0e0e0;\n  border-color: #e0e0e0; }\n\n.fa {\n  font-family: FontAwesome, fontawesome-webfont; }\n\n.form .input {\n  padding: 16 8 16 8;\n  background-color: transparent; }\n  .form .input.input-border {\n    border-width: 1;\n    border-color: #e0e0e0;\n    border-radius: 2;\n    padding: 16; }\n  .form .input.input-rounded {\n    border-width: 1;\n    border-color: #e0e0e0;\n    border-radius: 28;\n    padding: 16; }\n  .form .input[isEnabled='false'] {\n    background-color: #fafafa; }\n\n.form .input-field {\n  margin: 8; }\n  .form .input-field .label {\n    font-size: 12;\n    color: #bababa; }\n  .form .input-field .input {\n    padding: 0;\n    margin: 0 0 8 0; }\n  .form .input-field .hr-light.active,\n  .form .input-field .hr-dark.active {\n    background-color: #3A53FF; }\n  .form .input-field.input-sides .label {\n    font-size: 18;\n    margin: 0 0 8 0; }\n\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  margin-bottom: 4;\n  font-weight: normal;\n  color: #022734; }\n\n.body,\n.body2,\n.footnote {\n  font-weight: normal;\n  color: #022734; }\n\n.h1 {\n  font-size: 32; }\n\n.h2 {\n  font-size: 22; }\n\n.h3 {\n  font-size: 15; }\n\n.h4 {\n  font-size: 12; }\n\n.h5 {\n  font-size: 11; }\n\n.h6 {\n  font-size: 10; }\n\n.body {\n  font-size: 14; }\n\n.body2 {\n  font-size: 17; }\n\n.footnote {\n  font-size: 13; }\n\n.list-group .list-group-item {\n  color: #212121;\n  font-size: 16;\n  margin: 0;\n  padding: 16; }\n  .list-group .list-group-item Label {\n    vertical-align: center; }\n  .list-group .list-group-item .thumb {\n    stretch: fill;\n    width: 40;\n    height: 40;\n    margin-right: 16; }\n  .list-group .list-group-item.active {\n    background-color: #e0e0e0; }\n  .list-group .list-group-item .list-group-item-text {\n    color: #022734;\n    font-size: 14; }\n\n.page {\n  background-color: #fff; }\n\n.progress {\n  color: #3A53FF;\n  background-color: #bababa; }\n\n.segmented-bar {\n  font-size: 13;\n  background-color: #fff;\n  color: #212121;\n  selected-background-color: #3A53FF; }\n\n.sidedrawer-left, .sidedrawer-center {\n  background-color: #FFFFFF; }\n\n.sidedrawer-header {\n  background-color: #fafafa;\n  height: 148;\n  width: 100%; }\n\n.sidedrawer-left .sidedrawer-header {\n  padding: 16 16 0 16; }\n\n.sidedrawer-center .sidedrawer-header {\n  padding: 20 15 0 15; }\n\n.sidedrawer-header-image {\n  background-color: #e0e0e0; }\n\n.sidedrawer-left .sidedrawer-header-image {\n  height: 64;\n  width: 64;\n  border-radius: 32;\n  horizontal-align: left;\n  margin-bottom: 36; }\n\n.sidedrawer-center .sidedrawer-header-image {\n  height: 74;\n  width: 74;\n  border-radius: 37;\n  horizontal-align: center;\n  margin-bottom: 24; }\n\n.sidedrawer-header-brand {\n  color: #737373; }\n\n.sidedrawer-left .sidedrawer-header-brand {\n  horizontal-align: left;\n  font-size: 14; }\n\n.sidedrawer-center .sidedrawer-header-brand {\n  horizontal-align: center;\n  font-size: 15; }\n\n.sidedrawer-list-item {\n  height: 48;\n  horizontal-align: left;\n  width: 100%;\n  orientation: horizontal; }\n  .sidedrawer-list-item .sidedrawer-list-item-icon {\n    width: 24;\n    text-align: center;\n    font-size: 20;\n    height: 48;\n    vertical-align: center; }\n  .sidedrawer-list-item.active {\n    color: #3A53FF;\n    background-color: #F8F8F8; }\n    .sidedrawer-list-item.active .sidedrawer-list-item-icon {\n      color: #3A53FF; }\n\n.sidedrawer-left .sidedrawer-list-item-icon {\n  margin: 0 16 0 16; }\n\n.sidedrawer-center .sidedrawer-list-item-icon {\n  margin: 0 0 0 15; }\n\n.sidedrawer-list-item-text {\n  horizontal-align: left;\n  text-align: left;\n  font-size: 15;\n  background-color: transparent;\n  border-width: 0.1;\n  width: 80%;\n  vertical-align: center; }\n\n.sidedrawer-left .sidedrawer-list-item-text {\n  padding-left: 16; }\n\n.sidedrawer-center .sidedrawer-list-item-text {\n  padding-left: 15; }\n\n.slider {\n  background-color: #3A53FF; }\n  .slider[isEnabled=false] {\n    background-color: #e0e0e0;\n    color: #e0e0e0; }\n\n.switch[checked=true] {\n  background-color: #3A53FF;\n  color: #3A53FF; }\n\n.switch[checked=true][isEnabled=false] {\n  background-color: #e0e0e0;\n  color: #fff; }\n\n.switch[isEnabled=false] {\n  background-color: #e0e0e0;\n  color: #e0e0e0; }\n\n.tab-view {\n  /*color: $secondary;*/\n  selected-color: #30bcff;\n  tabs-background-color: #fff; }\n  .tab-view .tab-view-item {\n    background-color: #fff;\n    tabs-background-color: #fff; }\n\n#login-background {\n  margin-top: -20;\n  background-size: cover;\n  background-position: center; }\n\n.login-wrap {\n  padding: 0 40; }\n\n.logo-wrap {\n  margin: 60 0 10 0;\n  padding: 20 0; }\n  .logo-wrap .login-logo {\n    text-align: center;\n    font-size: 30;\n    font-weight: bold;\n    margin-bottom: 10;\n    opacity: 1;\n    color: #212121;\n    opacity: .9; }\n  .logo-wrap .login-logo-sub {\n    color: #212121;\n    opacity: .8;\n    text-align: center; }\n\n.login-wrapper {\n  padding: 20;\n  background-color: #fff;\n  border-radius: 3; }\n  .login-wrapper TextField {\n    padding: 10 10;\n    margin: 10 0 0 0; }\n\n.go-back {\n  font-size: 14;\n  text-align: center;\n  color: #212121;\n  margin-top: 10; }\n\n/**\r\n * Import all platform specific files here\r\n */\n.action-bar .action-bar-title {\n  font-weight: 500;\n  font-size: 20; }\n\n.action-bar .action-item {\n  android-elevation: 0;\n  background-color: rgba(255, 0, 0, 0);\n  border-color: rgba(255, 0, 0, 0);\n  border-width: 1; }\n\n.btn {\n  font-family: 'Roboto Medium';\n  font-size: 14; }\n\n.btn-primary {\n  border-color: rgba(255, 0, 0, 0); }\n\n.btn-outline {\n  android-elevation: 0;\n  background-color: rgba(255, 0, 0, 0);\n  border-width: 1;\n  border-color: #02556e;\n  height: 36;\n  padding: 0; }\n\n.btn-rounded-sm {\n  border-radius: 2;\n  height: 36;\n  padding: 0; }\n\n.btn-rounded-lg {\n  border-radius: 40;\n  height: 36;\n  padding: 0; }\n\n.form {\n  font-family: 'Roboto Regular'; }\n  .form .input {\n    font-size: 16; }\n\n.h1 {\n  font-size: 34; }\n\n.h2 {\n  font-size: 24; }\n\n.h3 {\n  font-size: 16; }\n\n.h5 {\n  font-size: 11;\n  font-weight: bold; }\n\n.body2 {\n  font-size: 14;\n  font-weight: 500; }\n\n.sidedrawer-list-item-icon {\n  margin: 0 16 0 16;\n  padding-top: 14; }\n\n.sidedrawer-list-item-icon, .sidedrawer-list-item {\n  color: #022734; }\n\n.sidedrawer-list-item {\n  font-family: 'Roboto Medium';\n  font-size: 14; }\n\n.slider {\n  color: #3A53FF;\n  margin: 20 16; }\n\n.switch {\n  margin: 14 16;\n  color: #e0e0e0;\n  background-color: #e0e0e0; }\n  .switch[checked=true] {\n    color: #3A53FF; }\n\n.fa {\n  font-family: \"FontAwesome\"; }\n\n.action-item,\nNavigationButton {\n  color: #fff; }\n\n.action-item:disabled {\n  color: rgba(255, 255, 255, 0.5); }\n\nSlider {\n  background-color: #3A53FF;\n  color: #3A53FF; }\n\n.text {\n  color: #022734; }\n\n.text-primary {\n  color: #3A53FF; }\n\n.text-secondary {\n  color: rgba(2, 39, 52, 0.5); }\n\n.action-item {\n  padding: 0 10;\n  height: 100%; }\n\n.fa {\n  font-family: \"FontAwesome\", \"fontawesome-webfont\"; }\n\n.ion {\n  font-family: \"ionicons\"; }\n", ""]);

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
exports.push([module.i, "/*!\r\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\r\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\r\n */\r\n/* FONT PATH\r\n * -------------------------- */\r\n@font-face {\r\n  font-family: 'FontAwesome';\r\n  src: url('../fonts/fontawesome-webfont.eot?v=4.7.0');\r\n  src: url('../fonts/fontawesome-webfont.eot?#iefix&v=4.7.0') format('embedded-opentype'), url('../fonts/fontawesome-webfont.woff2?v=4.7.0') format('woff2'), url('../fonts/fontawesome-webfont.woff?v=4.7.0') format('woff'), url('../fonts/fontawesome-webfont.ttf?v=4.7.0') format('truetype'), url('../fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular') format('svg');\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n.fa {\r\n  display: inline-block;\r\n  font: normal normal normal 14px/1 FontAwesome;\r\n  font-size: inherit;\r\n  text-rendering: auto;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n/* makes the font 33% larger relative to the icon container */\r\n.fa-lg {\r\n  font-size: 1.33333333em;\r\n  line-height: 0.75em;\r\n  vertical-align: -15%;\r\n}\r\n.fa-2x {\r\n  font-size: 2em;\r\n}\r\n.fa-3x {\r\n  font-size: 3em;\r\n}\r\n.fa-4x {\r\n  font-size: 4em;\r\n}\r\n.fa-5x {\r\n  font-size: 5em;\r\n}\r\n.fa-fw {\r\n  width: 1.28571429em;\r\n  text-align: center;\r\n}\r\n.fa-ul {\r\n  padding-left: 0;\r\n  margin-left: 2.14285714em;\r\n  list-style-type: none;\r\n}\r\n.fa-ul > li {\r\n  position: relative;\r\n}\r\n.fa-li {\r\n  position: absolute;\r\n  left: -2.14285714em;\r\n  width: 2.14285714em;\r\n  top: 0.14285714em;\r\n  text-align: center;\r\n}\r\n.fa-li.fa-lg {\r\n  left: -1.85714286em;\r\n}\r\n.fa-border {\r\n  padding: .2em .25em .15em;\r\n  border: solid 0.08em #eeeeee;\r\n  border-radius: .1em;\r\n}\r\n.fa-pull-left {\r\n  float: left;\r\n}\r\n.fa-pull-right {\r\n  float: right;\r\n}\r\n.fa.fa-pull-left {\r\n  margin-right: .3em;\r\n}\r\n.fa.fa-pull-right {\r\n  margin-left: .3em;\r\n}\r\n/* Deprecated as of 4.4.0 */\r\n.pull-right {\r\n  float: right;\r\n}\r\n.pull-left {\r\n  float: left;\r\n}\r\n.fa.pull-left {\r\n  margin-right: .3em;\r\n}\r\n.fa.pull-right {\r\n  margin-left: .3em;\r\n}\r\n.fa-spin {\r\n  -webkit-animation: fa-spin 2s infinite linear;\r\n  animation: fa-spin 2s infinite linear;\r\n}\r\n.fa-pulse {\r\n  -webkit-animation: fa-spin 1s infinite steps(8);\r\n  animation: fa-spin 1s infinite steps(8);\r\n}\r\n@-webkit-keyframes fa-spin {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(359deg);\r\n    transform: rotate(359deg);\r\n  }\r\n}\r\n@keyframes fa-spin {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(359deg);\r\n    transform: rotate(359deg);\r\n  }\r\n}\r\n.fa-rotate-90 {\r\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\r\n  -webkit-transform: rotate(90deg);\r\n  -ms-transform: rotate(90deg);\r\n  transform: rotate(90deg);\r\n}\r\n.fa-rotate-180 {\r\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\r\n  -webkit-transform: rotate(180deg);\r\n  -ms-transform: rotate(180deg);\r\n  transform: rotate(180deg);\r\n}\r\n.fa-rotate-270 {\r\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\r\n  -webkit-transform: rotate(270deg);\r\n  -ms-transform: rotate(270deg);\r\n  transform: rotate(270deg);\r\n}\r\n.fa-flip-horizontal {\r\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\r\n  -webkit-transform: scale(-1, 1);\r\n  -ms-transform: scale(-1, 1);\r\n  transform: scale(-1, 1);\r\n}\r\n.fa-flip-vertical {\r\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\r\n  -webkit-transform: scale(1, -1);\r\n  -ms-transform: scale(1, -1);\r\n  transform: scale(1, -1);\r\n}\r\n:root .fa-rotate-90,\r\n:root .fa-rotate-180,\r\n:root .fa-rotate-270,\r\n:root .fa-flip-horizontal,\r\n:root .fa-flip-vertical {\r\n  filter: none;\r\n}\r\n.fa-stack {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 2em;\r\n  height: 2em;\r\n  line-height: 2em;\r\n  vertical-align: middle;\r\n}\r\n.fa-stack-1x,\r\n.fa-stack-2x {\r\n  position: absolute;\r\n  left: 0;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n.fa-stack-1x {\r\n  line-height: inherit;\r\n}\r\n.fa-stack-2x {\r\n  font-size: 2em;\r\n}\r\n.fa-inverse {\r\n  color: #ffffff;\r\n}\r\n/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen\r\n   readers do not read off random characters that represent icons */\r\n.fa-glass:before {\r\n  content: \"\\F000\";\r\n}\r\n.fa-music:before {\r\n  content: \"\\F001\";\r\n}\r\n.fa-search:before {\r\n  content: \"\\F002\";\r\n}\r\n.fa-envelope-o:before {\r\n  content: \"\\F003\";\r\n}\r\n.fa-heart:before {\r\n  content: \"\\F004\";\r\n}\r\n.fa-star:before {\r\n  content: \"\\F005\";\r\n}\r\n.fa-star-o:before {\r\n  content: \"\\F006\";\r\n}\r\n.fa-user:before {\r\n  content: \"\\F007\";\r\n}\r\n.fa-film:before {\r\n  content: \"\\F008\";\r\n}\r\n.fa-th-large:before {\r\n  content: \"\\F009\";\r\n}\r\n.fa-th:before {\r\n  content: \"\\F00A\";\r\n}\r\n.fa-th-list:before {\r\n  content: \"\\F00B\";\r\n}\r\n.fa-check:before {\r\n  content: \"\\F00C\";\r\n}\r\n.fa-remove:before,\r\n.fa-close:before,\r\n.fa-times:before {\r\n  content: \"\\F00D\";\r\n}\r\n.fa-search-plus:before {\r\n  content: \"\\F00E\";\r\n}\r\n.fa-search-minus:before {\r\n  content: \"\\F010\";\r\n}\r\n.fa-power-off:before {\r\n  content: \"\\F011\";\r\n}\r\n.fa-signal:before {\r\n  content: \"\\F012\";\r\n}\r\n.fa-gear:before,\r\n.fa-cog:before {\r\n  content: \"\\F013\";\r\n}\r\n.fa-trash-o:before {\r\n  content: \"\\F014\";\r\n}\r\n.fa-home:before {\r\n  content: \"\\F015\";\r\n}\r\n.fa-file-o:before {\r\n  content: \"\\F016\";\r\n}\r\n.fa-clock-o:before {\r\n  content: \"\\F017\";\r\n}\r\n.fa-road:before {\r\n  content: \"\\F018\";\r\n}\r\n.fa-download:before {\r\n  content: \"\\F019\";\r\n}\r\n.fa-arrow-circle-o-down:before {\r\n  content: \"\\F01A\";\r\n}\r\n.fa-arrow-circle-o-up:before {\r\n  content: \"\\F01B\";\r\n}\r\n.fa-inbox:before {\r\n  content: \"\\F01C\";\r\n}\r\n.fa-play-circle-o:before {\r\n  content: \"\\F01D\";\r\n}\r\n.fa-rotate-right:before,\r\n.fa-repeat:before {\r\n  content: \"\\F01E\";\r\n}\r\n.fa-refresh:before {\r\n  content: \"\\F021\";\r\n}\r\n.fa-list-alt:before {\r\n  content: \"\\F022\";\r\n}\r\n.fa-lock:before {\r\n  content: \"\\F023\";\r\n}\r\n.fa-flag:before {\r\n  content: \"\\F024\";\r\n}\r\n.fa-headphones:before {\r\n  content: \"\\F025\";\r\n}\r\n.fa-volume-off:before {\r\n  content: \"\\F026\";\r\n}\r\n.fa-volume-down:before {\r\n  content: \"\\F027\";\r\n}\r\n.fa-volume-up:before {\r\n  content: \"\\F028\";\r\n}\r\n.fa-qrcode:before {\r\n  content: \"\\F029\";\r\n}\r\n.fa-barcode:before {\r\n  content: \"\\F02A\";\r\n}\r\n.fa-tag:before {\r\n  content: \"\\F02B\";\r\n}\r\n.fa-tags:before {\r\n  content: \"\\F02C\";\r\n}\r\n.fa-book:before {\r\n  content: \"\\F02D\";\r\n}\r\n.fa-bookmark:before {\r\n  content: \"\\F02E\";\r\n}\r\n.fa-print:before {\r\n  content: \"\\F02F\";\r\n}\r\n.fa-camera:before {\r\n  content: \"\\F030\";\r\n}\r\n.fa-font:before {\r\n  content: \"\\F031\";\r\n}\r\n.fa-bold:before {\r\n  content: \"\\F032\";\r\n}\r\n.fa-italic:before {\r\n  content: \"\\F033\";\r\n}\r\n.fa-text-height:before {\r\n  content: \"\\F034\";\r\n}\r\n.fa-text-width:before {\r\n  content: \"\\F035\";\r\n}\r\n.fa-align-left:before {\r\n  content: \"\\F036\";\r\n}\r\n.fa-align-center:before {\r\n  content: \"\\F037\";\r\n}\r\n.fa-align-right:before {\r\n  content: \"\\F038\";\r\n}\r\n.fa-align-justify:before {\r\n  content: \"\\F039\";\r\n}\r\n.fa-list:before {\r\n  content: \"\\F03A\";\r\n}\r\n.fa-dedent:before,\r\n.fa-outdent:before {\r\n  content: \"\\F03B\";\r\n}\r\n.fa-indent:before {\r\n  content: \"\\F03C\";\r\n}\r\n.fa-video-camera:before {\r\n  content: \"\\F03D\";\r\n}\r\n.fa-photo:before,\r\n.fa-image:before,\r\n.fa-picture-o:before {\r\n  content: \"\\F03E\";\r\n}\r\n.fa-pencil:before {\r\n  content: \"\\F040\";\r\n}\r\n.fa-map-marker:before {\r\n  content: \"\\F041\";\r\n}\r\n.fa-adjust:before {\r\n  content: \"\\F042\";\r\n}\r\n.fa-tint:before {\r\n  content: \"\\F043\";\r\n}\r\n.fa-edit:before,\r\n.fa-pencil-square-o:before {\r\n  content: \"\\F044\";\r\n}\r\n.fa-share-square-o:before {\r\n  content: \"\\F045\";\r\n}\r\n.fa-check-square-o:before {\r\n  content: \"\\F046\";\r\n}\r\n.fa-arrows:before {\r\n  content: \"\\F047\";\r\n}\r\n.fa-step-backward:before {\r\n  content: \"\\F048\";\r\n}\r\n.fa-fast-backward:before {\r\n  content: \"\\F049\";\r\n}\r\n.fa-backward:before {\r\n  content: \"\\F04A\";\r\n}\r\n.fa-play:before {\r\n  content: \"\\F04B\";\r\n}\r\n.fa-pause:before {\r\n  content: \"\\F04C\";\r\n}\r\n.fa-stop:before {\r\n  content: \"\\F04D\";\r\n}\r\n.fa-forward:before {\r\n  content: \"\\F04E\";\r\n}\r\n.fa-fast-forward:before {\r\n  content: \"\\F050\";\r\n}\r\n.fa-step-forward:before {\r\n  content: \"\\F051\";\r\n}\r\n.fa-eject:before {\r\n  content: \"\\F052\";\r\n}\r\n.fa-chevron-left:before {\r\n  content: \"\\F053\";\r\n}\r\n.fa-chevron-right:before {\r\n  content: \"\\F054\";\r\n}\r\n.fa-plus-circle:before {\r\n  content: \"\\F055\";\r\n}\r\n.fa-minus-circle:before {\r\n  content: \"\\F056\";\r\n}\r\n.fa-times-circle:before {\r\n  content: \"\\F057\";\r\n}\r\n.fa-check-circle:before {\r\n  content: \"\\F058\";\r\n}\r\n.fa-question-circle:before {\r\n  content: \"\\F059\";\r\n}\r\n.fa-info-circle:before {\r\n  content: \"\\F05A\";\r\n}\r\n.fa-crosshairs:before {\r\n  content: \"\\F05B\";\r\n}\r\n.fa-times-circle-o:before {\r\n  content: \"\\F05C\";\r\n}\r\n.fa-check-circle-o:before {\r\n  content: \"\\F05D\";\r\n}\r\n.fa-ban:before {\r\n  content: \"\\F05E\";\r\n}\r\n.fa-arrow-left:before {\r\n  content: \"\\F060\";\r\n}\r\n.fa-arrow-right:before {\r\n  content: \"\\F061\";\r\n}\r\n.fa-arrow-up:before {\r\n  content: \"\\F062\";\r\n}\r\n.fa-arrow-down:before {\r\n  content: \"\\F063\";\r\n}\r\n.fa-mail-forward:before,\r\n.fa-share:before {\r\n  content: \"\\F064\";\r\n}\r\n.fa-expand:before {\r\n  content: \"\\F065\";\r\n}\r\n.fa-compress:before {\r\n  content: \"\\F066\";\r\n}\r\n.fa-plus:before {\r\n  content: \"\\F067\";\r\n}\r\n.fa-minus:before {\r\n  content: \"\\F068\";\r\n}\r\n.fa-asterisk:before {\r\n  content: \"\\F069\";\r\n}\r\n.fa-exclamation-circle:before {\r\n  content: \"\\F06A\";\r\n}\r\n.fa-gift:before {\r\n  content: \"\\F06B\";\r\n}\r\n.fa-leaf:before {\r\n  content: \"\\F06C\";\r\n}\r\n.fa-fire:before {\r\n  content: \"\\F06D\";\r\n}\r\n.fa-eye:before {\r\n  content: \"\\F06E\";\r\n}\r\n.fa-eye-slash:before {\r\n  content: \"\\F070\";\r\n}\r\n.fa-warning:before,\r\n.fa-exclamation-triangle:before {\r\n  content: \"\\F071\";\r\n}\r\n.fa-plane:before {\r\n  content: \"\\F072\";\r\n}\r\n.fa-calendar:before {\r\n  content: \"\\F073\";\r\n}\r\n.fa-random:before {\r\n  content: \"\\F074\";\r\n}\r\n.fa-comment:before {\r\n  content: \"\\F075\";\r\n}\r\n.fa-magnet:before {\r\n  content: \"\\F076\";\r\n}\r\n.fa-chevron-up:before {\r\n  content: \"\\F077\";\r\n}\r\n.fa-chevron-down:before {\r\n  content: \"\\F078\";\r\n}\r\n.fa-retweet:before {\r\n  content: \"\\F079\";\r\n}\r\n.fa-shopping-cart:before {\r\n  content: \"\\F07A\";\r\n}\r\n.fa-folder:before {\r\n  content: \"\\F07B\";\r\n}\r\n.fa-folder-open:before {\r\n  content: \"\\F07C\";\r\n}\r\n.fa-arrows-v:before {\r\n  content: \"\\F07D\";\r\n}\r\n.fa-arrows-h:before {\r\n  content: \"\\F07E\";\r\n}\r\n.fa-bar-chart-o:before,\r\n.fa-bar-chart:before {\r\n  content: \"\\F080\";\r\n}\r\n.fa-twitter-square:before {\r\n  content: \"\\F081\";\r\n}\r\n.fa-facebook-square:before {\r\n  content: \"\\F082\";\r\n}\r\n.fa-camera-retro:before {\r\n  content: \"\\F083\";\r\n}\r\n.fa-key:before {\r\n  content: \"\\F084\";\r\n}\r\n.fa-gears:before,\r\n.fa-cogs:before {\r\n  content: \"\\F085\";\r\n}\r\n.fa-comments:before {\r\n  content: \"\\F086\";\r\n}\r\n.fa-thumbs-o-up:before {\r\n  content: \"\\F087\";\r\n}\r\n.fa-thumbs-o-down:before {\r\n  content: \"\\F088\";\r\n}\r\n.fa-star-half:before {\r\n  content: \"\\F089\";\r\n}\r\n.fa-heart-o:before {\r\n  content: \"\\F08A\";\r\n}\r\n.fa-sign-out:before {\r\n  content: \"\\F08B\";\r\n}\r\n.fa-linkedin-square:before {\r\n  content: \"\\F08C\";\r\n}\r\n.fa-thumb-tack:before {\r\n  content: \"\\F08D\";\r\n}\r\n.fa-external-link:before {\r\n  content: \"\\F08E\";\r\n}\r\n.fa-sign-in:before {\r\n  content: \"\\F090\";\r\n}\r\n.fa-trophy:before {\r\n  content: \"\\F091\";\r\n}\r\n.fa-github-square:before {\r\n  content: \"\\F092\";\r\n}\r\n.fa-upload:before {\r\n  content: \"\\F093\";\r\n}\r\n.fa-lemon-o:before {\r\n  content: \"\\F094\";\r\n}\r\n.fa-phone:before {\r\n  content: \"\\F095\";\r\n}\r\n.fa-square-o:before {\r\n  content: \"\\F096\";\r\n}\r\n.fa-bookmark-o:before {\r\n  content: \"\\F097\";\r\n}\r\n.fa-phone-square:before {\r\n  content: \"\\F098\";\r\n}\r\n.fa-twitter:before {\r\n  content: \"\\F099\";\r\n}\r\n.fa-facebook-f:before,\r\n.fa-facebook:before {\r\n  content: \"\\F09A\";\r\n}\r\n.fa-github:before {\r\n  content: \"\\F09B\";\r\n}\r\n.fa-unlock:before {\r\n  content: \"\\F09C\";\r\n}\r\n.fa-credit-card:before {\r\n  content: \"\\F09D\";\r\n}\r\n.fa-feed:before,\r\n.fa-rss:before {\r\n  content: \"\\F09E\";\r\n}\r\n.fa-hdd-o:before {\r\n  content: \"\\F0A0\";\r\n}\r\n.fa-bullhorn:before {\r\n  content: \"\\F0A1\";\r\n}\r\n.fa-bell:before {\r\n  content: \"\\F0F3\";\r\n}\r\n.fa-certificate:before {\r\n  content: \"\\F0A3\";\r\n}\r\n.fa-hand-o-right:before {\r\n  content: \"\\F0A4\";\r\n}\r\n.fa-hand-o-left:before {\r\n  content: \"\\F0A5\";\r\n}\r\n.fa-hand-o-up:before {\r\n  content: \"\\F0A6\";\r\n}\r\n.fa-hand-o-down:before {\r\n  content: \"\\F0A7\";\r\n}\r\n.fa-arrow-circle-left:before {\r\n  content: \"\\F0A8\";\r\n}\r\n.fa-arrow-circle-right:before {\r\n  content: \"\\F0A9\";\r\n}\r\n.fa-arrow-circle-up:before {\r\n  content: \"\\F0AA\";\r\n}\r\n.fa-arrow-circle-down:before {\r\n  content: \"\\F0AB\";\r\n}\r\n.fa-globe:before {\r\n  content: \"\\F0AC\";\r\n}\r\n.fa-wrench:before {\r\n  content: \"\\F0AD\";\r\n}\r\n.fa-tasks:before {\r\n  content: \"\\F0AE\";\r\n}\r\n.fa-filter:before {\r\n  content: \"\\F0B0\";\r\n}\r\n.fa-briefcase:before {\r\n  content: \"\\F0B1\";\r\n}\r\n.fa-arrows-alt:before {\r\n  content: \"\\F0B2\";\r\n}\r\n.fa-group:before,\r\n.fa-users:before {\r\n  content: \"\\F0C0\";\r\n}\r\n.fa-chain:before,\r\n.fa-link:before {\r\n  content: \"\\F0C1\";\r\n}\r\n.fa-cloud:before {\r\n  content: \"\\F0C2\";\r\n}\r\n.fa-flask:before {\r\n  content: \"\\F0C3\";\r\n}\r\n.fa-cut:before,\r\n.fa-scissors:before {\r\n  content: \"\\F0C4\";\r\n}\r\n.fa-copy:before,\r\n.fa-files-o:before {\r\n  content: \"\\F0C5\";\r\n}\r\n.fa-paperclip:before {\r\n  content: \"\\F0C6\";\r\n}\r\n.fa-save:before,\r\n.fa-floppy-o:before {\r\n  content: \"\\F0C7\";\r\n}\r\n.fa-square:before {\r\n  content: \"\\F0C8\";\r\n}\r\n.fa-navicon:before,\r\n.fa-reorder:before,\r\n.fa-bars:before {\r\n  content: \"\\F0C9\";\r\n}\r\n.fa-list-ul:before {\r\n  content: \"\\F0CA\";\r\n}\r\n.fa-list-ol:before {\r\n  content: \"\\F0CB\";\r\n}\r\n.fa-strikethrough:before {\r\n  content: \"\\F0CC\";\r\n}\r\n.fa-underline:before {\r\n  content: \"\\F0CD\";\r\n}\r\n.fa-table:before {\r\n  content: \"\\F0CE\";\r\n}\r\n.fa-magic:before {\r\n  content: \"\\F0D0\";\r\n}\r\n.fa-truck:before {\r\n  content: \"\\F0D1\";\r\n}\r\n.fa-pinterest:before {\r\n  content: \"\\F0D2\";\r\n}\r\n.fa-pinterest-square:before {\r\n  content: \"\\F0D3\";\r\n}\r\n.fa-google-plus-square:before {\r\n  content: \"\\F0D4\";\r\n}\r\n.fa-google-plus:before {\r\n  content: \"\\F0D5\";\r\n}\r\n.fa-money:before {\r\n  content: \"\\F0D6\";\r\n}\r\n.fa-caret-down:before {\r\n  content: \"\\F0D7\";\r\n}\r\n.fa-caret-up:before {\r\n  content: \"\\F0D8\";\r\n}\r\n.fa-caret-left:before {\r\n  content: \"\\F0D9\";\r\n}\r\n.fa-caret-right:before {\r\n  content: \"\\F0DA\";\r\n}\r\n.fa-columns:before {\r\n  content: \"\\F0DB\";\r\n}\r\n.fa-unsorted:before,\r\n.fa-sort:before {\r\n  content: \"\\F0DC\";\r\n}\r\n.fa-sort-down:before,\r\n.fa-sort-desc:before {\r\n  content: \"\\F0DD\";\r\n}\r\n.fa-sort-up:before,\r\n.fa-sort-asc:before {\r\n  content: \"\\F0DE\";\r\n}\r\n.fa-envelope:before {\r\n  content: \"\\F0E0\";\r\n}\r\n.fa-linkedin:before {\r\n  content: \"\\F0E1\";\r\n}\r\n.fa-rotate-left:before,\r\n.fa-undo:before {\r\n  content: \"\\F0E2\";\r\n}\r\n.fa-legal:before,\r\n.fa-gavel:before {\r\n  content: \"\\F0E3\";\r\n}\r\n.fa-dashboard:before,\r\n.fa-tachometer:before {\r\n  content: \"\\F0E4\";\r\n}\r\n.fa-comment-o:before {\r\n  content: \"\\F0E5\";\r\n}\r\n.fa-comments-o:before {\r\n  content: \"\\F0E6\";\r\n}\r\n.fa-flash:before,\r\n.fa-bolt:before {\r\n  content: \"\\F0E7\";\r\n}\r\n.fa-sitemap:before {\r\n  content: \"\\F0E8\";\r\n}\r\n.fa-umbrella:before {\r\n  content: \"\\F0E9\";\r\n}\r\n.fa-paste:before,\r\n.fa-clipboard:before {\r\n  content: \"\\F0EA\";\r\n}\r\n.fa-lightbulb-o:before {\r\n  content: \"\\F0EB\";\r\n}\r\n.fa-exchange:before {\r\n  content: \"\\F0EC\";\r\n}\r\n.fa-cloud-download:before {\r\n  content: \"\\F0ED\";\r\n}\r\n.fa-cloud-upload:before {\r\n  content: \"\\F0EE\";\r\n}\r\n.fa-user-md:before {\r\n  content: \"\\F0F0\";\r\n}\r\n.fa-stethoscope:before {\r\n  content: \"\\F0F1\";\r\n}\r\n.fa-suitcase:before {\r\n  content: \"\\F0F2\";\r\n}\r\n.fa-bell-o:before {\r\n  content: \"\\F0A2\";\r\n}\r\n.fa-coffee:before {\r\n  content: \"\\F0F4\";\r\n}\r\n.fa-cutlery:before {\r\n  content: \"\\F0F5\";\r\n}\r\n.fa-file-text-o:before {\r\n  content: \"\\F0F6\";\r\n}\r\n.fa-building-o:before {\r\n  content: \"\\F0F7\";\r\n}\r\n.fa-hospital-o:before {\r\n  content: \"\\F0F8\";\r\n}\r\n.fa-ambulance:before {\r\n  content: \"\\F0F9\";\r\n}\r\n.fa-medkit:before {\r\n  content: \"\\F0FA\";\r\n}\r\n.fa-fighter-jet:before {\r\n  content: \"\\F0FB\";\r\n}\r\n.fa-beer:before {\r\n  content: \"\\F0FC\";\r\n}\r\n.fa-h-square:before {\r\n  content: \"\\F0FD\";\r\n}\r\n.fa-plus-square:before {\r\n  content: \"\\F0FE\";\r\n}\r\n.fa-angle-double-left:before {\r\n  content: \"\\F100\";\r\n}\r\n.fa-angle-double-right:before {\r\n  content: \"\\F101\";\r\n}\r\n.fa-angle-double-up:before {\r\n  content: \"\\F102\";\r\n}\r\n.fa-angle-double-down:before {\r\n  content: \"\\F103\";\r\n}\r\n.fa-angle-left:before {\r\n  content: \"\\F104\";\r\n}\r\n.fa-angle-right:before {\r\n  content: \"\\F105\";\r\n}\r\n.fa-angle-up:before {\r\n  content: \"\\F106\";\r\n}\r\n.fa-angle-down:before {\r\n  content: \"\\F107\";\r\n}\r\n.fa-desktop:before {\r\n  content: \"\\F108\";\r\n}\r\n.fa-laptop:before {\r\n  content: \"\\F109\";\r\n}\r\n.fa-tablet:before {\r\n  content: \"\\F10A\";\r\n}\r\n.fa-mobile-phone:before,\r\n.fa-mobile:before {\r\n  content: \"\\F10B\";\r\n}\r\n.fa-circle-o:before {\r\n  content: \"\\F10C\";\r\n}\r\n.fa-quote-left:before {\r\n  content: \"\\F10D\";\r\n}\r\n.fa-quote-right:before {\r\n  content: \"\\F10E\";\r\n}\r\n.fa-spinner:before {\r\n  content: \"\\F110\";\r\n}\r\n.fa-circle:before {\r\n  content: \"\\F111\";\r\n}\r\n.fa-mail-reply:before,\r\n.fa-reply:before {\r\n  content: \"\\F112\";\r\n}\r\n.fa-github-alt:before {\r\n  content: \"\\F113\";\r\n}\r\n.fa-folder-o:before {\r\n  content: \"\\F114\";\r\n}\r\n.fa-folder-open-o:before {\r\n  content: \"\\F115\";\r\n}\r\n.fa-smile-o:before {\r\n  content: \"\\F118\";\r\n}\r\n.fa-frown-o:before {\r\n  content: \"\\F119\";\r\n}\r\n.fa-meh-o:before {\r\n  content: \"\\F11A\";\r\n}\r\n.fa-gamepad:before {\r\n  content: \"\\F11B\";\r\n}\r\n.fa-keyboard-o:before {\r\n  content: \"\\F11C\";\r\n}\r\n.fa-flag-o:before {\r\n  content: \"\\F11D\";\r\n}\r\n.fa-flag-checkered:before {\r\n  content: \"\\F11E\";\r\n}\r\n.fa-terminal:before {\r\n  content: \"\\F120\";\r\n}\r\n.fa-code:before {\r\n  content: \"\\F121\";\r\n}\r\n.fa-mail-reply-all:before,\r\n.fa-reply-all:before {\r\n  content: \"\\F122\";\r\n}\r\n.fa-star-half-empty:before,\r\n.fa-star-half-full:before,\r\n.fa-star-half-o:before {\r\n  content: \"\\F123\";\r\n}\r\n.fa-location-arrow:before {\r\n  content: \"\\F124\";\r\n}\r\n.fa-crop:before {\r\n  content: \"\\F125\";\r\n}\r\n.fa-code-fork:before {\r\n  content: \"\\F126\";\r\n}\r\n.fa-unlink:before,\r\n.fa-chain-broken:before {\r\n  content: \"\\F127\";\r\n}\r\n.fa-question:before {\r\n  content: \"\\F128\";\r\n}\r\n.fa-info:before {\r\n  content: \"\\F129\";\r\n}\r\n.fa-exclamation:before {\r\n  content: \"\\F12A\";\r\n}\r\n.fa-superscript:before {\r\n  content: \"\\F12B\";\r\n}\r\n.fa-subscript:before {\r\n  content: \"\\F12C\";\r\n}\r\n.fa-eraser:before {\r\n  content: \"\\F12D\";\r\n}\r\n.fa-puzzle-piece:before {\r\n  content: \"\\F12E\";\r\n}\r\n.fa-microphone:before {\r\n  content: \"\\F130\";\r\n}\r\n.fa-microphone-slash:before {\r\n  content: \"\\F131\";\r\n}\r\n.fa-shield:before {\r\n  content: \"\\F132\";\r\n}\r\n.fa-calendar-o:before {\r\n  content: \"\\F133\";\r\n}\r\n.fa-fire-extinguisher:before {\r\n  content: \"\\F134\";\r\n}\r\n.fa-rocket:before {\r\n  content: \"\\F135\";\r\n}\r\n.fa-maxcdn:before {\r\n  content: \"\\F136\";\r\n}\r\n.fa-chevron-circle-left:before {\r\n  content: \"\\F137\";\r\n}\r\n.fa-chevron-circle-right:before {\r\n  content: \"\\F138\";\r\n}\r\n.fa-chevron-circle-up:before {\r\n  content: \"\\F139\";\r\n}\r\n.fa-chevron-circle-down:before {\r\n  content: \"\\F13A\";\r\n}\r\n.fa-html5:before {\r\n  content: \"\\F13B\";\r\n}\r\n.fa-css3:before {\r\n  content: \"\\F13C\";\r\n}\r\n.fa-anchor:before {\r\n  content: \"\\F13D\";\r\n}\r\n.fa-unlock-alt:before {\r\n  content: \"\\F13E\";\r\n}\r\n.fa-bullseye:before {\r\n  content: \"\\F140\";\r\n}\r\n.fa-ellipsis-h:before {\r\n  content: \"\\F141\";\r\n}\r\n.fa-ellipsis-v:before {\r\n  content: \"\\F142\";\r\n}\r\n.fa-rss-square:before {\r\n  content: \"\\F143\";\r\n}\r\n.fa-play-circle:before {\r\n  content: \"\\F144\";\r\n}\r\n.fa-ticket:before {\r\n  content: \"\\F145\";\r\n}\r\n.fa-minus-square:before {\r\n  content: \"\\F146\";\r\n}\r\n.fa-minus-square-o:before {\r\n  content: \"\\F147\";\r\n}\r\n.fa-level-up:before {\r\n  content: \"\\F148\";\r\n}\r\n.fa-level-down:before {\r\n  content: \"\\F149\";\r\n}\r\n.fa-check-square:before {\r\n  content: \"\\F14A\";\r\n}\r\n.fa-pencil-square:before {\r\n  content: \"\\F14B\";\r\n}\r\n.fa-external-link-square:before {\r\n  content: \"\\F14C\";\r\n}\r\n.fa-share-square:before {\r\n  content: \"\\F14D\";\r\n}\r\n.fa-compass:before {\r\n  content: \"\\F14E\";\r\n}\r\n.fa-toggle-down:before,\r\n.fa-caret-square-o-down:before {\r\n  content: \"\\F150\";\r\n}\r\n.fa-toggle-up:before,\r\n.fa-caret-square-o-up:before {\r\n  content: \"\\F151\";\r\n}\r\n.fa-toggle-right:before,\r\n.fa-caret-square-o-right:before {\r\n  content: \"\\F152\";\r\n}\r\n.fa-euro:before,\r\n.fa-eur:before {\r\n  content: \"\\F153\";\r\n}\r\n.fa-gbp:before {\r\n  content: \"\\F154\";\r\n}\r\n.fa-dollar:before,\r\n.fa-usd:before {\r\n  content: \"\\F155\";\r\n}\r\n.fa-rupee:before,\r\n.fa-inr:before {\r\n  content: \"\\F156\";\r\n}\r\n.fa-cny:before,\r\n.fa-rmb:before,\r\n.fa-yen:before,\r\n.fa-jpy:before {\r\n  content: \"\\F157\";\r\n}\r\n.fa-ruble:before,\r\n.fa-rouble:before,\r\n.fa-rub:before {\r\n  content: \"\\F158\";\r\n}\r\n.fa-won:before,\r\n.fa-krw:before {\r\n  content: \"\\F159\";\r\n}\r\n.fa-bitcoin:before,\r\n.fa-btc:before {\r\n  content: \"\\F15A\";\r\n}\r\n.fa-file:before {\r\n  content: \"\\F15B\";\r\n}\r\n.fa-file-text:before {\r\n  content: \"\\F15C\";\r\n}\r\n.fa-sort-alpha-asc:before {\r\n  content: \"\\F15D\";\r\n}\r\n.fa-sort-alpha-desc:before {\r\n  content: \"\\F15E\";\r\n}\r\n.fa-sort-amount-asc:before {\r\n  content: \"\\F160\";\r\n}\r\n.fa-sort-amount-desc:before {\r\n  content: \"\\F161\";\r\n}\r\n.fa-sort-numeric-asc:before {\r\n  content: \"\\F162\";\r\n}\r\n.fa-sort-numeric-desc:before {\r\n  content: \"\\F163\";\r\n}\r\n.fa-thumbs-up:before {\r\n  content: \"\\F164\";\r\n}\r\n.fa-thumbs-down:before {\r\n  content: \"\\F165\";\r\n}\r\n.fa-youtube-square:before {\r\n  content: \"\\F166\";\r\n}\r\n.fa-youtube:before {\r\n  content: \"\\F167\";\r\n}\r\n.fa-xing:before {\r\n  content: \"\\F168\";\r\n}\r\n.fa-xing-square:before {\r\n  content: \"\\F169\";\r\n}\r\n.fa-youtube-play:before {\r\n  content: \"\\F16A\";\r\n}\r\n.fa-dropbox:before {\r\n  content: \"\\F16B\";\r\n}\r\n.fa-stack-overflow:before {\r\n  content: \"\\F16C\";\r\n}\r\n.fa-instagram:before {\r\n  content: \"\\F16D\";\r\n}\r\n.fa-flickr:before {\r\n  content: \"\\F16E\";\r\n}\r\n.fa-adn:before {\r\n  content: \"\\F170\";\r\n}\r\n.fa-bitbucket:before {\r\n  content: \"\\F171\";\r\n}\r\n.fa-bitbucket-square:before {\r\n  content: \"\\F172\";\r\n}\r\n.fa-tumblr:before {\r\n  content: \"\\F173\";\r\n}\r\n.fa-tumblr-square:before {\r\n  content: \"\\F174\";\r\n}\r\n.fa-long-arrow-down:before {\r\n  content: \"\\F175\";\r\n}\r\n.fa-long-arrow-up:before {\r\n  content: \"\\F176\";\r\n}\r\n.fa-long-arrow-left:before {\r\n  content: \"\\F177\";\r\n}\r\n.fa-long-arrow-right:before {\r\n  content: \"\\F178\";\r\n}\r\n.fa-apple:before {\r\n  content: \"\\F179\";\r\n}\r\n.fa-windows:before {\r\n  content: \"\\F17A\";\r\n}\r\n.fa-android:before {\r\n  content: \"\\F17B\";\r\n}\r\n.fa-linux:before {\r\n  content: \"\\F17C\";\r\n}\r\n.fa-dribbble:before {\r\n  content: \"\\F17D\";\r\n}\r\n.fa-skype:before {\r\n  content: \"\\F17E\";\r\n}\r\n.fa-foursquare:before {\r\n  content: \"\\F180\";\r\n}\r\n.fa-trello:before {\r\n  content: \"\\F181\";\r\n}\r\n.fa-female:before {\r\n  content: \"\\F182\";\r\n}\r\n.fa-male:before {\r\n  content: \"\\F183\";\r\n}\r\n.fa-gittip:before,\r\n.fa-gratipay:before {\r\n  content: \"\\F184\";\r\n}\r\n.fa-sun-o:before {\r\n  content: \"\\F185\";\r\n}\r\n.fa-moon-o:before {\r\n  content: \"\\F186\";\r\n}\r\n.fa-archive:before {\r\n  content: \"\\F187\";\r\n}\r\n.fa-bug:before {\r\n  content: \"\\F188\";\r\n}\r\n.fa-vk:before {\r\n  content: \"\\F189\";\r\n}\r\n.fa-weibo:before {\r\n  content: \"\\F18A\";\r\n}\r\n.fa-renren:before {\r\n  content: \"\\F18B\";\r\n}\r\n.fa-pagelines:before {\r\n  content: \"\\F18C\";\r\n}\r\n.fa-stack-exchange:before {\r\n  content: \"\\F18D\";\r\n}\r\n.fa-arrow-circle-o-right:before {\r\n  content: \"\\F18E\";\r\n}\r\n.fa-arrow-circle-o-left:before {\r\n  content: \"\\F190\";\r\n}\r\n.fa-toggle-left:before,\r\n.fa-caret-square-o-left:before {\r\n  content: \"\\F191\";\r\n}\r\n.fa-dot-circle-o:before {\r\n  content: \"\\F192\";\r\n}\r\n.fa-wheelchair:before {\r\n  content: \"\\F193\";\r\n}\r\n.fa-vimeo-square:before {\r\n  content: \"\\F194\";\r\n}\r\n.fa-turkish-lira:before,\r\n.fa-try:before {\r\n  content: \"\\F195\";\r\n}\r\n.fa-plus-square-o:before {\r\n  content: \"\\F196\";\r\n}\r\n.fa-space-shuttle:before {\r\n  content: \"\\F197\";\r\n}\r\n.fa-slack:before {\r\n  content: \"\\F198\";\r\n}\r\n.fa-envelope-square:before {\r\n  content: \"\\F199\";\r\n}\r\n.fa-wordpress:before {\r\n  content: \"\\F19A\";\r\n}\r\n.fa-openid:before {\r\n  content: \"\\F19B\";\r\n}\r\n.fa-institution:before,\r\n.fa-bank:before,\r\n.fa-university:before {\r\n  content: \"\\F19C\";\r\n}\r\n.fa-mortar-board:before,\r\n.fa-graduation-cap:before {\r\n  content: \"\\F19D\";\r\n}\r\n.fa-yahoo:before {\r\n  content: \"\\F19E\";\r\n}\r\n.fa-google:before {\r\n  content: \"\\F1A0\";\r\n}\r\n.fa-reddit:before {\r\n  content: \"\\F1A1\";\r\n}\r\n.fa-reddit-square:before {\r\n  content: \"\\F1A2\";\r\n}\r\n.fa-stumbleupon-circle:before {\r\n  content: \"\\F1A3\";\r\n}\r\n.fa-stumbleupon:before {\r\n  content: \"\\F1A4\";\r\n}\r\n.fa-delicious:before {\r\n  content: \"\\F1A5\";\r\n}\r\n.fa-digg:before {\r\n  content: \"\\F1A6\";\r\n}\r\n.fa-pied-piper-pp:before {\r\n  content: \"\\F1A7\";\r\n}\r\n.fa-pied-piper-alt:before {\r\n  content: \"\\F1A8\";\r\n}\r\n.fa-drupal:before {\r\n  content: \"\\F1A9\";\r\n}\r\n.fa-joomla:before {\r\n  content: \"\\F1AA\";\r\n}\r\n.fa-language:before {\r\n  content: \"\\F1AB\";\r\n}\r\n.fa-fax:before {\r\n  content: \"\\F1AC\";\r\n}\r\n.fa-building:before {\r\n  content: \"\\F1AD\";\r\n}\r\n.fa-child:before {\r\n  content: \"\\F1AE\";\r\n}\r\n.fa-paw:before {\r\n  content: \"\\F1B0\";\r\n}\r\n.fa-spoon:before {\r\n  content: \"\\F1B1\";\r\n}\r\n.fa-cube:before {\r\n  content: \"\\F1B2\";\r\n}\r\n.fa-cubes:before {\r\n  content: \"\\F1B3\";\r\n}\r\n.fa-behance:before {\r\n  content: \"\\F1B4\";\r\n}\r\n.fa-behance-square:before {\r\n  content: \"\\F1B5\";\r\n}\r\n.fa-steam:before {\r\n  content: \"\\F1B6\";\r\n}\r\n.fa-steam-square:before {\r\n  content: \"\\F1B7\";\r\n}\r\n.fa-recycle:before {\r\n  content: \"\\F1B8\";\r\n}\r\n.fa-automobile:before,\r\n.fa-car:before {\r\n  content: \"\\F1B9\";\r\n}\r\n.fa-cab:before,\r\n.fa-taxi:before {\r\n  content: \"\\F1BA\";\r\n}\r\n.fa-tree:before {\r\n  content: \"\\F1BB\";\r\n}\r\n.fa-spotify:before {\r\n  content: \"\\F1BC\";\r\n}\r\n.fa-deviantart:before {\r\n  content: \"\\F1BD\";\r\n}\r\n.fa-soundcloud:before {\r\n  content: \"\\F1BE\";\r\n}\r\n.fa-database:before {\r\n  content: \"\\F1C0\";\r\n}\r\n.fa-file-pdf-o:before {\r\n  content: \"\\F1C1\";\r\n}\r\n.fa-file-word-o:before {\r\n  content: \"\\F1C2\";\r\n}\r\n.fa-file-excel-o:before {\r\n  content: \"\\F1C3\";\r\n}\r\n.fa-file-powerpoint-o:before {\r\n  content: \"\\F1C4\";\r\n}\r\n.fa-file-photo-o:before,\r\n.fa-file-picture-o:before,\r\n.fa-file-image-o:before {\r\n  content: \"\\F1C5\";\r\n}\r\n.fa-file-zip-o:before,\r\n.fa-file-archive-o:before {\r\n  content: \"\\F1C6\";\r\n}\r\n.fa-file-sound-o:before,\r\n.fa-file-audio-o:before {\r\n  content: \"\\F1C7\";\r\n}\r\n.fa-file-movie-o:before,\r\n.fa-file-video-o:before {\r\n  content: \"\\F1C8\";\r\n}\r\n.fa-file-code-o:before {\r\n  content: \"\\F1C9\";\r\n}\r\n.fa-vine:before {\r\n  content: \"\\F1CA\";\r\n}\r\n.fa-codepen:before {\r\n  content: \"\\F1CB\";\r\n}\r\n.fa-jsfiddle:before {\r\n  content: \"\\F1CC\";\r\n}\r\n.fa-life-bouy:before,\r\n.fa-life-buoy:before,\r\n.fa-life-saver:before,\r\n.fa-support:before,\r\n.fa-life-ring:before {\r\n  content: \"\\F1CD\";\r\n}\r\n.fa-circle-o-notch:before {\r\n  content: \"\\F1CE\";\r\n}\r\n.fa-ra:before,\r\n.fa-resistance:before,\r\n.fa-rebel:before {\r\n  content: \"\\F1D0\";\r\n}\r\n.fa-ge:before,\r\n.fa-empire:before {\r\n  content: \"\\F1D1\";\r\n}\r\n.fa-git-square:before {\r\n  content: \"\\F1D2\";\r\n}\r\n.fa-git:before {\r\n  content: \"\\F1D3\";\r\n}\r\n.fa-y-combinator-square:before,\r\n.fa-yc-square:before,\r\n.fa-hacker-news:before {\r\n  content: \"\\F1D4\";\r\n}\r\n.fa-tencent-weibo:before {\r\n  content: \"\\F1D5\";\r\n}\r\n.fa-qq:before {\r\n  content: \"\\F1D6\";\r\n}\r\n.fa-wechat:before,\r\n.fa-weixin:before {\r\n  content: \"\\F1D7\";\r\n}\r\n.fa-send:before,\r\n.fa-paper-plane:before {\r\n  content: \"\\F1D8\";\r\n}\r\n.fa-send-o:before,\r\n.fa-paper-plane-o:before {\r\n  content: \"\\F1D9\";\r\n}\r\n.fa-history:before {\r\n  content: \"\\F1DA\";\r\n}\r\n.fa-circle-thin:before {\r\n  content: \"\\F1DB\";\r\n}\r\n.fa-header:before {\r\n  content: \"\\F1DC\";\r\n}\r\n.fa-paragraph:before {\r\n  content: \"\\F1DD\";\r\n}\r\n.fa-sliders:before {\r\n  content: \"\\F1DE\";\r\n}\r\n.fa-share-alt:before {\r\n  content: \"\\F1E0\";\r\n}\r\n.fa-share-alt-square:before {\r\n  content: \"\\F1E1\";\r\n}\r\n.fa-bomb:before {\r\n  content: \"\\F1E2\";\r\n}\r\n.fa-soccer-ball-o:before,\r\n.fa-futbol-o:before {\r\n  content: \"\\F1E3\";\r\n}\r\n.fa-tty:before {\r\n  content: \"\\F1E4\";\r\n}\r\n.fa-binoculars:before {\r\n  content: \"\\F1E5\";\r\n}\r\n.fa-plug:before {\r\n  content: \"\\F1E6\";\r\n}\r\n.fa-slideshare:before {\r\n  content: \"\\F1E7\";\r\n}\r\n.fa-twitch:before {\r\n  content: \"\\F1E8\";\r\n}\r\n.fa-yelp:before {\r\n  content: \"\\F1E9\";\r\n}\r\n.fa-newspaper-o:before {\r\n  content: \"\\F1EA\";\r\n}\r\n.fa-wifi:before {\r\n  content: \"\\F1EB\";\r\n}\r\n.fa-calculator:before {\r\n  content: \"\\F1EC\";\r\n}\r\n.fa-paypal:before {\r\n  content: \"\\F1ED\";\r\n}\r\n.fa-google-wallet:before {\r\n  content: \"\\F1EE\";\r\n}\r\n.fa-cc-visa:before {\r\n  content: \"\\F1F0\";\r\n}\r\n.fa-cc-mastercard:before {\r\n  content: \"\\F1F1\";\r\n}\r\n.fa-cc-discover:before {\r\n  content: \"\\F1F2\";\r\n}\r\n.fa-cc-amex:before {\r\n  content: \"\\F1F3\";\r\n}\r\n.fa-cc-paypal:before {\r\n  content: \"\\F1F4\";\r\n}\r\n.fa-cc-stripe:before {\r\n  content: \"\\F1F5\";\r\n}\r\n.fa-bell-slash:before {\r\n  content: \"\\F1F6\";\r\n}\r\n.fa-bell-slash-o:before {\r\n  content: \"\\F1F7\";\r\n}\r\n.fa-trash:before {\r\n  content: \"\\F1F8\";\r\n}\r\n.fa-copyright:before {\r\n  content: \"\\F1F9\";\r\n}\r\n.fa-at:before {\r\n  content: \"\\F1FA\";\r\n}\r\n.fa-eyedropper:before {\r\n  content: \"\\F1FB\";\r\n}\r\n.fa-paint-brush:before {\r\n  content: \"\\F1FC\";\r\n}\r\n.fa-birthday-cake:before {\r\n  content: \"\\F1FD\";\r\n}\r\n.fa-area-chart:before {\r\n  content: \"\\F1FE\";\r\n}\r\n.fa-pie-chart:before {\r\n  content: \"\\F200\";\r\n}\r\n.fa-line-chart:before {\r\n  content: \"\\F201\";\r\n}\r\n.fa-lastfm:before {\r\n  content: \"\\F202\";\r\n}\r\n.fa-lastfm-square:before {\r\n  content: \"\\F203\";\r\n}\r\n.fa-toggle-off:before {\r\n  content: \"\\F204\";\r\n}\r\n.fa-toggle-on:before {\r\n  content: \"\\F205\";\r\n}\r\n.fa-bicycle:before {\r\n  content: \"\\F206\";\r\n}\r\n.fa-bus:before {\r\n  content: \"\\F207\";\r\n}\r\n.fa-ioxhost:before {\r\n  content: \"\\F208\";\r\n}\r\n.fa-angellist:before {\r\n  content: \"\\F209\";\r\n}\r\n.fa-cc:before {\r\n  content: \"\\F20A\";\r\n}\r\n.fa-shekel:before,\r\n.fa-sheqel:before,\r\n.fa-ils:before {\r\n  content: \"\\F20B\";\r\n}\r\n.fa-meanpath:before {\r\n  content: \"\\F20C\";\r\n}\r\n.fa-buysellads:before {\r\n  content: \"\\F20D\";\r\n}\r\n.fa-connectdevelop:before {\r\n  content: \"\\F20E\";\r\n}\r\n.fa-dashcube:before {\r\n  content: \"\\F210\";\r\n}\r\n.fa-forumbee:before {\r\n  content: \"\\F211\";\r\n}\r\n.fa-leanpub:before {\r\n  content: \"\\F212\";\r\n}\r\n.fa-sellsy:before {\r\n  content: \"\\F213\";\r\n}\r\n.fa-shirtsinbulk:before {\r\n  content: \"\\F214\";\r\n}\r\n.fa-simplybuilt:before {\r\n  content: \"\\F215\";\r\n}\r\n.fa-skyatlas:before {\r\n  content: \"\\F216\";\r\n}\r\n.fa-cart-plus:before {\r\n  content: \"\\F217\";\r\n}\r\n.fa-cart-arrow-down:before {\r\n  content: \"\\F218\";\r\n}\r\n.fa-diamond:before {\r\n  content: \"\\F219\";\r\n}\r\n.fa-ship:before {\r\n  content: \"\\F21A\";\r\n}\r\n.fa-user-secret:before {\r\n  content: \"\\F21B\";\r\n}\r\n.fa-motorcycle:before {\r\n  content: \"\\F21C\";\r\n}\r\n.fa-street-view:before {\r\n  content: \"\\F21D\";\r\n}\r\n.fa-heartbeat:before {\r\n  content: \"\\F21E\";\r\n}\r\n.fa-venus:before {\r\n  content: \"\\F221\";\r\n}\r\n.fa-mars:before {\r\n  content: \"\\F222\";\r\n}\r\n.fa-mercury:before {\r\n  content: \"\\F223\";\r\n}\r\n.fa-intersex:before,\r\n.fa-transgender:before {\r\n  content: \"\\F224\";\r\n}\r\n.fa-transgender-alt:before {\r\n  content: \"\\F225\";\r\n}\r\n.fa-venus-double:before {\r\n  content: \"\\F226\";\r\n}\r\n.fa-mars-double:before {\r\n  content: \"\\F227\";\r\n}\r\n.fa-venus-mars:before {\r\n  content: \"\\F228\";\r\n}\r\n.fa-mars-stroke:before {\r\n  content: \"\\F229\";\r\n}\r\n.fa-mars-stroke-v:before {\r\n  content: \"\\F22A\";\r\n}\r\n.fa-mars-stroke-h:before {\r\n  content: \"\\F22B\";\r\n}\r\n.fa-neuter:before {\r\n  content: \"\\F22C\";\r\n}\r\n.fa-genderless:before {\r\n  content: \"\\F22D\";\r\n}\r\n.fa-facebook-official:before {\r\n  content: \"\\F230\";\r\n}\r\n.fa-pinterest-p:before {\r\n  content: \"\\F231\";\r\n}\r\n.fa-whatsapp:before {\r\n  content: \"\\F232\";\r\n}\r\n.fa-server:before {\r\n  content: \"\\F233\";\r\n}\r\n.fa-user-plus:before {\r\n  content: \"\\F234\";\r\n}\r\n.fa-user-times:before {\r\n  content: \"\\F235\";\r\n}\r\n.fa-hotel:before,\r\n.fa-bed:before {\r\n  content: \"\\F236\";\r\n}\r\n.fa-viacoin:before {\r\n  content: \"\\F237\";\r\n}\r\n.fa-train:before {\r\n  content: \"\\F238\";\r\n}\r\n.fa-subway:before {\r\n  content: \"\\F239\";\r\n}\r\n.fa-medium:before {\r\n  content: \"\\F23A\";\r\n}\r\n.fa-yc:before,\r\n.fa-y-combinator:before {\r\n  content: \"\\F23B\";\r\n}\r\n.fa-optin-monster:before {\r\n  content: \"\\F23C\";\r\n}\r\n.fa-opencart:before {\r\n  content: \"\\F23D\";\r\n}\r\n.fa-expeditedssl:before {\r\n  content: \"\\F23E\";\r\n}\r\n.fa-battery-4:before,\r\n.fa-battery:before,\r\n.fa-battery-full:before {\r\n  content: \"\\F240\";\r\n}\r\n.fa-battery-3:before,\r\n.fa-battery-three-quarters:before {\r\n  content: \"\\F241\";\r\n}\r\n.fa-battery-2:before,\r\n.fa-battery-half:before {\r\n  content: \"\\F242\";\r\n}\r\n.fa-battery-1:before,\r\n.fa-battery-quarter:before {\r\n  content: \"\\F243\";\r\n}\r\n.fa-battery-0:before,\r\n.fa-battery-empty:before {\r\n  content: \"\\F244\";\r\n}\r\n.fa-mouse-pointer:before {\r\n  content: \"\\F245\";\r\n}\r\n.fa-i-cursor:before {\r\n  content: \"\\F246\";\r\n}\r\n.fa-object-group:before {\r\n  content: \"\\F247\";\r\n}\r\n.fa-object-ungroup:before {\r\n  content: \"\\F248\";\r\n}\r\n.fa-sticky-note:before {\r\n  content: \"\\F249\";\r\n}\r\n.fa-sticky-note-o:before {\r\n  content: \"\\F24A\";\r\n}\r\n.fa-cc-jcb:before {\r\n  content: \"\\F24B\";\r\n}\r\n.fa-cc-diners-club:before {\r\n  content: \"\\F24C\";\r\n}\r\n.fa-clone:before {\r\n  content: \"\\F24D\";\r\n}\r\n.fa-balance-scale:before {\r\n  content: \"\\F24E\";\r\n}\r\n.fa-hourglass-o:before {\r\n  content: \"\\F250\";\r\n}\r\n.fa-hourglass-1:before,\r\n.fa-hourglass-start:before {\r\n  content: \"\\F251\";\r\n}\r\n.fa-hourglass-2:before,\r\n.fa-hourglass-half:before {\r\n  content: \"\\F252\";\r\n}\r\n.fa-hourglass-3:before,\r\n.fa-hourglass-end:before {\r\n  content: \"\\F253\";\r\n}\r\n.fa-hourglass:before {\r\n  content: \"\\F254\";\r\n}\r\n.fa-hand-grab-o:before,\r\n.fa-hand-rock-o:before {\r\n  content: \"\\F255\";\r\n}\r\n.fa-hand-stop-o:before,\r\n.fa-hand-paper-o:before {\r\n  content: \"\\F256\";\r\n}\r\n.fa-hand-scissors-o:before {\r\n  content: \"\\F257\";\r\n}\r\n.fa-hand-lizard-o:before {\r\n  content: \"\\F258\";\r\n}\r\n.fa-hand-spock-o:before {\r\n  content: \"\\F259\";\r\n}\r\n.fa-hand-pointer-o:before {\r\n  content: \"\\F25A\";\r\n}\r\n.fa-hand-peace-o:before {\r\n  content: \"\\F25B\";\r\n}\r\n.fa-trademark:before {\r\n  content: \"\\F25C\";\r\n}\r\n.fa-registered:before {\r\n  content: \"\\F25D\";\r\n}\r\n.fa-creative-commons:before {\r\n  content: \"\\F25E\";\r\n}\r\n.fa-gg:before {\r\n  content: \"\\F260\";\r\n}\r\n.fa-gg-circle:before {\r\n  content: \"\\F261\";\r\n}\r\n.fa-tripadvisor:before {\r\n  content: \"\\F262\";\r\n}\r\n.fa-odnoklassniki:before {\r\n  content: \"\\F263\";\r\n}\r\n.fa-odnoklassniki-square:before {\r\n  content: \"\\F264\";\r\n}\r\n.fa-get-pocket:before {\r\n  content: \"\\F265\";\r\n}\r\n.fa-wikipedia-w:before {\r\n  content: \"\\F266\";\r\n}\r\n.fa-safari:before {\r\n  content: \"\\F267\";\r\n}\r\n.fa-chrome:before {\r\n  content: \"\\F268\";\r\n}\r\n.fa-firefox:before {\r\n  content: \"\\F269\";\r\n}\r\n.fa-opera:before {\r\n  content: \"\\F26A\";\r\n}\r\n.fa-internet-explorer:before {\r\n  content: \"\\F26B\";\r\n}\r\n.fa-tv:before,\r\n.fa-television:before {\r\n  content: \"\\F26C\";\r\n}\r\n.fa-contao:before {\r\n  content: \"\\F26D\";\r\n}\r\n.fa-500px:before {\r\n  content: \"\\F26E\";\r\n}\r\n.fa-amazon:before {\r\n  content: \"\\F270\";\r\n}\r\n.fa-calendar-plus-o:before {\r\n  content: \"\\F271\";\r\n}\r\n.fa-calendar-minus-o:before {\r\n  content: \"\\F272\";\r\n}\r\n.fa-calendar-times-o:before {\r\n  content: \"\\F273\";\r\n}\r\n.fa-calendar-check-o:before {\r\n  content: \"\\F274\";\r\n}\r\n.fa-industry:before {\r\n  content: \"\\F275\";\r\n}\r\n.fa-map-pin:before {\r\n  content: \"\\F276\";\r\n}\r\n.fa-map-signs:before {\r\n  content: \"\\F277\";\r\n}\r\n.fa-map-o:before {\r\n  content: \"\\F278\";\r\n}\r\n.fa-map:before {\r\n  content: \"\\F279\";\r\n}\r\n.fa-commenting:before {\r\n  content: \"\\F27A\";\r\n}\r\n.fa-commenting-o:before {\r\n  content: \"\\F27B\";\r\n}\r\n.fa-houzz:before {\r\n  content: \"\\F27C\";\r\n}\r\n.fa-vimeo:before {\r\n  content: \"\\F27D\";\r\n}\r\n.fa-black-tie:before {\r\n  content: \"\\F27E\";\r\n}\r\n.fa-fonticons:before {\r\n  content: \"\\F280\";\r\n}\r\n.fa-reddit-alien:before {\r\n  content: \"\\F281\";\r\n}\r\n.fa-edge:before {\r\n  content: \"\\F282\";\r\n}\r\n.fa-credit-card-alt:before {\r\n  content: \"\\F283\";\r\n}\r\n.fa-codiepie:before {\r\n  content: \"\\F284\";\r\n}\r\n.fa-modx:before {\r\n  content: \"\\F285\";\r\n}\r\n.fa-fort-awesome:before {\r\n  content: \"\\F286\";\r\n}\r\n.fa-usb:before {\r\n  content: \"\\F287\";\r\n}\r\n.fa-product-hunt:before {\r\n  content: \"\\F288\";\r\n}\r\n.fa-mixcloud:before {\r\n  content: \"\\F289\";\r\n}\r\n.fa-scribd:before {\r\n  content: \"\\F28A\";\r\n}\r\n.fa-pause-circle:before {\r\n  content: \"\\F28B\";\r\n}\r\n.fa-pause-circle-o:before {\r\n  content: \"\\F28C\";\r\n}\r\n.fa-stop-circle:before {\r\n  content: \"\\F28D\";\r\n}\r\n.fa-stop-circle-o:before {\r\n  content: \"\\F28E\";\r\n}\r\n.fa-shopping-bag:before {\r\n  content: \"\\F290\";\r\n}\r\n.fa-shopping-basket:before {\r\n  content: \"\\F291\";\r\n}\r\n.fa-hashtag:before {\r\n  content: \"\\F292\";\r\n}\r\n.fa-bluetooth:before {\r\n  content: \"\\F293\";\r\n}\r\n.fa-bluetooth-b:before {\r\n  content: \"\\F294\";\r\n}\r\n.fa-percent:before {\r\n  content: \"\\F295\";\r\n}\r\n.fa-gitlab:before {\r\n  content: \"\\F296\";\r\n}\r\n.fa-wpbeginner:before {\r\n  content: \"\\F297\";\r\n}\r\n.fa-wpforms:before {\r\n  content: \"\\F298\";\r\n}\r\n.fa-envira:before {\r\n  content: \"\\F299\";\r\n}\r\n.fa-universal-access:before {\r\n  content: \"\\F29A\";\r\n}\r\n.fa-wheelchair-alt:before {\r\n  content: \"\\F29B\";\r\n}\r\n.fa-question-circle-o:before {\r\n  content: \"\\F29C\";\r\n}\r\n.fa-blind:before {\r\n  content: \"\\F29D\";\r\n}\r\n.fa-audio-description:before {\r\n  content: \"\\F29E\";\r\n}\r\n.fa-volume-control-phone:before {\r\n  content: \"\\F2A0\";\r\n}\r\n.fa-braille:before {\r\n  content: \"\\F2A1\";\r\n}\r\n.fa-assistive-listening-systems:before {\r\n  content: \"\\F2A2\";\r\n}\r\n.fa-asl-interpreting:before,\r\n.fa-american-sign-language-interpreting:before {\r\n  content: \"\\F2A3\";\r\n}\r\n.fa-deafness:before,\r\n.fa-hard-of-hearing:before,\r\n.fa-deaf:before {\r\n  content: \"\\F2A4\";\r\n}\r\n.fa-glide:before {\r\n  content: \"\\F2A5\";\r\n}\r\n.fa-glide-g:before {\r\n  content: \"\\F2A6\";\r\n}\r\n.fa-signing:before,\r\n.fa-sign-language:before {\r\n  content: \"\\F2A7\";\r\n}\r\n.fa-low-vision:before {\r\n  content: \"\\F2A8\";\r\n}\r\n.fa-viadeo:before {\r\n  content: \"\\F2A9\";\r\n}\r\n.fa-viadeo-square:before {\r\n  content: \"\\F2AA\";\r\n}\r\n.fa-snapchat:before {\r\n  content: \"\\F2AB\";\r\n}\r\n.fa-snapchat-ghost:before {\r\n  content: \"\\F2AC\";\r\n}\r\n.fa-snapchat-square:before {\r\n  content: \"\\F2AD\";\r\n}\r\n.fa-pied-piper:before {\r\n  content: \"\\F2AE\";\r\n}\r\n.fa-first-order:before {\r\n  content: \"\\F2B0\";\r\n}\r\n.fa-yoast:before {\r\n  content: \"\\F2B1\";\r\n}\r\n.fa-themeisle:before {\r\n  content: \"\\F2B2\";\r\n}\r\n.fa-google-plus-circle:before,\r\n.fa-google-plus-official:before {\r\n  content: \"\\F2B3\";\r\n}\r\n.fa-fa:before,\r\n.fa-font-awesome:before {\r\n  content: \"\\F2B4\";\r\n}\r\n.fa-handshake-o:before {\r\n  content: \"\\F2B5\";\r\n}\r\n.fa-envelope-open:before {\r\n  content: \"\\F2B6\";\r\n}\r\n.fa-envelope-open-o:before {\r\n  content: \"\\F2B7\";\r\n}\r\n.fa-linode:before {\r\n  content: \"\\F2B8\";\r\n}\r\n.fa-address-book:before {\r\n  content: \"\\F2B9\";\r\n}\r\n.fa-address-book-o:before {\r\n  content: \"\\F2BA\";\r\n}\r\n.fa-vcard:before,\r\n.fa-address-card:before {\r\n  content: \"\\F2BB\";\r\n}\r\n.fa-vcard-o:before,\r\n.fa-address-card-o:before {\r\n  content: \"\\F2BC\";\r\n}\r\n.fa-user-circle:before {\r\n  content: \"\\F2BD\";\r\n}\r\n.fa-user-circle-o:before {\r\n  content: \"\\F2BE\";\r\n}\r\n.fa-user-o:before {\r\n  content: \"\\F2C0\";\r\n}\r\n.fa-id-badge:before {\r\n  content: \"\\F2C1\";\r\n}\r\n.fa-drivers-license:before,\r\n.fa-id-card:before {\r\n  content: \"\\F2C2\";\r\n}\r\n.fa-drivers-license-o:before,\r\n.fa-id-card-o:before {\r\n  content: \"\\F2C3\";\r\n}\r\n.fa-quora:before {\r\n  content: \"\\F2C4\";\r\n}\r\n.fa-free-code-camp:before {\r\n  content: \"\\F2C5\";\r\n}\r\n.fa-telegram:before {\r\n  content: \"\\F2C6\";\r\n}\r\n.fa-thermometer-4:before,\r\n.fa-thermometer:before,\r\n.fa-thermometer-full:before {\r\n  content: \"\\F2C7\";\r\n}\r\n.fa-thermometer-3:before,\r\n.fa-thermometer-three-quarters:before {\r\n  content: \"\\F2C8\";\r\n}\r\n.fa-thermometer-2:before,\r\n.fa-thermometer-half:before {\r\n  content: \"\\F2C9\";\r\n}\r\n.fa-thermometer-1:before,\r\n.fa-thermometer-quarter:before {\r\n  content: \"\\F2CA\";\r\n}\r\n.fa-thermometer-0:before,\r\n.fa-thermometer-empty:before {\r\n  content: \"\\F2CB\";\r\n}\r\n.fa-shower:before {\r\n  content: \"\\F2CC\";\r\n}\r\n.fa-bathtub:before,\r\n.fa-s15:before,\r\n.fa-bath:before {\r\n  content: \"\\F2CD\";\r\n}\r\n.fa-podcast:before {\r\n  content: \"\\F2CE\";\r\n}\r\n.fa-window-maximize:before {\r\n  content: \"\\F2D0\";\r\n}\r\n.fa-window-minimize:before {\r\n  content: \"\\F2D1\";\r\n}\r\n.fa-window-restore:before {\r\n  content: \"\\F2D2\";\r\n}\r\n.fa-times-rectangle:before,\r\n.fa-window-close:before {\r\n  content: \"\\F2D3\";\r\n}\r\n.fa-times-rectangle-o:before,\r\n.fa-window-close-o:before {\r\n  content: \"\\F2D4\";\r\n}\r\n.fa-bandcamp:before {\r\n  content: \"\\F2D5\";\r\n}\r\n.fa-grav:before {\r\n  content: \"\\F2D6\";\r\n}\r\n.fa-etsy:before {\r\n  content: \"\\F2D7\";\r\n}\r\n.fa-imdb:before {\r\n  content: \"\\F2D8\";\r\n}\r\n.fa-ravelry:before {\r\n  content: \"\\F2D9\";\r\n}\r\n.fa-eercast:before {\r\n  content: \"\\F2DA\";\r\n}\r\n.fa-microchip:before {\r\n  content: \"\\F2DB\";\r\n}\r\n.fa-snowflake-o:before {\r\n  content: \"\\F2DC\";\r\n}\r\n.fa-superpowers:before {\r\n  content: \"\\F2DD\";\r\n}\r\n.fa-wpexplorer:before {\r\n  content: \"\\F2DE\";\r\n}\r\n.fa-meetup:before {\r\n  content: \"\\F2E0\";\r\n}\r\n.sr-only {\r\n  position: absolute;\r\n  width: 1px;\r\n  height: 1px;\r\n  padding: 0;\r\n  margin: -1px;\r\n  overflow: hidden;\r\n  clip: rect(0, 0, 0, 0);\r\n  border: 0;\r\n}\r\n.sr-only-focusable:active,\r\n.sr-only-focusable:focus {\r\n  position: static;\r\n  width: auto;\r\n  height: auto;\r\n  margin: 0;\r\n  overflow: visible;\r\n  clip: auto;\r\n}\r\n", ""]);

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
exports.push([module.i, "\r\n.ion-alert:before { content: \"\\F101\"; }\r\n\r\n.ion-alert-circled:before { content: \"\\F100\"; }\r\n\r\n.ion-android-add:before { content: \"\\F2C7\"; }\r\n\r\n.ion-android-add-circle:before { content: \"\\F359\"; }\r\n\r\n.ion-android-alarm-clock:before { content: \"\\F35A\"; }\r\n\r\n.ion-android-alert:before { content: \"\\F35B\"; }\r\n\r\n.ion-android-apps:before { content: \"\\F35C\"; }\r\n\r\n.ion-android-archive:before { content: \"\\F2C9\"; }\r\n\r\n.ion-android-arrow-back:before { content: \"\\F2CA\"; }\r\n\r\n.ion-android-arrow-down:before { content: \"\\F35D\"; }\r\n\r\n.ion-android-arrow-dropdown:before { content: \"\\F35F\"; }\r\n\r\n.ion-android-arrow-dropdown-circle:before { content: \"\\F35E\"; }\r\n\r\n.ion-android-arrow-dropleft:before { content: \"\\F361\"; }\r\n\r\n.ion-android-arrow-dropleft-circle:before { content: \"\\F360\"; }\r\n\r\n.ion-android-arrow-dropright:before { content: \"\\F363\"; }\r\n\r\n.ion-android-arrow-dropright-circle:before { content: \"\\F362\"; }\r\n\r\n.ion-android-arrow-dropup:before { content: \"\\F365\"; }\r\n\r\n.ion-android-arrow-dropup-circle:before { content: \"\\F364\"; }\r\n\r\n.ion-android-arrow-forward:before { content: \"\\F30F\"; }\r\n\r\n.ion-android-arrow-up:before { content: \"\\F366\"; }\r\n\r\n.ion-android-attach:before { content: \"\\F367\"; }\r\n\r\n.ion-android-bar:before { content: \"\\F368\"; }\r\n\r\n.ion-android-bicycle:before { content: \"\\F369\"; }\r\n\r\n.ion-android-boat:before { content: \"\\F36A\"; }\r\n\r\n.ion-android-bookmark:before { content: \"\\F36B\"; }\r\n\r\n.ion-android-bulb:before { content: \"\\F36C\"; }\r\n\r\n.ion-android-bus:before { content: \"\\F36D\"; }\r\n\r\n.ion-android-calendar:before { content: \"\\F2D1\"; }\r\n\r\n.ion-android-call:before { content: \"\\F2D2\"; }\r\n\r\n.ion-android-camera:before { content: \"\\F2D3\"; }\r\n\r\n.ion-android-cancel:before { content: \"\\F36E\"; }\r\n\r\n.ion-android-car:before { content: \"\\F36F\"; }\r\n\r\n.ion-android-cart:before { content: \"\\F370\"; }\r\n\r\n.ion-android-chat:before { content: \"\\F2D4\"; }\r\n\r\n.ion-android-checkbox:before { content: \"\\F374\"; }\r\n\r\n.ion-android-checkbox-blank:before { content: \"\\F371\"; }\r\n\r\n.ion-android-checkbox-outline:before { content: \"\\F373\"; }\r\n\r\n.ion-android-checkbox-outline-blank:before { content: \"\\F372\"; }\r\n\r\n.ion-android-checkmark-circle:before { content: \"\\F375\"; }\r\n\r\n.ion-android-clipboard:before { content: \"\\F376\"; }\r\n\r\n.ion-android-close:before { content: \"\\F2D7\"; }\r\n\r\n.ion-android-cloud:before { content: \"\\F37A\"; }\r\n\r\n.ion-android-cloud-circle:before { content: \"\\F377\"; }\r\n\r\n.ion-android-cloud-done:before { content: \"\\F378\"; }\r\n\r\n.ion-android-cloud-outline:before { content: \"\\F379\"; }\r\n\r\n.ion-android-color-palette:before { content: \"\\F37B\"; }\r\n\r\n.ion-android-compass:before { content: \"\\F37C\"; }\r\n\r\n.ion-android-contact:before { content: \"\\F2D8\"; }\r\n\r\n.ion-android-contacts:before { content: \"\\F2D9\"; }\r\n\r\n.ion-android-contract:before { content: \"\\F37D\"; }\r\n\r\n.ion-android-create:before { content: \"\\F37E\"; }\r\n\r\n.ion-android-delete:before { content: \"\\F37F\"; }\r\n\r\n.ion-android-desktop:before { content: \"\\F380\"; }\r\n\r\n.ion-android-document:before { content: \"\\F381\"; }\r\n\r\n.ion-android-done:before { content: \"\\F383\"; }\r\n\r\n.ion-android-done-all:before { content: \"\\F382\"; }\r\n\r\n.ion-android-download:before { content: \"\\F2DD\"; }\r\n\r\n.ion-android-drafts:before { content: \"\\F384\"; }\r\n\r\n.ion-android-exit:before { content: \"\\F385\"; }\r\n\r\n.ion-android-expand:before { content: \"\\F386\"; }\r\n\r\n.ion-android-favorite:before { content: \"\\F388\"; }\r\n\r\n.ion-android-favorite-outline:before { content: \"\\F387\"; }\r\n\r\n.ion-android-film:before { content: \"\\F389\"; }\r\n\r\n.ion-android-folder:before { content: \"\\F2E0\"; }\r\n\r\n.ion-android-folder-open:before { content: \"\\F38A\"; }\r\n\r\n.ion-android-funnel:before { content: \"\\F38B\"; }\r\n\r\n.ion-android-globe:before { content: \"\\F38C\"; }\r\n\r\n.ion-android-hand:before { content: \"\\F2E3\"; }\r\n\r\n.ion-android-hangout:before { content: \"\\F38D\"; }\r\n\r\n.ion-android-happy:before { content: \"\\F38E\"; }\r\n\r\n.ion-android-home:before { content: \"\\F38F\"; }\r\n\r\n.ion-android-image:before { content: \"\\F2E4\"; }\r\n\r\n.ion-android-laptop:before { content: \"\\F390\"; }\r\n\r\n.ion-android-list:before { content: \"\\F391\"; }\r\n\r\n.ion-android-locate:before { content: \"\\F2E9\"; }\r\n\r\n.ion-android-lock:before { content: \"\\F392\"; }\r\n\r\n.ion-android-mail:before { content: \"\\F2EB\"; }\r\n\r\n.ion-android-map:before { content: \"\\F393\"; }\r\n\r\n.ion-android-menu:before { content: \"\\F394\"; }\r\n\r\n.ion-android-microphone:before { content: \"\\F2EC\"; }\r\n\r\n.ion-android-microphone-off:before { content: \"\\F395\"; }\r\n\r\n.ion-android-more-horizontal:before { content: \"\\F396\"; }\r\n\r\n.ion-android-more-vertical:before { content: \"\\F397\"; }\r\n\r\n.ion-android-navigate:before { content: \"\\F398\"; }\r\n\r\n.ion-android-notifications:before { content: \"\\F39B\"; }\r\n\r\n.ion-android-notifications-none:before { content: \"\\F399\"; }\r\n\r\n.ion-android-notifications-off:before { content: \"\\F39A\"; }\r\n\r\n.ion-android-open:before { content: \"\\F39C\"; }\r\n\r\n.ion-android-options:before { content: \"\\F39D\"; }\r\n\r\n.ion-android-people:before { content: \"\\F39E\"; }\r\n\r\n.ion-android-person:before { content: \"\\F3A0\"; }\r\n\r\n.ion-android-person-add:before { content: \"\\F39F\"; }\r\n\r\n.ion-android-phone-landscape:before { content: \"\\F3A1\"; }\r\n\r\n.ion-android-phone-portrait:before { content: \"\\F3A2\"; }\r\n\r\n.ion-android-pin:before { content: \"\\F3A3\"; }\r\n\r\n.ion-android-plane:before { content: \"\\F3A4\"; }\r\n\r\n.ion-android-playstore:before { content: \"\\F2F0\"; }\r\n\r\n.ion-android-print:before { content: \"\\F3A5\"; }\r\n\r\n.ion-android-radio-button-off:before { content: \"\\F3A6\"; }\r\n\r\n.ion-android-radio-button-on:before { content: \"\\F3A7\"; }\r\n\r\n.ion-android-refresh:before { content: \"\\F3A8\"; }\r\n\r\n.ion-android-remove:before { content: \"\\F2F4\"; }\r\n\r\n.ion-android-remove-circle:before { content: \"\\F3A9\"; }\r\n\r\n.ion-android-restaurant:before { content: \"\\F3AA\"; }\r\n\r\n.ion-android-sad:before { content: \"\\F3AB\"; }\r\n\r\n.ion-android-search:before { content: \"\\F2F5\"; }\r\n\r\n.ion-android-send:before { content: \"\\F2F6\"; }\r\n\r\n.ion-android-settings:before { content: \"\\F2F7\"; }\r\n\r\n.ion-android-share:before { content: \"\\F2F8\"; }\r\n\r\n.ion-android-share-alt:before { content: \"\\F3AC\"; }\r\n\r\n.ion-android-star:before { content: \"\\F2FC\"; }\r\n\r\n.ion-android-star-half:before { content: \"\\F3AD\"; }\r\n\r\n.ion-android-star-outline:before { content: \"\\F3AE\"; }\r\n\r\n.ion-android-stopwatch:before { content: \"\\F2FD\"; }\r\n\r\n.ion-android-subway:before { content: \"\\F3AF\"; }\r\n\r\n.ion-android-sunny:before { content: \"\\F3B0\"; }\r\n\r\n.ion-android-sync:before { content: \"\\F3B1\"; }\r\n\r\n.ion-android-textsms:before { content: \"\\F3B2\"; }\r\n\r\n.ion-android-time:before { content: \"\\F3B3\"; }\r\n\r\n.ion-android-train:before { content: \"\\F3B4\"; }\r\n\r\n.ion-android-unlock:before { content: \"\\F3B5\"; }\r\n\r\n.ion-android-upload:before { content: \"\\F3B6\"; }\r\n\r\n.ion-android-volume-down:before { content: \"\\F3B7\"; }\r\n\r\n.ion-android-volume-mute:before { content: \"\\F3B8\"; }\r\n\r\n.ion-android-volume-off:before { content: \"\\F3B9\"; }\r\n\r\n.ion-android-volume-up:before { content: \"\\F3BA\"; }\r\n\r\n.ion-android-walk:before { content: \"\\F3BB\"; }\r\n\r\n.ion-android-warning:before { content: \"\\F3BC\"; }\r\n\r\n.ion-android-watch:before { content: \"\\F3BD\"; }\r\n\r\n.ion-android-wifi:before { content: \"\\F305\"; }\r\n\r\n.ion-aperture:before { content: \"\\F313\"; }\r\n\r\n.ion-archive:before { content: \"\\F102\"; }\r\n\r\n.ion-arrow-down-a:before { content: \"\\F103\"; }\r\n\r\n.ion-arrow-down-b:before { content: \"\\F104\"; }\r\n\r\n.ion-arrow-down-c:before { content: \"\\F105\"; }\r\n\r\n.ion-arrow-expand:before { content: \"\\F25E\"; }\r\n\r\n.ion-arrow-graph-down-left:before { content: \"\\F25F\"; }\r\n\r\n.ion-arrow-graph-down-right:before { content: \"\\F260\"; }\r\n\r\n.ion-arrow-graph-up-left:before { content: \"\\F261\"; }\r\n\r\n.ion-arrow-graph-up-right:before { content: \"\\F262\"; }\r\n\r\n.ion-arrow-left-a:before { content: \"\\F106\"; }\r\n\r\n.ion-arrow-left-b:before { content: \"\\F107\"; }\r\n\r\n.ion-arrow-left-c:before { content: \"\\F108\"; }\r\n\r\n.ion-arrow-move:before { content: \"\\F263\"; }\r\n\r\n.ion-arrow-resize:before { content: \"\\F264\"; }\r\n\r\n.ion-arrow-return-left:before { content: \"\\F265\"; }\r\n\r\n.ion-arrow-return-right:before { content: \"\\F266\"; }\r\n\r\n.ion-arrow-right-a:before { content: \"\\F109\"; }\r\n\r\n.ion-arrow-right-b:before { content: \"\\F10A\"; }\r\n\r\n.ion-arrow-right-c:before { content: \"\\F10B\"; }\r\n\r\n.ion-arrow-shrink:before { content: \"\\F267\"; }\r\n\r\n.ion-arrow-swap:before { content: \"\\F268\"; }\r\n\r\n.ion-arrow-up-a:before { content: \"\\F10C\"; }\r\n\r\n.ion-arrow-up-b:before { content: \"\\F10D\"; }\r\n\r\n.ion-arrow-up-c:before { content: \"\\F10E\"; }\r\n\r\n.ion-asterisk:before { content: \"\\F314\"; }\r\n\r\n.ion-at:before { content: \"\\F10F\"; }\r\n\r\n.ion-backspace:before { content: \"\\F3BF\"; }\r\n\r\n.ion-backspace-outline:before { content: \"\\F3BE\"; }\r\n\r\n.ion-bag:before { content: \"\\F110\"; }\r\n\r\n.ion-battery-charging:before { content: \"\\F111\"; }\r\n\r\n.ion-battery-empty:before { content: \"\\F112\"; }\r\n\r\n.ion-battery-full:before { content: \"\\F113\"; }\r\n\r\n.ion-battery-half:before { content: \"\\F114\"; }\r\n\r\n.ion-battery-low:before { content: \"\\F115\"; }\r\n\r\n.ion-beaker:before { content: \"\\F269\"; }\r\n\r\n.ion-beer:before { content: \"\\F26A\"; }\r\n\r\n.ion-bluetooth:before { content: \"\\F116\"; }\r\n\r\n.ion-bonfire:before { content: \"\\F315\"; }\r\n\r\n.ion-bookmark:before { content: \"\\F26B\"; }\r\n\r\n.ion-bowtie:before { content: \"\\F3C0\"; }\r\n\r\n.ion-briefcase:before { content: \"\\F26C\"; }\r\n\r\n.ion-bug:before { content: \"\\F2BE\"; }\r\n\r\n.ion-calculator:before { content: \"\\F26D\"; }\r\n\r\n.ion-calendar:before { content: \"\\F117\"; }\r\n\r\n.ion-camera:before { content: \"\\F118\"; }\r\n\r\n.ion-card:before { content: \"\\F119\"; }\r\n\r\n.ion-cash:before { content: \"\\F316\"; }\r\n\r\n.ion-chatbox:before { content: \"\\F11B\"; }\r\n\r\n.ion-chatbox-working:before { content: \"\\F11A\"; }\r\n\r\n.ion-chatboxes:before { content: \"\\F11C\"; }\r\n\r\n.ion-chatbubble:before { content: \"\\F11E\"; }\r\n\r\n.ion-chatbubble-working:before { content: \"\\F11D\"; }\r\n\r\n.ion-chatbubbles:before { content: \"\\F11F\"; }\r\n\r\n.ion-checkmark:before { content: \"\\F122\"; }\r\n\r\n.ion-checkmark-circled:before { content: \"\\F120\"; }\r\n\r\n.ion-checkmark-round:before { content: \"\\F121\"; }\r\n\r\n.ion-chevron-down:before { content: \"\\F123\"; }\r\n\r\n.ion-chevron-left:before { content: \"\\F124\"; }\r\n\r\n.ion-chevron-right:before { content: \"\\F125\"; }\r\n\r\n.ion-chevron-up:before { content: \"\\F126\"; }\r\n\r\n.ion-clipboard:before { content: \"\\F127\"; }\r\n\r\n.ion-clock:before { content: \"\\F26E\"; }\r\n\r\n.ion-close:before { content: \"\\F12A\"; }\r\n\r\n.ion-close-circled:before { content: \"\\F128\"; }\r\n\r\n.ion-close-round:before { content: \"\\F129\"; }\r\n\r\n.ion-closed-captioning:before { content: \"\\F317\"; }\r\n\r\n.ion-cloud:before { content: \"\\F12B\"; }\r\n\r\n.ion-code:before { content: \"\\F271\"; }\r\n\r\n.ion-code-download:before { content: \"\\F26F\"; }\r\n\r\n.ion-code-working:before { content: \"\\F270\"; }\r\n\r\n.ion-coffee:before { content: \"\\F272\"; }\r\n\r\n.ion-compass:before { content: \"\\F273\"; }\r\n\r\n.ion-compose:before { content: \"\\F12C\"; }\r\n\r\n.ion-connection-bars:before { content: \"\\F274\"; }\r\n\r\n.ion-contrast:before { content: \"\\F275\"; }\r\n\r\n.ion-crop:before { content: \"\\F3C1\"; }\r\n\r\n.ion-cube:before { content: \"\\F318\"; }\r\n\r\n.ion-disc:before { content: \"\\F12D\"; }\r\n\r\n.ion-document:before { content: \"\\F12F\"; }\r\n\r\n.ion-document-text:before { content: \"\\F12E\"; }\r\n\r\n.ion-drag:before { content: \"\\F130\"; }\r\n\r\n.ion-earth:before { content: \"\\F276\"; }\r\n\r\n.ion-easel:before { content: \"\\F3C2\"; }\r\n\r\n.ion-edit:before { content: \"\\F2BF\"; }\r\n\r\n.ion-egg:before { content: \"\\F277\"; }\r\n\r\n.ion-eject:before { content: \"\\F131\"; }\r\n\r\n.ion-email:before { content: \"\\F132\"; }\r\n\r\n.ion-email-unread:before { content: \"\\F3C3\"; }\r\n\r\n.ion-erlenmeyer-flask:before { content: \"\\F3C5\"; }\r\n\r\n.ion-erlenmeyer-flask-bubbles:before { content: \"\\F3C4\"; }\r\n\r\n.ion-eye:before { content: \"\\F133\"; }\r\n\r\n.ion-eye-disabled:before { content: \"\\F306\"; }\r\n\r\n.ion-female:before { content: \"\\F278\"; }\r\n\r\n.ion-filing:before { content: \"\\F134\"; }\r\n\r\n.ion-film-marker:before { content: \"\\F135\"; }\r\n\r\n.ion-fireball:before { content: \"\\F319\"; }\r\n\r\n.ion-flag:before { content: \"\\F279\"; }\r\n\r\n.ion-flame:before { content: \"\\F31A\"; }\r\n\r\n.ion-flash:before { content: \"\\F137\"; }\r\n\r\n.ion-flash-off:before { content: \"\\F136\"; }\r\n\r\n.ion-folder:before { content: \"\\F139\"; }\r\n\r\n.ion-fork:before { content: \"\\F27A\"; }\r\n\r\n.ion-fork-repo:before { content: \"\\F2C0\"; }\r\n\r\n.ion-forward:before { content: \"\\F13A\"; }\r\n\r\n.ion-funnel:before { content: \"\\F31B\"; }\r\n\r\n.ion-gear-a:before { content: \"\\F13D\"; }\r\n\r\n.ion-gear-b:before { content: \"\\F13E\"; }\r\n\r\n.ion-grid:before { content: \"\\F13F\"; }\r\n\r\n.ion-hammer:before { content: \"\\F27B\"; }\r\n\r\n.ion-happy:before { content: \"\\F31C\"; }\r\n\r\n.ion-happy-outline:before { content: \"\\F3C6\"; }\r\n\r\n.ion-headphone:before { content: \"\\F140\"; }\r\n\r\n.ion-heart:before { content: \"\\F141\"; }\r\n\r\n.ion-heart-broken:before { content: \"\\F31D\"; }\r\n\r\n.ion-help:before { content: \"\\F143\"; }\r\n\r\n.ion-help-buoy:before { content: \"\\F27C\"; }\r\n\r\n.ion-help-circled:before { content: \"\\F142\"; }\r\n\r\n.ion-home:before { content: \"\\F144\"; }\r\n\r\n.ion-icecream:before { content: \"\\F27D\"; }\r\n\r\n.ion-image:before { content: \"\\F147\"; }\r\n\r\n.ion-images:before { content: \"\\F148\"; }\r\n\r\n.ion-information:before { content: \"\\F14A\"; }\r\n\r\n.ion-information-circled:before { content: \"\\F149\"; }\r\n\r\n.ion-ionic:before { content: \"\\F14B\"; }\r\n\r\n.ion-ios-alarm:before { content: \"\\F3C8\"; }\r\n\r\n.ion-ios-alarm-outline:before { content: \"\\F3C7\"; }\r\n\r\n.ion-ios-albums:before { content: \"\\F3CA\"; }\r\n\r\n.ion-ios-albums-outline:before { content: \"\\F3C9\"; }\r\n\r\n.ion-ios-americanfootball:before { content: \"\\F3CC\"; }\r\n\r\n.ion-ios-americanfootball-outline:before { content: \"\\F3CB\"; }\r\n\r\n.ion-ios-analytics:before { content: \"\\F3CE\"; }\r\n\r\n.ion-ios-analytics-outline:before { content: \"\\F3CD\"; }\r\n\r\n.ion-ios-arrow-back:before { content: \"\\F3CF\"; }\r\n\r\n.ion-ios-arrow-down:before { content: \"\\F3D0\"; }\r\n\r\n.ion-ios-arrow-forward:before { content: \"\\F3D1\"; }\r\n\r\n.ion-ios-arrow-left:before { content: \"\\F3D2\"; }\r\n\r\n.ion-ios-arrow-right:before { content: \"\\F3D3\"; }\r\n\r\n.ion-ios-arrow-thin-down:before { content: \"\\F3D4\"; }\r\n\r\n.ion-ios-arrow-thin-left:before { content: \"\\F3D5\"; }\r\n\r\n.ion-ios-arrow-thin-right:before { content: \"\\F3D6\"; }\r\n\r\n.ion-ios-arrow-thin-up:before { content: \"\\F3D7\"; }\r\n\r\n.ion-ios-arrow-up:before { content: \"\\F3D8\"; }\r\n\r\n.ion-ios-at:before { content: \"\\F3DA\"; }\r\n\r\n.ion-ios-at-outline:before { content: \"\\F3D9\"; }\r\n\r\n.ion-ios-barcode:before { content: \"\\F3DC\"; }\r\n\r\n.ion-ios-barcode-outline:before { content: \"\\F3DB\"; }\r\n\r\n.ion-ios-baseball:before { content: \"\\F3DE\"; }\r\n\r\n.ion-ios-baseball-outline:before { content: \"\\F3DD\"; }\r\n\r\n.ion-ios-basketball:before { content: \"\\F3E0\"; }\r\n\r\n.ion-ios-basketball-outline:before { content: \"\\F3DF\"; }\r\n\r\n.ion-ios-bell:before { content: \"\\F3E2\"; }\r\n\r\n.ion-ios-bell-outline:before { content: \"\\F3E1\"; }\r\n\r\n.ion-ios-body:before { content: \"\\F3E4\"; }\r\n\r\n.ion-ios-body-outline:before { content: \"\\F3E3\"; }\r\n\r\n.ion-ios-bolt:before { content: \"\\F3E6\"; }\r\n\r\n.ion-ios-bolt-outline:before { content: \"\\F3E5\"; }\r\n\r\n.ion-ios-book:before { content: \"\\F3E8\"; }\r\n\r\n.ion-ios-book-outline:before { content: \"\\F3E7\"; }\r\n\r\n.ion-ios-bookmarks:before { content: \"\\F3EA\"; }\r\n\r\n.ion-ios-bookmarks-outline:before { content: \"\\F3E9\"; }\r\n\r\n.ion-ios-box:before { content: \"\\F3EC\"; }\r\n\r\n.ion-ios-box-outline:before { content: \"\\F3EB\"; }\r\n\r\n.ion-ios-briefcase:before { content: \"\\F3EE\"; }\r\n\r\n.ion-ios-briefcase-outline:before { content: \"\\F3ED\"; }\r\n\r\n.ion-ios-browsers:before { content: \"\\F3F0\"; }\r\n\r\n.ion-ios-browsers-outline:before { content: \"\\F3EF\"; }\r\n\r\n.ion-ios-calculator:before { content: \"\\F3F2\"; }\r\n\r\n.ion-ios-calculator-outline:before { content: \"\\F3F1\"; }\r\n\r\n.ion-ios-calendar:before { content: \"\\F3F4\"; }\r\n\r\n.ion-ios-calendar-outline:before { content: \"\\F3F3\"; }\r\n\r\n.ion-ios-camera:before { content: \"\\F3F6\"; }\r\n\r\n.ion-ios-camera-outline:before { content: \"\\F3F5\"; }\r\n\r\n.ion-ios-cart:before { content: \"\\F3F8\"; }\r\n\r\n.ion-ios-cart-outline:before { content: \"\\F3F7\"; }\r\n\r\n.ion-ios-chatboxes:before { content: \"\\F3FA\"; }\r\n\r\n.ion-ios-chatboxes-outline:before { content: \"\\F3F9\"; }\r\n\r\n.ion-ios-chatbubble:before { content: \"\\F3FC\"; }\r\n\r\n.ion-ios-chatbubble-outline:before { content: \"\\F3FB\"; }\r\n\r\n.ion-ios-checkmark:before { content: \"\\F3FF\"; }\r\n\r\n.ion-ios-checkmark-empty:before { content: \"\\F3FD\"; }\r\n\r\n.ion-ios-checkmark-outline:before { content: \"\\F3FE\"; }\r\n\r\n.ion-ios-circle-filled:before { content: \"\\F400\"; }\r\n\r\n.ion-ios-circle-outline:before { content: \"\\F401\"; }\r\n\r\n.ion-ios-clock:before { content: \"\\F403\"; }\r\n\r\n.ion-ios-clock-outline:before { content: \"\\F402\"; }\r\n\r\n.ion-ios-close:before { content: \"\\F406\"; }\r\n\r\n.ion-ios-close-empty:before { content: \"\\F404\"; }\r\n\r\n.ion-ios-close-outline:before { content: \"\\F405\"; }\r\n\r\n.ion-ios-cloud:before { content: \"\\F40C\"; }\r\n\r\n.ion-ios-cloud-download:before { content: \"\\F408\"; }\r\n\r\n.ion-ios-cloud-download-outline:before { content: \"\\F407\"; }\r\n\r\n.ion-ios-cloud-outline:before { content: \"\\F409\"; }\r\n\r\n.ion-ios-cloud-upload:before { content: \"\\F40B\"; }\r\n\r\n.ion-ios-cloud-upload-outline:before { content: \"\\F40A\"; }\r\n\r\n.ion-ios-cloudy:before { content: \"\\F410\"; }\r\n\r\n.ion-ios-cloudy-night:before { content: \"\\F40E\"; }\r\n\r\n.ion-ios-cloudy-night-outline:before { content: \"\\F40D\"; }\r\n\r\n.ion-ios-cloudy-outline:before { content: \"\\F40F\"; }\r\n\r\n.ion-ios-cog:before { content: \"\\F412\"; }\r\n\r\n.ion-ios-cog-outline:before { content: \"\\F411\"; }\r\n\r\n.ion-ios-color-filter:before { content: \"\\F414\"; }\r\n\r\n.ion-ios-color-filter-outline:before { content: \"\\F413\"; }\r\n\r\n.ion-ios-color-wand:before { content: \"\\F416\"; }\r\n\r\n.ion-ios-color-wand-outline:before { content: \"\\F415\"; }\r\n\r\n.ion-ios-compose:before { content: \"\\F418\"; }\r\n\r\n.ion-ios-compose-outline:before { content: \"\\F417\"; }\r\n\r\n.ion-ios-contact:before { content: \"\\F41A\"; }\r\n\r\n.ion-ios-contact-outline:before { content: \"\\F419\"; }\r\n\r\n.ion-ios-copy:before { content: \"\\F41C\"; }\r\n\r\n.ion-ios-copy-outline:before { content: \"\\F41B\"; }\r\n\r\n.ion-ios-crop:before { content: \"\\F41E\"; }\r\n\r\n.ion-ios-crop-strong:before { content: \"\\F41D\"; }\r\n\r\n.ion-ios-download:before { content: \"\\F420\"; }\r\n\r\n.ion-ios-download-outline:before { content: \"\\F41F\"; }\r\n\r\n.ion-ios-drag:before { content: \"\\F421\"; }\r\n\r\n.ion-ios-email:before { content: \"\\F423\"; }\r\n\r\n.ion-ios-email-outline:before { content: \"\\F422\"; }\r\n\r\n.ion-ios-eye:before { content: \"\\F425\"; }\r\n\r\n.ion-ios-eye-outline:before { content: \"\\F424\"; }\r\n\r\n.ion-ios-fastforward:before { content: \"\\F427\"; }\r\n\r\n.ion-ios-fastforward-outline:before { content: \"\\F426\"; }\r\n\r\n.ion-ios-filing:before { content: \"\\F429\"; }\r\n\r\n.ion-ios-filing-outline:before { content: \"\\F428\"; }\r\n\r\n.ion-ios-film:before { content: \"\\F42B\"; }\r\n\r\n.ion-ios-film-outline:before { content: \"\\F42A\"; }\r\n\r\n.ion-ios-flag:before { content: \"\\F42D\"; }\r\n\r\n.ion-ios-flag-outline:before { content: \"\\F42C\"; }\r\n\r\n.ion-ios-flame:before { content: \"\\F42F\"; }\r\n\r\n.ion-ios-flame-outline:before { content: \"\\F42E\"; }\r\n\r\n.ion-ios-flask:before { content: \"\\F431\"; }\r\n\r\n.ion-ios-flask-outline:before { content: \"\\F430\"; }\r\n\r\n.ion-ios-flower:before { content: \"\\F433\"; }\r\n\r\n.ion-ios-flower-outline:before { content: \"\\F432\"; }\r\n\r\n.ion-ios-folder:before { content: \"\\F435\"; }\r\n\r\n.ion-ios-folder-outline:before { content: \"\\F434\"; }\r\n\r\n.ion-ios-football:before { content: \"\\F437\"; }\r\n\r\n.ion-ios-football-outline:before { content: \"\\F436\"; }\r\n\r\n.ion-ios-game-controller-a:before { content: \"\\F439\"; }\r\n\r\n.ion-ios-game-controller-a-outline:before { content: \"\\F438\"; }\r\n\r\n.ion-ios-game-controller-b:before { content: \"\\F43B\"; }\r\n\r\n.ion-ios-game-controller-b-outline:before { content: \"\\F43A\"; }\r\n\r\n.ion-ios-gear:before { content: \"\\F43D\"; }\r\n\r\n.ion-ios-gear-outline:before { content: \"\\F43C\"; }\r\n\r\n.ion-ios-glasses:before { content: \"\\F43F\"; }\r\n\r\n.ion-ios-glasses-outline:before { content: \"\\F43E\"; }\r\n\r\n.ion-ios-grid-view:before { content: \"\\F441\"; }\r\n\r\n.ion-ios-grid-view-outline:before { content: \"\\F440\"; }\r\n\r\n.ion-ios-heart:before { content: \"\\F443\"; }\r\n\r\n.ion-ios-heart-outline:before { content: \"\\F442\"; }\r\n\r\n.ion-ios-help:before { content: \"\\F446\"; }\r\n\r\n.ion-ios-help-empty:before { content: \"\\F444\"; }\r\n\r\n.ion-ios-help-outline:before { content: \"\\F445\"; }\r\n\r\n.ion-ios-home:before { content: \"\\F448\"; }\r\n\r\n.ion-ios-home-outline:before { content: \"\\F447\"; }\r\n\r\n.ion-ios-infinite:before { content: \"\\F44A\"; }\r\n\r\n.ion-ios-infinite-outline:before { content: \"\\F449\"; }\r\n\r\n.ion-ios-information:before { content: \"\\F44D\"; }\r\n\r\n.ion-ios-information-empty:before { content: \"\\F44B\"; }\r\n\r\n.ion-ios-information-outline:before { content: \"\\F44C\"; }\r\n\r\n.ion-ios-ionic-outline:before { content: \"\\F44E\"; }\r\n\r\n.ion-ios-keypad:before { content: \"\\F450\"; }\r\n\r\n.ion-ios-keypad-outline:before { content: \"\\F44F\"; }\r\n\r\n.ion-ios-lightbulb:before { content: \"\\F452\"; }\r\n\r\n.ion-ios-lightbulb-outline:before { content: \"\\F451\"; }\r\n\r\n.ion-ios-list:before { content: \"\\F454\"; }\r\n\r\n.ion-ios-list-outline:before { content: \"\\F453\"; }\r\n\r\n.ion-ios-location:before { content: \"\\F456\"; }\r\n\r\n.ion-ios-location-outline:before { content: \"\\F455\"; }\r\n\r\n.ion-ios-locked:before { content: \"\\F458\"; }\r\n\r\n.ion-ios-locked-outline:before { content: \"\\F457\"; }\r\n\r\n.ion-ios-loop:before { content: \"\\F45A\"; }\r\n\r\n.ion-ios-loop-strong:before { content: \"\\F459\"; }\r\n\r\n.ion-ios-medical:before { content: \"\\F45C\"; }\r\n\r\n.ion-ios-medical-outline:before { content: \"\\F45B\"; }\r\n\r\n.ion-ios-medkit:before { content: \"\\F45E\"; }\r\n\r\n.ion-ios-medkit-outline:before { content: \"\\F45D\"; }\r\n\r\n.ion-ios-mic:before { content: \"\\F461\"; }\r\n\r\n.ion-ios-mic-off:before { content: \"\\F45F\"; }\r\n\r\n.ion-ios-mic-outline:before { content: \"\\F460\"; }\r\n\r\n.ion-ios-minus:before { content: \"\\F464\"; }\r\n\r\n.ion-ios-minus-empty:before { content: \"\\F462\"; }\r\n\r\n.ion-ios-minus-outline:before { content: \"\\F463\"; }\r\n\r\n.ion-ios-monitor:before { content: \"\\F466\"; }\r\n\r\n.ion-ios-monitor-outline:before { content: \"\\F465\"; }\r\n\r\n.ion-ios-moon:before { content: \"\\F468\"; }\r\n\r\n.ion-ios-moon-outline:before { content: \"\\F467\"; }\r\n\r\n.ion-ios-more:before { content: \"\\F46A\"; }\r\n\r\n.ion-ios-more-outline:before { content: \"\\F469\"; }\r\n\r\n.ion-ios-musical-note:before { content: \"\\F46B\"; }\r\n\r\n.ion-ios-musical-notes:before { content: \"\\F46C\"; }\r\n\r\n.ion-ios-navigate:before { content: \"\\F46E\"; }\r\n\r\n.ion-ios-navigate-outline:before { content: \"\\F46D\"; }\r\n\r\n.ion-ios-nutrition:before { content: \"\\F470\"; }\r\n\r\n.ion-ios-nutrition-outline:before { content: \"\\F46F\"; }\r\n\r\n.ion-ios-paper:before { content: \"\\F472\"; }\r\n\r\n.ion-ios-paper-outline:before { content: \"\\F471\"; }\r\n\r\n.ion-ios-paperplane:before { content: \"\\F474\"; }\r\n\r\n.ion-ios-paperplane-outline:before { content: \"\\F473\"; }\r\n\r\n.ion-ios-partlysunny:before { content: \"\\F476\"; }\r\n\r\n.ion-ios-partlysunny-outline:before { content: \"\\F475\"; }\r\n\r\n.ion-ios-pause:before { content: \"\\F478\"; }\r\n\r\n.ion-ios-pause-outline:before { content: \"\\F477\"; }\r\n\r\n.ion-ios-paw:before { content: \"\\F47A\"; }\r\n\r\n.ion-ios-paw-outline:before { content: \"\\F479\"; }\r\n\r\n.ion-ios-people:before { content: \"\\F47C\"; }\r\n\r\n.ion-ios-people-outline:before { content: \"\\F47B\"; }\r\n\r\n.ion-ios-person:before { content: \"\\F47E\"; }\r\n\r\n.ion-ios-person-outline:before { content: \"\\F47D\"; }\r\n\r\n.ion-ios-personadd:before { content: \"\\F480\"; }\r\n\r\n.ion-ios-personadd-outline:before { content: \"\\F47F\"; }\r\n\r\n.ion-ios-photos:before { content: \"\\F482\"; }\r\n\r\n.ion-ios-photos-outline:before { content: \"\\F481\"; }\r\n\r\n.ion-ios-pie:before { content: \"\\F484\"; }\r\n\r\n.ion-ios-pie-outline:before { content: \"\\F483\"; }\r\n\r\n.ion-ios-pint:before { content: \"\\F486\"; }\r\n\r\n.ion-ios-pint-outline:before { content: \"\\F485\"; }\r\n\r\n.ion-ios-play:before { content: \"\\F488\"; }\r\n\r\n.ion-ios-play-outline:before { content: \"\\F487\"; }\r\n\r\n.ion-ios-plus:before { content: \"\\F48B\"; }\r\n\r\n.ion-ios-plus-empty:before { content: \"\\F489\"; }\r\n\r\n.ion-ios-plus-outline:before { content: \"\\F48A\"; }\r\n\r\n.ion-ios-pricetag:before { content: \"\\F48D\"; }\r\n\r\n.ion-ios-pricetag-outline:before { content: \"\\F48C\"; }\r\n\r\n.ion-ios-pricetags:before { content: \"\\F48F\"; }\r\n\r\n.ion-ios-pricetags-outline:before { content: \"\\F48E\"; }\r\n\r\n.ion-ios-printer:before { content: \"\\F491\"; }\r\n\r\n.ion-ios-printer-outline:before { content: \"\\F490\"; }\r\n\r\n.ion-ios-pulse:before { content: \"\\F493\"; }\r\n\r\n.ion-ios-pulse-strong:before { content: \"\\F492\"; }\r\n\r\n.ion-ios-rainy:before { content: \"\\F495\"; }\r\n\r\n.ion-ios-rainy-outline:before { content: \"\\F494\"; }\r\n\r\n.ion-ios-recording:before { content: \"\\F497\"; }\r\n\r\n.ion-ios-recording-outline:before { content: \"\\F496\"; }\r\n\r\n.ion-ios-redo:before { content: \"\\F499\"; }\r\n\r\n.ion-ios-redo-outline:before { content: \"\\F498\"; }\r\n\r\n.ion-ios-refresh:before { content: \"\\F49C\"; }\r\n\r\n.ion-ios-refresh-empty:before { content: \"\\F49A\"; }\r\n\r\n.ion-ios-refresh-outline:before { content: \"\\F49B\"; }\r\n\r\n.ion-ios-reload:before { content: \"\\F49D\"; }\r\n\r\n.ion-ios-reverse-camera:before { content: \"\\F49F\"; }\r\n\r\n.ion-ios-reverse-camera-outline:before { content: \"\\F49E\"; }\r\n\r\n.ion-ios-rewind:before { content: \"\\F4A1\"; }\r\n\r\n.ion-ios-rewind-outline:before { content: \"\\F4A0\"; }\r\n\r\n.ion-ios-rose:before { content: \"\\F4A3\"; }\r\n\r\n.ion-ios-rose-outline:before { content: \"\\F4A2\"; }\r\n\r\n.ion-ios-search:before { content: \"\\F4A5\"; }\r\n\r\n.ion-ios-search-strong:before { content: \"\\F4A4\"; }\r\n\r\n.ion-ios-settings:before { content: \"\\F4A7\"; }\r\n\r\n.ion-ios-settings-strong:before { content: \"\\F4A6\"; }\r\n\r\n.ion-ios-shuffle:before { content: \"\\F4A9\"; }\r\n\r\n.ion-ios-shuffle-strong:before { content: \"\\F4A8\"; }\r\n\r\n.ion-ios-skipbackward:before { content: \"\\F4AB\"; }\r\n\r\n.ion-ios-skipbackward-outline:before { content: \"\\F4AA\"; }\r\n\r\n.ion-ios-skipforward:before { content: \"\\F4AD\"; }\r\n\r\n.ion-ios-skipforward-outline:before { content: \"\\F4AC\"; }\r\n\r\n.ion-ios-snowy:before { content: \"\\F4AE\"; }\r\n\r\n.ion-ios-speedometer:before { content: \"\\F4B0\"; }\r\n\r\n.ion-ios-speedometer-outline:before { content: \"\\F4AF\"; }\r\n\r\n.ion-ios-star:before { content: \"\\F4B3\"; }\r\n\r\n.ion-ios-star-half:before { content: \"\\F4B1\"; }\r\n\r\n.ion-ios-star-outline:before { content: \"\\F4B2\"; }\r\n\r\n.ion-ios-stopwatch:before { content: \"\\F4B5\"; }\r\n\r\n.ion-ios-stopwatch-outline:before { content: \"\\F4B4\"; }\r\n\r\n.ion-ios-sunny:before { content: \"\\F4B7\"; }\r\n\r\n.ion-ios-sunny-outline:before { content: \"\\F4B6\"; }\r\n\r\n.ion-ios-telephone:before { content: \"\\F4B9\"; }\r\n\r\n.ion-ios-telephone-outline:before { content: \"\\F4B8\"; }\r\n\r\n.ion-ios-tennisball:before { content: \"\\F4BB\"; }\r\n\r\n.ion-ios-tennisball-outline:before { content: \"\\F4BA\"; }\r\n\r\n.ion-ios-thunderstorm:before { content: \"\\F4BD\"; }\r\n\r\n.ion-ios-thunderstorm-outline:before { content: \"\\F4BC\"; }\r\n\r\n.ion-ios-time:before { content: \"\\F4BF\"; }\r\n\r\n.ion-ios-time-outline:before { content: \"\\F4BE\"; }\r\n\r\n.ion-ios-timer:before { content: \"\\F4C1\"; }\r\n\r\n.ion-ios-timer-outline:before { content: \"\\F4C0\"; }\r\n\r\n.ion-ios-toggle:before { content: \"\\F4C3\"; }\r\n\r\n.ion-ios-toggle-outline:before { content: \"\\F4C2\"; }\r\n\r\n.ion-ios-trash:before { content: \"\\F4C5\"; }\r\n\r\n.ion-ios-trash-outline:before { content: \"\\F4C4\"; }\r\n\r\n.ion-ios-undo:before { content: \"\\F4C7\"; }\r\n\r\n.ion-ios-undo-outline:before { content: \"\\F4C6\"; }\r\n\r\n.ion-ios-unlocked:before { content: \"\\F4C9\"; }\r\n\r\n.ion-ios-unlocked-outline:before { content: \"\\F4C8\"; }\r\n\r\n.ion-ios-upload:before { content: \"\\F4CB\"; }\r\n\r\n.ion-ios-upload-outline:before { content: \"\\F4CA\"; }\r\n\r\n.ion-ios-videocam:before { content: \"\\F4CD\"; }\r\n\r\n.ion-ios-videocam-outline:before { content: \"\\F4CC\"; }\r\n\r\n.ion-ios-volume-high:before { content: \"\\F4CE\"; }\r\n\r\n.ion-ios-volume-low:before { content: \"\\F4CF\"; }\r\n\r\n.ion-ios-wineglass:before { content: \"\\F4D1\"; }\r\n\r\n.ion-ios-wineglass-outline:before { content: \"\\F4D0\"; }\r\n\r\n.ion-ios-world:before { content: \"\\F4D3\"; }\r\n\r\n.ion-ios-world-outline:before { content: \"\\F4D2\"; }\r\n\r\n.ion-ipad:before { content: \"\\F1F9\"; }\r\n\r\n.ion-iphone:before { content: \"\\F1FA\"; }\r\n\r\n.ion-ipod:before { content: \"\\F1FB\"; }\r\n\r\n.ion-jet:before { content: \"\\F295\"; }\r\n\r\n.ion-key:before { content: \"\\F296\"; }\r\n\r\n.ion-knife:before { content: \"\\F297\"; }\r\n\r\n.ion-laptop:before { content: \"\\F1FC\"; }\r\n\r\n.ion-leaf:before { content: \"\\F1FD\"; }\r\n\r\n.ion-levels:before { content: \"\\F298\"; }\r\n\r\n.ion-lightbulb:before { content: \"\\F299\"; }\r\n\r\n.ion-link:before { content: \"\\F1FE\"; }\r\n\r\n.ion-load-a:before { content: \"\\F29A\"; }\r\n\r\n.ion-load-b:before { content: \"\\F29B\"; }\r\n\r\n.ion-load-c:before { content: \"\\F29C\"; }\r\n\r\n.ion-load-d:before { content: \"\\F29D\"; }\r\n\r\n.ion-location:before { content: \"\\F1FF\"; }\r\n\r\n.ion-lock-combination:before { content: \"\\F4D4\"; }\r\n\r\n.ion-locked:before { content: \"\\F200\"; }\r\n\r\n.ion-log-in:before { content: \"\\F29E\"; }\r\n\r\n.ion-log-out:before { content: \"\\F29F\"; }\r\n\r\n.ion-loop:before { content: \"\\F201\"; }\r\n\r\n.ion-magnet:before { content: \"\\F2A0\"; }\r\n\r\n.ion-male:before { content: \"\\F2A1\"; }\r\n\r\n.ion-man:before { content: \"\\F202\"; }\r\n\r\n.ion-map:before { content: \"\\F203\"; }\r\n\r\n.ion-medkit:before { content: \"\\F2A2\"; }\r\n\r\n.ion-merge:before { content: \"\\F33F\"; }\r\n\r\n.ion-mic-a:before { content: \"\\F204\"; }\r\n\r\n.ion-mic-b:before { content: \"\\F205\"; }\r\n\r\n.ion-mic-c:before { content: \"\\F206\"; }\r\n\r\n.ion-minus:before { content: \"\\F209\"; }\r\n\r\n.ion-minus-circled:before { content: \"\\F207\"; }\r\n\r\n.ion-minus-round:before { content: \"\\F208\"; }\r\n\r\n.ion-model-s:before { content: \"\\F2C1\"; }\r\n\r\n.ion-monitor:before { content: \"\\F20A\"; }\r\n\r\n.ion-more:before { content: \"\\F20B\"; }\r\n\r\n.ion-mouse:before { content: \"\\F340\"; }\r\n\r\n.ion-music-note:before { content: \"\\F20C\"; }\r\n\r\n.ion-navicon:before { content: \"\\F20E\"; }\r\n\r\n.ion-navicon-round:before { content: \"\\F20D\"; }\r\n\r\n.ion-navigate:before { content: \"\\F2A3\"; }\r\n\r\n.ion-network:before { content: \"\\F341\"; }\r\n\r\n.ion-no-smoking:before { content: \"\\F2C2\"; }\r\n\r\n.ion-nuclear:before { content: \"\\F2A4\"; }\r\n\r\n.ion-outlet:before { content: \"\\F342\"; }\r\n\r\n.ion-paintbrush:before { content: \"\\F4D5\"; }\r\n\r\n.ion-paintbucket:before { content: \"\\F4D6\"; }\r\n\r\n.ion-paper-airplane:before { content: \"\\F2C3\"; }\r\n\r\n.ion-paperclip:before { content: \"\\F20F\"; }\r\n\r\n.ion-pause:before { content: \"\\F210\"; }\r\n\r\n.ion-person:before { content: \"\\F213\"; }\r\n\r\n.ion-person-add:before { content: \"\\F211\"; }\r\n\r\n.ion-person-stalker:before { content: \"\\F212\"; }\r\n\r\n.ion-pie-graph:before { content: \"\\F2A5\"; }\r\n\r\n.ion-pin:before { content: \"\\F2A6\"; }\r\n\r\n.ion-pinpoint:before { content: \"\\F2A7\"; }\r\n\r\n.ion-pizza:before { content: \"\\F2A8\"; }\r\n\r\n.ion-plane:before { content: \"\\F214\"; }\r\n\r\n.ion-planet:before { content: \"\\F343\"; }\r\n\r\n.ion-play:before { content: \"\\F215\"; }\r\n\r\n.ion-playstation:before { content: \"\\F30A\"; }\r\n\r\n.ion-plus:before { content: \"\\F218\"; }\r\n\r\n.ion-plus-circled:before { content: \"\\F216\"; }\r\n\r\n.ion-plus-round:before { content: \"\\F217\"; }\r\n\r\n.ion-podium:before { content: \"\\F344\"; }\r\n\r\n.ion-pound:before { content: \"\\F219\"; }\r\n\r\n.ion-power:before { content: \"\\F2A9\"; }\r\n\r\n.ion-pricetag:before { content: \"\\F2AA\"; }\r\n\r\n.ion-pricetags:before { content: \"\\F2AB\"; }\r\n\r\n.ion-printer:before { content: \"\\F21A\"; }\r\n\r\n.ion-pull-request:before { content: \"\\F345\"; }\r\n\r\n.ion-qr-scanner:before { content: \"\\F346\"; }\r\n\r\n.ion-quote:before { content: \"\\F347\"; }\r\n\r\n.ion-radio-waves:before { content: \"\\F2AC\"; }\r\n\r\n.ion-record:before { content: \"\\F21B\"; }\r\n\r\n.ion-refresh:before { content: \"\\F21C\"; }\r\n\r\n.ion-reply:before { content: \"\\F21E\"; }\r\n\r\n.ion-reply-all:before { content: \"\\F21D\"; }\r\n\r\n.ion-ribbon-a:before { content: \"\\F348\"; }\r\n\r\n.ion-ribbon-b:before { content: \"\\F349\"; }\r\n\r\n.ion-sad:before { content: \"\\F34A\"; }\r\n\r\n.ion-sad-outline:before { content: \"\\F4D7\"; }\r\n\r\n.ion-scissors:before { content: \"\\F34B\"; }\r\n\r\n.ion-search:before { content: \"\\F21F\"; }\r\n\r\n.ion-settings:before { content: \"\\F2AD\"; }\r\n\r\n.ion-share:before { content: \"\\F220\"; }\r\n\r\n.ion-shuffle:before { content: \"\\F221\"; }\r\n\r\n.ion-skip-backward:before { content: \"\\F222\"; }\r\n\r\n.ion-skip-forward:before { content: \"\\F223\"; }\r\n\r\n.ion-social-android:before { content: \"\\F225\"; }\r\n\r\n.ion-social-android-outline:before { content: \"\\F224\"; }\r\n\r\n.ion-social-angular:before { content: \"\\F4D9\"; }\r\n\r\n.ion-social-angular-outline:before { content: \"\\F4D8\"; }\r\n\r\n.ion-social-apple:before { content: \"\\F227\"; }\r\n\r\n.ion-social-apple-outline:before { content: \"\\F226\"; }\r\n\r\n.ion-social-bitcoin:before { content: \"\\F2AF\"; }\r\n\r\n.ion-social-bitcoin-outline:before { content: \"\\F2AE\"; }\r\n\r\n.ion-social-buffer:before { content: \"\\F229\"; }\r\n\r\n.ion-social-buffer-outline:before { content: \"\\F228\"; }\r\n\r\n.ion-social-chrome:before { content: \"\\F4DB\"; }\r\n\r\n.ion-social-chrome-outline:before { content: \"\\F4DA\"; }\r\n\r\n.ion-social-codepen:before { content: \"\\F4DD\"; }\r\n\r\n.ion-social-codepen-outline:before { content: \"\\F4DC\"; }\r\n\r\n.ion-social-css3:before { content: \"\\F4DF\"; }\r\n\r\n.ion-social-css3-outline:before { content: \"\\F4DE\"; }\r\n\r\n.ion-social-designernews:before { content: \"\\F22B\"; }\r\n\r\n.ion-social-designernews-outline:before { content: \"\\F22A\"; }\r\n\r\n.ion-social-dribbble:before { content: \"\\F22D\"; }\r\n\r\n.ion-social-dribbble-outline:before { content: \"\\F22C\"; }\r\n\r\n.ion-social-dropbox:before { content: \"\\F22F\"; }\r\n\r\n.ion-social-dropbox-outline:before { content: \"\\F22E\"; }\r\n\r\n.ion-social-euro:before { content: \"\\F4E1\"; }\r\n\r\n.ion-social-euro-outline:before { content: \"\\F4E0\"; }\r\n\r\n.ion-social-facebook:before { content: \"\\F231\"; }\r\n\r\n.ion-social-facebook-outline:before { content: \"\\F230\"; }\r\n\r\n.ion-social-foursquare:before { content: \"\\F34D\"; }\r\n\r\n.ion-social-foursquare-outline:before { content: \"\\F34C\"; }\r\n\r\n.ion-social-freebsd-devil:before { content: \"\\F2C4\"; }\r\n\r\n.ion-social-github:before { content: \"\\F233\"; }\r\n\r\n.ion-social-github-outline:before { content: \"\\F232\"; }\r\n\r\n.ion-social-google:before { content: \"\\F34F\"; }\r\n\r\n.ion-social-google-outline:before { content: \"\\F34E\"; }\r\n\r\n.ion-social-googleplus:before { content: \"\\F235\"; }\r\n\r\n.ion-social-googleplus-outline:before { content: \"\\F234\"; }\r\n\r\n.ion-social-hackernews:before { content: \"\\F237\"; }\r\n\r\n.ion-social-hackernews-outline:before { content: \"\\F236\"; }\r\n\r\n.ion-social-html5:before { content: \"\\F4E3\"; }\r\n\r\n.ion-social-html5-outline:before { content: \"\\F4E2\"; }\r\n\r\n.ion-social-instagram:before { content: \"\\F351\"; }\r\n\r\n.ion-social-instagram-outline:before { content: \"\\F350\"; }\r\n\r\n.ion-social-javascript:before { content: \"\\F4E5\"; }\r\n\r\n.ion-social-javascript-outline:before { content: \"\\F4E4\"; }\r\n\r\n.ion-social-linkedin:before { content: \"\\F239\"; }\r\n\r\n.ion-social-linkedin-outline:before { content: \"\\F238\"; }\r\n\r\n.ion-social-markdown:before { content: \"\\F4E6\"; }\r\n\r\n.ion-social-nodejs:before { content: \"\\F4E7\"; }\r\n\r\n.ion-social-octocat:before { content: \"\\F4E8\"; }\r\n\r\n.ion-social-pinterest:before { content: \"\\F2B1\"; }\r\n\r\n.ion-social-pinterest-outline:before { content: \"\\F2B0\"; }\r\n\r\n.ion-social-python:before { content: \"\\F4E9\"; }\r\n\r\n.ion-social-reddit:before { content: \"\\F23B\"; }\r\n\r\n.ion-social-reddit-outline:before { content: \"\\F23A\"; }\r\n\r\n.ion-social-rss:before { content: \"\\F23D\"; }\r\n\r\n.ion-social-rss-outline:before { content: \"\\F23C\"; }\r\n\r\n.ion-social-sass:before { content: \"\\F4EA\"; }\r\n\r\n.ion-social-skype:before { content: \"\\F23F\"; }\r\n\r\n.ion-social-skype-outline:before { content: \"\\F23E\"; }\r\n\r\n.ion-social-snapchat:before { content: \"\\F4EC\"; }\r\n\r\n.ion-social-snapchat-outline:before { content: \"\\F4EB\"; }\r\n\r\n.ion-social-tumblr:before { content: \"\\F241\"; }\r\n\r\n.ion-social-tumblr-outline:before { content: \"\\F240\"; }\r\n\r\n.ion-social-tux:before { content: \"\\F2C5\"; }\r\n\r\n.ion-social-twitch:before { content: \"\\F4EE\"; }\r\n\r\n.ion-social-twitch-outline:before { content: \"\\F4ED\"; }\r\n\r\n.ion-social-twitter:before { content: \"\\F243\"; }\r\n\r\n.ion-social-twitter-outline:before { content: \"\\F242\"; }\r\n\r\n.ion-social-usd:before { content: \"\\F353\"; }\r\n\r\n.ion-social-usd-outline:before { content: \"\\F352\"; }\r\n\r\n.ion-social-vimeo:before { content: \"\\F245\"; }\r\n\r\n.ion-social-vimeo-outline:before { content: \"\\F244\"; }\r\n\r\n.ion-social-whatsapp:before { content: \"\\F4F0\"; }\r\n\r\n.ion-social-whatsapp-outline:before { content: \"\\F4EF\"; }\r\n\r\n.ion-social-windows:before { content: \"\\F247\"; }\r\n\r\n.ion-social-windows-outline:before { content: \"\\F246\"; }\r\n\r\n.ion-social-wordpress:before { content: \"\\F249\"; }\r\n\r\n.ion-social-wordpress-outline:before { content: \"\\F248\"; }\r\n\r\n.ion-social-yahoo:before { content: \"\\F24B\"; }\r\n\r\n.ion-social-yahoo-outline:before { content: \"\\F24A\"; }\r\n\r\n.ion-social-yen:before { content: \"\\F4F2\"; }\r\n\r\n.ion-social-yen-outline:before { content: \"\\F4F1\"; }\r\n\r\n.ion-social-youtube:before { content: \"\\F24D\"; }\r\n\r\n.ion-social-youtube-outline:before { content: \"\\F24C\"; }\r\n\r\n.ion-soup-can:before { content: \"\\F4F4\"; }\r\n\r\n.ion-soup-can-outline:before { content: \"\\F4F3\"; }\r\n\r\n.ion-speakerphone:before { content: \"\\F2B2\"; }\r\n\r\n.ion-speedometer:before { content: \"\\F2B3\"; }\r\n\r\n.ion-spoon:before { content: \"\\F2B4\"; }\r\n\r\n.ion-star:before { content: \"\\F24E\"; }\r\n\r\n.ion-stats-bars:before { content: \"\\F2B5\"; }\r\n\r\n.ion-steam:before { content: \"\\F30B\"; }\r\n\r\n.ion-stop:before { content: \"\\F24F\"; }\r\n\r\n.ion-thermometer:before { content: \"\\F2B6\"; }\r\n\r\n.ion-thumbsdown:before { content: \"\\F250\"; }\r\n\r\n.ion-thumbsup:before { content: \"\\F251\"; }\r\n\r\n.ion-toggle:before { content: \"\\F355\"; }\r\n\r\n.ion-toggle-filled:before { content: \"\\F354\"; }\r\n\r\n.ion-transgender:before { content: \"\\F4F5\"; }\r\n\r\n.ion-trash-a:before { content: \"\\F252\"; }\r\n\r\n.ion-trash-b:before { content: \"\\F253\"; }\r\n\r\n.ion-trophy:before { content: \"\\F356\"; }\r\n\r\n.ion-tshirt:before { content: \"\\F4F7\"; }\r\n\r\n.ion-tshirt-outline:before { content: \"\\F4F6\"; }\r\n\r\n.ion-umbrella:before { content: \"\\F2B7\"; }\r\n\r\n.ion-university:before { content: \"\\F357\"; }\r\n\r\n.ion-unlocked:before { content: \"\\F254\"; }\r\n\r\n.ion-upload:before { content: \"\\F255\"; }\r\n\r\n.ion-usb:before { content: \"\\F2B8\"; }\r\n\r\n.ion-videocamera:before { content: \"\\F256\"; }\r\n\r\n.ion-volume-high:before { content: \"\\F257\"; }\r\n\r\n.ion-volume-low:before { content: \"\\F258\"; }\r\n\r\n.ion-volume-medium:before { content: \"\\F259\"; }\r\n\r\n.ion-volume-mute:before { content: \"\\F25A\"; }\r\n\r\n.ion-wand:before { content: \"\\F358\"; }\r\n\r\n.ion-waterdrop:before { content: \"\\F25B\"; }\r\n\r\n.ion-wifi:before { content: \"\\F25C\"; }\r\n\r\n.ion-wineglass:before { content: \"\\F2B9\"; }\r\n\r\n.ion-woman:before { content: \"\\F25D\"; }\r\n\r\n.ion-wrench:before { content: \"\\F2BA\"; }\r\n\r\n.ion-xbox:before { content: \"\\F30C\"; }\r\n", ""]);

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

        let applicationCheckPlatform = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("../node_modules/tns-core-modules/ui/frame/frame.js");
__webpack_require__("../node_modules/tns-core-modules/ui/frame/activity.js");
        }

        
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

module.exports = JSON.parse("{\"android\":{\"v8Flags\":\"--expose_gc\"},\"main\":\"main\",\"name\":\"acua\",\"version\":\"1.0.0\"}");

/***/ }),

/***/ "./services/AdoptionService.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var httpModule = __webpack_require__("../node_modules/tns-core-modules/http/http.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  getAnimals() {
    return httpModule.getJSON("https://acua-server.herokuapp.com/animals");
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
      url: 'http://localhost:3000',
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
      // url: `https://acua-server.herokuapp.com/tickets`,
      url: "http://[::1]:3000/tickets",
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      content: JSON.stringify(ticket)
    });
  },

  checkTicket(ticketId) {
    return httpModule.getJSON( // `https://acua-server.herokuapp.com/tickets/${ticketId}`
    "http://[::1]:3000/tickets/".concat(ticketId));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9hZG9wdGlvbi9BZG9wdGlvbkFuaW1hbERldGFpbHMudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL2Fkb3B0aW9uL0FuaW1hbENhcmQudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL2Fkb3B0aW9uL2NhdGVnb3J5LnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9idXR0b25zL0NhdGVnb3J5QnV0dG9uLnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9idXR0b25zL0ljb25CdXR0b24udnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL2xvY2F0aW9uL0FuaW1hbENlbnRlckRldGFpbHMudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL3N1Ymxpc3RzL0ZhcUluZm8udnVlIiwid2VicGFjazovLy92aWV3cy9BZG9wdGlvbi52dWUiLCJ3ZWJwYWNrOi8vL3ZpZXdzL0ZhcS52dWUiLCJ3ZWJwYWNrOi8vL3ZpZXdzL0hvbWUudnVlIiwid2VicGFjazovLy92aWV3cy9Mb2NhdGlvbi52dWUiLCJ3ZWJwYWNrOi8vL3ZpZXdzL1NlcnZpY2VSZXF1ZXN0LnZ1ZSIsIndlYnBhY2s6Ly8vdmlld3MvVGlja2V0LnZ1ZSIsIndlYnBhY2s6Ly8vdmlld3MvVGlja2V0Rm9ybS52dWUiLCJ3ZWJwYWNrOi8vL3ZpZXdzL1RpY2tldE9wdGlvbnMudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbG9jYXRpb24vQW5pbWFsQ2VudGVyRGV0YWlscy52dWU/YWQ0YyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N1Ymxpc3RzL0ZhcUluZm8udnVlPzQyNTMiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvRmFxLnZ1ZT9lMDg1Iiwid2VicGFjazovLy8uL3ZpZXdzL0hvbWUudnVlP2ZjYTciLCJ3ZWJwYWNrOi8vLy4vdmlld3MvTG9jYXRpb24udnVlP2U4YWIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hZG9wdGlvbi9BZG9wdGlvbkFuaW1hbERldGFpbHMudnVlPzg5YzUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hZG9wdGlvbi9BbmltYWxDYXJkLnZ1ZT81ZGU4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRvcHRpb24vY2F0ZWdvcnkudnVlPzMzODAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9idXR0b25zL0NhdGVnb3J5QnV0dG9uLnZ1ZT9hYTU0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9ucy9JY29uQnV0dG9uLnZ1ZT9lMDJkIiwid2VicGFjazovLy8uL3ZpZXdzL0Fkb3B0aW9uLnZ1ZT82ODExIiwid2VicGFjazovLy8uL3ZpZXdzL1NlcnZpY2VSZXF1ZXN0LnZ1ZT84Mzk0Iiwid2VicGFjazovLy8uL3ZpZXdzL1RpY2tldC52dWU/MWNiMSIsIndlYnBhY2s6Ly8vLi92aWV3cy9UaWNrZXRPcHRpb25zLnZ1ZT84MzAyIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRvcHRpb24vQWRvcHRpb25BbmltYWxEZXRhaWxzLnZ1ZT8xMzJmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRvcHRpb24vQW5pbWFsQ2FyZC52dWU/NjQ4OCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Fkb3B0aW9uL2NhdGVnb3J5LnZ1ZT9mNDRlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9ucy9DYXRlZ29yeUJ1dHRvbi52dWU/YjVhNCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbnMvSWNvbkJ1dHRvbi52dWU/NDYyNiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xvY2F0aW9uL0FuaW1hbENlbnRlckRldGFpbHMudnVlPzU3ZjAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zdWJsaXN0cy9GYXFJbmZvLnZ1ZT9lNTFjIiwid2VicGFjazovLy8uL3ZpZXdzL0Fkb3B0aW9uLnZ1ZT85YTFlIiwid2VicGFjazovLy8uL3ZpZXdzL0ZhcS52dWU/ZDA4NiIsIndlYnBhY2s6Ly8vLi92aWV3cy9Ib21lLnZ1ZT9lMWZiIiwid2VicGFjazovLy8uL3ZpZXdzL0xvY2F0aW9uLnZ1ZT8xZmFlIiwid2VicGFjazovLy8uL3ZpZXdzL1NlcnZpY2VSZXF1ZXN0LnZ1ZT9mYTNmIiwid2VicGFjazovLy8uL3ZpZXdzL1RpY2tldC52dWU/MTc2MCIsIndlYnBhY2s6Ly8vLi92aWV3cy9UaWNrZXRGb3JtLnZ1ZT9jYTk4Iiwid2VicGFjazovLy8uL3ZpZXdzL1RpY2tldE9wdGlvbnMudnVlPzk0NzQiLCJ3ZWJwYWNrOi8vLy4gc3luYyBub25yZWN1cnNpdmUgXlxcLlxcL2FwcFxcLihjc3N8c2Nzc3xsZXNzfHNhc3MpJCIsIndlYnBhY2s6Ly8vXFxiX1tcXHctXSpcXC4pc2NzcykkIiwid2VicGFjazovLy8uL0FuaW1hbENlbnRlci5zY3NzIiwid2VicGFjazovLy8uL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRvcHRpb24vQWRvcHRpb25BbmltYWxEZXRhaWxzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Fkb3B0aW9uL0Fkb3B0aW9uQW5pbWFsRGV0YWlscy52dWU/M2JkNCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Fkb3B0aW9uL0Fkb3B0aW9uQW5pbWFsRGV0YWlscy52dWU/ZTM4OCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Fkb3B0aW9uL0Fkb3B0aW9uQW5pbWFsRGV0YWlscy52dWU/N2U3YiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Fkb3B0aW9uL0FuaW1hbENhcmQudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRvcHRpb24vQW5pbWFsQ2FyZC52dWU/ZTAyOCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Fkb3B0aW9uL0FuaW1hbENhcmQudnVlPzgzYWMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hZG9wdGlvbi9BbmltYWxDYXJkLnZ1ZT9hMzc4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRvcHRpb24vY2F0ZWdvcnkudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRvcHRpb24vY2F0ZWdvcnkudnVlPzU5MzQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hZG9wdGlvbi9jYXRlZ29yeS52dWU/NjEwZiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Fkb3B0aW9uL2NhdGVnb3J5LnZ1ZT82N2VhIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9ucy9DYXRlZ29yeUJ1dHRvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9idXR0b25zL0NhdGVnb3J5QnV0dG9uLnZ1ZT9iMGE3Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9ucy9DYXRlZ29yeUJ1dHRvbi52dWU/Y2NlMyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbnMvQ2F0ZWdvcnlCdXR0b24udnVlPzk5YzIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9idXR0b25zL0ljb25CdXR0b24udnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9ucy9JY29uQnV0dG9uLnZ1ZT8wMzE0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9ucy9JY29uQnV0dG9uLnZ1ZT8zY2M2Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9ucy9JY29uQnV0dG9uLnZ1ZT8wYTVmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbG9jYXRpb24vQW5pbWFsQ2VudGVyRGV0YWlscy52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sb2NhdGlvbi9BbmltYWxDZW50ZXJEZXRhaWxzLnZ1ZT8zMWQxIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbG9jYXRpb24vQW5pbWFsQ2VudGVyRGV0YWlscy52dWU/ODg1NiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xvY2F0aW9uL0FuaW1hbENlbnRlckRldGFpbHMudnVlPzhmNTUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zdWJsaXN0cy9GYXFJbmZvLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N1Ymxpc3RzL0ZhcUluZm8udnVlPzIwNWYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zdWJsaXN0cy9GYXFJbmZvLnZ1ZT85MzMyIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3VibGlzdHMvRmFxSW5mby52dWU/YTJkYSIsIndlYnBhY2s6Ly8vLi9mb250cy9mb250LWF3ZXNvbWUuY3NzIiwid2VicGFjazovLy8uL2ZvbnRzL2lvbmljb25zLmNzcyIsIndlYnBhY2s6Ly8vLi9tYWluLmpzIiwid2VicGFjazovLy8uL21vZGVscy9BbmltYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL0ZhcS5qcyIsIndlYnBhY2s6Ly8vLi9tb2RlbHMvVGlja2V0LmpzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL0Fkb3B0aW9uU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9GYWtlRmFxU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9GYWtlVGlja2V0U2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9GYXFTZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL1RpY2tldFNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvQWRvcHRpb24udnVlIiwid2VicGFjazovLy8uL3ZpZXdzL0Fkb3B0aW9uLnZ1ZT8zZjdkIiwid2VicGFjazovLy8uL3ZpZXdzL0Fkb3B0aW9uLnZ1ZT8yYWRmIiwid2VicGFjazovLy8uL3ZpZXdzL0Fkb3B0aW9uLnZ1ZT9jNTNlIiwid2VicGFjazovLy8uL3ZpZXdzL0ZhcS52dWUiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvRmFxLnZ1ZT8wZGMwIiwid2VicGFjazovLy8uL3ZpZXdzL0ZhcS52dWU/MGM1OCIsIndlYnBhY2s6Ly8vLi92aWV3cy9GYXEudnVlPzJiNGMiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvSG9tZS52dWUiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvSG9tZS52dWU/ODg1NiIsIndlYnBhY2s6Ly8vLi92aWV3cy9Ib21lLnZ1ZT9hMGZmIiwid2VicGFjazovLy8uL3ZpZXdzL0hvbWUudnVlPzhlY2QiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvTG9jYXRpb24udnVlIiwid2VicGFjazovLy8uL3ZpZXdzL0xvY2F0aW9uLnZ1ZT9lMDAwIiwid2VicGFjazovLy8uL3ZpZXdzL0xvY2F0aW9uLnZ1ZT9kNmUxIiwid2VicGFjazovLy8uL3ZpZXdzL0xvY2F0aW9uLnZ1ZT8yNGM4Iiwid2VicGFjazovLy8uL3ZpZXdzL1NlcnZpY2VSZXF1ZXN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi92aWV3cy9TZXJ2aWNlUmVxdWVzdC52dWU/ZDJiZSIsIndlYnBhY2s6Ly8vLi92aWV3cy9TZXJ2aWNlUmVxdWVzdC52dWU/ZWVmNCIsIndlYnBhY2s6Ly8vLi92aWV3cy9TZXJ2aWNlUmVxdWVzdC52dWU/ZWE3NiIsIndlYnBhY2s6Ly8vLi92aWV3cy9UaWNrZXQudnVlIiwid2VicGFjazovLy8uL3ZpZXdzL1RpY2tldC52dWU/ZTgwNyIsIndlYnBhY2s6Ly8vLi92aWV3cy9UaWNrZXQudnVlPzI3YjUiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvVGlja2V0LnZ1ZT80ODRjIiwid2VicGFjazovLy8uL3ZpZXdzL1RpY2tldEZvcm0udnVlIiwid2VicGFjazovLy8uL3ZpZXdzL1RpY2tldEZvcm0udnVlPzBiZjUiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvVGlja2V0Rm9ybS52dWU/MTQ1MyIsIndlYnBhY2s6Ly8vLi92aWV3cy9UaWNrZXRPcHRpb25zLnZ1ZSIsIndlYnBhY2s6Ly8vLi92aWV3cy9UaWNrZXRPcHRpb25zLnZ1ZT83MzE5Iiwid2VicGFjazovLy8uL3ZpZXdzL1RpY2tldE9wdGlvbnMudnVlP2Q3YTIiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvVGlja2V0T3B0aW9ucy52dWU/MzkxZiJdLCJuYW1lcyI6WyJzdG9yZSIsIkhvbWUiLCJWdWVEZXZ0b29scyIsIlJhZExpc3RWaWV3IiwiVnVlIiwidXNlIiwiVE5TRm9udEljb24iLCJsb2FkQ3NzIiwiVE5TX0VOViIsImNvbmZpZyIsInNpbGVudCIsInJlbmRlciIsImgiLCIkc3RhcnQiLCJjb25zdHJ1Y3RvciIsInF1ZXN0aW9uIiwiaWQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJhbnN3ZXIiLCJjb3VudCIsImxvY2F0aW9uIiwic2V0TG9jYXRpb24iLCJxckNvZGUiLCJzZXRUaWNrZXRJbmZvIiwicGhvbmUiLCJuYW1lIiwicXVlcnkiLCJ0aW1lSW4iLCJEYXRlIiwiaHR0cE1vZHVsZSIsInJlcXVpcmUiLCJnZXRBbmltYWxzIiwiZ2V0SlNPTiIsImdldEZhcXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJmYXFzIiwiYWRkRmFxIiwiZW50cnkiLCJhZGRUaWNrZXQiLCJmYXEiLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwiaGVhZGVycyIsImNvbnRlbnQiLCJKU09OIiwic3RyaW5naWZ5IiwidGlja2V0IiwiY2hlY2tUaWNrZXQiLCJ0aWNrZXRJZCIsIlZ1ZXgiLCJTdG9yZSIsInN0YXRlIiwiYW5pbWFscyIsInRpY2tldHMiLCJ1c2VyQW5pbWFsIiwiQW5pbWFsIiwidXNlckZhcSIsInVzZXJUaWNrZXQiLCJUaWNrZXQiLCJhcHByb3ZlZFRpY2tldCIsInVuZGVmaW5lZCIsIm11dGF0aW9ucyIsInN0b3JlQW5pbWFsIiwiYW5pbWFsIiwiQUREX0FOSU1BTCIsInB1c2giLCJzdG9yZUZhcSIsInNldFRpY2tldExvY2F0aW9uIiwidXNlcklucHV0Iiwic3RvcmVUaWNrZXQiLCJTRVRfVElDS0VUIiwiQUREX1RJQ0tFVCIsIlNFVF9GQVFTIiwiQUREX0ZBUSIsImFjdGlvbnMiLCJjb21taXQiLCJUaWNrZXRTZXJ2aWNlIiwidGhlbiIsInJlcyIsInRvSlNPTiIsImxvYWRGYXFzIiwiRmFxU2VydmljZSIsImdldHRlcnMiLCJnZXRTZWFyY2hSZXN1bHRzIiwic2VhcmNoIiwid29yZHMiLCJzcGxpdCIsImZpbHRlciIsInNvbWUiLCJ3b3JkIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUlBO0FBQ0EsaUJBREE7QUFFQSxnQkFGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBYUE7O0FBZkEsR0FIQTs7QUFvQkE7QUFDQSxtQkFDQTtBQUNBO0FBREEsS0FEQSxFQUlBO0FBQ0E7QUFEQSxLQUpBLEVBT0E7QUFDQTtBQURBLEtBUEEsRUFVQTtBQUNBO0FBREEsS0FWQSxFQURBLENBZUE7QUFDQTtBQUNBLEdBckNBOztBQXNDQSxjQXRDQTs7QUF1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUpBOztBQUtBO0FBQ0E7QUFDQTtBQUNBLGNBQ0EsT0FEQSxDQUNBO0FBQ0E7QUFDQSxnQkFEQTtBQUVBO0FBRkEsU0FEQTtBQUtBLG9CQUxBO0FBTUE7QUFOQSxPQURBLEVBU0EsSUFUQSxDQVNBO0FBQ0E7QUFDQTtBQUNBLGtCQURBO0FBRUEsa0JBRkE7QUFHQTtBQUhBO0FBREE7QUFPQSxPQWpCQSxFQWtCQSxJQWxCQSxDQWtCQTtBQUNBO0FBQ0E7QUFDQSxnQkFEQTtBQUVBLGdCQUZBO0FBR0E7QUFIQTtBQURBO0FBT0EsT0ExQkEsRUEyQkEsSUEzQkEsQ0EyQkEsY0EzQkE7QUE0QkEsS0FwQ0E7O0FBcUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBekNBLEdBdkNBOztBQWtGQTtBQUNBO0FBQ0Esa0JBREE7QUFFQTtBQUZBO0FBSUE7O0FBdkZBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQywyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBLG9DQUFvQztBQUNwQywyQkFBMkI7QUFDM0I7QUFDQTtBQUNBLG9DQUFvQztBQUNwQywyQkFBMkI7QUFDM0I7QUFDQTtBQUNBLG9DQUFvQztBQUNwQywyQkFBMkI7QUFDM0I7QUFDQTtBQUNBLG9DQUFvQztBQUNwQywyQkFBMkI7QUFDM0I7QUFDQTtBQUNBLG9DQUFvQztBQUNwQywyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBLG9DQUFvQztBQUNwQywyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcGJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssc0JB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QVkscUJBQXFCLEVBQUUsWUFBWSxtQkFBbUIsRUFBRSxZQUFZLG9CQUFvQixtQkFBbUIsRUFBRSxZQUFZLGtCQUFrQixxQkFBcUIsRUFBRSxVQUFVLGNBQWMsRUFBRSxZQUFZLGtCQUFrQixFQUFFLFlBQVksb0JBQW9CLEVBQUUsWUFBWSxxQkFBcUIsRUFBRSxZQUFZLG1CQUFtQixFQUFFLFlBQVksb0JBQW9CLG1CQUFtQixFQUFFLFlBQVksa0JBQWtCLHFCQUFxQixFQUFFLFVBQVUsY0FBYyxFQUFFLFlBQVksa0JBQWtCLEVBQUUsWUFBWSxvQkFBb0IsRUFBRSxZQUFZLHFCQUFxQixFQUFFLFlBQVksbUJBQW1CLEVBQUUsWUFBWSxvQkFBb0IsbUJBQW1CLEVBQUUsWUFBWSxrQkFBa0IscUJBQXFCLEVBQUUsVUFBVSxjQUFjLEVBQUUsWUFBWSxrQkFBa0IsRUFBRSxZQUFZLG9CQUFvQixFQUFFLFlBQVkscUJBQXFCLEVBQUUsWUFBWSxtQkFBbUIsRUFBRSxZQUFZLG9CQUFvQixtQkFBbUIsRUFBRSxZQUFZLGtCQUFrQixxQkFBcUIsRUFBRSxXQUFXLGVBQWUsRUFBRSxhQUFhLG1CQUFtQixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEscUJBQXFCLG9CQUFvQixFQUFFLGFBQWEsbUJBQW1CLHNCQUFzQixFQUFFLFdBQVcsZUFBZSxFQUFFLGFBQWEsbUJBQW1CLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxxQkFBcUIsb0JBQW9CLEVBQUUsYUFBYSxtQkFBbUIsc0JBQXNCLEVBQUUsV0FBVyxlQUFlLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHFCQUFxQixvQkFBb0IsRUFBRSxhQUFhLG1CQUFtQixzQkFBc0IsRUFBRSxXQUFXLGVBQWUsRUFBRSxhQUFhLG1CQUFtQixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEscUJBQXFCLG9CQUFvQixFQUFFLGFBQWEsbUJBQW1CLHNCQUFzQixFQUFFLFdBQVcsZUFBZSxFQUFFLGFBQWEsbUJBQW1CLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxxQkFBcUIsb0JBQW9CLEVBQUUsYUFBYSxtQkFBbUIsc0JBQXNCLEVBQUUsV0FBVyxlQUFlLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHFCQUFxQixvQkFBb0IsRUFBRSxhQUFhLG1CQUFtQixzQkFBc0IsRUFBRSxXQUFXLGVBQWUsRUFBRSxhQUFhLG1CQUFtQixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEscUJBQXFCLG9CQUFvQixFQUFFLGFBQWEsbUJBQW1CLHNCQUFzQixFQUFFLFdBQVcsZUFBZSxFQUFFLGFBQWEsbUJBQW1CLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxxQkFBcUIsb0JBQW9CLEVBQUUsYUFBYSxtQkFBbUIsc0JBQXNCLEVBQUUsV0FBVyxlQUFlLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHFCQUFxQixvQkFBb0IsRUFBRSxhQUFhLG1CQUFtQixzQkFBc0IsRUFBRSxVQUFVLGVBQWUsRUFBRSxZQUFZLG1CQUFtQixFQUFFLFlBQVkscUJBQXFCLEVBQUUsWUFBWSxzQkFBc0IsRUFBRSxZQUFZLG9CQUFvQixFQUFFLFlBQVkscUJBQXFCLG9CQUFvQixFQUFFLFlBQVksbUJBQW1CLHNCQUFzQixFQUFFLFVBQVUsZUFBZSxFQUFFLFlBQVksbUJBQW1CLEVBQUUsWUFBWSxxQkFBcUIsRUFBRSxZQUFZLHNCQUFzQixFQUFFLFlBQVksb0JBQW9CLEVBQUUsWUFBWSxxQkFBcUIsb0JBQW9CLEVBQUUsWUFBWSxtQkFBbUIsc0JBQXNCLEVBQUUsVUFBVSxlQUFlLEVBQUUsWUFBWSxtQkFBbUIsRUFBRSxZQUFZLHFCQUFxQixFQUFFLFlBQVksc0JBQXNCLEVBQUUsWUFBWSxvQkFBb0IsRUFBRSxZQUFZLHFCQUFxQixvQkFBb0IsRUFBRSxZQUFZLG1CQUFtQixzQkFBc0IsRUFBRSxVQUFVLGVBQWUsRUFBRSxZQUFZLG1CQUFtQixFQUFFLFlBQVkscUJBQXFCLEVBQUUsWUFBWSxzQkFBc0IsRUFBRSxZQUFZLG9CQUFvQixFQUFFLFlBQVkscUJBQXFCLG9CQUFvQixFQUFFLFlBQVksbUJBQW1CLHNCQUFzQixFQUFFLFVBQVUsZUFBZSxFQUFFLFlBQVksbUJBQW1CLEVBQUUsWUFBWSxxQkFBcUIsRUFBRSxZQUFZLHNCQUFzQixFQUFFLFlBQVksb0JBQW9CLEVBQUUsWUFBWSxxQkFBcUIsb0JBQW9CLEVBQUUsWUFBWSxtQkFBbUIsc0JBQXNCLEVBQUUsV0FBVyxnQkFBZ0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSx1QkFBdUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLHFCQUFxQixFQUFFLGFBQWEsb0JBQW9CLHVCQUF1QixFQUFFLFdBQVcsZ0JBQWdCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsdUJBQXVCLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixxQkFBcUIsRUFBRSxhQUFhLG9CQUFvQix1QkFBdUIsRUFBRSxXQUFXLGdCQUFnQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLHVCQUF1QixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IscUJBQXFCLEVBQUUsYUFBYSxvQkFBb0IsdUJBQXVC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QUE7QUFBd0c7QUFDdkM7QUFDTDtBQUNxQzs7O0FBR2pHO0FBQzBGO0FBQzFGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLG1GQUFNO0FBQ1IsRUFBRSxvR0FBTTtBQUNSLEVBQUUsNkdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLElBQVU7QUFDZCxZQUFZLG1CQUFPLENBQUMsa0RBQWlJO0FBQ3JKLGNBQWMsbUJBQU8sQ0FBQyxnREFBSztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0JBQXNCLHNFQUFnRSxFQUFFO0FBQUE7QUFDeEY7QUFDQSxnQkFBZ0Isb0dBQU07QUFDdEIseUJBQXlCLDZHQUFlO0FBQ3hDLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ2UsZ0Y7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBNkssQ0FBZ0IsaVBBQUcsRUFBQyxDOzs7Ozs7OztBQ0FqTTtBQUFBO0FBQUE7QUFBQTtBQUE4WSxDQUFnQiw2YkFBRyxFQUFDLEM7Ozs7Ozs7O0FDQWxhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8UGFnZSBhY3Rpb25CYXJIaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJhbmltLXBhZ2VcIlxyXG4gICAgICAgIGJhY2tncm91bmRTcGFuVW5kZXJTdGF0dXNCYXI9XCJ0cnVlXCI+XHJcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwibWFpblwiIHZlcnRpY2FsQWxpZ25tZW50PVwidG9wXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPCEtLSBBbmltYWwgQ292ZXIgaW1hZ2UgLS0+XHJcbiAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNsYXNzPVwiYW5pbS1jb3ZlclwiIHJvd3M9XCJhdXRvXCIgY29sdW1ucz1cIipcIj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSByb3c9XCIwXCIgY29sPVwiMFwiIG1hcmdpblRvcD1cIi00MFwiIGhlaWdodD1cIjE4MFwiIHN0cmV0Y2g9XCJhc3BlY3RGaWxsXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNhcmQtaW1nXCIgOnNyYz1cIml0ZW0uY292ZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjBcIiBjb2w9XCIwXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJ0b3BcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ9XCJsZWZ0XCIgQHRhcD1cImNsb3NlXCIgOnRleHQ9XCInZmEtYXJyb3ctbGVmdCcgfCBmb250aWNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmYSBjbG9zZVwiIGZvbnRTaXplPVwiMjRcIiAvPlxyXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPCEtLSBBbmltYWwgZ2FsbGVyeSBpbWFnZXMgLS0+XHJcbiAgICAgICAgICAgIDxTY3JvbGxWaWV3IGNsYXNzPVwiYW5pbS1pbWFnZXNcIiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIj5cclxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiBjbGFzcz1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IHYtYmluZDprZXk9XCJpbWFnZVwiIHYtZm9yPVwiaW1hZ2UgaW4gaXRlbS5pbWFnZXNcIiByb3dzPVwiYXV0b1wiIGNvbHVtbnM9XCIqXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzcz1cImNhcmQtaW1nLXRodW1iXCIgcm93PVwiMFwiIGNvbD1cIjBcIiA6c3JjPVwiaW1hZ2Uuc3JjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmV0Y2g9XCJhc3BlY3RGaXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cclxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgIDwvU2Nyb2xsVmlldz5cclxuXHJcbiAgICAgICAgICAgIDwhLS0gQW5pbWFsIGRldGFpbHMgLS0+XHJcbiAgICAgICAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XCJhdXRvLGF1dG8sYXV0byxhdXRvXCIgY29sdW1ucz1cImF1dG9cIiBjbGFzcz1cImNvbnRlbnRcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjbGFzcz1cImFuaW0taXRlbUluZm9cIiBtYXJnaW5Ub3A9XCIxNVwiIHJvdz1cIjFcIlxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiIGNvbHVtbnM9XCJhdXRvLCpcIiByb3dzPVwiYXV0byxhdXRvLGF1dG8sYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJnZW5kZXJJY29uIHwgZm9udGljb25cIiByb3c9XCIwXCIgY29sPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd1NwYW49XCIyXCIgOmJhY2tncm91bmRDb2xvcj1cIml0ZW0uY2F0ZWdvcnlUYWdcIiBjbGFzcz1cImZhIGNhdGVnb3J5LWljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIwXCIgY29sPVwiMVwiIGNsYXNzPVwiaXRlbS1uYW1lXCIgdGV4dHdyYXA9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ9XCJib3R0b21cIiBob3Jpem9udGFsQWxpZ25tZW50PVwibGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDp0ZXh0PVwiaXRlbS5uYW1lXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjFcIiBjb2w9XCIxXCIgY2xhc3M9XCJpdGVtLWNhdGVnb3J5XCIgdGV4dHdyYXA9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ9XCJ0b3BcIiBob3Jpem9udGFsQWxpZ25tZW50PVwibGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDp0ZXh0PVwiaXRlbS5jYXRlZ29yeVwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG5cclxuICAgICAgICAgICAgICA8IS0tIHNvY2lhbCBiYXIgLS0+XHJcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJsaW5lIGFuaW0tbGlrZXNcIiByb3c9XCIyXCIgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A9XCIxMFwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY2xhc3M9XCJhbmltLWxpa2VzXCIgbWFyZ2luVG9wPVwiNVwiIHdpZHRoPVwiMTAwJVwiIHJvdz1cIjNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9XCIqLGF1dG8sYXV0b1wiIHJvd3M9XCJhdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sPVwiMFwiIHJvd3M9XCJhdXRvXCIgY29sdW1ucz1cImF1dG8sYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVwiMFwiIHJvdz1cIjBcIiByZWY9XCJpbmZvXCIgY2xhc3M9XCJsaWtlLWljb24gZmFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOnRleHQ9XCInZmEtaW5mby1jaXJjbGUnIHwgZm9udGljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVwiMVwiIHJvdz1cIjBcIiBjbGFzcz1cImxheW91dFwiIDp0ZXh0PVwiaXRlbS5icmVlZF9ncm91cCArICcgLSAnICsgaXRlbS5wcmltYXJ5X2JyZWVkXCI+PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbD1cIjFcIiByb3dzPVwiYXV0b1wiIGNvbHVtbnM9XCJhdXRvLGF1dG9cIiBAdGFwPVwidG9nZ2xlSGVhcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodD1cIjE1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XCIwXCIgcm93PVwiMFwiIHJlZj1cImZhdm9yaXRlXCIgY2xhc3M9XCJsaWtlLWljb24gIGZhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIltpdGVtLmlzRmF2b3JpdGUgPyAnaGVhcnQtYWN0aXZlJyA6ICdkZWZhdWx0J11cIiA6dGV4dD1cIml0ZW0uaXNGYXZvcml0ZSA/ICdmYS1oZWFydCc6J2ZhLWhlYXJ0LW8nIHwgZm9udGljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVwiMVwiIHJvdz1cIjBcIiBjbGFzcz1cImxheW91dFwiIHRleHQ9XCJGYXZvcml0ZVwiPjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY29sPVwiMlwiIG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcmVmPVwiXCIgY2xhc3M9XCJsaWtlLWljb24gbGF5b3V0IGZhXCIgOnRleHQ9XCInZmEtc2hhcmUtc3F1YXJlLW8nIHwgZm9udGljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJsYXlvdXRcIiB0ZXh0PVwiU2hhcmVcIj48L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cclxuXHJcblxyXG4gICAgICAgICAgICA8IS0tIEFuaW1hbCBEZXNjcmlwdGlvbiBMYWJlbCAody8gaWNvbikgLS0+XHJcbiAgICAgICAgICAgIDxTdGFja0xheW91dCB3aWR0aD1cIjEwMCVcIiBjbGFzcz1cImxpbmVCcmVhayBhbmltLWxpa2VzXCIgLz5cclxuXHJcbiAgICAgICAgICAgIDxHcmlkbGF5b3V0IHJvd3M9XCJhdXRvLCpcIiBjbGFzcz1cImNvbnRlbnQgYW5pbS1jb250ZW50XCIgbWFyZ2luVG9wPVwiMTVcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCByb3c9XCIwXCIgcm93cz1cImF1dG9cIiBtYXJnaW5Cb3R0b209XCI1XCIgY29sdW1ucz1cImF1dG8sIGF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVwiMFwiIDp0ZXh0PVwiJ2ZhLXRhZ3MnIHwgZm9udGljb25cIiBjbGFzcz1cImZhIGRlc2NyaXB0aW9uLWljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcD1cInRydWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XCIxXCIgY2xhc3M9XCJkZXNjcmlwdGlvbi10ZXh0XCIgdGV4dD1cIkRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA9XCJ0cnVlXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPCEtLSBBbmltYWwgRGVzY3JpcHRpb24gLS0+XHJcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVwiMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTY3JvbGxWaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCByb3dzPVwiKiwgKiwgKiwgKiwgKiwgKiwgKiwgKlwiIGNvbHVtbnM9XCJhdXRvLCAqXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJ0b3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudD1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiMFwiIGNvbD1cIjBcIiBjbGFzcz1cImRlc2NyaXB0aW9uLXZhbHVlXCIgdGV4dD1cIkF2YWlsYWJpbGl0eTpcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjBcIiBjb2w9XCIxXCIgIGNsYXNzPVwiZmEgZGVzY3JpcHRpb24tdmFsdWVcIiA6Y2xhc3M9XCJpdGVtLmlzQXZhaWxhYmxlPT10cnVlPyAnaXNBdmFpbGFibGUnOidpc05vdEF2YWlsYWJsZSdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIDp0ZXh0PVwiaXRlbS5pc0F2YWlsYWJsZT09dHJ1ZT8gJ0F2YWlsYWJsZSc6J05vdCBBdmFpbGFibGUnXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIDp0ZXh0PVwiaXRlbS5pc0F2YWlsYWJsZT09dHJ1ZT8gJ2ZhLWNoZWNrJzonZmEtdGltZXMnIHwgZm9udGljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiMVwiIGNvbD1cIjBcIiBjbGFzcz1cImRlc2NyaXB0aW9uLXZhbHVlXCIgdGV4dD1cIkxvY2F0aW9uOlwiIC8+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiMVwiIGNvbD1cIjFcIiBjbGFzcz1cImRlc2NyaXB0aW9uLXZhbHVlXCIgOnRleHQ9XCJpdGVtLmxvY2F0aW9uXCIgLz4gXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiMlwiIGNvbD1cIjBcIiBjbGFzcz1cImRlc2NyaXB0aW9uLXZhbHVlXCIgdGV4dD1cIkFnZTpcIiAvPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjJcIiBjb2w9XCIxXCIgY2xhc3M9XCJkZXNjcmlwdGlvbi12YWx1ZVwiIDp0ZXh0PVwiaXRlbS5hZ2VcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjNcIiBjb2w9XCIwXCIgY2xhc3M9XCJkZXNjcmlwdGlvbi12YWx1ZVwiIHRleHQ9XCJHZW5kZXI6IFwiIC8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiM1wiIGNvbD1cIjFcIiBjbGFzcz1cImRlc2NyaXB0aW9uLXZhbHVlXCIgOnRleHQ9XCJpdGVtLmdlbmRlclwiIC8+ICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCI0XCIgY29sPVwiMFwiIGNsYXNzPVwiZGVzY3JpcHRpb24tdmFsdWVcIiB0ZXh0PVwiQnJlZWQgR3JvdXA6XCIgLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCI0XCIgY29sPVwiMVwiIGNsYXNzPVwiZGVzY3JpcHRpb24tdmFsdWVcIiA6dGV4dD1cIml0ZW0uYnJlZWRfZ3JvdXBcIiAvPiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCI1XCIgY29sPVwiMFwiIGNsYXNzPVwiZGVzY3JpcHRpb24tdmFsdWVcIiB0ZXh0PVwiUHJpbWFyeSBCcmVlZDpcIiAvPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjVcIiBjb2w9XCIxXCIgY2xhc3M9XCJkZXNjcmlwdGlvbi12YWx1ZVwiIDp0ZXh0PVwiaXRlbS5wcmltYXJ5X2JyZWVkXCIgLz4gICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiNlwiIGNvbD1cIjBcIiBjbGFzcz1cImRlc2NyaXB0aW9uLXZhbHVlXCIgdGV4dD1cIkFuaW1hbCBTaXplOlwiIC8+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjZcIiBjb2w9XCIxXCIgY2xhc3M9XCJkZXNjcmlwdGlvbi12YWx1ZVwiIDp0ZXh0PVwiaXRlbS5hbmltYWxfc2l6ZVwiIC8+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiN1wiIGNvbD1cIjBcIiBjbGFzcz1cImRlc2NyaXB0aW9uLXZhbHVlXCIgdGV4dD1cIlByaW1hcnkgQ29sb3I6XCIgLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCI3XCIgY29sPVwiMVwiIGNsYXNzPVwiZGVzY3JpcHRpb24tdmFsdWVcIiA6dGV4dD1cIml0ZW0ucHJpbWFyeV9jb2xvclwiIC8+ICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2Nyb2xsVmlldz5cclxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcblxyXG5cclxuICAgICAgICAgICAgPC9HcmlkbGF5b3V0PlxyXG5cclxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHByb3BzOiBbXCJpdGVtXCJdLFxyXG4gIGNvbXBvbmVudHM6IHt9LFxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICBnZW5kZXJJY29uKCkge1xyXG4gICAgICBzd2l0Y2ggKHRoaXMuaXRlbS5nZW5kZXIpIHtcclxuICAgICAgICBjYXNlIFwiTVwiOlxyXG4gICAgICAgICAgdGhpcy5pdGVtLmNhdGVnb3J5VGFnID0gXCIjMDA5OWZmXCI7XHJcbiAgICAgICAgICByZXR1cm4gXCJmYS1tYXJzXCI7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiRlwiOlxyXG4gICAgICAgICAgdGhpcy5pdGVtLmNhdGVnb3J5VGFnID0gXCIjZmZjY2ZmXCI7XHJcbiAgICAgICAgICByZXR1cm4gXCJmYS12ZW51c1wiO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHJldHVybiBcImZhLWZpcmVcIjtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBjcmVhdGVkKCkge1xyXG4gICAgdGhpcy5pbWFnZXMgPSBbXHJcbiAgICAgIHtcclxuICAgICAgICBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvcGFuY2FrZTY0MC5qcGdcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL3BhbmNha2U2NDAuanBnXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9wYW5jYWtlNjQwLmpwZ1wiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvcGFuY2FrZTY0MC5qcGdcIlxyXG4gICAgICB9XHJcbiAgICBdO1xyXG4gICAgLy8gdGhpcy5pc0xpa2UgPSB0aGlzLml0ZW0uaXNMaWtlO1xyXG4gICAgLy8gdGhpcy5pc0hlYXJ0ID0gdGhpcy5pdGVtLmlzRmF2b3JpdGU7XHJcbiAgfSxcclxuICBtb3VudGVkKCkge30sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgLy8gbmF2aWdhdGVCYWNrXHJcbiAgICBjbG9zZSgpIHtcclxuICAgICAgdGhpcy4kbmF2aWdhdGVCYWNrKCk7XHJcbiAgICB9LFxyXG4gICAgLy8gQW5pbWF0ZSAnRmF2b3JpdGUnIGljb25cclxuICAgIGFuaW1hdGVGYXZvcml0ZSgpIHtcclxuICAgICAgbGV0IGltZ0xvZ28gPSB0aGlzLiRyZWZzLmZhdm9yaXRlLm5hdGl2ZVZpZXc7XHJcbiAgICAgIGltZ0xvZ29cclxuICAgICAgICAuYW5pbWF0ZSh7XHJcbiAgICAgICAgICBzY2FsZToge1xyXG4gICAgICAgICAgICB4OiAwLjYsXHJcbiAgICAgICAgICAgIHk6IDAuNlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGR1cmF0aW9uOiA1MCxcclxuICAgICAgICAgIGRlbGF5OiAwXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHJldHVybiBpbWdMb2dvLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBzY2FsZToge1xyXG4gICAgICAgICAgICAgIHg6IDEuMixcclxuICAgICAgICAgICAgICB5OiAxLjIsXHJcbiAgICAgICAgICAgICAgZHVyYXRpb246IDUwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICByZXR1cm4gaW1nTG9nby5hbmltYXRlKHtcclxuICAgICAgICAgICAgc2NhbGU6IHtcclxuICAgICAgICAgICAgICB4OiAxLFxyXG4gICAgICAgICAgICAgIHk6IDEsXHJcbiAgICAgICAgICAgICAgZHVyYXRpb246IDEwMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge30pO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZUhlYXJ0KCkge1xyXG4gICAgICAvLyB0b2dnbGUgaXNGYXZvcml0ZVxyXG4gICAgICB0aGlzLmFuaW1hdGVGYXZvcml0ZSgpO1xyXG4gICAgICB0aGlzLml0ZW0uaXNGYXZvcml0ZSA9ICF0aGlzLml0ZW0uaXNGYXZvcml0ZTtcclxuICAgIH1cclxuICB9LFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpbWFnZXM6IG51bGwsXHJcbiAgICAgIGlzSGVhcnQ6IGZhbHNlXHJcbiAgICB9O1xyXG4gIH1cclxufTtcclxuPC9zY3JpcHQ+XHJcbjxzdHlsZSBzY29wZWQ+XHJcbi8qIENTUyAqL1xyXG4uY2xvc2Uge1xyXG4gIGZvbnQtc2l6ZTogMjA7XHJcbiAgY29sb3I6IHJnYigyMjYsIDIyOSwgMjI5KTtcclxuICBtYXJnaW46IDE1IDAgMCAxNTtcclxufVxyXG5cclxuVGV4dFZpZXcge1xyXG4gIGJvcmRlci13aWR0aDogMTtcclxuICBib3JkZXItY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbi10ZXh0IHtcclxuICBmb250LXNpemU6IDE0O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMTY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICMzZTllZGI7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbi12YWx1ZSB7XHJcbiAgZm9udC1zaXplOiAxNDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgbWFyZ2luOiA4O1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24tdmFsdWUuaXNBdmFpbGFibGUge1xyXG4gIGNvbG9yOiBncmVlbjtcclxuICBmb250LXdlaWdodDogYm9sZFxyXG59XHJcblxyXG4uZGVzY3JpcHRpb24tdmFsdWUuaXNOb3RBdmFpbGFibGUge1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRcclxufVxyXG5cclxuLnJhdGUge1xyXG4gIHBhZGRpbmctdG9wOiAzO1xyXG4gIG1hcmdpbjogMDtcclxuICBjb2xvcjogI2ZmZTkwMDtcclxuICBmb250LXNpemU6IDE4O1xyXG59XHJcblxyXG4ucmF0aW5nLXZhbHVlIHtcclxuICBtYXJnaW4tbGVmdDogNTtcclxufVxyXG5cclxuLmxpa2VkLWFjdGl2ZSB7XHJcbiAgY29sb3I6ICM0MDgwZmY7XHJcbn1cclxuXHJcbi5oZWFydC1hY3RpdmUge1xyXG4gIGNvbG9yOiAjYjUxMjEzO1xyXG59XHJcblxyXG4uZGVmYXVsdCB7XHJcbiAgY29sb3I6ICM4MjgyODI7XHJcbn1cclxuXHJcbi5sYXlvdXQge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgY29sb3I6ICM4MjgyODI7XHJcbiAgZm9udC1zaXplOiAxNDtcclxuICBoZWlnaHQ6IDMwO1xyXG4gIHBhZGRpbmc6IDUgMCA1IDA7XHJcbn1cclxuXHJcbi5saWtlLWljb24ge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgaGVpZ2h0OiAzMDtcclxuICBmb250LXNpemU6IDE2O1xyXG4gIG1hcmdpbi1yaWdodDogMjtcclxuICBwYWRkaW5nOiA1IDUgNSA1O1xyXG59XHJcblxyXG4uaXRlbS1uYW1lIHtcclxuICBmb250LXNpemU6IDE0O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uaXRlbS1jYXRlZ29yeSB7XHJcbiAgZm9udC1zaXplOiAxNDtcclxuICBjb2xvcjogIzgyODI4MjtcclxufVxyXG5cclxuLmNhdGVnb3J5LWljb24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogNTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDI1O1xyXG4gIGJvcmRlci13aWR0aDogMTtcclxuICBib3JkZXItY29sb3I6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG1hcmdpbi10b3A6IDQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNTtcclxuICB3aWR0aDogNDA7XHJcbiAgaGVpZ2h0OiA0MDtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIG1hcmdpbi1sZWZ0OiAxNjtcclxuICBtYXJnaW4tcmlnaHQ6IDE2O1xyXG4gIG1hcmdpbi1ib3R0b206IDM7XHJcbiAgLyogbWFyZ2luLXRvcDogMTY7ICovXHJcbn1cclxuXHJcbi5jYXJkLWltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAyNTA7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTtcclxufVxyXG5cclxuLmNhcmQtaW1nLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMwLCAyMzAsIDIzMCk7XHJcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1O1xyXG4gIHdpZHRoOiAxMzA7XHJcbiAgaGVpZ2h0OiA3MDtcclxuICBtYXJnaW4tbGVmdDogNTtcclxufVxyXG5cclxuLmxpbmUge1xyXG4gIGhlaWdodDogMC41O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogI2UwZTBlMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xyXG59XHJcblxyXG4ubGluZUJyZWFrIHtcclxuICBoZWlnaHQ6IDAuNTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6ICNlMGUwZTA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcclxufVxyXG5cclxuXHJcbi8qIEFuaW1hdGlvbnMgKi9cclxuLmFuaW0tcGFnZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDZkODtcclxuICBhbmltYXRpb24tbmFtZToga2V5LXBhZ2U7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyO1xyXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XHJcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMga2V5LXBhZ2Uge1xyXG4gIDAlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYWRhZGE7XHJcbiAgfVxyXG5cclxuICAyMCUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RiZDJkNTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG59XHJcblxyXG4uYW5pbS1jb3ZlciB7XHJcbiAgb3BhY2l0eTogMDtcclxuICBhbmltYXRpb24tbmFtZToga2V5LWNvdmVyO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTtcclxuICBhbmltYXRpb24tZGVsYXk6IDAuNTtcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGtleS1jb3ZlciB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDU1MCkgc2NhbGUoMCwgMCk7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcclxuICB9XHJcblxyXG4gIDMwJSB7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSwgMSk7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcclxuICB9XHJcbn1cclxuXHJcbi5hbmltLWltYWdlcyB7XHJcbiAgb3BhY2l0eTogMDtcclxuICBhbmltYXRpb24tbmFtZToga2V5LWltYWdlcztcclxuICBhbmltYXRpb24tZHVyYXRpb246IDE7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjc7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBrZXktaW1hZ2VzIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNTUwKSBzY2FsZSgwLCAwKTtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xyXG4gIH1cclxuXHJcbiAgMzAlIHtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxLCAxKTtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xyXG4gIH1cclxufVxyXG5cclxuLmFuaW0taXRlbUluZm8ge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGtleS1pdGVtSW5mbztcclxuICBhbmltYXRpb24tZHVyYXRpb246IDE7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjI7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBrZXktaXRlbUluZm8ge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCwgNTApO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xyXG4gIH1cclxufVxyXG5cclxuLmFuaW0tbGlrZXMge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGtleS1saWtlcztcclxuICBhbmltYXRpb24tZHVyYXRpb246IDE7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjU7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBrZXktbGlrZXMge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCwgNTApO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xyXG4gIH1cclxufVxyXG5cclxuLmFuaW0tY29udGVudCB7XHJcbiAgb3BhY2l0eTogMDtcclxuICBhbmltYXRpb24tbmFtZToga2V5LWNvbnRlbnQ7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMS44O1xyXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XHJcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMga2V5LWNvbnRlbnQge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCwgNTApO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xyXG4gIH1cclxufVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxTdGFja0xheW91dCBjbGFzcz1cIm1haW5cIj5cclxuXHJcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiY29udGVudFwiPlxyXG5cclxuICAgICAgICAgICAgPEltYWdlIHN0cmV0Y2g9XCJhc3BlY3RGaXRcIiBjbGFzcz1cImNhcmQtaW1nXCIgQHRhcD1cIm9uQ2xpY2tCdXR0b24oKVwiXHJcbiAgICAgICAgICAgICAgICA6c3JjPVwiaXRlbS5jb3ZlclwiIC8+XHJcbiAgICAgICAgICAgIDxHcmlkTGF5b3V0IHdpZHRoPVwiMTAwJVwiIGNvbHVtbnM9XCJhdXRvLCpcIiByb3dzPVwiYXV0byxhdXRvXCIgY2xhc3M9XCJcIlxyXG4gICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiBAdGFwPVwib25DbGlja0J1dHRvbigpXCI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwhLS0gR2VuZGVyIC0tPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiY2F0ZWdvcnlJY29uIHwgZm9udGljb25cIiByb3c9XCIwXCIgY29sPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcm93U3Bhbj1cIjJcIiA6YmFja2dyb3VuZENvbG9yPVwiaXRlbS5jYXRlZ29yeVRhZ1wiIGNsYXNzPVwiZmEgY2F0ZWdvcnktaWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLU5hbWUsIGFnZSAtLT4gICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiMFwiIGNvbD1cIjFcIiBjbGFzcz1cImZhIGl0ZW0tbmFtZVwiIHRleHR3cmFwPVwidHJ1ZVwiIHZlcnRpY2FsQWxpZ25tZW50PSBcImNlbnRlclwiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJsZWZ0XCIgOnRleHQ9XCJpdGVtLm5hbWUgKyAnLCAnICsgaXRlbS5hZ2VcIiAgLz5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgcm93PVwiMVwiIGNvbD1cIjFcIiByb3dzPVwiYXV0b1wiIGNvbHVtbnM9XCJhdXRvLGF1dG8sYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIwXCIgY29sPVwiMFwiIGNsYXNzPVwiaXRlbS1jYXRlZ29yeVwiIHRleHR3cmFwPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50PVwiYm90dG9tXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cImxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6dGV4dD1cIml0ZW0uY2F0ZWdvcnlcIiAvPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cclxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHdpZHRoPVwiMTAwJVwiIG1hcmdpblRvcD1cIjVcIiBjbGFzcz1cImxpbmVcIiAvPlxyXG5cclxuICAgICAgICAgICAgPCEtLSBCVUc6IHByb2JsZW0gd2l0aCBzY3JvbGwgdHJhbnNpc3Rpb24gb24gaW9zIGVtdWxhdG9yIC0tPlxyXG4gICAgICAgICAgICA8IS0tIDxJdGVtTGlrZSA6aXRlbT1cIml0ZW1cIj48L0l0ZW1MaWtlPiAtLT5cclxuXHJcbiAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNsYXNzPVwiXCIgbWFyZ2luVG9wPVwiNVwiIHdpZHRoPVwiMTAwJVwiIHJvdz1cIjNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9XCIqLCBhdXRvLCBhdXRvXCIgcm93cz1cImF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2w9XCIwXCIgcm93cz1cImF1dG9cIiBjb2x1bW5zPVwiYXV0byxhdXRvXCIgQHRhcD1cIm9uQ2xpY2tCdXR0b24oKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVwiMFwiIHJvdz1cIjBcIiByZWY9XCJpbmZvXCIgY2xhc3M9XCJsaWtlLWljb24gZmFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOnRleHQ9XCInZmEtaW5mby1jaXJjbGUnIHwgZm9udGljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVwiMVwiIHJvdz1cIjBcIiBjbGFzcz1cImxheW91dFwiIDp0ZXh0PVwiaXRlbS5icmVlZF9ncm91cCArICcgLSAnICsgaXRlbS5wcmltYXJ5X2JyZWVkXCI+PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sPVwiMVwiIHJvd3M9XCJhdXRvXCIgY29sdW1ucz1cImF1dG8sYXV0b1wiIEB0YXA9XCJ0b2dnbGVIZWFydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0PVwiMTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cIjBcIiByb3c9XCIwXCIgcmVmPVwiZmF2b3JpdGVcIiBjbGFzcz1cImxpa2UtaWNvbiAgZmFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwiW2l0ZW0uaXNGYXZvcml0ZSA/ICdoZWFydC1hY3RpdmUnIDogJ2RlZmF1bHQnXVwiIDp0ZXh0PVwiaXRlbS5pc0Zhdm9yaXRlID8gJ2ZhLWhlYXJ0JzonZmEtaGVhcnQtbycgfCBmb250aWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XCIxXCIgcm93PVwiMFwiIGNsYXNzPVwibGF5b3V0XCIgdGV4dD1cIkZhdm9yaXRlXCI+PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNvbD1cIjJcIiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJlZj1cIlwiIGNsYXNzPVwibGlrZS1pY29uIGxheW91dCBmYVwiIDp0ZXh0PVwiJ2ZhLXNoYXJlLXNxdWFyZS1vJyB8IGZvbnRpY29uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwibGF5b3V0XCIgdGV4dD1cIlNoYXJlXCI+PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcblxyXG4gICAgICAgIDxTdGFja0xheW91dCB3aWR0aD1cIjEwMCVcIiBjbGFzcz1cImxpbmVCcmVha1wiIC8+XHJcblxyXG4gICAgPC9TdGFja0xheW91dD5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbi8vIGltcG9ydCBJdGVtTGlrZSBmcm9tIFwiLi9pdGVtTGlrZVwiO1xyXG5pbXBvcnQgeyBpc0lPUywgaXNBbmRyb2lkIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHByb3BzOiBbXCJpdGVtXCJdLFxyXG4gIGNvbXBvbmVudHM6IHtcclxuICAgIC8vIEl0ZW1MaWtlXHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgY2F0ZWdvcnlJY29uKCkge1xyXG4gICAgICBzd2l0Y2ggKHRoaXMuaXRlbS5nZW5kZXIpIHtcclxuICAgICAgICBjYXNlIFwiTVwiOlxyXG4gICAgICAgICAgdGhpcy5pdGVtLmNhdGVnb3J5VGFnID0gXCIjMDA5OWZmXCJcclxuICAgICAgICAgIHJldHVybiBcImZhLW1hcnNcIjtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJGXCI6XHJcbiAgICAgICAgICB0aGlzLml0ZW0uY2F0ZWdvcnlUYWcgPSBcIiNmZmNjZmZcIlxyXG4gICAgICAgICAgcmV0dXJuIFwiZmEtdmVudXNcIjtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICByZXR1cm4gXCJmYS1maXJlXCI7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY3JlYXRlZCgpIHtcclxuICAgIC8vIHRoaXMuaXNMaWtlID0gIHRoaXMuaXRlbS5pc0xpa2VcclxuICAgIC8vIHRoaXMuaXNIZWFydCA9ICB0aGlzLml0ZW0uaXNGYXZvcml0ZVxyXG4gIH0sXHJcbiAgbW91bnRlZCgpIHt9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGFuaW1hdGVGYXZvcml0ZSgpIHtcclxuICAgICAgaWYgKGlzSU9TKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBpbWdMb2dvID0gdGhpcy4kcmVmcy5mYXZvcml0ZS5uYXRpdmVWaWV3O1xyXG4gICAgICBpbWdMb2dvXHJcbiAgICAgICAgLmFuaW1hdGUoe1xyXG4gICAgICAgICAgc2NhbGU6IHtcclxuICAgICAgICAgICAgeDogMC42LFxyXG4gICAgICAgICAgICB5OiAwLjZcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBkdXJhdGlvbjogNTAsXHJcbiAgICAgICAgICBkZWxheTogMFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICByZXR1cm4gaW1nTG9nby5hbmltYXRlKHtcclxuICAgICAgICAgICAgc2NhbGU6IHtcclxuICAgICAgICAgICAgICB4OiAxLjIsXHJcbiAgICAgICAgICAgICAgeTogMS4yLFxyXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiA1MFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgcmV0dXJuIGltZ0xvZ28uYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHNjYWxlOiB7XHJcbiAgICAgICAgICAgICAgeDogMSxcclxuICAgICAgICAgICAgICB5OiAxLFxyXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihmdW5jdGlvbigpIHt9KTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGVIZWFydCgpIHtcclxuICAgICAgdGhpcy5hbmltYXRlRmF2b3JpdGUoKTtcclxuICAgICAgdGhpcy5pdGVtLmlzRmF2b3JpdGUgPSAhdGhpcy5pdGVtLmlzRmF2b3JpdGU7XHJcbiAgICB9LFxyXG4gICAgb25DbGlja0J1dHRvbigpIHtcclxuICAgICAgdGhpcy4kZW1pdChcImNsaWNrZWRcIiwgdGhpcy5pdGVtKTtcclxuICAgIH1cclxuICB9LFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpc0xpa2U6IGZhbHNlLFxyXG4gICAgICBpc0hlYXJ0OiBmYWxzZVxyXG4gICAgfTtcclxuICB9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG48c3R5bGUgc2NvcGVkPlxyXG4uaXRlbS1jYXRlZ29yeSB7XHJcbiAgZm9udC1zaXplOiAxNDtcclxuICBjb2xvcjogIzgyODI4MjtcclxufVxyXG5cclxuLmdlbmRlci1pY29uIHtcclxuICBwYWRkaW5nLXRvcDogMztcclxuICBwYWRkaW5nLXJpZ2h0OiAzO1xyXG4gIGZvbnQtc2l6ZTogMTY7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMDtcclxufVxyXG5cclxuLmluZm8taWNvbiB7XHJcbiAgcGFkZGluZy10b3A6IDM7XHJcbiAgcGFkZGluZy1sZWZ0OiAzO1xyXG4gIGNvbG9yOiBncmF5O1xyXG4gIGZvbnQtc2l6ZTogMTQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwO1xyXG59XHJcblxyXG4ucmF0aW5nLXZhbHVlIHtcclxuICBtYXJnaW4tbGVmdDogNTtcclxufVxyXG5cclxuLmxpa2VkLWFjdGl2ZSB7XHJcbiAgY29sb3I6ICM0MDgwZmY7XHJcbn1cclxuXHJcbi5oZWFydC1hY3RpdmUge1xyXG4gIGNvbG9yOiAjYjUxMjEzO1xyXG59XHJcblxyXG4uZGVmYXVsdCB7XHJcbiAgY29sb3I6ICM4MjgyODI7XHJcbn1cclxuXHJcblxyXG4ubGF5b3V0IHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gIGNvbG9yOiAjODI4MjgyO1xyXG4gIGZvbnQtc2l6ZTogMTQ7XHJcbiAgaGVpZ2h0OiAzMDtcclxuICBwYWRkaW5nOiA1IDAgNSAwO1xyXG59XHJcblxyXG4ubGlrZS1pY29uIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gIGhlaWdodDogMzA7XHJcbiAgZm9udC1zaXplOiAxNjtcclxuICBtYXJnaW4tcmlnaHQ6IDI7XHJcbiAgcGFkZGluZzogNSA1IDUgNTtcclxufVxyXG5cclxuLml0ZW0tbmFtZSB7XHJcbiAgZm9udC1zaXplOiAxNDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nLWJvdHRvbTogMjtcclxufVxyXG5cclxuLml0ZW0tY2F0ZWdvcnkge1xyXG4gIGZvbnQtc2l6ZTogMTQ7XHJcbiAgY29sb3I6ICM4MjgyODI7XHJcbn1cclxuXHJcbi5jYXRlZ29yeS1pY29uIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDU7XHJcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjU7XHJcbiAgYm9yZGVyLXdpZHRoOiAxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBtYXJnaW4tdG9wOiA0O1xyXG4gIG1hcmdpbi1yaWdodDogMTU7XHJcbiAgd2lkdGg6IDQwO1xyXG4gIGhlaWdodDogNDA7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBtYXJnaW4tbGVmdDogMTY7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNjtcclxuICBtYXJnaW4tYm90dG9tOiAzO1xyXG4gIG1hcmdpbi10b3A6IDE2O1xyXG59XHJcblxyXG4uY2FyZC1pbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTUwO1xyXG4gIG1hcmdpbi1ib3R0b206IDU7XHJcbn1cclxuXHJcbi5saW5lIHtcclxuICBoZWlnaHQ6IDAuNTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6ICNlMGUwZTA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcclxufVxyXG5cclxuLmxpbmVCcmVhayB7XHJcbiAgaGVpZ2h0OiA3O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogI2UwZTBlMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xyXG59XHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG5cclxuICAgIDxHcmlkTGF5b3V0IHJvd3M9XCIqXCIgY29sdW1ucz1cIipcIj5cclxuICAgICAgICA8SW1hZ2UgaGVpZ2h0PVwiMTUwXCIgd2lkdGg9XCIxMDAlXCIgbWFyZ2luQm90dG9tPVwiMTBcIiBzdHJldGNoPVwiYXNwZWN0RmlsbFwiXHJcbiAgICAgICAgICAgIDpzcmM9XCJpdGVtLmNvdmVyXCIgLz4gLz5cclxuICAgICAgICA8R3JpZExheW91dCB2ZXJ0aWNhbEFsaWdubWVudD1cImJvdHRvbVwiPlxyXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJiYW5uZXIyXCIgYmFja2dyb3VuZENvbG9yPVwiIzQ4OWU5ZTllXCI+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJpdGVtLmNhdGVnb3J5ICsgJyAoJyArICBpdGVtLmNvdW50ICArICAnKSdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2F0ZWdvcnktbmFtZSAgbS1iLTEwIG0tdC0xMFwiIHRleHR3cmFwPVwidHJ1ZVwiPjwvTGFiZWw+XHJcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG4gICAgPC9HcmlkTGF5b3V0PlxyXG5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBwcm9wczogW1wiaXRlbVwiXSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIG9uQ2xpY2tCdXR0b24oZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdChcImNsaWNrZWRcIiwgZGF0YS5pZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7fTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG48L3NjcmlwdD5cclxuPHN0eWxlIHNjb3BlZD5cclxuICAgIC5kZWZhdWx0LWltZyB7XHJcbiAgICAgICAgY29sb3I6ICNkMWNlY2U1YjtcclxuICAgIH1cclxuXHJcbiAgICAuY2F0ZWdvcnktbmFtZSB7XHJcbiAgICAgICAgY29sb3I6ICNmN2Y3Zjc7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDUgMCAxNSAwXHJcbiAgICB9XHJcblxyXG4gICAgLmJhbm5lciB7XHJcbiAgICAgICAgY29sb3I6ICNiZGJkYmQ7XHJcbiAgICAgICAgb3BhY2l0eTogLjM7XHJcbiAgICB9XHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG48U3RhY2tMYXlvdXQ+XHJcbiAgPEltYWdlIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgOnNyYz1cInNyY1wiIHN0cmV0Y2g9XCJhc3BlY3RGaXRcIiBoZWlnaHQ9XCIxMTBcIiBpb3M6aGVpZ2h0PVwiMTIwXCIgY2xhc3M9XCJpbWFnZVwiIEB0YXA9XCJhY3Rpb25cIiAvPlxyXG4gIDxCdXR0b24gdmVydGljYWxBbGlnbm1lbnQ9XCJib3R0b21cIiBjbGFzcz1cImJ1dHRvblwiIDp0ZXh0PVwiYCR7aWNvbn0gJHt0aXRsZX1gXCIgQHRhcD1cImFjdGlvblwiIC8+XHJcbjwvU3RhY2tMYXlvdXQ+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGljb246IFN0cmluZyxcclxuICAgICAgdGl0bGU6IFN0cmluZyxcclxuICAgICAgYWN0aW9uOiBGdW5jdGlvbixcclxuICAgICAgc3JjOiBTdHJpbmdcclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHJcbi8qIGJ1dHRvbiBvbiBhbmRyb2lkIGlzIHN0eWxlZCB3aXRoIGRlZmF1bHQgc2V0dGluZyB3aGVuIGJvcmRlciByYWRpdXMgaXMgb21pdHRlZCovXHJcbi5idXR0b257XHJcbiAgYm9yZGVyLXJhZGl1czogMjUlO1xyXG59XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuPFN0YWNrTGF5b3V0PlxyXG4gIDxCdXR0b24gdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiBjbGFzcz1cImJ1dHRvblwiIDp0ZXh0PVwiYCR7dGl0bGV9ICR7aWNvbn0gYFwiIEB0YXA9XCJhY3Rpb25cIiAvPlxyXG48L1N0YWNrTGF5b3V0PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBpY29uOiBTdHJpbmcsXHJcbiAgICAgIHRpdGxlOiBTdHJpbmcsXHJcbiAgICAgIGFjdGlvbjogRnVuY3Rpb24sXHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblxyXG4vKiBidXR0b24gb24gYW5kcm9pZCBpcyBzdHlsZWQgd2l0aCBkZWZhdWx0IHNldHRpbmcgd2hlbiBib3JkZXIgcmFkaXVzIGlzIG9taXR0ZWQqL1xyXG4uYnV0dG9ue1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1JTtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5cclxuPC9zdHlsZT5cclxuIiwiPHRlbXBsYXRlPlxyXG4gICAgPFBhZ2UgY2xhc3M9XCJwYWdlXCI+XHJcbiAgICAgICAgPEFjdGlvbkJhciBjbGFzcz1cImFjdGlvbi1iYXJcIj5cclxuICAgICAgICAgICAgPE5hdmlnYXRpb25CdXR0b24gQHRhcD1cIiRuYXZpZ2F0ZUJhY2soKVwiIGFuZHJvaWQuc3lzdGVtSWNvbj1cImljX21lbnVfYmFja1wiIC8+XHJcbiAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImFjdGlvbi1iYXItdGl0bGVcIiA6dGV4dD1cIkFuaW1hbENlbnRlci5uYW1lXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cImNlbnRlclwiIC8+PlxyXG4gICAgICAgIDwvQWN0aW9uQmFyPlxyXG5cclxuICAgICAgICA8U2Nyb2xsVmlldz5cclxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPCEtLSBBbmltYWwgQ2VudGVyIGNvdmVyIHBpYyAtLT5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSA6c3JjPVwiQW5pbWFsQ2VudGVyLmltYWdlVVJMXCIgc3RyZXRjaD1cImFzcGVjdEZpdFwiIGhlaWdodD1cIjIwMFwiIGNsYXNzPVwiYW5pbS1jb3ZlciBtLWItMTVcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIxXCIgY2xhc3M9XCJoci1saWdodCBtLXQtMTUgbS1iLTE1XCIvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XCIqLCAqLCAqLCBhdXRvXCIgY29sdW1ucz1cImF1dG8sKlwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIG5hbWUgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHJvdz1cIjBcIiBjb2w9XCIwXCIgY2xhc3M9XCJhbmltLWNvbnRlbnQxIHAtbC0xNSBwLWItMTAgbS1yLTIwXCIgc3JjPVwifi9hc3NldHMvaW1hZ2VzL2FjaG91c2UucG5nXCIgc3RyZXRjaD1cImFzcGVjdEZpdFwiIGhlaWdodD1cIjQwXCIgd2lkdGg9XCI0MFwiIGxvYWRNb2RlPVwiYXN5bmNcIiBtYXJnaW49XCIzXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIwXCIgY29sPVwiMVwiICBjbGFzcz1cImFuaW0tY29udGVudDEgdGV4dCBwLWItMTAgZm9udC13ZWlnaHQtYm9sZCB0aXRsZSBzdGFja1wiIG1hcmdpbj1cIjVcIiB0ZXh0V3JhcD1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIDp0ZXh0PVwiQW5pbWFsQ2VudGVyLm5hbWUgKyAnIEFuaW1hbCBDYXJlIENlbnRlcidcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBhZGRyZXNzIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSByb3c9XCIxXCIgY29sPVwiMFwiIGNsYXNzPVwiYW5pbS1jb250ZW50MiBwLWwtMTUgcC1iLTEwIG0tci0yMFwiICBzcmM9XCJ+L2Fzc2V0cy9pbWFnZXMvbG9jYXRpb25pY29uLnBuZ1wiIHN0cmV0Y2g9XCJhc3BlY3RGaXRcIiBoZWlnaHQ9XCI0MFwiIHdpZHRoPVwiNDBcIiBsb2FkTW9kZT1cImFzeW5jXCIgbWFyZ2luPVwiM1wiLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjFcIiBjb2w9XCIxXCIgY2xhc3M9XCJhbmltLWNvbnRlbnQyIHAtYi0xMCBzdGFja1wiIG1hcmdpbj1cIjVcIiBAdGFwPVwib25BZGRyZXNzVGFwXCIgdGV4dFdyYXA9XCJ0cnVlXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gIGNsYXNzPVwiZmEgdGV4dC1wcmltYXJ5XCIgOnRleHQ9XCJBbmltYWxDZW50ZXIuYWRkcmVzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBwaG9uZSAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugcm93PVwiMlwiIGNvbD1cIjBcIiBjbGFzcz1cImFuaW0tY29udGVudDMgcC1sLTE1IHAtYi0xMCBtLXItMjBcIiAgc3JjPVwifi9hc3NldHMvaW1hZ2VzL3Bob25laWNvbi5wbmdcIiBzdHJldGNoPVwiYXNwZWN0Rml0XCIgaGVpZ2h0PVwiNDBcIiB3aWR0aD1cIjQwXCIgbG9hZE1vZGU9XCJhc3luY1wiIG1hcmdpbj1cIjNcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjJcIiBjb2w9XCIxXCIgY2xhc3M9XCJhbmltLWNvbnRlbnQzIGZhIHRleHQtcHJpbWFyeSBwLWItMTAgc3RhY2tcIiA6dGV4dD1cIkFuaW1hbENlbnRlci5waG9uZVwiIEB0YXA9XCJvblBob25lVGFwXCIgbWFyZ2luPVwiNVwiICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gaG91cnMgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHJvdz1cIjNcIiBjb2w9XCIwXCIgY2xhc3M9XCJhbmltLWNvbnRlbnQ0IHAtbC0xNSBwLWItMTAgbS1yLTIwXCIgc3JjPVwifi9hc3NldHMvaW1hZ2VzL2hvdXJzaWNvbi5wbmdcIiBzdHJldGNoPVwiYXNwZWN0Rml0XCIgaGVpZ2h0PVwiNDBcIiB3aWR0aD1cIjQwXCIgbG9hZE1vZGU9XCJhc3luY1wiIG1hcmdpbj1cIjNcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgcm93PVwiM1wiIGNvbD1cIjFcIiBjb2x1bW5zPVwiKiwgKlwiIHJvd3M9XCJhdXRvLCBhdXRvXCIgY2xhc3M9XCJhbmltLWNvbnRlbnQ0IHN0YWNrLWhvdXJzXCIgIG1hcmdpbj1cIjVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjBcIiBjb2w9XCIwXCIgY2xhc3M9XCJob3Vyc1wiIDp0ZXh0PVwiQW5pbWFsQ2VudGVyLmF2YWlsYWJpbGl0eS53ZWVrZGF5XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjBcIiBjb2w9XCIxXCIgY2xhc3M9XCJob3Vyc1wiIDp0ZXh0PVwiQW5pbWFsQ2VudGVyLmF2YWlsYWJpbGl0eS53ZWVrZGF5aG91cnNcIiAgdGV4dFdyYXA9XCJ0cnVlXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiMVwiIGNvbD1cIjBcIiBjbGFzcz1cImhvdXJzXCIgOnRleHQ9XCJBbmltYWxDZW50ZXIuYXZhaWxhYmlsaXR5LndlZWtlbmRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiMVwiIGNvbD1cIjFcIiBjbGFzcz1cImhvdXJzXCIgOnRleHQ9XCJBbmltYWxDZW50ZXIuYXZhaWxhYmlsaXR5LndlZWtlbmRob3Vyc1wiICB0ZXh0V3JhcD1cInRydWVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cclxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICA8L1Njcm9sbFZpZXc+XHJcbiAgICA8L1BhZ2U+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4vLyAtLS1wbHVnaW5zLS0tXHJcbi8vIHBob25lXHJcbnZhciBwaG9uZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGhvbmVcIik7XHJcblxyXG4vLyBkaXJlY3Rpb25zXHJcbnZhciBEaXJlY3Rpb25zID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1kaXJlY3Rpb25zXCIpLkRpcmVjdGlvbnM7XHJcbmxldCBkaXJlY3Rpb25zID0gbmV3IERpcmVjdGlvbnMoKTtcclxuLy8tLS0tLS0tXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcHJvcHM6IFtcIkFuaW1hbENlbnRlclwiXSxcclxuXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIGFuaW1hbENlbnRlckRhdGEoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiYW5pbWFsQ2VudGVyRGF0YSgpLCByZXR1cm5pbmcgZGF0YTogXCIgKyB0aGlzLkFuaW1hbENlbnRlcik7XHJcbiAgICAgIHJldHVybiB0aGlzLkFuaW1hbENlbnRlciB8fCB7fTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBtZXRob2RzOiB7XHJcbiAgICBvbkFkZHJlc3NUYXAoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgIFwib25BZGRyZXNzVGFwKCksIGdldCBkaXJlY3Rpb25zIHRvIFwiICsgdGhpcy5BbmltYWxDZW50ZXIuYWRkcmVzc1xyXG4gICAgICApO1xyXG5cclxuICAgICAgLy8gbXVzdCBwYXNzIGluIHN0cmluZyBhcyB2YXJpYWJsZSBvdGhlcndpc2UgaXQgZGlyZWN0aW9ucy5uYXZpZ2F0ZSgpIHdvbid0IHdvcmtcclxuICAgICAgY29uc3QgYWRkcmVzcyA9IHRoaXMuQW5pbWFsQ2VudGVyLmFkZHJlc3M7XHJcblxyXG4gICAgICBkaXJlY3Rpb25zLmF2YWlsYWJsZSgpLnRoZW4oZnVuY3Rpb24oYXZhaWwpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGF2YWlsID8gXCJZZXNcIiA6IFwiTm9cIik7XHJcbiAgICAgICAgaWYgKGF2YWlsKSB7XHJcbiAgICAgICAgICBkaXJlY3Rpb25zXHJcbiAgICAgICAgICAgIC5uYXZpZ2F0ZSh7XHJcbiAgICAgICAgICAgICAgdG86IHtcclxuICAgICAgICAgICAgICAgIC8vIGVpdGhlciBwYXNzIGluIGEgc2luZ2xlIG9iamVjdCBvciBhbiBBcnJheVxyXG4gICAgICAgICAgICAgICAgYWRkcmVzczogYWRkcmVzc1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oXHJcbiAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk1hcHMgYXBwIGxhdW5jaGVkLlwiKTtcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgb25QaG9uZVRhcCgpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJvblBob25lVGFwKCksIGNhbGwgXCIgKyB0aGlzLkFuaW1hbENlbnRlci5waG9uZSk7XHJcbiAgICAgIHBob25lLmRpYWwodGhpcy5BbmltYWxDZW50ZXIucGhvbmUsIHRydWUpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gIH1cclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XHJcbkBpbXBvcnQgXCJAL0FuaW1hbENlbnRlclwiO1xyXG5cclxuLy8tLS0gPGFuaW1hdGlvbj4gLS0tXHJcblxyXG4vLyBjb3ZlciBpbWFnZVxyXG4uYW5pbS1jb3ZlciB7XHJcbiAgb3BhY2l0eTogMDtcclxuICBhbmltYXRpb24tbmFtZToga2V5LWNvdmVyO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTtcclxuICBhbmltYXRpb24tZGVsYXk6IDAuNTtcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGtleS1jb3ZlciB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDEwMCkgc2NhbGUoMCwgMCk7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcclxuICB9XHJcblxyXG4gIDMwJSB7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSwgMSk7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIGljb25zICYgY29udGVudFxyXG4uYW5pbS1jb250ZW50MSB7XHJcbiAgb3BhY2l0eTogMDtcclxuICBhbmltYXRpb24tbmFtZToga2V5LWNvbnRlbnQ7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMC43NTtcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xyXG59XHJcblxyXG4uYW5pbS1jb250ZW50MiB7XHJcbiAgb3BhY2l0eTogMDtcclxuICBhbmltYXRpb24tbmFtZToga2V5LWNvbnRlbnQ7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMS4wO1xyXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XHJcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XHJcbn1cclxuXHJcbi5hbmltLWNvbnRlbnQzIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBrZXktY29udGVudDtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDE7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjI1O1xyXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XHJcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XHJcbn1cclxuXHJcbi5hbmltLWNvbnRlbnQ0IHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBrZXktY29udGVudDtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDE7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjU7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcclxufVxyXG5cclxuXHJcbkBrZXlmcmFtZXMga2V5LWNvbnRlbnQge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCwgNTApO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xyXG4gIH1cclxufVxyXG4vLy0tLSA8L2FuaW1hdGlvbj4gLS0tXHJcblxyXG5cclxuLy8tLS0gY3NzIC0tLVxyXG5cclxuLnRpdGxlIHtcclxuICBmb250LXNpemU6IDE4ZW07XHJcbiAgY29sb3I6ICRtaWRuaWdodC1kYXJrO1xyXG5cclxufVxyXG5cclxuLnN0YWNrIHtcclxuICBwYWRkaW5nLXRvcDogMTQ7XHJcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMTtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2IoMjEyLCAyMTIsIDIxMik7XHJcbn1cclxuXHJcbi5zdGFjay1ob3VycyB7XHJcbiAgcGFkZGluZy10b3A6IDY7XHJcbn1cclxuXHJcbi5ob3VycyB7XHJcbiAgY29sb3I6ICRibHVlLWRhcms7XHJcblxyXG59XHJcblxyXG5BY3Rpb25CYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDlmY2E7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuPC9zdHlsZT5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCI+XHJcbiAgICA8TGFiZWwgY2xhc3M9XCJob21lcGFnZS1ibHVlIHRleHQtcHJpbWFyeSBsaXN0LWdyb3VwLWl0ZW0tdGV4dCBmb250LXdlaWdodC1ib2xkXCIgdGV4dFdyYXA9XCJ0cnVlXCI+XHJcbiAgICA8Rm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICAgIDxTcGFuIDp0ZXh0PVwiaXRlbS5xdWVyeVwiLz5cclxuICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICA8L0xhYmVsPlxyXG4gICAgXHJcbiAgICA8TGFiZWwgY2xhc3M9XCIuZmFxX2Fuc3dlciAubGlzdC1ncm91cC1pdGVtLWNvbnRlbnRcIiB0ZXh0V3JhcD1cInRydWVcIj5cclxuICAgICAgPEZvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICA8U3BhbiB0ZXh0LmRlY29kZT1cIiYjOTtcIi8+XHJcbiAgICAgICAgPFNwYW4gOnRleHQ9XCJpdGVtLmFuc3dlclwiLz5cclxuICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICA8L0xhYmVsPlxyXG4gXHJcbiAgPC9TdGFja0xheW91dD5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBwcm9wczoge1xyXG4gICAgaXRlbTogT2JqZWN0XHJcbiAgfVxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cclxuQGltcG9ydCBcIkAvQW5pbWFsQ2VudGVyXCI7XHJcblxyXG4uZmFxX3F1ZXN0aW9uIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDIwO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4uZmFxX2Fuc3dlciB7XHJcbiAgY29sb3I6ICM0NTQ1NDU7XHJcbn1cclxuXHJcbi5saXN0LWdyb3VwLWl0ZW0tdGV4dCB7XHJcbiAgbWFyZ2luOiAyIDM7XHJcbn1cclxuLmxpc3QtZ3JvdXAtaXRlbS1jb250ZW50IHtcclxuICBwYWRkaW5nOiA4IDE1IDQgMTU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtbGlnaHQ7XHJcbn1cclxuXHJcbi5ob21lcGFnZS1ibHVlIHtcclxuICBjb2xvcjogJGhvbWVwYWdlLWJsdWU7XHJcbn1cclxuPC9zdHlsZT5cclxuIiwiPHRlbXBsYXRlPlxyXG5cdDxwYWdlIGFjdGlvbkJhckhpZGRlbj1cImZhbHNlXCIgYmFja2dyb3VuZFNwYW5VbmRlclN0YXR1c0Jhcj1cInRydWVcIj5cclxuXHRcdDwhLS0gQGxvYWRlZD1cIm9uTG9hZGVkXCIgLS0+XHJcbiAgICAgICAgPEFjdGlvbkJhciBjbGFzcz1cImFjdGlvbmJhciBuYXZUYWJcIj5cclxuICAgICAgICAgICA8TmF2aWdhdGlvbkJ1dHRvbiBAdGFwPVwiJG5hdmlnYXRlQmFjaygpXCIgYW5kcm9pZC5zeXN0ZW1JY29uPVwiaWNfbWVudV9iYWNrXCIgLz5cclxuICAgICAgICAgICAgPExhYmVsIGZvbnRTaXplPVwiMThcIiB0ZXh0PVwiQW5pbWFscyBmb3IgQWRvcHRpb25cIj48L0xhYmVsPlxyXG4gICAgICAgIDwvQWN0aW9uQmFyPlxyXG5cclxuXHRcdDxHcmlkTGF5b3V0IHJvd3M9XCJhdXRvLGF1dG8sKlwiIGNvbHVtbnM9XCJhdXRvXCI+XHJcblxyXG48IS0tbmF2IHRhYi0tPlxyXG5cclxuXHRcdFx0PEdyaWRMYXlvdXQgIHJvdz1cIjFcIiByZWY9XCJuYXZUYWJcIiBjbGFzcz1cIm5hdlRhYlwiIHZlcnRpY2FsQWxpZ25tZW50PVwidG9wXCIgaGVpZ2h0PVwiNTBcIlxyXG5cdFx0XHRcdFx0d2lkdGg9XCIxMDAlXCIgIHJvd3M9XCJhdXRvXCIgY29sdW1ucz1cImF1dG8sYXV0b1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PCEtLWFjdGl2ZSBjbGFzcyB0YWIgbmF2aWdhdGlvbioqKiotLT5cclxuXHRcdFx0XHRcdDxHcmlkTGF5b3V0IGNsYXNzPVwidGFidmlld1wiIDpjbGFzcz1cInNlbGVjdGVkVGFidmlldz09MD8nYWN0aXZlJzonJ1wiXHJcblx0XHRcdFx0XHRcdFx0QHRhcD1cImFkb3B0aW9uTGlzdFwiIHJvd3M9XCIqLGF1dG9cIiBjb2xzPVwiYXV0b1wiIGNvbD1cIjBcIiByb3c9XCIwXCJcclxuXHRcdFx0XHRcdFx0XHR3aWR0aD1cIjUwJVwiPlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8TGFiZWwgdi1zaG93PVwic2VsZWN0ZWRUYWJ2aWV3PT0wXCIgcm93PVwiMFwiIGNsYXNzPVwiZmEgbmF2SWNvblwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdDp0ZXh0PVwic2VsZWN0ZWRUYWJ2aWV3PT0wPydmYS1wYXcnOicnIHwgZm9udGljb25cIi8+XHJcblxyXG5cdFx0XHRcdFx0XHRcdDxMYWJlbCBob3Jpem9udGFsQWxpZ25tZW50PVwiY2VudGVyXCIgOmNsYXNzPVwic2VsZWN0ZWRUYWJ2aWV3PT0wPydhY3RpdmUnOicnXCIgcm93PVwiMVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdHRleHQ9XCJBbmltYWxzXCIgY2xhc3M9XCJ0YWJ2aWV3VGV4dFwiPjwvTGFiZWw+XHJcblxyXG5cdFx0XHRcdFx0PC9HcmlkTGF5b3V0PlxyXG5cclxuXHRcdFx0XHRcdDxHcmlkTGF5b3V0IGNsYXNzPVwidGFidmlld1wiIDpjbGFzcz1cInNlbGVjdGVkVGFidmlldz09MT8nYWN0aXZlJzonJ1wiXHJcblx0XHRcdFx0XHRcdFx0QHRhcD1cInNob3dDYXRlZ29yeVwiIHJvd3M9XCIqLGF1dG9cIiBjb2xzPVwiYXV0b1wiIGNvbD1cIjFcIiByb3c9XCIwXCJcclxuXHRcdFx0XHRcdFx0XHR3aWR0aD1cIjUwJVwiPlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8TGFiZWwgdi1zaG93PVwic2VsZWN0ZWRUYWJ2aWV3PT0xXCIgcm93PVwiMFwiIGNsYXNzPVwiZmEgbmF2SWNvblwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdDp0ZXh0PVwic2VsZWN0ZWRUYWJ2aWV3PT0xPydmYS1maWx0ZXInOicnIHwgZm9udGljb25cIi8+XHJcblxyXG5cdFx0XHRcdFx0XHRcdDxMYWJlbCA6Y2xhc3M9XCJzZWxlY3RlZFRhYnZpZXc9PTE/J2FjdGl2ZSc6JydcIiByb3c9XCIxXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGV4dD1cIkZpbHRlclwiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiBjbGFzcz1cInRhYnZpZXdUZXh0XCI+PC9MYWJlbD5cdFx0XHRcdFx0XHRcclxuXHJcblx0XHRcdFx0XHQ8L0dyaWRMYXlvdXQ+XHJcblx0XHRcdFx0XHQ8IS0tIGVuZCBuYXYtLT5cclxuXHRcdFx0PC9HcmlkTGF5b3V0PlxyXG5cclxuPCEtLXNlbGVjdGVkIHRhYiBzZXQgdG8gdmlldyBhbmltYWwgLS0+XHJcbjwhLS1pdGVtIC0tPlxyXG5cdFx0XHQ8R3JpZExheW91dCB2LXNob3c9XCJzZWxlY3RlZFRhYnZpZXcgPT0gMFwiIHJvdz1cIjJcIiB3aWR0aD1cIjEwMCVcIiBiYWNrZ3JvdW5kQ29sb3I9XCJ3aGl0ZVwiPlxyXG48IS0tVE9ETzogQ0hBTkdFIDpLRVkgVE8gRElGRkVSRU5UIFZBTFVFIC0tPlxyXG48IS0tIFZVRSBXQVJOSU5HOiBEdXBsaWNhdGUga2V5cyBkZXRlY3RlZDogJ1tvYmplY3QgT2JqZWN0XScuIFRoaXMgbWF5IGNhdXNlIGFuIHVwZGF0ZSBlcnJvci4gZm91bmQgaW4gPEFkb3B0aW9uQW5pbWFsRGV0YWlscz4gLS0+XHJcblx0XHRcdFx0PExpc3RWaWV3IHJlZj1cImxpc3R2aWV3XCIgc2VwYXJhdG9yQ29sb3I9XCJ0cmFuc3BhcmVudFwiIGZvcj1cIml0ZW0gaW4gaXRlbXNcIiA6a2V5PVwiaW5kZXhcIj5cclxuXHJcblx0XHRcdFx0XHQ8di10ZW1wbGF0ZT5cclxuXHRcdFx0XHRcdFx0PGl0ZW0gOml0ZW09XCJpdGVtXCIgQGNsaWNrZWQ9XCJzaG93SXRlbShpdGVtKVwiIC8+XHJcblx0XHRcdFx0XHQ8L3YtdGVtcGxhdGU+XHJcblxyXG5cdFx0XHRcdDwvTGlzdFZpZXc+XHJcblx0XHRcdDwvR3JpZExheW91dD5cclxuXHJcbjwhLS1zZWxlY3RlZCB0YWIgdmlldyBmaWx0ZXIgLS0+XHJcblx0XHRcdDxHcmlkTGF5b3V0IHYtc2hvdz1cInNlbGVjdGVkVGFidmlldyA9PSAxXCIgcm93PVwiMlwiIHdpZHRoPVwiMTAwJVwiIGJhY2tncm91bmRDb2xvcj1cIndoaXRlXCI+XHRcdFxyXG5cclxuXHRcdFx0XHQ8UmFkTGlzdFZpZXcgcmVmPVwibGlzdHZpZXdcIiBzZXBhcmF0b3JDb2xvcj1cInRyYW5zcGFyZW50XCIgZm9yPVwiaXRlbSBpbiBpdGVtc0NhdGVnb3J5XCIgOmtleT1cImluZGV4XCI+XHJcblxyXG5cdFx0XHRcdFx0PHYtdGVtcGxhdGU+XHJcblx0XHRcdFx0XHRcdDxDYXRlZ29yeSA6aXRlbT1cIml0ZW1cIj4gPC9DYXRlZ29yeT5cclxuXHRcdFx0XHRcdDwvdi10ZW1wbGF0ZT5cclxuICAgICAgICAgIFxyXG5cdFx0XHRcdDwvUmFkTGlzdFZpZXc+XHJcblx0XHRcdDwvR3JpZExheW91dD5cclxuXHJcblx0XHQ8L0dyaWRMYXlvdXQ+XHJcbjwvcGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuLy8gaW1wb3J0IHsgU3dpc3NBcm15S25pZmUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXN3aXNzLWFybXkta25pZmVcIjtcclxuaW1wb3J0IHsgaXNJT1MsIGlzQW5kcm9pZCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XHJcbi8vIGltcG9ydCBuYXZCb3R0b20gZnJvbSBcIi4vY3VzdG9tL25hdkJvdHRvbVwiO1xyXG5pbXBvcnQgSXRlbSBmcm9tIFwiQC9jb21wb25lbnRzL2Fkb3B0aW9uL0FuaW1hbENhcmRcIjtcclxuaW1wb3J0IENhdGVnb3J5IGZyb20gXCJAL2NvbXBvbmVudHMvYWRvcHRpb24vY2F0ZWdvcnlcIjtcclxuaW1wb3J0IEl0ZW1EZXRhaWxzIGZyb20gXCJAL2NvbXBvbmVudHMvYWRvcHRpb24vQWRvcHRpb25BbmltYWxEZXRhaWxzXCI7XHJcblxyXG5jb25zdCBnZXN0dXJlcyA9IHJlcXVpcmUoXCJ1aS9nZXN0dXJlc1wiKTtcclxuY29uc3QgYXBwID0gcmVxdWlyZShcImFwcGxpY2F0aW9uXCIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGNvbXBvbmVudHM6IHtcclxuICAgIC8vIG5hdkJvdHRvbSxcclxuICAgIEl0ZW0sXHJcbiAgICBDYXRlZ29yeVxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIGl0ZW1zQ2F0ZWdvcnkoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNhdGVnb3J5LnNsaWNlKCkucmV2ZXJzZSgpO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIG1vdW50ZWQoKSB7XHJcbiAgICAvLyBTd2lzc0FybXlLbmlmZS5zZXRBbmRyb2lkU3RhdHVzQmFyQ29sb3IoXCIjYjUxMjEzXCIpO1xyXG4gIH0sXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGxhc3REZWxZOiAwLFxyXG4gICAgICBoZWFkZXJDb2xsYXBzZWQ6IGZhbHNlLFxyXG4gICAgICBzZWxlY3RlZFRhYjogMCxcclxuICAgICAgc2VsZWN0ZWRUYWJ2aWV3OiAwLFxyXG4gICAgICBpdGVtczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiVHdpbmtpZVwiLFxyXG4gICAgICAgICAgY292ZXI6IFwifi9hc3NldHMvaW1hZ2VzL2RvZy1idXR0b24uanBnXCIsXHJcbiAgICAgICAgICBpbWFnZXM6IFtcclxuICAgICAgICAgICAgeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2JlZS5wbmdcIiB9LFxyXG4gICAgICAgICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvcGVhY29jay5wbmdcIiB9LFxyXG4gICAgICAgICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvcmF0dGxlc25ha2UucG5nXCIgfSxcclxuICAgICAgICAgICAgeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2NveW90ZS5wbmdcIiB9LFxyXG4gICAgICAgICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvbW91bnRhaW5saW9uLnBuZ1wiIH0sXHJcbiAgICAgICAgICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9vcG9zc3VtLnBuZ1wiIH1cclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgICBjYXRlZ29yeTogXCJEb2dcIixcclxuICAgICAgICAgIGNhdGVnb3J5VGFnOiBcIiMyRDlDREJcIixcclxuICAgICAgICAgIGJyZWVkX2dyb3VwOiBcIlRveVwiLFxyXG4gICAgICAgICAgcHJpbWFyeV9icmVlZDogXCJDaGlodWFodWFcIixcclxuICAgICAgICAgIGFnZTogXCI0IG1vbnRoc1wiLFxyXG4gICAgICAgICAgZ2VuZGVyOiBcIkZcIixcclxuICAgICAgICAgIGFuaW1hbF9zaXplOiBcIlNtYWxsXCIsXHJcbiAgICAgICAgICBwcmltYXJ5X2NvbG9yOiBcIlRhblwiLFxyXG4gICAgICAgICAgbG9jYXRpb246IFwiRG93bmV5XCIsXHJcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICAgIGlzRmF2b3JpdGU6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJCb29naWVcIixcclxuICAgICAgICAgIGNvdmVyOiBcIn4vYXNzZXRzL2ltYWdlcy9jYXQtcm9hbWluZy1pY29uLnBuZ1wiLFxyXG4gICAgICAgICAgaW1hZ2VzOiBbXHJcbiAgICAgICAgICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9iZWUucG5nXCIgfSxcclxuICAgICAgICAgICAgeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL3BlYWNvY2sucG5nXCIgfSxcclxuICAgICAgICAgICAgeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL3JhdHRsZXNuYWtlLnBuZ1wiIH0sXHJcbiAgICAgICAgICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9jb3lvdGUucG5nXCIgfSxcclxuICAgICAgICAgICAgeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL21vdW50YWlubGlvbi5wbmdcIiB9LFxyXG4gICAgICAgICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvb3Bvc3N1bS5wbmdcIiB9XHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgICAgY2F0ZWdvcnk6IFwiQ2F0XCIsXHJcbiAgICAgICAgICBjYXRlZ29yeVRhZzogXCIjNjEyN2FlXCIsXHJcbiAgICAgICAgICBicmVlZF9ncm91cDogXCJTaG9ydGhhaXJcIixcclxuICAgICAgICAgIHByaW1hcnlfYnJlZWQ6IFwiVGFiYnlcIixcclxuICAgICAgICAgIGFnZTogXCI2XCIsXHJcbiAgICAgICAgICBnZW5kZXI6IFwiTVwiLFxyXG4gICAgICAgICAgYW5pbWFsX3NpemU6IFwiU21hbGxcIixcclxuICAgICAgICAgIHByaW1hcnlfY29sb3I6IFwiVGFuXCIsXHJcbiAgICAgICAgICBsb2NhdGlvbjogXCJEb3duZXlcIixcclxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgaXNGYXZvcml0ZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiU25vb3B5XCIsXHJcbiAgICAgICAgICBjb3ZlcjogXCJ+L2Fzc2V0cy9pbWFnZXMvc25vb3B5LmpwZ1wiLFxyXG4gICAgICAgICAgaW1hZ2VzOiBbXHJcbiAgICAgICAgICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9iZWUucG5nXCIgfSxcclxuICAgICAgICAgICAgeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL3BlYWNvY2sucG5nXCIgfSxcclxuICAgICAgICAgICAgeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL3JhdHRsZXNuYWtlLnBuZ1wiIH0sXHJcbiAgICAgICAgICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9jb3lvdGUucG5nXCIgfSxcclxuICAgICAgICAgICAgeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL21vdW50YWlubGlvbi5wbmdcIiB9LFxyXG4gICAgICAgICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvb3Bvc3N1bS5wbmdcIiB9XHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgICAgY2F0ZWdvcnk6IFwiRG9nXCIsXHJcbiAgICAgICAgICBjYXRlZ29yeVRhZzogXCIjMjdBRTYwXCIsXHJcbiAgICAgICAgICBicmVlZF9ncm91cDogXCJIb3VuZFwiLFxyXG4gICAgICAgICAgcHJpbWFyeV9icmVlZDogXCJCZWFnbGVcIixcclxuICAgICAgICAgIGFnZTogXCIxMFwiLFxyXG4gICAgICAgICAgZ2VuZGVyOiBcIk1cIixcclxuICAgICAgICAgIGFuaW1hbF9zaXplOiBcIlNtYWxsXCIsXHJcbiAgICAgICAgICBwcmltYXJ5X2NvbG9yOiBcIlRhblwiLFxyXG4gICAgICAgICAgbG9jYXRpb246IFwiRG93bmV5XCIsXHJcbiAgICAgICAgICBpc0F2YWlsYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICBpc0Zhdm9yaXRlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJBcmlhbmFcIixcclxuICAgICAgICAgIGNvdmVyOiBcIn4vYXNzZXRzL2ltYWdlcy9jYXQtYnV0dG9uLmpwZ1wiLFxyXG4gICAgICAgICAgaW1hZ2VzOiBbXHJcbiAgICAgICAgICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9iZWUucG5nXCIgfSxcclxuICAgICAgICAgICAgeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL3BlYWNvY2sucG5nXCIgfSxcclxuICAgICAgICAgICAgeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL3JhdHRsZXNuYWtlLnBuZ1wiIH0sXHJcbiAgICAgICAgICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9jb3lvdGUucG5nXCIgfSxcclxuICAgICAgICAgICAgeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL21vdW50YWlubGlvbi5wbmdcIiB9LFxyXG4gICAgICAgICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvb3Bvc3N1bS5wbmdcIiB9XHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgICAgY2F0ZWdvcnk6IFwiQ2F0XCIsXHJcbiAgICAgICAgICBjYXRlZ29yeVRhZzogXCIjZTRjZTBkXCIsXHJcbiAgICAgICAgICBicmVlZF9ncm91cDogXCJMb25naGFpclwiLFxyXG4gICAgICAgICAgcHJpbWFyeV9icmVlZDogXCJEb21lc3RpY1wiLFxyXG4gICAgICAgICAgZ2VuZGVyOiBcIkZcIixcclxuICAgICAgICAgIGFuaW1hbF9zaXplOiBcIlNtYWxsXCIsXHJcbiAgICAgICAgICBwcmltYXJ5X2NvbG9yOiBcIkdyYXlcIixcclxuICAgICAgICAgIGxvY2F0aW9uOiBcIkRvd25leVwiLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgICBpc0Zhdm9yaXRlOiB0cnVlLFxyXG4gICAgICAgICAgYWdlOiBcIjEwIG1vbnRoc1wiLFxyXG4gICAgICAgICAgaXNGYXZvcml0ZTogZmFsc2UsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHtcclxuICAgICAgICAvLyAgIG5hbWU6IFwiTXVmZmluXCIsXHJcbiAgICAgICAgLy8gICBjb3ZlcjogXCJ+L2Fzc2V0cy9pbWFnZXMvZG9nZ28ucG5nXCIsXHJcbiAgICAgICAgLy8gICBpbWFnZXM6IFtcclxuICAgICAgICAvLyAgICAgeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2JlZS5wbmdcIiB9LFxyXG4gICAgICAgIC8vICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvcGVhY29jay5wbmdcIiB9LFxyXG4gICAgICAgIC8vICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvcmF0dGxlc25ha2UucG5nXCIgfSxcclxuICAgICAgICAvLyAgICAgeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2NveW90ZS5wbmdcIiB9LFxyXG4gICAgICAgIC8vICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvbW91bnRhaW5saW9uLnBuZ1wiIH0sXHJcbiAgICAgICAgLy8gICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9vcG9zc3VtLnBuZ1wiIH1cclxuICAgICAgICAvLyAgIF0sXHJcbiAgICAgICAgLy8gICBjYXRlZ29yeTogXCJEb2dcIixcclxuICAgICAgICAvLyAgIGNhdGVnb3J5VGFnOiBcIiMyN0FFNjBcIixcclxuICAgICAgICAvLyAgIGJyZWVkOiBcIjMwMC4wMFwiLFxyXG4gICAgICAgIC8vICAgbGlrZXM6IDczMCxcclxuICAgICAgICAvLyAgIGlzTGlrZTogdHJ1ZSxcclxuICAgICAgICAvLyAgIGlzRmF2b3JpdGU6IHRydWUsXHJcbiAgICAgICAgLy8gICBjb21tZW50czogMTEsXHJcbiAgICAgICAgLy8gICByYXRpbmc6IFwiNC4wXCIsXHJcbiAgICAgICAgLy8gICBkZXNjcmlwdGlvbjogXCJhXCJcclxuICAgICAgICAvLyB9XHJcbiAgICAgIF0sXHJcbiAgICAgIGNhdGVnb3J5OiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY292ZXI6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvYnVyZ2VyNjQwLmpwZ1wiLFxyXG4gICAgICAgICAgY2F0ZWdvcnk6IFwiQ2F0XCIsXHJcbiAgICAgICAgICBjb3VudDogXCIxM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb3ZlcjogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9wYW5jYWtlNjQwLmpwZ1wiLFxyXG4gICAgICAgICAgY2F0ZWdvcnk6IFwiRG9nXCIsXHJcbiAgICAgICAgICBjb3VudDogXCI1XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvdmVyOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2Nha2U2NDAuanBnXCIsXHJcbiAgICAgICAgICBjYXRlZ29yeTogXCJMaXZlc3RvY2tcIixcclxuICAgICAgICAgIGNvdW50OiBcIjlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY292ZXI6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvYmVlcjY0MC5qcGdcIixcclxuICAgICAgICAgIGNhdGVnb3J5OiBcIk90aGVyXCIsXHJcbiAgICAgICAgICBjb3VudDogXCI3XCJcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH07XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBzZWFyY2goKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwic2VhcmNoXCIpO1xyXG4gICAgfSxcclxuICAgIGJlbGwoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiYmVsbFwiKTtcclxuICAgIH0sXHJcbiAgICBzaG93SXRlbShwYXlsb2FkKSB7XHJcbiAgICAgIHRoaXMuJG5hdmlnYXRlVG8oSXRlbURldGFpbHMsIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgaXRlbTogcGF5bG9hZFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXHJcbiAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgbmFtZTogXCJzbGlkZVRvcFwiLFxyXG4gICAgICAgICAgZHVyYXRpb246IDM4MCxcclxuICAgICAgICAgIGN1cnZlOiBcImVhc2VJblwiXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgYWRvcHRpb25MaXN0KCkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkVGFidmlldyA9IDA7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIFRPRE86IHNob3cgZmlsdGVyXHJcbiAgICBzaG93Q2F0ZWdvcnkoKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRUYWJ2aWV3ID0gMTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGVIZWFydCgpIHtcclxuICAgIGlmIChpc0lPUykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmFuaW1hdGVGYXZvcml0ZSgpO1xyXG4gICAgICB0aGlzLml0ZW0uaXNGYXZvcml0ZSA9ICF0aGlzLml0ZW0uaXNGYXZvcml0ZTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4udGFidmlldy5hY3RpdmUge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDM7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGhlaWdodDogNTA7XHJcbn1cclxuLnRhYnZpZXdUZXh0IHtcclxuICBtYXJnaW4tdG9wOiAxNTtcclxuICBtYXJnaW4tYm90dG9tOiA1O1xyXG4gIGZvbnQtc2l6ZTogMTM7XHJcbiAgY29sb3I6ICNkOGQyZDI7XHJcbn1cclxuLnRhYnZpZXdUZXh0LmFjdGl2ZSB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBtYXJnaW4tYm90dG9tOiA1O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubmF2SWNvbiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDM7XHJcbn1cclxuXHJcbi5uYXZUYWIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDlmY2E7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuLm5hdlRhYnZpZXcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbn1cclxuXHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gIDxQYWdlIGNsYXNzPVwicGFnZVwiPlxyXG4gICAgPEFjdGlvbkJhcj5cclxuICAgICAgPE5hdmlnYXRpb25CdXR0b24gQHRhcD1cIiRuYXZpZ2F0ZUJhY2soKVwiIGFuZHJvaWQuc3lzdGVtSWNvbj1cImljX21lbnVfYmFja1wiIC8+XHJcbiAgICAgIDxMYWJlbCB0ZXh0PVwiRkFRXCIgZm9udFNpemU9XCIyMFwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgLz5cclxuICAgIDwvQWN0aW9uQmFyPlxyXG5cclxuICAgIDxTdGFja0xheW91dD5cclxuICAgICAgPFNlYXJjaEJhciB2LW1vZGVsPVwic2VhcmNoXCIgaGludD1cIkVudGVyIHRleHQuLi5cIiBAc3VibWl0PVwiY2hlY2tGYXFcIiAvPlxyXG5cclxuICAgICAgPFJhZExpc3RWaWV3IHJlZj1cImxpc3RWaWV3XCJcclxuICAgICAgICAgICAgICAgICAgIGZvcj1cImZhcSBpbiBnZXRTZWFyY2hSZXN1bHRzKHNlYXJjaClcIlxyXG4gICAgICAgICAgICAgICAgICAgcHVsbFRvUmVmcmVzaD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgQHB1bGxUb1JlZnJlc2hJbml0aWF0ZWQ9XCJvblB1bGxUb1JlZnJlc2hJbml0aWF0ZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgQGl0ZW1UYXA9XCJvbkl0ZW1UYXBcIlxyXG4gICAgICAgICAgICAgICAgICAgY2xhc3M9XCJsaXN0LWdyb3VwXCI+XHJcblxyXG4gICAgICAgIDx2LXRlbXBsYXRlPlxyXG4gICAgICAgICAgPEZhcUluZm8gOml0ZW09XCJmYXFcIiBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbS10ZXh0XCIvPlxyXG4gICAgICAgIDwvdi10ZW1wbGF0ZT5cclxuICAgICAgPC9SYWRMaXN0Vmlldz5cclxuICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IEZhcUluZm8gZnJvbSBcIkAvY29tcG9uZW50cy9zdWJsaXN0cy9GYXFJbmZvLnZ1ZVwiO1xyXG5pbXBvcnQgVGlja2V0IGZyb20gXCIuL1RpY2tldC52dWVcIjtcclxuaW1wb3J0IHsgbWFwU3RhdGUsIG1hcEFjdGlvbnMsIG1hcE11dGF0aW9ucywgbWFwR2V0dGVycyB9IGZyb20gXCJ2dWV4XCI7XHJcbmltcG9ydCBGYXEgZnJvbSBcIkAvbW9kZWxzL0ZhcVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzZWFyY2g6IFwiXCIsXHJcbiAgICAgIHRpY2tldDogVGlja2V0LFxyXG4gICAgICB0ZW1wRmFxczogW11cclxuICAgIH07XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICAuLi5tYXBBY3Rpb25zKFtcImxvYWRGYXFzXCJdKSxcclxuICAgIC4uLm1hcE11dGF0aW9ucyhbXCJzdG9yZUZhcVwiXSksXHJcbiAgICBjaGVja0ZhcSgpIHtcclxuICAgICAgLy8gaW4gdGhlIGZ1dHVyZSB0aGlzIGlzIHdoZXJlIHRvIGNoZWNrIGlmIGEgdXNlciBpcyBvbiBzaXRlLCBvdGhlcndpc2Ugbm8gdGlja2V0IG9wdGlvblxyXG4gICAgICAvLyBpZiAodGhpcy5mYXFzLmZpbHRlcihmYXEgPT4gZmFxLnF1ZXN0aW9uID09PSB0aGlzLnNlYXJjaCkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIC8vICAgdGhpcy5zdG9yZUZhcShuZXcgRmFxKHRoaXMuc2VhcmNoKSlcclxuICAgICAgLy8gICB0aGlzLiRuYXZpZ2F0ZVRvKHRoaXMudGlja2V0KVxyXG4gICAgICAvLyB9XHJcbiAgICB9LFxyXG4gICAgb25JdGVtVGFwKCkge1xyXG4gICAgICAvLyBUT0RPXHJcbiAgICB9LFxyXG4gICAgb25QdWxsVG9SZWZyZXNoSW5pdGlhdGVkKHsgb2JqZWN0IH0pIHtcclxuICAgICAgY29uc29sZS5sb2coXCJQdWxsaW5nLi4uXCIpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBvYmplY3Qubm90aWZ5UHVsbFRvUmVmcmVzaEZpbmlzaGVkKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIC4uLm1hcFN0YXRlKFtcImZhcXNcIl0pLFxyXG4gICAgLi4ubWFwR2V0dGVycyhbXCJnZXRTZWFyY2hSZXN1bHRzXCJdKVxyXG4gIH0sXHJcbiAgbW91bnRlZCgpIHtcclxuICAgIHRoaXMubG9hZEZhcXMoKTtcclxuICB9LFxyXG4gIGNvbXBvbmVudHM6IHtcclxuICAgIFRpY2tldCxcclxuICAgIEZhcUluZm9cclxuICB9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxyXG4gIEBpbXBvcnQgJy4uL0FuaW1hbENlbnRlcic7XHJcblxyXG5BY3Rpb25CYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDlmY2E7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5tZXNzYWdlIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDIwO1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcblxyXG4uZmFxX3F1ZXN0aW9uIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDIwO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4uZmFxX2Fuc3dlciB7XHJcbiAgY29sb3I6ICM0NTQ1NDU7XHJcbn1cclxuXHJcbi5saXN0LWdyb3VwLWl0ZW0tdGV4dCB7XHJcbiAgbWFyZ2luOiA3IDg7XHJcbn1cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgPFBhZ2UgPlxyXG4gICAgPEFjdGlvbkJhciBpb3MucG9zaXRpb249XCJsZWZ0XCIgY2xhc3M9XCJBY3Rpb25fQmFyXCI+XHJcbiAgICAgIDxMYWJlbCB0ZXh0PVwiV2VsY29tZVwiIGZvbnRTaXplPVwiMjBcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiLz5cclxuICAgICAgPEFjdGlvbkl0ZW0gQHRhcD1cInRvRmFxXCIgaW9zLnN5c3RlbUljb249XCIxMlwiIGlvcy5wb3NpdGlvbj1cInJpZ2h0XCIgYW5kcm9pZC5zeXN0ZW1JY29uPVwiaWNfbWVudV9zZWFyY2hcIiBhbmRyb2lkLnBvc2l0aW9uPVwiYWN0aW9uQmFyXCIgLz5cclxuICAgIDwvQWN0aW9uQmFyPlxyXG5cclxuICAgIDxTdGFja0xheW91dCBiYWNrZ3JvdW5kQ29sb3I9XCIjYjIxYTgyXCI+XHJcblxyXG4gICAgICA8R3JpZExheW91dCBjbGFzcz1cImxheW91dCBjb3ZlclwiIGNvbHVtbnM9XCIqLCpcIiByb3dzPVwiKiwqLCpcIj5cclxuICAgICAgICA8IS0tQWRvcHRpb24gLS0+XHJcbiAgICAgICAgPENhdGVnb3J5QnV0dG9uIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgbWFyZ2luPVwiNVwiIHJvdz1cIjBcIiBjb2w9XCIwXCIgc3JjPVwifi9hc3NldHMvaW1hZ2VzL2FuaW1hbHMuaWNvbi5wbmdcIiA6aWNvbj1cIicnXCJcclxuICAgICAgICA6dGl0bGU9XCJ0aXRsZXNbMF1cIiA6YWN0aW9uPVwidG9BZG9wdGlvblwiIGNsYXNzPVwiaG9tZXBhZ2UtYmx1ZSBIb21lQnV0dG9uXCIgdGV4dFdyYXA9XCJ0cnVlXCIvPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgPCEtLVNlcnZpY2UgUmVxdWVzdCAtLT5cclxuICAgICAgICA8Q2F0ZWdvcnlCdXR0b24gdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiAgbWFyZ2luPVwiNVwiIHJvdz1cIjFcIiBjb2w9XCIwXCIgc3JjPVwifi9hc3NldHMvaW1hZ2VzL3NlcnZpY2VzLmljb24ucG5nXCIgOmljb249XCInJ1wiXHJcbiAgICAgICAgOnRpdGxlPVwidGl0bGVzWzJdXCIgOmFjdGlvbj1cInRvU2VydmljZVJlcXVlc3RcIiBjbGFzcz1cImhvbWVwYWdlLWJsdWUgSG9tZUJ1dHRvblwiIHRleHRXcmFwPVwidHJ1ZVwiLz5cclxuICAgICAgICAgXHJcbiAgICAgICAgPCEtLUZBUSAtLT5cclxuICAgICAgICA8Q2F0ZWdvcnlCdXR0b24gdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiAgbWFyZ2luPVwiNVwiIHJvdz1cIjBcIiBjb2w9XCIxXCIgc3JjPVwifi9hc3NldHMvaW1hZ2VzL25vaXNlLmljb24ucG5nXCIgOmljb249XCInJ1wiXHJcbiAgICAgICAgOnRpdGxlPVwidGl0bGVzWzNdXCIgOmFjdGlvbj1cInRvRmFxXCIgY2xhc3M9XCJob21lcGFnZS1ibHVlIEhvbWVCdXR0b25cIiB0ZXh0V3JhcD1cInRydWVcIi8+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPCEtLVRpY2tldCAtLT5cclxuICAgICAgICA8Q2F0ZWdvcnlCdXR0b24gdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiAgbWFyZ2luPVwiNVwiIHJvdz1cIjJcIiBjb2w9XCIwXCIgc3JjPVwifi9hc3NldHMvaW1hZ2VzL2hvdXJzaWNvbi5wbmdcIiBcclxuICAgICAgICA6aWNvbj1cIidmYS1tYXAtbWFya2VyJyB8IGZvbnRpY29uXCIgOnRpdGxlPVwidGl0bGVzWzRdXCIgOmFjdGlvbj1cInRvUVJTY2FubmVyXCIgY2xhc3M9XCJmYSBob21lcGFnZS1ibHVlIEhvbWVCdXR0b25cIiB0ZXh0V3JhcD1cInRydWVcIi8+XHJcbiAgICAgICBcclxuICAgICAgICA8IS0tRmluZCBhIExvY2F0aW9uIC0tPlxyXG4gICAgICAgIDxDYXRlZ29yeUJ1dHRvbiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiIG1hcmdpbj1cIjVcIiByb3c9XCIxXCIgY29sPVwiMVwiIHNyYz1cIn4vYXNzZXRzL2ltYWdlcy9sb2NhdGlvbmljb24ucG5nXCIgOmljb249XCInJ1wiXHJcbiAgICAgICAgOnRpdGxlPVwidGl0bGVzWzVdXCIgOmFjdGlvbj1cInRvTG9jYXRpb25MaXN0XCIgY2xhc3M9XCJob21lcGFnZS1ibHVlIEhvbWVCdXR0b25cIiB0ZXh0V3JhcD1cInRydWVcIi8+XHJcbiAgICAgIFxyXG4gICAgICA8L0dyaWRMYXlvdXQ+XHJcblxyXG4gICAgPC9TdGFja0xheW91dD5cclxuICAgIFxyXG4gIDwvUGFnZT5cclxuICBcclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBDYXRlZ29yeUJ1dHRvbiBmcm9tIFwiQC9jb21wb25lbnRzL2J1dHRvbnMvQ2F0ZWdvcnlCdXR0b24udnVlXCJcclxuaW1wb3J0IEZhcSBmcm9tIFwiLi9GYXEudnVlXCJcclxuaW1wb3J0IExvY2F0aW9uIGZyb20gXCIuL0xvY2F0aW9uLnZ1ZVwiXHJcbmltcG9ydCBRUlNjYW5uZXIgZnJvbSBcIi4vVGlja2V0T3B0aW9ucy52dWVcIlxyXG5pbXBvcnQgQWRvcHRpb24gZnJvbSBcIi4vQWRvcHRpb24udnVlXCJcclxuaW1wb3J0IFNlcnZpY2VSZXF1ZXN0IGZyb20gXCIuL1NlcnZpY2VSZXF1ZXN0LnZ1ZVwiXHJcbmltcG9ydCB7IG1hcFN0YXRlLCBtYXBBY3Rpb25zLCBtYXBNdXRhdGlvbnMgfSBmcm9tIFwidnVleFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGFjdGlvbkJhcjogXCJXZWxjb21lXCIsXHJcbiAgICAgIG1zZzogXCJIZWxsbyBXb3JsZCFcIixcclxuICAgICAgdGl0bGVzOiBbXHJcbiAgICAgICAgXCJBZG9wdCBhbiBBbmltYWwhXCIsXHJcbiAgICAgICAgXCJTZXJ2aWNlcyAmIEZlZXNcIixcclxuICAgICAgICBcIlNlcnZpY2UgUmVxdWVzdFwiLFxyXG4gICAgICAgIFwiRkFRXCIsXHJcbiAgICAgICAgXCJHcmFiIGEgVGlja2V0IVwiLFxyXG4gICAgICAgIFwiRmluZCBPdXIgTG9jYXRpb25cIlxyXG4gICAgICBdLFxyXG4gICAgICB0ZXh0V3JhcDogZmFsc2UsXHJcbiAgICAgIC8vc2VhcmNoOiBcInRoaXMgd2lsbCBjaGFuZ2UgYXMgeW91IHR5cGVcIixcclxuICAgICAgcmVzdWx0czogW10sXHJcbiAgICAgIHBvbGxpbmc6IHVuZGVmaW5lZCxcclxuICAgICAgZmFxOiBGYXEsXHJcbiAgICAgIGxvY2F0aW9uOiBMb2NhdGlvbixcclxuICAgICAgcXJTY2FubmVyOiBRUlNjYW5uZXIsXHJcbiAgICAgIGFkb3B0aW9uOiBBZG9wdGlvbixcclxuICAgICAgc2VydmljZVJlcXVlc3Q6IFNlcnZpY2VSZXF1ZXN0LFxyXG5cclxuICAgIH07XHJcbiAgfSxcclxuXHJcbiAgY29tcHV0ZWQ6IG1hcFN0YXRlKFsnYXBwcm92ZWRUaWNrZXQnXSksXHJcblxyXG4gIG1ldGhvZHM6IHtcclxuICAgIC4uLm1hcEFjdGlvbnMoWydjaGVja1RpY2tldCddKSxcclxuICAgIC4uLm1hcE11dGF0aW9ucyhbJ1NFVF9USUNLRVQnXSksXHJcbiAgICB0b0xvY2F0aW9uTGlzdCgpIHtcclxuICAgICAgdGhpcy4kbmF2aWdhdGVUbyh0aGlzLmxvY2F0aW9uLCB7XHJcbiAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXHJcbiAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgbmFtZTogXCJzbGlkZVwiLFxyXG4gICAgICAgICAgZHVyYXRpb246IDM4MCxcclxuICAgICAgICAgIGN1cnZlOiBcImVhc2VJblwiXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICB0b0ZhcSgpIHtcclxuICAgICAgdGhpcy4kbmF2aWdhdGVUbyh0aGlzLmZhcSwge1xyXG4gICAgICAgIGFuaW1hdGVkOiB0cnVlLFxyXG4gICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgIG5hbWU6IFwic2xpZGVcIixcclxuICAgICAgICAgIGR1cmF0aW9uOiAzODAsXHJcbiAgICAgICAgICBjdXJ2ZTogXCJlYXNlSW5cIlxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgdG9RUlNjYW5uZXIgKCkge1xyXG4gICAgICBpZiAodHlwZW9mIHRoaXMuYXBwcm92ZWRUaWNrZXQgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXBwcm92ZWRUaWNrZXQuaGFzT3duUHJvcGVydHkoJ3dpbmRvdycpKSB7XHJcbiAgICAgICAgICBhbGVydCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkFjY2VzcyBEZW5pZWRcIixcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJZb3UgY2Fubm90IHN1Ym1pdCBhbm90aGVyIHRpY2tldC5cIixcclxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuJG5hdmlnYXRlVG8odGhpcy5xclNjYW5uZXIsIHtcclxuICAgICAgICAgIGFuaW1hdGVkOiB0cnVlLFxyXG4gICAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICBuYW1lOiBcInNsaWRlXCIsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAzODAsXHJcbiAgICAgICAgICAgIGN1cnZlOiBcImVhc2VJblwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB0b0Fkb3B0aW9uICgpIHtcclxuICAgICAgdGhpcy4kbmF2aWdhdGVUbyh0aGlzLmFkb3B0aW9uLCB7XHJcbiAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXHJcbiAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgbmFtZTogXCJzbGlkZVwiLFxyXG4gICAgICAgICAgZHVyYXRpb246IDM4MCxcclxuICAgICAgICAgIGN1cnZlOiBcImVhc2VJblwiXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICB0b1NlcnZpY2VSZXF1ZXN0ICgpIHtcclxuICAgICAgdGhpcy4kbmF2aWdhdGVUbyh0aGlzLnNlcnZpY2VSZXF1ZXN0LCB7XHJcbiAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXHJcbiAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgbmFtZTogXCJzbGlkZVwiLFxyXG4gICAgICAgICAgZHVyYXRpb246IDM4MCxcclxuICAgICAgICAgIGN1cnZlOiBcImVhc2VJblwiXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBwb2xsRGF0YSgpIHtcclxuICAgICAgdGhpcy5wb2xsaW5nID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIC8vIENoZWNrIGlmIHRpY2tldCBpcyBjb21wbGV0ZSBldmVyeSBYIHNlY29uZHNcclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuYXBwcm92ZWRUaWNrZXQgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5hcHByb3ZlZFRpY2tldC5oYXNPd25Qcm9wZXJ0eSgnbnVtYmVyJykpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5hcHByb3ZlZFRpY2tldC5udW1iZXIsIHRoaXMuYXBwcm92ZWRUaWNrZXQuaXNDb21wbGV0ZSlcclxuICAgICAgICAgICAgaWYgKHRoaXMuYXBwcm92ZWRUaWNrZXQuaXNDb21wbGV0ZSkge1xyXG4gICAgICAgICAgICAgIHRoaXMuU0VUX1RJQ0tFVCh1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgYWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiVGhhbmsgWW91XCIsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIllvdXIgdGlja2V0IGhhcyBiZWVuIHNlcnZlZC4gSGF2ZSBhIG5pY2UgZGF5IVwiLFxyXG4gICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHRoaXMuY2hlY2tUaWNrZXQodGhpcy5hcHByb3ZlZFRpY2tldC5pZClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSwgNTAwMClcclxuICAgIH1cclxuXHJcbiAgfSxcclxuXHJcbiAgbW91bnRlZCgpIHtcclxuICAgIHRoaXMucG9sbERhdGEoKVxyXG4gIH0sXHJcblxyXG4gIGJlZm9yZURlc3Ryb3koKSB7XHJcbiAgICBjbGVhckludGVydmFsKHRoaXMucG9sbGluZylcclxuICB9LFxyXG5cclxuICBjb21wb25lbnRzOiB7XHJcbiAgICBDYXRlZ29yeUJ1dHRvbixcclxuICAgIEZhcVxyXG4gIH1cclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkIGxhbmcgPVwic2Nzc1wiPlxyXG5AaW1wb3J0IFwiLi4vQW5pbWFsQ2VudGVyXCI7XHJcblxyXG4uQWN0aW9uX0JhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOWZjYTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLlNfQmFyIHtcclxuICBjb2xvcjogIzA1MDUwNTtcclxufVxyXG5cclxuLlNfQnV0dG9uIHtcclxuICAvKiB0ZXh0PVwicmlnaHRcIjsgXHJcbiAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudD1cInJpZ2h0XCI7XHJcbiAgICAgICAgd2lkdGg9XCIzMyVcIiBcclxuICAgICAgICBoZWlnaHQ9XCI3MFwiIFxyXG4gICAgICAgIC8qYmFja2dyb3VuZENvbG9yPVwiIzFjNmI0OFwiLz4qL1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIn4vYXNzZXRzL2ltYWdlcy9OYXRpdmVTY3JpcHQtVnVlLnBuZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbiAgLmNvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcGx1bSwgIzAwOWZjYSlcclxufVxyXG5cclxuLmhvbWVwYWdlLWJsdWUge1xyXG4gIGNvbG9yOiAkaG9tZXBhZ2UtYmx1ZTtcclxufVxyXG5cclxuLkFjdGlvbl9UZXh0IHtcclxuICBtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5Ib21lQnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1O1xyXG4gIGZvbnQtc2l6ZTogMTQlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBhZGRpbmctdG9wOiA3ZW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbn1cclxuXHJcbi5sYXlvdXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XHJcbn1cclxuXHJcbi5tZXNzYWdlIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDIwO1xyXG4gIGNvbG9yOiAjMjUyNTI1O1xyXG59XHJcbjwvc3R5bGU+XHJcblxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgICA8UGFnZSBjbGFzcz1cInBhZ2VcIj5cclxuICAgICAgICA8QWN0aW9uQmFyIGNsYXNzPVwiYWN0aW9uLWJhclwiPlxyXG4gICAgICAgICAgPE5hdmlnYXRpb25CdXR0b24gQHRhcD1cIiRuYXZpZ2F0ZUJhY2soKVwiIGFuZHJvaWQuc3lzdGVtSWNvbj1cImljX21lbnVfYmFja1wiIC8+XHJcbiAgICAgICAgICA8TGFiZWwgdGV4dD1cIkFuaW1hbCBDYXJlIENlbnRlcnNcIiBmb250U2l6ZT1cIjIwXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIj48L0xhYmVsPlxyXG4gICAgICAgIDwvQWN0aW9uQmFyPlxyXG5cclxuXHJcbiAgICAgICAgPFN0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICA8IS0tZ2V0IGRpc3RhbmNlIGJ0biAtLT5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gY2xhc3M9XCJmYSBncHMtYnV0dG9uXCIgOmljb249XCInZmEtc29ydC1hbW91bnQtYXNjJyB8IGZvbnRpY29uXCIgdGl0bGU9XCJHZXQgQ2xvc2VzdCBBbmltYWwgQ2VudGVyXCIgOmFjdGlvbj1cImJ1dHRvbkdldERpc3RhbmNlVG9DYXJlQ2VudGVyc1RhcFwiLz5cclxuXHJcbiAgICAgICAgICAgIDxSYWRMaXN0VmlldyByb3c9XCIyXCIgZm9yPVwibG9jYXRpb24gaW4gY2VudGVyTG9jYXRpb25zXCIgQGl0ZW1UYXA9XCJvbkl0ZW1UYXBcIiBjbGFzcz1cImxpc3QtZ3JvdXBcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHYtdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8IS0tIGNhcmQgY29udGFpbnRlciAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCByb3dzPVwiKiwgKiwgKiwgKlwiIGNvbHVtbnM9XCIqLCAqXCIgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0tY29udGVudFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIG5hbWUgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwibG9jYXRpb24ubmFtZVwiIGNsYXNzPVwiaG9tZXBhZ2UtYmx1ZSB0ZXh0LXByaW1hcnkgbGlzdC1ncm91cC1pdGVtLXRleHQgZm9udC13ZWlnaHQtYm9sZFwiLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBkaXN0YW5jZSAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVwiMVwiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJyaWdodFwiIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtLXRleHQgbS1yLTUgdGV4dC1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIDp0ZXh0PVwiJ34nKyBsb2NhdGlvbi5kaXN0YW5jZSArICdtaSdcIi8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjFcIiBjbGFzcz1cImhyLWxpZ2h0IG0tdC01IG0tYi01XCIgY29sU3Bhbj1cIjJcIi8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSByb3c9XCIyXCIgOnNyYz1cImxvY2F0aW9uLmltYWdlVVJMXCIgc3RyZXRjaD1cImFzcGVjdEZpdFwiIGhlaWdodD1cIjEyMFwiIGNsYXNzPVwibS1yLTIwXCIgbG9hZE1vZGU9XCJhc3luY1wiLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cIjJcIiBjb2w9XCIxXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbS10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCByb3dzPVwiKiwgKlwiIGNvbHVtbnM9XCIqLCA0KlwiPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLWFkZHJlc3MgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIwXCIgY29sPVwiMFwiIHRleHRXcmFwPVwidHJ1ZVwiIGNsYXNzPVwicC1iLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nIGlvcy5mb250RmFtaWx5PVwic3lzdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIDp0ZXh0PVwiJ2ZhLW1hcC1tYXJrZXInIHwgZm9udGljb25cIiBjbGFzcz1cImZhXCI+PC9TcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIwXCIgY29sPVwiMVwiIHRleHRXcmFwPVwidHJ1ZVwiIGNsYXNzPVwicC1iLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nIGlvcy5mb250RmFtaWx5PVwic3lzdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIDp0ZXh0PVwibG9jYXRpb24uYWRkcmVzc1wiICBjbGFzcz1cInRleHQtcHJpbWFyeVwiPjwvU3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC0tPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBwaG9uZSBudW1iZXItLT4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIxXCIgY29sPVwiMFwiIHRleHRXcmFwPVwidHJ1ZVwiIGNsYXNzPVwicC1iLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nIGlvcy5mb250RmFtaWx5PVwic3lzdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gOnRleHQ9XCInZmEtcGhvbmUnIHwgZm9udGljb25cIiBjbGFzcz1cImZhIGljb25cIj48L1NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjFcIiBjb2w9XCIxXCIgdGV4dFdyYXA9XCJ0cnVlXCIgY2xhc3M9XCJwLWItMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmcgaW9zLmZvbnRGYW1pbHk9XCJzeXN0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiA6dGV4dD1cImxvY2F0aW9uLnBob25lXCIgY2xhc3M9XCJcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwicC1iLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nIGlvcy5mb250RmFtaWx5PVwic3lzdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cIlwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC0tPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cclxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8L3YtdGVtcGxhdGU+XHJcblxyXG4gICAgICAgICAgICA8L1JhZExpc3RWaWV3PlxyXG48L1N0YWNrTGF5b3V0PlxyXG4gICAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuLy8gLS0tcGx1Z2lucy0tLVxyXG4vLyBnZW9sb2NhdGlvblxyXG5pbXBvcnQgKiBhcyBnZW9sb2NhdGlvbiBmcm9tIFwibmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uXCI7XHJcbmltcG9ydCB7IEFjY3VyYWN5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZW51bXNcIjtcclxuXHJcbi8vIHRvYXN0XHJcbmNvbnN0IFRvYXN0ID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC10b2FzdHNcIik7XHJcbi8vLS0tLS0tLVxyXG5cclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQC9jb21wb25lbnRzL2J1dHRvbnMvSWNvbkJ1dHRvbi52dWVcIlxyXG5cclxuaW1wb3J0IEFuaW1hbENlbnRlckRldGFpbHMgZnJvbSBcIkAvY29tcG9uZW50cy9sb2NhdGlvbi9BbmltYWxDZW50ZXJEZXRhaWxzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC8vVE9ETzogU3RvcmUgaGFyZGNvZGVkIGNlbnRlcmxvY2F0aW9uc1xyXG4gICAgICBjZW50ZXJMb2NhdGlvbnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIkFnb3VyYVwiLFxyXG4gICAgICAgICAgYWRkcmVzczogXCIyOTUyNSBBZ291cmEgUm9hZCwgQWdvdXJhLCBDQSA5MTMwMVwiLFxyXG4gICAgICAgICAgcGhvbmU6IFwiKDgxOCkgOTkxLTAwNzFcIixcclxuICAgICAgICAgIGF2YWlsYWJpbGl0eToge1xyXG4gICAgICAgICAgICB3ZWVrZGF5OiBcIk1vbmRheS1UaHVyc2RheVwiLFxyXG4gICAgICAgICAgICB3ZWVrZW5kOiBcIkZyaWRheS1TdW5kYXlcIixcclxuICAgICAgICAgICAgd2Vla2RheWhvdXJzOiBcIjEyOjAwIHAubS4gLSA3OjAwIHAubVwiLFxyXG4gICAgICAgICAgICB3ZWVrZW5kaG91cnM6IFwiMTA6MDAgYS5tLiAtIDU6MDAgcC5tXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBsYXRpdHVkZTogMzQuMTQ2MDE1LFxyXG4gICAgICAgICAgbG9uZ2l0dWRlOiAtMTE4Ljc2OTQyMSxcclxuICAgICAgICAgIGRpc3RhbmNlOiBcIlwiLFxyXG4gICAgICAgICAgaW1hZ2VVUkw6IFwifi9hc3NldHMvaW1hZ2VzL2FjaG91c2UucG5nXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiQmFsZHdpbiBQYXJrXCIsXHJcbiAgICAgICAgICBhZGRyZXNzOiBcIjQyNzUgTm9ydGggRWx0b24gU3RyZWV0LCBCYWxkd2luIFBhcmssIENBIDkxNzA2XCIsXHJcbiAgICAgICAgICBwaG9uZTogXCIoNjI2KSA5NjItMzU3N1wiLFxyXG4gICAgICAgICAgYXZhaWxhYmlsaXR5OiB7XHJcbiAgICAgICAgICAgIHdlZWtkYXk6IFwiTW9uZGF5LVRodXJzZGF5XCIsXHJcbiAgICAgICAgICAgIHdlZWtlbmQ6IFwiRnJpZGF5LVN1bmRheVwiLFxyXG4gICAgICAgICAgICB3ZWVrZGF5aG91cnM6IFwiMTI6MDAgcC5tLiAtIDc6MDAgcC5tXCIsXHJcbiAgICAgICAgICAgIHdlZWtlbmRob3VyczogXCIxMDowMCBhLm0uIC0gNTowMCBwLm1cIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGxhdGl0dWRlOiAzNC4wOTEzNjIsXHJcbiAgICAgICAgICBsb25naXR1ZGU6IC0xMTcuOTUxMTA1LFxyXG4gICAgICAgICAgZGlzdGFuY2U6IFwiXCIsXHJcbiAgICAgICAgICBpbWFnZVVSTDogXCJ+L2Fzc2V0cy9pbWFnZXMvYWNob3VzZS5wbmdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJDYXJzb24vR2FyZGVuYVwiLFxyXG4gICAgICAgICAgYWRkcmVzczogXCIyMTYgVy4gVmljdG9yaWEgU3RyZWV0LCBHYXJkZW5hIENBIDkwMjQ4XCIsXHJcbiAgICAgICAgICBwaG9uZTogXCIoMzEwKSA1MjMtOTU2NlwiLFxyXG4gICAgICAgICAgYXZhaWxhYmlsaXR5OiB7XHJcbiAgICAgICAgICAgIHdlZWtkYXk6IFwiTW9uZGF5LVRodXJzZGF5XCIsXHJcbiAgICAgICAgICAgIHdlZWtlbmQ6IFwiRnJpZGF5LVN1bmRheVwiLFxyXG4gICAgICAgICAgICB3ZWVrZGF5aG91cnM6IFwiMTI6MDAgcC5tLiAtIDc6MDAgcC5tXCIsXHJcbiAgICAgICAgICAgIHdlZWtlbmRob3VyczogXCIxMDowMCBhLm0uIC0gNTowMCBwLm1cIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGxhdGl0dWRlOiAzMy44NjQzNTUsXHJcbiAgICAgICAgICBsb25naXR1ZGU6IC0xMTguMjc3NDE0LFxyXG4gICAgICAgICAgZGlzdGFuY2U6IFwiXCIsXHJcbiAgICAgICAgICBpbWFnZVVSTDogXCJ+L2Fzc2V0cy9pbWFnZXMvYWNob3VzZS5wbmdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJDYXN0YWljXCIsXHJcbiAgICAgICAgICBhZGRyZXNzOiBcIjMxMDQ0IE5vcnRoIENoYXJsaWUgQ2FueW9uIFJvYWQsIENhc3RhaWMsIENBIDkxMzg0XCIsXHJcbiAgICAgICAgICBwaG9uZTogXCIoNjYxKSAyNTctMzE5MVwiLFxyXG4gICAgICAgICAgYXZhaWxhYmlsaXR5OiB7XHJcbiAgICAgICAgICAgIHdlZWtkYXk6IFwiTW9uZGF5LVRodXJzZGF5XCIsXHJcbiAgICAgICAgICAgIHdlZWtlbmQ6IFwiRnJpZGF5LVN1bmRheVwiLFxyXG4gICAgICAgICAgICB3ZWVrZGF5aG91cnM6IFwiMTI6MDAgcC5tLiAtIDc6MDAgcC5tXCIsXHJcbiAgICAgICAgICAgIHdlZWtlbmRob3VyczogXCIxMDowMCBhLm0uIC0gNTowMCBwLm1cIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGxhdGl0dWRlOiAzNC40ODI4OTksXHJcbiAgICAgICAgICBsb25naXR1ZGU6IC0xMTguNjA4Mzg2LFxyXG4gICAgICAgICAgZGlzdGFuY2U6IFwiXCIsXHJcbiAgICAgICAgICBpbWFnZVVSTDogXCJ+L2Fzc2V0cy9pbWFnZXMvYWNob3VzZS5wbmdcIlxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiRG93bmV5XCIsXHJcbiAgICAgICAgICBhZGRyZXNzOiBcIjExMjU4IFNvdXRoIEdhcmZpZWxkIEF2ZW51ZSwgRG93bmV5LCBDQSA5MDI0MlwiLFxyXG4gICAgICAgICAgcGhvbmU6IFwiKDU2MikgOTQwLTY4OThcIixcclxuICAgICAgICAgIGF2YWlsYWJpbGl0eToge1xyXG4gICAgICAgICAgICB3ZWVrZGF5OiBcIk1vbmRheS1UaHVyc2RheVwiLFxyXG4gICAgICAgICAgICB3ZWVrZW5kOiBcIkZyaWRheS1TdW5kYXlcIixcclxuICAgICAgICAgICAgd2Vla2RheWhvdXJzOiBcIjEyOjAwIHAubS4gLSA3OjAwIHAubVwiLFxyXG4gICAgICAgICAgICB3ZWVrZW5kaG91cnM6IFwiMTA6MDAgYS5tLiAtIDU6MDAgcC5tXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBsYXRpdHVkZTogMzMuOTM2NTYsXHJcbiAgICAgICAgICBsb25naXR1ZGU6IC0xMTguMTMzODcsXHJcbiAgICAgICAgICBkaXN0YW5jZTogXCJcIixcclxuICAgICAgICAgIGltYWdlVVJMOiBcIn4vYXNzZXRzL2ltYWdlcy9hY2hvdXNlLnBuZ1wiXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJMYW5jYXN0ZXJcIixcclxuICAgICAgICAgIGFkZHJlc3M6IFwiNTIxMCBXZXN0IEF2ZW51ZSBJLCBMYW5jYXN0ZXIsIENBIDkzNTM2XCIsXHJcbiAgICAgICAgICBwaG9uZTogXCIoNjYxKSA5NDAtNDE5MVwiLFxyXG4gICAgICAgICAgYXZhaWxhYmlsaXR5OiB7XHJcbiAgICAgICAgICAgIHdlZWtkYXk6IFwiTW9uZGF5LVRodXJzZGF5XCIsXHJcbiAgICAgICAgICAgIHdlZWtlbmQ6IFwiRnJpZGF5LVN1bmRheVwiLFxyXG4gICAgICAgICAgICB3ZWVrZGF5aG91cnM6IFwiMTI6MDAgcC5tLiAtIDc6MDAgcC5tXCIsXHJcbiAgICAgICAgICAgIHdlZWtlbmRob3VyczogXCIxMDowMCBhLm0uIC0gNTowMCBwLm1cIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGxhdGl0dWRlOiAzNC43MDMyMzksXHJcbiAgICAgICAgICBsb25naXR1ZGU6IC0xMTguMjIyNjUsXHJcbiAgICAgICAgICBkaXN0YW5jZTogXCJcIixcclxuICAgICAgICAgIGltYWdlVVJMOiBcIn4vYXNzZXRzL2ltYWdlcy9hY2hvdXNlLnBuZ1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIlBhbG1kYWxlXCIsXHJcbiAgICAgICAgICBhZGRyZXNzOiBcIjM4NTUwIFNpZXJyYSBIaWdod2F5LCBQYWxtZGFsZSwgQ0EgOTM1NTBcIixcclxuICAgICAgICAgIHBob25lOiBcIig2NjEpIDU3NS0yODg4XCIsXHJcbiAgICAgICAgICBhdmFpbGFiaWxpdHk6IHtcclxuICAgICAgICAgICAgd2Vla2RheTogXCJNb25kYXktVGh1cnNkYXlcIixcclxuICAgICAgICAgICAgd2Vla2VuZDogXCJGcmlkYXktU3VuZGF5XCIsXHJcbiAgICAgICAgICAgIHdlZWtkYXlob3VyczogXCIxMjowMCBwLm0uIC0gNzowMCBwLm1cIixcclxuICAgICAgICAgICAgd2Vla2VuZGhvdXJzOiBcIjEwOjAwIGEubS4gLSA1OjAwIHAubVwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgbGF0aXR1ZGU6IDM0LjU4MjYsXHJcbiAgICAgICAgICBsb25naXR1ZGU6IC0xMTguMTE3MSxcclxuICAgICAgICAgIGRpc3RhbmNlOiBcIlwiLFxyXG4gICAgICAgICAgaW1hZ2VVUkw6IFwifi9hc3NldHMvaW1hZ2VzL2FjaG91c2UucG5nXCJcclxuICAgICAgICB9XHJcbiAgICAgIF0sXHJcbiAgICAgIGN1cnJlbnRMb2M6IHt9IC8vIGN1cnJlbnQgbG9jYXRpb24gb2JqXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgY29tcG9uZW50czoge1xyXG4gICAgSWNvbkJ1dHRvblxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIGNlbnRlckxpc3QoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmJ1dHRvbkdldExvY2F0aW9uVGFwO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGVuYWJsZUxvY2F0aW9uVGFwOiBmdW5jdGlvbigpIHtcclxuICAgICAgZ2VvbG9jYXRpb24uaXNFbmFibGVkKCkudGhlbihcclxuICAgICAgICBmdW5jdGlvbihpc0VuYWJsZWQpIHtcclxuICAgICAgICAgIGlmICghaXNFbmFibGVkKSB7XHJcbiAgICAgICAgICAgIGdlb2xvY2F0aW9uLmVuYWJsZUxvY2F0aW9uUmVxdWVzdCgpLnRoZW4oXHJcbiAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7fSxcclxuICAgICAgICAgICAgICBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIChlLm1lc3NhZ2UgfHwgZSkpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiICsgKGUubWVzc2FnZSB8fCBlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfSxcclxuICAgIC8vIFRPRE86IG9wdGltaXplOyB0aGlzIHNob3VsZCBiZSBhbHJlYWR5IGNvbXB1dGVkIGJlZm9yZSBjbGlja2luZyBidXR0b25cclxuICAgIGJ1dHRvbkdldERpc3RhbmNlVG9DYXJlQ2VudGVyc1RhcDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgIFwiYnV0dG9uR2V0RGlzdGFuY2VUb0NhcmVDZW50ZXJzVGFwKCksIGdldHRpbmcgbGlzdCBvZiBhbmltYWwgY2FyZSBjZW50ZXJzOyBzb3J0ZWQgYnkgZGlzdGFuY2VcIlxyXG4gICAgICApO1xyXG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgICBjb25zdCBtZXRlcnNUb01pbGVzQ29udmVyc2lvblJhdGUgPSAxNjA5LjM0NDtcclxuXHJcbiAgICAgIGdlb2xvY2F0aW9uXHJcbiAgICAgICAgLmdldEN1cnJlbnRMb2NhdGlvbih7XHJcbiAgICAgICAgICBkZXNpcmVkQWNjdXJhY3k6IEFjY3VyYWN5LmFueSxcclxuICAgICAgICAgIG1heGltdW1BZ2U6IDUwMDAsXHJcbiAgICAgICAgICB0aW1lb3V0OiAxMDAwMFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oXHJcbiAgICAgICAgICBmdW5jdGlvbihsb2MpIHtcclxuICAgICAgICAgICAgaWYgKGxvYykge1xyXG4gICAgICAgICAgICAgIC8vZ2V0IGN1cnJlbnQgbG9jYXRpb25cclxuICAgICAgICAgICAgICB0aGF0LmN1cnJlbnRMb2MubGF0aXR1ZGUgPSBwYXJzZUZsb2F0KGxvYy5sYXRpdHVkZSk7XHJcbiAgICAgICAgICAgICAgdGhhdC5jdXJyZW50TG9jLmxvbmdpdHVkZSA9IHBhcnNlRmxvYXQobG9jLmxvbmdpdHVkZSk7XHJcblxyXG4gICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhhdC5jZW50ZXJMb2NhdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNlbnRlckxvYyA9IHRoYXQuY2VudGVyTG9jYXRpb25zW2ldO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGNhbGMgZGlzdGFuY2UgZm9yZWFjaCBhbmltYWwgc2hlbHRlclxyXG4gICAgICAgICAgICAgICAgY2VudGVyTG9jLmRpc3RhbmNlID1cclxuICAgICAgICAgICAgICAgICAgZ2VvbG9jYXRpb24uZGlzdGFuY2UoXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGF0aXR1ZGU6IHRoYXQuY3VycmVudExvYy5sYXRpdHVkZSxcclxuICAgICAgICAgICAgICAgICAgICAgIGxvbmdpdHVkZTogdGhhdC5jdXJyZW50TG9jLmxvbmdpdHVkZVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGF0aXR1ZGU6IGNlbnRlckxvYy5sYXRpdHVkZSxcclxuICAgICAgICAgICAgICAgICAgICAgIGxvbmdpdHVkZTogY2VudGVyTG9jLmxvbmdpdHVkZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgKSAvIG1ldGVyc1RvTWlsZXNDb252ZXJzaW9uUmF0ZTsgLy8gZGl2aWRlIGJ5IGNvbnZlcnNpb24gcmF0ZVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIHJvdW5kIGRpc3RhbmNlXHJcbiAgICAgICAgICAgICAgICBjZW50ZXJMb2MuZGlzdGFuY2UgPSBOdW1iZXIoXHJcbiAgICAgICAgICAgICAgICAgIE1hdGgucm91bmQoY2VudGVyTG9jLmRpc3RhbmNlICsgXCJlMlwiKSArIFwiZS0yXCJcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8vIHNvcnQgbGlzdCBieSBkaXN0YW5jZVxyXG4gICAgICAgICAgICAgIHRoYXQuY2VudGVyTG9jYXRpb25zLnNvcnQoXHJcbiAgICAgICAgICAgICAgICAobG9jMSwgbG9jMikgPT5cclxuICAgICAgICAgICAgICAgICAgbG9jMS5kaXN0YW5jZSA+IGxvYzIuZGlzdGFuY2VcclxuICAgICAgICAgICAgICAgICAgICA/IDFcclxuICAgICAgICAgICAgICAgICAgICA6IGxvYzIuZGlzdGFuY2UgPiBsb2MxLmRpc3RhbmNlID8gLTEgOiAwXHJcbiAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgLy8gdG9hc3QgdG8gbm90aWZ5IGxpc3Qgd2FzIHNvcnRlZCBieSBkaXN0YW5jZVxyXG4gICAgICAgICAgICAgIC8vIFRPRE86IGJ1Z2ZpeCB3aGVuIHNwYW1taW5nIGJ1dHRvbiB0aGVyZSBjYW4gYmUgYSBmaW5pdGUgYW1vdW50IG9mIFRvYXN0cyB0aGF0IGNvbnN0YW50bHkgYXBwZWFyXHJcbiAgICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlNvcnRlZCBieSBEaXN0YW5jZVwiLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IFRvYXN0LkRVUkFUSU9OLlNIT1JULFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFRvYXN0LlBPU0lUSU9OLkNFTlRFUiAvL29wdGlvbmFsXHJcbiAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICBUb2FzdC5zaG93KG9wdGlvbnMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIChlLm1lc3NhZ2UgfHwgZSkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uSXRlbVRhcChlKSB7XHJcbiAgICAgIC8vIE5hdmlnYXRlIHRvIEFuaW1hbENlbnRlckRldGFpbHNcclxuICAgICAgY29uc29sZS5sb2coXCJvbkl0ZW1UYXAoZSksIG5hdmlnYXRlVG8gXCIgKyBKU09OLnN0cmluZ2lmeShlLml0ZW0pKTtcclxuICAgICAgdGhpcy4kZW1pdChcInNlbGVjdFwiLCBlLml0ZW0pOyAvLyB5b3UgTkVFRCB0byB1c2UgZS5pdGVtIChlLmxvY2F0aW9uIGlzIHVuZGVmaW5lZClcclxuICAgICAgdGhpcy4kbmF2aWdhdGVUbyhBbmltYWxDZW50ZXJEZXRhaWxzLCB7XHJcbiAgICAgICAgcHJvcHM6IHsgQW5pbWFsQ2VudGVyOiBlLml0ZW0gfSxcclxuICAgICAgICBhbmltYXRlZDogdHJ1ZSxcclxuICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICBuYW1lOiBcInNsaWRlXCIsXHJcbiAgICAgICAgICBkdXJhdGlvbjogMzgwLFxyXG4gICAgICAgICAgY3VydmU6IFwiZWFzZUluXCJcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XHJcbkBpbXBvcnQgXCIuLi9BbmltYWxDZW50ZXJcIjtcclxuXHJcbkFjdGlvbkJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOWZjYTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmljb257XHJcbiAgbWFyZ2luLXJpZ2h0OiA1XHJcbn1cclxuXHJcbi5ncHMtYnV0dG9ue1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCBsaWdodGdyYXksIHdoaXRlKTtcclxuICBjb2xvcjogJGhvbWVwYWdlLWJsdWU7XHJcbiAgYm9yZGVyLXdpZHRoOiAxO1xyXG4gIGJvcmRlci1jb2xvcjogZ3JheTtcclxuICBib3JkZXItcmFkaXVzOiAyNSU7XHJcbiAgbWFyZ2luOiAxMDtcclxufVxyXG5cclxuLmxpc3QtZ3JvdXAge1xyXG4gIC5saXN0LWdyb3VwLWl0ZW0tY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiA4IDE1IDQgMTU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1saWdodDtcclxuICB9XHJcblxyXG4gIC5saXN0LWdyb3VwLWl0ZW0tdGV4dCB7XHJcbiAgICBtYXJnaW46IDIgMztcclxuICB9XHJcblxyXG4gIC5ob21lcGFnZS1ibHVlIHtcclxuICAgIGNvbG9yOiAkaG9tZXBhZ2UtYmx1ZTtcclxuICB9XHJcbn1cclxuXHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxQYWdlIGNsYXNzPVwicGFnZVwiPlxyXG4gICAgICAgIDxBY3Rpb25CYXI+XHJcbiAgICAgICAgICAgPE5hdmlnYXRpb25CdXR0b24gQHRhcD1cIiRuYXZpZ2F0ZUJhY2soKVwiIGFuZHJvaWQuc3lzdGVtSWNvbj1cImljX21lbnVfYmFja1wiIC8+XHJcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiU2VydmljZSBSZXF1ZXN0XCIgZm9udFNpemU9XCIyMFwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIvPlxyXG4gICAgICAgIDwvQWN0aW9uQmFyPlxyXG5cclxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJob21lLXBhbmVsXCI+XHJcbiAgICAgICAgICAgIDxXZWJWaWV3IGhlaWdodD1cIjgxOTJweFwiIHNyYz1cImh0dHA6Ly9hbmltYWxjYXJlLmxhY291bnR5Lmdvdi9zZXJ2aWNlLXJlcXVlc3QvXCIgLz5cclxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge307XHJcbiAgfVxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbi5ob21lLXBhbmVsIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjA7XHJcbn1cclxuXHJcbkFjdGlvbkJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOWZjYTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICA8UGFnZT5cclxuICAgIDxBY3Rpb25CYXIgOnRpdGxlPVwiYWN0aW9uQmFyXCIvPlxyXG4gICAgICA8U3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgPExhYmVsIGNsYXNzPVwibXNnXCI+V2UgYXBvbG9naXplLiBUaGUgcXVlc3Rpb24geW91IGFyZSBzZWFyY2hpbmcgZm9yIGhhcyBub3QgYmVlbiBhbnN3ZXJlZCB5ZXQuIFRha2UgdGhpcyB0aWNrZXQgaWYgeW91IHdhbnQgdG8gc3VibWl0IHRoaXMgcXVlc3Rpb24gYW5kIGdldCBhbiBhbnN3ZXIgZnJvbSB0aGUgZnJvbnQgZGVzay48L0xhYmVsPlxyXG4gICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XCIqLCpcIiByb3dzPVwiKiwqLCpcIj5cclxuICAgICAgICAgIDxDYXRlZ29yeUJ1dHRvbiByb3c9XCIwXCIgY29sPVwiMFwiIDp0aXRsZT1cInRpdGxlc1swXVwiIDphY3Rpb249XCJ0b0ZhcVwiIGJhY2tncm91bmRDb2xvcj1cIiNmZjAwMDBcIiAvPlxyXG4gICAgICAgICAgPENhdGVnb3J5QnV0dG9uIHJvdz1cIjBcIiBjb2w9XCIxXCIgOnRpdGxlPVwidGl0bGVzWzFdXCIgOmFjdGlvbj1cInN1Ym1pdFRpY2tldFwiIGJhY2tncm91bmRDb2xvcj1cIiM2QUZGNUFcIiAvPlxyXG4gICAgICAgIDwvR3JpZExheW91dD5cclxuICAgICAgPC9TdGFja0xheW91dD5cclxuICA8L1BhZ2U+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgeyBtYXBTdGF0ZSwgbWFwQWN0aW9ucywgbWFwTXV0YXRpb25zIH0gZnJvbSAndnVleCdcclxuaW1wb3J0IENhdGVnb3J5QnV0dG9uIGZyb20gJ0AvY29tcG9uZW50cy9idXR0b25zL0NhdGVnb3J5QnV0dG9uLnZ1ZSdcclxuaW1wb3J0IFRpY2tldCBmcm9tICdAL21vZGVscy9UaWNrZXQnXHJcbmltcG9ydCBGYXEgZnJvbSAnLi9GYXEudnVlJ1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuL0hvbWUudnVlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGRhdGEgKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYWN0aW9uQmFyOiAnVGlja2V0JyxcclxuICAgICAgdGl0bGVzOiBbJ05vJywgJ1llcyddLFxyXG4gICAgICBmYXE6IEZhcSxcclxuICAgICAgaG9tZTogSG9tZVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgLi4ubWFwQWN0aW9ucyhbJ2FkZEZhcScsICdhZGRUaWNrZXQnXSksXHJcbiAgICAuLi5tYXBNdXRhdGlvbnMoWydzdG9yZVRpY2tldCddKSxcclxuICAgIHN1Ym1pdFRpY2tldCAoKSB7XHJcbiAgICAgIHRoaXMuYWRkRmFxKHRoaXMudXNlckZhcSlcclxuICAgICAgY29uc3QgdGlja2V0ID0gbmV3IFRpY2tldCh0aGlzLnVzZXJGYXEucXVlc3Rpb24pXHJcbiAgICAgIHRoaXMuc3RvcmVUaWNrZXQodGlja2V0KVxyXG4gICAgICB0aGlzLmFkZFRpY2tldCh0aWNrZXQpXHJcbiAgICAgIHRoaXMuJG5hdmlnYXRlVG8odGhpcy5ob21lKVxyXG4gICAgICBhbGVydCh7XHJcbiAgICAgICAgdGl0bGU6ICdBbGVydCcsXHJcbiAgICAgICAgbWVzc2FnZTogJ1lvdSBoYXZlIHN1Y2Nlc3NmdWxseSBzdWJtaXR0ZWQgYSB0aWNrZXQhJyxcclxuICAgICAgICBva0J1dHRvblRleHQ6ICdPSydcclxuICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2lkOicsIHRoaXMudXNlclRpY2tldC5pZClcclxuICAgICAgICBjb25zb2xlLmxvZygndGltZSBpbnNlcnRlZDonLCB0aGlzLnVzZXJUaWNrZXQudGltZUluKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdxdWVzdGlvbjonLCB0aGlzLnVzZXJUaWNrZXQucXVlc3Rpb24pXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgdG9GYXEgKCkge1xyXG4gICAgICB0aGlzLiRuYXZpZ2F0ZVRvKHRoaXMuZmFxKVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIC4uLm1hcFN0YXRlKFsndXNlckZhcScsICd0aWNrZXRzJywgJ3VzZXJUaWNrZXQnXSlcclxuICB9LFxyXG4gIGNvbXBvbmVudHM6IHtcclxuICAgIENhdGVnb3J5QnV0dG9uLFxyXG4gICAgRmFxLFxyXG4gICAgSG9tZVxyXG4gIH1cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgLm1zZyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwO1xyXG4gIH1cclxuPC9zdHlsZT5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxQYWdlPlxyXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cIlRpY2tldCBQcm9jZXNzaW5nXCIgLz5cclxuICAgIDxTdGFja0xheW91dD5cclxuICAgICAgPExhYmVsIHRleHQ9XCJQaG9uZSBudW1iZXI6XCIgLz5cclxuICAgICAgPFRleHRWaWV3IHYtbW9kZWw9XCJwaG9uZVwiIC8+XHJcblxyXG4gICAgICA8TGFiZWwgdGV4dD1cIkZpcnN0IGFuZCBsYXN0IG5hbWU6XCIgLz5cclxuICAgICAgPFRleHRWaWV3IHYtbW9kZWw9XCJuYW1lXCIgLz5cclxuXHJcbiAgICAgIDxMYWJlbCB2LWlmPVwicXVlcnlcIiB0ZXh0PVwicXVlcnk6XCIgLz5cclxuICAgICAgPExhYmVsIHRleHRXcmFwPVwidHJ1ZVwiPnt7cXVlcnl9fTwvTGFiZWw+XHJcbiAgICAgIFxyXG4gICAgICA8QnV0dG9uIEB0YXA9XCJzdWJtaXRUaWNrZXRcIiB0ZXh0PVwiU3VibWl0IFRpY2tldFwiLz5cclxuICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHsgbWFwU3RhdGUsIG1hcEFjdGlvbnMsIG1hcE11dGF0aW9ucyB9IGZyb20gJ3Z1ZXgnXHJcbmltcG9ydCBIb21lIGZyb20gJy4vSG9tZS52dWUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgZGF0YSAoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwaG9uZTogJycsXHJcbiAgICAgIG5hbWU6ICcnLFxyXG4gICAgICBob21lOiBIb21lLFxyXG4gICAgICBsaW1pdDogMFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgLi4ubWFwQWN0aW9ucyhbJ2FkZFRpY2tldCddKSxcclxuICAgIC8vIHRoaXMuc2V0VGlja2V0SW5mbyhvYmplY3QpLCB3aGVyZSBvYmplY3QgY29udGFpbnMgcGhvbmUsIG5hbWUsIHF1ZXJ5LCBjb21tZW50IHByb3BlcnRpZXMsXHJcbiAgICBzdWJtaXRUaWNrZXQgKCkge1xyXG5cclxuICAgICAgdGhpcy4kbmF2aWdhdGVUbyh0aGlzLmhvbWUpXHJcblxyXG4gICAgICB0aGlzLmFkZFRpY2tldCh7XHJcbiAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgIHBob25lOiB0aGlzLnBob25lLFxyXG4gICAgICAgIHF1ZXJ5OiB0aGlzLnF1ZXJ5LFxyXG4gICAgICAgIGxvY2F0aW9uOiB0aGlzLmxvY2F0aW9uXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgLi4ubWFwU3RhdGUoWyd1c2VyVGlja2V0JywgJ2FwcHJvdmVkVGlja2V0JywgJ2xvY2F0aW9uJ10pXHJcbiAgfSxcclxuICB3YXRjaDoge1xyXG4gICAgYXBwcm92ZWRUaWNrZXQobmV3VmFsLCBvbGRWYWwpIHtcclxuICAgICAgaWYgKHRoaXMubGltaXQgPCAxKSB7XHJcbiAgICAgICAgaWYgKG5ld1ZhbCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgYWxlcnQoe1xyXG4gICAgICAgICAgICB0aXRsZTogXCJUaWNrZXQgU3VibWl0dGVkXCIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiSGVsbG8gXCIgKyBuZXdWYWwubmFtZSArIFwiLCB5b3UncmUgdGlja2V0ICMgaXMgXCIgKyBuZXdWYWwubnVtYmVyXHJcbiAgICAgICAgICAgICsgXCIuIFlvdSB3aWxsIGJlIHNlcnZlZCBhdCB3aW5kb3cgXCIgKyAobmV3VmFsLndpbmRvdyArIDEpICsgXCIuXCIsXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBhbGVydCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIk5vIHNlcnZpY2VcIixcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJUaGVyZSBhcmUgY3VycmVudGx5IG5vIGVtcGxveWVlcyBzZXJ2aW5nIHRpY2tldHNcIixcclxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubGltaXQrK1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcHJvcHM6IHtcclxuICAgIHF1ZXJ5OiBTdHJpbmdcclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cclxuPC9zdHlsZT5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxQYWdlPlxyXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cIlRpY2tldCBSZWFzb25cIiAvPlxyXG4gICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cIipcIiByb3dzPVwiYXV0bywgYXV0bywgYXV0bywgYXV0b1wiPlxyXG4gICAgICA8TGFiZWwgY2xhc3M9XCJtc2dcIiB0ZXh0V3JhcD1cInRydWVcIiByb3c9XCIwXCI+WW91IGFyZSBhdCB0aGUge3tzaXRlfX0gQW5pbWFsIENhcmUgYW5kIENvbnRyb2wgQ2VudGVyLjwvTGFiZWw+XHJcblxyXG4gICAgICA8TGlzdFBpY2tlciByb3c9XCIxXCIgOml0ZW1zPVwiY2hvaWNlc1wiIHNlbGVjdGVkSW5kZXg9XCIwXCJcclxuICAgICAgICBAc2VsZWN0ZWRJbmRleENoYW5nZT1cInNlbGVjdGVkSW5kZXhDaGFuZ2VkXCIgdi1tb2RlbD1cInNlbGVjdGVkSW5kZXhcIiAvPlxyXG5cclxuICAgICAgPExhYmVsIGNsYXNzPVwibXNnXCIgcm93PVwiMlwiIHRleHQ9XCJZb3UgYXJlIGFsd2F5cyBhbGxvd2VkIHRvIGdvIHRvIHRoZSBrZW5uZWxzIHdpdGhvdXQgYXNraW5nXCJcclxuICAgICAgICB2LWlmPVwiIWlzVGlja2V0XCIgdGV4dFdyYXA9XCJ0cnVlXCIgLz5cclxuXHJcbiAgICAgIDxTdGFja0xheW91dCByb3c9XCIzXCIgdi1pZj1cImlzVGlja2V0XCI+XHJcbiAgICAgICAgPExhYmVsIGNsYXNzPVwibXNnXCIgdGV4dD1cIlRlbGwgdXMgYWJvdXQgd2hhdCB5b3Ugd291bGQgbGlrZSB0byBrbm93XCIgdGV4dFdyYXA9XCJ0cnVlXCIvPlxyXG5cclxuICAgICAgICA8VGV4dFZpZXcgdi1tb2RlbD1cIm90aGVyVGV4dFwiIC8+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiSG9tZVwiIEB0YXA9XCJ0b0hvbWVcIiAvPlxyXG4gICAgICAgIDxCdXR0b24gdGV4dD1cIkNyZWF0ZSBUaWNrZXRcIiBAdGFwPVwiY3JlYXRlVGlja2V0XCIgLz5cclxuICAgICAgPC9TdGFja0xheW91dD5cclxuICAgIDwvR3JpZExheW91dD5cclxuICA8L1BhZ2U+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgSG9tZSBmcm9tICcuL0hvbWUudnVlJ1xyXG5pbXBvcnQgVGlja2V0Rm9ybSBmcm9tICcuL1RpY2tldEZvcm0udnVlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGRhdGEgKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY2hvaWNlczogW1xyXG4gICAgICAgICdDYW4gSSBnbyB0byB0aGUga2VubmVsPycsXHJcbiAgICAgICAgJ290aGVyJ1xyXG4gICAgICBdLFxyXG4gICAgICBvdGhlclRleHQ6ICcnLFxyXG4gICAgICBzZWxlY3RlZEluZGV4OiAwLFxyXG4gICAgICBpc1RpY2tldDogZmFsc2UsXHJcbiAgICAgIGhvbWU6IEhvbWUsXHJcbiAgICAgIHRpY2tldEZvcm06IFRpY2tldEZvcm0sXHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICB0b0hvbWUgKCkge1xyXG4gICAgICB0aGlzLiRuYXZpZ2F0ZVRvKHRoaXMuaG9tZSlcclxuICAgIH0sXHJcbiAgICBjcmVhdGVUaWNrZXQgKCkge1xyXG4gICAgICB0aGlzLiRuYXZpZ2F0ZVRvKHRoaXMudGlja2V0Rm9ybSwgeyBwcm9wczogeyBxdWVyeTogdGhpcy5vdGhlclRleHQgfSB9KVxyXG4gICAgfSxcclxuICAgIHNlbGVjdGVkSW5kZXhDaGFuZ2VkICgpIHtcclxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleCA9PT0gMSlcclxuICAgICAgICB0aGlzLmlzVGlja2V0ID0gdHJ1ZVxyXG4gICAgICBlbHNlXHJcbiAgICAgICAgdGhpcy5pc1RpY2tldCA9IGZhbHNlXHJcbiAgICB9XHJcbiAgfSxcclxuICBwcm9wczoge1xyXG4gICAgc2l0ZTogU3RyaW5nXHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuICAubXNnIHtcclxuICAgIGZvbnQtc2l6ZTogMTg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG48L3N0eWxlPlxyXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcclxcbiAqIENvbnZlbmllbnQgc2luZ2xlIGltcG9ydCBmb3IgbGlnaHQgdmFyaWFibGVzXFxyXFxuICogSW5jbHVkZXMgYmFzZSB2YXJpYWJsZXMgd2l0aCBsaWdodCBvdmVycmlkZXNcXHJcXG4gKiovXFxuLyoqXFxyXFxuICogTGlnaHQgdmFyaWFibGUgb3ZlcnJpZGVzXFxyXFxuICoqL1xcbi8qKlxcclxcbiAqIFRoZW1lIHZhcmlhYmxlcyBvdmVycmlkZXNcXHJcXG4qKi9cXG4uYW5pbS1jb3ZlcltkYXRhLXYtNWZmN2QxNWNdIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBhbmltYXRpb24tbmFtZToga2V5LWNvdmVyLWRhdGEtdi01ZmY3ZDE1YztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTtcXG4gIGFuaW1hdGlvbi1kZWxheTogMC41O1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbkBrZXlmcmFtZXMga2V5LWNvdmVyLWRhdGEtdi01ZmY3ZDE1YyB7XFxuMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxMDApIHNjYWxlKDAsIDApO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxuMzAlIHtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbjEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxLCAxKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbn1cXG4uYW5pbS1jb250ZW50MVtkYXRhLXYtNWZmN2QxNWNdIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBhbmltYXRpb24tbmFtZToga2V5LWNvbnRlbnQtZGF0YS12LTVmZjdkMTVjO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjc1O1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbi5hbmltLWNvbnRlbnQyW2RhdGEtdi01ZmY3ZDE1Y10ge1xcbiAgb3BhY2l0eTogMDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBrZXktY29udGVudC1kYXRhLXYtNWZmN2QxNWM7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDE7XFxuICBhbmltYXRpb24tZGVsYXk6IDEuMDtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG4uYW5pbS1jb250ZW50M1tkYXRhLXYtNWZmN2QxNWNdIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBhbmltYXRpb24tbmFtZToga2V5LWNvbnRlbnQtZGF0YS12LTVmZjdkMTVjO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjI1O1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbi5hbmltLWNvbnRlbnQ0W2RhdGEtdi01ZmY3ZDE1Y10ge1xcbiAgb3BhY2l0eTogMDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBrZXktY29udGVudC1kYXRhLXYtNWZmN2QxNWM7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDE7XFxuICBhbmltYXRpb24tZGVsYXk6IDEuNTtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG5Aa2V5ZnJhbWVzIGtleS1jb250ZW50LWRhdGEtdi01ZmY3ZDE1YyB7XFxuMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCwgNTApO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxuMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxufVxcbi50aXRsZVtkYXRhLXYtNWZmN2QxNWNdIHtcXG4gIGZvbnQtc2l6ZTogMThlbTtcXG4gIGNvbG9yOiAjMEYzMzZEO1xcbn1cXG4uc3RhY2tbZGF0YS12LTVmZjdkMTVjXSB7XFxuICBwYWRkaW5nLXRvcDogMTQ7XFxuICBib3JkZXItYm90dG9tLXdpZHRoOiAxO1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2Q0ZDRkNDtcXG59XFxuLnN0YWNrLWhvdXJzW2RhdGEtdi01ZmY3ZDE1Y10ge1xcbiAgcGFkZGluZy10b3A6IDY7XFxufVxcbi5ob3Vyc1tkYXRhLXYtNWZmN2QxNWNdIHtcXG4gIGNvbG9yOiAjMDIyNzM0O1xcbn1cXG5BY3Rpb25CYXJbZGF0YS12LTVmZjdkMTVjXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5ZmNhO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIDtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL2xvY2F0aW9uL0FuaW1hbENlbnRlckRldGFpbHMudnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcclxcbiAqIENvbnZlbmllbnQgc2luZ2xlIGltcG9ydCBmb3IgbGlnaHQgdmFyaWFibGVzXFxyXFxuICogSW5jbHVkZXMgYmFzZSB2YXJpYWJsZXMgd2l0aCBsaWdodCBvdmVycmlkZXNcXHJcXG4gKiovXFxuLyoqXFxyXFxuICogTGlnaHQgdmFyaWFibGUgb3ZlcnJpZGVzXFxyXFxuICoqL1xcbi8qKlxcclxcbiAqIFRoZW1lIHZhcmlhYmxlcyBvdmVycmlkZXNcXHJcXG4qKi9cXG4uZmFxX3F1ZXN0aW9uW2RhdGEtdi0wYTRiYjI0NV0ge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDIwO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG4uZmFxX2Fuc3dlcltkYXRhLXYtMGE0YmIyNDVdIHtcXG4gIGNvbG9yOiAjNDU0NTQ1O1xcbn1cXG4ubGlzdC1ncm91cC1pdGVtLXRleHRbZGF0YS12LTBhNGJiMjQ1XSB7XFxuICBtYXJnaW46IDIgMztcXG59XFxuLmxpc3QtZ3JvdXAtaXRlbS1jb250ZW50W2RhdGEtdi0wYTRiYjI0NV0ge1xcbiAgcGFkZGluZzogOCAxNSA0IDE1O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG59XFxuLmhvbWVwYWdlLWJsdWVbZGF0YS12LTBhNGJiMjQ1XSB7XFxuICBjb2xvcjogIzA3ODNmODtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2NvbXBvbmVudHMvc3VibGlzdHMvRmFxSW5mby52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyoqXFxyXFxuICogQ29udmVuaWVudCBzaW5nbGUgaW1wb3J0IGZvciBsaWdodCB2YXJpYWJsZXNcXHJcXG4gKiBJbmNsdWRlcyBiYXNlIHZhcmlhYmxlcyB3aXRoIGxpZ2h0IG92ZXJyaWRlc1xcclxcbiAqKi9cXG4vKipcXHJcXG4gKiBMaWdodCB2YXJpYWJsZSBvdmVycmlkZXNcXHJcXG4gKiovXFxuLyoqXFxyXFxuICogVGhlbWUgdmFyaWFibGVzIG92ZXJyaWRlc1xcclxcbioqL1xcbkFjdGlvbkJhcltkYXRhLXYtZTM5ZDEwOTJdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDlmY2E7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuLm1lc3NhZ2VbZGF0YS12LWUzOWQxMDkyXSB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyMDtcXG4gIGNvbG9yOiAjMDAwMDAwO1xcbn1cXG4uZmFxX3F1ZXN0aW9uW2RhdGEtdi1lMzlkMTA5Ml0ge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDIwO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG4uZmFxX2Fuc3dlcltkYXRhLXYtZTM5ZDEwOTJdIHtcXG4gIGNvbG9yOiAjNDU0NTQ1O1xcbn1cXG4ubGlzdC1ncm91cC1pdGVtLXRleHRbZGF0YS12LWUzOWQxMDkyXSB7XFxuICBtYXJnaW46IDcgODtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL3ZpZXdzL0ZhcS52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyoqXFxyXFxuICogQ29udmVuaWVudCBzaW5nbGUgaW1wb3J0IGZvciBsaWdodCB2YXJpYWJsZXNcXHJcXG4gKiBJbmNsdWRlcyBiYXNlIHZhcmlhYmxlcyB3aXRoIGxpZ2h0IG92ZXJyaWRlc1xcclxcbiAqKi9cXG4vKipcXHJcXG4gKiBMaWdodCB2YXJpYWJsZSBvdmVycmlkZXNcXHJcXG4gKiovXFxuLyoqXFxyXFxuICogVGhlbWUgdmFyaWFibGVzIG92ZXJyaWRlc1xcclxcbioqL1xcbi5BY3Rpb25fQmFyW2RhdGEtdi0yZjJiZTdlNF0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOWZjYTtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG4uU19CYXJbZGF0YS12LTJmMmJlN2U0XSB7XFxuICBjb2xvcjogIzA1MDUwNTtcXG59XFxuLlNfQnV0dG9uW2RhdGEtdi0yZjJiZTdlNF0ge1xcbiAgLyogdGV4dD1cXFwicmlnaHRcXFwiOyBcXHJcXG4gICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInJpZ2h0XFxcIjtcXHJcXG4gICAgICAgIHdpZHRoPVxcXCIzMyVcXFwiIFxcclxcbiAgICAgICAgaGVpZ2h0PVxcXCI3MFxcXCIgXFxyXFxuICAgICAgICAvKmJhY2tncm91bmRDb2xvcj1cXFwiIzFjNmI0OFxcXCIvPiovXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIn4vYXNzZXRzL2ltYWdlcy9OYXRpdmVTY3JpcHQtVnVlLnBuZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcbi5jb3ZlcltkYXRhLXYtMmYyYmU3ZTRdIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcGx1bSwgIzAwOWZjYSk7XFxufVxcbi5ob21lcGFnZS1ibHVlW2RhdGEtdi0yZjJiZTdlNF0ge1xcbiAgY29sb3I6ICMwNzgzZjg7XFxufVxcbi5BY3Rpb25fVGV4dFtkYXRhLXYtMmYyYmU3ZTRdIHtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG59XFxuLkhvbWVCdXR0b25bZGF0YS12LTJmMmJlN2U0XSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDI1O1xcbiAgZm9udC1zaXplOiAxNCU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmctdG9wOiA3ZW07XFxuICBsZXR0ZXItc3BhY2luZzogMDtcXG59XFxuLmxheW91dFtkYXRhLXYtMmYyYmU3ZTRdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XFxufVxcbi5tZXNzYWdlW2RhdGEtdi0yZjJiZTdlNF0ge1xcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjA7XFxuICBjb2xvcjogIzI1MjUyNTtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL3ZpZXdzL0hvbWUudnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcclxcbiAqIENvbnZlbmllbnQgc2luZ2xlIGltcG9ydCBmb3IgbGlnaHQgdmFyaWFibGVzXFxyXFxuICogSW5jbHVkZXMgYmFzZSB2YXJpYWJsZXMgd2l0aCBsaWdodCBvdmVycmlkZXNcXHJcXG4gKiovXFxuLyoqXFxyXFxuICogTGlnaHQgdmFyaWFibGUgb3ZlcnJpZGVzXFxyXFxuICoqL1xcbi8qKlxcclxcbiAqIFRoZW1lIHZhcmlhYmxlcyBvdmVycmlkZXNcXHJcXG4qKi9cXG5BY3Rpb25CYXJbZGF0YS12LTNlNTk3ODY0XSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5ZmNhO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcbi5pY29uW2RhdGEtdi0zZTU5Nzg2NF0ge1xcbiAgbWFyZ2luLXJpZ2h0OiA1O1xcbn1cXG4uZ3BzLWJ1dHRvbltkYXRhLXYtM2U1OTc4NjRdIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCBsaWdodGdyYXksIHdoaXRlKTtcXG4gIGNvbG9yOiAjMDc4M2Y4O1xcbiAgYm9yZGVyLXdpZHRoOiAxO1xcbiAgYm9yZGVyLWNvbG9yOiBncmF5O1xcbiAgYm9yZGVyLXJhZGl1czogMjUlO1xcbiAgbWFyZ2luOiAxMDtcXG59XFxuLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbS1jb250ZW50W2RhdGEtdi0zZTU5Nzg2NF0ge1xcbiAgcGFkZGluZzogOCAxNSA0IDE1O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG59XFxuLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbS10ZXh0W2RhdGEtdi0zZTU5Nzg2NF0ge1xcbiAgbWFyZ2luOiAyIDM7XFxufVxcbi5saXN0LWdyb3VwIC5ob21lcGFnZS1ibHVlW2RhdGEtdi0zZTU5Nzg2NF0ge1xcbiAgY29sb3I6ICMwNzgzZjg7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIDtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi92aWV3cy9Mb2NhdGlvbi52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxyXFxuLyogQ1NTICovXFxuLmNsb3NlW2RhdGEtdi00ZWJhMmQxMl0ge1xcclxcbiAgZm9udC1zaXplOiAyMDtcXHJcXG4gIGNvbG9yOiByZ2IoMjI2LCAyMjksIDIyOSk7XFxyXFxuICBtYXJnaW46IDE1IDAgMCAxNTtcXG59XFxuVGV4dFZpZXdbZGF0YS12LTRlYmEyZDEyXSB7XFxyXFxuICBib3JkZXItd2lkdGg6IDE7XFxyXFxuICBib3JkZXItY29sb3I6ICNmZmZmZmY7XFxufVxcbi5kZXNjcmlwdGlvbi10ZXh0W2RhdGEtdi00ZWJhMmQxMl0ge1xcclxcbiAgZm9udC1zaXplOiAxNDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG4uZGVzY3JpcHRpb24taWNvbltkYXRhLXYtNGViYTJkMTJdIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTY7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGNvbG9yOiAjM2U5ZWRiO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA4O1xcclxcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG59XFxuLmRlc2NyaXB0aW9uLXZhbHVlW2RhdGEtdi00ZWJhMmQxMl0ge1xcclxcbiAgZm9udC1zaXplOiAxNDtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIG1hcmdpbjogODtcXG59XFxuLmRlc2NyaXB0aW9uLXZhbHVlLmlzQXZhaWxhYmxlW2RhdGEtdi00ZWJhMmQxMl0ge1xcclxcbiAgY29sb3I6IGdyZWVuO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGRcXG59XFxuLmRlc2NyaXB0aW9uLXZhbHVlLmlzTm90QXZhaWxhYmxlW2RhdGEtdi00ZWJhMmQxMl0ge1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkXFxufVxcbi5yYXRlW2RhdGEtdi00ZWJhMmQxMl0ge1xcclxcbiAgcGFkZGluZy10b3A6IDM7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBjb2xvcjogI2ZmZTkwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTg7XFxufVxcbi5yYXRpbmctdmFsdWVbZGF0YS12LTRlYmEyZDEyXSB7XFxyXFxuICBtYXJnaW4tbGVmdDogNTtcXG59XFxuLmxpa2VkLWFjdGl2ZVtkYXRhLXYtNGViYTJkMTJdIHtcXHJcXG4gIGNvbG9yOiAjNDA4MGZmO1xcbn1cXG4uaGVhcnQtYWN0aXZlW2RhdGEtdi00ZWJhMmQxMl0ge1xcclxcbiAgY29sb3I6ICNiNTEyMTM7XFxufVxcbi5kZWZhdWx0W2RhdGEtdi00ZWJhMmQxMl0ge1xcclxcbiAgY29sb3I6ICM4MjgyODI7XFxufVxcbi5sYXlvdXRbZGF0YS12LTRlYmEyZDEyXSB7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcclxcbiAgY29sb3I6ICM4MjgyODI7XFxyXFxuICBmb250LXNpemU6IDE0O1xcclxcbiAgaGVpZ2h0OiAzMDtcXHJcXG4gIHBhZGRpbmc6IDUgMCA1IDA7XFxufVxcbi5saWtlLWljb25bZGF0YS12LTRlYmEyZDEyXSB7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcclxcbiAgaGVpZ2h0OiAzMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTY7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDI7XFxyXFxuICBwYWRkaW5nOiA1IDUgNSA1O1xcbn1cXG4uaXRlbS1uYW1lW2RhdGEtdi00ZWJhMmQxMl0ge1xcclxcbiAgZm9udC1zaXplOiAxNDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uaXRlbS1jYXRlZ29yeVtkYXRhLXYtNGViYTJkMTJdIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTQ7XFxyXFxuICBjb2xvcjogIzgyODI4MjtcXG59XFxuLmNhdGVnb3J5LWljb25bZGF0YS12LTRlYmEyZDEyXSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLXRvcDogNTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDI1O1xcclxcbiAgYm9yZGVyLXdpZHRoOiAxO1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgbWFyZ2luLXRvcDogNDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTU7XFxyXFxuICB3aWR0aDogNDA7XFxyXFxuICBoZWlnaHQ6IDQwO1xcbn1cXG4uY29udGVudFtkYXRhLXYtNGViYTJkMTJdIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxNjtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTY7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzO1xcclxcbiAgLyogbWFyZ2luLXRvcDogMTY7ICovXFxufVxcbi5jYXJkLWltZ1tkYXRhLXYtNGViYTJkMTJdIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAyNTA7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1O1xcbn1cXG4uY2FyZC1pbWctdGh1bWJbZGF0YS12LTRlYmEyZDEyXSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMwLCAyMzAsIDIzMCk7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTtcXHJcXG4gIHdpZHRoOiAxMzA7XFxyXFxuICBoZWlnaHQ6IDcwO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDU7XFxufVxcbi5saW5lW2RhdGEtdi00ZWJhMmQxMl0ge1xcclxcbiAgaGVpZ2h0OiAwLjU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjb2xvcjogI2UwZTBlMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxufVxcbi5saW5lQnJlYWtbZGF0YS12LTRlYmEyZDEyXSB7XFxyXFxuICBoZWlnaHQ6IDAuNTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjZTBlMGUwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogQW5pbWF0aW9ucyAqL1xcbi5hbmltLXBhZ2VbZGF0YS12LTRlYmEyZDEyXSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkNmQ4O1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IGtleS1wYWdlLWRhdGEtdi00ZWJhMmQxMjtcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMjtcXHJcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcclxcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXHJcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG5Aa2V5ZnJhbWVzIGtleS1wYWdlLWRhdGEtdi00ZWJhMmQxMiB7XFxuMCUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkYWRhO1xcbn1cXG4yMCUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJkMmQ1O1xcbn1cXG4xMDAlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbn1cXG4uYW5pbS1jb3ZlcltkYXRhLXYtNGViYTJkMTJdIHtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICBhbmltYXRpb24tbmFtZToga2V5LWNvdmVyLWRhdGEtdi00ZWJhMmQxMjtcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogMC41O1xcclxcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxyXFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcclxcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbkBrZXlmcmFtZXMga2V5LWNvdmVyLWRhdGEtdi00ZWJhMmQxMiB7XFxuMCUge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA1NTApIHNjYWxlKDAsIDApO1xcclxcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxuMzAlIHtcXHJcXG4gICAgb3BhY2l0eTogMC41O1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcXHJcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbjEwMCUge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxLCAxKTtcXHJcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbn1cXG4uYW5pbS1pbWFnZXNbZGF0YS12LTRlYmEyZDEyXSB7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IGtleS1pbWFnZXMtZGF0YS12LTRlYmEyZDEyO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxO1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjc7XFxyXFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXHJcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxyXFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxuQGtleWZyYW1lcyBrZXktaW1hZ2VzLWRhdGEtdi00ZWJhMmQxMiB7XFxuMCUge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA1NTApIHNjYWxlKDAsIDApO1xcclxcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxuMzAlIHtcXHJcXG4gICAgb3BhY2l0eTogMC41O1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcXHJcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbjEwMCUge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxLCAxKTtcXHJcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbn1cXG4uYW5pbS1pdGVtSW5mb1tkYXRhLXYtNGViYTJkMTJdIHtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICBhbmltYXRpb24tbmFtZToga2V5LWl0ZW1JbmZvLWRhdGEtdi00ZWJhMmQxMjtcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogMS4yO1xcclxcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxyXFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcclxcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbkBrZXlmcmFtZXMga2V5LWl0ZW1JbmZvLWRhdGEtdi00ZWJhMmQxMiB7XFxuMCUge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCwgNTApO1xcclxcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxuMTAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xcclxcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxufVxcbi5hbmltLWxpa2VzW2RhdGEtdi00ZWJhMmQxMl0ge1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIGFuaW1hdGlvbi1uYW1lOiBrZXktbGlrZXMtZGF0YS12LTRlYmEyZDEyO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxO1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjU7XFxyXFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXHJcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxyXFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxuQGtleWZyYW1lcyBrZXktbGlrZXMtZGF0YS12LTRlYmEyZDEyIHtcXG4wJSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwLCA1MCk7XFxyXFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG4xMDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XFxyXFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG59XFxuLmFuaW0tY29udGVudFtkYXRhLXYtNGViYTJkMTJdIHtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICBhbmltYXRpb24tbmFtZToga2V5LWNvbnRlbnQtZGF0YS12LTRlYmEyZDEyO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxO1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjg7XFxyXFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXHJcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxyXFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxuQGtleWZyYW1lcyBrZXktY29udGVudC1kYXRhLXYtNGViYTJkMTIge1xcbjAlIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAsIDUwKTtcXHJcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbjEwMCUge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcXHJcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICA7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9hZG9wdGlvbi9BZG9wdGlvbkFuaW1hbERldGFpbHMudnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5pdGVtLWNhdGVnb3J5W2RhdGEtdi1mMTQyMmExMF0ge1xcclxcbiAgZm9udC1zaXplOiAxNDtcXHJcXG4gIGNvbG9yOiAjODI4MjgyO1xcbn1cXG4uZ2VuZGVyLWljb25bZGF0YS12LWYxNDIyYTEwXSB7XFxyXFxuICBwYWRkaW5nLXRvcDogMztcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDM7XFxyXFxuICBmb250LXNpemU6IDE2O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMDtcXG59XFxuLmluZm8taWNvbltkYXRhLXYtZjE0MjJhMTBdIHtcXHJcXG4gIHBhZGRpbmctdG9wOiAzO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAzO1xcclxcbiAgY29sb3I6IGdyYXk7XFxyXFxuICBmb250LXNpemU6IDE0O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDEwO1xcbn1cXG4ucmF0aW5nLXZhbHVlW2RhdGEtdi1mMTQyMmExMF0ge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDU7XFxufVxcbi5saWtlZC1hY3RpdmVbZGF0YS12LWYxNDIyYTEwXSB7XFxyXFxuICBjb2xvcjogIzQwODBmZjtcXG59XFxuLmhlYXJ0LWFjdGl2ZVtkYXRhLXYtZjE0MjJhMTBdIHtcXHJcXG4gIGNvbG9yOiAjYjUxMjEzO1xcbn1cXG4uZGVmYXVsdFtkYXRhLXYtZjE0MjJhMTBdIHtcXHJcXG4gIGNvbG9yOiAjODI4MjgyO1xcbn1cXG4ubGF5b3V0W2RhdGEtdi1mMTQyMmExMF0ge1xcclxcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXHJcXG4gIGNvbG9yOiAjODI4MjgyO1xcclxcbiAgZm9udC1zaXplOiAxNDtcXHJcXG4gIGhlaWdodDogMzA7XFxyXFxuICBwYWRkaW5nOiA1IDAgNSAwO1xcbn1cXG4ubGlrZS1pY29uW2RhdGEtdi1mMTQyMmExMF0ge1xcclxcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXHJcXG4gIGhlaWdodDogMzA7XFxyXFxuICBmb250LXNpemU6IDE2O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAyO1xcclxcbiAgcGFkZGluZzogNSA1IDUgNTtcXG59XFxuLml0ZW0tbmFtZVtkYXRhLXYtZjE0MjJhMTBdIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTQ7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAyO1xcbn1cXG4uaXRlbS1jYXRlZ29yeVtkYXRhLXYtZjE0MjJhMTBdIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTQ7XFxyXFxuICBjb2xvcjogIzgyODI4MjtcXG59XFxuLmNhdGVnb3J5LWljb25bZGF0YS12LWYxNDIyYTEwXSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLXRvcDogNTtcXHJcXG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAyNTtcXHJcXG4gIGJvcmRlci13aWR0aDogMTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIG1hcmdpbi10b3A6IDQ7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDE1O1xcclxcbiAgd2lkdGg6IDQwO1xcclxcbiAgaGVpZ2h0OiA0MDtcXG59XFxuLmNvbnRlbnRbZGF0YS12LWYxNDIyYTEwXSB7XFxyXFxuICBtYXJnaW4tbGVmdDogMTY7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDE2O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMztcXHJcXG4gIG1hcmdpbi10b3A6IDE2O1xcbn1cXG4uY2FyZC1pbWdbZGF0YS12LWYxNDIyYTEwXSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTUwO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNTtcXG59XFxuLmxpbmVbZGF0YS12LWYxNDIyYTEwXSB7XFxyXFxuICBoZWlnaHQ6IDAuNTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjZTBlMGUwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG59XFxuLmxpbmVCcmVha1tkYXRhLXYtZjE0MjJhMTBdIHtcXHJcXG4gIGhlaWdodDogNztcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjZTBlMGUwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG59XFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2NvbXBvbmVudHMvYWRvcHRpb24vQW5pbWFsQ2FyZC52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmRlZmF1bHQtaW1nW2RhdGEtdi0wNWM5OGVhY10ge1xcbiAgICBjb2xvcjogI2QxY2VjZTViO1xcbn1cXG4uY2F0ZWdvcnktbmFtZVtkYXRhLXYtMDVjOThlYWNdIHtcXG4gICAgY29sb3I6ICNmN2Y3Zjc7XFxuICAgIGZvbnQtc2l6ZTogMTQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogNSAwIDE1IDBcXG59XFxuLmJhbm5lcltkYXRhLXYtMDVjOThlYWNdIHtcXG4gICAgY29sb3I6ICNiZGJkYmQ7XFxuICAgIG9wYWNpdHk6IC4zO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICA7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9hZG9wdGlvbi9jYXRlZ29yeS52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxyXFxuXFxyXFxuLyogYnV0dG9uIG9uIGFuZHJvaWQgaXMgc3R5bGVkIHdpdGggZGVmYXVsdCBzZXR0aW5nIHdoZW4gYm9yZGVyIHJhZGl1cyBpcyBvbWl0dGVkKi9cXG4uYnV0dG9uW2RhdGEtdi03NjA5YTIzOV17XFxyXFxuICBib3JkZXItcmFkaXVzOiAyNSU7XFxufVxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIDtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL2J1dHRvbnMvQ2F0ZWdvcnlCdXR0b24udnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcclxcblxcclxcbi8qIGJ1dHRvbiBvbiBhbmRyb2lkIGlzIHN0eWxlZCB3aXRoIGRlZmF1bHQgc2V0dGluZyB3aGVuIGJvcmRlciByYWRpdXMgaXMgb21pdHRlZCovXFxuLmJ1dHRvbltkYXRhLXYtNDRhZTU3MThde1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjUlO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxufVxcclxcblxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIDtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL2J1dHRvbnMvSWNvbkJ1dHRvbi52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnRhYnZpZXcuYWN0aXZlIHtcXHJcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMztcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGhlaWdodDogNTA7XFxufVxcbi50YWJ2aWV3VGV4dCB7XFxyXFxuICBtYXJnaW4tdG9wOiAxNTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDU7XFxyXFxuICBmb250LXNpemU6IDEzO1xcclxcbiAgY29sb3I6ICNkOGQyZDI7XFxufVxcbi50YWJ2aWV3VGV4dC5hY3RpdmUge1xcclxcbiAgbWFyZ2luLXRvcDogMDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDU7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxufVxcbi5uYXZJY29uIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDM7XFxufVxcbi5uYXZUYWIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOWZjYTtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG4ubmF2VGFidmlldyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXHJcXG5cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICA7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vdmlld3MvQWRvcHRpb24udnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5ob21lLXBhbmVsW2RhdGEtdi0zY2NlY2YwOV0ge1xcclxcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMjA7XFxufVxcbkFjdGlvbkJhcltkYXRhLXYtM2NjZWNmMDldIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDlmY2E7XFxyXFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL3ZpZXdzL1NlcnZpY2VSZXF1ZXN0LnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4ubXNnW2RhdGEtdi0wN2I0MGMwYV0ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyMDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL3ZpZXdzL1RpY2tldC52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLm1zZ1tkYXRhLXYtMTM5ZDk1NTNdIHtcXG4gIGZvbnQtc2l6ZTogMTg7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIDtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi92aWV3cy9UaWNrZXRPcHRpb25zLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJhbmltLXBhZ2VcIixcbiAgICAgIGF0dHJzOiB7IGFjdGlvbkJhckhpZGRlbjogXCJ0cnVlXCIsIGJhY2tncm91bmRTcGFuVW5kZXJTdGF0dXNCYXI6IFwidHJ1ZVwiIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWFpblwiLCBhdHRyczogeyB2ZXJ0aWNhbEFsaWdubWVudDogXCJ0b3BcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhbmltLWNvdmVyXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHJvd3M6IFwiYXV0b1wiLCBjb2x1bW5zOiBcIipcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjYXJkLWltZ1wiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCItNDBcIixcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxODBcIixcbiAgICAgICAgICAgICAgICAgIHN0cmV0Y2g6IFwiYXNwZWN0RmlsbFwiLFxuICAgICAgICAgICAgICAgICAgc3JjOiBfdm0uaXRlbS5jb3ZlclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGNsb3NlXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwidG9wXCIsXG4gICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5fZihcImZvbnRpY29uXCIpKFwiZmEtYXJyb3ctbGVmdFwiKSxcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjI0XCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLmNsb3NlIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU2Nyb2xsVmlld1wiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhbmltLWltYWdlc1wiLFxuICAgICAgICAgICAgICBhdHRyczogeyBvcmllbnRhdGlvbjogXCJob3Jpem9udGFsXCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgb3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiIH0gfSxcbiAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLml0ZW0uaW1hZ2VzLCBmdW5jdGlvbihpbWFnZSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgeyBrZXk6IGltYWdlLCBhdHRyczogeyByb3dzOiBcImF1dG9cIiwgY29sdW1uczogXCIqXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjYXJkLWltZy10aHVtYlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBpbWFnZS5zcmMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiLFxuICAgICAgICAgICAgICBhdHRyczogeyByb3dzOiBcImF1dG8sYXV0byxhdXRvLGF1dG9cIiwgY29sdW1uczogXCJhdXRvXCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYW5pbS1pdGVtSW5mb1wiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjE1XCIsXG4gICAgICAgICAgICAgICAgICAgIHJvdzogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uczogXCJhdXRvLCpcIixcbiAgICAgICAgICAgICAgICAgICAgcm93czogXCJhdXRvLGF1dG8sYXV0byxhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgY2F0ZWdvcnktaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5fZihcImZvbnRpY29uXCIpKF92bS5nZW5kZXJJY29uKSxcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcm93U3BhbjogXCIyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBfdm0uaXRlbS5jYXRlZ29yeVRhZ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpdGVtLW5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dHdyYXA6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImJvdHRvbVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5pdGVtLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaXRlbS1jYXRlZ29yeVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0d3JhcDogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwidG9wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLml0ZW0uY2F0ZWdvcnlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXCJTdGFja0xheW91dFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGluZSBhbmltLWxpa2VzXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjJcIiwgd2lkdGg6IFwiMTAwJVwiLCBtYXJnaW5Ub3A6IFwiMTBcIiB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhbmltLWxpa2VzXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiNVwiLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgIHJvdzogXCIzXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnM6IFwiKixhdXRvLGF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgcm93czogXCJhdXRvXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBjb2w6IFwiMFwiLCByb3dzOiBcImF1dG9cIiwgY29sdW1uczogXCJhdXRvLGF1dG9cIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJpbmZvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaWtlLWljb24gZmFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5fZihcImZvbnRpY29uXCIpKFwiZmEtaW5mby1jaXJjbGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uaXRlbS5icmVlZF9ncm91cCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgLSBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLml0ZW0ucHJpbWFyeV9icmVlZFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uczogXCJhdXRvLGF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjE1XCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLnRvZ2dsZUhlYXJ0IH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiBcImZhdm9yaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaWtlLWljb24gIGZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uaXRlbS5pc0Zhdm9yaXRlID8gXCJoZWFydC1hY3RpdmVcIiA6IFwiZGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLl9mKFwiZm9udGljb25cIikoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLml0ZW0uaXNGYXZvcml0ZSA/IFwiZmEtaGVhcnRcIiA6IFwiZmEtaGVhcnQtb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sOiBcIjFcIiwgcm93OiBcIjBcIiwgdGV4dDogXCJGYXZvcml0ZVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBjb2w6IFwiMlwiLCBvcmllbnRhdGlvbjogXCJob3Jpem9udGFsXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWY6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaWtlLWljb24gbGF5b3V0IGZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0uX2YoXCJmb250aWNvblwiKShcImZhLXNoYXJlLXNxdWFyZS1vXCIpIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJTaGFyZVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpbmVCcmVhayBhbmltLWxpa2VzXCIsXG4gICAgICAgICAgICBhdHRyczogeyB3aWR0aDogXCIxMDAlXCIgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJHcmlkbGF5b3V0XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbnRlbnQgYW5pbS1jb250ZW50XCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHJvd3M6IFwiYXV0bywqXCIsIG1hcmdpblRvcDogXCIxNVwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgIHJvd3M6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiNVwiLFxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5zOiBcImF1dG8sIGF1dG9cIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGRlc2NyaXB0aW9uLWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5fZihcImZvbnRpY29uXCIpKFwiZmEtdGFnc1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2w6IFwiMVwiLCB0ZXh0OiBcIkRlc2NyaXB0aW9uXCIsIHRleHRXcmFwOiBcInRydWVcIiB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyByb3c6IFwiMVwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJTY3JvbGxWaWV3XCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M6IFwiKiwgKiwgKiwgKiwgKiwgKiwgKiwgKlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM6IFwiYXV0bywgKlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcInRvcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tdmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb3c6IFwiMFwiLCBjb2w6IFwiMFwiLCB0ZXh0OiBcIkF2YWlsYWJpbGl0eTpcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgZGVzY3JpcHRpb24tdmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uaXRlbS5pc0F2YWlsYWJsZSA9PSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImlzQXZhaWxhYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiaXNOb3RBdmFpbGFibGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIwXCIsIGNvbDogXCIxXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRm9ybWF0dGVkU3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uaXRlbS5pc0F2YWlsYWJsZSA9PSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiQXZhaWxhYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJOb3QgQXZhaWxhYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLl9mKFwiZm9udGljb25cIikoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLml0ZW0uaXNBdmFpbGFibGUgPT0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImZhLWNoZWNrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJmYS10aW1lc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLXZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjFcIiwgY29sOiBcIjBcIiwgdGV4dDogXCJMb2NhdGlvbjpcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi12YWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5pdGVtLmxvY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tdmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb3c6IFwiMlwiLCBjb2w6IFwiMFwiLCB0ZXh0OiBcIkFnZTpcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi12YWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIyXCIsIGNvbDogXCIxXCIsIHRleHQ6IF92bS5pdGVtLmFnZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi12YWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIzXCIsIGNvbDogXCIwXCIsIHRleHQ6IFwiR2VuZGVyOiBcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi12YWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIzXCIsIGNvbDogXCIxXCIsIHRleHQ6IF92bS5pdGVtLmdlbmRlciB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi12YWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCI0XCIsIGNvbDogXCIwXCIsIHRleHQ6IFwiQnJlZWQgR3JvdXA6XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tdmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uaXRlbS5icmVlZF9ncm91cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLXZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCI1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJQcmltYXJ5IEJyZWVkOlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tdmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uaXRlbS5wcmltYXJ5X2JyZWVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tdmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb3c6IFwiNlwiLCBjb2w6IFwiMFwiLCB0ZXh0OiBcIkFuaW1hbCBTaXplOlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLXZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCI2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLml0ZW0uYW5pbWFsX3NpemVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi12YWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiN1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiUHJpbWFyeSBDb2xvcjpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLXZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCI3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLml0ZW0ucHJpbWFyeV9jb2xvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcIm1haW5cIiB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtaW1nXCIsXG4gICAgICAgICAgICBhdHRyczogeyBzdHJldGNoOiBcImFzcGVjdEZpdFwiLCBzcmM6IF92bS5pdGVtLmNvdmVyIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICB0YXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25DbGlja0J1dHRvbigpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICBjb2x1bW5zOiBcImF1dG8sKlwiLFxuICAgICAgICAgICAgICAgIHJvd3M6IFwiYXV0byxhdXRvXCIsXG4gICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICB0YXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbkNsaWNrQnV0dG9uKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGNhdGVnb3J5LWljb25cIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLl9mKFwiZm9udGljb25cIikoX3ZtLmNhdGVnb3J5SWNvbiksXG4gICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIHJvd1NwYW46IFwiMlwiLFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBfdm0uaXRlbS5jYXRlZ29yeVRhZ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGl0ZW0tbmFtZVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgIHRleHR3cmFwOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uaXRlbS5uYW1lICsgXCIsIFwiICsgX3ZtLml0ZW0uYWdlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgcm93OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgcm93czogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnM6IFwiYXV0byxhdXRvLGF1dG9cIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIml0ZW0tY2F0ZWdvcnlcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dHdyYXA6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImJvdHRvbVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5pdGVtLmNhdGVnb3J5XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpbmVcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHdpZHRoOiBcIjEwMCVcIiwgbWFyZ2luVG9wOiBcIjVcIiB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiNVwiLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICByb3c6IFwiM1wiLFxuICAgICAgICAgICAgICAgIGNvbHVtbnM6IFwiKiwgYXV0bywgYXV0b1wiLFxuICAgICAgICAgICAgICAgIHJvd3M6IFwiYXV0b1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbDogXCIwXCIsIHJvd3M6IFwiYXV0b1wiLCBjb2x1bW5zOiBcImF1dG8sYXV0b1wiIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICB0YXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25DbGlja0J1dHRvbigpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICByZWY6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaWtlLWljb24gZmFcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLl9mKFwiZm9udGljb25cIikoXCJmYS1pbmZvLWNpcmNsZVwiKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDpcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5pdGVtLmJyZWVkX2dyb3VwICsgXCIgLSBcIiArIF92bS5pdGVtLnByaW1hcnlfYnJlZWRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgcm93czogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnM6IFwiYXV0byxhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjE1XCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS50b2dnbGVIZWFydCB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgcmVmOiBcImZhdm9yaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpa2UtaWNvbiAgZmFcIixcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtfdm0uaXRlbS5pc0Zhdm9yaXRlID8gXCJoZWFydC1hY3RpdmVcIiA6IFwiZGVmYXVsdFwiXSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLl9mKFwiZm9udGljb25cIikoXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uaXRlbS5pc0Zhdm9yaXRlID8gXCJmYS1oZWFydFwiIDogXCJmYS1oZWFydC1vXCJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2w6IFwiMVwiLCByb3c6IFwiMFwiLCB0ZXh0OiBcIkZhdm9yaXRlXCIgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgY29sOiBcIjJcIiwgb3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgcmVmOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaWtlLWljb24gbGF5b3V0IGZhXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5fZihcImZvbnRpY29uXCIpKFwiZmEtc2hhcmUtc3F1YXJlLW9cIikgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiU2hhcmVcIiB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFwiU3RhY2tMYXlvdXRcIiwgeyBzdGF0aWNDbGFzczogXCJsaW5lQnJlYWtcIiwgYXR0cnM6IHsgd2lkdGg6IFwiMTAwJVwiIH0gfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgeyBhdHRyczogeyByb3dzOiBcIipcIiwgY29sdW1uczogXCIqXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGhlaWdodDogXCIxNTBcIixcbiAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjEwXCIsXG4gICAgICAgICAgc3RyZXRjaDogXCJhc3BlY3RGaWxsXCIsXG4gICAgICAgICAgc3JjOiBfdm0uaXRlbS5jb3ZlclxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiAvPlxcbiAgICBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdmVydGljYWxBbGlnbm1lbnQ6IFwiYm90dG9tXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJhbm5lcjJcIiwgYXR0cnM6IHsgYmFja2dyb3VuZENvbG9yOiBcIiM0ODllOWU5ZVwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2F0ZWdvcnktbmFtZSAgbS1iLTEwIG0tdC0xMFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uaXRlbS5jYXRlZ29yeSArIFwiIChcIiArIF92bS5pdGVtLmNvdW50ICsgXCIpXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0d3JhcDogXCJ0cnVlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgW1xuICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImltYWdlXCIsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgc3JjOiBfdm0uc3JjLFxuICAgICAgICAgIHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsXG4gICAgICAgICAgaGVpZ2h0OiBcIjExMFwiLFxuICAgICAgICAgIFwiaW9zOmhlaWdodFwiOiBcIjEyMFwiXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7IHRhcDogX3ZtLmFjdGlvbiB9XG4gICAgICB9KSxcbiAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uXCIsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiYm90dG9tXCIsXG4gICAgICAgICAgdGV4dDogX3ZtLmljb24gKyBcIiBcIiArIF92bS50aXRsZVxuICAgICAgICB9LFxuICAgICAgICBvbjogeyB0YXA6IF92bS5hY3Rpb24gfVxuICAgICAgfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJTdGFja0xheW91dFwiLFxuICAgIFtcbiAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uXCIsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgdGV4dDogX3ZtLnRpdGxlICsgXCIgXCIgKyBfdm0uaWNvbiArIFwiIFwiXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7IHRhcDogX3ZtLmFjdGlvbiB9XG4gICAgICB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInBhZ2VcIiB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIkFjdGlvbkJhclwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImFjdGlvbi1iYXJcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJOYXZpZ2F0aW9uQnV0dG9uXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IFwiYW5kcm9pZC5zeXN0ZW1JY29uXCI6IFwiaWNfbWVudV9iYWNrXCIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIHRhcDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kbmF2aWdhdGVCYWNrKClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWN0aW9uLWJhci10aXRsZVwiLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgdGV4dDogX3ZtLkFuaW1hbENlbnRlci5uYW1lLFxuICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiBcImNlbnRlclwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiPlxcbiAgICBcIilcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcIlNjcm9sbFZpZXdcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhbmltLWNvdmVyIG0tYi0xNVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBzcmM6IF92bS5BbmltYWxDZW50ZXIuaW1hZ2VVUkwsXG4gICAgICAgICAgICAgICAgICBzdHJldGNoOiBcImFzcGVjdEZpdFwiLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjIwMFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaHItbGlnaHQgbS10LTE1IG0tYi0xNVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIxXCIgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyByb3dzOiBcIiosICosICosIGF1dG9cIiwgY29sdW1uczogXCJhdXRvLCpcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFuaW0tY29udGVudDEgcC1sLTE1IHAtYi0xMCBtLXItMjBcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9hY2hvdXNlLnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjQwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiNDBcIixcbiAgICAgICAgICAgICAgICAgICAgICBsb2FkTW9kZTogXCJhc3luY1wiLFxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIzXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICBcImFuaW0tY29udGVudDEgdGV4dCBwLWItMTAgZm9udC13ZWlnaHQtYm9sZCB0aXRsZSBzdGFja1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCI1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiRm9ybWF0dGVkU3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5BbmltYWxDZW50ZXIubmFtZSArIFwiIEFuaW1hbCBDYXJlIENlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYW5pbS1jb250ZW50MiBwLWwtMTUgcC1iLTEwIG0tci0yMFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2xvY2F0aW9uaWNvbi5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICBzdHJldGNoOiBcImFzcGVjdEZpdFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI0MFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjQwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbG9hZE1vZGU6IFwiYXN5bmNcIixcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiM1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiTGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFuaW0tY29udGVudDIgcC1iLTEwIHN0YWNrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwOiBcInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0ub25BZGRyZXNzVGFwIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJGb3JtYXR0ZWRTdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSB0ZXh0LXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0uQW5pbWFsQ2VudGVyLmFkZHJlc3MgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYW5pbS1jb250ZW50MyBwLWwtMTUgcC1iLTEwIG0tci0yMFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL3Bob25laWNvbi5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICBzdHJldGNoOiBcImFzcGVjdEZpdFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI0MFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjQwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbG9hZE1vZGU6IFwiYXN5bmNcIixcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiM1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFuaW0tY29udGVudDMgZmEgdGV4dC1wcmltYXJ5IHAtYi0xMCBzdGFja1wiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uQW5pbWFsQ2VudGVyLnBob25lLFxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCI1XCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0ub25QaG9uZVRhcCB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhbmltLWNvbnRlbnQ0IHAtbC0xNSBwLWItMTAgbS1yLTIwXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjNcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvaG91cnNpY29uLnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjQwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiNDBcIixcbiAgICAgICAgICAgICAgICAgICAgICBsb2FkTW9kZTogXCJhc3luY1wiLFxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIzXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhbmltLWNvbnRlbnQ0IHN0YWNrLWhvdXJzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uczogXCIqLCAqXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dzOiBcImF1dG8sIGF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCI1XCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhvdXJzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uQW5pbWFsQ2VudGVyLmF2YWlsYWJpbGl0eS53ZWVrZGF5XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJob3Vyc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLkFuaW1hbENlbnRlci5hdmFpbGFiaWxpdHkud2Vla2RheWhvdXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhvdXJzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uQW5pbWFsQ2VudGVyLmF2YWlsYWJpbGl0eS53ZWVrZW5kXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJob3Vyc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLkFuaW1hbENlbnRlci5hdmFpbGFiaWxpdHkud2Vla2VuZGhvdXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICB7IGF0dHJzOiB7IG9yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgIFwiaG9tZXBhZ2UtYmx1ZSB0ZXh0LXByaW1hcnkgbGlzdC1ncm91cC1pdGVtLXRleHQgZm9udC13ZWlnaHQtYm9sZFwiLFxuICAgICAgICAgIGF0dHJzOiB7IHRleHRXcmFwOiBcInRydWVcIiB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiRm9ybWF0dGVkU3RyaW5nXCIsXG4gICAgICAgICAgICBbX2MoXCJTcGFuXCIsIHsgYXR0cnM6IHsgdGV4dDogX3ZtLml0ZW0ucXVlcnkgfSB9KV0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiTGFiZWxcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIi5mYXFfYW5zd2VyIC5saXN0LWdyb3VwLWl0ZW0tY29udGVudFwiLFxuICAgICAgICAgIGF0dHJzOiB7IHRleHRXcmFwOiBcInRydWVcIiB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiRm9ybWF0dGVkU3RyaW5nXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IFwidGV4dC5kZWNvZGVcIjogXCImIzk7XCIgfSB9KSxcbiAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHsgYXR0cnM6IHsgdGV4dDogX3ZtLml0ZW0uYW5zd2VyIH0gfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwicGFnZVwiLFxuICAgIHtcbiAgICAgIGF0dHJzOiB7IGFjdGlvbkJhckhpZGRlbjogXCJmYWxzZVwiLCBiYWNrZ3JvdW5kU3BhblVuZGVyU3RhdHVzQmFyOiBcInRydWVcIiB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJBY3Rpb25CYXJcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJhY3Rpb25iYXIgbmF2VGFiXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiTmF2aWdhdGlvbkJ1dHRvblwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBcImFuZHJvaWQuc3lzdGVtSWNvblwiOiBcImljX21lbnVfYmFja1wiIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICB0YXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJG5hdmlnYXRlQmFjaygpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IGZvbnRTaXplOiBcIjE4XCIsIHRleHQ6IFwiQW5pbWFscyBmb3IgQWRvcHRpb25cIiB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgeyBhdHRyczogeyByb3dzOiBcImF1dG8sYXV0bywqXCIsIGNvbHVtbnM6IFwiYXV0b1wiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJlZjogXCJuYXZUYWJcIixcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2VGFiXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgcm93OiBcIjFcIixcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJ0b3BcIixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNTBcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgcm93czogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgY29sdW1uczogXCJhdXRvLGF1dG9cIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnNlbGVjdGVkVGFidmlldyA9PSAwID8gXCJhY3RpdmVcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICByb3dzOiBcIiosYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICBjb2xzOiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiNTAlXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5hZG9wdGlvbkxpc3QgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlbGVjdGVkVGFidmlldyA9PSAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWxlY3RlZFRhYnZpZXc9PTBcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgbmF2SWNvblwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLl9mKFwiZm9udGljb25cIikoXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRUYWJ2aWV3ID09IDAgPyBcImZhLXBhd1wiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGFidmlld1RleHRcIixcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5zZWxlY3RlZFRhYnZpZXcgPT0gMCA/IFwiYWN0aXZlXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkFuaW1hbHNcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnNlbGVjdGVkVGFidmlldyA9PSAxID8gXCJhY3RpdmVcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICByb3dzOiBcIiosYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICBjb2xzOiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiNTAlXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5zaG93Q2F0ZWdvcnkgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlbGVjdGVkVGFidmlldyA9PSAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWxlY3RlZFRhYnZpZXc9PTFcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgbmF2SWNvblwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLl9mKFwiZm9udGljb25cIikoXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRUYWJ2aWV3ID09IDEgPyBcImZhLWZpbHRlclwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGFidmlld1RleHRcIixcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5zZWxlY3RlZFRhYnZpZXcgPT0gMSA/IFwiYWN0aXZlXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJGaWx0ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZFRhYnZpZXcgPT0gMCxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWRUYWJ2aWV3ID09IDBcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjJcIiwgd2lkdGg6IFwiMTAwJVwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkxpc3RWaWV3XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiBfdm0uaW5kZXgsXG4gICAgICAgICAgICAgICAgICByZWY6IFwibGlzdHZpZXdcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNlcGFyYXRvckNvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0uaXRlbXMsXG4gICAgICAgICAgICAgICAgICAgIFwiK2FsaWFzXCI6IFwiaXRlbVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInYtdGVtcGxhdGVcIiwge1xuICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHJlZi5pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkaW5kZXggPSByZWYuJGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkZXZlbiA9IHJlZi4kZXZlblxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcIml0ZW1cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGl0ZW06IGl0ZW0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tlZDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2hvd0l0ZW0oaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlbGVjdGVkVGFidmlldyA9PSAxLFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWxlY3RlZFRhYnZpZXcgPT0gMVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBhdHRyczogeyByb3c6IFwiMlwiLCB3aWR0aDogXCIxMDAlXCIsIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiUmFkTGlzdFZpZXdcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IF92bS5pbmRleCxcbiAgICAgICAgICAgICAgICAgIHJlZjogXCJsaXN0dmlld1wiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgc2VwYXJhdG9yQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS5pdGVtc0NhdGVnb3J5LFxuICAgICAgICAgICAgICAgICAgICBcIithbGlhc1wiOiBcIml0ZW1cIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRlbXBsYXRlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSByZWYuaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGluZGV4ID0gcmVmLiRpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGV2ZW4gPSByZWYuJGV2ZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRvZGQgPSByZWYuJG9kZFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJDYXRlZ29yeVwiLCB7IGF0dHJzOiB7IGl0ZW06IGl0ZW0gfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwicGFnZVwiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiQWN0aW9uQmFyXCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIk5hdmlnYXRpb25CdXR0b25cIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgXCJhbmRyb2lkLnN5c3RlbUljb25cIjogXCJpY19tZW51X2JhY2tcIiB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRuYXZpZ2F0ZUJhY2soKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkZBUVwiLCBmb250U2l6ZTogXCIyMFwiLCB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIiB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIlNlYXJjaEJhclwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBoaW50OiBcIkVudGVyIHRleHQuLi5cIiwgdGV4dDogX3ZtLnNlYXJjaCB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgc3VibWl0OiBfdm0uY2hlY2tGYXEsXG4gICAgICAgICAgICAgIHRleHRDaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5zZWFyY2ggPSAkZXZlbnQudmFsdWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJSYWRMaXN0Vmlld1wiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZWY6IFwibGlzdFZpZXdcIixcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlzdC1ncm91cFwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHB1bGxUb1JlZnJlc2g6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0uZ2V0U2VhcmNoUmVzdWx0cyhfdm0uc2VhcmNoKSxcbiAgICAgICAgICAgICAgICBcIithbGlhc1wiOiBcImZhcVwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgcHVsbFRvUmVmcmVzaEluaXRpYXRlZDogX3ZtLm9uUHVsbFRvUmVmcmVzaEluaXRpYXRlZCxcbiAgICAgICAgICAgICAgICBpdGVtVGFwOiBfdm0ub25JdGVtVGFwXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidi10ZW1wbGF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgZmFxID0gcmVmLmZhcVxuICAgICAgICAgICAgICAgICAgICAgIHZhciAkaW5kZXggPSByZWYuJGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgICAgICAgICAgdmFyICRvZGQgPSByZWYuJG9kZFxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcIkZhcUluZm9cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlzdC1ncm91cC1pdGVtLXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGl0ZW06IGZhcSB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJBY3Rpb25CYXJcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJBY3Rpb25fQmFyXCIsIGF0dHJzOiB7IFwiaW9zLnBvc2l0aW9uXCI6IFwibGVmdFwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgdGV4dDogXCJXZWxjb21lXCIsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiBcIjIwXCIsXG4gICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImNlbnRlclwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJBY3Rpb25JdGVtXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIFwiaW9zLnN5c3RlbUljb25cIjogXCIxMlwiLFxuICAgICAgICAgICAgICBcImlvcy5wb3NpdGlvblwiOiBcInJpZ2h0XCIsXG4gICAgICAgICAgICAgIFwiYW5kcm9pZC5zeXN0ZW1JY29uXCI6IFwiaWNfbWVudV9zZWFyY2hcIixcbiAgICAgICAgICAgICAgXCJhbmRyb2lkLnBvc2l0aW9uXCI6IFwiYWN0aW9uQmFyXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjogeyB0YXA6IF92bS50b0ZhcSB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgIHsgYXR0cnM6IHsgYmFja2dyb3VuZENvbG9yOiBcIiNiMjFhODJcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsYXlvdXQgY292ZXJcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgY29sdW1uczogXCIqLCpcIiwgcm93czogXCIqLCosKlwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiQ2F0ZWdvcnlCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhvbWVwYWdlLWJsdWUgSG9tZUJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCI1XCIsXG4gICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvYW5pbWFscy5pY29uLnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgaWNvbjogXCJcIixcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBfdm0udGl0bGVzWzBdLFxuICAgICAgICAgICAgICAgICAgYWN0aW9uOiBfdm0udG9BZG9wdGlvbixcbiAgICAgICAgICAgICAgICAgIHRleHRXcmFwOiBcInRydWVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiQ2F0ZWdvcnlCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhvbWVwYWdlLWJsdWUgSG9tZUJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCI1XCIsXG4gICAgICAgICAgICAgICAgICByb3c6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvc2VydmljZXMuaWNvbi5wbmdcIixcbiAgICAgICAgICAgICAgICAgIGljb246IFwiXCIsXG4gICAgICAgICAgICAgICAgICB0aXRsZTogX3ZtLnRpdGxlc1syXSxcbiAgICAgICAgICAgICAgICAgIGFjdGlvbjogX3ZtLnRvU2VydmljZVJlcXVlc3QsXG4gICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkNhdGVnb3J5QnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJob21lcGFnZS1ibHVlIEhvbWVCdXR0b25cIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICBtYXJnaW46IFwiNVwiLFxuICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL25vaXNlLmljb24ucG5nXCIsXG4gICAgICAgICAgICAgICAgICBpY29uOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgdGl0bGU6IF92bS50aXRsZXNbM10sXG4gICAgICAgICAgICAgICAgICBhY3Rpb246IF92bS50b0ZhcSxcbiAgICAgICAgICAgICAgICAgIHRleHRXcmFwOiBcInRydWVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiQ2F0ZWdvcnlCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGhvbWVwYWdlLWJsdWUgSG9tZUJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCI1XCIsXG4gICAgICAgICAgICAgICAgICByb3c6IFwiMlwiLFxuICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvaG91cnNpY29uLnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgaWNvbjogX3ZtLl9mKFwiZm9udGljb25cIikoXCJmYS1tYXAtbWFya2VyXCIpLFxuICAgICAgICAgICAgICAgICAgdGl0bGU6IF92bS50aXRsZXNbNF0sXG4gICAgICAgICAgICAgICAgICBhY3Rpb246IF92bS50b1FSU2Nhbm5lcixcbiAgICAgICAgICAgICAgICAgIHRleHRXcmFwOiBcInRydWVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiQ2F0ZWdvcnlCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhvbWVwYWdlLWJsdWUgSG9tZUJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCI1XCIsXG4gICAgICAgICAgICAgICAgICByb3c6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgIHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvbG9jYXRpb25pY29uLnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgaWNvbjogXCJcIixcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBfdm0udGl0bGVzWzVdLFxuICAgICAgICAgICAgICAgICAgYWN0aW9uOiBfdm0udG9Mb2NhdGlvbkxpc3QsXG4gICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInBhZ2VcIiB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIkFjdGlvbkJhclwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImFjdGlvbi1iYXJcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJOYXZpZ2F0aW9uQnV0dG9uXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IFwiYW5kcm9pZC5zeXN0ZW1JY29uXCI6IFwiaWNfbWVudV9iYWNrXCIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIHRhcDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kbmF2aWdhdGVCYWNrKClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgdGV4dDogXCJBbmltYWwgQ2FyZSBDZW50ZXJzXCIsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiBcIjIwXCIsXG4gICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImNlbnRlclwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIkljb25CdXR0b25cIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgZ3BzLWJ1dHRvblwiLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgaWNvbjogX3ZtLl9mKFwiZm9udGljb25cIikoXCJmYS1zb3J0LWFtb3VudC1hc2NcIiksXG4gICAgICAgICAgICAgIHRpdGxlOiBcIkdldCBDbG9zZXN0IEFuaW1hbCBDZW50ZXJcIixcbiAgICAgICAgICAgICAgYWN0aW9uOiBfdm0uYnV0dG9uR2V0RGlzdGFuY2VUb0NhcmVDZW50ZXJzVGFwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlJhZExpc3RWaWV3XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpc3QtZ3JvdXBcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICByb3c6IFwiMlwiLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0uY2VudGVyTG9jYXRpb25zLFxuICAgICAgICAgICAgICAgIFwiK2FsaWFzXCI6IFwibG9jYXRpb25cIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbjogeyBpdGVtVGFwOiBfdm0ub25JdGVtVGFwIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidi10ZW1wbGF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgbG9jYXRpb24gPSByZWYubG9jYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJGluZGV4ID0gcmVmLiRpbmRleFxuICAgICAgICAgICAgICAgICAgICAgIHZhciAkZXZlbiA9IHJlZi4kZXZlblxuICAgICAgICAgICAgICAgICAgICAgIHZhciAkb2RkID0gcmVmLiRvZGRcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlzdC1ncm91cC1pdGVtLWNvbnRlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93czogXCIqLCAqLCAqLCAqXCIsIGNvbHVtbnM6IFwiKiwgKlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJob21lcGFnZS1ibHVlIHRleHQtcHJpbWFyeSBsaXN0LWdyb3VwLWl0ZW0tdGV4dCBmb250LXdlaWdodC1ib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogbG9jYXRpb24ubmFtZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGlzdC1ncm91cC1pdGVtLXRleHQgbS1yLTUgdGV4dC1zZWNvbmRhcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbDogXCIxXCIsIGhvcml6b250YWxBbGlnbm1lbnQ6IFwicmlnaHRcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJGb3JtYXR0ZWRTdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIn5cIiArIGxvY2F0aW9uLmRpc3RhbmNlICsgXCJtaVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoci1saWdodCBtLXQtNSBtLWItNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIxXCIsIGNvbFNwYW46IFwiMlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm0tci0yMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBsb2NhdGlvbi5pbWFnZVVSTCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkTW9kZTogXCJhc3luY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpc3QtZ3JvdXAtaXRlbS10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHJvd3M6IFwiKiwgKlwiLCBjb2x1bW5zOiBcIiosIDQqXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInAtYi0xMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJGb3JtYXR0ZWRTdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImlvcy5mb250RmFtaWx5XCI6IFwic3lzdGVtXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uX2YoXCJmb250aWNvblwiKShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmEtbWFwLW1hcmtlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInAtYi0xMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJGb3JtYXR0ZWRTdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImlvcy5mb250RmFtaWx5XCI6IFwic3lzdGVtXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IGxvY2F0aW9uLmFkZHJlc3MgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwLWItMTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRm9ybWF0dGVkU3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJpb3MuZm9udEZhbWlseVwiOiBcInN5c3RlbVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uX2YoXCJmb250aWNvblwiKShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmEtcGhvbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwLWItMTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRm9ybWF0dGVkU3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJpb3MuZm9udEZhbWlseVwiOiBcInN5c3RlbVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IGxvY2F0aW9uLnBob25lIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicC1iLTEwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJGb3JtYXR0ZWRTdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImlvcy5mb250RmFtaWx5XCI6IFwic3lzdGVtXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiXCIgfSB9KV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInBhZ2VcIiB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIkFjdGlvbkJhclwiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJOYXZpZ2F0aW9uQnV0dG9uXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IFwiYW5kcm9pZC5zeXN0ZW1JY29uXCI6IFwiaWNfbWVudV9iYWNrXCIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIHRhcDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kbmF2aWdhdGVCYWNrKClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgdGV4dDogXCJTZXJ2aWNlIFJlcXVlc3RcIixcbiAgICAgICAgICAgICAgZm9udFNpemU6IFwiMjBcIixcbiAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJob21lLXBhbmVsXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiV2ViVmlld1wiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBoZWlnaHQ6IFwiODE5MnB4XCIsXG4gICAgICAgICAgICAgIHNyYzogXCJodHRwOi8vYW5pbWFsY2FyZS5sYWNvdW50eS5nb3Yvc2VydmljZS1yZXF1ZXN0L1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICBbXG4gICAgICBfYyhcIkFjdGlvbkJhclwiLCB7IGF0dHJzOiB7IHRpdGxlOiBfdm0uYWN0aW9uQmFyIH0gfSksXG4gICAgICBfYyhcbiAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJMYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcIm1zZ1wiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgXCJXZSBhcG9sb2dpemUuIFRoZSBxdWVzdGlvbiB5b3UgYXJlIHNlYXJjaGluZyBmb3IgaGFzIG5vdCBiZWVuIGFuc3dlcmVkIHlldC4gVGFrZSB0aGlzIHRpY2tldCBpZiB5b3Ugd2FudCB0byBzdWJtaXQgdGhpcyBxdWVzdGlvbiBhbmQgZ2V0IGFuIGFuc3dlciBmcm9tIHRoZSBmcm9udCBkZXNrLlwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgY29sdW1uczogXCIqLCpcIiwgcm93czogXCIqLCosKlwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJDYXRlZ29yeUJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgdGl0bGU6IF92bS50aXRsZXNbMF0sXG4gICAgICAgICAgICAgICAgICBhY3Rpb246IF92bS50b0ZhcSxcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmYwMDAwXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkNhdGVnb3J5QnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICB0aXRsZTogX3ZtLnRpdGxlc1sxXSxcbiAgICAgICAgICAgICAgICAgIGFjdGlvbjogX3ZtLnN1Ym1pdFRpY2tldCxcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNkFGRjVBXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICBbXG4gICAgICBfYyhcIkFjdGlvbkJhclwiLCB7IGF0dHJzOiB7IHRpdGxlOiBcIlRpY2tldCBQcm9jZXNzaW5nXCIgfSB9KSxcbiAgICAgIF9jKFxuICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIkxhYmVsXCIsIHsgYXR0cnM6IHsgdGV4dDogXCJQaG9uZSBudW1iZXI6XCIgfSB9KSxcbiAgICAgICAgICBfYyhcIlRleHRWaWV3XCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5waG9uZSB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgdGV4dENoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLnBob25lID0gJGV2ZW50LnZhbHVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkxhYmVsXCIsIHsgYXR0cnM6IHsgdGV4dDogXCJGaXJzdCBhbmQgbGFzdCBuYW1lOlwiIH0gfSksXG4gICAgICAgICAgX2MoXCJUZXh0Vmlld1wiLCB7XG4gICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0ubmFtZSB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgdGV4dENoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLm5hbWUgPSAkZXZlbnQudmFsdWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5xdWVyeSA/IF9jKFwiTGFiZWxcIiwgeyBhdHRyczogeyB0ZXh0OiBcInF1ZXJ5OlwiIH0gfSkgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfYyhcIkxhYmVsXCIsIHsgYXR0cnM6IHsgdGV4dFdyYXA6IFwidHJ1ZVwiIH0gfSwgW1xuICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ucXVlcnkpKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiU3VibWl0IFRpY2tldFwiIH0sXG4gICAgICAgICAgICBvbjogeyB0YXA6IF92bS5zdWJtaXRUaWNrZXQgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgW1xuICAgICAgX2MoXCJBY3Rpb25CYXJcIiwgeyBhdHRyczogeyB0aXRsZTogXCJUaWNrZXQgUmVhc29uXCIgfSB9KSxcbiAgICAgIF9jKFxuICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgeyBhdHRyczogeyBjb2x1bW5zOiBcIipcIiwgcm93czogXCJhdXRvLCBhdXRvLCBhdXRvLCBhdXRvXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1zZ1wiLCBhdHRyczogeyB0ZXh0V3JhcDogXCJ0cnVlXCIsIHJvdzogXCIwXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJZb3UgYXJlIGF0IHRoZSBcIiArXG4gICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnNpdGUpICtcbiAgICAgICAgICAgICAgICAgIFwiIEFuaW1hbCBDYXJlIGFuZCBDb250cm9sIENlbnRlci5cIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcIkxpc3RQaWNrZXJcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgcm93OiBcIjFcIixcbiAgICAgICAgICAgICAgaXRlbXM6IF92bS5jaG9pY2VzLFxuICAgICAgICAgICAgICBzZWxlY3RlZEluZGV4OiBcIjBcIixcbiAgICAgICAgICAgICAgc2VsZWN0ZWRJbmRleDogX3ZtLnNlbGVjdGVkSW5kZXhcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBzZWxlY3RlZEluZGV4Q2hhbmdlOiBbXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRJbmRleCA9ICRldmVudC52YWx1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkSW5kZXhDaGFuZ2VkXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICAhX3ZtLmlzVGlja2V0XG4gICAgICAgICAgICA/IF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1zZ1wiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICByb3c6IFwiMlwiLFxuICAgICAgICAgICAgICAgICAgdGV4dDpcbiAgICAgICAgICAgICAgICAgICAgXCJZb3UgYXJlIGFsd2F5cyBhbGxvd2VkIHRvIGdvIHRvIHRoZSBrZW5uZWxzIHdpdGhvdXQgYXNraW5nXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5pc1RpY2tldFxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyByb3c6IFwiM1wiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXNnXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJUZWxsIHVzIGFib3V0IHdoYXQgeW91IHdvdWxkIGxpa2UgdG8ga25vd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwOiBcInRydWVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiVGV4dFZpZXdcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0ub3RoZXJUZXh0IH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dENoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ub3RoZXJUZXh0ID0gJGV2ZW50LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJIb21lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0udG9Ib21lIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkNyZWF0ZSBUaWNrZXRcIiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5jcmVhdGVUaWNrZXQgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLnNjc3NcIjogXCIuL2FwcC5zY3NzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vIHN5bmMgXlxcXFwuXFxcXC9hcHBcXFxcLihjc3N8c2Nzc3xsZXNzfHNhc3MpJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9BbmltYWxDZW50ZXIuc2Nzc1wiOiBcIi4vQW5pbWFsQ2VudGVyLnNjc3NcIixcblx0XCIuL2FwcC5zY3NzXCI6IFwiLi9hcHAuc2Nzc1wiLFxuXHRcIi4vZm9udHMvZm9udC1hd2Vzb21lLmNzc1wiOiBcIi4vZm9udHMvZm9udC1hd2Vzb21lLmNzc1wiLFxuXHRcIi4vZm9udHMvaW9uaWNvbnMuY3NzXCI6IFwiLi9mb250cy9pb25pY29ucy5jc3NcIixcblx0XCIuL21haW4uanNcIjogXCIuL21haW4uanNcIixcblx0XCIuL21vZGVscy9BbmltYWwuanNcIjogXCIuL21vZGVscy9BbmltYWwuanNcIixcblx0XCIuL21vZGVscy9GYXEuanNcIjogXCIuL21vZGVscy9GYXEuanNcIixcblx0XCIuL21vZGVscy9UaWNrZXQuanNcIjogXCIuL21vZGVscy9UaWNrZXQuanNcIixcblx0XCIuL3NlcnZpY2VzL0Fkb3B0aW9uU2VydmljZS5qc1wiOiBcIi4vc2VydmljZXMvQWRvcHRpb25TZXJ2aWNlLmpzXCIsXG5cdFwiLi9zZXJ2aWNlcy9GYWtlQWRvcHRpb25TZXJ2aWNlLmpzXCI6IFwiLi9zZXJ2aWNlcy9GYWtlQWRvcHRpb25TZXJ2aWNlLmpzXCIsXG5cdFwiLi9zZXJ2aWNlcy9GYWtlRmFxU2VydmljZS5qc1wiOiBcIi4vc2VydmljZXMvRmFrZUZhcVNlcnZpY2UuanNcIixcblx0XCIuL3NlcnZpY2VzL0Zha2VUaWNrZXRTZXJ2aWNlLmpzXCI6IFwiLi9zZXJ2aWNlcy9GYWtlVGlja2V0U2VydmljZS5qc1wiLFxuXHRcIi4vc2VydmljZXMvRmFxU2VydmljZS5qc1wiOiBcIi4vc2VydmljZXMvRmFxU2VydmljZS5qc1wiLFxuXHRcIi4vc2VydmljZXMvVGlja2V0U2VydmljZS5qc1wiOiBcIi4vc2VydmljZXMvVGlja2V0U2VydmljZS5qc1wiLFxuXHRcIi4vc3RvcmUuanNcIjogXCIuL3N0b3JlLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vIHN5bmMgcmVjdXJzaXZlICg/PCFcXFxcYkFwcF9SZXNvdXJjZXNcXFxcYi4qKVxcXFwuKHhtbHxjc3N8anN8KD88IVxcXFwuZFxcXFwuKXRzfCg/PCFcXFxcYl9bXFxcXHctXSpcXFxcLilzY3NzKSRcIjsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcclxcbiAqIENvbnZlbmllbnQgc2luZ2xlIGltcG9ydCBmb3IgbGlnaHQgdmFyaWFibGVzXFxyXFxuICogSW5jbHVkZXMgYmFzZSB2YXJpYWJsZXMgd2l0aCBsaWdodCBvdmVycmlkZXNcXHJcXG4gKiovXFxuLyoqXFxyXFxuICogTGlnaHQgdmFyaWFibGUgb3ZlcnJpZGVzXFxyXFxuICoqL1xcbi8qKlxcclxcbiAqIFRoZW1lIHZhcmlhYmxlcyBvdmVycmlkZXNcXHJcXG4qKi9cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICA7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vQW5pbWFsQ2VudGVyLnNjc3MnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyoqXFxyXFxuICogQ29udmVuaWVudCBzaW5nbGUgaW1wb3J0IGZvciBsaWdodCB2YXJpYWJsZXNcXHJcXG4gKiBJbmNsdWRlcyBiYXNlIHZhcmlhYmxlcyB3aXRoIGxpZ2h0IG92ZXJyaWRlc1xcclxcbiAqKi9cXG4vKipcXHJcXG4gKiBMaWdodCB2YXJpYWJsZSBvdmVycmlkZXNcXHJcXG4gKiovXFxuLyoqXFxyXFxuICogVGhlbWUgdmFyaWFibGVzIG92ZXJyaWRlc1xcclxcbioqL1xcbi8qKlxcclxcbiAqIENvbG9yIGNsYXNzZXNcXHJcXG4gKiBUaGUgZm9sbG93aW5nIGNyZWF0ZXMgdGhpcyBwYXR0ZXJuOlxcclxcbiAqIC5jLWdyZXl7Y29sb3I6I2UwZTBlMH0uYy1iZy1ncmV5e2JhY2tncm91bmQtY29sb3I6I2UwZTBlMH1cXHJcXG4qKi9cXG4uYy13aGl0ZSB7XFxuICBjb2xvcjogI2ZmZjsgfVxcblxcbi5jLWJnLXdoaXRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cXG5cXG4uYy1ibGFjayB7XFxuICBjb2xvcjogIzAwMDsgfVxcblxcbi5jLWJnLWJsYWNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7IH1cXG5cXG4uYy1hcXVhIHtcXG4gIGNvbG9yOiAjMDBjYWFiOyB9XFxuXFxuLmMtYmctYXF1YSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjYWFiOyB9XFxuXFxuLmMtYmx1ZSB7XFxuICBjb2xvcjogIzNkNWFmZTsgfVxcblxcbi5jLWJnLWJsdWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNkNWFmZTsgfVxcblxcbi5jLWNoYXJjb2FsIHtcXG4gIGNvbG9yOiAjMzAzMDMwOyB9XFxuXFxuLmMtYmctY2hhcmNvYWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzAzMDsgfVxcblxcbi5jLWJyb3duIHtcXG4gIGNvbG9yOiAjNzk1NTQ4OyB9XFxuXFxuLmMtYmctYnJvd24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc5NTU0ODsgfVxcblxcbi5jLWZvcmVzdCB7XFxuICBjb2xvcjogIzAwNjk2ODsgfVxcblxcbi5jLWJnLWZvcmVzdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2OTY4OyB9XFxuXFxuLmMtZ3JleSB7XFxuICBjb2xvcjogI2UwZTBlMDsgfVxcblxcbi5jLWJnLWdyZXkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDsgfVxcblxcbi5jLWdyZXktbGlnaHQge1xcbiAgY29sb3I6ICNiYWJhYmE7IH1cXG5cXG4uYy1iZy1ncmV5LWxpZ2h0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiYWJhYmE7IH1cXG5cXG4uYy1ncmV5LWRhcmsge1xcbiAgY29sb3I6ICM1YzY4N2M7IH1cXG5cXG4uYy1iZy1ncmV5LWRhcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVjNjg3YzsgfVxcblxcbi5jLXB1cnBsZSB7XFxuICBjb2xvcjogIzgxMzBmZjsgfVxcblxcbi5jLWJnLXB1cnBsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODEzMGZmOyB9XFxuXFxuLmMtbGVtb24ge1xcbiAgY29sb3I6ICNmZmVhMDA7IH1cXG5cXG4uYy1iZy1sZW1vbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYTAwOyB9XFxuXFxuLmMtbGltZSB7XFxuICBjb2xvcjogI2FlZTQwNjsgfVxcblxcbi5jLWJnLWxpbWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FlZTQwNjsgfVxcblxcbi5jLW9yYW5nZSB7XFxuICBjb2xvcjogI2Y1N2MwMDsgfVxcblxcbi5jLWJnLW9yYW5nZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjU3YzAwOyB9XFxuXFxuLmMtcnVieSB7XFxuICBjb2xvcjogI2ZmMTc0NDsgfVxcblxcbi5jLWJnLXJ1Ynkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMTc0NDsgfVxcblxcbi5jLXNreSB7XFxuICBjb2xvcjogIzMwYmNmZjsgfVxcblxcbi5jLWJnLXNreSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzBiY2ZmOyB9XFxuXFxuLyogV2lkdGgvSGVpZ2h0ICovXFxuLnctZnVsbCB7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi53LTEwMCB7XFxuICB3aWR0aDogMTAwOyB9XFxuXFxuLmgtZnVsbCB7XFxuICBoZWlnaHQ6IDEwMCU7IH1cXG5cXG4uaC0xMDAge1xcbiAgaGVpZ2h0OiAxMDA7IH1cXG5cXG4vKipcXHJcXG4gKiBNYXJnaW4gYW5kIFBhZGRpbmdcXHJcXG4gKiBUaGUgZm9sbG93aW5nIGNyZWF0ZXMgdGhpcyBwYXR0ZXJuOlxcclxcbiAqIC5tLTB7bWFyZ2luOjB9Lm0tdC0we21hcmdpbi10b3A6MH0ubS1yLTB7bWFyZ2luLXJpZ2h0OjB9Lm0tYi0we21hcmdpbi1ib3R0b206MH0ubS1sLTB7bWFyZ2luLWxlZnQ6MH0ubS14LTB7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLWxlZnQ6MH0ubS15LTB7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MH1cXHJcXG4gKiBTYW1lIGZvciBQYWRkaW5nICh1c2luZyB0aGUgJ3AnIGFiYnJldmlhdGlvbilcXHJcXG4gKiBGcm9tIDAsIDIsIDUsIDEwLCAxNSwgMjAsIDI1LCAzMFxcclxcbioqL1xcbi5tLTAge1xcbiAgbWFyZ2luOiAwOyB9XFxuXFxuLm0tdC0wIHtcXG4gIG1hcmdpbi10b3A6IDA7IH1cXG5cXG4ubS1yLTAge1xcbiAgbWFyZ2luLXJpZ2h0OiAwOyB9XFxuXFxuLm0tYi0wIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7IH1cXG5cXG4ubS1sLTAge1xcbiAgbWFyZ2luLWxlZnQ6IDA7IH1cXG5cXG4ubS14LTAge1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgbWFyZ2luLWxlZnQ6IDA7IH1cXG5cXG4ubS15LTAge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDA7IH1cXG5cXG4ubS0yIHtcXG4gIG1hcmdpbjogMjsgfVxcblxcbi5tLXQtMiB7XFxuICBtYXJnaW4tdG9wOiAyOyB9XFxuXFxuLm0tci0yIHtcXG4gIG1hcmdpbi1yaWdodDogMjsgfVxcblxcbi5tLWItMiB7XFxuICBtYXJnaW4tYm90dG9tOiAyOyB9XFxuXFxuLm0tbC0yIHtcXG4gIG1hcmdpbi1sZWZ0OiAyOyB9XFxuXFxuLm0teC0yIHtcXG4gIG1hcmdpbi1yaWdodDogMjtcXG4gIG1hcmdpbi1sZWZ0OiAyOyB9XFxuXFxuLm0teS0yIHtcXG4gIG1hcmdpbi10b3A6IDI7XFxuICBtYXJnaW4tYm90dG9tOiAyOyB9XFxuXFxuLm0tNCB7XFxuICBtYXJnaW46IDQ7IH1cXG5cXG4ubS10LTQge1xcbiAgbWFyZ2luLXRvcDogNDsgfVxcblxcbi5tLXItNCB7XFxuICBtYXJnaW4tcmlnaHQ6IDQ7IH1cXG5cXG4ubS1iLTQge1xcbiAgbWFyZ2luLWJvdHRvbTogNDsgfVxcblxcbi5tLWwtNCB7XFxuICBtYXJnaW4tbGVmdDogNDsgfVxcblxcbi5tLXgtNCB7XFxuICBtYXJnaW4tcmlnaHQ6IDQ7XFxuICBtYXJnaW4tbGVmdDogNDsgfVxcblxcbi5tLXktNCB7XFxuICBtYXJnaW4tdG9wOiA0O1xcbiAgbWFyZ2luLWJvdHRvbTogNDsgfVxcblxcbi5tLTUge1xcbiAgbWFyZ2luOiA1OyB9XFxuXFxuLm0tdC01IHtcXG4gIG1hcmdpbi10b3A6IDU7IH1cXG5cXG4ubS1yLTUge1xcbiAgbWFyZ2luLXJpZ2h0OiA1OyB9XFxuXFxuLm0tYi01IHtcXG4gIG1hcmdpbi1ib3R0b206IDU7IH1cXG5cXG4ubS1sLTUge1xcbiAgbWFyZ2luLWxlZnQ6IDU7IH1cXG5cXG4ubS14LTUge1xcbiAgbWFyZ2luLXJpZ2h0OiA1O1xcbiAgbWFyZ2luLWxlZnQ6IDU7IH1cXG5cXG4ubS15LTUge1xcbiAgbWFyZ2luLXRvcDogNTtcXG4gIG1hcmdpbi1ib3R0b206IDU7IH1cXG5cXG4ubS04IHtcXG4gIG1hcmdpbjogODsgfVxcblxcbi5tLXQtOCB7XFxuICBtYXJnaW4tdG9wOiA4OyB9XFxuXFxuLm0tci04IHtcXG4gIG1hcmdpbi1yaWdodDogODsgfVxcblxcbi5tLWItOCB7XFxuICBtYXJnaW4tYm90dG9tOiA4OyB9XFxuXFxuLm0tbC04IHtcXG4gIG1hcmdpbi1sZWZ0OiA4OyB9XFxuXFxuLm0teC04IHtcXG4gIG1hcmdpbi1yaWdodDogODtcXG4gIG1hcmdpbi1sZWZ0OiA4OyB9XFxuXFxuLm0teS04IHtcXG4gIG1hcmdpbi10b3A6IDg7XFxuICBtYXJnaW4tYm90dG9tOiA4OyB9XFxuXFxuLm0tMTAge1xcbiAgbWFyZ2luOiAxMDsgfVxcblxcbi5tLXQtMTAge1xcbiAgbWFyZ2luLXRvcDogMTA7IH1cXG5cXG4ubS1yLTEwIHtcXG4gIG1hcmdpbi1yaWdodDogMTA7IH1cXG5cXG4ubS1iLTEwIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwOyB9XFxuXFxuLm0tbC0xMCB7XFxuICBtYXJnaW4tbGVmdDogMTA7IH1cXG5cXG4ubS14LTEwIHtcXG4gIG1hcmdpbi1yaWdodDogMTA7XFxuICBtYXJnaW4tbGVmdDogMTA7IH1cXG5cXG4ubS15LTEwIHtcXG4gIG1hcmdpbi10b3A6IDEwO1xcbiAgbWFyZ2luLWJvdHRvbTogMTA7IH1cXG5cXG4ubS0xMiB7XFxuICBtYXJnaW46IDEyOyB9XFxuXFxuLm0tdC0xMiB7XFxuICBtYXJnaW4tdG9wOiAxMjsgfVxcblxcbi5tLXItMTIge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMjsgfVxcblxcbi5tLWItMTIge1xcbiAgbWFyZ2luLWJvdHRvbTogMTI7IH1cXG5cXG4ubS1sLTEyIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMjsgfVxcblxcbi5tLXgtMTIge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMjtcXG4gIG1hcmdpbi1sZWZ0OiAxMjsgfVxcblxcbi5tLXktMTIge1xcbiAgbWFyZ2luLXRvcDogMTI7XFxuICBtYXJnaW4tYm90dG9tOiAxMjsgfVxcblxcbi5tLTE1IHtcXG4gIG1hcmdpbjogMTU7IH1cXG5cXG4ubS10LTE1IHtcXG4gIG1hcmdpbi10b3A6IDE1OyB9XFxuXFxuLm0tci0xNSB7XFxuICBtYXJnaW4tcmlnaHQ6IDE1OyB9XFxuXFxuLm0tYi0xNSB7XFxuICBtYXJnaW4tYm90dG9tOiAxNTsgfVxcblxcbi5tLWwtMTUge1xcbiAgbWFyZ2luLWxlZnQ6IDE1OyB9XFxuXFxuLm0teC0xNSB7XFxuICBtYXJnaW4tcmlnaHQ6IDE1O1xcbiAgbWFyZ2luLWxlZnQ6IDE1OyB9XFxuXFxuLm0teS0xNSB7XFxuICBtYXJnaW4tdG9wOiAxNTtcXG4gIG1hcmdpbi1ib3R0b206IDE1OyB9XFxuXFxuLm0tMTYge1xcbiAgbWFyZ2luOiAxNjsgfVxcblxcbi5tLXQtMTYge1xcbiAgbWFyZ2luLXRvcDogMTY7IH1cXG5cXG4ubS1yLTE2IHtcXG4gIG1hcmdpbi1yaWdodDogMTY7IH1cXG5cXG4ubS1iLTE2IHtcXG4gIG1hcmdpbi1ib3R0b206IDE2OyB9XFxuXFxuLm0tbC0xNiB7XFxuICBtYXJnaW4tbGVmdDogMTY7IH1cXG5cXG4ubS14LTE2IHtcXG4gIG1hcmdpbi1yaWdodDogMTY7XFxuICBtYXJnaW4tbGVmdDogMTY7IH1cXG5cXG4ubS15LTE2IHtcXG4gIG1hcmdpbi10b3A6IDE2O1xcbiAgbWFyZ2luLWJvdHRvbTogMTY7IH1cXG5cXG4ubS0yMCB7XFxuICBtYXJnaW46IDIwOyB9XFxuXFxuLm0tdC0yMCB7XFxuICBtYXJnaW4tdG9wOiAyMDsgfVxcblxcbi5tLXItMjAge1xcbiAgbWFyZ2luLXJpZ2h0OiAyMDsgfVxcblxcbi5tLWItMjAge1xcbiAgbWFyZ2luLWJvdHRvbTogMjA7IH1cXG5cXG4ubS1sLTIwIHtcXG4gIG1hcmdpbi1sZWZ0OiAyMDsgfVxcblxcbi5tLXgtMjAge1xcbiAgbWFyZ2luLXJpZ2h0OiAyMDtcXG4gIG1hcmdpbi1sZWZ0OiAyMDsgfVxcblxcbi5tLXktMjAge1xcbiAgbWFyZ2luLXRvcDogMjA7XFxuICBtYXJnaW4tYm90dG9tOiAyMDsgfVxcblxcbi5tLTI0IHtcXG4gIG1hcmdpbjogMjQ7IH1cXG5cXG4ubS10LTI0IHtcXG4gIG1hcmdpbi10b3A6IDI0OyB9XFxuXFxuLm0tci0yNCB7XFxuICBtYXJnaW4tcmlnaHQ6IDI0OyB9XFxuXFxuLm0tYi0yNCB7XFxuICBtYXJnaW4tYm90dG9tOiAyNDsgfVxcblxcbi5tLWwtMjQge1xcbiAgbWFyZ2luLWxlZnQ6IDI0OyB9XFxuXFxuLm0teC0yNCB7XFxuICBtYXJnaW4tcmlnaHQ6IDI0O1xcbiAgbWFyZ2luLWxlZnQ6IDI0OyB9XFxuXFxuLm0teS0yNCB7XFxuICBtYXJnaW4tdG9wOiAyNDtcXG4gIG1hcmdpbi1ib3R0b206IDI0OyB9XFxuXFxuLm0tMjUge1xcbiAgbWFyZ2luOiAyNTsgfVxcblxcbi5tLXQtMjUge1xcbiAgbWFyZ2luLXRvcDogMjU7IH1cXG5cXG4ubS1yLTI1IHtcXG4gIG1hcmdpbi1yaWdodDogMjU7IH1cXG5cXG4ubS1iLTI1IHtcXG4gIG1hcmdpbi1ib3R0b206IDI1OyB9XFxuXFxuLm0tbC0yNSB7XFxuICBtYXJnaW4tbGVmdDogMjU7IH1cXG5cXG4ubS14LTI1IHtcXG4gIG1hcmdpbi1yaWdodDogMjU7XFxuICBtYXJnaW4tbGVmdDogMjU7IH1cXG5cXG4ubS15LTI1IHtcXG4gIG1hcmdpbi10b3A6IDI1O1xcbiAgbWFyZ2luLWJvdHRvbTogMjU7IH1cXG5cXG4ubS0yOCB7XFxuICBtYXJnaW46IDI4OyB9XFxuXFxuLm0tdC0yOCB7XFxuICBtYXJnaW4tdG9wOiAyODsgfVxcblxcbi5tLXItMjgge1xcbiAgbWFyZ2luLXJpZ2h0OiAyODsgfVxcblxcbi5tLWItMjgge1xcbiAgbWFyZ2luLWJvdHRvbTogMjg7IH1cXG5cXG4ubS1sLTI4IHtcXG4gIG1hcmdpbi1sZWZ0OiAyODsgfVxcblxcbi5tLXgtMjgge1xcbiAgbWFyZ2luLXJpZ2h0OiAyODtcXG4gIG1hcmdpbi1sZWZ0OiAyODsgfVxcblxcbi5tLXktMjgge1xcbiAgbWFyZ2luLXRvcDogMjg7XFxuICBtYXJnaW4tYm90dG9tOiAyODsgfVxcblxcbi5tLTMwIHtcXG4gIG1hcmdpbjogMzA7IH1cXG5cXG4ubS10LTMwIHtcXG4gIG1hcmdpbi10b3A6IDMwOyB9XFxuXFxuLm0tci0zMCB7XFxuICBtYXJnaW4tcmlnaHQ6IDMwOyB9XFxuXFxuLm0tYi0zMCB7XFxuICBtYXJnaW4tYm90dG9tOiAzMDsgfVxcblxcbi5tLWwtMzAge1xcbiAgbWFyZ2luLWxlZnQ6IDMwOyB9XFxuXFxuLm0teC0zMCB7XFxuICBtYXJnaW4tcmlnaHQ6IDMwO1xcbiAgbWFyZ2luLWxlZnQ6IDMwOyB9XFxuXFxuLm0teS0zMCB7XFxuICBtYXJnaW4tdG9wOiAzMDtcXG4gIG1hcmdpbi1ib3R0b206IDMwOyB9XFxuXFxuLnAtMCB7XFxuICBwYWRkaW5nOiAwOyB9XFxuXFxuLnAtdC0wIHtcXG4gIHBhZGRpbmctdG9wOiAwOyB9XFxuXFxuLnAtci0wIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDA7IH1cXG5cXG4ucC1iLTAge1xcbiAgcGFkZGluZy1ib3R0b206IDA7IH1cXG5cXG4ucC1sLTAge1xcbiAgcGFkZGluZy1sZWZ0OiAwOyB9XFxuXFxuLnAteC0wIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDA7XFxuICBwYWRkaW5nLWxlZnQ6IDA7IH1cXG5cXG4ucC15LTAge1xcbiAgcGFkZGluZy10b3A6IDA7XFxuICBwYWRkaW5nLWJvdHRvbTogMDsgfVxcblxcbi5wLTIge1xcbiAgcGFkZGluZzogMjsgfVxcblxcbi5wLXQtMiB7XFxuICBwYWRkaW5nLXRvcDogMjsgfVxcblxcbi5wLXItMiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyOyB9XFxuXFxuLnAtYi0yIHtcXG4gIHBhZGRpbmctYm90dG9tOiAyOyB9XFxuXFxuLnAtbC0yIHtcXG4gIHBhZGRpbmctbGVmdDogMjsgfVxcblxcbi5wLXgtMiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyO1xcbiAgcGFkZGluZy1sZWZ0OiAyOyB9XFxuXFxuLnAteS0yIHtcXG4gIHBhZGRpbmctdG9wOiAyO1xcbiAgcGFkZGluZy1ib3R0b206IDI7IH1cXG5cXG4ucC00IHtcXG4gIHBhZGRpbmc6IDQ7IH1cXG5cXG4ucC10LTQge1xcbiAgcGFkZGluZy10b3A6IDQ7IH1cXG5cXG4ucC1yLTQge1xcbiAgcGFkZGluZy1yaWdodDogNDsgfVxcblxcbi5wLWItNCB7XFxuICBwYWRkaW5nLWJvdHRvbTogNDsgfVxcblxcbi5wLWwtNCB7XFxuICBwYWRkaW5nLWxlZnQ6IDQ7IH1cXG5cXG4ucC14LTQge1xcbiAgcGFkZGluZy1yaWdodDogNDtcXG4gIHBhZGRpbmctbGVmdDogNDsgfVxcblxcbi5wLXktNCB7XFxuICBwYWRkaW5nLXRvcDogNDtcXG4gIHBhZGRpbmctYm90dG9tOiA0OyB9XFxuXFxuLnAtNSB7XFxuICBwYWRkaW5nOiA1OyB9XFxuXFxuLnAtdC01IHtcXG4gIHBhZGRpbmctdG9wOiA1OyB9XFxuXFxuLnAtci01IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDU7IH1cXG5cXG4ucC1iLTUge1xcbiAgcGFkZGluZy1ib3R0b206IDU7IH1cXG5cXG4ucC1sLTUge1xcbiAgcGFkZGluZy1sZWZ0OiA1OyB9XFxuXFxuLnAteC01IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDU7XFxuICBwYWRkaW5nLWxlZnQ6IDU7IH1cXG5cXG4ucC15LTUge1xcbiAgcGFkZGluZy10b3A6IDU7XFxuICBwYWRkaW5nLWJvdHRvbTogNTsgfVxcblxcbi5wLTgge1xcbiAgcGFkZGluZzogODsgfVxcblxcbi5wLXQtOCB7XFxuICBwYWRkaW5nLXRvcDogODsgfVxcblxcbi5wLXItOCB7XFxuICBwYWRkaW5nLXJpZ2h0OiA4OyB9XFxuXFxuLnAtYi04IHtcXG4gIHBhZGRpbmctYm90dG9tOiA4OyB9XFxuXFxuLnAtbC04IHtcXG4gIHBhZGRpbmctbGVmdDogODsgfVxcblxcbi5wLXgtOCB7XFxuICBwYWRkaW5nLXJpZ2h0OiA4O1xcbiAgcGFkZGluZy1sZWZ0OiA4OyB9XFxuXFxuLnAteS04IHtcXG4gIHBhZGRpbmctdG9wOiA4O1xcbiAgcGFkZGluZy1ib3R0b206IDg7IH1cXG5cXG4ucC0xMCB7XFxuICBwYWRkaW5nOiAxMDsgfVxcblxcbi5wLXQtMTAge1xcbiAgcGFkZGluZy10b3A6IDEwOyB9XFxuXFxuLnAtci0xMCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMDsgfVxcblxcbi5wLWItMTAge1xcbiAgcGFkZGluZy1ib3R0b206IDEwOyB9XFxuXFxuLnAtbC0xMCB7XFxuICBwYWRkaW5nLWxlZnQ6IDEwOyB9XFxuXFxuLnAteC0xMCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMDtcXG4gIHBhZGRpbmctbGVmdDogMTA7IH1cXG5cXG4ucC15LTEwIHtcXG4gIHBhZGRpbmctdG9wOiAxMDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMDsgfVxcblxcbi5wLTEyIHtcXG4gIHBhZGRpbmc6IDEyOyB9XFxuXFxuLnAtdC0xMiB7XFxuICBwYWRkaW5nLXRvcDogMTI7IH1cXG5cXG4ucC1yLTEyIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDEyOyB9XFxuXFxuLnAtYi0xMiB7XFxuICBwYWRkaW5nLWJvdHRvbTogMTI7IH1cXG5cXG4ucC1sLTEyIHtcXG4gIHBhZGRpbmctbGVmdDogMTI7IH1cXG5cXG4ucC14LTEyIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDEyO1xcbiAgcGFkZGluZy1sZWZ0OiAxMjsgfVxcblxcbi5wLXktMTIge1xcbiAgcGFkZGluZy10b3A6IDEyO1xcbiAgcGFkZGluZy1ib3R0b206IDEyOyB9XFxuXFxuLnAtMTUge1xcbiAgcGFkZGluZzogMTU7IH1cXG5cXG4ucC10LTE1IHtcXG4gIHBhZGRpbmctdG9wOiAxNTsgfVxcblxcbi5wLXItMTUge1xcbiAgcGFkZGluZy1yaWdodDogMTU7IH1cXG5cXG4ucC1iLTE1IHtcXG4gIHBhZGRpbmctYm90dG9tOiAxNTsgfVxcblxcbi5wLWwtMTUge1xcbiAgcGFkZGluZy1sZWZ0OiAxNTsgfVxcblxcbi5wLXgtMTUge1xcbiAgcGFkZGluZy1yaWdodDogMTU7XFxuICBwYWRkaW5nLWxlZnQ6IDE1OyB9XFxuXFxuLnAteS0xNSB7XFxuICBwYWRkaW5nLXRvcDogMTU7XFxuICBwYWRkaW5nLWJvdHRvbTogMTU7IH1cXG5cXG4ucC0xNiB7XFxuICBwYWRkaW5nOiAxNjsgfVxcblxcbi5wLXQtMTYge1xcbiAgcGFkZGluZy10b3A6IDE2OyB9XFxuXFxuLnAtci0xNiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNjsgfVxcblxcbi5wLWItMTYge1xcbiAgcGFkZGluZy1ib3R0b206IDE2OyB9XFxuXFxuLnAtbC0xNiB7XFxuICBwYWRkaW5nLWxlZnQ6IDE2OyB9XFxuXFxuLnAteC0xNiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNjtcXG4gIHBhZGRpbmctbGVmdDogMTY7IH1cXG5cXG4ucC15LTE2IHtcXG4gIHBhZGRpbmctdG9wOiAxNjtcXG4gIHBhZGRpbmctYm90dG9tOiAxNjsgfVxcblxcbi5wLTIwIHtcXG4gIHBhZGRpbmc6IDIwOyB9XFxuXFxuLnAtdC0yMCB7XFxuICBwYWRkaW5nLXRvcDogMjA7IH1cXG5cXG4ucC1yLTIwIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwOyB9XFxuXFxuLnAtYi0yMCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMjA7IH1cXG5cXG4ucC1sLTIwIHtcXG4gIHBhZGRpbmctbGVmdDogMjA7IH1cXG5cXG4ucC14LTIwIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwO1xcbiAgcGFkZGluZy1sZWZ0OiAyMDsgfVxcblxcbi5wLXktMjAge1xcbiAgcGFkZGluZy10b3A6IDIwO1xcbiAgcGFkZGluZy1ib3R0b206IDIwOyB9XFxuXFxuLnAtMjQge1xcbiAgcGFkZGluZzogMjQ7IH1cXG5cXG4ucC10LTI0IHtcXG4gIHBhZGRpbmctdG9wOiAyNDsgfVxcblxcbi5wLXItMjQge1xcbiAgcGFkZGluZy1yaWdodDogMjQ7IH1cXG5cXG4ucC1iLTI0IHtcXG4gIHBhZGRpbmctYm90dG9tOiAyNDsgfVxcblxcbi5wLWwtMjQge1xcbiAgcGFkZGluZy1sZWZ0OiAyNDsgfVxcblxcbi5wLXgtMjQge1xcbiAgcGFkZGluZy1yaWdodDogMjQ7XFxuICBwYWRkaW5nLWxlZnQ6IDI0OyB9XFxuXFxuLnAteS0yNCB7XFxuICBwYWRkaW5nLXRvcDogMjQ7XFxuICBwYWRkaW5nLWJvdHRvbTogMjQ7IH1cXG5cXG4ucC0yNSB7XFxuICBwYWRkaW5nOiAyNTsgfVxcblxcbi5wLXQtMjUge1xcbiAgcGFkZGluZy10b3A6IDI1OyB9XFxuXFxuLnAtci0yNSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyNTsgfVxcblxcbi5wLWItMjUge1xcbiAgcGFkZGluZy1ib3R0b206IDI1OyB9XFxuXFxuLnAtbC0yNSB7XFxuICBwYWRkaW5nLWxlZnQ6IDI1OyB9XFxuXFxuLnAteC0yNSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyNTtcXG4gIHBhZGRpbmctbGVmdDogMjU7IH1cXG5cXG4ucC15LTI1IHtcXG4gIHBhZGRpbmctdG9wOiAyNTtcXG4gIHBhZGRpbmctYm90dG9tOiAyNTsgfVxcblxcbi5wLTI4IHtcXG4gIHBhZGRpbmc6IDI4OyB9XFxuXFxuLnAtdC0yOCB7XFxuICBwYWRkaW5nLXRvcDogMjg7IH1cXG5cXG4ucC1yLTI4IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDI4OyB9XFxuXFxuLnAtYi0yOCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMjg7IH1cXG5cXG4ucC1sLTI4IHtcXG4gIHBhZGRpbmctbGVmdDogMjg7IH1cXG5cXG4ucC14LTI4IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDI4O1xcbiAgcGFkZGluZy1sZWZ0OiAyODsgfVxcblxcbi5wLXktMjgge1xcbiAgcGFkZGluZy10b3A6IDI4O1xcbiAgcGFkZGluZy1ib3R0b206IDI4OyB9XFxuXFxuLnAtMzAge1xcbiAgcGFkZGluZzogMzA7IH1cXG5cXG4ucC10LTMwIHtcXG4gIHBhZGRpbmctdG9wOiAzMDsgfVxcblxcbi5wLXItMzAge1xcbiAgcGFkZGluZy1yaWdodDogMzA7IH1cXG5cXG4ucC1iLTMwIHtcXG4gIHBhZGRpbmctYm90dG9tOiAzMDsgfVxcblxcbi5wLWwtMzAge1xcbiAgcGFkZGluZy1sZWZ0OiAzMDsgfVxcblxcbi5wLXgtMzAge1xcbiAgcGFkZGluZy1yaWdodDogMzA7XFxuICBwYWRkaW5nLWxlZnQ6IDMwOyB9XFxuXFxuLnAteS0zMCB7XFxuICBwYWRkaW5nLXRvcDogMzA7XFxuICBwYWRkaW5nLWJvdHRvbTogMzA7IH1cXG5cXG4vKiBEaXZpZGVycyAqL1xcbi5oci1saWdodCB7XFxuICBoZWlnaHQ6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4uaHItZGFyayB7XFxuICBoZWlnaHQ6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4vKiBBbGlnbm1lbnQgKi9cXG4udGV4dC1sZWZ0IHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7IH1cXG5cXG4udGV4dC1yaWdodCB7XFxuICB0ZXh0LWFsaWduOiByaWdodDsgfVxcblxcbi50ZXh0LWNlbnRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4udGV4dC1sb3dlcmNhc2Uge1xcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTsgfVxcblxcbi50ZXh0LXVwcGVyY2FzZSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuXFxuLnRleHQtY2FwaXRhbGl6ZSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTsgfVxcblxcbi5mb250LXdlaWdodC1ub3JtYWwge1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgfVxcblxcbi5mb250LXdlaWdodC1ib2xkIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuXFxuLmZvbnQtaXRhbGljIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYzsgfVxcblxcbi8qKlxcclxcbiAqIEZvbnQgc2l6ZVxcclxcbiAqIFRoZSBmb2xsb3dpbmcgY3JlYXRlcyB0aGlzIHBhdHRlcm46XFxyXFxuICogLnQtMTB7Zm9udC1zaXplOjEwfVxcclxcbiAqIEZyb20gMTAsIDEyLCAxNCwgMTUsIDE2LCAxNywgMTgsIDE5LCAyMFxcclxcbioqL1xcbi50LTEwIHtcXG4gIGZvbnQtc2l6ZTogMTA7IH1cXG5cXG4udC0xMiB7XFxuICBmb250LXNpemU6IDEyOyB9XFxuXFxuLnQtMTQge1xcbiAgZm9udC1zaXplOiAxNDsgfVxcblxcbi50LTE1IHtcXG4gIGZvbnQtc2l6ZTogMTU7IH1cXG5cXG4udC0xNiB7XFxuICBmb250LXNpemU6IDE2OyB9XFxuXFxuLnQtMTcge1xcbiAgZm9udC1zaXplOiAxNzsgfVxcblxcbi50LTE4IHtcXG4gIGZvbnQtc2l6ZTogMTg7IH1cXG5cXG4udC0xOSB7XFxuICBmb250LXNpemU6IDE5OyB9XFxuXFxuLnQtMjAge1xcbiAgZm9udC1zaXplOiAyMDsgfVxcblxcbi50LTI1IHtcXG4gIGZvbnQtc2l6ZTogMjU7IH1cXG5cXG4udC0zMCB7XFxuICBmb250LXNpemU6IDMwOyB9XFxuXFxuLmltZy1yb3VuZGVkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDU7IH1cXG5cXG4uaW1nLWNpcmNsZSB7XFxuICBib3JkZXItcmFkaXVzOiAyMDsgfVxcblxcbi5pbWctdGh1bWJuYWlsIHtcXG4gIGJvcmRlci1yYWRpdXM6IDA7IH1cXG5cXG4uaW52aXNpYmxlIHtcXG4gIHZpc2liaWxpdHk6IGNvbGxhcHNlOyB9XFxuXFxuLnB1bGwtbGVmdCB7XFxuICBob3Jpem9udGFsLWFsaWduOiBsZWZ0OyB9XFxuXFxuLnB1bGwtcmlnaHQge1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogcmlnaHQ7IH1cXG5cXG4ubS14LWF1dG8ge1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLm0teS1hdXRvIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7IH1cXG5cXG4udGV4dC1wcmltYXJ5IHtcXG4gIGNvbG9yOiAjM0E1M0ZGOyB9XFxuXFxuLnRleHQtZGFuZ2VyIHtcXG4gIGNvbG9yOiAjRUQ0NzNGOyB9XFxuXFxuLnRleHQtbXV0ZWQge1xcbiAgY29sb3I6ICM5ZTllOWU7IH1cXG5cXG4uYmctcHJpbWFyeSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0E1M0ZGO1xcbiAgY29sb3I6ICNmZmY7IH1cXG5cXG4uYmctZGFuZ2VyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRDQ3M0Y7XFxuICBjb2xvcjogI2ZmZjsgfVxcblxcbi5hY3Rpb24tYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzQTUzRkY7XFxuICBjb2xvcjogI2ZmZjsgfVxcbiAgLmFjdGlvbi1iYXIgLmFjdGlvbi1iYXItdGl0bGUge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxNztcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjsgfVxcbiAgLmFjdGlvbi1iYXIgLmFjdGlvbi1pdGVtIHtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgfVxcblxcbi5hY3Rpdml0eS1pbmRpY2F0b3Ige1xcbiAgY29sb3I6ICMzQTUzRkY7XFxuICB3aWR0aDogMzA7XFxuICBoZWlnaHQ6IDMwOyB9XFxuXFxuLmJ0biB7XFxuICBjb2xvcjogIzAyNTU2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgbWluLWhlaWdodDogMzY7XFxuICBtaW4td2lkdGg6IDY0O1xcbiAgcGFkZGluZzogMTAgMTAgMTAgMTA7XFxuICBmb250LXNpemU6IDE4O1xcbiAgbWFyZ2luOiA4IDE2IDggMTY7IH1cXG4gIC5idG4uYnRuLWFjdGl2ZTpoaWdobGlnaHRlZCB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDM3Y2EwOyB9XFxuXFxuLmJ0bi1wcmltYXJ5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjU1NmU7XFxuICBib3JkZXItY29sb3I6ICMwMjU1NmU7XFxuICBjb2xvcjogI2ZmZjsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1hY3RpdmU6aGlnaGxpZ2h0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEyZTNjO1xcbiAgICBib3JkZXItY29sb3I6ICMwMTJlM2M7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tYXF1YSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGNhYWI7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tYmx1ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZDVhZmU7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tYnJvd24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk1NTQ4OyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLWZvcmVzdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDY5Njg7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tZ3JleSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1YzY4N2M7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tbGVtb24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYTAwO1xcbiAgICBjb2xvcjogIzAwMDsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1saW1lIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FlZTQwNjtcXG4gICAgY29sb3I6ICMwMDA7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tb3JhbmdlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1N2MwMDsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1wdXJwbGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODEzMGZmOyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLXJ1Ynkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYxNzQ0OyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLXNreSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMGJjZmY7IH1cXG5cXG4uYnRuLW91dGxpbmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItY29sb3I6ICMwMjU1NmU7XFxuICBjb2xvcjogIzAyNTU2ZTsgfVxcbiAgLmJ0bi1vdXRsaW5lLmJ0bi1hY3RpdmU6aGlnaGxpZ2h0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDM3Y2EwOyB9XFxuXFxuLmJ0bltpc0VuYWJsZWQ9ZmFsc2VdIHtcXG4gIGNvbG9yOiAjYTRhNGE0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG4gIGJvcmRlci1jb2xvcjogI2UwZTBlMDsgfVxcblxcbi5mYSB7XFxuICBmb250LWZhbWlseTogRm9udEF3ZXNvbWUsIGZvbnRhd2Vzb21lLXdlYmZvbnQ7IH1cXG5cXG4uZm9ybSAuaW5wdXQge1xcbiAgcGFkZGluZzogMTYgOCAxNiA4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG4gIC5mb3JtIC5pbnB1dC5pbnB1dC1ib3JkZXIge1xcbiAgICBib3JkZXItd2lkdGg6IDE7XFxuICAgIGJvcmRlci1jb2xvcjogI2UwZTBlMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjtcXG4gICAgcGFkZGluZzogMTY7IH1cXG4gIC5mb3JtIC5pbnB1dC5pbnB1dC1yb3VuZGVkIHtcXG4gICAgYm9yZGVyLXdpZHRoOiAxO1xcbiAgICBib3JkZXItY29sb3I6ICNlMGUwZTA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI4O1xcbiAgICBwYWRkaW5nOiAxNjsgfVxcbiAgLmZvcm0gLmlucHV0W2lzRW5hYmxlZD0nZmFsc2UnXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7IH1cXG5cXG4uZm9ybSAuaW5wdXQtZmllbGQge1xcbiAgbWFyZ2luOiA4OyB9XFxuICAuZm9ybSAuaW5wdXQtZmllbGQgLmxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxMjtcXG4gICAgY29sb3I6ICNiYWJhYmE7IH1cXG4gIC5mb3JtIC5pbnB1dC1maWVsZCAuaW5wdXQge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDAgMCA4IDA7IH1cXG4gIC5mb3JtIC5pbnB1dC1maWVsZCAuaHItbGlnaHQuYWN0aXZlLFxcbiAgLmZvcm0gLmlucHV0LWZpZWxkIC5oci1kYXJrLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzQTUzRkY7IH1cXG4gIC5mb3JtIC5pbnB1dC1maWVsZC5pbnB1dC1zaWRlcyAubGFiZWwge1xcbiAgICBmb250LXNpemU6IDE4O1xcbiAgICBtYXJnaW46IDAgMCA4IDA7IH1cXG5cXG4uaDEsIC5oMiwgLmgzLCAuaDQsIC5oNSwgLmg2IHtcXG4gIG1hcmdpbi1ib3R0b206IDQ7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgY29sb3I6ICMwMjI3MzQ7IH1cXG5cXG4uYm9keSxcXG4uYm9keTIsXFxuLmZvb3Rub3RlIHtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBjb2xvcjogIzAyMjczNDsgfVxcblxcbi5oMSB7XFxuICBmb250LXNpemU6IDMyOyB9XFxuXFxuLmgyIHtcXG4gIGZvbnQtc2l6ZTogMjI7IH1cXG5cXG4uaDMge1xcbiAgZm9udC1zaXplOiAxNTsgfVxcblxcbi5oNCB7XFxuICBmb250LXNpemU6IDEyOyB9XFxuXFxuLmg1IHtcXG4gIGZvbnQtc2l6ZTogMTE7IH1cXG5cXG4uaDYge1xcbiAgZm9udC1zaXplOiAxMDsgfVxcblxcbi5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMTQ7IH1cXG5cXG4uYm9keTIge1xcbiAgZm9udC1zaXplOiAxNzsgfVxcblxcbi5mb290bm90ZSB7XFxuICBmb250LXNpemU6IDEzOyB9XFxuXFxuLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbSB7XFxuICBjb2xvcjogIzIxMjEyMTtcXG4gIGZvbnQtc2l6ZTogMTY7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAxNjsgfVxcbiAgLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbSBMYWJlbCB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7IH1cXG4gIC5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW0gLnRodW1iIHtcXG4gICAgc3RyZXRjaDogZmlsbDtcXG4gICAgd2lkdGg6IDQwO1xcbiAgICBoZWlnaHQ6IDQwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE2OyB9XFxuICAubGlzdC1ncm91cCAubGlzdC1ncm91cC1pdGVtLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7IH1cXG4gIC5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW0gLmxpc3QtZ3JvdXAtaXRlbS10ZXh0IHtcXG4gICAgY29sb3I6ICMwMjI3MzQ7XFxuICAgIGZvbnQtc2l6ZTogMTQ7IH1cXG5cXG4ucGFnZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XFxuXFxuLnByb2dyZXNzIHtcXG4gIGNvbG9yOiAjM0E1M0ZGO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JhYmFiYTsgfVxcblxcbi5zZWdtZW50ZWQtYmFyIHtcXG4gIGZvbnQtc2l6ZTogMTM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgY29sb3I6ICMyMTIxMjE7XFxuICBzZWxlY3RlZC1iYWNrZ3JvdW5kLWNvbG9yOiAjM0E1M0ZGOyB9XFxuXFxuLnNpZGVkcmF3ZXItbGVmdCwgLnNpZGVkcmF3ZXItY2VudGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7IH1cXG5cXG4uc2lkZWRyYXdlci1oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcXG4gIGhlaWdodDogMTQ4O1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4uc2lkZWRyYXdlci1sZWZ0IC5zaWRlZHJhd2VyLWhlYWRlciB7XFxuICBwYWRkaW5nOiAxNiAxNiAwIDE2OyB9XFxuXFxuLnNpZGVkcmF3ZXItY2VudGVyIC5zaWRlZHJhd2VyLWhlYWRlciB7XFxuICBwYWRkaW5nOiAyMCAxNSAwIDE1OyB9XFxuXFxuLnNpZGVkcmF3ZXItaGVhZGVyLWltYWdlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7IH1cXG5cXG4uc2lkZWRyYXdlci1sZWZ0IC5zaWRlZHJhd2VyLWhlYWRlci1pbWFnZSB7XFxuICBoZWlnaHQ6IDY0O1xcbiAgd2lkdGg6IDY0O1xcbiAgYm9yZGVyLXJhZGl1czogMzI7XFxuICBob3Jpem9udGFsLWFsaWduOiBsZWZ0O1xcbiAgbWFyZ2luLWJvdHRvbTogMzY7IH1cXG5cXG4uc2lkZWRyYXdlci1jZW50ZXIgLnNpZGVkcmF3ZXItaGVhZGVyLWltYWdlIHtcXG4gIGhlaWdodDogNzQ7XFxuICB3aWR0aDogNzQ7XFxuICBib3JkZXItcmFkaXVzOiAzNztcXG4gIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDI0OyB9XFxuXFxuLnNpZGVkcmF3ZXItaGVhZGVyLWJyYW5kIHtcXG4gIGNvbG9yOiAjNzM3MzczOyB9XFxuXFxuLnNpZGVkcmF3ZXItbGVmdCAuc2lkZWRyYXdlci1oZWFkZXItYnJhbmQge1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogbGVmdDtcXG4gIGZvbnQtc2l6ZTogMTQ7IH1cXG5cXG4uc2lkZWRyYXdlci1jZW50ZXIgLnNpZGVkcmF3ZXItaGVhZGVyLWJyYW5kIHtcXG4gIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTU7IH1cXG5cXG4uc2lkZWRyYXdlci1saXN0LWl0ZW0ge1xcbiAgaGVpZ2h0OiA0ODtcXG4gIGhvcml6b250YWwtYWxpZ246IGxlZnQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIG9yaWVudGF0aW9uOiBob3Jpem9udGFsOyB9XFxuICAuc2lkZWRyYXdlci1saXN0LWl0ZW0gLnNpZGVkcmF3ZXItbGlzdC1pdGVtLWljb24ge1xcbiAgICB3aWR0aDogMjQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMDtcXG4gICAgaGVpZ2h0OiA0ODtcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjsgfVxcbiAgLnNpZGVkcmF3ZXItbGlzdC1pdGVtLmFjdGl2ZSB7XFxuICAgIGNvbG9yOiAjM0E1M0ZGO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEY4OyB9XFxuICAgIC5zaWRlZHJhd2VyLWxpc3QtaXRlbS5hY3RpdmUgLnNpZGVkcmF3ZXItbGlzdC1pdGVtLWljb24ge1xcbiAgICAgIGNvbG9yOiAjM0E1M0ZGOyB9XFxuXFxuLnNpZGVkcmF3ZXItbGVmdCAuc2lkZWRyYXdlci1saXN0LWl0ZW0taWNvbiB7XFxuICBtYXJnaW46IDAgMTYgMCAxNjsgfVxcblxcbi5zaWRlZHJhd2VyLWNlbnRlciAuc2lkZWRyYXdlci1saXN0LWl0ZW0taWNvbiB7XFxuICBtYXJnaW46IDAgMCAwIDE1OyB9XFxuXFxuLnNpZGVkcmF3ZXItbGlzdC1pdGVtLXRleHQge1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogbGVmdDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBmb250LXNpemU6IDE1O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItd2lkdGg6IDAuMTtcXG4gIHdpZHRoOiA4MCU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLnNpZGVkcmF3ZXItbGVmdCAuc2lkZWRyYXdlci1saXN0LWl0ZW0tdGV4dCB7XFxuICBwYWRkaW5nLWxlZnQ6IDE2OyB9XFxuXFxuLnNpZGVkcmF3ZXItY2VudGVyIC5zaWRlZHJhd2VyLWxpc3QtaXRlbS10ZXh0IHtcXG4gIHBhZGRpbmctbGVmdDogMTU7IH1cXG5cXG4uc2xpZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzQTUzRkY7IH1cXG4gIC5zbGlkZXJbaXNFbmFibGVkPWZhbHNlXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxuICAgIGNvbG9yOiAjZTBlMGUwOyB9XFxuXFxuLnN3aXRjaFtjaGVja2VkPXRydWVdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzQTUzRkY7XFxuICBjb2xvcjogIzNBNTNGRjsgfVxcblxcbi5zd2l0Y2hbY2hlY2tlZD10cnVlXVtpc0VuYWJsZWQ9ZmFsc2VdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxuICBjb2xvcjogI2ZmZjsgfVxcblxcbi5zd2l0Y2hbaXNFbmFibGVkPWZhbHNlXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbiAgY29sb3I6ICNlMGUwZTA7IH1cXG5cXG4udGFiLXZpZXcge1xcbiAgLypjb2xvcjogJHNlY29uZGFyeTsqL1xcbiAgc2VsZWN0ZWQtY29sb3I6ICMzMGJjZmY7XFxuICB0YWJzLWJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cXG4gIC50YWItdmlldyAudGFiLXZpZXctaXRlbSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIHRhYnMtYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxcblxcbiNsb2dpbi1iYWNrZ3JvdW5kIHtcXG4gIG1hcmdpbi10b3A6IC0yMDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IH1cXG5cXG4ubG9naW4td3JhcCB7XFxuICBwYWRkaW5nOiAwIDQwOyB9XFxuXFxuLmxvZ28td3JhcCB7XFxuICBtYXJnaW46IDYwIDAgMTAgMDtcXG4gIHBhZGRpbmc6IDIwIDA7IH1cXG4gIC5sb2dvLXdyYXAgLmxvZ2luLWxvZ28ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMzA7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMDtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgY29sb3I6ICMyMTIxMjE7XFxuICAgIG9wYWNpdHk6IC45OyB9XFxuICAubG9nby13cmFwIC5sb2dpbi1sb2dvLXN1YiB7XFxuICAgIGNvbG9yOiAjMjEyMTIxO1xcbiAgICBvcGFjaXR5OiAuODtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLmxvZ2luLXdyYXBwZXIge1xcbiAgcGFkZGluZzogMjA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogMzsgfVxcbiAgLmxvZ2luLXdyYXBwZXIgVGV4dEZpZWxkIHtcXG4gICAgcGFkZGluZzogMTAgMTA7XFxuICAgIG1hcmdpbjogMTAgMCAwIDA7IH1cXG5cXG4uZ28tYmFjayB7XFxuICBmb250LXNpemU6IDE0O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICMyMTIxMjE7XFxuICBtYXJnaW4tdG9wOiAxMDsgfVxcblxcbi8qKlxcclxcbiAqIEltcG9ydCBhbGwgcGxhdGZvcm0gc3BlY2lmaWMgZmlsZXMgaGVyZVxcclxcbiAqL1xcbi5hY3Rpb24tYmFyIC5hY3Rpb24tYmFyLXRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDIwOyB9XFxuXFxuLmFjdGlvbi1iYXIgLmFjdGlvbi1pdGVtIHtcXG4gIGFuZHJvaWQtZWxldmF0aW9uOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDApO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMCk7XFxuICBib3JkZXItd2lkdGg6IDE7IH1cXG5cXG4uYnRuIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XFxuICBmb250LXNpemU6IDE0OyB9XFxuXFxuLmJ0bi1wcmltYXJ5IHtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDApOyB9XFxuXFxuLmJ0bi1vdXRsaW5lIHtcXG4gIGFuZHJvaWQtZWxldmF0aW9uOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDApO1xcbiAgYm9yZGVyLXdpZHRoOiAxO1xcbiAgYm9yZGVyLWNvbG9yOiAjMDI1NTZlO1xcbiAgaGVpZ2h0OiAzNjtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG4uYnRuLXJvdW5kZWQtc20ge1xcbiAgYm9yZGVyLXJhZGl1czogMjtcXG4gIGhlaWdodDogMzY7XFxuICBwYWRkaW5nOiAwOyB9XFxuXFxuLmJ0bi1yb3VuZGVkLWxnIHtcXG4gIGJvcmRlci1yYWRpdXM6IDQwO1xcbiAgaGVpZ2h0OiAzNjtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG4uZm9ybSB7XFxuICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJzsgfVxcbiAgLmZvcm0gLmlucHV0IHtcXG4gICAgZm9udC1zaXplOiAxNjsgfVxcblxcbi5oMSB7XFxuICBmb250LXNpemU6IDM0OyB9XFxuXFxuLmgyIHtcXG4gIGZvbnQtc2l6ZTogMjQ7IH1cXG5cXG4uaDMge1xcbiAgZm9udC1zaXplOiAxNjsgfVxcblxcbi5oNSB7XFxuICBmb250LXNpemU6IDExO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG5cXG4uYm9keTIge1xcbiAgZm9udC1zaXplOiAxNDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7IH1cXG5cXG4uc2lkZWRyYXdlci1saXN0LWl0ZW0taWNvbiB7XFxuICBtYXJnaW46IDAgMTYgMCAxNjtcXG4gIHBhZGRpbmctdG9wOiAxNDsgfVxcblxcbi5zaWRlZHJhd2VyLWxpc3QtaXRlbS1pY29uLCAuc2lkZWRyYXdlci1saXN0LWl0ZW0ge1xcbiAgY29sb3I6ICMwMjI3MzQ7IH1cXG5cXG4uc2lkZWRyYXdlci1saXN0LWl0ZW0ge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcXG4gIGZvbnQtc2l6ZTogMTQ7IH1cXG5cXG4uc2xpZGVyIHtcXG4gIGNvbG9yOiAjM0E1M0ZGO1xcbiAgbWFyZ2luOiAyMCAxNjsgfVxcblxcbi5zd2l0Y2gge1xcbiAgbWFyZ2luOiAxNCAxNjtcXG4gIGNvbG9yOiAjZTBlMGUwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDsgfVxcbiAgLnN3aXRjaFtjaGVja2VkPXRydWVdIHtcXG4gICAgY29sb3I6ICMzQTUzRkY7IH1cXG5cXG4uZmEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250QXdlc29tZVxcXCI7IH1cXG5cXG4uYWN0aW9uLWl0ZW0sXFxuTmF2aWdhdGlvbkJ1dHRvbiB7XFxuICBjb2xvcjogI2ZmZjsgfVxcblxcbi5hY3Rpb24taXRlbTpkaXNhYmxlZCB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpOyB9XFxuXFxuU2xpZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzQTUzRkY7XFxuICBjb2xvcjogIzNBNTNGRjsgfVxcblxcbi50ZXh0IHtcXG4gIGNvbG9yOiAjMDIyNzM0OyB9XFxuXFxuLnRleHQtcHJpbWFyeSB7XFxuICBjb2xvcjogIzNBNTNGRjsgfVxcblxcbi50ZXh0LXNlY29uZGFyeSB7XFxuICBjb2xvcjogcmdiYSgyLCAzOSwgNTIsIDAuNSk7IH1cXG5cXG4uYWN0aW9uLWl0ZW0ge1xcbiAgcGFkZGluZzogMCAxMDtcXG4gIGhlaWdodDogMTAwJTsgfVxcblxcbi5mYSB7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnRBd2Vzb21lXFxcIiwgXFxcImZvbnRhd2Vzb21lLXdlYmZvbnRcXFwiOyB9XFxuXFxuLmlvbiB7XFxuICBmb250LWZhbWlseTogXFxcImlvbmljb25zXFxcIjsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9hcHAuc2NzcycgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9BZG9wdGlvbkFuaW1hbERldGFpbHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRlYmEyZDEyJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0Fkb3B0aW9uQW5pbWFsRGV0YWlscy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0Fkb3B0aW9uQW5pbWFsRGV0YWlscy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vQWRvcHRpb25BbmltYWxEZXRhaWxzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTRlYmEyZDEyJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI0ZWJhMmQxMlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9EclNhbXNvbm5pdGUvRGVza3RvcC9DUyBDb3Vyc2UgbWF0ZXJpYWxzL1NlbmlvciBERXNpZ24vYWN1YVZfMi9hY3VhLW1vYmlsZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0ZWJhMmQxMicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0ZWJhMmQxMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0ZWJhMmQxMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQWRvcHRpb25BbmltYWxEZXRhaWxzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ZWJhMmQxMiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0ZWJhMmQxMicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9hZG9wdGlvbi9BZG9wdGlvbkFuaW1hbERldGFpbHMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Fkb3B0aW9uQW5pbWFsRGV0YWlscy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BZG9wdGlvbkFuaW1hbERldGFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BZG9wdGlvbkFuaW1hbERldGFpbHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NGViYTJkMTImc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRvcHRpb25BbmltYWxEZXRhaWxzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTRlYmEyZDEyJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Fkb3B0aW9uQW5pbWFsRGV0YWlscy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGViYTJkMTImc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0FuaW1hbENhcmQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWYxNDIyYTEwJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0FuaW1hbENhcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BbmltYWxDYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9BbmltYWxDYXJkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWYxNDIyYTEwJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJmMTQyMmExMFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9EclNhbXNvbm5pdGUvRGVza3RvcC9DUyBDb3Vyc2UgbWF0ZXJpYWxzL1NlbmlvciBERXNpZ24vYWN1YVZfMi9hY3VhLW1vYmlsZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdmMTQyMmExMCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdmMTQyMmExMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdmMTQyMmExMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQW5pbWFsQ2FyZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZjE0MjJhMTAmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZjE0MjJhMTAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvYWRvcHRpb24vQW5pbWFsQ2FyZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQW5pbWFsQ2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BbmltYWxDYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQW5pbWFsQ2FyZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1mMTQyMmExMCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BbmltYWxDYXJkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWYxNDIyYTEwJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FuaW1hbENhcmQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWYxNDIyYTEwJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDVjOThlYWMmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDVjOThlYWMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjA1Yzk4ZWFjXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL0RyU2Ftc29ubml0ZS9EZXNrdG9wL0NTIENvdXJzZSBtYXRlcmlhbHMvU2VuaW9yIERFc2lnbi9hY3VhVl8yL2FjdWEtbW9iaWxlL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzA1Yzk4ZWFjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzA1Yzk4ZWFjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzA1Yzk4ZWFjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDVjOThlYWMmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMDVjOThlYWMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvYWRvcHRpb24vY2F0ZWdvcnkudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDVjOThlYWMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDVjOThlYWMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA1Yzk4ZWFjJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9DYXRlZ29yeUJ1dHRvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzYwOWEyMzkmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQ2F0ZWdvcnlCdXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9DYXRlZ29yeUJ1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vQ2F0ZWdvcnlCdXR0b24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzYwOWEyMzkmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjc2MDlhMjM5XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL0RyU2Ftc29ubml0ZS9EZXNrdG9wL0NTIENvdXJzZSBtYXRlcmlhbHMvU2VuaW9yIERFc2lnbi9hY3VhVl8yL2FjdWEtbW9iaWxlL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzc2MDlhMjM5JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzc2MDlhMjM5JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzc2MDlhMjM5JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9DYXRlZ29yeUJ1dHRvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzYwOWEyMzkmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNzYwOWEyMzknLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvYnV0dG9ucy9DYXRlZ29yeUJ1dHRvbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2F0ZWdvcnlCdXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2F0ZWdvcnlCdXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DYXRlZ29yeUJ1dHRvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03NjA5YTIzOSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DYXRlZ29yeUJ1dHRvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03NjA5YTIzOSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DYXRlZ29yeUJ1dHRvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzYwOWEyMzkmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0ljb25CdXR0b24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ0YWU1NzE4JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0ljb25CdXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9JY29uQnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9JY29uQnV0dG9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ0YWU1NzE4JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI0NGFlNTcxOFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9EclNhbXNvbm5pdGUvRGVza3RvcC9DUyBDb3Vyc2UgbWF0ZXJpYWxzL1NlbmlvciBERXNpZ24vYWN1YVZfMi9hY3VhLW1vYmlsZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0NGFlNTcxOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0NGFlNTcxOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0NGFlNTcxOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSWNvbkJ1dHRvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDRhZTU3MTgmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNDRhZTU3MTgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvYnV0dG9ucy9JY29uQnV0dG9uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JY29uQnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ljb25CdXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JY29uQnV0dG9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ0YWU1NzE4JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ljb25CdXR0b24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDRhZTU3MTgmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSWNvbkJ1dHRvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDRhZTU3MTgmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0FuaW1hbENlbnRlckRldGFpbHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVmZjdkMTVjJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0FuaW1hbENlbnRlckRldGFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BbmltYWxDZW50ZXJEZXRhaWxzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9BbmltYWxDZW50ZXJEZXRhaWxzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVmZjdkMTVjJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNWZmN2QxNWNcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvRHJTYW1zb25uaXRlL0Rlc2t0b3AvQ1MgQ291cnNlIG1hdGVyaWFscy9TZW5pb3IgREVzaWduL2FjdWFWXzIvYWN1YS1tb2JpbGUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNWZmN2QxNWMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNWZmN2QxNWMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNWZmN2QxNWMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0FuaW1hbENlbnRlckRldGFpbHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVmZjdkMTVjJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzVmZjdkMTVjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL2xvY2F0aW9uL0FuaW1hbENlbnRlckRldGFpbHMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FuaW1hbENlbnRlckRldGFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQW5pbWFsQ2VudGVyRGV0YWlscy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BbmltYWxDZW50ZXJEZXRhaWxzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVmZjdkMTVjJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQW5pbWFsQ2VudGVyRGV0YWlscy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01ZmY3ZDE1YyZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQW5pbWFsQ2VudGVyRGV0YWlscy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWZmN2QxNWMmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0ZhcUluZm8udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBhNGJiMjQ1JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0ZhcUluZm8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9GYXFJbmZvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9GYXFJbmZvLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBhNGJiMjQ1JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMGE0YmIyNDVcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvRHJTYW1zb25uaXRlL0Rlc2t0b3AvQ1MgQ291cnNlIG1hdGVyaWFscy9TZW5pb3IgREVzaWduL2FjdWFWXzIvYWN1YS1tb2JpbGUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMGE0YmIyNDUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMGE0YmIyNDUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMGE0YmIyNDUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0ZhcUluZm8udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBhNGJiMjQ1JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzBhNGJiMjQ1Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL3N1Ymxpc3RzL0ZhcUluZm8udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZhcUluZm8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmFxSW5mby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GYXFJbmZvLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBhNGJiMjQ1JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmFxSW5mby52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wYTRiYjI0NSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmFxSW5mby52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGE0YmIyNDUmc2NvcGVkPXRydWUmXCIiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIVxcclxcbiAqICBGb250IEF3ZXNvbWUgNC43LjAgYnkgQGRhdmVnYW5keSAtIGh0dHA6Ly9mb250YXdlc29tZS5pbyAtIEBmb250YXdlc29tZVxcclxcbiAqICBMaWNlbnNlIC0gaHR0cDovL2ZvbnRhd2Vzb21lLmlvL2xpY2Vuc2UgKEZvbnQ6IFNJTCBPRkwgMS4xLCBDU1M6IE1JVCBMaWNlbnNlKVxcclxcbiAqL1xcclxcbi8qIEZPTlQgUEFUSFxcclxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ0ZvbnRBd2Vzb21lJztcXHJcXG4gIHNyYzogdXJsKCcuLi9mb250cy9mb250YXdlc29tZS13ZWJmb250LmVvdD92PTQuNy4wJyk7XFxyXFxuICBzcmM6IHVybCgnLi4vZm9udHMvZm9udGF3ZXNvbWUtd2ViZm9udC5lb3Q/I2llZml4JnY9NC43LjAnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksIHVybCgnLi4vZm9udHMvZm9udGF3ZXNvbWUtd2ViZm9udC53b2ZmMj92PTQuNy4wJykgZm9ybWF0KCd3b2ZmMicpLCB1cmwoJy4uL2ZvbnRzL2ZvbnRhd2Vzb21lLXdlYmZvbnQud29mZj92PTQuNy4wJykgZm9ybWF0KCd3b2ZmJyksIHVybCgnLi4vZm9udHMvZm9udGF3ZXNvbWUtd2ViZm9udC50dGY/dj00LjcuMCcpIGZvcm1hdCgndHJ1ZXR5cGUnKSwgdXJsKCcuLi9mb250cy9mb250YXdlc29tZS13ZWJmb250LnN2Zz92PTQuNy4wI2ZvbnRhd2Vzb21lcmVndWxhcicpIGZvcm1hdCgnc3ZnJyk7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG4uZmEge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMTRweC8xIEZvbnRBd2Vzb21lO1xcclxcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcclxcbiAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XFxyXFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXHJcXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxyXFxufVxcclxcbi8qIG1ha2VzIHRoZSBmb250IDMzJSBsYXJnZXIgcmVsYXRpdmUgdG8gdGhlIGljb24gY29udGFpbmVyICovXFxyXFxuLmZhLWxnIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zMzMzMzMzM2VtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDAuNzVlbTtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiAtMTUlO1xcclxcbn1cXHJcXG4uZmEtMngge1xcclxcbiAgZm9udC1zaXplOiAyZW07XFxyXFxufVxcclxcbi5mYS0zeCB7XFxyXFxuICBmb250LXNpemU6IDNlbTtcXHJcXG59XFxyXFxuLmZhLTR4IHtcXHJcXG4gIGZvbnQtc2l6ZTogNGVtO1xcclxcbn1cXHJcXG4uZmEtNXgge1xcclxcbiAgZm9udC1zaXplOiA1ZW07XFxyXFxufVxcclxcbi5mYS1mdyB7XFxyXFxuICB3aWR0aDogMS4yODU3MTQyOWVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uZmEtdWwge1xcclxcbiAgcGFkZGluZy1sZWZ0OiAwO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDIuMTQyODU3MTRlbTtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuLmZhLXVsID4gbGkge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG4uZmEtbGkge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogLTIuMTQyODU3MTRlbTtcXHJcXG4gIHdpZHRoOiAyLjE0Mjg1NzE0ZW07XFxyXFxuICB0b3A6IDAuMTQyODU3MTRlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLmZhLWxpLmZhLWxnIHtcXHJcXG4gIGxlZnQ6IC0xLjg1NzE0Mjg2ZW07XFxyXFxufVxcclxcbi5mYS1ib3JkZXIge1xcclxcbiAgcGFkZGluZzogLjJlbSAuMjVlbSAuMTVlbTtcXHJcXG4gIGJvcmRlcjogc29saWQgMC4wOGVtICNlZWVlZWU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAuMWVtO1xcclxcbn1cXHJcXG4uZmEtcHVsbC1sZWZ0IHtcXHJcXG4gIGZsb2F0OiBsZWZ0O1xcclxcbn1cXHJcXG4uZmEtcHVsbC1yaWdodCB7XFxyXFxuICBmbG9hdDogcmlnaHQ7XFxyXFxufVxcclxcbi5mYS5mYS1wdWxsLWxlZnQge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAuM2VtO1xcclxcbn1cXHJcXG4uZmEuZmEtcHVsbC1yaWdodCB7XFxyXFxuICBtYXJnaW4tbGVmdDogLjNlbTtcXHJcXG59XFxyXFxuLyogRGVwcmVjYXRlZCBhcyBvZiA0LjQuMCAqL1xcclxcbi5wdWxsLXJpZ2h0IHtcXHJcXG4gIGZsb2F0OiByaWdodDtcXHJcXG59XFxyXFxuLnB1bGwtbGVmdCB7XFxyXFxuICBmbG9hdDogbGVmdDtcXHJcXG59XFxyXFxuLmZhLnB1bGwtbGVmdCB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IC4zZW07XFxyXFxufVxcclxcbi5mYS5wdWxsLXJpZ2h0IHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAuM2VtO1xcclxcbn1cXHJcXG4uZmEtc3BpbiB7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbjogZmEtc3BpbiAycyBpbmZpbml0ZSBsaW5lYXI7XFxyXFxuICBhbmltYXRpb246IGZhLXNwaW4gMnMgaW5maW5pdGUgbGluZWFyO1xcclxcbn1cXHJcXG4uZmEtcHVsc2Uge1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhLXNwaW4gMXMgaW5maW5pdGUgc3RlcHMoOCk7XFxyXFxuICBhbmltYXRpb246IGZhLXNwaW4gMXMgaW5maW5pdGUgc3RlcHMoOCk7XFxyXFxufVxcclxcbkAtd2Via2l0LWtleWZyYW1lcyBmYS1zcGluIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIGZhLXNwaW4ge1xcclxcbiAgMCUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XFxyXFxuICB9XFxyXFxufVxcclxcbi5mYS1yb3RhdGUtOTAge1xcclxcbiAgLW1zLWZpbHRlcjogXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTEpXFxcIjtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcclxcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXHJcXG59XFxyXFxuLmZhLXJvdGF0ZS0xODAge1xcclxcbiAgLW1zLWZpbHRlcjogXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTIpXFxcIjtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXHJcXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXHJcXG59XFxyXFxuLmZhLXJvdGF0ZS0yNzAge1xcclxcbiAgLW1zLWZpbHRlcjogXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTMpXFxcIjtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcXHJcXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcXHJcXG59XFxyXFxuLmZhLWZsaXAtaG9yaXpvbnRhbCB7XFxyXFxuICAtbXMtZmlsdGVyOiBcXFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MCwgbWlycm9yPTEpXFxcIjtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XFxyXFxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcXHJcXG59XFxyXFxuLmZhLWZsaXAtdmVydGljYWwge1xcclxcbiAgLW1zLWZpbHRlcjogXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTIsIG1pcnJvcj0xKVxcXCI7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgLTEpO1xcclxcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSwgLTEpO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLCAtMSk7XFxyXFxufVxcclxcbjpyb290IC5mYS1yb3RhdGUtOTAsXFxyXFxuOnJvb3QgLmZhLXJvdGF0ZS0xODAsXFxyXFxuOnJvb3QgLmZhLXJvdGF0ZS0yNzAsXFxyXFxuOnJvb3QgLmZhLWZsaXAtaG9yaXpvbnRhbCxcXHJcXG46cm9vdCAuZmEtZmxpcC12ZXJ0aWNhbCB7XFxyXFxuICBmaWx0ZXI6IG5vbmU7XFxyXFxufVxcclxcbi5mYS1zdGFjayB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB3aWR0aDogMmVtO1xcclxcbiAgaGVpZ2h0OiAyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMmVtO1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG59XFxyXFxuLmZhLXN0YWNrLTF4LFxcclxcbi5mYS1zdGFjay0yeCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5mYS1zdGFjay0xeCB7XFxyXFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXHJcXG59XFxyXFxuLmZhLXN0YWNrLTJ4IHtcXHJcXG4gIGZvbnQtc2l6ZTogMmVtO1xcclxcbn1cXHJcXG4uZmEtaW52ZXJzZSB7XFxyXFxuICBjb2xvcjogI2ZmZmZmZjtcXHJcXG59XFxyXFxuLyogRm9udCBBd2Vzb21lIHVzZXMgdGhlIFVuaWNvZGUgUHJpdmF0ZSBVc2UgQXJlYSAoUFVBKSB0byBlbnN1cmUgc2NyZWVuXFxyXFxuICAgcmVhZGVycyBkbyBub3QgcmVhZCBvZmYgcmFuZG9tIGNoYXJhY3RlcnMgdGhhdCByZXByZXNlbnQgaWNvbnMgKi9cXHJcXG4uZmEtZ2xhc3M6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwMFxcXCI7XFxyXFxufVxcclxcbi5mYS1tdXNpYzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDAxXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNlYXJjaDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDAyXFxcIjtcXHJcXG59XFxyXFxuLmZhLWVudmVsb3BlLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwM1xcXCI7XFxyXFxufVxcclxcbi5mYS1oZWFydDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDA0XFxcIjtcXHJcXG59XFxyXFxuLmZhLXN0YXI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwNVxcXCI7XFxyXFxufVxcclxcbi5mYS1zdGFyLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwNlxcXCI7XFxyXFxufVxcclxcbi5mYS11c2VyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMDdcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmlsbTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDA4XFxcIjtcXHJcXG59XFxyXFxuLmZhLXRoLWxhcmdlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMDlcXFwiO1xcclxcbn1cXHJcXG4uZmEtdGg6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwQVxcXCI7XFxyXFxufVxcclxcbi5mYS10aC1saXN0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMEJcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2hlY2s6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwQ1xcXCI7XFxyXFxufVxcclxcbi5mYS1yZW1vdmU6YmVmb3JlLFxcclxcbi5mYS1jbG9zZTpiZWZvcmUsXFxyXFxuLmZhLXRpbWVzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMERcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2VhcmNoLXBsdXM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwRVxcXCI7XFxyXFxufVxcclxcbi5mYS1zZWFyY2gtbWludXM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxMFxcXCI7XFxyXFxufVxcclxcbi5mYS1wb3dlci1vZmY6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxMVxcXCI7XFxyXFxufVxcclxcbi5mYS1zaWduYWw6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxMlxcXCI7XFxyXFxufVxcclxcbi5mYS1nZWFyOmJlZm9yZSxcXHJcXG4uZmEtY29nOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMTNcXFwiO1xcclxcbn1cXHJcXG4uZmEtdHJhc2gtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDE0XFxcIjtcXHJcXG59XFxyXFxuLmZhLWhvbWU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxNVxcXCI7XFxyXFxufVxcclxcbi5mYS1maWxlLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxNlxcXCI7XFxyXFxufVxcclxcbi5mYS1jbG9jay1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMTdcXFwiO1xcclxcbn1cXHJcXG4uZmEtcm9hZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDE4XFxcIjtcXHJcXG59XFxyXFxuLmZhLWRvd25sb2FkOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMTlcXFwiO1xcclxcbn1cXHJcXG4uZmEtYXJyb3ctY2lyY2xlLW8tZG93bjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDFBXFxcIjtcXHJcXG59XFxyXFxuLmZhLWFycm93LWNpcmNsZS1vLXVwOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMUJcXFwiO1xcclxcbn1cXHJcXG4uZmEtaW5ib3g6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxQ1xcXCI7XFxyXFxufVxcclxcbi5mYS1wbGF5LWNpcmNsZS1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMURcXFwiO1xcclxcbn1cXHJcXG4uZmEtcm90YXRlLXJpZ2h0OmJlZm9yZSxcXHJcXG4uZmEtcmVwZWF0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMUVcXFwiO1xcclxcbn1cXHJcXG4uZmEtcmVmcmVzaDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDIxXFxcIjtcXHJcXG59XFxyXFxuLmZhLWxpc3QtYWx0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMjJcXFwiO1xcclxcbn1cXHJcXG4uZmEtbG9jazpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDIzXFxcIjtcXHJcXG59XFxyXFxuLmZhLWZsYWc6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAyNFxcXCI7XFxyXFxufVxcclxcbi5mYS1oZWFkcGhvbmVzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMjVcXFwiO1xcclxcbn1cXHJcXG4uZmEtdm9sdW1lLW9mZjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDI2XFxcIjtcXHJcXG59XFxyXFxuLmZhLXZvbHVtZS1kb3duOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMjdcXFwiO1xcclxcbn1cXHJcXG4uZmEtdm9sdW1lLXVwOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMjhcXFwiO1xcclxcbn1cXHJcXG4uZmEtcXJjb2RlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMjlcXFwiO1xcclxcbn1cXHJcXG4uZmEtYmFyY29kZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDJBXFxcIjtcXHJcXG59XFxyXFxuLmZhLXRhZzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDJCXFxcIjtcXHJcXG59XFxyXFxuLmZhLXRhZ3M6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAyQ1xcXCI7XFxyXFxufVxcclxcbi5mYS1ib29rOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMkRcXFwiO1xcclxcbn1cXHJcXG4uZmEtYm9va21hcms6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAyRVxcXCI7XFxyXFxufVxcclxcbi5mYS1wcmludDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDJGXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNhbWVyYTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDMwXFxcIjtcXHJcXG59XFxyXFxuLmZhLWZvbnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzMVxcXCI7XFxyXFxufVxcclxcbi5mYS1ib2xkOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMzJcXFwiO1xcclxcbn1cXHJcXG4uZmEtaXRhbGljOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMzNcXFwiO1xcclxcbn1cXHJcXG4uZmEtdGV4dC1oZWlnaHQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzNFxcXCI7XFxyXFxufVxcclxcbi5mYS10ZXh0LXdpZHRoOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMzVcXFwiO1xcclxcbn1cXHJcXG4uZmEtYWxpZ24tbGVmdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDM2XFxcIjtcXHJcXG59XFxyXFxuLmZhLWFsaWduLWNlbnRlcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDM3XFxcIjtcXHJcXG59XFxyXFxuLmZhLWFsaWduLXJpZ2h0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMzhcXFwiO1xcclxcbn1cXHJcXG4uZmEtYWxpZ24tanVzdGlmeTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDM5XFxcIjtcXHJcXG59XFxyXFxuLmZhLWxpc3Q6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzQVxcXCI7XFxyXFxufVxcclxcbi5mYS1kZWRlbnQ6YmVmb3JlLFxcclxcbi5mYS1vdXRkZW50OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwM0JcXFwiO1xcclxcbn1cXHJcXG4uZmEtaW5kZW50OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwM0NcXFwiO1xcclxcbn1cXHJcXG4uZmEtdmlkZW8tY2FtZXJhOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwM0RcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGhvdG86YmVmb3JlLFxcclxcbi5mYS1pbWFnZTpiZWZvcmUsXFxyXFxuLmZhLXBpY3R1cmUtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDNFXFxcIjtcXHJcXG59XFxyXFxuLmZhLXBlbmNpbDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDQwXFxcIjtcXHJcXG59XFxyXFxuLmZhLW1hcC1tYXJrZXI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0MVxcXCI7XFxyXFxufVxcclxcbi5mYS1hZGp1c3Q6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0MlxcXCI7XFxyXFxufVxcclxcbi5mYS10aW50OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNDNcXFwiO1xcclxcbn1cXHJcXG4uZmEtZWRpdDpiZWZvcmUsXFxyXFxuLmZhLXBlbmNpbC1zcXVhcmUtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDQ0XFxcIjtcXHJcXG59XFxyXFxuLmZhLXNoYXJlLXNxdWFyZS1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNDVcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2hlY2stc3F1YXJlLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0NlxcXCI7XFxyXFxufVxcclxcbi5mYS1hcnJvd3M6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0N1xcXCI7XFxyXFxufVxcclxcbi5mYS1zdGVwLWJhY2t3YXJkOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNDhcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmFzdC1iYWNrd2FyZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDQ5XFxcIjtcXHJcXG59XFxyXFxuLmZhLWJhY2t3YXJkOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNEFcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGxheTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDRCXFxcIjtcXHJcXG59XFxyXFxuLmZhLXBhdXNlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNENcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3RvcDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDREXFxcIjtcXHJcXG59XFxyXFxuLmZhLWZvcndhcmQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0RVxcXCI7XFxyXFxufVxcclxcbi5mYS1mYXN0LWZvcndhcmQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA1MFxcXCI7XFxyXFxufVxcclxcbi5mYS1zdGVwLWZvcndhcmQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA1MVxcXCI7XFxyXFxufVxcclxcbi5mYS1lamVjdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDUyXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNoZXZyb24tbGVmdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDUzXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNoZXZyb24tcmlnaHQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA1NFxcXCI7XFxyXFxufVxcclxcbi5mYS1wbHVzLWNpcmNsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDU1XFxcIjtcXHJcXG59XFxyXFxuLmZhLW1pbnVzLWNpcmNsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDU2XFxcIjtcXHJcXG59XFxyXFxuLmZhLXRpbWVzLWNpcmNsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDU3XFxcIjtcXHJcXG59XFxyXFxuLmZhLWNoZWNrLWNpcmNsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDU4XFxcIjtcXHJcXG59XFxyXFxuLmZhLXF1ZXN0aW9uLWNpcmNsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDU5XFxcIjtcXHJcXG59XFxyXFxuLmZhLWluZm8tY2lyY2xlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNUFcXFwiO1xcclxcbn1cXHJcXG4uZmEtY3Jvc3NoYWlyczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDVCXFxcIjtcXHJcXG59XFxyXFxuLmZhLXRpbWVzLWNpcmNsZS1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNUNcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2hlY2stY2lyY2xlLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA1RFxcXCI7XFxyXFxufVxcclxcbi5mYS1iYW46YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA1RVxcXCI7XFxyXFxufVxcclxcbi5mYS1hcnJvdy1sZWZ0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNjBcXFwiO1xcclxcbn1cXHJcXG4uZmEtYXJyb3ctcmlnaHQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2MVxcXCI7XFxyXFxufVxcclxcbi5mYS1hcnJvdy11cDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDYyXFxcIjtcXHJcXG59XFxyXFxuLmZhLWFycm93LWRvd246YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2M1xcXCI7XFxyXFxufVxcclxcbi5mYS1tYWlsLWZvcndhcmQ6YmVmb3JlLFxcclxcbi5mYS1zaGFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDY0XFxcIjtcXHJcXG59XFxyXFxuLmZhLWV4cGFuZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDY1XFxcIjtcXHJcXG59XFxyXFxuLmZhLWNvbXByZXNzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNjZcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGx1czpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDY3XFxcIjtcXHJcXG59XFxyXFxuLmZhLW1pbnVzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNjhcXFwiO1xcclxcbn1cXHJcXG4uZmEtYXN0ZXJpc2s6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2OVxcXCI7XFxyXFxufVxcclxcbi5mYS1leGNsYW1hdGlvbi1jaXJjbGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2QVxcXCI7XFxyXFxufVxcclxcbi5mYS1naWZ0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNkJcXFwiO1xcclxcbn1cXHJcXG4uZmEtbGVhZjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDZDXFxcIjtcXHJcXG59XFxyXFxuLmZhLWZpcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2RFxcXCI7XFxyXFxufVxcclxcbi5mYS1leWU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2RVxcXCI7XFxyXFxufVxcclxcbi5mYS1leWUtc2xhc2g6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3MFxcXCI7XFxyXFxufVxcclxcbi5mYS13YXJuaW5nOmJlZm9yZSxcXHJcXG4uZmEtZXhjbGFtYXRpb24tdHJpYW5nbGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3MVxcXCI7XFxyXFxufVxcclxcbi5mYS1wbGFuZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDcyXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNhbGVuZGFyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNzNcXFwiO1xcclxcbn1cXHJcXG4uZmEtcmFuZG9tOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNzRcXFwiO1xcclxcbn1cXHJcXG4uZmEtY29tbWVudDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDc1XFxcIjtcXHJcXG59XFxyXFxuLmZhLW1hZ25ldDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDc2XFxcIjtcXHJcXG59XFxyXFxuLmZhLWNoZXZyb24tdXA6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3N1xcXCI7XFxyXFxufVxcclxcbi5mYS1jaGV2cm9uLWRvd246YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3OFxcXCI7XFxyXFxufVxcclxcbi5mYS1yZXR3ZWV0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNzlcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2hvcHBpbmctY2FydDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDdBXFxcIjtcXHJcXG59XFxyXFxuLmZhLWZvbGRlcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDdCXFxcIjtcXHJcXG59XFxyXFxuLmZhLWZvbGRlci1vcGVuOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwN0NcXFwiO1xcclxcbn1cXHJcXG4uZmEtYXJyb3dzLXY6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3RFxcXCI7XFxyXFxufVxcclxcbi5mYS1hcnJvd3MtaDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDdFXFxcIjtcXHJcXG59XFxyXFxuLmZhLWJhci1jaGFydC1vOmJlZm9yZSxcXHJcXG4uZmEtYmFyLWNoYXJ0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwODBcXFwiO1xcclxcbn1cXHJcXG4uZmEtdHdpdHRlci1zcXVhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA4MVxcXCI7XFxyXFxufVxcclxcbi5mYS1mYWNlYm9vay1zcXVhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA4MlxcXCI7XFxyXFxufVxcclxcbi5mYS1jYW1lcmEtcmV0cm86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA4M1xcXCI7XFxyXFxufVxcclxcbi5mYS1rZXk6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA4NFxcXCI7XFxyXFxufVxcclxcbi5mYS1nZWFyczpiZWZvcmUsXFxyXFxuLmZhLWNvZ3M6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA4NVxcXCI7XFxyXFxufVxcclxcbi5mYS1jb21tZW50czpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDg2XFxcIjtcXHJcXG59XFxyXFxuLmZhLXRodW1icy1vLXVwOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwODdcXFwiO1xcclxcbn1cXHJcXG4uZmEtdGh1bWJzLW8tZG93bjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDg4XFxcIjtcXHJcXG59XFxyXFxuLmZhLXN0YXItaGFsZjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDg5XFxcIjtcXHJcXG59XFxyXFxuLmZhLWhlYXJ0LW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA4QVxcXCI7XFxyXFxufVxcclxcbi5mYS1zaWduLW91dDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDhCXFxcIjtcXHJcXG59XFxyXFxuLmZhLWxpbmtlZGluLXNxdWFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDhDXFxcIjtcXHJcXG59XFxyXFxuLmZhLXRodW1iLXRhY2s6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA4RFxcXCI7XFxyXFxufVxcclxcbi5mYS1leHRlcm5hbC1saW5rOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwOEVcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2lnbi1pbjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDkwXFxcIjtcXHJcXG59XFxyXFxuLmZhLXRyb3BoeTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDkxXFxcIjtcXHJcXG59XFxyXFxuLmZhLWdpdGh1Yi1zcXVhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA5MlxcXCI7XFxyXFxufVxcclxcbi5mYS11cGxvYWQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA5M1xcXCI7XFxyXFxufVxcclxcbi5mYS1sZW1vbi1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwOTRcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGhvbmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA5NVxcXCI7XFxyXFxufVxcclxcbi5mYS1zcXVhcmUtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDk2XFxcIjtcXHJcXG59XFxyXFxuLmZhLWJvb2ttYXJrLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA5N1xcXCI7XFxyXFxufVxcclxcbi5mYS1waG9uZS1zcXVhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA5OFxcXCI7XFxyXFxufVxcclxcbi5mYS10d2l0dGVyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwOTlcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmFjZWJvb2stZjpiZWZvcmUsXFxyXFxuLmZhLWZhY2Vib29rOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwOUFcXFwiO1xcclxcbn1cXHJcXG4uZmEtZ2l0aHViOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwOUJcXFwiO1xcclxcbn1cXHJcXG4uZmEtdW5sb2NrOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwOUNcXFwiO1xcclxcbn1cXHJcXG4uZmEtY3JlZGl0LWNhcmQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA5RFxcXCI7XFxyXFxufVxcclxcbi5mYS1mZWVkOmJlZm9yZSxcXHJcXG4uZmEtcnNzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwOUVcXFwiO1xcclxcbn1cXHJcXG4uZmEtaGRkLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBMFxcXCI7XFxyXFxufVxcclxcbi5mYS1idWxsaG9ybjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEExXFxcIjtcXHJcXG59XFxyXFxuLmZhLWJlbGw6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGM1xcXCI7XFxyXFxufVxcclxcbi5mYS1jZXJ0aWZpY2F0ZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEEzXFxcIjtcXHJcXG59XFxyXFxuLmZhLWhhbmQtby1yaWdodDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEE0XFxcIjtcXHJcXG59XFxyXFxuLmZhLWhhbmQtby1sZWZ0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQTVcXFwiO1xcclxcbn1cXHJcXG4uZmEtaGFuZC1vLXVwOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQTZcXFwiO1xcclxcbn1cXHJcXG4uZmEtaGFuZC1vLWRvd246YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBN1xcXCI7XFxyXFxufVxcclxcbi5mYS1hcnJvdy1jaXJjbGUtbGVmdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEE4XFxcIjtcXHJcXG59XFxyXFxuLmZhLWFycm93LWNpcmNsZS1yaWdodDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEE5XFxcIjtcXHJcXG59XFxyXFxuLmZhLWFycm93LWNpcmNsZS11cDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEFBXFxcIjtcXHJcXG59XFxyXFxuLmZhLWFycm93LWNpcmNsZS1kb3duOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQUJcXFwiO1xcclxcbn1cXHJcXG4uZmEtZ2xvYmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBQ1xcXCI7XFxyXFxufVxcclxcbi5mYS13cmVuY2g6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBRFxcXCI7XFxyXFxufVxcclxcbi5mYS10YXNrczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEFFXFxcIjtcXHJcXG59XFxyXFxuLmZhLWZpbHRlcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEIwXFxcIjtcXHJcXG59XFxyXFxuLmZhLWJyaWVmY2FzZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEIxXFxcIjtcXHJcXG59XFxyXFxuLmZhLWFycm93cy1hbHQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBCMlxcXCI7XFxyXFxufVxcclxcbi5mYS1ncm91cDpiZWZvcmUsXFxyXFxuLmZhLXVzZXJzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzBcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2hhaW46YmVmb3JlLFxcclxcbi5mYS1saW5rOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzFcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2xvdWQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDMlxcXCI7XFxyXFxufVxcclxcbi5mYS1mbGFzazpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEMzXFxcIjtcXHJcXG59XFxyXFxuLmZhLWN1dDpiZWZvcmUsXFxyXFxuLmZhLXNjaXNzb3JzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzRcXFwiO1xcclxcbn1cXHJcXG4uZmEtY29weTpiZWZvcmUsXFxyXFxuLmZhLWZpbGVzLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDNVxcXCI7XFxyXFxufVxcclxcbi5mYS1wYXBlcmNsaXA6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDNlxcXCI7XFxyXFxufVxcclxcbi5mYS1zYXZlOmJlZm9yZSxcXHJcXG4uZmEtZmxvcHB5LW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDN1xcXCI7XFxyXFxufVxcclxcbi5mYS1zcXVhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDOFxcXCI7XFxyXFxufVxcclxcbi5mYS1uYXZpY29uOmJlZm9yZSxcXHJcXG4uZmEtcmVvcmRlcjpiZWZvcmUsXFxyXFxuLmZhLWJhcnM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDOVxcXCI7XFxyXFxufVxcclxcbi5mYS1saXN0LXVsOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQ0FcXFwiO1xcclxcbn1cXHJcXG4uZmEtbGlzdC1vbDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMENCXFxcIjtcXHJcXG59XFxyXFxuLmZhLXN0cmlrZXRocm91Z2g6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDQ1xcXCI7XFxyXFxufVxcclxcbi5mYS11bmRlcmxpbmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDRFxcXCI7XFxyXFxufVxcclxcbi5mYS10YWJsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMENFXFxcIjtcXHJcXG59XFxyXFxuLmZhLW1hZ2ljOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRDBcXFwiO1xcclxcbn1cXHJcXG4uZmEtdHJ1Y2s6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBEMVxcXCI7XFxyXFxufVxcclxcbi5mYS1waW50ZXJlc3Q6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBEMlxcXCI7XFxyXFxufVxcclxcbi5mYS1waW50ZXJlc3Qtc3F1YXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRDNcXFwiO1xcclxcbn1cXHJcXG4uZmEtZ29vZ2xlLXBsdXMtc3F1YXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRDRcXFwiO1xcclxcbn1cXHJcXG4uZmEtZ29vZ2xlLXBsdXM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBENVxcXCI7XFxyXFxufVxcclxcbi5mYS1tb25leTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEQ2XFxcIjtcXHJcXG59XFxyXFxuLmZhLWNhcmV0LWRvd246YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBEN1xcXCI7XFxyXFxufVxcclxcbi5mYS1jYXJldC11cDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEQ4XFxcIjtcXHJcXG59XFxyXFxuLmZhLWNhcmV0LWxlZnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBEOVxcXCI7XFxyXFxufVxcclxcbi5mYS1jYXJldC1yaWdodDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMERBXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNvbHVtbnM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBEQlxcXCI7XFxyXFxufVxcclxcbi5mYS11bnNvcnRlZDpiZWZvcmUsXFxyXFxuLmZhLXNvcnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBEQ1xcXCI7XFxyXFxufVxcclxcbi5mYS1zb3J0LWRvd246YmVmb3JlLFxcclxcbi5mYS1zb3J0LWRlc2M6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBERFxcXCI7XFxyXFxufVxcclxcbi5mYS1zb3J0LXVwOmJlZm9yZSxcXHJcXG4uZmEtc29ydC1hc2M6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBERVxcXCI7XFxyXFxufVxcclxcbi5mYS1lbnZlbG9wZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEUwXFxcIjtcXHJcXG59XFxyXFxuLmZhLWxpbmtlZGluOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRTFcXFwiO1xcclxcbn1cXHJcXG4uZmEtcm90YXRlLWxlZnQ6YmVmb3JlLFxcclxcbi5mYS11bmRvOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRTJcXFwiO1xcclxcbn1cXHJcXG4uZmEtbGVnYWw6YmVmb3JlLFxcclxcbi5mYS1nYXZlbDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEUzXFxcIjtcXHJcXG59XFxyXFxuLmZhLWRhc2hib2FyZDpiZWZvcmUsXFxyXFxuLmZhLXRhY2hvbWV0ZXI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFNFxcXCI7XFxyXFxufVxcclxcbi5mYS1jb21tZW50LW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFNVxcXCI7XFxyXFxufVxcclxcbi5mYS1jb21tZW50cy1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRTZcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmxhc2g6YmVmb3JlLFxcclxcbi5mYS1ib2x0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRTdcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2l0ZW1hcDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEU4XFxcIjtcXHJcXG59XFxyXFxuLmZhLXVtYnJlbGxhOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRTlcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGFzdGU6YmVmb3JlLFxcclxcbi5mYS1jbGlwYm9hcmQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFQVxcXCI7XFxyXFxufVxcclxcbi5mYS1saWdodGJ1bGItbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEVCXFxcIjtcXHJcXG59XFxyXFxuLmZhLWV4Y2hhbmdlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRUNcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2xvdWQtZG93bmxvYWQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFRFxcXCI7XFxyXFxufVxcclxcbi5mYS1jbG91ZC11cGxvYWQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFRVxcXCI7XFxyXFxufVxcclxcbi5mYS11c2VyLW1kOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRjBcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3RldGhvc2NvcGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGMVxcXCI7XFxyXFxufVxcclxcbi5mYS1zdWl0Y2FzZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEYyXFxcIjtcXHJcXG59XFxyXFxuLmZhLWJlbGwtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEEyXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNvZmZlZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEY0XFxcIjtcXHJcXG59XFxyXFxuLmZhLWN1dGxlcnk6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGNVxcXCI7XFxyXFxufVxcclxcbi5mYS1maWxlLXRleHQtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEY2XFxcIjtcXHJcXG59XFxyXFxuLmZhLWJ1aWxkaW5nLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGN1xcXCI7XFxyXFxufVxcclxcbi5mYS1ob3NwaXRhbC1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRjhcXFwiO1xcclxcbn1cXHJcXG4uZmEtYW1idWxhbmNlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRjlcXFwiO1xcclxcbn1cXHJcXG4uZmEtbWVka2l0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRkFcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmlnaHRlci1qZXQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGQlxcXCI7XFxyXFxufVxcclxcbi5mYS1iZWVyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRkNcXFwiO1xcclxcbn1cXHJcXG4uZmEtaC1zcXVhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGRFxcXCI7XFxyXFxufVxcclxcbi5mYS1wbHVzLXNxdWFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEZFXFxcIjtcXHJcXG59XFxyXFxuLmZhLWFuZ2xlLWRvdWJsZS1sZWZ0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMDBcXFwiO1xcclxcbn1cXHJcXG4uZmEtYW5nbGUtZG91YmxlLXJpZ2h0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMDFcXFwiO1xcclxcbn1cXHJcXG4uZmEtYW5nbGUtZG91YmxlLXVwOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMDJcXFwiO1xcclxcbn1cXHJcXG4uZmEtYW5nbGUtZG91YmxlLWRvd246YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwM1xcXCI7XFxyXFxufVxcclxcbi5mYS1hbmdsZS1sZWZ0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMDRcXFwiO1xcclxcbn1cXHJcXG4uZmEtYW5nbGUtcmlnaHQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwNVxcXCI7XFxyXFxufVxcclxcbi5mYS1hbmdsZS11cDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTA2XFxcIjtcXHJcXG59XFxyXFxuLmZhLWFuZ2xlLWRvd246YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwN1xcXCI7XFxyXFxufVxcclxcbi5mYS1kZXNrdG9wOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMDhcXFwiO1xcclxcbn1cXHJcXG4uZmEtbGFwdG9wOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMDlcXFwiO1xcclxcbn1cXHJcXG4uZmEtdGFibGV0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMEFcXFwiO1xcclxcbn1cXHJcXG4uZmEtbW9iaWxlLXBob25lOmJlZm9yZSxcXHJcXG4uZmEtbW9iaWxlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMEJcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2lyY2xlLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwQ1xcXCI7XFxyXFxufVxcclxcbi5mYS1xdW90ZS1sZWZ0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMERcXFwiO1xcclxcbn1cXHJcXG4uZmEtcXVvdGUtcmlnaHQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwRVxcXCI7XFxyXFxufVxcclxcbi5mYS1zcGlubmVyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMTBcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2lyY2xlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMTFcXFwiO1xcclxcbn1cXHJcXG4uZmEtbWFpbC1yZXBseTpiZWZvcmUsXFxyXFxuLmZhLXJlcGx5OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMTJcXFwiO1xcclxcbn1cXHJcXG4uZmEtZ2l0aHViLWFsdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTEzXFxcIjtcXHJcXG59XFxyXFxuLmZhLWZvbGRlci1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMTRcXFwiO1xcclxcbn1cXHJcXG4uZmEtZm9sZGVyLW9wZW4tbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTE1XFxcIjtcXHJcXG59XFxyXFxuLmZhLXNtaWxlLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExOFxcXCI7XFxyXFxufVxcclxcbi5mYS1mcm93bi1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMTlcXFwiO1xcclxcbn1cXHJcXG4uZmEtbWVoLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExQVxcXCI7XFxyXFxufVxcclxcbi5mYS1nYW1lcGFkOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMUJcXFwiO1xcclxcbn1cXHJcXG4uZmEta2V5Ym9hcmQtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTFDXFxcIjtcXHJcXG59XFxyXFxuLmZhLWZsYWctbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTFEXFxcIjtcXHJcXG59XFxyXFxuLmZhLWZsYWctY2hlY2tlcmVkOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMUVcXFwiO1xcclxcbn1cXHJcXG4uZmEtdGVybWluYWw6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyMFxcXCI7XFxyXFxufVxcclxcbi5mYS1jb2RlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjFcXFwiO1xcclxcbn1cXHJcXG4uZmEtbWFpbC1yZXBseS1hbGw6YmVmb3JlLFxcclxcbi5mYS1yZXBseS1hbGw6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyMlxcXCI7XFxyXFxufVxcclxcbi5mYS1zdGFyLWhhbGYtZW1wdHk6YmVmb3JlLFxcclxcbi5mYS1zdGFyLWhhbGYtZnVsbDpiZWZvcmUsXFxyXFxuLmZhLXN0YXItaGFsZi1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjNcXFwiO1xcclxcbn1cXHJcXG4uZmEtbG9jYXRpb24tYXJyb3c6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyNFxcXCI7XFxyXFxufVxcclxcbi5mYS1jcm9wOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjVcXFwiO1xcclxcbn1cXHJcXG4uZmEtY29kZS1mb3JrOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjZcXFwiO1xcclxcbn1cXHJcXG4uZmEtdW5saW5rOmJlZm9yZSxcXHJcXG4uZmEtY2hhaW4tYnJva2VuOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjdcXFwiO1xcclxcbn1cXHJcXG4uZmEtcXVlc3Rpb246YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyOFxcXCI7XFxyXFxufVxcclxcbi5mYS1pbmZvOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjlcXFwiO1xcclxcbn1cXHJcXG4uZmEtZXhjbGFtYXRpb246YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyQVxcXCI7XFxyXFxufVxcclxcbi5mYS1zdXBlcnNjcmlwdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTJCXFxcIjtcXHJcXG59XFxyXFxuLmZhLXN1YnNjcmlwdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTJDXFxcIjtcXHJcXG59XFxyXFxuLmZhLWVyYXNlcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTJEXFxcIjtcXHJcXG59XFxyXFxuLmZhLXB1enpsZS1waWVjZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTJFXFxcIjtcXHJcXG59XFxyXFxuLmZhLW1pY3JvcGhvbmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEzMFxcXCI7XFxyXFxufVxcclxcbi5mYS1taWNyb3Bob25lLXNsYXNoOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMzFcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2hpZWxkOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMzJcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2FsZW5kYXItbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTMzXFxcIjtcXHJcXG59XFxyXFxuLmZhLWZpcmUtZXh0aW5ndWlzaGVyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMzRcXFwiO1xcclxcbn1cXHJcXG4uZmEtcm9ja2V0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMzVcXFwiO1xcclxcbn1cXHJcXG4uZmEtbWF4Y2RuOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMzZcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2hldnJvbi1jaXJjbGUtbGVmdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTM3XFxcIjtcXHJcXG59XFxyXFxuLmZhLWNoZXZyb24tY2lyY2xlLXJpZ2h0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMzhcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2hldnJvbi1jaXJjbGUtdXA6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEzOVxcXCI7XFxyXFxufVxcclxcbi5mYS1jaGV2cm9uLWNpcmNsZS1kb3duOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxM0FcXFwiO1xcclxcbn1cXHJcXG4uZmEtaHRtbDU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEzQlxcXCI7XFxyXFxufVxcclxcbi5mYS1jc3MzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxM0NcXFwiO1xcclxcbn1cXHJcXG4uZmEtYW5jaG9yOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxM0RcXFwiO1xcclxcbn1cXHJcXG4uZmEtdW5sb2NrLWFsdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTNFXFxcIjtcXHJcXG59XFxyXFxuLmZhLWJ1bGxzZXllOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNDBcXFwiO1xcclxcbn1cXHJcXG4uZmEtZWxsaXBzaXMtaDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTQxXFxcIjtcXHJcXG59XFxyXFxuLmZhLWVsbGlwc2lzLXY6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE0MlxcXCI7XFxyXFxufVxcclxcbi5mYS1yc3Mtc3F1YXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNDNcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGxheS1jaXJjbGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE0NFxcXCI7XFxyXFxufVxcclxcbi5mYS10aWNrZXQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE0NVxcXCI7XFxyXFxufVxcclxcbi5mYS1taW51cy1zcXVhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE0NlxcXCI7XFxyXFxufVxcclxcbi5mYS1taW51cy1zcXVhcmUtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTQ3XFxcIjtcXHJcXG59XFxyXFxuLmZhLWxldmVsLXVwOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNDhcXFwiO1xcclxcbn1cXHJcXG4uZmEtbGV2ZWwtZG93bjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTQ5XFxcIjtcXHJcXG59XFxyXFxuLmZhLWNoZWNrLXNxdWFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTRBXFxcIjtcXHJcXG59XFxyXFxuLmZhLXBlbmNpbC1zcXVhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE0QlxcXCI7XFxyXFxufVxcclxcbi5mYS1leHRlcm5hbC1saW5rLXNxdWFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTRDXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNoYXJlLXNxdWFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTREXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNvbXBhc3M6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE0RVxcXCI7XFxyXFxufVxcclxcbi5mYS10b2dnbGUtZG93bjpiZWZvcmUsXFxyXFxuLmZhLWNhcmV0LXNxdWFyZS1vLWRvd246YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE1MFxcXCI7XFxyXFxufVxcclxcbi5mYS10b2dnbGUtdXA6YmVmb3JlLFxcclxcbi5mYS1jYXJldC1zcXVhcmUtby11cDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTUxXFxcIjtcXHJcXG59XFxyXFxuLmZhLXRvZ2dsZS1yaWdodDpiZWZvcmUsXFxyXFxuLmZhLWNhcmV0LXNxdWFyZS1vLXJpZ2h0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNTJcXFwiO1xcclxcbn1cXHJcXG4uZmEtZXVybzpiZWZvcmUsXFxyXFxuLmZhLWV1cjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTUzXFxcIjtcXHJcXG59XFxyXFxuLmZhLWdicDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTU0XFxcIjtcXHJcXG59XFxyXFxuLmZhLWRvbGxhcjpiZWZvcmUsXFxyXFxuLmZhLXVzZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTU1XFxcIjtcXHJcXG59XFxyXFxuLmZhLXJ1cGVlOmJlZm9yZSxcXHJcXG4uZmEtaW5yOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNTZcXFwiO1xcclxcbn1cXHJcXG4uZmEtY255OmJlZm9yZSxcXHJcXG4uZmEtcm1iOmJlZm9yZSxcXHJcXG4uZmEteWVuOmJlZm9yZSxcXHJcXG4uZmEtanB5OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNTdcXFwiO1xcclxcbn1cXHJcXG4uZmEtcnVibGU6YmVmb3JlLFxcclxcbi5mYS1yb3VibGU6YmVmb3JlLFxcclxcbi5mYS1ydWI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE1OFxcXCI7XFxyXFxufVxcclxcbi5mYS13b246YmVmb3JlLFxcclxcbi5mYS1rcnc6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE1OVxcXCI7XFxyXFxufVxcclxcbi5mYS1iaXRjb2luOmJlZm9yZSxcXHJcXG4uZmEtYnRjOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNUFcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmlsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTVCXFxcIjtcXHJcXG59XFxyXFxuLmZhLWZpbGUtdGV4dDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTVDXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNvcnQtYWxwaGEtYXNjOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNURcXFwiO1xcclxcbn1cXHJcXG4uZmEtc29ydC1hbHBoYS1kZXNjOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNUVcXFwiO1xcclxcbn1cXHJcXG4uZmEtc29ydC1hbW91bnQtYXNjOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNjBcXFwiO1xcclxcbn1cXHJcXG4uZmEtc29ydC1hbW91bnQtZGVzYzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTYxXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNvcnQtbnVtZXJpYy1hc2M6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE2MlxcXCI7XFxyXFxufVxcclxcbi5mYS1zb3J0LW51bWVyaWMtZGVzYzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTYzXFxcIjtcXHJcXG59XFxyXFxuLmZhLXRodW1icy11cDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTY0XFxcIjtcXHJcXG59XFxyXFxuLmZhLXRodW1icy1kb3duOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNjVcXFwiO1xcclxcbn1cXHJcXG4uZmEteW91dHViZS1zcXVhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE2NlxcXCI7XFxyXFxufVxcclxcbi5mYS15b3V0dWJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNjdcXFwiO1xcclxcbn1cXHJcXG4uZmEteGluZzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTY4XFxcIjtcXHJcXG59XFxyXFxuLmZhLXhpbmctc3F1YXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNjlcXFwiO1xcclxcbn1cXHJcXG4uZmEteW91dHViZS1wbGF5OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNkFcXFwiO1xcclxcbn1cXHJcXG4uZmEtZHJvcGJveDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTZCXFxcIjtcXHJcXG59XFxyXFxuLmZhLXN0YWNrLW92ZXJmbG93OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNkNcXFwiO1xcclxcbn1cXHJcXG4uZmEtaW5zdGFncmFtOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNkRcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmxpY2tyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNkVcXFwiO1xcclxcbn1cXHJcXG4uZmEtYWRuOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNzBcXFwiO1xcclxcbn1cXHJcXG4uZmEtYml0YnVja2V0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNzFcXFwiO1xcclxcbn1cXHJcXG4uZmEtYml0YnVja2V0LXNxdWFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTcyXFxcIjtcXHJcXG59XFxyXFxuLmZhLXR1bWJscjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTczXFxcIjtcXHJcXG59XFxyXFxuLmZhLXR1bWJsci1zcXVhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE3NFxcXCI7XFxyXFxufVxcclxcbi5mYS1sb25nLWFycm93LWRvd246YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE3NVxcXCI7XFxyXFxufVxcclxcbi5mYS1sb25nLWFycm93LXVwOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNzZcXFwiO1xcclxcbn1cXHJcXG4uZmEtbG9uZy1hcnJvdy1sZWZ0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNzdcXFwiO1xcclxcbn1cXHJcXG4uZmEtbG9uZy1hcnJvdy1yaWdodDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTc4XFxcIjtcXHJcXG59XFxyXFxuLmZhLWFwcGxlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNzlcXFwiO1xcclxcbn1cXHJcXG4uZmEtd2luZG93czpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTdBXFxcIjtcXHJcXG59XFxyXFxuLmZhLWFuZHJvaWQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE3QlxcXCI7XFxyXFxufVxcclxcbi5mYS1saW51eDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTdDXFxcIjtcXHJcXG59XFxyXFxuLmZhLWRyaWJiYmxlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxN0RcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2t5cGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE3RVxcXCI7XFxyXFxufVxcclxcbi5mYS1mb3Vyc3F1YXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxODBcXFwiO1xcclxcbn1cXHJcXG4uZmEtdHJlbGxvOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxODFcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmVtYWxlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxODJcXFwiO1xcclxcbn1cXHJcXG4uZmEtbWFsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTgzXFxcIjtcXHJcXG59XFxyXFxuLmZhLWdpdHRpcDpiZWZvcmUsXFxyXFxuLmZhLWdyYXRpcGF5OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxODRcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3VuLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE4NVxcXCI7XFxyXFxufVxcclxcbi5mYS1tb29uLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE4NlxcXCI7XFxyXFxufVxcclxcbi5mYS1hcmNoaXZlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxODdcXFwiO1xcclxcbn1cXHJcXG4uZmEtYnVnOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxODhcXFwiO1xcclxcbn1cXHJcXG4uZmEtdms6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE4OVxcXCI7XFxyXFxufVxcclxcbi5mYS13ZWlibzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMThBXFxcIjtcXHJcXG59XFxyXFxuLmZhLXJlbnJlbjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMThCXFxcIjtcXHJcXG59XFxyXFxuLmZhLXBhZ2VsaW5lczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMThDXFxcIjtcXHJcXG59XFxyXFxuLmZhLXN0YWNrLWV4Y2hhbmdlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxOERcXFwiO1xcclxcbn1cXHJcXG4uZmEtYXJyb3ctY2lyY2xlLW8tcmlnaHQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE4RVxcXCI7XFxyXFxufVxcclxcbi5mYS1hcnJvdy1jaXJjbGUtby1sZWZ0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxOTBcXFwiO1xcclxcbn1cXHJcXG4uZmEtdG9nZ2xlLWxlZnQ6YmVmb3JlLFxcclxcbi5mYS1jYXJldC1zcXVhcmUtby1sZWZ0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxOTFcXFwiO1xcclxcbn1cXHJcXG4uZmEtZG90LWNpcmNsZS1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxOTJcXFwiO1xcclxcbn1cXHJcXG4uZmEtd2hlZWxjaGFpcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTkzXFxcIjtcXHJcXG59XFxyXFxuLmZhLXZpbWVvLXNxdWFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTk0XFxcIjtcXHJcXG59XFxyXFxuLmZhLXR1cmtpc2gtbGlyYTpiZWZvcmUsXFxyXFxuLmZhLXRyeTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTk1XFxcIjtcXHJcXG59XFxyXFxuLmZhLXBsdXMtc3F1YXJlLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE5NlxcXCI7XFxyXFxufVxcclxcbi5mYS1zcGFjZS1zaHV0dGxlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxOTdcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2xhY2s6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE5OFxcXCI7XFxyXFxufVxcclxcbi5mYS1lbnZlbG9wZS1zcXVhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE5OVxcXCI7XFxyXFxufVxcclxcbi5mYS13b3JkcHJlc3M6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE5QVxcXCI7XFxyXFxufVxcclxcbi5mYS1vcGVuaWQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE5QlxcXCI7XFxyXFxufVxcclxcbi5mYS1pbnN0aXR1dGlvbjpiZWZvcmUsXFxyXFxuLmZhLWJhbms6YmVmb3JlLFxcclxcbi5mYS11bml2ZXJzaXR5OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxOUNcXFwiO1xcclxcbn1cXHJcXG4uZmEtbW9ydGFyLWJvYXJkOmJlZm9yZSxcXHJcXG4uZmEtZ3JhZHVhdGlvbi1jYXA6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE5RFxcXCI7XFxyXFxufVxcclxcbi5mYS15YWhvbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTlFXFxcIjtcXHJcXG59XFxyXFxuLmZhLWdvb2dsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUEwXFxcIjtcXHJcXG59XFxyXFxuLmZhLXJlZGRpdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUExXFxcIjtcXHJcXG59XFxyXFxuLmZhLXJlZGRpdC1zcXVhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFBMlxcXCI7XFxyXFxufVxcclxcbi5mYS1zdHVtYmxldXBvbi1jaXJjbGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFBM1xcXCI7XFxyXFxufVxcclxcbi5mYS1zdHVtYmxldXBvbjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUE0XFxcIjtcXHJcXG59XFxyXFxuLmZhLWRlbGljaW91czpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUE1XFxcIjtcXHJcXG59XFxyXFxuLmZhLWRpZ2c6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFBNlxcXCI7XFxyXFxufVxcclxcbi5mYS1waWVkLXBpcGVyLXBwOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQTdcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGllZC1waXBlci1hbHQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFBOFxcXCI7XFxyXFxufVxcclxcbi5mYS1kcnVwYWw6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFBOVxcXCI7XFxyXFxufVxcclxcbi5mYS1qb29tbGE6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFBQVxcXCI7XFxyXFxufVxcclxcbi5mYS1sYW5ndWFnZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUFCXFxcIjtcXHJcXG59XFxyXFxuLmZhLWZheDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUFDXFxcIjtcXHJcXG59XFxyXFxuLmZhLWJ1aWxkaW5nOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQURcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2hpbGQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFBRVxcXCI7XFxyXFxufVxcclxcbi5mYS1wYXc6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFCMFxcXCI7XFxyXFxufVxcclxcbi5mYS1zcG9vbjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUIxXFxcIjtcXHJcXG59XFxyXFxuLmZhLWN1YmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFCMlxcXCI7XFxyXFxufVxcclxcbi5mYS1jdWJlczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUIzXFxcIjtcXHJcXG59XFxyXFxuLmZhLWJlaGFuY2U6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFCNFxcXCI7XFxyXFxufVxcclxcbi5mYS1iZWhhbmNlLXNxdWFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUI1XFxcIjtcXHJcXG59XFxyXFxuLmZhLXN0ZWFtOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQjZcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3RlYW0tc3F1YXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQjdcXFwiO1xcclxcbn1cXHJcXG4uZmEtcmVjeWNsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUI4XFxcIjtcXHJcXG59XFxyXFxuLmZhLWF1dG9tb2JpbGU6YmVmb3JlLFxcclxcbi5mYS1jYXI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFCOVxcXCI7XFxyXFxufVxcclxcbi5mYS1jYWI6YmVmb3JlLFxcclxcbi5mYS10YXhpOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQkFcXFwiO1xcclxcbn1cXHJcXG4uZmEtdHJlZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUJCXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNwb3RpZnk6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFCQ1xcXCI7XFxyXFxufVxcclxcbi5mYS1kZXZpYW50YXJ0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQkRcXFwiO1xcclxcbn1cXHJcXG4uZmEtc291bmRjbG91ZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUJFXFxcIjtcXHJcXG59XFxyXFxuLmZhLWRhdGFiYXNlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQzBcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmlsZS1wZGYtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUMxXFxcIjtcXHJcXG59XFxyXFxuLmZhLWZpbGUtd29yZC1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQzJcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmlsZS1leGNlbC1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQzNcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmlsZS1wb3dlcnBvaW50LW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFDNFxcXCI7XFxyXFxufVxcclxcbi5mYS1maWxlLXBob3RvLW86YmVmb3JlLFxcclxcbi5mYS1maWxlLXBpY3R1cmUtbzpiZWZvcmUsXFxyXFxuLmZhLWZpbGUtaW1hZ2UtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUM1XFxcIjtcXHJcXG59XFxyXFxuLmZhLWZpbGUtemlwLW86YmVmb3JlLFxcclxcbi5mYS1maWxlLWFyY2hpdmUtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUM2XFxcIjtcXHJcXG59XFxyXFxuLmZhLWZpbGUtc291bmQtbzpiZWZvcmUsXFxyXFxuLmZhLWZpbGUtYXVkaW8tbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUM3XFxcIjtcXHJcXG59XFxyXFxuLmZhLWZpbGUtbW92aWUtbzpiZWZvcmUsXFxyXFxuLmZhLWZpbGUtdmlkZW8tbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUM4XFxcIjtcXHJcXG59XFxyXFxuLmZhLWZpbGUtY29kZS1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQzlcXFwiO1xcclxcbn1cXHJcXG4uZmEtdmluZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUNBXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNvZGVwZW46YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFDQlxcXCI7XFxyXFxufVxcclxcbi5mYS1qc2ZpZGRsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUNDXFxcIjtcXHJcXG59XFxyXFxuLmZhLWxpZmUtYm91eTpiZWZvcmUsXFxyXFxuLmZhLWxpZmUtYnVveTpiZWZvcmUsXFxyXFxuLmZhLWxpZmUtc2F2ZXI6YmVmb3JlLFxcclxcbi5mYS1zdXBwb3J0OmJlZm9yZSxcXHJcXG4uZmEtbGlmZS1yaW5nOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQ0RcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2lyY2xlLW8tbm90Y2g6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFDRVxcXCI7XFxyXFxufVxcclxcbi5mYS1yYTpiZWZvcmUsXFxyXFxuLmZhLXJlc2lzdGFuY2U6YmVmb3JlLFxcclxcbi5mYS1yZWJlbDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUQwXFxcIjtcXHJcXG59XFxyXFxuLmZhLWdlOmJlZm9yZSxcXHJcXG4uZmEtZW1waXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRDFcXFwiO1xcclxcbn1cXHJcXG4uZmEtZ2l0LXNxdWFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUQyXFxcIjtcXHJcXG59XFxyXFxuLmZhLWdpdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUQzXFxcIjtcXHJcXG59XFxyXFxuLmZhLXktY29tYmluYXRvci1zcXVhcmU6YmVmb3JlLFxcclxcbi5mYS15Yy1zcXVhcmU6YmVmb3JlLFxcclxcbi5mYS1oYWNrZXItbmV3czpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUQ0XFxcIjtcXHJcXG59XFxyXFxuLmZhLXRlbmNlbnQtd2VpYm86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFENVxcXCI7XFxyXFxufVxcclxcbi5mYS1xcTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUQ2XFxcIjtcXHJcXG59XFxyXFxuLmZhLXdlY2hhdDpiZWZvcmUsXFxyXFxuLmZhLXdlaXhpbjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUQ3XFxcIjtcXHJcXG59XFxyXFxuLmZhLXNlbmQ6YmVmb3JlLFxcclxcbi5mYS1wYXBlci1wbGFuZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUQ4XFxcIjtcXHJcXG59XFxyXFxuLmZhLXNlbmQtbzpiZWZvcmUsXFxyXFxuLmZhLXBhcGVyLXBsYW5lLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFEOVxcXCI7XFxyXFxufVxcclxcbi5mYS1oaXN0b3J5OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxREFcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2lyY2xlLXRoaW46YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFEQlxcXCI7XFxyXFxufVxcclxcbi5mYS1oZWFkZXI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFEQ1xcXCI7XFxyXFxufVxcclxcbi5mYS1wYXJhZ3JhcGg6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFERFxcXCI7XFxyXFxufVxcclxcbi5mYS1zbGlkZXJzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxREVcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2hhcmUtYWx0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRTBcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2hhcmUtYWx0LXNxdWFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUUxXFxcIjtcXHJcXG59XFxyXFxuLmZhLWJvbWI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFFMlxcXCI7XFxyXFxufVxcclxcbi5mYS1zb2NjZXItYmFsbC1vOmJlZm9yZSxcXHJcXG4uZmEtZnV0Ym9sLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFFM1xcXCI7XFxyXFxufVxcclxcbi5mYS10dHk6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFFNFxcXCI7XFxyXFxufVxcclxcbi5mYS1iaW5vY3VsYXJzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRTVcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGx1ZzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUU2XFxcIjtcXHJcXG59XFxyXFxuLmZhLXNsaWRlc2hhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFFN1xcXCI7XFxyXFxufVxcclxcbi5mYS10d2l0Y2g6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFFOFxcXCI7XFxyXFxufVxcclxcbi5mYS15ZWxwOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRTlcXFwiO1xcclxcbn1cXHJcXG4uZmEtbmV3c3BhcGVyLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFFQVxcXCI7XFxyXFxufVxcclxcbi5mYS13aWZpOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRUJcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2FsY3VsYXRvcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUVDXFxcIjtcXHJcXG59XFxyXFxuLmZhLXBheXBhbDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUVEXFxcIjtcXHJcXG59XFxyXFxuLmZhLWdvb2dsZS13YWxsZXQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFFRVxcXCI7XFxyXFxufVxcclxcbi5mYS1jYy12aXNhOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRjBcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2MtbWFzdGVyY2FyZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUYxXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNjLWRpc2NvdmVyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRjJcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2MtYW1leDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUYzXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNjLXBheXBhbDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUY0XFxcIjtcXHJcXG59XFxyXFxuLmZhLWNjLXN0cmlwZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUY1XFxcIjtcXHJcXG59XFxyXFxuLmZhLWJlbGwtc2xhc2g6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFGNlxcXCI7XFxyXFxufVxcclxcbi5mYS1iZWxsLXNsYXNoLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFGN1xcXCI7XFxyXFxufVxcclxcbi5mYS10cmFzaDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUY4XFxcIjtcXHJcXG59XFxyXFxuLmZhLWNvcHlyaWdodDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUY5XFxcIjtcXHJcXG59XFxyXFxuLmZhLWF0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRkFcXFwiO1xcclxcbn1cXHJcXG4uZmEtZXllZHJvcHBlcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUZCXFxcIjtcXHJcXG59XFxyXFxuLmZhLXBhaW50LWJydXNoOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRkNcXFwiO1xcclxcbn1cXHJcXG4uZmEtYmlydGhkYXktY2FrZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUZEXFxcIjtcXHJcXG59XFxyXFxuLmZhLWFyZWEtY2hhcnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFGRVxcXCI7XFxyXFxufVxcclxcbi5mYS1waWUtY2hhcnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIwMFxcXCI7XFxyXFxufVxcclxcbi5mYS1saW5lLWNoYXJ0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMDFcXFwiO1xcclxcbn1cXHJcXG4uZmEtbGFzdGZtOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMDJcXFwiO1xcclxcbn1cXHJcXG4uZmEtbGFzdGZtLXNxdWFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjAzXFxcIjtcXHJcXG59XFxyXFxuLmZhLXRvZ2dsZS1vZmY6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIwNFxcXCI7XFxyXFxufVxcclxcbi5mYS10b2dnbGUtb246YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIwNVxcXCI7XFxyXFxufVxcclxcbi5mYS1iaWN5Y2xlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMDZcXFwiO1xcclxcbn1cXHJcXG4uZmEtYnVzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMDdcXFwiO1xcclxcbn1cXHJcXG4uZmEtaW94aG9zdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjA4XFxcIjtcXHJcXG59XFxyXFxuLmZhLWFuZ2VsbGlzdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjA5XFxcIjtcXHJcXG59XFxyXFxuLmZhLWNjOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMEFcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2hla2VsOmJlZm9yZSxcXHJcXG4uZmEtc2hlcWVsOmJlZm9yZSxcXHJcXG4uZmEtaWxzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMEJcXFwiO1xcclxcbn1cXHJcXG4uZmEtbWVhbnBhdGg6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIwQ1xcXCI7XFxyXFxufVxcclxcbi5mYS1idXlzZWxsYWRzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMERcXFwiO1xcclxcbn1cXHJcXG4uZmEtY29ubmVjdGRldmVsb3A6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIwRVxcXCI7XFxyXFxufVxcclxcbi5mYS1kYXNoY3ViZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjEwXFxcIjtcXHJcXG59XFxyXFxuLmZhLWZvcnVtYmVlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMTFcXFwiO1xcclxcbn1cXHJcXG4uZmEtbGVhbnB1YjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjEyXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNlbGxzeTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjEzXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNoaXJ0c2luYnVsazpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjE0XFxcIjtcXHJcXG59XFxyXFxuLmZhLXNpbXBseWJ1aWx0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMTVcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2t5YXRsYXM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIxNlxcXCI7XFxyXFxufVxcclxcbi5mYS1jYXJ0LXBsdXM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIxN1xcXCI7XFxyXFxufVxcclxcbi5mYS1jYXJ0LWFycm93LWRvd246YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIxOFxcXCI7XFxyXFxufVxcclxcbi5mYS1kaWFtb25kOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMTlcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2hpcDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjFBXFxcIjtcXHJcXG59XFxyXFxuLmZhLXVzZXItc2VjcmV0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMUJcXFwiO1xcclxcbn1cXHJcXG4uZmEtbW90b3JjeWNsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjFDXFxcIjtcXHJcXG59XFxyXFxuLmZhLXN0cmVldC12aWV3OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMURcXFwiO1xcclxcbn1cXHJcXG4uZmEtaGVhcnRiZWF0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMUVcXFwiO1xcclxcbn1cXHJcXG4uZmEtdmVudXM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIyMVxcXCI7XFxyXFxufVxcclxcbi5mYS1tYXJzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMjJcXFwiO1xcclxcbn1cXHJcXG4uZmEtbWVyY3VyeTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjIzXFxcIjtcXHJcXG59XFxyXFxuLmZhLWludGVyc2V4OmJlZm9yZSxcXHJcXG4uZmEtdHJhbnNnZW5kZXI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIyNFxcXCI7XFxyXFxufVxcclxcbi5mYS10cmFuc2dlbmRlci1hbHQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIyNVxcXCI7XFxyXFxufVxcclxcbi5mYS12ZW51cy1kb3VibGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIyNlxcXCI7XFxyXFxufVxcclxcbi5mYS1tYXJzLWRvdWJsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjI3XFxcIjtcXHJcXG59XFxyXFxuLmZhLXZlbnVzLW1hcnM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIyOFxcXCI7XFxyXFxufVxcclxcbi5mYS1tYXJzLXN0cm9rZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjI5XFxcIjtcXHJcXG59XFxyXFxuLmZhLW1hcnMtc3Ryb2tlLXY6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIyQVxcXCI7XFxyXFxufVxcclxcbi5mYS1tYXJzLXN0cm9rZS1oOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMkJcXFwiO1xcclxcbn1cXHJcXG4uZmEtbmV1dGVyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMkNcXFwiO1xcclxcbn1cXHJcXG4uZmEtZ2VuZGVybGVzczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjJEXFxcIjtcXHJcXG59XFxyXFxuLmZhLWZhY2Vib29rLW9mZmljaWFsOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMzBcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGludGVyZXN0LXA6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIzMVxcXCI7XFxyXFxufVxcclxcbi5mYS13aGF0c2FwcDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjMyXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNlcnZlcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjMzXFxcIjtcXHJcXG59XFxyXFxuLmZhLXVzZXItcGx1czpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjM0XFxcIjtcXHJcXG59XFxyXFxuLmZhLXVzZXItdGltZXM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIzNVxcXCI7XFxyXFxufVxcclxcbi5mYS1ob3RlbDpiZWZvcmUsXFxyXFxuLmZhLWJlZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjM2XFxcIjtcXHJcXG59XFxyXFxuLmZhLXZpYWNvaW46YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIzN1xcXCI7XFxyXFxufVxcclxcbi5mYS10cmFpbjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjM4XFxcIjtcXHJcXG59XFxyXFxuLmZhLXN1YndheTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjM5XFxcIjtcXHJcXG59XFxyXFxuLmZhLW1lZGl1bTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjNBXFxcIjtcXHJcXG59XFxyXFxuLmZhLXljOmJlZm9yZSxcXHJcXG4uZmEteS1jb21iaW5hdG9yOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyM0JcXFwiO1xcclxcbn1cXHJcXG4uZmEtb3B0aW4tbW9uc3RlcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjNDXFxcIjtcXHJcXG59XFxyXFxuLmZhLW9wZW5jYXJ0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyM0RcXFwiO1xcclxcbn1cXHJcXG4uZmEtZXhwZWRpdGVkc3NsOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyM0VcXFwiO1xcclxcbn1cXHJcXG4uZmEtYmF0dGVyeS00OmJlZm9yZSxcXHJcXG4uZmEtYmF0dGVyeTpiZWZvcmUsXFxyXFxuLmZhLWJhdHRlcnktZnVsbDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjQwXFxcIjtcXHJcXG59XFxyXFxuLmZhLWJhdHRlcnktMzpiZWZvcmUsXFxyXFxuLmZhLWJhdHRlcnktdGhyZWUtcXVhcnRlcnM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI0MVxcXCI7XFxyXFxufVxcclxcbi5mYS1iYXR0ZXJ5LTI6YmVmb3JlLFxcclxcbi5mYS1iYXR0ZXJ5LWhhbGY6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI0MlxcXCI7XFxyXFxufVxcclxcbi5mYS1iYXR0ZXJ5LTE6YmVmb3JlLFxcclxcbi5mYS1iYXR0ZXJ5LXF1YXJ0ZXI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI0M1xcXCI7XFxyXFxufVxcclxcbi5mYS1iYXR0ZXJ5LTA6YmVmb3JlLFxcclxcbi5mYS1iYXR0ZXJ5LWVtcHR5OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNDRcXFwiO1xcclxcbn1cXHJcXG4uZmEtbW91c2UtcG9pbnRlcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjQ1XFxcIjtcXHJcXG59XFxyXFxuLmZhLWktY3Vyc29yOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNDZcXFwiO1xcclxcbn1cXHJcXG4uZmEtb2JqZWN0LWdyb3VwOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNDdcXFwiO1xcclxcbn1cXHJcXG4uZmEtb2JqZWN0LXVuZ3JvdXA6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI0OFxcXCI7XFxyXFxufVxcclxcbi5mYS1zdGlja3ktbm90ZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjQ5XFxcIjtcXHJcXG59XFxyXFxuLmZhLXN0aWNreS1ub3RlLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI0QVxcXCI7XFxyXFxufVxcclxcbi5mYS1jYy1qY2I6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI0QlxcXCI7XFxyXFxufVxcclxcbi5mYS1jYy1kaW5lcnMtY2x1YjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjRDXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNsb25lOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNERcXFwiO1xcclxcbn1cXHJcXG4uZmEtYmFsYW5jZS1zY2FsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjRFXFxcIjtcXHJcXG59XFxyXFxuLmZhLWhvdXJnbGFzcy1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNTBcXFwiO1xcclxcbn1cXHJcXG4uZmEtaG91cmdsYXNzLTE6YmVmb3JlLFxcclxcbi5mYS1ob3VyZ2xhc3Mtc3RhcnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI1MVxcXCI7XFxyXFxufVxcclxcbi5mYS1ob3VyZ2xhc3MtMjpiZWZvcmUsXFxyXFxuLmZhLWhvdXJnbGFzcy1oYWxmOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNTJcXFwiO1xcclxcbn1cXHJcXG4uZmEtaG91cmdsYXNzLTM6YmVmb3JlLFxcclxcbi5mYS1ob3VyZ2xhc3MtZW5kOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNTNcXFwiO1xcclxcbn1cXHJcXG4uZmEtaG91cmdsYXNzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNTRcXFwiO1xcclxcbn1cXHJcXG4uZmEtaGFuZC1ncmFiLW86YmVmb3JlLFxcclxcbi5mYS1oYW5kLXJvY2stbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjU1XFxcIjtcXHJcXG59XFxyXFxuLmZhLWhhbmQtc3RvcC1vOmJlZm9yZSxcXHJcXG4uZmEtaGFuZC1wYXBlci1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNTZcXFwiO1xcclxcbn1cXHJcXG4uZmEtaGFuZC1zY2lzc29ycy1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNTdcXFwiO1xcclxcbn1cXHJcXG4uZmEtaGFuZC1saXphcmQtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjU4XFxcIjtcXHJcXG59XFxyXFxuLmZhLWhhbmQtc3BvY2stbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjU5XFxcIjtcXHJcXG59XFxyXFxuLmZhLWhhbmQtcG9pbnRlci1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNUFcXFwiO1xcclxcbn1cXHJcXG4uZmEtaGFuZC1wZWFjZS1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNUJcXFwiO1xcclxcbn1cXHJcXG4uZmEtdHJhZGVtYXJrOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNUNcXFwiO1xcclxcbn1cXHJcXG4uZmEtcmVnaXN0ZXJlZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjVEXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNyZWF0aXZlLWNvbW1vbnM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI1RVxcXCI7XFxyXFxufVxcclxcbi5mYS1nZzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjYwXFxcIjtcXHJcXG59XFxyXFxuLmZhLWdnLWNpcmNsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjYxXFxcIjtcXHJcXG59XFxyXFxuLmZhLXRyaXBhZHZpc29yOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNjJcXFwiO1xcclxcbn1cXHJcXG4uZmEtb2Rub2tsYXNzbmlraTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjYzXFxcIjtcXHJcXG59XFxyXFxuLmZhLW9kbm9rbGFzc25pa2ktc3F1YXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNjRcXFwiO1xcclxcbn1cXHJcXG4uZmEtZ2V0LXBvY2tldDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjY1XFxcIjtcXHJcXG59XFxyXFxuLmZhLXdpa2lwZWRpYS13OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNjZcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2FmYXJpOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNjdcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2hyb21lOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNjhcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmlyZWZveDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjY5XFxcIjtcXHJcXG59XFxyXFxuLmZhLW9wZXJhOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNkFcXFwiO1xcclxcbn1cXHJcXG4uZmEtaW50ZXJuZXQtZXhwbG9yZXI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI2QlxcXCI7XFxyXFxufVxcclxcbi5mYS10djpiZWZvcmUsXFxyXFxuLmZhLXRlbGV2aXNpb246YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI2Q1xcXCI7XFxyXFxufVxcclxcbi5mYS1jb250YW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI2RFxcXCI7XFxyXFxufVxcclxcbi5mYS01MDBweDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjZFXFxcIjtcXHJcXG59XFxyXFxuLmZhLWFtYXpvbjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjcwXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNhbGVuZGFyLXBsdXMtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjcxXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNhbGVuZGFyLW1pbnVzLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI3MlxcXCI7XFxyXFxufVxcclxcbi5mYS1jYWxlbmRhci10aW1lcy1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNzNcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2FsZW5kYXItY2hlY2stbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjc0XFxcIjtcXHJcXG59XFxyXFxuLmZhLWluZHVzdHJ5OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNzVcXFwiO1xcclxcbn1cXHJcXG4uZmEtbWFwLXBpbjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjc2XFxcIjtcXHJcXG59XFxyXFxuLmZhLW1hcC1zaWduczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjc3XFxcIjtcXHJcXG59XFxyXFxuLmZhLW1hcC1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNzhcXFwiO1xcclxcbn1cXHJcXG4uZmEtbWFwOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNzlcXFwiO1xcclxcbn1cXHJcXG4uZmEtY29tbWVudGluZzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjdBXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNvbW1lbnRpbmctbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjdCXFxcIjtcXHJcXG59XFxyXFxuLmZhLWhvdXp6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyN0NcXFwiO1xcclxcbn1cXHJcXG4uZmEtdmltZW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI3RFxcXCI7XFxyXFxufVxcclxcbi5mYS1ibGFjay10aWU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI3RVxcXCI7XFxyXFxufVxcclxcbi5mYS1mb250aWNvbnM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI4MFxcXCI7XFxyXFxufVxcclxcbi5mYS1yZWRkaXQtYWxpZW46YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI4MVxcXCI7XFxyXFxufVxcclxcbi5mYS1lZGdlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyODJcXFwiO1xcclxcbn1cXHJcXG4uZmEtY3JlZGl0LWNhcmQtYWx0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyODNcXFwiO1xcclxcbn1cXHJcXG4uZmEtY29kaWVwaWU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI4NFxcXCI7XFxyXFxufVxcclxcbi5mYS1tb2R4OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyODVcXFwiO1xcclxcbn1cXHJcXG4uZmEtZm9ydC1hd2Vzb21lOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyODZcXFwiO1xcclxcbn1cXHJcXG4uZmEtdXNiOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyODdcXFwiO1xcclxcbn1cXHJcXG4uZmEtcHJvZHVjdC1odW50OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyODhcXFwiO1xcclxcbn1cXHJcXG4uZmEtbWl4Y2xvdWQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI4OVxcXCI7XFxyXFxufVxcclxcbi5mYS1zY3JpYmQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI4QVxcXCI7XFxyXFxufVxcclxcbi5mYS1wYXVzZS1jaXJjbGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI4QlxcXCI7XFxyXFxufVxcclxcbi5mYS1wYXVzZS1jaXJjbGUtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjhDXFxcIjtcXHJcXG59XFxyXFxuLmZhLXN0b3AtY2lyY2xlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyOERcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3RvcC1jaXJjbGUtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjhFXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNob3BwaW5nLWJhZzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjkwXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNob3BwaW5nLWJhc2tldDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjkxXFxcIjtcXHJcXG59XFxyXFxuLmZhLWhhc2h0YWc6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI5MlxcXCI7XFxyXFxufVxcclxcbi5mYS1ibHVldG9vdGg6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI5M1xcXCI7XFxyXFxufVxcclxcbi5mYS1ibHVldG9vdGgtYjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjk0XFxcIjtcXHJcXG59XFxyXFxuLmZhLXBlcmNlbnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI5NVxcXCI7XFxyXFxufVxcclxcbi5mYS1naXRsYWI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI5NlxcXCI7XFxyXFxufVxcclxcbi5mYS13cGJlZ2lubmVyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyOTdcXFwiO1xcclxcbn1cXHJcXG4uZmEtd3Bmb3JtczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjk4XFxcIjtcXHJcXG59XFxyXFxuLmZhLWVudmlyYTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjk5XFxcIjtcXHJcXG59XFxyXFxuLmZhLXVuaXZlcnNhbC1hY2Nlc3M6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI5QVxcXCI7XFxyXFxufVxcclxcbi5mYS13aGVlbGNoYWlyLWFsdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjlCXFxcIjtcXHJcXG59XFxyXFxuLmZhLXF1ZXN0aW9uLWNpcmNsZS1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyOUNcXFwiO1xcclxcbn1cXHJcXG4uZmEtYmxpbmQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI5RFxcXCI7XFxyXFxufVxcclxcbi5mYS1hdWRpby1kZXNjcmlwdGlvbjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjlFXFxcIjtcXHJcXG59XFxyXFxuLmZhLXZvbHVtZS1jb250cm9sLXBob25lOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyQTBcXFwiO1xcclxcbn1cXHJcXG4uZmEtYnJhaWxsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMkExXFxcIjtcXHJcXG59XFxyXFxuLmZhLWFzc2lzdGl2ZS1saXN0ZW5pbmctc3lzdGVtczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMkEyXFxcIjtcXHJcXG59XFxyXFxuLmZhLWFzbC1pbnRlcnByZXRpbmc6YmVmb3JlLFxcclxcbi5mYS1hbWVyaWNhbi1zaWduLWxhbmd1YWdlLWludGVycHJldGluZzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMkEzXFxcIjtcXHJcXG59XFxyXFxuLmZhLWRlYWZuZXNzOmJlZm9yZSxcXHJcXG4uZmEtaGFyZC1vZi1oZWFyaW5nOmJlZm9yZSxcXHJcXG4uZmEtZGVhZjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMkE0XFxcIjtcXHJcXG59XFxyXFxuLmZhLWdsaWRlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyQTVcXFwiO1xcclxcbn1cXHJcXG4uZmEtZ2xpZGUtZzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMkE2XFxcIjtcXHJcXG59XFxyXFxuLmZhLXNpZ25pbmc6YmVmb3JlLFxcclxcbi5mYS1zaWduLWxhbmd1YWdlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyQTdcXFwiO1xcclxcbn1cXHJcXG4uZmEtbG93LXZpc2lvbjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMkE4XFxcIjtcXHJcXG59XFxyXFxuLmZhLXZpYWRlbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMkE5XFxcIjtcXHJcXG59XFxyXFxuLmZhLXZpYWRlby1zcXVhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJBQVxcXCI7XFxyXFxufVxcclxcbi5mYS1zbmFwY2hhdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMkFCXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNuYXBjaGF0LWdob3N0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyQUNcXFwiO1xcclxcbn1cXHJcXG4uZmEtc25hcGNoYXQtc3F1YXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyQURcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGllZC1waXBlcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMkFFXFxcIjtcXHJcXG59XFxyXFxuLmZhLWZpcnN0LW9yZGVyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyQjBcXFwiO1xcclxcbn1cXHJcXG4uZmEteW9hc3Q6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJCMVxcXCI7XFxyXFxufVxcclxcbi5mYS10aGVtZWlzbGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJCMlxcXCI7XFxyXFxufVxcclxcbi5mYS1nb29nbGUtcGx1cy1jaXJjbGU6YmVmb3JlLFxcclxcbi5mYS1nb29nbGUtcGx1cy1vZmZpY2lhbDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMkIzXFxcIjtcXHJcXG59XFxyXFxuLmZhLWZhOmJlZm9yZSxcXHJcXG4uZmEtZm9udC1hd2Vzb21lOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyQjRcXFwiO1xcclxcbn1cXHJcXG4uZmEtaGFuZHNoYWtlLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJCNVxcXCI7XFxyXFxufVxcclxcbi5mYS1lbnZlbG9wZS1vcGVuOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyQjZcXFwiO1xcclxcbn1cXHJcXG4uZmEtZW52ZWxvcGUtb3Blbi1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyQjdcXFwiO1xcclxcbn1cXHJcXG4uZmEtbGlub2RlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyQjhcXFwiO1xcclxcbn1cXHJcXG4uZmEtYWRkcmVzcy1ib29rOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyQjlcXFwiO1xcclxcbn1cXHJcXG4uZmEtYWRkcmVzcy1ib29rLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJCQVxcXCI7XFxyXFxufVxcclxcbi5mYS12Y2FyZDpiZWZvcmUsXFxyXFxuLmZhLWFkZHJlc3MtY2FyZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMkJCXFxcIjtcXHJcXG59XFxyXFxuLmZhLXZjYXJkLW86YmVmb3JlLFxcclxcbi5mYS1hZGRyZXNzLWNhcmQtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMkJDXFxcIjtcXHJcXG59XFxyXFxuLmZhLXVzZXItY2lyY2xlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyQkRcXFwiO1xcclxcbn1cXHJcXG4uZmEtdXNlci1jaXJjbGUtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMkJFXFxcIjtcXHJcXG59XFxyXFxuLmZhLXVzZXItbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMkMwXFxcIjtcXHJcXG59XFxyXFxuLmZhLWlkLWJhZGdlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyQzFcXFwiO1xcclxcbn1cXHJcXG4uZmEtZHJpdmVycy1saWNlbnNlOmJlZm9yZSxcXHJcXG4uZmEtaWQtY2FyZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMkMyXFxcIjtcXHJcXG59XFxyXFxuLmZhLWRyaXZlcnMtbGljZW5zZS1vOmJlZm9yZSxcXHJcXG4uZmEtaWQtY2FyZC1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyQzNcXFwiO1xcclxcbn1cXHJcXG4uZmEtcXVvcmE6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJDNFxcXCI7XFxyXFxufVxcclxcbi5mYS1mcmVlLWNvZGUtY2FtcDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMkM1XFxcIjtcXHJcXG59XFxyXFxuLmZhLXRlbGVncmFtOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyQzZcXFwiO1xcclxcbn1cXHJcXG4uZmEtdGhlcm1vbWV0ZXItNDpiZWZvcmUsXFxyXFxuLmZhLXRoZXJtb21ldGVyOmJlZm9yZSxcXHJcXG4uZmEtdGhlcm1vbWV0ZXItZnVsbDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMkM3XFxcIjtcXHJcXG59XFxyXFxuLmZhLXRoZXJtb21ldGVyLTM6YmVmb3JlLFxcclxcbi5mYS10aGVybW9tZXRlci10aHJlZS1xdWFydGVyczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMkM4XFxcIjtcXHJcXG59XFxyXFxuLmZhLXRoZXJtb21ldGVyLTI6YmVmb3JlLFxcclxcbi5mYS10aGVybW9tZXRlci1oYWxmOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyQzlcXFwiO1xcclxcbn1cXHJcXG4uZmEtdGhlcm1vbWV0ZXItMTpiZWZvcmUsXFxyXFxuLmZhLXRoZXJtb21ldGVyLXF1YXJ0ZXI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJDQVxcXCI7XFxyXFxufVxcclxcbi5mYS10aGVybW9tZXRlci0wOmJlZm9yZSxcXHJcXG4uZmEtdGhlcm1vbWV0ZXItZW1wdHk6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJDQlxcXCI7XFxyXFxufVxcclxcbi5mYS1zaG93ZXI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJDQ1xcXCI7XFxyXFxufVxcclxcbi5mYS1iYXRodHViOmJlZm9yZSxcXHJcXG4uZmEtczE1OmJlZm9yZSxcXHJcXG4uZmEtYmF0aDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMkNEXFxcIjtcXHJcXG59XFxyXFxuLmZhLXBvZGNhc3Q6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJDRVxcXCI7XFxyXFxufVxcclxcbi5mYS13aW5kb3ctbWF4aW1pemU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJEMFxcXCI7XFxyXFxufVxcclxcbi5mYS13aW5kb3ctbWluaW1pemU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJEMVxcXCI7XFxyXFxufVxcclxcbi5mYS13aW5kb3ctcmVzdG9yZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMkQyXFxcIjtcXHJcXG59XFxyXFxuLmZhLXRpbWVzLXJlY3RhbmdsZTpiZWZvcmUsXFxyXFxuLmZhLXdpbmRvdy1jbG9zZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMkQzXFxcIjtcXHJcXG59XFxyXFxuLmZhLXRpbWVzLXJlY3RhbmdsZS1vOmJlZm9yZSxcXHJcXG4uZmEtd2luZG93LWNsb3NlLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJENFxcXCI7XFxyXFxufVxcclxcbi5mYS1iYW5kY2FtcDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMkQ1XFxcIjtcXHJcXG59XFxyXFxuLmZhLWdyYXY6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJENlxcXCI7XFxyXFxufVxcclxcbi5mYS1ldHN5OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyRDdcXFwiO1xcclxcbn1cXHJcXG4uZmEtaW1kYjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMkQ4XFxcIjtcXHJcXG59XFxyXFxuLmZhLXJhdmVscnk6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJEOVxcXCI7XFxyXFxufVxcclxcbi5mYS1lZXJjYXN0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyREFcXFwiO1xcclxcbn1cXHJcXG4uZmEtbWljcm9jaGlwOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyREJcXFwiO1xcclxcbn1cXHJcXG4uZmEtc25vd2ZsYWtlLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJEQ1xcXCI7XFxyXFxufVxcclxcbi5mYS1zdXBlcnBvd2VyczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMkREXFxcIjtcXHJcXG59XFxyXFxuLmZhLXdwZXhwbG9yZXI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJERVxcXCI7XFxyXFxufVxcclxcbi5mYS1tZWV0dXA6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJFMFxcXCI7XFxyXFxufVxcclxcbi5zci1vbmx5IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiAxcHg7XFxyXFxuICBoZWlnaHQ6IDFweDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IC0xcHg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG59XFxyXFxuLnNyLW9ubHktZm9jdXNhYmxlOmFjdGl2ZSxcXHJcXG4uc3Itb25seS1mb2N1c2FibGU6Zm9jdXMge1xcclxcbiAgcG9zaXRpb246IHN0YXRpYztcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxyXFxuICBjbGlwOiBhdXRvO1xcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICA7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vZm9udHMvZm9udC1hd2Vzb21lLmNzcycgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXHJcXG4uaW9uLWFsZXJ0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEwMVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFsZXJ0LWNpcmNsZWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTAwXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1hZGQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkM3XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1hZGQtY2lyY2xlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM1OVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtYWxhcm0tY2xvY2s6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzVBXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1hbGVydDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNUJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWFwcHM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzVDXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1hcmNoaXZlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJDOVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtYXJyb3ctYmFjazpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQ0FcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWFycm93LWRvd246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzVEXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1hcnJvdy1kcm9wZG93bjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNUZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWFycm93LWRyb3Bkb3duLWNpcmNsZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNUVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWFycm93LWRyb3BsZWZ0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM2MVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtYXJyb3ctZHJvcGxlZnQtY2lyY2xlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM2MFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtYXJyb3ctZHJvcHJpZ2h0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM2M1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtYXJyb3ctZHJvcHJpZ2h0LWNpcmNsZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNjJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWFycm93LWRyb3B1cDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNjVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWFycm93LWRyb3B1cC1jaXJjbGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzY0XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1hcnJvdy1mb3J3YXJkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjMwRlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtYXJyb3ctdXA6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzY2XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1hdHRhY2g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzY3XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1iYXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzY4XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1iaWN5Y2xlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM2OVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtYm9hdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNkFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWJvb2ttYXJrOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM2QlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtYnVsYjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNkNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWJ1czpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNkRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWNhbGVuZGFyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJEMVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtY2FsbDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyRDJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWNhbWVyYTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyRDNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWNhbmNlbDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNkVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWNhcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNkZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWNhcnQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzcwXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1jaGF0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJENFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtY2hlY2tib3g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzc0XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1jaGVja2JveC1ibGFuazpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNzFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWNoZWNrYm94LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzczXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1jaGVja2JveC1vdXRsaW5lLWJsYW5rOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM3MlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtY2hlY2ttYXJrLWNpcmNsZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNzVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWNsaXBib2FyZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNzZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWNsb3NlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJEN1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtY2xvdWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzdBXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1jbG91ZC1jaXJjbGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzc3XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1jbG91ZC1kb25lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM3OFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtY2xvdWQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNzlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWNvbG9yLXBhbGV0dGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzdCXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1jb21wYXNzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM3Q1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtY29udGFjdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyRDhcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWNvbnRhY3RzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJEOVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtY29udHJhY3Q6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzdEXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1jcmVhdGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzdFXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1kZWxldGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzdGXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1kZXNrdG9wOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM4MFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtZG9jdW1lbnQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzgxXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1kb25lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM4M1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtZG9uZS1hbGw6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzgyXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1kb3dubG9hZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyRERcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWRyYWZ0czpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzODRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWV4aXQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzg1XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1leHBhbmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzg2XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1mYXZvcml0ZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzODhcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWZhdm9yaXRlLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzg3XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1maWxtOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM4OVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtZm9sZGVyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJFMFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtZm9sZGVyLW9wZW46YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzhBXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1mdW5uZWw6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzhCXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1nbG9iZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzOENcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWhhbmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkUzXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1oYW5nb3V0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM4RFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtaGFwcHk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzhFXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1ob21lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM4RlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtaW1hZ2U6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkU0XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1sYXB0b3A6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzkwXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1saXN0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM5MVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtbG9jYXRlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJFOVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtbG9jazpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzOTJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLW1haWw6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkVCXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1tYXA6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzkzXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1tZW51OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM5NFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtbWljcm9waG9uZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyRUNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLW1pY3JvcGhvbmUtb2ZmOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM5NVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtbW9yZS1ob3Jpem9udGFsOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM5NlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtbW9yZS12ZXJ0aWNhbDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzOTdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLW5hdmlnYXRlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM5OFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtbm90aWZpY2F0aW9uczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzOUJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLW5vdGlmaWNhdGlvbnMtbm9uZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzOTlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLW5vdGlmaWNhdGlvbnMtb2ZmOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM5QVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtb3BlbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzOUNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLW9wdGlvbnM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzlEXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1wZW9wbGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzlFXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1wZXJzb246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0EwXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1wZXJzb24tYWRkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM5RlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtcGhvbmUtbGFuZHNjYXBlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNBMVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtcGhvbmUtcG9ydHJhaXQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0EyXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1waW46YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0EzXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1wbGFuZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQTRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXBsYXlzdG9yZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyRjBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXByaW50OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNBNVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtcmFkaW8tYnV0dG9uLW9mZjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQTZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXJhZGlvLWJ1dHRvbi1vbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQTdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXJlZnJlc2g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0E4XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1yZW1vdmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkY0XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1yZW1vdmUtY2lyY2xlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNBOVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtcmVzdGF1cmFudDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQUFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXNhZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQUJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXNlYXJjaDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyRjVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXNlbmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkY2XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1zZXR0aW5nczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyRjdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXNoYXJlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJGOFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtc2hhcmUtYWx0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNBQ1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtc3RhcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyRkNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXN0YXItaGFsZjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQURcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXN0YXItb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQUVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXN0b3B3YXRjaDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyRkRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXN1YndheTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQUZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXN1bm55OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNCMFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtc3luYzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQjFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXRleHRzbXM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0IyXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC10aW1lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNCM1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtdHJhaW46YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0I0XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC11bmxvY2s6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0I1XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC11cGxvYWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0I2XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC12b2x1bWUtZG93bjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQjdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXZvbHVtZS1tdXRlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNCOFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtdm9sdW1lLW9mZjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQjlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXZvbHVtZS11cDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQkFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXdhbGs6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0JCXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC13YXJuaW5nOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNCQ1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtd2F0Y2g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0JEXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC13aWZpOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjMwNVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFwZXJ0dXJlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjMxM1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFyY2hpdmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTAyXFxcIjsgfVxcclxcblxcclxcbi5pb24tYXJyb3ctZG93bi1hOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEwM1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFycm93LWRvd24tYjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMDRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hcnJvdy1kb3duLWM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTA1XFxcIjsgfVxcclxcblxcclxcbi5pb24tYXJyb3ctZXhwYW5kOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI1RVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFycm93LWdyYXBoLWRvd24tbGVmdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNUZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hcnJvdy1ncmFwaC1kb3duLXJpZ2h0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI2MFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFycm93LWdyYXBoLXVwLWxlZnQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjYxXFxcIjsgfVxcclxcblxcclxcbi5pb24tYXJyb3ctZ3JhcGgtdXAtcmlnaHQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjYyXFxcIjsgfVxcclxcblxcclxcbi5pb24tYXJyb3ctbGVmdC1hOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEwNlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFycm93LWxlZnQtYjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMDdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hcnJvdy1sZWZ0LWM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTA4XFxcIjsgfVxcclxcblxcclxcbi5pb24tYXJyb3ctbW92ZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNjNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hcnJvdy1yZXNpemU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjY0XFxcIjsgfVxcclxcblxcclxcbi5pb24tYXJyb3ctcmV0dXJuLWxlZnQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjY1XFxcIjsgfVxcclxcblxcclxcbi5pb24tYXJyb3ctcmV0dXJuLXJpZ2h0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI2NlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFycm93LXJpZ2h0LWE6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTA5XFxcIjsgfVxcclxcblxcclxcbi5pb24tYXJyb3ctcmlnaHQtYjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMEFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hcnJvdy1yaWdodC1jOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEwQlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFycm93LXNocmluazpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNjdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hcnJvdy1zd2FwOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI2OFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFycm93LXVwLWE6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTBDXFxcIjsgfVxcclxcblxcclxcbi5pb24tYXJyb3ctdXAtYjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMERcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hcnJvdy11cC1jOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEwRVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFzdGVyaXNrOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjMxNFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWF0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEwRlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWJhY2tzcGFjZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQkZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1iYWNrc3BhY2Utb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQkVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1iYWc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTEwXFxcIjsgfVxcclxcblxcclxcbi5pb24tYmF0dGVyeS1jaGFyZ2luZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMTFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1iYXR0ZXJ5LWVtcHR5OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjExMlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWJhdHRlcnktZnVsbDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMTNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1iYXR0ZXJ5LWhhbGY6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTE0XFxcIjsgfVxcclxcblxcclxcbi5pb24tYmF0dGVyeS1sb3c6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTE1XFxcIjsgfVxcclxcblxcclxcbi5pb24tYmVha2VyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI2OVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWJlZXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjZBXFxcIjsgfVxcclxcblxcclxcbi5pb24tYmx1ZXRvb3RoOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjExNlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWJvbmZpcmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzE1XFxcIjsgfVxcclxcblxcclxcbi5pb24tYm9va21hcms6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjZCXFxcIjsgfVxcclxcblxcclxcbi5pb24tYm93dGllOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNDMFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWJyaWVmY2FzZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNkNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1idWc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkJFXFxcIjsgfVxcclxcblxcclxcbi5pb24tY2FsY3VsYXRvcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNkRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jYWxlbmRhcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMTdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jYW1lcmE6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTE4XFxcIjsgfVxcclxcblxcclxcbi5pb24tY2FyZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMTlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jYXNoOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjMxNlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNoYXRib3g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTFCXFxcIjsgfVxcclxcblxcclxcbi5pb24tY2hhdGJveC13b3JraW5nOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjExQVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNoYXRib3hlczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMUNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jaGF0YnViYmxlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjExRVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNoYXRidWJibGUtd29ya2luZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMURcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jaGF0YnViYmxlczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMUZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jaGVja21hcms6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTIyXFxcIjsgfVxcclxcblxcclxcbi5pb24tY2hlY2ttYXJrLWNpcmNsZWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTIwXFxcIjsgfVxcclxcblxcclxcbi5pb24tY2hlY2ttYXJrLXJvdW5kOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEyMVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNoZXZyb24tZG93bjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMjNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jaGV2cm9uLWxlZnQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTI0XFxcIjsgfVxcclxcblxcclxcbi5pb24tY2hldnJvbi1yaWdodDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMjVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jaGV2cm9uLXVwOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEyNlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNsaXBib2FyZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMjdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jbG9jazpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNkVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jbG9zZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMkFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jbG9zZS1jaXJjbGVkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEyOFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNsb3NlLXJvdW5kOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEyOVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNsb3NlZC1jYXB0aW9uaW5nOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjMxN1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNsb3VkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEyQlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNvZGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjcxXFxcIjsgfVxcclxcblxcclxcbi5pb24tY29kZS1kb3dubG9hZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNkZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jb2RlLXdvcmtpbmc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjcwXFxcIjsgfVxcclxcblxcclxcbi5pb24tY29mZmVlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI3MlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNvbXBhc3M6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjczXFxcIjsgfVxcclxcblxcclxcbi5pb24tY29tcG9zZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMkNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jb25uZWN0aW9uLWJhcnM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjc0XFxcIjsgfVxcclxcblxcclxcbi5pb24tY29udHJhc3Q6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjc1XFxcIjsgfVxcclxcblxcclxcbi5pb24tY3JvcDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQzFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jdWJlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjMxOFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWRpc2M6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTJEXFxcIjsgfVxcclxcblxcclxcbi5pb24tZG9jdW1lbnQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTJGXFxcIjsgfVxcclxcblxcclxcbi5pb24tZG9jdW1lbnQtdGV4dDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMkVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1kcmFnOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEzMFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWVhcnRoOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI3NlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWVhc2VsOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNDMlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWVkaXQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkJGXFxcIjsgfVxcclxcblxcclxcbi5pb24tZWdnOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI3N1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWVqZWN0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEzMVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWVtYWlsOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEzMlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWVtYWlsLXVucmVhZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQzNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1lcmxlbm1leWVyLWZsYXNrOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNDNVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWVybGVubWV5ZXItZmxhc2stYnViYmxlczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQzRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1leWU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTMzXFxcIjsgfVxcclxcblxcclxcbi5pb24tZXllLWRpc2FibGVkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjMwNlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWZlbWFsZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNzhcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1maWxpbmc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTM0XFxcIjsgfVxcclxcblxcclxcbi5pb24tZmlsbS1tYXJrZXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTM1XFxcIjsgfVxcclxcblxcclxcbi5pb24tZmlyZWJhbGw6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzE5XFxcIjsgfVxcclxcblxcclxcbi5pb24tZmxhZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNzlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1mbGFtZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzMUFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1mbGFzaDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMzdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1mbGFzaC1vZmY6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTM2XFxcIjsgfVxcclxcblxcclxcbi5pb24tZm9sZGVyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEzOVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWZvcms6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjdBXFxcIjsgfVxcclxcblxcclxcbi5pb24tZm9yay1yZXBvOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJDMFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWZvcndhcmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTNBXFxcIjsgfVxcclxcblxcclxcbi5pb24tZnVubmVsOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjMxQlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWdlYXItYTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxM0RcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1nZWFyLWI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTNFXFxcIjsgfVxcclxcblxcclxcbi5pb24tZ3JpZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxM0ZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1oYW1tZXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjdCXFxcIjsgfVxcclxcblxcclxcbi5pb24taGFwcHk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzFDXFxcIjsgfVxcclxcblxcclxcbi5pb24taGFwcHktb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQzZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1oZWFkcGhvbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTQwXFxcIjsgfVxcclxcblxcclxcbi5pb24taGVhcnQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTQxXFxcIjsgfVxcclxcblxcclxcbi5pb24taGVhcnQtYnJva2VuOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjMxRFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWhlbHA6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTQzXFxcIjsgfVxcclxcblxcclxcbi5pb24taGVscC1idW95OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI3Q1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWhlbHAtY2lyY2xlZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxNDJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1ob21lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjE0NFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWljZWNyZWFtOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI3RFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWltYWdlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjE0N1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWltYWdlczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxNDhcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pbmZvcm1hdGlvbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxNEFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pbmZvcm1hdGlvbi1jaXJjbGVkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjE0OVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvbmljOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjE0QlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1hbGFybTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQzhcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYWxhcm0tb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQzdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYWxidW1zOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNDQVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1hbGJ1bXMtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQzlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYW1lcmljYW5mb290YmFsbDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQ0NcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYW1lcmljYW5mb290YmFsbC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNDQlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1hbmFseXRpY3M6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0NFXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWFuYWx5dGljcy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNDRFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1hcnJvdy1iYWNrOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNDRlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1hcnJvdy1kb3duOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNEMFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1hcnJvdy1mb3J3YXJkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNEMVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1hcnJvdy1sZWZ0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNEMlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1hcnJvdy1yaWdodDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRDNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYXJyb3ctdGhpbi1kb3duOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNENFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1hcnJvdy10aGluLWxlZnQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0Q1XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWFycm93LXRoaW4tcmlnaHQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0Q2XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWFycm93LXRoaW4tdXA6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0Q3XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWFycm93LXVwOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNEOFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1hdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzREFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYXQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRDlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYmFyY29kZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRENcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYmFyY29kZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNEQlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1iYXNlYmFsbDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzREVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYmFzZWJhbGwtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRERcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYmFza2V0YmFsbDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRTBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYmFza2V0YmFsbC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNERlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1iZWxsOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNFMlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1iZWxsLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0UxXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWJvZHk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0U0XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWJvZHktb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRTNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYm9sdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRTZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYm9sdC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNFNVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1ib29rOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNFOFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1ib29rLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0U3XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWJvb2ttYXJrczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRUFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYm9va21hcmtzLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0U5XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWJveDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRUNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYm94LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0VCXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWJyaWVmY2FzZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRUVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYnJpZWZjYXNlLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0VEXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWJyb3dzZXJzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNGMFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1icm93c2Vycy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNFRlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jYWxjdWxhdG9yOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNGMlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jYWxjdWxhdG9yLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0YxXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNhbGVuZGFyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNGNFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jYWxlbmRhci1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNGM1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jYW1lcmE6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0Y2XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNhbWVyYS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNGNVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jYXJ0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNGOFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jYXJ0LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0Y3XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNoYXRib3hlczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRkFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2hhdGJveGVzLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0Y5XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNoYXRidWJibGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0ZDXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNoYXRidWJibGUtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRkJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2hlY2ttYXJrOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNGRlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jaGVja21hcmstZW1wdHk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0ZEXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNoZWNrbWFyay1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNGRVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jaXJjbGUtZmlsbGVkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQwMFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jaXJjbGUtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MDFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2xvY2s6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDAzXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNsb2NrLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDAyXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNsb3NlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQwNlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jbG9zZS1lbXB0eTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MDRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2xvc2Utb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MDVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2xvdWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDBDXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNsb3VkLWRvd25sb2FkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQwOFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jbG91ZC1kb3dubG9hZC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQwN1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jbG91ZC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQwOVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jbG91ZC11cGxvYWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDBCXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNsb3VkLXVwbG9hZC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQwQVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jbG91ZHk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDEwXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNsb3VkeS1uaWdodDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MEVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2xvdWR5LW5pZ2h0LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDBEXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNsb3VkeS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQwRlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jb2c6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDEyXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNvZy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQxMVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jb2xvci1maWx0ZXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDE0XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNvbG9yLWZpbHRlci1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQxM1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jb2xvci13YW5kOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQxNlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jb2xvci13YW5kLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDE1XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNvbXBvc2U6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDE4XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNvbXBvc2Utb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MTdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY29udGFjdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MUFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY29udGFjdC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQxOVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jb3B5OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQxQ1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jb3B5LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDFCXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNyb3A6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDFFXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNyb3Atc3Ryb25nOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQxRFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1kb3dubG9hZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MjBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZG93bmxvYWQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MUZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZHJhZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MjFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZW1haWw6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDIzXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWVtYWlsLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDIyXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWV5ZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MjVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZXllLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDI0XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWZhc3Rmb3J3YXJkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQyN1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1mYXN0Zm9yd2FyZC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQyNlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1maWxpbmc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDI5XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWZpbGluZy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQyOFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1maWxtOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQyQlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1maWxtLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDJBXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWZsYWc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDJEXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWZsYWctb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MkNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZmxhbWU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDJGXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWZsYW1lLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDJFXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWZsYXNrOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQzMVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1mbGFzay1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQzMFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1mbG93ZXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDMzXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWZsb3dlci1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQzMlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1mb2xkZXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDM1XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWZvbGRlci1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQzNFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1mb290YmFsbDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MzdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZm9vdGJhbGwtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MzZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZ2FtZS1jb250cm9sbGVyLWE6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDM5XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWdhbWUtY29udHJvbGxlci1hLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDM4XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWdhbWUtY29udHJvbGxlci1iOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQzQlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1nYW1lLWNvbnRyb2xsZXItYi1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQzQVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1nZWFyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQzRFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1nZWFyLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDNDXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWdsYXNzZXM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDNGXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWdsYXNzZXMtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0M0VcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZ3JpZC12aWV3OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ0MVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1ncmlkLXZpZXctb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NDBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtaGVhcnQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDQzXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWhlYXJ0LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDQyXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWhlbHA6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDQ2XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWhlbHAtZW1wdHk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDQ0XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWhlbHAtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NDVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtaG9tZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NDhcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtaG9tZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ0N1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1pbmZpbml0ZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NEFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtaW5maW5pdGUtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NDlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtaW5mb3JtYXRpb246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDREXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWluZm9ybWF0aW9uLWVtcHR5OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ0QlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1pbmZvcm1hdGlvbi1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ0Q1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1pb25pYy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ0RVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1rZXlwYWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDUwXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWtleXBhZC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ0RlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1saWdodGJ1bGI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDUyXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWxpZ2h0YnVsYi1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ1MVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1saXN0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ1NFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1saXN0LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDUzXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWxvY2F0aW9uOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ1NlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1sb2NhdGlvbi1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ1NVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1sb2NrZWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDU4XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWxvY2tlZC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ1N1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1sb29wOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ1QVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1sb29wLXN0cm9uZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NTlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbWVkaWNhbDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NUNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbWVkaWNhbC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ1QlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1tZWRraXQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDVFXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLW1lZGtpdC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ1RFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1taWM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDYxXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLW1pYy1vZmY6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDVGXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLW1pYy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ2MFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1taW51czpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NjRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbWludXMtZW1wdHk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDYyXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLW1pbnVzLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDYzXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLW1vbml0b3I6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDY2XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLW1vbml0b3Itb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NjVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbW9vbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NjhcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbW9vbi1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ2N1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1tb3JlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ2QVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1tb3JlLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDY5XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLW11c2ljYWwtbm90ZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NkJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbXVzaWNhbC1ub3RlczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NkNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbmF2aWdhdGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDZFXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLW5hdmlnYXRlLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDZEXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLW51dHJpdGlvbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NzBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbnV0cml0aW9uLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDZGXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXBhcGVyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ3MlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1wYXBlci1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ3MVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1wYXBlcnBsYW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ3NFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1wYXBlcnBsYW5lLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDczXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXBhcnRseXN1bm55OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ3NlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1wYXJ0bHlzdW5ueS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ3NVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1wYXVzZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NzhcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcGF1c2Utb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NzdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcGF3OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ3QVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1wYXctb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NzlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcGVvcGxlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ3Q1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1wZW9wbGUtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0N0JcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcGVyc29uOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ3RVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1wZXJzb24tb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0N0RcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcGVyc29uYWRkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ4MFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1wZXJzb25hZGQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0N0ZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcGhvdG9zOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ4MlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1waG90b3Mtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0ODFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcGllOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ4NFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1waWUtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0ODNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcGludDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0ODZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcGludC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ4NVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1wbGF5OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ4OFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1wbGF5LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDg3XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXBsdXM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDhCXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXBsdXMtZW1wdHk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDg5XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXBsdXMtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0OEFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcHJpY2V0YWc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDhEXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXByaWNldGFnLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDhDXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXByaWNldGFnczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0OEZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcHJpY2V0YWdzLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDhFXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXByaW50ZXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDkxXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXByaW50ZXItb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0OTBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcHVsc2U6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDkzXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXB1bHNlLXN0cm9uZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0OTJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcmFpbnk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDk1XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXJhaW55LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDk0XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXJlY29yZGluZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0OTdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcmVjb3JkaW5nLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDk2XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXJlZG86YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDk5XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXJlZG8tb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0OThcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcmVmcmVzaDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0OUNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcmVmcmVzaC1lbXB0eTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0OUFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcmVmcmVzaC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ5QlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1yZWxvYWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDlEXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXJldmVyc2UtY2FtZXJhOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ5RlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1yZXZlcnNlLWNhbWVyYS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ5RVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1yZXdpbmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEExXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXJld2luZC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRBMFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1yb3NlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRBM1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1yb3NlLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEEyXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXNlYXJjaDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QTVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3Mtc2VhcmNoLXN0cm9uZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QTRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3Mtc2V0dGluZ3M6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEE3XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXNldHRpbmdzLXN0cm9uZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QTZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3Mtc2h1ZmZsZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QTlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3Mtc2h1ZmZsZS1zdHJvbmc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEE4XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXNraXBiYWNrd2FyZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QUJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3Mtc2tpcGJhY2t3YXJkLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEFBXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXNraXBmb3J3YXJkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRBRFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1za2lwZm9yd2FyZC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRBQ1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1zbm93eTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QUVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3Mtc3BlZWRvbWV0ZXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEIwXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXNwZWVkb21ldGVyLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEFGXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXN0YXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEIzXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXN0YXItaGFsZjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QjFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3Mtc3Rhci1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRCMlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1zdG9wd2F0Y2g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEI1XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXN0b3B3YXRjaC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRCNFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1zdW5ueTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QjdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3Mtc3Vubnktb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QjZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtdGVsZXBob25lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRCOVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy10ZWxlcGhvbmUtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QjhcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtdGVubmlzYmFsbDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QkJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtdGVubmlzYmFsbC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRCQVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy10aHVuZGVyc3Rvcm06YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEJEXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXRodW5kZXJzdG9ybS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRCQ1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy10aW1lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRCRlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy10aW1lLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEJFXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXRpbWVyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRDMVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy10aW1lci1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRDMFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy10b2dnbGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEMzXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXRvZ2dsZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRDMlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy10cmFzaDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QzVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtdHJhc2gtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QzRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtdW5kbzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QzdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtdW5kby1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRDNlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy11bmxvY2tlZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QzlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtdW5sb2NrZWQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QzhcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtdXBsb2FkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRDQlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy11cGxvYWQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0Q0FcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtdmlkZW9jYW06YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNENEXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXZpZGVvY2FtLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNENDXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXZvbHVtZS1oaWdoOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRDRVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy12b2x1bWUtbG93OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRDRlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy13aW5lZ2xhc3M6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEQxXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXdpbmVnbGFzcy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjREMFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy13b3JsZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RDNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3Mtd29ybGQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RDJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pcGFkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjFGOVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlwaG9uZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxRkFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pcG9kOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjFGQlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWpldDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyOTVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1rZXk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjk2XFxcIjsgfVxcclxcblxcclxcbi5pb24ta25pZmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjk3XFxcIjsgfVxcclxcblxcclxcbi5pb24tbGFwdG9wOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjFGQ1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWxlYWY6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMUZEXFxcIjsgfVxcclxcblxcclxcbi5pb24tbGV2ZWxzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI5OFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWxpZ2h0YnVsYjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyOTlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1saW5rOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjFGRVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWxvYWQtYTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyOUFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1sb2FkLWI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjlCXFxcIjsgfVxcclxcblxcclxcbi5pb24tbG9hZC1jOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI5Q1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWxvYWQtZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyOURcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1sb2NhdGlvbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxRkZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1sb2NrLWNvbWJpbmF0aW9uOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRENFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWxvY2tlZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMDBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1sb2ctaW46YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjlFXFxcIjsgfVxcclxcblxcclxcbi5pb24tbG9nLW91dDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyOUZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1sb29wOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIwMVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLW1hZ25ldDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQTBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1tYWxlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJBMVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLW1hbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMDJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1tYXA6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjAzXFxcIjsgfVxcclxcblxcclxcbi5pb24tbWVka2l0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJBMlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLW1lcmdlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjMzRlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLW1pYy1hOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIwNFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLW1pYy1iOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIwNVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLW1pYy1jOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIwNlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLW1pbnVzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIwOVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLW1pbnVzLWNpcmNsZWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjA3XFxcIjsgfVxcclxcblxcclxcbi5pb24tbWludXMtcm91bmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjA4XFxcIjsgfVxcclxcblxcclxcbi5pb24tbW9kZWwtczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQzFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1tb25pdG9yOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIwQVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLW1vcmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjBCXFxcIjsgfVxcclxcblxcclxcbi5pb24tbW91c2U6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzQwXFxcIjsgfVxcclxcblxcclxcbi5pb24tbXVzaWMtbm90ZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMENcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1uYXZpY29uOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIwRVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLW5hdmljb24tcm91bmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjBEXFxcIjsgfVxcclxcblxcclxcbi5pb24tbmF2aWdhdGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkEzXFxcIjsgfVxcclxcblxcclxcbi5pb24tbmV0d29yazpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNDFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1uby1zbW9raW5nOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJDMlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLW51Y2xlYXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkE0XFxcIjsgfVxcclxcblxcclxcbi5pb24tb3V0bGV0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM0MlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXBhaW50YnJ1c2g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEQ1XFxcIjsgfVxcclxcblxcclxcbi5pb24tcGFpbnRidWNrZXQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEQ2XFxcIjsgfVxcclxcblxcclxcbi5pb24tcGFwZXItYWlycGxhbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkMzXFxcIjsgfVxcclxcblxcclxcbi5pb24tcGFwZXJjbGlwOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIwRlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXBhdXNlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIxMFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXBlcnNvbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMTNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1wZXJzb24tYWRkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIxMVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXBlcnNvbi1zdGFsa2VyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIxMlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXBpZS1ncmFwaDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQTVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1waW46YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkE2XFxcIjsgfVxcclxcblxcclxcbi5pb24tcGlucG9pbnQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkE3XFxcIjsgfVxcclxcblxcclxcbi5pb24tcGl6emE6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkE4XFxcIjsgfVxcclxcblxcclxcbi5pb24tcGxhbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjE0XFxcIjsgfVxcclxcblxcclxcbi5pb24tcGxhbmV0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM0M1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXBsYXk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjE1XFxcIjsgfVxcclxcblxcclxcbi5pb24tcGxheXN0YXRpb246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzBBXFxcIjsgfVxcclxcblxcclxcbi5pb24tcGx1czpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMThcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1wbHVzLWNpcmNsZWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjE2XFxcIjsgfVxcclxcblxcclxcbi5pb24tcGx1cy1yb3VuZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMTdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1wb2RpdW06YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzQ0XFxcIjsgfVxcclxcblxcclxcbi5pb24tcG91bmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjE5XFxcIjsgfVxcclxcblxcclxcbi5pb24tcG93ZXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkE5XFxcIjsgfVxcclxcblxcclxcbi5pb24tcHJpY2V0YWc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkFBXFxcIjsgfVxcclxcblxcclxcbi5pb24tcHJpY2V0YWdzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJBQlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXByaW50ZXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjFBXFxcIjsgfVxcclxcblxcclxcbi5pb24tcHVsbC1yZXF1ZXN0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM0NVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXFyLXNjYW5uZXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzQ2XFxcIjsgfVxcclxcblxcclxcbi5pb24tcXVvdGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzQ3XFxcIjsgfVxcclxcblxcclxcbi5pb24tcmFkaW8td2F2ZXM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkFDXFxcIjsgfVxcclxcblxcclxcbi5pb24tcmVjb3JkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIxQlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXJlZnJlc2g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjFDXFxcIjsgfVxcclxcblxcclxcbi5pb24tcmVwbHk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjFFXFxcIjsgfVxcclxcblxcclxcbi5pb24tcmVwbHktYWxsOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIxRFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXJpYmJvbi1hOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM0OFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXJpYmJvbi1iOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM0OVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNhZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNEFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zYWQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RDdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zY2lzc29yczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNEJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zZWFyY2g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjFGXFxcIjsgfVxcclxcblxcclxcbi5pb24tc2V0dGluZ3M6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkFEXFxcIjsgfVxcclxcblxcclxcbi5pb24tc2hhcmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjIwXFxcIjsgfVxcclxcblxcclxcbi5pb24tc2h1ZmZsZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMjFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1za2lwLWJhY2t3YXJkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIyMlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNraXAtZm9yd2FyZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMjNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtYW5kcm9pZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMjVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtYW5kcm9pZC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIyNFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1hbmd1bGFyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjREOVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1hbmd1bGFyLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEQ4XFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWFwcGxlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIyN1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1hcHBsZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIyNlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1iaXRjb2luOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJBRlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1iaXRjb2luLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkFFXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWJ1ZmZlcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMjlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtYnVmZmVyLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjI4XFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWNocm9tZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0REJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtY2hyb21lLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNERBXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWNvZGVwZW46YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEREXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWNvZGVwZW4tb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RENcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtY3NzMzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0REZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtY3NzMy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRERVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1kZXNpZ25lcm5ld3M6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjJCXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWRlc2lnbmVybmV3cy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIyQVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1kcmliYmJsZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMkRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtZHJpYmJibGUtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMkNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtZHJvcGJveDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMkZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtZHJvcGJveC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIyRVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1ldXJvOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRFMVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1ldXJvLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEUwXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWZhY2Vib29rOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIzMVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1mYWNlYm9vay1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIzMFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1mb3Vyc3F1YXJlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM0RFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1mb3Vyc3F1YXJlLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzRDXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWZyZWVic2QtZGV2aWw6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkM0XFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWdpdGh1YjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMzNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtZ2l0aHViLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjMyXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWdvb2dsZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNEZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtZ29vZ2xlLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzRFXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWdvb2dsZXBsdXM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjM1XFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWdvb2dsZXBsdXMtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMzRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtaGFja2VybmV3czpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMzdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtaGFja2VybmV3cy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIzNlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1odG1sNTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RTNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtaHRtbDUtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RTJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtaW5zdGFncmFtOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM1MVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1pbnN0YWdyYW0tb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNTBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtamF2YXNjcmlwdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RTVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtamF2YXNjcmlwdC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRFNFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1saW5rZWRpbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMzlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtbGlua2VkaW4tb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMzhcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtbWFya2Rvd246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEU2XFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLW5vZGVqczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RTdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtb2N0b2NhdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RThcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtcGludGVyZXN0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJCMVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1waW50ZXJlc3Qtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQjBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtcHl0aG9uOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRFOVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1yZWRkaXQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjNCXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXJlZGRpdC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIzQVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1yc3M6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjNEXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXJzcy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIzQ1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1zYXNzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRFQVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1za3lwZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyM0ZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtc2t5cGUtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyM0VcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtc25hcGNoYXQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEVDXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXNuYXBjaGF0LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEVCXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXR1bWJscjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNDFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtdHVtYmxyLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjQwXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXR1eDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQzVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtdHdpdGNoOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRFRVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC10d2l0Y2gtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RURcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtdHdpdHRlcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNDNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtdHdpdHRlci1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI0MlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC11c2Q6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzUzXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXVzZC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM1MlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC12aW1lbzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNDVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtdmltZW8tb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNDRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtd2hhdHNhcHA6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEYwXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXdoYXRzYXBwLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEVGXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXdpbmRvd3M6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjQ3XFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXdpbmRvd3Mtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNDZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtd29yZHByZXNzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI0OVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC13b3JkcHJlc3Mtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNDhcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwteWFob286YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjRCXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXlhaG9vLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjRBXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXllbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RjJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwteWVuLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEYxXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXlvdXR1YmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjREXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXlvdXR1YmUtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNENcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb3VwLWNhbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RjRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb3VwLWNhbi1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRGM1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNwZWFrZXJwaG9uZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQjJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zcGVlZG9tZXRlcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQjNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zcG9vbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQjRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zdGFyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI0RVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXN0YXRzLWJhcnM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkI1XFxcIjsgfVxcclxcblxcclxcbi5pb24tc3RlYW06YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzBCXFxcIjsgfVxcclxcblxcclxcbi5pb24tc3RvcDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNEZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi10aGVybW9tZXRlcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQjZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi10aHVtYnNkb3duOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI1MFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXRodW1ic3VwOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI1MVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXRvZ2dsZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNTVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi10b2dnbGUtZmlsbGVkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM1NFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXRyYW5zZ2VuZGVyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRGNVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXRyYXNoLWE6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjUyXFxcIjsgfVxcclxcblxcclxcbi5pb24tdHJhc2gtYjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNTNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi10cm9waHk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzU2XFxcIjsgfVxcclxcblxcclxcbi5pb24tdHNoaXJ0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRGN1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXRzaGlydC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRGNlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXVtYnJlbGxhOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJCN1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXVuaXZlcnNpdHk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzU3XFxcIjsgfVxcclxcblxcclxcbi5pb24tdW5sb2NrZWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjU0XFxcIjsgfVxcclxcblxcclxcbi5pb24tdXBsb2FkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI1NVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXVzYjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQjhcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi12aWRlb2NhbWVyYTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNTZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi12b2x1bWUtaGlnaDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNTdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi12b2x1bWUtbG93OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI1OFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXZvbHVtZS1tZWRpdW06YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjU5XFxcIjsgfVxcclxcblxcclxcbi5pb24tdm9sdW1lLW11dGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjVBXFxcIjsgfVxcclxcblxcclxcbi5pb24td2FuZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNThcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi13YXRlcmRyb3A6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjVCXFxcIjsgfVxcclxcblxcclxcbi5pb24td2lmaTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNUNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi13aW5lZ2xhc3M6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkI5XFxcIjsgfVxcclxcblxcclxcbi5pb24td29tYW46YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjVEXFxcIjsgfVxcclxcblxcclxcbi5pb24td3JlbmNoOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJCQVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXhib3g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzBDXFxcIjsgfVxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIDtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9mb250cy9pb25pY29ucy5jc3MnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImltcG9ydCBWdWUgZnJvbSAnbmF0aXZlc2NyaXB0LXZ1ZSdcclxuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnXHJcbmltcG9ydCBIb21lIGZyb20gJy4vdmlld3MvSG9tZS52dWUnXHJcbmltcG9ydCBWdWVEZXZ0b29scyBmcm9tICduYXRpdmVzY3JpcHQtdnVlLWRldnRvb2xzJ1xyXG5pbXBvcnQgUmFkTGlzdFZpZXcgZnJvbSAnbmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L3Z1ZSdcclxuXHJcblZ1ZS51c2UoUmFkTGlzdFZpZXcpXHJcblZ1ZS5yZWdpc3RlckVsZW1lbnQoJ0JhcmNvZGVTY2FubmVyJywgKCkgPT4gcmVxdWlyZSgnbmF0aXZlc2NyaXB0LWJhcmNvZGVzY2FubmVyJykuQmFyY29kZVNjYW5uZXJWaWV3KVxyXG5cclxuLy9mb250aWNvbiBwbHVnaW5cclxuaW1wb3J0IHsgVE5TRm9udEljb24sIGZvbnRpY29uIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWZvbnRpY29uJztcclxuVE5TRm9udEljb24uZGVidWcgPSBmYWxzZTtcclxuVE5TRm9udEljb24ucGF0aHMgPSB7XHJcbiAgJ2ZhJzogJy4vZm9udHMvZm9udC1hd2Vzb21lLmNzcycsXHJcbiAgJ2lvbic6ICcuL2ZvbnRzL2lvbmljb25zLmNzcycsXHJcbn07XHJcblROU0ZvbnRJY29uLmxvYWRDc3MoKTtcclxuVnVlLmZpbHRlcignZm9udGljb24nLCBmb250aWNvbik7XHJcblxyXG5cclxuaWYgKFROU19FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gIFZ1ZS51c2UoVnVlRGV2dG9vbHMpXHJcbn1cclxuLy8gUHJpbnRzIFZ1ZSBsb2dzIHdoZW4gLS1lbnYucHJvZHVjdGlvbiBpcyAqTk9UKiBzZXQgd2hpbGUgYnVpbGRpbmdcclxuVnVlLmNvbmZpZy5zaWxlbnQgPSAoVE5TX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKVxyXG5cclxuXHJcbm5ldyBWdWUoe1xyXG4gIHN0b3JlLFxyXG4gIHJlbmRlcjogaCA9PiBoKCdmcmFtZScsIFtoKEhvbWUpXSlcclxufSkuJHN0YXJ0KClcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xyXG5cclxuICAgIC8vIGNvbnN0cnVjdG9yKHthbmltYWxfaWQsIGFuaW1hbF9uYW1lLCBhbmltYWxfdHlwZSwgc2V4LCBhZ2UsIERPQiwgcHJpbWFyeV9jb2xvciwgc2Vjb25kYXJ5X2NvbG9yLCBicmVlZF9ncm91cCwgcHJpbWFyeV9icmVlZCwgc2Vjb25kYXJ5X2JyZWVkLCBhbmltYWxfc3RhdCwgc3RhbXAgIH0pIHtcclxuICAgIC8vICAgICB0aGlzLmFuaW1hbF9pZCA9IGFuaW1hbF9pZFxyXG4gICAgLy8gICAgIHRoaXMuYW5pbWFsX25hbWUgPSBhbmltYWxfbmFtZVxyXG4gICAgLy8gICAgIHRoaXMuYW5pbWFsX3R5cGUgPSBhbmltYWxfdHlwZVxyXG4gICAgLy8gICAgIHRoaXMuc2V4ID0gc2V4XHJcbiAgICAvLyAgICAgdGhpcy5hZ2UgPSBhZ2VcclxuICAgIC8vICAgICB0aGlzLkRPQiA9IG51RE9CbGxcclxuICAgIC8vICAgICB0aGlzLnByaW1hcnlfY29sb3IgPSBwcmltYXJ5X2NvbG9yXHJcbiAgICAvLyAgICAgdGhpcy5zZWNvbmRhcnlfY29sb3IgPSBzZWNvbmRhcnlfY29sb3JcclxuICAgIC8vICAgICB0aGlzLmJyZWVkX2dyb3VwID0gYnJlZWRfZ3JvdXBcclxuICAgIC8vICAgICB0aGlzLnByaW1hcnlfYnJlZWQgPSBwcmltYXJ5X2JyZWVkXHJcbiAgICAvLyAgICAgdGhpcy5zZWNvbmRhcnlfYnJlZWQgPSBzZWNvbmRhcnlfYnJlZWRcclxuICAgIC8vICAgICB0aGlzLmFuaW1hbF9zdGF0ID0gYW5pbWFsX3N0YXRcclxuICAgIC8vICAgICB0aGlzLnN0YW1wID0gc3RhbXBcclxuICAgIC8vIH1cclxuXHJcblxyXG4gICAgLy8gY2F0ZWdvcnk6IFwiRG9nXCIsXHJcbiAgICAvLyBjYXRlZ29yeVRhZzogXCIjMjdBRTYwXCIsXHJcbiAgICAvLyBicmVlZF9ncm91cDogXCJIb3VuZFwiLFxyXG4gICAgLy8gcHJpbWFyeV9icmVlZDogXCJCZWFnbGVcIixcclxuICAgIC8vIGFnZTogXCIxMFwiLFxyXG4gICAgLy8gZ2VuZGVyOiBcIk1cIixcclxuICAgIC8vIGFuaW1hbF9zaXplOiBcIlNtYWxsXCIsXHJcbiAgICAvLyBwcmltYXJ5X2NvbG9yOiBcIlRhblwiLFxyXG4gICAgLy8gbG9jYXRpb246IFwiRG93bmV5XCIsXHJcbiAgICAvLyBpc0F2YWlsYWJsZTogZmFsc2UsXHJcbiAgICAvLyBpc0Zhdm9yaXRlOiB0cnVlLFxyXG4gICAgLy8gY29tbWVudHM6IDExLFxyXG4gICAgLy8gcmF0aW5nOiBcIjQuMFwiLFxyXG4gICAgLy8gZGVzY3JpcHRpb246IFwiYVwiXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyB7XHJcbiAgY29uc3RydWN0b3IgKHF1ZXN0aW9uKSB7XHJcbiAgICB0aGlzLmlkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwMClcclxuICAgIHRoaXMucXVlc3Rpb24gPSBxdWVzdGlvblxyXG4gICAgdGhpcy5hbnN3ZXIgPSBudWxsXHJcbiAgICB0aGlzLmNvdW50ID0gMFxyXG4gIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcclxuXHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgdGhpcy5sb2NhdGlvbiA9ICd0ZW1wJ1xyXG4gIH1cclxuXHJcbiAgc2V0TG9jYXRpb24gKHFyQ29kZSkge1xyXG4gICAgdGhpcy5sb2NhdGlvbiA9IHFyQ29kZVxyXG4gIH1cclxuXHJcbiAgc2V0VGlja2V0SW5mbyAoeyBwaG9uZSwgbmFtZSwgcXVlcnkgfSkge1xyXG4gICAgdGhpcy5waG9uZSA9IHBob25lXHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lXHJcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcclxuICAgIHRoaXMudGltZUluID0gbmV3IERhdGUoKVxyXG4gIH1cclxuXHJcbn1cclxuIiwiY29uc3QgaHR0cE1vZHVsZSA9IHJlcXVpcmUoJ3Rucy1jb3JlLW1vZHVsZXMvaHR0cCcpXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBnZXRBbmltYWxzKCkge1xyXG4gICAgICAgIHJldHVybiBodHRwTW9kdWxlLmdldEpTT04oYGh0dHBzOi8vYWN1YS1zZXJ2ZXIuaGVyb2t1YXBwLmNvbS9hbmltYWxzYClcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiIsImltcG9ydCB7IGZhcXMgfSBmcm9tICdAL2RiL2ZhcXMuanNvbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBnZXRGYXFzICgpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHJlc29sdmUoZmFxcylcclxuICAgICAgfSwgMTApXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgYWRkRmFxIChlbnRyeSkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgcmVzb2x2ZShlbnRyeSlcclxuICAgICAgfSwgMTApXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG4iLCIvLyBpbXBvcnQgeyB0aWNrZXRzIH0gZnJvbSAnQC9kYi9mYXFzLmpzb24nXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgLy8gZ2V0VGlja2V0cyAoKSB7XHJcbiAgLy8gICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gIC8vICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAvLyAgICAgICByZXNvbHZlKHsgZGF0YTogdGlja2V0cyB9KVxyXG4gIC8vICAgICB9LCAxMClcclxuICAvLyAgIH0pXHJcbiAgLy8gfSxcclxuICBhZGRUaWNrZXQgKGVudHJ5KSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICByZXNvbHZlKGVudHJ5KVxyXG4gICAgICB9LCAxMClcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbiIsImNvbnN0IGh0dHBNb2R1bGUgPSByZXF1aXJlKCd0bnMtY29yZS1tb2R1bGVzL2h0dHAnKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGdldEZhcXMgKCkge1xyXG4gICAgcmV0dXJuIGh0dHBNb2R1bGUuZ2V0SlNPTignaHR0cDovL2xvY2FsaG9zdDozMDAwL2ZhcXMnKVxyXG4gIH0sXHJcbiAgYWRkRmFxIChmYXEpIHtcclxuICAgIHJldHVybiBodHRwTW9kdWxlLnJlcXVlc3Qoe1xyXG4gICAgICAvLyB1cmw6IGBodHRwczovL2FjdWEtc2VydmVyLmhlcm9rdWFwcC5jb20vZmFxc2AsXHJcbiAgICAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCcsXHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgIGNvbnRlbnQ6IEpTT04uc3RyaW5naWZ5KGZhcSlcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbiIsImNvbnN0IGh0dHBNb2R1bGUgPSByZXF1aXJlKCd0bnMtY29yZS1tb2R1bGVzL2h0dHAnKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGFkZFRpY2tldCAodGlja2V0KSB7XHJcbiAgICByZXR1cm4gaHR0cE1vZHVsZS5yZXF1ZXN0KHtcclxuICAgICAgLy8gdXJsOiBgaHR0cHM6Ly9hY3VhLXNlcnZlci5oZXJva3VhcHAuY29tL3RpY2tldHNgLFxyXG4gICAgICB1cmw6IGBodHRwOi8vWzo6MV06MzAwMC90aWNrZXRzYCxcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgY29udGVudDogSlNPTi5zdHJpbmdpZnkodGlja2V0KVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICBjaGVja1RpY2tldCAodGlja2V0SWQpIHtcclxuICAgIHJldHVybiBodHRwTW9kdWxlLmdldEpTT04oXHJcbiAgICAgICAgLy8gYGh0dHBzOi8vYWN1YS1zZXJ2ZXIuaGVyb2t1YXBwLmNvbS90aWNrZXRzLyR7dGlja2V0SWR9YFxyXG4gICAgICAgIGBodHRwOi8vWzo6MV06MzAwMC90aWNrZXRzLyR7dGlja2V0SWR9YFxyXG4gICAgKX1cclxufVxyXG4iLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuaW1wb3J0IFZ1ZXggZnJvbSAndnVleCdcclxuaW1wb3J0IEFuaW1hbCBmcm9tICdAL21vZGVscy9BbmltYWwnXHJcbmltcG9ydCBUaWNrZXQgZnJvbSAnQC9tb2RlbHMvVGlja2V0J1xyXG5pbXBvcnQgVGlja2V0U2VydmljZSBmcm9tICdAL3NlcnZpY2VzL1RpY2tldFNlcnZpY2UnXHJcbmltcG9ydCBGYXFTZXJ2aWNlIGZyb20gJ0Avc2VydmljZXMvRmFxU2VydmljZSdcclxuLy8gaW1wb3J0IFRpY2tldFNlcnZpY2UgZnJvbSAnQC9zZXJ2aWNlcy9GYWtlVGlja2V0U2VydmljZSdcclxuLy8gaW1wb3J0IEZhcVNlcnZpY2UgZnJvbSAnQC9zZXJ2aWNlcy9GYWtlRmFxU2VydmljZSdcclxuXHJcblZ1ZS51c2UoVnVleClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBWdWV4LlN0b3JlKHtcclxuICBzdGF0ZToge1xyXG4gICAgYW5pbWFsczogW10sXHJcbiAgICB0aWNrZXRzOiBbXSxcclxuICAgIGZhcXM6IFtdLFxyXG4gICAgdXNlckFuaW1hbDogbmV3IEFuaW1hbCgpLFxyXG4gICAgdXNlckZhcToge30sXHJcbiAgICBsb2NhdGlvbjogJ0Rvd25leScsXHJcbiAgICB1c2VyVGlja2V0OiBuZXcgVGlja2V0KCksXHJcbiAgICBhcHByb3ZlZFRpY2tldDogdW5kZWZpbmVkXHJcbiAgfSxcclxuICAvLyBjaGFuZ2UgdGhlIHN0YXRlIG9mIHRoZSBhcHAgKG11c3QgYmUgc3luY2hyb25vdXMpXHJcbiAgbXV0YXRpb25zOiB7XHJcbiAgICAvLyBhZG9wdGlvblxyXG4gICAgc3RvcmVBbmltYWwoc3RhdGUsIGFuaW1hbCkge1xyXG4gICAgICBzdGF0ZS51c2VyRmFxID0gYW5pbWFsXHJcbiAgICB9LFxyXG4gICAgQUREX0FOSU1BTChzdGF0ZSwgYW5pbWFsKSB7XHJcbiAgICAgIHN0YXRlLmFuaW1hbHMucHVzaChhbmltYWwpXHJcbiAgICB9LFxyXG4gICAgc3RvcmVGYXEoc3RhdGUsIGZhcSkge1xyXG4gICAgICBzdGF0ZS51c2VyRmFxID0gZmFxXHJcbiAgICB9LFxyXG4gICAgc2V0VGlja2V0TG9jYXRpb24gKHN0YXRlLCBsb2NhdGlvbikge1xyXG4gICAgICBzdGF0ZS5sb2NhdGlvbiA9IGxvY2F0aW9uXHJcbiAgICB9LFxyXG4gICAgc2V0VGlja2V0SW5mbyAoc3RhdGUsIHVzZXJJbnB1dCkge1xyXG4gICAgICBzdGF0ZS51c2VyVGlja2V0LnNldFRpY2tldEluZm8odXNlcklucHV0KVxyXG4gICAgfSxcclxuICAgIHN0b3JlVGlja2V0IChzdGF0ZSwgdGlja2V0KSB7XHJcbiAgICAgIHN0YXRlLnVzZXJUaWNrZXQgPSB0aWNrZXRcclxuICAgIH0sXHJcbiAgICBTRVRfVElDS0VUIChzdGF0ZSwgdGlja2V0KSB7XHJcbiAgICAgIHN0YXRlLmFwcHJvdmVkVGlja2V0ID0gdGlja2V0XHJcbiAgICB9LFxyXG4gICAgQUREX1RJQ0tFVCAoc3RhdGUsIHRpY2tldCkge1xyXG4gICAgICBzdGF0ZS5hcHByb3ZlZFRpY2tldCA9IHRpY2tldFxyXG4gICAgfSxcclxuICAgIFNFVF9GQVFTIChzdGF0ZSwgZmFxcykge1xyXG4gICAgICBzdGF0ZS5mYXFzID0gZmFxc1xyXG4gICAgfSxcclxuICAgIEFERF9GQVEgKHN0YXRlLCBmYXEpIHtcclxuICAgICAgc3RhdGUuZmFxcy5wdXNoKGZhcSlcclxuICAgIH1cclxuICAgIFxyXG5cclxuICB9LFxyXG4gIC8vIGFzeW5jaHJvbm91cyBvcGVyYXRpb25zIChTdWNoIGFzIEFQSSBjYWxscylcclxuICBhY3Rpb25zOiB7XHJcbiAgICBjaGVja1RpY2tldCAoeyBjb21taXQgfSwgdGlja2V0SWQpIHtcclxuICAgICAgVGlja2V0U2VydmljZS5jaGVja1RpY2tldCh0aWNrZXRJZClcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgY29tbWl0KCdTRVRfVElDS0VUJywgcmVzKVxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgYWRkVGlja2V0ICh7IGNvbW1pdCB9LCB0aWNrZXQpIHtcclxuICAgICAgVGlja2V0U2VydmljZS5hZGRUaWNrZXQodGlja2V0KVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICBjb21taXQoJ0FERF9USUNLRVQnLCByZXMuY29udGVudC50b0pTT04oKSlcclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuICAgIGxvYWRGYXFzICh7IGNvbW1pdCB9KSB7XHJcbiAgICAgIEZhcVNlcnZpY2UuZ2V0RmFxcygpXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIGNvbW1pdCgnU0VUX0ZBUVMnLCByZXMpXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBhZGRGYXEgKHsgY29tbWl0IH0sIGZhcSkge1xyXG4gICAgICBGYXFTZXJ2aWNlLmFkZEZhcShmYXEpXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIGNvbW1pdCgnQUREX0ZBUScsIHJlcy5jb250ZW50LnRvSlNPTigpKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBnZXR0ZXJzOiB7XHJcbiAgICBnZXRTZWFyY2hSZXN1bHRzOiBzdGF0ZSA9PiBzZWFyY2ggPT4ge1xyXG4gICAgICBpZiAoc2VhcmNoID09PSAnJylcclxuICAgICAgICByZXR1cm4gc3RhdGUuZmFxc1xyXG4gICAgICBcclxuICAgICAgY29uc3Qgd29yZHMgPSBzZWFyY2guc3BsaXQoJyAnKVxyXG4gICAgICBcclxuICAgICAgcmV0dXJuIHN0YXRlLmZhcXMuZmlsdGVyKGZhcSA9PiB3b3Jkcy5zb21lKFxyXG4gICAgICAgIHdvcmQgPT4gZmFxLnF1ZXJ5LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMod29yZC50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICAgIHx8IGZhcS5hbnN3ZXIudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh3b3JkLnRvTG93ZXJDYXNlKCkpKSlcclxuICAgIH1cclxuICB9XHJcbn0pXHJcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQWRvcHRpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWIxNTEwNGYyJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0Fkb3B0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQWRvcHRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0Fkb3B0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvRHJTYW1zb25uaXRlL0Rlc2t0b3AvQ1MgQ291cnNlIG1hdGVyaWFscy9TZW5pb3IgREVzaWduL2FjdWFWXzIvYWN1YS1tb2JpbGUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYjE1MTA0ZjInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYjE1MTA0ZjInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYjE1MTA0ZjInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0Fkb3B0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iMTUxMDRmMiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdiMTUxMDRmMicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmlld3MvQWRvcHRpb24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Fkb3B0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Fkb3B0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRvcHRpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRvcHRpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRvcHRpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWIxNTEwNGYyJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9GYXEudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWUzOWQxMDkyJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0ZhcS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0ZhcS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vRmFxLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWUzOWQxMDkyJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiZTM5ZDEwOTJcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvRHJTYW1zb25uaXRlL0Rlc2t0b3AvQ1MgQ291cnNlIG1hdGVyaWFscy9TZW5pb3IgREVzaWduL2FjdWFWXzIvYWN1YS1tb2JpbGUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnZTM5ZDEwOTInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZTM5ZDEwOTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZTM5ZDEwOTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0ZhcS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZTM5ZDEwOTImc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZTM5ZDEwOTInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZpZXdzL0ZhcS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmFxLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZhcS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GYXEudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZTM5ZDEwOTImc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GYXEudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZTM5ZDEwOTImc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZhcS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZTM5ZDEwOTImc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJmMmJlN2U0JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJmMmJlN2U0JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMmYyYmU3ZTRcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvRHJTYW1zb25uaXRlL0Rlc2t0b3AvQ1MgQ291cnNlIG1hdGVyaWFscy9TZW5pb3IgREVzaWduL2FjdWFWXzIvYWN1YS1tb2JpbGUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMmYyYmU3ZTQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMmYyYmU3ZTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMmYyYmU3ZTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJmMmJlN2U0JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzJmMmJlN2U0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2aWV3cy9Ib21lLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yZjJiZTdlNCZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MmYyYmU3ZTQmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJmMmJlN2U0JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Mb2NhdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2U1OTc4NjQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTG9jYXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Mb2NhdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vTG9jYXRpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2U1OTc4NjQmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIzZTU5Nzg2NFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9EclNhbXNvbm5pdGUvRGVza3RvcC9DUyBDb3Vyc2UgbWF0ZXJpYWxzL1NlbmlvciBERXNpZ24vYWN1YVZfMi9hY3VhLW1vYmlsZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczZTU5Nzg2NCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczZTU5Nzg2NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczZTU5Nzg2NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTG9jYXRpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNlNTk3ODY0JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzNlNTk3ODY0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2aWV3cy9Mb2NhdGlvbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9jYXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9jYXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9jYXRpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2U1OTc4NjQmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2NhdGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zZTU5Nzg2NCZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9jYXRpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNlNTk3ODY0JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9TZXJ2aWNlUmVxdWVzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2NjZWNmMDkmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU2VydmljZVJlcXVlc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TZXJ2aWNlUmVxdWVzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vU2VydmljZVJlcXVlc3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2NjZWNmMDkmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjNjY2VjZjA5XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL0RyU2Ftc29ubml0ZS9EZXNrdG9wL0NTIENvdXJzZSBtYXRlcmlhbHMvU2VuaW9yIERFc2lnbi9hY3VhVl8yL2FjdWEtbW9iaWxlL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzNjY2VjZjA5JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzNjY2VjZjA5JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzNjY2VjZjA5JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TZXJ2aWNlUmVxdWVzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2NjZWNmMDkmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignM2NjZWNmMDknLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZpZXdzL1NlcnZpY2VSZXF1ZXN0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZXJ2aWNlUmVxdWVzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZXJ2aWNlUmVxdWVzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NlcnZpY2VSZXF1ZXN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNjY2VjZjA5JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NlcnZpY2VSZXF1ZXN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNjY2VjZjA5JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NlcnZpY2VSZXF1ZXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zY2NlY2YwOSZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVGlja2V0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wN2I0MGMwYSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9UaWNrZXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9UaWNrZXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1RpY2tldC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wN2I0MGMwYSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMDdiNDBjMGFcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvRHJTYW1zb25uaXRlL0Rlc2t0b3AvQ1MgQ291cnNlIG1hdGVyaWFscy9TZW5pb3IgREVzaWduL2FjdWFWXzIvYWN1YS1tb2JpbGUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMDdiNDBjMGEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMDdiNDBjMGEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMDdiNDBjMGEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1RpY2tldC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDdiNDBjMGEmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMDdiNDBjMGEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZpZXdzL1RpY2tldC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGlja2V0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RpY2tldC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RpY2tldC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wN2I0MGMwYSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UaWNrZXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDdiNDBjMGEmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGlja2V0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wN2I0MGMwYSZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVGlja2V0Rm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmE4YmZmNWYmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVGlja2V0Rm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1RpY2tldEZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI2YThiZmY1ZlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9EclNhbXNvbm5pdGUvRGVza3RvcC9DUyBDb3Vyc2UgbWF0ZXJpYWxzL1NlbmlvciBERXNpZ24vYWN1YVZfMi9hY3VhLW1vYmlsZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2YThiZmY1ZicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2YThiZmY1ZicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2YThiZmY1ZicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVGlja2V0Rm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmE4YmZmNWYmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNmE4YmZmNWYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZpZXdzL1RpY2tldEZvcm0udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RpY2tldEZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGlja2V0Rm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGlja2V0Rm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmE4YmZmNWYmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1RpY2tldE9wdGlvbnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTEzOWQ5NTUzJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1RpY2tldE9wdGlvbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9UaWNrZXRPcHRpb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9UaWNrZXRPcHRpb25zLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTEzOWQ5NTUzJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIxMzlkOTU1M1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9EclNhbXNvbm5pdGUvRGVza3RvcC9DUyBDb3Vyc2UgbWF0ZXJpYWxzL1NlbmlvciBERXNpZ24vYWN1YVZfMi9hY3VhLW1vYmlsZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxMzlkOTU1MycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxMzlkOTU1MycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxMzlkOTU1MycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVGlja2V0T3B0aW9ucy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTM5ZDk1NTMmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMTM5ZDk1NTMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZpZXdzL1RpY2tldE9wdGlvbnMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RpY2tldE9wdGlvbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGlja2V0T3B0aW9ucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RpY2tldE9wdGlvbnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTM5ZDk1NTMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGlja2V0T3B0aW9ucy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xMzlkOTU1MyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UaWNrZXRPcHRpb25zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xMzlkOTU1MyZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=