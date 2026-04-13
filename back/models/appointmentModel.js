import { sql } from "../config/db.js";

export const getAllAppointmentsM = async () => {
  const data = await sql`
    SELECT * FROM pets_appointments`;
  return data;
};

export const getAllAppointmentByIDM = async (userId) => {
  const data = await sql`
    SELECT * FROM pets_appointments
    WHERE user_id = ${userId}
    ORDER BY created_at DESC`;
  return data;
};

export const postAppointmentM = async (appointment, userId) => {
  const { pet_name, pet_owner, apt_date, apt_time, apt_notes } = appointment;

  const data = await sql`
  INSERT INTO pets_appointments
  (  pet_name,
    pet_owner,
    apt_date,
    apt_time,
    apt_notes,
    user_id)
    VALUES
    (${pet_name},${pet_owner},${apt_date},${apt_time},${apt_notes}, ${userId})
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
