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
//srcディレクトリに作成したserver.jsでdocsのindex.htmlをサーブする処理
const express = require('express');
const port = process.env.PORT || 8080;
const app = express();
app.use(express.static(__dirname + "/../docs/"));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/../docs/index.html');
});
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
- process.envはheroku側のsettingでセットする
- server.jsはルートに配置(未確定)
- procfileを記述(未確定）
- apiのルーティングURLを確認。localと違いがある場合がある(未確定)
- npmとyeanどちらかにしろと言われた
