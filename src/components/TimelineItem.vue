<template>
  <li class="timeline-item">
    <div class="timeline-dot primary"><i class="fa fa-star"></i></div>
    <div class="timeline-panel">
      <div class="img-wrapper">
        <img v-if="coverImage.image" :src="coverImage.image" :alt="this.name">
        <img v-else src="//placehold.it/250/250" :alt="this.name">
      </div>
      <div class="content-wrapper">
        <h6>{{ this.name }}</h6>
        <router-link :to="{ name: 'game', params: { id: this.id }}" class="btn btn-success">View Details</router-link>
        <p class="desc"><span class="text-muted">Score</span> {{ this.developer }}</p>
      </div>
    </div>
    <div class="timeline-date"><i class="fa fa-calendar" aria-hidden="true"></i> {{ this.releasedate }}</div>
    <slot></slot>
  </li>
</template>

<script>
import Igdb from 'igdb-api-node'
export default {
  name: 'timeline-item',
  props: ['id', 'developer', 'cover', 'name', 'summary', 'releasedate'],
  computed: {
    coverImage: function () {
      return {
        image: Igdb.image(this.cover, 'cover_big', 'jpg')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
