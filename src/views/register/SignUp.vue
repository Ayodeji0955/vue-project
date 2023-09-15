<template>
    <div class="login">
      <div class="row align-items-center">
        <div class="col-md-6 login__main-col">
          <div class="container py-4">
            <div class="formbg-outer">
              <div class="container">
              </div>
              <div v-if="error !== ''">
                <p>Error: {{ error }}</p>
              </div>
              <div class="formbg" @submit.prevent="onSubmit">
                <div class="formbg-inner padding-horizontal--48">
                  <div class=" text-center py-4">
                    <img src="~@/assets/images/img_1/favicon.png">
                  </div>
                  <h1 class="padding-bottom--12 text-center">
                    Welcome Back!
                  </h1>
                  <span class="padding-bottom--15 text-center">Kindly input your details to access your account. </span>
                  <form id="stripe-login">
                    <div class="field padding-bottom--24">
                      <label for="email">Full name</label>
                      <input 
                        type="name" 
                        name="fullnameInput"
                        placeholder="Full name"
                        v-model="name"
                      />
                    </div>
                    <div class="field padding-bottom--24">
                      <label for="email">Email</label>
                      <input 
                        type="emailInput" 
                        name="email"
                        placeholder="Enter your email address"
                        v-model="email"
                      />
                    </div>
                    <div class="field padding-bottom--24">
                      <div class="grid--50-50">
                        <label for="password">Password</label>
                      </div>
                      <div class="">
                        <input
                          name="passwordInput"
                          type="password"
                          placeholder="Enter password"
                          v-model="password"
                          @keyup="checkInputStrength"
                        />
                        <div class="row justify-content-between">
                          <div class="col-md-8">
                            <h2 class="password-text">Password strength:</h2>
                          </div>
                          <div class="col-md-4 text-center">
                            <h2 class="password-text">Weak</h2>
                          </div>
                        </div>
                        <div class="np-password-strength-indicator-container">
                          <div
                            class="np-password-strength-indicator"
                            :style="{
                              backgroundColor: getBackgroundIndicatorColor(),
                              width: getIndicatorWidth() + '%',
                            }"
                          >
                        </div>
                    </div>
                        <div class="np-password-hint">
                            <span class="">Strong password must contain at least 8 characters, </span>
                            <span class="">digits, upper case and symbols.</span>
                        </div>
                    </div>
                    </div>
                    <div class="field padding-bottom--24 pt-3">
                      <input 
                        type="submit" 
                        name="submit" 
                        value="Continue"
                      >
                    </div>
                    <div class="field">
                      <a class="ssolink" href="#">
                        Don’t have an account?
                        <router-link to="/signin">
                          Log in
                        </router-link>
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 login__sub-col">
          <!-- <img src="~@/assets/images/img_1/wrk.png" class="login__sub-col--imgs"> -->
        </div>
      </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from "vue"
import axios from "axios"
import { useRouter } from "vue-router"
import { createToast } from 'mosha-vue-toastify'
import "mosha-vue-toastify/dist/style.css"
  
  const error = ref('')
  const email = ref('')
  const name = ref('')
  const password = ref('')
  const router = useRouter()
  const toast = createToast("")

  const onSubmit = async () => {
    try {
        const response = await axios.post('auth/register', {
          email: email.value,
          name: name.value,
          password: password.value,
        });

        console.log('Response:', response.data)
        router.push('/confirm-email') // Use router.push to navigate
      } catch (error) {
            console.error('Error:', error)
        // if (error.response && error.response.status === 400) {
        //     toast.error('Invalid request. Please check your inputs.');
        //   } else {
        //     toast.error('Failed to sign up. Please try again.');
        // }
      }
    // Simulating an error during signup
    // error.value = 'Failed to sign up. Please try again.';
    
    return {
      error,
      email,
      name,
      password,
      onSubmit,
      toast
    };
 };

// const clearError = () => {
//   error.value = '';

//   return {
//     clearError
//   }
// };




