// Importa la librería axios para realizar solicitudes HTTP
const axios = require('axios');

// Función asíncrona para obtener las tendencias de precios de un producto por su ID
const getProductPriceTrends = async (id) => {
  try {
    // Realiza una solicitud GET a la API para obtener las tendencias de precios del producto con el ID proporcionado
    const response = await axios.get(`https://apis-prodcutos.onrender.com/apiV1/products/${id}/tendenciasPrecios`);
    
    // Muestra los datos de la respuesta de la API (las tendencias de precios del producto)
    console.log(response.data);
    // Muestra el código de respuesta HTTP
    console.log('Response Code: '+response.status);
  } catch (error) {
    // Si ocurre un error, captura el error y muestra el mensaje
    console.error('Error en la petición:', error.message);
  }
};

// Llama a la función con un ID de producto para obtener las tendencias de precios
getProductPriceTrends(2); // Obtiene las tendencias de precios del producto con ID 2