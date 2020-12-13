## date(' ')
今現在のタイムスタンプを取得
```php
print(time());
//>>> 160788602612 1970年１月１日からの現在までのミリ秒数
```
<!-- 任意のタイプスタンプを取得
```php
strtotime('1543/1/31')
``` -->
日付
```php
print(date('n/j(D)'))
//>>> 月/日（Mon）
```
明日
```php
$tomorrow = 60 * 60 * 24
```
```php
strtotime('+1day')
```
***
## 曜日を数字でとる
```php
$week_name = ['日', '月', '火', '水', '木', '金', '土'];
print($week_name[date('w')]);
```