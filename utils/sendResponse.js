export const sendResponse = async (res, statusCode, contentType, payload) => {
  try {
    res.setHeader("Content-Type", contentType);
    res.statusCode = statusCode;
    res.end(payload);
  } catch (err) {
    console.log(err);
  }
};
