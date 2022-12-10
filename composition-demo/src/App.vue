<template>
  <h1>counter:{{counter}}</h1>
  <button @click="increase">+1</button>
  <button @click="counter++">+1</button>
  <br>
  <h1>info: {{info.counter}}</h1>
  <button @click="info.counter.value++">+1</button>
</template>

<script>
import { ref } from 'vue';


export default {
  setup() {
    let counter = ref(0)
    const increase = () => {
      counter.value++
      console.log(counter)
    }

    let info = {
      counter
    }
    const increaseInfo = () => {
      info.counter.value++
    }

    return {
      counter,
      increase,
      info,
      increaseInfo
    }
  }
}
</script>

<style>

</style>
