"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Game_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Game/index.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Game/index.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _UI_Paginator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../UI/Paginator */ "./resources/js/components/UI/Paginator.vue");
/* harmony import */ var _UI_Loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/Loader */ "./resources/js/components/UI/Loader.vue");
/* harmony import */ var _UI_Skeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UI/Skeleton */ "./resources/js/components/UI/Skeleton.vue");
/* harmony import */ var _UI_ConfirmDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UI/ConfirmDialog */ "./resources/js/components/UI/ConfirmDialog.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "games",
  components: {
    ConfirmDialog: _UI_ConfirmDialog__WEBPACK_IMPORTED_MODULE_3__["default"],
    Loader: _UI_Loader__WEBPACK_IMPORTED_MODULE_1__["default"],
    Paginator: _UI_Paginator__WEBPACK_IMPORTED_MODULE_0__["default"],
    Skeleton: _UI_Skeleton__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      selectedType: 'all',
      showDialogConfirm: false,
      gameForDelete: null
    };
  },
  mounted: function mounted() {
    this.listGames();
    this.listTypes();
    document.title = 'Games';
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapActions)(['listGames', 'listTypes', 'listGameByTypes', 'deleteGame'])), {}, {
    changeCallsForPaging: function changeCallsForPaging(page) {
      return this.selectedType === 'all' ? this.listGames(page) : this.listGameByTypes({
        type: this.selectedType,
        page: page
      });
    },
    toggleDialogConfirm: function toggleDialogConfirm() {
      this.showDialogConfirm = !this.showDialogConfirm;
    },
    setGameForDelete: function setGameForDelete(game) {
      this.gameForDelete = game;
    }
  }),
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapGetters)({
    games: 'getGames',
    types: 'getTypes'
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UI/ConfirmDialog.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UI/ConfirmDialog.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ConfirmDialog",
  // data () {
  //     return {
  //         show: true,
  //     }
  // },
  props: {
    type: {
      type: String,
      "default": "info"
    },
    title: {
      type: String,
      "default": "Tittle"
    },
    message: {
      type: String,
      "default": "Message"
    },
    closeBtnText: {
      type: String,
      "default": "Нет"
    },
    confirmBtnText: {
      type: String,
      "default": "Да"
    },
    width: {
      type: String,
      "default": "md",
      validator: function validator(value) {
        return ["xs", "sm", "md", "lg", "full"].indexOf(value) !== -1;
      }
    }
  },
  methods: {
    close: function close() {
      // this.show = false
      this.$emit("closeDialogConfirm");
    },
    confirm: function confirm() {
      this.$emit("confirm");
      this.close();
    }
  },
  computed: {
    maxWidth: function maxWidth() {
      switch (this.width) {
        case "xs":
          return "max-w-lg";

        case "sm":
          return "max-w-xl";

        case "md":
          return "max-w-2xl";

        case "lg":
          return "max-w-3xl";

        case "full":
          return "max-w-full";
      }
    },
    classes: function classes() {
      var color = null;
      var closeBtn = null;
      var confirmBtn = null;

      switch (this.type) {
        case "info":
          color = "text-cyan-600";
          closeBtn = 'border-cyan-600 hover:bg-cyan-500';
          confirmBtn = 'bg-cyan-500  hover:bg-cyan-400';
          break;

        case "warning":
          color = "text-yellow-600";
          closeBtn = 'border-yellow-600 hover:bg-yellow-500';
          confirmBtn = 'bg-yellow-500  hover:bg-yellow-400';
          break;

        case "success":
          color = "text-green-600";
          closeBtn = 'border-green-600 hover:bg-green-500';
          confirmBtn = 'bg-green-500  hover:bg-green-400';
          break;

        case "danger":
        default:
          color = "text-red-600";
          closeBtn = 'border-red-600 hover:bg-red-500';
          confirmBtn = 'bg-red-500  hover:bg-red-400';
          break;
      }

      return {
        color: color,
        closeBtn: closeBtn,
        confirmBtn: confirmBtn
      };
    },
    color: function color() {
      return this.classes.color;
    },
    closeBtn: function closeBtn() {
      return this.classes.closeBtn;
    },
    confirmBtn: function confirmBtn() {
      return this.classes.confirmBtn;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UI/Loader.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UI/Loader.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Loader",
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)({
    isLoading: 'getLoading'
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UI/Paginator.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UI/Paginator.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Paginator",
  props: {
    data: {
      type: Object,
      "default": function _default() {
        return {
          current_page: 1,
          last_page: 1
        };
      },
      required: true
    },
    limit: {
      type: Number,
      "default": 2
    }
  },
  data: function data() {
    return {
      selectedPage: 1
    };
  },
  methods: {
    changePage: function changePage(page) {
      if (page > 0) {
        this.data.current_page = page;
        this.selectedPage = page;
        this.$emit('paginate-page', page);
      }
    }
  },
  computed: {
    pagesNumber: function pagesNumber() {
      if (!this.data) {
        return [];
      }

      var current = this.data.current_page;
      var last = this.data.last_page;
      var left = current - this.limit;
      var right = current + this.limit + 1;
      var range = [];
      var pages = [];
      var l;

      for (var i = 1; i <= last; i++) {
        if (i === 1 || i === last || i >= left && i < right) {
          range.push(i);
        }
      }

      range.forEach(function (i) {
        if (l) {
          if (i - l === 2) {
            pages.push(l + 1);
          } else if (i - l !== 1) {
            pages.push('...');
          }
        }

        pages.push(i);
        l = i;
      });
      return pages;
    },
    isPrevDisabled: function isPrevDisabled() {
      return this.data.current_page === 1;
    },
    isNextDisabled: function isNextDisabled() {
      return this.data.current_page === this.data.last_page;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UI/Skeleton.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UI/Skeleton.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Skeleton",
  props: {
    figure: {
      "default": 'line',
      // line, circle, rectangle
      type: String
    },
    height: {
      "default": '1em',
      type: String
    },
    width: {
      "default": '100%',
      type: String
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Game/index.vue?vue&type=template&id=79bb66a0":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Game/index.vue?vue&type=template&id=79bb66a0 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "container mx-3"
};
var _hoisted_2 = {
  "class": "flex md:justify-between justify-end mt-2 p-4 md:flex-row flex-col"
};
var _hoisted_3 = {
  "class": "flex flex-row items-center"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-xl font-semibold"
}, "Игры:", -1
/* HOISTED */
);

var _hoisted_5 = {
  "class": "relative ml-3"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "all"
}, "Все", -1
/* HOISTED */
);

var _hoisted_7 = ["selected", "value"];

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  "class": "w-4 h-4",
  viewBox: "0 0 24 24"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M6 9l6 6 6-6"
})])], -1
/* HOISTED */
);

