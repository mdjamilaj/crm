<template>
  <div>
    <div class="package-example-div my-10">
      <v-btn
        @click="example_site_link = 1"
        color="primary"
        :outlined="example_site_link != 1"
        class="btn-shadow mt-4 btn-border scope-btn package-example-btn"
        >Package UI</v-btn
      >
      <v-btn
        @click="example_site_link = 2"
        color="primary"
        :outlined="example_site_link != 2"
        class="btn-shadow mt-4 btn-border scope-btn package-example-btn"
        >Package UI</v-btn
      >
      <v-btn
        @click="example_site_link = 3"
        color="primary"
        :outlined="example_site_link != 3"
        class="btn-shadow mt-4 btn-border scope-btn package-example-btn"
        >Package UI</v-btn
      >
    </div>
    <v-radio-group v-model="example_site_link" class="example_site_link">
      <div v-if="example_site_link == 1">
        <div class="d-flex align-center">
          <v-radio :value="1" label="Do you have my example site "></v-radio>
          <v-menu
            open-on-hover
            top
            origin="center center"
            transition="scale-transition"
            :nudge-width="265"
            :nudge-top="10"
            max-width="265"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-icon class="ml-2 mb-2" v-bind="attrs" v-on="on"
                >mdi-help-circle-outline</v-icon
              >
            </template>

            <v-card class="pa-3 card-border">
              <span>
                "Notice: Please chose this template carefully because you will
                get similar design. If you want to add extra section then we
                will charge extra"
              </span>
            </v-card>
          </v-menu>
        </div>
        <v-divider class="mt-10"></v-divider>
        <v-tabs v-model="tab" align-with-title class="bg-none-tab">
          <v-tabs-slider color="primary"></v-tabs-slider>

          <v-tab v-for="item in items" :key="item">
            {{ item }}
          </v-tab>
        </v-tabs>
        <v-divider class="my-4"></v-divider>

        <v-tabs-items v-model="tab" class="mt-10 bg-none-tab-item">
          <v-tab-item v-for="item in items" :key="item">
            <v-row>
              <v-col
                xs="12"
                sm="2"
                md="3"
                v-for="(item, index) in data"
                :key="index"
              >
                <v-card
                  class="pa-0 shadow-none card-border w-100 card-single package_customize_card"
                >
                  <v-img
                    :src="require('@/assets/img/slide/' + item.img)"
                    height="180"
                  ></v-img>
                  <h5
                    class="mt-3 pa-2 text-left primary--text font-weight-regular"
                  >
                    {{ item.title }}
                  </h5>
                  <div class="package_customize_card_hover_div">
                    <div>
                      <v-btn
                        elevation="0"
                        min-width="120"
                        color="white"
                        class="primary--text mb-3 text-lowercase"
                        >Select</v-btn
                      ><br />
                      <v-btn
                        class="text-case-unset"
                        elevation="0"
                        min-width="120"
                        outlined
                        color="white"
                        >Live View</v-btn
                      >
                    </div>
                  </div>
                </v-card>
              </v-col>
            </v-row>
            <div class="text-center">
              <v-btn
                min-width="200"
                outlined
                color="primary"
                class="text-case-unset py-6 mt-10 text-center"
                >Learn More</v-btn
              >
            </div>
          </v-tab-item>
        </v-tabs-items>
      </div>
      <v-row v-if="example_site_link == 2">
        <v-col xs="12" sm="6" md="4">
          <div class="d-flex align-center mb-3">
            <v-radio :value="2" label="Do you have my example site "></v-radio>
            <v-menu
              open-on-hover
              top
              origin="center center"
              transition="scale-transition"
              :nudge-width="265"
              :nudge-top="10"
              max-width="265"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-icon class="ml-2 mb-2" v-bind="attrs" v-on="on"
                  >mdi-help-circle-outline</v-icon
                >
              </template>

              <v-card class="pa-3 card-border">
                <span>
                  You have to use gig related sample link so we can make a
                  similar one. Please don't use any like like Facebook or
                  twitter
                  <br /><br />

                  Please don't use any malicious or any adult link.
                </span>
              </v-card>
            </v-menu>
          </div>
          <ValidationProvider
            vid="link"
            name="Link"
            rules="required"
            v-slot="{ errors }"
          >
            <v-text-field
              dense
              v-model="link"
              placeholder="Link :"
              outlined
              :error="!!errors[0]"
              :error-messages="errors[0]"
              hide-details
            ></v-text-field>
          </ValidationProvider>
        </v-col>
      </v-row>
      <v-row v-if="example_site_link == 3">
        <v-col xs="12" sm="12" md="12">
          <v-radio
            :value="3"
            label="I haven't any example website or project "
            class="mb-3"
          ></v-radio>
          <ValidationProvider
            vid="link"
            name="Link"
            rules="required"
            v-slot="{ errors }"
          >
            <v-textarea
              dense
              v-model="link"
              placeholder="Enter your information.."
              outlined
              :error="!!errors[0]"
              :error-messages="errors[0]"
              hide-details
            ></v-textarea>
          </ValidationProvider>
        </v-col>
      </v-row>
    </v-radio-group>

    <v-row>
      <v-col xs="12" sm="12" md="12">
        <h2 class="my-2 custom-title">Proposal</h2>
        <ValidationProvider
          vid="proposal"
          name="Proposal"
          rules="required"
          v-slot="{ errors }"
        >
          <v-textarea
            dense
            v-model="proposal"
            placeholder="Enter your information.."
            outlined
            :error="!!errors[0]"
            :error-messages="errors[0]"
            hide-details
          ></v-textarea>
        </ValidationProvider>
      </v-col>
    </v-row>
    <!-- <v-row>
      <v-col xs="12" sm="12" md="12">
        <h2 class="my-2 custom-title">Upload File</h2>
        <vue-dropzone
          class="card-border-dashed"
          ref="myVueDropzone"
          id="dropzone"
          :options="dropzoneOptions"
          :destroyDropzone="true"
          :useCustomSlot="true"
        >
          <div class="dropzone-custom-content">
            <v-icon size="60" class="mb-2" color="#E7E7E7"
              >mdi-cloud-upload-outline</v-icon
            >
            <h3 class="dropzone-custom-title">
              Drag and drop to upload content!
            </h3>
            <div class="subtitle">
              ...or click to select a file from your computer
            </div>
          </div>
        </vue-dropzone>
      </v-col>
    </v-row> -->

    <v-row class="mt-5">
      <v-col xs="12" sm="12" md="6">
        <h2 class="my-2 custom-title">Add Extras</h2>
        <div class="box px-5 pa-3 d-flex align-center justify-space-between">
          <v-checkbox
            class="example_site_link1"
            v-model="extra_first_2_days_delivery"
            label="Extra Fast 2 Days Delivery"
          ></v-checkbox>
          <p class="mb-0">$100</p>
        </div>
        <div class="box">
          <div class="px-5 pa-3 pb-0 d-flex align-center justify-space-between">
            <div>
              <v-checkbox
                class="example_site_link1 mt-0"
                v-model="additional_revision"
                label="Additional Revision (+1 day)"
                hide-details
              ></v-checkbox>
            </div>
            <p class="mb-0">$100</p>
          </div>
          <div class="body-span px-12 py-2">
            Add an additional revision your seller will additional provide after
            the delivery.
          </div>
        </div>
      </v-col>
      <v-col xs="12" sm="12" md="6">
        <div class="summary pa-4 mt-5">
          <h2 class="my-2 custom-title">Summary</h2>
          <v-divider class="my-3"></v-divider>
          <div class="mb-2 d-flex justify-space-between">
            <p class="primary--text">Total Amount</p>
            <span class="primary--text">$2500</span>
          </div>
          <div class="mb-2 d-flex justify-space-between">
            <p class="primary--text">Delivery Time</p>
            <span class="primary--text">30 Days</span>
          </div>
          <div class="mb-2 d-flex justify-space-between">
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
  </div>
