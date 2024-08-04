import event_Toggle, { active_SHOWN, pops_clear, label_event } from './dev_module1.js'
import popOver_clear, { moment, clicks } from '../main.js'

const now = moment()

async function _jsonFtch() {
 let response = await fetch('../database.json')
 let data = await response.json()

 await duePicker.retrieve_fxn(data)

 return new Promise((resolve, reject) => {
  setTimeout(function () {
   resolve(data)
  }, 500);
 })
}
export { _jsonFtch }

export let time_userDATA = {
 hour: undefined,
 minute: undefined,
 meridean: 'am',

 date: undefined,
 month: undefined,
 year: 2024,
 dueDate: undefined,
 duration: undefined,
 moment_date: '',

 usrDATA() {
  const setter = moment()

  let hour = Number.parseInt(this.hour.value)
  let minute = Number.parseInt(this.minute.value)

  if (this.meridean === 'pm') {
   hour = Number.parseInt(this.hour.value) + 12
  }

  setter.hour(hour)
  setter.minute(minute)

  if (this.date !== undefined && this.month !== undefined) {
   setter.month(this.month)
   setter.date(this.date)
  } else {
   setter.month(moment().month())
   setter.date(moment().date())
  }
  setter.year(this.year)
  this.moment_date = setter.format('DD MM YYYY')
  // console.log(this.moment_date)

  let from_now = setter.fromNow()
  this.duration = from_now

  let dueDate = setter.format('ddd D MMM YYYY HH:mm a')
  this.dueDate = dueDate
 },

}

export const defaults = {
 nav: [],
 meridean: [],
 main: [],
 day_container: undefined,
 day_containerContent: [],
 year_btn: [],
 month_bool: false,
 month_btn: undefined,
 monthList: undefined,
 time_input: [],
 input_fields: [],
 activeMonth: undefined,

 reset() {
  let arr =
   [
    this.nav,
    this.meridean,
    this.year_btn,
   ]

  arr.forEach(member => {
   active_SHOWN(member, 'current')
   event_Toggle('toggle', 'current', member[0])
  })

  active_SHOWN(duePicker.hourList, hourProperties.def_show)
  active_SHOWN(duePicker.minuteList, minuteProperties.def_show)

  event_Toggle('add', hourProperties.def_show, duePicker.hourList[hourProperties.def])
  event_Toggle('add', minuteProperties.def_show, duePicker.minuteList[minuteProperties.def])

  this.time_input[0].value = '09'
  this.time_input[1].value = '30'

  hourProperties.index = 9
  minuteProperties.index = 30

  this.input_fields.forEach(member => {
   member.value = ''
  })

  this.activeMonth.value = 'Jan'

  this.day_container.innerHTML = '';
  this.day_containerContent.forEach(member => {
   this.day_container.appendChild(member)
  })
  //this.day_containerContent[0].scrollIntoView({ behavior: 'smooth'})

  this.month_btn.disabled = true
  if (this.month_bool) {
   event_Toggle('remove', 'toggle_show', this.monthList)
  }
  this.main[0].scrollIntoView({ behavior: 'smooth' })
 },

 call_def() {
  this.reset()
  setTimeout(function () {
   duePicker.dialog_container.classList.remove('modal')
  }, 400)
 }
}

let hourProperties = {
 def: 9,
 def_show: 'active-time',
 max: 12,
 member_classList: ['h_opts', 'h_opt', 'd-opt', 'disp_rf'],
 index: 9,
}

let minuteProperties = {
 def: 30,
 def_show: 'active-time',
 max: 60,
 member_classList: ['m_opts', 'h_opt', 'd-opt', 'disp_rf'],
 index: 30,
}

const pop1_properties = {
 member_classList: ['priority_item', 'all_click', 'pops_item', 'padd']
}

const pop2_properties = {
 member_classList: ['label_item', 'all_click', 'pops_item', 'padd']
}

