<template>
    <footer>
        <a href="https://github.com/lukkanog/conversor-moedas" target="_blank">
            <img class="github" src="../assets/icons/github-logo.png">
        </a>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>


<style scoped>
    footer{
        position: absolute;
        bottom: 2.5%;
        width: 90%;
        padding: 0;
        margin: 0;
    }

    .github{
        width: 40px;
        filter: opacity(50%);
        transition: .5s;
    }

    .github:hover{
        filter: none;
    }
</style>