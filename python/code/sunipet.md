# pythonでwebサーバーをたてる
```py
import http.server
import socketserver

PORT = 8080
Handler = http.server.SimpleHTTPRequestHandler

print(Handler)
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print("serving at port", PORT)
    httpd.serve_forever()
```

# flaskでapiサーバーをたてる
```py
# -*- coding: utf-8 -*-
from flask import Flask, jsonify, abort, make_response
from flask_cors import CORS

api = Flask(__name__)
CORS(api)

@api.route('/Users/<string:userId>', methods=['GET'])
def get_user(userId):
  result = f"ユーザーid{userId}ですね？"
  # result = {"msg": f"ユーザーidは{userId}ですね？"}
  return result


@api.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'Not found'}), 404)

if __name__ == '__main__':
    api.run(host='localhost', port=3000)
```