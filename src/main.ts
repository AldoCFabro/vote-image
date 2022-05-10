import { createApp } from 'vue';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';

import App from './App.vue';
import router from './router';
const app = createApp(App);
// add store
app.use(createPinia());

// add routes
app.use(router);

// add framework css
const primeVueConfig = {
  ripple: true,
  inputStyle: 'filled',
  zIndex: {
    modal: 1100, //dialog, sidebar
    overlay: 1000, //dropdown, overlaypanel
    menu: 1000, //overlay menus
    tooltip: 1100, //tooltip
  },
};
app.use(PrimeVue, primeVueConfig);

// mount app
app.mount('#app');
