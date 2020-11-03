## Map()の使い方
### 特徴
- Mapは`set(key, value)`で値をセット  
- objectの場合は`dict.key = value`でした
- イテレータブル（反復可能）
- 頻繁に値を変更したりする場合はobjectよりMapが適している

### 配列末尾の文字に対応する値を取り出す
```js
const data = ['sukeo 1', 'kuu 5', 'chee 3', 'sukeo']
const s = data.pop()
const dict = new Map()
data.forEach(v => {
  //set('key','value')でdictにkey => valueの形でセットできる
    dict.set(v.split(' ')[0], v.split(' ')[1])
})

console.log(dict)
//  Map(3) {"sukeo" => "1", "kuu" => "5", "chee" => "3"}

// get(s)で'sukeo'がKeyとなっている値をゲット
console.log(dict.get(s)) // 1
```
***

### 同じことをobjectで
```js
const data = ['sukeo 1', 'kuu 5', 'chee 3', 'sukeo']
const s = data.pop();
const dict = {}
data.forEach((v) => {
  dict[v.split(' ')[0]] = v.split(' ')[1]
});

console.log(dict)
// {sukeo: "1", kuu: "5", chee: "3"}

//sukeoがkeyとなっている値を取得
console.log(dict[s]) // 1
```
***

### keyの有無を確認できる
- `変数名.has()`でkeyの有無を**真偽値で返す**
- 同じkeyをsetすると、後続のvalueで上書きされるため、`変数名.has()`と`if文`と組み合わせることで`keyがあれば値を加算する`という処理ができる

```js
const data = ['sukeo 1', 'kuu 5', 'chee 3', 'sukeo 2']
const dict = new Map()
data.forEach(v => {
  const d = v.split(' ')[0]
      if (dict.has(d)) { //true dictにkeyが存在する場合
          const x = dict.get(d)
          dict.set(d, Number(x) + Number(v.split(' ')[1]))
      } else {
          dict.set(d, v.split(' ')[1])
      }
  })
console.log(dict)
// Map(3) {"sukeo" => 3, "kuu" => "5", "chee" => "3"}
```
***

## 補足
- `変数名.size`で`arry.length`のように長さを取得できる
- イテレータブルなので`forEach`などのarryのメソッドで値を反復可能
- objectの場合は`Object.keys(object)`でキーを取り出して反復させる
```js
//dict = Map(3) {"sukeo" => "1", "kuu" => "5", "chee" => "3"}

console.log(dict.size)   // 3
```
```js
//dict = Map(3) {"sukeo" => "1", "kuu" => "5", "chee" => "3"}

dict.forEach(v => console.log(v)) // 1 5 3
```
