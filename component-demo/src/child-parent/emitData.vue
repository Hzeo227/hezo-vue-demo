<template>
  <button @click="add(1)">+1</button>
  <button @click="add(5)">+5</button>
  <button @click="sub(1)">-1</button>
  <button @click="sub(5)">-5</button>
</template>

<script>
export default {
  emits: ["add", "sub"],
  methods: {
    add(count) {
      this.$emit("add", count)
    },
    sub(count) {
      this.$emit("sub", count)
    }
  }
}
</script>

<style scoped>

</style>