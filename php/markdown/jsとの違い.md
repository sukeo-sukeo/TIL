### オブジェクトへのアクセス
js`.`  
php`->`
***
### 文字列連結
js`+`  
php`.`
***
### 連想配列の記述
js`key : value`  
php`key => value`
*** 
### console.log()みたいなやつ
```php
var_dump(変数など);
```
***
### 定数
js`const`  
php`define(TEISUUMEI, 中身)`
***
### 変数
js`let` or `var`  
php`$`
***
### 連想配列
js`{key: value}`  
php`[key => value]`
***
### foreach
js
```js
names.foreach(name => {
  console.log(name);
})

//keyもとりたいとき
Object.keys(names).foreach(key => {
  console.log(key + ' : ' + names[key]);
})
```
php
```php
foreach($names as $name) {
  echo $name;
}

//keyもとりたいとき
foreach($names as $key => $name) {
  echo $key . ' : ' . $name;
}
```