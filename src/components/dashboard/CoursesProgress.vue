<template>
    <div class="courses">
        <div class="container courses__container">
            <div class="row justify-content-between">
                <div class="col-md-8 courses__main-col">
                    <h1 class="text-right courses__main-col--header-txt">Courses in progress</h1>
                </div>
                <div class="col-md-2 courses__main-col">
                    <div class="pagination courses__main-col--pagination">
                      <a href="#" class="next courses__main-col--next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">❮</a>
                      <a href="#" class="prev courses__main-col--prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">❯</a>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center courses__main">
                <div class="col-md-12">
                </div>
                <div class="col-md-3 courses__sub-col">
                    <div class="card courses__card">
                        <img src="~@/assets/images/card/frame_1.png" alt="Logo" class="navbar__img">
                        <div class="card-body">
                            <h5 class="card-title courses__card--card-title">Understanding your target customers</h5>
                            <p class="card-text courses__card--card-txt">Venture Nation</p>
                            <div class="row">
                                <div class="progress col-md-10 courses__progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar text-bg-warning courses__progress--bg" style="width: 45%">75%</div>
                                </div>
                                <div class="col-md-6">
                                    <p class="courses__col--main-txt">Your progress</p>
                                </div>
                                <div class="col-md-6 courses__col">
                                    <p class="courses__col--txt">37%</p>
                                    <p class="courses__col--sub-txt">Rate this course</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 courses__sub-col">
                    <div class="card courses__card">
                        <img src="~@/assets/images/card/frame_2.png" alt="Logo" class="navbar__img">
                        <div class="card-body">
                            <h5 class="card-title courses__card--card-title">Understanding your target customers</h5>
                            <p class="card-text courses__card--card-txt">Venture Nation</p>
                            <div class="progress col-md-10 courses__progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar text-bg-warning courses__progress--bg" style="width: 50%">75%</div>
                            </div>
                            <div class="row justify-content-between">
                                <div class="col-md-6">
                                    <p class="courses__col--main-txt">Your progress</p>
                                </div>
                                <div class="col-md-6 courses__col">
                                    <p class="courses__col--txt">37%</p>
                                    <p class="courses__col--sub-txt">Rate this course</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 courses__sub-col">
                    <div class="card courses__card">
                        <img src="~@/assets/images/card/frame_3.png" alt="Logo" class="navbar__img">
                        <div class="card-body">
                            <h5 class="card-title courses__card--card-title">Understanding your target customers</h5>
                            <p class="card-text courses__card--card-txt">Venture Nation</p>
                            <div class="row">
                                <div class="progress col-md-12 courses__progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar text-bg-warning courses__progress--bg" style="width: 25%">75%</div>
                                </div>
                                <div class="col-md-6">
                                    <p class="courses__col--main-txt">Your progress</p>
                                </div>
                                <div class="col-md-6 courses__col">
                                    <p class="courses__col--txt">37%</p>
                                    <p class="courses__col--sub-txt">Rate this course</p>
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

    &__container {
        padding: 4rem 0rem;
        background: var(--solid-white, #FFF);
        box-shadow: 0px 0px 50px -5px rgba(0, 0, 0, 0.06);
        text-align: center;

    }


    &__main-col {

        &--header-txt {
            text-align: left;
            padding-left: 4rem;
        }

        &--pagination {
            text-align: left;
        }

    }

    &__sub-col {
        width: 30%;
        padding: 0.8125rem 1.5625rem 1.375rem 1.125rem;
    }
    
    &__card {
        padding: 0.2rem 0.2rem;
        border-radius: 0.3125rem;
        background: #FFF;
        box-shadow: 0px 0px 50px -5px rgba(0, 0, 0, 0.06);

        &--card-txt {
            color: var(--text-black-2, #7E848E);
            font-family: Inter;
            font-size: 0.75rem;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
        }

        &--card-title {
            color: var(--text-black, #404040);
            font-family: Inter;
            font-size: 1.125rem;
            font-style: normal;
            font-weight: 600;
            line-height: 1.15881rem; /* 142.627% */
        }
    }

    &__img {
        padding-bottom: 0.5rem;
        border-radius: 0rem;
    }

    &__progress {
        width: 17.10rem;
        height: 0.41069rem;
        // flex-shrink: 0;

        &--bg {
            background: var(--linear-cta-primary, linear-gradient(91deg, #5A27D5 0%, #5F27D3 32.36%, #AD2EC4 100%));
        }
    }

    &__col {

        &--main-txt {
            color: var(--text-black-2, #7E848E);
            font-family: Inter;
            font-size: 0.75rem;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            text-align: left;
            padding-top: 0.5rem;
        }

        &--txt {
            text-align: right;
            color: var(--text-black, #404040);
            font-family: Inter;
            font-size: 0.75rem;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            padding-top: 0.5rem;
        }

        &--sub-txt {
            text-align: right;
            color: var(--primary-regular, #5A27D5);
            font-family: Inter;
            font-size: 0.8125rem;
            font-style: normal;
            font-weight: 600;
            line-height: 1.15881rem; /* 142.627% */
        }
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
        
        &__main-col {

        &--header-txt {
            padding-left: 0rem;
        }

        }
    }
}
</style>
  