<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      
    </v-col>
  </v-row>
</template>

<script>
export default {
  head() {
    return {
      title: "Dashboard",
    };
  },
  beforeMount() {
    this.$store.commit('common/setHeaderTitle', '')
  },
}
</script>
