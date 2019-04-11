<template>
  <div class="container">
    <!--/ Intro Single star /-->
    <section class="intro-single">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-8">
            <div class="title-single-box">
              <h1 class="title-single">Registro</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--/ Intro Single End /-->
    <div id="m_error_r"></div>
    <form id="registro" @submit.prevent="register" class="text-left">
      <div class="form-group row">
        <div class="form-group col">
          <label for="name">Nombre</label>
          <input type="text" class="form-control" id="name" placeholder="Nombre" v-model="name" required>
        </div>
        <div class="form-group col">
          <label for="surname">Apellidos</label>
          <input type="text" class="form-control" id="surname" placeholder="Apellidos" v-model="surname" required>
        </div>
        <div class="form-group">
          <label for="birthdate">
            Fecha de nacimiento
          </label>
          <input type="date" class="form-control" id="birthdate" placeholder="Fecha de nacimiento" v-model="birthdate" required>
        </div>

      </div>

      <div class="form-group row">

        <div class="form-group col">
          <label for="telephone">
            Teléfono
          </label>
          <input type="telephone" class="form-control" id="telephone" aria-describedby="telephoneHelp" placeholder="Número de Teléfono" v-model="telephone" required>
        </div>

        <div class="form-group col">
          <label for="email">
            Email
          </label>
          <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Email" v-model="email" required>
        </div>

        <div class="form-group col">
          <label for="password">Contraseña</label>
          <input type="password" class="form-control" id="password" placeholder="Contraseña" v-model="password">
        </div>
      </div>

      <div class="form-group">
          <label for="paragraph">Descripción personal</label>
          <textarea type="paragraph" class="form-control" id="paragraph" placeholder="Descripción" v-model="paragraph" cols="30" rows="5" ></textarea>
      </div>

      <div  class="form-group" align="center">
        <label for="price">Subir Imagen</label>
        </br>
        <label for="Texto">Si no visualiza la imagen recarga la página</label>
          <div class="card">
            <img class="card-Foto" id="img-preview">
            <div class="card-footer">
                <input  type="file" id="img-uploader">
                <progress id="img-upload-bar" value="0" max="100" style="width:100%"></progress>
            </div>
        </div>
      </div>

      <div class="form-group" align="center">
          <button type="submit" class="btn btn-b-n" value="registrarse"  @click="">Registrarse</button>
      </div>

    </form>
  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
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
      SaberFoto:'',
    }
  },
  methods: {
    register () {
      this.$store.dispatch('register', {
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
        this.$router.push({ name: 'Login' })
      })
      .catch(error => {
        $('#m_error_r').empty()
        $('#m_error_r').append(`
            <br>
            <div class="alert alert-danger" role="alert">
              El email introducido está en uso
            </div>
          `)
        //resolve(error)
      })
    }
  }
}
</script>
