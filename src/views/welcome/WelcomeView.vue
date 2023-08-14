<template>
    <div class="welcome">
        <div class="container welcome__container">
            <div class="welcome__content text-center pb-4">
                <img src="~@/assets/images/img_1/favicon.png" alt="" class="welcome__content--img">
                <h1 class="welcome__content--txt pt-4">Welcome to Venture Nation!</h1>
                <p class="welcome__content--sub-txt pt-2">We’re glad you’re here. Choose your path to get started</p>
            </div>
            <div class="row welcome__row justify-content-evenly pt-4">
                <div class="col-md-5 welcome__col">
                    <div class="">
                        <img src="~@/assets/images/img_1/industry.png" alt="" class="welcome__col--img">
                    </div>
                    <h1 class="welcome__col--txt">Venture owner</h1>
                    <p class="welcome__col--sub-txt">
                        <span class="welcome__col--sub-col-txt">
                            Register your venture to have access to exclusive perks, tools, resources, and courses designed just 
                            to grow your business. No matter what stage you are in, there is something made just for you.
                        </span>
                    </p>
                    <div class="field padding-bottom--24 pt-3">
                      <input type="submit" name="submit" value="Continue as a Venture Owner">
                    </div>
                </div>
                <div class="col-md-5 welcome__sub-col">
                    <div class="">
                        <img src="~@/assets/images/img_1/teach.png" alt="" class="welcome__col--img">
                    </div>
                    <h1 class="welcome__col--txt">Entrepreneurship support provider</h1>
                    <p class="welcome__col--sub-txt">
                        <span class="welcome__col--sub-col-txt">
                            Become a contributor to the Venture Nation community helping other entrepreneurs grow their 
                            businesses with the offerings, expertise, support, tools, and resources, you bring to the table.
                        </span>
                    </p>
                    <div class="field padding-bottom--24 pt-3">
                      <input type="submit" name="submit" value="Continue as an ESP">
                    </div>
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


.welcome {
    
    &__container {
    //   background-color: white;
    //   background-position: center;
    //   background-size:cover;
    //   height: 100vh;
      padding-top: 4rem;

  }

  &__content {
    
    padding-top: 2rem;

    &--img {
        width: 3.063rem;
    }
    
    &--txt {
        font-size: 1.5rem;
        padding: 0 0;
    }

    &--sub-txt {
        font-size: 1rem;
    }
  }

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
        padding: 0.5rem 0;
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

.field input {
    font-size: 16px;
    line-height: 28px;
    padding: 8px 16px;
    width: 100%;
    min-height: 44px;
    border: unset;
    border-radius: 4px;
    outline-color: rgb(84 105 212 / 0.5);
    background-color: linear-gradient(90.73deg, #5A27D5 0%, #5F27D3 32.36%, #AE2EC4 100%);
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
                rgba(0, 0, 0, 0) 0px 0px 0px 0px,
                rgba(0, 0, 0, 0) 0px 0px 0px 0px,
                rgba(60, 66, 87, 0.16) 0px 0px 0px 1px,
                rgba(0, 0, 0, 0) 0px 0px 0px 0px,
                rgba(0, 0, 0, 0) 0px 0px 0px 0px,
                rgba(0, 0, 0, 0) 0px 0px 0px 0px;
}

input[type="submit"] {
    background: linear-gradient(90.73deg, #5A27D5 0%, #5F27D3 32.36%, #AE2EC4 100%);
    color: #fff;
    font-weight: 600;
    cursor: pointer;
}

body {
    min-height: 100vh;
    background-color: #ffffff;
    margin: 0;
}
</style>