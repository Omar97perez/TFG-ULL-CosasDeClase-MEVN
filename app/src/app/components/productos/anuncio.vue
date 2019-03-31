<template>
  <div>

    <!--/ Intro Single star /-->
    <section class="intro-single">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-8">
            <div class="title-single-box">
              <h1 class="title-single">{{Productos[0].titulo}}</h1>
              <span class="color-text-a">{{Productos[0].localidad}} ({{Productos[0].provincia}})</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--/ Intro Single End /-->

    <!--/ Property Single Star /-->
    <section class="property-single nav-arrow-b">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="row justify-content-between">
              <div class="col-md-5 col-lg-4">
                <div class="property-price d-flex justify-content-center foo">
                      <img class="prod-img" :src="Productos[0].foto">
                </div>
                </br>
                <div class="property-price d-flex justify-content-center foo">
                  <div class="card-header-c d-flex">
                    <div class="card-box-ico">
                      <h1 class="ion-money">{{Productos[0].precio}} €</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-7 col-lg-7 section-md-t3">
                <div class="row">
                  <div class="col-sm-12">
                    <div class="title-box-d">
                      <h3 class="title-d">Descripción</h3>
                    </div>
                  </div>
                </div>
                <div class="property-description">
                  <p class="description color-text-a">{{Productos[0].descripcion}}</p>
                </div>

              </div>
            </div>
          </div>
          <div class="col-md-12">
            <div class="row section-t3">
              <div class="col-sm-12">
                <div class="title-box-d">
                  <h3 class="title-d">Anunciante</h3>
                </div>
              </div>
            </div>
            <router-link :to="{ name: 'Perfil_anuncio' }" class="link-a" >
              <div @click="addToPrev(Anunciante[0]._id)" class="row">
                <div class="col-md-6 col-lg-4">
                  <img v-bind:src="Anunciante[0].image" alt="" class="img-fluid">
                </div>
                <div class="col-md-6 col-lg-7">
                  <div class="property-agent">
                    <h4 class="title-agent">{{Anunciante[0].name}}</h4>
                    <h4 class="title-agent">{{Anunciante[0].surname}}</h4>
                    <p class="color-text-a">{{Anunciante[0].paragraph}}</p>
                    <ul class="list-unstyled">
                      <li class="d-flex justify-content-between">
                        <strong>Phone:</strong>
                        <span class="color-text-a">{{Anunciante[0].telephone}}</span>
                      </li>
                      <li class="d-flex justify-content-between">
                        <strong>Mobile:</strong>
                        <span class="color-text-a">{{Anunciante[0].surname}}</span>
                      </li>
                      <li class="d-flex justify-content-between">
                        <strong>Email:</strong>
                        <span class="color-text-a">{{Anunciante[0].email}}</span>
                      </li>
                    </ul>
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
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'anuncio',
  data(){
      return{
          Productos: [],
          Anunciante: "",
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
          this.Productos = data.filter(data =>  data._id == this.$store.getters.preview);
          this.getUser(this.Productos[0].anunciante);
        });
    },
    getUser(user) {
      fetch('/users')
        .then(res => res.json())
        .then(data => {
          this.getProductos();
          this.Anunciante  = data.filter(data =>  data.email == user);
        });
    },
    addToPrev(invId) {
      this.$store.dispatch('addToPrev', invId);
    },
  },
};
</script>