export let duePicker = {
 setter: now,
 hourList: [],
 minuteList: [],
 yearArray: [],
 yearArray_active: [],
 days_Arr: [],
 pop_1List: [],
 pop_2List: [],
 num: 'hello',

 async retrieve_fxn(data) {
  this.data = await data;
  await this.createList(data)
  await this.appendingData()

  setTimeout(async function () {
   await duePicker.Time_DOM()
  }, 500);

 },

 createList(data) {
  const now = this.setter
  function step_one(arr, Obj) {
   for (let key in Obj) {
    let li = document.createElement('li')
    li.classList.add(...this.member_classList)
    li.innerHTML = Obj[key].Name
    arr.push(li)
   }
  }

  step_one.call(pop1_properties, this.pop_1List, data.priority)
  step_one.call(pop2_properties, this.pop_2List, data.labels)

  function step_two(arr) {
   const setter = now
   for (let i = 0; i < this.max; i++) {
    setter.minute(i)
    let li = document.createElement('li')
    li.classList.add(...this.member_classList)
    li.setAttribute('data-value', setter.format('mm'))
    li.innerHTML = `${setter.format('mm')}`

    if (i === this.def) {
     li.classList.add(this.def_show)
    }
    arr.push(li)
   }
  }

  step_two.call(hourProperties, this.hourList)
  step_two.call(minuteProperties, this.minuteList)

  function step_three() {
   const setter = now
   let YEAR1 = [], YEAR2 = [], YEAR3 = []
   let store = [YEAR1, YEAR2, YEAR3]

   for (let i = 0; i < 3; i++) {
    let result = moment().year() + i;
    setter.set('year', result)
    yearDetails(setter.year(), store[i])
   }

   defaults.day_containerContent = YEAR1
   duePicker.yearArray_active = YEAR1

   function yearDetails(yr, container) {
    const now = moment()
    let i = 0
    if (yr === now.year()) {
     i = now.month()
    } else {
     i = 0
    }
    for (i; i < 12; i++) {
     setter.year(yr)
     setter.month(i)
     let ul = document.createElement('ul');
     ul.classList.add('months', 'disp_7-grid')
     ul.setAttribute('data-month-mm', setter.format('MMM'))
     ul.setAttribute('data-year-yy', setter.format('YYYY'))

     for (let i = 1; i <= setter.daysInMonth(); i++) {
      setter.date(i)
      let li = document.createElement('li')
      const button = document.createElement('button')
      li.appendChild(button)

      button.classList.add('day', 'disp_grid-Cnt')
      button.setAttribute('data-month-mm', setter.month())
      button.setAttribute('data-year-yy', setter.year())
      button.innerHTML = setter.date()

      if (Number.parseInt(button.dataset.yearYy) === moment().year() && Number.parseInt(button.dataset.monthMm) < moment().month()) {
       button.setAttribute('disabled', 'true')
      }

      if (Number.parseInt(button.dataset.yearYy) === moment().year() && Number.parseInt(button.dataset.monthMm) === moment().month() && setter.date() === moment().date()) {
       button.classList.add('current')
      }

      if (setter.date() === 1) {
       li.classList.add('one')
       let dayIndex = setter.day()
       li.style = `grid-area: 1 / 1 / ${dayIndex + 2} / 2`
      }
      duePicker.days_Arr.push(button)
      ul.appendChild(li)
     }
     container.push(ul)
    }
   }
   return store

  }
  this.yearArray = step_three()
  //this.yearArray_active = step_three()[0]
 },

 popLists: Array.from(document.querySelectorAll('.pops')),

 appendingData() {

  const pops = this.popLists;
  let popArray = [this.pop_1List, this.pop_2List]
  label_event.Event(popArray[1])

  //Appending pops
  for (let i = 0; i < popArray.length; i++) {
   popArray[i].forEach(member => {
    pops[i].appendChild(member)
   })
  }
 },

 dialog_container: document.querySelector('.dialog_time'),

 Time_DOM() {
  const clasNAmes = {
   cover: {
    clasNAmes: ['cover']
   },
   nav: {
    clasNAmes: ['nav', 'disp_rf', 'padd']
   },
   main: {
    clasNAmes: ['main']
   },
   side: {
    clasNAmes: ['side', 'disp_cf', 'padd']
   }
  }
  const Dom = document.createDocumentFragment()
  let cover = document.createElement('section')

  let nav = document.createElement('nav')

  let side = document.createElement('aside')
  let main = document.createElement('main')

  cover.classList.add(...clasNAmes.cover.clasNAmes)
  nav.classList.add(...clasNAmes.nav.clasNAmes)
  side.classList.add(...clasNAmes.side.clasNAmes)
  main.classList.add(...clasNAmes.main.clasNAmes)

  time_chambers.nav_fxn(nav)
  time_chambers.side_fxn(side)
  time_chambers.main_fxn(main)

  let children = [nav, side, main]
  children.forEach(member => cover.appendChild(member))

  cover.appendChild(Dom)
  this.dialog_container.appendChild(cover)
 }
}

