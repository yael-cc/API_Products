const axios = require('axios');

const addUser = async (id, nombre, email, idCompras) => {
  const nuevoUsuario = { id, nombre, email, idCompras };

  try {
    const response = await axios.post('https://apis-prodcutos.onrender.com/apiV1/users', nuevoUsuario, {
      headers: { 'Content-Type': 'application/json' }
    });

    console.log(response.data);
    console.log(`Code response: ${response.status}`);
  } catch (error) {
    console.error('Error:', error.message);
    if (error.response) {
      console.error(`Code response: ${error.response.status}`);
      console.error('Server response:', error.response.data);
    }
  }
};

// **Ejemplo de uso**
addUser(
  "9823ndwaj_prueba",  // ID del usuario
  "Julio Perez",  // Nombre
  "juperez@gmail.com",  // Email
  ["bAG0ysZevILxtEY4cAxw", "Vy5KzsGiVjI1WP3l6fWK"]  // IDs de compras realizadas
);
