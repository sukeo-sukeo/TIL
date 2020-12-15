## formテンプレ
- actionに送信先のURL
- labelのforはinputのidと紐づく
- formはvalue属性を送信する
```html
<form action="submit.php" method="get">
  <label for="my_name">お名前：</label>
  <input type="text" id="my_name" name="my_name" maxlength="255" value="">
  <input type="submit" value="送信する">
</form>
```
### 受け取るhtml  
`$_REQUEST['inputのname属性']`で受け取る  
`$_GET['inputのname属性']`で受け取る  
`$_POST['inputのname属性']`で受け取る  
`htmlspecialchars(エスケープするもの, ENT_QUOTES)`  
⇒HTMLタグをエスケープする(セキュリティ上必須)  
⇒ENT_QUOTESは実はNumber
```php
お名前: <?php print(htmlspecialchars($_REQUEST['my_name'], ENT_QUOTES));?>
//$_GET ・・・urlにのる ?のあとにkye=valで続く
//$_POST
//<form>のmethod属性と対応
//$_REQUESTは両方対応 ・・・どちらで送られるかわからない時(非推奨っぽい)
```
### 複数を受け取る checkboxなど
name属性にブラケットをつける[]  
受け取る側は配列で受け取る
```php
<form action="submit.php" method="post">
      <p>ご予約希望日</p>
      <p>
        <input type="checkbox" name="reserve[]" value="1/1"> １月１日
        <input type="checkbox" name="reserve[]" value="1/2"> １月2日
        <input type="checkbox" name="reserve[]" value="1/3"> １月3日
      </p>
      <input type="submit" value="送信する">
    </form>
```
***
## 郵便番号のチェック(正規表現)
```php
$zip = '9876543'; //false
$zip = mb_convert_kana($zip, 'a', 'UTF-8');
if (preg_match("/\A\d{3}[-]\d{4}\z/", $zip)) {
  echo('郵便番号: 〒' . $zip);
} else {
  echo('※郵便番号を 123-4567の形式でご記入ください');
}
```
`preg_match("/ 正規表現 /", チェック対象)`・・・true or false   
先頭(A)が数字３文字(d{3})続き、末尾(z)が数字４文字(d{4})で終わる。  
それをハイフンでつないでほしい([-])ぜ  
上記をバックスラッシュで区切る
```php
preg_match("/\A\d{3}[-]\d{4}\z/", $zip)
```