const time_chambers = {
 activeName: 'active_nav',

 F_classNAmes: ['Time', 'current'],
 S_classNAmes: ['Time',],

 nav_fxn(parent) {
  let first = document.createElement('div');
  let second = document.createElement('div');

  first.innerHTML = 'Time'
  second.innerHTML = 'Date'

  first.classList.add(...this.F_classNAmes)
  second.classList.add(...this.S_classNAmes)

  this.navElements = [first, second]

  parent.appendChild(first)
  parent.appendChild(second)

  defaults.nav = [first, second]
 },

 toggle_clasNAme: ['toggle_clasNAme', 'padd'],
 due: document.querySelector('#due'),

 side_fxn(parent) {
  const setting = document.createElement('button'),
   clear = document.createElement('button'),
   cancel = document.createElement('button'),
   months = document.createElement('button');

  setting.innerHTML = `Set`
  clear.innerHTML = `Clear`
  cancel.innerHTML = `Cancel`
  months.innerHTML = `Months`

  let arr = [setting, clear, cancel]

  for (let i = 0; i < arr.length; i++) {
   arr[i].setAttribute('data-side-btn', 'auto')
   arr[i].setAttribute('data-toggle-name', 'modal')
   arr[i].setAttribute('data-target', 'dialog_time')
   clicks.side_btn.push(arr[i])
  }

  clicks.validate()

  setting.classList.add(...this.toggle_clasNAme)
  clear.classList.add(...this.toggle_clasNAme)
  cancel.classList.add(...this.toggle_clasNAme)
  months.classList.add(...this.toggle_clasNAme)

  parent.appendChild(setting)
  parent.appendChild(clear)
  parent.appendChild(cancel)
  parent.appendChild(months)

  months.disabled = true
  defaults.month_btn = months
  this.side_Parent = parent

  side_buttonEvents([months])

  parent.addEventListener('click', btn => {
   if (btn.target === setting) {
    duePicker.dialog_container.classList.toggle('add_on')
    time_userDATA.usrDATA()
    this.due.value = time_userDATA.dueDate
    cargo.bool_arr = true
    clicks.time_bool = true
   }

   if (btn.target === clear) {
    duePicker.dialog_container.classList.toggle('add_on')
    defaults.reset()
    this.due.value = '';

    setTimeout(function () {
     duePicker.dialog_container.classList.remove('add_on', 'modal')
    }, 400)
   }

   if (btn.target === cancel) {
    duePicker.dialog_container.classList.toggle('add_on')
    clicks.time_bool = true
   }
  })
 },

 sect_primaryClasNAmes: ['sect_primary', 'actie_focus'],
 sect_secondaryClasNAmes: ['sect_secondary'],

 main_fxn(parent) {
  let sect_primary = document.createElement('section'),
   sect_secondary = document.createElement('section');

  sect_primary.classList.add(...this.sect_primaryClasNAmes)
  sect_secondary.classList.add(...this.sect_secondaryClasNAmes)

  //Sect Primary
  sect_prim.fxn(sect_primary)
  sect_second.fxn(sect_secondary)

  let first = this.nav_events(this.navElements)
  first([sect_primary, sect_secondary])(this.side_Parent)

  parent.appendChild(sect_primary)
  parent.appendChild(sect_secondary)

  defaults.main = [sect_primary, sect_secondary]
 },

 nav_events: array_one => array_two => side_element => {
  let clasNAmes = 'current'
  array_one.forEach(member => {
   member.addEventListener('click', btn => {
    array_two[array_one.indexOf(member)].scrollIntoView({ behavior: 'smooth' })

    let bool = array_one.some(member => member.classList.contains(clasNAmes))
    if (bool) {
     active_SHOWN(array_one, clasNAmes)
    }
    btn.target.classList.add(clasNAmes)

    if (btn.target === array_one[1]) {
     side_element.lastElementChild.disabled = false
     defaults.month_bool = true
    } else {
     side_element.lastElementChild.disabled = true
    }
   })
  })
 }

}

