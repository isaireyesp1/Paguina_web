<script setup>
import { ref } from 'vue';

const productos = ref([
  { nombre: 'Bolsa tejida', precio: 500, descripcion: 'Hecha a mano con materiales naturales' },
  { nombre: 'Joyería artesanal', precio: 300, descripcion: 'Piezas únicas y exclusivas' },
  { nombre: 'Tapete bordado', precio: 700, descripcion: 'Diseño tradicional y elegante' },
  { nombre: 'Escultura en madera', precio: 1200, descripcion: 'Tallada a mano con gran detalle' },
  { nombre: 'Cerámica pintada', precio: 450, descripcion: 'Arte hecho a mano para decorar tu hogar' },
  { nombre: 'Sombrero de Palma', precio: 500, descripcion: 'Hecha a mano con materiales naturales' },
  { nombre: 'Camisa Guayavera', precio: 300, descripcion: 'Piezas únicas y exclusivas' },
  { nombre: 'Pañuelo Bordado', precio: 700, descripcion: 'Diseño tradicional y elegante' },
  { nombre: 'Molcajete', precio: 1200, descripcion: 'Tallada a mano con gran detalle' }

]);
</script>

<template>
  <div class="container">
    <header>
      <div class="header-content">
        <h1 class="logo">TimShop</h1>
        <input type="text" placeholder="Buscar productos..." class="search-bar" />
        <div class="header-icons">
          <button class="user-btn">👤 Cuenta</button>
          <button class="cart-btn">🛒 Carrito</button>
        </div>
      </div>
    </header>
    
    <aside class="sidebar">
      <h2>Categorías</h2>
      <ul>
        <li>Accesorios</li>
        <li>Decoración</li>
        <li>Ropa</li>
        <li>Esculturas</li>
      </ul>
    </aside>
    
    <main>
      <h2>Nuestros Productos</h2>
      <div class="productos">
        <div class="producto" v-for="(producto, index) in productos" :key="index">
          <h3>{{ producto.nombre }}</h3>
          <p>{{ producto.descripcion }}</p>
          <p class="precio">${{ producto.precio }}</p>
          <button class="btn">Comprar</button>
        </div>
      </div>
    </main>
    
    <footer>
      <p>© 2025 TimShop - Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  background-color: #ffffff;
  color: #333;
  font-family: Arial, sans-serif;
}

header {
  grid-area: header;
  background-color: #f8f9fa;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #ddd;
}

.header-content {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  color: #007bff;
}

.search-bar {
  flex-grow: 1;
  margin: 0 20px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.header-icons {
  display: flex;
  gap: 10px;
}

.user-btn, .cart-btn {
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  transition: background 0.3s ease;
}

.user-btn:hover, .cart-btn:hover {
  background-color: #0056b3;
}

.sidebar {
  grid-area: sidebar;
  background-color: #f8f9fa;
  padding: 20px;
  border-right: 2px solid #ddd;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
}

.sidebar li:hover {
  background-color: #e9ecef;
}

main {
  grid-area: main;
  padding: 20px;
}

.productos {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.producto {
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 10px;
  width: calc(30% - 20px);
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  text-align: center;
}

.precio {
  font-weight: bold;
  color: #007bff;
}

.btn {
  background-color: #007bff;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
  transition: background 0.3s ease;
}

.btn:hover {
  background-color: #0056b3;
}

footer {
  grid-area: footer;
  background-color: #f8f9fa;
  color: #333;
  text-align: center;
  padding: 10px;
  border-top: 2px solid #ddd;
}
</style>