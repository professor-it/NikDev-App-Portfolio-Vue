<template>
  <ErrorMsg v-if="error"
            text="На сегодняшний день, либо Я кроме этого портфолио ничего не сделал, либо в базе данных произошел сбой!"/>
  <loader-app v-if="loading"/>
  <div class="portfolioWrapper" v-else>
    <div class="portfolio"
         v-for="(item, index) in page.portfolio"
         :key="index"
         @click="portfolioDetail(item)"
    >
      <div class="wrapperImg">
        <img :src="item.imgDesc || item.imgTable || item.imgMobile"
             :alt="item.img"
        >
      </div>
      <div class="innerTop">
        <div class="name">{{item.name}}</div>
        <div class="skill">{{item.type[0]}}</div>
      </div>
      <div class="innerBottom">
        <button class="btnMore">Подробнее</button>
      </div>
    </div>
    <add-new-el title="Добавить работу" url="/portfolio/add"/>
  </div>
</template>

<script>
	import {onMounted, ref} from 'vue'
	import Modal from '../components/Modal'
	import addNewEl from '../components/UI/addNewEl'
	import loaderApp from '../components/UI/loaderApp'
	import {useStore} from 'vuex'
	import ErrorMsg from '../components/UI/ErrorMsg'
	import {useRouter} from 'vue-router'

	export default {
		props: ['page'],
		components: {Modal, addNewEl, loaderApp, ErrorMsg},
		setup(props) {
			const store = useStore()
			const router = useRouter()
			const loading = ref(false)
			const error = ref(false)

			onMounted(async () => {
				if (store.state.navbar.portfolio.portfolio.length === 0) {
					loading.value = true
					try {
						await store.dispatch('loadPort')
					} catch (e) {
						error.value = true
					} finally {
						loading.value = false
					}
				}
			})

			const portfolioDetail = (el) => {
				router.push('/portfolio/' + el.name)
			}

			return {
				portfolioDetail,
				loading,
				error
			}
		}
	}
</script>

<style scoped lang="scss">
  $fontmenu: "Comfortaa", sans-serif;
  $modalcolor: #6c757d;

  .portfolioWrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 300px));
    justify-content: center;
    gap: 25px;

    .portfolio {
      overflow: hidden;
      position: relative;
      font-family: $fontmenu;
      cursor: pointer;
      border-radius: 3px;
      height: 280px;
      .wrapperImg {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      img {
        height: 100%;
      }

      .innerTop {
        position: absolute;
        top: 0;
        width: 100%;
        height: 50%;
        font-weight: bold;
        font-size: 26px;
        overflow: hidden;
        line-height: 24px;

        &::before {
          content: '';
          background-color: #fff;
          right: 100%;
          width: 100%;
          top: 0;
          bottom: 0;
          position: absolute;
          transition: all 150ms ease-in-out 200ms;
        }

        .name {
          position: absolute;
          color: transparent;
          background-color: transparent;
          display: block;
          padding: 0 10px;
          top: 45px;
          right: 25px;
          transition: all 150ms ease-in-out 200ms;
          overflow: hidden;
          border-radius: 2px;
          text-decoration: underline;

          &::before {
            content: "";
            position: absolute;
            background-color: #000;
            bottom: 0;
            top: 0;
            left: 100%;
            width: 100%;
            transition: left 600ms ease-in-out 0s;
          }
        }

        .skill {
          position: absolute;
          color: transparent;
          background-color: transparent;
          display: block;
          padding: 0 10px;
          top: 75px;
          right: 25px;
          transition: all 150ms ease-in-out 200ms;
          overflow: hidden;
          border-radius: 2px;
          font-size: 16px;

          &::before {
            content: "";
            text-align: right;
            position: absolute;
            background-color: #000;
            bottom: 0;
            top: 0;
            right: 100%;
            width: 100%;
            transition: right 600ms ease-in-out 0s;
          }
        }
      }

      .innerBottom {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 50%;
        font-size: 16px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-weight: bold;

        &::before {
          content: "";
          position: absolute;
          background-color: #fff;
          left: 100%;
          width: 100%;
          top: 0;
          bottom: 0;
          transition: all 150ms ease-in-out 200ms;
        }

        .btnGit, .btnMore {
          display: block;
          color: transparent;
          background-color: transparent;
          z-index: 2;
          border: 1px solid transparent;
          padding: 10px 0;
          transition: 0.5s;
          overflow: hidden;
          margin: 5px 0;
          cursor: pointer;
          outline: none;
          width: 100%;
          font-weight: bold;
          font-size: 16px;
          font-family: $fontmenu;
        }
      }

      &:hover {
        .innerTop {
          &::before {
            right: 0;
          }

          .name, .skill {
            color: #000;
          }

          .name::before {
            left: -100%;
          }

          .skill::before {
            right: -100%;
          }
        }

        .innerBottom {
          &::before {
            left: 0;
          }

          .btnGit {
            color: #fff;
            transition: 0.5s;
            background-color: #343a40;
          }

          .btnMore {
            color: #fff;
            transition: 0.5s;
            background-color: #2d9687;
          }
        }
      }
    }
  }
</style>