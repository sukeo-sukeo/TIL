## XMLデータをとる(fetch)
`simplexml_load_file('URL')`
```php
<?php
$xmlTree = simplexml_load_file('https://h2o-space.com/feed/');
//これで中身をみれる
var_dump($xmlTree);
// 中身を表示
foreach($xmlTree->channel->item as $item):
?>
<a href="<?php print($item->link); ?>">
  ・<?php print($item->title); ?>
</a>
<?php
endforeach;
?>
```
***
## JSONデータをとる(fetch)
`file_get_contents('URL')`  
`json_decode()`
```php
$file = file_put_contents('https://h2o-space.com/feed/json');
//phpオブジェクト(phpで扱える形？)にデコード
$json = json_decode($file);
//これで中身をみれる
var_dump($json->title);
var_dump($file);
```