## query('colname != text')が指定できなかった
textを””で囲ったらいけた
```py
df = df.query('部門 != "部門"')
```
***