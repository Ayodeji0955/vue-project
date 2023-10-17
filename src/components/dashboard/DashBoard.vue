<template>
    <div class="dashboard">
        <DashNav />
        <div class="dashboard__mid-side pt-4">
            <SideBar />
        </div>
        <!-- <div v-if="authStore.user">
            <h1>{{ authStore }}</h1>
            <h2> {{ authStore}}</h2>
        </div> -->
    </div>
</template>

<script setup lang="ts">
import DashNav from '../dashboard/DashNav.vue'
import SideBar from '../dashboard/SideBar.vue'
// import { ref } from "vue"
// import { onMounted } from "vue"
// import { useAuthStore } from "@/stores/auth"


// const authStore = useAuthStore()

// const form = ref({
//   email: '', 
//   password: ''
// })

// onMounted(async () => {
//     await authStore.getUser()
// })

</script>

<style lang="scss" scoped>
@import "@/sass/variable.scss";
@import "@/sass/mixin.scss";



.dashboard {
    background-color: #FBFAFF;
    height: 100vh;

    &--mid-side {
        background-color: green;
        padding-top: 4rem 0;
    }
    
}
</style>