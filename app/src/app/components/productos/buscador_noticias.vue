<template>
  <div>
    <!--/ Intro Single star /-->
    <section class="intro-single">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-8">
            <div class="title-single-box">
              <h1 class="title-single">Noticias</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--/ Intro Single End /-->

    <!--/ News Grid Star /-->
    <section class="news-grid grid">
      <div class="container">
        <div class="row">
          <div v-for="Producto of Productos" class="col-md-4">
            <div class="card-box-b card-shadow news-box">
              <div class="img-box-b">
                <img v-bind:src="Producto.foto"  class="img-a img-fluid"></img>
              </div>
              <div class="card-overlay">
                <div class="card-header-b">
                  <div class="card-title-b">
                    <h2 class="title-2">
                      <a>{{Producto.titulo}}</a>
                    </h2>
                  </div>
                  <div class="card-date">
                    <span class="date-b">{{Producto.fecha}}</span>
                  </div>
                    <router-link :to="{ name: 'anuncio_noticia' }" class="link-a" ><a @click="addToPrev(Producto._id)">Ver noticia<span class="ion-ios-arrow-forward"></span></a></router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--/ News Grid End /-->
  </div>
</template>

<script>
  export default {
    name: 'noticias',
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
            this.Productos = data.filter(data =>  data.tipo == 'noticias');
          });
      },
      addToPrev(invId) {
        console.log(invId)
        this.$store.dispatch('addToPrev', invId);
      },
    }
  };
</script>
