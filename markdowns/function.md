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