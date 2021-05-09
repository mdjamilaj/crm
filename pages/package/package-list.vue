<template>
  <div>
    <div class="top-slider card-border">
      <carousel-3d
        :disable3d="true"
        :space="270"
        :width="235"
        :height="250"
        :startIndex="1"
        v-if="cloaded"
        :clickable="false"
        :controls-visible="true"
        ref="treeExplorer"
      >
        <slide
          v-for="(item, index) in items"
          :index="index"
          :key="index"
          class="slide-style-none text-center d-flex align-center"
          
        >
          <v-card class="pa-5 shadow-none w-100 top-card-slide">
            <v-img
              :src="require('@/assets/img/'+item.icon)"
              width="60"
              height="60"
              class="mx-auto"
            ></v-img>
            <h3 class="mt-3 primary--text font-weight-medium">{{ item.title }}</h3>
          </v-card>
        </slide>
      </carousel-3d>
    </div>
    <slider-section :data="data" :title="'Continue browsing'" :more="'/'"/>
    <slider-section :data="data" :title="'Most popular Gigs in Web & Mobile Design '" :more="'/'"/>
    <gigs-section :data="data"/>
    <slider-section :data="data" :title="'Recent Last View '" :more="'/'"/>
  </div>
</template>

<script>
import sliderSection from '@/components/package/sliderSection'
import gigsSection from '@/components/package/gigsSection'
export default {
   head() {
    return {
      title: "Package List",
    };
  },
  components: {sliderSection, gigsSection},
  data() {
    return {
      cloaded: true,
      items: [
        { title: 'Web Desvelopment', icon: 'web_development_icon.svg' },
        { title: 'UI/UX Design', icon: 'ui_ux_design_icon.svg' },
        { title: 'Digital Marketing', icon: 'digital_marketing_icon.svg' },
        { title: 'Project Maintenance', icon: 'maintenance_icon.svg' },
      ],
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
  //   updated: function () {
  //     this.$refs.treeExplorer.goSlide(this.$refs.treeExplorer.currentIndex)
  //   },
  beforeMount() {
      this.$store.commit('common/setHeaderTitle', 'Package List')
  },
}
</script>