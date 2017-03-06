<template>
  <div>
    <nav class="navbar fixed-top navbar-toggleable-md navbar-light bg-faded">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">Games Timeline</a>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
        </ul>
        <form v-on:submit.prevent="fetchGames" class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search Games" v-model="searchString">
          <button class="btn btn-outline-success my-2 my-sm-0" v-on:click.prevent="fetchGames">Search</button>
        </form>
      </div>
    </nav>
    <ul class="timeline timeline-horizontal">
      <timeline-item
        v-if="ready"
        v-for="(game, index) in sortedGames.games"
        :key="game.first_release_date"
        :cover="game.cover"
        :developer="game.aggregated_rating"
        :name="game.name"
        :releasedate="game.first_release_date | toDate"
        :summary="game.summary"
        ></timeline-item>
    </ul>
  </div>
</template>

<script>
import _ from 'lodash'
import TimelineItem from './TimelineItem'
import { toDate } from '../filters'
import Igdb from 'igdb-api-node'
global.mashapeKey = 'fPuFjE8ECkmshCTfCozasOklqoXjp1SZdgFjsnEWNh6uXrkfxP'
export default {
  name: 'timeline',
  components: {
    TimelineItem
  },
  data () {
    return {
      games: {},
      searchString: 'zelda',
      ready: false
    }
  },
  mounted () {
    this.fetchGames()
  },
  methods: {
    fetchGames () {
      Igdb.games({ limit: 50, offset: 0, search: this.searchString, fields: '*' })
      .then(
      response => {
        this.games = response.body
        this.$nextTick(function () {
          this.ready = true
        })
      },
      error => {
        console.log(error)
        this.ready = false
      })
    }
  },
  computed: {
    sortedGames: function () {
      return {
        games: _.orderBy(this.games, ['Object', 'first_release_date'], ['asc'])
      }
    }
  },
  filters: {
    toDate
  }
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Roboto');

$timeline-bg: #333;//#e7eff1;
$timeline-height: 0.7rem;
$timeline-border: #999;
$timeline-shadow: 0 0 2rem 0 rgba(#000,0.1), inset 0 0 0.4em rgba(#000,0.1);
$timeline-border-width: 0.2rem;

$dot-bg: #333;
$dot-hover-bg: orangered;
$dot-size: 1.2rem;
$dot-hover-size: 1.6rem;
$dot-border: #666;
$dot-shadow: 0 0.1rem 1rem 0 rgba(#000,0.1), inset 0 0 0.4em rgba(#666,0.1), inset 0 0.4rem 0.1rem rgba(#666,0.3);
$dot-border-width: 0.16rem;

$notch-size: 1rem;

$label-bg: #E1F0EE;
$label-hover-bg: darken($label-bg,5);
$label-padding: 0.4rem;
$label-divider: 1px solid rgba(#fff,0.8);

$scroll-thumb: transparent;//#f1f5f7;

.timeline,
.timeline-horizontal {
  list-style: none;
  padding: 20px;
  position: relative;
}

.timeline {

  &:before {
    top: 40px;
    bottom: 0;
    position: absolute;
    content: " ";
    width: 3px;
    background-color: #eeeeee;
    left: 50%;
    margin-left: -1.5px;
  }

  .timeline-item {
    display: table-cell;
    // height: 280px;
    width: 8vw;
    // min-width: 320px;
    float: none !important;
    padding-left: 0px;
    padding-right: 20px;
    margin: 0 auto;
    vertical-align: bottom;
    margin-bottom: 20px;
    position: relative;
    top: 2px;
    left: 0px;

    &:before,
    &:after {
      content: "";
      display: table;
    }

    &:after {
      clear: both;
    }

    &:hover {
      .wrapper {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1); 
      }
    }

    &:last-child:nth-child(even) {
      float: right;
    }

    &:nth-child(even) {
      .timeline-panel {
        float: right;
        left: 16px;
        &:before {
          border-left-width: 0;
          border-right-width: 14px;
          left: -14px;
          right: auto;
        }
      }
    }

    .timeline-badge {
      color: #fff;
      width: 54px;
      height: 54px;
      line-height: 52px;
      font-size: 22px;
      text-align: center;
      position: absolute;
      top: 18px;
      left: 50%;
      margin-left: -25px;
      background-color: #333;
      border: 3px solid #ffffff;
      z-index: 100;
      border-top-right-radius: 50%;
      border-top-left-radius: 50%;
      border-bottom-right-radius: 50%;
      border-bottom-left-radius: 50%;
      i, .fa, .glyphicon {
        top: 2px;
        left: 0px;
      }
    }

    .timeline-date {
      display: inline-block;
    position: absolute;
    bottom: -1rem;
    left: 4.2rem;
    }

    .timeline-panel {
      position: relative;
      width: 33.33vw;
      float: left;
      right: 16px;
      // border: 1px solid #dedede;
      // background: #ffffff;
      border-radius: 2px;
      padding: 0;
      // height: 55vh;
      // -webkit-box-shadow: 0 1px 6px rgba(33, 33, 33, 0.175);
      // box-shadow: 0 1px 6px rgba(33, 33, 33, 0.175);
      // 
      
      &:before {
        position: absolute;
        top: 26px;
        right: -16px;
        display: inline-block;
        border-top: 16px solid transparent;
        border-left: 16px solid #fff;
        border-right: 0 solid #fff;
        border-bottom: 16px solid transparent;
        content: " ";
      }
      .img-wrapper {
        overflow: hidden;
        position: relative;
        img {
          width:100%;
          height: auto;
        }
        .img-overlay {
          background: #333;
          position: relative;
          display: block;
          top: 0;
          left:0;
          width:100%;
          height:100%;
          background: rgba(33,33,33,0.85);
          padding: 1rem;
          transition: all .25s ease;  
        }
        &:hover {
          .img-overlay {
            left:0;
          }
        }
      }
      .content-wrapper {
        padding: 1rem;
        margin-top: .5rem;
        // position: absolute;
        bottom:0;
        display:flex;
        align-items:flex-start;
        flex-direction:column;
        height:130px;
        width:100%;
        background: #ffffff;
      }
    }
    
    .desc {
      margin: 1rem 0 0;
      padding: .5rem;
      // font-family: 'ATC Overlook';
      letter-spacing: 0.1em;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 10px;
      line-height: 1.125;
      color: turquoise;
    }
  }

  &.timeline-horizontal {
    list-style: none;
    position: relative;
    padding: 20px 0px 20px 0px;
    display: inline-block;

    .timeline-item {
      &:before,
      &:after {
        display: none;
      }
      .timeline-panel {
        &:before {
          top: auto;
          bottom: -16px;
          left: 28px !important;
          right: auto;
          border-right: 16px solid transparent !important;
          border-top: 16px solid #fff !important;
          border-bottom: 0 solid #fff !important;
          border-left: 16px solid transparent !important;
        }
      }
    }
  }
}


.timeline-horizontal {
  list-style: none;
  position: relative;
  padding: 20px 0px 20px 0px;
  display: inline-block;
}
.timeline-horizontal:before {
  height: 3px;
  top: auto;
  bottom: 26px;
  left: 56px;
  right: 0;
  width: 100%;
  margin-bottom: 20px;
}
.timeline-horizontal .timeline-item {
  display: table-cell;
  height: 280px;
  width: 20%;
  min-width: 320px;
  float: none !important;
  padding-left: 0px;
  padding-right: 20px;
  margin: 0 auto;
  vertical-align: bottom;
}
.timeline-horizontal .timeline-item .timeline-panel {
  top: auto;
  bottom: 64px;
  display: inline-block;
  float: none !important;
  left: 0 !important;
  right: 0 !important;
  width: 100%;
  margin-bottom: 20px;
}
.timeline-horizontal .timeline-item .timeline-panel:before {
  top: auto;
  bottom: -16px;
  left: 28px !important;
  right: auto;
  border-right: 16px solid transparent !important;
  border-top: 16px solid #777 !important;
  border-bottom: 0 solid #777 !important;
  border-left: 16px solid transparent !important;
}
.timeline-horizontal .timeline-item:before,
.timeline-horizontal .timeline-item:after {
  display: none;
}
.timeline-horizontal .timeline-item .timeline-badge {
  top: auto;
  bottom: 0px;
  left: 43px;
}
</style>
