<template>
    <div class="welcome">
        <div class="welcome__container text-center">
            <div class="welcome__content">
                <img src="~@/assets/images/img_1/favicon.png" alt="" class="welcome__content--img">
                <h1 class="welcome__content--txt">Welcome to Venture Nation!</h1>
                <p class="welcome__content--sub-txt">We’re glad you’re here. Choose your path to get started</p>
            </div>
            <div class="row welcome__row align-items-center">
                <div class="col welcome__col">
                    <img src="~@/assets/images/img_1/industry.png" alt="" class="welcome__col--img">
                    <h1 class="welcome__col--txt"></h1>
                    <p class="welcome__col--sub-txt"></p>
                    <button class=""></button>
                </div>
                <div class="col welcome__sub-col">
                    <img src="~@/assets/images/img_1/teach.png" alt="" class="welcome__col--img">
                    <h1 class="welcome__col--txt"></h1>
                    <p class="welcome__col--sub-txt"></p>
                    <button class=""></button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">


</script>
  
<style lang="scss" scoped>
@import "@/sass/variable.scss";
@import "@/sass/mixin.scss";


// .welcome {
//   background-color: white;
//   height: 100vh;
// }


body {
    min-height: 100vh;
    background-color: #ffffff;
    margin: 0;
}
</style>