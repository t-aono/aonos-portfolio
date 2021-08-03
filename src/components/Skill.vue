<template>
  <v-row class="text-center">
    <v-col cols="12">
      <h3 class="mb-0 main-color-txt" id="skill">skill</h3>
      <h2 class="mb-5">スキル</h2>
      <v-container>
        <p>フロントエンド</p>
        <v-row>
          <v-col v-for="item in frontSkills" :key="item.name" cols="4" md="2">
            <div class="text-h6">
              <v-icon x-large :color="item.color">{{ item.icon }}</v-icon> {{ item.name }}
            </div>
            <v-rating
              length="3"
              :value="item.star"
              color="#314259"
              background-color="#314259"
              size="30"
            >
            </v-rating>
          </v-col>
        </v-row>
        <p>バックエンド</p>
        <v-row>
          <v-col v-for="item in backSkills" :key="item.name" cols="4" md="2">
            <div class="text-h6">
              <v-icon x-large :color="item.color">{{ item.icon }}</v-icon> {{ item.name }}
            </div>
            <v-rating
              length="3"
              :value="item.star"
              color="#314259"
              background-color="#314259"
              size="30"
            >
            </v-rating>
          </v-col>
        </v-row>
        <p>OS・ミドルウェア</p>
        <v-row>
          <v-col v-for="item in otherSkills" :key="item.name" cols="4" md="2">
            <div class="text-h6">
              <v-icon x-large :color="item.color">{{ item.icon }}</v-icon> {{ item.name }}
            </div>
            <v-rating
              length="3"
              :value="item.star"
              color="#314259"
              background-color="#314259"
              size="30"
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
      frontSkills: [
        {
          color: 'red',
          icon: 'mdi-language-html5',
          name: 'HTML',
          star: 3
        },
        {
          color: 'blue',
          icon: 'mdi-language-css3',
          name: 'CSS',
          star: 3
        },
        {
          color: 'yellow',
          icon: 'mdi-language-javascript',
          name: 'JavaScript',
          star: 3
        },
        {
          color: 'green',
          icon: 'mdi-vuejs',
          name: 'Vue.js',
          star: 2
        },
        {
          color: 'blue',
          icon: 'mdi-jquery',
          name: 'jQuery',
          star: 3
        },
      ],
      backSkills: [
        {
          color: 'blue',
          icon: 'mdi-language-php',
          name: 'PHP',
          star: 3
        },
        {
          color: 'red',
          icon: 'mdi-laravel',
          name: 'Laravel',
          star: 2
        },
        {
          color: 'blue',
          icon: 'mdi-google',
          name: 'GAS',
          star: 2
        },
        {
          color: 'brown',
          icon: 'mdi-language-java',
          name: 'Java',
          star: 1
        },
      ],
      otherSkills: [
        {
          color: 'blue',
          icon: 'mdi-microsoft-windows',
          name: 'Windows',
          star: 3
        },
        {
          color: 'gray',
          icon: 'mdi-apple',
          name: 'Mac',
          star: 3
        },
        {
          color: 'black',
          icon: 'mdi-linux',
          name: 'Linux',
          star: 2
        },
        {
          color: 'gray',
          icon: 'mdi-server',
          name: 'Apache',
          star: 3
        },
        {
          color: '#4479a1',
          icon: 'mdi-database-outline',
          name: 'MySQL',
          star: 3
        },
        {
          color: 'gray',
          icon: 'mdi-database-outline',
          name: 'SQLite',
          star: 2
        },
        {
          color: 'yellow',
          icon: 'mdi-firebase',
          name: 'firebase',
          star: 1
        },
        {
          color: 'blue',
          icon: 'mdi-docker',
          name: 'Docker',
          star: 2
        },
        {
          color: 'blue',
          icon: 'mdi-cloud-outline',
          name: 'GCP',
          star: 1
        },
      ]
    }
  }
}
</script>
