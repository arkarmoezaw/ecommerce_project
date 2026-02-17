import { Router } from "express";
import { admin_login } from "../controllers/authControllers.js";

const router = Router();

router.post("/admin-login", admin_login);

export default router;
