<template>
	<nav class="navbar navbar-toggleable-md navbar-inverse bg-inverse">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <router-link class="navbar-brand" to="/">Game Lounge</router-link>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item"><router-link class="nav-link" to="/map">Map</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/search">Search</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/timeline">Timeline</router-link></li>
        </ul>
        <form v-on:submit.prevent="fetchGames" class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search Games" v-model="$parent.searchString">
          <button class="btn btn-outline-success my-2 my-sm-0" v-on:click.prevent="$parent.fetchGames">Search</button>
        </form>
      </div>
    </nav>
</template>

<script>
export default {
  name: 'navbar',
  props: [],
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

<style lang="scss">
 .navbar {
  .router-link-active {
    color: turquoise !important;
  }
 }
</style>
