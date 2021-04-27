## 属性の指定方法
`タグ名[属性="値"]{}`
```css
input[type="text"] {
  width: 100%;
  padding: 4px;
  box-sizing: border-box;
  margin-bottom: 16px;
}
```
***
## ローカルのフォントファイルの適用方法
pcにインストールして下記コードを記述
```css
 @font-face {
      font-family: 'MyFont';
      src: url('./asset/font/PixelMplus10-Regular.ttf');
    }
  
    body {
      font-family: 'MyFont';
    }
```