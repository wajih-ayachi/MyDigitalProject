<template>
  <v-carousel height="600px">
    <v-autocomplete
      v-model="searchedUser"
      :items="users"
      chips
      clearable
      hide-details
      hide-selected
      append-icon="mdi-magnify"
      label="Chercher une activitée..."
      solo
      class="search-bar"
      background-color="#bbc8ce"
      rounded
      :item-text="(item) => item.name.first + ' ' + item.name.last"
    >
      <template v-slot:item="{ item }">
        <v-list-item-avatar>
          <v-img
            :alt="`${item.name.first} avatar`"
            :src="item.picture.thumbnail"
          ></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title v-text="item.name.first + ' ' + item.name.last"></v-list-item-title>
        </v-list-item-content>
      </template>
    </v-autocomplete>
    <v-carousel-item
      v-for="(item, i) in carouselImages"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    />
  </v-carousel>
</template>

<script>
export default {
  name: 'HomeCarousel',
  props: {
    users: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      searchedUser: null,
      carouselImages: [
        { src: "https://images.pexels.com/photos/1267697/pexels-photo-1267697.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
        { src: "https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?cs=srgb&dl=pexels-fauxels-3184183.jpg&fm=jpg" },
      ]
    }
  },
}
</script>

<style scoped>
.search-bar { 
  position:absolute;
  top: 75px;
  z-index: 1;
  width: 70%;
  margin-left: 15%;
}

</style>