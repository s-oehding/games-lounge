<template>
  <div class="container game-container">
    <div class="row">
      <div class="col-sm-12 cover-image">
        <img :src="this.coverImage.image" alt="">
      </div>
      <div class="col-sm-12">
        <h1 class="jumbotron">{{ game.name }}</h1>
      </div>
      <div class="col-sm-12 col-md-6">
        <h4>Keywords:</h4>
        <div class="label label-default" v-for="keyword in game.keywords">
          {{ keyword }}
        </div>
      </div>
      <div class="col-sm-12 col-md-6">
        <h4>Story:</h4>
        <p>{{ game.summary }}</p>
      </div>
    </div>  
  </div>
</template>

<script>
import Igdb from 'igdb-api-node'
export default {
  components: {
  },
  data () {
    return {
      game: {}
    }
  },
  mounted () {
    this.game = this.selected.game[0]
  },
  methods: {
    filterGames (obj) {
      return obj.id === this.$route.params.id
    }
  },
  computed: {
    selected: function () {
      return {
        game: this.$parent.games.filter(this.filterGames)
      }
    },
    coverImage: function () {
      if (this.game.screenshots) {
        return {
          image: Igdb.image(this.game.screenshots[0], 'screenshot_huge', 'jpg')
        }
      } else {
        return {
          image: 'http://placehold.it/500/500'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.game-container {
  overflow: scroll;
  .cover-image {
    margin: 2rem 0;
    img {
      max-width: 100%;
      height:auto;
    }
  }
}
</style>
