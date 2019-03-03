<template>
  <div>

    <body>
      <!--/ Carousel Star /-->
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
<!--/ Carousel end /-->

<!--/ Services Star /-->
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
<!--/ Services End /-->

<!--/ News Star /-->
<section class="section-news section-t8">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="title-wrap d-flex justify-content-between">
          <div class="title-box">
            <h2 class="title-a">Últimas noticias</h2>
          </div>
          <div class="title-link">
            <router-link :to="{ name: 'noticias' }" ><a >Todas las noticias<span class="ion-ios-arrow-forward"></span></a></router-link>
          </div>
        </div>
      </div>
    </div>
    <div id="new-carousel" class="owl-carousel owl-theme">
      <div class="carousel-item-c">
        <div class="card-box-b card-shadow news-box">
          <div class="img-box-b">
            <img src="img/post-2.jpg" alt="" class="img-b img-fluid">
          </div>
          <div class="card-overlay">
            <div class="card-header-b">
              <div class="card-category-b">
                <a href="#" class="category-b">EBAU</a>
              </div>
              <div class="card-title-b">
                <h2 class="title-2">
                  <a href="blog-single.html">Proceso de admisión
                    <br>Abierto</a>
                </h2>
              </div>
              <div class="card-date">
                <span class="date-b">19 Febrero 2019</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item-c">
        <div class="card-box-b card-shadow news-box">
          <div class="img-box-b">
            <img src="img/post-5.jpg" alt="" class="img-b img-fluid">
          </div>
          <div class="card-overlay">
            <div class="card-header-b">
              <div class="card-category-b">
                <a href="#" class="category-b">Día importante</a>
              </div>
              <div class="card-title-b">
                <h2 class="title-2">
                  <a href="blog-single.html">Día del niño
                    <br>Abierto</a>
                </h2>
              </div>
              <div class="card-date">
                <span class="date-b">18 Feb 2019</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item-c">
        <div class="card-box-b card-shadow news-box">
          <div class="img-box-b">
            <img src="img/post-7.jpg" alt="" class="img-b img-fluid">
          </div>
          <div class="card-overlay">
            <div class="card-header-b">
              <div class="card-category-b">
                <a href="#" class="category-b">Día importante</a>
              </div>
              <div class="card-title-b">
                <h2 class="title-2">
                  <a href="blog-single.html">Uso de tablets en niños
                    <br>Abierto</a>
                </h2>
              </div>
              <div class="card-date">
                <span class="date-b">17 Feb 2019</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item-c">
        <div class="card-box-b card-shadow news-box">
          <div class="img-box-b">
            <img src="img/post-3.jpg" alt="" class="img-b img-fluid">
          </div>
          <div class="card-overlay">
            <div class="card-header-b">
              <div class="card-category-b">
                <a href="#" class="category-b">Día importante</a>
              </div>
              <div class="card-title-b">
                <h2 class="title-2">
                  <a href="#">Día para aprender
                      <br>Abierto</a>
                </h2>
              </div>
              <div class="card-date">
                <span class="date-b">15 Feb 2019</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<!--/ News End /-->

<!--/ Agents Star /-->
<section class="section-agents section-t8">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="title-wrap d-flex justify-content-between">
          <div class="title-box">
            <h2 class="title-a">Mejores profesores</h2>
          </div>
          <div class="title-link">
            <router-link :to="{ name: 'clases' }" ><a >Todos los profesores<span class="ion-ios-arrow-forward"></span></a></router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <div class="card-box-d">
          <div class="card-img-d">
            <img src="img/agent-4.jpg" alt="" class="img-d img-fluid">
          </div>
          <div class="card-overlay card-overlay-hover">
            <div class="card-header-d">
              <div class="card-title-d align-self-center">
                <h3 class="title-d">
                  <a href="agent-single.html" class="link-two">Margaret Sotillo
                    <br> Escala</a>
                </h3>
              </div>
            </div>
            <div class="card-body-d">
              <p class="content-d color-text-a">
                Doy cualquier nivel de inglés en Santa Cruz (Tenerife).
              </p>
              <div class="info-agents color-a">
                <p>
                  <strong>Teléfono: </strong> +54 356 945234</p>
                <p>
                  <strong>Email: </strong> profesor@gmail.com</p>
              </div>
            </div>
            <div class="card-footer-d">
              <div class="socials-footer d-flex justify-content-center">
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
      <div class="col-md-4">
        <div class="card-box-d">
          <div class="card-img-d">
            <img src="img/agent-1.jpg" alt="" class="img-d img-fluid">
          </div>
          <div class="card-overlay card-overlay-hover">
            <div class="card-header-d">
              <div class="card-title-d align-self-center">
                <h3 class="title-d">
                  <a href="agent-single.html" class="link-two">Stiven Spilver
                    <br> Darw</a>
                </h3>
              </div>
            </div>
            <div class="card-body-d">
              <p class="content-d color-text-a">
                Doy Matemáticas y Física hasta Bachillerato Las Palmas (Gran Canaria)
              </p>
              <div class="info-agents color-a">
                <p>
                  <strong>Teléfono: </strong> +54 356 945234</p>
                <p>
                  <strong>Email: </strong> profesor@gmail.com</p>
              </div>
            </div>
            <div class="card-footer-d">
              <div class="socials-footer d-flex justify-content-center">
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
      <div class="col-md-4">
        <div class="card-box-d">
          <div class="card-img-d">
            <img src="img/agent-5.jpg" alt="" class="img-d img-fluid">
          </div>
          <div class="card-overlay card-overlay-hover">
            <div class="card-header-d">
              <div class="card-title-d align-self-center">
                <h3 class="title-d">
                  <a href="agent-single.html" class="link-two">Emma Toledo
                    <br> Cascada</a>
                </h3>
              </div>
            </div>
            <div class="card-body-d">
              <p class="content-d color-text-a">
                Doy clases de arte y latín Tacoronte (Tenerife).
              </p>
              <div class="info-agents color-a">
                <p>
                  <strong>Teléfono: </strong> +54 356 945234</p>
                <p>
                  <strong>Email: </strong> profesor@gmail.com</p>
              </div>
            </div>
            <div class="card-footer-d">
              <div class="socials-footer d-flex justify-content-center">
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
    </div>
  </div>