const inputStrength = ref(0)

  
const inputContainsSpecialCharacters = () => {
    const specialCharacters = /[`!@#$%^&*()_+\-=\\|,.<>?~]/
    return specialCharacters.test(password.value)
}

const inputContainsNumbers = () => {
    const numbers = /\d/
    return numbers.test(password.value)
}
const checkInputStrength = () => {
    inputStrength.value = 0

    const inputStrengthLengthCheck = password.value && password.value.length >= 8
    const inputContainsSpecialChars = inputContainsSpecialCharacters()
    const inputContainsNum = inputContainsNumbers()

    if (inputStrengthLengthCheck) {
        inputStrength.value++
    }
    if (inputContainsSpecialChars) {
        inputStrength.value++
    }
    if (inputContainsNum) {
        inputStrength.value++
    }
}

const getBackgroundIndicatorColor = () => {
    let color = "gray"
    switch (inputStrength.value) {
        case 0:
        case 1:
        color = "red";
        break;
        case 2:
        color = "orange";
        break;
        case 3:
        color = "green";
        break;
        default:
        color = "gray";
    }

    return color
}

const getIndicatorWidth = () => {
  return ((inputStrength.value / 3) * 100).toString();
};
  
</script>
    
<style lang="scss" scoped>
@import "@/sass/variable.scss";
@import "@/sass/mixin.scss";


.login {

&__sub-col {
    background-image: url("@/assets/images/img_1/wrk.png");
    background-position: center;
    background-size:cover;
    height: 100vh;
}

}

* {
    padding: 0;
    margin: 0;
    color: #1a1f36;
    box-sizing: border-box;
    word-wrap: break-word;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Ubuntu,sans-serif;
}
body {
    min-height: 100%;
    background-color: #ffffff;
    margin: 0;
}
    h1 {
    letter-spacing: -1px;
}
a {
    color: #5A27D5;
    text-decoration: unset;
}

.flex-flex {
    display: flex;
}
.align-center {
    align-items: center;
}

.padding-bottom--24 {
    padding-bottom: 1.5rem;
}
.padding-horizontal--48 {
    padding: 1.5rem;
}
.padding-bottom--15 {
    padding-bottom: 2rem;
    color: #404040;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
}
.padding-bottom--12 {
    padding-bottom: 0.75rem;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 20px;
    color: #404040;
}

.formbg {
    margin: 0px auto;
    width: 100%;
    max-width: 448px;
    background: white;
    border-radius: 4px;
}
span {
    display: block;
    font-size: 20px;
    line-height: 28px;
    color: #1a1f36;
}
label {
    margin-bottom: 10px;
}

.grid--50-50 {
    display: grid;
    grid-template-columns: 50% 50%;
    align-items: center;
}

.field input {
    font-size: 16px;
    line-height: 28px;
    padding: 8px 16px;
    width: 100%;
    min-height: 44px;
    border: unset;
    border-radius: 4px;
    outline-color: rgb(84 105 212 / 0.5);
    background-color: linear-gradient(90.73deg, #5A27D5 0%, #5F27D3 32.36%, #AE2EC4 100%);
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
                rgba(0, 0, 0, 0) 0px 0px 0px 0px,
                rgba(0, 0, 0, 0) 0px 0px 0px 0px,
                rgba(60, 66, 87, 0.16) 0px 0px 0px 1px,
                rgba(0, 0, 0, 0) 0px 0px 0px 0px,
                rgba(0, 0, 0, 0) 0px 0px 0px 0px,
                rgba(0, 0, 0, 0) 0px 0px 0px 0px;
}

input[type="submit"] {
    background: linear-gradient(90.73deg, #5A27D5 0%, #5F27D3 32.36%, #AE2EC4 100%);
    color: #fff;
    font-weight: 600;
    cursor: pointer;
}
.field-checkbox input {
    width: 20px;
    height: 15px;
    margin-right: 5px;
    box-shadow: unset;
    min-height: unset;
}
.field-checkbox label {
    display: flex;
    align-items: center;
    margin: 0;
}
a.ssolink {
    display: block;
    text-align: center;
    font-weight: 600;
}

input {
    font-size: 16px;
    padding: 4px;
    border: 1px solid rgb(34, 34, 34);
    outline: none;
}
.np-password-strength-indicator-container {
    // width: 400px;
    height: 10px;
    background: #eee;
    border-radius: 6px;
}
.np-password-strength-indicator {
    width: 300px;
    height: 10px;
    background: #eee;
    border-radius: 6px;
    width: 33%;
    transition: all 0.3s;
}
.np-password-hint span {
    display: block;
    padding-top: 0.5rem;
    font-size: 14px;
    line-height: 0.5rem;
}
.password-text {
  padding: 1rem 0;
  font-size: 14px;
}

//// boostrap alert


#pageMessages {
  position: fixed;
  bottom: 15px;
  right: 15px;
  width: 30%;
}

.alert {
  position: relative;
}

.alert .close {
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 1em;
}

.alert .fa {
  margin-right:.3em;
}
</style>
 