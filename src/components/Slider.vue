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
        height: 350px;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 10px;
            transition: 0.3s;
            cursor: pointer;
            &:hover {
                transform: scale(1.03);
            }
        }
    }
</style>