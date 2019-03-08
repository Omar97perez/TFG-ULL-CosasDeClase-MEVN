<template>
  <div>
    <body>
      <div class="click-closed"></div>
      <!--/ Form Search Star /-->
      <div class="box-collapse">
        <div class="title-box-d">
          <h3 class="title-d">Búsqueda</h3>
        </div>
        <span class="close-box-collapse right-boxed ion-ios-close"></span>
        <div class="box-collapse-wrap form">
          <form class="form-a">
            <div class="row">
              <div class="col-md-12 mb-2">
                <div class="form-group">
                  <label for="Type">¿Qué buscas?</label>
                  <input type="text" class="form-control form-control-lg form-control-a" placeholder="¿Qué buscas?">
                </div>
              </div>
              <div class="col-md-6 mb-2">
                <div class="form-group">
                  <label for="Type">Tipo</label>
                  <select class="form-control form-control-lg form-control-a" id="Type">
                    <option>Todo</option>
                    <option>Noticias</option>
                    <option>Clases Particulares</option>
                    <option>Apuntes</option>
                  </select>
                </div>
              </div>
              <div class="col-md-6 mb-2">
                <div class="form-group">
                  <label for="city">Ciudad</label>
                  <select class="form-control form-control-lg form-control-a" id="city">
                    <option>Todas</option>
                    <option>Santa Cruz de Tenerife</option>
                    <option>Las Palmas de Gran Canaria</option>
                  </select>
                </div>
              </div>
              <div class="col-md-12">
                <button type="submit" class="btn btn-b">Buscar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <!--/ Form Search End /-->
      <!--/ Nav Star /-->
      <nav class="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
        <div class="container">
          <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault"
            aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <router-link :to="{ name: 'index' }" class="nav-link"><a class="navbar-brand text-brand"><img src="img/favicon.png" alt="favicon"  width="15%"> CosasDe<span class="color-b">Clase</span></a></router-link>
          <button type="button" class="btn btn-link nav-search navbar-toggle-box-collapse d-md-none" data-toggle="collapse"
            data-target="#navbarTogglerDemo01" aria-expanded="false">
            <span class="fa fa-search" aria-hidden="true"></span>
          </button>
          <div class="navbar-collapse collapse justify-content-center" id="navbarDefault">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link :to="{ name: 'clases' }" class="nav-link"><a class="nav-link">Clases Particulares</a></router-link>
              </li>
              <li class="nav-item">
                  <router-link :to="{ name: 'apuntes' }" class="nav-link"><a class="nav-link">Apuntes</a></router-link>
              </li>
              <li class="nav-item">
                  <router-link :to="{ name: 'noticias' }" class="nav-link"><a class="nav-link">Noticias</a></router-link>
              </li>
              <li class="nav-item">
                  <router-link :to="{ name: 'contacto' }" class="nav-link"><a class="nav-link">Contacto</a></router-link>
              </li>
              <li class="nav-item">
                  <router-link :to="{ name: 'perfil' }" class="nav-link"><a class="nav-link">Perfil</a></router-link>
              </li>
              <li class="nav-item">
                  <router-link :to="{ name: 'administracion' }" class="nav-link"><a class="nav-link">Administracion</a></router-link>
              </li>
              <li class="nav-item dropdown mb-sm-4 mr-md-4"  v-if="loggedIn">
                <a class="dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-user" style="font-size:24px"></i></a>
                <div class="dropdown-menu" aria-labelledby="login">
                  <a class="dropdown-item" ><router-link :to="{ name: 'ModUsuario' }" class="na-link"> <i class="fa fa-user" style="font-size:24px"></i>Modificar Usuario</router-link></a>
                  <a class="dropdown-item" ><router-link :to="{ name: 'Logout' }" class="na-link"> <i class="fa fa-sign-out"style="font-size:24px"></i>Logout</router-link></a>
                </div>
              </li>
              <router-link v-else :to="{ name: 'Login' }"><i class="fa fa-user mb-sm-4 mr-md-4" style="font-size:24px"></i></router-link>
            </ul>
          </div>
          <button type="button" class="btn btn-b-n navbar-toggle-box-collapse d-none d-md-block" data-toggle="collapse"
            data-target="#navbarTogglerDemo01" aria-expanded="false">
            <span class="fa fa-search" aria-hidden="true"></span>
          </button>
        </div>
      </nav>
      <!--/ Nav End /-->
      <!-- CONTENT -->
      <div class="">
        <transition name="fade">
          <router-view></router-view>
        </transition>
      </div>
      <!-- END CONTENT -->
      <!--/ footer Star /-->
      <section class="section-footer">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-4">
              <div class="widget-a">
                <div class="w-header-a">
                  <h3 class="w-title-a text-brand"><img src="img/favicon.png" alt="favicon"  width="15%"> CosasDeClase</h3>
                </div>
                <div class="w-body-a">
                  <p class="w-text-a color-text-a">
                    CosasDeClase consiste en una aplicación web basada en la idea de ayudar
                    a los alumnos de cualquier curso académico
                  </p>
                </div>
                <div class="w-footer-a">
                  <ul class="list-unstyled">
                    <li class="color-a">
                      <span class="color-text-a">Email:</span> cosasdeclase@gmail.com</li>
                    <li class="color-a">
                      <span class="color-text-a">Teléfono:</span> +54 356 945234</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-4 section-md-t3">
              <div class="widget-a">
                <div class="w-header-a">
                  <h3 class="w-title-a text-brand">La empresa</h3>
                </div>
                <div class="w-body-a">
                  <div class="w-body-a">
                    <ul class="list-unstyled">
                      <li class="item-list-a">
                        <i class="fa fa-angle-right"></i> <a href="#">Mapa</a>
                      </li>
                      <li class="item-list-a">
                        <i class="fa fa-angle-right"></i> <a href="#">Legal</a>
                      </li>
                      <li class="item-list-a">
                        <i class="fa fa-angle-right"></i> <a href="#">Agent Admin</a>
                      </li>
                      <li class="item-list-a">
                        <i class="fa fa-angle-right"></i> <a href="#">Careers</a>
                      </li>
                      <li class="item-list-a">
                        <i class="fa fa-angle-right"></i> <a href="#">Affiliate</a>
                      </li>
                      <li class="item-list-a">
                        <i class="fa fa-angle-right"></i> <a href="#">Privacy Policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-4 section-md-t3">
              <div class="widget-a">
                <div class="w-header-a">
                  <h3 class="w-title-a text-brand">Página web</h3>
                </div>
                <div class="w-body-a">
                  <ul class="list-unstyled">
                    <li class="item-list-a">
                      <i class="fa fa-angle-right"></i> <a href="#">Inicio</a>
                    </li>
                    <li class="item-list-a">
                      <i class="fa fa-angle-right"></i> <a href="#">Clases Particulares</a>
                    </li>
                    <li class="item-list-a">
                      <i class="fa fa-angle-right"></i> <a href="#">Apuntes</a>
                    </li>
                    <li class="item-list-a">
                      <i class="fa fa-angle-right"></i> <a href="#">Noticias</a>
                    </li>
                    <li class="item-list-a">
                      <i class="fa fa-angle-right"></i> <a href="#">Contacto</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="socials-a">
                <ul class="list-inline">
                  <li class="list-inline-item">
                    <a href="#">
                      <i class="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#">
                      <i class="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#">
                      <i class="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#">
                      <i class="fa fa-pinterest-p" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#">
                      <i class="fa fa-dribbble" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="copyright-footer">
                <p class="copyright color-text-a">
                  &copy; Copyright
                  <span class="color-a">CosasDeClase</span> All Rights Reserved.
                </p>
              </div>
              <div class="credits">
                Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <!--/ Footer End /-->

    </body>
  </div>
</template>

<script>
import { dollars } from './components/filters';

export default {
  name: 'App',
  data(){
    return{
      Productos: [],
    }
  },
  mounted() {
     this.$store.dispatch('get_user_data')
   },
  computed: {
    inCart() { return this.$store.getters.inCart; },
    numInCart() { return this.inCart.length; },
    cart() {
      return this.$store.getters.inCart.map((cartItem) => {
        return this.Productos.find((forSaleItem) => {
          return cartItem === forSaleItem._id;
        });
      });
    },
    total() {
      return this.cart.reduce((acc, cur) => acc + cur.price, 0);
    },
    loggedIn() {
      return this.$store.getters.loggedIn
    },
    isAdmin() {
      return this.$store.getters.isAdmin
    }
  },
  filters: {
    dollars,
  },
  created() {
    this.getProductos();
  },
  methods: {
    removeFromCart(index) { this.$store.dispatch('removeFromCart', index); },
    getProductos() {
      fetch('/api/CosasDeClase/Producto/')
        .then(res => res.json())
        .then(data => {
          this.Productos = data;
        });
    },
  },
};
</script>
