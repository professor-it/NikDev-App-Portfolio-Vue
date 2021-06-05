<template>
    <div class="services">
        <div class="service" v-for="(el, index) in page.services" :key="index" @click="modal(index)"
        >
            <i :class="el.imgDesc"></i>
            <div class="service-name">{{el.name}}</div>
            <div class="service-desc">{{el.desc}}</div>
        </div>
        <teleport to="body">
            <Modal v-if="isModalVisible" @close="isModalVisible = false" :name="modalData.name">
                <component
                        v-for="(el, index) in modalData.modal"
                        :key="index"
                        :is="'modal-' + el.type"
                        v-bind="{value: el.value}"
                ></component>
            </Modal>
        </teleport>
    </div>
</template>

<script>
    import Modal from '../components/Modal'
    import ModalDesc from '../components/ModalService/ModalDesc'
    import ModalExample from '../components/ModalService/ModalExample'
    import ModalList from '../components/ModalService/ModalList'
    import ModalText from '../components/ModalService/ModalText'
    import ModalTime from '../components/ModalService/ModalTime'
    import ModalTitle from '../components/ModalService/ModalTitle'
	import {ref, computed} from 'vue'
	export default {
		props: ['page'],
        components: {Modal, ModalTitle, ModalTime, ModalText, ModalList, ModalExample, ModalDesc},
        setup(props){
			const isModalVisible = ref(false)
			const isModalIndex = ref(null)

            const modal = (i) => {
				isModalVisible.value = true
				isModalIndex.value = i
            }

			const modalData = computed(() => props.page.services[isModalIndex.value])

            return {
				isModalVisible,
                modal,
				modalData
            }
        }
	}
</script>

<style scoped lang="scss">
    $maintext: #999;
    $fontmenu: "Comfortaa", sans-serif;
    .services {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 400px));
        gap: 30px;
        justify-content: center;
        padding: 0 30px;
    }
    .service {
        color: $maintext;
        text-align: center;
        padding: 30px 0 50px 0;
        font-family: $fontmenu;
        border-bottom: 2px solid #fff;
        height: 100%;
        transition: 0.3s;
        cursor: pointer;
        &:hover {
            border-bottom: 2px solid #2d9687;
            transform: translateY(-10px);
        }
        i {
            color: #fff;
            font-size: 30px;
            transition: 0.5s;
        }
        .service-name {
            margin: 15px;
            font-size: 24px;
            font-weight: bold;
            color: #fff;
            transition: 0.5s;
        }
        .service-desc {
            font-size: 14px;
            text-align: justify;
            font-weight: bold;
            line-height: 20px;
        }
    }
</style>