<template>
  <div>
    <div class="d-flex align-center mt-10">
      <!-- <v-radio-group v-model="example_site_link" class="example_site_link">
          <v-radio label="Do you have my example site "></v-radio>
        </v-radio-group> -->
      <v-checkbox
        class="example_site_link"
        v-model="example_site_link"
        label="Do you have my example site"
      ></v-checkbox>
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
          <v-icon class="ml-2" v-bind="attrs" v-on="on"
            >mdi-help-circle-outline</v-icon
          >
        </template>

        <v-card class="pa-3 card-border">
          <span>
            You have to use gig related sample link so we can make a similar
            one. Please don't use any like like Facebook or twitter
            <br /><br />

            Please don't use any malicious or any adult link.
          </span>
        </v-card>
      </v-menu>
    </div>
    <v-row>
      <v-col xs="12" sm="6" md="4">
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
    <v-row>
      <v-col xs="12" sm="12" md="12">
        <v-checkbox
          class="example_site_link"
          v-model="example_website_project"
          label="I haven't any example website or project"
        ></v-checkbox>
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
    <v-row>
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
    </v-row>

    <v-row>
      <v-col xs="12" sm="10" md="6">
        <h2 class="my-2 custom-title">Add Extras</h2>
        <div class="box px-5 pa-3 d-flex align-center justify-space-between">
          <v-checkbox
            class="example_site_link1"
            v-model="extra_first_2_days_delivery"
            label="Extra Fast 2 Days Delivery"
          ></v-checkbox>
          <p class="mb-0">$100</p>
        </div>
        <div class="box px-5 pa-3 d-flex align-center justify-space-between">
          <div>
            <v-checkbox
              class="example_site_link1"
              v-model="additional_revision"
              label="Additional Revision (+1 day)"
              hide-details
            ></v-checkbox>
            <span class="body-span px-8 py-0"
              >Add an additional revision your seller will provide after the
              delivery.</span
            >
          </div>
          <p class="mb-0">$100</p>
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col xs="12" sm="10" md="6">
        <div class="summary pa-4">
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
              <span><v-icon color="primary">mdi-checkbox-marked-circle-outline</v-icon></span>
          </div>
          <v-divider class="my-3"></v-divider>
          <v-btn color="primary" class="py-6 mx-auto d-flex justify-center text-center" min-width="180">Check Out</v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
import { extend, ValidationObserver, ValidationProvider } from 'vee-validate'
import { email, required } from 'vee-validate/dist/rules'

extend('email', email)
extend('required', required)
export default {
  components: {
    vueDropzone: vue2Dropzone,
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