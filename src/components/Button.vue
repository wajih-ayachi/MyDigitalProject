<template>
<!-- @click="increment" -->
  <div>
    <v-btn @click="handleClick('increment')">
      <slot name="label" />
      <slot name="icon" />
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