<template>
    <v-app>
        <Navbar />
        <v-main style="background: rgb(2,0,36);background: linear-gradient(126deg,rgba(2,0,36,1) 0%, rgba(163,0,244,1) 100%, rgba(0,212,255,1) 100%);">
            <div class="mt-5 text-center ml-10 mr-10 pl-10 pr-10 pb-10">
                <h1 class="text-h1 font-weight-medium mb-5 white--text">Transaction</h1>
                <v-item-group class="mb-10 pb-10" style="padding-top: 10%;">
                    <v-container elevation-15>
                        <v-row>
                            <v-col cols="12" md="5">
                                <v-item>
                                    <v-card class="mx-auto" min-height="220" dark>
                                        <v-card-text class="pr-10 pl-10">
                                            <v-row align="center" class="mt-3">
                                                <p class="title font-weight-normal">Adresse: </p>
                                            </v-row>
                                            <v-row align="center">
                                                <p class="subtitle font-weight-light">1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX</p>
                                            </v-row>
                                            <v-row align="center">
                                                <p class="title font-weight-normal">Solde: </p>
                                            </v-row>
                                            <v-row align="center">
                                                <p class="subtitle font-weight-light">538.5 $GRA (678.51€)</p>
                                            </v-row>
                                        </v-card-text>
                                    </v-card>
                                </v-item>
                            </v-col>
                            <v-col cols="12" md="2">
                                <v-item>
                                    <v-icon x-large class="mt-10" color="white">mdi-arrow-right-circle</v-icon>
                                </v-item>
                                <v-btn class="mt-10 mb-10" color="deep-purple" dark x-large rounded to="/game">
                                    <v-icon color="white" class="mr-2">mdi-check</v-icon>
                                    Valider
                                </v-btn>
                            </v-col>
                            <v-col cols="12" md="5">
                                <v-item>
                                    <v-card class="mx-auto" min-height="220" dark>
                                        <v-card-text class="pr-10 pl-10">
                                            <v-row align="center" class="mt-1">
                                                <p class="title font-weight-normal">Envoyer</p>
                                            </v-row>
                                            <v-row align="center">
                                                <v-text-field v-model="Destinataire" label="Destinataire" required></v-text-field>
                                            </v-row>
                                            <v-row align="center">
                                                <v-text-field v-model="Amount" label="Somme" required></v-text-field>
                                            </v-row>
                                        </v-card-text>
                                    </v-card>
                                </v-item>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-item-group>
            </div>
            <Footer/>
        </v-main>
    </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
    name: 'Transaction',
    components: {
        Navbar,
        Footer
    },
};
</script>