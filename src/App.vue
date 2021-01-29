<template>
  <div id="app">
    <!-- <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive> -->
    <router-view></router-view>
    <Foo />
  </div>
</template>

<script>
import Foo from './components/Foo.vue'
export default {
  name: 'App',
  components: {
    Foo
  },
  setup () {
    // provide('数据名称', 要传递的数据)
  }
}
</script>
