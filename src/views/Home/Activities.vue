<template>
  <v-row  class="mb-9 grey" width>
    <v-col sm="12" md="3" offset-md="3">
      <v-img src="@/assets/images/activites-manuelles.jpg" class="rounded-xl">
        <v-btn
          class="imageBtn"
          elevation="5"
          large
          to="/actu"
          >ACTIVITÉS MANUELLES</v-btn>
      </v-img>
    </v-col>
    <v-col sm="12" md="3">
      <v-img src="@/assets/images/activites-sport.jpg" class="rounded-xl">
        <v-btn
          class="imageBtn"
          elevation="5"
          large
          to="/actu"
          >ACTIVITÉS SPORTIVES</v-btn>
      </v-img>
    </v-col>
    <v-col sm="12" md="3" offset-md="3">
      <v-img src="@/assets/images/activites-culturelles.jpg" class="rounded-xl span">
        <v-btn
          class="imageBtn"
          elevation="5"
          large
          to="/actu"
          >ACTIVITÉS CULTURELLES</v-btn>
      </v-img>
    </v-col>
    <v-col sm="12" md="3">
      <v-img src="@/assets/images/loisir-detente.jpg" class="rounded-xl">
        <v-btn
          class="imageBtn"
          elevation="5"
          large
          to="/actu"
          >LOISIRS ET DETENTE</v-btn>
      </v-img>
    </v-col>

  </v-row>
</template>

<script>
export default {

}
</script>

<style scoped>
.rounded-20 {
  border-radius: 20px;
}

.v-btn.imageBtn{
  background-color: gray!important;
  color: white;
  font-weight: bold;
  margin-top: 26%;
  display: flex;
  font-size: 20px;
}

</style>