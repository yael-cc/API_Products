const axios = require('axios');

const deleteProductById = async (id) => {
  try {
    const response = await axios.delete(`https://apis-prodcutos.onrender.com/apiV1/products/${id}`);

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
deleteProductById("Bt2yZz4hNx3IJMtSUYFC"); // Elimina el producto con ID 1
