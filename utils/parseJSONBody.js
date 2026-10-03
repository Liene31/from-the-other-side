import { sanitizeInput } from "./sanitizeInput.js";

export const parseJSONBody = async (req) => {
  let body = "";
  try {
    for await (const chunk of req) {
      body += chunk;
    }

    const parsedData = JSON.parse(body);

    const sanitizedData = sanitizeInput(parsedData);

    return sanitizedData;
  } catch (err) {
    console.log(err);
    throw new Error(`Invalid JSON format: ${err.message}`);
  }
};
