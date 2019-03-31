<template>
  <div>
    <!--/ Intro Single star /-->
    <section class="intro-single">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-8">
            <div class="title-single-box">
              <h1 class="title-single">{{Productos[0].titulo}}</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--/ Intro Single End /-->

    <!--/ News Single Star /-->
    <section class="news-single nav-arrow-b">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="news-img-box"  align="center">
                  <img class="img-fluid" :src="Productos[0].foto">
            </div>
          </div>
          <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <div class="post-information">
              <ul class="list-inline text-center color-a">
                <li class="list-inline-item mr-2">
                  <strong>Autor: </strong>
                  <span  class="color-text-a">{{Productos[0].anunciante}}</span>
                </li>
                <!-- <li class="list-inline-item mr-2">
                  <strong>Category: </strong>
                  <span class="color-text-a">Travel</span>
                </li> -->
                <li class="list-inline-item">
                  <strong>Date: </strong>
                  <span class="color-text-a">{{Productos[0].fecha}}</span>
                </li>
              </ul>
            </div>
            <div class="post-content color-text-a">
              <p>{{Productos[0].descripcion}}</p>
            </div>
            <div class="post-footer">
              <div class="post-share">
                <span>Share: </span>
                <ul class="list-inline socials">
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
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--/ News Single End /-->

    <!--/ Property Single Star /-->
    <section class="property-single nav-arrow-b">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="row section-t3">
              <div class="col-sm-12">
                <div class="title-box-d">
                  <h3 class="title-d">Anunciante</h3>
                </div>
              </div>
            </div>
            <router-link :to="{ name: 'Perfil_anuncio' }" class="link-a" ><div @click="addToPrev(Anunciante[0]._id)" class="row">
              <div class="col-md-6 col-lg-4">
                <img v-bind:src="Anunciante[0].image" alt="" class="img-fluid">
              </div>
              <div class="col-md-6 col-lg-7">
                <div class="property-agent">
                  <h4  class="title-agent">{{Anunciante[0].name}}</h4>
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
            </div></router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'anuncio_noticia',
  data(){
      return{
          Productos: [],
          Anunciante: "",
          email: '',
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
          this.Anunciante  = data.filter(data =>  data.email == user);
        });
    },
    addToPrev(invId) {
      this.$store.dispatch('addToPrev', invId);
    },
  },
};
</script>
