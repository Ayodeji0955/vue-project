<template>
  <div class="login">
    <div class="row align-items-center">
      <div class="col-md-6 login__main-col">
        <div class="container py-4">
          <div class="formbg-outer">
            <div class="formbg">
              <div class="formbg-inner padding-horizontal--48">
                <div class=" text-center py-4">
                  <img src="~@/assets/images/img_1/favicon.png">
                </div>
                <h1 class="padding-bottom--12 text-center">
                  Welcome Back!
                </h1>
                <span class="padding-bottom--15 text-center">Kindly input your details to access your account. </span>
                <form id="stripe-login" @submit.prevent="onSubmit">
                  <div class="field padding-bottom--24">
                    <label 
                      for="email"
                    >
                      Email
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      v-model="email"
                    >
                  </div>
                  <div class="field padding-bottom--24">
                    <div class="grid--50-50">
                      <label for="password">Password</label>
                    </div>
                    <div class="">
                      <input 
                        type="password" 
                        name="password"
                        placeholder="Enter password"
                        v-model="password"
                      >
                    </div>
                  </div>
                  <div class="field field-checkbox padding-bottom--24 flex-flex align-center">
                    <a class="ssolink" href="#">
                      <router-link to="/ForgotPassword">
                        Forgot password?
                      </router-link>
                    </a>
                  </div>
                  <div class="field padding-bottom--24">
                    <input type="submit" name="submit" value="Sign in">
                  </div>
                  <div class="field">
                    <a class="ssolink" href="#">
                      Don’t have an account?
                      <router-link to="/SignUp">
                        Sign up
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
// import { useRouter } from "vue-router"


// const router = useRouter()


const email = ref("")
const password = ref("")

const onSubmit = async () => {
  const res = await axios.post('login', {
    email: email.value,
    password: password.value,
  })
    console.log(res);
}

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
  padding-bottom: 1.5rem
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

</style>
  