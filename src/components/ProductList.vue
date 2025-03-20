<template>
    <div class="product-list">
      <div v-for="product in products" :key="product.id" class="product-card">
        <img :src="product.image" alt="Producto" />
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <p class="price">${{ product.price }}</p>
        <button @click="addToCart(product)">Añadir al carrito</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductList',
    props: {
      products: Array,
    },
    methods: {
      addToCart(product) {
        this.$store.commit('addToCart', product); // Llama a Vuex para agregar al carrito
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos de la lista de productos */
  .product-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 20px;
  }
  
  .product-card {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .product-card img {
    max-width: 100%;
    border-radius: 8px;
  }
  
  .product-card h3 {
    font-size: 18px;
    color: #333;
    margin: 10px 0;
  }
  
  .product-card p {
    color: #666;
    margin-bottom: 12px;
  }
  
  .product-card .price {
    font-size: 20px;
    font-weight: bold;
    color: #007bff;
  }
  
  .product-card button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 8px 16px;
    cursor: pointer;
    border-radius: 4px;
    width: 100%;
  }
  
  .product-card button:hover {
    background-color: #0056b3;
  }
  </style>
  
  

  