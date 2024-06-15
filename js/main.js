//import theme from './modules/task_layout.js';
import calender_pick, { inputsClear, setDateTime, arrCargo } from './modules/calender_picker-main.js';
import { arrCheck as thu, showToggle, intoView, timeArray_clear } from './modules/dev_module2.js';
import { timeArrray } from './modules/dev_module1.js';
//theme()
let addT_window = false;

document.querySelector('body').addEventListener('click', btn => {
 if (btn.target.classList.contains('menuHam')) {
  showToggle('toggle', btn.target.dataset.toggleName, btn.target.dataset.target)
 }

 if (btn.target.classList.contains('add-task')) {
  showToggle('add', btn.target.dataset.toggleName, btn.target.dataset.target, 'taskWindow_unactive')
  btn.target.disabled = true;
   //addTask_windowClear()
   // inputsClear()
   //resetFxn()
 }

})

function _activeTime() {
 let activeTime = Array.from(document.querySelectorAll('.active-time'));
 //activeTime[0].scrollIntoView({ behavior: 'smooth' })
 //activeTime[1].scrollIntoView({ behavior: 'smooth' })
 activeTime[0].parentElement.scrollBy(9 * 30, 0)
 activeTime[1].parentElement.scrollBy(-1000, 0)
 console.log(activeTime)
}

let numTimes = 0;
let taskINdex = 0;
let clr = false
document.querySelector('.addTask_window').addEventListener('click', btn => {
 if (btn.target.id === 'due') {
  calender_pick()
  numTimes += 1

  if (numTimes === 1) {
   resetFxn()
   _activeTime()
  } else if (numTimes >= 1) {
   resetFxn.disabled
   _activeTime()
  }

  if (clr) {
   resetFxn()
   clr = false
  }
 }

 if (btn.target.classList.contains('priority')) {
  showToggle('toggle', btn.target.dataset.toggleName, btn.target.dataset.target)
 }

 if (btn.target.classList.contains('label')) {
  showToggle('toggle', btn.target.dataset.toggleName, btn.target.dataset.target)
 }

 if (btn.target.classList.contains('cancel')) {
  showToggle('remove', btn.target.dataset.toggleName, btn.target.dataset.target, 'taskWindow_active')
  document.querySelector(`.${btn.target.dataset.ally}`).disabled = false;
  //addTask_windowClear()
  inputsClear()
  resetFxn()
 }

 if (btn.target.classList.contains('addTask')) {
  task_Instance(taskINdex)
  taskINdex += 1;
 }
})

const pickerFoot = document.querySelector('.dt_foot');
pickerFoot.addEventListener('click', btn => {
 if (btn.target.classList.contains('set') || btn.target.classList.contains('calender_cancel')) {
  showToggle('remove', btn.target.dataset.toggleName, btn.target.dataset.target, 'calender_picker-acive')
 }

 if (btn.target.classList.contains('clear')) {
  // setTimeout(function () {
  showToggle('remove', btn.target.dataset.toggleName, btn.target.dataset.target, 'calender_picker-acive')
  //  }, 500);
  clr = true;
  inputsClear()
 }
 if (btn.target.classList.contains('set')) {
  setDateTime()

 }
})

const calenderWindow = document.querySelector('.calender_window');
function resetFxn() {
 intoView('hour_reset', timeArrray()[0][0], timeArrray()[0][1], timeArrray()[0][2], timeArrray()[0][3])
 timeArray_clear(timeArrray()[0][1], 'active-time', 'hour_reset', timeArrray()[0][0])

 intoView('minute_reset', timeArrray()[1][0], timeArrray()[1][1], timeArrray()[1][2], timeArrray()[1][3])
 timeArray_clear(timeArrray()[1][1], 'active-time', 'minute_reset', timeArrray()[1][0])

 intoView(23, arrCargo()[0], arrCargo()[1], arrCargo()[2], arrCargo()[3])
 timeArray_clear(arrCargo()[1], 'active-time', 23, arrCargo()[0])

 timeArray_clear(timeArrray()[2][0], timeArrray()[2][1], 1, 0, timeArrray()[2][2])
 timeArray_clear(timeArrray()[3][0], timeArrray()[3][1], 1, 0)
 timeArray_clear(timeArrray()[4][0], timeArrray()[4][1], 1, 0)
 //An Alternative for the time window to scroll intoview
 //500 is just a guess no.
 //calenderWindow.scrollTo(-500, 0)
}

let instances = [];
const description = document.querySelector('.description'),
 dueDate = document.querySelector('#due'),
 _prChoice = document.querySelector('.priority_choice'),
 _llChoice = document.querySelector('.label_choice');
let descriptionValue = description.value;

function addTask_windowClear() {
 description.value = ''
 dueDate.value = ''
 _prChoice.value = ''
 _llChoice.value = ''
}





class task {
 constructor(content, date, priority, label) {
  this.content = content;
  this.priority = priority;
  this.label = label;
  this.date = date;
 }
 edit(button) {
  //button.addEventListener('click', ()=> {})
  alert(this.content)
 }
}
description.addEventListener('keyup', () => {
 descriptionValue = description.value;
})

function task_Instance(index) {
 let store = [descriptionValue, dueDate.value, _prChoice.value, _llChoice.value]

 let tsk = new task(...store)
 instances.push(tsk)
 instances[index].edit()
}
