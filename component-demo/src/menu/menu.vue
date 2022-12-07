<template>
  <div class="menu">
    <span class="item" v-for="(item, index) in menuList" 
    :class="{active: index === currentIndex}"
    @click="clickItem(index)">{{item}}</span>
  </div>
</template>

<script>
import ProductList from './productList.vue'
export default {
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    menuList: {
      type: Array,
      default: () => []
    }
  },
  emits: ["clickItem"],
  methods: {
    clickItem(index) {
      this.currentIndex = index
      this.$emit("clickItem", index)
    }
  },
  components: {
    ProductList
  }
}
</script>

<style scoped>
.menu {
  display: flex;
}
.item {
  flex: 1;
  line-height: 48px;
  text-align: center;
}
.active {
  color: red;
  border-bottom: 1px solid red;
}
</style>