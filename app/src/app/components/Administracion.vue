<template class="pt-5">
    <div class="container-fluid pt-5">
     <h1 class="text-center pt-5"> Modificar Página </h1>
      <div class="row pt-5">
        <div class="col-md-12">
              <form @submit.prevent="sendProducto">
                <div class="form-group row">
                    <div class="col">
                        <label for="tittle">Titulo del producto</label>
                        <input v-model="Producto.titulo" type="text" class="form-control">
                    </div>

                    <div class="col">
                        <label for="price">Precio</label>
                        <input v-model="Producto.precio" type="text" class="form-control">
                    </div>
                </div>

                <div class="form-group">
                    <label for="desc">Descripción del articulo</label>
                    <textarea v-model="Producto.descripcion" name="desc" id="desc" cols="30" rows="5" class="form-control"></textarea>
                </div>

                <div class="form-group">
                    <label for="sel1">Tipo de producto:</label>
                    <select class="form-control" id="product" name="product" v-model="Producto.tipo" style="height: 40px;">
                        <option value="0"></option>
                        <option value="clases">Clases Particulares</option>
                        <option value="apuntes">Apuntes</option>
                        <option value="noticias">Noticias</option>
                    </select>
                </div>

                <div class="form-group">
                  <label for="price">URL imagen</label>
                  <input v-model="Producto.foto" type="text" class="form-control">
                </div>

                <button type="submit" class="btn btn-default">Publicar</button>
              </form>
        </div>
      </div>
      <div class="row pt-5">
        <div class="col-md-12">
          <table class="table table-striped">
            <thead style="background-color:#434343;color:#fb6207">
              <tr>
                <th >ID</th>
                <th >Nombre</th>
                <th>Foto</th>
                <th>Decripcion</th>
                <th>Tipo</th>
                <th>Plaforma</th>
                <th>Categoria</th>
                <th>Precio</th>
                <th>Oferta</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody >
              <tr v-for="Producto of Productos">
                <td>{{Producto._id}}</td>
                <td>{{Producto.titulo}}</td>
                <td>
                  <div class="img-box">
                    <img v-bind:src="Producto.foto"  width="150" height="150"></img>
                  </div>
                </td>
                <td>{{Producto.descripcion}}</td>
                <td>{{Producto.tipo}}</td>
                <td>{{Producto.plataforma}}</td>
                <td>{{Producto.categoria}}</td>
                <td>{{Producto.precio}}</td>
                <td>{{Producto.oferta}}</td>
                <td>
                  <button @click="deleteProducto(Producto._id)" class="btn btn-danger mb-4" >Delete</button>
                  <button @click="editProducto(Producto._id)" class="btn btn-secondary" style="background-color:#434343">Edit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

</template>

<script>
class Producto {
  constructor(titulo = '', foto = '',  descripcion = '', tipo = '', plataforma = '',categoria = '', precio = '', oferta = '',) {
    this.titulo = titulo;
    this.foto = foto;
    this.descripcion = descripcion;
    this.tipo = tipo;
    this.plataforma = plataforma;
    this.categoria = categoria;
    this.precio = precio;
    this.oferta = oferta;
  }
}
export default {
  data() {
    return {
      Producto: new Producto(),
      Productos: [],
      edit: false,
      ProductoToEdit: ''
    }
  },
  created() {
    this.getProductos();
  },
  methods: {
    sendProducto() {
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
    getProductos() {
      fetch('/api/CosasDeClase/Producto/')
        .then(res => res.json())
        .then(data => {
          this.Productos = data;
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
          const { _id,titulo,foto,descripcion,tipo,plataforma,categoria,precio,oferta} = data;
          this.Producto = new Producto(titulo,foto,descripcion,tipo,plataforma,categoria,precio,oferta);
          this.ProductoToEdit = _id;
          this.edit = true;
        });
    }
  }
}
</script>
