<template>
  <div>
    <h1 class="title primary--text">Payment Options</h1>
    <ValidationObserver ref="form" v-slot="{ invalid }">
      <div class="mt-5">
        <v-card class="card-shadow card-border pa-10">
          <h3 class="subtitle-1 font-weight-medium primary--text">
            Select a Payment Method
          </h3>
          <div style="width: 80%">
            <v-radio-group v-model="selected_payment_method" class="mt-0">
              <div class="d-flex align-center justify-space-between">
                <v-radio
                  :label="`Payment Site`"
                  class="mb-1"
                  :value="1"
                ></v-radio>
                <div class="d-flex">
                  <v-radio :value="2" class="mb-1"></v-radio>
                  <div class="d-flex align-center">
                    <v-img
                      @click="selected_payment_method = 2"
                      :src="require('@/assets/img/select_payment/paypal.png')"
                      width="100"
                      class="card-border cursor-pointer"
                    >
                    </v-img>
                  </div>
                </div>
              </div>
              <div class="d-flex align-center">
                <v-radio
                  :label="`Cradit and Debit card`"
                  :value="3"
                  class="mb-0"
                ></v-radio>
                <div class="d-flex align-center">
                  <v-img
                    @click="selected_payment_method = 3"
                    :src="
                      require('@/assets/img/select_payment/money-cards.png')
                    "
                    width="150"
                    class="card-border cursor-pointer ml-2"
                  >
                  </v-img>
                </div>
              </div>
            </v-radio-group>
            <v-row class="mt-5">
              <v-col xs="12" sm="6" md="5">
                <h4 class="subtitle-1 font-weight-regular">Card Number</h4>
                <ValidationProvider
                  vid="card_number"
                  name="Card number"
                  rules="required"
                  v-slot="{ errors }"
                >
                  <v-text-field
                    dense
                    class="inner-filed-border"
                    v-model="card_number"
                    outlined
                    filled
                    :error="!!errors[0]"
                    :error-messages="errors[0]"
                    hide-details="auto"
                  ></v-text-field>
                </ValidationProvider>
              </v-col>
              <v-col xs="12" sm="6" md="3">
                <h4 class="subtitle-1 font-weight-regular">Expiration Date</h4>
                <ValidationProvider
                  vid="expiration_date"
                  name="Expiration date"
                  rules="required"
                  v-slot="{ errors }"
                >
                  <v-text-field
                    dense
                    v-model="expiration_date"
                    outlined
                    filled
                    :error="!!errors[0]"
                    :error-messages="errors[0]"
                    hide-details="auto"
                  ></v-text-field>
                </ValidationProvider>
              </v-col>
              <v-col xs="12" sm="6" md="3">
                <h4 class="subtitle-1 font-weight-regular">Security Code ?</h4>
                <ValidationProvider
                  vid="security_code"
                  name="Security code"
                  rules="required"
                  v-slot="{ errors }"
                >
                  <v-text-field
                    dense
                    v-model="security_code"
                    outlined
                    filled
                    :error="!!errors[0]"
                    :error-messages="errors[0]"
                    hide-details="auto"
                  ></v-text-field>
                </ValidationProvider>
              </v-col>
            </v-row>
            <v-row>
              <v-col xs="12" sm="6" md="5">
                <h4 class="subtitle-1 font-weight-regular">First Name</h4>
                <ValidationProvider
                  vid="first_name"
                  name="First name"
                  rules="required"
                  v-slot="{ errors }"
                >
                  <v-text-field
                    dense
                    v-model="first_name"
                    outlined
                    filled
                    :error="!!errors[0]"
                    :error-messages="errors[0]"
                    hide-details="auto"
                  ></v-text-field>
                </ValidationProvider>
              </v-col>
              <v-col xs="12" sm="6" md="5">
                <h4 class="subtitle-1 font-weight-regular">Last Name</h4>
                <ValidationProvider
                  vid="last_name"
                  name="Last name"
                  rules="required"
                  v-slot="{ errors }"
                >
                  <v-text-field
                    dense
                    v-model="last_name"
                    outlined
                    filled
                    :error="!!errors[0]"
                    :error-messages="errors[0]"
                    hide-details="auto"
                  ></v-text-field>
                </ValidationProvider>
              </v-col>
            </v-row>
            <v-checkbox
              v-model="save_as_default"
              :label="`Save as default ?`"
            ></v-checkbox>
          </div>
        </v-card>
      </div>
      <v-row>
        <v-col xs="12" sm="12" md="6">
          <div class="summary pa-4 mt-5">
            <v-row>
              <v-col xs="12" sm="6" md="4">
                <v-img
                  :src="
                    require('@/assets/img/slide/Breath Mobile Mockup 6 1.png')
                  "
                  class="card-border"
                >
                </v-img>
              </v-col>
              <v-col xs="12" sm="6" md="3" class="d-flex align-center">
                <div>
                  <h1
                    class="custom-title primary--text"
                    style="font-size: 18px"
                  >
                    Breathe Mobile App
                  </h1>
                </div>
              </v-col>
            </v-row>
            <v-divider class="mt-6 mb-3"></v-divider>
            <h2 class="my-3 custom-title">Summary</h2>
            <div class="d-flex justify-space-between">
              <p class="primary--text">Total Amount</p>
              <span class="primary--text">$2500</span>
            </div>
            <div class="d-flex justify-space-between">
              <p class="primary--text">Delivery Time</p>
              <span class="primary--text">30 Days</span>
            </div>
            <div class="d-flex justify-space-between">
              <p class="primary--text">Unlimited Revisiones</p>
              <span
                ><v-icon color="primary"
                  >mdi-checkbox-marked-circle-outline</v-icon
                ></span
              >
            </div>
            <v-divider class="my-3"></v-divider>
            <v-btn
              color="primary"
              class="py-6 mx-auto d-flex justify-center text-center"
              min-width="180"
              @click="$router.push('/package/payment-options/1')"
              >Check Out</v-btn
            >
            <div class="d-flex align-center justify-center mt-2">
              <v-icon color="rgba(102, 102, 102, 1)" size="18">mdi-lock</v-icon>
              <div class="ml-1" style="color: rgba(102, 102, 102, 1)">
                SSL Secure Payment
              </div>
            </div>
          </div>
          <div class="d-flex flex-wrap aling-center mt-5">
            <v-img
              :src="require('@/assets/img/payment/payoneer.png')"
              height="60"
              width="60"
              class="ma-2 card-border"
            ></v-img>
            <v-img
              :src="require('@/assets/img/payment/discover.png')"
              height="60"
              width="60"
              class="ma-2 card-border"
            ></v-img>
            <v-img
              :src="require('@/assets/img/payment/paypal.png')"
              height="60"
              width="60"
              class="ma-2 card-border"
            ></v-img>
            <v-img
              :src="require('@/assets/img/payment/mastercard.png')"
              height="60"
              width="60"
              class="ma-2 card-border"
            ></v-img>
            <v-img
              :src="require('@/assets/img/payment/visa.png')"
              height="60"
              width="60"
              class="ma-2 card-border"
            ></v-img>
          </div>
        </v-col>
      </v-row>
    </ValidationObserver>
  </div>
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
  data() {
    return {
      selected_payment_method: 1,
      card_number: null,
      expiration_date: null,
      security_code: null,
      first_name: null,
      last_name: null,
      save_as_default: false,
    }
  },
}
</script>