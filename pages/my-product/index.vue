<template>
  <div class="mt-5">
    <div class="d-flex flex-wrap justify-space-between align-center my-3">
      <h2 class="primary--text font-weight-medium">My Product</h2>
    </div>
    <div>
      <v-row>
        <v-col xs="12" sm="6" md="3" v-for="(item, index) in data" :key="index">
          <v-card class="pa-0 shadow-none w-100 gig-card-slide" @click="$router.push('/package/1')">
            <v-img
              :src="require('@/assets/img/slide/' + item.img)"
              height="180"
            ></v-img>
            <div class="pa-3">
              <h5 class="pl-1 text-left primary--text font-weight-regular" style="max-height: 35px;white-space: nowrap;overflow: hidden;">
                {{ item.title }}
              </h5>
              <div
                class="font-weight-regular primary--text d-flex align-center mt-2"
              >
                <v-icon color="primary" size="22">mdi-star</v-icon>
                <div>4.5</div>
              </div>
              <div class="bottom-card-fottom">
                <v-divider class="my-3"></v-divider>
                <div class="d-flex justify-space-between">
                  <v-icon>mdi-cards-heart</v-icon>
                  <div class="d-flex">
                    <span class="grey--text">Starting at</span>
                    <h4 class="ml-2 primary--text">$500</h4>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        data: [
        { title: 'I will design a academy website', img: '1.png' },
        { title: 'I will design a theteacher straining app & website', img: '2.png' },
        { title: 'I will design a alpha website for your business', img: '3.png' },
        { title: 'I will design a course website for your business', img: '4.png' },
        { title: 'I will design a education website', img: '5.png' },
        { title: 'I will design a theteacher straining app for your business', img: '2.png' },
      ],
    }
  },
}
</script>

<style>
.gig-card-slide {
  height: 320px;
}
.section-slide {
  width: 280px !important;
}
.bottom-card-fottom{
    position: absolute;
    bottom: 0;
    width: 94%;
    padding: 5px;
    margin-bottom: 10px;
}
</style>