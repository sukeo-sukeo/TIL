## expressでのmysql接続
```
npm i mysql
```
```js
const mysql = require('mysql');
const db = mysql.createConnection({
  //optionは.envなど別ファイルが良い
  host: "hostname",
  user: "username",
  password: "password",
  database: "dbname",
});

db.connect(err => {
  if (err) throw err;
  console.log('db connected!');
});

// apiの例
app.get('/api/home', (req, res) => {
  db.query("select * from home", (err, docs) => {
    if (err) console.log(err);
    res.json(docs)
  });
});
```
## axiosの導入方法
```
npm i axios
```
main.jsに記述を追加
```js
import axios from 'axios';
//これで↓インスタンスプロパティとして定義され、各コンポーネントからも`this.$axios`でアクセスできる
Vue.prototype.$axios = axios;
```
呼び出し方
```js
this.$axios.get("url")
  .then(res => console.log(res.data[0]))
  .chatch(err => console.log(err));
```
GET時のクエリパラメーターの指定方法
```js
const params = {
  "params1" : 1,
  "params2" : 2
}
//第２引数に記述
this.$axios.get("url", {params: params})
  .then(res => console.log(res.data[0]))
  .chatch(err => console.log(err));
```
corsポリシー対策
```js
//vue.config.jsに下記を追加
//アクセスしたい別オリジンのURLを記述
devServer: {
    proxy: 'http://localhost:8000'
  },
```
***
## 複数のデータをinsert
```js
const sql = `insert into テーブル名 (カラム名１，カラム名２...) values ?`;
// values ? に 下のqueryの第２引数[]が入る 
  db.query(sql, [用意した値を配列で読む], (err, docs) => {
    if (err) throw err;
    res.send('insert ok!');
  });
```
```js
const values = [];
const today = new Date();
data.forEach(d => {
    values.push([
      d.title,
      d.description,
      d.path,
      d.link,
      d.movieLink,
      //配列データはStringに型変換
      String(d.use),
      today,
    ]); 
  });
  const sql = `insert into product (title, descript, src, link, movie_link, used_skill, created) values ?`;
  db.query(sql, [values], (err, docs) => {
    if (err) throw err;
    res.send('insert ok!');
  });
```
***
# herokuにて`cleardb`が２分後にCONNECTION_LOSTする問題
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