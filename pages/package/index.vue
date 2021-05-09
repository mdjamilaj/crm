<template>
  <div>
    <div class="center-div">
      <v-img
        :src="require('@/assets/img/package_layer1.png')"
        class="mr-3"
      ></v-img>
      <v-btn :to="'/package/package-list'" class="primary btn-shadow mt-10 btn-border scope-btn" min-height="50">Buy New</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Package",
    };
  },
  beforeMount() {
    this.$store.commit('common/setHeaderTitle', 'Package')
  },
}
</script>

<style scoped>
.center-div{
    width: 400px;
    text-align: center;
}
.scope-btn{
  min-width: 300px !important;
}
.scope-btn span, .scope-btn{
  text-transform: unset !important;
}
@media screen and (max-width: 500px) {
  .center-div{
    width: 250px;
    text-align: center;
}
.scope-btn{
  min-width: 250px !important;
}
}
</style>