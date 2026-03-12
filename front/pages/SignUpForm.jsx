import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
function SignUpForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Sign Up</h2>
        <section>
          <article>
            <input
              type="text"
              placeholder="First Name"
              {...register("firstName", { required: "First name is required" })}
            />
            {errors.firstName && <p>{errors.firstName.message}</p>}
          </article>
          <article>
            <input
              type="text"
              placeholder="Last Name"
              {...register("lastName", { required: "Last name is required" })}
            />
            {errors.lastName && <p>{errors.lastName.message}</p>}
          </article>
          <article>
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </article>
          <article>
            <label>What are you?</label>
            <select
              name="role"
              id="role"
              {...register("role", { required: true })}
            >
              <option value="patient">Patient</option>
              <option value="admin">Admin</option>
            </select>
          </article>
          <article>
            <input
              type="password"
              placeholder="Paswword"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must have at least 6 simbols",
                },
              })}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </article>
        </section>
        <button type="submit">Register</button>
      </form>
      <button onClick={() => navigate("/login")}>
        Already have a account?
      </button>
    </>
  );
}
export default SignUpForm;
