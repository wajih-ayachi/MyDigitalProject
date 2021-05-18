<template>
  <a
    :href="url"
    class="nav-link"
  >
    <slot>Default slot</slot>
  </a>
</template>

<script>
export default {
  props: ['url']
}
</script>

<style>

</style>