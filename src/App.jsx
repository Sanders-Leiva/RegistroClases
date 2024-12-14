import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componets/navbar';
import Inicio from './componets/inicio';
import MisClases from './componets/Pestañas/misclases';
import Horarios from './componets/Pestañas/horarios';
import Contacto from './componets/Pestañas/contacto';
import Footer from './componets/footer';
import './index.css';


const App = () => {
    return (
        <Router>
        <div className="ccontainer p-auto m-auto bg-gradient-to-r from-blue-500 to-cyan-400">
            <Navbar />
            <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/misclases" element={<MisClases />} />
          <Route path="/horarios" element={<Horarios />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    );
};

export default App;

