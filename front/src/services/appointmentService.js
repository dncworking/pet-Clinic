import { api } from "./api.js";

export const postAppointment = async (appointmentData) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user || !user.id) {
      throw new Error("User not found. Please log in again.");
    }

    const fullData = {
      ...appointmentData,
      user_id: user.id,
    };

    const response = await api.post("/appointments/", fullData);

    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || "Something is wrong";
    throw new Error(errorMessage);
  }
};
