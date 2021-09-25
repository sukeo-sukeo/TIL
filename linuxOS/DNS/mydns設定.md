# 約１ヶ月毎に動的に変化するグローバルipアドレスのcron設定
私の環境では約１ヶ月おきにグローバルipアドレスが変化します。
cronでipアドレスの自動通知を設定していましたが、うまく設定されないことが悩みの種でした。

### 気がついた
IPv6は更新されている...!!

なぬ...

myDNSのログをよくよくみると確かに決まった時間に通知はできていますが、IPv4の文字が見当たらず、更新「update」されているのはどうやら「IPv6」のみのようでした。

公式っぽい例を参考に設定したので安心していましたが、改めてググッてみると下記記事と出会いました。

> ちなみに検索ワードは「mydns  ipv6しか変わらない」というストレートな気持ちを入力しました

>引用 https://fireturtle.net/posts/5f44410d/
```bash
#!/bin/bash

# 公式の例。このアドレスだと自分の環境ではIPv6のアドレスのみ設定され、IPv4のアドレスは変わらなかった
#/usr/bin/wget -O - 'https://userid:password4@www.mydns.jp/login.html'

# IPv4とIPv6を両方設定するにはそれぞれのサブドメインに個別に通知する必要があるらしい。
# IPv4
/usr/bin/wget -O - 'https://userid:password@ipv4.mydns.jp/login.html'
# IPv6
/usr/bin/wget -O - 'https://userid:password@ipv6.mydns.jp/login.html'
```