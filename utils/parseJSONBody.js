import sanitizeHtml from "sanitize-html";

export const parseJSONBody = async (req) => {
  let body = "";
  try {
    for await (const chunk of req) {
      body += chunk;
    }

    const parsedData = JSON.parse(body);

    let sanitizedData = {};

    for (const key in parsedData) {
      sanitizedData[key] = sanitizeHtml(parsedData[key], {
        allowedTags: ["b"],
      });
    }

    return sanitizedData;
  } catch (err) {
    console.log(err);
    throw new Error(`Invalid JSON format: ${err.message}`);
  }
};
