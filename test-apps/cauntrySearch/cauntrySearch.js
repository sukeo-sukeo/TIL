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
      data.forEach(el => {
        console.log(el)

        create_hasAttributeTag(
          'img',
          ['src', 'id'],
          [el.flag, 'flag'],
          data_wrapper)

        create_textContent('p', `国名: ${el.name}`, data_wrapper)
        create_textContent('p', `人口: ${el.population}`, data_wrapper);
        create_textContent('p', `首都: ${el.capital}`, data_wrapper);
        
      });
    }) 
})

const create_hasAttributeTag = (elementName, attr, attrName, parentNode) => {
  const el = document.createElement(elementName)
  console.log(typeof attr);
  if (typeof attr === 'object' || typeof attrName === 'object') {
    attr.forEach((v, i) => {
      el.setAttribute(v, attrName[i])
    })
  } else {
    el.setAttribute(attr, attrName)
  }
  parentNode.appendChild(el);
}

const create_textContent = (elementName, content, parentNode) => {
  const el = document.createElement(elementName);
  el.textContent = content
  parentNode.appendChild(el);
}


