<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list-item class="text-center mt-2">
        <v-list-item-content class="py-0">
          <v-list-item-title class="title">
            <img src="~/assets/img/mlogo.png" class="text-center" height="60" />
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list>
        <v-list-item
          v-if="!item.subTtems"
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
        <!-- <v-list-group
            v-else
            :key="(item, i) in items"
            no-action
        >
            <template v-slot:activator>
               <v-list-tile>
                 <v-list-tile-content>
                   <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                 </v-list-tile-content>
               </v-list-tile>
             </template>

            <v-list-tile
                v-for="subitem in item.subTtems"
                :to="subitem.to"
                :key="subitem.title"
            >
                <v-list-tile-title v-text="subitem.title" />
            </v-list-tile>

        </v-list-group> -->
        <v-list-group
          v-else
          :for="(item, i) in items"
          :key="i"
          :value="false"
          :prepend-icon="item.icon"
          @click="marker = !marker"
          :append-icon="marker ? 'mdi-chevron-up' : 'mdi-chevron-right'"
        >
          <template v-slot:activator>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </template>

          <v-list-item
            v-for="subitem in item.subTtems"
            :to="subitem.to"
            :key="subitem.id"
            class="pl-13"
          >
            <v-list-item-action>
              <v-icon>{{ subitem.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="subitem.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-btn icon size="28" @click.stop="drawer = !drawer">
        <v-icon>mdi-text</v-icon>
      </v-btn>
      <div class="subtitle-1">{{ headerTitle }}</div>
      <v-spacer class="text-center justify-center mt-2 mx-2">
        <v-text-field
          outlined
          dense
          rounded
          append-icon="mdi-magnify"
          placeholder="Search someting were"
          hide-details
          class="my-sm-0 my-3 mx-auto sm-d-none"
          style="max-width: 300px"
        >
        </v-text-field>
      </v-spacer>

      <!-- <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="200"
      :nudge-left="200"
      :offset-overflow="true"
      :position-x="5000"
      :position-y="150"
      :transition="true"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="indigo"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Menu as Popover
        </v-btn>
      </template>

      <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <img
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt="John"
              >
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>John Leider</v-list-item-title>
              <v-list-item-subtitle>Founder of Vuetify</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn
                :class="fav ? 'red--text' : ''"
                icon
                @click="fav = !fav"
              >
                <v-icon>mdi-heart</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list>
          <v-list-item>
            <v-list-item-action>
              <v-switch
                v-model="message"
                color="purple"
              ></v-switch>
            </v-list-item-action>
            <v-list-item-title>Enable messages</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-action>
              <v-switch
                v-model="hints"
                color="purple"
              ></v-switch>
            </v-list-item-action>
            <v-list-item-title>Enable hints</v-list-item-title>
          </v-list-item>
        </v-list>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            text
            @click="menu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            color="primary"
            text
            @click="menu = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-menu> -->
      <!-- Message Start -->
      <v-menu
        v-model="message_menu"
        :close-on-content-click="false"
        :nudge-width="350"
        :nudge-left="290"
        :nudge-bottom="2"
        offset-y
        :transition="true"
        max-width="350"
        min-width="350"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="black"
            dark
            v-bind="attrs"
            v-on="on"
            icon
            class="white mr-5 btn-shadow"
          >
            <v-badge
              v-if="notificationUnseen > 0"
              :content="notificationUnseen"
              class="badge-notification"
              color="#34495E"
            ></v-badge>
            <v-icon size="24">mdi-email-outline</v-icon>
          </v-btn>
        </template>

        <div style="width: 100%">
          <img
            src="~/assets/img/arrow-up.svg"
            alt=""
            style="position: relative; top: 8px; left: 285px;z-index:99;"
          />
        </div>
        <v-card id="notification" class="card-shadow card-border">
          <v-list>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title
                  class="font-weight-regular subtitle-1 text-center"
                  >10 new messages</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list
            three-line
            class="pa-0 custom-scrollbar"
            style="overflow-y: scroll; height: 350px"
          >
            <template v-for="(notification, index) in notification">
              <v-divider v-if="index != 0" :key="index"></v-divider>

              <v-list-item
                :key="notification.id"
                :to="notification.link"
                :class="notification.seen ? '' : 'light-blue lighten-5'"
                @click="seenCall(notification.id)"
              >
                <!-- class="green"
                  max-height="20px"
                  max-width="20px"
                  min-width="20px"
                  style="margin-top: 20px" -->
                <v-list-item-avatar
                  class="rounded"
                  max-height="60px"
                  max-width="60px"
                  min-width="60px"
                  height="60px"
                  width="60px"
                >
                  <img
                    src="~/assets/img/user-img.png"
                    class="text-center"
                    height="60"
                  />
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title
                    v-html="notification.title"
                    class="font-weight-medium mb-0"
                  ></v-list-item-title>
                  <v-list-item-subtitle
                    v-html="notification.body"
                  ></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>
          <v-divider></v-divider>
          <v-list class="py-0 my-0">
            <v-list-item @click="seeMore()" class="py-3 text-center">
              <v-list-item-content>
                <v-list-item-title class="primary--text"
                  >View All Message</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>

      <v-menu
        v-model="menu"
        :close-on-content-click="false"
        :nudge-left="290"
        :nudge-bottom="2"
        offset-y
        :transition="true"
        max-width="350"
        min-width="350"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="black"
            dark
            v-bind="attrs"
            v-on="on"
            icon
            class="white mr-5 btn-shadow"
          >
            <v-badge
              v-if="notificationUnseen > 0"
              :content="notificationUnseen"
              class="badge-notification"
              color="#34495E"
            ></v-badge>
            <v-icon size="24">mdi-bell-outline</v-icon>
          </v-btn>
        </template>
        <!-- style="clip-path: polygon(78% 3%, 80% 0, 85% 3%, 100% 3%, 100% 100%, 100% 100%, 0 100%, 0 2%);" -->
        <div style="width: 100%">
          <img
            src="~/assets/img/arrow-up.svg"
            alt=""
            style="position: relative; top: 8px; left: 285px;z-index:99;"
          />
        </div>
        <v-card id="notification" class="card-shadow card-border">
          <v-list>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title
                  class="font-weight-regular subtitle-1 text-center"
                  >1 new notification</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list
            three-line
            class="pa-0 custom-scrollbar"
            style="overflow-y: scroll; height: 350px"
          >
            <template v-for="(notification, index) in notification">
              <v-divider v-if="index != 0" :key="index"></v-divider>

              <v-list-item
                :key="notification.id"
                :to="notification.link"
                :class="notification.seen ? '' : 'light-blue lighten-5'"
                @click="seenCall(notification.id)"
              >
                <!-- class="green"
                  max-height="20px"
                  max-width="20px"
                  min-width="20px"
                  style="margin-top: 20px" -->
                <v-list-item-avatar
                  class="rounded"
                  max-height="60px"
                  max-width="60px"
                  min-width="60px"
                  height="60px"
                  width="60px"
                >
                  <img
                    src="~/assets/img/user-img.png"
                    class="text-center"
                    height="60"
                  />
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title
                    v-html="notification.title"
                    class="font-weight-medium mb-0"
                  ></v-list-item-title>
                  <v-list-item-subtitle
                    v-html="notification.body"
                  ></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>
          <v-divider></v-divider>
          <v-list class="py-0 my-0">
            <v-list-item @click="seeMore()" class="py-3 text-center">
              <v-list-item-content>
                <v-list-item-title class="primary--text"
                  >View All Notification</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
      <!-- Notification End -->
      <!-- User link Start -->
      <v-menu
        v-model="user_menu"
        :close-on-content-click="false"
        :nudge-width="150"
        :nudge-bottom="10"
        offset-y
        max-width="155"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="white"
            dark
            v-bind="attrs"
            v-on="on"
            icon
            class="v-btn-custom-header"
          >
            <v-img
              :src="require('../assets/img/user-img.png')"
              class="rounded-circle mr-3"
              width="40"
              height="40"
            ></v-img>
            <!-- <v-avatar width="40" height="40">
              <img v-if="profile.photo" :src="profile.photo.img_url" />
              <div
                v-else
                class="white--text d-flex justify-center align-center"
                style="height: 100%; width: 100%; background-color: #fb855e"
              >
                <span
                  v-if="profile.first_name && profile.surname"
                  class="subtitle-1"
                >
                  {{ profile.first_name.charAt(0).toUpperCase()
                  }}{{ profile.surname.charAt(0).toUpperCase() }}
                </span>
                <span v-else-if="profile.first_name" class="subtitle-1">
                  {{ profile.first_name.charAt(0).toUpperCase() }}
                </span>
                <span v-else-if="profile.surname" class="subtitle-1"
                  >{{ profile.surname.charAt(0).toUpperCase() }}
                </span>
              </div>
            </v-avatar> -->
            <h4 class="mr-5 sm-d-none" style="color: #555555">Hi, Shuvo</h4>
          </v-btn>
        </template>

        <v-card>
          <v-list>
            <v-list-item to="/setting">
              <v-list-item-action>
                <v-icon>mdi-tune-variant</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Setting</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <!-- <v-divider></v-divider> -->
            <!-- @click="logout" -->
            <v-list-item>
              <v-list-item-action>
                <v-icon>mdi-logout</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Logout</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
      <!-- <div>
        <div><span class="fs-12">shuvoroy@gmail.com</span></div>
      </div> -->
      <!-- Notification End -->
    </v-app-bar>
    <v-main
      :style="{ backgroundImage: `url(${bg})` }"
      style="background-position: center"
    >
      <!-- <img src="@/assets/img/bg.png" alt=""> -->
      <v-container :fluid="false">
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      marker:false,
      bg: require('@/assets/img/bg.png'),
      notification: [
        {
          id: 1,
          user_id: 2,
          title: 'New Staff Added',
          body: 'New Staff Muhammad Jamil Added! Find Out More!',
          link: '/clientProfile/7',
          type: null,
          platfrom: 'Web',
          status: 0,
          seen: 1,
          seen_at: null,
          create_time: 1619089785,
          created_at: '2021-04-22T11:09:45.000000Z',
          updated_at: '2021-04-22T11:09:45.000000Z',
          deleted_at: null,
        },
        {
          id: 2,
          user_id: 2,
          title: 'New Staff Added',
          body: 'New Staff Find Out More!',
          link: '/clientProfile/7',
          type: null,
          platfrom: 'Web',
          status: 0,
          seen: 1,
          seen_at: null,
          create_time: 1619089785,
          created_at: '2021-04-22T11:09:45.000000Z',
          updated_at: '2021-04-22T11:09:45.000000Z',
          deleted_at: null,
        },
        {
          id: 3,
          user_id: 2,
          title: 'New Staff Added',
          body: 'New Staff Muhammad Jamil Added! Find Out More!',
          link: '/clientProfile/7',
          type: null,
          platfrom: 'Web',
          status: 0,
          seen: 1,
          seen_at: null,
          create_time: 1619089785,
          created_at: '2021-04-22T11:09:45.000000Z',
          updated_at: '2021-04-22T11:09:45.000000Z',
          deleted_at: null,
        },
        {
          id: 4,
          user_id: 2,
          title: 'New Staff Added',
          body: 'New Staff Muhammad Jamil Added',
          link: '/clientProfile/7',
          type: null,
          platfrom: 'Web',
          status: 0,
          seen: 1,
          seen_at: null,
          create_time: 1619089785,
          created_at: '2021-04-22T11:09:45.000000Z',
          updated_at: '2021-04-22T11:09:45.000000Z',
          deleted_at: null,
        },
      ],
      message_menu: false,
      user_menu: false,
      menu: false,
      notificationUnseen: 1,
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-view-dashboard-outline',
          title: 'Dashboard',
          to: '/',
        },
        {
          icon: 'mdi-dog-service',
          title: 'Service',
          to: '/service',
        },
        // {
        //   icon: 'mdi-package-variant-closed',
        //   title: 'Package',
        //   to: '/package',
        // },
        {
          icon: 'mdi-package-variant-closed',
          title: 'Package',
          to: '/package',
          subTtems : [
            {
              icon: 'mdi-cart',
              title: 'Buy Now',
              to: '/package',
            },
            {
              icon: 'mdi-package-variant-closed',
              title: 'My Product',
              to: '/my-product',
            },
          ]
        },
        {
          icon: 'mdi-message-draw',
          title: 'Feedback',
          to: '/feedback',
        },
        {
          icon: 'mdi-newspaper',
          title: 'Newsfeed',
          to: '/newsfeed',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
    }
  },
  computed: {
    headerTitle: {
      get() {
        return this.$store.state.common.headerTitle
      },
    },
  },
}
</script>
