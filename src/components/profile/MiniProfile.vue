<template>
  <v-row class="pb-1 pa-5 text-center">
    <v-col cols="6" class="pr-15">
      <v-img
        :src="user.picture.large"
        :aspect-ratio="1"
        max-height="300"
        max-width="400"
        class="ml-auto rounded-lg mt-5"
      />
    </v-col>
    <v-col class="pt-10 col-sm-5 col-md-3">
      <h3 class="profile-name secondary--text text-h4 mb-5">
        {{ fullName }}
      </h3>
      <p class="profile-description gray-dark--text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae similique
        expedita esse! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quae similique expedita esse! Consectetur adipisicing elit. Quae
        similique expedita esse!
      </p>
      <div class="profile-stats">
        <v-row>
          <v-col>
            <span class="primary--text font-weight-bold text-h5 mr-2">13</span>
            <span class="gray-dark--text">Prestations</span>
          </v-col>
          <v-col>
            <span class="primary--text font-weight-bold text-h5 mr-2">03</span>
            <span class="gray-dark--text">Pouces orange</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <span class="primary--text font-weight-bold text-h5 mr-2">09</span>
            <span class="gray-dark--text">Pouces bleu</span>
          </v-col>
          <v-col>
            <span class="primary--text font-weight-bold text-h5 mr-2">01</span>
            <span class="gray-dark--text">Pouces rouge</span>
          </v-col>
          <v-row >
          
   <v-rating
       class="ml-15 mt-1 "
      v-model="rating"
      background-color="grey"
      half-increments
      color="primary"
      large
      clearable
    ></v-rating>
          </v-row>
          <v-row>
            
          </v-row>
        </v-row>
      </div>
      <div class="profile-footer"></div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "MiniProfile",
  data:()=>({
    rating: 3,
    length:5,
  }),
  props: ["user"],
  computed: {
    fullName() {
      return this.user.name.first + " " + this.user.name.last;
    },
  },
};
</script>

<style>
</style>