let sect_prim = {
 field_class: ['time_fields'],
 meridean_am: ['meridean', 'am', 'current'],
 meridean_pm: ['meridean', 'pm'],
 controls_clasNAmes: ['controls'],
 chamber_x: ['chamber', 'disp_rf', 'padd'],
 ul_class: ['Time_digits', 'disp_rf'],
 fields: [],

 fxn(parent) {
  let field1 = document.createElement('input'),
   field2 = document.createElement('input')

  this.fields = [field1, field2];

  field1.value = `09`;
  field2.value = `30`

  let span = document.createElement('span')
  span.innerHTML = ' : ';

  /*
    field1.classList.add(...this.field_class)
    field1.placeholder = '09' 
    field2.classList.add(...this.field_class)
    field1.placeholder = '09' 
    field1.value = `09`;
    field2.value = `30`;
   */
  let fields = [field1, field2]

  fields.forEach(member => {
   defaults.time_input.push(member)
   member.type = 'number'
   member.classList.add(...this.field_class)
   member.placeholder = '00'
  })

  this.field_events('hour', field1)
  this.field_events('minute', field2)

  let meridean_primary = document.createElement('button'),
   meridean_secondary = document.createElement('button')
  defaults.meridean = [meridean_primary, meridean_secondary]

  meridean_primary.innerHTML = `am`
  meridean_secondary.innerHTML = `pm`
  meridean_primary.classList.add(...this.meridean_am)
  meridean_secondary.classList.add(...this.meridean_pm)
  this.meridean_select([meridean_primary, meridean_secondary], 'current')

  let field_chamber = document.createElement('div')
  let hour_chamber = document.createElement('div'),
   minute_chamber = document.createElement('div')

  field_chamber.classList.add(...this.chamber_x)
  hour_chamber.classList.add(...this.chamber_x)
  minute_chamber.classList.add(...this.chamber_x)

  let controls_hour = []
  let controls_minute = []

  for (let i = 0; i < 4; i += 1) {
   const button = document.createElement('button')
   button.classList.add(...this.controls_clasNAmes)

   switch (i) {
    case 0:
     button.innerHTML = `-H`
     controls_hour.push(button)
     break;
    case 1:
     button.innerHTML = `+H`
     controls_hour.push(button)
     break;
    case 2:
     button.innerHTML = `-M`
     controls_minute.push(button)
     break;
    default:
     button.innerHTML = `+M`
     controls_minute.push(button)
   }

  }

  let ul_primary = document.createElement('ul'),
   ul_secondary = document.createElement('ul')

  ul_primary.classList.add(...this.ul_class)
  ul_secondary.classList.add(...this.ul_class)

  field_chamber.appendChild(field1)
  field_chamber.appendChild(span)
  field_chamber.appendChild(field2)
  field_chamber.appendChild(meridean_primary)
  field_chamber.appendChild(meridean_secondary)

  hour_chamber.appendChild(controls_hour[0])
  hour_chamber.appendChild(ul_primary)
  hour_chamber.appendChild(controls_hour[1])
  this.hourList.forEach(member => ul_primary.appendChild(member))


  minute_chamber.appendChild(controls_minute[0])
  minute_chamber.appendChild(ul_secondary)
  minute_chamber.appendChild(controls_minute[1])
  this.minuteList.forEach(member => ul_secondary.appendChild(member))

  parent.appendChild(field_chamber)
  parent.appendChild(hour_chamber)
  parent.appendChild(minute_chamber)

  //this.into_View(this.hourList)
  //this.into_View(this.minuteList)

  this.timeACtive_view.call(hourProperties, controls_hour, this.hourList, hourProperties.def, field1)
  this.timeACtive_view.call(minuteProperties, controls_minute, this.minuteList, minuteProperties.def, field2)

  time_userDATA.hour = field1
  time_userDATA.minute = field2
 },

 field_events(identity, field) {
  field.addEventListener('keyup', input => {
   if (identity === 'hour' && input.target.value[0] > 1) {
    input.target.value = '';
   } else {
    if (Number.parseInt(input.target.value[0]) === 1 && Number.parseInt(input.target.value[1]) > 1) {
     let res = input.target.value.slice(0, 1)
     input.target.value = res
    }
   }

   if (identity === 'minute' && input.target.value[0] > 5) {
    input.target.value = '';
   }

   if (!(input.target.value.length < 2)) {
    let res = input.target.value.slice(0, 2)
    input.target.value = res
   }
  })
 },

 timeACtive_view(controls, array, index_El, display) {
  //let index = index_El
  this.index = index_El
  let active_NAme = 'active-time'

  array.forEach(member => {
   member.addEventListener('click', btn => {
    display.value = btn.target.innerHTML
    this.index = array.indexOf(member)
    active_SHOWN(array, active_NAme)
    btn.target.classList.add(active_NAme)
   })
  })

  controls[0].addEventListener('click', btn => {
   if (this.index > 0) {
    array[this.index].classList.remove(active_NAme)
    array[this.index - 1].classList.add(active_NAme)
    array[this.index - 1].scrollIntoView({ behaviour: 'smooth' })
    display.value = array[this.index - 1].innerHTML
    this.index = array.indexOf(array[this.index - 1])
   }
  })

  controls[1].addEventListener('click', btn => {
   if (this.index < array.length - 1) {
    array[this.index].classList.remove(active_NAme)
    array[this.index + 1].classList.add(active_NAme)
    array[this.index + 1].scrollIntoView({ behaviour: 'smooth' })
    display.value = array[this.index + 1].innerHTML
    this.index = array.indexOf(array[this.index + 1])
   }
  })
 },

 meridean_select(array, clasNAmes) {
  array.forEach(member => {
   member.addEventListener('click', btn => {
    let bool = array.some(member => member.classList.contains(clasNAmes))
    if (bool) {
     active_SHOWN(array, clasNAmes)
    }
    btn.target.classList.add(clasNAmes)
    time_userDATA.meridean = (btn.target.innerHTML)
   })
  })
 },

 into_View(array, identity) {
  let parent = array[0].parentElement
  setTimeout(function () {
   if (identity === 'hour') {
    parent.scrollBy(252, 0)
   } else {
    let parent = array[0].parentElement
    parent.scrollBy(910, 0)
   }
  }, 200);
 },

}

