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

export const postAppointmentM = async (appointment) => {
  const {
    pet_name,
    owner_name,
    description,
    appointment_date,
    appointment_time,
  } = appointment;

  const data = await sql`
  INSERT INTO pets_appointments
  (  pet_name,
    owner_name,
    description,
    appointment_date,
    appointment_time)
    VALUES
    (${pet_name},${owner_name},${description},${appointment_date},${appointment_time})
    RETURNING *`;
  return data[0];
};

export const deleteAppointmentM = async (id) => {
  const data = await sql`
    DELETE FROM pets_appointments
    WHERE id = ${id}
    RETURNING *`;
  return data[0];
};
