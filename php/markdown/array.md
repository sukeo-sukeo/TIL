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
forEachはこう書く  
asのあとの変数がひとつのときは値のみがとれる  
keyもとりたい場合は下記のように書く
```php
foreach($fuits as $english => $japanese) {
  print($english . ':' . $japanese . "\n");
}
```