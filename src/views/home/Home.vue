
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
  name: null,
  components: {},
  setup () {
    const router = useRouter()
    const state = reactive({});
    onMounted(() => { });
    const images = [
      'https://img.yzcdn.cn/vant/apple-1.jpg',
      'https://img.yzcdn.cn/vant/apple-2.jpg',
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