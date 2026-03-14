import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Forms.module.css";

function LoginForm() {
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
          <h2 className={styles.header}>Login</h2>

          <div className={styles.inputGroup}>
            <input
              className={styles.input}
              type="email"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className={styles.errorText}>{errors.email.message}</p>
            )}
          </div>
          <div className={styles.inputGroup}>
            <input
              className={styles.input}
              type="password"
              placeholder="Password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className={styles.errorText}>{errors.password.message}</p>
            )}
          </div>

          <button className={styles.submitBtn} type="submit">
            Log In
          </button>
          <button
            className={styles.loginLink}
            onClick={() => navigate("/signup")}
          >
            Don't have an account? Sign Up
          </button>
        </form>
      </main>
    </>
  );
}
export default LoginForm;
