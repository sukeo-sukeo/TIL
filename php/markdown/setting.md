## timezoneの設定
htmlファイルに
```php
<?php
phpinfo();
?>
```
と記述しブラウザでアクセスし読み込んでいるphpのバージョンを確認  
スポットライトなどで`php.ini`の該当バージョンを検索し開く
```
php.ini. --7.4.2
```
```php
date.timezone = 'Asia/Tokyo'
```
に変更する。  
ファイルが変更できない場合などは下記をhtml内に記述
```php
date_default_timezone_set('Asia/Tokyo');
```
***
## while文
```php
<?php
//初期化処理
$i = 1;
//繰り返す条件
while ($i <= 365) {
//繰り返したい処理
  print($i .  "\n");
//黒真処理
  $i = $i + 1;
}
?>
```