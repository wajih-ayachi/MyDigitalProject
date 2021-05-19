<template>
  <v-app-bar color="primary" dense dark app>
    <v-app-bar-nav-icon v-if="$vuetify.breakpoint.xsOnly" @click="showDrawer" />
    <!-- <v-flex style="width: 140px" class="font-weight-bold"> -->
    <v-tab class="white--text" to="/"> NEED U </v-tab>
    <!-- </v-flex> -->
    <!-- <v-toolbar-title>Need U</v-toolbar-title> -->
    <v-spacer></v-spacer>
    <v-tabs
      align-with-title
      :class="{
        'd-none': $vuetify.breakpoint.xsOnly,
      }"
    >
      <v-tab to="/">Home</v-tab>
      <v-tab to="/actu">Actualités</v-tab>
      <v-tab to="/contact">Contact</v-tab>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-tab
            v-bind="attrs"
            v-on="on"
          >
            A Props
          </v-tab>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-tabs>
    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon class="ml-3 mr-3">mdi-bell-ring-outline</v-icon>
    </v-btn>
    <!-- <v-spacer></v-spacer> -->
    <v-btn class="ml-3 mr-3" to="/login" icon>
      <v-icon>mdi-account-circle</v-icon>
    </v-btn>

    <v-btn class="white primary--text font-weight-bold" to="/inscription">
      S'inscrire
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon
        @click="toggleDarkMode"
        v-text="$vuetify.theme.dark ? 'mdi-weather-night' : 'mdi-weather-sunny'"
      />
       
    </v-btn>
    <!-- <v-switch
      dark
      v-model="$vuetify.theme.dark"
      persistent-hint
      class="mt-5 ml-5"
    ></v-switch> -->
  </v-app-bar>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    
    return {
      drawer: false,
        items: [
        { title: 'QUI SOMMES NOUS?' },
        { title: 'BLOG' },
       
      ],
    }
  
  },
  methods: {
    showDrawer() {
      this.drawer = !this.drawer;
      this.$emit("click:drawer", this.drawer);
    },
    toggleDarkMode () {
      this.$store.commit('global/toggleDarkMode')
      this.$vuetify.theme.dark = this.$store.getters['global/getDark']
    }
  },
};
</script>

<style scoped>
/* @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
 */

.v-btn {
  font-family: "Open Sans", sans-serif;
}
.v-list-item .v-list-item__title, .v-list-item .v-list-item__subtitle {
    line-height: 1.2;
    color: #EE957F;
    font-weight:500;
}
</style>
