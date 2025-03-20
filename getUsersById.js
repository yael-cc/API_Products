// Importa la librería axios para realizar solicitudes HTTP
const axios = require('axios');

// Función asíncrona para obtener un usuario por su ID
const getUsersById = async (id) => {
  try {
    // Realiza una solicitud GET a la API para obtener el usuario con el ID proporcionado
    const response = await axios.get(`https://apis-prodcutos.onrender.com/apiV1/users/${id}`);
    
    // Muestra los datos de la respuesta de la API (el usuario)
    console.log(response.data);
    // Muestra el código de respuesta HTTP
    console.log('Response Code: '+response.status);
  } catch (error) {
    // Si ocurre un error, captura el error y muestra el mensaje
    console.error('Error en la petición:', error.message);
  }
};

// Llama a la función con un ID de usuario para obtenerlo
getUsersById('3WMYnpmjjq1s8QYtkwqm'); // Obtiene el usuario con ID '3WMYnpmjjq1s8QYtkwqm'