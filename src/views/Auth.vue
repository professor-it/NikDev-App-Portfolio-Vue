<template>
    <PageTitle :pageTitle="`Авторизация`" desc="Ну попробуй зайди!"/>
    <form @submit.prevent="onSubmit">
        <div class="formElWrapper">
            <p>{{login.title}}</p>
            <input
                    class="formEl"
                    :type="login.type"
                    :name="login.name"
                    :required="login.req"
                    v-model="login.value"
            >
        </div>
        <div class="formElWrapper">
            <p>{{password.title}}</p>
            <input
                    class="formEl"
                    :type="password.type"
                    :name="password.name"
                    :required="password.req"
                    v-model="password.value"
            >
        </div>
        <button-app btnText="Sign in"/>
    </form>
</template>

<script>
import PageTitle from '../components/style/PageTitle'
import buttonApp from '../components/UI/buttonApp'
import {reactive} from 'vue'
import {useRouter} from 'vue-router'
import {useStore} from 'vuex'
export default {
    components: {PageTitle, buttonApp},
    setup() {
		const store = useStore()
		const router = useRouter()
    	const login = reactive({
            type: 'text',
            title: 'Login',
            name: 'Login',
			req: true,
			value: ''
        })
		const password = reactive({
			type: 'password',
			title: 'Password',
			name: 'Password',
			req: true,
			value: ''
		})

		const onSubmit = async values => {
            const obj = {
            	email: login.value,
                password: password.value
            }
            await store.dispatch('auth/login', obj)
            router.push('/')
		}

        return {
			login,
			password,
			onSubmit
        }
    }
}
</script>

<style scoped lang="scss">
form {
    color: #fff;
    max-width: 400px;
    margin: 0 auto;
    .btn {
        margin-left: auto;
    }
}
</style>