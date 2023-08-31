// import axios from 'axios';
// import { defineStore } from 'pinia'


// export const useAuthStore = defineStore( "authStore", {
//   state: () => ({
//     emailAddress: "",
//     fullName: '',
//     passwordInput: "",
//   }),
//   getters: {
    
//   },
//   actions: {
//     async submitForm() {
//       try {
//         const response = await axios.post('auth/register', {
//           emailAddress: this.emailAddress,
//           fullName: this.fullName,
//           passwordInput: this.passwordInput,
//         });

//         console.log('Response:', response.data);
//         // Perform any necessary actions after a successful response

//       } catch (error) {
//         console.error('Error:', error);
//         // Perform any necessary error handling
//       }
//     },
//   },
// })
