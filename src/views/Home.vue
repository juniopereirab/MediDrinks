<template>
  <div class="navContainer">
    <div class="leftSide">
      <span id="navTitle"><span id="blue">Medi</span>Drinks</span>
      <span>Brasilia, DF</span>
    </div>
    <div class="rightSide">
      <a href="https://github.com/juniopereirab">@juniopereirab</a>
    </div>
  </div>
  <div class="homeContainer">
    <div class="homeTitle">
      <h2>Os melhores drinks nao-alcoolicos do <span id="blue">Brasil</span></h2>
      <span id="gray">50 resultados encontrados</span>
    </div>
    <div class="drinkContainer">
      <drink-card 
        v-for="drink in drinks" 
        :key="drink.idDrink" 
        :drinkName="drink.strDrink" 
        :drinkImg="drink.strDrinkThumb"
        :drinkId="drink.idDrink"  
      />
    </div>
  </div>
</template>

<script>
import DrinkCard from '../components/DrinkCard.vue';
import axios from 'axios';
export default {
  components: {
    DrinkCard,
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
.homeContainer {
  width: 100%;
  background: #EEF0F2;
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
.navContainer {
  width: 100%;
  height: 78px;
  border-bottom: 2px #E5E9EB;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navContainer .leftSide {
  display: flex;
  flex-direction: column;
  margin: 5px 20px;
}

.navContainer .leftSide span#navTitle {
  font-weight: bold;
  font-family: Inter;
}
span#blue {
  color: #4094F7;
}

span#gray{
  color: #9AA6AC;
}

.navContainer .rightSide {
  margin: 5px 20px;
  border: solid 1px #DDE2E4;
  border-radius: 6px;
  padding: 8px 16px;
  height: 40px;
  width: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
