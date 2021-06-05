<template>
    <div class="wrapperMenu">
        <div :class="[!close ? 'menu' : 'closeMenu']"></div>
    </div>
</template>

<script>
	export default {
		props: ['close'],
	}
</script>

<style scoped lang="scss">
.menu {
    display: none;
}
@media (min-width: 320px) and (max-width: 1023px) {
    .wrapperMenu {
        width: 25px;
        height: 25px;
        position: fixed;
        right: 15px;
        top: 25px;
        cursor: pointer;
        z-index: 999;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .menu {
        display: block;
        width: 25px;
        height: 2px;
        background-color: #fff;
        position: relative;
        transition: .3s;
        &:before {
            content: '';
            position: absolute;
            width: 25px;
            height: 2px;
            background-color: #fff;
            top: 11px;
            left: 0;
        }
        &:after {
            content: '';
            position: absolute;
            width: 25px;
            height: 2px;
            background-color: #fff;
            top: -11px;
            left: 0;
        }
    }
    .closeMenu {
        display: block;
        width: 25px;
        height: 2px;
        background-color: #fff;
        position: relative;
        transform: rotate(140deg);
        transition: .3s;
        &:before {
            content: '';
            position: absolute;
            width: 25px;
            height: 2px;
            background-color: #fff;
            top: 0;
            left: 0;
            transform: rotate(80deg);
        }
    }
}
</style>