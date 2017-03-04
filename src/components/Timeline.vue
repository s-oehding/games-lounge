<template>
  <ul class="timeline" :style="{ 'width': + this.games.length*255 + 'px;' }">
    <timeline-item
      v-for="game in games"
      :key="game.id"
      :cover="game.cover"
      :developer="game.aggregated_rating"
      :name="game.name"
      :class="{'odd': game.id % 2 === 0, 'even': game.id % 2 !== 0 }"
      ></timeline-item>
  </ul>
</template>

<script>
import TimelineItem from './TimelineItem'

import Igdb from 'igdb-api-node'
global.mashapeKey = 'fPuFjE8ECkmshCTfCozasOklqoXjp1SZdgFjsnEWNh6uXrkfxP'
export default {
  name: 'hexgrid',
  components: {
    TimelineItem
  },
  data () {
    return {
      games: {}
    }
  },
  created () {
    this.fetchGames()
  },
  methods: {
    fetchGames () {
      Igdb.games({ limit: 50, offset: 0, fields: '*' })
      .then(
      response => {
        this.games = response.body
        console.log(response.body)
      })
    }
  }
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Roboto');

.timeline {
  height: 400px;
}

</style>
