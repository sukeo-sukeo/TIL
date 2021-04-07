# query('colname != text')が指定できなかった
textを””で囲ったらいけた
```py
df = df.query('部門 != "部門"')
```
***

# to_csvで変換エラー
エラーを無視
```py
errors='ignore')
```