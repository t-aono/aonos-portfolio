<template>
  <v-row class="text-center sub-color white--text py-10">
    <v-col cols="12">
      <div class="text-h5 mb-0 main-color-txt" id="about">about</div>
      <div class="text-h4 mb-5">自己紹介</div>
      <v-container>
        <v-row>
          <v-col cols="12" md="2" lg="3" class="my-auto">
            <div>
              <v-avatar size="150">
                <img
                  src="https://www.aonoweb.com/wp-content/uploads/2021/06/profile.jpeg"
                  alt="aono"
                >
              </v-avatar>
            </div>
          </v-col>
          <v-col cols="12" md="10" lg="9">
            <div class="mx-3 mx-md-10 mt-5">
              <p class="text-justify">
                福岡在住で、Webシステム受託開発の会社に勤めています。<br>
                よく使うのは PHP / JavaScript / MySQL です。<br>
                プログラマー歴は5年くらいです。<br>
                プライベートでは個人でプログラムやWebシステムの制作も行っています。<br>
                最近は Laravel やフロントエンドの技術を学習しています。<br>
                それらを使って、Webシステムの新規作成や改修、機能追加など対応可能です。<br>
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<style scoped>
p.text-justify {
  line-height: 40px;
}
</style>