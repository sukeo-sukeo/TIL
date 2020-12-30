## `vuecli`で作成したサイトをherokuにデプロイ
> HTMLのような静的なwebサイトの場合にはPHPなどでファイルを作成し、heroku側にアプリだと認識させることでHTML表示をさせることが出来るようになります。
  
### やったこと ⇒ expressでサーバーをたてた
- 以前作成したサイトをgit clone  
- heroku create app名
- npm i  
- npm i express  
- server.jsファイルを新規作成し下記コードを記述
```js:server.js
const express = require('express');
const port = process.env.PORT || 8080;
const app = express();
app.use(express.static(__dirname + "/docs/"));
app.listen(port);
```
- npm startでlistenしてみる  
- cssやjsが読み込めないエラー
- vue.config.jsのpublicPathを'/'にする
- git add .
- git commit -m 'message'
- git push heroku master

# 個人的まとめ
herokuへデプロイするとき
```
- npm i する
- serverをたてる
- ディレクトリ構成を確認する
```