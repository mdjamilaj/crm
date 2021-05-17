<template>
  <v-container :fluid="false">
    <img src="~/assets/img/mlogo.png" class="text-center" height="70" />
    <v-row>
      <v-col xs="12" sm="12" md="6" class="sm-d-none">
        <img src="~/assets/img/image 3 1.png" class="text-center" />
      </v-col>
      <v-col xs="12" sm="12" md="6">
        <v-card
          class="card-border pa-10 subtitle-1"
          style="box-shadow: 40px 40px 100px rgba(52, 73, 94, 0.27)"
        >
          <h3 class="text-center primary--text">
            CREATE YOUR ACCOUNT
          </h3>
          <ValidationObserver ref="form" v-slot="{ invalid }">
            <v-row class="mt-10">
              <v-col xs="12" sm="6" md="6">
                <h4 class="subtitle-1 font-weight-regular">First Name <span style="color: #32B8BB;">*</span></h4>
                <ValidationProvider
                  vid="first_name"
                  name="First name"
                  rules="required"
                  v-slot="{ errors }"
                >
                  <v-text-field
                    dense
                    v-model="first_name"
                    class="inner-filed-border-none"
                    filled
                    :error="!!errors[0]"
                    :error-messages="errors[0]"
                    hide-details="auto"
                  ></v-text-field>
                </ValidationProvider>
              </v-col>
              <v-col xs="12" sm="6" md="6">
                <h4 class="subtitle-1 font-weight-regular">Last Name <span style="color: #32B8BB;">*</span></h4>
                <ValidationProvider
                  vid="last_name"
                  name="Last name"
                  rules="required"
                  v-slot="{ errors }"
                >
                  <v-text-field
                    dense
                    v-model="last_name"
                    class="inner-filed-border-none"
                    filled
                    :error="!!errors[0]"
                    :error-messages="errors[0]"
                    hide-details="auto"
                  ></v-text-field>
                </ValidationProvider>
              </v-col>
              <v-col xs="12" sm="12" md="12" class="pt-0">
                <h4 class="subtitle-1 mb-2 font-weight-regular">
                  Email <span style="color: #32B8BB;">*</span>
                </h4>
                <ValidationProvider
                  vid="email"
                  name="Email"
                  rules="required|email"
                  v-slot="{ errors }"
                >
                  <v-text-field
                    dense
                    class="inner-filed-border-none"
                    v-model="email"
                    placeholder="Email"
                    filled
                    :error="!!errors[0]"
                    :error-messages="errors[0]"
                    hide-details="auto"
                  ></v-text-field>
                </ValidationProvider>
              </v-col>
              <v-col xs="12" sm="12" md="6" class="pt-0">
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
                    type="password"
                    placeholder="Password"
                    filled
                    :error="!!errors[0]"
                    :error-messages="errors[0]"
                    hide-details="auto"
                  ></v-text-field>
                </ValidationProvider>
              </v-col>
              <v-col xs="12" sm="12" md="6" class="pt-0">
                <h4 class="subtitle-1 mb-2 font-weight-regular">
                 Confirm Password <span style="color: #32B8BB;">*</span>
                </h4>
                <ValidationProvider
                  vid="password"
                  name="Confirm password"
                  rules="required"
                  v-slot="{ errors }"
                >
                  <v-text-field
                    dense
                    class="inner-filed-border-none"
                    v-model="con_password"
                    type="password"
                    placeholder="Confirm password"
                    filled
                    :error="!!errors[0]"
                    :error-messages="errors[0]"
                    hide-details="auto"
                  ></v-text-field>
                </ValidationProvider>
              </v-col>
              <v-col xs="12" sm="12" md="12" class="pt-0">
                <h4 class="subtitle-1 mb-2 font-weight-regular">
                  Company / Organization Name <span style="color: #32B8BB;">*</span>
                </h4>
                <ValidationProvider
                  vid="company_name"
                  name="Company / Organization name"
                  rules="required|email"
                  v-slot="{ errors }"
                >
                  <v-text-field
                    dense
                    class="inner-filed-border-none"
                    v-model="company_name"
                    placeholder="Company / Organization name"
                    filled
                    :error="!!errors[0]"
                    :error-messages="errors[0]"
                    hide-details="auto"
                  ></v-text-field>
                </ValidationProvider>
              </v-col>
              <v-col xs="12" sm="12" md="6" class="pt-0">
                <h4 class="subtitle-1 mb-2 font-weight-regular">
                  Country <span style="color: #32B8BB;">*</span>
                </h4>
                <ValidationProvider
                  vid="country"
                  name="Country"
                  rules="required"
                  v-slot="{ errors }"
                >
                  <v-text-field
                    dense
                    class="inner-filed-border-none"
                    v-model="country"
                    placeholder="Country"
                    filled
                    :error="!!errors[0]"
                    :error-messages="errors[0]"
                    hide-details="auto"
                  ></v-text-field>
                </ValidationProvider>
              </v-col>
              <v-col xs="12" sm="12" md="6" class="pt-0">
                <h4 class="subtitle-1 mb-2 font-weight-regular">
                 Phone <span style="color: #32B8BB;">*</span>
                </h4>
                <ValidationProvider
                  vid="phone"
                  name="Phone"
                  rules="required"
                  v-slot="{ errors }"
                >
                  <v-text-field
                    dense
                    class="inner-filed-border-none"
                    v-model="phone"
                    placeholder="Phone"
                    filled
                    :error="!!errors[0]"
                    :error-messages="errors[0]"
                    hide-details="auto"
                  ></v-text-field>
                </ValidationProvider>
              </v-col>
              <v-col xs="12" sm="12" md="12" class="pt-4 text-center">
                <v-btn :disabled="invalid" color="primary" min-width="250" min-height="45"> SIGN UP </v-btn>
              </v-col>
              <v-col xs="12" sm="12" md="12" class="pt-0 text-center">
                <v-divider class="my-3"></v-divider>
                <h4 class="subtitle-1 primary--text font-weight-medium">Already have an account <nuxt-link style="color: #32B8BB;" to="/login">Sign In</nuxt-link> Now</h4>
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
      first_name: null,
      last_name: null,
      email: null,
      password: null,
      con_password: null,
      remember_me: false,
    }
  },
}
</script>