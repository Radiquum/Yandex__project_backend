const fs = require("node:fs");
const mimeTypes = require("./mime-types");

function staticFile(res, filePath, ext) {
  fs.readFile("./public" + filePath, (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.end("Not Found");
      return err;
    }
    res.writeHead(200, {
        "Content-Type": mimeTypes[ext],
      });
    res.end(data);
  });
}

module.exports = staticFile;
