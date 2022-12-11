<script setup>
import AreaHeader from './AreaHeader.vue'
import RoomItem from './RoomItem.vue'

defineProps({
  areaData: {
    type: Object,
    default: () => ({})
  }
})
</script>

<template>
  <div class="area-room">
    <!-- Header -->
    <area-header  :title="areaData.title" :subtitle="areaData.subtitle"></area-header>

    <!-- High Score House Source -->

    <div class="room-list">
    <template v-for="item in areaData.list" :key="item.id">
      <room-item :high-score-list="item"></room-item>
    </template>
  </div>
  </div>
</template>

<style scoped>
.room-list {
  display: flex;
  flex-wrap: wrap;
  margin: 20px -8px;
}
</style>