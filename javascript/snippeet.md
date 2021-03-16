# Domをつくるクラス
```js
 class Element {
    constructor(text, id, tagName) {
      this.name = text;
      this.elm = Element.create(text, id, tagName);
    }

    static create(text, id, tagName) {
      const elm = document.createElement(tagName);
      elm.textContent = text;
      if (id) {
        elm.setAttribute("id", id);
      }
      return elm;
    }

    append(place) {
      place.appendChild(this.elm);
    }
  }
```