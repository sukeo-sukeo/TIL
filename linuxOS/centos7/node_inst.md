# centos7にnodejs環境をインストール
## nvmをインストール
nvm github とかで検索すると出てきます
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```
## `.bash_profile`に追記
nvmインストール後最後の３行くらいの下記のソースを追加
```
vi ~/.bash_profile
```
```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```
反映
```
source ~/.bash_profile
```
確認
```
nvm -v
```
## node.jsインストール
```
 nvm install --lts
```
確認
```
node -v
```
```
npm -v
```