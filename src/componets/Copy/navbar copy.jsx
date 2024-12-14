import React, { useState } from "react";
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="navbar w-full h-[80px] flex justify-between items-center bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 relative">
            <div className="navlogo font-bold text-2xl font-serif text-white p-5">MyClass.app</div>
            
            {/* Botón de menú de hamburguesa */}
            <div className="nav_toggle mr-4 md:hidden" onClick={toggleMenu}>
                <span className="block w-6 h-1 bg-white mb-1"></span>
                <span className="block w-6 h-1 bg-white mb-1"></span>
                <span className="block w-6 h-1 bg-white"></span>
            </div>

            {/* Elementos de navegación */}
            <div className={`nav_items flex-col text-xl font-serif md:flex md:flex-row md:space-x-4 ${isOpen ? 'absolute top-[80px] left-0 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 w-full h-[calc(100vh-60px)] transition-all duration-300 ease-in-out flex' : 'hidden md:flex'}`}>
                <a href="#" className="text-white py-2 px-2 border border-transparent hover:border-white hover:bg-blue-600 transition duration-300">Inicio</a>
                <a href="#" className="text-white py-2 px-2 border border-transparent hover:border-white hover:bg-blue-600 transition duration-300">Mis Clases</a>
                <a href="#" className="text-white py-2 px-2 border border-transparent hover:border-white hover:bg-blue-600 transition duration-300">Horarios</a>
                <a href="#" className="text-white py-2 px-2 border border-transparent hover:border-white hover:bg-blue-600 transition duration-300">Contacto</a>
                
            </div>
        </div>
    );
};

export default Navbar;