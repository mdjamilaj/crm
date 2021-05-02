<template>
  <div v-if="selected_sub_category" class="mt-5">
    <div v-if="has_sub_sub_category == false || selected_sub_sub_category">
      <v-row>
        <v-col md="12">
          <vue-editor class="card-border" style="background:#FFFFFF;border-radius: 18px;" v-model="project_discretion"></vue-editor>
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
export default {
components: {VueEditor},
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
  },
}
</script>