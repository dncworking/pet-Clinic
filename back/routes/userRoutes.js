import express from "express";
import { signup } from "../controllers/authController.js";

const userRoute = express.Router();

userRoute.post("/signup",signup);

export default userRoute