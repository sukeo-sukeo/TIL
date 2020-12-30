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