<template>
  <div>
    <h2 class="primary--text">Chat</h2>
    <v-row>
      <v-col xs="12" sm="4" md="3" v-if="chat_list_view">
        <v-card class="card-shadow">
          <div
            class="d-flex align-center justify-space-between font-weight-bold justify-center mx-2 pa-0"
          >
            <v-text-field
              v-model="last_name"
              class="pa-0 mt-0 inner-filed-border-none"
              placeholder="Search"
              hide-details
              flat
              solo
            ></v-text-field>
            <v-icon @click="chat_list_view = false" color="grey">
              mdi-close-circle
            </v-icon>
          </div>
          <v-divider></v-divider>

          <v-list subheader class="mt-5">
            <!-- <v-subheader>Recent chat</v-subheader> -->

            <v-list-item v-for="chat in recent" :key="chat.title">
              <v-list-item-avatar>
                <v-img :alt="`${chat.title} avatar`" :src="chat.avatar"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-text="chat.title"></v-list-item-title>
              </v-list-item-content>

              <v-list-item-icon>
                <v-icon :color="chat.active ? 'deep-purple accent-4' : 'grey'">
                  mdi-message-outline
                </v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
      <v-col
        xs="12"
        sm="8"
        :md="chat_list_view == false && admin_view == false ? 12 : 9"
      >
        <v-card class="card-shadow">
          <v-card-title class="font-weight-bold justify-center">
            <v-row
              class="mx-0 my-0 px-0 py-0 justify-center"
              justify="center"
              justify-lg="space-between"
              style="align-items: center"
            >
              <div class="d-flex flex-wrap font-weight-medium text-center">
                <v-icon class="online-active-icon" color="green"
                  >mdi-circle-medium</v-icon
                >
                <v-avatar color="#B0E7FF" class="white--text" size="50">
                  <!-- <img
                    src="~/assets/img/user-img.png"
                    class="text-center rounded"
                /> -->
                  D
                </v-avatar>
                <div class="ml-3 subtitle-1 text-left">
                  Dipro Debnath
                  <span class="ml-2 grey--text font-weight-light">Admin</span>
                  <div class="subtitle-2 font-weight-regular grey--text">
                    Online
                  </div>
                </div>
              </div>
              <div class="d-flex align-end flex-column">
                <v-icon @click="admin_view = true">
                  mdi-dots-horizontal
                </v-icon>
              </div>
            </v-row>
          </v-card-title>
          <v-divider></v-divider>
        </v-card>
      </v-col>
      <v-col xs="12" sm="4" md="3" v-if="admin_view">
        <v-card class="card-shadow">
          <div
            class="d-flex align-center justify-space-between font-weight-bold justify-center mx-2 py-2"
          >
            <v-icon @click="chat_list_view = false" color="grey">
              mdi-close-circle
            </v-icon>
          </div>
          <v-card-text>
            <div class="text-center">
              <v-avatar
                color="#B0E7FF"
                class="white--text text-center"
                size="70"
                style="font-size: 30px"
              >
                <!-- <img
                    src="~/assets/img/user-img.png"
                    class="text-center rounded"
                /> -->
                D
              </v-avatar>
              <h4 class="subtitle-1 mt-2 font-weight-bold">Dipro Debnath</h4>
              <p>Admin</p>
            </div>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn color="primary" class="normal-btn" text> Share Contacts </v-btn>

              <v-spacer></v-spacer>

              <v-btn icon @click="show = !show">
                <v-icon>{{
                  show ? 'mdi-chevron-up' : 'mdi-chevron-down'
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                  I'm a thing. But, like most politicians, he promised more than
                  he could deliver. You won't have time for sleeping, soldier,
                  not with all the bed making you'll be doing. Then we'll go
                  with that data file! Hey, you add a one and two zeros to that
                  or we walk! You're going to do his laundry? I've got to find a
                  way to escape.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chat_list_view: false,
      admin_view: true,
      show: false,
      recent: [
        {
          active: true,
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Web Development',
        },
        {
          active: true,
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Mobile App Development',
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'CRM/ERM/POS Development',
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'UI/UX Design',
        },
        {
          active: true,
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Web Development',
        },
        {
          active: true,
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Mobile App Development',
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'CRM/ERM/POS Development',
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'UI/UX Design',
        },
      ],
    }
  },
}
</script>