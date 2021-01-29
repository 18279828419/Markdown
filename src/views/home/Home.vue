
<template>
  <div class='home'>
    <div class="bunner">
      <van-swipe :autoplay="3000" lazy-render>
        <van-swipe-item v-for="image in images" :key="image">
          <img :src="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router'
export default {
  components: {},
  setup () {
    const router = useRouter()
    const state = reactive({});
    onMounted(() => { });
    const images = [
      'https://muxin-1258803575.cos.ap-guangzhou.myqcloud.com/banner3.jpg',
      'https://muxin-1258803575.cos.ap-guangzhou.myqcloud.com/banner2.jpg',
      'https://muxin-1258803575.cos.ap-guangzhou.myqcloud.com/banner1.jpg',
    ];
    return { state, images };
  }
};
</script>
<style lang='less' scoped>
.home{
  .bunner{
    width: 375px;
    img{
      width: 100%;
    }
  }
}
</style>