import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService.js";
import styles from "../styles/Forms.module.css";

function LoginForm() {
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setServerError("");
    try {
      const result = await login(data);

      if (result.status === "success") {
        localStorage.setItem("user", JSON.stringify(result.data.user));

        navigate("/");

        window.location.reload();
      }
    } catch (error) {
      setServerError(error.message);
    }
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
              {...register("email", {
                required: "Email is required",
                onChange: () => setServerError(""),
              })}
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
              {...register("password", {
                required: "Password is required",
                onChange: () => setServerError(""),
              })}
            />
            {errors.password && (
              <p className={styles.errorText}>{errors.password.message}</p>
            )}
          </div>
          {serverError && <p className={styles.errorText}>{serverError}</p>}
          <button className={styles.submitBtn} type="submit">
            Log In
          </button>
          <button
            type="button"
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
