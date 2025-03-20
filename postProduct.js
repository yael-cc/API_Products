// Importa la librería axios para realizar solicitudes HTTP
const axios = require('axios');

// Función asíncrona para agregar un nuevo producto
const addProduct = async (nombre, precio, enStock, categoria, detalles, historialPrecios) => {
  // Crea un objeto con la información del nuevo producto
  const nuevoProducto = { nombre, precio, enStock, categoria, detalles, historialPrecios };

  try {
    // Realiza una solicitud POST a la API para agregar el nuevo producto
    const response = await axios.post('https://apis-prodcutos.onrender.com/apiV1/products', nuevoProducto, {
      headers: { 'Content-Type': 'application/json' } // Establece el tipo de contenido como JSON
    });

    // Muestra los datos de la respuesta de la API (el producto agregado)
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

// Llama a la función para agregar un nuevo producto
addProduct(
  // ID autogenerado
  "Smartphone Pro",  // Nombre del producto
  899,  // Precio del producto
  true,  // Disponibilidad en stock (true o false)
  "Electrónica",  // Categoría del producto
  {  // Detalles del producto
    procesador: "Snapdragon 8 Gen 2",
    ram: "12GB",
    almacenamiento: "256GB",
  },
  [  // Historial de precios
    {
      fecha: "2023-09-15T00:00:00Z",  // Fecha del cambio de precio
      precioAnterior: 950  // Precio anterior
    }
  ]
);