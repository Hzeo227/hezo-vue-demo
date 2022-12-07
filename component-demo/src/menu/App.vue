<template>
  <Menu @click-item="clickItem" :menu-list="['裤子', '鞋子', '衣服']"></Menu>
  <ProductList :current-index="currentIndex"></ProductList>
</template>

<script>
import Menu from './menu.vue'
import ProductList from './productList.vue'
export default {
  data() {
    return {
      currentIndex: 0
    }
  },
  components: {
    Menu,
    ProductList
  },
  methods: {
    clickItem(index) {
      this.currentIndex = index
    }
  }
}
</script>

<style scoped>

</style>