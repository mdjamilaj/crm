<template>
  <div>
    <h1 class="title primary--text">Customize Your Package</h1>
    <v-row class="pa-4">
      <v-col xs="12" sm="6" md="4">
        <v-img
          :src="require('@/assets/img/slide/Breath Mobile Mockup 6 1.png')"
          class="card-border"
        >
        </v-img>
      </v-col>
      <v-col xs="12" sm="6" md="4" class="d-flex align-center">
        <div>
          <h1 class="custom-title primary--text" style="font-size: 18px">Customize Your Package</h1>
          <p class="body-span mt-3 mb-1">
            Please contact us before any order so we can confirm the exact
            requirements.
          </p>
          <div class="d-flex align-center">
            <v-icon color="rgba(49, 184, 182, 1)" size="18">mdi-star</v-icon>
            <v-icon color="rgba(49, 184, 182, 1)" size="18">mdi-star</v-icon>
            <v-icon color="rgba(49, 184, 182, 1)" size="18">mdi-star</v-icon>
            <v-icon color="rgba(49, 184, 182, 1)" size="18">mdi-star</v-icon>
            <v-icon color="rgba(49, 184, 182, 1)" size="18">mdi-star</v-icon>
            <p class="mb-0 pt-1 ml-2">5.0</p>
            <span class="body-span ml-2" style="color: rgba(49, 184, 182, 1)"
              >(50 Review)</span
            >
          </div>
        </div>
      </v-col>
    </v-row>
    <div>
        <customize-package-text-fileds />
    </div>
  </div>
</template>

<script>
import customizePackageTextFileds from '@/components/package/customizePackageTextFileds';
export default {
  components: {
    customizePackageTextFileds,
  },
  head() {
    return {
      title: 'Package Customize',
    }
  },
  data() {
    return {
      example_site_link: false,
    }
  },
  methods: {},
  beforeMount() {
    this.$store.commit('common/setHeaderTitle', 'Package Customize')
  },
}
</script>


