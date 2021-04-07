## npm rue serveしたときに出たエラー
```
 ERROR  Failed to compile with 1 error                                                                                       4:08:28

This dependency was not found:

* core-js/modules/es.object.to-string.js in ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VideoContainer.vue?vue&type=script&lang=js&

To install it, you can run: npm install --save core-js/modules/es.object.to-string.js
```
解決
```
npm install --save core-js
```
core-jsのバージョンをあげたら直った  
3.6 → 3.9  
念の為install前にpackage.jsonをバックアップしとくとよい
***
##  already included file name vue
コンソール上の「問題」が出るがエラーではない
- import の .vue 拡張子をとったら治った 謎
***
