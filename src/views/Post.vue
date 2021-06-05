<template>
    <div class="post">
        <div class="img">
            <img :src="post.img" :alt="post.img">
        </div>
        <div class="sub">
            <div class="date">{{post.date}}</div>
            <div class="rubric">{{post.rubric}}</div>
        </div>
        <h1 class="title">{{post.title}}</h1>
        <div class="text">
            <p v-for="text in post.body">{{text.text}}</p>
        </div>
    </div>
</template>

<script>
	import {useStore} from 'vuex'
	import {computed} from '@vue/reactivity'

	export default {
		props: ['id'],
        setup(props) {
            const store = useStore()

			const id = props.id
			const page = computed(() => store.state.navbar.find(e => e.url === '/blog'))
			const post = computed(() => page.value.posts.find(e => e.id === id))

            return {
				post
            }
		}
	}
</script>

<style scoped lang="scss">
    $maintext: #999;
    $fontmenu: "Comfortaa", sans-serif;
    .post {
        max-width: 1980px;
        margin: 0 auto;
        padding: 0 30px;
        color: $maintext;
        font-family: $fontmenu;
        .img {
            margin-bottom: 30px;
            height: 350px;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: top;
            }
        }
        .title {
            font-weight: bold;
            margin: 10px 0 25px 0;
            color: #fff;
        }
        .text {
            line-height: 24px;
            font-size: 14px;
        }
        .sub {
            display: flex;
            font-size: 10px;
            font-weight: bold;
            color: $maintext;
            letter-spacing: 1px;
            align-items: center;
            .date {
                &::after {
                    content: "/";
                    margin: 0 5px;
                    font-size: 12px;
                }
            }
        }
    }

</style>