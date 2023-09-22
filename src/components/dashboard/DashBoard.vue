<template>
    <div class="dashboard">
        <DashNav />
        <div v-if="authStore.user">
            <h1>{{ authStore.user.name }}</h1>
            <h2> {{ authStore.user.email }}</h2>
        </div>
        <div v-else>
            <h1>Go and Log In</h1>
        </div>
    </div>
</template>

<script setup lang="ts">
import DashNav from '../dashboard/DashNav.vue'
import { onMounted } from "vue"
import { useAuthStore } from "@/stores/auth"


const authStore = useAuthStore()


onMounted(async () => {
    await authStore.getUser()

})

</script>

<style lang="scss" scoped>
@import "@/sass/variable.scss";
@import "@/sass/mixin.scss";



.dashboard {
    background-color: red;
    height: 100vh;
    
}
</style>