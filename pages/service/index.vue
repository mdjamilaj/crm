<template>
  <div>
    <div class="center-div">
      <v-img
        :src="require('@/assets/img/service_layer1.svg')"
        class="mr-3"
        width="300"
      ></v-img>
      <v-btn :to="'/service/add-new-service'" class="primary btn-shadow mt-5 btn-border" min-width="200">Add Service</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  beforeMount() {
    this.$store.commit('common/setHeaderTitle', 'Service')
  },
}
</script>

<style scoped>
.center-div{
    width: 300px;
    text-align: center;
}
</style>