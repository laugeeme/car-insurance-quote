/* eslint-disable no-console */
'use strict';

/* function Insurance() {} */

//add options in select input
const max = new Date().getFullYear(),
  min = max - 20;

const selectYears = document.getElementById('anio');
for (let i = max; i > min; i--) {
  let option = document.createElement('option');
  option.value = i;
  option.innerHTML =i;
  selectYears.appendChild(option);
}
