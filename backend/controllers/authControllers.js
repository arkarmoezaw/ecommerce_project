import Admin from "../models/adminModel.js";
import sendResponse from "../utils/response.js";
import createToken from "../utils/createToken.js";
import bcrypt from "bcrypt";

export async function admin_login(req, res) {
  const { email, password } = req.body;
  try {
    const admin = await Admin.findOne({ email }).select("+password");
    if (!admin) {
      sendResponse(res, 404, { error: "Email not found" });
    }
    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      sendResponse(res, 401, { error: "Invalid password" });
    }

    const token = await createToken({ id: admin._id, role: admin.role });

    res.cookie("access-token", token, {
      httpOnly: true,
      maxAge: 60 * 60 * 1000, // 1 hour
    });

    sendResponse(res, 200, { message: "Login successful", token });
  } catch (error) {
    sendResponse(res, 500, { error: error.message });
  }
}
