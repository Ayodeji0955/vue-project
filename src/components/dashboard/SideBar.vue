<template>
    <div class="sidebar">
        <div class="container-fluid text-center sidebar__container">    
            <div class="row sidebar__content">
                <div class="col-sm-2 sidebar__sidenav">
                    <div class="row">
                        <div class="col">

                        </div>
                        <div class="col">

                        </div>
                        <div class="col">

                        </div>
                        <div class="col">

                        </div>
                        <div class="col">
                            
                        </div>
                    </div>
                        <p><a href="#">Dashboard</a></p>
                        <p><a href="#">Learning Hub</a></p>
                        <p><a href="#">Resource Hub</a></p>
                        <p><a href="#">Profile </a></p>
                        <p><a href="#">Communities</a></p>
                        <p><a href="#">Messages</a></p>
                    </div>
                    <div class="col-sm-8 text-left"> 
                        <h1>Welcome</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.                            
                            </p>
                        <hr>
                        <h3>Test</h3>
                        <p>Lorem ipsum...</p>
                    </div>
                    <div class="col-sm-2 sidenav">
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
        background: var(--solid-white, #FFF);
        display: flex;
        width: 18.3125rem;
        height: 58.8125rem;
        padding: 3rem 2.9375rem;
        flex-direction: column;
        align-items: center;
        flex-shrink: 0;
    }

    &__content {
        height: 450px
    }
}


.row.content {
    height: 450px
}

// .container-fluid {
//     padding: 4rem 0;
//     background: #FBFAFF;
// }
// .sidenav {
//     background: var(--solid-white, #FFF);
//     display: flex;
//     width: 18.3125rem;
//     height: 58.8125rem;
//     padding: 3rem 2.9375rem 35.625rem 0.1875rem;
//     flex-direction: column;
//     align-items: center;
//     flex-shrink: 0;
// }
    
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