<template>
  <v-container fluid pa-0>
    <Carousel :users="users"/>
    <Ckoi />
    <Activities />
    <ProfilCarousel/>
  </v-container>
</template>

<script>
import Carousel from './Carousel'
import Ckoi from './Ckoi'
import Activities from './Activities'
import ProfilCarousel from '../../components/ProfilCarousel'

export default {
  name:'home',
  components: { Carousel, Ckoi, Activities, ProfilCarousel },
  data() {
    return {
      users: []
    }
  },
  async mounted () {
    const response = await fetch('https://randomuser.me/api/?results=50')
    const result = await response.json()

    this.users = result.results.map((el) => el.email)
  }
}
</script>
