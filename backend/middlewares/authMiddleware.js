import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  const { accessToken } = req.cookies;
  if (!accessToken) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const user = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    req.role = user.role;
    req.id = user.id;
    next();
  } catch (error) {
    return res.status(403).json({ message: "Forbidden" });
  }
};
