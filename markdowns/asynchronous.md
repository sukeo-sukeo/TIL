## promiseの書き方
```js
new Promise((resolve, reject) => {
  console.log('promise');
  resolve('hello')       //resolveの引数がthenの引数へ渡る
}).then((data) => {
  console.log('then:' + data);
  // throw new Error()   //エラーを投げるとcatchゾーンへ処理が移行
  return data            //次のthenへ引数を渡すときはreturnする
}).then((data) => {
  console.log('then:' + data);
}).catch((data) => {
  console.log('catch');
}).finally((data) => {   //finallyは必ず呼ばれる
  console.log('finally');
})
//>>>log
//promise
//global end
//then:hello
//then:hello
//finally
```

## promise.all
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
## async-awaitのエラーハンドリング
try&catchを使う
```js
try {

}
catch {

}
```