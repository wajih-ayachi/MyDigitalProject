<template>
  <v-container fluid>
    <v-layout row pt-9>
      <v-col class="mx-auto">
        <v-tab class="white--text" to="/">
          <v-icon ml-5 class="secondary--text">mdi-arrow-left </v-icon>
        </v-tab>
      </v-col>
      <v-col class="ml-5">
        <v-card
          loadinge
          elevation="10"
          width="300"
          height="100"
          justify="center"
          class="text-center rounded-xl pt-5 ml-15"
        >
          <h1
            primary-title
            class="justify-center secondary--text font-weight-bold"
          >
            INSCRIPTION
          </h1>
        </v-card>
      </v-col>
      <v-col class="d-flex flex-row-reverse">
        <v-img
          justify="end"
          lazy-src="../../assets/images/bg8.png"
          max-height="250"
          max-width="250"
          src="../../assets/images/bg8.png"
        >
        </v-img>
      </v-col>
    </v-layout>
    <v-layout row pt-5>
      <v-card width="500" class="mx-auto rounded-xl mb-9 primary">
        <v-col class="mx-auto pl-9 pr-9">
          <a block class="mx-auto rounded-xl mb-9 font-weight-bold text-center"
            >NEEDÉ</a
          >
        </v-col>
      </v-card>
    </v-layout>
    <v-layout row pt-5>
      <v-card width="500" class="mx-auto rounded-xl mb-9 primary">
        <v-col class="mx-auto pl-9 pr-9">
          <a
            block
            class="mx-auto rounded-xl mb-9 font-weight-bold text-center text-center"
            >NEEDEUR</a
          >
        </v-col>
      </v-card>
    </v-layout>

    <v-row>
      <v-col class="d-flex flex-row-start">
        <v-img
          justify="start"
          max-height="250"
          max-width="250"
          lazy-src="../../assets/images/bg-12.png"
          src="../../assets/images/bg-12.png"
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
.v-application .text-center {
  text-align: center !important;
  color: #5c606e;
}
</style>
