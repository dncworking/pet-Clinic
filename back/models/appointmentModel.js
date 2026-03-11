import { sql } from "../config/db.js";

export const getAllAppointmentsM = async () => {
  const data = await sql`
    SELECT * FROM pets_appointments`;
  return data;
};

export const getAllAppointmentByIDM = async (id) => {
  const data = await sql`
    SELECT * FROM pets_appointments
    WHERE id = ${id}`;
  return data[0];
};
