<template>
    <div class="title">
        {{value}}
    </div>
</template>

<script>
	export default {
        props: ['value']
	}
</script>

<style scoped lang="scss">
    .title {
        font-size: 24px;
        font-weight: bold;
    }
</style>