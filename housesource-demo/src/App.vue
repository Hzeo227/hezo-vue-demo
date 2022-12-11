<script setup>
import AreaRoom from './components/AreaRoom.vue'

import highScore from './data/high_score.json'
console.log(highScore)

</script>

<template>
  <div class="app">
    <area-room :area-data="highScore" />
  </div>

</template>

<style lang="less" scoped>
.app {
  width: 1032px;
  padding: 48px;
  margin: 0 auto;
}
</style>
