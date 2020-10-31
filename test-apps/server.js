const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>hello test!</h1>");
});

//じゃんけんプログラム
require("./janken/janken-node.js")();
// require("./date/date-node.js").default;

server.listen(3000, () => {
  console.log("listening port 3000!");
});
