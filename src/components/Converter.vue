<template>
    <div class="converter">

            <div class="box">
                <div class="flex-group">
                    <label class="select">De 
                        <select class="input" name="baseCurrency" id="baseCurrency" v-model="baseCurrency">
                            <option value="BRL">Real</option>
                            <option value="USD">Dólar Americano</option>
                            <option value="EUR">Euro</option>
                            <option value="GBP">Libra Esterlina</option>
                            <option value="CAD">Dólar Canadense</option>
                            <option value="SEK">Coroa Sueca</option>
                        </select>
                    </label>

                    <button v-on:click="swapCurrencies" class="swap-button">
                        <img src="../assets/icons/swap-icon.svg" alt="">
                    </button>

                    <label class="select">Para 
                        <select  class="input" name="toCurrency" id="toCurrency" v-model="toCurrency">
                            <option value="BRL">Real</option>
                            <option value="USD">Dólar Americano</option>
                            <option value="EUR">Euro</option>
                            <option value="GBP">Libra Esterlina</option>
                            <option value="CAD">Dólar Canadense</option>
                            <option value="SEK">Coroa Sueca</option>
                        </select>
                    </label>
                </div>

            <input class="input"  type="number" step=".01" v-model="initialValue" placeholder="Insira o valor a ser convertido">
            <p class="result">{{convertedValue ? convertedValue : `O resultado aparecerá aqui :D`}}</p>

            </div>
        
    </div>
</template>

<script>
export default {
    name: "Converter",
    data(){
        return({
            baseCurrency: "BRL",
            toCurrency: "USD",
            initialValue : null,
            currencyValue : null,
            convertedValue : null,
        })
    },
    methods: {
        convertValues: function(){
            fetch(`https://api.exchangeratesapi.io/latest?base=${this.baseCurrency}&symbols=${this.toCurrency}`)
            .then(response => response.json())
            .then(data => this.handleData(data))
            .catch(err => console.log(err))
        },

        handleData : function(data){
            this.currencyValue = data.rates[this.toCurrency];
            const convertedValue = this.initialValue * this.currencyValue;
            
            this.convertedValue = (Math.round(convertedValue * 100) / 100).toFixed(2);
        },

        swapCurrencies : function(){
            [this.baseCurrency, this.toCurrency] = [this.toCurrency, this.baseCurrency];
        }

    },
    watch: {
        initialValue : function() {
            this.convertValues();
        },

        baseCurrency : function() {
            this.convertValues();
        },

        toCurrency : function() {
            this.convertValues();
        },

        
    }
}
</script>

<style scoped>
    .input{
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background: #222;
        color: #eee;
        border: unset;
        width: 100%;
        margin: .5rem 0;
        padding: 5px;
    }

    .flex-group{
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
    }

    .select{
        text-align: left;
        width: 49%;
    }

    .converter{
        width: 70%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        margin: auto;
    }

    .box{
        background-color: #333;
        width: 60%;
        height: 200px;
        padding: 1.5rem;
        border-radius: 15px;
        margin: 1rem 0;
        display: flex;
        flex-direction: column;
    }

    .result{
        font-weight: bolder;
        font-size: 1.5rem;
    }

    .result::before{
        content: "";
        display: block;
        width: 100%;
        background: #444;
        height: 3px;
        margin: .75rem 0;
    }

    .swap-button{
        width: 2.5rem;
        margin: 0 .75rem;
        transition: .25s;

        background: none;
        border: none;
        cursor: pointer;
    }

    .swap-button:hover,
    .swap-button:focus{
        outline: none;
        transform: scale(1.1);
    }


    .swap-button img{
        width: 100%;
    }

</style>