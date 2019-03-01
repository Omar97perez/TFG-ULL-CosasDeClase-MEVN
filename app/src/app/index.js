import Vue from 'vue';
import VueRouter from 'vue-router';
import VueCarousel from 'vue-carousel';

Vue.use(VueCarousel);
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import App from './App.vue';
import Index from './components/index.vue';
import Clases from './components/clases_particulares.vue'
import Apuntes from './components/apuntes.vue'
import Noticias from './components/noticias.vue'
import Contacto from './components/contacto.vue'
import Perfil from './components/perfil.vue'
import Administracion from './components/Administracion.vue'

const routes = [
  {
    name: 'index',
    path: '/',
    component: Index,
  },
  {
  path: '/ClasesParticulares',
  name: 'clases',
  component: Clases
},
{
  path: '/Apuntes',
  name: 'apuntes',
  component: Apuntes
},
{
  path: '/Noticias',
  name: 'noticias',
  component: Noticias
},
{
  path: '/Contacto',
  name: 'contacto',
  component: Contacto
},
{
  path: '/Perfil',
  name: 'perfil',
  component: Perfil
},
{
  path: '/Admninistracion',
  name: 'administracion',
  component: Administracion
}
];

const router = new VueRouter({ routes});
new Vue(Vue.util.extend({ router }, App)).$mount('#app');
