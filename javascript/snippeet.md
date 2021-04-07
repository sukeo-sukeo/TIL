# Domをつくるクラス
```js
 class Element {
    constructor(text, id, tagName) {
      this.name = text;
      this.elm = Element.create(text, id, tagName);
    }

    static create(text, id, tagName) {
      const elm = document.createElement(tagName);
      elm.textContent = text;
      if (id) {
        elm.setAttribute("id", id);
      }
      return elm;
    }

    append(place) {
      place.appendChild(this.elm);
    }
  }
```

# express雛形
```
npm i express body-parser cors
npm i nodemon --save-dev
```
```js
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.post('/', (req, res) => {
  console.log(req.header);
  console.log(req.body);
  console.log(req.files);
  res.send("Received POST Data!");
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
```

# multerについて
appendの'img'とsingle('img')をあわせる
```js
main.js
const formData = new FormData()
  formData.append('img', blob, 'image.png')
```
```js
server.js
const upload = multer({ storage: storage }).single('img');
```
# 画像書き込み multer 雛形
```
npm i multer
```
```js
const multer = require("multer");
const storage = multer.diskStorage({
  destination: "./images/",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage }).single("img");

app.post('/save', (res, req) => {
  upload( ... /* ここにmutlter挟む感じ */)
})


//もしくは
const upload = multer({ storage: storage })
app.post('/save', upload().single("img"),
 (res, req) => {

})
```

# fetchで画像をサーバーへアップロード(base64)
```
npm i urlsafe-base64
```
```js
// main.js
const imgData = canvas.toDataURL("001.png");

const data = {
  method: "POST",
  body: imgData
}

fetch(URL + "posts", data)
  .then(res => res.text())
  .then(data => creatCheckList(data))
}
```
```js
// server.js

const base64 = require("urlsafe-base64");
const fs = requere('fs')

app.post("/posts", (req, res) => {
  // console.log(req.body);
  const b64img = req.body.split(',')[1]
  // これでBase64デコードするとimgにバイナリデータが格納される。
  const img = base64.decode(b64img);
  // 試しにファイルを'01.png'にして保存。Canvasではpng指定でBase64エンコードしている。
  const path = "./images/01.png";
  fs.writeFile(path, img, (err) => {
    if (err) console.log(err);
    console.log('書き込み完了');
  });
  
  res.status(200).send(result)

});
```
# uuidを作成
UUIDとは「世界中で唯一のID」  
”Universally Unique IDentifier”
```js
function getUniqueStr(myStrong){
  let strong = 1000;
  if (myStrong) strong = myStrong;
  return new Date().getTime().toString(16) + Math.floor(strong*Math.random()).toString(16)
}
```