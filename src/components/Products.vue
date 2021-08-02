<template>
  <v-row class="text-center">
    <v-col cols="12">
      <h3 class="mb-0" id="products">products</h3>
      <h2 class="mb-5">制作物</h2>
    </v-col>

    <v-col v-for="item in items" :key="item.title" cols="12" md="6">
      <v-card class="mx-5 pa-3 text-left">
        <v-card-title>{{ item.title }}</v-card-title>
        <v-card-subtitle>{{ item.tool }}</v-card-subtitle>
        <v-card-text>{{ item.summary }}</v-card-text>
        <v-card-actions>
          <v-btn color="cyan lighten-2">
            <a :href="item.link" target="_blank">詳細を見る</a>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>

  </v-row>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "製造指示共有システム", 
          tool: "Laravel / SQLite",
          summary: "",
          link: ""
        },
        {
          title: "製造指示共有システム", 
          tool: "Laravel / SQLite",
          summary: "",
          link: ""
        },
        {
          title: "オンライン講座シフト依頼システム", 
          tool: "Laravel / Laravel Breeze / SQLite / Tailwind CSS",
          summary: "Googleカレンダーのある予定を取得して講師に一括依頼できるシステム。",
          link: "https://ossified-elephant-7c0.notion.site/3bb11303ed594ec5970ebd8ff5474321"
        },
        {
          title: "製造指示共有システム", 
          tool: "Laravel / SQLite / Tailwind CSS",
          summary: "指示の一覧表示、詳細表示、登録、更新、削除ができるシステム。一覧表示の絞り込みも可能。",
          link: "https://ossified-elephant-7c0.notion.site/03206a0884dc4e6ebf82b094aeada318"
        }
      ]
    }
  }
}
</script>

<style scoped>
.v-application a {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
}
</style>