'use strict'
const input_box = document.querySelector('#cauntry_input_box')
const data_wrapper = document.querySelector('#cauntry_data_wrapper')
const btn = document.querySelector('button')

const baseUrl = "https://restcountries.eu/rest/v2/name/";


btn.addEventListener('click', e => {
  while (data_wrapper.firstChild) {
    data_wrapper.removeChild(data_wrapper.firstChild);
  }
  fetch(baseUrl + input_box.value)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((el, i) => {
        console.log(el);
        const img = document.createElement("img")
        img.setAttribute(`src`, el.flag);
        img.setAttribute(`id`, 'flag');
        data_wrapper.appendChild(img)
        
        const p = document.createElement('p')
        p.textContent = `国名: ${el.name}`
        data_wrapper.appendChild(p)
        const p1 = document.createElement('p')
        p1.textContent = `人口: ${el.population}`
        data_wrapper.appendChild(p1)
        const p2 = document.createElement('p')
        p2.textContent = `首都: ${el.capital}`
        data_wrapper.appendChild(p2)
        
      });
    }) 
})

