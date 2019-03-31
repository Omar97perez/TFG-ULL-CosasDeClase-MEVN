<template>
  <div class="container">
    <!--/ Intro Single star /-->
    <section class="intro-single">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-8">
            <div class="title-single-box">
              <h1 class="title-single">Inicio de sesión</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--/ Intro Single End /-->
    <div id="m_error_l"></div>
    <form id="login" @submit.prevent="login" class="text-left">
      <div class="form-group">
        <label for="email"><b>Email</b></label>
        <input type="email" v-model="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Email">
        <small id="emailHelp" class="form-text text-muted">Nosotros no compartiremos tu Email con nadie.</small>
      </div>
      <div class="form-group">
        <label for="password"><b>Contraseña</b></label>
        <input type="password" v-model="password" class="form-control" id="password" placeholder="Contraseña">
      </div>
      <p>Si no tienes cuenta aún, puedes <router-link :to="{ name: 'Registro' }">Registrate</router-link>.</p>
      <button type="submit" class="btn btn-outline-success">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      email: 'omarperezznakar@gmail.com',
      password: '1234'
    }
  },
  methods: {
    login() {
      this.$store.dispatch('retrieveToken',{
        email: this.email,
        password: this.password
      })
      .then(response => {
        this.$store.dispatch('get_user_data')
        this.$router.push({ name: 'index' })
      })
      .catch(error => {
        $('#m_error_l').empty()
        $('#m_error_l').append(`
            <br>
            <div class="alert alert-danger" role="alert">
              Email o contraseña incorrectos.
            </div>
          `)
      })
    }
  }
}
</script>
