import React from "react";

const Footer = () => {
    return (
        <footer className="footer w-full h-auto flex flex-col items-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 p-5">
            <div className="footer_logo font-bold text-2xl font-serif text-white mb-4">MyClass.app</div>
            
            {/* Redes sociales */}
            <div className="social_icons flex space-x-4 mb-4">
                <a href="#" className="text-white hover:text-blue-600 transition duration-300">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-white hover:text-blue-600 transition duration-300">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-white hover:text-blue-600 transition duration-300">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-white hover:text-blue-600 transition duration-300">
                    <i className="fab fa-linkedin-in"></i>
                </a>
            </div>

            {/* Derechos reservados */}
            <div className="text-white text-sm">
                &copy; 2024 MyClass.app. Todos los derechos reservados.
            </div>
        </footer>
    );
};

export default Footer;