<template>
    <v-item-group class="mb-10">
        <v-container elevation-15>
            <v-row>
                <v-col v-for="item in items" :key="item.name" cols="12" md="4">
                    <v-item>
                        <v-card class="d-flex align-center" dark>
                            <v-list-item-content>
                                <v-avatar class="mb-2" size="72"><img :src="item.avatar"></v-avatar>
                                <v-list-item-title class="title font-weight-light">{{ item.name }}</v-list-item-title>
                                <v-list-item-subtitle class="subtitle mb-2 font-weight-light">{{ item.job }}</v-list-item-subtitle>
                            </v-list-item-content>
                                <v-list>
                                    <v-list-item v-for="icon in icons" :key="icon" link>
                                        <v-list-item-icon>
                                            <v-icon>{{ icon }}</v-icon>
                                        </v-list-item-icon>
                                </v-list-item>
                            </v-list>
                        </v-card>
                    </v-item>
                </v-col>
            </v-row>
        </v-container>
    </v-item-group>
</template>

<script>
export default {
    name: "Squad",
    data() {
        return {
            items: [
                { name: ' Nathan Leibel', avatar: 'https://cdn.discordapp.com/avatars/212495376450584576/aa3e0dc862d08770c16308ddf95dcac9.png?size=256', job: 'Développeur Front-End' },
                { name: ' Patrick Eiermann', avatar: 'https://cdn.discordapp.com/avatars/552964297420963842/5022df5702474e1022c3a6fc83a7247a.png?size=256', job: 'Développeur Back-End' },
                { name: ' Auguste Thomann', avatar: 'https://cdn.discordapp.com/avatars/279369143688626177/842e1ec1ab6b8983c7a280f0ec996193.png?size=256', job: 'Photographe/Graphiste' },
                { name: ' Frédéric Forster', avatar: 'https://cutewallpaper.org/21/depressed-anime-aesthetic/sad-anime-boy-aesthetics-Tumblr.jpg', job: 'Graphiste/Designer' },
                { name: ' Yann Simon', avatar: 'https://i.pinimg.com/originals/37/04/6f/37046ff1f5591c461bfc44f3eb309973.png', job: 'Intégrateur Back-End' },
                { name: ' Paul Rosenkranz', avatar: 'https://cdn.discordapp.com/avatars/310736310186934273/9fd096939afedeedba0f087f75619444.png?size=256', job: 'Présent pour la raclette' },
            ],
            icons: [
                'mdi-facebook',
                'mdi-twitter',
                'mdi-linkedin',
                'mdi-instagram',
            ],
        };
    },
}
</script>