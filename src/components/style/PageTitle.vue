<template>
    <div class="pageTitle">
        <span class="pageDesc">{{desc}}</span>
        <h2>{{pageTitle}}</h2>
    </div>
</template>

<script>
	export default {
		props: ['pageTitle', 'desc']
	}
</script>

<style scoped lang="scss">
$maintext: #999;
.pageTitle {
    color: $maintext;
    text-align: center;
    font-family: "Kelly Slab", sans-serif;
    margin: 90px 0 50px 0;
    .pageDesc {
        font-size: 14px;
        letter-spacing: 1px;
    }
    h2 {
        margin: 3px 0 0;
        font-size: 30px;
        color: #fff;
        letter-spacing: 1px;
    }
}
</style>