import path from "node:path";
import fs from "node:fs/promises";
import { sendResponse } from "./sendResponse.js";
import { getContentType } from "./getContentType.js";

export async function serveStatic(req, res, directory) {
  const publicDir = path.join(directory, "public");
  const filePath = path.join(
    publicDir,
    req.url === "/" ? "index.html" : req.url
  );

  const fileExtensions = path.extname(filePath);
  const contentType = getContentType(fileExtensions);

  // console.log(req.url);
  console.log(fileExtensions);

  try {
    const content = await fs.readFile(filePath);

    sendResponse(res, 200, contentType, content);
  } catch (err) {
    console.log(err);
  }
}
