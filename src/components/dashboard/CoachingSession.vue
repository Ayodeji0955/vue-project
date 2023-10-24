<template>
    <div class="coaching">
        <div class="container coaching__container">
            <h1 class="coaching__container--header-txt">Coaching sessions</h1>
            <div class="row coaching__main-row justify-content-between">
                <div class="col-md-5 coaching__main-col">
                    <h1 class="coaching__main-col--sub-header">Mentorship with Gilda Charles</h1>
                    <div class="row">
                        <div class="col"><i class="fa-solid fa-calendar-days"></i> Wed, Jun 28</div>
                        <div class="col"><i class="fa-regular fa-clock"></i> 3:00 pm WAT</div>
                    </div>
                </div>
                <div class="col-md-5 coaching__main-col ">
                    <h1 class="coaching__main-col--sub-header">Mentorship with Travis Crosby</h1>
                    <div class="row">
                        <div class="col"><i class="fa-solid fa-calendar-days"></i> Wed, Jun 28</div>
                        <div class="col"><i class="fa-regular fa-clock"></i> 3:00 pm WAT</div>
                    </div>
                </div>
                <div class="col-md-5 coaching__main-col">
                    <h1 class="coaching__main-col--sub-header">Mentorship with Gilda Charles</h1>
                    <div class="row">
                        <div class="col"><i class="fa-solid fa-calendar-days"></i> Wed, Jun 28</div>
                        <div class="col"><i class="fa-regular fa-clock"></i> 3:00 pm WAT</div>
                    </div>
                </div>
                <div class="col-md-5 coaching__main-col">
                    <h1 class="coaching__main-col--sub-header">Mentorship with Travis Crosby</h1>
                    <div class="row">
                        <div class="col"><i class="fa-solid fa-calendar-days"></i> Wed, Jun 28</div>
                        <div class="col"><i class="fa-regular fa-clock"></i> 3:00 pm WAT</div>
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

.coaching {
    padding: 2rem 0rem;
    
    
    &__container {
        background: #FFF;
        box-shadow: 0px 0px 50px -5px rgba(0, 0, 0, 0.06);
        padding: 1.4375rem 1.6875rem 1.5625rem 1.5625rem;
        
        &--header-txt {
            color: var(--text-black, #404040);
            font-family: Inter;
            font-size: 2.125rem;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            padding: 1.4375rem 1.6875rem 0rem 1.5625rem;
        }
    }
    
    &__main-row {
        padding: 1.4375rem 1.6875rem 0rem 1.5625rem;
    }

    &__main-col {
        background-color: red;
        border-radius: 0.3125rem;
        border: 1px solid rgba(230, 230, 230, 0.30);
        padding: 0.8125rem 3rem 0.75rem 0.6875rem;
        margin: 0.5rem 0rem;

        &--sub-header {
            color: var(--text-black, #404040);
            font-family: Inter;
            font-size: 0.975rem;
            font-style: normal;
            font-weight: 400;
            line-height: 1.25rem; 
        }
    }

}

</style>
  