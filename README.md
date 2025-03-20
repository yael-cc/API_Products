# Ejercicio API REST NodeJS

## Fecha de entrega: 20 de marzo del 2025

## Docente: 
M.C. Israel Arjona Vizcaíno

## Equipo:
- Daphne Airam Corona Flores - 20400720
- Luis Angel Yael Cuevas Cruz- 21400664
- Jesús Ismael Betancourt Espericueta - 21400654
- Yves Manuel Portugal De La Paz - 21400748


# Gestión de Productos, Compras y Usuarios

Este proyecto consiste en un **cliente** para interactuar con una **API RESTful** que permite gestionar productos, compras y usuarios. Está desarrollado en **Node.js** y utiliza la librería **Axios** para realizar solicitudes HTTP a la API.

El objetivo principal de este proyecto es ofrecer metodos para interactuar con una base de datos de productos, compras realizadas por usuarios y la gestión de la información de los usuarios.

## Contexto

La API con la que se interactúa proporciona una serie de funcionalidades clave relacionadas con productos, compras y usuarios:

### Productos

Permite gestionar productos, realizar operaciones como agregar nuevos productos, obtener información sobre productos específicos, y actualizar productos existentes. 

### Compras

El cliente también interactúa con la API para registrar compras realizadas por los usuarios, asociando productos a una compra y calculando el total. Además, se pueden consultar las compras realizadas.

### Usuarios

Los usuarios pueden registrarse en el sistema con su información personal y mantener un historial de compras realizadas. También pueden actualizar su información en cualquier momento.

## Funcionalidades

A través de esto, se pueden realizar las siguientes acciones (y algunas más, no mencionadas):

1. **Agregar productos** a la base de datos con su información, como nombre, precio, categoría y detalles técnicos.
2. **Consultar productos** por su ID para obtener la información detallada de cada uno.
3. **Actualizar productos** existentes con nueva información, como cambios en el precio o detalles del producto.
4. **Registrar compras** asociadas a un usuario, vinculando productos y calculando el total de la compra.
5. **Consultar compras** realizadas por un usuario, proporcionando una visión general de su historial de compras.
6. **Registrar usuarios** con su nombre, correo electrónico y las compras que hayan realizado.
7. **Actualizar usuarios** con nueva información personal y de compras.

## Tecnologías Utilizadas

Esto fue desarrollado con **Node.js**, aprovechando las capacidades del entorno de ejecución de JavaScript en el servidor. Para facilitar las solicitudes HTTP, se utilizó **Axios**, una librería que simplifica la interacción con la API RESTful.

También se sigue el estilo **RESTful** para la organización de las solicitudes y respuestas HTTP, permitiendo una comunicación eficiente con la API.

--------------------------------------------------------------------------------------------------------------