<template>
    <v-item-group class="mb-10">
        <v-container elevation-15>
            <v-row>
                <v-col v-for="item in items" :key="item.title" cols="12" md="4">
                    <v-item>
                        <v-card class="d-flex align-center" dark>
                            <v-list-item-content>
                                <v-list-item-title class="title mb-2 font-weight-light"><v-icon x-large>{{ item.icon }}</v-icon>{{ item.title }}</v-list-item-title>
                                <v-card-text class="subtitle font-weight-light">{{ item.description }}</v-card-text>
                            </v-list-item-content>
                        </v-card>
                    </v-item>
                </v-col>
            </v-row>
        </v-container>
    </v-item-group>
</template>

<script>
export default {
    name: "Features",
    data() {
        return {
            items: [
                { title: ' Rapide', icon: 'mdi-lightning-bolt', description: 'Toutes les transactions effectuées avec $GRA sont prises en compte immédiatement, elles sont traités instantanéments.' },
                { title: ' Sécurisé', icon: 'mdi-lock-check', description: 'La monnaie propose sa propre Blockchain, toutes les transactions sont vérifiés par des tiers. Cela garantie une sécurité maximale.' },
                { title: ' Innovant', icon: 'mdi-rocket-launch', description: 'Nous sommes la première crypto-monnaie à nous engager pour la protection des espèces en voie de disparition.' },
            ],
        };
    },
}
</script>