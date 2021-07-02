import { createApp } from 'vue';
import App from './App.vue';
import components from './element';

const app = createApp(App);

components.forEach((component) => {
  app.use(component);
});

app.mount('#app');
