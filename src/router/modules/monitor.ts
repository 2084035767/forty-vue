export default {
  path: "/monitor",
  meta: {
    icon: "ant-design:security-scan-filled",
    // showLink: false,
    title: "系统监控",
    rank: 2
  },
  children: [
    {
      path: "/login/log",
      name: "loginlog",
      component: () => import("@/views/user/index.vue"),
      meta: {
        title: "登录日志"
      }
    },
    {
      path: "/system/log",
      name: "systemlog",
      component: () => import("@/views/user/index.vue"),
      meta: {
        title: "系统日志"
      }
    }
  ]
} satisfies RouteConfigsTable;
