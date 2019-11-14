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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9hZG9wdGlvbi9BZG9wdGlvbkFuaW1hbERldGFpbHMudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL2Fkb3B0aW9uL0FuaW1hbENhcmQudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL2Fkb3B0aW9uL2NhdGVnb3J5LnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9idXR0b25zL0NhdGVnb3J5QnV0dG9uLnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9idXR0b25zL0ljb25CdXR0b24udnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL2xvY2F0aW9uL0FuaW1hbENlbnRlckRldGFpbHMudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL3N1Ymxpc3RzL0ZhcUluZm8udnVlIiwid2VicGFjazovLy92aWV3cy9BZG9wdGlvbi52dWUiLCJ3ZWJwYWNrOi8vL3ZpZXdzL0ZhcS52dWUiLCJ3ZWJwYWNrOi8vL3ZpZXdzL0hvbWUudnVlIiwid2VicGFjazovLy92aWV3cy9Mb2NhdGlvbi52dWUiLCJ3ZWJwYWNrOi8vL3ZpZXdzL1NlcnZpY2VSZXF1ZXN0LnZ1ZSIsIndlYnBhY2s6Ly8vdmlld3MvVGlja2V0LnZ1ZSIsIndlYnBhY2s6Ly8vdmlld3MvVGlja2V0Rm9ybS52dWUiLCJ3ZWJwYWNrOi8vL3ZpZXdzL1RpY2tldE9wdGlvbnMudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbG9jYXRpb24vQW5pbWFsQ2VudGVyRGV0YWlscy52dWU/YWQ0YyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N1Ymxpc3RzL0ZhcUluZm8udnVlPzQyNTMiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvRmFxLnZ1ZT9lMDg1Iiwid2VicGFjazovLy8uL3ZpZXdzL0hvbWUudnVlP2ZjYTciLCJ3ZWJwYWNrOi8vLy4vdmlld3MvTG9jYXRpb24udnVlP2U4YWIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hZG9wdGlvbi9BZG9wdGlvbkFuaW1hbERldGFpbHMudnVlPzg5YzUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hZG9wdGlvbi9BbmltYWxDYXJkLnZ1ZT81ZGU4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRvcHRpb24vY2F0ZWdvcnkudnVlPzMzODAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9idXR0b25zL0NhdGVnb3J5QnV0dG9uLnZ1ZT9hYTU0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9ucy9JY29uQnV0dG9uLnZ1ZT9lMDJkIiwid2VicGFjazovLy8uL3ZpZXdzL0Fkb3B0aW9uLnZ1ZT82ODExIiwid2VicGFjazovLy8uL3ZpZXdzL1NlcnZpY2VSZXF1ZXN0LnZ1ZT84Mzk0Iiwid2VicGFjazovLy8uL3ZpZXdzL1RpY2tldC52dWU/MWNiMSIsIndlYnBhY2s6Ly8vLi92aWV3cy9UaWNrZXRPcHRpb25zLnZ1ZT84MzAyIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRvcHRpb24vQWRvcHRpb25BbmltYWxEZXRhaWxzLnZ1ZT8xMzJmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRvcHRpb24vQW5pbWFsQ2FyZC52dWU/NjQ4OCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Fkb3B0aW9uL2NhdGVnb3J5LnZ1ZT9mNDRlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9ucy9DYXRlZ29yeUJ1dHRvbi52dWU/YjVhNCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbnMvSWNvbkJ1dHRvbi52dWU/NDYyNiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xvY2F0aW9uL0FuaW1hbENlbnRlckRldGFpbHMudnVlPzU3ZjAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zdWJsaXN0cy9GYXFJbmZvLnZ1ZT9lNTFjIiwid2VicGFjazovLy8uL3ZpZXdzL0Fkb3B0aW9uLnZ1ZT85YTFlIiwid2VicGFjazovLy8uL3ZpZXdzL0ZhcS52dWU/ZDA4NiIsIndlYnBhY2s6Ly8vLi92aWV3cy9Ib21lLnZ1ZT9lMWZiIiwid2VicGFjazovLy8uL3ZpZXdzL0xvY2F0aW9uLnZ1ZT8xZmFlIiwid2VicGFjazovLy8uL3ZpZXdzL1NlcnZpY2VSZXF1ZXN0LnZ1ZT9mYTNmIiwid2VicGFjazovLy8uL3ZpZXdzL1RpY2tldC52dWU/MTc2MCIsIndlYnBhY2s6Ly8vLi92aWV3cy9UaWNrZXRGb3JtLnZ1ZT9jYTk4Iiwid2VicGFjazovLy8uL3ZpZXdzL1RpY2tldE9wdGlvbnMudnVlPzk0NzQiLCJ3ZWJwYWNrOi8vLy4gc3luYyBub25yZWN1cnNpdmUgXlxcLlxcL2FwcFxcLihjc3N8c2Nzc3xsZXNzfHNhc3MpJCIsIndlYnBhY2s6Ly8vXFxiX1tcXHctXSpcXC4pc2NzcykkIiwid2VicGFjazovLy8uL0FuaW1hbENlbnRlci5zY3NzIiwid2VicGFjazovLy8uL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRvcHRpb24vQWRvcHRpb25BbmltYWxEZXRhaWxzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Fkb3B0aW9uL0Fkb3B0aW9uQW5pbWFsRGV0YWlscy52dWU/M2JkNCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Fkb3B0aW9uL0Fkb3B0aW9uQW5pbWFsRGV0YWlscy52dWU/ZTM4OCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Fkb3B0aW9uL0Fkb3B0aW9uQW5pbWFsRGV0YWlscy52dWU/N2U3YiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Fkb3B0aW9uL0FuaW1hbENhcmQudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRvcHRpb24vQW5pbWFsQ2FyZC52dWU/ZTAyOCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Fkb3B0aW9uL0FuaW1hbENhcmQudnVlPzgzYWMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hZG9wdGlvbi9BbmltYWxDYXJkLnZ1ZT9hMzc4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRvcHRpb24vY2F0ZWdvcnkudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRvcHRpb24vY2F0ZWdvcnkudnVlPzU5MzQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hZG9wdGlvbi9jYXRlZ29yeS52dWU/NjEwZiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Fkb3B0aW9uL2NhdGVnb3J5LnZ1ZT82N2VhIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9ucy9DYXRlZ29yeUJ1dHRvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9idXR0b25zL0NhdGVnb3J5QnV0dG9uLnZ1ZT9iMGE3Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9ucy9DYXRlZ29yeUJ1dHRvbi52dWU/Y2NlMyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbnMvQ2F0ZWdvcnlCdXR0b24udnVlPzk5YzIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9idXR0b25zL0ljb25CdXR0b24udnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9ucy9JY29uQnV0dG9uLnZ1ZT8wMzE0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9ucy9JY29uQnV0dG9uLnZ1ZT8zY2M2Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9ucy9JY29uQnV0dG9uLnZ1ZT8wYTVmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbG9jYXRpb24vQW5pbWFsQ2VudGVyRGV0YWlscy52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sb2NhdGlvbi9BbmltYWxDZW50ZXJEZXRhaWxzLnZ1ZT8zMWQxIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbG9jYXRpb24vQW5pbWFsQ2VudGVyRGV0YWlscy52dWU/ODg1NiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xvY2F0aW9uL0FuaW1hbENlbnRlckRldGFpbHMudnVlPzhmNTUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zdWJsaXN0cy9GYXFJbmZvLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N1Ymxpc3RzL0ZhcUluZm8udnVlPzIwNWYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zdWJsaXN0cy9GYXFJbmZvLnZ1ZT85MzMyIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3VibGlzdHMvRmFxSW5mby52dWU/YTJkYSIsIndlYnBhY2s6Ly8vLi9mb250cy9mb250LWF3ZXNvbWUuY3NzIiwid2VicGFjazovLy8uL2ZvbnRzL2lvbmljb25zLmNzcyIsIndlYnBhY2s6Ly8vLi9tYWluLmpzIiwid2VicGFjazovLy8uL21vZGVscy9BbmltYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL0ZhcS5qcyIsIndlYnBhY2s6Ly8vLi9tb2RlbHMvVGlja2V0LmpzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL0Fkb3B0aW9uU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9GYWtlRmFxU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9GYWtlVGlja2V0U2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9GYXFTZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL1RpY2tldFNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvQWRvcHRpb24udnVlIiwid2VicGFjazovLy8uL3ZpZXdzL0Fkb3B0aW9uLnZ1ZT8zZjdkIiwid2VicGFjazovLy8uL3ZpZXdzL0Fkb3B0aW9uLnZ1ZT8yYWRmIiwid2VicGFjazovLy8uL3ZpZXdzL0Fkb3B0aW9uLnZ1ZT9jNTNlIiwid2VicGFjazovLy8uL3ZpZXdzL0ZhcS52dWUiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvRmFxLnZ1ZT8wZGMwIiwid2VicGFjazovLy8uL3ZpZXdzL0ZhcS52dWU/MGM1OCIsIndlYnBhY2s6Ly8vLi92aWV3cy9GYXEudnVlPzJiNGMiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvSG9tZS52dWUiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvSG9tZS52dWU/ODg1NiIsIndlYnBhY2s6Ly8vLi92aWV3cy9Ib21lLnZ1ZT9hMGZmIiwid2VicGFjazovLy8uL3ZpZXdzL0hvbWUudnVlPzhlY2QiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvTG9jYXRpb24udnVlIiwid2VicGFjazovLy8uL3ZpZXdzL0xvY2F0aW9uLnZ1ZT9lMDAwIiwid2VicGFjazovLy8uL3ZpZXdzL0xvY2F0aW9uLnZ1ZT9kNmUxIiwid2VicGFjazovLy8uL3ZpZXdzL0xvY2F0aW9uLnZ1ZT8yNGM4Iiwid2VicGFjazovLy8uL3ZpZXdzL1NlcnZpY2VSZXF1ZXN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi92aWV3cy9TZXJ2aWNlUmVxdWVzdC52dWU/ZDJiZSIsIndlYnBhY2s6Ly8vLi92aWV3cy9TZXJ2aWNlUmVxdWVzdC52dWU/ZWVmNCIsIndlYnBhY2s6Ly8vLi92aWV3cy9TZXJ2aWNlUmVxdWVzdC52dWU/ZWE3NiIsIndlYnBhY2s6Ly8vLi92aWV3cy9UaWNrZXQudnVlIiwid2VicGFjazovLy8uL3ZpZXdzL1RpY2tldC52dWU/ZTgwNyIsIndlYnBhY2s6Ly8vLi92aWV3cy9UaWNrZXQudnVlPzI3YjUiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvVGlja2V0LnZ1ZT80ODRjIiwid2VicGFjazovLy8uL3ZpZXdzL1RpY2tldEZvcm0udnVlIiwid2VicGFjazovLy8uL3ZpZXdzL1RpY2tldEZvcm0udnVlPzBiZjUiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvVGlja2V0Rm9ybS52dWU/MTQ1MyIsIndlYnBhY2s6Ly8vLi92aWV3cy9UaWNrZXRPcHRpb25zLnZ1ZSIsIndlYnBhY2s6Ly8vLi92aWV3cy9UaWNrZXRPcHRpb25zLnZ1ZT83MzE5Iiwid2VicGFjazovLy8uL3ZpZXdzL1RpY2tldE9wdGlvbnMudnVlP2Q3YTIiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvVGlja2V0T3B0aW9ucy52dWU/MzkxZiJdLCJuYW1lcyI6WyJzdG9yZSIsIkhvbWUiLCJWdWVEZXZ0b29scyIsIlJhZExpc3RWaWV3IiwiVnVlIiwidXNlIiwicmVnaXN0ZXJFbGVtZW50IiwicmVxdWlyZSIsIlROU0ZvbnRJY29uIiwiZGVidWciLCJwYXRocyIsImxvYWRDc3MiLCJmaWx0ZXIiLCJmb250aWNvbiIsInJlbmRlciIsImgiLCIkc3RhcnQiLCJjb25zdHJ1Y3RvciIsInF1ZXN0aW9uIiwiaWQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJhbnN3ZXIiLCJjb3VudCIsImxvY2F0aW9uIiwic2V0TG9jYXRpb24iLCJxckNvZGUiLCJzZXRUaWNrZXRJbmZvIiwicGhvbmUiLCJuYW1lIiwicXVlcnkiLCJ0aW1lSW4iLCJEYXRlIiwiaHR0cE1vZHVsZSIsImdldEFuaW1hbHMiLCJnZXRKU09OIiwiZ2V0RmFxcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsImZhcXMiLCJhZGRGYXEiLCJlbnRyeSIsImFkZFRpY2tldCIsImZhcSIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJoZWFkZXJzIiwiY29udGVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aWNrZXQiLCJjaGVja1RpY2tldCIsInRpY2tldElkIiwiVnVleCIsIlN0b3JlIiwic3RhdGUiLCJhbmltYWxzIiwidGlja2V0cyIsInVzZXJBbmltYWwiLCJBbmltYWwiLCJ1c2VyRmFxIiwidXNlclRpY2tldCIsIlRpY2tldCIsImFwcHJvdmVkVGlja2V0IiwidW5kZWZpbmVkIiwibXV0YXRpb25zIiwic3RvcmVBbmltYWwiLCJhbmltYWwiLCJBRERfQU5JTUFMIiwicHVzaCIsInN0b3JlRmFxIiwic2V0VGlja2V0TG9jYXRpb24iLCJ1c2VySW5wdXQiLCJzdG9yZVRpY2tldCIsIlNFVF9USUNLRVQiLCJBRERfVElDS0VUIiwiU0VUX0ZBUVMiLCJBRERfRkFRIiwiYWN0aW9ucyIsImNvbW1pdCIsIlRpY2tldFNlcnZpY2UiLCJ0aGVuIiwicmVzIiwidG9KU09OIiwibG9hZEZhcXMiLCJGYXFTZXJ2aWNlIiwiZ2V0dGVycyIsImdldFNlYXJjaFJlc3VsdHMiLCJzZWFyY2giLCJ3b3JkcyIsInNwbGl0Iiwic29tZSIsIndvcmQiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtSUE7QUFDQSxpQkFEQTtBQUVBLGdCQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFhQTs7QUFmQSxHQUhBOztBQW9CQTtBQUNBLG1CQUNBO0FBQ0E7QUFEQSxLQURBLEVBSUE7QUFDQTtBQURBLEtBSkEsRUFPQTtBQUNBO0FBREEsS0FQQSxFQVVBO0FBQ0E7QUFEQSxLQVZBLEVBREEsQ0FlQTtBQUNBO0FBQ0EsR0FyQ0E7O0FBc0NBLGNBdENBOztBQXVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBSkE7O0FBS0E7QUFDQTtBQUNBO0FBQ0EsY0FDQSxPQURBLENBQ0E7QUFDQTtBQUNBLGdCQURBO0FBRUE7QUFGQSxTQURBO0FBS0Esb0JBTEE7QUFNQTtBQU5BLE9BREEsRUFTQSxJQVRBLENBU0E7QUFDQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxrQkFGQTtBQUdBO0FBSEE7QUFEQTtBQU9BLE9BakJBLEVBa0JBLElBbEJBLENBa0JBO0FBQ0E7QUFDQTtBQUNBLGdCQURBO0FBRUEsZ0JBRkE7QUFHQTtBQUhBO0FBREE7QUFPQSxPQTFCQSxFQTJCQSxJQTNCQSxDQTJCQSxjQTNCQTtBQTRCQSxLQXBDQTs7QUFxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUF6Q0EsR0F2Q0E7O0FBa0ZBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBO0FBRkE7QUFJQTs7QUF2RkEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QztBQUN0Qyw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEMsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEMsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEMsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEMsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEMsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEMsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEMsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BiQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7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QUUsWUFBWSxtQkFBbUIsRUFBRSxZQUFZLG9CQUFvQixtQkFBbUIsRUFBRSxZQUFZLGtCQUFrQixxQkFBcUIsRUFBRSxVQUFVLGNBQWMsRUFBRSxZQUFZLGtCQUFrQixFQUFFLFlBQVksb0JBQW9CLEVBQUUsWUFBWSxxQkFBcUIsRUFBRSxZQUFZLG1CQUFtQixFQUFFLFlBQVksb0JBQW9CLG1CQUFtQixFQUFFLFlBQVksa0JBQWtCLHFCQUFxQixFQUFFLFVBQVUsY0FBYyxFQUFFLFlBQVksa0JBQWtCLEVBQUUsWUFBWSxvQkFBb0IsRUFBRSxZQUFZLHFCQUFxQixFQUFFLFlBQVksbUJBQW1CLEVBQUUsWUFBWSxvQkFBb0IsbUJBQW1CLEVBQUUsWUFBWSxrQkFBa0IscUJBQXFCLEVBQUUsVUFBVSxjQUFjLEVBQUUsWUFBWSxrQkFBa0IsRUFBRSxZQUFZLG9CQUFvQixFQUFFLFlBQVkscUJBQXFCLEVBQUUsWUFBWSxtQkFBbUIsRUFBRSxZQUFZLG9CQUFvQixtQkFBbUIsRUFBRSxZQUFZLGtCQUFrQixxQkFBcUIsRUFBRSxXQUFXLGVBQWUsRUFBRSxhQUFhLG1CQUFtQixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEscUJBQXFCLG9CQUFvQixFQUFFLGFBQWEsbUJBQW1CLHNCQUFzQixFQUFFLFdBQVcsZUFBZSxFQUFFLGFBQWEsbUJBQW1CLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxxQkFBcUIsb0JBQW9CLEVBQUUsYUFBYSxtQkFBbUIsc0JBQXNCLEVBQUUsV0FBVyxlQUFlLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHFCQUFxQixvQkFBb0IsRUFBRSxhQUFhLG1CQUFtQixzQkFBc0IsRUFBRSxXQUFXLGVBQWUsRUFBRSxhQUFhLG1CQUFtQixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEscUJBQXFCLG9CQUFvQixFQUFFLGFBQWEsbUJBQW1CLHNCQUFzQixFQUFFLFdBQVcsZUFBZSxFQUFFLGFBQWEsbUJBQW1CLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxxQkFBcUIsb0JBQW9CLEVBQUUsYUFBYSxtQkFBbUIsc0JBQXNCLEVBQUUsV0FBVyxlQUFlLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHFCQUFxQixvQkFBb0IsRUFBRSxhQUFhLG1CQUFtQixzQkFBc0IsRUFBRSxXQUFXLGVBQWUsRUFBRSxhQUFhLG1CQUFtQixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEscUJBQXFCLG9CQUFvQixFQUFFLGFBQWEsbUJBQW1CLHNCQUFzQixFQUFFLFdBQVcsZUFBZSxFQUFFLGFBQWEsbUJBQW1CLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxxQkFBcUIsb0JBQW9CLEVBQUUsYUFBYSxtQkFBbUIsc0JBQXNCLEVBQUUsV0FBVyxlQUFlLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHFCQUFxQixvQkFBb0IsRUFBRSxhQUFhLG1CQUFtQixzQkFBc0IsRUFBRSxVQUFVLGVBQWUsRUFBRSxZQUFZLG1CQUFtQixFQUFFLFlBQVkscUJBQXFCLEVBQUUsWUFBWSxzQkFBc0IsRUFBRSxZQUFZLG9CQUFvQixFQUFFLFlBQVkscUJBQXFCLG9CQUFvQixFQUFFLFlBQVksbUJBQW1CLHNCQUFzQixFQUFFLFVBQVUsZUFBZSxFQUFFLFlBQVksbUJBQW1CLEVBQUUsWUFBWSxxQkFBcUIsRUFBRSxZQUFZLHNCQUFzQixFQUFFLFlBQVksb0JBQW9CLEVBQUUsWUFBWSxxQkFBcUIsb0JBQW9CLEVBQUUsWUFBWSxtQkFBbUIsc0JBQXNCLEVBQUUsVUFBVSxlQUFlLEVBQUUsWUFBWSxtQkFBbUIsRUFBRSxZQUFZLHFCQUFxQixFQUFFLFlBQVksc0JBQXNCLEVBQUUsWUFBWSxvQkFBb0IsRUFBRSxZQUFZLHFCQUFxQixvQkFBb0IsRUFBRSxZQUFZLG1CQUFtQixzQkFBc0IsRUFBRSxVQUFVLGVBQWUsRUFBRSxZQUFZLG1CQUFtQixFQUFFLFlBQVkscUJBQXFCLEVBQUUsWUFBWSxzQkFBc0IsRUFBRSxZQUFZLG9CQUFvQixFQUFFLFlBQVkscUJBQXFCLG9CQUFvQixFQUFFLFlBQVksbUJBQW1CLHNCQUFzQixFQUFFLFVBQVUsZUFBZSxFQUFFLFlBQVksbUJBQW1CLEVBQUUsWUFBWSxxQkFBcUIsRUFBRSxZQUFZLHNCQUFzQixFQUFFLFlBQVksb0JBQW9CLEVBQUUsWUFBWSxxQkFBcUIsb0JBQW9CLEVBQUUsWUFBWSxtQkFBbUIsc0JBQXNCLEVBQUUsV0FBVyxnQkFBZ0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSx1QkFBdUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLHFCQUFxQixFQUFFLGFBQWEsb0JBQW9CLHVCQUF1QixFQUFFLFdBQVcsZ0JBQWdCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsdUJBQXVCLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixxQkFBcUIsRUFBRSxhQUFhLG9CQUFvQix1QkFBdUIsRUFBRSxXQUFXLGdCQUFnQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLHVCQUF1QixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IscUJBQXFCLEVBQUUsYUFBYSxvQkFBb0IsdUJBQXVCLEVBQUUsV0FBVyxn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Q0w7QUFDcUM7OztBQUdqRztBQUMwRjtBQUMxRixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSxtRkFBTTtBQUNSLEVBQUUsb0dBQU07QUFDUixFQUFFLDZHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxJQUFVO0FBQ2QsWUFBWSxtQkFBTyxDQUFDLGtEQUF3RjtBQUM1RyxjQUFjLG1CQUFPLENBQUMsZ0RBQUs7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNCQUFzQixzRUFBZ0UsRUFBRTtBQUFBO0FBQ3hGO0FBQ0EsZ0JBQWdCLG9HQUFNO0FBQ3RCLHlCQUF5Qiw2R0FBZTtBQUN4QyxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNlLGdGOzs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQTZLLENBQWdCLGlQQUFHLEVBQUMsQzs7Ozs7Ozs7QUNBak07QUFBQTtBQUFBO0FBQUE7QUFBOFksQ0FBZ0IsNmJBQUcsRUFBQyxDOzs7Ozs7OztBQ0FsYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPFBhZ2UgYWN0aW9uQmFySGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwiYW5pbS1wYWdlXCJcclxuICAgICAgICBiYWNrZ3JvdW5kU3BhblVuZGVyU3RhdHVzQmFyPVwidHJ1ZVwiPlxyXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cIm1haW5cIiB2ZXJ0aWNhbEFsaWdubWVudD1cInRvcFwiPlxyXG5cclxuICAgICAgICAgICAgICAgIDwhLS0gQW5pbWFsIENvdmVyIGltYWdlIC0tPlxyXG4gICAgICAgICAgICA8R3JpZExheW91dCBjbGFzcz1cImFuaW0tY292ZXJcIiByb3dzPVwiYXV0b1wiIGNvbHVtbnM9XCIqXCI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugcm93PVwiMFwiIGNvbD1cIjBcIiBtYXJnaW5Ub3A9XCItNDBcIiBoZWlnaHQ9XCIxODBcIiBzdHJldGNoPVwiYXNwZWN0RmlsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjYXJkLWltZ1wiIDpzcmM9XCJpdGVtLmNvdmVyXCIgLz5cclxuICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIwXCIgY29sPVwiMFwiIHZlcnRpY2FsQWxpZ25tZW50PVwidG9wXCJcclxuICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50PVwibGVmdFwiIEB0YXA9XCJjbG9zZVwiIDp0ZXh0PVwiJ2ZhLWFycm93LWxlZnQnIHwgZm9udGljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmEgY2xvc2VcIiBmb250U2l6ZT1cIjI0XCIgLz5cclxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG5cclxuICAgICAgICAgICAgICAgIDwhLS0gQW5pbWFsIGdhbGxlcnkgaW1hZ2VzIC0tPlxyXG4gICAgICAgICAgICA8U2Nyb2xsVmlldyBjbGFzcz1cImFuaW0taW1hZ2VzXCIgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCIgY2xhc3M9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCB2LWJpbmQ6a2V5PVwiaW1hZ2VcIiB2LWZvcj1cImltYWdlIGluIGl0ZW0uaW1hZ2VzXCIgcm93cz1cImF1dG9cIiBjb2x1bW5zPVwiKlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3M9XCJjYXJkLWltZy10aHVtYlwiIHJvdz1cIjBcIiBjb2w9XCIwXCIgOnNyYz1cImltYWdlLnNyY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJldGNoPVwiYXNwZWN0Rml0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICA8L1Njcm9sbFZpZXc+XHJcblxyXG4gICAgICAgICAgICA8IS0tIEFuaW1hbCBkZXRhaWxzIC0tPlxyXG4gICAgICAgICAgICA8R3JpZExheW91dCByb3dzPVwiYXV0byxhdXRvLGF1dG8sYXV0b1wiIGNvbHVtbnM9XCJhdXRvXCIgY2xhc3M9XCJjb250ZW50XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY2xhc3M9XCJhbmltLWl0ZW1JbmZvXCIgbWFyZ2luVG9wPVwiMTVcIiByb3c9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIiBjb2x1bW5zPVwiYXV0bywqXCIgcm93cz1cImF1dG8sYXV0byxhdXRvLGF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiZ2VuZGVySWNvbiB8IGZvbnRpY29uXCIgcm93PVwiMFwiIGNvbD1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dTcGFuPVwiMlwiIDpiYWNrZ3JvdW5kQ29sb3I9XCJpdGVtLmNhdGVnb3J5VGFnXCIgY2xhc3M9XCJmYSBjYXRlZ29yeS1pY29uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiMFwiIGNvbD1cIjFcIiBjbGFzcz1cIml0ZW0tbmFtZVwiIHRleHR3cmFwPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50PVwiYm90dG9tXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cImxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6dGV4dD1cIml0ZW0ubmFtZVwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIxXCIgY29sPVwiMVwiIGNsYXNzPVwiaXRlbS1jYXRlZ29yeVwiIHRleHR3cmFwPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50PVwidG9wXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cImxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6dGV4dD1cIml0ZW0uY2F0ZWdvcnlcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cclxuXHJcbiAgICAgICAgICAgICAgPCEtLSBzb2NpYWwgYmFyIC0tPlxyXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwibGluZSBhbmltLWxpa2VzXCIgcm93PVwiMlwiIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wPVwiMTBcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNsYXNzPVwiYW5pbS1saWtlc1wiIG1hcmdpblRvcD1cIjVcIiB3aWR0aD1cIjEwMCVcIiByb3c9XCIzXCJcclxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPVwiKixhdXRvLGF1dG9cIiByb3dzPVwiYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbD1cIjBcIiByb3dzPVwiYXV0b1wiIGNvbHVtbnM9XCJhdXRvLGF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cIjBcIiByb3c9XCIwXCIgcmVmPVwiaW5mb1wiIGNsYXNzPVwibGlrZS1pY29uIGZhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp0ZXh0PVwiJ2ZhLWluZm8tY2lyY2xlJyB8IGZvbnRpY29uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cIjFcIiByb3c9XCIwXCIgY2xhc3M9XCJsYXlvdXRcIiA6dGV4dD1cIml0ZW0uYnJlZWRfZ3JvdXAgKyAnIC0gJyArIGl0ZW0ucHJpbWFyeV9icmVlZFwiPjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2w9XCIxXCIgcm93cz1cImF1dG9cIiBjb2x1bW5zPVwiYXV0byxhdXRvXCIgQHRhcD1cInRvZ2dsZUhlYXJ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ9XCIxNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVwiMFwiIHJvdz1cIjBcIiByZWY9XCJmYXZvcml0ZVwiIGNsYXNzPVwibGlrZS1pY29uICBmYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJbaXRlbS5pc0Zhdm9yaXRlID8gJ2hlYXJ0LWFjdGl2ZScgOiAnZGVmYXVsdCddXCIgOnRleHQ9XCJpdGVtLmlzRmF2b3JpdGUgPyAnZmEtaGVhcnQnOidmYS1oZWFydC1vJyB8IGZvbnRpY29uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cIjFcIiByb3c9XCIwXCIgY2xhc3M9XCJsYXlvdXRcIiB0ZXh0PVwiRmF2b3JpdGVcIj48L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNvbD1cIjJcIiBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJlZj1cIlwiIGNsYXNzPVwibGlrZS1pY29uIGxheW91dCBmYVwiIDp0ZXh0PVwiJ2ZhLXNoYXJlLXNxdWFyZS1vJyB8IGZvbnRpY29uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwibGF5b3V0XCIgdGV4dD1cIlNoYXJlXCI+PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcblxyXG5cclxuICAgICAgICAgICAgPCEtLSBBbmltYWwgRGVzY3JpcHRpb24gTGFiZWwgKHcvIGljb24pIC0tPlxyXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgd2lkdGg9XCIxMDAlXCIgY2xhc3M9XCJsaW5lQnJlYWsgYW5pbS1saWtlc1wiIC8+XHJcblxyXG4gICAgICAgICAgICA8R3JpZGxheW91dCByb3dzPVwiYXV0bywqXCIgY2xhc3M9XCJjb250ZW50IGFuaW0tY29udGVudFwiIG1hcmdpblRvcD1cIjE1XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgcm93PVwiMFwiIHJvd3M9XCJhdXRvXCIgbWFyZ2luQm90dG9tPVwiNVwiIGNvbHVtbnM9XCJhdXRvLCBhdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cIjBcIiA6dGV4dD1cIidmYS10YWdzJyB8IGZvbnRpY29uXCIgY2xhc3M9XCJmYSBkZXNjcmlwdGlvbi1pY29uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA9XCJ0cnVlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVwiMVwiIGNsYXNzPVwiZGVzY3JpcHRpb24tdGV4dFwiIHRleHQ9XCJEZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwPVwidHJ1ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDwhLS0gQW5pbWFsIERlc2NyaXB0aW9uIC0tPlxyXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cIjFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8U2Nyb2xsVmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cIiosICosICosICosICosICosICosICpcIiBjb2x1bW5zPVwiYXV0bywgKlwiIHZlcnRpY2FsQWxpZ25tZW50PVwidG9wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjBcIiBjb2w9XCIwXCIgY2xhc3M9XCJkZXNjcmlwdGlvbi12YWx1ZVwiIHRleHQ9XCJBdmFpbGFiaWxpdHk6XCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIwXCIgY29sPVwiMVwiICBjbGFzcz1cImZhIGRlc2NyaXB0aW9uLXZhbHVlXCIgOmNsYXNzPVwiaXRlbS5pc0F2YWlsYWJsZT09dHJ1ZT8gJ2lzQXZhaWxhYmxlJzonaXNOb3RBdmFpbGFibGUnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiA6dGV4dD1cIml0ZW0uaXNBdmFpbGFibGU9PXRydWU/ICdBdmFpbGFibGUnOidOb3QgQXZhaWxhYmxlJ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiA6dGV4dD1cIml0ZW0uaXNBdmFpbGFibGU9PXRydWU/ICdmYS1jaGVjayc6J2ZhLXRpbWVzJyB8IGZvbnRpY29uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjFcIiBjb2w9XCIwXCIgY2xhc3M9XCJkZXNjcmlwdGlvbi12YWx1ZVwiIHRleHQ9XCJMb2NhdGlvbjpcIiAvPiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjFcIiBjb2w9XCIxXCIgY2xhc3M9XCJkZXNjcmlwdGlvbi12YWx1ZVwiIDp0ZXh0PVwiaXRlbS5sb2NhdGlvblwiIC8+IFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjJcIiBjb2w9XCIwXCIgY2xhc3M9XCJkZXNjcmlwdGlvbi12YWx1ZVwiIHRleHQ9XCJBZ2U6XCIgLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIyXCIgY29sPVwiMVwiIGNsYXNzPVwiZGVzY3JpcHRpb24tdmFsdWVcIiA6dGV4dD1cIml0ZW0uYWdlXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIzXCIgY29sPVwiMFwiIGNsYXNzPVwiZGVzY3JpcHRpb24tdmFsdWVcIiB0ZXh0PVwiR2VuZGVyOiBcIiAvPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjNcIiBjb2w9XCIxXCIgY2xhc3M9XCJkZXNjcmlwdGlvbi12YWx1ZVwiIDp0ZXh0PVwiaXRlbS5nZW5kZXJcIiAvPiAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiNFwiIGNvbD1cIjBcIiBjbGFzcz1cImRlc2NyaXB0aW9uLXZhbHVlXCIgdGV4dD1cIkJyZWVkIEdyb3VwOlwiIC8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiNFwiIGNvbD1cIjFcIiBjbGFzcz1cImRlc2NyaXB0aW9uLXZhbHVlXCIgOnRleHQ9XCJpdGVtLmJyZWVkX2dyb3VwXCIgLz4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiNVwiIGNvbD1cIjBcIiBjbGFzcz1cImRlc2NyaXB0aW9uLXZhbHVlXCIgdGV4dD1cIlByaW1hcnkgQnJlZWQ6XCIgLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCI1XCIgY29sPVwiMVwiIGNsYXNzPVwiZGVzY3JpcHRpb24tdmFsdWVcIiA6dGV4dD1cIml0ZW0ucHJpbWFyeV9icmVlZFwiIC8+ICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjZcIiBjb2w9XCIwXCIgY2xhc3M9XCJkZXNjcmlwdGlvbi12YWx1ZVwiIHRleHQ9XCJBbmltYWwgU2l6ZTpcIiAvPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCI2XCIgY29sPVwiMVwiIGNsYXNzPVwiZGVzY3JpcHRpb24tdmFsdWVcIiA6dGV4dD1cIml0ZW0uYW5pbWFsX3NpemVcIiAvPiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjdcIiBjb2w9XCIwXCIgY2xhc3M9XCJkZXNjcmlwdGlvbi12YWx1ZVwiIHRleHQ9XCJQcmltYXJ5IENvbG9yOlwiIC8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiN1wiIGNvbD1cIjFcIiBjbGFzcz1cImRlc2NyaXB0aW9uLXZhbHVlXCIgOnRleHQ9XCJpdGVtLnByaW1hcnlfY29sb3JcIiAvPiAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cclxuICAgICAgICAgICAgICAgICAgICA8L1Njcm9sbFZpZXc+XHJcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG5cclxuXHJcbiAgICAgICAgICAgIDwvR3JpZGxheW91dD5cclxuXHJcbiAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgIDwvUGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBwcm9wczogW1wiaXRlbVwiXSxcclxuICBjb21wb25lbnRzOiB7fSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgZ2VuZGVySWNvbigpIHtcclxuICAgICAgc3dpdGNoICh0aGlzLml0ZW0uZ2VuZGVyKSB7XHJcbiAgICAgICAgY2FzZSBcIk1cIjpcclxuICAgICAgICAgIHRoaXMuaXRlbS5jYXRlZ29yeVRhZyA9IFwiIzAwOTlmZlwiO1xyXG4gICAgICAgICAgcmV0dXJuIFwiZmEtbWFyc1wiO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIkZcIjpcclxuICAgICAgICAgIHRoaXMuaXRlbS5jYXRlZ29yeVRhZyA9IFwiI2ZmY2NmZlwiO1xyXG4gICAgICAgICAgcmV0dXJuIFwiZmEtdmVudXNcIjtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICByZXR1cm4gXCJmYS1maXJlXCI7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY3JlYXRlZCgpIHtcclxuICAgIHRoaXMuaW1hZ2VzID0gW1xyXG4gICAgICB7XHJcbiAgICAgICAgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL3BhbmNha2U2NDAuanBnXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9wYW5jYWtlNjQwLmpwZ1wiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvcGFuY2FrZTY0MC5qcGdcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL3BhbmNha2U2NDAuanBnXCJcclxuICAgICAgfVxyXG4gICAgXTtcclxuICAgIC8vIHRoaXMuaXNMaWtlID0gdGhpcy5pdGVtLmlzTGlrZTtcclxuICAgIC8vIHRoaXMuaXNIZWFydCA9IHRoaXMuaXRlbS5pc0Zhdm9yaXRlO1xyXG4gIH0sXHJcbiAgbW91bnRlZCgpIHt9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIC8vIG5hdmlnYXRlQmFja1xyXG4gICAgY2xvc2UoKSB7XHJcbiAgICAgIHRoaXMuJG5hdmlnYXRlQmFjaygpO1xyXG4gICAgfSxcclxuICAgIC8vIEFuaW1hdGUgJ0Zhdm9yaXRlJyBpY29uXHJcbiAgICBhbmltYXRlRmF2b3JpdGUoKSB7XHJcbiAgICAgIGxldCBpbWdMb2dvID0gdGhpcy4kcmVmcy5mYXZvcml0ZS5uYXRpdmVWaWV3O1xyXG4gICAgICBpbWdMb2dvXHJcbiAgICAgICAgLmFuaW1hdGUoe1xyXG4gICAgICAgICAgc2NhbGU6IHtcclxuICAgICAgICAgICAgeDogMC42LFxyXG4gICAgICAgICAgICB5OiAwLjZcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBkdXJhdGlvbjogNTAsXHJcbiAgICAgICAgICBkZWxheTogMFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICByZXR1cm4gaW1nTG9nby5hbmltYXRlKHtcclxuICAgICAgICAgICAgc2NhbGU6IHtcclxuICAgICAgICAgICAgICB4OiAxLjIsXHJcbiAgICAgICAgICAgICAgeTogMS4yLFxyXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiA1MFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgcmV0dXJuIGltZ0xvZ28uYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHNjYWxlOiB7XHJcbiAgICAgICAgICAgICAgeDogMSxcclxuICAgICAgICAgICAgICB5OiAxLFxyXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihmdW5jdGlvbigpIHt9KTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGVIZWFydCgpIHtcclxuICAgICAgLy8gdG9nZ2xlIGlzRmF2b3JpdGVcclxuICAgICAgdGhpcy5hbmltYXRlRmF2b3JpdGUoKTtcclxuICAgICAgdGhpcy5pdGVtLmlzRmF2b3JpdGUgPSAhdGhpcy5pdGVtLmlzRmF2b3JpdGU7XHJcbiAgICB9XHJcbiAgfSxcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaW1hZ2VzOiBudWxsLFxyXG4gICAgICBpc0hlYXJ0OiBmYWxzZVxyXG4gICAgfTtcclxuICB9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG48c3R5bGUgc2NvcGVkPlxyXG4vKiBDU1MgKi9cclxuLmNsb3NlIHtcclxuICBmb250LXNpemU6IDIwO1xyXG4gIGNvbG9yOiByZ2IoMjI2LCAyMjksIDIyOSk7XHJcbiAgbWFyZ2luOiAxNSAwIDAgMTU7XHJcbn1cclxuXHJcblRleHRWaWV3IHtcclxuICBib3JkZXItd2lkdGg6IDE7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24tdGV4dCB7XHJcbiAgZm9udC1zaXplOiAxNDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbi1pY29uIHtcclxuICBmb250LXNpemU6IDE2O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjM2U5ZWRiO1xyXG4gIG1hcmdpbi1yaWdodDogODtcclxuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24tdmFsdWUge1xyXG4gIGZvbnQtc2l6ZTogMTQ7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIG1hcmdpbjogODtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uLXZhbHVlLmlzQXZhaWxhYmxlIHtcclxuICBjb2xvcjogZ3JlZW47XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uLXZhbHVlLmlzTm90QXZhaWxhYmxlIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkXHJcbn1cclxuXHJcbi5yYXRlIHtcclxuICBwYWRkaW5nLXRvcDogMztcclxuICBtYXJnaW46IDA7XHJcbiAgY29sb3I6ICNmZmU5MDA7XHJcbiAgZm9udC1zaXplOiAxODtcclxufVxyXG5cclxuLnJhdGluZy12YWx1ZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDU7XHJcbn1cclxuXHJcbi5saWtlZC1hY3RpdmUge1xyXG4gIGNvbG9yOiAjNDA4MGZmO1xyXG59XHJcblxyXG4uaGVhcnQtYWN0aXZlIHtcclxuICBjb2xvcjogI2I1MTIxMztcclxufVxyXG5cclxuLmRlZmF1bHQge1xyXG4gIGNvbG9yOiAjODI4MjgyO1xyXG59XHJcblxyXG4ubGF5b3V0IHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gIGNvbG9yOiAjODI4MjgyO1xyXG4gIGZvbnQtc2l6ZTogMTQ7XHJcbiAgaGVpZ2h0OiAzMDtcclxuICBwYWRkaW5nOiA1IDAgNSAwO1xyXG59XHJcblxyXG4ubGlrZS1pY29uIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gIGhlaWdodDogMzA7XHJcbiAgZm9udC1zaXplOiAxNjtcclxuICBtYXJnaW4tcmlnaHQ6IDI7XHJcbiAgcGFkZGluZzogNSA1IDUgNTtcclxufVxyXG5cclxuLml0ZW0tbmFtZSB7XHJcbiAgZm9udC1zaXplOiAxNDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLml0ZW0tY2F0ZWdvcnkge1xyXG4gIGZvbnQtc2l6ZTogMTQ7XHJcbiAgY29sb3I6ICM4MjgyODI7XHJcbn1cclxuXHJcbi5jYXRlZ29yeS1pY29uIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyNTtcclxuICBib3JkZXItd2lkdGg6IDE7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBtYXJnaW4tdG9wOiA0O1xyXG4gIG1hcmdpbi1yaWdodDogMTU7XHJcbiAgd2lkdGg6IDQwO1xyXG4gIGhlaWdodDogNDA7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBtYXJnaW4tbGVmdDogMTY7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNjtcclxuICBtYXJnaW4tYm90dG9tOiAzO1xyXG4gIC8qIG1hcmdpbi10b3A6IDE2OyAqL1xyXG59XHJcblxyXG4uY2FyZC1pbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjUwO1xyXG4gIG1hcmdpbi1ib3R0b206IDU7XHJcbn1cclxuXHJcbi5jYXJkLWltZy10aHVtYiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgMjMwLCAyMzApO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNTtcclxuICB3aWR0aDogMTMwO1xyXG4gIGhlaWdodDogNzA7XHJcbiAgbWFyZ2luLWxlZnQ6IDU7XHJcbn1cclxuXHJcbi5saW5lIHtcclxuICBoZWlnaHQ6IDAuNTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6ICNlMGUwZTA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcclxufVxyXG5cclxuLmxpbmVCcmVhayB7XHJcbiAgaGVpZ2h0OiAwLjU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiAjZTBlMGUwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XHJcbn1cclxuXHJcblxyXG4vKiBBbmltYXRpb25zICovXHJcbi5hbmltLXBhZ2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGQ2ZDg7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGtleS1wYWdlO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMjtcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGtleS1wYWdlIHtcclxuICAwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkYWRhO1xyXG4gIH1cclxuXHJcbiAgMjAlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYmQyZDU7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIH1cclxufVxyXG5cclxuLmFuaW0tY292ZXIge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGtleS1jb3ZlcjtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDE7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjU7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBrZXktY292ZXIge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA1NTApIHNjYWxlKDAsIDApO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XHJcbiAgfVxyXG5cclxuICAzMCUge1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDEsIDEpO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XHJcbiAgfVxyXG59XHJcblxyXG4uYW5pbS1pbWFnZXMge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGtleS1pbWFnZXM7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMC43O1xyXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XHJcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMga2V5LWltYWdlcyB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDU1MCkgc2NhbGUoMCwgMCk7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcclxuICB9XHJcblxyXG4gIDMwJSB7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSwgMSk7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcclxuICB9XHJcbn1cclxuXHJcbi5hbmltLWl0ZW1JbmZvIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBrZXktaXRlbUluZm87XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMS4yO1xyXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XHJcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMga2V5LWl0ZW1JbmZvIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAsIDUwKTtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcclxuICB9XHJcbn1cclxuXHJcbi5hbmltLWxpa2VzIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBrZXktbGlrZXM7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMS41O1xyXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XHJcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMga2V5LWxpa2VzIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAsIDUwKTtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcclxuICB9XHJcbn1cclxuXHJcbi5hbmltLWNvbnRlbnQge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGtleS1jb250ZW50O1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTtcclxuICBhbmltYXRpb24tZGVsYXk6IDEuODtcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGtleS1jb250ZW50IHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAsIDUwKTtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcclxuICB9XHJcbn1cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJtYWluXCI+XHJcblxyXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImNvbnRlbnRcIj5cclxuXHJcbiAgICAgICAgICAgIDxJbWFnZSBzdHJldGNoPVwiYXNwZWN0Rml0XCIgY2xhc3M9XCJjYXJkLWltZ1wiIEB0YXA9XCJvbkNsaWNrQnV0dG9uKClcIlxyXG4gICAgICAgICAgICAgICAgOnNyYz1cIml0ZW0uY292ZXJcIiAvPlxyXG4gICAgICAgICAgICA8R3JpZExheW91dCB3aWR0aD1cIjEwMCVcIiBjb2x1bW5zPVwiYXV0bywqXCIgcm93cz1cImF1dG8sYXV0b1wiIGNsYXNzPVwiXCJcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgQHRhcD1cIm9uQ2xpY2tCdXR0b24oKVwiPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8IS0tIEdlbmRlciAtLT5cclxuICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cImNhdGVnb3J5SWNvbiB8IGZvbnRpY29uXCIgcm93PVwiMFwiIGNvbD1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJvd1NwYW49XCIyXCIgOmJhY2tncm91bmRDb2xvcj1cIml0ZW0uY2F0ZWdvcnlUYWdcIiBjbGFzcz1cImZhIGNhdGVnb3J5LWljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS1OYW1lLCBhZ2UgLS0+ICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjBcIiBjb2w9XCIxXCIgY2xhc3M9XCJmYSBpdGVtLW5hbWVcIiB0ZXh0d3JhcD1cInRydWVcIiB2ZXJ0aWNhbEFsaWdubWVudD0gXCJjZW50ZXJcIiBob3Jpem9udGFsQWxpZ25tZW50PVwibGVmdFwiIDp0ZXh0PVwiaXRlbS5uYW1lICsgJywgJyArIGl0ZW0uYWdlXCIgIC8+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IHJvdz1cIjFcIiBjb2w9XCIxXCIgcm93cz1cImF1dG9cIiBjb2x1bW5zPVwiYXV0byxhdXRvLGF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiMFwiIGNvbD1cIjBcIiBjbGFzcz1cIml0ZW0tY2F0ZWdvcnlcIiB0ZXh0d3JhcD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudD1cImJvdHRvbVwiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJsZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOnRleHQ9XCJpdGVtLmNhdGVnb3J5XCIgLz5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxTdGFja0xheW91dCB3aWR0aD1cIjEwMCVcIiBtYXJnaW5Ub3A9XCI1XCIgY2xhc3M9XCJsaW5lXCIgLz5cclxuXHJcbiAgICAgICAgICAgIDwhLS0gQlVHOiBwcm9ibGVtIHdpdGggc2Nyb2xsIHRyYW5zaXN0aW9uIG9uIGlvcyBlbXVsYXRvciAtLT5cclxuICAgICAgICAgICAgPCEtLSA8SXRlbUxpa2UgOml0ZW09XCJpdGVtXCI+PC9JdGVtTGlrZT4gLS0+XHJcblxyXG4gICAgICAgICAgICA8R3JpZExheW91dCBjbGFzcz1cIlwiIG1hcmdpblRvcD1cIjVcIiB3aWR0aD1cIjEwMCVcIiByb3c9XCIzXCJcclxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPVwiKiwgYXV0bywgYXV0b1wiIHJvd3M9XCJhdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sPVwiMFwiIHJvd3M9XCJhdXRvXCIgY29sdW1ucz1cImF1dG8sYXV0b1wiIEB0YXA9XCJvbkNsaWNrQnV0dG9uKClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cIjBcIiByb3c9XCIwXCIgcmVmPVwiaW5mb1wiIGNsYXNzPVwibGlrZS1pY29uIGZhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp0ZXh0PVwiJ2ZhLWluZm8tY2lyY2xlJyB8IGZvbnRpY29uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cIjFcIiByb3c9XCIwXCIgY2xhc3M9XCJsYXlvdXRcIiA6dGV4dD1cIml0ZW0uYnJlZWRfZ3JvdXAgKyAnIC0gJyArIGl0ZW0ucHJpbWFyeV9icmVlZFwiPjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbD1cIjFcIiByb3dzPVwiYXV0b1wiIGNvbHVtbnM9XCJhdXRvLGF1dG9cIiBAdGFwPVwidG9nZ2xlSGVhcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodD1cIjE1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XCIwXCIgcm93PVwiMFwiIHJlZj1cImZhdm9yaXRlXCIgY2xhc3M9XCJsaWtlLWljb24gIGZhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIltpdGVtLmlzRmF2b3JpdGUgPyAnaGVhcnQtYWN0aXZlJyA6ICdkZWZhdWx0J11cIiA6dGV4dD1cIml0ZW0uaXNGYXZvcml0ZSA/ICdmYS1oZWFydCc6J2ZhLWhlYXJ0LW8nIHwgZm9udGljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVwiMVwiIHJvdz1cIjBcIiBjbGFzcz1cImxheW91dFwiIHRleHQ9XCJGYXZvcml0ZVwiPjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjb2w9XCIyXCIgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCByZWY9XCJcIiBjbGFzcz1cImxpa2UtaWNvbiBsYXlvdXQgZmFcIiA6dGV4dD1cIidmYS1zaGFyZS1zcXVhcmUtbycgfCBmb250aWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImxheW91dFwiIHRleHQ9XCJTaGFyZVwiPjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cclxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG5cclxuICAgICAgICA8U3RhY2tMYXlvdXQgd2lkdGg9XCIxMDAlXCIgY2xhc3M9XCJsaW5lQnJlYWtcIiAvPlxyXG5cclxuICAgIDwvU3RhY2tMYXlvdXQ+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4vLyBpbXBvcnQgSXRlbUxpa2UgZnJvbSBcIi4vaXRlbUxpa2VcIjtcclxuaW1wb3J0IHsgaXNJT1MsIGlzQW5kcm9pZCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBwcm9wczogW1wiaXRlbVwiXSxcclxuICBjb21wb25lbnRzOiB7XHJcbiAgICAvLyBJdGVtTGlrZVxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIGNhdGVnb3J5SWNvbigpIHtcclxuICAgICAgc3dpdGNoICh0aGlzLml0ZW0uZ2VuZGVyKSB7XHJcbiAgICAgICAgY2FzZSBcIk1cIjpcclxuICAgICAgICAgIHRoaXMuaXRlbS5jYXRlZ29yeVRhZyA9IFwiIzAwOTlmZlwiXHJcbiAgICAgICAgICByZXR1cm4gXCJmYS1tYXJzXCI7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiRlwiOlxyXG4gICAgICAgICAgdGhpcy5pdGVtLmNhdGVnb3J5VGFnID0gXCIjZmZjY2ZmXCJcclxuICAgICAgICAgIHJldHVybiBcImZhLXZlbnVzXCI7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgcmV0dXJuIFwiZmEtZmlyZVwiO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGNyZWF0ZWQoKSB7XHJcbiAgICAvLyB0aGlzLmlzTGlrZSA9ICB0aGlzLml0ZW0uaXNMaWtlXHJcbiAgICAvLyB0aGlzLmlzSGVhcnQgPSAgdGhpcy5pdGVtLmlzRmF2b3JpdGVcclxuICB9LFxyXG4gIG1vdW50ZWQoKSB7fSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBhbmltYXRlRmF2b3JpdGUoKSB7XHJcbiAgICAgIGlmIChpc0lPUykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBsZXQgaW1nTG9nbyA9IHRoaXMuJHJlZnMuZmF2b3JpdGUubmF0aXZlVmlldztcclxuICAgICAgaW1nTG9nb1xyXG4gICAgICAgIC5hbmltYXRlKHtcclxuICAgICAgICAgIHNjYWxlOiB7XHJcbiAgICAgICAgICAgIHg6IDAuNixcclxuICAgICAgICAgICAgeTogMC42XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZHVyYXRpb246IDUwLFxyXG4gICAgICAgICAgZGVsYXk6IDBcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgcmV0dXJuIGltZ0xvZ28uYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHNjYWxlOiB7XHJcbiAgICAgICAgICAgICAgeDogMS4yLFxyXG4gICAgICAgICAgICAgIHk6IDEuMixcclxuICAgICAgICAgICAgICBkdXJhdGlvbjogNTBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHJldHVybiBpbWdMb2dvLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBzY2FsZToge1xyXG4gICAgICAgICAgICAgIHg6IDEsXHJcbiAgICAgICAgICAgICAgeTogMSxcclxuICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7fSk7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlSGVhcnQoKSB7XHJcbiAgICAgIHRoaXMuYW5pbWF0ZUZhdm9yaXRlKCk7XHJcbiAgICAgIHRoaXMuaXRlbS5pc0Zhdm9yaXRlID0gIXRoaXMuaXRlbS5pc0Zhdm9yaXRlO1xyXG4gICAgfSxcclxuICAgIG9uQ2xpY2tCdXR0b24oKSB7XHJcbiAgICAgIHRoaXMuJGVtaXQoXCJjbGlja2VkXCIsIHRoaXMuaXRlbSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaXNMaWtlOiBmYWxzZSxcclxuICAgICAgaXNIZWFydDogZmFsc2VcclxuICAgIH07XHJcbiAgfVxyXG59O1xyXG48L3NjcmlwdD5cclxuPHN0eWxlIHNjb3BlZD5cclxuLml0ZW0tY2F0ZWdvcnkge1xyXG4gIGZvbnQtc2l6ZTogMTQ7XHJcbiAgY29sb3I6ICM4MjgyODI7XHJcbn1cclxuXHJcbi5nZW5kZXItaWNvbiB7XHJcbiAgcGFkZGluZy10b3A6IDM7XHJcbiAgcGFkZGluZy1yaWdodDogMztcclxuICBmb250LXNpemU6IDE2O1xyXG4gIG1hcmdpbi1yaWdodDogMTA7XHJcbn1cclxuXHJcbi5pbmZvLWljb24ge1xyXG4gIHBhZGRpbmctdG9wOiAzO1xyXG4gIHBhZGRpbmctbGVmdDogMztcclxuICBjb2xvcjogZ3JheTtcclxuICBmb250LXNpemU6IDE0O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMDtcclxufVxyXG5cclxuLnJhdGluZy12YWx1ZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDU7XHJcbn1cclxuXHJcbi5saWtlZC1hY3RpdmUge1xyXG4gIGNvbG9yOiAjNDA4MGZmO1xyXG59XHJcblxyXG4uaGVhcnQtYWN0aXZlIHtcclxuICBjb2xvcjogI2I1MTIxMztcclxufVxyXG5cclxuLmRlZmF1bHQge1xyXG4gIGNvbG9yOiAjODI4MjgyO1xyXG59XHJcblxyXG5cclxuLmxheW91dCB7XHJcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICBjb2xvcjogIzgyODI4MjtcclxuICBmb250LXNpemU6IDE0O1xyXG4gIGhlaWdodDogMzA7XHJcbiAgcGFkZGluZzogNSAwIDUgMDtcclxufVxyXG5cclxuLmxpa2UtaWNvbiB7XHJcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICBoZWlnaHQ6IDMwO1xyXG4gIGZvbnQtc2l6ZTogMTY7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyO1xyXG4gIHBhZGRpbmc6IDUgNSA1IDU7XHJcbn1cclxuXHJcbi5pdGVtLW5hbWUge1xyXG4gIGZvbnQtc2l6ZTogMTQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDI7XHJcbn1cclxuXHJcbi5pdGVtLWNhdGVnb3J5IHtcclxuICBmb250LXNpemU6IDE0O1xyXG4gIGNvbG9yOiAjODI4MjgyO1xyXG59XHJcblxyXG4uY2F0ZWdvcnktaWNvbiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiA1O1xyXG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDI1O1xyXG4gIGJvcmRlci13aWR0aDogMTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgbWFyZ2luLXRvcDogNDtcclxuICBtYXJnaW4tcmlnaHQ6IDE1O1xyXG4gIHdpZHRoOiA0MDtcclxuICBoZWlnaHQ6IDQwO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE2O1xyXG4gIG1hcmdpbi1yaWdodDogMTY7XHJcbiAgbWFyZ2luLWJvdHRvbTogMztcclxuICBtYXJnaW4tdG9wOiAxNjtcclxufVxyXG5cclxuLmNhcmQtaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDE1MDtcclxuICBtYXJnaW4tYm90dG9tOiA1O1xyXG59XHJcblxyXG4ubGluZSB7XHJcbiAgaGVpZ2h0OiAwLjU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiAjZTBlMGUwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XHJcbn1cclxuXHJcbi5saW5lQnJlYWsge1xyXG4gIGhlaWdodDogNztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6ICNlMGUwZTA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcclxufVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuXHJcbiAgICA8R3JpZExheW91dCByb3dzPVwiKlwiIGNvbHVtbnM9XCIqXCI+XHJcbiAgICAgICAgPEltYWdlIGhlaWdodD1cIjE1MFwiIHdpZHRoPVwiMTAwJVwiIG1hcmdpbkJvdHRvbT1cIjEwXCIgc3RyZXRjaD1cImFzcGVjdEZpbGxcIlxyXG4gICAgICAgICAgICA6c3JjPVwiaXRlbS5jb3ZlclwiIC8+IC8+XHJcbiAgICAgICAgPEdyaWRMYXlvdXQgdmVydGljYWxBbGlnbm1lbnQ9XCJib3R0b21cIj5cclxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiYmFubmVyMlwiIGJhY2tncm91bmRDb2xvcj1cIiM0ODllOWU5ZVwiPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiaXRlbS5jYXRlZ29yeSArICcgKCcgKyAgaXRlbS5jb3VudCAgKyAgJyknXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNhdGVnb3J5LW5hbWUgIG0tYi0xMCBtLXQtMTBcIiB0ZXh0d3JhcD1cInRydWVcIj48L0xhYmVsPlxyXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgIDwvR3JpZExheW91dD5cclxuICAgIDwvR3JpZExheW91dD5cclxuXHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgcHJvcHM6IFtcIml0ZW1cIl0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBvbkNsaWNrQnV0dG9uKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoXCJjbGlja2VkXCIsIGRhdGEuaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge307XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuPC9zY3JpcHQ+XHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgICAuZGVmYXVsdC1pbWcge1xyXG4gICAgICAgIGNvbG9yOiAjZDFjZWNlNWI7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhdGVnb3J5LW5hbWUge1xyXG4gICAgICAgIGNvbG9yOiAjZjdmN2Y3O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiA1IDAgMTUgMFxyXG4gICAgfVxyXG5cclxuICAgIC5iYW5uZXIge1xyXG4gICAgICAgIGNvbG9yOiAjYmRiZGJkO1xyXG4gICAgICAgIG9wYWNpdHk6IC4zO1xyXG4gICAgfVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuPFN0YWNrTGF5b3V0PlxyXG4gIDxJbWFnZSB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiIDpzcmM9XCJzcmNcIiBzdHJldGNoPVwiYXNwZWN0Rml0XCIgaGVpZ2h0PVwiMTEwXCIgaW9zOmhlaWdodD1cIjEyMFwiIGNsYXNzPVwiaW1hZ2VcIiBAdGFwPVwiYWN0aW9uXCIgLz5cclxuICA8QnV0dG9uIHZlcnRpY2FsQWxpZ25tZW50PVwiYm90dG9tXCIgY2xhc3M9XCJidXR0b25cIiA6dGV4dD1cImAke2ljb259ICR7dGl0bGV9YFwiIEB0YXA9XCJhY3Rpb25cIiAvPlxyXG48L1N0YWNrTGF5b3V0PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBpY29uOiBTdHJpbmcsXHJcbiAgICAgIHRpdGxlOiBTdHJpbmcsXHJcbiAgICAgIGFjdGlvbjogRnVuY3Rpb24sXHJcbiAgICAgIHNyYzogU3RyaW5nXHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblxyXG4vKiBidXR0b24gb24gYW5kcm9pZCBpcyBzdHlsZWQgd2l0aCBkZWZhdWx0IHNldHRpbmcgd2hlbiBib3JkZXIgcmFkaXVzIGlzIG9taXR0ZWQqL1xyXG4uYnV0dG9ue1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1JTtcclxufVxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcbjxTdGFja0xheW91dD5cclxuICA8QnV0dG9uIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgY2xhc3M9XCJidXR0b25cIiA6dGV4dD1cImAke3RpdGxlfSAke2ljb259IGBcIiBAdGFwPVwiYWN0aW9uXCIgLz5cclxuPC9TdGFja0xheW91dD5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgaWNvbjogU3RyaW5nLFxyXG4gICAgICB0aXRsZTogU3RyaW5nLFxyXG4gICAgICBhY3Rpb246IEZ1bmN0aW9uLFxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cclxuLyogYnV0dG9uIG9uIGFuZHJvaWQgaXMgc3R5bGVkIHdpdGggZGVmYXVsdCBzZXR0aW5nIHdoZW4gYm9yZGVyIHJhZGl1cyBpcyBvbWl0dGVkKi9cclxuLmJ1dHRvbntcclxuICBib3JkZXItcmFkaXVzOiAyNSU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxQYWdlIGNsYXNzPVwicGFnZVwiPlxyXG4gICAgICAgIDxBY3Rpb25CYXIgY2xhc3M9XCJhY3Rpb24tYmFyXCI+XHJcbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uIEB0YXA9XCIkbmF2aWdhdGVCYWNrKClcIiBhbmRyb2lkLnN5c3RlbUljb249XCJpY19tZW51X2JhY2tcIiAvPlxyXG4gICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJhY3Rpb24tYmFyLXRpdGxlXCIgOnRleHQ9XCJBbmltYWxDZW50ZXIubmFtZVwiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiAvPj5cclxuICAgICAgICA8L0FjdGlvbkJhcj5cclxuXHJcbiAgICAgICAgPFNjcm9sbFZpZXc+XHJcbiAgICAgICAgICAgIDxTdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgIDwhLS0gQW5pbWFsIENlbnRlciBjb3ZlciBwaWMgLS0+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2UgOnNyYz1cIkFuaW1hbENlbnRlci5pbWFnZVVSTFwiIHN0cmV0Y2g9XCJhc3BlY3RGaXRcIiBoZWlnaHQ9XCIyMDBcIiBjbGFzcz1cImFuaW0tY292ZXIgbS1iLTE1XCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiMVwiIGNsYXNzPVwiaHItbGlnaHQgbS10LTE1IG0tYi0xNVwiLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCByb3dzPVwiKiwgKiwgKiwgYXV0b1wiIGNvbHVtbnM9XCJhdXRvLCpcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBuYW1lIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSByb3c9XCIwXCIgY29sPVwiMFwiIGNsYXNzPVwiYW5pbS1jb250ZW50MSBwLWwtMTUgcC1iLTEwIG0tci0yMFwiIHNyYz1cIn4vYXNzZXRzL2ltYWdlcy9hY2hvdXNlLnBuZ1wiIHN0cmV0Y2g9XCJhc3BlY3RGaXRcIiBoZWlnaHQ9XCI0MFwiIHdpZHRoPVwiNDBcIiBsb2FkTW9kZT1cImFzeW5jXCIgbWFyZ2luPVwiM1wiLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiMFwiIGNvbD1cIjFcIiAgY2xhc3M9XCJhbmltLWNvbnRlbnQxIHRleHQgcC1iLTEwIGZvbnQtd2VpZ2h0LWJvbGQgdGl0bGUgc3RhY2tcIiBtYXJnaW49XCI1XCIgdGV4dFdyYXA9XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiA6dGV4dD1cIkFuaW1hbENlbnRlci5uYW1lICsgJyBBbmltYWwgQ2FyZSBDZW50ZXInXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gYWRkcmVzcyAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugcm93PVwiMVwiIGNvbD1cIjBcIiBjbGFzcz1cImFuaW0tY29udGVudDIgcC1sLTE1IHAtYi0xMCBtLXItMjBcIiAgc3JjPVwifi9hc3NldHMvaW1hZ2VzL2xvY2F0aW9uaWNvbi5wbmdcIiBzdHJldGNoPVwiYXNwZWN0Rml0XCIgaGVpZ2h0PVwiNDBcIiB3aWR0aD1cIjQwXCIgbG9hZE1vZGU9XCJhc3luY1wiIG1hcmdpbj1cIjNcIi8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIxXCIgY29sPVwiMVwiIGNsYXNzPVwiYW5pbS1jb250ZW50MiBwLWItMTAgc3RhY2tcIiBtYXJnaW49XCI1XCIgQHRhcD1cIm9uQWRkcmVzc1RhcFwiIHRleHRXcmFwPVwidHJ1ZVwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuICBjbGFzcz1cImZhIHRleHQtcHJpbWFyeVwiIDp0ZXh0PVwiQW5pbWFsQ2VudGVyLmFkZHJlc3NcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gcGhvbmUgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHJvdz1cIjJcIiBjb2w9XCIwXCIgY2xhc3M9XCJhbmltLWNvbnRlbnQzIHAtbC0xNSBwLWItMTAgbS1yLTIwXCIgIHNyYz1cIn4vYXNzZXRzL2ltYWdlcy9waG9uZWljb24ucG5nXCIgc3RyZXRjaD1cImFzcGVjdEZpdFwiIGhlaWdodD1cIjQwXCIgd2lkdGg9XCI0MFwiIGxvYWRNb2RlPVwiYXN5bmNcIiBtYXJnaW49XCIzXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIyXCIgY29sPVwiMVwiIGNsYXNzPVwiYW5pbS1jb250ZW50MyBmYSB0ZXh0LXByaW1hcnkgcC1iLTEwIHN0YWNrXCIgOnRleHQ9XCJBbmltYWxDZW50ZXIucGhvbmVcIiBAdGFwPVwib25QaG9uZVRhcFwiIG1hcmdpbj1cIjVcIiAgLz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8IS0tIGhvdXJzIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSByb3c9XCIzXCIgY29sPVwiMFwiIGNsYXNzPVwiYW5pbS1jb250ZW50NCBwLWwtMTUgcC1iLTEwIG0tci0yMFwiIHNyYz1cIn4vYXNzZXRzL2ltYWdlcy9ob3Vyc2ljb24ucG5nXCIgc3RyZXRjaD1cImFzcGVjdEZpdFwiIGhlaWdodD1cIjQwXCIgd2lkdGg9XCI0MFwiIGxvYWRNb2RlPVwiYXN5bmNcIiBtYXJnaW49XCIzXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IHJvdz1cIjNcIiBjb2w9XCIxXCIgY29sdW1ucz1cIiosICpcIiByb3dzPVwiYXV0bywgYXV0b1wiIGNsYXNzPVwiYW5pbS1jb250ZW50NCBzdGFjay1ob3Vyc1wiICBtYXJnaW49XCI1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIwXCIgY29sPVwiMFwiIGNsYXNzPVwiaG91cnNcIiA6dGV4dD1cIkFuaW1hbENlbnRlci5hdmFpbGFiaWxpdHkud2Vla2RheVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIwXCIgY29sPVwiMVwiIGNsYXNzPVwiaG91cnNcIiA6dGV4dD1cIkFuaW1hbENlbnRlci5hdmFpbGFiaWxpdHkud2Vla2RheWhvdXJzXCIgIHRleHRXcmFwPVwidHJ1ZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjFcIiBjb2w9XCIwXCIgY2xhc3M9XCJob3Vyc1wiIDp0ZXh0PVwiQW5pbWFsQ2VudGVyLmF2YWlsYWJpbGl0eS53ZWVrZW5kXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjFcIiBjb2w9XCIxXCIgY2xhc3M9XCJob3Vyc1wiIDp0ZXh0PVwiQW5pbWFsQ2VudGVyLmF2YWlsYWJpbGl0eS53ZWVrZW5kaG91cnNcIiAgdGV4dFdyYXA9XCJ0cnVlXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cclxuXHJcbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgPC9TY3JvbGxWaWV3PlxyXG4gICAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuLy8gLS0tcGx1Z2lucy0tLVxyXG4vLyBwaG9uZVxyXG52YXIgcGhvbmUgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBob25lXCIpO1xyXG5cclxuLy8gZGlyZWN0aW9uc1xyXG52YXIgRGlyZWN0aW9ucyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtZGlyZWN0aW9uc1wiKS5EaXJlY3Rpb25zO1xyXG5sZXQgZGlyZWN0aW9ucyA9IG5ldyBEaXJlY3Rpb25zKCk7XHJcbi8vLS0tLS0tLVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHByb3BzOiBbXCJBbmltYWxDZW50ZXJcIl0sXHJcblxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICBhbmltYWxDZW50ZXJEYXRhKCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImFuaW1hbENlbnRlckRhdGEoKSwgcmV0dXJuaW5nIGRhdGE6IFwiICsgdGhpcy5BbmltYWxDZW50ZXIpO1xyXG4gICAgICByZXR1cm4gdGhpcy5BbmltYWxDZW50ZXIgfHwge307XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgbWV0aG9kczoge1xyXG4gICAgb25BZGRyZXNzVGFwKCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICBcIm9uQWRkcmVzc1RhcCgpLCBnZXQgZGlyZWN0aW9ucyB0byBcIiArIHRoaXMuQW5pbWFsQ2VudGVyLmFkZHJlc3NcclxuICAgICAgKTtcclxuXHJcbiAgICAgIC8vIG11c3QgcGFzcyBpbiBzdHJpbmcgYXMgdmFyaWFibGUgb3RoZXJ3aXNlIGl0IGRpcmVjdGlvbnMubmF2aWdhdGUoKSB3b24ndCB3b3JrXHJcbiAgICAgIGNvbnN0IGFkZHJlc3MgPSB0aGlzLkFuaW1hbENlbnRlci5hZGRyZXNzO1xyXG5cclxuICAgICAgZGlyZWN0aW9ucy5hdmFpbGFibGUoKS50aGVuKGZ1bmN0aW9uKGF2YWlsKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhhdmFpbCA/IFwiWWVzXCIgOiBcIk5vXCIpO1xyXG4gICAgICAgIGlmIChhdmFpbCkge1xyXG4gICAgICAgICAgZGlyZWN0aW9uc1xyXG4gICAgICAgICAgICAubmF2aWdhdGUoe1xyXG4gICAgICAgICAgICAgIHRvOiB7XHJcbiAgICAgICAgICAgICAgICAvLyBlaXRoZXIgcGFzcyBpbiBhIHNpbmdsZSBvYmplY3Qgb3IgYW4gQXJyYXlcclxuICAgICAgICAgICAgICAgIGFkZHJlc3M6IGFkZHJlc3NcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJNYXBzIGFwcCBsYXVuY2hlZC5cIik7XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBmdW5jdGlvbihlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIG9uUGhvbmVUYXAoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwib25QaG9uZVRhcCgpLCBjYWxsIFwiICsgdGhpcy5BbmltYWxDZW50ZXIucGhvbmUpO1xyXG4gICAgICBwaG9uZS5kaWFsKHRoaXMuQW5pbWFsQ2VudGVyLnBob25lLCB0cnVlKTtcclxuICAgIH0sXHJcbiAgICBcclxuICB9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxyXG5AaW1wb3J0IFwiQC9BbmltYWxDZW50ZXJcIjtcclxuXHJcbi8vLS0tIDxhbmltYXRpb24+IC0tLVxyXG5cclxuLy8gY292ZXIgaW1hZ2VcclxuLmFuaW0tY292ZXIge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGtleS1jb3ZlcjtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDE7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjU7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBrZXktY292ZXIge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxMDApIHNjYWxlKDAsIDApO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XHJcbiAgfVxyXG5cclxuICAzMCUge1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDEsIDEpO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBpY29ucyAmIGNvbnRlbnRcclxuLmFuaW0tY29udGVudDEge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGtleS1jb250ZW50O1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTtcclxuICBhbmltYXRpb24tZGVsYXk6IDAuNzU7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcclxufVxyXG5cclxuLmFuaW0tY29udGVudDIge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGtleS1jb250ZW50O1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTtcclxuICBhbmltYXRpb24tZGVsYXk6IDEuMDtcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xyXG59XHJcblxyXG4uYW5pbS1jb250ZW50MyB7XHJcbiAgb3BhY2l0eTogMDtcclxuICBhbmltYXRpb24tbmFtZToga2V5LWNvbnRlbnQ7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMS4yNTtcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xyXG59XHJcblxyXG4uYW5pbS1jb250ZW50NCB7XHJcbiAgb3BhY2l0eTogMDtcclxuICBhbmltYXRpb24tbmFtZToga2V5LWNvbnRlbnQ7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMS41O1xyXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XHJcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XHJcbn1cclxuXHJcblxyXG5Aa2V5ZnJhbWVzIGtleS1jb250ZW50IHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAsIDUwKTtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcclxuICB9XHJcbn1cclxuLy8tLS0gPC9hbmltYXRpb24+IC0tLVxyXG5cclxuXHJcbi8vLS0tIGNzcyAtLS1cclxuXHJcbi50aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxOGVtO1xyXG4gIGNvbG9yOiAkbWlkbmlnaHQtZGFyaztcclxuXHJcbn1cclxuXHJcbi5zdGFjayB7XHJcbiAgcGFkZGluZy10b3A6IDE0O1xyXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDE7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiKDIxMiwgMjEyLCAyMTIpO1xyXG59XHJcblxyXG4uc3RhY2staG91cnMge1xyXG4gIHBhZGRpbmctdG9wOiA2O1xyXG59XHJcblxyXG4uaG91cnMge1xyXG4gIGNvbG9yOiAkYmx1ZS1kYXJrO1xyXG5cclxufVxyXG5cclxuQWN0aW9uQmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5ZmNhO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiPlxyXG4gICAgPExhYmVsIGNsYXNzPVwiaG9tZXBhZ2UtYmx1ZSB0ZXh0LXByaW1hcnkgbGlzdC1ncm91cC1pdGVtLXRleHQgZm9udC13ZWlnaHQtYm9sZFwiIHRleHRXcmFwPVwidHJ1ZVwiPlxyXG4gICAgPEZvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICA8U3BhbiA6dGV4dD1cIml0ZW0ucXVlcnlcIi8+XHJcbiAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgPC9MYWJlbD5cclxuICAgIFxyXG4gICAgPExhYmVsIGNsYXNzPVwiLmZhcV9hbnN3ZXIgLmxpc3QtZ3JvdXAtaXRlbS1jb250ZW50XCIgdGV4dFdyYXA9XCJ0cnVlXCI+XHJcbiAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgPFNwYW4gdGV4dC5kZWNvZGU9XCImIzk7XCIvPlxyXG4gICAgICAgIDxTcGFuIDp0ZXh0PVwiaXRlbS5hbnN3ZXJcIi8+XHJcbiAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgPC9MYWJlbD5cclxuIFxyXG4gIDwvU3RhY2tMYXlvdXQ+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcHJvcHM6IHtcclxuICAgIGl0ZW06IE9iamVjdFxyXG4gIH1cclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XHJcbkBpbXBvcnQgXCJAL0FuaW1hbENlbnRlclwiO1xyXG5cclxuLmZhcV9xdWVzdGlvbiB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAyMDtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLmZhcV9hbnN3ZXIge1xyXG4gIGNvbG9yOiAjNDU0NTQ1O1xyXG59XHJcblxyXG4ubGlzdC1ncm91cC1pdGVtLXRleHQge1xyXG4gIG1hcmdpbjogMiAzO1xyXG59XHJcbi5saXN0LWdyb3VwLWl0ZW0tY29udGVudCB7XHJcbiAgcGFkZGluZzogOCAxNSA0IDE1O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWxpZ2h0O1xyXG59XHJcblxyXG4uaG9tZXBhZ2UtYmx1ZSB7XHJcbiAgY29sb3I6ICRob21lcGFnZS1ibHVlO1xyXG59XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuXHQ8cGFnZSBhY3Rpb25CYXJIaWRkZW49XCJmYWxzZVwiIGJhY2tncm91bmRTcGFuVW5kZXJTdGF0dXNCYXI9XCJ0cnVlXCI+XHJcblx0XHQ8IS0tIEBsb2FkZWQ9XCJvbkxvYWRlZFwiIC0tPlxyXG4gICAgICAgIDxBY3Rpb25CYXIgY2xhc3M9XCJhY3Rpb25iYXIgbmF2VGFiXCI+XHJcbiAgICAgICAgICAgPE5hdmlnYXRpb25CdXR0b24gQHRhcD1cIiRuYXZpZ2F0ZUJhY2soKVwiIGFuZHJvaWQuc3lzdGVtSWNvbj1cImljX21lbnVfYmFja1wiIC8+XHJcbiAgICAgICAgICAgIDxMYWJlbCBmb250U2l6ZT1cIjE4XCIgdGV4dD1cIkFuaW1hbHMgZm9yIEFkb3B0aW9uXCI+PC9MYWJlbD5cclxuICAgICAgICA8L0FjdGlvbkJhcj5cclxuXHJcblx0XHQ8R3JpZExheW91dCByb3dzPVwiYXV0byxhdXRvLCpcIiBjb2x1bW5zPVwiYXV0b1wiPlxyXG5cclxuPCEtLW5hdiB0YWItLT5cclxuXHJcblx0XHRcdDxHcmlkTGF5b3V0ICByb3c9XCIxXCIgcmVmPVwibmF2VGFiXCIgY2xhc3M9XCJuYXZUYWJcIiB2ZXJ0aWNhbEFsaWdubWVudD1cInRvcFwiIGhlaWdodD1cIjUwXCJcclxuXHRcdFx0XHRcdHdpZHRoPVwiMTAwJVwiICByb3dzPVwiYXV0b1wiIGNvbHVtbnM9XCJhdXRvLGF1dG9cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwhLS1hY3RpdmUgY2xhc3MgdGFiIG5hdmlnYXRpb24qKioqLS0+XHJcblx0XHRcdFx0XHQ8R3JpZExheW91dCBjbGFzcz1cInRhYnZpZXdcIiA6Y2xhc3M9XCJzZWxlY3RlZFRhYnZpZXc9PTA/J2FjdGl2ZSc6JydcIlxyXG5cdFx0XHRcdFx0XHRcdEB0YXA9XCJhZG9wdGlvbkxpc3RcIiByb3dzPVwiKixhdXRvXCIgY29scz1cImF1dG9cIiBjb2w9XCIwXCIgcm93PVwiMFwiXHJcblx0XHRcdFx0XHRcdFx0d2lkdGg9XCI1MCVcIj5cclxuXHJcblx0XHRcdFx0XHRcdFx0PExhYmVsIHYtc2hvdz1cInNlbGVjdGVkVGFidmlldz09MFwiIHJvdz1cIjBcIiBjbGFzcz1cImZhIG5hdkljb25cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ6dGV4dD1cInNlbGVjdGVkVGFidmlldz09MD8nZmEtcGF3JzonJyB8IGZvbnRpY29uXCIvPlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8TGFiZWwgaG9yaXpvbnRhbEFsaWdubWVudD1cImNlbnRlclwiIDpjbGFzcz1cInNlbGVjdGVkVGFidmlldz09MD8nYWN0aXZlJzonJ1wiIHJvdz1cIjFcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0ZXh0PVwiQW5pbWFsc1wiIGNsYXNzPVwidGFidmlld1RleHRcIj48L0xhYmVsPlxyXG5cclxuXHRcdFx0XHRcdDwvR3JpZExheW91dD5cclxuXHJcblx0XHRcdFx0XHQ8R3JpZExheW91dCBjbGFzcz1cInRhYnZpZXdcIiA6Y2xhc3M9XCJzZWxlY3RlZFRhYnZpZXc9PTE/J2FjdGl2ZSc6JydcIlxyXG5cdFx0XHRcdFx0XHRcdEB0YXA9XCJzaG93Q2F0ZWdvcnlcIiByb3dzPVwiKixhdXRvXCIgY29scz1cImF1dG9cIiBjb2w9XCIxXCIgcm93PVwiMFwiXHJcblx0XHRcdFx0XHRcdFx0d2lkdGg9XCI1MCVcIj5cclxuXHJcblx0XHRcdFx0XHRcdFx0PExhYmVsIHYtc2hvdz1cInNlbGVjdGVkVGFidmlldz09MVwiIHJvdz1cIjBcIiBjbGFzcz1cImZhIG5hdkljb25cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ6dGV4dD1cInNlbGVjdGVkVGFidmlldz09MT8nZmEtZmlsdGVyJzonJyB8IGZvbnRpY29uXCIvPlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8TGFiZWwgOmNsYXNzPVwic2VsZWN0ZWRUYWJ2aWV3PT0xPydhY3RpdmUnOicnXCIgcm93PVwiMVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdHRleHQ9XCJGaWx0ZXJcIiBob3Jpem9udGFsQWxpZ25tZW50PVwiY2VudGVyXCIgY2xhc3M9XCJ0YWJ2aWV3VGV4dFwiPjwvTGFiZWw+XHRcdFx0XHRcdFx0XHJcblxyXG5cdFx0XHRcdFx0PC9HcmlkTGF5b3V0PlxyXG5cdFx0XHRcdFx0PCEtLSBlbmQgbmF2LS0+XHJcblx0XHRcdDwvR3JpZExheW91dD5cclxuXHJcbjwhLS1zZWxlY3RlZCB0YWIgc2V0IHRvIHZpZXcgYW5pbWFsIC0tPlxyXG48IS0taXRlbSAtLT5cclxuXHRcdFx0PEdyaWRMYXlvdXQgdi1zaG93PVwic2VsZWN0ZWRUYWJ2aWV3ID09IDBcIiByb3c9XCIyXCIgd2lkdGg9XCIxMDAlXCIgYmFja2dyb3VuZENvbG9yPVwid2hpdGVcIj5cclxuPCEtLVRPRE86IENIQU5HRSA6S0VZIFRPIERJRkZFUkVOVCBWQUxVRSAtLT5cclxuPCEtLSBWVUUgV0FSTklORzogRHVwbGljYXRlIGtleXMgZGV0ZWN0ZWQ6ICdbb2JqZWN0IE9iamVjdF0nLiBUaGlzIG1heSBjYXVzZSBhbiB1cGRhdGUgZXJyb3IuIGZvdW5kIGluIDxBZG9wdGlvbkFuaW1hbERldGFpbHM+IC0tPlxyXG5cdFx0XHRcdDxMaXN0VmlldyByZWY9XCJsaXN0dmlld1wiIHNlcGFyYXRvckNvbG9yPVwidHJhbnNwYXJlbnRcIiBmb3I9XCJpdGVtIGluIGl0ZW1zXCIgOmtleT1cImluZGV4XCI+XHJcblxyXG5cdFx0XHRcdFx0PHYtdGVtcGxhdGU+XHJcblx0XHRcdFx0XHRcdDxpdGVtIDppdGVtPVwiaXRlbVwiIEBjbGlja2VkPVwic2hvd0l0ZW0oaXRlbSlcIiAvPlxyXG5cdFx0XHRcdFx0PC92LXRlbXBsYXRlPlxyXG5cclxuXHRcdFx0XHQ8L0xpc3RWaWV3PlxyXG5cdFx0XHQ8L0dyaWRMYXlvdXQ+XHJcblxyXG48IS0tc2VsZWN0ZWQgdGFiIHZpZXcgZmlsdGVyIC0tPlxyXG5cdFx0XHQ8R3JpZExheW91dCB2LXNob3c9XCJzZWxlY3RlZFRhYnZpZXcgPT0gMVwiIHJvdz1cIjJcIiB3aWR0aD1cIjEwMCVcIiBiYWNrZ3JvdW5kQ29sb3I9XCJ3aGl0ZVwiPlx0XHRcclxuXHJcblx0XHRcdFx0PFJhZExpc3RWaWV3IHJlZj1cImxpc3R2aWV3XCIgc2VwYXJhdG9yQ29sb3I9XCJ0cmFuc3BhcmVudFwiIGZvcj1cIml0ZW0gaW4gaXRlbXNDYXRlZ29yeVwiIDprZXk9XCJpbmRleFwiPlxyXG5cclxuXHRcdFx0XHRcdDx2LXRlbXBsYXRlPlxyXG5cdFx0XHRcdFx0XHQ8Q2F0ZWdvcnkgOml0ZW09XCJpdGVtXCI+IDwvQ2F0ZWdvcnk+XHJcblx0XHRcdFx0XHQ8L3YtdGVtcGxhdGU+XHJcbiAgICAgICAgICBcclxuXHRcdFx0XHQ8L1JhZExpc3RWaWV3PlxyXG5cdFx0XHQ8L0dyaWRMYXlvdXQ+XHJcblxyXG5cdFx0PC9HcmlkTGF5b3V0PlxyXG48L3BhZ2U+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcbi8vIGltcG9ydCB7IFN3aXNzQXJteUtuaWZlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1zd2lzcy1hcm15LWtuaWZlXCI7XHJcbmltcG9ydCB7IGlzSU9TLCBpc0FuZHJvaWQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xyXG4vLyBpbXBvcnQgbmF2Qm90dG9tIGZyb20gXCIuL2N1c3RvbS9uYXZCb3R0b21cIjtcclxuaW1wb3J0IEl0ZW0gZnJvbSBcIkAvY29tcG9uZW50cy9hZG9wdGlvbi9BbmltYWxDYXJkXCI7XHJcbmltcG9ydCBDYXRlZ29yeSBmcm9tIFwiQC9jb21wb25lbnRzL2Fkb3B0aW9uL2NhdGVnb3J5XCI7XHJcbmltcG9ydCBJdGVtRGV0YWlscyBmcm9tIFwiQC9jb21wb25lbnRzL2Fkb3B0aW9uL0Fkb3B0aW9uQW5pbWFsRGV0YWlsc1wiO1xyXG5cclxuY29uc3QgZ2VzdHVyZXMgPSByZXF1aXJlKFwidWkvZ2VzdHVyZXNcIik7XHJcbmNvbnN0IGFwcCA9IHJlcXVpcmUoXCJhcHBsaWNhdGlvblwiKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBjb21wb25lbnRzOiB7XHJcbiAgICAvLyBuYXZCb3R0b20sXHJcbiAgICBJdGVtLFxyXG4gICAgQ2F0ZWdvcnlcclxuICB9LFxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICBpdGVtc0NhdGVnb3J5KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5jYXRlZ29yeS5zbGljZSgpLnJldmVyc2UoKTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBtb3VudGVkKCkge1xyXG4gICAgLy8gU3dpc3NBcm15S25pZmUuc2V0QW5kcm9pZFN0YXR1c0JhckNvbG9yKFwiI2I1MTIxM1wiKTtcclxuICB9LFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBsYXN0RGVsWTogMCxcclxuICAgICAgaGVhZGVyQ29sbGFwc2VkOiBmYWxzZSxcclxuICAgICAgc2VsZWN0ZWRUYWI6IDAsXHJcbiAgICAgIHNlbGVjdGVkVGFidmlldzogMCxcclxuICAgICAgaXRlbXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIlR3aW5raWVcIixcclxuICAgICAgICAgIGNvdmVyOiBcIn4vYXNzZXRzL2ltYWdlcy9kb2ctYnV0dG9uLmpwZ1wiLFxyXG4gICAgICAgICAgaW1hZ2VzOiBbXHJcbiAgICAgICAgICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9iZWUucG5nXCIgfSxcclxuICAgICAgICAgICAgeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL3BlYWNvY2sucG5nXCIgfSxcclxuICAgICAgICAgICAgeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL3JhdHRsZXNuYWtlLnBuZ1wiIH0sXHJcbiAgICAgICAgICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9jb3lvdGUucG5nXCIgfSxcclxuICAgICAgICAgICAgeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL21vdW50YWlubGlvbi5wbmdcIiB9LFxyXG4gICAgICAgICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvb3Bvc3N1bS5wbmdcIiB9XHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgICAgY2F0ZWdvcnk6IFwiRG9nXCIsXHJcbiAgICAgICAgICBjYXRlZ29yeVRhZzogXCIjMkQ5Q0RCXCIsXHJcbiAgICAgICAgICBicmVlZF9ncm91cDogXCJUb3lcIixcclxuICAgICAgICAgIHByaW1hcnlfYnJlZWQ6IFwiQ2hpaHVhaHVhXCIsXHJcbiAgICAgICAgICBhZ2U6IFwiNCBtb250aHNcIixcclxuICAgICAgICAgIGdlbmRlcjogXCJGXCIsXHJcbiAgICAgICAgICBhbmltYWxfc2l6ZTogXCJTbWFsbFwiLFxyXG4gICAgICAgICAgcHJpbWFyeV9jb2xvcjogXCJUYW5cIixcclxuICAgICAgICAgIGxvY2F0aW9uOiBcIkRvd25leVwiLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgICBpc0Zhdm9yaXRlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiQm9vZ2llXCIsXHJcbiAgICAgICAgICBjb3ZlcjogXCJ+L2Fzc2V0cy9pbWFnZXMvY2F0LXJvYW1pbmctaWNvbi5wbmdcIixcclxuICAgICAgICAgIGltYWdlczogW1xyXG4gICAgICAgICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvYmVlLnBuZ1wiIH0sXHJcbiAgICAgICAgICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9wZWFjb2NrLnBuZ1wiIH0sXHJcbiAgICAgICAgICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9yYXR0bGVzbmFrZS5wbmdcIiB9LFxyXG4gICAgICAgICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvY295b3RlLnBuZ1wiIH0sXHJcbiAgICAgICAgICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9tb3VudGFpbmxpb24ucG5nXCIgfSxcclxuICAgICAgICAgICAgeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL29wb3NzdW0ucG5nXCIgfVxyXG4gICAgICAgICAgXSxcclxuICAgICAgICAgIGNhdGVnb3J5OiBcIkNhdFwiLFxyXG4gICAgICAgICAgY2F0ZWdvcnlUYWc6IFwiIzYxMjdhZVwiLFxyXG4gICAgICAgICAgYnJlZWRfZ3JvdXA6IFwiU2hvcnRoYWlyXCIsXHJcbiAgICAgICAgICBwcmltYXJ5X2JyZWVkOiBcIlRhYmJ5XCIsXHJcbiAgICAgICAgICBhZ2U6IFwiNlwiLFxyXG4gICAgICAgICAgZ2VuZGVyOiBcIk1cIixcclxuICAgICAgICAgIGFuaW1hbF9zaXplOiBcIlNtYWxsXCIsXHJcbiAgICAgICAgICBwcmltYXJ5X2NvbG9yOiBcIlRhblwiLFxyXG4gICAgICAgICAgbG9jYXRpb246IFwiRG93bmV5XCIsXHJcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICAgIGlzRmF2b3JpdGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIlNub29weVwiLFxyXG4gICAgICAgICAgY292ZXI6IFwifi9hc3NldHMvaW1hZ2VzL3Nub29weS5qcGdcIixcclxuICAgICAgICAgIGltYWdlczogW1xyXG4gICAgICAgICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvYmVlLnBuZ1wiIH0sXHJcbiAgICAgICAgICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9wZWFjb2NrLnBuZ1wiIH0sXHJcbiAgICAgICAgICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9yYXR0bGVzbmFrZS5wbmdcIiB9LFxyXG4gICAgICAgICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvY295b3RlLnBuZ1wiIH0sXHJcbiAgICAgICAgICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9tb3VudGFpbmxpb24ucG5nXCIgfSxcclxuICAgICAgICAgICAgeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL29wb3NzdW0ucG5nXCIgfVxyXG4gICAgICAgICAgXSxcclxuICAgICAgICAgIGNhdGVnb3J5OiBcIkRvZ1wiLFxyXG4gICAgICAgICAgY2F0ZWdvcnlUYWc6IFwiIzI3QUU2MFwiLFxyXG4gICAgICAgICAgYnJlZWRfZ3JvdXA6IFwiSG91bmRcIixcclxuICAgICAgICAgIHByaW1hcnlfYnJlZWQ6IFwiQmVhZ2xlXCIsXHJcbiAgICAgICAgICBhZ2U6IFwiMTBcIixcclxuICAgICAgICAgIGdlbmRlcjogXCJNXCIsXHJcbiAgICAgICAgICBhbmltYWxfc2l6ZTogXCJTbWFsbFwiLFxyXG4gICAgICAgICAgcHJpbWFyeV9jb2xvcjogXCJUYW5cIixcclxuICAgICAgICAgIGxvY2F0aW9uOiBcIkRvd25leVwiLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgaXNGYXZvcml0ZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiQXJpYW5hXCIsXHJcbiAgICAgICAgICBjb3ZlcjogXCJ+L2Fzc2V0cy9pbWFnZXMvY2F0LWJ1dHRvbi5qcGdcIixcclxuICAgICAgICAgIGltYWdlczogW1xyXG4gICAgICAgICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvYmVlLnBuZ1wiIH0sXHJcbiAgICAgICAgICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9wZWFjb2NrLnBuZ1wiIH0sXHJcbiAgICAgICAgICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9yYXR0bGVzbmFrZS5wbmdcIiB9LFxyXG4gICAgICAgICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvY295b3RlLnBuZ1wiIH0sXHJcbiAgICAgICAgICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9tb3VudGFpbmxpb24ucG5nXCIgfSxcclxuICAgICAgICAgICAgeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL29wb3NzdW0ucG5nXCIgfVxyXG4gICAgICAgICAgXSxcclxuICAgICAgICAgIGNhdGVnb3J5OiBcIkNhdFwiLFxyXG4gICAgICAgICAgY2F0ZWdvcnlUYWc6IFwiI2U0Y2UwZFwiLFxyXG4gICAgICAgICAgYnJlZWRfZ3JvdXA6IFwiTG9uZ2hhaXJcIixcclxuICAgICAgICAgIHByaW1hcnlfYnJlZWQ6IFwiRG9tZXN0aWNcIixcclxuICAgICAgICAgIGdlbmRlcjogXCJGXCIsXHJcbiAgICAgICAgICBhbmltYWxfc2l6ZTogXCJTbWFsbFwiLFxyXG4gICAgICAgICAgcHJpbWFyeV9jb2xvcjogXCJHcmF5XCIsXHJcbiAgICAgICAgICBsb2NhdGlvbjogXCJEb3duZXlcIixcclxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgaXNGYXZvcml0ZTogdHJ1ZSxcclxuICAgICAgICAgIGFnZTogXCIxMCBtb250aHNcIixcclxuICAgICAgICAgIGlzRmF2b3JpdGU6IGZhbHNlLFxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICBuYW1lOiBcIk11ZmZpblwiLFxyXG4gICAgICAgIC8vICAgY292ZXI6IFwifi9hc3NldHMvaW1hZ2VzL2RvZ2dvLnBuZ1wiLFxyXG4gICAgICAgIC8vICAgaW1hZ2VzOiBbXHJcbiAgICAgICAgLy8gICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9iZWUucG5nXCIgfSxcclxuICAgICAgICAvLyAgICAgeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL3BlYWNvY2sucG5nXCIgfSxcclxuICAgICAgICAvLyAgICAgeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL3JhdHRsZXNuYWtlLnBuZ1wiIH0sXHJcbiAgICAgICAgLy8gICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9jb3lvdGUucG5nXCIgfSxcclxuICAgICAgICAvLyAgICAgeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL21vdW50YWlubGlvbi5wbmdcIiB9LFxyXG4gICAgICAgIC8vICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvb3Bvc3N1bS5wbmdcIiB9XHJcbiAgICAgICAgLy8gICBdLFxyXG4gICAgICAgIC8vICAgY2F0ZWdvcnk6IFwiRG9nXCIsXHJcbiAgICAgICAgLy8gICBjYXRlZ29yeVRhZzogXCIjMjdBRTYwXCIsXHJcbiAgICAgICAgLy8gICBicmVlZDogXCIzMDAuMDBcIixcclxuICAgICAgICAvLyAgIGxpa2VzOiA3MzAsXHJcbiAgICAgICAgLy8gICBpc0xpa2U6IHRydWUsXHJcbiAgICAgICAgLy8gICBpc0Zhdm9yaXRlOiB0cnVlLFxyXG4gICAgICAgIC8vICAgY29tbWVudHM6IDExLFxyXG4gICAgICAgIC8vICAgcmF0aW5nOiBcIjQuMFwiLFxyXG4gICAgICAgIC8vICAgZGVzY3JpcHRpb246IFwiYVwiXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICBdLFxyXG4gICAgICBjYXRlZ29yeTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvdmVyOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2J1cmdlcjY0MC5qcGdcIixcclxuICAgICAgICAgIGNhdGVnb3J5OiBcIkNhdFwiLFxyXG4gICAgICAgICAgY291bnQ6IFwiMTNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY292ZXI6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvcGFuY2FrZTY0MC5qcGdcIixcclxuICAgICAgICAgIGNhdGVnb3J5OiBcIkRvZ1wiLFxyXG4gICAgICAgICAgY291bnQ6IFwiNVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb3ZlcjogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9jYWtlNjQwLmpwZ1wiLFxyXG4gICAgICAgICAgY2F0ZWdvcnk6IFwiTGl2ZXN0b2NrXCIsXHJcbiAgICAgICAgICBjb3VudDogXCI5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvdmVyOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2JlZXI2NDAuanBnXCIsXHJcbiAgICAgICAgICBjYXRlZ29yeTogXCJPdGhlclwiLFxyXG4gICAgICAgICAgY291bnQ6IFwiN1wiXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgc2VhcmNoKCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcInNlYXJjaFwiKTtcclxuICAgIH0sXHJcbiAgICBiZWxsKCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImJlbGxcIik7XHJcbiAgICB9LFxyXG4gICAgc2hvd0l0ZW0ocGF5bG9hZCkge1xyXG4gICAgICB0aGlzLiRuYXZpZ2F0ZVRvKEl0ZW1EZXRhaWxzLCB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgIGl0ZW06IHBheWxvYWRcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFuaW1hdGVkOiB0cnVlLFxyXG4gICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgIG5hbWU6IFwic2xpZGVUb3BcIixcclxuICAgICAgICAgIGR1cmF0aW9uOiAzODAsXHJcbiAgICAgICAgICBjdXJ2ZTogXCJlYXNlSW5cIlxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGFkb3B0aW9uTGlzdCgpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZFRhYnZpZXcgPSAwO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBUT0RPOiBzaG93IGZpbHRlclxyXG4gICAgc2hvd0NhdGVnb3J5KCkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkVGFidmlldyA9IDE7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlSGVhcnQoKSB7XHJcbiAgICBpZiAoaXNJT1MpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5hbmltYXRlRmF2b3JpdGUoKTtcclxuICAgICAgdGhpcy5pdGVtLmlzRmF2b3JpdGUgPSAhdGhpcy5pdGVtLmlzRmF2b3JpdGU7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuLnRhYnZpZXcuYWN0aXZlIHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItYm90dG9tLXdpZHRoOiAzO1xyXG4gIG1hcmdpbjogMDtcclxuICBoZWlnaHQ6IDUwO1xyXG59XHJcbi50YWJ2aWV3VGV4dCB7XHJcbiAgbWFyZ2luLXRvcDogMTU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTtcclxuICBmb250LXNpemU6IDEzO1xyXG4gIGNvbG9yOiAjZDhkMmQyO1xyXG59XHJcbi50YWJ2aWV3VGV4dC5hY3RpdmUge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm5hdkljb24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAzO1xyXG59XHJcblxyXG4ubmF2VGFiIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5ZmNhO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5uYXZUYWJ2aWV3IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG59XHJcblxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICA8UGFnZSBjbGFzcz1cInBhZ2VcIj5cclxuICAgIDxBY3Rpb25CYXI+XHJcbiAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uIEB0YXA9XCIkbmF2aWdhdGVCYWNrKClcIiBhbmRyb2lkLnN5c3RlbUljb249XCJpY19tZW51X2JhY2tcIiAvPlxyXG4gICAgICA8TGFiZWwgdGV4dD1cIkZBUVwiIGZvbnRTaXplPVwiMjBcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiIC8+XHJcbiAgICA8L0FjdGlvbkJhcj5cclxuXHJcbiAgICA8U3RhY2tMYXlvdXQ+XHJcbiAgICAgIDxTZWFyY2hCYXIgdi1tb2RlbD1cInNlYXJjaFwiIGhpbnQ9XCJFbnRlciB0ZXh0Li4uXCIgQHN1Ym1pdD1cImNoZWNrRmFxXCIgLz5cclxuXHJcbiAgICAgIDxSYWRMaXN0VmlldyByZWY9XCJsaXN0Vmlld1wiXHJcbiAgICAgICAgICAgICAgICAgICBmb3I9XCJmYXEgaW4gZ2V0U2VhcmNoUmVzdWx0cyhzZWFyY2gpXCJcclxuICAgICAgICAgICAgICAgICAgIHB1bGxUb1JlZnJlc2g9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgIEBwdWxsVG9SZWZyZXNoSW5pdGlhdGVkPVwib25QdWxsVG9SZWZyZXNoSW5pdGlhdGVkXCJcclxuICAgICAgICAgICAgICAgICAgIEBpdGVtVGFwPVwib25JdGVtVGFwXCJcclxuICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibGlzdC1ncm91cFwiPlxyXG5cclxuICAgICAgICA8di10ZW1wbGF0ZT5cclxuICAgICAgICAgIDxGYXFJbmZvIDppdGVtPVwiZmFxXCIgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0tdGV4dFwiLz5cclxuICAgICAgICA8L3YtdGVtcGxhdGU+XHJcbiAgICAgIDwvUmFkTGlzdFZpZXc+XHJcbiAgICA8L1N0YWNrTGF5b3V0PlxyXG4gIDwvUGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBGYXFJbmZvIGZyb20gXCJAL2NvbXBvbmVudHMvc3VibGlzdHMvRmFxSW5mby52dWVcIjtcclxuaW1wb3J0IFRpY2tldCBmcm9tIFwiLi9UaWNrZXQudnVlXCI7XHJcbmltcG9ydCB7IG1hcFN0YXRlLCBtYXBBY3Rpb25zLCBtYXBNdXRhdGlvbnMsIG1hcEdldHRlcnMgfSBmcm9tIFwidnVleFwiO1xyXG5pbXBvcnQgRmFxIGZyb20gXCJAL21vZGVscy9GYXFcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc2VhcmNoOiBcIlwiLFxyXG4gICAgICB0aWNrZXQ6IFRpY2tldCxcclxuICAgICAgdGVtcEZhcXM6IFtdXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgLi4ubWFwQWN0aW9ucyhbXCJsb2FkRmFxc1wiXSksXHJcbiAgICAuLi5tYXBNdXRhdGlvbnMoW1wic3RvcmVGYXFcIl0pLFxyXG4gICAgY2hlY2tGYXEoKSB7XHJcbiAgICAgIC8vIGluIHRoZSBmdXR1cmUgdGhpcyBpcyB3aGVyZSB0byBjaGVjayBpZiBhIHVzZXIgaXMgb24gc2l0ZSwgb3RoZXJ3aXNlIG5vIHRpY2tldCBvcHRpb25cclxuICAgICAgLy8gaWYgKHRoaXMuZmFxcy5maWx0ZXIoZmFxID0+IGZhcS5xdWVzdGlvbiA9PT0gdGhpcy5zZWFyY2gpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAvLyAgIHRoaXMuc3RvcmVGYXEobmV3IEZhcSh0aGlzLnNlYXJjaCkpXHJcbiAgICAgIC8vICAgdGhpcy4kbmF2aWdhdGVUbyh0aGlzLnRpY2tldClcclxuICAgICAgLy8gfVxyXG4gICAgfSxcclxuICAgIG9uSXRlbVRhcCgpIHtcclxuICAgICAgLy8gVE9ET1xyXG4gICAgfSxcclxuICAgIG9uUHVsbFRvUmVmcmVzaEluaXRpYXRlZCh7IG9iamVjdCB9KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiUHVsbGluZy4uLlwiKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgb2JqZWN0Lm5vdGlmeVB1bGxUb1JlZnJlc2hGaW5pc2hlZCgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LFxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICAuLi5tYXBTdGF0ZShbXCJmYXFzXCJdKSxcclxuICAgIC4uLm1hcEdldHRlcnMoW1wiZ2V0U2VhcmNoUmVzdWx0c1wiXSlcclxuICB9LFxyXG4gIG1vdW50ZWQoKSB7XHJcbiAgICB0aGlzLmxvYWRGYXFzKCk7XHJcbiAgfSxcclxuICBjb21wb25lbnRzOiB7XHJcbiAgICBUaWNrZXQsXHJcbiAgICBGYXFJbmZvXHJcbiAgfVxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cclxuICBAaW1wb3J0ICcuLi9BbmltYWxDZW50ZXInO1xyXG5cclxuQWN0aW9uQmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5ZmNhO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4ubWVzc2FnZSB7XHJcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuLmZhcV9xdWVzdGlvbiB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAyMDtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLmZhcV9hbnN3ZXIge1xyXG4gIGNvbG9yOiAjNDU0NTQ1O1xyXG59XHJcblxyXG4ubGlzdC1ncm91cC1pdGVtLXRleHQge1xyXG4gIG1hcmdpbjogNyA4O1xyXG59XHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gIDxQYWdlID5cclxuICAgIDxBY3Rpb25CYXIgaW9zLnBvc2l0aW9uPVwibGVmdFwiIGNsYXNzPVwiQWN0aW9uX0JhclwiPlxyXG4gICAgICA8TGFiZWwgdGV4dD1cIldlbGNvbWVcIiBmb250U2l6ZT1cIjIwXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIi8+XHJcbiAgICAgIDxBY3Rpb25JdGVtIEB0YXA9XCJ0b0ZhcVwiIGlvcy5zeXN0ZW1JY29uPVwiMTJcIiBpb3MucG9zaXRpb249XCJyaWdodFwiIGFuZHJvaWQuc3lzdGVtSWNvbj1cImljX21lbnVfc2VhcmNoXCIgYW5kcm9pZC5wb3NpdGlvbj1cImFjdGlvbkJhclwiIC8+XHJcbiAgICA8L0FjdGlvbkJhcj5cclxuXHJcbiAgICA8U3RhY2tMYXlvdXQgYmFja2dyb3VuZENvbG9yPVwiI2IyMWE4MlwiPlxyXG5cclxuICAgICAgPEdyaWRMYXlvdXQgY2xhc3M9XCJsYXlvdXQgY292ZXJcIiBjb2x1bW5zPVwiKiwqXCIgcm93cz1cIiosKiwqXCI+XHJcbiAgICAgICAgPCEtLUFkb3B0aW9uIC0tPlxyXG4gICAgICAgIDxDYXRlZ29yeUJ1dHRvbiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiIG1hcmdpbj1cIjVcIiByb3c9XCIwXCIgY29sPVwiMFwiIHNyYz1cIn4vYXNzZXRzL2ltYWdlcy9hbmltYWxzLmljb24ucG5nXCIgOmljb249XCInJ1wiXHJcbiAgICAgICAgOnRpdGxlPVwidGl0bGVzWzBdXCIgOmFjdGlvbj1cInRvQWRvcHRpb25cIiBjbGFzcz1cImhvbWVwYWdlLWJsdWUgSG9tZUJ1dHRvblwiIHRleHRXcmFwPVwidHJ1ZVwiLz5cclxuICAgICAgICAgIFxyXG4gICAgICAgIDwhLS1TZXJ2aWNlIFJlcXVlc3QgLS0+XHJcbiAgICAgICAgPENhdGVnb3J5QnV0dG9uIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgIG1hcmdpbj1cIjVcIiByb3c9XCIxXCIgY29sPVwiMFwiIHNyYz1cIn4vYXNzZXRzL2ltYWdlcy9zZXJ2aWNlcy5pY29uLnBuZ1wiIDppY29uPVwiJydcIlxyXG4gICAgICAgIDp0aXRsZT1cInRpdGxlc1syXVwiIDphY3Rpb249XCJ0b1NlcnZpY2VSZXF1ZXN0XCIgY2xhc3M9XCJob21lcGFnZS1ibHVlIEhvbWVCdXR0b25cIiB0ZXh0V3JhcD1cInRydWVcIi8+XHJcbiAgICAgICAgIFxyXG4gICAgICAgIDwhLS1GQVEgLS0+XHJcbiAgICAgICAgPENhdGVnb3J5QnV0dG9uIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgIG1hcmdpbj1cIjVcIiByb3c9XCIwXCIgY29sPVwiMVwiIHNyYz1cIn4vYXNzZXRzL2ltYWdlcy9ub2lzZS5pY29uLnBuZ1wiIDppY29uPVwiJydcIlxyXG4gICAgICAgIDp0aXRsZT1cInRpdGxlc1szXVwiIDphY3Rpb249XCJ0b0ZhcVwiIGNsYXNzPVwiaG9tZXBhZ2UtYmx1ZSBIb21lQnV0dG9uXCIgdGV4dFdyYXA9XCJ0cnVlXCIvPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwhLS1UaWNrZXQgLS0+XHJcbiAgICAgICAgPENhdGVnb3J5QnV0dG9uIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgIG1hcmdpbj1cIjVcIiByb3c9XCIyXCIgY29sPVwiMFwiIHNyYz1cIn4vYXNzZXRzL2ltYWdlcy9ob3Vyc2ljb24ucG5nXCIgXHJcbiAgICAgICAgOmljb249XCInZmEtbWFwLW1hcmtlcicgfCBmb250aWNvblwiIDp0aXRsZT1cInRpdGxlc1s0XVwiIDphY3Rpb249XCJ0b1FSU2Nhbm5lclwiIGNsYXNzPVwiZmEgaG9tZXBhZ2UtYmx1ZSBIb21lQnV0dG9uXCIgdGV4dFdyYXA9XCJ0cnVlXCIvPlxyXG4gICAgICAgXHJcbiAgICAgICAgPCEtLUZpbmQgYSBMb2NhdGlvbiAtLT5cclxuICAgICAgICA8Q2F0ZWdvcnlCdXR0b24gdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiBtYXJnaW49XCI1XCIgcm93PVwiMVwiIGNvbD1cIjFcIiBzcmM9XCJ+L2Fzc2V0cy9pbWFnZXMvbG9jYXRpb25pY29uLnBuZ1wiIDppY29uPVwiJydcIlxyXG4gICAgICAgIDp0aXRsZT1cInRpdGxlc1s1XVwiIDphY3Rpb249XCJ0b0xvY2F0aW9uTGlzdFwiIGNsYXNzPVwiaG9tZXBhZ2UtYmx1ZSBIb21lQnV0dG9uXCIgdGV4dFdyYXA9XCJ0cnVlXCIvPlxyXG4gICAgICBcclxuICAgICAgPC9HcmlkTGF5b3V0PlxyXG5cclxuICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICBcclxuICA8L1BhZ2U+XHJcbiAgXHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgQ2F0ZWdvcnlCdXR0b24gZnJvbSBcIkAvY29tcG9uZW50cy9idXR0b25zL0NhdGVnb3J5QnV0dG9uLnZ1ZVwiXHJcbmltcG9ydCBGYXEgZnJvbSBcIi4vRmFxLnZ1ZVwiXHJcbmltcG9ydCBMb2NhdGlvbiBmcm9tIFwiLi9Mb2NhdGlvbi52dWVcIlxyXG5pbXBvcnQgUVJTY2FubmVyIGZyb20gXCIuL1RpY2tldE9wdGlvbnMudnVlXCJcclxuaW1wb3J0IEFkb3B0aW9uIGZyb20gXCIuL0Fkb3B0aW9uLnZ1ZVwiXHJcbmltcG9ydCBTZXJ2aWNlUmVxdWVzdCBmcm9tIFwiLi9TZXJ2aWNlUmVxdWVzdC52dWVcIlxyXG5pbXBvcnQgeyBtYXBTdGF0ZSwgbWFwQWN0aW9ucywgbWFwTXV0YXRpb25zIH0gZnJvbSBcInZ1ZXhcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBhY3Rpb25CYXI6IFwiV2VsY29tZVwiLFxyXG4gICAgICBtc2c6IFwiSGVsbG8gV29ybGQhXCIsXHJcbiAgICAgIHRpdGxlczogW1xyXG4gICAgICAgIFwiQWRvcHQgYW4gQW5pbWFsIVwiLFxyXG4gICAgICAgIFwiU2VydmljZXMgJiBGZWVzXCIsXHJcbiAgICAgICAgXCJTZXJ2aWNlIFJlcXVlc3RcIixcclxuICAgICAgICBcIkZBUVwiLFxyXG4gICAgICAgIFwiR3JhYiBhIFRpY2tldCFcIixcclxuICAgICAgICBcIkZpbmQgT3VyIExvY2F0aW9uXCJcclxuICAgICAgXSxcclxuICAgICAgdGV4dFdyYXA6IGZhbHNlLFxyXG4gICAgICAvL3NlYXJjaDogXCJ0aGlzIHdpbGwgY2hhbmdlIGFzIHlvdSB0eXBlXCIsXHJcbiAgICAgIHJlc3VsdHM6IFtdLFxyXG4gICAgICBwb2xsaW5nOiB1bmRlZmluZWQsXHJcbiAgICAgIGZhcTogRmFxLFxyXG4gICAgICBsb2NhdGlvbjogTG9jYXRpb24sXHJcbiAgICAgIHFyU2Nhbm5lcjogUVJTY2FubmVyLFxyXG4gICAgICBhZG9wdGlvbjogQWRvcHRpb24sXHJcbiAgICAgIHNlcnZpY2VSZXF1ZXN0OiBTZXJ2aWNlUmVxdWVzdCxcclxuXHJcbiAgICB9O1xyXG4gIH0sXHJcblxyXG4gIGNvbXB1dGVkOiBtYXBTdGF0ZShbJ2FwcHJvdmVkVGlja2V0J10pLFxyXG5cclxuICBtZXRob2RzOiB7XHJcbiAgICAuLi5tYXBBY3Rpb25zKFsnY2hlY2tUaWNrZXQnXSksXHJcbiAgICAuLi5tYXBNdXRhdGlvbnMoWydTRVRfVElDS0VUJ10pLFxyXG4gICAgdG9Mb2NhdGlvbkxpc3QoKSB7XHJcbiAgICAgIHRoaXMuJG5hdmlnYXRlVG8odGhpcy5sb2NhdGlvbiwge1xyXG4gICAgICAgIGFuaW1hdGVkOiB0cnVlLFxyXG4gICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgIG5hbWU6IFwic2xpZGVcIixcclxuICAgICAgICAgIGR1cmF0aW9uOiAzODAsXHJcbiAgICAgICAgICBjdXJ2ZTogXCJlYXNlSW5cIlxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgdG9GYXEoKSB7XHJcbiAgICAgIHRoaXMuJG5hdmlnYXRlVG8odGhpcy5mYXEsIHtcclxuICAgICAgICBhbmltYXRlZDogdHJ1ZSxcclxuICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICBuYW1lOiBcInNsaWRlXCIsXHJcbiAgICAgICAgICBkdXJhdGlvbjogMzgwLFxyXG4gICAgICAgICAgY3VydmU6IFwiZWFzZUluXCJcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHRvUVJTY2FubmVyICgpIHtcclxuICAgICAgaWYgKHR5cGVvZiB0aGlzLmFwcHJvdmVkVGlja2V0ID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIGlmICh0aGlzLmFwcHJvdmVkVGlja2V0Lmhhc093blByb3BlcnR5KCd3aW5kb3cnKSkge1xyXG4gICAgICAgICAgYWxlcnQoe1xyXG4gICAgICAgICAgICB0aXRsZTogXCJBY2Nlc3MgRGVuaWVkXCIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiWW91IGNhbm5vdCBzdWJtaXQgYW5vdGhlciB0aWNrZXQuXCIsXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKHRoaXMucXJTY2FubmVyLCB7XHJcbiAgICAgICAgICBhbmltYXRlZDogdHJ1ZSxcclxuICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgbmFtZTogXCJzbGlkZVwiLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMzgwLFxyXG4gICAgICAgICAgICBjdXJ2ZTogXCJlYXNlSW5cIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgdG9BZG9wdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMuJG5hdmlnYXRlVG8odGhpcy5hZG9wdGlvbiwge1xyXG4gICAgICAgIGFuaW1hdGVkOiB0cnVlLFxyXG4gICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgIG5hbWU6IFwic2xpZGVcIixcclxuICAgICAgICAgIGR1cmF0aW9uOiAzODAsXHJcbiAgICAgICAgICBjdXJ2ZTogXCJlYXNlSW5cIlxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgdG9TZXJ2aWNlUmVxdWVzdCAoKSB7XHJcbiAgICAgIHRoaXMuJG5hdmlnYXRlVG8odGhpcy5zZXJ2aWNlUmVxdWVzdCwge1xyXG4gICAgICAgIGFuaW1hdGVkOiB0cnVlLFxyXG4gICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgIG5hbWU6IFwic2xpZGVcIixcclxuICAgICAgICAgIGR1cmF0aW9uOiAzODAsXHJcbiAgICAgICAgICBjdXJ2ZTogXCJlYXNlSW5cIlxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgcG9sbERhdGEoKSB7XHJcbiAgICAgIHRoaXMucG9sbGluZyA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAvLyBDaGVjayBpZiB0aWNrZXQgaXMgY29tcGxldGUgZXZlcnkgWCBzZWNvbmRzXHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmFwcHJvdmVkVGlja2V0ID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgaWYgKHRoaXMuYXBwcm92ZWRUaWNrZXQuaGFzT3duUHJvcGVydHkoJ251bWJlcicpKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYXBwcm92ZWRUaWNrZXQubnVtYmVyLCB0aGlzLmFwcHJvdmVkVGlja2V0LmlzQ29tcGxldGUpXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFwcHJvdmVkVGlja2V0LmlzQ29tcGxldGUpIHtcclxuICAgICAgICAgICAgICB0aGlzLlNFVF9USUNLRVQodW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgIGFsZXJ0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlRoYW5rIFlvdVwiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJZb3VyIHRpY2tldCBoYXMgYmVlbiBzZXJ2ZWQuIEhhdmUgYSBuaWNlIGRheSFcIixcclxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aGlzLmNoZWNrVGlja2V0KHRoaXMuYXBwcm92ZWRUaWNrZXQuaWQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sIDUwMDApXHJcbiAgICB9XHJcblxyXG4gIH0sXHJcblxyXG4gIG1vdW50ZWQoKSB7XHJcbiAgICB0aGlzLnBvbGxEYXRhKClcclxuICB9LFxyXG5cclxuICBiZWZvcmVEZXN0cm95KCkge1xyXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnBvbGxpbmcpXHJcbiAgfSxcclxuXHJcbiAgY29tcG9uZW50czoge1xyXG4gICAgQ2F0ZWdvcnlCdXR0b24sXHJcbiAgICBGYXFcclxuICB9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZCBsYW5nID1cInNjc3NcIj5cclxuQGltcG9ydCBcIi4uL0FuaW1hbENlbnRlclwiO1xyXG5cclxuLkFjdGlvbl9CYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDlmY2E7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5TX0JhciB7XHJcbiAgY29sb3I6ICMwNTA1MDU7XHJcbn1cclxuXHJcbi5TX0J1dHRvbiB7XHJcbiAgLyogdGV4dD1cInJpZ2h0XCI7IFxyXG4gICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ9XCJyaWdodFwiO1xyXG4gICAgICAgIHdpZHRoPVwiMzMlXCIgXHJcbiAgICAgICAgaGVpZ2h0PVwiNzBcIiBcclxuICAgICAgICAvKmJhY2tncm91bmRDb2xvcj1cIiMxYzZiNDhcIi8+Ki9cclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJ+L2Fzc2V0cy9pbWFnZXMvTmF0aXZlU2NyaXB0LVZ1ZS5wbmdcIik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4gIC5jb3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHBsdW0sICMwMDlmY2EpXHJcbn1cclxuXHJcbi5ob21lcGFnZS1ibHVlIHtcclxuICBjb2xvcjogJGhvbWVwYWdlLWJsdWU7XHJcbn1cclxuXHJcbi5BY3Rpb25fVGV4dCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4uSG9tZUJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICBib3JkZXItcmFkaXVzOiAyNTtcclxuICBmb250LXNpemU6IDE0JTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nLXRvcDogN2VtO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwO1xyXG59XHJcblxyXG4ubGF5b3V0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xyXG59XHJcblxyXG4ubWVzc2FnZSB7XHJcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMDtcclxuICBjb2xvcjogIzI1MjUyNTtcclxufVxyXG48L3N0eWxlPlxyXG5cclxuIiwiPHRlbXBsYXRlPlxyXG4gICAgPFBhZ2UgY2xhc3M9XCJwYWdlXCI+XHJcbiAgICAgICAgPEFjdGlvbkJhciBjbGFzcz1cImFjdGlvbi1iYXJcIj5cclxuICAgICAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uIEB0YXA9XCIkbmF2aWdhdGVCYWNrKClcIiBhbmRyb2lkLnN5c3RlbUljb249XCJpY19tZW51X2JhY2tcIiAvPlxyXG4gICAgICAgICAgPExhYmVsIHRleHQ9XCJBbmltYWwgQ2FyZSBDZW50ZXJzXCIgZm9udFNpemU9XCIyMFwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCI+PC9MYWJlbD5cclxuICAgICAgICA8L0FjdGlvbkJhcj5cclxuXHJcblxyXG4gICAgICAgIDxTdGFja0xheW91dD5cclxuICAgICAgICAgICAgPCEtLWdldCBkaXN0YW5jZSBidG4gLS0+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGNsYXNzPVwiZmEgZ3BzLWJ1dHRvblwiIDppY29uPVwiJ2ZhLXNvcnQtYW1vdW50LWFzYycgfCBmb250aWNvblwiIHRpdGxlPVwiR2V0IENsb3Nlc3QgQW5pbWFsIENlbnRlclwiIDphY3Rpb249XCJidXR0b25HZXREaXN0YW5jZVRvQ2FyZUNlbnRlcnNUYXBcIi8+XHJcblxyXG4gICAgICAgICAgICA8UmFkTGlzdFZpZXcgcm93PVwiMlwiIGZvcj1cImxvY2F0aW9uIGluIGNlbnRlckxvY2F0aW9uc1wiIEBpdGVtVGFwPVwib25JdGVtVGFwXCIgY2xhc3M9XCJsaXN0LWdyb3VwXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDx2LXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBjYXJkIGNvbnRhaW50ZXIgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cIiosICosICosICpcIiBjb2x1bW5zPVwiKiwgKlwiIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtLWNvbnRlbnRcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBuYW1lIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cImxvY2F0aW9uLm5hbWVcIiBjbGFzcz1cImhvbWVwYWdlLWJsdWUgdGV4dC1wcmltYXJ5IGxpc3QtZ3JvdXAtaXRlbS10ZXh0IGZvbnQtd2VpZ2h0LWJvbGRcIi8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gZGlzdGFuY2UgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cIjFcIiBob3Jpem9udGFsQWxpZ25tZW50PVwicmlnaHRcIiBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbS10ZXh0IG0tci01IHRleHQtc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiA6dGV4dD1cIid+JysgbG9jYXRpb24uZGlzdGFuY2UgKyAnbWknXCIvPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIxXCIgY2xhc3M9XCJoci1saWdodCBtLXQtNSBtLWItNVwiIGNvbFNwYW49XCIyXCIvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugcm93PVwiMlwiIDpzcmM9XCJsb2NhdGlvbi5pbWFnZVVSTFwiIHN0cmV0Y2g9XCJhc3BlY3RGaXRcIiBoZWlnaHQ9XCIxMjBcIiBjbGFzcz1cIm0tci0yMFwiIGxvYWRNb2RlPVwiYXN5bmNcIi8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCByb3c9XCIyXCIgY29sPVwiMVwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0tdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cIiosICpcIiBjb2x1bW5zPVwiKiwgNCpcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1hZGRyZXNzIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiMFwiIGNvbD1cIjBcIiB0ZXh0V3JhcD1cInRydWVcIiBjbGFzcz1cInAtYi0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZyBpb3MuZm9udEZhbWlseT1cInN5c3RlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiA6dGV4dD1cIidmYS1tYXAtbWFya2VyJyB8IGZvbnRpY29uXCIgY2xhc3M9XCJmYVwiPjwvU3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiMFwiIGNvbD1cIjFcIiB0ZXh0V3JhcD1cInRydWVcIiBjbGFzcz1cInAtYi0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZyBpb3MuZm9udEZhbWlseT1cInN5c3RlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiA6dGV4dD1cImxvY2F0aW9uLmFkZHJlc3NcIiAgY2xhc3M9XCJ0ZXh0LXByaW1hcnlcIj48L1NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAtLT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gcGhvbmUgbnVtYmVyLS0+ICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiMVwiIGNvbD1cIjBcIiB0ZXh0V3JhcD1cInRydWVcIiBjbGFzcz1cInAtYi0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZyBpb3MuZm9udEZhbWlseT1cInN5c3RlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIDp0ZXh0PVwiJ2ZhLXBob25lJyB8IGZvbnRpY29uXCIgY2xhc3M9XCJmYSBpY29uXCI+PC9TcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIxXCIgY29sPVwiMVwiIHRleHRXcmFwPVwidHJ1ZVwiIGNsYXNzPVwicC1iLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nIGlvcy5mb250RmFtaWx5PVwic3lzdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gOnRleHQ9XCJsb2NhdGlvbi5waG9uZVwiIGNsYXNzPVwiXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cInAtYi0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZyBpb3MuZm9udEZhbWlseT1cInN5c3RlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XCJcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAtLT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPC92LXRlbXBsYXRlPlxyXG5cclxuICAgICAgICAgICAgPC9SYWRMaXN0Vmlldz5cclxuPC9TdGFja0xheW91dD5cclxuICAgIDwvUGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbi8vIC0tLXBsdWdpbnMtLS1cclxuLy8gZ2VvbG9jYXRpb25cclxuaW1wb3J0ICogYXMgZ2VvbG9jYXRpb24gZnJvbSBcIm5hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvblwiO1xyXG5pbXBvcnQgeyBBY2N1cmFjeSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2VudW1zXCI7XHJcblxyXG4vLyB0b2FzdFxyXG5jb25zdCBUb2FzdCA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdG9hc3RzXCIpO1xyXG4vLy0tLS0tLS1cclxuXHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIkAvY29tcG9uZW50cy9idXR0b25zL0ljb25CdXR0b24udnVlXCJcclxuXHJcbmltcG9ydCBBbmltYWxDZW50ZXJEZXRhaWxzIGZyb20gXCJAL2NvbXBvbmVudHMvbG9jYXRpb24vQW5pbWFsQ2VudGVyRGV0YWlsc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAvL1RPRE86IFN0b3JlIGhhcmRjb2RlZCBjZW50ZXJsb2NhdGlvbnNcclxuICAgICAgY2VudGVyTG9jYXRpb25zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJBZ291cmFcIixcclxuICAgICAgICAgIGFkZHJlc3M6IFwiMjk1MjUgQWdvdXJhIFJvYWQsIEFnb3VyYSwgQ0EgOTEzMDFcIixcclxuICAgICAgICAgIHBob25lOiBcIig4MTgpIDk5MS0wMDcxXCIsXHJcbiAgICAgICAgICBhdmFpbGFiaWxpdHk6IHtcclxuICAgICAgICAgICAgd2Vla2RheTogXCJNb25kYXktVGh1cnNkYXlcIixcclxuICAgICAgICAgICAgd2Vla2VuZDogXCJGcmlkYXktU3VuZGF5XCIsXHJcbiAgICAgICAgICAgIHdlZWtkYXlob3VyczogXCIxMjowMCBwLm0uIC0gNzowMCBwLm1cIixcclxuICAgICAgICAgICAgd2Vla2VuZGhvdXJzOiBcIjEwOjAwIGEubS4gLSA1OjAwIHAubVwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgbGF0aXR1ZGU6IDM0LjE0NjAxNSxcclxuICAgICAgICAgIGxvbmdpdHVkZTogLTExOC43Njk0MjEsXHJcbiAgICAgICAgICBkaXN0YW5jZTogXCJcIixcclxuICAgICAgICAgIGltYWdlVVJMOiBcIn4vYXNzZXRzL2ltYWdlcy9hY2hvdXNlLnBuZ1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIkJhbGR3aW4gUGFya1wiLFxyXG4gICAgICAgICAgYWRkcmVzczogXCI0Mjc1IE5vcnRoIEVsdG9uIFN0cmVldCwgQmFsZHdpbiBQYXJrLCBDQSA5MTcwNlwiLFxyXG4gICAgICAgICAgcGhvbmU6IFwiKDYyNikgOTYyLTM1NzdcIixcclxuICAgICAgICAgIGF2YWlsYWJpbGl0eToge1xyXG4gICAgICAgICAgICB3ZWVrZGF5OiBcIk1vbmRheS1UaHVyc2RheVwiLFxyXG4gICAgICAgICAgICB3ZWVrZW5kOiBcIkZyaWRheS1TdW5kYXlcIixcclxuICAgICAgICAgICAgd2Vla2RheWhvdXJzOiBcIjEyOjAwIHAubS4gLSA3OjAwIHAubVwiLFxyXG4gICAgICAgICAgICB3ZWVrZW5kaG91cnM6IFwiMTA6MDAgYS5tLiAtIDU6MDAgcC5tXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBsYXRpdHVkZTogMzQuMDkxMzYyLFxyXG4gICAgICAgICAgbG9uZ2l0dWRlOiAtMTE3Ljk1MTEwNSxcclxuICAgICAgICAgIGRpc3RhbmNlOiBcIlwiLFxyXG4gICAgICAgICAgaW1hZ2VVUkw6IFwifi9hc3NldHMvaW1hZ2VzL2FjaG91c2UucG5nXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiQ2Fyc29uL0dhcmRlbmFcIixcclxuICAgICAgICAgIGFkZHJlc3M6IFwiMjE2IFcuIFZpY3RvcmlhIFN0cmVldCwgR2FyZGVuYSBDQSA5MDI0OFwiLFxyXG4gICAgICAgICAgcGhvbmU6IFwiKDMxMCkgNTIzLTk1NjZcIixcclxuICAgICAgICAgIGF2YWlsYWJpbGl0eToge1xyXG4gICAgICAgICAgICB3ZWVrZGF5OiBcIk1vbmRheS1UaHVyc2RheVwiLFxyXG4gICAgICAgICAgICB3ZWVrZW5kOiBcIkZyaWRheS1TdW5kYXlcIixcclxuICAgICAgICAgICAgd2Vla2RheWhvdXJzOiBcIjEyOjAwIHAubS4gLSA3OjAwIHAubVwiLFxyXG4gICAgICAgICAgICB3ZWVrZW5kaG91cnM6IFwiMTA6MDAgYS5tLiAtIDU6MDAgcC5tXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBsYXRpdHVkZTogMzMuODY0MzU1LFxyXG4gICAgICAgICAgbG9uZ2l0dWRlOiAtMTE4LjI3NzQxNCxcclxuICAgICAgICAgIGRpc3RhbmNlOiBcIlwiLFxyXG4gICAgICAgICAgaW1hZ2VVUkw6IFwifi9hc3NldHMvaW1hZ2VzL2FjaG91c2UucG5nXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiQ2FzdGFpY1wiLFxyXG4gICAgICAgICAgYWRkcmVzczogXCIzMTA0NCBOb3J0aCBDaGFybGllIENhbnlvbiBSb2FkLCBDYXN0YWljLCBDQSA5MTM4NFwiLFxyXG4gICAgICAgICAgcGhvbmU6IFwiKDY2MSkgMjU3LTMxOTFcIixcclxuICAgICAgICAgIGF2YWlsYWJpbGl0eToge1xyXG4gICAgICAgICAgICB3ZWVrZGF5OiBcIk1vbmRheS1UaHVyc2RheVwiLFxyXG4gICAgICAgICAgICB3ZWVrZW5kOiBcIkZyaWRheS1TdW5kYXlcIixcclxuICAgICAgICAgICAgd2Vla2RheWhvdXJzOiBcIjEyOjAwIHAubS4gLSA3OjAwIHAubVwiLFxyXG4gICAgICAgICAgICB3ZWVrZW5kaG91cnM6IFwiMTA6MDAgYS5tLiAtIDU6MDAgcC5tXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBsYXRpdHVkZTogMzQuNDgyODk5LFxyXG4gICAgICAgICAgbG9uZ2l0dWRlOiAtMTE4LjYwODM4NixcclxuICAgICAgICAgIGRpc3RhbmNlOiBcIlwiLFxyXG4gICAgICAgICAgaW1hZ2VVUkw6IFwifi9hc3NldHMvaW1hZ2VzL2FjaG91c2UucG5nXCJcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIkRvd25leVwiLFxyXG4gICAgICAgICAgYWRkcmVzczogXCIxMTI1OCBTb3V0aCBHYXJmaWVsZCBBdmVudWUsIERvd25leSwgQ0EgOTAyNDJcIixcclxuICAgICAgICAgIHBob25lOiBcIig1NjIpIDk0MC02ODk4XCIsXHJcbiAgICAgICAgICBhdmFpbGFiaWxpdHk6IHtcclxuICAgICAgICAgICAgd2Vla2RheTogXCJNb25kYXktVGh1cnNkYXlcIixcclxuICAgICAgICAgICAgd2Vla2VuZDogXCJGcmlkYXktU3VuZGF5XCIsXHJcbiAgICAgICAgICAgIHdlZWtkYXlob3VyczogXCIxMjowMCBwLm0uIC0gNzowMCBwLm1cIixcclxuICAgICAgICAgICAgd2Vla2VuZGhvdXJzOiBcIjEwOjAwIGEubS4gLSA1OjAwIHAubVwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgbGF0aXR1ZGU6IDMzLjkzNjU2LFxyXG4gICAgICAgICAgbG9uZ2l0dWRlOiAtMTE4LjEzMzg3LFxyXG4gICAgICAgICAgZGlzdGFuY2U6IFwiXCIsXHJcbiAgICAgICAgICBpbWFnZVVSTDogXCJ+L2Fzc2V0cy9pbWFnZXMvYWNob3VzZS5wbmdcIlxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiTGFuY2FzdGVyXCIsXHJcbiAgICAgICAgICBhZGRyZXNzOiBcIjUyMTAgV2VzdCBBdmVudWUgSSwgTGFuY2FzdGVyLCBDQSA5MzUzNlwiLFxyXG4gICAgICAgICAgcGhvbmU6IFwiKDY2MSkgOTQwLTQxOTFcIixcclxuICAgICAgICAgIGF2YWlsYWJpbGl0eToge1xyXG4gICAgICAgICAgICB3ZWVrZGF5OiBcIk1vbmRheS1UaHVyc2RheVwiLFxyXG4gICAgICAgICAgICB3ZWVrZW5kOiBcIkZyaWRheS1TdW5kYXlcIixcclxuICAgICAgICAgICAgd2Vla2RheWhvdXJzOiBcIjEyOjAwIHAubS4gLSA3OjAwIHAubVwiLFxyXG4gICAgICAgICAgICB3ZWVrZW5kaG91cnM6IFwiMTA6MDAgYS5tLiAtIDU6MDAgcC5tXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBsYXRpdHVkZTogMzQuNzAzMjM5LFxyXG4gICAgICAgICAgbG9uZ2l0dWRlOiAtMTE4LjIyMjY1LFxyXG4gICAgICAgICAgZGlzdGFuY2U6IFwiXCIsXHJcbiAgICAgICAgICBpbWFnZVVSTDogXCJ+L2Fzc2V0cy9pbWFnZXMvYWNob3VzZS5wbmdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJQYWxtZGFsZVwiLFxyXG4gICAgICAgICAgYWRkcmVzczogXCIzODU1MCBTaWVycmEgSGlnaHdheSwgUGFsbWRhbGUsIENBIDkzNTUwXCIsXHJcbiAgICAgICAgICBwaG9uZTogXCIoNjYxKSA1NzUtMjg4OFwiLFxyXG4gICAgICAgICAgYXZhaWxhYmlsaXR5OiB7XHJcbiAgICAgICAgICAgIHdlZWtkYXk6IFwiTW9uZGF5LVRodXJzZGF5XCIsXHJcbiAgICAgICAgICAgIHdlZWtlbmQ6IFwiRnJpZGF5LVN1bmRheVwiLFxyXG4gICAgICAgICAgICB3ZWVrZGF5aG91cnM6IFwiMTI6MDAgcC5tLiAtIDc6MDAgcC5tXCIsXHJcbiAgICAgICAgICAgIHdlZWtlbmRob3VyczogXCIxMDowMCBhLm0uIC0gNTowMCBwLm1cIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGxhdGl0dWRlOiAzNC41ODI2LFxyXG4gICAgICAgICAgbG9uZ2l0dWRlOiAtMTE4LjExNzEsXHJcbiAgICAgICAgICBkaXN0YW5jZTogXCJcIixcclxuICAgICAgICAgIGltYWdlVVJMOiBcIn4vYXNzZXRzL2ltYWdlcy9hY2hvdXNlLnBuZ1wiXHJcbiAgICAgICAgfVxyXG4gICAgICBdLFxyXG4gICAgICBjdXJyZW50TG9jOiB7fSAvLyBjdXJyZW50IGxvY2F0aW9uIG9ialxyXG4gICAgfTtcclxuICB9LFxyXG4gIGNvbXBvbmVudHM6IHtcclxuICAgIEljb25CdXR0b25cclxuICB9LFxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICBjZW50ZXJMaXN0KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5idXR0b25HZXRMb2NhdGlvblRhcDtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBtZXRob2RzOiB7XHJcbiAgICBlbmFibGVMb2NhdGlvblRhcDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIGdlb2xvY2F0aW9uLmlzRW5hYmxlZCgpLnRoZW4oXHJcbiAgICAgICAgZnVuY3Rpb24oaXNFbmFibGVkKSB7XHJcbiAgICAgICAgICBpZiAoIWlzRW5hYmxlZCkge1xyXG4gICAgICAgICAgICBnZW9sb2NhdGlvbi5lbmFibGVMb2NhdGlvblJlcXVlc3QoKS50aGVuKFxyXG4gICAgICAgICAgICAgIGZ1bmN0aW9uKCkge30sXHJcbiAgICAgICAgICAgICAgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIgKyAoZS5tZXNzYWdlIHx8IGUpKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIChlLm1lc3NhZ2UgfHwgZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH0sXHJcbiAgICAvLyBUT0RPOiBvcHRpbWl6ZTsgdGhpcyBzaG91bGQgYmUgYWxyZWFkeSBjb21wdXRlZCBiZWZvcmUgY2xpY2tpbmcgYnV0dG9uXHJcbiAgICBidXR0b25HZXREaXN0YW5jZVRvQ2FyZUNlbnRlcnNUYXA6IGZ1bmN0aW9uKCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICBcImJ1dHRvbkdldERpc3RhbmNlVG9DYXJlQ2VudGVyc1RhcCgpLCBnZXR0aW5nIGxpc3Qgb2YgYW5pbWFsIGNhcmUgY2VudGVyczsgc29ydGVkIGJ5IGRpc3RhbmNlXCJcclxuICAgICAgKTtcclxuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgY29uc3QgbWV0ZXJzVG9NaWxlc0NvbnZlcnNpb25SYXRlID0gMTYwOS4zNDQ7XHJcblxyXG4gICAgICBnZW9sb2NhdGlvblxyXG4gICAgICAgIC5nZXRDdXJyZW50TG9jYXRpb24oe1xyXG4gICAgICAgICAgZGVzaXJlZEFjY3VyYWN5OiBBY2N1cmFjeS5hbnksXHJcbiAgICAgICAgICBtYXhpbXVtQWdlOiA1MDAwLFxyXG4gICAgICAgICAgdGltZW91dDogMTAwMDBcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgZnVuY3Rpb24obG9jKSB7XHJcbiAgICAgICAgICAgIGlmIChsb2MpIHtcclxuICAgICAgICAgICAgICAvL2dldCBjdXJyZW50IGxvY2F0aW9uXHJcbiAgICAgICAgICAgICAgdGhhdC5jdXJyZW50TG9jLmxhdGl0dWRlID0gcGFyc2VGbG9hdChsb2MubGF0aXR1ZGUpO1xyXG4gICAgICAgICAgICAgIHRoYXQuY3VycmVudExvYy5sb25naXR1ZGUgPSBwYXJzZUZsb2F0KGxvYy5sb25naXR1ZGUpO1xyXG5cclxuICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoYXQuY2VudGVyTG9jYXRpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjZW50ZXJMb2MgPSB0aGF0LmNlbnRlckxvY2F0aW9uc1tpXTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBjYWxjIGRpc3RhbmNlIGZvcmVhY2ggYW5pbWFsIHNoZWx0ZXJcclxuICAgICAgICAgICAgICAgIGNlbnRlckxvYy5kaXN0YW5jZSA9XHJcbiAgICAgICAgICAgICAgICAgIGdlb2xvY2F0aW9uLmRpc3RhbmNlKFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGxhdGl0dWRlOiB0aGF0LmN1cnJlbnRMb2MubGF0aXR1ZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBsb25naXR1ZGU6IHRoYXQuY3VycmVudExvYy5sb25naXR1ZGVcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGxhdGl0dWRlOiBjZW50ZXJMb2MubGF0aXR1ZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBsb25naXR1ZGU6IGNlbnRlckxvYy5sb25naXR1ZGVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICkgLyBtZXRlcnNUb01pbGVzQ29udmVyc2lvblJhdGU7IC8vIGRpdmlkZSBieSBjb252ZXJzaW9uIHJhdGVcclxuXHJcbiAgICAgICAgICAgICAgICAvLyByb3VuZCBkaXN0YW5jZVxyXG4gICAgICAgICAgICAgICAgY2VudGVyTG9jLmRpc3RhbmNlID0gTnVtYmVyKFxyXG4gICAgICAgICAgICAgICAgICBNYXRoLnJvdW5kKGNlbnRlckxvYy5kaXN0YW5jZSArIFwiZTJcIikgKyBcImUtMlwiXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvLyBzb3J0IGxpc3QgYnkgZGlzdGFuY2VcclxuICAgICAgICAgICAgICB0aGF0LmNlbnRlckxvY2F0aW9ucy5zb3J0KFxyXG4gICAgICAgICAgICAgICAgKGxvYzEsIGxvYzIpID0+XHJcbiAgICAgICAgICAgICAgICAgIGxvYzEuZGlzdGFuY2UgPiBsb2MyLmRpc3RhbmNlXHJcbiAgICAgICAgICAgICAgICAgICAgPyAxXHJcbiAgICAgICAgICAgICAgICAgICAgOiBsb2MyLmRpc3RhbmNlID4gbG9jMS5kaXN0YW5jZSA/IC0xIDogMFxyXG4gICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgIC8vIHRvYXN0IHRvIG5vdGlmeSBsaXN0IHdhcyBzb3J0ZWQgYnkgZGlzdGFuY2VcclxuICAgICAgICAgICAgICAvLyBUT0RPOiBidWdmaXggd2hlbiBzcGFtbWluZyBidXR0b24gdGhlcmUgY2FuIGJlIGEgZmluaXRlIGFtb3VudCBvZiBUb2FzdHMgdGhhdCBjb25zdGFudGx5IGFwcGVhclxyXG4gICAgICAgICAgICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJTb3J0ZWQgYnkgRGlzdGFuY2VcIixcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBUb2FzdC5EVVJBVElPTi5TSE9SVCxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBUb2FzdC5QT1NJVElPTi5DRU5URVIgLy9vcHRpb25hbFxyXG4gICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgVG9hc3Quc2hvdyhvcHRpb25zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIgKyAoZS5tZXNzYWdlIHx8IGUpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkl0ZW1UYXAoZSkge1xyXG4gICAgICAvLyBOYXZpZ2F0ZSB0byBBbmltYWxDZW50ZXJEZXRhaWxzXHJcbiAgICAgIGNvbnNvbGUubG9nKFwib25JdGVtVGFwKGUpLCBuYXZpZ2F0ZVRvIFwiICsgSlNPTi5zdHJpbmdpZnkoZS5pdGVtKSk7XHJcbiAgICAgIHRoaXMuJGVtaXQoXCJzZWxlY3RcIiwgZS5pdGVtKTsgLy8geW91IE5FRUQgdG8gdXNlIGUuaXRlbSAoZS5sb2NhdGlvbiBpcyB1bmRlZmluZWQpXHJcbiAgICAgIHRoaXMuJG5hdmlnYXRlVG8oQW5pbWFsQ2VudGVyRGV0YWlscywge1xyXG4gICAgICAgIHByb3BzOiB7IEFuaW1hbENlbnRlcjogZS5pdGVtIH0sXHJcbiAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXHJcbiAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgbmFtZTogXCJzbGlkZVwiLFxyXG4gICAgICAgICAgZHVyYXRpb246IDM4MCxcclxuICAgICAgICAgIGN1cnZlOiBcImVhc2VJblwiXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxyXG5AaW1wb3J0IFwiLi4vQW5pbWFsQ2VudGVyXCI7XHJcblxyXG5BY3Rpb25CYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDlmY2E7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5pY29ue1xyXG4gIG1hcmdpbi1yaWdodDogNVxyXG59XHJcblxyXG4uZ3BzLWJ1dHRvbntcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgbGlnaHRncmF5LCB3aGl0ZSk7XHJcbiAgY29sb3I6ICRob21lcGFnZS1ibHVlO1xyXG4gIGJvcmRlci13aWR0aDogMTtcclxuICBib3JkZXItY29sb3I6IGdyYXk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjUlO1xyXG4gIG1hcmdpbjogMTA7XHJcbn1cclxuXHJcbi5saXN0LWdyb3VwIHtcclxuICAubGlzdC1ncm91cC1pdGVtLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogOCAxNSA0IDE1O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtbGlnaHQ7XHJcbiAgfVxyXG5cclxuICAubGlzdC1ncm91cC1pdGVtLXRleHQge1xyXG4gICAgbWFyZ2luOiAyIDM7XHJcbiAgfVxyXG5cclxuICAuaG9tZXBhZ2UtYmx1ZSB7XHJcbiAgICBjb2xvcjogJGhvbWVwYWdlLWJsdWU7XHJcbiAgfVxyXG59XHJcblxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgICA8UGFnZSBjbGFzcz1cInBhZ2VcIj5cclxuICAgICAgICA8QWN0aW9uQmFyPlxyXG4gICAgICAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uIEB0YXA9XCIkbmF2aWdhdGVCYWNrKClcIiBhbmRyb2lkLnN5c3RlbUljb249XCJpY19tZW51X2JhY2tcIiAvPlxyXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cIlNlcnZpY2UgUmVxdWVzdFwiIGZvbnRTaXplPVwiMjBcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiLz5cclxuICAgICAgICA8L0FjdGlvbkJhcj5cclxuXHJcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaG9tZS1wYW5lbFwiPlxyXG4gICAgICAgICAgICA8V2ViVmlldyBoZWlnaHQ9XCI4MTkycHhcIiBzcmM9XCJodHRwOi8vYW5pbWFsY2FyZS5sYWNvdW50eS5nb3Yvc2VydmljZS1yZXF1ZXN0L1wiIC8+XHJcbiAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgIDwvUGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHt9O1xyXG4gIH1cclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4uaG9tZS1wYW5lbCB7XHJcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDIwO1xyXG59XHJcblxyXG5BY3Rpb25CYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDlmY2E7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgPFBhZ2U+XHJcbiAgICA8QWN0aW9uQmFyIDp0aXRsZT1cImFjdGlvbkJhclwiLz5cclxuICAgICAgPFN0YWNrTGF5b3V0PlxyXG4gICAgICAgIDxMYWJlbCBjbGFzcz1cIm1zZ1wiPldlIGFwb2xvZ2l6ZS4gVGhlIHF1ZXN0aW9uIHlvdSBhcmUgc2VhcmNoaW5nIGZvciBoYXMgbm90IGJlZW4gYW5zd2VyZWQgeWV0LiBUYWtlIHRoaXMgdGlja2V0IGlmIHlvdSB3YW50IHRvIHN1Ym1pdCB0aGlzIHF1ZXN0aW9uIGFuZCBnZXQgYW4gYW5zd2VyIGZyb20gdGhlIGZyb250IGRlc2suPC9MYWJlbD5cclxuICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVwiKiwqXCIgcm93cz1cIiosKiwqXCI+XHJcbiAgICAgICAgICA8Q2F0ZWdvcnlCdXR0b24gcm93PVwiMFwiIGNvbD1cIjBcIiA6dGl0bGU9XCJ0aXRsZXNbMF1cIiA6YWN0aW9uPVwidG9GYXFcIiBiYWNrZ3JvdW5kQ29sb3I9XCIjZmYwMDAwXCIgLz5cclxuICAgICAgICAgIDxDYXRlZ29yeUJ1dHRvbiByb3c9XCIwXCIgY29sPVwiMVwiIDp0aXRsZT1cInRpdGxlc1sxXVwiIDphY3Rpb249XCJzdWJtaXRUaWNrZXRcIiBiYWNrZ3JvdW5kQ29sb3I9XCIjNkFGRjVBXCIgLz5cclxuICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHsgbWFwU3RhdGUsIG1hcEFjdGlvbnMsIG1hcE11dGF0aW9ucyB9IGZyb20gJ3Z1ZXgnXHJcbmltcG9ydCBDYXRlZ29yeUJ1dHRvbiBmcm9tICdAL2NvbXBvbmVudHMvYnV0dG9ucy9DYXRlZ29yeUJ1dHRvbi52dWUnXHJcbmltcG9ydCBUaWNrZXQgZnJvbSAnQC9tb2RlbHMvVGlja2V0J1xyXG5pbXBvcnQgRmFxIGZyb20gJy4vRmFxLnZ1ZSdcclxuaW1wb3J0IEhvbWUgZnJvbSAnLi9Ib21lLnZ1ZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBkYXRhICgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGFjdGlvbkJhcjogJ1RpY2tldCcsXHJcbiAgICAgIHRpdGxlczogWydObycsICdZZXMnXSxcclxuICAgICAgZmFxOiBGYXEsXHJcbiAgICAgIGhvbWU6IEhvbWVcclxuICAgIH1cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIC4uLm1hcEFjdGlvbnMoWydhZGRGYXEnLCAnYWRkVGlja2V0J10pLFxyXG4gICAgLi4ubWFwTXV0YXRpb25zKFsnc3RvcmVUaWNrZXQnXSksXHJcbiAgICBzdWJtaXRUaWNrZXQgKCkge1xyXG4gICAgICB0aGlzLmFkZEZhcSh0aGlzLnVzZXJGYXEpXHJcbiAgICAgIGNvbnN0IHRpY2tldCA9IG5ldyBUaWNrZXQodGhpcy51c2VyRmFxLnF1ZXN0aW9uKVxyXG4gICAgICB0aGlzLnN0b3JlVGlja2V0KHRpY2tldClcclxuICAgICAgdGhpcy5hZGRUaWNrZXQodGlja2V0KVxyXG4gICAgICB0aGlzLiRuYXZpZ2F0ZVRvKHRoaXMuaG9tZSlcclxuICAgICAgYWxlcnQoe1xyXG4gICAgICAgIHRpdGxlOiAnQWxlcnQnLFxyXG4gICAgICAgIG1lc3NhZ2U6ICdZb3UgaGF2ZSBzdWNjZXNzZnVsbHkgc3VibWl0dGVkIGEgdGlja2V0IScsXHJcbiAgICAgICAgb2tCdXR0b25UZXh0OiAnT0snXHJcbiAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdpZDonLCB0aGlzLnVzZXJUaWNrZXQuaWQpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3RpbWUgaW5zZXJ0ZWQ6JywgdGhpcy51c2VyVGlja2V0LnRpbWVJbilcclxuICAgICAgICBjb25zb2xlLmxvZygncXVlc3Rpb246JywgdGhpcy51c2VyVGlja2V0LnF1ZXN0aW9uKVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIHRvRmFxICgpIHtcclxuICAgICAgdGhpcy4kbmF2aWdhdGVUbyh0aGlzLmZhcSlcclxuICAgIH1cclxuICB9LFxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICAuLi5tYXBTdGF0ZShbJ3VzZXJGYXEnLCAndGlja2V0cycsICd1c2VyVGlja2V0J10pXHJcbiAgfSxcclxuICBjb21wb25lbnRzOiB7XHJcbiAgICBDYXRlZ29yeUJ1dHRvbixcclxuICAgIEZhcSxcclxuICAgIEhvbWVcclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4gIC5tc2cge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMDtcclxuICB9XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8UGFnZT5cclxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XCJUaWNrZXQgUHJvY2Vzc2luZ1wiIC8+XHJcbiAgICA8U3RhY2tMYXlvdXQ+XHJcbiAgICAgIDxMYWJlbCB0ZXh0PVwiUGhvbmUgbnVtYmVyOlwiIC8+XHJcbiAgICAgIDxUZXh0VmlldyB2LW1vZGVsPVwicGhvbmVcIiAvPlxyXG5cclxuICAgICAgPExhYmVsIHRleHQ9XCJGaXJzdCBhbmQgbGFzdCBuYW1lOlwiIC8+XHJcbiAgICAgIDxUZXh0VmlldyB2LW1vZGVsPVwibmFtZVwiIC8+XHJcblxyXG4gICAgICA8TGFiZWwgdGV4dD1cIldoYXQgYXJlIHlvdSBoZXJlIGZvcj9cIi8+XHJcbiAgICAgIDxUZXh0VmlldyB2LW1vZGVsPVwicXVlcnlcIi8+XHJcblxyXG4gICAgICA8QnV0dG9uIEB0YXA9XCJzdWJtaXRUaWNrZXRcIiB0ZXh0PVwiU3VibWl0IFRpY2tldFwiLz5cclxuICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0ICB7IG1hcFN0YXRlLCBtYXBBY3Rpb25zLCBtYXBNdXRhdGlvbnMgfSBmcm9tICd2dWV4J1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuL0hvbWUudnVlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGRhdGEgKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcGhvbmU6ICcnLFxyXG4gICAgICBuYW1lOiAnJyxcclxuICAgICAgcXVlcnk6JycsXHJcbiAgICAgIGhvbWU6IEhvbWUsXHJcbiAgICAgIGxpbWl0OiAwXHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICAuLi5tYXBBY3Rpb25zKFsnYWRkVGlja2V0J10pLFxyXG4gICAgLy8gdGhpcy5zZXRUaWNrZXRJbmZvKG9iamVjdCksIHdoZXJlIG9iamVjdCBjb250YWlucyBwaG9uZSwgbmFtZSwgcXVlcnksIGNvbW1lbnQgcHJvcGVydGllcyxcclxuICAgIHN1Ym1pdFRpY2tldCAoKSB7XHJcbiAgICAgIHRoaXMuJG5hdmlnYXRlVG8odGhpcy5ob21lKVxyXG4gICAgICB0aGlzLmFkZFRpY2tldCh7XHJcbiAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgIHBob25lOiB0aGlzLnBob25lLFxyXG4gICAgICAgIHF1ZXJ5OiB0aGlzLnF1ZXJ5LFxyXG4gICAgICAgIGxvY2F0aW9uOiB0aGlzLmxvY2F0aW9uXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgLi4ubWFwU3RhdGUoWyd1c2VyVGlja2V0JywgJ2FwcHJvdmVkVGlja2V0JywgJ2xvY2F0aW9uJ10pXHJcbiAgfSxcclxuICB3YXRjaDoge1xyXG4gICAgYXBwcm92ZWRUaWNrZXQobmV3VmFsLCBvbGRWYWwpIHtcclxuICAgICAgaWYgKHRoaXMubGltaXQgPCAxKSB7XHJcbiAgICAgICAgaWYgKG5ld1ZhbCAhPSBudWxsKSB7XHJcbiAgICAgICAgICBhbGVydCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIlRpY2tldCBTdWJtaXR0ZWRcIixcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJIZWxsbyBcIiArIG5ld1ZhbC5uYW1lICsgXCIsIHlvdSdyZSB0aWNrZXQgIyBpcyBcIiArIG5ld1ZhbC5udW1iZXJcclxuICAgICAgICAgICAgKyBcIi4gWW91IHdpbGwgYmUgc2VydmVkIGF0IHdpbmRvdyBcIiArIChuZXdWYWwud2luZG93ICsgMSkgKyBcIi5cIixcclxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGFsZXJ0KHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiTm8gc2VydmljZVwiLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIlRoZXJlIGFyZSBjdXJyZW50bHkgbm8gZW1wbG95ZWVzIHNlcnZpbmcgdGlja2V0c1wiLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5saW1pdCsrXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHJcbjwvc3R5bGU+XHJcbiIsIlxyXG48IS0tIFBhZ2UgQ29udHJvbGxzIHRoZSBNYWluIHZpZXcgb2YgdGlja2V0IHNlbGN0aW9uLiBDaGFuZ2VpbmcgdGVtcGxldCB3aWxsIGNoYW5nZSB0aGUgdGV4dCB1bmRlciB0aGUgb3B0aW9ucyBpbiB0aGVcclxuICAgICAgc2Nyb2xsIGJhci5cclxuICAgICAgICAgICAgTGlzdCBQaWNrZXI6XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVzIHRoZSB0ZXh0IHdoZWVsLCB3aGljaCBpcyBwb3B1bGF0ZWQgYnkgdGhlIG9iamVjdCByZXR1cm5lZCBieSB0aGUgc2NyaXB0XHJcbiAgICAgICAgICAgIExhYmVsOlxyXG4gICAgICAgICAgICAgICAganVzdCBhIHdheSB0byBtYWtlIHBsYWluIHRleHQgb24gYXBwLlxyXG4gICAgICAgICAgICBTdGFja0xheW91dDpcclxuICAgICAgICAgICAgICAgIGFsbG93cyB5b3UgbyBwb3B1bGF0ZSB0aGUgYm90dG9tIHBvcnRpb24gb2YgLS0+XHJcblxyXG5cclxuXHJcbjx0ZW1wbGF0ZT5cclxuICAgIDxQYWdlPlxyXG4gICAgICAgIDxBY3Rpb25CYXIgdGl0bGU9XCJUaWNrZXQgUmVhc29uXCIvPlxyXG4gICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XCIqXCIgcm93cz1cImF1dG8sIGF1dG8sIGF1dG8sIGF1dG9cIj5cclxuICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwibXNnXCIgdGV4dFdyYXA9XCJ0cnVlXCIgcm93PVwiMFwiPllvdSBhcmUgYXQgdGhlIHt7c2l0ZX19IEFuaW1hbCBDYXJlIGFuZCBDb250cm9sIENlbnRlci48L0xhYmVsPlxyXG5cclxuICAgICAgICAgICAgPExpc3RQaWNrZXIgcm93PVwiMVwiIDppdGVtcz1cImNob2ljZXNcIiBzZWxlY3RlZEluZGV4PVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBzZWxlY3RlZEluZGV4Q2hhbmdlPVwic2VsZWN0ZWRJbmRleENoYW5nZWRcIiB2LW1vZGVsPVwic2VsZWN0ZWRJbmRleFwiLz5cclxuXHJcbjwhLS0gICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJtc2dcIiByb3c9XCIzXCIgdGV4dD1cIllvdSBhcmUgYWx3YXlzIGFsbG93ZWQgdG8gZ28gdG8gdGhlIGtlbm5lbHMgd2l0aG91dCBhc2tpbmdcIi0tPlxyXG48IS0tICAgICAgICAgICAgICAgICAgIHYtaWY9XCIhaXNUaWNrZXRcIiB0ZXh0V3JhcD1cInRydWVcIi8+LS0+XHJcblxyXG5cclxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cIjNcIiB2LWlmPVwiaXNUaWNrZXRcIj5cclxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cIm1zZ1wiIHRleHQ9XCIgICBUZWxsIHVzIGFib3V0IHdoYXQgeW91IHdvdWxkIGxpa2UgdG8ga25vd1wiIHRleHRXcmFwPVwidHJ1ZVwiLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8VGV4dFZpZXcgdi1tb2RlbD1cIm90aGVyVGV4dFwiLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJIb21lXCIgQHRhcD1cInRvSG9tZVwiLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkNyZWF0ZSBUaWNrZXRcIiBAdGFwPVwiY3JlYXRlVGlja2V0XCIvPlxyXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgIDwvR3JpZExheW91dD5cclxuICAgIDwvUGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgSG9tZSBmcm9tICcuL0hvbWUudnVlJ1xyXG4gICAgaW1wb3J0IFRpY2tldEZvcm0gZnJvbSAnLi9UaWNrZXRGb3JtLnZ1ZSdcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgZGF0YSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGNob2ljZXM6IFtcclxuICAgICAgICAgICAgICAgICAgICAnRHJvcCBPZmYnLFxyXG4gICAgICAgICAgICAgICAgICAgICdBZG9wdGlvbiAnLFxyXG4gICAgICAgICAgICAgICAgICAgICdvdGhlcidcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBvdGhlclRleHQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJbmRleDogMCxcclxuICAgICAgICAgICAgICAgIGlzVGlja2V0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaG9tZTogSG9tZSxcclxuICAgICAgICAgICAgICAgIHRpY2tldEZvcm06IFRpY2tldEZvcm0sXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgdG9Ib21lKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyh0aGlzLmhvbWUpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNyZWF0ZVRpY2tldCgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8odGhpcy50aWNrZXRGb3JtLCB7cHJvcHM6IHtxdWVyeTogdGhpcy5vdGhlclRleHR9fSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2VsZWN0ZWRJbmRleENoYW5nZWQoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4ID49IDEpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1RpY2tldCA9IHRydWVcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzVGlja2V0ID0gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgc2l0ZTogU3RyaW5nXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgICAubXNnIHtcclxuICAgICAgICBmb250LXNpemU6IDE4O1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuPC9zdHlsZT5cclxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKipcXHJcXG4gKiBDb252ZW5pZW50IHNpbmdsZSBpbXBvcnQgZm9yIGxpZ2h0IHZhcmlhYmxlc1xcclxcbiAqIEluY2x1ZGVzIGJhc2UgdmFyaWFibGVzIHdpdGggbGlnaHQgb3ZlcnJpZGVzXFxyXFxuICoqL1xcbi8qKlxcclxcbiAqIExpZ2h0IHZhcmlhYmxlIG92ZXJyaWRlc1xcclxcbiAqKi9cXG4vKipcXHJcXG4gKiBUaGVtZSB2YXJpYWJsZXMgb3ZlcnJpZGVzXFxyXFxuKiovXFxuLmFuaW0tY292ZXJbZGF0YS12LTVmZjdkMTVjXSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGtleS1jb3Zlci1kYXRhLXYtNWZmN2QxNWM7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDE7XFxuICBhbmltYXRpb24tZGVsYXk6IDAuNTtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG5Aa2V5ZnJhbWVzIGtleS1jb3Zlci1kYXRhLXYtNWZmN2QxNWMge1xcbjAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTAwKSBzY2FsZSgwLCAwKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbjMwJSB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG4xMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSwgMSk7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG59XFxuLmFuaW0tY29udGVudDFbZGF0YS12LTVmZjdkMTVjXSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGtleS1jb250ZW50LWRhdGEtdi01ZmY3ZDE1YztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTtcXG4gIGFuaW1hdGlvbi1kZWxheTogMC43NTtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG4uYW5pbS1jb250ZW50MltkYXRhLXYtNWZmN2QxNWNdIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBhbmltYXRpb24tbmFtZToga2V5LWNvbnRlbnQtZGF0YS12LTVmZjdkMTVjO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjA7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxuLmFuaW0tY29udGVudDNbZGF0YS12LTVmZjdkMTVjXSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGtleS1jb250ZW50LWRhdGEtdi01ZmY3ZDE1YztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTtcXG4gIGFuaW1hdGlvbi1kZWxheTogMS4yNTtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG4uYW5pbS1jb250ZW50NFtkYXRhLXYtNWZmN2QxNWNdIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBhbmltYXRpb24tbmFtZToga2V5LWNvbnRlbnQtZGF0YS12LTVmZjdkMTVjO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjU7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxuQGtleWZyYW1lcyBrZXktY29udGVudC1kYXRhLXYtNWZmN2QxNWMge1xcbjAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAsIDUwKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbjEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbn1cXG4udGl0bGVbZGF0YS12LTVmZjdkMTVjXSB7XFxuICBmb250LXNpemU6IDE4ZW07XFxuICBjb2xvcjogIzBGMzM2RDtcXG59XFxuLnN0YWNrW2RhdGEtdi01ZmY3ZDE1Y10ge1xcbiAgcGFkZGluZy10b3A6IDE0O1xcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMTtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNkNGQ0ZDQ7XFxufVxcbi5zdGFjay1ob3Vyc1tkYXRhLXYtNWZmN2QxNWNdIHtcXG4gIHBhZGRpbmctdG9wOiA2O1xcbn1cXG4uaG91cnNbZGF0YS12LTVmZjdkMTVjXSB7XFxuICBjb2xvcjogIzAyMjczNDtcXG59XFxuQWN0aW9uQmFyW2RhdGEtdi01ZmY3ZDE1Y10ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOWZjYTtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICA7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9sb2NhdGlvbi9BbmltYWxDZW50ZXJEZXRhaWxzLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKipcXHJcXG4gKiBDb252ZW5pZW50IHNpbmdsZSBpbXBvcnQgZm9yIGxpZ2h0IHZhcmlhYmxlc1xcclxcbiAqIEluY2x1ZGVzIGJhc2UgdmFyaWFibGVzIHdpdGggbGlnaHQgb3ZlcnJpZGVzXFxyXFxuICoqL1xcbi8qKlxcclxcbiAqIExpZ2h0IHZhcmlhYmxlIG92ZXJyaWRlc1xcclxcbiAqKi9cXG4vKipcXHJcXG4gKiBUaGVtZSB2YXJpYWJsZXMgb3ZlcnJpZGVzXFxyXFxuKiovXFxuLmZhcV9xdWVzdGlvbltkYXRhLXYtMGE0YmIyNDVdIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAyMDtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuLmZhcV9hbnN3ZXJbZGF0YS12LTBhNGJiMjQ1XSB7XFxuICBjb2xvcjogIzQ1NDU0NTtcXG59XFxuLmxpc3QtZ3JvdXAtaXRlbS10ZXh0W2RhdGEtdi0wYTRiYjI0NV0ge1xcbiAgbWFyZ2luOiAyIDM7XFxufVxcbi5saXN0LWdyb3VwLWl0ZW0tY29udGVudFtkYXRhLXYtMGE0YmIyNDVdIHtcXG4gIHBhZGRpbmc6IDggMTUgNCAxNTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxufVxcbi5ob21lcGFnZS1ibHVlW2RhdGEtdi0wYTRiYjI0NV0ge1xcbiAgY29sb3I6ICMwNzgzZjg7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIDtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL3N1Ymxpc3RzL0ZhcUluZm8udnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcclxcbiAqIENvbnZlbmllbnQgc2luZ2xlIGltcG9ydCBmb3IgbGlnaHQgdmFyaWFibGVzXFxyXFxuICogSW5jbHVkZXMgYmFzZSB2YXJpYWJsZXMgd2l0aCBsaWdodCBvdmVycmlkZXNcXHJcXG4gKiovXFxuLyoqXFxyXFxuICogTGlnaHQgdmFyaWFibGUgb3ZlcnJpZGVzXFxyXFxuICoqL1xcbi8qKlxcclxcbiAqIFRoZW1lIHZhcmlhYmxlcyBvdmVycmlkZXNcXHJcXG4qKi9cXG5BY3Rpb25CYXJbZGF0YS12LWUzOWQxMDkyXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5ZmNhO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcbi5tZXNzYWdlW2RhdGEtdi1lMzlkMTA5Ml0ge1xcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjA7XFxuICBjb2xvcjogIzAwMDAwMDtcXG59XFxuLmZhcV9xdWVzdGlvbltkYXRhLXYtZTM5ZDEwOTJdIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAyMDtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuLmZhcV9hbnN3ZXJbZGF0YS12LWUzOWQxMDkyXSB7XFxuICBjb2xvcjogIzQ1NDU0NTtcXG59XFxuLmxpc3QtZ3JvdXAtaXRlbS10ZXh0W2RhdGEtdi1lMzlkMTA5Ml0ge1xcbiAgbWFyZ2luOiA3IDg7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIDtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi92aWV3cy9GYXEudnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcclxcbiAqIENvbnZlbmllbnQgc2luZ2xlIGltcG9ydCBmb3IgbGlnaHQgdmFyaWFibGVzXFxyXFxuICogSW5jbHVkZXMgYmFzZSB2YXJpYWJsZXMgd2l0aCBsaWdodCBvdmVycmlkZXNcXHJcXG4gKiovXFxuLyoqXFxyXFxuICogTGlnaHQgdmFyaWFibGUgb3ZlcnJpZGVzXFxyXFxuICoqL1xcbi8qKlxcclxcbiAqIFRoZW1lIHZhcmlhYmxlcyBvdmVycmlkZXNcXHJcXG4qKi9cXG4uQWN0aW9uX0JhcltkYXRhLXYtMmYyYmU3ZTRdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDlmY2E7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuLlNfQmFyW2RhdGEtdi0yZjJiZTdlNF0ge1xcbiAgY29sb3I6ICMwNTA1MDU7XFxufVxcbi5TX0J1dHRvbltkYXRhLXYtMmYyYmU3ZTRdIHtcXG4gIC8qIHRleHQ9XFxcInJpZ2h0XFxcIjsgXFxyXFxuICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJyaWdodFxcXCI7XFxyXFxuICAgICAgICB3aWR0aD1cXFwiMzMlXFxcIiBcXHJcXG4gICAgICAgIGhlaWdodD1cXFwiNzBcXFwiIFxcclxcbiAgICAgICAgLypiYWNrZ3JvdW5kQ29sb3I9XFxcIiMxYzZiNDhcXFwiLz4qL1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJ+L2Fzc2V0cy9pbWFnZXMvTmF0aXZlU2NyaXB0LVZ1ZS5wbmdcXFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG4uY292ZXJbZGF0YS12LTJmMmJlN2U0XSB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHBsdW0sICMwMDlmY2EpO1xcbn1cXG4uaG9tZXBhZ2UtYmx1ZVtkYXRhLXYtMmYyYmU3ZTRdIHtcXG4gIGNvbG9yOiAjMDc4M2Y4O1xcbn1cXG4uQWN0aW9uX1RleHRbZGF0YS12LTJmMmJlN2U0XSB7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxufVxcbi5Ib21lQnV0dG9uW2RhdGEtdi0yZjJiZTdlNF0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAyNTtcXG4gIGZvbnQtc2l6ZTogMTQlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nLXRvcDogN2VtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XFxufVxcbi5sYXlvdXRbZGF0YS12LTJmMmJlN2U0XSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xcbn1cXG4ubWVzc2FnZVtkYXRhLXYtMmYyYmU3ZTRdIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDIwO1xcbiAgY29sb3I6ICMyNTI1MjU7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIDtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi92aWV3cy9Ib21lLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKipcXHJcXG4gKiBDb252ZW5pZW50IHNpbmdsZSBpbXBvcnQgZm9yIGxpZ2h0IHZhcmlhYmxlc1xcclxcbiAqIEluY2x1ZGVzIGJhc2UgdmFyaWFibGVzIHdpdGggbGlnaHQgb3ZlcnJpZGVzXFxyXFxuICoqL1xcbi8qKlxcclxcbiAqIExpZ2h0IHZhcmlhYmxlIG92ZXJyaWRlc1xcclxcbiAqKi9cXG4vKipcXHJcXG4gKiBUaGVtZSB2YXJpYWJsZXMgb3ZlcnJpZGVzXFxyXFxuKiovXFxuQWN0aW9uQmFyW2RhdGEtdi0zZTU5Nzg2NF0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOWZjYTtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG4uaWNvbltkYXRhLXYtM2U1OTc4NjRdIHtcXG4gIG1hcmdpbi1yaWdodDogNTtcXG59XFxuLmdwcy1idXR0b25bZGF0YS12LTNlNTk3ODY0XSB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgbGlnaHRncmF5LCB3aGl0ZSk7XFxuICBjb2xvcjogIzA3ODNmODtcXG4gIGJvcmRlci13aWR0aDogMTtcXG4gIGJvcmRlci1jb2xvcjogZ3JheTtcXG4gIGJvcmRlci1yYWRpdXM6IDI1JTtcXG4gIG1hcmdpbjogMTA7XFxufVxcbi5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW0tY29udGVudFtkYXRhLXYtM2U1OTc4NjRdIHtcXG4gIHBhZGRpbmc6IDggMTUgNCAxNTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxufVxcbi5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW0tdGV4dFtkYXRhLXYtM2U1OTc4NjRdIHtcXG4gIG1hcmdpbjogMiAzO1xcbn1cXG4ubGlzdC1ncm91cCAuaG9tZXBhZ2UtYmx1ZVtkYXRhLXYtM2U1OTc4NjRdIHtcXG4gIGNvbG9yOiAjMDc4M2Y4O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICA7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vdmlld3MvTG9jYXRpb24udnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcclxcbi8qIENTUyAqL1xcbi5jbG9zZVtkYXRhLXYtNGViYTJkMTJdIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjA7XFxyXFxuICBjb2xvcjogcmdiKDIyNiwgMjI5LCAyMjkpO1xcclxcbiAgbWFyZ2luOiAxNSAwIDAgMTU7XFxufVxcblRleHRWaWV3W2RhdGEtdi00ZWJhMmQxMl0ge1xcclxcbiAgYm9yZGVyLXdpZHRoOiAxO1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xcbn1cXG4uZGVzY3JpcHRpb24tdGV4dFtkYXRhLXYtNGViYTJkMTJdIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTQ7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuLmRlc2NyaXB0aW9uLWljb25bZGF0YS12LTRlYmEyZDEyXSB7XFxyXFxuICBmb250LXNpemU6IDE2O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBjb2xvcjogIzNlOWVkYjtcXHJcXG4gIG1hcmdpbi1yaWdodDogODtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxufVxcbi5kZXNjcmlwdGlvbi12YWx1ZVtkYXRhLXYtNGViYTJkMTJdIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTQ7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBtYXJnaW46IDg7XFxufVxcbi5kZXNjcmlwdGlvbi12YWx1ZS5pc0F2YWlsYWJsZVtkYXRhLXYtNGViYTJkMTJdIHtcXHJcXG4gIGNvbG9yOiBncmVlbjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkXFxufVxcbi5kZXNjcmlwdGlvbi12YWx1ZS5pc05vdEF2YWlsYWJsZVtkYXRhLXYtNGViYTJkMTJdIHtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxuICBmb250LXdlaWdodDogYm9sZFxcbn1cXG4ucmF0ZVtkYXRhLXYtNGViYTJkMTJdIHtcXHJcXG4gIHBhZGRpbmctdG9wOiAzO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgY29sb3I6ICNmZmU5MDA7XFxyXFxuICBmb250LXNpemU6IDE4O1xcbn1cXG4ucmF0aW5nLXZhbHVlW2RhdGEtdi00ZWJhMmQxMl0ge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDU7XFxufVxcbi5saWtlZC1hY3RpdmVbZGF0YS12LTRlYmEyZDEyXSB7XFxyXFxuICBjb2xvcjogIzQwODBmZjtcXG59XFxuLmhlYXJ0LWFjdGl2ZVtkYXRhLXYtNGViYTJkMTJdIHtcXHJcXG4gIGNvbG9yOiAjYjUxMjEzO1xcbn1cXG4uZGVmYXVsdFtkYXRhLXYtNGViYTJkMTJdIHtcXHJcXG4gIGNvbG9yOiAjODI4MjgyO1xcbn1cXG4ubGF5b3V0W2RhdGEtdi00ZWJhMmQxMl0ge1xcclxcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXHJcXG4gIGNvbG9yOiAjODI4MjgyO1xcclxcbiAgZm9udC1zaXplOiAxNDtcXHJcXG4gIGhlaWdodDogMzA7XFxyXFxuICBwYWRkaW5nOiA1IDAgNSAwO1xcbn1cXG4ubGlrZS1pY29uW2RhdGEtdi00ZWJhMmQxMl0ge1xcclxcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXHJcXG4gIGhlaWdodDogMzA7XFxyXFxuICBmb250LXNpemU6IDE2O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAyO1xcclxcbiAgcGFkZGluZzogNSA1IDUgNTtcXG59XFxuLml0ZW0tbmFtZVtkYXRhLXYtNGViYTJkMTJdIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTQ7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLml0ZW0tY2F0ZWdvcnlbZGF0YS12LTRlYmEyZDEyXSB7XFxyXFxuICBmb250LXNpemU6IDE0O1xcclxcbiAgY29sb3I6ICM4MjgyODI7XFxufVxcbi5jYXRlZ29yeS1pY29uW2RhdGEtdi00ZWJhMmQxMl0ge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZy10b3A6IDU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAyNTtcXHJcXG4gIGJvcmRlci13aWR0aDogMTtcXHJcXG4gIGJvcmRlci1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIG1hcmdpbi10b3A6IDQ7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDE1O1xcclxcbiAgd2lkdGg6IDQwO1xcclxcbiAgaGVpZ2h0OiA0MDtcXG59XFxuLmNvbnRlbnRbZGF0YS12LTRlYmEyZDEyXSB7XFxyXFxuICBtYXJnaW4tbGVmdDogMTY7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDE2O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMztcXHJcXG4gIC8qIG1hcmdpbi10b3A6IDE2OyAqL1xcbn1cXG4uY2FyZC1pbWdbZGF0YS12LTRlYmEyZDEyXSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMjUwO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNTtcXG59XFxuLmNhcmQtaW1nLXRodW1iW2RhdGEtdi00ZWJhMmQxMl0ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgMjMwLCAyMzApO1xcclxcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDU7XFxyXFxuICB3aWR0aDogMTMwO1xcclxcbiAgaGVpZ2h0OiA3MDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA1O1xcbn1cXG4ubGluZVtkYXRhLXYtNGViYTJkMTJdIHtcXHJcXG4gIGhlaWdodDogMC41O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY29sb3I6ICNlMGUwZTA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbn1cXG4ubGluZUJyZWFrW2RhdGEtdi00ZWJhMmQxMl0ge1xcclxcbiAgaGVpZ2h0OiAwLjU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjb2xvcjogI2UwZTBlMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxufVxcclxcblxcclxcblxcclxcbi8qIEFuaW1hdGlvbnMgKi9cXG4uYW5pbS1wYWdlW2RhdGEtdi00ZWJhMmQxMl0ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDZkODtcXHJcXG4gIGFuaW1hdGlvbi1uYW1lOiBrZXktcGFnZS1kYXRhLXYtNGViYTJkMTI7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDI7XFxyXFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXHJcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxyXFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxuQGtleWZyYW1lcyBrZXktcGFnZS1kYXRhLXYtNGViYTJkMTIge1xcbjAlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RhZGFkYTtcXG59XFxuMjAlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RiZDJkNTtcXG59XFxuMTAwJSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG59XFxuLmFuaW0tY292ZXJbZGF0YS12LTRlYmEyZDEyXSB7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IGtleS1jb3Zlci1kYXRhLXYtNGViYTJkMTI7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDE7XFxyXFxuICBhbmltYXRpb24tZGVsYXk6IDAuNTtcXHJcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcclxcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXHJcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG5Aa2V5ZnJhbWVzIGtleS1jb3Zlci1kYXRhLXYtNGViYTJkMTIge1xcbjAlIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNTUwKSBzY2FsZSgwLCAwKTtcXHJcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbjMwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDAuNTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XFxyXFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG4xMDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSwgMSk7XFxyXFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG59XFxuLmFuaW0taW1hZ2VzW2RhdGEtdi00ZWJhMmQxMl0ge1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIGFuaW1hdGlvbi1uYW1lOiBrZXktaW1hZ2VzLWRhdGEtdi00ZWJhMmQxMjtcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogMC43O1xcclxcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxyXFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcclxcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbkBrZXlmcmFtZXMga2V5LWltYWdlcy1kYXRhLXYtNGViYTJkMTIge1xcbjAlIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNTUwKSBzY2FsZSgwLCAwKTtcXHJcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbjMwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDAuNTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XFxyXFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG4xMDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSwgMSk7XFxyXFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG59XFxuLmFuaW0taXRlbUluZm9bZGF0YS12LTRlYmEyZDEyXSB7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IGtleS1pdGVtSW5mby1kYXRhLXYtNGViYTJkMTI7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDE7XFxyXFxuICBhbmltYXRpb24tZGVsYXk6IDEuMjtcXHJcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcclxcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXHJcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG5Aa2V5ZnJhbWVzIGtleS1pdGVtSW5mby1kYXRhLXYtNGViYTJkMTIge1xcbjAlIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAsIDUwKTtcXHJcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbjEwMCUge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcXHJcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbn1cXG4uYW5pbS1saWtlc1tkYXRhLXYtNGViYTJkMTJdIHtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICBhbmltYXRpb24tbmFtZToga2V5LWxpa2VzLWRhdGEtdi00ZWJhMmQxMjtcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogMS41O1xcclxcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxyXFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcclxcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbkBrZXlmcmFtZXMga2V5LWxpa2VzLWRhdGEtdi00ZWJhMmQxMiB7XFxuMCUge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCwgNTApO1xcclxcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxuMTAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xcclxcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxufVxcbi5hbmltLWNvbnRlbnRbZGF0YS12LTRlYmEyZDEyXSB7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IGtleS1jb250ZW50LWRhdGEtdi00ZWJhMmQxMjtcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogMS44O1xcclxcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxyXFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcclxcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbkBrZXlmcmFtZXMga2V5LWNvbnRlbnQtZGF0YS12LTRlYmEyZDEyIHtcXG4wJSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwLCA1MCk7XFxyXFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG4xMDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XFxyXFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG59XFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2NvbXBvbmVudHMvYWRvcHRpb24vQWRvcHRpb25BbmltYWxEZXRhaWxzLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uaXRlbS1jYXRlZ29yeVtkYXRhLXYtZjE0MjJhMTBdIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTQ7XFxyXFxuICBjb2xvcjogIzgyODI4MjtcXG59XFxuLmdlbmRlci1pY29uW2RhdGEtdi1mMTQyMmExMF0ge1xcclxcbiAgcGFkZGluZy10b3A6IDM7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAzO1xcclxcbiAgZm9udC1zaXplOiAxNjtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTA7XFxufVxcbi5pbmZvLWljb25bZGF0YS12LWYxNDIyYTEwXSB7XFxyXFxuICBwYWRkaW5nLXRvcDogMztcXHJcXG4gIHBhZGRpbmctbGVmdDogMztcXHJcXG4gIGNvbG9yOiBncmF5O1xcclxcbiAgZm9udC1zaXplOiAxNDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxMDtcXG59XFxuLnJhdGluZy12YWx1ZVtkYXRhLXYtZjE0MjJhMTBdIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA1O1xcbn1cXG4ubGlrZWQtYWN0aXZlW2RhdGEtdi1mMTQyMmExMF0ge1xcclxcbiAgY29sb3I6ICM0MDgwZmY7XFxufVxcbi5oZWFydC1hY3RpdmVbZGF0YS12LWYxNDIyYTEwXSB7XFxyXFxuICBjb2xvcjogI2I1MTIxMztcXG59XFxuLmRlZmF1bHRbZGF0YS12LWYxNDIyYTEwXSB7XFxyXFxuICBjb2xvcjogIzgyODI4MjtcXG59XFxuLmxheW91dFtkYXRhLXYtZjE0MjJhMTBdIHtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxyXFxuICBjb2xvcjogIzgyODI4MjtcXHJcXG4gIGZvbnQtc2l6ZTogMTQ7XFxyXFxuICBoZWlnaHQ6IDMwO1xcclxcbiAgcGFkZGluZzogNSAwIDUgMDtcXG59XFxuLmxpa2UtaWNvbltkYXRhLXYtZjE0MjJhMTBdIHtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxyXFxuICBoZWlnaHQ6IDMwO1xcclxcbiAgZm9udC1zaXplOiAxNjtcXHJcXG4gIG1hcmdpbi1yaWdodDogMjtcXHJcXG4gIHBhZGRpbmc6IDUgNSA1IDU7XFxufVxcbi5pdGVtLW5hbWVbZGF0YS12LWYxNDIyYTEwXSB7XFxyXFxuICBmb250LXNpemU6IDE0O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMjtcXG59XFxuLml0ZW0tY2F0ZWdvcnlbZGF0YS12LWYxNDIyYTEwXSB7XFxyXFxuICBmb250LXNpemU6IDE0O1xcclxcbiAgY29sb3I6ICM4MjgyODI7XFxufVxcbi5jYXRlZ29yeS1pY29uW2RhdGEtdi1mMTQyMmExMF0ge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZy10b3A6IDU7XFxyXFxuICBib3JkZXItY29sb3I6IHdoaXRlO1xcclxcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMjU7XFxyXFxuICBib3JkZXItd2lkdGg6IDE7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBtYXJnaW4tdG9wOiA0O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxNTtcXHJcXG4gIHdpZHRoOiA0MDtcXHJcXG4gIGhlaWdodDogNDA7XFxufVxcbi5jb250ZW50W2RhdGEtdi1mMTQyMmExMF0ge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDE2O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxNjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDM7XFxyXFxuICBtYXJnaW4tdG9wOiAxNjtcXG59XFxuLmNhcmQtaW1nW2RhdGEtdi1mMTQyMmExMF0ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDE1MDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDU7XFxufVxcbi5saW5lW2RhdGEtdi1mMTQyMmExMF0ge1xcclxcbiAgaGVpZ2h0OiAwLjU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjb2xvcjogI2UwZTBlMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxufVxcbi5saW5lQnJlYWtbZGF0YS12LWYxNDIyYTEwXSB7XFxyXFxuICBoZWlnaHQ6IDc7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjb2xvcjogI2UwZTBlMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxufVxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIDtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL2Fkb3B0aW9uL0FuaW1hbENhcmQudnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5kZWZhdWx0LWltZ1tkYXRhLXYtMDVjOThlYWNdIHtcXG4gICAgY29sb3I6ICNkMWNlY2U1YjtcXG59XFxuLmNhdGVnb3J5LW5hbWVbZGF0YS12LTA1Yzk4ZWFjXSB7XFxuICAgIGNvbG9yOiAjZjdmN2Y3O1xcbiAgICBmb250LXNpemU6IDE0O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW46IDUgMCAxNSAwXFxufVxcbi5iYW5uZXJbZGF0YS12LTA1Yzk4ZWFjXSB7XFxuICAgIGNvbG9yOiAjYmRiZGJkO1xcbiAgICBvcGFjaXR5OiAuMztcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2NvbXBvbmVudHMvYWRvcHRpb24vY2F0ZWdvcnkudnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcclxcblxcclxcbi8qIGJ1dHRvbiBvbiBhbmRyb2lkIGlzIHN0eWxlZCB3aXRoIGRlZmF1bHQgc2V0dGluZyB3aGVuIGJvcmRlciByYWRpdXMgaXMgb21pdHRlZCovXFxuLmJ1dHRvbltkYXRhLXYtNzYwOWEyMzlde1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjUlO1xcbn1cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICA7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9idXR0b25zL0NhdGVnb3J5QnV0dG9uLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXHJcXG5cXHJcXG4vKiBidXR0b24gb24gYW5kcm9pZCBpcyBzdHlsZWQgd2l0aCBkZWZhdWx0IHNldHRpbmcgd2hlbiBib3JkZXIgcmFkaXVzIGlzIG9taXR0ZWQqL1xcbi5idXR0b25bZGF0YS12LTQ0YWU1NzE4XXtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDI1JTtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbn1cXHJcXG5cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICA7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9idXR0b25zL0ljb25CdXR0b24udnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi50YWJ2aWV3LmFjdGl2ZSB7XFxyXFxuICBib3JkZXItYm90dG9tLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDM7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBoZWlnaHQ6IDUwO1xcbn1cXG4udGFidmlld1RleHQge1xcclxcbiAgbWFyZ2luLXRvcDogMTU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1O1xcclxcbiAgZm9udC1zaXplOiAxMztcXHJcXG4gIGNvbG9yOiAjZDhkMmQyO1xcbn1cXG4udGFidmlld1RleHQuYWN0aXZlIHtcXHJcXG4gIG1hcmdpbi10b3A6IDA7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubmF2SWNvbiB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiAzO1xcbn1cXG4ubmF2VGFiIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDlmY2E7XFxyXFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuLm5hdlRhYnZpZXcge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxyXFxuXFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL3ZpZXdzL0Fkb3B0aW9uLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uaG9tZS1wYW5lbFtkYXRhLXYtM2NjZWNmMDldIHtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDIwO1xcbn1cXG5BY3Rpb25CYXJbZGF0YS12LTNjY2VjZjA5XSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5ZmNhO1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIDtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi92aWV3cy9TZXJ2aWNlUmVxdWVzdC52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLm1zZ1tkYXRhLXYtMDdiNDBjMGFdIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjA7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIDtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi92aWV3cy9UaWNrZXQudnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5tc2dbZGF0YS12LTEzOWQ5NTUzXSB7XFxuICAgIGZvbnQtc2l6ZTogMTg7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL3ZpZXdzL1RpY2tldE9wdGlvbnMudnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImFuaW0tcGFnZVwiLFxuICAgICAgYXR0cnM6IHsgYWN0aW9uQmFySGlkZGVuOiBcInRydWVcIiwgYmFja2dyb3VuZFNwYW5VbmRlclN0YXR1c0JhcjogXCJ0cnVlXCIgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYWluXCIsIGF0dHJzOiB7IHZlcnRpY2FsQWxpZ25tZW50OiBcInRvcFwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFuaW0tY292ZXJcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgcm93czogXCJhdXRvXCIsIGNvbHVtbnM6IFwiKlwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtaW1nXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIi00MFwiLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE4MFwiLFxuICAgICAgICAgICAgICAgICAgc3RyZXRjaDogXCJhc3BlY3RGaWxsXCIsXG4gICAgICAgICAgICAgICAgICBzcmM6IF92bS5pdGVtLmNvdmVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgY2xvc2VcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJ0b3BcIixcbiAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLl9mKFwiZm9udGljb25cIikoXCJmYS1hcnJvdy1sZWZ0XCIpLFxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMjRcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uY2xvc2UgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJTY3JvbGxWaWV3XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFuaW0taW1hZ2VzXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IG9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBvcmllbnRhdGlvbjogXCJob3Jpem9udGFsXCIgfSB9LFxuICAgICAgICAgICAgICAgIF92bS5fbChfdm0uaXRlbS5pbWFnZXMsIGZ1bmN0aW9uKGltYWdlKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICB7IGtleTogaW1hZ2UsIGF0dHJzOiB7IHJvd3M6IFwiYXV0b1wiLCBjb2x1bW5zOiBcIipcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtaW1nLXRodW1iXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IGltYWdlLnNyYyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyZXRjaDogXCJhc3BlY3RGaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb250ZW50XCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHJvd3M6IFwiYXV0byxhdXRvLGF1dG8sYXV0b1wiLCBjb2x1bW5zOiBcImF1dG9cIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhbmltLWl0ZW1JbmZvXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMTVcIixcbiAgICAgICAgICAgICAgICAgICAgcm93OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5zOiBcImF1dG8sKlwiLFxuICAgICAgICAgICAgICAgICAgICByb3dzOiBcImF1dG8sYXV0byxhdXRvLGF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBjYXRlZ29yeS1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLl9mKFwiZm9udGljb25cIikoX3ZtLmdlbmRlckljb24pLFxuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICByb3dTcGFuOiBcIjJcIixcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IF92bS5pdGVtLmNhdGVnb3J5VGFnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIml0ZW0tbmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0d3JhcDogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiYm90dG9tXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLml0ZW0ubmFtZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpdGVtLWNhdGVnb3J5XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHR3cmFwOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJ0b3BcIixcbiAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uaXRlbS5jYXRlZ29yeVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaW5lIGFuaW0tbGlrZXNcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyByb3c6IFwiMlwiLCB3aWR0aDogXCIxMDAlXCIsIG1hcmdpblRvcDogXCIxMFwiIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFuaW0tbGlrZXNcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCI1XCIsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgcm93OiBcIjNcIixcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uczogXCIqLGF1dG8sYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICByb3dzOiBcImF1dG9cIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGNvbDogXCIwXCIsIHJvd3M6IFwiYXV0b1wiLCBjb2x1bW5zOiBcImF1dG8sYXV0b1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiBcImluZm9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpa2UtaWNvbiBmYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLl9mKFwiZm9udGljb25cIikoXCJmYS1pbmZvLWNpcmNsZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5pdGVtLmJyZWVkX2dyb3VwICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiAtIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uaXRlbS5wcmltYXJ5X2JyZWVkXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcm93czogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zOiBcImF1dG8sYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMTVcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0udG9nZ2xlSGVhcnQgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWY6IFwiZmF2b3JpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpa2UtaWNvbiAgZmFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5pdGVtLmlzRmF2b3JpdGUgPyBcImhlYXJ0LWFjdGl2ZVwiIDogXCJkZWZhdWx0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uX2YoXCJmb250aWNvblwiKShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uaXRlbS5pc0Zhdm9yaXRlID8gXCJmYS1oZWFydFwiIDogXCJmYS1oZWFydC1vXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2w6IFwiMVwiLCByb3c6IFwiMFwiLCB0ZXh0OiBcIkZhdm9yaXRlXCIgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGNvbDogXCIyXCIsIG9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpa2UtaWNvbiBsYXlvdXQgZmFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5fZihcImZvbnRpY29uXCIpKFwiZmEtc2hhcmUtc3F1YXJlLW9cIikgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIlNoYXJlXCIgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFwiU3RhY2tMYXlvdXRcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGluZUJyZWFrIGFuaW0tbGlrZXNcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHdpZHRoOiBcIjEwMCVcIiB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkdyaWRsYXlvdXRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29udGVudCBhbmltLWNvbnRlbnRcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgcm93czogXCJhdXRvLCpcIiwgbWFyZ2luVG9wOiBcIjE1XCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgcm93czogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI1XCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnM6IFwiYXV0bywgYXV0b1wiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgZGVzY3JpcHRpb24taWNvblwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLl9mKFwiZm9udGljb25cIikoXCJmYS10YWdzXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwOiBcInRydWVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbDogXCIxXCIsIHRleHQ6IFwiRGVzY3JpcHRpb25cIiwgdGV4dFdyYXA6IFwidHJ1ZVwiIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHJvdzogXCIxXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlNjcm9sbFZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93czogXCIqLCAqLCAqLCAqLCAqLCAqLCAqLCAqXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uczogXCJhdXRvLCAqXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwidG9wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi12YWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIwXCIsIGNvbDogXCIwXCIsIHRleHQ6IFwiQXZhaWxhYmlsaXR5OlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBkZXNjcmlwdGlvbi12YWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5pdGVtLmlzQXZhaWxhYmxlID09IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiaXNBdmFpbGFibGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJpc05vdEF2YWlsYWJsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjBcIiwgY29sOiBcIjFcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJGb3JtYXR0ZWRTdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5pdGVtLmlzQXZhaWxhYmxlID09IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJBdmFpbGFibGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIk5vdCBBdmFpbGFibGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uX2YoXCJmb250aWNvblwiKShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uaXRlbS5pc0F2YWlsYWJsZSA9PSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiZmEtY2hlY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImZhLXRpbWVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tdmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb3c6IFwiMVwiLCBjb2w6IFwiMFwiLCB0ZXh0OiBcIkxvY2F0aW9uOlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLXZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLml0ZW0ubG9jYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi12YWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIyXCIsIGNvbDogXCIwXCIsIHRleHQ6IFwiQWdlOlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLXZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjJcIiwgY29sOiBcIjFcIiwgdGV4dDogX3ZtLml0ZW0uYWdlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLXZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjNcIiwgY29sOiBcIjBcIiwgdGV4dDogXCJHZW5kZXI6IFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLXZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjNcIiwgY29sOiBcIjFcIiwgdGV4dDogX3ZtLml0ZW0uZ2VuZGVyIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLXZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjRcIiwgY29sOiBcIjBcIiwgdGV4dDogXCJCcmVlZCBHcm91cDpcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi12YWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiNFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5pdGVtLmJyZWVkX2dyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tdmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlByaW1hcnkgQnJlZWQ6XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi12YWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5pdGVtLnByaW1hcnlfYnJlZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi12YWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCI2XCIsIGNvbDogXCIwXCIsIHRleHQ6IFwiQW5pbWFsIFNpemU6XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tdmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uaXRlbS5hbmltYWxfc2l6ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLXZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCI3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJQcmltYXJ5IENvbG9yOlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tdmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uaXRlbS5wcmltYXJ5X2NvbG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJTdGFja0xheW91dFwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwibWFpblwiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb250ZW50XCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2FyZC1pbWdcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIHNyYzogX3ZtLml0ZW0uY292ZXIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIHRhcDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbkNsaWNrQnV0dG9uKClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgIGNvbHVtbnM6IFwiYXV0bywqXCIsXG4gICAgICAgICAgICAgICAgcm93czogXCJhdXRvLGF1dG9cIixcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIHRhcDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uQ2xpY2tCdXR0b24oKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgY2F0ZWdvcnktaWNvblwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uX2YoXCJmb250aWNvblwiKShfdm0uY2F0ZWdvcnlJY29uKSxcbiAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgcm93U3BhbjogXCIyXCIsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IF92bS5pdGVtLmNhdGVnb3J5VGFnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgaXRlbS1uYW1lXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgdGV4dHdyYXA6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5pdGVtLm5hbWUgKyBcIiwgXCIgKyBfdm0uaXRlbS5hZ2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICByb3c6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICByb3dzOiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uczogXCJhdXRvLGF1dG8sYXV0b1wiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaXRlbS1jYXRlZ29yeVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0d3JhcDogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiYm90dG9tXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLml0ZW0uY2F0ZWdvcnlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFwiU3RhY2tMYXlvdXRcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGluZVwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgd2lkdGg6IFwiMTAwJVwiLCBtYXJnaW5Ub3A6IFwiNVwiIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCI1XCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgIHJvdzogXCIzXCIsXG4gICAgICAgICAgICAgICAgY29sdW1uczogXCIqLCBhdXRvLCBhdXRvXCIsXG4gICAgICAgICAgICAgICAgcm93czogXCJhdXRvXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sOiBcIjBcIiwgcm93czogXCJhdXRvXCIsIGNvbHVtbnM6IFwiYXV0byxhdXRvXCIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIHRhcDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbkNsaWNrQnV0dG9uKClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHJlZjogXCJpbmZvXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpa2UtaWNvbiBmYVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uX2YoXCJmb250aWNvblwiKShcImZhLWluZm8tY2lyY2xlXCIpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OlxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLml0ZW0uYnJlZWRfZ3JvdXAgKyBcIiAtIFwiICsgX3ZtLml0ZW0ucHJpbWFyeV9icmVlZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICByb3dzOiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uczogXCJhdXRvLGF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMTVcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLnRvZ2dsZUhlYXJ0IH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICByZWY6IFwiZmF2b3JpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlrZS1pY29uICBmYVwiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogW192bS5pdGVtLmlzRmF2b3JpdGUgPyBcImhlYXJ0LWFjdGl2ZVwiIDogXCJkZWZhdWx0XCJdLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uX2YoXCJmb250aWNvblwiKShcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5pdGVtLmlzRmF2b3JpdGUgPyBcImZhLWhlYXJ0XCIgOiBcImZhLWhlYXJ0LW9cIlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbDogXCIxXCIsIHJvdzogXCIwXCIsIHRleHQ6IFwiRmF2b3JpdGVcIiB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBjb2w6IFwiMlwiLCBvcmllbnRhdGlvbjogXCJob3Jpem9udGFsXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICByZWY6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpa2UtaWNvbiBsYXlvdXQgZmFcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLl9mKFwiZm9udGljb25cIikoXCJmYS1zaGFyZS1zcXVhcmUtb1wiKSB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJTaGFyZVwiIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXCJTdGFja0xheW91dFwiLCB7IHN0YXRpY0NsYXNzOiBcImxpbmVCcmVha1wiLCBhdHRyczogeyB3aWR0aDogXCIxMDAlXCIgfSB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIkdyaWRMYXlvdXRcIixcbiAgICB7IGF0dHJzOiB7IHJvd3M6IFwiKlwiLCBjb2x1bW5zOiBcIipcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgaGVpZ2h0OiBcIjE1MFwiLFxuICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMTBcIixcbiAgICAgICAgICBzdHJldGNoOiBcImFzcGVjdEZpbGxcIixcbiAgICAgICAgICBzcmM6IF92bS5pdGVtLmNvdmVyXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIC8+XFxuICAgIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgeyBhdHRyczogeyB2ZXJ0aWNhbEFsaWdubWVudDogXCJib3R0b21cIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYmFubmVyMlwiLCBhdHRyczogeyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzQ4OWU5ZTllXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjYXRlZ29yeS1uYW1lICBtLWItMTAgbS10LTEwXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5pdGVtLmNhdGVnb3J5ICsgXCIgKFwiICsgX3ZtLml0ZW0uY291bnQgKyBcIilcIixcbiAgICAgICAgICAgICAgICAgIHRleHR3cmFwOiBcInRydWVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICBbXG4gICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1hZ2VcIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICBzcmM6IF92bS5zcmMsXG4gICAgICAgICAgc3RyZXRjaDogXCJhc3BlY3RGaXRcIixcbiAgICAgICAgICBoZWlnaHQ6IFwiMTEwXCIsXG4gICAgICAgICAgXCJpb3M6aGVpZ2h0XCI6IFwiMTIwXCJcbiAgICAgICAgfSxcbiAgICAgICAgb246IHsgdGFwOiBfdm0uYWN0aW9uIH1cbiAgICAgIH0pLFxuICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b25cIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJib3R0b21cIixcbiAgICAgICAgICB0ZXh0OiBfdm0uaWNvbiArIFwiIFwiICsgX3ZtLnRpdGxlXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7IHRhcDogX3ZtLmFjdGlvbiB9XG4gICAgICB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgW1xuICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b25cIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICB0ZXh0OiBfdm0udGl0bGUgKyBcIiBcIiArIF92bS5pY29uICsgXCIgXCJcbiAgICAgICAgfSxcbiAgICAgICAgb246IHsgdGFwOiBfdm0uYWN0aW9uIH1cbiAgICAgIH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwicGFnZVwiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiQWN0aW9uQmFyXCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYWN0aW9uLWJhclwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIk5hdmlnYXRpb25CdXR0b25cIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgXCJhbmRyb2lkLnN5c3RlbUljb25cIjogXCJpY19tZW51X2JhY2tcIiB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRuYXZpZ2F0ZUJhY2soKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhY3Rpb24tYmFyLXRpdGxlXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICB0ZXh0OiBfdm0uQW5pbWFsQ2VudGVyLm5hbWUsXG4gICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCI+XFxuICAgIFwiKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiU2Nyb2xsVmlld1wiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFuaW0tY292ZXIgbS1iLTE1XCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLkFuaW1hbENlbnRlci5pbWFnZVVSTCxcbiAgICAgICAgICAgICAgICAgIHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjAwXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoci1saWdodCBtLXQtMTUgbS1iLTE1XCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjFcIiB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHJvd3M6IFwiKiwgKiwgKiwgYXV0b1wiLCBjb2x1bW5zOiBcImF1dG8sKlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYW5pbS1jb250ZW50MSBwLWwtMTUgcC1iLTEwIG0tci0yMFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2FjaG91c2UucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3RyZXRjaDogXCJhc3BlY3RGaXRcIixcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNDBcIixcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI0MFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxvYWRNb2RlOiBcImFzeW5jXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjNcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYW5pbS1jb250ZW50MSB0ZXh0IHAtYi0xMCBmb250LXdlaWdodC1ib2xkIHRpdGxlIHN0YWNrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwOiBcInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJGb3JtYXR0ZWRTdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLkFuaW1hbENlbnRlci5uYW1lICsgXCIgQW5pbWFsIENhcmUgQ2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhbmltLWNvbnRlbnQyIHAtbC0xNSBwLWItMTAgbS1yLTIwXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvbG9jYXRpb25pY29uLnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjQwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiNDBcIixcbiAgICAgICAgICAgICAgICAgICAgICBsb2FkTW9kZTogXCJhc3luY1wiLFxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIzXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYW5pbS1jb250ZW50MiBwLWItMTAgc3RhY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5vbkFkZHJlc3NUYXAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIHRleHQtcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5BbmltYWxDZW50ZXIuYWRkcmVzcyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhbmltLWNvbnRlbnQzIHAtbC0xNSBwLWItMTAgbS1yLTIwXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjJcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvcGhvbmVpY29uLnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjQwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiNDBcIixcbiAgICAgICAgICAgICAgICAgICAgICBsb2FkTW9kZTogXCJhc3luY1wiLFxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIzXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYW5pbS1jb250ZW50MyBmYSB0ZXh0LXByaW1hcnkgcC1iLTEwIHN0YWNrXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjJcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5BbmltYWxDZW50ZXIucGhvbmUsXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjVcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5vblBob25lVGFwIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFuaW0tY29udGVudDQgcC1sLTE1IHAtYi0xMCBtLXItMjBcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiM1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9ob3Vyc2ljb24ucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3RyZXRjaDogXCJhc3BlY3RGaXRcIixcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNDBcIixcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI0MFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxvYWRNb2RlOiBcImFzeW5jXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjNcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFuaW0tY29udGVudDQgc3RhY2staG91cnNcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zOiBcIiosICpcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M6IFwiYXV0bywgYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjVcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaG91cnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5BbmltYWxDZW50ZXIuYXZhaWxhYmlsaXR5LndlZWtkYXlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhvdXJzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uQW5pbWFsQ2VudGVyLmF2YWlsYWJpbGl0eS53ZWVrZGF5aG91cnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwOiBcInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaG91cnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5BbmltYWxDZW50ZXIuYXZhaWxhYmlsaXR5LndlZWtlbmRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhvdXJzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uQW5pbWFsQ2VudGVyLmF2YWlsYWJpbGl0eS53ZWVrZW5kaG91cnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwOiBcInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJTdGFja0xheW91dFwiLFxuICAgIHsgYXR0cnM6IHsgb3JpZW50YXRpb246IFwidmVydGljYWxcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiTGFiZWxcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgXCJob21lcGFnZS1ibHVlIHRleHQtcHJpbWFyeSBsaXN0LWdyb3VwLWl0ZW0tdGV4dCBmb250LXdlaWdodC1ib2xkXCIsXG4gICAgICAgICAgYXR0cnM6IHsgdGV4dFdyYXA6IFwidHJ1ZVwiIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJGb3JtYXR0ZWRTdHJpbmdcIixcbiAgICAgICAgICAgIFtfYyhcIlNwYW5cIiwgeyBhdHRyczogeyB0ZXh0OiBfdm0uaXRlbS5xdWVyeSB9IH0pXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiLmZhcV9hbnN3ZXIgLmxpc3QtZ3JvdXAtaXRlbS1jb250ZW50XCIsXG4gICAgICAgICAgYXR0cnM6IHsgdGV4dFdyYXA6IFwidHJ1ZVwiIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJGb3JtYXR0ZWRTdHJpbmdcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHsgYXR0cnM6IHsgXCJ0ZXh0LmRlY29kZVwiOiBcIiYjOTtcIiB9IH0pLFxuICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwgeyBhdHRyczogeyB0ZXh0OiBfdm0uaXRlbS5hbnN3ZXIgfSB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJwYWdlXCIsXG4gICAge1xuICAgICAgYXR0cnM6IHsgYWN0aW9uQmFySGlkZGVuOiBcImZhbHNlXCIsIGJhY2tncm91bmRTcGFuVW5kZXJTdGF0dXNCYXI6IFwidHJ1ZVwiIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIkFjdGlvbkJhclwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImFjdGlvbmJhciBuYXZUYWJcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJOYXZpZ2F0aW9uQnV0dG9uXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IFwiYW5kcm9pZC5zeXN0ZW1JY29uXCI6IFwiaWNfbWVudV9iYWNrXCIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIHRhcDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kbmF2aWdhdGVCYWNrKClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgZm9udFNpemU6IFwiMThcIiwgdGV4dDogXCJBbmltYWxzIGZvciBBZG9wdGlvblwiIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHJvd3M6IFwiYXV0byxhdXRvLCpcIiwgY29sdW1uczogXCJhdXRvXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmVmOiBcIm5hdlRhYlwiLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXZUYWJcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICByb3c6IFwiMVwiLFxuICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcInRvcFwiLFxuICAgICAgICAgICAgICAgIGhlaWdodDogXCI1MFwiLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICByb3dzOiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICBjb2x1bW5zOiBcImF1dG8sYXV0b1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhYnZpZXdcIixcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uc2VsZWN0ZWRUYWJ2aWV3ID09IDAgPyBcImFjdGl2ZVwiIDogXCJcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHJvd3M6IFwiKixhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbHM6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI1MCVcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLmFkb3B0aW9uTGlzdCB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWRUYWJ2aWV3ID09IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkVGFidmlldz09MFwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBuYXZJY29uXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uX2YoXCJmb250aWNvblwiKShcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZFRhYnZpZXcgPT0gMCA/IFwiZmEtcGF3XCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWJ2aWV3VGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnNlbGVjdGVkVGFidmlldyA9PSAwID8gXCJhY3RpdmVcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiQW5pbWFsc1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhYnZpZXdcIixcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uc2VsZWN0ZWRUYWJ2aWV3ID09IDEgPyBcImFjdGl2ZVwiIDogXCJcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHJvd3M6IFwiKixhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbHM6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI1MCVcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLnNob3dDYXRlZ29yeSB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWRUYWJ2aWV3ID09IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkVGFidmlldz09MVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBuYXZJY29uXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uX2YoXCJmb250aWNvblwiKShcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZFRhYnZpZXcgPT0gMSA/IFwiZmEtZmlsdGVyXCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWJ2aWV3VGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnNlbGVjdGVkVGFidmlldyA9PSAxID8gXCJhY3RpdmVcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkZpbHRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlbGVjdGVkVGFidmlldyA9PSAwLFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWxlY3RlZFRhYnZpZXcgPT0gMFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBhdHRyczogeyByb3c6IFwiMlwiLCB3aWR0aDogXCIxMDAlXCIsIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiTGlzdFZpZXdcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IF92bS5pbmRleCxcbiAgICAgICAgICAgICAgICAgIHJlZjogXCJsaXN0dmlld1wiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgc2VwYXJhdG9yQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS5pdGVtcyxcbiAgICAgICAgICAgICAgICAgICAgXCIrYWxpYXNcIjogXCJpdGVtXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi10ZW1wbGF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gcmVmLml0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkb2RkID0gcmVmLiRvZGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwiaXRlbVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaXRlbTogaXRlbSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja2VkOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zaG93SXRlbShpdGVtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWRUYWJ2aWV3ID09IDEsXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkVGFidmlldyA9PSAxXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIyXCIsIHdpZHRoOiBcIjEwMCVcIiwgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJSYWRMaXN0Vmlld1wiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogX3ZtLmluZGV4LFxuICAgICAgICAgICAgICAgICAgcmVmOiBcImxpc3R2aWV3XCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBzZXBhcmF0b3JDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICAgICAgICAgICAgICBpdGVtczogX3ZtLml0ZW1zQ2F0ZWdvcnksXG4gICAgICAgICAgICAgICAgICAgIFwiK2FsaWFzXCI6IFwiaXRlbVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInYtdGVtcGxhdGVcIiwge1xuICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHJlZi5pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkaW5kZXggPSByZWYuJGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkZXZlbiA9IHJlZi4kZXZlblxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcIkNhdGVnb3J5XCIsIHsgYXR0cnM6IHsgaXRlbTogaXRlbSB9IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJwYWdlXCIgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJBY3Rpb25CYXJcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiTmF2aWdhdGlvbkJ1dHRvblwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBcImFuZHJvaWQuc3lzdGVtSWNvblwiOiBcImljX21lbnVfYmFja1wiIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICB0YXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJG5hdmlnYXRlQmFjaygpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiRkFRXCIsIGZvbnRTaXplOiBcIjIwXCIsIHZlcnRpY2FsQWxpZ25tZW50OiBcImNlbnRlclwiIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiU2VhcmNoQmFyXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IGhpbnQ6IFwiRW50ZXIgdGV4dC4uLlwiLCB0ZXh0OiBfdm0uc2VhcmNoIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBzdWJtaXQ6IF92bS5jaGVja0ZhcSxcbiAgICAgICAgICAgICAgdGV4dENoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLnNlYXJjaCA9ICRldmVudC52YWx1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlJhZExpc3RWaWV3XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJlZjogXCJsaXN0Vmlld1wiLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaXN0LWdyb3VwXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgcHVsbFRvUmVmcmVzaDogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgaXRlbXM6IF92bS5nZXRTZWFyY2hSZXN1bHRzKF92bS5zZWFyY2gpLFxuICAgICAgICAgICAgICAgIFwiK2FsaWFzXCI6IFwiZmFxXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBwdWxsVG9SZWZyZXNoSW5pdGlhdGVkOiBfdm0ub25QdWxsVG9SZWZyZXNoSW5pdGlhdGVkLFxuICAgICAgICAgICAgICAgIGl0ZW1UYXA6IF92bS5vbkl0ZW1UYXBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ2LXRlbXBsYXRlXCIsIHtcbiAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBmYXEgPSByZWYuZmFxXG4gICAgICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJGV2ZW4gPSByZWYuJGV2ZW5cbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwiRmFxSW5mb1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaXN0LWdyb3VwLWl0ZW0tdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaXRlbTogZmFxIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIkFjdGlvbkJhclwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIkFjdGlvbl9CYXJcIiwgYXR0cnM6IHsgXCJpb3MucG9zaXRpb25cIjogXCJsZWZ0XCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICB0ZXh0OiBcIldlbGNvbWVcIixcbiAgICAgICAgICAgICAgZm9udFNpemU6IFwiMjBcIixcbiAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkFjdGlvbkl0ZW1cIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgXCJpb3Muc3lzdGVtSWNvblwiOiBcIjEyXCIsXG4gICAgICAgICAgICAgIFwiaW9zLnBvc2l0aW9uXCI6IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgXCJhbmRyb2lkLnN5c3RlbUljb25cIjogXCJpY19tZW51X3NlYXJjaFwiLFxuICAgICAgICAgICAgICBcImFuZHJvaWQucG9zaXRpb25cIjogXCJhY3Rpb25CYXJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLnRvRmFxIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgeyBhdHRyczogeyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2IyMWE4MlwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxheW91dCBjb3ZlclwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBjb2x1bW5zOiBcIiosKlwiLCByb3dzOiBcIiosKiwqXCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJDYXRlZ29yeUJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaG9tZXBhZ2UtYmx1ZSBIb21lQnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjVcIixcbiAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9hbmltYWxzLmljb24ucG5nXCIsXG4gICAgICAgICAgICAgICAgICBpY29uOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgdGl0bGU6IF92bS50aXRsZXNbMF0sXG4gICAgICAgICAgICAgICAgICBhY3Rpb246IF92bS50b0Fkb3B0aW9uLFxuICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJDYXRlZ29yeUJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaG9tZXBhZ2UtYmx1ZSBIb21lQnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjVcIixcbiAgICAgICAgICAgICAgICAgIHJvdzogXCIxXCIsXG4gICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9zZXJ2aWNlcy5pY29uLnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgaWNvbjogXCJcIixcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBfdm0udGl0bGVzWzJdLFxuICAgICAgICAgICAgICAgICAgYWN0aW9uOiBfdm0udG9TZXJ2aWNlUmVxdWVzdCxcbiAgICAgICAgICAgICAgICAgIHRleHRXcmFwOiBcInRydWVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiQ2F0ZWdvcnlCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhvbWVwYWdlLWJsdWUgSG9tZUJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCI1XCIsXG4gICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgIHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvbm9pc2UuaWNvbi5wbmdcIixcbiAgICAgICAgICAgICAgICAgIGljb246IFwiXCIsXG4gICAgICAgICAgICAgICAgICB0aXRsZTogX3ZtLnRpdGxlc1szXSxcbiAgICAgICAgICAgICAgICAgIGFjdGlvbjogX3ZtLnRvRmFxLFxuICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJDYXRlZ29yeUJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgaG9tZXBhZ2UtYmx1ZSBIb21lQnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjVcIixcbiAgICAgICAgICAgICAgICAgIHJvdzogXCIyXCIsXG4gICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9ob3Vyc2ljb24ucG5nXCIsXG4gICAgICAgICAgICAgICAgICBpY29uOiBfdm0uX2YoXCJmb250aWNvblwiKShcImZhLW1hcC1tYXJrZXJcIiksXG4gICAgICAgICAgICAgICAgICB0aXRsZTogX3ZtLnRpdGxlc1s0XSxcbiAgICAgICAgICAgICAgICAgIGFjdGlvbjogX3ZtLnRvUVJTY2FubmVyLFxuICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJDYXRlZ29yeUJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaG9tZXBhZ2UtYmx1ZSBIb21lQnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjVcIixcbiAgICAgICAgICAgICAgICAgIHJvdzogXCIxXCIsXG4gICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9sb2NhdGlvbmljb24ucG5nXCIsXG4gICAgICAgICAgICAgICAgICBpY29uOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgdGl0bGU6IF92bS50aXRsZXNbNV0sXG4gICAgICAgICAgICAgICAgICBhY3Rpb246IF92bS50b0xvY2F0aW9uTGlzdCxcbiAgICAgICAgICAgICAgICAgIHRleHRXcmFwOiBcInRydWVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwicGFnZVwiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiQWN0aW9uQmFyXCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYWN0aW9uLWJhclwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIk5hdmlnYXRpb25CdXR0b25cIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgXCJhbmRyb2lkLnN5c3RlbUljb25cIjogXCJpY19tZW51X2JhY2tcIiB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRuYXZpZ2F0ZUJhY2soKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICB0ZXh0OiBcIkFuaW1hbCBDYXJlIENlbnRlcnNcIixcbiAgICAgICAgICAgICAgZm9udFNpemU6IFwiMjBcIixcbiAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiSWNvbkJ1dHRvblwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBncHMtYnV0dG9uXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBpY29uOiBfdm0uX2YoXCJmb250aWNvblwiKShcImZhLXNvcnQtYW1vdW50LWFzY1wiKSxcbiAgICAgICAgICAgICAgdGl0bGU6IFwiR2V0IENsb3Nlc3QgQW5pbWFsIENlbnRlclwiLFxuICAgICAgICAgICAgICBhY3Rpb246IF92bS5idXR0b25HZXREaXN0YW5jZVRvQ2FyZUNlbnRlcnNUYXBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiUmFkTGlzdFZpZXdcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlzdC1ncm91cFwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHJvdzogXCIyXCIsXG4gICAgICAgICAgICAgICAgaXRlbXM6IF92bS5jZW50ZXJMb2NhdGlvbnMsXG4gICAgICAgICAgICAgICAgXCIrYWxpYXNcIjogXCJsb2NhdGlvblwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9uOiB7IGl0ZW1UYXA6IF92bS5vbkl0ZW1UYXAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ2LXRlbXBsYXRlXCIsIHtcbiAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBsb2NhdGlvbiA9IHJlZi5sb2NhdGlvblxuICAgICAgICAgICAgICAgICAgICAgIHZhciAkaW5kZXggPSByZWYuJGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgICAgICAgICAgdmFyICRvZGQgPSByZWYuJG9kZFxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaXN0LWdyb3VwLWl0ZW0tY29udGVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb3dzOiBcIiosICosICosICpcIiwgY29sdW1uczogXCIqLCAqXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhvbWVwYWdlLWJsdWUgdGV4dC1wcmltYXJ5IGxpc3QtZ3JvdXAtaXRlbS10ZXh0IGZvbnQtd2VpZ2h0LWJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBsb2NhdGlvbi5uYW1lIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaXN0LWdyb3VwLWl0ZW0tdGV4dCBtLXItNSB0ZXh0LXNlY29uZGFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sOiBcIjFcIiwgaG9yaXpvbnRhbEFsaWdubWVudDogXCJyaWdodFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiflwiICsgbG9jYXRpb24uZGlzdGFuY2UgKyBcIm1pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhyLWxpZ2h0IG0tdC01IG0tYi01XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjFcIiwgY29sU3BhbjogXCIyXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibS1yLTIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IGxvY2F0aW9uLmltYWdlVVJMLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyZXRjaDogXCJhc3BlY3RGaXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRNb2RlOiBcImFzeW5jXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlzdC1ncm91cC1pdGVtLXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgcm93czogXCIqLCAqXCIsIGNvbHVtbnM6IFwiKiwgNCpcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicC1iLTEwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwOiBcInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiaW9zLmZvbnRGYW1pbHlcIjogXCJzeXN0ZW1cIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5fZihcImZvbnRpY29uXCIpKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmYS1tYXAtbWFya2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicC1iLTEwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwOiBcInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiaW9zLmZvbnRGYW1pbHlcIjogXCJzeXN0ZW1cIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogbG9jYXRpb24uYWRkcmVzcyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInAtYi0xMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJGb3JtYXR0ZWRTdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImlvcy5mb250RmFtaWx5XCI6IFwic3lzdGVtXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5fZihcImZvbnRpY29uXCIpKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmYS1waG9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInAtYi0xMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJGb3JtYXR0ZWRTdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImlvcy5mb250RmFtaWx5XCI6IFwic3lzdGVtXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogbG9jYXRpb24ucGhvbmUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwLWItMTBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiaW9zLmZvbnRGYW1pbHlcIjogXCJzeXN0ZW1cIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJTcGFuXCIsIHsgYXR0cnM6IHsgdGV4dDogXCJcIiB9IH0pXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwicGFnZVwiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiQWN0aW9uQmFyXCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIk5hdmlnYXRpb25CdXR0b25cIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgXCJhbmRyb2lkLnN5c3RlbUljb25cIjogXCJpY19tZW51X2JhY2tcIiB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRuYXZpZ2F0ZUJhY2soKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICB0ZXh0OiBcIlNlcnZpY2UgUmVxdWVzdFwiLFxuICAgICAgICAgICAgICBmb250U2l6ZTogXCIyMFwiLFxuICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImhvbWUtcGFuZWxcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJXZWJWaWV3XCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGhlaWdodDogXCI4MTkycHhcIixcbiAgICAgICAgICAgICAgc3JjOiBcImh0dHA6Ly9hbmltYWxjYXJlLmxhY291bnR5Lmdvdi9zZXJ2aWNlLXJlcXVlc3QvXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIFtcbiAgICAgIF9jKFwiQWN0aW9uQmFyXCIsIHsgYXR0cnM6IHsgdGl0bGU6IF92bS5hY3Rpb25CYXIgfSB9KSxcbiAgICAgIF9jKFxuICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIkxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwibXNnXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICBcIldlIGFwb2xvZ2l6ZS4gVGhlIHF1ZXN0aW9uIHlvdSBhcmUgc2VhcmNoaW5nIGZvciBoYXMgbm90IGJlZW4gYW5zd2VyZWQgeWV0LiBUYWtlIHRoaXMgdGlja2V0IGlmIHlvdSB3YW50IHRvIHN1Ym1pdCB0aGlzIHF1ZXN0aW9uIGFuZCBnZXQgYW4gYW5zd2VyIGZyb20gdGhlIGZyb250IGRlc2suXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyBjb2x1bW5zOiBcIiosKlwiLCByb3dzOiBcIiosKiwqXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIkNhdGVnb3J5QnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICB0aXRsZTogX3ZtLnRpdGxlc1swXSxcbiAgICAgICAgICAgICAgICAgIGFjdGlvbjogX3ZtLnRvRmFxLFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZjAwMDBcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiQ2F0ZWdvcnlCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBfdm0udGl0bGVzWzFdLFxuICAgICAgICAgICAgICAgICAgYWN0aW9uOiBfdm0uc3VibWl0VGlja2V0LFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiM2QUZGNUFcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIFtcbiAgICAgIF9jKFwiQWN0aW9uQmFyXCIsIHsgYXR0cnM6IHsgdGl0bGU6IFwiVGlja2V0IFByb2Nlc3NpbmdcIiB9IH0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiTGFiZWxcIiwgeyBhdHRyczogeyB0ZXh0OiBcIlBob25lIG51bWJlcjpcIiB9IH0pLFxuICAgICAgICAgIF9jKFwiVGV4dFZpZXdcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLnBob25lIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICB0ZXh0Q2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0ucGhvbmUgPSAkZXZlbnQudmFsdWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiTGFiZWxcIiwgeyBhdHRyczogeyB0ZXh0OiBcIkZpcnN0IGFuZCBsYXN0IG5hbWU6XCIgfSB9KSxcbiAgICAgICAgICBfYyhcIlRleHRWaWV3XCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5uYW1lIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICB0ZXh0Q2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0ubmFtZSA9ICRldmVudC52YWx1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJMYWJlbFwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiV2hhdCBhcmUgeW91IGhlcmUgZm9yP1wiIH0gfSksXG4gICAgICAgICAgX2MoXCJUZXh0Vmlld1wiLCB7XG4gICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0ucXVlcnkgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIHRleHRDaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5xdWVyeSA9ICRldmVudC52YWx1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJTdWJtaXQgVGlja2V0XCIgfSxcbiAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLnN1Ym1pdFRpY2tldCB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICBbXG4gICAgICBfYyhcIkFjdGlvbkJhclwiLCB7IGF0dHJzOiB7IHRpdGxlOiBcIlRpY2tldCBSZWFzb25cIiB9IH0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICB7IGF0dHJzOiB7IGNvbHVtbnM6IFwiKlwiLCByb3dzOiBcImF1dG8sIGF1dG8sIGF1dG8sIGF1dG9cIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiTGFiZWxcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXNnXCIsIGF0dHJzOiB7IHRleHRXcmFwOiBcInRydWVcIiwgcm93OiBcIjBcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIllvdSBhcmUgYXQgdGhlIFwiICtcbiAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uc2l0ZSkgK1xuICAgICAgICAgICAgICAgICAgXCIgQW5pbWFsIENhcmUgYW5kIENvbnRyb2wgQ2VudGVyLlwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFwiTGlzdFBpY2tlclwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICByb3c6IFwiMVwiLFxuICAgICAgICAgICAgICBpdGVtczogX3ZtLmNob2ljZXMsXG4gICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXg6IFwiMFwiLFxuICAgICAgICAgICAgICBzZWxlY3RlZEluZGV4OiBfdm0uc2VsZWN0ZWRJbmRleFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXhDaGFuZ2U6IFtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZEluZGV4ID0gJGV2ZW50LnZhbHVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRJbmRleENoYW5nZWRcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5pc1RpY2tldFxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyByb3c6IFwiM1wiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXNnXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCIgICBUZWxsIHVzIGFib3V0IHdoYXQgeW91IHdvdWxkIGxpa2UgdG8ga25vd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwOiBcInRydWVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiVGV4dFZpZXdcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0ub3RoZXJUZXh0IH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dENoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ub3RoZXJUZXh0ID0gJGV2ZW50LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJIb21lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0udG9Ib21lIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkNyZWF0ZSBUaWNrZXRcIiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5jcmVhdGVUaWNrZXQgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLnNjc3NcIjogXCIuL2FwcC5zY3NzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vIHN5bmMgXlxcXFwuXFxcXC9hcHBcXFxcLihjc3N8c2Nzc3xsZXNzfHNhc3MpJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9BbmltYWxDZW50ZXIuc2Nzc1wiOiBcIi4vQW5pbWFsQ2VudGVyLnNjc3NcIixcblx0XCIuL2FwcC5zY3NzXCI6IFwiLi9hcHAuc2Nzc1wiLFxuXHRcIi4vZm9udHMvZm9udC1hd2Vzb21lLmNzc1wiOiBcIi4vZm9udHMvZm9udC1hd2Vzb21lLmNzc1wiLFxuXHRcIi4vZm9udHMvaW9uaWNvbnMuY3NzXCI6IFwiLi9mb250cy9pb25pY29ucy5jc3NcIixcblx0XCIuL21haW4uanNcIjogXCIuL21haW4uanNcIixcblx0XCIuL21vZGVscy9BbmltYWwuanNcIjogXCIuL21vZGVscy9BbmltYWwuanNcIixcblx0XCIuL21vZGVscy9GYXEuanNcIjogXCIuL21vZGVscy9GYXEuanNcIixcblx0XCIuL21vZGVscy9UaWNrZXQuanNcIjogXCIuL21vZGVscy9UaWNrZXQuanNcIixcblx0XCIuL3NlcnZpY2VzL0Fkb3B0aW9uU2VydmljZS5qc1wiOiBcIi4vc2VydmljZXMvQWRvcHRpb25TZXJ2aWNlLmpzXCIsXG5cdFwiLi9zZXJ2aWNlcy9GYWtlQWRvcHRpb25TZXJ2aWNlLmpzXCI6IFwiLi9zZXJ2aWNlcy9GYWtlQWRvcHRpb25TZXJ2aWNlLmpzXCIsXG5cdFwiLi9zZXJ2aWNlcy9GYWtlRmFxU2VydmljZS5qc1wiOiBcIi4vc2VydmljZXMvRmFrZUZhcVNlcnZpY2UuanNcIixcblx0XCIuL3NlcnZpY2VzL0Zha2VUaWNrZXRTZXJ2aWNlLmpzXCI6IFwiLi9zZXJ2aWNlcy9GYWtlVGlja2V0U2VydmljZS5qc1wiLFxuXHRcIi4vc2VydmljZXMvRmFxU2VydmljZS5qc1wiOiBcIi4vc2VydmljZXMvRmFxU2VydmljZS5qc1wiLFxuXHRcIi4vc2VydmljZXMvVGlja2V0U2VydmljZS5qc1wiOiBcIi4vc2VydmljZXMvVGlja2V0U2VydmljZS5qc1wiLFxuXHRcIi4vc3RvcmUuanNcIjogXCIuL3N0b3JlLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vIHN5bmMgcmVjdXJzaXZlICg/PCFcXFxcYkFwcF9SZXNvdXJjZXNcXFxcYi4qKVxcXFwuKHhtbHxjc3N8anN8KD88IVxcXFwuZFxcXFwuKXRzfCg/PCFcXFxcYl9bXFxcXHctXSpcXFxcLilzY3NzKSRcIjsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcclxcbiAqIENvbnZlbmllbnQgc2luZ2xlIGltcG9ydCBmb3IgbGlnaHQgdmFyaWFibGVzXFxyXFxuICogSW5jbHVkZXMgYmFzZSB2YXJpYWJsZXMgd2l0aCBsaWdodCBvdmVycmlkZXNcXHJcXG4gKiovXFxuLyoqXFxyXFxuICogTGlnaHQgdmFyaWFibGUgb3ZlcnJpZGVzXFxyXFxuICoqL1xcbi8qKlxcclxcbiAqIFRoZW1lIHZhcmlhYmxlcyBvdmVycmlkZXNcXHJcXG4qKi9cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICA7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vQW5pbWFsQ2VudGVyLnNjc3MnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyoqXFxyXFxuICogQ29udmVuaWVudCBzaW5nbGUgaW1wb3J0IGZvciBsaWdodCB2YXJpYWJsZXNcXHJcXG4gKiBJbmNsdWRlcyBiYXNlIHZhcmlhYmxlcyB3aXRoIGxpZ2h0IG92ZXJyaWRlc1xcclxcbiAqKi9cXG4vKipcXHJcXG4gKiBMaWdodCB2YXJpYWJsZSBvdmVycmlkZXNcXHJcXG4gKiovXFxuLyoqXFxyXFxuICogVGhlbWUgdmFyaWFibGVzIG92ZXJyaWRlc1xcclxcbioqL1xcbi8qKlxcclxcbiAqIENvbG9yIGNsYXNzZXNcXHJcXG4gKiBUaGUgZm9sbG93aW5nIGNyZWF0ZXMgdGhpcyBwYXR0ZXJuOlxcclxcbiAqIC5jLWdyZXl7Y29sb3I6I2UwZTBlMH0uYy1iZy1ncmV5e2JhY2tncm91bmQtY29sb3I6I2UwZTBlMH1cXHJcXG4qKi9cXG4uYy13aGl0ZSB7XFxuICBjb2xvcjogI2ZmZjsgfVxcblxcbi5jLWJnLXdoaXRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cXG5cXG4uYy1ibGFjayB7XFxuICBjb2xvcjogIzAwMDsgfVxcblxcbi5jLWJnLWJsYWNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7IH1cXG5cXG4uYy1hcXVhIHtcXG4gIGNvbG9yOiAjMDBjYWFiOyB9XFxuXFxuLmMtYmctYXF1YSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjYWFiOyB9XFxuXFxuLmMtYmx1ZSB7XFxuICBjb2xvcjogIzNkNWFmZTsgfVxcblxcbi5jLWJnLWJsdWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNkNWFmZTsgfVxcblxcbi5jLWNoYXJjb2FsIHtcXG4gIGNvbG9yOiAjMzAzMDMwOyB9XFxuXFxuLmMtYmctY2hhcmNvYWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzAzMDsgfVxcblxcbi5jLWJyb3duIHtcXG4gIGNvbG9yOiAjNzk1NTQ4OyB9XFxuXFxuLmMtYmctYnJvd24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc5NTU0ODsgfVxcblxcbi5jLWZvcmVzdCB7XFxuICBjb2xvcjogIzAwNjk2ODsgfVxcblxcbi5jLWJnLWZvcmVzdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2OTY4OyB9XFxuXFxuLmMtZ3JleSB7XFxuICBjb2xvcjogI2UwZTBlMDsgfVxcblxcbi5jLWJnLWdyZXkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDsgfVxcblxcbi5jLWdyZXktbGlnaHQge1xcbiAgY29sb3I6ICNiYWJhYmE7IH1cXG5cXG4uYy1iZy1ncmV5LWxpZ2h0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiYWJhYmE7IH1cXG5cXG4uYy1ncmV5LWRhcmsge1xcbiAgY29sb3I6ICM1YzY4N2M7IH1cXG5cXG4uYy1iZy1ncmV5LWRhcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVjNjg3YzsgfVxcblxcbi5jLXB1cnBsZSB7XFxuICBjb2xvcjogIzgxMzBmZjsgfVxcblxcbi5jLWJnLXB1cnBsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODEzMGZmOyB9XFxuXFxuLmMtbGVtb24ge1xcbiAgY29sb3I6ICNmZmVhMDA7IH1cXG5cXG4uYy1iZy1sZW1vbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYTAwOyB9XFxuXFxuLmMtbGltZSB7XFxuICBjb2xvcjogI2FlZTQwNjsgfVxcblxcbi5jLWJnLWxpbWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FlZTQwNjsgfVxcblxcbi5jLW9yYW5nZSB7XFxuICBjb2xvcjogI2Y1N2MwMDsgfVxcblxcbi5jLWJnLW9yYW5nZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjU3YzAwOyB9XFxuXFxuLmMtcnVieSB7XFxuICBjb2xvcjogI2ZmMTc0NDsgfVxcblxcbi5jLWJnLXJ1Ynkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMTc0NDsgfVxcblxcbi5jLXNreSB7XFxuICBjb2xvcjogIzMwYmNmZjsgfVxcblxcbi5jLWJnLXNreSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzBiY2ZmOyB9XFxuXFxuLyogV2lkdGgvSGVpZ2h0ICovXFxuLnctZnVsbCB7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi53LTEwMCB7XFxuICB3aWR0aDogMTAwOyB9XFxuXFxuLmgtZnVsbCB7XFxuICBoZWlnaHQ6IDEwMCU7IH1cXG5cXG4uaC0xMDAge1xcbiAgaGVpZ2h0OiAxMDA7IH1cXG5cXG4vKipcXHJcXG4gKiBNYXJnaW4gYW5kIFBhZGRpbmdcXHJcXG4gKiBUaGUgZm9sbG93aW5nIGNyZWF0ZXMgdGhpcyBwYXR0ZXJuOlxcclxcbiAqIC5tLTB7bWFyZ2luOjB9Lm0tdC0we21hcmdpbi10b3A6MH0ubS1yLTB7bWFyZ2luLXJpZ2h0OjB9Lm0tYi0we21hcmdpbi1ib3R0b206MH0ubS1sLTB7bWFyZ2luLWxlZnQ6MH0ubS14LTB7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLWxlZnQ6MH0ubS15LTB7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MH1cXHJcXG4gKiBTYW1lIGZvciBQYWRkaW5nICh1c2luZyB0aGUgJ3AnIGFiYnJldmlhdGlvbilcXHJcXG4gKiBGcm9tIDAsIDIsIDUsIDEwLCAxNSwgMjAsIDI1LCAzMFxcclxcbioqL1xcbi5tLTAge1xcbiAgbWFyZ2luOiAwOyB9XFxuXFxuLm0tdC0wIHtcXG4gIG1hcmdpbi10b3A6IDA7IH1cXG5cXG4ubS1yLTAge1xcbiAgbWFyZ2luLXJpZ2h0OiAwOyB9XFxuXFxuLm0tYi0wIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7IH1cXG5cXG4ubS1sLTAge1xcbiAgbWFyZ2luLWxlZnQ6IDA7IH1cXG5cXG4ubS14LTAge1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgbWFyZ2luLWxlZnQ6IDA7IH1cXG5cXG4ubS15LTAge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDA7IH1cXG5cXG4ubS0yIHtcXG4gIG1hcmdpbjogMjsgfVxcblxcbi5tLXQtMiB7XFxuICBtYXJnaW4tdG9wOiAyOyB9XFxuXFxuLm0tci0yIHtcXG4gIG1hcmdpbi1yaWdodDogMjsgfVxcblxcbi5tLWItMiB7XFxuICBtYXJnaW4tYm90dG9tOiAyOyB9XFxuXFxuLm0tbC0yIHtcXG4gIG1hcmdpbi1sZWZ0OiAyOyB9XFxuXFxuLm0teC0yIHtcXG4gIG1hcmdpbi1yaWdodDogMjtcXG4gIG1hcmdpbi1sZWZ0OiAyOyB9XFxuXFxuLm0teS0yIHtcXG4gIG1hcmdpbi10b3A6IDI7XFxuICBtYXJnaW4tYm90dG9tOiAyOyB9XFxuXFxuLm0tNCB7XFxuICBtYXJnaW46IDQ7IH1cXG5cXG4ubS10LTQge1xcbiAgbWFyZ2luLXRvcDogNDsgfVxcblxcbi5tLXItNCB7XFxuICBtYXJnaW4tcmlnaHQ6IDQ7IH1cXG5cXG4ubS1iLTQge1xcbiAgbWFyZ2luLWJvdHRvbTogNDsgfVxcblxcbi5tLWwtNCB7XFxuICBtYXJnaW4tbGVmdDogNDsgfVxcblxcbi5tLXgtNCB7XFxuICBtYXJnaW4tcmlnaHQ6IDQ7XFxuICBtYXJnaW4tbGVmdDogNDsgfVxcblxcbi5tLXktNCB7XFxuICBtYXJnaW4tdG9wOiA0O1xcbiAgbWFyZ2luLWJvdHRvbTogNDsgfVxcblxcbi5tLTUge1xcbiAgbWFyZ2luOiA1OyB9XFxuXFxuLm0tdC01IHtcXG4gIG1hcmdpbi10b3A6IDU7IH1cXG5cXG4ubS1yLTUge1xcbiAgbWFyZ2luLXJpZ2h0OiA1OyB9XFxuXFxuLm0tYi01IHtcXG4gIG1hcmdpbi1ib3R0b206IDU7IH1cXG5cXG4ubS1sLTUge1xcbiAgbWFyZ2luLWxlZnQ6IDU7IH1cXG5cXG4ubS14LTUge1xcbiAgbWFyZ2luLXJpZ2h0OiA1O1xcbiAgbWFyZ2luLWxlZnQ6IDU7IH1cXG5cXG4ubS15LTUge1xcbiAgbWFyZ2luLXRvcDogNTtcXG4gIG1hcmdpbi1ib3R0b206IDU7IH1cXG5cXG4ubS04IHtcXG4gIG1hcmdpbjogODsgfVxcblxcbi5tLXQtOCB7XFxuICBtYXJnaW4tdG9wOiA4OyB9XFxuXFxuLm0tci04IHtcXG4gIG1hcmdpbi1yaWdodDogODsgfVxcblxcbi5tLWItOCB7XFxuICBtYXJnaW4tYm90dG9tOiA4OyB9XFxuXFxuLm0tbC04IHtcXG4gIG1hcmdpbi1sZWZ0OiA4OyB9XFxuXFxuLm0teC04IHtcXG4gIG1hcmdpbi1yaWdodDogODtcXG4gIG1hcmdpbi1sZWZ0OiA4OyB9XFxuXFxuLm0teS04IHtcXG4gIG1hcmdpbi10b3A6IDg7XFxuICBtYXJnaW4tYm90dG9tOiA4OyB9XFxuXFxuLm0tMTAge1xcbiAgbWFyZ2luOiAxMDsgfVxcblxcbi5tLXQtMTAge1xcbiAgbWFyZ2luLXRvcDogMTA7IH1cXG5cXG4ubS1yLTEwIHtcXG4gIG1hcmdpbi1yaWdodDogMTA7IH1cXG5cXG4ubS1iLTEwIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwOyB9XFxuXFxuLm0tbC0xMCB7XFxuICBtYXJnaW4tbGVmdDogMTA7IH1cXG5cXG4ubS14LTEwIHtcXG4gIG1hcmdpbi1yaWdodDogMTA7XFxuICBtYXJnaW4tbGVmdDogMTA7IH1cXG5cXG4ubS15LTEwIHtcXG4gIG1hcmdpbi10b3A6IDEwO1xcbiAgbWFyZ2luLWJvdHRvbTogMTA7IH1cXG5cXG4ubS0xMiB7XFxuICBtYXJnaW46IDEyOyB9XFxuXFxuLm0tdC0xMiB7XFxuICBtYXJnaW4tdG9wOiAxMjsgfVxcblxcbi5tLXItMTIge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMjsgfVxcblxcbi5tLWItMTIge1xcbiAgbWFyZ2luLWJvdHRvbTogMTI7IH1cXG5cXG4ubS1sLTEyIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMjsgfVxcblxcbi5tLXgtMTIge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMjtcXG4gIG1hcmdpbi1sZWZ0OiAxMjsgfVxcblxcbi5tLXktMTIge1xcbiAgbWFyZ2luLXRvcDogMTI7XFxuICBtYXJnaW4tYm90dG9tOiAxMjsgfVxcblxcbi5tLTE1IHtcXG4gIG1hcmdpbjogMTU7IH1cXG5cXG4ubS10LTE1IHtcXG4gIG1hcmdpbi10b3A6IDE1OyB9XFxuXFxuLm0tci0xNSB7XFxuICBtYXJnaW4tcmlnaHQ6IDE1OyB9XFxuXFxuLm0tYi0xNSB7XFxuICBtYXJnaW4tYm90dG9tOiAxNTsgfVxcblxcbi5tLWwtMTUge1xcbiAgbWFyZ2luLWxlZnQ6IDE1OyB9XFxuXFxuLm0teC0xNSB7XFxuICBtYXJnaW4tcmlnaHQ6IDE1O1xcbiAgbWFyZ2luLWxlZnQ6IDE1OyB9XFxuXFxuLm0teS0xNSB7XFxuICBtYXJnaW4tdG9wOiAxNTtcXG4gIG1hcmdpbi1ib3R0b206IDE1OyB9XFxuXFxuLm0tMTYge1xcbiAgbWFyZ2luOiAxNjsgfVxcblxcbi5tLXQtMTYge1xcbiAgbWFyZ2luLXRvcDogMTY7IH1cXG5cXG4ubS1yLTE2IHtcXG4gIG1hcmdpbi1yaWdodDogMTY7IH1cXG5cXG4ubS1iLTE2IHtcXG4gIG1hcmdpbi1ib3R0b206IDE2OyB9XFxuXFxuLm0tbC0xNiB7XFxuICBtYXJnaW4tbGVmdDogMTY7IH1cXG5cXG4ubS14LTE2IHtcXG4gIG1hcmdpbi1yaWdodDogMTY7XFxuICBtYXJnaW4tbGVmdDogMTY7IH1cXG5cXG4ubS15LTE2IHtcXG4gIG1hcmdpbi10b3A6IDE2O1xcbiAgbWFyZ2luLWJvdHRvbTogMTY7IH1cXG5cXG4ubS0yMCB7XFxuICBtYXJnaW46IDIwOyB9XFxuXFxuLm0tdC0yMCB7XFxuICBtYXJnaW4tdG9wOiAyMDsgfVxcblxcbi5tLXItMjAge1xcbiAgbWFyZ2luLXJpZ2h0OiAyMDsgfVxcblxcbi5tLWItMjAge1xcbiAgbWFyZ2luLWJvdHRvbTogMjA7IH1cXG5cXG4ubS1sLTIwIHtcXG4gIG1hcmdpbi1sZWZ0OiAyMDsgfVxcblxcbi5tLXgtMjAge1xcbiAgbWFyZ2luLXJpZ2h0OiAyMDtcXG4gIG1hcmdpbi1sZWZ0OiAyMDsgfVxcblxcbi5tLXktMjAge1xcbiAgbWFyZ2luLXRvcDogMjA7XFxuICBtYXJnaW4tYm90dG9tOiAyMDsgfVxcblxcbi5tLTI0IHtcXG4gIG1hcmdpbjogMjQ7IH1cXG5cXG4ubS10LTI0IHtcXG4gIG1hcmdpbi10b3A6IDI0OyB9XFxuXFxuLm0tci0yNCB7XFxuICBtYXJnaW4tcmlnaHQ6IDI0OyB9XFxuXFxuLm0tYi0yNCB7XFxuICBtYXJnaW4tYm90dG9tOiAyNDsgfVxcblxcbi5tLWwtMjQge1xcbiAgbWFyZ2luLWxlZnQ6IDI0OyB9XFxuXFxuLm0teC0yNCB7XFxuICBtYXJnaW4tcmlnaHQ6IDI0O1xcbiAgbWFyZ2luLWxlZnQ6IDI0OyB9XFxuXFxuLm0teS0yNCB7XFxuICBtYXJnaW4tdG9wOiAyNDtcXG4gIG1hcmdpbi1ib3R0b206IDI0OyB9XFxuXFxuLm0tMjUge1xcbiAgbWFyZ2luOiAyNTsgfVxcblxcbi5tLXQtMjUge1xcbiAgbWFyZ2luLXRvcDogMjU7IH1cXG5cXG4ubS1yLTI1IHtcXG4gIG1hcmdpbi1yaWdodDogMjU7IH1cXG5cXG4ubS1iLTI1IHtcXG4gIG1hcmdpbi1ib3R0b206IDI1OyB9XFxuXFxuLm0tbC0yNSB7XFxuICBtYXJnaW4tbGVmdDogMjU7IH1cXG5cXG4ubS14LTI1IHtcXG4gIG1hcmdpbi1yaWdodDogMjU7XFxuICBtYXJnaW4tbGVmdDogMjU7IH1cXG5cXG4ubS15LTI1IHtcXG4gIG1hcmdpbi10b3A6IDI1O1xcbiAgbWFyZ2luLWJvdHRvbTogMjU7IH1cXG5cXG4ubS0yOCB7XFxuICBtYXJnaW46IDI4OyB9XFxuXFxuLm0tdC0yOCB7XFxuICBtYXJnaW4tdG9wOiAyODsgfVxcblxcbi5tLXItMjgge1xcbiAgbWFyZ2luLXJpZ2h0OiAyODsgfVxcblxcbi5tLWItMjgge1xcbiAgbWFyZ2luLWJvdHRvbTogMjg7IH1cXG5cXG4ubS1sLTI4IHtcXG4gIG1hcmdpbi1sZWZ0OiAyODsgfVxcblxcbi5tLXgtMjgge1xcbiAgbWFyZ2luLXJpZ2h0OiAyODtcXG4gIG1hcmdpbi1sZWZ0OiAyODsgfVxcblxcbi5tLXktMjgge1xcbiAgbWFyZ2luLXRvcDogMjg7XFxuICBtYXJnaW4tYm90dG9tOiAyODsgfVxcblxcbi5tLTMwIHtcXG4gIG1hcmdpbjogMzA7IH1cXG5cXG4ubS10LTMwIHtcXG4gIG1hcmdpbi10b3A6IDMwOyB9XFxuXFxuLm0tci0zMCB7XFxuICBtYXJnaW4tcmlnaHQ6IDMwOyB9XFxuXFxuLm0tYi0zMCB7XFxuICBtYXJnaW4tYm90dG9tOiAzMDsgfVxcblxcbi5tLWwtMzAge1xcbiAgbWFyZ2luLWxlZnQ6IDMwOyB9XFxuXFxuLm0teC0zMCB7XFxuICBtYXJnaW4tcmlnaHQ6IDMwO1xcbiAgbWFyZ2luLWxlZnQ6IDMwOyB9XFxuXFxuLm0teS0zMCB7XFxuICBtYXJnaW4tdG9wOiAzMDtcXG4gIG1hcmdpbi1ib3R0b206IDMwOyB9XFxuXFxuLnAtMCB7XFxuICBwYWRkaW5nOiAwOyB9XFxuXFxuLnAtdC0wIHtcXG4gIHBhZGRpbmctdG9wOiAwOyB9XFxuXFxuLnAtci0wIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDA7IH1cXG5cXG4ucC1iLTAge1xcbiAgcGFkZGluZy1ib3R0b206IDA7IH1cXG5cXG4ucC1sLTAge1xcbiAgcGFkZGluZy1sZWZ0OiAwOyB9XFxuXFxuLnAteC0wIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDA7XFxuICBwYWRkaW5nLWxlZnQ6IDA7IH1cXG5cXG4ucC15LTAge1xcbiAgcGFkZGluZy10b3A6IDA7XFxuICBwYWRkaW5nLWJvdHRvbTogMDsgfVxcblxcbi5wLTIge1xcbiAgcGFkZGluZzogMjsgfVxcblxcbi5wLXQtMiB7XFxuICBwYWRkaW5nLXRvcDogMjsgfVxcblxcbi5wLXItMiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyOyB9XFxuXFxuLnAtYi0yIHtcXG4gIHBhZGRpbmctYm90dG9tOiAyOyB9XFxuXFxuLnAtbC0yIHtcXG4gIHBhZGRpbmctbGVmdDogMjsgfVxcblxcbi5wLXgtMiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyO1xcbiAgcGFkZGluZy1sZWZ0OiAyOyB9XFxuXFxuLnAteS0yIHtcXG4gIHBhZGRpbmctdG9wOiAyO1xcbiAgcGFkZGluZy1ib3R0b206IDI7IH1cXG5cXG4ucC00IHtcXG4gIHBhZGRpbmc6IDQ7IH1cXG5cXG4ucC10LTQge1xcbiAgcGFkZGluZy10b3A6IDQ7IH1cXG5cXG4ucC1yLTQge1xcbiAgcGFkZGluZy1yaWdodDogNDsgfVxcblxcbi5wLWItNCB7XFxuICBwYWRkaW5nLWJvdHRvbTogNDsgfVxcblxcbi5wLWwtNCB7XFxuICBwYWRkaW5nLWxlZnQ6IDQ7IH1cXG5cXG4ucC14LTQge1xcbiAgcGFkZGluZy1yaWdodDogNDtcXG4gIHBhZGRpbmctbGVmdDogNDsgfVxcblxcbi5wLXktNCB7XFxuICBwYWRkaW5nLXRvcDogNDtcXG4gIHBhZGRpbmctYm90dG9tOiA0OyB9XFxuXFxuLnAtNSB7XFxuICBwYWRkaW5nOiA1OyB9XFxuXFxuLnAtdC01IHtcXG4gIHBhZGRpbmctdG9wOiA1OyB9XFxuXFxuLnAtci01IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDU7IH1cXG5cXG4ucC1iLTUge1xcbiAgcGFkZGluZy1ib3R0b206IDU7IH1cXG5cXG4ucC1sLTUge1xcbiAgcGFkZGluZy1sZWZ0OiA1OyB9XFxuXFxuLnAteC01IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDU7XFxuICBwYWRkaW5nLWxlZnQ6IDU7IH1cXG5cXG4ucC15LTUge1xcbiAgcGFkZGluZy10b3A6IDU7XFxuICBwYWRkaW5nLWJvdHRvbTogNTsgfVxcblxcbi5wLTgge1xcbiAgcGFkZGluZzogODsgfVxcblxcbi5wLXQtOCB7XFxuICBwYWRkaW5nLXRvcDogODsgfVxcblxcbi5wLXItOCB7XFxuICBwYWRkaW5nLXJpZ2h0OiA4OyB9XFxuXFxuLnAtYi04IHtcXG4gIHBhZGRpbmctYm90dG9tOiA4OyB9XFxuXFxuLnAtbC04IHtcXG4gIHBhZGRpbmctbGVmdDogODsgfVxcblxcbi5wLXgtOCB7XFxuICBwYWRkaW5nLXJpZ2h0OiA4O1xcbiAgcGFkZGluZy1sZWZ0OiA4OyB9XFxuXFxuLnAteS04IHtcXG4gIHBhZGRpbmctdG9wOiA4O1xcbiAgcGFkZGluZy1ib3R0b206IDg7IH1cXG5cXG4ucC0xMCB7XFxuICBwYWRkaW5nOiAxMDsgfVxcblxcbi5wLXQtMTAge1xcbiAgcGFkZGluZy10b3A6IDEwOyB9XFxuXFxuLnAtci0xMCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMDsgfVxcblxcbi5wLWItMTAge1xcbiAgcGFkZGluZy1ib3R0b206IDEwOyB9XFxuXFxuLnAtbC0xMCB7XFxuICBwYWRkaW5nLWxlZnQ6IDEwOyB9XFxuXFxuLnAteC0xMCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMDtcXG4gIHBhZGRpbmctbGVmdDogMTA7IH1cXG5cXG4ucC15LTEwIHtcXG4gIHBhZGRpbmctdG9wOiAxMDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMDsgfVxcblxcbi5wLTEyIHtcXG4gIHBhZGRpbmc6IDEyOyB9XFxuXFxuLnAtdC0xMiB7XFxuICBwYWRkaW5nLXRvcDogMTI7IH1cXG5cXG4ucC1yLTEyIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDEyOyB9XFxuXFxuLnAtYi0xMiB7XFxuICBwYWRkaW5nLWJvdHRvbTogMTI7IH1cXG5cXG4ucC1sLTEyIHtcXG4gIHBhZGRpbmctbGVmdDogMTI7IH1cXG5cXG4ucC14LTEyIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDEyO1xcbiAgcGFkZGluZy1sZWZ0OiAxMjsgfVxcblxcbi5wLXktMTIge1xcbiAgcGFkZGluZy10b3A6IDEyO1xcbiAgcGFkZGluZy1ib3R0b206IDEyOyB9XFxuXFxuLnAtMTUge1xcbiAgcGFkZGluZzogMTU7IH1cXG5cXG4ucC10LTE1IHtcXG4gIHBhZGRpbmctdG9wOiAxNTsgfVxcblxcbi5wLXItMTUge1xcbiAgcGFkZGluZy1yaWdodDogMTU7IH1cXG5cXG4ucC1iLTE1IHtcXG4gIHBhZGRpbmctYm90dG9tOiAxNTsgfVxcblxcbi5wLWwtMTUge1xcbiAgcGFkZGluZy1sZWZ0OiAxNTsgfVxcblxcbi5wLXgtMTUge1xcbiAgcGFkZGluZy1yaWdodDogMTU7XFxuICBwYWRkaW5nLWxlZnQ6IDE1OyB9XFxuXFxuLnAteS0xNSB7XFxuICBwYWRkaW5nLXRvcDogMTU7XFxuICBwYWRkaW5nLWJvdHRvbTogMTU7IH1cXG5cXG4ucC0xNiB7XFxuICBwYWRkaW5nOiAxNjsgfVxcblxcbi5wLXQtMTYge1xcbiAgcGFkZGluZy10b3A6IDE2OyB9XFxuXFxuLnAtci0xNiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNjsgfVxcblxcbi5wLWItMTYge1xcbiAgcGFkZGluZy1ib3R0b206IDE2OyB9XFxuXFxuLnAtbC0xNiB7XFxuICBwYWRkaW5nLWxlZnQ6IDE2OyB9XFxuXFxuLnAteC0xNiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNjtcXG4gIHBhZGRpbmctbGVmdDogMTY7IH1cXG5cXG4ucC15LTE2IHtcXG4gIHBhZGRpbmctdG9wOiAxNjtcXG4gIHBhZGRpbmctYm90dG9tOiAxNjsgfVxcblxcbi5wLTIwIHtcXG4gIHBhZGRpbmc6IDIwOyB9XFxuXFxuLnAtdC0yMCB7XFxuICBwYWRkaW5nLXRvcDogMjA7IH1cXG5cXG4ucC1yLTIwIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwOyB9XFxuXFxuLnAtYi0yMCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMjA7IH1cXG5cXG4ucC1sLTIwIHtcXG4gIHBhZGRpbmctbGVmdDogMjA7IH1cXG5cXG4ucC14LTIwIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwO1xcbiAgcGFkZGluZy1sZWZ0OiAyMDsgfVxcblxcbi5wLXktMjAge1xcbiAgcGFkZGluZy10b3A6IDIwO1xcbiAgcGFkZGluZy1ib3R0b206IDIwOyB9XFxuXFxuLnAtMjQge1xcbiAgcGFkZGluZzogMjQ7IH1cXG5cXG4ucC10LTI0IHtcXG4gIHBhZGRpbmctdG9wOiAyNDsgfVxcblxcbi5wLXItMjQge1xcbiAgcGFkZGluZy1yaWdodDogMjQ7IH1cXG5cXG4ucC1iLTI0IHtcXG4gIHBhZGRpbmctYm90dG9tOiAyNDsgfVxcblxcbi5wLWwtMjQge1xcbiAgcGFkZGluZy1sZWZ0OiAyNDsgfVxcblxcbi5wLXgtMjQge1xcbiAgcGFkZGluZy1yaWdodDogMjQ7XFxuICBwYWRkaW5nLWxlZnQ6IDI0OyB9XFxuXFxuLnAteS0yNCB7XFxuICBwYWRkaW5nLXRvcDogMjQ7XFxuICBwYWRkaW5nLWJvdHRvbTogMjQ7IH1cXG5cXG4ucC0yNSB7XFxuICBwYWRkaW5nOiAyNTsgfVxcblxcbi5wLXQtMjUge1xcbiAgcGFkZGluZy10b3A6IDI1OyB9XFxuXFxuLnAtci0yNSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyNTsgfVxcblxcbi5wLWItMjUge1xcbiAgcGFkZGluZy1ib3R0b206IDI1OyB9XFxuXFxuLnAtbC0yNSB7XFxuICBwYWRkaW5nLWxlZnQ6IDI1OyB9XFxuXFxuLnAteC0yNSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyNTtcXG4gIHBhZGRpbmctbGVmdDogMjU7IH1cXG5cXG4ucC15LTI1IHtcXG4gIHBhZGRpbmctdG9wOiAyNTtcXG4gIHBhZGRpbmctYm90dG9tOiAyNTsgfVxcblxcbi5wLTI4IHtcXG4gIHBhZGRpbmc6IDI4OyB9XFxuXFxuLnAtdC0yOCB7XFxuICBwYWRkaW5nLXRvcDogMjg7IH1cXG5cXG4ucC1yLTI4IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDI4OyB9XFxuXFxuLnAtYi0yOCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMjg7IH1cXG5cXG4ucC1sLTI4IHtcXG4gIHBhZGRpbmctbGVmdDogMjg7IH1cXG5cXG4ucC14LTI4IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDI4O1xcbiAgcGFkZGluZy1sZWZ0OiAyODsgfVxcblxcbi5wLXktMjgge1xcbiAgcGFkZGluZy10b3A6IDI4O1xcbiAgcGFkZGluZy1ib3R0b206IDI4OyB9XFxuXFxuLnAtMzAge1xcbiAgcGFkZGluZzogMzA7IH1cXG5cXG4ucC10LTMwIHtcXG4gIHBhZGRpbmctdG9wOiAzMDsgfVxcblxcbi5wLXItMzAge1xcbiAgcGFkZGluZy1yaWdodDogMzA7IH1cXG5cXG4ucC1iLTMwIHtcXG4gIHBhZGRpbmctYm90dG9tOiAzMDsgfVxcblxcbi5wLWwtMzAge1xcbiAgcGFkZGluZy1sZWZ0OiAzMDsgfVxcblxcbi5wLXgtMzAge1xcbiAgcGFkZGluZy1yaWdodDogMzA7XFxuICBwYWRkaW5nLWxlZnQ6IDMwOyB9XFxuXFxuLnAteS0zMCB7XFxuICBwYWRkaW5nLXRvcDogMzA7XFxuICBwYWRkaW5nLWJvdHRvbTogMzA7IH1cXG5cXG4vKiBEaXZpZGVycyAqL1xcbi5oci1saWdodCB7XFxuICBoZWlnaHQ6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4uaHItZGFyayB7XFxuICBoZWlnaHQ6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4vKiBBbGlnbm1lbnQgKi9cXG4udGV4dC1sZWZ0IHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7IH1cXG5cXG4udGV4dC1yaWdodCB7XFxuICB0ZXh0LWFsaWduOiByaWdodDsgfVxcblxcbi50ZXh0LWNlbnRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4udGV4dC1sb3dlcmNhc2Uge1xcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTsgfVxcblxcbi50ZXh0LXVwcGVyY2FzZSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuXFxuLnRleHQtY2FwaXRhbGl6ZSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTsgfVxcblxcbi5mb250LXdlaWdodC1ub3JtYWwge1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgfVxcblxcbi5mb250LXdlaWdodC1ib2xkIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuXFxuLmZvbnQtaXRhbGljIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYzsgfVxcblxcbi8qKlxcclxcbiAqIEZvbnQgc2l6ZVxcclxcbiAqIFRoZSBmb2xsb3dpbmcgY3JlYXRlcyB0aGlzIHBhdHRlcm46XFxyXFxuICogLnQtMTB7Zm9udC1zaXplOjEwfVxcclxcbiAqIEZyb20gMTAsIDEyLCAxNCwgMTUsIDE2LCAxNywgMTgsIDE5LCAyMFxcclxcbioqL1xcbi50LTEwIHtcXG4gIGZvbnQtc2l6ZTogMTA7IH1cXG5cXG4udC0xMiB7XFxuICBmb250LXNpemU6IDEyOyB9XFxuXFxuLnQtMTQge1xcbiAgZm9udC1zaXplOiAxNDsgfVxcblxcbi50LTE1IHtcXG4gIGZvbnQtc2l6ZTogMTU7IH1cXG5cXG4udC0xNiB7XFxuICBmb250LXNpemU6IDE2OyB9XFxuXFxuLnQtMTcge1xcbiAgZm9udC1zaXplOiAxNzsgfVxcblxcbi50LTE4IHtcXG4gIGZvbnQtc2l6ZTogMTg7IH1cXG5cXG4udC0xOSB7XFxuICBmb250LXNpemU6IDE5OyB9XFxuXFxuLnQtMjAge1xcbiAgZm9udC1zaXplOiAyMDsgfVxcblxcbi50LTI1IHtcXG4gIGZvbnQtc2l6ZTogMjU7IH1cXG5cXG4udC0zMCB7XFxuICBmb250LXNpemU6IDMwOyB9XFxuXFxuLmltZy1yb3VuZGVkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDU7IH1cXG5cXG4uaW1nLWNpcmNsZSB7XFxuICBib3JkZXItcmFkaXVzOiAyMDsgfVxcblxcbi5pbWctdGh1bWJuYWlsIHtcXG4gIGJvcmRlci1yYWRpdXM6IDA7IH1cXG5cXG4uaW52aXNpYmxlIHtcXG4gIHZpc2liaWxpdHk6IGNvbGxhcHNlOyB9XFxuXFxuLnB1bGwtbGVmdCB7XFxuICBob3Jpem9udGFsLWFsaWduOiBsZWZ0OyB9XFxuXFxuLnB1bGwtcmlnaHQge1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogcmlnaHQ7IH1cXG5cXG4ubS14LWF1dG8ge1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLm0teS1hdXRvIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7IH1cXG5cXG4udGV4dC1wcmltYXJ5IHtcXG4gIGNvbG9yOiAjM0E1M0ZGOyB9XFxuXFxuLnRleHQtZGFuZ2VyIHtcXG4gIGNvbG9yOiAjRUQ0NzNGOyB9XFxuXFxuLnRleHQtbXV0ZWQge1xcbiAgY29sb3I6ICM5ZTllOWU7IH1cXG5cXG4uYmctcHJpbWFyeSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0E1M0ZGO1xcbiAgY29sb3I6ICNmZmY7IH1cXG5cXG4uYmctZGFuZ2VyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRDQ3M0Y7XFxuICBjb2xvcjogI2ZmZjsgfVxcblxcbi5hY3Rpb24tYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzQTUzRkY7XFxuICBjb2xvcjogI2ZmZjsgfVxcbiAgLmFjdGlvbi1iYXIgLmFjdGlvbi1iYXItdGl0bGUge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxNztcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjsgfVxcbiAgLmFjdGlvbi1iYXIgLmFjdGlvbi1pdGVtIHtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgfVxcblxcbi5hY3Rpdml0eS1pbmRpY2F0b3Ige1xcbiAgY29sb3I6ICMzQTUzRkY7XFxuICB3aWR0aDogMzA7XFxuICBoZWlnaHQ6IDMwOyB9XFxuXFxuLmJ0biB7XFxuICBjb2xvcjogIzAyNTU2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgbWluLWhlaWdodDogMzY7XFxuICBtaW4td2lkdGg6IDY0O1xcbiAgcGFkZGluZzogMTAgMTAgMTAgMTA7XFxuICBmb250LXNpemU6IDE4O1xcbiAgbWFyZ2luOiA4IDE2IDggMTY7IH1cXG4gIC5idG4uYnRuLWFjdGl2ZTpoaWdobGlnaHRlZCB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDM3Y2EwOyB9XFxuXFxuLmJ0bi1wcmltYXJ5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjU1NmU7XFxuICBib3JkZXItY29sb3I6ICMwMjU1NmU7XFxuICBjb2xvcjogI2ZmZjsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1hY3RpdmU6aGlnaGxpZ2h0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEyZTNjO1xcbiAgICBib3JkZXItY29sb3I6ICMwMTJlM2M7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tYXF1YSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGNhYWI7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tYmx1ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZDVhZmU7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tYnJvd24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk1NTQ4OyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLWZvcmVzdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDY5Njg7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tZ3JleSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1YzY4N2M7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tbGVtb24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYTAwO1xcbiAgICBjb2xvcjogIzAwMDsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1saW1lIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FlZTQwNjtcXG4gICAgY29sb3I6ICMwMDA7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tb3JhbmdlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1N2MwMDsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1wdXJwbGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODEzMGZmOyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLXJ1Ynkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYxNzQ0OyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLXNreSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMGJjZmY7IH1cXG5cXG4uYnRuLW91dGxpbmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItY29sb3I6ICMwMjU1NmU7XFxuICBjb2xvcjogIzAyNTU2ZTsgfVxcbiAgLmJ0bi1vdXRsaW5lLmJ0bi1hY3RpdmU6aGlnaGxpZ2h0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDM3Y2EwOyB9XFxuXFxuLmJ0bltpc0VuYWJsZWQ9ZmFsc2VdIHtcXG4gIGNvbG9yOiAjYTRhNGE0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG4gIGJvcmRlci1jb2xvcjogI2UwZTBlMDsgfVxcblxcbi5mYSB7XFxuICBmb250LWZhbWlseTogRm9udEF3ZXNvbWUsIGZvbnRhd2Vzb21lLXdlYmZvbnQ7IH1cXG5cXG4uZm9ybSAuaW5wdXQge1xcbiAgcGFkZGluZzogMTYgOCAxNiA4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG4gIC5mb3JtIC5pbnB1dC5pbnB1dC1ib3JkZXIge1xcbiAgICBib3JkZXItd2lkdGg6IDE7XFxuICAgIGJvcmRlci1jb2xvcjogI2UwZTBlMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjtcXG4gICAgcGFkZGluZzogMTY7IH1cXG4gIC5mb3JtIC5pbnB1dC5pbnB1dC1yb3VuZGVkIHtcXG4gICAgYm9yZGVyLXdpZHRoOiAxO1xcbiAgICBib3JkZXItY29sb3I6ICNlMGUwZTA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI4O1xcbiAgICBwYWRkaW5nOiAxNjsgfVxcbiAgLmZvcm0gLmlucHV0W2lzRW5hYmxlZD0nZmFsc2UnXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7IH1cXG5cXG4uZm9ybSAuaW5wdXQtZmllbGQge1xcbiAgbWFyZ2luOiA4OyB9XFxuICAuZm9ybSAuaW5wdXQtZmllbGQgLmxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxMjtcXG4gICAgY29sb3I6ICNiYWJhYmE7IH1cXG4gIC5mb3JtIC5pbnB1dC1maWVsZCAuaW5wdXQge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDAgMCA4IDA7IH1cXG4gIC5mb3JtIC5pbnB1dC1maWVsZCAuaHItbGlnaHQuYWN0aXZlLFxcbiAgLmZvcm0gLmlucHV0LWZpZWxkIC5oci1kYXJrLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzQTUzRkY7IH1cXG4gIC5mb3JtIC5pbnB1dC1maWVsZC5pbnB1dC1zaWRlcyAubGFiZWwge1xcbiAgICBmb250LXNpemU6IDE4O1xcbiAgICBtYXJnaW46IDAgMCA4IDA7IH1cXG5cXG4uaDEsIC5oMiwgLmgzLCAuaDQsIC5oNSwgLmg2IHtcXG4gIG1hcmdpbi1ib3R0b206IDQ7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgY29sb3I6ICMwMjI3MzQ7IH1cXG5cXG4uYm9keSxcXG4uYm9keTIsXFxuLmZvb3Rub3RlIHtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBjb2xvcjogIzAyMjczNDsgfVxcblxcbi5oMSB7XFxuICBmb250LXNpemU6IDMyOyB9XFxuXFxuLmgyIHtcXG4gIGZvbnQtc2l6ZTogMjI7IH1cXG5cXG4uaDMge1xcbiAgZm9udC1zaXplOiAxNTsgfVxcblxcbi5oNCB7XFxuICBmb250LXNpemU6IDEyOyB9XFxuXFxuLmg1IHtcXG4gIGZvbnQtc2l6ZTogMTE7IH1cXG5cXG4uaDYge1xcbiAgZm9udC1zaXplOiAxMDsgfVxcblxcbi5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMTQ7IH1cXG5cXG4uYm9keTIge1xcbiAgZm9udC1zaXplOiAxNzsgfVxcblxcbi5mb290bm90ZSB7XFxuICBmb250LXNpemU6IDEzOyB9XFxuXFxuLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbSB7XFxuICBjb2xvcjogIzIxMjEyMTtcXG4gIGZvbnQtc2l6ZTogMTY7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAxNjsgfVxcbiAgLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbSBMYWJlbCB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7IH1cXG4gIC5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW0gLnRodW1iIHtcXG4gICAgc3RyZXRjaDogZmlsbDtcXG4gICAgd2lkdGg6IDQwO1xcbiAgICBoZWlnaHQ6IDQwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE2OyB9XFxuICAubGlzdC1ncm91cCAubGlzdC1ncm91cC1pdGVtLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7IH1cXG4gIC5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW0gLmxpc3QtZ3JvdXAtaXRlbS10ZXh0IHtcXG4gICAgY29sb3I6ICMwMjI3MzQ7XFxuICAgIGZvbnQtc2l6ZTogMTQ7IH1cXG5cXG4ucGFnZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XFxuXFxuLnByb2dyZXNzIHtcXG4gIGNvbG9yOiAjM0E1M0ZGO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JhYmFiYTsgfVxcblxcbi5zZWdtZW50ZWQtYmFyIHtcXG4gIGZvbnQtc2l6ZTogMTM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgY29sb3I6ICMyMTIxMjE7XFxuICBzZWxlY3RlZC1iYWNrZ3JvdW5kLWNvbG9yOiAjM0E1M0ZGOyB9XFxuXFxuLnNpZGVkcmF3ZXItbGVmdCwgLnNpZGVkcmF3ZXItY2VudGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7IH1cXG5cXG4uc2lkZWRyYXdlci1oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcXG4gIGhlaWdodDogMTQ4O1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4uc2lkZWRyYXdlci1sZWZ0IC5zaWRlZHJhd2VyLWhlYWRlciB7XFxuICBwYWRkaW5nOiAxNiAxNiAwIDE2OyB9XFxuXFxuLnNpZGVkcmF3ZXItY2VudGVyIC5zaWRlZHJhd2VyLWhlYWRlciB7XFxuICBwYWRkaW5nOiAyMCAxNSAwIDE1OyB9XFxuXFxuLnNpZGVkcmF3ZXItaGVhZGVyLWltYWdlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7IH1cXG5cXG4uc2lkZWRyYXdlci1sZWZ0IC5zaWRlZHJhd2VyLWhlYWRlci1pbWFnZSB7XFxuICBoZWlnaHQ6IDY0O1xcbiAgd2lkdGg6IDY0O1xcbiAgYm9yZGVyLXJhZGl1czogMzI7XFxuICBob3Jpem9udGFsLWFsaWduOiBsZWZ0O1xcbiAgbWFyZ2luLWJvdHRvbTogMzY7IH1cXG5cXG4uc2lkZWRyYXdlci1jZW50ZXIgLnNpZGVkcmF3ZXItaGVhZGVyLWltYWdlIHtcXG4gIGhlaWdodDogNzQ7XFxuICB3aWR0aDogNzQ7XFxuICBib3JkZXItcmFkaXVzOiAzNztcXG4gIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDI0OyB9XFxuXFxuLnNpZGVkcmF3ZXItaGVhZGVyLWJyYW5kIHtcXG4gIGNvbG9yOiAjNzM3MzczOyB9XFxuXFxuLnNpZGVkcmF3ZXItbGVmdCAuc2lkZWRyYXdlci1oZWFkZXItYnJhbmQge1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogbGVmdDtcXG4gIGZvbnQtc2l6ZTogMTQ7IH1cXG5cXG4uc2lkZWRyYXdlci1jZW50ZXIgLnNpZGVkcmF3ZXItaGVhZGVyLWJyYW5kIHtcXG4gIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTU7IH1cXG5cXG4uc2lkZWRyYXdlci1saXN0LWl0ZW0ge1xcbiAgaGVpZ2h0OiA0ODtcXG4gIGhvcml6b250YWwtYWxpZ246IGxlZnQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIG9yaWVudGF0aW9uOiBob3Jpem9udGFsOyB9XFxuICAuc2lkZWRyYXdlci1saXN0LWl0ZW0gLnNpZGVkcmF3ZXItbGlzdC1pdGVtLWljb24ge1xcbiAgICB3aWR0aDogMjQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMDtcXG4gICAgaGVpZ2h0OiA0ODtcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjsgfVxcbiAgLnNpZGVkcmF3ZXItbGlzdC1pdGVtLmFjdGl2ZSB7XFxuICAgIGNvbG9yOiAjM0E1M0ZGO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEY4OyB9XFxuICAgIC5zaWRlZHJhd2VyLWxpc3QtaXRlbS5hY3RpdmUgLnNpZGVkcmF3ZXItbGlzdC1pdGVtLWljb24ge1xcbiAgICAgIGNvbG9yOiAjM0E1M0ZGOyB9XFxuXFxuLnNpZGVkcmF3ZXItbGVmdCAuc2lkZWRyYXdlci1saXN0LWl0ZW0taWNvbiB7XFxuICBtYXJnaW46IDAgMTYgMCAxNjsgfVxcblxcbi5zaWRlZHJhd2VyLWNlbnRlciAuc2lkZWRyYXdlci1saXN0LWl0ZW0taWNvbiB7XFxuICBtYXJnaW46IDAgMCAwIDE1OyB9XFxuXFxuLnNpZGVkcmF3ZXItbGlzdC1pdGVtLXRleHQge1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogbGVmdDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBmb250LXNpemU6IDE1O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItd2lkdGg6IDAuMTtcXG4gIHdpZHRoOiA4MCU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLnNpZGVkcmF3ZXItbGVmdCAuc2lkZWRyYXdlci1saXN0LWl0ZW0tdGV4dCB7XFxuICBwYWRkaW5nLWxlZnQ6IDE2OyB9XFxuXFxuLnNpZGVkcmF3ZXItY2VudGVyIC5zaWRlZHJhd2VyLWxpc3QtaXRlbS10ZXh0IHtcXG4gIHBhZGRpbmctbGVmdDogMTU7IH1cXG5cXG4uc2xpZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzQTUzRkY7IH1cXG4gIC5zbGlkZXJbaXNFbmFibGVkPWZhbHNlXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxuICAgIGNvbG9yOiAjZTBlMGUwOyB9XFxuXFxuLnN3aXRjaFtjaGVja2VkPXRydWVdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzQTUzRkY7XFxuICBjb2xvcjogIzNBNTNGRjsgfVxcblxcbi5zd2l0Y2hbY2hlY2tlZD10cnVlXVtpc0VuYWJsZWQ9ZmFsc2VdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxuICBjb2xvcjogI2ZmZjsgfVxcblxcbi5zd2l0Y2hbaXNFbmFibGVkPWZhbHNlXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbiAgY29sb3I6ICNlMGUwZTA7IH1cXG5cXG4udGFiLXZpZXcge1xcbiAgLypjb2xvcjogJHNlY29uZGFyeTsqL1xcbiAgc2VsZWN0ZWQtY29sb3I6ICMzMGJjZmY7XFxuICB0YWJzLWJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cXG4gIC50YWItdmlldyAudGFiLXZpZXctaXRlbSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIHRhYnMtYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxcblxcbiNsb2dpbi1iYWNrZ3JvdW5kIHtcXG4gIG1hcmdpbi10b3A6IC0yMDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IH1cXG5cXG4ubG9naW4td3JhcCB7XFxuICBwYWRkaW5nOiAwIDQwOyB9XFxuXFxuLmxvZ28td3JhcCB7XFxuICBtYXJnaW46IDYwIDAgMTAgMDtcXG4gIHBhZGRpbmc6IDIwIDA7IH1cXG4gIC5sb2dvLXdyYXAgLmxvZ2luLWxvZ28ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMzA7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMDtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgY29sb3I6ICMyMTIxMjE7XFxuICAgIG9wYWNpdHk6IC45OyB9XFxuICAubG9nby13cmFwIC5sb2dpbi1sb2dvLXN1YiB7XFxuICAgIGNvbG9yOiAjMjEyMTIxO1xcbiAgICBvcGFjaXR5OiAuODtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLmxvZ2luLXdyYXBwZXIge1xcbiAgcGFkZGluZzogMjA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogMzsgfVxcbiAgLmxvZ2luLXdyYXBwZXIgVGV4dEZpZWxkIHtcXG4gICAgcGFkZGluZzogMTAgMTA7XFxuICAgIG1hcmdpbjogMTAgMCAwIDA7IH1cXG5cXG4uZ28tYmFjayB7XFxuICBmb250LXNpemU6IDE0O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICMyMTIxMjE7XFxuICBtYXJnaW4tdG9wOiAxMDsgfVxcblxcbi8qKlxcclxcbiAqIEltcG9ydCBhbGwgcGxhdGZvcm0gc3BlY2lmaWMgZmlsZXMgaGVyZVxcclxcbiAqL1xcbi5hY3Rpb24tYmFyIC5hY3Rpb24tYmFyLXRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDIwOyB9XFxuXFxuLmFjdGlvbi1iYXIgLmFjdGlvbi1pdGVtIHtcXG4gIGFuZHJvaWQtZWxldmF0aW9uOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDApO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMCk7XFxuICBib3JkZXItd2lkdGg6IDE7IH1cXG5cXG4uYnRuIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XFxuICBmb250LXNpemU6IDE0OyB9XFxuXFxuLmJ0bi1wcmltYXJ5IHtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDApOyB9XFxuXFxuLmJ0bi1vdXRsaW5lIHtcXG4gIGFuZHJvaWQtZWxldmF0aW9uOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDApO1xcbiAgYm9yZGVyLXdpZHRoOiAxO1xcbiAgYm9yZGVyLWNvbG9yOiAjMDI1NTZlO1xcbiAgaGVpZ2h0OiAzNjtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG4uYnRuLXJvdW5kZWQtc20ge1xcbiAgYm9yZGVyLXJhZGl1czogMjtcXG4gIGhlaWdodDogMzY7XFxuICBwYWRkaW5nOiAwOyB9XFxuXFxuLmJ0bi1yb3VuZGVkLWxnIHtcXG4gIGJvcmRlci1yYWRpdXM6IDQwO1xcbiAgaGVpZ2h0OiAzNjtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG4uZm9ybSB7XFxuICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJzsgfVxcbiAgLmZvcm0gLmlucHV0IHtcXG4gICAgZm9udC1zaXplOiAxNjsgfVxcblxcbi5oMSB7XFxuICBmb250LXNpemU6IDM0OyB9XFxuXFxuLmgyIHtcXG4gIGZvbnQtc2l6ZTogMjQ7IH1cXG5cXG4uaDMge1xcbiAgZm9udC1zaXplOiAxNjsgfVxcblxcbi5oNSB7XFxuICBmb250LXNpemU6IDExO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG5cXG4uYm9keTIge1xcbiAgZm9udC1zaXplOiAxNDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7IH1cXG5cXG4uc2lkZWRyYXdlci1saXN0LWl0ZW0taWNvbiB7XFxuICBtYXJnaW46IDAgMTYgMCAxNjtcXG4gIHBhZGRpbmctdG9wOiAxNDsgfVxcblxcbi5zaWRlZHJhd2VyLWxpc3QtaXRlbS1pY29uLCAuc2lkZWRyYXdlci1saXN0LWl0ZW0ge1xcbiAgY29sb3I6ICMwMjI3MzQ7IH1cXG5cXG4uc2lkZWRyYXdlci1saXN0LWl0ZW0ge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcXG4gIGZvbnQtc2l6ZTogMTQ7IH1cXG5cXG4uc2xpZGVyIHtcXG4gIGNvbG9yOiAjM0E1M0ZGO1xcbiAgbWFyZ2luOiAyMCAxNjsgfVxcblxcbi5zd2l0Y2gge1xcbiAgbWFyZ2luOiAxNCAxNjtcXG4gIGNvbG9yOiAjZTBlMGUwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDsgfVxcbiAgLnN3aXRjaFtjaGVja2VkPXRydWVdIHtcXG4gICAgY29sb3I6ICMzQTUzRkY7IH1cXG5cXG4uZmEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250QXdlc29tZVxcXCI7IH1cXG5cXG4uYWN0aW9uLWl0ZW0sXFxuTmF2aWdhdGlvbkJ1dHRvbiB7XFxuICBjb2xvcjogI2ZmZjsgfVxcblxcbi5hY3Rpb24taXRlbTpkaXNhYmxlZCB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpOyB9XFxuXFxuU2xpZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzQTUzRkY7XFxuICBjb2xvcjogIzNBNTNGRjsgfVxcblxcbi50ZXh0IHtcXG4gIGNvbG9yOiAjMDIyNzM0OyB9XFxuXFxuLnRleHQtcHJpbWFyeSB7XFxuICBjb2xvcjogIzNBNTNGRjsgfVxcblxcbi50ZXh0LXNlY29uZGFyeSB7XFxuICBjb2xvcjogcmdiYSgyLCAzOSwgNTIsIDAuNSk7IH1cXG5cXG4uYWN0aW9uLWl0ZW0ge1xcbiAgcGFkZGluZzogMCAxMDtcXG4gIGhlaWdodDogMTAwJTsgfVxcblxcbi5mYSB7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnRBd2Vzb21lXFxcIiwgXFxcImZvbnRhd2Vzb21lLXdlYmZvbnRcXFwiOyB9XFxuXFxuLmlvbiB7XFxuICBmb250LWZhbWlseTogXFxcImlvbmljb25zXFxcIjsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9hcHAuc2NzcycgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9BZG9wdGlvbkFuaW1hbERldGFpbHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRlYmEyZDEyJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0Fkb3B0aW9uQW5pbWFsRGV0YWlscy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0Fkb3B0aW9uQW5pbWFsRGV0YWlscy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vQWRvcHRpb25BbmltYWxEZXRhaWxzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTRlYmEyZDEyJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI0ZWJhMmQxMlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9qdHJhbi9EZXNrdG9wL2FjdWFWXzIvYWN1YS1tb2JpbGUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNGViYTJkMTInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNGViYTJkMTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNGViYTJkMTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0Fkb3B0aW9uQW5pbWFsRGV0YWlscy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGViYTJkMTImc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNGViYTJkMTInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvYWRvcHRpb24vQWRvcHRpb25BbmltYWxEZXRhaWxzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BZG9wdGlvbkFuaW1hbERldGFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRvcHRpb25BbmltYWxEZXRhaWxzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRvcHRpb25BbmltYWxEZXRhaWxzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTRlYmEyZDEyJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Fkb3B0aW9uQW5pbWFsRGV0YWlscy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00ZWJhMmQxMiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BZG9wdGlvbkFuaW1hbERldGFpbHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRlYmEyZDEyJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9BbmltYWxDYXJkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mMTQyMmExMCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BbmltYWxDYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQW5pbWFsQ2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vQW5pbWFsQ2FyZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1mMTQyMmExMCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiZjE0MjJhMTBcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvanRyYW4vRGVza3RvcC9hY3VhVl8yL2FjdWEtbW9iaWxlL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2YxNDIyYTEwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2YxNDIyYTEwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2YxNDIyYTEwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BbmltYWxDYXJkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mMTQyMmExMCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdmMTQyMmExMCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9hZG9wdGlvbi9BbmltYWxDYXJkLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BbmltYWxDYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FuaW1hbENhcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BbmltYWxDYXJkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWYxNDIyYTEwJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FuaW1hbENhcmQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZjE0MjJhMTAmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQW5pbWFsQ2FyZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZjE0MjJhMTAmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNWM5OGVhYyZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wNWM5OGVhYyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMDVjOThlYWNcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvanRyYW4vRGVza3RvcC9hY3VhVl8yL2FjdWEtbW9iaWxlL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzA1Yzk4ZWFjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzA1Yzk4ZWFjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzA1Yzk4ZWFjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDVjOThlYWMmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMDVjOThlYWMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvYWRvcHRpb24vY2F0ZWdvcnkudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDVjOThlYWMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDVjOThlYWMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA1Yzk4ZWFjJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9DYXRlZ29yeUJ1dHRvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzYwOWEyMzkmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQ2F0ZWdvcnlCdXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9DYXRlZ29yeUJ1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vQ2F0ZWdvcnlCdXR0b24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzYwOWEyMzkmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjc2MDlhMjM5XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2p0cmFuL0Rlc2t0b3AvYWN1YVZfMi9hY3VhLW1vYmlsZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc3NjA5YTIzOScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3NjA5YTIzOScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3NjA5YTIzOScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQ2F0ZWdvcnlCdXR0b24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc2MDlhMjM5JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzc2MDlhMjM5Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL2J1dHRvbnMvQ2F0ZWdvcnlCdXR0b24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NhdGVnb3J5QnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NhdGVnb3J5QnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2F0ZWdvcnlCdXR0b24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzYwOWEyMzkmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2F0ZWdvcnlCdXR0b24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzYwOWEyMzkmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2F0ZWdvcnlCdXR0b24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc2MDlhMjM5JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9JY29uQnV0dG9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NGFlNTcxOCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9JY29uQnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vSWNvbkJ1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vSWNvbkJ1dHRvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00NGFlNTcxOCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNDRhZTU3MThcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvanRyYW4vRGVza3RvcC9hY3VhVl8yL2FjdWEtbW9iaWxlL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzQ0YWU1NzE4JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzQ0YWU1NzE4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzQ0YWU1NzE4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9JY29uQnV0dG9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NGFlNTcxOCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0NGFlNTcxOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9idXR0b25zL0ljb25CdXR0b24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ljb25CdXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSWNvbkJ1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ljb25CdXR0b24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDRhZTU3MTgmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSWNvbkJ1dHRvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00NGFlNTcxOCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JY29uQnV0dG9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NGFlNTcxOCZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQW5pbWFsQ2VudGVyRGV0YWlscy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWZmN2QxNWMmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQW5pbWFsQ2VudGVyRGV0YWlscy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0FuaW1hbENlbnRlckRldGFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0FuaW1hbENlbnRlckRldGFpbHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWZmN2QxNWMmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI1ZmY3ZDE1Y1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9qdHJhbi9EZXNrdG9wL2FjdWFWXzIvYWN1YS1tb2JpbGUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNWZmN2QxNWMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNWZmN2QxNWMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNWZmN2QxNWMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0FuaW1hbENlbnRlckRldGFpbHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVmZjdkMTVjJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzVmZjdkMTVjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL2xvY2F0aW9uL0FuaW1hbENlbnRlckRldGFpbHMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FuaW1hbENlbnRlckRldGFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQW5pbWFsQ2VudGVyRGV0YWlscy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BbmltYWxDZW50ZXJEZXRhaWxzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVmZjdkMTVjJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQW5pbWFsQ2VudGVyRGV0YWlscy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01ZmY3ZDE1YyZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQW5pbWFsQ2VudGVyRGV0YWlscy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWZmN2QxNWMmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0ZhcUluZm8udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBhNGJiMjQ1JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0ZhcUluZm8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9GYXFJbmZvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9GYXFJbmZvLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBhNGJiMjQ1JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMGE0YmIyNDVcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvanRyYW4vRGVza3RvcC9hY3VhVl8yL2FjdWEtbW9iaWxlL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzBhNGJiMjQ1JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzBhNGJiMjQ1JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzBhNGJiMjQ1JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9GYXFJbmZvLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wYTRiYjI0NSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwYTRiYjI0NScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9zdWJsaXN0cy9GYXFJbmZvLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GYXFJbmZvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZhcUluZm8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmFxSW5mby52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wYTRiYjI0NSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZhcUluZm8udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MGE0YmIyNDUmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZhcUluZm8udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBhNGJiMjQ1JnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiFcXHJcXG4gKiAgRm9udCBBd2Vzb21lIDQuNy4wIGJ5IEBkYXZlZ2FuZHkgLSBodHRwOi8vZm9udGF3ZXNvbWUuaW8gLSBAZm9udGF3ZXNvbWVcXHJcXG4gKiAgTGljZW5zZSAtIGh0dHA6Ly9mb250YXdlc29tZS5pby9saWNlbnNlIChGb250OiBTSUwgT0ZMIDEuMSwgQ1NTOiBNSVQgTGljZW5zZSlcXHJcXG4gKi9cXHJcXG4vKiBGT05UIFBBVEhcXHJcXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdGb250QXdlc29tZSc7XFxyXFxuICBzcmM6IHVybCgnLi4vZm9udHMvZm9udGF3ZXNvbWUtd2ViZm9udC5lb3Q/dj00LjcuMCcpO1xcclxcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL2ZvbnRhd2Vzb21lLXdlYmZvbnQuZW90PyNpZWZpeCZ2PTQuNy4wJykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLCB1cmwoJy4uL2ZvbnRzL2ZvbnRhd2Vzb21lLXdlYmZvbnQud29mZjI/dj00LjcuMCcpIGZvcm1hdCgnd29mZjInKSwgdXJsKCcuLi9mb250cy9mb250YXdlc29tZS13ZWJmb250LndvZmY/dj00LjcuMCcpIGZvcm1hdCgnd29mZicpLCB1cmwoJy4uL2ZvbnRzL2ZvbnRhd2Vzb21lLXdlYmZvbnQudHRmP3Y9NC43LjAnKSBmb3JtYXQoJ3RydWV0eXBlJyksIHVybCgnLi4vZm9udHMvZm9udGF3ZXNvbWUtd2ViZm9udC5zdmc/dj00LjcuMCNmb250YXdlc29tZXJlZ3VsYXInKSBmb3JtYXQoJ3N2ZycpO1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuLmZhIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDE0cHgvMSBGb250QXdlc29tZTtcXHJcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXHJcXG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xcclxcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxyXFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcclxcbn1cXHJcXG4vKiBtYWtlcyB0aGUgZm9udCAzMyUgbGFyZ2VyIHJlbGF0aXZlIHRvIHRoZSBpY29uIGNvbnRhaW5lciAqL1xcclxcbi5mYS1sZyB7XFxyXFxuICBmb250LXNpemU6IDEuMzMzMzMzMzNlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAwLjc1ZW07XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogLTE1JTtcXHJcXG59XFxyXFxuLmZhLTJ4IHtcXHJcXG4gIGZvbnQtc2l6ZTogMmVtO1xcclxcbn1cXHJcXG4uZmEtM3gge1xcclxcbiAgZm9udC1zaXplOiAzZW07XFxyXFxufVxcclxcbi5mYS00eCB7XFxyXFxuICBmb250LXNpemU6IDRlbTtcXHJcXG59XFxyXFxuLmZhLTV4IHtcXHJcXG4gIGZvbnQtc2l6ZTogNWVtO1xcclxcbn1cXHJcXG4uZmEtZncge1xcclxcbiAgd2lkdGg6IDEuMjg1NzE0MjllbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLmZhLXVsIHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAyLjE0Mjg1NzE0ZW07XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxufVxcclxcbi5mYS11bCA+IGxpIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuLmZhLWxpIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IC0yLjE0Mjg1NzE0ZW07XFxyXFxuICB3aWR0aDogMi4xNDI4NTcxNGVtO1xcclxcbiAgdG9wOiAwLjE0Mjg1NzE0ZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5mYS1saS5mYS1sZyB7XFxyXFxuICBsZWZ0OiAtMS44NTcxNDI4NmVtO1xcclxcbn1cXHJcXG4uZmEtYm9yZGVyIHtcXHJcXG4gIHBhZGRpbmc6IC4yZW0gLjI1ZW0gLjE1ZW07XFxyXFxuICBib3JkZXI6IHNvbGlkIDAuMDhlbSAjZWVlZWVlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogLjFlbTtcXHJcXG59XFxyXFxuLmZhLXB1bGwtbGVmdCB7XFxyXFxuICBmbG9hdDogbGVmdDtcXHJcXG59XFxyXFxuLmZhLXB1bGwtcmlnaHQge1xcclxcbiAgZmxvYXQ6IHJpZ2h0O1xcclxcbn1cXHJcXG4uZmEuZmEtcHVsbC1sZWZ0IHtcXHJcXG4gIG1hcmdpbi1yaWdodDogLjNlbTtcXHJcXG59XFxyXFxuLmZhLmZhLXB1bGwtcmlnaHQge1xcclxcbiAgbWFyZ2luLWxlZnQ6IC4zZW07XFxyXFxufVxcclxcbi8qIERlcHJlY2F0ZWQgYXMgb2YgNC40LjAgKi9cXHJcXG4ucHVsbC1yaWdodCB7XFxyXFxuICBmbG9hdDogcmlnaHQ7XFxyXFxufVxcclxcbi5wdWxsLWxlZnQge1xcclxcbiAgZmxvYXQ6IGxlZnQ7XFxyXFxufVxcclxcbi5mYS5wdWxsLWxlZnQge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAuM2VtO1xcclxcbn1cXHJcXG4uZmEucHVsbC1yaWdodCB7XFxyXFxuICBtYXJnaW4tbGVmdDogLjNlbTtcXHJcXG59XFxyXFxuLmZhLXNwaW4ge1xcclxcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhLXNwaW4gMnMgaW5maW5pdGUgbGluZWFyO1xcclxcbiAgYW5pbWF0aW9uOiBmYS1zcGluIDJzIGluZmluaXRlIGxpbmVhcjtcXHJcXG59XFxyXFxuLmZhLXB1bHNlIHtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYS1zcGluIDFzIGluZmluaXRlIHN0ZXBzKDgpO1xcclxcbiAgYW5pbWF0aW9uOiBmYS1zcGluIDFzIGluZmluaXRlIHN0ZXBzKDgpO1xcclxcbn1cXHJcXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmEtc3BpbiB7XFxyXFxuICAwJSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQGtleWZyYW1lcyBmYS1zcGluIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xcclxcbiAgfVxcclxcbn1cXHJcXG4uZmEtcm90YXRlLTkwIHtcXHJcXG4gIC1tcy1maWx0ZXI6IFxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0xKVxcXCI7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXHJcXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxyXFxufVxcclxcbi5mYS1yb3RhdGUtMTgwIHtcXHJcXG4gIC1tcy1maWx0ZXI6IFxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0yKVxcXCI7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxyXFxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxyXFxufVxcclxcbi5mYS1yb3RhdGUtMjcwIHtcXHJcXG4gIC1tcy1maWx0ZXI6IFxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0zKVxcXCI7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XFxyXFxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XFxyXFxufVxcclxcbi5mYS1mbGlwLWhvcml6b250YWwge1xcclxcbiAgLW1zLWZpbHRlcjogXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTAsIG1pcnJvcj0xKVxcXCI7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xcclxcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XFxyXFxufVxcclxcbi5mYS1mbGlwLXZlcnRpY2FsIHtcXHJcXG4gIC1tcy1maWx0ZXI6IFxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0yLCBtaXJyb3I9MSlcXFwiO1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsIC0xKTtcXHJcXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEsIC0xKTtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSwgLTEpO1xcclxcbn1cXHJcXG46cm9vdCAuZmEtcm90YXRlLTkwLFxcclxcbjpyb290IC5mYS1yb3RhdGUtMTgwLFxcclxcbjpyb290IC5mYS1yb3RhdGUtMjcwLFxcclxcbjpyb290IC5mYS1mbGlwLWhvcml6b250YWwsXFxyXFxuOnJvb3QgLmZhLWZsaXAtdmVydGljYWwge1xcclxcbiAgZmlsdGVyOiBub25lO1xcclxcbn1cXHJcXG4uZmEtc3RhY2sge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgd2lkdGg6IDJlbTtcXHJcXG4gIGhlaWdodDogMmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDJlbTtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxufVxcclxcbi5mYS1zdGFjay0xeCxcXHJcXG4uZmEtc3RhY2stMngge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uZmEtc3RhY2stMXgge1xcclxcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxyXFxufVxcclxcbi5mYS1zdGFjay0yeCB7XFxyXFxuICBmb250LXNpemU6IDJlbTtcXHJcXG59XFxyXFxuLmZhLWludmVyc2Uge1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxufVxcclxcbi8qIEZvbnQgQXdlc29tZSB1c2VzIHRoZSBVbmljb2RlIFByaXZhdGUgVXNlIEFyZWEgKFBVQSkgdG8gZW5zdXJlIHNjcmVlblxcclxcbiAgIHJlYWRlcnMgZG8gbm90IHJlYWQgb2ZmIHJhbmRvbSBjaGFyYWN0ZXJzIHRoYXQgcmVwcmVzZW50IGljb25zICovXFxyXFxuLmZhLWdsYXNzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMDBcXFwiO1xcclxcbn1cXHJcXG4uZmEtbXVzaWM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwMVxcXCI7XFxyXFxufVxcclxcbi5mYS1zZWFyY2g6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwMlxcXCI7XFxyXFxufVxcclxcbi5mYS1lbnZlbG9wZS1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMDNcXFwiO1xcclxcbn1cXHJcXG4uZmEtaGVhcnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwNFxcXCI7XFxyXFxufVxcclxcbi5mYS1zdGFyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMDVcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3Rhci1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMDZcXFwiO1xcclxcbn1cXHJcXG4uZmEtdXNlcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDA3XFxcIjtcXHJcXG59XFxyXFxuLmZhLWZpbG06YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwOFxcXCI7XFxyXFxufVxcclxcbi5mYS10aC1sYXJnZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDA5XFxcIjtcXHJcXG59XFxyXFxuLmZhLXRoOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMEFcXFwiO1xcclxcbn1cXHJcXG4uZmEtdGgtbGlzdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDBCXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNoZWNrOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMENcXFwiO1xcclxcbn1cXHJcXG4uZmEtcmVtb3ZlOmJlZm9yZSxcXHJcXG4uZmEtY2xvc2U6YmVmb3JlLFxcclxcbi5mYS10aW1lczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDBEXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNlYXJjaC1wbHVzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMEVcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2VhcmNoLW1pbnVzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMTBcXFwiO1xcclxcbn1cXHJcXG4uZmEtcG93ZXItb2ZmOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMTFcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2lnbmFsOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMTJcXFwiO1xcclxcbn1cXHJcXG4uZmEtZ2VhcjpiZWZvcmUsXFxyXFxuLmZhLWNvZzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDEzXFxcIjtcXHJcXG59XFxyXFxuLmZhLXRyYXNoLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxNFxcXCI7XFxyXFxufVxcclxcbi5mYS1ob21lOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMTVcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmlsZS1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMTZcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2xvY2stbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDE3XFxcIjtcXHJcXG59XFxyXFxuLmZhLXJvYWQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxOFxcXCI7XFxyXFxufVxcclxcbi5mYS1kb3dubG9hZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDE5XFxcIjtcXHJcXG59XFxyXFxuLmZhLWFycm93LWNpcmNsZS1vLWRvd246YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxQVxcXCI7XFxyXFxufVxcclxcbi5mYS1hcnJvdy1jaXJjbGUtby11cDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDFCXFxcIjtcXHJcXG59XFxyXFxuLmZhLWluYm94OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMUNcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGxheS1jaXJjbGUtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDFEXFxcIjtcXHJcXG59XFxyXFxuLmZhLXJvdGF0ZS1yaWdodDpiZWZvcmUsXFxyXFxuLmZhLXJlcGVhdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDFFXFxcIjtcXHJcXG59XFxyXFxuLmZhLXJlZnJlc2g6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAyMVxcXCI7XFxyXFxufVxcclxcbi5mYS1saXN0LWFsdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDIyXFxcIjtcXHJcXG59XFxyXFxuLmZhLWxvY2s6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAyM1xcXCI7XFxyXFxufVxcclxcbi5mYS1mbGFnOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMjRcXFwiO1xcclxcbn1cXHJcXG4uZmEtaGVhZHBob25lczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDI1XFxcIjtcXHJcXG59XFxyXFxuLmZhLXZvbHVtZS1vZmY6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAyNlxcXCI7XFxyXFxufVxcclxcbi5mYS12b2x1bWUtZG93bjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDI3XFxcIjtcXHJcXG59XFxyXFxuLmZhLXZvbHVtZS11cDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDI4XFxcIjtcXHJcXG59XFxyXFxuLmZhLXFyY29kZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDI5XFxcIjtcXHJcXG59XFxyXFxuLmZhLWJhcmNvZGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAyQVxcXCI7XFxyXFxufVxcclxcbi5mYS10YWc6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAyQlxcXCI7XFxyXFxufVxcclxcbi5mYS10YWdzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMkNcXFwiO1xcclxcbn1cXHJcXG4uZmEtYm9vazpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDJEXFxcIjtcXHJcXG59XFxyXFxuLmZhLWJvb2ttYXJrOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMkVcXFwiO1xcclxcbn1cXHJcXG4uZmEtcHJpbnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAyRlxcXCI7XFxyXFxufVxcclxcbi5mYS1jYW1lcmE6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzMFxcXCI7XFxyXFxufVxcclxcbi5mYS1mb250OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMzFcXFwiO1xcclxcbn1cXHJcXG4uZmEtYm9sZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDMyXFxcIjtcXHJcXG59XFxyXFxuLmZhLWl0YWxpYzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDMzXFxcIjtcXHJcXG59XFxyXFxuLmZhLXRleHQtaGVpZ2h0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwMzRcXFwiO1xcclxcbn1cXHJcXG4uZmEtdGV4dC13aWR0aDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDM1XFxcIjtcXHJcXG59XFxyXFxuLmZhLWFsaWduLWxlZnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzNlxcXCI7XFxyXFxufVxcclxcbi5mYS1hbGlnbi1jZW50ZXI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzN1xcXCI7XFxyXFxufVxcclxcbi5mYS1hbGlnbi1yaWdodDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDM4XFxcIjtcXHJcXG59XFxyXFxuLmZhLWFsaWduLWp1c3RpZnk6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzOVxcXCI7XFxyXFxufVxcclxcbi5mYS1saXN0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwM0FcXFwiO1xcclxcbn1cXHJcXG4uZmEtZGVkZW50OmJlZm9yZSxcXHJcXG4uZmEtb3V0ZGVudDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDNCXFxcIjtcXHJcXG59XFxyXFxuLmZhLWluZGVudDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDNDXFxcIjtcXHJcXG59XFxyXFxuLmZhLXZpZGVvLWNhbWVyYTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDNEXFxcIjtcXHJcXG59XFxyXFxuLmZhLXBob3RvOmJlZm9yZSxcXHJcXG4uZmEtaW1hZ2U6YmVmb3JlLFxcclxcbi5mYS1waWN0dXJlLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzRVxcXCI7XFxyXFxufVxcclxcbi5mYS1wZW5jaWw6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0MFxcXCI7XFxyXFxufVxcclxcbi5mYS1tYXAtbWFya2VyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNDFcXFwiO1xcclxcbn1cXHJcXG4uZmEtYWRqdXN0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNDJcXFwiO1xcclxcbn1cXHJcXG4uZmEtdGludDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDQzXFxcIjtcXHJcXG59XFxyXFxuLmZhLWVkaXQ6YmVmb3JlLFxcclxcbi5mYS1wZW5jaWwtc3F1YXJlLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0NFxcXCI7XFxyXFxufVxcclxcbi5mYS1zaGFyZS1zcXVhcmUtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDQ1XFxcIjtcXHJcXG59XFxyXFxuLmZhLWNoZWNrLXNxdWFyZS1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNDZcXFwiO1xcclxcbn1cXHJcXG4uZmEtYXJyb3dzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNDdcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3RlcC1iYWNrd2FyZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDQ4XFxcIjtcXHJcXG59XFxyXFxuLmZhLWZhc3QtYmFja3dhcmQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0OVxcXCI7XFxyXFxufVxcclxcbi5mYS1iYWNrd2FyZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDRBXFxcIjtcXHJcXG59XFxyXFxuLmZhLXBsYXk6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0QlxcXCI7XFxyXFxufVxcclxcbi5mYS1wYXVzZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDRDXFxcIjtcXHJcXG59XFxyXFxuLmZhLXN0b3A6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0RFxcXCI7XFxyXFxufVxcclxcbi5mYS1mb3J3YXJkOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNEVcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmFzdC1mb3J3YXJkOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNTBcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3RlcC1mb3J3YXJkOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNTFcXFwiO1xcclxcbn1cXHJcXG4uZmEtZWplY3Q6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA1MlxcXCI7XFxyXFxufVxcclxcbi5mYS1jaGV2cm9uLWxlZnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA1M1xcXCI7XFxyXFxufVxcclxcbi5mYS1jaGV2cm9uLXJpZ2h0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNTRcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGx1cy1jaXJjbGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA1NVxcXCI7XFxyXFxufVxcclxcbi5mYS1taW51cy1jaXJjbGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA1NlxcXCI7XFxyXFxufVxcclxcbi5mYS10aW1lcy1jaXJjbGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA1N1xcXCI7XFxyXFxufVxcclxcbi5mYS1jaGVjay1jaXJjbGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA1OFxcXCI7XFxyXFxufVxcclxcbi5mYS1xdWVzdGlvbi1jaXJjbGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA1OVxcXCI7XFxyXFxufVxcclxcbi5mYS1pbmZvLWNpcmNsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDVBXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNyb3NzaGFpcnM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA1QlxcXCI7XFxyXFxufVxcclxcbi5mYS10aW1lcy1jaXJjbGUtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDVDXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNoZWNrLWNpcmNsZS1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNURcXFwiO1xcclxcbn1cXHJcXG4uZmEtYmFuOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNUVcXFwiO1xcclxcbn1cXHJcXG4uZmEtYXJyb3ctbGVmdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDYwXFxcIjtcXHJcXG59XFxyXFxuLmZhLWFycm93LXJpZ2h0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNjFcXFwiO1xcclxcbn1cXHJcXG4uZmEtYXJyb3ctdXA6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2MlxcXCI7XFxyXFxufVxcclxcbi5mYS1hcnJvdy1kb3duOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNjNcXFwiO1xcclxcbn1cXHJcXG4uZmEtbWFpbC1mb3J3YXJkOmJlZm9yZSxcXHJcXG4uZmEtc2hhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2NFxcXCI7XFxyXFxufVxcclxcbi5mYS1leHBhbmQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2NVxcXCI7XFxyXFxufVxcclxcbi5mYS1jb21wcmVzczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDY2XFxcIjtcXHJcXG59XFxyXFxuLmZhLXBsdXM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2N1xcXCI7XFxyXFxufVxcclxcbi5mYS1taW51czpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDY4XFxcIjtcXHJcXG59XFxyXFxuLmZhLWFzdGVyaXNrOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNjlcXFwiO1xcclxcbn1cXHJcXG4uZmEtZXhjbGFtYXRpb24tY2lyY2xlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNkFcXFwiO1xcclxcbn1cXHJcXG4uZmEtZ2lmdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDZCXFxcIjtcXHJcXG59XFxyXFxuLmZhLWxlYWY6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2Q1xcXCI7XFxyXFxufVxcclxcbi5mYS1maXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNkRcXFwiO1xcclxcbn1cXHJcXG4uZmEtZXllOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNkVcXFwiO1xcclxcbn1cXHJcXG4uZmEtZXllLXNsYXNoOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNzBcXFwiO1xcclxcbn1cXHJcXG4uZmEtd2FybmluZzpiZWZvcmUsXFxyXFxuLmZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNzFcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGxhbmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3MlxcXCI7XFxyXFxufVxcclxcbi5mYS1jYWxlbmRhcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDczXFxcIjtcXHJcXG59XFxyXFxuLmZhLXJhbmRvbTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDc0XFxcIjtcXHJcXG59XFxyXFxuLmZhLWNvbW1lbnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3NVxcXCI7XFxyXFxufVxcclxcbi5mYS1tYWduZXQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3NlxcXCI7XFxyXFxufVxcclxcbi5mYS1jaGV2cm9uLXVwOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNzdcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2hldnJvbi1kb3duOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwNzhcXFwiO1xcclxcbn1cXHJcXG4uZmEtcmV0d2VldDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDc5XFxcIjtcXHJcXG59XFxyXFxuLmZhLXNob3BwaW5nLWNhcnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3QVxcXCI7XFxyXFxufVxcclxcbi5mYS1mb2xkZXI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3QlxcXCI7XFxyXFxufVxcclxcbi5mYS1mb2xkZXItb3BlbjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDdDXFxcIjtcXHJcXG59XFxyXFxuLmZhLWFycm93cy12OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwN0RcXFwiO1xcclxcbn1cXHJcXG4uZmEtYXJyb3dzLWg6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3RVxcXCI7XFxyXFxufVxcclxcbi5mYS1iYXItY2hhcnQtbzpiZWZvcmUsXFxyXFxuLmZhLWJhci1jaGFydDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDgwXFxcIjtcXHJcXG59XFxyXFxuLmZhLXR3aXR0ZXItc3F1YXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwODFcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmFjZWJvb2stc3F1YXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwODJcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2FtZXJhLXJldHJvOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwODNcXFwiO1xcclxcbn1cXHJcXG4uZmEta2V5OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwODRcXFwiO1xcclxcbn1cXHJcXG4uZmEtZ2VhcnM6YmVmb3JlLFxcclxcbi5mYS1jb2dzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwODVcXFwiO1xcclxcbn1cXHJcXG4uZmEtY29tbWVudHM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA4NlxcXCI7XFxyXFxufVxcclxcbi5mYS10aHVtYnMtby11cDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDg3XFxcIjtcXHJcXG59XFxyXFxuLmZhLXRodW1icy1vLWRvd246YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA4OFxcXCI7XFxyXFxufVxcclxcbi5mYS1zdGFyLWhhbGY6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA4OVxcXCI7XFxyXFxufVxcclxcbi5mYS1oZWFydC1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwOEFcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2lnbi1vdXQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA4QlxcXCI7XFxyXFxufVxcclxcbi5mYS1saW5rZWRpbi1zcXVhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA4Q1xcXCI7XFxyXFxufVxcclxcbi5mYS10aHVtYi10YWNrOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwOERcXFwiO1xcclxcbn1cXHJcXG4uZmEtZXh0ZXJuYWwtbGluazpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDhFXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNpZ24taW46YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA5MFxcXCI7XFxyXFxufVxcclxcbi5mYS10cm9waHk6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA5MVxcXCI7XFxyXFxufVxcclxcbi5mYS1naXRodWItc3F1YXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwOTJcXFwiO1xcclxcbn1cXHJcXG4uZmEtdXBsb2FkOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwOTNcXFwiO1xcclxcbn1cXHJcXG4uZmEtbGVtb24tbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDk0XFxcIjtcXHJcXG59XFxyXFxuLmZhLXBob25lOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwOTVcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3F1YXJlLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA5NlxcXCI7XFxyXFxufVxcclxcbi5mYS1ib29rbWFyay1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwOTdcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGhvbmUtc3F1YXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwOThcXFwiO1xcclxcbn1cXHJcXG4uZmEtdHdpdHRlcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDk5XFxcIjtcXHJcXG59XFxyXFxuLmZhLWZhY2Vib29rLWY6YmVmb3JlLFxcclxcbi5mYS1mYWNlYm9vazpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDlBXFxcIjtcXHJcXG59XFxyXFxuLmZhLWdpdGh1YjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDlCXFxcIjtcXHJcXG59XFxyXFxuLmZhLXVubG9jazpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDlDXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNyZWRpdC1jYXJkOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwOURcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmVlZDpiZWZvcmUsXFxyXFxuLmZhLXJzczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMDlFXFxcIjtcXHJcXG59XFxyXFxuLmZhLWhkZC1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQTBcXFwiO1xcclxcbn1cXHJcXG4uZmEtYnVsbGhvcm46YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBMVxcXCI7XFxyXFxufVxcclxcbi5mYS1iZWxsOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRjNcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2VydGlmaWNhdGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBM1xcXCI7XFxyXFxufVxcclxcbi5mYS1oYW5kLW8tcmlnaHQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBNFxcXCI7XFxyXFxufVxcclxcbi5mYS1oYW5kLW8tbGVmdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEE1XFxcIjtcXHJcXG59XFxyXFxuLmZhLWhhbmQtby11cDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEE2XFxcIjtcXHJcXG59XFxyXFxuLmZhLWhhbmQtby1kb3duOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQTdcXFwiO1xcclxcbn1cXHJcXG4uZmEtYXJyb3ctY2lyY2xlLWxlZnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBOFxcXCI7XFxyXFxufVxcclxcbi5mYS1hcnJvdy1jaXJjbGUtcmlnaHQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBOVxcXCI7XFxyXFxufVxcclxcbi5mYS1hcnJvdy1jaXJjbGUtdXA6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBQVxcXCI7XFxyXFxufVxcclxcbi5mYS1hcnJvdy1jaXJjbGUtZG93bjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEFCXFxcIjtcXHJcXG59XFxyXFxuLmZhLWdsb2JlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQUNcXFwiO1xcclxcbn1cXHJcXG4uZmEtd3JlbmNoOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQURcXFwiO1xcclxcbn1cXHJcXG4uZmEtdGFza3M6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBRVxcXCI7XFxyXFxufVxcclxcbi5mYS1maWx0ZXI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBCMFxcXCI7XFxyXFxufVxcclxcbi5mYS1icmllZmNhc2U6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBCMVxcXCI7XFxyXFxufVxcclxcbi5mYS1hcnJvd3MtYWx0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQjJcXFwiO1xcclxcbn1cXHJcXG4uZmEtZ3JvdXA6YmVmb3JlLFxcclxcbi5mYS11c2VyczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEMwXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNoYWluOmJlZm9yZSxcXHJcXG4uZmEtbGluazpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEMxXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNsb3VkOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzJcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmxhc2s6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDM1xcXCI7XFxyXFxufVxcclxcbi5mYS1jdXQ6YmVmb3JlLFxcclxcbi5mYS1zY2lzc29yczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEM0XFxcIjtcXHJcXG59XFxyXFxuLmZhLWNvcHk6YmVmb3JlLFxcclxcbi5mYS1maWxlcy1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzVcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGFwZXJjbGlwOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzZcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2F2ZTpiZWZvcmUsXFxyXFxuLmZhLWZsb3BweS1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzdcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3F1YXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzhcXFwiO1xcclxcbn1cXHJcXG4uZmEtbmF2aWNvbjpiZWZvcmUsXFxyXFxuLmZhLXJlb3JkZXI6YmVmb3JlLFxcclxcbi5mYS1iYXJzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzlcXFwiO1xcclxcbn1cXHJcXG4uZmEtbGlzdC11bDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMENBXFxcIjtcXHJcXG59XFxyXFxuLmZhLWxpc3Qtb2w6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDQlxcXCI7XFxyXFxufVxcclxcbi5mYS1zdHJpa2V0aHJvdWdoOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQ0NcXFwiO1xcclxcbn1cXHJcXG4uZmEtdW5kZXJsaW5lOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwQ0RcXFwiO1xcclxcbn1cXHJcXG4uZmEtdGFibGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDRVxcXCI7XFxyXFxufVxcclxcbi5mYS1tYWdpYzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEQwXFxcIjtcXHJcXG59XFxyXFxuLmZhLXRydWNrOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRDFcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGludGVyZXN0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRDJcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGludGVyZXN0LXNxdWFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEQzXFxcIjtcXHJcXG59XFxyXFxuLmZhLWdvb2dsZS1wbHVzLXNxdWFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEQ0XFxcIjtcXHJcXG59XFxyXFxuLmZhLWdvb2dsZS1wbHVzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRDVcXFwiO1xcclxcbn1cXHJcXG4uZmEtbW9uZXk6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBENlxcXCI7XFxyXFxufVxcclxcbi5mYS1jYXJldC1kb3duOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRDdcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2FyZXQtdXA6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBEOFxcXCI7XFxyXFxufVxcclxcbi5mYS1jYXJldC1sZWZ0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRDlcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2FyZXQtcmlnaHQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBEQVxcXCI7XFxyXFxufVxcclxcbi5mYS1jb2x1bW5zOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwREJcXFwiO1xcclxcbn1cXHJcXG4uZmEtdW5zb3J0ZWQ6YmVmb3JlLFxcclxcbi5mYS1zb3J0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRENcXFwiO1xcclxcbn1cXHJcXG4uZmEtc29ydC1kb3duOmJlZm9yZSxcXHJcXG4uZmEtc29ydC1kZXNjOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRERcXFwiO1xcclxcbn1cXHJcXG4uZmEtc29ydC11cDpiZWZvcmUsXFxyXFxuLmZhLXNvcnQtYXNjOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwREVcXFwiO1xcclxcbn1cXHJcXG4uZmEtZW52ZWxvcGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFMFxcXCI7XFxyXFxufVxcclxcbi5mYS1saW5rZWRpbjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEUxXFxcIjtcXHJcXG59XFxyXFxuLmZhLXJvdGF0ZS1sZWZ0OmJlZm9yZSxcXHJcXG4uZmEtdW5kbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEUyXFxcIjtcXHJcXG59XFxyXFxuLmZhLWxlZ2FsOmJlZm9yZSxcXHJcXG4uZmEtZ2F2ZWw6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFM1xcXCI7XFxyXFxufVxcclxcbi5mYS1kYXNoYm9hcmQ6YmVmb3JlLFxcclxcbi5mYS10YWNob21ldGVyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRTRcXFwiO1xcclxcbn1cXHJcXG4uZmEtY29tbWVudC1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRTVcXFwiO1xcclxcbn1cXHJcXG4uZmEtY29tbWVudHMtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEU2XFxcIjtcXHJcXG59XFxyXFxuLmZhLWZsYXNoOmJlZm9yZSxcXHJcXG4uZmEtYm9sdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEU3XFxcIjtcXHJcXG59XFxyXFxuLmZhLXNpdGVtYXA6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFOFxcXCI7XFxyXFxufVxcclxcbi5mYS11bWJyZWxsYTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEU5XFxcIjtcXHJcXG59XFxyXFxuLmZhLXBhc3RlOmJlZm9yZSxcXHJcXG4uZmEtY2xpcGJvYXJkOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRUFcXFwiO1xcclxcbn1cXHJcXG4uZmEtbGlnaHRidWxiLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFQlxcXCI7XFxyXFxufVxcclxcbi5mYS1leGNoYW5nZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEVDXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNsb3VkLWRvd25sb2FkOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRURcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2xvdWQtdXBsb2FkOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRUVcXFwiO1xcclxcbn1cXHJcXG4uZmEtdXNlci1tZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEYwXFxcIjtcXHJcXG59XFxyXFxuLmZhLXN0ZXRob3Njb3BlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRjFcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3VpdGNhc2U6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGMlxcXCI7XFxyXFxufVxcclxcbi5mYS1iZWxsLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBMlxcXCI7XFxyXFxufVxcclxcbi5mYS1jb2ZmZWU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGNFxcXCI7XFxyXFxufVxcclxcbi5mYS1jdXRsZXJ5OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRjVcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmlsZS10ZXh0LW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGNlxcXCI7XFxyXFxufVxcclxcbi5mYS1idWlsZGluZy1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRjdcXFwiO1xcclxcbn1cXHJcXG4uZmEtaG9zcGl0YWwtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEY4XFxcIjtcXHJcXG59XFxyXFxuLmZhLWFtYnVsYW5jZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEY5XFxcIjtcXHJcXG59XFxyXFxuLmZhLW1lZGtpdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEZBXFxcIjtcXHJcXG59XFxyXFxuLmZhLWZpZ2h0ZXItamV0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRkJcXFwiO1xcclxcbn1cXHJcXG4uZmEtYmVlcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMEZDXFxcIjtcXHJcXG59XFxyXFxuLmZhLWgtc3F1YXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYwRkRcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGx1cy1zcXVhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGRVxcXCI7XFxyXFxufVxcclxcbi5mYS1hbmdsZS1kb3VibGUtbGVmdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTAwXFxcIjtcXHJcXG59XFxyXFxuLmZhLWFuZ2xlLWRvdWJsZS1yaWdodDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTAxXFxcIjtcXHJcXG59XFxyXFxuLmZhLWFuZ2xlLWRvdWJsZS11cDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTAyXFxcIjtcXHJcXG59XFxyXFxuLmZhLWFuZ2xlLWRvdWJsZS1kb3duOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMDNcXFwiO1xcclxcbn1cXHJcXG4uZmEtYW5nbGUtbGVmdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTA0XFxcIjtcXHJcXG59XFxyXFxuLmZhLWFuZ2xlLXJpZ2h0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMDVcXFwiO1xcclxcbn1cXHJcXG4uZmEtYW5nbGUtdXA6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwNlxcXCI7XFxyXFxufVxcclxcbi5mYS1hbmdsZS1kb3duOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMDdcXFwiO1xcclxcbn1cXHJcXG4uZmEtZGVza3RvcDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTA4XFxcIjtcXHJcXG59XFxyXFxuLmZhLWxhcHRvcDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTA5XFxcIjtcXHJcXG59XFxyXFxuLmZhLXRhYmxldDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTBBXFxcIjtcXHJcXG59XFxyXFxuLmZhLW1vYmlsZS1waG9uZTpiZWZvcmUsXFxyXFxuLmZhLW1vYmlsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTBCXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNpcmNsZS1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMENcXFwiO1xcclxcbn1cXHJcXG4uZmEtcXVvdGUtbGVmdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTBEXFxcIjtcXHJcXG59XFxyXFxuLmZhLXF1b3RlLXJpZ2h0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMEVcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3Bpbm5lcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTEwXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNpcmNsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTExXFxcIjtcXHJcXG59XFxyXFxuLmZhLW1haWwtcmVwbHk6YmVmb3JlLFxcclxcbi5mYS1yZXBseTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTEyXFxcIjtcXHJcXG59XFxyXFxuLmZhLWdpdGh1Yi1hbHQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExM1xcXCI7XFxyXFxufVxcclxcbi5mYS1mb2xkZXItbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTE0XFxcIjtcXHJcXG59XFxyXFxuLmZhLWZvbGRlci1vcGVuLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExNVxcXCI7XFxyXFxufVxcclxcbi5mYS1zbWlsZS1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMThcXFwiO1xcclxcbn1cXHJcXG4uZmEtZnJvd24tbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTE5XFxcIjtcXHJcXG59XFxyXFxuLmZhLW1laC1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMUFcXFwiO1xcclxcbn1cXHJcXG4uZmEtZ2FtZXBhZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTFCXFxcIjtcXHJcXG59XFxyXFxuLmZhLWtleWJvYXJkLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExQ1xcXCI7XFxyXFxufVxcclxcbi5mYS1mbGFnLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExRFxcXCI7XFxyXFxufVxcclxcbi5mYS1mbGFnLWNoZWNrZXJlZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTFFXFxcIjtcXHJcXG59XFxyXFxuLmZhLXRlcm1pbmFsOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjBcXFwiO1xcclxcbn1cXHJcXG4uZmEtY29kZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTIxXFxcIjtcXHJcXG59XFxyXFxuLmZhLW1haWwtcmVwbHktYWxsOmJlZm9yZSxcXHJcXG4uZmEtcmVwbHktYWxsOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjJcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3Rhci1oYWxmLWVtcHR5OmJlZm9yZSxcXHJcXG4uZmEtc3Rhci1oYWxmLWZ1bGw6YmVmb3JlLFxcclxcbi5mYS1zdGFyLWhhbGYtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTIzXFxcIjtcXHJcXG59XFxyXFxuLmZhLWxvY2F0aW9uLWFycm93OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjRcXFwiO1xcclxcbn1cXHJcXG4uZmEtY3JvcDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTI1XFxcIjtcXHJcXG59XFxyXFxuLmZhLWNvZGUtZm9yazpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTI2XFxcIjtcXHJcXG59XFxyXFxuLmZhLXVubGluazpiZWZvcmUsXFxyXFxuLmZhLWNoYWluLWJyb2tlbjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTI3XFxcIjtcXHJcXG59XFxyXFxuLmZhLXF1ZXN0aW9uOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjhcXFwiO1xcclxcbn1cXHJcXG4uZmEtaW5mbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTI5XFxcIjtcXHJcXG59XFxyXFxuLmZhLWV4Y2xhbWF0aW9uOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMkFcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3VwZXJzY3JpcHQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyQlxcXCI7XFxyXFxufVxcclxcbi5mYS1zdWJzY3JpcHQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyQ1xcXCI7XFxyXFxufVxcclxcbi5mYS1lcmFzZXI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyRFxcXCI7XFxyXFxufVxcclxcbi5mYS1wdXp6bGUtcGllY2U6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyRVxcXCI7XFxyXFxufVxcclxcbi5mYS1taWNyb3Bob25lOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMzBcXFwiO1xcclxcbn1cXHJcXG4uZmEtbWljcm9waG9uZS1zbGFzaDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTMxXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNoaWVsZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTMyXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNhbGVuZGFyLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEzM1xcXCI7XFxyXFxufVxcclxcbi5mYS1maXJlLWV4dGluZ3Vpc2hlcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTM0XFxcIjtcXHJcXG59XFxyXFxuLmZhLXJvY2tldDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTM1XFxcIjtcXHJcXG59XFxyXFxuLmZhLW1heGNkbjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTM2XFxcIjtcXHJcXG59XFxyXFxuLmZhLWNoZXZyb24tY2lyY2xlLWxlZnQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEzN1xcXCI7XFxyXFxufVxcclxcbi5mYS1jaGV2cm9uLWNpcmNsZS1yaWdodDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTM4XFxcIjtcXHJcXG59XFxyXFxuLmZhLWNoZXZyb24tY2lyY2xlLXVwOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxMzlcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2hldnJvbi1jaXJjbGUtZG93bjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTNBXFxcIjtcXHJcXG59XFxyXFxuLmZhLWh0bWw1OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxM0JcXFwiO1xcclxcbn1cXHJcXG4uZmEtY3NzMzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTNDXFxcIjtcXHJcXG59XFxyXFxuLmZhLWFuY2hvcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTNEXFxcIjtcXHJcXG59XFxyXFxuLmZhLXVubG9jay1hbHQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEzRVxcXCI7XFxyXFxufVxcclxcbi5mYS1idWxsc2V5ZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTQwXFxcIjtcXHJcXG59XFxyXFxuLmZhLWVsbGlwc2lzLWg6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE0MVxcXCI7XFxyXFxufVxcclxcbi5mYS1lbGxpcHNpcy12OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNDJcXFwiO1xcclxcbn1cXHJcXG4uZmEtcnNzLXNxdWFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTQzXFxcIjtcXHJcXG59XFxyXFxuLmZhLXBsYXktY2lyY2xlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNDRcXFwiO1xcclxcbn1cXHJcXG4uZmEtdGlja2V0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNDVcXFwiO1xcclxcbn1cXHJcXG4uZmEtbWludXMtc3F1YXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNDZcXFwiO1xcclxcbn1cXHJcXG4uZmEtbWludXMtc3F1YXJlLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE0N1xcXCI7XFxyXFxufVxcclxcbi5mYS1sZXZlbC11cDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTQ4XFxcIjtcXHJcXG59XFxyXFxuLmZhLWxldmVsLWRvd246YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE0OVxcXCI7XFxyXFxufVxcclxcbi5mYS1jaGVjay1zcXVhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE0QVxcXCI7XFxyXFxufVxcclxcbi5mYS1wZW5jaWwtc3F1YXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNEJcXFwiO1xcclxcbn1cXHJcXG4uZmEtZXh0ZXJuYWwtbGluay1zcXVhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE0Q1xcXCI7XFxyXFxufVxcclxcbi5mYS1zaGFyZS1zcXVhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE0RFxcXCI7XFxyXFxufVxcclxcbi5mYS1jb21wYXNzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNEVcXFwiO1xcclxcbn1cXHJcXG4uZmEtdG9nZ2xlLWRvd246YmVmb3JlLFxcclxcbi5mYS1jYXJldC1zcXVhcmUtby1kb3duOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNTBcXFwiO1xcclxcbn1cXHJcXG4uZmEtdG9nZ2xlLXVwOmJlZm9yZSxcXHJcXG4uZmEtY2FyZXQtc3F1YXJlLW8tdXA6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE1MVxcXCI7XFxyXFxufVxcclxcbi5mYS10b2dnbGUtcmlnaHQ6YmVmb3JlLFxcclxcbi5mYS1jYXJldC1zcXVhcmUtby1yaWdodDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTUyXFxcIjtcXHJcXG59XFxyXFxuLmZhLWV1cm86YmVmb3JlLFxcclxcbi5mYS1ldXI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE1M1xcXCI7XFxyXFxufVxcclxcbi5mYS1nYnA6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE1NFxcXCI7XFxyXFxufVxcclxcbi5mYS1kb2xsYXI6YmVmb3JlLFxcclxcbi5mYS11c2Q6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE1NVxcXCI7XFxyXFxufVxcclxcbi5mYS1ydXBlZTpiZWZvcmUsXFxyXFxuLmZhLWlucjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTU2XFxcIjtcXHJcXG59XFxyXFxuLmZhLWNueTpiZWZvcmUsXFxyXFxuLmZhLXJtYjpiZWZvcmUsXFxyXFxuLmZhLXllbjpiZWZvcmUsXFxyXFxuLmZhLWpweTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTU3XFxcIjtcXHJcXG59XFxyXFxuLmZhLXJ1YmxlOmJlZm9yZSxcXHJcXG4uZmEtcm91YmxlOmJlZm9yZSxcXHJcXG4uZmEtcnViOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNThcXFwiO1xcclxcbn1cXHJcXG4uZmEtd29uOmJlZm9yZSxcXHJcXG4uZmEta3J3OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNTlcXFwiO1xcclxcbn1cXHJcXG4uZmEtYml0Y29pbjpiZWZvcmUsXFxyXFxuLmZhLWJ0YzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTVBXFxcIjtcXHJcXG59XFxyXFxuLmZhLWZpbGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE1QlxcXCI7XFxyXFxufVxcclxcbi5mYS1maWxlLXRleHQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE1Q1xcXCI7XFxyXFxufVxcclxcbi5mYS1zb3J0LWFscGhhLWFzYzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTVEXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNvcnQtYWxwaGEtZGVzYzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTVFXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNvcnQtYW1vdW50LWFzYzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTYwXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNvcnQtYW1vdW50LWRlc2M6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE2MVxcXCI7XFxyXFxufVxcclxcbi5mYS1zb3J0LW51bWVyaWMtYXNjOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNjJcXFwiO1xcclxcbn1cXHJcXG4uZmEtc29ydC1udW1lcmljLWRlc2M6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE2M1xcXCI7XFxyXFxufVxcclxcbi5mYS10aHVtYnMtdXA6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE2NFxcXCI7XFxyXFxufVxcclxcbi5mYS10aHVtYnMtZG93bjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTY1XFxcIjtcXHJcXG59XFxyXFxuLmZhLXlvdXR1YmUtc3F1YXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNjZcXFwiO1xcclxcbn1cXHJcXG4uZmEteW91dHViZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTY3XFxcIjtcXHJcXG59XFxyXFxuLmZhLXhpbmc6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE2OFxcXCI7XFxyXFxufVxcclxcbi5mYS14aW5nLXNxdWFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTY5XFxcIjtcXHJcXG59XFxyXFxuLmZhLXlvdXR1YmUtcGxheTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTZBXFxcIjtcXHJcXG59XFxyXFxuLmZhLWRyb3Bib3g6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE2QlxcXCI7XFxyXFxufVxcclxcbi5mYS1zdGFjay1vdmVyZmxvdzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTZDXFxcIjtcXHJcXG59XFxyXFxuLmZhLWluc3RhZ3JhbTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTZEXFxcIjtcXHJcXG59XFxyXFxuLmZhLWZsaWNrcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTZFXFxcIjtcXHJcXG59XFxyXFxuLmZhLWFkbjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTcwXFxcIjtcXHJcXG59XFxyXFxuLmZhLWJpdGJ1Y2tldDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTcxXFxcIjtcXHJcXG59XFxyXFxuLmZhLWJpdGJ1Y2tldC1zcXVhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE3MlxcXCI7XFxyXFxufVxcclxcbi5mYS10dW1ibHI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE3M1xcXCI7XFxyXFxufVxcclxcbi5mYS10dW1ibHItc3F1YXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNzRcXFwiO1xcclxcbn1cXHJcXG4uZmEtbG9uZy1hcnJvdy1kb3duOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxNzVcXFwiO1xcclxcbn1cXHJcXG4uZmEtbG9uZy1hcnJvdy11cDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTc2XFxcIjtcXHJcXG59XFxyXFxuLmZhLWxvbmctYXJyb3ctbGVmdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTc3XFxcIjtcXHJcXG59XFxyXFxuLmZhLWxvbmctYXJyb3ctcmlnaHQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE3OFxcXCI7XFxyXFxufVxcclxcbi5mYS1hcHBsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTc5XFxcIjtcXHJcXG59XFxyXFxuLmZhLXdpbmRvd3M6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE3QVxcXCI7XFxyXFxufVxcclxcbi5mYS1hbmRyb2lkOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxN0JcXFwiO1xcclxcbn1cXHJcXG4uZmEtbGludXg6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE3Q1xcXCI7XFxyXFxufVxcclxcbi5mYS1kcmliYmJsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTdEXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNreXBlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxN0VcXFwiO1xcclxcbn1cXHJcXG4uZmEtZm91cnNxdWFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTgwXFxcIjtcXHJcXG59XFxyXFxuLmZhLXRyZWxsbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTgxXFxcIjtcXHJcXG59XFxyXFxuLmZhLWZlbWFsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTgyXFxcIjtcXHJcXG59XFxyXFxuLmZhLW1hbGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE4M1xcXCI7XFxyXFxufVxcclxcbi5mYS1naXR0aXA6YmVmb3JlLFxcclxcbi5mYS1ncmF0aXBheTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTg0XFxcIjtcXHJcXG59XFxyXFxuLmZhLXN1bi1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxODVcXFwiO1xcclxcbn1cXHJcXG4uZmEtbW9vbi1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxODZcXFwiO1xcclxcbn1cXHJcXG4uZmEtYXJjaGl2ZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTg3XFxcIjtcXHJcXG59XFxyXFxuLmZhLWJ1ZzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTg4XFxcIjtcXHJcXG59XFxyXFxuLmZhLXZrOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxODlcXFwiO1xcclxcbn1cXHJcXG4uZmEtd2VpYm86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE4QVxcXCI7XFxyXFxufVxcclxcbi5mYS1yZW5yZW46YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE4QlxcXCI7XFxyXFxufVxcclxcbi5mYS1wYWdlbGluZXM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE4Q1xcXCI7XFxyXFxufVxcclxcbi5mYS1zdGFjay1leGNoYW5nZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMThEXFxcIjtcXHJcXG59XFxyXFxuLmZhLWFycm93LWNpcmNsZS1vLXJpZ2h0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxOEVcXFwiO1xcclxcbn1cXHJcXG4uZmEtYXJyb3ctY2lyY2xlLW8tbGVmdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTkwXFxcIjtcXHJcXG59XFxyXFxuLmZhLXRvZ2dsZS1sZWZ0OmJlZm9yZSxcXHJcXG4uZmEtY2FyZXQtc3F1YXJlLW8tbGVmdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTkxXFxcIjtcXHJcXG59XFxyXFxuLmZhLWRvdC1jaXJjbGUtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTkyXFxcIjtcXHJcXG59XFxyXFxuLmZhLXdoZWVsY2hhaXI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE5M1xcXCI7XFxyXFxufVxcclxcbi5mYS12aW1lby1zcXVhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE5NFxcXCI7XFxyXFxufVxcclxcbi5mYS10dXJraXNoLWxpcmE6YmVmb3JlLFxcclxcbi5mYS10cnk6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE5NVxcXCI7XFxyXFxufVxcclxcbi5mYS1wbHVzLXNxdWFyZS1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxOTZcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3BhY2Utc2h1dHRsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTk3XFxcIjtcXHJcXG59XFxyXFxuLmZhLXNsYWNrOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxOThcXFwiO1xcclxcbn1cXHJcXG4uZmEtZW52ZWxvcGUtc3F1YXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxOTlcXFwiO1xcclxcbn1cXHJcXG4uZmEtd29yZHByZXNzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxOUFcXFwiO1xcclxcbn1cXHJcXG4uZmEtb3BlbmlkOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxOUJcXFwiO1xcclxcbn1cXHJcXG4uZmEtaW5zdGl0dXRpb246YmVmb3JlLFxcclxcbi5mYS1iYW5rOmJlZm9yZSxcXHJcXG4uZmEtdW5pdmVyc2l0eTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMTlDXFxcIjtcXHJcXG59XFxyXFxuLmZhLW1vcnRhci1ib2FyZDpiZWZvcmUsXFxyXFxuLmZhLWdyYWR1YXRpb24tY2FwOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxOURcXFwiO1xcclxcbn1cXHJcXG4uZmEteWFob286YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE5RVxcXCI7XFxyXFxufVxcclxcbi5mYS1nb29nbGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFBMFxcXCI7XFxyXFxufVxcclxcbi5mYS1yZWRkaXQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFBMVxcXCI7XFxyXFxufVxcclxcbi5mYS1yZWRkaXQtc3F1YXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQTJcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3R1bWJsZXVwb24tY2lyY2xlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQTNcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3R1bWJsZXVwb246YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFBNFxcXCI7XFxyXFxufVxcclxcbi5mYS1kZWxpY2lvdXM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFBNVxcXCI7XFxyXFxufVxcclxcbi5mYS1kaWdnOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQTZcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGllZC1waXBlci1wcDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUE3XFxcIjtcXHJcXG59XFxyXFxuLmZhLXBpZWQtcGlwZXItYWx0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQThcXFwiO1xcclxcbn1cXHJcXG4uZmEtZHJ1cGFsOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQTlcXFwiO1xcclxcbn1cXHJcXG4uZmEtam9vbWxhOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQUFcXFwiO1xcclxcbn1cXHJcXG4uZmEtbGFuZ3VhZ2U6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFBQlxcXCI7XFxyXFxufVxcclxcbi5mYS1mYXg6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFBQ1xcXCI7XFxyXFxufVxcclxcbi5mYS1idWlsZGluZzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUFEXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNoaWxkOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQUVcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGF3OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQjBcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3Bvb246YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFCMVxcXCI7XFxyXFxufVxcclxcbi5mYS1jdWJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQjJcXFwiO1xcclxcbn1cXHJcXG4uZmEtY3ViZXM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFCM1xcXCI7XFxyXFxufVxcclxcbi5mYS1iZWhhbmNlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQjRcXFwiO1xcclxcbn1cXHJcXG4uZmEtYmVoYW5jZS1zcXVhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFCNVxcXCI7XFxyXFxufVxcclxcbi5mYS1zdGVhbTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUI2XFxcIjtcXHJcXG59XFxyXFxuLmZhLXN0ZWFtLXNxdWFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUI3XFxcIjtcXHJcXG59XFxyXFxuLmZhLXJlY3ljbGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFCOFxcXCI7XFxyXFxufVxcclxcbi5mYS1hdXRvbW9iaWxlOmJlZm9yZSxcXHJcXG4uZmEtY2FyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQjlcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2FiOmJlZm9yZSxcXHJcXG4uZmEtdGF4aTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUJBXFxcIjtcXHJcXG59XFxyXFxuLmZhLXRyZWU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFCQlxcXCI7XFxyXFxufVxcclxcbi5mYS1zcG90aWZ5OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQkNcXFwiO1xcclxcbn1cXHJcXG4uZmEtZGV2aWFudGFydDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUJEXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNvdW5kY2xvdWQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFCRVxcXCI7XFxyXFxufVxcclxcbi5mYS1kYXRhYmFzZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUMwXFxcIjtcXHJcXG59XFxyXFxuLmZhLWZpbGUtcGRmLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFDMVxcXCI7XFxyXFxufVxcclxcbi5mYS1maWxlLXdvcmQtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUMyXFxcIjtcXHJcXG59XFxyXFxuLmZhLWZpbGUtZXhjZWwtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUMzXFxcIjtcXHJcXG59XFxyXFxuLmZhLWZpbGUtcG93ZXJwb2ludC1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQzRcXFwiO1xcclxcbn1cXHJcXG4uZmEtZmlsZS1waG90by1vOmJlZm9yZSxcXHJcXG4uZmEtZmlsZS1waWN0dXJlLW86YmVmb3JlLFxcclxcbi5mYS1maWxlLWltYWdlLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFDNVxcXCI7XFxyXFxufVxcclxcbi5mYS1maWxlLXppcC1vOmJlZm9yZSxcXHJcXG4uZmEtZmlsZS1hcmNoaXZlLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFDNlxcXCI7XFxyXFxufVxcclxcbi5mYS1maWxlLXNvdW5kLW86YmVmb3JlLFxcclxcbi5mYS1maWxlLWF1ZGlvLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFDN1xcXCI7XFxyXFxufVxcclxcbi5mYS1maWxlLW1vdmllLW86YmVmb3JlLFxcclxcbi5mYS1maWxlLXZpZGVvLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFDOFxcXCI7XFxyXFxufVxcclxcbi5mYS1maWxlLWNvZGUtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUM5XFxcIjtcXHJcXG59XFxyXFxuLmZhLXZpbmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFDQVxcXCI7XFxyXFxufVxcclxcbi5mYS1jb2RlcGVuOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQ0JcXFwiO1xcclxcbn1cXHJcXG4uZmEtanNmaWRkbGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFDQ1xcXCI7XFxyXFxufVxcclxcbi5mYS1saWZlLWJvdXk6YmVmb3JlLFxcclxcbi5mYS1saWZlLWJ1b3k6YmVmb3JlLFxcclxcbi5mYS1saWZlLXNhdmVyOmJlZm9yZSxcXHJcXG4uZmEtc3VwcG9ydDpiZWZvcmUsXFxyXFxuLmZhLWxpZmUtcmluZzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUNEXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNpcmNsZS1vLW5vdGNoOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxQ0VcXFwiO1xcclxcbn1cXHJcXG4uZmEtcmE6YmVmb3JlLFxcclxcbi5mYS1yZXNpc3RhbmNlOmJlZm9yZSxcXHJcXG4uZmEtcmViZWw6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFEMFxcXCI7XFxyXFxufVxcclxcbi5mYS1nZTpiZWZvcmUsXFxyXFxuLmZhLWVtcGlyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUQxXFxcIjtcXHJcXG59XFxyXFxuLmZhLWdpdC1zcXVhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFEMlxcXCI7XFxyXFxufVxcclxcbi5mYS1naXQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFEM1xcXCI7XFxyXFxufVxcclxcbi5mYS15LWNvbWJpbmF0b3Itc3F1YXJlOmJlZm9yZSxcXHJcXG4uZmEteWMtc3F1YXJlOmJlZm9yZSxcXHJcXG4uZmEtaGFja2VyLW5ld3M6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFENFxcXCI7XFxyXFxufVxcclxcbi5mYS10ZW5jZW50LXdlaWJvOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRDVcXFwiO1xcclxcbn1cXHJcXG4uZmEtcXE6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFENlxcXCI7XFxyXFxufVxcclxcbi5mYS13ZWNoYXQ6YmVmb3JlLFxcclxcbi5mYS13ZWl4aW46YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFEN1xcXCI7XFxyXFxufVxcclxcbi5mYS1zZW5kOmJlZm9yZSxcXHJcXG4uZmEtcGFwZXItcGxhbmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFEOFxcXCI7XFxyXFxufVxcclxcbi5mYS1zZW5kLW86YmVmb3JlLFxcclxcbi5mYS1wYXBlci1wbGFuZS1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRDlcXFwiO1xcclxcbn1cXHJcXG4uZmEtaGlzdG9yeTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMURBXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNpcmNsZS10aGluOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxREJcXFwiO1xcclxcbn1cXHJcXG4uZmEtaGVhZGVyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRENcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGFyYWdyYXBoOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRERcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2xpZGVyczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMURFXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNoYXJlLWFsdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUUwXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNoYXJlLWFsdC1zcXVhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFFMVxcXCI7XFxyXFxufVxcclxcbi5mYS1ib21iOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRTJcXFwiO1xcclxcbn1cXHJcXG4uZmEtc29jY2VyLWJhbGwtbzpiZWZvcmUsXFxyXFxuLmZhLWZ1dGJvbC1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRTNcXFwiO1xcclxcbn1cXHJcXG4uZmEtdHR5OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRTRcXFwiO1xcclxcbn1cXHJcXG4uZmEtYmlub2N1bGFyczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUU1XFxcIjtcXHJcXG59XFxyXFxuLmZhLXBsdWc6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFFNlxcXCI7XFxyXFxufVxcclxcbi5mYS1zbGlkZXNoYXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRTdcXFwiO1xcclxcbn1cXHJcXG4uZmEtdHdpdGNoOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRThcXFwiO1xcclxcbn1cXHJcXG4uZmEteWVscDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUU5XFxcIjtcXHJcXG59XFxyXFxuLmZhLW5ld3NwYXBlci1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRUFcXFwiO1xcclxcbn1cXHJcXG4uZmEtd2lmaTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUVCXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNhbGN1bGF0b3I6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFFQ1xcXCI7XFxyXFxufVxcclxcbi5mYS1wYXlwYWw6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFFRFxcXCI7XFxyXFxufVxcclxcbi5mYS1nb29nbGUtd2FsbGV0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRUVcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2MtdmlzYTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUYwXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNjLW1hc3RlcmNhcmQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFGMVxcXCI7XFxyXFxufVxcclxcbi5mYS1jYy1kaXNjb3ZlcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUYyXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNjLWFtZXg6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFGM1xcXCI7XFxyXFxufVxcclxcbi5mYS1jYy1wYXlwYWw6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFGNFxcXCI7XFxyXFxufVxcclxcbi5mYS1jYy1zdHJpcGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFGNVxcXCI7XFxyXFxufVxcclxcbi5mYS1iZWxsLXNsYXNoOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRjZcXFwiO1xcclxcbn1cXHJcXG4uZmEtYmVsbC1zbGFzaC1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRjdcXFwiO1xcclxcbn1cXHJcXG4uZmEtdHJhc2g6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFGOFxcXCI7XFxyXFxufVxcclxcbi5mYS1jb3B5cmlnaHQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFGOVxcXCI7XFxyXFxufVxcclxcbi5mYS1hdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUZBXFxcIjtcXHJcXG59XFxyXFxuLmZhLWV5ZWRyb3BwZXI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFGQlxcXCI7XFxyXFxufVxcclxcbi5mYS1wYWludC1icnVzaDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMUZDXFxcIjtcXHJcXG59XFxyXFxuLmZhLWJpcnRoZGF5LWNha2U6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFGRFxcXCI7XFxyXFxufVxcclxcbi5mYS1hcmVhLWNoYXJ0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYxRkVcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGllLWNoYXJ0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMDBcXFwiO1xcclxcbn1cXHJcXG4uZmEtbGluZS1jaGFydDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjAxXFxcIjtcXHJcXG59XFxyXFxuLmZhLWxhc3RmbTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjAyXFxcIjtcXHJcXG59XFxyXFxuLmZhLWxhc3RmbS1zcXVhcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIwM1xcXCI7XFxyXFxufVxcclxcbi5mYS10b2dnbGUtb2ZmOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMDRcXFwiO1xcclxcbn1cXHJcXG4uZmEtdG9nZ2xlLW9uOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMDVcXFwiO1xcclxcbn1cXHJcXG4uZmEtYmljeWNsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjA2XFxcIjtcXHJcXG59XFxyXFxuLmZhLWJ1czpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjA3XFxcIjtcXHJcXG59XFxyXFxuLmZhLWlveGhvc3Q6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIwOFxcXCI7XFxyXFxufVxcclxcbi5mYS1hbmdlbGxpc3Q6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIwOVxcXCI7XFxyXFxufVxcclxcbi5mYS1jYzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjBBXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNoZWtlbDpiZWZvcmUsXFxyXFxuLmZhLXNoZXFlbDpiZWZvcmUsXFxyXFxuLmZhLWlsczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjBCXFxcIjtcXHJcXG59XFxyXFxuLmZhLW1lYW5wYXRoOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMENcXFwiO1xcclxcbn1cXHJcXG4uZmEtYnV5c2VsbGFkczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjBEXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNvbm5lY3RkZXZlbG9wOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMEVcXFwiO1xcclxcbn1cXHJcXG4uZmEtZGFzaGN1YmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIxMFxcXCI7XFxyXFxufVxcclxcbi5mYS1mb3J1bWJlZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjExXFxcIjtcXHJcXG59XFxyXFxuLmZhLWxlYW5wdWI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIxMlxcXCI7XFxyXFxufVxcclxcbi5mYS1zZWxsc3k6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIxM1xcXCI7XFxyXFxufVxcclxcbi5mYS1zaGlydHNpbmJ1bGs6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIxNFxcXCI7XFxyXFxufVxcclxcbi5mYS1zaW1wbHlidWlsdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjE1XFxcIjtcXHJcXG59XFxyXFxuLmZhLXNreWF0bGFzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMTZcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2FydC1wbHVzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMTdcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2FydC1hcnJvdy1kb3duOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMThcXFwiO1xcclxcbn1cXHJcXG4uZmEtZGlhbW9uZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjE5XFxcIjtcXHJcXG59XFxyXFxuLmZhLXNoaXA6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIxQVxcXCI7XFxyXFxufVxcclxcbi5mYS11c2VyLXNlY3JldDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjFCXFxcIjtcXHJcXG59XFxyXFxuLmZhLW1vdG9yY3ljbGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIxQ1xcXCI7XFxyXFxufVxcclxcbi5mYS1zdHJlZXQtdmlldzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjFEXFxcIjtcXHJcXG59XFxyXFxuLmZhLWhlYXJ0YmVhdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjFFXFxcIjtcXHJcXG59XFxyXFxuLmZhLXZlbnVzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMjFcXFwiO1xcclxcbn1cXHJcXG4uZmEtbWFyczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjIyXFxcIjtcXHJcXG59XFxyXFxuLmZhLW1lcmN1cnk6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIyM1xcXCI7XFxyXFxufVxcclxcbi5mYS1pbnRlcnNleDpiZWZvcmUsXFxyXFxuLmZhLXRyYW5zZ2VuZGVyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMjRcXFwiO1xcclxcbn1cXHJcXG4uZmEtdHJhbnNnZW5kZXItYWx0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMjVcXFwiO1xcclxcbn1cXHJcXG4uZmEtdmVudXMtZG91YmxlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMjZcXFwiO1xcclxcbn1cXHJcXG4uZmEtbWFycy1kb3VibGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIyN1xcXCI7XFxyXFxufVxcclxcbi5mYS12ZW51cy1tYXJzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMjhcXFwiO1xcclxcbn1cXHJcXG4uZmEtbWFycy1zdHJva2U6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIyOVxcXCI7XFxyXFxufVxcclxcbi5mYS1tYXJzLXN0cm9rZS12OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMkFcXFwiO1xcclxcbn1cXHJcXG4uZmEtbWFycy1zdHJva2UtaDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjJCXFxcIjtcXHJcXG59XFxyXFxuLmZhLW5ldXRlcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjJDXFxcIjtcXHJcXG59XFxyXFxuLmZhLWdlbmRlcmxlc3M6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIyRFxcXCI7XFxyXFxufVxcclxcbi5mYS1mYWNlYm9vay1vZmZpY2lhbDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjMwXFxcIjtcXHJcXG59XFxyXFxuLmZhLXBpbnRlcmVzdC1wOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMzFcXFwiO1xcclxcbn1cXHJcXG4uZmEtd2hhdHNhcHA6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIzMlxcXCI7XFxyXFxufVxcclxcbi5mYS1zZXJ2ZXI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIzM1xcXCI7XFxyXFxufVxcclxcbi5mYS11c2VyLXBsdXM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIzNFxcXCI7XFxyXFxufVxcclxcbi5mYS11c2VyLXRpbWVzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMzVcXFwiO1xcclxcbn1cXHJcXG4uZmEtaG90ZWw6YmVmb3JlLFxcclxcbi5mYS1iZWQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIzNlxcXCI7XFxyXFxufVxcclxcbi5mYS12aWFjb2luOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyMzdcXFwiO1xcclxcbn1cXHJcXG4uZmEtdHJhaW46YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIzOFxcXCI7XFxyXFxufVxcclxcbi5mYS1zdWJ3YXk6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIzOVxcXCI7XFxyXFxufVxcclxcbi5mYS1tZWRpdW06YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIzQVxcXCI7XFxyXFxufVxcclxcbi5mYS15YzpiZWZvcmUsXFxyXFxuLmZhLXktY29tYmluYXRvcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjNCXFxcIjtcXHJcXG59XFxyXFxuLmZhLW9wdGluLW1vbnN0ZXI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIzQ1xcXCI7XFxyXFxufVxcclxcbi5mYS1vcGVuY2FydDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjNEXFxcIjtcXHJcXG59XFxyXFxuLmZhLWV4cGVkaXRlZHNzbDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjNFXFxcIjtcXHJcXG59XFxyXFxuLmZhLWJhdHRlcnktNDpiZWZvcmUsXFxyXFxuLmZhLWJhdHRlcnk6YmVmb3JlLFxcclxcbi5mYS1iYXR0ZXJ5LWZ1bGw6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI0MFxcXCI7XFxyXFxufVxcclxcbi5mYS1iYXR0ZXJ5LTM6YmVmb3JlLFxcclxcbi5mYS1iYXR0ZXJ5LXRocmVlLXF1YXJ0ZXJzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNDFcXFwiO1xcclxcbn1cXHJcXG4uZmEtYmF0dGVyeS0yOmJlZm9yZSxcXHJcXG4uZmEtYmF0dGVyeS1oYWxmOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNDJcXFwiO1xcclxcbn1cXHJcXG4uZmEtYmF0dGVyeS0xOmJlZm9yZSxcXHJcXG4uZmEtYmF0dGVyeS1xdWFydGVyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNDNcXFwiO1xcclxcbn1cXHJcXG4uZmEtYmF0dGVyeS0wOmJlZm9yZSxcXHJcXG4uZmEtYmF0dGVyeS1lbXB0eTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjQ0XFxcIjtcXHJcXG59XFxyXFxuLmZhLW1vdXNlLXBvaW50ZXI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI0NVxcXCI7XFxyXFxufVxcclxcbi5mYS1pLWN1cnNvcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjQ2XFxcIjtcXHJcXG59XFxyXFxuLmZhLW9iamVjdC1ncm91cDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjQ3XFxcIjtcXHJcXG59XFxyXFxuLmZhLW9iamVjdC11bmdyb3VwOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNDhcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3RpY2t5LW5vdGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI0OVxcXCI7XFxyXFxufVxcclxcbi5mYS1zdGlja3ktbm90ZS1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNEFcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2MtamNiOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNEJcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2MtZGluZXJzLWNsdWI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI0Q1xcXCI7XFxyXFxufVxcclxcbi5mYS1jbG9uZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjREXFxcIjtcXHJcXG59XFxyXFxuLmZhLWJhbGFuY2Utc2NhbGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI0RVxcXCI7XFxyXFxufVxcclxcbi5mYS1ob3VyZ2xhc3MtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjUwXFxcIjtcXHJcXG59XFxyXFxuLmZhLWhvdXJnbGFzcy0xOmJlZm9yZSxcXHJcXG4uZmEtaG91cmdsYXNzLXN0YXJ0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNTFcXFwiO1xcclxcbn1cXHJcXG4uZmEtaG91cmdsYXNzLTI6YmVmb3JlLFxcclxcbi5mYS1ob3VyZ2xhc3MtaGFsZjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjUyXFxcIjtcXHJcXG59XFxyXFxuLmZhLWhvdXJnbGFzcy0zOmJlZm9yZSxcXHJcXG4uZmEtaG91cmdsYXNzLWVuZDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjUzXFxcIjtcXHJcXG59XFxyXFxuLmZhLWhvdXJnbGFzczpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjU0XFxcIjtcXHJcXG59XFxyXFxuLmZhLWhhbmQtZ3JhYi1vOmJlZm9yZSxcXHJcXG4uZmEtaGFuZC1yb2NrLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI1NVxcXCI7XFxyXFxufVxcclxcbi5mYS1oYW5kLXN0b3AtbzpiZWZvcmUsXFxyXFxuLmZhLWhhbmQtcGFwZXItbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjU2XFxcIjtcXHJcXG59XFxyXFxuLmZhLWhhbmQtc2Npc3NvcnMtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjU3XFxcIjtcXHJcXG59XFxyXFxuLmZhLWhhbmQtbGl6YXJkLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI1OFxcXCI7XFxyXFxufVxcclxcbi5mYS1oYW5kLXNwb2NrLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI1OVxcXCI7XFxyXFxufVxcclxcbi5mYS1oYW5kLXBvaW50ZXItbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjVBXFxcIjtcXHJcXG59XFxyXFxuLmZhLWhhbmQtcGVhY2UtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjVCXFxcIjtcXHJcXG59XFxyXFxuLmZhLXRyYWRlbWFyazpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjVDXFxcIjtcXHJcXG59XFxyXFxuLmZhLXJlZ2lzdGVyZWQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI1RFxcXCI7XFxyXFxufVxcclxcbi5mYS1jcmVhdGl2ZS1jb21tb25zOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNUVcXFwiO1xcclxcbn1cXHJcXG4uZmEtZ2c6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI2MFxcXCI7XFxyXFxufVxcclxcbi5mYS1nZy1jaXJjbGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI2MVxcXCI7XFxyXFxufVxcclxcbi5mYS10cmlwYWR2aXNvcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjYyXFxcIjtcXHJcXG59XFxyXFxuLmZhLW9kbm9rbGFzc25pa2k6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI2M1xcXCI7XFxyXFxufVxcclxcbi5mYS1vZG5va2xhc3NuaWtpLXNxdWFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjY0XFxcIjtcXHJcXG59XFxyXFxuLmZhLWdldC1wb2NrZXQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI2NVxcXCI7XFxyXFxufVxcclxcbi5mYS13aWtpcGVkaWEtdzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjY2XFxcIjtcXHJcXG59XFxyXFxuLmZhLXNhZmFyaTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjY3XFxcIjtcXHJcXG59XFxyXFxuLmZhLWNocm9tZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjY4XFxcIjtcXHJcXG59XFxyXFxuLmZhLWZpcmVmb3g6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI2OVxcXCI7XFxyXFxufVxcclxcbi5mYS1vcGVyYTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjZBXFxcIjtcXHJcXG59XFxyXFxuLmZhLWludGVybmV0LWV4cGxvcmVyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNkJcXFwiO1xcclxcbn1cXHJcXG4uZmEtdHY6YmVmb3JlLFxcclxcbi5mYS10ZWxldmlzaW9uOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNkNcXFwiO1xcclxcbn1cXHJcXG4uZmEtY29udGFvOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNkRcXFwiO1xcclxcbn1cXHJcXG4uZmEtNTAwcHg6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI2RVxcXCI7XFxyXFxufVxcclxcbi5mYS1hbWF6b246YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI3MFxcXCI7XFxyXFxufVxcclxcbi5mYS1jYWxlbmRhci1wbHVzLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI3MVxcXCI7XFxyXFxufVxcclxcbi5mYS1jYWxlbmRhci1taW51cy1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyNzJcXFwiO1xcclxcbn1cXHJcXG4uZmEtY2FsZW5kYXItdGltZXMtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjczXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNhbGVuZGFyLWNoZWNrLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI3NFxcXCI7XFxyXFxufVxcclxcbi5mYS1pbmR1c3RyeTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjc1XFxcIjtcXHJcXG59XFxyXFxuLmZhLW1hcC1waW46YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI3NlxcXCI7XFxyXFxufVxcclxcbi5mYS1tYXAtc2lnbnM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI3N1xcXCI7XFxyXFxufVxcclxcbi5mYS1tYXAtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjc4XFxcIjtcXHJcXG59XFxyXFxuLmZhLW1hcDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjc5XFxcIjtcXHJcXG59XFxyXFxuLmZhLWNvbW1lbnRpbmc6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI3QVxcXCI7XFxyXFxufVxcclxcbi5mYS1jb21tZW50aW5nLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI3QlxcXCI7XFxyXFxufVxcclxcbi5mYS1ob3V6ejpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjdDXFxcIjtcXHJcXG59XFxyXFxuLmZhLXZpbWVvOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyN0RcXFwiO1xcclxcbn1cXHJcXG4uZmEtYmxhY2stdGllOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyN0VcXFwiO1xcclxcbn1cXHJcXG4uZmEtZm9udGljb25zOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyODBcXFwiO1xcclxcbn1cXHJcXG4uZmEtcmVkZGl0LWFsaWVuOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyODFcXFwiO1xcclxcbn1cXHJcXG4uZmEtZWRnZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjgyXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNyZWRpdC1jYXJkLWFsdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjgzXFxcIjtcXHJcXG59XFxyXFxuLmZhLWNvZGllcGllOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyODRcXFwiO1xcclxcbn1cXHJcXG4uZmEtbW9keDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjg1XFxcIjtcXHJcXG59XFxyXFxuLmZhLWZvcnQtYXdlc29tZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjg2XFxcIjtcXHJcXG59XFxyXFxuLmZhLXVzYjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjg3XFxcIjtcXHJcXG59XFxyXFxuLmZhLXByb2R1Y3QtaHVudDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjg4XFxcIjtcXHJcXG59XFxyXFxuLmZhLW1peGNsb3VkOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyODlcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2NyaWJkOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyOEFcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGF1c2UtY2lyY2xlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyOEJcXFwiO1xcclxcbn1cXHJcXG4uZmEtcGF1c2UtY2lyY2xlLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI4Q1xcXCI7XFxyXFxufVxcclxcbi5mYS1zdG9wLWNpcmNsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjhEXFxcIjtcXHJcXG59XFxyXFxuLmZhLXN0b3AtY2lyY2xlLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI4RVxcXCI7XFxyXFxufVxcclxcbi5mYS1zaG9wcGluZy1iYWc6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI5MFxcXCI7XFxyXFxufVxcclxcbi5mYS1zaG9wcGluZy1iYXNrZXQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI5MVxcXCI7XFxyXFxufVxcclxcbi5mYS1oYXNodGFnOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyOTJcXFwiO1xcclxcbn1cXHJcXG4uZmEtYmx1ZXRvb3RoOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyOTNcXFwiO1xcclxcbn1cXHJcXG4uZmEtYmx1ZXRvb3RoLWI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI5NFxcXCI7XFxyXFxufVxcclxcbi5mYS1wZXJjZW50OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyOTVcXFwiO1xcclxcbn1cXHJcXG4uZmEtZ2l0bGFiOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyOTZcXFwiO1xcclxcbn1cXHJcXG4uZmEtd3BiZWdpbm5lcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjk3XFxcIjtcXHJcXG59XFxyXFxuLmZhLXdwZm9ybXM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI5OFxcXCI7XFxyXFxufVxcclxcbi5mYS1lbnZpcmE6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI5OVxcXCI7XFxyXFxufVxcclxcbi5mYS11bml2ZXJzYWwtYWNjZXNzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyOUFcXFwiO1xcclxcbn1cXHJcXG4uZmEtd2hlZWxjaGFpci1hbHQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI5QlxcXCI7XFxyXFxufVxcclxcbi5mYS1xdWVzdGlvbi1jaXJjbGUtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMjlDXFxcIjtcXHJcXG59XFxyXFxuLmZhLWJsaW5kOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyOURcXFwiO1xcclxcbn1cXHJcXG4uZmEtYXVkaW8tZGVzY3JpcHRpb246YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI5RVxcXCI7XFxyXFxufVxcclxcbi5mYS12b2x1bWUtY29udHJvbC1waG9uZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMkEwXFxcIjtcXHJcXG59XFxyXFxuLmZhLWJyYWlsbGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJBMVxcXCI7XFxyXFxufVxcclxcbi5mYS1hc3Npc3RpdmUtbGlzdGVuaW5nLXN5c3RlbXM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJBMlxcXCI7XFxyXFxufVxcclxcbi5mYS1hc2wtaW50ZXJwcmV0aW5nOmJlZm9yZSxcXHJcXG4uZmEtYW1lcmljYW4tc2lnbi1sYW5ndWFnZS1pbnRlcnByZXRpbmc6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJBM1xcXCI7XFxyXFxufVxcclxcbi5mYS1kZWFmbmVzczpiZWZvcmUsXFxyXFxuLmZhLWhhcmQtb2YtaGVhcmluZzpiZWZvcmUsXFxyXFxuLmZhLWRlYWY6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJBNFxcXCI7XFxyXFxufVxcclxcbi5mYS1nbGlkZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMkE1XFxcIjtcXHJcXG59XFxyXFxuLmZhLWdsaWRlLWc6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJBNlxcXCI7XFxyXFxufVxcclxcbi5mYS1zaWduaW5nOmJlZm9yZSxcXHJcXG4uZmEtc2lnbi1sYW5ndWFnZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMkE3XFxcIjtcXHJcXG59XFxyXFxuLmZhLWxvdy12aXNpb246YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJBOFxcXCI7XFxyXFxufVxcclxcbi5mYS12aWFkZW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJBOVxcXCI7XFxyXFxufVxcclxcbi5mYS12aWFkZW8tc3F1YXJlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyQUFcXFwiO1xcclxcbn1cXHJcXG4uZmEtc25hcGNoYXQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJBQlxcXCI7XFxyXFxufVxcclxcbi5mYS1zbmFwY2hhdC1naG9zdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMkFDXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNuYXBjaGF0LXNxdWFyZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMkFEXFxcIjtcXHJcXG59XFxyXFxuLmZhLXBpZWQtcGlwZXI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJBRVxcXCI7XFxyXFxufVxcclxcbi5mYS1maXJzdC1vcmRlcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMkIwXFxcIjtcXHJcXG59XFxyXFxuLmZhLXlvYXN0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyQjFcXFwiO1xcclxcbn1cXHJcXG4uZmEtdGhlbWVpc2xlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyQjJcXFwiO1xcclxcbn1cXHJcXG4uZmEtZ29vZ2xlLXBsdXMtY2lyY2xlOmJlZm9yZSxcXHJcXG4uZmEtZ29vZ2xlLXBsdXMtb2ZmaWNpYWw6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJCM1xcXCI7XFxyXFxufVxcclxcbi5mYS1mYTpiZWZvcmUsXFxyXFxuLmZhLWZvbnQtYXdlc29tZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMkI0XFxcIjtcXHJcXG59XFxyXFxuLmZhLWhhbmRzaGFrZS1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyQjVcXFwiO1xcclxcbn1cXHJcXG4uZmEtZW52ZWxvcGUtb3BlbjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMkI2XFxcIjtcXHJcXG59XFxyXFxuLmZhLWVudmVsb3BlLW9wZW4tbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMkI3XFxcIjtcXHJcXG59XFxyXFxuLmZhLWxpbm9kZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMkI4XFxcIjtcXHJcXG59XFxyXFxuLmZhLWFkZHJlc3MtYm9vazpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMkI5XFxcIjtcXHJcXG59XFxyXFxuLmZhLWFkZHJlc3MtYm9vay1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyQkFcXFwiO1xcclxcbn1cXHJcXG4uZmEtdmNhcmQ6YmVmb3JlLFxcclxcbi5mYS1hZGRyZXNzLWNhcmQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJCQlxcXCI7XFxyXFxufVxcclxcbi5mYS12Y2FyZC1vOmJlZm9yZSxcXHJcXG4uZmEtYWRkcmVzcy1jYXJkLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJCQ1xcXCI7XFxyXFxufVxcclxcbi5mYS11c2VyLWNpcmNsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMkJEXFxcIjtcXHJcXG59XFxyXFxuLmZhLXVzZXItY2lyY2xlLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJCRVxcXCI7XFxyXFxufVxcclxcbi5mYS11c2VyLW86YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJDMFxcXCI7XFxyXFxufVxcclxcbi5mYS1pZC1iYWRnZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMkMxXFxcIjtcXHJcXG59XFxyXFxuLmZhLWRyaXZlcnMtbGljZW5zZTpiZWZvcmUsXFxyXFxuLmZhLWlkLWNhcmQ6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJDMlxcXCI7XFxyXFxufVxcclxcbi5mYS1kcml2ZXJzLWxpY2Vuc2UtbzpiZWZvcmUsXFxyXFxuLmZhLWlkLWNhcmQtbzpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMkMzXFxcIjtcXHJcXG59XFxyXFxuLmZhLXF1b3JhOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyQzRcXFwiO1xcclxcbn1cXHJcXG4uZmEtZnJlZS1jb2RlLWNhbXA6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJDNVxcXCI7XFxyXFxufVxcclxcbi5mYS10ZWxlZ3JhbTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMkM2XFxcIjtcXHJcXG59XFxyXFxuLmZhLXRoZXJtb21ldGVyLTQ6YmVmb3JlLFxcclxcbi5mYS10aGVybW9tZXRlcjpiZWZvcmUsXFxyXFxuLmZhLXRoZXJtb21ldGVyLWZ1bGw6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJDN1xcXCI7XFxyXFxufVxcclxcbi5mYS10aGVybW9tZXRlci0zOmJlZm9yZSxcXHJcXG4uZmEtdGhlcm1vbWV0ZXItdGhyZWUtcXVhcnRlcnM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJDOFxcXCI7XFxyXFxufVxcclxcbi5mYS10aGVybW9tZXRlci0yOmJlZm9yZSxcXHJcXG4uZmEtdGhlcm1vbWV0ZXItaGFsZjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMkM5XFxcIjtcXHJcXG59XFxyXFxuLmZhLXRoZXJtb21ldGVyLTE6YmVmb3JlLFxcclxcbi5mYS10aGVybW9tZXRlci1xdWFydGVyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyQ0FcXFwiO1xcclxcbn1cXHJcXG4uZmEtdGhlcm1vbWV0ZXItMDpiZWZvcmUsXFxyXFxuLmZhLXRoZXJtb21ldGVyLWVtcHR5OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyQ0JcXFwiO1xcclxcbn1cXHJcXG4uZmEtc2hvd2VyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyQ0NcXFwiO1xcclxcbn1cXHJcXG4uZmEtYmF0aHR1YjpiZWZvcmUsXFxyXFxuLmZhLXMxNTpiZWZvcmUsXFxyXFxuLmZhLWJhdGg6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJDRFxcXCI7XFxyXFxufVxcclxcbi5mYS1wb2RjYXN0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyQ0VcXFwiO1xcclxcbn1cXHJcXG4uZmEtd2luZG93LW1heGltaXplOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyRDBcXFwiO1xcclxcbn1cXHJcXG4uZmEtd2luZG93LW1pbmltaXplOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyRDFcXFwiO1xcclxcbn1cXHJcXG4uZmEtd2luZG93LXJlc3RvcmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJEMlxcXCI7XFxyXFxufVxcclxcbi5mYS10aW1lcy1yZWN0YW5nbGU6YmVmb3JlLFxcclxcbi5mYS13aW5kb3ctY2xvc2U6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJEM1xcXCI7XFxyXFxufVxcclxcbi5mYS10aW1lcy1yZWN0YW5nbGUtbzpiZWZvcmUsXFxyXFxuLmZhLXdpbmRvdy1jbG9zZS1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyRDRcXFwiO1xcclxcbn1cXHJcXG4uZmEtYmFuZGNhbXA6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJENVxcXCI7XFxyXFxufVxcclxcbi5mYS1ncmF2OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyRDZcXFwiO1xcclxcbn1cXHJcXG4uZmEtZXRzeTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMkQ3XFxcIjtcXHJcXG59XFxyXFxuLmZhLWltZGI6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJEOFxcXCI7XFxyXFxufVxcclxcbi5mYS1yYXZlbHJ5OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyRDlcXFwiO1xcclxcbn1cXHJcXG4uZmEtZWVyY2FzdDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMkRBXFxcIjtcXHJcXG59XFxyXFxuLmZhLW1pY3JvY2hpcDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxGMkRCXFxcIjtcXHJcXG59XFxyXFxuLmZhLXNub3dmbGFrZS1vOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyRENcXFwiO1xcclxcbn1cXHJcXG4uZmEtc3VwZXJwb3dlcnM6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJERFxcXCI7XFxyXFxufVxcclxcbi5mYS13cGV4cGxvcmVyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyREVcXFwiO1xcclxcbn1cXHJcXG4uZmEtbWVldHVwOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXEYyRTBcXFwiO1xcclxcbn1cXHJcXG4uc3Itb25seSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMXB4O1xcclxcbiAgaGVpZ2h0OiAxcHg7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAtMXB4O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxufVxcclxcbi5zci1vbmx5LWZvY3VzYWJsZTphY3RpdmUsXFxyXFxuLnNyLW9ubHktZm9jdXNhYmxlOmZvY3VzIHtcXHJcXG4gIHBvc2l0aW9uOiBzdGF0aWM7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcclxcbiAgY2xpcDogYXV0bztcXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2ZvbnRzL2ZvbnQtYXdlc29tZS5jc3MnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxyXFxuLmlvbi1hbGVydDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMDFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbGVydC1jaXJjbGVkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEwMFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtYWRkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJDN1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtYWRkLWNpcmNsZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNTlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWFsYXJtLWNsb2NrOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM1QVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtYWxlcnQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzVCXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1hcHBzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM1Q1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtYXJjaGl2ZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQzlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWFycm93LWJhY2s6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkNBXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1hcnJvdy1kb3duOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM1RFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtYXJyb3ctZHJvcGRvd246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzVGXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1hcnJvdy1kcm9wZG93bi1jaXJjbGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzVFXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1hcnJvdy1kcm9wbGVmdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNjFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWFycm93LWRyb3BsZWZ0LWNpcmNsZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNjBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWFycm93LWRyb3ByaWdodDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNjNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWFycm93LWRyb3ByaWdodC1jaXJjbGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzYyXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1hcnJvdy1kcm9wdXA6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzY1XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1hcnJvdy1kcm9wdXAtY2lyY2xlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM2NFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtYXJyb3ctZm9yd2FyZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzMEZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWFycm93LXVwOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM2NlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtYXR0YWNoOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM2N1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtYmFyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM2OFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtYmljeWNsZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNjlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWJvYXQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzZBXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1ib29rbWFyazpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNkJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWJ1bGI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzZDXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1idXM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzZEXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1jYWxlbmRhcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyRDFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWNhbGw6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkQyXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1jYW1lcmE6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkQzXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1jYW5jZWw6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzZFXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1jYXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzZGXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1jYXJ0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM3MFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtY2hhdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyRDRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWNoZWNrYm94OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM3NFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtY2hlY2tib3gtYmxhbms6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzcxXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1jaGVja2JveC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM3M1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtY2hlY2tib3gtb3V0bGluZS1ibGFuazpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNzJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWNoZWNrbWFyay1jaXJjbGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzc1XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1jbGlwYm9hcmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzc2XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1jbG9zZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyRDdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWNsb3VkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM3QVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtY2xvdWQtY2lyY2xlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM3N1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtY2xvdWQtZG9uZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNzhcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWNsb3VkLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzc5XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1jb2xvci1wYWxldHRlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM3QlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtY29tcGFzczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzN0NcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWNvbnRhY3Q6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkQ4XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1jb250YWN0czpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyRDlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWNvbnRyYWN0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM3RFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtY3JlYXRlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM3RVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtZGVsZXRlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM3RlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtZGVza3RvcDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzODBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWRvY3VtZW50OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM4MVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtZG9uZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzODNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWRvbmUtYWxsOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM4MlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtZG93bmxvYWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkREXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1kcmFmdHM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzg0XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1leGl0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM4NVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtZXhwYW5kOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM4NlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtZmF2b3JpdGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzg4XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1mYXZvcml0ZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM4N1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtZmlsbTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzODlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWZvbGRlcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyRTBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWZvbGRlci1vcGVuOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM4QVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtZnVubmVsOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM4QlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtZ2xvYmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzhDXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1oYW5kOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJFM1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtaGFuZ291dDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzOERcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWhhcHB5OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM4RVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtaG9tZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzOEZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWltYWdlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJFNFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtbGFwdG9wOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM5MFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtbGlzdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzOTFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWxvY2F0ZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyRTlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLWxvY2s6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzkyXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1tYWlsOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJFQlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtbWFwOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM5M1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtbWVudTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzOTRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLW1pY3JvcGhvbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkVDXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1taWNyb3Bob25lLW9mZjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzOTVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLW1vcmUtaG9yaXpvbnRhbDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzOTZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLW1vcmUtdmVydGljYWw6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzk3XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1uYXZpZ2F0ZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzOThcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLW5vdGlmaWNhdGlvbnM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzlCXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1ub3RpZmljYXRpb25zLW5vbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzk5XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1ub3RpZmljYXRpb25zLW9mZjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzOUFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLW9wZW46YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzlDXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1vcHRpb25zOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM5RFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtcGVvcGxlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM5RVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtcGVyc29uOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNBMFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtcGVyc29uLWFkZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzOUZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXBob25lLWxhbmRzY2FwZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQTFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXBob25lLXBvcnRyYWl0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNBMlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtcGluOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNBM1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtcGxhbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0E0XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1wbGF5c3RvcmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkYwXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1wcmludDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQTVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXJhZGlvLWJ1dHRvbi1vZmY6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0E2XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1yYWRpby1idXR0b24tb246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0E3XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1yZWZyZXNoOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNBOFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtcmVtb3ZlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJGNFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtcmVtb3ZlLWNpcmNsZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQTlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXJlc3RhdXJhbnQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0FBXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1zYWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0FCXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1zZWFyY2g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkY1XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1zZW5kOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJGNlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtc2V0dGluZ3M6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkY3XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1zaGFyZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyRjhcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXNoYXJlLWFsdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQUNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXN0YXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkZDXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1zdGFyLWhhbGY6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0FEXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1zdGFyLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0FFXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1zdG9wd2F0Y2g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkZEXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1zdWJ3YXk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0FGXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC1zdW5ueTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQjBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXN5bmM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0IxXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC10ZXh0c21zOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNCMlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtdGltZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQjNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXRyYWluOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNCNFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtdW5sb2NrOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNCNVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtdXBsb2FkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNCNlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtdm9sdW1lLWRvd246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0I3XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC12b2x1bWUtbXV0ZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQjhcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXZvbHVtZS1vZmY6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0I5XFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC12b2x1bWUtdXA6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0JBXFxcIjsgfVxcclxcblxcclxcbi5pb24tYW5kcm9pZC13YWxrOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNCQlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtd2FybmluZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQkNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hbmRyb2lkLXdhdGNoOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNCRFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFuZHJvaWQtd2lmaTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzMDVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hcGVydHVyZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzMTNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hcmNoaXZlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEwMlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFycm93LWRvd24tYTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMDNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hcnJvdy1kb3duLWI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTA0XFxcIjsgfVxcclxcblxcclxcbi5pb24tYXJyb3ctZG93bi1jOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEwNVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFycm93LWV4cGFuZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNUVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hcnJvdy1ncmFwaC1kb3duLWxlZnQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjVGXFxcIjsgfVxcclxcblxcclxcbi5pb24tYXJyb3ctZ3JhcGgtZG93bi1yaWdodDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNjBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hcnJvdy1ncmFwaC11cC1sZWZ0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI2MVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFycm93LWdyYXBoLXVwLXJpZ2h0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI2MlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFycm93LWxlZnQtYTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMDZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hcnJvdy1sZWZ0LWI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTA3XFxcIjsgfVxcclxcblxcclxcbi5pb24tYXJyb3ctbGVmdC1jOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEwOFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFycm93LW1vdmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjYzXFxcIjsgfVxcclxcblxcclxcbi5pb24tYXJyb3ctcmVzaXplOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI2NFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFycm93LXJldHVybi1sZWZ0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI2NVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFycm93LXJldHVybi1yaWdodDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNjZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hcnJvdy1yaWdodC1hOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEwOVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFycm93LXJpZ2h0LWI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTBBXFxcIjsgfVxcclxcblxcclxcbi5pb24tYXJyb3ctcmlnaHQtYzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMEJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hcnJvdy1zaHJpbms6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjY3XFxcIjsgfVxcclxcblxcclxcbi5pb24tYXJyb3ctc3dhcDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNjhcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hcnJvdy11cC1hOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEwQ1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWFycm93LXVwLWI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTBEXFxcIjsgfVxcclxcblxcclxcbi5pb24tYXJyb3ctdXAtYzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMEVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hc3RlcmlzazpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzMTRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1hdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMEZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1iYWNrc3BhY2U6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0JGXFxcIjsgfVxcclxcblxcclxcbi5pb24tYmFja3NwYWNlLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0JFXFxcIjsgfVxcclxcblxcclxcbi5pb24tYmFnOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjExMFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWJhdHRlcnktY2hhcmdpbmc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTExXFxcIjsgfVxcclxcblxcclxcbi5pb24tYmF0dGVyeS1lbXB0eTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMTJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1iYXR0ZXJ5LWZ1bGw6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTEzXFxcIjsgfVxcclxcblxcclxcbi5pb24tYmF0dGVyeS1oYWxmOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjExNFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWJhdHRlcnktbG93OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjExNVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWJlYWtlcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNjlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1iZWVyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI2QVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWJsdWV0b290aDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMTZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1ib25maXJlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjMxNVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWJvb2ttYXJrOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI2QlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWJvd3RpZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQzBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1icmllZmNhc2U6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjZDXFxcIjsgfVxcclxcblxcclxcbi5pb24tYnVnOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJCRVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNhbGN1bGF0b3I6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjZEXFxcIjsgfVxcclxcblxcclxcbi5pb24tY2FsZW5kYXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTE3XFxcIjsgfVxcclxcblxcclxcbi5pb24tY2FtZXJhOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjExOFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNhcmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTE5XFxcIjsgfVxcclxcblxcclxcbi5pb24tY2FzaDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzMTZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jaGF0Ym94OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjExQlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNoYXRib3gtd29ya2luZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMUFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jaGF0Ym94ZXM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTFDXFxcIjsgfVxcclxcblxcclxcbi5pb24tY2hhdGJ1YmJsZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMUVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jaGF0YnViYmxlLXdvcmtpbmc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTFEXFxcIjsgfVxcclxcblxcclxcbi5pb24tY2hhdGJ1YmJsZXM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTFGXFxcIjsgfVxcclxcblxcclxcbi5pb24tY2hlY2ttYXJrOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEyMlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNoZWNrbWFyay1jaXJjbGVkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEyMFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNoZWNrbWFyay1yb3VuZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMjFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jaGV2cm9uLWRvd246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTIzXFxcIjsgfVxcclxcblxcclxcbi5pb24tY2hldnJvbi1sZWZ0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEyNFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNoZXZyb24tcmlnaHQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTI1XFxcIjsgfVxcclxcblxcclxcbi5pb24tY2hldnJvbi11cDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMjZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jbGlwYm9hcmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTI3XFxcIjsgfVxcclxcblxcclxcbi5pb24tY2xvY2s6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjZFXFxcIjsgfVxcclxcblxcclxcbi5pb24tY2xvc2U6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTJBXFxcIjsgfVxcclxcblxcclxcbi5pb24tY2xvc2UtY2lyY2xlZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMjhcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jbG9zZS1yb3VuZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMjlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jbG9zZWQtY2FwdGlvbmluZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzMTdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jbG91ZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMkJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jb2RlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI3MVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNvZGUtZG93bmxvYWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjZGXFxcIjsgfVxcclxcblxcclxcbi5pb24tY29kZS13b3JraW5nOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI3MFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNvZmZlZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNzJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1jb21wYXNzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI3M1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNvbXBvc2U6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTJDXFxcIjsgfVxcclxcblxcclxcbi5pb24tY29ubmVjdGlvbi1iYXJzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI3NFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNvbnRyYXN0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI3NVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWNyb3A6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0MxXFxcIjsgfVxcclxcblxcclxcbi5pb24tY3ViZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzMThcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1kaXNjOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEyRFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWRvY3VtZW50OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEyRlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWRvY3VtZW50LXRleHQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTJFXFxcIjsgfVxcclxcblxcclxcbi5pb24tZHJhZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMzBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1lYXJ0aDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNzZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1lYXNlbDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQzJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1lZGl0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJCRlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWVnZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNzdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1lamVjdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMzFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1lbWFpbDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMzJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1lbWFpbC11bnJlYWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0MzXFxcIjsgfVxcclxcblxcclxcbi5pb24tZXJsZW5tZXllci1mbGFzazpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQzVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1lcmxlbm1leWVyLWZsYXNrLWJ1YmJsZXM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0M0XFxcIjsgfVxcclxcblxcclxcbi5pb24tZXllOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEzM1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWV5ZS1kaXNhYmxlZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzMDZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1mZW1hbGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjc4XFxcIjsgfVxcclxcblxcclxcbi5pb24tZmlsaW5nOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEzNFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWZpbG0tbWFya2VyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEzNVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWZpcmViYWxsOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjMxOVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWZsYWc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjc5XFxcIjsgfVxcclxcblxcclxcbi5pb24tZmxhbWU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzFBXFxcIjsgfVxcclxcblxcclxcbi5pb24tZmxhc2g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTM3XFxcIjsgfVxcclxcblxcclxcbi5pb24tZmxhc2gtb2ZmOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEzNlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWZvbGRlcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMzlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1mb3JrOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI3QVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWZvcmstcmVwbzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQzBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1mb3J3YXJkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEzQVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWZ1bm5lbDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzMUJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1nZWFyLWE6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTNEXFxcIjsgfVxcclxcblxcclxcbi5pb24tZ2Vhci1iOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEzRVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWdyaWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTNGXFxcIjsgfVxcclxcblxcclxcbi5pb24taGFtbWVyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI3QlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWhhcHB5OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjMxQ1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWhhcHB5LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0M2XFxcIjsgfVxcclxcblxcclxcbi5pb24taGVhZHBob25lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjE0MFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWhlYXJ0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjE0MVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWhlYXJ0LWJyb2tlbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzMURcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1oZWxwOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjE0M1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWhlbHAtYnVveTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyN0NcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1oZWxwLWNpcmNsZWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTQyXFxcIjsgfVxcclxcblxcclxcbi5pb24taG9tZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxNDRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pY2VjcmVhbTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyN0RcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pbWFnZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxNDdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pbWFnZXM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTQ4XFxcIjsgfVxcclxcblxcclxcbi5pb24taW5mb3JtYXRpb246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTRBXFxcIjsgfVxcclxcblxcclxcbi5pb24taW5mb3JtYXRpb24tY2lyY2xlZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxNDlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb25pYzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxNEJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYWxhcm06YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0M4XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWFsYXJtLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0M3XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWFsYnVtczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQ0FcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYWxidW1zLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0M5XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWFtZXJpY2FuZm9vdGJhbGw6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0NDXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWFtZXJpY2FuZm9vdGJhbGwtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQ0JcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYW5hbHl0aWNzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNDRVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1hbmFseXRpY3Mtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQ0RcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYXJyb3ctYmFjazpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQ0ZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYXJyb3ctZG93bjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRDBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYXJyb3ctZm9yd2FyZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRDFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYXJyb3ctbGVmdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRDJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYXJyb3ctcmlnaHQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0QzXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWFycm93LXRoaW4tZG93bjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRDRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYXJyb3ctdGhpbi1sZWZ0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNENVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1hcnJvdy10aGluLXJpZ2h0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNENlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1hcnJvdy10aGluLXVwOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNEN1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1hcnJvdy11cDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRDhcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYXQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0RBXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWF0LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0Q5XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWJhcmNvZGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0RDXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWJhcmNvZGUtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzREJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYmFzZWJhbGw6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0RFXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWJhc2ViYWxsLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0REXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWJhc2tldGJhbGw6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0UwXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWJhc2tldGJhbGwtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzREZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYmVsbDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRTJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYmVsbC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNFMVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1ib2R5OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNFNFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1ib2R5LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0UzXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWJvbHQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0U2XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWJvbHQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRTVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYm9vazpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRThcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYm9vay1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNFN1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1ib29rbWFya3M6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0VBXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWJvb2ttYXJrcy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNFOVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1ib3g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0VDXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWJveC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNFQlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1icmllZmNhc2U6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0VFXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWJyaWVmY2FzZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNFRFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1icm93c2VyczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRjBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtYnJvd3NlcnMtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRUZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2FsY3VsYXRvcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRjJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2FsY3VsYXRvci1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNGMVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jYWxlbmRhcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRjRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2FsZW5kYXItb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRjNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2FtZXJhOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNGNlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jYW1lcmEtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRjVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2FydDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRjhcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2FydC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNGN1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jaGF0Ym94ZXM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0ZBXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNoYXRib3hlcy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNGOVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jaGF0YnViYmxlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNGQ1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jaGF0YnViYmxlLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0ZCXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNoZWNrbWFyazpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRkZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2hlY2ttYXJrLWVtcHR5OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNGRFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jaGVja21hcmstb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRkVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2lyY2xlLWZpbGxlZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MDBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2lyY2xlLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDAxXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNsb2NrOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQwM1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jbG9jay1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQwMlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jbG9zZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MDZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2xvc2UtZW1wdHk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDA0XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNsb3NlLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDA1XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNsb3VkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQwQ1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jbG91ZC1kb3dubG9hZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MDhcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2xvdWQtZG93bmxvYWQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MDdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2xvdWQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MDlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2xvdWQtdXBsb2FkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQwQlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jbG91ZC11cGxvYWQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MEFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY2xvdWR5OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQxMFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jbG91ZHktbmlnaHQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDBFXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNsb3VkeS1uaWdodC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQwRFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jbG91ZHktb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MEZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY29nOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQxMlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jb2ctb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MTFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY29sb3ItZmlsdGVyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQxNFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jb2xvci1maWx0ZXItb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MTNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY29sb3Itd2FuZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MTZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY29sb3Itd2FuZC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQxNVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jb21wb3NlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQxOFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jb21wb3NlLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDE3XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNvbnRhY3Q6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDFBXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWNvbnRhY3Qtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MTlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY29weTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MUNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtY29weS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQxQlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jcm9wOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQxRVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1jcm9wLXN0cm9uZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MURcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZG93bmxvYWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDIwXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWRvd25sb2FkLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDFGXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWRyYWc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDIxXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWVtYWlsOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQyM1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1lbWFpbC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQyMlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1leWU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDI1XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWV5ZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQyNFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1mYXN0Zm9yd2FyZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MjdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZmFzdGZvcndhcmQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MjZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZmlsaW5nOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQyOVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1maWxpbmctb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MjhcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZmlsbTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MkJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZmlsbS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQyQVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1mbGFnOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQyRFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1mbGFnLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDJDXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWZsYW1lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQyRlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1mbGFtZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQyRVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1mbGFzazpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MzFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZmxhc2stb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MzBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZmxvd2VyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQzM1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1mbG93ZXItb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MzJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZm9sZGVyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQzNVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1mb2xkZXItb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MzRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZm9vdGJhbGw6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDM3XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWZvb3RiYWxsLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDM2XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWdhbWUtY29udHJvbGxlci1hOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQzOVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1nYW1lLWNvbnRyb2xsZXItYS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQzOFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1nYW1lLWNvbnRyb2xsZXItYjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0M0JcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZ2FtZS1jb250cm9sbGVyLWItb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0M0FcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZ2VhcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0M0RcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZ2Vhci1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQzQ1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1nbGFzc2VzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQzRlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1nbGFzc2VzLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDNFXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWdyaWQtdmlldzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NDFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtZ3JpZC12aWV3LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDQwXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWhlYXJ0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ0M1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1oZWFydC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ0MlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1oZWxwOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ0NlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1oZWxwLWVtcHR5OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ0NFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1oZWxwLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDQ1XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWhvbWU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDQ4XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWhvbWUtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NDdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtaW5maW5pdGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDRBXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWluZmluaXRlLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDQ5XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLWluZm9ybWF0aW9uOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ0RFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1pbmZvcm1hdGlvbi1lbXB0eTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NEJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtaW5mb3JtYXRpb24tb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NENcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtaW9uaWMtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NEVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3Mta2V5cGFkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ1MFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1rZXlwYWQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NEZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbGlnaHRidWxiOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ1MlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1saWdodGJ1bGItb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NTFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbGlzdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NTRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbGlzdC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ1M1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1sb2NhdGlvbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NTZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbG9jYXRpb24tb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NTVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbG9ja2VkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ1OFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1sb2NrZWQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NTdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbG9vcDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NUFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbG9vcC1zdHJvbmc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDU5XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLW1lZGljYWw6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDVDXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLW1lZGljYWwtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NUJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbWVka2l0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ1RVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1tZWRraXQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NURcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbWljOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ2MVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1taWMtb2ZmOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ1RlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1taWMtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NjBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbWludXM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDY0XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLW1pbnVzLWVtcHR5OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ2MlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1taW51cy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ2M1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1tb25pdG9yOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ2NlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1tb25pdG9yLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDY1XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLW1vb246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDY4XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLW1vb24tb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NjdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbW9yZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NkFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtbW9yZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ2OVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1tdXNpY2FsLW5vdGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDZCXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLW11c2ljYWwtbm90ZXM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDZDXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLW5hdmlnYXRlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ2RVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1uYXZpZ2F0ZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ2RFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1udXRyaXRpb246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDcwXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLW51dHJpdGlvbi1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ2RlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1wYXBlcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NzJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcGFwZXItb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NzFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcGFwZXJwbGFuZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NzRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcGFwZXJwbGFuZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ3M1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1wYXJ0bHlzdW5ueTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NzZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcGFydGx5c3Vubnktb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NzVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcGF1c2U6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDc4XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXBhdXNlLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDc3XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXBhdzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0N0FcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcGF3LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDc5XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXBlb3BsZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0N0NcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcGVvcGxlLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDdCXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXBlcnNvbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0N0VcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcGVyc29uLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDdEXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXBlcnNvbmFkZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0ODBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcGVyc29uYWRkLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDdGXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXBob3RvczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0ODJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcGhvdG9zLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDgxXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXBpZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0ODRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcGllLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDgzXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXBpbnQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDg2XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXBpbnQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0ODVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcGxheTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0ODhcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcGxheS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ4N1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1wbHVzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ4QlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1wbHVzLWVtcHR5OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ4OVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1wbHVzLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDhBXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXByaWNldGFnOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ4RFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1wcmljZXRhZy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ4Q1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1wcmljZXRhZ3M6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDhGXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXByaWNldGFncy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ4RVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1wcmludGVyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ5MVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1wcmludGVyLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDkwXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXB1bHNlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ5M1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1wdWxzZS1zdHJvbmc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDkyXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXJhaW55OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ5NVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1yYWlueS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ5NFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1yZWNvcmRpbmc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDk3XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXJlY29yZGluZy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ5NlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1yZWRvOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ5OVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1yZWRvLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDk4XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXJlZnJlc2g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDlDXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXJlZnJlc2gtZW1wdHk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDlBXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXJlZnJlc2gtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0OUJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcmVsb2FkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ5RFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1yZXZlcnNlLWNhbWVyYTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0OUZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcmV2ZXJzZS1jYW1lcmEtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0OUVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtcmV3aW5kOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRBMVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1yZXdpbmQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QTBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3Mtcm9zZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QTNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3Mtcm9zZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRBMlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1zZWFyY2g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEE1XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXNlYXJjaC1zdHJvbmc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEE0XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXNldHRpbmdzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRBN1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1zZXR0aW5ncy1zdHJvbmc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEE2XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXNodWZmbGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEE5XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXNodWZmbGUtc3Ryb25nOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRBOFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1za2lwYmFja3dhcmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEFCXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXNraXBiYWNrd2FyZC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRBQVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1za2lwZm9yd2FyZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QURcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3Mtc2tpcGZvcndhcmQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QUNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3Mtc25vd3k6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEFFXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXNwZWVkb21ldGVyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRCMFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1zcGVlZG9tZXRlci1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRBRlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1zdGFyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRCM1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1zdGFyLWhhbGY6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEIxXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXN0YXItb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QjJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3Mtc3RvcHdhdGNoOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRCNVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy1zdG9wd2F0Y2gtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QjRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3Mtc3Vubnk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEI3XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXN1bm55LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEI2XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXRlbGVwaG9uZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QjlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtdGVsZXBob25lLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEI4XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXRlbm5pc2JhbGw6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEJCXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXRlbm5pc2JhbGwtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QkFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtdGh1bmRlcnN0b3JtOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRCRFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy10aHVuZGVyc3Rvcm0tb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QkNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtdGltZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QkZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtdGltZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRCRVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy10aW1lcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QzFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtdGltZXItb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QzBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtdG9nZ2xlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRDM1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy10b2dnbGUtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QzJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtdHJhc2g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEM1XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXRyYXNoLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEM0XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXVuZG86YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEM3XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXVuZG8tb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QzZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtdW5sb2NrZWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEM5XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXVubG9ja2VkLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEM4XFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXVwbG9hZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0Q0JcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3MtdXBsb2FkLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNENBXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXZpZGVvY2FtOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRDRFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy12aWRlb2NhbS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRDQ1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy12b2x1bWUtaGlnaDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0Q0VcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3Mtdm9sdW1lLWxvdzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0Q0ZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3Mtd2luZWdsYXNzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjREMVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWlvcy13aW5lZ2xhc3Mtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RDBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pb3Mtd29ybGQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEQzXFxcIjsgfVxcclxcblxcclxcbi5pb24taW9zLXdvcmxkLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEQyXFxcIjsgfVxcclxcblxcclxcbi5pb24taXBhZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxRjlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1pcGhvbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMUZBXFxcIjsgfVxcclxcblxcclxcbi5pb24taXBvZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxRkJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1qZXQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjk1XFxcIjsgfVxcclxcblxcclxcbi5pb24ta2V5OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI5NlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWtuaWZlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI5N1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWxhcHRvcDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxRkNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1sZWFmOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjFGRFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWxldmVsczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyOThcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1saWdodGJ1bGI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjk5XFxcIjsgfVxcclxcblxcclxcbi5pb24tbGluazpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxRkVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1sb2FkLWE6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjlBXFxcIjsgfVxcclxcblxcclxcbi5pb24tbG9hZC1iOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI5QlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWxvYWQtYzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyOUNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1sb2FkLWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjlEXFxcIjsgfVxcclxcblxcclxcbi5pb24tbG9jYXRpb246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMUZGXFxcIjsgfVxcclxcblxcclxcbi5pb24tbG9jay1jb21iaW5hdGlvbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RDRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1sb2NrZWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjAwXFxcIjsgfVxcclxcblxcclxcbi5pb24tbG9nLWluOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI5RVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLWxvZy1vdXQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjlGXFxcIjsgfVxcclxcblxcclxcbi5pb24tbG9vcDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMDFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1tYWduZXQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkEwXFxcIjsgfVxcclxcblxcclxcbi5pb24tbWFsZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQTFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1tYW46YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjAyXFxcIjsgfVxcclxcblxcclxcbi5pb24tbWFwOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIwM1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLW1lZGtpdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQTJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1tZXJnZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzM0ZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1taWMtYTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMDRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1taWMtYjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMDVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1taWMtYzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMDZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1taW51czpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMDlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1taW51cy1jaXJjbGVkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIwN1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLW1pbnVzLXJvdW5kOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIwOFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLW1vZGVsLXM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkMxXFxcIjsgfVxcclxcblxcclxcbi5pb24tbW9uaXRvcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMEFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1tb3JlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIwQlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLW1vdXNlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM0MFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLW11c2ljLW5vdGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjBDXFxcIjsgfVxcclxcblxcclxcbi5pb24tbmF2aWNvbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMEVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1uYXZpY29uLXJvdW5kOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIwRFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLW5hdmlnYXRlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJBM1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLW5ldHdvcms6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzQxXFxcIjsgfVxcclxcblxcclxcbi5pb24tbm8tc21va2luZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQzJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1udWNsZWFyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJBNFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLW91dGxldDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNDJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1wYWludGJydXNoOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRENVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXBhaW50YnVja2V0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRENlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXBhcGVyLWFpcnBsYW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJDM1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXBhcGVyY2xpcDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMEZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1wYXVzZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMTBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1wZXJzb246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjEzXFxcIjsgfVxcclxcblxcclxcbi5pb24tcGVyc29uLWFkZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMTFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1wZXJzb24tc3RhbGtlcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMTJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1waWUtZ3JhcGg6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkE1XFxcIjsgfVxcclxcblxcclxcbi5pb24tcGluOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJBNlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXBpbnBvaW50OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJBN1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXBpenphOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJBOFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXBsYW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIxNFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXBsYW5ldDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNDNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1wbGF5OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIxNVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXBsYXlzdGF0aW9uOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjMwQVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXBsdXM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjE4XFxcIjsgfVxcclxcblxcclxcbi5pb24tcGx1cy1jaXJjbGVkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIxNlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXBsdXMtcm91bmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjE3XFxcIjsgfVxcclxcblxcclxcbi5pb24tcG9kaXVtOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM0NFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXBvdW5kOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIxOVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXBvd2VyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJBOVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXByaWNldGFnOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJBQVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXByaWNldGFnczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQUJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1wcmludGVyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIxQVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXB1bGwtcmVxdWVzdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNDVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1xci1zY2FubmVyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM0NlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXF1b3RlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM0N1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXJhZGlvLXdhdmVzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJBQ1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXJlY29yZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMUJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1yZWZyZXNoOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIxQ1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXJlcGx5OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIxRVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXJlcGx5LWFsbDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMURcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1yaWJib24tYTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNDhcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1yaWJib24tYjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNDlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zYWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzRBXFxcIjsgfVxcclxcblxcclxcbi5pb24tc2FkLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEQ3XFxcIjsgfVxcclxcblxcclxcbi5pb24tc2Npc3NvcnM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzRCXFxcIjsgfVxcclxcblxcclxcbi5pb24tc2VhcmNoOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIxRlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNldHRpbmdzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJBRFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNoYXJlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIyMFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNodWZmbGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjIxXFxcIjsgfVxcclxcblxcclxcbi5pb24tc2tpcC1iYWNrd2FyZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMjJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1za2lwLWZvcndhcmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjIzXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWFuZHJvaWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjI1XFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWFuZHJvaWQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMjRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtYW5ndWxhcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RDlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtYW5ndWxhci1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjREOFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1hcHBsZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMjdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtYXBwbGUtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMjZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtYml0Y29pbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQUZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtYml0Y29pbi1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJBRVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1idWZmZXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjI5XFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWJ1ZmZlci1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIyOFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1jaHJvbWU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNERCXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWNocm9tZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjREQVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1jb2RlcGVuOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRERFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1jb2RlcGVuLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNERDXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWNzczM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNERGXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWNzczMtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0REVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtZGVzaWduZXJuZXdzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIyQlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1kZXNpZ25lcm5ld3Mtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMkFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtZHJpYmJibGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjJEXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWRyaWJiYmxlLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjJDXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWRyb3Bib3g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjJGXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWRyb3Bib3gtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMkVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtZXVybzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RTFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtZXVyby1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRFMFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1mYWNlYm9vazpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMzFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtZmFjZWJvb2stb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMzBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtZm91cnNxdWFyZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNERcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtZm91cnNxdWFyZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM0Q1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1mcmVlYnNkLWRldmlsOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJDNFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1naXRodWI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjMzXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWdpdGh1Yi1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIzMlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1nb29nbGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzRGXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWdvb2dsZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM0RVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1nb29nbGVwbHVzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIzNVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1nb29nbGVwbHVzLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjM0XFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWhhY2tlcm5ld3M6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjM3XFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWhhY2tlcm5ld3Mtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMzZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtaHRtbDU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEUzXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWh0bWw1LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEUyXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWluc3RhZ3JhbTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNTFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtaW5zdGFncmFtLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzUwXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWphdmFzY3JpcHQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEU1XFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWphdmFzY3JpcHQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RTRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtbGlua2VkaW46YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjM5XFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLWxpbmtlZGluLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjM4XFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLW1hcmtkb3duOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRFNlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1ub2RlanM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEU3XFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLW9jdG9jYXQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEU4XFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXBpbnRlcmVzdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQjFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtcGludGVyZXN0LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkIwXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXB5dGhvbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RTlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtcmVkZGl0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIzQlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1yZWRkaXQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyM0FcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtcnNzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIzRFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1yc3Mtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyM0NcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtc2FzczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RUFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtc2t5cGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjNGXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXNreXBlLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjNFXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXNuYXBjaGF0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRFQ1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC1zbmFwY2hhdC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRFQlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC10dW1ibHI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjQxXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXR1bWJsci1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI0MFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC10dXg6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkM1XFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXR3aXRjaDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RUVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtdHdpdGNoLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEVEXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXR3aXR0ZXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjQzXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXR3aXR0ZXItb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNDJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtdXNkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM1M1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC11c2Qtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNTJcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtdmltZW86YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjQ1XFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXZpbWVvLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjQ0XFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXdoYXRzYXBwOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRGMFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC13aGF0c2FwcC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRFRlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC13aW5kb3dzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI0N1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC13aW5kb3dzLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjQ2XFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXdvcmRwcmVzczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNDlcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zb2NpYWwtd29yZHByZXNzLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjQ4XFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXlhaG9vOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI0QlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC15YWhvby1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI0QVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC15ZW46YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEYyXFxcIjsgfVxcclxcblxcclxcbi5pb24tc29jaWFsLXllbi1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRGMVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC15b3V0dWJlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI0RFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXNvY2lhbC15b3V0dWJlLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjRDXFxcIjsgfVxcclxcblxcclxcbi5pb24tc291cC1jYW46YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEY0XFxcIjsgfVxcclxcblxcclxcbi5pb24tc291cC1jYW4tb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RjNcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zcGVha2VycGhvbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkIyXFxcIjsgfVxcclxcblxcclxcbi5pb24tc3BlZWRvbWV0ZXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkIzXFxcIjsgfVxcclxcblxcclxcbi5pb24tc3Bvb246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkI0XFxcIjsgfVxcclxcblxcclxcbi5pb24tc3RhcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNEVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi1zdGF0cy1iYXJzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJCNVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXN0ZWFtOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjMwQlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXN0b3A6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjRGXFxcIjsgfVxcclxcblxcclxcbi5pb24tdGhlcm1vbWV0ZXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkI2XFxcIjsgfVxcclxcblxcclxcbi5pb24tdGh1bWJzZG93bjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNTBcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi10aHVtYnN1cDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNTFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi10b2dnbGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzU1XFxcIjsgfVxcclxcblxcclxcbi5pb24tdG9nZ2xlLWZpbGxlZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNTRcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi10cmFuc2dlbmRlcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RjVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi10cmFzaC1hOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI1MlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXRyYXNoLWI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjUzXFxcIjsgfVxcclxcblxcclxcbi5pb24tdHJvcGh5OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM1NlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXRzaGlydDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RjdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi10c2hpcnQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RjZcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi11bWJyZWxsYTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQjdcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi11bml2ZXJzaXR5OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM1N1xcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXVubG9ja2VkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI1NFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXVwbG9hZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNTVcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi11c2I6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkI4XFxcIjsgfVxcclxcblxcclxcbi5pb24tdmlkZW9jYW1lcmE6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjU2XFxcIjsgfVxcclxcblxcclxcbi5pb24tdm9sdW1lLWhpZ2g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjU3XFxcIjsgfVxcclxcblxcclxcbi5pb24tdm9sdW1lLWxvdzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNThcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi12b2x1bWUtbWVkaXVtOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI1OVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXZvbHVtZS1tdXRlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI1QVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXdhbmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzU4XFxcIjsgfVxcclxcblxcclxcbi5pb24td2F0ZXJkcm9wOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI1QlxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXdpZmk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjVDXFxcIjsgfVxcclxcblxcclxcbi5pb24td2luZWdsYXNzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJCOVxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXdvbWFuOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI1RFxcXCI7IH1cXHJcXG5cXHJcXG4uaW9uLXdyZW5jaDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQkFcXFwiOyB9XFxyXFxuXFxyXFxuLmlvbi14Ym94OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjMwQ1xcXCI7IH1cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICA7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vZm9udHMvaW9uaWNvbnMuY3NzJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJpbXBvcnQgVnVlIGZyb20gJ25hdGl2ZXNjcmlwdC12dWUnXHJcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJ1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuL3ZpZXdzL0hvbWUudnVlJ1xyXG5pbXBvcnQgVnVlRGV2dG9vbHMgZnJvbSAnbmF0aXZlc2NyaXB0LXZ1ZS1kZXZ0b29scydcclxuaW1wb3J0IFJhZExpc3RWaWV3IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1saXN0dmlldy92dWUnXHJcblxyXG5WdWUudXNlKFJhZExpc3RWaWV3KVxyXG5WdWUucmVnaXN0ZXJFbGVtZW50KCdCYXJjb2RlU2Nhbm5lcicsICgpID0+IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC1iYXJjb2Rlc2Nhbm5lcicpLkJhcmNvZGVTY2FubmVyVmlldylcclxuXHJcbi8vZm9udGljb24gcGx1Z2luXHJcbmltcG9ydCB7IFROU0ZvbnRJY29uLCBmb250aWNvbiB9IGZyb20gJ25hdGl2ZXNjcmlwdC1mb250aWNvbic7XHJcblROU0ZvbnRJY29uLmRlYnVnID0gZmFsc2U7XHJcblROU0ZvbnRJY29uLnBhdGhzID0ge1xyXG4gICdmYSc6ICcuL2ZvbnRzL2ZvbnQtYXdlc29tZS5jc3MnLFxyXG4gICdpb24nOiAnLi9mb250cy9pb25pY29ucy5jc3MnLFxyXG59O1xyXG5UTlNGb250SWNvbi5sb2FkQ3NzKCk7XHJcblZ1ZS5maWx0ZXIoJ2ZvbnRpY29uJywgZm9udGljb24pO1xyXG5cclxuXHJcbmlmIChUTlNfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICBWdWUudXNlKFZ1ZURldnRvb2xzKVxyXG59XHJcbi8vIFByaW50cyBWdWUgbG9ncyB3aGVuIC0tZW52LnByb2R1Y3Rpb24gaXMgKk5PVCogc2V0IHdoaWxlIGJ1aWxkaW5nXHJcblZ1ZS5jb25maWcuc2lsZW50ID0gKFROU19FTlYgPT09ICdwcm9kdWN0aW9uJylcclxuXHJcblxyXG5uZXcgVnVlKHtcclxuICBzdG9yZSxcclxuICByZW5kZXI6IGggPT4gaCgnZnJhbWUnLCBbaChIb21lKV0pXHJcbn0pLiRzdGFydCgpXHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcclxuXHJcbiAgICAvLyBjb25zdHJ1Y3Rvcih7YW5pbWFsX2lkLCBhbmltYWxfbmFtZSwgYW5pbWFsX3R5cGUsIHNleCwgYWdlLCBET0IsIHByaW1hcnlfY29sb3IsIHNlY29uZGFyeV9jb2xvciwgYnJlZWRfZ3JvdXAsIHByaW1hcnlfYnJlZWQsIHNlY29uZGFyeV9icmVlZCwgYW5pbWFsX3N0YXQsIHN0YW1wICB9KSB7XHJcbiAgICAvLyAgICAgdGhpcy5hbmltYWxfaWQgPSBhbmltYWxfaWRcclxuICAgIC8vICAgICB0aGlzLmFuaW1hbF9uYW1lID0gYW5pbWFsX25hbWVcclxuICAgIC8vICAgICB0aGlzLmFuaW1hbF90eXBlID0gYW5pbWFsX3R5cGVcclxuICAgIC8vICAgICB0aGlzLnNleCA9IHNleFxyXG4gICAgLy8gICAgIHRoaXMuYWdlID0gYWdlXHJcbiAgICAvLyAgICAgdGhpcy5ET0IgPSBudURPQmxsXHJcbiAgICAvLyAgICAgdGhpcy5wcmltYXJ5X2NvbG9yID0gcHJpbWFyeV9jb2xvclxyXG4gICAgLy8gICAgIHRoaXMuc2Vjb25kYXJ5X2NvbG9yID0gc2Vjb25kYXJ5X2NvbG9yXHJcbiAgICAvLyAgICAgdGhpcy5icmVlZF9ncm91cCA9IGJyZWVkX2dyb3VwXHJcbiAgICAvLyAgICAgdGhpcy5wcmltYXJ5X2JyZWVkID0gcHJpbWFyeV9icmVlZFxyXG4gICAgLy8gICAgIHRoaXMuc2Vjb25kYXJ5X2JyZWVkID0gc2Vjb25kYXJ5X2JyZWVkXHJcbiAgICAvLyAgICAgdGhpcy5hbmltYWxfc3RhdCA9IGFuaW1hbF9zdGF0XHJcbiAgICAvLyAgICAgdGhpcy5zdGFtcCA9IHN0YW1wXHJcbiAgICAvLyB9XHJcblxyXG5cclxuICAgIC8vIGNhdGVnb3J5OiBcIkRvZ1wiLFxyXG4gICAgLy8gY2F0ZWdvcnlUYWc6IFwiIzI3QUU2MFwiLFxyXG4gICAgLy8gYnJlZWRfZ3JvdXA6IFwiSG91bmRcIixcclxuICAgIC8vIHByaW1hcnlfYnJlZWQ6IFwiQmVhZ2xlXCIsXHJcbiAgICAvLyBhZ2U6IFwiMTBcIixcclxuICAgIC8vIGdlbmRlcjogXCJNXCIsXHJcbiAgICAvLyBhbmltYWxfc2l6ZTogXCJTbWFsbFwiLFxyXG4gICAgLy8gcHJpbWFyeV9jb2xvcjogXCJUYW5cIixcclxuICAgIC8vIGxvY2F0aW9uOiBcIkRvd25leVwiLFxyXG4gICAgLy8gaXNBdmFpbGFibGU6IGZhbHNlLFxyXG4gICAgLy8gaXNGYXZvcml0ZTogdHJ1ZSxcclxuICAgIC8vIGNvbW1lbnRzOiAxMSxcclxuICAgIC8vIHJhdGluZzogXCI0LjBcIixcclxuICAgIC8vIGRlc2NyaXB0aW9uOiBcImFcIlxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xyXG4gIGNvbnN0cnVjdG9yIChxdWVzdGlvbikge1xyXG4gICAgdGhpcy5pZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMDApXHJcbiAgICB0aGlzLnF1ZXN0aW9uID0gcXVlc3Rpb25cclxuICAgIHRoaXMuYW5zd2VyID0gbnVsbFxyXG4gICAgdGhpcy5jb3VudCA9IDBcclxuICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyB7XHJcblxyXG4gIGNvbnN0cnVjdG9yICgpIHtcclxuICAgIHRoaXMubG9jYXRpb24gPSAndGVtcCdcclxuICB9XHJcblxyXG4gIHNldExvY2F0aW9uIChxckNvZGUpIHtcclxuICAgIHRoaXMubG9jYXRpb24gPSBxckNvZGVcclxuICB9XHJcblxyXG4gIHNldFRpY2tldEluZm8gKHsgcGhvbmUsIG5hbWUsIHF1ZXJ5IH0pIHtcclxuICAgIHRoaXMucGhvbmUgPSBwaG9uZVxyXG4gICAgdGhpcy5uYW1lID0gbmFtZVxyXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XHJcbiAgICB0aGlzLnRpbWVJbiA9IG5ldyBEYXRlKClcclxuICB9XHJcblxyXG59XHJcbiIsImNvbnN0IGh0dHBNb2R1bGUgPSByZXF1aXJlKCd0bnMtY29yZS1tb2R1bGVzL2h0dHAnKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZ2V0QW5pbWFscygpIHtcclxuICAgICAgICByZXR1cm4gaHR0cE1vZHVsZS5nZXRKU09OKGBodHRwczovL2FjdWFzZXJ2ZXIuaGVyb2t1YXBwLmNvbS9hbmltYWxzYClcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiIsImltcG9ydCB7IGZhcXMgfSBmcm9tICdAL2RiL2ZhcXMuanNvbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBnZXRGYXFzICgpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHJlc29sdmUoZmFxcylcclxuICAgICAgfSwgMTApXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgYWRkRmFxIChlbnRyeSkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgcmVzb2x2ZShlbnRyeSlcclxuICAgICAgfSwgMTApXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG4iLCIvLyBpbXBvcnQgeyB0aWNrZXRzIH0gZnJvbSAnQC9kYi9mYXFzLmpzb24nXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgLy8gZ2V0VGlja2V0cyAoKSB7XHJcbiAgLy8gICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gIC8vICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAvLyAgICAgICByZXNvbHZlKHsgZGF0YTogdGlja2V0cyB9KVxyXG4gIC8vICAgICB9LCAxMClcclxuICAvLyAgIH0pXHJcbiAgLy8gfSxcclxuICBhZGRUaWNrZXQgKGVudHJ5KSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICByZXNvbHZlKGVudHJ5KVxyXG4gICAgICB9LCAxMClcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbiIsImNvbnN0IGh0dHBNb2R1bGUgPSByZXF1aXJlKCd0bnMtY29yZS1tb2R1bGVzL2h0dHAnKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGdldEZhcXMgKCkge1xyXG4gICAgcmV0dXJuIGh0dHBNb2R1bGUuZ2V0SlNPTignaHR0cDovL2xvY2FsaG9zdDozMDAwL2ZhcXMnKVxyXG4gIH0sXHJcbiAgYWRkRmFxIChmYXEpIHtcclxuICAgIHJldHVybiBodHRwTW9kdWxlLnJlcXVlc3Qoe1xyXG4gICAgICAvLyB1cmw6IGBodHRwczovL2FjdWEtc2VydmVyLmhlcm9rdWFwcC5jb20vZmFxc2AsXHJcbiAgICAgIC8vIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCcsXHJcbiAgICAgIHVybDogJ2h0dHBzOi8vYWN1YXNlcnZlci5oZXJva3VhcHAuY29tL3RpY2tldHMnLFxyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICBjb250ZW50OiBKU09OLnN0cmluZ2lmeShmYXEpXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG4iLCJjb25zdCBodHRwTW9kdWxlID0gcmVxdWlyZSgndG5zLWNvcmUtbW9kdWxlcy9odHRwJylcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBhZGRUaWNrZXQgKHRpY2tldCkge1xyXG4gICAgcmV0dXJuIGh0dHBNb2R1bGUucmVxdWVzdCh7XHJcbiAgICAgIC8vIHVybDogYGh0dHA6Ly9bOjoxXTozMDAwL3RpY2tldHNgLFxyXG4gICAgICAvLyB1cmw6YGh0dHBzOi8vYWN1YXRlYW0uaGVyb2t1YXBwLmNvbS90aWNrZXRzYCxcclxuICAgICAgdXJsOiAnaHR0cHM6Ly9hY3Vhc2VydmVyLmhlcm9rdWFwcC5jb20vdGlja2V0cycsXHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgIGNvbnRlbnQ6IEpTT04uc3RyaW5naWZ5KHRpY2tldClcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgY2hlY2tUaWNrZXQgKHRpY2tldElkKSB7XHJcbiAgICByZXR1cm4gaHR0cE1vZHVsZS5nZXRKU09OKFxyXG4gICAgICAgIGBodHRwOi8vWzo6MV06MzAwMC90aWNrZXRzLyR7dGlja2V0SWR9YFxyXG4gICAgICAgIC8vIGBodHRwczovL2FjdWF0ZWFtLmhlcm9rdWFwcC5jb20vdGlja2V0cy8ke3RpY2tldElkfWBcclxuXHJcbiAgKX1cclxufVxyXG4iLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuaW1wb3J0IFZ1ZXggZnJvbSAndnVleCdcclxuaW1wb3J0IEFuaW1hbCBmcm9tICdAL21vZGVscy9BbmltYWwnXHJcbmltcG9ydCBUaWNrZXQgZnJvbSAnQC9tb2RlbHMvVGlja2V0J1xyXG5pbXBvcnQgVGlja2V0U2VydmljZSBmcm9tICdAL3NlcnZpY2VzL1RpY2tldFNlcnZpY2UnXHJcbmltcG9ydCBGYXFTZXJ2aWNlIGZyb20gJ0Avc2VydmljZXMvRmFxU2VydmljZSdcclxuLy8gaW1wb3J0IFRpY2tldFNlcnZpY2UgZnJvbSAnQC9zZXJ2aWNlcy9GYWtlVGlja2V0U2VydmljZSdcclxuLy8gaW1wb3J0IEZhcVNlcnZpY2UgZnJvbSAnQC9zZXJ2aWNlcy9GYWtlRmFxU2VydmljZSdcclxuXHJcblZ1ZS51c2UoVnVleClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBWdWV4LlN0b3JlKHtcclxuICBzdGF0ZToge1xyXG4gICAgYW5pbWFsczogW10sXHJcbiAgICB0aWNrZXRzOiBbXSxcclxuICAgIGZhcXM6IFtdLFxyXG4gICAgdXNlckFuaW1hbDogbmV3IEFuaW1hbCgpLFxyXG4gICAgdXNlckZhcToge30sXHJcbiAgICBsb2NhdGlvbjogJ0Rvd25leScsXHJcbiAgICB1c2VyVGlja2V0OiBuZXcgVGlja2V0KCksXHJcbiAgICBhcHByb3ZlZFRpY2tldDogdW5kZWZpbmVkXHJcbiAgfSxcclxuICAvLyBjaGFuZ2UgdGhlIHN0YXRlIG9mIHRoZSBhcHAgKG11c3QgYmUgc3luY2hyb25vdXMpXHJcbiAgbXV0YXRpb25zOiB7XHJcbiAgICAvLyBhZG9wdGlvblxyXG4gICAgc3RvcmVBbmltYWwoc3RhdGUsIGFuaW1hbCkge1xyXG4gICAgICBzdGF0ZS51c2VyRmFxID0gYW5pbWFsXHJcbiAgICB9LFxyXG4gICAgQUREX0FOSU1BTChzdGF0ZSwgYW5pbWFsKSB7XHJcbiAgICAgIHN0YXRlLmFuaW1hbHMucHVzaChhbmltYWwpXHJcbiAgICB9LFxyXG4gICAgc3RvcmVGYXEoc3RhdGUsIGZhcSkge1xyXG4gICAgICBzdGF0ZS51c2VyRmFxID0gZmFxXHJcbiAgICB9LFxyXG4gICAgc2V0VGlja2V0TG9jYXRpb24gKHN0YXRlLCBsb2NhdGlvbikge1xyXG4gICAgICBzdGF0ZS5sb2NhdGlvbiA9IGxvY2F0aW9uXHJcbiAgICB9LFxyXG4gICAgc2V0VGlja2V0SW5mbyAoc3RhdGUsIHVzZXJJbnB1dCkge1xyXG4gICAgICBzdGF0ZS51c2VyVGlja2V0LnNldFRpY2tldEluZm8odXNlcklucHV0KVxyXG4gICAgfSxcclxuICAgIHN0b3JlVGlja2V0IChzdGF0ZSwgdGlja2V0KSB7XHJcbiAgICAgIHN0YXRlLnVzZXJUaWNrZXQgPSB0aWNrZXRcclxuICAgIH0sXHJcbiAgICBTRVRfVElDS0VUIChzdGF0ZSwgdGlja2V0KSB7XHJcbiAgICAgIHN0YXRlLmFwcHJvdmVkVGlja2V0ID0gdGlja2V0XHJcbiAgICB9LFxyXG4gICAgQUREX1RJQ0tFVCAoc3RhdGUsIHRpY2tldCkge1xyXG4gICAgICBzdGF0ZS5hcHByb3ZlZFRpY2tldCA9IHRpY2tldFxyXG4gICAgfSxcclxuICAgIFNFVF9GQVFTIChzdGF0ZSwgZmFxcykge1xyXG4gICAgICBzdGF0ZS5mYXFzID0gZmFxc1xyXG4gICAgfSxcclxuICAgIEFERF9GQVEgKHN0YXRlLCBmYXEpIHtcclxuICAgICAgc3RhdGUuZmFxcy5wdXNoKGZhcSlcclxuICAgIH1cclxuICAgIFxyXG5cclxuICB9LFxyXG4gIC8vIGFzeW5jaHJvbm91cyBvcGVyYXRpb25zIChTdWNoIGFzIEFQSSBjYWxscylcclxuICBhY3Rpb25zOiB7XHJcbiAgICBjaGVja1RpY2tldCAoeyBjb21taXQgfSwgdGlja2V0SWQpIHtcclxuICAgICAgVGlja2V0U2VydmljZS5jaGVja1RpY2tldCh0aWNrZXRJZClcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgY29tbWl0KCdTRVRfVElDS0VUJywgcmVzKVxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgYWRkVGlja2V0ICh7IGNvbW1pdCB9LCB0aWNrZXQpIHtcclxuICAgICAgVGlja2V0U2VydmljZS5hZGRUaWNrZXQodGlja2V0KVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICBjb21taXQoJ0FERF9USUNLRVQnLCByZXMuY29udGVudC50b0pTT04oKSlcclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuICAgIGxvYWRGYXFzICh7IGNvbW1pdCB9KSB7XHJcbiAgICAgIEZhcVNlcnZpY2UuZ2V0RmFxcygpXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIGNvbW1pdCgnU0VUX0ZBUVMnLCByZXMpXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBhZGRGYXEgKHsgY29tbWl0IH0sIGZhcSkge1xyXG4gICAgICBGYXFTZXJ2aWNlLmFkZEZhcShmYXEpXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIGNvbW1pdCgnQUREX0ZBUScsIHJlcy5jb250ZW50LnRvSlNPTigpKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBnZXR0ZXJzOiB7XHJcbiAgICBnZXRTZWFyY2hSZXN1bHRzOiBzdGF0ZSA9PiBzZWFyY2ggPT4ge1xyXG4gICAgICBpZiAoc2VhcmNoID09PSAnJylcclxuICAgICAgICByZXR1cm4gc3RhdGUuZmFxc1xyXG4gICAgICBcclxuICAgICAgY29uc3Qgd29yZHMgPSBzZWFyY2guc3BsaXQoJyAnKVxyXG4gICAgICBcclxuICAgICAgcmV0dXJuIHN0YXRlLmZhcXMuZmlsdGVyKGZhcSA9PiB3b3Jkcy5zb21lKFxyXG4gICAgICAgIHdvcmQgPT4gZmFxLnF1ZXJ5LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMod29yZC50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICAgIHx8IGZhcS5hbnN3ZXIudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh3b3JkLnRvTG93ZXJDYXNlKCkpKSlcclxuICAgIH1cclxuICB9XHJcbn0pXHJcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQWRvcHRpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWIxNTEwNGYyJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0Fkb3B0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQWRvcHRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0Fkb3B0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvanRyYW4vRGVza3RvcC9hY3VhVl8yL2FjdWEtbW9iaWxlL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2IxNTEwNGYyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2IxNTEwNGYyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2IxNTEwNGYyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BZG9wdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YjE1MTA0ZjImXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYjE1MTA0ZjInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZpZXdzL0Fkb3B0aW9uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BZG9wdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BZG9wdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Fkb3B0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Fkb3B0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Fkb3B0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iMTUxMDRmMiZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRmFxLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lMzlkMTA5MiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9GYXEudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9GYXEudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0ZhcS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1lMzlkMTA5MiZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImUzOWQxMDkyXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2p0cmFuL0Rlc2t0b3AvYWN1YVZfMi9hY3VhLW1vYmlsZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdlMzlkMTA5MicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdlMzlkMTA5MicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdlMzlkMTA5MicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRmFxLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lMzlkMTA5MiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdlMzlkMTA5MicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmlld3MvRmFxLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GYXEudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmFxLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZhcS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1lMzlkMTA5MiZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZhcS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1lMzlkMTA5MiZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmFxLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lMzlkMTA5MiZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vSG9tZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmYyYmU3ZTQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MmYyYmU3ZTQmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIyZjJiZTdlNFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9qdHJhbi9EZXNrdG9wL2FjdWFWXzIvYWN1YS1tb2JpbGUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMmYyYmU3ZTQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMmYyYmU3ZTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMmYyYmU3ZTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJmMmJlN2U0JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzJmMmJlN2U0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2aWV3cy9Ib21lLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yZjJiZTdlNCZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MmYyYmU3ZTQmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJmMmJlN2U0JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Mb2NhdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2U1OTc4NjQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTG9jYXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Mb2NhdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vTG9jYXRpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2U1OTc4NjQmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIzZTU5Nzg2NFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9qdHJhbi9EZXNrdG9wL2FjdWFWXzIvYWN1YS1tb2JpbGUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnM2U1OTc4NjQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnM2U1OTc4NjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnM2U1OTc4NjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0xvY2F0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zZTU5Nzg2NCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczZTU5Nzg2NCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmlld3MvTG9jYXRpb24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvY2F0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvY2F0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvY2F0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNlNTk3ODY0JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9jYXRpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2U1OTc4NjQmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvY2F0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zZTU5Nzg2NCZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU2VydmljZVJlcXVlc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNjY2VjZjA5JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1NlcnZpY2VSZXF1ZXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU2VydmljZVJlcXVlc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1NlcnZpY2VSZXF1ZXN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNjY2VjZjA5JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIzY2NlY2YwOVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9qdHJhbi9EZXNrdG9wL2FjdWFWXzIvYWN1YS1tb2JpbGUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnM2NjZWNmMDknKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnM2NjZWNmMDknLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnM2NjZWNmMDknLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1NlcnZpY2VSZXF1ZXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zY2NlY2YwOSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczY2NlY2YwOScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmlld3MvU2VydmljZVJlcXVlc3QudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NlcnZpY2VSZXF1ZXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NlcnZpY2VSZXF1ZXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2VydmljZVJlcXVlc3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2NjZWNmMDkmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2VydmljZVJlcXVlc3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2NjZWNmMDkmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2VydmljZVJlcXVlc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNjY2VjZjA5JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9UaWNrZXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA3YjQwYzBhJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1RpY2tldC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1RpY2tldC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vVGlja2V0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTA3YjQwYzBhJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIwN2I0MGMwYVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9qdHJhbi9EZXNrdG9wL2FjdWFWXzIvYWN1YS1tb2JpbGUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMDdiNDBjMGEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMDdiNDBjMGEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMDdiNDBjMGEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1RpY2tldC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDdiNDBjMGEmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMDdiNDBjMGEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZpZXdzL1RpY2tldC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGlja2V0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RpY2tldC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RpY2tldC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wN2I0MGMwYSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UaWNrZXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDdiNDBjMGEmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGlja2V0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wN2I0MGMwYSZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVGlja2V0Rm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmE4YmZmNWYmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVGlja2V0Rm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1RpY2tldEZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI2YThiZmY1ZlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9qdHJhbi9EZXNrdG9wL2FjdWFWXzIvYWN1YS1tb2JpbGUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNmE4YmZmNWYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNmE4YmZmNWYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNmE4YmZmNWYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1RpY2tldEZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZhOGJmZjVmJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzZhOGJmZjVmJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2aWV3cy9UaWNrZXRGb3JtLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UaWNrZXRGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RpY2tldEZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RpY2tldEZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZhOGJmZjVmJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9UaWNrZXRPcHRpb25zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xMzlkOTU1MyZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9UaWNrZXRPcHRpb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVGlja2V0T3B0aW9ucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vVGlja2V0T3B0aW9ucy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xMzlkOTU1MyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMTM5ZDk1NTNcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvanRyYW4vRGVza3RvcC9hY3VhVl8yL2FjdWEtbW9iaWxlL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzEzOWQ5NTUzJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzEzOWQ5NTUzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzEzOWQ5NTUzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9UaWNrZXRPcHRpb25zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xMzlkOTU1MyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxMzlkOTU1MycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmlld3MvVGlja2V0T3B0aW9ucy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGlja2V0T3B0aW9ucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UaWNrZXRPcHRpb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGlja2V0T3B0aW9ucy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xMzlkOTU1MyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UaWNrZXRPcHRpb25zLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTEzOWQ5NTUzJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RpY2tldE9wdGlvbnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTEzOWQ5NTUzJnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==