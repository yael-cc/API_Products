// Importa la librería axios para realizar solicitudes HTTP
const axios = require('axios');

// Función asíncrona para agregar un nuevo usuario
const addUser = async (id, nombre, email, idCompras) => {
  // Crea un objeto con la información del nuevo usuario
  const nuevoUsuario = { id, nombre, email, idCompras };

  try {
    // Realiza una solicitud POST a la API para agregar el nuevo usuario
    const response = await axios.post('https://apis-prodcutos.onrender.com/apiV1/users', nuevoUsuario, {
      headers: { 'Content-Type': 'application/json' } // Establece el tipo de contenido como JSON
    });

    // Muestra los datos de la respuesta de la API (el usuario agregado)
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

// **Ejemplo de uso**: Llama a la función para agregar un nuevo usuario
addUser(
  "9823ndwaj_prueba",  // ID único del usuario
  "Julio Perez",  // Nombre del usuario
  "juperez@gmail.com",  // Email del usuario
  ["bAG0ysZevILxtEY4cAxw", "Vy5KzsGiVjI1WP3l6fWK"]  // IDs de las compras realizadas por el usuario
);