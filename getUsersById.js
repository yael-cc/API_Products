const axios = require('axios');

const getUsersById = async (id) => {
  try {
    const response = await axios.get(`https://apis-prodcutos.onrender.com/apiV1/users/${id}`);
    console.log(response.data);
    console.log('Response Code: '+response.status);
  } catch (error) {
    console.error('Error en la petición:', error.message);
  }
};

getUsersById('3WMYnpmjjq1s8QYtkwqm');