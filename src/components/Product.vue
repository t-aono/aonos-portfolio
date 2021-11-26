<template>
  <v-row class="text-center mt-15 mb-10">
    <v-col cols="12">
      <div class="text-h5 mb-0 main-color-txt" id="product">product</div>
      <div class="text-h4 mb-5">制作物</div>
    </v-col>

    <v-col cols="12">
      <v-container>
        <v-row justify="center">
          <v-card v-for="(item, index) in items" :key="index" v-show="index < itemCount" class="ma-3 pa-1 text-left" width="300">
            <v-card-title>{{ item.title }}</v-card-title>
            <v-card-subtitle><v-icon>{{ item.icon }}</v-icon> {{ item.tool }}</v-card-subtitle>
            <v-card-text>{{ item.summary }}</v-card-text>
            <v-card-actions>
              <v-btn color="cyan lighten-2" :href="item.link" target="_blank">
                <span>詳細を見る</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-row>
      </v-container>
    </v-col>

    <v-col cols="12">
      <v-btn outlined color="#4dd0e1" class="more-btn" @click="more" v-if="toggle === 'more'">
        <v-icon large>mdi-chevron-down</v-icon>もっと見る
      </v-btn>
      <v-btn outlined color="#4dd0e1" class="more-btn" @click="close" v-else>
        <v-icon large>mdi-chevron-up</v-icon>閉じる
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      itemCount: 3,
      toggle: 'more',
      items: [
        {
          title: "トレーニング管理アプリ",
          icon: "mdi-react",
          tool: "React / TypeScript / Firebase / Chakra UI",
          summary:
            "ユーザーごとにトレーニングメニューの管理ができ、トレーニングの内容をを記録していくことができるWebアプリ。",
          link: "https://ossified-elephant-7c0.notion.site/4098f3588edd4490b70355ad5e568d46",
        },
        {
          title: "画像管理アプリ",
          icon: "mdi-vuejs",
          tool: "Nuxt.js / Firebase / VuexFire / Buefy",
          summary:
            "ユーザーごとにカテゴリーの管理や、画像の管理ができるWebアプリ。画像は Firebase Storage にアップロードされ一覧表示ができる。カテゴリーごとの絞り込みも可能。",
          link: "https://ossified-elephant-7c0.notion.site/d70f94a29b3a481a8dfef28366207bae",
        },
        {
          title: "観光写真アプリ",
          icon: "mdi-vuejs",
          tool: "Nuxt.js / Firebase / VuexFire / Vuetify",
          summary:
            "観光地の登録ができ、それに関連する画像を Pixabay API を用いて取得、表示できるWebアプリ。気に入った画像にいいねをすることでトップページに表示することができる。",
          link: "https://ossified-elephant-7c0.notion.site/8953486949334fbf9c657039dcda7681",
        },
        {
          title: "レストランの予約アプリ",
          icon: "mdi-vuejs",
          tool: "Vue.js / Vue Router / Firebase / Vutify / SmtpJS / SendGrid",
          summary:
            "カレンダーの空いているところを選んで予約ができ、管理画面で予約の管理ができる。",
          link: "https://ossified-elephant-7c0.notion.site/00b7a4b0154041e8826ee86b635e975b",
        },
        {
          title: "商品在庫発注管理アプリ",
          icon: "mdi-vuejs",
          tool: "Vue.js / Vue Router / Vuex / Firebase / Vutify",
          summary:
            "商品や発注、納入を記録できる。発注や納入の数量に応じて商品の在庫が自動で更新される。",
          link: "https://ossified-elephant-7c0.notion.site/4126e08c381c4fc089796968540d4c7b",
        },
        {
          title: "アンケートサイト",
          icon: "mdi-vuejs",
          tool: "Vue.js / Vue Router / Vuex / Chart.js / Firebase / BootstrapVue",
          summary:
            "管理側でアンケートの管理や回答結果の確認ができる。利用者側のアンケートの回答がリアルタイムに結果のグラフに反映される。",
          link: "https://ossified-elephant-7c0.notion.site/15bbe493583a43608760bddfe2ed6dac",
        },
        {
          title: "複数店舗の予約管理アプリ",
          icon: "mdi-laravel",
          tool: "Laravel / SQLite / Tailwind CSS / Stripe",
          summary:
            "管理者は店舗や予約プランの管理ができ、ユーザーは予約後に決済ができるシステム。",
          link: "https://ossified-elephant-7c0.notion.site/54f18f6e595447e9be6c072c223bdcbe",
        },
        {
          title: "タレントプロフィール検索サイト",
          icon: "mdi-laravel",
          tool: "Laravel / SQLite / Tailwind CSS",
          summary:
            "管理者はタレントプロフィールの登録・変種・削除ができ、ユーザーはタレントの検索ができる。",
          link: "https://ossified-elephant-7c0.notion.site/eb63168f5d9f4f01af37daea15bacf5e",
        },
        {
          title: "オンライン講座のシフト管理アプリ",
          icon: "mdi-laravel",
          tool: "Laravel / SQLite / Tailwind CSS",
          summary:
            "Googleカレンダーのある予定を取得して表示。事前に登録した講師に一括依頼できる。",
          link: "https://ossified-elephant-7c0.notion.site/72edad3d9b6044c0b99ec16816c31b13",
        },
        // {
        //   title: "製造指示共有アプリ",
        //   icon: "mdi-laravel",
        //   tool: "Laravel / SQLite / Tailwind CSS",
        //   summary:
        //     "指示の一覧表示、詳細表示、登録、更新、削除ができるシステム。一覧表示の絞り込みも可能。",
        //   link: "https://ossified-elephant-7c0.notion.site/fee7baf7e39b4387a69b79c42bc0fe2e",
        // }
      ],
    };
  },
  methods: {
    onLoad(frame) {
      this.myIframe = frame.contentWindow;
    },
    more() {
      this.itemCount = this.items.length;
      this.toggle = 'close';
    },
    close() {
      this.itemCount = 3;
      this.toggle = 'more';
      window.scrollTo({top: 0, behavior: "smooth"});
    },
  },
};
</script>

<style scoped>
h3 {
  color: #4dd0e1;
}
h2 {
  color: #314259;
}
.v-application a {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
}
.more-btn {
  font-weight: bold;
}
</style>