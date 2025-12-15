import { getData } from "../utils/getData.js";
import { sendResponse } from "../utils/sendResponse.js";

export async function handleGet(res) {
  //   await getData();

  const data = JSON.stringify(await getData());
  console.log(sendResponse(res, 200, "text/html", data));
  console.log(data);
}
