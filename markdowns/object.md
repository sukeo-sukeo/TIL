## Map()の使い方
`sukeo`に対応する数字を取り出したい  
`set(key, value)`で値をセット  
objectは`dict.key = value`でした
```js
const data = ['sukeo 1', 'oja 5', 'chee 3', 'sukeo']
const s = data.pop()
const dict = new Map()
data.forEach(v => {
  //set('key','value')でdictにkey&valueをセットする
    dict.set(v.split(' ')[0], v.split(' ')[1])
})
//get(s)で'sukeo'がKeyとなっている値をゲットする
console.log(dict.get(s))
//log >>> 1
```
同じことをobjectで
```js
const data = ["sukeo 1", "oja 5", "chee 3", "sukeo"];
const s = data.pop();
const dict = {}
data.forEach((v) => {
  dict[v.split(' ')[0]] = v.split(' ')[1]
});
console.log(dict[s]);
//log >>> 1
```