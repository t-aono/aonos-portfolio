<template>
  <v-row class="text-center my-10 pb-10">
    <v-col cols="12">
      <div class="text-h5 mb-0 main-color-txt" id="contact">contact</div>
      <div class="text-h4 mb-5">お問い合わせ</div>
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="12" md="8">
            <form>
              <v-text-field outlined label="お名前" v-model="name" :rules="required" ref="input[0]" color="#4dd0e1"></v-text-field>
              <v-text-field outlined label="メールアドレス" v-model="mail" :rules="email" ref="input[1]" color="#4dd0e1"></v-text-field>
              <v-textarea outlined label="内容" v-model="content" :rules="required" ref="input[2]" color="#4dd0e1"></v-textarea>
              <p class="message sub-color-txt" v-if="success">送信が完了しました。3日以内に返信いたします。</p>
              <v-btn large color="cyan lighten-2" @click="send" v-else>送信</v-btn>
              <div v-show="submit" class="progress">
                <div>
                  <v-progress-circular :size="100" :width="5" class="main-color-txt" indeterminate></v-progress-circular>
                </div>
              </div>
            </form>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => {
    return {
      name: '',
      mail: '',
      content: '',
      submit: false,
      success: false,
      required: [
        value => !!value || '入力してください。',
      ],
      email: [
        value => !!value || '入力してください。',
        value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || '正しい形式で入力してください。'
        },
      ]
    }
  },
  methods: {
    send() {
      if (this.name && this.mail && this.content) {
        this.submit = true;
        this.sendEmail();
      } else {
        for (let key in this.$refs) {
          setTimeout(() => {
            this.$refs[key].focus();
            this.$refs[key].blur();
          }, 100)
        }
      }
    },
    sendEmail() {
      this.$loadScript("https://smtpjs.com/v3/smtp.js")
        .then(() => {
          window.Email && window.Email.send({
            Host: process.env.VUE_APP_MAIL_HOST,
            Username: process.env.VUE_APP_SENDGRID_USERNAME,
            Password: process.env.VUE_APP_SENDGRID_APIKEY,
            To: process.env.VUE_APP_MAIL_TO,
            From: "no-reply@pf.aonoweb.com",
            Subject: "ポートフォリオサイトからのお問い合わせ",
            Body: `お名前：${this.name}<br>メールアドレス：${this.mail}<br>【内容】<br>${this.content.replace(/\n/g, '<br>')}`
          }).then(
            message => { 
              if (message === 'OK') this.success = true;
              else alert(message);
              this.submit = false;
            }
          );
        })
    },
  },
}
</script>

<style scoped>
button.v-btn {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  font-size: large;
}
div.progress {
  height: 0;
}
div.progress > div {
  position: relative;
  bottom: 72px;
  z-index: 1;
}
</style>