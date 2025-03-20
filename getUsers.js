const axios = require('axios');

const getUsers = async () => {
  try {
    const response = await axios.get('https://apis-prodcutos.onrender.com/apiV1/users');
    console.log(response.data);
    console.log('Response Code: '+response.status);
  } catch (error) {
    console.error('Error en la petición:', error.message);
  }
};

getUsers();