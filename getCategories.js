const axios = require('axios');

const getCategories = async () => {
  try {
    const response = await axios.get('https://apis-prodcutos.onrender.com/apiV1/categories');
    console.log(response.data);
    console.log('Response Code: '+response.status);
  } catch (error) {
    console.error('Error en la petición:', error.message);
  }
};

getCategories();
