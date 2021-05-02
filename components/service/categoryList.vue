<template>
  <div>
    <v-row class="mt-5">
      <v-col xs="6" sm="3" md="3" v-for="(category, index) in categories" :key="index">
        <div class="card-border-dashed pa-2 card-border">
          <v-card @click="selected_category = category" class="card-border shadow-none pa-2" style="min-height: 110px;" :dark="selected_category && selected_category.id == category.id" :style="selected_category && selected_category.id == category.id ? 'background: #34495E;' : 'background: #E7E7E7;'">
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
                  <span> {{ category.comment }} </span>
                </v-card>
              </v-menu>
            </div>
            <div class="px-4 pb-5">
              <h4 class="font-weight-medium">{{ category.name }}</h4>
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
    categories: {
      get() {
        return this.$store.state.service.categories
      },
      set(v) {
        this.$store.commit('service/setCategories', v)
      },
    },
    selected_category: {
      get() {
        return this.$store.state.service.selected_category
      },
      set(v) {
        this.$store.commit('service/setSelected_category', v)
      },
    },
  },
}
</script>