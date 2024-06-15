//import { arrCheck as thu, intoView } from './dev_module2.js'
/*
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

const monthSwitch = Array.from(document.querySelectorAll('.month_switch'));
const ddd = document.querySelector('#ddd')
const DDD = document.querySelector('#DDD')

const mmm = document.querySelector('#MMM')
const mmm2 = document.querySelector('.setMonth')
const mm2Content = document.querySelector('.setMonth_item');

const YYY1 = document.querySelector('#YYY')
const YYY2 = document.querySelector('.setYear')

let arr = [mmm, mm2Content, YYY1, YYY2]

let index = currentYear.indexOf(activeMonth)
intoView(23, index, currentYear, monthSwitch, arr)

currentYear.forEach(month => {
 let monthChildren = Array.from(month.children);

 monthChildren.forEach(date => {
  date.addEventListener('click', btn => {

   //  thu(monthChildren, 'active-dates')
   thu(monthDates, 'active-dates')
   date.classList.add('active-dates')
   now.date(btn.target.textContent.trim())
   now.month(month.dataset.val)
   now.year(month.dataset.monthYear)

   ddd.innerHTML = ` ${now.format('ddd')} `
   DDD.value = now.date()
   mmm.value = ` ${now.format('MMM')} `;
   mm2Content.innerHTML = ` ${now.format('MMM')} `;

   YYY1.value = now.year();
   YYY2.innerHTML = now.year();
  })
 })
})

*/