import { getData } from "../utils/getData.js";
import { parseJSONBody } from "../utils/parseJSONBody.js";
import { sendResponse } from "../utils/sendResponse.js";
import { addNewSighting } from "../utils/addNewSighting.js";

export const handleGet = async (res) => {
  const data = await getData();
  sendResponse(res, 200, "application/json", JSON.stringify(data));
};

export const handlePost = async (req, res) => {
  try {
    const parsedBody = await parseJSONBody(req);
    await addNewSighting(parsedBody);
    sendResponse(res, 201, "application/json", JSON.stringify(parsedBody));
  } catch (err) {
    sendResponse(
      res,
      400,
      "application/json",
      JSON.stringify({ error: err.message }),
    );
  }
};
