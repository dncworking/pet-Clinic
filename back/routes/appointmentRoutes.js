import express from "express";
import {
  getAllAppointments,
  getAllAppointmentByID,
  postAppointment,
  deleteAppointment,
} from "../controllers/appointmentController.js";

const appointmentRoute = express.Router();

appointmentRoute.route("/").get(getAllAppointments).post(postAppointment);
appointmentRoute
  .route("/:id")
  .get(getAllAppointmentByID)
  .delete(deleteAppointment);

export default appointmentRoute;
