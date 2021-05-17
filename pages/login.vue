<template>
  <v-container :fluid="false">
    <img src="~/assets/img/mlogo.png" class="text-center" height="70" />
    <v-row>
      <v-col xs="12" sm="12" md="6" class="sm-d-none">
        <img src="~/assets/img/image 3 1.png" class="text-center" style="height: 80%;width:140%" />
      </v-col>
      <v-col xs="12" sm="12" md="6">
        <v-card
          class="card-border pa-10 subtitle-1"
          style="box-shadow: 40px 40px 100px rgba(52, 73, 94, 0.27)"
        >
          <h4 class="text-center">
            Welcome back! Please log-in to <br />
            your account
          </h4>
          <ValidationObserver ref="form" v-slot="{ invalid }">
            <v-row class="mt-10">
              <v-col xs="12" sm="12" md="12">
                <h4 class="subtitle-1 mb-2 font-weight-regular">
                  User Name <span style="color: #32B8BB;">*</span>
                </h4>
                <ValidationProvider
                  vid="user_name"
                  name="User name"
                  rules="required"
                  v-slot="{ errors }"
                >
                  <v-text-field
                    dense
                    class="inner-filed-border-none"
                    v-model="user_name"
                    placeholder="User Name Or Email"
                    filled
                    :error="!!errors[0]"
                    :error-messages="errors[0]"
                    hide-details="auto"
                  ></v-text-field>
                </ValidationProvider>
              </v-col>
              <v-col xs="12" sm="12" md="12">
                <h4 class="subtitle-1 mb-2 font-weight-regular">
                  Password <span style="color: #32B8BB;">*</span>
                </h4>
                <ValidationProvider
                  vid="password"
                  name="Password"
                  rules="required"
                  v-slot="{ errors }"
                >
                  <v-text-field
                    dense
                    class="inner-filed-border-none"
                    v-model="password"
                    placeholder="Password"
                    filled
                    :error="!!errors[0]"
                    :error-messages="errors[0]"
                    hide-details="auto"
                  ></v-text-field>
                </ValidationProvider>
              </v-col>
              <v-col xs="12" sm="12" md="12" class="pt-0">
                <div class="d-flex align-center justify-space-between">
                  <v-checkbox
                    v-model="remember_me"
                    :label="`Remember me `"
                  ></v-checkbox>
                  <nuxt-link to="/reset-password">Forget Password</nuxt-link>
                </div>
              </v-col>
              <v-col xs="12" sm="12" md="12" class="pt-0 text-center">
                <v-btn :disabled="invalid" color="primary" min-width="250" min-height="45"> SIGN IN </v-btn>
              </v-col>
              <v-col xs="12" sm="12" md="12" class="pt-0 text-center">
                <v-divider class="my-3"></v-divider>
                <h4 class="subtitle-1 primary--text font-weight-medium">New user to Devute? <nuxt-link style="color: #32B8BB;" to="/sing-up">Sign Up</nuxt-link> Now</h4>
              </v-col>
            </v-row>
          </ValidationObserver>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { extend, ValidationObserver, ValidationProvider } from 'vee-validate'
import { email, required } from 'vee-validate/dist/rules'

extend('email', email)
extend('required', required)
export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  head() {
    return {
      title: 'Login',
    }
  },
  layout: 'normal',
  data() {
    return {
      user_name: null,
      password: null,
      remember_me: false,
    }
  },
}
</script>