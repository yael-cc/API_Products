const axios = require('axios');

const deletePurchaseById = async (id) => {
  try {
    const response = await axios.delete(`https://apis-prodcutos.onrender.com/apiV1/purchases/${id}`);

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

// Ejemplo de uso
deletePurchaseById("bAG0ysZevILxtEY4cAxw"); // Elimina la compra con su ID
