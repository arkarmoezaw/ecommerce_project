export default function sendResponse(res, statusCode, data = null) {
  return res.status(statusCode).json(data);
}
