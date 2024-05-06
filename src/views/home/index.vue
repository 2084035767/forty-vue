<script setup lang="ts">
import ReCol from "@/components/ReCol";
import ReRow from "@/components/ReRow/index.vue";
import Banner from "./components/banner.vue";
import Carousel from "./components/carousel.vue";
import Chart from "./components/chart.vue";
import Group from "./components/group.vue";
import Notice from "./components/notice.vue";
import Operate from "./components/operate.vue";
import Pie from "./components/pie.vue";
import Rank from "./components/rank.vue";
import Qrcode from "./components/qrcode.vue";
import Segmented, { type OptionsType } from "@/components/ReSegmented";
// import { useDark } from "@pureadmin/utils";
import { ref } from "vue";
const chart = ref();
let curWeek = ref(1); // 0上周、1本周
defineExpose({
  curWeek
})
const optionsBasis: Array<OptionsType> = [
  {
    label: "上周"
  },
  {
    label: "本周"
  }
];
// const { isDark } = useDark();
const chartData = [
  {
    goods: [2101, 5288, 4239, 4962, 6752, 5208, 7450],
    story: [2216, 1148, 1255, 1788, 4821, 1973, 4379]
  },
  {
    goods: [2101, 3280, 4400, 4962, 5752, 6889, 7600],
    story: [2116, 3148, 3255, 3788, 4821, 4970, 5390]
  }
];

const pieData = [
  { value: 1067, name: "手机" },
  { value: 2037, name: "手表" },
  { value: 859, name: "梳子" },
  { value: 600, name: "卡牌" },
  { value: 403, name: "钢笔" }
];

</script>

<template>
  <div class="main">
    <div class="layout-left">
      <re-row>
        <re-col :value="24" :xs="24">
          <banner />
        </re-col>
      </re-row>
      <re-row>
        <re-col :value="24" :xs="24">
          <el-card class="bar-card" shadow="never">
            <div class="flex justify-between">
              <span class="text-md font-medium">分析概览</span>
              <Segmented v-model="curWeek" :options="optionsBasis" />
            </div>
            <chart :goodsData="chartData[curWeek].goods" :storyData="chartData[curWeek].story"></chart>
          </el-card>
        </re-col>
      </re-row>
      <re-row>
        <re-col :value="12" :xs="24">
          <rank />
        </re-col>
        <re-col :value="12" :xs="24">
          <pie :data="pieData" />
        </re-col>
      </re-row>
    </div>
    <div class="layout-right">
      <re-row>
        <re-col :value="22" :xs="24">
          <operate></operate>
        </re-col>
      </re-row>
      <re-row>
        <re-col :value="22" :xs="24">
          <notice></notice>
        </re-col>
      </re-row>
      <re-row>
        <re-col :value="22" :xs="24">
          <carousel></carousel>
        </re-col>
      </re-row>
      <re-row>
        <re-col :value="22" :xs="24">
          <group></group>
        </re-col>
      </re-row>
      <re-row>
        <re-col :value="22" :xs="24">
          <qrcode></qrcode>
        </re-col>
      </re-row>
    </div>
  </div>
</template>

<style lang="scss" scoped>
:deep(.el-card) {
  --el-card-border-color: none;

  /* 解决概率进度条宽度 */
  .el-progress--line {
    width: 85%;
  }

  /* 解决概率进度条字体大小 */
  .el-progress-bar__innerText {
    font-size: 15px;
  }

  /* 隐藏 el-scrollbar 滚动条 */
  .el-scrollbar__bar {
    display: none;
  }

  /* el-timeline 每一项上下、左右边距 */
  .el-timeline-item {
    margin: 0 6px;
  }
}

.main-content {
  margin: 20px 20px 0 !important;
}

.main {
  display: flex;

  .layout-left {
    flex: 7;
  }

  .layout-right {
    flex: 3;
  }
}
</style>
