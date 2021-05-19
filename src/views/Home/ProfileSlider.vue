<template>
<v-row>
  <v-col>
    <v-carousel
      height="500"
      hide-delimiter-background
      show-arrows-on-hover
      class="mb-10"
    >
      <!-- cycle -->
      <v-carousel-item v-for="(user, i) in users" :key="i">
        <MiniProfile :user="user" />
      </v-carousel-item>
    </v-carousel>
  </v-col>
</v-row>
</template>

<script>
import MiniProfile from "../../components/profile/MiniProfile";

export default {
  name: "ProfileSlider",
  props: ["users"],
  components: { MiniProfile },
};
</script>

<style>
.v-carousel__controls {
  display: none !important;
}
</style>
