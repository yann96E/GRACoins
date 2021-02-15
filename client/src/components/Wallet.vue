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
                                    <v-col v-if="this.user !== 'undefined'" class="display-1" cols="6">{{ this.user.amount }} <b>{{ gra.alt }}</b></v-col>
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
                                                <v-list-item-title v-if="this.coinValue !== 'undefined'" class="text-h5 font-weight-bold">{{ this.coinValue }}€</v-list-item-title>
                                                <v-list-item-subtitle class="text-h6 light-green--text">24h: <b>+ 0€</b></v-list-item-subtitle>
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
                                <v-card-text v-if="this.user !== 'undefined'" class="headline font-weight-light">{{ this.user.walletAddress }}</v-card-text>
                            </v-card-text>
                        </v-card>
                    </v-item>
                </v-col>
            </v-row>
        </v-container>
    </v-item-group>
</template>

<script>
import { baseUrl } from "../main"

export default {
  name: "Wallet",

  async beforeCreate() {
    this.user = await fetch(`${baseUrl}/me`, { method: 'GET'}).then(req => req.json())
    this.coinValue = await fetch(`${baseUrl}/get-coin-value`, { method: 'GET'}).then(req => req.json())
    this.sum = this.user.amount * this.coinValue
  },

  data() {
      return {
          gra: { name: ' Gorilla', amount: 538.5, alt: '$GRA', value: 1.26, logo: 'https://media.discordapp.net/attachments/809369898983358495/809939678098751508/logo_epitech_jam.png'},
          wallet: { yesterday: 571.6}
      };
  },
}
</script>
-
