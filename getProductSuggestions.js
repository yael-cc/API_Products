// Importa la librería axios para realizar solicitudes HTTP
const axios = require('axios');

// Función asíncrona para obtener las sugerencias de productos relacionadas con un producto por su ID
const getProductSuggestions = async (id) => {
  try {
    // Realiza una solicitud GET a la API para obtener las sugerencias de productos relacionadas con el producto con el ID proporcionado
    const response = await axios.get(`https://apis-prodcutos.onrender.com/apiV1/products/${id}/sugerencias`);
    
    // Muestra los datos de la respuesta de la API (las sugerencias de productos)
    console.log(response.data);
    // Muestra el código de respuesta HTTP
    console.log('Response Code: '+response.status);
  } catch (error) {
    // Si ocurre un error, captura el error y muestra el mensaje
    console.error('Error en la petición:', error.message);
  }
};

// Llama a la función con un ID de producto para obtener las sugerencias
getProductSuggestions(2); // Obtiene las sugerencias de productos para el producto con ID 2