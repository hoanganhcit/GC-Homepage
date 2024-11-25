<template>
    <div class="fullscreen bg-white login-Page q-pa-md flex flex-start">
        <div class="loginPage-content">
            <div class="lg-head mb-30">
                <div class="title-lg">Gerry Health Labs</div>
                <img src="~assets/fav.png" alt="">
                <div class="sm-title">Gerry Health Labs gives you access to the applications and services that help you care for your older adult </div>
            </div>
            <div class="loginForm">
                <div class="title-lg">Service Partner Login</div>

            <div class="q-gutter-y-sm">
                <q-tab-panels
                    v-model="tab"
                    class="mt-16"
                >
                    <q-tab-panel name="login">
                        <q-form
                            @submit="onSubmit"
                            @reset="resetForm"
                            class="q-gutter-md"
                            ref="loginForm"
                            >
                            <q-input
                                outlined
                                v-model="email"
                                type="email"
                                label="Email"
                                lazy-rules
                                :rules="[val => !!val || 'Email is required', val => /.+@.+\..+/.test(val) || 'Email must be valid']"
                            >
                                <template v-slot:prepend>
                                    <q-icon color="primary" name="fal fa-envelope" />
                                </template>
                            </q-input>

                            <q-input
                                outlined
                                type="password"
                                v-model="password"
                                label="Password"
                                lazy-rules
                                :rules="[val => !!val || 'Password is required', val => val.length >= 6 || 'Password must be at least 6 characters']"
                            >
                                <template v-slot:prepend>
                                    <q-icon color="primary" name="fal fa-lock" />
                                </template>
                            </q-input>
                            <div class="flex justify-between mt-0 align-center">
                                <q-card-section class="no-padding">
                                    <q-checkbox
                                        v-model="rememberMe"
                                        color="primary"
                                        label="Remember me"
                                    />
                                </q-card-section>
                                <q-card-section class="no-padding">
                                    <a href="#" class="text-primary fs-14">Forgot Password?</a>
                                </q-card-section>
                            </div>
                            <div class="mx-6">
                                <q-card-section class="no-padding flex align-center">
                                    <div>Quick Login: </div>
                                    <div class="login-social">
                                        <q-btn round color="indigo-7">
                                            <q-icon name="fab fa-facebook-f" size="1.2rem" />
                                        </q-btn>
                                        <q-btn round color="red-8">
                                            <q-icon name="fab fa-google-plus-g" size="1.2rem" />
                                        </q-btn>
                                        <q-btn round color="light-blue-5">
                                            <q-icon name="fab fa-apple" size="1.2rem" />
                                        </q-btn>
                                    </div>
                                </q-card-section>
                            </div>
                            <div class="group-btn flex align-center justify-between mt-70">
                                <q-btn label="Cancel" type="reset" color="grey-3" class="text-black" />
                                <q-btn label="Login" type="submit" color="primary" class="q-ml-sm" />
                            </div>
                        </q-form>

                    </q-tab-panel>
                </q-tab-panels>
            </div>
        </div>
        <div class="footer mt-50">
            <div class="i-gh">
                <div class="t-f">Gerry Health Labs</div>
                <q-icon name="fab fa-github"></q-icon>
                <div class="t-c">Toronto MicroElectronics Inc.</div>
            </div>
            <div class="copyright">Copyright ©2024 Toronto MicroElectronics Inc.</div>
            </div>
        </div>
  </div>
</template>
<script>
import { ref } from 'vue'

export default {
  data () {
    return {
      tab: ref('login'),
      rememberMe: ref(false),
      email: ref(null),
      password: ref(null)
    }
  },
  methods: {
    onSubmit () {
      this.$refs.loginForm.validate().then((valid) => {
        if (valid) {
          this.$router.push('/company-information')
        } else {
          alert('Please correct the errors before submitting.')
        }
      })
    },
    resetForm () {
      this.email = ''
      this.password = ''
      this.$refs.loginForm.resetValidation()
    },
    emailValidation (email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return regex.test(email)
    }
  }
}
</script>
