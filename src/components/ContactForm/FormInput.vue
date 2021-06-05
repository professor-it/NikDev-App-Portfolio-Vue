<template>
    <div class="formElWrapper">
        <p>{{data.title}}</p>
        <input
                class="formEl"
                :type="data.type"
                :name="data.name"
                :required="data.req"
        >
    </div>
</template>

<script>
	export default {
		props: ['data']
	}
</script>