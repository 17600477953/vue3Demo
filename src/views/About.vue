<template>
  <div class="about">
    <Mheader title="关于我的" />
    <div class="content">
      <van-button
        color="linear-gradient(to right, #ff6034, #ee0a24)"
        @click="fn"
        v-preventReClick
      >
        渐变色按钮
      </van-button>
    </div>
  </div>
</template>
<script>
import { Button } from 'vant'
import Mheader from '@/components/Mheader.vue'
import { useStore } from 'vuex'
export default {
  components: {
    Mheader,
    [Button.name]: Button
  },
  setup() {
    const store = useStore()
    const fn = () => {
      console.log(1, store.state.userData)
      store.dispatch('setUserData')
      console.log(2, store.state.userData)
    }
    return {
      fn
    }
  }
}
</script>
