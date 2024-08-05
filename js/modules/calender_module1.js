"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._jsonFtch = _jsonFtch;
exports.time_userDATA = exports.notice_board = exports.duePicker = exports.defaults = exports["default"] = void 0;
var _dev_module = _interopRequireWildcard(require("./dev_module1.js"));
var _main = _interopRequireWildcard(require("../main.js"));
var _moment = _interopRequireDefault(require("moment"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var now = (0, _moment["default"])();
function _jsonFtch() {
  return _jsonFtch2.apply(this, arguments);
}
function _jsonFtch2() {
  _jsonFtch2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var response, data;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return fetch('../database.json');
        case 2:
          response = _context3.sent;
          _context3.next = 5;
          return response.json();
        case 5:
          data = _context3.sent;
          _context3.next = 8;
          return duePicker.retrieve_fxn(data);
        case 8:
          return _context3.abrupt("return", new Promise(function (resolve, reject) {
            setTimeout(function () {
              resolve(data);
            }, 500);
          }));
        case 9:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _jsonFtch2.apply(this, arguments);
}
var time_userDATA = exports.time_userDATA = {
  hour: undefined,
  minute: undefined,
  meridean: 'am',
  date: undefined,
  month: undefined,
  year: 2024,
  dueDate: undefined,
  duration: undefined,
  moment_date: '',
  usrDATA: function usrDATA() {
    var setter = (0, _moment["default"])();
    var hour = Number.parseInt(this.hour.value);
    var minute = Number.parseInt(this.minute.value);
    if (this.meridean === 'pm') {
      hour = Number.parseInt(this.hour.value) + 12;
    }
    setter.hour(hour);
    setter.minute(minute);
    if (this.date !== undefined && this.month !== undefined) {
      setter.month(this.month);
      setter.date(this.date);
    } else {
      setter.month((0, _moment["default"])().month());
      setter.date((0, _moment["default"])().date());
    }
    setter.year(this.year);
    this.moment_date = setter.format('DD MM YYYY');
    // console.log(this.moment_date)

    var from_now = setter.fromNow();
    this.duration = from_now;
    var dueDate = setter.format('ddd D MMM YYYY HH:mm a');
    this.dueDate = dueDate;
  }
};
var defaults = exports.defaults = {
  nav: [],
  meridean: [],
  main: [],
  day_container: undefined,
  day_containerContent: [],
  year_btn: [],
  month_bool: false,
  month_btn: undefined,
  monthList: undefined,
  time_input: [],
  input_fields: [],
  activeMonth: undefined,
  reset: function reset() {
    var _this = this;
    var arr = [this.nav, this.meridean, this.year_btn];
    arr.forEach(function (member) {
      (0, _dev_module.active_SHOWN)(member, 'current');
      (0, _dev_module["default"])('toggle', 'current', member[0]);
    });
    (0, _dev_module.active_SHOWN)(duePicker.hourList, hourProperties.def_show);
    (0, _dev_module.active_SHOWN)(duePicker.minuteList, minuteProperties.def_show);
    (0, _dev_module["default"])('add', hourProperties.def_show, duePicker.hourList[hourProperties.def]);
    (0, _dev_module["default"])('add', minuteProperties.def_show, duePicker.minuteList[minuteProperties.def]);
    this.time_input[0].value = '09';
    this.time_input[1].value = '30';
    hourProperties.index = 9;
    minuteProperties.index = 30;
    this.input_fields.forEach(function (member) {
      member.value = '';
    });
    this.activeMonth.value = 'Jan';
    this.day_container.innerHTML = '';
    this.day_containerContent.forEach(function (member) {
      _this.day_container.appendChild(member);
    });
    //this.day_containerContent[0].scrollIntoView({ behavior: 'smooth'})

    this.month_btn.disabled = true;
    if (this.month_bool) {
      (0, _dev_module["default"])('remove', 'toggle_show', this.monthList);
    }
    this.main[0].scrollIntoView({
      behavior: 'smooth'
    });
  },
  call_def: function call_def() {
    this.reset();
    setTimeout(function () {
      duePicker.dialog_container.classList.remove('modal');
    }, 400);
  }
};
var hourProperties = {
  def: 9,
  def_show: 'active-time',
  max: 12,
  member_classList: ['h_opts', 'h_opt', 'd-opt', 'disp_rf'],
  index: 9
};
var minuteProperties = {
  def: 30,
  def_show: 'active-time',
  max: 60,
  member_classList: ['m_opts', 'h_opt', 'd-opt', 'disp_rf'],
  index: 30
};
var pop1_properties = {
  member_classList: ['priority_item', 'all_click', 'pops_item', 'padd']
};
var pop2_properties = {
  member_classList: ['label_item', 'all_click', 'pops_item', 'padd']
};
var duePicker = exports.duePicker = {
  setter: now,
  hourList: [],
  minuteList: [],
  yearArray: [],
  yearArray_active: [],
  days_Arr: [],
  pop_1List: [],
  pop_2List: [],
  num: 'hello',
  retrieve_fxn: function retrieve_fxn(data) {
    var _this2 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return data;
          case 2:
            _this2.data = _context2.sent;
            _context2.next = 5;
            return _this2.createList(data);
          case 5:
            _context2.next = 7;
            return _this2.appendingData();
          case 7:
            setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return duePicker.Time_DOM();
                  case 2:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            })), 500);
          case 8:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  },
  createList: function createList(data) {
    var now = this.setter;
    function step_one(arr, Obj) {
      for (var key in Obj) {
        var _li$classList;
        var li = document.createElement('li');
        (_li$classList = li.classList).add.apply(_li$classList, _toConsumableArray(this.member_classList));
        li.innerHTML = Obj[key].Name;
        arr.push(li);
      }
    }
    step_one.call(pop1_properties, this.pop_1List, data.priority);
    step_one.call(pop2_properties, this.pop_2List, data.labels);
    function step_two(arr) {
      var setter = now;
      for (var i = 0; i < this.max; i++) {
        var _li$classList2;
        setter.minute(i);
        var li = document.createElement('li');
        (_li$classList2 = li.classList).add.apply(_li$classList2, _toConsumableArray(this.member_classList));
        li.setAttribute('data-value', setter.format('mm'));
        li.innerHTML = "".concat(setter.format('mm'));
        if (i === this.def) {
          li.classList.add(this.def_show);
        }
        arr.push(li);
      }
    }
    step_two.call(hourProperties, this.hourList);
    step_two.call(minuteProperties, this.minuteList);
    function step_three() {
      var setter = now;
      var YEAR1 = [],
        YEAR2 = [],
        YEAR3 = [];
      var store = [YEAR1, YEAR2, YEAR3];
      for (var i = 0; i < 3; i++) {
        var result = (0, _moment["default"])().year() + i;
        setter.set('year', result);
        yearDetails(setter.year(), store[i]);
      }
      defaults.day_containerContent = YEAR1;
      duePicker.yearArray_active = YEAR1;
      function yearDetails(yr, container) {
        var now = (0, _moment["default"])();
        var i = 0;
        if (yr === now.year()) {
          i = now.month();
        } else {
          i = 0;
        }
        for (i; i < 12; i++) {
          setter.year(yr);
          setter.month(i);
          var ul = document.createElement('ul');
          ul.classList.add('months', 'disp_7-grid');
          ul.setAttribute('data-month-mm', setter.format('MMM'));
          ul.setAttribute('data-year-yy', setter.format('YYYY'));
          for (var _i = 1; _i <= setter.daysInMonth(); _i++) {
            setter.date(_i);
            var li = document.createElement('li');
            var button = document.createElement('button');
            li.appendChild(button);
            button.classList.add('day', 'disp_grid-Cnt');
            button.setAttribute('data-month-mm', setter.month());
            button.setAttribute('data-year-yy', setter.year());
            button.innerHTML = setter.date();
            if (Number.parseInt(button.dataset.yearYy) === (0, _moment["default"])().year() && Number.parseInt(button.dataset.monthMm) < (0, _moment["default"])().month()) {
              button.setAttribute('disabled', 'true');
            }
            if (Number.parseInt(button.dataset.yearYy) === (0, _moment["default"])().year() && Number.parseInt(button.dataset.monthMm) === (0, _moment["default"])().month() && setter.date() === (0, _moment["default"])().date()) {
              button.classList.add('current');
            }
            if (setter.date() === 1) {
              li.classList.add('one');
              var dayIndex = setter.day();
              li.style = "grid-area: 1 / 1 / ".concat(dayIndex + 2, " / 2");
            }
            duePicker.days_Arr.push(button);
            ul.appendChild(li);
          }
          container.push(ul);
        }
      }
      return store;
    }
    this.yearArray = step_three();
    //this.yearArray_active = step_three()[0]
  },
  popLists: Array.from(document.querySelectorAll('.pops')),
  appendingData: function appendingData() {
    var pops = this.popLists;
    var popArray = [this.pop_1List, this.pop_2List];
    _dev_module.label_event.Event(popArray[1]);

    //Appending pops
    var _loop = function _loop(i) {
      popArray[i].forEach(function (member) {
        pops[i].appendChild(member);
      });
    };
    for (var i = 0; i < popArray.length; i++) {
      _loop(i);
    }
  },
  dialog_container: document.querySelector('.dialog_time'),
  Time_DOM: function Time_DOM() {
    var _cover$classList, _nav$classList, _side$classList, _main$classList;
    var clasNAmes = {
      cover: {
        clasNAmes: ['cover']
      },
      nav: {
        clasNAmes: ['nav', 'disp_rf', 'padd']
      },
      main: {
        clasNAmes: ['main']
      },
      side: {
        clasNAmes: ['side', 'disp_cf', 'padd']
      }
    };
    var Dom = document.createDocumentFragment();
    var cover = document.createElement('section');
    var nav = document.createElement('nav');
    var side = document.createElement('aside');
    var main = document.createElement('main');
    (_cover$classList = cover.classList).add.apply(_cover$classList, _toConsumableArray(clasNAmes.cover.clasNAmes));
    (_nav$classList = nav.classList).add.apply(_nav$classList, _toConsumableArray(clasNAmes.nav.clasNAmes));
    (_side$classList = side.classList).add.apply(_side$classList, _toConsumableArray(clasNAmes.side.clasNAmes));
    (_main$classList = main.classList).add.apply(_main$classList, _toConsumableArray(clasNAmes.main.clasNAmes));
    time_chambers.nav_fxn(nav);
    time_chambers.side_fxn(side);
    time_chambers.main_fxn(main);
    var children = [nav, side, main];
    children.forEach(function (member) {
      return cover.appendChild(member);
    });
    cover.appendChild(Dom);
    this.dialog_container.appendChild(cover);
  }
};
var time_chambers = {
  activeName: 'active_nav',
  F_classNAmes: ['Time', 'current'],
  S_classNAmes: ['Time'],
  nav_fxn: function nav_fxn(parent) {
    var _first$classList, _second$classList;
    var first = document.createElement('div');
    var second = document.createElement('div');
    first.innerHTML = 'Time';
    second.innerHTML = 'Date';
    (_first$classList = first.classList).add.apply(_first$classList, _toConsumableArray(this.F_classNAmes));
    (_second$classList = second.classList).add.apply(_second$classList, _toConsumableArray(this.S_classNAmes));
    this.navElements = [first, second];
    parent.appendChild(first);
    parent.appendChild(second);
    defaults.nav = [first, second];
  },
  toggle_clasNAme: ['toggle_clasNAme', 'padd'],
  due: document.querySelector('#due'),
  side_fxn: function side_fxn(parent) {
    var _setting$classList,
      _clear$classList,
      _cancel$classList,
      _months$classList,
      _this3 = this;
    var setting = document.createElement('button'),
      clear = document.createElement('button'),
      cancel = document.createElement('button'),
      months = document.createElement('button');
    setting.innerHTML = "Set";
    clear.innerHTML = "Clear";
    cancel.innerHTML = "Cancel";
    months.innerHTML = "Months";
    var arr = [setting, clear, cancel];
    for (var i = 0; i < arr.length; i++) {
      arr[i].setAttribute('data-side-btn', 'auto');
      arr[i].setAttribute('data-toggle-name', 'modal');
      arr[i].setAttribute('data-target', 'dialog_time');
      _main.clicks.side_btn.push(arr[i]);
    }
    _main.clicks.validate();
    (_setting$classList = setting.classList).add.apply(_setting$classList, _toConsumableArray(this.toggle_clasNAme));
    (_clear$classList = clear.classList).add.apply(_clear$classList, _toConsumableArray(this.toggle_clasNAme));
    (_cancel$classList = cancel.classList).add.apply(_cancel$classList, _toConsumableArray(this.toggle_clasNAme));
    (_months$classList = months.classList).add.apply(_months$classList, _toConsumableArray(this.toggle_clasNAme));
    parent.appendChild(setting);
    parent.appendChild(clear);
    parent.appendChild(cancel);
    parent.appendChild(months);
    months.disabled = true;
    defaults.month_btn = months;
    this.side_Parent = parent;
    side_buttonEvents([months]);
    parent.addEventListener('click', function (btn) {
      if (btn.target === setting) {
        duePicker.dialog_container.classList.toggle('add_on');
        time_userDATA.usrDATA();
        _this3.due.value = time_userDATA.dueDate;
        cargo.bool_arr = true;
        _main.clicks.time_bool = true;
      }
      if (btn.target === clear) {
        duePicker.dialog_container.classList.toggle('add_on');
        defaults.reset();
        _this3.due.value = '';
        setTimeout(function () {
          duePicker.dialog_container.classList.remove('add_on', 'modal');
        }, 400);
      }
      if (btn.target === cancel) {
        duePicker.dialog_container.classList.toggle('add_on');
        _main.clicks.time_bool = true;
      }
    });
  },
  sect_primaryClasNAmes: ['sect_primary', 'actie_focus'],
  sect_secondaryClasNAmes: ['sect_secondary'],
  main_fxn: function main_fxn(parent) {
    var _sect_primary$classLi, _sect_secondary$class;
    var sect_primary = document.createElement('section'),
      sect_secondary = document.createElement('section');
    (_sect_primary$classLi = sect_primary.classList).add.apply(_sect_primary$classLi, _toConsumableArray(this.sect_primaryClasNAmes));
    (_sect_secondary$class = sect_secondary.classList).add.apply(_sect_secondary$class, _toConsumableArray(this.sect_secondaryClasNAmes));

    //Sect Primary
    sect_prim.fxn(sect_primary);
    sect_second.fxn(sect_secondary);
    var first = this.nav_events(this.navElements);
    first([sect_primary, sect_secondary])(this.side_Parent);
    parent.appendChild(sect_primary);
    parent.appendChild(sect_secondary);
    defaults.main = [sect_primary, sect_secondary];
  },
  nav_events: function nav_events(array_one) {
    return function (array_two) {
      return function (side_element) {
        var clasNAmes = 'current';
        array_one.forEach(function (member) {
          member.addEventListener('click', function (btn) {
            array_two[array_one.indexOf(member)].scrollIntoView({
              behavior: 'smooth'
            });
            var bool = array_one.some(function (member) {
              return member.classList.contains(clasNAmes);
            });
            if (bool) {
              (0, _dev_module.active_SHOWN)(array_one, clasNAmes);
            }
            btn.target.classList.add(clasNAmes);
            if (btn.target === array_one[1]) {
              side_element.lastElementChild.disabled = false;
              defaults.month_bool = true;
            } else {
              side_element.lastElementChild.disabled = true;
            }
          });
        });
      };
    };
  }
};
var sect_prim = {
  field_class: ['time_fields'],
  meridean_am: ['meridean', 'am', 'current'],
  meridean_pm: ['meridean', 'pm'],
  controls_clasNAmes: ['controls'],
  chamber_x: ['chamber', 'disp_rf', 'padd'],
  ul_class: ['Time_digits', 'disp_rf'],
  fields: [],
  fxn: function fxn(parent) {
    var _this4 = this,
      _meridean_primary$cla,
      _meridean_secondary$c,
      _field_chamber$classL,
      _hour_chamber$classLi,
      _minute_chamber$class,
      _ul_primary$classList,
      _ul_secondary$classLi;
    var field1 = document.createElement('input'),
      field2 = document.createElement('input');
    this.fields = [field1, field2];
    field1.value = "09";
    field2.value = "30";
    var span = document.createElement('span');
    span.innerHTML = ' : ';

    /*
      field1.classList.add(...this.field_class)
      field1.placeholder = '09' 
      field2.classList.add(...this.field_class)
      field1.placeholder = '09' 
      field1.value = `09`;
      field2.value = `30`;
     */
    var fields = [field1, field2];
    fields.forEach(function (member) {
      var _member$classList;
      defaults.time_input.push(member);
      member.type = 'number';
      (_member$classList = member.classList).add.apply(_member$classList, _toConsumableArray(_this4.field_class));
      member.placeholder = '00';
    });
    this.field_events('hour', field1);
    this.field_events('minute', field2);
    var meridean_primary = document.createElement('button'),
      meridean_secondary = document.createElement('button');
    defaults.meridean = [meridean_primary, meridean_secondary];
    meridean_primary.innerHTML = "am";
    meridean_secondary.innerHTML = "pm";
    (_meridean_primary$cla = meridean_primary.classList).add.apply(_meridean_primary$cla, _toConsumableArray(this.meridean_am));
    (_meridean_secondary$c = meridean_secondary.classList).add.apply(_meridean_secondary$c, _toConsumableArray(this.meridean_pm));
    this.meridean_select([meridean_primary, meridean_secondary], 'current');
    var field_chamber = document.createElement('div');
    var hour_chamber = document.createElement('div'),
      minute_chamber = document.createElement('div');
    (_field_chamber$classL = field_chamber.classList).add.apply(_field_chamber$classL, _toConsumableArray(this.chamber_x));
    (_hour_chamber$classLi = hour_chamber.classList).add.apply(_hour_chamber$classLi, _toConsumableArray(this.chamber_x));
    (_minute_chamber$class = minute_chamber.classList).add.apply(_minute_chamber$class, _toConsumableArray(this.chamber_x));
    var controls_hour = [];
    var controls_minute = [];
    for (var i = 0; i < 4; i += 1) {
      var _button$classList;
      var button = document.createElement('button');
      (_button$classList = button.classList).add.apply(_button$classList, _toConsumableArray(this.controls_clasNAmes));
      switch (i) {
        case 0:
          button.innerHTML = "-H";
          controls_hour.push(button);
          break;
        case 1:
          button.innerHTML = "+H";
          controls_hour.push(button);
          break;
        case 2:
          button.innerHTML = "-M";
          controls_minute.push(button);
          break;
        default:
          button.innerHTML = "+M";
          controls_minute.push(button);
      }
    }
    var ul_primary = document.createElement('ul'),
      ul_secondary = document.createElement('ul');
    (_ul_primary$classList = ul_primary.classList).add.apply(_ul_primary$classList, _toConsumableArray(this.ul_class));
    (_ul_secondary$classLi = ul_secondary.classList).add.apply(_ul_secondary$classLi, _toConsumableArray(this.ul_class));
    field_chamber.appendChild(field1);
    field_chamber.appendChild(span);
    field_chamber.appendChild(field2);
    field_chamber.appendChild(meridean_primary);
    field_chamber.appendChild(meridean_secondary);
    hour_chamber.appendChild(controls_hour[0]);
    hour_chamber.appendChild(ul_primary);
    hour_chamber.appendChild(controls_hour[1]);
    this.hourList.forEach(function (member) {
      return ul_primary.appendChild(member);
    });
    minute_chamber.appendChild(controls_minute[0]);
    minute_chamber.appendChild(ul_secondary);
    minute_chamber.appendChild(controls_minute[1]);
    this.minuteList.forEach(function (member) {
      return ul_secondary.appendChild(member);
    });
    parent.appendChild(field_chamber);
    parent.appendChild(hour_chamber);
    parent.appendChild(minute_chamber);

    //this.into_View(this.hourList)
    //this.into_View(this.minuteList)

    this.timeACtive_view.call(hourProperties, controls_hour, this.hourList, hourProperties.def, field1);
    this.timeACtive_view.call(minuteProperties, controls_minute, this.minuteList, minuteProperties.def, field2);
    time_userDATA.hour = field1;
    time_userDATA.minute = field2;
  },
  field_events: function field_events(identity, field) {
    field.addEventListener('keyup', function (input) {
      if (identity === 'hour' && input.target.value[0] > 1) {
        input.target.value = '';
      } else {
        if (Number.parseInt(input.target.value[0]) === 1 && Number.parseInt(input.target.value[1]) > 1) {
          var res = input.target.value.slice(0, 1);
          input.target.value = res;
        }
      }
      if (identity === 'minute' && input.target.value[0] > 5) {
        input.target.value = '';
      }
      if (!(input.target.value.length < 2)) {
        var _res = input.target.value.slice(0, 2);
        input.target.value = _res;
      }
    });
  },
  timeACtive_view: function timeACtive_view(controls, array, index_El, display) {
    var _this5 = this;
    //let index = index_El
    this.index = index_El;
    var active_NAme = 'active-time';
    array.forEach(function (member) {
      member.addEventListener('click', function (btn) {
        display.value = btn.target.innerHTML;
        _this5.index = array.indexOf(member);
        (0, _dev_module.active_SHOWN)(array, active_NAme);
        btn.target.classList.add(active_NAme);
      });
    });
    controls[0].addEventListener('click', function (btn) {
      if (_this5.index > 0) {
        array[_this5.index].classList.remove(active_NAme);
        array[_this5.index - 1].classList.add(active_NAme);
        array[_this5.index - 1].scrollIntoView({
          behaviour: 'smooth'
        });
        display.value = array[_this5.index - 1].innerHTML;
        _this5.index = array.indexOf(array[_this5.index - 1]);
      }
    });
    controls[1].addEventListener('click', function (btn) {
      if (_this5.index < array.length - 1) {
        array[_this5.index].classList.remove(active_NAme);
        array[_this5.index + 1].classList.add(active_NAme);
        array[_this5.index + 1].scrollIntoView({
          behaviour: 'smooth'
        });
        display.value = array[_this5.index + 1].innerHTML;
        _this5.index = array.indexOf(array[_this5.index + 1]);
      }
    });
  },
  meridean_select: function meridean_select(array, clasNAmes) {
    array.forEach(function (member) {
      member.addEventListener('click', function (btn) {
        var bool = array.some(function (member) {
          return member.classList.contains(clasNAmes);
        });
        if (bool) {
          (0, _dev_module.active_SHOWN)(array, clasNAmes);
        }
        btn.target.classList.add(clasNAmes);
        time_userDATA.meridean = btn.target.innerHTML;
      });
    });
  },
  into_View: function into_View(array, identity) {
    var parent = array[0].parentElement;
    setTimeout(function () {
      if (identity === 'hour') {
        parent.scrollBy(252, 0);
      } else {
        var _parent = array[0].parentElement;
        _parent.scrollBy(910, 0);
      }
    }, 200);
  }
};
Object.setPrototypeOf(sect_prim, duePicker);
var sect_second = {
  days_container: ['days_container', 'disp_7-grid'],
  day_container: ['day_container'],
  days_clasNAme: ['days', 'disp_grid-Cnt'],
  monthList: undefined,
  year_btn: [],
  fxn: function fxn(parent) {
    var _days_container$class,
      _day_container$classL,
      _this6 = this;
    var days_container = document.createElement('ul');
    var day_container = document.createElement('ul');
    (_days_container$class = days_container.classList).add.apply(_days_container$class, _toConsumableArray(this.days_container));
    (_day_container$classL = day_container.classList).add.apply(_day_container$classL, _toConsumableArray(this.day_container));
    defaults.day_container = day_container;
    var now = (0, _moment["default"])();
    for (var i = 0; i < 7; i++) {
      var _li$classList3;
      now.day(i);
      var li = document.createElement('li');
      (_li$classList3 = li.classList).add.apply(_li$classList3, _toConsumableArray(this.days_clasNAme));
      li.innerHTML = now.format('ddd');
      days_container.appendChild(li);
    }
    this.yearArray[0].forEach(function (member) {
      day_container.appendChild(member);
    });
    var monthList = document.createElement('ul');
    monthList.classList.add('monthList', 'disp_rf');
    this.monthList = monthList;
    for (var _i2 = 0; _i2 < 12; _i2++) {
      now.month(_i2);
      var _li = document.createElement('li');
      _li.classList.add('month', 'padd', 'disp_grid-Cnt');
      _li.innerHTML = now.format('MMM');
      monthList.appendChild(_li);
    }
    defaults.monthList = monthList;
    var div = document.createElement('div');
    div.classList.add('date_utils');
    var active_month = document.createElement('input');
    active_month.type = 'text';
    active_month.value = duePicker.yearArray[0][0].dataset.monthMm;
    active_month.classList.add('date_fields', 'active_month');
    active_month.disabled = true;
    defaults.activeMonth = active_month;
    var inputField_array = [];
    fields(inputField_array, div);
    function fields(array, parent) {
      var div = document.createElement('div');
      div.classList.add('first_utility');
      for (var _i3 = 0; _i3 < 3; _i3++) {
        var field = document.createElement('input');
        field.type = 'number';
        field.classList.add('date_fields');
        div.appendChild(field);
        array.push(field);
        defaults.input_fields.push(field);
      }
      parent.appendChild(div);
    }
    div.appendChild(active_month);
    var yrButton_array = [];
    year(yrButton_array, div);
    this.year_btn = yrButton_array;
    defaults.year_btn = yrButton_array;
    function year(array, parent) {
      var div = document.createElement('div');
      div.classList.add('second_utility', 'disp_cf');
      for (var _i4 = 0; _i4 < 3; _i4++) {
        var _year = now.year() + _i4;
        var button = document.createElement('button');
        button.classList.add('year', 'year_btn');
        button.innerHTML = _year;
        if (_year === (0, _moment["default"])().year()) {
          button.classList.add('current');
        }
        div.appendChild(button);
        array.push(button);
      }
      parent.appendChild(div);
    }
    parent.appendChild(days_container);
    parent.appendChild(day_container);
    parent.appendChild(monthList);
    parent.appendChild(div);
    this.day_events(inputField_array, active_month);
    this.year_btn.forEach(function (member) {
      member.addEventListener('click', function (btn) {
        (0, _dev_module.active_SHOWN)(_this6.year_btn, 'current');
        btn.target.classList.add('current');
        day_container.innerHTML = '';
        inputField_array[inputField_array.length - 1].value = btn.target.innerHTML;
        duePicker.day_containerArray = _this6.yearArray[_this6.year_btn.indexOf(member)];
        duePicker.indexLength = duePicker.day_containerArray.length;
        _this6.yearArray[_this6.year_btn.indexOf(member)].forEach(function (member) {
          day_container.appendChild(member);
        });
        _this6.yearArray[_this6.year_btn.indexOf(member)][0].scrollIntoView({
          behavior: 'smooth'
        });
        active_month.value = 'Jan';
      });
    });
    duePicker.day_containerArray = duePicker.yearArray[0];
    duePicker.indexLength = duePicker.day_containerArray.length;
    var monthList_array = Array.from(this.monthList.children);
    monthList_array.forEach(function (member) {
      member.addEventListener('click', function (btn) {
        //event.stopPropagation()
        active_month.value = btn.target.innerHTML;
        var index = monthList_array.indexOf(btn.target);
        _this6.monthList_scroll(index);
        (0, _dev_module.pops_clear)('toggle_show', member.parentElement);
      });
    });
  },
  monthList_scroll: function monthList_scroll(index) {
    if (duePicker.indexLength < 12) {
      var val = index - (duePicker.indexLength + 2);
      duePicker.day_containerArray[val].scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      duePicker.day_containerArray[index].scrollIntoView({
        behavior: 'smooth'
      });
    }
  },
  day_events: function day_events(array, extra) {
    var _this7 = this;
    var setter = now;
    this.days_Arr.forEach(function (member) {
      member.addEventListener('click', function (btn) {
        var year = Number.parseInt(btn.target.dataset.yearYy);
        var month = Number.parseInt(btn.target.dataset.monthMm);
        var date = Number.parseInt(btn.target.innerHTML);
        array[array.length - 1].value = year;
        array[array.length - 2].value = month + 1;
        array[array.length - 3].value = date;
        time_userDATA.date = date;
        time_userDATA.month = month;
        time_userDATA.year = year;
        //monthList
        setter.month(month);
        extra.value = setter.format('MMM');
      });
    });
    this.year_btn.forEach(function (member) {
      member.addEventListener('click', function (btn) {
        (0, _dev_module.active_SHOWN)(_this7.year_btn, 'current');
        btn.target.classList.add('current');
      });
    });
  }
};
Object.setPrototypeOf(sect_second, duePicker);
Object.setPrototypeOf(time_chambers, sect_second);
function side_buttonEvents(array) {
  var month = array[array.length - 1];
  var counter = 1;
  month.addEventListener('click', function (btn) {
    (0, _dev_module["default"])('toggle', 'toggle_show', sect_second.monthList);
  });
}
var cargo = {
  bool_ar: false
};
var _default = exports["default"] = cargo;
var noticeBoard = document.querySelector('[data-notice-board]');
var notice_board = exports.notice_board = {
  setter: (0, _moment["default"])(),
  todayDate: noticeBoard.querySelector('[data-date-num]'),
  todayTask_count: noticeBoard.querySelector('[data-curentday-task'),
  today_counter: 0,
  fxn_one: function fxn_one(date) {
    this.todayDate.innerHTML = "".concat(this.setter.format('DD'), " <sub class=\"month_sub\" data-month-name>-").concat(this.setter.format('MMMM'), "</sub>");
  },
  fxn_two: function fxn_two(date) {
    //console.log(date === moment().format('DD MM YYYY'))
    if (date === (0, _moment["default"])().format('DD MM YYYY')) {
      this.today_counter++;
      this.todayTask_count.innerHTML = "".concat(this.today_counter, " task added");
    }
  },
  fxn_three: function fxn_three() {
    this.today_counter--;
    this.todayTask_count.innerHTML = "".concat(this.today_counter, " task added");
    if (this.today_count === 0) {
      this.todayTask_count.innerHTML = "No task added";
    }
  }
};
notice_board.fxn_one();