
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import  UserHome from './component/UserHome.vue'
  import Index from './component/Index.vue'

export default {
  components: {
    UserHome,Index
  },
  watch: {
    '$route' (to, from) {
      console.log(to)
    }
  }
}
</script>

<style>


</style>
