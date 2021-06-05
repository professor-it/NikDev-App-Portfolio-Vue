<template>
    <div class="modal">
        <div class="modal-backdrop" @click="$emit('close')"></div>
        <div class="modalBody">
            <div class="close" @click="$emit('close')"></div>
            <div class="name">{{name}}</div>
            <slot/>
        </div>
    </div>
</template>

<script>
	export default {
		props: ['name'],
		emits: ['close']
	}
</script>

<style scoped lang="scss">
$fontmenu: "Comfortaa", sans-serif;
.modal, .modal-backdrop {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
    display: flex;
    justify-content: center;
    font-family: $fontmenu;
}
.modal-backdrop {
    position: fixed;
    background-color: rgba(36, 35, 35, 0.9);
    z-index: 1;
    cursor: pointer;
}
.modalBody {
    position: absolute;
    background-color: #fff;
    z-index: 999;
    box-shadow: 2px 2px 20px 1px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 44px;
    max-width: 1200px;
}
.close {
    width: 25px;
    height: 2px;
    background-color: #000;
    position: relative;
    transform: rotate(140deg);
    cursor: pointer;
    margin-left: auto;
    &::before{
        content: '';
        position: absolute;
        width: 25px;
        height: 2px;
        right: 0;
        top: 0;
        background-color: #000;
        transform: rotate(80deg);
    }
}
.name {
    font-size: 36px;
    font-weight: bold;
}
@media (min-width: 320px) and (max-width: 375px) {
    .modalBody {
        position: absolute;
        background-color: #fff;
        z-index: 999;
        box-shadow: 2px 2px 20px 1px;
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        padding: 40px 20px;
        max-width: 1200px;
    }
    .name {
        font-size: 36px;
        font-weight: bold;
    }
}
</style>