import Layout from "@/layout/layout"

const router = [
   {
      name: 'index',
      path: '/',
      component: Layout,
      redirect: '/index',
      children: [
         {
            name: 'indexIndex',
            path: 'index',
            component: resolve => require(['@/page/index/index.vue'], resolve),
         }
      ]
      // redirect: process.env.VUE_APP_DEFAULT_INDEX, // 根据环境不同，设定不同首页路径
   },
]

// 该列表用于菜单展示
const routeMap = [
   {
      name: 'index',
      path: '/index',
      meta: {
         title: '主页',
         showInMenu: true,
         icon: 'el-icon-house' // 菜单 icon 对应 Element UI 中的 ICON class 名
      },
   },
]

export default {
   routeMap,
   router
}
