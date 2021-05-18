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
.col-xl,
.col-xl-auto,
.col-xl-12,
.col-xl-11,
.col-xl-10,
.col-xl-9,
.col-xl-8,
.col-xl-7,
.col-xl-6,
.col-xl-5,
.col-xl-4,
.col-xl-3,
.col-xl-2,
.col-xl-1,
.col-lg,
.col-lg-auto,
.col-lg-12,
.col-lg-11,
.col-lg-10,
.col-lg-9,
.col-lg-8,
.col-lg-7,
.col-lg-6,
.col-lg-5,
.col-lg-4,
.col-lg-3,
.col-lg-2,
.col-lg-1,
.col-md,
.col-md-auto,
.col-md-12,
.col-md-11,
.col-md-10,
.col-md-9,
.col-md-8,
.col-md-7,
.col-md-6,
.col-md-5,
.col-md-4,
.col-md-3,
.col-md-2,
.col-md-1,
.col-sm,
.col-sm-auto,
.col-sm-12,
.col-sm-11,
.col-sm-10,
.col-sm-9,
.col-sm-8,
.col-sm-7,
.col-sm-6,
.col-sm-5,
.col-sm-4,
.col-sm-3,
.col-sm-2,
.col-sm-1,
.col,
.col-auto,
.col-12,
.col-11,
.col-10,
.col-9,
.col-8,
.col-7,
.col-6,
.col-5,
.col-4,
.col-3,
.col-2,
.col-1 {
  width: 100%;
  padding: 12px;
}
.v-application .mb-9 {
  margin-bottom: 36px !important;
  text-align: center;
  font-size: 30px;
}
.v-application .text-center {
  text-align: center !important;
  color: #5c606e;
}
</style>