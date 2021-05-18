<template>
  <v-container fluid>
    <v-row class="justify-center pt-13">
      <v-col class="mx-auto">
        <v-tab class="white--text" to="/">
          <v-icon ml-5 class="secondary--text">mdi-arrow-left </v-icon>
        </v-tab>
      </v-col>
      <v-col ml-auto style="margin-right: 400px">
        <h1 class="secondary--text font-weight-black">
          Quel type d'activité sportive ?
        </h1>
      </v-col>
    </v-row>
    <v-row class="mb-9 pb-5 pt-5 mt-9" width>
      <v-col class="mt-12" sm="12" md="3" offset-md="3">
        <v-img src="@/assets/images/jouer-foot.jpg" class="rounded-xl">
          <v-btn class="imageBtn" elevation="5" large to="/actu"
            >Jouer un match</v-btn
          >
        </v-img>
      </v-col>
      <v-col class="mt-12" sm="12" md="3">
        <v-img src="@/assets/images/regarder-foot.jpg" class="rounded-xl">
          <v-btn class="imageBtn" elevation="5" large to="/actu"
            >Regarder un match</v-btn
          >
        </v-img>
      </v-col>
      <v-col sm="12" md="12" offset-md="3">
        <v-img
          height="100%"
          width="49%"
          src="@/assets/images/sport-individuel.jpg"
          class="rounded-xl span"
        >
          <v-btn class="imageBtn2" elevation="5" large to="/actu"
            >Sport individuel</v-btn
          >
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.v-btn.imageBtn {
  background-color: gray !important;
  width: 50%;
  color: white;
  font-weight: bold;
  margin-top: 26%;
  display: flex;
  font-size: 20px;
  margin-left: 80px;
}
.v-btn.imageBtn2 {
  background-color: gray !important;
  width: 50%;
  color: white;
  font-weight: bold;
  margin-top: 200px;
  display: flex;
  font-size: 20px;
  margin-left: 180px;
}
.v-image.rounded-xl {
  height: 190px;
}
.titre {
  color: #466f6e;
  font-weight: bold;
  margin-left: 50px;
  margin-top: 40px;
  text-align: center;
  display: block;
  font-size: 55px;
}
</style>