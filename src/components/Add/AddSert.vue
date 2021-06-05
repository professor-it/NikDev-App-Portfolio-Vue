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
    </div>
</template>

<script>
import AddInput from './UI/AddInput'
export default {
props: ['title'],
components: {AddInput},
setup(props) {
    function updAddInput(e) {
        props.title.addInput[e.target.name].value = e.target.value
    }

    return {
        updAddInput
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