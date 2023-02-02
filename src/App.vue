<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    created() {
      if (window.localStorage.getItem("store") !== null) {
        this.$store.replaceState(Object.assign({},
                this.$store.state,JSON.parse(window.localStorage.getItem("store"))))
        console.log('正在从localStorage恢复store')
        console.log(this.$store.state)
        window.localStorage.removeItem("store")
      }
      setTimeout(function () {
        document.getElementById("app").style.display = 'block'
        document.getElementById('loading').style.display = 'none'
      },1500)
    }
  }
</script>
<style>
#app {
  width: 100vw;
  height: 100vh;
}
</style>
