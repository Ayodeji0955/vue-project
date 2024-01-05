<template>
    <div class="right-nav">
        <div class="container right-nav__container">
            <h1 class="right-nav__container--header">Invitations</h1>
            <div class="row right-nav__row">
                <div class="col-md-3 right-nav__col">
                    <img src="~@/assets/images/dashboard/frame.png" alt="Logo" class="right-nav__col--img">
                </div>
                <div class="col-md-7 right-nav__main-col">
                    <h1 class="right-nav__main-col--header-txt">Bran Adam is inviting you to be part of Venture name</h1>
                    <p class="right-nav__main-col--txt">Today at 12:15 PM</p>
                    <div class="row right-nav__sub-row">
                        <div class="col right-nav__sub-col">
                            <button>Decline</button>
                        </div>
                        <div class="col right-nav__sub-col">
                            <button>Accept</button>
                        </div>
                    </div>
                </div>
            </div>
            <Hr></Hr>
            <div class="row right-nav__row">
                <div class="col-md-3 right-nav__col">
                    <img src="~@/assets/images/dashboard/frame.png" alt="Logo" class="right-nav__col--img">
                </div>
                <div class="col-md-7 right-nav__main-col">
                    <h1 class="right-nav__main-col--header-txt">Bran Adam is inviting you to be part of Venture name</h1>
                    <p class="right-nav__main-col--txt">Today at 12:15 PM</p>
                    <div class="row right-nav__sub-row">
                        <div class="col right-nav__sub-col">
                            <button>Decline</button>
                        </div>
                        <div class="col right-nav__sub-col">
                            <button>Accept</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="ventures">
        <div class="">
            <h1>Tolu</h1>
        </div>
    </div>
</template>

<script setup lang="ts">


</script>

<style lang="scss" scoped>
@import "@/sass/variable.scss";
@import "@/sass/mixin.scss";


.right-nav {
    background-color: red;
    padding-bottom: 2rem 0;

    &__container {
        padding: 2rem 0;

        &--header {
            color: var(--text-black, #404040);
            font-family: Inter;
            font-size: 1.125rem;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
        }
    }


    &__col {

        &--img {
            width: 3.125rem;
        }
    }

    &__main-col {

        &--header-txt {
            color: #000;
            font-family: Inter;
            font-size: 0.875rem;
            font-style: normal;
            font-weight: 400;
            line-height: 1.25rem;
        }
    }

}
.ventures {
    background-color: red;
    margin-top: 2rem;
}
</style>