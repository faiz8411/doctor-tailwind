import { Route, Routes } from "react-router-dom";
import './App.css';
import About from "./pages/About/About";
import Appointment from './pages/AppointmentPage/Appointment';
import Home from './pages/Home/Home';
import Login from "./pages/Login/Login";
import NavBar from './pages/Shared/NavBar';
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login/>} />
        <Route path="appointment" element={<Appointment/>} />
       
      </Routes>
      
    </div>
  );
}

export default App;
