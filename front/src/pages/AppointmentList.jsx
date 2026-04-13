import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { getAppointments } from "../services/appointmentService.js";
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
      <header>
        <h1>Pets Medicare</h1>
      </header>
      <button onClick={() => navigate("/addAppointment")}>
        Add Appointment
      </button>
      <main>
        <div>
          {appointments && appointments.length > 0 ? (
            appointments.map((apt) => (
              <div key={apt.id}>
                <h3>{apt.pet_name} 🐾</h3>
                <p>
                  <strong>Owner:</strong> {apt.pet_owner}
                </p>
                <p>
                  <strong>Date:</strong>
                  {new Date(apt.apt_date).toLocaleDateString("lt-LT")}
                  <br />
                  {apt.apt_time.slice(0, 5)}
                </p>
                <p>
                  <strong>Notes:</strong> {apt.apt_notes}
                </p>
              </div>
            ))
          ) : (
            <p>No appointments yet.</p>
          )}
        </div>
      </main>
    </div>
  );
}
export default AppointmentList;
