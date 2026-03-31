import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
function AddAppointmentForm() {
  const [error, SetError] = useState();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (params) => {};
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
          {errors.petOwner && <p>{errors.petOwner.message}</p>}
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
          {errors.aptDate && <p>{errors.aptDate.message}</p>}
        </div>
        <div>
          <label htmlFor="aptTime">Time</label>
          <input
            id="aptTime"
            type="time"
            {...register("time", {
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
            {...register("note", {
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
      </form>
    </>
  );
}
export default AddAppointmentForm;
