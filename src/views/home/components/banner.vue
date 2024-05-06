<script setup lang='ts'>
import Document from "@iconify-icons/ep/document";
</script>

<template>
  <div> <el-card shadow="never">
      <div class="flex justify-between">
        <span class="text-lg font-medium">欢迎回来，超级管理员</span>
      </div>
      <el-divider />
      <div class="flex flex-col justify-between">
        <div class="flex">
          <el-card shadow="never" class="basis-1/2 flex justify-center">
            <div class="inline-block mr-5">
              <IconifyIconOffline :icon="Document" class="size-10" />
            </div>
            <div class="inline-block">
              <el-statistic title="Daily active users" :value="268500" />
            </div>
          </el-card>
          <el-divider direction="vertical" />
          <el-card shadow="never" class="basis-1/2 flex justify-center">
            <div class="inline-block mr-5">
              <IconifyIconOffline :icon="Document" class="size-10" />
            </div>
            <div class="inline-block">
              <el-statistic title="Daily active users" :value="268500" />
            </div>
          </el-card>
        </div>

        <div class="flex">
          <el-card shadow="never" class="basis-1/2 flex justify-center">
            <div class="inline-block mr-5">
              <IconifyIconOffline :icon="Document" class="size-10" />
            </div>
            <div class="inline-block">
              <el-statistic title="Daily active users" :value="268500" />
            </div>
          </el-card>
          <el-divider direction="vertical" />
          <el-card shadow="never" class="basis-1/2 flex justify-center">
            <div class="inline-block mr-5">
              <IconifyIconOffline :icon="Document" class="size-10" />
            </div>
            <div class="inline-block">
              <el-statistic title="Daily active users" :value="268500" />
            </div>
          </el-card>
        </div>
      </div>
    </el-card>
  </div>
</template>

<style lang='scss' scoped>
/* 重置 el-divider */
.el-divider--vertical {
  height: 4em;
}
</style>
