import React from "react";
import '../src/css/style.css';
import Navbar from "./components/header";



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Accueil from "./pages/accueil";
import About from "./pages/apropos";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/apropos" element={<About />} />
        </Routes>        
      </div>
    </Router>
  );
}

export default App;
