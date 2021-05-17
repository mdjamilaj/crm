<template>
  <v-app>
    <v-main
      :style="{ backgroundImage: `url(${bg})` }"
      style="background-position: center"
    >
      <nuxt />
    </v-main>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      bg: require('@/assets/img/bg.png'),
    }
  },
}
</script>
