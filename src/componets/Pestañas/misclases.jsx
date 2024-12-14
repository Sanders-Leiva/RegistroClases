import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MisClases = () => {
  const [classes, setClasses] = useState([]);
  const [editingClass, setEditingClass] = useState(null);
  const [formData, setFormData] = useState({ className: '', schedule: '', teacher: '' });

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/classes');
      setClasses(response.data);
    } catch (error) {
      console.error('Error fetching classes:', error);
    }
  };

  const handleEditClick = (clase) => {
    setEditingClass(clase._id);
    setFormData({ className: clase.className, schedule: clase.schedule, teacher: clase.teacher });
  };

  const handleDeleteClick = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/classes/${id}`);
      setClasses(classes.filter(clase => clase._id !== id));
    } catch (error) {
      console.error('Error deleting class:', error);
    }
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:5000/api/classes/${editingClass}`, formData);
      setClasses(classes.map(clase => (clase._id === editingClass ? response.data : clase)));
      setEditingClass(null);
      setFormData({ className: '', schedule: '', teacher: '' });
    } catch (error) {
      console.error('Error updating class:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 p-6">
        <section className="text-center mb-8">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600">
           Mis Clases
          </h1>
          <p className="mt-4 text-lg text-gray-800">
            Organiza tus clases, horarios y tareas de manera fácil y eficiente.
          </p>
        </section>
        <section className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Clases Registradas</h2>
          {classes.length === 0 ? (
            <p className="text-gray-700 text-center">No hay clases registradas.</p>
          ) : (
            <ul className="space-y-6">
              {classes.map((clase, index) => (
                <li key={index} className="p-5 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
                  {editingClass === clase._id ? (
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      <div>
                        <label className="block text-lg font-medium text-gray-700">Nombre de la Clase</label>
                        <input
                          type="text"
                          name="className"
                          value={formData.className}
                          onChange={handleFormChange}
                          className="mt-2 p-4 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-lg font-medium text-gray-700">Horario</label>
                        <input
                          type="text"
                          name="schedule"
                          value={formData.schedule}
                          onChange={handleFormChange}
                          className="mt-2 p-4 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-lg font-medium text-gray-700">Docente</label>
                        <input
                          type="text"
                          name="teacher"
                          value={formData.teacher}
                          onChange={handleFormChange}
                          className="mt-2 p-4 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-pink-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-pink-600 transition duration-300 ease-in-out transform hover:scale-105"
                      >
                        Guardar Cambios
                      </button>
                    </form>
                  ) : (
                    <>
                      <h3 className="text-xl font-semibold text-gray-800">{clase.className}</h3>
                      <p className="text-md text-gray-600">Horario: <span className="font-semibold">{clase.schedule}</span></p>
                      <p className="text-md text-gray-600">Docente: <span className="font-semibold">{clase.teacher}</span></p>
                      <div className="mt-4 flex space-x-4">
                        <button
                          onClick={() => handleEditClick(clase)}
                          className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
                        >
                          Editar
                        </button>
                        <button
                          onClick={() => handleDeleteClick(clase._id)}
                          className="py-2 px-4 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-300"
                        >
                          Eliminar
                        </button>
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
};

export default MisClases;