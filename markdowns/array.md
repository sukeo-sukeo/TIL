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

## ソート
>関数の戻り値が正の時　→　引数1を引数2の後ろに並べ替え。  
>関数の戻り値が負の時　→　引数1を引数2の前に並べ替え。  
>関数の戻り値が0の時　→　何もしない。  

降順 【return b - a】
```js
const arry = [3, 1, 2]
arry.sort((a, b) => {
      return b - a
  })
console.log(arry) //[3, 2, 1]
//引数aに[1]から順番に入っていく  
//引数b？  
```
昇順 【return a - b】
```js
const arry = [3, 1, 2]
arry.sort((a, b) => {
      return a - b
  })
console.log(arry) //[1, 2, 3]
```
配列の特定のインデックスの要素で並べ替え
```js
//arry[1]の降順で並び替えたい
const arry = [[2, 1], [1, 2]]
arry.sort((a, b) => {
  return b[1] - a[1];
})
console.log(arry) //[[1, 2],[2, 1]]
```