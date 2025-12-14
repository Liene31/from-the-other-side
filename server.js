import http from "node:http";
import { serveStatic } from "./utils/serveStatic.js";
import { handleGet } from "./handlers/routeHandlers.js";

const PORT = 8000;

const __dirname = import.meta.dirname;
// console.log("CWD", process.cwd()); --> prints cwd

const server = http.createServer(async (req, res) => {
  if (req.url.startsWith("/api") && req.method === "GET") {
    console.log("api");
    handleGet();
  } else if (!req.url.startsWith("/api"))
    return await serveStatic(req, res, __dirname);
});

server.listen(PORT, () => {
  console.log(`Connected on port: ${PORT}`);
});
