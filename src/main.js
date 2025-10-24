import 'vue-loading-overlay/dist/css/index.css';
import './assets/main.css';
import App from './App.vue';
import router from './router';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

const app = createApp(App);
app.use(router);
app.use(createPinia());

app.mount('#app');
