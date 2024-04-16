const http = require("http");
const {
  mainRouteController,
  gameRouteController,
  voteRouteController,
  defaultRouteController,
} = require("./controllers");

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      mainRouteController(res, "/index.html", ".html");
      break;
    case "/game":
      gameRouteController(res);
      break;
    case "/vote":
      voteRouteController(req, res);
    default:
      defaultRouteController(res, req.url);
      break;
  }
});

server.listen(3000);
