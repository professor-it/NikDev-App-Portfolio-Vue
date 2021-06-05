<template>
    <div class="AddInput">
        <input
            type="text"
            placeholder="&nbsp;"
            :id="id"
            :name="name"
            :value="value"
        >
        <label :for="id">{{label}}</label>
    </div>
</template>

<script>
	export default {
        props: ['id', 'name', 'value', 'label']
	}
</script>

<style scoped lang="scss">
$fontmenu: "Comfortaa", sans-serif;
.AddInput {
    position: relative;
    margin-bottom: 15px;
    width: 100%;
    input, label {
        font-family: $fontmenu;
        font-size: 14px;
    }
    input {
        width: 100%;
        padding: 15px 0 5px;
        background-color: transparent;
        border: none;
        border-bottom: 2px solid #fff;
        outline: none;
        letter-spacing: 1px;
        color: #fff;
        font-weight: bold;
    }
    label {
        position: absolute;
        pointer-events: none;
        left: 0;
        top: 0;
        line-height: 50px;
        transition: .2s;
        font-style: italic;
        font-size: 12px;
    }
    input:focus-within ~ label,
    input:not(:placeholder-shown):valid + label {
        top: -19px;
        font-size: 10px;
        font-weight: bold;
        color: #ff6e6e;
    }
}
</style>