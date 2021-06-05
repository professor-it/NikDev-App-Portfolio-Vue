<template>
    <div class="aside-logo">
        <a href="#" class="logo">
            <i class="fas fa-code"></i>
            <Title/>
            <Desc/>
        </a>
    </div>
</template>

<script>
    import Title from './style/Title'
	import Desc from './style/Desc'
	export default {
    	components: {Title, Desc}
	}
</script>

<style scoped lang="scss">
    .aside-logo{
        text-align: center;
        .logo {
            display: block;
            color: #fff;
            i {
                font-size: 45px;
                margin-bottom: 15px;
            }
        }
    }
</style>