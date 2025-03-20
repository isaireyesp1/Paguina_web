<template>
    <header>
      <div class="logo">TimShop</div>
      <div class="search-bar">
        <input v-model="searchQuery" type="text" placeholder="Buscar productos..." />
        <button @click="searchProduct">🔍</button>
      </div>
      <div class="user-cart">
        <button @click="goToUserProfile">👤 Usuario</button>
        <button @click="goToCart">🛒 Carrito ({{ cartCount }})</button>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header',
    data() {
      return {
        searchQuery: '', // Almacena lo que el usuario escribe en la barra de búsqueda
      };
    },
    computed: {
      // Obtener la cantidad de productos en el carrito (desde el store o estado global)
      cartCount() {
        return this.$store.state.cart.length;
      },
    },
    methods: {
      // Método para realizar la búsqueda
      searchProduct() {
        this.$emit('search', this.searchQuery); // Emitir el evento para realizar la búsqueda
      },
      // Método para ir al perfil de usuario
      goToUserProfile() {
        console.log('Ir al perfil de usuario');
        // Aquí podrías redirigir a otra ruta, por ejemplo:
        // this.$router.push('/profile');
      },
      // Método para ir al carrito
      goToCart() {
        this.$router.push('/cart'); // Redirige a la página del carrito
      },
    },
  };
  </script>


  
  
  <style scoped>
  /* Header Styles */
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #f9f9f9; /* Blanco suave */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .logo {
    font-size: 24px;
    font-weight: bold;
    color: #333; /* Gris oscuro */
  }
  
  .search-bar {
    display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .search-bar input {
    padding: 8px;
    margin-right: 8px;
    border: 1px solid #ddd; /* Gris claro */
    border-radius: 4px;
    font-size: 14px;
  }
  
  .search-bar button {
    background-color: #58595a; /* Azul suave */
    color: white;
    border: none;
    padding: 8px 12px;
    cursor: pointer;
    border-radius: 4px;
  }
  
  .search-bar button:hover {
    background-color: #a7adb4; /* Azul más oscuro */
  }
  
  .user-cart button {
    margin-left: 12px;
    background-color: #f1f1f1; /* Gris suave */
    color: #333; /* Gris oscuro */
    border: 1px solid #ddd; /* Gris claro */
    padding: 8px 16px;
    cursor: pointer;
    border-radius: 4px;
  }
  
  .user-cart button:hover {
    background-color: #e0e0e0; /* Gris más oscuro */
    border-color: #bbb; /* Gris medio */
  }
  </style>
  
  