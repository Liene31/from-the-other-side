import { getData } from "./getData.js";
import fs from "node:fs/promises";
import path from "node:path";

export async function addNewSighting(newSighting) {
  const pathJSON = path.join("data", "data.json");
  try {
    const data = await getData();
    data.push(newSighting);
    await fs.writeFile(pathJSON, JSON.stringify(data, null, 2), "utf8");
  } catch (err) {
    console.log(err);
    throw new Error(`Something went wrong: ${err.message}`);
  }
}
