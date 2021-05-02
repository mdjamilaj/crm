<template>
  <div v-if="selected_sub_category && sub_sub_categories.length > 0" class="mt-5">
    <h2 v-if="selected_sub_category" class="my-2"> {{ selected_sub_category.name }} </h2>
    <v-row>
      <v-col xs="6" sm="3" md="3" v-for="(sub_sub_category, index) in sub_sub_categories" :key="index">
        <div class="card-border-dashed pa-2 card-border">
          <v-card @click="selected_sub_sub_category = sub_sub_category" class="card-border shadow-none pa-2" style="min-height: 110px;" :dark="selected_sub_sub_category && selected_sub_sub_category.id == sub_sub_category.id" :style="selected_sub_sub_category && selected_sub_sub_category.id == sub_sub_category.id ? 'background: #34495E;' : 'background: #E7E7E7;'">
            <div class="text-right">
              <v-menu
                top
                origin="center center"
                transition="scale-transition"
                :nudge-width="150"
                :nudge-top="10"
                max-width="150"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-icon v-bind="attrs" v-on="on"
                    >mdi-help-circle-outline</v-icon
                  >
                </template>

                <v-card class="pa-3 card-border">
                  <span> {{ sub_sub_category.comment }} </span>
                </v-card>
              </v-menu>
            </div>
            <div class="px-4 pb-5">
              <h4 class="font-weight-medium">{{ sub_sub_category.name }}</h4>
            </div>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: {},
    }
  },
  computed: {
    sub_sub_categories: {
      get() {
        return this.$store.state.service.sub_sub_categories
      },
      set(v) {
        this.$store.commit('service/setSub_sub_categories', v)
      },
    },
    selected_sub_sub_category: {
      get() {
        return this.$store.state.service.selected_sub_sub_category
      },
      set(v) {
        this.$store.commit('service/setSelected_sub_sub_category', v)
      },
    },
    selected_sub_category: {
      get() {
        return this.$store.state.service.selected_sub_category
      },
    },
  },
}
</script>