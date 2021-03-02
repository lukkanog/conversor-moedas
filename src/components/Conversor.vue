<template>
    <div>
        <p>De {{from}} para {{to}}</p>
    </div>
</template>

<script>
export default {
    name: "Conversor",
    data(){
        return({
            from: "BRL",
            to: "USD"
        })
    }
}
</script>

<style scoped>

</style>