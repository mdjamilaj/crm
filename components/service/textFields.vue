<template>
  <div v-if="selected_sub_category" class="mt-3 mb-14">
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
            vid="technology"
            name="Technology"
            rules="required"
            v-slot="{ errors }"
          >
            <v-text-field
              dense
              v-model="input_technology"
              placeholder="Technology"
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
              v-model="budget_menu"
              :close-on-content-click="false"
              :nudge-width="190"
              :nudge-bottom="10"
              offset-y
              max-width="194"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  outlined
                  color="primary"
                  v-bind="attrs"
                  v-on="on"
                  class="border-radius-12 mr-8 px-10 aria-expanded-btn"
                >
                  Fixed Budget
                </v-btn>
              </template>
              <v-card class="border-solid pa-3 text-center">
                <ValidationProvider
                  vid="fixed_budget"
                  name="Fixed Budget"
                  rules="required"
                  v-slot="{ errors }"
                >
                  <v-text-field
                    dense
                    v-model="fixed_budget"
                    placeholder="$500.0"
                    outlined
                    :error="!!errors[0]"
                    :error-messages="errors[0]"
                    hide-details
                    @keyup.enter="insertTechnology()"
                    style="max-width: 120px"
                    class="mx-auto"
                  ></v-text-field>
                </ValidationProvider>
                <span
                  class="body-2 mt-2 text-center primary--text  cursor-pointer"
                  style="display: flow-root; justify-content: center"
                  @click="add_badget_note_dailog = true"
                >
                  <v-icon size="20" color="primary">mdi-plus</v-icon> Add Badget
                  Note (Optinal)
                </span>
              </v-card>
            </v-menu>
            <v-menu
              v-model="budget_menu1"
              :close-on-content-click="false"
              :nudge-width="260"
              :nudge-bottom="10"
              offset-y
              max-width="261"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  outlined
                  color="primary"
                  v-bind="attrs"
                  v-on="on"
                  class="border-radius-12 mr-8 px-10 aria-expanded-btn"
                >
                  Minimum To Maximum
                </v-btn>
              </template>
              <v-card class="border-solid pa-3 text-center">
                <div class="d-flex align-center">
                  <ValidationProvider
                    vid="fixed_budget"
                    name="Fixed Budget"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <v-text-field
                      dense
                      v-model="fixed_budget"
                      placeholder="$500.0"
                      outlined
                      :error="!!errors[0]"
                      :error-messages="errors[0]"
                      hide-details
                      @keyup.enter="insertTechnology()"
                      style="max-width: 100px"
                      class="mx-auto mr-2"
                    ></v-text-field>
                  </ValidationProvider>
                  <span>To</span>
                  <ValidationProvider
                    vid="fixed_budget"
                    name="Fixed Budget"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <v-text-field
                      dense
                      v-model="fixed_budget"
                      placeholder="$500.0"
                      outlined
                      :error="!!errors[0]"
                      :error-messages="errors[0]"
                      hide-details
                      @keyup.enter="insertTechnology()"
                      style="max-width: 100px"
                      class="mx-auto ml-2"
                    ></v-text-field>
                  </ValidationProvider>
                </div>
                <span
                  class="body-2 mt-2 text-center primary--text  cursor-pointer"
                  style="display: flow-root; justify-content: center"
                  @click="add_badget_note_dailog = true"
                >
                  <v-icon size="20" color="primary">mdi-plus</v-icon> Add Badget
                  Note (Optinal)
                </span>
              </v-card>
            </v-menu>
            <v-menu
              v-model="budget_menu2"
              :close-on-content-click="false"
              :nudge-width="160"
              :nudge-bottom="10"
              offset-y
              max-width="160"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  outlined
                  color="primary"
                  v-bind="attrs"
                  v-on="on"
                  class="border-radius-12 mr-8 px-10 aria-expanded-btn"
                >
                  Not Sure
                </v-btn>
              </template>
              <v-card class="border-solid pa-3 text-center">
                <span
                  class="body-2 text-center primary--text cursor-pointer"
                  style="display: flow-root; justify-content: center"
                  @click="add_badget_note_dailog = true"
                >
                  <v-icon size="20" color="primary">mdi-plus</v-icon> Add Badget
                  Note (Optinal)
                </span>
              </v-card>
            </v-menu>
          </div>
        </v-col>
        <v-col md="12">
          <h2 class="my-2 custom-title">Project Deadline</h2>
          <div>
            <v-card class="card-border shadow-none pa-10 border-solid-sm" style="width: fit-content !important;">
              <div class="d-flex align-center">
                <div>
                  <p class="custom-subtitle mb-2">Project Start</p>
                  <v-menu
                    v-model="start_date_menu"
                    :close-on-content-click="false"
                    max-width="290"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn outlined v-bind="attrs" v-on="on" class="border-solid-sm card-border px-5 py-5 card-shadow">
                        {{ computedStartDateFormattedMomentjs }}
                      </v-btn>
                    </template>
                    <v-date-picker
                      v-model="start_date"
                      @change="start_date_menu = false"
                    ></v-date-picker>
                  </v-menu>
                </div>
                <span class="px-5 mt-8">to</span>
                <div>
                  <p class="custom-subtitle mb-2">Project End</p>
                  <v-menu
                    v-model="end_date_menu"
                    :close-on-content-click="false"
                    max-width="290"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn outlined v-bind="attrs" v-on="on" class="border-solid-sm card-border px-5 py-5 card-shadow">
                        {{ computedEndDateFormattedMomentjs }}
                      </v-btn>
                    </template>
                    <v-date-picker
                      v-model="end_date"
                      @change="end_date_menu = false"
                    ></v-date-picker>
                  </v-menu>
                </div>
              </div>
            </v-card>
          </div>
        </v-col>
         <v-col md="12">
          <h2 class="my-2 custom-title">Importent Note Project  ?</h2>
          <vue-editor
            class="card-border"
            style="background: #ffffff; border-radius: 18px"
            v-model="importent_note_project"
          ></vue-editor>
        </v-col>
        <v-col md="12" class="mt-5">
          <div class="d-flex flex-wrap align-center">
              <v-btn color="primary" class="border-radius-12 mr-8 py-4 px-10">
              Save Project
              </v-btn>
              <v-btn outlined color="primary" class="border-radius-12 mr-8 py-4 px-10">
              Save And More
              </v-btn>
              <v-btn outlined color="primary" class="border-radius-12 mr-8 py-4 px-10">
              Draft
              </v-btn>
          </div>
        </v-col>
      </v-row>
    </div>
    <v-dialog v-model="add_badget_note_dailog" width="450">
      <v-card>
        <v-card-title class="font-weight-bold justify-center">
          <v-row
            class="mx-0 my-0 px-0 py-0 justify-center"
            justify="center"
            justify-lg="space-between"
            style="align-items: center"
          >
            <div class="d-flex flex-wrap font-weight-bold">Add Badget Note</div>
            <div class="d-flex align-end flex-column">
              <v-icon @click="add_badget_note_dailog = false">
                mdi-close
              </v-icon>
            </div>
          </v-row>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="mt-5">
          <v-textarea
            outlined
            v-model="add_badget_note"
            hide-details
          ></v-textarea>
        </v-card-text>
        <v-card-actions style="display: block">
          <v-row class="mx-0 my-0 py-2" justify="center">
            <v-btn
              text
              @click="
                add_badget_note_dailog = false
                add_badget_note = null
              "
              outlined
              class="custom-btn-width py-2 mr-10"
              min-width="150px"
            >
              Cancel
            </v-btn>
            <v-btn
              @click="add_badget_note_dailog = false"
              text
              color="white"
              class="custom-btn-width primary white--text py-2"
              min-width="150px"
            >
              Ok
            </v-btn>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
