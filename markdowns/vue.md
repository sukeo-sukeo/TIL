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
- assetsに配置した画像データの読み込み方(苦戦...!)
```js  
:src="require(`../assets/product/img/minify/${item.path}`)"
```