Object.setPrototypeOf(sect_prim, duePicker)

let sect_second = {
 days_container: ['days_container', 'disp_7-grid'],
 day_container: ['day_container'],
 days_clasNAme: ['days', 'disp_grid-Cnt'],
 monthList: undefined,
 year_btn: [],

 fxn(parent) {
  let days_container = document.createElement('ul')
  let day_container = document.createElement('ul')

  days_container.classList.add(...this.days_container)
  day_container.classList.add(...this.day_container)
  defaults.day_container = day_container

  let now = moment()

  for (let i = 0; i < 7; i++) {
   now.day(i)
   let li = document.createElement('li')
   li.classList.add(...this.days_clasNAme)
   li.innerHTML = now.format('ddd')
   days_container.appendChild(li)
  }

  this.yearArray[0].forEach(member => {
   day_container.appendChild(member)
  })

  let monthList = document.createElement('ul')
  monthList.classList.add('monthList', 'disp_rf')
  this.monthList = monthList

  for (let i = 0; i < 12; i++) {
   now.month(i)
   let li = document.createElement('li')
   li.classList.add('month', 'padd', 'disp_grid-Cnt')
   li.innerHTML = now.format('MMM')
   monthList.appendChild(li)
  }

  defaults.monthList = monthList

  let div = document.createElement('div')
  div.classList.add('date_utils')

  let active_month = document.createElement('input')
  active_month.type = 'text'
  active_month.value = duePicker.yearArray[0][0].dataset.monthMm
  active_month.classList.add('date_fields', 'active_month')
  active_month.disabled = true;
  defaults.activeMonth = active_month

  let inputField_array = []
  fields(inputField_array, div)

  function fields(array, parent) {
   let div = document.createElement('div')
   div.classList.add('first_utility')

   for (let i = 0; i < 3; i++) {
    let field = document.createElement('input')
    field.type = 'number'
    field.classList.add('date_fields')

    div.appendChild(field)
    array.push(field)
    defaults.input_fields.push(field)
   }

   parent.appendChild(div)
  }

  div.appendChild(active_month)

  let yrButton_array = []
  year(yrButton_array, div)
  this.year_btn = yrButton_array
  defaults.year_btn = yrButton_array

  function year(array, parent) {
   let div = document.createElement('div')
   div.classList.add('second_utility', 'disp_cf')

   for (let i = 0; i < 3; i++) {
    let year = now.year() + i
    let button = document.createElement('button')
    button.classList.add('year', 'year_btn')
    button.innerHTML = year

    if (year === moment().year()) {
     button.classList.add('current')
    }
    div.appendChild(button)
    array.push(button)
   }

   parent.appendChild(div)
  }

  parent.appendChild(days_container)
  parent.appendChild(day_container)
  parent.appendChild(monthList)
  parent.appendChild(div)

  this.day_events(inputField_array, active_month)

  this.year_btn.forEach(member => {
   member.addEventListener('click', btn => {
    active_SHOWN(this.year_btn, 'current')
    btn.target.classList.add('current')
    day_container.innerHTML = ''
    inputField_array[inputField_array.length - 1].value = btn.target.innerHTML

    duePicker.day_containerArray = this.yearArray[this.year_btn.indexOf(member)]
    duePicker.indexLength = duePicker.day_containerArray.length

    this.yearArray[this.year_btn.indexOf(member)]
     .forEach(member => {
      day_container.appendChild(member)
     })
      this.yearArray[this.year_btn.indexOf(member)][0].scrollIntoView({ behavior: 'smooth' })
      active_month.value = 'Jan'
   })
  })

  duePicker.day_containerArray = duePicker.yearArray[0]
  duePicker.indexLength = duePicker.day_containerArray.length

  const monthList_array = Array.from(this.monthList.children)
  monthList_array.forEach(member => {
   member.addEventListener('click', btn => {
    //event.stopPropagation()
    active_month.value = btn.target.innerHTML
    let index = monthList_array.indexOf(btn.target)
    this.monthList_scroll(index)
    pops_clear('toggle_show', member.parentElement)
   })
  })
 },

 monthList_scroll(index) {
  if (duePicker.indexLength < 12) {
   let val = (index - (duePicker.indexLength + 2))
   duePicker.day_containerArray[val].scrollIntoView({ behavior: 'smooth' })
  } else {
   duePicker.day_containerArray[index].scrollIntoView({ behavior: 'smooth' })
  }
 },

 day_events(array, extra) {
  const setter = now

  this.days_Arr.forEach(member => {
   member.addEventListener('click', btn => {

    let year = Number.parseInt(btn.target.dataset.yearYy)
    let month = Number.parseInt(btn.target.dataset.monthMm)
    let date = Number.parseInt(btn.target.innerHTML)

    array[array.length - 1].value = year
    array[array.length - 2].value = month + 1
    array[array.length - 3].value = date

    time_userDATA.date = date
    time_userDATA.month = month
    time_userDATA.year = year
    //monthList
    setter.month(month)
    extra.value = setter.format('MMM')
   })
  })

  this.year_btn.forEach(member => {
   member.addEventListener('click', btn => {
    active_SHOWN(this.year_btn, 'current')
    btn.target.classList.add('current')
   })
  })

 }
}

