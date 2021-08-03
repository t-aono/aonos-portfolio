<template>
  <v-row class="text-center">
    <v-col cols="12">
      <h3 class="mb-0" id="skill">skill</h3>
      <h2 class="mb-5">スキル</h2>
      <v-container>
        <v-row>
          <v-col v-for="item in items" :key="item.name" cols="6" md="3">
            <div class="text-h6">
              <v-icon x-large :color="item.color">{{ item.icon }}</v-icon> {{ item.name }}
            </div>
            <v-rating
              length="5"
              :value="item.star"
              color="#314259"
              background-color="#314259"
              size="15"
            >
            </v-rating>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          color: 'blue',
          icon: 'mdi-language-php',
          name: 'PHP',
          star: 5
        },
        {
          color: 'yellow',
          icon: 'mdi-language-javascript',
          name: 'JavaScript',
          star: 4
        },
        {
          color: 'red',
          icon: 'mdi-language-html5',
          name: 'HTML',
          star: 4
        },
        {
          color: 'blue',
          icon: 'mdi-language-css3',
          name: 'CSS',
          star: 4
        },
        {
          color: 'red',
          icon: 'mdi-laravel',
          name: 'Laravel',
          star: 3
        },
        {
          color: 'green',
          icon: 'mdi-vuejs',
          name: 'Vue.js',
          star: 3
        },
        {
          color: 'blue',
          icon: 'mdi-jquery',
          name: 'jQuery',
          star: 4
        },
        {
          color: '#4479a1',
          icon: 'mdi-database-outline',
          name: 'MySQL',
          star: 4
        },
        {
          color: 'gray',
          icon: 'mdi-database-outline',
          name: 'SQLite',
          star: 3
        },
        {
          color: 'blue',
          icon: 'mdi-google',
          name: 'GAS',
          star: 3
        },
        {
          color: 'yellow',
          icon: 'mdi-firebase',
          name: 'firebase',
          star: 2
        },
      ]
    }
  }
}
</script>
