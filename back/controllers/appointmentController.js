import {
  getAllAppointmentsM,
  getAllAppointmentByIDM,
} from "../models/appointmentModel.js";
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

export const getAllAppointmentByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const appointment = await getAllAppointmentByIDM(id);
    if (!appointment) {
      throw new AppError("No appointment found with that ID", 404);
    }
    res.status(200).json({
      status: "success",
      data: appointment,
    });
  } catch (error) {
    next(error);
  }
};
