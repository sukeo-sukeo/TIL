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