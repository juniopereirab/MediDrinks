<template>
  <medi-preco-nav/>
  <div class="homeContainer">
    <div class="homeTitle">
      <h2>Os melhores drinks Não-Alcoolicos do <span id="blue">Brasil</span></h2>
      <span id="gray">{{drinks.length}} resultados encontrados</span>
    </div>
    <div class="drinkContainer">
      <drink-card 
        v-for="drink in drinks" 
        :key="drink.idDrink" 
        :drinkName="drink.strDrink" 
        :drinkImg="drink.strDrinkThumb"
        :drinkId="drink.idDrink"
        @click="$router.push({path:`/productInfo/${drink.idDrink}`})"  
      />
    </div>
  </div>
</template>

<script>
import DrinkCard from '../components/DrinkCard.vue';
import MediPrecoNav from '../components/MediPrecoNav.vue';
import axios from 'axios';
export default {
  components: {
    DrinkCard,
    MediPrecoNav
  },
  data() {
    return {
      drinks: null
    }
  },
  mounted() {
    axios
      .get('https://www.thecocktaildb.com/api/json/v1/1/filter.php', {
        params: {
          a: "Non_Alcoholic"
        }
      })
      .then(response => (this.drinks = response.data['drinks']))
  }
}

</script>

<style>
* {
  border: 0;
  margin: 0;
  font-family: Inter;
}
.homeContainer {
  width: 100%;
  background: #EEF0F2 cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.homeContainer .homeTitle {
  position: relative;
  right: 25%;
  margin: 0 0 25px 0;
}

.homeContainer h2 {
  margin: 20px 0 0 0;
}

.drinkContainer {
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

span#blue {
  color: #4094F7;
}

span#gray{
  color: #9AA6AC;
}
</style>
