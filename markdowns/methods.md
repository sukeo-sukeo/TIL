### ['a b']を['a', 'b']にする
```js
arry.join().split(' ')
//join は arry
//split は string に対して
```
### スプレッド構文
配列の分割
```js
const lines = [1, 2, 3, 4, 5]
const [n, ...v] = lines
console.log(n) //1
console.log(v) //[2, 3, 4, 5]
```
配列のコピー
```js
const lines = [1, 2, 3, 4, 5]
const linesCopy = [...lines]
console.log(linesCopy) // [1, 2, 3, 4, 5]
```
配列のマージ
```js
const lines = [1, 2, 3, 4, 5]
const lines2 = ['a', 'b', 'c']
const linesMerge = [...lines, ...lines2]
console.log(linesMerge) // [1, 2, 3, 4, 5, 'a', 'b', 'c']
```
