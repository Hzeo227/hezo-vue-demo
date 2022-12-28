<script setup>
import useUser from '@/stores/user';
import { storeToRefs } from 'pinia';

const userStore = useUser()

const {name, age, level} = storeToRefs(userStore)

const changeState = () => {
  userStore.name = "zx"
  userStore.age = 20
  userStore.level = 100
}

</script>

<template>
  <div class="home">
    <h2>Home Page</h2>
    <h2>name: {{ name }}</h2>
    <h2>age: {{ age }}</h2>
    <h2>level: {{ level }}</h2>
    <button @click="changeState">change state</button>
  </div>
</template>

<style scoped>

</style>