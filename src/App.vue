<template>
    <component :is="layout + '-layout'" v-if="layout" :thisPage="thisPage"/>
</template>

<script>
  import {useRoute} from 'vue-router'
  import {computed} from 'vue'
  import {useStore} from 'vuex'
  import MainLayout from './layout/MainLayout'
  import HomeLayout from './layout/HomeLayout'
  import SpecialLayout from './layout/SpecialLayout'

  export default {
    setup() {
    	const route = useRoute()
        const store = useStore()
        const navbar = Object.values(store.state.navbar)
        const name = computed(() => route.name)
        return {
            layout: computed(() => route.meta.layout),
			thisPage: computed(() => navbar.find(e => e.url === route.path)),
    	}
    },
    components: {MainLayout, HomeLayout, SpecialLayout}
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
