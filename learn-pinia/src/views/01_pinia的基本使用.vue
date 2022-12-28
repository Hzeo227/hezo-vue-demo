<script setup>
  import useCounter from '@/stores/counter';

  const counterStore = useCounter()

</script>

<template>
  <div class="home">
    <h2>Home Page</h2>
    <h2>counter: {{ counterStore.count }}</h2>
  </div>
</template>

<style scoped>

</style>