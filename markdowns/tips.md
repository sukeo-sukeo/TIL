## tips
- ある値に対応する値がひとつに定まっているような場合には連想配列（辞書）を使うのが便利
***
## よく忘れるやつ
```js
//join()は配列を文字列にする
arry.join() 

//split()は文字列を配列にする
string.split(' ')
```
***
## ループの書き方
- 反復回数が決まっているときは`forループ`  
- 反復回数が決まっていないときは`whileループ`が良さげ  

```js
let n = 5;
let num = null;

let i = 0
while (true) {
  if (i === n) {
    num = i;
    break;
  }
  i++;
}
console.log(num); // 5
```
***
## DOMをクリアする
```js
while (data_wrapper.firstChild) {
    data_wrapper.removeChild(data_wrapper.firstChild);
  }
```