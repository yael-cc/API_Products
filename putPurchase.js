// Importa la librería axios para realizar solicitudes HTTP
const axios = require('axios');

// Función asíncrona para actualizar una compra existente
const updatePurchase = async (id, productosId, idUsuario, total, fecha) => {
  // Crea un objeto con la información actualizada de la compra
  const compraActualizada = { productosId, idUsuario, total, fecha };

  try {
    // Realiza una solicitud PUT a la API para actualizar la compra con el ID especificado
    const response = await axios.put(`https://apis-prodcutos.onrender.com/apiV1/purchases/${id}`, compraActualizada, {
      headers: { 'Content-Type': 'application/json' } // Establece el tipo de contenido como JSON
    });

    // Muestra los datos de la respuesta de la API (compra actualizada)
    console.log(response.data);
    // Muestra el código de respuesta HTTP
    console.log(`Code response: ${response.status}`);
  } catch (error) {
    // Si ocurre un error, captura el error y muestra el mensaje
    console.error('Error:', error.message);
    if (error.response) {
      // Si hay una respuesta del servidor, muestra el código de respuesta y los detalles del error
      console.error(`Code response: ${error.response.status}`);
      console.error('Server response:', error.response.data);
    }
  }
};

// 🔹 **Ejemplo de uso**: Llama a la función para actualizar una compra con el ID especificado
updatePurchase(
  "bAG0ysZevILxtEY4cAxw",  // ID de la compra a actualizar
  ["2", "3"],  // IDs de productos en la compra
  "3WMYnpmjjq1s8QYtkwqm",  // ID del usuario que realizó la compra
  755,  // Nuevo total de la compra
  "2024-03-05T20:15:00Z"  // Nueva fecha de la compra
);