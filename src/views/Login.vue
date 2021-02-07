<template>
  <div class="login">
    <div>
      <p>登陆</p>
      <van-cell-group>
        <van-field
          v-model="state.phone"
          type="tel"
          label="手机号"
          maxlength="11"
        >
          <template #button>
            <van-button size="small" type="primary" @click="sendCode">
              发送验证码
            </van-button>
          </template>
        </van-field>
        <van-field
          v-model="state.code"
          type="digit"
          label="验证码"
          maxlength="4"
        />
      </van-cell-group>
      <div style="height:16px"></div>
      <van-button type="primary" round block @click="login">登陆</van-button>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { Field, Button, Toast, CellGroup } from 'vant'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
  components: {
    [Field.name]: Field,
    [Button.name]: Button,
    [CellGroup.name]: CellGroup
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    const state = reactive({
      phone: '',
      code: ''
    })
    const sendCode = () => {
      if (state.phone.length === 11) {
        Toast('验证码发送成功')
      } else {
        Toast('请输入正确的手机号')
      }
    }
    const login = () => {
      store.dispatch('setUserData', {
        phone: state.phone,
        token: '0xcd893hdgn',
        userId: '2010826826838993'
      })
      Toast('登陆成功')
      router.push({ path: 'home' })
    }
    return {
      state,
      login,
      sendCode
    }
  }
}
</script>

<style lang="less">
.login {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  padding: 10px;
  > div {
    border: 1px solid #f1f1f1;
    border-radius: 10px;
    padding: 10px;
    > p {
      font-size: 16px;
      font-weight: 600;
      line-height: 24px;
      text-align: center;
    }
  }
}
</style>
