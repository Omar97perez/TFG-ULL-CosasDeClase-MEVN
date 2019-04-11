<template>
  <div>
    <!--/ Intro Single star /-->
    <section class="intro-single">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-8">
            <div class="title-single-box">
              <h1 class="title-single">Administrador</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--/ Intro Single End /-->

    <!--/ Property Grid Star /-->
      <section class="property-grid grid">
        <div class="container">
            <div class="row" align="center">
              <div class="col-12" >
                    <h4><strong>Subir Producto</strong></h4>
              </div>
            </div>

            <div class="row margin-1">
              <div class="col-md-12">
                    <form @submit.prevent="sendProducto">
                      <div class="form-group row">
                          <div class="col">
                              <label for="tittle">Anunciante</label>
                              <input v-model="Producto.anunciante" type="text" class="form-control">
                          </div>

                          <div class="col">
                              <label for="tittle">Titulo del producto</label>
                              <input v-model="Producto.titulo" type="text" class="form-control">
                          </div>

                          <div class="col">
                              <label for="tittle">Fecha</label>
                              <input v-model="Producto.fecha" type="date" class="form-control" />
                          </div>
                      </div>

                      <div class="form-group row">
                          <div class="col">
                            <label for="sel1">Tipo de producto:</label>
                            <select class="form-control" id="product" name="product" v-model="Producto.tipo" style="height: 40px;">
                                <option value="0"></option>
                                <option value="clases">Clases Particulares</option>
                                <option value="apuntes">Apuntes</option>
                                <option value="noticias">Noticias</option>
                            </select>
                          </div>

                          <div class="col">
                            <label for="tittle">Provincia</label>
                            <select class="form-control" id="provin" name="provincia" v-model="Producto.provincia" style="height: 40px;">
                                <option value="0"></option>
                                <option value="Tenerife">Santa Cruz de Tenerife</option>
                                <option value="Gran Canaria">Las Palmas de Gran Canaria</option>
                            </select>
                          </div>
                          <div class="col">
                            <label for="tittle">¿Quiere subir foto?</label>
                            <select class="form-control" id="SaberFoto" name="SabeFoto" v-model="SaberFoto" style="height: 40px;">
                                <option value="No"></option>
                                <option value="Si">Sí</option>
                                <option value="No">No</option>
                            </select>
                          </div>
                      </div>
                      <div v-if="Producto.tipo === 'clases' || Producto.tipo === 'apuntes'" class="form-group" id="game">
                        <div class="form-group row">
                            <div class="col">
                                <label for="tittle">Localidad</label>
                                <input v-model="Producto.localidad" type="text" class="form-control">
                            </div>

                            <div class="col">
                                <label for="price">Precio</label>
                                <input v-model="Producto.precio" type="text" class="form-control">
                            </div>
                            <div class="col">
                              <label for="sel1">Nivel de las clases:</label>
                              <select v-model="Producto.nivel" class="form-control" name="" id="" style="height: 40px;">
                                  <option value="todos">Todos</option>
                                  <option value="primaria">Primaria</option>
                                  <option value="secundaria">Secundaria</option>
                                  <option value="bachillerato">Bachillerato</option>
                                  <option value="universidad">Universidad</option>
                              </select>
                            </div>
                        </div>
                      </div>


                      <div class="form-group">
                          <label for="desc">Descripción del articulo</label>
                          <textarea v-model="Producto.descripcion" name="desc" id="desc" cols="30" rows="5" class="form-control"></textarea>
                      </div>


                      <div v-if="SaberFoto === 'Si'" class="form-group" align="center">
                        <label for="price">Subir Imagen</label>
                          <div class="card">
                            <img class="card-Foto" id="img-preview">
                            <div class="card-footer">
                                <input  type="file" id="img-uploader">
                                <progress id="img-upload-bar" value="0" max="100" style="width:100%"></progress>
                            </div>
                        </div>
                      </div>
                      <div class="form-group" align="center">
                          <button type="submit" class="btn btn-b-n" >Publicar</button>
                      </div>

                    </form>
              </div>
            </div>
            <div class="row" align="center">
              <div class="col-12" >
                    <h4><strong>Buscador</strong></h4>
              </div>
            </div>
            <div class="row margin-1">
                    <div class="col">
                      <input type="text" class="form-control form-control-lg form-control-a" placeholder="¿Qué buscas?" v-model="busqueda" name="buscar" value="buscar" v-on:click="resetpag">
                      </div>
                      <div class="col">
                        <select class="custom-select" id="city" v-model="ciudad" value=""  @change="buscarProducto" v-on:click="resetpag">
                          <option value="" >Todas las ciudades</option>
                          <option value="Tenerife">Santa Cruz de Tenerife</option>
                          <option value="Gran Canaria">Las Palmas de Gran Canaria</option>
                        </select>
                      </div>
                      <div class="col">
                        <select class="custom-select" id="city" v-model="tipo" value=""  @change="buscarProducto" v-on:click="resetpag">
                          <option value="">Todos</option>
                          <option value="noticias">Noticias</option>
                          <option value="clases">Clases Particulares</option>
                          <option value="apuntes">Apuntes</option>
                        </select>
                      </div>
              <div class="col-md-12 buscadmin">
                <table class="table table-striped">
                  <thead style="background-color:#434343;color:#ffffff">
                    <tr>
                      <th >Anunciante</th>
                      <th >Título</th>
                      <th >Fecha</th>
                      <th>Foto</th>
                      <th>Tipo</th>
                      <th>Nivel</th>
                      <th>Precio</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody >
                    <tr v-for="Producto of Productos">
                      <td>{{Producto.anunciante}}</td>
                      <td>{{Producto.titulo}}</td>
                      <td>{{Producto.fecha}}</td>
                      <td>
                        <div class="img-box">
                          <img v-bind:src="Producto.foto"  width="150" height="150"></img>
                        </div>
                      </td>
                      <td>{{Producto.tipo}}</td>
                      <td>{{Producto.nivel}}</td>
                      <td>{{Producto.precio}}</td>
                      <td>
                        <button @click="deleteProducto(Producto._id)" class="btn btn-danger mb-4" >Delete</button>
                        <button @click="editProducto(Producto._id)" class="btn btn-secondary" style="background-color:#434343">Edit</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
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

    </div>

