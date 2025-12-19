import { getData } from "../utils/getData.js";
import { sendResponse } from "../utils/sendResponse.js";
import { parseJSONBody } from "../utils/parseJSONBody.js";
import { addNewSighting } from "../utils/addNewSighting.js";
import { sanitizeData } from "../utils/sanitizeData.js";
import { sightingEvents } from "../events/sightingEvents.js";

export async function handleGet(res) {
  const data = await getData();
  const content = JSON.stringify(data);
  sendResponse(res, 200, "application/json", content);
}

export async function handlePost(req, res) {
  try {
    const parsedBody = await parseJSONBody(req);
    const sanitizedData = sanitizeData(parsedBody);
    await addNewSighting(sanitizedData);
    sightingEvents.emit("sighting-added", sanitizedData);
    sendResponse(res, 201, "application/json", JSON.stringify(sanitizedData));
  } catch (err) {
    sendResponse(res, 400, "application/json", JSON.stringify({ error: err }));
  }
}
