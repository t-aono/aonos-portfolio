module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    headers: {
       'X-Frame-Options': 'SAMEORIGIN'
    }
  }
}
