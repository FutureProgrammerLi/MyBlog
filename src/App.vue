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
    }
  },
}
</script>
<style>
html,body,#app{
  margin:0;
  padding:0;
  height:100vh;
}
</style>
