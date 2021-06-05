<template>
    <div class="add">
        <AddInput
                v-for="(e, index) in title.addInput"
                :key="index"
                :id="e.id"
                :name="e.desc"
                :value="e.value"
                :label="e.label"
                @input="updAddInput"
        />
        <Button @click.prevent="isOpenType = !isOpenType" class="isOpenTex">
            {{title.type.label}}
        </Button>
        <div class="conRub" v-if="isOpenType">
            <div class="checkboxSpec">
                <CheckboxSpetial
                        v-for="(e, index) in title.type.value"
                        :key="index"
                        :id="'type' + index"
                        :name="title.type.desc"
                        :value="e.slug"
                        :label="e.text"
                        @change="t => onChecked(t, e.text)"
                />
            </div>
            <div class="btnAdd">
                <AddInput
                        :id="add.type.id"
                        :name="add.type.desc"
                        :value="add.type.value"
                        :label="add.type.label"
                        @input="updAdd"
                />
                <button
                        class="addBtn"
                        type="button"
                        :name="add.type.desc"
                        @click.prevent="addNewCat"
                >
                    +
                </button>
            </div>
        </div>
        <Button @click.prevent="isOpenTex = !isOpenTex" class="isOpenTex">
            {{title.technologies.label}}
        </Button>
        <div class="conRub" v-if="isOpenTex">
            <div class="checkboxSpec">
                <CheckboxSpetial
                        v-for="(e, index) in title.technologies.value"
                        :key="index"
                        :id="'technologies' + index"
                        :name="title.technologies.desc"
                        :value="e.slug"
                        :label="e.text"
                        @change="t => onChecked(t, e.text)"
                />
            </div>
            <div class="btnAdd">
                <AddInput
                        :id="add.technologies.id"
                        :name="add.technologies.desc"
                        :value="add.technologies.value"
                        :label="add.technologies.label"
                        @input="updAdd"
                />
                <button
                        class="addBtn"
                        type="button"
                        :name="add.technologies.desc"
                        @click.prevent="addNewCat"
                >
                    +
                </button>
            </div>
        </div>
    </div>
</template>

<script>
	import AddInput from './UI/AddInput'
	import CheckboxSpetial from './UI/CheckboxSpetial'
	import {reactive, ref} from 'vue'
	export default {
		props: ['title'],
        components: {AddInput, CheckboxSpetial},

        setup(props) {
			const isOpenType = ref(false)
			const isOpenTex = ref(false)
			const add = reactive({
				type: {
					id: 1,
					label: 'Добавить тип работ',
					desc: 'type',
					value: ''
				},
				technologies: {
					id: 2,
					label: 'Добавить технологию',
					desc: 'technologies',
					value: ''
				}
			})
			function updAddInput(e) {
				props.title.addInput[e.target.name].value = e.target.value
			}
			function addNewCat(e) {
				const obj = {text: add[e.target.name].value, slug: false}
				props.title[e.target.name].value.push(obj)
				add[e.target.name].value = ''
			}
			function updAdd(e) {
				add[e.target.name].value = e.target.value
			}
			function onChecked(e, name) {
				const item = props.title[e.target.name].value
				const idx = item.findIndex(i => i.text === name)
				const control = item[idx]
				control.slug = e.target.checked
			}

			return {
				updAddInput,
				isOpenType,
				isOpenTex,
				add,
				addNewCat,
				updAdd,
				onChecked
            }
        }
	}
</script>

<style scoped lang="scss">
    $fontmenu: "Comfortaa", sans-serif;
    label {
        font-family: $fontmenu;
        font-weight: bold;
        letter-spacing: 1px;
        font-size: 18px;
        margin-right: 10px;
    }
    select {
        border: 2px solid #fff;
        border-radius: 20px;
        padding: 3px 10px;
        cursor: pointer;
        outline: none;
        font-weight: bold;
        letter-spacing: 1px;
        font-family: $fontmenu;
    }
    .select {
        margin-bottom: 10px;
    }
    .isOpenTex {
        cursor: pointer;
        outline: none;
        border: none;
        font-family: $fontmenu;
        font-weight: bold;
        font-size: 16px;
        border-radius: 3px;
        padding: 6px 15px;
        background-color: #2d9687;
        color: #fff;
        width: 100%;
        margin: 10px 0;
        letter-spacing: 1px;
    }
    .checkboxSpec {
        display: flex;
        flex-wrap: wrap;
    }
    .addBtn {
        background-color: transparent;
        width: 50px;
        align-self: center;
        border: none;
        cursor: pointer;
        color: #fff;
        transition: 100ms ease-in;
        outline: none;
        margin-bottom: 15px;
        font-size: 22px;
        &:hover {
            color: #ff6e6e;
        }
    }
    .add {
        width: 100%;
        padding: 10px;
    }
</style>