<template>
  <div id="content-wrapper">
      <sidebar></sidebar>
      <div id="content">
        <navbar></navbar>
        <div class="main">
            <router-view></router-view>
        </div>
        <footer class="footer">
            <div class="col-sm-12">
                <a href="#" title="">Impressum</a> <span>|</span> <a href="#" title="">Datenschutz</a>
            </div>
        </footer>
      </div>
  </div>
</template>

<script>

import Igdb from 'igdb-api-node'
global.mashapeKey = 'fPuFjE8ECkmshCTfCozasOklqoXjp1SZdgFjsnEWNh6uXrkfxP'

export default {
  name: 'app',
  data () {
    return {
      companies: {},
      games: {},
      platforms: {},
      searchString: 'zelda',
      loading: true,
      ready: false
    }
  },
  mounted () {
    this.fetchGames()
    this.getCompanies()
    this.getPlatforms()
  },
  methods: {
    fetchGames () {
      Igdb.games({ limit: 50, offset: 0, search: this.searchString, fields: '*' })
      .then(
      response => {
        this.games = response.body
        this.$nextTick(function () {
          this.loading = false
          this.ready = true
        })
      },
      error => {
        console.log(error)
        this.loading = false
      })
    },
    getPlatforms () {
      this.loading = true
      Igdb.platforms({ offset: 0, fields: '*' })
      .then(
      response => {
        this.platforms = response.body
        this.$nextTick(function () {
          this.loading = false
        })
      },
      error => {
        console.log(error)
        this.loading = false
      })
    },
    getCompanies () {
      this.loading = true
      Igdb.companies({ fields: '*' })
      .then(
      response => {
        this.companies = response.body
        this.$nextTick(function () {
          this.ready = true
        })
      },
      error => {
        console.log(error)
        this.ready = false
      })
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Electrolize');

$brand-primary: turquoise;
$gray-medium: #d2d2d2;
$gray-dark: #292b2c;

$sidebarWidth: 30% !default;
$header-height: 55px;
$footer-height: 45px;

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

/* Main styles
-------------------------------------------------- */
body, html {
  margin: 0;
  padding: 0;
  height: 100vh;
  max-height: 100vh;
  width:100%;
}

section {
  display: flex;
  align-items:center;
  height: 100%;
}

h1, h2, h3, h4, h5, h6, a, button, .btn, input {
  font-family: 'Electrolize', sans-serif;
}

#content-wrapper {
  height: 100vh;
  width: 100vw;
  position: fixed;
  display: block;
  #sidebar {
    background-color: $gray-dark;
    width: $sidebarWidth;
    height: 100%;
    display: inline-block;
    float: left;
  }
  #content {
    .navbar {
      border-radius: 0px;
      position: fixed;
      height: $header-height;
      width: calc(100% - #{$sidebarWidth});
      z-index:999;
    }
    background: $gray-medium;
    height: 100%;
    width: calc(100% - #{$sidebarWidth});
    display: inline-block;
    float: left;
    overflow: scroll;
    
    .main {
      max-height: calc(100vh - calc(#{$footer-height} + #{$header-height}));
      height: calc(100vh - calc(#{$footer-height} + #{$header-height}));
      margin-top: $header-height;
    }

    .footer {
      position: fixed;
      bottom: 0;
      width: 100%;
      height: $footer-height;
      line-height: $footer-height; /* Vertically center the text there */
      background-color: $gray-dark;
      z-index: 99;
      color: $brand-primary;
      a, span {
        color: $brand-primary;
      }
    }
  }
}

@media (min-width: 768px) {
  #content-wrapper {
    #sidebar {
      width: 300px;
    }
    #content {
      width: calc(100% - 300px);
      .navbar {
        width: calc(100% - 300px);
      }
    }
  }
}

</style>