var _hoisted_9 = {
  "class": "md:mt-0 mt-4 flex justify-start items-end"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Добавить игру");

var _hoisted_11 = {
  "class": "w-full mx-auto overflow-auto my-3"
};
var _hoisted_12 = {
  "class": "table-auto w-full text-left whitespace-no-wrap striped"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "text-lg tracking-wider text-gray-900 bg-gray-100"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "px-4 py-3 text-center"
}, "#"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "px-4 py-3"
}, "Название"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "px-4 py-3"
}, "Студия"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "px-4 py-3"
}, "Жанр"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "px-4 py-3"
})])], -1
/* HOISTED */
);

var _hoisted_14 = {
  key: 0
};
var _hoisted_15 = {
  "class": "px-4 py-3 text-center"
};
var _hoisted_16 = {
  "class": "px-4 py-3"
};
var _hoisted_17 = {
  "class": "px-4 py-3"
};
var _hoisted_18 = {
  "class": "px-4 py-3 text-lg text-gray-900"
};
var _hoisted_19 = {
  key: 0,
  "class": "px-2"
};
var _hoisted_20 = {
  "class": "px-4"
};
var _hoisted_21 = {
  "class": "flex lg:flex-row flex-col justify-end"
};

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Редактировать");

var _hoisted_23 = ["onClick"];
var _hoisted_24 = {
  key: 1
};

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  colspan: "5",
  "class": "text-center p-5 text-slate-500 text-xl"
}, "Записей не найдено")], -1
/* HOISTED */
);

