<template>
  <div id="app">
    <Wrapper>
      <h1 class="title">Conversor de moedas</h1>
      <Converter />
      <Footer />
    </Wrapper>
  </div>
</template>

<script>
import Wrapper from "../components/Wrapper.vue";
import Converter from "../components/Converter.vue";
import Footer from "../components/Footer.vue";

export default {
  name: 'App',
  components: {
    Wrapper,
    Converter,
    Footer
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
