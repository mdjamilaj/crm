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
        >
          <a href="#overview" class="text-dn">Overview</a></span
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
          ><a href="#package" class="text-dn">Package</a></span
        >
        <span
          @click="active = 4"
          class="cursor-pointer md-w-100 px-5"
          :class="active == 4 ? 'font-weight-bold' : 'font-weight-regular'"
          ><a href="#faq" class="text-dn">FAQ</a></span
        >
        <span
          @click="active = 5"
          class="cursor-pointer md-w-100 px-5"
          :class="active == 5 ? 'font-weight-bold' : 'font-weight-regular'"
          ><a href="#review" class="text-dn">Review</a></span
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
    <div id="description" class="mt-14">
      <h3 class="title primary--text">About This Gig</h3>
      <div class="mt-5">
        <span class="body-2"
          >If you are looking for a Developer who can help you to Convert
          PSD/FIGMA/XD/SKETCH to HTML, You are at Right Place. If You have
          PSD/FIGMA/XD/SKETCH Files Ready and Want to Convert to HTML with
          Bootstrap, let’s connect for a 5-minute chat to discuss your
          requirements.</span
        >
      </div>
    </div>
    <div id="package" class="mt-14">
      <h3 class="title primary--text">Compare Packages</h3>
      <div class="mt-5">
        <v-card class="card-shadow card-border pa-4">
          <v-simple-table class="package">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="package-th pt-4">
                    <div class="egg">
                      <span class="subtitle-2 primary--text ma-0">Package</span>
                    </div>
                  </th>
                  <th class="package-th pt-4">
                    <div class="egg">
                      <span class="title primary--text ma-0">Basic</span>
                    </div>
                    <h4 class="mt-4 subtitle-1 primary--text">Basic</h4>
                    <span class="body-2 mt-2"
                      >Professional Single Page website with Responsive.</span
                    >
                  </th>
                  <th class="package-th pt-4">
                    <div class="egg">
                      <p class="title primary--text ma-0">Standard</p>
                    </div>
                    <h4 class="mt-4 subtitle-1 primary--text">Medium</h4>
                    <span class="body-2 mt-2"
                      >Professional 2-5 Page website with Responsive.</span
                    >
                  </th>
                  <th class="package-th pt-4">
                    <div class="egg">
                      <p class="title primary--text ma-0">Premium</p>
                    </div>
                    <h4 class="mt-4 subtitle-1 primary--text">Large Website</h4>
                    <span class="body-2 mt-2"
                      >Professional 6-15 Page website with Responsive.</span
                    >
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Responsive Design</td>
                  <td class="text-center">
                    <v-icon>mdi-check-circle-outline</v-icon>
                  </td>
                  <td class="text-center">
                    <v-icon>mdi-check-circle-outline</v-icon>
                  </td>
                  <td class="text-center">
                    <v-icon>mdi-check-circle-outline</v-icon>
                  </td>
                </tr>
                <tr>
                  <td>Responsive Design</td>
                  <td class="text-center">
                    <v-icon>mdi-check-circle-outline</v-icon>
                  </td>
                  <td class="text-center">
                    <v-icon>mdi-check-circle-outline</v-icon>
                  </td>
                  <td class="text-center">
                    <v-icon>mdi-check-circle-outline</v-icon>
                  </td>
                </tr>
                <tr>
                  <td>Responsive Design</td>
                  <td class="text-center">
                    <v-icon>mdi-check-circle-outline</v-icon>
                  </td>
                  <td class="text-center">
                    <v-icon>mdi-check-circle-outline</v-icon>
                  </td>
                  <td class="text-center">
                    <v-icon>mdi-check-circle-outline</v-icon>
                  </td>
                </tr>
                <tr>
                  <td>Responsive Design</td>
                  <td class="text-center">
                    <v-icon>mdi-check-circle-outline</v-icon>
                  </td>
                  <td class="text-center">
                    <v-icon>mdi-check-circle-outline</v-icon>
                  </td>
                  <td class="text-center">
                    <v-icon>mdi-check-circle-outline</v-icon>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <v-simple-table class="footer-table">
            <template v-slot:default>
              <tbody>
                <tr>
                  <td style="width: 25%">Total</td>
                  <td style="width: 25%" class="text-center">$500</td>
                  <td style="width: 25%" class="text-center">$1000</td>
                  <td style="width: 25%" class="text-center">$1500</td>
                </tr>
                <tr class="pb-2">
                  <td style="width: 25%"></td>
                  <td style="width: 25%" class="text-center">
                    <v-btn @click="$router.push('/package/customize-package/1')" color="primary">Buy Now</v-btn>
                  </td>
                  <td style="width: 25%" class="text-center">
                    <v-btn @click="$router.push('/package/customize-package/1')" outlined color="primary">Buy Now</v-btn>
                  </td>
                  <td style="width: 25%" class="text-center">
                    <v-btn @click="$router.push('/package/customize-package/1')" outlined color="primary">Buy Now</v-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </div>
    </div>
    <div id="faq" class="mt-14">
      <h3 class="title text-center primary--text">
        Frequently Asked Questions
      </h3>
      <div class="mt-5">
        <v-row justify="center">
          <v-col sm="12" md="8">
            <v-expansion-panels accordion class="expansion-bg-none card-shadow">
              <v-expansion-panel v-for="(item, i) in 5" :key="i">
                <v-expansion-panel-header
                  ><h4 class="primary--text">Item</h4></v-expansion-panel-header
                >
                <v-expansion-panel-content>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </div>
    </div>
    <div id="review" class="mt-14">
      <h3 class="title primary--text">Reviews</h3>
      <div class="mt-5">
        <h5 class="primary--text">Rating Breakdown</h5>
        <v-row class="mt-0">
          <v-col md="12" class="pb-0">
            <v-row>
              <v-col sm="6" md="4">
                <p class="text-gray mb-0">Seller communication level</p>
              </v-col>
              <v-col sm="6" md="4" class="d-flex align-center">
                <v-icon color="rgba(49, 184, 182, 1)" size="18">mdi-star</v-icon>
                <p class="mb-0 pt-1 ml-2">5.0</p>
              </v-col>
            </v-row>
          </v-col>
          <v-col md="12" class="pb-0">
            <v-row>
              <v-col sm="6" md="4">
                <p class="text-gray mb-0">Seller communication level</p>
              </v-col>
              <v-col sm="6" md="4" class="d-flex align-center">
                <v-icon color="rgba(49, 184, 182, 1)" size="18">mdi-star</v-icon>
                <p class="mb-0 pt-1 ml-2">5.0</p>
              </v-col>
            </v-row>
          </v-col>
          <v-col md="12" class="pb-0">
            <v-row>
              <v-col sm="6" md="4">
                <p class="text-gray mb-0">Seller communication level</p>
              </v-col>
              <v-col sm="6" md="4" class="d-flex align-center">
                <v-icon color="rgba(49, 184, 182, 1)" size="18">mdi-star</v-icon>
                <p class="mb-0 pt-1 ml-2">5.0</p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </div>
    <div class="mt-10" v-for="item in 2" :key="item">
      <div>
        <v-row>
          <v-col xs="6" md="6">
            <div class="d-flex justify-space-between">
              <div class="d-flex">
                <div>
                  <v-img
                    :src="require('@/assets/img/user-img.png')"
                    class="rounded-circle"
                    width="50"
                    height="50"
                  ></v-img>
                </div>
                <div class="ml-4">
                  <h4 class="d-flex align-center">
                    Sartoriallux
                    <v-icon color="rgba(49, 184, 182, 1)" class="ml-10" size="18">mdi-star</v-icon>
                    <p class="mb-0 pt-1 ml-2">5.0</p>
                  </h4>
                  <span class="body-2">United States</span>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
        <div class="feedback-custom-margin my-5 mb-0 body-2">
          I am an early-stage startup founder with some engineering experience.
          I understand that market research and design come before building. I
          reached out to Masum after seeing his portfolio and knew I needed to
          work with him for my hi fidelity prototype. - Easy to work with -
          Overachiever - You will get more that what you asked for
        </div>
      </div>
      <v-divider class="my-8"></v-divider>
    </div>
    <div class="feedback-custom-margin my-0 mb-0 body-2 primary--text d-flex align-center mb-14">
      <v-icon color="primary" size="21">mdi-plus</v-icon> <span>See More</span>
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
        { title: 'I will design a academy website', img: 'Breath Mobile Mockup 6 1.png' },
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

