<template>
    <div class="formElWrapper">
        <p>{{data.title}}</p>
        <textarea
                class="formEl"
                :name="data.name"
                cols="40"
                rows="10"
                :required="data.req"
        />
    </div>
</template>

<script>
	export default {
		props: ['data']
	}
</script>

<style scoped>

</style>