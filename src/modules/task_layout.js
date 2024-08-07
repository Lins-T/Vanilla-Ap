import popOver_clear, { clicks } from '../main.js'
import { _jsonFtch, time_userDATA } from './calender_module1.js'
import event_Toggle, { active_SHOWN, pops_clear, label_event } from './dev_module1.js'

const taskContainer = document.querySelector('[data-task-container]')
const spanComplete = document.querySelector('[data-completed-length]')
const spanPending = document.querySelector('[data-pending-length]')
const spanTrash = document.querySelector('[data-trash-length]')
let todoCount = 0;
let p = 'hello'

async function port() {
 let data = await _jsonFtch()
 Lay_out.data_base = data.todo_icons[0]
}

const storageHouse = {
 pending: {},
 completed: {}
}

export class Todo {
 static menu = undefined
 static toggle_show = 'toggle_show'
 static bool = false

 static completed_count = 0
 static pending_count = 0
 static trash_count = 0
 
 static edit = undefined
 static appearance = undefined
 
 constructor(content, date, priority, label, button1, button2, menu_popup, duration, appearance, todoIndex)  {
  this.content = content;
  this.date = date;
  this.priority = priority;
  this.label = label;
  this.duration = duration

  this.button1 = button1
  this.button2 = button2
  this.menu_popup = menu_popup;
  
  this.appearance = appearance
  this.todoIndex = todoIndex

  this.check = false
  this.status = 'Pending'

  this.completed = 'completed'
  this.toggle_show = 'toggle_show'
 }

 Button1(bool_arr) {
  let counter = 1
  this.button1.addEventListener('click', btn => {
   counter++
   this.check_events(btn.target, bool_arr, counter)
  })

  Todo.pending_count++
 }

 check_events(target, bool_arr, counter) {
  const bool_false = bool_arr[0]
  const bool_true = bool_arr[1]

  if (counter % 2 === 0) {
   target.parentElement.classList.add(this.completed)
   target.innerHTML = bool_true
   this.check = true
   Todo.completed_count++
   Todo.pending_count--
   //storageHouse.completed[`key${this.todoIndex}`] = this.appearance
  } else {
   target.parentElement.classList.remove(this.completed)
   target.innerHTML = bool_false
   this.check = false
   Todo.completed_count--
   Todo.pending_count ++
   //delete storageHouse.completed[`key${this.todoIndex}`]
  }
  
  Todo.todo_stateContainers()
 }

 details_fxn() {
  if (this.check === true) {
   this.status = 'Completed'
  } else {
   this.status = 'Pending'
  }
 }

 Button2() {
  this.button2.addEventListener('click', btn => {
   event.stopPropagation()
   event_Toggle('toggle', this.toggle_show, this.menu_popup)
   this.allclick(this.toggle_show, this.menu_popup)
  }, { capture: true })

  this.menu_popup.addEventListener('click', btn => {
   if (btn.target.hasAttribute('data-detail')) {
    this.details_fxn()
    let arr = [this.status, this.date, this.label, this.priority, this.duration, this.content]
    event_Toggle('add', this.toggle_show, Todo.detail_INfo(...arr))
   }

   if(btn.target.hasAttribute('data-edit')) {
    event_Toggle('toggle', btn.target.dataset.toggleName, btn.target.dataset.target)
    this.edit_stageOne()
    Todo.edit= this.edit_stageTwo
    Todo.appearance = this.appearance
   
    clicks.edit_bool = true
   }
   
   if(btn.target.hasAttribute('data-delete')) {
    if (this.check === true ) {
     Todo.completed_count--
    } else {
     Todo.pending_count--
    }
    event_Toggle('add', 'deleta', this.appearance)
    setTimeout(() => {
     taskContainer.removeChild(this.appearance)
    }, 1000)
    Todo.trash_count++
    Todo.todo_stateContainers()
   }
  })
 }

 allclick(classNAmes, menu) {
  window.addEventListener('click', btn => {
   setTimeout(function () {
    event_Toggle('remove', classNAmes, menu)
   }, 50);
  }, { once: true })
 }

 static detail_INfo(status, date, label, priority, duration, content) {
  const dialog = document.querySelector('[data-detail-dialog]')
  const button = dialog.querySelector('[data-detail-button]')
  const ul = dialog.querySelector('[detail_lists]')
  const div = dialog.querySelector('[data-detail_content]')
 
  const d_status = ul.querySelector('[data-status_content]')
  d_status.innerHTML = `${status}`
  const d_date = ul.querySelector('[data-date_content]')
  d_date.innerHTML = `${date}`
  const d_label = ul.querySelector('[data-label_content]')
  d_label.innerHTML = `${label}`
  const d_priority = ul.querySelector('[data-priority_content]')
  d_priority.innerHTML = `${priority}`
  const d_duration = ul.querySelector('[data-duration_content]')
  d_duration.innerHTML = `${duration}`
  div.innerHTML = `${content}`
  
  button.addEventListener('click', () => {
   setTimeout(function () {
    event_Toggle('remove', Todo.toggle_show, dialog)
   }, 100);
  }, { once: true })
  return dialog
 }
 
