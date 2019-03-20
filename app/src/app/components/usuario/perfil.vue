<template>
  <div>
    <!--/ Intro Single star /-->
    <section class="intro-single">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-8">
            <div class="title-single-box">
              <h1 class="title-single">{{getName}}</h1>
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
                  <img v-bind:src="getImage" alt="" class="agent-avatar img-fluid">
                </div>
              </div>
              <div class="col-md-5 section-md-t3">
                <div class="agent-info-box">
                  <div class="agent-title">
                    <div class="title-box-d">
                      <h3 class="title-d">{{getName}}
                        <br> {{getSurname}}</h3>
                    </div>
                  </div>
                  <div class="agent-content mb-3">
                    <p class="content-d color-text-a">{{getParagraph}}</p>
                    <div class="info-agents color-a">
                      <p>
                        <strong>Teléfono: </strong>
                        <span class="color-text-a">{{getTelephone}}</span>
                      </p>
                      <p>
                        <strong>Email: </strong>
                        <span class="color-text-a">{{getEmail}}</span>
                      </p>
                      <p>
                        <strong>Fecha de Nacimiento: </strong>
                        <span class="color-text-a">{{getBirthdate}}</span>
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
                <select class="custom-select">
                  <option selected>Todo</option>
                  <option value="1">Nuevo a viejo</option>
                  <option value="2">Viejo a nuevo </option>
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
                        <span class="price-a">{{Producto.precio}} €/hora</span>
                        <td>{{Producto.precio}}</td>
                      </div>
                      <router-link :to="{ name: 'anuncio' }" class="link-a"><a >Ver anuncio<span class="ion-ios-arrow-forward"></span></a></router-link>
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
    <!--/ Agent Single End /-->
  </div>
</template>

<script>
export default {
  name: 'ModUsuario',
  data() {
    return {
      name: '',
      surname: '',
      email: '',
      password: '',
      birthdate: '',
      genre: '',
      Productos: [],
    }
  },
  created() {
    this.getProductos(this.$store.getters.email);
  },
  computed: {
    getName() {
      return this.$store.getters.name
    },
    getSurname() {
      return this.$store.getters.surname
    },
    getBirthdate() {
      return this.$store.getters.birthdate
    },
    getParagraph() {
      return this.$store.getters.paragraph
    },
    getImage() {
      return this.$store.getters.image
    },
    getTelephone() {
      return this.$store.getters.telephone
    },
    getGenre() {
      return this.$store.getters.genre
    },
    getEmail() {
      return this.$store.getters.email
    }
  },
  methods: {
    getProductos(email) {
      fetch('/api/CosasDeClase/Producto/')
        .then(res => res.json())
        .then(data => {
          this.Productos = data.filter(data =>  data.anunciante == email);
        });
    }
  }
}
</script>
