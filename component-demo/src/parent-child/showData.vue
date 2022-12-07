<template>
  <h1>你是：{{name}}</h1>
  <h1>你：{{age}}</h1>
</template>

<script>
export default {
  props: ["name", "age"]
}
</script>

<style scoped>

</style>