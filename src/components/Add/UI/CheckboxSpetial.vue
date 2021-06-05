<template>
    <div class="Checkbox">
        <input
                type="checkbox"
                :id="`checkbox${id}`"
                :name="name"
                :checked="value ? true : false"
        >
        <label :for="`checkbox${id}`">{{label}}</label>
    </div>
</template>

<script>
	export default {
		props: ['id', 'name', 'value', 'label'],
	}
</script>

<style scoped lang="scss">
$fontmenu: "Comfortaa", sans-serif;
.Checkbox {
    position: relative;
}
input {
    position: absolute;
    left: 0;
    opacity: 0;
}
label {
    font-style: italic;
    font-size: 14px;
    cursor: pointer;
    display: inline-block;
    border: 2px solid lightslategrey;
    border-radius: 5px;
    padding: 5px 10px;
    margin: 10px;
    transition: 100ms ease-in;
}

input + label {
    content: none;
}
input:checked + label {
    border-color: #ff6e6e;
    background-color: #ff6e6e;
    color: #fff;
}
</style>