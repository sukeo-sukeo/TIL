## +=の書き方
`$i`にプラス１してそれを代入する
```php
$i += 1;
```
## 改行
ダブルクォート
```php
"\n"
```
PHP_EOL
```php
echo 'hello' . PHP_EOL;
```
## 桁数を揃える
`sprintf()`  
%のあとの文字で桁を揃える  
%の数がパラメーターの数
dをsにするとStringになる'abcde'
```php
$date = sprintf('%04d年 %02d月 %02d日', 2018, 1, 3);
print($date)
// >>> 2018年 01月 03日
```