<script setup>
import { ref } from 'vue';

const datos = ref([]);
const nuevoDato = ref('');

const agregarDato = () => {
  if (nuevoDato.value.trim() !== '') {
    datos.value.push(nuevoDato.value);
    nuevoDato.value = '';
  }
};
</script>

<template>
  <h1>INGENIERIA EN SISTEMAS</h1>
  <input v-model="nuevoDato" placeholder="Ingrese un dato" />
  <button class="btn" @click="agregarDato">Ingresar</button>
  
  <table>
    <thead>
      <tr>
        <th>Datos Ingresados</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(dato, index) in datos" :key="index">
        <td>{{ dato }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
h1 {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 55px;
  color: rgb(70, 73, 70);
}

.btn {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  background-color: aquamarine;
  padding: 10px;
  border: none;
  cursor: pointer;
  margin-left: 10px;
}

input {
  padding: 8px;
  font-size: 16px;
}

table {
  width: 50%;
  margin-top: 20px;
  border-collapse: collapse;
}

th, td {
  border: 1px solid black;
  padding: 10px;
  text-align: left;
}
</style>

