import path from "path";
import express, { Express } from "express";
import history from "connect-history-api-fallback";
import setupProxy from "../src/setupProxy";
import { frontendPort } from "../src/utils/portUtils";

const app: Express = express();

// Tipagem correta para setupProxy
setupProxy(app);

app.use(history());
app.use(express.static(path.join(__dirname, "../build")));

// Inicializa o servidor
app.listen(frontendPort, () => {
  console.log(`Frontend server running at http://localhost:${frontendPort}`);
});