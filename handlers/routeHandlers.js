import { getData } from "../utils/getData.js";
import { sendResponse } from "../utils/sendResponse.js";

export async function handleGet(res) {
  const data = JSON.stringify(await getData());
  sendResponse(res, 200, "application/json", data);
  console.log(data);
}
