<template>
    <div class="contact">
        <div class="contactInfo">
            <ul>
                <li v-for="(info, index) in page.info" :key="index">— {{info.text}}</li>
            </ul>
            <hr>
            <info-el
                    v-for="(infoSoc, index) in page.blockInfo"
                    :key="index"
                    :text="infoSoc.title"
                    :info-text="infoSoc.desc"
                    :info-src="infoSoc.url"
            />
            <hr>
            <div class="contactCity">
                {{page.city}}
            </div>
        </div>
        <div class="contactForm">
            <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d325518.69904565066!2d30.251831212004724!3d50.40169741184141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNC10LIsIDAyMDAw!5e0!3m2!1sru!2sua!4v1622474452643!5m2!1sru!2sua"
                    allowfullscreen=""
                    loading="lazy"
                    class="map"
            ></iframe>
<!--            <form @submit.prevent="sumbitForm" class="form" method="post" action="../assets/send.php">-->
<!--                <component-->
<!--                    v-for="(el, index) in page.contactForm"-->
<!--                    :key="index"-->
<!--                    :is="'form-' + el.el"-->
<!--                    :data="el"-->
<!--                />-->
<!--                <button-app btnText="Отправить"/>-->
<!--            </form>-->
        </div>
    </div>
</template>

<script>
    import PageTitle from '../components/style/PageTitle'
    import infoEl from '../components/UI/infoEl'
    import FormInput from '../components/ContactForm/FormInput'
    import FormSelect from '../components/ContactForm/FormSelect'
    import FormTextarea from '../components/ContactForm/FormTextarea'
	import ButtonApp from '../components/UI/buttonApp'
	import axios from 'axios'

	export default {
    	props: ['page'],
		components: {
    		ButtonApp,
            PageTitle,
            infoEl,
            FormInput,
            FormSelect,
            FormTextarea,
    	},
        setup() {
    		const sumbitForm = async (e) => {
				let formData = new FormData(e.target)
                await axios.post('../assets/send.php', formData)
            }
            return {
				sumbitForm
            }
        }
	}
</script>

<style scoped lang="scss">
$maintext: #999;
$fontmenu: "Comfortaa", sans-serif;
.contact {
    display: flex;
    max-width: 1980px;
    margin: 0 auto;
    .contactInfo {
        color: $maintext;
        font-family: $fontmenu;
        width: 50%;
        padding-right: 50px;
        text-align: justify;
        li {
            line-height: 26px;
            margin: 20px 0;
            &:first-child {
                margin-top: 7px;
            }
        }
        hr {
            height: 0px;
            border: none;
            border-bottom: 1px solid #fff;
            margin: 30px 0 30px;
        }
        .contactCity {
            font-size: 12px;
            letter-spacing: 1px;
            font-weight: bold;
        }
    }
    .contactForm {
        width: 50%;
        .map {
            border: none;
            border-radius: 5px;
            width: 100%;
            height: 100%;
        }
        form {
            color: #fff;
            font-family: $fontmenu;
            letter-spacing: 1px;
            text-align: left;
        }
    }
}
@media (min-width: 320px) and (max-width: 768px) {
    .contact {
        display: block;
        .contactInfo {
            width: 100%;
            padding-right: 0;
            text-align: justify;
        }
        .contactForm {
            width: 100%;
            height: 300px;
        }
        .map {
            margin-top: 10px;
        }
    }
}
</style>