<template>
    <div class="wrapperPosts">
        <div class="post" v-for="(e, index) in page.posts"
             :key="index"
             @click="open(e.id)"
        >
            <div class="img" v-if="e.prev">
                <img :src="e.prev" :alt="e.prev">
            </div>
            <div class="info">
                <div class="date">{{e.date}}</div>
                <div class="title">{{e.title}}</div>
                <button-app btnText="Читать"/>
            </div>
        </div>
    </div>
</template>

<script>
    import buttonApp from '../components/UI/buttonApp'
	import {useRouter} from 'vue-router'
export default {
    props: ['page'],
    components: {buttonApp},
    setup() {
    	const router = useRouter()

        return {
    		open: id => router.push(`/blog/${id}`)
        }
    }
}
</script>

<style scoped lang="scss">
$fontheader: "Pattaya", sans-serif;
$maintext: #999;
.wrapperPosts {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 400px));
    gap: 40px 25px;
    justify-content: center;
    .post {
        color: #fff;
        font-family: $fontheader;
        text-align: center;
        overflow: hidden;
        border-radius: 2px;
        transition: 0.2s;
        border-bottom: 2px solid #fff;
        cursor: pointer;
        &:hover {
            border-bottom: 2px solid #2d9687;
        }
        .img {
            overflow: hidden;
            height: 350px;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: top;
                overflow: hidden;
                transition: 0.3s;
                &:hover {
                    transform: scale(1.04);
                }
            }
        }
        .info {
            background-color: #1c1c1c;
            padding: 15px 5px 25px;
        }
        .date {
            font-size: 12px;
            color: $maintext;
        }
        .title {
            margin: 5px 0 20px 0;
            transition: 0.3s;
            color: #fff;
            font-size: 22px;
            letter-spacing: 2px;
        }
        .btn {
            margin: 0 auto;
        }
    }
}
</style>