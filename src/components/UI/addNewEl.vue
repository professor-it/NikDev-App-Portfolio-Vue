<template>
    <router-link v-if="auth" :to="url" class="wrapperBlock">
        <div>+</div>
        <div class="title">{{title}}</div>
    </router-link>
</template>

<script>
	import store from '../../store'
	import {computed} from '@vue/reactivity'

	export default {
		props: ['title', 'url'],
        setup() {
			const auth = computed(() => store.getters['auth/isAuthenticated'])
            return {
				auth
            }
        }
	}
</script>

<style scoped lang="scss">
$fontmenu: "Comfortaa", sans-serif;
.wrapperBlock {
    border: 3px dotted #fff;
    border-radius: 10px;
    color: #fff;
    font-weight: bold;
    font-family: $fontmenu;
    font-size: 36px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.2s;
    padding: 50px;
    height: 100%;
    &:hover{
        color: #2d9687;
    }
    .title {
        font-size: 18px;
        margin-top: 10px;
    }
}
@media (min-width: 320px) and (max-width: 375px) {
    .wrapperBlock {
        .title {
            font-size: 13px;
        }
    }
}
</style>