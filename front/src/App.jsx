import { Routes, Route, Navigate } from "react-router-dom";
import SignUpForm from "../pages/SignUpForm.jsx";
import LoginForm from "../pages/LoginForm.jsx";
import Welcome from "../pages/Welcome.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </>
  );
}

export default App;
