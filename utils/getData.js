import path from "node:path";
import fs from "node:fs/promises";

export async function getData() {
  const pathJSON = path.join("data", "data.json");
  try {
    const data = await fs.readFile(pathJSON, { encoding: "utf8" });
    const parsedData = JSON.parse(data);
    return parsedData;
  } catch (err) {
    console.log(err);
    return [];
  }
}
