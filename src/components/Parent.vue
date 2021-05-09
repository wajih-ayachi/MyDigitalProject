<template>
  <div>
    <h1>Click: {{ counter }}</h1>
    <CustomButton @incrument="handleIncrement" />
  </div>
</template>

<script>
import CustomButton from './Button'

export default {
  name: 'Parent',

  components: {
    CustomButton
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
  }
}

</script>
