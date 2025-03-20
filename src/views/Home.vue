<template>
  <div>
    <Header @search="handleSearch" />
    <ProductList :products="filteredProducts" />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import ProductList from '../components/ProductList.vue';

export default {
  name: 'Home',
  components: { Header, ProductList },
  data() {
    return {
      products: [
        { id: 1, name: 'Producto 1', price: 10, image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Producto 2', price: 20, image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Producto 3', price: 30, image: 'https://via.placeholder.com/150' },
        { id: 4, name: 'Producto 4', price: 40, image: 'https://via.placeholder.com/150' },
        { id: 5, name: 'Producto 5', price: 50, image: 'https://via.placeholder.com/150' },
        { id: 6, name: 'Producto 6', price: 60, image: 'https://via.placeholder.com/150' },
        { id: 7, name: 'Producto 7', price: 70, image: 'https://via.placeholder.com/150' },
        { id: 8, name: 'Producto 8', price: 80, image: 'https://via.placeholder.com/150' },
        { id: 9, name: 'Producto 9', price: 90, image: 'https://via.placeholder.com/150' }
      ],
      filteredProducts: [], // Lista de productos filtrados
    };
  },
  created() {
    this.filteredProducts = this.products; // Al principio mostramos todos los productos
  },
  methods: {
    handleSearch(query) {
      this.filteredProducts = this.products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
    },
  },
};
</script>

<style scoped>
/* Estilos para la página de inicio */
.product-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;
}

.product-card {
  background-color: #fff;
  border: 1px solid #ddd; /* Gris claro */
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
  color: #007bff; /* Azul suave */
}

.product-card button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 4px;
  width: 100%;
  font-size: 16px;
}

.product-card button:hover {
  background-color: #0056b3; /* Azul más oscuro */
}
</style>