Object.setPrototypeOf(sect_second, duePicker)
Object.setPrototypeOf(time_chambers, sect_second)

function side_buttonEvents(array) {
 let month = array[array.length - 1]
 let counter = 1
 month.addEventListener('click', btn => {
  event_Toggle('toggle', 'toggle_show', sect_second.monthList)
 })
}

const cargo = {
 bool_ar: false
}

export default cargo

const noticeBoard = document.querySelector('[data-notice-board]')

export const notice_board = {
 setter: moment(),
 todayDate: noticeBoard.querySelector('[data-date-num]'),
 todayTask_count: noticeBoard.querySelector('[data-curentday-task'),
 today_counter: 0,

 fxn_one(date) {
  this.todayDate.innerHTML =
   `${this.setter.format('DD')} <sub class="month_sub" data-month-name>-${this.setter.format('MMMM')}</sub>`
 },

 fxn_two(date) {
  //console.log(date === moment().format('DD MM YYYY'))
  if (date === moment().format('DD MM YYYY')) {
   this.today_counter++
   this.todayTask_count.innerHTML = `${this.today_counter} task added`
  }
 },

 fxn_three() {
  this.today_counter--
  this.todayTask_count.innerHTML = `${this.today_counter} task added`

  if (this.today_count === 0) {
   this.todayTask_count.innerHTML = `No task added`
  }
 }
}
notice_board.fxn_one()
