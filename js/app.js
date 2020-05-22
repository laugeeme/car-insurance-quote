/* eslint-disable no-console */
'use strict';

//insurance constructor
function Insurance(model, year, type) {
  this.model = model;
  this.year = year;
  this.type = type;
}
Insurance.prototype.quoteInsurance = function () {
  /*
    1 = americano 1.15
    2 = asiatico 1.05
    3 = europeo 1.35

    */
  let quantity;
  const base = 2000;

  switch (this.model) {
    case '1':
      quantity = base * 1.15;
      break;
    case '2':
      quantity = base * 1.05;
      break;
    case '3':
      quantity = base * 1.35;
      break;
  }


  const difference = new Date().getFullYear() - this.anio;
  quantity -= ((difference * 3) * quantity) / 100;



};

//interfaz
function Interface() {}

//msj printed in the html
Interface.prototype.showError = function (msj, type) {
  const div = document.createElement('div');

  if (type === 'error') {
    div.classList.add('msj', 'error');
  } else {
    div.classList('msj', 'correcto');
  }
  div.innerHTML = `${msj}`;
  form.insertBefore(div, document.querySelector('.form-group'));

  setTimeout(function () {
    document.querySelector('.msj').remove();
  }, 3000);
};

//listeners
const form = document.getElementById('cotizar-seguro');
form.addEventListener('submit', function (e) {
  e.preventDefault();

  //read selected model
  const model = document.getElementById('marca');
  const modelSelected = model.options[model.selectedIndex].value;

  //read selected year
  const year = document.getElementById('anio');
  const yearSelected = year.options[year.selectedIndex].value;

  //read radio button
  const typeSelected = document.querySelector('input[name="tipo"]:checked')
    .value;

  //create interface instance
  const interfaceRes = new Interface();

  //check if inputs are empty
  if (modelSelected === '' || yearSelected === '' || typeSelected === '') {
    interfaceRes.showError('Faltan datos, revisar el formulario', 'error');
  } else {
    //Insurance instance
    const insurance = new Insurance(modelSelected, yearSelected, typeSelected);
    //Quote insurance
    const quantity = insurance.quoteInsurance(insurance);
  }
});

//add options in select input
const max = new Date().getFullYear(),
  min = max - 20;

const selectYears = document.getElementById('anio');
for (let i = max; i > min; i--) {
  let option = document.createElement('option');
  option.value = i;
  option.innerHTML = i;
  selectYears.appendChild(option);
}
