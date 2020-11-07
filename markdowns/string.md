## ['a b']を['a', 'b']にする
joinで一行の文字列に変換し、splitでスペースで区切った配列を作成
```js
arry.join().split(' ')
//join は arry
//split は string に対して
```
***
## 文字を取得する
```js
const str = 'abcd'
const n = 3
console.log(str.substr(0, n))
// abc
```