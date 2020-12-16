## クッキーに値を保存
`setcookie('key', 'value', expire)`  
expire = 保持期間・・・例は２週間  
一番上に記述する
```php
setcookie('save_message', '保存したい値', time() + 60 * 60 * 24 * 14 )
```
読み取り  
`$_COOKIE['key']`
```php
echo ($_COOKIE['save_message']);
```
***
## セッションに値を保存
`session_start();`をファイルの先頭に  
続いて`$_SESSION['key'] = 'value'`  
ページ遷移で消える一時的な保存  
`PHPSESSID`のnameで保存されている
```php
session_start();
$_SESSION['session_message'] = '値をセッションに保存しました';
```
読み取り  
`$_SESSION['key']`  
セッションを使うページには`session_start()`が必要
```php
echo ($_COOKIE['save_message']);
```