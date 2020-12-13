## ファイルへの書き込み
```php
$success = file_put_contents('ファイルへのパス', '書き込みたい内容');
//戻り値はboolean
if ($success) {
  print('ファイルへの書き込みが完了しました');
} else {
  print('書き込みに失敗しました');
}
```
***
## ファイルの読み込み
```php
$news = file_get_contents('パス');
print($news)

//読むだけならこれが簡単
readfile('../../news_data/news.txt');
```
***
## 読みこんで加工して書き込んで
```php
$news = file_get_contents('../../news_data/news.txt');
//上に上に追加
$news = "2018-06-05 ニュースを追加しました\n" . $news;
//下に下に追加
$news .= "\n2018-06-05 ニュースを追加しました";
file_put_contents('../../news_data/news.txt', $news);

print($news);
```