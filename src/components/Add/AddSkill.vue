<template>
    <div class="add">
        <div class="checkboxSpec" v-if="router !== 'addRub'">
            <CheckboxSpetial
                    v-for="(e, index) in page"
                    :key="index"
                    :id="'rub' + index"
                    :name="e.title"
                    :value="e.slug"
                    :label="e.title"
                    @change="t => onChecked(t, e.title)"
            />
        </div>
        <AddInput
                v-for="(e, index) in subTitle.addInput"
                :key="index"
                :id="e.id"
                :name="e.desc"
                :value="e.value"
                :label="e.label"
                @input="updAddInput"
        />
    </div>
</template>

<script>
	import {useRouter} from 'vue-router'
	import AddInput from './UI/AddInput'
	import CheckboxSpetial from './UI/CheckboxSpetial'
	import {useStore} from 'vuex'

	export default {
		props: ['title'],
        components: {AddInput, CheckboxSpetial},
        setup(props) {
			const store = useStore()
			const router = useRouter().currentRoute.value.path.split('/')[2]
			const subTitle = props.title[router]
			const page = Object.values(store.state.navbar.skills.skills)

			function updAddInput(e) {
				subTitle.addInput[e.target.name].value = e.target.value
			}
			function onChecked(e, name) {
				const item = page.find(t => t.title === e.target.name)
				item.slug = e.target.checked
			}

            return {
				subTitle,
				updAddInput,
				router,
				page,
				onChecked
            }
        }
	}
</script>

<style scoped lang="scss">
.add {
    width: 100%;
    padding: 10px;
}
.checkboxSpec {
    display: flex;
    flex-wrap: wrap;
}
</style>