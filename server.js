const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 81;

const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    // express 中的一個配置選項default=false 表示該不該信任proxy
    server.set("trust proxy", 1);
    server.all("*", (req, res) => {
      return handle(req, res);
    });
    server.listen(port, (err) => {
      if (err) throw err;
      console.log("> Ready on http://localhost:81");
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
