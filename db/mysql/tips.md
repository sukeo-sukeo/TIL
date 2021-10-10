# transaction処理 テスト実装例
```js
app.get("/test", async (req, res, next) => {
  const { MySQLClient } = require("./lib/database/client.js");
  let tran;
  try {
    tran = await MySQLClient.beginTransaction();
    await tran.executeQuery(
      "UPDATE t_shop SET score=? WHERE id=?", [4.00, 1]
    );
    throw new Error("test exception!")
    await tran.commit();
    res.end("OK");
  } catch (err) {
    await tran.rollback();
    next(err);
  }
})
```