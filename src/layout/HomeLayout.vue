<template>
    <aside :class="{activeMenu: $store.state.isMenu}">
        <TheNavbar/>
    </aside>
    <transition name="moveInUp" appear>
        <div class="main">
            <BurgerMenu @click="$store.state.isMenu = !$store.state.isMenu" :close="$store.state.isMenu"/>
            <router-view/>
            <TheFooter/>
        </div>
    </transition>
</template>

<script>
	import TheNavbar from '../components/TheNavbar'
	import TheFooter from '../components/TheFooter'
	import BurgerMenu from '../components/BurgerMenu'
	import {ref} from '@vue/reactivity'
	export default {
		props: ['thisPage'],
		components: {TheFooter, TheNavbar, BurgerMenu},
		setup() {
			let activeMenu = ref(false)
			return {
				activeMenu
			}
		}
	}
</script>

<style scoped lang="scss">
    .moveInUp-enter-active {
        animation: fadeIn .7s ease-in;
    }
    @keyframes fadeIn {
        0%{
            opacity: 0;
        }
        50%{
            opacity: 0.5;
        }
        100%{
            opacity: 1;
        }
    }
    aside {
        width: 23%;
        background-color: #000;
        padding: 60px 30px;
        position: fixed;
        overflow-y: scroll;
        bottom: 0;
        top: 0;
        left: 0;
        transition: 0.5s;
        z-index: 999;
        scrollbar-width: none;
    }
    .main {
        width: 77%;
        margin-left: auto;
        text-align: center;
    }
    .menu {
        display: none;
    }
    @media (min-width: 320px) and (max-width: 1023px) {
        aside {
            display: none;
            position: fixed;
            width: 100%;
            padding: 50px 10px;
            text-align: center;
            z-index: 900;
        }
        .main {
            width: 100%;
        }
        .menu {
            display: flex;
            width: 25px;
            height: 2px;
            background-color: #fff;
            position: fixed;
            right: 15px;
            top: 25px;
            cursor: pointer;
            z-index: 999;
            &:before {
                content: '';
                position: absolute;
                width: 25px;
                height: 2px;
                background-color: #fff;
                top: 8px;
            }
            &:after {
                content: '';
                position: absolute;
                width: 25px;
                height: 2px;
                background-color: #fff;
                top: 16px;
            }
        }
        .activeMenu {
            display: block;
        }
    }
</style>