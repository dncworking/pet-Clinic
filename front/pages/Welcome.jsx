import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  return (
    <>
      <main>
        <header>
          <h1>Welcome to Pets Medicare</h1>
        </header>
        <section>
          <button onClick={() => navigate("/signup")}>Sign Up</button>
          {/* <button onClick={() => navigate("/login")}>Login</button> */}
        </section>
      </main>
      <footer>
        <p>&copy; 2026 Pets Medicare Clinic. All rights reserved.</p>
      </footer>
    </>
  );
}
export default Welcome;
