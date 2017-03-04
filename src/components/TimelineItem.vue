<template>
  <li class="timeline--item" :style="{ 'background-image': 'url(//images.igdb.com/igdb/image/upload/' + this.cover.cloudinary_id + '.png)' }">
    <div class="wrapper">
      <p>{{ this.name }}</p>
      <p class="desc">{{ this.developer }}</p>
    </div>
  </li>
</template>

<script>
export default {
  name: 'timeline-item',
  props: ['developer', 'cover', 'name']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

.timeline--item {
  position: relative;
  // margin-top: -90px;
  margin-top: .5rem;
  margin-right: .5rem;
  margin-left: 5px;
  width: 250px;
  height: 250px;
  // border-radius: 50%;
  // border-left: 4px solid green;
  // border-right: 4px solid cyan;
  transition: all 0.5s;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  overflow: hidden;
  display: inline-block;
}

.wrapper { 
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.75);
  opacity: 0;
  text-align: center;
  color: white;
  will-change: transform;
  backface-visibility: hidden;
  transform: translate(-50%, -50%) scale(0.9);
  transition: all 0.5s;
  
  -webkit-shape-outside:   polygon(
    50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%
  );
  
  shape-outside:   polygon(
    50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%
  );
}

.desc {
  margin: 1em 0 0;
  // font-family: 'ATC Overlook';
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  line-height: 1.5;
  color: turquoise;
}


.timeline--item:hover {
  .wrapper {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1); 
  }
}
</style>
