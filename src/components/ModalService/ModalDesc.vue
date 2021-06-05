<template>
    <div class="desc">
        <div class="price">Минимальная цена: {{value.price}}</div>
        <div class="type">
            <ul>
                <li v-for="(el, index) in value.technologies" :key="index">{{el}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
	export default {
		props: ['value']
	}
</script>

<style scoped lang="scss">
    .desc {
        margin: 10px 0 20px;
        display: flex;
        justify-content: space-between;
        line-height: 24px;
        .price {
            text-decoration: underline;
        }
        .type > ul li {
            list-style: disc;
        }
    }
</style>