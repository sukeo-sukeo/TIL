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