<template>
    <div class="product-card">
      <img :src="product.image" :alt="product.name" />
      <h3>{{ product.name }}</h3>
      <p>${{ product.price }}</p>
      <button @click="addToCart(product)">Agregar al carrito</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductCard',
    props: {
      product: Object,
      addToCart: Function
    }
  };
  </script>
  
  <style scoped>
  .product-card {
    background: #fff;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
    text-align: center;
  }
  
  .product-card img {
    width: 100%;
    border-radius: 8px;
  }
  
  .product-card h3 {
    font-size: 18px;
    color: #333;
    margin: 10px 0;
  }
  
  .product-card p {
    font-size: 16px;
    font-weight: bold;
    color: #666;
  }
  
  .product-card button {
    background: #555;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
  }
  
  .product-card button:hover {
    background: #333;
  }
  </style>
  