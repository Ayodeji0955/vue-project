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
        this.getToken()
        const data = await axios.get('/users/current-user');
        this.authUser = data.data
    }
  },
})
