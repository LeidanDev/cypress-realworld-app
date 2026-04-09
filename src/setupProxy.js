// // src/setupProxy.ts
// import { createProxyMiddleware } from "http-proxy-middleware";
// import { Application } from "express";

// export default function setupProxy(app: Application) {
//   app.use(
//     "/api",
//     createProxyMiddleware({
//       target: process.env.API_URL || "http://localhost:3000",
//       changeOrigin: true,
//       pathRewrite: {
//         "^/api": "",
//       },
//       onProxyReq(proxyReq, req, res) {
//         // você pode adicionar headers personalizados aqui
//         proxyReq.setHeader("X-Custom-Header", "custom-value");
//       },
//     })
//   );
// }


// src/setupProxy.ts
import { createProxyMiddleware } from "http-proxy-middleware";
import { Application } from "express";

export default function setupProxy(app: Application) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: process.env.API_URL || "http://localhost:3000",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
      onProxyReq(proxyReq, req, res) {
        // você pode adicionar headers personalizados aqui
        proxyReq.setHeader("X-Custom-Header", "custom-value");
      },
    })
  );
}