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