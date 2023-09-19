const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 81;

const nextAuth = require("next-auth");
const nextAuthConfig = require("./src/pages/api/auth/[...nextauth]"); // 导入你的 NextAuth.js 配置文件

const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    // 配置反向代理以处理 NextAuth.js 路由
    server.set("trust proxy", 1);

    // 配置 NextAuth.js，使用你的配置文件
    server.use("/api/auth", nextAuth(nextAuthConfig));

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
