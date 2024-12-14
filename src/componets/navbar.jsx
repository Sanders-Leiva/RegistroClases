import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar w-full h-[80px] flex justify-between items-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 relative">
      <div className="navlogo p-5">
        <h1 className="text-4xl font-mono text-transparent bg-clip-text bg-gradient-to-r text-white">MyClass.app</h1>
      </div>
      
      {/* Botón de menú de hamburguesa */}
      <div className="nav_toggle mr-4 md:hidden" onClick={toggleMenu}>
        <span className="block w-6 h-1 bg-white mb-1"></span>
        <span className="block w-6 h-1 bg-white mb-1"></span>
        <span className="block w-6 h-1 bg-white"></span>
      </div>

      {/* Elementos de navegación */}
      <div className={`nav_items flex-col text-xl font-serif md:flex md:flex-row md:space-x-4 ${isOpen ? 'absolute top-[80px] left-0 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 w-full h-[calc(100vh-60px)] transition-all duration-300 ease-in-out flex' : 'hidden md:flex'}`}>
        <button onClick={() => navigate('/')} className="nav_button text-white py-2 px-4 border border-transparent transition duration-300 ease-in-out transform hover:border-white hover:bg-blue-600 hover:scale-105 hover:shadow-lg">Inicio</button>
        <button onClick={() => navigate('/misclases')} className="nav_button text-white py-2 px-4 border border-transparent transition duration-300 ease-in-out transform hover:border-white hover:bg-blue-600 hover:scale-105 hover:shadow-lg">Mis Clases</button>
        <button onClick={() => navigate('/horarios')} className="nav_button text-white py-2 px-4 border border-transparent transition duration-300 ease-in-out transform hover:border-white hover:bg-blue-600 hover:scale-105 hover:shadow-lg">Tareas</button>
        <button onClick={() => navigate('/contacto')} className="nav_button text-white py-2 px-4 border border-transparent transition duration-300 ease-in-out transform hover:border-white hover:bg-blue-600 hover:scale-105 hover:shadow-lg">Contacto</button>
      </div>
    </div>
  );
};

export default Navbar;