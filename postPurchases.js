// Importa la librería axios para realizar solicitudes HTTP
const axios = require('axios');

// Función asíncrona para agregar una nueva orden de compra
const addOrder = async (productosId, idUsuario, total, fecha) => {
  // Crea un objeto con la información de la nueva orden
  const nuevaOrden = { productosId, idUsuario, total, fecha };

  try {
    // Realiza una solicitud POST a la API para agregar la nueva orden
    const response = await axios.post('https://apis-prodcutos.onrender.com/apiV1/purchases', nuevaOrden, {
      headers: { 'Content-Type': 'application/json' } // Establece el tipo de contenido como JSON
    });

    // Muestra los datos de la respuesta de la API (la orden de compra)
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

// Ejemplo de uso: Llama a la función para agregar una nueva orden de compra
addOrder(
  ["2", "3"],  // IDs de los productos que se están comprando
  "3WMYnpmjjq1s8QYtkwqm",  // ID del usuario que hace la compra
  800,  // Total de la compra
  "2024-03-05T20:15:00Z"  // Fecha de la orden en formato ISO 8601
);