<template>
    <div class="sidebar">
      <h3>Categorías</h3>
      <ul>
        <li><a href="#">Cerámica</a></li>
        <li><a href="#">Joyería</a></li>
        <li><a href="#">Textiles</a></li>
        <li><a href="#">Madera</a></li>
        <li><a href="#">Pinturas</a></li>
        <li><a href="#">Regalos</a></li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Sidebar',
  };
  </script>
  
  <style scoped>
  .sidebar {
    width: 230px;
    background-color: #ffffff;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  }
  
  .sidebar h3 {
    font-size: 18px;
    color: #333;
    margin-bottom: 12px;
  }
  
  .sidebar ul {
    list-style: none;
    padding: 0;
  }
  
  .sidebar li {
    margin-bottom: 10px;
  }
  
  .sidebar a {
    display: block;
    color: #333;
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    padding: 8px;
    border-radius: 8px;
    transition: 0.3s;
  }
  
  .sidebar a:hover {
    background-color: #f1f1f1;
  }
  </style>
  