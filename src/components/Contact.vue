<template>
  <v-row class="text-center my-10 pb-10">
    <v-col cols="12">
      <div class="text-h5 mb-0 main-color-txt" id="contact">contact</div>
      <div class="text-h4 mb-5">お問い合わせ</div>
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="12" md="8">
            <v-text-field solo label="お名前"></v-text-field>
            <v-text-field solo label="メールアドレス"></v-text-field>
            <v-textarea solo label="内容" ></v-textarea>
            <v-btn large color="cyan lighten-2">送信</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
export default {
}
</script>

<style scoped>
button.v-btn {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  font-size: large;
}
</style>
