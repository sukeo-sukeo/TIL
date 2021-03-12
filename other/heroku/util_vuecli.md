# `vuecli`で作成したサイトをherokuにデプロイする
静的な状態でデプロイしてみたがアプリケーションエラーとなった
> HTMLのような静的なwebサイトの場合にはPHPなどでファイルを作成し、heroku側にアプリだと認識させることでHTML表示をさせることが出来るようになります。  


## 解決した方法
herokuにアプリケーションだと認識してもうらためexpressでサーバーをたてた
1. 以前作成したサイトをgit clone  
1. npm i  
1. npm i express  
1. package.jsonの`"script"`に`"start": "node server.js"`記述
1. server.jsファイルを新規作成し下記コードを記述
```js:server.js
//server.jsでdocsのindex.htmlをサーブする
const express = require('express');
const port = process.env.PORT || 8080;
const app = express();
const path = require('path');
const docs = path.join(__dirname, 'docs');

//いろいろエラー出たが最終的にこの記述で解消された
app.use('/', express.static(docs));

app.get('/', (req, res) => {
  res.sendFile(path.join(docs, 'index.html'));
})

app.listen(port);
```
herokuにデプロイする箱を作成
```
heroku create app名
```
ターミナルで下記コマンドを記述
```
git add .
git commit -m '1st commit'
git push heroku master
```
これで無事デプロイできました。
***
## apiやdbをいれるときの注意点
- process.envをheroku側のsettingでセットする
- server.jsはルートに配置(未確定)
- procfileを記述(未確定）なくてもよい？
- apiのルーティングURLを確認。localと違いがある場合がある(未確定)
- npmとyeanどちらかにしろと言われた
***
## 重要：ルーティングパスなど基本的な記述を見直す
***
## SPAのhistoryモード時、ページリロードエラーを解決！
ルートパス以外でリロードすると`Cannot Get / hoge`となる問題
```
npm i connect-hisotry-api-fallback
```
```js
const history = require('connect-hisotry-api-fallback')
app.use(history())
```
`connect-hisotry-api-fallbackを使えばOK！`
***
## 2分くらいすると(一定回数接続すると？)dbの接続がロストする
```
Error: Connection lost: The server closed the connection.
```

***
*下記は関係なかった！*
## 反映には１分〜２分ほど時間がかかるっぽい？(体感)
heroku push のち少し時間を置くべし...  
これでだいぶハマッたくさい...  
いやそれか、スリープ中のアクセスでエラーなのかも...
***
# エラーの原因はmysqlにあった
# connection lost
# herokuにて`cleardb`が２分後にCONNECTION_LOSTする問題...②の対策が良さげ
## mysql接続を維持する①
```js
const handleDisconnect = () => {
  db.connect(err => {
    if (err) {
      console.log(err);
      setTimeout(handleDisconnect, 1000);
    }
  });
  
  db.on('error', err => {
    console.log('db error', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      handleDisconnect();
    } else {
      throw err;
    }
  });
  console.log('db connected!');
};

handleDisconnect();
```
## mysql接続を維持する②
`createConnection()` → `createPool()` とする
```js
const db = createPool(options);
```
各ルーティングで`getConnection`を使う
```js
app.get('/api/home', (req, res) => {
  db.getConnection((err, connect) => {
    connect.query("select * from home", (err, docs) => {
      if (err) console.log(err);
      res.json(docs);
      connect.release();
    });
  });
});
```