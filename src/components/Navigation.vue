<template>
  <v-bottom-navigation fixed class="d-flex d-md-none text-center">
    <v-btn icon class="white--text" v-scroll-to="{ el: '#product' }">
      <v-icon>mdi-apps</v-icon>
      product
    </v-btn>
    <v-btn icon class="white--text" v-scroll-to="{ el: '#about' }">
      <v-icon>mdi-human-greeting</v-icon>
      about
    </v-btn>
    <v-btn icon class="white--text" v-scroll-to="{ el: '#skill' }">
      <v-icon>mdi-hammer-screwdriver</v-icon>
      skill
    </v-btn>
    <v-btn icon class="white--text" v-scroll-to="{ el: '#career' }">
      <v-icon>mdi-format-list-bulleted</v-icon>
      career
    </v-btn>
    <v-btn icon class="white--text" v-scroll-to="{ el: '#contact' }">
      <v-icon>mdi-chat-outline</v-icon>
      contact
    </v-btn>
  </v-bottom-navigation>
</template>

<style scoped>

</style>