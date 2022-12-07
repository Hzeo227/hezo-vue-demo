<template>
  <h1>{{counter}}</h1>
  <EmitData @add="add" @sub="sub"></EmitData>
</template>

<script>
import EmitData from './emitData.vue'
export default {
  components: {
    EmitData
  },
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    add(count) {
      this.counter += count
    },
    sub(count) {
      this.counter -= count
    }
  }
}
</script>

<style scoped>

</style>