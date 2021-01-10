## MAMPからphpMyAdminへ
MAMPを起動しブラウザから入る
***
## web上でのsql文の使い方
`db -> prepare(sql文)`て感じで
[webとdb連携へ](./db連携.md)
```php
// $statmentにmemosテーブル
$statment = $db -> prepare('INSERT INTO memos SET memo=?, created_at=NOW()');
$statment -> execute([$_POST['memo']]);
```
***
# CRUD
## 検索(READ)
`SELECT * FROM テーブル名`  
`*`はすべて
```sql
SELECT * FROM my_items;
```
`WHERE`で条件指定
```sql
SELECT * FROM my_items WHERE price < 180
SELECT * FROM my_items WHERE id = 3
```
`LIKE`と`%`であいまい検索
```sql
SELECT * FROM my_items WHERE keyword LIKE '%甘い%'
```
`AND`検索
```sql
SELECT * FROM my_items WHERE price >= 100 AND price < 150
-- 同じテーブル内なら`BETWEEN`が簡単(〜以下となる)
SELECT * FROM my_items WHERE price BETWEEN 50 AND 149;
```
`OR`検索  
```sql
SELECT * FROM my_items WHERE id=1 OR id=3
-- 同じテーブル内なら`IN`が簡単
SELECT * FROM my_items WHERE id IN (1, 3)
```
`LIMIT`で表示上限指定
```sql
SELECT * FROM carts LIMIT 3
-- ２件目から３つ表示する
SELECT * FROM carts LIMIT 2, 3
```
・合計`SUM`・最大値`MAX`・最小値`MIN`・個数`COUNT`・平均値`AVG`
```sql
SELECT SUM(price) FROM my_items
SELECT MAX(price) FROM my_items
SELECT COUNT(price) FROM my_items
```
重複をなくす  
`DISTINCT(カラム名)`
```sql
SELECT DISTINCT(item_id) FROM carts
```
リレーショナル(紐付ける)  
`SELECT * FROM テーブル１, テーブル２`  
`WHERE テーブル名.カラム名 = 値`・・・(ここを書かないとテーブル全部)  
`AND テーブル名.カラム名 = テーブル名.カラム名`・・・(くっつける条件)
```sql
SELECT * FROM makers, my_items WHERE my_items.id=1 AND makers.id=my_items.maker_id
```
並び替えは`ORDER BY`  
昇順`ASC`・・・デフォルト  
降順`DESC`
```sql
SELECT * FROM my_items ORDER BY id DESC
```
> １８０円以下を昇順に並び替える
```sql
SELECT * FROM my_items WHERE price <= 180 ORDER BY price
```
> catrsテーブルのcountカラムをitem_idごとに合計して表示する
```sql
SELECT item_id, SUM(count) FROM carts GROUP BY item_id
```
> 別テーブルのデータを紐付けてitem_idごとに合計して表示する
```sql
SELECT item_name, SUM(count) FROM my_items, carts WHERE my_items.id=carts.item_id GROUP BY item_id

-- 英語的な感じで末尾から考える的な

-- 「○○を●●して表示する」 SELECT、
-- 「このテーブルから」 FROM、
-- 「何を」 WHERE、
-- 「どのように」 GROUP BY
```
テーブル名に別名をつける   
`FROM`の後のテーブル名に`半角スペース 頭文字など`でショートカットを設定できる   
```sql
-- my_itemsをi cartsをcとする
SELECT i.item_name, SUM(c.count) FROM my_items i, carts c WHERE i.id=c.item_id GROUP BY c.item_id
```
### 外部結合  
すべてのデータを表示させたいとき(,で区切るのは内部結合)  
`LEFT JOIN`  
`ON`
```sql
SELECT item_name, SUM(count) 
FROM my_items 
LEFT JOIN carts ON my_items.id=carts.item_id
GROUP BY carts.item_id
```
***
## 挿入(CREATE)
`INSERT INTO テーブル名 SET カラム名=val, ...`
```sql
INSERT INTO my_items SET id=100, name='アイテム';
```
***
## 更新(UPDATE)
`UPDATE テーブル名 SET どこを=何に WHERE どこの=何を`  
`WHERE`をつけないと全部のpriceが180に変わっちゃう
```sql
UPDATE my_items SET price=180 WHERE id=1;
```
***
## 削除(DELETE)
`DELETE FROM テーブル名 WHERE どこの=何を`  
`WHERE`をつけないとmy_itemsテーブル全部削除
```sql
DELETE FROM my_items WHERE id=1;
```
***
## テーブルをつくる
`CREATE TABLE テーブル名 (カラム名 type, カラム名 type, ...)`
```sql
CREATE TABLE my_items (id INT, item_name TEXT, price INT);
```
***
## 配列の扱い
['A', 'B', 'C'] → `"A, B, C"`

---
## Tips
- primaryキーを設定する(重複を防げる)
- オートインクリメント( structure > change > A I )
- オートインクリメント設定中に例えば`id3`を削除すると`id3`は永久欠番になる・・・リレーショナルの構造上重要となる  
- 機械はひらがな⇒カタカナ⇒漢字の順で管理(すべて文字コード順)  
- 名前順で並び替えたい場合`kana`などのカナ統一カラムを用意する
- varchar 文字数を制限したtext型
- timestamp 更新日に設定
- datetime 作成日に設定