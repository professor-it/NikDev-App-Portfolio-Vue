<template>
    <button class="btn" v-if="btnText">
        <span class="btn-circle">
            <span class="icon arrow"></span>
        </span>
        <span class="btn-text">{{btnText}}</span>
    </button>
</template>

<script>
	import {useRouter} from 'vue-router'
	export default {
		props: ['btnText'],
	}
</script>

<style scoped lang="scss">
    .btn {
        position: relative;
        display: flex;
        align-items: center;
        cursor: pointer;
        border: none;
        outline: none;
        background: transparent;
        padding: 0 15px 0 0;
        font-size: 18px;
        height: auto;
        margin: 0;
        width: auto;
        &:hover {
            .btn-circle {
                width: 100%;
                .icon {
                    &.arrow {
                        background: #fff;
                        transform: translate(10px, 0);
                    }
                }
            }
        }
        &-text {
            margin: 0 0 0 50px;
            color: #fff;
            font-weight: bold;
            line-height: 1.6;
            z-index: 1;
        }
        &-circle {
            transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
            position: absolute;
            display: block;
            z-index: 0;
            margin: 0;
            width: 40px;
            height: 40px;
            background: #2d9687;
            border-radius: 50px;
            .icon {
                position: absolute;
                top: 0;
                bottom: 0;
                margin: auto;
                background: #000;
                &.arrow {
                    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
                    left: 4px;
                    width: 20px;
                    height: 2px;
                    background: none;
                    &::before {
                        position: absolute;
                        content: "";
                        top: -4px;
                        right: 0px;
                        width: 8px;
                        height: 8px;
                        border-top: 0.125rem solid #fff;
                        border-right: 0.125rem solid #fff;
                        transform: rotate(45deg);
                    }
                }
            }
        }
    }

</style>