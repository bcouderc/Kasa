import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CompHeader from "./components/header";
import CompFooter from "./components/footer";

import '../src/css/style.css';

import PageAccueil from "./pages/accueil";
import PageAbout from "./pages/apropos";
import PageLogement from "./pages/logement";
import PageError from "./pages/erreur";


export default function App() {
  return (
    <Router>
      <div className="mep">
        <CompHeader />
        <Routes>
          <Route path="/" element={<PageAccueil />} />
          <Route path="/apropos" element={<PageAbout />} />
          <Route path="/location/:id" element={<PageLogement />} />
          <Route path="*" element={<PageError />} />
        </Routes>        
      </div>
      <footer>
        <CompFooter />
      </footer>
    </Router>
    
  );
}