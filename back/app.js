import express from "express";
import cors from "cors";
import appointmentRoute from "./routes/appointmentRoutes.js";
import userRoute from "./routes/userRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1/appointments", appointmentRoute);
app.use("/api/v1/users", userRoute);
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const status = err.status || "error";

  res.status(statusCode).json({
    status: status,
    message: err.message,
  });
});
export default app;
