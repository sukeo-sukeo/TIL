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

`arry[i][0]`で昇順に並べ替える。  
`arry[i][0]`が等しい場合は`arr[i][1]`で昇順に並べ替える。

```js
const arry = [[2, 2], [2, 3], [3, 1]]

//まずarry[i][0]を昇順に並べ替え
arry.sort((a, b) => {
  return b[0] - a[0];
})

//次にarry[i][0]が等しい場合はarry[i][1]を昇順に並べ替え
arry.sort((a, b) => {
  if (b[0] === a[0]) {
    return b[1] - a[1];
  }
})

console.log(arry)
// [ [ 3, 1 ], [ 2, 3 ], [ 2, 2 ] ]
```
***
## 配列のすべての要素の文字列の有無を調べる
stringのメソッド`includes`とループを組み合わせる
```js
const str = 's'
const names = ['sukeo', 'tanaka', 'suzuki']

names.forEach(name => {
  if (name.includes(str)) {
    console.log("YES");
  } else {
    console.log("NO");
  }
})

// YES NO YES
```
***
## 配列の要素を後ろから取得
```js
arry.slice().reverse();
```