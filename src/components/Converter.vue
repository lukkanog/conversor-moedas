<template>
    <div class="converter">

        <form v-on:submit.prevent v-on:change="convertValues">
            <div>
                <label for="base">De </label>
                <select name="base" id="base" v-model="base">
                    <option value="BRL">Real</option>
                    <option value="USD">Dólar Americano</option>
                    <option value="EUR">Euro</option>
                    <option value="GBP">Libra Esterlina</option>
                    <option value="CAD">Dólar Canadense</option>
                    <option value="SEK">Coroa Sueca</option>
                </select>

                <label for="to">Para </label>
                <select name="to" id="to" v-model="to">
                    <option value="BRL">Real</option>
                    <option value="USD">Dólar Americano</option>
                    <option value="EUR">Euro</option>
                    <option value="GBP">Libra Esterlina</option>
                    <option value="CAD">Dólar Canadense</option>
                    <option value="SEK">Coroa Sueca</option>
            </select>
            </div>

            <input type="number" step=".01" v-model="initialValue">

            <input type="submit" value="Converter" v-on.prevent>

        </form>

        <p>{{convertedValue}}</p>
        
    </div>
</template>

<script>
export default {
    name: "Converter",
    data(){
        return({
            base: "BRL",
            to: "USD",
            initialValue : 0,
            convertedValue : 0,
        })
    },
    methods: {
         convertValues: function(){
             fetch(`https://api.exchangeratesapi.io/latest?base=${this.base}&symbols=${this.to}`)
            .then(response => response.json())
            .then(data => this.handleData(data))
            .catch(err => console.log(err))
        },

        handleData : function(data){
            const currencyValue = data.rates[this.to];
            const convertedValue = this.initialValue * currencyValue;
            
            this.convertedValue = (Math.round(convertedValue * 100) / 100).toFixed(2);
        },

        calculateValue : function(value, parameterValue){
            return value * parameterValue;
        }
    }
}
</script>

<style scoped>

</style>