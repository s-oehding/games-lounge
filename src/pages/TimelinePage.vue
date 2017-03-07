<template>
  <timeline :data="$parent.games" :ready="$parent.ready"></timeline>
</template>

<script>
import Timeline from '../components/Timeline'
export default {
  components: {
    Timeline
  },
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  
</style>
