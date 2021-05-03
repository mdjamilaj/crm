<template>
  <div v-if="selected_sub_category" class="mt-3">
    <div v-if="has_sub_sub_category == false || selected_sub_sub_category">
      <v-row>
        <v-col md="12">
          <h2 class="my-2 custom-title">Project Discretion</h2>
          <vue-editor
            class="card-border"
            style="background: #ffffff; border-radius: 18px"
            v-model="project_discretion"
          ></vue-editor>
        </v-col>
        <v-col md="12" class="mt-2">
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
        <v-col sm="12" md="6" class="mt-2">
          <h2 class="my-2 custom-title">Technology</h2>
          <ValidationProvider
            vid="last_name"
            name="Last Name"
            rules="required"
            v-slot="{ errors }"
          >
            <v-text-field
              dense
              v-model="input_technology"
              placeholder="Last Name"
              outlined
              :error="!!errors[0]"
              :error-messages="errors[0]"
              hide-details
              @keyup.enter="insertTechnology()"
            ></v-text-field>
          </ValidationProvider>
        </v-col>
        <v-col sm="12" md="12" class="ma-0 pt-0 px-3">
          <span
            v-for="(item, index) in technology"
            :key="index"
            class="custom-techknowlogy px-2 d-flex align-center mb-2"
            style="width: fit-content; float: left"
          >
            <span>{{ item }}</span>
            <v-icon class="ml-1" size="14" @click="removeTechnology(index)"
              >mdi-close</v-icon
            >
          </span>
        </v-col>
        <v-col sm="12" md="12" class="ma-0 pt-0 px-3">
          <v-expansion-panels class="popular_skils shadow-none bg-none">
            <v-expansion-panel>
              <v-expansion-panel-header>
                <h3 class="custom-subtitle">
                  Popular Skils for software Development
                </h3>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <span
                  v-for="(item, index) in technology"
                  :key="index"
                  class="custom-techknowlogy-suggest px-2 d-flex align-center mb-2"
                  style="width: fit-content; float: left"
                >
                  <v-icon class="mr-1" size="16" @click="addTechnology(item)"
                    >mdi-plus</v-icon
                  >
                  <span>{{ item }}</span>
                </span>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
        <v-col md="12">
          <h2 class="my-2 custom-title">Budget</h2>
          <div>
            <v-menu
              v-model="user_menu"
              :close-on-content-click="false"
              :nudge-width="150"
              :nudge-bottom="10"
              offset-y
              max-width="155"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="white"
                  dark
                  v-bind="attrs"
                  v-on="on"
                  icon
                  class="v-btn-custom-header"
                >
                  Fixed Budget
                </v-btn>
              </template>
              <v-card>
                
              </v-card>
            </v-menu>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
let VueEditor
if (process.client) {
  VueEditor = require('vue2-editor').VueEditor
}
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
import { extend, ValidationObserver, ValidationProvider } from 'vee-validate'
import { email, required } from 'vee-validate/dist/rules'

extend('email', email)
extend('required', required)
export default {
  components: {
    VueEditor,
    vueDropzone: vue2Dropzone,
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      input_technology: null,
      technology: [],
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
    project_discretion: {
      get() {
        return this.$store.state.service.project_discretion
      },
      set(v) {
        this.$store.commit('service/setProject_discretion', v)
      },
    },
    selected_sub_category: {
      get() {
        return this.$store.state.service.selected_sub_category
      },
    },
    selected_sub_sub_category: {
      get() {
        return this.$store.state.service.selected_sub_sub_category
      },
    },
    has_sub_sub_category: {
      get() {
        return this.$store.state.service.has_sub_sub_category
      },
    },
    // technology: {
    //   get() {
    //     return this.$store.state.service.technology
    //   },
    //   set(v) {
    //     return this.$store.commit("service/setTechnology", v)
    //   }
    // },
  },
  methods: {
    upload() {
      console.log(this.$refs.myVueDropzone.getAcceptedFiles())
    },
    insertTechnology() {
      this.findInArray(this.technology, this.input_technology) === -1 &&
      this.input_technology != null
        ? this.technology.push(this.input_technology)
        : console.log('This item already exists')
      this.input_technology = null
    },
    addTechnology(item) {
      this.findInArray(this.technology, item) === -1 && item != null
        ? this.technology.push(item)
        : console.log('This item already exists')
    },
    removeTechnology(index) {
      this.technology.splice(index, 1)
    },
    findInArray(ar, val) {
      for (var i = 0, len = ar.length; i < len; i++) {
        if (ar[i].toLowerCase() === val.toLowerCase()) {
          // strict equality test
          return i
        }
      }
      return -1
    },
  },
}
</script>

