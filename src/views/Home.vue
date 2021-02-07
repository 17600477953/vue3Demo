<template>
  <div class="container">
    <van-swipe lazy-render class="swipe">
      <van-swipe-item v-for="image in images" :key="image">
        <img :src="image" />
      </van-swipe-item>
    </van-swipe>
    <van-grid style="margin-bottom:10px;">
      <van-grid-item icon="photo-o" text="路由跳转" to="/about" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
    </van-grid>
    <van-cell
      title="天气预报"
      is-link
      url="http://baidu.weather.com.cn/mweather15d/101180703.shtml"
    />
    <van-cell
      title="双色球开奖"
      is-link
      url="https://h5.jiangduoduo.com/detail/1001/21015?frm=C_ALADDIN"
    />
    <van-cell title="新闻" is-link url="https://news.sina.cn/?from=wap" />
    <!-- <div class="aaa"></div> -->
    <van-tabbar route>
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/mine" icon="friends-o">
        我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import {
  Tabbar,
  TabbarItem,
  Button,
  Swipe,
  SwipeItem,
  Grid,
  GridItem,
  Cell
} from 'vant'
export default {
  components: {
    [Button.name]: Button,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Cell.name]: Cell
  },
  setup() {
    const state = reactive({
      name: 'jack'
    })
    const images = [
      'https://img01.yzcdn.cn/vant/apple-1.jpg',
      'https://img01.yzcdn.cn/vant/apple-2.jpg'
    ]
    return {
      images,
      ...toRefs(state)
    }
  }
}
</script>
<style lang="less">
.container {
  width: 375px;
  background: @bg_gray;
}
.swipe {
  width: 375px;
  height: 150px;
  margin-bottom: 10px;
  img {
    width: 100%;
    height: 100%;
  }
}
.text {
  font-size: 12px;
}
.hah {
  background: chartreuse;
}
.aaa {
  width: 100%;
  height: 100px;
  .hah();
}
</style>