</template>

<script>
class Producto {
  constructor(anunciante = '',fecha = '',titulo = '',foto = '',descripcion = '',tipo = '',nivel = '',provincia = '',localidad = '',precio = '') {
    this.anunciante = anunciante;
    this.fecha = fecha;
    this.titulo = titulo;
    this.foto = foto;
    this.descripcion = descripcion;
    this.tipo = tipo;
    this.nivel = nivel;
    this.provincia = provincia;
    this.localidad = localidad;
    this.precio = precio;
  }
}
export default {
  data() {
    return {
      Producto: new Producto(),
      Productos: [],
      edit: false,
      ProductoToEdit: '',
      ProductosPaginacion: [],
      Paginacion: [],
      ciudad: '',
      tipo: '',
      numeropagina: 1,
      tampagina: '10',
      numero: '',
      busqueda: '',
      SaberFoto:'',
    }
  },
  created() {
    this.getProductos(this.$store.getters.email);
    this.NumPaginas();
  },
  computed: {
    getEmail() {
      return this.$store.getters.email
    },
  },
  methods: {
    sendProducto() {
      this.Producto.anunciante = this.$store.getters.email;
      this.Producto.foto = document.getElementById('img-preview').src;
      if(this.edit === false) {
        fetch('/api/CosasDeClase/Producto/', {
          method: 'POST',
          body: JSON.stringify(this.Producto),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'authorization': localStorage.getItem('token')
          }
        })
          .then(res => res.json())
          .then(data => {
            this.getProductos();
            this.Producto = new Producto();
          });
      }
      else {
        fetch('/api/CosasDeClase/Producto/' + this.ProductoToEdit, {
          method: 'PUT',
          body: JSON.stringify(this.Producto),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'authorization': localStorage.getItem('token')
          }
        })
          .then(res => res.json())
          .then(data => {
            this.getProductos();
            this.Producto = new Producto();
            this.edit = !this.edit;
          });
      }
    },
    getProductos(email) {
      fetch('/api/CosasDeClase/Producto/')
        .then(res => res.json())
        .then(data => {
          this.Paginacion = data;
          this.Productos = this.Paginacion.slice(0,this.tampagina);
        });
    },
    deleteProducto(ProductoId) {
      fetch('/api/CosasDeClase/Producto/' + ProductoId, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'authorization': localStorage.getItem('token')
        }
      })
        .then(res => res.json())
        .then(data => {
          this.getProductos();
        });
    },
    editProducto(ProductoId) {
      fetch('/api/CosasDeClase/Producto/' + ProductoId)
        .then(res => res.json())
        .then(data => {
          const { _id,anunciante,fecha,titulo,foto,descripcion,tipo,nivel,provincia,localidad,precio,} = data;
          this.Producto = new Producto(anunciante,fecha,titulo,foto,descripcion,tipo,nivel,provincia,localidad,precio,);
          this.ProductoToEdit = _id;
          this.edit = true;
        });
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
      this.ProductosPaginacion = this.Paginacion.filter(Producto => Producto.tipo.includes(this.tipo) && Producto.provincia.includes(this.ciudad) && Producto.titulo.includes(this.busqueda) );
      this.buscador_pagination(this.ProductosPaginacion);
    }
  },
}
</script>
