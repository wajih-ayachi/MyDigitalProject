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
          Quel type d'activité culturelle?
        </h1>
      </v-col>
    </v-row>
    <v-row class="mb-9 pb-5 pt-5 mt-9" width>
      <v-col class="mt-12" sm="12" md="3" offset-md="3">
        <v-img src="@/assets/images/theatre.jpg" class="rounded-xl">
          <v-btn class="imageBtn" elevation="5" large to="/actu">cinéma</v-btn>
        </v-img>
      </v-col>
      <v-col class="mt-12" sm="12" md="3">
        <v-img src="@/assets/images/musee.jpg" class="rounded-xl">
          <v-btn class="imageBtn" elevation="5" large to="/actu">musée</v-btn>
        </v-img>
      </v-col>
      <v-col sm="12" md="12" offset-md="3">
        <v-img
          height="270px"
          width="49%"
          src="@/assets/images/lecture.jpg"
          class="rounded-xl span"
        >
          <v-btn class="imageBtn2" elevation="5" large to="/actu"
            >lecture</v-btn
          >
        </v-img>
      </v-col>

      <v-col class="mt-12" sm="12" md="3" offset-md="3">
        <v-img src="@/assets/images/concert.jpg" class="rounded-xl span">
          <v-btn class="imageBtn" elevation="5" large to="/actu">concert</v-btn>
        </v-img>
      </v-col>
      <v-col class="mt-12" sm="12" md="3">
        <v-img src="@/assets/images/cinema1.png" class="rounded-xl">
          <v-btn class="imageBtn" elevation="5" large to="/actu">Théâtre</v-btn>
        </v-img>
      </v-col>

      <v-col md="12" sm="12" class="mx-auto rounded-xl mb-6 text-center">
      </v-col>
      <v-col class="mt-12" sm="12" md="3" offset-md="3">
        <v-img src="@/assets/images/aplo-opera.png" class="rounded-xl">
          <v-btn class="imageBtn" elevation="5" large to="/actu">opéra</v-btn>
        </v-img>
      </v-col>
      <v-col class="mt-12" sm="12" md="3">
        <v-img src="@/assets/images/party.png" class="rounded-xl span">
          <v-btn class="imageBtn" elevation="5" large to="/actu"
            >festival</v-btn
          >
        </v-img>
      </v-col>
      <v-col sm="12" md="12" offset-md="3">
        <v-img
          height="270px"
          width="49%"
          src="@/assets/images/regarder-un-film.jpg"
          class="rounded-xl span"
        >
          <v-btn class="imageBtn2" elevation="5" large to="/actu"
            >soirée film</v-btn
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
  margin-top: 105px;
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