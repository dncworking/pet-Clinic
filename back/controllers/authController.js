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

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({
        status: "fail",
        message: "Please provide email and password",
      });
      return;
    }
    const user = await findUserByEmail(email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      res.status(401).json({
        status: "fail",
        message: "Incorrect email or password",
      });
      return;
    }
    res.status(200).json({
      status: "success",
      data: {
        user: {
          id: user.id,
          firstName: user.firstname,
          email: user.email,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};
