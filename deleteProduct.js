// Importa la librería axios para hacer solicitudes HTTP
const axios = require('axios');

// Función asíncrona para eliminar un producto por su ID
const deleteProductById = async (id) => {
  try {
    // Realiza una solicitud DELETE a la API para eliminar el producto con el ID proporcionado
    const response = await axios.delete(`https://apis-prodcutos.onrender.com/apiV1/products/${id}`);

    // Imprime la respuesta del servidor
    console.log(response.data);
    // Imprime el código de respuesta HTTP
    console.log(`Code response: ${response.status}`);
  } catch (error) {
    // Si ocurre un error, se captura y se imprime el mensaje de error
    console.error('Error:', error.message);
    // Si la respuesta del servidor está disponible, imprime detalles de la respuesta del servidor
    if (error.response) {
      console.error(`Code response: ${error.response.status}`);
      console.error('Server response:', error.response.data);
    }
  }
};

// Ejemplo de uso**
// Llama a la función con un ID de producto para eliminarlo
deleteProductById("Bt2yZz4hNx3IJMtSUYFC"); // Elimina el producto con el ID especificado