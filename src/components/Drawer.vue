<template>
<v-navigation-drawer
  permanent
  app
  color="primary"
>
  <v-divider></v-divider>

  <v-list
    nav
    
  >
    <v-list-item link to="/">
      <v-list-item-title class="white--text" >Home</v-list-item-title>
    </v-list-item>
    <v-list-item link to="/actu">
      <v-list-item-title class="white--text">Actualités</v-list-item-title>
    </v-list-item>
    <v-list-item link to="/apropos">
      <v-list-item-title class="white--text">A propos</v-list-item-title>
    </v-list-item>
    <v-list-item link to="/contact">
      <v-list-item-title class="white--text">Contact</v-list-item-title>
    </v-list-item>
  </v-list>
</v-navigation-drawer>
</template>

<script>
export default {
  name: 'Drawer'
}
</script>
