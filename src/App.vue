<template>
  <v-app app class="secondary">
    <NavBar />

    <v-main class="pa-0">
      <router-view></router-view>
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    NavBar,
    Footer,
  },
  data: () => ({}),

  methods: {},
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");

.v-btn {
 font-family: "Open Sans", sans-serif;
}
// .v-application .red.lighten-3 {
//   background-color: #ee957f !important;
//   border-color: #ef9a9a !important;
// }
// .a.undefined.v-tab--active.v-tab {
//   color: blue !important;
// }
// .v-btn.v-tab--active.v-tab {
//   color: red;
// }
</style>