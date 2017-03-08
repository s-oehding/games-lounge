<template>
  <img v-if="this.data.cover" :src="this.data.cover.url">
  <img v-else src="https://unsplash.it/90/90/?random">
</template>

<script>
  export default {
    props: ['data']
  }
</script>
