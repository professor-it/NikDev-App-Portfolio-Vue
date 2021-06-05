<template>
    <a :href="url" target="_blank">
        <i :class='icon'></i>
    </a>
</template>

<script>
	export default {
		props: ['url', 'icon']
	}
</script>

<style scoped lang="scss">
    a {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #1b1b1b;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.3s;
        margin: 0 5px;
        &:hover {
            color: #ffffff;
        }
        i {
            font-size: 18px;
        }
    }
</style>