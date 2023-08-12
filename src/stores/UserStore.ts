import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    user: "",
    fullName: "",
    emailAddress: "",
    inputValue: "",
  }),
  getters: {
    
  },
  actions: {
  //  on
  }
})
