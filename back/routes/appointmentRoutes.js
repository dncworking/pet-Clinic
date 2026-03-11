import express from "express";
import { getAllAppointments } from "../controllers/appointmentController.js";

const appointmentRoute = express.Router();

appointmentRoute.route("/").get(getAllAppointments);

export default appointmentRoute;
