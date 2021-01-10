## csvのインポート
1. テーブルを作成する
1. ファイル→インポート
1. 一行目に項目がない場合は`最初の行を~`のチェックを外す
1. csvファイルにidが入っていない場合は`「-✓」`をクリックして空白にする
1. カラムに対応したデータを選択
---
## phpmyaminへ接続
ソケットに`/Applications/MAMP/tmp/mysql/mysql.sock`  
として接続する
## sequel_proからphpmyadminへDBコピー
- sql形式でエクスポートしてクエリをsequel_pro内へ直接コピペする