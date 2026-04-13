import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { postAppointment } from "../services/appointmentService.js";
function AddAppointmentForm() {
  const [error, SetError] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const result = await postAppointment(data);

      if (result.status === "success") {
        alert("Vizitas sėkmingai pridėtas! 🐾");
        navigate("/");
      }
    } catch (error) {
      console.error("Klaida siunčiant:", error.message);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="petName">Pet Name</label>
          <input
            id="petName"
            type="text"
            placeholder="Pet's Name"
            {...register("petName", {
              required: "Pet name is required",
              onChange: () => SetError(""),
            })}
          />
          {errors.petName && <p>{errors.petName.message}</p>}
        </div>
        <div>
          <label htmlFor="petOwner">Pet owner</label>
          <input
            id="petOwner"
            type="text"
            placeholder="Owner's Name"
            {...register("ownerName", {
              required: "Owner name is required",
              minLength: {
                value: 3,
                message: "Owner's name must be at least 3 characters long",
              },
              onChange: () => SetError(""),
            })}
          />
          {errors.ownerName && <p>{errors.ownerName.message}</p>}
        </div>
        <div>
          <label htmlFor="aptDate">Date</label>
          <input
            id="aptDare"
            type="date"
            {...register("date", {
              required: "Date is required",
              onChange: () => SetError(""),
            })}
          />
          {errors.date && <p>{errors.date.message}</p>}
        </div>
        <div>
          <label htmlFor="aptTime">Time</label>
          <input
            id="aptTime"
            type="time"
            {...register("aptTime", {
              required: "Time is required",
              onChange: () => SetError(""),
            })}
          />
          {errors.aptTime && <p>{errors.aptTime.message}</p>}
        </div>
        <div>
          <label htmlFor="notes">Apt. Notes</label>
          <textarea
            id="notes"
            placeholder="Appointment Notes"
            {...register("notes", {
              required: "Note is required",
              minLength: {
                value: 10,
                message: "Note must be at least 10 characters long",
              },
              onChange: () => SetError(""),
            })}
          ></textarea>
          {errors.notes && <p>{errors.notes.message}</p>}
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Add</button>
      </form>
    </>
  );
}
export default AddAppointmentForm;
