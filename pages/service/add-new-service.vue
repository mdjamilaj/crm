<template>
  <div>
    <v-row>
      <v-col xs="12" sm="6" md="6" class="mt-5">
        <v-text-field
          outlined
          dense
          rounded
          placeholder="Project Name"
          hide-details
        >
        </v-text-field>
      </v-col>
      <v-col xs="12" sm="6" md="6" class="mt-5">
        <v-menu
          v-model="menu"
          :close-on-content-click="false"
          :nudge-left="200"
          :nudge-bottom="2"
          offset-y
          :transition="true"
          max-width="450"
          min-width="450"
          content-class="shadow-none"
        >
          <template v-slot:activator="{ on, attrs }">
            <div v-bind="attrs" v-on="on">
              <v-btn class="mx-2 btn-shadow border_color_aria" fab small>
                <v-icon class="aria_expanded_true"> mdi-plus </v-icon>
              </v-btn>
              <span class="aria_expanded_true">Project Preferences</span>
            </div>
          </template>
          <!-- style="clip-path: polygon(78% 3%, 80% 0, 85% 3%, 100% 3%, 100% 100%, 100% 100%, 0 100%, 0 2%);" -->
          <div style="width: 100%">
            <img
              src="~/assets/img/arrow-up.svg"
              alt=""
              style="position: relative; top: 8px; left: 200px; z-index: 99"
            />
          </div>
          <v-card class="card-shadow card-border pa-5">
            <v-tabs v-model="tab" hide-slider>
              <v-tab key="1"> Project Profile </v-tab>
              <v-tab key="2"> Project Cover </v-tab>
              <v-tab key="3"> Tag </v-tab>
            </v-tabs>
            <v-tabs-items v-model="tab">
              <v-tab-item key="1">
                <v-card class="mt-3 shadow-none">
                  <v-tabs
                    v-model="project_profile.tab"
                    centered
                    active-class="project_profile_tab_btn_active"
                    hide-slider
                    slider-color="white"
                  >
                    <v-tab key="1" class="project_profile_tab_btn">
                      <v-icon
                        size="18"
                        class="mr-1"
                        v-if="project_profile.select_emoji == ''"
                        >mdi-emoticon-angry-outline</v-icon
                      >
                      <span v-else>{{ project_profile.select_emoji }}</span>
                      Icon
                    </v-tab>
                    <v-tab key="2" class="project_profile_tab_btn">
                      <v-icon size="18" class="mr-1">mdi-image-outline</v-icon>
                      Image
                    </v-tab>
                    <v-tab key="3" class="project_profile_tab_btn">
                      <v-icon size="18" class="mr-1"
                        >mdi-cloud-upload-outline</v-icon
                      >
                      Upload
                    </v-tab>
                  </v-tabs>
                  <v-tabs-items v-model="project_profile.tab">
                    <v-tab-item key="1">
                      <v-card class="custom_emoji_parent">
                        <VEmojiPicker @select="selectEmoji" emojisByRow="8" />
                      </v-card>
                    </v-tab-item>
                    <v-tab-item key="2">
                      <v-card class="pt-4 shadow-none">
                        <v-row class="ma-0">
                          <v-col
                            md="3"
                            class="pa-2 rounded-lg"
                            v-for="index in 6"
                            :key="index"
                          >
                            <input
                              type="radio"
                              :id="index"
                              :value="index"
                              v-model="project_profile.selected_img"
                              style="display: none"
                              class="image_select_radio"
                            />
                            <label :for="index"
                              ><img
                                src="~/assets/img/project_profile_image.svg"
                                class="text-center mx-auto rounded-lg cursor-pointer"
                                height="80"
                              />
                              <v-icon class="check_icon_img"
                                >mdi-check-circle-outline</v-icon
                              >
                            </label>
                          </v-col>
                        </v-row>
                      </v-card>
                    </v-tab-item>
                    <v-tab-item key="3">
                      <v-card class="pt-4 shadow-none">
                        <div
                          class="text-none ma-2 d-flex align-center upload-img-custom"
                          round
                          depressed
                          :loading="isSelecting"
                          @click="onButtonClick"
                        >
                          <div>
                            <v-icon> mdi-cloud-upload-outline </v-icon> <br>
                            {{ buttonText }}
                          </div>
                        </div>
                        <input
                          ref="uploader"
                          class="d-none"
                          type="file"
                          accept="image/*"
                          @change="onFileChanged"
                        />
                      </v-card>
                    </v-tab-item>
                  </v-tabs-items>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-card>
        </v-menu>
      </v-col>
    </v-row>
    <v-row>
      <v-col xs="6" sm="3" md="3">
        <v-card>
          <div>
            <v-icon>mdi-check-circle-outline</v-icon>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { VEmojiPicker } from 'v-emoji-picker'
export default {
  components: {
    VEmojiPicker,
  },
  data() {
    return {
      tab: 0,
      project_profile: {
        tab: 0,
        select_emoji: '',
        selected_img: '',
        selectedFile: null,
        isSelecting: false
      },
    }
  },
  computed: {
    buttonText() {
      return this.project_profile.selectedFile ? this.project_profile.selectedFile.name : 'Upload Image'
    }
  },
  methods: {
    selectEmoji(emoji) {
      this.project_profile.select_emoji = emoji.data
    },
    onButtonClick() {
      this.project_profile.isSelecting = true
      window.addEventListener('focus', () => {
        this.isSelecting = false
      }, { once: true })

      this.$refs.uploader.click()
    },
    onFileChanged(e) {
      this.project_profile.selectedFile = e.target.files[0]
    }
  },
}
</script>