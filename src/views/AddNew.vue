<template>
  <PageTitle :pageTitle="`Добавить ${title.title}`" desc="Добавляй с умом!"/>
  <form>
    <AddPortfolio v-if="navbar === 'portfolio'" :title="title"/>
    <AddSkill v-if="navbar === 'skills'" :title="title"/>
    <AddSert v-if="navbar === 'about'" :title="title"/>
    <button-app @click.prevent="submit" btnText="Добавить"/>
  </form>
</template>

<script>
	import PageTitle from '../components/style/PageTitle'
	import buttonApp from '../components/UI/buttonApp'
	import AddPortfolio from '../components/Add/AddPortfolio'
	import AddSkill from '../components/Add/AddSkill'
	import AddSert from '../components/Add/AddSert'
	import {computed} from 'vue'
	import {useStore} from 'vuex'
	import {useRouter} from 'vue-router'
	import axios from 'axios'

	export default {
		components: {PageTitle, buttonApp, AddPortfolio, AddSkill, AddSert,},
		setup() {
			const store = useStore()
			const router = useRouter().currentRoute.value.path.split('/')
			const navbar = router[1]
			const title = computed(() => store.getters.addPageId(navbar))
			const token = store.getters['auth/token']
			const submit = async () => {
				switch (navbar) {
					case 'portfolio':
						const {name, url, period, img, adaptiveTest, imgDesc, imgTable, imgMobile, task, color} = title.value.addInput
						const splitTask = task.value.split('|')
						const splitColor = color.value.split('|')
						const addObj = {
							date: new Date(),
							name: name.value,
							type: title.value.type.value.filter(e => e.slug === true).map(e => e.text),
							url: url.value,
							period: period.value,
							task: splitTask,
							imgDesc: imgDesc.value,
							imgTable: imgTable.value,
							imgMobile: imgMobile.value,
							adaptiveTest: adaptiveTest.value,
							technologies: title.value.technologies.value.filter(e => e.slug === true).map(e => e.text),
							color: splitColor,
							img: img.value
						}
						await axios.post(`https://vue-portfolio-1bd9a-default-rtdb.firebaseio.com/Portfolio.json?auth=${token}`, addObj)
						reset()
						await store.dispatch('loadPort')
						break
					case 'skills':
						if (router[2] === 'addRub') {
							const {name, img} = title.value.addRub.addInput
							const addObj = {
								img: img.value,
								title: name.value,
								slug: false,
								item: []
							}
							await axios.post(`https://vue-portfolio-1bd9a-default-rtdb.firebaseio.com/Rub.json?auth=${token}`, addObj)
							reset()
							await store.dispatch('loadSkills')
						}
						if (router[2] === 'addSkill') {
							const {name, desc} = title.value.addSkill.addInput
							const addObj = {
								name: name.value,
								desc: desc.value
							}
							await store.dispatch('add', addObj)
							reset()
							await store.dispatch('loadSkills')
						}
						break
					case 'about':
						const {urlCert} = title.value.addInput
						const addObj2 = {
							url: urlCert.value
						}
						await axios.post(`https://vue-portfolio-1bd9a-default-rtdb.firebaseio.com/Cert.json?auth=${token}`, addObj2)
						reset()
						break
				}
			}

			function reset() {
				switch (navbar) {
					case 'portfolio':
						const {name, url, period, img, adaptiveTest, imgDesc, imgTable, imgMobile, task, color} = title.value.addInput
						name.value = ''
						url.value = ''
						period.value = ''
						task.value = ''
						imgDesc.value = ''
						imgTable.value = ''
						imgMobile.value = ''
						adaptiveTest.value = ''
						color.value = ''
						img.value = ''
						break
					case 'skills':
						if (router[2] === 'addRub') {
							const {name, img} = title.value.addRub.addInput
							name.value = ''
							img.value = ''
						}
						if (router[2] === 'addSkill') {
							const {name, desc} = title.value.addSkill.addInput
							name.value = ''
							desc.value = ''
						}
						break
					case 'about':
						const {urlCert} = title.value.addInput
						urlCert.value = ''
						break
				}
			}

			return {
				title,
				submit,
				navbar
			}
		}
	}
</script>

<style scoped lang="scss">
  form {
    color: #fff;
    text-align: center;
    max-width: 400px;
    margin: 0 auto;

    .btn {
      margin: 30px 0 30px auto;
    }
  }
</style>