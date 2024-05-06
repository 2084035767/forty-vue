export default {
  path: "/advice",
  meta: {
    icon: "ant-design:compass-filled",
    // showLink: false,
    title: "智能推荐",
    rank: 3
  },
  children: [
    {
      path: "/story",
      name: "story",
      component: () => import("@/views/user/index.vue"),
      meta: {
        title: "故事推荐"
      }
    },
    {
      path: "/goods",
      name: "goods",
      component: () => import("@/views/error/404.vue"),
      meta: {
        title: "商品推荐"
      }
    }
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
