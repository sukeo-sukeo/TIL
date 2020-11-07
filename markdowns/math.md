## 絶対値を求める
```js
const num = Math.abs(-1)
console.log(num)
// 1
```
***
## べき乗を求める
`Math.pow(base, exponent)`  
2 の 1〜10乗 を求める
```js
const rand = Math.floor(Math.random() * 10 + 1)
console.log(Math.pow(2, rand))
// 2のrand乗が出力される
```

***
## 整数Nを割り切れる最小の整数を求める
【例題】`10000 以上かつ 13 で割り切れるような最小の自然数を求めてください。`  
- 最初に 13 で割り切れた数を答えとして出力する。  
- whileループ や forループ などを使う。  
（13 で割り切れるというのは 13 で割った余りが 0 ということ）

whileループ
```js
let i = 10000
  while (true) {
      if (i % 13 === 0) {
          console.log(i)
          break;
      }
      i ++
  }
```
forループ
```js
for (let i = 10000; ; i++) {
  if (i % 13 === 0) {
    console.log(i);
    break;
  }
}
```
***
## 偶数と奇数
整数を２で割ったときの余りが0なら偶数、１なら奇数
```js
const n = Number(3)
if (n % 2) {
  //nが奇数のときはあまりが１なのでtrue
  console.log('奇数')
} else {
  //nが偶数のときはあまりが0なのでfalse
  console.log('偶数')
}

//log >>> 奇数
```