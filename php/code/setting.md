## phpの始め方for mac
- MAMPをDL
- MAMPフォルダ内のapacheがhtdocsが読むのでここにphpファイルを置く
- timezoneをAsia/Tokyoに変更__※下記参照
- localhost/8888/〜 でブラウザからアクセス
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
