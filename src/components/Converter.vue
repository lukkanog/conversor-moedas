<template>
    <div class="converter">

            <div class="box">
                <div class="flex-group">
                    <label class="select">De 
                        <select v-on:change="convertValues" class="input" name="base" id="base" v-model="base">
                            <option value="BRL">Real</option>
                            <option value="USD">Dólar Americano</option>
                            <option value="EUR">Euro</option>
                            <option value="GBP">Libra Esterlina</option>
                            <option value="CAD">Dólar Canadense</option>
                            <option value="SEK">Coroa Sueca</option>
                        </select>
                    </label>


                    <label class="select">Para 
                        <select v-on:change="convertValues" class="input" name="to" id="to" v-model="to">
                            <option value="BRL">Real</option>
                            <option value="USD">Dólar Americano</option>
                            <option value="EUR">Euro</option>
                            <option value="GBP">Libra Esterlina</option>
                            <option value="CAD">Dólar Canadense</option>
                            <option value="SEK">Coroa Sueca</option>
                        </select>
                    </label>
                </div>

            <input class="input" v-on:input="convertValues" type="number" step=".01" v-model="initialValue">
            <p class="result">Resultado: {{convertedValue}}</p>

            </div>
        
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
        width: 50%;
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
</style>