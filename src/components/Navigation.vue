<template>
  <v-bottom-navigation fixed class="d-flex d-md-none text-center">
    <v-btn icon v-scroll-to="{ el: '#product' }">
      <v-icon class="white--text">mdi-apps</v-icon>
      <span class="white--text">product</span>
    </v-btn>
    <v-btn icon v-scroll-to="{ el: '#about' }">
      <v-icon class="white--text">mdi-human-greeting</v-icon>
      <span class="white--text">about</span>
    </v-btn>
    <v-btn icon v-scroll-to="{ el: '#skill' }">
      <v-icon class="white--text">mdi-hammer-screwdriver</v-icon>
      <span class="white--text">skill</span>
    </v-btn>
    <v-btn icon v-scroll-to="{ el: '#history' }">
      <v-icon class="white--text">mdi-format-list-bulleted</v-icon>
      <span class="white--text">history</span>
    </v-btn>
    <v-btn icon v-scroll-to="{ el: '#contact' }">
      <v-icon class="white--text">mdi-chat-outline</v-icon>
      <span class="white--text">contact</span>
    </v-btn>
  </v-bottom-navigation>
</template>

<style scoped>
.theme--light.v-bottom-navigation {
  background-color: #4dd0e1;
}
</style>