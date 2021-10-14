# res.render("../views/hoge", id)
id is not defind!
```js
router.get("/foo/bar", (res, req, next) => { ... })
```
- reqとresが逆になっていた → 正しくは(req, res, next) => ...

# mysql2モジュールもしくはmysqlのコメントがあることでエラー発生
- 下記のようなコメントの付け方をするとエラーになった
- コメントを消したら解消された
- 他の箇所のコメントはエラーにならない
- 改行しても変わらずエラー
- ( select ... ) で囲んでいた - 影響は不明
```sql
ORDER BY login DESC --login日付順
```
### order by か desc 周りにコメントを書くとエラーになるのかも？
