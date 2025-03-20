<template>
    <div>
      <ProductDetail :productId="id" />
    </div>
  </template>
  
  <script>
  import ProductDetail from '../components/ProductDetail.vue';
  
  export default {
    name: 'ProductPage',
    components: {
      ProductDetail
    },
    data() {
      return {
        id: this.$route.params.id
      }
    }
  }
  </script>
  
  <style scoped>
  /* Estilos para la página de detalles de producto */
  </style>
  