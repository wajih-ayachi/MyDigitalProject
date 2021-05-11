<template>
  <v-container fluid pa-0>
    <Carousel :users="users"/>
    <Ckoi />
    <Activities />
    <ProfileSlider :users="randomUsers" />
  </v-container>
</template>

<script>
  import Carousel from './Carousel'
  import Ckoi from './Ckoi'
  import Activities from './Activities'
  import ProfileSlider from './ProfileSlider'

  export default {
    name:'home',
    components: { Carousel, Ckoi, Activities, ProfileSlider },
    computed: {
      users () {
        return this.$store.getters['getAllUsers']
      },
      randomUsers () {
        return this.$store.getters['getRandomUsers']
      }
    },
    async mounted () {
      await this.$store.dispatch('getUsers')
    }
  }
</script>