</section>
<!--/ Agents End /-->

<!--/ Property Star /-->
<section class="section-property section-t8">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="title-wrap d-flex justify-content-between">
          <div class="title-box">
            <h2 class="title-a">Mejores apuntes</h2>
          </div>
          <div class="title-link">
              <router-link :to="{ name: 'apuntes' }" ><a >Todos los apuntes<span class="ion-ios-arrow-forward"></span></a></router-link>
          </div>
        </div>
      </div>
    </div>
    <div id="property-carousel" class="owl-carousel owl-theme">
      <div class="carousel-item-b">
        <div class="card-box-a card-shadow">
          <div class="img-box-a">
            <img src="img/Apuntes-1.jpg" alt="" class="img-a img-fluid">
          </div>
          <div class="card-overlay">
            <div class="card-overlay-a-content">
              <div class="card-header-a">
                <h2 class="card-title-a">
                  <a href="property-single.html">Libro de
                    <br />Matemáticas</a>
                </h2>
              </div>
              <div class="card-body-a">
                <div class="price-box d-flex">
                  <span class="price-a">35 eu</span>
                </div>
                <a href="#" class="link-a"> Más información
                  <span class="ion-ios-arrow-forward"></span>
                </a>
              </div>
              <div class="card-footer-a">
                <ul class="card-info d-flex justify-content-around">
                  <li>
                    <h4 class="card-info-title">Precio</h4>
                    <span>30</span>
                  </li>
                  <li>
                    <h4 class="card-info-title">Lugar</h4>
                    <span>Santa Cruz </span>
                  </li>
                  <li>
                    <h4 class="card-info-title">Provincia</h4>
                    <span>Tenerife</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item-b">
        <div class="card-box-a card-shadow">
          <div class="img-box-a">
            <img src="img/Apuntes-2.jpg" alt="" class="img-a img-fluid">
          </div>
          <div class="card-overlay">
            <div class="card-overlay-a-content">
              <div class="card-header-a">
                <h2 class="card-title-a">
                  <a href="property-single.html">Libro de
                    <br />Lengua</a>
                </h2>
              </div>
              <div class="card-body-a">
                <div class="price-box d-flex">
                  <span class="price-a">35 eu</span>
                </div>
                <a href="#" class="link-a"> Más información
                  <span class="ion-ios-arrow-forward"></span>
                </a>
              </div>
              <div class="card-footer-a">
                <ul class="card-info d-flex justify-content-around">
                  <li>
                    <h4 class="card-info-title">Precio</h4>
                    <span>30</span>
                  </li>
                  <li>
                    <h4 class="card-info-title">Lugar</h4>
                    <span>Santa Cruz </span>
                  </li>
                  <li>
                    <h4 class="card-info-title">Provincia</h4>
                    <span>Tenerife</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item-b">
        <div class="card-box-a card-shadow">
          <div class="img-box-a">
            <img src="img/Apuntes-3.jpg" alt="" class="img-a img-fluid">
          </div>
          <div class="card-overlay">
            <div class="card-overlay-a-content">
              <div class="card-header-a">
                <h2 class="card-title-a">
                  <a href="property-single.html">Apuntes
                    <br />Lengua 2 bachillerato</a>
                </h2>
              </div>
              <div class="card-body-a">
                <div class="price-box d-flex">
                  <span class="price-a">35 eu</span>
                </div>
                <a href="#" class="link-a"> Más información
                  <span class="ion-ios-arrow-forward"></span>
                </a>
              </div>
              <div class="card-footer-a">
                <ul class="card-info d-flex justify-content-around">
                  <li>
                    <h4 class="card-info-title">Precio</h4>
                    <span>30</span>
                  </li>
                  <li>
                    <h4 class="card-info-title">Lugar</h4>
                    <span>Santa Cruz </span>
                  </li>
                  <li>
                    <h4 class="card-info-title">Provincia</h4>
                    <span>Tenerife</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item-b">
        <div class="card-box-a card-shadow">
          <div class="img-box-a">
            <img src="img/Apuntes-4.jpg" alt="" class="img-a img-fluid">
          </div>
          <div class="card-overlay">
            <div class="card-overlay-a-content">
              <div class="card-header-a">
                <h2 class="card-title-a">
                  <a href="property-single.html">Apuntes
                    <br />Psicología</a>
                </h2>
              </div>
              <div class="card-body-a">
                <div class="price-box d-flex">
                  <span class="price-a">35 eu</span>
                </div>
                <a href="#" class="link-a"> Más información
                  <span class="ion-ios-arrow-forward"></span>
                </a>
              </div>
              <div class="card-footer-a">
                <ul class="card-info d-flex justify-content-around">
                  <li>
                    <h4 class="card-info-title">Precio</h4>
                    <span>30</span>
                  </li>
                  <li>
                    <h4 class="card-info-title">Lugar</h4>
                    <span>Santa Cruz </span>
                  </li>
                  <li>
                    <h4 class="card-info-title">Provincia</h4>
                    <span>Tenerife</span>
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
<!--/ Property End /-->

    </body>
  </div>



</template>
