<template>
    <div class="cart-page">
      <h1>Carrito de Compras</h1>
      <div v-if="cart.length === 0">
        <p>El carrito está vacío.</p>
      </div>
      <ul v-else>
        <li v-for="item in cart" :key="item.id">
          {{ item.name }} (x{{ item.quantity }}) - ${{ item.price * item.quantity }}
        </li>
      </ul>
      <button @click="$router.push('/')">Seguir comprando</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CartPage',
    props: {
      cart: Array
    }
  };
  </script>
  
  <style scoped>
  .cart-page {
    padding: 20px;
    max-width: 600px;
    margin: auto;
    background: white;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  }
  
  h1 {
    text-align: center;
  }
  
  button {
    margin-top: 15px;
    background: #555;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
  }
  
  button:hover {
    background: #333;
  }
  </style>
  