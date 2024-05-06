<script setup lang='ts'>
import Document from "@iconify-icons/ep/document";

const operateList = [
  {
    id: 1,
    icon: Document,
    title: "内容管理",
    path: "content"
  },
  {
    id: 2,
    icon: Document,
    title: "内容管理",
    path: "content"
  },
  {
    id: 3,
    icon: Document,
    title: "内容管理",
    path: "content"
  },
  {
    id: 4,
    icon: Document,
    title: "内容管理",
    path: "content"
  },
  {
    id: 5,
    icon: Document,
    title: "内容管理",
    path: "content"
  },
  {
    id: 6,
    icon: Document,
    title: "内容管理",
    path: "content"
  }
]
</script>

<template>
  <div><el-card shadow="never">
      <div class="flex justify-between mb-4">
        <span class="text-md font-medium">快捷操作</span>
      </div>
      <div class="grid grid-cols-3 gap-4 justify-items-center">
        <div v-for="item in operateList" :key="item.id">
          <el-button class="mb-2 ml-1.5 bg-slate-100">
            <IconifyIconOffline :icon="item.icon" class="size-4" />
          </el-button>

          <div class="text-xs text-center">{{ item.title }}</div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<style lang='scss' scoped></style>