<template>
    <div class="welcome">
        <div class="container welcome__container">
            <div class="welcome__content text-center pb-4">
                <img src="~@/assets/images/img_1/favicon.png" alt="" class="welcome__content--img">
                <h1 class="welcome__content--txt pt-4">Welcome to Venture Nation!</h1>
                <p class="welcome__content--sub-txt pt-2">We’re glad you’re here. Choose your path to get started</p>
            </div>
            <div class="row welcome__row justify-content-evenly pt-4">
                <div class="col-md-4 welcome__col">
                    <div class="">
                        <img src="~@/assets/images/img_1/industry.png" alt="" class="welcome__col--img">
                    </div>
                    <h1 class="welcome__col--txt">Venture owner</h1>
                    <p class="welcome__col--sub-txt">
                        <span class="welcome__col--sub-col-txt">Register your venture to have access to exclusive </span>
                        <span class="welcome__col--sub-col-txt">perks, tools, resources, and courses designed just </span>
                        <span class="welcome__col--sub-col-txt">to grow your business. No matter what stage you</span>
                        <span class="welcome__col--sub-col-txt">are in, there is something made just for you.</span>
                    </p>
                    <button class=""></button>
                </div>
                <div class="col-md-4 welcome__sub-col">
                    <div class="">
                        <img src="~@/assets/images/img_1/teach.png" alt="" class="welcome__col--img">
                    </div>
                    <h1 class="welcome__col--txt">Entrepreneurship support provider</h1>
                    <p class="welcome__col--sub-txt">
                        <span class="welcome__col--sub-col-txt">Become a contributor to the Venture Nation </span>
                        <span class="welcome__col--sub-col-txt"> community helping other entrepreneurs grow their</span>
                        <span class="welcome__col--sub-col-txt">businesses with the offerings, expertise, support,</span>
                        <span class="welcome__col--sub-col-txt">tools, and resources, you bring to the table.</span>
                    </p>
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


// body {
//     margin: 0;
//     height: 100vh;
// }
.welcome {
  background-color: white;
  background-position: center;
  background-size:cover;
  height: 100vh;
  padding-top: 4rem;

  &__col {
    padding: 0.5rem 0rem;
    background-color: #FFFFFF;
    box-shadow: 00 0 50px #ccc;
    border-radius: 0.938rem;
    padding: 1.5rem;

    &--sub-col-txt {
        display: inline-block;
        font-size: 1rem;
    }
    &--txt {
        display: inline-block;
        font-size: 1.25rem;
        padding: 1rem 0;
    }
    &--img {
        padding: 1rem 0;
        width: 3.375rem;
    }

  }

  &__sub-col {
    padding: 0.5rem 0rem;
    background-color: #FFFFFF;
    box-shadow: 00 0 50px #ccc;
    border-radius: 0.938rem;
    padding: 1.5rem;
  }


}


body {
    min-height: 100vh;
    background-color: #ffffff;
    margin: 0;
}
</style>