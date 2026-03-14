import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Forms.module.css";
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
      <main className={styles.pageWrapper}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <h2 className={styles.header}>Sign Up</h2>

          <div className={styles.inputGroup}>
            <input
              className={styles.input}
              type="text"
              placeholder="First Name"
              {...register("firstName", {
                required: "First name is required",
              })}
            />
            {errors.firstName && (
              <p className={styles.errorText}>{errors.firstName.message}</p>
            )}
          </div>
          <div className={styles.inputGroup}>
            <input
              className={styles.input}
              type="text"
              placeholder="Last Name"
              {...register("lastName", { required: "Last name is required" })}
            />
            {errors.lastName && (
              <p className={styles.errorText}>{errors.lastName.message}</p>
            )}
          </div>
          <div className={styles.inputGroup}>
            <input
              className={styles.input}
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
            {errors.email && (
              <p className={styles.errorText}>{errors.email.message}</p>
            )}
          </div>
          <div>
            <select
              className={styles.select}
              {...register("role", { required: true })}
            >
              <option value="patient">Patient</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className={styles.inputGroup}>
            <input
              className={styles.input}
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
            {errors.password && (
              <p className={styles.errorText}>{errors.password.message}</p>
            )}
          </div>

          <button className={styles.submitBtn} type="submit">
            Sing Up
          </button>
          <button
            className={styles.loginLink}
            onClick={() => navigate("/login")}
          >
            Already have a account?
          </button>
        </form>
      </main>
    </>
  );
}
export default SignUpForm;
