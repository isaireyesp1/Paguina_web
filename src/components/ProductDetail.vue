<template>
    <div class="product-detail">
      <h1>{{ product.name }}</h1>
      <p>{{ product.description }}</p>
      <p>{{ product.price }}$</p>
      <button>Agregar al Carrito</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductDetail',
    props: {
      productId: String
    },
    data() {
      return {
        product: {
          name: 'Producto 1',
          description: 'Descripción del producto',
          price: 100
        }
      }
    },
    created() {
      // Aquí podrías hacer una solicitud API para obtener los detalles del producto
    }
  }
  </script>
  
  <style scoped>
  /* Estilos para la página de detalles del producto */
  </style>
  