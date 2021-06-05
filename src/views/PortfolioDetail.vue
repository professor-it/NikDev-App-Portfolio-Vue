<template>
    <Title :text="id"/>
    <ErrorMsg v-if="error" text="Проблемы с базой данных!"/>
    <loader-app v-if="loading"/>
    <div v-else class="wrapper">
        <div class="modalHeader">
            <div class="itemHeader">
                <div class="topHeader">
                    <i class="far fa-id-card"></i> Сайт:
                </div>
                <div class="bottomHeader">
                    <a :href="modalData.url">Посмотреть</a>
                </div>
            </div>
            <div class="itemHeader">
                <div class="topHeader">
                    <i class="far fa-calendar-alt"></i> Время выполнения:
                </div>
                <div class="bottomHeader">
                    {{modalData.period}}
                </div>
            </div>
            <div class="itemHeader">
                <div class="topHeader">
                    <i class="fas fa-shopping-cart"></i> Тип работ:
                </div>
                <div class="bottomHeader">
                    {{modalData.type[0]}}
                </div>
            </div>
        </div>
        <div class="exampleMain">
            <div class="view">
                <img :src="exampleImg || modalData.imgDesc"
                     :alt="modalData.imgDesc"
                >
            </div>
            <div class="choice">
                <button @click="exampleImgBtn(modalData.imgDesc)">
                    <i class="fas fa-desktop"></i>
                </button>
                <button @click="exampleImgBtn(modalData.imgTable)">
                    <i class="fas fa-tablet-alt"></i>
                </button>
                <button @click="exampleImgBtn(modalData.imgMobile)">
                    <i class="fas fa-mobile-alt"></i>
                </button>
            </div>
        </div>
        <div class="taskMain">
            <div class="taskName">Задачи:</div>
            <ul>
                <li v-for="(e, index) in modalData.task" :key="index">
                    {{e}}
                </li>
            </ul>
        </div>
        <div class="modalAdapt">
            <img :src="modalData.adaptiveTest" :alt="modalData.adaptiveTest">
        </div>
        <div class="modalWork">
            <div class="work">
                <div class="taskName">
                    Технологии
                </div>
                <ul>
                    <li v-for="(e, index) in modalData.technologies" :key="index">
                        {{e}}
                    </li>
                </ul>
            </div>
            <div class="detailColor">
                <div class="taskName">Цвета</div>
                <div class="wrapperColor">
                    <div v-for="(e, index) in modalData.color" :key="index">
                        <div class="color" :style="{backgroundColor: e}"></div>
                        <div class="numberColor">{{e}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modalExampleWork">
            <img :src="modalData.img" :alt="modalData.img">
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
			const loading = ref(true)
			const error = ref(false)
			const modalData = ref([])
			const exampleImg = ref('')

			onMounted(async () => {
				try {
					await store.dispatch('loadPort')
					modalData.value = store.state.navbar.portfolio.portfolio.find(e => e.name === id)
					loading.value = false
				} catch (e) {
					loading.value = false
					error.value = true
				}
			})

			const exampleImgBtn = (i) => {
				exampleImg.value = i
			}

			return {
				modalData,
				loading,
				error,
				exampleImg,
				exampleImgBtn
			}
		}
	}
</script>

<style scoped lang="scss">
$fontmenu: "Comfortaa", sans-serif;
$modalcolor: #6c757d;
.title {
    text-align: center;
    font-size: 30px;
    margin: 50px 0;
}
.wrapper {
    color: #fff;
    max-width: 1980px;
    margin: 0 auto;
}
.modalHeader {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 150px;
    .topHeader {
        margin-bottom: 10px;
        font-weight: bold;
        i {
            font-size: 18px;
        }
    }
    .bottomHeader{
        color: $modalcolor;
        a {
            color: $modalcolor;
            &:hover {
                text-decoration: underline;
            }
        }
    }
}
.exampleMain{
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    float: left;
    margin-bottom: 30px;
    .view{
        text-align: center;
        margin-bottom: 20px;
        img{
            width: 80%;
            margin: 0 auto;
        }
    }
    .choice{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        button{
            width: 45px;
            height: 45px;
            border-radius: 50%;
            background-color: #39383a;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: 0.3s;
            margin: 0 5px;
            border: none;
            outline: none;
            cursor: pointer;
            &:hover {
                color: #2d9687;
            }
            i {
                font-size: 18px;
            }
        }
    }
}
.taskMain{
    width: 40%;
    float: right;
    margin-bottom: 30px;
    li {
        list-style-type: disc;
        list-style-position: inside;
        line-height: 26px;
        margin: 10px 0;
        text-align: left;
    }
}
.modalAdapt {
    margin: 30px auto;
    max-width: 850px;
    clear: both;
    img {
        width: 100%;
    }
}
.taskName{
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 15px;
    text-decoration: underline;
    text-align: left;
}
.modalWork {
    display: flex;
    justify-content: space-evenly;
    .work {
        width: 40%;
        margin-right: 20px;
        li {
            list-style-type: disc;
            list-style-position: inside;
            line-height: 26px;
            margin: 10px 0;
            text-align: left;
        }
    }
    .detailColor {
        font-family: $fontmenu;
        width: 40%;
        .wrapperColor {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
            gap: 10px;
            .color {
                width: 100%;
                height: 80px;
                border-radius: 20px;
                border: 3px solid #8d8d8d;
            }
            .numberColor {
                margin: 10px 0;
                text-align: center;
                font-weight: bold;
                font-size: 14px;
            }
        }
    }
}
.modalExampleWork {
    margin: 50px auto 0;
    img {
        width: 100%;
    }
}
@media (min-width: 320px) and (max-width: 723px) {
    .wrapper {
        display: flex;
        flex-direction: column;
    }
    .modalHeader {
        display: block;
        height: auto;
        padding: 5px 10px;
        text-align: left;
        order: 1;
        .topHeader {
            margin-bottom: 5px;
        }
        .bottomHeader{
            margin-bottom: 15px;
        }
    }
    .exampleMain{
        width: 100%;
        margin-bottom: 40px;
    }
    .taskMain{
        width: 100%;
        padding: 5px 10px;
        order: 1;
        text-align: center;
    }
    .modalAdapt {
        margin: 10px auto;
        order: 1;
    }
    .taskName{
        font-size: 24px;
        text-align: center;
    }
    .modalWork {
        display: block;
        order: 1;
        .work {
            width: 100%;
            margin-right: auto;
        }
        .detailColor {
            width: 100%;
            .wrapperColor {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
                .color {
                    height: 50px;
                }
                .numberColor {
                    font-size: 12px;
                }
            }
        }
    }
    .modalExampleWork {
        order: 1;
    }
    .desc {
        display: none;
    }
}
</style>