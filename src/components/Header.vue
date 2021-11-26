<template>
  <v-app-bar fixed color="cyan lighten-2" class="white--text">

    <v-app-bar-title>aono's Portfolio</v-app-bar-title>

    <v-row class="d-none d-md-flex">
      <v-spacer></v-spacer>
      <v-col cols="2" lg="1">
        <v-btn icon class="white--text" v-scroll-to="{el: '#product'}">
          <v-icon>mdi-apps</v-icon>
          product
        </v-btn>
      </v-col>
      <v-col cols="2" lg="1">
        <v-btn icon class="white--text" v-scroll-to="{el: '#about'}">
          <v-icon>mdi-human-greeting</v-icon>
          about
        </v-btn>
      </v-col>
      <v-col cols="2" lg="1">
        <v-btn icon class="white--text" v-scroll-to="{el: '#skill'}">
          <v-icon>mdi-hammer-screwdriver</v-icon>
          skill
        </v-btn>
      </v-col>
      <v-col cols="2" lg="1">
        <v-btn icon class="white--text" v-scroll-to="{el: '#history'}">
          <v-icon>mdi-format-list-bulleted</v-icon>
          history
        </v-btn>
      </v-col>
      <v-col cols="2" lg="1">
        <v-btn icon class="white--text" v-scroll-to="{el: '#contact'}">
          <v-icon>mdi-chat-outline</v-icon>
          contact
        </v-btn>
      </v-col>
    </v-row>

  </v-app-bar>
</template>
