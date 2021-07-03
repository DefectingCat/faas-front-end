import { createApp } from 'vue';
import App from './App.vue';
import components from './element';
import router from './router';

import './assets/css/base.css';

const app = createApp(App);

components.forEach((component) => {
  app.use(component);
});

app.use(router).mount('#app');