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
      <v-spacer></v-spacer>
      <v-menu open-on-hover top offset-y>
      <template v-slot:activator="{ on, attrs }">
          <v-tab to="/apropos">A propos</v-tab>
      <v-btn icon v-bind="attrs"
          v-on="on">
      <v-icon class="ml-3 mr-3" left>$expand</v-icon>
      </v-btn>
       
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="v-on"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
      
    
      <v-spacer></v-spacer>

      <v-tab to="/actu">Actualités</v-tab>
      <v-spacer></v-spacer>
      <v-tab to="/contact">Contact</v-tab>
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
     <v-switch
        v-model="$vuetify.theme.dark"
        hint=""
       
        label=""
        persistent-hint
        class="mt-5 ml-5"
      ></v-switch>

    <!-- <v-menu
      left
      bottom
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="n in 5"
          :key="n"
          @click="() => {}"
        >
          <v-list-item-title>Option {{ n }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu> -->
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
