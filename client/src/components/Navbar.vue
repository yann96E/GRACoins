<template>
    <v-navigation-drawer
        dark
        app
        class="grey darken-4"
        :mini-variant="mini"
        mini-variant-width="62px"
        expand-on-hover
    >
        <v-list-item>
            <v-list-item-avatar>
                <v-img :src="coin.image"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
                <v-list-item-title class="title">
                    {{ coin.title }}
                </v-list-item-title>
                <v-list-item-subtitle>
                    {{ coin.alt }}
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
        <v-divider class="mb-5"></v-divider>
        <v-list shaped>
            <v-list-item v-for="item in items" :key="item.title" link :to='item.to'>
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>

export default {
  name: 'Navbar',
  data() {
    return {
      items: [
        { title: 'Home', icon: 'mdi-home', to: '/' },
        { title: 'Dashboard', icon: 'mdi-chart-box', to: '/dashboard' },
        { title: 'Transaction', icon: 'mdi-swap-horizontal', to: '/transaction' },
      ],
      coin: {
        title: 'MonkeyWare',
        alt: '$GRA - Wallet',
        image: 'https://media.discordapp.net/attachments/809369898983358495/810023652124393472/Getter_1.png',
      },
    };
  },
};
</script>
