<template>
    <div class="text">
        {{value}}
    </div>
</template>

<script>
	export default {
		props: ['value']
	}
</script>

<style scoped lang="scss">
    .text {
        line-height: 20px;
        margin: 10px 0;
    }
</style>