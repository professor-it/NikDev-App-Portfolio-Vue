<template>
    <div class="priceMain">
        <div class="status">{{page.status}}</div>
        <div class="block">
            <div class="blockTitle">{{page.title1}}:</div>
            <div class="itemWrapper">
                <div class="item" v-for="(e, index) in page.title1El" :key="index">
                    <span class="spanTitle">{{e.title}}</span>
                    {{e.text}}
                </div>
            </div>
        </div>
        <div class="block">
            <div class="blockTitle">{{page.title2}}:</div>
            <div class="warrantyPrice">
                <ul>
                    <li v-for="(e, index) in page.title2El" :key="index">
                        {{e}};
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <InsertBlock title="Оформление заказа" desc="Ниже представлена минимальная стоимость услуг!">
        <form>
            <div v-for="(item, index) in page.priceMain" :key="index">
                <div class="c1">{{item.title}}:</div>
                <div class="c2">
                    <div class="item" v-for="(e,index) in item.items" :key="index">
                        <label :for="e.title + index">
                            <input
                                    :id="e.title + index"
                                    type="checkbox"
                                    :name="e.title"
                                    :value="e.cost"
                            >
                            {{e.title}}
                            <span v-if="e.cost">( {{e.cost}} )</span>
                        </label>
                    </div>
                </div>
            </div>
            <div class="sumTotal">
                <button-app btnText="Оформить заказ" @click.prevent="submit"/>
                <p>Минимальная стоимость выбраных услуг: <span>{{sumTotal}}</span>$</p>
            </div>
            <div class="sumTotalDesc">
                <span>*</span>
                Ваша реальная стоимость обсуждается во время личной беседы, а также зависит от сложности вашего
                макета и срочности выполенения заказа.
                <span>*</span>
            </div>
        </form>
    </InsertBlock>
    <div class="priceCalc">
        <div class="priceWrapper">
            <div class="calcTitle">{{page.footerBlock1.title}}</div>
            <div class="calcText">{{page.footerBlock1.text}}</div>
        </div>
        <div class="priceIcon clock">
            <i class="far fa-clock"></i>
        </div>
    </div>
    <div class="priceCalc">
        <div class="priceIcon calc">
            <i class="fas fa-calculator"></i>
        </div>
        <div class="priceWrapper">
            <div class="calcTitle">{{page.footerBlock2.title}}</div>
            <div class="calcText">{{page.footerBlock2.text}}</div>
        </div>
    </div>
</template>

<script>
import InsertBlock from '../components/InsertBlock'
import buttonApp from '../components/UI/buttonApp'
import {ref} from 'vue'
export default {
	components: {InsertBlock, buttonApp},
    props: ['page'],
    setup() {
		const sumTotal = ref(0)

        const submit = () => {
			console.log()
        }
        return {
			sumTotal,
			submit
        }
    }
}
</script>

<style scoped lang="scss">
$maintext: #999;
$fontmenu: "Comfortaa", sans-serif;
.priceMain {
    color: $maintext;
    font-family: $fontmenu;
    padding: 0 30px;
    max-width: 1980px;
    margin: 0 auto;
    .status {
        margin-bottom: 30px;
        font-size: 22px;
        color: #ffffff;
        font-weight: bold;
    }
    .block {
        .blockTitle {
            color: #ffffff;
            margin-bottom: 10px;
            font-size: 18px;
            font-weight: bold;
            text-decoration: underline;
        }
        .itemWrapper {
            display: flex;
            justify-content: space-between;
            margin-bottom: 30px;
            width: 100%;
            .item {
                width: 30%;
                line-height: 22px;
                &:nth-child(2) {
                    margin: 0 20px;
                }
                .spanTitle {
                    color: #ffffff;
                    font-weight: bold;
                    display: block;
                    margin-bottom: 5px;
                }
            }
        }
        .warrantyPrice {
            li {
                list-style: disc inside;
                line-height: 22px;
            }
        }
    }
}
.priceCalc{
    color: $maintext;
    font-family: $fontmenu;
    padding: 30px 30px 0 30px;
    max-width: 1980px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    .priceIcon{
        font-size: 120px;
        color: #c32285;
    }
    .clock {
        margin-left: 20px;
    }
    .calc {
        margin-right: 20px;
    }
    .calcTitle{
        font-size: 18px;
        margin-bottom: 10px;
        font-weight: bold;
        text-decoration: underline;
        color: #fff;
    }
    .calcText{
        line-height: 22px;
        text-align: justify;
    }
}
form > div {
    display: flex;
    font-size: 14px;
    margin-top: 10px;
    justify-content: center;
    .c1{
        width: 400px;
        text-align: right;
        margin-left: -100px;
        vertical-align: top;
        line-height: 24px;
    }
    .c2 {
        width: 400px;
        text-align: left;
        margin-left: 10px;
        vertical-align: top;
        line-height: 24px;
        label {
            cursor: pointer;
            & > span {
                font-size: 10px;
                color: #2d9687;

                font-weight: bold;
            }
        }
        input {
            cursor: pointer;
        }
    }
}
form{
    margin: 10px 0;
    width: 100%;
    .sumTotal {
        background-color: #000;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px 0 0px;
        p {
            font-size: 18px;
            span {
                color: #2d9687;
                font-weight: bold;
            }
        }
    }
    .sumTotalDesc{
        font-size: 14px;
        letter-spacing: 1px;
        color: #2d9687;
        font-weight: bold;
        text-align: center;
        & > span {
            color: red;
            font-size: 20px;
            margin: 0 10px;
        }
    }
}
</style>