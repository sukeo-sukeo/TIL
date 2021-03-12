# 小文字のアルファベットリストを配列で取得
```py
abc_list = [chr(i) for i in range(97, 97+26)]
```
# 今日の年/月/日を取得
```py
import datetime

dt_now = datetime.datetime.now()
year = dt_now.year
month = dt_now.month
day = dt_now.day
today = f"{year}/{manth}/{day}"
```