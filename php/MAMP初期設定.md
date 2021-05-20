## インストールしたら
### mamp/conf/apache/htdocs.conf  
に下記を追記（項目があれば上書き）
- IndexOptions Charset=UTF-8  
- AddDefaultCharset UTF-8

### mamp/bin/php/php7.4.2/conf/php.ini
に下記を追記（項目があれば;を外す）
- default_charset = UTF-8
- date.timezone = Asia/Tokyo
- mbstring.language = Japanese
- mbstring.internal_encoding = UTF-8