# cors originエラー
## err
```
localhost/:1 Access to fetch at 'http://localhost:3000/Users/sukeo' from origin 'http://localhost:8080' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
```
## why?
```
webサイトからwebサイトへのhttp通信は禁止されている
クロスオリジン制約が悪意のあるハッカーからインターネットを保護するため
```
## solution
python3からはこれ↓ とても簡単
```py
from flask import Flask, jsonify, abort, make_response
from flask_cors import CORS #これと
api = Flask(__name__)
CORS(api) #これ
```
python２系まではこれ↓ 3系でもいけるようです
```py
@api.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', '*')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  return response
```
## request sample
```js
fetch(url)
      .then(res => res.text()) //or res.json() etc...
      .then(data => console.log(data))
```
```js
axios.get(url)
      .then(res => res.data)
```
## tips
```
pythonのflaskで
:8080 でwebサーバー
:3000 でapiサーバー をたてた。
:8080 上で展開したindex.htmlから読み込んだindex.js内で:3000にfetchでgetリクエストを送ったらcorsエラーとなった。
いろいろ試したが解決しない
実は:3000 の再起動ができておらずコードの更新が反映されていなかったという落ち
```
# one thing
```
まずは自分を疑え(タイポ、サーバー再起動)
```