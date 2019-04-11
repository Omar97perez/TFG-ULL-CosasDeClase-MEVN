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

    <!--/ Property Grid Star /-->
    <section class="property-grid grid">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="grid-option">
              <form>
                <select class="custom-select" id="city" v-model="ciudad" value=""  @change="buscarProducto" v-on:click="resetpag">
                  <option value="" >Todas las ciudades</option>
                  <option value="Tenerife">Santa Cruz de Tenerife</option>
                  <option value="Gran Canaria">Las Palmas de Gran Canaria</option>
                </select>
              </form>
            </div>
          </div>
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
        <div class="row">
          <div class="col-sm-12">
            <nav class="pagination-a">
              <ul class="pagination justify-content-end">
                <li class="page-item" @click="cambioprimera">
                  <a class="page-link" href="#" tabindex="-1">
                    <span class="ion-ios-arrow-back"></span>
                    <span class="ion-ios-arrow-back"></span>
                  </a>
                </li>
                <li class="page-item" @click="cambioanterior">
                  <a class="page-link" href="#" tabindex="-1">
                    <span class="ion-ios-arrow-back"></span>
                  </a>
                </li>
                <div v-for="Num in NumPaginas()" class="">
                  <li  class="page-item">
                      <a class="page-link" @click="pagination(Num)">{{Num}}</a>
                  </li>
                </div>
                <li class="page-item" @click="cambiosiguiente">
                  <a class="page-link" href="#">
                    <span class="ion-ios-arrow-forward"></span>
                  </a>
                </li>
                <li class="page-item" @click="cambioultima">
                  <a class="page-link" href="#">
                    <span class="ion-ios-arrow-forward"></span>
                    <span class="ion-ios-arrow-forward"></span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
    <!--/ Property Grid End /-->
  </div>
</template>

<script>  export default {
    name: 'clases',
    data() {
      return {
        Productos: [],
        ProductosPaginacion: [],
        Paginacion: [],
        ciudad: '',
        numeropagina: 1,
        tampagina: '6',
        numero: '',
      }
    },
    created() {
      this.getProductos();
      this.NumPaginas();
    },
    methods: {
      getProductos() {
        fetch('/api/CosasDeClase/Producto/')
          .then(res => res.json())
          .then(data => {
            this.Paginacion = data.filter(data =>  data.tipo == 'apuntes');
            this.Productos = this.Paginacion.slice(0,this.tampagina);
          });
      },
      addToPrev(invId) {
        this.$store.dispatch('addToPrev', invId);
      },
      NumPaginas() {
        this.numero = Math.round(this.ProductosPaginacion.length/this.tampagina);
        return this.numero;
      },
      resetpag() {
        this.numeropagina = 1;
      },
      cambiosiguiente() {
        if(this.numeropagina < this.numero ){
            this.numeropagina = this.numeropagina + 1;
        }
      },
      cambioanterior() {
        if(this.numeropagina > 1 ){
            this.numeropagina = this.numeropagina - 1;
        }
      },
      cambioprimera() {
            this.numeropagina = 1;
      },
      cambioultima() {
            this.numeropagina = this.numero;
      },
      pagination(numpag) {
        this.numeropagina = numpag
        var x;
        x = this.tampagina * numpag;
        numpag = numpag - 1;
        numpag = numpag * this.tampagina;
        this.Productos = this.Paginacion.slice(numpag,x);
      },
      buscador_pagination(vector) {
        var numpag,x;
        numpag = this.numeropagina
        x = this.tampagina * numpag;
        numpag = numpag - 1;
        numpag = numpag * this.tampagina;
        this.Productos = vector.slice(numpag,x);
      }
    },
    computed:  {
      buscarProducto() {
        this.ProductosPaginacion = this.Paginacion.filter(Producto => Producto.provincia.includes(this.ciudad));
        this.buscador_pagination(this.ProductosPaginacion);
      }
    }
  };
</script>
