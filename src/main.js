import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/styles.css';  // Asegúrate de que el archivo de estilos esté importado

createApp(App)
  .use(router)
  .mount('#app');
