import router from './router'
import { getSession } from './common/utils'
const writeList = ['/demo', '/jump']
router.beforeEach((to, from, next) => {
  const token = getSession('token')
  console.log('ssss',token)
  if (writeList.includes(to.path)) {
    next()
  } else {
    if (token) {
      // 已登陆
      if (to.path === '/login') {
        // 若已登录重定向至首页
        next({ path: '/' })
      } else {
        next()
      }
    } else {
      // 未登录
      if (to.path === '/login') {
        // 若已登录重定向至首页
        next()
      } else {
        next({ path: '/login' })
      }
    }
  }
})
