<script setup lang='ts'>
import Segmented, { type OptionsType } from "@/components/ReSegmented";
import { ref } from "vue";
let curRank = ref(1); // 0商品、1文章
const optionsBasis: Array<OptionsType> = [
  {
    label: "商品"
  },
  {
    label: "文章"
  }
];
const tableData = ref([
  {
    id: 1,
    title: "Tom",
    like: "No. 189"
  },
  {
    id: 2,
    title: "Jack",
    like: "No. 189"
  },
  {
    id: 3,
    title: "Dick",
    like: "No. 189"
  },
  {
    id: 4,
    title: "Harry",
    like: "No. 189"
  },
  {
    id: 5,
    title: "Sam",
    like: "No. 189"
  }
]);
const columns: TableColumnList = [
  {
    label: "排名",
    prop: "id"
  },
  {
    label: "标题",
    prop: "title"
  },
  {
    label: "喜欢",
    prop: "like"
  }
];
</script>

<template>
  <div>
    <el-card shadow="never">
      <div class="flex justify-between">
        <span class="text-md font-medium">热门排行（Top5）</span>
        <Segmented v-model="curRank" :options="optionsBasis" />
      </div>
      <div>
        <pure-table :data="tableData" :columns="columns"></pure-table>
      </div>
    </el-card>
  </div>
</template>

<style lang='scss' scoped></style>
