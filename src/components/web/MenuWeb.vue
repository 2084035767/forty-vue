<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const route = useRoute()
const input2 = ref('')

const activeIndex = route.path
const handleSelect = (key, keyPath) => {
  router.push(key)
}
</script>

<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item index="0">
      <!-- <img
        style="width: 100px"
        src="/images/element-plus-logo.svg"
        alt="Element logo"
      /> -->
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item disabled class="search-input"
      ><el-input v-model="input2" class="w-50 m-2" placeholder="Type something"
    /></el-menu-item>
    <el-menu-item index="/home">主页</el-menu-item>
    <el-menu-item index="/commodity">商品</el-menu-item>
    <el-menu-item index="/story">故事</el-menu-item>
    <el-sub-menu index="/person">
      <template #title>
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      /></template>
      <el-menu-item index="5-1">个人信息</el-menu-item>
      <el-menu-item index="5-2">个人订单</el-menu-item>
      <el-menu-item index="5-3">退出登录</el-menu-item>
      <!-- <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu> -->
    </el-sub-menu>
  </el-menu>
</template>

<style lang="scss" scoped>
.flex-grow {
  flex-grow: 1;
}
.el-menu-demo {
  /* width: 100%;
  background-color: #545c64; */
  margin-bottom: 20px;
}
.search-input {
  opacity: 1;
}
</style>
