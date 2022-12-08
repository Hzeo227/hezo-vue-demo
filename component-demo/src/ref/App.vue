<template>
  <h1 ref="title" >{{message}}</h1>
  <button @click="changeMessage">切换message信息</button>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello World"
    }
  },
  methods: {
    changeMessage() {
      this.message = "Hello Zeo"
      console.log(this.$refs.title)
    }
  }
}
</script>

<style scoped>

</style>