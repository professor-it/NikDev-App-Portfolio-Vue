<template>
    <div class="list">
        <ul>
            <li v-for="(el, index) in value" :key="index">{{el}}</li>
        </ul>
    </div>
</template>

<script>
	export default {
		props: ['value']
	}
</script>

<style scoped lang="scss">
    .list {
        margin: 10px 0;
        & > ul li {
            list-style: disc inside;
            margin-left: 5px;
        }
    }
</style>