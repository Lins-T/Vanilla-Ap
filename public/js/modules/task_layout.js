import { _jsonFtch, time_userDATA } from './calender_module1.js'
import event_Toggle, { active_SHOWN, pops_clear, label_event } from './dev_module1.js'

async function port() {
 let data = await _jsonFtch()
 Lay_out.data_base = data.todo_icons[0]
}

class Todo {
 static menu = undefined
 static toggle_show = 'toggle_show'
 static bool = false

 constructor(content, date, priority, label, button1, button2, menu_popup, duration) {
  this.content = content;
  this.date = date;
  this.priority = priority;
  this.label = label;
  this.duration = duration

  this.button1 = button1
  this.button2 = button2
  this.menu_popup = menu_popup;

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

  //console.log(time_userDATA.duration)
 }

 check_events(target, bool_arr, counter) {
  const bool_false = bool_arr[0]
  const bool_true = bool_arr[1]

  if (counter % 2 === 0) {
   target.parentElement.classList.add(this.completed)
   target.innerHTML = bool_true
   this.check = true
  } else {
   target.parentElement.classList.remove(this.completed)
   target.innerHTML = bool_false
   this.check = false
  }
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
   //event.stopPropagation()
   event_Toggle('toggle', this.toggle_show, this.menu_popup)
   this.allclick(this.toggle_show, this.menu_popup)
   //pops_clear(this.toggle_show, this.menu_popup)
  }, { capture: true })

  this.menu_popup.addEventListener('click', btn => {
   if (btn.target.hasAttribute('data-detail')) {
    this.details_fxn()
    let arr = [this.status, this.date, this.label, this.priority, this.duration, this.content]
    event_Toggle('modal_S', undefined, Todo.detail_INfo(...arr))
   }

   //if(btn.target.hasAttribute()) {}  
   //if(btn.target.hasAttribute()) {}
  })
 }

 allclick(classNAmes, menu) {
  document.addEventListener('click', btn => {
   setTimeout(function () {
    event_Toggle('remove', classNAmes, menu)
   }, 50);
  }, { once: true })
 }

 static detail_INfo(pending, date, label, priority, duration, content) {
  const Body = document.querySelector('body')

  const dialog = document.createElement('dialog')
  const div = document.createElement('div')
  const button = document.createElement('button')
  button.innerHTML = 'Cancel'

  const ul = document.createElement('ul')
  let ul_structure =
   `<li class="title disp_rf padd"> 
    <p class="title">Status</p> 
    <p class="info_content">${pending}</p> 
   </li>
   <li> 
    <p class="title"> Date </p> 
    <p class="info_content">${date}</p> 
   </li>
   <li> 
    <p class="title">Label</p> 
    <p class="info_content">${label}</p> 
   </li>
   <li> 
    <p class="title">Priority</p> 
    <p class="info_content">${priority}</p> 
   </li>
   <li> 
    <p class="title"> Duration </p> 
    <p class="info_content">${duration}</p> 
   </li>`
  ul.innerHTML = ul_structure

  const div1 = document.createElement('div')
  div1.innerHTML = content

  div.appendChild(button)
  dialog.appendChild(div)
  dialog.appendChild(ul)
  dialog.appendChild(div1)

  Body.appendChild(dialog)

  button.addEventListener('click', () => {
   setTimeout(function () {
    event_Toggle('modal_C', undefined, dialog)
   }, 100);
  }, { once: true })

  return dialog
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
  this.priority_event(priority)

  const date = document.createElement('button')
  date.classList.add(...this.date_classNAme)
  date.innerHTML = this.date

  const label = document.createElement('button')
  label.classList.add(...this.label_classNAme)
  label.innerHTML = this.label

  const menu_popup = document.createElement('div')
  menu_popup.classList.add(...this.menuPopup)

  const detail = document.createElement('button')
  detail.setAttribute('data-detail', 'button')
  detail.classList.add(...this.menuPop_btn)
  detail.innerHTML = `${icons.detail}<span> Detail </span>`

  const del = document.createElement('button')
  detail.setAttribute('data-del', 'button')
  del.classList.add(...this.menuPop_btn)
  del.innerHTML = `${icons.delete} <span> Delete </span>`

  const edit = document.createElement('button')
  detail.setAttribute('data-edit', 'button')
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

  this.todo([button1, button2], menu_popup)
 },

 todo(button_Arr, menu_popup) {
  let priority = this.priority === '' ? 'None' : this.priority
  let label = this.label === '' ? 'Not available' : this.label

  let _todo = new Todo(this.description, this.date, priority, label, button_Arr[0], button_Arr[1], menu_popup, this.duration)
  let check_arr = [this.data_base.check_false, this.data_base.check_true]

  _todo.Button1(check_arr)
  _todo.Button2()
 },

 priority_event(element) {
  switch (this.priority) {
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