import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { getAppointments } from "../services/appointmentService.js";
import styles from "../styles/AppointmentList.module.css";
function AppointmentList() {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await getAppointments();
        const actualData = response.data || response;
        setAppointments(Array.isArray(actualData) ? actualData : []);
      } catch (err) {
        console.error(err);
      }
    };
    fetchAppointments();
  }, []);
  return (
    <div>
      <header className={styles.header}>
        <h1 className={styles.h1}>Pets Medicare</h1>
      </header>
      <button
        className={styles.button}
        onClick={() => navigate("/addAppointment")}
      >
        Add Appointment
      </button>
      <main className={styles.main}>
        <div className={styles.appointments}>
          {appointments && appointments.length > 0 ? (
            appointments.map((apt) => (
              <div key={apt.id}>
                <h3 className={styles.petName}>{apt.pet_name} 🐾</h3>
                <p className={styles.ownerName}>
                  <strong>Owner:</strong> {apt.pet_owner}
                </p>
                <p className={styles.date}>
                  <strong>Date:</strong>
                  {new Date(apt.apt_date).toLocaleDateString("lt-LT")}
                  <br />
                  {apt.apt_time.slice(0, 5)}
                </p>
                <p className={styles.notes}>
                  <strong>Notes:</strong> {apt.apt_notes}
                </p>
              </div>
            ))
          ) : (
            <p className={styles.noFound}>No appointments yet.</p>
          )}
        </div>
      </main>
    </div>
  );
}
export default AppointmentList;
