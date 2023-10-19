<template>
    <div class="courses">
        <div class="container">
            <div class="row justify-content-center courses__main ">
                <div class="col-md-4 courses__sub-col">
                    <div class="card h-100" style="width: 18rem;">
                        <img src="~@/assets/images/card/frame_1.png" alt="Logo" class="navbar__img">
                    <div class="card-body">
                        <h5 class="card-title">Understanding your target customers</h5>
                        <p class="card-text">Venture Nation</p>
                        <div class="row">
                            <div class="progress col-md-10" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar text-bg-warning" style="width: 45%">75%</div>
                            </div>
                            <div class="col-md-6">
                                <p>Your progress</p>
                            </div>
                            <div class="col-md-6">
                                <p>37%</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-md-4 courses__sub-col">
                    <div class="card h-100" style="width: 18rem;">
                        <img src="~@/assets/images/card/frame_2.png" alt="Logo" class="navbar__img">
                    <div class="card-body">
                        <h5 class="card-title">Understanding your target customers</h5>
                        <p class="card-text">Venture Nation</p>
                        <div class="row">
                            <div class="progress col-md-10" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar text-bg-warning" style="width: 50%">75%</div>
                            </div>
                            <div class="col-md-6">
                                <p>Your progress</p>
                            </div>
                            <div class="col-md-6">
                                <p>37%</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-md-3 courses__sub-col">
                    <div class="card h-100" style="width: 18rem;">
                        <img src="~@/assets/images/card/frame_3.png" alt="Logo" class="navbar__img">
                    <div class="card-body">
                        <h5 class="card-title">Understanding your target customers</h5>
                        <p class="card-text">Venture Nation</p>
                        <div class="row">
                            <div class="progress col-md-10" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar text-bg-warning" style="width: 25%">75%</div>
                            </div>
                            <div class="col-md-6">
                                <p>Your progress</p>
                            </div>
                            <div class="col-md-6">
                                <p>37%</p>
                            </div>
                        </div>
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


.courses {

    &__main {
        background-color: blue;
        padding: 4rem .5rem;
    }

    &__sub-col {
         padding: 0.8125rem 1.5625rem 1.375rem 1.125rem;
        box-shadow: 0px 0px 50px -5px rgba(0, 0, 0, 0.06);
    }
}

</style>
  