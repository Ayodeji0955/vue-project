<template>
    <div class="dashboard">
        <DashNav />
    </div>
</template>

<script setup lang="ts">
import DashNav from '../dashboard/DashNav.vue'
import { onMounted } from "vue"
import axios from "axios"

// const user = ref();

onMounted(async () => {
  const data = await axios.get('/users/current-user');
  console.log(data);

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