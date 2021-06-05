<template>
    <div class="example">
        <img :src="value" :alt="value">
    </div>
</template>

<script>
	export default {
		props: ['value']
	}
</script>

<style scoped lang="scss">
    .example {
        margin-top: 20px;
        img {
            width: 100%;
            border-radius: 5px;
            margin-bottom: 10px;
        }
    }
</style>