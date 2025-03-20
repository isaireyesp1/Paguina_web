<template>
    <div class="cart">
      <button @click="$router.push('/cart')">Ver Carrito</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Cart'
  };
  </script>
  
  <style scoped>
  .cart {
    text-align: center;
  }
  
  button {
    background: #555;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background: #333;
  }
  </style>
  
  