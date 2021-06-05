<template>
    <div class="formElWrapper">
        <p>{{data.title}}</p>
        <select class="formEl" :name="data.name">
            <option
                v-for="(option, index) in data.options"
                :key="index"
                :value="option.value"
            >
                {{option.value}}
            </option>
        </select>
    </div>
</template>

<script>
	export default {
		props: ['data']
	}
</script>

<style scoped>

</style>