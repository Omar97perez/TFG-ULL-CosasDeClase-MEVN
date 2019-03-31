<template>
</template>
<script>
  export default {
    created(){
      this.$store.dispatch('destroyToken')
      this.$router.push({ name: 'index'})
    }

  }
</script>
