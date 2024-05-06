<script setup lang='ts'>
import Segmented, { type OptionsType } from "@/components/ReSegmented";
import { useDark, useECharts } from "@pureadmin/utils";
import { computed, nextTick, ref, watch } from 'vue';
const chartRef = ref();
let curPie = ref(1); // 0商品、1文章
const optionsBasis: Array<OptionsType> = [
  {
    label: "商品"
  },
  {
    label: "文章"
  }
];

const { isDark } = useDark();

const theme = computed(() => (isDark.value ? "dark" : "light"));
const { setOptions } = useECharts(chartRef, {
  theme,
});
const props = defineProps({
  data: {
    type: Array,
    default: () => []
  }
});
watch(
  () => props,
  async () => {
    await nextTick(); // 确保DOM更新完成后再执行
    setOptions(
      {
        tooltip: {
          trigger: "item",
          // 将 tooltip 控制在图表区域里
          // confine: true
        },
        series: [
          {
            name: "商品",
            type: "pie",
            // center: ["30%", "50%"],
            data: props.data,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      }
    );
  },
  {
    deep: true,
    immediate: true
  }
);
</script>

<template>
  <div>
    <el-card shadow="never">
      <div class="flex justify-between">
        <span class="text-md font-medium">数据分布</span>
        <Segmented v-model="curPie" :options="optionsBasis" />
      </div>
      <div class="flex justify-between items-start mt-3">
        <div ref="chartRef" style="width: 100%; height: 225px" />
      </div>
    </el-card>
  </div>
</template>

<style lang='scss' scoped></style>
