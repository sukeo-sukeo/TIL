# 自分なりに抽象化できた関数を記録しています

## 属性持ちのタグを作成してノードに追加する関数
引数は(要素名、属性、属性名、追加する親ノード)  
属性と属性名は配列で複数渡すことも可能  
> `['id', 'src'],['foo', 'http//hogehoge']`  
> 同じインデックス同士がペアとなります

```js
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
```
***
## テキストタグを作成しノードに追加する関数
引数は(要素名、表示させたいテキスト、追加する親ノード)
```js
const create_textContent = (elementName, content, parentNode) => {
  const el = document.createElement(elementName);
  el.textContent = content
  parentNode.appendChild(el);
}
```
***
## 改良版：より抽象化したHTMLタグを作成する関数
- 属性名、テキストが必要ないときは`false`を入れる
- 作成された要素をリターンするので変数に受け取って加工を続けることもできます
```js
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
```
***
## シャッフルする
```js
const shuffle = ([...arr]) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    console.log(i);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};
```
***
## 子要素をまとめてクリアする
```js
const initElements = (...args) => {
  args.forEach((arg) => {
    while (arg.firstChild) {
      arg.removeChild(arg.firstChild);
    }
  });
};
```
***
##  クラス名をまとめて変更する
```js
const changeClass = (delClassName, addClassName) => {
  const elements = document.querySelectorAll(`.${delClassName}`);
  elements.forEach((element) => element.classList.remove(delClassName));
  if (addClassName) {
    elements.forEach((element) => element.classList.add(addClassName));
  }
};
```