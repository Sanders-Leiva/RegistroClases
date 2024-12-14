import React from 'react';
import Navbar from '../navbar';
import Inicio from '../inicio';
import Footer from '../footer';
import './index.css';

const App = () => {
    return (
        <div className="ccontainer p-auto m-auto bg-gradient-to-r from-blue-500 to-cyan-400">
            <Navbar />
            <Inicio />
            <Footer />
        </div>
    );
};

export default App;

