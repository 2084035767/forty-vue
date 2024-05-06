<script setup lang='ts'>
import { useDark, useECharts } from "@pureadmin/utils";
import { computed, nextTick, ref, watch, type PropType } from 'vue';
const chartRef = ref();

const props = defineProps({
  goodsData: {
    type: Array as PropType<Array<number>>,
    default: () => []
  },
  storyData: {
    type: Array as PropType<Array<number>>,
    default: () => []
  }
});
const { isDark } = useDark();

const theme = computed(() => (isDark.value ? "dark" : "light"));

const { setOptions } = useECharts(chartRef, {
  theme,
});

watch(
  () => props,
  async () => {
    await nextTick(); // 确保DOM更新完成后再执行
    setOptions({
      container: ".bar-card",
      color: ["#41b6ff", "#e85f33"],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "none"
        }
      },
      grid: {
        top: "20px",
        left: "50px",
        right: 0
      },
      legend: {
        data: ["商品", "文章"],
        textStyle: {
          color: "#606266",
          fontSize: "0.875rem"
        },
        bottom: 0
      },
      xAxis: [
        {
          type: "category",
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          axisLabel: {
            fontSize: "0.875rem"
          },
          axisPointer: {
            type: "shadow"
          }
        }
      ],
      yAxis: [
        {
          type: "value",
          axisLabel: {
            fontSize: "0.875rem"
          },
          splitLine: {
            show: false // 去网格线
          }
          // name: "单位: 个"
        }
      ],
      series: [
        {
          name: "商品",
          type: "bar",
          barWidth: 10,
          itemStyle: {
            color: "#41b6ff",
            borderRadius: [10, 10, 0, 0]
          },
          data: props.goodsData
        },
        {
          name: "文章",
          type: "bar",
          barWidth: 10,
          itemStyle: {
            color: "#e86033ce",
            borderRadius: [10, 10, 0, 0]
          },
          data: props.storyData
        }
      ]
    });
  },
  {
    deep: true,
    immediate: true
  }
);
</script>

<template>

  <div class="flex justify-between items-start mt-3">
    <div ref="chartRef" style="width: 100%; height: 365px" />
  </div>
</template>

<style lang='scss' scoped></style>
