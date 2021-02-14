<template>
    <v-item-group class="mb-10">
        <v-container elevation-15>
            <v-row>
                <v-col cols="12" md="4">
                    <v-item>
                        <v-card class="mx-auto" max-width="400" min-height="220" dark>
                            <v-list-item two-line>
                            <v-list-item-content>
                                <v-list-item-title class="text-h2 font-weight-bold">{{ gra.name }}</v-list-item-title>
                            </v-list-item-content>
                            </v-list-item>
                            <v-card-text>
                                <v-row align="center">
                                    <v-col class="display-1" cols="6">{{ gra.amount }} <b>{{ gra.alt }}</b></v-col>
                                    <v-col cols="6">
                                    <v-img :src="gra.logo" width="86"></v-img>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                        </v-card>
                    </v-item>
                </v-col>
                <v-col cols="12" md="4">
                    <v-item>
                        <v-card class="mx-auto" max-width="400" min-height="220" dark>
                            <v-list-item two-line>
                            <v-list-item-content>
                                <v-list-item-title class="text-h2 font-weight-bold">Total</v-list-item-title>
                            </v-list-item-content>
                            </v-list-item>
                            <v-card-text>
                                <v-row align="center">
                                    <v-col class="display-1" cols="6">
                                        <v-list-item two-line>
                                            <v-list-item-content>
                                                <v-list-item-title class="text-h5 font-weight-bold">{{ gra.amount * gra.value }}€</v-list-item-title>
                                                <v-list-item-subtitle class="text-h6 light-green--text">24h: <b>+ {{ Math.ceil((gra.amount * gra.value) - wallet.yesterday) }}€</b></v-list-item-subtitle>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-col>
                                    <v-col cols="6">
                                        <v-icon size="60">mdi-cash-multiple</v-icon>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                        </v-card>
                    </v-item>
                </v-col>
                <v-col cols="12" md="4">
                    <v-item>
                        <v-card class="mx-auto" max-width="400" max-height="220" dark>
                            <v-list-item two-line>
                            <v-list-item-content>
                                <v-list-item-title class="text-h2 font-weight-bold">Address</v-list-item-title>
                            </v-list-item-content>
                            </v-list-item>
                            <v-card-text>
                                <v-card-text class="headline font-weight-light">1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX</v-card-text>
                            </v-card-text>
                        </v-card>
                    </v-item>
                </v-col>
            </v-row>
        </v-container>
    </v-item-group>
</template>

<script>
export default {
    name: "Wallet",
    data() {
        return {
            gra: { name: ' Gorilla', amount: 538.5, alt: '$GRA', value: 1.26, logo: 'https://media.discordapp.net/attachments/809369898983358495/809939678098751508/logo_epitech_jam.png'},
            wallet: { yesterday: 571.6}
        };
    },
}
</script>