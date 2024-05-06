<script setup lang='ts'>
import { defineComponent } from "vue";
defineComponent({
  name: "ReRow"
})
</script>

<template>
  <el-row v-motion :initial="{
    opacity: 0,
    y: 100
  }" :enter="{
    opacity: 1,
    y: 0,
    transition: {
      delay: 400
    }
  }" :gutter="6" class="mb-[18px]" justify="space-around">
    <slot />
  </el-row>
</template>

<style lang='scss' scoped></style>
