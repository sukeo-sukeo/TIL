## DBを追加
```
heroku addons:add cleardb
```
## DB情報を取得する
```
heroku config | grep CLEARDB_DATABASE_URL
// CLEARDB_DATABASE_URL: mysql://ユーザ名:パスワード@サーバ名/データベース?reconnect=true
```
## pgモジュール
![](./assets/pgモジュール.jpeg)
