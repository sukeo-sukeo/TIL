## 雑記
- name属性  
`.vueファイル`でない場合はname属性をつける... ？つけたほうがいい...?  
`.vueファイル`の場合はなくてもよい...?自動でつくっぽい...?
- App、Views、Component
component(部品)を組み合わせてviews(ページ)をつくる  
viewsをルーティング(routerで設定)する  
App.vueで統合してdiv#app(index.html)にドカンして完成
- componentに登録したコンポーネントを使ってないと怒られる
- propsは親から渡さなくても怒られない(怒られることもある)
- 怒られたら" "でわたしとく
- localのファイル読み込みならrequire(パス)でいける
- httpならfetch
***
## assetsに配置した画像データの読み込み方(苦戦...!)
JPGもだめ→jpg
```js  
:src="require(`../assets/product/img/minify/${item.path}`)"
```
***
## propsの書き方
悪い例（動くけど）
```js
 props: ['link', 'title', 'descript', 'src'],
 ```
良い例
 ```js
  props: {
    link: String,
    title: String,
    descript: String,
    src: String
    },
```
***
## csv-loaderをinstallしたらbuildできなくなった
なので、csv-loaderをuninstallしたら  
hapiが無いと怒られるようになり、これまたbuildできなくなった。  
hapi単体を再インストールしたら再びbuildできるようになった
***
## 子コンポーネントのスタイルを親コンポーネントから変更する
vue3からは`::v-deep`を使う
```css
 ::v-deep .auther, ::v-deep .publisher {
    color: gray;
    font-size: 16px;
  }
```