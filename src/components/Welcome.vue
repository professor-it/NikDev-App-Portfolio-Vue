<template>
    <div class="welc">
        <span class="welc-name">П</span>
        <span class="welc-name">р</span>
        <span class="welc-name">и</span>
        <span class="welc-name">в</span>
        <span class="welc-name">е</span>
        <span class="welc-name welc-margin">т</span>
        <span class="welc-name"><i class="fas fa-hand-peace"></i></span><br>

        <span class="welc-name welc-margin">Я</span>
        <span class="welc-name welc-color">Д</span>
        <span class="welc-name">м</span>
        <span class="welc-name">и</span>
        <span class="welc-name">т</span>
        <span class="welc-name">р</span>
        <span class="welc-name">и</span>
        <span class="welc-name">й</span>
        <span class="welc-name">,</span><br>

        <span class="welc-name">в</span>
        <span class="welc-name">е</span>
        <span class="welc-name welc-margin">б</span>
        <span class="welc-name">р</span>
        <span class="welc-name">а</span>
        <span class="welc-name">з</span>
        <span class="welc-name">р</span>
        <span class="welc-name">а</span>
        <span class="welc-name">б</span>
        <span class="welc-name">о</span>
        <span class="welc-name">т</span>
        <span class="welc-name">ч</span>
        <span class="welc-name">и</span>
        <span class="welc-name">к</span>
        <span class="welc-name welc-after">.</span><br>
        <span class="welc-desc">Front End Developer / Freelancer / GIS Engineer</span>
    </div>
</template>

<script>
	export default {

	}
</script>

<style scoped lang="scss">
    $fontmenu: "Comfortaa", sans-serif;
    $fontbefore: "La Belle Aurore", sans-serif;
    $maintext: #999;
    $modalcolor: #6c757d;
.welc {
    color: #fff;
    line-height: 70px;
    font-size: 50px;
    margin-top: 25px;
    margin-bottom: 30px;
    font-family: $fontmenu;
    font-weight: 600;
    position: relative;
    text-align: left;
    &-margin {
        margin-right: 20px;
    }
    &-color {
        color: #c32285;
        font-family: 'Arial';
        font-size: 70px;
    }

    &-name {
        display: inline-block;
        padding: 0;
        cursor: pointer;
        i {
            font-size: 45px;
        }
    }
    &-desc {
        display: block;
        font-size: 11px;
        letter-spacing: 2px;
        line-height: 16px;
        margin-top: 20px;
        color: $maintext;
    }
}
.welc {
    &::before {
        content: '<h1>';
        font-family: $fontbefore;
        font-size: 20px;
        position: absolute;
        color: $modalcolor;
        top: -50px;
        left: -27px;
    }

    &-after{
        position: relative;
        &::after {
            content: '</h1>';
            cursor: default;
            font-family: $fontbefore;
            font-size: 20px;
            position: absolute;
            color: $modalcolor;
            bottom: -20px;
            left: 25px;
        }
    }
}
@media (min-width: 1440px) and (max-width: 1679px) {
    .welc {
        font-size: 40px;
        &-color {
            font-size: 60px;
        }
    }
}
@media (min-width: 1024px) and (max-width: 1439px) {
    .welc {
        font-size: 28px;
        line-height: 60px;
        &-color {
            font-size: 54px;
        }
        .welc-desc {
            font-size: 9px;
        }
    }
}
@media (min-width: 768px) and (max-width: 1023px) {
    .welc {
        font-size: 44px;
        line-height: 65px;
        &-color {
            font-size: 65px;
        }
        .welc-desc {
            font-size: 14px;
        }
    }
    .welc {
        &::before {
            left: -17px;
        }
    }
}
@media (min-width: 425px) and (max-width: 767px) {
    .welc {
        font-size: 30px;
        line-height: 55px;
        &-color {
            font-size: 55px;
        }
        .welc-desc {
            font-size: 10px;
        }
    }
    .welc {
        &::before {
            left: -17px;
        }
    }
}
@media (min-width: 375px) and (max-width: 424px) {
    .welc {
        font-size: 26px;
        line-height: 40px;
        &-color {
            font-size: 40px;
        }
        .welc-desc {
            font-size: 10px;
        }
    }
    .welc {
        &::before {
            left: -17px;
        }
    }
}
@media (min-width: 320px) and (max-width: 374px) {
    .welc {
        font-size: 20px;
        line-height: 40px;
        &-color {
            font-size: 40px;
        }
        .welc-desc {
            font-size: 10px;
        }
    }
    .welc {
        &::before {
            left: -17px;
        }
    }
}
</style>