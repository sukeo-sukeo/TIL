'use strict'
const INPUT_BOX = document.querySelector('#cauntry_input_box')
const SUB_REGION = document.querySelector('#sub_region')
const DATA_WRAPPER = document.querySelector('#cauntry_data_wrapper')
const BTNS = document.querySelectorAll('button')
const CAUNTRY_COUNT = document.querySelector('#cauntry_count')

const baseUrl = "https://restcountries.eu/rest/v2/";
// const baseUrl = "https://restcountries.eu/rest/v2/subregion/";
// const baseUrl_all = "https://restcountries.eu/rest/v2/all";
// const baseUrl_region = "https://restcountries.eu/rest/v2/region/";
// const baseUrl_cauntryName = "https://restcountries.eu/rest/v2/name/";

(() => {
  fetch(baseUrl + 'all')
    .then((res) => res.json())
    .then((data) => {
      const dict = new Map();
      data.forEach((e) => {
        if (dict.has(e.subregion)) {
          const x = dict.get(e.subregion);
          dict.set(e.subregion, parseInt(x + 1));
        } else {
          dict.set(e.subregion, 1);
        }
      });
      dict.forEach((v, key) => {
        // createTag('option', ['value', key], 'val', SUB_REGION)
        createTag('option', ['value', key], key + ' : ' + v + 'カ国', SUB_REGION)
      });
    });
})();

SUB_REGION.addEventListener('change', event => {
  console.log(event.target.value);
   while (DATA_WRAPPER.firstChild) {
     DATA_WRAPPER.removeChild(DATA_WRAPPER.firstChild);
   }
  apiAccess(baseUrl + "subregion/" + event.target.value);
})

BTNS.forEach(btn => {
  btn.addEventListener('click', e => {
    while (DATA_WRAPPER.firstChild) {
      DATA_WRAPPER.removeChild(DATA_WRAPPER.firstChild);
    }
    console.log(e.target.id)
    switch (e.target.id) {
      case 'cauntry_name':
        {
          apiAccess(baseUrl + 'name/' + INPUT_BOX.value);
          break;
        }
        
      case 'all_cauntry':
        {
          apiAccess(baseUrl + 'all')
          break;
        }
    }
  })
})

const apiAccess = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      CAUNTRY_COUNT.textContent = `${data.length}カ国が見つかりました！`
      console.log(data)
      data.forEach(el => {
        createTag("img", [["src", el.flag], ['class', "flag"]], false, DATA_WRAPPER);
  
        createTag('p', false, `国名: ${el.name}`, DATA_WRAPPER)
        createTag('p', false, `人口: ${el.population}`, DATA_WRAPPER);
        createTag('p', false, `首都: ${el.capital}`, DATA_WRAPPER);
  
      })
    })
}


//createTag('p', ['id', 'user_name' ], 'username: ', data_wrapper) return <p id="user_name">username: </p>
//attrs, contentが不要の時はfalseを引数に入れてください
const createTag = (elementName, attrs, content, parentNode) => {
  const el = document.createElement(elementName)

  if (attrs !== false) {
    if (typeof attrs !== 'object' || attrs.length % 2 === Number(1)) {
      console.error(
        "第２引数は配列、ペアでお願いします[attribute, attributeName]\n属性やテキストが必要ないときは'false'を入れてください"
      );
      return;
    }

    if (typeof attrs[0] === 'object') {
      attrs.forEach(attr => {
        el.setAttribute(attr[0], attr[1])
      })
    } else {
      el.setAttribute(attrs[0], attrs[1])
    }
  }

  if (content !== false) el.textContent = content

  if (parentNode) parentNode.appendChild(el)

  return el
}

