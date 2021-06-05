<template>
    <div class="contactBlock">
        <div class="infoText">
            {{text}}
        </div>
        <div class="infoDesc">
            <a :href="infoSrc">{{infoText}}</a>
        </div>
    </div>
</template>

<script>
	export default {
		props: ['text', 'infoText', 'infoSrc']

	}
</script>

<style scoped lang="scss">
    .contactBlock {
        margin: 30px 0;
        letter-spacing: 1px;
    }
    .infoText {
        font-size: 18px;
        color: #fff;
        margin-bottom: 8px;
        font-weight: bold;
    }
    .infoDesc a:hover {
        text-decoration: underline;
    }
</style>