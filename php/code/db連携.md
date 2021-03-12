## webからDBへ接続(まずは接続)
`new PDO(mysql:dbname=mydb; host=localhost; charset=utf8', 'root', 'root')`  
```php
try {
  // Php Data Object
  $db = new PDO('mysql:dbname=mydb; host=localhost; charset=utf8', 'root', 'root');
} catch(PDOException $e) {
  echo 'DB接続エラー: ' . $e -> getMessage();
}
```
***
## データベースにアクセス(execとquery)
`exec(sql記述)`・・・件数を取得したいとき  
`$count`に件数が入る
```php
$count = $db -> exec('INSERT INTO my_items SET maker_id=1, item_name="もも", price=210, keyword="缶詰、ピンク、甘い"');
```
`query(sql記述)`・・・値を取得したいとき  
`$records`に値が入る
```php
$records = $db -> query('SELECT * FROM my_items');
while ($record = $records -> fetch()) {
  echo $record['item_name'] . "\n" ;
}
```
***
## フォーム⇒PHP⇒DBの連携(prepare)
> フォームからのPOSTはArrayでくるのでArrayでDBへ渡す(たぶん)
> stringだとDBに入らなかった  

データ挿入(非推奨パターン)  
sqlに直接`$_POST`は安全性の観点からNG
```php
$db -> exec('INSERT INTO memos SET memo = "' . $_POST['memo'] . '", created_at=NOW()');
```
データ挿入(推奨パターン)  
`prepare`・・・メモをポストするよ〜っていう事前準備する[sql文へ](./sql.md)  
`execute`で実行する
```php 
$statment = $db -> prepare('INSERT INTO memos SET memo=?, created_at=NOW()');
//arrayでDBへ もちろん[ブラケット]でもOK
$statment -> execute(array($_POST['memo']));

//下記のパターンでもOK
$statment -> bindParam(1, $_POST['memo']);
$statment -> execute();
//bindParamで複数のデータを指定できる
//1はこれ、２はこれ、３はこれ...など
$statment -> bindParam(1, $_POST['memo'], PDO::PARAM_INT);
```
- `execute`で渡すと文字列となる  
- 数字で渡したい場合`PDO::PARAM_INT`のオプションを指定する
***
## ページ遷移時にidをurlに乗せて渡し該当データをDBから取得する
urlを使用してidパラメータを渡す  
index.php
```php
<p>
<a href="memo.php?id=<?php echo $memo['id'];?>">
//mb_substrで文字数制限
<?php echo mb_substr($memo['memo'], 0, 50); ?>
</a>
</p>
```
urlパラメータを読んでDBからデータ取得し表示  
memo.php
```php
// 数字じゃない場合と０以下の場合は弾く
// 想定外を予測しdbに投げる前に安全性を担保させる
$id = $_REQUEST['id'];
if (!is_numeric($id) || $id <= 0) {
  echo 'idは1以上の数字で指定してください';
  exit();
}
$memos = $db -> prepare('SELECT * FROM memos WHERE id=?');
//memosにエグゼキュートで取得されたレコードから１件fetchをしてそれをmemoに格納
$memos -> execute([$id]);
$memo = $memos -> fetch();
```
`$memo`の中身を表示
```html
<article>
  <pre>
    <?php echo $memo['memo']; ?>
  </pre>
  <a href="index.php">戻る</a>
</article>
```
ちなみに`$memo`の中身はこんな感じ  
db内のデータがArrayで入ってくる
```html
Array(
  [id] => 1
      [0] => 1
      [memo] => 最初のメモです
      [1] => 最初のメモです
      [created_at] => 2020-12-20 06:53:42
      [2] => 2020-12-20 06:53:42
  )
```
***
## ページネーション
```html
<?php if ($page >= 2): ?>
  <a href="index.php?page=<?php echo $page - 1; ?>"><?php echo $page - 1 ?>ページ目へ</a>
  <?php endif; ?>
  |
  <?php 
  $counts = $db -> query('SELECT COUNT(*) as cnt FROM memos');
  $count = $counts -> fetch();
  // ceil・・・切り上げ
  $max_page = ceil($count['cnt'] / 5);
  if ($page < $max_page):
   ?>
  <a href="index.php?page=<?php echo $page + 1; ?>"><?php echo $page + 1 ?>ページ目へ</a>
  <?php endif; ?>
```
***
## TIPS
urlパラメータがセットされていたらture
```php
if (isset($_GET['id']))
```
数字だったらtrue
```php
if (is_numeric($_GET['id']))
```
hiddenパラメータ  
> 画面上には表示されないが存在する  
> パラメータを密かに次のページに渡せる  
> methodは囲うformタグによる  
> sessionやcookieを使うまでもないときに利用
```html
<input type="hidden" name="id" value="<?php echo $id; ?>">
```
ハッシュ化  
`sha1()`  
- 不可逆暗号・・・ハッシュ化された文字列からは元に戻せない
- ハッシュ化前の同じ文字列は必ず同じ文字列の並びにハッシュされる
```php
sha1($_SESSION['join']['password'])
```
- 取得するだけなら`query()`  
- 挿入など操作なら`prepare()`