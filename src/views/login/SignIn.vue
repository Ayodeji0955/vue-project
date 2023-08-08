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
                <form id="stripe-login">
                  <div class="field padding-bottom--24">
                    <label for="email">Email</label>
                    <input type="email" name="email">
                  </div>
                  <div class="field padding-bottom--24">
                    <div class="grid--50-50">
                      <label for="password">Password</label>
                    </div>
                    <div class="">
                      <!-- <input 
                        type="password" 
                        name="password"
                        placeholder="Enter password"
                        :password="password"
                      >
                      <span v-if="score === 0">Use better password</span>
                      <password-meter                       
                        @score="onScore" 
                        :password="password" 
                      /> -->

                      <input
                        name="passwordInput"
                        type="password"
                        placeholder="Enter password"
                        v-model="inputValue"
                        @keyup="checkInputStrength"
                      />

                      <!-- <div class="np-password-hint">
                        <small>
                          Password should be at least 8 characters long and contain a number and a
                          symbol.
                        </small>
                      </div> -->
                      <div class="row justify-content-between">
                        <div class="col-md-8">
                          <h2 class="password-text">Password strength:</h2>
                        </div>
                        <div class="col-md-4 text-center">
                          <h2 class="password-text">Weak</h2>
                        </div>
                      </div>
                      <!-- <h4>Password strength</h4> -->
                      <div class="np-password-strength-indicator-container">
                        <div
                          class="np-password-strength-indicator"
                          :style="{
                            backgroundColor: getIndicatorBackgroundColor(),
                            width: getIndicatorWidth() + '%',
                          }"
                        ></div>
                         <div class="np-password-hint">
                            <small>
                              Password should be at least 8 characters long and contain a number and a
                              symbol.
                            </small>
                          </div>
                      </div>

                      <!-- @click="toggleShow"><span class="icon is-small is-right">
                      <i class="fas" :class="{ 'fa-eye-slash': showPassword, 'fa-eye': !showPassword }"></i>
                    </span>
                      <i -->
                      <!-- <span class="icon is-small is-right">
                        <i class="showPassword ? 'fa-regular fa-eye' : 'fa-regular fa-eye-slash'" @click="toggleShow" />
                      </span> -->
                    </div>
                  </div>
                  <div class="field field-checkbox padding-bottom--24 flex-flex align-center">
                    <a class="ssolink" href="#">Forgot password?</a>
                  </div>
                  <div class="field padding-bottom--24">
                    <input type="submit" name="submit" value="Sign in">
                  </div>
                  <div class="field">
                    <a class="ssolink" href="#">
                      Don’t have an account?
                      <nuxt-link to="/Register/SignUp">
                        Sign up
                      </nuxt-link>
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
import { ref } from "vue";
// import PasswordMeter from "vue-simple-password-meter";

//     const password = ref("");
//     const score = ref(null);

//     const onScore = (payload: { score: null; strength: any; }) => {
//       console.log(payload.score); // from 0 to 4
//       console.log(payload.strength); // one of : 'risky', 'guessable', 'weak', 'safe' , 'secure'
//       score.value = payload.score;

//       return {
//         password,
//         onScore,
//         score,
//       };
//     };


const inputStrength = ref(0)
  const inputValue = ref('')

  const inputContainsSpecialCharacters = () => {
      const specialCharacters = /[`!@#$%^&*()_+\-=\\|,.<>?~]/
      return specialCharacters.test(inputValue.value)
  }

  const inputContainsNumbers = () => {
      const numbers = /\d/
      return numbers.test(inputValue.value)
  }
  const checkInputStrength = () => {
      inputStrength.value = 0

      const inputStrengthLengthCheck = inputValue.value && inputValue.value.length >= 8
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

  const getIndicatorBackgroundColor = () => {
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

  // const getIndicatorWidth = () => {
  //   return parseInt((inputStrength.value / 3) * 100).toString()
  // }

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
// .login-root {
//   background: #fff;
//   display: flex;
//   width: 100%;
//   min-height: 100vh;
//   overflow: hidden;
// }

.flex-flex {
  display: flex;
}
.align-center {
  align-items: center;
}
// .center-center {
// align-items: center;
// justify-content: center;
// }
// .box-root {
//   box-sizing: border-box;
// }
// .flex-direction--column {
//   -ms-flex-direction: column;
//   flex-direction: column;
// }
// .loginbackground-gridContainer {
//   display: -ms-grid;
//   display: grid;
//   -ms-grid-columns: [start] 1fr [left-gutter] (86.6px) [left-gutter] 1fr [end];
//   grid-template-columns: [start] 1fr [left-gutter] repeat(16,86.6px) [left-gutter] 1fr [end];
//   -ms-grid-rows: [top] 1fr [top-gutter] (64px) [bottom-gutter] 1fr [bottom];
//   grid-template-rows: [top] 1fr [top-gutter] repeat(8,64px) [bottom-gutter] 1fr [bottom];
//   justify-content: center;
//   margin: 0 -2%;
//   transform: rotate(-12deg) skew(-12deg);
// }

// .padding-top--64 {
// padding-top: 4rem;
// }
// .padding-top--24 {
// padding-top: 1.5rem;
// }
// .padding-top--48 {
// padding-top: 3rem;
// }
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
// .reset-pass a,label {
//   font-size: 14px;
//   font-weight: 600;
//   display: block;
// }
// .reset-pass > a {
//   text-align: right;
//   margin-bottom: 10px;
// }
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
// .footer-link span {
//   font-size: 14px;
//   text-align: center;
// }
// .listing a {
//   color: #697386;
//   font-weight: 600;
//   margin: 0 10px;
// }

.po-password-strength-bar {
    border-radius: 2px;
    transition: all 0.2s linear;
    height: 5px;
    margin-top: 8px;
}

.po-password-strength-bar.risky {
    background-color: #f95e68;
    width: 10%;
}

.po-password-strength-bar.guessable {
    background-color: #fb964d;
    width: 32.5%;
}

.po-password-strength-bar.weak {
    background-color: #fdd244;
    width: 55%;
}

.po-password-strength-bar.safe {
    background-color: #b0dc53;
    width: 77.5%;
}

.po-password-strength-bar.secure {
    background-color: #35cc62;
    width: 100%;
}


///

input {
  font-size: 16px;
  padding: 4px;
  border: 1px solid rgb(34, 34, 34);
  outline: none;
}
.np-password-strength-indicator-container {
  width: 400px;
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
.np-password-hint {
  margin-top: 10px;
  max-width: 300px;
}

.password-text {
  padding: 1rem 0;
  font-size: 14px;
}
</style>
  