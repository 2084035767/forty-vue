<script setup>
import { Location } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const asideMenu = ref([
  {
    index: 'home',
    title: '用户管理',
    subs: [
      {
        title: '用户列表',
        index: 'userList',
      },
      {
        title: '用户详情',
        index: 'userDetail',
      },
    ],
  },
  {
    title: '文章',
    index: 'article',
    subs: [
      {
        title: '文章列表',
        index: 'articleList',
      },
    ],
  },
  {
    title: '商品管理',
    index: 'goods',
    subs: [
      {
        title: '商品列表',
        index: 'goodsList',
      },
    ],
  },
  {
    title: '订单管理',
    index: 'order',
    subs: [
      {
        title: '订单列表',
        index: 'orderList',
      },
    ],
  },
  {
    title: '商家管理',
    index: 'merchant',
    subs: [
      {
        title: '商家列表',
        index: 'merchantList',
      },
    ],
  },
  {
    title: '系统管理',
    index: 'system',
    subs: [
      {
        title: '系统列表',
        index: 'systemList',
      },
    ],
  },
])
</script>
<template>
  <el-menu
    :default-active="route.path"
    class="el-menu-vertical-demo"
    @select="handleSelect"
    :router="true"
  >
    <el-menu-item disabled>
      <img
        style="width: 100px"
        src="@/assets/img/element-plus-logo.svg"
        alt="Element logo"
      />
    </el-menu-item>

    <el-sub-menu
      :index="menu.index"
      v-for="menu in asideMenu"
    >
      <template #title>
        <el-icon><location /></el-icon>
        <span>{{ menu.title }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item
          :index="sub.index"
          v-for="sub in menu.subs"
          >{{ sub.title }}</el-menu-item
        >
      </el-menu-item-group>
    </el-sub-menu>
  </el-menu>
</template>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu-item.is-disabled {
  opacity: 1 !important;
}
</style>
