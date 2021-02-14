<template>
    <v-app>
        <Navbar />
        <v-app-bar app dark>
            <v-spacer></v-spacer>
                <v-btn icon class="mr-2">
                    <v-badge bordered overlap color="red accent-4" content="1">
                        <v-icon >mdi-bell</v-icon>
                    </v-badge>
                </v-btn>
            <Profile />
        </v-app-bar>
        <v-main style="background: rgb(2,0,36);background: linear-gradient(126deg,rgba(2,0,36,1) 0%, rgba(163,0,244,1) 100%, rgba(0,212,255,1) 100%);">
            <div class="mt-5 text-center ml-10 mr-10 pl-10 pr-10">
                <Wallet />
                <v-card class="mx-auto text-center" color="rgb(28, 28, 28, 0.3)" elevation="15">
                    <v-card-text>
                    <v-sheet color="rgb(28, 28, 28, 0.5)" elevation="10">
                        <v-sparkline
                        :value="value"
                        color="rgba(255, 255, 255, .7)"
                        height="50"
                        padding="15"
                        stroke-linecap="round"
                        line-width="1"
                        auto-draw
                        >
                        <template v-slot:label="item">
                            ${{ item.value }}
                        </template>
                        </v-sparkline>
                    </v-sheet>
                    </v-card-text>
                    <v-card-text>
                        <div class="text-h5 font-weight-light white--text">Valeurs des 24 dernières heures.</div>
                    </v-card-text>
                </v-card>
            </div>
            <Footer />
        </v-main>
    </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Profile from '@/components/Profile.vue';
import Wallet from '@/components/Wallet.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  data: () => ({
      value: [
        0.95,
        1.02,
        1.06,
        1.15,
        1.04,
        1.13,
        1.21,
        1.26,
      ],
    }),
  components: {
    Navbar,
    Profile,
    Wallet,
    Footer
  },
};
</script>