<template>
  <div class="main-layout">
    <Header />
    <div class="content">
      <Sidebar />
      <ProductList />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';
import ProductList from './components/ProductList.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Sidebar,
    ProductList,
    Footer
  }
};
</script>

<style>
/* Estilos para asegurar la distribución correcta */
.main-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  display: flex;
  flex-grow: 1;
  gap: 20px;
  padding: 20px;
}

.sidebar {
  width: 230px;
  flex-shrink: 0; /* Para que no se reduzca */
}

.product-list {
  flex-grow: 1; /* Para que ocupe el resto del espacio */
}
</style>
