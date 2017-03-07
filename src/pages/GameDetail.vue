<template>
  <div class="container game-container">
    <div class="row">
      <div class="col-sm-12 cover-image">
        <ul class="screen-slider">
          <li  v-for="img in gameScreenshots" class="slider-item">
            <img :src="img" alt="">
          </li>
        </ul>
      </div>
      <div class="col-sm-12">
        <h1 class="jumbotron">{{ game.name }}</h1>
        <hr>
        <ul class="list-inline">
          <li class="list-inline-item badge badge-default"><i class="fa fa-star"></i> Rating: {{ game.rating }} %</li>
          <li class="list-inline-item badge badge-default"><i class="fa fa-count"></i> Ratingcount: {{ game.rating_count }}</li>
          <li class="list-inline-item badge badge-default"><i class="fa fa-count"></i> Popularity: {{ game.popularity}}</li>
        </ul>
      </div>
      <div class="col-sm-12 col-md-6">
        <h4>Story:</h4>
        <p>{{ game.summary }}</p>

        <div class="card col-sm-12">
          <div class="card-block">
            <h4 class="card-title">Screenshots:</h4>
            <div class="card-text">
              <ul class="screen-slider">
                <li  v-for="img in gameScreenshots" class="slider-item">
                  <img :src="img" alt="">
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-6">
        <div class="row meta">
          <div class="card col-sm-12">
            <div class="card-block">
              <h4 class="card-title">Publisher:</h4>
              <div class="card-text">
                <ul class="list-inline">
                  <li  v-for="publisher in game.publishers" class="list-inline-item badge badge-default">{{ publisher }}</li>
                </ul>
                <span>Releasedate: <time :datetime="game.first_release_date">{{ game.first_release_date | toDate }}</time></span>
              </div>
            </div>
          </div>
          <div class="card col-sm-12">
            <div class="card-block">
              <h4 class="card-title">Keywords:</h4>
              <div class="card-text">
                <ul class="list-inline">
                  <li  v-for="keyword in game.keywords" class="list-inline-item badge badge-default">{{ keyword }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
  </div>
</template>

<script>
import $ from 'jquery'
import 'slick-carousel'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Igdb from 'igdb-api-node'
import { toDate } from '../filters'

export default {
  components: {
  },
  data () {
    return {
      game: {},
      gameScreenshots: []
    }
  },
  mounted () {
    this.game = this.selected.game[0]
    this.getScreenshots()
    this.$nextTick(function () {
      $('.screen-slider').slick()
    })
    // $('.screen-slider').slick()
  },
  methods: {
    filterGames (obj) {
      return obj.id === this.$route.params.id
    },
    getScreenshots () {
      for (var screenshot of this.game.screenshots) {
        var img = Igdb.image(screenshot, 'screenshot_huge', 'jpg')
        this.gameScreenshots.push(img)
      }
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
  },
  filters: {
    toDate
  }
}
</script>

<style lang="scss">
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
