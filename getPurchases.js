// Importa la librería axios para realizar solicitudes HTTP
const axios = require('axios');

// Función asíncrona para obtener todas las compras desde la API
const getPurchases = async () => {
  try {
    // Realiza una solicitud GET a la API para obtener todas las compras
    const response = await axios.get('https://apis-prodcutos.onrender.com/apiV1/purchases');
    
    // Muestra los datos de la respuesta de la API (todas las compras)
    console.log(response.data);
    // Muestra el código de respuesta HTTP
    console.log('Response Code: '+response.status);
  } catch (error) {
    // Si ocurre un error, captura el error y muestra el mensaje
    console.error('Error en la petición:', error.message);
  }
};

// Llama a la función para obtener todas las compras
getPurchases(); // Obtiene todas las compras disponibles