<template>
  <div class="container-fluid">
    <div class="row">
      <h1>Search</h1>
      <hr>
    </div>
    <div class="row">
      <v-client-table :data.sync="this.$parent.games" :columns.sync="columns" :options="options"></v-client-table>
    </div>
  </div>
</template>

<script>
import Image from '../components/data-table/Image'
import Link from '../components/data-table/Link'
import Releasedate from '../components/data-table/Releasedate'

export default {
  name: 'search-page',
  data () {
    return {
      columns: ['Image', 'Link', 'category', 'publishers', 'category', 'game_modes', 'player_perspective', 'Releasedate', 'keywords'],
      options: {
        templates: {
          Image, Link, Releasedate
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .VueTables  {
    width: 100%;
    padding: 2rem;
  }
</style>
