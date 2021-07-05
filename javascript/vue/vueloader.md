```
99 Blues Posts About
Jun 11, 2020
Vue.js でテキストファイルをそのまま文字列として import する
概要
テキストファイルをそのまま文字列として import するにはどうすればいいかを書いています。 import 文に直接書く方法と、vue.config.js に追記する方法の２通りがあります。

Raw-Loader のインストール
ファイルを文字列として読み込ませるためには raw-loader が必要になります。

npm install raw-loader --save-dev
Copy
import 文に直接書く
インストールしたローダーを使うには import 文の読み込むファイル名の前に raw-loader! を書き加えます。

import text from "raw-loader!./foobar.txt";
Copy
仮に foobar.txt ファイルの中身が Hello, world!\n だった場合、 text パラメータにはそれがそのまま入ります。

vue.config.js に追記する
複数箇所で raw-loader を使った import がしたい場合は、vue.config.js に設定を追記しておくと便利です。
vue.config.js が存在しなければプロジェクトフォルダ直下に作成しましょう。

module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule("text")
      .test(/\.txt$/i)
      .use("raw-loader")
      .loader("raw-loader")
      .end();
  },
};
Copy
もし、.txt以外のファイルも raw-loader で読み込みたい場合は /\.txt$/i の箇所を変更してやります。

VueWebpack


2020-06-11 13:05 +0000

 
StepFunctions を Serverless フレームワークで実装したサンプル
 
ECS CLI を使った Rails のデプロイ方法
© 2021 nightswinger · CC BY-NC 4.0

Made with Hugo · Theme Hermit · 
```