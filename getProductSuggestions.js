const axios = require('axios');

const getProductSuggestions = async (id) => {
  try {
    const response = await axios.get(`https://apis-prodcutos.onrender.com/apiV1/products/${id}/sugerencias`);
    console.log(response.data);
    console.log('Response Code: '+response.status);
  } catch (error) {
    console.error('Error en la petición:', error.message);
  }
};

getProductSuggestions(2);