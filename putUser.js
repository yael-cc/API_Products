const axios = require('axios');

const updateUser = async (id, nombre, email, idCompras) => {
  const usuarioActualizado = {id, nombre, email, idCompras };

  try {
    const response = await axios.put(`https://apis-prodcutos.onrender.com/apiV1/users/${id}`, usuarioActualizado, {
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

// 🔹 **Ejemplo de uso**
updateUser(
  "3WMYnpmjjq1s8QYtkwqm",  // ID del usuario
  "Juan Robles P.",  // Nombre
  "JuanR@hotmail.com",  // Email
  ["bAG0ysZevILxtEY4cAxw", "Vy5KzsGiVjI1WP3l6fWK"]  // IDs de compras realizadas
);