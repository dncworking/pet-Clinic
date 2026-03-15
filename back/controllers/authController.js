import bcrypt from "bcryptjs";
import { createUser, findUserByEmail } from "../models/userModel.js";
export const signup = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password, role } = req.body;

    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({
        status: "fail",
        message: "User with this email is existing.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await createUser(
      firstName,
      lastName,
      email,
      hashedPassword,
      role,
    );
    res.status(201).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    next(error);
  }
};
