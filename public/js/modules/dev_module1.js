export default function
 event_Toggle(purpose, className, targetClassName) {

 let target = undefined;
 if ((typeof targetClassName) !== 'object') {
  target = document.querySelector(`.${targetClassName}`)
 } else {
  target = targetClassName
 }

 if (purpose === 'toggle') {
  target.classList.toggle(`${className}`)
 } else if (purpose === 'add') {
  target.classList.add(`${className}`)
 } else if (purpose === 'modal_S') {
  _modalShow(target)
 } else if (purpose === 'modal_C') {
  _modalClose(target)
 } else {
  target.classList.remove(`${className}`)
 }

 function _modalShow(arg) {
  arg.showModal()
 }

 function _modalClose(arg) {
  arg.close()
 }
}

export function pops_clear(classNAmes, target) {
 document.addEventListener('click', btn => {
  setTimeout(function () {
   event_Toggle('remove', classNAmes, target)
  }, 50);
 }, { once: true })
}

export function active_SHOWN(array, clasNAmes) {
 array.forEach(member => {
  if (member.classList.contains(clasNAmes)) {
   member.classList.remove(clasNAmes)
  }
 })
}

export const label_event = {
 key0: undefined,
 key1: undefined,
 Label_arr: [],
 field: document.querySelector('[data-label-choice]'),
 classNAme: 'pops_selected',
 counter: 0,

 Event(lists) {
  this.Label_arr = lists
  lists.forEach(member => {
   member.addEventListener('click', btn => {

    if (this.counter < 2 && !btn.target.classList.contains(this.classNAme)) {
     btn.target.classList.toggle(this.classNAme)
     btn.target.setAttribute('data-model', `key${this.counter}`)
     this[btn.target.dataset.model] = btn.target
     this.counter++
     this.Alpha(this.field)

    } else if (btn.target.classList.contains(this.classNAme)) {
     btn.target.classList.remove(this.classNAme)
     this[btn.target.dataset.model] = undefined
     btn.target.removeAttribute('data-model')
     if (this.key1 !== undefined) {
      this.key0 = this.key1
      this.key1 = undefined
     } else if (this.key0 === undefined) {
      this.key0 = undefined
     }
     this.counter--
     this.Alpha(this.field)
    }
   })
  })
 },

 Alpha(field) {
  const arr = [this.key0, this.key1]
  let bool = arr.every(member => member !== undefined)
  if (!bool) {
   field.value = '';
  }
  if (bool) {
   field.value =
    `${this.key0.innerHTML} | ${this.key1.innerHTML}`
  } else if (this.key0 !== undefined && this.key1 === undefined) {
   field.value =
    `${this.key0.innerHTML}`
  }
 },

 randzevou() {
  this.key = undefined
  this.key1 = undefined
  this.counter = 0
  active_SHOWN(this.Label_arr, this.classNAme)
 }

}
