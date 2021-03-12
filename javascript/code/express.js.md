## postの受け取りかた
`body-parser`をインストールする
```js
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

//req.bodyにpostされた中身が入るようになる
req.body
```