export function sendResponse(res, statusCode, contentType, payLoad) {
  res.setHeader("Content-Type", contentType);
  //   res.setHeader("Access-Control-Allow-Origin", "*");
  //   res.setHeader("Access-Control-Allow-Methods", "GET");
  res.statusCode = statusCode;
  res.end(payLoad);
}
