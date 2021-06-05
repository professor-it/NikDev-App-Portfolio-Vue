<template>
    <div class="copyright">
        {{$store.state.copyright}}
    </div>
</template>

<script>
	export default {

	}
</script>

<style scoped lang="scss">
    $maintext: #999;
    $fonttitle: "Josefin Sans", sans-serif;
    .copyright {
        color: $maintext;
        font-family: $fonttitle;
        font-size: 14px;
        margin-top: 20px;
    }
</style>