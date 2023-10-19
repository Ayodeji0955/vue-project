<template>
    <div class="center-page pt-4">
        <div class="container center-page__container">
            <div class="row justify-content-evenly center-page__main-row">
                <div class="col-md-4">
                    <div class="row center-page__sub-row" >
                        <div class="col-md-6 center-page__main-col" >
                            <img src="~@/assets/images/dashboard/checkbox.png" alt="Logo" class="navbar__img">
                        </div>
                        <div class="col-md-6 center-page__sub-col" >
                            <p>Completed courses</p>
                            <h1>27</h1>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="row center-page__sub-row">
                        <div class="col-md-6 center-page__main-col">
                            <img src="~@/assets/images/dashboard/red.png" alt="Logo" class="navbar__img">
                        </div>
                        <div class="col-md-6 center-page__sub-col">
                            <p>Courses in progress</p>
                            <h1>4</h1>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="row center-page__sub-row">
                        <div class="col-md-6 center-page__main-col">
                            <img src="~@/assets/images/dashboard/blue.png" alt="Logo" class="navbar__img">
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
    padding: 1rem .4rem;
    background-color: aqua;
    &__container {
        padding: 3rem 0rem;
    }

    &__main-row {
        padding: 0rem 0rem;
    }

    &__sub-row {
        padding: 0rem 0rem;
        margin: 0rem 0rem;
        border-radius: 0.25rem;
        border: 1px solid rgba(230, 230, 230, 0.30);
        box-shadow: 0px 0px 50px -5px rgba(0, 0, 0, 0.06);
    }

    &__main-col {
        display: flex;
        align-items: center;
        
        margin: 0 0rem;
        background: #FFF;
    }
    
    &__sub-col {      
        margin: 0 0rem;
        background-color: #FFF;
    }
}
</style>
  