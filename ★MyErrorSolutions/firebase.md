# moduleがない！
- ローカルでpackage.jsonを確認！
- funcitonsディレクトリ内でnpm i しているか確認！

# cloud vision api が使えない!
- functionsのログを確認！apiが有効になっているか確認！
- firebaseとgcpは連動している！
- 動かない時はapiへのキーを再設定する！
```
export GOOGLE_APPLICATION_CREDENTIALS=PATH_TO_KEY_FILE
```

# realtime database で 2回呼び出してるよみたいなエラー
```
IREBASE WARNING: Exception was thrown by user callback. Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
```
```js
// NG
db.ref('lists/').on("value", snapshot => res.json({ data: snapshot.val() }))
```
```js
// OK
db.ref('lists/').once("value", snapshot => res.json({ data: snapshot.val() }))
```
`on`だと開き続けるらしい  
そのため`'lists/update/'`とやったときに`lists/`で既に開いているから`2回開いてますよ`となるらしい  
`once`でやるとエラーがでなくなった  
少しハマった
***
# functionsがデプロイできない！
firebase deploy で `functions`がデプロイできなかった
```
Error: function terminated. Recommended action: inspect logs for termination reason. Additional troubleshooting documentation can be found at https://cloud.google.com/functions/docs/troubleshooting#logging Function cannot be initialized.
```
```
"status":{"code":3,"message":"Function failed on loading user code. This is likely due to a bug in the user code.
```
```
Functions deploy had errors with the following functions:
```
## コード内のエラーが原因
自分の場合、認証jsonファイルへのパスをハードコーディングしていたのでローカルでは動いていたがクラウド上では当然読み込めない...
```js
// 変更前
// serviceAcountにローカルでのパスを記述していた
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://lister-424b3-default-rtdb.firebaseio.com",
});
```
```js
// 変更後
// ターミナルで環境変数にパスを設定し下記コードに変更
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://lister-424b3-default-rtdb.firebaseio.com",
});
```
ターミナルで環境変数の設定
```
export GOOGLE_APPLICATION_CREDENTIALS="パス"
```
