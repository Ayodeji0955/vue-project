import router from '@/router';
import axios from 'axios';
import { defineStore } from 'pinia'


export const useAuthStore = defineStore( "authStore", {
  state: () => ({
    authUser: null,
  }),
  getters: {
    user: (state) => state.authUser,
  },
  actions: {
    async getToken() {
        await axios.get('/sanctum/csrf-cookie')
    },
    async getUser() {
      await this.getToken()
        const data = await axios.get('/users/current-user');
        this.authUser = data.data
    },
    async onSubmit(data: { email: any; password: any; }) {
      await this.getToken();
      await axios.post('/auth/login', {
        email: data.email,
        password: data.password
      })
      router.push('/dashboard')
    }
  },
})


