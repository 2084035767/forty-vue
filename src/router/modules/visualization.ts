export default {
  path: "/visualization",
  meta: {
    icon: "ant-design:pie-chart-filled",
    // showLink: false,
    title: "数据可视化",
    rank: 4
  },
  children: [
    {
      path: "/data/analysis",
      name: "dataAnalysis",
      component: () => import("@/views/user/index.vue"),
      meta: {
        title: "数据分析"
      }
    },
    {
      path: "/data/report",
      name: "dataReport",
      component: () => import("@/views/user/index.vue"),
      meta: {
        title: "数据报表"
      }
    }
    // {
    //   path: "/error/404",
    //   name: "404",
    //   component: () => import("@/views/error/404.vue"),
    //   meta: {
    //     title: "404"
    //   }
    // },
    // {
    //   path: "/error/500",
    //   name: "500",
    //   component: () => import("@/views/error/500.vue"),
    //   meta: {
    //     title: "500"
    //   }
    // }
  ]
} satisfies RouteConfigsTable;
