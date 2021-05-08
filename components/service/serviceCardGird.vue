<template>
  <div>
    <v-row>
      <v-col xs="12" sm="6" md="4" v-for="(item, index) in data" :key="index">
        <v-card
          class="br-16 shadow-none border-solid-sm mt-5 pa-8"
          min-height="130"
          :style="getProjectCover(item.project_cover)"
        >
          <v-row class="text-left">
            <v-col xs="12" sm="12" md="12">
              <v-list class="py-0 bg-none">
                <v-list-item class="px-0">
                  <v-list-item-avatar>
                    <img src="~/assets/img/user-img.png" />
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title
                      class="title"
                      :class="
                        item.project_cover == null
                          ? 'primary--text'
                          : 'white--text'
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
              sm="12"
              md="12"
              class="subtitle-1 text-center d-flex align-center font-weight-regular justify-start text-left pt-0"
              :class="
                item.project_cover == null ? 'primary--text' : 'white--text'
              "
            >
              {{ item.category }}
            </v-col>
          </v-row>
          <div class="d-flex flex-wrap justify-start align-left">
            <v-chip
              small
              v-for="(tag, index) in item.tag"
              :key="index"
              class="mr-2 mt-2 primary--text"
            >
              {{ tag.name }}
            </v-chip>
          </div>
          <v-btn
            class="border-radius-12 mt-4 shadow-none"
            min-width="130px"
            :class="
              item.project_cover == null ? 'normal-btn' : 'project_cover_btn'
            "
            :style="
              item.project_cover == null
                ? 'border: 1px solid #BEBEBE;background: #EEEEEE;'
                : 'background: rgba(134, 194, 255, 0.36);border: 1.4px solid #FFFFFF;color:#FFFFFF !important;'
            "
          >
            {{ item.status }}
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
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
          'background-image: linear-gradient(to bottom, rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.6) 100%),url(' +
          item.name +
          ');background-repeat: no-repeat;background-size: cover;background-position: center center;object-fit: cover;'
        )
      }
    },
  },
}
</script>