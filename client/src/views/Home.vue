<template>
  <v-app>
    <Navbar />
    <v-main style="background: rgb(2,0,36);background: linear-gradient(126deg,rgba(2,0,36,1) 0%, rgba(163,0,244,1) 100%, rgba(0,212,255,1) 100%);">
      <div class="mt-10 text-center ml-10 mr-10 pl-10 pr-10">
        <h1 class="text-h1 font-weight-medium mb-5 white--text">Gorilla</h1>
        <h4 class="text-h4 font-weight-thin mb-10 white--text">
          Conçu pour la protection des animaux.
        </h4>
        <Features />
        <h6 class="text-h6 font-weight-thin mb-10 white--text">
          Gorilla est une crypto-monnaie destinée à protéger les espèces en voie de disparition.
          Sa Blockchain utilise la technologie Proof of Work (PoW), pour inscrire les transactions dans le temps.
          Les personnes qui participent à la vérification des blocs sont récompensés en $GRA grâce a la moitié des frais de transaction.
          Le reste des frais permet directement d'aider les associations de protection pour les animaux.
        </h6>
        <v-btn class="mt-10 mb-10" color="deep-purple" dark x-large rounded to="/game">
          <v-icon class="mr-2">mdi-heart-plus</v-icon>
          Obtenir des $GRA
        </v-btn>
        <v-btn color="white" x-large rounded class="ml-3 mt-10 mb-10 deep-purple--text" to="/contact">
          <v-icon class="mr-2">mdi-account-question</v-icon>
          Qui sommes-nous ?
        </v-btn>
        <v-row class="mt-5 mb-5" justify="center">
          <v-img src="https://media.discordapp.net/attachments/809369898983358495/809939678098751508/logo_epitech_jam.png" max-height="300" max-width="300" contain></v-img>
        </v-row>
        <h6 class="text-h6 font-weight-light mb-10 white--text">Gorilla ($GRA) by MonkeyWare</h6>
      </div>
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Features from '../components/Features.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    Footer,
    Features
  },
};
</script>
