import { defineStore } from 'pinia'

const useUser = defineStore("user", {
  state: () => ({
    name: "zeo",
    age: 18,
    level: 100
  })
})

export default useUser