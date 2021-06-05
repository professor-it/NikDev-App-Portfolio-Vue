<template>
    <div class="wrapper">
        <Title :text="id"/>
        <ErrorMsg v-if="error" text="Проблемы с базой данных!"/>
        <loader-app v-if="loading"/>
        <div v-else class="wrapperContent">
            <div class="modalWrapper">
                <div class="item" v-for="(e, index) in modalData.item" :key="index">
                    <div class="title">
                        {{e.name}}
                    </div>
                    <div class="desc">{{e.desc}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	import {onMounted, ref} from 'vue'
    import Title from '../components/style/Title'
    import loaderApp from '../components/UI/loaderApp'
    import ErrorMsg from '../components/UI/ErrorMsg'
import {useStore} from 'vuex'
export default {
	props: ['id'],
    components: {Title, ErrorMsg, loaderApp},
    setup(props) {
		const store = useStore()
		const id = props.id
		const loading = ref(false)
		const error = ref(false)
		const modalData = ref([])

		onMounted(async () => {
			loading.value = true
			try {
				await store.dispatch('loadSkills')
                modalData.value = store.state.navbar.skills.skills.find(e => e.title === id)
				loading.value = false
			} catch (e) {
				loading.value = false
				error.value = true
			}
		})
    	return {
			modalData,
			loading,
			error,
        }
    }
}
</script>

<style scoped lang="scss">
    $fontmenu: "Comfortaa", sans-serif;
    .wrapper {
        max-width: 1980px;
        margin: 0 auto;
    }
    .title {
        text-align: center;
        font-size: 30px;
        margin: 50px 0;
    }
    .wrapperContent {
        margin: 0 20px;
    }
    .modalWrapper{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 40px;
        color: #fff;
        .item {
            display: flex;
            flex-direction: column;
            height: 100%;
            padding-bottom: 30px;
            border-bottom: 2px solid #fff;
            font-family: $fontmenu;
        }
        .title {
            font-size: 20px;
            font-weight: bold;
            margin: 10px 0;
            text-decoration: underline;
            text-align: left;
        }
        .desc {
            text-align: justify;
            line-height: 20px;
            font-size: 14px;
            color: #999;
        }
    }
    @media (min-width: 320px) and (max-width: 768px) {
        .modalWrapper{
            display: flex;
            flex-direction: column;
            .title {
                font-size: 18px;
            }
            .desc {
                font-size: 14px;
            }
            .item:last-child {
                padding-bottom: 0;
                border-bottom: none;
            }
        }
    }
</style>