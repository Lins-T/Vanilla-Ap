import event_Toggle, { active_SHOWN, label_event } from './modules/dev_module1.js'
import moment from './node_modules/moment/moment.js'

let clicks = {
 menuHam: document.querySelectorAll('[data-menu]'),
 footbar: document.querySelector('.foot_taskBar'),
 taskDialog: document.querySelector('.addTask_window'),
 bool: false,
 sec_bool: false,
 hold: [],
 label_list: [],
 priority_list: [],
 time_bool: false,

 description: document.querySelector('.description'),
 due: document.querySelector('#due'),
 labelChoice: document.querySelector('.label_choice'),
 priority_btn: undefined,
 priorityChoice: document.querySelector('.priority_choice'),
 side_btn: [],
 footbTN_Nav: Array.from(document.querySelectorAll('[data-foot-btn]')),
 taskContainer: document.querySelector('[data-task-container]'),

 click_event() {
  const add_task = this.footbar.querySelector('[data-primary')
  //Menu
  this.menuHam.forEach(member => {
   member.addEventListener('click', btn => {
    event_Toggle('toggle', btn.target.dataset.toggleName, btn.target.dataset.target)
    this.bool = true;
   })
  })

  // footbar or taskbar
  let footbTN_Nav = this.footbTN_Nav.map(member => member.firstElementChild)

  this.footbar.addEventListener('click', btn => {
   if (btn.target.hasAttribute('data-primary')) {
    alert('donn')
    event_Toggle('toggle', btn.target.dataset.toggleName, btn.target.dataset.target)
    //this.secondaryAction(this.menuHam, this.bool)
    this.priority_btn = this.taskDialog.querySelector('[data-priority]')
    btn.target.disabled = true
    alert('6')
   }

   /**
      if (btn.target.hasAttribute('data-foot-btn')) {
      active_SHOWN(footbTN_Nav, 'current')
      btn.target.firstElementChild.classList.add('current')
      }
   **/
  })

  //ADDtask dialog
  this.taskDialog.addEventListener('click', btn => {
   if (btn.target.hasAttribute('data-primary')) {
    alert('gone')
    this.data_setting()
    defaults.call_def()
    this.auxiliaryAction()
    this.field_reset()
    label_event.randzevou()
    Todo.pending_conut++
    Todo.todo_stateContainers()

    event_Toggle('remove', btn.target.dataset.toggleName, btn.target.dataset.target)
    add_task.disabled = false
   }

   if (btn.target.hasAttribute('data-secondary')) {
    if (this.time_bool) {
     defaults.call_def()
    }
    event_Toggle('remove', btn.target.dataset.toggleName, btn.target.dataset.target)
    this.auxiliaryAction()
    this.field_reset()
    label_event.randzevou()
    add_task.disabled = false
   }

   if (btn.target.hasAttribute('data-setter-date')) {
    setTimeout(function () {
     event_Toggle('add', btn.target.dataset.toggleName, btn.target.dataset.target)
     event_Toggle('remove', 'add_on', btn.target.dataset.target)
    }, 200);
    this.time_bool = false
   }

   if (btn.target.hasAttribute('data-priority')) {
    this.sec_bool = true;
    event_Toggle('toggle', btn.target.dataset.toggleName, btn.target.dataset.target)
    this.hold.push(['remove', btn.target.dataset.toggleName, btn.target.dataset.target])

    this.priority_list = Array.from(this.taskDialog.querySelector('.priority_list').children)
    this.priority_list.forEach(member => {
     member.addEventListener('click', btn => {
      this.priorityChoice.value = btn.target.innerHTML
     })
    })
   }

   if (btn.target.hasAttribute('data-label')) {
    this.sec_bool = true;
    event_Toggle('toggle', btn.target.dataset.toggleName, btn.target.dataset.target)
    let label_list = this.taskDialog.querySelector('.label_list')
    this.hold.push(['remove', btn.target.dataset.toggleName, btn.target.dataset.target])
   }
  })
 },

 secondaryAction(entity, bool) {
  if (bool) {
   event_Toggle('remove', entity.dataset.toggleName, entity.dataset.target)
   this.bool = false
  }
 },

 auxiliaryAction() {
  if (this.sec_bool) {
   event_Toggle(...this.hold[0])
   if (this.hold.length > 1) {
    event_Toggle(...this.hold[1])
   }
  }

  this.sec_bool = false
 },

 validate() {
  const done_btn = this.taskDialog.querySelector('[data-primary]')

  let arr1 =
   [
    this.description,
   ];

  if (this.side_btn.length !== 0) {
   this.side_btn.forEach(member => arr1.push(member))
  }

  let arr2 =
   [
    this.description,
    this.due,
   ];

  arr1.forEach(member => {
   member.addEventListener('blur', btn => {
    let bool = arr2.some(member => member.value === '')
    if (!bool) {
     done_btn.disabled = false
    } else {
     done_btn.disabled = true
    }
   })
  })
 },

 field_reset() {
  const done_btn = this.taskDialog.querySelector('[data-primary]')
  done_btn.disabled = true

  let arr =
   [this.description,
   this.due,
   this.priorityChoice,
   this.labelChoice]
  arr.forEach(member => member.value = '')
 },


 data_setting() {
  Lay_out.description = this.description.value
  Lay_out.date = this.due.value
  Lay_out.priority = this.priorityChoice.value
  Lay_out.label = this.labelChoice.value
  Lay_out.duration = time_userDATA.duration

  Lay_out.layout(this.taskContainer)
 }
}

function check(field, arr, victim) {
 field.addEventListener('blur', btn => {
  let bool = arr.every(member => member.value !== '')

  if (bool) {
   victim.disabled = false
   console.log('happening')
  } else {
   console.log('Nothing')
  }
 })
}

clicks.click_event()
export default clicks
export { moment }
import cargo, { defaults, time_userDATA } from './modules/calender_module1.js'
import Lay_out, { Todo } from './modules/task_layout.js'
