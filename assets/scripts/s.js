const cTel = document.querySelectorAll('input[type="tel"]')
Array.from(cTel).forEach((tel) => {
 IMask(
  tel,
  {mask: "+{7}(000)000-00-00"}
 )
});

/* < сравнение */
interact('#header__comparison picture').resizable({
 edges: {
  top: false,
  left: false,
  bottom: false,
  right: true
 },
 listeners: {
  move: function (event) {
   let { x, y } = event.target.dataset

   x = (parseFloat(x) || 0) + event.deltaRect.left
   y = (parseFloat(y) || 0) + event.deltaRect.top

   Object.assign(event.target.style, {
    width: `${event.rect.width}px`,
    height: `${event.rect.height}px`,
    transform: `translate(${x}px, ${y}px)`
   })

   Object.assign(event.target.dataset, { x, y })
  }
 }
})
/* > сравнение */

/* < form */
{
 const form = document.querySelector('#footer__form')

 //< autofill
 {
  if(window.location.search.indexOf('test') > -1){
   form.querySelector('#footer__form__name').value = 'Проверка #' + new Date()
   form.querySelector('#footer__form__tel').value = '+76543210000'
   form.querySelector('#footer__form__region').value = 'Мск'
   form.querySelector('#footer__form__city').value = 'Мск'
   form.querySelector('#footer__form__address').value = 'Кремль'
   form.querySelector('#footer__form__building_number').value = '1'
   form.querySelector('#footer__form__select__building_type').value = 'Брёвна'
   form.querySelector('#footer__form__select__apartment_condition').value = 'Шик'
   form.querySelector('#footer__form__floors').value = '1'
   form.querySelector('#footer__form__floor').value = '1'
   form.querySelector('#footer__form__rooms').value = '9'
   form.querySelector('#footer__form__total_area').value = '100'
   form.querySelector('#footer__form__kitchen_area').value = '10'
  }
 }
 //> autofill

 const processingCheckbox = form.querySelector('#footer__form__processing span')
 const button = form.querySelector('button')
 const verification = () => {
  let error = 0;

  (
   !processingCheckbox.classList.contains('active')
   || (form.querySelectorAll('.errors').length > 0)
  ) && error++

  if(error > 0){
   button.setAttribute('disabled', 'disabled')
  } else{
   button.removeAttribute('disabled')
  }
 }

 const cLabels = form.querySelectorAll('label')
 Array.from(cLabels).forEach((label) => {
  label.addEventListener('click', () => {
   label.classList.add('active')
  });
  (window.location.search.indexOf('test') > -1) && label.querySelector('input').click() //Нужно для ?test
  label.querySelector('input') && label.querySelector('input').addEventListener('blur', (e) => {
   if(e.target.value.length === 0){
    label.classList.remove('active')
   }
  })

  label.querySelector('input').addEventListener('focus', () => {
   label.classList.add('focus')
  })
  label.querySelector('input').addEventListener('blur', (e) => {
   label.classList.remove('focus')

   if(e.target.value.length > 0){
    label.classList.remove('error')
   } else{
    label.classList.add('error')
   }

   verification()
  })
 })

 //< select's
 const createDropDownList = (t, a) => {
  const div = document.createElement('div')
  a.forEach((v) => {
   const span = document.createElement('span')
   span.textContent = v
   span.addEventListener('click', () => {
    t.parentElement.querySelector('input').value = v
   })
   div.append(span)
  })
  t.append(div)

  t.parentElement.addEventListener('mouseenter', () => {
   t.classList.add('active')
  })
  t.parentElement.addEventListener('mouseleave', () => {
   t.classList.remove('active')
  })
 }

 const aBuildingTypes = [
  'Панельный',
  'Блочный',
  'Кирпичный',
  'Монолитный'
 ]
 createDropDownList(form.querySelector('#footer__form__output__building_type'), aBuildingTypes)

 const aApartmentCondition = [
  'Качественный ремонт',
  'Среднее состояние',
  'Неудовлетворительное состояние',
  'Отделка от застройщика',
  'Без отделки'
 ]
 createDropDownList(form.querySelector('#footer__form__output__apartment_condition'), aApartmentCondition)
 //> select's

 //< necessary symbols
 const cNumbersInputs = form.querySelectorAll('.numbersInputs')
 Array.from(cNumbersInputs).forEach((numberInput) => {
  numberInput.addEventListener('input', (e) => {
   e.target.value = e.target.value.replaceAll(/\D/ig, '')
  })
 })
 //> necessary symbols

 processingCheckbox.addEventListener('click', (e) => {
  processingCheckbox.classList.toggle('active')
  verification()
 })

}
/* > form */