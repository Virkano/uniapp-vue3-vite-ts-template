<script setup lang="ts">
import { useAuthStore } from '@/state/modules/auth'
import { Toast } from '@/utils/uniapi/prompt'
import { login } from '@/services/api/auth'
import { omit } from 'lodash-es'
import { useRequest } from 'alova'

const pageQuery = ref<Record<string, any> | undefined>(undefined)
onLoad((query) => {
  pageQuery.value = query
})

const router = useRouter()

const form = reactive({
  email: 'uni-app@test.com',
  password: 'Vue3_Ts_Vite',
})
const authStore = useAuthStore()
const { send: sendLogin } = useRequest(login, { immediate: false })
const submit = (e: any) => {
  sendLogin(e.detail.value).then((res) => {
    Toast('登录成功', { duration: 1500 })
    authStore.setToken(res.token)
    setTimeout(() => {
      if (unref(pageQuery)?.redirect) {
        // 如果有存在redirect(重定向)参数，登录成功后直接跳转
        const params = omit(unref(pageQuery), ['redirect', 'tabBar'])
        if (unref(pageQuery)?.tabBar) {
          // 这里replace方法无法跳转tabbar页面故改为replaceAll
          router.replaceAll({ name: unref(pageQuery)?.redirect, params })
        } else {
          router.replace({ name: unref(pageQuery)?.redirect, params })
        }
      } else {
        // 不存在则返回上一页
        router.back()
      }
    }, 1500)
  })
}
</script>

<template>
  <view class="container">
    <view class="title">登录</view>
    <view class="form-wrap">
      <form class="form" @submit="submit">
        <label class="form-item">
          <view class="form-label">邮箱:</view>
          <view class="form-element"><input name="email" :value="form.email" /></view>
        </label>
        <label class="form-item">
          <view class="form-label">密码:</view>
          <view class="form-element">
            <input type="password" name="password" :value="form.password" />
          </view>
        </label>
        <button form-type="submit" class="submit-btn" hover-class="none">登录</button>
      </form>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.container {
  width: 80%;
  margin: 0 auto;

  .title {
    padding: 320rpx 0 32rpx;
    text-align: center;
  }

  .form-wrap {
    padding: 20rpx 24rpx;
    box-shadow: 16rpx 16rpx 30rpx #e5e7eb;

    .form {
      .form-item {
        display: flex;
        align-items: center;
        height: 88rpx;
        border-bottom: 2rpx solid #dbeafe;

        .form-label {
          min-width: 96rpx;
        }

        .form-element {
          flex-grow: 1;
        }
      }

      .submit-btn {
        margin-top: 44rpx;
        font-size: 28rpx;
        color: #fff;
        background-color: #60a5fa;
        border: 4rpx solid #bfdbfe;
        border-radius: 8rpx;

        :hover {
          background-color: #3b82f6;
        }
      }
    }
  }
}
</style>
