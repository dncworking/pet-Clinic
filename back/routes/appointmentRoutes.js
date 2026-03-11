import express from "express";
import {
  getAllAppointments,
  getAllAppointmentByID,
  postAppointment,
} from "../controllers/appointmentController.js";

const appointmentRoute = express.Router();

appointmentRoute.route("/").get(getAllAppointments).post(postAppointment);
appointmentRoute.route("/:id").get(getAllAppointmentByID);

export default appointmentRoute;
