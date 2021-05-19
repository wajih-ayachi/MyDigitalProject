<template>
  <v-app app class="secondary" dark>
    <NavBar @click:drawer="clickDrawer"/>
    <Drawer v-if="$vuetify.breakpoint.xsOnly && showDrawer" />
    <v-main>
      <transition name="fade" mode="out-in">
      <router-view></router-view>
      </transition>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";
import Footer from "./components/Footer.vue";
import Drawer from "./components/Drawer.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
    Drawer,
  },
  data () {
    return {
      showDrawer: false
    }
  },

  methods: {
    clickDrawer (value) {
      this.showDrawer = value
    }
  },

  mounted () {
    const dark = this.$store.getters['global/getDark']
    this.$vuetify.theme.dark = dark
  }

};
</script>
<style lang="scss">
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");

// .v-btn {
//  font-family: "Open Sans", sans-serif;
// }
// .page{
//   position: fixed;
//   width:inherit ;
// }
// .fade-enter, .fade-leave-to{
//   opacity: 0;
//   transform: translateX(2em);
// }
// .fade-enter-active, .fade-leave-active{
//   transition: all .3s ease;
// }
// .theme--dark.v-card {
//     background-color: #121212;
//     color: #FFFFFF;
// }
// .theme--dark.v-application .secondary--text {
//     color: white !important;
//     caret-color: #424242 !important;
// }
// .theme--dark.v-application .text-center[data-v-028c8680] {
//   color: #FFFFFF;
// }
// .theme--dark.v-application--is-ltr .v-tabs--align-with-title > .v-tabs-bar:not(.v-tabs-bar--show-arrows):not(.v-slide-group--is-overflowing) > .v-slide-group__wrapper > .v-tabs-bar__content > .v-tab:first-child, .v-application--is-ltr .v-tabs--align-with-title > .v-tabs-bar:not(.v-tabs-bar--show-arrows):not(.v-slide-group--is-overflowing) > .v-slide-group__wrapper > .v-tabs-bar__content > .v-tabs-slider-wrapper + .v-tab {
//     margin-left: 42px;
//     color: rgba(255, 255, 255, 0.6);
// }
// .v-tab--active {
//     color: white!important;
// }
// .v-tabs-slider {
//     background-color: currentColor;
//     height: 100%;
//     width: 100%;
//     color: white;
// }

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