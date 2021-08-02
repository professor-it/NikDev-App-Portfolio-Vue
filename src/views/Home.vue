<template>
  <TheSnake/>
  <div class="wrapper-index">
    <div class="index">
      <div class="indexLeft">
        <Welcome/>
      </div>
      <div class="indexRight">
        <div class="header">
          <button-app btnText="Написать мне" @click.prevent="urlPush"/>
          <div class="header-name">
            Вас что-то интересует?<br>
            <span>Жду Ваше сообщение.</span>
          </div>
        </div>
        <div class="rubric">
          <rubric-app v-for="navbar in $store.state.navbar" :navbar="navbar"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
	import TheSnake from '../components/TheSnake'
	import Welcome from '../components/Welcome'
	import buttonApp from '../components/UI/buttonApp'
	import rubricApp from '../components/UI/rubricApp'
	import {useRouter} from 'vue-router'

	export default {
		components: {TheSnake, Welcome, buttonApp, rubricApp},
		setup() {
			const router = useRouter()

			function urlPush() {
				router.push('/contacts')
			}

			return {
				urlPush
			}
		}
	}
</script>

<style scoped lang="scss">
  $maintext: #999;
  $fontmenu: "Comfortaa", sans-serif;
  .wrapper-index {
    color: $maintext;
    font-family: $fontmenu;
    padding: 50px 45px 0;
    max-width: 1980px;
    margin: 0 auto;
  }

  .index {
    display: flex;
  }

  .indexLeft {
    width: 50%;
  }

  .indexRight {
    padding-left: 30px;
    width: 50%;

    .header {
      margin-top: 45px;

      &-name {
        margin-top: 15px;
        margin-left: 50px;
        line-height: 1.5;
        width: 270px;

        & > span {
          text-align: right;
          width: 100%;
          display: inline-block;
        }
      }
    }

    .rubric {
      margin-top: 50px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 100%;
      text-align: left;
    }
  }

  @media (min-width: 320px) and (max-width: 1023px) {
    .wrapper-index {
      padding: 50px 15px 0;
    }
    .index {
      display: block;
    }
    .indexLeft {
      width: 100%;
    }
    .indexRight {
      padding-left: 0;
      width: 100%;
    }
  }
</style>