<template>
  <div>
    <navigation-link url="/profile">
        TEXT LINK
    </navigation-link>

    <navigation-link url="/logout">
      Logout
    </navigation-link>
  </div>
</template>

<script>
// import CustomButton from './Button'
import NavigationLink from './NavigationLink'

export default {
  name: 'Parent',

  components: {
    NavigationLink
  },

  data () {
    return {
      counter: 0
    }
  },

  methods: {
    handleIncrement (method) {
      if (method === 'increment') {
        this.counter ++
      } else {
        this.counter --
      }
    }
  },
  mounted () {
    this.layout = this.$route.meta.wajih
    console.log(this.$route)
  }
}

</script>