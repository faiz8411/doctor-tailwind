import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from './pages/Home/Home';
import NavBar from './pages/Shared/NavBar';
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
       
      </Routes>
    </div>
  );
}

export default App;
