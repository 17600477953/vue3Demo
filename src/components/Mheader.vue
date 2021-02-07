<template>
  <van-nav-bar
    :title="title"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  >
    <template #right>
      <van-icon name="search" size="18" />
    </template>
  </van-nav-bar>
</template>

<script>
import { NavBar, Toast, Icon } from 'vant'
export default {
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon
  },
  props: {
    title: String
  },
  setup() {
    const onClickLeft = () => {
      window.history.length > 1 ? window.history.go(-1) : null
    }
    const onClickRight = () => Toast('按钮')
    return {
      onClickLeft,
      onClickRight
    }
  }
}
</script>

<style></style>
