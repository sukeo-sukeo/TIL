# macのmysql@5.7→@8.6へアップデートでつまった
- @5.7を指定してuninstallする
- brew serveices listで@5.7が残っていないか確認する
- @5.7のpsをしっかりkillする
  
# mysql@8系の認証方法を@5系に戻す方法
- 通常mysql2を使えばOK
- session情報をmysqlに保存したいとき、`express-mysql-session`使用する。その時の接続ができず下記を実行しクリア
```sql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your password';
```