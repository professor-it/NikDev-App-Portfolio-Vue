<template>
    <div class="aboutMain">
        <div class="aboutMainLeft">
            <Desc/>
            <Title :text="page.namePage"/>
            <div class="text">
                <p v-for="(about, index) in page.aboutMe" :key="index">
                    {{about.text}}
                </p>
            </div>
            <div class="prosName">{{page.descPage}}</div>
            <div class="prosNameInfo">
                <div class="pros" v-for="(desc, index) in page.descPageEl" :key="index">
                    <span>{{desc.title}}</span><br>
                    {{desc.text}}
                </div>
            </div>
        </div>
        <div class="aboutMainRight">
            <img :src="page.mainImg" :alt="page.mainImg">
        </div>
    </div>
    <div class="resume">
        <InsertBlock title="Резюме">
            <div v-for="(res, index) in page.resume" :key="index" class="resEl">
                <div class="c1">{{res.title}}:</div>
                <div class="c2" v-if="res.array">
                    <p v-for="e in res.text">{{e.text}}</p>
                </div>
                <div class="c2" v-else="page.array">{{res.text}}</div>
            </div>
            <div class="resEl">
                <div class="c1">{{page.contacts.title}}:</div>
                <div class="c2">
                    <p v-for="e in page.contacts.text">
                        <i :class="e.style"/>&nbsp;<u>{{e.title}}</u>:&nbsp;{{e.text}}
                    </p>
                </div>
            </div>
        </InsertBlock>
    </div>
    <div class="cert">
        <Title text="Сертификаты"/>
        <ErrorMsg v-if="error"
                  text="На сегодняшний день, сертификатов нет, но в скором времени они появятся, либо в базе данных произошел сбой!"
        />
        <loader-app v-if="loading"/>
        <div class="certWrapper" v-else>
            <Slider v-for="(cert, index) in page.certificates" :key="index" :data="cert"/>
            <add-new-el title="Добавить" url="/about/addCert"/>
        </div>
    </div>
</template>

<script>
import Desc from '../components/style/Desc'
import Title from '../components/style/Title'
import InsertBlock from '../components/InsertBlock'
import Slider from '../components/Slider'
import addNewEl from '../components/UI/addNewEl'
import ErrorMsg from '../components/UI/ErrorMsg'
import loaderApp from '../components/UI/loaderApp'
import {onMounted, ref} from 'vue'
import {useStore} from 'vuex'
export default {
    props: ['page'],
    components: {Desc, Title, InsertBlock, Slider, addNewEl, ErrorMsg, loaderApp},
    setup(){
		const store = useStore()
		const loading = ref(false)
		const error = ref(false)
        onMounted(async () => {
            loading.value = true
            try {
                await store.dispatch('loadCert')
                loading.value = false
            } catch (e) {
                loading.value = false
                error.value = true
            }
        })
        return {
			loading,
			error
        }
    }
}
</script>

