# コンポーネント動的切り替えについて
:isだとrefが最初のコンポーネントしか呼び出せない?
- v-ifを使う
- :isの使い方
```js
 <component 
// 子からのイベントの受け取り
  @fetch-result-data="textToData"
// 子へのdataわたし 子はpropsで受け取る
  :todoText="todoText"
  :videoHeight="videoHeight"
  :createBtnHeight="createBtnHeight"
// dataをmethodで切り替える感じ
  :is="currentView">
  </component>
```
***
# vueでの.env
- rootに`.env`ファイル作成
```
[.env] 
VUE_APP_変数名='hogehoge'
```
```js
[呼び出し]
console.log(process.env.VUE_APP_変数名)
```
> vueの場合`dotenv`インストールは不要

***
# vue-routerを追加するときの注意点
```
vue add router
```
App.vueが上書きされてしまうことがあるので念のためバックアップしときましょう！

viewsディレクトリも多分上書きされるので注意！  
pagesとかにディレクトリ名変えているならOK！
***
# router-linkは@clickが動かない
動かし方
`@click.native`
```
<router-link @click.native="clickEvent()">遷移します</router-link>
```
***
# eventHubを作成してイベント送受を楽に
EventHub.jsを作成
```js
const eventHub = {
  install: function(Vue) {
    Vue.prototype.$eventHub = new Vue();
  },
};
export default eventHub;
```
main.jsで読み込み
```js
import EventHub from "./EventHub.js";
Vue.use(EventHub);
```
eventをトリガーする側
```js
this.$eventHub.$emit('event-name',[引数]) 
```
template内ではthisは不要
```js
@click="$eventHub.$emit('event-name')" 
```
トリガーを受け取る側 = メソッドを実行したいコンポーネントで`$on`を使用。
記述場所は`mounted`などで良さげ。
```js
this.$eventHub.$on("event-name", this.event);
```
これで、あるコンポーネントからemitされたら、そのイベント名でonが記述してあるコンポーネントのメソッドが発動する。
親子関係の縛りが無くなり非常に快適。
ただしグローバル登録になるので名前の衝突には注意。
小規模な開発ならこれで十分だと感じ。
***
# on-clinkで複数の関数を登録
```html
<div @click="firstMethod(); secondMethod()"></div>
```
# ブラウザコンソールにGET http://localhost:8080/sockjs-node/info?t=1546837366717 net::ERR_EMPTY_RESPONSE
node_modulesの`.chach`ディレクトリを削除  
もしくは  
```bash
npm cache clean -f(--force)
```
これでOK！