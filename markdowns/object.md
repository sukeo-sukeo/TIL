## Map()の使い方
### 特徴
- Mapは`set(key, value)`で値をセット  
- objectの場合は`dict.key = value`でした
- イテレータブル（反復可能）  

### 配列末尾の文字に対応する値を取り出したい  
```js
const data = ['sukeo 1', 'kuu 5', 'chee 3', 'sukeo']
const s = data.pop()
const dict = new Map()
data.forEach(v => {
  //set('key','value')でdictにkey&valueをセットする
    dict.set(v.split(' ')[0], v.split(' ')[1])
})
//get(s)で'sukeo'がKeyとなっている値をゲットする
console.log(dict.get(s)) // 1
```
### 同じことをobjectで
```js
const data = ['sukeo 1', 'kuu 5', 'chee 3', 'sukeo']
const s = data.pop();
const dict = {}
data.forEach((v) => {
  dict[v.split(' ')[0]] = v.split(' ')[1]
});
console.log(dict[s]);
//log >>> 1
```
### 補足
- `変数名.size`で`arry.length`のように長さを取得できる
- イテレータブルなので`forEach`などのarryのメソッドで値を反復可能
- objectの場合は`Object.keys(object)`でキーを取り出して反復させる
```js
console.log(dict.size)   // 3
//イテレータブル
dict.forEach(v => console.log(v)) // 1 5 3
```

