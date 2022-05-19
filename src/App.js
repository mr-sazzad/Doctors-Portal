import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import About from "./Components/About/About";
import Appointment from "./Components/Appointment/Appointment";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import Reviews from "./Components/Reviews/Reviews";
import Nav from "./Components/Shared/Nav/Nav";
import SignUp from "./Components/Signup/SignUp";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
