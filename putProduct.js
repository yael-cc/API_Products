const axios = require('axios');

const updateProduct = async (id, nombre, precio, enStock, categoria, detalles, historialPrecios) => {
  const productoActualizado = { id, nombre, precio, enStock, categoria, detalles, historialPrecios };

  try {
    const response = await axios.put(`https://apis-prodcutos.onrender.com/apiV1/products/${id}`, productoActualizado, {
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
updateProduct(
  "HQaEdtZumFVNJbDOphny",
  "Smartphone Pro MAX", //Nombre 
    899,  //Precio
    true,  //True o false
    "Electrónica", //Categoria
    { //Detalles 
      procesador: "Snapdragon 8 Gen 2",
      ram: "12GB",
      almacenamiento: "256GB",
    },
    [ //Historial de precios
      {
        fecha: "2023-09-15T00:00:00Z",
        precioAnterior: 950
      }
    ]
);