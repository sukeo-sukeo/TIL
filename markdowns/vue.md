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
## vue3からのfilterは関数適用形式を使う
```js
<!-- filter形式 -->
<p>{{ msg | uppercase | reverse }}</p>

<!-- 通常の関数適用形式 -->
<p>{{ reverse(uppercase(msg)) }}</p>
```
***
## ページ遷移時の位置の設定
routerに`scrollBehavior(to, from, savePosition)`で設定する
- `to`: どこへ
- `from`: どこから
- `savePosition`: 戻る、進むがトリガーされたときの挙動→`{x: Number, y: Number}`で渡される
- 戻る、進むがトリガーされないときは`null`が渡される
```js
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savePosition) {
    if (savePosition) {
    //戻るときは同じポジションに戻る
      return savePosition
    } else {
    //routerなどでページ遷移したときはトップに戻す
      return {x: 0, y: 0 }
    }
  }
})
```
***
## vue cliで作った静的サイトをgithubでホスティングする
vue.config.jsに`publicPath:`と`outputDir:`を記述する
```js
module.exports = {
  publicPath: '/my_page',
  outputDir: 'docs',
  filenameHashing: false,
  productionSourceMap: false,
}
```
***
## コンポーネントテンプレート
```vue
<template>
  <v-container>
    <v-row>
      <v-col>
        
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  neme: '',
  components: {
  },
  props: {
    foo: String,
    },
  data: function() {
    return {
    }
  },
  methods: {    
  },
  mounted: function() {
  },
  created: function() {
  },
}
</script>

<style lang="" scoped>

</style>
```