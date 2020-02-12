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
//
//
//
//
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
      actionBar: "Welcome to Downey",
      msg: "Hello World!",
      titles: ["Adopt an Animal!", "Services & Fees", "Service Request", "FAQ", "Creat a Ticket", "Find Our Location"],
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      choices: ['Drop Off', 'Adoption ', 'Stray Intake', 'New Pet License', 'Renew Pet License', 'Microchip', 'other'],
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
exports.push([module.i, "/**\r\n * Convenient single import for light variables\r\n * Includes base variables with light overrides\r\n **/\n/**\r\n * Light variable overrides\r\n **/\n/**\n * Theme variables overrides\n**/\n.Action_Bar[data-v-2f2be7e4] {\n  background-color: #009fca;\n  color: #ffffff;\n}\n.S_Bar[data-v-2f2be7e4] {\n  color: #050505;\n}\n.S_Button[data-v-2f2be7e4] {\n  /* text=\"right\"; \n        horizontalAlignment=\"right\";\n        width=\"33%\" \n        height=\"70\" \n        /*backgroundColor=\"#1c6b48\"/>*/\n  background-image: url(\"~/assets/images/NativeScript-Vue.png\");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.cover[data-v-2f2be7e4] {\n  background: linear-gradient(45deg, plum, #009fca);\n}\n.homepage-blue[data-v-2f2be7e4] {\n  color: #0783f8;\n}\n.Action_Text[data-v-2f2be7e4] {\n  margin-right: 0;\n}\n.HomeButton[data-v-2f2be7e4] {\n  background-color: white;\n  border-radius: 25;\n  font-size: 14%;\n  font-weight: bold;\n  padding-top: 7em;\n  letter-spacing: 0;\n}\n.layout[data-v-2f2be7e4] {\n  background-color: #eeeeee;\n}\n.message[data-v-2f2be7e4] {\n  vertical-align: center;\n  text-align: center;\n  font-size: 20;\n  color: #252525;\n}\n", ""]);

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
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* button on android is styled with default setting when border radius is omitted*/\n.button[data-v-7609a239]{\n  border-radius: 25%;\n}\n", ""]);

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
exports.push([module.i, "\n.msg[data-v-139d9553] {\n    font-size: 18;\n    color: black;\n}\n.Action_Bar[data-v-139d9553] {\n    background-color: #009fca;\n    color: #ffffff;\n}\n.cover[data-v-139d9553] {\n    background: linear-gradient(45deg, plum, #009fca)\n}\n", ""]);

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
              text: "Welcome to Downey",
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
              attrs: { columns: "*,*,*", rows: "*,*,*" }
            },
            [
              _c("CategoryButton", {
                staticClass: "fa homepage-blue HomeButton",
                attrs: {
                  verticalAlignment: "center",
                  margin: "5",
                  row: "0",
                  col: "1",
                  src: "~/assets/images/Final Logo.png",
                  icon: _vm._f("fonticon")("fa-map-marker"),
                  title: _vm.titles[4],
                  action: _vm.toQRScanner,
                  textWrap: "true"
                }
              }),
              _c("CategoryButton", {
                staticClass: "fa homepage-blue HomeButton",
                attrs: {
                  verticalAlignment: "center",
                  margin: "5",
                  row: "2",
                  col: "1",
                  src: "~/assets/images/hoursicon.png",
                  icon: _vm._f("fonticon")("fa-map-marker"),
                  title: _vm.titles[4],
                  action: _vm.toQRScanner,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9hZG9wdGlvbi9BZG9wdGlvbkFuaW1hbERldGFpbHMudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL2Fkb3B0aW9uL0FuaW1hbENhcmQudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL2Fkb3B0aW9uL2NhdGVnb3J5LnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9idXR0b25zL0NhdGVnb3J5QnV0dG9uLnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9idXR0b25zL0ljb25CdXR0b24udnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL2xvY2F0aW9uL0FuaW1hbENlbnRlckRldGFpbHMudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL3N1Ymxpc3RzL0ZhcUluZm8udnVlIiwid2VicGFjazovLy92aWV3cy9BZG9wdGlvbi52dWUiLCJ3ZWJwYWNrOi8vL3ZpZXdzL0ZhcS52dWUiLCJ3ZWJwYWNrOi8vL3ZpZXdzL0hvbWUudnVlIiwid2VicGFjazovLy92aWV3cy9Mb2NhdGlvbi52dWUiLCJ3ZWJwYWNrOi8vL3ZpZXdzL1NlcnZpY2VSZXF1ZXN0LnZ1ZSIsIndlYnBhY2s6Ly8vdmlld3MvVGlja2V0LnZ1ZSIsIndlYnBhY2s6Ly8vdmlld3MvVGlja2V0Rm9ybS52dWUiLCJ3ZWJwYWNrOi8vL3ZpZXdzL1RpY2tldE9wdGlvbnMudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbG9jYXRpb24vQW5pbWFsQ2VudGVyRGV0YWlscy52dWU/YWQ0YyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N1Ymxpc3RzL0ZhcUluZm8udnVlPzQyNTMiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvRmFxLnZ1ZT9lMDg1Iiwid2VicGFjazovLy8uL3ZpZXdzL0hvbWUudnVlP2ZjYTciLCJ3ZWJwYWNrOi8vLy4vdmlld3MvTG9jYXRpb24udnVlP2U4YWIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hZG9wdGlvbi9BZG9wdGlvbkFuaW1hbERldGFpbHMudnVlPzg5YzUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hZG9wdGlvbi9BbmltYWxDYXJkLnZ1ZT81ZGU4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRvcHRpb24vY2F0ZWdvcnkudnVlPzMzODAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9idXR0b25zL0NhdGVnb3J5QnV0dG9uLnZ1ZT9hYTU0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9ucy9JY29uQnV0dG9uLnZ1ZT9lMDJkIiwid2VicGFjazovLy8uL3ZpZXdzL0Fkb3B0aW9uLnZ1ZT82ODExIiwid2VicGFjazovLy8uL3ZpZXdzL1NlcnZpY2VSZXF1ZXN0LnZ1ZT84Mzk0Iiwid2VicGFjazovLy8uL3ZpZXdzL1RpY2tldC52dWU/MWNiMSIsIndlYnBhY2s6Ly8vLi92aWV3cy9UaWNrZXRPcHRpb25zLnZ1ZT84MzAyIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRvcHRpb24vQWRvcHRpb25BbmltYWxEZXRhaWxzLnZ1ZT8xMzJmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRvcHRpb24vQW5pbWFsQ2FyZC52dWU/NjQ4OCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Fkb3B0aW9uL2NhdGVnb3J5LnZ1ZT9mNDRlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9ucy9DYXRlZ29yeUJ1dHRvbi52dWU/YjVhNCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbnMvSWNvbkJ1dHRvbi52dWU/NDYyNiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xvY2F0aW9uL0FuaW1hbENlbnRlckRldGFpbHMudnVlPzU3ZjAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zdWJsaXN0cy9GYXFJbmZvLnZ1ZT9lNTFjIiwid2VicGFjazovLy8uL3ZpZXdzL0Fkb3B0aW9uLnZ1ZT85YTFlIiwid2VicGFjazovLy8uL3ZpZXdzL0ZhcS52dWU/ZDA4NiIsIndlYnBhY2s6Ly8vLi92aWV3cy9Ib21lLnZ1ZT9lMWZiIiwid2VicGFjazovLy8uL3ZpZXdzL0xvY2F0aW9uLnZ1ZT8xZmFlIiwid2VicGFjazovLy8uL3ZpZXdzL1NlcnZpY2VSZXF1ZXN0LnZ1ZT9mYTNmIiwid2VicGFjazovLy8uL3ZpZXdzL1RpY2tldC52dWU/MTc2MCIsIndlYnBhY2s6Ly8vLi92aWV3cy9UaWNrZXRGb3JtLnZ1ZT9jYTk4Iiwid2VicGFjazovLy8uL3ZpZXdzL1RpY2tldE9wdGlvbnMudnVlPzk0NzQiLCJ3ZWJwYWNrOi8vLy4gc3luYyBub25yZWN1cnNpdmUgXlxcLlxcL2FwcFxcLihjc3N8c2Nzc3xsZXNzfHNhc3MpJCIsIndlYnBhY2s6Ly8vXFxiX1tcXHctXSpcXC4pc2NzcykkIiwid2VicGFjazovLy8uL0FuaW1hbENlbnRlci5zY3NzIiwid2VicGFjazovLy8uL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRvcHRpb24vQWRvcHRpb25BbmltYWxEZXRhaWxzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Fkb3B0aW9uL0Fkb3B0aW9uQW5pbWFsRGV0YWlscy52dWU/M2JkNCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Fkb3B0aW9uL0Fkb3B0aW9uQW5pbWFsRGV0YWlscy52dWU/ZTM4OCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Fkb3B0aW9uL0Fkb3B0aW9uQW5pbWFsRGV0YWlscy52dWU/N2U3YiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Fkb3B0aW9uL0FuaW1hbENhcmQudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRvcHRpb24vQW5pbWFsQ2FyZC52dWU/ZTAyOCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Fkb3B0aW9uL0FuaW1hbENhcmQudnVlPzgzYWMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hZG9wdGlvbi9BbmltYWxDYXJkLnZ1ZT9hMzc4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRvcHRpb24vY2F0ZWdvcnkudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRvcHRpb24vY2F0ZWdvcnkudnVlPzU5MzQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hZG9wdGlvbi9jYXRlZ29yeS52dWU/NjEwZiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Fkb3B0aW9uL2NhdGVnb3J5LnZ1ZT82N2VhIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9ucy9DYXRlZ29yeUJ1dHRvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9idXR0b25zL0NhdGVnb3J5QnV0dG9uLnZ1ZT9iMGE3Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9ucy9DYXRlZ29yeUJ1dHRvbi52dWU/Y2NlMyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbnMvQ2F0ZWdvcnlCdXR0b24udnVlPzk5YzIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9idXR0b25zL0ljb25CdXR0b24udnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9ucy9JY29uQnV0dG9uLnZ1ZT8wMzE0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9ucy9JY29uQnV0dG9uLnZ1ZT8zY2M2Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9ucy9JY29uQnV0dG9uLnZ1ZT8wYTVmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbG9jYXRpb24vQW5pbWFsQ2VudGVyRGV0YWlscy52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sb2NhdGlvbi9BbmltYWxDZW50ZXJEZXRhaWxzLnZ1ZT8zMWQxIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbG9jYXRpb24vQW5pbWFsQ2VudGVyRGV0YWlscy52dWU/ODg1NiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xvY2F0aW9uL0FuaW1hbENlbnRlckRldGFpbHMudnVlPzhmNTUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zdWJsaXN0cy9GYXFJbmZvLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N1Ymxpc3RzL0ZhcUluZm8udnVlPzIwNWYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zdWJsaXN0cy9GYXFJbmZvLnZ1ZT85MzMyIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3VibGlzdHMvRmFxSW5mby52dWU/YTJkYSIsIndlYnBhY2s6Ly8vLi9mb250cy9mb250LWF3ZXNvbWUuY3NzIiwid2VicGFjazovLy8uL2ZvbnRzL2lvbmljb25zLmNzcyIsIndlYnBhY2s6Ly8vLi9tYWluLmpzIiwid2VicGFjazovLy8uL21vZGVscy9BbmltYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL0ZhcS5qcyIsIndlYnBhY2s6Ly8vLi9tb2RlbHMvVGlja2V0LmpzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL0Fkb3B0aW9uU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9GYWtlRmFxU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9GYWtlVGlja2V0U2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9GYXFTZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL1RpY2tldFNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvQWRvcHRpb24udnVlIiwid2VicGFjazovLy8uL3ZpZXdzL0Fkb3B0aW9uLnZ1ZT8zZjdkIiwid2VicGFjazovLy8uL3ZpZXdzL0Fkb3B0aW9uLnZ1ZT8yYWRmIiwid2VicGFjazovLy8uL3ZpZXdzL0Fkb3B0aW9uLnZ1ZT9jNTNlIiwid2VicGFjazovLy8uL3ZpZXdzL0ZhcS52dWUiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvRmFxLnZ1ZT8wZGMwIiwid2VicGFjazovLy8uL3ZpZXdzL0ZhcS52dWU/MGM1OCIsIndlYnBhY2s6Ly8vLi92aWV3cy9GYXEudnVlPzJiNGMiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvSG9tZS52dWUiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvSG9tZS52dWU/ODg1NiIsIndlYnBhY2s6Ly8vLi92aWV3cy9Ib21lLnZ1ZT9hMGZmIiwid2VicGFjazovLy8uL3ZpZXdzL0hvbWUudnVlPzhlY2QiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvTG9jYXRpb24udnVlIiwid2VicGFjazovLy8uL3ZpZXdzL0xvY2F0aW9uLnZ1ZT9lMDAwIiwid2VicGFjazovLy8uL3ZpZXdzL0xvY2F0aW9uLnZ1ZT9kNmUxIiwid2VicGFjazovLy8uL3ZpZXdzL0xvY2F0aW9uLnZ1ZT8yNGM4Iiwid2VicGFjazovLy8uL3ZpZXdzL1NlcnZpY2VSZXF1ZXN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi92aWV3cy9TZXJ2aWNlUmVxdWVzdC52dWU/ZDJiZSIsIndlYnBhY2s6Ly8vLi92aWV3cy9TZXJ2aWNlUmVxdWVzdC52dWU/ZWVmNCIsIndlYnBhY2s6Ly8vLi92aWV3cy9TZXJ2aWNlUmVxdWVzdC52dWU/ZWE3NiIsIndlYnBhY2s6Ly8vLi92aWV3cy9UaWNrZXQudnVlIiwid2VicGFjazovLy8uL3ZpZXdzL1RpY2tldC52dWU/ZTgwNyIsIndlYnBhY2s6Ly8vLi92aWV3cy9UaWNrZXQudnVlPzI3YjUiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvVGlja2V0LnZ1ZT80ODRjIiwid2VicGFjazovLy8uL3ZpZXdzL1RpY2tldEZvcm0udnVlIiwid2VicGFjazovLy8uL3ZpZXdzL1RpY2tldEZvcm0udnVlPzBiZjUiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvVGlja2V0Rm9ybS52dWU/MTQ1MyIsIndlYnBhY2s6Ly8vLi92aWV3cy9UaWNrZXRPcHRpb25zLnZ1ZSIsIndlYnBhY2s6Ly8vLi92aWV3cy9UaWNrZXRPcHRpb25zLnZ1ZT83MzE5Iiwid2VicGFjazovLy8uL3ZpZXdzL1RpY2tldE9wdGlvbnMudnVlP2Q3YTIiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvVGlja2V0T3B0aW9ucy52dWU/MzkxZiJdLCJuYW1lcyI6WyJzdG9yZSIsIkhvbWUiLCJWdWVEZXZ0b29scyIsIlJhZExpc3RWaWV3IiwiVnVlIiwidXNlIiwiVE5TRm9udEljb24iLCJsb2FkQ3NzIiwiVE5TX0VOViIsImNvbmZpZyIsInNpbGVudCIsInJlbmRlciIsImgiLCIkc3RhcnQiLCJjb25zdHJ1Y3RvciIsInF1ZXN0aW9uIiwiaWQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJhbnN3ZXIiLCJjb3VudCIsImxvY2F0aW9uIiwic2V0TG9jYXRpb24iLCJxckNvZGUiLCJzZXRUaWNrZXRJbmZvIiwicGhvbmUiLCJuYW1lIiwicXVlcnkiLCJ0aW1lSW4iLCJEYXRlIiwiaHR0cE1vZHVsZSIsInJlcXVpcmUiLCJnZXRBbmltYWxzIiwiZ2V0SlNPTiIsImdldEZhcXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJmYXFzIiwiYWRkRmFxIiwiZW50cnkiLCJhZGRUaWNrZXQiLCJmYXEiLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwiaGVhZGVycyIsImNvbnRlbnQiLCJKU09OIiwic3RyaW5naWZ5IiwidGlja2V0IiwiY2hlY2tUaWNrZXQiLCJ0aWNrZXRJZCIsIlZ1ZXgiLCJTdG9yZSIsInN0YXRlIiwiYW5pbWFscyIsInRpY2tldHMiLCJ1c2VyQW5pbWFsIiwiQW5pbWFsIiwidXNlckZhcSIsInVzZXJUaWNrZXQiLCJUaWNrZXQiLCJhcHByb3ZlZFRpY2tldCIsInVuZGVmaW5lZCIsIm11dGF0aW9ucyIsInN0b3JlQW5pbWFsIiwiYW5pbWFsIiwiQUREX0FOSU1BTCIsInB1c2giLCJzdG9yZUZhcSIsInNldFRpY2tldExvY2F0aW9uIiwidXNlcklucHV0Iiwic3RvcmVUaWNrZXQiLCJTRVRfVElDS0VUIiwiQUREX1RJQ0tFVCIsIlNFVF9GQVFTIiwiQUREX0ZBUSIsImFjdGlvbnMiLCJjb21taXQiLCJUaWNrZXRTZXJ2aWNlIiwidGhlbiIsInJlcyIsInRvSlNPTiIsImxvYWRGYXFzIiwiRmFxU2VydmljZSIsImdldHRlcnMiLCJnZXRTZWFyY2hSZXN1bHRzIiwic2VhcmNoIiwid29yZHMiLCJzcGxpdCIsImZpbHRlciIsInNvbWUiLCJ3b3JkIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUlBO0FBQ0EsaUJBREE7QUFFQSxnQkFGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBYUE7O0FBZkEsR0FIQTs7QUFvQkE7QUFDQSxtQkFDQTtBQUNBO0FBREEsS0FEQSxFQUlBO0FBQ0E7QUFEQSxLQUpBLEVBT0E7QUFDQTtBQURBLEtBUEEsRUFVQTtBQUNBO0FBREEsS0FWQSxFQURBLENBZUE7QUFDQTtBQUNBLEdBckNBOztBQXNDQSxjQXRDQTs7QUF1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUpBOztBQUtBO0FBQ0E7QUFDQTtBQUNBLGNBQ0EsT0FEQSxDQUNBO0FBQ0E7QUFDQSxnQkFEQTtBQUVBO0FBRkEsU0FEQTtBQUtBLG9CQUxBO0FBTUE7QUFOQSxPQURBLEVBU0EsSUFUQSxDQVNBO0FBQ0E7QUFDQTtBQUNBLGtCQURBO0FBRUEsa0JBRkE7QUFHQTtBQUhBO0FBREE7QUFPQSxPQWpCQSxFQWtCQSxJQWxCQSxDQWtCQTtBQUNBO0FBQ0E7QUFDQSxnQkFEQTtBQUVBLGdCQUZBO0FBR0E7QUFIQTtBQURBO0FBT0EsT0ExQkEsRUEyQkEsSUEzQkEsQ0EyQkEsY0EzQkE7QUE0QkEsS0FwQ0E7O0FBcUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBekNBLEdBdkNBOztBQWtGQTtBQUNBO0FBQ0Esa0JBREE7QUFFQTtBQUZBO0FBSUE7O0FBdkZBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0Qyw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEMsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEMsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEMsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEMsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEMsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEMsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEMsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7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QUFxQixFQUFFLFVBQVUsY0FBYyxFQUFFLFlBQVksa0JBQWtCLEVBQUUsWUFBWSxvQkFBb0IsRUFBRSxZQUFZLHFCQUFxQixFQUFFLFlBQVksbUJBQW1CLEVBQUUsWUFBWSxvQkFBb0IsbUJBQW1CLEVBQUUsWUFBWSxrQkFBa0IscUJBQXFCLEVBQUUsVUFBVSxjQUFjLEVBQUUsWUFBWSxrQkFBa0IsRUFBRSxZQUFZLG9CQUFvQixFQUFFLFlBQVkscUJBQXFCLEVBQUUsWUFBWSxtQkFBbUIsRUFBRSxZQUFZLG9CQUFvQixtQkFBbUIsRUFBRSxZQUFZLGtCQUFrQixxQkFBcUIsRUFBRSxXQUFXLGVBQWUsRUFBRSxhQUFhLG1CQUFtQixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEscUJBQXFCLG9CQUFvQixFQUFFLGFBQWEsbUJBQW1CLHNCQUFzQixFQUFFLFdBQVcsZUFBZSxFQUFFLGFBQWEsbUJBQW1CLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxxQkFBcUIsb0JBQW9CLEVBQUUsYUFBYSxtQkFBbUIsc0JBQXNCLEVBQUUsV0FBVyxlQUFlLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHFCQUFxQixvQkFBb0IsRUFBRSxhQUFhLG1CQUFtQixzQkFBc0IsRUFBRSxXQUFXLGVBQWUsRUFBRSxhQUFhLG1CQUFtQixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEscUJBQXFCLG9CQUFvQixFQUFFLGFBQWEsbUJBQW1CLHNCQUFzQixFQUFFLFdBQVcsZUFBZSxFQUFFLGFBQWEsbUJBQW1CLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxxQkFBcUIsb0JBQW9CLEVBQUUsYUFBYSxtQkFBbUIsc0JBQXNCLEVBQUUsV0FBVyxlQUFlLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHFCQUFxQixvQkFBb0IsRUFBRSxhQUFhLG1CQUFtQixzQkFBc0IsRUFBRSxXQUFXLGVBQWUsRUFBRSxhQUFhLG1CQUFtQixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEscUJBQXFCLG9CQUFvQixFQUFFLGFBQWEsbUJBQW1CLHNCQUFzQixFQUFFLFdBQVcsZUFBZSxFQUFFLGFBQWEsbUJBQW1CLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxxQkFBcUIsb0JBQW9CLEVBQUUsYUFBYSxtQkFBbUIsc0JBQXNCLEVBQUUsV0FBVyxlQUFlLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHFCQUFxQixvQkFBb0IsRUFBRSxhQUFhLG1CQUFtQixzQkFBc0IsRUFBRSxVQUFVLGVBQWUsRUFBRSxZQUFZLG1CQUFtQixFQUFFLFlBQVkscUJBQXFCLEVBQUUsWUFBWSxzQkFBc0IsRUFBRSxZQUFZLG9CQUFvQixFQUFFLFlBQVkscUJBQXFCLG9CQUFvQixFQUFFLFlBQVksbUJBQW1CLHNCQUFzQixFQUFFLFVBQVUsZUFBZSxFQUFFLFlBQVksbUJBQW1CLEVBQUUsWUFBWSxxQkFBcUIsRUFBRSxZQUFZLHNCQUFzQixFQUFFLFlBQVksb0JBQW9CLEVBQUUsWUFBWSxxQkFBcUIsb0JBQW9CLEVBQUUsWUFBWSxtQkFBbUIsc0JBQXNCLEVBQUUsVUFBVSxlQUFlLEVBQUUsWUFBWSxtQkFBbUIsRUFBRSxZQUFZLHFCQUFxQixFQUFFLFlBQVksc0JBQXNCLEVBQUUsWUFBWSxvQkFBb0IsRUFBRSxZQUFZLHFCQUFxQixvQkFBb0IsRUFBRSxZQUFZLG1CQUFtQixzQkFBc0IsRUFBRSxVQUFVLGVBQWUsRUFBRSxZQUFZLG1CQUFtQixFQUFFLFlBQVkscUJBQXFCLEVBQUUsWUFBWSxzQkFBc0IsRUFBRSxZQUFZLG9CQUFvQixFQUFFLFlBQVkscUJBQXFCLG9CQUFvQixFQUFFLFlBQVksbUJBQW1CLHNCQUFzQixFQUFFLFVBQVUsZUFBZSxFQUFFLFlBQVksbUJBQW1CLEVBQUUsWUFBWSxxQkFBcUIsRUFBRSxZQUFZLHNCQUFzQixFQUFFLFlBQVksb0JBQW9CLEVBQUUsWUFBWSxxQkFBcUIsb0JBQW9CLEVBQUUsWUFBWSxtQkFBbUIsc0JBQXNCLEVBQUUsV0FBVyxnQkFBZ0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSx1QkFBdUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLHFCQUFxQixFQUFFLGFBQWEsb0JBQW9CLHVCQUF1QixFQUFFLFdBQVcsZ0JBQWdCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsdUJBQXVCLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixxQkFBcUIsRUFBRSxhQUFhLG9CQUFvQix1QkFBdUIsRUFBRSxXQUFXLGdCQUFnQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLHVCQUF1QixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IscUJBQXFCLEVBQUUsYUFBYSxvQkFBb0IsdUJBQXVCLEVBQUUsV0FBVyxnQkFBZ0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSx1QkFBdUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLHFCQUFxQixFQUFFLGFBQWEsb0JBQW9CLHVCQUF1QixFQUFFLFdBQVcsZ0JBQWdCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsdUJBQXVC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LGdEQUFLO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQkFBc0Isc0VBQWdFLEVBQUU7QUFBQTtBQUN4RjtBQUNBLGdCQUFnQixvR0FBTTtBQUN0Qix5QkFBeUIsNkdBQWU7QUFDeEMsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDZSxnRjs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUE2SyxDQUFnQixpUEFBRyxFQUFDLEM7Ozs7Ozs7O0FDQWpNO0FBQUE7QUFBQTtBQUFBO0FBQThZLENBQWdCLDZiQUFHLEVBQUMsQzs7Ozs7Ozs7QUNBbGE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8UGFnZSBhY3Rpb25CYXJIaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJhbmltLXBhZ2VcIlxuICAgICAgICBiYWNrZ3JvdW5kU3BhblVuZGVyU3RhdHVzQmFyPVwidHJ1ZVwiPlxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJtYWluXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJ0b3BcIj5cblxuICAgICAgICAgICAgICAgIDwhLS0gQW5pbWFsIENvdmVyIGltYWdlIC0tPlxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgY2xhc3M9XCJhbmltLWNvdmVyXCIgcm93cz1cImF1dG9cIiBjb2x1bW5zPVwiKlwiPlxuICAgICAgICAgICAgICAgIDxJbWFnZSByb3c9XCIwXCIgY29sPVwiMFwiIG1hcmdpblRvcD1cIi00MFwiIGhlaWdodD1cIjE4MFwiIHN0cmV0Y2g9XCJhc3BlY3RGaWxsXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjYXJkLWltZ1wiIDpzcmM9XCJpdGVtLmNvdmVyXCIgLz5cbiAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiMFwiIGNvbD1cIjBcIiB2ZXJ0aWNhbEFsaWdubWVudD1cInRvcFwiXG4gICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ9XCJsZWZ0XCIgQHRhcD1cImNsb3NlXCIgOnRleHQ9XCInZmEtYXJyb3ctbGVmdCcgfCBmb250aWNvblwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmEgY2xvc2VcIiBmb250U2l6ZT1cIjI0XCIgLz5cbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cblxuICAgICAgICAgICAgICAgIDwhLS0gQW5pbWFsIGdhbGxlcnkgaW1hZ2VzIC0tPlxuICAgICAgICAgICAgPFNjcm9sbFZpZXcgY2xhc3M9XCJhbmltLWltYWdlc1wiIG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiPlxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCB2LWJpbmQ6a2V5PVwiaW1hZ2VcIiB2LWZvcj1cImltYWdlIGluIGl0ZW0uaW1hZ2VzXCIgcm93cz1cImF1dG9cIiBjb2x1bW5zPVwiKlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzPVwiY2FyZC1pbWctdGh1bWJcIiByb3c9XCIwXCIgY29sPVwiMFwiIDpzcmM9XCJpbWFnZS5zcmNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmV0Y2g9XCJhc3BlY3RGaXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgIDwvU2Nyb2xsVmlldz5cblxuICAgICAgICAgICAgPCEtLSBBbmltYWwgZGV0YWlscyAtLT5cbiAgICAgICAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XCJhdXRvLGF1dG8sYXV0byxhdXRvXCIgY29sdW1ucz1cImF1dG9cIiBjbGFzcz1cImNvbnRlbnRcIj5cblxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNsYXNzPVwiYW5pbS1pdGVtSW5mb1wiIG1hcmdpblRvcD1cIjE1XCIgcm93PVwiMVwiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiIGNvbHVtbnM9XCJhdXRvLCpcIiByb3dzPVwiYXV0byxhdXRvLGF1dG8sYXV0b1wiXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cImdlbmRlckljb24gfCBmb250aWNvblwiIHJvdz1cIjBcIiBjb2w9XCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd1NwYW49XCIyXCIgOmJhY2tncm91bmRDb2xvcj1cIml0ZW0uY2F0ZWdvcnlUYWdcIiBjbGFzcz1cImZhIGNhdGVnb3J5LWljb25cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiMFwiIGNvbD1cIjFcIiBjbGFzcz1cIml0ZW0tbmFtZVwiIHRleHR3cmFwPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudD1cImJvdHRvbVwiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJsZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDp0ZXh0PVwiaXRlbS5uYW1lXCIgLz5cblxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiMVwiIGNvbD1cIjFcIiBjbGFzcz1cIml0ZW0tY2F0ZWdvcnlcIiB0ZXh0d3JhcD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ9XCJ0b3BcIiBob3Jpem9udGFsQWxpZ25tZW50PVwibGVmdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6dGV4dD1cIml0ZW0uY2F0ZWdvcnlcIiAvPlxuXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuXG4gICAgICAgICAgICAgIDwhLS0gc29jaWFsIGJhciAtLT5cbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJsaW5lIGFuaW0tbGlrZXNcIiByb3c9XCIyXCIgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wPVwiMTBcIiAvPlxuXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY2xhc3M9XCJhbmltLWxpa2VzXCIgbWFyZ2luVG9wPVwiNVwiIHdpZHRoPVwiMTAwJVwiIHJvdz1cIjNcIlxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPVwiKixhdXRvLGF1dG9cIiByb3dzPVwiYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2w9XCIwXCIgcm93cz1cImF1dG9cIiBjb2x1bW5zPVwiYXV0byxhdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVwiMFwiIHJvdz1cIjBcIiByZWY9XCJpbmZvXCIgY2xhc3M9XCJsaWtlLWljb24gZmFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp0ZXh0PVwiJ2ZhLWluZm8tY2lyY2xlJyB8IGZvbnRpY29uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XCIxXCIgcm93PVwiMFwiIGNsYXNzPVwibGF5b3V0XCIgOnRleHQ9XCJpdGVtLmJyZWVkX2dyb3VwICsgJyAtICcgKyBpdGVtLnByaW1hcnlfYnJlZWRcIj48L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sPVwiMVwiIHJvd3M9XCJhdXRvXCIgY29sdW1ucz1cImF1dG8sYXV0b1wiIEB0YXA9XCJ0b2dnbGVIZWFydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodD1cIjE1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVwiMFwiIHJvdz1cIjBcIiByZWY9XCJmYXZvcml0ZVwiIGNsYXNzPVwibGlrZS1pY29uICBmYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwiW2l0ZW0uaXNGYXZvcml0ZSA/ICdoZWFydC1hY3RpdmUnIDogJ2RlZmF1bHQnXVwiIDp0ZXh0PVwiaXRlbS5pc0Zhdm9yaXRlID8gJ2ZhLWhlYXJ0JzonZmEtaGVhcnQtbycgfCBmb250aWNvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVwiMVwiIHJvdz1cIjBcIiBjbGFzcz1cImxheW91dFwiIHRleHQ9XCJGYXZvcml0ZVwiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cblxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY29sPVwiMlwiIG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJlZj1cIlwiIGNsYXNzPVwibGlrZS1pY29uIGxheW91dCBmYVwiIDp0ZXh0PVwiJ2ZhLXNoYXJlLXNxdWFyZS1vJyB8IGZvbnRpY29uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImxheW91dFwiIHRleHQ9XCJTaGFyZVwiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuXG5cbiAgICAgICAgICAgIDwhLS0gQW5pbWFsIERlc2NyaXB0aW9uIExhYmVsICh3LyBpY29uKSAtLT5cbiAgICAgICAgICAgIDxTdGFja0xheW91dCB3aWR0aD1cIjEwMCVcIiBjbGFzcz1cImxpbmVCcmVhayBhbmltLWxpa2VzXCIgLz5cblxuICAgICAgICAgICAgPEdyaWRsYXlvdXQgcm93cz1cImF1dG8sKlwiIGNsYXNzPVwiY29udGVudCBhbmltLWNvbnRlbnRcIiBtYXJnaW5Ub3A9XCIxNVwiPlxuXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgcm93PVwiMFwiIHJvd3M9XCJhdXRvXCIgbWFyZ2luQm90dG9tPVwiNVwiIGNvbHVtbnM9XCJhdXRvLCBhdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XCIwXCIgOnRleHQ9XCInZmEtdGFncycgfCBmb250aWNvblwiIGNsYXNzPVwiZmEgZGVzY3JpcHRpb24taWNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcD1cInRydWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVwiMVwiIGNsYXNzPVwiZGVzY3JpcHRpb24tdGV4dFwiIHRleHQ9XCJEZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcD1cInRydWVcIiAvPlxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cblxuXG4gICAgICAgICAgICAgICAgPCEtLSBBbmltYWwgRGVzY3JpcHRpb24gLS0+XG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cIjFcIj5cbiAgICAgICAgICAgICAgICAgICAgPFNjcm9sbFZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCByb3dzPVwiKiwgKiwgKiwgKiwgKiwgKiwgKiwgKlwiIGNvbHVtbnM9XCJhdXRvLCAqXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJ0b3BcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiMFwiIGNvbD1cIjBcIiBjbGFzcz1cImRlc2NyaXB0aW9uLXZhbHVlXCIgdGV4dD1cIkF2YWlsYWJpbGl0eTpcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiMFwiIGNvbD1cIjFcIiAgY2xhc3M9XCJmYSBkZXNjcmlwdGlvbi12YWx1ZVwiIDpjbGFzcz1cIml0ZW0uaXNBdmFpbGFibGU9PXRydWU/ICdpc0F2YWlsYWJsZSc6J2lzTm90QXZhaWxhYmxlJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiA6dGV4dD1cIml0ZW0uaXNBdmFpbGFibGU9PXRydWU/ICdBdmFpbGFibGUnOidOb3QgQXZhaWxhYmxlJ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gOnRleHQ9XCJpdGVtLmlzQXZhaWxhYmxlPT10cnVlPyAnZmEtY2hlY2snOidmYS10aW1lcycgfCBmb250aWNvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjFcIiBjb2w9XCIwXCIgY2xhc3M9XCJkZXNjcmlwdGlvbi12YWx1ZVwiIHRleHQ9XCJMb2NhdGlvbjpcIiAvPiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIxXCIgY29sPVwiMVwiIGNsYXNzPVwiZGVzY3JpcHRpb24tdmFsdWVcIiA6dGV4dD1cIml0ZW0ubG9jYXRpb25cIiAvPiBcblxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjJcIiBjb2w9XCIwXCIgY2xhc3M9XCJkZXNjcmlwdGlvbi12YWx1ZVwiIHRleHQ9XCJBZ2U6XCIgLz4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiMlwiIGNvbD1cIjFcIiBjbGFzcz1cImRlc2NyaXB0aW9uLXZhbHVlXCIgOnRleHQ9XCJpdGVtLmFnZVwiIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIzXCIgY29sPVwiMFwiIGNsYXNzPVwiZGVzY3JpcHRpb24tdmFsdWVcIiB0ZXh0PVwiR2VuZGVyOiBcIiAvPiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIzXCIgY29sPVwiMVwiIGNsYXNzPVwiZGVzY3JpcHRpb24tdmFsdWVcIiA6dGV4dD1cIml0ZW0uZ2VuZGVyXCIgLz4gICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiNFwiIGNvbD1cIjBcIiBjbGFzcz1cImRlc2NyaXB0aW9uLXZhbHVlXCIgdGV4dD1cIkJyZWVkIEdyb3VwOlwiIC8+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjRcIiBjb2w9XCIxXCIgY2xhc3M9XCJkZXNjcmlwdGlvbi12YWx1ZVwiIDp0ZXh0PVwiaXRlbS5icmVlZF9ncm91cFwiIC8+ICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiNVwiIGNvbD1cIjBcIiBjbGFzcz1cImRlc2NyaXB0aW9uLXZhbHVlXCIgdGV4dD1cIlByaW1hcnkgQnJlZWQ6XCIgLz4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiNVwiIGNvbD1cIjFcIiBjbGFzcz1cImRlc2NyaXB0aW9uLXZhbHVlXCIgOnRleHQ9XCJpdGVtLnByaW1hcnlfYnJlZWRcIiAvPiAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjZcIiBjb2w9XCIwXCIgY2xhc3M9XCJkZXNjcmlwdGlvbi12YWx1ZVwiIHRleHQ9XCJBbmltYWwgU2l6ZTpcIiAvPiAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiNlwiIGNvbD1cIjFcIiBjbGFzcz1cImRlc2NyaXB0aW9uLXZhbHVlXCIgOnRleHQ9XCJpdGVtLmFuaW1hbF9zaXplXCIgLz4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjdcIiBjb2w9XCIwXCIgY2xhc3M9XCJkZXNjcmlwdGlvbi12YWx1ZVwiIHRleHQ9XCJQcmltYXJ5IENvbG9yOlwiIC8+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjdcIiBjb2w9XCIxXCIgY2xhc3M9XCJkZXNjcmlwdGlvbi12YWx1ZVwiIDp0ZXh0PVwiaXRlbS5wcmltYXJ5X2NvbG9yXCIgLz4gICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cbiAgICAgICAgICAgICAgICAgICAgPC9TY3JvbGxWaWV3PlxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cblxuICAgICAgICAgICAgPC9HcmlkbGF5b3V0PlxuXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgPC9QYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IFtcIml0ZW1cIl0sXG4gIGNvbXBvbmVudHM6IHt9LFxuICBjb21wdXRlZDoge1xuICAgIGdlbmRlckljb24oKSB7XG4gICAgICBzd2l0Y2ggKHRoaXMuaXRlbS5nZW5kZXIpIHtcbiAgICAgICAgY2FzZSBcIk1cIjpcbiAgICAgICAgICB0aGlzLml0ZW0uY2F0ZWdvcnlUYWcgPSBcIiMwMDk5ZmZcIjtcbiAgICAgICAgICByZXR1cm4gXCJmYS1tYXJzXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJGXCI6XG4gICAgICAgICAgdGhpcy5pdGVtLmNhdGVnb3J5VGFnID0gXCIjZmZjY2ZmXCI7XG4gICAgICAgICAgcmV0dXJuIFwiZmEtdmVudXNcIjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gXCJmYS1maXJlXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuaW1hZ2VzID0gW1xuICAgICAge1xuICAgICAgICBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvcGFuY2FrZTY0MC5qcGdcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL3BhbmNha2U2NDAuanBnXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9wYW5jYWtlNjQwLmpwZ1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvcGFuY2FrZTY0MC5qcGdcIlxuICAgICAgfVxuICAgIF07XG4gICAgLy8gdGhpcy5pc0xpa2UgPSB0aGlzLml0ZW0uaXNMaWtlO1xuICAgIC8vIHRoaXMuaXNIZWFydCA9IHRoaXMuaXRlbS5pc0Zhdm9yaXRlO1xuICB9LFxuICBtb3VudGVkKCkge30sXG4gIG1ldGhvZHM6IHtcbiAgICAvLyBuYXZpZ2F0ZUJhY2tcbiAgICBjbG9zZSgpIHtcbiAgICAgIHRoaXMuJG5hdmlnYXRlQmFjaygpO1xuICAgIH0sXG4gICAgLy8gQW5pbWF0ZSAnRmF2b3JpdGUnIGljb25cbiAgICBhbmltYXRlRmF2b3JpdGUoKSB7XG4gICAgICBsZXQgaW1nTG9nbyA9IHRoaXMuJHJlZnMuZmF2b3JpdGUubmF0aXZlVmlldztcbiAgICAgIGltZ0xvZ29cbiAgICAgICAgLmFuaW1hdGUoe1xuICAgICAgICAgIHNjYWxlOiB7XG4gICAgICAgICAgICB4OiAwLjYsXG4gICAgICAgICAgICB5OiAwLjZcbiAgICAgICAgICB9LFxuICAgICAgICAgIGR1cmF0aW9uOiA1MCxcbiAgICAgICAgICBkZWxheTogMFxuICAgICAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gaW1nTG9nby5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjYWxlOiB7XG4gICAgICAgICAgICAgIHg6IDEuMixcbiAgICAgICAgICAgICAgeTogMS4yLFxuICAgICAgICAgICAgICBkdXJhdGlvbjogNTBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGltZ0xvZ28uYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY2FsZToge1xuICAgICAgICAgICAgICB4OiAxLFxuICAgICAgICAgICAgICB5OiAxLFxuICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge30pO1xuICAgIH0sXG4gICAgdG9nZ2xlSGVhcnQoKSB7XG4gICAgICAvLyB0b2dnbGUgaXNGYXZvcml0ZVxuICAgICAgdGhpcy5hbmltYXRlRmF2b3JpdGUoKTtcbiAgICAgIHRoaXMuaXRlbS5pc0Zhdm9yaXRlID0gIXRoaXMuaXRlbS5pc0Zhdm9yaXRlO1xuICAgIH1cbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaW1hZ2VzOiBudWxsLFxuICAgICAgaXNIZWFydDogZmFsc2VcbiAgICB9O1xuICB9XG59O1xuPC9zY3JpcHQ+XG48c3R5bGUgc2NvcGVkPlxuLyogQ1NTICovXG4uY2xvc2Uge1xuICBmb250LXNpemU6IDIwO1xuICBjb2xvcjogcmdiKDIyNiwgMjI5LCAyMjkpO1xuICBtYXJnaW46IDE1IDAgMCAxNTtcbn1cblxuVGV4dFZpZXcge1xuICBib3JkZXItd2lkdGg6IDE7XG4gIGJvcmRlci1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLmRlc2NyaXB0aW9uLXRleHQge1xuICBmb250LXNpemU6IDE0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uZGVzY3JpcHRpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMTY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzNlOWVkYjtcbiAgbWFyZ2luLXJpZ2h0OiA4O1xuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGVzY3JpcHRpb24tdmFsdWUge1xuICBmb250LXNpemU6IDE0O1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbjogODtcbn1cblxuLmRlc2NyaXB0aW9uLXZhbHVlLmlzQXZhaWxhYmxlIHtcbiAgY29sb3I6IGdyZWVuO1xuICBmb250LXdlaWdodDogYm9sZFxufVxuXG4uZGVzY3JpcHRpb24tdmFsdWUuaXNOb3RBdmFpbGFibGUge1xuICBjb2xvcjogcmVkO1xuICBmb250LXdlaWdodDogYm9sZFxufVxuXG4ucmF0ZSB7XG4gIHBhZGRpbmctdG9wOiAzO1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjZmZlOTAwO1xuICBmb250LXNpemU6IDE4O1xufVxuXG4ucmF0aW5nLXZhbHVlIHtcbiAgbWFyZ2luLWxlZnQ6IDU7XG59XG5cbi5saWtlZC1hY3RpdmUge1xuICBjb2xvcjogIzQwODBmZjtcbn1cblxuLmhlYXJ0LWFjdGl2ZSB7XG4gIGNvbG9yOiAjYjUxMjEzO1xufVxuXG4uZGVmYXVsdCB7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuXG4ubGF5b3V0IHtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgY29sb3I6ICM4MjgyODI7XG4gIGZvbnQtc2l6ZTogMTQ7XG4gIGhlaWdodDogMzA7XG4gIHBhZGRpbmc6IDUgMCA1IDA7XG59XG5cbi5saWtlLWljb24ge1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICBoZWlnaHQ6IDMwO1xuICBmb250LXNpemU6IDE2O1xuICBtYXJnaW4tcmlnaHQ6IDI7XG4gIHBhZGRpbmc6IDUgNSA1IDU7XG59XG5cbi5pdGVtLW5hbWUge1xuICBmb250LXNpemU6IDE0O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLml0ZW0tY2F0ZWdvcnkge1xuICBmb250LXNpemU6IDE0O1xuICBjb2xvcjogIzgyODI4Mjtcbn1cblxuLmNhdGVnb3J5LWljb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA1O1xuICBjb2xvcjogd2hpdGU7XG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjU7XG4gIGJvcmRlci13aWR0aDogMTtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi10b3A6IDQ7XG4gIG1hcmdpbi1yaWdodDogMTU7XG4gIHdpZHRoOiA0MDtcbiAgaGVpZ2h0OiA0MDtcbn1cblxuLmNvbnRlbnQge1xuICBtYXJnaW4tbGVmdDogMTY7XG4gIG1hcmdpbi1yaWdodDogMTY7XG4gIG1hcmdpbi1ib3R0b206IDM7XG4gIC8qIG1hcmdpbi10b3A6IDE2OyAqL1xufVxuXG4uY2FyZC1pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNTA7XG4gIG1hcmdpbi1ib3R0b206IDU7XG59XG5cbi5jYXJkLWltZy10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDIzMCwgMjMwKTtcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTtcbiAgd2lkdGg6IDEzMDtcbiAgaGVpZ2h0OiA3MDtcbiAgbWFyZ2luLWxlZnQ6IDU7XG59XG5cbi5saW5lIHtcbiAgaGVpZ2h0OiAwLjU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICNlMGUwZTA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG59XG5cbi5saW5lQnJlYWsge1xuICBoZWlnaHQ6IDAuNTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI2UwZTBlMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcbn1cblxuXG4vKiBBbmltYXRpb25zICovXG4uYW5pbS1wYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDZkODtcbiAgYW5pbWF0aW9uLW5hbWU6IGtleS1wYWdlO1xuICBhbmltYXRpb24tZHVyYXRpb246IDI7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcbn1cblxuQGtleWZyYW1lcyBrZXktcGFnZSB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkYWRhO1xuICB9XG5cbiAgMjAlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJkMmQ1O1xuICB9XG5cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIH1cbn1cblxuLmFuaW0tY292ZXIge1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb24tbmFtZToga2V5LWNvdmVyO1xuICBhbmltYXRpb24tZHVyYXRpb246IDE7XG4gIGFuaW1hdGlvbi1kZWxheTogMC41O1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XG59XG5cbkBrZXlmcmFtZXMga2V5LWNvdmVyIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNTUwKSBzY2FsZSgwLCAwKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcbiAgfVxuXG4gIDMwJSB7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxLCAxKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcbiAgfVxufVxuXG4uYW5pbS1pbWFnZXMge1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb24tbmFtZToga2V5LWltYWdlcztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxO1xuICBhbmltYXRpb24tZGVsYXk6IDAuNztcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xufVxuXG5Aa2V5ZnJhbWVzIGtleS1pbWFnZXMge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA1NTApIHNjYWxlKDAsIDApO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xuICB9XG5cbiAgMzAlIHtcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XG4gIH1cblxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDEsIDEpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xuICB9XG59XG5cbi5hbmltLWl0ZW1JbmZvIHtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uLW5hbWU6IGtleS1pdGVtSW5mbztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxO1xuICBhbmltYXRpb24tZGVsYXk6IDEuMjtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xufVxuXG5Aa2V5ZnJhbWVzIGtleS1pdGVtSW5mbyB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwLCA1MCk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XG4gIH1cblxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xuICB9XG59XG5cbi5hbmltLWxpa2VzIHtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uLW5hbWU6IGtleS1saWtlcztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxO1xuICBhbmltYXRpb24tZGVsYXk6IDEuNTtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xufVxuXG5Aa2V5ZnJhbWVzIGtleS1saWtlcyB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwLCA1MCk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XG4gIH1cblxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xuICB9XG59XG5cbi5hbmltLWNvbnRlbnQge1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb24tbmFtZToga2V5LWNvbnRlbnQ7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjg7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcbn1cblxuQGtleWZyYW1lcyBrZXktY29udGVudCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwLCA1MCk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XG4gIH1cblxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xuICB9XG59XG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cbiAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJtYWluXCI+XG5cbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiY29udGVudFwiPlxuXG4gICAgICAgICAgICA8SW1hZ2Ugc3RyZXRjaD1cImFzcGVjdEZpdFwiIGNsYXNzPVwiY2FyZC1pbWdcIiBAdGFwPVwib25DbGlja0J1dHRvbigpXCJcbiAgICAgICAgICAgICAgICA6c3JjPVwiaXRlbS5jb3ZlclwiIC8+XG4gICAgICAgICAgICA8R3JpZExheW91dCB3aWR0aD1cIjEwMCVcIiBjb2x1bW5zPVwiYXV0bywqXCIgcm93cz1cImF1dG8sYXV0b1wiIGNsYXNzPVwiXCJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiIEB0YXA9XCJvbkNsaWNrQnV0dG9uKClcIj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8IS0tIEdlbmRlciAtLT5cbiAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJjYXRlZ29yeUljb24gfCBmb250aWNvblwiIHJvdz1cIjBcIiBjb2w9XCIwXCJcbiAgICAgICAgICAgICAgICAgICAgcm93U3Bhbj1cIjJcIiA6YmFja2dyb3VuZENvbG9yPVwiaXRlbS5jYXRlZ29yeVRhZ1wiIGNsYXNzPVwiZmEgY2F0ZWdvcnktaWNvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8IS0tTmFtZSwgYWdlIC0tPiAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiMFwiIGNvbD1cIjFcIiBjbGFzcz1cImZhIGl0ZW0tbmFtZVwiIHRleHR3cmFwPVwidHJ1ZVwiIHZlcnRpY2FsQWxpZ25tZW50PSBcImNlbnRlclwiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJsZWZ0XCIgOnRleHQ9XCJpdGVtLm5hbWUgKyAnLCAnICsgaXRlbS5hZ2VcIiAgLz5cblxuXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgcm93PVwiMVwiIGNvbD1cIjFcIiByb3dzPVwiYXV0b1wiIGNvbHVtbnM9XCJhdXRvLGF1dG8sYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiMFwiIGNvbD1cIjBcIiBjbGFzcz1cIml0ZW0tY2F0ZWdvcnlcIiB0ZXh0d3JhcD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ9XCJib3R0b21cIiBob3Jpem9udGFsQWxpZ25tZW50PVwibGVmdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6dGV4dD1cIml0ZW0uY2F0ZWdvcnlcIiAvPlxuXG5cbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgd2lkdGg9XCIxMDAlXCIgbWFyZ2luVG9wPVwiNVwiIGNsYXNzPVwibGluZVwiIC8+XG5cbiAgICAgICAgICAgIDwhLS0gQlVHOiBwcm9ibGVtIHdpdGggc2Nyb2xsIHRyYW5zaXN0aW9uIG9uIGlvcyBlbXVsYXRvciAtLT5cbiAgICAgICAgICAgIDwhLS0gPEl0ZW1MaWtlIDppdGVtPVwiaXRlbVwiPjwvSXRlbUxpa2U+IC0tPlxuXG4gICAgICAgICAgICA8R3JpZExheW91dCBjbGFzcz1cIlwiIG1hcmdpblRvcD1cIjVcIiB3aWR0aD1cIjEwMCVcIiByb3c9XCIzXCJcbiAgICAgICAgICAgICAgICAgICAgY29sdW1ucz1cIiosIGF1dG8sIGF1dG9cIiByb3dzPVwiYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2w9XCIwXCIgcm93cz1cImF1dG9cIiBjb2x1bW5zPVwiYXV0byxhdXRvXCIgQHRhcD1cIm9uQ2xpY2tCdXR0b24oKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cIjBcIiByb3c9XCIwXCIgcmVmPVwiaW5mb1wiIGNsYXNzPVwibGlrZS1pY29uIGZhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dGV4dD1cIidmYS1pbmZvLWNpcmNsZScgfCBmb250aWNvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVwiMVwiIHJvdz1cIjBcIiBjbGFzcz1cImxheW91dFwiIDp0ZXh0PVwiaXRlbS5icmVlZF9ncm91cCArICcgLSAnICsgaXRlbS5wcmltYXJ5X2JyZWVkXCI+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2w9XCIxXCIgcm93cz1cImF1dG9cIiBjb2x1bW5zPVwiYXV0byxhdXRvXCIgQHRhcD1cInRvZ2dsZUhlYXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0PVwiMTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XCIwXCIgcm93PVwiMFwiIHJlZj1cImZhdm9yaXRlXCIgY2xhc3M9XCJsaWtlLWljb24gIGZhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJbaXRlbS5pc0Zhdm9yaXRlID8gJ2hlYXJ0LWFjdGl2ZScgOiAnZGVmYXVsdCddXCIgOnRleHQ9XCJpdGVtLmlzRmF2b3JpdGUgPyAnZmEtaGVhcnQnOidmYS1oZWFydC1vJyB8IGZvbnRpY29uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XCIxXCIgcm93PVwiMFwiIGNsYXNzPVwibGF5b3V0XCIgdGV4dD1cIkZhdm9yaXRlXCI+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY29sPVwiMlwiIG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJlZj1cIlwiIGNsYXNzPVwibGlrZS1pY29uIGxheW91dCBmYVwiIDp0ZXh0PVwiJ2ZhLXNoYXJlLXNxdWFyZS1vJyB8IGZvbnRpY29uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImxheW91dFwiIHRleHQ9XCJTaGFyZVwiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxuXG4gICAgICAgIDxTdGFja0xheW91dCB3aWR0aD1cIjEwMCVcIiBjbGFzcz1cImxpbmVCcmVha1wiIC8+XG5cbiAgICA8L1N0YWNrTGF5b3V0PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbi8vIGltcG9ydCBJdGVtTGlrZSBmcm9tIFwiLi9pdGVtTGlrZVwiO1xuaW1wb3J0IHsgaXNJT1MsIGlzQW5kcm9pZCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiBbXCJpdGVtXCJdLFxuICBjb21wb25lbnRzOiB7XG4gICAgLy8gSXRlbUxpa2VcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBjYXRlZ29yeUljb24oKSB7XG4gICAgICBzd2l0Y2ggKHRoaXMuaXRlbS5nZW5kZXIpIHtcbiAgICAgICAgY2FzZSBcIk1cIjpcbiAgICAgICAgICB0aGlzLml0ZW0uY2F0ZWdvcnlUYWcgPSBcIiMwMDk5ZmZcIlxuICAgICAgICAgIHJldHVybiBcImZhLW1hcnNcIjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkZcIjpcbiAgICAgICAgICB0aGlzLml0ZW0uY2F0ZWdvcnlUYWcgPSBcIiNmZmNjZmZcIlxuICAgICAgICAgIHJldHVybiBcImZhLXZlbnVzXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIFwiZmEtZmlyZVwiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgY3JlYXRlZCgpIHtcbiAgICAvLyB0aGlzLmlzTGlrZSA9ICB0aGlzLml0ZW0uaXNMaWtlXG4gICAgLy8gdGhpcy5pc0hlYXJ0ID0gIHRoaXMuaXRlbS5pc0Zhdm9yaXRlXG4gIH0sXG4gIG1vdW50ZWQoKSB7fSxcbiAgbWV0aG9kczoge1xuICAgIGFuaW1hdGVGYXZvcml0ZSgpIHtcbiAgICAgIGlmIChpc0lPUykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsZXQgaW1nTG9nbyA9IHRoaXMuJHJlZnMuZmF2b3JpdGUubmF0aXZlVmlldztcbiAgICAgIGltZ0xvZ29cbiAgICAgICAgLmFuaW1hdGUoe1xuICAgICAgICAgIHNjYWxlOiB7XG4gICAgICAgICAgICB4OiAwLjYsXG4gICAgICAgICAgICB5OiAwLjZcbiAgICAgICAgICB9LFxuICAgICAgICAgIGR1cmF0aW9uOiA1MCxcbiAgICAgICAgICBkZWxheTogMFxuICAgICAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gaW1nTG9nby5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjYWxlOiB7XG4gICAgICAgICAgICAgIHg6IDEuMixcbiAgICAgICAgICAgICAgeTogMS4yLFxuICAgICAgICAgICAgICBkdXJhdGlvbjogNTBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGltZ0xvZ28uYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY2FsZToge1xuICAgICAgICAgICAgICB4OiAxLFxuICAgICAgICAgICAgICB5OiAxLFxuICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge30pO1xuICAgIH0sXG4gICAgdG9nZ2xlSGVhcnQoKSB7XG4gICAgICB0aGlzLmFuaW1hdGVGYXZvcml0ZSgpO1xuICAgICAgdGhpcy5pdGVtLmlzRmF2b3JpdGUgPSAhdGhpcy5pdGVtLmlzRmF2b3JpdGU7XG4gICAgfSxcbiAgICBvbkNsaWNrQnV0dG9uKCkge1xuICAgICAgdGhpcy4kZW1pdChcImNsaWNrZWRcIiwgdGhpcy5pdGVtKTtcbiAgICB9XG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzTGlrZTogZmFsc2UsXG4gICAgICBpc0hlYXJ0OiBmYWxzZVxuICAgIH07XG4gIH1cbn07XG48L3NjcmlwdD5cbjxzdHlsZSBzY29wZWQ+XG4uaXRlbS1jYXRlZ29yeSB7XG4gIGZvbnQtc2l6ZTogMTQ7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuXG4uZ2VuZGVyLWljb24ge1xuICBwYWRkaW5nLXRvcDogMztcbiAgcGFkZGluZy1yaWdodDogMztcbiAgZm9udC1zaXplOiAxNjtcbiAgbWFyZ2luLXJpZ2h0OiAxMDtcbn1cblxuLmluZm8taWNvbiB7XG4gIHBhZGRpbmctdG9wOiAzO1xuICBwYWRkaW5nLWxlZnQ6IDM7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDE0O1xuICBtYXJnaW4tbGVmdDogMTA7XG59XG5cbi5yYXRpbmctdmFsdWUge1xuICBtYXJnaW4tbGVmdDogNTtcbn1cblxuLmxpa2VkLWFjdGl2ZSB7XG4gIGNvbG9yOiAjNDA4MGZmO1xufVxuXG4uaGVhcnQtYWN0aXZlIHtcbiAgY29sb3I6ICNiNTEyMTM7XG59XG5cbi5kZWZhdWx0IHtcbiAgY29sb3I6ICM4MjgyODI7XG59XG5cblxuLmxheW91dCB7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gIGNvbG9yOiAjODI4MjgyO1xuICBmb250LXNpemU6IDE0O1xuICBoZWlnaHQ6IDMwO1xuICBwYWRkaW5nOiA1IDAgNSAwO1xufVxuXG4ubGlrZS1pY29uIHtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgaGVpZ2h0OiAzMDtcbiAgZm9udC1zaXplOiAxNjtcbiAgbWFyZ2luLXJpZ2h0OiAyO1xuICBwYWRkaW5nOiA1IDUgNSA1O1xufVxuXG4uaXRlbS1uYW1lIHtcbiAgZm9udC1zaXplOiAxNDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctYm90dG9tOiAyO1xufVxuXG4uaXRlbS1jYXRlZ29yeSB7XG4gIGZvbnQtc2l6ZTogMTQ7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuXG4uY2F0ZWdvcnktaWNvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDU7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjU7XG4gIGJvcmRlci13aWR0aDogMTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tdG9wOiA0O1xuICBtYXJnaW4tcmlnaHQ6IDE1O1xuICB3aWR0aDogNDA7XG4gIGhlaWdodDogNDA7XG59XG5cbi5jb250ZW50IHtcbiAgbWFyZ2luLWxlZnQ6IDE2O1xuICBtYXJnaW4tcmlnaHQ6IDE2O1xuICBtYXJnaW4tYm90dG9tOiAzO1xuICBtYXJnaW4tdG9wOiAxNjtcbn1cblxuLmNhcmQtaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTUwO1xuICBtYXJnaW4tYm90dG9tOiA1O1xufVxuXG4ubGluZSB7XG4gIGhlaWdodDogMC41O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjZTBlMGUwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xufVxuXG4ubGluZUJyZWFrIHtcbiAgaGVpZ2h0OiA3O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjZTBlMGUwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xufVxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XG5cbiAgICA8R3JpZExheW91dCByb3dzPVwiKlwiIGNvbHVtbnM9XCIqXCI+XG4gICAgICAgIDxJbWFnZSBoZWlnaHQ9XCIxNTBcIiB3aWR0aD1cIjEwMCVcIiBtYXJnaW5Cb3R0b209XCIxMFwiIHN0cmV0Y2g9XCJhc3BlY3RGaWxsXCJcbiAgICAgICAgICAgIDpzcmM9XCJpdGVtLmNvdmVyXCIgLz4gLz5cbiAgICAgICAgPEdyaWRMYXlvdXQgdmVydGljYWxBbGlnbm1lbnQ9XCJib3R0b21cIj5cbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImJhbm5lcjJcIiBiYWNrZ3JvdW5kQ29sb3I9XCIjNDg5ZTllOWVcIj5cbiAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJpdGVtLmNhdGVnb3J5ICsgJyAoJyArICBpdGVtLmNvdW50ICArICAnKSdcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNhdGVnb3J5LW5hbWUgIG0tYi0xMCBtLXQtMTBcIiB0ZXh0d3JhcD1cInRydWVcIj48L0xhYmVsPlxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgPC9HcmlkTGF5b3V0PlxuICAgIDwvR3JpZExheW91dD5cblxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBwcm9wczogW1wiaXRlbVwiXSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgb25DbGlja0J1dHRvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdChcImNsaWNrZWRcIiwgZGF0YS5pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH1cbiAgICB9O1xuPC9zY3JpcHQ+XG48c3R5bGUgc2NvcGVkPlxuICAgIC5kZWZhdWx0LWltZyB7XG4gICAgICAgIGNvbG9yOiAjZDFjZWNlNWI7XG4gICAgfVxuXG4gICAgLmNhdGVnb3J5LW5hbWUge1xuICAgICAgICBjb2xvcjogI2Y3ZjdmNztcbiAgICAgICAgZm9udC1zaXplOiAxNDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiA1IDAgMTUgMFxuICAgIH1cblxuICAgIC5iYW5uZXIge1xuICAgICAgICBjb2xvcjogI2JkYmRiZDtcbiAgICAgICAgb3BhY2l0eTogLjM7XG4gICAgfVxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XG48U3RhY2tMYXlvdXQ+XG4gIDxJbWFnZSB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiIDpzcmM9XCJzcmNcIiBzdHJldGNoPVwiYXNwZWN0Rml0XCIgaGVpZ2h0PVwiMTEwXCIgaW9zOmhlaWdodD1cIjEyMFwiIGNsYXNzPVwiaW1hZ2VcIiBAdGFwPVwiYWN0aW9uXCIgLz5cbiAgPEJ1dHRvbiB2ZXJ0aWNhbEFsaWdubWVudD1cImJvdHRvbVwiIGNsYXNzPVwiYnV0dG9uXCIgOnRleHQ9XCJgJHtpY29ufSAke3RpdGxlfWBcIiBAdGFwPVwiYWN0aW9uXCIgLz5cbjwvU3RhY2tMYXlvdXQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGljb246IFN0cmluZyxcbiAgICAgIHRpdGxlOiBTdHJpbmcsXG4gICAgICBhY3Rpb246IEZ1bmN0aW9uLFxuICAgICAgc3JjOiBTdHJpbmdcbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXG4vKiBidXR0b24gb24gYW5kcm9pZCBpcyBzdHlsZWQgd2l0aCBkZWZhdWx0IHNldHRpbmcgd2hlbiBib3JkZXIgcmFkaXVzIGlzIG9taXR0ZWQqL1xuLmJ1dHRvbntcbiAgYm9yZGVyLXJhZGl1czogMjUlO1xufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbjxTdGFja0xheW91dD5cbiAgPEJ1dHRvbiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiIGNsYXNzPVwiYnV0dG9uXCIgOnRleHQ9XCJgJHt0aXRsZX0gJHtpY29ufSBgXCIgQHRhcD1cImFjdGlvblwiIC8+XG48L1N0YWNrTGF5b3V0PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIHByb3BzOiB7XG4gICAgICBpY29uOiBTdHJpbmcsXG4gICAgICB0aXRsZTogU3RyaW5nLFxuICAgICAgYWN0aW9uOiBGdW5jdGlvbixcbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXG4vKiBidXR0b24gb24gYW5kcm9pZCBpcyBzdHlsZWQgd2l0aCBkZWZhdWx0IHNldHRpbmcgd2hlbiBib3JkZXIgcmFkaXVzIGlzIG9taXR0ZWQqL1xuLmJ1dHRvbntcbiAgYm9yZGVyLXJhZGl1czogMjUlO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8UGFnZSBjbGFzcz1cInBhZ2VcIj5cbiAgICAgICAgPEFjdGlvbkJhciBjbGFzcz1cImFjdGlvbi1iYXJcIj5cbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uIEB0YXA9XCIkbmF2aWdhdGVCYWNrKClcIiBhbmRyb2lkLnN5c3RlbUljb249XCJpY19tZW51X2JhY2tcIiAvPlxuICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiYWN0aW9uLWJhci10aXRsZVwiIDp0ZXh0PVwiQW5pbWFsQ2VudGVyLm5hbWVcIiBob3Jpem9udGFsQWxpZ25tZW50PVwiY2VudGVyXCIgLz4+XG4gICAgICAgIDwvQWN0aW9uQmFyPlxuXG4gICAgICAgIDxTY3JvbGxWaWV3PlxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgIDwhLS0gQW5pbWFsIENlbnRlciBjb3ZlciBwaWMgLS0+XG4gICAgICAgICAgICAgICAgPEltYWdlIDpzcmM9XCJBbmltYWxDZW50ZXIuaW1hZ2VVUkxcIiBzdHJldGNoPVwiYXNwZWN0Rml0XCIgaGVpZ2h0PVwiMjAwXCIgY2xhc3M9XCJhbmltLWNvdmVyIG0tYi0xNVwiIC8+XG5cbiAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiMVwiIGNsYXNzPVwiaHItbGlnaHQgbS10LTE1IG0tYi0xNVwiLz5cblxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XCIqLCAqLCAqLCBhdXRvXCIgY29sdW1ucz1cImF1dG8sKlwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gbmFtZSAtLT5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHJvdz1cIjBcIiBjb2w9XCIwXCIgY2xhc3M9XCJhbmltLWNvbnRlbnQxIHAtbC0xNSBwLWItMTAgbS1yLTIwXCIgc3JjPVwifi9hc3NldHMvaW1hZ2VzL2FjaG91c2UucG5nXCIgc3RyZXRjaD1cImFzcGVjdEZpdFwiIGhlaWdodD1cIjQwXCIgd2lkdGg9XCI0MFwiIGxvYWRNb2RlPVwiYXN5bmNcIiBtYXJnaW49XCIzXCIvPlxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiMFwiIGNvbD1cIjFcIiAgY2xhc3M9XCJhbmltLWNvbnRlbnQxIHRleHQgcC1iLTEwIGZvbnQtd2VpZ2h0LWJvbGQgdGl0bGUgc3RhY2tcIiBtYXJnaW49XCI1XCIgdGV4dFdyYXA9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIDp0ZXh0PVwiQW5pbWFsQ2VudGVyLm5hbWUgKyAnIEFuaW1hbCBDYXJlIENlbnRlcidcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XG4gICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XG5cblxuICAgICAgICAgICAgICAgICAgICA8IS0tIGFkZHJlc3MgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSByb3c9XCIxXCIgY29sPVwiMFwiIGNsYXNzPVwiYW5pbS1jb250ZW50MiBwLWwtMTUgcC1iLTEwIG0tci0yMFwiICBzcmM9XCJ+L2Fzc2V0cy9pbWFnZXMvbG9jYXRpb25pY29uLnBuZ1wiIHN0cmV0Y2g9XCJhc3BlY3RGaXRcIiBoZWlnaHQ9XCI0MFwiIHdpZHRoPVwiNDBcIiBsb2FkTW9kZT1cImFzeW5jXCIgbWFyZ2luPVwiM1wiLz5cblxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiMVwiIGNvbD1cIjFcIiBjbGFzcz1cImFuaW0tY29udGVudDIgcC1iLTEwIHN0YWNrXCIgbWFyZ2luPVwiNVwiIEB0YXA9XCJvbkFkZHJlc3NUYXBcIiB0ZXh0V3JhcD1cInRydWVcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuICBjbGFzcz1cImZhIHRleHQtcHJpbWFyeVwiIDp0ZXh0PVwiQW5pbWFsQ2VudGVyLmFkZHJlc3NcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XG4gICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8IS0tIHBob25lIC0tPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugcm93PVwiMlwiIGNvbD1cIjBcIiBjbGFzcz1cImFuaW0tY29udGVudDMgcC1sLTE1IHAtYi0xMCBtLXItMjBcIiAgc3JjPVwifi9hc3NldHMvaW1hZ2VzL3Bob25laWNvbi5wbmdcIiBzdHJldGNoPVwiYXNwZWN0Rml0XCIgaGVpZ2h0PVwiNDBcIiB3aWR0aD1cIjQwXCIgbG9hZE1vZGU9XCJhc3luY1wiIG1hcmdpbj1cIjNcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIyXCIgY29sPVwiMVwiIGNsYXNzPVwiYW5pbS1jb250ZW50MyBmYSB0ZXh0LXByaW1hcnkgcC1iLTEwIHN0YWNrXCIgOnRleHQ9XCJBbmltYWxDZW50ZXIucGhvbmVcIiBAdGFwPVwib25QaG9uZVRhcFwiIG1hcmdpbj1cIjVcIiAgLz5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gaG91cnMgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSByb3c9XCIzXCIgY29sPVwiMFwiIGNsYXNzPVwiYW5pbS1jb250ZW50NCBwLWwtMTUgcC1iLTEwIG0tci0yMFwiIHNyYz1cIn4vYXNzZXRzL2ltYWdlcy9ob3Vyc2ljb24ucG5nXCIgc3RyZXRjaD1cImFzcGVjdEZpdFwiIGhlaWdodD1cIjQwXCIgd2lkdGg9XCI0MFwiIGxvYWRNb2RlPVwiYXN5bmNcIiBtYXJnaW49XCIzXCIvPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCByb3c9XCIzXCIgY29sPVwiMVwiIGNvbHVtbnM9XCIqLCAqXCIgcm93cz1cImF1dG8sIGF1dG9cIiBjbGFzcz1cImFuaW0tY29udGVudDQgc3RhY2staG91cnNcIiAgbWFyZ2luPVwiNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjBcIiBjb2w9XCIwXCIgY2xhc3M9XCJob3Vyc1wiIDp0ZXh0PVwiQW5pbWFsQ2VudGVyLmF2YWlsYWJpbGl0eS53ZWVrZGF5XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIwXCIgY29sPVwiMVwiIGNsYXNzPVwiaG91cnNcIiA6dGV4dD1cIkFuaW1hbENlbnRlci5hdmFpbGFiaWxpdHkud2Vla2RheWhvdXJzXCIgIHRleHRXcmFwPVwidHJ1ZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIxXCIgY29sPVwiMFwiIGNsYXNzPVwiaG91cnNcIiA6dGV4dD1cIkFuaW1hbENlbnRlci5hdmFpbGFiaWxpdHkud2Vla2VuZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiMVwiIGNvbD1cIjFcIiBjbGFzcz1cImhvdXJzXCIgOnRleHQ9XCJBbmltYWxDZW50ZXIuYXZhaWxhYmlsaXR5LndlZWtlbmRob3Vyc1wiICB0ZXh0V3JhcD1cInRydWVcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cblxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgIDwvU2Nyb2xsVmlldz5cbiAgICA8L1BhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuLy8gLS0tcGx1Z2lucy0tLVxuLy8gcGhvbmVcbnZhciBwaG9uZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGhvbmVcIik7XG5cbi8vIGRpcmVjdGlvbnNcbnZhciBEaXJlY3Rpb25zID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1kaXJlY3Rpb25zXCIpLkRpcmVjdGlvbnM7XG5sZXQgZGlyZWN0aW9ucyA9IG5ldyBEaXJlY3Rpb25zKCk7XG4vLy0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczogW1wiQW5pbWFsQ2VudGVyXCJdLFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgYW5pbWFsQ2VudGVyRGF0YSgpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiYW5pbWFsQ2VudGVyRGF0YSgpLCByZXR1cm5pbmcgZGF0YTogXCIgKyB0aGlzLkFuaW1hbENlbnRlcik7XG4gICAgICByZXR1cm4gdGhpcy5BbmltYWxDZW50ZXIgfHwge307XG4gICAgfVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBvbkFkZHJlc3NUYXAoKSB7XG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgXCJvbkFkZHJlc3NUYXAoKSwgZ2V0IGRpcmVjdGlvbnMgdG8gXCIgKyB0aGlzLkFuaW1hbENlbnRlci5hZGRyZXNzXG4gICAgICApO1xuXG4gICAgICAvLyBtdXN0IHBhc3MgaW4gc3RyaW5nIGFzIHZhcmlhYmxlIG90aGVyd2lzZSBpdCBkaXJlY3Rpb25zLm5hdmlnYXRlKCkgd29uJ3Qgd29ya1xuICAgICAgY29uc3QgYWRkcmVzcyA9IHRoaXMuQW5pbWFsQ2VudGVyLmFkZHJlc3M7XG5cbiAgICAgIGRpcmVjdGlvbnMuYXZhaWxhYmxlKCkudGhlbihmdW5jdGlvbihhdmFpbCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKGF2YWlsID8gXCJZZXNcIiA6IFwiTm9cIik7XG4gICAgICAgIGlmIChhdmFpbCkge1xuICAgICAgICAgIGRpcmVjdGlvbnNcbiAgICAgICAgICAgIC5uYXZpZ2F0ZSh7XG4gICAgICAgICAgICAgIHRvOiB7XG4gICAgICAgICAgICAgICAgLy8gZWl0aGVyIHBhc3MgaW4gYSBzaW5nbGUgb2JqZWN0IG9yIGFuIEFycmF5XG4gICAgICAgICAgICAgICAgYWRkcmVzczogYWRkcmVzc1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTWFwcyBhcHAgbGF1bmNoZWQuXCIpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBvblBob25lVGFwKCkge1xuICAgICAgY29uc29sZS5sb2coXCJvblBob25lVGFwKCksIGNhbGwgXCIgKyB0aGlzLkFuaW1hbENlbnRlci5waG9uZSk7XG4gICAgICBwaG9uZS5kaWFsKHRoaXMuQW5pbWFsQ2VudGVyLnBob25lLCB0cnVlKTtcbiAgICB9LFxuICAgIFxuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cbkBpbXBvcnQgXCJAL0FuaW1hbENlbnRlclwiO1xuXG4vLy0tLSA8YW5pbWF0aW9uPiAtLS1cblxuLy8gY292ZXIgaW1hZ2Vcbi5hbmltLWNvdmVyIHtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uLW5hbWU6IGtleS1jb3ZlcjtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxO1xuICBhbmltYXRpb24tZGVsYXk6IDAuNTtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xufVxuXG5Aa2V5ZnJhbWVzIGtleS1jb3ZlciB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDEwMCkgc2NhbGUoMCwgMCk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XG4gIH1cblxuICAzMCUge1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSwgMSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XG4gIH1cbn1cblxuLy8gaWNvbnMgJiBjb250ZW50XG4uYW5pbS1jb250ZW50MSB7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbi1uYW1lOiBrZXktY29udGVudDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxO1xuICBhbmltYXRpb24tZGVsYXk6IDAuNzU7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcbn1cblxuLmFuaW0tY29udGVudDIge1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb24tbmFtZToga2V5LWNvbnRlbnQ7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjA7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcbn1cblxuLmFuaW0tY29udGVudDMge1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb24tbmFtZToga2V5LWNvbnRlbnQ7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjI1O1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XG59XG5cbi5hbmltLWNvbnRlbnQ0IHtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uLW5hbWU6IGtleS1jb250ZW50O1xuICBhbmltYXRpb24tZHVyYXRpb246IDE7XG4gIGFuaW1hdGlvbi1kZWxheTogMS41O1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XG59XG5cblxuQGtleWZyYW1lcyBrZXktY29udGVudCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwLCA1MCk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XG4gIH1cblxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xuICB9XG59XG4vLy0tLSA8L2FuaW1hdGlvbj4gLS0tXG5cblxuLy8tLS0gY3NzIC0tLVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDE4ZW07XG4gIGNvbG9yOiAkbWlkbmlnaHQtZGFyaztcblxufVxuXG4uc3RhY2sge1xuICBwYWRkaW5nLXRvcDogMTQ7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDE7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYigyMTIsIDIxMiwgMjEyKTtcbn1cblxuLnN0YWNrLWhvdXJzIHtcbiAgcGFkZGluZy10b3A6IDY7XG59XG5cbi5ob3VycyB7XG4gIGNvbG9yOiAkYmx1ZS1kYXJrO1xuXG59XG5cbkFjdGlvbkJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDlmY2E7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwidmVydGljYWxcIj5cbiAgICA8TGFiZWwgY2xhc3M9XCJob21lcGFnZS1ibHVlIHRleHQtcHJpbWFyeSBsaXN0LWdyb3VwLWl0ZW0tdGV4dCBmb250LXdlaWdodC1ib2xkXCIgdGV4dFdyYXA9XCJ0cnVlXCI+XG4gICAgPEZvcm1hdHRlZFN0cmluZz5cbiAgICAgICAgPFNwYW4gOnRleHQ9XCJpdGVtLnF1ZXJ5XCIvPlxuICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XG4gICAgPC9MYWJlbD5cbiAgICBcbiAgICA8TGFiZWwgY2xhc3M9XCIuZmFxX2Fuc3dlciAubGlzdC1ncm91cC1pdGVtLWNvbnRlbnRcIiB0ZXh0V3JhcD1cInRydWVcIj5cbiAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XG4gICAgICAgIDxTcGFuIHRleHQuZGVjb2RlPVwiJiM5O1wiLz5cbiAgICAgICAgPFNwYW4gOnRleHQ9XCJpdGVtLmFuc3dlclwiLz5cbiAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxuICAgIDwvTGFiZWw+XG4gXG4gIDwvU3RhY2tMYXlvdXQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIGl0ZW06IE9iamVjdFxuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cbkBpbXBvcnQgXCJAL0FuaW1hbENlbnRlclwiO1xuXG4uZmFxX3F1ZXN0aW9uIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjA7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5mYXFfYW5zd2VyIHtcbiAgY29sb3I6ICM0NTQ1NDU7XG59XG5cbi5saXN0LWdyb3VwLWl0ZW0tdGV4dCB7XG4gIG1hcmdpbjogMiAzO1xufVxuLmxpc3QtZ3JvdXAtaXRlbS1jb250ZW50IHtcbiAgcGFkZGluZzogOCAxNSA0IDE1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1saWdodDtcbn1cblxuLmhvbWVwYWdlLWJsdWUge1xuICBjb2xvcjogJGhvbWVwYWdlLWJsdWU7XG59XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuXHQ8cGFnZSBhY3Rpb25CYXJIaWRkZW49XCJmYWxzZVwiIGJhY2tncm91bmRTcGFuVW5kZXJTdGF0dXNCYXI9XCJ0cnVlXCI+XG5cdFx0PCEtLSBAbG9hZGVkPVwib25Mb2FkZWRcIiAtLT5cbiAgICAgICAgPEFjdGlvbkJhciBjbGFzcz1cImFjdGlvbmJhciBuYXZUYWJcIj5cbiAgICAgICAgICAgPE5hdmlnYXRpb25CdXR0b24gQHRhcD1cIiRuYXZpZ2F0ZUJhY2soKVwiIGFuZHJvaWQuc3lzdGVtSWNvbj1cImljX21lbnVfYmFja1wiIC8+XG4gICAgICAgICAgICA8TGFiZWwgZm9udFNpemU9XCIxOFwiIHRleHQ9XCJBbmltYWxzIGZvciBBZG9wdGlvblwiPjwvTGFiZWw+XG4gICAgICAgIDwvQWN0aW9uQmFyPlxuXG5cdFx0PEdyaWRMYXlvdXQgcm93cz1cImF1dG8sYXV0bywqXCIgY29sdW1ucz1cImF1dG9cIj5cblxuPCEtLW5hdiB0YWItLT5cblxuXHRcdFx0PEdyaWRMYXlvdXQgIHJvdz1cIjFcIiByZWY9XCJuYXZUYWJcIiBjbGFzcz1cIm5hdlRhYlwiIHZlcnRpY2FsQWxpZ25tZW50PVwidG9wXCIgaGVpZ2h0PVwiNTBcIlxuXHRcdFx0XHRcdHdpZHRoPVwiMTAwJVwiICByb3dzPVwiYXV0b1wiIGNvbHVtbnM9XCJhdXRvLGF1dG9cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8IS0tYWN0aXZlIGNsYXNzIHRhYiBuYXZpZ2F0aW9uKioqKi0tPlxuXHRcdFx0XHRcdDxHcmlkTGF5b3V0IGNsYXNzPVwidGFidmlld1wiIDpjbGFzcz1cInNlbGVjdGVkVGFidmlldz09MD8nYWN0aXZlJzonJ1wiXG5cdFx0XHRcdFx0XHRcdEB0YXA9XCJhZG9wdGlvbkxpc3RcIiByb3dzPVwiKixhdXRvXCIgY29scz1cImF1dG9cIiBjb2w9XCIwXCIgcm93PVwiMFwiXG5cdFx0XHRcdFx0XHRcdHdpZHRoPVwiNTAlXCI+XG5cblx0XHRcdFx0XHRcdFx0PExhYmVsIHYtc2hvdz1cInNlbGVjdGVkVGFidmlldz09MFwiIHJvdz1cIjBcIiBjbGFzcz1cImZhIG5hdkljb25cIlxuXHRcdFx0XHRcdFx0XHRcdFx0OnRleHQ9XCJzZWxlY3RlZFRhYnZpZXc9PTA/J2ZhLXBhdyc6JycgfCBmb250aWNvblwiLz5cblxuXHRcdFx0XHRcdFx0XHQ8TGFiZWwgaG9yaXpvbnRhbEFsaWdubWVudD1cImNlbnRlclwiIDpjbGFzcz1cInNlbGVjdGVkVGFidmlldz09MD8nYWN0aXZlJzonJ1wiIHJvdz1cIjFcIlxuXHRcdFx0XHRcdFx0XHRcdFx0dGV4dD1cIkFuaW1hbHNcIiBjbGFzcz1cInRhYnZpZXdUZXh0XCI+PC9MYWJlbD5cblxuXHRcdFx0XHRcdDwvR3JpZExheW91dD5cblxuXHRcdFx0XHRcdDxHcmlkTGF5b3V0IGNsYXNzPVwidGFidmlld1wiIDpjbGFzcz1cInNlbGVjdGVkVGFidmlldz09MT8nYWN0aXZlJzonJ1wiXG5cdFx0XHRcdFx0XHRcdEB0YXA9XCJzaG93Q2F0ZWdvcnlcIiByb3dzPVwiKixhdXRvXCIgY29scz1cImF1dG9cIiBjb2w9XCIxXCIgcm93PVwiMFwiXG5cdFx0XHRcdFx0XHRcdHdpZHRoPVwiNTAlXCI+XG5cblx0XHRcdFx0XHRcdFx0PExhYmVsIHYtc2hvdz1cInNlbGVjdGVkVGFidmlldz09MVwiIHJvdz1cIjBcIiBjbGFzcz1cImZhIG5hdkljb25cIlxuXHRcdFx0XHRcdFx0XHRcdFx0OnRleHQ9XCJzZWxlY3RlZFRhYnZpZXc9PTE/J2ZhLWZpbHRlcic6JycgfCBmb250aWNvblwiLz5cblxuXHRcdFx0XHRcdFx0XHQ8TGFiZWwgOmNsYXNzPVwic2VsZWN0ZWRUYWJ2aWV3PT0xPydhY3RpdmUnOicnXCIgcm93PVwiMVwiXG5cdFx0XHRcdFx0XHRcdFx0XHR0ZXh0PVwiRmlsdGVyXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cImNlbnRlclwiIGNsYXNzPVwidGFidmlld1RleHRcIj48L0xhYmVsPlx0XHRcdFx0XHRcdFxuXG5cdFx0XHRcdFx0PC9HcmlkTGF5b3V0PlxuXHRcdFx0XHRcdDwhLS0gZW5kIG5hdi0tPlxuXHRcdFx0PC9HcmlkTGF5b3V0PlxuXG48IS0tc2VsZWN0ZWQgdGFiIHNldCB0byB2aWV3IGFuaW1hbCAtLT5cbjwhLS1pdGVtIC0tPlxuXHRcdFx0PEdyaWRMYXlvdXQgdi1zaG93PVwic2VsZWN0ZWRUYWJ2aWV3ID09IDBcIiByb3c9XCIyXCIgd2lkdGg9XCIxMDAlXCIgYmFja2dyb3VuZENvbG9yPVwid2hpdGVcIj5cbjwhLS1UT0RPOiBDSEFOR0UgOktFWSBUTyBESUZGRVJFTlQgVkFMVUUgLS0+XG48IS0tIFZVRSBXQVJOSU5HOiBEdXBsaWNhdGUga2V5cyBkZXRlY3RlZDogJ1tvYmplY3QgT2JqZWN0XScuIFRoaXMgbWF5IGNhdXNlIGFuIHVwZGF0ZSBlcnJvci4gZm91bmQgaW4gPEFkb3B0aW9uQW5pbWFsRGV0YWlscz4gLS0+XG5cdFx0XHRcdDxMaXN0VmlldyByZWY9XCJsaXN0dmlld1wiIHNlcGFyYXRvckNvbG9yPVwidHJhbnNwYXJlbnRcIiBmb3I9XCJpdGVtIGluIGl0ZW1zXCIgOmtleT1cImluZGV4XCI+XG5cblx0XHRcdFx0XHQ8di10ZW1wbGF0ZT5cblx0XHRcdFx0XHRcdDxpdGVtIDppdGVtPVwiaXRlbVwiIEBjbGlja2VkPVwic2hvd0l0ZW0oaXRlbSlcIiAvPlxuXHRcdFx0XHRcdDwvdi10ZW1wbGF0ZT5cblxuXHRcdFx0XHQ8L0xpc3RWaWV3PlxuXHRcdFx0PC9HcmlkTGF5b3V0PlxuXG48IS0tc2VsZWN0ZWQgdGFiIHZpZXcgZmlsdGVyIC0tPlxuXHRcdFx0PEdyaWRMYXlvdXQgdi1zaG93PVwic2VsZWN0ZWRUYWJ2aWV3ID09IDFcIiByb3c9XCIyXCIgd2lkdGg9XCIxMDAlXCIgYmFja2dyb3VuZENvbG9yPVwid2hpdGVcIj5cdFx0XG5cblx0XHRcdFx0PFJhZExpc3RWaWV3IHJlZj1cImxpc3R2aWV3XCIgc2VwYXJhdG9yQ29sb3I9XCJ0cmFuc3BhcmVudFwiIGZvcj1cIml0ZW0gaW4gaXRlbXNDYXRlZ29yeVwiIDprZXk9XCJpbmRleFwiPlxuXG5cdFx0XHRcdFx0PHYtdGVtcGxhdGU+XG5cdFx0XHRcdFx0XHQ8Q2F0ZWdvcnkgOml0ZW09XCJpdGVtXCI+IDwvQ2F0ZWdvcnk+XG5cdFx0XHRcdFx0PC92LXRlbXBsYXRlPlxuICAgICAgICAgIFxuXHRcdFx0XHQ8L1JhZExpc3RWaWV3PlxuXHRcdFx0PC9HcmlkTGF5b3V0PlxuXG5cdFx0PC9HcmlkTGF5b3V0PlxuPC9wYWdlPlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG4vLyBpbXBvcnQgeyBTd2lzc0FybXlLbmlmZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtc3dpc3MtYXJteS1rbmlmZVwiO1xuaW1wb3J0IHsgaXNJT1MsIGlzQW5kcm9pZCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG4vLyBpbXBvcnQgbmF2Qm90dG9tIGZyb20gXCIuL2N1c3RvbS9uYXZCb3R0b21cIjtcbmltcG9ydCBJdGVtIGZyb20gXCJAL2NvbXBvbmVudHMvYWRvcHRpb24vQW5pbWFsQ2FyZFwiO1xuaW1wb3J0IENhdGVnb3J5IGZyb20gXCJAL2NvbXBvbmVudHMvYWRvcHRpb24vY2F0ZWdvcnlcIjtcbmltcG9ydCBJdGVtRGV0YWlscyBmcm9tIFwiQC9jb21wb25lbnRzL2Fkb3B0aW9uL0Fkb3B0aW9uQW5pbWFsRGV0YWlsc1wiO1xuXG5jb25zdCBnZXN0dXJlcyA9IHJlcXVpcmUoXCJ1aS9nZXN0dXJlc1wiKTtcbmNvbnN0IGFwcCA9IHJlcXVpcmUoXCJhcHBsaWNhdGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7XG4gICAgLy8gbmF2Qm90dG9tLFxuICAgIEl0ZW0sXG4gICAgQ2F0ZWdvcnlcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBpdGVtc0NhdGVnb3J5KCkge1xuICAgICAgcmV0dXJuIHRoaXMuY2F0ZWdvcnkuc2xpY2UoKS5yZXZlcnNlKCk7XG4gICAgfVxuICB9LFxuXG4gIG1vdW50ZWQoKSB7XG4gICAgLy8gU3dpc3NBcm15S25pZmUuc2V0QW5kcm9pZFN0YXR1c0JhckNvbG9yKFwiI2I1MTIxM1wiKTtcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGFzdERlbFk6IDAsXG4gICAgICBoZWFkZXJDb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgc2VsZWN0ZWRUYWI6IDAsXG4gICAgICBzZWxlY3RlZFRhYnZpZXc6IDAsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJUd2lua2llXCIsXG4gICAgICAgICAgY292ZXI6IFwifi9hc3NldHMvaW1hZ2VzL2RvZy1idXR0b24uanBnXCIsXG4gICAgICAgICAgaW1hZ2VzOiBbXG4gICAgICAgICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvYmVlLnBuZ1wiIH0sXG4gICAgICAgICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvcGVhY29jay5wbmdcIiB9LFxuICAgICAgICAgICAgeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL3JhdHRsZXNuYWtlLnBuZ1wiIH0sXG4gICAgICAgICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvY295b3RlLnBuZ1wiIH0sXG4gICAgICAgICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvbW91bnRhaW5saW9uLnBuZ1wiIH0sXG4gICAgICAgICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvb3Bvc3N1bS5wbmdcIiB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBjYXRlZ29yeTogXCJEb2dcIixcbiAgICAgICAgICBjYXRlZ29yeVRhZzogXCIjMkQ5Q0RCXCIsXG4gICAgICAgICAgYnJlZWRfZ3JvdXA6IFwiVG95XCIsXG4gICAgICAgICAgcHJpbWFyeV9icmVlZDogXCJDaGlodWFodWFcIixcbiAgICAgICAgICBhZ2U6IFwiNCBtb250aHNcIixcbiAgICAgICAgICBnZW5kZXI6IFwiRlwiLFxuICAgICAgICAgIGFuaW1hbF9zaXplOiBcIlNtYWxsXCIsXG4gICAgICAgICAgcHJpbWFyeV9jb2xvcjogXCJUYW5cIixcbiAgICAgICAgICBsb2NhdGlvbjogXCJEb3duZXlcIixcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgICBpc0Zhdm9yaXRlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwiQm9vZ2llXCIsXG4gICAgICAgICAgY292ZXI6IFwifi9hc3NldHMvaW1hZ2VzL2NhdC1yb2FtaW5nLWljb24ucG5nXCIsXG4gICAgICAgICAgaW1hZ2VzOiBbXG4gICAgICAgICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvYmVlLnBuZ1wiIH0sXG4gICAgICAgICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvcGVhY29jay5wbmdcIiB9LFxuICAgICAgICAgICAgeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL3JhdHRsZXNuYWtlLnBuZ1wiIH0sXG4gICAgICAgICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvY295b3RlLnBuZ1wiIH0sXG4gICAgICAgICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvbW91bnRhaW5saW9uLnBuZ1wiIH0sXG4gICAgICAgICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvb3Bvc3N1bS5wbmdcIiB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBjYXRlZ29yeTogXCJDYXRcIixcbiAgICAgICAgICBjYXRlZ29yeVRhZzogXCIjNjEyN2FlXCIsXG4gICAgICAgICAgYnJlZWRfZ3JvdXA6IFwiU2hvcnRoYWlyXCIsXG4gICAgICAgICAgcHJpbWFyeV9icmVlZDogXCJUYWJieVwiLFxuICAgICAgICAgIGFnZTogXCI2XCIsXG4gICAgICAgICAgZ2VuZGVyOiBcIk1cIixcbiAgICAgICAgICBhbmltYWxfc2l6ZTogXCJTbWFsbFwiLFxuICAgICAgICAgIHByaW1hcnlfY29sb3I6IFwiVGFuXCIsXG4gICAgICAgICAgbG9jYXRpb246IFwiRG93bmV5XCIsXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXG4gICAgICAgICAgaXNGYXZvcml0ZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwiU25vb3B5XCIsXG4gICAgICAgICAgY292ZXI6IFwifi9hc3NldHMvaW1hZ2VzL3Nub29weS5qcGdcIixcbiAgICAgICAgICBpbWFnZXM6IFtcbiAgICAgICAgICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9iZWUucG5nXCIgfSxcbiAgICAgICAgICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9wZWFjb2NrLnBuZ1wiIH0sXG4gICAgICAgICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvcmF0dGxlc25ha2UucG5nXCIgfSxcbiAgICAgICAgICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9jb3lvdGUucG5nXCIgfSxcbiAgICAgICAgICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9tb3VudGFpbmxpb24ucG5nXCIgfSxcbiAgICAgICAgICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9vcG9zc3VtLnBuZ1wiIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIGNhdGVnb3J5OiBcIkRvZ1wiLFxuICAgICAgICAgIGNhdGVnb3J5VGFnOiBcIiMyN0FFNjBcIixcbiAgICAgICAgICBicmVlZF9ncm91cDogXCJIb3VuZFwiLFxuICAgICAgICAgIHByaW1hcnlfYnJlZWQ6IFwiQmVhZ2xlXCIsXG4gICAgICAgICAgYWdlOiBcIjEwXCIsXG4gICAgICAgICAgZ2VuZGVyOiBcIk1cIixcbiAgICAgICAgICBhbmltYWxfc2l6ZTogXCJTbWFsbFwiLFxuICAgICAgICAgIHByaW1hcnlfY29sb3I6IFwiVGFuXCIsXG4gICAgICAgICAgbG9jYXRpb246IFwiRG93bmV5XCIsXG4gICAgICAgICAgaXNBdmFpbGFibGU6IGZhbHNlLFxuICAgICAgICAgIGlzRmF2b3JpdGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcIkFyaWFuYVwiLFxuICAgICAgICAgIGNvdmVyOiBcIn4vYXNzZXRzL2ltYWdlcy9jYXQtYnV0dG9uLmpwZ1wiLFxuICAgICAgICAgIGltYWdlczogW1xuICAgICAgICAgICAgeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2JlZS5wbmdcIiB9LFxuICAgICAgICAgICAgeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL3BlYWNvY2sucG5nXCIgfSxcbiAgICAgICAgICAgIHsgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9yYXR0bGVzbmFrZS5wbmdcIiB9LFxuICAgICAgICAgICAgeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2NveW90ZS5wbmdcIiB9LFxuICAgICAgICAgICAgeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL21vdW50YWlubGlvbi5wbmdcIiB9LFxuICAgICAgICAgICAgeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL29wb3NzdW0ucG5nXCIgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgY2F0ZWdvcnk6IFwiQ2F0XCIsXG4gICAgICAgICAgY2F0ZWdvcnlUYWc6IFwiI2U0Y2UwZFwiLFxuICAgICAgICAgIGJyZWVkX2dyb3VwOiBcIkxvbmdoYWlyXCIsXG4gICAgICAgICAgcHJpbWFyeV9icmVlZDogXCJEb21lc3RpY1wiLFxuICAgICAgICAgIGdlbmRlcjogXCJGXCIsXG4gICAgICAgICAgYW5pbWFsX3NpemU6IFwiU21hbGxcIixcbiAgICAgICAgICBwcmltYXJ5X2NvbG9yOiBcIkdyYXlcIixcbiAgICAgICAgICBsb2NhdGlvbjogXCJEb3duZXlcIixcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgICBpc0Zhdm9yaXRlOiB0cnVlLFxuICAgICAgICAgIGFnZTogXCIxMCBtb250aHNcIixcbiAgICAgICAgICBpc0Zhdm9yaXRlOiBmYWxzZSxcbiAgICAgICAgfVxuICAgICAgICAvLyB7XG4gICAgICAgIC8vICAgbmFtZTogXCJNdWZmaW5cIixcbiAgICAgICAgLy8gICBjb3ZlcjogXCJ+L2Fzc2V0cy9pbWFnZXMvZG9nZ28ucG5nXCIsXG4gICAgICAgIC8vICAgaW1hZ2VzOiBbXG4gICAgICAgIC8vICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvYmVlLnBuZ1wiIH0sXG4gICAgICAgIC8vICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvcGVhY29jay5wbmdcIiB9LFxuICAgICAgICAvLyAgICAgeyBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL3JhdHRsZXNuYWtlLnBuZ1wiIH0sXG4gICAgICAgIC8vICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvY295b3RlLnBuZ1wiIH0sXG4gICAgICAgIC8vICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvbW91bnRhaW5saW9uLnBuZ1wiIH0sXG4gICAgICAgIC8vICAgICB7IHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvb3Bvc3N1bS5wbmdcIiB9XG4gICAgICAgIC8vICAgXSxcbiAgICAgICAgLy8gICBjYXRlZ29yeTogXCJEb2dcIixcbiAgICAgICAgLy8gICBjYXRlZ29yeVRhZzogXCIjMjdBRTYwXCIsXG4gICAgICAgIC8vICAgYnJlZWQ6IFwiMzAwLjAwXCIsXG4gICAgICAgIC8vICAgbGlrZXM6IDczMCxcbiAgICAgICAgLy8gICBpc0xpa2U6IHRydWUsXG4gICAgICAgIC8vICAgaXNGYXZvcml0ZTogdHJ1ZSxcbiAgICAgICAgLy8gICBjb21tZW50czogMTEsXG4gICAgICAgIC8vICAgcmF0aW5nOiBcIjQuMFwiLFxuICAgICAgICAvLyAgIGRlc2NyaXB0aW9uOiBcImFcIlxuICAgICAgICAvLyB9XG4gICAgICBdLFxuICAgICAgY2F0ZWdvcnk6IFtcbiAgICAgICAge1xuICAgICAgICAgIGNvdmVyOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2J1cmdlcjY0MC5qcGdcIixcbiAgICAgICAgICBjYXRlZ29yeTogXCJDYXRcIixcbiAgICAgICAgICBjb3VudDogXCIxM1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBjb3ZlcjogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9wYW5jYWtlNjQwLmpwZ1wiLFxuICAgICAgICAgIGNhdGVnb3J5OiBcIkRvZ1wiLFxuICAgICAgICAgIGNvdW50OiBcIjVcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgY292ZXI6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvY2FrZTY0MC5qcGdcIixcbiAgICAgICAgICBjYXRlZ29yeTogXCJMaXZlc3RvY2tcIixcbiAgICAgICAgICBjb3VudDogXCI5XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGNvdmVyOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2JlZXI2NDAuanBnXCIsXG4gICAgICAgICAgY2F0ZWdvcnk6IFwiT3RoZXJcIixcbiAgICAgICAgICBjb3VudDogXCI3XCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBzZWFyY2goKSB7XG4gICAgICBjb25zb2xlLmxvZyhcInNlYXJjaFwiKTtcbiAgICB9LFxuICAgIGJlbGwoKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImJlbGxcIik7XG4gICAgfSxcbiAgICBzaG93SXRlbShwYXlsb2FkKSB7XG4gICAgICB0aGlzLiRuYXZpZ2F0ZVRvKEl0ZW1EZXRhaWxzLCB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgaXRlbTogcGF5bG9hZFxuICAgICAgICB9LFxuICAgICAgICBhbmltYXRlZDogdHJ1ZSxcbiAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgIG5hbWU6IFwic2xpZGVUb3BcIixcbiAgICAgICAgICBkdXJhdGlvbjogMzgwLFxuICAgICAgICAgIGN1cnZlOiBcImVhc2VJblwiXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBhZG9wdGlvbkxpc3QoKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkVGFidmlldyA9IDA7XG4gICAgfSxcblxuICAgIC8vIFRPRE86IHNob3cgZmlsdGVyXG4gICAgc2hvd0NhdGVnb3J5KCkge1xuICAgICAgdGhpcy5zZWxlY3RlZFRhYnZpZXcgPSAxO1xuICAgIH0sXG4gICAgdG9nZ2xlSGVhcnQoKSB7XG4gICAgaWYgKGlzSU9TKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuYW5pbWF0ZUZhdm9yaXRlKCk7XG4gICAgICB0aGlzLml0ZW0uaXNGYXZvcml0ZSA9ICF0aGlzLml0ZW0uaXNGYXZvcml0ZTtcbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuLnRhYnZpZXcuYWN0aXZlIHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDM7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiA1MDtcbn1cbi50YWJ2aWV3VGV4dCB7XG4gIG1hcmdpbi10b3A6IDE1O1xuICBtYXJnaW4tYm90dG9tOiA1O1xuICBmb250LXNpemU6IDEzO1xuICBjb2xvcjogI2Q4ZDJkMjtcbn1cbi50YWJ2aWV3VGV4dC5hY3RpdmUge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiA1O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlO1xuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xufVxuXG4ubmF2SWNvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMztcbn1cblxuLm5hdlRhYiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDlmY2E7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLm5hdlRhYnZpZXcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cbiAgPFBhZ2UgY2xhc3M9XCJwYWdlXCI+XG4gICAgPEFjdGlvbkJhcj5cbiAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uIEB0YXA9XCIkbmF2aWdhdGVCYWNrKClcIiBhbmRyb2lkLnN5c3RlbUljb249XCJpY19tZW51X2JhY2tcIiAvPlxuICAgICAgPExhYmVsIHRleHQ9XCJGQVFcIiBmb250U2l6ZT1cIjIwXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiAvPlxuICAgIDwvQWN0aW9uQmFyPlxuXG4gICAgPFN0YWNrTGF5b3V0PlxuICAgICAgPFNlYXJjaEJhciB2LW1vZGVsPVwic2VhcmNoXCIgaGludD1cIkVudGVyIHRleHQuLi5cIiBAc3VibWl0PVwiY2hlY2tGYXFcIiAvPlxuXG4gICAgICA8UmFkTGlzdFZpZXcgcmVmPVwibGlzdFZpZXdcIlxuICAgICAgICAgICAgICAgICAgIGZvcj1cImZhcSBpbiBnZXRTZWFyY2hSZXN1bHRzKHNlYXJjaClcIlxuICAgICAgICAgICAgICAgICAgIHB1bGxUb1JlZnJlc2g9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICBAcHVsbFRvUmVmcmVzaEluaXRpYXRlZD1cIm9uUHVsbFRvUmVmcmVzaEluaXRpYXRlZFwiXG4gICAgICAgICAgICAgICAgICAgQGl0ZW1UYXA9XCJvbkl0ZW1UYXBcIlxuICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibGlzdC1ncm91cFwiPlxuXG4gICAgICAgIDx2LXRlbXBsYXRlPlxuICAgICAgICAgIDxGYXFJbmZvIDppdGVtPVwiZmFxXCIgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0tdGV4dFwiLz5cbiAgICAgICAgPC92LXRlbXBsYXRlPlxuICAgICAgPC9SYWRMaXN0Vmlldz5cbiAgICA8L1N0YWNrTGF5b3V0PlxuICA8L1BhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEZhcUluZm8gZnJvbSBcIkAvY29tcG9uZW50cy9zdWJsaXN0cy9GYXFJbmZvLnZ1ZVwiO1xuaW1wb3J0IFRpY2tldCBmcm9tIFwiLi9UaWNrZXQudnVlXCI7XG5pbXBvcnQgeyBtYXBTdGF0ZSwgbWFwQWN0aW9ucywgbWFwTXV0YXRpb25zLCBtYXBHZXR0ZXJzIH0gZnJvbSBcInZ1ZXhcIjtcbmltcG9ydCBGYXEgZnJvbSBcIkAvbW9kZWxzL0ZhcVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNlYXJjaDogXCJcIixcbiAgICAgIHRpY2tldDogVGlja2V0LFxuICAgICAgdGVtcEZhcXM6IFtdXG4gICAgfTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIC4uLm1hcEFjdGlvbnMoW1wibG9hZEZhcXNcIl0pLFxuICAgIC4uLm1hcE11dGF0aW9ucyhbXCJzdG9yZUZhcVwiXSksXG4gICAgY2hlY2tGYXEoKSB7XG4gICAgICAvLyBpbiB0aGUgZnV0dXJlIHRoaXMgaXMgd2hlcmUgdG8gY2hlY2sgaWYgYSB1c2VyIGlzIG9uIHNpdGUsIG90aGVyd2lzZSBubyB0aWNrZXQgb3B0aW9uXG4gICAgICAvLyBpZiAodGhpcy5mYXFzLmZpbHRlcihmYXEgPT4gZmFxLnF1ZXN0aW9uID09PSB0aGlzLnNlYXJjaCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAvLyAgIHRoaXMuc3RvcmVGYXEobmV3IEZhcSh0aGlzLnNlYXJjaCkpXG4gICAgICAvLyAgIHRoaXMuJG5hdmlnYXRlVG8odGhpcy50aWNrZXQpXG4gICAgICAvLyB9XG4gICAgfSxcbiAgICBvbkl0ZW1UYXAoKSB7XG4gICAgICAvLyBUT0RPXG4gICAgfSxcbiAgICBvblB1bGxUb1JlZnJlc2hJbml0aWF0ZWQoeyBvYmplY3QgfSkge1xuICAgICAgY29uc29sZS5sb2coXCJQdWxsaW5nLi4uXCIpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIG9iamVjdC5ub3RpZnlQdWxsVG9SZWZyZXNoRmluaXNoZWQoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICAuLi5tYXBTdGF0ZShbXCJmYXFzXCJdKSxcbiAgICAuLi5tYXBHZXR0ZXJzKFtcImdldFNlYXJjaFJlc3VsdHNcIl0pXG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5sb2FkRmFxcygpO1xuICB9LFxuICBjb21wb25lbnRzOiB7XG4gICAgVGlja2V0LFxuICAgIEZhcUluZm9cbiAgfVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XG4gIEBpbXBvcnQgJy4uL0FuaW1hbENlbnRlcic7XG5cbkFjdGlvbkJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDlmY2E7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4ubWVzc2FnZSB7XG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5mYXFfcXVlc3Rpb24ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMDtcbiAgY29sb3I6IGJsYWNrO1xufVxuLmZhcV9hbnN3ZXIge1xuICBjb2xvcjogIzQ1NDU0NTtcbn1cblxuLmxpc3QtZ3JvdXAtaXRlbS10ZXh0IHtcbiAgbWFyZ2luOiA3IDg7XG59XG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cbiAgPFBhZ2UgPlxuICAgIDxBY3Rpb25CYXIgaW9zLnBvc2l0aW9uPVwibGVmdFwiIGNsYXNzPVwiQWN0aW9uX0JhclwiPlxuICAgICAgPExhYmVsIHRleHQ9XCJXZWxjb21lIHRvIERvd25leVwiIGZvbnRTaXplPVwiMjBcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiLz5cbiAgICAgIDxBY3Rpb25JdGVtIEB0YXA9XCJ0b0ZhcVwiIGlvcy5zeXN0ZW1JY29uPVwiMTJcIiBpb3MucG9zaXRpb249XCJyaWdodFwiIGFuZHJvaWQuc3lzdGVtSWNvbj1cImljX21lbnVfc2VhcmNoXCIgYW5kcm9pZC5wb3NpdGlvbj1cImFjdGlvbkJhclwiIC8+XG4gICAgPC9BY3Rpb25CYXI+XG5cbiAgICA8U3RhY2tMYXlvdXQgYmFja2dyb3VuZENvbG9yPVwiI2IyMWE4MlwiPlxuXG4gICAgICA8R3JpZExheW91dCBjbGFzcz1cImxheW91dCBjb3ZlclwiIGNvbHVtbnM9XCIqLCosKlwiIHJvd3M9XCIqLCosKlwiPlxuICAgICAgICA8IS0tQWRvcHRpb24gLS0+XG5cbiAgICAgICAgPCEtLVxuICAgICAgICA8Q2F0ZWdvcnlCdXR0b24gdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiBtYXJnaW49XCI1XCIgcm93PVwiMFwiIGNvbD1cIjBcIiBzcmM9XCJ+L2Fzc2V0cy9pbWFnZXMvYW5pbWFscy5pY29uLnBuZ1wiIDppY29uPVwiJydcIlxuICAgICAgICA6dGl0bGU9XCJ0aXRsZXNbMF1cIiA6YWN0aW9uPVwidG9BZG9wdGlvblwiIGNsYXNzPVwiaG9tZXBhZ2UtYmx1ZSBIb21lQnV0dG9uXCIgdGV4dFdyYXA9XCJ0cnVlXCIvPlxuICAgICAgICAtLT5cblxuICAgICAgICA8IS0tU2VydmljZSBSZXF1ZXN0IC0tPlxuICAgICAgICA8IS0tXG4gICAgICAgIDxDYXRlZ29yeUJ1dHRvbiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiICBtYXJnaW49XCI1XCIgcm93PVwiMVwiIGNvbD1cIjBcIiBzcmM9XCJ+L2Fzc2V0cy9pbWFnZXMvc2VydmljZXMuaWNvbi5wbmdcIiA6aWNvbj1cIicnXCJcbiAgICAgICAgOnRpdGxlPVwidGl0bGVzWzJdXCIgOmFjdGlvbj1cInRvU2VydmljZVJlcXVlc3RcIiBjbGFzcz1cImhvbWVwYWdlLWJsdWUgSG9tZUJ1dHRvblwiIHRleHRXcmFwPVwidHJ1ZVwiLz5cbiAgICAgICAgLS0+XG5cbiAgICAgICAgPCEtLUZBUSAtLT5cbiAgICAgICAgPCEtLVxuICAgICAgICA8Q2F0ZWdvcnlCdXR0b24gdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiAgbWFyZ2luPVwiNVwiIHJvdz1cIjBcIiBjb2w9XCIxXCIgc3JjPVwifi9hc3NldHMvaW1hZ2VzL25vaXNlLmljb24ucG5nXCIgOmljb249XCInJ1wiXG4gICAgICAgIDp0aXRsZT1cInRpdGxlc1szXVwiIDphY3Rpb249XCJ0b0ZhcVwiIGNsYXNzPVwiaG9tZXBhZ2UtYmx1ZSBIb21lQnV0dG9uXCIgdGV4dFdyYXA9XCJ0cnVlXCIvPlxuICAgICAgICAtLT5cblxuICAgICAgICA8IS0tVGlja2V0IC0tPlxuXG4gICAgICAgIDxDYXRlZ29yeUJ1dHRvbiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiICBtYXJnaW49XCI1XCIgcm93PVwiMFwiIGNvbD1cIjFcIiBzcmM9XCJ+L2Fzc2V0cy9pbWFnZXMvRmluYWwgTG9nby5wbmdcIiBcbiAgICAgICAgOmljb249XCInZmEtbWFwLW1hcmtlcicgfCBmb250aWNvblwiIDp0aXRsZT1cInRpdGxlc1s0XVwiIDphY3Rpb249XCJ0b1FSU2Nhbm5lclwiIGNsYXNzPVwiZmEgaG9tZXBhZ2UtYmx1ZSBIb21lQnV0dG9uXCIgdGV4dFdyYXA9XCJ0cnVlXCIvPlxuXG4gICAgICAgIDxDYXRlZ29yeUJ1dHRvbiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiICBtYXJnaW49XCI1XCIgcm93PVwiMlwiIGNvbD1cIjFcIiBzcmM9XCJ+L2Fzc2V0cy9pbWFnZXMvaG91cnNpY29uLnBuZ1wiIFxuICAgICAgICA6aWNvbj1cIidmYS1tYXAtbWFya2VyJyB8IGZvbnRpY29uXCIgOnRpdGxlPVwidGl0bGVzWzRdXCIgOmFjdGlvbj1cInRvUVJTY2FubmVyXCIgY2xhc3M9XCJmYSBob21lcGFnZS1ibHVlIEhvbWVCdXR0b25cIiB0ZXh0V3JhcD1cInRydWVcIi8+XG4gICAgICAgXG4gICAgICAgIDwhLS1GaW5kIGEgTG9jYXRpb24gLS0+XG4gICAgICAgIDwhLS1cbiAgICAgICAgPENhdGVnb3J5QnV0dG9uIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgbWFyZ2luPVwiNVwiIHJvdz1cIjFcIiBjb2w9XCIxXCIgc3JjPVwifi9hc3NldHMvaW1hZ2VzL2xvY2F0aW9uaWNvbi5wbmdcIiA6aWNvbj1cIicnXCJcbiAgICAgICAgOnRpdGxlPVwidGl0bGVzWzVdXCIgOmFjdGlvbj1cInRvTG9jYXRpb25MaXN0XCIgY2xhc3M9XCJob21lcGFnZS1ibHVlIEhvbWVCdXR0b25cIiB0ZXh0V3JhcD1cInRydWVcIi8+XG4gICAgICAgIC0tPlxuXG4gICAgICA8L0dyaWRMYXlvdXQ+XG5cbiAgICA8L1N0YWNrTGF5b3V0PlxuICAgIFxuICA8L1BhZ2U+XG4gIFxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBDYXRlZ29yeUJ1dHRvbiBmcm9tIFwiQC9jb21wb25lbnRzL2J1dHRvbnMvQ2F0ZWdvcnlCdXR0b24udnVlXCJcbmltcG9ydCBGYXEgZnJvbSBcIi4vRmFxLnZ1ZVwiXG5pbXBvcnQgTG9jYXRpb24gZnJvbSBcIi4vTG9jYXRpb24udnVlXCJcbmltcG9ydCBRUlNjYW5uZXIgZnJvbSBcIi4vVGlja2V0T3B0aW9ucy52dWVcIlxuaW1wb3J0IEFkb3B0aW9uIGZyb20gXCIuL0Fkb3B0aW9uLnZ1ZVwiXG5pbXBvcnQgU2VydmljZVJlcXVlc3QgZnJvbSBcIi4vU2VydmljZVJlcXVlc3QudnVlXCJcbmltcG9ydCB7IG1hcFN0YXRlLCBtYXBBY3Rpb25zLCBtYXBNdXRhdGlvbnMgfSBmcm9tIFwidnVleFwiXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWN0aW9uQmFyOiBcIldlbGNvbWUgdG8gRG93bmV5XCIsXG4gICAgICBtc2c6IFwiSGVsbG8gV29ybGQhXCIsXG4gICAgICB0aXRsZXM6IFtcbiAgICAgICAgXCJBZG9wdCBhbiBBbmltYWwhXCIsXG4gICAgICAgIFwiU2VydmljZXMgJiBGZWVzXCIsXG4gICAgICAgIFwiU2VydmljZSBSZXF1ZXN0XCIsXG4gICAgICAgIFwiRkFRXCIsXG4gICAgICAgIFwiQ3JlYXQgYSBUaWNrZXRcIixcbiAgICAgICAgXCJGaW5kIE91ciBMb2NhdGlvblwiXG4gICAgICBdLFxuICAgICAgdGV4dFdyYXA6IGZhbHNlLFxuICAgICAgLy9zZWFyY2g6IFwidGhpcyB3aWxsIGNoYW5nZSBhcyB5b3UgdHlwZVwiLFxuICAgICAgcmVzdWx0czogW10sXG4gICAgICBwb2xsaW5nOiB1bmRlZmluZWQsXG4gICAgICBmYXE6IEZhcSxcbiAgICAgIGxvY2F0aW9uOiBMb2NhdGlvbixcbiAgICAgIHFyU2Nhbm5lcjogUVJTY2FubmVyLFxuICAgICAgYWRvcHRpb246IEFkb3B0aW9uLFxuICAgICAgc2VydmljZVJlcXVlc3Q6IFNlcnZpY2VSZXF1ZXN0LFxuXG4gICAgfTtcbiAgfSxcblxuICBjb21wdXRlZDogbWFwU3RhdGUoWydhcHByb3ZlZFRpY2tldCddKSxcblxuICBtZXRob2RzOiB7XG4gICAgLi4ubWFwQWN0aW9ucyhbJ2NoZWNrVGlja2V0J10pLFxuICAgIC4uLm1hcE11dGF0aW9ucyhbJ1NFVF9USUNLRVQnXSksXG4gICAgdG9Mb2NhdGlvbkxpc3QoKSB7XG4gICAgICB0aGlzLiRuYXZpZ2F0ZVRvKHRoaXMubG9jYXRpb24sIHtcbiAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXG4gICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICBuYW1lOiBcInNsaWRlXCIsXG4gICAgICAgICAgZHVyYXRpb246IDM4MCxcbiAgICAgICAgICBjdXJ2ZTogXCJlYXNlSW5cIlxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIHRvRmFxKCkge1xuICAgICAgdGhpcy4kbmF2aWdhdGVUbyh0aGlzLmZhcSwge1xuICAgICAgICBhbmltYXRlZDogdHJ1ZSxcbiAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgIG5hbWU6IFwic2xpZGVcIixcbiAgICAgICAgICBkdXJhdGlvbjogMzgwLFxuICAgICAgICAgIGN1cnZlOiBcImVhc2VJblwiXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgdG9RUlNjYW5uZXIgKCkge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLmFwcHJvdmVkVGlja2V0ID09PSAnb2JqZWN0Jykge1xuICAgICAgICBpZiAodGhpcy5hcHByb3ZlZFRpY2tldC5oYXNPd25Qcm9wZXJ0eSgnd2luZG93JykpIHtcbiAgICAgICAgICBhbGVydCh7XG4gICAgICAgICAgICB0aXRsZTogXCJBY2Nlc3MgRGVuaWVkXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBcIllvdSBjYW5ub3Qgc3VibWl0IGFub3RoZXIgdGlja2V0LlwiLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKHRoaXMucXJTY2FubmVyLCB7XG4gICAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXG4gICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgbmFtZTogXCJzbGlkZVwiLFxuICAgICAgICAgICAgZHVyYXRpb246IDM4MCxcbiAgICAgICAgICAgIGN1cnZlOiBcImVhc2VJblwiXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHRvQWRvcHRpb24gKCkge1xuICAgICAgdGhpcy4kbmF2aWdhdGVUbyh0aGlzLmFkb3B0aW9uLCB7XG4gICAgICAgIGFuaW1hdGVkOiB0cnVlLFxuICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgbmFtZTogXCJzbGlkZVwiLFxuICAgICAgICAgIGR1cmF0aW9uOiAzODAsXG4gICAgICAgICAgY3VydmU6IFwiZWFzZUluXCJcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICB0b1NlcnZpY2VSZXF1ZXN0ICgpIHtcbiAgICAgIHRoaXMuJG5hdmlnYXRlVG8odGhpcy5zZXJ2aWNlUmVxdWVzdCwge1xuICAgICAgICBhbmltYXRlZDogdHJ1ZSxcbiAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgIG5hbWU6IFwic2xpZGVcIixcbiAgICAgICAgICBkdXJhdGlvbjogMzgwLFxuICAgICAgICAgIGN1cnZlOiBcImVhc2VJblwiXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgcG9sbERhdGEoKSB7XG4gICAgICB0aGlzLnBvbGxpbmcgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIC8vIENoZWNrIGlmIHRpY2tldCBpcyBjb21wbGV0ZSBldmVyeSBYIHNlY29uZHNcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmFwcHJvdmVkVGlja2V0ID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGlmICh0aGlzLmFwcHJvdmVkVGlja2V0Lmhhc093blByb3BlcnR5KCdudW1iZXInKSkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5hcHByb3ZlZFRpY2tldC5udW1iZXIsIHRoaXMuYXBwcm92ZWRUaWNrZXQuaXNDb21wbGV0ZSlcbiAgICAgICAgICAgIGlmICh0aGlzLmFwcHJvdmVkVGlja2V0LmlzQ29tcGxldGUpIHtcbiAgICAgICAgICAgICAgdGhpcy5TRVRfVElDS0VUKHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgYWxlcnQoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlRoYW5rIFlvdVwiLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiWW91ciB0aWNrZXQgaGFzIGJlZW4gc2VydmVkLiBIYXZlIGEgbmljZSBkYXkhXCIsXG4gICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuY2hlY2tUaWNrZXQodGhpcy5hcHByb3ZlZFRpY2tldC5pZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIDUwMDApXG4gICAgfVxuXG4gIH0sXG5cbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLnBvbGxEYXRhKClcbiAgfSxcblxuICBiZWZvcmVEZXN0cm95KCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5wb2xsaW5nKVxuICB9LFxuXG4gIGNvbXBvbmVudHM6IHtcbiAgICBDYXRlZ29yeUJ1dHRvbixcbiAgICBGYXFcbiAgfVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkIGxhbmcgPVwic2Nzc1wiPlxuQGltcG9ydCBcIi4uL0FuaW1hbENlbnRlclwiO1xuXG4uQWN0aW9uX0JhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDlmY2E7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uU19CYXIge1xuICBjb2xvcjogIzA1MDUwNTtcbn1cblxuLlNfQnV0dG9uIHtcbiAgLyogdGV4dD1cInJpZ2h0XCI7IFxuICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50PVwicmlnaHRcIjtcbiAgICAgICAgd2lkdGg9XCIzMyVcIiBcbiAgICAgICAgaGVpZ2h0PVwiNzBcIiBcbiAgICAgICAgLypiYWNrZ3JvdW5kQ29sb3I9XCIjMWM2YjQ4XCIvPiovXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIn4vYXNzZXRzL2ltYWdlcy9OYXRpdmVTY3JpcHQtVnVlLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuICAuY292ZXIge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcGx1bSwgIzAwOWZjYSlcbn1cblxuLmhvbWVwYWdlLWJsdWUge1xuICBjb2xvcjogJGhvbWVwYWdlLWJsdWU7XG59XG5cbi5BY3Rpb25fVGV4dCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLkhvbWVCdXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICBib3JkZXItcmFkaXVzOiAyNTtcbiAgZm9udC1zaXplOiAxNCU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLXRvcDogN2VtO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cblxuLmxheW91dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XG59XG5cbi5tZXNzYWdlIHtcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIwO1xuICBjb2xvcjogIzI1MjUyNTtcbn1cbjwvc3R5bGU+XG5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8UGFnZSBjbGFzcz1cInBhZ2VcIj5cbiAgICAgICAgPEFjdGlvbkJhciBjbGFzcz1cImFjdGlvbi1iYXJcIj5cbiAgICAgICAgICA8TmF2aWdhdGlvbkJ1dHRvbiBAdGFwPVwiJG5hdmlnYXRlQmFjaygpXCIgYW5kcm9pZC5zeXN0ZW1JY29uPVwiaWNfbWVudV9iYWNrXCIgLz5cbiAgICAgICAgICA8TGFiZWwgdGV4dD1cIkFuaW1hbCBDYXJlIENlbnRlcnNcIiBmb250U2l6ZT1cIjIwXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIj48L0xhYmVsPlxuICAgICAgICA8L0FjdGlvbkJhcj5cblxuXG4gICAgICAgIDxTdGFja0xheW91dD5cbiAgICAgICAgICAgIDwhLS1nZXQgZGlzdGFuY2UgYnRuIC0tPlxuICAgICAgICAgICAgPEljb25CdXR0b24gY2xhc3M9XCJmYSBncHMtYnV0dG9uXCIgOmljb249XCInZmEtc29ydC1hbW91bnQtYXNjJyB8IGZvbnRpY29uXCIgdGl0bGU9XCJHZXQgQ2xvc2VzdCBBbmltYWwgQ2VudGVyXCIgOmFjdGlvbj1cImJ1dHRvbkdldERpc3RhbmNlVG9DYXJlQ2VudGVyc1RhcFwiLz5cblxuICAgICAgICAgICAgPFJhZExpc3RWaWV3IHJvdz1cIjJcIiBmb3I9XCJsb2NhdGlvbiBpbiBjZW50ZXJMb2NhdGlvbnNcIiBAaXRlbVRhcD1cIm9uSXRlbVRhcFwiIGNsYXNzPVwibGlzdC1ncm91cFwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDx2LXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8IS0tIGNhcmQgY29udGFpbnRlciAtLT5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cIiosICosICosICpcIiBjb2x1bW5zPVwiKiwgKlwiIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtLWNvbnRlbnRcIj5cblxuICAgICAgICAgICAgICAgICAgICA8IS0tIG5hbWUgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cImxvY2F0aW9uLm5hbWVcIiBjbGFzcz1cImhvbWVwYWdlLWJsdWUgdGV4dC1wcmltYXJ5IGxpc3QtZ3JvdXAtaXRlbS10ZXh0IGZvbnQtd2VpZ2h0LWJvbGRcIi8+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBkaXN0YW5jZSAtLT5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cIjFcIiBob3Jpem9udGFsQWxpZ25tZW50PVwicmlnaHRcIiBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbS10ZXh0IG0tci01IHRleHQtc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIDp0ZXh0PVwiJ34nKyBsb2NhdGlvbi5kaXN0YW5jZSArICdtaSdcIi8+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XG4gICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XG5cblxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiMVwiIGNsYXNzPVwiaHItbGlnaHQgbS10LTUgbS1iLTVcIiBjb2xTcGFuPVwiMlwiLz5cblxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugcm93PVwiMlwiIDpzcmM9XCJsb2NhdGlvbi5pbWFnZVVSTFwiIHN0cmV0Y2g9XCJhc3BlY3RGaXRcIiBoZWlnaHQ9XCIxMjBcIiBjbGFzcz1cIm0tci0yMFwiIGxvYWRNb2RlPVwiYXN5bmNcIi8+XG5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cIjJcIiBjb2w9XCIxXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbS10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cIiosICpcIiBjb2x1bW5zPVwiKiwgNCpcIj4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tYWRkcmVzcyAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIwXCIgY29sPVwiMFwiIHRleHRXcmFwPVwidHJ1ZVwiIGNsYXNzPVwicC1iLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZyBpb3MuZm9udEZhbWlseT1cInN5c3RlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gOnRleHQ9XCInZmEtbWFwLW1hcmtlcicgfCBmb250aWNvblwiIGNsYXNzPVwiZmFcIj48L1NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjBcIiBjb2w9XCIxXCIgdGV4dFdyYXA9XCJ0cnVlXCIgY2xhc3M9XCJwLWItMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nIGlvcy5mb250RmFtaWx5PVwic3lzdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiA6dGV4dD1cImxvY2F0aW9uLmFkZHJlc3NcIiAgY2xhc3M9XCJ0ZXh0LXByaW1hcnlcIj48L1NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAtLT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBwaG9uZSBudW1iZXItLT4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVwiMVwiIGNvbD1cIjBcIiB0ZXh0V3JhcD1cInRydWVcIiBjbGFzcz1cInAtYi0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmcgaW9zLmZvbnRGYW1pbHk9XCJzeXN0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gOnRleHQ9XCInZmEtcGhvbmUnIHwgZm9udGljb25cIiBjbGFzcz1cImZhIGljb25cIj48L1NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cIjFcIiBjb2w9XCIxXCIgdGV4dFdyYXA9XCJ0cnVlXCIgY2xhc3M9XCJwLWItMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nIGlvcy5mb250RmFtaWx5PVwic3lzdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIDp0ZXh0PVwibG9jYXRpb24ucGhvbmVcIiBjbGFzcz1cIlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJwLWItMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nIGlvcy5mb250RmFtaWx5PVwic3lzdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XCJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAtLT5cblxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cblxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPC92LXRlbXBsYXRlPlxuXG4gICAgICAgICAgICA8L1JhZExpc3RWaWV3PlxuPC9TdGFja0xheW91dD5cbiAgICA8L1BhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuLy8gLS0tcGx1Z2lucy0tLVxuLy8gZ2VvbG9jYXRpb25cbmltcG9ydCAqIGFzIGdlb2xvY2F0aW9uIGZyb20gXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIjtcbmltcG9ydCB7IEFjY3VyYWN5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZW51bXNcIjtcblxuLy8gdG9hc3RcbmNvbnN0IFRvYXN0ID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC10b2FzdHNcIik7XG4vLy0tLS0tLS1cblxuLy8gY29tcG9uZW50c1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIkAvY29tcG9uZW50cy9idXR0b25zL0ljb25CdXR0b24udnVlXCJcblxuaW1wb3J0IEFuaW1hbENlbnRlckRldGFpbHMgZnJvbSBcIkAvY29tcG9uZW50cy9sb2NhdGlvbi9BbmltYWxDZW50ZXJEZXRhaWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLy9UT0RPOiBTdG9yZSBoYXJkY29kZWQgY2VudGVybG9jYXRpb25zXG4gICAgICBjZW50ZXJMb2NhdGlvbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwiQWdvdXJhXCIsXG4gICAgICAgICAgYWRkcmVzczogXCIyOTUyNSBBZ291cmEgUm9hZCwgQWdvdXJhLCBDQSA5MTMwMVwiLFxuICAgICAgICAgIHBob25lOiBcIig4MTgpIDk5MS0wMDcxXCIsXG4gICAgICAgICAgYXZhaWxhYmlsaXR5OiB7XG4gICAgICAgICAgICB3ZWVrZGF5OiBcIk1vbmRheS1UaHVyc2RheVwiLFxuICAgICAgICAgICAgd2Vla2VuZDogXCJGcmlkYXktU3VuZGF5XCIsXG4gICAgICAgICAgICB3ZWVrZGF5aG91cnM6IFwiMTI6MDAgcC5tLiAtIDc6MDAgcC5tXCIsXG4gICAgICAgICAgICB3ZWVrZW5kaG91cnM6IFwiMTA6MDAgYS5tLiAtIDU6MDAgcC5tXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIGxhdGl0dWRlOiAzNC4xNDYwMTUsXG4gICAgICAgICAgbG9uZ2l0dWRlOiAtMTE4Ljc2OTQyMSxcbiAgICAgICAgICBkaXN0YW5jZTogXCJcIixcbiAgICAgICAgICBpbWFnZVVSTDogXCJ+L2Fzc2V0cy9pbWFnZXMvYWNob3VzZS5wbmdcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJCYWxkd2luIFBhcmtcIixcbiAgICAgICAgICBhZGRyZXNzOiBcIjQyNzUgTm9ydGggRWx0b24gU3RyZWV0LCBCYWxkd2luIFBhcmssIENBIDkxNzA2XCIsXG4gICAgICAgICAgcGhvbmU6IFwiKDYyNikgOTYyLTM1NzdcIixcbiAgICAgICAgICBhdmFpbGFiaWxpdHk6IHtcbiAgICAgICAgICAgIHdlZWtkYXk6IFwiTW9uZGF5LVRodXJzZGF5XCIsXG4gICAgICAgICAgICB3ZWVrZW5kOiBcIkZyaWRheS1TdW5kYXlcIixcbiAgICAgICAgICAgIHdlZWtkYXlob3VyczogXCIxMjowMCBwLm0uIC0gNzowMCBwLm1cIixcbiAgICAgICAgICAgIHdlZWtlbmRob3VyczogXCIxMDowMCBhLm0uIC0gNTowMCBwLm1cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgbGF0aXR1ZGU6IDM0LjA5MTM2MixcbiAgICAgICAgICBsb25naXR1ZGU6IC0xMTcuOTUxMTA1LFxuICAgICAgICAgIGRpc3RhbmNlOiBcIlwiLFxuICAgICAgICAgIGltYWdlVVJMOiBcIn4vYXNzZXRzL2ltYWdlcy9hY2hvdXNlLnBuZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcIkNhcnNvbi9HYXJkZW5hXCIsXG4gICAgICAgICAgYWRkcmVzczogXCIyMTYgVy4gVmljdG9yaWEgU3RyZWV0LCBHYXJkZW5hIENBIDkwMjQ4XCIsXG4gICAgICAgICAgcGhvbmU6IFwiKDMxMCkgNTIzLTk1NjZcIixcbiAgICAgICAgICBhdmFpbGFiaWxpdHk6IHtcbiAgICAgICAgICAgIHdlZWtkYXk6IFwiTW9uZGF5LVRodXJzZGF5XCIsXG4gICAgICAgICAgICB3ZWVrZW5kOiBcIkZyaWRheS1TdW5kYXlcIixcbiAgICAgICAgICAgIHdlZWtkYXlob3VyczogXCIxMjowMCBwLm0uIC0gNzowMCBwLm1cIixcbiAgICAgICAgICAgIHdlZWtlbmRob3VyczogXCIxMDowMCBhLm0uIC0gNTowMCBwLm1cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgbGF0aXR1ZGU6IDMzLjg2NDM1NSxcbiAgICAgICAgICBsb25naXR1ZGU6IC0xMTguMjc3NDE0LFxuICAgICAgICAgIGRpc3RhbmNlOiBcIlwiLFxuICAgICAgICAgIGltYWdlVVJMOiBcIn4vYXNzZXRzL2ltYWdlcy9hY2hvdXNlLnBuZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcIkNhc3RhaWNcIixcbiAgICAgICAgICBhZGRyZXNzOiBcIjMxMDQ0IE5vcnRoIENoYXJsaWUgQ2FueW9uIFJvYWQsIENhc3RhaWMsIENBIDkxMzg0XCIsXG4gICAgICAgICAgcGhvbmU6IFwiKDY2MSkgMjU3LTMxOTFcIixcbiAgICAgICAgICBhdmFpbGFiaWxpdHk6IHtcbiAgICAgICAgICAgIHdlZWtkYXk6IFwiTW9uZGF5LVRodXJzZGF5XCIsXG4gICAgICAgICAgICB3ZWVrZW5kOiBcIkZyaWRheS1TdW5kYXlcIixcbiAgICAgICAgICAgIHdlZWtkYXlob3VyczogXCIxMjowMCBwLm0uIC0gNzowMCBwLm1cIixcbiAgICAgICAgICAgIHdlZWtlbmRob3VyczogXCIxMDowMCBhLm0uIC0gNTowMCBwLm1cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgbGF0aXR1ZGU6IDM0LjQ4Mjg5OSxcbiAgICAgICAgICBsb25naXR1ZGU6IC0xMTguNjA4Mzg2LFxuICAgICAgICAgIGRpc3RhbmNlOiBcIlwiLFxuICAgICAgICAgIGltYWdlVVJMOiBcIn4vYXNzZXRzL2ltYWdlcy9hY2hvdXNlLnBuZ1wiXG4gICAgICAgIH0sXG5cbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwiRG93bmV5XCIsXG4gICAgICAgICAgYWRkcmVzczogXCIxMTI1OCBTb3V0aCBHYXJmaWVsZCBBdmVudWUsIERvd25leSwgQ0EgOTAyNDJcIixcbiAgICAgICAgICBwaG9uZTogXCIoNTYyKSA5NDAtNjg5OFwiLFxuICAgICAgICAgIGF2YWlsYWJpbGl0eToge1xuICAgICAgICAgICAgd2Vla2RheTogXCJNb25kYXktVGh1cnNkYXlcIixcbiAgICAgICAgICAgIHdlZWtlbmQ6IFwiRnJpZGF5LVN1bmRheVwiLFxuICAgICAgICAgICAgd2Vla2RheWhvdXJzOiBcIjEyOjAwIHAubS4gLSA3OjAwIHAubVwiLFxuICAgICAgICAgICAgd2Vla2VuZGhvdXJzOiBcIjEwOjAwIGEubS4gLSA1OjAwIHAubVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBsYXRpdHVkZTogMzMuOTM2NTYsXG4gICAgICAgICAgbG9uZ2l0dWRlOiAtMTE4LjEzMzg3LFxuICAgICAgICAgIGRpc3RhbmNlOiBcIlwiLFxuICAgICAgICAgIGltYWdlVVJMOiBcIn4vYXNzZXRzL2ltYWdlcy9hY2hvdXNlLnBuZ1wiXG4gICAgICAgIH0sXG5cbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwiTGFuY2FzdGVyXCIsXG4gICAgICAgICAgYWRkcmVzczogXCI1MjEwIFdlc3QgQXZlbnVlIEksIExhbmNhc3RlciwgQ0EgOTM1MzZcIixcbiAgICAgICAgICBwaG9uZTogXCIoNjYxKSA5NDAtNDE5MVwiLFxuICAgICAgICAgIGF2YWlsYWJpbGl0eToge1xuICAgICAgICAgICAgd2Vla2RheTogXCJNb25kYXktVGh1cnNkYXlcIixcbiAgICAgICAgICAgIHdlZWtlbmQ6IFwiRnJpZGF5LVN1bmRheVwiLFxuICAgICAgICAgICAgd2Vla2RheWhvdXJzOiBcIjEyOjAwIHAubS4gLSA3OjAwIHAubVwiLFxuICAgICAgICAgICAgd2Vla2VuZGhvdXJzOiBcIjEwOjAwIGEubS4gLSA1OjAwIHAubVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBsYXRpdHVkZTogMzQuNzAzMjM5LFxuICAgICAgICAgIGxvbmdpdHVkZTogLTExOC4yMjI2NSxcbiAgICAgICAgICBkaXN0YW5jZTogXCJcIixcbiAgICAgICAgICBpbWFnZVVSTDogXCJ+L2Fzc2V0cy9pbWFnZXMvYWNob3VzZS5wbmdcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJQYWxtZGFsZVwiLFxuICAgICAgICAgIGFkZHJlc3M6IFwiMzg1NTAgU2llcnJhIEhpZ2h3YXksIFBhbG1kYWxlLCBDQSA5MzU1MFwiLFxuICAgICAgICAgIHBob25lOiBcIig2NjEpIDU3NS0yODg4XCIsXG4gICAgICAgICAgYXZhaWxhYmlsaXR5OiB7XG4gICAgICAgICAgICB3ZWVrZGF5OiBcIk1vbmRheS1UaHVyc2RheVwiLFxuICAgICAgICAgICAgd2Vla2VuZDogXCJGcmlkYXktU3VuZGF5XCIsXG4gICAgICAgICAgICB3ZWVrZGF5aG91cnM6IFwiMTI6MDAgcC5tLiAtIDc6MDAgcC5tXCIsXG4gICAgICAgICAgICB3ZWVrZW5kaG91cnM6IFwiMTA6MDAgYS5tLiAtIDU6MDAgcC5tXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIGxhdGl0dWRlOiAzNC41ODI2LFxuICAgICAgICAgIGxvbmdpdHVkZTogLTExOC4xMTcxLFxuICAgICAgICAgIGRpc3RhbmNlOiBcIlwiLFxuICAgICAgICAgIGltYWdlVVJMOiBcIn4vYXNzZXRzL2ltYWdlcy9hY2hvdXNlLnBuZ1wiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBjdXJyZW50TG9jOiB7fSAvLyBjdXJyZW50IGxvY2F0aW9uIG9ialxuICAgIH07XG4gIH0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBJY29uQnV0dG9uXG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgY2VudGVyTGlzdCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmJ1dHRvbkdldExvY2F0aW9uVGFwO1xuICAgIH1cbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgZW5hYmxlTG9jYXRpb25UYXA6IGZ1bmN0aW9uKCkge1xuICAgICAgZ2VvbG9jYXRpb24uaXNFbmFibGVkKCkudGhlbihcbiAgICAgICAgZnVuY3Rpb24oaXNFbmFibGVkKSB7XG4gICAgICAgICAgaWYgKCFpc0VuYWJsZWQpIHtcbiAgICAgICAgICAgIGdlb2xvY2F0aW9uLmVuYWJsZUxvY2F0aW9uUmVxdWVzdCgpLnRoZW4oXG4gICAgICAgICAgICAgIGZ1bmN0aW9uKCkge30sXG4gICAgICAgICAgICAgIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIChlLm1lc3NhZ2UgfHwgZSkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24oZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiICsgKGUubWVzc2FnZSB8fCBlKSk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSxcbiAgICAvLyBUT0RPOiBvcHRpbWl6ZTsgdGhpcyBzaG91bGQgYmUgYWxyZWFkeSBjb21wdXRlZCBiZWZvcmUgY2xpY2tpbmcgYnV0dG9uXG4gICAgYnV0dG9uR2V0RGlzdGFuY2VUb0NhcmVDZW50ZXJzVGFwOiBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBcImJ1dHRvbkdldERpc3RhbmNlVG9DYXJlQ2VudGVyc1RhcCgpLCBnZXR0aW5nIGxpc3Qgb2YgYW5pbWFsIGNhcmUgY2VudGVyczsgc29ydGVkIGJ5IGRpc3RhbmNlXCJcbiAgICAgICk7XG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XG5cbiAgICAgIGNvbnN0IG1ldGVyc1RvTWlsZXNDb252ZXJzaW9uUmF0ZSA9IDE2MDkuMzQ0O1xuXG4gICAgICBnZW9sb2NhdGlvblxuICAgICAgICAuZ2V0Q3VycmVudExvY2F0aW9uKHtcbiAgICAgICAgICBkZXNpcmVkQWNjdXJhY3k6IEFjY3VyYWN5LmFueSxcbiAgICAgICAgICBtYXhpbXVtQWdlOiA1MDAwLFxuICAgICAgICAgIHRpbWVvdXQ6IDEwMDAwXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKFxuICAgICAgICAgIGZ1bmN0aW9uKGxvYykge1xuICAgICAgICAgICAgaWYgKGxvYykge1xuICAgICAgICAgICAgICAvL2dldCBjdXJyZW50IGxvY2F0aW9uXG4gICAgICAgICAgICAgIHRoYXQuY3VycmVudExvYy5sYXRpdHVkZSA9IHBhcnNlRmxvYXQobG9jLmxhdGl0dWRlKTtcbiAgICAgICAgICAgICAgdGhhdC5jdXJyZW50TG9jLmxvbmdpdHVkZSA9IHBhcnNlRmxvYXQobG9jLmxvbmdpdHVkZSk7XG5cbiAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGF0LmNlbnRlckxvY2F0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNlbnRlckxvYyA9IHRoYXQuY2VudGVyTG9jYXRpb25zW2ldO1xuXG4gICAgICAgICAgICAgICAgLy8gY2FsYyBkaXN0YW5jZSBmb3JlYWNoIGFuaW1hbCBzaGVsdGVyXG4gICAgICAgICAgICAgICAgY2VudGVyTG9jLmRpc3RhbmNlID1cbiAgICAgICAgICAgICAgICAgIGdlb2xvY2F0aW9uLmRpc3RhbmNlKFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgbGF0aXR1ZGU6IHRoYXQuY3VycmVudExvYy5sYXRpdHVkZSxcbiAgICAgICAgICAgICAgICAgICAgICBsb25naXR1ZGU6IHRoYXQuY3VycmVudExvYy5sb25naXR1ZGVcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGxhdGl0dWRlOiBjZW50ZXJMb2MubGF0aXR1ZGUsXG4gICAgICAgICAgICAgICAgICAgICAgbG9uZ2l0dWRlOiBjZW50ZXJMb2MubG9uZ2l0dWRlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICkgLyBtZXRlcnNUb01pbGVzQ29udmVyc2lvblJhdGU7IC8vIGRpdmlkZSBieSBjb252ZXJzaW9uIHJhdGVcblxuICAgICAgICAgICAgICAgIC8vIHJvdW5kIGRpc3RhbmNlXG4gICAgICAgICAgICAgICAgY2VudGVyTG9jLmRpc3RhbmNlID0gTnVtYmVyKFxuICAgICAgICAgICAgICAgICAgTWF0aC5yb3VuZChjZW50ZXJMb2MuZGlzdGFuY2UgKyBcImUyXCIpICsgXCJlLTJcIlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLy8gc29ydCBsaXN0IGJ5IGRpc3RhbmNlXG4gICAgICAgICAgICAgIHRoYXQuY2VudGVyTG9jYXRpb25zLnNvcnQoXG4gICAgICAgICAgICAgICAgKGxvYzEsIGxvYzIpID0+XG4gICAgICAgICAgICAgICAgICBsb2MxLmRpc3RhbmNlID4gbG9jMi5kaXN0YW5jZVxuICAgICAgICAgICAgICAgICAgICA/IDFcbiAgICAgICAgICAgICAgICAgICAgOiBsb2MyLmRpc3RhbmNlID4gbG9jMS5kaXN0YW5jZSA/IC0xIDogMFxuICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgIC8vIHRvYXN0IHRvIG5vdGlmeSBsaXN0IHdhcyBzb3J0ZWQgYnkgZGlzdGFuY2VcbiAgICAgICAgICAgICAgLy8gVE9ETzogYnVnZml4IHdoZW4gc3BhbW1pbmcgYnV0dG9uIHRoZXJlIGNhbiBiZSBhIGZpbml0ZSBhbW91bnQgb2YgVG9hc3RzIHRoYXQgY29uc3RhbnRseSBhcHBlYXJcbiAgICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgdGV4dDogXCJTb3J0ZWQgYnkgRGlzdGFuY2VcIixcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogVG9hc3QuRFVSQVRJT04uU0hPUlQsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFRvYXN0LlBPU0lUSU9OLkNFTlRFUiAvL29wdGlvbmFsXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIFRvYXN0LnNob3cob3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIChlLm1lc3NhZ2UgfHwgZSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9LFxuXG4gICAgb25JdGVtVGFwKGUpIHtcbiAgICAgIC8vIE5hdmlnYXRlIHRvIEFuaW1hbENlbnRlckRldGFpbHNcbiAgICAgIGNvbnNvbGUubG9nKFwib25JdGVtVGFwKGUpLCBuYXZpZ2F0ZVRvIFwiICsgSlNPTi5zdHJpbmdpZnkoZS5pdGVtKSk7XG4gICAgICB0aGlzLiRlbWl0KFwic2VsZWN0XCIsIGUuaXRlbSk7IC8vIHlvdSBORUVEIHRvIHVzZSBlLml0ZW0gKGUubG9jYXRpb24gaXMgdW5kZWZpbmVkKVxuICAgICAgdGhpcy4kbmF2aWdhdGVUbyhBbmltYWxDZW50ZXJEZXRhaWxzLCB7XG4gICAgICAgIHByb3BzOiB7IEFuaW1hbENlbnRlcjogZS5pdGVtIH0sXG4gICAgICAgIGFuaW1hdGVkOiB0cnVlLFxuICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgbmFtZTogXCJzbGlkZVwiLFxuICAgICAgICAgIGR1cmF0aW9uOiAzODAsXG4gICAgICAgICAgY3VydmU6IFwiZWFzZUluXCJcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cbkBpbXBvcnQgXCIuLi9BbmltYWxDZW50ZXJcIjtcblxuQWN0aW9uQmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOWZjYTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5pY29ue1xuICBtYXJnaW4tcmlnaHQ6IDVcbn1cblxuLmdwcy1idXR0b257XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCBsaWdodGdyYXksIHdoaXRlKTtcbiAgY29sb3I6ICRob21lcGFnZS1ibHVlO1xuICBib3JkZXItd2lkdGg6IDE7XG4gIGJvcmRlci1jb2xvcjogZ3JheTtcbiAgYm9yZGVyLXJhZGl1czogMjUlO1xuICBtYXJnaW46IDEwO1xufVxuXG4ubGlzdC1ncm91cCB7XG4gIC5saXN0LWdyb3VwLWl0ZW0tY29udGVudCB7XG4gICAgcGFkZGluZzogOCAxNSA0IDE1O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWxpZ2h0O1xuICB9XG5cbiAgLmxpc3QtZ3JvdXAtaXRlbS10ZXh0IHtcbiAgICBtYXJnaW46IDIgMztcbiAgfVxuXG4gIC5ob21lcGFnZS1ibHVlIHtcbiAgICBjb2xvcjogJGhvbWVwYWdlLWJsdWU7XG4gIH1cbn1cblxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8UGFnZSBjbGFzcz1cInBhZ2VcIj5cbiAgICAgICAgPEFjdGlvbkJhcj5cbiAgICAgICAgICAgPE5hdmlnYXRpb25CdXR0b24gQHRhcD1cIiRuYXZpZ2F0ZUJhY2soKVwiIGFuZHJvaWQuc3lzdGVtSWNvbj1cImljX21lbnVfYmFja1wiIC8+XG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cIlNlcnZpY2UgUmVxdWVzdFwiIGZvbnRTaXplPVwiMjBcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiLz5cbiAgICAgICAgPC9BY3Rpb25CYXI+XG5cbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaG9tZS1wYW5lbFwiPlxuICAgICAgICAgICAgPFdlYlZpZXcgaGVpZ2h0PVwiODE5MnB4XCIgc3JjPVwiaHR0cDovL2FuaW1hbGNhcmUubGFjb3VudHkuZ292L3NlcnZpY2UtcmVxdWVzdC9cIiAvPlxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgIDwvUGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4uaG9tZS1wYW5lbCB7XG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjA7XG59XG5cbkFjdGlvbkJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDlmY2E7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XG4gIDxQYWdlPlxuICAgIDxBY3Rpb25CYXIgOnRpdGxlPVwiYWN0aW9uQmFyXCIvPlxuICAgICAgPFN0YWNrTGF5b3V0PlxuICAgICAgICA8TGFiZWwgY2xhc3M9XCJtc2dcIj5XZSBhcG9sb2dpemUuIFRoZSBxdWVzdGlvbiB5b3UgYXJlIHNlYXJjaGluZyBmb3IgaGFzIG5vdCBiZWVuIGFuc3dlcmVkIHlldC4gVGFrZSB0aGlzIHRpY2tldCBpZiB5b3Ugd2FudCB0byBzdWJtaXQgdGhpcyBxdWVzdGlvbiBhbmQgZ2V0IGFuIGFuc3dlciBmcm9tIHRoZSBmcm9udCBkZXNrLjwvTGFiZWw+XG4gICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XCIqLCpcIiByb3dzPVwiKiwqLCpcIj5cbiAgICAgICAgICA8Q2F0ZWdvcnlCdXR0b24gcm93PVwiMFwiIGNvbD1cIjBcIiA6dGl0bGU9XCJ0aXRsZXNbMF1cIiA6YWN0aW9uPVwidG9GYXFcIiBiYWNrZ3JvdW5kQ29sb3I9XCIjZmYwMDAwXCIgLz5cbiAgICAgICAgICA8Q2F0ZWdvcnlCdXR0b24gcm93PVwiMFwiIGNvbD1cIjFcIiA6dGl0bGU9XCJ0aXRsZXNbMV1cIiA6YWN0aW9uPVwic3VibWl0VGlja2V0XCIgYmFja2dyb3VuZENvbG9yPVwiIzZBRkY1QVwiIC8+XG4gICAgICAgIDwvR3JpZExheW91dD5cbiAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gIDwvUGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBtYXBTdGF0ZSwgbWFwQWN0aW9ucywgbWFwTXV0YXRpb25zIH0gZnJvbSAndnVleCdcbmltcG9ydCBDYXRlZ29yeUJ1dHRvbiBmcm9tICdAL2NvbXBvbmVudHMvYnV0dG9ucy9DYXRlZ29yeUJ1dHRvbi52dWUnXG5pbXBvcnQgVGlja2V0IGZyb20gJ0AvbW9kZWxzL1RpY2tldCdcbmltcG9ydCBGYXEgZnJvbSAnLi9GYXEudnVlJ1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9Ib21lLnZ1ZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWN0aW9uQmFyOiAnVGlja2V0JyxcbiAgICAgIHRpdGxlczogWydObycsICdZZXMnXSxcbiAgICAgIGZhcTogRmFxLFxuICAgICAgaG9tZTogSG9tZVxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIC4uLm1hcEFjdGlvbnMoWydhZGRGYXEnLCAnYWRkVGlja2V0J10pLFxuICAgIC4uLm1hcE11dGF0aW9ucyhbJ3N0b3JlVGlja2V0J10pLFxuICAgIHN1Ym1pdFRpY2tldCAoKSB7XG4gICAgICB0aGlzLmFkZEZhcSh0aGlzLnVzZXJGYXEpXG4gICAgICBjb25zdCB0aWNrZXQgPSBuZXcgVGlja2V0KHRoaXMudXNlckZhcS5xdWVzdGlvbilcbiAgICAgIHRoaXMuc3RvcmVUaWNrZXQodGlja2V0KVxuICAgICAgdGhpcy5hZGRUaWNrZXQodGlja2V0KVxuICAgICAgdGhpcy4kbmF2aWdhdGVUbyh0aGlzLmhvbWUpXG4gICAgICBhbGVydCh7XG4gICAgICAgIHRpdGxlOiAnQWxlcnQnLFxuICAgICAgICBtZXNzYWdlOiAnWW91IGhhdmUgc3VjY2Vzc2Z1bGx5IHN1Ym1pdHRlZCBhIHRpY2tldCEnLFxuICAgICAgICBva0J1dHRvblRleHQ6ICdPSydcbiAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnaWQ6JywgdGhpcy51c2VyVGlja2V0LmlkKVxuICAgICAgICBjb25zb2xlLmxvZygndGltZSBpbnNlcnRlZDonLCB0aGlzLnVzZXJUaWNrZXQudGltZUluKVxuICAgICAgICBjb25zb2xlLmxvZygncXVlc3Rpb246JywgdGhpcy51c2VyVGlja2V0LnF1ZXN0aW9uKVxuICAgICAgfSlcbiAgICB9LFxuICAgIHRvRmFxICgpIHtcbiAgICAgIHRoaXMuJG5hdmlnYXRlVG8odGhpcy5mYXEpXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIC4uLm1hcFN0YXRlKFsndXNlckZhcScsICd0aWNrZXRzJywgJ3VzZXJUaWNrZXQnXSlcbiAgfSxcbiAgY29tcG9uZW50czoge1xuICAgIENhdGVnb3J5QnV0dG9uLFxuICAgIEZhcSxcbiAgICBIb21lXG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuICAubXNnIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMDtcbiAgfVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPFBhZ2U+XG4gICAgPEFjdGlvbkJhciB0aXRsZT1cIlRpY2tldCBQcm9jZXNzaW5nXCIgLz5cbiAgICA8U3RhY2tMYXlvdXQ+XG4gICAgICA8TGFiZWwgdGV4dD1cIlBob25lIG51bWJlcjpcIiAvPlxuICAgICAgPFRleHRWaWV3IHYtbW9kZWw9XCJwaG9uZVwiIC8+XG5cbiAgICAgIDxMYWJlbCB0ZXh0PVwiRmlyc3QgYW5kIGxhc3QgbmFtZTpcIiAvPlxuICAgICAgPFRleHRWaWV3IHYtbW9kZWw9XCJuYW1lXCIgLz5cblxuICAgICAgPExhYmVsIHRleHQ9XCJXaGF0IGFyZSB5b3UgaGVyZSBmb3I/XCIvPlxuICAgICAgPFRleHRWaWV3IHYtbW9kZWw9XCJxdWVyeVwiLz5cblxuICAgICAgPEJ1dHRvbiBAdGFwPVwic3VibWl0VGlja2V0XCIgdGV4dD1cIlN1Ym1pdCBUaWNrZXRcIi8+XG4gICAgPC9TdGFja0xheW91dD5cbiAgPC9QYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCAgeyBtYXBTdGF0ZSwgbWFwQWN0aW9ucywgbWFwTXV0YXRpb25zIH0gZnJvbSAndnVleCdcbmltcG9ydCBIb21lIGZyb20gJy4vSG9tZS52dWUnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBob25lOiAnJyxcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgcXVlcnk6JycsXG4gICAgICBob21lOiBIb21lLFxuICAgICAgbGltaXQ6IDBcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICAuLi5tYXBBY3Rpb25zKFsnYWRkVGlja2V0J10pLFxuICAgIC8vIHRoaXMuc2V0VGlja2V0SW5mbyhvYmplY3QpLCB3aGVyZSBvYmplY3QgY29udGFpbnMgcGhvbmUsIG5hbWUsIHF1ZXJ5LCBjb21tZW50IHByb3BlcnRpZXMsXG4gICAgc3VibWl0VGlja2V0ICgpIHtcbiAgICAgIHRoaXMuJG5hdmlnYXRlVG8odGhpcy5ob21lKVxuICAgICAgdGhpcy5hZGRUaWNrZXQoe1xuICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgIHBob25lOiB0aGlzLnBob25lLFxuICAgICAgICBxdWVyeTogdGhpcy5xdWVyeSxcbiAgICAgICAgbG9jYXRpb246IHRoaXMubG9jYXRpb25cbiAgICAgIH0pXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIC4uLm1hcFN0YXRlKFsndXNlclRpY2tldCcsICdhcHByb3ZlZFRpY2tldCcsICdsb2NhdGlvbiddKVxuICB9LFxuICB3YXRjaDoge1xuICAgIGFwcHJvdmVkVGlja2V0KG5ld1ZhbCwgb2xkVmFsKSB7XG4gICAgICBpZiAodGhpcy5saW1pdCA8IDEpIHtcbiAgICAgICAgaWYgKG5ld1ZhbCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxlcnQoe1xuICAgICAgICAgICAgdGl0bGU6IFwiVGlja2V0IFN1Ym1pdHRlZFwiLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJIZWxsbyBcIiArIG5ld1ZhbC5uYW1lICsgXCIsIHlvdSdyZSB0aWNrZXQgIyBpcyBcIiArIG5ld1ZhbC5udW1iZXJcbiAgICAgICAgICAgICsgXCIuIFlvdSB3aWxsIGJlIHNlcnZlZCBhdCB3aW5kb3cgXCIgKyAobmV3VmFsLndpbmRvdyArIDEpICsgXCIuXCIsXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWxlcnQoe1xuICAgICAgICAgICAgdGl0bGU6IFwiTm8gc2VydmljZVwiLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJUaGVyZSBhcmUgY3VycmVudGx5IG5vIGVtcGxveWVlcyBzZXJ2aW5nIHRpY2tldHNcIixcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5saW1pdCsrXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuPC9zdHlsZT5cbiIsIlxuPCEtLSBQYWdlIENvbnRyb2xscyB0aGUgTWFpbiB2aWV3IG9mIHRpY2tldCBzZWxjdGlvbi4gQ2hhbmdlaW5nIHRlbXBsZXQgd2lsbCBjaGFuZ2UgdGhlIHRleHQgdW5kZXIgdGhlIG9wdGlvbnMgaW4gdGhlXG4gICAgICBzY3JvbGwgYmFyLlxuICAgICAgICAgICAgTGlzdCBQaWNrZXI6XG4gICAgICAgICAgICAgICAgY3JlYXRlcyB0aGUgdGV4dCB3aGVlbCwgd2hpY2ggaXMgcG9wdWxhdGVkIGJ5IHRoZSBvYmplY3QgcmV0dXJuZWQgYnkgdGhlIHNjcmlwdFxuICAgICAgICAgICAgTGFiZWw6XG4gICAgICAgICAgICAgICAganVzdCBhIHdheSB0byBtYWtlIHBsYWluIHRleHQgb24gYXBwLlxuICAgICAgICAgICAgU3RhY2tMYXlvdXQ6XG4gICAgICAgICAgICAgICAgYWxsb3dzIHlvdSBvIHBvcHVsYXRlIHRoZSBib3R0b20gcG9ydGlvbiBvZiAtLT5cblxuXG5cbjx0ZW1wbGF0ZT5cbiAgICA8UGFnZT5cbiAgICAgICAgPEFjdGlvbkJhciB0aXRsZT1cIlRpY2tldCBSZWFzb25cIi8+XG4gICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XCIqXCIgcm93cz1cImF1dG8sIGF1dG8sIGF1dG8sIGF1dG9cIj5cbiAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cIm1zZ1wiIHRleHRXcmFwPVwidHJ1ZVwiIHJvdz1cIjBcIj5Zb3UgYXJlIGF0IHRoZSB7e3NpdGV9fSBBbmltYWwgQ2FyZSBhbmQgQ29udHJvbCBDZW50ZXIuPC9MYWJlbD5cblxuICAgICAgICAgICAgPExpc3RQaWNrZXIgcm93PVwiMVwiIDppdGVtcz1cImNob2ljZXNcIiBzZWxlY3RlZEluZGV4PVwiMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBAc2VsZWN0ZWRJbmRleENoYW5nZT1cInNlbGVjdGVkSW5kZXhDaGFuZ2VkXCIgdi1tb2RlbD1cInNlbGVjdGVkSW5kZXhcIi8+XG5cbiAgICAgICAgICAgIDxTdGFja0xheW91dCByb3c9XCIzXCIgdi1pZj1cImlzVGlja2V0XCI+XG4gICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwibXNnXCIgdGV4dD1cIiAgIFRlbGwgdXMgYWJvdXQgd2hhdCB5b3Ugd291bGQgbGlrZSB0byBrbm93XCIgdGV4dFdyYXA9XCJ0cnVlXCIvPlxuXG4gICAgICAgICAgICAgICAgPFRleHRWaWV3IHYtbW9kZWw9XCJvdGhlclRleHRcIi8+XG5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJIb21lXCIgQHRhcD1cInRvSG9tZVwiLz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJDcmVhdGUgVGlja2V0XCIgQHRhcD1cImNyZWF0ZVRpY2tldFwiLz5cbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgIDwvR3JpZExheW91dD5cbiAgICA8L1BhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBIb21lIGZyb20gJy4vSG9tZS52dWUnXG4gICAgaW1wb3J0IFRpY2tldEZvcm0gZnJvbSAnLi9UaWNrZXRGb3JtLnZ1ZSdcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY2hvaWNlczogW1xuICAgICAgICAgICAgICAgICAgICAnRHJvcCBPZmYnLFxuICAgICAgICAgICAgICAgICAgICAnQWRvcHRpb24gJyxcbiAgICAgICAgICAgICAgICAgICAgJ1N0cmF5IEludGFrZScsXG4gICAgICAgICAgICAgICAgICAgICdOZXcgUGV0IExpY2Vuc2UnLFxuICAgICAgICAgICAgICAgICAgICAnUmVuZXcgUGV0IExpY2Vuc2UnLFxuICAgICAgICAgICAgICAgICAgICAnTWljcm9jaGlwJyxcbiAgICAgICAgICAgICAgICAgICAgJ290aGVyJ1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgb3RoZXJUZXh0OiAnJyxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEluZGV4OiAwLFxuICAgICAgICAgICAgICAgIGlzVGlja2V0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGhvbWU6IEhvbWUsXG4gICAgICAgICAgICAgICAgdGlja2V0Rm9ybTogVGlja2V0Rm9ybSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgdG9Ib21lKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8odGhpcy5ob21lKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNyZWF0ZVRpY2tldCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKHRoaXMudGlja2V0Rm9ybSwge3Byb3BzOiB7cXVlcnk6IHRoaXMub3RoZXJUZXh0fX0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VsZWN0ZWRJbmRleENoYW5nZWQoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleCA+PSAxKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzVGlja2V0ID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1RpY2tldCA9IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBzaXRlOiBTdHJpbmdcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuICAgIC5tc2cge1xuICAgICAgICBmb250LXNpemU6IDE4O1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgfVxuICAgIC5BY3Rpb25fQmFyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOWZjYTtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgfVxuICAgIC5jb3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcGx1bSwgIzAwOWZjYSlcbiAgICB9XG48L3N0eWxlPlxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKipcXHJcXG4gKiBDb252ZW5pZW50IHNpbmdsZSBpbXBvcnQgZm9yIGxpZ2h0IHZhcmlhYmxlc1xcclxcbiAqIEluY2x1ZGVzIGJhc2UgdmFyaWFibGVzIHdpdGggbGlnaHQgb3ZlcnJpZGVzXFxyXFxuICoqL1xcbi8qKlxcclxcbiAqIExpZ2h0IHZhcmlhYmxlIG92ZXJyaWRlc1xcclxcbiAqKi9cXG4vKipcXG4gKiBUaGVtZSB2YXJpYWJsZXMgb3ZlcnJpZGVzXFxuKiovXFxuLmFuaW0tY292ZXJbZGF0YS12LTVmZjdkMTVjXSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGtleS1jb3Zlci1kYXRhLXYtNWZmN2QxNWM7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDE7XFxuICBhbmltYXRpb24tZGVsYXk6IDAuNTtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG5Aa2V5ZnJhbWVzIGtleS1jb3Zlci1kYXRhLXYtNWZmN2QxNWMge1xcbjAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTAwKSBzY2FsZSgwLCAwKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbjMwJSB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG4xMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSwgMSk7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG59XFxuLmFuaW0tY29udGVudDFbZGF0YS12LTVmZjdkMTVjXSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGtleS1jb250ZW50LWRhdGEtdi01ZmY3ZDE1YztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTtcXG4gIGFuaW1hdGlvbi1kZWxheTogMC43NTtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG4uYW5pbS1jb250ZW50MltkYXRhLXYtNWZmN2QxNWNdIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBhbmltYXRpb24tbmFtZToga2V5LWNvbnRlbnQtZGF0YS12LTVmZjdkMTVjO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjA7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxuLmFuaW0tY29udGVudDNbZGF0YS12LTVmZjdkMTVjXSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGtleS1jb250ZW50LWRhdGEtdi01ZmY3ZDE1YztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTtcXG4gIGFuaW1hdGlvbi1kZWxheTogMS4yNTtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG4uYW5pbS1jb250ZW50NFtkYXRhLXYtNWZmN2QxNWNdIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBhbmltYXRpb24tbmFtZToga2V5LWNvbnRlbnQtZGF0YS12LTVmZjdkMTVjO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjU7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxuQGtleWZyYW1lcyBrZXktY29udGVudC1kYXRhLXYtNWZmN2QxNWMge1xcbjAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAsIDUwKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbjEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbn1cXG4udGl0bGVbZGF0YS12LTVmZjdkMTVjXSB7XFxuICBmb250LXNpemU6IDE4ZW07XFxuICBjb2xvcjogIzBGMzM2RDtcXG59XFxuLnN0YWNrW2RhdGEtdi01ZmY3ZDE1Y10ge1xcbiAgcGFkZGluZy10b3A6IDE0O1xcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMTtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNkNGQ0ZDQ7XFxufVxcbi5zdGFjay1ob3Vyc1tkYXRhLXYtNWZmN2QxNWNdIHtcXG4gIHBhZGRpbmctdG9wOiA2O1xcbn1cXG4uaG91cnNbZGF0YS12LTVmZjdkMTVjXSB7XFxuICBjb2xvcjogIzAyMjczNDtcXG59XFxuQWN0aW9uQmFyW2RhdGEtdi01ZmY3ZDE1Y10ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOWZjYTtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICA7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9sb2NhdGlvbi9BbmltYWxDZW50ZXJEZXRhaWxzLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKipcXHJcXG4gKiBDb252ZW5pZW50IHNpbmdsZSBpbXBvcnQgZm9yIGxpZ2h0IHZhcmlhYmxlc1xcclxcbiAqIEluY2x1ZGVzIGJhc2UgdmFyaWFibGVzIHdpdGggbGlnaHQgb3ZlcnJpZGVzXFxyXFxuICoqL1xcbi8qKlxcclxcbiAqIExpZ2h0IHZhcmlhYmxlIG92ZXJyaWRlc1xcclxcbiAqKi9cXG4vKipcXG4gKiBUaGVtZSB2YXJpYWJsZXMgb3ZlcnJpZGVzXFxuKiovXFxuLmZhcV9xdWVzdGlvbltkYXRhLXYtMGE0YmIyNDVdIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAyMDtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuLmZhcV9hbnN3ZXJbZGF0YS12LTBhNGJiMjQ1XSB7XFxuICBjb2xvcjogIzQ1NDU0NTtcXG59XFxuLmxpc3QtZ3JvdXAtaXRlbS10ZXh0W2RhdGEtdi0wYTRiYjI0NV0ge1xcbiAgbWFyZ2luOiAyIDM7XFxufVxcbi5saXN0LWdyb3VwLWl0ZW0tY29udGVudFtkYXRhLXYtMGE0YmIyNDVdIHtcXG4gIHBhZGRpbmc6IDggMTUgNCAxNTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxufVxcbi5ob21lcGFnZS1ibHVlW2RhdGEtdi0wYTRiYjI0NV0ge1xcbiAgY29sb3I6ICMwNzgzZjg7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIDtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL3N1Ymxpc3RzL0ZhcUluZm8udnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcclxcbiAqIENvbnZlbmllbnQgc2luZ2xlIGltcG9ydCBmb3IgbGlnaHQgdmFyaWFibGVzXFxyXFxuICogSW5jbHVkZXMgYmFzZSB2YXJpYWJsZXMgd2l0aCBsaWdodCBvdmVycmlkZXNcXHJcXG4gKiovXFxuLyoqXFxyXFxuICogTGlnaHQgdmFyaWFibGUgb3ZlcnJpZGVzXFxyXFxuICoqL1xcbi8qKlxcbiAqIFRoZW1lIHZhcmlhYmxlcyBvdmVycmlkZXNcXG4qKi9cXG5BY3Rpb25CYXJbZGF0YS12LWUzOWQxMDkyXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5ZmNhO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcbi5tZXNzYWdlW2RhdGEtdi1lMzlkMTA5Ml0ge1xcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjA7XFxuICBjb2xvcjogIzAwMDAwMDtcXG59XFxuLmZhcV9xdWVzdGlvbltkYXRhLXYtZTM5ZDEwOTJdIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAyMDtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuLmZhcV9hbnN3ZXJbZGF0YS12LWUzOWQxMDkyXSB7XFxuICBjb2xvcjogIzQ1NDU0NTtcXG59XFxuLmxpc3QtZ3JvdXAtaXRlbS10ZXh0W2RhdGEtdi1lMzlkMTA5Ml0ge1xcbiAgbWFyZ2luOiA3IDg7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIDtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi92aWV3cy9GYXEudnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcclxcbiAqIENvbnZlbmllbnQgc2luZ2xlIGltcG9ydCBmb3IgbGlnaHQgdmFyaWFibGVzXFxyXFxuICogSW5jbHVkZXMgYmFzZSB2YXJpYWJsZXMgd2l0aCBsaWdodCBvdmVycmlkZXNcXHJcXG4gKiovXFxuLyoqXFxyXFxuICogTGlnaHQgdmFyaWFibGUgb3ZlcnJpZGVzXFxyXFxuICoqL1xcbi8qKlxcbiAqIFRoZW1lIHZhcmlhYmxlcyBvdmVycmlkZXNcXG4qKi9cXG4uQWN0aW9uX0JhcltkYXRhLXYtMmYyYmU3ZTRdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDlmY2E7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuLlNfQmFyW2RhdGEtdi0yZjJiZTdlNF0ge1xcbiAgY29sb3I6ICMwNTA1MDU7XFxufVxcbi5TX0J1dHRvbltkYXRhLXYtMmYyYmU3ZTRdIHtcXG4gIC8qIHRleHQ9XFxcInJpZ2h0XFxcIjsgXFxuICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJyaWdodFxcXCI7XFxuICAgICAgICB3aWR0aD1cXFwiMzMlXFxcIiBcXG4gICAgICAgIGhlaWdodD1cXFwiNzBcXFwiIFxcbiAgICAgICAgLypiYWNrZ3JvdW5kQ29sb3I9XFxcIiMxYzZiNDhcXFwiLz4qL1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJ+L2Fzc2V0cy9pbWFnZXMvTmF0aXZlU2NyaXB0LVZ1ZS5wbmdcXFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG4uY292ZXJbZGF0YS12LTJmMmJlN2U0XSB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHBsdW0sICMwMDlmY2EpO1xcbn1cXG4uaG9tZXBhZ2UtYmx1ZVtkYXRhLXYtMmYyYmU3ZTRdIHtcXG4gIGNvbG9yOiAjMDc4M2Y4O1xcbn1cXG4uQWN0aW9uX1RleHRbZGF0YS12LTJmMmJlN2U0XSB7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxufVxcbi5Ib21lQnV0dG9uW2RhdGEtdi0yZjJiZTdlNF0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAyNTtcXG4gIGZvbnQtc2l6ZTogMTQlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nLXRvcDogN2VtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XFxufVxcbi5sYXlvdXRbZGF0YS12LTJmMmJlN2U0XSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xcbn1cXG4ubWVzc2FnZVtkYXRhLXYtMmYyYmU3ZTRdIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDIwO1xcbiAgY29sb3I6ICMyNTI1MjU7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIDtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi92aWV3cy9Ib21lLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKipcXHJcXG4gKiBDb252ZW5pZW50IHNpbmdsZSBpbXBvcnQgZm9yIGxpZ2h0IHZhcmlhYmxlc1xcclxcbiAqIEluY2x1ZGVzIGJhc2UgdmFyaWFibGVzIHdpdGggbGlnaHQgb3ZlcnJpZGVzXFxyXFxuICoqL1xcbi8qKlxcclxcbiAqIExpZ2h0IHZhcmlhYmxlIG92ZXJyaWRlc1xcclxcbiAqKi9cXG4vKipcXG4gKiBUaGVtZSB2YXJpYWJsZXMgb3ZlcnJpZGVzXFxuKiovXFxuQWN0aW9uQmFyW2RhdGEtdi0zZTU5Nzg2NF0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOWZjYTtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG4uaWNvbltkYXRhLXYtM2U1OTc4NjRdIHtcXG4gIG1hcmdpbi1yaWdodDogNTtcXG59XFxuLmdwcy1idXR0b25bZGF0YS12LTNlNTk3ODY0XSB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgbGlnaHRncmF5LCB3aGl0ZSk7XFxuICBjb2xvcjogIzA3ODNmODtcXG4gIGJvcmRlci13aWR0aDogMTtcXG4gIGJvcmRlci1jb2xvcjogZ3JheTtcXG4gIGJvcmRlci1yYWRpdXM6IDI1JTtcXG4gIG1hcmdpbjogMTA7XFxufVxcbi5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW0tY29udGVudFtkYXRhLXYtM2U1OTc4NjRdIHtcXG4gIHBhZGRpbmc6IDggMTUgNCAxNTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxufVxcbi5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW0tdGV4dFtkYXRhLXYtM2U1OTc4NjRdIHtcXG4gIG1hcmdpbjogMiAzO1xcbn1cXG4ubGlzdC1ncm91cCAuaG9tZXBhZ2UtYmx1ZVtkYXRhLXYtM2U1OTc4NjRdIHtcXG4gIGNvbG9yOiAjMDc4M2Y4O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICA7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vdmlld3MvTG9jYXRpb24udnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcbi8qIENTUyAqL1xcbi5jbG9zZVtkYXRhLXYtNGViYTJkMTJdIHtcXG4gIGZvbnQtc2l6ZTogMjA7XFxuICBjb2xvcjogcmdiKDIyNiwgMjI5LCAyMjkpO1xcbiAgbWFyZ2luOiAxNSAwIDAgMTU7XFxufVxcblRleHRWaWV3W2RhdGEtdi00ZWJhMmQxMl0ge1xcbiAgYm9yZGVyLXdpZHRoOiAxO1xcbiAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xcbn1cXG4uZGVzY3JpcHRpb24tdGV4dFtkYXRhLXYtNGViYTJkMTJdIHtcXG4gIGZvbnQtc2l6ZTogMTQ7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuLmRlc2NyaXB0aW9uLWljb25bZGF0YS12LTRlYmEyZDEyXSB7XFxuICBmb250LXNpemU6IDE2O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogIzNlOWVkYjtcXG4gIG1hcmdpbi1yaWdodDogODtcXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxufVxcbi5kZXNjcmlwdGlvbi12YWx1ZVtkYXRhLXYtNGViYTJkMTJdIHtcXG4gIGZvbnQtc2l6ZTogMTQ7XFxuICBjb2xvcjogYmxhY2s7XFxuICBtYXJnaW46IDg7XFxufVxcbi5kZXNjcmlwdGlvbi12YWx1ZS5pc0F2YWlsYWJsZVtkYXRhLXYtNGViYTJkMTJdIHtcXG4gIGNvbG9yOiBncmVlbjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkXFxufVxcbi5kZXNjcmlwdGlvbi12YWx1ZS5pc05vdEF2YWlsYWJsZVtkYXRhLXYtNGViYTJkMTJdIHtcXG4gIGNvbG9yOiByZWQ7XFxuICBmb250LXdlaWdodDogYm9sZFxcbn1cXG4ucmF0ZVtkYXRhLXYtNGViYTJkMTJdIHtcXG4gIHBhZGRpbmctdG9wOiAzO1xcbiAgbWFyZ2luOiAwO1xcbiAgY29sb3I6ICNmZmU5MDA7XFxuICBmb250LXNpemU6IDE4O1xcbn1cXG4ucmF0aW5nLXZhbHVlW2RhdGEtdi00ZWJhMmQxMl0ge1xcbiAgbWFyZ2luLWxlZnQ6IDU7XFxufVxcbi5saWtlZC1hY3RpdmVbZGF0YS12LTRlYmEyZDEyXSB7XFxuICBjb2xvcjogIzQwODBmZjtcXG59XFxuLmhlYXJ0LWFjdGl2ZVtkYXRhLXYtNGViYTJkMTJdIHtcXG4gIGNvbG9yOiAjYjUxMjEzO1xcbn1cXG4uZGVmYXVsdFtkYXRhLXYtNGViYTJkMTJdIHtcXG4gIGNvbG9yOiAjODI4MjgyO1xcbn1cXG4ubGF5b3V0W2RhdGEtdi00ZWJhMmQxMl0ge1xcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG4gIGNvbG9yOiAjODI4MjgyO1xcbiAgZm9udC1zaXplOiAxNDtcXG4gIGhlaWdodDogMzA7XFxuICBwYWRkaW5nOiA1IDAgNSAwO1xcbn1cXG4ubGlrZS1pY29uW2RhdGEtdi00ZWJhMmQxMl0ge1xcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG4gIGhlaWdodDogMzA7XFxuICBmb250LXNpemU6IDE2O1xcbiAgbWFyZ2luLXJpZ2h0OiAyO1xcbiAgcGFkZGluZzogNSA1IDUgNTtcXG59XFxuLml0ZW0tbmFtZVtkYXRhLXYtNGViYTJkMTJdIHtcXG4gIGZvbnQtc2l6ZTogMTQ7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLml0ZW0tY2F0ZWdvcnlbZGF0YS12LTRlYmEyZDEyXSB7XFxuICBmb250LXNpemU6IDE0O1xcbiAgY29sb3I6ICM4MjgyODI7XFxufVxcbi5jYXRlZ29yeS1pY29uW2RhdGEtdi00ZWJhMmQxMl0ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDU7XFxuICBjb2xvcjogd2hpdGU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyNTtcXG4gIGJvcmRlci13aWR0aDogMTtcXG4gIGJvcmRlci1jb2xvcjogI2ZmZmZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIG1hcmdpbi10b3A6IDQ7XFxuICBtYXJnaW4tcmlnaHQ6IDE1O1xcbiAgd2lkdGg6IDQwO1xcbiAgaGVpZ2h0OiA0MDtcXG59XFxuLmNvbnRlbnRbZGF0YS12LTRlYmEyZDEyXSB7XFxuICBtYXJnaW4tbGVmdDogMTY7XFxuICBtYXJnaW4tcmlnaHQ6IDE2O1xcbiAgbWFyZ2luLWJvdHRvbTogMztcXG4gIC8qIG1hcmdpbi10b3A6IDE2OyAqL1xcbn1cXG4uY2FyZC1pbWdbZGF0YS12LTRlYmEyZDEyXSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMjUwO1xcbiAgbWFyZ2luLWJvdHRvbTogNTtcXG59XFxuLmNhcmQtaW1nLXRodW1iW2RhdGEtdi00ZWJhMmQxMl0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgMjMwLCAyMzApO1xcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDU7XFxuICB3aWR0aDogMTMwO1xcbiAgaGVpZ2h0OiA3MDtcXG4gIG1hcmdpbi1sZWZ0OiA1O1xcbn1cXG4ubGluZVtkYXRhLXYtNGViYTJkMTJdIHtcXG4gIGhlaWdodDogMC41O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6ICNlMGUwZTA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbn1cXG4ubGluZUJyZWFrW2RhdGEtdi00ZWJhMmQxMl0ge1xcbiAgaGVpZ2h0OiAwLjU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogI2UwZTBlMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxufVxcblxcblxcbi8qIEFuaW1hdGlvbnMgKi9cXG4uYW5pbS1wYWdlW2RhdGEtdi00ZWJhMmQxMl0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDZkODtcXG4gIGFuaW1hdGlvbi1uYW1lOiBrZXktcGFnZS1kYXRhLXYtNGViYTJkMTI7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDI7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxuQGtleWZyYW1lcyBrZXktcGFnZS1kYXRhLXYtNGViYTJkMTIge1xcbjAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RhZGFkYTtcXG59XFxuMjAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RiZDJkNTtcXG59XFxuMTAwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG59XFxuLmFuaW0tY292ZXJbZGF0YS12LTRlYmEyZDEyXSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGtleS1jb3Zlci1kYXRhLXYtNGViYTJkMTI7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDE7XFxuICBhbmltYXRpb24tZGVsYXk6IDAuNTtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG5Aa2V5ZnJhbWVzIGtleS1jb3Zlci1kYXRhLXYtNGViYTJkMTIge1xcbjAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNTUwKSBzY2FsZSgwLCAwKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbjMwJSB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG4xMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSwgMSk7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG59XFxuLmFuaW0taW1hZ2VzW2RhdGEtdi00ZWJhMmQxMl0ge1xcbiAgb3BhY2l0eTogMDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBrZXktaW1hZ2VzLWRhdGEtdi00ZWJhMmQxMjtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTtcXG4gIGFuaW1hdGlvbi1kZWxheTogMC43O1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbkBrZXlmcmFtZXMga2V5LWltYWdlcy1kYXRhLXYtNGViYTJkMTIge1xcbjAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNTUwKSBzY2FsZSgwLCAwKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbjMwJSB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG4xMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSwgMSk7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG59XFxuLmFuaW0taXRlbUluZm9bZGF0YS12LTRlYmEyZDEyXSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGtleS1pdGVtSW5mby1kYXRhLXYtNGViYTJkMTI7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDE7XFxuICBhbmltYXRpb24tZGVsYXk6IDEuMjtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG5Aa2V5ZnJhbWVzIGtleS1pdGVtSW5mby1kYXRhLXYtNGViYTJkMTIge1xcbjAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAsIDUwKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbjEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbn1cXG4uYW5pbS1saWtlc1tkYXRhLXYtNGViYTJkMTJdIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBhbmltYXRpb24tbmFtZToga2V5LWxpa2VzLWRhdGEtdi00ZWJhMmQxMjtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTtcXG4gIGFuaW1hdGlvbi1kZWxheTogMS41O1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbkBrZXlmcmFtZXMga2V5LWxpa2VzLWRhdGEtdi00ZWJhMmQxMiB7XFxuMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCwgNTApO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxuMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcXG59XFxufVxcbi5hbmltLWNvbnRlbnRbZGF0YS12LTRlYmEyZDEyXSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGtleS1jb250ZW50LWRhdGEtdi00ZWJhMmQxMjtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTtcXG4gIGFuaW1hdGlvbi1kZWxheTogMS44O1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XFxufVxcbkBrZXlmcmFtZXMga2V5LWNvbnRlbnQtZGF0YS12LTRlYmEyZDEyIHtcXG4wJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwLCA1MCk7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG4xMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xcbn1cXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2NvbXBvbmVudHMvYWRvcHRpb24vQWRvcHRpb25BbmltYWxEZXRhaWxzLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uaXRlbS1jYXRlZ29yeVtkYXRhLXYtZjE0MjJhMTBdIHtcXG4gIGZvbnQtc2l6ZTogMTQ7XFxuICBjb2xvcjogIzgyODI4MjtcXG59XFxuLmdlbmRlci1pY29uW2RhdGEtdi1mMTQyMmExMF0ge1xcbiAgcGFkZGluZy10b3A6IDM7XFxuICBwYWRkaW5nLXJpZ2h0OiAzO1xcbiAgZm9udC1zaXplOiAxNjtcXG4gIG1hcmdpbi1yaWdodDogMTA7XFxufVxcbi5pbmZvLWljb25bZGF0YS12LWYxNDIyYTEwXSB7XFxuICBwYWRkaW5nLXRvcDogMztcXG4gIHBhZGRpbmctbGVmdDogMztcXG4gIGNvbG9yOiBncmF5O1xcbiAgZm9udC1zaXplOiAxNDtcXG4gIG1hcmdpbi1sZWZ0OiAxMDtcXG59XFxuLnJhdGluZy12YWx1ZVtkYXRhLXYtZjE0MjJhMTBdIHtcXG4gIG1hcmdpbi1sZWZ0OiA1O1xcbn1cXG4ubGlrZWQtYWN0aXZlW2RhdGEtdi1mMTQyMmExMF0ge1xcbiAgY29sb3I6ICM0MDgwZmY7XFxufVxcbi5oZWFydC1hY3RpdmVbZGF0YS12LWYxNDIyYTEwXSB7XFxuICBjb2xvcjogI2I1MTIxMztcXG59XFxuLmRlZmF1bHRbZGF0YS12LWYxNDIyYTEwXSB7XFxuICBjb2xvcjogIzgyODI4MjtcXG59XFxuLmxheW91dFtkYXRhLXYtZjE0MjJhMTBdIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuICBjb2xvcjogIzgyODI4MjtcXG4gIGZvbnQtc2l6ZTogMTQ7XFxuICBoZWlnaHQ6IDMwO1xcbiAgcGFkZGluZzogNSAwIDUgMDtcXG59XFxuLmxpa2UtaWNvbltkYXRhLXYtZjE0MjJhMTBdIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuICBoZWlnaHQ6IDMwO1xcbiAgZm9udC1zaXplOiAxNjtcXG4gIG1hcmdpbi1yaWdodDogMjtcXG4gIHBhZGRpbmc6IDUgNSA1IDU7XFxufVxcbi5pdGVtLW5hbWVbZGF0YS12LWYxNDIyYTEwXSB7XFxuICBmb250LXNpemU6IDE0O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nLWJvdHRvbTogMjtcXG59XFxuLml0ZW0tY2F0ZWdvcnlbZGF0YS12LWYxNDIyYTEwXSB7XFxuICBmb250LXNpemU6IDE0O1xcbiAgY29sb3I6ICM4MjgyODI7XFxufVxcbi5jYXRlZ29yeS1pY29uW2RhdGEtdi1mMTQyMmExMF0ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDU7XFxuICBib3JkZXItY29sb3I6IHdoaXRlO1xcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjU7XFxuICBib3JkZXItd2lkdGg6IDE7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBtYXJnaW4tdG9wOiA0O1xcbiAgbWFyZ2luLXJpZ2h0OiAxNTtcXG4gIHdpZHRoOiA0MDtcXG4gIGhlaWdodDogNDA7XFxufVxcbi5jb250ZW50W2RhdGEtdi1mMTQyMmExMF0ge1xcbiAgbWFyZ2luLWxlZnQ6IDE2O1xcbiAgbWFyZ2luLXJpZ2h0OiAxNjtcXG4gIG1hcmdpbi1ib3R0b206IDM7XFxuICBtYXJnaW4tdG9wOiAxNjtcXG59XFxuLmNhcmQtaW1nW2RhdGEtdi1mMTQyMmExMF0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDE1MDtcXG4gIG1hcmdpbi1ib3R0b206IDU7XFxufVxcbi5saW5lW2RhdGEtdi1mMTQyMmExMF0ge1xcbiAgaGVpZ2h0OiAwLjU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogI2UwZTBlMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxufVxcbi5saW5lQnJlYWtbZGF0YS12LWYxNDIyYTEwXSB7XFxuICBoZWlnaHQ6IDc7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogI2UwZTBlMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIDtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL2Fkb3B0aW9uL0FuaW1hbENhcmQudnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5kZWZhdWx0LWltZ1tkYXRhLXYtMDVjOThlYWNdIHtcXG4gICAgY29sb3I6ICNkMWNlY2U1YjtcXG59XFxuLmNhdGVnb3J5LW5hbWVbZGF0YS12LTA1Yzk4ZWFjXSB7XFxuICAgIGNvbG9yOiAjZjdmN2Y3O1xcbiAgICBmb250LXNpemU6IDE0O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW46IDUgMCAxNSAwXFxufVxcbi5iYW5uZXJbZGF0YS12LTA1Yzk4ZWFjXSB7XFxuICAgIGNvbG9yOiAjYmRiZGJkO1xcbiAgICBvcGFjaXR5OiAuMztcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2NvbXBvbmVudHMvYWRvcHRpb24vY2F0ZWdvcnkudnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcbi8qIGJ1dHRvbiBvbiBhbmRyb2lkIGlzIHN0eWxlZCB3aXRoIGRlZmF1bHQgc2V0dGluZyB3aGVuIGJvcmRlciByYWRpdXMgaXMgb21pdHRlZCovXFxuLmJ1dHRvbltkYXRhLXYtNzYwOWEyMzlde1xcbiAgYm9yZGVyLXJhZGl1czogMjUlO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICA7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9idXR0b25zL0NhdGVnb3J5QnV0dG9uLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4vKiBidXR0b24gb24gYW5kcm9pZCBpcyBzdHlsZWQgd2l0aCBkZWZhdWx0IHNldHRpbmcgd2hlbiBib3JkZXIgcmFkaXVzIGlzIG9taXR0ZWQqL1xcbi5idXR0b25bZGF0YS12LTQ0YWU1NzE4XXtcXG4gIGJvcmRlci1yYWRpdXM6IDI1JTtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbn1cXG5cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICA7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9idXR0b25zL0ljb25CdXR0b24udnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi50YWJ2aWV3LmFjdGl2ZSB7XFxuICBib3JkZXItYm90dG9tLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDM7XFxuICBtYXJnaW46IDA7XFxuICBoZWlnaHQ6IDUwO1xcbn1cXG4udGFidmlld1RleHQge1xcbiAgbWFyZ2luLXRvcDogMTU7XFxuICBtYXJnaW4tYm90dG9tOiA1O1xcbiAgZm9udC1zaXplOiAxMztcXG4gIGNvbG9yOiAjZDhkMmQyO1xcbn1cXG4udGFidmlld1RleHQuYWN0aXZlIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tYm90dG9tOiA1O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubmF2SWNvbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAzO1xcbn1cXG4ubmF2VGFiIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDlmY2E7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuLm5hdlRhYnZpZXcge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL3ZpZXdzL0Fkb3B0aW9uLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uaG9tZS1wYW5lbFtkYXRhLXYtM2NjZWNmMDldIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDIwO1xcbn1cXG5BY3Rpb25CYXJbZGF0YS12LTNjY2VjZjA5XSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5ZmNhO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIDtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi92aWV3cy9TZXJ2aWNlUmVxdWVzdC52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLm1zZ1tkYXRhLXYtMDdiNDBjMGFdIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjA7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIDtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi92aWV3cy9UaWNrZXQudnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5tc2dbZGF0YS12LTEzOWQ5NTUzXSB7XFxuICAgIGZvbnQtc2l6ZTogMTg7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuLkFjdGlvbl9CYXJbZGF0YS12LTEzOWQ5NTUzXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDlmY2E7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG4uY292ZXJbZGF0YS12LTEzOWQ5NTUzXSB7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcGx1bSwgIzAwOWZjYSlcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL3ZpZXdzL1RpY2tldE9wdGlvbnMudnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImFuaW0tcGFnZVwiLFxuICAgICAgYXR0cnM6IHsgYWN0aW9uQmFySGlkZGVuOiBcInRydWVcIiwgYmFja2dyb3VuZFNwYW5VbmRlclN0YXR1c0JhcjogXCJ0cnVlXCIgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYWluXCIsIGF0dHJzOiB7IHZlcnRpY2FsQWxpZ25tZW50OiBcInRvcFwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFuaW0tY292ZXJcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgcm93czogXCJhdXRvXCIsIGNvbHVtbnM6IFwiKlwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtaW1nXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIi00MFwiLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE4MFwiLFxuICAgICAgICAgICAgICAgICAgc3RyZXRjaDogXCJhc3BlY3RGaWxsXCIsXG4gICAgICAgICAgICAgICAgICBzcmM6IF92bS5pdGVtLmNvdmVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgY2xvc2VcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJ0b3BcIixcbiAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLl9mKFwiZm9udGljb25cIikoXCJmYS1hcnJvdy1sZWZ0XCIpLFxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMjRcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uY2xvc2UgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJTY3JvbGxWaWV3XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFuaW0taW1hZ2VzXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IG9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBvcmllbnRhdGlvbjogXCJob3Jpem9udGFsXCIgfSB9LFxuICAgICAgICAgICAgICAgIF92bS5fbChfdm0uaXRlbS5pbWFnZXMsIGZ1bmN0aW9uKGltYWdlKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICB7IGtleTogaW1hZ2UsIGF0dHJzOiB7IHJvd3M6IFwiYXV0b1wiLCBjb2x1bW5zOiBcIipcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtaW1nLXRodW1iXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IGltYWdlLnNyYyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyZXRjaDogXCJhc3BlY3RGaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb250ZW50XCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHJvd3M6IFwiYXV0byxhdXRvLGF1dG8sYXV0b1wiLCBjb2x1bW5zOiBcImF1dG9cIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhbmltLWl0ZW1JbmZvXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMTVcIixcbiAgICAgICAgICAgICAgICAgICAgcm93OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5zOiBcImF1dG8sKlwiLFxuICAgICAgICAgICAgICAgICAgICByb3dzOiBcImF1dG8sYXV0byxhdXRvLGF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBjYXRlZ29yeS1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLl9mKFwiZm9udGljb25cIikoX3ZtLmdlbmRlckljb24pLFxuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICByb3dTcGFuOiBcIjJcIixcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IF92bS5pdGVtLmNhdGVnb3J5VGFnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIml0ZW0tbmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0d3JhcDogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiYm90dG9tXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLml0ZW0ubmFtZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpdGVtLWNhdGVnb3J5XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHR3cmFwOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJ0b3BcIixcbiAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uaXRlbS5jYXRlZ29yeVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaW5lIGFuaW0tbGlrZXNcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyByb3c6IFwiMlwiLCB3aWR0aDogXCIxMDAlXCIsIG1hcmdpblRvcDogXCIxMFwiIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFuaW0tbGlrZXNcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCI1XCIsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgcm93OiBcIjNcIixcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uczogXCIqLGF1dG8sYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICByb3dzOiBcImF1dG9cIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGNvbDogXCIwXCIsIHJvd3M6IFwiYXV0b1wiLCBjb2x1bW5zOiBcImF1dG8sYXV0b1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiBcImluZm9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpa2UtaWNvbiBmYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLl9mKFwiZm9udGljb25cIikoXCJmYS1pbmZvLWNpcmNsZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5pdGVtLmJyZWVkX2dyb3VwICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiAtIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uaXRlbS5wcmltYXJ5X2JyZWVkXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcm93czogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zOiBcImF1dG8sYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMTVcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0udG9nZ2xlSGVhcnQgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWY6IFwiZmF2b3JpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpa2UtaWNvbiAgZmFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5pdGVtLmlzRmF2b3JpdGUgPyBcImhlYXJ0LWFjdGl2ZVwiIDogXCJkZWZhdWx0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uX2YoXCJmb250aWNvblwiKShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uaXRlbS5pc0Zhdm9yaXRlID8gXCJmYS1oZWFydFwiIDogXCJmYS1oZWFydC1vXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2w6IFwiMVwiLCByb3c6IFwiMFwiLCB0ZXh0OiBcIkZhdm9yaXRlXCIgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGNvbDogXCIyXCIsIG9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpa2UtaWNvbiBsYXlvdXQgZmFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5fZihcImZvbnRpY29uXCIpKFwiZmEtc2hhcmUtc3F1YXJlLW9cIikgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIlNoYXJlXCIgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFwiU3RhY2tMYXlvdXRcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGluZUJyZWFrIGFuaW0tbGlrZXNcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHdpZHRoOiBcIjEwMCVcIiB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkdyaWRsYXlvdXRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29udGVudCBhbmltLWNvbnRlbnRcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgcm93czogXCJhdXRvLCpcIiwgbWFyZ2luVG9wOiBcIjE1XCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgcm93czogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI1XCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnM6IFwiYXV0bywgYXV0b1wiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgZGVzY3JpcHRpb24taWNvblwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLl9mKFwiZm9udGljb25cIikoXCJmYS10YWdzXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwOiBcInRydWVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbDogXCIxXCIsIHRleHQ6IFwiRGVzY3JpcHRpb25cIiwgdGV4dFdyYXA6IFwidHJ1ZVwiIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHJvdzogXCIxXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlNjcm9sbFZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93czogXCIqLCAqLCAqLCAqLCAqLCAqLCAqLCAqXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uczogXCJhdXRvLCAqXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwidG9wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi12YWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIwXCIsIGNvbDogXCIwXCIsIHRleHQ6IFwiQXZhaWxhYmlsaXR5OlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBkZXNjcmlwdGlvbi12YWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5pdGVtLmlzQXZhaWxhYmxlID09IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiaXNBdmFpbGFibGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJpc05vdEF2YWlsYWJsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjBcIiwgY29sOiBcIjFcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJGb3JtYXR0ZWRTdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5pdGVtLmlzQXZhaWxhYmxlID09IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJBdmFpbGFibGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIk5vdCBBdmFpbGFibGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uX2YoXCJmb250aWNvblwiKShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uaXRlbS5pc0F2YWlsYWJsZSA9PSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiZmEtY2hlY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImZhLXRpbWVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tdmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb3c6IFwiMVwiLCBjb2w6IFwiMFwiLCB0ZXh0OiBcIkxvY2F0aW9uOlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLXZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLml0ZW0ubG9jYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi12YWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIyXCIsIGNvbDogXCIwXCIsIHRleHQ6IFwiQWdlOlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLXZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjJcIiwgY29sOiBcIjFcIiwgdGV4dDogX3ZtLml0ZW0uYWdlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLXZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjNcIiwgY29sOiBcIjBcIiwgdGV4dDogXCJHZW5kZXI6IFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLXZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjNcIiwgY29sOiBcIjFcIiwgdGV4dDogX3ZtLml0ZW0uZ2VuZGVyIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLXZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjRcIiwgY29sOiBcIjBcIiwgdGV4dDogXCJCcmVlZCBHcm91cDpcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi12YWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiNFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5pdGVtLmJyZWVkX2dyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tdmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlByaW1hcnkgQnJlZWQ6XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi12YWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5pdGVtLnByaW1hcnlfYnJlZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvbi12YWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCI2XCIsIGNvbDogXCIwXCIsIHRleHQ6IFwiQW5pbWFsIFNpemU6XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tdmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uaXRlbS5hbmltYWxfc2l6ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uLXZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCI3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJQcmltYXJ5IENvbG9yOlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb24tdmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uaXRlbS5wcmltYXJ5X2NvbG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJTdGFja0xheW91dFwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwibWFpblwiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb250ZW50XCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2FyZC1pbWdcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsIHNyYzogX3ZtLml0ZW0uY292ZXIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIHRhcDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbkNsaWNrQnV0dG9uKClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgIGNvbHVtbnM6IFwiYXV0bywqXCIsXG4gICAgICAgICAgICAgICAgcm93czogXCJhdXRvLGF1dG9cIixcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIHRhcDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uQ2xpY2tCdXR0b24oKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgY2F0ZWdvcnktaWNvblwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uX2YoXCJmb250aWNvblwiKShfdm0uY2F0ZWdvcnlJY29uKSxcbiAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgcm93U3BhbjogXCIyXCIsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IF92bS5pdGVtLmNhdGVnb3J5VGFnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgaXRlbS1uYW1lXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgdGV4dHdyYXA6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5pdGVtLm5hbWUgKyBcIiwgXCIgKyBfdm0uaXRlbS5hZ2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICByb3c6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICByb3dzOiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uczogXCJhdXRvLGF1dG8sYXV0b1wiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaXRlbS1jYXRlZ29yeVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0d3JhcDogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiYm90dG9tXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLml0ZW0uY2F0ZWdvcnlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFwiU3RhY2tMYXlvdXRcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGluZVwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgd2lkdGg6IFwiMTAwJVwiLCBtYXJnaW5Ub3A6IFwiNVwiIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCI1XCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgIHJvdzogXCIzXCIsXG4gICAgICAgICAgICAgICAgY29sdW1uczogXCIqLCBhdXRvLCBhdXRvXCIsXG4gICAgICAgICAgICAgICAgcm93czogXCJhdXRvXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sOiBcIjBcIiwgcm93czogXCJhdXRvXCIsIGNvbHVtbnM6IFwiYXV0byxhdXRvXCIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIHRhcDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbkNsaWNrQnV0dG9uKClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHJlZjogXCJpbmZvXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpa2UtaWNvbiBmYVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uX2YoXCJmb250aWNvblwiKShcImZhLWluZm8tY2lyY2xlXCIpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OlxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLml0ZW0uYnJlZWRfZ3JvdXAgKyBcIiAtIFwiICsgX3ZtLml0ZW0ucHJpbWFyeV9icmVlZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICByb3dzOiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uczogXCJhdXRvLGF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMTVcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLnRvZ2dsZUhlYXJ0IH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICByZWY6IFwiZmF2b3JpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlrZS1pY29uICBmYVwiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogW192bS5pdGVtLmlzRmF2b3JpdGUgPyBcImhlYXJ0LWFjdGl2ZVwiIDogXCJkZWZhdWx0XCJdLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uX2YoXCJmb250aWNvblwiKShcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5pdGVtLmlzRmF2b3JpdGUgPyBcImZhLWhlYXJ0XCIgOiBcImZhLWhlYXJ0LW9cIlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbDogXCIxXCIsIHJvdzogXCIwXCIsIHRleHQ6IFwiRmF2b3JpdGVcIiB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBjb2w6IFwiMlwiLCBvcmllbnRhdGlvbjogXCJob3Jpem9udGFsXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICByZWY6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpa2UtaWNvbiBsYXlvdXQgZmFcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLl9mKFwiZm9udGljb25cIikoXCJmYS1zaGFyZS1zcXVhcmUtb1wiKSB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJTaGFyZVwiIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXCJTdGFja0xheW91dFwiLCB7IHN0YXRpY0NsYXNzOiBcImxpbmVCcmVha1wiLCBhdHRyczogeyB3aWR0aDogXCIxMDAlXCIgfSB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIkdyaWRMYXlvdXRcIixcbiAgICB7IGF0dHJzOiB7IHJvd3M6IFwiKlwiLCBjb2x1bW5zOiBcIipcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgaGVpZ2h0OiBcIjE1MFwiLFxuICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMTBcIixcbiAgICAgICAgICBzdHJldGNoOiBcImFzcGVjdEZpbGxcIixcbiAgICAgICAgICBzcmM6IF92bS5pdGVtLmNvdmVyXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIC8+XFxuICAgIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgeyBhdHRyczogeyB2ZXJ0aWNhbEFsaWdubWVudDogXCJib3R0b21cIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYmFubmVyMlwiLCBhdHRyczogeyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzQ4OWU5ZTllXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjYXRlZ29yeS1uYW1lICBtLWItMTAgbS10LTEwXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5pdGVtLmNhdGVnb3J5ICsgXCIgKFwiICsgX3ZtLml0ZW0uY291bnQgKyBcIilcIixcbiAgICAgICAgICAgICAgICAgIHRleHR3cmFwOiBcInRydWVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICBbXG4gICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1hZ2VcIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICBzcmM6IF92bS5zcmMsXG4gICAgICAgICAgc3RyZXRjaDogXCJhc3BlY3RGaXRcIixcbiAgICAgICAgICBoZWlnaHQ6IFwiMTEwXCIsXG4gICAgICAgICAgXCJpb3M6aGVpZ2h0XCI6IFwiMTIwXCJcbiAgICAgICAgfSxcbiAgICAgICAgb246IHsgdGFwOiBfdm0uYWN0aW9uIH1cbiAgICAgIH0pLFxuICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b25cIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJib3R0b21cIixcbiAgICAgICAgICB0ZXh0OiBfdm0uaWNvbiArIFwiIFwiICsgX3ZtLnRpdGxlXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7IHRhcDogX3ZtLmFjdGlvbiB9XG4gICAgICB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgW1xuICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b25cIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICB0ZXh0OiBfdm0udGl0bGUgKyBcIiBcIiArIF92bS5pY29uICsgXCIgXCJcbiAgICAgICAgfSxcbiAgICAgICAgb246IHsgdGFwOiBfdm0uYWN0aW9uIH1cbiAgICAgIH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwicGFnZVwiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiQWN0aW9uQmFyXCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYWN0aW9uLWJhclwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIk5hdmlnYXRpb25CdXR0b25cIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgXCJhbmRyb2lkLnN5c3RlbUljb25cIjogXCJpY19tZW51X2JhY2tcIiB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRuYXZpZ2F0ZUJhY2soKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhY3Rpb24tYmFyLXRpdGxlXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICB0ZXh0OiBfdm0uQW5pbWFsQ2VudGVyLm5hbWUsXG4gICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCI+XFxuICAgIFwiKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiU2Nyb2xsVmlld1wiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFuaW0tY292ZXIgbS1iLTE1XCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLkFuaW1hbENlbnRlci5pbWFnZVVSTCxcbiAgICAgICAgICAgICAgICAgIHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjAwXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoci1saWdodCBtLXQtMTUgbS1iLTE1XCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjFcIiB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHJvd3M6IFwiKiwgKiwgKiwgYXV0b1wiLCBjb2x1bW5zOiBcImF1dG8sKlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYW5pbS1jb250ZW50MSBwLWwtMTUgcC1iLTEwIG0tci0yMFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICBzcmM6IFwifi9hc3NldHMvaW1hZ2VzL2FjaG91c2UucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3RyZXRjaDogXCJhc3BlY3RGaXRcIixcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNDBcIixcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI0MFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxvYWRNb2RlOiBcImFzeW5jXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjNcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYW5pbS1jb250ZW50MSB0ZXh0IHAtYi0xMCBmb250LXdlaWdodC1ib2xkIHRpdGxlIHN0YWNrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwOiBcInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJGb3JtYXR0ZWRTdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLkFuaW1hbENlbnRlci5uYW1lICsgXCIgQW5pbWFsIENhcmUgQ2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhbmltLWNvbnRlbnQyIHAtbC0xNSBwLWItMTAgbS1yLTIwXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvbG9jYXRpb25pY29uLnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjQwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiNDBcIixcbiAgICAgICAgICAgICAgICAgICAgICBsb2FkTW9kZTogXCJhc3luY1wiLFxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIzXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYW5pbS1jb250ZW50MiBwLWItMTAgc3RhY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5vbkFkZHJlc3NUYXAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIHRleHQtcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5BbmltYWxDZW50ZXIuYWRkcmVzcyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhbmltLWNvbnRlbnQzIHAtbC0xNSBwLWItMTAgbS1yLTIwXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjJcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvcGhvbmVpY29uLnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjQwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiNDBcIixcbiAgICAgICAgICAgICAgICAgICAgICBsb2FkTW9kZTogXCJhc3luY1wiLFxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIzXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYW5pbS1jb250ZW50MyBmYSB0ZXh0LXByaW1hcnkgcC1iLTEwIHN0YWNrXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjJcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5BbmltYWxDZW50ZXIucGhvbmUsXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjVcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5vblBob25lVGFwIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFuaW0tY29udGVudDQgcC1sLTE1IHAtYi0xMCBtLXItMjBcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiM1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9ob3Vyc2ljb24ucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3RyZXRjaDogXCJhc3BlY3RGaXRcIixcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNDBcIixcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI0MFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxvYWRNb2RlOiBcImFzeW5jXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjNcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFuaW0tY29udGVudDQgc3RhY2staG91cnNcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zOiBcIiosICpcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M6IFwiYXV0bywgYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjVcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaG91cnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5BbmltYWxDZW50ZXIuYXZhaWxhYmlsaXR5LndlZWtkYXlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhvdXJzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uQW5pbWFsQ2VudGVyLmF2YWlsYWJpbGl0eS53ZWVrZGF5aG91cnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwOiBcInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaG91cnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5BbmltYWxDZW50ZXIuYXZhaWxhYmlsaXR5LndlZWtlbmRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhvdXJzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uQW5pbWFsQ2VudGVyLmF2YWlsYWJpbGl0eS53ZWVrZW5kaG91cnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwOiBcInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJTdGFja0xheW91dFwiLFxuICAgIHsgYXR0cnM6IHsgb3JpZW50YXRpb246IFwidmVydGljYWxcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiTGFiZWxcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgXCJob21lcGFnZS1ibHVlIHRleHQtcHJpbWFyeSBsaXN0LWdyb3VwLWl0ZW0tdGV4dCBmb250LXdlaWdodC1ib2xkXCIsXG4gICAgICAgICAgYXR0cnM6IHsgdGV4dFdyYXA6IFwidHJ1ZVwiIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJGb3JtYXR0ZWRTdHJpbmdcIixcbiAgICAgICAgICAgIFtfYyhcIlNwYW5cIiwgeyBhdHRyczogeyB0ZXh0OiBfdm0uaXRlbS5xdWVyeSB9IH0pXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiLmZhcV9hbnN3ZXIgLmxpc3QtZ3JvdXAtaXRlbS1jb250ZW50XCIsXG4gICAgICAgICAgYXR0cnM6IHsgdGV4dFdyYXA6IFwidHJ1ZVwiIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJGb3JtYXR0ZWRTdHJpbmdcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHsgYXR0cnM6IHsgXCJ0ZXh0LmRlY29kZVwiOiBcIiYjOTtcIiB9IH0pLFxuICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwgeyBhdHRyczogeyB0ZXh0OiBfdm0uaXRlbS5hbnN3ZXIgfSB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJwYWdlXCIsXG4gICAge1xuICAgICAgYXR0cnM6IHsgYWN0aW9uQmFySGlkZGVuOiBcImZhbHNlXCIsIGJhY2tncm91bmRTcGFuVW5kZXJTdGF0dXNCYXI6IFwidHJ1ZVwiIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIkFjdGlvbkJhclwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImFjdGlvbmJhciBuYXZUYWJcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJOYXZpZ2F0aW9uQnV0dG9uXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IFwiYW5kcm9pZC5zeXN0ZW1JY29uXCI6IFwiaWNfbWVudV9iYWNrXCIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIHRhcDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kbmF2aWdhdGVCYWNrKClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgZm9udFNpemU6IFwiMThcIiwgdGV4dDogXCJBbmltYWxzIGZvciBBZG9wdGlvblwiIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHJvd3M6IFwiYXV0byxhdXRvLCpcIiwgY29sdW1uczogXCJhdXRvXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmVmOiBcIm5hdlRhYlwiLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXZUYWJcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICByb3c6IFwiMVwiLFxuICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcInRvcFwiLFxuICAgICAgICAgICAgICAgIGhlaWdodDogXCI1MFwiLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICByb3dzOiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICBjb2x1bW5zOiBcImF1dG8sYXV0b1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhYnZpZXdcIixcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uc2VsZWN0ZWRUYWJ2aWV3ID09IDAgPyBcImFjdGl2ZVwiIDogXCJcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHJvd3M6IFwiKixhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbHM6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI1MCVcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLmFkb3B0aW9uTGlzdCB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWRUYWJ2aWV3ID09IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkVGFidmlldz09MFwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBuYXZJY29uXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uX2YoXCJmb250aWNvblwiKShcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZFRhYnZpZXcgPT0gMCA/IFwiZmEtcGF3XCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWJ2aWV3VGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnNlbGVjdGVkVGFidmlldyA9PSAwID8gXCJhY3RpdmVcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiQW5pbWFsc1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhYnZpZXdcIixcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uc2VsZWN0ZWRUYWJ2aWV3ID09IDEgPyBcImFjdGl2ZVwiIDogXCJcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHJvd3M6IFwiKixhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbHM6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI1MCVcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLnNob3dDYXRlZ29yeSB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWRUYWJ2aWV3ID09IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkVGFidmlldz09MVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBuYXZJY29uXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uX2YoXCJmb250aWNvblwiKShcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZFRhYnZpZXcgPT0gMSA/IFwiZmEtZmlsdGVyXCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWJ2aWV3VGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnNlbGVjdGVkVGFidmlldyA9PSAxID8gXCJhY3RpdmVcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkZpbHRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlbGVjdGVkVGFidmlldyA9PSAwLFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWxlY3RlZFRhYnZpZXcgPT0gMFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBhdHRyczogeyByb3c6IFwiMlwiLCB3aWR0aDogXCIxMDAlXCIsIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiTGlzdFZpZXdcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IF92bS5pbmRleCxcbiAgICAgICAgICAgICAgICAgIHJlZjogXCJsaXN0dmlld1wiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgc2VwYXJhdG9yQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS5pdGVtcyxcbiAgICAgICAgICAgICAgICAgICAgXCIrYWxpYXNcIjogXCJpdGVtXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi10ZW1wbGF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gcmVmLml0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkb2RkID0gcmVmLiRvZGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwiaXRlbVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaXRlbTogaXRlbSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja2VkOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zaG93SXRlbShpdGVtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWRUYWJ2aWV3ID09IDEsXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkVGFidmlldyA9PSAxXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIyXCIsIHdpZHRoOiBcIjEwMCVcIiwgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJSYWRMaXN0Vmlld1wiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogX3ZtLmluZGV4LFxuICAgICAgICAgICAgICAgICAgcmVmOiBcImxpc3R2aWV3XCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBzZXBhcmF0b3JDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICAgICAgICAgICAgICBpdGVtczogX3ZtLml0ZW1zQ2F0ZWdvcnksXG4gICAgICAgICAgICAgICAgICAgIFwiK2FsaWFzXCI6IFwiaXRlbVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInYtdGVtcGxhdGVcIiwge1xuICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHJlZi5pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkaW5kZXggPSByZWYuJGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkZXZlbiA9IHJlZi4kZXZlblxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcIkNhdGVnb3J5XCIsIHsgYXR0cnM6IHsgaXRlbTogaXRlbSB9IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJwYWdlXCIgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJBY3Rpb25CYXJcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiTmF2aWdhdGlvbkJ1dHRvblwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBcImFuZHJvaWQuc3lzdGVtSWNvblwiOiBcImljX21lbnVfYmFja1wiIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICB0YXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJG5hdmlnYXRlQmFjaygpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiRkFRXCIsIGZvbnRTaXplOiBcIjIwXCIsIHZlcnRpY2FsQWxpZ25tZW50OiBcImNlbnRlclwiIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiU2VhcmNoQmFyXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IGhpbnQ6IFwiRW50ZXIgdGV4dC4uLlwiLCB0ZXh0OiBfdm0uc2VhcmNoIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBzdWJtaXQ6IF92bS5jaGVja0ZhcSxcbiAgICAgICAgICAgICAgdGV4dENoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLnNlYXJjaCA9ICRldmVudC52YWx1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlJhZExpc3RWaWV3XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJlZjogXCJsaXN0Vmlld1wiLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaXN0LWdyb3VwXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgcHVsbFRvUmVmcmVzaDogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgaXRlbXM6IF92bS5nZXRTZWFyY2hSZXN1bHRzKF92bS5zZWFyY2gpLFxuICAgICAgICAgICAgICAgIFwiK2FsaWFzXCI6IFwiZmFxXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBwdWxsVG9SZWZyZXNoSW5pdGlhdGVkOiBfdm0ub25QdWxsVG9SZWZyZXNoSW5pdGlhdGVkLFxuICAgICAgICAgICAgICAgIGl0ZW1UYXA6IF92bS5vbkl0ZW1UYXBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ2LXRlbXBsYXRlXCIsIHtcbiAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBmYXEgPSByZWYuZmFxXG4gICAgICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJGV2ZW4gPSByZWYuJGV2ZW5cbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwiRmFxSW5mb1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaXN0LWdyb3VwLWl0ZW0tdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaXRlbTogZmFxIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIkFjdGlvbkJhclwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIkFjdGlvbl9CYXJcIiwgYXR0cnM6IHsgXCJpb3MucG9zaXRpb25cIjogXCJsZWZ0XCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICB0ZXh0OiBcIldlbGNvbWUgdG8gRG93bmV5XCIsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiBcIjIwXCIsXG4gICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImNlbnRlclwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJBY3Rpb25JdGVtXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIFwiaW9zLnN5c3RlbUljb25cIjogXCIxMlwiLFxuICAgICAgICAgICAgICBcImlvcy5wb3NpdGlvblwiOiBcInJpZ2h0XCIsXG4gICAgICAgICAgICAgIFwiYW5kcm9pZC5zeXN0ZW1JY29uXCI6IFwiaWNfbWVudV9zZWFyY2hcIixcbiAgICAgICAgICAgICAgXCJhbmRyb2lkLnBvc2l0aW9uXCI6IFwiYWN0aW9uQmFyXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjogeyB0YXA6IF92bS50b0ZhcSB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgIHsgYXR0cnM6IHsgYmFja2dyb3VuZENvbG9yOiBcIiNiMjFhODJcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsYXlvdXQgY292ZXJcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgY29sdW1uczogXCIqLCosKlwiLCByb3dzOiBcIiosKiwqXCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJDYXRlZ29yeUJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgaG9tZXBhZ2UtYmx1ZSBIb21lQnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjVcIixcbiAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgc3JjOiBcIn4vYXNzZXRzL2ltYWdlcy9GaW5hbCBMb2dvLnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgaWNvbjogX3ZtLl9mKFwiZm9udGljb25cIikoXCJmYS1tYXAtbWFya2VyXCIpLFxuICAgICAgICAgICAgICAgICAgdGl0bGU6IF92bS50aXRsZXNbNF0sXG4gICAgICAgICAgICAgICAgICBhY3Rpb246IF92bS50b1FSU2Nhbm5lcixcbiAgICAgICAgICAgICAgICAgIHRleHRXcmFwOiBcInRydWVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiQ2F0ZWdvcnlCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGhvbWVwYWdlLWJsdWUgSG9tZUJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCI1XCIsXG4gICAgICAgICAgICAgICAgICByb3c6IFwiMlwiLFxuICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgIHNyYzogXCJ+L2Fzc2V0cy9pbWFnZXMvaG91cnNpY29uLnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgaWNvbjogX3ZtLl9mKFwiZm9udGljb25cIikoXCJmYS1tYXAtbWFya2VyXCIpLFxuICAgICAgICAgICAgICAgICAgdGl0bGU6IF92bS50aXRsZXNbNF0sXG4gICAgICAgICAgICAgICAgICBhY3Rpb246IF92bS50b1FSU2Nhbm5lcixcbiAgICAgICAgICAgICAgICAgIHRleHRXcmFwOiBcInRydWVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwicGFnZVwiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiQWN0aW9uQmFyXCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYWN0aW9uLWJhclwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIk5hdmlnYXRpb25CdXR0b25cIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgXCJhbmRyb2lkLnN5c3RlbUljb25cIjogXCJpY19tZW51X2JhY2tcIiB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRuYXZpZ2F0ZUJhY2soKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICB0ZXh0OiBcIkFuaW1hbCBDYXJlIENlbnRlcnNcIixcbiAgICAgICAgICAgICAgZm9udFNpemU6IFwiMjBcIixcbiAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiSWNvbkJ1dHRvblwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBncHMtYnV0dG9uXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBpY29uOiBfdm0uX2YoXCJmb250aWNvblwiKShcImZhLXNvcnQtYW1vdW50LWFzY1wiKSxcbiAgICAgICAgICAgICAgdGl0bGU6IFwiR2V0IENsb3Nlc3QgQW5pbWFsIENlbnRlclwiLFxuICAgICAgICAgICAgICBhY3Rpb246IF92bS5idXR0b25HZXREaXN0YW5jZVRvQ2FyZUNlbnRlcnNUYXBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiUmFkTGlzdFZpZXdcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlzdC1ncm91cFwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHJvdzogXCIyXCIsXG4gICAgICAgICAgICAgICAgaXRlbXM6IF92bS5jZW50ZXJMb2NhdGlvbnMsXG4gICAgICAgICAgICAgICAgXCIrYWxpYXNcIjogXCJsb2NhdGlvblwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9uOiB7IGl0ZW1UYXA6IF92bS5vbkl0ZW1UYXAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ2LXRlbXBsYXRlXCIsIHtcbiAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBsb2NhdGlvbiA9IHJlZi5sb2NhdGlvblxuICAgICAgICAgICAgICAgICAgICAgIHZhciAkaW5kZXggPSByZWYuJGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgICAgICAgICAgdmFyICRvZGQgPSByZWYuJG9kZFxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaXN0LWdyb3VwLWl0ZW0tY29udGVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb3dzOiBcIiosICosICosICpcIiwgY29sdW1uczogXCIqLCAqXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhvbWVwYWdlLWJsdWUgdGV4dC1wcmltYXJ5IGxpc3QtZ3JvdXAtaXRlbS10ZXh0IGZvbnQtd2VpZ2h0LWJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBsb2NhdGlvbi5uYW1lIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaXN0LWdyb3VwLWl0ZW0tdGV4dCBtLXItNSB0ZXh0LXNlY29uZGFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sOiBcIjFcIiwgaG9yaXpvbnRhbEFsaWdubWVudDogXCJyaWdodFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiflwiICsgbG9jYXRpb24uZGlzdGFuY2UgKyBcIm1pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhyLWxpZ2h0IG0tdC01IG0tYi01XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjFcIiwgY29sU3BhbjogXCIyXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibS1yLTIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IGxvY2F0aW9uLmltYWdlVVJMLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyZXRjaDogXCJhc3BlY3RGaXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRNb2RlOiBcImFzeW5jXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlzdC1ncm91cC1pdGVtLXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgcm93czogXCIqLCAqXCIsIGNvbHVtbnM6IFwiKiwgNCpcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicC1iLTEwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwOiBcInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiaW9zLmZvbnRGYW1pbHlcIjogXCJzeXN0ZW1cIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5fZihcImZvbnRpY29uXCIpKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmYS1tYXAtbWFya2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicC1iLTEwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwOiBcInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiaW9zLmZvbnRGYW1pbHlcIjogXCJzeXN0ZW1cIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogbG9jYXRpb24uYWRkcmVzcyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInAtYi0xMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJGb3JtYXR0ZWRTdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImlvcy5mb250RmFtaWx5XCI6IFwic3lzdGVtXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5fZihcImZvbnRpY29uXCIpKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmYS1waG9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInAtYi0xMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJGb3JtYXR0ZWRTdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImlvcy5mb250RmFtaWx5XCI6IFwic3lzdGVtXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogbG9jYXRpb24ucGhvbmUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwLWItMTBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvcm1hdHRlZFN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiaW9zLmZvbnRGYW1pbHlcIjogXCJzeXN0ZW1cIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJTcGFuXCIsIHsgYXR0cnM6IHsgdGV4dDogXCJcIiB9IH0pXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwicGFnZVwiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiQWN0aW9uQmFyXCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIk5hdmlnYXRpb25CdXR0b25cIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgXCJhbmRyb2lkLnN5c3RlbUljb25cIjogXCJpY19tZW51X2JhY2tcIiB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRuYXZpZ2F0ZUJhY2soKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICB0ZXh0OiBcIlNlcnZpY2UgUmVxdWVzdFwiLFxuICAgICAgICAgICAgICBmb250U2l6ZTogXCIyMFwiLFxuICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImhvbWUtcGFuZWxcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJXZWJWaWV3XCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGhlaWdodDogXCI4MTkycHhcIixcbiAgICAgICAgICAgICAgc3JjOiBcImh0dHA6Ly9hbmltYWxjYXJlLmxhY291bnR5Lmdvdi9zZXJ2aWNlLXJlcXVlc3QvXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIFtcbiAgICAgIF9jKFwiQWN0aW9uQmFyXCIsIHsgYXR0cnM6IHsgdGl0bGU6IF92bS5hY3Rpb25CYXIgfSB9KSxcbiAgICAgIF9jKFxuICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIkxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwibXNnXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICBcIldlIGFwb2xvZ2l6ZS4gVGhlIHF1ZXN0aW9uIHlvdSBhcmUgc2VhcmNoaW5nIGZvciBoYXMgbm90IGJlZW4gYW5zd2VyZWQgeWV0LiBUYWtlIHRoaXMgdGlja2V0IGlmIHlvdSB3YW50IHRvIHN1Ym1pdCB0aGlzIHF1ZXN0aW9uIGFuZCBnZXQgYW4gYW5zd2VyIGZyb20gdGhlIGZyb250IGRlc2suXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyBjb2x1bW5zOiBcIiosKlwiLCByb3dzOiBcIiosKiwqXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIkNhdGVnb3J5QnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICB0aXRsZTogX3ZtLnRpdGxlc1swXSxcbiAgICAgICAgICAgICAgICAgIGFjdGlvbjogX3ZtLnRvRmFxLFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZjAwMDBcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiQ2F0ZWdvcnlCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBfdm0udGl0bGVzWzFdLFxuICAgICAgICAgICAgICAgICAgYWN0aW9uOiBfdm0uc3VibWl0VGlja2V0LFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiM2QUZGNUFcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIFtcbiAgICAgIF9jKFwiQWN0aW9uQmFyXCIsIHsgYXR0cnM6IHsgdGl0bGU6IFwiVGlja2V0IFByb2Nlc3NpbmdcIiB9IH0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiTGFiZWxcIiwgeyBhdHRyczogeyB0ZXh0OiBcIlBob25lIG51bWJlcjpcIiB9IH0pLFxuICAgICAgICAgIF9jKFwiVGV4dFZpZXdcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLnBob25lIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICB0ZXh0Q2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0ucGhvbmUgPSAkZXZlbnQudmFsdWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiTGFiZWxcIiwgeyBhdHRyczogeyB0ZXh0OiBcIkZpcnN0IGFuZCBsYXN0IG5hbWU6XCIgfSB9KSxcbiAgICAgICAgICBfYyhcIlRleHRWaWV3XCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5uYW1lIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICB0ZXh0Q2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0ubmFtZSA9ICRldmVudC52YWx1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJMYWJlbFwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiV2hhdCBhcmUgeW91IGhlcmUgZm9yP1wiIH0gfSksXG4gICAgICAgICAgX2MoXCJUZXh0Vmlld1wiLCB7XG4gICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0ucXVlcnkgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIHRleHRDaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5xdWVyeSA9ICRldmVudC52YWx1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJTdWJtaXQgVGlja2V0XCIgfSxcbiAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLnN1Ym1pdFRpY2tldCB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICBbXG4gICAgICBfYyhcIkFjdGlvbkJhclwiLCB7IGF0dHJzOiB7IHRpdGxlOiBcIlRpY2tldCBSZWFzb25cIiB9IH0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICB7IGF0dHJzOiB7IGNvbHVtbnM6IFwiKlwiLCByb3dzOiBcImF1dG8sIGF1dG8sIGF1dG8sIGF1dG9cIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiTGFiZWxcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXNnXCIsIGF0dHJzOiB7IHRleHRXcmFwOiBcInRydWVcIiwgcm93OiBcIjBcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIllvdSBhcmUgYXQgdGhlIFwiICtcbiAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uc2l0ZSkgK1xuICAgICAgICAgICAgICAgICAgXCIgQW5pbWFsIENhcmUgYW5kIENvbnRyb2wgQ2VudGVyLlwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFwiTGlzdFBpY2tlclwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICByb3c6IFwiMVwiLFxuICAgICAgICAgICAgICBpdGVtczogX3ZtLmNob2ljZXMsXG4gICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXg6IFwiMFwiLFxuICAgICAgICAgICAgICBzZWxlY3RlZEluZGV4OiBfdm0uc2VsZWN0ZWRJbmRleFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXhDaGFuZ2U6IFtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZEluZGV4ID0gJGV2ZW50LnZhbHVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRJbmRleENoYW5nZWRcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5pc1RpY2tldFxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyByb3c6IFwiM1wiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXNnXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCIgICBUZWxsIHVzIGFib3V0IHdoYXQgeW91IHdvdWxkIGxpa2UgdG8ga25vd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwOiBcInRydWVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiVGV4dFZpZXdcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0ub3RoZXJUZXh0IH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dENoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ub3RoZXJUZXh0ID0gJGV2ZW50LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJIb21lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0udG9Ib21lIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkNyZWF0ZSBUaWNrZXRcIiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5jcmVhdGVUaWNrZXQgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLnNjc3NcIjogXCIuL2FwcC5zY3NzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vIHN5bmMgXlxcXFwuXFxcXC9hcHBcXFxcLihjc3N8c2Nzc3xsZXNzfHNhc3MpJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9BbmltYWxDZW50ZXIuc2Nzc1wiOiBcIi4vQW5pbWFsQ2VudGVyLnNjc3NcIixcblx0XCIuL2FwcC5zY3NzXCI6IFwiLi9hcHAuc2Nzc1wiLFxuXHRcIi4vZm9udHMvZm9udC1hd2Vzb21lLmNzc1wiOiBcIi4vZm9udHMvZm9udC1hd2Vzb21lLmNzc1wiLFxuXHRcIi4vZm9udHMvaW9uaWNvbnMuY3NzXCI6IFwiLi9mb250cy9pb25pY29ucy5jc3NcIixcblx0XCIuL21haW4uanNcIjogXCIuL21haW4uanNcIixcblx0XCIuL21vZGVscy9BbmltYWwuanNcIjogXCIuL21vZGVscy9BbmltYWwuanNcIixcblx0XCIuL21vZGVscy9GYXEuanNcIjogXCIuL21vZGVscy9GYXEuanNcIixcblx0XCIuL21vZGVscy9UaWNrZXQuanNcIjogXCIuL21vZGVscy9UaWNrZXQuanNcIixcblx0XCIuL3NlcnZpY2VzL0Fkb3B0aW9uU2VydmljZS5qc1wiOiBcIi4vc2VydmljZXMvQWRvcHRpb25TZXJ2aWNlLmpzXCIsXG5cdFwiLi9zZXJ2aWNlcy9GYWtlQWRvcHRpb25TZXJ2aWNlLmpzXCI6IFwiLi9zZXJ2aWNlcy9GYWtlQWRvcHRpb25TZXJ2aWNlLmpzXCIsXG5cdFwiLi9zZXJ2aWNlcy9GYWtlRmFxU2VydmljZS5qc1wiOiBcIi4vc2VydmljZXMvRmFrZUZhcVNlcnZpY2UuanNcIixcblx0XCIuL3NlcnZpY2VzL0Zha2VUaWNrZXRTZXJ2aWNlLmpzXCI6IFwiLi9zZXJ2aWNlcy9GYWtlVGlja2V0U2VydmljZS5qc1wiLFxuXHRcIi4vc2VydmljZXMvRmFxU2VydmljZS5qc1wiOiBcIi4vc2VydmljZXMvRmFxU2VydmljZS5qc1wiLFxuXHRcIi4vc2VydmljZXMvVGlja2V0U2VydmljZS5qc1wiOiBcIi4vc2VydmljZXMvVGlja2V0U2VydmljZS5qc1wiLFxuXHRcIi4vc3RvcmUuanNcIjogXCIuL3N0b3JlLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vIHN5bmMgcmVjdXJzaXZlICg/PCFcXFxcYkFwcF9SZXNvdXJjZXNcXFxcYi4qKVxcXFwuKHhtbHxjc3N8anN8KD88IVxcXFwuZFxcXFwuKXRzfCg/PCFcXFxcYl9bXFxcXHctXSpcXFxcLilzY3NzKSRcIjsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcclxcbiAqIENvbnZlbmllbnQgc2luZ2xlIGltcG9ydCBmb3IgbGlnaHQgdmFyaWFibGVzXFxyXFxuICogSW5jbHVkZXMgYmFzZSB2YXJpYWJsZXMgd2l0aCBsaWdodCBvdmVycmlkZXNcXHJcXG4gKiovXFxuLyoqXFxyXFxuICogTGlnaHQgdmFyaWFibGUgb3ZlcnJpZGVzXFxyXFxuICoqL1xcbi8qKlxcbiAqIFRoZW1lIHZhcmlhYmxlcyBvdmVycmlkZXNcXG4qKi9cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICA7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vQW5pbWFsQ2VudGVyLnNjc3MnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyoqXFxyXFxuICogQ29udmVuaWVudCBzaW5nbGUgaW1wb3J0IGZvciBsaWdodCB2YXJpYWJsZXNcXHJcXG4gKiBJbmNsdWRlcyBiYXNlIHZhcmlhYmxlcyB3aXRoIGxpZ2h0IG92ZXJyaWRlc1xcclxcbiAqKi9cXG4vKipcXHJcXG4gKiBMaWdodCB2YXJpYWJsZSBvdmVycmlkZXNcXHJcXG4gKiovXFxuLyoqXFxuICogVGhlbWUgdmFyaWFibGVzIG92ZXJyaWRlc1xcbioqL1xcbi8qKlxcclxcbiAqIENvbG9yIGNsYXNzZXNcXHJcXG4gKiBUaGUgZm9sbG93aW5nIGNyZWF0ZXMgdGhpcyBwYXR0ZXJuOlxcclxcbiAqIC5jLWdyZXl7Y29sb3I6I2UwZTBlMH0uYy1iZy1ncmV5e2JhY2tncm91bmQtY29sb3I6I2UwZTBlMH1cXHJcXG4qKi9cXG4uYy13aGl0ZSB7XFxuICBjb2xvcjogI2ZmZjsgfVxcblxcbi5jLWJnLXdoaXRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cXG5cXG4uYy1ibGFjayB7XFxuICBjb2xvcjogIzAwMDsgfVxcblxcbi5jLWJnLWJsYWNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7IH1cXG5cXG4uYy1hcXVhIHtcXG4gIGNvbG9yOiAjMDBjYWFiOyB9XFxuXFxuLmMtYmctYXF1YSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjYWFiOyB9XFxuXFxuLmMtYmx1ZSB7XFxuICBjb2xvcjogIzNkNWFmZTsgfVxcblxcbi5jLWJnLWJsdWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNkNWFmZTsgfVxcblxcbi5jLWNoYXJjb2FsIHtcXG4gIGNvbG9yOiAjMzAzMDMwOyB9XFxuXFxuLmMtYmctY2hhcmNvYWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzAzMDsgfVxcblxcbi5jLWJyb3duIHtcXG4gIGNvbG9yOiAjNzk1NTQ4OyB9XFxuXFxuLmMtYmctYnJvd24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc5NTU0ODsgfVxcblxcbi5jLWZvcmVzdCB7XFxuICBjb2xvcjogIzAwNjk2ODsgfVxcblxcbi5jLWJnLWZvcmVzdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2OTY4OyB9XFxuXFxuLmMtZ3JleSB7XFxuICBjb2xvcjogI2UwZTBlMDsgfVxcblxcbi5jLWJnLWdyZXkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDsgfVxcblxcbi5jLWdyZXktbGlnaHQge1xcbiAgY29sb3I6ICNiYWJhYmE7IH1cXG5cXG4uYy1iZy1ncmV5LWxpZ2h0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiYWJhYmE7IH1cXG5cXG4uYy1ncmV5LWRhcmsge1xcbiAgY29sb3I6ICM1YzY4N2M7IH1cXG5cXG4uYy1iZy1ncmV5LWRhcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVjNjg3YzsgfVxcblxcbi5jLXB1cnBsZSB7XFxuICBjb2xvcjogIzgxMzBmZjsgfVxcblxcbi5jLWJnLXB1cnBsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODEzMGZmOyB9XFxuXFxuLmMtbGVtb24ge1xcbiAgY29sb3I6ICNmZmVhMDA7IH1cXG5cXG4uYy1iZy1sZW1vbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYTAwOyB9XFxuXFxuLmMtbGltZSB7XFxuICBjb2xvcjogI2FlZTQwNjsgfVxcblxcbi5jLWJnLWxpbWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FlZTQwNjsgfVxcblxcbi5jLW9yYW5nZSB7XFxuICBjb2xvcjogI2Y1N2MwMDsgfVxcblxcbi5jLWJnLW9yYW5nZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjU3YzAwOyB9XFxuXFxuLmMtcnVieSB7XFxuICBjb2xvcjogI2ZmMTc0NDsgfVxcblxcbi5jLWJnLXJ1Ynkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMTc0NDsgfVxcblxcbi5jLXNreSB7XFxuICBjb2xvcjogIzMwYmNmZjsgfVxcblxcbi5jLWJnLXNreSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzBiY2ZmOyB9XFxuXFxuLyogV2lkdGgvSGVpZ2h0ICovXFxuLnctZnVsbCB7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi53LTEwMCB7XFxuICB3aWR0aDogMTAwOyB9XFxuXFxuLmgtZnVsbCB7XFxuICBoZWlnaHQ6IDEwMCU7IH1cXG5cXG4uaC0xMDAge1xcbiAgaGVpZ2h0OiAxMDA7IH1cXG5cXG4vKipcXHJcXG4gKiBNYXJnaW4gYW5kIFBhZGRpbmdcXHJcXG4gKiBUaGUgZm9sbG93aW5nIGNyZWF0ZXMgdGhpcyBwYXR0ZXJuOlxcclxcbiAqIC5tLTB7bWFyZ2luOjB9Lm0tdC0we21hcmdpbi10b3A6MH0ubS1yLTB7bWFyZ2luLXJpZ2h0OjB9Lm0tYi0we21hcmdpbi1ib3R0b206MH0ubS1sLTB7bWFyZ2luLWxlZnQ6MH0ubS14LTB7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLWxlZnQ6MH0ubS15LTB7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MH1cXHJcXG4gKiBTYW1lIGZvciBQYWRkaW5nICh1c2luZyB0aGUgJ3AnIGFiYnJldmlhdGlvbilcXHJcXG4gKiBGcm9tIDAsIDIsIDUsIDEwLCAxNSwgMjAsIDI1LCAzMFxcclxcbioqL1xcbi5tLTAge1xcbiAgbWFyZ2luOiAwOyB9XFxuXFxuLm0tdC0wIHtcXG4gIG1hcmdpbi10b3A6IDA7IH1cXG5cXG4ubS1yLTAge1xcbiAgbWFyZ2luLXJpZ2h0OiAwOyB9XFxuXFxuLm0tYi0wIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7IH1cXG5cXG4ubS1sLTAge1xcbiAgbWFyZ2luLWxlZnQ6IDA7IH1cXG5cXG4ubS14LTAge1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgbWFyZ2luLWxlZnQ6IDA7IH1cXG5cXG4ubS15LTAge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDA7IH1cXG5cXG4ubS0yIHtcXG4gIG1hcmdpbjogMjsgfVxcblxcbi5tLXQtMiB7XFxuICBtYXJnaW4tdG9wOiAyOyB9XFxuXFxuLm0tci0yIHtcXG4gIG1hcmdpbi1yaWdodDogMjsgfVxcblxcbi5tLWItMiB7XFxuICBtYXJnaW4tYm90dG9tOiAyOyB9XFxuXFxuLm0tbC0yIHtcXG4gIG1hcmdpbi1sZWZ0OiAyOyB9XFxuXFxuLm0teC0yIHtcXG4gIG1hcmdpbi1yaWdodDogMjtcXG4gIG1hcmdpbi1sZWZ0OiAyOyB9XFxuXFxuLm0teS0yIHtcXG4gIG1hcmdpbi10b3A6IDI7XFxuICBtYXJnaW4tYm90dG9tOiAyOyB9XFxuXFxuLm0tNCB7XFxuICBtYXJnaW46IDQ7IH1cXG5cXG4ubS10LTQge1xcbiAgbWFyZ2luLXRvcDogNDsgfVxcblxcbi5tLXItNCB7XFxuICBtYXJnaW4tcmlnaHQ6IDQ7IH1cXG5cXG4ubS1iLTQge1xcbiAgbWFyZ2luLWJvdHRvbTogNDsgfVxcblxcbi5tLWwtNCB7XFxuICBtYXJnaW4tbGVmdDogNDsgfVxcblxcbi5tLXgtNCB7XFxuICBtYXJnaW4tcmlnaHQ6IDQ7XFxuICBtYXJnaW4tbGVmdDogNDsgfVxcblxcbi5tLXktNCB7XFxuICBtYXJnaW4tdG9wOiA0O1xcbiAgbWFyZ2luLWJvdHRvbTogNDsgfVxcblxcbi5tLTUge1xcbiAgbWFyZ2luOiA1OyB9XFxuXFxuLm0tdC01IHtcXG4gIG1hcmdpbi10b3A6IDU7IH1cXG5cXG4ubS1yLTUge1xcbiAgbWFyZ2luLXJpZ2h0OiA1OyB9XFxuXFxuLm0tYi01IHtcXG4gIG1hcmdpbi1ib3R0b206IDU7IH1cXG5cXG4ubS1sLTUge1xcbiAgbWFyZ2luLWxlZnQ6IDU7IH1cXG5cXG4ubS14LTUge1xcbiAgbWFyZ2luLXJpZ2h0OiA1O1xcbiAgbWFyZ2luLWxlZnQ6IDU7IH1cXG5cXG4ubS15LTUge1xcbiAgbWFyZ2luLXRvcDogNTtcXG4gIG1hcmdpbi1ib3R0b206IDU7IH1cXG5cXG4ubS04IHtcXG4gIG1hcmdpbjogODsgfVxcblxcbi5tLXQtOCB7XFxuICBtYXJnaW4tdG9wOiA4OyB9XFxuXFxuLm0tci04IHtcXG4gIG1hcmdpbi1yaWdodDogODsgfVxcblxcbi5tLWItOCB7XFxuICBtYXJnaW4tYm90dG9tOiA4OyB9XFxuXFxuLm0tbC04IHtcXG4gIG1hcmdpbi1sZWZ0OiA4OyB9XFxuXFxuLm0teC04IHtcXG4gIG1hcmdpbi1yaWdodDogODtcXG4gIG1hcmdpbi1sZWZ0OiA4OyB9XFxuXFxuLm0teS04IHtcXG4gIG1hcmdpbi10b3A6IDg7XFxuICBtYXJnaW4tYm90dG9tOiA4OyB9XFxuXFxuLm0tMTAge1xcbiAgbWFyZ2luOiAxMDsgfVxcblxcbi5tLXQtMTAge1xcbiAgbWFyZ2luLXRvcDogMTA7IH1cXG5cXG4ubS1yLTEwIHtcXG4gIG1hcmdpbi1yaWdodDogMTA7IH1cXG5cXG4ubS1iLTEwIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwOyB9XFxuXFxuLm0tbC0xMCB7XFxuICBtYXJnaW4tbGVmdDogMTA7IH1cXG5cXG4ubS14LTEwIHtcXG4gIG1hcmdpbi1yaWdodDogMTA7XFxuICBtYXJnaW4tbGVmdDogMTA7IH1cXG5cXG4ubS15LTEwIHtcXG4gIG1hcmdpbi10b3A6IDEwO1xcbiAgbWFyZ2luLWJvdHRvbTogMTA7IH1cXG5cXG4ubS0xMiB7XFxuICBtYXJnaW46IDEyOyB9XFxuXFxuLm0tdC0xMiB7XFxuICBtYXJnaW4tdG9wOiAxMjsgfVxcblxcbi5tLXItMTIge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMjsgfVxcblxcbi5tLWItMTIge1xcbiAgbWFyZ2luLWJvdHRvbTogMTI7IH1cXG5cXG4ubS1sLTEyIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMjsgfVxcblxcbi5tLXgtMTIge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMjtcXG4gIG1hcmdpbi1sZWZ0OiAxMjsgfVxcblxcbi5tLXktMTIge1xcbiAgbWFyZ2luLXRvcDogMTI7XFxuICBtYXJnaW4tYm90dG9tOiAxMjsgfVxcblxcbi5tLTE1IHtcXG4gIG1hcmdpbjogMTU7IH1cXG5cXG4ubS10LTE1IHtcXG4gIG1hcmdpbi10b3A6IDE1OyB9XFxuXFxuLm0tci0xNSB7XFxuICBtYXJnaW4tcmlnaHQ6IDE1OyB9XFxuXFxuLm0tYi0xNSB7XFxuICBtYXJnaW4tYm90dG9tOiAxNTsgfVxcblxcbi5tLWwtMTUge1xcbiAgbWFyZ2luLWxlZnQ6IDE1OyB9XFxuXFxuLm0teC0xNSB7XFxuICBtYXJnaW4tcmlnaHQ6IDE1O1xcbiAgbWFyZ2luLWxlZnQ6IDE1OyB9XFxuXFxuLm0teS0xNSB7XFxuICBtYXJnaW4tdG9wOiAxNTtcXG4gIG1hcmdpbi1ib3R0b206IDE1OyB9XFxuXFxuLm0tMTYge1xcbiAgbWFyZ2luOiAxNjsgfVxcblxcbi5tLXQtMTYge1xcbiAgbWFyZ2luLXRvcDogMTY7IH1cXG5cXG4ubS1yLTE2IHtcXG4gIG1hcmdpbi1yaWdodDogMTY7IH1cXG5cXG4ubS1iLTE2IHtcXG4gIG1hcmdpbi1ib3R0b206IDE2OyB9XFxuXFxuLm0tbC0xNiB7XFxuICBtYXJnaW4tbGVmdDogMTY7IH1cXG5cXG4ubS14LTE2IHtcXG4gIG1hcmdpbi1yaWdodDogMTY7XFxuICBtYXJnaW4tbGVmdDogMTY7IH1cXG5cXG4ubS15LTE2IHtcXG4gIG1hcmdpbi10b3A6IDE2O1xcbiAgbWFyZ2luLWJvdHRvbTogMTY7IH1cXG5cXG4ubS0yMCB7XFxuICBtYXJnaW46IDIwOyB9XFxuXFxuLm0tdC0yMCB7XFxuICBtYXJnaW4tdG9wOiAyMDsgfVxcblxcbi5tLXItMjAge1xcbiAgbWFyZ2luLXJpZ2h0OiAyMDsgfVxcblxcbi5tLWItMjAge1xcbiAgbWFyZ2luLWJvdHRvbTogMjA7IH1cXG5cXG4ubS1sLTIwIHtcXG4gIG1hcmdpbi1sZWZ0OiAyMDsgfVxcblxcbi5tLXgtMjAge1xcbiAgbWFyZ2luLXJpZ2h0OiAyMDtcXG4gIG1hcmdpbi1sZWZ0OiAyMDsgfVxcblxcbi5tLXktMjAge1xcbiAgbWFyZ2luLXRvcDogMjA7XFxuICBtYXJnaW4tYm90dG9tOiAyMDsgfVxcblxcbi5tLTI0IHtcXG4gIG1hcmdpbjogMjQ7IH1cXG5cXG4ubS10LTI0IHtcXG4gIG1hcmdpbi10b3A6IDI0OyB9XFxuXFxuLm0tci0yNCB7XFxuICBtYXJnaW4tcmlnaHQ6IDI0OyB9XFxuXFxuLm0tYi0yNCB7XFxuICBtYXJnaW4tYm90dG9tOiAyNDsgfVxcblxcbi5tLWwtMjQge1xcbiAgbWFyZ2luLWxlZnQ6IDI0OyB9XFxuXFxuLm0teC0yNCB7XFxuICBtYXJnaW4tcmlnaHQ6IDI0O1xcbiAgbWFyZ2luLWxlZnQ6IDI0OyB9XFxuXFxuLm0teS0yNCB7XFxuICBtYXJnaW4tdG9wOiAyNDtcXG4gIG1hcmdpbi1ib3R0b206IDI0OyB9XFxuXFxuLm0tMjUge1xcbiAgbWFyZ2luOiAyNTsgfVxcblxcbi5tLXQtMjUge1xcbiAgbWFyZ2luLXRvcDogMjU7IH1cXG5cXG4ubS1yLTI1IHtcXG4gIG1hcmdpbi1yaWdodDogMjU7IH1cXG5cXG4ubS1iLTI1IHtcXG4gIG1hcmdpbi1ib3R0b206IDI1OyB9XFxuXFxuLm0tbC0yNSB7XFxuICBtYXJnaW4tbGVmdDogMjU7IH1cXG5cXG4ubS14LTI1IHtcXG4gIG1hcmdpbi1yaWdodDogMjU7XFxuICBtYXJnaW4tbGVmdDogMjU7IH1cXG5cXG4ubS15LTI1IHtcXG4gIG1hcmdpbi10b3A6IDI1O1xcbiAgbWFyZ2luLWJvdHRvbTogMjU7IH1cXG5cXG4ubS0yOCB7XFxuICBtYXJnaW46IDI4OyB9XFxuXFxuLm0tdC0yOCB7XFxuICBtYXJnaW4tdG9wOiAyODsgfVxcblxcbi5tLXItMjgge1xcbiAgbWFyZ2luLXJpZ2h0OiAyODsgfVxcblxcbi5tLWItMjgge1xcbiAgbWFyZ2luLWJvdHRvbTogMjg7IH1cXG5cXG4ubS1sLTI4IHtcXG4gIG1hcmdpbi1sZWZ0OiAyODsgfVxcblxcbi5tLXgtMjgge1xcbiAgbWFyZ2luLXJpZ2h0OiAyODtcXG4gIG1hcmdpbi1sZWZ0OiAyODsgfVxcblxcbi5tLXktMjgge1xcbiAgbWFyZ2luLXRvcDogMjg7XFxuICBtYXJnaW4tYm90dG9tOiAyODsgfVxcblxcbi5tLTMwIHtcXG4gIG1hcmdpbjogMzA7IH1cXG5cXG4ubS10LTMwIHtcXG4gIG1hcmdpbi10b3A6IDMwOyB9XFxuXFxuLm0tci0zMCB7XFxuICBtYXJnaW4tcmlnaHQ6IDMwOyB9XFxuXFxuLm0tYi0zMCB7XFxuICBtYXJnaW4tYm90dG9tOiAzMDsgfVxcblxcbi5tLWwtMzAge1xcbiAgbWFyZ2luLWxlZnQ6IDMwOyB9XFxuXFxuLm0teC0zMCB7XFxuICBtYXJnaW4tcmlnaHQ6IDMwO1xcbiAgbWFyZ2luLWxlZnQ6IDMwOyB9XFxuXFxuLm0teS0zMCB7XFxuICBtYXJnaW4tdG9wOiAzMDtcXG4gIG1hcmdpbi1ib3R0b206IDMwOyB9XFxuXFxuLnAtMCB7XFxuICBwYWRkaW5nOiAwOyB9XFxuXFxuLnAtdC0wIHtcXG4gIHBhZGRpbmctdG9wOiAwOyB9XFxuXFxuLnAtci0wIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDA7IH1cXG5cXG4ucC1iLTAge1xcbiAgcGFkZGluZy1ib3R0b206IDA7IH1cXG5cXG4ucC1sLTAge1xcbiAgcGFkZGluZy1sZWZ0OiAwOyB9XFxuXFxuLnAteC0wIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDA7XFxuICBwYWRkaW5nLWxlZnQ6IDA7IH1cXG5cXG4ucC15LTAge1xcbiAgcGFkZGluZy10b3A6IDA7XFxuICBwYWRkaW5nLWJvdHRvbTogMDsgfVxcblxcbi5wLTIge1xcbiAgcGFkZGluZzogMjsgfVxcblxcbi5wLXQtMiB7XFxuICBwYWRkaW5nLXRvcDogMjsgfVxcblxcbi5wLXItMiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyOyB9XFxuXFxuLnAtYi0yIHtcXG4gIHBhZGRpbmctYm90dG9tOiAyOyB9XFxuXFxuLnAtbC0yIHtcXG4gIHBhZGRpbmctbGVmdDogMjsgfVxcblxcbi5wLXgtMiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyO1xcbiAgcGFkZGluZy1sZWZ0OiAyOyB9XFxuXFxuLnAteS0yIHtcXG4gIHBhZGRpbmctdG9wOiAyO1xcbiAgcGFkZGluZy1ib3R0b206IDI7IH1cXG5cXG4ucC00IHtcXG4gIHBhZGRpbmc6IDQ7IH1cXG5cXG4ucC10LTQge1xcbiAgcGFkZGluZy10b3A6IDQ7IH1cXG5cXG4ucC1yLTQge1xcbiAgcGFkZGluZy1yaWdodDogNDsgfVxcblxcbi5wLWItNCB7XFxuICBwYWRkaW5nLWJvdHRvbTogNDsgfVxcblxcbi5wLWwtNCB7XFxuICBwYWRkaW5nLWxlZnQ6IDQ7IH1cXG5cXG4ucC14LTQge1xcbiAgcGFkZGluZy1yaWdodDogNDtcXG4gIHBhZGRpbmctbGVmdDogNDsgfVxcblxcbi5wLXktNCB7XFxuICBwYWRkaW5nLXRvcDogNDtcXG4gIHBhZGRpbmctYm90dG9tOiA0OyB9XFxuXFxuLnAtNSB7XFxuICBwYWRkaW5nOiA1OyB9XFxuXFxuLnAtdC01IHtcXG4gIHBhZGRpbmctdG9wOiA1OyB9XFxuXFxuLnAtci01IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDU7IH1cXG5cXG4ucC1iLTUge1xcbiAgcGFkZGluZy1ib3R0b206IDU7IH1cXG5cXG4ucC1sLTUge1xcbiAgcGFkZGluZy1sZWZ0OiA1OyB9XFxuXFxuLnAteC01IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDU7XFxuICBwYWRkaW5nLWxlZnQ6IDU7IH1cXG5cXG4ucC15LTUge1xcbiAgcGFkZGluZy10b3A6IDU7XFxuICBwYWRkaW5nLWJvdHRvbTogNTsgfVxcblxcbi5wLTgge1xcbiAgcGFkZGluZzogODsgfVxcblxcbi5wLXQtOCB7XFxuICBwYWRkaW5nLXRvcDogODsgfVxcblxcbi5wLXItOCB7XFxuICBwYWRkaW5nLXJpZ2h0OiA4OyB9XFxuXFxuLnAtYi04IHtcXG4gIHBhZGRpbmctYm90dG9tOiA4OyB9XFxuXFxuLnAtbC04IHtcXG4gIHBhZGRpbmctbGVmdDogODsgfVxcblxcbi5wLXgtOCB7XFxuICBwYWRkaW5nLXJpZ2h0OiA4O1xcbiAgcGFkZGluZy1sZWZ0OiA4OyB9XFxuXFxuLnAteS04IHtcXG4gIHBhZGRpbmctdG9wOiA4O1xcbiAgcGFkZGluZy1ib3R0b206IDg7IH1cXG5cXG4ucC0xMCB7XFxuICBwYWRkaW5nOiAxMDsgfVxcblxcbi5wLXQtMTAge1xcbiAgcGFkZGluZy10b3A6IDEwOyB9XFxuXFxuLnAtci0xMCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMDsgfVxcblxcbi5wLWItMTAge1xcbiAgcGFkZGluZy1ib3R0b206IDEwOyB9XFxuXFxuLnAtbC0xMCB7XFxuICBwYWRkaW5nLWxlZnQ6IDEwOyB9XFxuXFxuLnAteC0xMCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMDtcXG4gIHBhZGRpbmctbGVmdDogMTA7IH1cXG5cXG4ucC15LTEwIHtcXG4gIHBhZGRpbmctdG9wOiAxMDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMDsgfVxcblxcbi5wLTEyIHtcXG4gIHBhZGRpbmc6IDEyOyB9XFxuXFxuLnAtdC0xMiB7XFxuICBwYWRkaW5nLXRvcDogMTI7IH1cXG5cXG4ucC1yLTEyIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDEyOyB9XFxuXFxuLnAtYi0xMiB7XFxuICBwYWRkaW5nLWJvdHRvbTogMTI7IH1cXG5cXG4ucC1sLTEyIHtcXG4gIHBhZGRpbmctbGVmdDogMTI7IH1cXG5cXG4ucC14LTEyIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDEyO1xcbiAgcGFkZGluZy1sZWZ0OiAxMjsgfVxcblxcbi5wLXktMTIge1xcbiAgcGFkZGluZy10b3A6IDEyO1xcbiAgcGFkZGluZy1ib3R0b206IDEyOyB9XFxuXFxuLnAtMTUge1xcbiAgcGFkZGluZzogMTU7IH1cXG5cXG4ucC10LTE1IHtcXG4gIHBhZGRpbmctdG9wOiAxNTsgfVxcblxcbi5wLXItMTUge1xcbiAgcGFkZGluZy1yaWdodDogMTU7IH1cXG5cXG4ucC1iLTE1IHtcXG4gIHBhZGRpbmctYm90dG9tOiAxNTsgfVxcblxcbi5wLWwtMTUge1xcbiAgcGFkZGluZy1sZWZ0OiAxNTsgfVxcblxcbi5wLXgtMTUge1xcbiAgcGFkZGluZy1yaWdodDogMTU7XFxuICBwYWRkaW5nLWxlZnQ6IDE1OyB9XFxuXFxuLnAteS0xNSB7XFxuICBwYWRkaW5nLXRvcDogMTU7XFxuICBwYWRkaW5nLWJvdHRvbTogMTU7IH1cXG5cXG4ucC0xNiB7XFxuICBwYWRkaW5nOiAxNjsgfVxcblxcbi5wLXQtMTYge1xcbiAgcGFkZGluZy10b3A6IDE2OyB9XFxuXFxuLnAtci0xNiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNjsgfVxcblxcbi5wLWItMTYge1xcbiAgcGFkZGluZy1ib3R0b206IDE2OyB9XFxuXFxuLnAtbC0xNiB7XFxuICBwYWRkaW5nLWxlZnQ6IDE2OyB9XFxuXFxuLnAteC0xNiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNjtcXG4gIHBhZGRpbmctbGVmdDogMTY7IH1cXG5cXG4ucC15LTE2IHtcXG4gIHBhZGRpbmctdG9wOiAxNjtcXG4gIHBhZGRpbmctYm90dG9tOiAxNjsgfVxcblxcbi5wLTIwIHtcXG4gIHBhZGRpbmc6IDIwOyB9XFxuXFxuLnAtdC0yMCB7XFxuICBwYWRkaW5nLXRvcDogMjA7IH1cXG5cXG4ucC1yLTIwIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwOyB9XFxuXFxuLnAtYi0yMCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMjA7IH1cXG5cXG4ucC1sLTIwIHtcXG4gIHBhZGRpbmctbGVmdDogMjA7IH1cXG5cXG4ucC14LTIwIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwO1xcbiAgcGFkZGluZy1sZWZ0OiAyMDsgfVxcblxcbi5wLXktMjAge1xcbiAgcGFkZGluZy10b3A6IDIwO1xcbiAgcGFkZGluZy1ib3R0b206IDIwOyB9XFxuXFxuLnAtMjQge1xcbiAgcGFkZGluZzogMjQ7IH1cXG5cXG4ucC10LTI0IHtcXG4gIHBhZGRpbmctdG9wOiAyNDsgfVxcblxcbi5wLXItMjQge1xcbiAgcGFkZGluZy1yaWdodDogMjQ7IH1cXG5cXG4ucC1iLTI0IHtcXG4gIHBhZGRpbmctYm90dG9tOiAyNDsgfVxcblxcbi5wLWwtMjQge1xcbiAgcGFkZGluZy1sZWZ0OiAyNDsgfVxcblxcbi5wLXgtMjQge1xcbiAgcGFkZGluZy1yaWdodDogMjQ7XFxuICBwYWRkaW5nLWxlZnQ6IDI0OyB9XFxuXFxuLnAteS0yNCB7XFxuICBwYWRkaW5nLXRvcDogMjQ7XFxuICBwYWRkaW5nLWJvdHRvbTogMjQ7IH1cXG5cXG4ucC0yNSB7XFxuICBwYWRkaW5nOiAyNTsgfVxcblxcbi5wLXQtMjUge1xcbiAgcGFkZGluZy10b3A6IDI1OyB9XFxuXFxuLnAtci0yNSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyNTsgfVxcblxcbi5wLWItMjUge1xcbiAgcGFkZGluZy1ib3R0b206IDI1OyB9XFxuXFxuLnAtbC0yNSB7XFxuICBwYWRkaW5nLWxlZnQ6IDI1OyB9XFxuXFxuLnAteC0yNSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyNTtcXG4gIHBhZGRpbmctbGVmdDogMjU7IH1cXG5cXG4ucC15LTI1IHtcXG4gIHBhZGRpbmctdG9wOiAyNTtcXG4gIHBhZGRpbmctYm90dG9tOiAyNTsgfVxcblxcbi5wLTI4IHtcXG4gIHBhZGRpbmc6IDI4OyB9XFxuXFxuLnAtdC0yOCB7XFxuICBwYWRkaW5nLXRvcDogMjg7IH1cXG5cXG4ucC1yLTI4IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDI4OyB9XFxuXFxuLnAtYi0yOCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMjg7IH1cXG5cXG4ucC1sLTI4IHtcXG4gIHBhZGRpbmctbGVmdDogMjg7IH1cXG5cXG4ucC14LTI4IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDI4O1xcbiAgcGFkZGluZy1sZWZ0OiAyODsgfVxcblxcbi5wLXktMjgge1xcbiAgcGFkZGluZy10b3A6IDI4O1xcbiAgcGFkZGluZy1ib3R0b206IDI4OyB9XFxuXFxuLnAtMzAge1xcbiAgcGFkZGluZzogMzA7IH1cXG5cXG4ucC10LTMwIHtcXG4gIHBhZGRpbmctdG9wOiAzMDsgfVxcblxcbi5wLXItMzAge1xcbiAgcGFkZGluZy1yaWdodDogMzA7IH1cXG5cXG4ucC1iLTMwIHtcXG4gIHBhZGRpbmctYm90dG9tOiAzMDsgfVxcblxcbi5wLWwtMzAge1xcbiAgcGFkZGluZy1sZWZ0OiAzMDsgfVxcblxcbi5wLXgtMzAge1xcbiAgcGFkZGluZy1yaWdodDogMzA7XFxuICBwYWRkaW5nLWxlZnQ6IDMwOyB9XFxuXFxuLnAteS0zMCB7XFxuICBwYWRkaW5nLXRvcDogMzA7XFxuICBwYWRkaW5nLWJvdHRvbTogMzA7IH1cXG5cXG4vKiBEaXZpZGVycyAqL1xcbi5oci1saWdodCB7XFxuICBoZWlnaHQ6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4uaHItZGFyayB7XFxuICBoZWlnaHQ6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4vKiBBbGlnbm1lbnQgKi9cXG4udGV4dC1sZWZ0IHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7IH1cXG5cXG4udGV4dC1yaWdodCB7XFxuICB0ZXh0LWFsaWduOiByaWdodDsgfVxcblxcbi50ZXh0LWNlbnRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4udGV4dC1sb3dlcmNhc2Uge1xcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTsgfVxcblxcbi50ZXh0LXVwcGVyY2FzZSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuXFxuLnRleHQtY2FwaXRhbGl6ZSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTsgfVxcblxcbi5mb250LXdlaWdodC1ub3JtYWwge1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgfVxcblxcbi5mb250LXdlaWdodC1ib2xkIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuXFxuLmZvbnQtaXRhbGljIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYzsgfVxcblxcbi8qKlxcclxcbiAqIEZvbnQgc2l6ZVxcclxcbiAqIFRoZSBmb2xsb3dpbmcgY3JlYXRlcyB0aGlzIHBhdHRlcm46XFxyXFxuICogLnQtMTB7Zm9udC1zaXplOjEwfVxcclxcbiAqIEZyb20gMTAsIDEyLCAxNCwgMTUsIDE2LCAxNywgMTgsIDE5LCAyMFxcclxcbioqL1xcbi50LTEwIHtcXG4gIGZvbnQtc2l6ZTogMTA7IH1cXG5cXG4udC0xMiB7XFxuICBmb250LXNpemU6IDEyOyB9XFxuXFxuLnQtMTQge1xcbiAgZm9udC1zaXplOiAxNDsgfVxcblxcbi50LTE1IHtcXG4gIGZvbnQtc2l6ZTogMTU7IH1cXG5cXG4udC0xNiB7XFxuICBmb250LXNpemU6IDE2OyB9XFxuXFxuLnQtMTcge1xcbiAgZm9udC1zaXplOiAxNzsgfVxcblxcbi50LTE4IHtcXG4gIGZvbnQtc2l6ZTogMTg7IH1cXG5cXG4udC0xOSB7XFxuICBmb250LXNpemU6IDE5OyB9XFxuXFxuLnQtMjAge1xcbiAgZm9udC1zaXplOiAyMDsgfVxcblxcbi50LTI1IHtcXG4gIGZvbnQtc2l6ZTogMjU7IH1cXG5cXG4udC0zMCB7XFxuICBmb250LXNpemU6IDMwOyB9XFxuXFxuLmltZy1yb3VuZGVkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDU7IH1cXG5cXG4uaW1nLWNpcmNsZSB7XFxuICBib3JkZXItcmFkaXVzOiAyMDsgfVxcblxcbi5pbWctdGh1bWJuYWlsIHtcXG4gIGJvcmRlci1yYWRpdXM6IDA7IH1cXG5cXG4uaW52aXNpYmxlIHtcXG4gIHZpc2liaWxpdHk6IGNvbGxhcHNlOyB9XFxuXFxuLnB1bGwtbGVmdCB7XFxuICBob3Jpem9udGFsLWFsaWduOiBsZWZ0OyB9XFxuXFxuLnB1bGwtcmlnaHQge1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogcmlnaHQ7IH1cXG5cXG4ubS14LWF1dG8ge1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLm0teS1hdXRvIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7IH1cXG5cXG4udGV4dC1wcmltYXJ5IHtcXG4gIGNvbG9yOiAjM0E1M0ZGOyB9XFxuXFxuLnRleHQtZGFuZ2VyIHtcXG4gIGNvbG9yOiAjRUQ0NzNGOyB9XFxuXFxuLnRleHQtbXV0ZWQge1xcbiAgY29sb3I6ICM5ZTllOWU7IH1cXG5cXG4uYmctcHJpbWFyeSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0E1M0ZGO1xcbiAgY29sb3I6ICNmZmY7IH1cXG5cXG4uYmctZGFuZ2VyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRDQ3M0Y7XFxuICBjb2xvcjogI2ZmZjsgfVxcblxcbi5hY3Rpb24tYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzQTUzRkY7XFxuICBjb2xvcjogI2ZmZjsgfVxcbiAgLmFjdGlvbi1iYXIgLmFjdGlvbi1iYXItdGl0bGUge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxNztcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjsgfVxcbiAgLmFjdGlvbi1iYXIgLmFjdGlvbi1pdGVtIHtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgfVxcblxcbi5hY3Rpdml0eS1pbmRpY2F0b3Ige1xcbiAgY29sb3I6ICMzQTUzRkY7XFxuICB3aWR0aDogMzA7XFxuICBoZWlnaHQ6IDMwOyB9XFxuXFxuLmJ0biB7XFxuICBjb2xvcjogIzAyNTU2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgbWluLWhlaWdodDogMzY7XFxuICBtaW4td2lkdGg6IDY0O1xcbiAgcGFkZGluZzogMTAgMTAgMTAgMTA7XFxuICBmb250LXNpemU6IDE4O1xcbiAgbWFyZ2luOiA4IDE2IDggMTY7IH1cXG4gIC5idG4uYnRuLWFjdGl2ZTpoaWdobGlnaHRlZCB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDM3Y2EwOyB9XFxuXFxuLmJ0bi1wcmltYXJ5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjU1NmU7XFxuICBib3JkZXItY29sb3I6ICMwMjU1NmU7XFxuICBjb2xvcjogI2ZmZjsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1hY3RpdmU6aGlnaGxpZ2h0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEyZTNjO1xcbiAgICBib3JkZXItY29sb3I6ICMwMTJlM2M7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tYXF1YSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGNhYWI7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tYmx1ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZDVhZmU7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tYnJvd24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk1NTQ4OyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLWZvcmVzdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDY5Njg7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tZ3JleSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1YzY4N2M7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tbGVtb24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYTAwO1xcbiAgICBjb2xvcjogIzAwMDsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1saW1lIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FlZTQwNjtcXG4gICAgY29sb3I6ICMwMDA7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tb3JhbmdlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1N2MwMDsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1wdXJwbGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODEzMGZmOyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLXJ1Ynkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYxNzQ0OyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLXNreSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMGJjZmY7IH1cXG5cXG4uYnRuLW91dGxpbmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItY29sb3I6ICMwMjU1NmU7XFxuICBjb2xvcjogIzAyNTU2ZTsgfVxcbiAgLmJ0bi1vdXRsaW5lLmJ0bi1hY3RpdmU6aGlnaGxpZ2h0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDM3Y2EwOyB9XFxuXFxuLmJ0bltpc0VuYWJsZWQ9ZmFsc2VdIHtcXG4gIGNvbG9yOiAjYTRhNGE0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG4gIGJvcmRlci1jb2xvcjogI2UwZTBlMDsgfVxcblxcbi5mYSB7XFxuICBmb250LWZhbWlseTogRm9udEF3ZXNvbWUsIGZvbnRhd2Vzb21lLXdlYmZvbnQ7IH1cXG5cXG4uZm9ybSAuaW5wdXQge1xcbiAgcGFkZGluZzogMTYgOCAxNiA4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG4gIC5mb3JtIC5pbnB1dC5pbnB1dC1ib3JkZXIge1xcbiAgICBib3JkZXItd2lkdGg6IDE7XFxuICAgIGJvcmRlci1jb2xvcjogI2UwZTBlMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjtcXG4gICAgcGFkZGluZzogMTY7IH1cXG4gIC5mb3JtIC5pbnB1dC5pbnB1dC1yb3VuZGVkIHtcXG4gICAgYm9yZGVyLXdpZHRoOiAxO1xcbiAgICBib3JkZXItY29sb3I6ICNlMGUwZTA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI4O1xcbiAgICBwYWRkaW5nOiAxNjsgfVxcbiAgLmZvcm0gLmlucHV0W2lzRW5hYmxlZD0nZmFsc2UnXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7IH1cXG5cXG4uZm9ybSAuaW5wdXQtZmllbGQge1xcbiAgbWFyZ2luOiA4OyB9XFxuICAuZm9ybSAuaW5wdXQtZmllbGQgLmxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxMjtcXG4gICAgY29sb3I6ICNiYWJhYmE7IH1cXG4gIC5mb3JtIC5pbnB1dC1maWVsZCAuaW5wdXQge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDAgMCA4IDA7IH1cXG4gIC5mb3JtIC5pbnB1dC1maWVsZCAuaHItbGlnaHQuYWN0aXZlLFxcbiAgLmZvcm0gLmlucHV0LWZpZWxkIC5oci1kYXJrLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzQTUzRkY7IH1cXG4gIC5mb3JtIC5pbnB1dC1maWVsZC5pbnB1dC1zaWRlcyAubGFiZWwge1xcbiAgICBmb250LXNpemU6IDE4O1xcbiAgICBtYXJnaW46IDAgMCA4IDA7IH1cXG5cXG4uaDEsIC5oMiwgLmgzLCAuaDQsIC5oNSwgLmg2IHtcXG4gIG1hcmdpbi1ib3R0b206IDQ7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgY29sb3I6ICMwMjI3MzQ7IH1cXG5cXG4uYm9keSxcXG4uYm9keTIsXFxuLmZvb3Rub3RlIHtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBjb2xvcjogIzAyMjczNDsgfVxcblxcbi5oMSB7XFxuICBmb250LXNpemU6IDMyOyB9XFxuXFxuLmgyIHtcXG4gIGZvbnQtc2l6ZTogMjI7IH1cXG5cXG4uaDMge1xcbiAgZm9udC1zaXplOiAxNTsgfVxcblxcbi5oNCB7XFxuICBmb250LXNpemU6IDEyOyB9XFxuXFxuLmg1IHtcXG4gIGZvbnQtc2l6ZTogMTE7IH1cXG5cXG4uaDYge1xcbiAgZm9udC1zaXplOiAxMDsgfVxcblxcbi5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMTQ7IH1cXG5cXG4uYm9keTIge1xcbiAgZm9udC1zaXplOiAxNzsgfVxcblxcbi5mb290bm90ZSB7XFxuICBmb250LXNpemU6IDEzOyB9XFxuXFxuLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbSB7XFxuICBjb2xvcjogIzIxMjEyMTtcXG4gIGZvbnQtc2l6ZTogMTY7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAxNjsgfVxcbiAgLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbSBMYWJlbCB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7IH1cXG4gIC5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW0gLnRodW1iIHtcXG4gICAgc3RyZXRjaDogZmlsbDtcXG4gICAgd2lkdGg6IDQwO1xcbiAgICBoZWlnaHQ6IDQwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE2OyB9XFxuICAubGlzdC1ncm91cCAubGlzdC1ncm91cC1pdGVtLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7IH1cXG4gIC5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW0gLmxpc3QtZ3JvdXAtaXRlbS10ZXh0IHtcXG4gICAgY29sb3I6ICMwMjI3MzQ7XFxuICAgIGZvbnQtc2l6ZTogMTQ7IH1cXG5cXG4ucGFnZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XFxuXFxuLnByb2dyZXNzIHtcXG4gIGNvbG9yOiAjM0E1M0ZGO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JhYmFiYTsgfVxcblxcbi5zZWdtZW50ZWQtYmFyIHtcXG4gIGZvbnQtc2l6ZTogMTM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgY29sb3I6ICMyMTIxMjE7XFxuICBzZWxlY3RlZC1iYWNrZ3JvdW5kLWNvbG9yOiAjM0E1M0ZGOyB9XFxuXFxuLnNpZGVkcmF3ZXItbGVmdCwgLnNpZGVkcmF3ZXItY2VudGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7IH1cXG5cXG4uc2lkZWRyYXdlci1oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcXG4gIGhlaWdodDogMTQ4O1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4uc2lkZWRyYXdlci1sZWZ0IC5zaWRlZHJhd2VyLWhlYWRlciB7XFxuICBwYWRkaW5nOiAxNiAxNiAwIDE2OyB9XFxuXFxuLnNpZGVkcmF3ZXItY2VudGVyIC5zaWRlZHJhd2VyLWhlYWRlciB7XFxuICBwYWRkaW5nOiAyMCAxNSAwIDE1OyB9XFxuXFxuLnNpZGVkcmF3ZXItaGVhZGVyLWltYWdlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7IH1cXG5cXG4uc2lkZWRyYXdlci1sZWZ0IC5zaWRlZHJhd2VyLWhlYWRlci1pbWFnZSB7XFxuICBoZWlnaHQ6IDY0O1xcbiAgd2lkdGg6IDY0O1xcbiAgYm9yZGVyLXJhZGl1czogMzI7XFxuICBob3Jpem9udGFsLWFsaWduOiBsZWZ0O1xcbiAgbWFyZ2luLWJvdHRvbTogMzY7IH1cXG5cXG4uc2lkZWRyYXdlci1jZW50ZXIgLnNpZGVkcmF3ZXItaGVhZGVyLWltYWdlIHtcXG4gIGhlaWdodDogNzQ7XFxuICB3aWR0aDogNzQ7XFxuICBib3JkZXItcmFkaXVzOiAzNztcXG4gIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDI0OyB9XFxuXFxuLnNpZGVkcmF3ZXItaGVhZGVyLWJyYW5kIHtcXG4gIGNvbG9yOiAjNzM3MzczOyB9XFxuXFxuLnNpZGVkcmF3ZXItbGVmdCAuc2lkZWRyYXdlci1oZWFkZXItYnJhbmQge1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogbGVmdDtcXG4gIGZvbnQtc2l6ZTogMTQ7IH1cXG5cXG4uc2lkZWRyYXdlci1jZW50ZXIgLnNpZGVkcmF3ZXItaGVhZGVyLWJyYW5kIHtcXG4gIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTU7IH1cXG5cXG4uc2lkZWRyYXdlci1saXN0LWl0ZW0ge1xcbiAgaGVpZ2h0OiA0ODtcXG4gIGhvcml6b250YWwtYWxpZ246IGxlZnQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIG9yaWVudGF0aW9uOiBob3Jpem9udGFsOyB9XFxuICAuc2lkZWRyYXdlci1saXN0LWl0ZW0gLnNpZGVkcmF3ZXItbGlzdC1pdGVtLWljb24ge1xcbiAgICB3aWR0aDogMjQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMDtcXG4gICAgaGVpZ2h0OiA0ODtcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjsgfVxcbiAgLnNpZGVkcmF3ZXItbGlzdC1pdGVtLmFjdGl2ZSB7XFxuICAgIGNvbG9yOiAjM0E1M0ZGO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEY4OyB9XFxuICAgIC5zaWRlZHJhd2VyLWxpc3QtaXRlbS5hY3RpdmUgLnNpZGVkcmF3ZXItbGlzdC1pdGVtLWljb24ge1xcbiAgICAgIGNvbG9yOiAjM0E1M0ZGOyB9XFxuXFxuLnNpZGVkcmF3ZXItbGVmdCAuc2lkZWRyYXdlci1saXN0LWl0ZW0taWNvbiB7XFxuICBtYXJnaW46IDAgMTYgMCAxNjsgfVxcblxcbi5zaWRlZHJhd2VyLWNlbnRlciAuc2lkZWRyYXdlci1saXN0LWl0ZW0taWNvbiB7XFxuICBtYXJnaW46IDAgMCAwIDE1OyB9XFxuXFxuLnNpZGVkcmF3ZXItbGlzdC1pdGVtLXRleHQge1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogbGVmdDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBmb250LXNpemU6IDE1O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItd2lkdGg6IDAuMTtcXG4gIHdpZHRoOiA4MCU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLnNpZGVkcmF3ZXItbGVmdCAuc2lkZWRyYXdlci1saXN0LWl0ZW0tdGV4dCB7XFxuICBwYWRkaW5nLWxlZnQ6IDE2OyB9XFxuXFxuLnNpZGVkcmF3ZXItY2VudGVyIC5zaWRlZHJhd2VyLWxpc3QtaXRlbS10ZXh0IHtcXG4gIHBhZGRpbmctbGVmdDogMTU7IH1cXG5cXG4uc2xpZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzQTUzRkY7IH1cXG4gIC5zbGlkZXJbaXNFbmFibGVkPWZhbHNlXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxuICAgIGNvbG9yOiAjZTBlMGUwOyB9XFxuXFxuLnN3aXRjaFtjaGVja2VkPXRydWVdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzQTUzRkY7XFxuICBjb2xvcjogIzNBNTNGRjsgfVxcblxcbi5zd2l0Y2hbY2hlY2tlZD10cnVlXVtpc0VuYWJsZWQ9ZmFsc2VdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxuICBjb2xvcjogI2ZmZjsgfVxcblxcbi5zd2l0Y2hbaXNFbmFibGVkPWZhbHNlXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbiAgY29sb3I6ICNlMGUwZTA7IH1cXG5cXG4udGFiLXZpZXcge1xcbiAgLypjb2xvcjogJHNlY29uZGFyeTsqL1xcbiAgc2VsZWN0ZWQtY29sb3I6ICMzMGJjZmY7XFxuICB0YWJzLWJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cXG4gIC50YWItdmlldyAudGFiLXZpZXctaXRlbSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIHRhYnMtYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxcblxcbiNsb2dpbi1iYWNrZ3JvdW5kIHtcXG4gIG1hcmdpbi10b3A6IC0yMDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IH1cXG5cXG4ubG9naW4td3JhcCB7XFxuICBwYWRkaW5nOiAwIDQwOyB9XFxuXFxuLmxvZ28td3JhcCB7XFxuICBtYXJnaW46IDYwIDAgMTAgMDtcXG4gIHBhZGRpbmc6IDIwIDA7IH1cXG4gIC5sb2dvLXdyYXAgLmxvZ2luLWxvZ28ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMzA7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMDtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgY29sb3I6ICMyMTIxMjE7XFxuICAgIG9wYWNpdHk6IC45OyB9XFxuICAubG9nby13cmFwIC5sb2dpbi1sb2dvLXN1YiB7XFxuICAgIGNvbG9yOiAjMjEyMTIxO1xcbiAgICBvcGFjaXR5OiAuODtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLmxvZ2luLXdyYXBwZXIge1xcbiAgcGFkZGluZzogMjA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogMzsgfVxcbiAgLmxvZ2luLXdyYXBwZXIgVGV4dEZpZWxkIHtcXG4gICAgcGFkZGluZzogMTAgMTA7XFxuICAgIG1hcmdpbjogMTAgMCAwIDA7IH1cXG5cXG4uZ28tYmFjayB7XFxuICBmb250LXNpemU6IDE0O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICMyMTIxMjE7XFxuICBtYXJnaW4tdG9wOiAxMDsgfVxcblxcbi8qKlxcclxcbiAqIEltcG9ydCBhbGwgcGxhdGZvcm0gc3BlY2lmaWMgZmlsZXMgaGVyZVxcclxcbiAqL1xcbi5hY3Rpb24tYmFyIC5hY3Rpb24tYmFyLXRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDIwOyB9XFxuXFxuLmFjdGlvbi1iYXIgLmFjdGlvbi1pdGVtIHtcXG4gIGFuZHJvaWQtZWxldmF0aW9uOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDApO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMCk7XFxuICBib3JkZXItd2lkdGg6IDE7IH1cXG5cXG4uYnRuIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XFxuICBmb250LXNpemU6IDE0OyB9XFxuXFxuLmJ0bi1wcmltYXJ5IHtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDApOyB9XFxuXFxuLmJ0bi1vdXRsaW5lIHtcXG4gIGFuZHJvaWQtZWxldmF0aW9uOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDApO1xcbiAgYm9yZGVyLXdpZHRoOiAxO1xcbiAgYm9yZGVyLWNvbG9yOiAjMDI1NTZlO1xcbiAgaGVpZ2h0OiAzNjtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG4uYnRuLXJvdW5kZWQtc20ge1xcbiAgYm9yZGVyLXJhZGl1czogMjtcXG4gIGhlaWdodDogMzY7XFxuICBwYWRkaW5nOiAwOyB9XFxuXFxuLmJ0bi1yb3VuZGVkLWxnIHtcXG4gIGJvcmRlci1yYWRpdXM6IDQwO1xcbiAgaGVpZ2h0OiAzNjtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG4uZm9ybSB7XFxuICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJzsgfVxcbiAgLmZvcm0gLmlucHV0IHtcXG4gICAgZm9udC1zaXplOiAxNjsgfVxcblxcbi5oMSB7XFxuICBmb250LXNpemU6IDM0OyB9XFxuXFxuLmgyIHtcXG4gIGZvbnQtc2l6ZTogMjQ7IH1cXG5cXG4uaDMge1xcbiAgZm9udC1zaXplOiAxNjsgfVxcblxcbi5oNSB7XFxuICBmb250LXNpemU6IDExO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG5cXG4uYm9keTIge1xcbiAgZm9udC1zaXplOiAxNDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7IH1cXG5cXG4uc2lkZWRyYXdlci1saXN0LWl0ZW0taWNvbiB7XFxuICBtYXJnaW46IDAgMTYgMCAxNjtcXG4gIHBhZGRpbmctdG9wOiAxNDsgfVxcblxcbi5zaWRlZHJhd2VyLWxpc3QtaXRlbS1pY29uLCAuc2lkZWRyYXdlci1saXN0LWl0ZW0ge1xcbiAgY29sb3I6ICMwMjI3MzQ7IH1cXG5cXG4uc2lkZWRyYXdlci1saXN0LWl0ZW0ge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTWVkaXVtJztcXG4gIGZvbnQtc2l6ZTogMTQ7IH1cXG5cXG4uc2xpZGVyIHtcXG4gIGNvbG9yOiAjM0E1M0ZGO1xcbiAgbWFyZ2luOiAyMCAxNjsgfVxcblxcbi5zd2l0Y2gge1xcbiAgbWFyZ2luOiAxNCAxNjtcXG4gIGNvbG9yOiAjZTBlMGUwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDsgfVxcbiAgLnN3aXRjaFtjaGVja2VkPXRydWVdIHtcXG4gICAgY29sb3I6ICMzQTUzRkY7IH1cXG5cXG4uZmEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250QXdlc29tZVxcXCI7IH1cXG5cXG4uYWN0aW9uLWl0ZW0sXFxuTmF2aWdhdGlvbkJ1dHRvbiB7XFxuICBjb2xvcjogI2ZmZjsgfVxcblxcbi5hY3Rpb24taXRlbTpkaXNhYmxlZCB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpOyB9XFxuXFxuU2xpZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzQTUzRkY7XFxuICBjb2xvcjogIzNBNTNGRjsgfVxcblxcbi50ZXh0IHtcXG4gIGNvbG9yOiAjMDIyNzM0OyB9XFxuXFxuLnRleHQtcHJpbWFyeSB7XFxuICBjb2xvcjogIzNBNTNGRjsgfVxcblxcbi50ZXh0LXNlY29uZGFyeSB7XFxuICBjb2xvcjogcmdiYSgyLCAzOSwgNTIsIDAuNSk7IH1cXG5cXG4uYWN0aW9uLWl0ZW0ge1xcbiAgcGFkZGluZzogMCAxMDtcXG4gIGhlaWdodDogMTAwJTsgfVxcblxcbi5mYSB7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnRBd2Vzb21lXFxcIiwgXFxcImZvbnRhd2Vzb21lLXdlYmZvbnRcXFwiOyB9XFxuXFxuLmlvbiB7XFxuICBmb250LWZhbWlseTogXFxcImlvbmljb25zXFxcIjsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9hcHAuc2NzcycgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9BZG9wdGlvbkFuaW1hbERldGFpbHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRlYmEyZDEyJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0Fkb3B0aW9uQW5pbWFsRGV0YWlscy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0Fkb3B0aW9uQW5pbWFsRGV0YWlscy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vQWRvcHRpb25BbmltYWxEZXRhaWxzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTRlYmEyZDEyJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI0ZWJhMmQxMlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9qdHJhbi9EZXNrdG9wL0FDVUEvYWN1YVZfMi9hY3VhLW1vYmlsZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0ZWJhMmQxMicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0ZWJhMmQxMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0ZWJhMmQxMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQWRvcHRpb25BbmltYWxEZXRhaWxzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ZWJhMmQxMiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0ZWJhMmQxMicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9hZG9wdGlvbi9BZG9wdGlvbkFuaW1hbERldGFpbHMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Fkb3B0aW9uQW5pbWFsRGV0YWlscy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BZG9wdGlvbkFuaW1hbERldGFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BZG9wdGlvbkFuaW1hbERldGFpbHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NGViYTJkMTImc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRvcHRpb25BbmltYWxEZXRhaWxzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTRlYmEyZDEyJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Fkb3B0aW9uQW5pbWFsRGV0YWlscy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGViYTJkMTImc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0FuaW1hbENhcmQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWYxNDIyYTEwJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0FuaW1hbENhcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BbmltYWxDYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9BbmltYWxDYXJkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWYxNDIyYTEwJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJmMTQyMmExMFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9qdHJhbi9EZXNrdG9wL0FDVUEvYWN1YVZfMi9hY3VhLW1vYmlsZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdmMTQyMmExMCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdmMTQyMmExMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdmMTQyMmExMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQW5pbWFsQ2FyZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZjE0MjJhMTAmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZjE0MjJhMTAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvYWRvcHRpb24vQW5pbWFsQ2FyZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQW5pbWFsQ2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BbmltYWxDYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQW5pbWFsQ2FyZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1mMTQyMmExMCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BbmltYWxDYXJkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWYxNDIyYTEwJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FuaW1hbENhcmQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWYxNDIyYTEwJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDVjOThlYWMmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDVjOThlYWMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjA1Yzk4ZWFjXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2p0cmFuL0Rlc2t0b3AvQUNVQS9hY3VhVl8yL2FjdWEtbW9iaWxlL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzA1Yzk4ZWFjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzA1Yzk4ZWFjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzA1Yzk4ZWFjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDVjOThlYWMmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMDVjOThlYWMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvYWRvcHRpb24vY2F0ZWdvcnkudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDVjOThlYWMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDVjOThlYWMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA1Yzk4ZWFjJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9DYXRlZ29yeUJ1dHRvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzYwOWEyMzkmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQ2F0ZWdvcnlCdXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9DYXRlZ29yeUJ1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vQ2F0ZWdvcnlCdXR0b24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzYwOWEyMzkmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjc2MDlhMjM5XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2p0cmFuL0Rlc2t0b3AvQUNVQS9hY3VhVl8yL2FjdWEtbW9iaWxlL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzc2MDlhMjM5JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzc2MDlhMjM5JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzc2MDlhMjM5JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9DYXRlZ29yeUJ1dHRvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzYwOWEyMzkmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNzYwOWEyMzknLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvYnV0dG9ucy9DYXRlZ29yeUJ1dHRvbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2F0ZWdvcnlCdXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2F0ZWdvcnlCdXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DYXRlZ29yeUJ1dHRvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03NjA5YTIzOSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DYXRlZ29yeUJ1dHRvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03NjA5YTIzOSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DYXRlZ29yeUJ1dHRvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzYwOWEyMzkmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0ljb25CdXR0b24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ0YWU1NzE4JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0ljb25CdXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9JY29uQnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9JY29uQnV0dG9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ0YWU1NzE4JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI0NGFlNTcxOFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9qdHJhbi9EZXNrdG9wL0FDVUEvYWN1YVZfMi9hY3VhLW1vYmlsZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0NGFlNTcxOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0NGFlNTcxOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0NGFlNTcxOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSWNvbkJ1dHRvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDRhZTU3MTgmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNDRhZTU3MTgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvYnV0dG9ucy9JY29uQnV0dG9uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JY29uQnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ljb25CdXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JY29uQnV0dG9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ0YWU1NzE4JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ljb25CdXR0b24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDRhZTU3MTgmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSWNvbkJ1dHRvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDRhZTU3MTgmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0FuaW1hbENlbnRlckRldGFpbHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVmZjdkMTVjJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0FuaW1hbENlbnRlckRldGFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BbmltYWxDZW50ZXJEZXRhaWxzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9BbmltYWxDZW50ZXJEZXRhaWxzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVmZjdkMTVjJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNWZmN2QxNWNcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvanRyYW4vRGVza3RvcC9BQ1VBL2FjdWFWXzIvYWN1YS1tb2JpbGUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNWZmN2QxNWMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNWZmN2QxNWMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNWZmN2QxNWMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0FuaW1hbENlbnRlckRldGFpbHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVmZjdkMTVjJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzVmZjdkMTVjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL2xvY2F0aW9uL0FuaW1hbENlbnRlckRldGFpbHMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FuaW1hbENlbnRlckRldGFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQW5pbWFsQ2VudGVyRGV0YWlscy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BbmltYWxDZW50ZXJEZXRhaWxzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVmZjdkMTVjJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQW5pbWFsQ2VudGVyRGV0YWlscy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01ZmY3ZDE1YyZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQW5pbWFsQ2VudGVyRGV0YWlscy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWZmN2QxNWMmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0ZhcUluZm8udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBhNGJiMjQ1JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0ZhcUluZm8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9GYXFJbmZvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9GYXFJbmZvLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBhNGJiMjQ1JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMGE0YmIyNDVcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvanRyYW4vRGVza3RvcC9BQ1VBL2FjdWFWXzIvYWN1YS1tb2JpbGUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMGE0YmIyNDUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMGE0YmIyNDUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMGE0YmIyNDUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0ZhcUluZm8udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBhNGJiMjQ1JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzBhNGJiMjQ1Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL3N1Ymxpc3RzL0ZhcUluZm8udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZhcUluZm8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmFxSW5mby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GYXFJbmZvLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBhNGJiMjQ1JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmFxSW5mby52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wYTRiYjI0NSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmFxSW5mby52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGE0YmIyNDUmc2NvcGVkPXRydWUmXCIiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIVxcbiAqICBGb250IEF3ZXNvbWUgNC43LjAgYnkgQGRhdmVnYW5keSAtIGh0dHA6Ly9mb250YXdlc29tZS5pbyAtIEBmb250YXdlc29tZVxcbiAqICBMaWNlbnNlIC0gaHR0cDovL2ZvbnRhd2Vzb21lLmlvL2xpY2Vuc2UgKEZvbnQ6IFNJTCBPRkwgMS4xLCBDU1M6IE1JVCBMaWNlbnNlKVxcbiAqL1xcbi8qIEZPTlQgUEFUSFxcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0ZvbnRBd2Vzb21lJztcXG4gIHNyYzogdXJsKCcuLi9mb250cy9mb250YXdlc29tZS13ZWJmb250LmVvdD92PTQuNy4wJyk7XFxuICBzcmM6IHVybCgnLi4vZm9udHMvZm9udGF3ZXNvbWUtd2ViZm9udC5lb3Q/I2llZml4JnY9NC43LjAnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksIHVybCgnLi4vZm9udHMvZm9udGF3ZXNvbWUtd2ViZm9udC53b2ZmMj92PTQuNy4wJykgZm9ybWF0KCd3b2ZmMicpLCB1cmwoJy4uL2ZvbnRzL2ZvbnRhd2Vzb21lLXdlYmZvbnQud29mZj92PTQuNy4wJykgZm9ybWF0KCd3b2ZmJyksIHVybCgnLi4vZm9udHMvZm9udGF3ZXNvbWUtd2ViZm9udC50dGY/dj00LjcuMCcpIGZvcm1hdCgndHJ1ZXR5cGUnKSwgdXJsKCcuLi9mb250cy9mb250YXdlc29tZS13ZWJmb250LnN2Zz92PTQuNy4wI2ZvbnRhd2Vzb21lcmVndWxhcicpIGZvcm1hdCgnc3ZnJyk7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG4uZmEge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMTRweC8xIEZvbnRBd2Vzb21lO1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxufVxcbi8qIG1ha2VzIHRoZSBmb250IDMzJSBsYXJnZXIgcmVsYXRpdmUgdG8gdGhlIGljb24gY29udGFpbmVyICovXFxuLmZhLWxnIHtcXG4gIGZvbnQtc2l6ZTogMS4zMzMzMzMzM2VtO1xcbiAgbGluZS1oZWlnaHQ6IDAuNzVlbTtcXG4gIHZlcnRpY2FsLWFsaWduOiAtMTUlO1xcbn1cXG4uZmEtMngge1xcbiAgZm9udC1zaXplOiAyZW07XFxufVxcbi5mYS0zeCB7XFxuICBmb250LXNpemU6IDNlbTtcXG59XFxuLmZhLTR4IHtcXG4gIGZvbnQtc2l6ZTogNGVtO1xcbn1cXG4uZmEtNXgge1xcbiAgZm9udC1zaXplOiA1ZW07XFxufVxcbi5mYS1mdyB7XFxuICB3aWR0aDogMS4yODU3MTQyOWVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uZmEtdWwge1xcbiAgcGFkZGluZy1sZWZ0OiAwO1xcbiAgbWFyZ2luLWxlZnQ6IDIuMTQyODU3MTRlbTtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuLmZhLXVsID4gbGkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uZmEtbGkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogLTIuMTQyODU3MTRlbTtcXG4gIHdpZHRoOiAyLjE0Mjg1NzE0ZW07XFxuICB0b3A6IDAuMTQyODU3MTRlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmZhLWxpLmZhLWxnIHtcXG4gIGxlZnQ6IC0xLjg1NzE0Mjg2ZW07XFxufVxcbi5mYS1ib3JkZXIge1xcbiAgcGFkZGluZzogLjJlbSAuMjVlbSAuMTVlbTtcXG4gIGJvcmRlcjogc29saWQgMC4wOGVtICNlZWVlZWU7XFxuICBib3JkZXItcmFkaXVzOiAuMWVtO1xcbn1cXG4uZmEtcHVsbC1sZWZ0IHtcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG4uZmEtcHVsbC1yaWdodCB7XFxuICBmbG9hdDogcmlnaHQ7XFxufVxcbi5mYS5mYS1wdWxsLWxlZnQge1xcbiAgbWFyZ2luLXJpZ2h0OiAuM2VtO1xcbn1cXG4uZmEuZmEtcHVsbC1yaWdodCB7XFxuICBtYXJnaW4tbGVmdDogLjNlbTtcXG59XFxuLyogRGVwcmVjYXRlZCBhcyBvZiA0LjQuMCAqL1xcbi5wdWxsLXJpZ2h0IHtcXG4gIGZsb2F0OiByaWdodDtcXG59XFxuLnB1bGwtbGVmdCB7XFxuICBmbG9hdDogbGVmdDtcXG59XFxuLmZhLnB1bGwtbGVmdCB7XFxuICBtYXJnaW4tcmlnaHQ6IC4zZW07XFxufVxcbi5mYS5wdWxsLXJpZ2h0IHtcXG4gIG1hcmdpbi1sZWZ0OiAuM2VtO1xcbn1cXG4uZmEtc3BpbiB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogZmEtc3BpbiAycyBpbmZpbml0ZSBsaW5lYXI7XFxuICBhbmltYXRpb246IGZhLXNwaW4gMnMgaW5maW5pdGUgbGluZWFyO1xcbn1cXG4uZmEtcHVsc2Uge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhLXNwaW4gMXMgaW5maW5pdGUgc3RlcHMoOCk7XFxuICBhbmltYXRpb246IGZhLXNwaW4gMXMgaW5maW5pdGUgc3RlcHMoOCk7XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBmYS1zcGluIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGZhLXNwaW4ge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XFxuICB9XFxufVxcbi5mYS1yb3RhdGUtOTAge1xcbiAgLW1zLWZpbHRlcjogXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTEpXFxcIjtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuLmZhLXJvdGF0ZS0xODAge1xcbiAgLW1zLWZpbHRlcjogXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTIpXFxcIjtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG59XFxuLmZhLXJvdGF0ZS0yNzAge1xcbiAgLW1zLWZpbHRlcjogXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTMpXFxcIjtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcXG59XFxuLmZhLWZsaXAtaG9yaXpvbnRhbCB7XFxuICAtbXMtZmlsdGVyOiBcXFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MCwgbWlycm9yPTEpXFxcIjtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XFxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XFxuICB0cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcXG59XFxuLmZhLWZsaXAtdmVydGljYWwge1xcbiAgLW1zLWZpbHRlcjogXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTIsIG1pcnJvcj0xKVxcXCI7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgLTEpO1xcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSwgLTEpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLCAtMSk7XFxufVxcbjpyb290IC5mYS1yb3RhdGUtOTAsXFxuOnJvb3QgLmZhLXJvdGF0ZS0xODAsXFxuOnJvb3QgLmZhLXJvdGF0ZS0yNzAsXFxuOnJvb3QgLmZhLWZsaXAtaG9yaXpvbnRhbCxcXG46cm9vdCAuZmEtZmxpcC12ZXJ0aWNhbCB7XFxuICBmaWx0ZXI6IG5vbmU7XFxufVxcbi5mYS1zdGFjayB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMmVtO1xcbiAgaGVpZ2h0OiAyZW07XFxuICBsaW5lLWhlaWdodDogMmVtO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLmZhLXN0YWNrLTF4LFxcbi5mYS1zdGFjay0yeCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5mYS1zdGFjay0xeCB7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG59XFxuLmZhLXN0YWNrLTJ4IHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbn1cXG4uZmEtaW52ZXJzZSB7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuLyogRm9udCBBd2Vzb21lIHVzZXMgdGhlIFVuaWNvZGUgUHJpdmF0ZSBVc2UgQXJlYSAoUFVBKSB0byBlbnN1cmUgc2NyZWVuXFxuICAgcmVhZGVycyBkbyBub3QgcmVhZCBvZmYgcmFuZG9tIGNoYXJhY3RlcnMgdGhhdCByZXByZXNlbnQgaWNvbnMgKi9cXG4uZmEtZ2xhc3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwMFxcXCI7XFxufVxcbi5mYS1tdXNpYzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDAxXFxcIjtcXG59XFxuLmZhLXNlYXJjaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDAyXFxcIjtcXG59XFxuLmZhLWVudmVsb3BlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwM1xcXCI7XFxufVxcbi5mYS1oZWFydDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDA0XFxcIjtcXG59XFxuLmZhLXN0YXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwNVxcXCI7XFxufVxcbi5mYS1zdGFyLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwNlxcXCI7XFxufVxcbi5mYS11c2VyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMDdcXFwiO1xcbn1cXG4uZmEtZmlsbTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDA4XFxcIjtcXG59XFxuLmZhLXRoLWxhcmdlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMDlcXFwiO1xcbn1cXG4uZmEtdGg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwQVxcXCI7XFxufVxcbi5mYS10aC1saXN0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMEJcXFwiO1xcbn1cXG4uZmEtY2hlY2s6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwQ1xcXCI7XFxufVxcbi5mYS1yZW1vdmU6YmVmb3JlLFxcbi5mYS1jbG9zZTpiZWZvcmUsXFxuLmZhLXRpbWVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMERcXFwiO1xcbn1cXG4uZmEtc2VhcmNoLXBsdXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwRVxcXCI7XFxufVxcbi5mYS1zZWFyY2gtbWludXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxMFxcXCI7XFxufVxcbi5mYS1wb3dlci1vZmY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxMVxcXCI7XFxufVxcbi5mYS1zaWduYWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxMlxcXCI7XFxufVxcbi5mYS1nZWFyOmJlZm9yZSxcXG4uZmEtY29nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMTNcXFwiO1xcbn1cXG4uZmEtdHJhc2gtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDE0XFxcIjtcXG59XFxuLmZhLWhvbWU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxNVxcXCI7XFxufVxcbi5mYS1maWxlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxNlxcXCI7XFxufVxcbi5mYS1jbG9jay1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMTdcXFwiO1xcbn1cXG4uZmEtcm9hZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDE4XFxcIjtcXG59XFxuLmZhLWRvd25sb2FkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMTlcXFwiO1xcbn1cXG4uZmEtYXJyb3ctY2lyY2xlLW8tZG93bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDFBXFxcIjtcXG59XFxuLmZhLWFycm93LWNpcmNsZS1vLXVwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMUJcXFwiO1xcbn1cXG4uZmEtaW5ib3g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxQ1xcXCI7XFxufVxcbi5mYS1wbGF5LWNpcmNsZS1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMURcXFwiO1xcbn1cXG4uZmEtcm90YXRlLXJpZ2h0OmJlZm9yZSxcXG4uZmEtcmVwZWF0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMUVcXFwiO1xcbn1cXG4uZmEtcmVmcmVzaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDIxXFxcIjtcXG59XFxuLmZhLWxpc3QtYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMjJcXFwiO1xcbn1cXG4uZmEtbG9jazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDIzXFxcIjtcXG59XFxuLmZhLWZsYWc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAyNFxcXCI7XFxufVxcbi5mYS1oZWFkcGhvbmVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMjVcXFwiO1xcbn1cXG4uZmEtdm9sdW1lLW9mZjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDI2XFxcIjtcXG59XFxuLmZhLXZvbHVtZS1kb3duOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMjdcXFwiO1xcbn1cXG4uZmEtdm9sdW1lLXVwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMjhcXFwiO1xcbn1cXG4uZmEtcXJjb2RlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMjlcXFwiO1xcbn1cXG4uZmEtYmFyY29kZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDJBXFxcIjtcXG59XFxuLmZhLXRhZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDJCXFxcIjtcXG59XFxuLmZhLXRhZ3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAyQ1xcXCI7XFxufVxcbi5mYS1ib29rOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMkRcXFwiO1xcbn1cXG4uZmEtYm9va21hcms6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAyRVxcXCI7XFxufVxcbi5mYS1wcmludDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDJGXFxcIjtcXG59XFxuLmZhLWNhbWVyYTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDMwXFxcIjtcXG59XFxuLmZhLWZvbnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzMVxcXCI7XFxufVxcbi5mYS1ib2xkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMzJcXFwiO1xcbn1cXG4uZmEtaXRhbGljOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMzNcXFwiO1xcbn1cXG4uZmEtdGV4dC1oZWlnaHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzNFxcXCI7XFxufVxcbi5mYS10ZXh0LXdpZHRoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMzVcXFwiO1xcbn1cXG4uZmEtYWxpZ24tbGVmdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDM2XFxcIjtcXG59XFxuLmZhLWFsaWduLWNlbnRlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDM3XFxcIjtcXG59XFxuLmZhLWFsaWduLXJpZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMzhcXFwiO1xcbn1cXG4uZmEtYWxpZ24tanVzdGlmeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDM5XFxcIjtcXG59XFxuLmZhLWxpc3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzQVxcXCI7XFxufVxcbi5mYS1kZWRlbnQ6YmVmb3JlLFxcbi5mYS1vdXRkZW50OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwM0JcXFwiO1xcbn1cXG4uZmEtaW5kZW50OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwM0NcXFwiO1xcbn1cXG4uZmEtdmlkZW8tY2FtZXJhOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwM0RcXFwiO1xcbn1cXG4uZmEtcGhvdG86YmVmb3JlLFxcbi5mYS1pbWFnZTpiZWZvcmUsXFxuLmZhLXBpY3R1cmUtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDNFXFxcIjtcXG59XFxuLmZhLXBlbmNpbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDQwXFxcIjtcXG59XFxuLmZhLW1hcC1tYXJrZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0MVxcXCI7XFxufVxcbi5mYS1hZGp1c3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0MlxcXCI7XFxufVxcbi5mYS10aW50OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNDNcXFwiO1xcbn1cXG4uZmEtZWRpdDpiZWZvcmUsXFxuLmZhLXBlbmNpbC1zcXVhcmUtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDQ0XFxcIjtcXG59XFxuLmZhLXNoYXJlLXNxdWFyZS1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNDVcXFwiO1xcbn1cXG4uZmEtY2hlY2stc3F1YXJlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0NlxcXCI7XFxufVxcbi5mYS1hcnJvd3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0N1xcXCI7XFxufVxcbi5mYS1zdGVwLWJhY2t3YXJkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNDhcXFwiO1xcbn1cXG4uZmEtZmFzdC1iYWNrd2FyZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDQ5XFxcIjtcXG59XFxuLmZhLWJhY2t3YXJkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNEFcXFwiO1xcbn1cXG4uZmEtcGxheTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDRCXFxcIjtcXG59XFxuLmZhLXBhdXNlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNENcXFwiO1xcbn1cXG4uZmEtc3RvcDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDREXFxcIjtcXG59XFxuLmZhLWZvcndhcmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0RVxcXCI7XFxufVxcbi5mYS1mYXN0LWZvcndhcmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA1MFxcXCI7XFxufVxcbi5mYS1zdGVwLWZvcndhcmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA1MVxcXCI7XFxufVxcbi5mYS1lamVjdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDUyXFxcIjtcXG59XFxuLmZhLWNoZXZyb24tbGVmdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDUzXFxcIjtcXG59XFxuLmZhLWNoZXZyb24tcmlnaHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA1NFxcXCI7XFxufVxcbi5mYS1wbHVzLWNpcmNsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDU1XFxcIjtcXG59XFxuLmZhLW1pbnVzLWNpcmNsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDU2XFxcIjtcXG59XFxuLmZhLXRpbWVzLWNpcmNsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDU3XFxcIjtcXG59XFxuLmZhLWNoZWNrLWNpcmNsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDU4XFxcIjtcXG59XFxuLmZhLXF1ZXN0aW9uLWNpcmNsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDU5XFxcIjtcXG59XFxuLmZhLWluZm8tY2lyY2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNUFcXFwiO1xcbn1cXG4uZmEtY3Jvc3NoYWlyczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDVCXFxcIjtcXG59XFxuLmZhLXRpbWVzLWNpcmNsZS1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNUNcXFwiO1xcbn1cXG4uZmEtY2hlY2stY2lyY2xlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA1RFxcXCI7XFxufVxcbi5mYS1iYW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA1RVxcXCI7XFxufVxcbi5mYS1hcnJvdy1sZWZ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNjBcXFwiO1xcbn1cXG4uZmEtYXJyb3ctcmlnaHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2MVxcXCI7XFxufVxcbi5mYS1hcnJvdy11cDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDYyXFxcIjtcXG59XFxuLmZhLWFycm93LWRvd246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2M1xcXCI7XFxufVxcbi5mYS1tYWlsLWZvcndhcmQ6YmVmb3JlLFxcbi5mYS1zaGFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDY0XFxcIjtcXG59XFxuLmZhLWV4cGFuZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDY1XFxcIjtcXG59XFxuLmZhLWNvbXByZXNzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNjZcXFwiO1xcbn1cXG4uZmEtcGx1czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDY3XFxcIjtcXG59XFxuLmZhLW1pbnVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNjhcXFwiO1xcbn1cXG4uZmEtYXN0ZXJpc2s6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2OVxcXCI7XFxufVxcbi5mYS1leGNsYW1hdGlvbi1jaXJjbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2QVxcXCI7XFxufVxcbi5mYS1naWZ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNkJcXFwiO1xcbn1cXG4uZmEtbGVhZjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDZDXFxcIjtcXG59XFxuLmZhLWZpcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2RFxcXCI7XFxufVxcbi5mYS1leWU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2RVxcXCI7XFxufVxcbi5mYS1leWUtc2xhc2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3MFxcXCI7XFxufVxcbi5mYS13YXJuaW5nOmJlZm9yZSxcXG4uZmEtZXhjbGFtYXRpb24tdHJpYW5nbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3MVxcXCI7XFxufVxcbi5mYS1wbGFuZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDcyXFxcIjtcXG59XFxuLmZhLWNhbGVuZGFyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNzNcXFwiO1xcbn1cXG4uZmEtcmFuZG9tOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNzRcXFwiO1xcbn1cXG4uZmEtY29tbWVudDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDc1XFxcIjtcXG59XFxuLmZhLW1hZ25ldDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDc2XFxcIjtcXG59XFxuLmZhLWNoZXZyb24tdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3N1xcXCI7XFxufVxcbi5mYS1jaGV2cm9uLWRvd246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3OFxcXCI7XFxufVxcbi5mYS1yZXR3ZWV0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNzlcXFwiO1xcbn1cXG4uZmEtc2hvcHBpbmctY2FydDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDdBXFxcIjtcXG59XFxuLmZhLWZvbGRlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDdCXFxcIjtcXG59XFxuLmZhLWZvbGRlci1vcGVuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwN0NcXFwiO1xcbn1cXG4uZmEtYXJyb3dzLXY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3RFxcXCI7XFxufVxcbi5mYS1hcnJvd3MtaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDdFXFxcIjtcXG59XFxuLmZhLWJhci1jaGFydC1vOmJlZm9yZSxcXG4uZmEtYmFyLWNoYXJ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwODBcXFwiO1xcbn1cXG4uZmEtdHdpdHRlci1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA4MVxcXCI7XFxufVxcbi5mYS1mYWNlYm9vay1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA4MlxcXCI7XFxufVxcbi5mYS1jYW1lcmEtcmV0cm86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA4M1xcXCI7XFxufVxcbi5mYS1rZXk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA4NFxcXCI7XFxufVxcbi5mYS1nZWFyczpiZWZvcmUsXFxuLmZhLWNvZ3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA4NVxcXCI7XFxufVxcbi5mYS1jb21tZW50czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDg2XFxcIjtcXG59XFxuLmZhLXRodW1icy1vLXVwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwODdcXFwiO1xcbn1cXG4uZmEtdGh1bWJzLW8tZG93bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDg4XFxcIjtcXG59XFxuLmZhLXN0YXItaGFsZjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDg5XFxcIjtcXG59XFxuLmZhLWhlYXJ0LW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA4QVxcXCI7XFxufVxcbi5mYS1zaWduLW91dDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDhCXFxcIjtcXG59XFxuLmZhLWxpbmtlZGluLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDhDXFxcIjtcXG59XFxuLmZhLXRodW1iLXRhY2s6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA4RFxcXCI7XFxufVxcbi5mYS1leHRlcm5hbC1saW5rOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwOEVcXFwiO1xcbn1cXG4uZmEtc2lnbi1pbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDkwXFxcIjtcXG59XFxuLmZhLXRyb3BoeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDkxXFxcIjtcXG59XFxuLmZhLWdpdGh1Yi1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA5MlxcXCI7XFxufVxcbi5mYS11cGxvYWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA5M1xcXCI7XFxufVxcbi5mYS1sZW1vbi1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwOTRcXFwiO1xcbn1cXG4uZmEtcGhvbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA5NVxcXCI7XFxufVxcbi5mYS1zcXVhcmUtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDk2XFxcIjtcXG59XFxuLmZhLWJvb2ttYXJrLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA5N1xcXCI7XFxufVxcbi5mYS1waG9uZS1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA5OFxcXCI7XFxufVxcbi5mYS10d2l0dGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwOTlcXFwiO1xcbn1cXG4uZmEtZmFjZWJvb2stZjpiZWZvcmUsXFxuLmZhLWZhY2Vib29rOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwOUFcXFwiO1xcbn1cXG4uZmEtZ2l0aHViOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwOUJcXFwiO1xcbn1cXG4uZmEtdW5sb2NrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwOUNcXFwiO1xcbn1cXG4uZmEtY3JlZGl0LWNhcmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA5RFxcXCI7XFxufVxcbi5mYS1mZWVkOmJlZm9yZSxcXG4uZmEtcnNzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwOUVcXFwiO1xcbn1cXG4uZmEtaGRkLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBMFxcXCI7XFxufVxcbi5mYS1idWxsaG9ybjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEExXFxcIjtcXG59XFxuLmZhLWJlbGw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGM1xcXCI7XFxufVxcbi5mYS1jZXJ0aWZpY2F0ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEEzXFxcIjtcXG59XFxuLmZhLWhhbmQtby1yaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEE0XFxcIjtcXG59XFxuLmZhLWhhbmQtby1sZWZ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQTVcXFwiO1xcbn1cXG4uZmEtaGFuZC1vLXVwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQTZcXFwiO1xcbn1cXG4uZmEtaGFuZC1vLWRvd246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBN1xcXCI7XFxufVxcbi5mYS1hcnJvdy1jaXJjbGUtbGVmdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEE4XFxcIjtcXG59XFxuLmZhLWFycm93LWNpcmNsZS1yaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEE5XFxcIjtcXG59XFxuLmZhLWFycm93LWNpcmNsZS11cDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEFBXFxcIjtcXG59XFxuLmZhLWFycm93LWNpcmNsZS1kb3duOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQUJcXFwiO1xcbn1cXG4uZmEtZ2xvYmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBQ1xcXCI7XFxufVxcbi5mYS13cmVuY2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBRFxcXCI7XFxufVxcbi5mYS10YXNrczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEFFXFxcIjtcXG59XFxuLmZhLWZpbHRlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEIwXFxcIjtcXG59XFxuLmZhLWJyaWVmY2FzZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEIxXFxcIjtcXG59XFxuLmZhLWFycm93cy1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBCMlxcXCI7XFxufVxcbi5mYS1ncm91cDpiZWZvcmUsXFxuLmZhLXVzZXJzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzBcXFwiO1xcbn1cXG4uZmEtY2hhaW46YmVmb3JlLFxcbi5mYS1saW5rOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzFcXFwiO1xcbn1cXG4uZmEtY2xvdWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDMlxcXCI7XFxufVxcbi5mYS1mbGFzazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEMzXFxcIjtcXG59XFxuLmZhLWN1dDpiZWZvcmUsXFxuLmZhLXNjaXNzb3JzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzRcXFwiO1xcbn1cXG4uZmEtY29weTpiZWZvcmUsXFxuLmZhLWZpbGVzLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDNVxcXCI7XFxufVxcbi5mYS1wYXBlcmNsaXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDNlxcXCI7XFxufVxcbi5mYS1zYXZlOmJlZm9yZSxcXG4uZmEtZmxvcHB5LW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDN1xcXCI7XFxufVxcbi5mYS1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDOFxcXCI7XFxufVxcbi5mYS1uYXZpY29uOmJlZm9yZSxcXG4uZmEtcmVvcmRlcjpiZWZvcmUsXFxuLmZhLWJhcnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDOVxcXCI7XFxufVxcbi5mYS1saXN0LXVsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQ0FcXFwiO1xcbn1cXG4uZmEtbGlzdC1vbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMENCXFxcIjtcXG59XFxuLmZhLXN0cmlrZXRocm91Z2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDQ1xcXCI7XFxufVxcbi5mYS11bmRlcmxpbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDRFxcXCI7XFxufVxcbi5mYS10YWJsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMENFXFxcIjtcXG59XFxuLmZhLW1hZ2ljOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRDBcXFwiO1xcbn1cXG4uZmEtdHJ1Y2s6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBEMVxcXCI7XFxufVxcbi5mYS1waW50ZXJlc3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBEMlxcXCI7XFxufVxcbi5mYS1waW50ZXJlc3Qtc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRDNcXFwiO1xcbn1cXG4uZmEtZ29vZ2xlLXBsdXMtc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRDRcXFwiO1xcbn1cXG4uZmEtZ29vZ2xlLXBsdXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBENVxcXCI7XFxufVxcbi5mYS1tb25leTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEQ2XFxcIjtcXG59XFxuLmZhLWNhcmV0LWRvd246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBEN1xcXCI7XFxufVxcbi5mYS1jYXJldC11cDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEQ4XFxcIjtcXG59XFxuLmZhLWNhcmV0LWxlZnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBEOVxcXCI7XFxufVxcbi5mYS1jYXJldC1yaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMERBXFxcIjtcXG59XFxuLmZhLWNvbHVtbnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBEQlxcXCI7XFxufVxcbi5mYS11bnNvcnRlZDpiZWZvcmUsXFxuLmZhLXNvcnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBEQ1xcXCI7XFxufVxcbi5mYS1zb3J0LWRvd246YmVmb3JlLFxcbi5mYS1zb3J0LWRlc2M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBERFxcXCI7XFxufVxcbi5mYS1zb3J0LXVwOmJlZm9yZSxcXG4uZmEtc29ydC1hc2M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBERVxcXCI7XFxufVxcbi5mYS1lbnZlbG9wZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEUwXFxcIjtcXG59XFxuLmZhLWxpbmtlZGluOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRTFcXFwiO1xcbn1cXG4uZmEtcm90YXRlLWxlZnQ6YmVmb3JlLFxcbi5mYS11bmRvOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRTJcXFwiO1xcbn1cXG4uZmEtbGVnYWw6YmVmb3JlLFxcbi5mYS1nYXZlbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEUzXFxcIjtcXG59XFxuLmZhLWRhc2hib2FyZDpiZWZvcmUsXFxuLmZhLXRhY2hvbWV0ZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFNFxcXCI7XFxufVxcbi5mYS1jb21tZW50LW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFNVxcXCI7XFxufVxcbi5mYS1jb21tZW50cy1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRTZcXFwiO1xcbn1cXG4uZmEtZmxhc2g6YmVmb3JlLFxcbi5mYS1ib2x0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRTdcXFwiO1xcbn1cXG4uZmEtc2l0ZW1hcDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEU4XFxcIjtcXG59XFxuLmZhLXVtYnJlbGxhOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRTlcXFwiO1xcbn1cXG4uZmEtcGFzdGU6YmVmb3JlLFxcbi5mYS1jbGlwYm9hcmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFQVxcXCI7XFxufVxcbi5mYS1saWdodGJ1bGItbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEVCXFxcIjtcXG59XFxuLmZhLWV4Y2hhbmdlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRUNcXFwiO1xcbn1cXG4uZmEtY2xvdWQtZG93bmxvYWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFRFxcXCI7XFxufVxcbi5mYS1jbG91ZC11cGxvYWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFRVxcXCI7XFxufVxcbi5mYS11c2VyLW1kOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRjBcXFwiO1xcbn1cXG4uZmEtc3RldGhvc2NvcGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGMVxcXCI7XFxufVxcbi5mYS1zdWl0Y2FzZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEYyXFxcIjtcXG59XFxuLmZhLWJlbGwtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEEyXFxcIjtcXG59XFxuLmZhLWNvZmZlZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEY0XFxcIjtcXG59XFxuLmZhLWN1dGxlcnk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGNVxcXCI7XFxufVxcbi5mYS1maWxlLXRleHQtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEY2XFxcIjtcXG59XFxuLmZhLWJ1aWxkaW5nLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGN1xcXCI7XFxufVxcbi5mYS1ob3NwaXRhbC1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRjhcXFwiO1xcbn1cXG4uZmEtYW1idWxhbmNlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRjlcXFwiO1xcbn1cXG4uZmEtbWVka2l0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRkFcXFwiO1xcbn1cXG4uZmEtZmlnaHRlci1qZXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGQlxcXCI7XFxufVxcbi5mYS1iZWVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRkNcXFwiO1xcbn1cXG4uZmEtaC1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGRFxcXCI7XFxufVxcbi5mYS1wbHVzLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEZFXFxcIjtcXG59XFxuLmZhLWFuZ2xlLWRvdWJsZS1sZWZ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMDBcXFwiO1xcbn1cXG4uZmEtYW5nbGUtZG91YmxlLXJpZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMDFcXFwiO1xcbn1cXG4uZmEtYW5nbGUtZG91YmxlLXVwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMDJcXFwiO1xcbn1cXG4uZmEtYW5nbGUtZG91YmxlLWRvd246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwM1xcXCI7XFxufVxcbi5mYS1hbmdsZS1sZWZ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMDRcXFwiO1xcbn1cXG4uZmEtYW5nbGUtcmlnaHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwNVxcXCI7XFxufVxcbi5mYS1hbmdsZS11cDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTA2XFxcIjtcXG59XFxuLmZhLWFuZ2xlLWRvd246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwN1xcXCI7XFxufVxcbi5mYS1kZXNrdG9wOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMDhcXFwiO1xcbn1cXG4uZmEtbGFwdG9wOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMDlcXFwiO1xcbn1cXG4uZmEtdGFibGV0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMEFcXFwiO1xcbn1cXG4uZmEtbW9iaWxlLXBob25lOmJlZm9yZSxcXG4uZmEtbW9iaWxlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMEJcXFwiO1xcbn1cXG4uZmEtY2lyY2xlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwQ1xcXCI7XFxufVxcbi5mYS1xdW90ZS1sZWZ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMERcXFwiO1xcbn1cXG4uZmEtcXVvdGUtcmlnaHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwRVxcXCI7XFxufVxcbi5mYS1zcGlubmVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMTBcXFwiO1xcbn1cXG4uZmEtY2lyY2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMTFcXFwiO1xcbn1cXG4uZmEtbWFpbC1yZXBseTpiZWZvcmUsXFxuLmZhLXJlcGx5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMTJcXFwiO1xcbn1cXG4uZmEtZ2l0aHViLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTEzXFxcIjtcXG59XFxuLmZhLWZvbGRlci1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMTRcXFwiO1xcbn1cXG4uZmEtZm9sZGVyLW9wZW4tbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTE1XFxcIjtcXG59XFxuLmZhLXNtaWxlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExOFxcXCI7XFxufVxcbi5mYS1mcm93bi1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMTlcXFwiO1xcbn1cXG4uZmEtbWVoLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExQVxcXCI7XFxufVxcbi5mYS1nYW1lcGFkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMUJcXFwiO1xcbn1cXG4uZmEta2V5Ym9hcmQtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTFDXFxcIjtcXG59XFxuLmZhLWZsYWctbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTFEXFxcIjtcXG59XFxuLmZhLWZsYWctY2hlY2tlcmVkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMUVcXFwiO1xcbn1cXG4uZmEtdGVybWluYWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyMFxcXCI7XFxufVxcbi5mYS1jb2RlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjFcXFwiO1xcbn1cXG4uZmEtbWFpbC1yZXBseS1hbGw6YmVmb3JlLFxcbi5mYS1yZXBseS1hbGw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyMlxcXCI7XFxufVxcbi5mYS1zdGFyLWhhbGYtZW1wdHk6YmVmb3JlLFxcbi5mYS1zdGFyLWhhbGYtZnVsbDpiZWZvcmUsXFxuLmZhLXN0YXItaGFsZi1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjNcXFwiO1xcbn1cXG4uZmEtbG9jYXRpb24tYXJyb3c6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyNFxcXCI7XFxufVxcbi5mYS1jcm9wOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjVcXFwiO1xcbn1cXG4uZmEtY29kZS1mb3JrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjZcXFwiO1xcbn1cXG4uZmEtdW5saW5rOmJlZm9yZSxcXG4uZmEtY2hhaW4tYnJva2VuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjdcXFwiO1xcbn1cXG4uZmEtcXVlc3Rpb246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyOFxcXCI7XFxufVxcbi5mYS1pbmZvOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjlcXFwiO1xcbn1cXG4uZmEtZXhjbGFtYXRpb246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyQVxcXCI7XFxufVxcbi5mYS1zdXBlcnNjcmlwdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTJCXFxcIjtcXG59XFxuLmZhLXN1YnNjcmlwdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTJDXFxcIjtcXG59XFxuLmZhLWVyYXNlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTJEXFxcIjtcXG59XFxuLmZhLXB1enpsZS1waWVjZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTJFXFxcIjtcXG59XFxuLmZhLW1pY3JvcGhvbmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEzMFxcXCI7XFxufVxcbi5mYS1taWNyb3Bob25lLXNsYXNoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMzFcXFwiO1xcbn1cXG4uZmEtc2hpZWxkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMzJcXFwiO1xcbn1cXG4uZmEtY2FsZW5kYXItbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTMzXFxcIjtcXG59XFxuLmZhLWZpcmUtZXh0aW5ndWlzaGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMzRcXFwiO1xcbn1cXG4uZmEtcm9ja2V0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMzVcXFwiO1xcbn1cXG4uZmEtbWF4Y2RuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMzZcXFwiO1xcbn1cXG4uZmEtY2hldnJvbi1jaXJjbGUtbGVmdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTM3XFxcIjtcXG59XFxuLmZhLWNoZXZyb24tY2lyY2xlLXJpZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMzhcXFwiO1xcbn1cXG4uZmEtY2hldnJvbi1jaXJjbGUtdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEzOVxcXCI7XFxufVxcbi5mYS1jaGV2cm9uLWNpcmNsZS1kb3duOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxM0FcXFwiO1xcbn1cXG4uZmEtaHRtbDU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEzQlxcXCI7XFxufVxcbi5mYS1jc3MzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxM0NcXFwiO1xcbn1cXG4uZmEtYW5jaG9yOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxM0RcXFwiO1xcbn1cXG4uZmEtdW5sb2NrLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTNFXFxcIjtcXG59XFxuLmZhLWJ1bGxzZXllOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNDBcXFwiO1xcbn1cXG4uZmEtZWxsaXBzaXMtaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTQxXFxcIjtcXG59XFxuLmZhLWVsbGlwc2lzLXY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE0MlxcXCI7XFxufVxcbi5mYS1yc3Mtc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNDNcXFwiO1xcbn1cXG4uZmEtcGxheS1jaXJjbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE0NFxcXCI7XFxufVxcbi5mYS10aWNrZXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE0NVxcXCI7XFxufVxcbi5mYS1taW51cy1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE0NlxcXCI7XFxufVxcbi5mYS1taW51cy1zcXVhcmUtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTQ3XFxcIjtcXG59XFxuLmZhLWxldmVsLXVwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNDhcXFwiO1xcbn1cXG4uZmEtbGV2ZWwtZG93bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTQ5XFxcIjtcXG59XFxuLmZhLWNoZWNrLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTRBXFxcIjtcXG59XFxuLmZhLXBlbmNpbC1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE0QlxcXCI7XFxufVxcbi5mYS1leHRlcm5hbC1saW5rLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTRDXFxcIjtcXG59XFxuLmZhLXNoYXJlLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTREXFxcIjtcXG59XFxuLmZhLWNvbXBhc3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE0RVxcXCI7XFxufVxcbi5mYS10b2dnbGUtZG93bjpiZWZvcmUsXFxuLmZhLWNhcmV0LXNxdWFyZS1vLWRvd246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE1MFxcXCI7XFxufVxcbi5mYS10b2dnbGUtdXA6YmVmb3JlLFxcbi5mYS1jYXJldC1zcXVhcmUtby11cDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTUxXFxcIjtcXG59XFxuLmZhLXRvZ2dsZS1yaWdodDpiZWZvcmUsXFxuLmZhLWNhcmV0LXNxdWFyZS1vLXJpZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNTJcXFwiO1xcbn1cXG4uZmEtZXVybzpiZWZvcmUsXFxuLmZhLWV1cjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTUzXFxcIjtcXG59XFxuLmZhLWdicDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTU0XFxcIjtcXG59XFxuLmZhLWRvbGxhcjpiZWZvcmUsXFxuLmZhLXVzZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTU1XFxcIjtcXG59XFxuLmZhLXJ1cGVlOmJlZm9yZSxcXG4uZmEtaW5yOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNTZcXFwiO1xcbn1cXG4uZmEtY255OmJlZm9yZSxcXG4uZmEtcm1iOmJlZm9yZSxcXG4uZmEteWVuOmJlZm9yZSxcXG4uZmEtanB5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNTdcXFwiO1xcbn1cXG4uZmEtcnVibGU6YmVmb3JlLFxcbi5mYS1yb3VibGU6YmVmb3JlLFxcbi5mYS1ydWI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE1OFxcXCI7XFxufVxcbi5mYS13b246YmVmb3JlLFxcbi5mYS1rcnc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE1OVxcXCI7XFxufVxcbi5mYS1iaXRjb2luOmJlZm9yZSxcXG4uZmEtYnRjOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNUFcXFwiO1xcbn1cXG4uZmEtZmlsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTVCXFxcIjtcXG59XFxuLmZhLWZpbGUtdGV4dDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTVDXFxcIjtcXG59XFxuLmZhLXNvcnQtYWxwaGEtYXNjOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNURcXFwiO1xcbn1cXG4uZmEtc29ydC1hbHBoYS1kZXNjOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNUVcXFwiO1xcbn1cXG4uZmEtc29ydC1hbW91bnQtYXNjOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNjBcXFwiO1xcbn1cXG4uZmEtc29ydC1hbW91bnQtZGVzYzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTYxXFxcIjtcXG59XFxuLmZhLXNvcnQtbnVtZXJpYy1hc2M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE2MlxcXCI7XFxufVxcbi5mYS1zb3J0LW51bWVyaWMtZGVzYzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTYzXFxcIjtcXG59XFxuLmZhLXRodW1icy11cDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTY0XFxcIjtcXG59XFxuLmZhLXRodW1icy1kb3duOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNjVcXFwiO1xcbn1cXG4uZmEteW91dHViZS1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE2NlxcXCI7XFxufVxcbi5mYS15b3V0dWJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNjdcXFwiO1xcbn1cXG4uZmEteGluZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTY4XFxcIjtcXG59XFxuLmZhLXhpbmctc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNjlcXFwiO1xcbn1cXG4uZmEteW91dHViZS1wbGF5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNkFcXFwiO1xcbn1cXG4uZmEtZHJvcGJveDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTZCXFxcIjtcXG59XFxuLmZhLXN0YWNrLW92ZXJmbG93OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNkNcXFwiO1xcbn1cXG4uZmEtaW5zdGFncmFtOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNkRcXFwiO1xcbn1cXG4uZmEtZmxpY2tyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNkVcXFwiO1xcbn1cXG4uZmEtYWRuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNzBcXFwiO1xcbn1cXG4uZmEtYml0YnVja2V0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNzFcXFwiO1xcbn1cXG4uZmEtYml0YnVja2V0LXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTcyXFxcIjtcXG59XFxuLmZhLXR1bWJscjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTczXFxcIjtcXG59XFxuLmZhLXR1bWJsci1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE3NFxcXCI7XFxufVxcbi5mYS1sb25nLWFycm93LWRvd246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE3NVxcXCI7XFxufVxcbi5mYS1sb25nLWFycm93LXVwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNzZcXFwiO1xcbn1cXG4uZmEtbG9uZy1hcnJvdy1sZWZ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNzdcXFwiO1xcbn1cXG4uZmEtbG9uZy1hcnJvdy1yaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTc4XFxcIjtcXG59XFxuLmZhLWFwcGxlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNzlcXFwiO1xcbn1cXG4uZmEtd2luZG93czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTdBXFxcIjtcXG59XFxuLmZhLWFuZHJvaWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE3QlxcXCI7XFxufVxcbi5mYS1saW51eDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTdDXFxcIjtcXG59XFxuLmZhLWRyaWJiYmxlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxN0RcXFwiO1xcbn1cXG4uZmEtc2t5cGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE3RVxcXCI7XFxufVxcbi5mYS1mb3Vyc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxODBcXFwiO1xcbn1cXG4uZmEtdHJlbGxvOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxODFcXFwiO1xcbn1cXG4uZmEtZmVtYWxlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxODJcXFwiO1xcbn1cXG4uZmEtbWFsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTgzXFxcIjtcXG59XFxuLmZhLWdpdHRpcDpiZWZvcmUsXFxuLmZhLWdyYXRpcGF5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxODRcXFwiO1xcbn1cXG4uZmEtc3VuLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE4NVxcXCI7XFxufVxcbi5mYS1tb29uLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE4NlxcXCI7XFxufVxcbi5mYS1hcmNoaXZlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxODdcXFwiO1xcbn1cXG4uZmEtYnVnOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxODhcXFwiO1xcbn1cXG4uZmEtdms6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE4OVxcXCI7XFxufVxcbi5mYS13ZWlibzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMThBXFxcIjtcXG59XFxuLmZhLXJlbnJlbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMThCXFxcIjtcXG59XFxuLmZhLXBhZ2VsaW5lczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMThDXFxcIjtcXG59XFxuLmZhLXN0YWNrLWV4Y2hhbmdlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxOERcXFwiO1xcbn1cXG4uZmEtYXJyb3ctY2lyY2xlLW8tcmlnaHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE4RVxcXCI7XFxufVxcbi5mYS1hcnJvdy1jaXJjbGUtby1sZWZ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxOTBcXFwiO1xcbn1cXG4uZmEtdG9nZ2xlLWxlZnQ6YmVmb3JlLFxcbi5mYS1jYXJldC1zcXVhcmUtby1sZWZ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxOTFcXFwiO1xcbn1cXG4uZmEtZG90LWNpcmNsZS1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxOTJcXFwiO1xcbn1cXG4uZmEtd2hlZWxjaGFpcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTkzXFxcIjtcXG59XFxuLmZhLXZpbWVvLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTk0XFxcIjtcXG59XFxuLmZhLXR1cmtpc2gtbGlyYTpiZWZvcmUsXFxuLmZhLXRyeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTk1XFxcIjtcXG59XFxuLmZhLXBsdXMtc3F1YXJlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE5NlxcXCI7XFxufVxcbi5mYS1zcGFjZS1zaHV0dGxlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxOTdcXFwiO1xcbn1cXG4uZmEtc2xhY2s6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE5OFxcXCI7XFxufVxcbi5mYS1lbnZlbG9wZS1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE5OVxcXCI7XFxufVxcbi5mYS13b3JkcHJlc3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE5QVxcXCI7XFxufVxcbi5mYS1vcGVuaWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE5QlxcXCI7XFxufVxcbi5mYS1pbnN0aXR1dGlvbjpiZWZvcmUsXFxuLmZhLWJhbms6YmVmb3JlLFxcbi5mYS11bml2ZXJzaXR5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxOUNcXFwiO1xcbn1cXG4uZmEtbW9ydGFyLWJvYXJkOmJlZm9yZSxcXG4uZmEtZ3JhZHVhdGlvbi1jYXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE5RFxcXCI7XFxufVxcbi5mYS15YWhvbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTlFXFxcIjtcXG59XFxuLmZhLWdvb2dsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUEwXFxcIjtcXG59XFxuLmZhLXJlZGRpdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUExXFxcIjtcXG59XFxuLmZhLXJlZGRpdC1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFBMlxcXCI7XFxufVxcbi5mYS1zdHVtYmxldXBvbi1jaXJjbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFBM1xcXCI7XFxufVxcbi5mYS1zdHVtYmxldXBvbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUE0XFxcIjtcXG59XFxuLmZhLWRlbGljaW91czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUE1XFxcIjtcXG59XFxuLmZhLWRpZ2c6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFBNlxcXCI7XFxufVxcbi5mYS1waWVkLXBpcGVyLXBwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxQTdcXFwiO1xcbn1cXG4uZmEtcGllZC1waXBlci1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFBOFxcXCI7XFxufVxcbi5mYS1kcnVwYWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFBOVxcXCI7XFxufVxcbi5mYS1qb29tbGE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFBQVxcXCI7XFxufVxcbi5mYS1sYW5ndWFnZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUFCXFxcIjtcXG59XFxuLmZhLWZheDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUFDXFxcIjtcXG59XFxuLmZhLWJ1aWxkaW5nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxQURcXFwiO1xcbn1cXG4uZmEtY2hpbGQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFBRVxcXCI7XFxufVxcbi5mYS1wYXc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFCMFxcXCI7XFxufVxcbi5mYS1zcG9vbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUIxXFxcIjtcXG59XFxuLmZhLWN1YmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFCMlxcXCI7XFxufVxcbi5mYS1jdWJlczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUIzXFxcIjtcXG59XFxuLmZhLWJlaGFuY2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFCNFxcXCI7XFxufVxcbi5mYS1iZWhhbmNlLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUI1XFxcIjtcXG59XFxuLmZhLXN0ZWFtOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxQjZcXFwiO1xcbn1cXG4uZmEtc3RlYW0tc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxQjdcXFwiO1xcbn1cXG4uZmEtcmVjeWNsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUI4XFxcIjtcXG59XFxuLmZhLWF1dG9tb2JpbGU6YmVmb3JlLFxcbi5mYS1jYXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFCOVxcXCI7XFxufVxcbi5mYS1jYWI6YmVmb3JlLFxcbi5mYS10YXhpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxQkFcXFwiO1xcbn1cXG4uZmEtdHJlZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUJCXFxcIjtcXG59XFxuLmZhLXNwb3RpZnk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFCQ1xcXCI7XFxufVxcbi5mYS1kZXZpYW50YXJ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxQkRcXFwiO1xcbn1cXG4uZmEtc291bmRjbG91ZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUJFXFxcIjtcXG59XFxuLmZhLWRhdGFiYXNlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxQzBcXFwiO1xcbn1cXG4uZmEtZmlsZS1wZGYtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUMxXFxcIjtcXG59XFxuLmZhLWZpbGUtd29yZC1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxQzJcXFwiO1xcbn1cXG4uZmEtZmlsZS1leGNlbC1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxQzNcXFwiO1xcbn1cXG4uZmEtZmlsZS1wb3dlcnBvaW50LW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFDNFxcXCI7XFxufVxcbi5mYS1maWxlLXBob3RvLW86YmVmb3JlLFxcbi5mYS1maWxlLXBpY3R1cmUtbzpiZWZvcmUsXFxuLmZhLWZpbGUtaW1hZ2UtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUM1XFxcIjtcXG59XFxuLmZhLWZpbGUtemlwLW86YmVmb3JlLFxcbi5mYS1maWxlLWFyY2hpdmUtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUM2XFxcIjtcXG59XFxuLmZhLWZpbGUtc291bmQtbzpiZWZvcmUsXFxuLmZhLWZpbGUtYXVkaW8tbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUM3XFxcIjtcXG59XFxuLmZhLWZpbGUtbW92aWUtbzpiZWZvcmUsXFxuLmZhLWZpbGUtdmlkZW8tbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUM4XFxcIjtcXG59XFxuLmZhLWZpbGUtY29kZS1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxQzlcXFwiO1xcbn1cXG4uZmEtdmluZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUNBXFxcIjtcXG59XFxuLmZhLWNvZGVwZW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFDQlxcXCI7XFxufVxcbi5mYS1qc2ZpZGRsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUNDXFxcIjtcXG59XFxuLmZhLWxpZmUtYm91eTpiZWZvcmUsXFxuLmZhLWxpZmUtYnVveTpiZWZvcmUsXFxuLmZhLWxpZmUtc2F2ZXI6YmVmb3JlLFxcbi5mYS1zdXBwb3J0OmJlZm9yZSxcXG4uZmEtbGlmZS1yaW5nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxQ0RcXFwiO1xcbn1cXG4uZmEtY2lyY2xlLW8tbm90Y2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFDRVxcXCI7XFxufVxcbi5mYS1yYTpiZWZvcmUsXFxuLmZhLXJlc2lzdGFuY2U6YmVmb3JlLFxcbi5mYS1yZWJlbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUQwXFxcIjtcXG59XFxuLmZhLWdlOmJlZm9yZSxcXG4uZmEtZW1waXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRDFcXFwiO1xcbn1cXG4uZmEtZ2l0LXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUQyXFxcIjtcXG59XFxuLmZhLWdpdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUQzXFxcIjtcXG59XFxuLmZhLXktY29tYmluYXRvci1zcXVhcmU6YmVmb3JlLFxcbi5mYS15Yy1zcXVhcmU6YmVmb3JlLFxcbi5mYS1oYWNrZXItbmV3czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUQ0XFxcIjtcXG59XFxuLmZhLXRlbmNlbnQtd2VpYm86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFENVxcXCI7XFxufVxcbi5mYS1xcTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUQ2XFxcIjtcXG59XFxuLmZhLXdlY2hhdDpiZWZvcmUsXFxuLmZhLXdlaXhpbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUQ3XFxcIjtcXG59XFxuLmZhLXNlbmQ6YmVmb3JlLFxcbi5mYS1wYXBlci1wbGFuZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUQ4XFxcIjtcXG59XFxuLmZhLXNlbmQtbzpiZWZvcmUsXFxuLmZhLXBhcGVyLXBsYW5lLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFEOVxcXCI7XFxufVxcbi5mYS1oaXN0b3J5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxREFcXFwiO1xcbn1cXG4uZmEtY2lyY2xlLXRoaW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFEQlxcXCI7XFxufVxcbi5mYS1oZWFkZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFEQ1xcXCI7XFxufVxcbi5mYS1wYXJhZ3JhcGg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFERFxcXCI7XFxufVxcbi5mYS1zbGlkZXJzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxREVcXFwiO1xcbn1cXG4uZmEtc2hhcmUtYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRTBcXFwiO1xcbn1cXG4uZmEtc2hhcmUtYWx0LXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUUxXFxcIjtcXG59XFxuLmZhLWJvbWI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFFMlxcXCI7XFxufVxcbi5mYS1zb2NjZXItYmFsbC1vOmJlZm9yZSxcXG4uZmEtZnV0Ym9sLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFFM1xcXCI7XFxufVxcbi5mYS10dHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFFNFxcXCI7XFxufVxcbi5mYS1iaW5vY3VsYXJzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRTVcXFwiO1xcbn1cXG4uZmEtcGx1ZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUU2XFxcIjtcXG59XFxuLmZhLXNsaWRlc2hhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFFN1xcXCI7XFxufVxcbi5mYS10d2l0Y2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFFOFxcXCI7XFxufVxcbi5mYS15ZWxwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRTlcXFwiO1xcbn1cXG4uZmEtbmV3c3BhcGVyLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFFQVxcXCI7XFxufVxcbi5mYS13aWZpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRUJcXFwiO1xcbn1cXG4uZmEtY2FsY3VsYXRvcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUVDXFxcIjtcXG59XFxuLmZhLXBheXBhbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUVEXFxcIjtcXG59XFxuLmZhLWdvb2dsZS13YWxsZXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFFRVxcXCI7XFxufVxcbi5mYS1jYy12aXNhOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRjBcXFwiO1xcbn1cXG4uZmEtY2MtbWFzdGVyY2FyZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUYxXFxcIjtcXG59XFxuLmZhLWNjLWRpc2NvdmVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRjJcXFwiO1xcbn1cXG4uZmEtY2MtYW1leDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUYzXFxcIjtcXG59XFxuLmZhLWNjLXBheXBhbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUY0XFxcIjtcXG59XFxuLmZhLWNjLXN0cmlwZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUY1XFxcIjtcXG59XFxuLmZhLWJlbGwtc2xhc2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFGNlxcXCI7XFxufVxcbi5mYS1iZWxsLXNsYXNoLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFGN1xcXCI7XFxufVxcbi5mYS10cmFzaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUY4XFxcIjtcXG59XFxuLmZhLWNvcHlyaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUY5XFxcIjtcXG59XFxuLmZhLWF0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRkFcXFwiO1xcbn1cXG4uZmEtZXllZHJvcHBlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUZCXFxcIjtcXG59XFxuLmZhLXBhaW50LWJydXNoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRkNcXFwiO1xcbn1cXG4uZmEtYmlydGhkYXktY2FrZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUZEXFxcIjtcXG59XFxuLmZhLWFyZWEtY2hhcnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFGRVxcXCI7XFxufVxcbi5mYS1waWUtY2hhcnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIwMFxcXCI7XFxufVxcbi5mYS1saW5lLWNoYXJ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMDFcXFwiO1xcbn1cXG4uZmEtbGFzdGZtOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMDJcXFwiO1xcbn1cXG4uZmEtbGFzdGZtLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjAzXFxcIjtcXG59XFxuLmZhLXRvZ2dsZS1vZmY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIwNFxcXCI7XFxufVxcbi5mYS10b2dnbGUtb246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIwNVxcXCI7XFxufVxcbi5mYS1iaWN5Y2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMDZcXFwiO1xcbn1cXG4uZmEtYnVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMDdcXFwiO1xcbn1cXG4uZmEtaW94aG9zdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjA4XFxcIjtcXG59XFxuLmZhLWFuZ2VsbGlzdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjA5XFxcIjtcXG59XFxuLmZhLWNjOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMEFcXFwiO1xcbn1cXG4uZmEtc2hla2VsOmJlZm9yZSxcXG4uZmEtc2hlcWVsOmJlZm9yZSxcXG4uZmEtaWxzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMEJcXFwiO1xcbn1cXG4uZmEtbWVhbnBhdGg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIwQ1xcXCI7XFxufVxcbi5mYS1idXlzZWxsYWRzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMERcXFwiO1xcbn1cXG4uZmEtY29ubmVjdGRldmVsb3A6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIwRVxcXCI7XFxufVxcbi5mYS1kYXNoY3ViZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjEwXFxcIjtcXG59XFxuLmZhLWZvcnVtYmVlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMTFcXFwiO1xcbn1cXG4uZmEtbGVhbnB1YjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjEyXFxcIjtcXG59XFxuLmZhLXNlbGxzeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjEzXFxcIjtcXG59XFxuLmZhLXNoaXJ0c2luYnVsazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjE0XFxcIjtcXG59XFxuLmZhLXNpbXBseWJ1aWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMTVcXFwiO1xcbn1cXG4uZmEtc2t5YXRsYXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIxNlxcXCI7XFxufVxcbi5mYS1jYXJ0LXBsdXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIxN1xcXCI7XFxufVxcbi5mYS1jYXJ0LWFycm93LWRvd246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIxOFxcXCI7XFxufVxcbi5mYS1kaWFtb25kOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMTlcXFwiO1xcbn1cXG4uZmEtc2hpcDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjFBXFxcIjtcXG59XFxuLmZhLXVzZXItc2VjcmV0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMUJcXFwiO1xcbn1cXG4uZmEtbW90b3JjeWNsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjFDXFxcIjtcXG59XFxuLmZhLXN0cmVldC12aWV3OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMURcXFwiO1xcbn1cXG4uZmEtaGVhcnRiZWF0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMUVcXFwiO1xcbn1cXG4uZmEtdmVudXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIyMVxcXCI7XFxufVxcbi5mYS1tYXJzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMjJcXFwiO1xcbn1cXG4uZmEtbWVyY3VyeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjIzXFxcIjtcXG59XFxuLmZhLWludGVyc2V4OmJlZm9yZSxcXG4uZmEtdHJhbnNnZW5kZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIyNFxcXCI7XFxufVxcbi5mYS10cmFuc2dlbmRlci1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIyNVxcXCI7XFxufVxcbi5mYS12ZW51cy1kb3VibGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIyNlxcXCI7XFxufVxcbi5mYS1tYXJzLWRvdWJsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjI3XFxcIjtcXG59XFxuLmZhLXZlbnVzLW1hcnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIyOFxcXCI7XFxufVxcbi5mYS1tYXJzLXN0cm9rZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjI5XFxcIjtcXG59XFxuLmZhLW1hcnMtc3Ryb2tlLXY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIyQVxcXCI7XFxufVxcbi5mYS1tYXJzLXN0cm9rZS1oOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMkJcXFwiO1xcbn1cXG4uZmEtbmV1dGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMkNcXFwiO1xcbn1cXG4uZmEtZ2VuZGVybGVzczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjJEXFxcIjtcXG59XFxuLmZhLWZhY2Vib29rLW9mZmljaWFsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMzBcXFwiO1xcbn1cXG4uZmEtcGludGVyZXN0LXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIzMVxcXCI7XFxufVxcbi5mYS13aGF0c2FwcDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjMyXFxcIjtcXG59XFxuLmZhLXNlcnZlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjMzXFxcIjtcXG59XFxuLmZhLXVzZXItcGx1czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjM0XFxcIjtcXG59XFxuLmZhLXVzZXItdGltZXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIzNVxcXCI7XFxufVxcbi5mYS1ob3RlbDpiZWZvcmUsXFxuLmZhLWJlZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjM2XFxcIjtcXG59XFxuLmZhLXZpYWNvaW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIzN1xcXCI7XFxufVxcbi5mYS10cmFpbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjM4XFxcIjtcXG59XFxuLmZhLXN1YndheTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjM5XFxcIjtcXG59XFxuLmZhLW1lZGl1bTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjNBXFxcIjtcXG59XFxuLmZhLXljOmJlZm9yZSxcXG4uZmEteS1jb21iaW5hdG9yOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyM0JcXFwiO1xcbn1cXG4uZmEtb3B0aW4tbW9uc3RlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjNDXFxcIjtcXG59XFxuLmZhLW9wZW5jYXJ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyM0RcXFwiO1xcbn1cXG4uZmEtZXhwZWRpdGVkc3NsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyM0VcXFwiO1xcbn1cXG4uZmEtYmF0dGVyeS00OmJlZm9yZSxcXG4uZmEtYmF0dGVyeTpiZWZvcmUsXFxuLmZhLWJhdHRlcnktZnVsbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjQwXFxcIjtcXG59XFxuLmZhLWJhdHRlcnktMzpiZWZvcmUsXFxuLmZhLWJhdHRlcnktdGhyZWUtcXVhcnRlcnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI0MVxcXCI7XFxufVxcbi5mYS1iYXR0ZXJ5LTI6YmVmb3JlLFxcbi5mYS1iYXR0ZXJ5LWhhbGY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI0MlxcXCI7XFxufVxcbi5mYS1iYXR0ZXJ5LTE6YmVmb3JlLFxcbi5mYS1iYXR0ZXJ5LXF1YXJ0ZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI0M1xcXCI7XFxufVxcbi5mYS1iYXR0ZXJ5LTA6YmVmb3JlLFxcbi5mYS1iYXR0ZXJ5LWVtcHR5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNDRcXFwiO1xcbn1cXG4uZmEtbW91c2UtcG9pbnRlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjQ1XFxcIjtcXG59XFxuLmZhLWktY3Vyc29yOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNDZcXFwiO1xcbn1cXG4uZmEtb2JqZWN0LWdyb3VwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNDdcXFwiO1xcbn1cXG4uZmEtb2JqZWN0LXVuZ3JvdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI0OFxcXCI7XFxufVxcbi5mYS1zdGlja3ktbm90ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjQ5XFxcIjtcXG59XFxuLmZhLXN0aWNreS1ub3RlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI0QVxcXCI7XFxufVxcbi5mYS1jYy1qY2I6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI0QlxcXCI7XFxufVxcbi5mYS1jYy1kaW5lcnMtY2x1YjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjRDXFxcIjtcXG59XFxuLmZhLWNsb25lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNERcXFwiO1xcbn1cXG4uZmEtYmFsYW5jZS1zY2FsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjRFXFxcIjtcXG59XFxuLmZhLWhvdXJnbGFzcy1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNTBcXFwiO1xcbn1cXG4uZmEtaG91cmdsYXNzLTE6YmVmb3JlLFxcbi5mYS1ob3VyZ2xhc3Mtc3RhcnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI1MVxcXCI7XFxufVxcbi5mYS1ob3VyZ2xhc3MtMjpiZWZvcmUsXFxuLmZhLWhvdXJnbGFzcy1oYWxmOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNTJcXFwiO1xcbn1cXG4uZmEtaG91cmdsYXNzLTM6YmVmb3JlLFxcbi5mYS1ob3VyZ2xhc3MtZW5kOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNTNcXFwiO1xcbn1cXG4uZmEtaG91cmdsYXNzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNTRcXFwiO1xcbn1cXG4uZmEtaGFuZC1ncmFiLW86YmVmb3JlLFxcbi5mYS1oYW5kLXJvY2stbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjU1XFxcIjtcXG59XFxuLmZhLWhhbmQtc3RvcC1vOmJlZm9yZSxcXG4uZmEtaGFuZC1wYXBlci1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNTZcXFwiO1xcbn1cXG4uZmEtaGFuZC1zY2lzc29ycy1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNTdcXFwiO1xcbn1cXG4uZmEtaGFuZC1saXphcmQtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjU4XFxcIjtcXG59XFxuLmZhLWhhbmQtc3BvY2stbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjU5XFxcIjtcXG59XFxuLmZhLWhhbmQtcG9pbnRlci1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNUFcXFwiO1xcbn1cXG4uZmEtaGFuZC1wZWFjZS1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNUJcXFwiO1xcbn1cXG4uZmEtdHJhZGVtYXJrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNUNcXFwiO1xcbn1cXG4uZmEtcmVnaXN0ZXJlZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjVEXFxcIjtcXG59XFxuLmZhLWNyZWF0aXZlLWNvbW1vbnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI1RVxcXCI7XFxufVxcbi5mYS1nZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjYwXFxcIjtcXG59XFxuLmZhLWdnLWNpcmNsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjYxXFxcIjtcXG59XFxuLmZhLXRyaXBhZHZpc29yOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNjJcXFwiO1xcbn1cXG4uZmEtb2Rub2tsYXNzbmlraTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjYzXFxcIjtcXG59XFxuLmZhLW9kbm9rbGFzc25pa2ktc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNjRcXFwiO1xcbn1cXG4uZmEtZ2V0LXBvY2tldDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjY1XFxcIjtcXG59XFxuLmZhLXdpa2lwZWRpYS13OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNjZcXFwiO1xcbn1cXG4uZmEtc2FmYXJpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNjdcXFwiO1xcbn1cXG4uZmEtY2hyb21lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNjhcXFwiO1xcbn1cXG4uZmEtZmlyZWZveDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjY5XFxcIjtcXG59XFxuLmZhLW9wZXJhOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNkFcXFwiO1xcbn1cXG4uZmEtaW50ZXJuZXQtZXhwbG9yZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI2QlxcXCI7XFxufVxcbi5mYS10djpiZWZvcmUsXFxuLmZhLXRlbGV2aXNpb246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI2Q1xcXCI7XFxufVxcbi5mYS1jb250YW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI2RFxcXCI7XFxufVxcbi5mYS01MDBweDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjZFXFxcIjtcXG59XFxuLmZhLWFtYXpvbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjcwXFxcIjtcXG59XFxuLmZhLWNhbGVuZGFyLXBsdXMtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjcxXFxcIjtcXG59XFxuLmZhLWNhbGVuZGFyLW1pbnVzLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI3MlxcXCI7XFxufVxcbi5mYS1jYWxlbmRhci10aW1lcy1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNzNcXFwiO1xcbn1cXG4uZmEtY2FsZW5kYXItY2hlY2stbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjc0XFxcIjtcXG59XFxuLmZhLWluZHVzdHJ5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNzVcXFwiO1xcbn1cXG4uZmEtbWFwLXBpbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjc2XFxcIjtcXG59XFxuLmZhLW1hcC1zaWduczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjc3XFxcIjtcXG59XFxuLmZhLW1hcC1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNzhcXFwiO1xcbn1cXG4uZmEtbWFwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNzlcXFwiO1xcbn1cXG4uZmEtY29tbWVudGluZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjdBXFxcIjtcXG59XFxuLmZhLWNvbW1lbnRpbmctbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjdCXFxcIjtcXG59XFxuLmZhLWhvdXp6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyN0NcXFwiO1xcbn1cXG4uZmEtdmltZW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI3RFxcXCI7XFxufVxcbi5mYS1ibGFjay10aWU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI3RVxcXCI7XFxufVxcbi5mYS1mb250aWNvbnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI4MFxcXCI7XFxufVxcbi5mYS1yZWRkaXQtYWxpZW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI4MVxcXCI7XFxufVxcbi5mYS1lZGdlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyODJcXFwiO1xcbn1cXG4uZmEtY3JlZGl0LWNhcmQtYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyODNcXFwiO1xcbn1cXG4uZmEtY29kaWVwaWU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI4NFxcXCI7XFxufVxcbi5mYS1tb2R4OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyODVcXFwiO1xcbn1cXG4uZmEtZm9ydC1hd2Vzb21lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyODZcXFwiO1xcbn1cXG4uZmEtdXNiOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyODdcXFwiO1xcbn1cXG4uZmEtcHJvZHVjdC1odW50OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyODhcXFwiO1xcbn1cXG4uZmEtbWl4Y2xvdWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI4OVxcXCI7XFxufVxcbi5mYS1zY3JpYmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI4QVxcXCI7XFxufVxcbi5mYS1wYXVzZS1jaXJjbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI4QlxcXCI7XFxufVxcbi5mYS1wYXVzZS1jaXJjbGUtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjhDXFxcIjtcXG59XFxuLmZhLXN0b3AtY2lyY2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyOERcXFwiO1xcbn1cXG4uZmEtc3RvcC1jaXJjbGUtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjhFXFxcIjtcXG59XFxuLmZhLXNob3BwaW5nLWJhZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjkwXFxcIjtcXG59XFxuLmZhLXNob3BwaW5nLWJhc2tldDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjkxXFxcIjtcXG59XFxuLmZhLWhhc2h0YWc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI5MlxcXCI7XFxufVxcbi5mYS1ibHVldG9vdGg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI5M1xcXCI7XFxufVxcbi5mYS1ibHVldG9vdGgtYjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjk0XFxcIjtcXG59XFxuLmZhLXBlcmNlbnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI5NVxcXCI7XFxufVxcbi5mYS1naXRsYWI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI5NlxcXCI7XFxufVxcbi5mYS13cGJlZ2lubmVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyOTdcXFwiO1xcbn1cXG4uZmEtd3Bmb3JtczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjk4XFxcIjtcXG59XFxuLmZhLWVudmlyYTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjk5XFxcIjtcXG59XFxuLmZhLXVuaXZlcnNhbC1hY2Nlc3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI5QVxcXCI7XFxufVxcbi5mYS13aGVlbGNoYWlyLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjlCXFxcIjtcXG59XFxuLmZhLXF1ZXN0aW9uLWNpcmNsZS1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyOUNcXFwiO1xcbn1cXG4uZmEtYmxpbmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI5RFxcXCI7XFxufVxcbi5mYS1hdWRpby1kZXNjcmlwdGlvbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjlFXFxcIjtcXG59XFxuLmZhLXZvbHVtZS1jb250cm9sLXBob25lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyQTBcXFwiO1xcbn1cXG4uZmEtYnJhaWxsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkExXFxcIjtcXG59XFxuLmZhLWFzc2lzdGl2ZS1saXN0ZW5pbmctc3lzdGVtczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkEyXFxcIjtcXG59XFxuLmZhLWFzbC1pbnRlcnByZXRpbmc6YmVmb3JlLFxcbi5mYS1hbWVyaWNhbi1zaWduLWxhbmd1YWdlLWludGVycHJldGluZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkEzXFxcIjtcXG59XFxuLmZhLWRlYWZuZXNzOmJlZm9yZSxcXG4uZmEtaGFyZC1vZi1oZWFyaW5nOmJlZm9yZSxcXG4uZmEtZGVhZjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkE0XFxcIjtcXG59XFxuLmZhLWdsaWRlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyQTVcXFwiO1xcbn1cXG4uZmEtZ2xpZGUtZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkE2XFxcIjtcXG59XFxuLmZhLXNpZ25pbmc6YmVmb3JlLFxcbi5mYS1zaWduLWxhbmd1YWdlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyQTdcXFwiO1xcbn1cXG4uZmEtbG93LXZpc2lvbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkE4XFxcIjtcXG59XFxuLmZhLXZpYWRlbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkE5XFxcIjtcXG59XFxuLmZhLXZpYWRlby1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJBQVxcXCI7XFxufVxcbi5mYS1zbmFwY2hhdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkFCXFxcIjtcXG59XFxuLmZhLXNuYXBjaGF0LWdob3N0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyQUNcXFwiO1xcbn1cXG4uZmEtc25hcGNoYXQtc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyQURcXFwiO1xcbn1cXG4uZmEtcGllZC1waXBlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkFFXFxcIjtcXG59XFxuLmZhLWZpcnN0LW9yZGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyQjBcXFwiO1xcbn1cXG4uZmEteW9hc3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJCMVxcXCI7XFxufVxcbi5mYS10aGVtZWlzbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJCMlxcXCI7XFxufVxcbi5mYS1nb29nbGUtcGx1cy1jaXJjbGU6YmVmb3JlLFxcbi5mYS1nb29nbGUtcGx1cy1vZmZpY2lhbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkIzXFxcIjtcXG59XFxuLmZhLWZhOmJlZm9yZSxcXG4uZmEtZm9udC1hd2Vzb21lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyQjRcXFwiO1xcbn1cXG4uZmEtaGFuZHNoYWtlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJCNVxcXCI7XFxufVxcbi5mYS1lbnZlbG9wZS1vcGVuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyQjZcXFwiO1xcbn1cXG4uZmEtZW52ZWxvcGUtb3Blbi1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyQjdcXFwiO1xcbn1cXG4uZmEtbGlub2RlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyQjhcXFwiO1xcbn1cXG4uZmEtYWRkcmVzcy1ib29rOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyQjlcXFwiO1xcbn1cXG4uZmEtYWRkcmVzcy1ib29rLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJCQVxcXCI7XFxufVxcbi5mYS12Y2FyZDpiZWZvcmUsXFxuLmZhLWFkZHJlc3MtY2FyZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkJCXFxcIjtcXG59XFxuLmZhLXZjYXJkLW86YmVmb3JlLFxcbi5mYS1hZGRyZXNzLWNhcmQtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkJDXFxcIjtcXG59XFxuLmZhLXVzZXItY2lyY2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyQkRcXFwiO1xcbn1cXG4uZmEtdXNlci1jaXJjbGUtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkJFXFxcIjtcXG59XFxuLmZhLXVzZXItbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkMwXFxcIjtcXG59XFxuLmZhLWlkLWJhZGdlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyQzFcXFwiO1xcbn1cXG4uZmEtZHJpdmVycy1saWNlbnNlOmJlZm9yZSxcXG4uZmEtaWQtY2FyZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkMyXFxcIjtcXG59XFxuLmZhLWRyaXZlcnMtbGljZW5zZS1vOmJlZm9yZSxcXG4uZmEtaWQtY2FyZC1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyQzNcXFwiO1xcbn1cXG4uZmEtcXVvcmE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJDNFxcXCI7XFxufVxcbi5mYS1mcmVlLWNvZGUtY2FtcDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkM1XFxcIjtcXG59XFxuLmZhLXRlbGVncmFtOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyQzZcXFwiO1xcbn1cXG4uZmEtdGhlcm1vbWV0ZXItNDpiZWZvcmUsXFxuLmZhLXRoZXJtb21ldGVyOmJlZm9yZSxcXG4uZmEtdGhlcm1vbWV0ZXItZnVsbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkM3XFxcIjtcXG59XFxuLmZhLXRoZXJtb21ldGVyLTM6YmVmb3JlLFxcbi5mYS10aGVybW9tZXRlci10aHJlZS1xdWFydGVyczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkM4XFxcIjtcXG59XFxuLmZhLXRoZXJtb21ldGVyLTI6YmVmb3JlLFxcbi5mYS10aGVybW9tZXRlci1oYWxmOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyQzlcXFwiO1xcbn1cXG4uZmEtdGhlcm1vbWV0ZXItMTpiZWZvcmUsXFxuLmZhLXRoZXJtb21ldGVyLXF1YXJ0ZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJDQVxcXCI7XFxufVxcbi5mYS10aGVybW9tZXRlci0wOmJlZm9yZSxcXG4uZmEtdGhlcm1vbWV0ZXItZW1wdHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJDQlxcXCI7XFxufVxcbi5mYS1zaG93ZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJDQ1xcXCI7XFxufVxcbi5mYS1iYXRodHViOmJlZm9yZSxcXG4uZmEtczE1OmJlZm9yZSxcXG4uZmEtYmF0aDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkNEXFxcIjtcXG59XFxuLmZhLXBvZGNhc3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJDRVxcXCI7XFxufVxcbi5mYS13aW5kb3ctbWF4aW1pemU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJEMFxcXCI7XFxufVxcbi5mYS13aW5kb3ctbWluaW1pemU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJEMVxcXCI7XFxufVxcbi5mYS13aW5kb3ctcmVzdG9yZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkQyXFxcIjtcXG59XFxuLmZhLXRpbWVzLXJlY3RhbmdsZTpiZWZvcmUsXFxuLmZhLXdpbmRvdy1jbG9zZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkQzXFxcIjtcXG59XFxuLmZhLXRpbWVzLXJlY3RhbmdsZS1vOmJlZm9yZSxcXG4uZmEtd2luZG93LWNsb3NlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJENFxcXCI7XFxufVxcbi5mYS1iYW5kY2FtcDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkQ1XFxcIjtcXG59XFxuLmZhLWdyYXY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJENlxcXCI7XFxufVxcbi5mYS1ldHN5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyRDdcXFwiO1xcbn1cXG4uZmEtaW1kYjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkQ4XFxcIjtcXG59XFxuLmZhLXJhdmVscnk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJEOVxcXCI7XFxufVxcbi5mYS1lZXJjYXN0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyREFcXFwiO1xcbn1cXG4uZmEtbWljcm9jaGlwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyREJcXFwiO1xcbn1cXG4uZmEtc25vd2ZsYWtlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJEQ1xcXCI7XFxufVxcbi5mYS1zdXBlcnBvd2VyczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkREXFxcIjtcXG59XFxuLmZhLXdwZXhwbG9yZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJERVxcXCI7XFxufVxcbi5mYS1tZWV0dXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJFMFxcXCI7XFxufVxcbi5zci1vbmx5IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxcHg7XFxuICBoZWlnaHQ6IDFweDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IC0xcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcXG4gIGJvcmRlcjogMDtcXG59XFxuLnNyLW9ubHktZm9jdXNhYmxlOmFjdGl2ZSxcXG4uc3Itb25seS1mb2N1c2FibGU6Zm9jdXMge1xcbiAgcG9zaXRpb246IHN0YXRpYztcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luOiAwO1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICBjbGlwOiBhdXRvO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICA7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vZm9udHMvZm9udC1hd2Vzb21lLmNzcycgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uaW9uLWFsZXJ0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEwMVxcXCI7IH1cXG5cXG4uaW9uLWFsZXJ0LWNpcmNsZWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTAwXFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1hZGQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkM3XFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1hZGQtY2lyY2xlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM1OVxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtYWxhcm0tY2xvY2s6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzVBXFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1hbGVydDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNUJcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLWFwcHM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzVDXFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1hcmNoaXZlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJDOVxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtYXJyb3ctYmFjazpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQ0FcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLWFycm93LWRvd246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzVEXFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1hcnJvdy1kcm9wZG93bjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNUZcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLWFycm93LWRyb3Bkb3duLWNpcmNsZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNUVcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLWFycm93LWRyb3BsZWZ0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM2MVxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtYXJyb3ctZHJvcGxlZnQtY2lyY2xlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM2MFxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtYXJyb3ctZHJvcHJpZ2h0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM2M1xcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtYXJyb3ctZHJvcHJpZ2h0LWNpcmNsZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNjJcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLWFycm93LWRyb3B1cDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNjVcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLWFycm93LWRyb3B1cC1jaXJjbGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzY0XFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1hcnJvdy1mb3J3YXJkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjMwRlxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtYXJyb3ctdXA6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzY2XFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1hdHRhY2g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzY3XFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1iYXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzY4XFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1iaWN5Y2xlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM2OVxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtYm9hdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNkFcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLWJvb2ttYXJrOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM2QlxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtYnVsYjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNkNcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLWJ1czpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNkRcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLWNhbGVuZGFyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJEMVxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtY2FsbDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyRDJcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLWNhbWVyYTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyRDNcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLWNhbmNlbDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNkVcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLWNhcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNkZcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLWNhcnQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzcwXFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1jaGF0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJENFxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtY2hlY2tib3g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzc0XFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1jaGVja2JveC1ibGFuazpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNzFcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLWNoZWNrYm94LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzczXFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1jaGVja2JveC1vdXRsaW5lLWJsYW5rOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM3MlxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtY2hlY2ttYXJrLWNpcmNsZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNzVcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLWNsaXBib2FyZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNzZcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLWNsb3NlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJEN1xcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtY2xvdWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzdBXFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1jbG91ZC1jaXJjbGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzc3XFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1jbG91ZC1kb25lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM3OFxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtY2xvdWQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNzlcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLWNvbG9yLXBhbGV0dGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzdCXFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1jb21wYXNzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM3Q1xcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtY29udGFjdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyRDhcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLWNvbnRhY3RzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJEOVxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtY29udHJhY3Q6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzdEXFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1jcmVhdGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzdFXFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1kZWxldGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzdGXFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1kZXNrdG9wOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM4MFxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtZG9jdW1lbnQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzgxXFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1kb25lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM4M1xcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtZG9uZS1hbGw6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzgyXFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1kb3dubG9hZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyRERcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLWRyYWZ0czpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzODRcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLWV4aXQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzg1XFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1leHBhbmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzg2XFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1mYXZvcml0ZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzODhcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLWZhdm9yaXRlLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzg3XFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1maWxtOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM4OVxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtZm9sZGVyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJFMFxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtZm9sZGVyLW9wZW46YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzhBXFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1mdW5uZWw6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzhCXFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1nbG9iZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzOENcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLWhhbmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkUzXFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1oYW5nb3V0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM4RFxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtaGFwcHk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzhFXFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1ob21lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM4RlxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtaW1hZ2U6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkU0XFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1sYXB0b3A6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzkwXFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1saXN0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM5MVxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtbG9jYXRlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJFOVxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtbG9jazpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzOTJcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLW1haWw6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkVCXFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1tYXA6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzkzXFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1tZW51OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM5NFxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtbWljcm9waG9uZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyRUNcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLW1pY3JvcGhvbmUtb2ZmOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM5NVxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtbW9yZS1ob3Jpem9udGFsOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM5NlxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtbW9yZS12ZXJ0aWNhbDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzOTdcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLW5hdmlnYXRlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM5OFxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtbm90aWZpY2F0aW9uczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzOUJcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLW5vdGlmaWNhdGlvbnMtbm9uZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzOTlcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLW5vdGlmaWNhdGlvbnMtb2ZmOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM5QVxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtb3BlbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzOUNcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLW9wdGlvbnM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzlEXFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1wZW9wbGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzlFXFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1wZXJzb246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0EwXFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1wZXJzb24tYWRkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM5RlxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtcGhvbmUtbGFuZHNjYXBlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNBMVxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtcGhvbmUtcG9ydHJhaXQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0EyXFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1waW46YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0EzXFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1wbGFuZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQTRcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLXBsYXlzdG9yZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyRjBcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLXByaW50OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNBNVxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtcmFkaW8tYnV0dG9uLW9mZjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQTZcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLXJhZGlvLWJ1dHRvbi1vbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQTdcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLXJlZnJlc2g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0E4XFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1yZW1vdmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkY0XFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1yZW1vdmUtY2lyY2xlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNBOVxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtcmVzdGF1cmFudDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQUFcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLXNhZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQUJcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLXNlYXJjaDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyRjVcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLXNlbmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkY2XFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC1zZXR0aW5nczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyRjdcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLXNoYXJlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJGOFxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtc2hhcmUtYWx0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNBQ1xcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtc3RhcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyRkNcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLXN0YXItaGFsZjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQURcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLXN0YXItb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQUVcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLXN0b3B3YXRjaDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyRkRcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLXN1YndheTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQUZcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLXN1bm55OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNCMFxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtc3luYzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQjFcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLXRleHRzbXM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0IyXFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC10aW1lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNCM1xcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtdHJhaW46YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0I0XFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC11bmxvY2s6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0I1XFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC11cGxvYWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0I2XFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC12b2x1bWUtZG93bjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQjdcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLXZvbHVtZS1tdXRlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNCOFxcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtdm9sdW1lLW9mZjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQjlcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLXZvbHVtZS11cDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQkFcXFwiOyB9XFxuXFxuLmlvbi1hbmRyb2lkLXdhbGs6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0JCXFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC13YXJuaW5nOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNCQ1xcXCI7IH1cXG5cXG4uaW9uLWFuZHJvaWQtd2F0Y2g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0JEXFxcIjsgfVxcblxcbi5pb24tYW5kcm9pZC13aWZpOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjMwNVxcXCI7IH1cXG5cXG4uaW9uLWFwZXJ0dXJlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjMxM1xcXCI7IH1cXG5cXG4uaW9uLWFyY2hpdmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTAyXFxcIjsgfVxcblxcbi5pb24tYXJyb3ctZG93bi1hOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEwM1xcXCI7IH1cXG5cXG4uaW9uLWFycm93LWRvd24tYjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMDRcXFwiOyB9XFxuXFxuLmlvbi1hcnJvdy1kb3duLWM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTA1XFxcIjsgfVxcblxcbi5pb24tYXJyb3ctZXhwYW5kOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI1RVxcXCI7IH1cXG5cXG4uaW9uLWFycm93LWdyYXBoLWRvd24tbGVmdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNUZcXFwiOyB9XFxuXFxuLmlvbi1hcnJvdy1ncmFwaC1kb3duLXJpZ2h0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI2MFxcXCI7IH1cXG5cXG4uaW9uLWFycm93LWdyYXBoLXVwLWxlZnQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjYxXFxcIjsgfVxcblxcbi5pb24tYXJyb3ctZ3JhcGgtdXAtcmlnaHQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjYyXFxcIjsgfVxcblxcbi5pb24tYXJyb3ctbGVmdC1hOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEwNlxcXCI7IH1cXG5cXG4uaW9uLWFycm93LWxlZnQtYjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMDdcXFwiOyB9XFxuXFxuLmlvbi1hcnJvdy1sZWZ0LWM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTA4XFxcIjsgfVxcblxcbi5pb24tYXJyb3ctbW92ZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNjNcXFwiOyB9XFxuXFxuLmlvbi1hcnJvdy1yZXNpemU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjY0XFxcIjsgfVxcblxcbi5pb24tYXJyb3ctcmV0dXJuLWxlZnQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjY1XFxcIjsgfVxcblxcbi5pb24tYXJyb3ctcmV0dXJuLXJpZ2h0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI2NlxcXCI7IH1cXG5cXG4uaW9uLWFycm93LXJpZ2h0LWE6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTA5XFxcIjsgfVxcblxcbi5pb24tYXJyb3ctcmlnaHQtYjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMEFcXFwiOyB9XFxuXFxuLmlvbi1hcnJvdy1yaWdodC1jOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEwQlxcXCI7IH1cXG5cXG4uaW9uLWFycm93LXNocmluazpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNjdcXFwiOyB9XFxuXFxuLmlvbi1hcnJvdy1zd2FwOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI2OFxcXCI7IH1cXG5cXG4uaW9uLWFycm93LXVwLWE6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTBDXFxcIjsgfVxcblxcbi5pb24tYXJyb3ctdXAtYjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMERcXFwiOyB9XFxuXFxuLmlvbi1hcnJvdy11cC1jOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEwRVxcXCI7IH1cXG5cXG4uaW9uLWFzdGVyaXNrOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjMxNFxcXCI7IH1cXG5cXG4uaW9uLWF0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEwRlxcXCI7IH1cXG5cXG4uaW9uLWJhY2tzcGFjZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQkZcXFwiOyB9XFxuXFxuLmlvbi1iYWNrc3BhY2Utb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQkVcXFwiOyB9XFxuXFxuLmlvbi1iYWc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTEwXFxcIjsgfVxcblxcbi5pb24tYmF0dGVyeS1jaGFyZ2luZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMTFcXFwiOyB9XFxuXFxuLmlvbi1iYXR0ZXJ5LWVtcHR5OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjExMlxcXCI7IH1cXG5cXG4uaW9uLWJhdHRlcnktZnVsbDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMTNcXFwiOyB9XFxuXFxuLmlvbi1iYXR0ZXJ5LWhhbGY6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTE0XFxcIjsgfVxcblxcbi5pb24tYmF0dGVyeS1sb3c6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTE1XFxcIjsgfVxcblxcbi5pb24tYmVha2VyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI2OVxcXCI7IH1cXG5cXG4uaW9uLWJlZXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjZBXFxcIjsgfVxcblxcbi5pb24tYmx1ZXRvb3RoOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjExNlxcXCI7IH1cXG5cXG4uaW9uLWJvbmZpcmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzE1XFxcIjsgfVxcblxcbi5pb24tYm9va21hcms6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjZCXFxcIjsgfVxcblxcbi5pb24tYm93dGllOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNDMFxcXCI7IH1cXG5cXG4uaW9uLWJyaWVmY2FzZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNkNcXFwiOyB9XFxuXFxuLmlvbi1idWc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkJFXFxcIjsgfVxcblxcbi5pb24tY2FsY3VsYXRvcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNkRcXFwiOyB9XFxuXFxuLmlvbi1jYWxlbmRhcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMTdcXFwiOyB9XFxuXFxuLmlvbi1jYW1lcmE6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTE4XFxcIjsgfVxcblxcbi5pb24tY2FyZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMTlcXFwiOyB9XFxuXFxuLmlvbi1jYXNoOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjMxNlxcXCI7IH1cXG5cXG4uaW9uLWNoYXRib3g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTFCXFxcIjsgfVxcblxcbi5pb24tY2hhdGJveC13b3JraW5nOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjExQVxcXCI7IH1cXG5cXG4uaW9uLWNoYXRib3hlczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMUNcXFwiOyB9XFxuXFxuLmlvbi1jaGF0YnViYmxlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjExRVxcXCI7IH1cXG5cXG4uaW9uLWNoYXRidWJibGUtd29ya2luZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMURcXFwiOyB9XFxuXFxuLmlvbi1jaGF0YnViYmxlczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMUZcXFwiOyB9XFxuXFxuLmlvbi1jaGVja21hcms6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTIyXFxcIjsgfVxcblxcbi5pb24tY2hlY2ttYXJrLWNpcmNsZWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTIwXFxcIjsgfVxcblxcbi5pb24tY2hlY2ttYXJrLXJvdW5kOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEyMVxcXCI7IH1cXG5cXG4uaW9uLWNoZXZyb24tZG93bjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMjNcXFwiOyB9XFxuXFxuLmlvbi1jaGV2cm9uLWxlZnQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTI0XFxcIjsgfVxcblxcbi5pb24tY2hldnJvbi1yaWdodDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMjVcXFwiOyB9XFxuXFxuLmlvbi1jaGV2cm9uLXVwOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEyNlxcXCI7IH1cXG5cXG4uaW9uLWNsaXBib2FyZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMjdcXFwiOyB9XFxuXFxuLmlvbi1jbG9jazpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNkVcXFwiOyB9XFxuXFxuLmlvbi1jbG9zZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMkFcXFwiOyB9XFxuXFxuLmlvbi1jbG9zZS1jaXJjbGVkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEyOFxcXCI7IH1cXG5cXG4uaW9uLWNsb3NlLXJvdW5kOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEyOVxcXCI7IH1cXG5cXG4uaW9uLWNsb3NlZC1jYXB0aW9uaW5nOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjMxN1xcXCI7IH1cXG5cXG4uaW9uLWNsb3VkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEyQlxcXCI7IH1cXG5cXG4uaW9uLWNvZGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjcxXFxcIjsgfVxcblxcbi5pb24tY29kZS1kb3dubG9hZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNkZcXFwiOyB9XFxuXFxuLmlvbi1jb2RlLXdvcmtpbmc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjcwXFxcIjsgfVxcblxcbi5pb24tY29mZmVlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI3MlxcXCI7IH1cXG5cXG4uaW9uLWNvbXBhc3M6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjczXFxcIjsgfVxcblxcbi5pb24tY29tcG9zZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMkNcXFwiOyB9XFxuXFxuLmlvbi1jb25uZWN0aW9uLWJhcnM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjc0XFxcIjsgfVxcblxcbi5pb24tY29udHJhc3Q6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjc1XFxcIjsgfVxcblxcbi5pb24tY3JvcDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQzFcXFwiOyB9XFxuXFxuLmlvbi1jdWJlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjMxOFxcXCI7IH1cXG5cXG4uaW9uLWRpc2M6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTJEXFxcIjsgfVxcblxcbi5pb24tZG9jdW1lbnQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTJGXFxcIjsgfVxcblxcbi5pb24tZG9jdW1lbnQtdGV4dDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMkVcXFwiOyB9XFxuXFxuLmlvbi1kcmFnOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEzMFxcXCI7IH1cXG5cXG4uaW9uLWVhcnRoOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI3NlxcXCI7IH1cXG5cXG4uaW9uLWVhc2VsOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNDMlxcXCI7IH1cXG5cXG4uaW9uLWVkaXQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkJGXFxcIjsgfVxcblxcbi5pb24tZWdnOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI3N1xcXCI7IH1cXG5cXG4uaW9uLWVqZWN0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEzMVxcXCI7IH1cXG5cXG4uaW9uLWVtYWlsOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEzMlxcXCI7IH1cXG5cXG4uaW9uLWVtYWlsLXVucmVhZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQzNcXFwiOyB9XFxuXFxuLmlvbi1lcmxlbm1leWVyLWZsYXNrOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNDNVxcXCI7IH1cXG5cXG4uaW9uLWVybGVubWV5ZXItZmxhc2stYnViYmxlczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQzRcXFwiOyB9XFxuXFxuLmlvbi1leWU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTMzXFxcIjsgfVxcblxcbi5pb24tZXllLWRpc2FibGVkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjMwNlxcXCI7IH1cXG5cXG4uaW9uLWZlbWFsZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNzhcXFwiOyB9XFxuXFxuLmlvbi1maWxpbmc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTM0XFxcIjsgfVxcblxcbi5pb24tZmlsbS1tYXJrZXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTM1XFxcIjsgfVxcblxcbi5pb24tZmlyZWJhbGw6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzE5XFxcIjsgfVxcblxcbi5pb24tZmxhZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNzlcXFwiOyB9XFxuXFxuLmlvbi1mbGFtZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzMUFcXFwiOyB9XFxuXFxuLmlvbi1mbGFzaDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxMzdcXFwiOyB9XFxuXFxuLmlvbi1mbGFzaC1vZmY6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTM2XFxcIjsgfVxcblxcbi5pb24tZm9sZGVyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjEzOVxcXCI7IH1cXG5cXG4uaW9uLWZvcms6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjdBXFxcIjsgfVxcblxcbi5pb24tZm9yay1yZXBvOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJDMFxcXCI7IH1cXG5cXG4uaW9uLWZvcndhcmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTNBXFxcIjsgfVxcblxcbi5pb24tZnVubmVsOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjMxQlxcXCI7IH1cXG5cXG4uaW9uLWdlYXItYTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxM0RcXFwiOyB9XFxuXFxuLmlvbi1nZWFyLWI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTNFXFxcIjsgfVxcblxcbi5pb24tZ3JpZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxM0ZcXFwiOyB9XFxuXFxuLmlvbi1oYW1tZXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjdCXFxcIjsgfVxcblxcbi5pb24taGFwcHk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzFDXFxcIjsgfVxcblxcbi5pb24taGFwcHktb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQzZcXFwiOyB9XFxuXFxuLmlvbi1oZWFkcGhvbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTQwXFxcIjsgfVxcblxcbi5pb24taGVhcnQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTQxXFxcIjsgfVxcblxcbi5pb24taGVhcnQtYnJva2VuOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjMxRFxcXCI7IH1cXG5cXG4uaW9uLWhlbHA6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMTQzXFxcIjsgfVxcblxcbi5pb24taGVscC1idW95OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI3Q1xcXCI7IH1cXG5cXG4uaW9uLWhlbHAtY2lyY2xlZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxNDJcXFwiOyB9XFxuXFxuLmlvbi1ob21lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjE0NFxcXCI7IH1cXG5cXG4uaW9uLWljZWNyZWFtOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI3RFxcXCI7IH1cXG5cXG4uaW9uLWltYWdlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjE0N1xcXCI7IH1cXG5cXG4uaW9uLWltYWdlczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxNDhcXFwiOyB9XFxuXFxuLmlvbi1pbmZvcm1hdGlvbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxNEFcXFwiOyB9XFxuXFxuLmlvbi1pbmZvcm1hdGlvbi1jaXJjbGVkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjE0OVxcXCI7IH1cXG5cXG4uaW9uLWlvbmljOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjE0QlxcXCI7IH1cXG5cXG4uaW9uLWlvcy1hbGFybTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQzhcXFwiOyB9XFxuXFxuLmlvbi1pb3MtYWxhcm0tb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQzdcXFwiOyB9XFxuXFxuLmlvbi1pb3MtYWxidW1zOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNDQVxcXCI7IH1cXG5cXG4uaW9uLWlvcy1hbGJ1bXMtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQzlcXFwiOyB9XFxuXFxuLmlvbi1pb3MtYW1lcmljYW5mb290YmFsbDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzQ0NcXFwiOyB9XFxuXFxuLmlvbi1pb3MtYW1lcmljYW5mb290YmFsbC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNDQlxcXCI7IH1cXG5cXG4uaW9uLWlvcy1hbmFseXRpY3M6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0NFXFxcIjsgfVxcblxcbi5pb24taW9zLWFuYWx5dGljcy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNDRFxcXCI7IH1cXG5cXG4uaW9uLWlvcy1hcnJvdy1iYWNrOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNDRlxcXCI7IH1cXG5cXG4uaW9uLWlvcy1hcnJvdy1kb3duOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNEMFxcXCI7IH1cXG5cXG4uaW9uLWlvcy1hcnJvdy1mb3J3YXJkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNEMVxcXCI7IH1cXG5cXG4uaW9uLWlvcy1hcnJvdy1sZWZ0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNEMlxcXCI7IH1cXG5cXG4uaW9uLWlvcy1hcnJvdy1yaWdodDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRDNcXFwiOyB9XFxuXFxuLmlvbi1pb3MtYXJyb3ctdGhpbi1kb3duOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNENFxcXCI7IH1cXG5cXG4uaW9uLWlvcy1hcnJvdy10aGluLWxlZnQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0Q1XFxcIjsgfVxcblxcbi5pb24taW9zLWFycm93LXRoaW4tcmlnaHQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0Q2XFxcIjsgfVxcblxcbi5pb24taW9zLWFycm93LXRoaW4tdXA6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0Q3XFxcIjsgfVxcblxcbi5pb24taW9zLWFycm93LXVwOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNEOFxcXCI7IH1cXG5cXG4uaW9uLWlvcy1hdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzREFcXFwiOyB9XFxuXFxuLmlvbi1pb3MtYXQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRDlcXFwiOyB9XFxuXFxuLmlvbi1pb3MtYmFyY29kZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRENcXFwiOyB9XFxuXFxuLmlvbi1pb3MtYmFyY29kZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNEQlxcXCI7IH1cXG5cXG4uaW9uLWlvcy1iYXNlYmFsbDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzREVcXFwiOyB9XFxuXFxuLmlvbi1pb3MtYmFzZWJhbGwtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRERcXFwiOyB9XFxuXFxuLmlvbi1pb3MtYmFza2V0YmFsbDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRTBcXFwiOyB9XFxuXFxuLmlvbi1pb3MtYmFza2V0YmFsbC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNERlxcXCI7IH1cXG5cXG4uaW9uLWlvcy1iZWxsOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNFMlxcXCI7IH1cXG5cXG4uaW9uLWlvcy1iZWxsLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0UxXFxcIjsgfVxcblxcbi5pb24taW9zLWJvZHk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0U0XFxcIjsgfVxcblxcbi5pb24taW9zLWJvZHktb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRTNcXFwiOyB9XFxuXFxuLmlvbi1pb3MtYm9sdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRTZcXFwiOyB9XFxuXFxuLmlvbi1pb3MtYm9sdC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNFNVxcXCI7IH1cXG5cXG4uaW9uLWlvcy1ib29rOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNFOFxcXCI7IH1cXG5cXG4uaW9uLWlvcy1ib29rLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0U3XFxcIjsgfVxcblxcbi5pb24taW9zLWJvb2ttYXJrczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRUFcXFwiOyB9XFxuXFxuLmlvbi1pb3MtYm9va21hcmtzLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0U5XFxcIjsgfVxcblxcbi5pb24taW9zLWJveDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRUNcXFwiOyB9XFxuXFxuLmlvbi1pb3MtYm94LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0VCXFxcIjsgfVxcblxcbi5pb24taW9zLWJyaWVmY2FzZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRUVcXFwiOyB9XFxuXFxuLmlvbi1pb3MtYnJpZWZjYXNlLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0VEXFxcIjsgfVxcblxcbi5pb24taW9zLWJyb3dzZXJzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNGMFxcXCI7IH1cXG5cXG4uaW9uLWlvcy1icm93c2Vycy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNFRlxcXCI7IH1cXG5cXG4uaW9uLWlvcy1jYWxjdWxhdG9yOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNGMlxcXCI7IH1cXG5cXG4uaW9uLWlvcy1jYWxjdWxhdG9yLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0YxXFxcIjsgfVxcblxcbi5pb24taW9zLWNhbGVuZGFyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNGNFxcXCI7IH1cXG5cXG4uaW9uLWlvcy1jYWxlbmRhci1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNGM1xcXCI7IH1cXG5cXG4uaW9uLWlvcy1jYW1lcmE6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0Y2XFxcIjsgfVxcblxcbi5pb24taW9zLWNhbWVyYS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNGNVxcXCI7IH1cXG5cXG4uaW9uLWlvcy1jYXJ0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNGOFxcXCI7IH1cXG5cXG4uaW9uLWlvcy1jYXJ0LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0Y3XFxcIjsgfVxcblxcbi5pb24taW9zLWNoYXRib3hlczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRkFcXFwiOyB9XFxuXFxuLmlvbi1pb3MtY2hhdGJveGVzLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0Y5XFxcIjsgfVxcblxcbi5pb24taW9zLWNoYXRidWJibGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0ZDXFxcIjsgfVxcblxcbi5pb24taW9zLWNoYXRidWJibGUtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzRkJcXFwiOyB9XFxuXFxuLmlvbi1pb3MtY2hlY2ttYXJrOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNGRlxcXCI7IH1cXG5cXG4uaW9uLWlvcy1jaGVja21hcmstZW1wdHk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGM0ZEXFxcIjsgfVxcblxcbi5pb24taW9zLWNoZWNrbWFyay1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjNGRVxcXCI7IH1cXG5cXG4uaW9uLWlvcy1jaXJjbGUtZmlsbGVkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQwMFxcXCI7IH1cXG5cXG4uaW9uLWlvcy1jaXJjbGUtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MDFcXFwiOyB9XFxuXFxuLmlvbi1pb3MtY2xvY2s6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDAzXFxcIjsgfVxcblxcbi5pb24taW9zLWNsb2NrLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDAyXFxcIjsgfVxcblxcbi5pb24taW9zLWNsb3NlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQwNlxcXCI7IH1cXG5cXG4uaW9uLWlvcy1jbG9zZS1lbXB0eTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MDRcXFwiOyB9XFxuXFxuLmlvbi1pb3MtY2xvc2Utb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MDVcXFwiOyB9XFxuXFxuLmlvbi1pb3MtY2xvdWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDBDXFxcIjsgfVxcblxcbi5pb24taW9zLWNsb3VkLWRvd25sb2FkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQwOFxcXCI7IH1cXG5cXG4uaW9uLWlvcy1jbG91ZC1kb3dubG9hZC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQwN1xcXCI7IH1cXG5cXG4uaW9uLWlvcy1jbG91ZC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQwOVxcXCI7IH1cXG5cXG4uaW9uLWlvcy1jbG91ZC11cGxvYWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDBCXFxcIjsgfVxcblxcbi5pb24taW9zLWNsb3VkLXVwbG9hZC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQwQVxcXCI7IH1cXG5cXG4uaW9uLWlvcy1jbG91ZHk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDEwXFxcIjsgfVxcblxcbi5pb24taW9zLWNsb3VkeS1uaWdodDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MEVcXFwiOyB9XFxuXFxuLmlvbi1pb3MtY2xvdWR5LW5pZ2h0LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDBEXFxcIjsgfVxcblxcbi5pb24taW9zLWNsb3VkeS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQwRlxcXCI7IH1cXG5cXG4uaW9uLWlvcy1jb2c6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDEyXFxcIjsgfVxcblxcbi5pb24taW9zLWNvZy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQxMVxcXCI7IH1cXG5cXG4uaW9uLWlvcy1jb2xvci1maWx0ZXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDE0XFxcIjsgfVxcblxcbi5pb24taW9zLWNvbG9yLWZpbHRlci1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQxM1xcXCI7IH1cXG5cXG4uaW9uLWlvcy1jb2xvci13YW5kOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQxNlxcXCI7IH1cXG5cXG4uaW9uLWlvcy1jb2xvci13YW5kLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDE1XFxcIjsgfVxcblxcbi5pb24taW9zLWNvbXBvc2U6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDE4XFxcIjsgfVxcblxcbi5pb24taW9zLWNvbXBvc2Utb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MTdcXFwiOyB9XFxuXFxuLmlvbi1pb3MtY29udGFjdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MUFcXFwiOyB9XFxuXFxuLmlvbi1pb3MtY29udGFjdC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQxOVxcXCI7IH1cXG5cXG4uaW9uLWlvcy1jb3B5OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQxQ1xcXCI7IH1cXG5cXG4uaW9uLWlvcy1jb3B5LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDFCXFxcIjsgfVxcblxcbi5pb24taW9zLWNyb3A6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDFFXFxcIjsgfVxcblxcbi5pb24taW9zLWNyb3Atc3Ryb25nOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQxRFxcXCI7IH1cXG5cXG4uaW9uLWlvcy1kb3dubG9hZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MjBcXFwiOyB9XFxuXFxuLmlvbi1pb3MtZG93bmxvYWQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MUZcXFwiOyB9XFxuXFxuLmlvbi1pb3MtZHJhZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MjFcXFwiOyB9XFxuXFxuLmlvbi1pb3MtZW1haWw6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDIzXFxcIjsgfVxcblxcbi5pb24taW9zLWVtYWlsLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDIyXFxcIjsgfVxcblxcbi5pb24taW9zLWV5ZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MjVcXFwiOyB9XFxuXFxuLmlvbi1pb3MtZXllLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDI0XFxcIjsgfVxcblxcbi5pb24taW9zLWZhc3Rmb3J3YXJkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQyN1xcXCI7IH1cXG5cXG4uaW9uLWlvcy1mYXN0Zm9yd2FyZC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQyNlxcXCI7IH1cXG5cXG4uaW9uLWlvcy1maWxpbmc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDI5XFxcIjsgfVxcblxcbi5pb24taW9zLWZpbGluZy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQyOFxcXCI7IH1cXG5cXG4uaW9uLWlvcy1maWxtOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQyQlxcXCI7IH1cXG5cXG4uaW9uLWlvcy1maWxtLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDJBXFxcIjsgfVxcblxcbi5pb24taW9zLWZsYWc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDJEXFxcIjsgfVxcblxcbi5pb24taW9zLWZsYWctb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MkNcXFwiOyB9XFxuXFxuLmlvbi1pb3MtZmxhbWU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDJGXFxcIjsgfVxcblxcbi5pb24taW9zLWZsYW1lLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDJFXFxcIjsgfVxcblxcbi5pb24taW9zLWZsYXNrOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQzMVxcXCI7IH1cXG5cXG4uaW9uLWlvcy1mbGFzay1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQzMFxcXCI7IH1cXG5cXG4uaW9uLWlvcy1mbG93ZXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDMzXFxcIjsgfVxcblxcbi5pb24taW9zLWZsb3dlci1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQzMlxcXCI7IH1cXG5cXG4uaW9uLWlvcy1mb2xkZXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDM1XFxcIjsgfVxcblxcbi5pb24taW9zLWZvbGRlci1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQzNFxcXCI7IH1cXG5cXG4uaW9uLWlvcy1mb290YmFsbDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MzdcXFwiOyB9XFxuXFxuLmlvbi1pb3MtZm9vdGJhbGwtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0MzZcXFwiOyB9XFxuXFxuLmlvbi1pb3MtZ2FtZS1jb250cm9sbGVyLWE6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDM5XFxcIjsgfVxcblxcbi5pb24taW9zLWdhbWUtY29udHJvbGxlci1hLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDM4XFxcIjsgfVxcblxcbi5pb24taW9zLWdhbWUtY29udHJvbGxlci1iOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQzQlxcXCI7IH1cXG5cXG4uaW9uLWlvcy1nYW1lLWNvbnRyb2xsZXItYi1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQzQVxcXCI7IH1cXG5cXG4uaW9uLWlvcy1nZWFyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQzRFxcXCI7IH1cXG5cXG4uaW9uLWlvcy1nZWFyLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDNDXFxcIjsgfVxcblxcbi5pb24taW9zLWdsYXNzZXM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDNGXFxcIjsgfVxcblxcbi5pb24taW9zLWdsYXNzZXMtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0M0VcXFwiOyB9XFxuXFxuLmlvbi1pb3MtZ3JpZC12aWV3OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ0MVxcXCI7IH1cXG5cXG4uaW9uLWlvcy1ncmlkLXZpZXctb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NDBcXFwiOyB9XFxuXFxuLmlvbi1pb3MtaGVhcnQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDQzXFxcIjsgfVxcblxcbi5pb24taW9zLWhlYXJ0LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDQyXFxcIjsgfVxcblxcbi5pb24taW9zLWhlbHA6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDQ2XFxcIjsgfVxcblxcbi5pb24taW9zLWhlbHAtZW1wdHk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDQ0XFxcIjsgfVxcblxcbi5pb24taW9zLWhlbHAtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NDVcXFwiOyB9XFxuXFxuLmlvbi1pb3MtaG9tZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NDhcXFwiOyB9XFxuXFxuLmlvbi1pb3MtaG9tZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ0N1xcXCI7IH1cXG5cXG4uaW9uLWlvcy1pbmZpbml0ZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NEFcXFwiOyB9XFxuXFxuLmlvbi1pb3MtaW5maW5pdGUtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NDlcXFwiOyB9XFxuXFxuLmlvbi1pb3MtaW5mb3JtYXRpb246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDREXFxcIjsgfVxcblxcbi5pb24taW9zLWluZm9ybWF0aW9uLWVtcHR5OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ0QlxcXCI7IH1cXG5cXG4uaW9uLWlvcy1pbmZvcm1hdGlvbi1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ0Q1xcXCI7IH1cXG5cXG4uaW9uLWlvcy1pb25pYy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ0RVxcXCI7IH1cXG5cXG4uaW9uLWlvcy1rZXlwYWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDUwXFxcIjsgfVxcblxcbi5pb24taW9zLWtleXBhZC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ0RlxcXCI7IH1cXG5cXG4uaW9uLWlvcy1saWdodGJ1bGI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDUyXFxcIjsgfVxcblxcbi5pb24taW9zLWxpZ2h0YnVsYi1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ1MVxcXCI7IH1cXG5cXG4uaW9uLWlvcy1saXN0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ1NFxcXCI7IH1cXG5cXG4uaW9uLWlvcy1saXN0LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDUzXFxcIjsgfVxcblxcbi5pb24taW9zLWxvY2F0aW9uOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ1NlxcXCI7IH1cXG5cXG4uaW9uLWlvcy1sb2NhdGlvbi1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ1NVxcXCI7IH1cXG5cXG4uaW9uLWlvcy1sb2NrZWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDU4XFxcIjsgfVxcblxcbi5pb24taW9zLWxvY2tlZC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ1N1xcXCI7IH1cXG5cXG4uaW9uLWlvcy1sb29wOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ1QVxcXCI7IH1cXG5cXG4uaW9uLWlvcy1sb29wLXN0cm9uZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NTlcXFwiOyB9XFxuXFxuLmlvbi1pb3MtbWVkaWNhbDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NUNcXFwiOyB9XFxuXFxuLmlvbi1pb3MtbWVkaWNhbC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ1QlxcXCI7IH1cXG5cXG4uaW9uLWlvcy1tZWRraXQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDVFXFxcIjsgfVxcblxcbi5pb24taW9zLW1lZGtpdC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ1RFxcXCI7IH1cXG5cXG4uaW9uLWlvcy1taWM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDYxXFxcIjsgfVxcblxcbi5pb24taW9zLW1pYy1vZmY6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDVGXFxcIjsgfVxcblxcbi5pb24taW9zLW1pYy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ2MFxcXCI7IH1cXG5cXG4uaW9uLWlvcy1taW51czpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NjRcXFwiOyB9XFxuXFxuLmlvbi1pb3MtbWludXMtZW1wdHk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDYyXFxcIjsgfVxcblxcbi5pb24taW9zLW1pbnVzLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDYzXFxcIjsgfVxcblxcbi5pb24taW9zLW1vbml0b3I6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDY2XFxcIjsgfVxcblxcbi5pb24taW9zLW1vbml0b3Itb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NjVcXFwiOyB9XFxuXFxuLmlvbi1pb3MtbW9vbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NjhcXFwiOyB9XFxuXFxuLmlvbi1pb3MtbW9vbi1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ2N1xcXCI7IH1cXG5cXG4uaW9uLWlvcy1tb3JlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ2QVxcXCI7IH1cXG5cXG4uaW9uLWlvcy1tb3JlLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDY5XFxcIjsgfVxcblxcbi5pb24taW9zLW11c2ljYWwtbm90ZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NkJcXFwiOyB9XFxuXFxuLmlvbi1pb3MtbXVzaWNhbC1ub3RlczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NkNcXFwiOyB9XFxuXFxuLmlvbi1pb3MtbmF2aWdhdGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDZFXFxcIjsgfVxcblxcbi5pb24taW9zLW5hdmlnYXRlLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDZEXFxcIjsgfVxcblxcbi5pb24taW9zLW51dHJpdGlvbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NzBcXFwiOyB9XFxuXFxuLmlvbi1pb3MtbnV0cml0aW9uLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDZGXFxcIjsgfVxcblxcbi5pb24taW9zLXBhcGVyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ3MlxcXCI7IH1cXG5cXG4uaW9uLWlvcy1wYXBlci1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ3MVxcXCI7IH1cXG5cXG4uaW9uLWlvcy1wYXBlcnBsYW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ3NFxcXCI7IH1cXG5cXG4uaW9uLWlvcy1wYXBlcnBsYW5lLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDczXFxcIjsgfVxcblxcbi5pb24taW9zLXBhcnRseXN1bm55OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ3NlxcXCI7IH1cXG5cXG4uaW9uLWlvcy1wYXJ0bHlzdW5ueS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ3NVxcXCI7IH1cXG5cXG4uaW9uLWlvcy1wYXVzZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NzhcXFwiOyB9XFxuXFxuLmlvbi1pb3MtcGF1c2Utb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NzdcXFwiOyB9XFxuXFxuLmlvbi1pb3MtcGF3OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ3QVxcXCI7IH1cXG5cXG4uaW9uLWlvcy1wYXctb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0NzlcXFwiOyB9XFxuXFxuLmlvbi1pb3MtcGVvcGxlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ3Q1xcXCI7IH1cXG5cXG4uaW9uLWlvcy1wZW9wbGUtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0N0JcXFwiOyB9XFxuXFxuLmlvbi1pb3MtcGVyc29uOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ3RVxcXCI7IH1cXG5cXG4uaW9uLWlvcy1wZXJzb24tb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0N0RcXFwiOyB9XFxuXFxuLmlvbi1pb3MtcGVyc29uYWRkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ4MFxcXCI7IH1cXG5cXG4uaW9uLWlvcy1wZXJzb25hZGQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0N0ZcXFwiOyB9XFxuXFxuLmlvbi1pb3MtcGhvdG9zOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ4MlxcXCI7IH1cXG5cXG4uaW9uLWlvcy1waG90b3Mtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0ODFcXFwiOyB9XFxuXFxuLmlvbi1pb3MtcGllOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ4NFxcXCI7IH1cXG5cXG4uaW9uLWlvcy1waWUtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0ODNcXFwiOyB9XFxuXFxuLmlvbi1pb3MtcGludDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0ODZcXFwiOyB9XFxuXFxuLmlvbi1pb3MtcGludC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ4NVxcXCI7IH1cXG5cXG4uaW9uLWlvcy1wbGF5OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ4OFxcXCI7IH1cXG5cXG4uaW9uLWlvcy1wbGF5LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDg3XFxcIjsgfVxcblxcbi5pb24taW9zLXBsdXM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDhCXFxcIjsgfVxcblxcbi5pb24taW9zLXBsdXMtZW1wdHk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDg5XFxcIjsgfVxcblxcbi5pb24taW9zLXBsdXMtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0OEFcXFwiOyB9XFxuXFxuLmlvbi1pb3MtcHJpY2V0YWc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDhEXFxcIjsgfVxcblxcbi5pb24taW9zLXByaWNldGFnLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDhDXFxcIjsgfVxcblxcbi5pb24taW9zLXByaWNldGFnczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0OEZcXFwiOyB9XFxuXFxuLmlvbi1pb3MtcHJpY2V0YWdzLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDhFXFxcIjsgfVxcblxcbi5pb24taW9zLXByaW50ZXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDkxXFxcIjsgfVxcblxcbi5pb24taW9zLXByaW50ZXItb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0OTBcXFwiOyB9XFxuXFxuLmlvbi1pb3MtcHVsc2U6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDkzXFxcIjsgfVxcblxcbi5pb24taW9zLXB1bHNlLXN0cm9uZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0OTJcXFwiOyB9XFxuXFxuLmlvbi1pb3MtcmFpbnk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDk1XFxcIjsgfVxcblxcbi5pb24taW9zLXJhaW55LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDk0XFxcIjsgfVxcblxcbi5pb24taW9zLXJlY29yZGluZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0OTdcXFwiOyB9XFxuXFxuLmlvbi1pb3MtcmVjb3JkaW5nLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDk2XFxcIjsgfVxcblxcbi5pb24taW9zLXJlZG86YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDk5XFxcIjsgfVxcblxcbi5pb24taW9zLXJlZG8tb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0OThcXFwiOyB9XFxuXFxuLmlvbi1pb3MtcmVmcmVzaDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0OUNcXFwiOyB9XFxuXFxuLmlvbi1pb3MtcmVmcmVzaC1lbXB0eTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0OUFcXFwiOyB9XFxuXFxuLmlvbi1pb3MtcmVmcmVzaC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ5QlxcXCI7IH1cXG5cXG4uaW9uLWlvcy1yZWxvYWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNDlEXFxcIjsgfVxcblxcbi5pb24taW9zLXJldmVyc2UtY2FtZXJhOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ5RlxcXCI7IH1cXG5cXG4uaW9uLWlvcy1yZXZlcnNlLWNhbWVyYS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjQ5RVxcXCI7IH1cXG5cXG4uaW9uLWlvcy1yZXdpbmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEExXFxcIjsgfVxcblxcbi5pb24taW9zLXJld2luZC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRBMFxcXCI7IH1cXG5cXG4uaW9uLWlvcy1yb3NlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRBM1xcXCI7IH1cXG5cXG4uaW9uLWlvcy1yb3NlLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEEyXFxcIjsgfVxcblxcbi5pb24taW9zLXNlYXJjaDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QTVcXFwiOyB9XFxuXFxuLmlvbi1pb3Mtc2VhcmNoLXN0cm9uZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QTRcXFwiOyB9XFxuXFxuLmlvbi1pb3Mtc2V0dGluZ3M6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEE3XFxcIjsgfVxcblxcbi5pb24taW9zLXNldHRpbmdzLXN0cm9uZzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QTZcXFwiOyB9XFxuXFxuLmlvbi1pb3Mtc2h1ZmZsZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QTlcXFwiOyB9XFxuXFxuLmlvbi1pb3Mtc2h1ZmZsZS1zdHJvbmc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEE4XFxcIjsgfVxcblxcbi5pb24taW9zLXNraXBiYWNrd2FyZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QUJcXFwiOyB9XFxuXFxuLmlvbi1pb3Mtc2tpcGJhY2t3YXJkLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEFBXFxcIjsgfVxcblxcbi5pb24taW9zLXNraXBmb3J3YXJkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRBRFxcXCI7IH1cXG5cXG4uaW9uLWlvcy1za2lwZm9yd2FyZC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRBQ1xcXCI7IH1cXG5cXG4uaW9uLWlvcy1zbm93eTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QUVcXFwiOyB9XFxuXFxuLmlvbi1pb3Mtc3BlZWRvbWV0ZXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEIwXFxcIjsgfVxcblxcbi5pb24taW9zLXNwZWVkb21ldGVyLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEFGXFxcIjsgfVxcblxcbi5pb24taW9zLXN0YXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEIzXFxcIjsgfVxcblxcbi5pb24taW9zLXN0YXItaGFsZjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QjFcXFwiOyB9XFxuXFxuLmlvbi1pb3Mtc3Rhci1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRCMlxcXCI7IH1cXG5cXG4uaW9uLWlvcy1zdG9wd2F0Y2g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEI1XFxcIjsgfVxcblxcbi5pb24taW9zLXN0b3B3YXRjaC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRCNFxcXCI7IH1cXG5cXG4uaW9uLWlvcy1zdW5ueTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QjdcXFwiOyB9XFxuXFxuLmlvbi1pb3Mtc3Vubnktb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QjZcXFwiOyB9XFxuXFxuLmlvbi1pb3MtdGVsZXBob25lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRCOVxcXCI7IH1cXG5cXG4uaW9uLWlvcy10ZWxlcGhvbmUtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QjhcXFwiOyB9XFxuXFxuLmlvbi1pb3MtdGVubmlzYmFsbDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QkJcXFwiOyB9XFxuXFxuLmlvbi1pb3MtdGVubmlzYmFsbC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRCQVxcXCI7IH1cXG5cXG4uaW9uLWlvcy10aHVuZGVyc3Rvcm06YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEJEXFxcIjsgfVxcblxcbi5pb24taW9zLXRodW5kZXJzdG9ybS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRCQ1xcXCI7IH1cXG5cXG4uaW9uLWlvcy10aW1lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRCRlxcXCI7IH1cXG5cXG4uaW9uLWlvcy10aW1lLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEJFXFxcIjsgfVxcblxcbi5pb24taW9zLXRpbWVyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRDMVxcXCI7IH1cXG5cXG4uaW9uLWlvcy10aW1lci1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRDMFxcXCI7IH1cXG5cXG4uaW9uLWlvcy10b2dnbGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEMzXFxcIjsgfVxcblxcbi5pb24taW9zLXRvZ2dsZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRDMlxcXCI7IH1cXG5cXG4uaW9uLWlvcy10cmFzaDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QzVcXFwiOyB9XFxuXFxuLmlvbi1pb3MtdHJhc2gtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QzRcXFwiOyB9XFxuXFxuLmlvbi1pb3MtdW5kbzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QzdcXFwiOyB9XFxuXFxuLmlvbi1pb3MtdW5kby1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRDNlxcXCI7IH1cXG5cXG4uaW9uLWlvcy11bmxvY2tlZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QzlcXFwiOyB9XFxuXFxuLmlvbi1pb3MtdW5sb2NrZWQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0QzhcXFwiOyB9XFxuXFxuLmlvbi1pb3MtdXBsb2FkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRDQlxcXCI7IH1cXG5cXG4uaW9uLWlvcy11cGxvYWQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0Q0FcXFwiOyB9XFxuXFxuLmlvbi1pb3MtdmlkZW9jYW06YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNENEXFxcIjsgfVxcblxcbi5pb24taW9zLXZpZGVvY2FtLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNENDXFxcIjsgfVxcblxcbi5pb24taW9zLXZvbHVtZS1oaWdoOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRDRVxcXCI7IH1cXG5cXG4uaW9uLWlvcy12b2x1bWUtbG93OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRDRlxcXCI7IH1cXG5cXG4uaW9uLWlvcy13aW5lZ2xhc3M6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEQxXFxcIjsgfVxcblxcbi5pb24taW9zLXdpbmVnbGFzcy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjREMFxcXCI7IH1cXG5cXG4uaW9uLWlvcy13b3JsZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RDNcXFwiOyB9XFxuXFxuLmlvbi1pb3Mtd29ybGQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RDJcXFwiOyB9XFxuXFxuLmlvbi1pcGFkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjFGOVxcXCI7IH1cXG5cXG4uaW9uLWlwaG9uZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxRkFcXFwiOyB9XFxuXFxuLmlvbi1pcG9kOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjFGQlxcXCI7IH1cXG5cXG4uaW9uLWpldDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyOTVcXFwiOyB9XFxuXFxuLmlvbi1rZXk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjk2XFxcIjsgfVxcblxcbi5pb24ta25pZmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjk3XFxcIjsgfVxcblxcbi5pb24tbGFwdG9wOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjFGQ1xcXCI7IH1cXG5cXG4uaW9uLWxlYWY6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMUZEXFxcIjsgfVxcblxcbi5pb24tbGV2ZWxzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI5OFxcXCI7IH1cXG5cXG4uaW9uLWxpZ2h0YnVsYjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyOTlcXFwiOyB9XFxuXFxuLmlvbi1saW5rOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjFGRVxcXCI7IH1cXG5cXG4uaW9uLWxvYWQtYTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyOUFcXFwiOyB9XFxuXFxuLmlvbi1sb2FkLWI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjlCXFxcIjsgfVxcblxcbi5pb24tbG9hZC1jOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI5Q1xcXCI7IH1cXG5cXG4uaW9uLWxvYWQtZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyOURcXFwiOyB9XFxuXFxuLmlvbi1sb2NhdGlvbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYxRkZcXFwiOyB9XFxuXFxuLmlvbi1sb2NrLWNvbWJpbmF0aW9uOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRENFxcXCI7IH1cXG5cXG4uaW9uLWxvY2tlZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMDBcXFwiOyB9XFxuXFxuLmlvbi1sb2ctaW46YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjlFXFxcIjsgfVxcblxcbi5pb24tbG9nLW91dDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyOUZcXFwiOyB9XFxuXFxuLmlvbi1sb29wOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIwMVxcXCI7IH1cXG5cXG4uaW9uLW1hZ25ldDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQTBcXFwiOyB9XFxuXFxuLmlvbi1tYWxlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJBMVxcXCI7IH1cXG5cXG4uaW9uLW1hbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMDJcXFwiOyB9XFxuXFxuLmlvbi1tYXA6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjAzXFxcIjsgfVxcblxcbi5pb24tbWVka2l0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJBMlxcXCI7IH1cXG5cXG4uaW9uLW1lcmdlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjMzRlxcXCI7IH1cXG5cXG4uaW9uLW1pYy1hOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIwNFxcXCI7IH1cXG5cXG4uaW9uLW1pYy1iOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIwNVxcXCI7IH1cXG5cXG4uaW9uLW1pYy1jOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIwNlxcXCI7IH1cXG5cXG4uaW9uLW1pbnVzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIwOVxcXCI7IH1cXG5cXG4uaW9uLW1pbnVzLWNpcmNsZWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjA3XFxcIjsgfVxcblxcbi5pb24tbWludXMtcm91bmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjA4XFxcIjsgfVxcblxcbi5pb24tbW9kZWwtczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQzFcXFwiOyB9XFxuXFxuLmlvbi1tb25pdG9yOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIwQVxcXCI7IH1cXG5cXG4uaW9uLW1vcmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjBCXFxcIjsgfVxcblxcbi5pb24tbW91c2U6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzQwXFxcIjsgfVxcblxcbi5pb24tbXVzaWMtbm90ZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMENcXFwiOyB9XFxuXFxuLmlvbi1uYXZpY29uOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIwRVxcXCI7IH1cXG5cXG4uaW9uLW5hdmljb24tcm91bmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjBEXFxcIjsgfVxcblxcbi5pb24tbmF2aWdhdGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkEzXFxcIjsgfVxcblxcbi5pb24tbmV0d29yazpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNDFcXFwiOyB9XFxuXFxuLmlvbi1uby1zbW9raW5nOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJDMlxcXCI7IH1cXG5cXG4uaW9uLW51Y2xlYXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkE0XFxcIjsgfVxcblxcbi5pb24tb3V0bGV0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM0MlxcXCI7IH1cXG5cXG4uaW9uLXBhaW50YnJ1c2g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEQ1XFxcIjsgfVxcblxcbi5pb24tcGFpbnRidWNrZXQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEQ2XFxcIjsgfVxcblxcbi5pb24tcGFwZXItYWlycGxhbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkMzXFxcIjsgfVxcblxcbi5pb24tcGFwZXJjbGlwOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIwRlxcXCI7IH1cXG5cXG4uaW9uLXBhdXNlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIxMFxcXCI7IH1cXG5cXG4uaW9uLXBlcnNvbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMTNcXFwiOyB9XFxuXFxuLmlvbi1wZXJzb24tYWRkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIxMVxcXCI7IH1cXG5cXG4uaW9uLXBlcnNvbi1zdGFsa2VyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIxMlxcXCI7IH1cXG5cXG4uaW9uLXBpZS1ncmFwaDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQTVcXFwiOyB9XFxuXFxuLmlvbi1waW46YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkE2XFxcIjsgfVxcblxcbi5pb24tcGlucG9pbnQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkE3XFxcIjsgfVxcblxcbi5pb24tcGl6emE6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkE4XFxcIjsgfVxcblxcbi5pb24tcGxhbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjE0XFxcIjsgfVxcblxcbi5pb24tcGxhbmV0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM0M1xcXCI7IH1cXG5cXG4uaW9uLXBsYXk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjE1XFxcIjsgfVxcblxcbi5pb24tcGxheXN0YXRpb246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzBBXFxcIjsgfVxcblxcbi5pb24tcGx1czpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMThcXFwiOyB9XFxuXFxuLmlvbi1wbHVzLWNpcmNsZWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjE2XFxcIjsgfVxcblxcbi5pb24tcGx1cy1yb3VuZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMTdcXFwiOyB9XFxuXFxuLmlvbi1wb2RpdW06YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzQ0XFxcIjsgfVxcblxcbi5pb24tcG91bmQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjE5XFxcIjsgfVxcblxcbi5pb24tcG93ZXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkE5XFxcIjsgfVxcblxcbi5pb24tcHJpY2V0YWc6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkFBXFxcIjsgfVxcblxcbi5pb24tcHJpY2V0YWdzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJBQlxcXCI7IH1cXG5cXG4uaW9uLXByaW50ZXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjFBXFxcIjsgfVxcblxcbi5pb24tcHVsbC1yZXF1ZXN0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM0NVxcXCI7IH1cXG5cXG4uaW9uLXFyLXNjYW5uZXI6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzQ2XFxcIjsgfVxcblxcbi5pb24tcXVvdGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzQ3XFxcIjsgfVxcblxcbi5pb24tcmFkaW8td2F2ZXM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkFDXFxcIjsgfVxcblxcbi5pb24tcmVjb3JkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIxQlxcXCI7IH1cXG5cXG4uaW9uLXJlZnJlc2g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjFDXFxcIjsgfVxcblxcbi5pb24tcmVwbHk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjFFXFxcIjsgfVxcblxcbi5pb24tcmVwbHktYWxsOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIxRFxcXCI7IH1cXG5cXG4uaW9uLXJpYmJvbi1hOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM0OFxcXCI7IH1cXG5cXG4uaW9uLXJpYmJvbi1iOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM0OVxcXCI7IH1cXG5cXG4uaW9uLXNhZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNEFcXFwiOyB9XFxuXFxuLmlvbi1zYWQtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RDdcXFwiOyB9XFxuXFxuLmlvbi1zY2lzc29yczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNEJcXFwiOyB9XFxuXFxuLmlvbi1zZWFyY2g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjFGXFxcIjsgfVxcblxcbi5pb24tc2V0dGluZ3M6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkFEXFxcIjsgfVxcblxcbi5pb24tc2hhcmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjIwXFxcIjsgfVxcblxcbi5pb24tc2h1ZmZsZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMjFcXFwiOyB9XFxuXFxuLmlvbi1za2lwLWJhY2t3YXJkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIyMlxcXCI7IH1cXG5cXG4uaW9uLXNraXAtZm9yd2FyZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMjNcXFwiOyB9XFxuXFxuLmlvbi1zb2NpYWwtYW5kcm9pZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMjVcXFwiOyB9XFxuXFxuLmlvbi1zb2NpYWwtYW5kcm9pZC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIyNFxcXCI7IH1cXG5cXG4uaW9uLXNvY2lhbC1hbmd1bGFyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjREOVxcXCI7IH1cXG5cXG4uaW9uLXNvY2lhbC1hbmd1bGFyLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEQ4XFxcIjsgfVxcblxcbi5pb24tc29jaWFsLWFwcGxlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIyN1xcXCI7IH1cXG5cXG4uaW9uLXNvY2lhbC1hcHBsZS1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIyNlxcXCI7IH1cXG5cXG4uaW9uLXNvY2lhbC1iaXRjb2luOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJBRlxcXCI7IH1cXG5cXG4uaW9uLXNvY2lhbC1iaXRjb2luLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkFFXFxcIjsgfVxcblxcbi5pb24tc29jaWFsLWJ1ZmZlcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMjlcXFwiOyB9XFxuXFxuLmlvbi1zb2NpYWwtYnVmZmVyLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjI4XFxcIjsgfVxcblxcbi5pb24tc29jaWFsLWNocm9tZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0REJcXFwiOyB9XFxuXFxuLmlvbi1zb2NpYWwtY2hyb21lLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNERBXFxcIjsgfVxcblxcbi5pb24tc29jaWFsLWNvZGVwZW46YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEREXFxcIjsgfVxcblxcbi5pb24tc29jaWFsLWNvZGVwZW4tb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RENcXFwiOyB9XFxuXFxuLmlvbi1zb2NpYWwtY3NzMzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0REZcXFwiOyB9XFxuXFxuLmlvbi1zb2NpYWwtY3NzMy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRERVxcXCI7IH1cXG5cXG4uaW9uLXNvY2lhbC1kZXNpZ25lcm5ld3M6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjJCXFxcIjsgfVxcblxcbi5pb24tc29jaWFsLWRlc2lnbmVybmV3cy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIyQVxcXCI7IH1cXG5cXG4uaW9uLXNvY2lhbC1kcmliYmJsZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMkRcXFwiOyB9XFxuXFxuLmlvbi1zb2NpYWwtZHJpYmJibGUtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMkNcXFwiOyB9XFxuXFxuLmlvbi1zb2NpYWwtZHJvcGJveDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMkZcXFwiOyB9XFxuXFxuLmlvbi1zb2NpYWwtZHJvcGJveC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIyRVxcXCI7IH1cXG5cXG4uaW9uLXNvY2lhbC1ldXJvOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRFMVxcXCI7IH1cXG5cXG4uaW9uLXNvY2lhbC1ldXJvLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEUwXFxcIjsgfVxcblxcbi5pb24tc29jaWFsLWZhY2Vib29rOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIzMVxcXCI7IH1cXG5cXG4uaW9uLXNvY2lhbC1mYWNlYm9vay1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIzMFxcXCI7IH1cXG5cXG4uaW9uLXNvY2lhbC1mb3Vyc3F1YXJlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM0RFxcXCI7IH1cXG5cXG4uaW9uLXNvY2lhbC1mb3Vyc3F1YXJlLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzRDXFxcIjsgfVxcblxcbi5pb24tc29jaWFsLWZyZWVic2QtZGV2aWw6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkM0XFxcIjsgfVxcblxcbi5pb24tc29jaWFsLWdpdGh1YjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMzNcXFwiOyB9XFxuXFxuLmlvbi1zb2NpYWwtZ2l0aHViLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjMyXFxcIjsgfVxcblxcbi5pb24tc29jaWFsLWdvb2dsZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNEZcXFwiOyB9XFxuXFxuLmlvbi1zb2NpYWwtZ29vZ2xlLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzRFXFxcIjsgfVxcblxcbi5pb24tc29jaWFsLWdvb2dsZXBsdXM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjM1XFxcIjsgfVxcblxcbi5pb24tc29jaWFsLWdvb2dsZXBsdXMtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMzRcXFwiOyB9XFxuXFxuLmlvbi1zb2NpYWwtaGFja2VybmV3czpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMzdcXFwiOyB9XFxuXFxuLmlvbi1zb2NpYWwtaGFja2VybmV3cy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIzNlxcXCI7IH1cXG5cXG4uaW9uLXNvY2lhbC1odG1sNTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RTNcXFwiOyB9XFxuXFxuLmlvbi1zb2NpYWwtaHRtbDUtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RTJcXFwiOyB9XFxuXFxuLmlvbi1zb2NpYWwtaW5zdGFncmFtOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM1MVxcXCI7IH1cXG5cXG4uaW9uLXNvY2lhbC1pbnN0YWdyYW0tb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNTBcXFwiOyB9XFxuXFxuLmlvbi1zb2NpYWwtamF2YXNjcmlwdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RTVcXFwiOyB9XFxuXFxuLmlvbi1zb2NpYWwtamF2YXNjcmlwdC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRFNFxcXCI7IH1cXG5cXG4uaW9uLXNvY2lhbC1saW5rZWRpbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMzlcXFwiOyB9XFxuXFxuLmlvbi1zb2NpYWwtbGlua2VkaW4tb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyMzhcXFwiOyB9XFxuXFxuLmlvbi1zb2NpYWwtbWFya2Rvd246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEU2XFxcIjsgfVxcblxcbi5pb24tc29jaWFsLW5vZGVqczpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RTdcXFwiOyB9XFxuXFxuLmlvbi1zb2NpYWwtb2N0b2NhdDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RThcXFwiOyB9XFxuXFxuLmlvbi1zb2NpYWwtcGludGVyZXN0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJCMVxcXCI7IH1cXG5cXG4uaW9uLXNvY2lhbC1waW50ZXJlc3Qtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQjBcXFwiOyB9XFxuXFxuLmlvbi1zb2NpYWwtcHl0aG9uOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRFOVxcXCI7IH1cXG5cXG4uaW9uLXNvY2lhbC1yZWRkaXQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjNCXFxcIjsgfVxcblxcbi5pb24tc29jaWFsLXJlZGRpdC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIzQVxcXCI7IH1cXG5cXG4uaW9uLXNvY2lhbC1yc3M6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjNEXFxcIjsgfVxcblxcbi5pb24tc29jaWFsLXJzcy1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjIzQ1xcXCI7IH1cXG5cXG4uaW9uLXNvY2lhbC1zYXNzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRFQVxcXCI7IH1cXG5cXG4uaW9uLXNvY2lhbC1za3lwZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyM0ZcXFwiOyB9XFxuXFxuLmlvbi1zb2NpYWwtc2t5cGUtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyM0VcXFwiOyB9XFxuXFxuLmlvbi1zb2NpYWwtc25hcGNoYXQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEVDXFxcIjsgfVxcblxcbi5pb24tc29jaWFsLXNuYXBjaGF0LW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEVCXFxcIjsgfVxcblxcbi5pb24tc29jaWFsLXR1bWJscjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNDFcXFwiOyB9XFxuXFxuLmlvbi1zb2NpYWwtdHVtYmxyLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjQwXFxcIjsgfVxcblxcbi5pb24tc29jaWFsLXR1eDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQzVcXFwiOyB9XFxuXFxuLmlvbi1zb2NpYWwtdHdpdGNoOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRFRVxcXCI7IH1cXG5cXG4uaW9uLXNvY2lhbC10d2l0Y2gtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RURcXFwiOyB9XFxuXFxuLmlvbi1zb2NpYWwtdHdpdHRlcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNDNcXFwiOyB9XFxuXFxuLmlvbi1zb2NpYWwtdHdpdHRlci1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI0MlxcXCI7IH1cXG5cXG4uaW9uLXNvY2lhbC11c2Q6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzUzXFxcIjsgfVxcblxcbi5pb24tc29jaWFsLXVzZC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM1MlxcXCI7IH1cXG5cXG4uaW9uLXNvY2lhbC12aW1lbzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNDVcXFwiOyB9XFxuXFxuLmlvbi1zb2NpYWwtdmltZW8tb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNDRcXFwiOyB9XFxuXFxuLmlvbi1zb2NpYWwtd2hhdHNhcHA6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEYwXFxcIjsgfVxcblxcbi5pb24tc29jaWFsLXdoYXRzYXBwLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEVGXFxcIjsgfVxcblxcbi5pb24tc29jaWFsLXdpbmRvd3M6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjQ3XFxcIjsgfVxcblxcbi5pb24tc29jaWFsLXdpbmRvd3Mtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNDZcXFwiOyB9XFxuXFxuLmlvbi1zb2NpYWwtd29yZHByZXNzOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI0OVxcXCI7IH1cXG5cXG4uaW9uLXNvY2lhbC13b3JkcHJlc3Mtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNDhcXFwiOyB9XFxuXFxuLmlvbi1zb2NpYWwteWFob286YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjRCXFxcIjsgfVxcblxcbi5pb24tc29jaWFsLXlhaG9vLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjRBXFxcIjsgfVxcblxcbi5pb24tc29jaWFsLXllbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RjJcXFwiOyB9XFxuXFxuLmlvbi1zb2NpYWwteWVuLW91dGxpbmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGNEYxXFxcIjsgfVxcblxcbi5pb24tc29jaWFsLXlvdXR1YmU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjREXFxcIjsgfVxcblxcbi5pb24tc29jaWFsLXlvdXR1YmUtb3V0bGluZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNENcXFwiOyB9XFxuXFxuLmlvbi1zb3VwLWNhbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEY0RjRcXFwiOyB9XFxuXFxuLmlvbi1zb3VwLWNhbi1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRGM1xcXCI7IH1cXG5cXG4uaW9uLXNwZWFrZXJwaG9uZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQjJcXFwiOyB9XFxuXFxuLmlvbi1zcGVlZG9tZXRlcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQjNcXFwiOyB9XFxuXFxuLmlvbi1zcG9vbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQjRcXFwiOyB9XFxuXFxuLmlvbi1zdGFyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI0RVxcXCI7IH1cXG5cXG4uaW9uLXN0YXRzLWJhcnM6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkI1XFxcIjsgfVxcblxcbi5pb24tc3RlYW06YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzBCXFxcIjsgfVxcblxcbi5pb24tc3RvcDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNEZcXFwiOyB9XFxuXFxuLmlvbi10aGVybW9tZXRlcjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQjZcXFwiOyB9XFxuXFxuLmlvbi10aHVtYnNkb3duOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI1MFxcXCI7IH1cXG5cXG4uaW9uLXRodW1ic3VwOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI1MVxcXCI7IH1cXG5cXG4uaW9uLXRvZ2dsZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNTVcXFwiOyB9XFxuXFxuLmlvbi10b2dnbGUtZmlsbGVkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjM1NFxcXCI7IH1cXG5cXG4uaW9uLXRyYW5zZ2VuZGVyOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRGNVxcXCI7IH1cXG5cXG4uaW9uLXRyYXNoLWE6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjUyXFxcIjsgfVxcblxcbi5pb24tdHJhc2gtYjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNTNcXFwiOyB9XFxuXFxuLmlvbi10cm9waHk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzU2XFxcIjsgfVxcblxcbi5pb24tdHNoaXJ0OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRGN1xcXCI7IH1cXG5cXG4uaW9uLXRzaGlydC1vdXRsaW5lOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjRGNlxcXCI7IH1cXG5cXG4uaW9uLXVtYnJlbGxhOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJCN1xcXCI7IH1cXG5cXG4uaW9uLXVuaXZlcnNpdHk6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzU3XFxcIjsgfVxcblxcbi5pb24tdW5sb2NrZWQ6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjU0XFxcIjsgfVxcblxcbi5pb24tdXBsb2FkOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI1NVxcXCI7IH1cXG5cXG4uaW9uLXVzYjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyQjhcXFwiOyB9XFxuXFxuLmlvbi12aWRlb2NhbWVyYTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNTZcXFwiOyB9XFxuXFxuLmlvbi12b2x1bWUtaGlnaDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNTdcXFwiOyB9XFxuXFxuLmlvbi12b2x1bWUtbG93OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjI1OFxcXCI7IH1cXG5cXG4uaW9uLXZvbHVtZS1tZWRpdW06YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjU5XFxcIjsgfVxcblxcbi5pb24tdm9sdW1lLW11dGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjVBXFxcIjsgfVxcblxcbi5pb24td2FuZDpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYzNThcXFwiOyB9XFxuXFxuLmlvbi13YXRlcmRyb3A6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjVCXFxcIjsgfVxcblxcbi5pb24td2lmaTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEYyNUNcXFwiOyB9XFxuXFxuLmlvbi13aW5lZ2xhc3M6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMkI5XFxcIjsgfVxcblxcbi5pb24td29tYW46YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMjVEXFxcIjsgfVxcblxcbi5pb24td3JlbmNoOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRjJCQVxcXCI7IH1cXG5cXG4uaW9uLXhib3g6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxGMzBDXFxcIjsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIDtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9mb250cy9pb25pY29ucy5jc3MnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImltcG9ydCBWdWUgZnJvbSAnbmF0aXZlc2NyaXB0LXZ1ZSdcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJ1xuaW1wb3J0IEhvbWUgZnJvbSAnLi92aWV3cy9Ib21lLnZ1ZSdcbmltcG9ydCBWdWVEZXZ0b29scyBmcm9tICduYXRpdmVzY3JpcHQtdnVlLWRldnRvb2xzJ1xuaW1wb3J0IFJhZExpc3RWaWV3IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1saXN0dmlldy92dWUnXG5cblZ1ZS51c2UoUmFkTGlzdFZpZXcpXG5WdWUucmVnaXN0ZXJFbGVtZW50KCdCYXJjb2RlU2Nhbm5lcicsICgpID0+IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC1iYXJjb2Rlc2Nhbm5lcicpLkJhcmNvZGVTY2FubmVyVmlldylcblxuLy9mb250aWNvbiBwbHVnaW5cbmltcG9ydCB7IFROU0ZvbnRJY29uLCBmb250aWNvbiB9IGZyb20gJ25hdGl2ZXNjcmlwdC1mb250aWNvbic7XG5UTlNGb250SWNvbi5kZWJ1ZyA9IGZhbHNlO1xuVE5TRm9udEljb24ucGF0aHMgPSB7XG4gICdmYSc6ICcuL2ZvbnRzL2ZvbnQtYXdlc29tZS5jc3MnLFxuICAnaW9uJzogJy4vZm9udHMvaW9uaWNvbnMuY3NzJyxcbn07XG5UTlNGb250SWNvbi5sb2FkQ3NzKCk7XG5WdWUuZmlsdGVyKCdmb250aWNvbicsIGZvbnRpY29uKTtcblxuXG5pZiAoVE5TX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIFZ1ZS51c2UoVnVlRGV2dG9vbHMpXG59XG4vLyBQcmludHMgVnVlIGxvZ3Mgd2hlbiAtLWVudi5wcm9kdWN0aW9uIGlzICpOT1QqIHNldCB3aGlsZSBidWlsZGluZ1xuVnVlLmNvbmZpZy5zaWxlbnQgPSAoVE5TX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKVxuXG5cbm5ldyBWdWUoe1xuICBzdG9yZSxcbiAgcmVuZGVyOiBoID0+IGgoJ2ZyYW1lJywgW2goSG9tZSldKVxufSkuJHN0YXJ0KClcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblxuICAgIC8vIGNvbnN0cnVjdG9yKHthbmltYWxfaWQsIGFuaW1hbF9uYW1lLCBhbmltYWxfdHlwZSwgc2V4LCBhZ2UsIERPQiwgcHJpbWFyeV9jb2xvciwgc2Vjb25kYXJ5X2NvbG9yLCBicmVlZF9ncm91cCwgcHJpbWFyeV9icmVlZCwgc2Vjb25kYXJ5X2JyZWVkLCBhbmltYWxfc3RhdCwgc3RhbXAgIH0pIHtcbiAgICAvLyAgICAgdGhpcy5hbmltYWxfaWQgPSBhbmltYWxfaWRcbiAgICAvLyAgICAgdGhpcy5hbmltYWxfbmFtZSA9IGFuaW1hbF9uYW1lXG4gICAgLy8gICAgIHRoaXMuYW5pbWFsX3R5cGUgPSBhbmltYWxfdHlwZVxuICAgIC8vICAgICB0aGlzLnNleCA9IHNleFxuICAgIC8vICAgICB0aGlzLmFnZSA9IGFnZVxuICAgIC8vICAgICB0aGlzLkRPQiA9IG51RE9CbGxcbiAgICAvLyAgICAgdGhpcy5wcmltYXJ5X2NvbG9yID0gcHJpbWFyeV9jb2xvclxuICAgIC8vICAgICB0aGlzLnNlY29uZGFyeV9jb2xvciA9IHNlY29uZGFyeV9jb2xvclxuICAgIC8vICAgICB0aGlzLmJyZWVkX2dyb3VwID0gYnJlZWRfZ3JvdXBcbiAgICAvLyAgICAgdGhpcy5wcmltYXJ5X2JyZWVkID0gcHJpbWFyeV9icmVlZFxuICAgIC8vICAgICB0aGlzLnNlY29uZGFyeV9icmVlZCA9IHNlY29uZGFyeV9icmVlZFxuICAgIC8vICAgICB0aGlzLmFuaW1hbF9zdGF0ID0gYW5pbWFsX3N0YXRcbiAgICAvLyAgICAgdGhpcy5zdGFtcCA9IHN0YW1wXG4gICAgLy8gfVxuXG5cbiAgICAvLyBjYXRlZ29yeTogXCJEb2dcIixcbiAgICAvLyBjYXRlZ29yeVRhZzogXCIjMjdBRTYwXCIsXG4gICAgLy8gYnJlZWRfZ3JvdXA6IFwiSG91bmRcIixcbiAgICAvLyBwcmltYXJ5X2JyZWVkOiBcIkJlYWdsZVwiLFxuICAgIC8vIGFnZTogXCIxMFwiLFxuICAgIC8vIGdlbmRlcjogXCJNXCIsXG4gICAgLy8gYW5pbWFsX3NpemU6IFwiU21hbGxcIixcbiAgICAvLyBwcmltYXJ5X2NvbG9yOiBcIlRhblwiLFxuICAgIC8vIGxvY2F0aW9uOiBcIkRvd25leVwiLFxuICAgIC8vIGlzQXZhaWxhYmxlOiBmYWxzZSxcbiAgICAvLyBpc0Zhdm9yaXRlOiB0cnVlLFxuICAgIC8vIGNvbW1lbnRzOiAxMSxcbiAgICAvLyByYXRpbmc6IFwiNC4wXCIsXG4gICAgLy8gZGVzY3JpcHRpb246IFwiYVwiXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBjb25zdHJ1Y3RvciAocXVlc3Rpb24pIHtcbiAgICB0aGlzLmlkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwMClcbiAgICB0aGlzLnF1ZXN0aW9uID0gcXVlc3Rpb25cbiAgICB0aGlzLmFuc3dlciA9IG51bGxcbiAgICB0aGlzLmNvdW50ID0gMFxuICB9XG59IiwiICBleHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMubG9jYXRpb24gPSAndGVtcCdcbiAgfVxuXG4gIHNldExvY2F0aW9uIChxckNvZGUpIHtcbiAgICB0aGlzLmxvY2F0aW9uID0gcXJDb2RlXG4gIH1cblxuICBzZXRUaWNrZXRJbmZvICh7IHBob25lLCBuYW1lLCBxdWVyeSB9KSB7XG4gICAgdGhpcy5waG9uZSA9IHBob25lXG4gICAgdGhpcy5uYW1lID0gbmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMudGltZUluID0gbmV3IERhdGUoKVxuICB9XG5cbn1cbiIsImNvbnN0IGh0dHBNb2R1bGUgPSByZXF1aXJlKCd0bnMtY29yZS1tb2R1bGVzL2h0dHAnKVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZ2V0QW5pbWFscygpIHtcbiAgICAgICAgcmV0dXJuIGh0dHBNb2R1bGUuZ2V0SlNPTihgaHR0cHM6Ly9hY3Vhc2VydmVyLmhlcm9rdWFwcC5jb20vYW5pbWFsc2ApXG4gICAgfVxufVxuXG5cbiIsImltcG9ydCB7IGZhcXMgfSBmcm9tICdAL2RiL2ZhcXMuanNvbidcblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXRGYXFzICgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJlc29sdmUoZmFxcylcbiAgICAgIH0sIDEwKVxuICAgIH0pXG4gIH0sXG4gIGFkZEZhcSAoZW50cnkpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJlc29sdmUoZW50cnkpXG4gICAgICB9LCAxMClcbiAgICB9KVxuICB9XG59XG4iLCIvLyBpbXBvcnQgeyB0aWNrZXRzIH0gZnJvbSAnQC9kYi9mYXFzLmpzb24nXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLy8gZ2V0VGlja2V0cyAoKSB7XG4gIC8vICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgLy8gICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAvLyAgICAgICByZXNvbHZlKHsgZGF0YTogdGlja2V0cyB9KVxuICAvLyAgICAgfSwgMTApXG4gIC8vICAgfSlcbiAgLy8gfSxcbiAgYWRkVGlja2V0IChlbnRyeSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmVzb2x2ZShlbnRyeSlcbiAgICAgIH0sIDEwKVxuICAgIH0pXG4gIH1cbn1cbiIsImNvbnN0IGh0dHBNb2R1bGUgPSByZXF1aXJlKCd0bnMtY29yZS1tb2R1bGVzL2h0dHAnKVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdldEZhcXMgKCkge1xuICAgIHJldHVybiBodHRwTW9kdWxlLmdldEpTT04oJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9mYXFzJylcbiAgfSxcbiAgYWRkRmFxIChmYXEpIHtcbiAgICByZXR1cm4gaHR0cE1vZHVsZS5yZXF1ZXN0KHtcbiAgICAgIC8vIHVybDogYGh0dHBzOi8vYWN1YS1zZXJ2ZXIuaGVyb2t1YXBwLmNvbS9mYXFzYCxcbiAgICAgIC8vIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCcsXG4gICAgICB1cmw6ICdodHRwczovL2FjdWFzZXJ2ZXIuaGVyb2t1YXBwLmNvbS90aWNrZXRzJyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgICAgY29udGVudDogSlNPTi5zdHJpbmdpZnkoZmFxKVxuICAgIH0pXG4gIH1cbn1cbiIsImNvbnN0IGh0dHBNb2R1bGUgPSByZXF1aXJlKCd0bnMtY29yZS1tb2R1bGVzL2h0dHAnKVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFkZFRpY2tldCAodGlja2V0KSB7XG4gICAgcmV0dXJuIGh0dHBNb2R1bGUucmVxdWVzdCh7XG4gICAgICAvLyB1cmw6IGBodHRwOi8vWzo6MV06MzAwMC90aWNrZXRzYCxcbiAgICAgIC8vIHVybDpgaHR0cHM6Ly9hY3VhdGVhbS5oZXJva3VhcHAuY29tL3RpY2tldHNgLFxuICAgICAgdXJsOiAnaHR0cHM6Ly9hY3Vhc2VydmVyLmhlcm9rdWFwcC5jb20vdGlja2V0cycsXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICAgIGNvbnRlbnQ6IEpTT04uc3RyaW5naWZ5KHRpY2tldClcbiAgICB9KVxuICB9LFxuXG4gIGNoZWNrVGlja2V0ICh0aWNrZXRJZCkge1xuICAgIHJldHVybiBodHRwTW9kdWxlLmdldEpTT04oXG4gICAgICAgIGBodHRwOi8vWzo6MV06MzAwMC90aWNrZXRzLyR7dGlja2V0SWR9YFxuICAgICAgICAvLyBgaHR0cHM6Ly9hY3VhdGVhbS5oZXJva3VhcHAuY29tL3RpY2tldHMvJHt0aWNrZXRJZH1gXG5cbiAgKX1cbn1cbiIsImltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IFZ1ZXggZnJvbSAndnVleCdcbmltcG9ydCBBbmltYWwgZnJvbSAnQC9tb2RlbHMvQW5pbWFsJ1xuaW1wb3J0IFRpY2tldCBmcm9tICdAL21vZGVscy9UaWNrZXQnXG5pbXBvcnQgVGlja2V0U2VydmljZSBmcm9tICdAL3NlcnZpY2VzL1RpY2tldFNlcnZpY2UnXG5pbXBvcnQgRmFxU2VydmljZSBmcm9tICdAL3NlcnZpY2VzL0ZhcVNlcnZpY2UnXG4vLyBpbXBvcnQgVGlja2V0U2VydmljZSBmcm9tICdAL3NlcnZpY2VzL0Zha2VUaWNrZXRTZXJ2aWNlJ1xuLy8gaW1wb3J0IEZhcVNlcnZpY2UgZnJvbSAnQC9zZXJ2aWNlcy9GYWtlRmFxU2VydmljZSdcblxuVnVlLnVzZShWdWV4KVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVnVleC5TdG9yZSh7XG4gIHN0YXRlOiB7XG4gICAgYW5pbWFsczogW10sXG4gICAgdGlja2V0czogW10sXG4gICAgZmFxczogW10sXG4gICAgdXNlckFuaW1hbDogbmV3IEFuaW1hbCgpLFxuICAgIHVzZXJGYXE6IHt9LFxuICAgIGxvY2F0aW9uOiAnRG93bmV5JyxcbiAgICB1c2VyVGlja2V0OiBuZXcgVGlja2V0KCksXG4gICAgYXBwcm92ZWRUaWNrZXQ6IHVuZGVmaW5lZFxuICB9LFxuICAvLyBjaGFuZ2UgdGhlIHN0YXRlIG9mIHRoZSBhcHAgKG11c3QgYmUgc3luY2hyb25vdXMpXG4gIG11dGF0aW9uczoge1xuICAgIC8vIGFkb3B0aW9uXG4gICAgc3RvcmVBbmltYWwoc3RhdGUsIGFuaW1hbCkge1xuICAgICAgc3RhdGUudXNlckZhcSA9IGFuaW1hbFxuICAgIH0sXG4gICAgQUREX0FOSU1BTChzdGF0ZSwgYW5pbWFsKSB7XG4gICAgICBzdGF0ZS5hbmltYWxzLnB1c2goYW5pbWFsKVxuICAgIH0sXG4gICAgc3RvcmVGYXEoc3RhdGUsIGZhcSkge1xuICAgICAgc3RhdGUudXNlckZhcSA9IGZhcVxuICAgIH0sXG4gICAgc2V0VGlja2V0TG9jYXRpb24gKHN0YXRlLCBsb2NhdGlvbikge1xuICAgICAgc3RhdGUubG9jYXRpb24gPSBsb2NhdGlvblxuICAgIH0sXG4gICAgc2V0VGlja2V0SW5mbyAoc3RhdGUsIHVzZXJJbnB1dCkge1xuICAgICAgc3RhdGUudXNlclRpY2tldC5zZXRUaWNrZXRJbmZvKHVzZXJJbnB1dClcbiAgICB9LFxuICAgIHN0b3JlVGlja2V0IChzdGF0ZSwgdGlja2V0KSB7XG4gICAgICBzdGF0ZS51c2VyVGlja2V0ID0gdGlja2V0XG4gICAgfSxcbiAgICBTRVRfVElDS0VUIChzdGF0ZSwgdGlja2V0KSB7XG4gICAgICBzdGF0ZS5hcHByb3ZlZFRpY2tldCA9IHRpY2tldFxuICAgIH0sXG4gICAgQUREX1RJQ0tFVCAoc3RhdGUsIHRpY2tldCkge1xuICAgICAgc3RhdGUuYXBwcm92ZWRUaWNrZXQgPSB0aWNrZXRcbiAgICB9LFxuICAgIFNFVF9GQVFTIChzdGF0ZSwgZmFxcykge1xuICAgICAgc3RhdGUuZmFxcyA9IGZhcXNcbiAgICB9LFxuICAgIEFERF9GQVEgKHN0YXRlLCBmYXEpIHtcbiAgICAgIHN0YXRlLmZhcXMucHVzaChmYXEpXG4gICAgfVxuICAgIFxuXG4gIH0sXG4gIC8vIGFzeW5jaHJvbm91cyBvcGVyYXRpb25zIChTdWNoIGFzIEFQSSBjYWxscylcbiAgYWN0aW9uczoge1xuICAgIGNoZWNrVGlja2V0ICh7IGNvbW1pdCB9LCB0aWNrZXRJZCkge1xuICAgICAgVGlja2V0U2VydmljZS5jaGVja1RpY2tldCh0aWNrZXRJZClcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICBjb21taXQoJ1NFVF9USUNLRVQnLCByZXMpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBhZGRUaWNrZXQgKHsgY29tbWl0IH0sIHRpY2tldCkge1xuICAgICAgVGlja2V0U2VydmljZS5hZGRUaWNrZXQodGlja2V0KVxuICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgIGNvbW1pdCgnQUREX1RJQ0tFVCcsIHJlcy5jb250ZW50LnRvSlNPTigpKVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgbG9hZEZhcXMgKHsgY29tbWl0IH0pIHtcbiAgICAgIEZhcVNlcnZpY2UuZ2V0RmFxcygpXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgY29tbWl0KCdTRVRfRkFRUycsIHJlcylcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIGFkZEZhcSAoeyBjb21taXQgfSwgZmFxKSB7XG4gICAgICBGYXFTZXJ2aWNlLmFkZEZhcShmYXEpXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgY29tbWl0KCdBRERfRkFRJywgcmVzLmNvbnRlbnQudG9KU09OKCkpXG4gICAgICAgIH0pXG4gICAgfVxuICB9LFxuICBnZXR0ZXJzOiB7XG4gICAgZ2V0U2VhcmNoUmVzdWx0czogc3RhdGUgPT4gc2VhcmNoID0+IHtcbiAgICAgIGlmIChzZWFyY2ggPT09ICcnKVxuICAgICAgICByZXR1cm4gc3RhdGUuZmFxc1xuICAgICAgXG4gICAgICBjb25zdCB3b3JkcyA9IHNlYXJjaC5zcGxpdCgnICcpXG4gICAgICBcbiAgICAgIHJldHVybiBzdGF0ZS5mYXFzLmZpbHRlcihmYXEgPT4gd29yZHMuc29tZShcbiAgICAgICAgd29yZCA9PiBmYXEucXVlcnkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh3b3JkLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgIHx8IGZhcS5hbnN3ZXIudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh3b3JkLnRvTG93ZXJDYXNlKCkpKSlcbiAgICB9XG4gIH1cbn0pXG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0Fkb3B0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iMTUxMDRmMiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BZG9wdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0Fkb3B0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9BZG9wdGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2p0cmFuL0Rlc2t0b3AvQUNVQS9hY3VhVl8yL2FjdWEtbW9iaWxlL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2IxNTEwNGYyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2IxNTEwNGYyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2IxNTEwNGYyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BZG9wdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YjE1MTA0ZjImXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYjE1MTA0ZjInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZpZXdzL0Fkb3B0aW9uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BZG9wdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BZG9wdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Fkb3B0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Fkb3B0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Fkb3B0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iMTUxMDRmMiZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRmFxLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lMzlkMTA5MiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9GYXEudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9GYXEudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0ZhcS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1lMzlkMTA5MiZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImUzOWQxMDkyXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2p0cmFuL0Rlc2t0b3AvQUNVQS9hY3VhVl8yL2FjdWEtbW9iaWxlL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2UzOWQxMDkyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2UzOWQxMDkyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2UzOWQxMDkyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9GYXEudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWUzOWQxMDkyJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2UzOWQxMDkyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2aWV3cy9GYXEudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZhcS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GYXEudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmFxLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWUzOWQxMDkyJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmFxLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWUzOWQxMDkyJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GYXEudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWUzOWQxMDkyJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yZjJiZTdlNCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vSG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vSG9tZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yZjJiZTdlNCZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjJmMmJlN2U0XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2p0cmFuL0Rlc2t0b3AvQUNVQS9hY3VhVl8yL2FjdWEtbW9iaWxlL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzJmMmJlN2U0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzJmMmJlN2U0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzJmMmJlN2U0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yZjJiZTdlNCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyZjJiZTdlNCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmlld3MvSG9tZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MmYyYmU3ZTQmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJmMmJlN2U0JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yZjJiZTdlNCZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTG9jYXRpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNlNTk3ODY0JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0xvY2F0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTG9jYXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0xvY2F0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNlNTk3ODY0JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiM2U1OTc4NjRcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvanRyYW4vRGVza3RvcC9BQ1VBL2FjdWFWXzIvYWN1YS1tb2JpbGUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnM2U1OTc4NjQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnM2U1OTc4NjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnM2U1OTc4NjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0xvY2F0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zZTU5Nzg2NCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczZTU5Nzg2NCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmlld3MvTG9jYXRpb24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvY2F0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvY2F0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvY2F0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNlNTk3ODY0JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9jYXRpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2U1OTc4NjQmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvY2F0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zZTU5Nzg2NCZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU2VydmljZVJlcXVlc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNjY2VjZjA5JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1NlcnZpY2VSZXF1ZXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU2VydmljZVJlcXVlc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1NlcnZpY2VSZXF1ZXN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNjY2VjZjA5JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIzY2NlY2YwOVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9qdHJhbi9EZXNrdG9wL0FDVUEvYWN1YVZfMi9hY3VhLW1vYmlsZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczY2NlY2YwOScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczY2NlY2YwOScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczY2NlY2YwOScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU2VydmljZVJlcXVlc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNjY2VjZjA5JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzNjY2VjZjA5Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2aWV3cy9TZXJ2aWNlUmVxdWVzdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2VydmljZVJlcXVlc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2VydmljZVJlcXVlc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZXJ2aWNlUmVxdWVzdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zY2NlY2YwOSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZXJ2aWNlUmVxdWVzdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zY2NlY2YwOSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZXJ2aWNlUmVxdWVzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2NjZWNmMDkmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1RpY2tldC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDdiNDBjMGEmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVGlja2V0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVGlja2V0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9UaWNrZXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDdiNDBjMGEmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjA3YjQwYzBhXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2p0cmFuL0Rlc2t0b3AvQUNVQS9hY3VhVl8yL2FjdWEtbW9iaWxlL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzA3YjQwYzBhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzA3YjQwYzBhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzA3YjQwYzBhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9UaWNrZXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA3YjQwYzBhJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzA3YjQwYzBhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2aWV3cy9UaWNrZXQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RpY2tldC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UaWNrZXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UaWNrZXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDdiNDBjMGEmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGlja2V0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTA3YjQwYzBhJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RpY2tldC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDdiNDBjMGEmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1RpY2tldEZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZhOGJmZjVmJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1RpY2tldEZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9UaWNrZXRGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNmE4YmZmNWZcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvanRyYW4vRGVza3RvcC9BQ1VBL2FjdWFWXzIvYWN1YS1tb2JpbGUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNmE4YmZmNWYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNmE4YmZmNWYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNmE4YmZmNWYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1RpY2tldEZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZhOGJmZjVmJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzZhOGJmZjVmJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2aWV3cy9UaWNrZXRGb3JtLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UaWNrZXRGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RpY2tldEZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RpY2tldEZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZhOGJmZjVmJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9UaWNrZXRPcHRpb25zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xMzlkOTU1MyZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9UaWNrZXRPcHRpb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVGlja2V0T3B0aW9ucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vVGlja2V0T3B0aW9ucy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xMzlkOTU1MyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMTM5ZDk1NTNcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvanRyYW4vRGVza3RvcC9BQ1VBL2FjdWFWXzIvYWN1YS1tb2JpbGUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMTM5ZDk1NTMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMTM5ZDk1NTMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMTM5ZDk1NTMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1RpY2tldE9wdGlvbnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTEzOWQ5NTUzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzEzOWQ5NTUzJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2aWV3cy9UaWNrZXRPcHRpb25zLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UaWNrZXRPcHRpb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RpY2tldE9wdGlvbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UaWNrZXRPcHRpb25zLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTEzOWQ5NTUzJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RpY2tldE9wdGlvbnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTM5ZDk1NTMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGlja2V0T3B0aW9ucy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTM5ZDk1NTMmc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9