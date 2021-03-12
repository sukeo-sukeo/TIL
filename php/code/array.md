## 連想配列
順番の概念がないものにインデックス
```php
$fuits = [
  'apple' => 'りんご', 
  'grape' => 'ぶどう', 
  'lemon' => 'レモン'
];
print($fuits['grape']);
```
### foreach
asのあとの変数がひとつのときは値のみがとれる  
keyもとりたい場合は下記のように書く
```php
foreach($fuits as $english => $japanese) {
  print($english . ':' . $japanese . "\n");
}
```
***
## arryの中身を表示
`print_r(変数名など)`  
`print`や`echo`だと`Array`と型名が表示されるのみ
```php
print_r($arry);
```
***
## arryを展開する
`...arry`  
$scores内で$moreScoresを展開したい
```php
$moreScores = [
  55,
  72
];

$scores = [
  90,
  40,
  ...$moreScores,
  100
]
// 90 40 55 72 100 となる
```