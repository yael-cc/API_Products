// Importa la librería axios para realizar solicitudes HTTP
const axios = require('axios');

// Función asíncrona para obtener todos los usuarios desde la API
const getUsers = async () => {
  try {
    // Realiza una solicitud GET a la API para obtener todos los usuarios
    const response = await axios.get('https://apis-prodcutos.onrender.com/apiV1/users');
    
    // Muestra los datos de la respuesta de la API (todos los usuarios)
    console.log(response.data);
    // Muestra el código de respuesta HTTP
    console.log('Response Code: '+response.status);
  } catch (error) {
    // Si ocurre un error, captura el error y muestra el mensaje
    console.error('Error en la petición:', error.message);
  }
};

// Llama a la función para obtener todos los usuarios
getUsers(); // Obtiene todos los usuarios disponibles