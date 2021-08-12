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
            <v-card-title
              ><v-icon class="mr-1">{{ item.icon }}</v-icon
              >{{ item.title }}</v-card-title
            >
            <v-card-subtitle>{{ item.tool }}</v-card-subtitle>
            <v-card-text>{{ item.summary }}</v-card-text>
            <v-card-actions>
              <v-btn color="cyan lighten-2">
                <a :href="item.link" target="_blank">詳細を見る</a>
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
          title: "レストランの予約システム",
          icon: "mdi-vuejs",
          tool: "Vue.js / Vue Router / Firebase / Vutify / SmtpJS / SendGrid",
          summary:
            "カレンダーの空いているところを選んで予約ができ、管理画面で予約の管理ができる。",
          link: "",
        },
        {
          title: "商品在庫発注管理システム",
          icon: "mdi-vuejs",
          tool: "Vue.js / Vue Router / Vuex / Firebase / Vutify",
          summary:
            "商品や発注、納入を記録できる。発注や納入の数量に応じて商品の在庫が自動で更新される。",
          link: "https://ossified-elephant-7c0.notion.site/faf4cda0c77948ddb9cce0418d38b186",
        },
        {
          title: "アンケート管理システム",
          icon: "mdi-vuejs",
          tool: "Vue.js / Vue Router / Vuex / Chart.js / Firebase / BootstrapVue",
          summary:
            "管理側でアンケートの管理や回答結果の確認ができる。利用者側のアンケートの回答がリアルタイムに結果のグラフに反映される。",
          link: "https://ossified-elephant-7c0.notion.site/1f6cb43340624a1ea0177a1c907bad31",
        },
        {
          title: "複数店舗の予約管理システム",
          icon: "mdi-laravel",
          tool: "Laravel / SQLite / Tailwind CSS / Stripe",
          summary:
            "管理者は店舗や予約プランの管理ができ、ユーザーは予約後に決済ができるシステム。",
          link: "https://ossified-elephant-7c0.notion.site/75a13517dd154f8fb2022b37c5b97e6f",
        },
        {
          title: "タレントプロフィール検索サイト",
          icon: "mdi-laravel",
          tool: "Laravel / SQLite / Tailwind CSS",
          summary:
            "管理者はタレントプロフィールの登録・変種・削除ができ、ユーザーはタレントの検索ができる。",
          link: "https://ossified-elephant-7c0.notion.site/f2cfe40274aa422fbeaa0e1aaf1c4aa6",
        },
        {
          title: "オンライン講座のシフト依頼システム",
          icon: "mdi-laravel",
          tool: "Laravel / SQLite / Tailwind CSS",
          summary:
            "Googleカレンダーのある予定を取得して表示。事前に登録した講師に一括依頼できる。",
          link: "https://ossified-elephant-7c0.notion.site/3bb11303ed594ec5970ebd8ff5474321",
        },
        {
          title: "製造指示共有システム",
          icon: "mdi-laravel",
          tool: "Laravel / SQLite / Tailwind CSS",
          summary:
            "指示の一覧表示、詳細表示、登録、更新、削除ができるシステム。一覧表示の絞り込みも可能。",
          link: "https://ossified-elephant-7c0.notion.site/03206a0884dc4e6ebf82b094aeada318",
        },
        {
          title: "掲示板サイト",
          icon: "mdi-language-php",
          tool: "PHP / MySQL / Cloudinary / SendGrid",
          summary:
            "ログイン機能や投稿、コメント機能、画像アップロード機能を実装。",
          link: "https://github.com/t-aono/php-bbs",
        },
        {
          title: "メモアプリ",
          icon: "mdi-language-php",
          tool: "PHP / MySQL / JavaScript / jQuery / Ajax",
          summary:
            "メモの登録や更新、削除ができるWebアプリ。完了未完了のトグル機能も実装。",
          link: "https://github.com/t-aono/php-memos",
        },
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