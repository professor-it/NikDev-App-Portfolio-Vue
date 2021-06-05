<template>
    <Logo @click="homePage"/>
    <nav class="aside-menu">
        <ul>
            <nav-element
                    v-for="navbar in $store.state.navbar"
                    :navbar="navbar"
            />
        </ul>
    </nav>
    <div class="aside-footer">
        <SocBlock/>
        <copyright/>
        <div class="signIn" v-if="auth">
            <i
                    class="fas fa-times"
                    @click="logout"
            ></i>
        </div>
    </div>
</template>

<script>
    import navElement from './UI/navElement'
    import Logo from './Logo'
    import SocBlock from './SocBlock'
    import Copyright from './style/Copyright'
	import store from '../store'
	import {useRouter} from 'vue-router'
	import {computed} from '@vue/reactivity'
	export default {
        components: {navElement, Logo, SocBlock,Copyright},
        setup() {
        	const auth = computed(() => store.getters['auth/isAuthenticated'])
			const router = useRouter()
			function logout() {
				store.commit('auth/logout')
				router.push('/')
			}
			function homePage() {
        		router.push('/')
			}
            return {
                auth,
				logout,
                homePage
            }
        }
	}
</script>

<style scoped lang="scss">
    .aside-menu{
        margin: 60px 0 0 0;
    }
    .aside-footer {
        text-align: center;
        margin-top: 40px;
    }
    .signIn {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #1b1b1b;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.3s;
        margin: 20px auto 0;
        cursor: pointer;
        i {
            font-size: 18px;
            color: #fff;
        }
    }

</style>