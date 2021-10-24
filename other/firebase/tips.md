# サーバーサイドからfirebaseにアクセスする
`firebase admin`を使用する
```bash
npm i firebase-admin
```
### storageを使用する例
```js
const admin = require('firebase-admin');

const serviceAccount = require('./path/to/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: '<BUCKET_NAME>.appspot.com'
});

const bucket = admin.storage().bucket();

// 'bucket' is an object defined in the @google-cloud/storage library.
// See https://googlecloudplatform.github.io/google-cloud-node/#/docs/storage/latest/storage/bucket
// for more details.
```
rulesに関係なくサーバー処理でアクセスできる

### クライアントからアクセスする
```bash
npm i firebase
```
- こっちが基本っぽく簡単にできるはず
- ただしrulesをしっかり学ぶ必要があるっぽい`クライアントからアクセスできる状況になるため`