 static addTask_dialog = document.querySelector('[data-add-task-dialog]')
 static description = Todo.addTask_dialog.querySelector('[data-description]')
 static due = Todo.addTask_dialog.querySelector('[data-due]')
 static priorityChoice = Todo.addTask_dialog.querySelector('[data-priority-choice]')
 static labelChoice = Todo.addTask_dialog.querySelector('[data-label-choice]')
 
 edit_stageOne() {
  Todo.description.value = this.content
  Todo.due.value = this.date
  Todo.priorityChoice.value = this.priority
  Todo.labelChoice.value = this.label
 }
 
 edit_stageTwo(appearance) {
  this.content = Todo.description.value 
  this.date = Todo.due.value
  this.priority = Todo.priorityChoice.value 
  this.label = Todo.labelChoice.value
  
  appearance.querySelector('.todo_content').innerHTML = this.content
  appearance.querySelector('.todo_date').innerHTML = this.date
  Lay_out.priority_event(appearance.querySelector('.todo_priority'), this.priority)
  
  if(this.label === 'Not available')  {
   appearance.querySelector('.todo_label').innerHTML = ''
  } else {
   appearance.querySelector('.todo_label').innerHTML = this.label 
  }
 }
 
 todo_delete() {
  
 }
 
 static todo_stateContainers() {
  spanComplete.innerHTML = `${Todo.completed_count}`
  spanPending.innerHTML = `${Todo.pending_count}`
  spanTrash.innerHTML = `${Todo.trash_count}`
 }

}

const Lay_out = {
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

 layout(parent) {
  const icons = this.data_base
  const Dom = document.createDocumentFragment()

  const container = document.createElement('div')
  container.classList.add(...this.container_classNAme)

  const button1 = document.createElement('button')
  button1.classList.add(...this.status_classNAme)
  button1.innerHTML = `${icons.check_false}`

  const content = document.createElement('div')
  content.classList.add(...this.content_classNAme)
  content.innerHTML = this.description

  const button2 = document.createElement('button')
  button2.classList.add(...this.menu_classNAme)
  button2.innerHTML = `${icons.menu_false}`
  button2.setAttribute('data-toggle-name', '')
  //data-toggle-name="pops_active" 
  //data-target="priority_list"

  const foot = document.createElement('div')
  foot.classList.add(...this.foot_classNAme)

  const priority = document.createElement('div')
  priority.classList.add(...this.priority_classNAme)
  this.priority_event(priority, this.priority)

  const date = document.createElement('div')
  date.classList.add(...this.date_classNAme)
  date.innerHTML = this.date

  const label = document.createElement('div')
  label.classList.add(...this.label_classNAme)
  label.innerHTML = this.label

  const menu_popup = document.createElement('div')
  menu_popup.classList.add(...this.menuPopup)

  const detail = document.createElement('button')
  detail.setAttribute('data-detail', 'button')
  detail.classList.add(...this.menuPop_btn)
  detail.innerHTML = `${icons.detail}<span> Detail </span>`

  const del = document.createElement('button')
  del.setAttribute('data-delete', 'button')
  del.classList.add(...this.menuPop_btn)
  del.innerHTML = `${icons.delete} <span> Delete </span>`

  const edit = document.createElement('button')
  edit.setAttribute('data-edit', 'button')
  edit.setAttribute('data-target','addTask_dialog')
  edit.setAttribute('data-toggle-name','taskWindow_active')
  edit.classList.add(...this.menuPop_btn)
  edit.innerHTML = `${icons.edit} <span> Edit </span>`

  menu_popup.appendChild(detail)
  menu_popup.appendChild(del)
  menu_popup.appendChild(edit)

  foot.appendChild(priority)
  foot.appendChild(date)
  foot.appendChild(label)
  foot.appendChild(menu_popup)

  Dom.appendChild(button1)
  Dom.appendChild(content)
  Dom.appendChild(button2)
  Dom.appendChild(foot)

  container.appendChild(Dom)
  parent.appendChild(container)

  this.todo([button1, button2], menu_popup, container)
 },

 todo(button_Arr, menu_popup, container) {
  let priority = this.priority === '' ? 'None' : this.priority
  let label = this.label === '' ? 'Not available' : this.label
  
  todoCount+=1
  let _todo = new Todo(this.description, this.date, priority, label, button_Arr[0], button_Arr[1], menu_popup, this.duration, container, todoCount)
  let check_arr = [this.data_base.check_false, this.data_base.check_true]

  _todo.Button1(check_arr)
  _todo.Button2()
 },

 priority_event(element, priority) {
  const arr = ['high_color', 'mid_color', 'low_color', 'none_color']
  
  arr.forEach( member => {
   element.classList.remove(member)
  })
  
  switch (priority) {
   case 'High':
    element.classList.add('high_color')
    element.innerHTML = `${this.data_base.high}`
    break;
   case 'Medium':
    element.classList.add('mid_color')
    element.innerHTML = `${this.data_base.medium}`
    break;
   case 'Low':
    element.classList.add('low_color')
    element.innerHTML = `${this.data_base.low}`
    break;
   default:
    element.classList.add('none_color')
    element.innerHTML = `${this.data_base.none}`
  }
 }
}

export default Lay_out
port()
