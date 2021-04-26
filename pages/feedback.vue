<template>
  <div>
    <h1 class="font-weight-regular">Feedback</h1>
    <v-card class="mt-8 card-shadow card-border">
      <v-row class="mx-5">
        <v-col class="px-8 py-5" xs="12" sm="4" md="4">
          <h4 class="font-weight-regular">Client Communication Level</h4>
          <div class="font-weight-regular primary--text d-flex align-center">
            <v-icon color="primary" size="24">mdi-star-outline</v-icon>
            <div class="mt-1">4.5</div>
          </div>
        </v-col>
        <v-col class="px-8 py-5" xs="12" sm="4" md="4">
          <h4 class="font-weight-regular">Client Communication Level</h4>
          <div class="font-weight-regular primary--text d-flex align-center">
            <v-icon color="primary" size="24">mdi-star-outline</v-icon>
            <div class="mt-1">4.5</div>
          </div>
        </v-col>
        <v-col class="px-8 py-5" xs="12" sm="4" md="4">
          <h4 class="font-weight-regular">Client Communication Level</h4>
          <div class="font-weight-regular primary--text d-flex align-center">
            <v-icon color="primary" size="24">mdi-star-outline</v-icon>
            <div class="mt-1">4.5</div>
          </div>
        </v-col>
      </v-row>
    </v-card>
    <v-card class="mt-8 card-shadow card-border">
      <v-row class="mx-5">
        <v-col class="px-8 py-5" xs="12" sm="4" md="4">
          <v-select
            v-model="software"
            class="v-select-custom"
            :items="items"
            label="Software Development"
            dense
            solo
            hide-details="auto"
          ></v-select>
        </v-col>
        <v-col class="px-8 py-5" xs="12" sm="4" md="4">
          <v-select
            v-model="software"
            class="v-select-custom"
            :items="items"
            label="Software Development"
            dense
            solo
            hide-details="auto"
          ></v-select>
        </v-col>
        <v-col class="px-8 py-5" xs="12" sm="4" md="4">
          <v-select
            v-model="software"
            class="v-select-custom"
            :items="items"
            label="Software Development"
            dense
            solo
            hide-details="auto"
          ></v-select>
        </v-col>
      </v-row>
    </v-card>
    <v-card class="mt-8 card-shadow card-border pa-10">
      <div>
        <v-row>
          <v-col xs="6" md="6">
            <div class="d-flex justify-space-between">
              <div class="d-flex">
                <div>
                  <v-img
                    :src="require('../assets/img/user-img.png')"
                    class="rounded-circle"
                    width="50"
                    height="50"
                  ></v-img>
                </div>
                <div class="ml-4">
                  <h4>Sartoriallux</h4>
                  <span class="body-2">United States</span>
                </div>
              </div>
              <div><v-divider vertical></v-divider></div>
              <div
                class="font-weight-regular primary--text d-flex align-center"
              >
                <v-icon color="primary" size="24">mdi-star-outline</v-icon>
                <div class="mt-1">4.5</div>
              </div>
            </div>
          </v-col>
        </v-row>
        <div class="ma-10 mb-0 body-2">
          I am an early-stage startup founder with some engineering experience.
          I understand that market research and design come before building. I
          reached out to Masum after seeing his portfolio and knew I needed to
          work with him for my hi fidelity prototype. - Easy to work with -
          Overachiever - You will get more that what you asked for
        </div>
      </div>
      <v-divider class="my-10"></v-divider>
      <div>
        <v-row>
          <v-col xs="6" md="6">
            <div class="d-flex justify-space-between">
              <div class="d-flex">
                <div>
                  <v-img
                    :src="require('../assets/img/user-img.png')"
                    class="rounded-circle"
                    width="50"
                    height="50"
                  ></v-img>
                </div>
                <div class="ml-4">
                  <h4>Sartoriallux</h4>
                  <span class="body-2">United States</span>
                </div>
              </div>
              <div><v-divider vertical></v-divider></div>
              <div
                class="font-weight-regular primary--text d-flex align-center"
              >
                <v-icon color="primary" size="24">mdi-star-outline</v-icon>
                <div class="mt-1">4.5</div>
              </div>
            </div>
          </v-col>
        </v-row>
        <div class="ma-10 mb-0 body-2">
          I am an early-stage startup founder with some engineering experience.
          I understand that market research and design come before building. I
          reached out to Masum after seeing his portfolio and knew I needed to
          work with him for my hi fidelity prototype. - Easy to work with -
          Overachiever - You will get more that what you asked for
        </div>
      </div>
      <v-divider class="my-10"></v-divider>
      <div>
        <v-row>
          <v-col xs="6" md="6">
            <div class="d-flex justify-space-between">
              <div class="d-flex">
                <div>
                  <v-img
                    :src="require('../assets/img/user-img.png')"
                    class="rounded-circle"
                    width="50"
                    height="50"
                  ></v-img>
                </div>
                <div class="ml-4">
                  <h4>Sartoriallux</h4>
                  <span class="body-2">United States</span>
                </div>
              </div>
              <div><v-divider vertical></v-divider></div>
              <div
                class="font-weight-regular primary--text d-flex align-center"
              >
                <v-icon color="primary" size="24">mdi-star-outline</v-icon>
                <div class="mt-1">4.5</div>
              </div>
            </div>
          </v-col>
        </v-row>
        <div class="ma-10 mb-0 body-2">
          I am an early-stage startup founder with some engineering experience.
          I understand that market research and design come before building. I
          reached out to Masum after seeing his portfolio and knew I needed to
          work with him for my hi fidelity prototype. - Easy to work with -
          Overachiever - You will get more that what you asked for
        </div>
      </div>
      <v-divider class="my-10"></v-divider>
      <div>
        <v-row>
          <v-col xs="6" md="6">
            <div class="d-flex justify-space-between">
              <div class="d-flex">
                <div>
                  <v-img
                    :src="require('../assets/img/user-img.png')"
                    class="rounded-circle"
                    width="50"
                    height="50"
                  ></v-img>
                </div>
                <div class="ml-4">
                  <h4>Sartoriallux</h4>
                  <span class="body-2">United States</span>
                </div>
              </div>
              <div><v-divider vertical></v-divider></div>
              <div
                class="font-weight-regular primary--text d-flex align-center"
              >
                <v-icon color="primary" size="24">mdi-star-outline</v-icon>
                <div class="mt-1">4.5</div>
              </div>
            </div>
          </v-col>
        </v-row>
        <div class="ma-10 mb-0 body-2">
          I am an early-stage startup founder with some engineering experience.
          I understand that market research and design come before building. I
          reached out to Masum after seeing his portfolio and knew I needed to
          work with him for my hi fidelity prototype. - Easy to work with -
          Overachiever - You will get more that what you asked for
        </div>
      </div>
      <v-divider class="my-10"></v-divider>
    </v-card>
    <template>
      <div class="text-right mt-5 custom-pagination">
        <v-pagination v-model="page" :length="6"></v-pagination>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      software: 'Web Development',
      items: [
        'Web Development',
        'Mobile App Development',
        'CRM/ ERP/ POS Development',
        'Project Management',
      ],
    }
  },
}
</script>
