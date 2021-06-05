<template>
    <div class="desc">{{$store.state.descSite}}</div>
</template>

<style scoped lang="scss">
    $maintext: #999;
    $fonttitle: "Josefin Sans", sans-serif;
    .desc{
        color: $maintext;
        font-family: $fonttitle;
        font-size: 14px;
        font-weight: bold;
        margin: 5px 0 5px 0;
    }
</style>