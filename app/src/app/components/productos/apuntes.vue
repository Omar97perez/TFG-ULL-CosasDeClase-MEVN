<template>
  <div>
    <!--/ Intro Single star /-->
    <section class="intro-single">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-8">
            <div class="title-single-box">
              <h1 class="title-single">Apuntes</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--/ Intro Single End /-->

    <!--/ Property Grid Star /-->
    <section class="property-grid grid">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="grid-option">
              <form>
                <select class="custom-select">
                  <option selected>Predeterminado</option>
                  <option value="1">Nuevo a viejo</option>
                  <option value="2">Viejo a nuevo</option>
                  <option value="3">Mejores valorados</option>
                </select>
              </form>
            </div>
          </div>
          <div  v-for="Producto of Productos" class="col-md-4">
            <div class="card-box-a card-shadow">
                <div class="img-box-a">
                  <img v-bind:src="Producto.foto"  class="img-a img-fluid"></img>
                </div>
                <div class="card-overlay">
                  <div class="card-overlay-a-content">
                    <div class="card-header-a">
                      <h2 class="card-title-a">
                        <a>{{Producto.titulo}}</a>
                      </h2>
                    </div>
                    <div class="card-body-a">
                      <div class="price-box d-flex">
                        <span class="price-a">{{Producto.precio}} €</span>
                      </div>
                      <router-link :to="{ name: 'anuncio' }" class="link-a"><a @click="addToPrev(Producto._id)">Ver anuncio<span class="ion-ios-arrow-forward"></span></a></router-link>
                    </div>
                    <div class="card-footer-a">
                      <ul class="card-info d-flex justify-content-around">
                        <li>
                          <h4 class="card-info-title">Nivel</h4>
                          <span>{{Producto.nivel}}</span>
                        </li>
                        <li>
                          <h4 class="card-info-title">Localidad</h4>
                          <span>{{Producto.localidad}}</span>
                        </li>
                        <li>
                          <h4 class="card-info-title">Provincia</h4>
                          <span>{{Producto.provincia}}</span>
                        </li>
                        <li>
                          <h4 class="card-info-title">Fecha</h4>
                          <span>{{Producto.fecha}}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--/ Property Grid End /-->
  </div>
</template>

<script>
  export default {
    name: 'apuntes',
    data() {
      return {
        Productos: [],
      }
    },
    created() {
      this.getProductos();
    },
    methods: {
      getProductos() {
        fetch('/api/CosasDeClase/Producto/')
          .then(res => res.json())
          .then(data => {
            this.Productos = data.filter(data =>  data.tipo == 'apuntes');
          });
      },
      addToPrev(invId) {
        console.log(invId)
        this.$store.dispatch('addToPrev', invId);
      },
    }
  };
</script>
