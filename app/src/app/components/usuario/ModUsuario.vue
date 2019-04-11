<template>
  <div class="container">
    <!--/ Intro Single star /-->
    <section class="intro-single">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-8">
            <div class="title-single-box">
              <h1 class="title-single">Cuenta de usuario {{getName}}</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--/ Intro Single End /-->
    <div id="m_error_m"></div>
    <form id="actualizar" @submit.prevent="update" class="text-left">
      <div class="form-group">
        <label for="name">Nombre</label>
        <input type="text" class="form-control" id="name" v-model="name" :placeholder="getName">
      </div>
      <div class="form-group">
        <label for="surname">Apellidos</label>
        <input type="text" class="form-control" id="surname" v-model="surname" :placeholder="getSurname">
      </div>
      <div class="form-group">
        <label for="birthdate">
          Fecha de nacimiento
        </label>
        <input type="date" class="form-control" id="birthdate" v-model="birthdate" :placeholder="getBirthdate">
      </div>
      <div class="form-group">
        <label for="telephone">
          Teléfono
        </label>
        <input type="telephone" class="form-control" id="telephone" v-model="telephone" :placeholder="getTelephone">
      </div>
      <div class="form-group">
        <label for="email">
          Email
        </label>
        <input type="email" class="form-control" id="email" v-model="email" :placeholder="getEmail">
      </div>
      <div class="form-group">
        <label for="password">Contraseña</label>
        <input type="password" class="form-control" v-model="password" id="password" placeholder="Contraseña">
      </div>
      <div class="form-group">
          <label for="paragraph">Descripción personal</label>
          <textarea type="paragraph" class="form-control" id="paragraph" :placeholder="getParagraph" v-model="paragraph" cols="30" rows="5" ></textarea>
      </div>

      <div class="form-group" align="center">
        <label for="price">Subir Nueva Imagen</label>
          <div class="card">
            <img  class="card-Foto" id="img-preview">
            <div class="card-footer">
                <input  type="file" id="img-uploader">
                <progress id="img-upload-bar" value="0" max="100" style="width:100%"></progress>
            </div>
        </div>
      </div>

      <div class="form-group">
        <label class="col-form-label col-sm-2">Género</label>
        <div class="col-sm-10">
          <div class="form-check">
            <input class="form-check-input" type="radio" name="generos" id="genero" value="masculino">
            <label class="form-check-label" for="masculino">
              Masculino
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="generos" id="genero" value="femenino">
            <label class="form-check-label" for="femenino">
              Femenino
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="generos" id="genero" value="otro">
            <label class="form-check-label" for="otro">
              Otro
            </label>
          </div>
        </div>
      </div>
      <button type="submit" value="guardar" class="btn btn-outline-success">Guardar datos</button>

    </form>
    <br>
    <button @click="deleteUser()" value="eliminar" class="btn btn-danger">Eliminar usuario</button>
  </div>
</template>

<script>
export default {
  name: 'ModUsuario',
  data() {
    return {
      name: '',
      surname: '',
      paragraph: '',
      image: '',
      telephone: '',
      email: '',
      password: '',
      birthdate: '',
      genre: '',
    }
  },
  created(){
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

    deleteUser () {
      //this.$router.push({ name: 'DeleteUser'})
      this.$store.dispatch('deleteUser')
      .then(response => {
        this.$store.dispatch('destroyToken')
        this.$router.push({ name: 'Inicio'})
        // this.$router.push({ name: 'Inicio'})
      })
      .catch(err => {
        $('#m_error_m').empty()
        $('#m_error_m').append(`
            <br>
            <div class="alert alert-danger" role="alert">
              No se ha podido eliminar el usuario.
            </div>
          `)
      })
    },
    update () {
      this.$store.dispatch('update', {
        name: this.name,
        surname: this.surname,
        paragraph: this.paragraph,
        image: document.getElementById('img-preview').src,
        telephone: this.telephone,
        email: this.email,
        password: this.password,
        birthdate: this.birthdate,
        genre: this.genre
      })
      .then(response => {
        $('#m_error_m').empty()
        $('#m_error_m').append(`
            <br>
            <div class="alert alert-success" role="alert">
              Usuario modificado correctamente
            </div>
          `)
        //this.$router.push({ name: 'ModUsuario' })
      })
      .catch(error => {
        $('#m_error_m').empty()
        $('#m_error_m').append(`
            <br>
            <div class="alert alert-danger" role="alert">
              Email en uso
            </div>
          `)
      })
    },
  }
}
</script>
