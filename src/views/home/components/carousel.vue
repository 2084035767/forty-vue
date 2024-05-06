<script setup lang='ts'>
import type { imageListItem } from '../types';
const imageList: Array<imageListItem> = [
  {
    id: 1,
    path: "src/assets/image/img1.jpg",
  },
  {
    id: 2,
    path: "src/assets/image/img2.jpg",
  },
  {
    id: 3,
    path: "src/assets/image/img3.jpg",
  },
  {
    id: 4,
    path: "src/assets/image/img4.jpg",
  },
]

</script>

<template>
      <el-carousel height="200px" direction="vertical" motion-blur>
        <el-carousel-item v-for="item in imageList" :key="item.id">
          <img :src="item.path" />
        </el-carousel-item>
      </el-carousel>
</template>

<style lang='scss' scoped></style>
