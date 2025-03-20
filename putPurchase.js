const axios = require('axios');

const updatePurchase = async (id, productosId, idUsuario, total, fecha) => {
  const compraActualizada = { productosId, idUsuario, total, fecha };

  try {
    const response = await axios.put(`https://apis-prodcutos.onrender.com/apiV1/purchases/${id}`, compraActualizada, {
      headers: { 'Content-Type': 'application/json' }
    });

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
updatePurchase(
  "bAG0ysZevILxtEY4cAxw",  // ID de la compra a actualizar
  ["2", "3"],  // IDs de productos
  "3WMYnpmjjq1s8QYtkwqm",  // ID del usuario
  755,  // Total de la compra
  "2024-03-05T20:15:00Z"  // Fecha de la orden
);
