<template>
    <div class="dash-nav">
        <nav class="navbar sticky-top bg-body-tertiary">
            <div class="container-fluid">
                <div class=" dash-nav__nav-img">
                    <img src="~@/assets/images/img_1/favicon.png" class="dash-nav__nav-img--img">
                </div>
                <form class="d-flex" role="search">
                    <a class="navbar-brand">Learning hub</a>
                    <a class="navbar-brand">Resources hub</a>
                    <a class="navbar-brand">Events</a>
                    <a class="navbar-brand">Services</a>
                    <img src="~@/assets/images/img_1/eclipse.jpg" class="dash-nav__dropdown--img">
                    <a class="nav-link dropdown-toggle dash-nav__dropdown" data-bs-toggle="dropdown" href="#" role="button">
                        <a class="dropdown-item" href="#">Action</a>
                    </a>
                    <li class="nav-item dropdown">
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                            <li><a class="dropdown-item" href="#">Separated link</a></li>
                        </ul>
                    </li>
                    <!-- <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown link
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li> -->
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


.dash-nav {
    // background-color: blueviolet;
    // padding: 0.5rem 2rem;
    

    &__nav-img {
        &--img {
            width: 2.17119rem; 
            // height: 2.17119rem;
        }
    }

    &__dropdown {
        &--img {
            width: 2.17119rem; 
            height: 2.17119rem;
        }
    }
}

// body {
//   min-height: 100vh;
//   background-color: #ffffff;
//   margin: 0;
// }

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
  position: fixed;
  top: 0;
  width: 100%;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
//   padding: 14px 16px;
  text-decoration: none;
}

// li a:hover:not(.active) {
//   background-color: #111;
// }

.active {
  background-color: #04AA6D;
}

</style>