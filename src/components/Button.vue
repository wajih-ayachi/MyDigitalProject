<template>
<!-- @click="increment" -->
  <div>
    <v-btn @click="handleClick('increment')">
      +
    </v-btn>
    <v-btn @click="handleClick('decrement')">
      -
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'Button',

  props: {
    counter: {
      type: Number,
      default: 0,
      require: true
    }
  },

  methods: {
    handleClick (method) {
      this.$emit('incrument', method)
    }
  },

}
</script>

<style>

</style>