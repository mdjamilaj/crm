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
          :close-on-content-click="false"
          :nudge-left="215"
          :nudge-bottom="2"
          offset-y
          :transition="true"
          max-width="480"
          min-width="480"
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
              style="position: relative; top: 8px; left: 215px; z-index: 99"
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
                          @click="onButtonClick"
                        >
                          <div>
                            <v-icon> mdi-cloud-upload-outline </v-icon> <br />
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
              <v-tab-item key="2">
                <v-card class="mt-3 shadow-none">
                  <v-tabs
                    v-model="project_cover.tab"
                    centered
                    active-class="project_profile_tab_btn_active"
                    hide-slider
                    slider-color="white"
                  >
                    <v-tab key="1" class="project_profile_tab_btn">
                      <v-icon size="18" class="mr-1">mdi-select-color</v-icon>
                      Color
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
                  <v-tabs-items v-model="project_cover.tab">
                    <v-tab-item key="1">
                      <v-card class="shadow-none pt-4">
                        <v-row class="ma-0">
                          <v-col
                            md="3"
                            v-for="(color, index) in colors"
                            class="pa-2 rounded-lg"
                            :key="index"
                          >
                            <input
                              type="radio"
                              :id="color"
                              :value="color"
                              v-model="project_cover.select_color"
                              style="display: none"
                              class="image_select_radio"
                            />
                            <label :for="color">
                              <div
                                class="project_profile_custom_color_div cursor-pointer"
                                :style="'background: ' + color"
                              ></div>
                              <v-icon class="check_icon_img"
                                >mdi-check-circle-outline</v-icon
                              >
                            </label>
                          </v-col>
                        </v-row>
                      </v-card>
                    </v-tab-item>
                    <v-tab-item key="2">
                      <v-card class="pt-4 shadow-none">
                        <v-row class="ma-0">
                          <v-col
                            md="3"
                            class="pa-2 rounded-lg"
                            v-for="index in 3"
                            :key="index"
                          >
                            <input
                              type="radio"
                              :id="index + 9"
                              :value="index"
                              v-model="project_cover.selected_img"
                              style="display: none"
                              class="image_select_radio"
                            />
                            <label :for="index + 9"
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
                          @click="onButtonClickCover"
                        >
                          <div>
                            <v-icon> mdi-cloud-upload-outline </v-icon> <br />
                            {{ buttonTextCover }}
                          </div>
                        </div>
                        <input
                          ref="uploader"
                          class="d-none"
                          type="file"
                          accept="image/*"
                          @change="onFileChangedCover"
                        />
                      </v-card>
                    </v-tab-item>
                  </v-tabs-items>
                </v-card>
              </v-tab-item>
              <v-tab-item key="3">
                <v-card class="shadow-none">
                  <!-- <v-tabs
                    v-model="project_profile.tab"
                    centered
                    active-class="project_profile_tab_btn_active"
                    hide-slider
                    slider-color="white"
                  >
                    <v-tab key="1" class="project_profile_tab_btn">
                      Web Development
                    </v-tab>
                    <v-tab key="2" class="project_profile_tab_btn">
                      Design
                    </v-tab>
                    <v-tab key="3" class="project_profile_tab_btn">
                      Marketing
                    </v-tab>
                  </v-tabs>
                  <v-tabs-items v-model="project_profile.tab">
                    <v-tab-item key="1"> -->
                      <v-card class="shadow-none pt-4">
                        <v-combobox
                          multiple
                          outlined
                          v-model="tags"
                          placeholder="Web Development tags here..."
                          chips
                          append-icon
                          hide-details
                          deletable-chips
                          class="tag-input py-0 elevation-none-inner-div custom-combox"
                          :search-input.sync="search"
                          @keyup.tab="updateTags"
                          @paste="updateTags"
                          solo
                        >
                        </v-combobox>
                      </v-card>
                    <!-- </v-tab-item>
                    <v-tab-item key="2">
                      <v-card class="pt-4 shadow-none"> </v-card>
                    </v-tab-item>
                    <v-tab-item key="3">
                      <v-card class="pt-4 shadow-none"> </v-card>
                    </v-tab-item>
                  </v-tabs-items> -->
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-card>
        </v-menu>
      </v-col>
    </v-row>
    <category-list />
    <subcategory-list />
    <subsubcategory-list />
    <text-fields />
  </div>
</template>

<script>
import { VEmojiPicker } from 'v-emoji-picker'
import categoryList from '@/components/service/categoryList'
import subcategoryList from '@/components/service/subcategoryList'
import subsubcategoryList from '@/components/service/subsubcategoryList'
import textFields from '@/components/service/textFields'
export default {
  components: {
    VEmojiPicker,
    categoryList,
    subcategoryList,
    subsubcategoryList,
    textFields,
  },
  data() {
    return {
      colors: ['#126E82', '#2C3E50', '#95A5A6'],
      tab: 0,
      project_profile: {
        tab: 0,
        select_emoji: '',
        selected_img: '',
        selectedFile: null,
      },
      project_cover: {
        tab: 0,
        select_color: '',
        selected_img: '',
        selectedFile: null,
      },
      tags: [ "CMS", "Html/Css", "Web", "javascript", "Ui", "UX", "Graphic Design", "product", "Affiliate", "Custom marketing project", "Social media marketing", "Search engine optimization"],
    }
  },
  computed: {
    buttonText() {
      return this.project_profile.selectedFile
        ? this.project_profile.selectedFile.name
        : 'Upload Image'
    },
    buttonTextCover() {
      return this.project_cover.selectedFile
        ? this.project_cover.selectedFile.name
        : 'Upload Image'
    },
  },
  methods: {
    updateTags() {
      this.$nextTick(() => {
        this.tags.push(...this.search.split(","));
        this.$nextTick(() => {
          this.search = "";
        });
      });
    },
    selectEmoji(emoji) {
      this.project_profile.select_emoji = emoji.data
    },
    onButtonClick() {
      this.$refs.uploader.click()
    },
    onFileChanged(e) {
      this.project_profile.selectedFile = e.target.files[0]
    },
    onButtonClickCover() {
      this.$refs.uploader.click()
    },
    onFileChangedCover(e) {
      this.project_cover.selectedFile = e.target.files[0]
    },
  },
}
</script>