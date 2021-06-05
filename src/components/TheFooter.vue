<template>
    <div class="footer">
        <Title/>
        <Desc/>
        <Copyright/>
    </div>
</template>

<script>
    import Title from './style/Title'
	import Desc from './style/Desc'
    import Copyright from './style/Copyright'
	export default {
    	components: {Copyright, Title, Desc}

	}
</script>

<style scoped lang="scss">
    .footer {
        text-align: center;
        margin: 100px 0 20px 0;
    }
</style>