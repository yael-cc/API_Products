// Importa la librería axios para realizar solicitudes HTTP
const axios = require('axios');

// Función asíncrona para actualizar un usuario existente
const updateUser = async (id, nombre, email, idCompras) => {
  // Crea un objeto con la información actualizada del usuario
  const usuarioActualizado = { id, nombre, email, idCompras };

  try {
    // Realiza una solicitud PUT a la API para actualizar el usuario con el ID especificado
    const response = await axios.put(`https://apis-prodcutos.onrender.com/apiV1/users/${id}`, usuarioActualizado, {
      headers: { 'Content-Type': 'application/json' } // Establece el tipo de contenido como JSON
    });

    // Muestra los datos de la respuesta de la API (usuario actualizado)
    console.log(response.data);
    // Muestra el código de respuesta HTTP
    console.log(`Code response: ${response.status}`);
  } catch (error) {
    // Si ocurre un error, captura el error y muestra el mensaje
    console.error('Error:', error.message);
    if (error.response) {
      // Si hay una respuesta del servidor, muestra el código de respuesta y los detalles del error
      console.error(`Code response: ${error.response.status}`);
      console.error('Server response:', error.response.data);
    }
  }
};

// 🔹 **Ejemplo de uso**: Llama a la función para actualizar un usuario con el ID especificado
updateUser(
  "3WMYnpmjjq1s8QYtkwqm",  // ID del usuario a actualizar
  "Juan Robles P.",  // Nombre del usuario
  "JuanR@hotmail.com",  // Nuevo email del usuario
  ["bAG0ysZevILxtEY4cAxw", "Vy5KzsGiVjI1WP3l6fWK"]  // IDs de compras realizadas por el usuario
);