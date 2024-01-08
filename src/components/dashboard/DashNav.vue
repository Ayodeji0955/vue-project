<template>
    <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container-fluid navbar__container">
            <ul class="navbar-nav navbar__nav">
                <li class="nav-item navbar__nav-item">
                    <a class="nav-link navbar__nav-link" href="#">
                        <img src="~@/assets/images/img_1/logo.png" alt="Logo" class="navbar__img">
                    </a>
                </li>
            </ul>
            <form class="d-flex navbar__form" role="search">
                <div class="collapse navbar-collapse navbar__collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="navbar__nav-item pt-3 px-2">
                            <a class="navbar__nav-item--active" aria-current="page" href="#">Learning Hub</a>
                        </li>
                        <li class="navbar__nav-item pt-3 px-2">
                            <a class="navbar__nav-item--active" href="#">Resources Hub</a>
                        </li>
                        <li class="navbar__nav-item pt-3 px-2">
                            <a class="navbar__nav-item--active" href="#">Events</a>
                        </li>
                        <li class="navbar__nav-item pt-3 px-2">
                            <a class="navbar__nav-item--active" aria-current="page" href="#">Services</a>
                        </li>
                        <li class="nav-item dropdown pt-2 px-2">
                            <a class="nav-link dropdown-toggle navbar__toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa-regular fa-bell fa-beat"></i>
                            </a>
                            <ul class="dropdown-menu navbar__menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Action</a></li>
                            </ul>
                        </li>
                        <div class="navbar__vl"></div>
                        <li class="nav-link pt-2 navbar__nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="~@/assets/images/img_1/eclipse.jpg" alt="Logo" width="30" height="30" class="d-inline-block align-text-top">
                        </li>
                        <li class="navbar__nav-item dropdown pt-3 px-1">
                            <a class="nav-link navbar__nav-item--active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" ></a>
                            <ul class="dropdown-menu px-2">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Action</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </form>
        </div>
    </nav>
</template>

<script setup lang="ts">
// import axios from "axios"
// import { ref } from "vue"


// const user = ref(null)

// const res = await axios.get('user')
// console.log(res)

//  user.value = res.data;
</script>

<style lang="scss" scoped>
@import "@/sass/variable.scss";
@import "@/sass/mixin.scss";


.navbar {
    background: var(--solid-white, #FFF);
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.10);
    padding: 1rem 2.5rem;

    margin-bottom: 0;
    border-radius: 0;
     
    &__img {
        width: 50%;
        height: 50%;
    }
    
    &__nav-item {

        &--active {
            color: var(--text-black, #404040);
            font-family: Inter;
            font-size: 1rem;
            font-style: normal;
            font-weight: 400;
            line-height: 1.25rem;
            padding: 0 1rem;
        }
    }

    &__vl {
        border-left: 0.2rem solid #D9D9D9;
        height: 2.8125rem;
        // position: absolute;
        left: 50%;
        margin: 0 3px;
        padding: 0.3rem;
        top: 0;
    }

}





</style>