</template>

<script>
// import vue2Dropzone from 'vue2-dropzone'
// import 'vue2-dropzone/dist/vue2Dropzone.min.css'
import { extend, ValidationObserver, ValidationProvider } from 'vee-validate'
import { email, required } from 'vee-validate/dist/rules'

extend('email', email)
extend('required', required)
export default {
  components: {
    // vueDropzone: vue2Dropzone,
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      dropzoneOptions: {
        url: 'https://httpbin.org/post',
        autoQueue: false,
        thumbnailWidth: 150,
        maxFilesize: 25,
        headers: { 'My-Awesome-Header': 'header value' },
        addRemoveLinks: true,
      },
      items: [
        'All Category',
        'Technical',
        'Website',
        'Mobile App',
        'Dashboard',
        'Responsive',
      ],
      tab: 0,
      data: [
        { title: 'I will design a academy website', img: '1.png' },
        {
          title: 'I will design a theteacher straining app & website',
          img: '2.png',
        },
        {
          title: 'I will design a alpha website for your business',
          img: '3.png',
        },
        {
          title: 'I will design a course website for your business',
          img: '4.png',
        },
        { title: 'I will design a education website', img: '5.png' },
        {
          title: 'I will design a theteacher straining app for your business',
          img: '2.png',
        },
      ],
    }
  },
  computed: {
    example_site_link: {
      get() {
        return this.$store.state.package.example_site_link
      },
      set(v) {
        this.$store.commit('package/setExample_site_link', v)
      },
    },
    link: {
      get() {
        return this.$store.state.package.link
      },
      set(v) {
        this.$store.commit('package/setLink', v)
      },
    },
    example_website_project: {
      get() {
        return this.$store.state.package.example_website_project
      },
      set(v) {
        this.$store.commit('package/setExample_website_project', v)
      },
    },
    website_project: {
      get() {
        return this.$store.state.package.website_project
      },
      set(v) {
        this.$store.commit('package/setWebsite_project', v)
      },
    },
    proposal: {
      get() {
        return this.$store.state.package.proposal
      },
      set(v) {
        this.$store.commit('package/setProposal', v)
      },
    },
    extra_fast_2_days_delivery: {
      get() {
        return this.$store.state.package.extra_fast_2_days_delivery
      },
      set(v) {
        this.$store.commit('package/setExtra_fast_2_days_delivery', v)
      },
    },
    additional_revision: {
      get() {
        return this.$store.state.package.additional_revision
      },
      set(v) {
        this.$store.commit('package/setAdditional_revision', v)
      },
    },
  },
}
</script>

<style scoped>
.card-single {
  min-height: 260px !important;
}
</style>