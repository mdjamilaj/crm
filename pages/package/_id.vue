<template>
  <div>
    <div class="md-w-70" id="overview">
      <div
        class="d-flex xs-flex-wrap justify-space-between align-center text-center mt-8"
      >
        <span
          @click="active = 1"
          class="cursor-pointer md-w-100 px-5"
          :class="active == 1 ? 'font-weight-bold' : 'font-weight-regular'"
          > <a href="#overview" class="text-dn">Overview</a></span
        >
        <span
          @click="active = 2"
          class="cursor-pointer md-w-100 px-5"
          :class="active == 2 ? 'font-weight-bold' : 'font-weight-regular'"
          ><a href="#description" class="text-dn">Description</a></span
        >
        <span
          @click="active = 3"
          class="cursor-pointer md-w-100 px-5"
          :class="active == 3 ? 'font-weight-bold' : 'font-weight-regular'"
          >Package</span
        >
        <span
          @click="active = 4"
          class="cursor-pointer md-w-100 px-5"
          :class="active == 4 ? 'font-weight-bold' : 'font-weight-regular'"
          >FAQ</span
        >
        <span
          @click="active = 5"
          class="cursor-pointer md-w-100 px-5"
          :class="active == 5 ? 'font-weight-bold' : 'font-weight-regular'"
          >Review</span
        >
      </div>
      <v-divider class="my-3"></v-divider>
      <div>
        <carousel-3d
          :display="1"
          :disable3d="true"
          :space="1000"
          :width="1000"
          :height="400"
          :startIndex="0"
          v-if="cloaded"
          :clickable="false"
          :controls-visible="true"
          ref="treeExplorer"
          @after-slide-change="onAfterSlideChange"
        >
          <slide
            v-for="(item, index) in data"
            :index="index"
            :key="index"
            @change="goToSlide(index)"
            class="slide-style-none-slider-top text-center d-flex align-center"
          >
            <v-card
              class="pa-0 shadow-none card-border w-100 top-section-slider"
            >
              <v-img
                :src="require('@/assets/img/slide/' + item.img)"
                class="top-section-slider"
                style="object-fit: cover"
              ></v-img>
            </v-card>
          </slide>
        </carousel-3d>
        <carousel-3d
          :disable3d="true"
          :space="165"
          :width="150"
          :height="90"
          :startIndex="1"
          v-if="cloaded"
          :clickable="false"
          :controls-visible="data.length > 6 ? true : false"
          ref="treeExplorer1"
        >
          <slide
            v-for="(item, index) in data"
            :index="index"
            :key="index"
            class="slide-style-none-slider-top text-center d-flex align-center"
          >
            <v-card
              @click="goToSlide(index)"
              class="pa-0 shadow-none card-border w-100 section-card-slide"
            >
              <v-img
                :src="require('@/assets/img/slide/' + item.img)"
                class="top-section-slider"
                :class="active_index == index ? '' : 'img-opacity-black'"
              ></v-img>
            </v-card>
          </slide>
        </carousel-3d>
      </div>
    </div>
    <div id="description" class="mt-10">
      <h3 class="title">About This Gig</h3>
      <div class="mt-5">
        If you are looking for a Developer who can help you to Convert
        PSD/FIGMA/XD/SKETCH to HTML, You are at Right Place. If You have
        PSD/FIGMA/XD/SKETCH Files Ready and Want to Convert to HTML with
        Bootstrap, let’s connect for a 5-minute chat to discuss your
        requirements.
      </div>
    </div>
    <div id="compare-package" class="mt-10">
      <h3 class="title">Compare Packages</h3>
      <div class="mt-5">
        <v-simple-table class="package">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="package-th"></th>
                <th class="package-th">
                  <div class="egg">
                    <span class="title primary--text ma-0">Basic</span>
                  </div>
                  <h4 class="mt-4 subtitle-1 primary--text">Basic</h4>
                  <span class="body-2 mt-2">Professional Single Page website with Responsive.</span>
                </th>
                <th class="package-th">
                  <div class="egg">
                    <p class="title primary--text ma-0">Standard</p>
                  </div>
                  <h4 class="mt-4 subtitle-1 primary--text">Medium</h4>
                  <span class="body-2 mt-2">Professional 2-5 Page website with Responsive.</span>
                </th>
                <th class="package-th">
                  <div class="egg">
                    <p class="title primary--text ma-0">Premium</p>
                  </div>
                  <h4 class="mt-4 subtitle-1 primary--text">Large Website</h4>
                  <span class="body-2 mt-2">Professional 6-15 Page website with Responsive.</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Responsive Design</td>
                <td class="text-center"><v-icon>mdi-check-circle-outline</v-icon></td>
                <td class="text-center"><v-icon>mdi-check-circle-outline</v-icon></td>
                <td class="text-center"><v-icon>mdi-check-circle-outline</v-icon></td>
              </tr>
               <tr>
                <td>Responsive Design</td>
                <td class="text-center"><v-icon>mdi-check-circle-outline</v-icon></td>
                <td class="text-center"><v-icon>mdi-check-circle-outline</v-icon></td>
                <td class="text-center"><v-icon>mdi-check-circle-outline</v-icon></td>
              </tr>
               <tr>
                <td>Responsive Design</td>
                <td class="text-center"><v-icon>mdi-check-circle-outline</v-icon></td>
                <td class="text-center"><v-icon>mdi-check-circle-outline</v-icon></td>
                <td class="text-center"><v-icon>mdi-check-circle-outline</v-icon></td>
              </tr>
               <tr>
                <td>Responsive Design</td>
                <td class="text-center"><v-icon>mdi-check-circle-outline</v-icon></td>
                <td class="text-center"><v-icon>mdi-check-circle-outline</v-icon></td>
                <td class="text-center"><v-icon>mdi-check-circle-outline</v-icon></td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <v-simple-table class="footer-table">
          <template v-slot:default>
            <tbody>
               <tr>
                <td style="width: 25%;">Total</td>
                <td style="width: 25%;" class="text-center">$500</td>
                <td style="width: 25%;" class="text-center">$1000</td>
                <td style="width: 25%;" class="text-center">$1500</td>
              </tr>
              <tr>
                <td style="width: 25%;"></td>
                <td style="width: 25%;" class="text-center"><v-btn color="primary">Buy Now</v-btn></td>
                <td style="width: 25%;" class="text-center">$1000</td>
                <td style="width: 25%;" class="text-center">$1500</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Package View',
    }
  },
  data() {
    return {
      active_index: 0,
      active: 1,
      cloaded: true,
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
  methods: {
    onAfterSlideChange(index) {
      this.active_index = index
      this.$refs.treeExplorer.goSlide(index)
      this.$refs.treeExplorer1.goSlide(index)
    },
    goToSlide(index) {
      this.active_index = index
      this.$refs.treeExplorer.goSlide(index)
      this.$refs.treeExplorer1.goSlide(index)
    },
  },
  beforeMount() {
    this.$store.commit('common/setHeaderTitle', 'Package View')
  },
}
</script>

<style scoped>
.top-section-slider {
  width: 100%;
  height: 100%;
}
</style>

