## yumリポジトリ情報のアップデート
- yum -y update
***
## selinuxの無効化
- vi /etc/selinux/config
- SELINUX=enforcing → disabled
- getenforceコマンドで確認
***
## tabキー補完機能のインストール
- yum install bash-completion
***
## デスクトップのインストール
- yum grouplist で検索
- `GNOME Desktop`か`KDE Plasma Workspaces`
- 前者は軽量、後者はやや重
- startxで起動
- systemctl get-default
- systemctl set-default graphical.target
- reboot
***
## sudoコマンドが使えない時
- rootに切り替えて`visudo`コマンドでファイル編集
- `%wheel ALL=(ALL) ALL`の下に`ユーザー名 ALL=(ALL) ALL`を追加する
- これで設定したユーザーはsudoコマンドを使える
***
## 日本語入力を有効にする
リポジトリを導入
```
yum install epel-release
```
確認
```
yum repolist
```
パッケージインストール
```
yum install mozc ibus-mozc
```
再起動
```
reboot
```
- 設定 > デバイス > キーボード > 次の入力ソース > 無効にする

***
## sshの設定（パスワード認証）
サーバー側
- /etc/ssh/sshd_configを編集
- `PermitRootLogin yes`→`no`  

クライアント側
- ssh [username]@[ipadress]

ここまででとりあえずパスワード認証で入れる
***
## sshの設定（公開鍵認証）
クライアント側
>カレントディレクトリに鍵が作成されるので`~/.ssh`に格納する
```
ssh-keygen -t rsa -b 4096 -f [filename]
``` 
>.pub(公開鍵)を相手方に送る
```
scp ~/.ssh/[filename.pub] [username]@[ip]:[相手方の格納先path]  
```
サーバー側
- ~/.ssh/authorized_keysに公開鍵をコピー
- 元ファイルは削除
- .sshディレクトリに700権限、authorized_keysファイルに600権限をそれぞれ付与
```
chmod 700 ~/.ssh/
```
```
chmod 600 ~/.ssh/authorized_keys
```
>`authorized_keys`に他の鍵がすでにある場合は追記する

再びクライアント側  
ついに接続
```
ssh -i ~/.ssh/[keyfile(.pubじゃない方)]  [相手方のユーザーネーム]@[相手方のipaddress]
```
接続情報のショートカット
```
~/.ssh/config
```
上記ファイル内に接続情報を記載
```
Host 好きな名前(接続の際に使用)
User 接続先のusername
Hostname 接続先のドメインもしくはipaddress
Port 22
IdentityFile ~/.ssh/[keyfile(.pubじゃない方)]
```
以降は...
```
ssh [Hostで設定した名前]
```
で接続できる！いいね！
***
## cheromのインストール
- ブラウザからrpmパッケージをDL
```
sudo rpm -ivh [パッケージ名]
```
足りないものがある場合それをyum install  
このときは下記で解決
```
yum -y install liberation-fonts
yum -y install vulkan
```
- アプリケーション > インターネット > にアイコンが出ている
***
## webサーバーをたてる
apacheのインストール
```
yum -y install httpd
```
phpのインストール
```
yum -y install php php-mbstring php-pear
```
confの変更
```
vi /etc/httpd/conf/httpd.conf
```
- ServerName の#を外す
- AllowOverride All のNoneを Allに変えて`.htaccess`の許可
- #AddDefaultCharset UTF-8 の行頭に＃を付けて無効にする(文字化けを防ぐ)

httpdの起動と自動起動設定
```
systemctl start httpd
systemctl enable httpd
```
firewallにhttpを許可する
```
firewall-cmd --zone=public --add-service=http --permanent
```
あとあとのことも考えhttpsも許可しとく
```
firewall-cmd --zone=public --add-service=https --permanent
```
ルーターのポート８０を開放  
- WEBページから検索して入る
- この時点でローカル内からアクセスできるはず
***
## 外部からアクセスする(http)
- ルーターのポート８０を開放
- グローバルipアドレスでアクセスしてみる
***
## 外部からアクセスする(https)
- ルーターのポート443を開放
- httpでのアクセスをさせない場合は80番を閉じる
- mydnsなどでドメインを取得
- 自身のグローバルipと紐付けておく(mydnsで出来ます！)

ドメインでipが引けるか確認
```
host [ドメイン名]
もしくは...
nslookup [ドメイン名]
```
firewallにhttpsサービスを追加
```
firewall-cmd --add-serveice=https --permanent
```
httpd用SSL通信モジュールのインストール
```
yum install -y mod_ssl
```
httpdを再起動しておく
```
systemctl resutart httpd
```
## ssl証明書を発行する
`certbot`か`openssl`  
私は`certbot`でやりました  
`epel-releaseリポジトリが必要`...なければ↓
```
yum install epel-release
```
必要なパッケージをインストール
```
ymu install -y certbot python2-certbot-apache
```
証明書の作成
```
certbot certonly --webroot -w /var/www/html/ -d [ドメイン名]
```
下記の場所にサーバー証明書が作成される(4つの.pemファイル)
```
/etc/letsencrypt/live/[ドメイン名]/
```
下記の場所のssl.confに証明書のpathを記述
```
/etc/httpd/conf.d/ssl.conf
```
>`ssl.conf`は一応コピーしておくと良い(`ssl.conf.org`とかで)  

cert.pem
```
SSLCertificateFile /etc/letsencrypt/live/[ドメイン名]/cert.pem
```
privkey.pem
```
SSLCertificateKeyFile /etc/letsencrypt/live/[ドメイン名]/privkey.pem
```
cert.pem
```
SSLCertificateChainFile /etc/letsencrypt/live/[ドメイン名]/chain.pem
```
ドメイン名を記述
```
ServerName [ドメイン名]
```
エラーチェック
```
httpd -t
```
「Syntax OK」と表示されればOK

最後にサーバー再起動
```
systemctl restart httpd
```
最後の最後に...  
mydnsへのip自動通知とSSL証明書の自動更新を`crontab -e`へ
```
#SSL証明書の自動更新
#--deploy-hook => 更新が行われた場合に実行する
#失敗した場合に備え2回実行しておく
00 3 * * * certbot renew -q --deploy-hook "systemctl restart httpd"
00 5 * * * certbot renew -q --deploy-hook "systemctl restart httpd"

#mydnsサイトにipアドレスを自動通知
00 4 * * * /bin/wget -O - 'http://[mydnsのid]:[mydnsのpass]@www.mydns.jp/login.html' > /dev/null
```
### https://[ドメイン名]でアクセス！！
### お疲れさまでした！！
***
## mydnsで無料ドメインの取得
***
## cronの設定
***
## vscodeのインストールと設定
***
## firewallの設定
***
## パーミッションまわり
/var/www 以下に対して権限とグループを変更
```
chown -R apache:apache html
chmod -R 775 html
```
今後はapacheグループに属した人が触れる設定に

userをapacheグループに追加
```
usermod -aG apache [追加したいusername]
```
ログアウト→ログイン  
userのセカンダリグループにapacheを追加  

確認
```
less /etc/group | grep apache
```
> apache:x:48:[username]

***
## tips
### サーバー側
wwwへのalias
```
vi ~/.bashrc
```
```.bashrc
alias www='cd /var/www/html'
```
```
source ~/.bashrc
```

### クライアント側
ファイルアップ用のalias
```
wup() {
  scp -i [秘密鍵ファイルのpath] $1 [接続先username]@[接続先ipaddress]:[接続先ディレクトリ]
}
```
```
wup [ファイル名]
```
で転送可能！楽チン！