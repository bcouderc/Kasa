import React from "react";
import '../src/css/style.css';
import Navbar from "./components/header";
import PiedDePage from "./components/footer";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Accueil from "./pages/accueil";
import About from "./pages/apropos";
import Logements from "./pages/logement";
import Error from "./pages/erreur";


function App() {
  return (
    <Router>
      <div className="mep">
        <Navbar />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/apropos" element={<About />} />
          <Route path="/logement/:id" element={<Logements />} />
          <Route path="*" element={<Error />} />
        </Routes>        
      </div>
      <footer>
        <PiedDePage />
      </footer>
    </Router>
    
  );
}

export default App;
