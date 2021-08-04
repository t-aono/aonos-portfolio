<template>
  <v-row class="text-center my-10 pb-10">
    <v-col cols="12">
      <div class="text-h5 mb-0 main-color-txt" id="contact">contact</div>
      <div class="text-h4 mb-5">お問い合わせ</div>
      <v-container>
        <p class="mb-10">制作のご依頼やご相談は、下記の SNS またはクラウドソーシングサイトからお願い致します。</p>
        <v-row align="center" justify="center">
          <v-btn 
            v-for="item in links" :key="item.name" 
            :href="item.url" target="_blank" 
            :color="mainColor" min-width="200" class="ma-3 py-7"
          >
            <v-icon x-large color="white">{{ item.icon }}</v-icon>
            <span class="white--text"> {{ item.name }}</span>
          </v-btn>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => {
    return {
      subColor: '#314259',
      mainColor: '#4dd0e1',
      links: [
        {
          icon: 'mdi-twitter',
          name: 'Twitter',
          url: 'https://twitter.com/aonoweb'
        },
        {
          icon: 'mdi-facebook',
          name: 'Facebook',
          url: 'https://www.facebook.com/Aono-Web-Develop-120591110218139/'
        },
        {
          icon: 'mdi-web',
          name: 'ココナラ',
          url: 'https://profile.coconala.com/users/1506663'
        },
        {
          icon: 'mdi-web',
          name: 'クラウドワークス',
          url: 'https://crowdworks.jp/public/employees/1497017'
        },
        {
          icon: 'mdi-web',
          name: 'ランサーズ',
          url: 'https://www.lancers.jp/profile/krm50'
        },
      ]
    }
  }
}
</script>
