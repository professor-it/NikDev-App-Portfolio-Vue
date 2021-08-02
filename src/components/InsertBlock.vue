<template>
    <div
            class="insertBlock"
            @click="openInsertBlock"
            :style="insertBlock ? height : ''"
    >
        <div class="title">
            {{title}}
        </div>
        <div class="desc" v-if="desc">
            {{desc}}
        </div>
        <slot/>
    </div>
</template>

<script>
	import {ref} from 'vue'

	export default {
		rops: ['title', 'desc'],
        setup() {
			const insertBlock = ref(false)
			const height = ref('height: auto; cursor: default')

            const openInsertBlock = () => {
				insertBlock.value = true
            }

            return {
				insertBlock,
				height,
				openInsertBlock,
				insertBlock
            }
        }
	}
</script>

<style scoped lang="scss">
    $fontmenu: "Comfortaa", sans-serif;
    .insertBlock {
        background-image: url(../img/bgcont.png);
        overflow: hidden;
        position: relative;
        margin: 30px auto 0;
        max-width: 1980px;
        transition: all 0.2s ease-in-out;
        box-shadow: inset 0 0 50px 0 rgba(16, 16, 16, 1);
        font-family: $fontmenu;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #fff;
        padding: 40px 0;
        height: 130px;
        cursor: pointer;
        &:hover {
            height: 170px;
        }
        .title {
            font-size: 26px;
            font-weight: bold;
            margin-top: 0;
            margin-bottom: 10px;
            text-transform: uppercase;
            i {
                font-size: 26px;
                margin-right: 10px;
            }
        }
        .desc {
            font-size: 11px;
            color: #2d9687;
        }
    }
</style>