<template>
  <v-container>
    <v-app-bar app class="red lighten-3" dark>
      <v-tool-bar-title>NEED-U</v-tool-bar-title>

      <v-spacer> </v-spacer>
      <v-tab to="/">
        <v-btn text rounded style="font-weight: bold">Home</v-btn>
      </v-tab>
      <v-spacer> </v-spacer>
      <v-tab to="/apropos">
        <v-btn exact text rounded style="font-weight: bold"> A propos</v-btn>
      </v-tab>
      <v-spacer> </v-spacer>
      <v-tab to="/actu">
        <v-btn text rounded style="font-weight: bold">Actualités</v-btn>
      </v-tab>
      <v-spacer> </v-spacer>

      <v-tab to="/contact">
        <v-btn text rounded style="font-weight: bold">Contact</v-btn>
      </v-tab>
      <v-spacer> </v-spacer>
      <v-btn icon prepend-icon="mdi-account-cercle">
        <v-icon light> mdi-bell-ring-outline </v-icon>
      </v-btn>
      <v-tab to="/login">
        <v-btn icon prepend-icon="mdi-account-cercle">
          <v-icon rounded> mdi-account-circle </v-icon>
        </v-btn>
      </v-tab>
      <v-tab to="/inscription">
        <v-btn text rounded>S'inscrire</v-btn>
      </v-tab>
    </v-app-bar>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");

.v-btn {
  font-family: "Open Sans", sans-serif;
}
.v-application .red.lighten-3 {
  background-color: #ee957f !important;
  border-color: #ef9a9a !important;
}
.a.undefined.v-tab--active.v-tab {
  color: blue !important;
}
.v-btn.v-tab--active.v-tab {
  color: red;
}
</style>#