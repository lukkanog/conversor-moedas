<template>
    <main class="wrapper">
        <h1 class="title">Conversor de moedas</h1>
        <Converter />
    </main>
</template>

<script>
import Converter from "./Converter.vue";

export default {
    name: "Wrapper",
    components: {Converter}
}
</script>

<style scoped>
    .title{
        margin:1em 0;
    }

    .wrapper{
        width: 90%;
        margin: auto;
        min-height: 100vh;
        padding-top: 15vh;
    }


</style>