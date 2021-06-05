<template>
    <li v-if="navbar.nav">
        <router-link
                :to="navbar.url"
                :class="{active: '/'+$route.path.split('/')[1] === navbar.url}"
        >{{navbar.title}}</router-link>
    </li>
</template>

<script>
	export default {
		props: ['navbar'],
	}
</script>

<style scoped lang="scss">
    $fontmenu: "Comfortaa", sans-serif;
    .active {
        color: #fff;
    }
    a {
        margin-top: 15px;
        padding-bottom: 12px;
        border-bottom: 1px solid #202020;
        display: block;
        transition: 0.5s;
        font-size: 15px;
        font-family: $fontmenu;
        font-weight: bold;
        &:hover {
            color: #fff;
        }
    }
</style>