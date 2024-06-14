import './App.css';
import About from './Component/About';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import Home from './Component/Home';
import Login from './Component/Login';
import Register from './Component/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        
      </Routes>
      

    </BrowserRouter>

  );
}

export default App;
