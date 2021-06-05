<template>
    <div class="error">
        {{text}}
    </div>
</template>

<script>
export default {
    props: ['text']
}
</script>

<style scoped lang="scss">
$fontmenu: "Comfortaa", sans-serif;
.error {
    display: inline-block;
    color: #fff;
    font-family: $fontmenu;
    font-size: 16px;
    line-height: 32px;
    border: 5px solid #ff6e6e;
    padding: 30px 20px;
    margin-top: 15px;
}
</style>