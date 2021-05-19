<template>
  <v-carousel
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
    class="mb-10"
  >
    <v-carousel-item v-for="(user, i) in users" :key="i">
      <MiniProfile :user="user" />
   
    </v-carousel-item>
    
  </v-carousel>
</template>

<script>
import MiniProfile from "../../components/profile/MiniProfile";

export default {
  name: "ProfileSlider",
  props: ["users"],
  components: { MiniProfile },
};
</script>
