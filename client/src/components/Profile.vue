<template>
    <v-menu bottom min-width="250px" rounded offset-y dark>
        <template v-slot:activator="{ on }">
            <v-btn icon x-large v-on="on">
                <v-badge bordered bottom color="light-green accent-4" dot offset-x="10" offset-y="10">
                    <v-avatar size="38">
                        <v-img :src="user.avatar"></v-img>
                    </v-avatar>
                </v-badge>
            </v-btn>
        </template>
        <v-card>
            <v-list-item-content class="justify-center">
                <div class="mx-auto text-center">
                        <v-avatar size="42" class="mb-3">
                            <v-img :src="user.avatar"></v-img>
                        </v-avatar>
                    <h3>{{ user.name }}</h3>
                    <v-divider class="my-3"></v-divider>
                    <v-btn depressed rounded text class="text-capitalize"><v-icon class="mr-4">mdi-cog</v-icon>Settings</v-btn>
                    <v-divider class="my-3"></v-divider>
                    <v-btn depressed rounded text class="text-capitalize"><v-icon class="mr-4">mdi-door</v-icon>Logout</v-btn>
                </div>
            </v-list-item-content>
        </v-card>
    </v-menu>
</template>

<script>

export default {
    name: "profile",
    data: () => ({
        user: { name: 'LordKynda', avatar: 'https://cdn.discordapp.com/avatars/212495376450584576/aa3e0dc862d08770c16308ddf95dcac9.png?size=256' }
    })
}
</script>