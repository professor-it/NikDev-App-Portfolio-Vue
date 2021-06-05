<template>
    <div class="aside-soc">
        <soc-element
                v-for="(i, index) in $store.state.socBlock"
                :url="i.url"
                :icon="i.icon"
                :key="index"
        />
    </div>
</template>

<script>
    import socElement from './UI/socElement'
	export default {
    	components: {socElement}
	}
</script>

<style scoped lang="scss">
.aside-soc {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
</style>