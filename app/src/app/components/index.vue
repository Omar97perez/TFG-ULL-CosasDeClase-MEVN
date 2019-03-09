Productos_clases<template>
  <div>

        <div class="intro intro-carousel">
          <div id="carousel" class="owl-carousel owl-theme">
            <div class="carousel-item-a intro-item bg-image" style="background-image: url(img/slide-1.jpg)">
              <div class="overlay overlay-a"></div>
              <div class="intro-content display-table">
                <div class="table-cell">
                  <div class="container">
                    <div class="row">
                      <div class="col-lg-8">
                        <div class="intro-body">
                          <p class="intro-title-top">Santa cruz de Tenerife
                            <br>(TENERIFE)</p>
                          <h1 class="intro-title mb-4">
                            <span class="color-b">Día</span> Europeo
                            <br>Deporte escolar</h1>
                          <p class="intro-subtitle intro-price">
                            <a href="#"><span class="price-a">Noticia</span></a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item-a intro-item bg-image" style="background-image: url(img/slide-2.jpg)">
              <div class="overlay overlay-a"></div>
              <div class="intro-content display-table">
                <div class="table-cell">
                  <div class="container">
                    <div class="row">
                      <div class="col-lg-8">
                        <div class="intro-body">
                          <p class="intro-title-top">La Laguna
                            <br>(TENERIFE)</p>
                          <h1 class="intro-title mb-4">
                            <span class="color-b">Su</span>Historia
                            <br>Personal</h1>
                          <p class="intro-subtitle intro-price">
                            <a href="#"><span class="price-a">Noticia</span></a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item-a intro-item bg-image" style="background-image: url(img/slide-3.jpg)">
              <div class="overlay overlay-a"></div>
              <div class="intro-content display-table">
                <div class="table-cell">
                  <div class="container">
                    <div class="row">
                      <div class="col-lg-8">
                        <div class="intro-body">
                          <p class="intro-title-top">Galdar
                            <br>(Gran Canaria)</p>
                          <h1 class="intro-title mb-4">
                            <span class="color-b">Muestra</span>Tu
                            <br>Talento artistico</h1>
                          <p class="intro-subtitle intro-price">
                            <a href="#"><span class="price-a">Noticia</span></a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section class="section-services section-t8">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="title-wrap d-flex justify-content-between">
                  <div class="title-box">
                    <h2 class="title-a">Nuestros servicios</h2>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <div class="card-box-c foo">
                  <div class="card-header-c d-flex">
                    <div class="card-box-ico">
                      <span class="fa fa-camera-retro"></span>
                    </div>
                    <div class="card-title-c align-self-center">
                      <h2 class="title-c">Noticias</h2>
                    </div>
                  </div>
                  <div class="card-body-c">
                    <p class="content-c">
                      Existencia de noticias importantes de la actualidad en la educación ( becas
                      existentes, apertura del curso académico, ...)
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card-box-c foo">
                  <div class="card-header-c d-flex">
                    <div class="card-box-ico">
                      <span class="fa fa-pencil"></span>
                    </div>
                    <div class="card-title-c align-self-center">
                      <h2 class="title-c">Clases Particulares</h2>
                    </div>
                  </div>
                  <div class="card-body-c">
                    <p class="content-c">
                      Anuncios de profesores particulares enfocados a todos los
                      cursos académicos. No obstante, están enfocado a aquellos alumnos que pueden explicar
                      una asignatura en aquellos campos donde existan pocos profesores ( generalmente
                      universidad).
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card-box-c foo">
                  <div class="card-header-c d-flex">
                    <div class="card-box-ico">
                      <span class="fa fa-book"></span>
                    </div>
                    <div class="card-title-c align-self-center">
                      <h2 class="title-c">Apuntes</h2>
                    </div>
                  </div>
                  <div class="card-body-c">
                    <p class="content-c">
                      Anuncios sobre la venta de apuntes o libros sobre un campo determinado.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="section-news section-t8">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="title-wrap d-flex justify-content-between">
                  <div class="title-box">
                    <h2 class="title-a">Noticias</h2>
                  </div>
                  <div class="title-link">
                    <router-link :to="{ name: 'noticias' }" ><a >Resto de noticias<span class="ion-ios-arrow-forward"></span></a></router-link>
                  </div>
                </div>
              </div>
            </div>
            <div id="carouselnoticias" class="carousel slide" data-ride="carousel">
            <!-- Indicador del carousel -->
            <ol class="carousel-indicators">
              <li data-target="#carouselnoticias" data-slide-to="0" class="active"></li>
              <li data-target="#carouselnoticias" data-slide-to="1"></li>
              <li data-target="#carouselnoticias" data-slide-to="2"></li>
            </ol>
            <!-- Objetos del carousel -->
            <div class="carousel-inner">
              <div class="item carousel-item active">
                <div class="row">
                  <div v-for="Producto of Productos_noticias.slice(0,3)" class="col-md-4">
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

              <div class="item carousel-item">
                <div class="row">
                  <div v-for="Producto of Productos_noticias.slice(3,6)" class="col-md-4">
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

              <div class="item carousel-item">
                <div class="row">
                  <div v-for="Producto of Productos_noticias.slice(6,9)" class="col-md-4">
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

            </div>
            <!-- Control del carousel -->
            <a class="carousel-control-prev carousel-control left " href="#carouselnoticias" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next carousel-control right" href="#carouselnoticias" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
            </div>
          </div>
        </section>

        <section class="section-news section-t8">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="title-wrap d-flex justify-content-between">
                  <div class="title-box">
                    <h2 class="title-a">Clases Particulares</h2>
                  </div>
                  <div class="title-link">
                    <router-link :to="{ name: 'clases' }" ><a >Resto de anuncios <span class="ion-ios-arrow-forward"></span></a></router-link>
                  </div>
                </div>
              </div>
            </div>
            <div id="carouselclases" class="carousel slide" data-ride="carousel">
            <!-- Indicador del carousel -->
            <ol class="carousel-indicators">
              <li data-target="#carouselclases" data-slide-to="0" class="active"></li>
              <li data-target="#carouselclases" data-slide-to="1"></li>
              <li data-target="#carouselclases" data-slide-to="2"></li>
            </ol>
            <!-- Objetos del carousel -->
            <div class="carousel-inner">
              <div class="item carousel-item active">
                <div class="row">
                  <div v-for="Producto of Productos_clases.slice(0,3)" class="col-md-4">
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

              <div class="item carousel-item">
                <div class="row">
                  <div v-for="Producto of Productos_clases.slice(3,6)" class="col-md-4">
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

              <div class="item carousel-item">
                <div class="row">
                  <div v-for="Producto of Productos_clases.slice(6,9)" class="col-md-4">
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

            </div>
            <!-- Control del carousel -->
            <a class="carousel-control-prev carousel-control left " href="#carouselclases" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next carousel-control right" href="#carouselclases" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
            </div>
          </div>
        </section>

        <section class="section-news section-t8">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="title-wrap d-flex justify-content-between">
                  <div class="title-box">
                    <h2 class="title-a">Apuntes</h2>
                  </div>
                  <div class="title-link">
                    <router-link :to="{ name: 'apuntes' }" ><a >Resto de apuntes <span class="ion-ios-arrow-forward"></span></a></router-link>
                  </div>
                </div>
              </div>
            </div>
            <div id="carouselapuntes" class="carousel slide" data-ride="carousel">
            <!-- Indicador del carousel -->
            <ol class="carousel-indicators">
              <li data-target="#carouselapuntes" data-slide-to="0" class="active"></li>
              <li data-target="#carouselapuntes" data-slide-to="1"></li>
              <li data-target="#carouselapuntes" data-slide-to="2"></li>
            </ol>
            <!-- Objetos del carousel -->
            <div class="carousel-inner">
              <div class="item carousel-item active">
                <div class="row">
                  <div v-for="Producto of Productos_apuntes.slice(0,3)" class="col-md-4">
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

              <div class="item carousel-item">
                <div class="row">
                  <div v-for="Producto of Productos_apuntes.slice(3,6)" class="col-md-4">
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

              <div class="item carousel-item">
                <div class="row">
                  <div v-for="Producto of Productos_apuntes.slice(6,9)" class="col-md-4">
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

            </div>
            <!-- Control del carousel -->
            <a class="carousel-control-prev carousel-control left " href="#carouselapuntes" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next carousel-control right" href="#carouselapuntes" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
            </div>
          </div>
        </section>

  </div>

</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        Productos_clases: [],
        Productos_apuntes: [],
        Productos_noticias: [],
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
            this.Productos_clases = data.filter(data =>  data.tipo == 'clases');
            this.Productos_apuntes = data.filter(data =>  data.tipo == 'apuntes');
            this.Productos_noticias = data.filter(data =>  data.tipo == 'noticias');
          });
      },
    }
  };
</script>
