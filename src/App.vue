<template>
  <div id="app">
    <timeline></timeline>
  </div>
</template>

<script>
import Timeline from './components/Timeline'

export default {
  name: 'app',
  components: {
    Timeline
  }
}
</script>

<style lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}


/* Sticky footer styles
-------------------------------------------------- */
body, html {
margin: 0;
padding: 0;
height:100%;
width:100%;
}
body {
  /* Margin bottom by footer height */
  margin-bottom: 60px;
  background: #dedede;

  .main-container {
    width: auto;
    overflow-x: scroll;
    height: 100vh;
    max-height: 100vh;
  }
}
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  /* Set the fixed height of the footer here */
  height: 60px;
  line-height: 60px; /* Vertically center the text there */
  background-color: #f5f5f5;
  z-index: 99;
}


/* Custom page CSS
-------------------------------------------------- */
/* Not required for template or sticky footer method. */

.container {
  width: auto;
  max-width: 680px;
  padding: 0 15px;
}

</style>
