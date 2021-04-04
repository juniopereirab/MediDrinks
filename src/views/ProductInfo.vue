<template>
  <medi-preco-nav/>
  <div class="homeContainer" v-if="product">
    <span class="pathPages"><span id="fakeLink" @click="$router.push('/')">Home</span> > <span id="fakeLink">Catalogo</span> > <span id="fakeLink">{{product.strDrink}}</span></span>
    <div class="drinkInfo">
      <img :src="product.strDrinkThumb"/>
      <div class="drinkRightInfo">
        <div>
          <h2 id="drinkTitle">{{product.strDrink}}</h2>
          <span id="gray">#{{product.idDrink}}</span>
        </div>
        <div class="moreDrinkInfo">
          <div class="drinkCategory">
            <span>Categoria: {{product.strCategory}}</span>
            <span>Alcoolico: {{product.strAlcoholic ? "Nao alcoolico" : null}}</span>
            <span>Copo de servir: {{product.strGlass}}</span>
          </div>
          <measure-button/>
          <button id="backHome" @click="$router.push('/')">Voltar para a pagina inicial</button>
          <div>
            <span>Ingredientes</span>
            <div class="ingredientsList">
              <div class="ingredientItem" v-if="product.strIngredient1">
                <span id="arrow">></span><span> {{product.strIngredient1}}</span>
              </div>
              <div class="ingredientItem" v-if="product.strIngredient2">
                <span id="arrow">></span><span> {{product.strIngredient2}}</span>
              </div>
              <div class="ingredientItem" v-if="product.strIngredient3">
                <span id="arrow">></span><span> {{product.strIngredient3}}</span>
              </div>
              <div class="ingredientItem" v-if="product.strIngredient4">
                <span id="arrow">></span><span> {{product.strIngredient4}}</span>
              </div>
              <div class="ingredientItem" v-if="product.strIngredient5">
                <span id="arrow">></span><span> {{product.strIngredient5}}</span>
              </div>
              <div class="ingredientItem" v-if="product.strIngredient6">
                <span id="arrow">></span><span> {{product.strIngredient6}}</span>
              </div>
              <div class="ingredientItem" v-if="product.strIngredient7">
                <span id="arrow">></span><span> {{product.strIngredient7}}</span>
              </div>
              <div class="ingredientItem" v-if="product.strIngredient8">
                <span id="arrow">></span><span> {{product.strIngredient8}}</span>
              </div>
              <div class="ingredientItem" v-if="product.strIngredient9">
                <span id="arrow">></span><span> {{product.strIngredient9}}</span>
              </div>
              <div class="ingredientItem" v-if="product.strIngredient10">
                <span id="arrow">></span><span> {{product.strIngredient10}}</span>
              </div>
              <div class="ingredientItem" v-if="product.strIngredient11">
                <span id="arrow">></span><span> {{product.strIngredient11}}</span>
              </div>
              <div class="ingredientItem" v-if="product.strIngredient12">
                <span id="arrow">></span><span> {{product.strIngredient12}}</span>
              </div>
              <div class="ingredientItem" v-if="product.strIngredient13">
                <span id="arrow">></span><span> {{product.strIngredient13}}</span>
              </div>
              <div class="ingredientItem" v-if="product.strIngredient14">
                <span id="arrow">></span><span> {{product.strIngredient14}}</span>
              </div>
              <div class="ingredientItem" v-if="product.strIngredient15">
                <span id="arrow">></span><span> {{product.strIngredient15}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import MediPrecoNav from '../components/MediPrecoNav.vue';
import MeasureButton from '../components/MeasureButton.vue';
export default {
  data() {
    return {
      product: null
    }
  },
  components: {
    MediPrecoNav,
    MeasureButton
  },
  mounted() {
    axios
      .get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php', {
        params: {
          i: this.$route.params.productId
        }
      })
      .then(response => (this.product = response.data.drinks[0]));
  }
}
</script>

<style scoped>
.pathPages {
  position: relative;
  right: 25%;
  margin: 30px 0;
}

.pathPages span#fakeLink:hover {
  text-decoration: underline;
  text-decoration-color: #4094F7;
  color: #4094F7;
  cursor: pointer;
}

.drinkInfo {
  display: flex;
  align-items: center;
  justify-content: center;
}

.drinkInfo img {
  width: 550px;
  height: 700px;
}

.drinkRightInfo {
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 30px;
}

h2#drinkTitle {
  font-size: 3rem;
}

span#gray {
  font-size: 2rem;
}

.moreDrinkInfo {
  display: flex;
  flex-direction: column;
  height: 600px;
  justify-content: space-around;
}

.drinkCategory {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80px;
}

button#backHome {
  background: #4094F7;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 16px;
  width: 380px;
  height: 40px;
  border-radius: 6px;
  color: #FFF;
  font-weight: bold;
  transition: .4s all;
}

button#backHome:hover {
  cursor: pointer;
  background: #3781d4;
}

.ingredientsList {
  display: flex;
  flex-direction: column;
  height: 350px;
  flex-wrap: wrap;
}

.ingredientItem {
  width: 200px;
  border-bottom: 1px solid #E5E9EB;
  padding: 15px;
}

.ingredientItem span#arrow {
  font-weight: 900;
  color: #9AA6AC;
}
</style>