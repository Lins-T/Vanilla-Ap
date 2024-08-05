"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Todo = void 0;
var _main = _interopRequireWildcard(require("../main.js"));
var _calender_module = require("./calender_module1.js");
var _dev_module = _interopRequireWildcard(require("./dev_module1.js"));
var _Todo;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var taskContainer = document.querySelector('[data-task-container]');
var spanComplete = document.querySelector('[data-completed-length]');
var spanPending = document.querySelector('[data-pending-length]');
var spanTrash = document.querySelector('[data-trash-length]');
var todoCount = 0;
function port() {
  return _port.apply(this, arguments);
}
function _port() {
  _port = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var data;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _calender_module._jsonFtch)();
        case 2:
          data = _context.sent;
          Lay_out.data_base = data.todo_icons[0];
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _port.apply(this, arguments);
}
var storageHouse = {
  pending: {},
  completed: {}
};
var Todo = exports.Todo = /*#__PURE__*/function () {
  function Todo(content, date, priority, label, button1, button2, menu_popup, duration, appearance, todoIndex) {
    _classCallCheck(this, Todo);
    this.content = content;
    this.date = date;
    this.priority = priority;
    this.label = label;
    this.duration = duration;
    this.button1 = button1;
    this.button2 = button2;
    this.menu_popup = menu_popup;
    this.appearance = appearance;
    this.todoIndex = todoIndex;
    this.check = false;
    this.status = 'Pending';
    this.completed = 'completed';
    this.toggle_show = 'toggle_show';
  }
  return _createClass(Todo, [{
    key: "Button1",
    value: function Button1(bool_arr) {
      var _this = this;
      var counter = 1;
      this.button1.addEventListener('click', function (btn) {
        counter++;
        _this.check_events(btn.target, bool_arr, counter);
      });
      Todo.pending_count++;
    }
  }, {
    key: "check_events",
    value: function check_events(target, bool_arr, counter) {
      var bool_false = bool_arr[0];
      var bool_true = bool_arr[1];
      if (counter % 2 === 0) {
        target.parentElement.classList.add(this.completed);
        target.innerHTML = bool_true;
        this.check = true;
        Todo.completed_count++;
        Todo.pending_count--;
        //storageHouse.completed[`key${this.todoIndex}`] = this.appearance
      } else {
        target.parentElement.classList.remove(this.completed);
        target.innerHTML = bool_false;
        this.check = false;
        Todo.completed_count--;
        Todo.pending_count++;
        //delete storageHouse.completed[`key${this.todoIndex}`]
      }
      Todo.todo_stateContainers();
    }
  }, {
    key: "details_fxn",
    value: function details_fxn() {
      if (this.check === true) {
        this.status = 'Completed';
      } else {
        this.status = 'Pending';
      }
    }
  }, {
    key: "Button2",
    value: function Button2() {
      var _this2 = this;
      this.button2.addEventListener('click', function (btn) {
        event.stopPropagation();
        (0, _dev_module["default"])('toggle', _this2.toggle_show, _this2.menu_popup);
        _this2.allclick(_this2.toggle_show, _this2.menu_popup);
      }, {
        capture: true
      });
      this.menu_popup.addEventListener('click', function (btn) {
        if (btn.target.hasAttribute('data-detail')) {
          _this2.details_fxn();
          var arr = [_this2.status, _this2.date, _this2.label, _this2.priority, _this2.duration, _this2.content];
          (0, _dev_module["default"])('add', _this2.toggle_show, Todo.detail_INfo.apply(Todo, arr));
        }
        if (btn.target.hasAttribute('data-edit')) {
          (0, _dev_module["default"])('toggle', btn.target.dataset.toggleName, btn.target.dataset.target);
          _this2.edit_stageOne();
          Todo.edit = _this2.edit_stageTwo;
          Todo.appearance = _this2.appearance;
          _main.clicks.edit_bool = true;
        }
        if (btn.target.hasAttribute('data-delete')) {
          if (_this2.check === true) {
            Todo.completed_count--;
          } else {
            Todo.pending_count--;
          }
          (0, _dev_module["default"])('add', 'deleta', _this2.appearance);
          setTimeout(function () {
            taskContainer.removeChild(_this2.appearance);
          }, 1000);
          Todo.trash_count++;
          Todo.todo_stateContainers();
        }
      });
    }
  }, {
    key: "allclick",
    value: function allclick(classNAmes, menu) {
      window.addEventListener('click', function (btn) {
        setTimeout(function () {
          (0, _dev_module["default"])('remove', classNAmes, menu);
        }, 50);
      }, {
        once: true
      });
    }
  }, {
    key: "edit_stageOne",
    value: function edit_stageOne() {
      Todo.description.value = this.content;
      Todo.due.value = this.date;
      Todo.priorityChoice.value = this.priority;
      Todo.labelChoice.value = this.label;
    }
  }, {
    key: "edit_stageTwo",
    value: function edit_stageTwo(appearance) {
      this.content = Todo.description.value;
      this.date = Todo.due.value;
      this.priority = Todo.priorityChoice.value;
      this.label = Todo.labelChoice.value;
      appearance.querySelector('.todo_content').innerHTML = this.content;
      appearance.querySelector('.todo_date').innerHTML = this.date;
      Lay_out.priority_event(appearance.querySelector('.todo_priority'), this.priority);
      if (this.label === 'Not available') {
        appearance.querySelector('.todo_label').innerHTML = '';
      } else {
        appearance.querySelector('.todo_label').innerHTML = this.label;
      }
    }
  }, {
    key: "todo_delete",
    value: function todo_delete() {}
  }], [{
    key: "detail_INfo",
    value: function detail_INfo(status, date, label, priority, duration, content) {
      var dialog = document.querySelector('[data-detail-dialog]');
      var button = dialog.querySelector('[data-detail-button]');
      var ul = dialog.querySelector('[detail_lists]');
      var div = dialog.querySelector('[data-detail_content]');
      var d_status = ul.querySelector('[data-status_content]');
      d_status.innerHTML = "".concat(status);
      var d_date = ul.querySelector('[data-date_content]');
      d_date.innerHTML = "".concat(date);
      var d_label = ul.querySelector('[data-label_content]');
      d_label.innerHTML = "".concat(label);
      var d_priority = ul.querySelector('[data-priority_content]');
      d_priority.innerHTML = "".concat(priority);
      var d_duration = ul.querySelector('[data-duration_content]');
      d_duration.innerHTML = "".concat(duration);
      div.innerHTML = "".concat(content);
      button.addEventListener('click', function () {
        setTimeout(function () {
          (0, _dev_module["default"])('remove', Todo.toggle_show, dialog);
        }, 100);
      }, {
        once: true
      });
      return dialog;
    }
  }, {
    key: "todo_stateContainers",
    value: function todo_stateContainers() {
      spanComplete.innerHTML = "".concat(Todo.completed_count);
      spanPending.innerHTML = "".concat(Todo.pending_count);
      spanTrash.innerHTML = "".concat(Todo.trash_count);
    }
  }]);
}();
_Todo = Todo;
_defineProperty(Todo, "menu", undefined);
_defineProperty(Todo, "toggle_show", 'toggle_show');
_defineProperty(Todo, "bool", false);
_defineProperty(Todo, "completed_count", 0);
_defineProperty(Todo, "pending_count", 0);
_defineProperty(Todo, "trash_count", 0);
_defineProperty(Todo, "edit", undefined);
_defineProperty(Todo, "appearance", undefined);
_defineProperty(Todo, "addTask_dialog", document.querySelector('[data-add-task-dialog]'));
_defineProperty(Todo, "description", _Todo.addTask_dialog.querySelector('[data-description]'));
_defineProperty(Todo, "due", _Todo.addTask_dialog.querySelector('[data-due]'));
_defineProperty(Todo, "priorityChoice", _Todo.addTask_dialog.querySelector('[data-priority-choice]'));
_defineProperty(Todo, "labelChoice", _Todo.addTask_dialog.querySelector('[data-label-choice]'));
var Lay_out = {
  data_base: undefined,
  description: '',
  date: '',
  priority: '',
  label: '',
  duration: '',
  container_classNAme: ['todo', 'padd'],
  status_classNAme: ['todo_check', 'all_click', 'disp_rf'],
  content_classNAme: ['todo_content'],
  menu_classNAme: ['todo_menu', 'all_click', 'disp_rf'],
  foot_classNAme: ['todo_foot', 'disp_rf'],
  priority_classNAme: ['todo_priority'],
  date_classNAme: ['todo_date'],
  label_classNAme: ['todo_label'],
  menuPopup: ['todo_menuPopup', 'disp_cf'],
  menuPop_btn: ['menuPop_btn', 'disp_rf', 'all_click', 'padd'],
  layout: function layout(parent) {
    var _container$classList, _button1$classList, _content$classList, _button2$classList, _foot$classList, _priority$classList, _date$classList, _label$classList, _menu_popup$classList, _detail$classList, _del$classList, _edit$classList;
    var icons = this.data_base;
    var Dom = document.createDocumentFragment();
    var container = document.createElement('div');
    (_container$classList = container.classList).add.apply(_container$classList, _toConsumableArray(this.container_classNAme));
    var button1 = document.createElement('button');
    (_button1$classList = button1.classList).add.apply(_button1$classList, _toConsumableArray(this.status_classNAme));
    button1.innerHTML = "".concat(icons.check_false);
    var content = document.createElement('div');
    (_content$classList = content.classList).add.apply(_content$classList, _toConsumableArray(this.content_classNAme));
    content.innerHTML = this.description;
    var button2 = document.createElement('button');
    (_button2$classList = button2.classList).add.apply(_button2$classList, _toConsumableArray(this.menu_classNAme));
    button2.innerHTML = "".concat(icons.menu_false);
    button2.setAttribute('data-toggle-name', '');
    //data-toggle-name="pops_active" 
    //data-target="priority_list"

    var foot = document.createElement('div');
    (_foot$classList = foot.classList).add.apply(_foot$classList, _toConsumableArray(this.foot_classNAme));
    var priority = document.createElement('div');
    (_priority$classList = priority.classList).add.apply(_priority$classList, _toConsumableArray(this.priority_classNAme));
    this.priority_event(priority, this.priority);
    var date = document.createElement('div');
    (_date$classList = date.classList).add.apply(_date$classList, _toConsumableArray(this.date_classNAme));
    date.innerHTML = this.date;
    var label = document.createElement('div');
    (_label$classList = label.classList).add.apply(_label$classList, _toConsumableArray(this.label_classNAme));
    label.innerHTML = this.label;
    var menu_popup = document.createElement('div');
    (_menu_popup$classList = menu_popup.classList).add.apply(_menu_popup$classList, _toConsumableArray(this.menuPopup));
    var detail = document.createElement('button');
    detail.setAttribute('data-detail', 'button');
    (_detail$classList = detail.classList).add.apply(_detail$classList, _toConsumableArray(this.menuPop_btn));
    detail.innerHTML = "".concat(icons.detail, "<span> Detail </span>");
    var del = document.createElement('button');
    del.setAttribute('data-delete', 'button');
    (_del$classList = del.classList).add.apply(_del$classList, _toConsumableArray(this.menuPop_btn));
    del.innerHTML = "".concat(icons["delete"], " <span> Delete </span>");
    var edit = document.createElement('button');
    edit.setAttribute('data-edit', 'button');
    edit.setAttribute('data-target', 'addTask_dialog');
    edit.setAttribute('data-toggle-name', 'taskWindow_active');
    (_edit$classList = edit.classList).add.apply(_edit$classList, _toConsumableArray(this.menuPop_btn));
    edit.innerHTML = "".concat(icons.edit, " <span> Edit </span>");
    menu_popup.appendChild(detail);
    menu_popup.appendChild(del);
    menu_popup.appendChild(edit);
    foot.appendChild(priority);
    foot.appendChild(date);
    foot.appendChild(label);
    foot.appendChild(menu_popup);
    Dom.appendChild(button1);
    Dom.appendChild(content);
    Dom.appendChild(button2);
    Dom.appendChild(foot);
    container.appendChild(Dom);
    parent.appendChild(container);
    this.todo([button1, button2], menu_popup, container);
  },
  todo: function todo(button_Arr, menu_popup, container) {
    var priority = this.priority === '' ? 'None' : this.priority;
    var label = this.label === '' ? 'Not available' : this.label;
    todoCount += 1;
    var _todo = new Todo(this.description, this.date, priority, label, button_Arr[0], button_Arr[1], menu_popup, this.duration, container, todoCount);
    var check_arr = [this.data_base.check_false, this.data_base.check_true];
    _todo.Button1(check_arr);
    _todo.Button2();
  },
  priority_event: function priority_event(element, priority) {
    var arr = ['high_color', 'mid_color', 'low_color', 'none_color'];
    arr.forEach(function (member) {
      element.classList.remove(member);
    });
    switch (priority) {
      case 'High':
        element.classList.add('high_color');
        element.innerHTML = "".concat(this.data_base.high);
        break;
      case 'Medium':
        element.classList.add('mid_color');
        element.innerHTML = "".concat(this.data_base.medium);
        break;
      case 'Low':
        element.classList.add('low_color');
        element.innerHTML = "".concat(this.data_base.low);
        break;
      default:
        element.classList.add('none_color');
        element.innerHTML = "".concat(this.data_base.none);
    }
  }
};
var _default = exports["default"] = Lay_out;
port();