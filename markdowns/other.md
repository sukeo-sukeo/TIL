N個の５以上の整数を足し合わせる
```js
const nums = [3,7,9,3]
const n = Number(nums[0])
let sum = 0
//numsの0番目は除外するので let i = 1 からスタート
  for (let i = 1; i <= n; i++) {
      const num = Number(nums[i])
      //5以上のnumを足し合わせる
      if (num >= 5) {
          sum += num
      }
  }
  console.log(sum)
  ```
