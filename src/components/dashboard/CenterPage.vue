<template>
    <div class="center-page pt-4">
        <div class="container center-page__container">
            <div class="row center-page__main-row">
                <div class="col-md-4 center-page__main-col">
                    <div class="row center-page__sub-row" >
                        <div class="col-md-4 align-self-center center-page__col-img">
                            <img src="~@/assets/images/dashboard/checkbox.png" alt="Logo" class="center-page__img-green">
                        </div>
                        <div class="col-md-6 center-page__sub-col" >
                            <p>Completed courses</p>
                            <h1>27</h1>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 center-page__main-col">
                    <div class="row center-page__sub-row">
                        <div class="col-md-4 align-self-center center-page__col-img">
                            <img src="~@/assets/images/dashboard/red.png" alt="Logo" class="center-page__img-red">
                        </div>
                        <div class="col-md-6 center-page__sub-col">
                            <p>Courses in progress</p>
                            <h1>4</h1>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 center-page__main-col">
                    <div class="row center-page__sub-row">
                        <div class="col-md-3 align-self-center center-page__col-img">
                            <img src="~@/assets/images/dashboard/blue.png" alt="Logo" class="center-page__img-blue">
                        </div>
                        <div class="col-md-6 center-page__sub-col">
                            <p>Total communities</p>
                            <h1>6</h1>
                        </div>
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


.center-page {
    padding: 1rem 1.5rem;
    margin-top: 0;
    // background-color: aqua;

    &__container {
        padding: 0rem 0rem;
        // background-color: red;
    }

    &__main-row {
        padding: 0rem 0rem;
    }

    &__main-col {
        padding: 1rem 2rem;
    }

    &__sub-row {
        border-radius: 0.25rem;
        border: 1px solid rgba(230, 230, 230, 0.30);
        background: #FFF;
        box-shadow: 0px 0px 50px -5px rgba(0, 0, 0, 0.06);
        padding: 1.4rem 1.4rem;
    }

    &__col-img {
        display: flex;
        justify-content: center;
        align-items: center;
 
    }
    
    &__img-green {
        border-radius: 0.3125rem;
        width: 2.8125rem;
        height: 2.8125rem;
        background: rgba(10, 167, 7, 0.10);
        padding: 0.75rem 0.6875rem 0.6875rem 0.75rem;
    }

    &__img-red {
        border-radius: 0.3125rem;
        background: rgba(237, 107, 70, 0.10);
        width: 2.8125rem;
        height: 2.8125rem;
        padding: 0.75rem 0.6875rem 0.6875rem 0.75rem;
    }

    &__img-blue {
        border-radius: 0.3125rem;
        background: rgba(65, 152, 247, 0.10);
        border-radius: 0.3125rem;
        width: 2.8125rem;
        height: 2.8125rem;
        padding: 0.75rem 0.6875rem 0.6875rem 0.75rem;
    }
    
    // &__sub-col {      
    //     background-color: teal;
    // }
}
</style>
  