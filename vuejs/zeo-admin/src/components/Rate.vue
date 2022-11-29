<template>
  <div>
    {{ Rate }}
  </div>
</template>

<script setup>
  import { computed } from '@vue/reactivity';

  let props = defineProps({
    value: Number
  })
  let rate = computed(() => {
    "★★★★★☆☆☆☆☆".slice(5 - props.value, 10 - props.value)
  })

</script>