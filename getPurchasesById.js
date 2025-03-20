// Importa la librería axios para realizar solicitudes HTTP
const axios = require('axios');

// Función asíncrona para obtener una compra por su ID
const getPurchasesById = async (id) => {
  try {
    // Realiza una solicitud GET a la API para obtener la compra con el ID proporcionado
    const response = await axios.get(`https://apis-prodcutos.onrender.com/apiV1/purchases/${id}`);
    
    // Muestra los datos de la respuesta de la API (la compra)
    console.log(response.data);
    // Muestra el código de respuesta HTTP
    console.log('Response Code: '+response.status);
  } catch (error) {
    // Si ocurre un error, captura el error y muestra el mensaje
    console.error('Error en la petición:', error.message);
  }
};

// Llama a la función con un ID de compra para obtenerla
getPurchasesById('bAG0ysZevILxtEY4cAxw'); // Obtiene la compra con ID 'bAG0ysZevILxtEY4cAxw'