<template>
  <v-row class="text-center">
    <v-col cols="12">
      <h3 class="mb-0" id="about">about</h3>
      <h2 class="mb-5">自己紹介</h2>
      <v-container>
        <v-row>
          <v-col cols="12" md="2">
            <div>
              <v-avatar size="150">
                <img
                  src="https://www.aonoweb.com/wp-content/uploads/2021/06/profile.jpeg"
                  alt="aono"
                >
              </v-avatar>
            </div>
          </v-col>
          <v-col cols="12" md="10">
            <div class="lead text-center mx-3">
              <p class="text-justify">
                福岡の受託開発の会社に勤務しています。
                何かを作る仕事がしたくて、別業種から転職しました。
                業務で使うWebシステムの開発をしており、主に PHP を使っています。
                空いた時間を使って勉強がてらWebサイト制作もやっています。
                Webシステムの新規作成、改修や機能追加など対応可能です。
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style scoped>
div.row {
  background-color: #314259;
  color: #fff;
}
h3 {
  color: #4dd0e1;
}
h2 {
  color: #fff;
}
p.text-justify {
  line-height: 2rem;
}
</style>