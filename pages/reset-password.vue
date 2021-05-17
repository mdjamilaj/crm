<template>
  <v-container :fluid="false">
    <img src="~/assets/img/mlogo.png" class="text-center" height="70" />
    <v-row>
      <v-col xs="12" sm="12" md="6" class="sm-d-none">
        <img
          src="~/assets/img/image 3 1.png"
          class="text-center"
          style="height: 80%; width: 140%"
        />
      </v-col>
      <v-col xs="12" sm="12" md="6">
        <v-card
          class="card-border pa-10 subtitle-1 login-card "
          style="box-shadow: 40px 40px 100px rgba(52, 73, 94, 0.27)"
        >
          <div class="login-card-child">
            <h2 class="mb-5 text-center">Reset Password</h2>
            <div class="body-span text-center">
              Enter the email address or mobile number <br />
              associated with your account.
            </div>
            <ValidationObserver ref="form" v-slot="{ invalid }">
              <v-row class="mt-10">
                <v-col xs="12" sm="12" md="12">
                  <h4 class="subtitle-1 mb-2 font-weight-regular">
                    Email or mobile number <span style="color: #32b8bb">*</span>
                  </h4>
                  <ValidationProvider
                    vid="email"
                    name="Email or mobile number"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <v-text-field
                      dense
                      class="inner-filed-border-none"
                      v-model="email"
                      placeholder="Email or mobile number"
                      filled
                      :error="!!errors[0]"
                      :error-messages="errors[0]"
                      hide-details="auto"
                    ></v-text-field>
                  </ValidationProvider>
                </v-col>
                <v-col xs="12" sm="12" md="12" class="pt-10 text-center">
                  <v-btn
                    :disabled="invalid"
                    color="primary"
                    min-width="250"
                    min-height="45"
                  >
                    Continue
                  </v-btn>
                </v-col>
              </v-row>
            </ValidationObserver>
          </div>
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
      email: null,
    }
  },
}
</script>