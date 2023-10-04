<template>
    <nav class="navbar navbar-expand-lg">
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
                            <a class="nav-link navbar__nav-item--active" aria-current="page" href="#">Learning Hub</a>
                        </li>
                        <li class="navbar__nav-item pt-3 px-2">
                            <a class="nav-link navbar__nav-item--active" href="#">Resources Hub</a>
                        </li>
                        <li class="navbar__nav-item pt-3 px-2">
                            <a class="nav-link navbar__nav-item--active" href="#">Events</a>
                        </li>
                        <li class="navbar__nav-item pt-3 px-2">
                            <a class="nav-link navbar__nav-item--active" aria-current="page" href="#">Services</a>
                        </li>
                        <li class="nav-item dropdown pt-2 px-2">
                            <a class="nav-link dropdown-toggle navbar__toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa-regular fa-bell  navbar__toggle--bell"></i>
                            </a>
                            <ul class="dropdown-menu navbar__menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Action</a></li>
                            </ul>
                        </li>
                        <li class="nav-link pt-4 navbar__nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="../assets/img_1/account.png" alt="Logo" width="30" height="30" class="d-inline-block align-text-top">
                        </li>
                        <li class="navbar__nav-item dropdown pt-2 px-1">
                            <a class="nav-link navbar__nav-item--active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Olivia Clark</a>
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

</script>

<style lang="scss" scoped>
@import "@/sass/variable.scss";
@import "@/sass/mixin.scss";


.navbar {
    background-color: white;
    // padding: 0.5rem 2rem;
     
    &__img {
        width: 50%;
        height: 50%;
    }
    
}





</style>