const axios = require('axios');

const deleteUserById = async (id) => {
  try {
    const response = await axios.delete(`https://apis-prodcutos.onrender.com/apiV1/users/${id}`);

    console.log(`✅ Usuario con ID ${id} eliminado.`);
    console.log(`📡 Código de respuesta: ${response.status}`);
  } catch (error) {
    console.error('❌ Error en la petición:', error.message);
    if (error.response) {
      console.error(`📡 Código de respuesta: ${error.response.status}`);
      console.error('📩 Respuesta del servidor:', error.response.data);
    }
  }
};

deleteUserById("123"); // Elimina el usuario con su ID