<style scoped lang="scss">
$maintext: #999;
$fontmenu: "Comfortaa", sans-serif;
$fonttitle: "Kelly Slab", sans-serif;
.aboutMain {
    color: $maintext;
    padding: 30px;
    display: flex;
    margin: 0 auto;
    max-width: 1980px;
    font-family: $fontmenu;
    .text {
        line-height: 24px;
        font-size: 16px;
        max-width: 100%;
        text-align: justify;
        margin: 15px 0;
        p {
            margin: 0 0 10px;
        }
    }
}
.aboutMainLeft {
    width: 60%;
    margin-right: 30px;
    .title, .desc {
        text-align: left;
    }
    .prosName {
        color: #fff;
        font-size: 20px;
        margin: 20px 0 15px 0;
        letter-spacing: 1px;
        font-family: $fonttitle;
        font-weight: bold;
        text-align: left;
    }
    .prosNameInfo {
        display: flex;
        .pros {
            line-height: 22px;
            font-size: 14px;
            margin-bottom: 10px;
            text-align: left;
            width: 33.333%;
            &:nth-child(2) {
                margin: 0 20px;
            }
            span {
                display: inline-block;
                color: #fff;
                font-size: 16px;
                font-family: $fonttitle;
                letter-spacing: 1px;
                margin-bottom: 5px;
                text-decoration: underline;
            }
        }
    }
}
.aboutMainRight {
    width: 40%;
    position: relative;
    margin: 0 auto;
    img {
        width: 100%;
        height: 100%;
        min-height: 150px;
        object-fit: contain;
        object-position: bottom;
        position: absolute;
        top: 0;
        left: 0;
    }
}
.resEl {
    display: flex;
    margin-top: 16px;
    font-size: 14px;
    .c1 {
        width: 400px;
        text-align: right;
        margin-left: -100px;
        vertical-align: top;
        line-height: 24px;
    }
    .c2 {
        width: 400px;
        text-align: left;
        vertical-align: top;
        line-height: 24px;
        margin-left: 10px;
        p {
            padding: 0;
            margin: 0;
        }
    }
}
.cert {
    text-align: center;
    padding-top: 50px;
    .certWrapper {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 200px));
        gap: 20px;
        padding: 30px;
        justify-content: center;
    }
}
@media (min-width: 1024px) and (max-width: 1439px) {
    .aboutMain {
        padding: 10px;
        display: block;
        .text {
            line-height: 22px;
            font-size: 16px;
        }
    }
    .aboutMainLeft {
        width: 100%;
        margin-right: 0px;
        .prosName {
            font-size: 18px;
        }
        .prosNameInfo {
            display: flex;
            .pros {
                line-height: 22px;
                font-size: 16px;
                margin-bottom: 0;
                text-align: left;
                width: 100%;
                &:nth-child(2) {
                    margin: 0 10px;
                }
            }
        }
    }
    .aboutMainRight {
        display: none;
    }
}
@media (min-width: 768px) and (max-width: 1023px) {
    .aboutMain {
        padding: 10px;
        display: block;
        .text {
            line-height: 22px;
            font-size: 16px;
        }
    }
    .aboutMainLeft {
        width: 100%;
        margin-right: 0;
        .prosName {
            font-size: 18px;
        }
        .prosNameInfo {
            display: flex;
            .pros {
                line-height: 20px;
                font-size: 14px;
                margin-bottom: 0px;
                text-align: left;
                width: 100%;
                &:nth-child(2) {
                    margin: 0 20px;
                }
            }
        }
    }
    .aboutMainRight {
        display: none;
    }
}
@media (min-width: 425px) and (max-width: 767px) {
    .aboutMain {
        padding: 10px;
        display: block;
        .text {
            line-height: 20px;
            font-size: 14px;
        }
    }
    .aboutMainLeft {
        width: 100%;
        margin-right: 0;
        .prosName {
            font-size: 18px;
        }
        .prosNameInfo {
            display: block;
            .pros {
                line-height: 20px;
                font-size: 14px;
                margin-bottom: 0;
                text-align: justify;
                width: 100%;
                &:nth-child(2) {
                    margin: 20px 0;
                }
            }
        }
    }
    .aboutMainRight {
        display: none;
    }
    .resEl {
        display: block;
        width: 100%;
        font-size: 14px;
        margin: 5px 0;
        .c1 {
            width: auto;
            text-align: left;
            margin-left: 5px;
            margin-right: 5px;
            vertical-align: top;
            line-height: 24px;
            text-decoration: underline;
        }
        .c2 {
            width: auto;
            text-align: left;
            line-height: 24px;
            margin-left: 14px;
            margin-right: 5px;
            font-size: 12px;
        }
    }
}
@media (min-width: 375px) and (max-width: 424px) {
    .aboutMain {
        padding: 10px;
        display: block;
        .text {
            line-height: 20px;
            font-size: 14px;
        }
    }
    .aboutMainLeft {
        width: 100%;
        margin-right: 0px;
        .prosName {
            font-size: 18px;
        }
        .prosNameInfo {
            display: block;
            .pros {
                line-height: 18px;
                font-size: 14px;
                margin-bottom: 0px;
                text-align: justify;
                width: 100%;
                &:nth-child(2) {
                    margin: 20px 0;
                }
            }
        }
    }
    .aboutMainRight {
        display: none;
    }
    .resEl {
        display: block;
        width: 100%;
        font-size: 14px;
        margin: 5px 0;
        .c1 {
            width: auto;
            text-align: left;
            margin-left: 5px;
            margin-right: 5px;
            vertical-align: top;
            line-height: 24px;
            text-decoration: underline;
        }
        .c2 {
            width: auto;
            text-align: left;
            line-height: 24px;
            margin-left: 14px;
            margin-right: 5px;
            font-size: 12px;
        }
    }
}
@media (min-width: 320px) and (max-width: 374px) {
    .aboutMain {
        padding: 10px;
        display: block;
        .text {
            line-height: 20px;
            font-size: 14px;
        }
    }
    .aboutMainLeft {
        width: 100%;
        margin-right: 0px;
        .prosName {
            font-size: 18px;
        }
        .prosNameInfo {
            display: block;
            .pros {
                line-height: 18px;
                font-size: 14px;
                margin-bottom: 0px;
                text-align: justify;
                width: 100%;
                &:nth-child(2) {
                    margin: 20px 0;
                }
            }
        }
    }
    .aboutMainRight {
        display: none;
    }
    .resEl {
        display: block;
        width: 100%;
        font-size: 14px;
        margin: 5px 0;
        .c1 {
            width: auto;
            text-align: left;
            margin-left: 5px;
            margin-right: 5px;
            vertical-align: top;
            line-height: 24px;
            text-decoration: underline;
        }
        .c2 {
            width: auto;
            text-align: left;
            line-height: 24px;
            margin-left: 14px;
            margin-right: 5px;
            font-size: 12px;
        }
    }
}
</style>