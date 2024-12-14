import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Inicio = () => {
  const [className, setClassName] = useState('');
  const [schedule, setSchedule] = useState('');
  const [teacher, setTeacher] = useState('');
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/classes');
      setClasses(response.data);
    } catch (error) {
      console.error('Error al obtener las clases:', error);
    }
  };

  const handleAddClass = async (e) => {
    e.preventDefault();

    if (!className || !schedule || !teacher) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    try {
      const newClass = { className, schedule, teacher };
      const response = await axios.post('http://localhost:5000/api/classes', newClass);
      setClasses([...classes, response.data]);
      setClassName('');
      setSchedule('');
      setTeacher('');
    } catch (error) {
      console.error('Error al agregar la clase:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 flex flex-col items-center justify-center p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600">
          Agrega tu Clase
        </h1>
        <p className="mt-2 text-lg text-gray-800">¡Nunca fue tan facil, registrar tus clases, y tareas!</p>
      </header>
      <form onSubmit={handleAddClass} className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-xl mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Agregar Nueva Clase</h2>
        <div className="mb-5">
          <label htmlFor="className" className="block text-lg font-medium text-gray-700">Nombre de la Clase</label>
          <input
            type="text"
            id="className"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            className="mt-2 p-4 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ej. Matemáticas"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="schedule" className="block text-lg font-medium text-gray-700">Horario</label>
          <input
            type="text"
            id="schedule"
            value={schedule}
            onChange={(e) => setSchedule(e.target.value)}
            className="mt-2 p-4 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ej. Lunes 9:00 AM - 11:00 AM"
          />
        </div>
        <div className="mb-8">
          <label htmlFor="teacher" className="block text-lg font-medium text-gray-700">Docente</label>
          <input
            type="text"
            id="teacher"
            value={teacher}
            onChange={(e) => setTeacher(e.target.value)}
            className="mt-2 p-4 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ej. Profesor Pérez"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-pink-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-pink-600 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Agregar Clase
        </button>
      </form>
      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-xl">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Clases Registradas</h2>
        {classes.length === 0 ? (
          <p className="text-gray-700 text-center">Aún no has registrado ninguna clase.</p>
        ) : (
          <ul className="space-y-6">
            {classes.map((clase, index) => (
              <li key={index} className="p-5 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-semibold text-gray-800">{clase.className}</h3>
                <p className="text-md text-gray-600">Horario: <span className="font-semibold">{clase.schedule}</span></p>
                <p className="text-md text-gray-600">Docente: <span className="font-semibold">{clase.teacher}</span></p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Inicio;