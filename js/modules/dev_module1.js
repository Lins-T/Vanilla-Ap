"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.active_SHOWN = active_SHOWN;
exports["default"] = event_Toggle;
exports.label_event = void 0;
exports.pops_clear = pops_clear;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function event_Toggle(purpose, className, targetClassName) {
  var target = undefined;
  if (_typeof(targetClassName) !== 'object') {
    target = document.querySelector(".".concat(targetClassName));
  } else {
    target = targetClassName;
  }
  if (purpose === 'toggle') {
    target.classList.toggle("".concat(className));
  } else if (purpose === 'add') {
    target.classList.add("".concat(className));
  } else if (purpose === 'modal_S') {
    _modalShow(target);
  } else if (purpose === 'modal_C') {
    _modalClose(target);
  } else {
    target.classList.remove("".concat(className));
  }
  function _modalShow(arg) {
    arg.showModal();
  }
  function _modalClose(arg) {
    arg.close();
  }
}
function pops_clear(classNAmes, target) {
  document.addEventListener('click', function (btn) {
    setTimeout(function () {
      event_Toggle('remove', classNAmes, target);
    }, 50);
  }, {
    once: true
  });
}
function active_SHOWN(array, clasNAmes) {
  array.forEach(function (member) {
    if (member.classList.contains(clasNAmes)) {
      member.classList.remove(clasNAmes);
    }
  });
}
var label_event = exports.label_event = {
  key0: undefined,
  key1: undefined,
  Label_arr: [],
  field: document.querySelector('[data-label-choice]'),
  classNAme: 'pops_selected',
  counter: 0,
  Event: function Event(lists) {
    var _this = this;
    this.Label_arr = lists;
    lists.forEach(function (member) {
      member.addEventListener('click', function (btn) {
        if (_this.counter < 2 && !btn.target.classList.contains(_this.classNAme)) {
          btn.target.classList.toggle(_this.classNAme);
          btn.target.setAttribute('data-model', "key".concat(_this.counter));
          _this[btn.target.dataset.model] = btn.target;
          _this.counter++;
          _this.Alpha(_this.field);
        } else if (btn.target.classList.contains(_this.classNAme)) {
          btn.target.classList.remove(_this.classNAme);
          _this[btn.target.dataset.model] = undefined;
          btn.target.removeAttribute('data-model');
          if (_this.key1 !== undefined) {
            _this.key0 = _this.key1;
            _this.key1 = undefined;
          } else if (_this.key0 === undefined) {
            _this.key0 = undefined;
          }
          _this.counter--;
          _this.Alpha(_this.field);
        }
      });
    });
  },
  Alpha: function Alpha(field) {
    var arr = [this.key0, this.key1];
    var bool = arr.every(function (member) {
      return member !== undefined;
    });
    if (!bool) {
      field.value = '';
    }
    if (bool) {
      field.value = "".concat(this.key0.innerHTML, " | ").concat(this.key1.innerHTML);
    } else if (this.key0 !== undefined && this.key1 === undefined) {
      field.value = "".concat(this.key0.innerHTML);
    }
  },
  randzevou: function randzevou() {
    this.key = undefined;
    this.key1 = undefined;
    this.counter = 0;
    active_SHOWN(this.Label_arr, this.classNAme);
  }
};