<template>
  <div>
    <!--/ Intro Single star /-->
    <section class="intro-single">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-8">
            <div class="title-single-box">
              <h1 class="title-single">{{Anunciante[0].name}}</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--/ Intro Single End /-->

    <!--/ Agent Single Star /-->
    <section class="agent-single">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="row">
              <div class="col-md-6">
                <div class="agent-avatar-box">
                  <img v-bind:src="Anunciante[0].image" alt="" class="agent-avatar img-fluid">
                </div>
              </div>
              <div class="col-md-5 section-md-t3">
                <div class="agent-info-box">
                  <div class="agent-title">
                    <div class="title-box-d">
                      <h3 class="title-d">{{Anunciante[0].name}}
                        <br> {{Anunciante[0].surname}}</h3>
                    </div>
                  </div>
                  <div class="agent-content mb-3">
                    <p class="content-d color-text-a">{{Anunciante[0].paragraph}}</p>
                    <div class="info-agents color-a">
                      <p>
                        <strong>Teléfono: </strong>
                        <span class="color-text-a">{{Anunciante[0].telephone}}</span>
                      </p>
                      <p>
                        <strong>Email: </strong>
                        <span class="color-text-a">{{Anunciante[0].email}}</span>
                      </p>
                      <p>
                        <strong>Fecha de Nacimiento: </strong>
                        <span class="color-text-a">{{Anunciante[0].birthdate}}</span>
                      </p>
                    </div>
                  </div>
                  <div class="socials-footer">
                    <ul class="list-inline">
                      <li class="list-inline-item">
                        <a href="#" class="link-one">
                          <i class="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a href="#" class="link-one">
                          <i class="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a href="#" class="link-one">
                          <i class="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a href="#" class="link-one">
                          <i class="fa fa-pinterest-p" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a href="#" class="link-one">
                          <i class="fa fa-dribbble" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12 section-t8">
            <div class="title-box-d">
              <h3 class="title-d">Mis anuncios</h3>
            </div>
          </div>
        </div>
        <div class="row property-grid grid">
          <div class="col-sm-12">
            <div class="grid-option">
              <form>
                <select class="custom-select" id="city" v-model="tipo" value=""  @change="buscarProducto" v-on:click="resetpag">
                  <option value="" >Todas las ciudades</option>
                  <option value="clases">Clases Particulares</option>
                  <option value="apuntes">Apuntes</option>
                  <option value="noticias">Noticias</option>
                </select>
              </form>
            </div>
          </div>
          <div  v-for="Producto of Productos" class="col-md-4">
            <div v-if="Producto.tipo =='clases' || Producto.tipo =='apuntes' "  class="card-box-a card-shadow">
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
                        <span class="price-a">{{Producto.precio}} €/hora</span>
                      </div>
                      <router-link :to="{ name: 'anuncio' }" class="link-a" ><a @click="addToPrev(Producto._id)">Ver anuncio<span class="ion-ios-arrow-forward"></span></a></router-link>
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
            <div v-if="Producto.tipo =='noticias'" class="card-box-b card-shadow news-box">
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
    <!--/ Agent Single End /-->
  </div>
</template>

<script>
export default {
  name: 'ModUsuario',
  data() {
    return {
      Productos: [],
      Anunciante: [],
      ProductosPaginacion: [],
      Paginacion: [],
      tipo: '',
      numeropagina: 1,
      tampagina: '6',
      numero: '',
    }
  },
  created() {
    this.getUser();
    this.NumPaginas();
  },
  methods: {
    getProductos(email) {
      fetch('/api/CosasDeClase/Producto/')
        .then(res => res.json())
        .then(data => {
          this.Paginacion = data.filter(data =>  data.anunciante == email);
          this.Productos = this.Paginacion.slice(0,this.tampagina);
        });
    },
    getUser() {
      fetch('/users')
        .then(res => res.json())
        .then(data => {
          this.getProductos();
          this.Anunciante  = data.filter(data =>  data._id == this.$store.getters.preview);

          this.getProductos(this.Anunciante[0].email);
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
      this.numeropagina = numpag;
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
      this.ProductosPaginacion = this.Paginacion.filter(Producto => Producto.tipo.includes(this.tipo));
      this.buscador_pagination(this.ProductosPaginacion);
    }
  }
}
</script>
