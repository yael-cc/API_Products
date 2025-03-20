const axios = require('axios');

const addOrder = async (productosId, idUsuario, total, fecha) => {
  const nuevaOrden = { productosId, idUsuario, total, fecha };

  try {
    const response = await axios.post('https://apis-prodcutos.onrender.com/apiV1/purchases', nuevaOrden, {
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

// **Ejemplo de uso**
addOrder(
  ["2", "3"],  // IDs de productos
  "3WMYnpmjjq1s8QYtkwqm",  // ID del usuario
  800,  // Total de la compra
  "2024-03-05T20:15:00Z"  // Fecha de la orden
);
