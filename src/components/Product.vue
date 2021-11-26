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
              <v-btn color="cyan lighten-2" href="#" onClick="window.alert('メンテナンス中です。');">
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
            "ユーザーごとにトレーニングメニューの管理ができ、トレーニングの内容をを記録していくことができるWebアプリ。"
        },
        {
          title: "画像管理アプリ",
          icon: "mdi-vuejs",
          tool: "Nuxt.js / Firebase / VuexFire / Buefy",
          summary:
            "ユーザーごとにカテゴリーの管理や、画像の管理ができるWebアプリ。画像は Firebase Storage にアップロードされ一覧表示ができる。カテゴリーごとの絞り込みも可能。"
        },
        {
          title: "観光写真アプリ",
          icon: "mdi-vuejs",
          tool: "Nuxt.js / Firebase / VuexFire / Vuetify",
          summary:
            "登録した観光地の画像を Pixabay API を用いて取得し表示できる。気に入った画像にいいねをすることでマイページに表示される。"
        },
        {
          title: "レストランの予約アプリ",
          icon: "mdi-vuejs",
          tool: "Vue.js / Vue Router / Firebase / Vutify / SmtpJS / SendGrid",
          summary:
            "カレンダーの空いているところを選んで予約ができ、管理画面で予約の管理ができる。"
        },
        {
          title: "商品在庫発注管理アプリ",
          icon: "mdi-vuejs",
          tool: "Vue.js / Vue Router / Vuex / Firebase / Vutify",
          summary:
            "商品や発注、納入を記録できる。発注や納入の数量に応じて商品の在庫が自動で更新される。"
        },
        {
          title: "アンケートサイト",
          icon: "mdi-vuejs",
          tool: "Vue.js / Vue Router / Vuex / Chart.js / Firebase / BootstrapVue",
          summary:
            "管理側でアンケートの管理や回答結果の確認ができる。利用者側のアンケートの回答がリアルタイムに結果のグラフに反映される。"
        },
        {
          title: "複数店舗の予約管理アプリ",
          icon: "mdi-laravel",
          tool: "Laravel / SQLite / Tailwind CSS / Stripe",
          summary:
            "管理者は店舗や予約プランの管理ができ、ユーザーは予約後に決済ができるシステム。"
        },
        {
          title: "タレントプロフィール検索サイト",
          icon: "mdi-laravel",
          tool: "Laravel / SQLite / Tailwind CSS",
          summary:
            "管理者はタレントプロフィールの登録・変種・削除ができ、ユーザーはタレントの検索ができる。"
        },
        {
          title: "オンライン講座のシフト管理アプリ",
          icon: "mdi-laravel",
          tool: "Laravel / SQLite / Tailwind CSS",
          summary:
            "Googleカレンダーのある予定を取得して表示。事前に登録した講師に一括依頼できる。"
        },
        // {
        //   title: "製造指示共有アプリ",
        //   icon: "mdi-laravel",
        //   tool: "Laravel / SQLite / Tailwind CSS",
        //   summary:
        //     "指示の一覧表示、詳細表示、登録、更新、削除ができるシステム。一覧表示の絞り込みも可能。"
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
.v-sheet.v-card {
    height: 280px;
}
.v-card__actions {
    position: absolute;
    bottom: 16px;
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