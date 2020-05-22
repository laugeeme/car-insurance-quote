/* eslint-disable no-console */
'use strict';

//insurance constructor
function Insurance(model, year, type) {
  this.model = model;
  this.year = year;
  this.type = type;
}

//interfaz
function Interface() {}




//listneners
const form = document.getElementById('cotizar-seguro');
form.addEventListener('submit', function (e) {
  e.preventDefault();

  //read selected model
  const model = document.getElementById('marca');
  const modelSelected = model.options[model.selectedIndex].value;

  console.log(modelSelected);

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
