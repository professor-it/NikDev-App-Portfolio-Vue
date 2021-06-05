<template>
    <div class="time">
        <span>Срок реализации</span>: {{value}}
    </div>
</template>

<script>
	export default {
		props: ['value']
	}
</script>

<style scoped lang="scss">
    .time{
        font-size: 18px;
        margin: 10px 0 20px;
        & > span {
            font-weight: bold;
            text-decoration: underline;
        }
    }
</style>