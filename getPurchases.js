const axios = require('axios');

const getPurchases = async () => {
  try {
    const response = await axios.get('https://apis-prodcutos.onrender.com/apiV1/purchases');
    console.log(response.data);
    console.log('Response Code: '+response.status);
  } catch (error) {
    console.error('Error en la petición:', error.message);
  }
};

getPurchases();
