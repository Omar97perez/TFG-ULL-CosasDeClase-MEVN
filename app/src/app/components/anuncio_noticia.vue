<template>
  <div>
    <!--/ Intro Single star /-->
    <section class="intro-single">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-8">
            <div class="title-single-box">
              <h1 class="title-single">{{prev.titulo}}</h1>
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
            <div class="news-img-box">
                  <img class="img-fluid" :src="prev.foto">
            </div>
          </div>
          <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <div class="post-information">
              <ul class="list-inline text-center color-a">
                <li class="list-inline-item mr-2">
                  <strong>Author: </strong>
                  <span class="color-text-a">{{prev.anunciante}}</span>
                </li>
                <!-- <li class="list-inline-item mr-2">
                  <strong>Category: </strong>
                  <span class="color-text-a">Travel</span>
                </li> -->
                <li class="list-inline-item">
                  <strong>Date: </strong>
                  <span class="color-text-a">{{prev.fecha}}</span>
                </li>
              </ul>
            </div>
            <div class="post-content color-text-a">
              <p>{{prev.descripcion}}</p>
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
  </div>
</template>

<script>

export default {
  name: 'anuncio',
  data(){
      return{
          preview: '',
          Producto: [],
          Productos: [],
      }
  },
  created() {
      this.getProductos();
  },
  props: ['invId', 'name', 'image', 'price', 'offer'],
  methods: {
    getProductos() {
      fetch('/api/CosasDeClase/Producto/')
        .then(res => res.json())
        .then(data => {
          this.Productos = data;
        });
    },
  },
  computed: {
    previewId() { return this.$store.getters.preview; },
    prev(){
        return this.Productos.find((PrevItem) =>{
            return PrevItem._id === this.$store.getters.preview;
        });
    },
  },
};
</script>
