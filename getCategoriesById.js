const axios = require('axios');

const getCategoriesById = async (id) => {
  try {
    const response = await axios.get(`https://apis-prodcutos.onrender.com/apiV1/categories/${id}`);
    console.log(response.data);
    console.log('Response Code: '+response.status);
  } catch (error) {
    console.error('Error en la petición:', error.message);
  }
};

getCategoriesById(1);
