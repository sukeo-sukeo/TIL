## MAMPからphpMyAdminへ
MAMPを起動しブラウザから入る
## 検索
`SELECT * FROM テーブル名`  
`*`はすべて
```sql
SELECT * FROM my_items;
```
## 挿入
`INSERT INTO テーブル名 SET カラム名=val, ...`
```sql
INSERT INTO my_items SET id=100, name='アイテム';
```
## 更新
`UPDATE テーブル名 SET どこを=何に WHERE どこの=何を`  
`WHERE`をつけないと全部のpriceが180に変わっちゃう
```sql
UPDATE my_items SET price=180 WHERE id=1;
```
## 削除
`DELETE FROM テーブル名 WHERE どこの=何を`  
`WHERE`をつけないとmy_itemsテーブル全部削除
```sql
DELETE FROM my_items WHERE id=1;
```
## テーブルをつくる
`CREATE TABLE テーブル名 (カラム名 type, カラム名 type, ...)`
```sql
CREATE TABLE my_items (id INT, item_name TEXT, price INT);
```
## Tips
- primaryキーを設定する(重複を防げる)
- オートインクリメント( structure > change > A I )
- オートインクリメント設定中に例えば`id3`を削除すると`id3`は永久欠番になる・・・リレーショナルの構造上重要となる