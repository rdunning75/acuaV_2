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
    return httpModule.getJSON('https://acua-server.herokuapp.com/faqs');
  },

  addFaq(faq) {
    return httpModule.request({
      url: "https://acua-server.herokuapp.com/faqs",
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
      url: "https://acua-server.herokuapp.com/tickets",
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      content: JSON.stringify(ticket)
    });
  },

  checkTicket(ticketId) {
    return httpModule.getJSON("https://acua-server.herokuapp.com/tickets/".concat(ticketId));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9hZG9wdGlvbi9BZG9wdGlvbkFuaW1hbERldGFpbHMudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL2Fkb3B0aW9uL0FuaW1hbENhcmQudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL2Fkb3B0aW9uL2NhdGVnb3J5LnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9idXR0b25zL0NhdGVnb3J5QnV0dG9uLnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9idXR0b25zL0ljb25CdXR0b24udnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL2xvY2F0aW9uL0FuaW1hbENlbnRlckRldGFpbHMudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL3N1Ymxpc3RzL0ZhcUluZm8udnVlIiwid2VicGFjazovLy92aWV3cy9BZG9wdGlvbi52dWUiLCJ3ZWJwYWNrOi8vL3ZpZXdzL0ZhcS52dWUiLCJ3ZWJwYWNrOi8vL3ZpZXdzL0hvbWUudnVlIiwid2VicGFjazovLy92aWV3cy9Mb2NhdGlvbi52dWUiLCJ3ZWJwYWNrOi8vL3ZpZXdzL1NlcnZpY2VSZXF1ZXN0LnZ1ZSIsIndlYnBhY2s6Ly8vdmlld3MvVGlja2V0LnZ1ZSIsIndlYnBhY2s6Ly8vdmlld3MvVGlja2V0Rm9ybS52dWUiLCJ3ZWJwYWNrOi8vL3ZpZXdzL1RpY2tldE9wdGlvbnMudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbG9jYXRpb24vQW5pbWFsQ2VudGVyRGV0YWlscy52dWU/YWQ0YyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N1Ymxpc3RzL0ZhcUluZm8udnVlPzQyNTMiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvRmFxLnZ1ZT9lMDg1Iiwid2VicGFjazovLy8uL3ZpZXdzL0hvbWUudnVlP2ZjYTciLCJ3ZWJwYWNrOi8vLy4vdmlld3MvTG9jYXRpb24udnVlP2U4YWIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hZG9wdGlvbi9BZG9wdGlvbkFuaW1hbERldGFpbHMudnVlPzg5YzUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hZG9wdGlvbi9BbmltYWxDYXJkLnZ1ZT81ZGU4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRvcHRpb24vY2F0ZWdvcnkudnVlPzMzODAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9idXR0b25zL0NhdGVnb3J5QnV0dG9uLnZ1ZT9hYTU0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9ucy9JY29uQnV0dG9uLnZ1ZT9lMDJkIiwid2VicGFjazovLy8uL3ZpZXdzL0Fkb3B0aW9uLnZ1ZT82ODExIiwid2VicGFjazovLy8uL3ZpZXdzL1NlcnZpY2VSZXF1ZXN0LnZ1ZT84Mzk0Iiwid2VicGFjazovLy8uL3ZpZXdzL1RpY2tldC52dWU/MWNiMSIsIndlYnBhY2s6Ly8vLi92aWV3cy9UaWNrZXRPcHRpb25zLnZ1ZT84MzAyIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRvcHRpb24vQWRvcHRpb25BbmltYWxEZXRhaWxzLnZ1ZT8xMzJmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRvcHRpb24vQW5pbWFsQ2FyZC52dWU/NjQ4OCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Fkb3B0aW9uL2NhdGVnb3J5LnZ1ZT9mNDRlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9ucy9DYXRlZ29yeUJ1dHRvbi52dWU/YjVhNCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbnMvSWNvbkJ1dHRvbi52dWU/NDYyNiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xvY2F0aW9uL0FuaW1hbENlbnRlckRldGFpbHMudnVlPzU3ZjAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zdWJsaXN0cy9GYXFJbmZvLnZ1ZT9lNTFjIiwid2VicGFjazovLy8uL3ZpZXdzL0Fkb3B0aW9uLnZ1ZT85YTFlIiwid2VicGFjazovLy8uL3ZpZXdzL0ZhcS52dWU/ZDA4NiIsIndlYnBhY2s6Ly8vLi92aWV3cy9Ib21lLnZ1ZT9lMWZiIiwid2VicGFjazovLy8uL3ZpZXdzL0xvY2F0aW9uLnZ1ZT8xZmFlIiwid2VicGFjazovLy8uL3ZpZXdzL1NlcnZpY2VSZXF1ZXN0LnZ1ZT9mYTNmIiwid2VicGFjazovLy8uL3ZpZXdzL1RpY2tldC52dWU/MTc2MCIsIndlYnBhY2s6Ly8vLi92aWV3cy9UaWNrZXRGb3JtLnZ1ZT9jYTk4Iiwid2VicGFjazovLy8uL3ZpZXdzL1RpY2tldE9wdGlvbnMudnVlPzk0NzQiLCJ3ZWJwYWNrOi8vLy4gc3luYyBub25yZWN1cnNpdmUgXlxcLlxcL2FwcFxcLihjc3N8c2Nzc3xsZXNzfHNhc3MpJCIsIndlYnBhY2s6Ly8vXFxiX1tcXHctXSpcXC4pc2NzcykkIiwid2VicGFjazovLy8uL0FuaW1hbENlbnRlci5zY3NzIiwid2VicGFjazovLy8uL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRvcHRpb24vQWRvcHRpb25BbmltYWxEZXRhaWxzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Fkb3B0aW9uL0Fkb3B0aW9uQW5pbWFsRGV0YWlscy52dWU/M2JkNCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Fkb3B0aW9uL0Fkb3B0aW9uQW5pbWFsRGV0YWlscy52dWU/ZTM4OCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Fkb3B0aW9uL0Fkb3B0aW9uQW5pbWFsRGV0YWlscy52dWU/N2U3YiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Fkb3B0aW9uL0FuaW1hbENhcmQudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRvcHRpb24vQW5pbWFsQ2FyZC52dWU/ZTAyOCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Fkb3B0aW9uL0FuaW1hbENhcmQudnVlPzgzYWMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hZG9wdGlvbi9BbmltYWxDYXJkLnZ1ZT9hMzc4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRvcHRpb24vY2F0ZWdvcnkudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRvcHRpb24vY2F0ZWdvcnkudnVlPzU5MzQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hZG9wdGlvbi9jYXRlZ29yeS52dWU/NjEwZiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Fkb3B0aW9uL2NhdGVnb3J5LnZ1ZT82N2VhIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9ucy9DYXRlZ29yeUJ1dHRvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9idXR0b25zL0NhdGVnb3J5QnV0dG9uLnZ1ZT9iMGE3Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9ucy9DYXRlZ29yeUJ1dHRvbi52dWU/Y2NlMyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbnMvQ2F0ZWdvcnlCdXR0b24udnVlPzk5YzIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9idXR0b25zL0ljb25CdXR0b24udnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9ucy9JY29uQnV0dG9uLnZ1ZT8wMzE0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9ucy9JY29uQnV0dG9uLnZ1ZT8zY2M2Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9ucy9JY29uQnV0dG9uLnZ1ZT8wYTVmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbG9jYXRpb24vQW5pbWFsQ2VudGVyRGV0YWlscy52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sb2NhdGlvbi9BbmltYWxDZW50ZXJEZXRhaWxzLnZ1ZT8zMWQxIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbG9jYXRpb24vQW5pbWFsQ2VudGVyRGV0YWlscy52dWU/ODg1NiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xvY2F0aW9uL0FuaW1hbENlbnRlckRldGFpbHMudnVlPzhmNTUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zdWJsaXN0cy9GYXFJbmZvLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N1Ymxpc3RzL0ZhcUluZm8udnVlPzIwNWYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zdWJsaXN0cy9GYXFJbmZvLnZ1ZT85MzMyIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3VibGlzdHMvRmFxSW5mby52dWU/YTJkYSIsIndlYnBhY2s6Ly8vLi9mb250cy9mb250LWF3ZXNvbWUuY3NzIiwid2VicGFjazovLy8uL2ZvbnRzL2lvbmljb25zLmNzcyIsIndlYnBhY2s6Ly8vLi9tYWluLmpzIiwid2VicGFjazovLy8uL21vZGVscy9BbmltYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL0ZhcS5qcyIsIndlYnBhY2s6Ly8vLi9tb2RlbHMvVGlja2V0LmpzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL0Fkb3B0aW9uU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9GYWtlRmFxU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9GYWtlVGlja2V0U2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9GYXFTZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL1RpY2tldFNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvQWRvcHRpb24udnVlIiwid2VicGFjazovLy8uL3ZpZXdzL0Fkb3B0aW9uLnZ1ZT8zZjdkIiwid2VicGFjazovLy8uL3ZpZXdzL0Fkb3B0aW9uLnZ1ZT8yYWRmIiwid2VicGFjazovLy8uL3ZpZXdzL0Fkb3B0aW9uLnZ1ZT9jNTNlIiwid2VicGFjazovLy8uL3ZpZXdzL0ZhcS52dWUiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvRmFxLnZ1ZT8wZGMwIiwid2VicGFjazovLy8uL3ZpZXdzL0ZhcS52dWU/MGM1OCIsIndlYnBhY2s6Ly8vLi92aWV3cy9GYXEudnVlPzJiNGMiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvSG9tZS52dWUiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvSG9tZS52dWU/ODg1NiIsIndlYnBhY2s6Ly8vLi92aWV3cy9Ib21lLnZ1ZT9hMGZmIiwid2VicGFjazovLy8uL3ZpZXdzL0hvbWUudnVlPzhlY2QiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvTG9jYXRpb24udnVlIiwid2VicGFjazovLy8uL3ZpZXdzL0xvY2F0aW9uLnZ1ZT9lMDAwIiwid2VicGFjazovLy8uL3ZpZXdzL0xvY2F0aW9uLnZ1ZT9kNmUxIiwid2VicGFjazovLy8uL3ZpZXdzL0xvY2F0aW9uLnZ1ZT8yNGM4Iiwid2VicGFjazovLy8uL3ZpZXdzL1NlcnZpY2VSZXF1ZXN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi92aWV3cy9TZXJ2aWNlUmVxdWVzdC52dWU/ZDJiZSIsIndlYnBhY2s6Ly8vLi92aWV3cy9TZXJ2aWNlUmVxdWVzdC52dWU/ZWVmNCIsIndlYnBhY2s6Ly8vLi92aWV3cy9TZXJ2aWNlUmVxdWVzdC52dWU/ZWE3NiIsIndlYnBhY2s6Ly8vLi92aWV3cy9UaWNrZXQudnVlIiwid2VicGFjazovLy8uL3ZpZXdzL1RpY2tldC52dWU/ZTgwNyIsIndlYnBhY2s6Ly8vLi92aWV3cy9UaWNrZXQudnVlPzI3YjUiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvVGlja2V0LnZ1ZT80ODRjIiwid2VicGFjazovLy8uL3ZpZXdzL1RpY2tldEZvcm0udnVlIiwid2VicGFjazovLy8uL3ZpZXdzL1RpY2tldEZvcm0udnVlPzBiZjUiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvVGlja2V0Rm9ybS52dWU/MTQ1MyIsIndlYnBhY2s6Ly8vLi92aWV3cy9UaWNrZXRPcHRpb25zLnZ1ZSIsIndlYnBhY2s6Ly8vLi92aWV3cy9UaWNrZXRPcHRpb25zLnZ1ZT83MzE5Iiwid2VicGFjazovLy8uL3ZpZXdzL1RpY2tldE9wdGlvbnMudnVlP2Q3YTIiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvVGlja2V0T3B0aW9ucy52dWU/MzkxZiJdLCJuYW1lcyI6WyJzdG9yZSIsIkhvbWUiLCJWdWVEZXZ0b29scyIsIlJhZExpc3RWaWV3IiwiVnVlIiwidXNlIiwicmVnaXN0ZXJFbGVtZW50IiwicmVxdWlyZSIsIlROU0ZvbnRJY29uIiwiZGVidWciLCJwYXRocyIsImxvYWRDc3MiLCJmaWx0ZXIiLCJmb250aWNvbiIsInJlbmRlciIsImgiLCIkc3RhcnQiLCJjb25zdHJ1Y3RvciIsInF1ZXN0aW9uIiwiaWQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJhbnN3ZXIiLCJjb3VudCIsImxvY2F0aW9uIiwic2V0TG9jYXRpb24iLCJxckNvZGUiLCJzZXRUaWNrZXRJbmZvIiwicGhvbmUiLCJuYW1lIiwicXVlcnkiLCJ0aW1lSW4iLCJEYXRlIiwiaHR0cE1vZHVsZSIsImdldEFuaW1hbHMiLCJnZXRKU09OIiwiZ2V0RmFxcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsImZhcXMiLCJhZGRGYXEiLCJlbnRyeSIsImFkZFRpY2tldCIsImZhcSIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJoZWFkZXJzIiwiY29udGVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aWNrZXQiLCJjaGVja1RpY2tldCIsInRpY2tldElkIiwiVnVleCIsIlN0b3JlIiwic3RhdGUiLCJhbmltYWxzIiwidGlja2V0cyIsInVzZXJBbmltYWwiLCJBbmltYWwiLCJ1c2VyRmFxIiwidXNlclRpY2tldCIsIlRpY2tldCIsImFwcHJvdmVkVGlja2V0IiwidW5kZWZpbmVkIiwibXV0YXRpb25zIiwic3RvcmVBbmltYWwiLCJhbmltYWwiLCJBRERfQU5JTUFMIiwicHVzaCIsInN0b3JlRmFxIiwic2V0VGlja2V0TG9jYXRpb24iLCJ1c2VySW5wdXQiLCJzdG9yZVRpY2tldCIsIlNFVF9USUNLRVQiLCJBRERfVElDS0VUIiwiU0VUX0ZBUVMiLCJBRERfRkFRIiwiYWN0aW9ucyIsImNvbW1pdCIsIlRpY2tldFNlcnZpY2UiLCJ0aGVuIiwicmVzIiwidG9KU09OIiwibG9hZEZhcXMiLCJGYXFTZXJ2aWNlIiwiZ2V0dGVycyIsImdldFNlYXJjaFJlc3VsdHMiLCJzZWFyY2giLCJ3b3JkcyIsInNwbGl0Iiwic29tZSIsIndvcmQiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtSUE7QUFDQSxpQkFEQTtBQUVBLGdCQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFhQTs7QUFmQSxHQUhBOztBQW9CQTtBQUNBLG1CQUNBO0FBQ0E7QUFEQSxLQURBLEVBSUE7QUFDQTtBQURBLEtBSkEsRUFPQTtBQUNBO0FBREEsS0FQQSxFQVVBO0FBQ0E7QUFEQSxLQVZBLEVBREEsQ0FlQTtBQUNBO0FBQ0EsR0FyQ0E7O0FBc0NBLGNBdENBOztBQXVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBSkE7O0FBS0E7QUFDQTtBQUNBO0FBQ0EsY0FDQSxPQURBLENBQ0E7QUFDQTtBQUNBLGdCQURBO0FBRUE7QUFGQSxTQURBO0FBS0Esb0JBTEE7QUFNQTtBQU5BLE9BREEsRUFTQSxJQVRBLENBU0E7QUFDQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxrQkFGQTtBQUdBO0FBSEE7QUFEQTtBQU9BLE9BakJBLEVBa0JBLElBbEJBLENBa0JBO0FBQ0E7QUFDQTtBQUNBLGdCQURBO0FBRUEsZ0JBRkE7QUFHQTtBQUhBO0FBREE7QUFPQSxPQTFCQSxFQTJCQSxJQTNCQSxDQTJCQSxjQTNCQTtBQTRCQSxLQXBDQTs7QUFxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUF6Q0EsR0F2Q0E7O0FBa0ZBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBO0FBRkE7QUFJQTs7QUF2RkEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwYkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QVksb0JBQW9CLEVBQUUsWUFBWSxxQkFBcUIsRUFBRSxZQUFZLG1CQUFtQixFQUFFLFlBQVksb0JBQW9CLG1CQUFtQixFQUFFLFlBQVksa0JBQWtCLHFCQUFxQixFQUFFLFVBQVUsY0FBYyxFQUFFLFlBQVksa0JBQWtCLEVBQUUsWUFBWSxvQkFBb0IsRUFBRSxZQUFZLHFCQUFxQixFQUFFLFlBQVksbUJBQW1CLEVBQUUsWUFBWSxvQkFBb0IsbUJBQW1CLEVBQUUsWUFBWSxrQkFBa0IscUJBQXFCLEVBQUUsVUFBVSxjQUFjLEVBQUUsWUFBWSxrQkFBa0IsRUFBRSxZQUFZLG9CQUFvQixFQUFFLFlBQVkscUJBQXFCLEVBQUUsWUFBWSxtQkFBbUIsRUFBRSxZQUFZLG9CQUFvQixtQkFBbUIsRUFBRSxZQUFZLGtCQUFrQixxQkFBcUIsRUFBRSxVQUFVLGNBQWMsRUFBRSxZQUFZLGtCQUFrQixFQUFFLFlBQVksb0JBQW9CLEVBQUUsWUFBWSxxQkFBcUIsRUFBRSxZQUFZLG1CQUFtQixFQUFFLFlBQVksb0JBQW9CLG1CQUFtQixFQUFFLFlBQVksa0JBQWtCLHFCQUFxQixFQUFFLFdBQVcsZUFBZSxFQUFFLGFBQWEsbUJBQW1CLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxxQkFBcUIsb0JBQW9CLEVBQUUsYUFBYSxtQkFBbUIsc0JBQXNCLEVBQUUsV0FBVyxlQUFlLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHFCQUFxQixvQkFBb0IsRUFBRSxhQUFhLG1CQUFtQixzQkFBc0IsRUFBRSxXQUFXLGVBQWUsRUFBRSxhQUFhLG1CQUFtQixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEscUJBQXFCLG9CQUFvQixFQUFFLGFBQWEsbUJBQW1CLHNCQUFzQixFQUFFLFdBQVcsZUFBZSxFQUFFLGFBQWEsbUJBQW1CLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxxQkFBcUIsb0JBQW9CLEVBQUUsYUFBYSxtQkFBbUIsc0JBQXNCLEVBQUUsV0FBVyxlQUFlLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHFCQUFxQixvQkFBb0IsRUFBRSxhQUFhLG1CQUFtQixzQkFBc0IsRUFBRSxXQUFXLGVBQWUsRUFBRSxhQUFhLG1CQUFtQixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEscUJBQXFCLG9CQUFvQixFQUFFLGFBQWEsbUJBQW1CLHNCQUFzQixFQUFFLFdBQVcsZUFBZSxFQUFFLGFBQWEsbUJBQW1CLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxxQkFBcUIsb0JBQW9CLEVBQUUsYUFBYSxtQkFBbUIsc0JBQXNCLEVBQUUsV0FBVyxlQUFlLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHFCQUFxQixvQkFBb0IsRUFBRSxhQUFhLG1CQUFtQixzQkFBc0IsRUFBRSxXQUFXLGVBQWUsRUFBRSxhQUFhLG1CQUFtQixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEscUJBQXFCLG9CQUFvQixFQUFFLGFBQWEsbUJBQW1CLHNCQUFzQixFQUFFLFVBQVUsZUFBZSxFQUFFLFlBQVksbUJBQW1CLEVBQUUsWUFBWSxxQkFBcUIsRUFBRSxZQUFZLHNCQUFzQixFQUFFLFlBQVksb0JBQW9CLEVBQUUsWUFBWSxxQkFBcUIsb0JBQW9CLEVBQUUsWUFBWSxtQkFBbUIsc0JBQXNCLEVBQUUsVUFBVSxlQUFlLEVBQUUsWUFBWSxtQkFBbUIsRUFBRSxZQUFZLHFCQUFxQixFQUFFLFlBQVksc0JBQXNCLEVBQUUsWUFBWSxvQkFBb0IsRUFBRSxZQUFZLHFCQUFxQixvQkFBb0IsRUFBRSxZQUFZLG1CQUFtQixzQkFBc0IsRUFBRSxVQUFVLGVBQWUsRUFBRSxZQUFZLG1CQUFtQixFQUFFLFlBQVkscUJBQXFCLEVBQUUsWUFBWSxzQkFBc0IsRUFBRSxZQUFZLG9CQUFvQixFQUFFLFlBQVkscUJBQXFCLG9CQUFvQixFQUFFLFlBQVksbUJBQW1CLHNCQUFzQixFQUFFLFVBQVUsZUFBZSxFQUFFLFlBQVksbUJBQW1CLEVBQUUsWUFBWSxxQkFBcUIsRUFBRSxZQUFZLHNCQUFzQixFQUFFLFlBQVksb0JBQW9CLEVBQUUsWUFBWSxxQkFBcUIsb0JBQW9CLEVBQUUsWUFBWSxtQkFBbUIsc0JBQXNCLEVBQUUsVUFBVSxlQUFlLEVBQUUsWUFBWSxtQkFBbUIsRUFBRSxZQUFZLHFCQUFxQixFQUFFLFlBQVksc0JBQXNCLEVBQUUsWUFBWSxvQkFBb0IsRUFBRSxZQUFZLHFCQUFxQixvQkFBb0IsRUFBRSxZQUFZLG1CQUFtQixzQkFBc0IsRUFBRSxXQUFXLGdCQUFnQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLHVCQUF1QixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IscUJBQXFCLEVBQUUsYUFBYSxvQkFBb0IsdUJBQXVCLEVBQUUsV0FBVyxnQkFBZ0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSx1QkFBdUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLHFCQUFxQixFQUFFLGFBQWEsb0JBQW9CLHVCQUF1QixFQUFFLFdBQVcsZ0JBQWdCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsdUJBQXVCLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixxQkFBcUIsRUFBRSxh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QUdqRztBQUMwRjtBQUMxRixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSxtRkFBTTtBQUNSLEVBQUUsb0dBQU07QUFDUixFQUFFLDZHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxJQUFVO0FBQ2QsWUFBWSxtQkFBTyxDQUFDLGtEQUFnSDtBQUNwSSxjQUFjLG1CQUFPLENBQUMsZ0RBQUs7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNCQUFzQixzRUFBZ0UsRUFBRTtBQUFBO0FBQ3hGO0FBQ0EsZ0JBQWdCLG9HQUFNO0FBQ3RCLHlCQUF5Qiw2R0FBZTtBQUN4QyxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNlLGdGOzs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQTZLLENBQWdCLGlQQUFHLEVBQUMsQzs7Ozs7Ozs7QUNBak07QUFBQTtBQUFBO0FBQUE7QUFBOFksQ0FBZ0IsNmJBQUcsRUFBQyxDOzs7Ozs7OztBQ0FsYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPFBhZ2UgYWN0aW9uQmFySGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwiYW5pbS1wYWdlXCJcclxuICAgICAgICBiYWNrZ3JvdW5kU3BhblVuZGVyU3RhdHVzQmFyPVwidHJ1ZVwiPlxyXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cIm1haW5cIiB2ZXJ0aWNhbEFsaWdubWVudD1cInRvcFwiPlxyXG5cclxuICAgICAgICAgICAgICAgIDwhLS0gQW5pbWFsIENvdmVyIGltYWdlIC0tPlxyXG4gICAgICAgICAgICA8R3JpZExheW91dCBjbGFzcz1cImFuaW0tY292ZXJcIiByb3dzPVwiYXV0b1wiIGNvbHVtbnM9XCIqXCI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugcm93PVwiMFwiIGNvbD1cIjBcIiBtYXJnaW5Ub3A9XCItNDBcIiBoZWlnaHQ9XCIxODBcIiBzdHJldGNoPVwiYXNwZWN0RmlsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjYXJkLWltZ1wiIDpzcmM9XCJpdGVtLmNvdmVyXCIgLz5cclxuICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIwXCIgY29sPVwiMFwiIHZlcnRpY2FsQWxpZ25tZW50PVwidG9wXCJcclxuICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50PVwibGVmdFwiIEB0YXA9XCJjbG9zZVwiIDp0ZXh0PVwiJ2ZhLWFycm93LWxlZnQnIHwgZm9udGljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmEgY2xvc2VcIiBmb250U2l6ZT1cIjI0XCIgLz5cclxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG5cclxuICAgICAgICAgICAgICAgIDwhLS0gQW5pbWFsIGdhbGxlcnkgaW1hZ2VzIC0tPlxyXG4gICAgICAgICAgICA8U2Nyb2xsVmlldyBjbGFzcz1cImFuaW0taW1hZ2VzXCIgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgY2xhc3M9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCB2LWJpbmQ6a2V5PVwiaW1hZ2VcIiB2LWZvcj1cImltYWdlIGluIGl0ZW0uaW1hZ2VzXCIgcm93cz1cImF1dG9cIiBjb2x1bW5zPVwiKlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3M9XCJjYXJkLWltZy10aHVtYlwiIHJvdz1cIjBcIiBjb2w9XCIwXCIgOnNyYz1cImltYWdlLnNyY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJldGNoPVwiYXNwZWN0Rml0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICA8L1Njcm9sbFZpZXc+XHJcblxyXG4gICAgICAgICAgICA8IS0tIEFuaW1hbCBkZXRhaWxzIC0tPlxyXG4gICAgICAgICAgICA8R3JpZExheW91dCByb3dzPVwiYXV0byxhdXRvLGF1dG8sYXV0b1wiIGNvbHVtbnM9XCJhdXRvXCIgY2xhc3M9XCJjb250ZW50XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY2xhc3M9XCJhbmltLWl0ZW1JbmZvXCIgbWFyZ2luVG9wPVwiMTVcIiByb3c9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIiBjb2x1bW5zPVwiYXV0bywqXCIgcm93cz1cImF1dG8sYXV0byxhdXRvLGF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiZ2VuZGVySWNvbiB8IGZvbnRpY29uXCIgcm93PVwiMFwiIGNvbD1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dTcGFuPVwiMlwiIDpiYWNrZ3JvdW5kQ29sb3I9XCJpdGVtLmNhdGVnb3J5VGFnXCIgY2xhc3M9XCJmYSBjYXRlZ29yeS1pY29uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiMFwiIGNvbD1cIjFcIiBjbGFzcz1cIml0ZW0tbmFtZVwiIHRleHR3cmFwPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50PVwiYm90dG9tXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cImxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6dGV4dD1cIml0ZW0ubmFtZVwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIxXCIgY29sPVwiMVwiIGNsYXNzPVwiaXRlbS1jYXRlZ29yeVwiIHRleHR3cmFwPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50PVwidG9wXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cImxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6dGV4dD1cIml0ZW0uY2F0ZWdvcnlcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cclxuXHJcbiAgICAgICAgICAgICAgPCEtLSBzb2NpYWwgYmFyIC0tPlxyXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwibGluZSBhbmltLWxpa2VzXCIgcm93PVwiMlwiIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wPVwiMTBcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNsYXNzPVwiYW5pbS1saWtlc1wiIG1hcmdpblRvcD1cIjVcIiB3aWR0aD1cIjEwMCVcIiByb3c9XCIzXCJcclxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPVwiKixhdXRvLGF1dG9cIiByb3dzPVwiYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbD1cIjBcIiByb3dzPVwiYXV0b1wiIGNvbHVtbnM9XCJhdXRvLGF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cIjBcIiByb3c9XCIwXCIgcmVmPVwiaW5mb1wiIGNsYXNzPVwibGlrZS1pY29uIGZhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp0ZXh0PVwiJ2ZhLWluZm8tY2lyY2xlJyB8IGZvbnRpY29uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cIjFcIiByb3c9XCIwXCIgY2xhc3M9XCJsYXlvdXRcIiA6dGV4dD1cIml0ZW0uYnJlZWRfZ3JvdXAgKyAnIC0gJyArIGl0ZW0ucHJpbWFyeV9icmVlZFwiPjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2w9XCIxXCIgcm93cz1cImF1dG9cIiBjb2x1bW5zPVwiYXV0byxhdXRvXCIgQHRhcD1cInRvZ2dsZUhlYXJ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ9XCIxNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVwiMFwiIHJvdz1cIjBcIiByZWY9XCJmYXZvcml0ZVwiIGNsYXNzPVwibGlrZS1pY29uICBmYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJbaXRlbS5pc0Zhdm9yaXRlID8gJ2hlYXJ0LWFjdGl2ZScgOiAnZGVmYXVsdCddXCIgOnRleHQ9XCJpdGVtLmlzRmF2b3JpdGUgPyAnZmEtaGVhcnQnOidmYS1oZWFydC1vJyB8IGZvbnRpY29uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cIjFcIiByb3c9XCIwXCIgY2xhc3M9XCJsYXlvdXRcIiB0ZXh0PVwiRmF2b3JpdGVcIj48L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNvbD1cIjJcIiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJlZj1cIlwiIGNsYXNzPVwibGlrZS1pY29uIGxheW91dCBmYVwiIDp0ZXh0PVwiJ2ZhLXNoYXJlLXNxdWFyZS1vJyB8IGZvbnRpY29uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwibGF5b3V0XCIgdGV4dD1cIlNoYXJlXCI+PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcblxyXG5cclxuICAgICAgICAgICAgPCEtLSBBbmltYWwgRGVzY3JpcHRpb24gTGFiZWwgKHcvIGljb24pIC0tPlxyXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgd2lkdGg9XCIxMDAlXCIgY2xhc3M9XCJsaW5lQnJlYWsgYW5pbS1saWtlc1wiIC8+XHJcblxyXG4gICAgICAgICAgICA8R3JpZGxheW91dCByb3dzPVwiYXV0bywqXCIgY2xhc3M9XCJjb250ZW50IGFuaW0tY29udGVudFwiIG1hcmdpblRvcD1cIjE1XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgcm93PVwiMFwiIHJvd3M9XCJhdXRvXCIgbWFyZ2luQm90dG9tPVwiNVwiIGNvbHVtbnM9XCJhdXRvLCBhdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cIjBcIiA6dGV4dD1cIidmYS10YWdzJyB8IGZvbnRpY29uXCIgY2xhc3M9XCJmYSBkZXNjcmlwdGlvbi1pY29uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA9XCJ0cnVlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVwiMVwiIGNsYXNzPVwiZGVzY3JpcHRpb24tdGV4dFwiIHRleHQ9XCJEZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwPVwidHJ1ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDwhLS0gQW5pbWFsIERlc2NyaXB0aW9uIC0tPlxyXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cIjFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8U2Nyb2xsVmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cIiosICosICosICosICosICosICosICpcIiBjb2x1bW5zPVwiYXV0bywgKlwiIHZlcnRpY2FsQWxpZ25tZW50PVwidG9wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjBcIiBjb2w9XCIwXCIgY2xhc3M9XCJkZXNjcmlwdGlvbi12YWx1ZVwiIHRleHQ9XCJBdmFpbGFiaWxpdHk6XCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIwXCIgY29sPVwiMVwiICBjbGFzcz1cImZhIGRlc2NyaXB0aW9uLXZhbHVlXCIgOmNsYXNzPVwiaXRlbS5pc0F2YWlsYWJsZT09dHJ1ZT8gJ2lzQXZhaWxhYmxlJzonaXNOb3RBdmFpbGFibGUnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiA6dGV4dD1cIml0ZW0uaXNBdmFpbGFibGU9PXRydWU/ICdBdmFpbGFibGUnOidOb3QgQXZhaWxhYmxlJ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiA6dGV4dD1cIml0ZW0uaXNBdmFpbGFibGU9PXRydWU/ICdmYS1jaGVjayc6J2ZhLXRpbWVzJyB8IGZvbnRpY29uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjFcIiBjb2w9XCIwXCIgY2xhc3M9XCJkZXNjcmlwdGlvbi12YWx1ZVwiIHRleHQ9XCJMb2NhdGlvbjpcIiAvPiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjFcIiBjb2w9XCIxXCIgY2xhc3M9XCJkZXNjcmlwdGlvbi12YWx1ZVwiIDp0ZXh0PVwiaXRlbS5sb2NhdGlvblwiIC8+IFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjJcIiBjb2w9XCIwXCIgY2xhc3M9XCJkZXNjcmlwdGlvbi12YWx1ZVwiIHRleHQ9XCJBZ2U6XCIgLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIyXCIgY29sPVwiMVwiIGNsYXNzPVwiZGVzY3JpcHRpb24tdmFsdWVcIiA6dGV4dD1cIml0ZW0uYWdlXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIzXCIgY29sPVwiMFwiIGNsYXNzPVwiZGVzY3JpcHRpb24tdmFsdWVcIiB0ZXh0PVwiR2VuZGVyOiBcIiAvPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjNcIiBjb2w9XCIxXCIgY2xhc3M9XCJkZXNjcmlwdGlvbi12YWx1ZVwiIDp0ZXh0PVwiaXRlbS5nZW5kZXJcIiAvPiAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiNFwiIGNvbD1cIjBcIiBjbGFzcz1cImRlc2NyaXB0aW9uLXZhbHVlXCIgdGV4dD1cIkJyZWVkIEdyb3VwOlwiIC8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiNFwiIGNvbD1cIjFcIiBjbGFzcz1cImRlc2NyaXB0aW9uLXZhbHVlXCIgOnRleHQ9XCJpdGVtLmJyZWVkX2dyb3VwXCIgLz4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiNVwiIGNvbD1cIjBcIiBjbGFzcz1cImRlc2NyaXB0aW9uLXZhbHVlXCIgdGV4dD1cIlByaW1hcnkgQnJlZWQ6XCIgLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCI1XCIgY29sPVwiMVwiIGNsYXNzPVwiZGVzY3JpcHRpb24tdmFsdWVcIiA6dGV4dD1cIml0ZW0ucHJpbWFyeV9icmVlZFwiIC8+ICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjZcIiBjb2w9XCIwXCIgY2xhc3M9XCJkZXNjcmlwdGlvbi12YWx1ZVwiIHRleHQ9XCJBbmltYWwgU2l6ZTpcIiAvPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCI2XCIgY29sPVwiMVwiIGNsYXNzPVwiZGVzY3JpcHRpb24tdmFsdWVcIiA6dGV4dD1cIml0ZW0uYW5pbWFsX3NpemVcIiAvPiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjdcIiBjb2w9XCIwXCIgY2xhc3M9XCJkZXNjcmlwdGlvbi12YWx1ZVwiIHRleHQ9XCJQcmltYXJ5IENvbG9yOlwiIC8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiN1wiIGNvbD1cIjFcIiBjbGFzcz1cImRlc2NyaXB0aW9uLXZhbHVlXCIgOnRleHQ9XCJpdGVtLnByaW1hcnlfY29sb3JcIiAvPiAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cclxuICAgICAgICAgICAgICAgICAgICA8L1Njcm9sbFZpZXc+XHJcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG5cclxuXHJcbiAgICAgICAgICAgIDwvR3JpZGxheW91dD5cclxuXHJcbiAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgIDwvUGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBwcm9wczogW1wiaXRlbVwiXSxcclxuICBjb21wb25lbnRzOiB7fSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgZ2VuZGVySWNvbigpIHtcclxuICAgICAgc3dpdGNoICh0aGlzLml0ZW0uZ2VuZGVyKSB7XHJcbiAgICAgICAgY2FzZSBcIk1cIjpcclxuICAgICAgICAgIHRoaXMuaXRlbS5jYXRlZ29yeVRhZyA9IFwiIzAwOTlmZlwiO1xyXG4gICAgICAgICAgcmV0dXJuIFwiZmEtbWFyc1wiO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIkZcIjpcclxuICAgICAgICAgIHRoaXMuaXRlbS5jYXRlZ29yeVRhZyA9IFwiI2ZmY2NmZlwiO1xyXG4gICAgICAgICAgcmV0dXJuIFwiZmEtdmVudXNcIjtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICByZXR1cm4gXCJmYS1maXJlXCI7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY3JlYXRlZCgpIHtcclxuICAgIHRoaXMuaW1hZ2VzID0gW1xyXG4gICAgICB7XHJcbiAgICAgICAgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL3BhbmNha2U2NDAuanBnXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9wYW5jYWtlNjQwLmpwZ1wiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvcGFuY2FrZTY0MC5qcGdcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL3BhbmNha2U2NDAuanBnXCJcclxuICAgICAgfVxyXG4gICAgXTtcclxuICAgIC8vIHRoaXMuaXNMaWtlID0gdGhpcy5pdGVtLmlzTGlrZTtcclxuICAgIC8vIHRoaXMuaXNIZWFydCA9IHRoaXMuaXRlbS5pc0Zhdm9yaXRlO1xyXG4gIH0sXHJcbiAgbW91bnRlZCgpIHt9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIC8vIG5hdmlnYXRlQmFja1xyXG4gICAgY2xvc2UoKSB7XHJcbiAgICAgIHRoaXMuJG5hdmlnYXRlQmFjaygpO1xyXG4gICAgfSxcclxuICAgIC8vIEFuaW1hdGUgJ0Zhdm9yaXRlJyBpY29uXHJcbiAgICBhbmltYXRlRmF2b3JpdGUoKSB7XHJcbiAgICAgIGxldCBpbWdMb2dvID0gdGhpcy4kcmVmcy5mYXZvcml0ZS5uYXRpdmVWaWV3O1xyXG4gICAgICBpbWdMb2dvXHJcbiAgICAgICAgLmFuaW1hdGUoe1xyXG4gICAgICAgICAgc2NhbGU6IHtcclxuICAgICAgICAgICAgeDogMC42LFxyXG4gICAgICAgICAgICB5OiAwLjZcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBkdXJhdGlvbjogNTAsXHJcbiAgICAgICAgICBkZWxheTogMFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICByZXR1cm4gaW1nTG9nby5hbmltYXRlKHtcclxuICAgICAgICAgICAgc2NhbGU6IHtcclxuICAgICAgICAgICAgICB4OiAxLjIsXHJcbiAgICAgICAgICAgICAgeTogMS4yLFxyXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiA1MFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgcmV0dXJuIGltZ0xvZ28uYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHNjYWxlOiB7XHJcbiAgICAgICAgICAgICAgeDogMSxcclxuICAgICAgICAgICAgICB5OiAxLFxyXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihmdW5jdGlvbigpIHt9KTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGVIZWFydCgpIHtcclxuICAgICAgLy8gdG9nZ2xlIGlzRmF2b3JpdGVcclxuICAgICAgdGhpcy5hbmltYXRlRmF2b3JpdGUoKTtcclxuICAgICAgdGhpcy5pdGVtLmlzRmF2b3JpdGUgPSAhdGhpcy5pdGVtLmlzRmF2b3JpdGU7XHJcbiAgICB9XHJcbiAgfSxcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaW1hZ2VzOiBudWxsLFxyXG4gICAgICBpc0hlYXJ0OiBmYWxzZVxyXG4gICAgfTtcclxuICB9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG48c3R5bGUgc2NvcGVkPlxyXG4vKiBDU1MgKi9cclxuLmNsb3NlIHtcclxuICBmb250LXNpemU6IDIwO1xyXG4gIGNvbG9yOiByZ2IoMjI2LCAyMjksIDIyOSk7XHJcbiAgbWFyZ2luOiAxNSAwIDAgMTU7XHJcbn1cclxuXHJcblRleHRWaWV3IHtcclxuICBib3JkZXItd2lkdGg6IDE7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24tdGV4dCB7XHJcbiAgZm9udC1zaXplOiAxNDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbi1pY29uIHtcclxuICBmb250LXNpemU6IDE2O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjM2U5ZWRiO1xyXG4gIG1hcmdpbi1yaWdodDogODtcclxuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24tdmFsdWUge1xyXG4gIGZvbnQtc2l6ZTogMTQ7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIG1hcmdpbjogODtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uLXZhbHVlLmlzQXZhaWxhYmxlIHtcclxuICBjb2xvcjogZ3JlZW47XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uLXZhbHVlLmlzTm90QXZhaWxhYmxlIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkXHJcbn1cclxuXHJcbi5yYXRlIHtcclxuICBwYWRkaW5nLXRvcDogMztcclxuICBtYXJnaW46IDA7XHJcbiAgY29sb3I6ICNmZmU5MDA7XHJcbiAgZm9udC1zaXplOiAxODtcclxufVxyXG5cclxuLnJhdGluZy12YWx1ZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDU7XHJcbn1cclxuXHJcbi5saWtlZC1hY3RpdmUge1xyXG4gIGNvbG9yOiAjNDA4MGZmO1xyXG59XHJcblxyXG4uaGVhcnQtYWN0aXZlIHtcclxuICBjb2xvcjogI2I1MTIxMztcclxufVxyXG5cclxuLmRlZmF1bHQge1xyXG4gIGNvbG9yOiAjODI4MjgyO1xyXG59XHJcblxyXG4ubGF5b3V0IHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gIGNvbG9yOiAjODI4MjgyO1xyXG4gIGZvbnQtc2l6ZTogMTQ7XHJcbiAgaGVpZ2h0OiAzMDtcclxuICBwYWRkaW5nOiA1IDAgNSAwO1xyXG59XHJcblxyXG4ubGlrZS1pY29uIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gIGhlaWdodDogMzA7XHJcbiAgZm9udC1zaXplOiAxNjtcclxuICBtYXJnaW4tcmlnaHQ6IDI7XHJcbiAgcGFkZGluZzogNSA1IDUgNTtcclxufVxyXG5cclxuLml0ZW0tbmFtZSB7XHJcbiAgZm9udC1zaXplOiAxNDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLml0ZW0tY2F0ZWdvcnkge1xyXG4gIGZvbnQtc2l6ZTogMTQ7XHJcbiAgY29sb3I6ICM4MjgyODI7XHJcbn1cclxuXHJcbi5jYXRlZ29yeS1pY29uIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyNTtcclxuICBib3JkZXItd2lkdGg6IDE7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBtYXJnaW4tdG9wOiA0O1xyXG4gIG1hcmdpbi1yaWdodDogMTU7XHJcbiAgd2lkdGg6IDQwO1xyXG4gIGhlaWdodDogNDA7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBtYXJnaW4tbGVmdDogMTY7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNjtcclxuICBtYXJnaW4tYm90dG9tOiAzO1xyXG4gIC8qIG1hcmdpbi10b3A6IDE2OyAqL1xyXG59XHJcblxyXG4uY2FyZC1pbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjUwO1xyXG4gIG1hcmdpbi1ib3R0b206IDU7XHJcbn1cclxuXHJcbi5jYXJkLWltZy10aHVtYiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgMjMwLCAyMzApO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNTtcclxuICB3aWR0aDogMTMwO1xyXG4gIGhlaWdodDogNzA7XHJcbiAgbWFyZ2luLWxlZnQ6IDU7XHJcbn1cclxuXHJcbi5saW5lIHtcclxuICBoZWlnaHQ6IDAuNTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6ICNlMGUwZTA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcclxufVxyXG5cclxuLmxpbmVCcmVhayB7XHJcbiAgaGVpZ2h0OiAwLjU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiAjZTBlMGUwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XHJcbn1cclxuXHJcblxyXG4vKiBBbmltYXRpb25zICovXHJcbi5hbmltLXBhZ2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGQ2ZDg7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGtleS1wYWdlO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMjtcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGtleS1wYWdlIHtcclxuICAwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkYWRhO1xyXG4gIH1cclxuXHJcbiAgMjAlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYmQyZDU7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIH1cclxufVxyXG5cclxuLmFuaW0tY292ZXIge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGtleS1jb3ZlcjtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDE7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjU7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBrZXktY292ZXIge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA1NTApIHNjYWxlKDAsIDApO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XHJcbiAgfVxyXG5cclxuICAzMCUge1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDEsIDEpO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XHJcbiAgfVxyXG59XHJcblxyXG4uYW5pbS1pbWFnZXMge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGtleS1pbWFnZXM7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMC43O1xyXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XHJcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMga2V5LWltYWdlcyB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDU1MCkgc2NhbGUoMCwgMCk7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcclxuICB9XHJcblxyXG4gIDMwJSB7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSwgMSk7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcclxuICB9XHJcbn1cclxuXHJcbi5hbmltLWl0ZW1JbmZvIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBrZXktaXRlbUluZm87XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMS4yO1xyXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XHJcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMga2V5LWl0ZW1JbmZvIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAsIDUwKTtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcclxuICB9XHJcbn1cclxuXHJcbi5hbmltLWxpa2VzIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBrZXktbGlrZXM7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMS41O1xyXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XHJcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMga2V5LWxpa2VzIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAsIDUwKTtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcclxuICB9XHJcbn1cclxuXHJcbi5hbmltLWNvbnRlbnQge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGtleS1jb250ZW50O1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTtcclxuICBhbmltYXRpb24tZGVsYXk6IDEuODtcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGtleS1jb250ZW50IHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAsIDUwKTtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcclxuICB9XHJcbn1cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJtYWluXCI+XHJcblxyXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImNvbnRlbnRcIj5cclxuXHJcbiAgICAgICAgICAgIDxJbWFnZSBzdHJldGNoPVwiYXNwZWN0Rml0XCIgY2xhc3M9XCJjYXJkLWltZ1wiIEB0YXA9XCJvbkNsaWNrQnV0dG9uKClcIlxyXG4gICAgICAgICAgICAgICAgOnNyYz1cIml0ZW0uY292ZXJcIiAvPlxyXG4gICAgICAgICAgICA8R3JpZExheW91dCB3aWR0aD1cIjEwMCVcIiBjb2x1bW5zPVwiYXV0bywqXCIgcm93cz1cImF1dG8sYXV0b1wiIGNsYXNzPVwiXCJcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgQHRhcD1cIm9uQ2xpY2tCdXR0b24oKVwiPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8IS0tIEdlbmRlciAtLT5cclxuICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cImNhdGVnb3J5SWNvbiB8IGZvbnRpY29uXCIgcm93PVwiMFwiIGNvbD1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJvd1NwYW49XCIyXCIgOmJhY2tncm91bmRDb2xvcj1cIml0ZW0uY2F0ZWdvcnlUYWdcIiBjbGFzcz1cImZhIGNhdGVnb3J5LWljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS1OYW1lLCBhZ2UgLS0+ICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjBcIiBjb2w9XCIxXCIgY2xhc3M9XCJmYSBpdGVtLW5hbWVcIiB0ZXh0d3JhcD1cInRydWVcIiB2ZXJ0aWNhbEFsaWdubWVudD0gXCJjZW50ZXJcIiBob3Jpem9udGFsQWxpZ25tZW50PVwibGVmdFwiIDp0ZXh0PVwiaXRlbS5uYW1lICsgJywgJyArIGl0ZW0uYWdlXCIgIC8+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IHJvdz1cIjFcIiBjb2w9XCIxXCIgcm93cz1cImF1dG9cIiBjb2x1bW5zPVwiYXV0byxhdXRvLGF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiMFwiIGNvbD1cIjBcIiBjbGFzcz1cIml0ZW0tY2F0ZWdvcnlcIiB0ZXh0d3JhcD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudD1cImJvdHRvbVwiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJsZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOnRleHQ9XCJpdGVtLmNhdGVnb3J5XCIgLz5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxTdGFja0xheW91dCB3aWR0aD1cIjEwMCVcIiBtYXJnaW5Ub3A9XCI1XCIgY2xhc3M9XCJsaW5lXCIgLz5cclxuXHJcbiAgICAgICAgICAgIDwhLS0gQlVHOiBwcm9ibGVtIHdpdGggc2Nyb2xsIHRyYW5zaXN0aW9uIG9uIGlvcyBlbXVsYXRvciAtLT5cclxuICAgICAgICAgICAgPCEtLSA8SXRlbUxpa2UgOml0ZW09XCJpdGVtXCI+PC9JdGVtTGlrZT4gLS0+XHJcblxyXG4gICAgICAgICAgICA8R3JpZExheW91dCBjbGFzcz1cIlwiIG1hcmdpblRvcD1cIjVcIiB3aWR0aD1cIjEwMCVcIiByb3c9XCIzXCJcclxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPVwiKiwgYXV0bywgYXV0b1wiIHJvd3M9XCJhdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sPVwiMFwiIHJvd3M9XCJhdXRvXCIgY29sdW1ucz1cImF1dG8sYXV0b1wiIEB0YXA9XCJvbkNsaWNrQnV0dG9uKClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cIjBcIiByb3c9XCIwXCIgcmVmPVwiaW5mb1wiIGNsYXNzPVwibGlrZS1pY29uIGZhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp0ZXh0PVwiJ2ZhLWluZm8tY2lyY2xlJyB8IGZvbnRpY29uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cIjFcIiByb3c9XCIwXCIgY2xhc3M9XCJsYXlvdXRcIiA6dGV4dD1cIml0ZW0uYnJlZWRfZ3JvdXAgKyAnIC0gJyArIGl0ZW0ucHJpbWFyeV9icmVlZFwiPjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbD1cIjFcIiByb3dzPVwiYXV0b1wiIGNvbHVtbnM9XCJhdXRvLGF1dG9cIiBAdGFwPVwidG9nZ2xlSGVhcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodD1cIjE1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XCIwXCIgcm93PVwiMFwiIHJlZj1cImZhdm9yaXRlXCIgY2xhc3M9XCJsaWtlLWljb24gIGZhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIltpdGVtLmlzRmF2b3JpdGUgPyAnaGVhcnQtYWN0aXZlJyA6ICdkZWZhdWx0J11cIiA6dGV4dD1cIml0ZW0uaXNGYXZvcml0ZSA/ICdmYS1oZWFydCc6J2ZhLWhlYXJ0LW8nIHwgZm9udGljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVwiMVwiIHJvdz1cIjBcIiBjbGFzcz1cImxheW91dFwiIHRleHQ9XCJGYXZvcml0ZVwiPjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjb2w9XCIyXCIgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCByZWY9XCJcIiBjbGFzcz1cImxpa2UtaWNvbiBsYXlvdXQgZmFcIiA6dGV4dD1cIidmYS1zaGFyZS1zcXVhcmUtbycgfCBmb250aWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImxheW91dFwiIHRleHQ9XCJTaGFyZVwiPjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cclxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG5cclxuICAgICAgICA8U3RhY2tMYXlvdXQgd2lkdGg9XCIxMDAlXCIgY2xhc3M9XCJsaW5lQnJlYWtcIiAvPlxyXG5cclxuICAgIDwvU3RhY2tMYXlvdXQ+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4vLyBpbXBvcnQgSXRlbUxpa2UgZnJvbSBcIi4vaXRlbUxpa2VcIjtcclxuaW1wb3J0IHsgaXNJT1MsIGlzQW5kcm9pZCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBwcm9wczogW1wiaXRlbVwiXSxcclxuICBjb21wb25lbnRzOiB7XHJcbiAgICAvLyBJdGVtTGlrZVxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIGNhdGVnb3J5SWNvbigpIHtcclxuICAgICAgc3dpdGNoICh0aGlzLml0ZW0uZ2VuZGVyKSB7XHJcbiAgICAgICAgY2FzZSBcIk1cIjpcclxuICAgICAgICAgIHRoaXMuaXRlbS5jYXRlZ29yeVRhZyA9IFwiIzAwOTlmZlwiXHJcbiAgICAgICAgICByZXR1cm4gXCJmYS1tYXJzXCI7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiRlwiOlxyXG4gICAgICAgICAgdGhpcy5pdGVtLmNhdGVnb3J5VGFnID0gXCIjZmZjY2ZmXCJcclxuICAgICAgICAgIHJldHVybiBcImZhLXZlbnVzXCI7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgcmV0dXJuIFwiZmEtZmlyZVwiO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGNyZWF0ZWQoKSB7XHJcbiAgICAvLyB0aGlzLmlzTGlrZSA9ICB0aGlzLml0ZW0uaXNMaWtlXHJcbiAgICAvLyB0aGlzLmlzSGVhcnQgPSAgdGhpcy5pdGVtLmlzRmF2b3JpdGVcclxuICB9LFxyXG4gIG1vdW50ZWQoKSB7fSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBhbmltYXRlRmF2b3JpdGUoKSB7XHJcbiAgICAgIGlmIChpc0lPUykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBsZXQgaW1nTG9nbyA9IHRoaXMuJHJlZnMuZmF2b3JpdGUubmF0aXZlVmlldztcclxuICAgICAgaW1nTG9nb1xyXG4gICAgICAgIC5hbmltYXRlKHtcclxuICAgICAgICAgIHNjYWxlOiB7XHJcbiAgICAgICAgICAgIHg6IDAuNixcclxuICAgICAgICAgICAgeTogMC42XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZHVyYXRpb246IDUwLFxyXG4gICAgICAgICAgZGVsYXk6IDBcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgcmV0dXJuIGltZ0xvZ28uYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHNjYWxlOiB7XHJcbiAgICAgICAgICAgICAgeDogMS4yLFxyXG4gICAgICAgICAgICAgIHk6IDEuMixcclxuICAgICAgICAgICAgICBkdXJhdGlvbjogNTBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHJldHVybiBpbWdMb2dvLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBzY2FsZToge1xyXG4gICAgICAgICAgICAgIHg6IDEsXHJcbiAgICAgICAgICAgICAgeTogMSxcclxuICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7fSk7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlSGVhcnQoKSB7XHJcbiAgICAgIHRoaXMuYW5pbWF0ZUZhdm9yaXRlKCk7XHJcbiAgICAgIHRoaXMuaXRlbS5pc0Zhdm9yaXRlID0gIXRoaXMuaXRlbS5pc0Zhdm9yaXRlO1xyXG4gICAgfSxcclxuICAgIG9uQ2xpY2tCdXR0b24oKSB7XHJcbiAgICAgIHRoaXMuJGVtaXQoXCJjbGlja2VkXCIsIHRoaXMuaXRlbSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaXNMaWtlOiBmYWxzZSxcclxuICAgICAgaXNIZWFydDogZmFsc2VcclxuICAgIH07XHJcbiAgfVxyXG59O1xyXG48L3NjcmlwdD5cclxuPHN0eWxlIHNjb3BlZD5cclxuLml0ZW0tY2F0ZWdvcnkge1xyXG4gIGZvbnQtc2l6ZTogMTQ7XHJcbiAgY29sb3I6ICM4MjgyODI7XHJcbn1cclxuXHJcbi5nZW5kZXItaWNvbiB7XHJcbiAgcGFkZGluZy10b3A6IDM7XHJcbiAgcGFkZGluZy1yaWdodDogMztcclxuICBmb250LXNpemU6IDE2O1xyXG4gIG1hcmdpbi1yaWdodDogMTA7XHJcbn1cclxuXHJcbi5pbmZvLWljb24ge1xyXG4gIHBhZGRpbmctdG9wOiAzO1xyXG4gIHBhZGRpbmctbGVmdDogMztcclxuICBjb2xvcjogZ3JheTtcclxuICBmb250LXNpemU6IDE0O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMDtcclxufVxyXG5cclxuLnJhdGluZy12YWx1ZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDU7XHJcbn1cclxuXHJcbi5saWtlZC1hY3RpdmUge1xyXG4gIGNvbG9yOiAjNDA4MGZmO1xyXG59XHJcblxyXG4uaGVhcnQtYWN0aXZlIHtcclxuICBjb2xvcjogI2I1MTIxMztcclxufVxyXG5cclxuLmRlZmF1bHQge1xyXG4gIGNvbG9yOiAjODI4MjgyO1xyXG59XHJcblxyXG5cclxuLmxheW91dCB7XHJcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICBjb2xvcjogIzgyODI4MjtcclxuICBmb250LXNpemU6IDE0O1xyXG4gIGhlaWdodDogMzA7XHJcbiAgcGFkZGluZzogNSAwIDUgMDtcclxufVxyXG5cclxuLmxpa2UtaWNvbiB7XHJcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICBoZWlnaHQ6IDMwO1xyXG4gIGZvbnQtc2l6ZTogMTY7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyO1xyXG4gIHBhZGRpbmc6IDUgNSA1IDU7XHJcbn1cclxuXHJcbi5pdGVtLW5hbWUge1xyXG4gIGZvbnQtc2l6ZTogMTQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDI7XHJcbn1cclxuXHJcbi5pdGVtLWNhdGVnb3J5IHtcclxuICBmb250LXNpemU6IDE0O1xyXG4gIGNvbG9yOiAjODI4MjgyO1xyXG59XHJcblxyXG4uY2F0ZWdvcnktaWNvbiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiA1O1xyXG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDI1O1xyXG4gIGJvcmRlci13aWR0aDogMTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgbWFyZ2luLXRvcDogNDtcclxuICBtYXJnaW4tcmlnaHQ6IDE1O1xyXG4gIHdpZHRoOiA0MDtcclxuICBoZWlnaHQ6IDQwO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE2O1xyXG4gIG1hcmdpbi1yaWdodDogMTY7XHJcbiAgbWFyZ2luLWJvdHRvbTogMztcclxuICBtYXJnaW4tdG9wOiAxNjtcclxufVxyXG5cclxuLmNhcmQtaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDE1MDtcclxuICBtYXJnaW4tYm90dG9tOiA1O1xyXG59XHJcblxyXG4ubGluZSB7XHJcbiAgaGVpZ2h0OiAwLjU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiAjZTBlMGUwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XHJcbn1cclxuXHJcbi5saW5lQnJlYWsge1xyXG4gIGhlaWdodDogNztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6ICNlMGUwZTA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcclxufVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuXHJcbiAgICA8R3JpZExheW91dCByb3dzPVwiKlwiIGNvbHVtbnM9XCIqXCI+XHJcbiAgICAgICAgPEltYWdlIGhlaWdodD1cIjE1MFwiIHdpZHRoPVwiMTAwJVwiIG1hcmdpbkJvdHRvbT1cIjEwXCIgc3RyZXRjaD1cImFzcGVjdEZpbGxcIlxyXG4gICAgICAgICAgICA6c3JjPVwiaXRlbS5jb3ZlclwiIC8+IC8+XHJcbiAgICAgICAgPEdyaWRMYXlvdXQgdmVydGljYWxBbGlnbm1lbnQ9XCJib3R0b21cIj5cclxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiYmFubmVyMlwiIGJhY2tncm91bmRDb2xvcj1cIiM0ODllOWU5ZVwiPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiaXRlbS5jYXRlZ29yeSArICcgKCcgKyAgaXRlbS5jb3VudCAgKyAgJyknXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNhdGVnb3J5LW5hbWUgIG0tYi0xMCBtLXQtMTBcIiB0ZXh0d3JhcD1cInRydWVcIj48L0xhYmVsPlxyXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgIDwvR3JpZExheW91dD5cclxuICAgIDwvR3JpZExheW91dD5cclxuXHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgcHJvcHM6IFtcIml0ZW1cIl0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBvbkNsaWNrQnV0dG9uKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoXCJjbGlja2VkXCIsIGRhdGEuaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge307XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuPC9zY3JpcHQ+XHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgICAuZGVmYXVsdC1pbWcge1xyXG4gICAgICAgIGNvbG9yOiAjZDFjZWNlNWI7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhdGVnb3J5LW5hbWUge1xyXG4gICAgICAgIGNvbG9yOiAjZjdmN2Y3O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiA1IDAgMTUgMFxyXG4gICAgfVxyXG5cclxuICAgIC5iYW5uZXIge1xyXG4gICAgICAgIGNvbG9yOiAjYmRiZGJkO1xyXG4gICAgICAgIG9wYWNpdHk6IC4zO1xyXG4gICAgfVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuPFN0YWNrTGF5b3V0PlxyXG4gIDxJbWFnZSB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiIDpzcmM9XCJzcmNcIiBzdHJldGNoPVwiYXNwZWN0Rml0XCIgaGVpZ2h0PVwiMTEwXCIgaW9zOmhlaWdodD1cIjEyMFwiIGNsYXNzPVwiaW1hZ2VcIiBAdGFwPVwiYWN0aW9uXCIgLz5cclxuICA8QnV0dG9uIHZlcnRpY2FsQWxpZ25tZW50PVwiYm90dG9tXCIgY2xhc3M9XCJidXR0b25cIiA6dGV4dD1cImAke2ljb259ICR7dGl0bGV9YFwiIEB0YXA9XCJhY3Rpb25cIiAvPlxyXG48L1N0YWNrTGF5b3V0PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBpY29uOiBTdHJpbmcsXHJcbiAgICAgIHRpdGxlOiBTdHJpbmcsXHJcbiAgICAgIGFjdGlvbjogRnVuY3Rpb24sXHJcbiAgICAgIHNyYzogU3RyaW5nXHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblxyXG4vKiBidXR0b24gb24gYW5kcm9pZCBpcyBzdHlsZWQgd2l0aCBkZWZhdWx0IHNldHRpbmcgd2hlbiBib3JkZXIgcmFkaXVzIGlzIG9taXR0ZWQqL1xyXG4uYnV0dG9ue1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1JTtcclxufVxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcbjxTdGFja0xheW91dD5cclxuICA8QnV0dG9uIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgY2xhc3M9XCJidXR0b25cIiA6dGV4dD1cImAke3RpdGxlfSAke2ljb259IGBcIiBAdGFwPVwiYWN0aW9uXCIgLz5cclxuPC9TdGFja0xheW91dD5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgaWNvbjogU3RyaW5nLFxyXG4gICAgICB0aXRsZTogU3RyaW5nLFxyXG4gICAgICBhY3Rpb246IEZ1bmN0aW9uLFxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cclxuLyogYnV0dG9uIG9uIGFuZHJvaWQgaXMgc3R5bGVkIHdpdGggZGVmYXVsdCBzZXR0aW5nIHdoZW4gYm9yZGVyIHJhZGl1cyBpcyBvbWl0dGVkKi9cclxuLmJ1dHRvbntcclxuICBib3JkZXItcmFkaXVzOiAyNSU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxQYWdlIGNsYXNzPVwicGFnZVwiPlxyXG4gICAgICAgIDxBY3Rpb25CYXIgY2xhc3M9XCJhY3Rpb24tYmFyXCI+XHJcbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uIEB0YXA9XCIkbmF2aWdhdGVCYWNrKClcIiBhbmRyb2lkLnN5c3RlbUljb249XCJpY19tZW51X2JhY2tcIiAvPlxyXG4gICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJhY3Rpb24tYmFyLXRpdGxlXCIgOnRleHQ9XCJBbmltYWxDZW50ZXIubmFtZVwiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiAvPj5cclxuICAgICAgICA8L0FjdGlvbkJhcj5cclxuXHJcbiAgICAgICAgPFNjcm9sbFZpZXc+XHJcbiAgICAgICAgICAgIDxTdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgIDwhLS0gQW5pbWFsIENlbnRlciBjb3ZlciBwaWMgLS0+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2UgOnNyYz1cIkFuaW1hbENlbnRlci5pbWFnZVVSTFwiIHN0cmV0Y2g9XCJhc3BlY3RGaXRcIiBoZWlnaHQ9XCIyMDBcIiBjbGFzcz1cImFuaW0tY292ZXIgbS1iLTE1XCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiMVwiIGNsYXNzPVwiaHItbGlnaHQgbS10LTE1IG0tYi0xNVwiLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCByb3dzPVwiKiwgKiwgKiwgYXV0b1wiIGNvbHVtbnM9XCJhdXRvLCpcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBuYW1lIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSByb3c9XCIwXCIgY29sPVwiMFwiIGNsYXNzPVwiYW5pbS1jb250ZW50MSBwLWwtMTUgcC1iLTEwIG0tci0yMFwiIHNyYz1cIn4vYXNzZXRzL2ltYWdlcy9hY2hvdXNlLnBuZ1wiIHN0cmV0Y2g9XCJhc3BlY3RGaXRcIiBoZWlnaHQ9XCI0MFwiIHdpZHRoPVwiNDBcIiBsb2FkTW9kZT1cImFzeW5jXCIgbWFyZ2luPVwiM1wiLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiMFwiIGNvbD1cIjFcIiAgY2xhc3M9XCJhbmltLWNvbnRlbnQxIHRleHQgcC1iLTEwIGZvbnQtd2VpZ2h0LWJvbGQgdGl0bGUgc3RhY2tcIiBtYXJnaW49XCI1XCIgdGV4dFdyYXA9XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiA6dGV4dD1cIkFuaW1hbENlbnRlci5uYW1lICsgJyBBbmltYWwgQ2FyZSBDZW50ZXInXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gYWRkcmVzcyAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugcm93PVwiMVwiIGNvbD1cIjBcIiBjbGFzcz1cImFuaW0tY29udGVudDIgcC1sLTE1IHAtYi0xMCBtLXItMjBcIiAgc3JjPVwifi9hc3NldHMvaW1hZ2VzL2xvY2F0aW9uaWNvbi5wbmdcIiBzdHJldGNoPVwiYXNwZWN0Rml0XCIgaGVpZ2h0PVwiNDBcIiB3aWR0aD1cIjQwXCIgbG9hZE1vZGU9XCJhc3luY1wiIG1hcmdpbj1cIjNcIi8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIxXCIgY29sPVwiMVwiIGNsYXNzPVwiYW5pbS1jb250ZW50MiBwLWItMTAgc3RhY2tcIiBtYXJnaW49XCI1XCIgQHRhcD1cIm9uQWRkcmVzc1RhcFwiIHRleHRXcmFwPVwidHJ1ZVwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuICBjbGFzcz1cImZhIHRleHQtcHJpbWFyeVwiIDp0ZXh0PVwiQW5pbWFsQ2VudGVyLmFkZHJlc3NcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gcGhvbmUgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHJvdz1cIjJcIiBjb2w9XCIwXCIgY2xhc3M9XCJhbmltLWNvbnRlbnQzIHAtbC0xNSBwLWItMTAgbS1yLTIwXCIgIHNyYz1cIn4vYXNzZXRzL2ltYWdlcy9waG9uZWljb24ucG5nXCIgc3RyZXRjaD1cImFzcGVjdEZpdFwiIGhlaWdodD1cIjQwXCIgd2lkdGg9XCI0MFwiIGxvYWRNb2RlPVwiYXN5bmNcIiBtYXJnaW49XCIzXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIyXCIgY29sPVwiMVwiIGNsYXNzPVwiYW5pbS1jb250ZW50MyBmYSB0ZXh0LXByaW1hcnkgcC1iLTEwIHN0YWNrXCIgOnRleHQ9XCJBbmltYWxDZW50ZXIucGhvbmVcIiBAdGFwPVwib25QaG9uZVRhcFwiIG1hcmdpbj1cIjVcIiAgLz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8IS0tIGhvdXJzIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSByb3c9XCIzXCIgY29sPVwiMFwiIGNsYXNzPVwiYW5pbS1jb250ZW50NCBwLWwtMTUgcC1iLTEwIG0tci0yMFwiIHNyYz1cIn4vYXNzZXRzL2ltYWdlcy9ob3Vyc2ljb24ucG5nXCIgc3RyZXRjaD1cImFzcGVjdEZpdFwiIGhlaWdodD1cIjQwXCIgd2lkdGg9XCI0MFwiIGxvYWRNb2RlPVwiYXN5bmNcIiBtYXJnaW49XCIzXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IHJvdz1cIjNcIiBjb2w9XCIxXCIgY29sdW1ucz1cIiosICpcIiByb3dzPVwiYXV0bywgYXV0b1wiIGNsYXNzPVwiYW5pbS1jb250ZW50NCBzdGFjay1ob3Vyc1wiICBtYXJnaW49XCI1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIwXCIgY29sPVwiMFwiIGNsYXNzPVwiaG91cnNcIiA6dGV4dD1cIkFuaW1hbENlbnRlci5hdmFpbGFiaWxpdHkud2Vla2RheVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIwXCIgY29sPVwiMVwiIGNsYXNzPVwiaG91cnNcIiA6dGV4dD1cIkFuaW1hbENlbnRlci5hdmFpbGFiaWxpdHkud2Vla2RheWhvdXJzXCIgIHRleHRXcmFwPVwidHJ1ZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjFcIiBjb2w9XCIwXCIgY2xhc3M9XCJob3Vyc1wiIDp0ZXh0PVwiQW5pbWFsQ2VudGVyLmF2YWlsYWJpbGl0eS53ZWVrZW5kXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjFcIiBjb2w9XCIxXCIgY2xhc3M9XCJob3Vyc1wiIDp0ZXh0PVwiQW5pbWFsQ2VudGVyLmF2YWlsYWJpbGl0eS53ZWVrZW5kaG91cnNcIiAgdGV4dFdyYXA9XCJ0cnVlXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cclxuXHJcbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgPC9TY3JvbGxWaWV3PlxyXG4gICAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuLy8gLS0tcGx1Z2lucy0tLVxyXG4vLyBwaG9uZVxyXG52YXIgcGhvbmUgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBob25lXCIpO1xyXG5cclxuLy8gZGlyZWN0aW9uc1xyXG52YXIgRGlyZWN0aW9ucyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtZGlyZWN0aW9uc1wiKS5EaXJlY3Rpb25zO1xyXG5sZXQgZGlyZWN0aW9ucyA9IG5ldyBEaXJlY3Rpb25zKCk7XHJcbi8vLS0tLS0tLVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHByb3BzOiBbXCJBbmltYWxDZW50ZXJcIl0sXHJcblxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICBhbmltYWxDZW50ZXJEYXRhKCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImFuaW1hbENlbnRlckRhdGEoKSwgcmV0dXJuaW5nIGRhdGE6IFwiICsgdGhpcy5BbmltYWxDZW50ZXIpO1xyXG4gICAgICByZXR1cm4gdGhpcy5BbmltYWxDZW50ZXIgfHwge307XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgbWV0aG9kczoge1xyXG4gICAgb25BZGRyZXNzVGFwKCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICBcIm9uQWRkcmVzc1RhcCgpLCBnZXQgZGlyZWN0aW9ucyB0byBcIiArIHRoaXMuQW5pbWFsQ2VudGVyLmFkZHJlc3NcclxuICAgICAgKTtcclxuXHJcbiAgICAgIC8vIG11c3QgcGFzcyBpbiBzdHJpbmcgYXMgdmFyaWFibGUgb3RoZXJ3aXNlIGl0IGRpcmVjdGlvbnMubmF2aWdhdGUoKSB3b24ndCB3b3JrXHJcbiAgICAgIGNvbnN0IGFkZHJlc3MgPSB0aGlzLkFuaW1hbENlbnRlci5hZGRyZXNzO1xyXG5cclxuICAgICAgZGlyZWN0aW9ucy5hdmFpbGFibGUoKS50aGVuKGZ1bmN0aW9uKGF2YWlsKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhhdmFpbCA/IFwiWWVzXCIgOiBcIk5vXCIpO1xyXG4gICAgICAgIGlmIChhdmFpbCkge1xyXG4gICAgICAgICAgZGlyZWN0aW9uc1xyXG4gICAgICAgICAgICAubmF2aWdhdGUoe1xyXG4gICAgICAgICAgICAgIHRvOiB7XHJcbiAgICAgICAgICAgICAgICAvLyBlaXRoZXIgcGFzcyBpbiBhIHNpbmdsZSBvYmplY3Qgb3IgYW4gQXJyYXlcclxuICAgICAgICAgICAgICAgIGFkZHJlc3M6IGFkZHJlc3NcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJNYXBzIGFwcCBsYXVuY2hlZC5cIik7XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBmdW5jdGlvbihlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIG9uUGhvbmVUYXAoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwib25QaG9uZVRhcCgpLCBjYWxsIFwiICsgdGhpcy5BbmltYWxDZW50ZXIucGhvbmUpO1xyXG4gICAgICBwaG9uZS5kaWFsKHRoaXMuQW5pbWFsQ2VudGVyLnBob25lLCB0cnVlKTtcclxuICAgIH0sXHJcbiAgICBcclxuICB9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxyXG5AaW1wb3J0IFwiQC9BbmltYWxDZW50ZXJcIjtcclxuXHJcbi8vLS0tIDxhbmltYXRpb24+IC0tLVxyXG5cclxuLy8gY292ZXIgaW1hZ2VcclxuLmFuaW0tY292ZXIge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGtleS1jb3ZlcjtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDE7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjU7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBrZXktY292ZXIge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxMDApIHNjYWxlKDAsIDApO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XHJcbiAgfVxyXG5cclxuICAzMCUge1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDEsIDEpO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBpY29ucyAmIGNvbnRlbnRcclxuLmFuaW0tY29udGVudDEge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGtleS1jb250ZW50O1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTtcclxuICBhbmltYXRpb24tZGVsYXk6IDAuNzU7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcclxufVxyXG5cclxuLmFuaW0tY29udGVudDIge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGtleS1jb250ZW50O1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTtcclxuICBhbmltYXRpb24tZGVsYXk6IDEuMDtcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xyXG59XHJcblxyXG4uYW5pbS1jb250ZW50MyB7XHJcbiAgb3BhY2l0eTogMDtcclxuICBhbmltYXRpb24tbmFtZToga2V5LWNvbnRlbnQ7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMS4yNTtcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xyXG59XHJcblxyXG4uYW5pbS1jb250ZW50NCB7XHJcbiAgb3BhY2l0eTogMDtcclxuICBhbmltYXRpb24tbmFtZToga2V5LWNvbnRlbnQ7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMS41O1xyXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XHJcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XHJcbn1cclxuXHJcblxyXG5Aa2V5ZnJhbWVzIGtleS1jb250ZW50IHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAsIDUwKTtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcclxuICB9XHJcbn1cclxuLy8tLS0gPC9hbmltYXRpb24+IC0tLVxyXG5cclxuXHJcbi8vLS0tIGNzcyAtLS1cclxuXHJcbi50aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxOGVtO1xyXG4gIGNvbG9yOiAkbWlkbmlnaHQtZGFyaztcclxuXHJcbn1cclxuXHJcbi5zdGFjayB7XHJcbiAgcGFkZGluZy10b3A6IDE0O1xyXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDE7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiKDIxMiwgMjEyLCAyMTIpO1xyXG59XHJcblxyXG4uc3RhY2staG91cnMge1xyXG4gIHBhZGRpbmctdG9wOiA2O1xyXG59XHJcblxyXG4uaG91cnMge1xyXG4gIGNvbG9yOiAkYmx1ZS1kYXJrO1xyXG5cclxufVxyXG5cclxuQWN0aW9uQmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5ZmNhO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiPlxyXG4gICAgPExhYmVsIGNsYXNzPVwiaG9tZXBhZ2UtYmx1ZSB0ZXh0LXByaW1hcnkgbGlzdC1ncm91cC1pdGVtLXRleHQgZm9udC13ZWlnaHQtYm9sZFwiIHRleHRXcmFwPVwidHJ1ZVwiPlxyXG4gICAgPEZvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICA8U3BhbiA6dGV4dD1cIml0ZW0ucXVlcnlcIi8+XHJcbiAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgPC9MYWJlbD5cclxuICAgIFxyXG4gICAgPExhYmVsIGNsYXNzPVwiLmZhcV9hbnN3ZXIgLmxpc3QtZ3JvdXAtaXRlbS1jb250ZW50XCIgdGV4dFdyYXA9XCJ0cnVlXCI+XHJcbiAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgPFNwYW4gdGV4dC5kZWNvZGU9XCImIzk7XCIvPlxyXG4gICAgICAgIDxTcGFuIDp0ZXh0PVwiaXRlbS5hbnN3ZXJcIi8+XHJcbiAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgPC9MYWJlbD5cclxuIFxyXG4gIDwvU3RhY2tMYXlvdXQ+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcHJvcHM6IHtcclxuICAgIGl0ZW06IE9iamVjdFxyXG4gIH1cclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XHJcbkBpbXBvcnQgXCJAL0FuaW1hbENlbnRlclwiO1xyXG5cclxuLmZhcV9xdWVzdGlvbiB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAyMDtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLmZhcV9hbnN3ZXIge1xyXG4gIGNvbG9yOiAjNDU0NTQ1O1xyXG59XHJcblxyXG4ubGlzdC1ncm91cC1pdGVtLXRleHQge1xyXG4gIG1hcmdpbjogMiAzO1xyXG59XHJcbi5saXN0LWdyb3VwLWl0ZW0tY29udGVudCB7XHJcbiAgcGFkZGluZzogOCAxNSA0IDE1O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWxpZ2h0O1xyXG59XHJcblxyXG4uaG9tZXBhZ2UtYmx1ZSB7XHJcbiAgY29sb3I6ICRob21lcGFnZS1ibHVlO1xyXG59XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuXHQ8cGFnZSBhY3Rpb25CYXJIaWRkZW49XCJmYWxzZVwiIGJhY2tncm91bmRTcGFuVW5kZXJTdGF0dXNCYXI9XCJ0cnVlXCI+XHJcblx0XHQ8IS0tIEBsb2FkZWQ9XCJvbkxvYWRlZFwiIC0tPlxyXG4gICAgICAgIDxBY3Rpb25CYXIgY2xhc3M9XCJhY3Rpb25iYXIgbmF2VGFiXCI+XHJcbiAgICAgICAgICAgPE5hdmlnYXRpb25CdXR0b24gQHRhcD1cIiRuYXZpZ2F0ZUJhY2soKVwiIGFuZHJvaWQuc3lzdGVtSWNvbj1cImljX21lbnVfYmFja1wiIC8+XHJcbiAgICAgICAgICAgIDxMYWJlbCBmb250U2l6ZT1cIjE4XCIgdGV4dD1cIkFuaW1hbHMgZm9yIEFkb3B0aW9uXCI+PC9MYWJlbD5cclxuICAgICAgICA8L0FjdGlvbkJhcj5cclxuXHJcblx0XHQ8R3JpZExheW91dCByb3dzPVwiYXV0byxhdXRvLCpcIiBjb2x1bW5zPVwiYXV0b1wiPlxyXG5cclxuPCEtLW5hdiB0YWItLT5cclxuXHJcblx0XHRcdDxHcmlkTGF5b3V0ICByb3c9XCIxXCIgcmVmPVwibmF2VGFiXCIgY2xhc3M9XCJuYXZUYWJcIiB2ZXJ0aWNhbEFsaWdubWVudD1cInRvcFwiIGhlaWdodD1cIjUwXCJcclxuXHRcdFx0XHRcdHdpZHRoPVwiMTAwJVwiICByb3dzPVwiYXV0b1wiIGNvbHVtbnM9XCJhdXRvLGF1dG9cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwhLS1hY3RpdmUgY2xhc3MgdGFiIG5hdmlnYXRpb24qKioqLS0+XHJcblx0XHRcdFx0XHQ8R3JpZExheW91dCBjbGFzcz1cInRhYnZpZXdcIiA6Y2xhc3M9XCJzZWxlY3RlZFRhYnZpZXc9PTA/J2FjdGl2ZSc6JydcIlxyXG5cdFx0XHRcdFx0XHRcdEB0YXA9XCJhZG9wdGlvbkxpc3RcIiByb3dzPVwiKixhdXRvXCIgY29scz1cImF1dG9cIiBjb2w9XCIwXCIgcm93PVwiMFwiXHJcblx0XHRcdFx0XHRcdFx0d2lkdGg9XCI1MCVcIj5cclxuXHJcblx0XHRcdFx0XHRcdFx0PExhYmVsIHYtc2hvdz1cInNlbGVjdGVkVGFidmlldz09MFwiIHJvdz1cIjBcIiBjbGFzcz1cImZhIG5hdkljb25cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ6dGV4dD1cInNlbGVjdGVkVGFidmlldz09MD8nZmEtcGF3JzonJyB8IGZvbnRpY29uXCIvPlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8TGFiZWwgaG9yaXpvbnRhbEFsaWdubWVudD1cImNlbnRlclwiIDpjbGFzcz1cInNlbGVjdGVkVGFidmlldz09MD8nYWN0aXZlJzonJ1wiIHJvdz1cIjFcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0ZXh0PVwiQW5pbWFsc1wiIGNsYXNzPVwidGFidmlld1RleHRcIj48L0xhYmVsPlxyXG5cclxuXHRcdFx0XHRcdDwvR3JpZExheW91dD5cclxuXHJcblx0XHRcdFx0XHQ8R3JpZExheW91dCBjbGFzcz1cInRhYnZpZXdcIiA6Y2xhc3M9XCJzZWxlY3RlZFRhYnZpZXc9PTE/J2FjdGl2ZSc6JydcIlxyXG5cdFx0XHRcdFx0XHRcdEB0YXA9XCJzaG93Q2F0ZWdvcnlcIiByb3dzPVwiKixhdXRvXCIgY29scz1cImF1dG9cIiBjb2w9XCIxXCIgcm93PVwiMFwiXHJcblx0XHRcdFx0XHRcdFx0d2lkdGg9XCI1MCVcIj5cclxuXHJcblx0XHRcdFx0XHRcdFx0PExhYmVsIHYtc2hvdz1cInNlbGVjdGVkVGFidmlldz09MVwiIHJvdz1cIjBcIiBjbGFzcz1cImZhIG5hdkljb25cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ6dGV4dD1cInNlbGVjdGVkVGFidmlldz09MT8nZmEtZmlsdGVyJzonJyB8IGZvbnRpY29uXCIvPlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8TGFiZWwgOmNsYXNzPVwic2VsZWN0ZWRUYWJ2aWV3PT0xPydhY3RpdmUnOicnXCIgcm93PVwiMVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdHRleHQ9XCJGaWx0ZXJcIiBob3Jpem9udGFsQWxpZ25tZW50PVwiY2VudGVyXCIgY2xhc3M9XCJ0YWJ2aWV3VGV4dFwiPjwvTGFiZWw+XHRcdFx0XHRcdFx0XHJcblxyXG5cdFx0XHRcdFx0PC9HcmlkTGF5b3V0PlxyXG5cdFx0XHRcdFx0PCEtLSBlbmQgbmF2LS0+XHJcblx0XHRcdDwvR3JpZExheW91dD5cclxuXHJcbjwhLS1zZWxlY3RlZCB0YWIgc2V0IHRvIHZpZXcgYW5pbWFsIC0tPlxyXG48IS0taXRlbSAtLT5cclxuXHRcdFx0PEdyaWRMYXlvdXQgdi1zaG93PVwic2VsZWN0ZWRUYWJ2aWV3ID09IDBcIiByb3c9XCIyXCIgd2lkdGg9XCIxMDAlXCIgYmFja2dyb3VuZENvbG9yPVwid2hpdGVcIj5cclxuPCEtLVRPRE86IENIQU5HRSA6S0VZIFRPIERJRkZFUkVOVCBWQUxVRSAtLT5cclxuPCEtLSBWVUUgV0FSTklORzogRHVwbGljYXRlIGtleXMgZGV0ZWN0ZWQ6ICdbb2JqZWN0IE9iamVjdF0nLiBUaGlzIG1heSBjYXVzZSBhbiB1cGRhdGUgZXJyb3IuIGZvdW5kIGluIDxBZG9wdGlvbkFuaW1hbERldGFpbHM+IC0tPlxyXG5cdFx0XHRcdDxMaXN0VmlldyByZWY9XCJsaXN0dmlld1wiIHNlcGFyYXRvckNvbG9yPVwidHJhbnNwYXJlbnRcIiBmb3I9XCJpdGVtIGluIGl0ZW1zXCIgOmtleT1cImluZGV4XCI+XHJcblxyXG5cdFx0XHRcdFx0PHYtdGVtcGxhdGU+XHJcblx0XHRcdFx0XHRcdDxpdGVtIDppdGVtPVwiaXRlbVwiIEBjbGlja2VkPVwic2hvd0l0ZW0oaXRlbSlcIiAvPlxyXG5cdFx0XHRcdFx0PC92LXRlbXBsYXRlPlxyXG5cclxuXHRcdFx0XHQ8L0xpc3RWaWV3PlxyXG5cdFx0XHQ8L0dyaWRMYXlvdXQ+XHJcblxyXG48IS0tc2VsZWN0ZWQgdGFiIHZpZXcgZmlsdGVyIC0tPlxyXG5cdFx0XHQ8R3JpZExheW91dCB2LXNob3c9XCJzZWxlY3RlZFRhYnZpZXcgPT0gMVwiIHJvdz1cIjJcIiB3aWR0aD1cIjEwMCVcIiBiYWNrZ3JvdW5kQ29sb3I9XCJ3aGl0ZVwiPlx0XHRcclxuXHJcblx0XHRcdFx0PFJhZExpc3RWaWV3IHJlZj1cImxpc3R2aWV3XCIgc2VwYXJhdG9yQ29sb3I9XCJ0cmFuc3BhcmVudFwiIGZvcj1cIml0ZW0gaW4gaXRlbXNDYXRlZ29yeVwiIDprZXk9XCJpbmRleFwiPlxyXG5cclxuXHRcdFx0XHRcdDx2LXRlbXBsYXRlPlxyXG5cdFx0XHRcdFx0XHQ8Q2F0ZWdvcnkgOml0ZW09XCJpdGVtXCI+IDwvQ2F0ZWdvcnk+XHJcblx0XHRcdFx0XHQ8L3YtdGVtcGxhdGU+XHJcbiAgICAgICAgICBcclxuXHRcdFx0XHQ8L1JhZExpc3RWaWV3PlxyXG5cdFx0XHQ8L0dyaWRMYXlvdXQ+XHJcblxyXG5cdFx0PC9HcmlkTGF5b3V0PlxyXG48L3BhZ2U+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcbi8vIGltcG9ydCB7IFN3aXNzQXJteUtuaWZlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1zd2lzcy1hcm15LWtuaWZlXCI7XHJcbmltcG9ydCB7IGlzSU9TLCBpc0FuZHJvaWQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xyXG4vLyBpbXBvcnQgbmF2Qm90dG9tIGZyb20gXCIuL2N1c3RvbS9uYXZCb3R0b21cIjtcclxuaW1wb3J0IEl0ZW0gZnJvbSBcIkAvY29tcG9uZW50cy9hZG9wdGlvbi9BbmltYWxDYXJkXCI7XHJcbmltcG9ydCBDYXRlZ29yeSBmcm9tIFwiQC9jb21wb25lbnRzL2Fkb3B0aW9uL2NhdGVnb3J5XCI7XHJcbmltcG9ydCBJdGVtRGV0YWlscyBmcm9tIFwiQC9jb21wb25lbnRzL2Fkb3B0aW9uL0Fkb3B0aW9uQW5pbWFsRGV0YWlsc1wiO1xyXG5cclxuY29uc3QgZ2VzdHVyZXMgPSByZXF1aXJlKFwidWkvZ2VzdHVyZXNcIik7XHJcbmNvbnN0IGFwcCA9IHJlcXVpcmUoXCJhcHBsaWNhdGlvblwiKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBjb21wb25lbnRzOiB7XHJcbiAgICAvLyBuYXZCb3R0b20sXHJcbiAgICBJdGVtLFxyXG4gICAgQ2F0ZWdvcnlcclxuICB9LFxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICBpdGVtc0NhdGVnb3J5KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5jYXRlZ29yeS5zbGljZSgpLnJldmVyc2UoKTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBtb3VudGVkKCkge1xyXG4gICAgLy8gU3dpc3NBcm15S25pZmUuc2V0QW5kcm9pZFN0YXR1c0JhckNvbG9yKFwiI2I1MTIxM1wiKTtcclxuICB9LFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBsYXN0RGVsWTogMCxcclxuICAgICAgaGVhZGVyQ29sbGFwc2VkOiBmYWxzZSxcclxuICAgICAgc2VsZWN0ZWRUYWI6IDAsXHJcbiAgICAgIHNlbGVjdGVkVGFidmlldzogMCxcclxuICAgICAgaXRlbXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIlR3aW5raWVcIixcclxuICAgICAgICAgIGNvdmVyOiBcIn4vYXNzZXRzL2ltYWdlcy9kb2ctYnV0dG9uLmpwZ1wiLFxyXG4gICAgICAgICAgaW1hZ2VzOiBbXHJcbiAgICAgICAgICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9iZWUucG5nXCIgfSxcclxuICAgICAgICAgICAgeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL3BlYWNvY2sucG5nXCIgfSxcclxuICAgICAgICAgICAgeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL3JhdHRsZXNuYWtlLnBuZ1wiIH0sXHJcbiAgICAgICAgICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9jb3lvdGUucG5nXCIgfSxcclxuICAgICAgICAgICAgeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL21vdW50YWlubGlvbi5wbmdcIiB9LFxyXG4gICAgICAgICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvb3Bvc3N1bS5wbmdcIiB9XHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgICAgY2F0ZWdvcnk6IFwiRG9nXCIsXHJcbiAgICAgICAgICBjYXRlZ29yeVRhZzogXCIjMkQ5Q0RCXCIsXHJcbiAgICAgICAgICBicmVlZF9ncm91cDogXCJUb3lcIixcclxuICAgICAgICAgIHByaW1hcnlfYnJlZWQ6IFwiQ2hpaHVhaHVhXCIsXHJcbiAgICAgICAgICBhZ2U6IFwiNCBtb250aHNcIixcclxuICAgICAgICAgIGdlbmRlcjogXCJGXCIsXHJcbiAgICAgICAgICBhbmltYWxfc2l6ZTogXCJTbWFsbFwiLFxyXG4gICAgICAgICAgcHJpbWFyeV9jb2xvcjogXCJUYW5cIixcclxuICAgICAgICAgIGxvY2F0aW9uOiBcIkRvd25leVwiLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgICBpc0Zhdm9yaXRlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiQm9vZ2llXCIsXHJcbiAgICAgICAgICBjb3ZlcjogXCJ+L2Fzc2V0cy9pbWFnZXMvY2F0LXJvYW1pbmctaWNvbi5wbmdcIixcclxuICAgICAgICAgIGltYWdlczogW1xyXG4gICAgICAgICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvYmVlLnBuZ1wiIH0sXHJcbiAgICAgICAgICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9wZWFjb2NrLnBuZ1wiIH0sXHJcbiAgICAgICAgICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9yYXR0bGVzbmFrZS5wbmdcIiB9LFxyXG4gICAgICAgICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvY295b3RlLnBuZ1wiIH0sXHJcbiAgICAgICAgICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9tb3VudGFpbmxpb24ucG5nXCIgfSxcclxuICAgICAgICAgICAgeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL29wb3NzdW0ucG5nXCIgfVxyXG4gICAgICAgICAgXSxcclxuICAgICAgICAgIGNhdGVnb3J5OiBcIkNhdFwiLFxyXG4gICAgICAgICAgY2F0ZWdvcnlUYWc6IFwiIzYxMjdhZVwiLFxyXG4gICAgICAgICAgYnJlZWRfZ3JvdXA6IFwiU2hvcnRoYWlyXCIsXHJcbiAgICAgICAgICBwcmltYXJ5X2JyZWVkOiBcIlRhYmJ5XCIsXHJcbiAgICAgICAgICBhZ2U6IFwiNlwiLFxyXG4gICAgICAgICAgZ2VuZGVyOiBcIk1cIixcclxuICAgICAgICAgIGFuaW1hbF9zaXplOiBcIlNtYWxsXCIsXHJcbiAgICAgICAgICBwcmltYXJ5X2NvbG9yOiBcIlRhblwiLFxyXG4gICAgICAgICAgbG9jYXRpb246IFwiRG93bmV5XCIsXHJcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICAgIGlzRmF2b3JpdGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIlNub29weVwiLFxyXG4gICAgICAgICAgY292ZXI6IFwifi9hc3NldHMvaW1hZ2VzL3Nub29weS5qcGdcIixcclxuICAgICAgICAgIGltYWdlczogW1xyXG4gICAgICAgICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvYmVlLnBuZ1wiIH0sXHJcbiAgICAgICAgICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9wZWFjb2NrLnBuZ1wiIH0sXHJcbiAgICAgICAgICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9yYXR0bGVzbmFrZS5wbmdcIiB9LFxyXG4gICAgICAgICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvY295b3RlLnBuZ1wiIH0sXHJcbiAgICAgICAgICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9tb3VudGFpbmxpb24ucG5nXCIgfSxcclxuICAgICAgICAgICAgeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL29wb3NzdW0ucG5nXCIgfVxyXG4gICAgICAgICAgXSxcclxuICAgICAgICAgIGNhdGVnb3J5OiBcIkRvZ1wiLFxyXG4gICAgICAgICAgY2F0ZWdvcnlUYWc6IFwiIzI3QUU2MFwiLFxyXG4gICAgICAgICAgYnJlZWRfZ3JvdXA6IFwiSG91bmRcIixcclxuICAgICAgICAgIHByaW1hcnlfYnJlZWQ6IFwiQmVhZ2xlXCIsXHJcbiAgICAgICAgICBhZ2U6IFwiMTBcIixcclxuICAgICAgICAgIGdlbmRlcjogXCJNXCIsXHJcbiAgICAgICAgICBhbmltYWxfc2l6ZTogXCJTbWFsbFwiLFxyXG4gICAgICAgICAgcHJpbWFyeV9jb2xvcjogXCJUYW5cIixcclxuICAgICAgICAgIGxvY2F0aW9uOiBcIkRvd25leVwiLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgaXNGYXZvcml0ZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiQXJpYW5hXCIsXHJcbiAgICAgICAgICBjb3ZlcjogXCJ+L2Fzc2V0cy9pbWFnZXMvY2F0LWJ1dHRvbi5qcGdcIixcclxuICAgICAgICAgIGltYWdlczogW1xyXG4gICAgICAgICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvYmVlLnBuZ1wiIH0sXHJcbiAgICAgICAgICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9wZWFjb2NrLnBuZ1wiIH0sXHJcbiAgICAgICAgICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9yYXR0bGVzbmFrZS5wbmdcIiB9LFxyXG4gICAgICAgICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvY295b3RlLnBuZ1wiIH0sXHJcbiAgICAgICAgICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9tb3VudGFpbmxpb24ucG5nXCIgfSxcclxuICAgICAgICAgICAgeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL29wb3NzdW0ucG5nXCIgfVxyXG4gICAgICAgICAgXSxcclxuICAgICAgICAgIGNhdGVnb3J5OiBcIkNhdFwiLFxyXG4gICAgICAgICAgY2F0ZWdvcnlUYWc6IFwiI2U0Y2UwZFwiLFxyXG4gICAgICAgICAgYnJlZWRfZ3JvdXA6IFwiTG9uZ2hhaXJcIixcclxuICAgICAgICAgIHByaW1hcnlfYnJlZWQ6IFwiRG9tZXN0aWNcIixcclxuICAgICAgICAgIGdlbmRlcjogXCJGXCIsXHJcbiAgICAgICAgICBhbmltYWxfc2l6ZTogXCJTbWFsbFwiLFxyXG4gICAgICAgICAgcHJpbWFyeV9jb2xvcjogXCJHcmF5XCIsXHJcbiAgICAgICAgICBsb2NhdGlvbjogXCJEb3duZXlcIixcclxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgaXNGYXZvcml0ZTogdHJ1ZSxcclxuICAgICAgICAgIGFnZTogXCIxMCBtb250aHNcIixcclxuICAgICAgICAgIGlzRmF2b3JpdGU6IGZhbHNlLFxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICBuYW1lOiBcIk11ZmZpblwiLFxyXG4gICAgICAgIC8vICAgY292ZXI6IFwifi9hc3NldHMvaW1hZ2VzL2RvZ2dvLnBuZ1wiLFxyXG4gICAgICAgIC8vICAgaW1hZ2VzOiBbXHJcbiAgICAgICAgLy8gICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9iZWUucG5nXCIgfSxcclxuICAgICAgICAvLyAgICAgeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL3BlYWNvY2sucG5nXCIgfSxcclxuICAgICAgICAvLyAgICAgeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL3JhdHRsZXNuYWtlLnBuZ1wiIH0sXHJcbiAgICAgICAgLy8gICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9jb3lvdGUucG5nXCIgfSxcclxuICAgICAgICAvLyAgICAgeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL21vdW50YWlubGlvbi5wbmdcIiB9LFxyXG4gICAgICAgIC8vICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvb3Bvc3N1bS5wbmdcIiB9XHJcbiAgICAgICAgLy8gICBdLFxyXG4gICAgICAgIC8vICAgY2F0ZWdvcnk6IFwiRG9nXCIsXHJcbiAgICAgICAgLy8gICBjYXRlZ29yeVRhZzogXCIjMjdBRTYwXCIsXHJcbiAgICAgICAgLy8gICBicmVlZDogXCIzMDAuMDBcIixcclxuICAgICAgICAvLyAgIGxpa2VzOiA3MzAsXHJcbiAgICAgICAgLy8gICBpc0xpa2U6IHRydWUsXHJcbiAgICAgICAgLy8gICBpc0Zhdm9yaXRlOiB0cnVlLFxyXG4gICAgICAgIC8vICAgY29tbWVudHM6IDExLFxyXG4gICAgICAgIC8vICAgcmF0aW5nOiBcIjQuMFwiLFxyXG4gICAgICAgIC8vICAgZGVzY3JpcHRpb246IFwiYVwiXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICBdLFxyXG4gICAgICBjYXRlZ29yeTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvdmVyOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2J1cmdlcjY0MC5qcGdcIixcclxuICAgICAgICAgIGNhdGVnb3J5OiBcIkNhdFwiLFxyXG4gICAgICAgICAgY291bnQ6IFwiMTNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY292ZXI6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvcGFuY2FrZTY0MC5qcGdcIixcclxuICAgICAgICAgIGNhdGVnb3J5OiBcIkRvZ1wiLFxyXG4gICAgICAgICAgY291bnQ6IFwiNVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb3ZlcjogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9jYWtlNjQwLmpwZ1wiLFxyXG4gICAgICAgICAgY2F0ZWdvcnk6IFwiTGl2ZXN0b2NrXCIsXHJcbiAgICAgICAgICBjb3VudDogXCI5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvdmVyOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2JlZXI2NDAuanBnXCIsXHJcbiAgICAgICAgICBjYXRlZ29yeTogXCJPdGhlclwiLFxyXG4gICAgICAgICAgY291bnQ6IFwiN1wiXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgc2VhcmNoKCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcInNlYXJjaFwiKTtcclxuICAgIH0sXHJcbiAgICBiZWxsKCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImJlbGxcIik7XHJcbiAgICB9LFxyXG4gICAgc2hvd0l0ZW0ocGF5bG9hZCkge1xyXG4gICAgICB0aGlzLiRuYXZpZ2F0ZVRvKEl0ZW1EZXRhaWxzLCB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgIGl0ZW06IHBheWxvYWRcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFuaW1hdGVkOiB0cnVlLFxyXG4gICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgIG5hbWU6IFwic2xpZGVUb3BcIixcclxuICAgICAgICAgIGR1cmF0aW9uOiAzODAsXHJcbiAgICAgICAgICBjdXJ2ZTogXCJlYXNlSW5cIlxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGFkb3B0aW9uTGlzdCgpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZFRhYnZpZXcgPSAwO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBUT0RPOiBzaG93IGZpbHRlclxyXG4gICAgc2hvd0NhdGVnb3J5KCkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkVGFidmlldyA9IDE7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlSGVhcnQoKSB7XHJcbiAgICBpZiAoaXNJT1MpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5hbmltYXRlRmF2b3JpdGUoKTtcclxuICAgICAgdGhpcy5pdGVtLmlzRmF2b3JpdGUgPSAhdGhpcy5pdGVtLmlzRmF2b3JpdGU7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuLnRhYnZpZXcuYWN0aXZlIHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItYm90dG9tLXdpZHRoOiAzO1xyXG4gIG1hcmdpbjogMDtcclxuICBoZWlnaHQ6IDUwO1xyXG59XHJcbi50YWJ2aWV3VGV4dCB7XHJcbiAgbWFyZ2luLXRvcDogMTU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTtcclxuICBmb250LXNpemU6IDEzO1xyXG4gIGNvbG9yOiAjZDhkMmQyO1xyXG59XHJcbi50YWJ2aWV3VGV4dC5hY3RpdmUge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm5hdkljb24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAzO1xyXG59XHJcblxyXG4ubmF2VGFiIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5ZmNhO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5uYXZUYWJ2aWV3IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG59XHJcblxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICA8UGFnZSBjbGFzcz1cInBhZ2VcIj5cclxuICAgIDxBY3Rpb25CYXI+XHJcbiAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uIEB0YXA9XCIkbmF2aWdhdGVCYWNrKClcIiBhbmRyb2lkLnN5c3RlbUljb249XCJpY19tZW51X2JhY2tcIiAvPlxyXG4gICAgICA8TGFiZWwgdGV4dD1cIkZBUVwiIGZvbnRTaXplPVwiMjBcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiIC8+XHJcbiAgICA8L0FjdGlvbkJhcj5cclxuXHJcbiAgICA8U3RhY2tMYXlvdXQ+XHJcbiAgICAgIDxTZWFyY2hCYXIgdi1tb2RlbD1cInNlYXJjaFwiIGhpbnQ9XCJFbnRlciB0ZXh0Li4uXCIgQHN1Ym1pdD1cImNoZWNrRmFxXCIgLz5cclxuXHJcbiAgICAgIDxSYWRMaXN0VmlldyByZWY9XCJsaXN0Vmlld1wiXHJcbiAgICAgICAgICAgICAgICAgICBmb3I9XCJmYXEgaW4gZ2V0U2VhcmNoUmVzdWx0cyhzZWFyY2gpXCJcclxuICAgICAgICAgICAgICAgICAgIHB1bGxUb1JlZnJlc2g9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgIEBwdWxsVG9SZWZyZXNoSW5pdGlhdGVkPVwib25QdWxsVG9SZWZyZXNoSW5pdGlhdGVkXCJcclxuICAgICAgICAgICAgICAgICAgIEBpdGVtVGFwPVwib25JdGVtVGFwXCJcclxuICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibGlzdC1ncm91cFwiPlxyXG5cclxuICAgICAgICA8di10ZW1wbGF0ZT5cclxuICAgICAgICAgIDxGYXFJbmZvIDppdGVtPVwiZmFxXCIgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0tdGV4dFwiLz5cclxuICAgICAgICA8L3YtdGVtcGxhdGU+XHJcbiAgICAgIDwvUmFkTGlzdFZpZXc+XHJcbiAgICA8L1N0YWNrTGF5b3V0PlxyXG4gIDwvUGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBGYXFJbmZvIGZyb20gXCJAL2NvbXBvbmVudHMvc3VibGlzdHMvRmFxSW5mby52dWVcIjtcclxuaW1wb3J0IFRpY2tldCBmcm9tIFwiLi9UaWNrZXQudnVlXCI7XHJcbmltcG9ydCB7IG1hcFN0YXRlLCBtYXBBY3Rpb25zLCBtYXBNdXRhdGlvbnMsIG1hcEdldHRlcnMgfSBmcm9tIFwidnVleFwiO1xyXG5pbXBvcnQgRmFxIGZyb20gXCJAL21vZGVscy9GYXFcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc2VhcmNoOiBcIlwiLFxyXG4gICAgICB0aWNrZXQ6IFRpY2tldCxcclxuICAgICAgdGVtcEZhcXM6IFtdXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgLi4ubWFwQWN0aW9ucyhbXCJsb2FkRmFxc1wiXSksXHJcbiAgICAuLi5tYXBNdXRhdGlvbnMoW1wic3RvcmVGYXFcIl0pLFxyXG4gICAgY2hlY2tGYXEoKSB7XHJcbiAgICAgIC8vIGluIHRoZSBmdXR1cmUgdGhpcyBpcyB3aGVyZSB0byBjaGVjayBpZiBhIHVzZXIgaXMgb24gc2l0ZSwgb3RoZXJ3aXNlIG5vIHRpY2tldCBvcHRpb25cclxuICAgICAgLy8gaWYgKHRoaXMuZmFxcy5maWx0ZXIoZmFxID0+IGZhcS5xdWVzdGlvbiA9PT0gdGhpcy5zZWFyY2gpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAvLyAgIHRoaXMuc3RvcmVGYXEobmV3IEZhcSh0aGlzLnNlYXJjaCkpXHJcbiAgICAgIC8vICAgdGhpcy4kbmF2aWdhdGVUbyh0aGlzLnRpY2tldClcclxuICAgICAgLy8gfVxyXG4gICAgfSxcclxuICAgIG9uSXRlbVRhcCgpIHtcclxuICAgICAgLy8gVE9ET1xyXG4gICAgfSxcclxuICAgIG9uUHVsbFRvUmVmcmVzaEluaXRpYXRlZCh7IG9iamVjdCB9KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiUHVsbGluZy4uLlwiKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgb2JqZWN0Lm5vdGlmeVB1bGxUb1JlZnJlc2hGaW5pc2hlZCgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LFxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICAuLi5tYXBTdGF0ZShbXCJmYXFzXCJdKSxcclxuICAgIC4uLm1hcEdldHRlcnMoW1wiZ2V0U2VhcmNoUmVzdWx0c1wiXSlcclxuICB9LFxyXG4gIG1vdW50ZWQoKSB7XHJcbiAgICB0aGlzLmxvYWRGYXFzKCk7XHJcbiAgfSxcclxuICBjb21wb25lbnRzOiB7XHJcbiAgICBUaWNrZXQsXHJcbiAgICBGYXFJbmZvXHJcbiAgfVxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cclxuICBAaW1wb3J0ICcuLi9BbmltYWxDZW50ZXInO1xyXG5cclxuQWN0aW9uQmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5ZmNhO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4ubWVzc2FnZSB7XHJcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuLmZhcV9xdWVzdGlvbiB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAyMDtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLmZhcV9hbnN3ZXIge1xyXG4gIGNvbG9yOiAjNDU0NTQ1O1xyXG59XHJcblxyXG4ubGlzdC1ncm91cC1pdGVtLXRleHQge1xyXG4gIG1hcmdpbjogNyA4O1xyXG59XHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gIDxQYWdlID5cclxuICAgIDxBY3Rpb25CYXIgaW9zLnBvc2l0aW9uPVwibGVmdFwiIGNsYXNzPVwiQWN0aW9uX0JhclwiPlxyXG4gICAgICA8TGFiZWwgdGV4dD1cIldlbGNvbWVcIiBmb250U2l6ZT1cIjIwXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIi8+XHJcbiAgICAgIDxBY3Rpb25JdGVtIEB0YXA9XCJ0b0ZhcVwiIGlvcy5zeXN0ZW1JY29uPVwiMTJcIiBpb3MucG9zaXRpb249XCJyaWdodFwiIGFuZHJvaWQuc3lzdGVtSWNvbj1cImljX21lbnVfc2VhcmNoXCIgYW5kcm9pZC5wb3NpdGlvbj1cImFjdGlvbkJhclwiIC8+XHJcbiAgICA8L0FjdGlvbkJhcj5cclxuXHJcbiAgICA8U3RhY2tMYXlvdXQgYmFja2dyb3VuZENvbG9yPVwiI2IyMWE4MlwiPlxyXG5cclxuICAgICAgPEdyaWRMYXlvdXQgY2xhc3M9XCJsYXlvdXQgY292ZXJcIiBjb2x1bW5zPVwiKiwqXCIgcm93cz1cIiosKiwqXCI+XHJcbiAgICAgICAgPCEtLUFkb3B0aW9uIC0tPlxyXG4gICAgICAgIDxDYXRlZ29yeUJ1dHRvbiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiIG1hcmdpbj1cIjVcIiByb3c9XCIwXCIgY29sPVwiMFwiIHNyYz1cIn4vYXNzZXRzL2ltYWdlcy9hbmltYWxzLmljb24ucG5nXCIgOmljb249XCInJ1wiXHJcbiAgICAgICAgOnRpdGxlPVwidGl0bGVzWzBdXCIgOmFjdGlvbj1cInRvQWRvcHRpb25cIiBjbGFzcz1cImhvbWVwYWdlLWJsdWUgSG9tZUJ1dHRvblwiIHRleHRXcmFwPVwidHJ1ZVwiLz5cclxuICAgICAgICAgIFxyXG4gICAgICAgIDwhLS1TZXJ2aWNlIFJlcXVlc3QgLS0+XHJcbiAgICAgICAgPENhdGVnb3J5QnV0dG9uIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgIG1hcmdpbj1cIjVcIiByb3c9XCIxXCIgY29sPVwiMFwiIHNyYz1cIn4vYXNzZXRzL2ltYWdlcy9zZXJ2aWNlcy5pY29uLnBuZ1wiIDppY29uPVwiJydcIlxyXG4gICAgICAgIDp0aXRsZT1cInRpdGxlc1syXVwiIDphY3Rpb249XCJ0b1NlcnZpY2VSZXF1ZXN0XCIgY2xhc3M9XCJob21lcGFnZS1ibHVlIEhvbWVCdXR0b25cIiB0ZXh0V3JhcD1cInRydWVcIi8+XHJcbiAgICAgICAgIFxyXG4gICAgICAgIDwhLS1GQVEgLS0+XHJcbiAgICAgICAgPENhdGVnb3J5QnV0dG9uIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgIG1hcmdpbj1cIjVcIiByb3c9XCIwXCIgY29sPVwiMVwiIHNyYz1cIn4vYXNzZXRzL2ltYWdlcy9ub2lzZS5pY29uLnBuZ1wiIDppY29uPVwiJydcIlxyXG4gICAgICAgIDp0aXRsZT1cInRpdGxlc1szXVwiIDphY3Rpb249XCJ0b0ZhcVwiIGNsYXNzPVwiaG9tZXBhZ2UtYmx1ZSBIb21lQnV0dG9uXCIgdGV4dFdyYXA9XCJ0cnVlXCIvPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwhLS1UaWNrZXQgLS0+XHJcbiAgICAgICAgPENhdGVnb3J5QnV0dG9uIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgIG1hcmdpbj1cIjVcIiByb3c9XCIyXCIgY29sPVwiMFwiIHNyYz1cIn4vYXNzZXRzL2ltYWdlcy9ob3Vyc2ljb24ucG5nXCIgXHJcbiAgICAgICAgOmljb249XCInZmEtbWFwLW1hcmtlcicgfCBmb250aWNvblwiIDp0aXRsZT1cInRpdGxlc1s0XVwiIDphY3Rpb249XCJ0b1FSU2Nhbm5lclwiIGNsYXNzPVwiZmEgaG9tZXBhZ2UtYmx1ZSBIb21lQnV0dG9uXCIgdGV4dFdyYXA9XCJ0cnVlXCIvPlxyXG4gICAgICAgXHJcbiAgICAgICAgPCEtLUZpbmQgYSBMb2NhdGlvbiAtLT5cclxuICAgICAgICA8Q2F0ZWdvcnlCdXR0b24gdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiBtYXJnaW49XCI1XCIgcm93PVwiMVwiIGNvbD1cIjFcIiBzcmM9XCJ+L2Fzc2V0cy9pbWFnZXMvbG9jYXRpb25pY29uLnBuZ1wiIDppY29uPVwiJydcIlxyXG4gICAgICAgIDp0aXRsZT1cInRpdGxlc1s1XVwiIDphY3Rpb249XCJ0b0xvY2F0aW9uTGlzdFwiIGNsYXNzPVwiaG9tZXBhZ2UtYmx1ZSBIb21lQnV0dG9uXCIgdGV4dFdyYXA9XCJ0cnVlXCIvPlxyXG4gICAgICBcclxuICAgICAgPC9HcmlkTGF5b3V0PlxyXG5cclxuICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICBcclxuICA8L1BhZ2U+XHJcbiAgXHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgQ2F0ZWdvcnlCdXR0b24gZnJvbSBcIkAvY29tcG9uZW50cy9idXR0b25zL0NhdGVnb3J5QnV0dG9uLnZ1ZVwiXHJcbmltcG9ydCBGYXEgZnJvbSBcIi4vRmFxLnZ1ZVwiXHJcbmltcG9ydCBMb2NhdGlvbiBmcm9tIFwiLi9Mb2NhdGlvbi52dWVcIlxyXG5pbXBvcnQgUVJTY2FubmVyIGZyb20gXCIuL1RpY2tldE9wdGlvbnMudnVlXCJcclxuaW1wb3J0IEFkb3B0aW9uIGZyb20gXCIuL0Fkb3B0aW9uLnZ1ZVwiXHJcbmltcG9ydCBTZXJ2aWNlUmVxdWVzdCBmcm9tIFwiLi9TZXJ2aWNlUmVxdWVzdC52dWVcIlxyXG5pbXBvcnQgeyBtYXBTdGF0ZSwgbWFwQWN0aW9ucywgbWFwTXV0YXRpb25zIH0gZnJvbSBcInZ1ZXhcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBhY3Rpb25CYXI6IFwiV2VsY29tZVwiLFxyXG4gICAgICBtc2c6IFwiSGVsbG8gV29ybGQhXCIsXHJcbiAgICAgIHRpdGxlczogW1xyXG4gICAgICAgIFwiQWRvcHQgYW4gQW5pbWFsIVwiLFxyXG4gICAgICAgIFwiU2VydmljZXMgJiBGZWVzXCIsXHJcbiAgICAgICAgXCJTZXJ2aWNlIFJlcXVlc3RcIixcclxuICAgICAgICBcIkZBUVwiLFxyXG4gICAgICAgIFwiR3JhYiBhIFRpY2tldCFcIixcclxuICAgICAgICBcIkZpbmQgT3VyIExvY2F0aW9uXCJcclxuICAgICAgXSxcclxuICAgICAgdGV4dFdyYXA6IGZhbHNlLFxyXG4gICAgICAvL3NlYXJjaDogXCJ0aGlzIHdpbGwgY2hhbmdlIGFzIHlvdSB0eXBlXCIsXHJcbiAgICAgIHJlc3VsdHM6IFtdLFxyXG4gICAgICBwb2xsaW5nOiB1bmRlZmluZWQsXHJcbiAgICAgIGZhcTogRmFxLFxyXG4gICAgICBsb2NhdGlvbjogTG9jYXRpb24sXHJcbiAgICAgIHFyU2Nhbm5lcjogUVJTY2FubmVyLFxyXG4gICAgICBhZG9wdGlvbjogQWRvcHRpb24sXHJcbiAgICAgIHNlcnZpY2VSZXF1ZXN0OiBTZXJ2aWNlUmVxdWVzdCxcclxuXHJcbiAgICB9O1xyXG4gIH0sXHJcblxyXG4gIGNvbXB1dGVkOiBtYXBTdGF0ZShbJ2FwcHJvdmVkVGlja2V0J10pLFxyXG5cclxuICBtZXRob2RzOiB7XHJcbiAgICAuLi5tYXBBY3Rpb25zKFsnY2hlY2tUaWNrZXQnXSksXHJcbiAgICAuLi5tYXBNdXRhdGlvbnMoWydTRVRfVElDS0VUJ10pLFxyXG4gICAgdG9Mb2NhdGlvbkxpc3QoKSB7XHJcbiAgICAgIHRoaXMuJG5hdmlnYXRlVG8odGhpcy5sb2NhdGlvbiwge1xyXG4gICAgICAgIGFuaW1hdGVkOiB0cnVlLFxyXG4gICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgIG5hbWU6IFwic2xpZGVcIixcclxuICAgICAgICAgIGR1cmF0aW9uOiAzODAsXHJcbiAgICAgICAgICBjdXJ2ZTogXCJlYXNlSW5cIlxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgdG9GYXEoKSB7XHJcbiAgICAgIHRoaXMuJG5hdmlnYXRlVG8odGhpcy5mYXEsIHtcclxuICAgICAgICBhbmltYXRlZDogdHJ1ZSxcclxuICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICBuYW1lOiBcInNsaWRlXCIsXHJcbiAgICAgICAgICBkdXJhdGlvbjogMzgwLFxyXG4gICAgICAgICAgY3VydmU6IFwiZWFzZUluXCJcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHRvUVJTY2FubmVyICgpIHtcclxuICAgICAgaWYgKHR5cGVvZiB0aGlzLmFwcHJvdmVkVGlja2V0ID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIGlmICh0aGlzLmFwcHJvdmVkVGlja2V0Lmhhc093blByb3BlcnR5KCd3aW5kb3cnKSkge1xyXG4gICAgICAgICAgYWxlcnQoe1xyXG4gICAgICAgICAgICB0aXRsZTogXCJBY2Nlc3MgRGVuaWVkXCIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiWW91IGNhbm5vdCBzdWJtaXQgYW5vdGhlciB0aWNrZXQuXCIsXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKHRoaXMucXJTY2FubmVyLCB7XHJcbiAgICAgICAgICBhbmltYXRlZDogdHJ1ZSxcclxuICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgbmFtZTogXCJzbGlkZVwiLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMzgwLFxyXG4gICAgICAgICAgICBjdXJ2ZTogXCJlYXNlSW5cIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgdG9BZG9wdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMuJG5hdmlnYXRlVG8odGhpcy5hZG9wdGlvbiwge1xyXG4gICAgICAgIGFuaW1hdGVkOiB0cnVlLFxyXG4gICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgIG5hbWU6IFwic2xpZGVcIixcclxuICAgICAgICAgIGR1cmF0aW9uOiAzODAsXHJcbiAgICAgICAgICBjdXJ2ZTogXCJlYXNlSW5cIlxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgdG9TZXJ2aWNlUmVxdWVzdCAoKSB7XHJcbiAgICAgIHRoaXMuJG5hdmlnYXRlVG8odGhpcy5zZXJ2aWNlUmVxdWVzdCwge1xyXG4gICAgICAgIGFuaW1hdGVkOiB0cnVlLFxyXG4gICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgIG5hbWU6IFwic2xpZGVcIixcclxuICAgICAgICAgIGR1cmF0aW9uOiAzODAsXHJcbiAgICAgICAgICBjdXJ2ZTogXCJlYXNlSW5cIlxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgcG9sbERhdGEoKSB7XHJcbiAgICAgIHRoaXMucG9sbGluZyA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAvLyBDaGVjayBpZiB0aWNrZXQgaXMgY29tcGxldGUgZXZlcnkgWCBzZWNvbmRzXHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmFwcHJvdmVkVGlja2V0ID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgaWYgKHRoaXMuYXBwcm92ZWRUaWNrZXQuaGFzT3duUHJvcGVydHkoJ251bWJlcicpKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYXBwcm92ZWRUaWNrZXQubnVtYmVyLCB0aGlzLmFwcHJvdmVkVGlja2V0LmlzQ29tcGxldGUpXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFwcHJvdmVkVGlja2V0LmlzQ29tcGxldGUpIHtcclxuICAgICAgICAgICAgICB0aGlzLlNFVF9USUNLRVQodW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgIGFsZXJ0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlRoYW5rIFlvdVwiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJZb3VyIHRpY2tldCBoYXMgYmVlbiBzZXJ2ZWQuIEhhdmUgYSBuaWNlIGRheSFcIixcclxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aGlzLmNoZWNrVGlja2V0KHRoaXMuYXBwcm92ZWRUaWNrZXQuaWQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sIDUwMDApXHJcbiAgICB9XHJcblxyXG4gIH0sXHJcblxyXG4gIG1vdW50ZWQoKSB7XHJcbiAgICB0aGlzLnBvbGxEYXRhKClcclxuICB9LFxyXG5cclxuICBiZWZvcmVEZXN0cm95KCkge1xyXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnBvbGxpbmcpXHJcbiAgfSxcclxuXHJcbiAgY29tcG9uZW50czoge1xyXG4gICAgQ2F0ZWdvcnlCdXR0b24sXHJcbiAgICBGYXFcclxuICB9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZCBsYW5nID1cInNjc3NcIj5cclxuQGltcG9ydCBcIi4uL0FuaW1hbENlbnRlclwiO1xyXG5cclxuLkFjdGlvbl9CYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDlmY2E7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5TX0JhciB7XHJcbiAgY29sb3I6ICMwNTA1MDU7XHJcbn1cclxuXHJcbi5TX0J1dHRvbiB7XHJcbiAgLyogdGV4dD1cInJpZ2h0XCI7IFxyXG4gICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ9XCJyaWdodFwiO1xyXG4gICAgICAgIHdpZHRoPVwiMzMlXCIgXHJcbiAgICAgICAgaGVpZ2h0PVwiNzBcIiBcclxuICAgICAgICAvKmJhY2tncm91bmRDb2xvcj1cIiMxYzZiNDhcIi8+Ki9cclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJ+L2Fzc2V0cy9pbWFnZXMvTmF0aXZlU2NyaXB0LVZ1ZS5wbmdcIik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4gIC5jb3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHBsdW0sICMwMDlmY2EpXHJcbn1cclxuXHJcbi5ob21lcGFnZS1ibHVlIHtcclxuICBjb2xvcjogJGhvbWVwYWdlLWJsdWU7XHJcbn1cclxuXHJcbi5BY3Rpb25fVGV4dCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4uSG9tZUJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICBib3JkZXItcmFkaXVzOiAyNTtcclxuICBmb250LXNpemU6IDE0JTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nLXRvcDogN2VtO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwO1xyXG59XHJcblxyXG4ubGF5b3V0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xyXG59XHJcblxyXG4ubWVzc2FnZSB7XHJcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMDtcclxuICBjb2xvcjogIzI1MjUyNTtcclxufVxyXG48L3N0eWxlPlxyXG5cclxuIiwiPHRlbXBsYXRlPlxyXG4gICAgPFBhZ2UgY2xhc3M9XCJwYWdlXCI+XHJcbiAgICAgICAgPEFjdGlvbkJhciBjbGFzcz1cImFjdGlvbi1iYXJcIj5cclxuICAgICAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uIEB0YXA9XCIkbmF2aWdhdGVCYWNrKClcIiBhbmRyb2lkLnN5c3RlbUljb249XCJpY19tZW51X2JhY2tcIiAvPlxyXG4gICAgICAgICAgPExhYmVsIHRleHQ9XCJBbmltYWwgQ2FyZSBDZW50ZXJzXCIgZm9udFNpemU9XCIyMFwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCI+PC9MYWJlbD5cclxuICAgICAgICA8L0FjdGlvbkJhcj5cclxuXHJcblxyXG4gICAgICAgIDxTdGFja0xheW91dD5cclxuICAgICAgICAgICAgPCEtLWdldCBkaXN0YW5jZSBidG4gLS0+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGNsYXNzPVwiZmEgZ3BzLWJ1dHRvblwiIDppY29uPVwiJ2ZhLXNvcnQtYW1vdW50LWFzYycgfCBmb250aWNvblwiIHRpdGxlPVwiR2V0IENsb3Nlc3QgQW5pbWFsIENlbnRlclwiIDphY3Rpb249XCJidXR0b25HZXREaXN0YW5jZVRvQ2FyZUNlbnRlcnNUYXBcIi8+XHJcblxyXG4gICAgICAgICAgICA8UmFkTGlzdFZpZXcgcm93PVwiMlwiIGZvcj1cImxvY2F0aW9uIGluIGNlbnRlckxvY2F0aW9uc1wiIEBpdGVtVGFwPVwib25JdGVtVGFwXCIgY2xhc3M9XCJsaXN0LWdyb3VwXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDx2LXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBjYXJkIGNvbnRhaW50ZXIgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cIiosICosICosICpcIiBjb2x1bW5zPVwiKiwgKlwiIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtLWNvbnRlbnRcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBuYW1lIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cImxvY2F0aW9uLm5hbWVcIiBjbGFzcz1cImhvbWVwYWdlLWJsdWUgdGV4dC1wcmltYXJ5IGxpc3QtZ3JvdXAtaXRlbS10ZXh0IGZvbnQtd2VpZ2h0LWJvbGRcIi8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gZGlzdGFuY2UgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cIjFcIiBob3Jpem9udGFsQWxpZ25tZW50PVwicmlnaHRcIiBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbS10ZXh0IG0tci01IHRleHQtc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiA6dGV4dD1cIid+JysgbG9jYXRpb24uZGlzdGFuY2UgKyAnbWknXCIvPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIxXCIgY2xhc3M9XCJoci1saWdodCBtLXQtNSBtLWItNVwiIGNvbFNwYW49XCIyXCIvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugcm93PVwiMlwiIDpzcmM9XCJsb2NhdGlvbi5pbWFnZVVSTFwiIHN0cmV0Y2g9XCJhc3BlY3RGaXRcIiBoZWlnaHQ9XCIxMjBcIiBjbGFzcz1cIm0tci0yMFwiIGxvYWRNb2RlPVwiYXN5bmNcIi8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCByb3c9XCIyXCIgY29sPVwiMVwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0tdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cIiosICpcIiBjb2x1bW5zPVwiKiwgNCpcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1hZGRyZXNzIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiMFwiIGNvbD1cIjBcIiB0ZXh0V3JhcD1cInRydWVcIiBjbGFzcz1cInAtYi0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZyBpb3MuZm9udEZhbWlseT1cInN5c3RlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiA6dGV4dD1cIidmYS1tYXAtbWFya2VyJyB8IGZvbnRpY29uXCIgY2xhc3M9XCJmYVwiPjwvU3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiMFwiIGNvbD1cIjFcIiB0ZXh0V3JhcD1cInRydWVcIiBjbGFzcz1cInAtYi0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZyBpb3MuZm9udEZhbWlseT1cInN5c3RlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiA6dGV4dD1cImxvY2F0aW9uLmFkZHJlc3NcIiAgY2xhc3M9XCJ0ZXh0LXByaW1hcnlcIj48L1NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAtLT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gcGhvbmUgbnVtYmVyLS0+ICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiMVwiIGNvbD1cIjBcIiB0ZXh0V3JhcD1cInRydWVcIiBjbGFzcz1cInAtYi0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZyBpb3MuZm9udEZhbWlseT1cInN5c3RlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIDp0ZXh0PVwiJ2ZhLXBob25lJyB8IGZvbnRpY29uXCIgY2xhc3M9XCJmYSBpY29uXCI+PC9TcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIxXCIgY29sPVwiMVwiIHRleHRXcmFwPVwidHJ1ZVwiIGNsYXNzPVwicC1iLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nIGlvcy5mb250RmFtaWx5PVwic3lzdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gOnRleHQ9XCJsb2NhdGlvbi5waG9uZVwiIGNsYXNzPVwiXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cInAtYi0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZyBpb3MuZm9udEZhbWlseT1cInN5c3RlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XCJcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAtLT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPC92LXRlbXBsYXRlPlxyXG5cclxuICAgICAgICAgICAgPC9SYWRMaXN0Vmlldz5cclxuPC9TdGFja0xheW91dD5cclxuICAgIDwvUGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbi8vIC0tLXBsdWdpbnMtLS1cclxuLy8gZ2VvbG9jYXRpb25cclxuaW1wb3J0ICogYXMgZ2VvbG9jYXRpb24gZnJvbSBcIm5hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvblwiO1xyXG5pbXBvcnQgeyBBY2N1cmFjeSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2VudW1zXCI7XHJcblxyXG4vLyB0b2FzdFxyXG5jb25zdCBUb2FzdCA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdG9hc3RzXCIpO1xyXG4vLy0tLS0tLS1cclxuXHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIkAvY29tcG9uZW50cy9idXR0b25zL0ljb25CdXR0b24udnVlXCJcclxuXHJcbmltcG9ydCBBbmltYWxDZW50ZXJEZXRhaWxzIGZyb20gXCJAL2NvbXBvbmVudHMvbG9jYXRpb24vQW5pbWFsQ2VudGVyRGV0YWlsc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAvL1RPRE86IFN0b3JlIGhhcmRjb2RlZCBjZW50ZXJsb2NhdGlvbnNcclxuICAgICAgY2VudGVyTG9jYXRpb25zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJBZ291cmFcIixcclxuICAgICAgICAgIGFkZHJlc3M6IFwiMjk1MjUgQWdvdXJhIFJvYWQsIEFnb3VyYSwgQ0EgOTEzMDFcIixcclxuICAgICAgICAgIHBob25lOiBcIig4MTgpIDk5MS0wMDcxXCIsXHJcbiAgICAgICAgICBhdmFpbGFiaWxpdHk6IHtcclxuICAgICAgICAgICAgd2Vla2RheTogXCJNb25kYXktVGh1cnNkYXlcIixcclxuICAgICAgICAgICAgd2Vla2VuZDogXCJGcmlkYXktU3VuZGF5XCIsXHJcbiAgICAgICAgICAgIHdlZWtkYXlob3VyczogXCIxMjowMCBwLm0uIC0gNzowMCBwLm1cIixcclxuICAgICAgICAgICAgd2Vla2VuZGhvdXJzOiBcIjEwOjAwIGEubS4gLSA1OjAwIHAubVwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgbGF0aXR1ZGU6IDM0LjE0NjAxNSxcclxuICAgICAgICAgIGxvbmdpdHVkZTogLTExOC43Njk0MjEsXHJcbiAgICAgICAgICBkaXN0YW5jZTogXCJcIixcclxuICAgICAgICAgIGltYWdlVVJMOiBcIn4vYXNzZXRzL2ltYWdlcy9hY2hvdXNlLnBuZ1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIkJhbGR3aW4gUGFya1wiLFxyXG4gICAgICAgICAgYWRkcmVzczogXCI0Mjc1IE5vcnRoIEVsdG9uIFN0cmVldCwgQmFsZHdpbiBQYXJrLCBDQSA5MTcwNlwiLFxyXG4gICAgICAgICAgcGhvbmU6IFwiKDYyNikgOTYyLTM1NzdcIixcclxuICAgICAgICAgIGF2YWlsYWJpbGl0eToge1xyXG4gICAgICAgICAgICB3ZWVrZGF5OiBcIk1vbmRheS1UaHVyc2RheVwiLFxyXG4gICAgICAgICAgICB3ZWVrZW5kOiBcIkZyaWRheS1TdW5kYXlcIixcclxuICAgICAgICAgICAgd2Vla2RheWhvdXJzOiBcIjEyOjAwIHAubS4gLSA3OjAwIHAubVwiLFxyXG4gICAgICAgICAgICB3ZWVrZW5kaG91cnM6IFwiMTA6MDAgYS5tLiAtIDU6MDAgcC5tXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBsYXRpdHVkZTogMzQuMDkxMzYyLFxyXG4gICAgICAgICAgbG9uZ2l0dWRlOiAtMTE3Ljk1MTEwNSxcclxuICAgICAgICAgIGRpc3RhbmNlOiBcIlwiLFxyXG4gICAgICAgICAgaW1hZ2VVUkw6IFwifi9hc3NldHMvaW1hZ2VzL2FjaG91c2UucG5nXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiQ2Fyc29uL0dhcmRlbmFcIixcclxuICAgICAgICAgIGFkZHJlc3M6IFwiMjE2IFcuIFZpY3RvcmlhIFN0cmVldCwgR2FyZGVuYSBDQSA5MDI0OFwiLFxyXG4gICAgICAgICAgcGhvbmU6IFwiKDMxMCkgNTIzLTk1NjZcIixcclxuICAgICAgICAgIGF2YWlsYWJpbGl0eToge1xyXG4gICAgICAgICAgICB3ZWVrZGF5OiBcIk1vbmRheS1UaHVyc2RheVwiLFxyXG4gICAgICAgICAgICB3ZWVrZW5kOiBcIkZyaWRheS1TdW5kYXlcIixcclxuICAgICAgICAgICAgd2Vla2RheWhvdXJzOiBcIjEyOjAwIHAubS4gLSA3OjAwIHAubVwiLFxyXG4gICAgICAgICAgICB3ZWVrZW5kaG91cnM6IFwiMTA6MDAgYS5tLiAtIDU6MDAgcC5tXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBsYXRpdHVkZTogMzMuODY0MzU1LFxyXG4gICAgICAgICAgbG9uZ2l0dWRlOiAtMTE4LjI3NzQxNCxcclxuICAgICAgICAgIGRpc3RhbmNlOiBcIlwiLFxyXG4gICAgICAgICAgaW1hZ2VVUkw6IFwifi9hc3NldHMvaW1hZ2VzL2FjaG91c2UucG5nXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiQ2FzdGFpY1wiLFxyXG4gICAgICAgICAgYWRkcmVzczogXCIzMTA0NCBOb3J0aCBDaGFybGllIENhbnlvbiBSb2FkLCBDYXN0YWljLCBDQSA5MTM4NFwiLFxyXG4gICAgICAgICAgcGhvbmU6IFwiKDY2MSkgMjU3LTMxOTFcIixcclxuICAgICAgICAgIGF2YWlsYWJpbGl0eToge1xyXG4gICAgICAgICAgICB3ZWVrZGF5OiBcIk1vbmRheS1UaHVyc2RheVwiLFxyXG4gICAgICAgICAgICB3ZWVrZW5kOiBcIkZyaWRheS1TdW5kYXlcIixcclxuICAgICAgICAgICAgd2Vla2RheWhvdXJzOiBcIjEyOjAwIHAubS4gLSA3OjAwIHAubVwiLFxyXG4gICAgICAgICAgICB3ZWVrZW5kaG91cnM6IFwiMTA6MDAgYS5tLiAtIDU6MDAgcC5tXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBsYXRpdHVkZTogMzQuNDgyODk5LFxyXG4gICAgICAgICAgbG9uZ2l0dWRlOiAtMTE4LjYwODM4NixcclxuICAgICAgICAgIGRpc3RhbmNlOiBcIlwiLFxyXG4gICAgICAgICAgaW1hZ2VVUkw6IFwifi9hc3NldHMvaW1hZ2VzL2FjaG91c2UucG5nXCJcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIkRvd25leVwiLFxyXG4gICAgICAgICAgYWRkcmVzczogXCIxMTI1OCBTb3V0aCBHYXJmaWVsZCBBdmVudWUsIERvd25leSwgQ0EgOTAyNDJcIixcclxuICAgICAgICAgIHBob25lOiBcIig1NjIpIDk0MC02ODk4XCIsXHJcbiAgICAgICAgICBhdmFpbGFiaWxpdHk6IHtcclxuICAgICAgICAgICAgd2Vla2RheTogXCJNb25kYXktVGh1cnNkYXlcIixcclxuICAgICAgICAgICAgd2Vla2VuZDogXCJGcmlkYXktU3VuZGF5XCIsXHJcbiAgICAgICAgICAgIHdlZWtkYXlob3VyczogXCIxMjowMCBwLm0uIC0gNzowMCBwLm1cIixcclxuICAgICAgICAgICAgd2Vla2VuZGhvdXJzOiBcIjEwOjAwIGEubS4gLSA1OjAwIHAubVwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgbGF0aXR1ZGU6IDMzLjkzNjU2LFxyXG4gICAgICAgICAgbG9uZ2l0dWRlOiAtMTE4LjEzMzg3LFxyXG4gICAgICAgICAgZGlzdGFuY2U6IFwiXCIsXHJcbiAgICAgICAgICBpbWFnZVVSTDogXCJ+L2Fzc2V0cy9pbWFnZXMvYWNob3VzZS5wbmdcIlxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiTGFuY2FzdGVyXCIsXHJcbiAgICAgICAgICBhZGRyZXNzOiBcIjUyMTAgV2VzdCBBdmVudWUgSSwgTGFuY2FzdGVyLCBDQSA5MzUzNlwiLFxyXG4gICAgICAgICAgcGhvbmU6IFwiKDY2MSkgOTQwLTQxOTFcIixcclxuICAgICAgICAgIGF2YWlsYWJpbGl0eToge1xyXG4gICAgICAgICAgICB3ZWVrZGF5OiBcIk1vbmRheS1UaHVyc2RheVwiLFxyXG4gICAgICAgICAgICB3ZWVrZW5kOiBcIkZyaWRheS1TdW5kYXlcIixcclxuICAgICAgICAgICAgd2Vla2RheWhvdXJzOiBcIjEyOjAwIHAubS4gLSA3OjAwIHAubVwiLFxyXG4gICAgICAgICAgICB3ZWVrZW5kaG91cnM6IFwiMTA6MDAgYS5tLiAtIDU6MDAgcC5tXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBsYXRpdHVkZTogMzQuNzAzMjM5LFxyXG4gICAgICAgICAgbG9uZ2l0dWRlOiAtMTE4LjIyMjY1LFxyXG4gICAgICAgICAgZGlzdGFuY2U6IFwiXCIsXHJcbiAgICAgICAgICBpbWFnZVVSTDogXCJ+L2Fzc2V0cy9pbWFnZXMvYWNob3VzZS5wbmdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJQYWxtZGFsZVwiLFxyXG4gICAgICAgICAgYWRkcmVzczogXCIzODU1MCBTaWVycmEgSGlnaHdheSwgUGFsbWRhbGUsIENBIDkzNTUwXCIsXHJcbiAgICAgICAgICBwaG9uZTogXCIoNjYxKSA1NzUtMjg4OFwiLFxyXG4gICAgICAgICAgYXZhaWxhYmlsaXR5OiB7XHJcbiAgICAgICAgICAgIHdlZWtkYXk6IFwiTW9uZGF5LVRodXJzZGF5XCIsXHJcbiAgICAgICAgICAgIHdlZWtlbmQ6IFwiRnJpZGF5LVN1bmRheVwiLFxyXG4gICAgICAgICAgICB3ZWVrZGF5aG91cnM6IFwiMTI6MDAgcC5tLiAtIDc6MDAgcC5tXCIsXHJcbiAgICAgICAgICAgIHdlZWtlbmRob3VyczogXCIxMDowMCBhLm0uIC0gNTowMCBwLm1cIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGxhdGl0dWRlOiAzNC41ODI2LFxyXG4gICAgICAgICAgbG9uZ2l0dWRlOiAtMTE4LjExNzEsXHJcbiAgICAgICAgICBkaXN0YW5jZTogXCJcIixcclxuICAgICAgICAgIGltYWdlVVJMOiBcIn4vYXNzZXRzL2ltYWdlcy9hY2hvdXNlLnBuZ1wiXHJcbiAgICAgICAgfVxyXG4gICAgICBdLFxyXG4gICAgICBjdXJyZW50TG9jOiB7fSAvLyBjdXJyZW50IGxvY2F0aW9uIG9ialxyXG4gICAgfTtcclxuICB9LFxyXG4gIGNvbXBvbmVudHM6IHtcclxuICAgIEljb25CdXR0b25cclxuICB9LFxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICBjZW50ZXJMaXN0KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5idXR0b25HZXRMb2NhdGlvblRhcDtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBtZXRob2RzOiB7XHJcbiAgICBlbmFibGVMb2NhdGlvblRhcDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIGdlb2xvY2F0aW9uLmlzRW5hYmxlZCgpLnRoZW4oXHJcbiAgICAgICAgZnVuY3Rpb24oaXNFbmFibGVkKSB7XHJcbiAgICAgICAgICBpZiAoIWlzRW5hYmxlZCkge1xyXG4gICAgICAgICAgICBnZW9sb2NhdGlvbi5lbmFibGVMb2NhdGlvblJlcXVlc3QoKS50aGVuKFxyXG4gICAgICAgICAgICAgIGZ1bmN0aW9uKCkge30sXHJcbiAgICAgICAgICAgICAgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIgKyAoZS5tZXNzYWdlIHx8IGUpKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIChlLm1lc3NhZ2UgfHwgZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH0sXHJcbiAgICAvLyBUT0RPOiBvcHRpbWl6ZTsgdGhpcyBzaG91bGQgYmUgYWxyZWFkeSBjb21wdXRlZCBiZWZvcmUgY2xpY2tpbmcgYnV0dG9uXHJcbiAgICBidXR0b25HZXREaXN0YW5jZVRvQ2FyZUNlbnRlcnNUYXA6IGZ1bmN0aW9uKCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICBcImJ1dHRvbkdldERpc3RhbmNlVG9DYXJlQ2VudGVyc1RhcCgpLCBnZXR0aW5nIGxpc3Qgb2YgYW5pbWFsIGNhcmUgY2VudGVyczsgc29ydGVkIGJ5IGRpc3RhbmNlXCJcclxuICAgICAgKTtcclxuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgY29uc3QgbWV0ZXJzVG9NaWxlc0NvbnZlcnNpb25SYXRlID0gMTYwOS4zNDQ7XHJcblxyXG4gICAgICBnZW9sb2NhdGlvblxyXG4gICAgICAgIC5nZXRDdXJyZW50TG9jYXRpb24oe1xyXG4gICAgICAgICAgZGVzaXJlZEFjY3VyYWN5OiBBY2N1cmFjeS5hbnksXHJcbiAgICAgICAgICBtYXhpbXVtQWdlOiA1MDAwLFxyXG4gICAgICAgICAgdGltZW91dDogMTAwMDBcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgZnVuY3Rpb24obG9jKSB7XHJcbiAgICAgICAgICAgIGlmIChsb2MpIHtcclxuICAgICAgICAgICAgICAvL2dldCBjdXJyZW50IGxvY2F0aW9uXHJcbiAgICAgICAgICAgICAgdGhhdC5jdXJyZW50TG9jLmxhdGl0dWRlID0gcGFyc2VGbG9hdChsb2MubGF0aXR1ZGUpO1xyXG4gICAgICAgICAgICAgIHRoYXQuY3VycmVudExvYy5sb25naXR1ZGUgPSBwYXJzZUZsb2F0KGxvYy5sb25naXR1ZGUpO1xyXG5cclxuICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoYXQuY2VudGVyTG9jYXRpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjZW50ZXJMb2MgPSB0aGF0LmNlbnRlckxvY2F0aW9uc1tpXTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBjYWxjIGRpc3RhbmNlIGZvcmVhY2ggYW5pbWFsIHNoZWx0ZXJcclxuICAgICAgICAgICAgICAgIGNlbnRlckxvYy5kaXN0YW5jZSA9XHJcbiAgICAgICAgICAgICAgICAgIGdlb2xvY2F0aW9uLmRpc3RhbmNlKFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGxhdGl0dWRlOiB0aGF0LmN1cnJlbnRMb2MubGF0aXR1ZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBsb25naXR1ZGU6IHRoYXQuY3VycmVudExvYy5sb25naXR1ZGVcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGxhdGl0dWRlOiBjZW50ZXJMb2MubGF0aXR1ZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBsb25naXR1ZGU6IGNlbnRlckxvYy5sb25naXR1ZGVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICkgLyBtZXRlcnNUb01pbGVzQ29udmVyc2lvblJhdGU7IC8vIGRpdmlkZSBieSBjb252ZXJzaW9uIHJhdGVcclxuXHJcbiAgICAgICAgICAgICAgICAvLyByb3VuZCBkaXN0YW5jZVxyXG4gICAgICAgICAgICAgICAgY2VudGVyTG9jLmRpc3RhbmNlID0gTnVtYmVyKFxyXG4gICAgICAgICAgICAgICAgICBNYXRoLnJvdW5kKGNlbnRlckxvYy5kaXN0YW5jZSArIFwiZTJcIikgKyBcImUtMlwiXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvLyBzb3J0IGxpc3QgYnkgZGlzdGFuY2VcclxuICAgICAgICAgICAgICB0aGF0LmNlbnRlckxvY2F0aW9ucy5zb3J0KFxyXG4gICAgICAgICAgICAgICAgKGxvYzEsIGxvYzIpID0+XHJcbiAgICAgICAgICAgICAgICAgIGxvYzEuZGlzdGFuY2UgPiBsb2MyLmRpc3RhbmNlXHJcbiAgICAgICAgICAgICAgICAgICAgPyAxXHJcbiAgICAgICAgICAgICAgICAgICAgOiBsb2MyLmRpc3RhbmNlID4gbG9jMS5kaXN0YW5jZSA/IC0xIDogMFxyXG4gICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgIC8vIHRvYXN0IHRvIG5vdGlmeSBsaXN0IHdhcyBzb3J0ZWQgYnkgZGlzdGFuY2VcclxuICAgICAgICAgICAgICAvLyBUT0RPOiBidWdmaXggd2hlbiBzcGFtbWluZyBidXR0b24gdGhlcmUgY2FuIGJlIGEgZmluaXRlIGFtb3VudCBvZiBUb2FzdHMgdGhhdCBjb25zdGFudGx5IGFwcGVhclxyXG4gICAgICAgICAgICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJTb3J0ZWQgYnkgRGlzdGFuY2VcIixcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBUb2FzdC5EVVJBVElPTi5TSE9SVCxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBUb2FzdC5QT1NJVElPTi5DRU5URVIgLy9vcHRpb25hbFxyXG4gICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgVG9hc3Quc2hvdyhvcHRpb25zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIgKyAoZS5tZXNzYWdlIHx8IGUpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkl0ZW1UYXAoZSkge1xyXG4gICAgICAvLyBOYXZpZ2F0ZSB0byBBbmltYWxDZW50ZXJEZXRhaWxzXHJcbiAgICAgIGNvbnNvbGUubG9nKFwib25JdGVtVGFwKGUpLCBuYXZpZ2F0ZVRvIFwiICsgSlNPTi5zdHJpbmdpZnkoZS5pdGVtKSk7XHJcbiAgICAgIHRoaXMuJGVtaXQoXCJzZWxlY3RcIiwgZS5pdGVtKTsgLy8geW91IE5FRUQgdG8gdXNlIGUuaXRlbSAoZS5sb2NhdGlvbiBpcyB1bmRlZmluZWQpXHJcbiAgICAgIHRoaXMuJG5hdmlnYXRlVG8oQW5pbWFsQ2VudGVyRGV0YWlscywge1xyXG4gICAgICAgIHByb3BzOiB7IEFuaW1hbENlbnRlcjogZS5pdGVtIH0sXHJcbiAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXHJcbiAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgbmFtZTogXCJzbGlkZVwiLFxyXG4gICAgICAgICAgZHVyYXRpb246IDM4MCxcclxuICAgICAgICAgIGN1cnZlOiBcImVhc2VJblwiXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxyXG5AaW1wb3J0IFwiLi4vQW5pbWFsQ2VudGVyXCI7XHJcblxyXG5BY3Rpb25CYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDlmY2E7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5pY29ue1xyXG4gIG1hcmdpbi1yaWdodDogNVxyXG59XHJcblxyXG4uZ3BzLWJ1dHRvbntcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgbGlnaHRncmF5LCB3aGl0ZSk7XHJcbiAgY29sb3I6ICRob21lcGFnZS1ibHVlO1xyXG4gIGJvcmRlci13aWR0aDogMTtcclxuICBib3JkZXItY29sb3I6IGdyYXk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjUlO1xyXG4gIG1hcmdpbjogMTA7XHJcbn1cclxuXHJcbi5saXN0LWdyb3VwIHtcclxuICAubGlzdC1ncm91cC1pdGVtLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogOCAxNSA0IDE1O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtbGlnaHQ7XHJcbiAgfVxyXG5cclxuICAubGlzdC1ncm91cC1pdGVtLXRleHQge1xyXG4gICAgbWFyZ2luOiAyIDM7XHJcbiAgfVxyXG5cclxuICAuaG9tZXBhZ2UtYmx1ZSB7XHJcbiAgICBjb2xvcjogJGhvbWVwYWdlLWJsdWU7XHJcbiAgfVxyXG59XHJcblxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgICA8UGFnZSBjbGFzcz1cInBhZ2VcIj5cclxuICAgICAgICA8QWN0aW9uQmFyPlxyXG4gICAgICAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uIEB0YXA9XCIkbmF2aWdhdGVCYWNrKClcIiBhbmRyb2lkLnN5c3RlbUljb249XCJpY19tZW51X2JhY2tcIiAvPlxyXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cIlNlcnZpY2UgUmVxdWVzdFwiIGZvbnRTaXplPVwiMjBcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiLz5cclxuICAgICAgICA8L0FjdGlvbkJhcj5cclxuXHJcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaG9tZS1wYW5lbFwiPlxyXG4gICAgICAgICAgICA8V2ViVmlldyBoZWlnaHQ9XCI4MTkycHhcIiBzcmM9XCJodHRwOi8vYW5pbWFsY2FyZS5sYWNvdW50eS5nb3Yvc2VydmljZS1yZXF1ZXN0L1wiIC8+XHJcbiAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgIDwvUGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHt9O1xyXG4gIH1cclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4uaG9tZS1wYW5lbCB7XHJcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDIwO1xyXG59XHJcblxyXG5BY3Rpb25CYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDlmY2E7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgPFBhZ2U+XHJcbiAgICA8QWN0aW9uQmFyIDp0aXRsZT1cImFjdGlvbkJhclwiLz5cclxuICAgICAgPFN0YWNrTGF5b3V0PlxyXG4gICAgICAgIDxMYWJlbCBjbGFzcz1cIm1zZ1wiPldlIGFwb2xvZ2l6ZS4gVGhlIHF1ZXN0aW9uIHlvdSBhcmUgc2VhcmNoaW5nIGZvciBoYXMgbm90IGJlZW4gYW5zd2VyZWQgeWV0LiBUYWtlIHRoaXMgdGlja2V0IGlmIHlvdSB3YW50IHRvIHN1Ym1pdCB0aGlzIHF1ZXN0aW9uIGFuZCBnZXQgYW4gYW5zd2VyIGZyb20gdGhlIGZyb250IGRlc2suPC9MYWJlbD5cclxuICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVwiKiwqXCIgcm93cz1cIiosKiwqXCI+XHJcbiAgICAgICAgICA8Q2F0ZWdvcnlCdXR0b24gcm93PVwiMFwiIGNvbD1cIjBcIiA6dGl0bGU9XCJ0aXRsZXNbMF1cIiA6YWN0aW9uPVwidG9GYXFcIiBiYWNrZ3JvdW5kQ29sb3I9XCIjZmYwMDAwXCIgLz5cclxuICAgICAgICAgIDxDYXRlZ29yeUJ1dHRvbiByb3c9XCIwXCIgY29sPVwiMVwiIDp0aXRsZT1cInRpdGxlc1sxXVwiIDphY3Rpb249XCJzdWJtaXRUaWNrZXRcIiBiYWNrZ3JvdW5kQ29sb3I9XCIjNkFGRjVBXCIgLz5cclxuICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHsgbWFwU3RhdGUsIG1hcEFjdGlvbnMsIG1hcE11dGF0aW9ucyB9IGZyb20gJ3Z1ZXgnXHJcbmltcG9ydCBDYXRlZ29yeUJ1dHRvbiBmcm9tICdAL2NvbXBvbmVudHMvYnV0dG9ucy9DYXRlZ29yeUJ1dHRvbi52dWUnXHJcbmltcG9ydCBUaWNrZXQgZnJvbSAnQC9tb2RlbHMvVGlja2V0J1xyXG5pbXBvcnQgRmFxIGZyb20gJy4vRmFxLnZ1ZSdcclxuaW1wb3J0IEhvbWUgZnJvbSAnLi9Ib21lLnZ1ZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBkYXRhICgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGFjdGlvbkJhcjogJ1RpY2tldCcsXHJcbiAgICAgIHRpdGxlczogWydObycsICdZZXMnXSxcclxuICAgICAgZmFxOiBGYXEsXHJcbiAgICAgIGhvbWU6IEhvbWVcclxuICAgIH1cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIC4uLm1hcEFjdGlvbnMoWydhZGRGYXEnLCAnYWRkVGlja2V0J10pLFxyXG4gICAgLi4ubWFwTXV0YXRpb25zKFsnc3RvcmVUaWNrZXQnXSksXHJcbiAgICBzdWJtaXRUaWNrZXQgKCkge1xyXG4gICAgICB0aGlzLmFkZEZhcSh0aGlzLnVzZXJGYXEpXHJcbiAgICAgIGNvbnN0IHRpY2tldCA9IG5ldyBUaWNrZXQodGhpcy51c2VyRmFxLnF1ZXN0aW9uKVxyXG4gICAgICB0aGlzLnN0b3JlVGlja2V0KHRpY2tldClcclxuICAgICAgdGhpcy5hZGRUaWNrZXQodGlja2V0KVxyXG4gICAgICB0aGlzLiRuYXZpZ2F0ZVRvKHRoaXMuaG9tZSlcclxuICAgICAgYWxlcnQoe1xyXG4gICAgICAgIHRpdGxlOiAnQWxlcnQnLFxyXG4gICAgICAgIG1lc3NhZ2U6ICdZb3UgaGF2ZSBzdWNjZXNzZnVsbHkgc3VibWl0dGVkIGEgdGlja2V0IScsXHJcbiAgICAgICAgb2tCdXR0b25UZXh0OiAnT0snXHJcbiAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdpZDonLCB0aGlzLnVzZXJUaWNrZXQuaWQpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3RpbWUgaW5zZXJ0ZWQ6JywgdGhpcy51c2VyVGlja2V0LnRpbWVJbilcclxuICAgICAgICBjb25zb2xlLmxvZygncXVlc3Rpb246JywgdGhpcy51c2VyVGlja2V0LnF1ZXN0aW9uKVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIHRvRmFxICgpIHtcclxuICAgICAgdGhpcy4kbmF2aWdhdGVUbyh0aGlzLmZhcSlcclxuICAgIH1cclxuICB9LFxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICAuLi5tYXBTdGF0ZShbJ3VzZXJGYXEnLCAndGlja2V0cycsICd1c2VyVGlja2V0J10pXHJcbiAgfSxcclxuICBjb21wb25lbnRzOiB7XHJcbiAgICBDYXRlZ29yeUJ1dHRvbixcclxuICAgIEZhcSxcclxuICAgIEhvbWVcclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4gIC5tc2cge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMDtcclxuICB9XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8UGFnZT5cclxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XCJUaWNrZXQgUHJvY2Vzc2luZ1wiIC8+XHJcbiAgICA8U3RhY2tMYXlvdXQ+XHJcbiAgICAgIDxMYWJlbCB0ZXh0PVwiUGhvbmUgbnVtYmVyOlwiIC8+XHJcbiAgICAgIDxUZXh0VmlldyB2LW1vZGVsPVwicGhvbmVcIiAvPlxyXG5cclxuICAgICAgPExhYmVsIHRleHQ9XCJGaXJzdCBhbmQgbGFzdCBuYW1lOlwiIC8+XHJcbiAgICAgIDxUZXh0VmlldyB2LW1vZGVsPVwibmFtZVwiIC8+XHJcblxyXG4gICAgICA8TGFiZWwgdi1pZj1cInF1ZXJ5XCIgdGV4dD1cInF1ZXJ5OlwiIC8+XHJcbiAgICAgIDxMYWJlbCB0ZXh0V3JhcD1cInRydWVcIj57e3F1ZXJ5fX08L0xhYmVsPlxyXG4gICAgICBcclxuICAgICAgPEJ1dHRvbiBAdGFwPVwic3VibWl0VGlja2V0XCIgdGV4dD1cIlN1Ym1pdCBUaWNrZXRcIi8+XHJcbiAgICA8L1N0YWNrTGF5b3V0PlxyXG4gIDwvUGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCB7IG1hcFN0YXRlLCBtYXBBY3Rpb25zLCBtYXBNdXRhdGlvbnMgfSBmcm9tICd2dWV4J1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuL0hvbWUudnVlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGRhdGEgKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcGhvbmU6ICcnLFxyXG4gICAgICBuYW1lOiAnJyxcclxuICAgICAgaG9tZTogSG9tZSxcclxuICAgICAgbGltaXQ6IDBcclxuICAgIH1cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIC4uLm1hcEFjdGlvbnMoWydhZGRUaWNrZXQnXSksXHJcbiAgICAvLyB0aGlzLnNldFRpY2tldEluZm8ob2JqZWN0KSwgd2hlcmUgb2JqZWN0IGNvbnRhaW5zIHBob25lLCBuYW1lLCBxdWVyeSwgY29tbWVudCBwcm9wZXJ0aWVzLFxyXG4gICAgc3VibWl0VGlja2V0ICgpIHtcclxuXHJcbiAgICAgIHRoaXMuJG5hdmlnYXRlVG8odGhpcy5ob21lKVxyXG5cclxuICAgICAgdGhpcy5hZGRUaWNrZXQoe1xyXG4gICAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgICBwaG9uZTogdGhpcy5waG9uZSxcclxuICAgICAgICBxdWVyeTogdGhpcy5xdWVyeSxcclxuICAgICAgICBsb2NhdGlvbjogdGhpcy5sb2NhdGlvblxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIC4uLm1hcFN0YXRlKFsndXNlclRpY2tldCcsICdhcHByb3ZlZFRpY2tldCcsICdsb2NhdGlvbiddKVxyXG4gIH0sXHJcbiAgd2F0Y2g6IHtcclxuICAgIGFwcHJvdmVkVGlja2V0KG5ld1ZhbCwgb2xkVmFsKSB7XHJcbiAgICAgIGlmICh0aGlzLmxpbWl0IDwgMSkge1xyXG4gICAgICAgIGlmIChuZXdWYWwgIT09IG51bGwpIHtcclxuICAgICAgICAgIGFsZXJ0KHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiVGlja2V0IFN1Ym1pdHRlZFwiLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkhlbGxvIFwiICsgbmV3VmFsLm5hbWUgKyBcIiwgeW91J3JlIHRpY2tldCAjIGlzIFwiICsgbmV3VmFsLm51bWJlclxyXG4gICAgICAgICAgICArIFwiLiBZb3Ugd2lsbCBiZSBzZXJ2ZWQgYXQgd2luZG93IFwiICsgKG5ld1ZhbC53aW5kb3cgKyAxKSArIFwiLlwiLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYWxlcnQoe1xyXG4gICAgICAgICAgICB0aXRsZTogXCJObyBzZXJ2aWNlXCIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiVGhlcmUgYXJlIGN1cnJlbnRseSBubyBlbXBsb3llZXMgc2VydmluZyB0aWNrZXRzXCIsXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLmxpbWl0KytcclxuICAgIH1cclxuICB9LFxyXG4gIHByb3BzOiB7XHJcbiAgICBxdWVyeTogU3RyaW5nXHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8UGFnZT5cclxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XCJUaWNrZXQgUmVhc29uXCIgLz5cclxuICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XCIqXCIgcm93cz1cImF1dG8sIGF1dG8sIGF1dG8sIGF1dG9cIj5cclxuICAgICAgPExhYmVsIGNsYXNzPVwibXNnXCIgdGV4dFdyYXA9XCJ0cnVlXCIgcm93PVwiMFwiPllvdSBhcmUgYXQgdGhlIHt7c2l0ZX19IEFuaW1hbCBDYXJlIGFuZCBDb250cm9sIENlbnRlci48L0xhYmVsPlxyXG5cclxuICAgICAgPExpc3RQaWNrZXIgcm93PVwiMVwiIDppdGVtcz1cImNob2ljZXNcIiBzZWxlY3RlZEluZGV4PVwiMFwiXHJcbiAgICAgICAgQHNlbGVjdGVkSW5kZXhDaGFuZ2U9XCJzZWxlY3RlZEluZGV4Q2hhbmdlZFwiIHYtbW9kZWw9XCJzZWxlY3RlZEluZGV4XCIgLz5cclxuXHJcbiAgICAgIDxMYWJlbCBjbGFzcz1cIm1zZ1wiIHJvdz1cIjJcIiB0ZXh0PVwiWW91IGFyZSBhbHdheXMgYWxsb3dlZCB0byBnbyB0byB0aGUga2VubmVscyB3aXRob3V0IGFza2luZ1wiXHJcbiAgICAgICAgdi1pZj1cIiFpc1RpY2tldFwiIHRleHRXcmFwPVwidHJ1ZVwiIC8+XHJcblxyXG4gICAgICA8U3RhY2tMYXlvdXQgcm93PVwiM1wiIHYtaWY9XCJpc1RpY2tldFwiPlxyXG4gICAgICAgIDxMYWJlbCBjbGFzcz1cIm1zZ1wiIHRleHQ9XCJUZWxsIHVzIGFib3V0IHdoYXQgeW91IHdvdWxkIGxpa2UgdG8ga25vd1wiIHRleHRXcmFwPVwidHJ1ZVwiLz5cclxuXHJcbiAgICAgICAgPFRleHRWaWV3IHYtbW9kZWw9XCJvdGhlclRleHRcIiAvPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxCdXR0b24gdGV4dD1cIkhvbWVcIiBAdGFwPVwidG9Ib21lXCIgLz5cclxuICAgICAgICA8QnV0dG9uIHRleHQ9XCJDcmVhdGUgVGlja2V0XCIgQHRhcD1cImNyZWF0ZVRpY2tldFwiIC8+XHJcbiAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IEhvbWUgZnJvbSAnLi9Ib21lLnZ1ZSdcclxuaW1wb3J0IFRpY2tldEZvcm0gZnJvbSAnLi9UaWNrZXRGb3JtLnZ1ZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBkYXRhICgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNob2ljZXM6IFtcclxuICAgICAgICAnQ2FuIEkgZ28gdG8gdGhlIGtlbm5lbD8nLFxyXG4gICAgICAgICdvdGhlcidcclxuICAgICAgXSxcclxuICAgICAgb3RoZXJUZXh0OiAnJyxcclxuICAgICAgc2VsZWN0ZWRJbmRleDogMCxcclxuICAgICAgaXNUaWNrZXQ6IGZhbHNlLFxyXG4gICAgICBob21lOiBIb21lLFxyXG4gICAgICB0aWNrZXRGb3JtOiBUaWNrZXRGb3JtLFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgdG9Ib21lICgpIHtcclxuICAgICAgdGhpcy4kbmF2aWdhdGVUbyh0aGlzLmhvbWUpXHJcbiAgICB9LFxyXG4gICAgY3JlYXRlVGlja2V0ICgpIHtcclxuICAgICAgdGhpcy4kbmF2aWdhdGVUbyh0aGlzLnRpY2tldEZvcm0sIHsgcHJvcHM6IHsgcXVlcnk6IHRoaXMub3RoZXJUZXh0IH0gfSlcclxuICAgIH0sXHJcbiAgICBzZWxlY3RlZEluZGV4Q2hhbmdlZCAoKSB7XHJcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXggPT09IDEpXHJcbiAgICAgICAgdGhpcy5pc1RpY2tldCA9IHRydWVcclxuICAgICAgZWxzZVxyXG4gICAgICAgIHRoaXMuaXNUaWNrZXQgPSBmYWxzZVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgcHJvcHM6IHtcclxuICAgIHNpdGU6IFN0cmluZ1xyXG4gIH1cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgLm1zZyB7XHJcbiAgICBmb250LXNpemU6IDE4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuPC9zdHlsZT5cclxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKipcXHJcXG4gKiBDb252ZW5pZW50IHNpbmdsZSBpbXBvcnQgZm9yIGxpZ2h0IHZhcmlhYmxlc1xcclxcbiAqIEluY2x1ZGVzIGJhc2UgdmFyaWFibGVzIHdpdGggbGlnaHQgb3ZlcnJpZGVzXFxyXFxuICoqL1xcbi8qKlxcclxcbiAqIExpZ2h0IHZhcmlhYmxlIG92ZXJyaWRlc1xcclxcbiAqKi9cXG4vKipcXHJcXG4gKiBUaGVtZSB2YXJpYWJsZXMgb3ZlcnJpZGVzXFxyXFxuKiovXFxuLmFuaW0tY292ZXJbZGF0YS12LTVmZjdkMTVjXSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGtleS1jb3Zlci1kYXRhLXYtNWZmN2QxNWM7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDE7XFxuICBhbmltYXRpb24tZGVsYXk6IDAuNTtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG5Aa2V5ZnJhbWVzIGtleS1jb3Zlci1kYXRhLXYtNWZmN2QxNWMge1xcbjAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTAwKSBzY2FsZSgwLCAwKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbjMwJSB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG4xMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSwgMSk7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG59XFxuLmFuaW0tY29udGVudDFbZGF0YS12LTVmZjdkMTVjXSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGtleS1jb250ZW50LWRhdGEtdi01ZmY3ZDE1YztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTtcXG4gIGFuaW1hdGlvbi1kZWxheTogMC43NTtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG4uYW5pbS1jb250ZW50MltkYXRhLXYtNWZmN2QxNWNdIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBhbmltYXRpb24tbmFtZToga2V5LWNvbnRlbnQtZGF0YS12LTVmZjdkMTVjO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjA7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxuLmFuaW0tY29udGVudDNbZGF0YS12LTVmZjdkMTVjXSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGtleS1jb250ZW50LWRhdGEtdi01ZmY3ZDE1YztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTtcXG4gIGFuaW1hdGlvbi1kZWxheTogMS4yNTtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG4uYW5pbS1jb250ZW50NFtkYXRhLXYtNWZmN2QxNWNdIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBhbmltYXRpb24tbmFtZToga2V5LWNvbnRlbnQtZGF0YS12LTVmZjdkMTVjO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjU7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxuQGtleWZyYW1lcyBrZXktY29udGVudC1kYXRhLXYtNWZmN2QxNWMge1xcbjAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAsIDUwKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbjEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbn1cXG4udGl0bGVbZGF0YS12LTVmZjdkMTVjXSB7XFxuICBmb250LXNpemU6IDE4ZW07XFxuICBjb2xvcjogIzBGMzM2RDtcXG59XFxuLnN0YWNrW2RhdGEtdi01ZmY3ZDE1Y10ge1xcbiAgcGFkZGluZy10b3A6IDE0O1xcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMTtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNkNGQ0ZDQ7XFxufVxcbi5zdGFjay1ob3Vyc1tkYXRhLXYtNWZmN2QxNWNdIHtcXG4gIHBhZGRpbmctdG9wOiA2O1xcbn1cXG4uaG91cnNbZGF0YS12LTVmZjdkMTVjXSB7XFxuICBjb2xvcjogIzAyMjczNDtcXG59XFxuQWN0aW9uQmFyW2RhdGEtdi01ZmY3ZDE1Y10ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOWZjYTtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICA7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9sb2NhdGlvbi9BbmltYWxDZW50ZXJEZXRhaWxzLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKipcXHJcXG4gKiBDb252ZW5pZW50IHNpbmdsZSBpbXBvcnQgZm9yIGxpZ2h0IHZhcmlhYmxlc1xcclxcbiAqIEluY2x1ZGVzIGJhc2UgdmFyaWFibGVzIHdpdGggbGlnaHQgb3ZlcnJpZGVzXFxyXFxuICoqL1xcbi8qKlxcclxcbiAqIExpZ2h0IHZhcmlhYmxlIG92ZXJyaWRlc1xcclxcbiAqKi9cXG4vKipcXHJcXG4gKiBUaGVtZSB2YXJpYWJsZXMgb3ZlcnJpZGVzXFxyXFxuKiovXFxuLmZhcV9xdWVzdGlvbltkYXRhLXYtMGE0YmIyNDVdIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAyMDtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuLmZhcV9hbnN3ZXJbZGF0YS12LTBhNGJiMjQ1XSB7XFxuICBjb2xvcjogIzQ1NDU0NTtcXG59XFxuLmxpc3QtZ3JvdXAtaXRlbS10ZXh0W2RhdGEtdi0wYTRiYjI0NV0ge1xcbiAgbWFyZ2luOiAyIDM7XFxufVxcbi5saXN0LWdyb3VwLWl0ZW0tY29udGVudFtkYXRhLXYtMGE0YmIyNDVdIHtcXG4gIHBhZGRpbmc6IDggMTUgNCAxNTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxufVxcbi5ob21lcGFnZS1ibHVlW2RhdGEtdi0wYTRiYjI0NV0ge1xcbiAgY29sb3I6ICMwNzgzZjg7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIDtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL3N1Ymxpc3RzL0ZhcUluZm8udnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcclxcbiAqIENvbnZlbmllbnQgc2luZ2xlIGltcG9ydCBmb3IgbGlnaHQgdmFyaWFibGVzXFxyXFxuICogSW5jbHVkZXMgYmFzZSB2YXJpYWJsZXMgd2l0aCBsaWdodCBvdmVycmlkZXNcXHJcXG4gKiovXFxuLyoqXFxyXFxuICogTGlnaHQgdmFyaWFibGUgb3ZlcnJpZGVzXFxyXFxuICoqL1xcbi8qKlxcclxcbiAqIFRoZW1lIHZhcmlhYmxlcyBvdmVycmlkZXNcXHJcXG4qKi9cXG5BY3Rpb25CYXJbZGF0YS12LWUzOWQxMDkyXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5ZmNhO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcbi5tZXNzYWdlW2RhdGEtdi1lMzlkMTA5Ml0ge1xcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjA7XFxuICBjb2xvcjogIzAwMDAwMDtcXG59XFxuLmZhcV9xdWVzdGlvbltkYXRhLXYtZTM5ZDEwOTJdIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAyMDtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuLmZhcV9hbnN3ZXJbZGF0YS12LWUzOWQxMDkyXSB7XFxuICBjb2xvcjogIzQ1NDU0NTtcXG59XFxuLmxpc3QtZ3JvdXAtaXRlbS10ZXh0W2RhdGEtdi1lMzlkMTA5Ml0ge1xcbiAgbWFyZ2luOiA3IDg7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIDtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi92aWV3cy9GYXEudnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcclxcbiAqIENvbnZlbmllbnQgc2luZ2xlIGltcG9ydCBmb3IgbGlnaHQgdmFyaWFibGVzXFxyXFxuICogSW5jbHVkZXMgYmFzZSB2YXJpYWJsZXMgd2l0aCBsaWdodCBvdmVycmlkZXNcXHJcXG4gKiovXFxuLyoqXFxyXFxuICogTGlnaHQgdmFyaWFibGUgb3ZlcnJpZGVzXFxyXFxuICoqL1xcbi8qKlxcclxcbiAqIFRoZW1lIHZhcmlhYmxlcyBvdmVycmlkZXNcXHJcXG4qKi9cXG4uQWN0aW9uX0JhcltkYXRhLXYtMmYyYmU3ZTRdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDlmY2E7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuLlNfQmFyW2RhdGEtdi0yZjJiZTdlNF0ge1xcbiAgY29sb3I6ICMwNTA1MDU7XFxufVxcbi5TX0J1dHRvbltkYXRhLXYtMmYyYmU3ZTRdIHtcXG4gIC8qIHRleHQ9XFxcInJpZ2h0XFxcIjsgXFxyXFxuICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJyaWdodFxcXCI7XFxyXFxuICAgICAgICB3aWR0aD1cXFwiMzMlXFxcIiBcXHJcXG4gICAgICAgIGhlaWdodD1cXFwiNzBcXFwiIFxcclxcbiAgICAgICAgLypiYWNrZ3JvdW5kQ29sb3I9XFxcIiMxYzZiNDhcXFwiLz4qL1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJ+L2Fzc2V0cy9pbWFnZXMvTmF0aXZlU2NyaXB0LVZ1ZS5wbmdcXFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG4uY292ZXJbZGF0YS12LTJmMmJlN2U0XSB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHBsdW0sICMwMDlmY2EpO1xcbn1cXG4uaG9tZXBhZ2UtYmx1ZVtkYXRhLXYtMmYyYmU3ZTRdIHtcXG4gIGNvbG9yOiAjMDc4M2Y4O1xcbn1cXG4uQWN0aW9uX1RleHRbZGF0YS12LTJmMmJlN2U0XSB7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxufVxcbi5Ib21lQnV0dG9uW2RhdGEtdi0yZjJiZTdlNF0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAyNTtcXG4gIGZvbnQtc2l6ZTogMTQlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nLXRvcDogN2VtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XFxufVxcbi5sYXlvdXRbZGF0YS12LTJmMmJlN2U0XSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xcbn1cXG4ubWVzc2FnZVtkYXRhLXYtMmYyYmU3ZTRdIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDIwO1xcbiAgY29sb3I6ICMyNTI1MjU7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIDtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi92aWV3cy9Ib21lLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKipcXHJcXG4gKiBDb252ZW5pZW50IHNpbmdsZSBpbXBvcnQgZm9yIGxpZ2h0IHZhcmlhYmxlc1xcclxcbiAqIEluY2x1ZGVzIGJhc2UgdmFyaWFibGVzIHdpdGggbGlnaHQgb3ZlcnJpZGVzXFxyXFxuICoqL1xcbi8qKlxcclxcbiAqIExpZ2h0IHZhcmlhYmxlIG92ZXJyaWRlc1xcclxcbiAqKi9cXG4vKipcXHJcXG4gKiBUaGVtZSB2YXJpYWJsZXMgb3ZlcnJpZGVzXFxyXFxuKiovXFxuQWN0aW9uQmFyW2RhdGEtdi0zZTU5Nzg2NF0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOWZjYTtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG4uaWNvbltkYXRhLXYtM2U1OTc4NjRdIHtcXG4gIG1hcmdpbi1yaWdodDogNTtcXG59XFxuLmdwcy1idXR0b25bZGF0YS12LTNlNTk3ODY0XSB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgbGlnaHRncmF5LCB3aGl0ZSk7XFxuICBjb2xvcjogIzA3ODNmODtcXG4gIGJvcmRlci13aWR0aDogMTtcXG4gIGJvcmRlci1jb2xvcjogZ3JheTtcXG4gIGJvcmRlci1yYWRpdXM6IDI1JTtcXG4gIG1hcmdpbjogMTA7XFxufVxcbi5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW0tY29udGVudFtkYXRhLXYtM2U1OTc4NjRdIHtcXG4gIHBhZGRpbmc6IDggMTUgNCAxNTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxufVxcbi5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW0tdGV4dFtkYXRhLXYtM2U1OTc4NjRdIHtcXG4gIG1hcmdpbjogMiAzO1xcbn1cXG4ubGlzdC1ncm91cCAuaG9tZXBhZ2UtYmx1ZVtkYXRhLXYtM2U1OTc4NjRdIHtcXG4gIGNvbG9yOiAjMDc4M2Y4O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICA7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vdmlld3MvTG9jYXRpb24udnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcclxcbi8qIENTUyAqL1xcbi5jbG9zZVtkYXRhLXYtNGViYTJkMTJdIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjA7XFxyXFxuICBjb2xvcjogcmdiKDIyNiwgMjI5LCAyMjkpO1xcclxcbiAgbWFyZ2luOiAxNSAwIDAgMTU7XFxufVxcblRleHRWaWV3W2RhdGEtdi00ZWJhMmQxMl0ge1xcclxcbiAgYm9yZGVyLXdpZHRoOiAxO1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xcbn1cXG4uZGVzY3JpcHRpb24tdGV4dFtkYXRhLXYtNGViYTJkMTJdIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTQ7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuLmRlc2NyaXB0aW9uLWljb25bZGF0YS12LTRlYmEyZDEyXSB7XFxyXFxuICBmb250LXNpemU6IDE2O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBjb2xvcjogIzNlOWVkYjtcXHJcXG4gIG1hcmdpbi1yaWdodDogODtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxufVxcbi5kZXNjcmlwdGlvbi12YWx1ZVtkYXRhLXYtNGViYTJkMTJdIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTQ7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBtYXJnaW46IDg7XFxufVxcbi5kZXNjcmlwdGlvbi12YWx1ZS5pc0F2YWlsYWJsZVtkYXRhLXYtNGViYTJkMTJdIHtcXHJcXG4gIGNvbG9yOiBncmVlbjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkXFxufVxcbi5kZXNjcmlwdGlvbi12YWx1ZS5pc05vdEF2YWlsYWJsZVtkYXRhLXYtNGViYTJkMTJdIHtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxuICBmb250LXdlaWdodDogYm9sZFxcbn1cXG4ucmF0ZVtkYXRhLXYtNGViYTJkMTJdIHtcXHJcXG4gIHBhZGRpbmctdG9wOiAzO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgY29sb3I6ICNmZmU5MDA7XFxyXFxuICBmb250LXNpemU6IDE4O1xcbn1cXG4ucmF0aW5nLXZhbHVlW2RhdGEtdi00ZWJhMmQxMl0ge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDU7XFxufVxcbi5saWtlZC1hY3RpdmVbZGF0YS12LTRlYmEyZDEyXSB7XFxyXFxuICBjb2xvcjogIzQwODBmZjtcXG59XFxuLmhlYXJ0LWFjdGl2ZVtkYXRhLXYtNGViYTJkMTJdIHtcXHJcXG4gIGNvbG9yOiAjYjUxMjEzO1xcbn1cXG4uZGVmYXVsdFtkYXRhLXYtNGViYTJkMTJdIHtcXHJcXG4gIGNvbG9yOiAjODI4MjgyO1xcbn1cXG4ubGF5b3V0W2RhdGEtdi00ZWJhMmQxMl0ge1xcclxcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXHJcXG4gIGNvbG9yOiAjODI4MjgyO1xcclxcbiAgZm9udC1zaXplOiAxNDtcXHJcXG4gIGhlaWdodDogMzA7XFxyXFxuICBwYWRkaW5nOiA1IDAgNSAwO1xcbn1cXG4ubGlrZS1pY29uW2RhdGEtdi00ZWJhMmQxMl0ge1xcclxcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXHJcXG4gIGhlaWdodDogMzA7XFxyXFxuICBmb250LXNpemU6IDE2O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAyO1xcclxcbiAgcGFkZGluZzogNSA1IDUgNTtcXG59XFxuLml0ZW0tbmFtZVtkYXRhLXYtNGViYTJkMTJdIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTQ7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLml0ZW0tY2F0ZWdvcnlbZGF0YS12LTRlYmEyZDEyXSB7XFxyXFxuICBmb250LXNpemU6IDE0O1xcclxcbiAgY29sb3I6ICM4MjgyODI7XFxufVxcbi5jYXRlZ29yeS1pY29uW2RhdGEtdi00ZWJhMmQxMl0ge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZy10b3A6IDU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAyNTtcXHJcXG4gIGJvcmRlci13aWR0aDogMTtcXHJcXG4gIGJvcmRlci1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIG1hcmdpbi10b3A6IDQ7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDE1O1xcclxcbiAgd2lkdGg6IDQwO1xcclxcbiAgaGVpZ2h0OiA0MDtcXG59XFxuLmNvbnRlbnRbZGF0YS12LTRlYmEyZDEyXSB7XFxyXFxuICBtYXJnaW4tbGVmdDogMTY7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDE2O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMztcXHJcXG4gIC8qIG1hcmdpbi10b3A6IDE2OyAqL1xcbn1cXG4uY2FyZC1pbWdbZGF0YS12LTRlYmEyZDEyXSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMjUwO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNTtcXG59XFxuLmNhcmQtaW1nLXRodW1iW2RhdGEtdi00ZWJhMmQxMl0ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgMjMwLCAyMzApO1xcclxcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDU7XFxyXFxuICB3aWR0aDogMTMwO1xcclxcbiAgaGVpZ2h0OiA3MDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA1O1xcbn1cXG4ubGluZVtkYXRhLXYtNGViYTJkMTJdIHtcXHJcXG4gIGhlaWdodDogMC41O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY29sb3I6ICNlMGUwZTA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbn1cXG4ubGluZUJyZWFrW2RhdGEtdi00ZWJhMmQxMl0ge1xcclxcbiAgaGVpZ2h0OiAwLjU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjb2xvcjogI2UwZTBlMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxufVxcclxcblxcclxcblxcclxcbi8qIEFuaW1hdGlvbnMgKi9cXG4uYW5pbS1wYWdlW2RhdGEtdi00ZWJhMmQxMl0ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDZkODtcXHJcXG4gIGFuaW1hdGlvbi1uYW1lOiBrZXktcGFnZS1kYXRhLXYtNGViYTJkMTI7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDI7XFxyXFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXHJcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxyXFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxuQGtleWZyYW1lcyBrZXktcGFnZS1kYXRhLXYtNGViYTJkMTIge1xcbjAlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RhZGFkYTtcXG59XFxuMjAlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RiZDJkNTtcXG59XFxuMTAwJSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG59XFxuLmFuaW0tY292ZXJbZGF0YS12LTRlYmEyZDEyXSB7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IGtleS1jb3Zlci1kYXRhLXYtNGViYTJkMTI7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDE7XFxyXFxuICBhbmltYXRpb24tZGVsYXk6IDAuNTtcXHJcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcclxcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXHJcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG5Aa2V5ZnJhbWVzIGtleS1jb3Zlci1kYXRhLXYtNGViYTJkMTIge1xcbjAlIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNTUwKSBzY2FsZSgwLCAwKTtcXHJcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbjMwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDAuNTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XFxyXFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG4xMDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSwgMSk7XFxyXFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG59XFxuLmFuaW0taW1hZ2VzW2RhdGEtdi00ZWJhMmQxMl0ge1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIGFuaW1hdGlvbi1uYW1lOiBrZXktaW1hZ2VzLWRhdGEtdi00ZWJhMmQxMjtcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogMC43O1xcclxcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxyXFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcclxcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbkBrZXlmcmFtZXMga2V5LWltYWdlcy1kYXRhLXYtNGViYTJkMTIge1xcbjAlIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNTUwKSBzY2FsZSgwLCAwKTtcXHJcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbjMwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDAuNTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XFxyXFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG4xMDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSwgMSk7XFxyXFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG59XFxuLmFuaW0taXRlbUluZm9bZGF0YS12LTRlYmEyZDEyXSB7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IGtleS1pdGVtSW5mby1kYXRhLXYtNGViYTJkMTI7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDE7XFxyXFxuICBhbmltYXRpb24tZGVsYXk6IDEuMjtcXHJcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcclxcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXHJcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG5Aa2V5ZnJhbWVzIGtleS1pdGVtSW5mby1kYXRhLXYtNGViYTJkMTIge1xcbjAlIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAsIDUwKTtcXHJcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbjEwMCUge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcXHJcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbn1cXG4uYW5pbS1saWtlc1tkYXRhLXYtNGViYTJkMTJdIHtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICBhbmltYXRpb24tbmFtZToga2V5LWxpa2VzLWRhdGEtdi00ZWJhMmQxMjtcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogMS41O1xcclxcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxyXFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcclxcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbkBrZXlmcmFtZXMga2V5LWxpa2VzLWRhdGEtdi00ZWJhMmQxMiB7XFxuMCUge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCwgNTApO1xcclxcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxuMTAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xcclxcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxufVxcbi5hbmltLWNvbnRlbnRbZGF0YS12LTRlYmEyZDEyXSB7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IGtleS1jb250ZW50LWRhdGEtdi00ZWJhMmQxMjtcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogMS44O1xcclxcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxyXFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcclxcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbkBrZXlmcmFtZXMga2V5LWNvbnRlbnQtZGF0YS12LTRlYmEyZDEyIHtcXG4wJSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwLCA1MCk7XFxyXFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG4xMDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XFxyXFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG59XFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2NvbXBvbmVudHMvYWRvcHRpb24vQWRvcHRpb25BbmltYWxEZXRhaWxzLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uaXRlbS1jYXRlZ29yeVtkYXRhLXYtZjE0MjJhMTBdIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTQ7XFxyXFxuICBjb2xvcjogIzgyODI4MjtcXG59XFxuLmdlbmRlci1pY29uW2RhdGEtdi1mMTQyMmExMF0ge1xcclxcbiAgcGFkZGluZy10b3A6IDM7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAzO1xcclxcbiAgZm9udC1zaXplOiAxNjtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTA7XFxufVxcbi5pbmZvLWljb25bZGF0YS12LWYxNDIyYTEwXSB7XFxyXFxuICBwYWRkaW5nLXRvcDogMztcXHJcXG4gIHBhZGRpbmctbGVmdDogMztcXHJcXG4gIGNvbG9yOiBncmF5O1xcclxcbiAgZm9udC1zaXplOiAxNDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxMDtcXG59XFxuLnJhdGluZy12YWx1ZVtkYXRhLXYtZjE0MjJhMTBdIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA1O1xcbn1cXG4ubGlrZWQtYWN0aXZlW2RhdGEtdi1mMTQyMmExMF0ge1xcclxcbiAgY29sb3I6ICM0MDgwZmY7XFxufVxcbi5oZWFydC1hY3RpdmVbZGF0YS12LWYxNDIyYTEwXSB7XFxyXFxuICBjb2xvcjogI2I1MTIxMztcXG59XFxuLmRlZmF1bHRbZGF0YS12LWYxNDIyYTEwXSB7XFxyXFxuICBjb2xvcjogIzgyODI4MjtcXG59XFxuLmxheW91dFtkYXRhLXYtZjE0MjJhMTBdIHtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxyXFxuICBjb2xvcjogIzgyODI4MjtcXHJcXG4gIGZvbnQtc2l6ZTogMTQ7XFxyXFxuICBoZWlnaHQ6IDMwO1xcclxcbiAgcGFkZGluZzogNSAwIDUgMDtcXG59XFxuLmxpa2UtaWNvbltkYXRhLXYtZjE0MjJhMTBdIHtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxyXFxuICBoZWlnaHQ6IDMwO1xcclxcbiAgZm9udC1zaXplOiAxNjtcXHJcXG4gIG1hcmdpbi1yaWdodDogMjtcXHJcXG4gIHBhZGRpbmc6IDUgNSA1IDU7XFxufVxcbi5pdGVtLW5hbWVbZGF0YS12LWYxNDIyYTEwXSB7XFxyXFxuICBmb250LXNpemU6IDE0O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMjtcXG59XFxuLml0ZW0tY2F0ZWdvcnlbZGF0YS12LWYxNDIyYTEwXSB7XFxyXFxuICBmb250LXNpemU6IDE0O1xcclxcbiAgY29sb3I6ICM4MjgyODI7XFxufVxcbi5jYXRlZ29yeS1pY29uW2RhdGEtdi1mMTQyMmExMF0ge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZy10b3A6IDU7XFxyXFxuICBib3JkZXItY29sb3I6IHdoaXRlO1xcclxcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMjU7XFxyXFxuICBib3JkZXItd2lkdGg6IDE7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBtYXJnaW4tdG9wOiA0O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxNTtcXHJcXG4gIHdpZHRoOiA0MDtcXHJcXG4gIGhlaWdodDogNDA7XFxufVxcbi5jb250ZW50W2RhdGEtdi1mMTQyMmExMF0ge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDE2O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxNjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDM7XFxyXFxuICBtYXJnaW4tdG9wOiAxNjtcXG59XFxuLmNhcmQtaW1nW2RhdGEtdi1mMTQyMmExMF0ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDE1MDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDU7XFxufVxcbi5saW5lW2RhdGEtdi1mMTQyMmExMF0ge1xcclxcbiAgaGVpZ2h0OiAwLjU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjb2xvcjogI2UwZTBlMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxufVxcbi5saW5lQnJlYWtbZGF0YS12LWYxNDIyYTEwXSB7XFxyXFxuICBoZWlnaHQ6IDc7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjb2xvcjogI2UwZTBlMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxufVxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIDtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL2Fkb3B0aW9uL0FuaW1hbENhcmQudnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5kZWZhdWx0LWltZ1tkYXRhLXYtMDVjOThlYWNdIHtcXG4gICAgY29sb3I6ICNkMWNlY2U1YjtcXG59XFxuLmNhdGVnb3J5LW5hbWVbZGF0YS12LTA1Yzk4ZWFjXSB7XFxuICAgIGNvbG9yOiAjZjdmN2Y3O1xcbiAgICBmb250LXNpemU6IDE0O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW46IDUgMCAxNSAwXFxufVxcbi5iYW5uZXJbZGF0YS12LTA1Yzk4ZWFjXSB7XFxuICAgIGNvbG9yOiAjYmRiZGJkO1xcbiAgICBvcGFjaXR5OiAuMztcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2NvbXBvbmVudHMvYWRvcHRpb24vY2F0ZWdvcnkudnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcclxcblxcclxcbi8qIGJ1dHRvbiBvbiBhbmRyb2lkIGlzIHN0eWxlZCB3aXRoIGRlZmF1bHQgc2V0dGluZyB3aGVuIGJvcmRlciByYWRpdXMgaXMgb21pdHRlZCovXFxuLmJ1dHRvbltkYXRhLXYtNzYwOWEyMzlde1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjUlO1xcbn1cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICA7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9idXR0b25zL0NhdGVnb3J5QnV0dG9uLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXHJcXG5cXHJcXG4vKiBidXR0b24gb24gYW5kcm9pZCBpcyBzdHlsZWQgd2l0aCBkZWZhdWx0IHNldHRpbmcgd2hlbiBib3JkZXIgcmFkaXVzIGlzIG9taXR0ZWQqL1xcbi5idXR0b25bZGF0YS12LTQ0YWU1NzE4XXtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDI1JTtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbn1cXHJcXG5cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICA7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9idXR0b25zL0ljb25CdXR0b24udnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi50YWJ2aWV3LmFjdGl2ZSB7XFxyXFxuICBib3JkZXItYm90dG9tLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDM7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBoZWlnaHQ6IDUwO1xcbn1cXG4udGFidmlld1RleHQge1xcclxcbiAgbWFyZ2luLXRvcDogMTU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1O1xcclxcbiAgZm9udC1zaXplOiAxMztcXHJcXG4gIGNvbG9yOiAjZDhkMmQyO1xcbn1cXG4udGFidmlld1RleHQuYWN0aXZlIHtcXHJcXG4gIG1hcmdpbi10b3A6IDA7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubmF2SWNvbiB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiAzO1xcbn1cXG4ubmF2VGFiIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDlmY2E7XFxyXFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuLm5hdlRhYnZpZXcge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxyXFxuXFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL3ZpZXdzL0Fkb3B0aW9uLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uaG9tZS1wYW5lbFtkYXRhLXYtM2NjZWNmMDldIHtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDIwO1xcbn1cXG5BY3Rpb25CYXJbZGF0YS12LTNjY2VjZjA5XSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5ZmNhO1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIDtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi92aWV3cy9TZXJ2aWNlUmVxdWVzdC52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLm1zZ1tkYXRhLXYtMDdiNDBjMGFdIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjA7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIDtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi92aWV3cy9UaWNrZXQudnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5tc2dbZGF0YS12LTEzOWQ5NTUzXSB7XFxuICBmb250LXNpemU6IDE4O1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICA7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vdmlld3MvVGlja2V0T3B0aW9ucy52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiYW5pbS1wYWdlXCIsXG4gICAgICBhdHRyczogeyBhY3Rpb25CYXJIaWRkZW46IFwidHJ1ZVwiLCBiYWNrZ3JvdW5kU3BhblVuZGVyU3RhdHVzQmFyOiBcInRydWVcIiB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1haW5cIiwgYXR0cnM6IHsgdmVydGljYWxBbGlnbm1lbnQ6IFwidG9wXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYW5pbS1jb3ZlclwiLFxuICAgICAgICAgICAgICBhdHRyczogeyByb3dzOiBcImF1dG9cIiwgY29sdW1uczogXCIqXCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2FyZC1pbWdcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiLTQwXCIsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTgwXCIsXG4gICAgICAgICAgICAgICAgICBzdHJldGNoOiBcImFzcGVjdEZpbGxcIixcbiAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLml0ZW0uY292ZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBjbG9zZVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcInRvcFwiLFxuICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uX2YoXCJmb250aWNvblwiKShcImZhLWFycm93LWxlZnRcIiksXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIyNFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5jbG9zZSB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlNjcm9sbFZpZXdcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYW5pbS1pbWFnZXNcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgb3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIiB9IH0sXG4gICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5pdGVtLmltYWdlcywgZnVuY3Rpb24oaW1hZ2UpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHsga2V5OiBpbWFnZSwgYXR0cnM6IHsgcm93czogXCJhdXRvXCIsIGNvbHVtbnM6IFwiKlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2FyZC1pbWctdGh1bWJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogaW1hZ2Uuc3JjLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJldGNoOiBcImFzcGVjdEZpdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgcm93czogXCJhdXRvLGF1dG8sYXV0byxhdXRvXCIsIGNvbHVtbnM6IFwiYXV0b1wiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFuaW0taXRlbUluZm9cIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCIxNVwiLFxuICAgICAgICAgICAgICAgICAgICByb3c6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnM6IFwiYXV0bywqXCIsXG4gICAgICAgICAgICAgICAgICAgIHJvd3M6IFwiYXV0byxhdXRvLGF1dG8sYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGNhdGVnb3J5LWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uX2YoXCJmb250aWNvblwiKShfdm0uZ2VuZGVySWNvbiksXG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJvd1NwYW46IFwiMlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogX3ZtLml0ZW0uY2F0ZWdvcnlUYWdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaXRlbS1uYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHR3cmFwOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJib3R0b21cIixcbiAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uaXRlbS5uYW1lXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIml0ZW0tY2F0ZWdvcnlcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dHdyYXA6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcInRvcFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5pdGVtLmNhdGVnb3J5XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFwiU3RhY2tMYXlvdXRcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpbmUgYW5pbS1saWtlc1wiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIyXCIsIHdpZHRoOiBcIjEwMCVcIiwgbWFyZ2luVG9wOiBcIjEwXCIgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYW5pbS1saWtlc1wiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjVcIixcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICByb3c6IFwiM1wiLFxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5zOiBcIiosYXV0byxhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgIHJvd3M6IFwiYXV0b1wiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgY29sOiBcIjBcIiwgcm93czogXCJhdXRvXCIsIGNvbHVtbnM6IFwiYXV0byxhdXRvXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWY6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlrZS1pY29uIGZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uX2YoXCJmb250aWNvblwiKShcImZhLWluZm8tY2lyY2xlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLml0ZW0uYnJlZWRfZ3JvdXAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIC0gXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5pdGVtLnByaW1hcnlfYnJlZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dzOiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM6IFwiYXV0byxhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCIxNVwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS50b2dnbGVIZWFydCB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJmYXZvcml0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlrZS1pY29uICBmYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLml0ZW0uaXNGYXZvcml0ZSA/IFwiaGVhcnQtYWN0aXZlXCIgOiBcImRlZmF1bHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5fZihcImZvbnRpY29uXCIpKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5pdGVtLmlzRmF2b3JpdGUgPyBcImZhLWhlYXJ0XCIgOiBcImZhLWhlYXJ0LW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbDogXCIxXCIsIHJvdzogXCIwXCIsIHRleHQ6IFwiRmF2b3JpdGVcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgY29sOiBcIjJcIiwgb3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlrZS1pY29uIGxheW91dCBmYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLl9mKFwiZm9udGljb25cIikoXCJmYS1zaGFyZS1zcXVhcmUtb1wiKSB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiU2hhcmVcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXCJTdGFja0xheW91dFwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaW5lQnJlYWsgYW5pbS1saWtlc1wiLFxuICAgICAgICAgICAgYXR0cnM6IHsgd2lkdGg6IFwiMTAwJVwiIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiR3JpZGxheW91dFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb250ZW50IGFuaW0tY29udGVudFwiLFxuICAgICAgICAgICAgICBhdHRyczogeyByb3dzOiBcImF1dG8sKlwiLCBtYXJnaW5Ub3A6IFwiMTVcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICByb3dzOiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjVcIixcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uczogXCJhdXRvLCBhdXRvXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBkZXNjcmlwdGlvbi1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uX2YoXCJmb250aWNvblwiKShcImZhLXRhZ3NcIiksXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sOiBcIjFcIiwgdGV4dDogXCJEZXNjcmlwdGlvblwiLCB0ZXh0V3JhcDogXCJ0cnVlXCIgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgcm93OiBcIjFcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiU2Nyb2xsVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzOiBcIiosICosICosICosICosICosICosICpcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zOiBcImF1dG8sICpcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJ0b3BcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLXZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjBcIiwgY29sOiBcIjBcIiwgdGV4dDogXCJBdmFpbGFiaWxpdHk6XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGRlc2NyaXB0aW9uLXZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLml0ZW0uaXNBdmFpbGFibGUgPT0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJpc0F2YWlsYWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImlzTm90QXZhaWxhYmxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb3c6IFwiMFwiLCBjb2w6IFwiMVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLml0ZW0uaXNBdmFpbGFibGUgPT0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIkF2YWlsYWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiTm90IEF2YWlsYWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5fZihcImZvbnRpY29uXCIpKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5pdGVtLmlzQXZhaWxhYmxlID09IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJmYS1jaGVja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiZmEtdGltZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi12YWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIxXCIsIGNvbDogXCIwXCIsIHRleHQ6IFwiTG9jYXRpb246XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tdmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uaXRlbS5sb2NhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLXZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjJcIiwgY29sOiBcIjBcIiwgdGV4dDogXCJBZ2U6XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tdmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb3c6IFwiMlwiLCBjb2w6IFwiMVwiLCB0ZXh0OiBfdm0uaXRlbS5hZ2UgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tdmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb3c6IFwiM1wiLCBjb2w6IFwiMFwiLCB0ZXh0OiBcIkdlbmRlcjogXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tdmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb3c6IFwiM1wiLCBjb2w6IFwiMVwiLCB0ZXh0OiBfdm0uaXRlbS5nZW5kZXIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tdmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb3c6IFwiNFwiLCBjb2w6IFwiMFwiLCB0ZXh0OiBcIkJyZWVkIEdyb3VwOlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLXZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCI0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLml0ZW0uYnJlZWRfZ3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi12YWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiUHJpbWFyeSBCcmVlZDpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLXZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCI1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLml0ZW0ucHJpbWFyeV9icmVlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLXZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjZcIiwgY29sOiBcIjBcIiwgdGV4dDogXCJBbmltYWwgU2l6ZTpcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi12YWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiNlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5pdGVtLmFuaW1hbF9zaXplXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tdmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlByaW1hcnkgQ29sb3I6XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi12YWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiN1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5pdGVtLnByaW1hcnlfY29sb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJtYWluXCIgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjYXJkLWltZ1wiLFxuICAgICAgICAgICAgYXR0cnM6IHsgc3RyZXRjaDogXCJhc3BlY3RGaXRcIiwgc3JjOiBfdm0uaXRlbS5jb3ZlciB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uQ2xpY2tCdXR0b24oKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgY29sdW1uczogXCJhdXRvLCpcIixcbiAgICAgICAgICAgICAgICByb3dzOiBcImF1dG8sYXV0b1wiLFxuICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImNlbnRlclwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25DbGlja0J1dHRvbigpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBjYXRlZ29yeS1pY29uXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5fZihcImZvbnRpY29uXCIpKF92bS5jYXRlZ29yeUljb24pLFxuICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICByb3dTcGFuOiBcIjJcIixcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogX3ZtLml0ZW0uY2F0ZWdvcnlUYWdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBpdGVtLW5hbWVcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0d3JhcDogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLml0ZW0ubmFtZSArIFwiLCBcIiArIF92bS5pdGVtLmFnZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHJvdzogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgIHJvd3M6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5zOiBcImF1dG8sYXV0byxhdXRvXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpdGVtLWNhdGVnb3J5XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHR3cmFwOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJib3R0b21cIixcbiAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uaXRlbS5jYXRlZ29yeVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXCJTdGFja0xheW91dFwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaW5lXCIsXG4gICAgICAgICAgICBhdHRyczogeyB3aWR0aDogXCIxMDAlXCIsIG1hcmdpblRvcDogXCI1XCIgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjVcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgcm93OiBcIjNcIixcbiAgICAgICAgICAgICAgICBjb2x1bW5zOiBcIiosIGF1dG8sIGF1dG9cIixcbiAgICAgICAgICAgICAgICByb3dzOiBcImF1dG9cIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2w6IFwiMFwiLCByb3dzOiBcImF1dG9cIiwgY29sdW1uczogXCJhdXRvLGF1dG9cIiB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uQ2xpY2tCdXR0b24oKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgcmVmOiBcImluZm9cIixcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlrZS1pY29uIGZhXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5fZihcImZvbnRpY29uXCIpKFwiZmEtaW5mby1jaXJjbGVcIilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uaXRlbS5icmVlZF9ncm91cCArIFwiIC0gXCIgKyBfdm0uaXRlbS5wcmltYXJ5X2JyZWVkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgIHJvd3M6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5zOiBcImF1dG8sYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCIxNVwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0udG9nZ2xlSGVhcnQgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHJlZjogXCJmYXZvcml0ZVwiLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaWtlLWljb24gIGZhXCIsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiBbX3ZtLml0ZW0uaXNGYXZvcml0ZSA/IFwiaGVhcnQtYWN0aXZlXCIgOiBcImRlZmF1bHRcIl0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5fZihcImZvbnRpY29uXCIpKFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLml0ZW0uaXNGYXZvcml0ZSA/IFwiZmEtaGVhcnRcIiA6IFwiZmEtaGVhcnQtb1wiXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sOiBcIjFcIiwgcm93OiBcIjBcIiwgdGV4dDogXCJGYXZvcml0ZVwiIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGNvbDogXCIyXCIsIG9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHJlZjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlrZS1pY29uIGxheW91dCBmYVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0uX2YoXCJmb250aWNvblwiKShcImZhLXNoYXJlLXNxdWFyZS1vXCIpIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIlNoYXJlXCIgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHsgc3RhdGljQ2xhc3M6IFwibGluZUJyZWFrXCIsIGF0dHJzOiB7IHdpZHRoOiBcIjEwMCVcIiB9IH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiR3JpZExheW91dFwiLFxuICAgIHsgYXR0cnM6IHsgcm93czogXCIqXCIsIGNvbHVtbnM6IFwiKlwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBoZWlnaHQ6IFwiMTUwXCIsXG4gICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxMFwiLFxuICAgICAgICAgIHN0cmV0Y2g6IFwiYXNwZWN0RmlsbFwiLFxuICAgICAgICAgIHNyYzogX3ZtLml0ZW0uY292ZXJcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgLz5cXG4gICAgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHZlcnRpY2FsQWxpZ25tZW50OiBcImJvdHRvbVwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJiYW5uZXIyXCIsIGF0dHJzOiB7IGJhY2tncm91bmRDb2xvcjogXCIjNDg5ZTllOWVcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNhdGVnb3J5LW5hbWUgIG0tYi0xMCBtLXQtMTBcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLml0ZW0uY2F0ZWdvcnkgKyBcIiAoXCIgKyBfdm0uaXRlbS5jb3VudCArIFwiKVwiLFxuICAgICAgICAgICAgICAgICAgdGV4dHdyYXA6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJTdGFja0xheW91dFwiLFxuICAgIFtcbiAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJpbWFnZVwiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgIHNyYzogX3ZtLnNyYyxcbiAgICAgICAgICBzdHJldGNoOiBcImFzcGVjdEZpdFwiLFxuICAgICAgICAgIGhlaWdodDogXCIxMTBcIixcbiAgICAgICAgICBcImlvczpoZWlnaHRcIjogXCIxMjBcIlxuICAgICAgICB9LFxuICAgICAgICBvbjogeyB0YXA6IF92bS5hY3Rpb24gfVxuICAgICAgfSksXG4gICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvblwiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImJvdHRvbVwiLFxuICAgICAgICAgIHRleHQ6IF92bS5pY29uICsgXCIgXCIgKyBfdm0udGl0bGVcbiAgICAgICAgfSxcbiAgICAgICAgb246IHsgdGFwOiBfdm0uYWN0aW9uIH1cbiAgICAgIH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICBbXG4gICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvblwiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgIHRleHQ6IF92bS50aXRsZSArIFwiIFwiICsgX3ZtLmljb24gKyBcIiBcIlxuICAgICAgICB9LFxuICAgICAgICBvbjogeyB0YXA6IF92bS5hY3Rpb24gfVxuICAgICAgfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJwYWdlXCIgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJBY3Rpb25CYXJcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJhY3Rpb24tYmFyXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiTmF2aWdhdGlvbkJ1dHRvblwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBcImFuZHJvaWQuc3lzdGVtSWNvblwiOiBcImljX21lbnVfYmFja1wiIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICB0YXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJG5hdmlnYXRlQmFjaygpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFjdGlvbi1iYXItdGl0bGVcIixcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHRleHQ6IF92bS5BbmltYWxDZW50ZXIubmFtZSxcbiAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIj5cXG4gICAgXCIpXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJTY3JvbGxWaWV3XCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYW5pbS1jb3ZlciBtLWItMTVcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgc3JjOiBfdm0uQW5pbWFsQ2VudGVyLmltYWdlVVJMLFxuICAgICAgICAgICAgICAgICAgc3RyZXRjaDogXCJhc3BlY3RGaXRcIixcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIyMDBcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhyLWxpZ2h0IG0tdC0xNSBtLWItMTVcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyByb3c6IFwiMVwiIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgcm93czogXCIqLCAqLCAqLCBhdXRvXCIsIGNvbHVtbnM6IFwiYXV0bywqXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhbmltLWNvbnRlbnQxIHAtbC0xNSBwLWItMTAgbS1yLTIwXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvYWNob3VzZS5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICBzdHJldGNoOiBcImFzcGVjdEZpdFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI0MFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjQwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbG9hZE1vZGU6IFwiYXN5bmNcIixcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiM1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiTGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhbmltLWNvbnRlbnQxIHRleHQgcC1iLTEwIGZvbnQtd2VpZ2h0LWJvbGQgdGl0bGUgc3RhY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uQW5pbWFsQ2VudGVyLm5hbWUgKyBcIiBBbmltYWwgQ2FyZSBDZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFuaW0tY29udGVudDIgcC1sLTE1IHAtYi0xMCBtLXItMjBcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9sb2NhdGlvbmljb24ucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3RyZXRjaDogXCJhc3BlY3RGaXRcIixcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNDBcIixcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI0MFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxvYWRNb2RlOiBcImFzeW5jXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjNcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhbmltLWNvbnRlbnQyIHAtYi0xMCBzdGFja1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCI1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLm9uQWRkcmVzc1RhcCB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiRm9ybWF0dGVkU3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgdGV4dC1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLkFuaW1hbENlbnRlci5hZGRyZXNzIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFuaW0tY29udGVudDMgcC1sLTE1IHAtYi0xMCBtLXItMjBcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9waG9uZWljb24ucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3RyZXRjaDogXCJhc3BlY3RGaXRcIixcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNDBcIixcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI0MFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxvYWRNb2RlOiBcImFzeW5jXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjNcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhbmltLWNvbnRlbnQzIGZhIHRleHQtcHJpbWFyeSBwLWItMTAgc3RhY2tcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLkFuaW1hbENlbnRlci5waG9uZSxcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiNVwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLm9uUGhvbmVUYXAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYW5pbS1jb250ZW50NCBwLWwtMTUgcC1iLTEwIG0tci0yMFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2hvdXJzaWNvbi5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICBzdHJldGNoOiBcImFzcGVjdEZpdFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI0MFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjQwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbG9hZE1vZGU6IFwiYXN5bmNcIixcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiM1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYW5pbS1jb250ZW50NCBzdGFjay1ob3Vyc1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM6IFwiKiwgKlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcm93czogXCJhdXRvLCBhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiNVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJob3Vyc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLkFuaW1hbENlbnRlci5hdmFpbGFiaWxpdHkud2Vla2RheVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaG91cnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5BbmltYWxDZW50ZXIuYXZhaWxhYmlsaXR5LndlZWtkYXlob3VycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJob3Vyc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLkFuaW1hbENlbnRlci5hdmFpbGFiaWxpdHkud2Vla2VuZFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaG91cnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5BbmltYWxDZW50ZXIuYXZhaWxhYmlsaXR5LndlZWtlbmRob3VycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgeyBhdHRyczogeyBvcmllbnRhdGlvbjogXCJ2ZXJ0aWNhbFwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICBcImhvbWVwYWdlLWJsdWUgdGV4dC1wcmltYXJ5IGxpc3QtZ3JvdXAtaXRlbS10ZXh0IGZvbnQtd2VpZ2h0LWJvbGRcIixcbiAgICAgICAgICBhdHRyczogeyB0ZXh0V3JhcDogXCJ0cnVlXCIgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgW19jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IF92bS5pdGVtLnF1ZXJ5IH0gfSldLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCIuZmFxX2Fuc3dlciAubGlzdC1ncm91cC1pdGVtLWNvbnRlbnRcIixcbiAgICAgICAgICBhdHRyczogeyB0ZXh0V3JhcDogXCJ0cnVlXCIgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwgeyBhdHRyczogeyBcInRleHQuZGVjb2RlXCI6IFwiJiM5O1wiIH0gfSksXG4gICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7IGF0dHJzOiB7IHRleHQ6IF92bS5pdGVtLmFuc3dlciB9IH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInBhZ2VcIixcbiAgICB7XG4gICAgICBhdHRyczogeyBhY3Rpb25CYXJIaWRkZW46IFwiZmFsc2VcIiwgYmFja2dyb3VuZFNwYW5VbmRlclN0YXR1c0JhcjogXCJ0cnVlXCIgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiQWN0aW9uQmFyXCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYWN0aW9uYmFyIG5hdlRhYlwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIk5hdmlnYXRpb25CdXR0b25cIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgXCJhbmRyb2lkLnN5c3RlbUljb25cIjogXCJpY19tZW51X2JhY2tcIiB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRuYXZpZ2F0ZUJhY2soKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBmb250U2l6ZTogXCIxOFwiLCB0ZXh0OiBcIkFuaW1hbHMgZm9yIEFkb3B0aW9uXCIgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgIHsgYXR0cnM6IHsgcm93czogXCJhdXRvLGF1dG8sKlwiLCBjb2x1bW5zOiBcImF1dG9cIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZWY6IFwibmF2VGFiXCIsXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdlRhYlwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHJvdzogXCIxXCIsXG4gICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwidG9wXCIsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjUwXCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgIHJvd3M6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgIGNvbHVtbnM6IFwiYXV0byxhdXRvXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGFidmlld1wiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5zZWxlY3RlZFRhYnZpZXcgPT0gMCA/IFwiYWN0aXZlXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgcm93czogXCIqLGF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgY29sczogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjUwJVwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uYWRvcHRpb25MaXN0IH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZFRhYnZpZXcgPT0gMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWRUYWJ2aWV3PT0wXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIG5hdkljb25cIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5fZihcImZvbnRpY29uXCIpKFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkVGFidmlldyA9PSAwID8gXCJmYS1wYXdcIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhYnZpZXdUZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uc2VsZWN0ZWRUYWJ2aWV3ID09IDAgPyBcImFjdGl2ZVwiIDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJBbmltYWxzXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGFidmlld1wiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5zZWxlY3RlZFRhYnZpZXcgPT0gMSA/IFwiYWN0aXZlXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgcm93czogXCIqLGF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgY29sczogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjUwJVwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uc2hvd0NhdGVnb3J5IH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZFRhYnZpZXcgPT0gMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWRUYWJ2aWV3PT0xXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIG5hdkljb25cIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5fZihcImZvbnRpY29uXCIpKFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkVGFidmlldyA9PSAxID8gXCJmYS1maWx0ZXJcIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhYnZpZXdUZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uc2VsZWN0ZWRUYWJ2aWV3ID09IDEgPyBcImFjdGl2ZVwiIDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiRmlsdGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWRUYWJ2aWV3ID09IDAsXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkVGFidmlldyA9PSAwXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIyXCIsIHdpZHRoOiBcIjEwMCVcIiwgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJMaXN0Vmlld1wiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogX3ZtLmluZGV4LFxuICAgICAgICAgICAgICAgICAgcmVmOiBcImxpc3R2aWV3XCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBzZXBhcmF0b3JDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICAgICAgICAgICAgICBpdGVtczogX3ZtLml0ZW1zLFxuICAgICAgICAgICAgICAgICAgICBcIithbGlhc1wiOiBcIml0ZW1cIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRlbXBsYXRlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSByZWYuaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGluZGV4ID0gcmVmLiRpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGV2ZW4gPSByZWYuJGV2ZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRvZGQgPSByZWYuJG9kZFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJpdGVtXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpdGVtOiBpdGVtIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrZWQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNob3dJdGVtKGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZFRhYnZpZXcgPT0gMSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWRUYWJ2aWV3ID09IDFcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjJcIiwgd2lkdGg6IFwiMTAwJVwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlJhZExpc3RWaWV3XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiBfdm0uaW5kZXgsXG4gICAgICAgICAgICAgICAgICByZWY6IFwibGlzdHZpZXdcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNlcGFyYXRvckNvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0uaXRlbXNDYXRlZ29yeSxcbiAgICAgICAgICAgICAgICAgICAgXCIrYWxpYXNcIjogXCJpdGVtXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi10ZW1wbGF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gcmVmLml0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkb2RkID0gcmVmLiRvZGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwiQ2F0ZWdvcnlcIiwgeyBhdHRyczogeyBpdGVtOiBpdGVtIH0gfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInBhZ2VcIiB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIkFjdGlvbkJhclwiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJOYXZpZ2F0aW9uQnV0dG9uXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IFwiYW5kcm9pZC5zeXN0ZW1JY29uXCI6IFwiaWNfbWVudV9iYWNrXCIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIHRhcDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kbmF2aWdhdGVCYWNrKClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJGQVFcIiwgZm9udFNpemU6IFwiMjBcIiwgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCIgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJTZWFyY2hCYXJcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgaGludDogXCJFbnRlciB0ZXh0Li4uXCIsIHRleHQ6IF92bS5zZWFyY2ggfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIHN1Ym1pdDogX3ZtLmNoZWNrRmFxLFxuICAgICAgICAgICAgICB0ZXh0Q2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uc2VhcmNoID0gJGV2ZW50LnZhbHVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiUmFkTGlzdFZpZXdcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmVmOiBcImxpc3RWaWV3XCIsXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpc3QtZ3JvdXBcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBwdWxsVG9SZWZyZXNoOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICBpdGVtczogX3ZtLmdldFNlYXJjaFJlc3VsdHMoX3ZtLnNlYXJjaCksXG4gICAgICAgICAgICAgICAgXCIrYWxpYXNcIjogXCJmYXFcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIHB1bGxUb1JlZnJlc2hJbml0aWF0ZWQ6IF92bS5vblB1bGxUb1JlZnJlc2hJbml0aWF0ZWQsXG4gICAgICAgICAgICAgICAgaXRlbVRhcDogX3ZtLm9uSXRlbVRhcFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInYtdGVtcGxhdGVcIiwge1xuICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIGZhcSA9IHJlZi5mYXFcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJGluZGV4ID0gcmVmLiRpbmRleFxuICAgICAgICAgICAgICAgICAgICAgIHZhciAkZXZlbiA9IHJlZi4kZXZlblxuICAgICAgICAgICAgICAgICAgICAgIHZhciAkb2RkID0gcmVmLiRvZGRcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJGYXFJbmZvXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpc3QtZ3JvdXAtaXRlbS10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpdGVtOiBmYXEgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiQWN0aW9uQmFyXCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiQWN0aW9uX0JhclwiLCBhdHRyczogeyBcImlvcy5wb3NpdGlvblwiOiBcImxlZnRcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHRleHQ6IFwiV2VsY29tZVwiLFxuICAgICAgICAgICAgICBmb250U2l6ZTogXCIyMFwiLFxuICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiQWN0aW9uSXRlbVwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBcImlvcy5zeXN0ZW1JY29uXCI6IFwiMTJcIixcbiAgICAgICAgICAgICAgXCJpb3MucG9zaXRpb25cIjogXCJyaWdodFwiLFxuICAgICAgICAgICAgICBcImFuZHJvaWQuc3lzdGVtSWNvblwiOiBcImljX21lbnVfc2VhcmNoXCIsXG4gICAgICAgICAgICAgIFwiYW5kcm9pZC5wb3NpdGlvblwiOiBcImFjdGlvbkJhclwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHsgdGFwOiBfdm0udG9GYXEgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICB7IGF0dHJzOiB7IGJhY2tncm91bmRDb2xvcjogXCIjYjIxYTgyXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGF5b3V0IGNvdmVyXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGNvbHVtbnM6IFwiKiwqXCIsIHJvd3M6IFwiKiwqLCpcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIkNhdGVnb3J5QnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJob21lcGFnZS1ibHVlIEhvbWVCdXR0b25cIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICBtYXJnaW46IFwiNVwiLFxuICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2FuaW1hbHMuaWNvbi5wbmdcIixcbiAgICAgICAgICAgICAgICAgIGljb246IFwiXCIsXG4gICAgICAgICAgICAgICAgICB0aXRsZTogX3ZtLnRpdGxlc1swXSxcbiAgICAgICAgICAgICAgICAgIGFjdGlvbjogX3ZtLnRvQWRvcHRpb24sXG4gICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkNhdGVnb3J5QnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJob21lcGFnZS1ibHVlIEhvbWVCdXR0b25cIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICBtYXJnaW46IFwiNVwiLFxuICAgICAgICAgICAgICAgICAgcm93OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL3NlcnZpY2VzLmljb24ucG5nXCIsXG4gICAgICAgICAgICAgICAgICBpY29uOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgdGl0bGU6IF92bS50aXRsZXNbMl0sXG4gICAgICAgICAgICAgICAgICBhY3Rpb246IF92bS50b1NlcnZpY2VSZXF1ZXN0LFxuICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJDYXRlZ29yeUJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaG9tZXBhZ2UtYmx1ZSBIb21lQnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjVcIixcbiAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9ub2lzZS5pY29uLnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgaWNvbjogXCJcIixcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBfdm0udGl0bGVzWzNdLFxuICAgICAgICAgICAgICAgICAgYWN0aW9uOiBfdm0udG9GYXEsXG4gICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkNhdGVnb3J5QnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBob21lcGFnZS1ibHVlIEhvbWVCdXR0b25cIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICBtYXJnaW46IFwiNVwiLFxuICAgICAgICAgICAgICAgICAgcm93OiBcIjJcIixcbiAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2hvdXJzaWNvbi5wbmdcIixcbiAgICAgICAgICAgICAgICAgIGljb246IF92bS5fZihcImZvbnRpY29uXCIpKFwiZmEtbWFwLW1hcmtlclwiKSxcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBfdm0udGl0bGVzWzRdLFxuICAgICAgICAgICAgICAgICAgYWN0aW9uOiBfdm0udG9RUlNjYW5uZXIsXG4gICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkNhdGVnb3J5QnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJob21lcGFnZS1ibHVlIEhvbWVCdXR0b25cIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICBtYXJnaW46IFwiNVwiLFxuICAgICAgICAgICAgICAgICAgcm93OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2xvY2F0aW9uaWNvbi5wbmdcIixcbiAgICAgICAgICAgICAgICAgIGljb246IFwiXCIsXG4gICAgICAgICAgICAgICAgICB0aXRsZTogX3ZtLnRpdGxlc1s1XSxcbiAgICAgICAgICAgICAgICAgIGFjdGlvbjogX3ZtLnRvTG9jYXRpb25MaXN0LFxuICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJwYWdlXCIgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJBY3Rpb25CYXJcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJhY3Rpb24tYmFyXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiTmF2aWdhdGlvbkJ1dHRvblwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBcImFuZHJvaWQuc3lzdGVtSWNvblwiOiBcImljX21lbnVfYmFja1wiIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICB0YXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJG5hdmlnYXRlQmFjaygpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHRleHQ6IFwiQW5pbWFsIENhcmUgQ2VudGVyc1wiLFxuICAgICAgICAgICAgICBmb250U2l6ZTogXCIyMFwiLFxuICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJJY29uQnV0dG9uXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGdwcy1idXR0b25cIixcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGljb246IF92bS5fZihcImZvbnRpY29uXCIpKFwiZmEtc29ydC1hbW91bnQtYXNjXCIpLFxuICAgICAgICAgICAgICB0aXRsZTogXCJHZXQgQ2xvc2VzdCBBbmltYWwgQ2VudGVyXCIsXG4gICAgICAgICAgICAgIGFjdGlvbjogX3ZtLmJ1dHRvbkdldERpc3RhbmNlVG9DYXJlQ2VudGVyc1RhcFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJSYWRMaXN0Vmlld1wiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaXN0LWdyb3VwXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgcm93OiBcIjJcIixcbiAgICAgICAgICAgICAgICBpdGVtczogX3ZtLmNlbnRlckxvY2F0aW9ucyxcbiAgICAgICAgICAgICAgICBcIithbGlhc1wiOiBcImxvY2F0aW9uXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb246IHsgaXRlbVRhcDogX3ZtLm9uSXRlbVRhcCB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInYtdGVtcGxhdGVcIiwge1xuICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIGxvY2F0aW9uID0gcmVmLmxvY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJGV2ZW4gPSByZWYuJGV2ZW5cbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpc3QtZ3JvdXAtaXRlbS1jb250ZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvd3M6IFwiKiwgKiwgKiwgKlwiLCBjb2x1bW5zOiBcIiosICpcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaG9tZXBhZ2UtYmx1ZSB0ZXh0LXByaW1hcnkgbGlzdC1ncm91cC1pdGVtLXRleHQgZm9udC13ZWlnaHQtYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IGxvY2F0aW9uLm5hbWUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpc3QtZ3JvdXAtaXRlbS10ZXh0IG0tci01IHRleHQtc2Vjb25kYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2w6IFwiMVwiLCBob3Jpem9udGFsQWxpZ25tZW50OiBcInJpZ2h0XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRm9ybWF0dGVkU3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJ+XCIgKyBsb2NhdGlvbi5kaXN0YW5jZSArIFwibWlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaHItbGlnaHQgbS10LTUgbS1iLTVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb3c6IFwiMVwiLCBjb2xTcGFuOiBcIjJcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtLXItMjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogbG9jYXRpb24uaW1hZ2VVUkwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJldGNoOiBcImFzcGVjdEZpdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEyMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZE1vZGU6IFwiYXN5bmNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaXN0LWdyb3VwLWl0ZW0tdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyByb3dzOiBcIiosICpcIiwgY29sdW1uczogXCIqLCA0KlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwLWItMTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRm9ybWF0dGVkU3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJpb3MuZm9udEZhbWlseVwiOiBcInN5c3RlbVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLl9mKFwiZm9udGljb25cIikoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhLW1hcC1tYXJrZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwLWItMTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRm9ybWF0dGVkU3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJpb3MuZm9udEZhbWlseVwiOiBcInN5c3RlbVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBsb2NhdGlvbi5hZGRyZXNzIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicC1iLTEwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwOiBcInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiaW9zLmZvbnRGYW1pbHlcIjogXCJzeXN0ZW1cIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBpY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLl9mKFwiZm9udGljb25cIikoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhLXBob25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicC1iLTEwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwOiBcInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiaW9zLmZvbnRGYW1pbHlcIjogXCJzeXN0ZW1cIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBsb2NhdGlvbi5waG9uZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInAtYi0xMFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRm9ybWF0dGVkU3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJpb3MuZm9udEZhbWlseVwiOiBcInN5c3RlbVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcIlNwYW5cIiwgeyBhdHRyczogeyB0ZXh0OiBcIlwiIH0gfSldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJwYWdlXCIgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJBY3Rpb25CYXJcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiTmF2aWdhdGlvbkJ1dHRvblwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBcImFuZHJvaWQuc3lzdGVtSWNvblwiOiBcImljX21lbnVfYmFja1wiIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICB0YXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJG5hdmlnYXRlQmFjaygpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHRleHQ6IFwiU2VydmljZSBSZXF1ZXN0XCIsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiBcIjIwXCIsXG4gICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImNlbnRlclwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaG9tZS1wYW5lbFwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIldlYlZpZXdcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiBcIjgxOTJweFwiLFxuICAgICAgICAgICAgICBzcmM6IFwiaHR0cDovL2FuaW1hbGNhcmUubGFjb3VudHkuZ292L3NlcnZpY2UtcmVxdWVzdC9cIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgW1xuICAgICAgX2MoXCJBY3Rpb25CYXJcIiwgeyBhdHRyczogeyB0aXRsZTogX3ZtLmFjdGlvbkJhciB9IH0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiTGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJtc2dcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgIFwiV2UgYXBvbG9naXplLiBUaGUgcXVlc3Rpb24geW91IGFyZSBzZWFyY2hpbmcgZm9yIGhhcyBub3QgYmVlbiBhbnN3ZXJlZCB5ZXQuIFRha2UgdGhpcyB0aWNrZXQgaWYgeW91IHdhbnQgdG8gc3VibWl0IHRoaXMgcXVlc3Rpb24gYW5kIGdldCBhbiBhbnN3ZXIgZnJvbSB0aGUgZnJvbnQgZGVzay5cIlxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IGNvbHVtbnM6IFwiKiwqXCIsIHJvd3M6IFwiKiwqLCpcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiQ2F0ZWdvcnlCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBfdm0udGl0bGVzWzBdLFxuICAgICAgICAgICAgICAgICAgYWN0aW9uOiBfdm0udG9GYXEsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmMDAwMFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJDYXRlZ29yeUJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgdGl0bGU6IF92bS50aXRsZXNbMV0sXG4gICAgICAgICAgICAgICAgICBhY3Rpb246IF92bS5zdWJtaXRUaWNrZXQsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzZBRkY1QVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgW1xuICAgICAgX2MoXCJBY3Rpb25CYXJcIiwgeyBhdHRyczogeyB0aXRsZTogXCJUaWNrZXQgUHJvY2Vzc2luZ1wiIH0gfSksXG4gICAgICBfYyhcbiAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJMYWJlbFwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiUGhvbmUgbnVtYmVyOlwiIH0gfSksXG4gICAgICAgICAgX2MoXCJUZXh0Vmlld1wiLCB7XG4gICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0ucGhvbmUgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIHRleHRDaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5waG9uZSA9ICRldmVudC52YWx1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJMYWJlbFwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiRmlyc3QgYW5kIGxhc3QgbmFtZTpcIiB9IH0pLFxuICAgICAgICAgIF9jKFwiVGV4dFZpZXdcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLm5hbWUgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIHRleHRDaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5uYW1lID0gJGV2ZW50LnZhbHVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0ucXVlcnkgPyBfYyhcIkxhYmVsXCIsIHsgYXR0cnM6IHsgdGV4dDogXCJxdWVyeTpcIiB9IH0pIDogX3ZtLl9lKCksXG4gICAgICAgICAgX2MoXCJMYWJlbFwiLCB7IGF0dHJzOiB7IHRleHRXcmFwOiBcInRydWVcIiB9IH0sIFtcbiAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnF1ZXJ5KSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIlN1Ym1pdCBUaWNrZXRcIiB9LFxuICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uc3VibWl0VGlja2V0IH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIFtcbiAgICAgIF9jKFwiQWN0aW9uQmFyXCIsIHsgYXR0cnM6IHsgdGl0bGU6IFwiVGlja2V0IFJlYXNvblwiIH0gfSksXG4gICAgICBfYyhcbiAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgIHsgYXR0cnM6IHsgY29sdW1uczogXCIqXCIsIHJvd3M6IFwiYXV0bywgYXV0bywgYXV0bywgYXV0b1wiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtc2dcIiwgYXR0cnM6IHsgdGV4dFdyYXA6IFwidHJ1ZVwiLCByb3c6IFwiMFwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiWW91IGFyZSBhdCB0aGUgXCIgK1xuICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5zaXRlKSArXG4gICAgICAgICAgICAgICAgICBcIiBBbmltYWwgQ2FyZSBhbmQgQ29udHJvbCBDZW50ZXIuXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXCJMaXN0UGlja2VyXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHJvdzogXCIxXCIsXG4gICAgICAgICAgICAgIGl0ZW1zOiBfdm0uY2hvaWNlcyxcbiAgICAgICAgICAgICAgc2VsZWN0ZWRJbmRleDogXCIwXCIsXG4gICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXg6IF92bS5zZWxlY3RlZEluZGV4XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgc2VsZWN0ZWRJbmRleENoYW5nZTogW1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkSW5kZXggPSAkZXZlbnQudmFsdWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZEluZGV4Q2hhbmdlZFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgIV92bS5pc1RpY2tldFxuICAgICAgICAgICAgPyBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtc2dcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgcm93OiBcIjJcIixcbiAgICAgICAgICAgICAgICAgIHRleHQ6XG4gICAgICAgICAgICAgICAgICAgIFwiWW91IGFyZSBhbHdheXMgYWxsb3dlZCB0byBnbyB0byB0aGUga2VubmVscyB3aXRob3V0IGFza2luZ1wiLFxuICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uaXNUaWNrZXRcbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgcm93OiBcIjNcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1zZ1wiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiVGVsbCB1cyBhYm91dCB3aGF0IHlvdSB3b3VsZCBsaWtlIHRvIGtub3dcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIlRleHRWaWV3XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLm90aGVyVGV4dCB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIHRleHRDaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm90aGVyVGV4dCA9ICRldmVudC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiSG9tZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLnRvSG9tZSB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJDcmVhdGUgVGlja2V0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uY3JlYXRlVGlja2V0IH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIG1hcCA9IHtcblx0XCIuL2FwcC5zY3NzXCI6IFwiLi9hcHAuc2Nzc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIF5cXFxcLlxcXFwvYXBwXFxcXC4oY3NzfHNjc3N8bGVzc3xzYXNzKSRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vQW5pbWFsQ2VudGVyLnNjc3NcIjogXCIuL0FuaW1hbENlbnRlci5zY3NzXCIsXG5cdFwiLi9hcHAuc2Nzc1wiOiBcIi4vYXBwLnNjc3NcIixcblx0XCIuL2ZvbnRzL2ZvbnQtYXdlc29tZS5jc3NcIjogXCIuL2ZvbnRzL2ZvbnQtYXdlc29tZS5jc3NcIixcblx0XCIuL2ZvbnRzL2lvbmljb25zLmNzc1wiOiBcIi4vZm9udHMvaW9uaWNvbnMuY3NzXCIsXG5cdFwiLi9tYWluLmpzXCI6IFwiLi9tYWluLmpzXCIsXG5cdFwiLi9tb2RlbHMvQW5pbWFsLmpzXCI6IFwiLi9tb2RlbHMvQW5pbWFsLmpzXCIsXG5cdFwiLi9tb2RlbHMvRmFxLmpzXCI6IFwiLi9tb2RlbHMvRmFxLmpzXCIsXG5cdFwiLi9tb2RlbHMvVGlja2V0LmpzXCI6IFwiLi9tb2RlbHMvVGlja2V0LmpzXCIsXG5cdFwiLi9zZXJ2aWNlcy9BZG9wdGlvblNlcnZpY2UuanNcIjogXCIuL3NlcnZpY2VzL0Fkb3B0aW9uU2VydmljZS5qc1wiLFxuXHRcIi4vc2VydmljZXMvRmFrZUFkb3B0aW9uU2VydmljZS5qc1wiOiBcIi4vc2VydmljZXMvRmFrZUFkb3B0aW9uU2VydmljZS5qc1wiLFxuXHRcIi4vc2VydmljZXMvRmFrZUZhcVNlcnZpY2UuanNcIjogXCIuL3NlcnZpY2VzL0Zha2VGYXFTZXJ2aWNlLmpzXCIsXG5cdFwiLi9zZXJ2aWNlcy9GYWtlVGlja2V0U2VydmljZS5qc1wiOiBcIi4vc2VydmljZXMvRmFrZVRpY2tldFNlcnZpY2UuanNcIixcblx0XCIuL3NlcnZpY2VzL0ZhcVNlcnZpY2UuanNcIjogXCIuL3NlcnZpY2VzL0ZhcVNlcnZpY2UuanNcIixcblx0XCIuL3NlcnZpY2VzL1RpY2tldFNlcnZpY2UuanNcIjogXCIuL3NlcnZpY2VzL1RpY2tldFNlcnZpY2UuanNcIixcblx0XCIuL3N0b3JlLmpzXCI6IFwiLi9zdG9yZS5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIHJlY3Vyc2l2ZSAoPzwhXFxcXGJBcHBfUmVzb3VyY2VzXFxcXGIuKilcXFxcLih4bWx8Y3NzfGpzfCg/PCFcXFxcLmRcXFxcLil0c3woPzwhXFxcXGJfW1xcXFx3LV0qXFxcXC4pc2NzcykkXCI7IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKipcXHJcXG4gKiBDb252ZW5pZW50IHNpbmdsZSBpbXBvcnQgZm9yIGxpZ2h0IHZhcmlhYmxlc1xcclxcbiAqIEluY2x1ZGVzIGJhc2UgdmFyaWFibGVzIHdpdGggbGlnaHQgb3ZlcnJpZGVzXFxyXFxuICoqL1xcbi8qKlxcclxcbiAqIExpZ2h0IHZhcmlhYmxlIG92ZXJyaWRlc1xcclxcbiAqKi9cXG4vKipcXHJcXG4gKiBUaGVtZSB2YXJpYWJsZXMgb3ZlcnJpZGVzXFxyXFxuKiovXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL0FuaW1hbENlbnRlci5zY3NzJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcclxcbiAqIENvbnZlbmllbnQgc2luZ2xlIGltcG9ydCBmb3IgbGlnaHQgdmFyaWFibGVzXFxyXFxuICogSW5jbHVkZXMgYmFzZSB2YXJpYWJsZXMgd2l0aCBsaWdodCBvdmVycmlkZXNcXHJcXG4gKiovXFxuLyoqXFxyXFxuICogTGlnaHQgdmFyaWFibGUgb3ZlcnJpZGVzXFxyXFxuICoqL1xcbi8qKlxcclxcbiAqIFRoZW1lIHZhcmlhYmxlcyBvdmVycmlkZXNcXHJcXG4qKi9cXG4vKipcXHJcXG4gKiBDb2xvciBjbGFzc2VzXFxyXFxuICogVGhlIGZvbGxvd2luZyBjcmVhdGVzIHRoaXMgcGF0dGVybjpcXHJcXG4gKiAuYy1ncmV5e2NvbG9yOiNlMGUwZTB9LmMtYmctZ3JleXtiYWNrZ3JvdW5kLWNvbG9yOiNlMGUwZTB9XFxyXFxuKiovXFxuLmMtd2hpdGUge1xcbiAgY29sb3I6ICNmZmY7IH1cXG5cXG4uYy1iZy13aGl0ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XFxuXFxuLmMtYmxhY2sge1xcbiAgY29sb3I6ICMwMDA7IH1cXG5cXG4uYy1iZy1ibGFjayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwOyB9XFxuXFxuLmMtYXF1YSB7XFxuICBjb2xvcjogIzAwY2FhYjsgfVxcblxcbi5jLWJnLWFxdWEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwY2FhYjsgfVxcblxcbi5jLWJsdWUge1xcbiAgY29sb3I6ICMzZDVhZmU7IH1cXG5cXG4uYy1iZy1ibHVlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZDVhZmU7IH1cXG5cXG4uYy1jaGFyY29hbCB7XFxuICBjb2xvcjogIzMwMzAzMDsgfVxcblxcbi5jLWJnLWNoYXJjb2FsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7IH1cXG5cXG4uYy1icm93biB7XFxuICBjb2xvcjogIzc5NTU0ODsgfVxcblxcbi5jLWJnLWJyb3duIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3OTU1NDg7IH1cXG5cXG4uYy1mb3Jlc3Qge1xcbiAgY29sb3I6ICMwMDY5Njg7IH1cXG5cXG4uYy1iZy1mb3Jlc3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjk2ODsgfVxcblxcbi5jLWdyZXkge1xcbiAgY29sb3I6ICNlMGUwZTA7IH1cXG5cXG4uYy1iZy1ncmV5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7IH1cXG5cXG4uYy1ncmV5LWxpZ2h0IHtcXG4gIGNvbG9yOiAjYmFiYWJhOyB9XFxuXFxuLmMtYmctZ3JleS1saWdodCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmFiYWJhOyB9XFxuXFxuLmMtZ3JleS1kYXJrIHtcXG4gIGNvbG9yOiAjNWM2ODdjOyB9XFxuXFxuLmMtYmctZ3JleS1kYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1YzY4N2M7IH1cXG5cXG4uYy1wdXJwbGUge1xcbiAgY29sb3I6ICM4MTMwZmY7IH1cXG5cXG4uYy1iZy1wdXJwbGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgxMzBmZjsgfVxcblxcbi5jLWxlbW9uIHtcXG4gIGNvbG9yOiAjZmZlYTAwOyB9XFxuXFxuLmMtYmctbGVtb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWEwMDsgfVxcblxcbi5jLWxpbWUge1xcbiAgY29sb3I6ICNhZWU0MDY7IH1cXG5cXG4uYy1iZy1saW1lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhZWU0MDY7IH1cXG5cXG4uYy1vcmFuZ2Uge1xcbiAgY29sb3I6ICNmNTdjMDA7IH1cXG5cXG4uYy1iZy1vcmFuZ2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1N2MwMDsgfVxcblxcbi5jLXJ1Ynkge1xcbiAgY29sb3I6ICNmZjE3NDQ7IH1cXG5cXG4uYy1iZy1ydWJ5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjE3NDQ7IH1cXG5cXG4uYy1za3kge1xcbiAgY29sb3I6ICMzMGJjZmY7IH1cXG5cXG4uYy1iZy1za3kge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwYmNmZjsgfVxcblxcbi8qIFdpZHRoL0hlaWdodCAqL1xcbi53LWZ1bGwge1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4udy0xMDAge1xcbiAgd2lkdGg6IDEwMDsgfVxcblxcbi5oLWZ1bGwge1xcbiAgaGVpZ2h0OiAxMDAlOyB9XFxuXFxuLmgtMTAwIHtcXG4gIGhlaWdodDogMTAwOyB9XFxuXFxuLyoqXFxyXFxuICogTWFyZ2luIGFuZCBQYWRkaW5nXFxyXFxuICogVGhlIGZvbGxvd2luZyBjcmVhdGVzIHRoaXMgcGF0dGVybjpcXHJcXG4gKiAubS0we21hcmdpbjowfS5tLXQtMHttYXJnaW4tdG9wOjB9Lm0tci0we21hcmdpbi1yaWdodDowfS5tLWItMHttYXJnaW4tYm90dG9tOjB9Lm0tbC0we21hcmdpbi1sZWZ0OjB9Lm0teC0we21hcmdpbi1yaWdodDowO21hcmdpbi1sZWZ0OjB9Lm0teS0we21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjB9XFxyXFxuICogU2FtZSBmb3IgUGFkZGluZyAodXNpbmcgdGhlICdwJyBhYmJyZXZpYXRpb24pXFxyXFxuICogRnJvbSAwLCAyLCA1LCAxMCwgMTUsIDIwLCAyNSwgMzBcXHJcXG4qKi9cXG4ubS0wIHtcXG4gIG1hcmdpbjogMDsgfVxcblxcbi5tLXQtMCB7XFxuICBtYXJnaW4tdG9wOiAwOyB9XFxuXFxuLm0tci0wIHtcXG4gIG1hcmdpbi1yaWdodDogMDsgfVxcblxcbi5tLWItMCB7XFxuICBtYXJnaW4tYm90dG9tOiAwOyB9XFxuXFxuLm0tbC0wIHtcXG4gIG1hcmdpbi1sZWZ0OiAwOyB9XFxuXFxuLm0teC0wIHtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG4gIG1hcmdpbi1sZWZ0OiAwOyB9XFxuXFxuLm0teS0wIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAwOyB9XFxuXFxuLm0tMiB7XFxuICBtYXJnaW46IDI7IH1cXG5cXG4ubS10LTIge1xcbiAgbWFyZ2luLXRvcDogMjsgfVxcblxcbi5tLXItMiB7XFxuICBtYXJnaW4tcmlnaHQ6IDI7IH1cXG5cXG4ubS1iLTIge1xcbiAgbWFyZ2luLWJvdHRvbTogMjsgfVxcblxcbi5tLWwtMiB7XFxuICBtYXJnaW4tbGVmdDogMjsgfVxcblxcbi5tLXgtMiB7XFxuICBtYXJnaW4tcmlnaHQ6IDI7XFxuICBtYXJnaW4tbGVmdDogMjsgfVxcblxcbi5tLXktMiB7XFxuICBtYXJnaW4tdG9wOiAyO1xcbiAgbWFyZ2luLWJvdHRvbTogMjsgfVxcblxcbi5tLTQge1xcbiAgbWFyZ2luOiA0OyB9XFxuXFxuLm0tdC00IHtcXG4gIG1hcmdpbi10b3A6IDQ7IH1cXG5cXG4ubS1yLTQge1xcbiAgbWFyZ2luLXJpZ2h0OiA0OyB9XFxuXFxuLm0tYi00IHtcXG4gIG1hcmdpbi1ib3R0b206IDQ7IH1cXG5cXG4ubS1sLTQge1xcbiAgbWFyZ2luLWxlZnQ6IDQ7IH1cXG5cXG4ubS14LTQge1xcbiAgbWFyZ2luLXJpZ2h0OiA0O1xcbiAgbWFyZ2luLWxlZnQ6IDQ7IH1cXG5cXG4ubS15LTQge1xcbiAgbWFyZ2luLXRvcDogNDtcXG4gIG1hcmdpbi1ib3R0b206IDQ7IH1cXG5cXG4ubS01IHtcXG4gIG1hcmdpbjogNTsgfVxcblxcbi5tLXQtNSB7XFxuICBtYXJnaW4tdG9wOiA1OyB9XFxuXFxuLm0tci01IHtcXG4gIG1hcmdpbi1yaWdodDogNTsgfVxcblxcbi5tLWItNSB7XFxuICBtYXJnaW4tYm90dG9tOiA1OyB9XFxuXFxuLm0tbC01IHtcXG4gIG1hcmdpbi1sZWZ0OiA1OyB9XFxuXFxuLm0teC01IHtcXG4gIG1hcmdpbi1yaWdodDogNTtcXG4gIG1hcmdpbi1sZWZ0OiA1OyB9XFxuXFxuLm0teS01IHtcXG4gIG1hcmdpbi10b3A6IDU7XFxuICBtYXJnaW4tYm90dG9tOiA1OyB9XFxuXFxuLm0tOCB7XFxuICBtYXJnaW46IDg7IH1cXG5cXG4ubS10LTgge1xcbiAgbWFyZ2luLXRvcDogODsgfVxcblxcbi5tLXItOCB7XFxuICBtYXJnaW4tcmlnaHQ6IDg7IH1cXG5cXG4ubS1iLTgge1xcbiAgbWFyZ2luLWJvdHRvbTogODsgfVxcblxcbi5tLWwtOCB7XFxuICBtYXJnaW4tbGVmdDogODsgfVxcblxcbi5tLXgtOCB7XFxuICBtYXJnaW4tcmlnaHQ6IDg7XFxuICBtYXJnaW4tbGVmdDogODsgfVxcblxcbi5tLXktOCB7XFxuICBtYXJnaW4tdG9wOiA4O1xcbiAgbWFyZ2luLWJvdHRvbTogODsgfVxcblxcbi5tLTEwIHtcXG4gIG1hcmdpbjogMTA7IH1cXG5cXG4ubS10LTEwIHtcXG4gIG1hcmdpbi10b3A6IDEwOyB9XFxuXFxuLm0tci0xMCB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwOyB9XFxuXFxuLm0tYi0xMCB7XFxuICBtYXJnaW4tYm90dG9tOiAxMDsgfVxcblxcbi5tLWwtMTAge1xcbiAgbWFyZ2luLWxlZnQ6IDEwOyB9XFxuXFxuLm0teC0xMCB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwO1xcbiAgbWFyZ2luLWxlZnQ6IDEwOyB9XFxuXFxuLm0teS0xMCB7XFxuICBtYXJnaW4tdG9wOiAxMDtcXG4gIG1hcmdpbi1ib3R0b206IDEwOyB9XFxuXFxuLm0tMTIge1xcbiAgbWFyZ2luOiAxMjsgfVxcblxcbi5tLXQtMTIge1xcbiAgbWFyZ2luLXRvcDogMTI7IH1cXG5cXG4ubS1yLTEyIHtcXG4gIG1hcmdpbi1yaWdodDogMTI7IH1cXG5cXG4ubS1iLTEyIHtcXG4gIG1hcmdpbi1ib3R0b206IDEyOyB9XFxuXFxuLm0tbC0xMiB7XFxuICBtYXJnaW4tbGVmdDogMTI7IH1cXG5cXG4ubS14LTEyIHtcXG4gIG1hcmdpbi1yaWdodDogMTI7XFxuICBtYXJnaW4tbGVmdDogMTI7IH1cXG5cXG4ubS15LTEyIHtcXG4gIG1hcmdpbi10b3A6IDEyO1xcbiAgbWFyZ2luLWJvdHRvbTogMTI7IH1cXG5cXG4ubS0xNSB7XFxuICBtYXJnaW46IDE1OyB9XFxuXFxuLm0tdC0xNSB7XFxuICBtYXJnaW4tdG9wOiAxNTsgfVxcblxcbi5tLXItMTUge1xcbiAgbWFyZ2luLXJpZ2h0OiAxNTsgfVxcblxcbi5tLWItMTUge1xcbiAgbWFyZ2luLWJvdHRvbTogMTU7IH1cXG5cXG4ubS1sLTE1IHtcXG4gIG1hcmdpbi1sZWZ0OiAxNTsgfVxcblxcbi5tLXgtMTUge1xcbiAgbWFyZ2luLXJpZ2h0OiAxNTtcXG4gIG1hcmdpbi1sZWZ0OiAxNTsgfVxcblxcbi5tLXktMTUge1xcbiAgbWFyZ2luLXRvcDogMTU7XFxuICBtYXJnaW4tYm90dG9tOiAxNTsgfVxcblxcbi5tLTE2IHtcXG4gIG1hcmdpbjogMTY7IH1cXG5cXG4ubS10LTE2IHtcXG4gIG1hcmdpbi10b3A6IDE2OyB9XFxuXFxuLm0tci0xNiB7XFxuICBtYXJnaW4tcmlnaHQ6IDE2OyB9XFxuXFxuLm0tYi0xNiB7XFxuICBtYXJnaW4tYm90dG9tOiAxNjsgfVxcblxcbi5tLWwtMTYge1xcbiAgbWFyZ2luLWxlZnQ6IDE2OyB9XFxuXFxuLm0teC0xNiB7XFxuICBtYXJnaW4tcmlnaHQ6IDE2O1xcbiAgbWFyZ2luLWxlZnQ6IDE2OyB9XFxuXFxuLm0teS0xNiB7XFxuICBtYXJnaW4tdG9wOiAxNjtcXG4gIG1hcmdpbi1ib3R0b206IDE2OyB9XFxuXFxuLm0tMjAge1xcbiAgbWFyZ2luOiAyMDsgfVxcblxcbi5tLXQtMjAge1xcbiAgbWFyZ2luLXRvcDogMjA7IH1cXG5cXG4ubS1yLTIwIHtcXG4gIG1hcmdpbi1yaWdodDogMjA7IH1cXG5cXG4ubS1iLTIwIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwOyB9XFxuXFxuLm0tbC0yMCB7XFxuICBtYXJnaW4tbGVmdDogMjA7IH1cXG5cXG4ubS14LTIwIHtcXG4gIG1hcmdpbi1yaWdodDogMjA7XFxuICBtYXJnaW4tbGVmdDogMjA7IH1cXG5cXG4ubS15LTIwIHtcXG4gIG1hcmdpbi10b3A6IDIwO1xcbiAgbWFyZ2luLWJvdHRvbTogMjA7IH1cXG5cXG4ubS0yNCB7XFxuICBtYXJnaW46IDI0OyB9XFxuXFxuLm0tdC0yNCB7XFxuICBtYXJnaW4tdG9wOiAyNDsgfVxcblxcbi5tLXItMjQge1xcbiAgbWFyZ2luLXJpZ2h0OiAyNDsgfVxcblxcbi5tLWItMjQge1xcbiAgbWFyZ2luLWJvdHRvbTogMjQ7IH1cXG5cXG4ubS1sLTI0IHtcXG4gIG1hcmdpbi1sZWZ0OiAyNDsgfVxcblxcbi5tLXgtMjQge1xcbiAgbWFyZ2luLXJpZ2h0OiAyNDtcXG4gIG1hcmdpbi1sZWZ0OiAyNDsgfVxcblxcbi5tLXktMjQge1xcbiAgbWFyZ2luLXRvcDogMjQ7XFxuICBtYXJnaW4tYm90dG9tOiAyNDsgfVxcblxcbi5tLTI1IHtcXG4gIG1hcmdpbjogMjU7IH1cXG5cXG4ubS10LTI1IHtcXG4gIG1hcmdpbi10b3A6IDI1OyB9XFxuXFxuLm0tci0yNSB7XFxuICBtYXJnaW4tcmlnaHQ6IDI1OyB9XFxuXFxuLm0tYi0yNSB7XFxuICBtYXJnaW4tYm90dG9tOiAyNTsgfVxcblxcbi5tLWwtMjUge1xcbiAgbWFyZ2luLWxlZnQ6IDI1OyB9XFxuXFxuLm0teC0yNSB7XFxuICBtYXJnaW4tcmlnaHQ6IDI1O1xcbiAgbWFyZ2luLWxlZnQ6IDI1OyB9XFxuXFxuLm0teS0yNSB7XFxuICBtYXJnaW4tdG9wOiAyNTtcXG4gIG1hcmdpbi1ib3R0b206IDI1OyB9XFxuXFxuLm0tMjgge1xcbiAgbWFyZ2luOiAyODsgfVxcblxcbi5tLXQtMjgge1xcbiAgbWFyZ2luLXRvcDogMjg7IH1cXG5cXG4ubS1yLTI4IHtcXG4gIG1hcmdpbi1yaWdodDogMjg7IH1cXG5cXG4ubS1iLTI4IHtcXG4gIG1hcmdpbi1ib3R0b206IDI4OyB9XFxuXFxuLm0tbC0yOCB7XFxuICBtYXJnaW4tbGVmdDogMjg7IH1cXG5cXG4ubS14LTI4IHtcXG4gIG1hcmdpbi1yaWdodDogMjg7XFxuICBtYXJnaW4tbGVmdDogMjg7IH1cXG5cXG4ubS15LTI4IHtcXG4gIG1hcmdpbi10b3A6IDI4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjg7IH1cXG5cXG4ubS0zMCB7XFxuICBtYXJnaW46IDMwOyB9XFxuXFxuLm0tdC0zMCB7XFxuICBtYXJnaW4tdG9wOiAzMDsgfVxcblxcbi5tLXItMzAge1xcbiAgbWFyZ2luLXJpZ2h0OiAzMDsgfVxcblxcbi5tLWItMzAge1xcbiAgbWFyZ2luLWJvdHRvbTogMzA7IH1cXG5cXG4ubS1sLTMwIHtcXG4gIG1hcmdpbi1sZWZ0OiAzMDsgfVxcblxcbi5tLXgtMzAge1xcbiAgbWFyZ2luLXJpZ2h0OiAzMDtcXG4gIG1hcmdpbi1sZWZ0OiAzMDsgfVxcblxcbi5tLXktMzAge1xcbiAgbWFyZ2luLXRvcDogMzA7XFxuICBtYXJnaW4tYm90dG9tOiAzMDsgfVxcblxcbi5wLTAge1xcbiAgcGFkZGluZzogMDsgfVxcblxcbi5wLXQtMCB7XFxuICBwYWRkaW5nLXRvcDogMDsgfVxcblxcbi5wLXItMCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAwOyB9XFxuXFxuLnAtYi0wIHtcXG4gIHBhZGRpbmctYm90dG9tOiAwOyB9XFxuXFxuLnAtbC0wIHtcXG4gIHBhZGRpbmctbGVmdDogMDsgfVxcblxcbi5wLXgtMCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAwO1xcbiAgcGFkZGluZy1sZWZ0OiAwOyB9XFxuXFxuLnAteS0wIHtcXG4gIHBhZGRpbmctdG9wOiAwO1xcbiAgcGFkZGluZy1ib3R0b206IDA7IH1cXG5cXG4ucC0yIHtcXG4gIHBhZGRpbmc6IDI7IH1cXG5cXG4ucC10LTIge1xcbiAgcGFkZGluZy10b3A6IDI7IH1cXG5cXG4ucC1yLTIge1xcbiAgcGFkZGluZy1yaWdodDogMjsgfVxcblxcbi5wLWItMiB7XFxuICBwYWRkaW5nLWJvdHRvbTogMjsgfVxcblxcbi5wLWwtMiB7XFxuICBwYWRkaW5nLWxlZnQ6IDI7IH1cXG5cXG4ucC14LTIge1xcbiAgcGFkZGluZy1yaWdodDogMjtcXG4gIHBhZGRpbmctbGVmdDogMjsgfVxcblxcbi5wLXktMiB7XFxuICBwYWRkaW5nLXRvcDogMjtcXG4gIHBhZGRpbmctYm90dG9tOiAyOyB9XFxuXFxuLnAtNCB7XFxuICBwYWRkaW5nOiA0OyB9XFxuXFxuLnAtdC00IHtcXG4gIHBhZGRpbmctdG9wOiA0OyB9XFxuXFxuLnAtci00IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDQ7IH1cXG5cXG4ucC1iLTQge1xcbiAgcGFkZGluZy1ib3R0b206IDQ7IH1cXG5cXG4ucC1sLTQge1xcbiAgcGFkZGluZy1sZWZ0OiA0OyB9XFxuXFxuLnAteC00IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDQ7XFxuICBwYWRkaW5nLWxlZnQ6IDQ7IH1cXG5cXG4ucC15LTQge1xcbiAgcGFkZGluZy10b3A6IDQ7XFxuICBwYWRkaW5nLWJvdHRvbTogNDsgfVxcblxcbi5wLTUge1xcbiAgcGFkZGluZzogNTsgfVxcblxcbi5wLXQtNSB7XFxuICBwYWRkaW5nLXRvcDogNTsgfVxcblxcbi5wLXItNSB7XFxuICBwYWRkaW5nLXJpZ2h0OiA1OyB9XFxuXFxuLnAtYi01IHtcXG4gIHBhZGRpbmctYm90dG9tOiA1OyB9XFxuXFxuLnAtbC01IHtcXG4gIHBhZGRpbmctbGVmdDogNTsgfVxcblxcbi5wLXgtNSB7XFxuICBwYWRkaW5nLXJpZ2h0OiA1O1xcbiAgcGFkZGluZy1sZWZ0OiA1OyB9XFxuXFxuLnAteS01IHtcXG4gIHBhZGRpbmctdG9wOiA1O1xcbiAgcGFkZGluZy1ib3R0b206IDU7IH1cXG5cXG4ucC04IHtcXG4gIHBhZGRpbmc6IDg7IH1cXG5cXG4ucC10LTgge1xcbiAgcGFkZGluZy10b3A6IDg7IH1cXG5cXG4ucC1yLTgge1xcbiAgcGFkZGluZy1yaWdodDogODsgfVxcblxcbi5wLWItOCB7XFxuICBwYWRkaW5nLWJvdHRvbTogODsgfVxcblxcbi5wLWwtOCB7XFxuICBwYWRkaW5nLWxlZnQ6IDg7IH1cXG5cXG4ucC14LTgge1xcbiAgcGFkZGluZy1yaWdodDogODtcXG4gIHBhZGRpbmctbGVmdDogODsgfVxcblxcbi5wLXktOCB7XFxuICBwYWRkaW5nLXRvcDogODtcXG4gIHBhZGRpbmctYm90dG9tOiA4OyB9XFxuXFxuLnAtMTAge1xcbiAgcGFkZGluZzogMTA7IH1cXG5cXG4ucC10LTEwIHtcXG4gIHBhZGRpbmctdG9wOiAxMDsgfVxcblxcbi5wLXItMTAge1xcbiAgcGFkZGluZy1yaWdodDogMTA7IH1cXG5cXG4ucC1iLTEwIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxMDsgfVxcblxcbi5wLWwtMTAge1xcbiAgcGFkZGluZy1sZWZ0OiAxMDsgfVxcblxcbi5wLXgtMTAge1xcbiAgcGFkZGluZy1yaWdodDogMTA7XFxuICBwYWRkaW5nLWxlZnQ6IDEwOyB9XFxuXFxuLnAteS0xMCB7XFxuICBwYWRkaW5nLXRvcDogMTA7XFxuICBwYWRkaW5nLWJvdHRvbTogMTA7IH1cXG5cXG4ucC0xMiB7XFxuICBwYWRkaW5nOiAxMjsgfVxcblxcbi5wLXQtMTIge1xcbiAgcGFkZGluZy10b3A6IDEyOyB9XFxuXFxuLnAtci0xMiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMjsgfVxcblxcbi5wLWItMTIge1xcbiAgcGFkZGluZy1ib3R0b206IDEyOyB9XFxuXFxuLnAtbC0xMiB7XFxuICBwYWRkaW5nLWxlZnQ6IDEyOyB9XFxuXFxuLnAteC0xMiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMjtcXG4gIHBhZGRpbmctbGVmdDogMTI7IH1cXG5cXG4ucC15LTEyIHtcXG4gIHBhZGRpbmctdG9wOiAxMjtcXG4gIHBhZGRpbmctYm90dG9tOiAxMjsgfVxcblxcbi5wLTE1IHtcXG4gIHBhZGRpbmc6IDE1OyB9XFxuXFxuLnAtdC0xNSB7XFxuICBwYWRkaW5nLXRvcDogMTU7IH1cXG5cXG4ucC1yLTE1IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDE1OyB9XFxuXFxuLnAtYi0xNSB7XFxuICBwYWRkaW5nLWJvdHRvbTogMTU7IH1cXG5cXG4ucC1sLTE1IHtcXG4gIHBhZGRpbmctbGVmdDogMTU7IH1cXG5cXG4ucC14LTE1IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDE1O1xcbiAgcGFkZGluZy1sZWZ0OiAxNTsgfVxcblxcbi5wLXktMTUge1xcbiAgcGFkZGluZy10b3A6IDE1O1xcbiAgcGFkZGluZy1ib3R0b206IDE1OyB9XFxuXFxuLnAtMTYge1xcbiAgcGFkZGluZzogMTY7IH1cXG5cXG4ucC10LTE2IHtcXG4gIHBhZGRpbmctdG9wOiAxNjsgfVxcblxcbi5wLXItMTYge1xcbiAgcGFkZGluZy1yaWdodDogMTY7IH1cXG5cXG4ucC1iLTE2IHtcXG4gIHBhZGRpbmctYm90dG9tOiAxNjsgfVxcblxcbi5wLWwtMTYge1xcbiAgcGFkZGluZy1sZWZ0OiAxNjsgfVxcblxcbi5wLXgtMTYge1xcbiAgcGFkZGluZy1yaWdodDogMTY7XFxuICBwYWRkaW5nLWxlZnQ6IDE2OyB9XFxuXFxuLnAteS0xNiB7XFxuICBwYWRkaW5nLXRvcDogMTY7XFxuICBwYWRkaW5nLWJvdHRvbTogMTY7IH1cXG5cXG4ucC0yMCB7XFxuICBwYWRkaW5nOiAyMDsgfVxcblxcbi5wLXQtMjAge1xcbiAgcGFkZGluZy10b3A6IDIwOyB9XFxuXFxuLnAtci0yMCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMDsgfVxcblxcbi5wLWItMjAge1xcbiAgcGFkZGluZy1ib3R0b206IDIwOyB9XFxuXFxuLnAtbC0yMCB7XFxuICBwYWRkaW5nLWxlZnQ6IDIwOyB9XFxuXFxuLnAteC0yMCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMDtcXG4gIHBhZGRpbmctbGVmdDogMjA7IH1cXG5cXG4ucC15LTIwIHtcXG4gIHBhZGRpbmctdG9wOiAyMDtcXG4gIHBhZGRpbmctYm90dG9tOiAyMDsgfVxcblxcbi5wLTI0IHtcXG4gIHBhZGRpbmc6IDI0OyB9XFxuXFxuLnAtdC0yNCB7XFxuICBwYWRkaW5nLXRvcDogMjQ7IH1cXG5cXG4ucC1yLTI0IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDI0OyB9XFxuXFxuLnAtYi0yNCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMjQ7IH1cXG5cXG4ucC1sLTI0IHtcXG4gIHBhZGRpbmctbGVmdDogMjQ7IH1cXG5cXG4ucC14LTI0IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDI0O1xcbiAgcGFkZGluZy1sZWZ0OiAyNDsgfVxcblxcbi5wLXktMjQge1xcbiAgcGFkZGluZy10b3A6IDI0O1xcbiAgcGFkZGluZy1ib3R0b206IDI0OyB9XFxuXFxuLnAtMjUge1xcbiAgcGFkZGluZzogMjU7IH1cXG5cXG4ucC10LTI1IHtcXG4gIHBhZGRpbmctdG9wOiAyNTsgfVxcblxcbi5wLXItMjUge1xcbiAgcGFkZGluZy1yaWdodDogMjU7IH1cXG5cXG4ucC1iLTI1IHtcXG4gIHBhZGRpbmctYm90dG9tOiAyNTsgfVxcblxcbi5wLWwtMjUge1xcbiAgcGFkZGluZy1sZWZ0OiAyNTsgfVxcblxcbi5wLXgtMjUge1xcbiAgcGFkZGluZy1yaWdodDogMjU7XFxuICBwYWRkaW5nLWxlZnQ6IDI1OyB9XFxuXFxuLnAteS0yNSB7XFxuICBwYWRkaW5nLXRvcDogMjU7XFxuICBwYWRkaW5nLWJvdHRvbTogMjU7IH1cXG5cXG4ucC0yOCB7XFxuICBwYWRkaW5nOiAyODsgfVxcblxcbi5wLXQtMjgge1xcbiAgcGFkZGluZy10b3A6IDI4OyB9XFxuXFxuLnAtci0yOCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyODsgfVxcblxcbi5wLWItMjgge1xcbiAgcGFkZGluZy1ib3R0b206IDI4OyB9XFxuXFxuLnAtbC0yOCB7XFxuICBwYWRkaW5nLWxlZnQ6IDI4OyB9XFxuXFxuLnAteC0yOCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyODtcXG4gIHBhZGRpbmctbGVmdDogMjg7IH1cXG5cXG4ucC15LTI4IHtcXG4gIHBhZGRpbmctdG9wOiAyODtcXG4gIHBhZGRpbmctYm90dG9tOiAyODsgfVxcblxcbi5wLTMwIHtcXG4gIHBhZGRpbmc6IDMwOyB9XFxuXFxuLnAtdC0zMCB7XFxuICBwYWRkaW5nLXRvcDogMzA7IH1cXG5cXG4ucC1yLTMwIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDMwOyB9XFxuXFxuLnAtYi0zMCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMzA7IH1cXG5cXG4ucC1sLTMwIHtcXG4gIHBhZGRpbmctbGVmdDogMzA7IH1cXG5cXG4ucC14LTMwIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDMwO1xcbiAgcGFkZGluZy1sZWZ0OiAzMDsgfVxcblxcbi5wLXktMzAge1xcbiAgcGFkZGluZy10b3A6IDMwO1xcbiAgcGFkZGluZy1ib3R0b206IDMwOyB9XFxuXFxuLyogRGl2aWRlcnMgKi9cXG4uaHItbGlnaHQge1xcbiAgaGVpZ2h0OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLmhyLWRhcmsge1xcbiAgaGVpZ2h0OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzAzMDtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLyogQWxpZ25tZW50ICovXFxuLnRleHQtbGVmdCB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0OyB9XFxuXFxuLnRleHQtcmlnaHQge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cXG5cXG4udGV4dC1jZW50ZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLnRleHQtbG93ZXJjYXNlIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7IH1cXG5cXG4udGV4dC11cHBlcmNhc2Uge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxcblxcbi50ZXh0LWNhcGl0YWxpemUge1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7IH1cXG5cXG4uZm9udC13ZWlnaHQtbm9ybWFsIHtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7IH1cXG5cXG4uZm9udC13ZWlnaHQtYm9sZCB7XFxuICBmb250LXdlaWdodDogYm9sZDsgfVxcblxcbi5mb250LWl0YWxpYyB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7IH1cXG5cXG4vKipcXHJcXG4gKiBGb250IHNpemVcXHJcXG4gKiBUaGUgZm9sbG93aW5nIGNyZWF0ZXMgdGhpcyBwYXR0ZXJuOlxcclxcbiAqIC50LTEwe2ZvbnQtc2l6ZToxMH1cXHJcXG4gKiBGcm9tIDEwLCAxMiwgMTQsIDE1LCAxNiwgMTcsIDE4LCAxOSwgMjBcXHJcXG4qKi9cXG4udC0xMCB7XFxuICBmb250LXNpemU6IDEwOyB9XFxuXFxuLnQtMTIge1xcbiAgZm9udC1zaXplOiAxMjsgfVxcblxcbi50LTE0IHtcXG4gIGZvbnQtc2l6ZTogMTQ7IH1cXG5cXG4udC0xNSB7XFxuICBmb250LXNpemU6IDE1OyB9XFxuXFxuLnQtMTYge1xcbiAgZm9udC1zaXplOiAxNjsgfVxcblxcbi50LTE3IHtcXG4gIGZvbnQtc2l6ZTogMTc7IH1cXG5cXG4udC0xOCB7XFxuICBmb250LXNpemU6IDE4OyB9XFxuXFxuLnQtMTkge1xcbiAgZm9udC1zaXplOiAxOTsgfVxcblxcbi50LTIwIHtcXG4gIGZvbnQtc2l6ZTogMjA7IH1cXG5cXG4udC0yNSB7XFxuICBmb250LXNpemU6IDI1OyB9XFxuXFxuLnQtMzAge1xcbiAgZm9udC1zaXplOiAzMDsgfVxcblxcbi5pbWctcm91bmRlZCB7XFxuICBib3JkZXItcmFkaXVzOiA1OyB9XFxuXFxuLmltZy1jaXJjbGUge1xcbiAgYm9yZGVyLXJhZGl1czogMjA7IH1cXG5cXG4uaW1nLXRodW1ibmFpbCB7XFxuICBib3JkZXItcmFkaXVzOiAwOyB9XFxuXFxuLmludmlzaWJsZSB7XFxuICB2aXNpYmlsaXR5OiBjb2xsYXBzZTsgfVxcblxcbi5wdWxsLWxlZnQge1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogbGVmdDsgfVxcblxcbi5wdWxsLXJpZ2h0IHtcXG4gIGhvcml6b250YWwtYWxpZ246IHJpZ2h0OyB9XFxuXFxuLm0teC1hdXRvIHtcXG4gIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjsgfVxcblxcbi5tLXktYXV0byB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLnRleHQtcHJpbWFyeSB7XFxuICBjb2xvcjogIzNBNTNGRjsgfVxcblxcbi50ZXh0LWRhbmdlciB7XFxuICBjb2xvcjogI0VENDczRjsgfVxcblxcbi50ZXh0LW11dGVkIHtcXG4gIGNvbG9yOiAjOWU5ZTllOyB9XFxuXFxuLmJnLXByaW1hcnkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNBNTNGRjtcXG4gIGNvbG9yOiAjZmZmOyB9XFxuXFxuLmJnLWRhbmdlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUQ0NzNGO1xcbiAgY29sb3I6ICNmZmY7IH1cXG5cXG4uYWN0aW9uLWJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0E1M0ZGO1xcbiAgY29sb3I6ICNmZmY7IH1cXG4gIC5hY3Rpb24tYmFyIC5hY3Rpb24tYmFyLXRpdGxlIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMTc7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7IH1cXG4gIC5hY3Rpb24tYmFyIC5hY3Rpb24taXRlbSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7IH1cXG5cXG4uYWN0aXZpdHktaW5kaWNhdG9yIHtcXG4gIGNvbG9yOiAjM0E1M0ZGO1xcbiAgd2lkdGg6IDMwO1xcbiAgaGVpZ2h0OiAzMDsgfVxcblxcbi5idG4ge1xcbiAgY29sb3I6ICMwMjU1NmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIG1pbi1oZWlnaHQ6IDM2O1xcbiAgbWluLXdpZHRoOiA2NDtcXG4gIHBhZGRpbmc6IDEwIDEwIDEwIDEwO1xcbiAgZm9udC1zaXplOiAxODtcXG4gIG1hcmdpbjogOCAxNiA4IDE2OyB9XFxuICAuYnRuLmJ0bi1hY3RpdmU6aGlnaGxpZ2h0ZWQge1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAzN2NhMDsgfVxcblxcbi5idG4tcHJpbWFyeSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI1NTZlO1xcbiAgYm9yZGVyLWNvbG9yOiAjMDI1NTZlO1xcbiAgY29sb3I6ICNmZmY7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tYWN0aXZlOmhpZ2hsaWdodGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxMmUzYztcXG4gICAgYm9yZGVyLWNvbG9yOiAjMDEyZTNjOyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLWFxdWEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjYWFiOyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLWJsdWUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Q1YWZlOyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLWJyb3duIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc5NTU0ODsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1mb3Jlc3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2OTY4OyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLWdyZXkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWM2ODdjOyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLWxlbW9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWEwMDtcXG4gICAgY29sb3I6ICMwMDA7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tbGltZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhZWU0MDY7XFxuICAgIGNvbG9yOiAjMDAwOyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLW9yYW5nZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNTdjMDA7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tcHVycGxlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgxMzBmZjsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1ydWJ5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMTc0NDsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1za3kge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzBiY2ZmOyB9XFxuXFxuLmJ0bi1vdXRsaW5lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWNvbG9yOiAjMDI1NTZlO1xcbiAgY29sb3I6ICMwMjU1NmU7IH1cXG4gIC5idG4tb3V0bGluZS5idG4tYWN0aXZlOmhpZ2hsaWdodGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAzN2NhMDsgfVxcblxcbi5idG5baXNFbmFibGVkPWZhbHNlXSB7XFxuICBjb2xvcjogI2E0YTRhNDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxuICBib3JkZXItY29sb3I6ICNlMGUwZTA7IH1cXG5cXG4uZmEge1xcbiAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lLCBmb250YXdlc29tZS13ZWJmb250OyB9XFxuXFxuLmZvcm0gLmlucHV0IHtcXG4gIHBhZGRpbmc6IDE2IDggMTYgODtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuICAuZm9ybSAuaW5wdXQuaW5wdXQtYm9yZGVyIHtcXG4gICAgYm9yZGVyLXdpZHRoOiAxO1xcbiAgICBib3JkZXItY29sb3I6ICNlMGUwZTA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI7XFxuICAgIHBhZGRpbmc6IDE2OyB9XFxuICAuZm9ybSAuaW5wdXQuaW5wdXQtcm91bmRlZCB7XFxuICAgIGJvcmRlci13aWR0aDogMTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZTBlMGUwO1xcbiAgICBib3JkZXItcmFkaXVzOiAyODtcXG4gICAgcGFkZGluZzogMTY7IH1cXG4gIC5mb3JtIC5pbnB1dFtpc0VuYWJsZWQ9J2ZhbHNlJ10ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhOyB9XFxuXFxuLmZvcm0gLmlucHV0LWZpZWxkIHtcXG4gIG1hcmdpbjogODsgfVxcbiAgLmZvcm0gLmlucHV0LWZpZWxkIC5sYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMTI7XFxuICAgIGNvbG9yOiAjYmFiYWJhOyB9XFxuICAuZm9ybSAuaW5wdXQtZmllbGQgLmlucHV0IHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwIDAgOCAwOyB9XFxuICAuZm9ybSAuaW5wdXQtZmllbGQgLmhyLWxpZ2h0LmFjdGl2ZSxcXG4gIC5mb3JtIC5pbnB1dC1maWVsZCAuaHItZGFyay5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0E1M0ZGOyB9XFxuICAuZm9ybSAuaW5wdXQtZmllbGQuaW5wdXQtc2lkZXMgLmxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxODtcXG4gICAgbWFyZ2luOiAwIDAgOCAwOyB9XFxuXFxuLmgxLCAuaDIsIC5oMywgLmg0LCAuaDUsIC5oNiB7XFxuICBtYXJnaW4tYm90dG9tOiA0O1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGNvbG9yOiAjMDIyNzM0OyB9XFxuXFxuLmJvZHksXFxuLmJvZHkyLFxcbi5mb290bm90ZSB7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgY29sb3I6ICMwMjI3MzQ7IH1cXG5cXG4uaDEge1xcbiAgZm9udC1zaXplOiAzMjsgfVxcblxcbi5oMiB7XFxuICBmb250LXNpemU6IDIyOyB9XFxuXFxuLmgzIHtcXG4gIGZvbnQtc2l6ZTogMTU7IH1cXG5cXG4uaDQge1xcbiAgZm9udC1zaXplOiAxMjsgfVxcblxcbi5oNSB7XFxuICBmb250LXNpemU6IDExOyB9XFxuXFxuLmg2IHtcXG4gIGZvbnQtc2l6ZTogMTA7IH1cXG5cXG4uYm9keSB7XFxuICBmb250LXNpemU6IDE0OyB9XFxuXFxuLmJvZHkyIHtcXG4gIGZvbnQtc2l6ZTogMTc7IH1cXG5cXG4uZm9vdG5vdGUge1xcbiAgZm9udC1zaXplOiAxMzsgfVxcblxcbi5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW0ge1xcbiAgY29sb3I6ICMyMTIxMjE7XFxuICBmb250LXNpemU6IDE2O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMTY7IH1cXG4gIC5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW0gTGFiZWwge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyOyB9XFxuICAubGlzdC1ncm91cCAubGlzdC1ncm91cC1pdGVtIC50aHVtYiB7XFxuICAgIHN0cmV0Y2g6IGZpbGw7XFxuICAgIHdpZHRoOiA0MDtcXG4gICAgaGVpZ2h0OiA0MDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNjsgfVxcbiAgLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwOyB9XFxuICAubGlzdC1ncm91cCAubGlzdC1ncm91cC1pdGVtIC5saXN0LWdyb3VwLWl0ZW0tdGV4dCB7XFxuICAgIGNvbG9yOiAjMDIyNzM0O1xcbiAgICBmb250LXNpemU6IDE0OyB9XFxuXFxuLnBhZ2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxcblxcbi5wcm9ncmVzcyB7XFxuICBjb2xvcjogIzNBNTNGRjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiYWJhYmE7IH1cXG5cXG4uc2VnbWVudGVkLWJhciB7XFxuICBmb250LXNpemU6IDEzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGNvbG9yOiAjMjEyMTIxO1xcbiAgc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcjogIzNBNTNGRjsgfVxcblxcbi5zaWRlZHJhd2VyLWxlZnQsIC5zaWRlZHJhd2VyLWNlbnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGOyB9XFxuXFxuLnNpZGVkcmF3ZXItaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XFxuICBoZWlnaHQ6IDE0ODtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLnNpZGVkcmF3ZXItbGVmdCAuc2lkZWRyYXdlci1oZWFkZXIge1xcbiAgcGFkZGluZzogMTYgMTYgMCAxNjsgfVxcblxcbi5zaWRlZHJhd2VyLWNlbnRlciAuc2lkZWRyYXdlci1oZWFkZXIge1xcbiAgcGFkZGluZzogMjAgMTUgMCAxNTsgfVxcblxcbi5zaWRlZHJhd2VyLWhlYWRlci1pbWFnZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwOyB9XFxuXFxuLnNpZGVkcmF3ZXItbGVmdCAuc2lkZWRyYXdlci1oZWFkZXItaW1hZ2Uge1xcbiAgaGVpZ2h0OiA2NDtcXG4gIHdpZHRoOiA2NDtcXG4gIGJvcmRlci1yYWRpdXM6IDMyO1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogbGVmdDtcXG4gIG1hcmdpbi1ib3R0b206IDM2OyB9XFxuXFxuLnNpZGVkcmF3ZXItY2VudGVyIC5zaWRlZHJhd2VyLWhlYWRlci1pbWFnZSB7XFxuICBoZWlnaHQ6IDc0O1xcbiAgd2lkdGg6IDc0O1xcbiAgYm9yZGVyLXJhZGl1czogMzc7XFxuICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAyNDsgfVxcblxcbi5zaWRlZHJhd2VyLWhlYWRlci1icmFuZCB7XFxuICBjb2xvcjogIzczNzM3MzsgfVxcblxcbi5zaWRlZHJhd2VyLWxlZnQgLnNpZGVkcmF3ZXItaGVhZGVyLWJyYW5kIHtcXG4gIGhvcml6b250YWwtYWxpZ246IGxlZnQ7XFxuICBmb250LXNpemU6IDE0OyB9XFxuXFxuLnNpZGVkcmF3ZXItY2VudGVyIC5zaWRlZHJhd2VyLWhlYWRlci1icmFuZCB7XFxuICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE1OyB9XFxuXFxuLnNpZGVkcmF3ZXItbGlzdC1pdGVtIHtcXG4gIGhlaWdodDogNDg7XFxuICBob3Jpem9udGFsLWFsaWduOiBsZWZ0O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvcmllbnRhdGlvbjogaG9yaXpvbnRhbDsgfVxcbiAgLnNpZGVkcmF3ZXItbGlzdC1pdGVtIC5zaWRlZHJhd2VyLWxpc3QtaXRlbS1pY29uIHtcXG4gICAgd2lkdGg6IDI0O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjA7XFxuICAgIGhlaWdodDogNDg7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7IH1cXG4gIC5zaWRlZHJhd2VyLWxpc3QtaXRlbS5hY3RpdmUge1xcbiAgICBjb2xvcjogIzNBNTNGRjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGODsgfVxcbiAgICAuc2lkZWRyYXdlci1saXN0LWl0ZW0uYWN0aXZlIC5zaWRlZHJhd2VyLWxpc3QtaXRlbS1pY29uIHtcXG4gICAgICBjb2xvcjogIzNBNTNGRjsgfVxcblxcbi5zaWRlZHJhd2VyLWxlZnQgLnNpZGVkcmF3ZXItbGlzdC1pdGVtLWljb24ge1xcbiAgbWFyZ2luOiAwIDE2IDAgMTY7IH1cXG5cXG4uc2lkZWRyYXdlci1jZW50ZXIgLnNpZGVkcmF3ZXItbGlzdC1pdGVtLWljb24ge1xcbiAgbWFyZ2luOiAwIDAgMCAxNTsgfVxcblxcbi5zaWRlZHJhd2VyLWxpc3QtaXRlbS10ZXh0IHtcXG4gIGhvcml6b250YWwtYWxpZ246IGxlZnQ7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZm9udC1zaXplOiAxNTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXdpZHRoOiAwLjE7XFxuICB3aWR0aDogODAlO1xcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjsgfVxcblxcbi5zaWRlZHJhd2VyLWxlZnQgLnNpZGVkcmF3ZXItbGlzdC1pdGVtLXRleHQge1xcbiAgcGFkZGluZy1sZWZ0OiAxNjsgfVxcblxcbi5zaWRlZHJhd2VyLWNlbnRlciAuc2lkZWRyYXdlci1saXN0LWl0ZW0tdGV4dCB7XFxuICBwYWRkaW5nLWxlZnQ6IDE1OyB9XFxuXFxuLnNsaWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0E1M0ZGOyB9XFxuICAuc2xpZGVyW2lzRW5hYmxlZD1mYWxzZV0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbiAgICBjb2xvcjogI2UwZTBlMDsgfVxcblxcbi5zd2l0Y2hbY2hlY2tlZD10cnVlXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0E1M0ZGO1xcbiAgY29sb3I6ICMzQTUzRkY7IH1cXG5cXG4uc3dpdGNoW2NoZWNrZWQ9dHJ1ZV1baXNFbmFibGVkPWZhbHNlXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbiAgY29sb3I6ICNmZmY7IH1cXG5cXG4uc3dpdGNoW2lzRW5hYmxlZD1mYWxzZV0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG4gIGNvbG9yOiAjZTBlMGUwOyB9XFxuXFxuLnRhYi12aWV3IHtcXG4gIC8qY29sb3I6ICRzZWNvbmRhcnk7Ki9cXG4gIHNlbGVjdGVkLWNvbG9yOiAjMzBiY2ZmO1xcbiAgdGFicy1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XFxuICAudGFiLXZpZXcgLnRhYi12aWV3LWl0ZW0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICB0YWJzLWJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cXG5cXG4jbG9naW4tYmFja2dyb3VuZCB7XFxuICBtYXJnaW4tdG9wOiAtMjA7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyB9XFxuXFxuLmxvZ2luLXdyYXAge1xcbiAgcGFkZGluZzogMCA0MDsgfVxcblxcbi5sb2dvLXdyYXAge1xcbiAgbWFyZ2luOiA2MCAwIDEwIDA7XFxuICBwYWRkaW5nOiAyMCAwOyB9XFxuICAubG9nby13cmFwIC5sb2dpbi1sb2dvIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDMwO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTA7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGNvbG9yOiAjMjEyMTIxO1xcbiAgICBvcGFjaXR5OiAuOTsgfVxcbiAgLmxvZ28td3JhcCAubG9naW4tbG9nby1zdWIge1xcbiAgICBjb2xvcjogIzIxMjEyMTtcXG4gICAgb3BhY2l0eTogLjg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi5sb2dpbi13cmFwcGVyIHtcXG4gIHBhZGRpbmc6IDIwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDM7IH1cXG4gIC5sb2dpbi13cmFwcGVyIFRleHRGaWVsZCB7XFxuICAgIHBhZGRpbmc6IDEwIDEwO1xcbiAgICBtYXJnaW46IDEwIDAgMCAwOyB9XFxuXFxuLmdvLWJhY2sge1xcbiAgZm9udC1zaXplOiAxNDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjMjEyMTIxO1xcbiAgbWFyZ2luLXRvcDogMTA7IH1cXG5cXG4vKipcXHJcXG4gKiBJbXBvcnQgYWxsIHBsYXRmb3JtIHNwZWNpZmljIGZpbGVzIGhlcmVcXHJcXG4gKi9cXG4uYWN0aW9uLWJhciAuYWN0aW9uLWJhci10aXRsZSB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAyMDsgfVxcblxcbi5hY3Rpb24tYmFyIC5hY3Rpb24taXRlbSB7XFxuICBhbmRyb2lkLWVsZXZhdGlvbjogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwKTtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDApO1xcbiAgYm9yZGVyLXdpZHRoOiAxOyB9XFxuXFxuLmJ0biB7XFxuICBmb250LWZhbWlseTogJ1JvYm90byBNZWRpdW0nO1xcbiAgZm9udC1zaXplOiAxNDsgfVxcblxcbi5idG4tcHJpbWFyeSB7XFxuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwKTsgfVxcblxcbi5idG4tb3V0bGluZSB7XFxuICBhbmRyb2lkLWVsZXZhdGlvbjogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwKTtcXG4gIGJvcmRlci13aWR0aDogMTtcXG4gIGJvcmRlci1jb2xvcjogIzAyNTU2ZTtcXG4gIGhlaWdodDogMzY7XFxuICBwYWRkaW5nOiAwOyB9XFxuXFxuLmJ0bi1yb3VuZGVkLXNtIHtcXG4gIGJvcmRlci1yYWRpdXM6IDI7XFxuICBoZWlnaHQ6IDM2O1xcbiAgcGFkZGluZzogMDsgfVxcblxcbi5idG4tcm91bmRlZC1sZyB7XFxuICBib3JkZXItcmFkaXVzOiA0MDtcXG4gIGhlaWdodDogMzY7XFxuICBwYWRkaW5nOiAwOyB9XFxuXFxuLmZvcm0ge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gUmVndWxhcic7IH1cXG4gIC5mb3JtIC5pbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMTY7IH1cXG5cXG4uaDEge1xcbiAgZm9udC1zaXplOiAzNDsgfVxcblxcbi5oMiB7XFxuICBmb250LXNpemU6IDI0OyB9XFxuXFxuLmgzIHtcXG4gIGZvbnQtc2l6ZTogMTY7IH1cXG5cXG4uaDUge1xcbiAgZm9udC1zaXplOiAxMTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuXFxuLmJvZHkyIHtcXG4gIGZvbnQtc2l6ZTogMTQ7XFxuICBmb250LXdlaWdodDogNTAwOyB9XFxuXFxuLnNpZGVkcmF3ZXItbGlzdC1pdGVtLWljb24ge1xcbiAgbWFyZ2luOiAwIDE2IDAgMTY7XFxuICBwYWRkaW5nLXRvcDogMTQ7IH1cXG5cXG4uc2lkZWRyYXdlci1saXN0LWl0ZW0taWNvbiwgLnNpZGVkcmF3ZXItbGlzdC1pdGVtIHtcXG4gIGNvbG9yOiAjMDIyNzM0OyB9XFxuXFxuLnNpZGVkcmF3ZXItbGlzdC1pdGVtIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XFxuICBmb250LXNpemU6IDE0OyB9XFxuXFxuLnNsaWRlciB7XFxuICBjb2xvcjogIzNBNTNGRjtcXG4gIG1hcmdpbjogMjAgMTY7IH1cXG5cXG4uc3dpdGNoIHtcXG4gIG1hcmdpbjogMTQgMTY7XFxuICBjb2xvcjogI2UwZTBlMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7IH1cXG4gIC5zd2l0Y2hbY2hlY2tlZD10cnVlXSB7XFxuICAgIGNvbG9yOiAjM0E1M0ZGOyB9XFxuXFxuLmZhIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udEF3ZXNvbWVcXFwiOyB9XFxuXFxuLmFjdGlvbi1pdGVtLFxcbk5hdmlnYXRpb25CdXR0b24ge1xcbiAgY29sb3I6ICNmZmY7IH1cXG5cXG4uYWN0aW9uLWl0ZW06ZGlzYWJsZWQge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTsgfVxcblxcblNsaWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0E1M0ZGO1xcbiAgY29sb3I6ICMzQTUzRkY7IH1cXG5cXG4udGV4dCB7XFxuICBjb2xvcjogIzAyMjczNDsgfVxcblxcbi50ZXh0LXByaW1hcnkge1xcbiAgY29sb3I6ICMzQTUzRkY7IH1cXG5cXG4udGV4dC1zZWNvbmRhcnkge1xcbiAgY29sb3I6IHJnYmEoMiwgMzksIDUyLCAwLjUpOyB9XFxuXFxuLmFjdGlvbi1pdGVtIHtcXG4gIHBhZGRpbmc6IDAgMTA7XFxuICBoZWlnaHQ6IDEwMCU7IH1cXG5cXG4uZmEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250QXdlc29tZVxcXCIsIFxcXCJmb250YXdlc29tZS13ZWJmb250XFxcIjsgfVxcblxcbi5pb24ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJpb25pY29uc1xcXCI7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vYXBwLnNjc3MnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQWRvcHRpb25BbmltYWxEZXRhaWxzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ZWJhMmQxMiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BZG9wdGlvbkFuaW1hbERldGFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BZG9wdGlvbkFuaW1hbERldGFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0Fkb3B0aW9uQW5pbWFsRGV0YWlscy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00ZWJhMmQxMiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNGViYTJkMTJcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvbWF0dGhldy9EZXNrdG9wL1NlbmlvciBEZXNnaW4gUHJvamVjdC9hY3VhVl8yL2FjdWEtbW9iaWxlL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzRlYmEyZDEyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzRlYmEyZDEyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzRlYmEyZDEyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BZG9wdGlvbkFuaW1hbERldGFpbHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRlYmEyZDEyJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzRlYmEyZDEyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL2Fkb3B0aW9uL0Fkb3B0aW9uQW5pbWFsRGV0YWlscy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRvcHRpb25BbmltYWxEZXRhaWxzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Fkb3B0aW9uQW5pbWFsRGV0YWlscy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Fkb3B0aW9uQW5pbWFsRGV0YWlscy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00ZWJhMmQxMiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BZG9wdGlvbkFuaW1hbERldGFpbHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NGViYTJkMTImc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRvcHRpb25BbmltYWxEZXRhaWxzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ZWJhMmQxMiZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQW5pbWFsQ2FyZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZjE0MjJhMTAmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQW5pbWFsQ2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0FuaW1hbENhcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0FuaW1hbENhcmQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZjE0MjJhMTAmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImYxNDIyYTEwXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL21hdHRoZXcvRGVza3RvcC9TZW5pb3IgRGVzZ2luIFByb2plY3QvYWN1YVZfMi9hY3VhLW1vYmlsZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdmMTQyMmExMCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdmMTQyMmExMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdmMTQyMmExMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQW5pbWFsQ2FyZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZjE0MjJhMTAmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZjE0MjJhMTAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvYWRvcHRpb24vQW5pbWFsQ2FyZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQW5pbWFsQ2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BbmltYWxDYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQW5pbWFsQ2FyZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1mMTQyMmExMCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BbmltYWxDYXJkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWYxNDIyYTEwJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FuaW1hbENhcmQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWYxNDIyYTEwJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDVjOThlYWMmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDVjOThlYWMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjA1Yzk4ZWFjXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL21hdHRoZXcvRGVza3RvcC9TZW5pb3IgRGVzZ2luIFByb2plY3QvYWN1YVZfMi9hY3VhLW1vYmlsZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwNWM5OGVhYycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwNWM5OGVhYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwNWM5OGVhYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA1Yzk4ZWFjJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzA1Yzk4ZWFjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL2Fkb3B0aW9uL2NhdGVnb3J5LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTA1Yzk4ZWFjJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTA1Yzk4ZWFjJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNWM5OGVhYyZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQ2F0ZWdvcnlCdXR0b24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc2MDlhMjM5JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0NhdGVnb3J5QnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQ2F0ZWdvcnlCdXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0NhdGVnb3J5QnV0dG9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc2MDlhMjM5JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI3NjA5YTIzOVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9tYXR0aGV3L0Rlc2t0b3AvU2VuaW9yIERlc2dpbiBQcm9qZWN0L2FjdWFWXzIvYWN1YS1tb2JpbGUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNzYwOWEyMzknKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNzYwOWEyMzknLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNzYwOWEyMzknLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0NhdGVnb3J5QnV0dG9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03NjA5YTIzOSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3NjA5YTIzOScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9idXR0b25zL0NhdGVnb3J5QnV0dG9uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DYXRlZ29yeUJ1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DYXRlZ29yeUJ1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NhdGVnb3J5QnV0dG9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc2MDlhMjM5JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NhdGVnb3J5QnV0dG9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc2MDlhMjM5JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NhdGVnb3J5QnV0dG9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03NjA5YTIzOSZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vSWNvbkJ1dHRvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDRhZTU3MTgmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSWNvbkJ1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0ljb25CdXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0ljb25CdXR0b24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDRhZTU3MTgmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjQ0YWU1NzE4XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL21hdHRoZXcvRGVza3RvcC9TZW5pb3IgRGVzZ2luIFByb2plY3QvYWN1YVZfMi9hY3VhLW1vYmlsZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0NGFlNTcxOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0NGFlNTcxOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0NGFlNTcxOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSWNvbkJ1dHRvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDRhZTU3MTgmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNDRhZTU3MTgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvYnV0dG9ucy9JY29uQnV0dG9uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JY29uQnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ljb25CdXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JY29uQnV0dG9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ0YWU1NzE4JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ljb25CdXR0b24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDRhZTU3MTgmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSWNvbkJ1dHRvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDRhZTU3MTgmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0FuaW1hbENlbnRlckRldGFpbHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVmZjdkMTVjJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0FuaW1hbENlbnRlckRldGFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BbmltYWxDZW50ZXJEZXRhaWxzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9BbmltYWxDZW50ZXJEZXRhaWxzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVmZjdkMTVjJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNWZmN2QxNWNcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvbWF0dGhldy9EZXNrdG9wL1NlbmlvciBEZXNnaW4gUHJvamVjdC9hY3VhVl8yL2FjdWEtbW9iaWxlL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzVmZjdkMTVjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzVmZjdkMTVjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzVmZjdkMTVjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BbmltYWxDZW50ZXJEZXRhaWxzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ZmY3ZDE1YyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1ZmY3ZDE1YycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9sb2NhdGlvbi9BbmltYWxDZW50ZXJEZXRhaWxzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BbmltYWxDZW50ZXJEZXRhaWxzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FuaW1hbENlbnRlckRldGFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQW5pbWFsQ2VudGVyRGV0YWlscy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01ZmY3ZDE1YyZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FuaW1hbENlbnRlckRldGFpbHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWZmN2QxNWMmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FuaW1hbENlbnRlckRldGFpbHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVmZjdkMTVjJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9GYXFJbmZvLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wYTRiYjI0NSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9GYXFJbmZvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRmFxSW5mby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vRmFxSW5mby52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wYTRiYjI0NSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjBhNGJiMjQ1XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL21hdHRoZXcvRGVza3RvcC9TZW5pb3IgRGVzZ2luIFByb2plY3QvYWN1YVZfMi9hY3VhLW1vYmlsZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwYTRiYjI0NScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwYTRiYjI0NScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwYTRiYjI0NScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRmFxSW5mby52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGE0YmIyNDUmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMGE0YmIyNDUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvc3VibGlzdHMvRmFxSW5mby52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmFxSW5mby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GYXFJbmZvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZhcUluZm8udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MGE0YmIyNDUmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GYXFJbmZvLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBhNGJiMjQ1JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GYXFJbmZvLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wYTRiYjI0NSZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyohXFxyXFxuICogIEZvbnQgQXdlc29tZSA0LjcuMCBieSBAZGF2ZWdhbmR5IC0gaHR0cDovL2ZvbnRhd2Vzb21lLmlvIC0gQGZvbnRhd2Vzb21lXFxyXFxuICogIExpY2Vuc2UgLSBodHRwOi8vZm9udGF3ZXNvbWUuaW8vbGljZW5zZSAoRm9udDogU0lMIE9GTCAxLjEsIENTUzogTUlUIExpY2Vuc2UpXFxyXFxuICovXFxyXFxuLyogRk9OVCBQQVRIXFxyXFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnRm9udEF3ZXNvbWUnO1xcclxcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL2ZvbnRhd2Vzb21lLXdlYmZvbnQuZW90P3Y9NC43LjAnKTtcXHJcXG4gIHNyYzogdXJsKCcuLi9mb250cy9mb250YXdlc29tZS13ZWJmb250LmVvdD8jaWVmaXgmdj00LjcuMCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSwgdXJsKCcuLi9mb250cy9mb250YXdlc29tZS13ZWJmb250LndvZmYyP3Y9NC43LjAnKSBmb3JtYXQoJ3dvZmYyJyksIHVybCgnLi4vZm9udHMvZm9udGF3ZXNvbWUtd2ViZm9udC53b2ZmP3Y9NC43LjAnKSBmb3JtYXQoJ3dvZmYnKSwgdXJsKCcuLi9mb250cy9mb250YXdlc29tZS13ZWJmb250LnR0Zj92PTQuNy4wJykgZm9ybWF0KCd0cnVldHlwZScpLCB1cmwoJy4uL2ZvbnRzL2ZvbnRhd2Vzb21lLXdlYmZvbnQuc3ZnP3Y9NC43LjAjZm9udGF3ZXNvbWVyZWd1bGFyJykgZm9ybWF0KCdzdmcnKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcbi5mYSB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAxNHB4LzEgRm9udEF3ZXNvbWU7XFxyXFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxyXFxuICB0ZXh0LXJlbmRlcmluZzogYXV0bztcXHJcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcclxcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXHJcXG59XFxyXFxuLyogbWFrZXMgdGhlIGZvbnQgMzMlIGxhcmdlciByZWxhdGl2ZSB0byB0aGUgaWNvbiBjb250YWluZXIgKi9cXHJcXG4uZmEtbGcge1xcclxcbiAgZm9udC1zaXplOiAxLjMzMzMzMzMzZW07XFxyXFxuICBsaW5lLWhlaWdodDogMC43NWVtO1xcclxcbiAgdmVydGljYWwtYWxpZ246IC0xNSU7XFxyXFxufVxcclxcbi5mYS0yeCB7XFxyXFxuICBmb250LXNpemU6IDJlbTtcXHJcXG59XFxyXFxuLmZhLTN4IHtcXHJcXG4gIGZvbnQtc2l6ZTogM2VtO1xcclxcbn1cXHJcXG4uZmEtNHgge1xcclxcbiAgZm9udC1zaXplOiA0ZW07XFxyXFxufVxcclxcbi5mYS01eCB7XFxyXFxuICBmb250LXNpemU6IDVlbTtcXHJcXG59XFxyXFxuLmZhLWZ3IHtcXHJcXG4gIHdpZHRoOiAxLjI4NTcxNDI5ZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5mYS11bCB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDA7XFxyXFxuICBtYXJnaW4tbGVmdDogMi4xNDI4NTcxNGVtO1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG4uZmEtdWwgPiBsaSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbi5mYS1saSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0OiAtMi4xNDI4NTcxNGVtO1xcclxcbiAgd2lkdGg6IDIuMTQyODU3MTRlbTtcXHJcXG4gIHRvcDogMC4xNDI4NTcxNGVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uZmEtbGkuZmEtbGcge1xcclxcbiAgbGVmdDogLTEuODU3MTQyODZlbTtcXHJcXG59XFxyXFxuLmZhLWJvcmRlciB7XFxyXFxuICBwYWRkaW5nOiAuMmVtIC4yNWVtIC4xNWVtO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAwLjA4ZW0gI2VlZWVlZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IC4xZW07XFxyXFxufVxcclxcbi5mYS1wdWxsLWxlZnQge1xcclxcbiAgZmxvYXQ6IGxlZnQ7XFxyXFxufVxcclxcbi5mYS1wdWxsLXJpZ2h0IHtcXHJcXG4gIGZsb2F0OiByaWdodDtcXHJcXG59XFxyXFxuLmZhLmZhLXB1bGwtbGVmdCB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IC4zZW07XFxyXFxufVxcclxcbi5mYS5mYS1wdWxsLXJpZ2h0IHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAuM2VtO1xcclxcbn1cXHJcXG4vKiBEZXByZWNhdGVkIGFzIG9mIDQuNC4wICovXFxyXFxuLnB1bGwtcmlnaHQge1xcclxcbiAgZmxvYXQ6IHJpZ2h0O1xcclxcbn1cXHJcXG4ucHVsbC1sZWZ0IHtcXHJcXG4gIGZsb2F0OiBsZWZ0O1xcclxcbn1cXHJcXG4uZmEucHVsbC1sZWZ0IHtcXHJcXG4gIG1hcmdpbi1yaWdodDogLjNlbTtcXHJcXG59XFxyXFxuLmZhLnB1bGwtcmlnaHQge1xcclxcbiAgbWFyZ2luLWxlZnQ6IC4zZW07XFxyXFxufVxcclxcbi5mYS1zcGluIHtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYS1zcGluIDJzIGluZmluaXRlIGxpbmVhcjtcXHJcXG4gIGFuaW1hdGlvbjogZmEtc3BpbiAycyBpbmZpbml0ZSBsaW5lYXI7XFxyXFxufVxcclxcbi5mYS1wdWxzZSB7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbjogZmEtc3BpbiAxcyBpbmZpbml0ZSBzdGVwcyg4KTtcXHJcXG4gIGFuaW1hdGlvbjogZmEtc3BpbiAxcyBpbmZpbml0ZSBzdGVwcyg4KTtcXHJcXG59XFxyXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhLXNwaW4ge1xcclxcbiAgMCUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XFxyXFxuICB9XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgZmEtc3BpbiB7XFxyXFxuICAwJSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLmZhLXJvdGF0ZS05MCB7XFxyXFxuICAtbXMtZmlsdGVyOiBcXFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MSlcXFwiO1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxyXFxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcclxcbn1cXHJcXG4uZmEtcm90YXRlLTE4MCB7XFxyXFxuICAtbXMtZmlsdGVyOiBcXFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MilcXFwiO1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcclxcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcclxcbn1cXHJcXG4uZmEtcm90YXRlLTI3MCB7XFxyXFxuICAtbXMtZmlsdGVyOiBcXFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MylcXFwiO1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xcclxcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xcclxcbn1cXHJcXG4uZmEtZmxpcC1ob3Jpem9udGFsIHtcXHJcXG4gIC1tcy1maWx0ZXI6IFxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0wLCBtaXJyb3I9MSlcXFwiO1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcXHJcXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xcclxcbn1cXHJcXG4uZmEtZmxpcC12ZXJ0aWNhbCB7XFxyXFxuICAtbXMtZmlsdGVyOiBcXFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MiwgbWlycm9yPTEpXFxcIjtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLCAtMSk7XFxyXFxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLCAtMSk7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEsIC0xKTtcXHJcXG59XFxyXFxuOnJvb3QgLmZhLXJvdGF0ZS05MCxcXHJcXG46cm9vdCAuZmEtcm90YXRlLTE4MCxcXHJcXG46cm9vdCAuZmEtcm90YXRlLTI3MCxcXHJcXG46cm9vdCAuZmEtZmxpcC1ob3Jpem9udGFsLFxcclxcbjpyb290IC5mYS1mbGlwLXZlcnRpY2FsIHtcXHJcXG4gIGZpbHRlcjogbm9uZTtcXHJcXG59XFxyXFxuLmZhLXN0YWNrIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdpZHRoOiAyZW07XFxyXFxuICBoZWlnaHQ6IDJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyZW07XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbn1cXHJcXG4uZmEtc3RhY2stMXgsXFxyXFxuLmZhLXN0YWNrLTJ4IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLmZhLXN0YWNrLTF4IHtcXHJcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcclxcbn1cXHJcXG4uZmEtc3RhY2stMngge1xcclxcbiAgZm9udC1zaXplOiAyZW07XFxyXFxufVxcclxcbi5mYS1pbnZlcnNlIHtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbn1cXHJcXG4vKiBGb250IEF3ZXNvbWUgdXNlcyB0aGUgVW5pY29kZSBQcml2YXRlIFVzZSBBcmVhIChQVUEpIHRvIGVuc3VyZSBzY3JlZW5cXHJcXG4gICByZWFkZXJzIGRvIG5vdCByZWFkIG9mZiByYW5kb20gY2hhcmFjdGVycyB0aGF0IHJlcHJlc2VudCBpY29ucyAqL1xcclxcbi5mYS1nbGFzczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDAwXFxcIjtcXHJcXG59XFxyXFxuLmZhLW11c2ljOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMDFcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2VhcmNoOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMDJcXFwiO1xcclxcbn1cXHJcXG4uZmEtZW52ZWxvcGUtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDAzXFxcIjtcXHJcXG59XFxyXFxuLmZhLWhlYXJ0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMDRcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3RhcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDA1XFxcIjtcXHJcXG59XFxyXFxuLmZhLXN0YXItbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDA2XFxcIjtcXHJcXG59XFxyXFxuLmZhLXVzZXI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwN1xcXCI7XFxyXFxufVxcclxcbi5mYS1maWxtOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMDhcXFwiO1xcclxcbn1cXHJcXG4uZmEtdGgtbGFyZ2U6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwOVxcXCI7XFxyXFxufVxcclxcbi5mYS10aDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDBBXFxcIjtcXHJcXG59XFxyXFxuLmZhLXRoLWxpc3Q6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwQlxcXCI7XFxyXFxufVxcclxcbi5mYS1jaGVjazpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDBDXFxcIjtcXHJcXG59XFxyXFxuLmZhLXJlbW92ZTpiZWZvcmUsXFxyXFxuLmZhLWNsb3NlOmJlZm9yZSxcXHJcXG4uZmEtdGltZXM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwRFxcXCI7XFxyXFxufVxcclxcbi5mYS1zZWFyY2gtcGx1czpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDBFXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNlYXJjaC1taW51czpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDEwXFxcIjtcXHJcXG59XFxyXFxuLmZhLXBvd2VyLW9mZjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDExXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNpZ25hbDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDEyXFxcIjtcXHJcXG59XFxyXFxuLmZhLWdlYXI6YmVmb3JlLFxcclxcbi5mYS1jb2c6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxM1xcXCI7XFxyXFxufVxcclxcbi5mYS10cmFzaC1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMTRcXFwiO1xcclxcbn1cXHJcXG4uZmEtaG9tZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDE1XFxcIjtcXHJcXG59XFxyXFxuLmZhLWZpbGUtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDE2XFxcIjtcXHJcXG59XFxyXFxuLmZhLWNsb2NrLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxN1xcXCI7XFxyXFxufVxcclxcbi5mYS1yb2FkOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMThcXFwiO1xcclxcbn1cXHJcXG4uZmEtZG93bmxvYWQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxOVxcXCI7XFxyXFxufVxcclxcbi5mYS1hcnJvdy1jaXJjbGUtby1kb3duOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMUFcXFwiO1xcclxcbn1cXHJcXG4uZmEtYXJyb3ctY2lyY2xlLW8tdXA6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxQlxcXCI7XFxyXFxufVxcclxcbi5mYS1pbmJveDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDFDXFxcIjtcXHJcXG59XFxyXFxuLmZhLXBsYXktY2lyY2xlLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxRFxcXCI7XFxyXFxufVxcclxcbi5mYS1yb3RhdGUtcmlnaHQ6YmVmb3JlLFxcclxcbi5mYS1yZXBlYXQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxRVxcXCI7XFxyXFxufVxcclxcbi5mYS1yZWZyZXNoOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMjFcXFwiO1xcclxcbn1cXHJcXG4uZmEtbGlzdC1hbHQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAyMlxcXCI7XFxyXFxufVxcclxcbi5mYS1sb2NrOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMjNcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmxhZzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDI0XFxcIjtcXHJcXG59XFxyXFxuLmZhLWhlYWRwaG9uZXM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAyNVxcXCI7XFxyXFxufVxcclxcbi5mYS12b2x1bWUtb2ZmOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMjZcXFwiO1xcclxcbn1cXHJcXG4uZmEtdm9sdW1lLWRvd246YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAyN1xcXCI7XFxyXFxufVxcclxcbi5mYS12b2x1bWUtdXA6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAyOFxcXCI7XFxyXFxufVxcclxcbi5mYS1xcmNvZGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAyOVxcXCI7XFxyXFxufVxcclxcbi5mYS1iYXJjb2RlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMkFcXFwiO1xcclxcbn1cXHJcXG4uZmEtdGFnOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMkJcXFwiO1xcclxcbn1cXHJcXG4uZmEtdGFnczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDJDXFxcIjtcXHJcXG59XFxyXFxuLmZhLWJvb2s6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAyRFxcXCI7XFxyXFxufVxcclxcbi5mYS1ib29rbWFyazpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDJFXFxcIjtcXHJcXG59XFxyXFxuLmZhLXByaW50OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMkZcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2FtZXJhOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMzBcXFwiO1xcclxcbn1cXHJcXG4uZmEtZm9udDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDMxXFxcIjtcXHJcXG59XFxyXFxuLmZhLWJvbGQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzMlxcXCI7XFxyXFxufVxcclxcbi5mYS1pdGFsaWM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzM1xcXCI7XFxyXFxufVxcclxcbi5mYS10ZXh0LWhlaWdodDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDM0XFxcIjtcXHJcXG59XFxyXFxuLmZhLXRleHQtd2lkdGg6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzNVxcXCI7XFxyXFxufVxcclxcbi5mYS1hbGlnbi1sZWZ0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMzZcXFwiO1xcclxcbn1cXHJcXG4uZmEtYWxpZ24tY2VudGVyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMzdcXFwiO1xcclxcbn1cXHJcXG4uZmEtYWxpZ24tcmlnaHQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzOFxcXCI7XFxyXFxufVxcclxcbi5mYS1hbGlnbi1qdXN0aWZ5OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMzlcXFwiO1xcclxcbn1cXHJcXG4uZmEtbGlzdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDNBXFxcIjtcXHJcXG59XFxyXFxuLmZhLWRlZGVudDpiZWZvcmUsXFxyXFxuLmZhLW91dGRlbnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzQlxcXCI7XFxyXFxufVxcclxcbi5mYS1pbmRlbnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzQ1xcXCI7XFxyXFxufVxcclxcbi5mYS12aWRlby1jYW1lcmE6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzRFxcXCI7XFxyXFxufVxcclxcbi5mYS1waG90bzpiZWZvcmUsXFxyXFxuLmZhLWltYWdlOmJlZm9yZSxcXHJcXG4uZmEtcGljdHVyZS1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwM0VcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGVuY2lsOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNDBcXFwiO1xcclxcbn1cXHJcXG4uZmEtbWFwLW1hcmtlcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDQxXFxcIjtcXHJcXG59XFxyXFxuLmZhLWFkanVzdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDQyXFxcIjtcXHJcXG59XFxyXFxuLmZhLXRpbnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0M1xcXCI7XFxyXFxufVxcclxcbi5mYS1lZGl0OmJlZm9yZSxcXHJcXG4uZmEtcGVuY2lsLXNxdWFyZS1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNDRcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2hhcmUtc3F1YXJlLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0NVxcXCI7XFxyXFxufVxcclxcbi5mYS1jaGVjay1zcXVhcmUtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDQ2XFxcIjtcXHJcXG59XFxyXFxuLmZhLWFycm93czpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDQ3XFxcIjtcXHJcXG59XFxyXFxuLmZhLXN0ZXAtYmFja3dhcmQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0OFxcXCI7XFxyXFxufVxcclxcbi5mYS1mYXN0LWJhY2t3YXJkOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNDlcXFwiO1xcclxcbn1cXHJcXG4uZmEtYmFja3dhcmQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0QVxcXCI7XFxyXFxufVxcclxcbi5mYS1wbGF5OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNEJcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGF1c2U6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0Q1xcXCI7XFxyXFxufVxcclxcbi5mYS1zdG9wOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNERcXFwiO1xcclxcbn1cXHJcXG4uZmEtZm9yd2FyZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDRFXFxcIjtcXHJcXG59XFxyXFxuLmZhLWZhc3QtZm9yd2FyZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDUwXFxcIjtcXHJcXG59XFxyXFxuLmZhLXN0ZXAtZm9yd2FyZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDUxXFxcIjtcXHJcXG59XFxyXFxuLmZhLWVqZWN0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNTJcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2hldnJvbi1sZWZ0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNTNcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2hldnJvbi1yaWdodDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDU0XFxcIjtcXHJcXG59XFxyXFxuLmZhLXBsdXMtY2lyY2xlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNTVcXFwiO1xcclxcbn1cXHJcXG4uZmEtbWludXMtY2lyY2xlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNTZcXFwiO1xcclxcbn1cXHJcXG4uZmEtdGltZXMtY2lyY2xlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNTdcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2hlY2stY2lyY2xlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNThcXFwiO1xcclxcbn1cXHJcXG4uZmEtcXVlc3Rpb24tY2lyY2xlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNTlcXFwiO1xcclxcbn1cXHJcXG4uZmEtaW5mby1jaXJjbGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA1QVxcXCI7XFxyXFxufVxcclxcbi5mYS1jcm9zc2hhaXJzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNUJcXFwiO1xcclxcbn1cXHJcXG4uZmEtdGltZXMtY2lyY2xlLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA1Q1xcXCI7XFxyXFxufVxcclxcbi5mYS1jaGVjay1jaXJjbGUtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDVEXFxcIjtcXHJcXG59XFxyXFxuLmZhLWJhbjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDVFXFxcIjtcXHJcXG59XFxyXFxuLmZhLWFycm93LWxlZnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2MFxcXCI7XFxyXFxufVxcclxcbi5mYS1hcnJvdy1yaWdodDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDYxXFxcIjtcXHJcXG59XFxyXFxuLmZhLWFycm93LXVwOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNjJcXFwiO1xcclxcbn1cXHJcXG4uZmEtYXJyb3ctZG93bjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDYzXFxcIjtcXHJcXG59XFxyXFxuLmZhLW1haWwtZm9yd2FyZDpiZWZvcmUsXFxyXFxuLmZhLXNoYXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNjRcXFwiO1xcclxcbn1cXHJcXG4uZmEtZXhwYW5kOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNjVcXFwiO1xcclxcbn1cXHJcXG4uZmEtY29tcHJlc3M6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2NlxcXCI7XFxyXFxufVxcclxcbi5mYS1wbHVzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNjdcXFwiO1xcclxcbn1cXHJcXG4uZmEtbWludXM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2OFxcXCI7XFxyXFxufVxcclxcbi5mYS1hc3RlcmlzazpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDY5XFxcIjtcXHJcXG59XFxyXFxuLmZhLWV4Y2xhbWF0aW9uLWNpcmNsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDZBXFxcIjtcXHJcXG59XFxyXFxuLmZhLWdpZnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2QlxcXCI7XFxyXFxufVxcclxcbi5mYS1sZWFmOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNkNcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmlyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDZEXFxcIjtcXHJcXG59XFxyXFxuLmZhLWV5ZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDZFXFxcIjtcXHJcXG59XFxyXFxuLmZhLWV5ZS1zbGFzaDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDcwXFxcIjtcXHJcXG59XFxyXFxuLmZhLXdhcm5pbmc6YmVmb3JlLFxcclxcbi5mYS1leGNsYW1hdGlvbi10cmlhbmdsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDcxXFxcIjtcXHJcXG59XFxyXFxuLmZhLXBsYW5lOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNzJcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2FsZW5kYXI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3M1xcXCI7XFxyXFxufVxcclxcbi5mYS1yYW5kb206YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3NFxcXCI7XFxyXFxufVxcclxcbi5mYS1jb21tZW50OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNzVcXFwiO1xcclxcbn1cXHJcXG4uZmEtbWFnbmV0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNzZcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2hldnJvbi11cDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDc3XFxcIjtcXHJcXG59XFxyXFxuLmZhLWNoZXZyb24tZG93bjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDc4XFxcIjtcXHJcXG59XFxyXFxuLmZhLXJldHdlZXQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3OVxcXCI7XFxyXFxufVxcclxcbi5mYS1zaG9wcGluZy1jYXJ0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwN0FcXFwiO1xcclxcbn1cXHJcXG4uZmEtZm9sZGVyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwN0JcXFwiO1xcclxcbn1cXHJcXG4uZmEtZm9sZGVyLW9wZW46YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3Q1xcXCI7XFxyXFxufVxcclxcbi5mYS1hcnJvd3MtdjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDdEXFxcIjtcXHJcXG59XFxyXFxuLmZhLWFycm93cy1oOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwN0VcXFwiO1xcclxcbn1cXHJcXG4uZmEtYmFyLWNoYXJ0LW86YmVmb3JlLFxcclxcbi5mYS1iYXItY2hhcnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA4MFxcXCI7XFxyXFxufVxcclxcbi5mYS10d2l0dGVyLXNxdWFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDgxXFxcIjtcXHJcXG59XFxyXFxuLmZhLWZhY2Vib29rLXNxdWFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDgyXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNhbWVyYS1yZXRybzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDgzXFxcIjtcXHJcXG59XFxyXFxuLmZhLWtleTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDg0XFxcIjtcXHJcXG59XFxyXFxuLmZhLWdlYXJzOmJlZm9yZSxcXHJcXG4uZmEtY29nczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDg1XFxcIjtcXHJcXG59XFxyXFxuLmZhLWNvbW1lbnRzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwODZcXFwiO1xcclxcbn1cXHJcXG4uZmEtdGh1bWJzLW8tdXA6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA4N1xcXCI7XFxyXFxufVxcclxcbi5mYS10aHVtYnMtby1kb3duOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwODhcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3Rhci1oYWxmOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwODlcXFwiO1xcclxcbn1cXHJcXG4uZmEtaGVhcnQtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDhBXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNpZ24tb3V0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwOEJcXFwiO1xcclxcbn1cXHJcXG4uZmEtbGlua2VkaW4tc3F1YXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwOENcXFwiO1xcclxcbn1cXHJcXG4uZmEtdGh1bWItdGFjazpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDhEXFxcIjtcXHJcXG59XFxyXFxuLmZhLWV4dGVybmFsLWxpbms6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA4RVxcXCI7XFxyXFxufVxcclxcbi5mYS1zaWduLWluOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwOTBcXFwiO1xcclxcbn1cXHJcXG4uZmEtdHJvcGh5OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwOTFcXFwiO1xcclxcbn1cXHJcXG4uZmEtZ2l0aHViLXNxdWFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDkyXFxcIjtcXHJcXG59XFxyXFxuLmZhLXVwbG9hZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDkzXFxcIjtcXHJcXG59XFxyXFxuLmZhLWxlbW9uLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA5NFxcXCI7XFxyXFxufVxcclxcbi5mYS1waG9uZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDk1XFxcIjtcXHJcXG59XFxyXFxuLmZhLXNxdWFyZS1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwOTZcXFwiO1xcclxcbn1cXHJcXG4uZmEtYm9va21hcmstbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDk3XFxcIjtcXHJcXG59XFxyXFxuLmZhLXBob25lLXNxdWFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDk4XFxcIjtcXHJcXG59XFxyXFxuLmZhLXR3aXR0ZXI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA5OVxcXCI7XFxyXFxufVxcclxcbi5mYS1mYWNlYm9vay1mOmJlZm9yZSxcXHJcXG4uZmEtZmFjZWJvb2s6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA5QVxcXCI7XFxyXFxufVxcclxcbi5mYS1naXRodWI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA5QlxcXCI7XFxyXFxufVxcclxcbi5mYS11bmxvY2s6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA5Q1xcXCI7XFxyXFxufVxcclxcbi5mYS1jcmVkaXQtY2FyZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDlEXFxcIjtcXHJcXG59XFxyXFxuLmZhLWZlZWQ6YmVmb3JlLFxcclxcbi5mYS1yc3M6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA5RVxcXCI7XFxyXFxufVxcclxcbi5mYS1oZGQtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEEwXFxcIjtcXHJcXG59XFxyXFxuLmZhLWJ1bGxob3JuOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQTFcXFwiO1xcclxcbn1cXHJcXG4uZmEtYmVsbDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEYzXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNlcnRpZmljYXRlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQTNcXFwiO1xcclxcbn1cXHJcXG4uZmEtaGFuZC1vLXJpZ2h0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQTRcXFwiO1xcclxcbn1cXHJcXG4uZmEtaGFuZC1vLWxlZnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBNVxcXCI7XFxyXFxufVxcclxcbi5mYS1oYW5kLW8tdXA6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBNlxcXCI7XFxyXFxufVxcclxcbi5mYS1oYW5kLW8tZG93bjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEE3XFxcIjtcXHJcXG59XFxyXFxuLmZhLWFycm93LWNpcmNsZS1sZWZ0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQThcXFwiO1xcclxcbn1cXHJcXG4uZmEtYXJyb3ctY2lyY2xlLXJpZ2h0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQTlcXFwiO1xcclxcbn1cXHJcXG4uZmEtYXJyb3ctY2lyY2xlLXVwOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQUFcXFwiO1xcclxcbn1cXHJcXG4uZmEtYXJyb3ctY2lyY2xlLWRvd246YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBQlxcXCI7XFxyXFxufVxcclxcbi5mYS1nbG9iZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEFDXFxcIjtcXHJcXG59XFxyXFxuLmZhLXdyZW5jaDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEFEXFxcIjtcXHJcXG59XFxyXFxuLmZhLXRhc2tzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQUVcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmlsdGVyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQjBcXFwiO1xcclxcbn1cXHJcXG4uZmEtYnJpZWZjYXNlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQjFcXFwiO1xcclxcbn1cXHJcXG4uZmEtYXJyb3dzLWFsdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEIyXFxcIjtcXHJcXG59XFxyXFxuLmZhLWdyb3VwOmJlZm9yZSxcXHJcXG4uZmEtdXNlcnM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDMFxcXCI7XFxyXFxufVxcclxcbi5mYS1jaGFpbjpiZWZvcmUsXFxyXFxuLmZhLWxpbms6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDMVxcXCI7XFxyXFxufVxcclxcbi5mYS1jbG91ZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEMyXFxcIjtcXHJcXG59XFxyXFxuLmZhLWZsYXNrOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzNcXFwiO1xcclxcbn1cXHJcXG4uZmEtY3V0OmJlZm9yZSxcXHJcXG4uZmEtc2Npc3NvcnM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDNFxcXCI7XFxyXFxufVxcclxcbi5mYS1jb3B5OmJlZm9yZSxcXHJcXG4uZmEtZmlsZXMtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEM1XFxcIjtcXHJcXG59XFxyXFxuLmZhLXBhcGVyY2xpcDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEM2XFxcIjtcXHJcXG59XFxyXFxuLmZhLXNhdmU6YmVmb3JlLFxcclxcbi5mYS1mbG9wcHktbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEM3XFxcIjtcXHJcXG59XFxyXFxuLmZhLXNxdWFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEM4XFxcIjtcXHJcXG59XFxyXFxuLmZhLW5hdmljb246YmVmb3JlLFxcclxcbi5mYS1yZW9yZGVyOmJlZm9yZSxcXHJcXG4uZmEtYmFyczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEM5XFxcIjtcXHJcXG59XFxyXFxuLmZhLWxpc3QtdWw6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDQVxcXCI7XFxyXFxufVxcclxcbi5mYS1saXN0LW9sOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQ0JcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3RyaWtldGhyb3VnaDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMENDXFxcIjtcXHJcXG59XFxyXFxuLmZhLXVuZGVybGluZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMENEXFxcIjtcXHJcXG59XFxyXFxuLmZhLXRhYmxlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQ0VcXFwiO1xcclxcbn1cXHJcXG4uZmEtbWFnaWM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBEMFxcXCI7XFxyXFxufVxcclxcbi5mYS10cnVjazpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEQxXFxcIjtcXHJcXG59XFxyXFxuLmZhLXBpbnRlcmVzdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEQyXFxcIjtcXHJcXG59XFxyXFxuLmZhLXBpbnRlcmVzdC1zcXVhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBEM1xcXCI7XFxyXFxufVxcclxcbi5mYS1nb29nbGUtcGx1cy1zcXVhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBENFxcXCI7XFxyXFxufVxcclxcbi5mYS1nb29nbGUtcGx1czpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEQ1XFxcIjtcXHJcXG59XFxyXFxuLmZhLW1vbmV5OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRDZcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2FyZXQtZG93bjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEQ3XFxcIjtcXHJcXG59XFxyXFxuLmZhLWNhcmV0LXVwOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRDhcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2FyZXQtbGVmdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEQ5XFxcIjtcXHJcXG59XFxyXFxuLmZhLWNhcmV0LXJpZ2h0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwREFcXFwiO1xcclxcbn1cXHJcXG4uZmEtY29sdW1uczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMERCXFxcIjtcXHJcXG59XFxyXFxuLmZhLXVuc29ydGVkOmJlZm9yZSxcXHJcXG4uZmEtc29ydDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMERDXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNvcnQtZG93bjpiZWZvcmUsXFxyXFxuLmZhLXNvcnQtZGVzYzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEREXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNvcnQtdXA6YmVmb3JlLFxcclxcbi5mYS1zb3J0LWFzYzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMERFXFxcIjtcXHJcXG59XFxyXFxuLmZhLWVudmVsb3BlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRTBcXFwiO1xcclxcbn1cXHJcXG4uZmEtbGlua2VkaW46YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFMVxcXCI7XFxyXFxufVxcclxcbi5mYS1yb3RhdGUtbGVmdDpiZWZvcmUsXFxyXFxuLmZhLXVuZG86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFMlxcXCI7XFxyXFxufVxcclxcbi5mYS1sZWdhbDpiZWZvcmUsXFxyXFxuLmZhLWdhdmVsOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRTNcXFwiO1xcclxcbn1cXHJcXG4uZmEtZGFzaGJvYXJkOmJlZm9yZSxcXHJcXG4uZmEtdGFjaG9tZXRlcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEU0XFxcIjtcXHJcXG59XFxyXFxuLmZhLWNvbW1lbnQtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEU1XFxcIjtcXHJcXG59XFxyXFxuLmZhLWNvbW1lbnRzLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFNlxcXCI7XFxyXFxufVxcclxcbi5mYS1mbGFzaDpiZWZvcmUsXFxyXFxuLmZhLWJvbHQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFN1xcXCI7XFxyXFxufVxcclxcbi5mYS1zaXRlbWFwOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRThcXFwiO1xcclxcbn1cXHJcXG4uZmEtdW1icmVsbGE6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFOVxcXCI7XFxyXFxufVxcclxcbi5mYS1wYXN0ZTpiZWZvcmUsXFxyXFxuLmZhLWNsaXBib2FyZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEVBXFxcIjtcXHJcXG59XFxyXFxuLmZhLWxpZ2h0YnVsYi1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRUJcXFwiO1xcclxcbn1cXHJcXG4uZmEtZXhjaGFuZ2U6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFQ1xcXCI7XFxyXFxufVxcclxcbi5mYS1jbG91ZC1kb3dubG9hZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEVEXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNsb3VkLXVwbG9hZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEVFXFxcIjtcXHJcXG59XFxyXFxuLmZhLXVzZXItbWQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGMFxcXCI7XFxyXFxufVxcclxcbi5mYS1zdGV0aG9zY29wZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEYxXFxcIjtcXHJcXG59XFxyXFxuLmZhLXN1aXRjYXNlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRjJcXFwiO1xcclxcbn1cXHJcXG4uZmEtYmVsbC1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQTJcXFwiO1xcclxcbn1cXHJcXG4uZmEtY29mZmVlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRjRcXFwiO1xcclxcbn1cXHJcXG4uZmEtY3V0bGVyeTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEY1XFxcIjtcXHJcXG59XFxyXFxuLmZhLWZpbGUtdGV4dC1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRjZcXFwiO1xcclxcbn1cXHJcXG4uZmEtYnVpbGRpbmctbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEY3XFxcIjtcXHJcXG59XFxyXFxuLmZhLWhvc3BpdGFsLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGOFxcXCI7XFxyXFxufVxcclxcbi5mYS1hbWJ1bGFuY2U6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGOVxcXCI7XFxyXFxufVxcclxcbi5mYS1tZWRraXQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGQVxcXCI7XFxyXFxufVxcclxcbi5mYS1maWdodGVyLWpldDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEZCXFxcIjtcXHJcXG59XFxyXFxuLmZhLWJlZXI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGQ1xcXCI7XFxyXFxufVxcclxcbi5mYS1oLXNxdWFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEZEXFxcIjtcXHJcXG59XFxyXFxuLmZhLXBsdXMtc3F1YXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRkVcXFwiO1xcclxcbn1cXHJcXG4uZmEtYW5nbGUtZG91YmxlLWxlZnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwMFxcXCI7XFxyXFxufVxcclxcbi5mYS1hbmdsZS1kb3VibGUtcmlnaHQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwMVxcXCI7XFxyXFxufVxcclxcbi5mYS1hbmdsZS1kb3VibGUtdXA6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwMlxcXCI7XFxyXFxufVxcclxcbi5mYS1hbmdsZS1kb3VibGUtZG93bjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTAzXFxcIjtcXHJcXG59XFxyXFxuLmZhLWFuZ2xlLWxlZnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwNFxcXCI7XFxyXFxufVxcclxcbi5mYS1hbmdsZS1yaWdodDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTA1XFxcIjtcXHJcXG59XFxyXFxuLmZhLWFuZ2xlLXVwOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMDZcXFwiO1xcclxcbn1cXHJcXG4uZmEtYW5nbGUtZG93bjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTA3XFxcIjtcXHJcXG59XFxyXFxuLmZhLWRlc2t0b3A6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwOFxcXCI7XFxyXFxufVxcclxcbi5mYS1sYXB0b3A6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwOVxcXCI7XFxyXFxufVxcclxcbi5mYS10YWJsZXQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwQVxcXCI7XFxyXFxufVxcclxcbi5mYS1tb2JpbGUtcGhvbmU6YmVmb3JlLFxcclxcbi5mYS1tb2JpbGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwQlxcXCI7XFxyXFxufVxcclxcbi5mYS1jaXJjbGUtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTBDXFxcIjtcXHJcXG59XFxyXFxuLmZhLXF1b3RlLWxlZnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwRFxcXCI7XFxyXFxufVxcclxcbi5mYS1xdW90ZS1yaWdodDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTBFXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNwaW5uZXI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExMFxcXCI7XFxyXFxufVxcclxcbi5mYS1jaXJjbGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExMVxcXCI7XFxyXFxufVxcclxcbi5mYS1tYWlsLXJlcGx5OmJlZm9yZSxcXHJcXG4uZmEtcmVwbHk6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExMlxcXCI7XFxyXFxufVxcclxcbi5mYS1naXRodWItYWx0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMTNcXFwiO1xcclxcbn1cXHJcXG4uZmEtZm9sZGVyLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExNFxcXCI7XFxyXFxufVxcclxcbi5mYS1mb2xkZXItb3Blbi1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMTVcXFwiO1xcclxcbn1cXHJcXG4uZmEtc21pbGUtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTE4XFxcIjtcXHJcXG59XFxyXFxuLmZhLWZyb3duLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExOVxcXCI7XFxyXFxufVxcclxcbi5mYS1tZWgtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTFBXFxcIjtcXHJcXG59XFxyXFxuLmZhLWdhbWVwYWQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExQlxcXCI7XFxyXFxufVxcclxcbi5mYS1rZXlib2FyZC1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMUNcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmxhZy1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMURcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmxhZy1jaGVja2VyZWQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExRVxcXCI7XFxyXFxufVxcclxcbi5mYS10ZXJtaW5hbDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTIwXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNvZGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyMVxcXCI7XFxyXFxufVxcclxcbi5mYS1tYWlsLXJlcGx5LWFsbDpiZWZvcmUsXFxyXFxuLmZhLXJlcGx5LWFsbDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTIyXFxcIjtcXHJcXG59XFxyXFxuLmZhLXN0YXItaGFsZi1lbXB0eTpiZWZvcmUsXFxyXFxuLmZhLXN0YXItaGFsZi1mdWxsOmJlZm9yZSxcXHJcXG4uZmEtc3Rhci1oYWxmLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyM1xcXCI7XFxyXFxufVxcclxcbi5mYS1sb2NhdGlvbi1hcnJvdzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTI0XFxcIjtcXHJcXG59XFxyXFxuLmZhLWNyb3A6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyNVxcXCI7XFxyXFxufVxcclxcbi5mYS1jb2RlLWZvcms6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyNlxcXCI7XFxyXFxufVxcclxcbi5mYS11bmxpbms6YmVmb3JlLFxcclxcbi5mYS1jaGFpbi1icm9rZW46YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyN1xcXCI7XFxyXFxufVxcclxcbi5mYS1xdWVzdGlvbjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTI4XFxcIjtcXHJcXG59XFxyXFxuLmZhLWluZm86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyOVxcXCI7XFxyXFxufVxcclxcbi5mYS1leGNsYW1hdGlvbjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTJBXFxcIjtcXHJcXG59XFxyXFxuLmZhLXN1cGVyc2NyaXB0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMkJcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3Vic2NyaXB0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMkNcXFwiO1xcclxcbn1cXHJcXG4uZmEtZXJhc2VyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMkRcXFwiO1xcclxcbn1cXHJcXG4uZmEtcHV6emxlLXBpZWNlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMkVcXFwiO1xcclxcbn1cXHJcXG4uZmEtbWljcm9waG9uZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTMwXFxcIjtcXHJcXG59XFxyXFxuLmZhLW1pY3JvcGhvbmUtc2xhc2g6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEzMVxcXCI7XFxyXFxufVxcclxcbi5mYS1zaGllbGQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEzMlxcXCI7XFxyXFxufVxcclxcbi5mYS1jYWxlbmRhci1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMzNcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmlyZS1leHRpbmd1aXNoZXI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEzNFxcXCI7XFxyXFxufVxcclxcbi5mYS1yb2NrZXQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEzNVxcXCI7XFxyXFxufVxcclxcbi5mYS1tYXhjZG46YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEzNlxcXCI7XFxyXFxufVxcclxcbi5mYS1jaGV2cm9uLWNpcmNsZS1sZWZ0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMzdcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2hldnJvbi1jaXJjbGUtcmlnaHQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEzOFxcXCI7XFxyXFxufVxcclxcbi5mYS1jaGV2cm9uLWNpcmNsZS11cDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTM5XFxcIjtcXHJcXG59XFxyXFxuLmZhLWNoZXZyb24tY2lyY2xlLWRvd246YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEzQVxcXCI7XFxyXFxufVxcclxcbi5mYS1odG1sNTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTNCXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNzczM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEzQ1xcXCI7XFxyXFxufVxcclxcbi5mYS1hbmNob3I6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEzRFxcXCI7XFxyXFxufVxcclxcbi5mYS11bmxvY2stYWx0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxM0VcXFwiO1xcclxcbn1cXHJcXG4uZmEtYnVsbHNleWU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE0MFxcXCI7XFxyXFxufVxcclxcbi5mYS1lbGxpcHNpcy1oOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNDFcXFwiO1xcclxcbn1cXHJcXG4uZmEtZWxsaXBzaXMtdjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTQyXFxcIjtcXHJcXG59XFxyXFxuLmZhLXJzcy1zcXVhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE0M1xcXCI7XFxyXFxufVxcclxcbi5mYS1wbGF5LWNpcmNsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTQ0XFxcIjtcXHJcXG59XFxyXFxuLmZhLXRpY2tldDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTQ1XFxcIjtcXHJcXG59XFxyXFxuLmZhLW1pbnVzLXNxdWFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTQ2XFxcIjtcXHJcXG59XFxyXFxuLmZhLW1pbnVzLXNxdWFyZS1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNDdcXFwiO1xcclxcbn1cXHJcXG4uZmEtbGV2ZWwtdXA6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE0OFxcXCI7XFxyXFxufVxcclxcbi5mYS1sZXZlbC1kb3duOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNDlcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2hlY2stc3F1YXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNEFcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGVuY2lsLXNxdWFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTRCXFxcIjtcXHJcXG59XFxyXFxuLmZhLWV4dGVybmFsLWxpbmstc3F1YXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNENcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2hhcmUtc3F1YXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNERcXFwiO1xcclxcbn1cXHJcXG4uZmEtY29tcGFzczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTRFXFxcIjtcXHJcXG59XFxyXFxuLmZhLXRvZ2dsZS1kb3duOmJlZm9yZSxcXHJcXG4uZmEtY2FyZXQtc3F1YXJlLW8tZG93bjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTUwXFxcIjtcXHJcXG59XFxyXFxuLmZhLXRvZ2dsZS11cDpiZWZvcmUsXFxyXFxuLmZhLWNhcmV0LXNxdWFyZS1vLXVwOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNTFcXFwiO1xcclxcbn1cXHJcXG4uZmEtdG9nZ2xlLXJpZ2h0OmJlZm9yZSxcXHJcXG4uZmEtY2FyZXQtc3F1YXJlLW8tcmlnaHQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE1MlxcXCI7XFxyXFxufVxcclxcbi5mYS1ldXJvOmJlZm9yZSxcXHJcXG4uZmEtZXVyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNTNcXFwiO1xcclxcbn1cXHJcXG4uZmEtZ2JwOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNTRcXFwiO1xcclxcbn1cXHJcXG4uZmEtZG9sbGFyOmJlZm9yZSxcXHJcXG4uZmEtdXNkOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNTVcXFwiO1xcclxcbn1cXHJcXG4uZmEtcnVwZWU6YmVmb3JlLFxcclxcbi5mYS1pbnI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE1NlxcXCI7XFxyXFxufVxcclxcbi5mYS1jbnk6YmVmb3JlLFxcclxcbi5mYS1ybWI6YmVmb3JlLFxcclxcbi5mYS15ZW46YmVmb3JlLFxcclxcbi5mYS1qcHk6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE1N1xcXCI7XFxyXFxufVxcclxcbi5mYS1ydWJsZTpiZWZvcmUsXFxyXFxuLmZhLXJvdWJsZTpiZWZvcmUsXFxyXFxuLmZhLXJ1YjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTU4XFxcIjtcXHJcXG59XFxyXFxuLmZhLXdvbjpiZWZvcmUsXFxyXFxuLmZhLWtydzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTU5XFxcIjtcXHJcXG59XFxyXFxuLmZhLWJpdGNvaW46YmVmb3JlLFxcclxcbi5mYS1idGM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE1QVxcXCI7XFxyXFxufVxcclxcbi5mYS1maWxlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNUJcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmlsZS10ZXh0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNUNcXFwiO1xcclxcbn1cXHJcXG4uZmEtc29ydC1hbHBoYS1hc2M6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE1RFxcXCI7XFxyXFxufVxcclxcbi5mYS1zb3J0LWFscGhhLWRlc2M6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE1RVxcXCI7XFxyXFxufVxcclxcbi5mYS1zb3J0LWFtb3VudC1hc2M6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE2MFxcXCI7XFxyXFxufVxcclxcbi5mYS1zb3J0LWFtb3VudC1kZXNjOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNjFcXFwiO1xcclxcbn1cXHJcXG4uZmEtc29ydC1udW1lcmljLWFzYzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTYyXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNvcnQtbnVtZXJpYy1kZXNjOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNjNcXFwiO1xcclxcbn1cXHJcXG4uZmEtdGh1bWJzLXVwOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNjRcXFwiO1xcclxcbn1cXHJcXG4uZmEtdGh1bWJzLWRvd246YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE2NVxcXCI7XFxyXFxufVxcclxcbi5mYS15b3V0dWJlLXNxdWFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTY2XFxcIjtcXHJcXG59XFxyXFxuLmZhLXlvdXR1YmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE2N1xcXCI7XFxyXFxufVxcclxcbi5mYS14aW5nOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNjhcXFwiO1xcclxcbn1cXHJcXG4uZmEteGluZy1zcXVhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE2OVxcXCI7XFxyXFxufVxcclxcbi5mYS15b3V0dWJlLXBsYXk6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE2QVxcXCI7XFxyXFxufVxcclxcbi5mYS1kcm9wYm94OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNkJcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3RhY2stb3ZlcmZsb3c6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE2Q1xcXCI7XFxyXFxufVxcclxcbi5mYS1pbnN0YWdyYW06YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE2RFxcXCI7XFxyXFxufVxcclxcbi5mYS1mbGlja3I6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE2RVxcXCI7XFxyXFxufVxcclxcbi5mYS1hZG46YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE3MFxcXCI7XFxyXFxufVxcclxcbi5mYS1iaXRidWNrZXQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE3MVxcXCI7XFxyXFxufVxcclxcbi5mYS1iaXRidWNrZXQtc3F1YXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNzJcXFwiO1xcclxcbn1cXHJcXG4uZmEtdHVtYmxyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNzNcXFwiO1xcclxcbn1cXHJcXG4uZmEtdHVtYmxyLXNxdWFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTc0XFxcIjtcXHJcXG59XFxyXFxuLmZhLWxvbmctYXJyb3ctZG93bjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTc1XFxcIjtcXHJcXG59XFxyXFxuLmZhLWxvbmctYXJyb3ctdXA6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE3NlxcXCI7XFxyXFxufVxcclxcbi5mYS1sb25nLWFycm93LWxlZnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE3N1xcXCI7XFxyXFxufVxcclxcbi5mYS1sb25nLWFycm93LXJpZ2h0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNzhcXFwiO1xcclxcbn1cXHJcXG4uZmEtYXBwbGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE3OVxcXCI7XFxyXFxufVxcclxcbi5mYS13aW5kb3dzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxN0FcXFwiO1xcclxcbn1cXHJcXG4uZmEtYW5kcm9pZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTdCXFxcIjtcXHJcXG59XFxyXFxuLmZhLWxpbnV4OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxN0NcXFwiO1xcclxcbn1cXHJcXG4uZmEtZHJpYmJibGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE3RFxcXCI7XFxyXFxufVxcclxcbi5mYS1za3lwZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTdFXFxcIjtcXHJcXG59XFxyXFxuLmZhLWZvdXJzcXVhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE4MFxcXCI7XFxyXFxufVxcclxcbi5mYS10cmVsbG86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE4MVxcXCI7XFxyXFxufVxcclxcbi5mYS1mZW1hbGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE4MlxcXCI7XFxyXFxufVxcclxcbi5mYS1tYWxlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxODNcXFwiO1xcclxcbn1cXHJcXG4uZmEtZ2l0dGlwOmJlZm9yZSxcXHJcXG4uZmEtZ3JhdGlwYXk6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE4NFxcXCI7XFxyXFxufVxcclxcbi5mYS1zdW4tbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTg1XFxcIjtcXHJcXG59XFxyXFxuLmZhLW1vb24tbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTg2XFxcIjtcXHJcXG59XFxyXFxuLmZhLWFyY2hpdmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE4N1xcXCI7XFxyXFxufVxcclxcbi5mYS1idWc6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE4OFxcXCI7XFxyXFxufVxcclxcbi5mYS12azpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTg5XFxcIjtcXHJcXG59XFxyXFxuLmZhLXdlaWJvOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxOEFcXFwiO1xcclxcbn1cXHJcXG4uZmEtcmVucmVuOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxOEJcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGFnZWxpbmVzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxOENcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3RhY2stZXhjaGFuZ2U6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE4RFxcXCI7XFxyXFxufVxcclxcbi5mYS1hcnJvdy1jaXJjbGUtby1yaWdodDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMThFXFxcIjtcXHJcXG59XFxyXFxuLmZhLWFycm93LWNpcmNsZS1vLWxlZnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE5MFxcXCI7XFxyXFxufVxcclxcbi5mYS10b2dnbGUtbGVmdDpiZWZvcmUsXFxyXFxuLmZhLWNhcmV0LXNxdWFyZS1vLWxlZnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE5MVxcXCI7XFxyXFxufVxcclxcbi5mYS1kb3QtY2lyY2xlLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE5MlxcXCI7XFxyXFxufVxcclxcbi5mYS13aGVlbGNoYWlyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxOTNcXFwiO1xcclxcbn1cXHJcXG4uZmEtdmltZW8tc3F1YXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxOTRcXFwiO1xcclxcbn1cXHJcXG4uZmEtdHVya2lzaC1saXJhOmJlZm9yZSxcXHJcXG4uZmEtdHJ5OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxOTVcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGx1cy1zcXVhcmUtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTk2XFxcIjtcXHJcXG59XFxyXFxuLmZhLXNwYWNlLXNodXR0bGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE5N1xcXCI7XFxyXFxufVxcclxcbi5mYS1zbGFjazpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTk4XFxcIjtcXHJcXG59XFxyXFxuLmZhLWVudmVsb3BlLXNxdWFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTk5XFxcIjtcXHJcXG59XFxyXFxuLmZhLXdvcmRwcmVzczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTlBXFxcIjtcXHJcXG59XFxyXFxuLmZhLW9wZW5pZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTlCXFxcIjtcXHJcXG59XFxyXFxuLmZhLWluc3RpdHV0aW9uOmJlZm9yZSxcXHJcXG4uZmEtYmFuazpiZWZvcmUsXFxyXFxuLmZhLXVuaXZlcnNpdHk6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE5Q1xcXCI7XFxyXFxufVxcclxcbi5mYS1tb3J0YXItYm9hcmQ6YmVmb3JlLFxcclxcbi5mYS1ncmFkdWF0aW9uLWNhcDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTlEXFxcIjtcXHJcXG59XFxyXFxuLmZhLXlhaG9vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxOUVcXFwiO1xcclxcbn1cXHJcXG4uZmEtZ29vZ2xlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQTBcXFwiO1xcclxcbn1cXHJcXG4uZmEtcmVkZGl0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQTFcXFwiO1xcclxcbn1cXHJcXG4uZmEtcmVkZGl0LXNxdWFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUEyXFxcIjtcXHJcXG59XFxyXFxuLmZhLXN0dW1ibGV1cG9uLWNpcmNsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUEzXFxcIjtcXHJcXG59XFxyXFxuLmZhLXN0dW1ibGV1cG9uOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQTRcXFwiO1xcclxcbn1cXHJcXG4uZmEtZGVsaWNpb3VzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQTVcXFwiO1xcclxcbn1cXHJcXG4uZmEtZGlnZzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUE2XFxcIjtcXHJcXG59XFxyXFxuLmZhLXBpZWQtcGlwZXItcHA6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFBN1xcXCI7XFxyXFxufVxcclxcbi5mYS1waWVkLXBpcGVyLWFsdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUE4XFxcIjtcXHJcXG59XFxyXFxuLmZhLWRydXBhbDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUE5XFxcIjtcXHJcXG59XFxyXFxuLmZhLWpvb21sYTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUFBXFxcIjtcXHJcXG59XFxyXFxuLmZhLWxhbmd1YWdlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQUJcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmF4OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQUNcXFwiO1xcclxcbn1cXHJcXG4uZmEtYnVpbGRpbmc6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFBRFxcXCI7XFxyXFxufVxcclxcbi5mYS1jaGlsZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUFFXFxcIjtcXHJcXG59XFxyXFxuLmZhLXBhdzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUIwXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNwb29uOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQjFcXFwiO1xcclxcbn1cXHJcXG4uZmEtY3ViZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUIyXFxcIjtcXHJcXG59XFxyXFxuLmZhLWN1YmVzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQjNcXFwiO1xcclxcbn1cXHJcXG4uZmEtYmVoYW5jZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUI0XFxcIjtcXHJcXG59XFxyXFxuLmZhLWJlaGFuY2Utc3F1YXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQjVcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3RlYW06YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFCNlxcXCI7XFxyXFxufVxcclxcbi5mYS1zdGVhbS1zcXVhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFCN1xcXCI7XFxyXFxufVxcclxcbi5mYS1yZWN5Y2xlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQjhcXFwiO1xcclxcbn1cXHJcXG4uZmEtYXV0b21vYmlsZTpiZWZvcmUsXFxyXFxuLmZhLWNhcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUI5XFxcIjtcXHJcXG59XFxyXFxuLmZhLWNhYjpiZWZvcmUsXFxyXFxuLmZhLXRheGk6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFCQVxcXCI7XFxyXFxufVxcclxcbi5mYS10cmVlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQkJcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3BvdGlmeTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUJDXFxcIjtcXHJcXG59XFxyXFxuLmZhLWRldmlhbnRhcnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFCRFxcXCI7XFxyXFxufVxcclxcbi5mYS1zb3VuZGNsb3VkOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQkVcXFwiO1xcclxcbn1cXHJcXG4uZmEtZGF0YWJhc2U6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFDMFxcXCI7XFxyXFxufVxcclxcbi5mYS1maWxlLXBkZi1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQzFcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmlsZS13b3JkLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFDMlxcXCI7XFxyXFxufVxcclxcbi5mYS1maWxlLWV4Y2VsLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFDM1xcXCI7XFxyXFxufVxcclxcbi5mYS1maWxlLXBvd2VycG9pbnQtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUM0XFxcIjtcXHJcXG59XFxyXFxuLmZhLWZpbGUtcGhvdG8tbzpiZWZvcmUsXFxyXFxuLmZhLWZpbGUtcGljdHVyZS1vOmJlZm9yZSxcXHJcXG4uZmEtZmlsZS1pbWFnZS1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQzVcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmlsZS16aXAtbzpiZWZvcmUsXFxyXFxuLmZhLWZpbGUtYXJjaGl2ZS1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQzZcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmlsZS1zb3VuZC1vOmJlZm9yZSxcXHJcXG4uZmEtZmlsZS1hdWRpby1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQzdcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmlsZS1tb3ZpZS1vOmJlZm9yZSxcXHJcXG4uZmEtZmlsZS12aWRlby1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQzhcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmlsZS1jb2RlLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFDOVxcXCI7XFxyXFxufVxcclxcbi5mYS12aW5lOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQ0FcXFwiO1xcclxcbn1cXHJcXG4uZmEtY29kZXBlbjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUNCXFxcIjtcXHJcXG59XFxyXFxuLmZhLWpzZmlkZGxlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQ0NcXFwiO1xcclxcbn1cXHJcXG4uZmEtbGlmZS1ib3V5OmJlZm9yZSxcXHJcXG4uZmEtbGlmZS1idW95OmJlZm9yZSxcXHJcXG4uZmEtbGlmZS1zYXZlcjpiZWZvcmUsXFxyXFxuLmZhLXN1cHBvcnQ6YmVmb3JlLFxcclxcbi5mYS1saWZlLXJpbmc6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFDRFxcXCI7XFxyXFxufVxcclxcbi5mYS1jaXJjbGUtby1ub3RjaDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUNFXFxcIjtcXHJcXG59XFxyXFxuLmZhLXJhOmJlZm9yZSxcXHJcXG4uZmEtcmVzaXN0YW5jZTpiZWZvcmUsXFxyXFxuLmZhLXJlYmVsOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRDBcXFwiO1xcclxcbn1cXHJcXG4uZmEtZ2U6YmVmb3JlLFxcclxcbi5mYS1lbXBpcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFEMVxcXCI7XFxyXFxufVxcclxcbi5mYS1naXQtc3F1YXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRDJcXFwiO1xcclxcbn1cXHJcXG4uZmEtZ2l0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRDNcXFwiO1xcclxcbn1cXHJcXG4uZmEteS1jb21iaW5hdG9yLXNxdWFyZTpiZWZvcmUsXFxyXFxuLmZhLXljLXNxdWFyZTpiZWZvcmUsXFxyXFxuLmZhLWhhY2tlci1uZXdzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRDRcXFwiO1xcclxcbn1cXHJcXG4uZmEtdGVuY2VudC13ZWlibzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUQ1XFxcIjtcXHJcXG59XFxyXFxuLmZhLXFxOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRDZcXFwiO1xcclxcbn1cXHJcXG4uZmEtd2VjaGF0OmJlZm9yZSxcXHJcXG4uZmEtd2VpeGluOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRDdcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2VuZDpiZWZvcmUsXFxyXFxuLmZhLXBhcGVyLXBsYW5lOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRDhcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2VuZC1vOmJlZm9yZSxcXHJcXG4uZmEtcGFwZXItcGxhbmUtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUQ5XFxcIjtcXHJcXG59XFxyXFxuLmZhLWhpc3Rvcnk6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFEQVxcXCI7XFxyXFxufVxcclxcbi5mYS1jaXJjbGUtdGhpbjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMURCXFxcIjtcXHJcXG59XFxyXFxuLmZhLWhlYWRlcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMURDXFxcIjtcXHJcXG59XFxyXFxuLmZhLXBhcmFncmFwaDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUREXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNsaWRlcnM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFERVxcXCI7XFxyXFxufVxcclxcbi5mYS1zaGFyZS1hbHQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFFMFxcXCI7XFxyXFxufVxcclxcbi5mYS1zaGFyZS1hbHQtc3F1YXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRTFcXFwiO1xcclxcbn1cXHJcXG4uZmEtYm9tYjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUUyXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNvY2Nlci1iYWxsLW86YmVmb3JlLFxcclxcbi5mYS1mdXRib2wtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUUzXFxcIjtcXHJcXG59XFxyXFxuLmZhLXR0eTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUU0XFxcIjtcXHJcXG59XFxyXFxuLmZhLWJpbm9jdWxhcnM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFFNVxcXCI7XFxyXFxufVxcclxcbi5mYS1wbHVnOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRTZcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2xpZGVzaGFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUU3XFxcIjtcXHJcXG59XFxyXFxuLmZhLXR3aXRjaDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUU4XFxcIjtcXHJcXG59XFxyXFxuLmZhLXllbHA6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFFOVxcXCI7XFxyXFxufVxcclxcbi5mYS1uZXdzcGFwZXItbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUVBXFxcIjtcXHJcXG59XFxyXFxuLmZhLXdpZmk6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFFQlxcXCI7XFxyXFxufVxcclxcbi5mYS1jYWxjdWxhdG9yOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRUNcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGF5cGFsOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRURcXFwiO1xcclxcbn1cXHJcXG4uZmEtZ29vZ2xlLXdhbGxldDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUVFXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNjLXZpc2E6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFGMFxcXCI7XFxyXFxufVxcclxcbi5mYS1jYy1tYXN0ZXJjYXJkOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRjFcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2MtZGlzY292ZXI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFGMlxcXCI7XFxyXFxufVxcclxcbi5mYS1jYy1hbWV4OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRjNcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2MtcGF5cGFsOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRjRcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2Mtc3RyaXBlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRjVcXFwiO1xcclxcbn1cXHJcXG4uZmEtYmVsbC1zbGFzaDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUY2XFxcIjtcXHJcXG59XFxyXFxuLmZhLWJlbGwtc2xhc2gtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUY3XFxcIjtcXHJcXG59XFxyXFxuLmZhLXRyYXNoOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRjhcXFwiO1xcclxcbn1cXHJcXG4uZmEtY29weXJpZ2h0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRjlcXFwiO1xcclxcbn1cXHJcXG4uZmEtYXQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFGQVxcXCI7XFxyXFxufVxcclxcbi5mYS1leWVkcm9wcGVyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRkJcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGFpbnQtYnJ1c2g6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFGQ1xcXCI7XFxyXFxufVxcclxcbi5mYS1iaXJ0aGRheS1jYWtlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRkRcXFwiO1xcclxcbn1cXHJcXG4uZmEtYXJlYS1jaGFydDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUZFXFxcIjtcXHJcXG59XFxyXFxuLmZhLXBpZS1jaGFydDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjAwXFxcIjtcXHJcXG59XFxyXFxuLmZhLWxpbmUtY2hhcnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIwMVxcXCI7XFxyXFxufVxcclxcbi5mYS1sYXN0Zm06YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIwMlxcXCI7XFxyXFxufVxcclxcbi5mYS1sYXN0Zm0tc3F1YXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMDNcXFwiO1xcclxcbn1cXHJcXG4uZmEtdG9nZ2xlLW9mZjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjA0XFxcIjtcXHJcXG59XFxyXFxuLmZhLXRvZ2dsZS1vbjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjA1XFxcIjtcXHJcXG59XFxyXFxuLmZhLWJpY3ljbGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIwNlxcXCI7XFxyXFxufVxcclxcbi5mYS1idXM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIwN1xcXCI7XFxyXFxufVxcclxcbi5mYS1pb3hob3N0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMDhcXFwiO1xcclxcbn1cXHJcXG4uZmEtYW5nZWxsaXN0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMDlcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2M6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIwQVxcXCI7XFxyXFxufVxcclxcbi5mYS1zaGVrZWw6YmVmb3JlLFxcclxcbi5mYS1zaGVxZWw6YmVmb3JlLFxcclxcbi5mYS1pbHM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIwQlxcXCI7XFxyXFxufVxcclxcbi5mYS1tZWFucGF0aDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjBDXFxcIjtcXHJcXG59XFxyXFxuLmZhLWJ1eXNlbGxhZHM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIwRFxcXCI7XFxyXFxufVxcclxcbi5mYS1jb25uZWN0ZGV2ZWxvcDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjBFXFxcIjtcXHJcXG59XFxyXFxuLmZhLWRhc2hjdWJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMTBcXFwiO1xcclxcbn1cXHJcXG4uZmEtZm9ydW1iZWU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIxMVxcXCI7XFxyXFxufVxcclxcbi5mYS1sZWFucHViOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMTJcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2VsbHN5OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMTNcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2hpcnRzaW5idWxrOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMTRcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2ltcGx5YnVpbHQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIxNVxcXCI7XFxyXFxufVxcclxcbi5mYS1za3lhdGxhczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjE2XFxcIjtcXHJcXG59XFxyXFxuLmZhLWNhcnQtcGx1czpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjE3XFxcIjtcXHJcXG59XFxyXFxuLmZhLWNhcnQtYXJyb3ctZG93bjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjE4XFxcIjtcXHJcXG59XFxyXFxuLmZhLWRpYW1vbmQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIxOVxcXCI7XFxyXFxufVxcclxcbi5mYS1zaGlwOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMUFcXFwiO1xcclxcbn1cXHJcXG4uZmEtdXNlci1zZWNyZXQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIxQlxcXCI7XFxyXFxufVxcclxcbi5mYS1tb3RvcmN5Y2xlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMUNcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3RyZWV0LXZpZXc6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIxRFxcXCI7XFxyXFxufVxcclxcbi5mYS1oZWFydGJlYXQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIxRVxcXCI7XFxyXFxufVxcclxcbi5mYS12ZW51czpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjIxXFxcIjtcXHJcXG59XFxyXFxuLmZhLW1hcnM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIyMlxcXCI7XFxyXFxufVxcclxcbi5mYS1tZXJjdXJ5OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMjNcXFwiO1xcclxcbn1cXHJcXG4uZmEtaW50ZXJzZXg6YmVmb3JlLFxcclxcbi5mYS10cmFuc2dlbmRlcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjI0XFxcIjtcXHJcXG59XFxyXFxuLmZhLXRyYW5zZ2VuZGVyLWFsdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjI1XFxcIjtcXHJcXG59XFxyXFxuLmZhLXZlbnVzLWRvdWJsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjI2XFxcIjtcXHJcXG59XFxyXFxuLmZhLW1hcnMtZG91YmxlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMjdcXFwiO1xcclxcbn1cXHJcXG4uZmEtdmVudXMtbWFyczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjI4XFxcIjtcXHJcXG59XFxyXFxuLmZhLW1hcnMtc3Ryb2tlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMjlcXFwiO1xcclxcbn1cXHJcXG4uZmEtbWFycy1zdHJva2UtdjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjJBXFxcIjtcXHJcXG59XFxyXFxuLmZhLW1hcnMtc3Ryb2tlLWg6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIyQlxcXCI7XFxyXFxufVxcclxcbi5mYS1uZXV0ZXI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIyQ1xcXCI7XFxyXFxufVxcclxcbi5mYS1nZW5kZXJsZXNzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMkRcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmFjZWJvb2stb2ZmaWNpYWw6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIzMFxcXCI7XFxyXFxufVxcclxcbi5mYS1waW50ZXJlc3QtcDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjMxXFxcIjtcXHJcXG59XFxyXFxuLmZhLXdoYXRzYXBwOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMzJcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2VydmVyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMzNcXFwiO1xcclxcbn1cXHJcXG4uZmEtdXNlci1wbHVzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMzRcXFwiO1xcclxcbn1cXHJcXG4uZmEtdXNlci10aW1lczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjM1XFxcIjtcXHJcXG59XFxyXFxuLmZhLWhvdGVsOmJlZm9yZSxcXHJcXG4uZmEtYmVkOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMzZcXFwiO1xcclxcbn1cXHJcXG4uZmEtdmlhY29pbjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjM3XFxcIjtcXHJcXG59XFxyXFxuLmZhLXRyYWluOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMzhcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3Vid2F5OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMzlcXFwiO1xcclxcbn1cXHJcXG4uZmEtbWVkaXVtOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyM0FcXFwiO1xcclxcbn1cXHJcXG4uZmEteWM6YmVmb3JlLFxcclxcbi5mYS15LWNvbWJpbmF0b3I6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIzQlxcXCI7XFxyXFxufVxcclxcbi5mYS1vcHRpbi1tb25zdGVyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyM0NcXFwiO1xcclxcbn1cXHJcXG4uZmEtb3BlbmNhcnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIzRFxcXCI7XFxyXFxufVxcclxcbi5mYS1leHBlZGl0ZWRzc2w6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIzRVxcXCI7XFxyXFxufVxcclxcbi5mYS1iYXR0ZXJ5LTQ6YmVmb3JlLFxcclxcbi5mYS1iYXR0ZXJ5OmJlZm9yZSxcXHJcXG4uZmEtYmF0dGVyeS1mdWxsOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNDBcXFwiO1xcclxcbn1cXHJcXG4uZmEtYmF0dGVyeS0zOmJlZm9yZSxcXHJcXG4uZmEtYmF0dGVyeS10aHJlZS1xdWFydGVyczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjQxXFxcIjtcXHJcXG59XFxyXFxuLmZhLWJhdHRlcnktMjpiZWZvcmUsXFxyXFxuLmZhLWJhdHRlcnktaGFsZjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjQyXFxcIjtcXHJcXG59XFxyXFxuLmZhLWJhdHRlcnktMTpiZWZvcmUsXFxyXFxuLmZhLWJhdHRlcnktcXVhcnRlcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjQzXFxcIjtcXHJcXG59XFxyXFxuLmZhLWJhdHRlcnktMDpiZWZvcmUsXFxyXFxuLmZhLWJhdHRlcnktZW1wdHk6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI0NFxcXCI7XFxyXFxufVxcclxcbi5mYS1tb3VzZS1wb2ludGVyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNDVcXFwiO1xcclxcbn1cXHJcXG4uZmEtaS1jdXJzb3I6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI0NlxcXCI7XFxyXFxufVxcclxcbi5mYS1vYmplY3QtZ3JvdXA6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI0N1xcXCI7XFxyXFxufVxcclxcbi5mYS1vYmplY3QtdW5ncm91cDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjQ4XFxcIjtcXHJcXG59XFxyXFxuLmZhLXN0aWNreS1ub3RlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNDlcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3RpY2t5LW5vdGUtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjRBXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNjLWpjYjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjRCXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNjLWRpbmVycy1jbHViOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNENcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2xvbmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI0RFxcXCI7XFxyXFxufVxcclxcbi5mYS1iYWxhbmNlLXNjYWxlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNEVcXFwiO1xcclxcbn1cXHJcXG4uZmEtaG91cmdsYXNzLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI1MFxcXCI7XFxyXFxufVxcclxcbi5mYS1ob3VyZ2xhc3MtMTpiZWZvcmUsXFxyXFxuLmZhLWhvdXJnbGFzcy1zdGFydDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjUxXFxcIjtcXHJcXG59XFxyXFxuLmZhLWhvdXJnbGFzcy0yOmJlZm9yZSxcXHJcXG4uZmEtaG91cmdsYXNzLWhhbGY6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI1MlxcXCI7XFxyXFxufVxcclxcbi5mYS1ob3VyZ2xhc3MtMzpiZWZvcmUsXFxyXFxuLmZhLWhvdXJnbGFzcy1lbmQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI1M1xcXCI7XFxyXFxufVxcclxcbi5mYS1ob3VyZ2xhc3M6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI1NFxcXCI7XFxyXFxufVxcclxcbi5mYS1oYW5kLWdyYWItbzpiZWZvcmUsXFxyXFxuLmZhLWhhbmQtcm9jay1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNTVcXFwiO1xcclxcbn1cXHJcXG4uZmEtaGFuZC1zdG9wLW86YmVmb3JlLFxcclxcbi5mYS1oYW5kLXBhcGVyLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI1NlxcXCI7XFxyXFxufVxcclxcbi5mYS1oYW5kLXNjaXNzb3JzLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI1N1xcXCI7XFxyXFxufVxcclxcbi5mYS1oYW5kLWxpemFyZC1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNThcXFwiO1xcclxcbn1cXHJcXG4uZmEtaGFuZC1zcG9jay1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNTlcXFwiO1xcclxcbn1cXHJcXG4uZmEtaGFuZC1wb2ludGVyLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI1QVxcXCI7XFxyXFxufVxcclxcbi5mYS1oYW5kLXBlYWNlLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI1QlxcXCI7XFxyXFxufVxcclxcbi5mYS10cmFkZW1hcms6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI1Q1xcXCI7XFxyXFxufVxcclxcbi5mYS1yZWdpc3RlcmVkOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNURcXFwiO1xcclxcbn1cXHJcXG4uZmEtY3JlYXRpdmUtY29tbW9uczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjVFXFxcIjtcXHJcXG59XFxyXFxuLmZhLWdnOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNjBcXFwiO1xcclxcbn1cXHJcXG4uZmEtZ2ctY2lyY2xlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNjFcXFwiO1xcclxcbn1cXHJcXG4uZmEtdHJpcGFkdmlzb3I6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI2MlxcXCI7XFxyXFxufVxcclxcbi5mYS1vZG5va2xhc3NuaWtpOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNjNcXFwiO1xcclxcbn1cXHJcXG4uZmEtb2Rub2tsYXNzbmlraS1zcXVhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI2NFxcXCI7XFxyXFxufVxcclxcbi5mYS1nZXQtcG9ja2V0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNjVcXFwiO1xcclxcbn1cXHJcXG4uZmEtd2lraXBlZGlhLXc6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI2NlxcXCI7XFxyXFxufVxcclxcbi5mYS1zYWZhcmk6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI2N1xcXCI7XFxyXFxufVxcclxcbi5mYS1jaHJvbWU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI2OFxcXCI7XFxyXFxufVxcclxcbi5mYS1maXJlZm94OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNjlcXFwiO1xcclxcbn1cXHJcXG4uZmEtb3BlcmE6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI2QVxcXCI7XFxyXFxufVxcclxcbi5mYS1pbnRlcm5ldC1leHBsb3JlcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjZCXFxcIjtcXHJcXG59XFxyXFxuLmZhLXR2OmJlZm9yZSxcXHJcXG4uZmEtdGVsZXZpc2lvbjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjZDXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNvbnRhbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjZEXFxcIjtcXHJcXG59XFxyXFxuLmZhLTUwMHB4OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNkVcXFwiO1xcclxcbn1cXHJcXG4uZmEtYW1hem9uOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNzBcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2FsZW5kYXItcGx1cy1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNzFcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2FsZW5kYXItbWludXMtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjcyXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNhbGVuZGFyLXRpbWVzLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI3M1xcXCI7XFxyXFxufVxcclxcbi5mYS1jYWxlbmRhci1jaGVjay1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNzRcXFwiO1xcclxcbn1cXHJcXG4uZmEtaW5kdXN0cnk6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI3NVxcXCI7XFxyXFxufVxcclxcbi5mYS1tYXAtcGluOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNzZcXFwiO1xcclxcbn1cXHJcXG4uZmEtbWFwLXNpZ25zOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNzdcXFwiO1xcclxcbn1cXHJcXG4uZmEtbWFwLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI3OFxcXCI7XFxyXFxufVxcclxcbi5mYS1tYXA6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI3OVxcXCI7XFxyXFxufVxcclxcbi5mYS1jb21tZW50aW5nOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyN0FcXFwiO1xcclxcbn1cXHJcXG4uZmEtY29tbWVudGluZy1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyN0JcXFwiO1xcclxcbn1cXHJcXG4uZmEtaG91eno6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI3Q1xcXCI7XFxyXFxufVxcclxcbi5mYS12aW1lbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjdEXFxcIjtcXHJcXG59XFxyXFxuLmZhLWJsYWNrLXRpZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjdFXFxcIjtcXHJcXG59XFxyXFxuLmZhLWZvbnRpY29uczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjgwXFxcIjtcXHJcXG59XFxyXFxuLmZhLXJlZGRpdC1hbGllbjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjgxXFxcIjtcXHJcXG59XFxyXFxuLmZhLWVkZ2U6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI4MlxcXCI7XFxyXFxufVxcclxcbi5mYS1jcmVkaXQtY2FyZC1hbHQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI4M1xcXCI7XFxyXFxufVxcclxcbi5mYS1jb2RpZXBpZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjg0XFxcIjtcXHJcXG59XFxyXFxuLmZhLW1vZHg6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI4NVxcXCI7XFxyXFxufVxcclxcbi5mYS1mb3J0LWF3ZXNvbWU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI4NlxcXCI7XFxyXFxufVxcclxcbi5mYS11c2I6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI4N1xcXCI7XFxyXFxufVxcclxcbi5mYS1wcm9kdWN0LWh1bnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI4OFxcXCI7XFxyXFxufVxcclxcbi5mYS1taXhjbG91ZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjg5XFxcIjtcXHJcXG59XFxyXFxuLmZhLXNjcmliZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjhBXFxcIjtcXHJcXG59XFxyXFxuLmZhLXBhdXNlLWNpcmNsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjhCXFxcIjtcXHJcXG59XFxyXFxuLmZhLXBhdXNlLWNpcmNsZS1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyOENcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3RvcC1jaXJjbGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI4RFxcXCI7XFxyXFxufVxcclxcbi5mYS1zdG9wLWNpcmNsZS1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyOEVcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2hvcHBpbmctYmFnOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyOTBcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2hvcHBpbmctYmFza2V0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyOTFcXFwiO1xcclxcbn1cXHJcXG4uZmEtaGFzaHRhZzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjkyXFxcIjtcXHJcXG59XFxyXFxuLmZhLWJsdWV0b290aDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjkzXFxcIjtcXHJcXG59XFxyXFxuLmZhLWJsdWV0b290aC1iOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyOTRcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGVyY2VudDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjk1XFxcIjtcXHJcXG59XFxyXFxuLmZhLWdpdGxhYjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjk2XFxcIjtcXHJcXG59XFxyXFxuLmZhLXdwYmVnaW5uZXI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI5N1xcXCI7XFxyXFxufVxcclxcbi5mYS13cGZvcm1zOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyOThcXFwiO1xcclxcbn1cXHJcXG4uZmEtZW52aXJhOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyOTlcXFwiO1xcclxcbn1cXHJcXG4uZmEtdW5pdmVyc2FsLWFjY2VzczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjlBXFxcIjtcXHJcXG59XFxyXFxuLmZhLXdoZWVsY2hhaXItYWx0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyOUJcXFwiO1xcclxcbn1cXHJcXG4uZmEtcXVlc3Rpb24tY2lyY2xlLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI5Q1xcXCI7XFxyXFxufVxcclxcbi5mYS1ibGluZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjlEXFxcIjtcXHJcXG59XFxyXFxuLmZhLWF1ZGlvLWRlc2NyaXB0aW9uOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyOUVcXFwiO1xcclxcbn1cXHJcXG4uZmEtdm9sdW1lLWNvbnRyb2wtcGhvbmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJBMFxcXCI7XFxyXFxufVxcclxcbi5mYS1icmFpbGxlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyQTFcXFwiO1xcclxcbn1cXHJcXG4uZmEtYXNzaXN0aXZlLWxpc3RlbmluZy1zeXN0ZW1zOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyQTJcXFwiO1xcclxcbn1cXHJcXG4uZmEtYXNsLWludGVycHJldGluZzpiZWZvcmUsXFxyXFxuLmZhLWFtZXJpY2FuLXNpZ24tbGFuZ3VhZ2UtaW50ZXJwcmV0aW5nOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyQTNcXFwiO1xcclxcbn1cXHJcXG4uZmEtZGVhZm5lc3M6YmVmb3JlLFxcclxcbi5mYS1oYXJkLW9mLWhlYXJpbmc6YmVmb3JlLFxcclxcbi5mYS1kZWFmOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyQTRcXFwiO1xcclxcbn1cXHJcXG4uZmEtZ2xpZGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJBNVxcXCI7XFxyXFxufVxcclxcbi5mYS1nbGlkZS1nOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyQTZcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2lnbmluZzpiZWZvcmUsXFxyXFxuLmZhLXNpZ24tbGFuZ3VhZ2U6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJBN1xcXCI7XFxyXFxufVxcclxcbi5mYS1sb3ctdmlzaW9uOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyQThcXFwiO1xcclxcbn1cXHJcXG4uZmEtdmlhZGVvOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyQTlcXFwiO1xcclxcbn1cXHJcXG4uZmEtdmlhZGVvLXNxdWFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMkFBXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNuYXBjaGF0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyQUJcXFwiO1xcclxcbn1cXHJcXG4uZmEtc25hcGNoYXQtZ2hvc3Q6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJBQ1xcXCI7XFxyXFxufVxcclxcbi5mYS1zbmFwY2hhdC1zcXVhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJBRFxcXCI7XFxyXFxufVxcclxcbi5mYS1waWVkLXBpcGVyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyQUVcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmlyc3Qtb3JkZXI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJCMFxcXCI7XFxyXFxufVxcclxcbi5mYS15b2FzdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMkIxXFxcIjtcXHJcXG59XFxyXFxuLmZhLXRoZW1laXNsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMkIyXFxcIjtcXHJcXG59XFxyXFxuLmZhLWdvb2dsZS1wbHVzLWNpcmNsZTpiZWZvcmUsXFxyXFxuLmZhLWdvb2dsZS1wbHVzLW9mZmljaWFsOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyQjNcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmE6YmVmb3JlLFxcclxcbi5mYS1mb250LWF3ZXNvbWU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJCNFxcXCI7XFxyXFxufVxcclxcbi5mYS1oYW5kc2hha2UtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMkI1XFxcIjtcXHJcXG59XFxyXFxuLmZhLWVudmVsb3BlLW9wZW46YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJCNlxcXCI7XFxyXFxufVxcclxcbi5mYS1lbnZlbG9wZS1vcGVuLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJCN1xcXCI7XFxyXFxufVxcclxcbi5mYS1saW5vZGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJCOFxcXCI7XFxyXFxufVxcclxcbi5mYS1hZGRyZXNzLWJvb2s6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJCOVxcXCI7XFxyXFxufVxcclxcbi5mYS1hZGRyZXNzLWJvb2stbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMkJBXFxcIjtcXHJcXG59XFxyXFxuLmZhLXZjYXJkOmJlZm9yZSxcXHJcXG4uZmEtYWRkcmVzcy1jYXJkOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyQkJcXFwiO1xcclxcbn1cXHJcXG4uZmEtdmNhcmQtbzpiZWZvcmUsXFxyXFxuLmZhLWFkZHJlc3MtY2FyZC1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyQkNcXFwiO1xcclxcbn1cXHJcXG4uZmEtdXNlci1jaXJjbGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJCRFxcXCI7XFxyXFxufVxcclxcbi5mYS11c2VyLWNpcmNsZS1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyQkVcXFwiO1xcclxcbn1cXHJcXG4uZmEtdXNlci1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyQzBcXFwiO1xcclxcbn1cXHJcXG4uZmEtaWQtYmFkZ2U6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJDMVxcXCI7XFxyXFxufVxcclxcbi5mYS1kcml2ZXJzLWxpY2Vuc2U6YmVmb3JlLFxcclxcbi5mYS1pZC1jYXJkOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyQzJcXFwiO1xcclxcbn1cXHJcXG4uZmEtZHJpdmVycy1saWNlbnNlLW86YmVmb3JlLFxcclxcbi5mYS1pZC1jYXJkLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJDM1xcXCI7XFxyXFxufVxcclxcbi5mYS1xdW9yYTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMkM0XFxcIjtcXHJcXG59XFxyXFxuLmZhLWZyZWUtY29kZS1jYW1wOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyQzVcXFwiO1xcclxcbn1cXHJcXG4uZmEtdGVsZWdyYW06YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJDNlxcXCI7XFxyXFxufVxcclxcbi5mYS10aGVybW9tZXRlci00OmJlZm9yZSxcXHJcXG4uZmEtdGhlcm1vbWV0ZXI6YmVmb3JlLFxcclxcbi5mYS10aGVybW9tZXRlci1mdWxsOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyQzdcXFwiO1xcclxcbn1cXHJcXG4uZmEtdGhlcm1vbWV0ZXItMzpiZWZvcmUsXFxyXFxuLmZhLXRoZXJtb21ldGVyLXRocmVlLXF1YXJ0ZXJzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyQzhcXFwiO1xcclxcbn1cXHJcXG4uZmEtdGhlcm1vbWV0ZXItMjpiZWZvcmUsXFxyXFxuLmZhLXRoZXJtb21ldGVyLWhhbGY6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJDOVxcXCI7XFxyXFxufVxcclxcbi5mYS10aGVybW9tZXRlci0xOmJlZm9yZSxcXHJcXG4uZmEtdGhlcm1vbWV0ZXItcXVhcnRlcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMkNBXFxcIjtcXHJcXG59XFxyXFxuLmZhLXRoZXJtb21ldGVyLTA6YmVmb3JlLFxcclxcbi5mYS10aGVybW9tZXRlci1lbXB0eTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMkNCXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNob3dlcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMkNDXFxcIjtcXHJcXG59XFxyXFxuLmZhLWJhdGh0dWI6YmVmb3JlLFxcclxcbi5mYS1zMTU6YmVmb3JlLFxcclxcbi5mYS1iYXRoOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyQ0RcXFwiO1xcclxcbn1cXHJcXG4uZmEtcG9kY2FzdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMkNFXFxcIjtcXHJcXG59XFxyXFxuLmZhLXdpbmRvdy1tYXhpbWl6ZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMkQwXFxcIjtcXHJcXG59XFxyXFxuLmZhLXdpbmRvdy1taW5pbWl6ZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMkQxXFxcIjtcXHJcXG59XFxyXFxuLmZhLXdpbmRvdy1yZXN0b3JlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyRDJcXFwiO1xcclxcbn1cXHJcXG4uZmEtdGltZXMtcmVjdGFuZ2xlOmJlZm9yZSxcXHJcXG4uZmEtd2luZG93LWNsb3NlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyRDNcXFwiO1xcclxcbn1cXHJcXG4uZmEtdGltZXMtcmVjdGFuZ2xlLW86YmVmb3JlLFxcclxcbi5mYS13aW5kb3ctY2xvc2UtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMkQ0XFxcIjtcXHJcXG59XFxyXFxuLmZhLWJhbmRjYW1wOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyRDVcXFwiO1xcclxcbn1cXHJcXG4uZmEtZ3JhdjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMkQ2XFxcIjtcXHJcXG59XFxyXFxuLmZhLWV0c3k6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJEN1xcXCI7XFxyXFxufVxcclxcbi5mYS1pbWRiOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyRDhcXFwiO1xcclxcbn1cXHJcXG4uZmEtcmF2ZWxyeTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMkQ5XFxcIjtcXHJcXG59XFxyXFxuLmZhLWVlcmNhc3Q6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJEQVxcXCI7XFxyXFxufVxcclxcbi5mYS1taWNyb2NoaXA6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJEQlxcXCI7XFxyXFxufVxcclxcbi5mYS1zbm93Zmxha2UtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMkRDXFxcIjtcXHJcXG59XFxyXFxuLmZhLXN1cGVycG93ZXJzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyRERcXFwiO1xcclxcbn1cXHJcXG4uZmEtd3BleHBsb3JlcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMkRFXFxcIjtcXHJcXG59XFxyXFxuLmZhLW1lZXR1cDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMkUwXFxcIjtcXHJcXG59XFxyXFxuLnNyLW9ubHkge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDFweDtcXHJcXG4gIGhlaWdodDogMXB4O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogLTFweDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbn1cXHJcXG4uc3Itb25seS1mb2N1c2FibGU6YWN0aXZlLFxcclxcbi5zci1vbmx5LWZvY3VzYWJsZTpmb2N1cyB7XFxyXFxuICBwb3NpdGlvbjogc3RhdGljO1xcclxcbiAgd2lkdGg6IGF1dG87XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXHJcXG4gIGNsaXA6IGF1dG87XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIDtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9mb250cy9mb250LWF3ZXNvbWUuY3NzJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcclxcbi5pb24tYWxlcnQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTAxXFxcIjsgfVxcclxcblxcclxcbi5pb24tYWxlcnQtY2lyY2xlZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMDBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWFkZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQzdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWFkZC1jaXJjbGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzU5XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1hbGFybS1jbG9jazpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNUFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWFsZXJ0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM1QlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtYXBwczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNUNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWFyY2hpdmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkM5XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1hcnJvdy1iYWNrOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJDQVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtYXJyb3ctZG93bjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNURcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWFycm93LWRyb3Bkb3duOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM1RlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtYXJyb3ctZHJvcGRvd24tY2lyY2xlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM1RVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtYXJyb3ctZHJvcGxlZnQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzYxXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1hcnJvdy1kcm9wbGVmdC1jaXJjbGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzYwXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1hcnJvdy1kcm9wcmlnaHQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzYzXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1hcnJvdy1kcm9wcmlnaHQtY2lyY2xlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM2MlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtYXJyb3ctZHJvcHVwOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM2NVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtYXJyb3ctZHJvcHVwLWNpcmNsZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNjRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWFycm93LWZvcndhcmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzBGXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1hcnJvdy11cDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNjZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWF0dGFjaDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNjdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWJhcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNjhcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWJpY3ljbGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzY5XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1ib2F0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM2QVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtYm9va21hcms6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzZCXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1idWxiOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM2Q1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtYnVzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM2RFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtY2FsZW5kYXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkQxXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1jYWxsOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJEMlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtY2FtZXJhOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJEM1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtY2FuY2VsOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM2RVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtY2FyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM2RlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtY2FydDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNzBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWNoYXQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkQ0XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1jaGVja2JveDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNzRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWNoZWNrYm94LWJsYW5rOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM3MVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtY2hlY2tib3gtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNzNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWNoZWNrYm94LW91dGxpbmUtYmxhbms6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzcyXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1jaGVja21hcmstY2lyY2xlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM3NVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtY2xpcGJvYXJkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM3NlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtY2xvc2U6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkQ3XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1jbG91ZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzN0FcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWNsb3VkLWNpcmNsZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNzdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWNsb3VkLWRvbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzc4XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1jbG91ZC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM3OVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtY29sb3ItcGFsZXR0ZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzN0JcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWNvbXBhc3M6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzdDXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1jb250YWN0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJEOFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtY29udGFjdHM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkQ5XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1jb250cmFjdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzN0RcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWNyZWF0ZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzN0VcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWRlbGV0ZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzN0ZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWRlc2t0b3A6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzgwXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1kb2N1bWVudDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzODFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWRvbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzgzXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1kb25lLWFsbDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzODJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWRvd25sb2FkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJERFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtZHJhZnRzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM4NFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtZXhpdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzODVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWV4cGFuZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzODZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWZhdm9yaXRlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM4OFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtZmF2b3JpdGUtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzODdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWZpbG06YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzg5XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1mb2xkZXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkUwXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1mb2xkZXItb3BlbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzOEFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWZ1bm5lbDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzOEJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWdsb2JlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM4Q1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtaGFuZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyRTNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWhhbmdvdXQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzhEXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1oYXBweTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzOEVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWhvbWU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzhGXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1pbWFnZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyRTRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWxhcHRvcDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzOTBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWxpc3Q6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzkxXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1sb2NhdGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkU5XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1sb2NrOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM5MlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtbWFpbDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyRUJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLW1hcDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzOTNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLW1lbnU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzk0XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1taWNyb3Bob25lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJFQ1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtbWljcm9waG9uZS1vZmY6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzk1XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1tb3JlLWhvcml6b250YWw6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzk2XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1tb3JlLXZlcnRpY2FsOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM5N1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtbmF2aWdhdGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzk4XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1ub3RpZmljYXRpb25zOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM5QlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtbm90aWZpY2F0aW9ucy1ub25lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM5OVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtbm90aWZpY2F0aW9ucy1vZmY6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzlBXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1vcGVuOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM5Q1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtb3B0aW9uczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzOURcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXBlb3BsZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzOUVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXBlcnNvbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQTBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXBlcnNvbi1hZGQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzlGXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1waG9uZS1sYW5kc2NhcGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0ExXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1waG9uZS1wb3J0cmFpdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQTJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXBpbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQTNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXBsYW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNBNFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtcGxheXN0b3JlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJGMFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtcHJpbnQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0E1XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1yYWRpby1idXR0b24tb2ZmOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNBNlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtcmFkaW8tYnV0dG9uLW9uOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNBN1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtcmVmcmVzaDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQThcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXJlbW92ZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyRjRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXJlbW92ZS1jaXJjbGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0E5XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1yZXN0YXVyYW50OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNBQVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtc2FkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNBQlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtc2VhcmNoOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJGNVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtc2VuZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyRjZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXNldHRpbmdzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJGN1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtc2hhcmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkY4XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1zaGFyZS1hbHQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0FDXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1zdGFyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJGQ1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtc3Rhci1oYWxmOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNBRFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtc3Rhci1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNBRVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtc3RvcHdhdGNoOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJGRFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtc3Vid2F5OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNBRlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtc3Vubnk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0IwXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1zeW5jOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNCMVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtdGV4dHNtczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQjJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXRpbWU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0IzXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC10cmFpbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQjRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXVubG9jazpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQjVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXVwbG9hZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQjZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXZvbHVtZS1kb3duOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNCN1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtdm9sdW1lLW11dGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0I4XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC12b2x1bWUtb2ZmOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNCOVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtdm9sdW1lLXVwOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNCQVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtd2FsazpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQkJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXdhcm5pbmc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0JDXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC13YXRjaDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQkRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXdpZmk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzA1XFxcIjsgfVxcclxcblxcclxcbi5pb24tYXBlcnR1cmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzEzXFxcIjsgfVxcclxcblxcclxcbi5pb24tYXJjaGl2ZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMDJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hcnJvdy1kb3duLWE6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTAzXFxcIjsgfVxcclxcblxcclxcbi5pb24tYXJyb3ctZG93bi1iOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEwNFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFycm93LWRvd24tYzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMDVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hcnJvdy1leHBhbmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjVFXFxcIjsgfVxcclxcblxcclxcbi5pb24tYXJyb3ctZ3JhcGgtZG93bi1sZWZ0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI1RlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFycm93LWdyYXBoLWRvd24tcmlnaHQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjYwXFxcIjsgfVxcclxcblxcclxcbi5pb24tYXJyb3ctZ3JhcGgtdXAtbGVmdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNjFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hcnJvdy1ncmFwaC11cC1yaWdodDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNjJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hcnJvdy1sZWZ0LWE6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTA2XFxcIjsgfVxcclxcblxcclxcbi5pb24tYXJyb3ctbGVmdC1iOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEwN1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFycm93LWxlZnQtYzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMDhcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hcnJvdy1tb3ZlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI2M1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFycm93LXJlc2l6ZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNjRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hcnJvdy1yZXR1cm4tbGVmdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNjVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hcnJvdy1yZXR1cm4tcmlnaHQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjY2XFxcIjsgfVxcclxcblxcclxcbi5pb24tYXJyb3ctcmlnaHQtYTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMDlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hcnJvdy1yaWdodC1iOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEwQVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFycm93LXJpZ2h0LWM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTBCXFxcIjsgfVxcclxcblxcclxcbi5pb24tYXJyb3ctc2hyaW5rOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI2N1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFycm93LXN3YXA6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjY4XFxcIjsgfVxcclxcblxcclxcbi5pb24tYXJyb3ctdXAtYTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMENcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hcnJvdy11cC1iOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEwRFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFycm93LXVwLWM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTBFXFxcIjsgfVxcclxcblxcclxcbi5pb24tYXN0ZXJpc2s6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzE0XFxcIjsgfVxcclxcblxcclxcbi5pb24tYXQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTBGXFxcIjsgfVxcclxcblxcclxcbi5pb24tYmFja3NwYWNlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNCRlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWJhY2tzcGFjZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNCRVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWJhZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMTBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1iYXR0ZXJ5LWNoYXJnaW5nOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjExMVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWJhdHRlcnktZW1wdHk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTEyXFxcIjsgfVxcclxcblxcclxcbi5pb24tYmF0dGVyeS1mdWxsOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjExM1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWJhdHRlcnktaGFsZjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMTRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1iYXR0ZXJ5LWxvdzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMTVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1iZWFrZXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjY5XFxcIjsgfVxcclxcblxcclxcbi5pb24tYmVlcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNkFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1ibHVldG9vdGg6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTE2XFxcIjsgfVxcclxcblxcclxcbi5pb24tYm9uZmlyZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzMTVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1ib29rbWFyazpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNkJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1ib3d0aWU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0MwXFxcIjsgfVxcclxcblxcclxcbi5pb24tYnJpZWZjYXNlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI2Q1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWJ1ZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQkVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jYWxjdWxhdG9yOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI2RFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNhbGVuZGFyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjExN1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNhbWVyYTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMThcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jYXJkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjExOVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNhc2g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzE2XFxcIjsgfVxcclxcblxcclxcbi5pb24tY2hhdGJveDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMUJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jaGF0Ym94LXdvcmtpbmc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTFBXFxcIjsgfVxcclxcblxcclxcbi5pb24tY2hhdGJveGVzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjExQ1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNoYXRidWJibGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTFFXFxcIjsgfVxcclxcblxcclxcbi5pb24tY2hhdGJ1YmJsZS13b3JraW5nOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjExRFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNoYXRidWJibGVzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjExRlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNoZWNrbWFyazpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMjJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jaGVja21hcmstY2lyY2xlZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMjBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jaGVja21hcmstcm91bmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTIxXFxcIjsgfVxcclxcblxcclxcbi5pb24tY2hldnJvbi1kb3duOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEyM1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNoZXZyb24tbGVmdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMjRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jaGV2cm9uLXJpZ2h0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEyNVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNoZXZyb24tdXA6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTI2XFxcIjsgfVxcclxcblxcclxcbi5pb24tY2xpcGJvYXJkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEyN1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNsb2NrOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI2RVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNsb3NlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEyQVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNsb3NlLWNpcmNsZWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTI4XFxcIjsgfVxcclxcblxcclxcbi5pb24tY2xvc2Utcm91bmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTI5XFxcIjsgfVxcclxcblxcclxcbi5pb24tY2xvc2VkLWNhcHRpb25pbmc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzE3XFxcIjsgfVxcclxcblxcclxcbi5pb24tY2xvdWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTJCXFxcIjsgfVxcclxcblxcclxcbi5pb24tY29kZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNzFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jb2RlLWRvd25sb2FkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI2RlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNvZGUtd29ya2luZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNzBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jb2ZmZWU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjcyXFxcIjsgfVxcclxcblxcclxcbi5pb24tY29tcGFzczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNzNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jb21wb3NlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEyQ1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNvbm5lY3Rpb24tYmFyczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNzRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jb250cmFzdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNzVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jcm9wOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNDMVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWN1YmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzE4XFxcIjsgfVxcclxcblxcclxcbi5pb24tZGlzYzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMkRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1kb2N1bWVudDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMkZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1kb2N1bWVudC10ZXh0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEyRVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWRyYWc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTMwXFxcIjsgfVxcclxcblxcclxcbi5pb24tZWFydGg6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjc2XFxcIjsgfVxcclxcblxcclxcbi5pb24tZWFzZWw6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0MyXFxcIjsgfVxcclxcblxcclxcbi5pb24tZWRpdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQkZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1lZ2c6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjc3XFxcIjsgfVxcclxcblxcclxcbi5pb24tZWplY3Q6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTMxXFxcIjsgfVxcclxcblxcclxcbi5pb24tZW1haWw6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTMyXFxcIjsgfVxcclxcblxcclxcbi5pb24tZW1haWwtdW5yZWFkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNDM1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWVybGVubWV5ZXItZmxhc2s6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0M1XFxcIjsgfVxcclxcblxcclxcbi5pb24tZXJsZW5tZXllci1mbGFzay1idWJibGVzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNDNFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWV5ZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMzNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1leWUtZGlzYWJsZWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzA2XFxcIjsgfVxcclxcblxcclxcbi5pb24tZmVtYWxlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI3OFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWZpbGluZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMzRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1maWxtLW1hcmtlcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMzVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1maXJlYmFsbDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzMTlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1mbGFnOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI3OVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWZsYW1lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjMxQVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWZsYXNoOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEzN1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWZsYXNoLW9mZjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMzZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1mb2xkZXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTM5XFxcIjsgfVxcclxcblxcclxcbi5pb24tZm9yazpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyN0FcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1mb3JrLXJlcG86YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkMwXFxcIjsgfVxcclxcblxcclxcbi5pb24tZm9yd2FyZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxM0FcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1mdW5uZWw6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzFCXFxcIjsgfVxcclxcblxcclxcbi5pb24tZ2Vhci1hOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEzRFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWdlYXItYjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxM0VcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1ncmlkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEzRlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWhhbW1lcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyN0JcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1oYXBweTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzMUNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1oYXBweS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNDNlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWhlYWRwaG9uZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxNDBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1oZWFydDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxNDFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1oZWFydC1icm9rZW46YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzFEXFxcIjsgfVxcclxcblxcclxcbi5pb24taGVscDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxNDNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1oZWxwLWJ1b3k6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjdDXFxcIjsgfVxcclxcblxcclxcbi5pb24taGVscC1jaXJjbGVkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjE0MlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWhvbWU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTQ0XFxcIjsgfVxcclxcblxcclxcbi5pb24taWNlY3JlYW06YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjdEXFxcIjsgfVxcclxcblxcclxcbi5pb24taW1hZ2U6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTQ3XFxcIjsgfVxcclxcblxcclxcbi5pb24taW1hZ2VzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjE0OFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWluZm9ybWF0aW9uOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjE0QVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWluZm9ybWF0aW9uLWNpcmNsZWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTQ5XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9uaWM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTRCXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWFsYXJtOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNDOFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1hbGFybS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNDN1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1hbGJ1bXM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0NBXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWFsYnVtcy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNDOVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1hbWVyaWNhbmZvb3RiYWxsOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNDQ1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1hbWVyaWNhbmZvb3RiYWxsLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0NCXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWFuYWx5dGljczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQ0VcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYW5hbHl0aWNzLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0NEXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWFycm93LWJhY2s6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0NGXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWFycm93LWRvd246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0QwXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWFycm93LWZvcndhcmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0QxXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWFycm93LWxlZnQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0QyXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWFycm93LXJpZ2h0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNEM1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1hcnJvdy10aGluLWRvd246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0Q0XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWFycm93LXRoaW4tbGVmdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRDVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYXJyb3ctdGhpbi1yaWdodDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRDZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYXJyb3ctdGhpbi11cDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRDdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYXJyb3ctdXA6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0Q4XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWF0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNEQVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1hdC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNEOVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1iYXJjb2RlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNEQ1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1iYXJjb2RlLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0RCXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWJhc2ViYWxsOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNERVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1iYXNlYmFsbC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNERFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1iYXNrZXRiYWxsOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNFMFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1iYXNrZXRiYWxsLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0RGXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWJlbGw6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0UyXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWJlbGwtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRTFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYm9keTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRTRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYm9keS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNFM1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1ib2x0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNFNlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1ib2x0LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0U1XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWJvb2s6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0U4XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWJvb2stb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRTdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYm9va21hcmtzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNFQVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1ib29rbWFya3Mtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRTlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYm94OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNFQ1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1ib3gtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRUJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYnJpZWZjYXNlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNFRVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1icmllZmNhc2Utb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRURcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYnJvd3NlcnM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0YwXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWJyb3dzZXJzLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0VGXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNhbGN1bGF0b3I6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0YyXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNhbGN1bGF0b3Itb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRjFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2FsZW5kYXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0Y0XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNhbGVuZGFyLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0YzXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNhbWVyYTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRjZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2FtZXJhLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0Y1XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNhcnQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0Y4XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNhcnQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRjdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2hhdGJveGVzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNGQVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jaGF0Ym94ZXMtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRjlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2hhdGJ1YmJsZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRkNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2hhdGJ1YmJsZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNGQlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jaGVja21hcms6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0ZGXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNoZWNrbWFyay1lbXB0eTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRkRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2hlY2ttYXJrLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0ZFXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNpcmNsZS1maWxsZWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDAwXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNpcmNsZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQwMVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jbG9jazpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MDNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2xvY2stb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MDJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2xvc2U6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDA2XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNsb3NlLWVtcHR5OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQwNFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jbG9zZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQwNVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jbG91ZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MENcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2xvdWQtZG93bmxvYWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDA4XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNsb3VkLWRvd25sb2FkLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDA3XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNsb3VkLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDA5XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNsb3VkLXVwbG9hZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MEJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2xvdWQtdXBsb2FkLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDBBXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNsb3VkeTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MTBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2xvdWR5LW5pZ2h0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQwRVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jbG91ZHktbmlnaHQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MERcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2xvdWR5LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDBGXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNvZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MTJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY29nLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDExXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNvbG9yLWZpbHRlcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MTRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY29sb3ItZmlsdGVyLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDEzXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNvbG9yLXdhbmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDE2XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNvbG9yLXdhbmQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MTVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY29tcG9zZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MThcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY29tcG9zZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQxN1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jb250YWN0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQxQVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jb250YWN0LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDE5XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNvcHk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDFDXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNvcHktb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MUJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY3JvcDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MUVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY3JvcC1zdHJvbmc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDFEXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWRvd25sb2FkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQyMFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1kb3dubG9hZC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQxRlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1kcmFnOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQyMVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1lbWFpbDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MjNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZW1haWwtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MjJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZXllOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQyNVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1leWUtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MjRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZmFzdGZvcndhcmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDI3XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWZhc3Rmb3J3YXJkLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDI2XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWZpbGluZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MjlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZmlsaW5nLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDI4XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWZpbG06YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDJCXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWZpbG0tb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MkFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZmxhZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MkRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZmxhZy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQyQ1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1mbGFtZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MkZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZmxhbWUtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MkVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZmxhc2s6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDMxXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWZsYXNrLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDMwXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWZsb3dlcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MzNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZmxvd2VyLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDMyXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWZvbGRlcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MzVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZm9sZGVyLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDM0XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWZvb3RiYWxsOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQzN1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1mb290YmFsbC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQzNlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1nYW1lLWNvbnRyb2xsZXItYTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MzlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZ2FtZS1jb250cm9sbGVyLWEtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MzhcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZ2FtZS1jb250cm9sbGVyLWI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDNCXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWdhbWUtY29udHJvbGxlci1iLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDNBXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWdlYXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDNEXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWdlYXItb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0M0NcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZ2xhc3NlczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0M0ZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZ2xhc3Nlcy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQzRVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1ncmlkLXZpZXc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDQxXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWdyaWQtdmlldy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ0MFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1oZWFydDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NDNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtaGVhcnQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NDJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtaGVscDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NDZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtaGVscC1lbXB0eTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NDRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtaGVscC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ0NVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1ob21lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ0OFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1ob21lLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDQ3XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWluZmluaXRlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ0QVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1pbmZpbml0ZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ0OVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1pbmZvcm1hdGlvbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NERcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtaW5mb3JtYXRpb24tZW1wdHk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDRCXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWluZm9ybWF0aW9uLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDRDXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWlvbmljLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDRFXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWtleXBhZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NTBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3Mta2V5cGFkLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDRGXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWxpZ2h0YnVsYjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NTJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbGlnaHRidWxiLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDUxXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWxpc3Q6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDU0XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWxpc3Qtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NTNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbG9jYXRpb246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDU2XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWxvY2F0aW9uLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDU1XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWxvY2tlZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NThcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbG9ja2VkLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDU3XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWxvb3A6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDVBXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWxvb3Atc3Ryb25nOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ1OVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1tZWRpY2FsOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ1Q1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1tZWRpY2FsLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDVCXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLW1lZGtpdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NUVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbWVka2l0LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDVEXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLW1pYzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NjFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbWljLW9mZjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NUZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbWljLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDYwXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLW1pbnVzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ2NFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1taW51cy1lbXB0eTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NjJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbWludXMtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NjNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbW9uaXRvcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NjZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbW9uaXRvci1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ2NVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1tb29uOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ2OFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1tb29uLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDY3XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLW1vcmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDZBXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLW1vcmUtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NjlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbXVzaWNhbC1ub3RlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ2QlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1tdXNpY2FsLW5vdGVzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ2Q1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1uYXZpZ2F0ZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NkVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbmF2aWdhdGUtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NkRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbnV0cml0aW9uOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ3MFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1udXRyaXRpb24tb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NkZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcGFwZXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDcyXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXBhcGVyLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDcxXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXBhcGVycGxhbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDc0XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXBhcGVycGxhbmUtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NzNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcGFydGx5c3Vubnk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDc2XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXBhcnRseXN1bm55LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDc1XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXBhdXNlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ3OFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1wYXVzZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ3N1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1wYXc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDdBXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXBhdy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ3OVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1wZW9wbGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDdDXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXBlb3BsZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ3QlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1wZXJzb246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDdFXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXBlcnNvbi1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ3RFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1wZXJzb25hZGQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDgwXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXBlcnNvbmFkZC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ3RlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1waG90b3M6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDgyXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXBob3Rvcy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ4MVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1waWU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDg0XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXBpZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ4M1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1waW50OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ4NlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1waW50LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDg1XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXBsYXk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDg4XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXBsYXktb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0ODdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcGx1czpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0OEJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcGx1cy1lbXB0eTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0ODlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcGx1cy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ4QVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1wcmljZXRhZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0OERcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcHJpY2V0YWctb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0OENcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcHJpY2V0YWdzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ4RlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1wcmljZXRhZ3Mtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0OEVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcHJpbnRlcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0OTFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcHJpbnRlci1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ5MFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1wdWxzZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0OTNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcHVsc2Utc3Ryb25nOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ5MlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1yYWlueTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0OTVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcmFpbnktb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0OTRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcmVjb3JkaW5nOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ5N1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1yZWNvcmRpbmctb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0OTZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcmVkbzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0OTlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcmVkby1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ5OFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1yZWZyZXNoOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ5Q1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1yZWZyZXNoLWVtcHR5OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ5QVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1yZWZyZXNoLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDlCXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXJlbG9hZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0OURcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcmV2ZXJzZS1jYW1lcmE6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDlGXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXJldmVyc2UtY2FtZXJhLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDlFXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXJld2luZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QTFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcmV3aW5kLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEEwXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXJvc2U6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEEzXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXJvc2Utb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QTJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3Mtc2VhcmNoOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRBNVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1zZWFyY2gtc3Ryb25nOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRBNFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1zZXR0aW5nczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QTdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3Mtc2V0dGluZ3Mtc3Ryb25nOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRBNlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1zaHVmZmxlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRBOVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1zaHVmZmxlLXN0cm9uZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QThcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3Mtc2tpcGJhY2t3YXJkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRBQlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1za2lwYmFja3dhcmQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QUFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3Mtc2tpcGZvcndhcmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEFEXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXNraXBmb3J3YXJkLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEFDXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXNub3d5OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRBRVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1zcGVlZG9tZXRlcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QjBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3Mtc3BlZWRvbWV0ZXItb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QUZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3Mtc3RhcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QjNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3Mtc3Rhci1oYWxmOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRCMVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1zdGFyLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEIyXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXN0b3B3YXRjaDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QjVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3Mtc3RvcHdhdGNoLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEI0XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXN1bm55OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRCN1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1zdW5ueS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRCNlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy10ZWxlcGhvbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEI5XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXRlbGVwaG9uZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRCOFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy10ZW5uaXNiYWxsOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRCQlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy10ZW5uaXNiYWxsLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEJBXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXRodW5kZXJzdG9ybTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QkRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtdGh1bmRlcnN0b3JtLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEJDXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXRpbWU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEJGXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXRpbWUtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QkVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtdGltZXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEMxXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXRpbWVyLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEMwXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXRvZ2dsZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QzNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtdG9nZ2xlLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEMyXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXRyYXNoOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRDNVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy10cmFzaC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRDNFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy11bmRvOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRDN1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy11bmRvLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEM2XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXVubG9ja2VkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRDOVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy11bmxvY2tlZC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRDOFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy11cGxvYWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNENCXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXVwbG9hZC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRDQVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy12aWRlb2NhbTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0Q0RcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtdmlkZW9jYW0tb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0Q0NcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3Mtdm9sdW1lLWhpZ2g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNENFXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXZvbHVtZS1sb3c6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNENGXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXdpbmVnbGFzczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RDFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3Mtd2luZWdsYXNzLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEQwXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXdvcmxkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjREM1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy13b3JsZC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjREMlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlwYWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMUY5XFxcIjsgfVxcclxcblxcclxcbi5pb24taXBob25lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjFGQVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlwb2Q6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMUZCXFxcIjsgfVxcclxcblxcclxcbi5pb24tamV0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI5NVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWtleTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyOTZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1rbmlmZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyOTdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1sYXB0b3A6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMUZDXFxcIjsgfVxcclxcblxcclxcbi5pb24tbGVhZjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxRkRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1sZXZlbHM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjk4XFxcIjsgfVxcclxcblxcclxcbi5pb24tbGlnaHRidWxiOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI5OVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWxpbms6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMUZFXFxcIjsgfVxcclxcblxcclxcbi5pb24tbG9hZC1hOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI5QVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWxvYWQtYjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyOUJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1sb2FkLWM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjlDXFxcIjsgfVxcclxcblxcclxcbi5pb24tbG9hZC1kOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI5RFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWxvY2F0aW9uOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjFGRlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWxvY2stY29tYmluYXRpb246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEQ0XFxcIjsgfVxcclxcblxcclxcbi5pb24tbG9ja2VkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIwMFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWxvZy1pbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyOUVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1sb2ctb3V0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI5RlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWxvb3A6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjAxXFxcIjsgfVxcclxcblxcclxcbi5pb24tbWFnbmV0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJBMFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLW1hbGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkExXFxcIjsgfVxcclxcblxcclxcbi5pb24tbWFuOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIwMlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLW1hcDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMDNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1tZWRraXQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkEyXFxcIjsgfVxcclxcblxcclxcbi5pb24tbWVyZ2U6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzNGXFxcIjsgfVxcclxcblxcclxcbi5pb24tbWljLWE6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjA0XFxcIjsgfVxcclxcblxcclxcbi5pb24tbWljLWI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjA1XFxcIjsgfVxcclxcblxcclxcbi5pb24tbWljLWM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjA2XFxcIjsgfVxcclxcblxcclxcbi5pb24tbWludXM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjA5XFxcIjsgfVxcclxcblxcclxcbi5pb24tbWludXMtY2lyY2xlZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMDdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1taW51cy1yb3VuZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMDhcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1tb2RlbC1zOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJDMVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLW1vbml0b3I6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjBBXFxcIjsgfVxcclxcblxcclxcbi5pb24tbW9yZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMEJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1tb3VzZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNDBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1tdXNpYy1ub3RlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIwQ1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLW5hdmljb246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjBFXFxcIjsgfVxcclxcblxcclxcbi5pb24tbmF2aWNvbi1yb3VuZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMERcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1uYXZpZ2F0ZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQTNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1uZXR3b3JrOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM0MVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLW5vLXNtb2tpbmc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkMyXFxcIjsgfVxcclxcblxcclxcbi5pb24tbnVjbGVhcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQTRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1vdXRsZXQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzQyXFxcIjsgfVxcclxcblxcclxcbi5pb24tcGFpbnRicnVzaDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RDVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1wYWludGJ1Y2tldDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RDZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1wYXBlci1haXJwbGFuZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQzNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1wYXBlcmNsaXA6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjBGXFxcIjsgfVxcclxcblxcclxcbi5pb24tcGF1c2U6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjEwXFxcIjsgfVxcclxcblxcclxcbi5pb24tcGVyc29uOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIxM1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXBlcnNvbi1hZGQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjExXFxcIjsgfVxcclxcblxcclxcbi5pb24tcGVyc29uLXN0YWxrZXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjEyXFxcIjsgfVxcclxcblxcclxcbi5pb24tcGllLWdyYXBoOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJBNVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXBpbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQTZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1waW5wb2ludDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQTdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1waXp6YTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQThcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1wbGFuZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMTRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1wbGFuZXQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzQzXFxcIjsgfVxcclxcblxcclxcbi5pb24tcGxheTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMTVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1wbGF5c3RhdGlvbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzMEFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1wbHVzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIxOFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXBsdXMtY2lyY2xlZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMTZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1wbHVzLXJvdW5kOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIxN1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXBvZGl1bTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNDRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1wb3VuZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMTlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1wb3dlcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQTlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1wcmljZXRhZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQUFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1wcmljZXRhZ3M6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkFCXFxcIjsgfVxcclxcblxcclxcbi5pb24tcHJpbnRlcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMUFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1wdWxsLXJlcXVlc3Q6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzQ1XFxcIjsgfVxcclxcblxcclxcbi5pb24tcXItc2Nhbm5lcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNDZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1xdW90ZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNDdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1yYWRpby13YXZlczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQUNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1yZWNvcmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjFCXFxcIjsgfVxcclxcblxcclxcbi5pb24tcmVmcmVzaDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMUNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1yZXBseTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMUVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1yZXBseS1hbGw6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjFEXFxcIjsgfVxcclxcblxcclxcbi5pb24tcmliYm9uLWE6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzQ4XFxcIjsgfVxcclxcblxcclxcbi5pb24tcmliYm9uLWI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzQ5XFxcIjsgfVxcclxcblxcclxcbi5pb24tc2FkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM0QVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNhZC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjREN1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNjaXNzb3JzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM0QlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNlYXJjaDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMUZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zZXR0aW5nczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQURcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zaGFyZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMjBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zaHVmZmxlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIyMVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNraXAtYmFja3dhcmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjIyXFxcIjsgfVxcclxcblxcclxcbi5pb24tc2tpcC1mb3J3YXJkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIyM1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1hbmRyb2lkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIyNVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1hbmRyb2lkLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjI0XFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWFuZ3VsYXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEQ5XFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWFuZ3VsYXItb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RDhcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtYXBwbGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjI3XFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWFwcGxlLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjI2XFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWJpdGNvaW46YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkFGXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWJpdGNvaW4tb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQUVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtYnVmZmVyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIyOVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1idWZmZXItb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMjhcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtY2hyb21lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjREQlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1jaHJvbWUtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0REFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtY29kZXBlbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RERcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtY29kZXBlbi1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjREQ1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1jc3MzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRERlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1jc3MzLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNERFXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWRlc2lnbmVybmV3czpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMkJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtZGVzaWduZXJuZXdzLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjJBXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWRyaWJiYmxlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIyRFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1kcmliYmJsZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIyQ1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1kcm9wYm94OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIyRlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1kcm9wYm94LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjJFXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWV1cm86YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEUxXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWV1cm8tb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RTBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtZmFjZWJvb2s6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjMxXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWZhY2Vib29rLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjMwXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWZvdXJzcXVhcmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzREXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWZvdXJzcXVhcmUtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNENcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtZnJlZWJzZC1kZXZpbDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQzRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtZ2l0aHViOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIzM1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1naXRodWItb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMzJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtZ29vZ2xlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM0RlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1nb29nbGUtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNEVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtZ29vZ2xlcGx1czpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMzVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtZ29vZ2xlcGx1cy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIzNFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1oYWNrZXJuZXdzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIzN1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1oYWNrZXJuZXdzLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjM2XFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWh0bWw1OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRFM1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1odG1sNS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRFMlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1pbnN0YWdyYW06YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzUxXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWluc3RhZ3JhbS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM1MFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1qYXZhc2NyaXB0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRFNVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1qYXZhc2NyaXB0LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEU0XFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWxpbmtlZGluOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIzOVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1saW5rZWRpbi1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIzOFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1tYXJrZG93bjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RTZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtbm9kZWpzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRFN1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1vY3RvY2F0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRFOFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1waW50ZXJlc3Q6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkIxXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXBpbnRlcmVzdC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJCMFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1weXRob246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEU5XFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXJlZGRpdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyM0JcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtcmVkZGl0LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjNBXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXJzczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyM0RcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtcnNzLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjNDXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXNhc3M6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEVBXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXNreXBlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIzRlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1za3lwZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIzRVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1zbmFwY2hhdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RUNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtc25hcGNoYXQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RUJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtdHVtYmxyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI0MVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC10dW1ibHItb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNDBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtdHV4OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJDNVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC10d2l0Y2g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEVFXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXR3aXRjaC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRFRFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC10d2l0dGVyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI0M1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC10d2l0dGVyLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjQyXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXVzZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNTNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtdXNkLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzUyXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXZpbWVvOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI0NVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC12aW1lby1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI0NFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC13aGF0c2FwcDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RjBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtd2hhdHNhcHAtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RUZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtd2luZG93czpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNDdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtd2luZG93cy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI0NlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC13b3JkcHJlc3M6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjQ5XFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXdvcmRwcmVzcy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI0OFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC15YWhvbzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNEJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwteWFob28tb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNEFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwteWVuOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRGMlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC15ZW4tb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RjFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwteW91dHViZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNERcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwteW91dHViZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI0Q1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvdXAtY2FuOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRGNFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvdXAtY2FuLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEYzXFxcIjsgfVxcclxcblxcclxcbi5pb24tc3BlYWtlcnBob25lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJCMlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNwZWVkb21ldGVyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJCM1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNwb29uOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJCNFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXN0YXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjRFXFxcIjsgfVxcclxcblxcclxcbi5pb24tc3RhdHMtYmFyczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQjVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zdGVhbTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzMEJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zdG9wOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI0RlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXRoZXJtb21ldGVyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJCNlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXRodW1ic2Rvd246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjUwXFxcIjsgfVxcclxcblxcclxcbi5pb24tdGh1bWJzdXA6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjUxXFxcIjsgfVxcclxcblxcclxcbi5pb24tdG9nZ2xlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM1NVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXRvZ2dsZS1maWxsZWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzU0XFxcIjsgfVxcclxcblxcclxcbi5pb24tdHJhbnNnZW5kZXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEY1XFxcIjsgfVxcclxcblxcclxcbi5pb24tdHJhc2gtYTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNTJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi10cmFzaC1iOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI1M1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXRyb3BoeTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNTZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi10c2hpcnQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEY3XFxcIjsgfVxcclxcblxcclxcbi5pb24tdHNoaXJ0LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEY2XFxcIjsgfVxcclxcblxcclxcbi5pb24tdW1icmVsbGE6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkI3XFxcIjsgfVxcclxcblxcclxcbi5pb24tdW5pdmVyc2l0eTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNTdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi11bmxvY2tlZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNTRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi11cGxvYWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjU1XFxcIjsgfVxcclxcblxcclxcbi5pb24tdXNiOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJCOFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXZpZGVvY2FtZXJhOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI1NlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXZvbHVtZS1oaWdoOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI1N1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXZvbHVtZS1sb3c6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjU4XFxcIjsgfVxcclxcblxcclxcbi5pb24tdm9sdW1lLW1lZGl1bTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNTlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi12b2x1bWUtbXV0ZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNUFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi13YW5kOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM1OFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXdhdGVyZHJvcDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNUJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi13aWZpOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI1Q1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXdpbmVnbGFzczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQjlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi13b21hbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNURcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi13cmVuY2g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkJBXFxcIjsgfVxcclxcblxcclxcbi5pb24teGJveDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzMENcXFwiOyB9XFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2ZvbnRzL2lvbmljb25zLmNzcycgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiaW1wb3J0IFZ1ZSBmcm9tICduYXRpdmVzY3JpcHQtdnVlJ1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSdcclxuaW1wb3J0IEhvbWUgZnJvbSAnLi92aWV3cy9Ib21lLnZ1ZSdcclxuaW1wb3J0IFZ1ZURldnRvb2xzIGZyb20gJ25hdGl2ZXNjcmlwdC12dWUtZGV2dG9vbHMnXHJcbmltcG9ydCBSYWRMaXN0VmlldyBmcm9tICduYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvdnVlJ1xyXG5cclxuVnVlLnVzZShSYWRMaXN0VmlldylcclxuVnVlLnJlZ2lzdGVyRWxlbWVudCgnQmFyY29kZVNjYW5uZXInLCAoKSA9PiByZXF1aXJlKCduYXRpdmVzY3JpcHQtYmFyY29kZXNjYW5uZXInKS5CYXJjb2RlU2Nhbm5lclZpZXcpXHJcblxyXG4vL2ZvbnRpY29uIHBsdWdpblxyXG5pbXBvcnQgeyBUTlNGb250SWNvbiwgZm9udGljb24gfSBmcm9tICduYXRpdmVzY3JpcHQtZm9udGljb24nO1xyXG5UTlNGb250SWNvbi5kZWJ1ZyA9IGZhbHNlO1xyXG5UTlNGb250SWNvbi5wYXRocyA9IHtcclxuICAnZmEnOiAnLi9mb250cy9mb250LWF3ZXNvbWUuY3NzJyxcclxuICAnaW9uJzogJy4vZm9udHMvaW9uaWNvbnMuY3NzJyxcclxufTtcclxuVE5TRm9udEljb24ubG9hZENzcygpO1xyXG5WdWUuZmlsdGVyKCdmb250aWNvbicsIGZvbnRpY29uKTtcclxuXHJcblxyXG5pZiAoVE5TX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgVnVlLnVzZShWdWVEZXZ0b29scylcclxufVxyXG4vLyBQcmludHMgVnVlIGxvZ3Mgd2hlbiAtLWVudi5wcm9kdWN0aW9uIGlzICpOT1QqIHNldCB3aGlsZSBidWlsZGluZ1xyXG5WdWUuY29uZmlnLnNpbGVudCA9IChUTlNfRU5WID09PSAncHJvZHVjdGlvbicpXHJcblxyXG5cclxubmV3IFZ1ZSh7XHJcbiAgc3RvcmUsXHJcbiAgcmVuZGVyOiBoID0+IGgoJ2ZyYW1lJywgW2goSG9tZSldKVxyXG59KS4kc3RhcnQoKVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyB7XHJcblxyXG4gICAgLy8gY29uc3RydWN0b3Ioe2FuaW1hbF9pZCwgYW5pbWFsX25hbWUsIGFuaW1hbF90eXBlLCBzZXgsIGFnZSwgRE9CLCBwcmltYXJ5X2NvbG9yLCBzZWNvbmRhcnlfY29sb3IsIGJyZWVkX2dyb3VwLCBwcmltYXJ5X2JyZWVkLCBzZWNvbmRhcnlfYnJlZWQsIGFuaW1hbF9zdGF0LCBzdGFtcCAgfSkge1xyXG4gICAgLy8gICAgIHRoaXMuYW5pbWFsX2lkID0gYW5pbWFsX2lkXHJcbiAgICAvLyAgICAgdGhpcy5hbmltYWxfbmFtZSA9IGFuaW1hbF9uYW1lXHJcbiAgICAvLyAgICAgdGhpcy5hbmltYWxfdHlwZSA9IGFuaW1hbF90eXBlXHJcbiAgICAvLyAgICAgdGhpcy5zZXggPSBzZXhcclxuICAgIC8vICAgICB0aGlzLmFnZSA9IGFnZVxyXG4gICAgLy8gICAgIHRoaXMuRE9CID0gbnVET0JsbFxyXG4gICAgLy8gICAgIHRoaXMucHJpbWFyeV9jb2xvciA9IHByaW1hcnlfY29sb3JcclxuICAgIC8vICAgICB0aGlzLnNlY29uZGFyeV9jb2xvciA9IHNlY29uZGFyeV9jb2xvclxyXG4gICAgLy8gICAgIHRoaXMuYnJlZWRfZ3JvdXAgPSBicmVlZF9ncm91cFxyXG4gICAgLy8gICAgIHRoaXMucHJpbWFyeV9icmVlZCA9IHByaW1hcnlfYnJlZWRcclxuICAgIC8vICAgICB0aGlzLnNlY29uZGFyeV9icmVlZCA9IHNlY29uZGFyeV9icmVlZFxyXG4gICAgLy8gICAgIHRoaXMuYW5pbWFsX3N0YXQgPSBhbmltYWxfc3RhdFxyXG4gICAgLy8gICAgIHRoaXMuc3RhbXAgPSBzdGFtcFxyXG4gICAgLy8gfVxyXG5cclxuXHJcbiAgICAvLyBjYXRlZ29yeTogXCJEb2dcIixcclxuICAgIC8vIGNhdGVnb3J5VGFnOiBcIiMyN0FFNjBcIixcclxuICAgIC8vIGJyZWVkX2dyb3VwOiBcIkhvdW5kXCIsXHJcbiAgICAvLyBwcmltYXJ5X2JyZWVkOiBcIkJlYWdsZVwiLFxyXG4gICAgLy8gYWdlOiBcIjEwXCIsXHJcbiAgICAvLyBnZW5kZXI6IFwiTVwiLFxyXG4gICAgLy8gYW5pbWFsX3NpemU6IFwiU21hbGxcIixcclxuICAgIC8vIHByaW1hcnlfY29sb3I6IFwiVGFuXCIsXHJcbiAgICAvLyBsb2NhdGlvbjogXCJEb3duZXlcIixcclxuICAgIC8vIGlzQXZhaWxhYmxlOiBmYWxzZSxcclxuICAgIC8vIGlzRmF2b3JpdGU6IHRydWUsXHJcbiAgICAvLyBjb21tZW50czogMTEsXHJcbiAgICAvLyByYXRpbmc6IFwiNC4wXCIsXHJcbiAgICAvLyBkZXNjcmlwdGlvbjogXCJhXCJcclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcclxuICBjb25zdHJ1Y3RvciAocXVlc3Rpb24pIHtcclxuICAgIHRoaXMuaWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTAwKVxyXG4gICAgdGhpcy5xdWVzdGlvbiA9IHF1ZXN0aW9uXHJcbiAgICB0aGlzLmFuc3dlciA9IG51bGxcclxuICAgIHRoaXMuY291bnQgPSAwXHJcbiAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xyXG5cclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICB0aGlzLmxvY2F0aW9uID0gJ3RlbXAnXHJcbiAgfVxyXG5cclxuICBzZXRMb2NhdGlvbiAocXJDb2RlKSB7XHJcbiAgICB0aGlzLmxvY2F0aW9uID0gcXJDb2RlXHJcbiAgfVxyXG5cclxuICBzZXRUaWNrZXRJbmZvICh7IHBob25lLCBuYW1lLCBxdWVyeSB9KSB7XHJcbiAgICB0aGlzLnBob25lID0gcGhvbmVcclxuICAgIHRoaXMubmFtZSA9IG5hbWVcclxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxyXG4gICAgdGhpcy50aW1lSW4gPSBuZXcgRGF0ZSgpXHJcbiAgfVxyXG5cclxufVxyXG4iLCJjb25zdCBodHRwTW9kdWxlID0gcmVxdWlyZSgndG5zLWNvcmUtbW9kdWxlcy9odHRwJylcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGdldEFuaW1hbHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIGh0dHBNb2R1bGUuZ2V0SlNPTihgaHR0cHM6Ly9hY3VhLXNlcnZlci5oZXJva3VhcHAuY29tL2FuaW1hbHNgKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IHsgZmFxcyB9IGZyb20gJ0AvZGIvZmFxcy5qc29uJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGdldEZhcXMgKCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgcmVzb2x2ZShmYXFzKVxyXG4gICAgICB9LCAxMClcclxuICAgIH0pXHJcbiAgfSxcclxuICBhZGRGYXEgKGVudHJ5KSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICByZXNvbHZlKGVudHJ5KVxyXG4gICAgICB9LCAxMClcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbiIsIi8vIGltcG9ydCB7IHRpY2tldHMgfSBmcm9tICdAL2RiL2ZhcXMuanNvbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAvLyBnZXRUaWNrZXRzICgpIHtcclxuICAvLyAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgLy8gICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gIC8vICAgICAgIHJlc29sdmUoeyBkYXRhOiB0aWNrZXRzIH0pXHJcbiAgLy8gICAgIH0sIDEwKVxyXG4gIC8vICAgfSlcclxuICAvLyB9LFxyXG4gIGFkZFRpY2tldCAoZW50cnkpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHJlc29sdmUoZW50cnkpXHJcbiAgICAgIH0sIDEwKVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIiwiY29uc3QgaHR0cE1vZHVsZSA9IHJlcXVpcmUoJ3Rucy1jb3JlLW1vZHVsZXMvaHR0cCcpXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgZ2V0RmFxcyAoKSB7XHJcbiAgICByZXR1cm4gaHR0cE1vZHVsZS5nZXRKU09OKCdodHRwczovL2FjdWEtc2VydmVyLmhlcm9rdWFwcC5jb20vZmFxcycpXHJcbiAgfSxcclxuICBhZGRGYXEgKGZhcSkge1xyXG4gICAgcmV0dXJuIGh0dHBNb2R1bGUucmVxdWVzdCh7XHJcbiAgICAgIHVybDogYGh0dHBzOi8vYWN1YS1zZXJ2ZXIuaGVyb2t1YXBwLmNvbS9mYXFzYCxcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgY29udGVudDogSlNPTi5zdHJpbmdpZnkoZmFxKVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIiwiY29uc3QgaHR0cE1vZHVsZSA9IHJlcXVpcmUoJ3Rucy1jb3JlLW1vZHVsZXMvaHR0cCcpXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgYWRkVGlja2V0ICh0aWNrZXQpIHtcclxuICAgIHJldHVybiBodHRwTW9kdWxlLnJlcXVlc3Qoe1xyXG4gICAgICB1cmw6IGBodHRwczovL2FjdWEtc2VydmVyLmhlcm9rdWFwcC5jb20vdGlja2V0c2AsXHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgIGNvbnRlbnQ6IEpTT04uc3RyaW5naWZ5KHRpY2tldClcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgY2hlY2tUaWNrZXQgKHRpY2tldElkKSB7XHJcbiAgICByZXR1cm4gaHR0cE1vZHVsZS5nZXRKU09OKGBodHRwczovL2FjdWEtc2VydmVyLmhlcm9rdWFwcC5jb20vdGlja2V0cy8ke3RpY2tldElkfWApXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBWdWUgZnJvbSAndnVlJ1xyXG5pbXBvcnQgVnVleCBmcm9tICd2dWV4J1xyXG5pbXBvcnQgQW5pbWFsIGZyb20gJ0AvbW9kZWxzL0FuaW1hbCdcclxuaW1wb3J0IFRpY2tldCBmcm9tICdAL21vZGVscy9UaWNrZXQnXHJcbmltcG9ydCBUaWNrZXRTZXJ2aWNlIGZyb20gJ0Avc2VydmljZXMvVGlja2V0U2VydmljZSdcclxuaW1wb3J0IEZhcVNlcnZpY2UgZnJvbSAnQC9zZXJ2aWNlcy9GYXFTZXJ2aWNlJ1xyXG4vLyBpbXBvcnQgVGlja2V0U2VydmljZSBmcm9tICdAL3NlcnZpY2VzL0Zha2VUaWNrZXRTZXJ2aWNlJ1xyXG4vLyBpbXBvcnQgRmFxU2VydmljZSBmcm9tICdAL3NlcnZpY2VzL0Zha2VGYXFTZXJ2aWNlJ1xyXG5cclxuVnVlLnVzZShWdWV4KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFZ1ZXguU3RvcmUoe1xyXG4gIHN0YXRlOiB7XHJcbiAgICBhbmltYWxzOiBbXSxcclxuICAgIHRpY2tldHM6IFtdLFxyXG4gICAgZmFxczogW10sXHJcbiAgICB1c2VyQW5pbWFsOiBuZXcgQW5pbWFsKCksXHJcbiAgICB1c2VyRmFxOiB7fSxcclxuICAgIGxvY2F0aW9uOiAnRG93bmV5JyxcclxuICAgIHVzZXJUaWNrZXQ6IG5ldyBUaWNrZXQoKSxcclxuICAgIGFwcHJvdmVkVGlja2V0OiB1bmRlZmluZWRcclxuICB9LFxyXG4gIC8vIGNoYW5nZSB0aGUgc3RhdGUgb2YgdGhlIGFwcCAobXVzdCBiZSBzeW5jaHJvbm91cylcclxuICBtdXRhdGlvbnM6IHtcclxuICAgIC8vIGFkb3B0aW9uXHJcbiAgICBzdG9yZUFuaW1hbChzdGF0ZSwgYW5pbWFsKSB7XHJcbiAgICAgIHN0YXRlLnVzZXJGYXEgPSBhbmltYWxcclxuICAgIH0sXHJcbiAgICBBRERfQU5JTUFMKHN0YXRlLCBhbmltYWwpIHtcclxuICAgICAgc3RhdGUuYW5pbWFscy5wdXNoKGFuaW1hbClcclxuICAgIH0sXHJcbiAgICBzdG9yZUZhcShzdGF0ZSwgZmFxKSB7XHJcbiAgICAgIHN0YXRlLnVzZXJGYXEgPSBmYXFcclxuICAgIH0sXHJcbiAgICBzZXRUaWNrZXRMb2NhdGlvbiAoc3RhdGUsIGxvY2F0aW9uKSB7XHJcbiAgICAgIHN0YXRlLmxvY2F0aW9uID0gbG9jYXRpb25cclxuICAgIH0sXHJcbiAgICBzZXRUaWNrZXRJbmZvIChzdGF0ZSwgdXNlcklucHV0KSB7XHJcbiAgICAgIHN0YXRlLnVzZXJUaWNrZXQuc2V0VGlja2V0SW5mbyh1c2VySW5wdXQpXHJcbiAgICB9LFxyXG4gICAgc3RvcmVUaWNrZXQgKHN0YXRlLCB0aWNrZXQpIHtcclxuICAgICAgc3RhdGUudXNlclRpY2tldCA9IHRpY2tldFxyXG4gICAgfSxcclxuICAgIFNFVF9USUNLRVQgKHN0YXRlLCB0aWNrZXQpIHtcclxuICAgICAgc3RhdGUuYXBwcm92ZWRUaWNrZXQgPSB0aWNrZXRcclxuICAgIH0sXHJcbiAgICBBRERfVElDS0VUIChzdGF0ZSwgdGlja2V0KSB7XHJcbiAgICAgIHN0YXRlLmFwcHJvdmVkVGlja2V0ID0gdGlja2V0XHJcbiAgICB9LFxyXG4gICAgU0VUX0ZBUVMgKHN0YXRlLCBmYXFzKSB7XHJcbiAgICAgIHN0YXRlLmZhcXMgPSBmYXFzXHJcbiAgICB9LFxyXG4gICAgQUREX0ZBUSAoc3RhdGUsIGZhcSkge1xyXG4gICAgICBzdGF0ZS5mYXFzLnB1c2goZmFxKVxyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gIH0sXHJcbiAgLy8gYXN5bmNocm9ub3VzIG9wZXJhdGlvbnMgKFN1Y2ggYXMgQVBJIGNhbGxzKVxyXG4gIGFjdGlvbnM6IHtcclxuICAgIGNoZWNrVGlja2V0ICh7IGNvbW1pdCB9LCB0aWNrZXRJZCkge1xyXG4gICAgICBUaWNrZXRTZXJ2aWNlLmNoZWNrVGlja2V0KHRpY2tldElkKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICBjb21taXQoJ1NFVF9USUNLRVQnLCByZXMpXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBhZGRUaWNrZXQgKHsgY29tbWl0IH0sIHRpY2tldCkge1xyXG4gICAgICBUaWNrZXRTZXJ2aWNlLmFkZFRpY2tldCh0aWNrZXQpXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIGNvbW1pdCgnQUREX1RJQ0tFVCcsIHJlcy5jb250ZW50LnRvSlNPTigpKVxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgbG9hZEZhcXMgKHsgY29tbWl0IH0pIHtcclxuICAgICAgRmFxU2VydmljZS5nZXRGYXFzKClcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgY29tbWl0KCdTRVRfRkFRUycsIHJlcylcclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuICAgIGFkZEZhcSAoeyBjb21taXQgfSwgZmFxKSB7XHJcbiAgICAgIEZhcVNlcnZpY2UuYWRkRmFxKGZhcSlcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgY29tbWl0KCdBRERfRkFRJywgcmVzLmNvbnRlbnQudG9KU09OKCkpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIGdldHRlcnM6IHtcclxuICAgIGdldFNlYXJjaFJlc3VsdHM6IHN0YXRlID0+IHNlYXJjaCA9PiB7XHJcbiAgICAgIGlmIChzZWFyY2ggPT09ICcnKVxyXG4gICAgICAgIHJldHVybiBzdGF0ZS5mYXFzXHJcbiAgICAgIFxyXG4gICAgICBjb25zdCB3b3JkcyA9IHNlYXJjaC5zcGxpdCgnICcpXHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4gc3RhdGUuZmFxcy5maWx0ZXIoZmFxID0+IHdvcmRzLnNvbWUoXHJcbiAgICAgICAgd29yZCA9PiBmYXEucXVlcnkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh3b3JkLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgICAgfHwgZmFxLmFuc3dlci50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHdvcmQudG9Mb3dlckNhc2UoKSkpKVxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9BZG9wdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YjE1MTA0ZjImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQWRvcHRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BZG9wdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vQWRvcHRpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9tYXR0aGV3L0Rlc2t0b3AvU2VuaW9yIERlc2dpbiBQcm9qZWN0L2FjdWFWXzIvYWN1YS1tb2JpbGUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYjE1MTA0ZjInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYjE1MTA0ZjInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYjE1MTA0ZjInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0Fkb3B0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iMTUxMDRmMiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdiMTUxMDRmMicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmlld3MvQWRvcHRpb24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Fkb3B0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Fkb3B0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRvcHRpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRvcHRpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRvcHRpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWIxNTEwNGYyJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9GYXEudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWUzOWQxMDkyJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0ZhcS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0ZhcS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vRmFxLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWUzOWQxMDkyJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiZTM5ZDEwOTJcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvbWF0dGhldy9EZXNrdG9wL1NlbmlvciBEZXNnaW4gUHJvamVjdC9hY3VhVl8yL2FjdWEtbW9iaWxlL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2UzOWQxMDkyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2UzOWQxMDkyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2UzOWQxMDkyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9GYXEudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWUzOWQxMDkyJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2UzOWQxMDkyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2aWV3cy9GYXEudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZhcS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GYXEudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmFxLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWUzOWQxMDkyJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmFxLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWUzOWQxMDkyJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GYXEudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWUzOWQxMDkyJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yZjJiZTdlNCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vSG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vSG9tZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yZjJiZTdlNCZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjJmMmJlN2U0XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL21hdHRoZXcvRGVza3RvcC9TZW5pb3IgRGVzZ2luIFByb2plY3QvYWN1YVZfMi9hY3VhLW1vYmlsZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyZjJiZTdlNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyZjJiZTdlNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyZjJiZTdlNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSG9tZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmYyYmU3ZTQmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMmYyYmU3ZTQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZpZXdzL0hvbWUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJmMmJlN2U0JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yZjJiZTdlNCZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmYyYmU3ZTQmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0xvY2F0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zZTU5Nzg2NCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Mb2NhdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0xvY2F0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9Mb2NhdGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zZTU5Nzg2NCZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjNlNTk3ODY0XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL21hdHRoZXcvRGVza3RvcC9TZW5pb3IgRGVzZ2luIFByb2plY3QvYWN1YVZfMi9hY3VhLW1vYmlsZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczZTU5Nzg2NCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczZTU5Nzg2NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczZTU5Nzg2NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTG9jYXRpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNlNTk3ODY0JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzNlNTk3ODY0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2aWV3cy9Mb2NhdGlvbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9jYXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9jYXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9jYXRpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2U1OTc4NjQmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2NhdGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zZTU5Nzg2NCZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9jYXRpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNlNTk3ODY0JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9TZXJ2aWNlUmVxdWVzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2NjZWNmMDkmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU2VydmljZVJlcXVlc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TZXJ2aWNlUmVxdWVzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vU2VydmljZVJlcXVlc3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2NjZWNmMDkmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjNjY2VjZjA5XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL21hdHRoZXcvRGVza3RvcC9TZW5pb3IgRGVzZ2luIFByb2plY3QvYWN1YVZfMi9hY3VhLW1vYmlsZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczY2NlY2YwOScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczY2NlY2YwOScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczY2NlY2YwOScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU2VydmljZVJlcXVlc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNjY2VjZjA5JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzNjY2VjZjA5Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2aWV3cy9TZXJ2aWNlUmVxdWVzdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2VydmljZVJlcXVlc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2VydmljZVJlcXVlc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZXJ2aWNlUmVxdWVzdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zY2NlY2YwOSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZXJ2aWNlUmVxdWVzdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zY2NlY2YwOSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZXJ2aWNlUmVxdWVzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2NjZWNmMDkmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1RpY2tldC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDdiNDBjMGEmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVGlja2V0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVGlja2V0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9UaWNrZXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDdiNDBjMGEmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjA3YjQwYzBhXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL21hdHRoZXcvRGVza3RvcC9TZW5pb3IgRGVzZ2luIFByb2plY3QvYWN1YVZfMi9hY3VhLW1vYmlsZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwN2I0MGMwYScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwN2I0MGMwYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwN2I0MGMwYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVGlja2V0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wN2I0MGMwYSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwN2I0MGMwYScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmlld3MvVGlja2V0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UaWNrZXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGlja2V0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGlja2V0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTA3YjQwYzBhJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RpY2tldC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wN2I0MGMwYSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UaWNrZXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA3YjQwYzBhJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9UaWNrZXRGb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02YThiZmY1ZiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9UaWNrZXRGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVGlja2V0Rm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjZhOGJmZjVmXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL21hdHRoZXcvRGVza3RvcC9TZW5pb3IgRGVzZ2luIFByb2plY3QvYWN1YVZfMi9hY3VhLW1vYmlsZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2YThiZmY1ZicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2YThiZmY1ZicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2YThiZmY1ZicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVGlja2V0Rm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmE4YmZmNWYmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNmE4YmZmNWYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZpZXdzL1RpY2tldEZvcm0udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RpY2tldEZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGlja2V0Rm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGlja2V0Rm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmE4YmZmNWYmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1RpY2tldE9wdGlvbnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTEzOWQ5NTUzJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1RpY2tldE9wdGlvbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9UaWNrZXRPcHRpb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9UaWNrZXRPcHRpb25zLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTEzOWQ5NTUzJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIxMzlkOTU1M1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9tYXR0aGV3L0Rlc2t0b3AvU2VuaW9yIERlc2dpbiBQcm9qZWN0L2FjdWFWXzIvYWN1YS1tb2JpbGUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMTM5ZDk1NTMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMTM5ZDk1NTMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMTM5ZDk1NTMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1RpY2tldE9wdGlvbnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTEzOWQ5NTUzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzEzOWQ5NTUzJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2aWV3cy9UaWNrZXRPcHRpb25zLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UaWNrZXRPcHRpb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RpY2tldE9wdGlvbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UaWNrZXRPcHRpb25zLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTEzOWQ5NTUzJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RpY2tldE9wdGlvbnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTM5ZDk1NTMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGlja2V0T3B0aW9ucy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTM5ZDk1NTMmc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9