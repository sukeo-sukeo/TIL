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
引数はタグ名、属性名([属性のタイプ、属性の名前])、テキスト、追加する親ノード  
- 属性名、テキストが必要ないときは`false`を入れてください
- 親ノードの入力がない場合は要素をリターンするので変数に受け取って加工を続けることができます
```js
//createTag(string, arry(boolean), string(boolean), string(boolean or null))
const createTag = (elementName, attr, content, parentNode) => {
  const el = document.createElement(elementName)
  if (attr !== false && typeof attr === 'string' || attr.length % 2 === Number(1)) {
    console.error('第２引数は配列、ペアでお願いします[attribute, attributeName]');
    return
  }
  console.log(typeof attr[0]);
  if (attr !== false) {
    if (typeof attr[0] === 'object') {
      console.log(attr);
      attr.forEach(v => {
        el.setAttribute(v[0], v[1])
      })
    } else {
      console.log(attr);
      el.setAttribute(attr[0], attr[1])
    }
  }
  if (content) {
    el.textContent = content
  }
  if (parentNode) {
    parentNode.appendChild(el)
  } else {
    return el
  }
}
```
サンプル
```js
createTag('p', false, `国名: ${el.name}`, DATA_WRAPPER)
```