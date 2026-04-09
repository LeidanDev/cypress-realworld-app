// const createProxyMiddleware = require("http-proxy-middleware");
// require("dotenv").config();

// module.exports = function (app) {
//   app.use(
//     createProxyMiddleware(["/login", "/callback", "/logout", "/checkAuth", "graphql"], {
//       target: `http://localhost:${process.env.BACKEND_PORT}`,
//       changeOrigin: true,
//       logLevel: "debug",
//     })
//   );
// };

import { Express } from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import dotenv from "dotenv";

dotenv.config();

export default function setupProxy(app: Express) {
  app.use(
    createProxyMiddleware(["/login", "/callback", "/logout", "/checkAuth", "/graphql"], {
      target: `http://localhost:${process.env.BACKEND_PORT}`,
      changeOrigin: true,
      logLevel: "debug",
    })
  );
}