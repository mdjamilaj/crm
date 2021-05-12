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
              <h5 class="mt-3 pa-2 text-left primary--text font-weight-regular">
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
  methods: {},
  beforeMount() {
    this.$store.commit('common/setHeaderTitle', 'Package Customize')
  },
}
</script>

<style scoped>
.card-single {
  min-height: 260px !important;
}
</style>
