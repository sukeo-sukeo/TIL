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