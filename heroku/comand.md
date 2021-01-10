## アプリ作成手順
```
空のリポジトリ作成しプログラムをつくる (git cloneしてくる)
```
```
git init
git add .
git commit -m 'first commit'
```
```
heroku create アプリ名
```
```
git push heroku master
```
```
heroku open
```
## エラーの確認
ログをチェック
```
heroku logs --tail
```
heroku側でアプリを実行してみる
 ```
 heroku run npm start
 ```
 自分の場合sqlの接続エラーが原因と判明  
 → heroku側の環境変数が未設定だった！ 

---
## アプリの削除
```
heroku apps:destroy --app アプリ名
```
確認飛ばし削除
```
heroku apps:destroy --app アプリ名 --confirm アプリ名
```
## herokuからコードをDLして確認
```
heroku git:clone -a [アプリケーション名]
```