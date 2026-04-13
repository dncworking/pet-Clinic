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
        navigate("/appointmenList");
      }
    } catch (error) {
      console.error("Klaida siunčiant:", error.message);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="pet_name">Pet Name</label>
          <input
            id="pet_name"
            type="text"
            placeholder="Pet's Name"
            {...register("pet_name", {
              required: "Pet name is required",
              onChange: () => SetError(""),
            })}
          />
          {errors.pet_name && <p>{errors.pet_name.message}</p>}
        </div>
        <div>
          <label htmlFor="pet_owner">Pet owner</label>
          <input
            id="pet_owner"
            type="text"
            placeholder="Owner's Name"
            {...register("pet_owner", {
              required: "Owner name is required",
              minLength: {
                value: 3,
                message: "Owner's name must be at least 3 characters long",
              },
              onChange: () => SetError(""),
            })}
          />
          {errors.pet_owner && <p>{errors.pet_owner.message}</p>}
        </div>
        <div>
          <label htmlFor="apt_date">Date</label>
          <input
            id="apt_date"
            type="date"
            {...register("apt_date", {
              required: "Date is required",
              onChange: () => SetError(""),
            })}
          />
          {errors.apt_date && <p>{errors.apt_date.message}</p>}
        </div>
        <div>
          <label htmlFor="apt_time">Time</label>
          <input
            id="apt_time"
            type="time"
            {...register("apt_time", {
              required: "Time is required",
              onChange: () => SetError(""),
            })}
          />
          {errors.apt_time && <p>{errors.apt_time.message}</p>}
        </div>
        <div>
          <label htmlFor="apt_notes">Apt. Notes</label>
          <textarea
            id="apt_notes"
            placeholder="Appointment Notes"
            {...register("apt_notes", {
              required: "Note is required",
              minLength: {
                value: 10,
                message: "Note must be at least 10 characters long",
              },
              onChange: () => SetError(""),
            })}
          ></textarea>
          {errors.apt_notes && <p>{errors.apt_notes.message}</p>}
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Add</button>
      </form>
    </>
  );
}
export default AddAppointmentForm;
