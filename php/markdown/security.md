## HTMLに値を埋め込むときはエスケープする
`htmlspecialchars()`
```php
// htmlタグをエスケープする関数
function h($str) {
  return htmlspecialchars($str, ENT_QUOTES, 'UTF-8');
}
```
---
## sessionトークンの作成
```php
//csrf対策...tokenがなかったら作成する処理
function createToken() {
  if (!isset($_SESSION['token'])) {
    $_SESSION['token'] = bin2hex(random_bytes(32));
  }
}

//csrf対策...tokenをバリデーション
function validateToken() {
  if (
    //なかったらあかん
   empty($_SESSION['token']) ||
    //一致しなかったらあかん
   $_SESSION['token'] !== filter_input(INPUT_POST, 'token')
   ) {
     exit('Invaid post request');
   } 
}
```