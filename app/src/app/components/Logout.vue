<template>
</template>
<script>
  export default {
    created(){
      this.$store.dispatch('destroyToken')
      this.$router.push({ name: 'index'})
      /* .then(response => {
        console.log("dsafad")
        this.$router.push({ name: 'Inicio'})
        resolve(response)
      })
      .catch(error => {
        console.log("dsafad")
        this.$router.push({ name: 'Inicio'})
        reject(error)
      }) */
    }

  }
</script>
