## 削除処理があるときのv-forのkeyは必ず一意の値を用意するように
```
正しい要素が削除されなくなる
やられた
```
***
## objectの逆順は無い
- 順序を担保したいなら辞書を使おう ... MAP()
***
## setIntervalでthisは使えない?気がする
***
## jsDOC
- 関数の引数の説明をツールチップで出力させることができる
```js
/**
   * ボタン
   * 
   * @param {String} id ボタンID
   * @param {String} text ボタンテキスト
   * @param {Array} classNames ボタンクラス名
   * @param {Array} iconClassNames アイコンクラス名
   * @return {Element} ボタン
   */
```
***
## ２次元配列を１次元配列に変換
```js
[].concat(...Array)
// もしくは
Array.flat()
```
***
## コメントだけを取得する
```js
nodeType === 8
```