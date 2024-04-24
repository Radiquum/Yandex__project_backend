const path = require("node:path");
const {mimeTypes, staticFile} = require("../appModules/http-utils");

async function defaultRouteController(res, publicUrl) {
  const extname = String(path.extname(publicUrl)).toLowerCase();
  if (extname in mimeTypes) {
    staticFile(res, publicUrl, extname);
    return;
  }
  res.statusCode = 404;
  res.end("Not Found", "utf8");
}
module.exports = defaultRouteController;
