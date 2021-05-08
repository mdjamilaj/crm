<template>
  <div>
    <v-btn
      class="normal-btn border-radius-12 shadow-none border-solid-sm"
      style="background: white"
      min-width="130px"
      @click="$router.push('/service/add-new-service');"
    >
      <v-icon size="18" class="mr-2">mdi-plus-circle-outline</v-icon> Add New
    </v-btn>
    <v-divider class="my-5"></v-divider>
    <div class="d-flex flex-wrap align-center justify-space-between">
      <div class="d-flex flex-wrap align-center">
        <v-btn
          class="mr-8 normal-btn border-radius-12 shadow-none border-solid-sm"
          style="background: white"
          min-width="130px"
        >
          All Dates
        </v-btn>
        <v-menu
          class="border-radius-12"
          :close-on-content-click="false"
          :nudge-bottom="5"
          offset-y
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="mr-8 normal-btn border-radius-12 shadow-none border-solid-sm"
              style="background: white"
              v-bind="attrs"
              v-on="on"
            >
              Project Type
              <v-icon size="24" style="color: rgb(177 172 172)"
                >mdi-menu-down</v-icon
              >
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              style="min-height: 32px !important"
              v-for="(item, index) in items"
              :key="index"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu
          class="border-radius-12"
          :close-on-content-click="false"
          :nudge-bottom="5"
          offset-y
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="xs-mt-2 normal-btn border-radius-12 shadow-none border-solid-sm"
              style="background: white"
              v-bind="attrs"
              v-on="on"
            >
              Project Status
              <v-icon size="24" style="color: rgb(177 172 172)"
                >mdi-menu-down</v-icon
              >
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              style="min-height: 32px !important"
              v-for="(item, index) in items"
              :key="index"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <div class="d-flex flex-wrap align-center xs-mt-2">
        <v-btn @click="view_type = 'list'" style="background: white" class="mr-5 btn-shadow normal-btn pa-2" icon><v-icon size="18" class="ma-3" style="color:#666666;">mdi-format-list-bulleted-square</v-icon></v-btn>
        <v-btn @click="view_type = 'gird'" style="background: white" class="btn-shadow normal-btn pa-2" icon><v-icon size="18" class="ma-3" style="color:#666666;">mdi-table-eye</v-icon></v-btn>
      </div>
    </div>
    <div class="mt-10">
        <service-card-list :data="data" v-if="view_type == 'list'"/>
        <service-card-gird :data="data" v-if="view_type == 'gird'"/>
    </div>
  </div>
</template>

<script>
import serviceCardList from '@/components/service/serviceCardList'
import serviceCardGird from '@/components/service/serviceCardGird'
export default {
  components: {serviceCardList, serviceCardGird},
  data() {
    return {
      view_type: 'list',
      items: [
        { title: 'Active' },
        { title: 'Panding' },
        { title: 'Draft' },
        { title: 'Runing Project' },
        { title: 'Arehive' },
      ],
      data: [
          {'title': 'Jacob', project_cover: {type:'icon','name': '🤡'},  project_cover: {type:'img','name': 'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80'}, 'category': 'Ui/Ux Design', 'status': 'Active', tag: [{name:'Android'}, {name:'IOS App'}] },
          {'title': 'Breathe App', project_cover: {type:'color','name': 'rgba(52, 73, 94, 1)'}, 'category': 'App Development', 'status': 'Active', tag: [{name:'Android'}, {name:'IOS App'}, {name:'Java Script'}] },
          {'title': 'CRM', project_cover: {type:'img','name': 'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80'}, 'category': 'Wordpress', 'status': 'Active', tag: [{name:'Android'}, {name:'IOS App'}] },
          {'title': 'Breathe App', project_cover: null, 'category': 'Digital Marketing', 'status': 'Active', tag: [{name:'Android'}, {name:'IOS App'}, {name:'Search engine optimization'}] },
      ]
    }
  },
}
</script>