<template>
  <v-app>

    <Header/>

    <Navigation/>

    <v-main>
      <Products/>
      <About/>
      <Skill/>
      <Career/>
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
import Career from './components/Career.vue';
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
    Career,
    Contact,
    Footer
  },
  data: () => ({
    //
  }),
};
</script>

<style>
h3 {
  color: #4dd0e1;
}
h2 {
  color: #314259;
}
</style>