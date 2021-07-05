import { createApp } from 'vue';
import App from './App.vue';
import components from './element';
import router from './router';
import store from './store';

import './assets/css/base.css';
import 'github-markdown-css';

const app = createApp(App);

components.forEach((component) => {
  app.use(component);
});

app.use(router).use(store).mount('#app');
