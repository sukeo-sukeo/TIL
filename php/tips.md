## issetとemptyの使い分け
- `isset` 変数が設定されていたらtrue(nullが設定されていた場合はfalse)
- `empty` 変数が空のときtrue(falsyな値の時true)
```php
$a = 0;
$b = 1;

if (isset($a)) {
  echo 'true';
} else {
  echo 'false';
}
```