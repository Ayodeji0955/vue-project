<template>
    <div class="sidebar">
        <div class="container-fluid sidebar__container">    
            <div class="row sidebar__content">
                <div class="col-sm-2 sidebar__sidenav">
                    <div class="row pt-4 px-4">
                        <div class="col-md-12 sidebar__col">
                            <p class="sidebar__col--btn">Dashboard</p>
                        </div>
                        <div class="col-md-12 sidebar__col">
                            <p class="sidebar__col--btn">Learning Hub</p>    
                        </div>
                        <div class="col-md-12 sidebar__col">
                            <p class="sidebar__col--btn">Resource Hub</p>    
                        </div>
                        <div class="sidebar__col">
                            <p class="sidebar__col--btn">Profile </p>
                        </div>
                        <div class="col-md-12 sidebar__col">
                            <p class="sidebar__col--btn">Communities</p>    
                        </div>
                        <div class="col-md-12 sidebar__col">
                            <p class="sidebar__col--btn">Messages</p>   
                        </div>
                    </div>
                </div>
                <div class="col-sm-8 sidebar__main"> 
                    <CenterPage />
                    <CoursesProgress />
                    <CoachingSession />
                </div>
                <div class="col-sm-2 sidebar__sidenav fixed">
                    <div class="well">
                        <p>ADS</p>
                    </div>
                    <div class="well">
                        <p>ADS</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import CenterPage from '../dashboard/CenterPage.vue'
import CoursesProgress from '../dashboard/CoursesProgress.vue'
import CoachingSession from './CoachingSession.vue';
</script>

<style lang="scss" scoped>
@import "@/sass/variable.scss";
@import "@/sass/mixin.scss";


.sidebar {

    &__container {
        padding: 4rem 0;
        background: #FBFAFF;
    }

    &__sidenav {
        // background: var(--solid-white, #FFF);
        background-color: #5A27D5;
        display: flex;
        height: 58.8125rem;
        padding: 3rem 2.9375rem;
        flex-direction: column;
        align-items: center;
        flex-shrink: 0;
        
    }

    &__content {
        height: 450px
    }

    &__col {
        display: flex;
        // width: 13.75rem;
        padding: 0.75rem 5rem 0.75rem 1.25rem;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 0.625rem;
        padding: 0.625rem ;
           
            
        
        &--btn:hover {
            padding: 0.75rem 5rem 0.75rem 1.25rem;
            // border-radius: 0.3125rem 0.9375rem 0.9375rem 0.3125rem;
            // background: #F8F5FF;
            color: #5A27D5;
            border-radius: 0.3125rem 0.9375rem 0.9375rem 0.3125rem;
            background: var(--primary-light, #F8F5FF);
        }

        &--btn {
            color: var(--text-black-2, #7E848E);
            text-align: center;
            font-family: Inter;
            font-size: 1rem;
            font-style: normal;
            font-weight: 400;
            line-height: 1.25rem; /* 125% */
            text-transform: capitalize;
        }
    }

    &__main {
        padding: .5rem 0;
    }
}



.row.content {
    height: 450px
}


    
@media screen and (max-width: 767px) {
    .sidenav {
        height: auto;
        padding: 15px;
    }
    .row.content {
        height:auto;
    } 
}
</style>