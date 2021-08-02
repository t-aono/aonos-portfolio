<template>
  <v-app-bar fixed color="cyan lighten-2" class="white--text">

    <v-app-bar-title>aono's Protfolio</v-app-bar-title>

    <v-row>
      <v-spacer></v-spacer>
      <v-col cols="1">
        <v-btn icon class="white--text" v-scroll-to="{el: '#products'}">
          <v-icon>mdi-apps</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="1">
        <v-btn icon class="white--text" v-scroll-to="{el: '#about'}">
          <v-icon>mdi-human-greeting</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="1">
        <v-btn icon class="white--text" v-scroll-to="{el: '#skill'}">
          <v-icon>mdi-hammer-screwdriver</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="1">
        <v-btn icon class="white--text" v-scroll-to="{el: '#career'}">
          <v-icon>mdi-format-list-bulleted</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="1">
        <v-btn icon class="white--text" v-scroll-to="{el: '#contact'}">
          <v-icon>mdi-chat-outline</v-icon>
        </v-btn>
      </v-col>
    </v-row>

  </v-app-bar>
</template>
