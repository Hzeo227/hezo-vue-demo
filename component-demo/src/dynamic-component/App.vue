<template>
  <div class="tabs">
    <template v-for="item in optionalList" :key="item">
      <button @click="clickItem(item)"
              :class="{ active: item === currentItem }">
        {{item}}
      </button>
    </template>
    <component :is="currentItem"></component>
  </div>
</template>

<script>
import Home from './optional-list/Home.vue'
import About from './optional-list/About.vue'
import Category from './optional-list/Category.vue'
export default {
  components: {
    Home,
    About,
    Category
  },  
  data() {
    return {
      optionalList: ["home", "about", "category"],
      currentItem: "home"
    }
  },
  methods: {
    clickItem(item) {
      this.currentItem = item
    }
  }
}
</script>

<style scoped>
.active {
  color: red;
  font-weight: 700;
}
</style>