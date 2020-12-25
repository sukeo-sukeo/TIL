## アカウント重複をチェック
```php
if (empty($error)) {
  //membersテーブルのemailの件数を見ます宣言(sqlの発行)
  $member = $db -> prepare('SELECT COUNT(*) AS cnt FROM members WHERE email=?');
  //$_POST['email']でやってください文
  $member -> execute([$_POST['email']]);
  //やってください(emailがあれば1、なければ0が$recordに入る)
  $record = $member -> fetch();
  // 重複していたらerrorを起動
  if ($record['cnt'] > 0) {
    $error['email'] = 'duplicate';
  }
}
```

## ページネーション思考工程
例 ) 投稿の件数を５件刻みにページネーションしたい
```php
// urlパラメータからページ番号を取得
$page = $_REQUEST['page'];
// 空だったら１とする
if ($page == '') {
  $page = 1;
}
// max関数で比べて大きい方を採用（１以下だったら１とする）
$page = max($page, 1);

// dbから投稿データの総件数を取得
$counts = $db -> query('SELECT COUNT(*) as cnt FROM posts');
$count = $counts -> fetch();

// 最大ページ数は総件数割る５で切り上げ
$maxPage = ceil($count['cnt'] / 5);

// min関数で比べて小さい方を採用（$maxPage以上にならないようにする）
$page = min($page, $maxPage);

// 投稿の取得範囲のスタートの部分を計算(LIMIT句の第一引数)
// $startから何件分を取得するかの指定となる
$start = 5 * ($page - 1);

// 投稿を取得する
$posts = $db -> prepare('SELECT m.name, m.picture, p.* FROM members m, posts p WHERE m.id=p.member_id ORDER BY p.created DESC LIMIT ?,5');
// １番目の？に$startを入れる、それは数字であるオプションがPDO::~
$posts -> bindParam(1, $start, PDO::PARAM_INT);
$posts -> execute();

```
***
## ログアウト処理
cookieをデストロイする
```php
session_start();

$_SESSION = [];
// ここは決まり文句
// sessionにcookieを使うかどうかの設定ファイル[session.use_cookies]にcookie情報の削除処理を記述
if (ini_set('session.use_cookies')) {
  $params = session_get_cookie_params();
  setcookie(
   session_name() . '', time() - 42000,
   $params['path'], 
   $params['domain'], 
   $params['secure'], 
   $params['httponly']
  );
}
session_destroy();

//emailも消去
setcookie('email', '', time() - 3600 );

header('Location: index.php');
exit();

```