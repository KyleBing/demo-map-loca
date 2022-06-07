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
   {
      name: 'tool',
      path: '/tool',
      component: Layout,
      redirect: '/tool/circle',
      children: [
         {
            name: 'circle',
            path: 'circle',
            component: resolve => require(['@/page/tool/circle/circle'], resolve),
         },
         {
            name: 'route',
            path: 'route',
            component: resolve => require(['@/page/tool/route/route'], resolve),
         }
      ]
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
   {
      name: 'tool',
      path: '/tool',
      meta: {
         title: '地图工具',
         showInMenu: true,
         icon: 'el-icon-position' // 菜单 icon 对应 Element UI 中的 ICON class 名
      },
      children: [
         {name: 'circle', path: 'circle', meta: {title: '范围标记', showInMenu: true},},
         {name: 'route', path: 'route', meta: {title: '路线标记', showInMenu: true},},
      ]
   },
]

export default {
   routeMap,
   router
}
