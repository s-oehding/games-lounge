<template>
  <div class="container-fluid">
    <div class="row">
      <h1>Search</h1>
      <hr>
    </div>
    <div class="row">
      <v-client-table :data.sync="sorted.data" :columns.sync="columns" :options="options"></v-client-table>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

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
  },
  computed: {
    sorted: function () {
      return {
        data: _.orderBy(this.$parent.games, ['Object', 'first_release_date'], ['asc'])
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
