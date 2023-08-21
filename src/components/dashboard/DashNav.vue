<template>
    <div class="dash-nav">
        <nav class="navbar sticky-top bg-body-tertiary">
            <div class="container-fluid">
                <div class="navbar-brand dash-nav__img">
                    <img src="~@/assets/images/img_1/favicon.png">
                </div>
                <form class="d-flex" role="search">
                    <li>
                        <a class="navbar-brand">Learning hub</a>
                        <a class="navbar-brand">Resources Hub</a>
                        <a class="navbar-brand">Events</a>
                        <a class="navbar-brand">Services</a>
                    </li>
                    <li></li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
                        <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#">Separated link</a></li>
                        </ul>
                    </li>
                </form>
            </div>
        </nav>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
@import "@/sass/variable.scss";
@import "@/sass/mixin.scss";



</style>