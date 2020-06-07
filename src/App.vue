<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  methods: {
    how() {
      console.log('can i?')
    },
    saveState(){
      localStorage.setItem("state",JSON.stringify(this.$store.state)) //刷新后state也会被保存,存了再loaclStorage
    }
  },
  mounted() {
      window.addEventListener('unload',this.saveState)       
  }
}
</script>
<style>
html,body,#app{
  margin:0;
  padding:0;
  height:100vh;
}
</style>