var _hoisted_26 = [_hoisted_25];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  var _component_Skeleton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Skeleton");

  var _component_Loader = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Loader");

  var _component_Paginator = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Paginator");

  var _component_ConfirmDialog = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ConfirmDialog");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.selectedType = $event;
    }),
    onChange: _cache[1] || (_cache[1] = function () {
      return $options.changeCallsForPaging && $options.changeCallsForPaging.apply($options, arguments);
    }),
    "class": "rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10"
  }, [_hoisted_6, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.types, function (type) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: type.id,
      selected: $data.selectedType,
      value: type.name
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(type.name), 9
    /* TEXT, PROPS */
    , _hoisted_7);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.selectedType]]), _hoisted_8])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'games.create'
    },
    "class": "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 uppercase rounded"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_10];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["to"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_12, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Loader, null, {
    loading: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(10, function (i) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", {
          key: i
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Skeleton)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Skeleton)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Skeleton)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Skeleton)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Skeleton)])])]);
      }), 64
      /* STABLE_FRAGMENT */
      ))];
    }),
    content: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_ctx.games.data && _ctx.games.data.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tbody", _hoisted_14, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.games.data, function (game, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
          key: game.id,
          "class": "hover:bg-gray-100 even:bg-gray-50"
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(index + 1), 1
        /* TEXT */
        ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
          to: {
            name: 'games.show',
            params: {
              id: game.id
            }
          },
          "class": "underline text-blue-600 hover:text-blue-700 visited:text-purple-600"
        }, {
          "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
            return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(game.name), 1
            /* TEXT */
            )];
          }),
          _: 2
          /* DYNAMIC */

        }, 1032
        /* PROPS, DYNAMIC_SLOTS */
        , ["to"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(game.studio), 1
        /* TEXT */
        ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_18, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(game.types, function (type, i) {
          return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(type.name) + " ", 1
          /* TEXT */
          ), i + 1 < game.types.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_19, "|")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64
          /* STABLE_FRAGMENT */
          );
        }), 256
        /* UNKEYED_FRAGMENT */
        ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
          to: {
            name: 'games.show',
            params: {
              id: game.id
            }
          },
          "class": "bg-sky-500 hover:bg-sky-700 text-xs text-white font-bold py-2 px-4 m-1 uppercase rounded"
        }, {
          "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
            return [_hoisted_22];
          }),
          _: 2
          /* DYNAMIC */

        }, 1032
        /* PROPS, DYNAMIC_SLOTS */
        , ["to"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
            $options.toggleDialogConfirm();
            $options.setGameForDelete(game);
          }, ["prevent"]),
          type: "button",
          value: "",
          "class": "bg-red-500 hover:bg-red-700 text-xs text-white font-bold py-2 px-4 m-1 uppercase rounded"
        }, "Удалить", 8
        /* PROPS */
        , _hoisted_23)])])]);
      }), 128
      /* KEYED_FRAGMENT */
      ))])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tbody", _hoisted_24, _hoisted_26))];
    }),
    _: 1
    /* STABLE */

  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Paginator"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Paginator, {
    data: _ctx.games,
    limit: 3,
    onPaginatePage: $options.changeCallsForPaging
  }, null, 8
  /* PROPS */
  , ["data", "onPaginatePage"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("/--Paginator"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("ConfirmModal"), $data.showDialogConfirm ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ConfirmDialog, {
    key: 0,
    onCloseDialogConfirm: $options.toggleDialogConfirm,
    onConfirm: _cache[2] || (_cache[2] = function ($event) {
      return _ctx.deleteGame($data.gameForDelete);
    }),
    show: true,
    type: 'danger',
    title: 'Удаление...',
    message: 'Вы действительно хотите удалить игру - ' + $data.gameForDelete.name
  }, null, 8
  /* PROPS */
  , ["onCloseDialogConfirm", "title", "message"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("/--ConfirmModal")])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UI/ConfirmDialog.vue?vue&type=template&id=2a419b98":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UI/ConfirmDialog.vue?vue&type=template&id=2a419b98 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "fixed w-full h-full top-0 left-0 flex items-center justify-center z-10"
};
var _hoisted_2 = {
  "class": "container bg-white overflow-hidden md:rounded"
};
var _hoisted_3 = {
  "class": "px-4 py-4 flex justify-between items-start"
};
var _hoisted_4 = {
  "class": "mr-4"
};
var _hoisted_5 = {
  key: 0,
  d: "M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"
};
var _hoisted_6 = {
  key: 1,
  d: "M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 5h2v6H9V5zm0 8h2v2H9v-2z"
};
var _hoisted_7 = {
  key: 2,
  d: "M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM6.7 9.29L9 11.6l4.3-4.3 1.4 1.42L9 14.4l-3.7-3.7 1.4-1.42z"
};
var _hoisted_8 = {
  key: 3,
  d: "M0 10a10 10 0 1 1 20 0 10 10 0 0 1-20 0zm16.32-4.9L5.09 16.31A8 8 0 0 0 16.32 5.09zm-1.41-1.42A8 8 0 0 0 3.68 14.91L14.91 3.68z"
};
var _hoisted_9 = {
  "class": "max-h-full"
};
var _hoisted_10 = {
  "class": "flex justify-between items-center mb-2"
};
var _hoisted_11 = {
  "class": "text-gray-800 mr-7"
};
var _hoisted_12 = {
  "class": "text-right mt-7"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: "fade",
    appear: ""
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        "class": "absolute w-full h-full bg-gray-900 opacity-50",
        onClick: _cache[0] || (_cache[0] = function () {
          return $options.close && $options.close.apply($options, arguments);
        })
      })];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: "scale",
    appear: ""
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["absolute max-h-full", $options.maxWidth]),
        role: "dialog"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["fill-current h-5 md:h-6 w-5 md:w-6 md:mr-1", $options.color]),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20"
      }, [$props.type === 'info' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("path", _hoisted_5)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.type === 'warning' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("path", _hoisted_6)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.type === 'success' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("path", _hoisted_7)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.type === 'danger' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("path", _hoisted_8)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
      /* CLASS */
      ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["font-semibold", $options.color])
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.title), 3
      /* TEXT, CLASS */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        onClick: _cache[1] || (_cache[1] = function () {
          return $options.close && $options.close.apply($options, arguments);
        }),
        "class": "text-2xl hover:text-gray-600 text-gray-500 cursor-pointer select-none flex leading-none"
      }, " × ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.message), 1
      /* TEXT */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        onClick: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
          return $options.close && $options.close.apply($options, arguments);
        }, ["prevent"])),
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$options.closeBtn, "border mr-2 px-4 py-2 text-sm text-gray-600 hover:text-white rounded"])
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.closeBtnText), 3
      /* TEXT, CLASS */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        onClick: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
          return $options.confirm && $options.confirm.apply($options, arguments);
        }, ["prevent"])),
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$options.confirmBtn, "mr-2 px-4 py-2 text-sm rounded text-white focus:outline-none"])
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.confirmBtnText), 3
      /* TEXT, CLASS */
      )])])])])])], 2
      /* CLASS */
      )];
    }),
    _: 1
    /* STABLE */

  })]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UI/Loader.vue?vue&type=template&id=3fc46753":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UI/Loader.vue?vue&type=template&id=3fc46753 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [_ctx.isLoading ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "loading", {
    key: 0
  }) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !_ctx.isLoading ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "content", {
    key: 1
  }) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UI/Paginator.vue?vue&type=template&id=15edc1fe":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UI/Paginator.vue?vue&type=template&id=15edc1fe ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "container md:mb-8 pt-8 px-4 mx-auto flex md:flex-row flex-col justify-end select-none"
};
var _hoisted_2 = {
  "class": "md:mr-3 flex flex-row items-center justify-end"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "mr-3"
}, "Выбор старницы", -1
/* HOISTED */
);

