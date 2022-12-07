<template>
  <div>
    <p>-----------</p>
    <h3>{{product[currentIndex]}}</h3>
    <p>-----------</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: ["裤子列表", "鞋子列表", "衣服列表"]
    }
  },
  props: {
    currentIndex: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped>

</style>