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
        title: "営業職としてメーカー入社",
        sentence: "新卒で製薬メーカーに営業職入社。病院、クリニック、調剤薬局などを対象に自社医薬品の営業活動。2016年3月で退職。",
      },
      {
        year: "2016",
        title: "SESの会社に入社",
        sentence: "プログラミングのスクールにて HTML / CSS / JavaScript / Java / SQL について学ぶ。その後、テスターとして小売業向け業務支援システムのカスタマイズ案件に参画。",
      },
      {
        year: "2017",
        title: "複数の開発現場を経験",
        sentence: "プログラマー・テスターとして Java や VBA の保守開発案件に参画。チーム人数は5～10人くらい。",
      },
      {
        year: "2019",
        title: "PHPでの開発を経験",
        sentence: "既存Webシステム管理画面のカスタマイズ案件に参画。チーム人数は4人で画面設計、実装、テストなどを担当。",
      },
      {
        year: "2020",
        title: "受託開発の会社に転職",
        sentence: "PHP / JavaScript を使ったWebシステムの開発を担当。お客さんとの打ち合わせから画面設計、DB設計、実装、テストなどを担当。",
      },
      {
        year: "2021",
        title: "副業の実績が上がる",
        sentence: "ココナラ、クラウドワークスなどを利用してプログラミングやWebサービス、ツールの制作を行っており対応案件は100件以上に。",
      },
    ],
    sp: false,
  }),
  methods: {
    handleResize: function() {
      if (window.innerWidth < 700) this.sp = true;
      else this.sp = false;
    }
  },
  mounted: function () {
    window.addEventListener('resize', this.handleResize)
  },
};
</script>

<style scoped>
.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse):before,
.theme--light.v-timeline::before {
  left: calc(50% - 3px);
  right: initial;
  border: solid;
}
</style>