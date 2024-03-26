<script setup>
import { Bell, FullScreen, Search, SwitchButton } from '@element-plus/icons-vue'

import { ref } from 'vue'

const activeName = ref('first')

const handleClick = (tab, event) => {
  console.log(tab, event)
}
const visibleUpdate = () => {
  visible = !visible
}
</script>

<template>
  <el-menu
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
  >
    <el-menu-item disabled> 首页 </el-menu-item>
    <el-menu-item disabled>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页 </el-breadcrumb-item>
        <el-breadcrumb-item>标签</el-breadcrumb-item>
        <el-breadcrumb-item>标签</el-breadcrumb-item>
      </el-breadcrumb>
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item>
      <el-icon><Search /></el-icon>
    </el-menu-item>
    <el-menu-item index="1">
      <el-popover
        :visible="visible"
        placement="bottom"
        :width="250"
      >
        <template #reference>
          <el-icon @click="visibleUpdate">
            <el-badge
              :value="12"
              class="item"
            >
              <Bell />
            </el-badge>
          </el-icon>
        </template>
        <template #default>
          <el-tabs
            v-model="activeName"
            class="demo-tabs"
            @tab-click="handleClick"
          >
            <el-tab-pane
              label="通知(3)"
              name="first"
              >User</el-tab-pane
            >
            <el-tab-pane
              label="消息(3)"
              name="second"
              >Config</el-tab-pane
            >
            <el-tab-pane
              label="待办(3)"
              name="third"
              >Role</el-tab-pane
            >
          </el-tabs>
        </template>
      </el-popover>
    </el-menu-item>
    <el-menu-item index="2"
      ><el-icon><FullScreen /></el-icon>
    </el-menu-item>
    <el-sub-menu index="3">
      <template #title>
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        /><span>
          {{ 'admin' }}
        </span></template
      >

      <el-menu-item index="3-1">
        <el-icon><SwitchButton /></el-icon>
        退出登录
      </el-menu-item>
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
.el-menu-item.is-disabled {
  opacity: 1 !important;
}

.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
