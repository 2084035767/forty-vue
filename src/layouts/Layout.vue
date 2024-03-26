<script setup>
import AsideBase from '@/layouts/base/AsideBase.vue'
import MenuBase from '@/layouts/base/MenuBase.vue'
import TabsBase from '@/layouts/base/TabsBase.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <aside-base />
      </el-aside>
      <el-container>
        <el-header>
          <menu-base />
        </el-header>
        <el-main>
          <tabs-base>
            <!-- <RouterView/> -->
          </tabs-base>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.el-main {
  padding-top: 0;
}
</style>
