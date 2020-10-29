### promise.all
```js
promise.all([fn1(), fn2(), fn3()]).then(nums => {
  //すべての処理が終わるのを待ってからここの処理が実行される
  //それぞれの結果が[arry]で返される
})
```
### promise.race
```js
promise.race([fn1(), fn2(), fn3()]).then(nums => {
  //最初のひとつが終わった時点でここの処理が実行される
  //最初に終わった結果がnumsに入ってくる
})
```
