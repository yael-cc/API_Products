// Importa la librería axios para realizar solicitudes HTTP
const axios = require('axios');

// Función asíncrona para obtener una categoría por su ID
const getCategoriesById = async (id) => {
  try {
    // Realiza una solicitud GET a la API para obtener la categoría con el ID proporcionado
    const response = await axios.get(`https://apis-prodcutos.onrender.com/apiV1/categories/${id}`);
    
    // Muestra los datos de la respuesta de la API (la categoría)
    console.log(response.data);
    // Muestra el código de respuesta HTTP
    console.log('Response Code: '+response.status);
  } catch (error) {
    // Si ocurre un error, captura el error y muestra el mensaje
    console.error('Error en la petición:', error.message);
  }
};

// Llama a la función con un ID de categoría para obtenerla
getCategoriesById(1); // Obtiene la categoría con ID 1