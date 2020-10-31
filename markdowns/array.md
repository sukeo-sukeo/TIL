## スプレッド構文
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

//この方法であれば"非破壊"の挙動となる
const linesRevers = [...lines].reverse()
console.log(lines) // [1, 2, 3, 4, 5]
console.log(linesRevers) // [ 5, 4, 3, 2, 1]

```
配列のマージ
```js
const lines = [1, 2, 3, 4, 5]
const lines2 = ['a', 'b', 'c']
const linesMerge = [...lines, ...lines2]
console.log(linesMerge) // [1, 2, 3, 4, 5, 'a', 'b', 'c']
```
## 配列内の一致する要素の個数を取得
```js
const arry = [true, false, true];
const result = arry.filter((x) => x === true).length;
console.log(result); // 2
```

