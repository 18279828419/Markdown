<template>
  <div class="foo">
    <van-tabbar @change="activeFun" v-model="state.active">
      <van-tabbar-item icon="home-o">主页</van-tabbar-item>
      <van-tabbar-item icon="search">查找</van-tabbar-item>
      <van-tabbar-item icon="audio">音乐</van-tabbar-item>
      <van-tabbar-item icon="manager-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// 子组件导入 inject
import { reactive, onMounted } from 'vue';
export default {
  name: 'foo',
  props: {
  },
  setup () {
    const state = reactive({
      active: 0
    });
    let activeFun = ()=>{
      console.log(state.active)
    }
    onMounted(() => {
    });
    return { state,activeFun };
  }

}
</script>