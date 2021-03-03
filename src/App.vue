<template>
  <div id="app">
    <Wrapper />
  </div>
</template>

<script>
import Wrapper from "./components/Wrapper.vue";

export default {
  name: 'App',
  components: {
    Wrapper
  },
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #eee;
    background: #222;
  }
</style>
