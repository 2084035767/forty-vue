<script setup lang='ts'>

import type { avatarListItem } from '../types';
const avatarList: Array<avatarListItem> = [
  {
    id: 1,
    path: "src/assets/image/avatar1.png",
    name: '曲江涛'
  },
  {
    id: 2,
    path: "src/assets/image/avatar2.png",
    name: '徐田敬'
  },
  {
    id: 3,
    path: "src/assets/image/avatar3.png",
    name: '赵云清'
  }
]
</script>
<template>
  <div>
    <el-card shadow="never">
      <div class="flex justify-between">
        <span class="text-md font-medium">小组成员</span>
      </div>
      <div class="flex">
        <div class="m-2" v-for="item in avatarList" :key="item.id">
          <el-avatar>
            <img :src="item.path" :alt="item.name">
          </el-avatar>
          <div>{{ item.name }}</div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<style lang='scss' scoped></style>
