<template>
    <router-link :to="navbar.url" class="rub-item" v-if="navbar.home">
        <p>{{navbar.title}}</p>
    </router-link>
</template>

<script>
	export default {
        props: ['navbar']
	}
</script>

<style scoped lang="scss">
.rub-item {
    display: block;
    cursor: pointer;
    margin-bottom: 20px;
    margin-right: 25px;
    margin-left: 15px;
    font-size: 18px;
    color: #fff;
    font-weight: bold;
    position: relative;
    width: 25%;
    &::before {
        content: "";
        position: absolute;
        height: 2px;
        width: 15%;
        bottom: 3px;
        background-color: #2d9687;
        transition: 0.5s;
    }
    & > p {
        transition: 0.3s;
    }
    &:hover {
        color: #2d9687;
        &::before{
            width: 100%;
        }
    }
}
@media (min-width: 1024px) and (max-width: 1439px) {
    .rub-item {
        font-size: 16px;
    }
}
@media (min-width: 375px) and (max-width: 424px) {
    .rub-item {
        font-size: 14px;
    }
}
@media (min-width: 320px) and (max-width: 374px) {
    .rub-item {
        font-size: 12px;
    }
}
</style>