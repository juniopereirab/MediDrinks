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