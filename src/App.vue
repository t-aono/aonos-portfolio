<template>
  <v-app>

    <Header/>

    <Navigation/>

    <v-main>
      <Products/>
      <About/>
      <Skill/>
      <History/>
      <Contact/>
    </v-main>

    <Footer/>

  </v-app>
</template>

<script>
import Header from './components/Header.vue';
import Navigation from './components/Navigation.vue';
import Products from './components/Product.vue';
import About from './components/About.vue';
import Skill from './components/Skill.vue';
import History from './components/History.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: { 
    Header,
    Navigation,
    About,
    Skill,
    Products,
    History,
    Contact,
    Footer
  },
  created: () => {
    document.title = "aono's portfolio"
  },
  data: () => ({
    //
  }),
};
</script>

<style>
.main-color {
  background-color: #4dd0e1;
}
.main-color-txt {
  color: #4dd0e1;
}
.sub-color {
  background-color: #314259;
}
</style>