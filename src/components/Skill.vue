<template>
  <v-row class="text-center my-10">
    <v-col cols="12">
      <div class="text-h5 mb-0 main-color-txt" id="skill">skill</div>
      <div class="text-h4 mb-5">スキル</div>
      <v-container>
        <div v-for="(items, key) in skills" :key="key">
          <p class="text-h5 mt-5">{{ key }}</p>
          <v-row class="mb-5">
            <v-col
              v-for="item in items"
              :key="item.name"
              cols="6"
              sm="4"
              md="3"
              lg="2"
            >
              <div class="text-h6">
                <v-icon x-large color="#4dd0e1">{{ item.icon }}</v-icon>
                {{ item.name }}
              </div>
              <v-rating
                length="3"
                :value="item.star"
                color="#314259"
                background-color="#314259"
                size="20"
              ></v-rating>
            </v-col>
          </v-row>
        </div>
        <v-row class="mt-5" justify="center">
          <div><v-breadcrumbs :items="explanation"></v-breadcrumbs></div>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      skills: {
        フロントエンド: [
          {
            icon: "mdi-language-html5",
            name: "HTML",
            star: 3,
          },
          {
            icon: "mdi-language-css3",
            name: "CSS",
            star: 3,
          },
          {
            icon: "mdi-language-javascript",
            name: "JavaScript",
            star: 3,
          },
          {
            icon: "mdi-vuejs",
            name: "Vue.js",
            star: 2,
          },
          {
            icon: "mdi-jquery",
            name: "jQuery",
            star: 3,
          },
        ],
        "バックエンド": [
          {
            icon: "mdi-language-php",
            name: "PHP",
            star: 3,
          },
          {
            icon: "mdi-laravel",
            name: "Laravel",
            star: 2,
          },
          {
            icon: "mdi-google",
            name: "GAS",
            star: 2,
          },
          {
            icon: "mdi-language-java",
            name: "Java",
            star: 2,
          },
        ],
        "OS・ミドルウェア": [
          {
            icon: "mdi-microsoft-windows",
            name: "Windows",
            star: 3,
          },
          {
            icon: "mdi-apple",
            name: "Mac",
            star: 3,
          },
          {
            icon: "mdi-linux",
            name: "Linux",
            star: 2,
          },
          {
            icon: "mdi-server",
            name: "Apache",
            star: 3,
          },
          {
            icon: "mdi-database-outline",
            name: "MySQL",
            star: 3,
          },
          {
            icon: "mdi-database-outline",
            name: "SQLite",
            star: 2,
          },
          {
            icon: "mdi-docker",
            name: "Docker",
            star: 2,
          },
        ],
        "クラウドサービス": [
          {
            icon: "mdi-firebase",
            name: "firebase",
            star: 2,
          },
          {
            icon: "mdi-cloud-outline",
            name: "GCP",
            star: 1,
          },
          {
            icon: "mdi-hexagon",
            name: "Heroku",
            star: 2,
          },
        ]
      },
      explanation: [
        {
          star: 3,
          text: "★★★ 実務でよく使う",
        },
        {
          text: "★★ だいたい使える",
        },
        {
          text: "★ 少し触ったことがある",
        },
      ],
    };
  },
};
</script>

