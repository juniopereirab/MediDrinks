<template>
    <div class="drinkCard">
        <img :src="drinkImg"/>
        <div class="drinkInfo">
            <span>{{drinkName}}</span>
            <h3>#{{drinkId}}</h3>
        </div>
    </div>
</template>

<script>
export default {
    props: ['drinkName', 'drinkImg', 'drinkId']
}
</script>

<style scoped>
.drinkCard {
    width: 310px;
    height: 400px;
    border: 1px solid #E5E9EB;
    background: #FFF;
}

.drinkCard img {
    width: 310px;
    height: 280px;
}

.drinkInfo {
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>