<template>
  <div>
    <v-card
      v-for="(item, index) in data"
      :key="index"
      class="br-16 shadow-none border-solid-sm mt-5 pa-8"
      min-height="130"
      :style="getProjectCover(item.project_cover)"
    >
      <v-row class="d-flex flex-wrap justify-space-between">
        <v-col xs="12" md="4">
          <v-list class="py-0 bg-none">
            <v-list-item>
              <v-list-item-avatar>
                <img src="~/assets/img/user-img.png" />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title
                  class="title"
                  :class="
                    item.project_cover == null ? 'primary--text' : 'white--text'
                  "
                >
                  {{ item.title }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col
          xs="12"
          md="4"
          class="title text-center d-flex align-center justify-center"
          :class="item.project_cover == null ? 'primary--text' : 'white--text'"
        >
          {{ item.category }}
        </v-col>
        <v-col xs="12" md="4" class="text-right">
          <v-btn
            class="border-radius-12 shadow-none"
            min-width="130px"
            :class="item.project_cover == null ? 'normal-btn' : 'project_cover_btn'"
            :style="item.project_cover == null ? 'border: 1px solid #BEBEBE;background: #EEEEEE;' : 'background: rgba(134, 194, 255, 0.36);border: 1.4px solid #FFFFFF;color:#FFFFFF !important;'"
          >
            {{ item.status }}
          </v-btn>
        </v-col>
      </v-row>
      <div class="d-flex justify-center align-center">
          <span v-for="(tag, index) in item.tag" :key="index" class="custom-techknowlogy px-4 py-0 d-flex align-center mb-2" style="width: fit-content; float: left;">{{ tag.name }}</span>
      </div>
    </v-card>
  </div>
</template>
<script>
export default {
  props: ['data'],
  methods: {
    getProjectCover(item) {
      if (item == null) {
        return ''
      } else if (item.type == 'color') {
        return 'background: ' + item.name
      } else if (item.type == 'upload' || item.type == 'img') {
        return (
          'background-image: url(' +
          item.name +
          ');background-repeat: no-repeat;background-size: cover;background-position: center center;object-fit: cover;'
        )
      }
    },
  },
}
</script>