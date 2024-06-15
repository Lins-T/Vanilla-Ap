import settingTime, { TimeUtilities as timeUtils } from './dev_module1.js';
import { arrCheck as thu, intoView, individualDisplay } from './dev_module2.js'

async function fetch_JSN() {
 let response = await fetch('../database.json')
 let dataBase = await response.json()
 labels(dataBase)
}
fetch_JSN()

function labels(dataBase) {
 'use strict';
 let priorityClass_list = ['priority_item', 'all_click', 'pops_item', 'padd']
 let labelClass_list = ['label_item', 'all_click', 'pops_item', 'padd']
 const priorityList = [],
  _prioityDisplay = document.querySelector('.priority_choice');
 const labelList = [],
  _labelDisplay = document.querySelector('.label_choice')


 for (let key in dataBase) {
  if (key === 'labels') {
   distribution(dataBase.labels, labelClass_list, document.querySelector('.label_list'),labelList, _labelDisplay
   )
  } else if (key === 'priority') {
   distribution(dataBase.priority, priorityClass_list, document.querySelector('.priority_list'), priorityList, _prioityDisplay)
  }
 }
}

function distribution(obj, classLists, parent, array, display) {
 for (let key in obj) {
  let li = document.createElement('li')
  li.classList.add(...classLists)
  li.innerHTML = obj[key].Name
  parent.appendChild(li)
  array.push(li)
 }
 individualDisplay(array, display)
}

const dueDay = document.querySelector('#due')
const calenderPicker = document.querySelector('.calender_picker')

const hourInput = document.querySelector('#hour_input')
const minuteInput = document.querySelector('#minute_input')

const ddd = document.querySelector('#ddd')
const DDD = document.querySelector('#DDD')
const mmm = document.querySelector('#MMM')
const YYY1 = document.querySelector('#YYY')


const hourOtion = document.querySelector('.hour_option')
const minuteOtion = document.querySelector('.minute_option')
timeUtils(undefined, hourOtion, minuteOtion)

export default function calender_pick() {
 calenderPicker.classList.add('calender_picker-acive')
}

export function inputsClear() {
 hourInput.value = '09';
 minuteInput.value = '00';
 YYY1.value = '';
 mmm.value = '';
 DDD.value = '';
 dueDay.value = '';
}

export function setDateTime() {
 const now = moment();
 now.hour(settingTime(hourInput.value));
 now.minute(minuteInput.value);

 now.year(YYY1.value);
 now.month(mmm.dataset.monthIndex);
 now.date(DDD.value);

 if (YYY1.value !== '') {
  dueDay.value = now.format('ddd DD MMM YYYY HH:mm a')
 } else {
  now.year(moment().year())
  now.month(moment().month())
  now.date(moment().date() + 1)
  dueDay.value = now.format('ddd DD MMM YYYY HH:mm a')
 }
}


const now = moment();
const monthDays = document.querySelector('.calenderMonth_days')
const Year = now.year();
const currentYear = [];
let activeMonth;
let monthDates = [];

for (let i = 1; i <= 3; i++) {
 if (i === 1) {
  monthSet(Year)
 } else if (i === 2) {
  monthSet(Year + 1)
 } else if (i === 3) {
  monthSet(Year + 2)
 }
}

function monthSet(year) {
 now.year(year)

 for (let i = 0; i < 12; i++) {
  now.month(i)
  calender(i, year)
 }
}

function calender(month, year) {

 let ul = document.createElement('ul');

 ul.classList.add(now.format('MMM'), 'monthDates', 'dc7_grid')
 ul.setAttribute('data-val', now.format('MMM'))
 ul.setAttribute('data-month-year', year)

 if (year === moment().year()) {
  ul.classList.add('active-year')
 }

 if (now.month() === moment().month() && now.year() === moment().year()) {
  ul.classList.add('active-time');
  activeMonth = ul;
 }
 let last = now.daysInMonth();

 for (let m = 1; m <= last; m++) {
  now.date(m)
  let li = document.createElement('li')
  li.classList.add('dates', 'date_item')
  li.setAttribute('data-day-index', now.format('d'))
  li.innerHTML = `${m}`
  ul.appendChild(li)

  if (m === 1) {
   li.classList.add('one');
   li.style = `grid-area: 1 / 1 / 1 / ${2 + Number.parseInt(li.dataset.dayIndex, 10)}`
  }

  monthDates.push(li)

  if (m === last) {
   currentYear.push(ul)
  }
 }
}

export function calenderMonths() {
 currentYear.forEach(month => {
  monthDays.appendChild(month)
  if (month.classList.contains('active-time')) {
   month.scrollIntoView({ bahavior: 'smooth' })
  }
 })
}

calenderMonths()

const monthSwitch = Array.from(document.querySelectorAll('.month_switch'));

const mmm2 = document.querySelector('.setMonth')
const mm2Content = document.querySelector('.setMonth_item');

const YYY2 = document.querySelector('.setYear')

let arr = [mmm, mm2Content, YYY1, YYY2]

let index = currentYear.indexOf(activeMonth)

//intoView(23, index, currentYear, monthSwitch, arr)

export function arrCargo() {
 let arr_1 = [index, currentYear, monthSwitch, arr]
 return arr_1
}

currentYear.forEach(month => {
 let monthChildren = Array.from(month.children);

 monthChildren.forEach(date => {
  date.addEventListener('click', btn => {

   thu(monthDates, 'active-dates')
   date.classList.add('active-dates')
   now.date(btn.target.textContent.trim())
   now.month(month.dataset.val)
   now.year(month.dataset.monthYear)

   ddd.innerHTML = ` ${now.format('ddd')} `
   DDD.value = now.date()
   mmm.value = ` ${now.format('MMM')} `;
   mmm.dataset.monthIndex = month.dataset.val
   mm2Content.innerHTML = ` ${now.format('MMM')} `;

   YYY1.value = now.year();
   YYY2.innerHTML = now.year();
  })
 })
})