var _hoisted_4 = {
  "class": "relative mr-3"
};
var _hoisted_5 = ["selected", "value"];

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  "class": "w-4 h-4",
  viewBox: "0 0 24 24"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M6 9l6 6 6-6"
})])], -1
/* HOISTED */
);

var _hoisted_7 = {
  "class": "mr-3 flex mt-4 md:mt-0 flex-row justify-end"
};
var _hoisted_8 = ["disabled"];
var _hoisted_9 = ["onClick"];
var _hoisted_10 = ["disabled"];
var _hoisted_11 = {
  key: 1,
  "class": "flex justify-end"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-center p-5 text-slate-500 text-xl"
}, "no data for pagination...", -1
/* HOISTED */
);

var _hoisted_13 = [_hoisted_12];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.data && $props.data.current_page && $props.data.last_page ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.selectedPage = $event;
    }),
    onChange: _cache[1] || (_cache[1] = function ($event) {
      return $options.changePage($data.selectedPage);
    }),
    "class": "rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10"
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.data.last_page, function (page) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: page,
      selected: $data.selectedPage,
      value: page
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(page), 9
    /* TEXT, PROPS */
    , _hoisted_5);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.selectedPage]]), _hoisted_6])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    disabled: $options.isPrevDisabled,
    onClick: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.changePage($props.data.current_page - 1);
    }, ["prevent"])),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      'bg-grey-200  cursor-not-allowed': $options.isPrevDisabled
    }, "block border px-4 py-2 rounded-l hover:bg-gray-200 text-gray-600"])
  }, "«", 10
  /* CLASS, PROPS */
  , _hoisted_8), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.pagesNumber, function (page) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: page
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $options.changePage(page);
      }, ["prevent"]),
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["block border px-4 py-2 hover:bg-gray-200 text-gray-600", {
        'bg-indigo-500 hover:bg-indigo-600 text-white': page === $props.data.current_page
      }]),
      href: "#"
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(page), 11
    /* TEXT, CLASS, PROPS */
    , _hoisted_9)]);
  }), 128
  /* KEYED_FRAGMENT */
  )), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    disabled: $options.isNextDisabled,
    onClick: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.changePage($props.data.current_page + 1);
    }, ["prevent"])),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      'bg-grey-200  cursor-not-allowed': $options.isNextDisabled
    }, "block border px-4 py-2 rounded-r hover:bg-gray-200 text-gray-600"])
  }, "»", 10
  /* CLASS, PROPS */
  , _hoisted_10)])])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_11, _hoisted_13));
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UI/Skeleton.vue?vue&type=template&id=e3fecee6":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UI/Skeleton.vue?vue&type=template&id=e3fecee6 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "animate-pulse flex items-center justify-center"
};
var _hoisted_2 = {
  key: 1,
  "class": "animate-pulse flex"
};
var _hoisted_3 = {
  key: 2,
  "class": "animate-pulse flex space-x-4"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("        Круг"), $props.figure === 'circle' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      height: this.height,
      width: this.width
    }),
    "class": "rounded-full bg-gray-200"
  }, null, 4
  /* STYLE */
  )])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("        Строка"), $props.figure === 'line' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      height: this.height,
      width: this.width
    }),
    "class": "bg-slate-200 rounded m-2 p-3"
  }, null, 4
  /* STYLE */
  )])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("        Прямоугольник"), $props.figure === 'rectangle' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      height: this.height,
      width: this.width
    }),
    "class": "bg-slate-200 rounded m-2 p-3"
  }, null, 4
  /* STYLE */
  )])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/js/components/Game/index.vue":
