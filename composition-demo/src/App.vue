<template>
  <h1>counter:{{counter}}</h1>
  <button @click="increase">+1</button>
  <button @click="counter++">+1</button>
  <br>
  <h1>info: {{info.counter}}</h1>
  <button @click="info.counter.value++">+1</button>

  <br>
  <h2>X: {{ scrollPosition.x }}</h2>
  <h2>Y: {{ scrollPosition.y }}</h2>

  <br><br><br>
  <br><br><br>
  <br><br><br>
  <br><br><br>
  <br><br><br>
  <br><br><br>
  <br><br><br>
  <br><br><br><br><br><br>
  <br><br><br>
  <br><br><br>
  <br><br><br>
  <br><br><br>
  <br><br><br>
  <br><br><br>
  <br><br><br>
  <br><br><br>
  <br><br><br>
  <br><br><br>
</template>

<script>
import { ref } from 'vue';
import useScrollPosition  from './hooks/useScrollPostion';

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

    const { scrollPosition } = useScrollPosition()
    
    return {
      counter,
      increase,
      info,
      scrollPosition
    }
  }
  }


</script>

<style>

</style>
