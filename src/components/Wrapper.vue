<template>
    <main class="wrapper">
        <slot></slot>
    </main>
</template>

<script>

export default {
    name: "Wrapper",
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