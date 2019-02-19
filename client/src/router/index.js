import Vue from 'vue'
import Router from 'vue-router'
// import Posts from '@/components/Posts'
import Index from '@/components/index'
import Clases from '@/components/clases_particulares'
import Apuntes from '@/components/apuntes'
import Noticias from '@/components/noticias'
import Contacto from '@/components/contacto'
import Perfil from '@/components/perfil'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
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
    }
  ]
})
