<template>
  <div>


    <!--/ Intro Single star /-->
    <section class="intro-single">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-8">
            <div class="title-single-box">
              <h1 class="title-single">Buscador</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--/ Intro Single End /-->

    <div class="container">
      <form class="form-a">
        <div class="row">
          <div class="col-md-12 mb-2">
            <div class="form-group">
              <label for="Type">¿Qué buscas?</label>
              <input type="text" class="form-control form-control-lg form-control-a" placeholder="¿Qué buscas?" v-model="busqueda" @click="getProductos">
            </div>
          </div>
          <div class="col-md-6 mb-2">
            <div class="form-group">
              <label for="Type">Tipo</label>
              <select class="form-control form-control-lg form-control-a" id="Type" v-model="tipo" @click="getProductos">
                <option value="noticias">Noticias</option>
                <option value="clases">Clases Particulares</option>
                <option value="apuntes">Apuntes</option>
              </select>
            </div>
          </div>
          <div class="col-md-6 mb-2">
            <div class="form-group">
              <label for="city">Ciudad</label>
              <select class="form-control form-control-lg form-control-a" id="city" v-model="ciudad" @click="getProductos">
                <option value="Tenerife">Santa Cruz de Tenerife</option>
                <option value="Gran Canaria">Las Palmas de Gran Canaria</option>
              </select>
            </div>
          </div>
          <div class="col-md-12">
            <router-link :to="{ name: 'Buscador_productos' }" class="nav-link"><button @click="addToPrev(Buscador)" type="submit" class="btn btn-b">Buscar</button></router-link>
          </div>
        </div>
      </form>
    </div>

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
          <div  v-for="Producto of buscarProducto" class="col-md-4">
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
          </div>
        </div>
      </div>
    </section>
    <!--/ Property Grid End /-->
  </div>
</template>

<script>
class Buscador {
  constructor(busqueda = '',tipo = '',ciudad = '') {
    this.busqueda = busqueda;
    this.tipo = tipo;
    this.ciudad = ciudad;
  }
}

  export default {
    name: 'clases',
    data() {
      return {
            Productos: [],
            Buscador: new Buscador(),
            busqueda: '',
            tipo: '',
            ciudad: '',
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
            this.Productos = data ;
          });
      },
      addToPrev(invId) {
        console.log(this.tipo)
        this.$store.dispatch('addToPrev', invId);
      },
    },
    computed: {
      buscarProducto() {
        return this.Productos.filter(Producto => Producto.tipo.includes(this.tipo) &&
                                                 Producto.provincia.includes(this.ciudad));
      }
    }
  };
</script>
