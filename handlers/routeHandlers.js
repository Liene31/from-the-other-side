import { getData } from "../utils/getData.js";
import { sendResponse } from "../utils/sendResponse.js";

export const handleGet = async (req, res) => {
  //   console.log(await getData());
  const data = await getData();
  sendResponse(res, 200, "application/json", JSON.stringify(data));
};
