'use strict';
//const moment = require('moment'); 
const now = moment();
document.querySelector('.setMonth_item').innerHTML = now.format('MMM')
import { arrCheck as thu ,intoView} from './dev_module2.js'
import { calenderMonths } from './calender_picker-main.js';

let meridean = 'am';

export default function settingTime(hour) {
 hour = Number.parseInt(hour, 10);
 if (meridean === 'pm') {
  hour += 12;
 }

 let hourValue = hour;
 return hourValue
}

let hourInput = document.querySelector('#hour_input');
let minuteInput = document.querySelector('#minute_input');

const hourArray = [];
const minuteArray = [];

const hourIndex = 9;
const minuteIndex = 0;

let ctrlHour;
let ctrlMinute;

let array_1, array_2, array_3, array_4, array_5;

export function TimeUtilities(htmlDocument = document, hourOption, minuteOption) {
 let hour = NaN
 let minute = NaN

 for (let h = 0; h < 12; h++) {
  now.hour(h)
  let li = htmlDocument.createElement('li');
  li.classList.add('h_opt', 'd-opts','disp_rf');
  //li.setAttribute('data-time', now.format('HH'))
  li.setAttribute('data-val', now.format('HH'))
  li.innerHTML = `${now.format('HH')}`;

  if (h === 9) {
   li.classList.add('active-time')
  };
  hourArray.push(li);
 }

 for (let m = 0; m < 60; m++) {
  now.minute(m);
  let li = htmlDocument.createElement('li');
  li.classList.add('m_opt', 'd-opts', 'disp_rf');
  //li.setAttribute('data-time', now.format('mm'))
  li.setAttribute('data-val', now.format('mm'))
  li.innerHTML = `${now.format('mm')}`;

  if (m === 0) {
   li.classList.add('active-time')
  }
  minuteArray.push(li)
 }


 hourArray.forEach(hh => {
  hourOption.appendChild(hh)
  hh.addEventListener('click', btn => {
   hour = Number.parseInt(btn.target.textContent.trim(), 10)
   thu(hourArray, 'active-time')
   btn.target.classList.add('active-time')
   
   check(btn.target, hourArray, ctrlHour, hourInput)
   hourInput.value = btn.target.dataset.val;
  })
 })

 minuteArray.forEach(mm => {
  minuteOption.appendChild(mm)
  mm.addEventListener('click', btn => {
   minute = Number.parseInt(btn.target.textContent.trim(), 10)
   thu(minuteArray, 'active-time')
   btn.target.classList.add('active-time')
   
   check(btn.target, minuteArray, ctrlMinute, minuteInput)
   minuteInput.value = btn.target.dataset.val;
  })
 })

 timeControls.fxns.call(timeControls)
}

const calenderEvents = {
 calenderNav: Array.from(document.querySelectorAll('.calender_nav-item')),
 merideans: Array.from(document.querySelectorAll('.meridean')),
 calenderWindow: Array.from(document.querySelectorAll('.calender-window')),
 variations: Array.from(document.querySelectorAll('.variation')),

 fxn: function () {
  const merideans = this.merideans;
  
  merideans.forEach(a => {
   a.addEventListener('click', btn => {
    if (!btn.target.classList.contains('active-meridean')) {
     thu(merideans, 'active-meridean')
     
     btn.target.classList.add('active-meridean')
     meridean = btn.target.textContent.trim();
     settingTime(hourInput.value)
    }
   })
  })

  const calenderNav = this.calenderNav;
  const calenderWindow = this.calenderWindow;
  const variations = this.variations;
  
  array_3 = [calenderNav, 'active_calender-window', calenderWindow]
  array_4 = [variations,'active-variation']
  array_5 = [this.merideans, 'active-meridean']
  
  calenderNav.forEach(a => {
   a.addEventListener('click', btn => {
    if (!btn.target.classList.contains('active-window')) {
     thu(calenderNav, 'active_calender-window')
     
     calenderMonths()
     btn.target.classList.add('active_calender-window')
     calenderWindow[calenderNav.indexOf(a)].scrollIntoView({ behavior: 'smooth' })
     
     thu(variations, 'active-variation')
     variations[calenderNav.indexOf(a)].classList.add('active-variation');
     
    }
   })
  })
 }
}

calenderEvents.fxn.call(calenderEvents)

const timeControls = {
 controlHour: ctrlHour = Array.from(document.querySelectorAll('.control_hour')),
 controlMinute: ctrlMinute = Array.from(document.querySelectorAll('.control_minute')),


  fxns: function () {
  const controlHour = this.controlHour;
  const controlMinute = this.controlMinute;
  
//intoView('hourControls',hourIndex, hourArray, controlHour , [hourInput])
//intoView('minuteControls',minuteIndex, minuteArray,controlMinute , [minuteInput])
 array_1 = [hourIndex, hourArray, controlHour , [hourInput] ]
 array_2 = [ minuteIndex, minuteArray,controlMinute , [minuteInput] ]
 }

}

function check(list, listArr, ctrlArr, timeDisp) {
   let index = listArr.indexOf(list) 
   intoView('TimeUtils-click',index,listArr,ctrlArr,[timeDisp])
}

export function timeArrray() {
	return [array_1, array_2, array_3, array_4, array_5]
}
