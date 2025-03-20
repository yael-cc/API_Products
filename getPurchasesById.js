const axios = require('axios');

const getPurchasesById = async (id) => {
  try {
    const response = await axios.get(`https://apis-prodcutos.onrender.com/apiV1/purchases/${id}`);
    console.log(response.data);
    console.log('Response Code: '+response.status);
  } catch (error) {
    console.error('Error en la petición:', error.message);
  }
};

getPurchasesById('bAG0ysZevILxtEY4cAxw');