/*!************************************************!*\
  !*** ./resources/js/components/Game/index.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_79bb66a0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=79bb66a0 */ "./resources/js/components/Game/index.vue?vue&type=template&id=79bb66a0");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./resources/js/components/Game/index.vue?vue&type=script&lang=js");
/* harmony import */ var C_sites_crud_vue_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_sites_crud_vue_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_index_vue_vue_type_template_id_79bb66a0__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Game/index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/UI/ConfirmDialog.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/UI/ConfirmDialog.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ConfirmDialog_vue_vue_type_template_id_2a419b98__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConfirmDialog.vue?vue&type=template&id=2a419b98 */ "./resources/js/components/UI/ConfirmDialog.vue?vue&type=template&id=2a419b98");
/* harmony import */ var _ConfirmDialog_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConfirmDialog.vue?vue&type=script&lang=js */ "./resources/js/components/UI/ConfirmDialog.vue?vue&type=script&lang=js");
/* harmony import */ var C_sites_crud_vue_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_sites_crud_vue_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ConfirmDialog_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ConfirmDialog_vue_vue_type_template_id_2a419b98__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/UI/ConfirmDialog.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/UI/Loader.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/UI/Loader.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Loader_vue_vue_type_template_id_3fc46753__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Loader.vue?vue&type=template&id=3fc46753 */ "./resources/js/components/UI/Loader.vue?vue&type=template&id=3fc46753");
/* harmony import */ var _Loader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loader.vue?vue&type=script&lang=js */ "./resources/js/components/UI/Loader.vue?vue&type=script&lang=js");
/* harmony import */ var C_sites_crud_vue_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_sites_crud_vue_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Loader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Loader_vue_vue_type_template_id_3fc46753__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/UI/Loader.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/UI/Paginator.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/UI/Paginator.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Paginator_vue_vue_type_template_id_15edc1fe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Paginator.vue?vue&type=template&id=15edc1fe */ "./resources/js/components/UI/Paginator.vue?vue&type=template&id=15edc1fe");
/* harmony import */ var _Paginator_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Paginator.vue?vue&type=script&lang=js */ "./resources/js/components/UI/Paginator.vue?vue&type=script&lang=js");
/* harmony import */ var C_sites_crud_vue_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_sites_crud_vue_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Paginator_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Paginator_vue_vue_type_template_id_15edc1fe__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/UI/Paginator.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/UI/Skeleton.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/UI/Skeleton.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Skeleton_vue_vue_type_template_id_e3fecee6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Skeleton.vue?vue&type=template&id=e3fecee6 */ "./resources/js/components/UI/Skeleton.vue?vue&type=template&id=e3fecee6");
/* harmony import */ var _Skeleton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Skeleton.vue?vue&type=script&lang=js */ "./resources/js/components/UI/Skeleton.vue?vue&type=script&lang=js");
/* harmony import */ var C_sites_crud_vue_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_sites_crud_vue_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Skeleton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Skeleton_vue_vue_type_template_id_e3fecee6__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/UI/Skeleton.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Game/index.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./resources/js/components/Game/index.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Game/index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/UI/ConfirmDialog.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/js/components/UI/ConfirmDialog.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ConfirmDialog_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ConfirmDialog_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ConfirmDialog.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UI/ConfirmDialog.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/UI/Loader.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./resources/js/components/UI/Loader.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Loader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Loader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Loader.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UI/Loader.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/UI/Paginator.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./resources/js/components/UI/Paginator.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Paginator_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Paginator_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Paginator.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UI/Paginator.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/UI/Skeleton.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./resources/js/components/UI/Skeleton.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Skeleton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Skeleton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Skeleton.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UI/Skeleton.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Game/index.vue?vue&type=template&id=79bb66a0":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Game/index.vue?vue&type=template&id=79bb66a0 ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_79bb66a0__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_79bb66a0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=template&id=79bb66a0 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Game/index.vue?vue&type=template&id=79bb66a0");


