import express from "express";
import {
  getAllAppointments,
  getAllAppointmentByID,
} from "../controllers/appointmentController.js";

const appointmentRoute = express.Router();

appointmentRoute.route("/").get(getAllAppointments);
appointmentRoute.route("/:id").get(getAllAppointmentByID);

export default appointmentRoute;
