"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clicks = void 0;
exports["default"] = popOver_clear;
var _dev_module = _interopRequireWildcard(require("./modules/dev_module1.js"));
var _calender_module = _interopRequireWildcard(require("./modules/calender_module1.js"));
var _task_layout = _interopRequireWildcard(require("./modules/task_layout.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; } //import moment from 'moment'
function popOver_clear(popover, className) {
  window.addEventListener("click", function () {
    (0, _dev_module["default"])('remove', className, popover);
  }, {
    once: true
  });
}
var clicks = exports.clicks = {
  navList: document.querySelector('[data-nav-list]'),
  menuHam: document.querySelector('[data-menu]'),
  footbar: document.querySelector('.foot_taskBar'),
  taskDialog: document.querySelector('.addTask_window'),
  bool: false,
  sec_bool: false,
  hold: [],
  label_list: [],
  priority_list: [],
  time_bool: false,
  edit_bool: false,
  description: document.querySelector('.description'),
  due: document.querySelector('#due'),
  labelChoice: document.querySelector('.label_choice'),
  priority_btn: undefined,
  priorityChoice: document.querySelector('.priority_choice'),
  side_btn: [],
  footbTN_Nav: Array.from(document.querySelectorAll('[data-foot-btn]')),
  taskContainer: document.querySelector('[data-task-container]'),
  windowIntoview: function windowIntoview(target) {
    var media = window.matchMedia('(max-width: 850px)');
    var element = document.querySelector("[".concat(target, "]"));
    if (media.matches) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  },
  click_event: function click_event() {
    var _this = this;
    var add_task = this.footbar.querySelector('[data-primary');
    //Menu
    var navist = undefined;
    this.menuHam.addEventListener('click', function (btn) {
      event.stopPropagation();
      (0, _dev_module["default"])('toggle', btn.target.dataset.toggleName, btn.target.dataset.target);
      _this.bool = true;
      popOver_clear(btn.target.dataset.target, btn.target.dataset.toggleName);
    }, {
      capture: true
    });
    this.navList.addEventListener('click', function (btn) {
      if (btn.target.hasAttribute('data-filter')) {
        (0, _dev_module["default"])('toggle', btn.target.dataset.toggleName, btn.target.dataset.target);
      }
    });

    // footbar or taskbar
    this.footbTN_Nav.forEach(function (member) {
      member.addEventListener('click', function (btn) {
        _this.windowIntoview(btn.target.dataset.targetWindow);
        if (btn.target.dataset.index < 2) {
          _this.footbar.firstElementChild.disabled = false;
        } else {
          _this.footbar.firstElementChild.disabled = true;
        }
      });
    });
    this.footbar.addEventListener('click', function (btn) {
      if (btn.target.hasAttribute('data-primary')) {
        (0, _dev_module["default"])('toggle', btn.target.dataset.toggleName, btn.target.dataset.target);
        //this.secondaryAction(this.menuHam, this.bool)
        _this.priority_btn = _this.taskDialog.querySelector('[data-priority]');
        btn.target.disabled = true;
      }
    });

    //ADDtask dialog
    this.taskDialog.addEventListener('click', function (btn) {
      if (btn.target.hasAttribute('data-primary')) {
        if (!_this.edit_bool) {
          _this.data_setting();
          _task_layout.Todo.pending_conut++;
          _task_layout.Todo.todo_stateContainers();
          add_task.disabled = false;
        } else {
          _this.edit_bool = false;
          _task_layout.Todo.edit(_task_layout.Todo.appearance);
        }
        _dev_module.label_event.randzevou();
        _this.auxiliaryAction();
        _this.field_reset();
        _calender_module.defaults.call_def();
        (0, _dev_module["default"])('remove', btn.target.dataset.toggleName, btn.target.dataset.target);
      }
      if (btn.target.hasAttribute('data-secondary')) {
        if (_this.time_bool) {
          _calender_module.defaults.call_def();
        }
        (0, _dev_module["default"])('remove', btn.target.dataset.toggleName, btn.target.dataset.target);
        _this.auxiliaryAction();
        _this.field_reset();
        _dev_module.label_event.randzevou();
        add_task.disabled = false;
        _this.edit_bool = false;
      }
      if (btn.target.hasAttribute('data-setter-date')) {
        setTimeout(function () {
          (0, _dev_module["default"])('add', btn.target.dataset.toggleName, btn.target.dataset.target);
          (0, _dev_module["default"])('remove', 'add_on', btn.target.dataset.target);
        }, 200);
        _this.time_bool = false;
      }
      if (btn.target.hasAttribute('data-priority')) {
        _this.sec_bool = true;
        (0, _dev_module["default"])('toggle', btn.target.dataset.toggleName, btn.target.dataset.target);
        _this.hold.push(['remove', btn.target.dataset.toggleName, btn.target.dataset.target]);
        _this.priority_list = Array.from(_this.taskDialog.querySelector('.priority_list').children);
        _this.priority_list.forEach(function (member) {
          member.addEventListener('click', function (btn) {
            _this.priorityChoice.value = btn.target.innerHTML;
          });
        });
      }
      if (btn.target.hasAttribute('data-label')) {
        _this.sec_bool = true;
        (0, _dev_module["default"])('toggle', btn.target.dataset.toggleName, btn.target.dataset.target);
        var label_list = _this.taskDialog.querySelector('.label_list');
        _this.hold.push(['remove', btn.target.dataset.toggleName, btn.target.dataset.target]);
      }
    });
  },
  secondaryAction: function secondaryAction(entity, bool) {
    if (bool) {
      (0, _dev_module["default"])('remove', entity.dataset.toggleName, entity.dataset.target);
      this.bool = false;
    }
  },
  auxiliaryAction: function auxiliaryAction() {
    if (this.sec_bool) {
      _dev_module["default"].apply(void 0, _toConsumableArray(this.hold[0]));
      if (this.hold.length > 1) {
        _dev_module["default"].apply(void 0, _toConsumableArray(this.hold[1]));
      }
    }
    this.sec_bool = false;
  },
  validate: function validate() {
    var done_btn = this.taskDialog.querySelector('[data-primary]');
    var arr1 = [this.description];
    if (this.side_btn.length !== 0) {
      this.side_btn.forEach(function (member) {
        return arr1.push(member);
      });
    }
    var arr2 = [this.description, this.due];
    arr1.forEach(function (member) {
      member.addEventListener('blur', function (btn) {
        var bool = arr2.some(function (member) {
          return member.value === '';
        });
        if (!bool) {
          done_btn.disabled = false;
        } else {
          done_btn.disabled = true;
        }
      });
    });
  },
  field_reset: function field_reset() {
    var done_btn = this.taskDialog.querySelector('[data-primary]');
    done_btn.disabled = true;
    var arr = [this.description, this.due, this.priorityChoice, this.labelChoice];
    arr.forEach(function (member) {
      return member.value = '';
    });
  },
  data_setting: function data_setting() {
    _task_layout["default"].description = this.description.value;
    _task_layout["default"].date = this.due.value;
    _task_layout["default"].priority = this.priorityChoice.value;
    _task_layout["default"].label = this.labelChoice.value;
    _task_layout["default"].duration = _calender_module.time_userDATA.duration;
    _task_layout["default"].layout(this.taskContainer);
  }
};
function check(field, arr, victim) {
  field.addEventListener('blur', function (btn) {
    var bool = arr.every(function (member) {
      return member.value !== '';
    });
    if (bool) {
      victim.disabled = false;
      console.log('happening');
    } else {
      console.log('Nothing');
    }
  });
}
clicks.click_event();