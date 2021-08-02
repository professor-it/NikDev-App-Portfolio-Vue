<template>
  <ErrorMsg v-if="error"
            text="На сегодняшний день, либо Я знаю, что ничего не знаю, либо в базе данных произошел сбой!"/>
  <loader-app v-if="loading"/>
  <div class="skills" v-else>
    <div class="skillBox"
         v-for="(el, index) in page.skills"
         :key="index"
         @click="SkillDetail(el)"
    >
      <div class="img">
        <i :class="el.img"></i>
      </div>
      <div class="name">{{el.title}}</div>
      <div class="text">
                <span v-for="(e, index) in el.item" :key="index">
                    {{e.name}}
                </span>
      </div>
    </div>
    <div class="add">
      <add-new-el title="Добавить рубрику" url="/skills/addRub"/>
      <add-new-el title="Добавить навык" url="/skills/addSkill"/>
    </div>
  </div>
</template>

<script>
	import addNewEl from '../components/UI/addNewEl'
	import loaderApp from '../components/UI/loaderApp'
	import {ref, onMounted} from 'vue'
	import {useStore} from 'vuex'
	import ErrorMsg from '../components/UI/ErrorMsg'
	import {useRouter} from 'vue-router'

	export default {
		props: ['page'],
		components: {addNewEl, loaderApp, ErrorMsg},
		setup(props) {
			const store = useStore()
			const router = useRouter()
			const loading = ref(false)
			const error = ref(false)

			onMounted(async () => {
				if (store.state.navbar.skills.skills.length === 0) {
					loading.value = true
					try {
						await store.dispatch('loadSkills')
					} catch (e) {
						error.value = true
					} finally {
						loading.value = false
					}
        }
			})

			const SkillDetail = (el) => {
				router.push('/skills/' + el.title)
			}

			return {
				loading,
				error,
				SkillDetail
			}
		}
	}
</script>

<style scoped lang="scss">
  $fontmenu: "Comfortaa", sans-serif;
  $fontheader: "Pattaya", sans-serif;
  $maintext: #999;
  .skills {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 400px));
    align-items: flex-start;
    justify-content: center;
    gap: 30px;
  }

  .add {
    a:first-child {
      margin-bottom: 10px;
    }
  }

  .skillBox {
    color: #fff;
    text-align: center;
    padding: 30px 20px 50px 20px;
    font-family: $fontmenu;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
    border-bottom: 2px solid #fff;
    height: 100%;
    width: 100%;

    &:hover {
      border-bottom: 2px solid #2d9687;
      transform: translateY(-10px);
    }

    .img {
      font-size: 50px;
    }

    .name {
      font-size: 24px;
      margin: 15px 0;
    }

    .text {
      line-height: 22px;
      font-size: 14px;
      color: $maintext;
      transition: 0.3s;

      & > span {
        display: block;
      }
    }
  }
</style>