<template>
  <v-row
    wrap
    class="mb-6 mx-15"
    :class="{
      'text-center': $vuetify.breakpoint.xsOnly,
      'mt-15': !$vuetify.breakpoint.xsOnly,
    }"
    no-gutters
  >
    <v-col sm="12" md="7">
      <v-card elevation="0" style="padding-top: 70px">
        <h1 class="font-weight-bold">NEED-U C'EST QUOI ?</h1>
        <v-spacer></v-spacer>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas porro
          assumenda optio, magni beatae eveniet necessitatibus corporis ut
          reprehenderit dolorem totam repellendus? Pariatur error doloribus
          possimus quibusdam beatae est omnis nisi, corporis, impedit velit,
          accusantium assumenda! Ut, eos delectus quisquam incidunt
          necessitatibus at, ipsum, facere repellendus nam laborum sequi quod
          architecto labore sed quis recusandae vitae perspiciatis magni nihil
          optio. Optio nam id beatae commodi unde a doloribus, repellendus eos
          explicabo pariatur maiores doloremque expedita at! Quod accusantium
          expedita commodi perspiciatis, illo beatae reprehenderit, atque id
          quibusdam eum dolores cumque adipisci sequi porro voluptatum? Sit
          voluptates laboriosam laborum aspernatur error?
        </p>
      </v-card>
      <v-spacer></v-spacer>
      <v-tab to="/Apropos">
        <v-btn class="font-weight-bold" color="primary" dark>cliquer ici</v-btn>
      </v-tab>
    </v-col>
    <v-col
      sm="12"
      md="5"
      :class="{
        'd-flex': !$vuetify.breakpoint.xsOnly,
        'justify-end': !$vuetify.breakpoint.xsOnly,
      }"
    >
      <v-img
        :class="{
          'ml-5': !$vuetify.breakpoint.xsOnly,
        }"
        contain
        max-height="400"
        max-width="500"
        src="../../assets/images/equipe_NeedU.png"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style>
</style>