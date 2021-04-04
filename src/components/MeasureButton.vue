<template>
    <div class="measureButtons">
        <button id="left">XS</button>
        <button>S</button>
        <button>M</button>
        <button id="right">L</button>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.measureButtons {
    margin: 10px 0;
    width: 200px;
    height: 40px;
}

.measureButtons button {
    width: 25%;
    height: 100%;
    background: #F6F8F9;
}

button#left {
    border-radius: 6px 0px 0px 6px;
    background: #E5E9EB;
}

button#right {
    border-radius: 0px 6px 6px 0px;
}

</style>