<template>
  <div class="navContainer">
    <div class="leftSide">
      <span id="navTitle"><span id="blue">Medi</span>Drinks</span>
      <div>
        <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-location-512.png"/>
        <span>Brasilia, DF</span>
      </div>
    </div>
    <div class="rightSide">
      <img src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/142_Github-512.png"/>
      <a href="https://github.com/juniopereirab">@juniopereirab</a>
    </div>
  </div>
</template>

<style scoped>
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

.navContainer .leftSide img {
  width: 20px;
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

.navContainer .rightSide img {
  width: 30px;
}
</style>