## tableの作成、table定義の確認
```sql
create table test_db.test_table (
	id int(6) unsigned default 0 comment '正の値 id',
	val varchar(20) default 'hello' comment '可変長 値'
);

drop table test_db.test_table;

/* テーブル定義の確認 */
desc test_db.test_table; -- tableの中身情報を表示
show full columns from test_db.test_table; -- たくさんの情報を表示 fullを省略するとdescと同じ 
show create table test_db.test_table ; -- tableをクリエイトしたsql文を表示
```

## カテゴリごとの登録件数(nameの件数)を取得しカテゴリ名も表示  の例
```sql
SELECT cate_id, category, name from
  (
   SELECT cate_id, COUNT(name) as name from t_master
   group by cate_id
  ) as 登録件数
INNER JOIN t_category on 登録件数.cate_id = t_category.id
ORDER BY cate_id;
```