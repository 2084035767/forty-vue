export default {
  path: "/system",
  meta: {
    icon: "ant-design:setting-filled",
    // showLink: false,
    title: "系统管理",
    rank: 1
  },
  children: [
    {
      path: "/user",
      name: "user",
      component: () => import("@/views/user/index.vue"),
      meta: {
        title: "用户管理"
      }
    },
    {
      path: "/role",
      name: "role",
      component: () => import("@/views/error/404.vue"),
      meta: {
        title: "角色管理"
      }
    },
    {
      path: "/notice",
      name: "notice",
      component: () => import("@/views/error/500.vue"),
      meta: {
        title: "公告管理"
      }
    },
    {
      path: "/story",
      name: "story",
      component: () => import("@/views/error/500.vue"),
      meta: {
        title: "故事管理"
      }
    },
    {
      path: "/goods",
      name: "goods",
      component: () => import("@/views/error/500.vue"),
      meta: {
        title: "商品管理"
      }
    },
    {
      path: "/order",
      name: "order",
      component: () => import("@/views/error/500.vue"),
      meta: {
        title: "订单管理"
      }
    }
  ]
} satisfies RouteConfigsTable;
