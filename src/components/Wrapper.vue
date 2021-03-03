<template>
    <div>
        <h1>Conversor de moedas</h1>
        <Converter />
    </div>
</template>

<script>
import Converter from "./Converter.vue";

export default {
    name: "Wrapper",
    components: {Converter}
}
</script>

<style scoped>

</style>