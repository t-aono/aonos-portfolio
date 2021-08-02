<template>
  <v-app>

    <Header/>

    <v-main>
      <v-container class="mt-15">
        <Products/>
        <About/>
        <Skill/>
        <Career/>
        <Contact/>
      </v-container>
    </v-main>

    <Footer/>

  </v-app>
</template>

<script>
import Header from './components/Header.vue';
import Products from './components/Products.vue';
import About from './components/About.vue';
import Skill from './components/Skill.vue';
import Career from './components/Career.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: { 
    Header,
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
