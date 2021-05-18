<template>
  <v-container fluid>
    <br />
    <GmapMap :center="center" :zoom="12" style="width: 100%; height: 400px " />
    <br/>
    <br/>
    <br/>
  </v-container>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      center: { lat: 45.508, lng: -73.587 },
    };
  },
};
</script>