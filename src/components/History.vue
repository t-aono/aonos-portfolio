<template>
  <v-row class="text-center sub-color white--text py-10">
    <v-col cols="12">
      <div class="text-h5 mb-0 main-color-txt" id="history">history</div>
      <div class="text-h4 mb-5">経歴</div>
      <v-container>
        <v-timeline :dense="sp">
          <v-timeline-item
            v-for="(year, i) in years"
            :key="i"
            color="cyan lighten-2"
          >
            <template v-slot:opposite>
              <span
                class="headline font-weight-bold white--text"
                v-text="year.year"
              ></span>
            </template>
            <div class="py-4">
              <div v-show="sp" class="mb-3">
                <span
                  class="headline font-weight-bold white--text"
                  v-text="year.year">
                </span>
              </div>
              <h2 class="headline font-weight-light mb-4 white--text">
                {{ year.title }}
              </h2>
              <div>
                <p class="text-justify">
                {{ year.sentence }}
                </p>
              </div>
            </div>
          </v-timeline-item>
        </v-timeline>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    years: [
      {
        year: "2011",
        title: "新卒で営業職",
        sentence: "新卒で製薬メーカーに営業職入社。医療施設に対して自社医薬品の営業活動。2016年3月で退職。",
      },
      {
        year: "2016",
        title: "SESの会社に入社",
        sentence: "プログラミングやWebサーバー、データベースについて学ぶ。その後、既存システムのカスタマイズ案件でテスト仕様やテストなどを担当。",
      },
      {
        year: "2017",
        title: "複数の開発現場を経験",
        sentence: "Java や VBA がメインの保守開発案件で実装やテストなどを担当。",
      },
      {
        year: "2018",
        title: "PHPでの開発を経験",
        sentence: "既存Webシステムのカスタマイズ案件で画面設計、実装、テストなどを担当。",
      },
      {
        year: "2020",
        title: "受託開発の会社に転職",
        sentence: "PHP / JavaScript を使ったWebシステムの開発を担当。お客さんとの打ち合わせから画面設計、DB設計、実装、テストなどを担当。",
      },
      {
        year: "2021",
        title: "副業で実績を積む",
        sentence: "ココナラ、クラウドワークスを利用してプログラムやWebシステムの制作を受注。対応数は100件以上。",
      },
    ],
    sp: (window.innerWidth < 700) ? true : false,
  }),
  methods: {
    handleResize: function() {
      if (window.innerWidth < 700) this.sp = true;
      else this.sp = false;
    }
  },
  mounted: function () {
    window.addEventListener('resize', this.handleResize);
  },
};
</script>

<style scoped>
.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse):before,
.theme--light.v-timeline::before {
  border: solid 2px;
}
</style>