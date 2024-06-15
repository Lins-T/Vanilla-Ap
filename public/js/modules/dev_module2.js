export function arrCheck(array, className, identity, index) {
 let bool = array.some(member => member.classList.contains(`${className}`))

 if (bool) {
  array.forEach(member => {
   member.classList.remove(`${className}`)
   member.addEventListener('click', btn => btn.target.classList.add(`${className}`)
   )
  })
 }
}

export function showToggle(purpose, className, elementTarget, unwantedClass) {

 if (purpose === 'add') {
  document.querySelector(`.${elementTarget}`).classList.toggle(className)
 } else if (purpose === 'toggle') {
  document.querySelector(`.${elementTarget}`).classList.toggle(className)
 }
 else {
  document.querySelector(`.${elementTarget}`).classList.remove(unwantedClass)
 }
}

function childClear(victim, target) {
 document.querySelector(`.${target}`).style = `display: none`;
}


export function intoView(identity, elementIndex, elementArray, buttonArray, elementDisplay) {
 let index = elementIndex;

 buttonArray[0].addEventListener('click', btn => {
  arrCheck(elementArray, 'active-time')

  if (index > 0) {
   elementArray[index - 1].classList.add('active-time')
   elementArray[index - 1].scrollIntoView({ behavior: 'smooth' })

   if (identity === 23) {
    elementDisplay[1].innerHTML = elementArray[index - 1].dataset.val
    elementDisplay[3].innerHTML = elementArray[index - 1].dataset.monthYear
    arrCheck(Array.from(elementArray[index].children), 'active-dates')

   } else {
    elementDisplay[0].value = elementArray[index - 1].dataset.val;
   }
   index = elementArray.indexOf(elementArray[index - 1])

  }
 })

 buttonArray[1].addEventListener('click', btn => {
  arrCheck(elementArray, 'active-time')

  if (index < elementArray.length - 1) {
   elementArray[index + 1].classList.add('active-time')
   elementArray[index + 1].scrollIntoView({ behavior: 'smooth' })

   if (identity === 23) {
    elementDisplay[1].innerHTML = elementArray[index + 1].dataset.val
    elementDisplay[3].innerHTML = elementArray[index + 1].dataset.monthYear
    arrCheck(Array.from(elementArray[index].children), 'active-dates')

   } else {
    elementDisplay[0].value = elementArray[index + 1].dataset.val;
   }
   index = elementArray.indexOf(elementArray[index + 1])
  }
 })
}

export function timeArray_clear(array, className, identity, index, addOn) {
 let bool = array.some(member => member.classList.contains(`${className}`))

 if (bool) {
  array.forEach(member => {
   member.classList.remove(`${className}`)

   if (identity === 'hour_reset' && member === array[index]) {
    member.classList.add(`${className}`)
   } else if (identity === 'minute_reset' && member === array[index]) {
    member.classList.add(`${className}`)
   } else if (identity === 23 && member === array[index]) {
    member.classList.add(`${className}`)
    member.scrollIntoView({ behavior: 'smooth' })
    const now = moment();
    document.querySelector('.setMonth_item').innerHTML = now.format('MMM')

   } else if (identity === 1) {
    array[0].classList.add(`${className}`)
    array[0].scrollIntoView({ behavior: 'smooth' })

    if (className === 'active_calender-window') {
     addOn[index].scrollIntoView({ behavior: 'smooth' })
    }
   }
  })
 }
}

export function individualDisplay(array, display) {
 array.forEach(member => {
  member.addEventListener('click', btn => {
   display.value = btn.target.textContent.trim()
  })
 })
}
