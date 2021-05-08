<template>
  <div class="mt-14">
    <div class="d-flex flex-wrap justify-space-between align-center">
      <h2 class="primary--text font-weight-medium">{{ title }}</h2>
      <nuxt-link class="text-dn primary--text" :to="more"
        >See More
        <v-icon class="primary--text">mdi-chevron-right</v-icon></nuxt-link
      >
    </div>
    <div>
      <carousel-3d
        :disable3d="true"
        :space="295"
        :width="230"
        :height="250"
        :startIndex="1"
        v-if="cloaded"
        :clickable="false"
        :controls-visible="true"
        ref="treeExplorer"
      >
        <slide
          v-for="(item, index) in data"
          :index="index"
          :key="index"
          class="slide-style-none text-center d-flex align-center section-slide "
        >
          <v-card class="pa-0 shadow-none card-border w-100 section-card-slide">
            <v-img
              :src="require('@/assets/img/slide/' + item.img)"
              height="180"
            ></v-img>
            <h5 class="mt-3 pa-2 text-left primary--text font-weight-regular">
              {{ item.title }}
            </h5>
          </v-card>
        </slide>
      </carousel-3d>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data', 'title', 'more'],
  data() {
      return {
          cloaded: true,
      }
  },
}
</script>

<style>
.section-card-slide{
    height: 280px;
}
.section-slide{
    width: 280px !important;
}
</style>