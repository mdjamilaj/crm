<template>
  <div>
    <h2 class="primary--text">Chat</h2>
    <v-row class="mt-1">
      <v-col xs="12" sm="4" md="3" v-if="chat_list_view">
        <v-card class="card-shadow">
          <div
            class="d-flex align-center justify-space-between font-weight-bold justify-center mx-2 pa-0"
          >
            <v-text-field
              v-model="search"
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

            <v-list-item v-for="(chat, index) in recent" :key="index">
              <v-list-item-avatar>
                <v-img :alt="`${chat.title} avatar`" :src="chat.avatar"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-text="chat.title"></v-list-item-title>
              </v-list-item-content>

              <v-list-item-icon>
                <v-icon :color="chat.active ? '#31B8B6' : 'grey'">
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
        :md="
          chat_list_view == false && admin_view == false
            ? 12
            : chat_list_view == true && admin_view == true
            ? 6
            : 9
        "
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
                <v-menu
                  v-model="user_menu"
                  :close-on-content-click="true"
                  :nudge-left="120"
                  :nudge-bottom="2"
                  offset-y
                  :transition="true"
                  max-width="125"
                  min-width="125"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon v-bind="attrs" v-on="on">
                      mdi-dots-horizontal
                    </v-icon>
                  </template>

                  <v-card>
                    <v-list>
                      <v-list-item @click="admin_view = true">
                        <v-list-item-content>
                          <v-list-item-title>New Add</v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                      <!-- <v-divider></v-divider> -->
                      <!-- @click="logout" -->
                      <v-list-item @click="admin_view = true">
                        <v-list-item-content>
                          <v-list-item-title>Setting</v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </v-card>
                </v-menu>
              </div>
            </v-row>
          </v-card-title>
          <v-divider></v-divider>
          
          <v-card-text>

          </v-card-text>
          <v-card-actions>
            <div class="chat-text-area-box w-100">
              <div class="chat-text-area-box-inner-div d-flex align-center justify-space-between">
                <v-textarea
                  auto-grow
                  v-model="new_masseage"
                  flat
                  solo
                  class="chat-text-area"
                  placeholder="Type your massege here..."
                  rows="1"
                  row-height="15"
                  hide-details
                ></v-textarea>
              </div>
              <div class="chat-text-area-box-inner-div d-flex align-center justify-space-between" style="border-top: 1px solid #eae5e5;padding-top: 8px;">
                <div class="chat-icons">
                  <v-btn icon style="background: #f3f3f3">
                    <v-icon>mdi-link-variant</v-icon>
                  </v-btn>
                  <v-btn icon style="background: #f3f3f3">
                    <v-icon>mdi-microphone</v-icon>
                  </v-btn>
                  <v-btn icon style="background: #f3f3f3">
                    <v-icon>mdi-dots-horizontal</v-icon>
                  </v-btn>
                </div>
                <div class="chat-icons">
                  <v-btn :disabled="new_masseage == null || new_masseage == ''" tile icon style="background: #f3f3f3">
                    <v-icon color="#31B8B0">mdi-send</v-icon>
                  </v-btn>
                </div>
              </div>
            </div>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col xs="12" sm="4" md="3" v-if="admin_view">
        <v-card class="card-shadow">
          <div
            class="d-flex align-center justify-space-between font-weight-bold justify-center mx-2 py-2"
          >
            <v-icon @click="admin_view = false" color="grey">
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
            <v-card-text class="pa-0">
              <div class="d-flex justify-space-between align-center mt-8">
                <p class="font-weight-medium">Notification</p>
                <v-switch
                  class="mt-0"
                  color="#31B8B6"
                  v-model="notification"
                  inset
                ></v-switch>
              </div>
              <div class="d-flex justify-space-between align-center">
                <p class="font-weight-medium">Hide Conversation</p>
                <v-switch
                  class="mt-0"
                  color="#31B8B6"
                  v-model="hide_conversation"
                  inset
                ></v-switch>
              </div>
            </v-card-text>
            <v-card-actions @click="show = !show" class="cursor-pointer pa-0">
              <div class="font-weight-medium">Share Contact</div>

              <v-spacer></v-spacer>

              <v-btn icon>
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
      chat_list_view: true,
      admin_view: false,
      show: false,
      new_masseage: null,
      user_menu: false,
      search: null,
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