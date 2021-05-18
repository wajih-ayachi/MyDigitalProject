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

};
</script>
<style lang="scss">
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");

.v-btn {
 font-family: "Open Sans", sans-serif;
}
.page{
  position: fixed;
  width:inherit ;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
  transform: translateX(2em);
}
.fade-enter-active, .fade-leave-active{
  transition: all .3s ease;
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