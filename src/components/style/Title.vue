<template>
    <div class="title">{{text || $store.state.nameSite}}</div>
</template>

<script>
	export default {
        props: ['text']
	}
</script>

<style scoped lang="scss">
    $fonttitle: "Kelly Slab", sans-serif;
    .title{
        font-family: $fonttitle;
        color: #fff;
        font-size: 24px;
        font-weight: bold;
        letter-spacing: 1px;
    }
</style>