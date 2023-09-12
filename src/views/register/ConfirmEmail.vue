<template>
    <div class="login">
        <div class="row align-items-center">
        <div class="col-md-6 login__main-col">
            <div class="container py-4">
            <div class="formbg-outer" >
                <div class="formbg">
                <div class="formbg-inner padding-horizontal--48">
                    <div class=" text-center py-5">
                    <img src="~@/assets/images/img_1/favicon.png">
                    </div>
                    <h1 class="padding-bottom--12 text-center">Confirm Email</h1>
                    <span class="padding-bottom--15 text-center">Information link has been sent to your email address email address</span>
                    <form id="stripe-login">
                    <div class=" text-center py-5 mail">
                        <img src="~@/assets/images/img_1/mail.png">
                    </div>
                    <div class="field field-checkbox padding-bottom--24">
                        <a class="ssolink" href="#">Didn't receive the email</a>
                        <p v-if="isLoading">Verifying...</p>
                        <p v-if="error">{{ error }}</p>
                        <p v-if="success">Email verified successfully!</p>
                    </div>
                    <div class="field padding-bottom--24">
                        <input 
                            type="submit" 
                            name="submit" 
                            value="Click to resend"  
                        >
                    </div>
                    </form>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div class="col-md-6 login__sub-col" />
        </div>
    </div>
</template>
  
<script lang="ts">
  import { defineComponent, reactive, onMounted } from 'vue';
//   import { useRouter } from 'vue-router';
  import axios from 'axios';

  interface VerifyEmailResponse {
    success: boolean;
    error?: string;
  }

  
  export default defineComponent({
    name: 'VerificationEmail',
    setup() {
      const state = reactive({
        isLoading: false,
        error: '',
        success: false,
      });

      onMounted(() => {
        verifyEmail();
      });

      async function verifyEmail(): Promise<void> {
        const token = getVerificationTokenFromURL();

        if (token) {
          state.isLoading = true;

          try {
            const response = await axios.post<VerifyEmailResponse>(
              '/api/verify-email',
              { token }
            );

            if (response.data.success) {
              state.success = true;
            } else {
              state.error = response.data.error || 'Verification failed.';
            }
          } catch (error) {
            state.error = 'An error occurred during verification.';
            console.error('Verification error:', error);
          }

          state.isLoading = false;
        } else {
          state.error = 'Invalid verification token.';
        }
      }

      function getVerificationTokenFromURL(): string | null {
        const urlSearchParams = new URLSearchParams(window.location.search);
        return urlSearchParams.get('token');
      }

      return {
        ...state,
      };
    },
  });


</script>
  
<style lang="scss">
.login {
&__sub-col {
    background-image: url('@/assets/images/img_1/wrk.png');
    background-position:center;
    background-size:cover;

    height: 100vh;
}
}
.mail img {
    width: 65px;
    height: 65px;
    text-align: center;
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
</style>
  