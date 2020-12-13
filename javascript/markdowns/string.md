## ['a b']を['a', 'b']にする
joinで一行の文字列に変換し、splitでスペースで区切った配列を作成
```js
arry.join().split(' ')
//join は arry
//split は string に対して
```
***
## 文字列を取得する
```js
const str = 'abcd'
const n = 3
console.log(str.substr(0, n))
// abc
```
***
## 文字列を検索する
検索対象文字列があれば`true`なければ`false`を返す
```js
const str = 's'
const name = 'sukeo'
if (name.includes(str)) {
  console.log("YES");
} else {
  console.log("NO");
}
// YES
```
## 文字列`'03'`をNumber型に型変換すると`3`になる
```js
const nums = ['03', '10']
console.log(Number(nums[0]))
console.log(Number(nums[1]))

// 3
// 10
```
## 文字列を置き換える
`hello world`を`hello_world`にする  
split()する前の調整に使ったりする
```js
string.replace(" ", "_")
```