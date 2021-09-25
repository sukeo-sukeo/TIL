# nodejsにアクセスさせる(apache)

httpd.confにリバースプロキシの設定を追記
```bash
<IfModule alias_module>
  
  ここに書く

</IfModule>
```
Aliasの書き方
```
Alias 受けるurl path(ディレクトリ名)
```
`/node`で`443`にアクセスがあったとき`自機の3030番ポート`へ流す  
```bash
Alias /node /var/www/html/nodeserver
<Location "/node/">
  ProxyPass http://localhost:3030/
  ProxyPassReverse http://localhost:3030/
  Order deny,allow
  Deny from all
  Allow from all
</Location>
```
他のディレクトリへのアクセスを許可
```bash
Alias /blogs /var/www/html/blogs
<Directory "/var/www/html/blogs">
  Require all granted
</Directory>
```
### サイト閲覧の流れ
```bash
ユーザー(sukeo.live-on.net/) → クライアント(/node) → サーバー(/blogsディレクトリからmdファイル読み込み) → サーバーでJSON作成 → クライアントへ返す
```
### 投稿の流れ①
```bash
vscodeでmd記事作成 → rsyncでサーバーの`blogs`ディレクトリと同期
```
### 投稿の流れ②
これ難しかった...
```bash
google formで投稿 → gasでjson作成 → /node/へpost → サーバーでmdファイルを作成(画像はjson内のurでgoogleDriveからwgetでDL) → blogsディレクトリへ保存 → scpでローカルのblogsと同期 
```