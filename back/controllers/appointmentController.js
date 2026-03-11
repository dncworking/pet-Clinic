import { getAllAppointmentsM } from "../models/appointmentModel.js";
import AppError from "../utils/appError.js";

export const getAllAppointments = async (req, res, next) => {
  try {
    const appointment = await getAllAppointmentsM();

    res.status(200).json({
      status: "success",
      data: appointment,
    });
  } catch (error) {
    next(error);
  }
};