let VueEditor
if (process.client) {
  VueEditor = require('vue2-editor').VueEditor
}
import vue2Dropzone from 'vue2-dropzone'
import moment from 'moment'
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
      menu1: false,
      add_badget_note_dailog: false,
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
      start_date: moment().format('YYYY-MM-DD'),
      end_date: moment().format('YYYY-MM-DD'),
      budget_menu: false,
      budget_menu1: false,
      budget_menu2: false,
      start_date_menu:false,
      end_date_menu:false,
    }
  },
  computed: {
    computedStartDateFormattedMomentjs() {
      return this.start_date
        ? moment(this.start_date).format('DD MMMM YYYY')
        : ''
    },
    computedEndDateFormattedMomentjs() {
      return this.end_date
        ? moment(this.end_date).format('DD MMMM YYYY')
        : ''
    },
    project_discretion: {
      get() {
        return this.$store.state.service.project_discretion
      },
      set(v) {
        this.$store.commit('service/setProject_discretion', v)
      },
    },
    importent_note_project: {
      get() {
        return this.$store.state.service.importent_note_project
      },
      set(v) {
        this.$store.commit('service/setImportent_note_project', v)
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
    fixed_budget: {
      get() {
        return this.$store.state.service.fixed_budget
      },
      set(v) {
        return this.$store.commit('service/setFixed_budget', v)
      },
    },
    add_badget_note: {
      get() {
        return this.$store.state.service.add_badget_note
      },
      set(v) {
        return this.$store.commit('service/setAdd_badget_note', v)
      },
    },
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

