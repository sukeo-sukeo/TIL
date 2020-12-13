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
***
## for文
```php
for ($i = 1; $i <= 365; $i++) {
  print($i . "\n");
}
```
`{}` は `: endfor`でもOK
```php
for ($i = 1; $i <= 365; $i ++) :
  $date = strtotime('+'. $i . 'day');
  print(date('n/j(D)', $date) . "\n");
endfor;
```