/***/ }),

/***/ "./resources/js/components/UI/ConfirmDialog.vue?vue&type=template&id=2a419b98":
/*!************************************************************************************!*\
  !*** ./resources/js/components/UI/ConfirmDialog.vue?vue&type=template&id=2a419b98 ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ConfirmDialog_vue_vue_type_template_id_2a419b98__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ConfirmDialog_vue_vue_type_template_id_2a419b98__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ConfirmDialog.vue?vue&type=template&id=2a419b98 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UI/ConfirmDialog.vue?vue&type=template&id=2a419b98");


/***/ }),

/***/ "./resources/js/components/UI/Loader.vue?vue&type=template&id=3fc46753":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/UI/Loader.vue?vue&type=template&id=3fc46753 ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Loader_vue_vue_type_template_id_3fc46753__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Loader_vue_vue_type_template_id_3fc46753__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Loader.vue?vue&type=template&id=3fc46753 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UI/Loader.vue?vue&type=template&id=3fc46753");


/***/ }),

/***/ "./resources/js/components/UI/Paginator.vue?vue&type=template&id=15edc1fe":
/*!********************************************************************************!*\
  !*** ./resources/js/components/UI/Paginator.vue?vue&type=template&id=15edc1fe ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Paginator_vue_vue_type_template_id_15edc1fe__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Paginator_vue_vue_type_template_id_15edc1fe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Paginator.vue?vue&type=template&id=15edc1fe */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UI/Paginator.vue?vue&type=template&id=15edc1fe");


/***/ }),

/***/ "./resources/js/components/UI/Skeleton.vue?vue&type=template&id=e3fecee6":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/UI/Skeleton.vue?vue&type=template&id=e3fecee6 ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Skeleton_vue_vue_type_template_id_e3fecee6__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Skeleton_vue_vue_type_template_id_e3fecee6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Skeleton.vue?vue&type=template&id=e3fecee6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UI/Skeleton.vue?vue&type=template&id=e3fecee6");


/***/ })

}]);