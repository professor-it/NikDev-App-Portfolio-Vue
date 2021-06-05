<template>
    <div class='slider'>
        <a data-fancybox="gallery" :href="data.url">
            <img :src="data.url" :alt="data.url">
        </a>
    </div>
</template>

<script>
	export default {
		props: ['data'],
	}
</script>


<style scoped lang="scss">
    .slider {
        color: #fff;
        img {
            width: 100%;
            border-radius: 10px;
            transition: 0.3s;
            cursor: pointer;
            &:hover {
                transform: scale(1.03);
            }
        }
    }
</style>