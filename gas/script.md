# ローカルホストにはアクセスできない
localのnode.jsサーバーにテストアクセスしようとしたところ下記のエラー。

```
Exception: DNS error: http://localhost:3030
```
ローカルホストと言われてもgoogleサーバーからしたらどこやねん、といったことですね。納得。

> これは機能しません。UrlFetchAppは、マシンと同じネットワーク上にないGoogleサーバーから実行されているため、ローカルホストで実行されているサーバーを見つけようとしても見つかりません。

# localで起動しているサーバーにアクセスする方法
### ngrokを使う！
```bash
ngrok http 3030
```
node.jsで普通にサーバーを起動させる
```bash
node server.js
```
ngrokで発行された一時URLにアクセスするとnode.jsで起動しているローカルのサーバー
**localhost:3030**にアクセスがいきます。
```js
app.post(apiPath, async (req, res) => {
  console.log(req.body);
  res.send("respons OK!");
});
```
これで**google apps script**からローカルへ`fetch`を送ることができるので
apiのテストを行うことができます！

# まとめ
ngrok素晴らしい。





