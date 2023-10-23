<template>
    <div class="courses">
        <div class="container courses__container">
            <div class="row justify-content-center courses__main">
                <div class="col-md-12">
                    <div class="row justify-content-between px-7">
                        <div class="col-md-6">
                            <h1>Courses in progress</h1>
                        </div>
                        <div class="col-md-2 ">
                            <div class="pagination">
                              <a href="#" class="next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">❮</a>
                              <a href="#" class="prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 courses__sub-col">
                    <div class="card courses__card-body">
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
                                    <p>Rate this course</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 courses__sub-col">
                    <div class="card courses__card-body">
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
                                    <p>Rate this course</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 courses__sub-col">
                    <div class="card courses__card-body">
                        <img src="~@/assets/images/card/frame_3.png" alt="Logo" class="navbar__img">
                        <div class="card-body">
                            <h5 class="card-title">Understanding your target customers</h5>
                            <p class="card-text">Venture Nation</p>
                            <div class="row">
                                <div class="progress col-md-12" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar text-bg-warning" style="width: 25%">75%</div>
                                </div>
                                <div class="col-md-6">
                                    <p>Your progress</p>
                                </div>
                                <div class="col-md-6">
                                    <p>37%</p>
                                    <p>Rate this course</p>
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
    padding: 1rem 1.5rem;

 

    &__main {
        padding: 4rem 0rem;
        background: var(--solid-white, #FFF);
        box-shadow: 0px 0px 50px -5px rgba(0, 0, 0, 0.06);
    }

    &__sub-col {
        padding: 0.8125rem 1.5625rem 1.375rem 1.125rem;
        width: 30%;
    }
    
    &__card-body {
        border-radius: 0.3125rem;
        background: #FFF;
        box-shadow: 0px 0px 42.13974px -4.21397px rgba(0, 0, 0, 0.06);

    }
}


.pagination a {
    background-color: white;
    float: left;
    padding: 12px 20px;
    text-decoration: none;
    transition: background-color .3s;
    border: 1px solid #ddd;
    border-radius: 30px 30px;
    color: black;
    font-weight: bold;
    box-shadow: 0px 3px 10px 2px #0640b41a;
}
.pagination :hover {
    background: var(--linear-cta-primary, linear-gradient(91deg, #5A27D5 0%, #5F27D3 32.36%, #AD2EC4 100%));
    color: white;
}
.pagination .next{
    margin-right: 1.5rem;
}



/* For mobile phones: */
@media only screen and (max-width: 768px) {
  .courses {
        
        &__sub-col {
            padding: 0.8125rem 1.5625rem 1.375rem 1.125rem;
            width: 100%
        }  
    }
}
</style>
  