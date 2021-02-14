<template>
  <v-app>
    <Navbar />
    <v-main style="background: rgb(2,0,36);background: linear-gradient(126deg,rgba(2,0,36,1) 0%, rgba(163,0,244,1) 100%, rgba(0,212,255,1) 100%);">
      <div class="mt-5 text-center ml-10 mr-10 pl-10 pr-10">
        <h1 class="text-h1 font-weight-medium mb-5 white--text">Notre équipe</h1>
        <h4 class="text-h4 font-weight-thin mb-10 white--text">
          Elle n'attend plus que vous !
        </h4>
        <Squad />
      </div>
      <!-- <Footer/> -->
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Squad from '@/components/Squad.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Contact',
  components: {
    Navbar,
    Footer,
    Squad
  },
};
</script>