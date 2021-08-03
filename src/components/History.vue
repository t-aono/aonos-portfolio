<template>
  <v-row class="text-center sub-color white--text">
    <v-col cols="12">
      <h3 class="mb-0 main-color-txt" id="history">history</h3>
      <h2 class="mb-5">経歴</h2>
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
        sentence: "プログラミングのスクールに通い、Java・SQL・データベース・ウェブサーバーについて学ぶ。その後、テスターとして小売業向け業務支援システムのカスタマイズ案件に参画。",
      },
      {
        year: "2017",
        title: "複数の開発現場でチーム開発を経験",
        sentence: "プログラマーとして Java や VBA の案件に参画。",
      },
      {
        year: "2018",
        title: "",
        sentence: "",
      },
      {
        year: "2019",
        title: "",
        sentence: "",
      },
      {
        year: "2020",
        title: "",
        sentence: "",
      },
      {
        year: "2021",
        title: "",
        sentence: "",
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