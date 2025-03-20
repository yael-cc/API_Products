// Importa la librería axios para realizar solicitudes HTTP
const axios = require('axios');

// Función asíncrona para actualizar un producto existente
const updateProduct = async (id, nombre, precio, enStock, categoria, detalles, historialPrecios) => {
  // Crea un objeto con la información actualizada del producto
  const productoActualizado = { id, nombre, precio, enStock, categoria, detalles, historialPrecios };

  try {
    // Realiza una solicitud PUT a la API para actualizar el producto con el ID especificado
    const response = await axios.put(`https://apis-prodcutos.onrender.com/apiV1/products/${id}`, productoActualizado, {
      headers: { 'Content-Type': 'application/json' } // Establece el tipo de contenido como JSON
    });

    // Muestra los datos de la respuesta de la API (producto actualizado)
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

// 🔹 **Ejemplo de uso**: Llama a la función para actualizar un producto con el ID especificado
updateProduct(
  "HQaEdtZumFVNJbDOphny",  // ID del producto a actualizar
  "Smartphone Pro MAX", // Nuevo nombre del producto
  899,  // Nuevo precio
  true,  // Stock disponible (true o false)
  "Electrónica", // Nueva categoría
  { // Nuevos detalles del producto
    procesador: "Snapdragon 8 Gen 2",
    ram: "12GB",
    almacenamiento: "256GB",
  },
  [ // Nuevo historial de precios
    {
      fecha: "2023-09-15T00:00:00Z",
      precioAnterior: 950 // Precio anterior del producto
    }
  ]
);